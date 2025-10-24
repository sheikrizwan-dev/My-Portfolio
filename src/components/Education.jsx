import { motion } from "framer-motion";

const Education = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "PET Engineering College, Tirunelveli",
      year: "2020 – 2024",
      score: "Overall CGPA: 8.60",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Al-Hudha Matric.Hr.Sec.School, Tirunelveli",
      year: "2019 – 2020",
      score: "Final Percentage: 73.33%",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Al-Hudha Matric.Hr.Sec.School, Tirunelveli",
      year: "2017 – 2018",
      score: "Final Percentage: 88.2%",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="space-y-8">
        {educationDetails.map((education, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto bg-neutral-800 p-6 rounded-lg shadow-md"
          >
            <h6 className="text-lg font-semibold">{education.degree}</h6>
            <p className="text-neutral-400">{education.institution}</p>
            <p className="text-neutral-400">{education.year}</p>
            <p className="text-neutral-400">{education.score}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
