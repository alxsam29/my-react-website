import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Features from './components/Features.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';

function App() {
  // Inițializare temă din localStorage sau preferința sistemului
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

  // Sincronizare Dark Mode cu localStorage și atributul pe <html>
  useEffect(() => {
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch (e) {
      console.warn('Nu s-a putut salva tema în localStorage:', e);
    }
    // Elimină clasa temporară anti-FOUC dacă exista
    document.documentElement.classList.remove('dark-mode-preload');
  }, [darkMode]);

  // Ascultă schimbările preferințelor din sistem dacă utilizatorul nu a setat o preferință manuală
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

  return (
    <div className={`app-wrapper ${darkMode ? 'dark-mode' : ''}`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        onOpenContact={() => setIsModalOpen(true)}
      />
      <main>
        <Hero onOpenContact={() => setIsModalOpen(true)} />
        <Stats />
        <Features />
        <Newsletter />
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
