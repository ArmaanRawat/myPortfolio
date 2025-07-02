export const myProjects = [
  {
    id: 1,
    title: "Osimulate - Learning Platform",
    description:
      "Facilitates interactive learning of core Operating System concepts through rich visualizations and collaborative note-taking, designed by students for students.",
    subDescription: [
      "Developed an engaging open-source web platform that visualizes key OS algorithms like CPU scheduling, memory management, and paging to enhance conceptual understanding.",
      "Integrated a strong built-in notes library and enabled users to create, manage, and share their own notes.",
      "Implemented secure authentication and user privacy controls to protect learner data.",
      "Added gamified elements like streak tracking and progress indicators to motivate consistent learning.",
      "Made the platform open-source to encourage collaboration and contributions from the student community.",
    ],
    href: "https://osimulate.netlify.app",
    gitLink: "https://github.com/ArmaanRawat/OS-learning-Platform",
    logo: "",
    image: "/assets/projects/Osimulate.png",
    tags: [
      {
        id: 1,
        name: "Next js",
        path: "/assets/logos/skill-icons--nextjs-light.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/skill-icons--typescript.svg",
      },
      { id: 3, name: "D3 js", path: "/assets/logos/devicon--d3js.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Multi-Custom language Compiler",
    description:
      "An online compiler supporting multiple popular languages along with a unique custom-designed language ('Basic Code') that compiles to C intermediate code before final compilation.",
    subDescription: [
      "Built a web-based compiler that supports 10+ languages including C, C++, Java, Python, JavaScript, Go, Rust, and C#.",
      "Designed and implemented a custom language ('Basic Code') with a full compilation pipeline: lexical analysis, syntax analysis, semantic analysis, and intermediate code generation.",
      "Converted 'Basic Code' programs into C intermediate code and compiled them using GCC for execution.",
      "Developed a secure backend sandbox environment for safe code execution.",
      "Created a clean and responsive frontend for seamless code writing, submission, and result display.",
    ],
    href: "https://custom-compiler.vercel.app",
    gitLink: "https://github.com/ArmaanRawat/compiler-frontend",
    logo: "",
    image: "/assets/projects/customcompiler.png",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/skill-icons--typescript.svg",
      },
      { id: 2, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 3, name: "SandBox", path: "/assets/logos/sandbox.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "AlgoRun",
    description:
      "An interactive tool to visualize and compare graph algorithms like A*, Dijkstra, BFS, DFS and more, showcasing their performance on user-designed grids.",
    subDescription: [
      "Implemented dynamic visualizations for multiple graph algorithms, allowing users to observe their pathfinding behavior in real-time.",
      "Designed a grid-based interface where users can create walls, set start/end nodes, and modify grid configurations.",
      "Enabled performance comparison by displaying speed, number of node visits, and path length for each algorithm.",
      "Developed with pure HTML, CSS, and JavaScript for fast, lightweight execution without dependencies.",
      "Built fully responsive design to ensure smooth interaction across devices.",
    ],
    href: "https://algo-run.vercel.app",
    gitLink: "https://github.com/ArmaanRawat/AlgoRun",
    logo: "",
    image: "/assets/projects/AlgoRun.png",
    tags: [
      { id: 1, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 4,
    title: "TODO App",
    description:
      "A minimalist and responsive Todo list application built with React and Tailwind CSS for efficient task management.",
    subDescription: [
      "Built a functional and clean Todo app using React for seamless state management and dynamic UI updates.",
      "Styled with Tailwind CSS to achieve a modern, responsive, and lightweight design.",
      "Enabled users to add, delete, and mark tasks as complete with intuitive controls.",
      "Deployed using Vercel for fast and reliable access across devices.",
      "Allows Local storage of the Notes maintaining thus saving them.",
    ],
    href: "https://todo-web-app-black.vercel.app",
    gitLink: "https://github.com/ArmaanRawat/Todo-webAPP",
    logo: "",
    image: "/assets/projects/todoList.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCss", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Vite", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 5,
    title: "StrongPassX",
    description:
      "A simple and fast tool to generate strong, secure passwords with customizable length and character set.",
    subDescription: [
      "Developed a lightweight password generator using React, Vite, and Tailwind CSS for ultra-fast performance.",
      "Enabled users to specify custom password length for flexibility and security.",
      "Implemented randomization logic to ensure password strength and uniqueness.",
      "Designed a clean, responsive UI with intuitive controls for generating and copying passwords.",
      "Built entirely with client-side JavaScript to ensure privacy — no data leaves the device.",
    ],
    href: "https://password-generator-livid-five.vercel.app",
    gitLink: "https://github.com/ArmaanRawat/Password-generator",
    logo: "",
    image: "/assets/projects/passwordGen.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "TailwindCss", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
