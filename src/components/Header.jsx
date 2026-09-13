import React, { useState } from 'react';

function Header({ darkMode, toggleDarkMode, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="#" className="brand-logo" onClick={closeMenu}>
          <span className="brand-icon">⚡</span>
          <span className="brand-text">Alex<span className="brand-dot">.dev</span></span>
        </a>

        <nav className={`main-nav ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Navigație principală">
          <ul className="nav-links">
            <li>
              <a href="#projects" onClick={closeMenu}>Proiecte</a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>Servicii</a>
            </li>
            <li>
              <a href="#process" onClick={closeMenu}>Cum Lucrez</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Link in Bio</a>
            </li>
          </ul>

          <div className="nav-actions">
            <button 
              className="btn-header-cta" 
              onClick={() => {
                closeMenu();
                onOpenContact();
              }}
            >
              Cere o Ofertă
            </button>

            <button 
              className="dark-mode-toggle" 
              onClick={toggleDarkMode}
              title={darkMode ? "Comută la tema luminoasă" : "Comută la tema întunecată"}
              aria-label={darkMode ? "Activează modul luminos" : "Activează modul întunecat"}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}

export default Header;
