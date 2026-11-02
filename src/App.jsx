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

function App() {
  const [view, setView] = useState('home'); // 'home' | 'contact'
  const [hash, setHash] = useState('');
  const revealRef = useReveal();
  const glowRef = React.useRef(null);

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
      // Use hash so the scroll effect fires
      window.location.hash = target;
    }
  };

  // Re-run reveal observer when switching back to home view
  useEffect(() => {
    if (view === 'home') {
      // Trigger a resize to re-evaluate scroll-dependent effects
      window.dispatchEvent(new Event('resize'));
    }
  }, [view]);

  return (
    <>
      <div id="glow" ref={glowRef}></div>
      <Header onNavigate={handleNavigate} />
      <main>
        {view === 'contact' ? (
          <ContactPage onNavigate={handleNavigate} />
        ) : (
          <div ref={revealRef}>
            <Hero onNavigate={handleNavigate} />
            <Marquee />
            <Services onNavigate={handleNavigate} />
            <Projects onNavigate={handleNavigate} />
            <Process />
            <Faq />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
