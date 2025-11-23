import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../App';
import { translations } from '../translations';

function Header() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          Bridges
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>{t.home}</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>{t.about}</Link></li>
          <li><Link to="/marketplace" onClick={() => setMobileMenuOpen(false)}>{t.joinSME}</Link></li>
          <li><Link to="/tradefair" onClick={() => setMobileMenuOpen(false)}>{t.tradeFair}</Link></li>
          <li><Link to="/opportunities" onClick={() => setMobileMenuOpen(false)}>{t.opportunities}</Link></li>
          <li><Link to="/resources" onClick={() => setMobileMenuOpen(false)}>{t.resources}</Link></li>
          
          <li className="language-toggle">
            <button 
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button 
              className={language === 'rw' ? 'active' : ''}
              onClick={() => setLanguage('rw')}
            >
              RW
            </button>
            <button 
              className={language === 'fr' ? 'active' : ''}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
