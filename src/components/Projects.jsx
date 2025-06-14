import React from "react";
import { FaGithub, FaExternalLinkAlt, FaNpm } from "react-icons/fa";
import { motion } from "framer-motion";
import Starfield from "./StarField";
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";
import { stones } from "../utils/infinityStones";
import DisintegrateText from "./DisIntegrateText.jsx";

const projects = [
  {
    title: "Zoom MCP Server",
    image: `${import.meta.env.BASE_URL}/projects/zoom-mcp.png`,
    github: "https://github.com/Prathamesh0901/zoom-mcp-server",
    npm: "https://www.npmjs.com/package/@prathamesh0901/zoom-mcp-server",
    bullets: [
      "A CLI tool to manage Zoom meetings via Zoom API using Node.js, with AI tool support via MCP.",
    ],
  },
  {
    title: "Wanderlust",
    image: `${import.meta.env.BASE_URL}/projects/wanderlust.png`,
    github: "https://github.com/Prathamesh0901/wanderlust",
    live: "https://wanderlust-e4sr.onrender.com/",
    bullets: [
      "A full-stack travel listing platform with CRUD features using Node.js, Express, and MongoDB.",
    ],
  },
  {
    title: "Expression Converter",
    image: `${import.meta.env.BASE_URL}/projects/expression-converter.png`,
    github: "https://github.com/Prathamesh0901/Expression-Converter",
    bullets: [
      "C++ console app to convert and evaluate infix, prefix, and postfix expressions using OOP.",
    ],
  },
];

const projectStone = stones.find(stone => stone.id === 'reality');

const Projects = () => {
  const { collected, collectStone } = useCollectedStones();
  const isCollected = collected.includes(projectStone.id)
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col md:grid md:grid-cols-4 px-6 md:px-16 py-20 gap-12 backdrop-blur-sm bg-transparent text-white"
    >
      <Starfield />
      {/* Reality Stone */}
      <motion.div
        className="order-1 md:order-1 flex flex-col items-center justify-center gap-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-display tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="relative flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={`absolute w-60 h-60 rounded-full bg-pink-500 blur-3xl opacity-25 
            ${
              !isCollected?
              'animate-pulse'
              : ''
            }`} />
          <img
            onClick={() => collectStone(projectStone.id)}
            src={projectStone.image}
            alt="Reality Stone"
            className={`w-32 h-32 md:w-44 md:h-44 
              ${
                !isCollected?
                'animate-pulse drop-shadow-[0_0_35px_#ec4899]'
                :''
              }`}
          />
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="order-2 md:order-2 col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white/5 hover:bg-white/10 rounded-xl p-4 md:p-6 transition shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-48 object-cover rounded-md mb-4 border border-pink-300 shadow-sm"
            />
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl md:text-2xl font-semibold text-pink-300">
                <DisintegrateText text={project.title} />
              </h2>
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="hover:text-white"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                )}
                {project.npm && (
                  <a
                    href={project.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="NPM package"
                    className="hover:text-white"
                  >
                    <FaNpm className="text-3xl" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    className="hover:text-white"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              <DisintegrateText text={project.bullets[0]} />
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
