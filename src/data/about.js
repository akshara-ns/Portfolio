// ─────────────────────────────────────────────
//  PERSONAL INFO & ABOUT DATA
//  Update with your real information.
// ─────────────────────────────────────────────

export const personal = {
  name: 'Akshara Nadayanur Sathis Kanna',
  role: "Master's in ECE · ML & AI",
  tagline: 'Building trustworthy, human-centered AI for real-world use.',
  email: 'ns.akshara533@gmail.com',
  github: 'https://github.com/akshara-ns',
  linkedin: 'https://www.linkedin.com/in/akshara-nadayanur-sathis-kanna',
  resumeUrl: null, // Set to '/resume.pdf' after adding resume to /public
}

export const about = {
  aboutCard: {
    headlineJa: 'ことばと文化のあわいをつなぐ。',
    // logo paths are under /public; Vite base is applied in About.jsx
    backgroundTags: [
      { label: '🇮🇳 Born in India' },
      { label: '🇯🇵 Raised in Japan' },
      { label: 'B.E. at SIT', logo: 'logos/sit.png', logoVariant: 'emblemOnly' },
      { label: 'M.S. at CMU', logo: 'logos/cmu-mark.svg' },
    ],
    affiliations: [
      { label: 'Mobile Multimedia Communications Laboratory', logo: 'logos/sit.png', logoVariant: 'emblemOnly' },
      { label: 'Learning & Control Group', logo: 'logos/cmu-mark.svg' },
      { label: 'Japan Venture Academy', logo: 'logos/jva.png' },
    ],
  },
  bio: [
    "I'm Akshara, a Master's student in Electrical and Computer Engineering at Carnegie Mellon University, where I focus on machine learning, agentic AI, and human-AI interaction. Before CMU, I studied Computer Engineering at Shibaura Institute of Technology in Tokyo.",
    "Growing up in Japan shaped a lot of how I see technology. I was surrounded by systems designed to quietly support everyday life, which made me pay attention to how technology can be made accessible and thoughtfully integrated into the way people live. Studying and building in the US has only strengthened that perspective.",
    "What draws me most is building technology that is personalized, grounded in real human needs, and designed to support people in practical everyday contexts. I'm especially interested in how AI agents and intelligent systems can move beyond novelty and become tools that are genuinely trustworthy and supportive in people's lives.",
  ],
  beyondWork: [
    {
      emoji: '🌏',
      label: 'Third Culture',
      description: 'Indian roots, raised in Japan, living in the US. Fluent in three worlds; Japanese (JLPT N1).',
    },
    {
      emoji: '📚',
      label: "What I'm Reading",
      description: 'Currently: [Book title]. I gravitate toward books that sit at the edge of technology and society.',
    },
    {
      emoji: '🎵',
      label: 'Hobbies',
      description: 'Add your hobbies here — music, sports, cooking, travel, etc.',
    },
    {
      emoji: '🤝',
      label: 'Teaching & Mentoring',
      description: 'TA for Introduction to Deep Learning (11-785) at CMU. I mentor project groups, run office hours, and help students debug training loops, CNNs, Transformers, and ResNets in PyTorch.',
    },
    {
      emoji: '💡',
      label: 'Human-Centered Values',
      description: 'Tech should serve people. I care about trustworthy AI, ethics, and building systems like assistive navigation for visually impaired users.',
    },
  ],
}
