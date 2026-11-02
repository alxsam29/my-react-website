import React from 'react';

const FAQS = [
  { q: 'Cât durează să am un site?', a: 'Un landing page durează de obicei între una și trei săptămâni. Magazinele și platformele cer mai mult, în funcție de funcții.' },
  { q: 'Cât costă?', a: 'Depinde de numărul de pagini și de funcții. După prima discuție primești o ofertă clară, fără costuri ascunse.' },
  { q: 'Pot modifica singur conținutul?', a: 'Da. Îți arăt cum îți schimbi textele, pozele și produsele. Pentru modificări mai mari sunt la un mesaj distanță.' },
  { q: 'Ce se întâmplă după lansare?', a: 'Rămân disponibil pentru corecturi și îmbunătățiri, lunar sau doar când ai nevoie.' },
];

function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <h2 className="rv" style={{ marginBottom: '48px' }}>Întrebări frecvente</h2>
        {FAQS.map((item, idx) => (
          <details key={idx} className="rv">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Faq;
