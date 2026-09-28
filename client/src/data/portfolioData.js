export const personalInfo = {
  name: "Ajeet Upadhyay",
  title: "B.Tech ECE Student | AI/ML & VLSI Enthusiast",
  location: "Nagpur, Maharashtra",
  college: "Ramdeobaba College of Engineering and Management, Nagpur",
  program: "B.Tech – Electronics & Communication Engineering",
  year: "2nd Year",
  introduction:
    "B.Tech Electronics & Communication Engineering student with interests in AI/ML, deep learning, VLSI, antenna/RF engineering, embedded hardware, and web development. Interested in building practical technology projects and pursuing research-oriented work.",
  careerDirection:
    "Interested in research and engineering roles involving electronics, AI/ML and advanced technology.",
  heroDescription:
    "Exploring the intersection of electronics, artificial intelligence, deep learning and advanced engineering.",
  socials: {
    github: "https://github.com/ajeet785781",
    linkedin: "https://linkedin.com/in/ajeet-upadhyay-73478b424",
    email: "ajeetupadhyay639@gmail.com"
  }
};



// New technical interests for separate Technical Interests section
export const technicalInterests = [
  { title: "Electronics & Embedded Systems", icon: "CircuitBoard", description: "Design and prototype hardware, microcontrollers, and sensor integrations." },
  { title: "VLSI", icon: "Layers", description: "Digital logic design, Verilog, and silicon chip development." },
  { title: "AI/ML", icon: "Brain", description: "Machine learning models, deep learning research, and intelligent systems." },
  { title: "IoT", icon: "Cpu", description: "Connected devices, networking protocols, and cloud integration." },
  { title: "Antenna & RF", icon: "Radio", description: "RF circuit design, antenna synthesis, and beamforming." },
  { title: "PCB Design", icon: "Cpu", description: "Schematic capture, board layout, and manufacturing workflows." }
];
export const areasOfInterest = [
  {
    title: "AI / ML",
    tagline: "Intelligent Systems & Neural Architectures",
    description: "Machine learning algorithms, predictive modeling, and data-driven computational engineering.",
    icon: "Brain"
  },
  {
    title: "Deep Learning",
    tagline: "Neural Computation & Optimization",
    description: "Exploration of deep neural networks for adaptive signal processing and complex modeling.",
    icon: "Cpu"
  },
  {
    title: "VLSI",
    tagline: "Silicon Design & Digital Logic",
    description: "Semiconductor fundamentals, digital electronics design, and hardware description with Verilog.",
    icon: "Layers"
  },
  {
    title: "Antenna / RF",
    tagline: "Electromagnetic Wave Propagation",
    description: "High-frequency planar antennas, beamforming synthesis, and CST Studio electromagnetic simulation.",
    icon: "Radio"
  },
  {
    title: "Embedded Systems",
    tagline: "Microcontroller & Sensor Hardware",
    description: "Interfacing microcontrollers with sensors, actuators, and motor driver circuitry with KiCad & Wokwi.",
    icon: "CircuitBoard"
  },
  {
    title: "Web Development",
    tagline: "Modern Engineering Interfaces",
    description: "Developing responsive, clean web applications, data dashboards, and interactive technical platforms.",
    icon: "Globe"
  }
];

export const skillCategories = [
  {
    category: "Programming",
    icon: "Terminal",
    color: "cyan",
    skills: ["C/C++", "Java", "Python"]
  },
  {
    category: "Core ECE",
    icon: "Zap",
    color: "blue",
    skills: ["Electronics & Communication Fundamentals", "Antenna/RF"]
  },
  {
    category: "AI / ML",
    icon: "Brain",
    color: "purple",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning"]
  },
  {
    category: "Web",
    icon: "Code",
    color: "emerald",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    category: "Development",
    icon: "GitBranch",
    color: "amber",
    skills: ["DSA", "Git/GitHub", "Linux"]
  },
  {
    category: "Database",
    icon: "Database",
    color: "indigo",
    skills: ["DBMS", "SQL"]
  },
  {
    category: "Simulation / Hardware",
    icon: "Cpu",
    color: "sky",
    skills: [
      "CST Studio Suite",
      "Ansoft HFSS",
      "MATLAB",
      "Verilog",
      "PCB/KiCad",
      "Embedded/Hardware Projects"
    ]
  }
];

export const educationData = [
  {
    level: "Undergraduate Degree",
    institution: "Ramdeobaba College of Engineering and Management, Nagpur",
    degree: "B.Tech – Electronics & Communication Engineering",
    period: "2nd Year",
    status: "Currently Pursuing",
    highlights: [
      "Core coursework in Electronics, Communication Systems & Digital Logic",
      "Active participant in research internships and hackathons",
      "Focused on bridging hardware with AI/ML computing"
    ]
  },
  {
    level: "Higher Secondary (Class XII)",
    institution: "Senior Secondary Education",
    degree: "Class 12th Board Examination",
    score: "87.1%",
    period: "Completed",
    highlights: [
      "Strong foundation in Physics, Chemistry & Mathematics",
      "Academic score: 87.1%"
    ]
  },
  {
    level: "Secondary School (Class X)",
    institution: "Secondary Education",
    degree: "Class 10th Board Examination",
    score: "83.2%",
    period: "Completed",
    highlights: [
      "Foundational science and analytical coursework",
      "Academic score: 83.2%"
    ]
  }
];

export const projectsData = [
  {
    id: "beam-steering",
    title: "Beam Steering using Deep Learning Algorithm",
    category: "AI/ML + Research + Antenna/RF",
    badge: "Official Research Project",
    documentImage: "/research-selection-doc.jpg",
    guide: "Dr. Ankita Harkare",
    affiliation: "Centre for Microsystems",
    shortDescription:
      "Research-oriented project exploring deep learning for beam-steering applications under the Centre for Microsystems.",
    fullDescription:
      "Officially selected for the Part-Time Research Internship (Session 2026-27) under the Centre for Microsystems on 'Beam Steering of antenna using ML' guided by Dr. Ankita Harkare. Investigating the application of deep learning models to predict and optimize phase shifts in phased array antenna elements for real-time beam steering towards target directions while reducing computational latency compared to traditional numerical EM solvers.",
    technologies: ["Deep Learning", "AI/ML", "Antenna/RF"],
    specs: [
      { label: "Problem Statement", value: "Beam Steering of antenna using ML" },
      { label: "Research Guide", value: "Dr. Ankita Harkare" },
      { label: "Research Centre", value: "Centre for Microsystems" },
      { label: "Publication Goal", value: "MAPCON, IIM Nagpur" },
      { label: "Target Application", value: "Adaptive Wireless Beamforming" }
    ],
    status: "Research In-Progress (Verified Selection)"
  },
  {
    id: "nirikshak-ai",
    title: "Nirikshak AI",
    category: "AI / Software",
    badge: "AI Concept",
    trophyImage: "/trophy.jpg",
    shortDescription:
      "AI-based concept for assessing and forwarding municipal/public-work and fund-use issues.",
    fullDescription:
      "An intelligent system concept architected to empower civic transparency. Nirikshak AI applies generative AI and machine learning logic to categorize, assess, and prioritize municipal public-work complaints and track public fund utilization, escalating actionable reports to civic authorities.",
    technologies: ["AI/ML", "Generative AI", "Software"],
    specs: [
      { label: "Focus", value: "Civic Tech & Public Fund Accountability" },
      { label: "Core Mechanism", value: "Automated Issue Assessment" },
      { label: "Stack", value: "GenAI & Predictive Filtering" }
    ],
    status: "Concept & Prototyping"
  },
  {
    id: "microstrip-antenna",
    title: "Microstrip Patch Antenna",
    category: "RF / Antenna Engineering",
    badge: "Hardware & EM Simulation",
    simulationImage: "/hfss-simulation-plot.jpg",
    shortDescription:
      "10 GHz antenna design and simulation work using CST Studio Suite & Ansoft HFSS.",
    fullDescription:
      "Designed and simulated planar microstrip patch antennas analyzing electromagnetic properties, S-parameters (S11 return loss), radiation patterns, directivity, and bandwidth using Ansoft HFSS and CST Studio Suite. Achieved strong impedance matching with S11 return loss reaching -27.5 dB at resonant frequencies.",
    technologies: ["Ansoft HFSS", "CST Studio Suite", "Antenna/RF"],
    specs: [
      { label: "Operating Frequencies", value: "2.4 GHz (ISM) & 10 GHz (X-Band)" },
      { label: "Simulation Tools", value: "Ansoft HFSS & CST Studio Suite" },
      { label: "Key Results", value: "S11 Return Loss: -27.5 dB (Solved)" }
    ],
    status: "Simulation Validated"
  },
  {
    id: "embedded-projects",
    title: "Hardware / Embedded Projects",
    category: "Embedded / Hardware",
    badge: "Hardware Prototyping",
    shortDescription:
      "Practical electronics and embedded simulations involving sensors, motors and motor-driver systems.",
    fullDescription:
      "Hands-on electronics prototyping combining microcontrollers, sensor interfaces, and actuator control. Built and validated embedded circuit designs involving motor drivers, feedback sensors, and power management using KiCad for schematic capture and Wokwi for simulation.",
    technologies: ["Embedded Systems", "Electronics", "Wokwi", "KiCad"],
    specs: [
      { label: "Tools", value: "KiCad PCB Design, Wokwi Simulator" },
      { label: "Components", value: "Sensors, Actuators, Motor Drivers" },
      { label: "Interface", value: "Embedded Microcontroller Firmware" }
    ],
    status: "Hardware Prototyping"
  }
];

export const researchData = {
  heading: "Research & Innovation",
  topic: "Beam Steering using Deep Learning Algorithm",
  domain: "AI/ML + Antenna/RF + Wireless Communication",
  role: "Student Researcher / Project Contributor",
  affiliation: "Centre for Microsystems",
  guide: "Dr. Ankita Harkare",
  publicationGoal: "MAPCON, IIM Nagpur",
  status: "In-Progress Research Activity (Publication Goal: MAPCON, IIM Nagpur)",
  documentImage: "/research-selection-doc.jpg",
  explanation:
    "Exploring the application of deep learning techniques to beam-steering problems in antenna and wireless communication systems.",
  overview:
    "Selected for the Part-Time Research Internship under the Centre for Microsystems for 'Beam Steering of antenna using ML' guided by Dr. Ankita Harkare. Phased array antenna systems require rapid calculation of complex excitation weights and phase shifts to dynamically steer electromagnetic radiation beams toward desired communication nodes. This research investigates whether deep neural networks can approximate these non-linear electromagnetic transformations with high spatial fidelity and ultra-low compute latency.",
  keyPillars: [
    {
      title: "Electromagnetic Array Synthesis",
      description: "Modeling phased antenna arrays and multi-element radiation patterns across beamforming angles."
    },
    {
      title: "Deep Neural Network Modeling",
      description: "Training neural architectures on electromagnetic spatial datasets to predict optimal phase distributions."
    },
    {
      title: "Adaptive Interference Nulling",
      description: "Evaluating radiation pattern beam directionality and minimizing side lobes for high-gain wireless communication."
    }
  ]
};

export const achievementsData = [
  {
    id: "vnit-hackathon",
    title: "VNIT Hackathon",
    type: "Hackathon",
    statusText: "Participation / Wins",
    description: "Competed in high-intensity problem-solving at Visvesvaraya National Institute of Technology (VNIT Nagpur) during AXIS'26 in the AI Ideathon.",
    tag: "Competitive Engineering",
    documentImage: "/vnit-axis-certificate.jpg",
    certificateTitle: "Certificate of Participation – AI Ideathon, AXIS'26 VNIT"
  },
  {
    id: "ai-ideathon",
    title: "AI Ideathon",
    type: "Ideathon",
    statusText: "Participation and Achievement",
    description: "Demonstrated innovative problem formulation and solution architecture in artificial intelligence competition at AXIS'26, VNIT Nagpur.",
    tag: "AI Innovation"
  },
  {
    id: "ieee-internship",
    title: "Centre for Microsystems Research Internship",
    type: "Research Internship",
    statusText: "Selected: Beam Steering using ML",
    description: "Officially selected for Part-Time Research Internship under Centre for Microsystems on 'Beam Steering of antenna using ML' guided by Dr. Ankita Harkare.",
    tag: "Official Selection",
    documentImage: "/research-selection-doc.jpg",
    certificateTitle: "Official Research Selection Letter – Centre for Microsystems"
  },
  {
    id: "sih",
    title: "Smart India Hackathon (SIH)",
    type: "National Hackathon",
    statusText: "Second-round Selection",
    description: "Advanced through initial rounds to second-round selection in India's flagship nation-building innovation initiative.",
    tag: "National Innovation"
  }
];

export const certificationsData = [
  {
    id: "talent-search-2024",
    title: "Block-Level Talent Search Exam 2024",
    subtitle: "प्रखण्ड स्तरीय प्रतिभा खोज प्रतियोगिता परीक्षा - 2024",
    badge: "2nd Rank · द्वितीय स्थान",
    institution: "R.N. College (Ekma)",
    recipient: "Ajeet Upadhyay (अजित उपाध्याय)",
    date: "July 2024",
    image: "/talent-search-certificate.jpg",
    description:
      "Secured 2nd Rank (द्वितीय स्थान) in the Block-Level Talent Search Competition Examination 2024 representing R.N. College."
  }
];

// ----- New Data for Extended Sections -----

export const beyondAcademics = [
  {
    id: "cricket",
    title: "🏏 Cricket — Pace Bowler",
    category: "Sports",
    description: "District-Level Player. Passionate about competitive cricket, fitness and fast bowling.",
    media: {
      photos: [
        "/images/cricket/photo1.jpg",
        "/images/cricket/photo2.jpg"
      ],
      videos: []
    }
  },
  {
    id: "technical-club",
    title: "⚡ Electronics — Technical Club",
    category: "Club",
    description: "Working on electronics, embedded systems, hardware prototyping and IoT-based projects.",
    media: {
      photos: [
        "/images/technical-club/photo1.jpg"
      ],
      videos: []
    }
  },
  {
    id: "gyanodaya",
    title: "🚀 Gyanodaya",
    category: "Event",
    description: "Knowledge‑sharing sessions and workshops.",
    media: {
      photos: [],
      videos: [
        "/videos/gyanodaya/Video.mp4"
      ]
    }
  }
];
