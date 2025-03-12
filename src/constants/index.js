import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  globalExpeditions,
  freelancer,
  coordinator,
  PointsPerk,
  LandingPage,
  ecommerce,
  threejs,
  vuejs,
  nextjs,
  framermotion,
  vuetify,
  sass,
  bootstrap,
  vuex,
  peki,
  bank,
  liveAutos,
  hotel,
  organic,
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
    title: "Node.js Developer",
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
      "Working with Hassan was a great experience! He integrated backend with mongoDB and cloudinary along with admin panel in my nextjs web app. The delivery was high quality, and exactly how i described. Hoping to work with him again!",
    name: "Aydin",
    country: "https://flagcdn.com/tr.svg",
    company: "Turkey",
    image: "https://avatar.iran.liara.run/public/21",
    fiverr: "Fiverr",
  },
  {
    testimonial:
      "It was great to work with Hassan. He is smart person easy to deal with and was able to understand the task quickly and deliver this without wasting any time. Appreciate their workmanship.",
    name: "Haiderjee",
    country: "https://flagcdn.com/us.svg",
    company: "United States",
    image: "https://avatar.iran.liara.run/public/41",
    fiverr: "Fiverr",
  },
  {
    testimonial:
      "It was a wonderful experience working with Hassan. I loved his professionalism in understanding the requirements and delivering the order before time. I will definitely recommend him and look forward to working with him in future as well.",
    name: "Atif",
    country: "https://flagcdn.com/ca.svg",
    company: "Canada",
    image: "https://avatar.iran.liara.run/public/26",
    fiverr: "Fiverr",
  },
  {
    testimonial: "Excellent communication skills. Very good at what he does",
    name: "Augustus",
    country: "https://flagcdn.com/gh.svg",
    company: "Ghana",
    image: "https://avatar.iran.liara.run/public/45",
    fiverr: "Fiverr",
  },
  {
    testimonial: "It was great working with Hassan.",
    name: "Viren",
    country: "https://flagcdn.com/gb.svg",
    company: "United Kingdom",
    image: "https://avatar.iran.liara.run/public/15",
    fiverr: "Fiverr",
  },
  {
    testimonial: "Best Value for money. Very cheap but very good quality.",
    name: "Shehzad",
    country: "https://flagcdn.com/gb.svg",
    company: "United Kingdom",
    image: "https://avatar.iran.liara.run/public/23",
    fiverr: "Fiverr",
  },
];

const projects = [
  {
    name: "School Management System",
    description:
      "Developed a complete school registration and management system for Peki Senior High School with student and admin portals, handling registration, payments, SMS notifications, authentication, and a complete database structure.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "JWT", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Hubtle API", color: "pink-text-gradient" },
    ],
    image: peki,
    source_code_link:
      "https://github.com/hassan-iftikhar00/Peki-Senior-High-School",
    website_link: "https://admissions.pekishs.com/",
  },
  {
    name: "Bank Website",
    description:
      "Integrated backend to a banking platform with a secure admin panel, featuring authentication, blog management, image uploads and hosting, and language-specific filtering on front end.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    image: bank,
    source_code_link: "https://github.com/hassan-iftikhar00/appdf-main",
    website_link: "https://appdf-main.vercel.app/",
  },
  {
    name: "LiveAutos - A car Listing Platform",
    description:
      "Enhanced a UK-based car listing platform by optimizing search functionality, developing multi-step car listing flow, and integrating UK vehicle data APIs. Developed multiple frontend sections and legal pages, advanced filtering, and detailed car pages, while improving responsiveness.",
    tags: [{ name: "MERN", color: "blue-text-gradient" }],
    image: liveAutos,
  },
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
  {
    name: "Organic Food Store",
    description:
      "This is a modern organic food online store with a sleek and user-friendly design. It features intuitive navigation, product filtering, and a seamless shopping experience. With high-quality visuals, responsive design, and smooth animations, it ensures an engaging and hassle-free way to shop for fresh, organic products.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: organic,
    source_code_link: "https://github.com/hassan-iftikhar00/organic-food-store",
    website_link: "https://organic-food-stop.vercel.app/",
  },
  {
    name: "GoldenCedarHotel - A Hotel Website",
    description:
      "This hotel web application showcases the hotel’s online presence with a user-friendly landing page, secure login and signup pages, and a profile page for guests to manage their accounts. Built with React and Tailwind CSS, it features a mobile-responsive design, ensuring an intuitive experience across all devices and enhancing the booking process.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
    ],
    image: hotel,
    source_code_link: "https://github.com/hassan-iftikhar00/GoldenCedarHotel",
    website_link: "https://goldencedarhotel.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
