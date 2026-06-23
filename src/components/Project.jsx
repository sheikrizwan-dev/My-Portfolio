import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 pt-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-center items-center lg:items-stretch">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/5 flex"
            >
              {project.image && (
                <div className="relative group overflow-hidden rounded-3xl border border-neutral-800/50 shadow-lg w-full h-full min-h-[250px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/5 max-w-2xl"
            >
              <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between group hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div>
                  <h6 className="mb-2 text-xl font-semibold text-neutral-100 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h6>
                  <p className="mb-4 text-neutral-400 font-light leading-relaxed">{project.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-purple-900/20 border border-purple-800/30 px-3 py-1 text-xs font-medium text-purple-400 hover:bg-purple-900/40 hover:text-purple-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 mt-auto">
                  {project.livePreview && (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2 text-sm font-medium text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"
                    >
                      Live Preview
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-neutral-600 bg-neutral-800/50 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700 hover:border-neutral-500 transition-all duration-300"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
