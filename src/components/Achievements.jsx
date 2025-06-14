"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Starfield from "./StarField";
import { stones } from "../utils/infinityStones";
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";
import DisintegrateText from "./DisIntegrateText.jsx";

const achievements = [
    {
        title: "Winner – Vision-Ex Online coding competition, WCE Walchand",
        link: 'https://drive.google.com/file/d/1x_2nWiobaXaZWEv69EBdov1SqBrEmAwk/view?usp=sharing'
    },
    {
        title: "Ranked Top 5% (1,532/30,000+) in LeetCode Weekly Contest 438",
    },
    {
        title: "Achieved highest 1801 rating on LeetCode",
    },
    {
        title: "Reached highest 1696 (3-star) rating on CodeChef",
    },
    {
        title: "Completed Hacktoberfest 2024 – 5 PRs accepted in open-source repos",
        link: 'https://www.holopin.io/@prathamesh0901'
    }
];

const achievementsStone = stones.find(stone => stone.id === 'soul');

const Achievements = () => {
  const { collected, collectStone } = useCollectedStones();
  const isCollected = collected.includes(achievementsStone.id)
    return (
        <section
            id="achievements"
            className="min-h-full w-full px-6 py-20 text-white flex flex-col-reverse backdrop-blur-sm md:grid md:grid-cols-4 gap-6 items-center"
        >
            <Starfield />

            <div className="md:col-span-3 flex justify-start w-full">
                <div className="relative max-w-3xl pl-8">
                    <ul className="space-y-10">
                        {achievements.map((item, idx) => (
                            <motion.li
                                key={idx}
                                className="relative flex items-center gap-4"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                            >
                                {/* Vertical line for connection */}
                                {idx < achievements.length - 1 && (
                                    <div
                                        className="absolute left-[7.1px] top-1/2 w-[2px] bg-[#FFD700]"
                                        style={{ height: 'calc(50% + 50px)' }}
                                    ></div>
                                )}

                                {/* Diamond bullet */}
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border-[3px] border-[#FFD700] bg-orange-500 z-10" />
                                
                                <p className="text-sm sm:text-base md:text-xl text-gray-200 pl-10 flex items-center">
                                    <DisintegrateText text={item.title} />
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Certificate"
                                            className="hover:text-white pl-2"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right - Title and Soul Stone */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center justify-center gap-6 mr-20"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-wide text-center">
                    Achievements
                </h1>
                <div className="relative flex justify-center items-center">
                    <div className={`absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-orange-500 blur-3xl opacity-30 
                        ${
                            !isCollected?
                            'animate-pulse'
                            :''
                        }`} />
                    <img
                        onClick={() => collectStone(achievementsStone.id)}
                        src={achievementsStone.image}
                        alt="Soul Stone"
                        className={`w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 
                            ${
                                !isCollected?
                                'animate-pulse drop-shadow-[0_0_35px_#f97316]'
                                :''
                            }`}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Achievements;
