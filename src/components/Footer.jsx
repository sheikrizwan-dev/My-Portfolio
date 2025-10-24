import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
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
      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
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

          {result && (
            <div className="mt-4 flex items-center gap-2 text-white">
              <FaCheckCircle className="text-green-400" />
              <span>{result}</span>
            </div>
          )}
        </form>
      </div>

      {submitted && (
        <div className="mt-8 p-4 bg-green-500 text-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
          <p>{result}</p>
        </div>
      )}

      <p className="text-center text-sm text-gray-400 mt-12">
        © {new Date().getFullYear()} Sheik Rizwan. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
