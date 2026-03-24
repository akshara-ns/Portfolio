// ─────────────────────────────────────────────
//  PROJECTS DATA
//  Add, remove, or edit projects here.
//  Types: 'research' | 'academic' | 'independent'
// ─────────────────────────────────────────────

export const projects = [
  {
    id: 6,
    title: 'Personalized Wearable Assistive Navigation',
    subtitle: 'Mobile Multimedia Communications Laboratory · SIT',
    description: 'Designed and prototyped an edge-device wearable navigation system for visually impaired pedestrians using real-time video, YOLOv5 object detection, depth estimation, and personalized step-based audio guidance. Deployed on Jetson Nano and presented at WSSE 2024, where the work received the Best Paper Award.',
    type: 'research',
    tags: ['YOLOv5', 'Depth Estimation', 'Jetson Nano', 'Assistive Tech', 'Edge Deployment'],
    github: null,
    demo: null,
    year: 2024,
  },
  {
    id: 5,
    title: 'Orientation-Aware LLM Navigation',
    subtitle: 'Learning & Control Group · CMU',
    description: 'Built an LLM-guided MiniGrid controller for spatial reasoning and action planning, combining iterative replanning, orientation-aware action conversion, and sampled MPC rollouts. Designed the system for more interpretable navigation decisions with step-level logging and failure-aware replanning.',
    type: 'research',
    tags: ['LLM Planning', 'MiniGrid', 'MPC', 'Replanning', 'Spatial Reasoning'],
    github: null,
    demo: null,
    year: 2025,
  },
  {
    id: 1,
    title: 'Mosaic Mind: Decision-Support AI Agent',
    subtitle: 'TartanHacks 2026 · CMU',
    description: 'Built a decision-support AI agent that generates branching plans, backtracks across decision paths, and produces grounded research cards with linked evidence. Added an evaluation harness over 1,000+ sample cases and deployed the system on Fly.io.',
    type: 'independent',
    tags: ['AI Agents', 'LangChain', 'Grounded Retrieval', 'Evaluation Harness', 'Fly.io'],
    github: null,
    demo: null,
    year: 2026,
  },
  {
    id: 2,
    title: 'Physics-informed Generative Modeling',
    subtitle: 'CMU',
    description: 'Built a next-frame prediction model for PhysicsGen ball-bounce dynamics using 50k+ paired Pymunk simulations in PyTorch. Benchmarked multiple baselines and a coordinate-conditioned cGAN improved localization over the standard baseline, reducing X and Y prediction error.',
    type: 'academic',
    tags: ['PyTorch', 'cGAN', 'Pymunk', 'Simulation', 'Benchmarking'],
    github: null,
    demo: null,
    year: 2025,
  },
  {
    id: 3,
    title: 'Foreground-Background Video Separation',
    subtitle: 'CMU',
    description: 'Built an end-to-end pipeline for separating foreground people from background video using HOG features, a linear SVM classifier, and COCO mask supervision. Achieved about 80% patch-level accuracy and rendered background-removed video outputs from frame-level inference.',
    type: 'academic',
    tags: ['OpenCV', 'HOG Features', 'Linear SVM', 'COCO Masks', 'Video Pipeline'],
    github: null,
    demo: null,
    year: 2025,
  },
  {
    id: 4,
    title: 'Multimodal Souvenir Recommendation System',
    subtitle: 'SIT',
    description: 'Built a multimodal retrieval and recommendation pipeline combining text, image captioning, and Transformers-based RAG to surface relevant souvenirs from a catalog. Used embedding-based similarity search and grounded explanations to improve recommendation transparency.',
    type: 'independent',
    tags: ['RAG', 'Embeddings', 'Image Captioning', 'Similarity Search', 'Grounded Explanations'],
    github: null,
    demo: null,
    year: 2023,
  },
]
