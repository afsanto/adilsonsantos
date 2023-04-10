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
  mysql,
  git,
  figma,
  docker,
  ght,
  canal,
  ergon,
  fatorlogo,
  meta,
  starbucks,
  tesla,
  shopify,
  victor,
  carrent,
  fator,
  movies,
  raphael,
  marcio,
  victorm,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Facilities Manager",
    company_name: "Grupo Hidrau Torque",
    icon: ght,
    iconBg: "#383E56",
    date: "Aug 2003 - May 2013",
    points: [
      "Management of building maintenance (electrical, hydraulic and civil) of the headquarters and branches.",
      "Strong performance in contract analysis, company trademarks and patents.",
      "Design and implementation of Blade server hardware and software and VMWARE virtualization.",
      "Development of strategies for physical changes of the company.",
    ],
  },
  {
    title: "Facilities and IT Coordinator",
    company_name: "Canal Rural Produções",
    icon: canal,
    iconBg: "#383E56",
    date: "Oct 2013 - Sep 2014",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Controller",
    company_name: "Ergon Vision Systems",
    icon: ergon,
    iconBg: "#383E56",
    date: "Nov 2015 - Dec 2020",
    points: [
      "Project management and maintenance.",
      "Management of production quality systems (vision systems) and management of industrial coding projects.",
      "Structuring the Facilities, Purchasing, Engineering and Sales department.",
      "Responsible for financial and asset management.",
    ],
  },
  {
    title: "Technical Manager ",
    company_name: "Fator Telecom",
    icon: fatorlogo,
    iconBg: "#383E56",
    date: "Jan 2021 - Jul 2022",
    points: [
      "Responsible for project management and maintenance of telecommunication systems based on Virtual PBX.",
      "Structured cabling project management.",
      "IOT (Internet of Things) project management.",
      "Moving it management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I truly recommend Adilson as a great professional! He has a vast range of competencies the goes from IT and Sales to Facilities management. ",
    name: "Raphael Amaral",
    designation: "Procurement Senior Manager",
    company: "PwC Brazil",
    image: raphael,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Adilson does.",
    name: "Victor Miyazaki",
    designation: "Movies Director",
    company: "Miyazaki Productions",
    image: victorm,
  },
  {
    testimonial:
      "After Adilson optimized our website, our traffic increased. We can't thank him enough!",
    name: "Marcio Santos",
    designation: "CEO",
    company: "Fator Telecom",
    image: marcio,
  },
];

const projects = [
  {
    name: "Miyazaki Personal Site",
    description:
      "Site personal of Victor Miyazaki, Young Promising Brazilian Movies Director.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: victor,
    source_code_link: "https://github.com/afsanto/Victor-Miyazaki",
    source_code_link_web: "https://victormiyazaki.vercel.app/",
  },
  {
    name: "vkmsMovies",
    description:
      "Web application that enables users to search for Movies, TV series; using TMDB API.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/afsanto/vkms_movie",
    source_code_link_web: "https://vkms-movie.vercel.app/",
  },
  {
    name: "Fator Telecom Web Site",
    description:
      "Institutional website of the Brazilian Technology Company Fator Telecom..",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: fator,
    source_code_link: "https://github.com/afsanto/fatortelecom",
    source_code_link_web: "https://fatortelecom.com.br/",
  },
];

export { services, technologies, experiences, testimonials, projects };
