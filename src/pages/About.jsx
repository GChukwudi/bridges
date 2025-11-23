import { useLanguage } from '../App';
import { translations } from '../translations';

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="about">
      <section className="section">
        <div className="container">
          <h1 className="section-title">{t.aboutTitle}</h1>
          
          <div className="about-content">
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                {t.mission}
              </h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
                To empower Rwandan SMEs to drive economic development by leveraging social media, 
                e-commerce platforms, and trade fairs for strong physical and digital market presence.
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                {t.vision}
              </h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
                To become Africa's leading digital-physical growth partner for SMEs, enabling 
                entrepreneurs to thrive through accessible technology, enhanced visibility, and 
                inclusive opportunities.
              </p>
            </div>

            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-color)', textAlign: 'center' }}>
              Our {t.values}
            </h2>
            <div className="values-grid">
              <div className="value-card">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                <h3>Simplicity</h3>
                <p>We make digital tools and opportunities accessible to SMEs of all tech skill levels.</p>
              </div>
              <div className="value-card">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
                <h3>Accessibility</h3>
                <p>Every business, regardless of size or location, deserves equal access to markets and resources.</p>
              </div>
              <div className="value-card">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💪</div>
                <h3>Empowerment</h3>
                <p>We equip entrepreneurs with the knowledge and tools to take control of their business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="about-content">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              Bridges was founded with a mission to transform how Rwandan SMEs access markets and 
              grow their businesses. We recognized that talented entrepreneurs across the country 
              were creating amazing products and services but struggling to reach customers beyond 
              their immediate communities.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              Traditional barriers like lack of digital presence, limited marketing knowledge, and 
              difficulty accessing funding were preventing these businesses from scaling. Meanwhile, 
              customers across Rwanda and beyond were eager to discover and support local SMEs but 
              had no easy way to find them.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Today, Bridges provides SMEs with the visibility, training, and opportunities they need 
              through our e-commerce marketplace, trade fair events, funding connections, and social 
              media training programs. We're building a thriving ecosystem where every Rwandan 
              entrepreneur can succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="opportunities-grid">
            <div className="opportunity-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                500+
              </div>
              <h3>SMEs Registered</h3>
              <p>Businesses using our platform to grow</p>
            </div>
            <div className="opportunity-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                $2M+
              </div>
              <h3>Funding Connected</h3>
              <p>In grants and investments facilitated</p>
            </div>
            <div className="opportunity-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                1,200+
              </div>
              <h3>Training Participants</h3>
              <p>SMEs trained in digital skills</p>
            </div>
            <div className="opportunity-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                85%
              </div>
              <h3>Growth Rate</h3>
              <p>Average sales increase after 6 months</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
