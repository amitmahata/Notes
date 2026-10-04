/**
 * =========================================================
 * SKETCH KIT — shared helpers for the handwritten notebooks
 *  1. Injects SVG defs (pen-wobble filter + arrowheads)
 *  2. Renders inline `code` and $math$ written in note text
 *  3. Replays a "pen drawing" animation when a page opens
 * Used by: dsa-notes, system-design-notes
 * =========================================================
 */
(function () {
  const ARROW_COLORS = {
    'sk-arr': 'var(--sk-ink)',
    'sk-arr-b': 'var(--sk-blue)',
    'sk-arr-r': 'var(--sk-red)',
    'sk-arr-g': 'var(--sk-green)',
    'sk-arr-p': 'var(--sk-purple)',
    'sk-arr-m': 'var(--sk-muted)'
  };

  function injectDefs() {
    if (document.getElementById('sk-defs')) return;
    const markers = Object.entries(ARROW_COLORS).map(([id, color]) => `
      <marker id="${id}" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <path d="M1,1.5 L10.5,6 L1,10.5" fill="none" style="stroke:${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>`).join('');

    const holder = document.createElement('div');
    holder.innerHTML = `
      <svg id="sk-defs" aria-hidden="true" width="0" height="0" style="position:absolute;width:0;height:0;overflow:hidden">
        <defs>
          <!-- userSpaceOnUse: a bbox-relative region collapses to nothing for straight lines -->
          <filter id="sk-rough" filterUnits="userSpaceOnUse" x="-50" y="-50" width="1000" height="900">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          ${markers}
        </defs>
      </svg>`;
    document.body.prepend(holder.firstElementChild);
  }

  // ---------- TeX-lite: enough for Big-O and recurrences, in handwriting ----------
  const TEX_SYMBOLS = [
    [/\\text\{([^}]*)\}/g, '$1'],
    [/\\mathrel\{([^}]*)\}/g, '$1'],
    [/\\(log|max|min|sum|gcd)\b/g, '$1'],
    [/\\le(q)?\b/g, '≤'], [/\\ge(q)?\b/g, '≥'], [/\\neq?\b/g, '≠'],
    [/\\ll\b/g, '≪'], [/\\gg\b/g, '≫'], [/\\approx\b/g, '≈'],
    [/\\cdot\b/g, '·'], [/\\times\b/g, '×'], [/\\l?dots\b/g, '…'],
    [/\\infty\b/g, '∞'], [/\\alpha\b/g, 'α'], [/\\Sigma\b/g, 'Σ'], [/\\Theta\b/g, 'Θ'],
    [/\\oplus\b/g, '⊕'], [/\\implies\b/g, '⟹'], [/\\leftrightarrow\b/g, '↔'],
    [/\\to\b/g, '→'], [/\\in\b/g, '∈'],
    [/\\lfloor\b/g, '⌊'], [/\\rfloor\b/g, '⌋'], [/\\lceil\b/g, '⌈'], [/\\rceil\b/g, '⌉'],
    [/\\,/g, ' '], [/\\;/g, ' ']
  ];

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function texToHtml(tex) {
    let out = escapeHtml(tex);
    TEX_SYMBOLS.forEach(([re, rep]) => { out = out.replace(re, rep); });
    out = out
      .replace(/\^\{([^}]*)\}/g, '<sup>$1</sup>')
      .replace(/\^([A-Za-z0-9])/g, '<sup>$1</sup>')
      .replace(/_\{([^}]*)\}/g, '<sub>$1</sub>')
      .replace(/_([A-Za-z0-9])/g, '<sub>$1</sub>');
    return out;
  }

  const SKIP_TAGS = new Set(['PRE', 'CODE', 'SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'svg', 'SVG']);
  const INLINE_RE = /`([^`\n]+)`|\$([^$\n]+)\$/g;

  function renderInline(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || (node.nodeValue.indexOf('`') < 0 && node.nodeValue.indexOf('$') < 0)) {
          return NodeFilter.FILTER_REJECT;
        }
        for (let el = node.parentNode; el && el !== root; el = el.parentNode) {
          if (SKIP_TAGS.has(el.nodeName) || el.namespaceURI === 'http://www.w3.org/2000/svg') {
            return NodeFilter.FILTER_REJECT;
          }
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const targets = [];
    while (walker.nextNode()) targets.push(walker.currentNode);

    targets.forEach(node => {
      const text = node.nodeValue;
      INLINE_RE.lastIndex = 0;
      if (!INLINE_RE.test(text)) return;
      INLINE_RE.lastIndex = 0;

      let html = '';
      let last = 0;
      let m;
      while ((m = INLINE_RE.exec(text)) !== null) {
        html += escapeHtml(text.slice(last, m.index));
        html += m[1] !== undefined
          ? `<code class="sk-code">${escapeHtml(m[1])}</code>`
          : `<span class="sk-math">${texToHtml(m[2])}</span>`;
        last = INLINE_RE.lastIndex;
      }
      html += escapeHtml(text.slice(last));

      const span = document.createElement('span');
      span.innerHTML = html;
      node.parentNode.replaceChild(span, node);
      // unwrap the temporary span so layout is unchanged
      while (span.firstChild) span.parentNode.insertBefore(span.firstChild, span);
      span.remove();
    });
  }

  // ---------- Pen-drawing animation ----------
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function drawPage(page) {
    if (reduceMotion || !page) return;
    page.querySelectorAll('.sk-svg .s:not(.dash)').forEach(el => {
      if (typeof el.getTotalLength !== 'function') return;
      let len = 0;
      try { len = el.getTotalLength(); } catch (e) { return; }
      if (!len) return;
      el.classList.remove('sk-drawing');
      el.style.setProperty('--len', Math.ceil(len) + 1);
      void el.getBoundingClientRect(); // restart the animation
      el.classList.add('sk-drawing');
    });
  }

  function watchPages() {
    const pages = document.querySelectorAll('.notebook-page');
    const observer = new MutationObserver(records => {
      records.forEach(r => {
        if (r.target.classList.contains('active')) drawPage(r.target);
      });
    });
    pages.forEach(p => observer.observe(p, { attributes: true, attributeFilter: ['class'] }));
    document.addEventListener('animationend', e => {
      if (e.animationName === 'sk-draw') e.target.classList.remove('sk-drawing');
    });
    drawPage(document.querySelector('.notebook-page.active'));
  }

  function init() {
    injectDefs();
    const scope = document.querySelector('main') || document.body;
    renderInline(scope);
    document.documentElement.classList.add('sk-anim');
    watchPages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
