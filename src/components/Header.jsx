import React, { useState, useEffect } from 'react';

function Header({ onNavigate, theme, onToggleTheme, lang, onToggleLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const setMenu = (open) => {
    setMenuOpen(open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  const handleNav = (hash) => {
    setMenu(false);
    onNavigate(hash);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  const menuItems = [
    { label: t.nav.home, hash: '#top' },
    { label: t.nav.services, hash: '#servicii' },
    { label: t.nav.projects, hash: '#proiecte' },
    { label: t.nav.process, hash: '#proces' },
    { label: t.nav.faq, hash: '#faq' },
  ];

  return (
    <>
      <header>
        <div className="wrap">
          <nav>
            <a
              className="logo"
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#top');
              }}
            >
              alex<i>.dev</i>
            </a>

            <div className="links">
              {/* Language toggle button */}
              <button
                type="button"
                className="lang-btn"
                onClick={onToggleLang}
                title={t.nav.langToggle}
                aria-label={t.nav.langToggle}
              >
                <span className="lang-flag">{lang === 'ro' ? '🇷🇴' : '🇬🇧'}</span>
                <span>{lang.toUpperCase()}</span>
              </button>

              {/* Theme toggle button */}
              <button
                type="button"
                className="theme-btn"
                onClick={onToggleTheme}
                title={t.nav.themeToggle}
                aria-label={t.nav.themeToggle}
              >
                <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
              </button>

              {/* CTA link */}
              <a
                className="pill"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#contact');
                }}
              >
                {t.nav.cta}
              </a>

              {/* Mobile burger toggle */}
              <button
                className="burger"
                type="button"
                aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
                aria-expanded={menuOpen}
                aria-controls="menu"
                onClick={() => setMenu(!menuOpen)}
              >
                <span></span><span></span><span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div id="menu" aria-hidden={!menuOpen} className={menuOpen ? 'open' : ''}>
        <div className="menu-in">
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            <button
              type="button"
              className="lang-btn"
              onClick={onToggleLang}
            >
              <span className="lang-flag">{lang === 'ro' ? '🇷🇴' : '🇬🇧'}</span>
              <span>{lang === 'ro' ? 'Română' : 'English'}</span>
            </button>
            <button
              type="button"
              className="theme-btn"
              onClick={onToggleTheme}
            >
              <span className="theme-icon">{theme === 'dark' ? '☀️ Luminos' : '🌙 Întunecat'}</span>
            </button>
          </div>

          {menuItems.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.hash);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="cta-link"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#contact');
            }}
          >
            {t.nav.contact} <small>{t.nav.cta}</small>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
