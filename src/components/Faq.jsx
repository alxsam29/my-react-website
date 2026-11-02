import React from 'react';

function Faq({ t }) {
  return (
    <section id="faq">
      <div className="wrap">
        <h2 className="rv" style={{ marginBottom: '48px' }}>{t.faq.title}</h2>
        {t.faq.items.map((item, idx) => (
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
