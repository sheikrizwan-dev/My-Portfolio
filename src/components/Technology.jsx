<<<<<<< HEAD
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpring, SiMysql, SiPostman, SiTailwindcss, SiBootstrap, SiPostgresql, SiReact, SiDocker } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

// Define animation variants for icons
=======
import { FaHtml5, FaCss3Alt, FaJs, FaJava} from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpring, SiMysql, SiPostman, SiDocker, SiReact,SiPython } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

// Floating animation for icons
>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

<<<<<<< HEAD
const Technology = () => {
  const techIcons = [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500", duration: 2.5 },
    { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500", duration: 3 },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400", duration: 3 },
    { icon: <SiBootstrap />, name: "Bootstrap", color: "text-purple-500", duration: 4 },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400", duration: 4 },
    { icon: <RiReactjsLine />, name: "React JS", color: "text-cyan-400", duration: 2 },
    { icon: <SiReact />, name: "React Native", color: "text-blue-400", duration: 3.5 },
    { icon: <FaJava />, name: "Java", color: "text-orange-600", duration: 5 },
    { icon: <FaPython />, name: "Python", color: "text-blue-500", duration: 3 },
    { icon: <SiSpring />, name: "Spring", color: "text-green-500", duration: 6 },
    { icon: <SiMysql />, name: "MySQL", color: "text-blue-500", duration: 4 },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-green-600", duration: 5 },
    { icon: <SiDocker />, name: "Docker", color: "text-blue-600", duration: 4 },
    { icon: <BsGithub />, name: "GitHub", color: "text-white", duration: 3.5 },
    { icon: <SiPostman />, name: "Postman", color: "text-orange-400", duration: 5.5 },
  ];

=======
// Technology stack array
const techStack = [
  { icon: <FaHtml5 className="text-5xl text-[#E34F26]" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-5xl text-[#1572B6]" />, name: "CSS" },
  { icon: <FaJs className="text-5xl text-[#F7DF1E]" />, name: "JavaScript" },
  { icon: <RiReactjsLine className="text-5xl text-[#61DAFB]" />, name: "React" },
  { icon: <SiReact className="text-5xl text-[#61DAFB]" />, name: "React Native" },
  { icon: <FaJava className="text-5xl text-[#007396]" />, name: "Java" },
  { icon: <SiSpring className="text-5xl text-[#6DB33F]" />, name: "Spring Boot" },
  { icon: <SiMysql className="text-5xl text-[#4479A1]" />, name: "MySQL" },

    { icon: <SiPython className="text-5xl text-[#4479A1]"/>, color: "#3776AB", name: "Python" },

  { icon: <SiDocker className="text-5xl text-[#2496ED]" />, name: "Docker" },
  { icon: <BsGithub className="text-5xl text-white" />, name: "GitHub" },
  { icon: <SiPostman className="text-5xl text-[#FF6C37]" />, name: "Postman" },
];

const Technology = () => {
>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
<<<<<<< HEAD
        className="my-20 text-center text-4xl"
      >
        Technology
      </motion.h2>
=======
        className="my-20 text-center text-4xl font-bold"
      >
        Technology
      </motion.h2>

>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
<<<<<<< HEAD
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
          >
            <div className={`text-5xl ${tech.color}`}>{tech.icon}</div>
            <span className="mt-2 text-sm text-neutral-300">{tech.name}</span>
=======
        className="flex flex-wrap justify-center gap-8"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 w-28 h-28 hover:scale-105 transition-transform"
            variants={iconVariants(2 + index * 0.3)}
            initial="initial"
            animate="animate"
          >
            {tech.icon}
            <p className="mt-2 text-sm text-center text-gray-300 font-medium">
              {tech.name}
            </p>
>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technology;
