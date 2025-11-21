# Project Overview - Bridges SME Platform

## Application Structure

```
HOMEPAGE (Landing)
├── Hero Slideshow (3 slides, auto-advance)
├── Features Section (4 key features)
├── Testimonials Slider (4 testimonials, auto-advance)
└── Call-to-Action Section

SME DIRECTORY
├── Category Filters (8 categories)
├── SME Cards Grid (12 sample SMEs)
│   ├── Business Image
│   ├── Name & Category
│   ├── Description
│   ├── Contact Buttons (WhatsApp/Instagram/Phone/Website)
│   └── Visit Storefront Button
└── Responsive Grid Layout

OPPORTUNITIES HUB
├── Filter Controls (Type/Sector/Region)
├── Opportunities Grid (12 opportunities)
│   ├── Grants
│   ├── Training Programs
│   └── Investor Connections
└── Information Sections

RESOURCES (Social Media Hub)
├── Content Type Filters (Video/Guide/Newsletter/Tips)
├── Resources List (15 resources)
│   ├── Title & Description
│   ├── Duration & Level
│   └── Access Button
└── Popular Topics Section

DASHBOARD
├── Edit Profile Form
│   ├── Business Name
│   ├── Category Selection
│   ├── Description
│   └── Contact Information
├── Digital Readiness Score (Circular display)
├── Saved Opportunities List
└── Personalized Recommendations

TRADE FAIR
├── Upcoming Events (3 events)
├── Featured Vendors List (8 vendors)
├── Venue Information
├── Previous Events Gallery
└── Benefits Section

GALLERY
├── Category Filters (Products/Events/Training/Stories)
├── Image Grid (18 images)
│   ├── High-quality photos
│   ├── Hover effects
│   └── Title & Description overlays
└── Gallery Statistics

ABOUT
├── Mission Statement
├── Vision Statement
├── Core Values (3 values)
├── Our Story Section
└── Impact Statistics

CONTACT
├── Contact Methods (WhatsApp/Email/Instagram/LinkedIn)
├── Office Location
├── Contact Form
└── FAQ Section
```

## Key Technologies

- **React 18** - Component-based UI
- **React Router DOM v6** - Page navigation
- **Vite** - Fast build tool
- **Context API** - Language state management
- **Pure CSS** - Custom styling (no frameworks)

## Features Implemented

✅ Multi-language support (EN/RW/FR)
✅ Responsive design (mobile/tablet/desktop)
✅ Auto-advancing slideshows
✅ Filter systems for SMEs and opportunities
✅ Interactive dashboards
✅ Contact forms
✅ Image galleries with hover effects
✅ Smooth navigation with React Router

## Color Scheme

- **Primary Blue**: #2563eb (Trust, professionalism)
- **Secondary Green**: #16a34a (Growth, success)
- **Accent Red**: #dc2626 (Urgency, action)
- **Light Background**: #f9fafb
- **Dark Text**: #1f2937

## Data Structure

All data is stored in component arrays (easily replaceable with API calls):
- SME listings
- Opportunities
- Resources
- Events
- Gallery images
- Testimonials

## Mobile Responsive

- Hamburger menu for mobile navigation
- Stacked layouts on small screens
- Touch-friendly buttons
- Optimized images

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- Flexbox and Grid layouts
- CSS custom properties

## Deployment Ready

1. Run `npm run build`
2. Deploy `dist` folder
3. Works with any static hosting (Netlify, Vercel, GitHub Pages)

---

This is a complete, production-ready SME platform application!
