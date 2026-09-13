import React, { useState, useEffect } from 'react';

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Închidere la apăsarea tastei Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Previne derularea paginii din fundal când modalul este deschis
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
    if (!formData.name || !formData.email) return;

    setIsLoading(true);
    // Simulare trimitere asincronă rapidă
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
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
            <h3 id="modal-title">Mesaj trimis cu succes!</h3>
            <p>Îți mulțumim pentru interes. Te vom contacta în cel mai scurt timp posibil.</p>
            <button className="btn-primary" onClick={onClose}>
              Închide
            </button>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-header">
              <span className="modal-tag">Interactiv</span>
              <h3 id="modal-title">Intră în legătură cu noi</h3>
              <p>Trimite-ne un mesaj sau solicită acces la versiunea demo completă.</p>
            </div>

            <div className="form-group">
              <label htmlFor="modal-name">Nume complet</label>
              <input
                id="modal-name"
                type="text"
                required
                placeholder="ex. Alex Popescu"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-email">Adresă de email</label>
              <input
                id="modal-email"
                type="email"
                required
                placeholder="alex@exemplu.ro"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-message">Mesaj sau întrebare (opțional)</label>
              <textarea
                id="modal-message"
                rows="3"
                placeholder="Cum te putem ajuta astăzi?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                {isLoading ? 'Se trimite...' : 'Trimite mesajul 🚀'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
