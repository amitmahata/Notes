// =========================================
// INTERVIEW Q&A NOTES - script.js
// Interactive controls, TOC modal, navigation, sidebar & quiz mode
// =========================================

const TOTAL_PAGES = 25;
let currentPage = 1;

// Page Title mapping for Table of Contents
const PAGE_TITLES = [
  "1. Start Here: Company Tiers, What Each Tier Tests & How to Use",
  "2. Company Interview Loops 2025-26 (Tier 1, 2, 3)",
  "3. DSA Q&A I: Arrays, Strings, Hashing & Sliding Window",
  "4. DSA Q&A II: Linked Lists, Stacks, Binary Search, Heaps & Intervals",
  "5. DSA Q&A III: Trees, Tries & Graphs",
  "6. DSA Q&A IV: Dynamic Programming, Backtracking & Greedy",
  "7. CS Fundamentals: Operating Systems & Concurrency",
  "8. CS Fundamentals: DBMS, Transactions, Indexing & SQL",
  "9. CS Fundamentals: Networking, HTTP & APIs",
  "10. OOP, SOLID & Design Patterns Q&A",
  "11. Low-Level Design & Machine Coding Rounds",
  "12. System Design Concepts: Rapid-Fire Q&A",
  "13. System Design Problems: Answer Blueprints",
  "14. C# / .NET & JavaScript / Node.js Q&A",
  "15. Docker, Kubernetes & Cloud Q&A",
  "16. AI / ML & LLM Q&A (+ AI-Assisted Coding Rounds)",
  "17. Behavioral Q&A: STAR, Amazon LPs, Googleyness & Values",
  "18. Senior / Staff, Managerial & HR Rounds (India)",
  "19. Q&A Bank II — DSA V: Matrix, Bit Manipulation & Strings",
  "20. Q&A Bank II — DSA VI: Hard Tier-1 Patterns & Design-a-DS",
  "21. Q&A Bank II — System Design II: More Blueprints",
  "22. Q&A Bank II — LLD & Machine Coding II",
  "23. Q&A Bank II — Production Scenarios (.NET, SQL, Network, K8s, Cloud)",
  "24. Q&A Bank II — Behavioral II & AI/LLM Engineering II",
  "25. 30-Day Plan, Company Cheat Sheet & Night-Before Checklist"
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
  } else if (e.key === 'q' || e.key === 'Q') {
    toggleQuizMode();
  } else if (e.key === 'Escape') {
    toggleTOC(false);
    toggleSidebar(false);
  }
});

// Quiz mode: collapse every answer so each question can be self-tested,
// then reveal answers one at a time by clicking the question.
function setQuizMode(on) {
  document.documentElement.classList.toggle('quiz-mode', on);
  document.querySelectorAll('details.qa').forEach(d => { d.open = !on; });
  const btn = document.getElementById('quizToggleBtn');
  if (btn) {
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.innerHTML = on ? '🙈<span class="btn-label"> Quiz: ON</span>' : '🧠<span class="btn-label"> Quiz Mode</span>';
  }
  try { localStorage.setItem('interview_quiz_mode', on ? '1' : '0'); } catch (e) { /* storage unavailable */ }
}

function toggleQuizMode() {
  setQuizMode(!document.documentElement.classList.contains('quiz-mode'));
}

// Printing should always include the answers
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('details.qa').forEach(d => { d.open = true; });
});
window.addEventListener('afterprint', () => {
  if (document.documentElement.classList.contains('quiz-mode')) setQuizMode(true);
});

// Initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  buildDotNav();
  buildTOC();
  goToPage(1);
  let quiz = false;
  try { quiz = localStorage.getItem('interview_quiz_mode') === '1'; } catch (e) { /* storage unavailable */ }
  setQuizMode(quiz);
});
