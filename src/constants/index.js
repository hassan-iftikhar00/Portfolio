import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  github,
  globalExpeditions,
  freelancer,
  coordinator,
  PointsPerk,
  LandingPage,
  ecommerce,
  threejs,
  vuejs,
  nextjs,
  express,
  framermotion,
  jira,
  vuetify,
  sass,
  cpp,
  mysql,
  npm,
  yarn,
  jquery,
  bootstrap,
  antdesign,
  api,
  dotnet,
  vuex,
  redux,
  docker,
} from "../assets";

export const navLinks = [
  { id: "resume", title: "Resume" },
  {
    id: "about",
    title: "About",
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "MEVN Stack Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Three.js Developer",
    icon: creator,
  },
  {
    title: "Responsive 3D Web Developer",
    icon: web,
  },
  {
    title: "Web Application Redesign",
    icon: mobile,
  },
];
// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue.js",
    icon: vuejs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "Framer Motion",
    icon: framermotion,
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
    name: "Vuex",
    icon: vuex,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Vuetify",
    icon: vuetify,
  },

  {
    name: "Figma",
    icon: figma,
  },

  {
    name: "SASS",
    icon: sass,
  },

  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Full Stack Developer (Freelance)",
    company_name: "Fiverr & Upwork",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Delivered custom web applications and solutions for clients in various industries, focusing on front-end and back-end development.",
      "Built and deployed e-commerce websites with integrated payment gateways like Stripe and PayPal.",
      "Developed and maintained websites using HTML, CSS, JavaScript, Vue.js, React and Node.js, ensuring responsiveness and cross-browser compatibility.",
      "Automated repetitive tasks and implemented optimization techniques to enhance website performance.",
      "Worked closely with clients to understand their needs, providing tailored solutions that drove business growth.",
    ],
  },
  {
    title: "Lead Full Stack Developer",
    company_name: "Global Expeditions UK",
    icon: globalExpeditions,
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "Spearheaded the development of a comprehensive B2B web application for companies backend utilizing the MEVN Stack, delivering seamless user experiences.",
      "Led a team of developers in building responsive and high-performance applications with admin panels, user dashboards, chat functionality, and more.",
      "Integrated real-time updates and data synchronization across multiple platforms using WebSocket APIs.",
      "Ensured code quality, performance, and security through rigorous code reviews and best practices.",
      "Collaborated closely with designers, product managers, and stakeholders to achieve business objectives and exceed client expectations.",
    ],
  },

  {
    title: "Personal Projects",
    icon: coordinator,
    iconBg: "#E6DEDD",
    points: [
      "Developed a diverse range of web applications, including a character generator app, an e-commerce store, an AI-startup landing page, and a B2B management platform, using technologies like React, Vue.js, Node.js, Tailwind CSS, Express and MongoDB.",
      "Created dynamic user interfaces, implemented responsive designs, and integrated APIs for real-time updates and payment processing.",
      "Explored advanced technologies such as Three.js and Framer Motion to enhance user interactivity and visual appeal.",
      "Managed project deployment and maintenance, ensuring high performance, security, and seamless user experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was amazed at how efficiently the web application was developed, perfectly matching our business needs. The attention to detail was exceptional.",
    name: "Sara Lee",
    designation: "CFO",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Hassan is a true professional who goes above and beyond to ensure the project’s success. The final product exceeded all expectations.",
    name: "Chris Brown",
    designation: "COO",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Thanks to the innovative design and functionality, our platform saw a significant boost in user engagement. The results speak for themselves!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "B2B Agent Portal",
    description:
      "A B2B web application designed to help businesses manage their operations efficiently. It features four distinct panels for super admins, company admins, agency admins, and agents, allowing seamless management of employees and tasks. The app supports dynamic content management, integration with third-party services, and advanced user authentication, making it a comprehensive solution for streamlining business workflows and enhancing productivity.",
    tags: [
      {
        name: "vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node-SASS",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ant-design-vue",
        color: "pink-text-gradient",
      },
      {
        name: "yarn",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "vuex",
        color: "green-text-gradient",
      },
    ],
    image: PointsPerk,
    source_code_link: "https://github.com/hassan-iftikhar00/PointsPerk",
  },
  {
    name: "AI Startup Landing Page",
    description:
      "This futuristic 3D landing page is crafted for an AI start-up, featuring a clean and modern design that effectively highlights the company's offerings. It ensures quick and efficient content delivery, with a responsive layout for optimal viewing across devices. This project showcases a streamlined approach to creating impactful online presences for AI startups.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "green-text-gradient",
      },
    ],
    image: LandingPage,
    source_code_link:
      "https://github.com/hassan-iftikhar00/AI-Start-Up-Landing-Page",
    website_link: "https://landingpageai.vercel.app",
  },
  {
    name: "Ecommerce Website",
    description:
      "This project is a basic eCommerce website designed to provide a platform for online shopping. The goal of the website is to offer a straightforward solution for selling products online, making it ideal for small businesses or individuals looking to establish an online presence.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/hassan-iftikhar00/eCommerce-Website",
    website_link: "https://ecommercehsn.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
