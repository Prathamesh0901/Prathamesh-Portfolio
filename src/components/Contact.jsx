"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";
import Starfield from "./StarField";

const contactLinks = [
  { icon: <FaEnvelope />, link: "mailto:prathameshmane3622@gmail.com", title: "Email" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/prathameshmane09/", title: "LinkedIn" },
  { icon: <FaGithub />, link: "https://github.com/Prathamesh0901", title: "GitHub" },
  { icon: <SiLeetcode />, link: "https://leetcode.com/u/Prathamesh0901/", title: "LeetCode" },
  { icon: <SiCodechef />, link: "https://www.codechef.com/users/prathamesh0901", title: "CodeChef" },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full px-6 sm:px-10 md:px-16 py-20 text-white grid md:grid-cols-2 gap-12 items-center backdrop-blur-sm"
    >
      <Starfield />
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center gap-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
          Reach Out to Me!
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          Want to collaborate, discuss a project, or just say hi?
          <br />
          <span className="text-orange-400 font-medium">
            I’m open to opportunities
          </span>{" "}
          and always up for a good chat.
        </p>

        <div className="flex flex-wrap gap-4 mt-4 text-2xl sm:text-3xl text-gray-400">
          {contactLinks.map(({ icon, link, title }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
              title={title}
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-md flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="bg-transparent border border-white/20 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="bg-transparent border border-white/20 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:outline-none"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="bg-transparent border border-white/20 px-4 py-3 rounded-md text-white placeholder-gray-400 resize-none focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
        >
          Send Message
        </button>
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-sm mt-2 font-semibold ${
              status.startsWith("✅")
                ? "text-green-400"
                : status.startsWith("❌")
                ? "text-red-400"
                : "text-yellow-400"
            }`}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
