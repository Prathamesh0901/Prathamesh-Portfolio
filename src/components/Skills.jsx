import { useState } from "react";
import { motion } from "framer-motion";
import { stones } from '../utils/infinityStones';
import Starfield from "./StarField";
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";
import DisintegrateText from './DisIntegrateText.jsx'

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiExpress,
  SiTypescript,
  SiMysql,
} from "react-icons/si";

// Skill list
const skills = [
  { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
  { name: "C/C++", icon: <SiCplusplus />, color: "text-blue-300" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-sky-400" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-300" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-200" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "SQL", icon: <FaDatabase />, color: "text-purple-300" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

const skillStone = stones.find(stone => stone.id === 'mind');

const Skills = () => {
  const { collected, collectStone } = useCollectedStones();
  const isCollected = collected.includes(skillStone.id)
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 flex flex-col md:grid md:grid-cols-4 gap-10 text-white items-center backdrop-blur-sm bg-transparent relative"
    >
      <Starfield />
      <motion.div
        className="flex flex-col items-center gap-6 order-1 md:order-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-display tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Skills
        </motion.h1>
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={`
            absolute w-60 h-60 rounded-full bg-yellow-300 blur-3xl opacity-20
            ${
              !isCollected?
              'animate-pulse'
              :''
            }
           `} />
          <img
            onClick={() => collectStone(skillStone.id)}
            src={skillStone.image}
            alt="Mind Stone"
            className={`w-24 h-24 md:w-32 md:h-32 cursor-pointer transition-transform duration-300 
              ${!isCollected ?
                'drop-shadow-[0_0_35px_#facc15] animate-pulse'
                : ''
              }`}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="order-2 md:order-1 col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 font-body w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {skills.map(({ name, icon, color }) => (
          <motion.div
            key={name}
            className="flex flex-col items-center text-center bg-white/5 hover:bg-white/10 px-4 py-4 rounded-xl transition shadow-md"
            variants={itemVariants}
          >
            <div className={`text-3xl md:text-4xl mb-2 ${color}`}>{icon}</div>
            <span className="text-sm md:text-base font-medium text-gray-200">
              {<DisintegrateText text={name}/>}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
