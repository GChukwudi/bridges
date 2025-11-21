# Bridges - SME Platform

A comprehensive React + Vite web application for empowering Small and Medium Enterprises (SMEs) in Rwanda.

## Features

### 🏠 Homepage
- Dynamic hero slideshow with call-to-action
- Testimonials from SMEs
- Key features showcase
- Multi-language support (English, Kinyarwanda, French)

### 🏪 SME Directory
- Comprehensive business listings with filtering by category
- Individual SME profiles with contact options (WhatsApp, Instagram, Phone, Website)
- Categories: Fashion, Decor, Rental Services, Food, Beauty, New Businesses, Made in Rwanda
- Product images and business descriptions

### 💰 Opportunities Hub
- Funding opportunities (Grants, Government programs, NGO support)
- Training & Workshops
- Partnership and investor connections
- Advanced filtering by type, sector, and region

### 📱 Resources (Social Media Strategy Hub)
- Video tutorials
- Step-by-step guides
- Newsletters
- Daily tips for social media marketing
- Content organized by type and difficulty level

### 📊 User Dashboard
- SME profile management
- Digital readiness score
- Saved opportunities
- Personalized recommendations

### 🎪 Trade Fair
- Upcoming trade fair events
- Vendor listings with booth information
- Venue details
- Photo gallery from previous events
- Registration system

### 📸 Gallery
- Categorized photo collections
- Event documentation
- SME success stories
- Product showcases

### 📞 Contact & About
- Multiple contact channels
- Company mission, vision, and values
- FAQ section
- Contact form

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
bridges-sme-platform/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with language toggle
│   │   └── Footer.jsx          # Footer with links
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with slideshow
│   │   ├── SMEDirectory.jsx    # Business listings
│   │   ├── Opportunities.jsx   # Funding & training
│   │   ├── Resources.jsx       # Social media hub
│   │   ├── Dashboard.jsx       # User profile management
│   │   ├── TradeFair.jsx       # Event information
│   │   ├── Gallery.jsx         # Photo gallery
│   │   ├── About.jsx           # About page
│   │   └── Contact.jsx         # Contact information
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   └── translations.js         # Multi-language support
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **Pure CSS** - Styling (No Tailwind CSS)
- **Context API** - State management for language

## Key Features

### Multi-Language Support
The platform supports three languages:
- English (EN)
- Kinyarwanda (RW)
- French (FR)

Language can be toggled from the header navigation.

### Responsive Design
Fully responsive layout that works on:
- Desktop
- Tablet
- Mobile devices

### Interactive Elements
- Automatic slideshow on homepage
- Filterable SME directory
- Category-based gallery
- Interactive trade fair registration
- Profile management dashboard

## Customization

### Adding New SMEs
Edit the `smeData` array in `src/pages/SMEDirectory.jsx`

### Adding Opportunities
Edit the `opportunities` array in `src/pages/Opportunities.jsx`

### Adding Resources
Edit the `resources` array in `src/pages/Resources.jsx`

### Translations
Add or modify translations in `src/translations.js`

### Styling
All styles are in `src/index.css`. Modify CSS custom properties in `:root` to change the color scheme:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #16a34a;
  --accent-color: #dc2626;
  /* ... other variables */
}
```

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder will contain the production-ready files

3. Deploy to your hosting provider (Netlify, Vercel, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this project for your needs

## Contact

For questions or support, please contact the Bridges team.

---

Built with ❤️ for SMEs in Rwanda
