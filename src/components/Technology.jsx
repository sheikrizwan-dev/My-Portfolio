import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpring, SiMysql, SiPostman, SiDocker, SiReact, SiReacthookform } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
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
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technology
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* HTML */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <FaHtml5 className="text-5xl text-orange-500" />
        </motion.div>

        {/* CSS */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <FaCss3Alt className="text-5xl text-blue-500" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <FaJs className="text-5xl text-yellow-400" />
        </motion.div>

        {/* React */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>

        {/* React Native */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
        >
          <SiReact className="text-5xl text-cyan-500" />
        </motion.div>

        {/* Java */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        >
          <FaJava className="text-5xl text-orange-600" />
        </motion.div>

        {/* Spring */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
        >
          <SiSpring className="text-5xl text-green-500" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <SiMysql className="text-5xl text-blue-500" />
        </motion.div>

        {/* Python */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
        >
          <FaPython className="text-5xl text-yellow-500" />
        </motion.div>

        {/* Docker */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
        >
          <SiDocker className="text-5xl text-blue-400" />
        </motion.div>

        {/* GitHub */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
        >
          <BsGithub className="text-5xl text-white" />
        </motion.div>

        {/* Postman */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
        >
          <SiPostman className="text-5xl text-orange-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
