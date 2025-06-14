// components/DisintegrateText.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCollectedStones } from "../hooks/useCollectedStones";
export default function DisintegrateText({ text, className = "", delay = 0 }) {
  const [snapped, setSnapped] = useState(false);
  const { collected } = useCollectedStones();
  const words = text.split(" ");

  useEffect(() => {
    const handleSnap = () => {
      if (collected.length < 6) return;
      setSnapped(true);
    };

    window.addEventListener("snap", handleSnap);
    return () => window.removeEventListener("snap", handleSnap);
  }, [collected]);

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 1, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" }}
          animate={
            snapped
              ? {
                  opacity: 0,
                  x: 60 + Math.random() * 40, // move sideways
                  y: -40 - Math.random() * 40, // move upward
                  rotate: Math.random() * 120,
                  scale: 0.5,
                  filter: "blur(4px)",
                  transition: {
                    delay: delay + i * 0.08,
                    duration: 1.6 + Math.random() * 0.4,
                    ease: "easeOut",
                  },
                }
              : {}
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
