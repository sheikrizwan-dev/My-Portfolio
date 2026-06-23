import { CONTACT, ACCESS_KEY } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.error("Error", data);
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("Failed to send message.");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20 pt-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
      >
        Get in Touch
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto px-4 md:px-8">
        {/* Contact Information */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center space-y-8"
        >
          <p className="text-neutral-400 leading-relaxed font-light mb-2 text-lg">
            Feel free to reach out if you have a project in mind, want to collaborate, or just want to say hi!
          </p>

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center text-cyan-400 shadow-lg group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-neutral-200">Address</h4>
              <p className="text-neutral-400 font-light mt-1">{CONTACT.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center text-purple-400 shadow-lg group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-300">
              <FaPhoneAlt size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-neutral-200">Phone</h4>
              <p className="text-neutral-400 font-light mt-1">{CONTACT.phoneNo}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center text-pink-400 shadow-lg group-hover:scale-110 group-hover:border-pink-500/50 transition-all duration-300">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-neutral-200">Email</h4>
              <a href={`mailto:${CONTACT.email}`} className="block text-neutral-400 font-light hover:text-cyan-400 transition-colors duration-300 mt-1">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="glass-card p-8 rounded-3xl border border-neutral-800/60 shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-shadow duration-500">
            <form className="flex flex-col gap-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors placeholder:text-neutral-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors placeholder:text-neutral-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none placeholder:text-neutral-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg tracking-wide hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                {result ? result : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
