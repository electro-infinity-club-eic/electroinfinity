import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        formData,
        process.env.REACT_APP_USER_ID!
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error: any) => {
          console.error("Email Error:", error.text);
        }
      );
  };

  return (
    <section className="relative z-10 w-full min-h-screen bg-[#0f1f3d] px-4 sm:px-8 md:px-16 pt-32 flex flex-col md:flex-row items-start justify-center gap-12">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-20 flex flex-col items-start w-full md:w-1/2 max-w-md"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">
          Connect With Us
        </h2>
        <p className="text-blue-100 text-sm md:text-base mb-8">
          Follow us on social media to stay updated with our latest events,
          workshops, and projects.
        </p>

        {/* Social Media Links */}
        <div className="flex flex-col gap-5 text-white pointer-events-auto">
          <a
            href="https://github.com/Electro-Infinity-Club"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition group cursor-pointer"
          >
          <FaGithub size={28} className="transition-colors duration-300 group-hover:text-gray-400" />
          <span className="group-hover:text-gray-400">Github</span>
          </a>

          <a
            href="https://www.linkedin.com/company/electro-infinity-club"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition group cursor-pointer"
          >
            <FaLinkedin size={28} className="transition-colors duration-300 group-hover:text-blue-500" />
            <span className="group-hover:text-blue-500">LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/meswcoe_eic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition group cursor-pointer"
          >
            <FaInstagram size={28} className="transition-colors duration-300 group-hover:text-pink-500" />
            <span className="group-hover:text-pink-500">Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/channel/UCbl0PVgQHtLh1iLpronm8tg/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition group cursor-pointer"
          >
            <FaYoutube size={28} className="transition-colors duration-300 group-hover:text-red-500" />
            <span className="group-hover:text-red-500">YouTube</span>
          </a>
        </div>

        {/* Email & Location */}
        <div className="mt-8 text-white space-y-4 pointer-events-auto">
          <a
            href="mailto:electroinfinityclub@gmail.com"
            className="flex items-center gap-3 transition group cursor-pointer"
          >
            <FaEnvelope size={24} className="transition-colors duration-300 group-hover:text-cyan-300" />
            <span className="transition-colors duration-300 group-hover:text-cyan-300">
              electroinfinityclub@gmail.com
            </span>
          </a>

          <a
            href="https://maps.app.goo.gl/x1ZqgFjgnaw1Pfdn6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition group cursor-pointer"
          >
            <FaMapMarkerAlt size={24} className="transition-colors duration-300 group-hover:text-cyan-300" />
            <span className="transition-colors duration-300 group-hover:text-cyan-300">
              M.E.S Wadia College of Engineering, Pune
            </span>
          </a>
        </div>
      </motion.div>

      {/* Right Section - Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-20 bg-[#112244] border border-cyan-400 shadow-lg p-6 sm:p-8 rounded-xl w-full md:w-1/2 max-w-md"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6 text-center">
          Contact Us
        </h2>

        {isSubmitted ? (
          <div className="text-center text-blue-100 text-lg">
            🎉 Thank you! Your message has been sent.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-cyan-300 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-cyan-300 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-cyan-300 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-cyan-300 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-cyan-400 text-[#0f1f3d] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-cyan-300 transition"
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
