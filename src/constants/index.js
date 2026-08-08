import project1 from "../assets/projects/bank-management.webp";
import project2 from "../assets/projects/hospital website.png";
import project3 from "../assets/projects/food blog.png";
import project4 from "../assets/projects/landing java.png";
import project5 from "../assets/projects/tasty corner.png";
import project6 from "../assets/projects/portfolio.png";
import gulfproject from "../assets/projects/gulf.png";
import snowflake from "../assets/projects/snowflake.png";
import gurukulam from "../assets/projects/gurukulam.png";
export const HERO_CONTENT = `Full Stack Developer with 1+ year of experience building robust, scalable, and user-focused web and mobile applications. Passionate about solving real-world problems, delivering innovative solutions, and continuously learning to grow professionally.`;

export const ABOUT_TEXT = `Hi, I’m Sheik Rizwan, a Full Stack Developer with 1+ year of experience designing and delivering enterprise web, mobile, and Zoho ecosystem applications. Proficient in Java (Spring Boot), React.js, React Native, Flutter, and Zoho CRM integrations. I enjoy creating efficient software solutions, collaborating in dynamic teams, and continuously learning to enhance my skills and deliver high-quality results. My focus is on building applications that are not only functional but also user-friendly and scalable.`;

// Projects section
export const PROJECTS = [
  {
    title: "Gulf Oil Lubricants - Distributor & Warranty Management System",
    image: gulfproject,
    description:
      "Architected a full-stack enterprise application using Spring Boot REST API, React.js web frontend, and React Native mobile app. Engineered 20+ secure RESTful APIs with JWT-based authentication and RBAC; integrated MySQL via Spring Data JPA/Hibernate. Configured Spring Security for route-level authorization and real-time data sync.",
    technologies: ["Spring Boot", "React.js", "React Native", "MySQL", "JWT", "Hibernate"],
  },
  {
    title: "Snowflake - Zoho CRM Bidirectional Sync Extension",
    image: snowflake,
    description:
      "Built a bidirectional sync extension for Snowflake and Zoho CRM supporting import/export across 10 CRM modules published on the Zoho Marketplace. Built embedded CRM widgets using Zoho JS SDK and COQL with column filters, search bar, and multi-product grouping strategy.",
    technologies: ["Snowflake", "Zoho CRM", "Zoho JS SDK", "COQL"],
  },
  {
    title: "Educational Management Mobile App",
    image: gurukulam,
    description:
      "Developed and deployed a Flutter Android app managing academic, administrative, and spiritual activities for an educational institution. Built role-based UI screens for Member, and Student roles including attendance and class schedules.",
    technologies: ["Flutter", "Dart", "Android"],
  },
  {
    title: "Bank Management System",
    image: project1,
    description:
      "Developed a comprehensive banking system with features like account creation, deposits, withdrawals, balance inquiry, mini-statement generation, PIN change, and account closure. Ensured secure transaction handling and efficient database management.",
    technologies: ["Java", "JDBC", "MySQL", "IntelliJ IDEA"],
  },
  {
    title: "Integrated Hospital Management Website",
    image: project2,
    description:
      "Built a responsive website for managing hospital operations, including appointment scheduling, patient records, and staff management. Delivered a user-friendly interface with cross-device compatibility.",
    technologies: ["HTML", "CSS", "Bootstrap", "React JS", "Spring Boot", "PostgreSQL"],
    livePreview: "https://sheikrizwan-dev.github.io/integrated-hospital-website/",
    sourceCode: "https://github.com/sheikrizwan-dev/hospital-management",
  },
  {
    title: "Food Blog Website",
    image: project3,
    description:
      "Designed and developed a food blog website with a clean, responsive layout. Integrated sections for recipes, images, and toggle-based navigation for an enhanced user experience.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    livePreview: "https://sheikrizwan-dev.github.io/foodvlog/",
    sourceCode: "https://github.com/sheikrizwan-dev/foodvlog",
  },
  {
    title: "Landing Page",
    image: project4,
    description:
      "Created a visually appealing and responsive landing page for a Full Stack Java course, featuring sections like Home, About, Overview, Curriculum, Feedback, and Contact.",
    technologies: ["HTML", "CSS"],
    livePreview: "https://sheikrizwan-dev.github.io/landing-page/",
    sourceCode: "https://github.com/sheikrizwan-dev/landing-page",
  },
  {
    title: "Tasty Corner",
    image: project5,
    description:
      "Designed as a delightful food ordering platform, Tasty Corner offers a variety of dessert items, allowing users to search for their favorite treats, add them to their cart, and generate the total bill effortlessly.",
    technologies: ["HTML", "CSS", "React JS"],
    livePreview: "https://tastycorner.netlify.app/",
  },
  {
    title: "Portfolio Website",
    image: project6,
    description:
      "Designed and developed a personal portfolio website to showcase my projects, skills, and contact information. The website is fully responsive and features a clean, modern design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    livePreview: "https://sheikrizwan.dev.netlify.app",
  },
];

// Contact information
export const CONTACT = {
  email: "sheikrizwan.dev@gmail.com",
};

export const ACCESS_KEY = '7b22c50e-9d41-44ee-a12a-aa08eef4b697';

export const EXPERIENCES = [
  {
    year: "Mar 2025 – Present",
    role: "Software Developer",
    company: "Tiara Consulting Services India Pvt. Ltd.",
    description: "Architected full-stack enterprise applications and bidirectional sync extensions. Engineered secure RESTful APIs with JWT-based authentication and configured real-time data sync across web and mobile platforms.",
    technologies: ["Spring Boot", "React.js", "React Native", "MySQL", "Zoho CRM", "Hibernate"],
  },
  {
    year: "Mar 2026 – May 2026",
    role: "Mobile App Developer (Freelance)",
    company: "Vasavi Gurukulam Shevapet",
    description: "Developed and deployed a Flutter Android app for managing academic, administrative, and spiritual activities. Built role-based UI screens for seamless activity management.",
    technologies: ["Flutter", "Dart", "Android"],
  }
];