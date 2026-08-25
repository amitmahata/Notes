# ✍️ Interactive Handwritten Study Notes Hub

> **Comprehensive, digital handwritten-style study notes for Software Engineering, System Design, AI, Kubernetes, and Docker.**  
> *Created & Curated by **Amit Mahata***

---

## 📚 Study Notebook Modules

| Module | Topic | Web Notebook | PDF Export | Highlights |
| :--- | :--- | :--- | :--- | :--- |
| 🧠 **AI Evolution** | Artificial Intelligence &amp; LLMs | [`ai-notes/index.html`](file:///c:/Users/amitm/source/repos/Notes/ai-notes/index.html) | [`AI-Handwritten-Notes.pdf`](file:///c:/Users/amitm/source/repos/Notes/ai-notes/AI-Handwritten-Notes.pdf) | Turing Test (1950), Dartmouth (1955), Deep Blue (1997), Transformers, LLMs, GenAI &amp; Human vs AI comparison |
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

---

## 🚀 Getting Started

### 1. View in Browser
Simply double-click [`index.html`](file:///c:/Users/amitm/source/repos/Notes/index.html) or any module's `index.html` file to view directly in your web browser.

### 2. Run Local Development Server
To serve locally using `npx serve` or Live Server:

```bash
npx serve .
```

Then open `http://localhost:3000` in your browser.

---

## 📁 Repository Structure

```
Notes/
├── index.html                           # Master Hub Landing Page
├── README.md                            # Repository Documentation
├── ai-notes/                            # The Evolution of AI Notes
│   ├── index.html                       # AI Notebook Web App
│   ├── styles.css                       # Notebook CSS Stylesheet
│   ├── script.js                        # Navigation & Interactivity Script
│   ├── README.md                        # AI Notes Documentation
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

## 📄 Exporting to PDF

To generate or update the PDF documents:
1. Open the desired note in Chrome / Edge (`index.html`).
2. Click **Download PDF** in the top navigation bar (or press `Ctrl + P`).
3. Select **Save as PDF** with headers/footers disabled and margins set to *None*.

---

*Handcrafted with ❤️ by **Amit Mahata***
