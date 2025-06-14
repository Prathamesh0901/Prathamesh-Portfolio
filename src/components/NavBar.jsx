import { useEffect, useState } from 'react';
import { useCollectedStones } from "../hooks/useCollectedStones.jsx";

export default function NavBar() {
  const {collected} = useCollectedStones();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const stones = [
    { id: 'space', title: 'About', href: '#about', src:`${import.meta.env.BASE_URL}/stones/space.webp`, glow: 'drop-shadow-[0_0_25px_#3b82f6]' },
    { id: 'mind', title: 'Skills', href: '#skills', src: `${import.meta.env.BASE_URL}/stones/mind.webp`, glow: 'drop-shadow-[0_0_25px_#facc15]' },
    { id: 'reality', title: 'Projects', href: '#projects', src: `${import.meta.env.BASE_URL}/stones/reality.webp`, glow: 'drop-shadow-[0_0_25px_#ec4899]' },
    { id: 'power', title: 'Experience', href: '#experience', src: `${import.meta.env.BASE_URL}/stones/power.webp`, glow: 'drop-shadow-[0_0_25px_#dc2626]' },
    { id: 'time', title: 'Education', href: '#education', src: `${import.meta.env.BASE_URL}/stones/time.webp`, glow: 'drop-shadow-[0_0_25px_#4ade80]' },
    { id: 'soul', title: 'Achievements', href: '#achievements', src: `${import.meta.env.BASE_URL}/stones/soul.webp`, glow: 'drop-shadow-[0_0_25px_#f97316]' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <div className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <h1 className="font-display text-white text-2xl md:text-4xl font-semibold pl-4"><a href='/'>Prathamesh Mane</a></h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex flex-col justify-center items-center relative z-50"
        >
          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-2'}`} />
          <span className={`absolute w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-2'}`} />
        </button>
      </div>

      {/* Full Screen Menu */}
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex items-center justify-center transition-opacity duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`relative w-[24rem] h-[24rem] md:w-[36rem] md:h-[36rem] transition-transform duration-500 ${menuOpen ? 'scale-100' : 'scale-75'} origin-center`}>
          <div className="absolute inset-0 animate-spin-slow">
            {stones.map((stone, index) => {
              const angle = (index / stones.length) * 2 * Math.PI;
              const radius = 180;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <a
                  key={stone.id}
                  href={stone.href}
                  onClick={() => setMenuOpen(false)}
                  className="absolute group transition-transform duration-300 hover:scale-110 animate-spin-reverse"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 40px)`,
                  }}
                >
                  <img
                    src={stone.src}
                    alt={stone.title}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${collected.includes(stone.id)?'':stone.glow} transition-transform duration-300`}
                  />
                  <span className="absolute left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-medium text-center pointer-events-none">
                    {stone.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
