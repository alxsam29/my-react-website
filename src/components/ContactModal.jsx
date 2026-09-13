import React, { useState, useEffect } from 'react';

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'Site de Prezentare / Landing Page',
    budget: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        contact: '',
        projectType: 'Site de Prezentare / Landing Page',
        budget: '',
        details: ''
      });
    }, 650);
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
            <h3 id="modal-title">Cerere trimisă cu succes!</h3>
            <p>
              Îți mulțumesc pentru mesaj! Voi analiza cerințele proiectului tău și te voi contacta în cel mai scurt timp (de obicei în mai puțin de 24 de ore).
            </p>
            <button className="btn-primary" onClick={onClose}>
              Super, mulțumesc!
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-header">
              <span className="modal-tag">Estimare Gratuită</span>
              <h3 id="modal-title">Hai să Discutăm Despre Proiectul Tău</h3>
              <p>Lasă-mi câteva detalii și hai să stabilim cea mai bună soluție tehnică.</p>
            </div>

            <div className="form-group">
              <label htmlFor="inquiry-name">Numele tău</label>
              <input
                id="inquiry-name"
                type="text"
                required
                placeholder="ex. Alex Popescu"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="inquiry-contact">Email sau Număr WhatsApp</label>
              <input
                id="inquiry-contact"
                type="text"
                required
                placeholder="ex. alex@email.com sau 07xxxxxxxx"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="inquiry-type">Tipul proiectului</label>
              <select
                id="inquiry-type"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              >
                <option value="Site de Prezentare / Landing Page">Site de Prezentare / Landing Page</option>
                <option value="Aplicație Web / Platformă Interactivă">Aplicație Web / Platformă Interactivă (stil FolioTech)</option>
                <option value="Magazin Online / E-Commerce">Magazin Online / E-Commerce</option>
                <option value="Redesign / Modernizare Site Existent">Redesign / Modernizare Site Existent</option>
                <option value="Altceva / Consultanță">Altceva / Consultanță Tehnică</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="inquiry-details">Scurtă descriere a proiectului</label>
              <textarea
                id="inquiry-details"
                rows="3"
                placeholder="Spune-mi pe scurt despre afacerea ta și ce dorești să realizezi..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              ></textarea>
            </div>

            <div className="modal-actions">
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={onClose}
              >
                Anulează
              </button>
              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isLoading}
              >
                {isLoading ? 'Se trimite...' : 'Trimite Cererea 🚀'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
