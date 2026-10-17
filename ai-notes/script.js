// =========================================
// AI NOTES — A HANDWRITTEN BOOK
// script.js - Book structure, navigation, contents & interactivity
//
// The book is described by the markup inside <main id="notebookContainer">:
//   .book-chapter  >  .book-topic  >  article.notebook-page
// Everything else (Contents page, chapter openers, sidebar tree, page
// headers, dots, prev/next, deep links) is generated from it here.
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

function readLastPage() {
  try {
    const n = parseInt(localStorage.getItem(LAST_PAGE_KEY), 10);
    return n >= 1 && n <= TOTAL_PAGES ? n : 0;
  } catch (e) {
    return 0;
  }
}

function saveLastPage(n) {
  try { localStorage.setItem(LAST_PAGE_KEY, String(n)); } catch (e) { /* storage unavailable */ }
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
  toggleSidebar(false);
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

// Sidebar Drawer Controls
function toggleSidebar(show) {
  const drawer = document.getElementById('sidebarDrawer');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (drawer && backdrop) {
    if (show) {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      revealActiveInTree();
      const searchInput = document.getElementById('topicSearchInput');
      if (searchInput && window.innerWidth >= 768) {
        setTimeout(() => searchInput.focus(), 150);
      }
    } else {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
}

function revealActiveInTree() {
  const active = document.querySelector('#sidebarTopicsList .sidebar-topic-item.active');
  if (!active) return;
  const topic = active.closest('.tree-topic');
  const chapter = active.closest('.tree-chapter');
  if (topic) topic.open = true;
  if (chapter) chapter.open = true;
  setTimeout(() => active.scrollIntoView({ block: 'nearest' }), 50);
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
    hash = `#page-${p.num}`;
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

// Where to open: ?page=N (search results) wins over #page-N / #chapter-N deep links
function slotFromLocation() {
  const queryPage = parseInt(new URLSearchParams(window.location.search).get('page'), 10);
  if (BOOK.pages[queryPage - 1]) return BOOK.pages[queryPage - 1].slot;

  const hash = window.location.hash;
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

// Same-document links such as <a href="#page-3"> or a hand-edited URL
window.addEventListener('hashchange', () => {
  const target = slotFromLocation();
  if (target !== currentSlot) showSlot(target);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    if (e.key === 'Escape') {
      toggleSidebar(false);
    }
    return;
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    changePage(1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    changePage(-1);
  } else if (e.key === 'Escape') {
    toggleSidebar(false);
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
  if (drawer && drawer.classList.contains('open')) return;
  // Let wide tables scroll sideways without turning the page
  if (e.target.closest && e.target.closest('.handwritten-table')) return;

  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) changePage(1);   // Swipe left -> Next
    else changePage(-1);        // Swipe right -> Prev
  }
}, { passive: true });

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  buildBook();
  showSlot(slotFromLocation(), { initial: true });
});
