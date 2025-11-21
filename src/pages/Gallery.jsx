import { useState } from 'react';
import { useLanguage } from '../App';
import { translations } from '../translations';

function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'products', label: 'Products' },
    { id: 'events', label: 'Trade Fair Events' },
    { id: 'training', label: 'Training Sessions' },
    { id: 'businesses', label: 'SME Stories' }
  ];

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
      category: "products",
      title: "Fashion Products Display",
      description: "Beautiful African-inspired fashion pieces"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
      category: "events",
      title: "Trade Fair 2024",
      description: "Main exhibition hall with 150+ vendors"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
      category: "training",
      title: "Digital Marketing Workshop",
      description: "SMEs learning social media strategies"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
      category: "businesses",
      title: "Success Story - Marie's Boutique",
      description: "From local shop to online success"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
      category: "products",
      title: "Handcrafted Home Decor",
      description: "Traditional baskets and modern designs"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
      category: "events",
      title: "Vendor Booth Setup",
      description: "Preparing for the big day"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
      category: "training",
      title: "Photography Training",
      description: "Learning product photography techniques"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600",
      category: "businesses",
      title: "Tech Startup - Innovation Hub",
      description: "Young entrepreneurs building the future"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
      category: "products",
      title: "Food & Catering Services",
      description: "Authentic Rwandan cuisine showcase"
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600",
      category: "events",
      title: "Networking Session",
      description: "SMEs connecting and collaborating"
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      category: "training",
      title: "Business Planning Workshop",
      description: "Financial management training session"
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600",
      category: "businesses",
      title: "Women Entrepreneurs Group",
      description: "Empowering women in business"
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
      category: "products",
      title: "Natural Beauty Products",
      description: "Locally sourced skincare line"
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
      category: "events",
      title: "Fashion Show Runway",
      description: "East Africa Fashion Week highlight"
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
      category: "training",
      title: "Team Collaboration",
      description: "Group exercises and peer learning"
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600",
      category: "products",
      title: "Artisan Crafts",
      description: "Traditional and contemporary designs"
    },
    {
      id: 17,
      url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600",
      category: "events",
      title: "Product Showcase Booth",
      description: "Creative booth design at trade fair"
    },
    {
      id: 18,
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600",
      category: "businesses",
      title: "Family Business Growth",
      description: "Three generations in business together"
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="gallery">
      <section className="section">
        <div className="container">
          <h1 className="section-title">{t.gallery}</h1>
          <p className="text-center" style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            Explore moments from our events, success stories, and SME showcases
          </p>

          {/* Category Filters */}
          <div className="filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="sme-grid">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                style={{ 
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '300px',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow)',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow)';
                }}
                onClick={() => alert(`Viewing: ${image.title}`)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                  padding: '3rem 1.5rem 1.5rem',
                  color: 'var(--white)'
                }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{image.title}</h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center" style={{ padding: '3rem', color: 'var(--text-light)' }}>
              <p style={{ fontSize: '1.2rem' }}>No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Our Journey in Pictures</h2>
          <div className="opportunities-grid">
            <div className="opportunity-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                50+
              </div>
              <h3>Trade Fair Events</h3>
              <p>Documented and showcased</p>
            </div>
            <div className="opportunity-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                500+
              </div>
              <h3>SME Stories</h3>
              <p>Success stories captured</p>
            </div>
            <div className="opportunity-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                1000+
              </div>
              <h3>Product Photos</h3>
              <p>Professional showcases</p>
            </div>
            <div className="opportunity-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                200+
              </div>
              <h3>Training Sessions</h3>
              <p>Learning moments shared</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Share Your Story</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Are you an SME with a success story to share? We'd love to feature your journey 
            and inspire other entrepreneurs. Contact us to be part of our gallery.
          </p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contact'}
          >
            Share Your Story
          </button>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
