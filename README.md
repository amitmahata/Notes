# ✍️ Interactive Handwritten Study Notes Hub

> **Comprehensive, digital handwritten-style study notes for Software Engineering, DSA, System Design, AI, Kubernetes, Docker — plus a Tier 1 → Tier 3 Interview Q&A bank.**  
> *Created & Curated by **Amit Mahata***

---

## 📚 Study Notebook Modules

| Module | Topic | Web Notebook | PDF Export | Highlights |
| :--- | :--- | :--- | :--- | :--- |
| 🧠 **AI Evolution** | Artificial Intelligence &amp; LLMs | [`ai-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/ai-notes/index.html) | [`AI-Handwritten-Notes.pdf`](file:///c:/Users/amitm/source/repos/Notes/ai-notes/AI-Handwritten-Notes.pdf) | Turing Test (1950), Rule-based Expert Systems, ML vs DL, Computer Vision &amp; AlexNet, NLP, Transformers, LLMs, GenAI, Multimodal &amp; Autonomous AI Agents |
| 📐 **System Design** (10 pages) | Distributed Systems Architecture | [`system-design-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/system-design-notes/index.html) | [`System-Design-Handwritten-Notes.pdf`](file:///c:/Users/amitm/source/repos/Notes/system-design-notes/System-Design-Handwritten-Notes.pdf) | 4-Step Framework, worked napkin math, hash ring, token bucket, cache-aside sequence, CAP triangle, Kafka partitions, Raft quorum, fencing tokens, hybrid fanout, **case studies: URL Shortener & Chat System** |
| 🎯 **Interview Q&A** (25 pages) | Tier 1 / 2 / 3 Company Question Bank | [`interview-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/interview-notes/index.html) | — | 340+ questions with model answers, follow-ups &amp; traps, tagged by company: 2025–26 loops (Google, Meta AI-enabled round, Amazon Bar Raiser, Microsoft AA, Flipkart machine coding, Atlassian values, TCS/Infosys laterals), DSA, OS &amp; concurrency, DBMS &amp; SQL, networking &amp; APIs, OOP/SOLID/patterns, LLD, system design blueprints, C#/.NET &amp; JS, Docker/K8s, AI/LLM &amp; RAG, STAR + 16 Amazon LPs, HR/CTC negotiation, **Q&A Bank II** (matrix/bits/KMP, hard DSA & design-a-DS, Docs/Drive/Kafka/Snowflake designs, order-book LLD, production scenarios, more STAR + RAG evals), 30-day plan · **Quiz mode** |
| 💻 **DSA Master** (14 pages) | Data Structures & Algorithms Patterns | [`dsa-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/dsa-notes/index.html) | — | 6-week roadmap, Big-O curves, sliding window & rain-water sketches, LRU/LFU, binary search on answer, heaps, trees/tries, graphs (BFS, DSU, Dijkstra), DP, **backtracking**, **"which pattern?" flowchart**, dry-run traces & practice sets |
| ⎈ **Kubernetes** | Container Orchestration | [`kubernetes-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/kubernetes-notes/index.html) | [`Kubernetes-Handwritten-Notes.pdf`](file:///c:/Users/amitm/source/repos/Notes/kubernetes-notes/Kubernetes-Handwritten-Notes.pdf) | Control Plane architecture, Pods, Deployments, Services, Ingress &amp; Storage |
| 🐳 **Docker** | Containerization Fundamentals | [`docker-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/docker-notes/index.html) | [`Docker-Handwritten-Notes.pdf`](file:///c:/Users/amitm/source/repos/Notes/docker-notes/Docker-Handwritten-Notes.pdf) | Containers vs VMs, Dockerfile best practices, Volumes, Networks &amp; Docker Compose |

---

## ✨ Features & Aesthetic Design System

Each note module is built as an interactive web application styled to look like a physical spiral-bound notebook page with:

- 📖 **Ruled Notebook Paper**: Custom CSS gradient background matching authentic ruled paper with margin guides.
- 🌀 **Spiral Binder Rings**: Realistic metallic/ring spiral visuals with punch holes.
- 🎨 **Multi-Color Ink Palette**: Highlighting critical terms in Red, Blue, Slate, Golden Yellow, and Emerald Green.
- ✍️ **Handwritten Typography**: Google Fonts (`Kalam`, `Caveat`, `Patrick Hand`).
- 🖍️ **Sketch Kit (DSA, System Design & Interview Q&A)** — shared [`sketch-kit.css`](sketch-kit.css) / [`sketch-kit.js`](sketch-kit.js):
  - Hand-drawn inline SVG diagrams with a pen-wobble filter and a "drawing" animation each time a page opens (respects reduced-motion).
  - Sticky notes, margin scribbles, dry-run trace tables, "bugs I keep making" boxes, mnemonics and tick-off practice lists.
  - Inline `$O(n \log n)$` math and `` `code` `` in note text are rendered as handwritten math / code chips.
  - Theme-aware (warm paper, dark, sepia, blueprint) and phone-friendly (wide sketches scroll sideways).
- 🧠 **Q&A Cards &amp; Quiz Mode (Interview Q&A)**: every question is a handwritten card with tier-coded company chips (🔴 Tier 1, 🔵 Tier 2, 🟢 Tier 3, 🔥 frequently asked), an answer, a key-insight box, the interviewer's follow-up and the common trap. Press `Q` (or the topbar button) to hide all answers and self-test; printing always includes answers.
- ⚡ **Interactive Controls**:
  - `Prev` / `Next` page navigation &amp; keyboard arrow shortcuts (`←` / `→`).
  - Table of Contents (`Index`) popup modal.
  - Touch swipe gestures on iPad / mobile devices.
  - One-click **Download PDF** print stylesheet export.
- 🛠️ **Smart URL Path Routing**: Automatic trailing-slash redirection script in every module's `<head>` to guarantee CSS asset loading regardless of whether the URL is accessed with or without a trailing slash (`/kubernetes-notes` vs `/kubernetes-notes/`).

---

## 🚀 Getting Started

### 1. View in Browser Direct
Simply double-click [`index.html`](file:///c:/Users/amitm/source/repos/Notes/index.html) or any module's `index.html` file to view directly in your web browser.

### 2. Run Local Development Server
To serve locally using `npx serve` or Live Server:

```bash
npx serve .
```

Then navigate to:
- Master Hub: `http://localhost:3000/`
- AI Notes: `http://localhost:3000/ai-notes/`
- System Design Notes: `http://localhost:3000/system-design-notes/`
- DSA Notes: `http://localhost:3000/dsa-notes/`
- Interview Q&A Notes: `http://localhost:3000/interview-notes/`
- Kubernetes Notes: `http://localhost:3000/kubernetes-notes/`
- Docker Notes: `http://localhost:3000/docker-notes/`

---

## 📁 Repository Structure

```
Notes/
├── index.html                           # Master Hub Landing Page
├── README.md                            # Master Repository Documentation
├── ai-notes/                            # The Evolution of AI Notes
│   ├── index.html                       # AI Notebook Web App (with Trailing-Slash Redirect)
│   ├── styles.css                       # Notebook CSS Stylesheet & Print Media Query
│   ├── script.js                        # Navigation & Interactivity Script
│   └── AI-Handwritten-Notes.pdf         # Exported PDF Document
├── sketch-kit.css / sketch-kit.js       # Shared hand-drawn diagram & sticky-note kit (DSA, System Design, Interview Q&A)
├── shared-search.css / shared-search.js # Ctrl+K cross-notebook search + themes
├── dsa-notes/                           # DSA Master Notes (14 pages)
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── interview-notes/                     # Interview Q&A Bank, Tier 1-3 (25 pages)
│   ├── index.html
│   ├── styles.css                       # DSA base styles + Q&A card / quiz-mode components
│   └── script.js                        # Navigation + quiz mode
├── system-design-notes/                 # System Design Master Notes (10 pages)
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── System-Design-Handwritten-Notes.pdf
├── kubernetes-notes/                    # Kubernetes Study Notes
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── Kubernetes-Handwritten-Notes.pdf
└── docker-notes/                        # Docker Master Notes
    ├── index.html
    ├── styles.css
    ├── script.js
    └── Docker-Handwritten-Notes.pdf
```

---

## 📄 Exporting & Printing PDF Notes

All notebook web applications include `@media print` rules tailored for A4 portrait export:

1. Open the desired note in Chrome / Edge (`index.html`).
2. Click **Download PDF** in the top navigation bar (or press `Ctrl + P`).
3. Set destination to **Save as PDF**.
4. Set layout to **Portrait**, margins to **None** or **Default**, and check **Background graphics**.

---

## 🛠️ Troubleshooting & Server Notes

### Unstyled Plain Text when visiting local URLs
If a page renders as unstyled plain text (e.g. `http://localhost:3000/kubernetes-notes`), the browser might be requesting relative CSS paths from the root domain.  
All `index.html` files contain an auto-redirect snippet that automatically normalizes `/module-name` to `/module-name/`, resolving CSS stylesheets properly.

---

*Handcrafted with ❤️ by **Amit Mahata***
