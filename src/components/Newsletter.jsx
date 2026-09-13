import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="newsletter-section" aria-label="Abonare noutăți">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-content">
            <span className="newsletter-badge">Rămâi la curent</span>
            <h2>Abonează-te pentru noutăți și actualizări</h2>
            <p>Primește direct pe email ultimele noutăți despre noile versiuni, ghiduri de dezvoltare și sfaturi de optimizare.</p>
          </div>

          {subscribed ? (
            <div className="newsletter-success">
              <span>✨ Te-ai abonat cu succes! Mulțumim că ești alături de noi.</span>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Introdu adresa ta de email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email pentru abonare"
              />
              <button type="submit" className="btn-primary">
                Abonează-te
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
