import React from "react";
import { motion } from "framer-motion";
import Starfield from "./StarField";
import { stones } from "../utils/infinityStones";
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";
import DisintegrateText from './DisIntegrateText.jsx'

const education = [
  {
    institute: "Government College of Engineering Karad",
    degree: "Bachelor of Technology in Information Technology",
    duration: "August 2022 – May 2026",
    result: "CGPA: 9.13",
  },
  {
    institute: "St. Paul's Jr. College of Science, Satara",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "July 2020 – May 2022",
    result: "Percentage: 84.33",
  },
  {
    institute: "Annasaheb Kalyani Vidyalaya, Camp Satara",
    degree: "Secondary School Certificate (SSC)",
    duration: "June 2010 – March 2020",
    result: "Percentage: 97.00",
  },
];

const educationStone = stones.find(stone => stone.id === 'time');

const Education = () => {
    const { collected, collectStone } = useCollectedStones();
    const isCollected = collected.includes(educationStone.id)
  return (
    <section
      id="education"
      className="min-h-full w-full px-6 py-20 text-white backdrop-blur-sm bg-transparent grid grid-cols-1 md:grid-cols-4 gap-12 items-center"
    >
      <Starfield />
      <motion.div
        className="flex flex-col items-center justify-center gap-6 order-first md:order-none"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-display tracking-wide text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Education
        </motion.h1>

        <motion.div
          className="relative flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={`absolute w-48 h-48 rounded-full bg-cyan-500 blur-3xl opacity-30 
            ${
              !isCollected?
              'animate-pulse'
              : ''
          }`} />
          <img
            onClick={() => collectStone(educationStone.id)}
            src={educationStone.image}
            alt="Time Stone"
            className={`w-24 h-24 md:w-36 md:h-36 
              ${
                !isCollected?
                'animate-pulse drop-shadow-[0_0_35px_#22d3ee]'
                :''
              }`}
          />
        </motion.div>
      </motion.div>

      <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 hover:bg-white/10 rounded-xl p-6 h-64 flex flex-col justify-between transition border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-cyan-400">
                <DisintegrateText text={edu.institute} />
              </h2>
              <p className="text-lg text-gray-300 mt-1">{edu.degree}</p>
            </div>
            <div className="mt-4 text-md text-gray-400">
              <p className="mt-1 italic text-lg underline"><DisintegrateText text={edu.result} /></p>
              <p>{edu.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
