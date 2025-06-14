// hooks/useSnapGesture.ts
import { useEffect } from "react";

export default function useSnapGesture(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const buttons = new Set();

    const handleContextMenu = (e) => {
      if (buttons.has(0) && buttons.has(2)) {
        e.preventDefault();
      }
    };

    const handleDown = (e) => {
      buttons.add(e.button);
      if (buttons.has(0) && buttons.has(2)) {
        window.dispatchEvent(new Event("snap"));
      }
    };

    const handleUp = (e) => buttons.delete(e.button);

    
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [enabled]);
}
