import { useLanguage } from '../App';
import { translations } from '../translations';

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="contact">
      <section className="section">
        <div className="container">
          <h1 className="section-title">{t.contact}</h1>
          <p className="text-center" style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            Get in touch with us. We're here to help your business grow.
          </p>

          <div className="contact-info">
            <div className="contact-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
              <h3>WhatsApp</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                Chat with us directly for quick responses
              </p>
              <a href="https://wa.me/250788123456" target="_blank" rel="noopener noreferrer">
                +250 788 123 456
              </a>
            </div>

            <div className="contact-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
              <h3>Email</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                Send us a detailed message
              </p>
              <a href="mailto:info@bridges.rw">
                info@bridges.rw
              </a>
            </div>

            <div className="contact-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</div>
              <h3>Instagram</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                Follow us for updates and tips
              </p>
              <a href="https://instagram.com/bridgesrwanda" target="_blank" rel="noopener noreferrer">
                @bridgesrwanda
              </a>
            </div>

            <div className="contact-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
              <h3>LinkedIn</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                Connect for professional networking
              </p>
              <a href="https://linkedin.com/company/bridges-rwanda" target="_blank" rel="noopener noreferrer">
                Bridges Rwanda
              </a>
            </div>
          </div>

          {/* Office Location */}
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Visit Our Office</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
              Kigali, Rwanda
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
              KG 11 Ave, Kigali Heights Building, 5th Floor
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Business Name (Optional)</label>
                <input type="text" placeholder="Your Business Name" />
              </div>
              <div className="form-group">
                <label>Subject *</label>
                <select required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="join">Join as SME</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea required placeholder="Tell us how we can help..." rows="6"></textarea>
              </div>
              <button type="submit" className="cta-button" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                How do I join Bridges as an SME?
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                Simply navigate to the Dashboard page and fill out your business profile. It's free 
                to create a basic listing, and you'll immediately gain visibility on our platform.
              </p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                Is there a cost to use Bridges?
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                Basic membership is completely free. We also offer premium features for SMEs looking 
                for enhanced visibility and additional support services.
              </p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                How can I apply for funding opportunities?
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                Browse our Opportunities Hub to find grants, programs, and investor connections. 
                Each listing has application details and deadlines.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                What training resources do you offer?
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                We provide free video tutorials, guides, and workshops on digital marketing, 
                social media, financial management, and trade fair preparation. Check our Resources page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
