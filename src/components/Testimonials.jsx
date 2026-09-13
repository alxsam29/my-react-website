import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal.js';

function Testimonials() {
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      initials: 'AM',
      name: 'Andrei M.',
      role: 'Fondator FolioTech',
      project: 'Platformă Web • Gestiune Stocuri',
      text: 'Platforma construită de Alex ne-a automatizat complet gestiunea stocurilor. Vânzările au crescut constant, iar comenzile se procesează acum în câteva minute, nu în ore. Investiția s-a amortizat mai repede decât am așteptat.',
    },
    {
      initials: 'IP',
      name: 'Ioana P.',
      role: 'Antreprenor • Beauty & Instagram',
      project: 'Site de Prezentare',
      text: 'Site-ul se încarcă instant, chiar și pe mobil. După publicare, cererile venite din Instagram au crescut vizibil — clienții mă găsesc acum într-o secundă, fără să mă mai întrebe de prețuri.',
    },
    {
      initials: 'RC',
      name: 'Radu C.',
      role: 'Proprietar Magazin Online',
      project: 'Magazin Online / E-Commerce',
      text: 'Comunicare excelentă, atenție la detalii și livrare la termen — chiar mai devreme. Alex a înțeles exact ce îi trebuie afacerii mele și a propus soluții pe care nu le-aș fi găsit singur.',
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials-section reveal-init"
      ref={sectionRef}
      aria-label="Testimoniale și recenzii clienți"
    >
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Ce Spun Clienții</span>
          <h2 className="section-title">Testimoniale & Încredere</h2>
          <p className="section-description">
            Fiecare proiect se termină cu un client mulțumit. Iată ce spun cei care au colaborat deja cu mine.
          </p>
        </div>

        <div className="testimonials-grid reveal-stagger">
          {testimonials.map((t, idx) => (
            <article className="testimonial-card" key={idx}>
              <div className="testimonial-stars" aria-label="Evaluare: 5 din 5 stele">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="testimonial-text">„{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-author-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                  <span className="testimonial-project">{t.project}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
