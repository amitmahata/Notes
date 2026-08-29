// =========================================
// DSA MASTER NOTES - script.js
// Interactive controls, TOC modal, navigation & sidebar
// =========================================

const TOTAL_PAGES = 12;
let currentPage = 1;

// Page Title mapping for Table of Contents
const PAGE_TITLES = [
  "1. Multi-Tier Strategy & 6-Week Roadmap (Tier 1, 2, 3)",
  "2. Master Complexity Cheat Sheet & Sorting Algorithms",
  "3. Arrays, Strings, Hash Maps & Matrix Manipulations",
  "4. Two Pointers, Fast/Slow & Sliding Window Patterns",
  "5. Linked Lists & Custom Data Structure Design (LRU/LFU)",
  "6. Binary Search & Monotonic Predicate Space",
  "7. Monotonic Stack, Deque & Priority Queue / Heaps",
  "8. Trees, BST, LCA & Trie Master Templates",
  "9. Graphs: BFS, DFS, TopoSort, DSU & Shortest Paths",
  "10. Dynamic Programming & Backtracking Masterclass",
  "11. Intervals, Greedy, Bit Manipulation & Concurrency",
  "12. Tier 1/2/3 Rubrics, OA Guide & Live Interview Protocol"
];

// Build dot navigation
function buildDotNav() {
  const nav = document.getElementById('dotNav');
  if (!nav) return;
  nav.innerHTML = '';
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    const btn = document.createElement('button');
    btn.classList.add('dot');
    if (i === currentPage) btn.classList.add('active');
    btn.setAttribute('aria-label', `Go to page ${i}`);
    btn.setAttribute('title', PAGE_TITLES[i - 1]);
    btn.addEventListener('click', () => goToPage(i));
    nav.appendChild(btn);
  }
}

// Build Table of Contents list
function buildTOC() {
  const list = document.getElementById('tocList');
  if (!list) return;
  list.innerHTML = '';
  PAGE_TITLES.forEach((title, idx) => {
    const item = document.createElement('div');
    item.classList.add('toc-item');
    item.innerHTML = `
      <div class="toc-num">#${idx < 9 ? '0' + (idx + 1) : (idx + 1)}</div>
      <div class="toc-text">${title}</div>
    `;
    item.addEventListener('click', () => {
      goToPage(idx + 1);
      toggleTOC(false);
    });
    list.appendChild(item);
  });
}

// Toggle Table of Contents modal
function toggleTOC(show) {
  const modal = document.getElementById('tocModal');
  if (!modal) return;
  if (show === undefined) {
    modal.classList.toggle('open');
  } else if (show) {
    modal.classList.add('open');
  } else {
    modal.classList.remove('open');
  }
}

// Toggle Sidenav Drawer
function toggleSidebar(open) {
  const drawer = document.getElementById('sidebarDrawer');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    const searchInput = document.getElementById('sidebarSearch');
    if (searchInput) setTimeout(() => searchInput.focus(), 150);
  } else {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Filter Topic List inside Sidenav Drawer
function filterSidebarTopics() {
  const input = document.getElementById('sidebarSearch');
  if (!input) return;
  const q = input.value.toLowerCase().trim();
  const items = document.querySelectorAll('.sidebar-topic-item');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(q) ? 'flex' : 'none';
  });
}

// Clear Search inside Sidenav Drawer
function clearSidebarSearch() {
  const input = document.getElementById('sidebarSearch');
  if (!input) return;
  input.value = '';
  filterSidebarTopics();
  input.focus();
}

// Core page navigation function
function goToPage(pageNum) {
  if (pageNum < 1 || pageNum > TOTAL_PAGES) return;

  const currentEl = document.getElementById(`page-${currentPage}`);
  if (currentEl) currentEl.classList.remove('active');

  currentPage = pageNum;

  const newEl = document.getElementById(`page-${currentPage}`);
  if (newEl) newEl.classList.add('active');

  // Update Page Indicator
  const indicator = document.getElementById('pageIndicator');
  if (indicator) indicator.textContent = `Page ${currentPage} / ${TOTAL_PAGES}`;

  // Update Nav Buttons Disabled State
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.disabled = (currentPage === 1);
  if (nextBtn) nextBtn.disabled = (currentPage === TOTAL_PAGES);

  // Update Dot Navigation
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentPage - 1);
  });

  // Update Sidebar Topic Active State
  const topicItems = document.querySelectorAll('.sidebar-topic-item');
  topicItems.forEach(item => {
    const p = parseInt(item.getAttribute('data-page'), 10);
    item.classList.toggle('active', p === currentPage);
  });

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Relative page changer
function changePage(delta) {
  goToPage(currentPage + delta);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.key === 'ArrowRight' || e.key === 'PageDown') {
    changePage(1);
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    changePage(-1);
  } else if (e.key === 't' || e.key === 'T') {
    toggleTOC();
  } else if (e.key === 's' || e.key === 'S') {
    const drawer = document.getElementById('sidebarDrawer');
    const isOpen = drawer && drawer.classList.contains('open');
    toggleSidebar(!isOpen);
  } else if (e.key === 'Escape') {
    toggleTOC(false);
    toggleSidebar(false);
  }
});

// Initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  buildDotNav();
  buildTOC();
  goToPage(1);
});
