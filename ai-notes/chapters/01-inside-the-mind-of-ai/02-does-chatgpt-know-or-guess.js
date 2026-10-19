// =========================================================
// Chapter 1 · Inside the Mind of AI
// Topic 1.2 · Does ChatGPT Know or Guess?
// Registered in ../../book.js — page markup only (see ../../README.md)
// =========================================================
AIBook.topic('does-chatgpt-know-or-guess', /* html */ `
<!-- =========================================================
     PAGE 1: Search Engines vs LLMs
     ========================================================= -->
<article class="notebook-page"
  data-title="Search Engines vs LLMs"
  data-subtitle="Retrieve vs Generate, crawlers, index &amp; ranking"
  data-keywords="search engine google chatgpt llm retrieve generate index crawler spider ranking backlinks"
  data-tag="Search" data-tag-color="blue">
  <div class="page-content">

    <div class="ipad-note-header">
      <span>◀ Notes &nbsp; 9:40 PM Sun 18 Oct</span>
      <span>Note Title: <strong>ChatGPT know or it guess</strong></span>
      <span>18 October 2026 at 9:40 PM</span>
    </div>

    <h1 class="note-title-red">Does ChatGPT <span class="sk-circle">know</span>&hellip; or does it guess?</h1>

    <p class="note-def-blue">
      We ask ChatGPT, Claude or Gemini a question and it answers instantly, fluently and confidently.
      But <strong>where does that answer come from?</strong> To understand it, first compare it with the tool we used before it &mdash; the search engine.
    </p>

    <h2 class="note-section-red"># Search Engines vs LLMs</h2>

    <figure class="sk-figure tape-blue">
      <svg class="sk-svg" viewBox="0 0 800 250" role="img" aria-label="Two pipelines: Google searches an index and returns ranked results, ChatGPT predicts the next text from learned patterns and generates a response">
        <text x="10" y="38" class="lg">Google 🔍</text>
        <rect class="s b fb" x="10" y="55" width="160" height="56" rx="10"/>
        <text x="90" y="90" text-anchor="middle">Question</text>
        <path class="s a" d="M174,83 L206,83"/>
        <rect class="s b fb" x="210" y="55" width="170" height="56" rx="10"/>
        <text x="295" y="90" text-anchor="middle">Search an index</text>
        <path class="s a" d="M384,83 L416,83"/>
        <rect class="s b fb" x="420" y="55" width="170" height="56" rx="10"/>
        <text x="505" y="90" text-anchor="middle">Rank relevant docs</text>
        <path class="s a" d="M594,83 L626,83"/>
        <rect class="s y fy" x="630" y="55" width="160" height="56" rx="10"/>
        <text x="710" y="90" text-anchor="middle" class="y">Return results</text>

        <text x="10" y="160" class="lg">ChatGPT 💬</text>
        <rect class="s g fg" x="10" y="177" width="160" height="56" rx="10"/>
        <text x="90" y="212" text-anchor="middle">Prompt</text>
        <path class="s a" d="M174,205 L206,205"/>
        <rect class="s g fg" x="210" y="177" width="170" height="56" rx="10"/>
        <text x="295" y="212" text-anchor="middle">Learned patterns</text>
        <path class="s a" d="M384,205 L416,205"/>
        <rect class="s g fg" x="420" y="177" width="170" height="56" rx="10"/>
        <text x="505" y="212" text-anchor="middle">Predict next text</text>
        <path class="s a" d="M594,205 L626,205"/>
        <rect class="s r fp" x="630" y="177" width="160" height="56" rx="10"/>
        <text x="710" y="212" text-anchor="middle" class="r">Generate reply</text>
      </svg>
      <figcaption class="sk-caption">One <b>looks up</b> documents that already exist &middot; the other <b>writes</b> a brand-new answer, word by word</figcaption>
    </figure>

    <div class="yellow-callout">
      <span>★ Search Engines &rarr; <strong>Retrieve</strong> &nbsp;|&nbsp; LLMs &rarr; <strong>Generate</strong></span>
    </div>

    <p class="handwritten-dark-text">
      &rarr; Google hands you <em>other people&rsquo;s pages</em> and you read them.
      ChatGPT hands you <em>its own sentence</em> &mdash; nothing was copied from a page at that moment (unless it used a tool, see page 8).
    </p>

    <h2 class="note-section-red"># How search engines find information</h2>

    <figure class="sk-figure tape-green">
      <svg class="sk-svg" viewBox="0 0 800 330" role="img" aria-label="Crawlers visit internet pages and fill an index; a search query hits the index which returns ranked documents">
        <rect class="s b" x="20" y="160" width="220" height="150" rx="6"/>
        <text x="40" y="192" class="b">Internet 🌍</text>
        <rect class="s thin b fb" x="40" y="210" width="30" height="34"/>
        <rect class="s thin b fb" x="85" y="210" width="30" height="34"/>
        <rect class="s thin b fb" x="130" y="210" width="30" height="34"/>
        <rect class="s thin b fb" x="175" y="210" width="30" height="34"/>
        <rect class="s thin b fb" x="40" y="258" width="30" height="34"/>
        <rect class="s thin b fb" x="85" y="258" width="30" height="34"/>
        <rect class="s thin b fb" x="130" y="258" width="30" height="34"/>
        <rect class="s thin b fb" x="175" y="258" width="30" height="34"/>

        <path class="s b a b" d="M200,158 Q250,90 322,120"/>
        <path class="s b a b" d="M330,250 Q280,300 246,268"/>
        <text x="20" y="140" class="sm b">🕷 crawlers / spiders</text>
        <text x="262" y="322" class="xs m">keep re-visiting pages</text>

        <rect class="s g fg" x="330" y="40" width="130" height="230" rx="6"/>
        <path class="s thin g" d="M330,86 L460,86 M330,132 L460,132 M330,178 L460,178 M330,224 L460,224"/>
        <text x="395" y="30" text-anchor="middle" class="g">Index</text>
        <text x="395" y="68" text-anchor="middle" class="xs">biryani → p7, p92</text>
        <text x="395" y="114" text-anchor="middle" class="xs">kafka → p3, p51</text>
        <text x="395" y="160" text-anchor="middle" class="xs">turing → p8, p40</text>
        <text x="395" y="206" text-anchor="middle" class="xs">…billions more</text>

        <text x="20" y="50" class="g">Search ➝</text>
        <text x="20" y="74" class="xs m">"best biryani"</text>
        <path class="s g a g" d="M110,48 L322,62"/>

        <path class="s y a y" d="M466,150 L540,150"/>
        <rect class="s y fy" x="548" y="60" width="235" height="190" rx="8"/>
        <text x="560" y="92" class="y">Ranked documents</text>
        <text x="562" y="128" class="sm">1. paradise-biryani.com</text>
        <text x="562" y="160" class="sm">2. top-10-biryani-blog</text>
        <text x="562" y="192" class="sm">3. food-review-site</text>
        <text x="562" y="226" class="sm m">…page 2 (nobody goes)</text>
      </svg>
      <figcaption class="sk-caption">Crawl &rarr; <b>Index</b> (like the index at the back of a book) &rarr; Rank &rarr; Show links</figcaption>
    </figure>

    <div class="handwritten-blue-text"><strong>How does Google decide the ranking?</strong> A few of the signals:</div>
    <div class="pills-grid">
      <div class="green-pill-item">Domain authority</div>
      <div class="green-pill-item">Page speed</div>
      <div class="green-pill-item">Keywords</div>
      <div class="green-pill-item">Avg. time spent</div>
      <div class="green-pill-item">Backlinks</div>
      <div class="green-pill-item">Meta tags</div>
      <div class="green-pill-item">Date / freshness</div>
    </div>
    <p class="handwritten-dark-text" style="font-size: 19px;">
      &rarr; <strong>Backlinks</strong> = other sites linking to you (a &ldquo;vote&rdquo; of trust).
      &rarr; <strong>Time spent</strong> = did people actually stay and read? &rarr; <strong>Freshness</strong> = newer pages win for news-like queries.
    </p>

  </div>
</article>

<!-- =========================================================
     PAGE 2: Trusting search results · How LLMs generate
     ========================================================= -->
<article class="notebook-page"
  data-title="Search Flaws &amp; How LLMs Write"
  data-subtitle="Pros/cons of search, next-word prediction"
  data-keywords="search flaws pros sources outdated misleading next word prediction autoregressive roses are red"
  data-tag="Generation" data-tag-color="purple">
  <div class="page-content">

    <h2 class="note-section-red"># Search engines are not perfect either</h2>

    <div class="paradigm-shift-container">
      <div class="paradigm-card old">
        <div class="paradigm-title old">✗ Flaws</div>
        <div class="handwritten-dark-text">&bull; Does <strong>not guarantee truth</strong> &mdash; it ranks pages, it doesn&rsquo;t fact-check them</div>
        <div class="handwritten-dark-text">&bull; Can be <strong>outdated</strong></div>
        <div class="handwritten-dark-text">&bull; Ranking can be <strong>imperfect</strong> (SEO games)</div>
        <div class="handwritten-dark-text">&bull; Results can be <strong>misleading</strong></div>
      </div>
      <div class="paradigm-card modern">
        <div class="paradigm-title modern">✓ But&hellip; Pros</div>
        <div class="handwritten-dark-text">&rarr; A <strong>trail back to the source</strong></div>
        <div class="handwritten-dark-text">&rarr; Check <strong>who published</strong> it</div>
        <div class="handwritten-dark-text">&rarr; You can <strong>see the date</strong></div>
        <div class="handwritten-dark-text">&rarr; <strong>Compare multiple</strong> results</div>
      </div>
    </div>

    <div class="sk-scribble blue">
      <span class="sk-scribble-icon">☝</span>
      <span>With search, <em>you</em> are the judge &mdash; you can verify. A plain LLM answer has no source trail by default. Keep this in mind for the rest of the topic!</span>
    </div>

    <h2 class="note-section-red"># How LLMs generate responses</h2>

    <p class="handwritten-blue-text" style="font-size: 23px;">
      It <strong>predicts the next word</strong> (technically the next <em>token</em> &asymp; a word or a piece of a word).
    </p>

    <div class="quote-box-red" style="background: var(--bg-green); border-left-color: var(--ink-green); color: var(--ink-dark);">
      &ldquo; The sun rises in the <span style="color: var(--ink-green); text-decoration: underline;">east</span> &rdquo;
      <span style="display: block; font-size: 18px; color: var(--ink-green); margin-top: 4px;">&rarr; &ldquo;east&rdquo; is by far the most likely next word after this sentence</span>
    </div>

    <div class="handwritten-blue-text"><strong>Ex &mdash; it writes one token at a time, then feeds its own output back in:</strong></div>

    <ol class="token-steps">
      <li><span class="ctx">Roses</span></li>
      <li><span class="ctx">Roses</span> <span class="new">are</span></li>
      <li><span class="ctx">Roses are</span> <span class="new">red,</span></li>
      <li><span class="ctx">Roses are red,</span> <span class="new">violets</span></li>
      <li><span class="ctx">Roses are red, violets</span> <span class="new">are</span></li>
      <li><span class="ctx">Roses are red, violets are</span> <span class="new">&ldquo;blue&rdquo;</span></li>
    </ol>

    <figure class="sk-figure tape-pink">
      <svg class="sk-svg" viewBox="0 0 800 170" role="img" aria-label="Autoregressive loop: text so far goes into the LLM, it predicts one token, the token is appended and the loop repeats">
        <rect class="s b fb" x="20" y="50" width="200" height="70" rx="10"/>
        <text x="120" y="82" text-anchor="middle">Text so far</text>
        <text x="120" y="106" text-anchor="middle" class="xs m">"Roses are red,"</text>
        <path class="s a" d="M224,85 L296,85"/>
        <rect class="s p fv" x="300" y="40" width="190" height="90" rx="45"/>
        <text x="395" y="92" text-anchor="middle" class="p lg">LLM 🧠</text>
        <path class="s a" d="M494,85 L566,85"/>
        <rect class="s g fg" x="570" y="50" width="200" height="70" rx="10"/>
        <text x="670" y="82" text-anchor="middle" class="g">Next token</text>
        <text x="670" y="106" text-anchor="middle" class="xs m">"violets"</text>
        <path class="s r a r" d="M670,124 Q670,165 400,160 Q130,165 120,126"/>
        <text x="330" y="152" class="sm r">append &amp; repeat (autoregressive)</text>
      </svg>
    </figure>

    <div class="yellow-callout">
      <span>✱ The chosen word can be <strong>different each time</strong> it generates &mdash; that&rsquo;s why the same question gives slightly different answers.</span>
    </div>

    <div class="closing-question-green" style="color: var(--ink-red); border-color: var(--ink-red);">
      &rarr; So is ChatGPT just randomly guessing words?<br />&rarr; Is an LLM just a fancy autocomplete?
    </div>
    <p class="handwritten-green-text" style="text-align: right; font-size: 24px;">&hellip;the answer is <strong>probability</strong> &rarr; next page</p>

  </div>
</article>

<!-- =========================================================
     PAGE 3: Probability, not lookup
     ========================================================= -->
<article class="notebook-page"
  data-title="Probability, Not Random Guessing"
  data-subtitle="Next-token probabilities, temperature, learned patterns"
  data-keywords="probability next token distribution temperature sampling autocomplete patterns capital of india"
  data-tag="Probability" data-tag-color="yellow">
  <div class="page-content">

    <h2 class="note-section-red"># Every next word has a probability</h2>

    <div class="two-col">
      <div class="prob-chart">
        <div class="prob-prompt">&ldquo;The capital of India is &hellip;&rdquo;</div>
        <div class="prob-row top"><span class="prob-word">Delhi</span><span class="prob-bar" style="--p: 90%"></span><span class="prob-val">90%</span></div>
        <div class="prob-row"><span class="prob-word">Kolkata</span><span class="prob-bar" style="--p: 2%"></span><span class="prob-val">2%</span></div>
        <div class="prob-row"><span class="prob-word">Punjab</span><span class="prob-bar" style="--p: 1%"></span><span class="prob-val">1%</span></div>
        <div class="prob-note">Strong pattern &rarr; one clear winner &rarr; feels like &ldquo;knowing&rdquo;</div>
      </div>
      <div class="prob-chart">
        <div class="prob-prompt">&ldquo;Roses are &hellip;&rdquo;</div>
        <div class="prob-row top"><span class="prob-word">red</span><span class="prob-bar" style="--p: 50%"></span><span class="prob-val">50%</span></div>
        <div class="prob-row"><span class="prob-word">beautiful</span><span class="prob-bar" style="--p: 30%"></span><span class="prob-val">30%</span></div>
        <div class="prob-row"><span class="prob-word">flowers</span><span class="prob-bar" style="--p: 10%"></span><span class="prob-val">10%</span></div>
        <div class="prob-note">Many good options &rarr; answer varies run to run</div>
      </div>
    </div>

    <p class="handwritten-dark-text">
      &rarr; The model scores <strong>every token in its vocabulary</strong> (~100k of them), turns the scores into probabilities, then <strong>samples</strong> one.
      So it is <span class="sk-wavy">not random</span> &mdash; it is <strong>weighted</strong> by what it learned.
    </p>

    <h2 class="note-section-red"># Temperature &mdash; the creativity knob 🌡️</h2>
    <div class="sk-stickies">
      <div class="sk-sticky blue">
        <h4>Low (≈ 0)</h4>
        <ul><li>Almost always picks the top word</li><li>&ldquo;Roses are <b>red</b>&rdquo; every time</li><li>Good for code, facts, extraction</li></ul>
      </div>
      <div class="sk-sticky">
        <h4>Medium (≈ 0.7)</h4>
        <ul><li>Mostly likely words, some variety</li><li>red / beautiful</li><li>Default for chat</li></ul>
      </div>
      <div class="sk-sticky pink">
        <h4>High (&gt; 1)</h4>
        <ul><li>Rare words get picked more</li><li>&ldquo;Roses are <b>galaxies</b>&rdquo; 🤪</li><li>Creative, but more mistakes</li></ul>
      </div>
    </div>

    <h2 class="note-section-red"># So&hellip; is it just autocomplete?</h2>
    <p class="handwritten-dark-text">
      Mechanically, <strong>yes</strong> &mdash; it completes text. But your phone keyboard looks at the last 2&ndash;3 words.
      A modern LLM uses a <strong>much larger context</strong> (whole documents, 100k+ tokens) and has learned <strong>extremely complex patterns</strong>:
    </p>
    <div class="modality-tags-grid">
      <span class="modality-tag">📝 Grammar</span>
      <span class="modality-tag">💻 Programming</span>
      <span class="modality-tag">🧩 Reasoning</span>
      <span class="modality-tag">📌 Facts</span>
      <span class="modality-tag">🌐 Languages</span>
      <span class="modality-tag">📖 Stories</span>
      <span class="modality-tag">➗ Maths</span>
      <span class="modality-tag">🔗 People ↔ places ↔ events ↔ ideas</span>
    </div>
    <div class="yellow-callout">
      <span>★ To predict the next word of a physics proof <em>well</em>, you have to model the physics. Good prediction forces the model to learn real structure &mdash; that is why &ldquo;just autocomplete&rdquo; undersells it.</span>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 4: What knowledge does an LLM contain? · Knowledge cut-off
     ========================================================= -->
<article class="notebook-page"
  data-title="Weights &amp; Knowledge Cut-off"
  data-subtitle="Parameters, training loop, why it isn't real-time"
  data-keywords="parameters weights neural network training adjust knowledge cutoff real time not learning"
  data-tag="Knowledge" data-tag-color="green">
  <div class="page-content">

    <h2 class="note-section-red"># What knowledge does an LLM contain?</h2>

    <p class="note-def-blue">
      A trained neural network is a <strong>very large collection of numbers</strong> called <strong>parameters</strong> (or <strong>weights</strong>).
      During training these numbers are <strong>repeatedly adjusted</strong>.
    </p>

    <figure class="sk-figure">
      <svg class="sk-svg" viewBox="0 0 800 300" role="img" aria-label="A small neural network with numbers on its connections, and the training loop: predict, compare with the real next word, nudge the weights, repeat">
        <circle class="s b fb" cx="60" cy="80" r="18"/>
        <circle class="s b fb" cx="60" cy="150" r="18"/>
        <circle class="s b fb" cx="60" cy="220" r="18"/>
        <circle class="s p fv" cx="200" cy="60" r="18"/>
        <circle class="s p fv" cx="200" cy="125" r="18"/>
        <circle class="s p fv" cx="200" cy="190" r="18"/>
        <circle class="s p fv" cx="200" cy="255" r="18"/>
        <circle class="s g fg" cx="340" cy="115" r="18"/>
        <circle class="s g fg" cx="340" cy="195" r="18"/>
        <path class="s thin m" d="M78,80 L182,60 M78,80 L182,125 M78,80 L182,190 M78,150 L182,60 M78,150 L182,125 M78,150 L182,255 M78,220 L182,190 M78,220 L182,255 M78,220 L182,125"/>
        <path class="s thin m" d="M218,60 L322,115 M218,125 L322,115 M218,125 L322,195 M218,190 L322,195 M218,255 L322,195 M218,190 L322,115"/>
        <text x="112" y="62" class="xs r">0.42</text>
        <text x="104" y="118" class="xs r">-1.3</text>
        <text x="110" y="214" class="xs r">0.07</text>
        <text x="252" y="86" class="xs r">2.1</text>
        <text x="256" y="236" class="xs r">-0.6</text>
        <text x="60" y="292" text-anchor="middle" class="xs m">input</text>
        <text x="340" y="250" text-anchor="middle" class="xs m">output</text>
        <text x="200" y="22" text-anchor="middle" class="sm">billions of these numbers</text>

        <path class="s m dash" d="M400,20 L400,285"/>

        <rect class="s b fb" x="470" y="20" width="250" height="46" rx="10"/>
        <text x="595" y="50" text-anchor="middle">① Predict next word</text>
        <path class="s a" d="M720,60 Q780,95 720,128"/>
        <rect class="s y fy" x="470" y="110" width="250" height="46" rx="10"/>
        <text x="595" y="140" text-anchor="middle">② Compare with real word</text>
        <path class="s a" d="M595,160 L595,196"/>
        <rect class="s r fp" x="470" y="200" width="250" height="46" rx="10"/>
        <text x="595" y="230" text-anchor="middle">③ Nudge the weights</text>
        <path class="s a" d="M466,222 Q420,130 466,48"/>
        <text x="595" y="284" text-anchor="middle" class="sm g">repeat trillions of times</text>
      </svg>
      <figcaption class="sk-caption">Knowledge is <b>not stored as documents</b> &mdash; it is smeared across billions of numbers as patterns</figcaption>
    </figure>

    <div class="sk-scribble">
      <span class="sk-scribble-icon">⚠</span>
      <span>There is no row in a database saying &ldquo;capital_of_india = Delhi&rdquo;. The weights just make &ldquo;Delhi&rdquo; very likely after that sentence. That&rsquo;s why it can recall facts &mdash; and also why it can blend them wrongly.</span>
    </div>

    <h2 class="note-section-red"># Knowledge cut-off</h2>

    <figure class="sk-figure tape-pink">
      <svg class="sk-svg" viewBox="0 0 800 170" role="img" aria-label="Timeline: the model learned from data up to its cut-off date; anything after that is a blind spot">
        <rect class="fg" x="30" y="60" width="430" height="40" opacity="0.8"/>
        <rect class="fp" x="460" y="60" width="310" height="40" opacity="0.8"/>
        <path class="s a" d="M20,80 L785,80"/>
        <text x="40" y="50" class="g">📚 training data (books, web, code…)</text>
        <path class="s r thick" d="M460,40 L460,120"/>
        <text x="460" y="145" text-anchor="middle" class="r">cut-off date</text>
        <path class="s m" d="M600,70 L600,90"/>
        <text x="600" y="120" text-anchor="middle" class="sm m">model released</text>
        <path class="s m" d="M740,70 L740,90"/>
        <text x="740" y="120" text-anchor="middle" class="sm m">today</text>
        <text x="520" y="50" class="r">❓ blind spot</text>
      </svg>
    </figure>

    <div class="handwritten-blue-text">&rarr; LLM is <strong>not real-time</strong>. It doesn&rsquo;t read the news.</div>
    <div class="handwritten-yellow-text">&rarr; Neural networks are <strong>not trained every day</strong> &mdash; a training run takes weeks/months and huge compute.</div>
    <div class="handwritten-green-text">&rarr; Models <strong>do not learn new things automatically</strong> from your chats &mdash; the weights are frozen after training.</div>
    <div class="yellow-callout" style="font-size: 20px;">
      <span>★ Ask about yesterday&rsquo;s cricket score &rarr; a model without web search will either say it doesn&rsquo;t know, or worse, <strong>make up a believable score</strong>.</span>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 5: Base model vs assistant · Inference vs training
     ========================================================= -->
<article class="notebook-page"
  data-title="Base Model vs ChatGPT"
  data-subtitle="What wraps the base model, Inference vs Training"
  data-keywords="base model chatgpt claude gemini instruction tuning rlhf system prompt guardrails inference training"
  data-tag="Model" data-tag-color="purple">
  <div class="page-content">

    <h2 class="note-section-red"># Base Model <span style="font-size: 0.75em;">(vs. ChatGPT, Claude, Gemini)</span></h2>

    <p class="note-def-blue">
      A <strong>base model</strong> is a model trained primarily to <strong>predict text</strong>. It continues whatever you give it &mdash; it doesn&rsquo;t &ldquo;answer&rdquo;.
    </p>

    <div class="two-col">
      <div class="prompt-card">
        <div class="prompt-label">You type</div>
        <div class="prompt-text">Once upon a time &hellip;</div>
        <div class="prompt-label">Base model continues</div>
        <div class="prompt-text out">&hellip;there lived a king who had three daughters &hellip;</div>
      </div>
      <div class="prompt-card">
        <div class="prompt-label">You type</div>
        <div class="prompt-text">The JS event loop is &hellip;</div>
        <div class="prompt-label">Base model continues</div>
        <div class="prompt-text out">&hellip;a mechanism that &hellip; (like a blog post &mdash; or it may write 5 more quiz questions!)</div>
      </div>
    </div>

    <p class="handwritten-dark-text">ChatGPT / Claude / Gemini are <strong>products</strong>: the base model wrapped in many layers 👇</p>

    <figure class="sk-figure tape-green">
      <svg class="sk-svg" viewBox="0 0 800 380" role="img" aria-label="The base model in the middle surrounded by layers: instruction tuning, human feedback, safety training, system instructions, tools, retrieval, memory, web search, files, content filters, guardrails, security, auth and conversation management">
        <ellipse class="s r dash" cx="400" cy="190" rx="385" ry="175"/>
        <ellipse class="s g fg thick" cx="400" cy="190" rx="105" ry="48"/>
        <text x="400" y="198" text-anchor="middle" class="lg g">Base Model</text>

        <text x="300" y="60" text-anchor="middle" class="y">Web search</text>
        <text x="500" y="60" text-anchor="middle" class="y">Files</text>
        <text x="400" y="100" text-anchor="middle" class="p">Instruction tuning</text>
        <text x="170" y="120" text-anchor="middle" class="y">Memory</text>
        <text x="630" y="120" text-anchor="middle" class="p">Human feedback (RLHF)</text>
        <text x="120" y="198" text-anchor="middle" class="y">Retrieval</text>
        <text x="680" y="198" text-anchor="middle" class="p">Safety training</text>
        <text x="250" y="262" text-anchor="middle" class="b">Tool access</text>
        <text x="560" y="262" text-anchor="middle" class="b">System instructions</text>
        <text x="180" y="300" text-anchor="middle" class="r">Content filters</text>
        <text x="560" y="305" text-anchor="middle" class="b">Conversation management</text>
        <text x="270" y="338" text-anchor="middle" class="r">Guardrails</text>
        <text x="400" y="338" text-anchor="middle" class="r">Security</text>
        <text x="510" y="338" text-anchor="middle" class="r">Auth</text>
      </svg>
      <figcaption class="sk-caption"><b style="color: var(--ink-purple);">purple</b> = changes the model&rsquo;s behaviour &middot; <b style="color: var(--ink-yellow);">yellow/blue</b> = gives it extra powers &amp; context &middot; <b style="color: var(--ink-red);">red</b> = keeps it safe</figcaption>
    </figure>

    <div class="yellow-callout">
      <span>★ ChatGPT is much more than the base model (LLM) &mdash; it is a whole <strong>system</strong> built around it.</span>
    </div>

    <h2 class="note-section-red"># Inference <span style="font-size: 0.75em;">(vs. Training)</span></h2>
    <p class="handwritten-blue-text">
      Once training is done, every time I query it &mdash; ask a question or give a prompt &mdash;
      <span class="handwritten-green-text">the process of giving the information back is <strong>inference</strong>.</span>
    </p>

    <div class="sk-trace-wrap">
      <table class="handwritten-table">
        <thead><tr><th></th><th>🏋️ Training</th><th>⚡ Inference</th></tr></thead>
        <tbody>
          <tr><td><strong>What happens</strong></td><td>Weights are adjusted</td><td>Weights are only <em>used</em> (frozen)</td></tr>
          <tr><td><strong>How often</strong></td><td>Once in months</td><td>Millions of times a day</td></tr>
          <tr><td><strong>Cost</strong></td><td>Thousands of GPUs for weeks</td><td>Milliseconds&ndash;seconds per reply</td></tr>
          <tr><td><strong>Analogy</strong></td><td>Studying for years 📚</td><td>Answering in the exam ✍️</td></tr>
        </tbody>
      </table>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 6: Hallucinations
     ========================================================= -->
<article class="notebook-page"
  data-title="Hallucinations: Confidently Wrong"
  data-subtitle="Fluency vs truth, why it happens, types"
  data-keywords="hallucination fluency truthfulness fabricated invented citations false precision broken reasoning outdated"
  data-tag="Hallucination" data-tag-color="red">
  <div class="page-content">

    <h2 class="note-section-red"># Why do models confidently produce wrong answers?</h2>

    <div class="quote-box-red" style="font-size: 26px; text-align: center;">
      Fake fluency &ne; Truthfulness
    </div>

    <h3 class="sub-heading-yellow">&lsquo;Hallucination&rsquo;</h3>
    <p class="note-def-blue">
      A hallucination occurs when an AI model generates information that <em>appears plausible</em> but is
      <span class="sk-wavy">unsupported</span>, <span class="sk-wavy">incorrect</span>, <span class="sk-wavy">misleading</span> or <span class="sk-wavy">fabricated</span>.
    </p>

    <figure class="sk-figure tape-pink">
      <svg class="sk-svg" viewBox="0 0 800 330" role="img" aria-label="Two-by-two chart of language quality against factual accuracy; fluent but wrong answers are the hallucination danger zone">
        <rect class="fp" x="410" y="170" width="370" height="130" opacity="0.9"/>
        <rect class="fg" x="410" y="30" width="370" height="130" opacity="0.7"/>
        <path class="s a" d="M400,310 L400,14"/>
        <path class="s a" d="M30,165 L790,165"/>
        <text x="408" y="14" class="sm m">factual accuracy ↑</text>
        <text x="650" y="190" class="sm m">fluency →</text>

        <text x="595" y="80" text-anchor="middle" class="g">✅ Fluent &amp; true</text>
        <text x="595" y="110" text-anchor="middle" class="sm m">what we want</text>
        <text x="205" y="80" text-anchor="middle" class="b">🐢 Clumsy but correct</text>
        <text x="205" y="110" text-anchor="middle" class="sm m">awkward, still useful</text>
        <text x="205" y="235" text-anchor="middle">🤪 Gibberish</text>
        <text x="205" y="265" text-anchor="middle" class="sm m">wrong, but easy to spot</text>
        <text x="595" y="235" text-anchor="middle" class="r lg">⚠ HALLUCINATION</text>
        <text x="595" y="268" text-anchor="middle" class="sm r">sounds perfect, is false &rarr; most dangerous</text>
      </svg>
    </figure>

    <div class="handwritten-green-text">&rarr; Language quality and factual accuracy are <strong>separate dimensions</strong>.</div>
    <div class="handwritten-yellow-text">&rarr; Confidence in language is <strong>not</strong> confidence in truth.</div>
    <div class="handwritten-blue-text" style="font-size: 23px;">&rarr; Never fall for the &ldquo;<span class="sk-circle">Illusion of certainty</span>&rdquo;.</div>

    <h2 class="note-section-red"># Why does hallucination happen?</h2>
    <div class="nlp-steps-list">
      <div class="nlp-step-item"><span class="step-num">1.</span><span><strong>Insufficient info</strong> &mdash; the fact was rare in training data, so the pattern is weak.</span></div>
      <div class="nlp-step-item"><span class="step-num">2.</span><span><strong>Ambiguous info</strong> &mdash; the question can mean many things; it picks one silently.</span></div>
      <div class="nlp-step-item"><span class="step-num">3.</span><span><strong>Outdated knowledge</strong> &mdash; the world changed after the cut-off.</span></div>
      <div class="nlp-step-item"><span class="step-num">4.</span><span><strong>False assumptions</strong> in the prompt &mdash; &ldquo;Why did Einstein win 2 Nobel prizes?&rdquo; &rarr; it may happily explain both. (He won one.)</span></div>
      <div class="nlp-step-item"><span class="step-num">5.</span><span><strong>Unreliable patterns</strong> &mdash; similar-looking facts get blended together.</span></div>
      <div class="nlp-step-item"><span class="step-num">6.</span><span><strong>Models are optimized to answer</strong> &mdash; training rewarded helpful answers more than &ldquo;I don&rsquo;t know&rdquo;.</span></div>
      <div class="nlp-step-item"><span class="step-num">7.</span><span><strong>Generation is probabilistic</strong> &mdash; one unlucky token early on, and the rest of the answer builds on it.</span></div>
    </div>

    <h2 class="note-section-red"># Types of hallucinations</h2>
    <div class="sk-stickies">
      <div class="sk-sticky pink"><h4>Invented facts</h4><ul><li>A birthday, a statistic or an event that never existed</li></ul></div>
      <div class="sk-sticky"><h4>Invented citations</h4><ul><li>Real-looking paper titles, authors, URLs &mdash; that don&rsquo;t exist</li></ul></div>
      <div class="sk-sticky blue"><h4>Incorrect combinations</h4><ul><li>Real person + real award, but they never got it</li></ul></div>
      <div class="sk-sticky green"><h4>Outdated facts</h4><ul><li>Old CEO, old library API, old prices</li></ul></div>
      <div class="sk-sticky purple"><h4>False precision</h4><ul><li>&ldquo;Exactly 37.4% of users&hellip;&rdquo; &mdash; precise number, no source</li></ul></div>
      <div class="sk-sticky pink"><h4>Broken reasoning</h4><ul><li>Each step sounds fine, the logic chain doesn&rsquo;t hold</li></ul></div>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 7: "I don't know" & the confidence illusion
     ========================================================= -->
<article class="notebook-page"
  data-title="&ldquo;I Don&rsquo;t Know&rdquo; &amp; the Confidence Illusion"
  data-subtitle="Why models refuse, tone as evidence, how to ask better"
  data-keywords="i don't know refusal uncertainty confidence illusion tone sources facts assumptions prompt tips"
  data-tag="Trust" data-tag-color="yellow">
  <div class="page-content">

    <h2 class="note-section-red"># Why do models sometimes say &ldquo;I don&rsquo;t know&rdquo;?</h2>
    <p class="handwritten-dark-text">It&rsquo;s not the model &ldquo;feeling unsure&rdquo; &mdash; it is behaviour that was trained or instructed:</p>

    <table class="handwritten-table">
      <thead><tr><th>Reason</th><th>What it means</th></tr></thead>
      <tbody>
        <tr><td><strong>Assistant training</strong></td><td>RLHF rewarded admitting uncertainty in some situations</td></tr>
        <tr><td><strong>System instructions</strong></td><td>&ldquo;If you&rsquo;re not sure, say so&rdquo; in the hidden system prompt</td></tr>
        <tr><td><strong>Weak patterns</strong></td><td>No strong next-token candidate &rarr; hedging text becomes likely</td></tr>
        <tr><td><strong>Safety rules</strong></td><td>Medical / legal / harmful topics &rarr; careful or no answer</td></tr>
        <tr><td><strong>Tool requirements</strong></td><td>&ldquo;I need to search for that&rdquo; &mdash; live data needs a tool</td></tr>
        <tr><td><strong>Prompt wording</strong></td><td>Ask &ldquo;say I don&rsquo;t know if unsure&rdquo; and it will do it more often</td></tr>
      </tbody>
    </table>

    <h2 class="note-section-red"># The confidence illusion</h2>
    <p class="handwritten-blue-text" style="font-size: 23px;">Humans often use <strong>tone as evidence</strong>.</p>

    <figure class="sk-figure">
      <svg class="sk-svg" viewBox="0 0 800 210" role="img" aria-label="Two speech bubbles with the same answer: one hedged, one confident. The confident one feels more true but both are equally reliable">
        <path class="s b fb" d="M20,30 L370,30 Q385,30 385,45 L385,115 Q385,130 370,130 L120,130 L80,170 L90,130 L35,130 Q20,130 20,115 Z"/>
        <text x="200" y="72" text-anchor="middle">&ldquo;I think the answer</text>
        <text x="200" y="104" text-anchor="middle">may be XYZ&rdquo; 🤔</text>
        <path class="s r fp" d="M415,30 L765,30 Q780,30 780,45 L780,115 Q780,130 765,130 L710,130 L720,170 L680,130 L430,130 Q415,130 415,115 Z"/>
        <text x="597" y="72" text-anchor="middle">&ldquo;The answer is</text>
        <text x="597" y="104" text-anchor="middle"><tspan class="r">definitely</tspan> XYZ&rdquo; 😎</text>
        <text x="400" y="200" text-anchor="middle" class="sm m">same model · same facts · only the wording changed — but we trust the right one more</text>
      </svg>
    </figure>

    <div class="yellow-callout">
      <span>★ LLMs can produce <strong>anything</strong> &mdash; including a confident tone. Tone is just more generated text.</span>
    </div>

    <h2 class="note-section-red"># How to protect yourself 🛡️</h2>
    <div class="capabilities-grid">
      <div class="capability-card"><span class="capability-star">①</span><div><div class="capability-text">Separate facts from assumptions</div><div class="capability-desc">&ldquo;Mark what you&rsquo;re sure of vs. assuming&rdquo;</div></div></div>
      <div class="capability-card"><span class="capability-star">②</span><div><div class="capability-text">Ask for uncertainty</div><div class="capability-desc">&ldquo;How confident are you? What could be wrong?&rdquo;</div></div></div>
      <div class="capability-card"><span class="capability-star">③</span><div><div class="capability-text">Ask for sources</div><div class="capability-desc">&hellip;and open them &mdash; citations can be invented too</div></div></div>
      <div class="capability-card"><span class="capability-star">④</span><div><div class="capability-text">Use web search</div><div class="capability-desc">For anything recent, niche or numeric</div></div></div>
    </div>

    <div class="prompt-card">
      <div class="prompt-label">📋 Copy-paste prompt</div>
      <div class="prompt-text">Answer the question below. Then list: (1) facts you are confident about, (2) assumptions you made, (3) anything I should verify, with sources. If you don&rsquo;t know, say &ldquo;I don&rsquo;t know&rdquo;.</div>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 8: Tools & RAG
     ========================================================= -->
<article class="notebook-page"
  data-title="Tools &amp; RAG: Giving AI Evidence"
  data-subtitle="Tool use, Retrieval + Generation, private data"
  data-keywords="tools web search calculator code execution function calling rag retrieval augmented generation vector database private data chatbot"
  data-tag="Tools &amp; RAG" data-tag-color="green">
  <div class="page-content">

    <h2 class="note-section-red"># How tools extend the model</h2>

    <figure class="sk-figure tape-blue">
      <svg class="sk-svg" viewBox="0 0 800 370" role="img" aria-label="The LLM in the centre connected to tools: web search, calculator, code execution, weather, location, calendar, email, database, internal docs and files">
        <ellipse class="s p fv thick" cx="400" cy="190" rx="80" ry="62"/>
        <text x="400" y="186" text-anchor="middle" class="lg p">LLM 🧠</text>
        <text x="400" y="212" text-anchor="middle" class="xs m">decides which tool</text>
        <path class="s thin m a m" d="M400,128 L400,82"/><text x="400" y="49" text-anchor="middle" class="sm b">🌐 Web search</text>
        <path class="s thin m a m" d="M447,140 L534,103"/><text x="576" y="77" text-anchor="middle" class="sm b">🧮 Calculator</text>
        <path class="s thin m a m" d="M476,171 L617,157"/><text x="685" y="151" text-anchor="middle" class="sm b">💻 Code execution</text>
        <path class="s thin m a m" d="M476,209 L617,223"/><text x="685" y="243" text-anchor="middle" class="sm b">⛅ Weather</text>
        <path class="s thin m a m" d="M447,240 L534,277"/><text x="576" y="317" text-anchor="middle" class="sm b">📍 Location</text>
        <path class="s thin m a m" d="M400,252 L400,298"/><text x="400" y="345" text-anchor="middle" class="sm b">📅 Calendar</text>
        <path class="s thin m a m" d="M353,240 L266,277"/><text x="224" y="317" text-anchor="middle" class="sm b">✉️ Email</text>
        <path class="s thin m a m" d="M324,209 L183,223"/><text x="115" y="243" text-anchor="middle" class="sm b">🗄️ Database</text>
        <path class="s thin m a m" d="M324,171 L183,157"/><text x="115" y="151" text-anchor="middle" class="sm b">📚 Internal docs</text>
        <path class="s thin m a m" d="M353,140 L266,103"/><text x="224" y="77" text-anchor="middle" class="sm b">📁 Files</text>
      </svg>
      <figcaption class="sk-caption">&hellip;and much more. The model writes a <b>tool call</b>, the app runs it, the result is pasted back into the context.</figcaption>
    </figure>

    <p class="handwritten-dark-text">
      It has access to these tools to give results, and that gives it <strong>superpowers</strong> &mdash; live data, exact maths, real actions.
    </p>
    <div class="yellow-callout">
      <span>★ <span class="sk-wavy">ChatGPT is much more than the base model (LLM)</span> &mdash; the tool access is a big part of what makes it useful.</span>
    </div>

    <h2 class="note-section-red"># Web Search + LLM = Retrieval + Generation</h2>
    <div class="handwritten-blue-text">&rarr; <strong>Retrieval</strong> gives <strong>external evidence</strong>.</div>
    <div class="handwritten-blue-text">&rarr; <strong>Generation</strong> converts it into a <strong>useful response</strong>.</div>
    <p class="handwritten-green-text" style="font-size: 25px; font-weight: 700;">= Retrieval Augmented Generation &mdash; RAG</p>

    <figure class="sk-figure tape-green">
      <svg class="sk-svg" viewBox="0 0 800 300" role="img" aria-label="RAG pipeline: question goes to a retriever that searches a knowledge base, top chunks plus the question form the prompt, the LLM writes a grounded answer with sources">
        <rect class="s b fb" x="10" y="40" width="135" height="80" rx="10"/>
        <text x="77" y="76" text-anchor="middle">❓ Question</text>
        <text x="77" y="102" text-anchor="middle" class="xs m">"leave policy?"</text>
        <path class="s a" d="M149,80 L171,80"/>
        <rect class="s y fy" x="175" y="40" width="145" height="80" rx="10"/>
        <text x="247" y="76" text-anchor="middle">🔎 Retriever</text>
        <text x="247" y="102" text-anchor="middle" class="xs m">search / vector DB</text>
        <path class="s a" d="M324,80 L346,80"/>
        <rect class="s y fy" x="350" y="40" width="135" height="80" rx="10"/>
        <text x="417" y="76" text-anchor="middle">📄 Top chunks</text>
        <text x="417" y="102" text-anchor="middle" class="xs m">3–5 best passages</text>
        <path class="s a" d="M489,80 L511,80"/>
        <rect class="s b fb" x="515" y="40" width="130" height="80" rx="10"/>
        <text x="580" y="70" text-anchor="middle">📝 Prompt</text>
        <text x="580" y="96" text-anchor="middle" class="xs m">question +</text>
        <text x="580" y="112" text-anchor="middle" class="xs m">evidence</text>
        <path class="s a" d="M649,80 L671,80"/>
        <ellipse class="s p fv" cx="730" cy="80" rx="55" ry="40"/>
        <text x="730" y="88" text-anchor="middle" class="p">🧠 LLM</text>
        <path class="s g a g" d="M730,124 L730,186"/>
        <rect class="s g fg" x="560" y="190" width="230" height="80" rx="10"/>
        <text x="675" y="224" text-anchor="middle" class="g">✅ Grounded answer</text>
        <text x="675" y="250" text-anchor="middle" class="xs m">+ links to the sources used</text>

        <path class="s y" d="M175,200 L175,265 Q247,290 320,265 L320,200"/>
        <ellipse class="s y fy" cx="247" cy="200" rx="72" ry="16"/>
        <text x="247" y="240" text-anchor="middle" class="sm">🏢 Private docs</text>
        <text x="247" y="262" text-anchor="middle" class="xs m">wiki · PDFs · tickets</text>
        <path class="s y a y" d="M247,182 L247,126"/>
      </svg>
    </figure>

    <div class="handwritten-dark-text">
      &rarr; It can run on <strong>private data</strong> as well. Every company wants its own RAG &mdash; HR policy bot, support bot, internal code search &mdash; behind an AI chatbot.
      The model never trained on those docs; it reads them <em>at question time</em>.
    </div>

    <div class="quote-box-red">
      Note &rArr; Tools do <u>not</u> completely eliminate errors.
      <span style="display: block; font-size: 18px; margin-top: 4px; color: var(--ink-dark);">Wrong chunks retrieved, a bad source, or the model misreading good evidence &rarr; still wrong. RAG <strong>reduces</strong> hallucination; it doesn&rsquo;t remove it.</span>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 9: Self-awareness · Verdict · Revision
     ========================================================= -->
<article class="notebook-page"
  data-title="Verdict: Know or Guess? + Revision"
  data-subtitle="Does the model know itself, final answer, quick quiz"
  data-keywords="self awareness model know itself training context system tools verdict summary revision quiz"
  data-tag="Summary" data-tag-color="slate">
  <div class="page-content">

    <h2 class="note-section-red"># Does the model know itself? <span style="font-size: 0.75em;">(self-awareness)</span></h2>
    <p class="handwritten-dark-text">
      Ask &ldquo;which model are you?&rdquo; or &ldquo;what can you do?&rdquo; &mdash; it can&rsquo;t look inside its own weights.
      Everything it says about itself comes from only four places:
    </p>
    <div class="sk-stickies">
      <div class="sk-sticky blue"><h4>📚 Training</h4><ul><li>What text about AI models it saw (often about <em>older</em> models!)</li></ul></div>
      <div class="sk-sticky"><h4>💬 Context</h4><ul><li>What is in this conversation so far</li></ul></div>
      <div class="sk-sticky purple"><h4>⚙️ System</h4><ul><li>The hidden system prompt: &ldquo;You are ChatGPT, today is&hellip;&rdquo;</li></ul></div>
      <div class="sk-sticky green"><h4>🛠️ Tools</h4><ul><li>Which tools the app has connected right now</li></ul></div>
    </div>

    <div class="verdict-box">
      <div class="verdict-q">Does ChatGPT <em>know</em> or does it <em>guess</em>?</div>
      <div class="verdict-a">
        <strong>Neither, exactly &mdash; it predicts.</strong>
        When a pattern is strong in its training (&ldquo;capital of India&rdquo;), the prediction is so reliable it <em>behaves like knowing</em>.
        When the pattern is weak, rare or out-of-date, the same machinery produces a <em>fluent guess</em> &mdash; a hallucination.
        <span class="verdict-line">Tools &amp; RAG turn guesses into <strong>grounded answers</strong>; your verification turns them into <strong>trusted</strong> ones.</span>
      </div>
    </div>

    <h2 class="note-section-red"># One-line revision</h2>
    <table class="handwritten-table">
      <thead><tr><th>Concept</th><th>Remember it as</th></tr></thead>
      <tbody>
        <tr><td><strong>Search vs LLM</strong></td><td>Search <em>retrieves</em> existing pages &middot; LLM <em>generates</em> new text</td></tr>
        <tr><td><strong>Next-token prediction</strong></td><td>One token at a time, each picked by probability, fed back in</td></tr>
        <tr><td><strong>Temperature</strong></td><td>Low = predictable &middot; high = creative + riskier</td></tr>
        <tr><td><strong>Parameters / weights</strong></td><td>Billions of numbers adjusted in training = compressed patterns</td></tr>
        <tr><td><strong>Knowledge cut-off</strong></td><td>Frozen after training; not real-time; doesn&rsquo;t learn from chats</td></tr>
        <tr><td><strong>Base model</strong></td><td>Raw text predictor; ChatGPT = base model + tuning + tools + guardrails</td></tr>
        <tr><td><strong>Inference</strong></td><td>Using the trained model to answer (vs. training = changing it)</td></tr>
        <tr><td><strong>Hallucination</strong></td><td>Fluent but unsupported / wrong; fluency &ne; truth</td></tr>
        <tr><td><strong>RAG</strong></td><td>Retrieve evidence &rarr; put it in the prompt &rarr; generate</td></tr>
      </tbody>
    </table>

    <h2 class="note-section-red"># Quick self-quiz 🧠 <span style="font-size: 0.7em; color: var(--ink-blue);">(tap to reveal)</span></h2>
    <div class="qa-reveal-list">
      <details class="qa-reveal"><summary>Why can the same prompt give different answers?</summary><p>The next token is <strong>sampled</strong> from a probability distribution (temperature &gt; 0), so a different word can win each run &mdash; and every later word builds on it.</p></details>
      <details class="qa-reveal"><summary>Why can&rsquo;t a plain LLM tell you today&rsquo;s news?</summary><p>Its weights are frozen at the <strong>knowledge cut-off</strong>. Only a tool such as web search can bring in newer information.</p></details>
      <details class="qa-reveal"><summary>An answer sounds very confident. Is it more likely to be true?</summary><p>No. Tone is generated text too &mdash; <strong>language quality and factual accuracy are separate dimensions</strong>. Check sources.</p></details>
      <details class="qa-reveal"><summary>A company chatbot answers from its HR policies. Was the model trained on them?</summary><p>Usually not &mdash; it uses <strong>RAG</strong>: relevant policy chunks are retrieved and added to the prompt at question time.</p></details>
      <details class="qa-reveal"><summary>Does RAG stop hallucinations completely?</summary><p>No. Bad retrieval or misreading the evidence can still produce wrong answers &mdash; it <strong>reduces</strong> the risk.</p></details>
    </div>

  </div>
</article>
`);
