<<<<<<< HEAD
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { ACCESS_KEY, CONTACT } from "../constants";

const Footer = () => {
  const [result, setResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms Response:", data); // Debugging

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setResult("Submission failed. Try again later.");
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white py-16 px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8"
      >
        Let's Connect!
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        {/* Left Section - Contact Info & Social Links */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-lg my-4 flex items-center gap-3 hover:scale-105"
          >
            <FaMapMarkerAlt className="text-xl text-red-500" /> {CONTACT.address}
          </motion.p>
       
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-3 text-lg font-medium hover:text-blue-400 transition-all duration-300"
          >
            <FaEnvelope className="text-xl text-yellow-500" /> {CONTACT.email}
          </a>

          {/* Social Media & WhatsApp */}
          <div className="flex justify-center md:justify-start gap-8 mt-8">
            <a
              href="https://github.com/sheikrizwan27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sheikrizwan27/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/917339512003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-green-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form onSubmit={onSubmit} className="md:w-1/2 p-8 rounded-3xl shadow-xl mt-8 md:mt-0 bg-gradient-to-r from-purple-500 to-blue-500">
          <input type="hidden" name="access_key" value={ACCESS_KEY} />
          <div className="mb-6">
            <label className="block text-sm font-medium text-white">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-5 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-white">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-5 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-white">Your Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-5 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-600 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-indigo-900 hover:bg-gradient-to-l text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>

          {/* Submission Result Message */}
          {result && (
            <div className="mt-4 flex items-center gap-2 text-white">
              <FaCheckCircle className="text-green-400" />
              <span>{result}</span>
            </div>
          )}
        </form>
      </div>

      {/* Submission Result Div */}
      {submitted && (
        <div className="mt-8 p-4 bg-green-500 text-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
          <p>{result}</p>
        </div>
      )}

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400 mt-12">
        © {new Date().getFullYear()} Sheik Rizwan. All rights reserved.
      </p>
    </div>
  );
};
=======
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
>>>>>>> 5159629c22b5ca20edaa96ba6a9a76b6f04aacd5

export default Footer;
