import project1 from "../assets/projects/bank-management.webp";
import project2 from "../assets/projects/hospital website.png";
import project3 from "../assets/projects/food blog.png";
import project4 from "../assets/projects/landing java.png";
import project5 from "../assets/projects/tasty corner.png";
import project6 from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `Full Stack Developer building robust, scalable, and user-focused web and mobile applications. Passionate about solving real-world problems, delivering innovative solutions, and continuously learning to grow professionally.`;

export const ABOUT_TEXT = `Hi, I’m Sheik Rizwan, a Full Stack Developer with hands-on experience in web and mobile development. I work with Java, Python, JavaScript, React.js, React Native, Tailwind CSS, Bootstrap, Spring Boot, and MySQL. I enjoy creating efficient software solutions, collaborating in dynamic teams, and continuously learning to enhance my skills and deliver high-quality results. My focus is on building applications that are not only functional but also user-friendly and scalable.`;
// Projects section
export const PROJECTS = [
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
  },
  {
    title: "Food Blog Website",
    image: project3,
    description:
      "Designed and developed a food blog website with a clean, responsive layout. Integrated sections for recipes, images, and toggle-based navigation for an enhanced user experience.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    livePreview: "https://sheikrizwan27.github.io/foodvlog/",
  },
  {
    title: "Landing Page",
    image: project4,
    description:
      "Created a visually appealing and responsive landing page for a Full Stack Java course, featuring sections like Home, About, Overview, Curriculum, Feedback, and Contact.",
    technologies: ["HTML", "CSS"],
    livePreview: "https://sheikrizwan27.github.io/landing-page/",
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
    livePreview: "https://sheikrizwanportfolio.netlify.app",
  },
];

// Example access key (if needed for API integrations)
export const ACCESS_KEY = '7b22c50e-9d41-44ee-a12a-aa08eef4b697';

// Contact information
export const CONTACT = {
  address: "Tirunelveli, Tamil Nadu",
  email: "sheikrizwan27@gmail.com",
};
