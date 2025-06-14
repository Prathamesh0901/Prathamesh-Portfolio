// components/SnapParticles.tsx
import { useEffect, useRef, useState } from "react";
import { useCollectedStones } from "../hooks/useCollectedStones";

export default function SnapParticles() {
  const { collected } = useCollectedStones();
  const canvasRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleSnap = () => {
      if(collected.length < 6) return;
      setActive(true);
      setTimeout(() => setActive(false), 3000); // auto-hide after 3s
    };

    window.addEventListener("snap", handleSnap);
    return () => window.removeEventListener("snap", handleSnap);
  }, [collected]);

  useEffect(() => {
    if (!active || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    const particles = Array.from({ length: 200 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 5,
      vy: -Math.random() * 3 - 1,
      size: Math.random() * 2 + 1,
      alpha: 1,
    }));

    let frameId;
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.01;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-[4000] pointer-events-none ${
        active ? "block" : "hidden"
      }`}
    />
  );
}
