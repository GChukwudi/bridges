import { useState } from 'react';
import { useLanguage } from '../App';
import { translations } from '../translations';

function VendorSignup() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    whatsapp: '',
    category: 'fashion',
    description: '',
    instagram: '',
    website: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send to backend/database
    alert('Application submitted! We will review and contact you soon.');
    console.log('Form data:', formData);
  };

  return (
    <div className="vendor-signup">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Join as an SME Vendor</h1>
          <p className="text-center" style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Register your business to get online visibility, access to trade fairs, funding opportunities, and training programs.
          </p>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
              
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Business Information</h3>
              
              <div className="form-group">
                <label>Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Elegant Threads"
                />
              </div>

              <div className="form-group">
                <label>Owner/Manager Name *</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+250 XXX XXX XXX"
                />
              </div>

              <div className="form-group">
                <label>WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+250 XXX XXX XXX (if different from phone)"
                />
              </div>

              <div className="form-group">
                <label>Business Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="fashion">Fashion</option>
                  <option value="decor">Décor & Home Goods</option>
                  <option value="rental">Rental Services</option>
                  <option value="food">Food & Catering</option>
                  <option value="beauty">Beauty & Wellness</option>
                  <option value="new">New Business</option>
                  <option value="made-in-rwanda">Made in Rwanda</option>
                </select>
              </div>

              <div className="form-group">
                <label>Business Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="City/District, Rwanda"
                />
              </div>

              <div className="form-group">
                <label>Business Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your business, products, and services..."
                  rows="5"
                />
              </div>

              <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Social Media (Optional)</h3>

              <div className="form-group">
                <label>Instagram Handle</label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@yourbusiness"
                />
              </div>

              <div className="form-group">
                <label>Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="www.yourbusiness.com"
                />
              </div>

              <button type="submit" className="cta-button" style={{ width: '100%', marginTop: '1rem' }}>
                Submit Application
              </button>

              <p style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                * Required fields. We'll review your application and contact you within 2-3 business days.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
    </div>
  );
}

export default VendorSignup;
