import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  cplus,
  reactjs,
  nodejs,
  mongodb,
  git,
  python,
  threejs,
  typescript,
  redux,
  // figma,
  // docker,
  school,
  college,
  codev,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  Tcipher,
  ar7Mart,
  braintumor,
  cafewebsite,
  typinggame,
  todo,
  meme,
  threadsApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  /////Keep the technologies limited as rendering too amny 3-D models may break some models from the website
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "cplus",
    icon: cplus,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "High School",
    company_name: "Marshall School",
    icon: school,
    iconBg: "#E6DEDD",
    date: " 2018 -  2019",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intermediate",
    company_name: "Marshall School",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Engineering in Computer Science",
    company_name: "Graphic Era Hill University",
    icon: college,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Co-Dev Club Core Member (Social Media Head)",
    company_name: "Co-Dev club (Gehu)",
    icon: codev,
    iconBg: "#E6DEDD",
    date: "June 2022 – Present",
    points: [
      "Conducting various technical and non-technical events.",
      "Organizing and manage various hackathons.",
      "Managing social media platforms of the club",
      "Conduct various workshops and seminars for the students",
      "Creating content for Co-Dev club social media accounts",
    ],
  },
  {
    title: "Frontend Intern At Tcipher",
    company_name: "Tcipher",
    icon: Tcipher,
    iconBg: "#E6DEDD",
    date: "March 2024 – Present",
    points: [
      "Developing components for Tcipher applications and web applications.",
      "Using React and React Native to build amazing websites, web apps and mobile applications.",
      "Designing and adapting Uls as per the needs.",
      "Collaborate with the development team to write efficient, reusable, and scalable code",
      "Create and maintain APIs (Application Programming Interfaces) to enable communication between the frontend and backend systems",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Threads App Clone",
    description:
      "A full stack Threads App Clone built built using Next.js. Authentication achieved using Clerk. Best practices used for SEO.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "",
      },
    ],
    image: threadsApp,
    source_code_link: "https://threadsclonear7.vercel.app/",
  },
  {
    name: "AR7 mart",
    description:
      "A frontend clone of an ecommerce website powered by react-three-fibre the 3D model rendering technology. This clone has all the functionalities be it search or add to cart.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "React-three-fibre",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ar7Mart,
    source_code_link: "https://ar7mart.firebaseapp.com/",
  },
  {
    name: "Brain Tumor Detection",
    description:
      "A webapp which integrates a Machine Learning model to predict Brain Tumor on users MRI scan images.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "React-three-fibre",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "CNN",
        color: "red-text-gradient",
      },
    ],
    image: braintumor,
    source_code_link: "https://ar7braintumordetection.netlify.app",
  },
  {
    name: "Cafe Website",
    description:
      "An elegant cafe website with minimalistic and aesthetic design. A website that showcases the cafe's vintage and aesthetic vibes. Contact info and has book your table option. ",
    tags: [
      {
        name: "Html , Css5",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstap",
        color: "green-text-gradient",
      },
      {
        name: "Php",
        color: "pink-text-gradient",
      },
    ],
    image: cafewebsite,
    source_code_link: "https://ar7coffeetimecafe.netlify.app",
  },
  {
    name: "Speed Typing Game",
    description:
      "Want to test your speed typing skills? No worries I have got you covered with this simple speed typing game which is designed push your speed typing limits.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Css5",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: typinggame,
    source_code_link: "https://speedtyperar7.netlify.app",
  },
  {
    name: "Meme-Generator",
    description:
      "Generates a random meme image in one click. Edit the top-text and bottom-text to make a new meme.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Css5",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: meme,
    source_code_link: "https://ar7memegenerator.netlify.app",
  },
  {
    name: "To Do List App",
    description:
      "This To Do List app will keep you up-to-date with your work. You can mark to-do's as completed or not-completed. Stores your To-Do's in browser memory.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Css5",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: todo,
    source_code_link: "https://todoar7.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
