import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { translations } from '../translations';

function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredSMEs = [
    {
      id: 1,
      name: "Elegant Threads",
      category: "Fashion",
      description: "Contemporary African fashion with modern designs",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400"
    },
    {
      id: 2,
      name: "Imizi Crafts",
      category: "Decor & Home Goods",
      description: "Handcrafted home decor from local materials",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400"
    },
    {
      id: 3,
      name: "Mama's Kitchen",
      category: "Food & Catering",
      description: "Authentic Rwandan cuisine and catering",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400"
    },
    {
      id: 4,
      name: "Glow Beauty Studio",
      category: "Beauty & Wellness",
      description: "Natural beauty products and salon services",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400"
    }
  ];

  const testimonials = [
    {
      text: "Participating in Bridges trade fairs completely transformed my business. I connected with suppliers, retailers, and customers I never would have reached otherwise. The networking opportunities alone were worth it.",
      author: "Aisha Uwimana",
      role: "Fashion Designer, Kigali",
      impact: "Trade Fair Impact"
    },
    {
      text: "Since joining Bridges marketplace, my monthly sales have increased by 250%. Having an online storefront with my WhatsApp and Instagram linked made it so easy for customers to find and order from me.",
      author: "Grace Mukamana",
      role: "Home Decor Artisan, Musanze",
      impact: "Sales Generated"
    },
    {
      text: "Through Bridges, I discovered a government grant program I didn't even know existed. They helped me with the application, and I received $15,000 to expand my catering business. The visibility boost was incredible too.",
      author: "Jean-Claude Niyonzima",
      role: "Catering Services Owner, Kigali",
      impact: "Opportunities Accessed"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="home">
      {/* Hero Section - Single Image */}
      <section className="hero">
        <div style={{
          backgroundImage: 'linear-gradient(rgba(69, 82, 54, 0.7), rgba(69, 82, 54, 0.7)), url(https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div className="hero-content">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Bridges - Empowering Rwandan SMEs
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Drive economic development through digital presence and trade fairs
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/vendor-signup" className="cta-button">
                Join as an SME
              </Link>
              <Link to="/opportunities" className="cta-button" style={{ background: 'rgba(252, 249, 218, 0.9)', color: 'var(--primary-color)' }}>
                Explore Opportunities
              </Link>
              <Link to="/marketplace" className="cta-button" style={{ background: 'transparent', border: '2px solid white' }}>
                View Vendors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
              Our Mission
            </h2>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
              To empower Rwandan SMEs to drive economic development by leveraging social media, 
              e-commerce platforms, and trade fairs for strong physical and digital market presence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured SMEs */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Featured SMEs</h2>
          <div className="sme-grid">
            {featuredSMEs.map(sme => (
              <div key={sme.id} className="sme-card">
                <img 
                  src={sme.image} 
                  alt={sme.name} 
                  className="sme-image"
                />
                <div className="sme-content">
                  <h3 className="sme-name">{sme.name}</h3>
                  <span className="sme-category">{sme.category}</span>
                  <p className="sme-description">{sme.description}</p>
                  <Link to="/marketplace" className="visit-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/marketplace" className="cta-button">
              View All Vendors
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}
              >
                <div style={{ 
                  display: 'inline-block', 
                  padding: '0.5rem 1rem', 
                  background: 'var(--primary-color)', 
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem'
                }}>
                  {testimonial.impact}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.author}</p>
                <p style={{ color: 'var(--text-light)', fontStyle: 'italic' }}>{testimonial.role}</p>
              </div>
            ))}
            <div className="slider-controls">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Ready to Grow Your Business?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-light)' }}>
            Join hundreds of SMEs expanding their reach with Bridges
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/vendor-signup" className="cta-button">
              Join as an SME
            </Link>
            <Link to="/marketplace" className="cta-button" style={{ background: 'var(--secondary-color)', color: 'var(--primary-color)' }}>
              View Vendors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
