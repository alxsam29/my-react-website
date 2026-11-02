import React, { useState, useEffect } from 'react';

function Header({ onNavigate }) {
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
    { label: 'Acasă', hash: '#top' },
    { label: 'Servicii', hash: '#servicii' },
    { label: 'Proiecte', hash: '#proiecte' },
    { label: 'Proces', hash: '#proces' },
    { label: 'Întrebări', hash: '#faq' },
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
              <a
                className="pill"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#contact');
                }}
              >
                Cere o ofertă
              </a>
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

      <div id="menu" aria-hidden={!menuOpen} className={menuOpen ? 'open' : ''}>
        <div className="menu-in">
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
            Contact <small>Cere o ofertă sau scrie-mi pe WhatsApp</small>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
