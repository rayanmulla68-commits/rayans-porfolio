// Projects data — edit links here
// Leave github/demo as "#" if not available; UI will show placeholder badge

export const projects = [
  {
    id: 'port-scanner',
    title: 'Customized Port Scanner',
    category: 'Cybersecurity',
    filter: 'Cybersecurity',
    description:
      'A customized network port scanning project designed to identify open ports and provide useful security-related information.',
    problem: 'Manually identifying open ports and assessing basic network exposure is time-consuming and fragmented across tools.',
    solution:
      'Built a Python-based scanner that probes target ports, reports open/closed state and surfaces security-relevant context in a unified output.',
    technologies: ['Python', 'Network Security', 'Port Scanning', 'Nmap', 'Masscan', 'Cybersecurity'],
    features: ['Multi-port scanning', 'Service/ banner hints', 'Clean report output', 'Configurable port ranges'],
    aiExplored: [
      'Open-port prediction',
      'Unusual behavior detection',
      'Risk classification',
      'Suspicious pattern detection',
      'Automated security recommendations',
    ],
    aiNote: 'Potential AI-assisted features explored as proposals — not claimed as production-ready.',
    github: '#', // TODO: replace with your GitHub URL
    demo: '#', // no live demo
  },
  {
    id: 'captive-portal',
    title: 'Captive Portal',
    category: 'Cybersecurity / Networking',
    filter: 'Networking',
    description:
      'A captive portal project exploring controlled network access and authentication through a web-based interface.',
    problem: 'Uncontrolled network access needs a gateway to authenticate users before granting connectivity.',
    solution:
      'Implemented a web-based captive portal with authentication and network access control logic to manage user entry.',
    technologies: ['Networking', 'Authentication', 'Web Interface', 'Network Access Control', 'HTML', 'CSS', 'JavaScript'],
    features: ['Web-based login', 'Authentication flow', 'Access control', 'Session handling'],
    github: '#',
    demo: '#',
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    category: 'Software Development',
    filter: 'Software',
    description:
      'A mini project designed to manage hospital-related information and workflows through a software system.',
    problem: 'Hospital data and workflows benefit from a centralized system to reduce manual handling.',
    solution:
      'Developed a software system to organize and manage hospital-related records and processes as a learning project.',
    technologies: ['Python', 'MySQL', 'HTML', 'CSS', 'Software Design'],
    features: ['Record management', 'Workflow handling', 'Database integration', 'CRUD operations (example modules)'],
    note: 'Specific modules are examples, not claimed as deployed features.',
    github: '#',
    demo: '#',
  },
  {
    id: 'landwatch',
    title: 'LANDWATCH',
    category: 'AI / Data / Mapping',
    filter: 'AI',
    description:
      'A project concept focused on land monitoring using data, mapping/GIS concepts, intelligent analysis, and dashboard visualization. Explored in the context of SIH pre-hackathon ideation and strategy work.',
    problem: 'Land-related data is often scattered and lacks an intuitive, visual monitoring layer for decision-making.',
    solution:
      'Proposed an MVP for land monitoring combining data ingestion, GIS/mapping concepts, intelligent analysis and a dashboard — including problem validation and synthetic/mock data preparation.',
    technologies: ['Data Analysis', 'Mapping / GIS', 'Intelligent Analysis', 'Dashboard Visualization', 'Synthetic Data', 'MVP Planning'],
    features: ['GIS-based visualization', 'Data dashboards', 'Mock data pipelines', 'Problem validation & MVP scope'],
    note: 'Concept / SIH ideation stage — not commercially deployed.',
    github: '#',
    demo: '#',
  },
  {
    id: 'game-helper-agent',
    title: 'Game Development Helper Agent',
    category: 'AI / Game Development',
    filter: 'AI',
    description:
      'An AI-assisted concept designed to help game developers with game design, mechanics, code generation, debugging, asset ideas, and game balancing.',
    problem: 'Game developers juggle design, coding, debugging, and balancing — often needing iterative assistance.',
    solution:
      'Concept for an AI helper that suggests mechanics, assists with Unity/C# development, debugging, asset ideation and balancing guidance.',
    technologies: ['AI Assistance', 'Game Design', 'Unity / C#', 'Debugging', 'Asset Ideation'],
    features: [
      'Game design assistance',
      'Mechanics suggestions',
      'Unity/C# dev assistance',
      'Debugging support',
      'Art & asset ideas',
      'Game balancing',
    ],
    github: '#',
    demo: '#',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    category: 'Web Development',
    filter: 'Web',
    description:
      'A responsive personal portfolio designed to showcase skills, projects, education, certifications, and the development journey.',
    problem: 'Need a single, professional online presence for recruiters and collaborators.',
    solution:
      'Designed and built a modern, dark-themed responsive portfolio with clean information architecture and recruiter-friendly sections.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
    features: ['Responsive layout', 'Project filtering', 'Smooth scrolling', 'Accessible & keyboard-friendly'],
    github: '#',
    demo: '#',
  },
]

export const projectFilters = ['All', 'Cybersecurity', 'Networking', 'Software', 'AI', 'Web']
