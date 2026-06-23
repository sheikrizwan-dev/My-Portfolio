import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 pt-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
      >
        Work Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="relative">
          {/* Glowing Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
          
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10 ml-10 relative group"
            >
              {/* Glowing Dot on Timeline */}
              <div className="absolute -left-[51px] top-2 h-6 w-6 rounded-full border-4 border-neutral-950 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] group-hover:scale-125 group-hover:bg-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300"></div>

              {/* Experience Card */}
              <div className="glass-card p-6 md:p-8 rounded-3xl transition-all duration-500 shadow-xl border border-neutral-800/60 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:-translate-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-100 group-hover:text-cyan-300 transition-colors duration-300">
                      {experience.role}
                    </h3>
                    <h4 className="text-lg font-medium text-purple-400 mt-1">
                      {experience.company}
                    </h4>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-cyan-300 bg-cyan-900/30 px-4 py-2 rounded-full border border-cyan-700/50 shadow-[0_0_10px_rgba(34,211,238,0.1)] whitespace-nowrap">
                    {experience.year}
                  </span>
                </div>

                <p className="text-neutral-300 leading-relaxed mb-8 font-light">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-neutral-900/50 px-3 py-1 text-xs font-medium text-purple-300 border border-purple-800/40 hover:bg-purple-900/50 hover:border-purple-400/60 hover:text-purple-200 transition-all duration-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
