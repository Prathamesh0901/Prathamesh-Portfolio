"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function CosmicGalaxy() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* Base gradient */}
      <div className="fixed top-0 left-0 w-full h-full z-[-2] bg-gradient-to-br from-black via-[#1a043d] to-[#2e0a60]" />

      {/* Glowing nebula overlays */}
      <div className="fixed w-[600px] h-[600px] top-[10%] left-[5%] bg-purple-700 blur-3xl opacity-20 rounded-full z-[-1]" />
      <div className="fixed w-[400px] h-[400px] bottom-[10%] right-[10%] bg-blue-500 blur-2xl opacity-10 rounded-full z-[-1]" />
      <div className="fixed w-[500px] h-[500px] top-[30%] right-[20%] bg-pink-500 blur-2xl opacity-10 rounded-full z-[-1]" />

      {/* Particle stars */}
      <Particles
        id="cosmic-galaxy"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: "transparent" },
          particles: {
            number: { value: 150, density: { enable: true, area: 1000 } },
            color: {
              value: [
                "#ffffff",  // stars
                "#ff4bd8",  // purple (Power)
                "#f9d71c",  // yellow (Mind)
                "#00ffcc",  // green (Time)
                "#ff5400",  // orange (Soul)
                "#29b6f6",  // blue (Space)
                "#ff1744",  // red (Reality)
              ],
            },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: { min: 0.5, max: 2.5 }, random: true },
            move: {
              enable: true,
              speed: 0.1,
              direction: "none",
              random: true,
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}
