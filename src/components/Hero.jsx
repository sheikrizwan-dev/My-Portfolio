import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/mypic.jpg";
import resume from "../assets/myresume.pdf"; // Importing the resume file
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,  
      duration: 0.5
    }
  }
};

const item = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Hero = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4 lg:mb-35"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2"
          variants={item}
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}  // Adjust delay for h1
            >
              <h1>Sheik Rizwan</h1>
            </motion.div>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl tracking-tight"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}  // Adjust delay for hero content
            >
              Full Stack Java Developer
            </motion.span>
            <motion.p
<<<<<<< HEAD
              className="my-2 max-w-xl py-6 font-light lg:text-lg lg:leading-8 "
=======
              className="my-2 max-w-xl py-6 font-light tracking-tighter herocontent"
>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}  
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href={resume} 
<<<<<<< HEAD
              download="Sheik_Rizwan_CV.pdf" 
=======
>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 lg:mt-2 px-6 py-2 text-white bg-purple-600 rounded-lg shadow hover:bg-purple-700 transition"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}  
        >
          <div className="flex justify-center myimage">
            <motion.img
              src={profilePic}
              alt="profile"
<<<<<<< HEAD
              className="max-h-[600px] w-auto max-w-full object-cover rounded-lg shadow-lg"
=======
>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
