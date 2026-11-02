import React, { useState } from 'react';

const WA_NUMBER = '40727316319';
const EMAIL = 'alxsarbu29@gmail.com';
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/alxsarbu29@gmail.com';

const methods = [
  { l: 'Email', icon: '✉️' },
  { l: 'Telefon / Phone', icon: '📞' },
  { l: 'WhatsApp', icon: '💬' },
  { l: 'Video call', icon: '📹' },
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

function ContactPage({ onNavigate, t }) {
  const cp = t.contactPage;
  const [subject, setSubject] = useState(cp.subjects[0]);
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
    if (!f.name.trim()) errs.name = 'Completează numele / Please enter your name';
    if (!f.email.trim()) {
      errs.email = 'Completează email-ul / Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(f.email)) {
      errs.email = 'Email-ul nu este valid / Invalid email address';
    }
    if (!agree) errs.agree = 'Te rog să accepți prelucrarea datelor / Please accept terms';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildWaMessage = () => {
    const lines = [
      `Salut Alex! Subiect: ${subject}`,
      `Nume / Name: ${f.name}${f.company ? ` (${f.company})` : ''}`,
      `Email: ${f.email}`,
      f.phone && `Telefon / Phone: +40 ${f.phone}`,
      picked.length && `Interes / Interest: ${picked.join(', ')}`,
      budget && `Buget / Budget: ${budget}`,
      `Contact preferat: ${method}`,
      f.details && `\nDetalii / Details: ${f.details}`,
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
          {t.nav.backToSite}
        </a>
      </div>

      {/* Header section */}
      <section className="contact-hero text-center">
        <div className="wrap">
          <p className="contact-eyebrow">{cp.eyebrow}</p>
          <h1 className="contact-title">
            {cp.title} <span className="text-gradient">{cp.titleGradient}</span>
          </h1>
          <p className="contact-subtitle">{cp.subtitle}</p>

          <div className="contact-pills">
            {cp.pills.map((p) => (
              <span key={p} className="contact-pill-item">
                <span className="pill-check">🛡️</span> {p}
              </span>
            ))}
          </div>

          <div className="contact-metrics-grid">
            {cp.metrics.map(([v, l]) => (
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
              <h3>{cp.successTitle}</h3>
              <p className="success-desc">{cp.successDesc(f.name, f.email)}</p>
              <div className="success-notice">
                <span>{cp.successFaster}</span>
                <p className="text-muted" style={{ marginBottom: '12px' }}>
                  {cp.successWaDesc}
                </p>
                <a
                  href={lastWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa-action"
                >
                  {cp.openWaNow}
                </a>
              </div>
              <button
                type="button"
                className="btn-back-action"
                onClick={handleReset}
              >
                {cp.sendAnother}
              </button>
            </div>
          ) : (
            <form className="cbox modern-form">
              {/* Subject selector */}
              <div className="form-group">
                <label className="form-label">{cp.subjectLabel}</label>
                <div className="chips-row">
                  {cp.subjects.map((s) => (
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
                  <label className="form-label">{cp.nameLabel}</label>
                  <input
                    className={`modern-input ${errors.name ? 'input-err' : ''}`}
                    placeholder={cp.namePlaceholder}
                    value={f.name}
                    onChange={(e) => setF({ ...f, name: e.target.value })}
                  />
                  {errors.name && <p className="err-msg">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    {cp.companyLabel} <span className="label-opt">{cp.optional}</span>
                  </label>
                  <input
                    className="modern-input"
                    placeholder={cp.companyPlaceholder}
                    value={f.company}
                    onChange={(e) => setF({ ...f, company: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{cp.emailLabel}</label>
                  <input
                    type="email"
                    className={`modern-input ${errors.email ? 'input-err' : ''}`}
                    placeholder={cp.emailPlaceholder}
                    value={f.email}
                    onChange={(e) => setF({ ...f, email: e.target.value })}
                  />
                  {errors.email && <p className="err-msg">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    {cp.phoneLabel} <span className="label-opt">{cp.optional}</span>
                  </label>
                  <div className="phone-prefix-wrap">
                    <span className="phone-prefix">+40</span>
                    <input
                      className="modern-input prefix-attached"
                      placeholder={cp.phonePlaceholder}
                      value={f.phone}
                      onChange={(e) => setF({ ...f, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Interests chips */}
              <div className="form-group">
                <label className="form-label">
                  {cp.interestsLabel} <span className="label-opt">{cp.multiple}</span>
                </label>
                <div className="chips-row">
                  {cp.interests.map((x) => (
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
                <label className="form-label">{cp.budgetLabel}</label>
                <div className="chips-row">
                  {cp.budgets.map((b) => (
                    <Chip
                      key={b}
                      on={budget === b}
                      onClick={() => setBudget(budget === b ? '' : b)}
                    >
                      {b}
                    </Chip>
                  ))}
                </div>
                <p className="form-help-text">{cp.budgetNotice}</p>
              </div>

              {/* Preferred contact method */}
              <div className="form-group">
                <label className="form-label">{cp.methodLabel}</label>
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
                  <label className="form-label">{cp.detailsLabel}</label>
                  <span className="char-count">{f.details.length}/2000</span>
                </div>
                <textarea
                  rows={5}
                  maxLength={2000}
                  className="modern-input"
                  placeholder={cp.detailsPlaceholder}
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
                  <span>{cp.gdpr}</span>
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
                  {isLoading ? cp.submitting : cp.submitEmail}
                </button>

                <p className="actions-divider">{cp.orDirect}</p>

                <div className="direct-actions-grid">
                  <button
                    type="button"
                    onClick={handleSendWa}
                    className="direct-btn wa"
                  >
                    {cp.writeWa}
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
          {[...cp.ticker, ...cp.ticker].map((tk, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-star">✦</span>
              {tk}
            </span>
          ))}
        </div>
      </div>

      {/* Next steps section */}
      <section className="steps-section">
        <div className="wrap">
          <p className="contact-eyebrow">{cp.stepsEyebrow}</p>
          <h2 className="section-title">
            {cp.stepsTitle} <span className="text-gradient">{cp.stepsTitleGradient}</span>
          </h2>
          <div className="next-steps-grid">
            {cp.steps.map(([st, sd], i) => (
              <div key={st} className="step-card">
                <span className="step-num">{i + 1}</span>
                <h3 className="step-title">{st}</h3>
                <p className="step-desc">{sd}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="contact-faq-section">
        <div className="wrap-narrow">
          <p className="contact-eyebrow">{cp.faqEyebrow}</p>
          <h2 className="section-title">
            {cp.faqTitle} <span className="text-gradient">{cp.faqTitleGradient}</span>
          </h2>
          <div className="contact-faqs">
            {cp.faqs.map(([q, a], i) => (
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
