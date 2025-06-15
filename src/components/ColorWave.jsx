import { motion } from "framer-motion";

export default function ColorWave({ color, origin = { x: 0.5, y: 0.5 } }) {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[999]"
      initial={{ opacity: 0.6, scale: 0, background: `radial-gradient(circle at ${origin.x * 100}% ${origin.y * 100}%, ${color}, transparent 50%)` }}
      animate={{ scale: 3, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
}
