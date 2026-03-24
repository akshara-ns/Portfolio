// ─────────────────────────────────────────────
//  TIMELINE DATA
//  Education and experience entries.
//  Types: 'education' | 'work' | 'research'
// ─────────────────────────────────────────────

// Ordered past to present so "My journey" reads as story: where you started → where you are now.
export const timeline = [
  {
    id: 5,
    type: 'work',
    title: 'Teaching Assistant · International IoT-Robotics Workshop',
    organization: 'Hanoi University of Science and Technology',
    location: 'Hanoi, Vietnam',
    period: 'Aug 2023 – Sep 2023',
    bullets: [
      'Helped organize an international collaborative workshop between Shibaura Institute of Technology, Hanoi University of Science and Technology, and Phenikaa University.',
      'Provided technical and communication support to students on IoT content creation and embedded systems project development.',
    ],
  },
  {
    id: 7,
    type: 'work',
    title: 'Teaching Assistant · SIT IoT-Robotics Workshop',
    organization: 'Shibaura Institute of Technology',
    location: 'Tokyo, Japan',
    period: 'Feb 2024 – Mar 2024',
    bullets: [
      'Assisted in hosting an international IoT-Robotics workshop at SIT for students from Phenikaa University, FPT University, and HUST (Vietnam), MingChi University of Technology (Taiwan), and UTHM (Malaysia).',
      'Provided technical support and facilitated cross-cultural collaboration across a diverse international cohort.',
    ],
  },
  {
    id: 2,
    type: 'education',
    title: 'B.E. in Computer Engineering',
    organization: 'Shibaura Institute of Technology',
    location: 'Tokyo, Japan',
    period: 'Oct 2020 – Sep 2024',
    subtitle: 'GPA: 3.9/4.0',
    bullets: [
      'Presidential Award of Excellence, 2024.',
      'Research: Wearable assistive navigation for visually impaired pedestrians — Best Paper Award, WSSE 2024.',
    ],
  },
  {
    id: 4,
    type: 'work',
    title: 'Startup Venture Fellow · Healthcare Recommender App',
    organization: 'Japan Venture Academy',
    location: 'Tokyo, Japan',
    period: 'Sep 2024 – Dec 2024',
    bullets: [
      'Led an interdisciplinary team building an AI-assisted clinic recommender for foreigners in Japan.',
      'Conducted user discovery, implemented a prototype matching and ranking pipeline, and designed end-to-end UX in Figma.',
      'Pitched the prototype at Google Tokyo JVA Expo.',
    ],
  },
  {
    id: 6,
    type: 'work',
    title: 'Teaching Assistant · Data Science Seminar',
    subtitle: 'Course 11-631',
    organization: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    period: 'Aug 2025 – Dec 2025',
    bullets: [
      'Facilitated a research-oriented seminar focused on modern data science methods and emerging AI topics.',
      'Reviewed student research deliverables and provided feedback on rigor, clarity, and reproducibility.',
      'Guided students in strengthening research framing, technical communication, and presentation quality.',
    ],
  },
  {
    id: 3,
    type: 'work',
    title: 'Teaching Assistant · Introduction to Deep Learning',
    subtitle: 'Course 11-785',
    organization: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    period: 'Nov 2025 – Present',
    bullets: [
      'Debugged assignments covering training loops, CNNs, sequence models, Transformers, and ResNets in PyTorch.',
      'Improved assignment robustness through edge-case testing, failure analysis, and solution validation.',
      'Mentored project groups and guided students on debugging strategies during office hours.',
    ],
  },
  {
    id: 1,
    type: 'education',
    title: 'M.S. in Electrical and Computer Engineering',
    organization: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    period: 'Expected Dec 2026',
    subtitle: 'GPA: 3.9/4.0',
    bullets: [
      'Focus areas: Machine Learning, Agentic AI, Human-AI Interaction.',
      'Coursework: Intro to ML, Deep Learning, Human-AI Interaction, Trustworthy AI, AI Agents, LLM Systems.',
    ],
  },
]
