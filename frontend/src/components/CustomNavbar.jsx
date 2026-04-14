import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import './CustomNavbar.css'

function CustomNavbar({ onOpenContactModal }) {
  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef(null)

  const whatsappNumber = '393000000000'
  const whatsappMessage = 'Ciao, vorrei ricevere maggiori informazioni.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const brandLogo = null

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleOpenContacts = () => {
    closeMenu()
    onOpenContactModal()
  }

  return (
    <div className={`floating-navbar-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="floating-navbar" ref={navbarRef}>
        <div className="navbar-top-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="navbar-icon-button"
            aria-label="Apri WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="#home"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="Vai alla home"
          >
            {brandLogo ? (
              <img src={brandLogo} alt="Brand logo" className="navbar-brand-image" />
            ) : (
              <span className="navbar-brand-placeholder">LOGO</span>
            )}
          </a>

          <button
            type="button"
            className="navbar-icon-button"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </button>
        </div>

        <div className={`navbar-dropdown ${isOpen ? 'show' : ''}`}>
          <div className="navbar-dropdown-content">
            <nav className="navbar-menu">
              <a href="#home" onClick={closeMenu}>Home</a>
              <a href="#servizi" onClick={closeMenu}>Servizi</a>
              <a href="#su-di-noi" onClick={closeMenu}>Su di noi</a>
              <button
                type="button"
                className="navbar-contact-trigger"
                onClick={handleOpenContacts}
              >
                Contatti
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomNavbar