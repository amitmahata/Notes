// =========================================
// AI NOTES — A HANDWRITTEN BOOK
// script.js - Book loading, structure, navigation, contents & interactivity
//
// book.js lists the chapters and topics; each topic file under chapters/
// registers its pages with AIBook.topic(id, html). This script loads those
// files, assembles them into <main id="notebookContainer"> as
//   .book-chapter  >  .book-topic  >  article.notebook-page
// and generates everything else (Contents page, chapter openers, sidebar
// tree, page headers, dots, prev/next, deep links) from that markup.
// =========================================

const BOOK = {
  title: 'AI Notes',
  subtitle: '',
  author: '',
  chapters: [],   // { num, id, title, subtitle, icon, comingSoon, el, opener, topics: [] }
  pages: []       // { num, title, subtitle, keywords, tag, tagColor, el, chapter, topic, indexInTopic }
};

// Reading order: Contents → Chapter opener → its pages → next chapter opener …
let slots = [];        // { type: 'contents' | 'chapter' | 'page', el, chapter?, page? }
let currentSlot = 0;

let TOTAL_PAGES = 0;   // content pages only (matches ?page=N in the search index)
let currentPage = 0;   // 0 while on the Contents page or a chapter opener

const LAST_PAGE_KEY = 'ai_book_last_page';

// ---------- Small helpers ----------

function esc(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function plural(n, word) {
  return `${n} ${word}${n === 1 ? '' : 's'}`;
}

function spiralHoles() {
  const holes = document.createElement('div');
  holes.className = 'spiral-holes';
  holes.innerHTML = '<div class="hole"></div>'.repeat(15);
  return holes;
}

function pageRange(topic) {
  const first = topic.pages[0].num;
  const last = topic.pages[topic.pages.length - 1].num;
  return first === last ? `p. ${first}` : `p. ${first}–${last}`;
}

// "<topic-id>/<n>" → global page number (stable when topics are added before it)
function pageFromTopicRef(ref) {
  const m = String(ref || '').match(/^([\w-]+)\/(\d+)$/);
  if (!m) return 0;
  const page = BOOK.pages.find(p => p.topic.id === m[1] && p.indexInTopic === parseInt(m[2], 10));
  return page ? page.num : 0;
}

function readLastPage() {
  try {
    const saved = localStorage.getItem(LAST_PAGE_KEY);
    const n = /^\d+$/.test(saved || '') ? parseInt(saved, 10) : pageFromTopicRef(saved);
    return n >= 1 && n <= TOTAL_PAGES ? n : 0;
  } catch (e) {
    return 0;
  }
}

function saveLastPage(n) {
  const p = BOOK.pages[n - 1];
  try { localStorage.setItem(LAST_PAGE_KEY, `${p.topic.id}/${p.indexInTopic}`); } catch (e) { /* storage unavailable */ }
}

// ---------- Load the topic files listed in book.js ----------

const TOPIC_HTML = {};

// Called by every chapters/**/*.js file
window.AIBook = {
  topic(id, html) { TOPIC_HTML[id] = html; }
};

function loadScript(src) {
  return new Promise(resolve => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;   // run in manifest order
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

// Plain <script> tags (not fetch) so the book also opens from file://
function loadTopics() {
  const manifest = window.AI_BOOK || { chapters: [] };
  const topics = manifest.chapters.flatMap(c => c.topics || []);
  return Promise.all(topics.map(t => loadScript(t.file)));
}

function setData(el, data) {
  Object.entries(data).forEach(([k, v]) => { if (v != null) el.dataset[k] = v; });
}

function missingTopicPage(topic) {
  return `
    <article class="notebook-page" data-title="Couldn't load this topic" data-tag="Error" data-tag-color="red">
      <div class="page-content">
        <h1 class="note-title-red">${esc(topic.icon)} ${esc(topic.title)}</h1>
        <p class="book-load-error">Couldn't load <code>${esc(topic.file)}</code>. Check that the file exists and that it calls
          <code>AIBook.topic('${esc(topic.id)}', …)</code> with the same id as in book.js.</p>
      </div>
    </article>`;
}

// Turn the manifest + loaded topic HTML into chapter/topic/page markup
function renderBookMarkup() {
  const manifest = window.AI_BOOK || { chapters: [] };
  const main = document.getElementById('notebookContainer');
  setData(main, { bookTitle: manifest.title, bookSubtitle: manifest.subtitle, bookAuthor: manifest.author });
  main.innerHTML = '';

  manifest.chapters.forEach(ch => {
    const chapterEl = document.createElement('section');
    chapterEl.className = 'book-chapter';
    setData(chapterEl, { id: ch.id, title: ch.title, subtitle: ch.subtitle, icon: ch.icon });
    if (!ch.topics || !ch.topics.length) chapterEl.dataset.status = 'coming-soon';

    (ch.topics || []).forEach(t => {
      const topicEl = document.createElement('section');
      topicEl.className = 'book-topic';
      setData(topicEl, { id: t.id, title: t.title, subtitle: t.subtitle, icon: t.icon });
      topicEl.innerHTML = TOPIC_HTML[t.id] || missingTopicPage(t);
      chapterEl.appendChild(topicEl);
    });

    main.appendChild(chapterEl);
  });
}

// ---------- Build the book model from the markup ----------

function readBookStructure() {
  const main = document.getElementById('notebookContainer');
  BOOK.title = main.dataset.bookTitle || BOOK.title;
  BOOK.subtitle = main.dataset.bookSubtitle || '';
  BOOK.author = main.dataset.bookAuthor || '';

  main.querySelectorAll(':scope > .book-chapter').forEach((chapterEl, ci) => {
    const chapter = {
      num: ci + 1,
      id: chapterEl.dataset.id || `chapter-${ci + 1}`,
      title: chapterEl.dataset.title || `Chapter ${ci + 1}`,
      subtitle: chapterEl.dataset.subtitle || '',
      icon: chapterEl.dataset.icon || '📘',
      el: chapterEl,
      topics: []
    };

    chapterEl.querySelectorAll(':scope > .book-topic').forEach((topicEl, ti) => {
      const topic = {
        num: `${chapter.num}.${ti + 1}`,
        id: topicEl.dataset.id || `topic-${chapter.num}-${ti + 1}`,
        title: topicEl.dataset.title || `Topic ${chapter.num}.${ti + 1}`,
        subtitle: topicEl.dataset.subtitle || '',
        icon: topicEl.dataset.icon || '📝',
        el: topicEl,
        chapter,
        pages: []
      };

      topicEl.querySelectorAll(':scope > .notebook-page').forEach((pageEl, pi) => {
        const page = {
          num: BOOK.pages.length + 1,
          title: pageEl.dataset.title || `Page ${pi + 1}`,
          subtitle: pageEl.dataset.subtitle || '',
          keywords: pageEl.dataset.keywords || '',
          tag: pageEl.dataset.tag || '',
          tagColor: pageEl.dataset.tagColor || 'slate',
          el: pageEl,
          chapter,
          topic,
          indexInTopic: pi + 1
        };
        topic.pages.push(page);
        BOOK.pages.push(page);
      });

      if (topic.pages.length) chapter.topics.push(topic);
    });

    chapter.comingSoon = chapterEl.dataset.status === 'coming-soon' || chapter.topics.length === 0;
    BOOK.chapters.push(chapter);
  });

  TOTAL_PAGES = BOOK.pages.length;
}

// ---------- Decorate authored pages (holes, header, end-of-topic card) ----------

function decoratePage(page) {
  const el = page.el;
  el.id = `page-${page.num}`;
  el.classList.remove('active');

  let inner = el.querySelector(':scope > .notebook-inner');
  if (!inner) {
    inner = document.createElement('div');
    inner.className = 'notebook-inner';
    while (el.firstChild) inner.appendChild(el.firstChild);
    el.appendChild(inner);
  }
  if (!inner.querySelector(':scope > .spiral-holes')) inner.prepend(spiralHoles());

  let content = inner.querySelector(':scope > .page-content');
  if (!content) {
    content = document.createElement('div');
    content.className = 'page-content';
    [...inner.childNodes].forEach(n => {
      if (!(n.classList && n.classList.contains('spiral-holes'))) content.appendChild(n);
    });
    inner.appendChild(content);
  }

  const header = document.createElement('div');
  header.className = 'page-header';
  header.innerHTML = `
    <button class="page-breadcrumb" type="button" onclick="goToChapter(${page.chapter.num})" title="Open Chapter ${page.chapter.num}">
      <span class="crumb-chapter">Ch ${page.chapter.num}</span>
      <span class="crumb-sep">›</span>
      <span class="crumb-topic">${esc(page.topic.title)}</span>
    </button>
    <span class="page-num" title="Page ${page.indexInTopic} of ${page.topic.pages.length} in this topic · book page ${page.num}">${page.indexInTopic} / ${page.topic.pages.length}</span>`;

  // Keep the iPad note strip on top when a page starts with one
  const first = content.firstElementChild;
  if (first && first.classList.contains('ipad-note-header')) first.after(header);
  else content.prepend(header);

  if (page.indexInTopic === page.topic.pages.length) {
    content.appendChild(buildTopicEnd(page.topic));
  }
}

function nextTopicAfter(topic) {
  const chapterIdx = BOOK.chapters.indexOf(topic.chapter);
  const topicIdx = topic.chapter.topics.indexOf(topic);
  if (topicIdx + 1 < topic.chapter.topics.length) {
    return { topic: topic.chapter.topics[topicIdx + 1] };
  }
  for (let i = chapterIdx + 1; i < BOOK.chapters.length; i++) {
    if (!BOOK.chapters[i].comingSoon) return { chapter: BOOK.chapters[i] };
  }
  return null;
}

function buildTopicEnd(topic) {
  const box = document.createElement('div');
  box.className = 'topic-end';
  const next = nextTopicAfter(topic);
  let nextHtml;
  if (next && next.topic) {
    nextHtml = `<button type="button" class="topic-end-btn primary" onclick="goToPage(${next.topic.pages[0].num})">Next topic: ${esc(next.topic.num)} ${esc(next.topic.title)} →</button>`;
  } else if (next && next.chapter) {
    nextHtml = `<button type="button" class="topic-end-btn primary" onclick="goToChapter(${next.chapter.num})">Next: Chapter ${next.chapter.num} · ${esc(next.chapter.title)} →</button>`;
  } else {
    nextHtml = `<span class="topic-end-note">More chapters coming soon ✍️</span>`;
  }
  box.innerHTML = `
    <div class="topic-end-title">✔ End of topic ${esc(topic.num)} · ${esc(topic.title)}</div>
    <div class="topic-end-actions">
      ${nextHtml}
      <button type="button" class="topic-end-btn" onclick="goToContents()">📖 Back to contents</button>
    </div>`;
  return box;
}

// ---------- Generated pages: Contents + Chapter openers ----------

function buildContentsPage() {
  const el = document.createElement('article');
  el.className = 'notebook-page book-front contents-page';
  el.id = 'contents';

  const readyChapters = BOOK.chapters.filter(c => !c.comingSoon);
  const topicCount = readyChapters.reduce((n, c) => n + c.topics.length, 0);

  const chaptersHtml = BOOK.chapters.map(chapter => {
    if (chapter.comingSoon) {
      return `
        <li class="toc-chapter coming-soon">
          <div class="toc-chapter-head">
            <span class="toc-chapter-num">Chapter ${chapter.num}</span>
            <span class="toc-chapter-title">${esc(chapter.icon)} ${esc(chapter.title)}</span>
            <span class="toc-soon-stamp">Coming soon</span>
          </div>
          ${chapter.subtitle ? `<p class="toc-chapter-sub">${esc(chapter.subtitle)}</p>` : ''}
        </li>`;
    }
    const pageCount = chapter.topics.reduce((n, t) => n + t.pages.length, 0);
    const topicsHtml = chapter.topics.map(topic => `
      <li class="toc-topic">
        <button type="button" class="toc-topic-head" onclick="goToPage(${topic.pages[0].num})">
          <span class="toc-topic-num">${esc(topic.num)}</span>
          <span class="toc-topic-title">${esc(topic.icon)} ${esc(topic.title)}</span>
          <span class="toc-leader"></span>
          <span class="toc-topic-range">${pageRange(topic)}</span>
        </button>
        ${topic.subtitle ? `<p class="toc-topic-sub">${esc(topic.subtitle)}</p>` : ''}
        <ol class="toc-pages">
          ${topic.pages.map(p => `
            <li><button type="button" class="toc-page-link" onclick="goToPage(${p.num})">
              <span class="toc-page-idx">${p.indexInTopic}.</span> ${esc(p.title)}
            </button></li>`).join('')}
        </ol>
      </li>`).join('');

    return `
      <li class="toc-chapter">
        <button type="button" class="toc-chapter-head" onclick="goToChapter(${chapter.num})">
          <span class="toc-chapter-num">Chapter ${chapter.num}</span>
          <span class="toc-chapter-title">${esc(chapter.icon)} ${esc(chapter.title)}</span>
          <span class="toc-chapter-meta">${plural(chapter.topics.length, 'topic')} · ${plural(pageCount, 'page')}</span>
        </button>
        ${chapter.subtitle ? `<p class="toc-chapter-sub">${esc(chapter.subtitle)}</p>` : ''}
        <ol class="toc-topics">${topicsHtml}</ol>
      </li>`;
  }).join('');

  el.innerHTML = `
    <div class="notebook-inner">
      <div class="page-content">
        <div class="book-cover">
          <div class="cover-kicker">✍️ A handwritten book${BOOK.author ? ` by ${esc(BOOK.author)}` : ''}</div>
          <h1 class="cover-title">${esc(BOOK.title)}</h1>
          ${BOOK.subtitle ? `<p class="cover-subtitle">${esc(BOOK.subtitle)}</p>` : ''}
          <div class="cover-stats">
            <span>${plural(BOOK.chapters.length, 'chapter')}</span>
            <span>${plural(topicCount, 'topic')}</span>
            <span>${plural(TOTAL_PAGES, 'page')}</span>
          </div>
          <div class="cover-actions" id="coverActions"></div>
        </div>

        <h2 class="note-section-red contents-heading"># Contents</h2>
        <ol class="book-toc">${chaptersHtml}</ol>

        <div class="contents-hint">
          Tip: <kbd>←</kbd> <kbd>→</kbd> turn pages · <kbd>T</kbd> chapters panel · <kbd>C</kbd> contents · <kbd>Ctrl</kbd>+<kbd>K</kbd> search
        </div>
      </div>
    </div>`;
  el.querySelector('.notebook-inner').prepend(spiralHoles());
  return el;
}

function renderCoverActions() {
  const box = document.getElementById('coverActions');
  if (!box || !TOTAL_PAGES) return;
  const last = readLastPage();
  let html = `<button type="button" class="cover-btn primary" onclick="goToChapter(${BOOK.chapters.find(c => !c.comingSoon).num})">Start reading →</button>`;
  if (last > 1) {
    const p = BOOK.pages[last - 1];
    html = `<button type="button" class="cover-btn primary" onclick="goToPage(${last})">Continue reading → Ch ${p.chapter.num} › ${esc(p.topic.title)} · ${p.indexInTopic}/${p.topic.pages.length}</button>
            <button type="button" class="cover-btn" onclick="goToChapter(1)">Start from the beginning</button>`;
  }
  box.innerHTML = html;
}

function buildChapterOpener(chapter) {
  const el = document.createElement('article');
  el.className = 'notebook-page book-front chapter-opener';
  el.id = `chapter-${chapter.num}`;
  const pageCount = chapter.topics.reduce((n, t) => n + t.pages.length, 0);

  el.innerHTML = `
    <div class="notebook-inner">
      <div class="page-content">
        <div class="chapter-hero">
          <div class="chapter-kicker">Chapter ${chapter.num}</div>
          <div class="chapter-icon">${esc(chapter.icon)}</div>
          <h1 class="chapter-title">${esc(chapter.title)}</h1>
          ${chapter.subtitle ? `<p class="chapter-sub">${esc(chapter.subtitle)}</p>` : ''}
          <div class="cover-stats">
            <span>${plural(chapter.topics.length, 'topic')}</span>
            <span>${plural(pageCount, 'page')}</span>
          </div>
        </div>

        <h2 class="note-section-red"># In this chapter</h2>
        <div class="chapter-topic-list">
          ${chapter.topics.map(topic => `
            <button type="button" class="chapter-topic-card" onclick="goToPage(${topic.pages[0].num})">
              <span class="ctc-num">${esc(topic.num)}</span>
              <span class="ctc-body">
                <span class="ctc-title">${esc(topic.icon)} ${esc(topic.title)}</span>
                ${topic.subtitle ? `<span class="ctc-sub">${esc(topic.subtitle)}</span>` : ''}
                <span class="ctc-pages">${topic.pages.map(p => `<span>${p.indexInTopic}. ${esc(p.title)}</span>`).join('')}</span>
              </span>
              <span class="ctc-meta">${plural(topic.pages.length, 'page')} →</span>
            </button>`).join('')}
        </div>

        <div class="chapter-actions">
          <button type="button" class="cover-btn primary" onclick="goToPage(${chapter.topics[0].pages[0].num})">Begin Chapter ${chapter.num} →</button>
          <button type="button" class="cover-btn" onclick="goToContents()">📖 Contents</button>
        </div>
      </div>
    </div>`;
  el.querySelector('.notebook-inner').prepend(spiralHoles());
  return el;
}

// ---------- Sidebar: Chapter → Topic → Page tree ----------

function buildSidebarTree() {
  const list = document.getElementById('sidebarTopicsList');
  if (!list) return;

  const parts = [`
    <button type="button" class="tree-link tree-contents" data-slot="contents" onclick="goToContents()">
      <span>📖 Contents</span>
      <span class="tree-meta">${plural(TOTAL_PAGES, 'page')}</span>
    </button>`];

  BOOK.chapters.forEach(chapter => {
    if (chapter.comingSoon) {
      parts.push(`
        <div class="tree-chapter coming-soon">
          <div class="tree-chapter-summary">
            <span class="tree-chapter-num">Ch ${chapter.num}</span>
            <span class="tree-chapter-title">${esc(chapter.icon)} ${esc(chapter.title)}</span>
            <span class="tree-soon">Soon</span>
          </div>
        </div>`);
      return;
    }

    const topicsHtml = chapter.topics.map(topic => `
      <details class="tree-topic" data-topic="${esc(topic.id)}" open>
        <summary class="tree-topic-summary">
          <span class="tree-topic-num">${esc(topic.num)}</span>
          <span class="tree-topic-title">${esc(topic.title)}</span>
          <span class="tree-meta">${topic.pages.length}p</span>
        </summary>
        <div class="tree-pages">
          ${topic.pages.map(p => `
            <div class="sidebar-topic-item" data-page="${p.num}" data-keywords="${esc(p.keywords)}" onclick="goToPage(${p.num})">
              <div class="topic-left">
                <span class="topic-num-badge">${p.indexInTopic}</span>
                <div class="topic-info">
                  <span class="topic-title">${esc(p.title)}</span>
                  <span class="topic-subtitle">${esc(p.subtitle)}</span>
                </div>
              </div>
              ${p.tag ? `<span class="topic-tag-pill tag-${esc(p.tagColor)}">${esc(p.tag)}</span>` : ''}
            </div>`).join('')}
        </div>
      </details>`).join('');

    parts.push(`
      <details class="tree-chapter" data-chapter="${chapter.num}" open>
        <summary class="tree-chapter-summary">
          <span class="tree-chapter-num">Ch ${chapter.num}</span>
          <span class="tree-chapter-title">${esc(chapter.icon)} ${esc(chapter.title)}</span>
          <span class="tree-chapter-open" role="button" title="Open chapter page" onclick="event.preventDefault(); event.stopPropagation(); goToChapter(${chapter.num})">↗</span>
        </summary>
        ${topicsHtml}
      </details>`);
  });

  list.innerHTML = parts.join('');

  const input = document.getElementById('topicSearchInput');
  if (input) input.addEventListener('input', updateTreeVisibility);
}

// Hide topics/chapters with no matching pages while searching; open matches
function updateTreeVisibility() {
  const input = document.getElementById('topicSearchInput');
  const searching = !!(input && input.value.trim());

  document.querySelectorAll('#sidebarTopicsList .tree-topic').forEach(topicEl => {
    const visible = [...topicEl.querySelectorAll('.sidebar-topic-item')].some(i => i.style.display !== 'none');
    topicEl.style.display = !searching || visible ? '' : 'none';
    if (searching && visible) topicEl.open = true;
  });

  document.querySelectorAll('#sidebarTopicsList .tree-chapter').forEach(chapterEl => {
    if (chapterEl.classList.contains('coming-soon')) {
      const title = chapterEl.textContent.toLowerCase();
      chapterEl.style.display = !searching || title.includes(input.value.trim().toLowerCase()) ? '' : 'none';
      return;
    }
    const visible = [...chapterEl.querySelectorAll('.tree-topic')].some(t => t.style.display !== 'none');
    chapterEl.style.display = !searching || visible ? '' : 'none';
    if (searching && visible) chapterEl.open = true;
  });

  const contentsLink = document.querySelector('#sidebarTopicsList .tree-contents');
  if (contentsLink) contentsLink.style.display = searching ? 'none' : '';
}

// ---------- Assemble ----------

function buildBook() {
  renderBookMarkup();
  readBookStructure();
  const main = document.getElementById('notebookContainer');

  BOOK.pages.forEach(decoratePage);

  const contents = buildContentsPage();
  main.prepend(contents);
  slots.push({ type: 'contents', el: contents });

  BOOK.chapters.forEach(chapter => {
    if (chapter.comingSoon) return;
    chapter.opener = buildChapterOpener(chapter);
    chapter.el.prepend(chapter.opener);
    slots.push({ type: 'chapter', el: chapter.opener, chapter });
    chapter.topics.forEach(topic => {
      topic.pages.forEach(page => {
        page.slot = slots.length;
        slots.push({ type: 'page', el: page.el, chapter, page });
      });
    });
  });

  buildSidebarTree();
  renderCoverActions();
}

// ---------- Navigation ----------

function showSlot(index, opts = {}) {
  if (index < 0 || index >= slots.length) return;

  const current = slots[currentSlot];
  if (current) current.el.classList.remove('active');

  currentSlot = index;
  const slot = slots[currentSlot];
  slot.el.classList.add('active');
  currentPage = slot.type === 'page' ? slot.page.num : 0;

  if (slot.type === 'page') saveLastPage(currentPage);
  if (slot.type === 'contents') renderCoverActions();

  updateUI(opts);
  closeOverlaySidebar();
}

// Go to content page N (1-based, document order) — also used by shared-search.js
function goToPage(num) {
  const page = BOOK.pages[num - 1];
  if (page) showSlot(page.slot);
}

function goToContents() {
  showSlot(0);
}

function goToChapter(num) {
  const chapter = BOOK.chapters[num - 1];
  if (!chapter || chapter.comingSoon) return;
  showSlot(slots.findIndex(s => s.type === 'chapter' && s.chapter === chapter));
}

// Prev/Next handlers (walk the whole book, across topics and chapters)
function changePage(delta) {
  showSlot(currentSlot + delta);
}

// Kept for compatibility: the Contents page replaces the old TOC modal
function toggleTOC(show) {
  if (show) goToContents();
}

// ---------- Sidebar: docked panel on wide screens, overlay drawer otherwise ----------

const SIDEBAR_KEY = 'ai_book_sidebar';                       // 'open' | 'closed' (docked mode only)
const DOCK_QUERY = window.matchMedia('(min-width: 1280px)');  // room for 360px panel + the page

function isDocked() {
  return document.body.classList.contains('sidebar-docked');
}

function readDockPref() {
  try { return localStorage.getItem(SIDEBAR_KEY) !== 'closed'; } catch (e) { return true; }
}

function saveDockPref(open) {
  try { localStorage.setItem(SIDEBAR_KEY, open ? 'open' : 'closed'); } catch (e) { /* storage unavailable */ }
}

// show: open/close. opts.auto: not a user action (don't remember it, don't steal focus)
function toggleSidebar(show, opts = {}) {
  const drawer = document.getElementById('sidebarDrawer');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (!drawer || !backdrop) return;

  const dock = DOCK_QUERY.matches;
  drawer.classList.toggle('open', show);
  backdrop.classList.toggle('open', show && !dock);
  document.body.classList.toggle('sidebar-docked', show && dock);
  document.body.style.overflow = show && !dock ? 'hidden' : '';
  document.querySelectorAll('.drawer-toggle-btn').forEach(b => b.setAttribute('aria-expanded', String(show)));

  if (dock && !opts.auto) saveDockPref(show);

  if (show) {
    revealActiveInTree();
    // Overlay only: a focused input would swallow ← → page turns while reading with the panel docked
    const searchInput = document.getElementById('topicSearchInput');
    if (searchInput && !dock && !opts.auto && window.innerWidth >= 768) {
      setTimeout(() => searchInput.focus(), 150);
    }
  }
}

// After navigating or on Esc: the overlay drawer gets out of the way, a docked panel stays
function closeOverlaySidebar() {
  const drawer = document.getElementById('sidebarDrawer');
  if (drawer && drawer.classList.contains('open') && !isDocked()) toggleSidebar(false, { auto: true });
}

function applySidebarMode() {
  const drawer = document.getElementById('sidebarDrawer');
  if (!drawer) return;
  if (DOCK_QUERY.matches) {
    toggleSidebar(readDockPref(), { auto: true });
  } else if (isDocked()) {
    toggleSidebar(false, { auto: true });   // window got narrow: fall back to the overlay drawer, closed
  }
}

// Re-check when the window crosses the breakpoint ('resize' too: some browsers/emulators skip 'change')
let lastDockMatch = DOCK_QUERY.matches;
function onDockBreakpoint() {
  if (DOCK_QUERY.matches === lastDockMatch) return;
  lastDockMatch = DOCK_QUERY.matches;
  applySidebarMode();
}
DOCK_QUERY.addEventListener('change', onDockBreakpoint);
window.addEventListener('resize', onDockBreakpoint);

function revealActiveInTree() {
  const active = document.querySelector('#sidebarTopicsList .sidebar-topic-item.active');
  if (!active) return;
  const topic = active.closest('.tree-topic');
  const chapter = active.closest('.tree-chapter');
  if (topic) topic.open = true;
  if (chapter) chapter.open = true;
  // Scroll only the list (scrollIntoView would also cancel the page's smooth scroll-to-top)
  setTimeout(() => {
    const list = document.getElementById('sidebarTopicsList');
    if (!list) return;
    const a = active.getBoundingClientRect();
    const l = list.getBoundingClientRect();
    if (a.top < l.top) list.scrollTop -= l.top - a.top + 8;
    else if (a.bottom > l.bottom) list.scrollTop += a.bottom - l.bottom + 8;
  }, 50);
}

// Filter topics in sidebar (shared-search.js upgrades this with full-text matches)
function filterSidebarTopics(query) {
  const q = (query || '').toLowerCase().trim();
  const items = document.querySelectorAll('.sidebar-topic-item');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    const keywords = (item.dataset.keywords || '').toLowerCase();
    item.style.display = !q || text.includes(q) || keywords.includes(q) ? 'flex' : 'none';
  });
}

function clearTopicSearch() {
  const input = document.getElementById('topicSearchInput');
  if (input) {
    input.value = '';
    filterSidebarTopics('');
    updateTreeVisibility();
    input.focus();
  }
}

// Build dot navigation for the pages of the current topic
function buildDotNav() {
  const nav = document.getElementById('dotNav');
  if (!nav) return;
  nav.innerHTML = '';
  const slot = slots[currentSlot];
  if (!slot || slot.type !== 'page') return;

  slot.page.topic.pages.forEach(p => {
    const btn = document.createElement('button');
    btn.classList.add('dot');
    if (p.num === currentPage) btn.classList.add('active');
    btn.setAttribute('aria-label', `Go to page ${p.indexInTopic}: ${p.title}`);
    btn.title = `${p.indexInTopic}. ${p.title}`;
    btn.addEventListener('click', () => goToPage(p.num));
    nav.appendChild(btn);
  });
}

// Update UI elements (indicator, breadcrumb, buttons, dots, sidebar, URL)
function updateUI(opts = {}) {
  const slot = slots[currentSlot];
  if (!slot) return;

  const indicator = document.getElementById('pageIndicator');
  const titleText = document.getElementById('topbarTitleText');
  const crumb = document.getElementById('topbarBreadcrumb');
  let hash, docTitle;

  if (slot.type === 'page') {
    const p = slot.page;
    if (indicator) indicator.textContent = `Page ${p.num} / ${TOTAL_PAGES}`;
    if (titleText) titleText.textContent = p.topic.title;
    if (crumb) crumb.textContent = `Ch ${p.chapter.num} · ${p.chapter.title} · ${p.indexInTopic}/${p.topic.pages.length}`;
    hash = `#${p.topic.id}/${p.indexInTopic}`;
    docTitle = `${p.title} · ${p.topic.title} — ${BOOK.title}`;
  } else if (slot.type === 'chapter') {
    if (indicator) indicator.textContent = `Chapter ${slot.chapter.num}`;
    if (titleText) titleText.textContent = slot.chapter.title;
    if (crumb) crumb.textContent = `${BOOK.title} · Chapter ${slot.chapter.num}`;
    hash = `#chapter-${slot.chapter.num}`;
    docTitle = `Chapter ${slot.chapter.num}: ${slot.chapter.title} — ${BOOK.title}`;
  } else {
    if (indicator) indicator.textContent = 'Contents';
    if (titleText) titleText.textContent = BOOK.title;
    if (crumb) crumb.textContent = `by ${BOOK.author} • Handwritten Book`;
    hash = '#contents';
    docTitle = `${BOOK.title} — A Handwritten Book by ${BOOK.author}`;
  }
  document.title = docTitle;

  // The shared progress bar reads "Page N / M"; reset it on front-matter pages
  if (slot.type !== 'page') {
    const bar = document.getElementById('topbarProgressBar');
    if (bar) bar.style.width = '0%';
  }

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.disabled = currentSlot === 0;
  if (nextBtn) nextBtn.disabled = currentSlot === slots.length - 1;

  buildDotNav();

  document.querySelectorAll('.sidebar-topic-item').forEach(item => {
    item.classList.toggle('active', parseInt(item.dataset.page, 10) === currentPage);
  });
  if (isDocked()) revealActiveInTree();
  document.querySelectorAll('#sidebarTopicsList .tree-chapter[data-chapter]').forEach(ch => {
    ch.classList.toggle('current', slot.chapter && parseInt(ch.dataset.chapter, 10) === slot.chapter.num);
  });
  const contentsLink = document.querySelector('#sidebarTopicsList .tree-contents');
  if (contentsLink) contentsLink.classList.toggle('active', slot.type === 'contents');

  // Shareable deep link (drop ?page=N so a reload keeps the current page)
  try {
    history.replaceState(null, '', window.location.pathname + hash);
  } catch (e) { /* file:// in some browsers */ }

  if (!opts.initial) {
    const container = document.getElementById('notebookContainer');
    if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Where to open: ?page=N (search results) wins over #<topic-id>/<n>, #page-N and #chapter-N deep links
function slotFromLocation() {
  const queryPage = parseInt(new URLSearchParams(window.location.search).get('page'), 10);
  if (BOOK.pages[queryPage - 1]) return BOOK.pages[queryPage - 1].slot;

  const hash = window.location.hash;
  const topicPage = pageFromTopicRef(decodeURIComponent(hash.slice(1)));
  if (topicPage) return BOOK.pages[topicPage - 1].slot;

  let m;
  if ((m = hash.match(/^#page-(\d+)$/))) {
    const page = BOOK.pages[parseInt(m[1], 10) - 1];
    if (page) return page.slot;
  } else if ((m = hash.match(/^#chapter-(\d+)$/))) {
    const chapter = BOOK.chapters[parseInt(m[1], 10) - 1];
    if (chapter && !chapter.comingSoon) return slots.findIndex(s => s.chapter === chapter && s.type === 'chapter');
  }
  return 0;
}

// Same-document links such as <a href="#evolution-of-ai/3"> or a hand-edited URL
window.addEventListener('hashchange', () => {
  const target = slotFromLocation();
  if (target !== currentSlot) showSlot(target);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    if (e.key === 'Escape') {
      closeOverlaySidebar();
    }
    return;
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    changePage(1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    changePage(-1);
  } else if (e.key === 'Escape') {
    closeOverlaySidebar();
  } else if (e.key === 'c' || e.key === 'C') {
    goToContents();
  } else if (e.key === 't' || e.key === 'T') {
    const drawer = document.getElementById('sidebarDrawer');
    if (drawer) {
      const isOpen = drawer.classList.contains('open');
      toggleSidebar(!isOpen);
    }
  }
});

// Touch / Swipe Gestures for Mobile / iPad
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  const drawer = document.getElementById('sidebarDrawer');
  if (drawer && drawer.classList.contains('open') && !isDocked()) return;
  // Let wide tables scroll sideways without turning the page
  if (e.target.closest && e.target.closest('.handwritten-table')) return;

  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) changePage(1);   // Swipe left -> Next
    else changePage(-1);        // Swipe right -> Prev
  }
}, { passive: true });

// Initialize: start loading topic files now, build once the DOM and topics are ready
const topicsLoaded = loadTopics();

document.addEventListener('DOMContentLoaded', async () => {
  await topicsLoaded;
  buildBook();
  showSlot(slotFromLocation(), { initial: true });
  // Docked panel appears in place on load instead of sliding in
  document.body.classList.add('sidebar-instant');
  applySidebarMode();
  requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove('sidebar-instant')));
  // Hand-drawn figures: needs the pages in the DOM, so it loads after the build
  loadScript('../sketch-kit.js');
});
