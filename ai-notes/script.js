// =========================================
// THE EVOLUTION OF AI - HANDWRITTEN NOTES
// script.js - Navigation, TOC, and Interactivity
// =========================================

const TOTAL_PAGES = 6;
let currentPage = 1;

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
    btn.title = `Page ${i}`;
    btn.addEventListener('click', () => goToPage(i));
    nav.appendChild(btn);
  }
}

// Go to specific page
function goToPage(num) {
  if (num < 1 || num > TOTAL_PAGES) return;

  const current = document.getElementById(`page-${currentPage}`);
  if (current) {
    current.classList.remove('active');
  }

  currentPage = num;

  const next = document.getElementById(`page-${currentPage}`);
  if (next) {
    next.classList.add('active');
  }

  updateUI();
  toggleTOC(false);
}

// Prev/Next handlers
function changePage(delta) {
  goToPage(currentPage + delta);
}

// Toggle Table of Contents modal
function toggleTOC(show) {
  const modal = document.getElementById('tocModal');
  if (modal) {
    if (show) modal.classList.add('open');
    else modal.classList.remove('open');
  }
}

// Update UI elements (page numbers, button states)
function updateUI() {
  const indicator = document.getElementById('pageIndicator');
  if (indicator) {
    indicator.textContent = `Page ${currentPage} / ${TOTAL_PAGES}`;
  }

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage === TOTAL_PAGES;

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index + 1 === currentPage);
  });

  // Smooth scroll back to top of container
  const container = document.getElementById('notebookContainer');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Keyboard shortcuts (Left / Right Arrow)
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    changePage(1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    changePage(-1);
  } else if (e.key === 'Escape') {
    toggleTOC(false);
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
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) changePage(1);   // Swipe left -> Next
    else changePage(-1);        // Swipe right -> Prev
  }
}, { passive: true });

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  buildDotNav();
  updateUI();
});
