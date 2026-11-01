/* Edit this file to update your portfolio content. Add more objects to any list. */
const portfolioData = {
  name: "Sally Sorensen",
  headline: "Information Systems Student | Software Development & Data Analytics",
  intro: "I'm an Information Systems student at Brigham Young University with an interest in building useful technology, solving problems, and connecting technical solutions with real-world needs.",
  location: "Provo, Utah",
  about: {
    heading: "Learning how things work—and how to make them better.",
    professional: "I'm pursuing a B.S. in Information Systems at BYU's Marriott School of Business, with an expected graduation in April 2028. As a teaching assistant for Intro to Information Systems, I help students work through SQL, VBA, Tableau, Excel Solver, and web development concepts. I love to break down abstract challenges into well-structured problems, and then create meaningful solutions.",
    personal: "Outside of the classroom, I enjoy learning Mandarin Chinese, playing piano, and pickleball. My experiences in leadership, service, and business have shaped how I approach collaboration and problem-solving."
  },
  skills: [
    { category: "Programming", items: ["Python", "JavaScript", "VBA", "SQL"] },
    { category: "Web Development", items: ["HTML", "JavaScript"] },
    { category: "Analytics & Productivity", items: ["Tableau", "Excel Solver", "Microsoft Excel"] },
    { category: "Business Tools", items: ["QuickBooks", "Apto", "Buildout"] }
  ],
  experience: [
  {
    "role": "Teaching Assistant — Intro to Information Systems",
    "organization": "Brigham Young University",
    "period": "June 2026 – Current",
    "bullets": [
      "Provide individualized tutoring in SQL, VBA, Tableau, Excel Solver, web development, and foundational information systems concepts.",
      "Diagnose and troubleshoot student code, explaining technical concepts and guiding students through problem-solving processes.",
      "Lead review sessions to reinforce course material, clarify complex topics, and strengthen student understanding."
    ]
  },
  {
    "role": "Team Member — BYU IS Team",
    "organization": "Brigham Young University",
    "period": "September 2026",
    "bullets": [
      "Designed and developed an AI-assisted interview preparation tool as part of a four-person team during a 24-hour development sprint.",
      "Built an interactive interview practice interface that captures spoken responses and delivers AI-generated feedback to support students' career readiness."
    ]
  },
  {
    "role": "Student Lead",
    "organization": "BYU Grounds Maintenance",
    "period": "March 2025 – August 2026",
    "bullets": [
      "Coordinated daily operations for a team of 10–15 employees, assigning responsibilities and organizing work schedules to meet deadlines.",
      "Trained and mentored new employees, providing guidance on procedures, expectations, and workplace efficiency.",
      "Promoted to Student Lead within three months of employment."
    ]
  },
  {
    "role": "Volunteer Missionary Representative",
    "organization": "Toronto, Canada",
    "period": "May 2023 – November 2024",
    "bullets": [
      "Communicated and collaborated with individuals from diverse cultural and linguistic backgrounds, including Mandarin Chinese speakers.",
      "Organized and taught English language lessons, adapting instructional approaches to accommodate different learning needs.",
      "Coordinated schedules and community activities while managing a demanding 70–80-hour weekly service commitment."
    ]
  },
  {
    "role": "Office Manager",
    "organization": "LINX Commercial Real Estate",
    "period": "April 2022 – August 2022",
    "bullets": [
      "Maintained commercial property listings, marketing brochures, and business records to support real estate operations.",
      "Organized and tracked completed transactions using spreadsheets, ensuring accurate documentation of closed deals.",
      "Independently learned Adobe Photoshop to edit property images, logos, and watermarks for marketing materials."
    ]
  },
  {
    "role": "Founder & Piano Instructor",
    "organization": "Sally’s Piano Business",
    "period": "April 2020 – August 2022",
    "bullets": [
      "Established and grew an independent piano teaching business, building a client base of up to 14 weekly students through networking and referrals.",
      "Designed personalized lesson plans combining traditional piano instruction with music theory and ear-training techniques.",
      "Managed scheduling, student relationships, and instructional planning while independently operating the business."
    ]
  },
  {
    "role": "Volleyball Coach",
    "organization": "ACES VBC",
    "period": "January 2021 – April 2022",
    "bullets": [
      "Selected by the head coach to lead a competitive 14-and-under volleyball team, directing practices, skills development, and tournament participation.",
      "Made strategic, real-time coaching decisions during competitions while fostering player confidence and teamwork.",
      "Collaborated with coaching staff and maintained effective communication with athletes, parents, and officials."
    ]
  }
],
  education: [
  {
    "role": "B.S. in Information Systems",
    "organization": "Brigham Young University — Marriott School of Business",
    "period": "Expected April 2028",
    "bullets": [
      "GPA: 3.90/4.00",
      "Honors: Three-time BYU Merit Scholarship recipient",
      "STEM-designated degree program"
    ]
  },
  {
    "role": "Economics Program",
    "organization": "National Cheng Kung University (NCKU)",
    "period": "February 2026 – June 2026",
    "bullets": [
      "Independently pursued admission to a Mandarin-taught economics program at National Cheng Kung University, meeting Chinese-language proficiency requirements.",
      "Completed university-level coursework in accounting, calculus, macroeconomics, and Chinese presentation entirely in Mandarin.",
      "Earned the Outstanding Overseas Student Scholarship in recognition of academic merit."
    ]
  }
],
  projects: [
    {
      title: "Career Launchpad — BYU Information Systems",
      description: "Built with a team of Information Systems students to create a career and interview preparation tool.",
      technologies: ["HTML", "Web Development", "Team Project"],
      github: "", // Add your exact repository URL when ready.
      demo: "https://ssally5.github.io/IS-orientation-project/",
      featured: true,
      image: "assets/images/career-launchpad.png",
      details: "Career Launchpad brings career exploration and interview preparation together in one website for Information Systems students.",
      context: "Completed in 24 hours as an orientation project for the IS junior core.",
      contribution: "I was responsible for the interview prep page and used AI to create an interview practice tool that listens to your answers to interview questions and provides feedback."
    },
    {
      title: "Havenly — Home Maintenance",
      description: "Together with my team, I built a tool to help homeowners manage and schedule routine home maintenance.",
      technologies: ["Web Development", "Team Project"],
      demo: "https://ssally5.github.io/havenly-home-maintenance/",
      github: "",
      featured: true,
      image: "assets/images/havenly-preview.png",
      details: "Havenly is a team-built tool designed to help homeowners manage and schedule routine home maintenance. It brings home maintenance planning together in one place."
    }
  ],
  learning: {
    description: "This section is ready for courses, technologies, and skills I'm exploring next.",
    items: ["Add a topic", "Add another topic"]
  },
  accomplishments: {
    description: "A few milestones from my academic and personal journey.",
    items: ["Professional Scrum Master I (PSM I) certification", "BYU Merit Scholarship — three-time recipient", "NCKU Outstanding Overseas Student Scholarship", "HSK Level 5 Mandarin Chinese certification", "Microsoft Word, Excel & PowerPoint certifications"]
  },
  contact: {
    description: "I'm always happy to connect about technology, collaboration, and new opportunities.",
    email: "ssally5@byu.edu",
    linkedin: "https://www.linkedin.com/in/ssally5",
    github: "https://github.com/ssally5"
  },
  resumeFile: "assets/resume/sally-sorensen-resume.pdf"
};
