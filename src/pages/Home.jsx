import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { translations } from '../translations';

function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200',
      title: t.heroTitle,
      subtitle: t.heroTagline
    },
    {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200',
      title: 'Connect with Markets',
      subtitle: 'Access customers across East Africa and beyond'
    },
    {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200',
      title: 'Grow Your Business',
      subtitle: 'Training, funding, and support for SME success'
    }
  ];

  const testimonials = [
    {
      text: "Bridges helped me reach customers I never thought possible. My fashion business has grown by 300% in just 6 months!",
      author: "Marie Uwase, Fashion Designer"
    },
    {
      text: "The funding opportunities and training programs transformed my small bakery into a thriving business with 5 locations.",
      author: "Jean-Claude Habimana, Food & Services"
    },
    {
      text: "Thanks to Bridges, my handmade crafts are now selling internationally. The platform gave me visibility I couldn't afford on my own.",
      author: "Grace Mutesi, Decor & Home Goods"
    },
    {
      text: "The social media training was a game-changer. I now manage my own Instagram and TikTok, bringing in daily orders.",
      author: "Patrick Nkusi, Beauty & Wellness"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="home">
      {/* Hero Section with Slideshow */}
      <section className="hero">
        <div className="slideshow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`
              }}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>
          <Link to="/sme-directory" className="cta-button">
            {t.getStarted}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Bridges?</h2>
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <h3>🏪 E-Commerce Directory</h3>
              <p>Get your own digital storefront with product galleries, contact options, and business visibility across Rwanda and beyond.</p>
            </div>
            <div className="opportunity-card">
              <h3>💰 Funding Access</h3>
              <p>Connect with grants, government programs, NGO support, and international funding opportunities tailored for SMEs.</p>
            </div>
            <div className="opportunity-card">
              <h3>📱 Social Media Training</h3>
              <p>Learn digital marketing, content creation, and how to grow your business presence on Instagram, TikTok, and WhatsApp Business.</p>
            </div>
            <div className="opportunity-card">
              <h3>🤝 Trade Fair Events</h3>
              <p>Participate in vendor exhibitions, network with other businesses, and showcase your products at physical and virtual trade fairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">{t.testimonialsTitle}</h2>
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}
              >
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.author}</p>
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

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Ready to Grow Your Business?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-light)' }}>
            Join hundreds of SMEs already expanding their reach with Bridges
          </p>
          <Link to="/sme-directory" className="cta-button" style={{ marginRight: '1rem' }}>
            Browse SME Directory
          </Link>
          <Link to="/opportunities" className="cta-button" style={{ background: 'var(--secondary-color)' }}>
            Explore Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
