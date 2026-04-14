import { useEffect } from 'react'
import './ContactModal.css'

function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Chiudi finestra contatti"
        >
          ×
        </button>

        <h2 className="contact-modal-title">Contatti</h2>
        <p className="contact-modal-subtitle">
          Scegli il numero da chiamare
        </p>

        <div className="contact-modal-list">
          <a className="contact-modal-item" href="tel:+393207704765">
            <span className="contact-name">Chiara</span>
            <span className="contact-number">+39 320 770 4765</span>
          </a>

          <a className="contact-modal-item" href="tel:+393393770837">
            <span className="contact-name">Michela</span>
            <span className="contact-number">+39 339 377 0837</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactModal