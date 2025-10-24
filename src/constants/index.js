import project4 from "../assets/projects/landing java.png";
import project2 from "../assets/projects/hospital website.png";
import project3 from "../assets/projects/food blog.png";
import project1 from "../assets/projects/bank-management.webp";

export const HERO_CONTENT = `I am a Full Stack Developer passionate about building robust, scalable, and user-centric web applications. Skilled in Java, Python, and Spring Boot on the backend, and React, React Native, Tailwind CSS, and Bootstrap on the frontend. Proficient with databases like MySQL and PostgreSQL, and tools including Git, GitHub, Docker, Postman, and RESTful APIs. I thrive on creating innovative solutions, solving complex problems, and continuously expanding my technical expertise to deliver impactful projects.`;


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
    sourceCode: "https://github.com/sheikrizwan27/hospital-management",
  },
  {
    title: "Food Blog Website",
    image: project3,
    description:
      "Designed and developed a food blog website with a clean, responsive layout. Integrated sections for recipes, images, and toggle-based navigation for an enhanced user experience.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    livePreview: "https://sheikrizwan27.github.io/foodvlog/",
    sourceCode: "https://github.com/sheikrizwan27/foodvlog",
  },
  {
    title: "Landing Page",
    image: project4,
    description:
      "Created a visually appealing and responsive landing page for a Full Stack Java course, featuring sections like Home, About, Overview, Curriculum, Feedback, and Contact.",
    technologies: ["HTML", "CSS"],
    livePreview: "https://sheikrizwan27.github.io/landing-page/",
    sourceCode: "https://github.com/sheikrizwan27/landing-page",
  },
];

export const CONTACT = {
  address: "No.17 ,3rd Street ,Tirunelveli",
  phoneNo: "+91 7339512003",
  email: "sheikrizwan27@gmail.com",
};
