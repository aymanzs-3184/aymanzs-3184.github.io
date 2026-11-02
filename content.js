/* =====================================================================
   PORTFOLIO CONTENT — edit this file, not index.html.

   LINKS: every project has a `links` block. Paste a full URL between the
   quotes to show that button; leave it as "" to hide it.
       github:   source code repo
       live:     the running app / website
       video:    demo video (YouTube, Loom, Vimeo, Google Drive …)
       slides:   pitch deck or presentation
       notebook: Colab / Jupyter notebook
       extra:    anything else — also set `extraLabel` for its button text

   THUMBNAILS: put an image in the `thumbnails/` folder and set
   `thumbnail: "thumbnails/your-file.png"` (16:9 looks best).
   If `thumbnail` is empty but `links.video` is a YouTube link, the
   YouTube preview frame is used automatically. If both are empty, the
   card shows generated cover art instead.
   ===================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "Ayman Z.S",
    headline: "Computer Science student at Monash University building practical, privacy-first software.",
    intro:
      "I like turning messy real-world problems into tools people can use straight away: a lease checker for " +
      "international students, a habit app that adapts to your energy, a task board for small teams. " +
      "Below are the projects behind my resume, with code, demos and the tech used in each.",
    location: "Melbourne, Australia",
    workRights: "Australian Permanent Resident",
    email: "aymanzuhair384@gmail.com",
    links: {
      github: "https://github.com/aymanzs-3184",
      linkedin: "https://www.linkedin.com/in/ayman-z-s-82017a253",
      resume: "resume.pdf", // replace the resume.pdf file in this folder to update it
    },
  },

  /* Projects appear in this order. featured: true puts a project in the top row. */
  projects: [
    {
      id: "pulsestack",
      title: "PulseStack",
      tagline: "A free habit app that learns when you have the most energy and plans around it.",
      context: "BetaBuilders · FreeAppStore",
      kind: "Work",
      year: "2026",
      featured: true,
      tech: ["TypeScript", "Vitest", "Playwright", "pnpm"],
      highlights: [
        "Rate your energy (High, Medium or Low) as you tick off habits; after 14 days it maps your personal peaks and dips.",
        "Suggests moving demanding work such as study or deep focus into your peak windows, and shows the numbers behind each suggestion.",
        "No account, no subscription: all data stays in your browser.",
        "Unit-tested engine and storage, checked in real browsers before release on the FreeAppStore platform.",
      ],
      thumbnail: "",
      links: {
        github: "https://github.com/freeappstore-online/pulsestack",
        live: "https://pulsestack.freeappstore.online",
        video: "",
        slides: "",
        notebook: "",
        extra: "",
        extraLabel: "",
      },
    },
    {
      id: "latch",
      title: "Latch",
      tagline: "An AI lease checker that tells international students whether to sign, ask first or walk away.",
      context: "University startup project · team of 4",
      kind: "Team",
      year: "2026",
      featured: true,
      tech: ["Python", "PostgreSQL", "SQLAlchemy", "NLI model", "pytest", "GitHub Actions"],
      highlights: [
        "Upload a lease as a PDF or phone photos; every clause is checked against Victorian tenancy law and the verdict comes back in the student’s language.",
        "Code decides the law, not the AI: a rule engine does every calculation, and each flag must be backed by the exact section of the Act.",
        "My part: legal data and privacy, including redacting personal details in memory before anything is stored.",
        "The prototype caught a bond A$413 over the legal limit on a real lease.",
      ],
      thumbnail: "",
      links: {
        github: "",
        live: "",
        video: "", // demo video of the prototype
        slides: "", // pitch deck
        notebook: "",
        extra: "",
        extraLabel: "",
      },
    },
    {
      id: "taskflow",
      title: "TaskFlow",
      tagline: "A full-stack Kanban board where small teams create, assign and track tasks.",
      context: "Personal project",
      kind: "Personal",
      year: "2026",
      featured: true,
      tech: ["React", "Spring Boot", "PostgreSQL", "Docker", "JWT", "nginx", "Tailwind CSS"],
      highlights: [
        "Drag-and-drop board with instant updates that save automatically, plus My Tasks and Team views.",
        "8 REST endpoints secured with JWT sign-in and Spring Security.",
        "Database, API and frontend each run in Docker, so the whole app starts with one command; hosted on Railway and Vercel.",
        "Built independently, using AI as a guide and tutor along the way.",
      ],
      thumbnail: "",
      links: {
        github: "https://github.com/aymanzs-3184/Ayman-s-TaskFlow",
        live: "https://ayman-s-task-flow.vercel.app/",
        video: "",
        slides: "",
        notebook: "",
        extra: "",
        extraLabel: "",
      },
    },
    {
      id: "mnet",
      title: "MNET Team Services: Onboarding",
      tagline: "Onboarding features for a student tech club’s internal platform, from accepted offer to active member.",
      context: "Monash Nexus for Emerging Technologies",
      kind: "Club",
      year: "2026",
      featured: false,
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OAuth2"],
      highlights: [
        "Helps new recruits through each onboarding step, such as linking their Discord account and completing their profile.",
        "Lets team leads see where each new member is up to instead of chasing them manually.",
      ],
      thumbnail: "",
      links: { github: "", live: "", video: "", slides: "", notebook: "", extra: "", extraLabel: "" },
    },
    {
      id: "rideshare",
      title: "Campus Ride-Sharing App",
      tagline: "A web app that helps Monash students and staff share rides between campuses.",
      context: "University capstone · team of 4",
      kind: "Team",
      year: "2025",
      featured: false,
      tech: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
      highlights: [
        "Worked on both frontend and backend, from planning and design through to testing.",
        "Co-wrote the project plan (Gantt chart, schedule, milestones) and delivered in agile sprints.",
      ],
      thumbnail: "",
      links: { github: "", live: "", video: "", slides: "", notebook: "", extra: "", extraLabel: "" },
    },
    {
      id: "atlas",
      title: "ATLAS Simulations: Soft-Skills Credentials",
      tagline: "A low-pressure way for students to practise soft skills with an AI chatbot and prove them to employers.",
      context: "Monash Innovation Guarantee · industry challenge",
      kind: "Team",
      year: "2026",
      featured: false,
      tech: ["Design thinking", "Rapid prototyping", "Conversational AI"],
      highlights: [
        "Students practise communication and problem-solving with an AI bot and earn a Letter of Recommendation once they show enough progress.",
        "Proposed a leaderboard and social features to make it engaging rather than stressful.",
        "Went from idea to working prototype in a few weeks and pitched it to industry stakeholders.",
      ],
      thumbnail: "",
      links: { github: "", live: "", video: "", slides: "", notebook: "", extra: "", extraLabel: "" },
    },
    {
      id: "android",
      title: "Event Management Android App",
      tagline: "An Android app for event organisers to sign in, create categories and manage events.",
      context: "University project",
      kind: "University",
      year: "2025",
      featured: false,
      tech: ["Java", "Android SDK", "GSON"],
      highlights: [
        "Navigation drawer, lists of categories and events, and a quick-add button.",
        "Data saved on the device; layouts adapt to portrait and landscape.",
      ],
      thumbnail: "",
      links: {
        github: "https://github.com/aymanzs-3184/Event-Management-Android-Application",
        live: "", video: "", slides: "", notebook: "", extra: "", extraLabel: "",
      },
    },
    {
      id: "iris",
      title: "Project Iris",
      tagline: "A neural network that identifies iris flower species with 96.67% accuracy.",
      context: "Personal project",
      kind: "Personal",
      year: "2025",
      featured: false,
      tech: ["Python", "PyTorch", "Google Colab"],
      highlights: [
        "Four-layer network trained over 300 epochs with the Adam optimiser.",
        "Correctly classified 29 of 30 samples in the first test, averaging 96.67% across 10,000 test runs.",
      ],
      thumbnail: "",
      links: {
        github: "https://github.com/aymanzs-3184/project_iris",
        live: "", video: "", slides: "",
        notebook: "https://colab.research.google.com/drive/1PQRVsEQu46cs9l3mDUUg5uRvIo4SnQWC?usp=sharing",
        extra: "", extraLabel: "",
      },
    },
    {
      id: "tictactoe",
      title: "Unbeatable Tic-Tac-Toe",
      tagline: "A console game with a Hard bot that cannot be beaten, built without machine learning.",
      context: "Personal project",
      kind: "Personal",
      year: "2025",
      featured: false,
      tech: ["Python", "Object-oriented design"],
      highlights: [
        "Easy and Hard bots; the Hard bot uses rule-based game-state analysis and strategy.",
        "Single- and two-player modes, with every method documented.",
      ],
      thumbnail: "",
      links: {
        github: "https://github.com/aymanzs-3184/tic-tac-toe",
        live: "", video: "", slides: "", notebook: "", extra: "", extraLabel: "",
      },
    },
  ],

  experience: [
    { when: "2026", what: "Legal Data & Privacy Lead", where: "Latch (university startup project)" },
    { when: "Sep 2026 – now", what: "Volunteer Web Development Intern", where: "BetaBuilders" },
    { when: "Aug 2026 – now", what: "Operations Team Member", where: "Monash Nexus for Emerging Technologies" },
    { when: "Jan – Feb 2026", what: "Industry Innovation Program", where: "ATLAS Simulations · Monash Innovation Guarantee" },
    { when: "Studying", what: "Bachelor of Computer Science (Advanced Computer Science)", where: "Monash University" },
  ],

  certifications: [
    { name: "Software Engineering Job Simulation", issuer: "Commonwealth Bank · Forage", date: "Jan 2026",
      url: "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/xv8eSGu7nksKNiCQj_2sNmYuurxgpFYawco_DpxjWbp8vriernDTR_1768918161765_completion_certificate.pdf" },
    { name: "Software Engineering Job Simulation", issuer: "Telstra · Forage", date: "Dec 2025",
      url: "https://www.theforage.com/completion-certificates/M6JGAwZ52SMusMEcK/2YgByQfSfZCkNSs4T_M6JGAwZ52SMusMEcK_DpxjWbp8vriernDTR_1766409329406_completion_certificate.pdf" },
    { name: "Technology Job Simulation", issuer: "Deloitte Australia · Forage", date: "Mar 2025",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_DpxjWbp8vriernDTR_1741077706917_completion_certificate.pdf" },
    { name: "Back-End Web Development with ASP.NET", issuer: "LinkedIn Learning", date: "Jan 2026",
      url: "https://www.linkedin.com/in/ayman-z-s-82017a253/overlay/Certifications/1450116293/treasury/?profileId=ACoAAD5-uxgBaWGwD7wHs82hvnQu7U4vL8_e-Es" },
    { name: "Learning C#", issuer: "LinkedIn Learning", date: "Jan 2026",
      url: "https://www.linkedin.com/in/ayman-z-s-82017a253/overlay/Certifications/1175172920/treasury/?profileId=ACoAAD5-uxgBaWGwD7wHs82hvnQu7U4vL8_e-Es" },
    { name: "React Essential Training", issuer: "LinkedIn Learning", date: "Aug 2025",
      url: "https://www.linkedin.com/in/ayman-z-s-82017a253/overlay/Certifications/1175331750/treasury/?profileId=ACoAAD5-uxgBaWGwD7wHs82hvnQu7U4vL8_e-Es" },
  ],

  /* Skills not used in any project above can be listed here; they show without a project count. */
  otherSkills: ["C#", "ASP.NET", "Java", "SQL", "Git", "Figma", "Jira", "Postman"],

  strengths: ["Customer communication", "Conflict de-escalation", "Team player", "Fast learner",
              "Attention to detail", "Works well under pressure"],

  interests: ["Open-source software", "AI and emerging technologies", "Productivity tools"],
};
