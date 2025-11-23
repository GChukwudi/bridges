import { useState } from 'react';
import { useLanguage } from '../App';
import { translations } from '../translations';

function Resources() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeContentType, setActiveContentType] = useState('all');

  const contentTypes = [
    { id: 'all', label: 'All Content', icon: '📚' },
    { id: 'video', label: t.videoTutorials, icon: '🎥' },
    { id: 'guide', label: t.stepByStep, icon: '📝' },
    { id: 'newsletter', label: t.newsletters, icon: '📧' },
    { id: 'tip', label: t.dailyTips, icon: '💡' }
  ];

  const resources = [
    {
      id: 1,
      type: 'video',
      title: 'How to Create Engaging Instagram Reels',
      description: 'Learn the basics of creating short-form video content that captures attention and drives engagement.',
      duration: '15 min',
      level: 'Beginner'
    },
    {
      id: 2,
      type: 'guide',
      title: 'WhatsApp Business Setup Guide',
      description: 'Step-by-step instructions for setting up and optimizing your WhatsApp Business account for customer communication.',
      duration: '10 min read',
      level: 'Beginner'
    },
    {
      id: 3,
      type: 'video',
      title: 'Branding Basics for Small Business',
      description: 'Understanding brand identity, colors, logos, and creating a consistent visual presence across platforms.',
      duration: '20 min',
      level: 'Beginner'
    },
    {
      id: 4,
      type: 'guide',
      title: 'How to Plan Weekly Social Media Posts',
      description: 'Create a content calendar, batch your posts, and maintain consistency without burning out.',
      duration: '12 min read',
      level: 'Intermediate'
    },
    {
      id: 5,
      type: 'tip',
      title: 'Low-Budget Photography Tips',
      description: 'Take professional-looking product photos using just your smartphone and natural lighting.',
      duration: '5 min read',
      level: 'Beginner'
    },
    {
      id: 6,
      type: 'video',
      title: 'Instagram Stories for Business Growth',
      description: 'Use Stories to connect with customers, showcase behind-the-scenes content, and drive sales.',
      duration: '18 min',
      level: 'Intermediate'
    },
    {
      id: 7,
      type: 'guide',
      title: 'Writing Captions That Convert',
      description: 'Craft compelling social media captions that tell your story and encourage customers to take action.',
      duration: '8 min read',
      level: 'Intermediate'
    },
    {
      id: 8,
      type: 'newsletter',
      title: 'This Week in Social Media Marketing',
      description: 'Latest trends, algorithm updates, and quick wins for SMEs on Instagram, Facebook, and TikTok.',
      duration: '6 min read',
      level: 'All Levels'
    },
    {
      id: 9,
      type: 'video',
      title: 'Building an Engaged Community Online',
      description: 'Strategies for responding to comments, creating conversations, and building loyal followers.',
      duration: '22 min',
      level: 'Intermediate'
    },
    {
      id: 10,
      type: 'tip',
      title: 'Best Times to Post on Social Media',
      description: 'Data-driven insights on when your audience is most active and likely to engage with your content.',
      duration: '4 min read',
      level: 'Beginner'
    },
    {
      id: 11,
      type: 'guide',
      title: 'Facebook Business Page Optimization',
      description: 'Complete your profile, set up shop features, and use Facebook tools to reach more customers.',
      duration: '15 min read',
      level: 'Beginner'
    },
    {
      id: 12,
      type: 'video',
      title: 'How to Run Effective TikTok Ads (Coming Soon)',
      description: 'Learn to create and optimize TikTok advertising campaigns on a small business budget.',
      duration: '25 min',
      level: 'Advanced'
    },
    {
      id: 13,
      type: 'tip',
      title: 'Hashtag Strategy for Maximum Reach',
      description: 'Choose the right mix of hashtags to increase discoverability without looking spammy.',
      duration: '5 min read',
      level: 'Beginner'
    },
    {
      id: 14,
      type: 'guide',
      title: 'Measuring Social Media Success',
      description: 'Track the right metrics, understand analytics, and make data-driven decisions for your business.',
      duration: '10 min read',
      level: 'Intermediate'
    },
    {
      id: 15,
      type: 'newsletter',
      title: 'Content Ideas for Every Day of the Week',
      description: 'Never run out of post ideas with our weekly content framework for small businesses.',
      duration: '7 min read',
      level: 'All Levels'
    }
  ];

  const filteredResources = activeContentType === 'all' 
    ? resources 
    : resources.filter(r => r.type === activeContentType);

  return (
    <div className="resources">
      <section className="section">
        <div className="container">
          <h1 className="section-title">{t.resourcesTitle}</h1>
          <p className="text-center" style={{ fontSize: '1.1rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '1rem' }}>
            AI Business Assistant + Content Calendar
          </p>
          <p className="text-center" style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            Help SMEs improve online branding & engagement
          </p>

          {/* Content Type Filters */}
          <div className="content-types">
            {contentTypes.map(type => (
              <div
                key={type.id}
                className={`content-type-card ${activeContentType === type.id ? 'active' : ''}`}
                onClick={() => setActiveContentType(type.id)}
                style={{
                  border: activeContentType === type.id ? '2px solid var(--primary-color)' : 'none'
                }}
              >
                <div className="content-type-icon">{type.icon}</div>
                <h3>{type.label}</h3>
              </div>
            ))}
          </div>

          {/* Resources List */}
          <div className="tips-list">
            {filteredResources.map(resource => (
              <div key={resource.id} className="tip-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                  <h3>{resource.title}</h3>
                  <span className="tag">{resource.type}</span>
                </div>
                <p style={{ marginBottom: '1rem' }}>{resource.description}</p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  <span>⏱️ {resource.duration}</span>
                  <span>📊 {resource.level}</span>
                </div>
                <button 
                  className="cta-button" 
                  style={{ marginTop: '1rem', padding: '0.6rem 1.5rem' }}
                  onClick={() => alert('Content would open here')}
                >
                  {resource.type === 'video' ? 'Watch Now' : 'Read More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Types of Content We Offer</h2>
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <h3>🎥 Video Tutorials</h3>
              <p>Watch and learn at your own pace with professional video guides covering everything from basic setup to advanced strategies.</p>
            </div>
            <div className="opportunity-card">
              <h3>📝 Step-by-Step Guides</h3>
              <p>Written instructions with screenshots and examples you can follow along to implement immediately.</p>
            </div>
            <div className="opportunity-card">
              <h3>📧 Short Newsletters</h3>
              <p>Weekly updates with the latest trends, tips, and success stories from SMEs in our community.</p>
            </div>
            <div className="opportunity-card">
              <h3>💡 Daily Tips</h3>
              <p>Quick, actionable advice you can implement today to improve your social media presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Popular Learning Topics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>📱 Instagram Marketing</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Reels, Stories, posts, and IGTV</p>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>💬 WhatsApp Business</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Customer service and sales automation</p>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>🎨 Branding & Design</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Logo, colors, and visual identity</p>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>📅 Content Planning</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Calendars and consistent posting</p>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>📸 Product Photography</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>DIY professional-looking photos</p>
            </div>
            <div style={{ padding: '1.5rem', background: 'var(--white)', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>🎯 TikTok for Business</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Trending content and ads (coming soon)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
