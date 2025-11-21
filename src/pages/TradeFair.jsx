import { useLanguage } from '../App';
import { translations } from '../translations';

function TradeFair() {
  const { language } = useLanguage();
  const t = translations[language];

  const upcomingEvents = [
    {
      id: 1,
      name: "Rwanda Made Expo 2025",
      date: "March 15-17, 2025",
      venue: "Kigali Convention Centre",
      description: "Showcase of locally made products across all industries",
      vendors: 150,
      status: "Registration Open"
    },
    {
      id: 2,
      name: "East Africa Fashion Week",
      date: "April 5-7, 2025",
      venue: "Intare Conference Arena",
      description: "Fashion designers and textile businesses from across the region",
      vendors: 80,
      status: "Registration Open"
    },
    {
      id: 3,
      name: "Food & Hospitality Expo",
      date: "May 20-22, 2025",
      venue: "Kigali Convention Centre",
      description: "Restaurants, caterers, food producers, and hospitality services",
      vendors: 120,
      status: "Coming Soon"
    }
  ];

  const vendors = [
    {
      id: 1,
      name: "Elegant Threads",
      category: "Fashion",
      booth: "A-12",
      description: "Contemporary African fashion"
    },
    {
      id: 2,
      name: "Imizi Crafts",
      category: "Decor",
      booth: "B-08",
      description: "Handmade home decor"
    },
    {
      id: 3,
      name: "Mama's Kitchen",
      category: "Food",
      booth: "C-15",
      description: "Authentic Rwandan cuisine"
    },
    {
      id: 4,
      name: "Glow Beauty Studio",
      category: "Beauty",
      booth: "A-24",
      description: "Natural beauty products"
    },
    {
      id: 5,
      name: "Tech Innovations Rwanda",
      category: "Technology",
      booth: "D-05",
      description: "Smart home solutions"
    },
    {
      id: 6,
      name: "Agaseke Boutique",
      category: "Crafts",
      booth: "B-18",
      description: "Traditional Rwandan baskets"
    },
    {
      id: 7,
      name: "Fresh Harvest",
      category: "Agriculture",
      booth: "C-22",
      description: "Organic produce"
    },
    {
      id: 8,
      name: "Kigali Threads",
      category: "Fashion",
      booth: "A-30",
      description: "Men's tailored clothing"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      title: "Trade Fair Main Hall"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
      title: "Vendor Booths"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400",
      title: "Product Showcase"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400",
      title: "Networking Sessions"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400",
      title: "Fashion Display"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=400",
      title: "Artisan Corner"
    }
  ];

  return (
    <div className="tradefair">
      {/* Hero Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', color: 'var(--white)' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{t.tradeFair}</h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
            Connect with customers, network with peers, and showcase your products at our trade fair events
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Upcoming Trade Fairs</h2>
          <div className="opportunities-grid">
            {upcomingEvents.map(event => (
              <div key={event.id} className="opportunity-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <h3>{event.name}</h3>
                  <span className="tag" style={{ 
                    background: event.status === 'Registration Open' ? 'var(--secondary-color)' : 'var(--text-light)',
                    color: 'var(--white)'
                  }}>
                    {event.status}
                  </span>
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                  📅 {event.date}
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
                  📍 {event.venue}
                </p>
                <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                  {event.description}
                </p>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                  <strong>{event.vendors} vendors</strong> expected to participate
                </p>
                {event.status === 'Registration Open' && (
                  <button 
                    className="cta-button" 
                    style={{ width: '100%' }}
                    onClick={() => alert('Registration form would open here')}
                  >
                    Register as Vendor
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor List */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Featured Vendors - Rwanda Made Expo 2025</h2>
          <div className="sme-grid">
            {vendors.map(vendor => (
              <div key={vendor.id} className="sme-card">
                <div className="sme-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                    <h3 className="sme-name">{vendor.name}</h3>
                    <span className="tag">{vendor.booth}</span>
                  </div>
                  <span className="sme-category">{vendor.category}</span>
                  <p className="sme-description">{vendor.description}</p>
                  <button className="visit-btn">View Vendor Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Main Venue - Kigali Convention Centre</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="opportunity-card">
              <h3>📍 Location</h3>
              <p>KG 2 Roundabout, Kigali</p>
              <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>
                Easily accessible by public transport and parking available
              </p>
            </div>
            <div className="opportunity-card">
              <h3>🏢 Facilities</h3>
              <p>3 Exhibition Halls</p>
              <p>150+ Booth Spaces</p>
              <p>Conference Rooms</p>
              <p>Catering Services</p>
            </div>
            <div className="opportunity-card">
              <h3>⏰ Hours</h3>
              <p><strong>Day 1-2:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Day 3:</strong> 9:00 AM - 4:00 PM</p>
              <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>
                VIP Hour: 8:00 AM - 9:00 AM (Day 1)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Previous Events Gallery</h2>
          <div className="sme-grid">
            {galleryImages.map(image => (
              <div key={image.id} style={{ 
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '250px',
                cursor: 'pointer',
                boxShadow: 'var(--shadow)'
              }}>
                <img 
                  src={image.url} 
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '2rem 1rem 1rem',
                  color: 'var(--white)',
                  fontWeight: '600'
                }}>
                  {image.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Participate as a Vendor?</h2>
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3>Direct Customer Access</h3>
              <p>Meet thousands of potential customers face-to-face over three days</p>
            </div>
            <div className="opportunity-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h3>Networking</h3>
              <p>Connect with other businesses, potential partners, and industry experts</p>
            </div>
            <div className="opportunity-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
              <h3>Brand Visibility</h3>
              <p>Showcase your products and increase brand awareness across the market</p>
            </div>
            <div className="opportunity-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3>Sales Opportunities</h3>
              <p>Immediate sales and order bookings during the event</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TradeFair;
