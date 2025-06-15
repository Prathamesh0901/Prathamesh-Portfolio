import { useEffect } from "react";
import { useCollectedStones } from "./useCollectedStones";
import { playSound } from "../utils/soundController";

export function useEmptySnapSound() {
    const { collected } = useCollectedStones();
    useEffect(() => {
        const emptyGauntletSnap = new Audio(`${import.meta.env.BASE_URL}/audio/EmptyGauntletSnap.mp3`);
        const completeGauntletSnap = new Audio(`${import.meta.env.BASE_URL}/audio/CompleteGauntletSnap.mp3`);
        emptyGauntletSnap.preload = "auto";
        completeGauntletSnap.preload = "auto";

        const handleSnap = () => {
            const isGauntletComplete = (collected.length >= 6);
            const sound = isGauntletComplete? completeGauntletSnap: emptyGauntletSnap;
            playSound(sound);
        };

        window.addEventListener("snap", handleSnap);
        return () => window.removeEventListener("snap", handleSnap);
    }, [collected]);
}
