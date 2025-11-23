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
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img 
            src="images/logo.png" 
            alt="Bridges Logo" 
            style={{ height: '50px', width: 'auto' }}
          />
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
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                background: 'var(--white)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: 'var(--text-dark)'
              }}
            >
              <option value="en">English</option>
              <option value="rw">Kinyarwanda</option>
              <option value="fr">Français</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
