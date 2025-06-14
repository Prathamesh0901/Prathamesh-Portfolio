import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";
import Starfield from "./StarField";
import { stones } from "../utils/infinityStones";
import DisintegrateText from "./DisIntegrateText.jsx";

const aboutStone = stones.find(stone => stone.id === 'space');

const AboutMe = () => {
  const { collected, collectStone } = useCollectedStones();
  const isCollected = collected.includes(aboutStone.id)
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:grid md:grid-cols-4 text-white px-6 md:px-16 py-32 backdrop-blur-sm bg-transparent mt-4 gap-10"
    >
        <Starfield />
      <motion.div
        className="flex flex-col items-center gap-6 order-1 md:order-1"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-display tracking-wide ml-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h1>
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={`absolute w-60 h-60 rounded-full bg-blue-300 blur-3xl opacity-25
          ${
            !isCollected?
            'animate-pulse'
            : ''
          }
          `}
           />
          <img
            onClick={() => collectStone(aboutStone.id)}
            src={aboutStone.image}
            alt="Space Stone"
            className={`w-32 h-32 md:w-44 md:h-44 
                ${
                  !isCollected?
                  'animate-pulse drop-shadow-[0_0_35px_#38bdf8]'
                  : ''
                }
              `}
          />
        </motion.div>
      </motion.div>

      {/* Description section: Right on desktop, bottom on mobile */}
      <motion.div
        className="order-2 md:order-2 col-span-3 flex flex-col justify-center gap-6 ml-auto max-w-4xl md:pr-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-6xl font-bold tracking-wide text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <DisintegrateText 
          text="Hi, I'm Prathamesh!"
          />
        </motion.h2>

        <motion.p
          className="text-xl md:text-4xl leading-relaxed text-gray-300 text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A passionate <span className="text-amber-400 font-semibold">
            <DisintegrateText 
              text="Full Stack Developer"
            />
          </span>, currently pursuing 
            <DisintegrateText 
              text="B.Tech. in Information Technology."
            />
          <br className="hidden md:block" />
          Experienced in building <DisintegrateText text="web applications" /> with the <span className="text-red-400 font-semibold">
            <DisintegrateText text={"MERN"} /> 
          </span> stack.
        </motion.p>

        <motion.p
          className="text-xl md:text-4xl text-gray-400 text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          You'll find me exploring new tech, solving <span className="text-green-400 font-semibold">
           <DisintegrateText text="DSA" />
          </span> questions,
          or participating in hackathons.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-end gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/Prathamesh0901"
            className="h-14 w-14 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://leetcode.com/u/Prathamesh0901"
            className="h-14 w-14 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
            title="Leetcode"
          >
            <SiLeetcode className="text-3xl" />
          </a>
          <a
            href="https://www.codechef.com/users/prathamesh0901"
            className="h-14 w-14 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
            title="Codechef"
          >
            <SiCodechef className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/prathameshmane09/"
            className="h-14 w-14 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="#contact"
            className="px-6 py-2 flex items-center border border-amber-500 text-amber-400 rounded-full hover:bg-amber-400 hover:text-black transition text-xl md:text-2xl"
          >
            Let’s Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
