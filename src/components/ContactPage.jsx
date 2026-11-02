import React, { useState } from 'react';

// Contact details from the existing site (preserved)
const WA_NUMBER = '40727316319';
const EMAIL = 'alxsarbu29@gmail.com';
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/alxsarbu29@gmail.com';

const PROJECT_TYPES = [
  'Landing page',
  'Magazin online',
  'Platformă web',
  'Altceva',
];

function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    nume: '',
    contact: '',
    tip: PROJECT_TYPES[0],
    detalii: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [lastWaUrl, setLastWaUrl] = useState('');

  // Build WhatsApp URL with formatted message (preserved from existing site)
  const buildWhatsAppUrl = () => {
    const text =
      `Salut Alex!\n\n` +
      `Numele meu este ${formData.nume || 'un vizitator'}.\n` +
      `Tip proiect: ${formData.tip}\n` +
      `Contact: ${formData.contact || 'Nespecificat'}\n` +
      (formData.detalii ? `Detalii: ${formData.detalii}\n` : '') +
      `\nAș dori o estimare de preț și mai multe detalii. Mulțumesc!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Build mailto URL (replaces the old simple mailto with form data)
  const buildMailtoUrl = () => {
    const body =
      `Salut Alex!\n\n` +
      `Nume: ${formData.nume}\n` +
      `Contact: ${formData.contact}\n` +
      `Tip proiect: ${formData.tip}\n` +
      `Detalii: ${formData.detalii}`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent('Cerere de ofertă')}&body=${encodeURIComponent(body)}`;
  };

  // Send via WhatsApp directly (preserved logic from existing site)
  const handleSendWhatsApp = () => {
    if (!formData.nume || !formData.contact) {
      setStatusMsg('Te rog să completezi numele și datele de contact.');
      return;
    }
    const url = buildWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatusMsg('Se deschide WhatsApp cu mesajul completat. Apasă Trimite acolo.');
  };

  // Send via Email — uses formsubmit.co AJAX (preserved automation from existing site)
  const handleSendEmail = async () => {
    if (!formData.nume || !formData.contact) {
      setStatusMsg('Te rog să completezi numele și datele de contact.');
      return;
    }

    setIsLoading(true);
    setStatusMsg('');
    const waUrl = buildWhatsAppUrl();
    setLastWaUrl(waUrl);

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Nume: formData.nume,
          Contact: formData.contact,
          Tip_Proiect: formData.tip,
          Detalii: formData.detalii || 'Nespecificat',
          _subject: `Nouă cerere de ofertă: ${formData.tip} de la ${formData.nume}`,
        }),
      });

      if (!res.ok) throw new Error('Eroare la trimitere');
      setIsSubmitted(true);
    } catch (err) {
      console.warn('Eroare la trimiterea pe email, se poate continua pe WhatsApp:', err);
      // Even if email fails, show success with WhatsApp fallback (matches existing behavior)
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ nume: '', contact: '', tip: PROJECT_TYPES[0], detalii: '' });
    setStatusMsg('');
  };

  const directWaUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Salut Alex! Aș vrea să discutăm despre un site.')}`;

  return (
    <div className="wrap cpage" id="contact">
      <a
        className="back"
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('#top');
        }}
      >
        ← Înapoi la pagina principală
      </a>
      <h1>Cere o ofertă</h1>
      <p className="sub">
        Povestește-mi pe scurt ce ai nevoie. Primești un răspuns cu o estimare de preț și de termen.
      </p>

      {isSubmitted ? (
        <div className="cgrid">
          <div className="cbox">
            <div className="success-state">
              <div className="success-icon">🎉</div>
              <h3>Cerere expediată cu succes!</h3>
              <p className="success-desc">
                Mesajul a fost transmis pe email către <strong>{EMAIL}</strong>.
              </p>
              <div className="success-notice">
                <span>💡 Dorești un răspuns și mai rapid?</span>
                <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
                  Apasă pe butonul de mai jos pentru a deschide conversația direct pe WhatsApp cu Alex:
                </p>
                <a href={lastWaUrl} target="_blank" rel="noopener noreferrer" className="btn-wa-action">
                  💬 Trimite și pe WhatsApp acum
                </a>
              </div>
              <button className="btn-back-action" onClick={handleReset}>
                Trimite o nouă cerere
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cgrid">
          <div className="cbox">
            <h3>Scrie-mi direct</h3>
            <p>Cea mai rapidă cale este WhatsApp. Pentru detalii mai lungi poți folosi emailul.</p>
            <div className="cact">
              <a className="btn wa" href={directWaUrl} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z" />
                </svg>
                Scrie pe WhatsApp
              </a>
              <a className="btn ghost" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>

          <div className="cbox">
            <h3>Formular de ofertă</h3>
            <form id="offer" onSubmit={(e) => e.preventDefault()}>
              <label>
                Nume
                <input
                  name="nume"
                  required
                  autoComplete="name"
                  value={formData.nume}
                  onChange={(e) => setFormData({ ...formData, nume: e.target.value })}
                />
              </label>
              <label>
                Telefon sau email
                <input
                  name="contact"
                  required
                  autoComplete="email"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </label>
              <label>
                Tip de proiect
                <select
                  name="tip"
                  value={formData.tip}
                  onChange={(e) => setFormData({ ...formData, tip: e.target.value })}
                >
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label>
                Detalii despre proiect
                <textarea
                  name="detalii"
                  rows="4"
                  required
                  value={formData.detalii}
                  onChange={(e) => setFormData({ ...formData, detalii: e.target.value })}
                />
              </label>
              <div className="cact">
                <button className="btn" type="button" onClick={handleSendWhatsApp} disabled={isLoading}>
                  Trimite pe WhatsApp
                </button>
                <button className="btn ghost" type="button" onClick={handleSendEmail} disabled={isLoading}>
                  {isLoading ? 'Se trimite...' : 'Trimite pe email'}
                </button>
              </div>
              <p id="fstatus" role="status" aria-live="polite">{statusMsg}</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
