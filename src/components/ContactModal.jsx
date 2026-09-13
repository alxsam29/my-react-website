import React, { useState, useEffect } from 'react';

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'Site de Prezentare / Landing Page',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Generează link-ul WhatsApp cu mesajul formatat
  const buildWhatsAppUrl = () => {
    const waText = 
      `Salut Alex!\n\n` +
      `Numele meu este ${formData.name || 'un vizitator'}.\n` +
      `📌 Tip proiect: ${formData.projectType}\n` +
      `📞 Contactul meu: ${formData.contact || 'Nespecificat'}\n` +
      (formData.details ? `📝 Detalii: ${formData.details}\n` : '') +
      `\nAș dori o estimare de preț și mai multe detalii. Mulțumesc!`;
    return `https://wa.me/40727316319?text=${encodeURIComponent(waText)}`;
  };

  // Trimitere prin formular (Email + pregătire WhatsApp)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    setIsLoading(true);
    const waUrl = buildWhatsAppUrl();
    setLastWaUrl(waUrl);

    try {
      await fetch("https://formsubmit.co/ajax/alxsarbu29@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nume: formData.name,
          Contact: formData.contact,
          Tip_Proiect: formData.projectType,
          Detalii: formData.details || "Nespecificat",
          _subject: `Nouă cerere de ofertă: ${formData.projectType} de la ${formData.name}`
        })
      });
    } catch (err) {
      console.warn("Eroare la trimiterea automată pe email, se poate continua pe WhatsApp:", err);
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        contact: '',
        projectType: 'Site de Prezentare / Landing Page',
        details: ''
      });
    }
  };

  // Trimitere instantă directă pe WhatsApp
  const handleDirectWhatsApp = () => {
    if (!formData.name) {
      alert("Te rog să introduci cel puțin numele tău.");
      return;
    }
    const url = buildWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Închide fereastra modală"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="modal-success-state">
            <div className="success-icon">🎉</div>
            <h3 id="modal-title">Cerere expediată cu succes!</h3>
            <p>
              Mesajul a fost transmis pe email către <strong>alxsarbu29@gmail.com</strong>.
            </p>
            
            <div className="success-notice-box">
              <span>💡 Dorești un răspuns și mai rapid?</span>
              <p>Apasă pe butonul de mai jos pentru a deschide conversația direct pe WhatsApp cu Alex:</p>
              <a 
                href={lastWaUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp-action"
              >
                <span>💬</span> Trimite și pe WhatsApp acum
              </a>
            </div>

            <button className="btn-secondary" onClick={onClose} style={{ marginTop: '1.25rem' }}>
              Am înțeles, închide
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-header">
              <span className="modal-tag">Estimare Gratuită</span>
              <h3 id="modal-title">Cere o Ofertă de Preț</h3>
              <p>Completează formularul pentru a primi o ofertă pe email sau trimite-mi detaliile direct pe WhatsApp.</p>
            </div>

            <div className="form-group">
              <label htmlFor="inquiry-name">Numele tău *</label>
              <input
                id="inquiry-name"
                type="text"
                required
                placeholder="ex. Andrei Popa"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="inquiry-contact">Număr WhatsApp sau Adresă Email *</label>
              <input
                id="inquiry-contact"
                type="text"
                required
                placeholder="ex. 07xxxxxxxx sau email@exemplu.com"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="inquiry-type">Tipul proiectului dorit</label>
              <select
                id="inquiry-type"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              >
                <option value="Site de Prezentare / Landing Page">Site de Prezentare / Landing Page</option>
                <option value="Platformă Web Interactivă (stil FolioTech)">Platformă Web Interactivă (stil FolioTech)</option>
                <option value="Magazin Online / E-Commerce">Magazin Online / E-Commerce</option>
                <option value="Redesign & Modernizare Site Existent">Redesign & Modernizare Site Existent</option>
                <option value="Altceva / Consultanță Web">Altceva / Consultanță Tehnică</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="inquiry-details">Câteva detalii despre proiect (opțional)</label>
              <textarea
                id="inquiry-details"
                rows="3"
                placeholder="Ce funcționalități ai nevoie? Ai deja un domeniu sau logo?"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              ></textarea>
            </div>

            <div className="modal-actions-dual">
              <button 
                type="button" 
                className="btn-whatsapp-direct"
                onClick={handleDirectWhatsApp}
                title="Deschide direct în WhatsApp"
              >
                <span>💬</span> Trimite pe WhatsApp
              </button>

              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isLoading}
              >
                {isLoading ? 'Se trimite...' : 'Trimite pe Email ✉️'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
