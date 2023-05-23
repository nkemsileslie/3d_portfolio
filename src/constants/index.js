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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  pau,
  hng,
  interswitch,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  color,
  cms,
  keylog,
  more,
} from "../assets";

export const navLinks = [
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cybersecurity",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Leadership & Teamwork",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Information Technology Support Analyst Intern",
    company_name: "Pan-Atlantic University (PAU) ",
    icon: pau,
    iconBg: "#383E56",
    date: "Jun 2021 - Aug 2021",
    points: [
      "During my internship I assisted with:",
      "troubleshooting computer hardware and software ",
      "cloning and software installations and configurations ",
      "letting up teleconference ,video conference meetings and video conference classes",
      "and other similar duties assigned by my supervisor ",
      "By the end of my internship I was able to perform all the above tasks adequately with little or no supervision.",
    ],
  },
  {
    title: "BackEnd Developer",
    company_name: "HNG Internship",
    icon: hng,
    iconBg: "#383E56",
    date: "Aug 2021 - Sep 2021",
    points: [
      "During my internship I;",
      "Developed and maintained web applications using Python and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Interswitch Group",
    icon: interswitch,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "As a software engineering intern I perform the following duties;",
      "Assisting my team mates in developing applications .",
      "Debugging and testing code.",
      "Documenting and testing new software applications as well as already existing software ",
      "Researching, investigating and fixing a wide range of technical issues",
      "Collaborating with senior leaders",
      "Approaching problems and creating solutions",
      "Proactively learning about new technologies",
    ],
  },
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
    name: "Color-Mix",
    description:
      "Colour Mix is a two-dimensional game created in the Unity game engine using C#.It's made to work on mobile and webgl platforms.It's a match-3 game that's similar to Candy Crush in principle. This project was created as a fun project and as a result of my interest in game development.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "unity engine",
        color: "green-text-gradient",
      },
      {
        name: "self-learning",
        color: "pink-text-gradient",
      },
    ],
    image: color,
    source_code_link: "https://github.com/nkemsileslie/color-mix-Match3_Game-",
  },
  {
    name: "Student Complaint Management System",
    description:
      "Developed  a complaint management system web application as my final year project. It was developed using node.js and i worked in a team to complete this project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "team-work",
        color: "pink-text-gradient",
      },
    ],
    image: cms,
    source_code_link: "https://github.com/alabiemmanuel177/Complaint-Management-System",
  },
  {
    name: "Keylogger Development and Implementation",
    description:
      "As part of my ongoing passion for cybersecurity and software development, I undertook a project to develop and implement a keylogger. A keylogger is a powerful tool used to record keystrokes on a computer, capturing valuable insights into user activities and enhancing security measures.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "critical thinking",
        color: "green-text-gradient",
      },
      {
        name: "self-learning",
        color: "pink-text-gradient",
      },
    ],
    image: keylog,
    source_code_link: "https://github.com/nkemsileslie/Keylogger",
  },
  {
    name: "View more ...",
    description:
      "view more projects on my github repository.",
    tags: [
    ],
    image: more,
    source_code_link: "https://github.com/nkemsileslie",
  },
];

export { services, technologies, experiences, testimonials, projects };