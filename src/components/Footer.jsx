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
            <p>Empowering Rwandan SMEs through digital and physical market presence</p>
          </div>

          <div className="footer-section">
            <h3>{t.quickLinks}</h3>
            <ul>
              <li><Link to="/">{t.home}</Link></li>
              <li><Link to="/about">{t.about}</Link></li>
              <li><Link to="/marketplace">{t.joinSME}</Link></li>
              <li><Link to="/opportunities">{t.opportunities}</Link></li>
              <li><Link to="/tradefair">{t.tradeFair}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t.followUs}</h3>
            <ul>
              <li><a href="https://www.instagram.com/bri.dges_" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/briidges" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.tiktok.com/@bri_dges" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="mailto:bridgesbysi@gmail.com">Email</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t.contact}</h3>
            <p>Kigali, Rwanda</p>
            <p><a href="mailto:bridgesbysi@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>bridgesbysi@gmail.com</a></p>
            <p style={{ marginTop: '1rem' }}>
              <a href="https://www.instagram.com/bri.dges_" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>@bri.dges_</a>
            </p>
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
