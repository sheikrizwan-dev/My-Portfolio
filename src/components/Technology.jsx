import { FaHtml5, FaCss3Alt, FaJs, FaJava} from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpring, SiMysql, SiPostman, SiDocker, SiReact,SiPython } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

// Floating animation for icons
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
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technology
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technology;
