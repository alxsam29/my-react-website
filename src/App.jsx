import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Process from './components/Process.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import MobileActionBar from './components/MobileActionBar.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true;
    } catch {
      return false;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch (e) {
      console.warn('Nu s-a putut salva tema:', e);
    }
    document.documentElement.classList.remove('dark-mode-preload');
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const hasSavedTheme = localStorage.getItem('theme');
      if (!hasSavedTheme) {
        setDarkMode(e.matches);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenContact = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={`app-wrapper ${darkMode ? 'dark-mode' : ''}`}>
      <div className="aurora-bg" aria-hidden="true">
        <span className="orb orb-indigo"></span>
        <span className="orb orb-violet"></span>
        <span className="orb orb-emerald"></span>
      </div>

      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenContact={handleOpenContact}
      />

      <main>
        <Hero onOpenContact={handleOpenContact} />
        <Stats />
        <Projects />
        <Services onOpenContact={handleOpenContact} />
        <Testimonials />
        <Process />
        <SocialLinks onOpenContact={handleOpenContact} />
      </main>

      <Footer />

      <MobileActionBar onOpenContact={handleOpenContact} />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
