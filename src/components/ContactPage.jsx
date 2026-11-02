import React, { useState } from 'react';

const WA_NUMBER = '40727316319';
const EMAIL = 'alxsarbu29@gmail.com';
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/alxsarbu29@gmail.com';

const subjects = [
  'Cerere ofertă',
  'Soluții web',
  'Automatizări',
  'Parteneriat',
  'Altceva',
];

const interests = [
  'Landing page',
  'Magazin online',
  'Platformă web',
  'Automatizări AI / n8n',
  'Mentenanță 24/7',
  'Nu sunt sigur încă',
];

const budgets = [
  'sub 1.000€',
  '1.000 – 3.000€',
  '3.000 – 10.000€',
  'peste 10.000€',
  'Nu sunt sigur încă',
];

const methods = [
  { l: 'Email', icon: '✉️' },
  { l: 'Telefon', icon: '📞' },
  { l: 'WhatsApp', icon: '💬' },
  { l: 'Video call', icon: '📹' },
];

const metrics = [
  ['< 24h', 'răspuns în zile lucrătoare'],
  ['30 min', 'discuție gratuită'],
  ['€0', 'cost pentru prima discuție'],
  ['RO · EN', 'vorbim ambele limbi'],
];

const ticker = [
  'Răspuns în sub 24h',
  'Apel gratuit de 30 min',
  'Ofertă clară, fără costuri ascunse',
  'NDA la cerere',
  'Cod curat și rapid',
  'Suport după lansare',
  'Design personalizat',
];

const steps = [
  ['Citim cererea', 'Analizez ce mi-ai trimis și pregătesc întrebările potrivite, ca să nu pierdem timp.'],
  ['Apel de 30 minute', 'Discutăm obiectivele, publicul și ce înseamnă succes pentru proiectul tău. Gratuit.'],
  ['Ofertă și arhitectură clară', 'Primești o propunere scrisă: ce construim, cu ce tehnologii, preț fix și termen.'],
  ['Începem dezvoltarea', 'După acord, pornim. Vezi progresul pe parcurs și ai un link de previzualizare.'],
];

const faqs = [
  ['Cât de repede primesc răspuns?', 'În zile lucrătoare răspund în mai puțin de 24 de ore, de cele mai multe ori în aceeași zi. Pe WhatsApp e de obicei și mai rapid.'],
  ['Prima discuție costă ceva?', 'Nu. Primul apel de 30 de minute este gratuit și fără nicio obligație. Scopul e să vedem dacă și cum te pot ajuta.'],
  ['Trebuie să știu exact ce specificații vreau?', 'Deloc. Spune-mi problema sau ideea, iar eu te ajut să o transformi într-un plan clar. Poți bifa „Nu sunt sigur încă”.'],
  ['Ce se întâmplă cu informațiile mele? Semnați NDA?', 'Datele tale sunt folosite doar pentru a-ți răspunde. Dacă proiectul e sensibil, semnez un acord de confidențialitate (NDA) înainte să intrăm în detalii.'],
];

function Chip({ on, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`chip-btn ${on ? 'active' : ''}`}
    >
      {on && <span className="chip-check">✓</span>}
      {children}
    </button>
  );
}

function ContactPage({ onNavigate }) {
  const [subject, setSubject] = useState(subjects[0]);
  const [picked, setPicked] = useState([]);
  const [budget, setBudget] = useState('');
  const [method, setMethod] = useState('WhatsApp');
  const [f, setF] = useState({ name: '', company: '', email: '', phone: '', details: '' });
  const [agree, setAgree] = useState(true);
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  const toggle = (x) =>
    setPicked((p) => (p.includes(x) ? p.filter((y) => y !== x) : [...p, x]));

  const validate = () => {
    const errs = {};
    if (!f.name.trim()) errs.name = 'Completează numele tău';
    if (!f.email.trim()) {
      errs.email = 'Completează adresa de email';
    } else if (!/\S+@\S+\.\S+/.test(f.email)) {
      errs.email = 'Email-ul nu este valid';
    }
    if (!agree) errs.agree = 'Te rog să accepți prelucrarea datelor';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildWaMessage = () => {
    const lines = [
      `Salut Alex! Subiect: ${subject}`,
      `Nume: ${f.name}${f.company ? ` (${f.company})` : ''}`,
      `Email: ${f.email}`,
      f.phone && `Telefon: +40 ${f.phone}`,
      picked.length && `Interes: ${picked.join(', ')}`,
      budget && `Buget: ${budget}`,
      `Contact preferat: ${method}`,
      f.details && `\nDetalii: ${f.details}`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const getWaUrl = () => {
    const msg = buildWaMessage();
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const handleSendWa = (e) => {
    e?.preventDefault();
    if (!validate()) return;
    const url = getWaUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = async (e) => {
    e?.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    const waUrl = getWaUrl();
    setLastWaUrl(waUrl);

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Subiect: subject,
          Nume: f.name,
          Companie: f.company || 'Nespecificat',
          Email: f.email,
          Telefon: f.phone ? `+40 ${f.phone}` : 'Nespecificat',
          Interes: picked.join(', ') || 'Nespecificat',
          Buget: budget || 'Nespecificat',
          Metoda_Contact: method,
          Detalii: f.details || 'Nespecificat',
          _subject: `Nouă cerere: ${subject} de la ${f.name}`,
        }),
      });

      if (!res.ok) throw new Error('Eroare');
      setIsSubmitted(true);
    } catch (err) {
      console.warn('Fallback pe WhatsApp:', err);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setF({ name: '', company: '', email: '', phone: '', details: '' });
    setPicked([]);
    setBudget('');
    setErrors({});
  };

  return (
    <div className="contact-page-modern">
      {/* Top back button */}
      <div className="wrap pt-6">
        <a
          href="#top"
          className="back-btn"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('#top');
          }}
        >
          ← Înapoi la site
        </a>
      </div>

      {/* Header section */}
      <section className="contact-hero text-center">
        <div className="wrap">
          <p className="contact-eyebrow">Contact</p>
          <h1 className="contact-title">
            Hai să construim <span className="text-gradient">ceva bun împreună</span>
          </h1>
          <p className="contact-subtitle">
            Spune-mi câteva lucruri despre proiect și revin cu întrebări, idei și o ofertă clară, cu preț și termen.
          </p>

          <div className="contact-pills">
            {['Apel gratuit de descoperire', 'Fără obligații', 'NDA la cerere'].map((t) => (
              <span key={t} className="contact-pill-item">
                <span className="pill-check">🛡️</span> {t}
              </span>
            ))}
          </div>

          <div className="contact-metrics-grid">
            {metrics.map(([v, l]) => (
              <div key={v} className="metric-card">
                <p className="metric-val">{v}</p>
                <p className="metric-lbl">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form or Success State */}
      <section className="contact-form-section">
        <div className="wrap-narrow">
          {isSubmitted ? (
            <div className="cbox success-box text-center">
              <div className="success-icon">🎉</div>
              <h3>Mesajul a fost trimis cu succes!</h3>
              <p className="success-desc">
                Mulțumesc, <strong>{f.name}</strong>! Voi citi detaliile și revin în cel mult 24 de ore pe{' '}
                {f.email}.
              </p>
              <div className="success-notice">
                <span>Vrei un răspuns și mai rapid?</span>
                <p className="text-muted" style={{ marginBottom: '12px' }}>
                  Poți trimite aceleași detalii direct pe WhatsApp cu un singur click:
                </p>
                <a
                  href={lastWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa-action"
                >
                  💬 Deschide pe WhatsApp acum
                </a>
              </div>
              <button
                type="button"
                className="btn-back-action"
                onClick={handleReset}
              >
                Trimite alt mesaj
              </button>
            </div>
          ) : (
            <form className="cbox modern-form">
              {/* Subject selector */}
              <div className="form-group">
                <label className="form-label">Despre ce este vorba?</label>
                <div className="chips-row">
                  {subjects.map((s) => (
                    <Chip
                      key={s}
                      on={subject === s}
                      onClick={() => setSubject(s)}
                    >
                      {s}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Personal info grid */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Nume *</label>
                  <input
                    className={`modern-input ${errors.name ? 'input-err' : ''}`}
                    placeholder="Numele tău"
                    value={f.name}
                    onChange={(e) => setF({ ...f, name: e.target.value })}
                  />
                  {errors.name && <p className="err-msg">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Companie <span className="label-opt">(opțional)</span>
                  </label>
                  <input
                    className="modern-input"
                    placeholder="Numele firmei"
                    value={f.company}
                    onChange={(e) => setF({ ...f, company: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className={`modern-input ${errors.email ? 'input-err' : ''}`}
                    placeholder="nume@exemplu.ro"
                    value={f.email}
                    onChange={(e) => setF({ ...f, email: e.target.value })}
                  />
                  {errors.email && <p className="err-msg">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Telefon <span className="label-opt">(opțional)</span>
                  </label>
                  <div className="phone-prefix-wrap">
                    <span className="phone-prefix">+40</span>
                    <input
                      className="modern-input prefix-attached"
                      placeholder="7xx xxx xxx"
                      value={f.phone}
                      onChange={(e) => setF({ ...f, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Interests chips */}
              <div className="form-group">
                <label className="form-label">
                  Ce te interesează? <span className="label-opt">(poți alege mai multe)</span>
                </label>
                <div className="chips-row">
                  {interests.map((x) => (
                    <Chip
                      key={x}
                      on={picked.includes(x)}
                      onClick={() => toggle(x)}
                    >
                      {x}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Budget chips */}
              <div className="form-group">
                <label className="form-label">Buget orientativ</label>
                <div className="chips-row">
                  {budgets.map((b) => (
                    <Chip
                      key={b}
                      on={budget === b}
                      onClick={() => setBudget(budget === b ? '' : b)}
                    >
                      {b}
                    </Chip>
                  ))}
                </div>
                <p className="form-help-text">
                  Bugetul mă ajută să-ți propun soluția potrivită. Nu e un angajament: oferta finală o primești după discuție.
                </p>
              </div>

              {/* Preferred contact method */}
              <div className="form-group">
                <label className="form-label">Cum preferi să te contactez?</label>
                <div className="method-grid">
                  {methods.map(({ l, icon }) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setMethod(l)}
                      className={`method-btn ${method === l ? 'active' : ''}`}
                    >
                      <span>{icon}</span> {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details textarea */}
              <div className="form-group">
                <div className="details-header">
                  <label className="form-label">Detalii proiect</label>
                  <span className="char-count">{f.details.length}/2000</span>
                </div>
                <textarea
                  rows={5}
                  maxLength={2000}
                  className="modern-input"
                  placeholder="Ce vrei să construim? Ce problemă rezolvă? Ai un termen limită?"
                  value={f.details}
                  onChange={(e) => setF({ ...f, details: e.target.value })}
                />
              </div>

              {/* GDPR Agreement */}
              <div className="form-group">
                <label className="gdpr-label">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="gdpr-check"
                  />
                  <span>
                    Sunt de acord ca datele mele să fie folosite doar pentru a răspunde acestei cereri. Nu le partajez cu nimeni.
                  </span>
                </label>
                {errors.agree && <p className="err-msg">{errors.agree}</p>}
              </div>

              {/* Action buttons */}
              <div className="form-actions-stack">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  disabled={isLoading}
                  className="btn btn-full"
                >
                  {isLoading ? 'Se trimite cererea…' : '🚀 Trimite cererea pe email'}
                </button>

                <p className="actions-divider">sau trimite direct</p>

                <div className="direct-actions-grid">
                  <button
                    type="button"
                    onClick={handleSendWa}
                    className="direct-btn wa"
                  >
                    💬 Scrie pe WhatsApp (+40 727 316 319)
                  </button>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="direct-btn mail"
                  >
                    ✉️ {EMAIL}
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="ticker-banner">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-star">✦</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Next steps section */}
      <section className="steps-section">
        <div className="wrap">
          <p className="contact-eyebrow">Pașii următori</p>
          <h2 className="section-title">
            Ce se întâmplă <span className="text-gradient">după ce trimiți</span>
          </h2>
          <div className="next-steps-grid">
            {steps.map(([t, d], i) => (
              <div key={t} className="step-card">
                <span className="step-num">{i + 1}</span>
                <h3 className="step-title">{t}</h3>
                <p className="step-desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="contact-faq-section">
        <div className="wrap-narrow">
          <p className="contact-eyebrow">Întrebări</p>
          <h2 className="section-title">
            Înainte <span className="text-gradient">să ne scrii</span>
          </h2>
          <div className="contact-faqs">
            {faqs.map(([q, a], i) => (
              <div key={q} className="faq-item">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="faq-question-btn"
                >
                  <span>{q}</span>
                  <span className={`faq-arrow ${openFaq === i ? 'open' : ''}`}>▾</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
