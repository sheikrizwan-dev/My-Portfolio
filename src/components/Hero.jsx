import { HERO_CONTENT } from "../constants";
import resume from "../assets/Sheik_Rizwan_Software_Developer_06-26.pdf";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload, FaArrowRight } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-center py-10 border-b border-neutral-900">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl flex flex-col items-center"
      >
        {/* Headings */}
        <motion.h1 
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
        >
          Sheik <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Rizwan</span>
        </motion.h1>

        <motion.h2 
          variants={item}
          className="text-xl md:text-3xl font-medium text-neutral-400 mb-8"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p 
          variants={item}
          className="max-w-2xl text-neutral-300 font-light text-base md:text-lg leading-relaxed mb-10"
        >
          {HERO_CONTENT}
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 items-center mb-12">
          <a
            href="#projects"
            className="group relative flex items-center gap-2 px-8 py-3 bg-white text-neutral-950 rounded-full font-semibold hover:bg-neutral-200 transition-all duration-300 hover:scale-105"
          >
            View Work
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* <a
            href={resume}
            download="Sheik_Rizwan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold border border-neutral-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105 bg-neutral-900/50 backdrop-blur-sm"
          >
            Resume
            <FaDownload />
          </a> */}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="flex gap-6 text-2xl">
          <a href="https://www.linkedin.com/in/sheik-rizwan/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-cyan-400 transition-colors duration-300 hover:-translate-y-1 transform">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sheikrizwan-dev?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-purple-400 transition-colors duration-300 hover:-translate-y-1 transform">
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
