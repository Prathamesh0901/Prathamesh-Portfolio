/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-reverse': 'spin-reverse 60s linear infinite',
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"], 
        body: ["Montserrat", "sans-serif"],  
      },
      keyframes: {
        'spin-reverse': {
            from: {
               transform: 'rotate(360deg)',
            },
            to: {
               transform: 'rotate(0deg)',
            },
        },
      },
    },
  },
  plugins: [],
}