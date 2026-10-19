# AI Notes — how this book is organised

The AI notebook is a **book**: Chapters › Topics › Pages. Each topic lives in its own file, so adding notes never means editing one giant `index.html`.

```
ai-notes/
├── index.html      # App shell only: topbar, sidebar, empty <main>. Rarely changes.
├── book.js         # MANIFEST: chapters and topics, in reading order
├── chapters/
│   ├── 01-inside-the-mind-of-ai/
│   │   ├── 01-evolution-of-ai.js
│   │   └── 02-does-chatgpt-know-or-guess.js
│   └── 02-ai-native-software-engineer/      (create when the first topic is written)
├── script.js       # Loads the topic files, builds the Contents page, chapter openers,
│                   # sidebar tree, page headers, prev/next, dots and deep links
└── styles.css      # Notebook look + reusable note components
```

No build step: it is still plain HTML/CSS/JS, deployed as static files, and it still opens from `file://` (topics load through `<script>` tags, not `fetch`).

## Add a topic

1. Create `chapters/<NN-chapter>/<NN-topic>.js`:

   ```js
   AIBook.topic('my-topic-id', /* html */ `
   <article class="notebook-page"
     data-title="Page title"
     data-subtitle="Short subtitle shown in the sidebar"
     data-keywords="words for the sidebar filter"
     data-tag="Tag" data-tag-color="red|blue|purple|yellow|green|slate">
     <div class="page-content">
       …your notes…
     </div>
   </article>

   <article class="notebook-page" …> …next page… </article>
   `);
   ```

2. Register it in `book.js` under its chapter:

   ```js
   { id: 'my-topic-id', title: '…', subtitle: '…', icon: '🧩',
     file: 'chapters/01-inside-the-mind-of-ai/03-my-topic.js' }
   ```

   The `id` must match the one passed to `AIBook.topic(...)`. Topic numbers (1.1, 1.2 …), page counts and the Contents page update themselves.

3. Add the pages to the Ctrl+K search index in `../shared-search.js` (entries `ai-p<N>`, where N is the page's position in the whole book), and bump the "Book • N Pages" counts in the notebook switchers and the hub card.

**Inside the template string** avoid backticks, `${` and backslashes. Use HTML entities (`&rarr;`, `&ldquo;`, `&mdash;` …) as in the existing topics. The `/* html */` comment lets editor extensions such as *es6-string-html* highlight the markup.

## Add a chapter

Add an object to `chapters` in `book.js`. With `topics: []` it shows as **Coming soon**. Once it has topics it gets its own opener page automatically.

## Building blocks

| Look | Markup |
|---|---|
| Red title / `# section` | `h1.note-title-red`, `h2.note-section-red` |
| Blue definition | `p.note-def-blue` |
| Ink text | `.handwritten-blue-text`, `-green-`, `-yellow-`, `-dark-` |
| Callouts | `.yellow-callout` (wrap mixed content in one `<span>`), `.quote-box-red`, `.closing-question-green` |
| Pills / tags | `.pills-grid > .green-pill-item`, `.modality-tags-grid > .modality-tag` |
| Compare cards | `.paradigm-shift-container > .paradigm-card.old / .modern` |
| Table | `table.handwritten-table` (wrap in `.sk-trace-wrap` to scroll on phones) |
| Hand-drawn figure | `figure.sk-figure > svg.sk-svg` (see `../sketch-kit.css`: `.s` strokes, `.a` arrows, `.fb/.fg/.fy/.fp/.fv` fills) |
| Sticky notes / margin note | `.sk-stickies > .sk-sticky`, `.sk-scribble` |
| Probability bars | `.prob-chart > .prob-row` with `style="--p: 40%"` on `.prob-bar` |
| Token-by-token steps | `ol.token-steps > li > .ctx + .new` |
| Prompt example | `.prompt-card > .prompt-label + .prompt-text` |
| Final answer box | `.verdict-box > .verdict-q + .verdict-a` |
| Tap-to-reveal quiz | `.qa-reveal-list > details.qa-reveal > summary + p` |

## Links

- `#contents`, `#chapter-2`
- `#does-chatgpt-know-or-guess/3`: topic id + page within the topic. Stays correct when topics are added before it.
- `?page=N` and `#page-N`: page N of the whole book. Used by the search index.
