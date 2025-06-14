// src/components/background/Starfield.js
import React from 'react';

// Function to generate a number of stars
const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      size: Math.random() * 2 + 0.5 + 'px', // 0.5px to 2.5px
      delay: Math.random() * 4 + 's', // 0s to 4s delay for twinkle
      duration: Math.random() * 3 + 2 + 's', // 2s to 5s duration for twinkle
    });
  }
  return stars;
};

const starsData = generateStars(300); // Adjust number of stars as needed

export default function Starfield() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-gray-950 bg-transparent">
      {starsData.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration} infinite ease-in-out ${star.delay}`,
          }}
        ></div>
      ))}
    </div>
  );
}