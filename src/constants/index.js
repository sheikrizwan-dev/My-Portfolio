import project1 from "../assets/projects/bank-management.webp";
import project2 from "../assets/projects/hospital website.png";
import project3 from "../assets/projects/food blog.png";
import project4 from "../assets/projects/landing java.png";
import project5 from "../assets/projects/tasty corner.png";
import project6 from "../assets/projects/portfolio.png";



export const HERO_CONTENT = `As a highly motivated Full Stack Java Developer, I specialize in building robust, scalable, and user-centric web applications. With expertise in Java, Spring Boot, and MySQL on the back-end, combined with front-end technologies like React, Tailwind CSS, and Bootstrap, I deliver seamless and efficient solutions. I am committed to leveraging my technical skills and problem-solving abilities to contribute to innovative projects that drive organizational success while continuously enhancing my knowledge in the evolving field of software development.
`;

export const ABOUT_TEXT = `Hi, I’m Sheik Rizwan, a recent graduate with a Bachelor's degree in Computer Science Engineering. I am eager to start my career as a Full Stack Java Developer, leveraging my strong foundation in programming, web development, and problem-solving. I have gained proficiency in technologies such as Java, JavaScript, HTML, CSS, React.js, Tailwind CSS, Bootstrap, Spring Boot, and MySQL.

I am passionate about creating innovative and efficient software solutions and continuously enhancing my technical expertise. With excellent problem-solving abilities, a strong work ethic, and a commitment to learning, I am confident in my ability to contribute effectively to dynamic and collaborative teams.`;


export const PROJECTS = [
  {
    title: "Bank Management System",
    image: project1, // Replace with the correct path to your image
    description:
      "Developed a comprehensive banking system with features like account creation, deposits, withdrawals, balance inquiry, mini-statement generation, PIN change, and account closure. Ensured secure transaction handling and efficient database management.",
    technologies: ["Java", "JDBC", "MySQL", "IntelliJ IDEA"],
  },
  {
    title: "Integrated Hospital Management Website",
    image: project2,
    description:
      "Built a responsive website for managing hospital operations, including appointment scheduling, patient records, and staff management. Delivered a user-friendly interface with cross-device compatibility.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    livePreview: "https://sheikrizwan27.github.io/integrated-hospital-website/",
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
    technologies: ["HTML", "CSS","React Js"],
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

export const ACCESS_KEY = '7b22c50e-9d41-44ee-a12a-aa08eef4b697';

export const CONTACT = {
  address: "Tirunelveli ,Tamil Nadu",
  email: "sheikrizwan27@gmail.com",
};
