import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Process from './components/Process.jsx';
import Faq from './components/Faq.jsx';
import ContactSection from './components/ContactSection.jsx';
import ContactPage from './components/ContactPage.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';
import { translations } from './translations.js';

function App() {
  const [view, setView] = useState('home'); // 'home' | 'contact'
  const [hash, setHash] = useState('');
  const revealRef = useReveal();
  const glowRef = React.useRef(null);

  // Theme state: 'dark' | 'light' (saved in localStorage)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Language state: 'ro' | 'en' (saved in localStorage)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'ro';
  });

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply language persistence
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'ro' ? 'en' : 'ro'));
  };

  const t = translations[lang] || translations.ro;

  // Sync hash → view
  useEffect(() => {
    const handleHash = () => {
      const h = location.hash.slice(1);
      if (h === 'contact') {
        setView('contact');
      } else {
        setView('home');
        setHash(h);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Scroll to section when navigating within home view
  useEffect(() => {
    if (view !== 'home') return;
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [view, hash]);

  // Cursor glow effect
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const handleMove = (e) => {
      glow.style.setProperty('--mx', e.clientX + 'px');
      glow.style.setProperty('--my', e.clientY + 'px');
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  const handleNavigate = (target) => {
    if (target === '#contact') {
      setView('contact');
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      setView('home');
      const section = target.slice(1);
      setHash(section);
      window.location.hash = target;
    }
  };

  // Re-run reveal observer when switching back to home view
  useEffect(() => {
    if (view === 'home') {
      window.dispatchEvent(new Event('resize'));
    }
  }, [view]);

  return (
    <>
      <div id="glow" ref={glowRef}></div>
      <Header
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
        lang={lang}
        onToggleLang={toggleLang}
        t={t}
      />
      <main>
        {view === 'contact' ? (
          <ContactPage onNavigate={handleNavigate} t={t} />
        ) : (
          <div ref={revealRef}>
            <Hero onNavigate={handleNavigate} t={t} />
            <Marquee />
            <Services onNavigate={handleNavigate} t={t} />
            <Projects onNavigate={handleNavigate} t={t} />
            <Process t={t} />
            <Faq t={t} />
            <ContactSection onNavigate={handleNavigate} t={t} />
          </div>
        )}
      </main>
      <Footer t={t} />
    </>
  );
}

export default App;
