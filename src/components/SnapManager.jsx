// components/SnapManager.tsx
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import useSnapGesture from "../hooks/useSnapGesture";
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";
import SnapParticles from "./SnapParticles";
import { useEmptySnapSound } from "../hooks/useEmptySnapSound.js";

export default function SnapManager() {
  const { collected } = useCollectedStones();
  const fadeControls = useAnimationControls();
  const hasSnapped = useRef(false);
  useSnapGesture(true);
  useEmptySnapSound();

  useEffect(() => {
    const handleSnap = () => {
      if (collected.length < 6 || hasSnapped.current) return;
      hasSnapped.current = true;
      console.log(collected.length)
      if (collected.length != 6) return;
      fadeControls.start({
        opacity: 0,
        filter: "blur(8px)",
        transition: { duration: 2 },
      });

      const link = document.createElement("a");
      link.href = `${import.meta.env.BASE_URL}/resume.pdf`;
      link.download = "PrathameshResume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    };

    window.addEventListener("snap", handleSnap);
    return () => window.removeEventListener("snap", handleSnap);
  }, [collected, fadeControls]);

  return (
    <>
      <motion.div
        animate={fadeControls}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      <SnapParticles />
    </>
  );
}
