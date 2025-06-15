import { useEffect, useState } from 'react';
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";
import Gauntlet from './Gauntlet';
import ColorWave from './ColorWave.jsx';

export default function CursorGauntlet() {
  const [mousePos, setMousePos] = useState({ x: 100, y: 100 });
  const [waveColor, setWaveColor] = useState(null);
  const { collected } = useCollectedStones();

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleCollect = (e) => {
      setWaveColor(e.detail.color);
      setTimeout(() => setWaveColor(null), 1000);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener("collect", handleCollect);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener("collect", handleCollect);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed z-50 pointer-events-none transition-transform duration-75 ease-out"
      style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, transform: 'translate(-30%, -25%)', rotate: '-25deg' }}
    >
      {waveColor && <ColorWave color={waveColor} />}
      <Gauntlet collectedStones={collected} />
    </div>
  );
}