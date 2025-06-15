import { useState } from "react";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import { FaHandSparkles } from "react-icons/fa";
import { toggleSound } from "../utils/soundController";

export default function ToggleButtons() {
  const [soundOn, setSoundOn] = useState(true);

  const handleSnap = () => {
    window.dispatchEvent(new Event("snap"));
  };

  return (
    <div className="fixed bottom-4 left-4 z-[1000] flex flex-col gap-3 items-center">
      <button
        onClick={() => {
          toggleSound(!soundOn)
          setSoundOn(!soundOn)
        }}
        className="p-3 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80 transition text-white text-xl"
        title="Toggle Sound"
      >
        {soundOn ? <MdVolumeUp /> : <MdVolumeOff />}
      </button>
      
      <button
        onClick={handleSnap}
        className="p-3 rounded-full bg-yellow-600 hover:bg-yellow-700 transition text-white text-xl"
        title="Manual Snap"
      >
        <FaHandSparkles />
      </button>
    </div>
  );
}
