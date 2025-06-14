import CursorGauntlet from './components/CursorGauntlet';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import SnapManager from './components/SnapManager';

export default function App() {
  return (
    <>
      <div className='scroll-smooth font-body cursor-none'>
        <div className="fixed inset-0 z-0 ">
          <div className="absolute inset-0 bg-[url('/AvengersBG.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>

        <div className="relative z-20 background-drop-sm">
          <NavBar />
          <SnapManager />
          <CursorGauntlet />
          <AboutMe />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </div>
      </div>
    </>
  );
}
