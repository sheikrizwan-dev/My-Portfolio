import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 pt-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-cyan-400/30 to-purple-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <img 
                className="rounded-xl"
                src={aboutImg} 
                alt="about" 
                style={{ width: 'auto', height: '350px' }} 
              />
            </div>
          </div>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="glass-card p-8 rounded-2xl lg:ml-8 lg:mt-8">
              <p className="max-w-xl text-neutral-300 font-light lg:text-lg lg:leading-8 text-justify">
                {ABOUT_TEXT}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
