import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa'
import './CustomFooter.css'

function CustomFooter({ onOpenContactModal }) {
  return (
    <footer className="custom-footer">
      <div className="footer-overlay"></div>

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-brand-link">
              Chimi Party<span className="footer-registered">®</span>
            </a>
          </div>

          <div className="footer-center">
            <button
              type="button"
              className="footer-contact-button"
              onClick={onOpenContactModal}
            >
              Contatti
            </button>
          </div>

          <div className="footer-socials">
            <a href="https://www.instagram.com/chimiparty_balloons?igsh=aDBybjlmd3ptemtm" aria-label="Instagram" className="footer-social-link">
              <FaInstagram />
            </a>
            <a href="#" aria-label="TikTok" className="footer-social-link">
              <FaTiktok />
            </a>
            <a href="#" aria-label="Facebook" className="footer-social-link">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="/privacy-policy" className="footer-policy-link">
            Privacy Policy
          </a>
          <a href="/cookie-policy" className="footer-policy-link">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default CustomFooter