# ✍️ Interactive Handwritten Study Notes Hub

> **Comprehensive, digital handwritten-style study notes for Software Engineering, System Design, AI, Kubernetes, and Docker.**  
> *Created & Curated by **Amit Mahata***

---

## 📚 Study Notebook Modules

| Module | Topic | Web Notebook | PDF Export | Highlights |
| :--- | :--- | :--- | :--- | :--- |
| 🧠 **AI Evolution** | Artificial Intelligence &amp; LLMs | [`ai-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/ai-notes/index.html) | [`AI-Handwritten-Notes.pdf`](file:///c:/Users/amitm/source/repos/Notes/ai-notes/AI-Handwritten-Notes.pdf) | Turing Test (1950), Rule-based Expert Systems, ML vs DL, Computer Vision &amp; AlexNet, NLP, Transformers, LLMs, GenAI, Multimodal &amp; Autonomous AI Agents |
| 📐 **System Design** | Distributed Systems Architecture | [`system-design-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/system-design-notes/index.html) | [`System-Design-Handwritten-Notes.pdf`](file:///c:/Users/amitm/source/repos/Notes/system-design-notes/System-Design-Handwritten-Notes.pdf) | 4-Step Senior System Design Framework, CAP Theorem, Rate Limiting, Caching, DB Sharding |
| ⎈ **Kubernetes** | Container Orchestration | [`kubernetes-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/kubernetes-notes/index.html) | [`Kubernetes-Handwritten-Notes.pdf`](file:///c:/Users/amitm/source/repos/Notes/kubernetes-notes/Kubernetes-Handwritten-Notes.pdf) | Control Plane architecture, Pods, Deployments, Services, Ingress &amp; Storage |
| 🐳 **Docker** | Containerization Fundamentals | [`docker-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/docker-notes/index.html) | [`Docker-Handwritten-Notes.pdf`](file:///c:/Users/amitm/source/repos/Notes/docker-notes/Docker-Handwritten-Notes.pdf) | Containers vs VMs, Dockerfile best practices, Volumes, Networks &amp; Docker Compose |

---

## ✨ Features & Aesthetic Design System

Each note module is built as an interactive web application styled to look like a physical spiral-bound notebook page with:

- 📖 **Ruled Notebook Paper**: Custom CSS gradient background matching authentic ruled paper with margin guides.
- 🌀 **Spiral Binder Rings**: Realistic metallic/ring spiral visuals with punch holes.
- 🎨 **Multi-Color Ink Palette**: Highlighting critical terms in Red, Blue, Slate, Golden Yellow, and Emerald Green.
- ✍️ **Handwritten Typography**: Google Fonts (`Kalam`, `Caveat`, `Patrick Hand`).
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
├── system-design-notes/                 # System Design Master Notes
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
