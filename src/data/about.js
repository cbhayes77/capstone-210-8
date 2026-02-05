export const aboutData = {
  // Bio section
  bio: {
    intro: "This is where I would write a brief introduction about myself.",
    background:
      "This is where I would describe my background, education, and any relevant experiences that shaped who I am today.",
    current:
      "This is where I would talk about what I'm currently doing, such as my job, studies, or projects.",
    personal:
      "This is where I would share some personal interests, hobbies, or fun facts about myself.",
  },

  values: [
    {
      id: 1,
      title: "User-Centered Design",
      description:
        "I prioritize the needs and experiences of users in all my designs to create intuitive and effective solutions.",
      iconId: "FaUserCircle",
    },
    {
      id: 2,
      title: "Clean, Maintainable Code",
      description:
        "I write code that is easy to read, understand, and maintain, ensuring long-term project success.",
      iconId: "FaCode",
    },
    {
      id: 3,
      title: "Accessibility First",
      description:
        "Great design is inclusive design. I'm committed to creating experiences that work for everyone, regardless of their abilities or the devices they use.",
      iconId: "IoAccessibility",
    },
  ],

  experience: [
    {
      id: 1,
      company: "ACME Corp",
      role: "Frontend Developer",
      duration: "Jan 2020 - Present",
      description:
        "Developed and maintained the company website and web applications using React and Tailwind CSS. Collaborated with designers and backend developers to create seamless user experiences.",
      achievements: [
        "Implemented a responsive design that improved mobile traffic by 30%.",
        "Optimized website performance, reducing load times by 25%.",
        "Led the migration of legacy code to modern frameworks, enhancing maintainability.",
      ],
    },
    {
      id: 2,
      company: "Beta LLC",
      role: "Frontend Developer",
      duration: "Dec 2015 - Jan 2020",
      description:
        "Developed and maintained the company website and web applications using React and Tailwind CSS. Collaborated with designers and backend developers to create seamless user experiences.",
      achievements: [
        "Implemented a responsive design that improved mobile traffic by 30%.",
        "Optimized website performance, reducing load times by 25%.",
        "Led the migration of legacy code to modern frameworks, enhancing maintainability.",
      ],
    },
    {
      id: 3,
      company: "Gamma Inc",
      role: "Frontend Developer",
      duration: "Dec 2012 - Dec 2015",
      description:
        "Developed and maintained the company website and web applications using React and Tailwind CSS. Collaborated with designers and backend developers to create seamless user experiences.",
      achievements: [
        "Implemented a responsive design that improved mobile traffic by 30%.",
        "Optimized website performance, reducing load times by 25%.",
        "Led the migration of legacy code to modern frameworks, enhancing maintainability.",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      year: "2012",
      details:
        "Graduated with honors, focusing on software development, web technologies, and user experience design.",
    },
    {
      id: 2,
      degree: "Udemy Course: Advanced React",
      institution: "Udemy",
      year: "2012",
      details:
        "Graduated with honors, focusing on software development, web technologies, and user experience design.",
    },
    {
      id: 3,
      degree: "Microsoft Certified: Azure Developer Associate",
      institution: "Microsoft",
      year: "2012",
      details:
        "Graduated with honors, focusing on software development, web technologies, and user experience design.",
    },
  ],

  interests: [
    {
      id: 1,
      name: "Photography",
      description: "Capturing moments and landscapes through the lens of my camera.",
      iconId: "FaCamera",
      image: "http://picsum.photos/300?random=1",
    },
    {
      id: 2,
      name: "Auto Racing",
      description: "The thrill of speed and competition on the race track.",
      iconId: "FaCar",
      image: "http://picsum.photos/300?random=2",
    },
    {
      id: 3,
      name: "Backpacking",
      description:
        "Exploring the great outdoors and discovering new trails and landscapes.",
      iconId: "FaHiking",
      image: "http://picsum.photos/300?random=3",
    },
  ],

  cta: {
    heading: "Let's Work Together",
    description:
      "Interested in collaborating or have a project in mind? Feel free to reach out!",
    primaryAction: {
      text: "Get in Touch",
      href: "/contact",
    },
    secondaryAction: {
      text: "View My Work",
      href: "/portfolio",
    },
  },
};
