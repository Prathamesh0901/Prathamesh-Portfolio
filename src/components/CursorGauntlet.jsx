import { useEffect, useState } from 'react';
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";
import Gauntlet from './Gauntlet';

export default function CursorGauntlet() {
  const [mousePos, setMousePos] = useState({ x: 100, y: 100 });
  const { collected } = useCollectedStones();

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    document.body.style.cursor = 'none'; // Hide default cursor

    return () => {
      window.removeEventListener('mousemove', move);
      document.body.style.cursor = 'auto'; // Restore default cursor on unmount
    };
  }, []);

  return (
    <div
      className="fixed z-50 pointer-events-none transition-transform duration-75 ease-out"
      style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, transform: 'translate(-30%, -25%)', rotate: '-25deg'}}
    >
      <Gauntlet collectedStones={collected} />
    </div>
  );
}