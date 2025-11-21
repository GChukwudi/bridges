import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { translations } from '../translations';

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bridges</h3>
            <p>Empowering SMEs to reach markets beyond borders</p>
          </div>

          <div className="footer-section">
            <h3>{t.quickLinks}</h3>
            <ul>
              <li><Link to="/">{t.home}</Link></li>
              <li><Link to="/sme-directory">{t.joinSME}</Link></li>
              <li><Link to="/opportunities">{t.opportunities}</Link></li>
              <li><Link to="/about">{t.about}</Link></li>
              <li><Link to="/contact">{t.contact}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t.followUs}</h3>
            <ul>
              <li><a href="#whatsapp">WhatsApp</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="mailto:info@bridges.rw">Email</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t.contact}</h3>
            <p>Kigali, Rwanda</p>
            <p>info@bridges.rw</p>
            <p>+250 XXX XXX XXX</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Bridges. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
