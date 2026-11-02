import React from 'react';

const SERVICES = [
  {
    title: 'Landing page',
    desc: 'O pagină care explică clar oferta ta și îl duce pe vizitator spre contact. Rapidă pe telefon, bună în Google.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 14h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: 'Magazin online',
    desc: 'Catalog, coș și plată online, cu produse pe care le editezi singur, fără să ceri ajutor.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.76L19.5 8H6" />
        <circle cx="9" cy="19" r="1.4" />
        <circle cx="17" cy="19" r="1.4" />
      </svg>
    ),
  },
  {
    title: 'Platforme web',
    desc: 'Conturi de utilizator, panouri admin și funcții interactive construite în React.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
      </svg>
    ),
  },
];

function Services({ onNavigate }) {
  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (!prefersReduced) {
      card.style.transform = `rotateX(${((y / rect.height - 0.5) * -10)}deg) rotateY(${((x / rect.width - 0.5) * 10)}deg) translateY(-6px)`;
    }
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <section id="servicii">
      <div className="wrap">
        <h2 className="rv">Ce pot construi pentru tine</h2>
        <p className="sub rv">De la o pagină simplă la o platformă completă, cu același accent pe viteză și pe aspect.</p>
        <div className="cards">
          {SERVICES.map((srv, idx) => (
            <article
              key={idx}
              className="card rv"
              style={{ transitionDelay: `${idx * 0.12}s` }}
              onPointerMove={handleCardMove}
              onPointerLeave={handleCardLeave}
            >
              <span className="ic">{srv.icon}</span>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
