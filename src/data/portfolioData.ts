import type { Project, SkillNode, TimelineItem, Achievement, Certificate, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Ambuj Singh',
  handle: 'aj-6396',
  role: 'IT Head @ Kalki Foundation || Founder & Secretary @ The Debuggers BHU',
  education: 'B.Sc. Mathematics & Computer Science, Institute of Science - BHU',
  location: 'Varanasi, Uttar Pradesh, India',
  bio: 'Driven by Purpose. Powered by Tech. 🚀 Math & Computer Science student at Banaras Hindu University (BHU) and IT Head at Kalki Foundation. Mission: Using technology to amplify social change through React 19, TypeScript, Node.js, Supabase, Python automation, and Vibe Coding.',
  quotes: [
    "Driven by Purpose. Powered by Tech. 🚀",
    "Vibe Coding + Computational Mathematics = Pure Innovation ⚡",
    "Build yourself so well that you can help build others.",
    "With great power comes great responsibility... and great code quality."
  ],
  socials: {
    github: 'https://github.com/aj-6396',
    linkedin: 'https://www.linkedin.com/in/ambujsingh07/',
    instagram: 'https://www.instagram.com/its._.aj_7/',
    email: 'ambujsingh.sci.2024@bhu.ac.in',
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'classmark',
    title: 'Class Mark',
    subtitle: 'Secure Attendance Management System (Dept of Math, BHU)',
    category: 'Full Stack',
    description: 'Developed during internship at Department of Mathematics, Institute of Science - BHU under Prof. Ashish Kumar Upadhyay with teammate Aniket Verma. Engineered to reduce proxy attendance using OTP verification, Geo-Fencing, and Device Authentication.',
    fullCaseStudy: {
      overview: 'Class Mark solves proxy attendance issues in higher education by enforcing multi-factor device authentication, real-time OTP verification, and precise geolocation radius boundaries.',
      architecture: 'Built using React 19, TypeScript, Node.js, PostgreSQL, Supabase (Edge Functions & Realtime), and Tailwind CSS.',
      challenges: [
        'Preventing proxy attendance using hardware device fingerprints and Haversine geo-fencing.',
        'Handling concurrent OTP check-ins for thousands of students during lecture hours.'
      ],
      solutions: [
        'Implemented WebRTC & Haversine formula location validation.',
        'Designed real-time event streaming with Supabase Edge Functions & Redis.'
      ],
      metrics: [
        '100% Anti-proxy check-in validation',
        '< 40ms API Response time',
        'Built for Dept of Mathematics, I.Sc. BHU'
      ]
    },
    techStack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Vibe Coding'],
    liveUrl: 'https://classmark-demo.vercel.app',
    githubUrl: 'https://github.com/aj-6396/classmark',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'spandan2026',
    title: 'Spandan 2026',
    subtitle: 'Official University Inter-Faculty Youth Fest Webpage (BHU)',
    category: 'Web App',
    description: 'Developed on behalf of the Dean of Students (Prof. Ranjan Kumar Singh), Banaras Hindu University with team members Sumit Kumar, Satvik Patwardhan, and Anshika Mishra. Felicitated with the prestigious yellow uttariya honor.',
    fullCaseStudy: {
      overview: 'Architected the official digital presence for Spandan 2026 in collaboration with the Dean of Students office and deployed with technical support from Computer Center, BHU.',
      architecture: 'HTML5, CSS3, JavaScript, Tailwind CSS, responsive UI/UX design.',
      challenges: [
        'Ensuring seamless access for thousands of students across all faculties and affiliated colleges.'
      ],
      solutions: [
        'Structured clear event schedules, participant guidelines, and high-performance asset optimization.'
      ],
      metrics: [
        '1,390+ Profile event impressions',
        'Felicitated by Dean of Students, Prof. Ranjan Kumar Singh',
        'Official BHU University Webpage'
      ]
    },
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'BHU Computer Center'],
    liveUrl: 'https://spandan2026-bhu.vercel.app',
    githubUrl: 'https://github.com/aj-6396/aakanksha',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'aakanksha2026',
    title: 'Aakanksha 2026',
    subtitle: 'Official Annual Youth Fest Website (Institute of Science, BHU)',
    category: 'Web App',
    description: 'Designed and developed the official website for Aakanksha 2026, the annual youth festival of the Institute of Science, BHU featuring event schedules, live registrations, gallery, and announcements.',
    fullCaseStudy: {
      overview: 'Delivered a responsive, accessible platform for participants and faculty across Banaras Hindu University.',
      architecture: 'HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS.',
      challenges: [
        'Managing high-volume participant registrations during fest week.'
      ],
      solutions: [
        'Optimized static assets and mobile-first responsive layout.'
      ],
      metrics: [
        'Official I.Sc. BHU Fest Website',
        '100/100 Mobile Responsiveness rating'
      ]
    },
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
    liveUrl: 'https://aakanksha-bhu.vercel.app',
    githubUrl: 'https://github.com/aj-6396/aakanksha',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'serenspace',
    title: 'Serenspace',
    subtitle: 'Emotionally Intelligent & Privacy-First Digital Space',
    category: 'Web App',
    description: 'An emotionally intelligent, zero-friction, and privacy-first digital space designed to provide instant emotional relief, binaural audio soundscapes, and grounding for students.',
    fullCaseStudy: {
      overview: 'Serenspace combines neuro-acoustic sound loops with interactive WebGL particle visualizers to promote mindfulness and mental clarity without storing personal data.',
      architecture: 'Utilizes Three.js / React Three Fiber for GPU-accelerated shader simulations, Web Audio API procedural sound engine, and Framer Motion UI.',
      challenges: [
        'Maintaining 60+ FPS while animating WebGL particles in sync with audio frequency bands.'
      ],
      solutions: [
        'Implemented custom WebGL InstancedMesh shaders with Web Audio API AnalyserNode FFT processing.'
      ],
      metrics: [
        '100% Client-side Web Audio synthesis & privacy',
        '60 FPS smooth rendering on mobile devices'
      ]
    },
    techStack: ['JavaScript', 'React', 'Three.js', 'Web Audio API', 'Tailwind CSS'],
    liveUrl: 'https://serenspace.vercel.app',
    githubUrl: 'https://github.com/aj-6396/serenspace',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 'kalkifoundation',
    title: 'Kalki Foundation IT Ecosystem',
    subtitle: 'Automated Workflows & E-Certificate Infrastructure',
    category: 'Foundation / Non-Profit',
    description: 'Leading all tech initiatives as IT Head at Kalki Foundation NGO. Managing NGO website, automating e-certificate generation for thousands of volunteers, Google Workspace integration, and digital campaigns.',
    fullCaseStudy: {
      overview: 'Engineered automated digital systems using Google Apps Script and Web APIs to streamline social drives including Blood Donation Drives and Children’s Day events.',
      architecture: 'Google Apps Script, Python, JavaScript, Google Workspace, PHP, Tailwind CSS.',
      challenges: ['Automating thousand-scale personalized e-certificate generation with zero error margin.'],
      solutions: ['Built automated batch processing scripts connecting Google Sheets & Drive APIs.'],
      metrics: ['Thousands of e-certificates automated', 'Core team leadership at Kalki Foundation NGO']
    },
    techStack: ['Google Apps Script', 'Python', 'Pandas', 'JavaScript', 'Google Workspace'],
    liveUrl: 'https://kalkifoundation.org',
    githubUrl: 'https://github.com/aj-6396/kalkifoundation',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  }
];

export const SKILL_NODES: SkillNode[] = [
  { id: 'vibecoding', name: 'Vibe Coding 😋', category: 'Tools', level: 99, x: 50, y: 50, iconName: 'Sparkles', connections: ['react', 'ts', 'python', 'gas'] },
  { id: 'react', name: 'React 19', category: 'Frontend', level: 95, x: 20, y: 30, iconName: 'Atom', connections: ['next', 'ts', 'tailwind', 'three', 'vibecoding'] },
  { id: 'next', name: 'Next.js', category: 'Frontend', level: 90, x: 35, y: 18, iconName: 'Layers', connections: ['react', 'ts', 'node', 'supabase'] },
  { id: 'ts', name: 'TypeScript', category: 'Languages', level: 94, x: 45, y: 28, iconName: 'Code', connections: ['react', 'next', 'node', 'cpp', 'vibecoding'] },
  { id: 'js', name: 'JavaScript', category: 'Languages', level: 96, x: 32, y: 45, iconName: 'FileCode', connections: ['ts', 'react', 'git'] },
  { id: 'tailwind', name: 'Tailwind & Bootstrap', category: 'Frontend', level: 95, x: 15, y: 55, iconName: 'Palette', connections: ['react', 'next'] },
  { id: 'three', name: 'Three.js & Graphics', category: 'Frontend', level: 88, x: 28, y: 75, iconName: 'Box', connections: ['react', 'ts'] },
  { id: 'node', name: 'Node.js', category: 'Backend', level: 90, x: 65, y: 35, iconName: 'Server', connections: ['next', 'ts', 'supabase', 'sql'] },
  { id: 'supabase', name: 'Supabase (Edge & Realtime)', category: 'Database', level: 92, x: 78, y: 22, iconName: 'Database', connections: ['node', 'sql', 'next'] },
  { id: 'sql', name: 'PostgreSQL & SQL', category: 'Database', level: 90, x: 72, y: 65, iconName: 'Database', connections: ['node', 'supabase', 'math'] },
  { id: 'python', name: 'Python & Pandas', category: 'Languages', level: 92, x: 62, y: 80, iconName: 'Terminal', connections: ['cpp', 'sql', 'math', 'vibecoding'] },
  { id: 'gas', name: 'E-Certificate & Apps Script Automation', category: 'Tools', level: 95, x: 58, y: 68, iconName: 'Cpu', connections: ['python', 'js', 'vibecoding'] },
  { id: 'git', name: 'Git & GitHub', category: 'Tools', level: 94, x: 38, y: 88, iconName: 'GitBranch', connections: ['js', 'ts', 'node'] },
  { id: 'math', name: 'B.Sc. Maths & CS (DSA)', category: 'Languages', level: 96, x: 85, y: 82, iconName: 'Calculator', connections: ['python', 'sql', 'three'] },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'debuggers-bhu',
    type: 'experience',
    title: 'Founder and Secretary',
    organization: 'The Debuggers : BHU Coding Club',
    location: 'Banaras Hindu University, Varanasi',
    period: 'Sep 2025 - Present',
    description: [
      'Founded and leading the premier student coding community at Banaras Hindu University.',
      'Organizing Web Dev Fridays, Git & GitHub workshops, and hands-on coding sessions.',
      'Served as Official Tech Partner for Pragyan \'26 science festival at Swatantrata Bhavan (I.Sc. BHU & IIT BHU).'
    ]
  },
  {
    id: 'kalki-it-head',
    type: 'experience',
    title: 'IT Head',
    organization: 'Kalki Foundation NGO',
    location: 'Varanasi, Uttar Pradesh, India',
    period: 'Apr 2025 - Present',
    description: [
      'Leading all tech initiatives to support social impact missions near BHU.',
      'Automated workflow systems and batch e-certificate generation for thousands of volunteers using Google Workspace & Python.',
      'Managing NGO digital infrastructure, website, Google Ads, and digital campaigns.'
    ]
  },
  {
    id: 'bhu-degree',
    type: 'education',
    title: 'Bachelor of Science, Mathematics & Computer Science',
    organization: 'Institute of Science - Banaras Hindu University (BHU)',
    location: 'Varanasi, Uttar Pradesh, India',
    period: 'Sep 2024 - Jul 2028',
    description: [
      'Pursuing B.Sc. Mathematics & CS at the Institute of Science, BHU.',
      'Completed internship at Dept of Mathematics under Prof. Ashish Kumar Upadhyay building Class Mark anti-proxy attendance system.',
      'Felicitated by Dean of Students (Prof. Ranjan Kumar Singh) with yellow uttariya for developing Spandan \'26 official webpage.'
    ],
    details: {
      cgpa: '8.8 / 10.0',
      subjects: ['Vibe Coding', 'Data Structures & Algorithms', 'React 19 & TypeScript', 'Supabase & PostgreSQL', 'Python & Pandas', 'C/C++ Programming'],
      highlights: ['IT Head @ Kalki Foundation', 'Founder & Secretary @ The Debuggers BHU', 'Spandan \'26 Official Developer']
    }
  },
  {
    id: 'pragyan-tech-team',
    type: 'experience',
    title: 'Member of Tech and Design Team',
    organization: 'Make India Scientific - Pragyan \'26',
    location: 'Swatantrata Bhavan, BHU & IIT BHU',
    period: 'Mar 2026 - Apr 2026',
    description: [
      'Served as Official Tech Partner for Pragyan \'26 science festival.',
      'Presented interactive CS demos (ASCII to Binary, IoT reaction game, sorting visualizer) to Prof. Anil Bhardwaj (Director, Physical Research Laboratory, Dept of Space, Govt of India).'
    ]
  },
  {
    id: 'snowdrop-teacher',
    type: 'experience',
    title: 'Teaching Team Member',
    organization: 'Snowdrop Foundation',
    location: 'Varanasi, Uttar Pradesh, India',
    period: 'Feb 2025 - Apr 2025',
    description: [
      'Empowering underprivileged children through education by teaching core subjects in slum communities.'
    ]
  },
  {
    id: 'central-academy',
    type: 'education',
    title: 'School Education (PCM + CS)',
    organization: 'Central Academy',
    location: 'Varanasi, India',
    period: 'Apr 2015 - Mar 2024',
    description: [
      'Class 10th: 94.2% | Class 12th: 89.2% (Physics, Chemistry, Mathematics & Computer Science).'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'icsc-2026-prefinalist',
    title: 'Pre-Finalist of International Computer Science Competition (ICSC)',
    issuer: 'ICSC 2026 International Panel',
    year: '2026',
    badge: '🌐',
    description: 'Selected as Pre-Finalist in the prestigious International Computer Science Competition 2026.'
  },
  {
    id: 'dean-felicitation',
    title: 'Felicitation by Dean of Students, BHU',
    issuer: 'Banaras Hindu University (Prof. Ranjan Kumar Singh)',
    year: '2026',
    badge: '📜',
    description: 'Honored with the yellow uttariya by the Dean of Students for developing the official webpage for SPANDAN \'26 annual inter-faculty youth festival.'
  },
  {
    id: 'prl-director-presentation',
    title: 'Presentation to PRL Director (Dept of Space)',
    issuer: 'Prof. Anil Bhardwaj (Director, PRL - Govt of India)',
    year: '2026',
    badge: '🚀',
    description: 'Presented interactive CS demos and tech visualizers at Pragyan \'26 to Director of Physical Research Laboratory, Dept of Space.'
  },
  {
    id: 'math-internship',
    title: 'Dept of Mathematics Internship Completion',
    issuer: 'Institute of Science, BHU (Prof. Ashish Kumar Upadhyay)',
    year: '2026',
    badge: '🏆',
    description: 'Successfully completed software internship building Class Mark anti-proxy attendance system.'
  },
  {
    id: 'debuggers-founder-badge',
    title: 'Founder & Secretary Recognition',
    issuer: 'The Debuggers : BHU Coding Club',
    year: '2025',
    badge: '⚡',
    description: 'Co-founded and leading the coding community at Banaras Hindu University.'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-climate',
    title: 'Climate Action: Tackling the Climate Crisis for a Better World',
    issuer: 'University of Leeds / FutureLearn',
    date: 'Jan 2026',
    credentialId: 'FUTURELEARN-CLIMATE-2026',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
    verifyUrl: 'https://www.linkedin.com/in/ambujsingh07/'
  },
  {
    id: 'cert-python-datascience',
    title: 'Python 101 for Data Science',
    issuer: 'Cognitive Class',
    date: 'Jan 2026',
    credentialId: '9cb93226f8f1489a8d6f6edf510ff48f',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    verifyUrl: 'https://cognitiveclass.ai'
  },
  {
    id: 'cert-cisco-threat',
    title: 'Cyber Threat Management',
    issuer: 'Cisco',
    date: 'Dec 2025',
    credentialId: 'CISCO-CTM-2025',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
    verifyUrl: 'https://cisco.com'
  },
  {
    id: 'cert-cisco-python',
    title: 'Python Essentials 1',
    issuer: 'Cisco',
    date: 'Dec 2025',
    credentialId: 'CISCO-PE1-2025',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
    verifyUrl: 'https://cisco.com'
  },
  {
    id: 'cert-cisco-datascience',
    title: 'Introduction to Data Science',
    issuer: 'Cisco / Credly',
    date: 'Dec 2025',
    credentialId: 'CISCO-DS-2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    verifyUrl: 'https://credly.com'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Prof. Ashish Kumar Upadhyay',
    role: 'Professor, Dept of Mathematics',
    company: 'Institute of Science - BHU',
    content: 'Ambuj built Class Mark during his internship—a secure anti-proxy attendance platform using OTP, Geo-Fencing, and device authentication built with React 19 and Supabase.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Ujjwal Jha',
    role: 'CEO',
    company: 'Kalki Foundation NGO',
    content: 'As IT Head, Ambuj leads our tech initiatives with precision, automating thousands of e-certificates and streamlining our social impact operations.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Prof. Ranjan Kumar Singh',
    role: 'Dean of Students',
    company: 'Banaras Hindu University',
    content: 'Felicitated Ambuj and his team for their excellent work developing the official website for SPANDAN \'26 annual inter-faculty youth festival.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  }
];
