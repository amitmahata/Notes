// =========================================================
// Chapter 1 · Inside the Mind of AI
// Topic 1.3 · The Secret Language of LLMs
// Registered in ../../book.js — page markup only (see ../../README.md)
// =========================================================
AIBook.topic('secret-language-of-llms', /* html */ `
<!-- =========================================================
     PAGE 1: Computers cannot read words · Token IDs
     ========================================================= -->
<article class="notebook-page"
  data-title="Computers Can&rsquo;t Read Words"
  data-subtitle="Text &rarr; tokens &rarr; Token IDs &rarr; LLM"
  data-keywords="tokens token id numbers tokenizer kangchenjunga weather is so good predict next id number"
  data-tag="Tokens" data-tag-color="red">
  <div class="page-content">

    <div class="ipad-note-header">
      <span>◀ Notes &nbsp; 8:15 PM Sun 1 Nov</span>
      <span>Note Title: <strong>The Secret Language of LLMs</strong></span>
      <span>1 November 2026 at 8:15 PM</span>
    </div>

    <h1 class="note-title-red">The <span class="sk-circle">Secret Language</span> of LLMs</h1>

    <h2 class="note-section-red"># Computers cannot directly understand words</h2>

    <p class="note-def-blue">
      An LLM never sees letters or words. Before your sentence reaches the model it is <strong>chopped into small pieces</strong>,
      and every piece is <strong>swapped for a number</strong>. The model only ever works with numbers.
    </p>

    <div class="quote-box-red" style="background: var(--bg-blue); border-left-color: var(--ink-blue); color: var(--ink-dark);">
      &ldquo; <span style="text-decoration: underline; text-decoration-color: var(--ink-green);">Kangchenjunga</span> is the third highest mountain in the world. &rdquo;
      <span style="display: block; font-size: 18px; color: var(--ink-green); margin-top: 4px;">&rarr; this statement is broken down into smaller pieces before it goes into an LLM</span>
    </div>

    <p class="handwritten-yellow-text">
      So before it goes into an LLM, each and every word is broken down into smaller subsets of the whole statement.
    </p>

    <figure class="sk-figure tape-pink">
      <svg class="sk-svg" viewBox="0 0 800 300" role="img" aria-label="The sentence Weather is so good is split into four tokens, each token gets a Token ID, 87 12 18 56, and the sequence of numbers is passed to the LLM">
        <text x="20" y="34" class="sm m">your text</text>
        <rect class="s r fp" x="20" y="48" width="150" height="46" rx="8"/>
        <text x="95" y="79" text-anchor="middle" class="r">Weather</text>
        <rect class="s g fg" x="190" y="48" width="70" height="46" rx="8"/>
        <text x="225" y="79" text-anchor="middle" class="g">is</text>
        <rect class="s g fg" x="280" y="48" width="80" height="46" rx="8"/>
        <text x="320" y="79" text-anchor="middle" class="g">so</text>
        <rect class="s g fg" x="380" y="48" width="110" height="46" rx="8"/>
        <text x="435" y="79" text-anchor="middle" class="g">good</text>
        <path class="s r" d="M95,44 Q95,14 170,14"/>
        <text x="178" y="20" class="sm r">← each piece = a TOKEN</text>

        <path class="s a g" d="M95,98 L95,148"/>
        <path class="s a g" d="M225,98 L225,148"/>
        <path class="s a g" d="M320,98 L320,148"/>
        <path class="s a g" d="M435,98 L435,148"/>

        <text x="20" y="182" class="lg g">[</text>
        <rect class="s b fb" x="62" y="152" width="66" height="44" rx="6"/>
        <text x="95" y="182" text-anchor="middle" class="lg b">87</text>
        <text x="225" y="182" text-anchor="middle" class="lg">12</text>
        <text x="320" y="182" text-anchor="middle" class="lg">18</text>
        <text x="435" y="182" text-anchor="middle" class="lg">56</text>
        <text x="480" y="182" class="lg g">]</text>
        <path class="s b a b" d="M80,200 Q60,235 40,250"/>
        <text x="20" y="272" class="b">Token ID</text>

        <path class="s a" d="M510,174 L590,174"/>
        <rect class="s p fv thick" x="596" y="140" width="180" height="70" rx="35"/>
        <text x="686" y="184" text-anchor="middle" class="lg p">LLM 🧠</text>
        <text x="560" y="250" class="sm y">the LLM understands the</text>
        <text x="560" y="274" class="sm y">sequence of numbers</text>
      </svg>
      <figcaption class="sk-caption">text &rarr; <b>tokens</b> &rarr; <b>Token IDs</b> &rarr; LLM. (IDs here are made up &mdash; every tokenizer has its own.)</figcaption>
    </figure>

    <p class="handwritten-blue-text">
      Each and every token is assigned a number, and that number is known as the <strong>Token ID</strong>.
    </p>

    <h2 class="note-section-red"># So&hellip; LLMs are not predicting the next <em>word</em></h2>

    <div class="paradigm-shift-container">
      <div class="paradigm-card old">
        <div class="paradigm-title old">✗ What we say</div>
        <div class="handwritten-dark-text">&ldquo;The model predicts the next <strong>word</strong>.&rdquo;</div>
      </div>
      <div class="paradigm-card modern">
        <div class="paradigm-title modern">✓ What really happens</div>
        <div class="handwritten-dark-text">It predicts the next <strong>ID</strong> &mdash; what is the next <strong>number</strong> that will come. Again. And again.</div>
      </div>
    </div>

    <ol class="token-steps">
      <li><span class="ctx">[87, 12, 18, 56]</span> <span class="new">&rarr; 2041</span></li>
      <li><span class="ctx">[87, 12, 18, 56, 2041]</span> <span class="new">&rarr; 13</span></li>
      <li><span class="ctx">[87, 12, 18, 56, 2041, 13]</span> <span class="new">&rarr; &lt;end&gt;</span></li>
    </ol>
    <p class="handwritten-green-text" style="font-size: 22px;">
      &rarr; Only at the very end are the IDs turned back into text (<strong>decoding</strong>): 2041 &rarr; &ldquo;&nbsp;today&rdquo;, 13 &rarr; &ldquo;.&rdquo; &mdash; and you see &ldquo;Weather is so good today.&rdquo;
    </p>

    <div class="sk-scribble">
      <span class="sk-scribble-icon">☝</span>
      <span>Remember topic 1.2: &ldquo;predict the next word&rdquo; was a simplification. From now on think &ldquo;predict the next <em>token ID</em>&rdquo;.</span>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 2: What is a token? · Words vs Characters vs Tokens
     ========================================================= -->
<article class="notebook-page"
  data-title="What Is a Token?"
  data-subtitle="Tokenizer, unit of text, words vs characters vs tokens"
  data-keywords="what is a token tokenizer unit of text playing play ing words characters tokens openai tokenizer tool mount kangchenjunga"
  data-tag="Tokenizer" data-tag-color="blue">
  <div class="page-content">

    <h2 class="note-section-red"># What is a token?</h2>

    <p class="note-def-blue">
      A token is a <strong>unit of text</strong> defined by a <strong>tokenizer</strong>.
    </p>
    <p class="handwritten-yellow-text">
      A <strong>tokenizer</strong> is a machine (an algorithm) that converts statements into tokens &mdash; and tokens into IDs.
    </p>

    <figure class="sk-figure tape-blue">
      <svg class="sk-svg" viewBox="0 0 800 232" role="img" aria-label="The tokenizer is a machine: text goes in, token pieces and their IDs come out; it also works in reverse to decode IDs back into text">
        <rect class="s b fb" x="20" y="70" width="170" height="64" rx="10"/>
        <text x="105" y="98" text-anchor="middle">&ldquo;I am playing&rdquo;</text>
        <text x="105" y="122" text-anchor="middle" class="xs m">raw text</text>
        <path class="s a" d="M194,102 L262,102"/>
        <rect class="s y fy thick" x="268" y="40" width="250" height="124" rx="14"/>
        <text x="393" y="88" text-anchor="middle" class="lg y">Tokenizer ⚙️</text>
        <text x="393" y="118" text-anchor="middle" class="sm">split &rarr; look up vocabulary</text>
        <text x="393" y="142" text-anchor="middle" class="xs m">(an algorithm, not a neural net)</text>
        <path class="s a" d="M522,102 L590,102"/>
        <rect class="s g fg" x="596" y="58" width="190" height="88" rx="10"/>
        <text x="691" y="88" text-anchor="middle" class="g">I | ␣am | ␣play | ing</text>
        <text x="691" y="122" text-anchor="middle" class="b">[40, 939, 6106, 287]</text>
        <path class="s m dash a m" d="M691,150 Q691,196 393,196 Q160,196 120,140"/>
        <text x="400" y="224" text-anchor="middle" class="xs m">decode: IDs → text (the reverse trip)</text>
      </svg>
      <figcaption class="sk-caption">IDs are illustrative &middot; &ldquo;␣&rdquo; marks a space that is glued to the front of the token</figcaption>
    </figure>

    <h2 class="note-section-red"># Unit of text</h2>
    <p class="handwritten-blue-text">A word can split into <strong>multiple tokens</strong>:</p>

    <div class="tok-strip">
      <span class="tok">play<small>1 token</small></span><span class="tok">ing<small>1 token</small></span>
      <span class="tok-eq">= &ldquo;playing&rdquo; &rarr; 2 tokens</span>
    </div>

    <p class="handwritten-dark-text">
      How a word is broken down depends on the tokenizer &mdash; there are <strong>different types of algorithms</strong> (BPE, WordPiece, Unigram &rarr; page 4).
    </p>
    <div class="yellow-callout">
      <span>★ Each and every word is <strong>not</strong> a token. Common words are usually 1 token; rare, long or foreign words become several.</span>
    </div>

    <div class="sk-scribble blue">
      <span class="sk-scribble-icon">🔧</span>
      <span>Try it: search <strong>&ldquo;OpenAI Tokenizer&rdquo;</strong> &mdash; paste any sentence and it colours every token and shows the IDs. Best way to build intuition!</span>
    </div>

    <h2 class="note-section-red"># Words vs. Characters vs. Tokens</h2>

    <div class="tok-strip big">
      <span class="tok">Mount<small>26693</small></span><span class="tok">&nbsp;Kang<small>74233</small></span><span class="tok">chen<small>3184</small></span><span class="tok">j<small>73</small></span><span class="tok">unga<small>15832</small></span>
    </div>
    <p class="handwritten-green-text" style="font-size: 22px;">&uarr; tokens on top, Token IDs below (from the OpenAI tokenizer tool)</p>

    <div class="sk-trace-wrap">
      <table class="handwritten-table">
        <thead><tr><th>&ldquo;Mount Kangchenjunga&rdquo;</th><th>Count</th><th>Pieces</th></tr></thead>
        <tbody>
          <tr><td><strong>Words</strong></td><td>2</td><td>Mount &middot; Kangchenjunga</td></tr>
          <tr><td><strong>Characters</strong></td><td>19</td><td>M &middot; o &middot; u &middot; n &middot; t &middot; ␣ &middot; K &middot; a &middot; n &hellip;</td></tr>
          <tr><td><strong>Tokens</strong></td><td>5</td><td>Mount &middot; ␣Kang &middot; chen &middot; j &middot; unga</td></tr>
        </tbody>
      </table>
    </div>

    <div class="sk-stickies">
      <div class="sk-sticky"><h4>Rule of thumb 📏</h4><ul><li>English: 1 token &asymp; 4 characters</li><li>&asymp; &frac34; of a word</li><li>100 tokens &asymp; 75 words</li></ul></div>
      <div class="sk-sticky blue"><h4>Why it matters</h4><ul><li>Cost is per token</li><li>Limits are in tokens</li><li>Speed is tokens / second</li></ul></div>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 3: Why subword tokenization · Vocabulary & Token ID
     ========================================================= -->
<article class="notebook-page"
  data-title="Subwords &amp; the Vocabulary"
  data-subtitle="Why subword tokenization, vocabulary, Token ID lookup"
  data-keywords="subword tokenization word level character level vocabulary size sequence length token id lookup unknown oov"
  data-tag="Vocabulary" data-tag-color="purple">
  <div class="page-content">

    <h2 class="note-section-red"># Why models use <span class="sk-wavy">subword</span> tokenization</h2>
    <p class="handwritten-yellow-text" style="font-size: 22px;">subword = a substring of a word (&ldquo;play&rdquo;, &ldquo;ing&rdquo;, &ldquo;un&rdquo;, &ldquo;able&rdquo;)</p>

    <figure class="sk-figure tape-green">
      <svg class="sk-svg" viewBox="0 0 800 260" role="img" aria-label="A see-saw: word tokenization gives a huge vocabulary, character tokenization gives very long sequences, subword tokenization balances both">
        <path class="s thick" d="M110,150 L690,110"/>
        <path class="s fy" d="M400,130 L370,190 L430,190 Z"/>
        <rect class="s r fp" x="40" y="70" width="210" height="70" rx="10"/>
        <text x="145" y="98" text-anchor="middle" class="r">Word-level</text>
        <text x="145" y="124" text-anchor="middle" class="xs">vocabulary = huge 📚📚📚</text>
        <rect class="s b fb" x="560" y="30" width="210" height="70" rx="10"/>
        <text x="665" y="58" text-anchor="middle" class="b">Character-level</text>
        <text x="665" y="84" text-anchor="middle" class="xs">sequences = very long 🐍</text>
        <rect class="s g fg thick" x="290" y="200" width="220" height="50" rx="10"/>
        <text x="400" y="232" text-anchor="middle" class="g">Subword = the balance ⚖️</text>
      </svg>
    </figure>

    <div class="sk-trace-wrap">
      <table class="handwritten-table">
        <thead><tr><th></th><th>📚 Word</th><th>🔤 Character</th><th>🧩 Subword</th></tr></thead>
        <tbody>
          <tr><td><strong>Vocabulary</strong></td><td>Very lengthy (every word form + names + typos)</td><td>Tiny (a few hundred)</td><td>Medium (~50k&ndash;200k)</td></tr>
          <tr><td><strong>Sequence</strong></td><td>Short</td><td>Very long sequences</td><td>Medium</td></tr>
          <tr><td><strong>New word?</strong></td><td>✗ Unknown &rarr; &lt;UNK&gt;</td><td>✓ always works</td><td>✓ built from known pieces</td></tr>
          <tr><td><strong>Meaning per piece</strong></td><td>High</td><td>Almost none</td><td>Good</td></tr>
        </tbody>
      </table>
    </div>
    <p class="handwritten-dark-text">Subword is a <strong>balance of both</strong>: frequent words stay whole, rare words are built from reusable parts.</p>

    <h2 class="note-section-red"># Vocabulary &amp; Token ID</h2>
    <div class="handwritten-blue-text">&rarr; Every tokenizer has a <strong>vocabulary</strong>.</div>
    <div class="handwritten-blue-text">&rarr; The vocabulary is the collection of tokens that the tokenizer knows <u>how to represent directly</u>.</div>

    <div class="two-col">
      <div>
        <p class="handwritten-dark-text">You can imagine a simplified vocabulary like this:</p>
        <table class="handwritten-table">
          <thead><tr><th>Token</th><th>ID</th></tr></thead>
          <tbody>
            <tr><td>&ldquo;The&rdquo;</td><td>10</td></tr>
            <tr><td>&ldquo;is&rdquo;</td><td>11</td></tr>
            <tr><td>&ldquo;Java&rdquo;</td><td>12</td></tr>
            <tr><td>&ldquo;Script&rdquo;</td><td>13</td></tr>
            <tr><td>&ldquo;.&rdquo;</td><td>14</td></tr>
            <tr><td>&ldquo;ing&rdquo;</td><td>15</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <p class="handwritten-yellow-text">&larr; these are just examples</p>
        <div class="prompt-card">
          <div class="prompt-label">Encode with this vocabulary</div>
          <div class="prompt-text">&ldquo;JavaScript.&rdquo;</div>
          <div class="prompt-label">Tokens &rarr; IDs</div>
          <div class="prompt-text out">Java | Script | . &rarr; [12, 13, 14]</div>
        </div>
        <div class="sk-scribble purple">
          <span class="sk-scribble-icon">💡</span>
          <span>The ID is just a <strong>row number</strong> in the vocabulary &mdash; like a roll number. 12 doesn&rsquo;t &ldquo;mean&rdquo; Java.</span>
        </div>
      </div>
    </div>

    <div class="sk-stickies">
      <div class="sk-sticky purple"><h4>Real vocab sizes</h4><ul><li>GPT-2: ~50k tokens</li><li>GPT-4 (cl100k): ~100k</li><li>GPT-4o (o200k): ~200k</li></ul></div>
      <div class="sk-sticky green"><h4>Then what?</h4><ul><li>Inside the model each ID picks a row of numbers (an <strong>embedding</strong>) &mdash; that&rsquo;s where meaning is learned</li></ul></div>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 4: BPE · WordPiece · Unigram
     ========================================================= -->
<article class="notebook-page"
  data-title="BPE, WordPiece &amp; Unigram"
  data-subtitle="How tokenizers build their vocabulary"
  data-keywords="byte pair encoding bpe merge wordpiece longest match ## unigram sentencepiece tiktoken bert gpt llama un able"
  data-tag="Algorithms" data-tag-color="green">
  <div class="page-content">

    <p class="handwritten-green-text" style="font-size: 24px;">OpenAI uses <strong>&ldquo;Byte Pair Encoding&rdquo; (BPE)</strong> tokenizers.</p>

    <h2 class="note-section-red"># Byte Pair Encoding (BPE)</h2>
    <p class="note-def-blue">
      BPE builds a vocabulary by <strong>repeatedly merging</strong> frequently occurring <span class="sk-wavy">neighbouring pieces</span>.
    </p>

    <figure class="sk-figure tape-blue">
      <svg class="sk-svg" viewBox="0 0 800 330" role="img" aria-label="BPE training on low, lower, lowest, new, newest: start from characters, merge the most frequent neighbouring pair again and again until low, new and est become single tokens">
        <text x="20" y="34" class="sm m">training words &rarr;</text>
        <text x="170" y="34" class="sm">low &middot; lower &middot; lowest &middot; new &middot; newest</text>

        <text x="20" y="80" class="b">Start</text>
        <text x="170" y="80" class="mono" style="font-size: 17px;">l o w | l o w e r | l o w e s t | n e w | n e w e s t</text>

        <text x="20" y="126" class="b">Merge 1</text>
        <text x="110" y="126" class="xs y">l+o</text>
        <text x="170" y="126" class="mono" style="font-size: 17px;">lo w | lo w e r | lo w e s t | n e w | n e w e s t</text>

        <text x="20" y="172" class="b">Merge 2</text>
        <text x="110" y="172" class="xs y">lo+w</text>
        <text x="170" y="172" class="mono" style="font-size: 17px;">low | low e r | low e s t | n e w | n e w e s t</text>

        <text x="20" y="218" class="b">Merge 3,4</text>
        <text x="110" y="218" class="xs y">e+s, es+t</text>
        <text x="170" y="218" class="mono" style="font-size: 17px;">low | low e r | low est | n e w | n e w est</text>

        <text x="20" y="286" class="g">Merge 5,6</text>
        <text x="110" y="286" class="xs y">n+e, ne+w</text>
        <rect class="hl" x="164" y="268" width="410" height="28" rx="4"/>
        <text x="170" y="288" class="mono" style="font-size: 17px;">low | low e r | low est | new | new est</text>
        <text x="600" y="318" class="sm g">low, new, est = 1 token each ✓</text>
      </svg>
      <figcaption class="sk-caption">Count every neighbouring pair &rarr; merge the most frequent &rarr; add it to the vocabulary &rarr; repeat (tens of thousands of times)</figcaption>
    </figure>

    <p class="handwritten-dark-text">The same idea on real words &mdash; frequent parts become reusable tokens:</p>
    <div class="tok-strip">
      <span class="tok">un</span><span class="tok">trust</span><span class="tok">able</span><span class="tok-gap"></span>
      <span class="tok">un</span><span class="tok">manage</span><span class="tok">able</span><span class="tok-gap"></span>
      <span class="tok">un</span><span class="tok">imagin</span><span class="tok">able</span><span class="tok-gap"></span>
      <span class="tok">un</span><span class="tok">relat</span><span class="tok">able</span>
    </div>
    <p class="handwritten-blue-text" style="font-size: 22px;">&rarr; <strong>&ldquo;un&rdquo; &rarr; 1 token</strong>, <strong>&ldquo;able&rdquo; &rarr; 1 token</strong>, reused in thousands of words. (Splits are illustrative &mdash; real ones vary by tokenizer.)</p>

    <div class="sk-scribble green">
      <span class="sk-scribble-icon">🔢</span>
      <span>&ldquo;Byte&rdquo; level: GPT-style BPE starts from <strong>raw bytes</strong>, not letters &mdash; so any text (Hindi, emoji, code) can always be encoded. No &lt;UNK&gt; token ever.</span>
    </div>

    <h2 class="note-section-red"># WordPiece <span style="font-size: 0.7em;">(select &amp; match useful patterns)</span></h2>
    <p class="handwritten-blue-text">
      Builds vocabulary pieces based on how <strong>useful</strong> they are for representing the training data, often using a <strong>likelihood-based criterion</strong>.
      It matches useful vocabulary pieces using a <strong>longest-match-first</strong> style for each pre-tokenised word.
    </p>
    <div class="tok-strip">
      <span class="tok">play</span><span class="tok">##ing</span>
      <span class="tok-eq">&larr; &ldquo;##&rdquo; = continues the previous piece (used by BERT)</span>
    </div>

    <h2 class="note-section-red"># Unigram</h2>
    <p class="handwritten-blue-text">
      Begins with a <strong>larger set</strong> of possible pieces and <strong>gradually removes</strong> less useful ones. Somewhat exactly the <strong>opposite of BPE</strong>.
    </p>

    <div class="sk-trace-wrap">
      <table class="handwritten-table">
        <thead><tr><th>Algorithm</th><th>Direction</th><th>Seen in</th></tr></thead>
        <tbody>
          <tr><td><strong>BPE</strong></td><td>⬆ small &rarr; grow by merging</td><td>GPT models (tiktoken), Llama 3</td></tr>
          <tr><td><strong>WordPiece</strong></td><td>⬆ grow, pick by likelihood</td><td>BERT</td></tr>
          <tr><td><strong>Unigram</strong></td><td>⬇ big &rarr; prune</td><td>T5, ALBERT (via SentencePiece)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="yellow-callout">
      <span>★ Modern tokenizers usually break unfamiliar text into <strong>reusable subword units</strong> rather than treating every complete word as unique.</span>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 5: English vs other languages · Fertility
     ========================================================= -->
<article class="notebook-page"
  data-title="English vs Other Languages"
  data-subtitle="Hindi, Hinglish, mixed script &amp; tokenization fertility"
  data-keywords="english hindi hinglish mixed script devanagari samjha token count fertility multilingual cost language"
  data-tag="Languages" data-tag-color="yellow">
  <div class="page-content">

    <h2 class="note-section-red"># English vs. other languages</h2>
    <p class="handwritten-dark-text">Same meaning, four ways of writing it:</p>

    <div class="lang-grid">
      <div class="lang-card">
        <div class="lang-label">English</div>
        <div class="lang-text">I am learning artificial intelligence.</div>
      </div>
      <div class="lang-card">
        <div class="lang-label">Hindi</div>
        <div class="lang-text">मैं आर्टिफिशियल इंटेलिजेंस सीख रहा हूँ।</div>
      </div>
      <div class="lang-card">
        <div class="lang-label">Hinglish</div>
        <div class="lang-text">Main artificial intelligence seekh raha hoon.</div>
      </div>
      <div class="lang-card">
        <div class="lang-label">Mixed script</div>
        <div class="lang-text">मैं Artificial Intelligence सीख रहा हूँ।</div>
      </div>
    </div>

    <div class="quote-box-red" style="font-size: 24px; text-align: center;">
      Two sentences with the same meaning do <u>not</u> necessarily have the same token count.
    </div>

    <figure class="sk-figure tape-pink">
      <svg class="sk-svg" viewBox="0 0 800 230" role="img" aria-label="Sketch: the English sentence uses the fewest tokens, Hinglish a few more, mixed script more, and Hindi in Devanagari usually the most">
        <text x="20" y="28" class="sm m">relative token count (typical shape, not exact numbers)</text>
        <text x="20" y="72">English</text>
        <rect class="s g fg" x="170" y="52" width="170" height="28" rx="5"/>
        <text x="20" y="118">Hinglish</text>
        <rect class="s b fb" x="170" y="98" width="250" height="28" rx="5"/>
        <text x="20" y="164">Mixed script</text>
        <rect class="s y fy" x="170" y="144" width="380" height="28" rx="5"/>
        <text x="20" y="210">Hindi</text>
        <rect class="s r fp" x="170" y="190" width="560" height="28" rx="5"/>
        <text x="740" y="210" class="sm r">💸</text>
      </svg>
      <figcaption class="sk-caption">Tokenizers learn from training data that is mostly English &rarr; English pieces get merged into big tokens; Devanagari is split into many small ones</figcaption>
    </figure>

    <h2 class="note-section-red"># Hinglish is especially interesting</h2>
    <p class="handwritten-dark-text">because it mixes:</p>
    <div class="modality-tags-grid">
      <span class="modality-tag">🔤 English vocabulary</span>
      <span class="modality-tag">📐 Hindi grammar</span>
      <span class="modality-tag">🅰 Roman script</span>
      <span class="modality-tag">✍️ Informal spellings</span>
      <span class="modality-tag">💬 Language-specific expressions</span>
    </div>

    <p class="handwritten-dark-text">The word <strong>samjha</strong> could also be written as:</p>
    <div class="tok-strip big">
      <span class="tok">samjha</span><span class="tok">samjhao</span><span class="tok">samjhaao</span><span class="tok">samjha do</span><span class="tok">samjhaado</span>
    </div>
    <div class="sk-scribble blue">
      <span class="sk-scribble-icon">👀</span>
      <span>Humans may understand all of these. But the tokenizer sees <strong>different strings</strong> &rarr; different tokens &rarr; different IDs. The model has to learn that they mean the same thing.</span>
    </div>

    <h2 class="note-section-red"># What is tokenization fertility?</h2>
    <p class="note-def-blue">
      Tokenization <strong>fertility</strong> measures how many tokens are produced for a word, character sequence, or linguistic unit.
    </p>
    <div class="formula-line">fertility = number of tokens &divide; number of words</div>
    <div class="handwritten-blue-text">&rarr; <strong>Higher fertility</strong> generally means the text is being divided into <strong>more pieces</strong>.</div>

    <div class="sk-stickies">
      <div class="sk-sticky pink"><h4>High fertility costs you</h4><ul><li>💸 more money (billed per token)</li><li>📦 fills the context window faster</li><li>🐢 slower replies</li></ul></div>
      <div class="sk-sticky green"><h4>Good news</h4><ul><li>Newer tokenizers have bigger, more multilingual vocabularies &rarr; the gap is shrinking</li></ul></div>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 6: Tricky text — emojis, whitespace, capitals, code
     ========================================================= -->
<article class="notebook-page"
  data-title="Emojis, Spaces, Capitals &amp; Code"
  data-subtitle="Things that quietly change the token count"
  data-keywords="emoji whitespace spaces capital letters uppercase special characters code syntax indentation numbers digits"
  data-tag="Gotchas" data-tag-color="red">
  <div class="page-content">

    <h2 class="note-section-red"># Things that change tokenization</h2>
    <p class="handwritten-dark-text">Small things a human ignores can produce <strong>completely different tokens</strong>:</p>

    <h3 class="sub-heading-yellow">😀 Emojis</h3>
    <div class="tok-strip">
      <span class="tok">👍</span>
      <span class="tok-eq">usually 1&ndash;2 tokens</span>
      <span class="tok-gap"></span>
      <span class="tok">👨</span><span class="tok zwj">ZWJ</span><span class="tok">👩</span><span class="tok zwj">ZWJ</span><span class="tok">👧</span>
      <span class="tok-eq">&ldquo;family&rdquo; = 3 emojis glued by invisible joiners &rarr; many tokens</span>
    </div>

    <h3 class="sub-heading-yellow">␣ Whitespace</h3>
    <div class="tok-strip">
      <span class="tok">Hello</span><span class="tok-eq">&ne;</span><span class="tok">␣Hello</span><span class="tok-eq">&ne;</span><span class="tok">␣␣␣␣</span><span class="tok">Hello</span>
    </div>
    <p class="handwritten-blue-text" style="font-size: 21px;">&rarr; the space before a word is usually <strong>part of</strong> the token. Extra spaces, tabs and newlines are tokens too.</p>

    <h3 class="sub-heading-yellow">Aa Capital letters</h3>
    <div class="tok-strip">
      <span class="tok">hello</span><span class="tok-eq">vs</span><span class="tok">Hello</span><span class="tok-eq">vs</span><span class="tok">HEL</span><span class="tok">LO</span>
    </div>
    <p class="handwritten-blue-text" style="font-size: 21px;">&rarr; same word, different IDs. ALL CAPS text is less common in training &rarr; often splits into more pieces.</p>

    <h3 class="sub-heading-yellow">#@! Special characters &amp; numbers</h3>
    <div class="tok-strip">
      <span class="tok">202</span><span class="tok">6</span><span class="tok-gap"></span>
      <span class="tok">3</span><span class="tok">.</span><span class="tok">141</span><span class="tok">59</span><span class="tok-gap"></span>
      <span class="tok">!=</span><span class="tok">===</span><span class="tok">=&gt;</span>
    </div>
    <p class="handwritten-blue-text" style="font-size: 21px;">&rarr; numbers are often chopped into chunks of digits &mdash; one reason LLMs used to be bad at arithmetic.</p>

    <h3 class="sub-heading-yellow">💻 Ex &mdash; Code &amp; syntax</h3>
    <div class="prompt-card">
      <div class="prompt-label">Every brace, indent and newline costs tokens</div>
      <div class="prompt-text">function add(a, b) {<br />&nbsp;&nbsp;&nbsp;&nbsp;return a + b;<br />}</div>
    </div>
    <p class="handwritten-dark-text">Indentation, brackets and long variable names all add up. Minified JSON is cheaper than pretty-printed JSON.</p>

    <div class="sk-scribble">
      <span class="sk-scribble-icon">⚠</span>
      <span>Why can&rsquo;t a model count the letters in &ldquo;strawberry&rdquo;? It never saw letters &mdash; it saw something like <strong>str | aw | berry</strong>. Spelling questions are hard for a token-based brain!</span>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 7: Special tokens · Chat templates
     ========================================================= -->
<article class="notebook-page"
  data-title="Special Tokens &amp; Chat Format"
  data-subtitle="System / user / assistant markers the model really sees"
  data-keywords="special tokens system instructions start of message end of message tool output retrieval chat template im_start system user assistant role"
  data-tag="Special Tokens" data-tag-color="purple">
  <div class="page-content">

    <h2 class="note-section-red"># Special tokens</h2>
    <p class="note-def-blue">
      Besides normal text pieces, the vocabulary has <strong>reserved tokens</strong> that never appear in normal writing. They tell the model <em>where things begin and end</em> and <em>who is speaking</em>.
    </p>

    <div class="modality-tags-grid">
      <span class="modality-tag">⚙️ System instructions</span>
      <span class="modality-tag">▶ Start of message</span>
      <span class="modality-tag">⏹ End of message</span>
      <span class="modality-tag">🛠️ Tool output</span>
      <span class="modality-tag">🔚 Last message</span>
      <span class="modality-tag">📚 Retrieval docs</span>
      <span class="modality-tag">&hellip;and much more</span>
    </div>

    <h2 class="note-section-red"># How a chat really looks to the LLM</h2>
    <div class="two-col">
      <div>
        <p class="handwritten-dark-text">What you see in the app:</p>
        <div class="chat-mini">
          <div class="chat-bubble user">what is 2+2?</div>
          <div class="chat-bubble bot">4</div>
          <div class="chat-bubble user">what is 3+3?</div>
          <div class="chat-bubble bot typing">&hellip;</div>
        </div>
      </div>
      <div>
        <p class="handwritten-dark-text">What the model receives (one long text):</p>
        <div class="prompt-card">
          <div class="prompt-text">User: what is 2+2?<br />Assistant: 4<br />User: what is 3+3?<br />Assistant:<span class="sk-wavy">&nbsp;&nbsp;&nbsp;</span></div>
        </div>
        <p class="handwritten-green-text" style="font-size: 21px;">&rarr; the next most likely token after &ldquo;Assistant:&rdquo; is &ldquo;6&rdquo;. A chat is just <strong>document completion</strong>!</p>
      </div>
    </div>

    <p class="handwritten-dark-text">With role markers, a closure question looks like this:</p>
    <div class="chat-template">
      <div class="ct-tag sys">&lt;SYSTEM&gt;</div>
      <div class="ct-body">You are a helpful AI Assistant</div>
      <div class="ct-tag sys">&lt;/SYSTEM&gt;</div>
      <div class="ct-tag usr">&lt;USER&gt;</div>
      <div class="ct-body">Explain closures in JavaScript.</div>
      <div class="ct-tag usr">&lt;/USER&gt;</div>
      <div class="ct-tag ast">&lt;ASSISTANT&gt;</div>
      <div class="ct-body">A closure is &hellip; <span class="ct-note">&larr; the model writes from here</span></div>
      <div class="ct-tag ast">&lt;/ASSISTANT&gt;</div>
    </div>

    <div class="yellow-callout">
      <span>★ The exact format <strong>varies across models and systems</strong>. The model may receive <strong>special tokens</strong> (each a single ID) rather than these visible labels &mdash; e.g. ChatML-style <code class="sk-code" style="font-variant-ligatures: none;">&lt;|im_start|&gt;user</code> &hellip; <code class="sk-code" style="font-variant-ligatures: none;">&lt;|im_end|&gt;</code>.</span>
    </div>

    <div class="sk-scribble purple">
      <span class="sk-scribble-icon">🔐</span>
      <span>Why special? You can type the text &ldquo;&lt;SYSTEM&gt;&rdquo; in a chat, but it becomes ordinary tokens &mdash; not the reserved ID. That makes it harder to fake a system message.</span>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 8: Context window · What happens when it fills
     ========================================================= -->
<article class="notebook-page"
  data-title="The Context Window"
  data-subtitle="What it holds, shared input/output, when it fills up"
  data-keywords="context window working memory limit maximum context length system instructions prompt previous messages documents tools response truncate summarise"
  data-tag="Context" data-tag-color="blue">
  <div class="page-content">

    <h2 class="note-section-red"># Context window</h2>
    <p class="note-def-blue">
      A context window is the <strong>amount of tokenized information</strong> a model can process within a request or active generation context.
    </p>
    <div class="handwritten-blue-text">&rarr; A language model does <strong>not</strong> have unlimited working memory.</div>
    <div class="handwritten-blue-text">&rarr; Every model has a limit on how many tokens it can process at once.</div>
    <div class="handwritten-dark-text">&rarr; This is called the <span class="sk-circle">context window</span>.</div>

    <figure class="sk-figure tape-blue">
      <svg class="sk-svg" viewBox="0 0 800 250" role="img" aria-label="The context window as one long bar filled with system instructions, previous messages, documents, retrieved info, tool outputs, the current prompt and the model's response, ending at the maximum context length">
        <text x="20" y="30" class="sm m">one request = one context window</text>
        <rect class="s thick" x="20" y="50" width="760" height="70" rx="8"/>
        <rect class="s thin p fv" x="24" y="54" width="80" height="62"/>
        <text x="64" y="90" text-anchor="middle" class="sm p">System</text>
        <rect class="s thin b fb" x="104" y="54" width="170" height="62"/>
        <text x="189" y="90" text-anchor="middle" class="sm b">Previous messages</text>
        <rect class="s thin y fy" x="274" y="54" width="120" height="62"/>
        <text x="334" y="90" text-anchor="middle" class="sm y">Document text</text>
        <rect class="s thin y fy" x="394" y="54" width="90" height="62"/>
        <text x="439" y="90" text-anchor="middle" class="sm y">Retrieved</text>
        <rect class="s thin m fw" x="484" y="54" width="80" height="62"/>
        <text x="524" y="90" text-anchor="middle" class="sm">Tools</text>
        <rect class="s thin r fp" x="564" y="54" width="80" height="62"/>
        <text x="604" y="90" text-anchor="middle" class="sm r">Prompt</text>
        <rect class="s thin g fg" x="644" y="54" width="132" height="62"/>
        <text x="710" y="90" text-anchor="middle" class="sm g">Response ✍️</text>

        <path class="s a" d="M24,150 L640,150"/>
        <text x="300" y="175" text-anchor="middle" class="sm">what you send (input tokens)</text>
        <path class="s g a g" d="M646,150 L776,150"/>
        <text x="712" y="175" text-anchor="middle" class="sm g">what it generates</text>

        <path class="s r thick" d="M780,40 L780,130"/>
        <text x="780" y="212" text-anchor="end" class="r">↑ Maximum Context Length</text>
        <text x="20" y="235" class="sm m">all of these consume tokens · the space is shared</text>
      </svg>
    </figure>

    <p class="handwritten-green-text">&rarr; The context may include: system instructions, your current prompt, previous messages, uploaded document text, retrieved information, tool outputs, and the model&rsquo;s generated response.</p>
    <div class="yellow-callout">
      <span>★ All of these consume tokens. The context window is <strong>shared</strong> between what you send and what the model generates.</span>
    </div>

    <h2 class="note-section-red"># What happens when the context window fills?</h2>
    <p class="handwritten-dark-text">Different applications may handle this differently. Possible strategies include:</p>
    <div class="nlp-steps-list">
      <div class="nlp-step-item"><span class="step-num">1.</span><span><strong>Rejecting</strong> the request (&ldquo;input too long&rdquo; error)</span></div>
      <div class="nlp-step-item"><span class="step-num">2.</span><span><strong>Truncating</strong> some input</span></div>
      <div class="nlp-step-item"><span class="step-num">3.</span><span><strong>Removing older</strong> conversation turns</span></div>
      <div class="nlp-step-item"><span class="step-num">4.</span><span><strong>Summarising</strong> previous messages</span></div>
      <div class="nlp-step-item"><span class="step-num">5.</span><span><strong>Retrieving only relevant</strong> sections (RAG, topic 1.2)</span></div>
      <div class="nlp-step-item"><span class="step-num">6.</span><span><strong>Asking the user</strong> to shorten the input</span></div>
      <div class="nlp-step-item"><span class="step-num">7.</span><span><strong>Splitting the work</strong> into multiple requests</span></div>
    </div>

    <figure class="sk-figure">
      <svg class="sk-svg" viewBox="0 0 800 250" role="img" aria-label="The chat screen shows all ten messages, but the model's context only holds a summary of the old ones plus the latest messages">
        <text x="160" y="28" text-anchor="middle" class="b">📱 What you see</text>
        <rect class="s b" x="60" y="40" width="200" height="200" rx="14"/>
        <rect class="s thin m fb" x="76" y="54" width="120" height="18" rx="6"/>
        <rect class="s thin m fg" x="124" y="80" width="120" height="18" rx="6"/>
        <rect class="s thin m fb" x="76" y="106" width="120" height="18" rx="6"/>
        <rect class="s thin m fg" x="124" y="132" width="120" height="18" rx="6"/>
        <rect class="s thin m fb" x="76" y="158" width="120" height="18" rx="6"/>
        <rect class="s thin m fg" x="124" y="184" width="120" height="18" rx="6"/>
        <rect class="s thin m fb" x="76" y="210" width="120" height="18" rx="6"/>
        <text x="400" y="140" text-anchor="middle" class="lg r">&ne;</text>
        <text x="620" y="28" text-anchor="middle" class="p">🧠 What the model gets</text>
        <rect class="s p" x="520" y="40" width="200" height="200" rx="14"/>
        <rect class="s thin y fy" x="536" y="54" width="168" height="52" rx="6"/>
        <text x="620" y="86" text-anchor="middle" class="xs">summary of old msgs</text>
        <rect class="s thin m fg" x="584" y="132" width="120" height="18" rx="6"/>
        <rect class="s thin m fb" x="536" y="158" width="120" height="18" rx="6"/>
        <rect class="s thin m fg" x="584" y="184" width="120" height="18" rx="6"/>
        <rect class="s thin m fb" x="536" y="210" width="120" height="18" rx="6"/>
      </svg>
    </figure>

    <div class="handwritten-yellow-text">⚠ Do <strong>not</strong> assume that an AI product permanently remembers every message simply because it appears in the chat interface.</div>
    <div class="handwritten-yellow-text">⚠ The visible conversation and the exact text currently included in the model&rsquo;s context are <strong>not always identical</strong>.</div>
    <p class="handwritten-green-text" style="font-size: 24px;">&rarr; Every model has a &ldquo;<strong>Maximum Context Length</strong>&rdquo;.</p>

  </div>
</article>

<!-- =========================================================
     PAGE 9: Long prompt != better results · Tokens = API cost
     ========================================================= -->
<article class="notebook-page"
  data-title="Long Prompt &ne; Better Results"
  data-subtitle="Specific beats long, and tokens directly affect API cost"
  data-keywords="long prompt better results closures javascript beginner counter 250 words specific prompt api cost input output tokens pricing"
  data-tag="Prompting" data-tag-color="green">
  <div class="page-content">

    <h2 class="note-section-red"># Long Prompt != Better Results</h2>

    <div class="prompt-card">
      <div class="prompt-label">Prompt A &middot; short &middot; &asymp; 10 tokens</div>
      <div class="prompt-text">Explain closures in JavaScript with one simple example.</div>
    </div>

    <div class="prompt-card" style="background: var(--bg-red); border-color: rgba(220, 38, 38, 0.3);">
      <div class="prompt-label" style="color: var(--ink-red);">Prompt B &middot; long &middot; &asymp; 60 tokens &middot; asks for <u>exactly the same</u></div>
      <div class="prompt-text">I want you to provide an explanation of the concept known as closures in the JavaScript programming language. Please ensure that your explanation is understandable and not too complicated. Also include an example that is simple and easy to follow so that a beginner can understand the concept of closures properly.</div>
    </div>

    <div class="sk-scribble">
      <span class="sk-scribble-icon">✗</span>
      <span>B is 6&times; longer but adds <strong>no new information</strong>. &ldquo;understandable&rdquo;, &ldquo;not too complicated&rdquo;, &ldquo;simple and easy&rdquo; all say the same thing. You just pay more for it.</span>
    </div>

    <div class="prompt-card" style="background: var(--bg-green); border-color: rgba(5, 150, 105, 0.35);">
      <div class="prompt-label" style="color: var(--ink-green);">Prompt C &middot; specific &middot; &asymp; 40 tokens ✓</div>
      <div class="prompt-text">Explain closures in JavaScript to <span class="pc-hl pc-who">a beginner</span> who <span class="pc-hl pc-know">understands functions and scope</span> but <span class="pc-hl pc-gap">has never seen lexical environments</span>. Use <span class="pc-hl pc-fmt">one example involving a counter</span>. <span class="pc-hl pc-lim">Keep it under 250 words.</span></div>
    </div>

    <div class="pills-grid">
      <div class="green-pill-item pc-key pc-who">👤 Audience</div>
      <div class="green-pill-item pc-key pc-know">✅ What they know</div>
      <div class="green-pill-item pc-key pc-gap">❓ What&rsquo;s new to them</div>
      <div class="green-pill-item pc-key pc-fmt">🧪 Exact example</div>
      <div class="green-pill-item pc-key pc-lim">📏 Length limit</div>
    </div>

    <div class="yellow-callout">
      <span>★ Every word in C carries <strong>new information</strong>. Better results come from being <strong>specific</strong>, not from being long.</span>
    </div>

    <div class="prompt-card">
      <div class="prompt-label">The counter example C asks for</div>
      <div class="prompt-text">function makeCounter() {<br />&nbsp;&nbsp;let count = 0;<br />&nbsp;&nbsp;return function () {<br />&nbsp;&nbsp;&nbsp;&nbsp;count++;<br />&nbsp;&nbsp;&nbsp;&nbsp;return count;<br />&nbsp;&nbsp;};<br />}<br />const next = makeCounter();<br />next(); // 1<br />next(); // 2 &nbsp;&larr; count was remembered</div>
    </div>

    <h2 class="note-section-red"># Tokens directly affect API cost 💰</h2>
    <div class="formula-line">cost = input tokens &times; input price + output tokens &times; output price</div>

    <div class="sk-trace-wrap">
      <table class="handwritten-table">
        <thead><tr><th>Imagine an app sends the prompt 1 million times</th><th>Prompt A</th><th>Prompt B</th></tr></thead>
        <tbody>
          <tr><td><strong>Input tokens / call</strong></td><td>&asymp; 10</td><td>&asymp; 60</td></tr>
          <tr><td><strong>Input tokens total</strong></td><td>10 M</td><td>60 M</td></tr>
          <tr><td><strong>At an example price of $3 / 1M input tokens</strong></td><td>$30</td><td>$180</td></tr>
        </tbody>
      </table>
    </div>
    <p class="handwritten-dark-text" style="font-size: 19px;">(Prices are made up for the maths &mdash; check your provider&rsquo;s pricing page. Output tokens usually cost <strong>more</strong> than input tokens, so &ldquo;keep it under 250 words&rdquo; saves money too.)</p>

    <div class="sk-stickies">
      <div class="sk-sticky green"><h4>Save tokens</h4><ul><li>Cut filler words</li><li>Ask for a length limit</li><li>Send only the relevant docs</li></ul></div>
      <div class="sk-sticky blue"><h4>Bonus</h4><ul><li>Fewer tokens = faster replies</li><li>&hellip;and more room left in the context window</li></ul></div>
    </div>

  </div>
</article>

<!-- =========================================================
     PAGE 10: Misconceptions · Revision · Quiz
     ========================================================= -->
<article class="notebook-page"
  data-title="Myths, Revision &amp; Quiz"
  data-subtitle="7 tokenization misconceptions, one-line revision"
  data-keywords="misconceptions myths one token one word same tokenizer token id meaning emoji larger vocabulary larger context perfect memory more tokens better answer revision quiz"
  data-tag="Summary" data-tag-color="slate">
  <div class="page-content">

    <h2 class="note-section-red"># Misconceptions ✗ &rarr; ✓</h2>

    <div class="sk-trace-wrap">
      <table class="handwritten-table myth-table">
        <thead><tr><th>✗ Myth</th><th>✓ Reality</th></tr></thead>
        <tbody>
          <tr><td>One token equals one word</td><td>A word can be 1 token or many (&ldquo;Kangchenjunga&rdquo; &rarr; 4); a token can even be a single space or letter</td></tr>
          <tr><td>Every model uses the same tokenizer</td><td>Each model family has its own vocabulary &mdash; the same text gives different tokens, IDs and counts</td></tr>
          <tr><td>Token ID represents meaning</td><td>An ID is just a position in the vocabulary. Meaning is learned later, in the embeddings</td></tr>
          <tr><td>One visible emoji equals one token</td><td>Many emojis are several code points / bytes &rarr; several tokens</td></tr>
          <tr><td>A larger vocabulary is always better</td><td>It shortens sequences but makes the embedding table bigger and gives rare tokens less training &mdash; it&rsquo;s a trade-off</td></tr>
          <tr><td>Larger context means perfect memory</td><td>Older turns may be dropped or summarised, and models can miss details buried in long contexts</td></tr>
          <tr><td>More tokens always produce a better answer</td><td>Specific beats long. Filler costs money and can distract the model</td></tr>
        </tbody>
      </table>
    </div>

    <h2 class="note-section-red"># One-line revision</h2>
    <table class="handwritten-table">
      <thead><tr><th>Concept</th><th>Remember it as</th></tr></thead>
      <tbody>
        <tr><td><strong>Token</strong></td><td>A unit of text defined by a tokenizer (word, subword, letter, space, byte)</td></tr>
        <tr><td><strong>Token ID</strong></td><td>The number the token is swapped for; LLMs predict the next ID</td></tr>
        <tr><td><strong>Tokenizer</strong></td><td>Algorithm: text &harr; tokens &harr; IDs</td></tr>
        <tr><td><strong>Vocabulary</strong></td><td>All tokens a tokenizer can represent directly</td></tr>
        <tr><td><strong>Subword</strong></td><td>Balance between huge word vocab and long character sequences</td></tr>
        <tr><td><strong>BPE / WordPiece / Unigram</strong></td><td>Merge frequent pairs &middot; pick likely pieces &middot; prune a big set</td></tr>
        <tr><td><strong>Fertility</strong></td><td>Tokens per word; higher = more cost, less room</td></tr>
        <tr><td><strong>Special tokens</strong></td><td>Reserved IDs marking roles, starts and ends</td></tr>
        <tr><td><strong>Context window</strong></td><td>Max tokens per request, shared by input and output</td></tr>
      </tbody>
    </table>

    <h2 class="note-section-red"># Quick self-quiz 🧠 <span style="font-size: 0.7em; color: var(--ink-blue);">(tap to reveal)</span></h2>
    <div class="qa-reveal-list">
      <details class="qa-reveal"><summary>What does an LLM actually predict?</summary><p>The next <strong>token ID</strong> &mdash; a number. The tokenizer decodes the IDs back into text at the end.</p></details>
      <details class="qa-reveal"><summary>Why not give every word its own token?</summary><p>The vocabulary would be enormous and any new word, name or typo would be unknown. Subwords keep the vocabulary manageable and can build <strong>any</strong> word.</p></details>
      <details class="qa-reveal"><summary>The same sentence in Hindi costs more than in English. Why?</summary><p><strong>Higher fertility</strong>: the tokenizer learned mostly from English, so Devanagari text is split into more, smaller tokens &mdash; and you pay per token.</p></details>
      <details class="qa-reveal"><summary>Your chat app shows message #1, but the model &ldquo;forgot&rdquo; it. How?</summary><p>The context window filled up, so the app <strong>dropped or summarised</strong> older turns. The visible chat &ne; the model&rsquo;s context.</p></details>
      <details class="qa-reveal"><summary>A 100-token prompt or a 40-token one &mdash; which gives better results?</summary><p>Whichever is more <strong>specific</strong>. Length alone doesn&rsquo;t help; it only adds cost.</p></details>
    </div>

  </div>
</article>
`);
