// =========================================
// SYSTEM DESIGN HANDWRITTEN NOTES - script.js
// Interactive controls, TOC modal, navigation & print
// =========================================

const TOTAL_PAGES = 8;
let currentPage = 1;

// Page Title mapping for Table of Contents
const PAGE_TITLES = [
  "1. Fundamentals & 4-Step Interview Framework",
  "2. Scalability, Load Balancing & API Gateways",
  "3. Distributed Caching & Invalidation Strategies",
  "4. Databases: SQL vs NoSQL, Sharding & CAP",
  "5. Asynchronous Messaging & Distributed Transactions",
  "6. Storage Systems, CDNs & Media Pipelines",
  "7. Distributed Consensus, Coordination & ID Gen",
  "8. FAANG Blueprints & 8+ YoE Staff Strategy"
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
      <div class="toc-num">#0${idx + 1}</div>
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
    void next.offsetHeight; // force reflow
    next.style.animation = '';
    next.classList.add('active');
  }

  updateUI();
}

// Public function for prev/next buttons
function changePage(delta) {
  goToPage(currentPage + delta);
}

// Update all UI state
function updateUI() {
  // Update indicator
  const indicator = document.getElementById('pageIndicator');
  if (indicator) {
    indicator.textContent = `Page ${currentPage} / ${TOTAL_PAGES}`;
  }

  // Update buttons
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  if (prev) prev.disabled = currentPage === 1;
  if (next) next.disabled = currentPage === TOTAL_PAGES;

  // Update dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((d, i) => {
    d.classList.toggle('active', i + 1 === currentPage);
  });

  // Scroll smoothly to top of notebook
  const container = document.getElementById('notebookContainer');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  // Check if modal is open
  const modal = document.getElementById('tocModal');
  if (modal && modal.classList.contains('open')) {
    if (e.key === 'Escape') toggleTOC(false);
    return;
  }

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changePage(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   changePage(-1);
  if (e.key === 't' || e.key === 'T') toggleTOC();

  // Numeric page jumps 1-8
  const num = parseInt(e.key, 10);
  if (num >= 1 && num <= TOTAL_PAGES) {
    goToPage(num);
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
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  // Horizontal swipe
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) changePage(1);
    else         changePage(-1);
  }
}, { passive: true });

// Close TOC when clicking outside card
window.addEventListener('click', (e) => {
  const modal = document.getElementById('tocModal');
  if (modal && e.target === modal) {
    toggleTOC(false);
  }
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  buildDotNav();
  buildTOC();
  updateUI();
});
