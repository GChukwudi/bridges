import { useState } from 'react';
import { useLanguage } from '../App';
import { translations } from '../translations';

function Opportunities() {
  const { language } = useLanguage();
  const t = translations[language];
  const [filterType, setFilterType] = useState('all');
  const [filterSector, setFilterSector] = useState('all');
  const [filterCountry, setFilterCountry] = useState('all');

  const opportunities = [
    {
      id: 1,
      title: "Rwanda Innovation Fund",
      type: "grant",
      sector: "technology",
      country: "rwanda",
      description: "Grants up to $50,000 for innovative tech startups and SMEs in Rwanda.",
      deadline: "December 31, 2024",
      tags: ["Grant", "Tech", "Rwanda"]
    },
    {
      id: 2,
      title: "Digital Marketing Bootcamp",
      type: "training",
      sector: "all",
      country: "rwanda",
      description: "Free 4-week intensive training on social media marketing, content creation, and online advertising.",
      deadline: "Rolling admissions",
      tags: ["Training", "Marketing", "Free"]
    },
    {
      id: 3,
      title: "EAC SME Development Grant",
      type: "grant",
      sector: "all",
      country: "eac",
      description: "Support for SMEs expanding across East African Community borders. Up to $100,000 in funding.",
      deadline: "March 15, 2025",
      tags: ["Grant", "EAC", "Expansion"]
    },
    {
      id: 4,
      title: "Women in Business Accelerator",
      type: "investor",
      sector: "all",
      country: "rwanda",
      description: "12-week accelerator program connecting women entrepreneurs with investors and mentors.",
      deadline: "January 20, 2025",
      tags: ["Accelerator", "Women", "Investment"]
    },
    {
      id: 5,
      title: "Financial Management Workshop",
      type: "training",
      sector: "all",
      country: "rwanda",
      description: "Learn bookkeeping, budgeting, and financial planning for small businesses.",
      deadline: "Ongoing monthly sessions",
      tags: ["Training", "Finance", "Free"]
    },
    {
      id: 6,
      title: "USAID SME Support Program",
      type: "grant",
      sector: "agriculture",
      country: "international",
      description: "International funding for agricultural SMEs focused on sustainable practices.",
      deadline: "February 28, 2025",
      tags: ["Grant", "International", "Agriculture"]
    },
    {
      id: 7,
      title: "Trade Fair Readiness Training",
      type: "training",
      sector: "all",
      country: "rwanda",
      description: "Prepare your business for trade fairs: booth design, product presentation, and sales techniques.",
      deadline: "Weekly sessions",
      tags: ["Training", "Trade Fair", "Sales"]
    },
    {
      id: 8,
      title: "Green Innovation Challenge",
      type: "investor",
      sector: "environment",
      country: "international",
      description: "Pitch competition for eco-friendly businesses. Winner receives $250,000 investment.",
      deadline: "April 30, 2025",
      tags: ["Competition", "Investment", "Environment"]
    },
    {
      id: 9,
      title: "Rwanda Development Board SME Grant",
      type: "grant",
      sector: "all",
      country: "rwanda",
      description: "Government support for SMEs in manufacturing, tourism, and services sectors.",
      deadline: "June 30, 2025",
      tags: ["Grant", "Government", "Rwanda"]
    },
    {
      id: 10,
      title: "Export Readiness Program",
      type: "training",
      sector: "all",
      country: "rwanda",
      description: "Prepare your business for international markets: documentation, logistics, and compliance.",
      deadline: "Quarterly cohorts",
      tags: ["Training", "Export", "International"]
    },
    {
      id: 11,
      title: "Fashion SME Investment Network",
      type: "investor",
      sector: "fashion",
      country: "eac",
      description: "Connect with fashion industry investors across East Africa. Monthly pitch events.",
      deadline: "Ongoing",
      tags: ["Investment", "Fashion", "Networking"]
    },
    {
      id: 12,
      title: "NGO Partnership: Skills Development",
      type: "grant",
      sector: "education",
      country: "rwanda",
      description: "Partnership opportunity with international NGO for skills training programs.",
      deadline: "Rolling applications",
      tags: ["NGO", "Partnership", "Training"]
    }
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    const typeMatch = filterType === 'all' || opp.type === filterType;
    const sectorMatch = filterSector === 'all' || opp.sector === filterSector || opp.sector === 'all';
    const countryMatch = filterCountry === 'all' || opp.country === filterCountry;
    return typeMatch && sectorMatch && countryMatch;
  });

  return (
    <div className="opportunities">
      <section className="section">
        <div className="container">
          <h1 className="section-title">{t.opportunitiesTitle}</h1>
          
          {/* Filters */}
          <div className="filters" style={{ marginBottom: '3rem' }}>
            <div>
              <label style={{ fontWeight: '600', marginRight: '1rem' }}>Type:</label>
              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}
              >
                <option value="all">All Types</option>
                <option value="grant">Grant</option>
                <option value="training">Training</option>
                <option value="investor">Investor/Partnership</option>
              </select>
            </div>
            
            <div>
              <label style={{ fontWeight: '600', marginRight: '1rem' }}>Sector:</label>
              <select 
                value={filterSector} 
                onChange={(e) => setFilterSector(e.target.value)}
                style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}
              >
                <option value="all">All Sectors</option>
                <option value="technology">Technology</option>
                <option value="agriculture">Agriculture</option>
                <option value="fashion">Fashion</option>
                <option value="environment">Environment</option>
                <option value="education">Education</option>
              </select>
            </div>
            
            <div>
              <label style={{ fontWeight: '600', marginRight: '1rem' }}>Region:</label>
              <select 
                value={filterCountry} 
                onChange={(e) => setFilterCountry(e.target.value)}
                style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}
              >
                <option value="all">All Regions</option>
                <option value="rwanda">Rwanda</option>
                <option value="eac">EAC</option>
                <option value="international">International</option>
              </select>
            </div>
          </div>

          {/* Opportunities Grid */}
          <div className="opportunities-grid">
            {filteredOpportunities.map(opp => (
              <div key={opp.id} className="opportunity-card">
                <h3>{opp.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
                  {opp.description}
                </p>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Deadline:</strong> {opp.deadline}
                </div>
                <div className="opportunity-tags">
                  {opp.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className="cta-button" 
                  style={{ marginTop: '1rem', width: '100%' }}
                  onClick={() => alert('Application process would open here')}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center" style={{ padding: '3rem', color: 'var(--text-light)' }}>
              <p style={{ fontSize: '1.2rem' }}>No opportunities match your current filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Sections */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <h3>💰 {t.fundingOpportunities}</h3>
              <div className="opportunity-item">
                <h4>{t.grants}</h4>
                <p>Non-repayable funding for business growth and innovation</p>
              </div>
              <div className="opportunity-item">
                <h4>{t.governmentPrograms}</h4>
                <p>National support initiatives for SME development</p>
              </div>
              <div className="opportunity-item">
                <h4>{t.ngoSupport}</h4>
                <p>International organization partnerships and funding</p>
              </div>
              <div className="opportunity-item">
                <h4>{t.internationalFunding}</h4>
                <p>Global opportunities for expansion and scaling</p>
              </div>
            </div>

            <div className="opportunity-card">
              <h3>📚 {t.trainingWorkshops}</h3>
              <div className="opportunity-item">
                <h4>Digital Marketing</h4>
                <p>Social media, content creation, and online advertising</p>
              </div>
              <div className="opportunity-item">
                <h4>Trade Fair Readiness</h4>
                <p>Booth setup, product presentation, sales techniques</p>
              </div>
              <div className="opportunity-item">
                <h4>Financial Management</h4>
                <p>Bookkeeping, budgeting, and business planning</p>
              </div>
              <div className="opportunity-item">
                <h4>Export & Import</h4>
                <p>International trade documentation and logistics</p>
              </div>
            </div>

            <div className="opportunity-card">
              <h3>🤝 {t.partnerships}</h3>
              <div className="opportunity-item">
                <h4>Investor Pitch Events</h4>
                <p>Monthly opportunities to present to potential investors</p>
              </div>
              <div className="opportunity-item">
                <h4>SME Competitions</h4>
                <p>Innovation challenges with cash prizes and mentorship</p>
              </div>
              <div className="opportunity-item">
                <h4>Accelerator Programs</h4>
                <p>Intensive business development with expert guidance</p>
              </div>
              <div className="opportunity-item">
                <h4>Pilot Programs</h4>
                <p>Test your products with partner organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Opportunities;
