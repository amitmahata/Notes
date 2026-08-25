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

// Go to a specific page
function goToPage(num) {
  if (num < 1 || num > TOTAL_PAGES) return;

  // Hide current page
  const current = document.getElementById(`page-${currentPage}`);
  if (current) {
    current.classList.remove('active');
    // Slight exit animation
    current.style.animation = 'none';
  }

  currentPage = num;

  // Show new page
  const next = document.getElementById(`page-${currentPage}`);
  if (next) {
    next.style.animation = 'none';
    // Force reflow
    void next.offsetHeight;
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
  document.getElementById('pageIndicator').textContent = `Page ${currentPage} / ${TOTAL_PAGES}`;

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

  // Scroll to top of notebook
  const container = document.getElementById('notebookContainer');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changePage(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   changePage(-1);
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
  // Only handle horizontal swipes larger than 50px
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    if (dx < 0) changePage(1);   // swipe left  → next
    else         changePage(-1); // swipe right → prev
  }
}, { passive: true });

// Init
buildDotNav();
updateUI();
