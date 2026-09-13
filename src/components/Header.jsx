import React, { useState } from 'react';

function Header({ darkMode, toggleDarkMode, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <a href="#" className="brand-logo" onClick={closeMenu}>
          <span className="brand-icon">⚡</span>
          <span className="brand-text">My Modern Site</span>
        </a>

        <nav className={`main-nav ${mobileMenuOpen ? 'nav-open' : ''}`} aria-label="Navigație principală">
          <ul className="nav-links">
            <li>
              <a href="#features" onClick={closeMenu}>Funcționalități</a>
            </li>
            <li>
              <a href="#stats" onClick={closeMenu}>Performanță</a>
            </li>
            <li>
              <a href="#newsletter" onClick={closeMenu}>Noutăți</a>
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
              Contact
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
