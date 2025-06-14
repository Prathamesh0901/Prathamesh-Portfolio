import React from "react";
import { motion } from "framer-motion";
import Starfield from "./StarField";
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";
import { stones } from "../utils/infinityStones";
import DisintegrateText from "./DisIntegrateText.jsx";

const experiences = [
  {
    title: "Python Developer Intern",
    company: "IFS India Mercantile Pvt. Ltd. (Pune)",
    date: "Aug 2023 – Sept 2023",
    bullets: [
      "Built simple web apps using Flask and Python.",
      "Wrote modular scripts to improve code reuse.",
    ],
    companyLogo: "/logos/ifs-logo.png",
  },
  {
    title: "Software Developer Intern",
    company: "Hirademy Technologies (Bengaluru)",
    date: "Jun 2024 – Sept 2024",
    bullets: [
      "Developed modular UIs using React.js and Bootstrap.",
      "Integrated REST APIs for improved UX and UI consistency.",
    ],
    companyLogo: "/logos/hirademy-logo.png",
  },
];

const experienceStone = stones.find(stone => stone.id === 'power');

const Experience = () => {
  const { collected, collectStone } = useCollectedStones();
  const isCollected = collected.includes(experienceStone.id)
  return (
    <section
      id="experience"
      className="min-h-screen w-full px-6 md:px-16 py-20 text-white backdrop-blur-sm bg-transparent grid grid-cols-1 md:grid-cols-4 gap-12 items-center"
    >
      <Starfield />
      <motion.div
        className="flex flex-col items-center justify-center gap-6 text-center order-first md:order-last h-full"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-display tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Experience
        </motion.h1>

        <motion.div
          className="relative flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={`absolute w-48 h-48 rounded-full bg-red-600 blur-3xl opacity-30 
          ${
            !isCollected?
            'animate-pulse'
            :''
          }`} />
          <img
            onClick={() => collectStone(experienceStone.id)}
            src={experienceStone.image}
            alt="Power Stone"
            className={`w-24 h-24 md:w-36 md:h-36 
              ${
                !isCollected?
                'animate-pulse drop-shadow-[0_0_35px_#ef4444]'
                :''
            }`}
          />
        </motion.div>
      </motion.div>

      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 hover:bg-white/10 rounded-xl px-6 py-4 transition shadow-sm border border-white/10 flex flex-col h-full gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-red-300 mb-1 underline">
                  <DisintegrateText text={exp.title} />
                </h2>
                <p className="text-lg text-gray-300"><DisintegrateText text={exp.company} /></p>
                <p className="text-sm text-gray-400 italic mb-2"><DisintegrateText text={exp.date} /></p>
              </div>
              <img
                src={exp.companyLogo}
                alt={`${exp.company} logo`}
                className="w-14 h-14 object-contain rounded-full"
              />
            </div>
            <ul className="list-disc list-inside text-gray-200 space-y-1 text-base">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
