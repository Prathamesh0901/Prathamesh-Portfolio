import { useState, useContext, createContext } from 'react';
import { stones } from '../utils/infinityStones';

const collectedStoneshooks = createContext();

export const CollectedStonesProvider = ({ children }) => {
  const [collected, setCollected] = useState([]);

  const collectStone = (id) => {
    const matched = stones.find((s) => s.id === id);
    if (!matched) {
      console.warn(`No stone found for id: ${id}`);
      return;
    }

    if (!collected.includes(matched.id)) {
      setCollected(prev => [...prev, matched.id]);
    }
  };

  return (
    <collectedStoneshooks.Provider value={{ collected, collectStone }}>
      {children}
    </collectedStoneshooks.Provider>
  )
}

export const useCollectedStones = () => {
  return useContext(collectedStoneshooks);
}