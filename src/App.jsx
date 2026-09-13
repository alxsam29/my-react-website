import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
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
        <Process />
        <SocialLinks onOpenContact={handleOpenContact} />
      </main>
      <Footer />
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;
