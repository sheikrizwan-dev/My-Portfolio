import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Engineering – Computer Science",
      institution: "PET Engineering College, Tirunelveli",
      year: "2020 – 2024",
      score: "CGPA: 8.58 / 10.0",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Al-Hudha Matric. Hr. Sec. School, Tirunelveli",
      year: "2019 – 2020",
      score: "Percentage: 73.33%",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Al-Hudha Matric. Hr. Sec. School, Tirunelveli",
      year: "2017 – 2018",
      score: "Percentage: 88.2%",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-12 pt-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
      >
        Education
      </motion.h2>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationDetails.map((education, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl rounded-full group-hover:bg-cyan-400/30 transition-colors duration-500"></div>
            
            <div>
              <div className="w-12 h-12 bg-neutral-900 border border-neutral-700/50 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300 shadow-lg">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-100 group-hover:text-cyan-300 transition-colors duration-300 mb-2">
                {education.degree}
              </h3>
              <h4 className="text-sm font-medium text-purple-400 mb-6">
                {education.institution}
              </h4>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-center border-t border-neutral-800/50 pt-4">
                <span className="text-neutral-400 font-light text-sm bg-neutral-900/50 px-3 py-1 rounded-full border border-neutral-800">
                  {education.year}
                </span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {education.score}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
