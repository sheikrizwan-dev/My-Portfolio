import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaGitAlt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpring, SiMysql, SiPostman, SiTailwindcss, SiBootstrap, SiPostgresql, SiReact, SiDocker, SiFlutter, SiDart, SiMui, SiHibernate, SiVite, SiZoho, SiIntellijidea } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { motion } from "framer-motion";

// Define animation variants for icons
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
    { icon: <SiSpring />, name: "Spring", color: "text-green-500", duration: 6 },
    { icon: <SiMysql />, name: "MySQL", color: "text-blue-500", duration: 4 },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-green-600", duration: 5 },
    { icon: <SiDocker />, name: "Docker", color: "text-blue-600", duration: 4 },
    { icon: <BsGithub />, name: "GitHub", color: "text-white", duration: 3.5 },
    { icon: <SiPostman />, name: "Postman", color: "text-orange-400", duration: 5.5 },
    { icon: <SiFlutter />, name: "Flutter", color: "text-cyan-500", duration: 3 },
    { icon: <SiDart />, name: "Dart", color: "text-blue-400", duration: 2.5 },
    { icon: <SiMui />, name: "Material-UI", color: "text-blue-500", duration: 4 },

      ];

  return (
    <div className="border-b border-neutral-800 pb-12 pt-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
      >
        Technology
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center rounded-2xl glass-card p-5 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 border border-neutral-800/50 group"
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
          >
            <div className={`text-5xl ${tech.color}`}>{tech.icon}</div>
            <span className="mt-2 text-sm text-neutral-300">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technology;
