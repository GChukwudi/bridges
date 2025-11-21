import { useState } from 'react';
import { useLanguage } from '../App';
import { translations } from '../translations';

function Dashboard() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [profile, setProfile] = useState({
    businessName: '',
    category: 'fashion',
    description: '',
    phone: '',
    whatsapp: '',
    instagram: '',
    website: ''
  });

  const [readinessScore, setReadinessScore] = useState(65);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert('Profile saved successfully!');
    // Calculate new readiness score based on completed fields
    const filledFields = Object.values(profile).filter(val => val !== '').length;
    const newScore = Math.min(100, (filledFields / Object.keys(profile).length) * 100);
    setReadinessScore(Math.round(newScore));
  };

  const savedOpportunities = [
    {
      id: 1,
      title: "Rwanda Innovation Fund",
      type: "Grant",
      deadline: "Dec 31, 2024"
    },
    {
      id: 2,
      title: "Digital Marketing Bootcamp",
      type: "Training",
      deadline: "Rolling"
    },
    {
      id: 3,
      title: "Women in Business Accelerator",
      type: "Investment",
      deadline: "Jan 20, 2025"
    }
  ];

  const recommendations = [
    {
      id: 1,
      title: "Complete your business profile",
      description: "Add photos and detailed description to increase visibility",
      action: "Update Profile"
    },
    {
      id: 2,
      title: "Learn Instagram Reels",
      description: "Video content can increase engagement by 300%",
      action: "Start Learning"
    },
    {
      id: 3,
      title: "Apply for EAC Grant",
      description: "Based on your category, you're eligible for regional expansion funding",
      action: "View Opportunity"
    }
  ];

  return (
    <div className="dashboard">
      <section className="section">
        <div className="container">
          <h1 className="section-title">{t.dashboard}</h1>
          
          <div className="dashboard-grid">
            {/* Edit Profile */}
            <div className="dashboard-card" style={{ gridColumn: 'span 2' }}>
              <h3>Edit Your Profile</h3>
              <form onSubmit={handleSaveProfile}>
                <div className="form-group">
                  <label>Business Name *</label>
                  <input
                    type="text"
                    name="businessName"
                    value={profile.businessName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Category *</label>
                  <select
                    name="category"
                    value={profile.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="fashion">Fashion</option>
                    <option value="decor">Decor & Home Goods</option>
                    <option value="rental">Rental Services</option>
                    <option value="food">Food & Services</option>
                    <option value="beauty">Beauty & Wellness</option>
                    <option value="new">New Business</option>
                    <option value="made-in-rwanda">Made in Rwanda</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Business Description *</label>
                  <textarea
                    name="description"
                    value={profile.description}
                    onChange={handleInputChange}
                    placeholder="Tell customers about your business..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    placeholder="+250 XXX XXX XXX"
                  />
                </div>

                <div className="form-group">
                  <label>WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={profile.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+250 XXX XXX XXX"
                  />
                </div>

                <div className="form-group">
                  <label>Instagram Handle</label>
                  <input
                    type="text"
                    name="instagram"
                    value={profile.instagram}
                    onChange={handleInputChange}
                    placeholder="@yourbusiness"
                  />
                </div>

                <div className="form-group">
                  <label>Website</label>
                  <input
                    type="url"
                    name="website"
                    value={profile.website}
                    onChange={handleInputChange}
                    placeholder="www.yourbusiness.com"
                  />
                </div>

                <button type="submit" className="cta-button" style={{ width: '100%' }}>
                  Save Profile
                </button>
              </form>
            </div>

            {/* Digital Readiness Score */}
            <div className="dashboard-card">
              <h3>Digital Readiness Score</h3>
              <div className="readiness-score">
                <div className="score-circle">
                  {readinessScore}%
                </div>
                <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>
                  Your business is {readinessScore >= 80 ? 'highly' : readinessScore >= 60 ? 'moderately' : 'developing'} ready for digital markets
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>What affects your score:</h4>
                  <ul style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                    <li>✓ Complete profile information</li>
                    <li>✓ Active social media presence</li>
                    <li>✓ Product photos and gallery</li>
                    <li>✓ Customer contact options</li>
                    <li>✓ Training completion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Saved Opportunities */}
            <div className="dashboard-card">
              <h3>Saved Opportunities</h3>
              {savedOpportunities.map(opp => (
                <div key={opp.id} className="opportunity-item">
                  <h4>{opp.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    <span>{opp.type}</span>
                    <span>{opp.deadline}</span>
                  </div>
                </div>
              ))}
              <button className="cta-button" style={{ width: '100%', marginTop: '1rem' }}>
                View All Opportunities
              </button>
            </div>

            {/* Recommendations */}
            <div className="dashboard-card" style={{ gridColumn: 'span 2' }}>
              <h3>Personalized Recommendations</h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {recommendations.map(rec => (
                  <div key={rec.id} style={{ 
                    padding: '1rem', 
                    background: 'var(--bg-light)', 
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{rec.title}</h4>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{rec.description}</p>
                    </div>
                    <button className="contact-btn" style={{ whiteSpace: 'nowrap' }}>
                      {rec.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
