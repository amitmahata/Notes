// =========================================
// KUBERNETES HANDWRITTEN NOTES - script.js
// =========================================

const TOTAL_PAGES = 6;
let currentPage = 1;

// Build dot navigation
function buildDotNav() {
  const nav = document.getElementById('dotNav');
  nav.innerHTML = '';
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    const btn = document.createElement('button');
    btn.classList.add('dot');
    if (i === currentPage) btn.classList.add('active');
    btn.setAttribute('aria-label', `Go to page ${i}`);
    btn.addEventListener('click', () => goToPage(i));
    nav.appendChild(btn);
  }
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

// Filter topics in sidebar
function filterSidebarTopics(query) {
  const q = (query || '').toLowerCase().trim();
  const items = document.querySelectorAll('.sidebar-topic-item');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    const keywords = (item.dataset.keywords || '').toLowerCase();
    if (!q || text.includes(q) || keywords.includes(q)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function clearTopicSearch() {
  const input = document.getElementById('topicSearchInput');
  if (input) {
    input.value = '';
    filterSidebarTopics('');
    input.focus();
  }
}

// Go to a specific page
function goToPage(num) {
  if (num < 1 || num > TOTAL_PAGES) return;

  // Hide current page
  const current = document.getElementById(`page-${currentPage}`);
  if (current) {
    current.classList.remove('active');
    current.style.animation = 'none';
  }

  currentPage = num;

  // Show new page
  const next = document.getElementById(`page-${currentPage}`);
  if (next) {
    next.style.animation = 'none';
    void next.offsetHeight;
    next.style.animation = '';
    next.classList.add('active');
  }

  updateUI();
  toggleSidebar(false);
}

// Public function for prev/next buttons
function changePage(delta) {
  goToPage(currentPage + delta);
}

// Update all UI state
function updateUI() {
  const indicator = document.getElementById('pageIndicator');
  if (indicator) {
    indicator.textContent = `Page ${currentPage} / ${TOTAL_PAGES}`;
  }

  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  if (prev) prev.disabled = currentPage === 1;
  if (next) next.disabled = currentPage === TOTAL_PAGES;

  const dots = document.querySelectorAll('.dot');
  dots.forEach((d, i) => {
    d.classList.toggle('active', i + 1 === currentPage);
  });

  const topicItems = document.querySelectorAll('.sidebar-topic-item');
  topicItems.forEach(item => {
    const pageNum = parseInt(item.dataset.page, 10);
    item.classList.toggle('active', pageNum === currentPage);
  });

  const container = document.getElementById('notebookContainer');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    if (e.key === 'Escape') toggleSidebar(false);
    return;
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changePage(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   changePage(-1);
  if (e.key === 'Escape') toggleSidebar(false);
  if (e.key === 't' || e.key === 'T') {
    const drawer = document.getElementById('sidebarDrawer');
    if (drawer) {
      const isOpen = drawer.classList.contains('open');
      toggleSidebar(!isOpen);
    }
  }
});

// Touch / Swipe support
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  const drawer = document.getElementById('sidebarDrawer');
  if (drawer && drawer.classList.contains('open')) return;

  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) changePage(1);
    else changePage(-1);
  }
}, { passive: true });

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  buildDotNav();
  updateUI();
});
