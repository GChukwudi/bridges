import { useState } from 'react';
import { useLanguage } from '../App';
import { translations } from '../translations';

function Marketplace() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: t.allCategories },
    { id: 'fashion', label: t.fashion },
    { id: 'decor', label: t.decor },
    { id: 'rental', label: t.rental },
    { id: 'food', label: 'Food & Catering' },
    { id: 'beauty', label: t.beauty },
    { id: 'new', label: t.newBusinesses },
    { id: 'made-in-rwanda', label: t.madeInRwanda }
  ];

  const smeData = [
    {
      id: 1,
      name: "Elegant Threads",
      category: "fashion",
      description: "Custom-made African fashion with modern designs. Specializing in traditional wear with contemporary flair.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400",
      contacts: {
        whatsapp: "+250788123456",
        instagram: "@elegantthreads",
        phone: "+250788123456"
      }
    },
    {
      id: 2,
      name: "Imizi Crafts",
      category: "decor",
      description: "Handcrafted home decor items made from locally sourced materials. Baskets, wall art, and decorative pieces.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400",
      contacts: {
        whatsapp: "+250788234567",
        instagram: "@imizicrafts",
        website: "www.imizicrafts.rw"
      }
    },
    {
      id: 3,
      name: "Event Pro Rentals",
      category: "rental",
      description: "Complete event rental services - tents, chairs, tables, sound systems, and decorations for all occasions.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
      contacts: {
        whatsapp: "+250788345678",
        phone: "+250788345678",
        instagram: "@eventprorentals"
      }
    },
    {
      id: 4,
      name: "Mama's Kitchen",
      category: "food",
      description: "Authentic Rwandan cuisine for events and daily orders. Catering services and food delivery available.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
      contacts: {
        whatsapp: "+250788456789",
        phone: "+250788456789",
        instagram: "@mamaskitchenrw"
      }
    },
    {
      id: 5,
      name: "Glow Beauty Studio",
      category: "beauty",
      description: "Full-service beauty salon offering hair styling, makeup, manicure, pedicure, and skincare treatments.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
      contacts: {
        whatsapp: "+250788567890",
        instagram: "@glowbeautystudio",
        phone: "+250788567890"
      }
    },
    {
      id: 6,
      name: "Fresh Harvest",
      category: "food",
      description: "Organic vegetables and fruits delivered fresh from local farms. Daily deliveries to homes and restaurants.",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400",
      contacts: {
        whatsapp: "+250788678901",
        instagram: "@freshharvestrw",
        website: "www.freshharvest.rw"
      }
    },
    {
      id: 7,
      name: "Kigali Threads",
      category: "fashion",
      description: "Contemporary African fashion for men and women. Ready-to-wear and custom tailoring services available.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
      contacts: {
        whatsapp: "+250788789012",
        instagram: "@kigalithreads",
        phone: "+250788789012"
      }
    },
    {
      id: 8,
      name: "Natural Glow Cosmetics",
      category: "beauty",
      description: "Locally made natural skincare products using African botanicals. Cruelty-free and eco-friendly.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      contacts: {
        whatsapp: "+250788890123",
        instagram: "@naturalglowrw",
        website: "www.naturalglow.rw"
      }
    },
    {
      id: 9,
      name: "Inzu Design Studio",
      category: "decor",
      description: "Modern interior design and custom furniture. Transform your space with locally crafted pieces.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
      contacts: {
        whatsapp: "+250788901234",
        instagram: "@inzudesign",
        phone: "+250788901234"
      }
    },
    {
      id: 10,
      name: "Tech Rent Rwanda",
      category: "rental",
      description: "Laptop, projector, and tech equipment rentals for conferences, workshops, and events.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      contacts: {
        whatsapp: "+250789012345",
        phone: "+250789012345",
        instagram: "@techrentrw"
      }
    },
    {
      id: 11,
      name: "Agaseke Boutique",
      category: "made-in-rwanda",
      description: "Traditional Rwandan peace baskets (Agaseke) with modern designs. Perfect gifts and home decor.",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400",
      contacts: {
        whatsapp: "+250789123456",
        instagram: "@agasekeboutique",
        website: "www.agaseke.rw"
      }
    },
    {
      id: 12,
      name: "Startup Hub Co-Working",
      category: "new",
      description: "Affordable co-working space for startups and freelancers. Meeting rooms and event space available.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      contacts: {
        whatsapp: "+250789234567",
        instagram: "@startuphubkgl",
        website: "www.startuphub.rw"
      }
    }
  ];

  const filteredSMEs = activeFilter === 'all' 
    ? smeData 
    : smeData.filter(sme => sme.category === activeFilter);

  return (
    <div className="sme-directory">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Bridges Marketplace</h1>
          <p className="text-center" style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            Online visibility and market reach for Rwandan SMEs
          </p>
          
          {/* Filters */}
          <div className="filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* SME Grid */}
          <div className="sme-grid">
            {filteredSMEs.map(sme => (
              <div key={sme.id} className="sme-card">
                <img 
                  src={sme.image} 
                  alt={sme.name} 
                  className="sme-image"
                />
                <div className="sme-content">
                  <h3 className="sme-name">{sme.name}</h3>
                  <span className="sme-category">
                    {categories.find(c => c.id === sme.category)?.label}
                  </span>
                  <p className="sme-description">{sme.description}</p>
                  
                  <div className="sme-contacts">
                    {sme.contacts.whatsapp && (
                      <a 
                        href={`https://wa.me/${sme.contacts.whatsapp.replace(/\+/g, '')}`}
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📱 WhatsApp
                      </a>
                    )}
                    {sme.contacts.instagram && (
                      <a 
                        href={`https://instagram.com/${sme.contacts.instagram.replace('@', '')}`}
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📷 Instagram
                      </a>
                    )}
                    {sme.contacts.phone && !sme.contacts.whatsapp && (
                      <a 
                        href={`tel:${sme.contacts.phone}`}
                        className="contact-btn"
                      >
                        📞 Call
                      </a>
                    )}
                    {sme.contacts.website && (
                      <a 
                        href={`https://${sme.contacts.website}`}
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🌐 Website
                      </a>
                    )}
                  </div>

                  <a href="#storefront" className="visit-btn">
                    {t.visitStorefront}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredSMEs.length === 0 && (
            <div className="text-center" style={{ padding: '3rem', color: 'var(--text-light)' }}>
              <p style={{ fontSize: '1.2rem' }}>No SMEs found in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Marketplace;
