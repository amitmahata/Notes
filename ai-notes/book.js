// =========================================================
// AI NOTES — BOOK MANIFEST
// The single place that lists chapters and topics, in reading order.
//
//   chapter → { id, title, subtitle, icon, topics: [...] }
//   topic   → { id, title, subtitle, icon, file }
//
// Each topic's pages live in their own file under chapters/ and register
// themselves with AIBook.topic('<topic id>', `<article …>…`).
// A chapter with no topics shows as "Coming soon".
// How to add a topic or chapter: see README.md in this folder.
// =========================================================
window.AI_BOOK = {
  title: 'AI Notes',
  subtitle: 'A handwritten book on how AI thinks, how it evolved, and how it is changing the way we build software.',
  author: 'Amit Mahata',

  chapters: [
    {
      id: 'inside-the-mind-of-ai',
      title: 'Inside the Mind of AI',
      subtitle: 'Where AI came from, how machines learned to see, read and reason — and where it is heading.',
      icon: '🧠',
      topics: [
        {
          id: 'evolution-of-ai',
          title: 'The Evolution of AI',
          subtitle: 'From the Turing Test (1950) to autonomous AI agents',
          icon: '📜',
          file: 'chapters/01-inside-the-mind-of-ai/01-evolution-of-ai.js'
        },
        {
          id: 'does-chatgpt-know-or-guess',
          title: 'Does ChatGPT Know or Guess?',
          subtitle: 'Search vs LLMs, next-word prediction, hallucinations, tools & RAG',
          icon: '🎲',
          file: 'chapters/01-inside-the-mind-of-ai/02-does-chatgpt-know-or-guess.js'
        }
      ]
    },
    {
      id: 'ai-native-software-engineer',
      title: 'AI Native Software Engineer',
      subtitle: 'Building software with AI as a teammate — workflows, agents, prompting and the new engineering craft.',
      icon: '🤖',
      topics: []
    }
  ]
};
