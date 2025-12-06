# Ink & Attitude - T-Shirt Printing Business Website

A modern, professional website for a t-shirt printing business targeting businesses, groups, schools, and universities. Features a metal/rock aesthetic with a sleek dark theme.

## Features

✨ **Design & Aesthetics**
- Dark metal/rock inspired color scheme
- Gold and silver accents with red highlights
- Professional yet edgy visual identity
- Smooth animations and transitions
- Responsive design for all devices

🎨 **Core Sections**
- **Hero Section**: Eye-catching introduction with call-to-action
- **Portfolio/Designs**: Showcase of 6 different design styles
  - Corporate Edge (professional)
  - School Spirit (academic)
  - Metal Heritage (rock-inspired)
  - Premium Class (sophisticated)
  - Group Cohesion (unifying)
  - Custom Works (versatile)
- **Services**: Why customers should choose you
- **Contact**: Easy-to-use contact form and direct contact info
- **Navigation**: Sticky header with smooth scrolling

👥 **Target Market Coverage**
- Businesses: Corporate-styled designs
- Schools/Universities: Educational institution designs
- Groups/Organizations: Unity-focused designs
- All with customization options

## Color Scheme

- **Primary Dark**: `#0a0e27` (Deep space black)
- **Secondary Dark**: `#1a1f3a` (Dark blue-gray)
- **Accent Yellow**: `#FFD700` (Gold - main highlight)
- **Accent Silver**: `#C0C0C0` (Metal effect)
- **Accent Red**: `#DC143C` (Crimson - rock edge)

## File Structure

```
.
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── main.js         # Interactive features and animations
├── assets/             # Placeholder for images/logos
└── README.md           # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No build tools required**: This is a static HTML/CSS/JavaScript website
3. **Customize content**: Edit text, contact info, and design descriptions in `index.html`
4. **Add your designs**: Replace the mockup t-shirt designs with your actual product photos

## Customization Guide

### Update Contact Information
In `index.html`, find the Contact section and update:
- Phone number
- Email address
- Physical address
- Social media links

### Modify Portfolio Designs
Replace the placeholder design mockups with your actual t-shirt designs:
1. Add image files to the `assets/` folder
2. Update the `.design-preview` divs in `index.html`

### Change Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-dark: #0a0e27;      /* Main background */
    --secondary-dark: #1a1f3a;    /* Secondary background */
    --accent-yellow: #FFD700;     /* Main highlight color */
    --accent-silver: #C0C0C0;     /* Metal color */
    --accent-red: #DC143C;        /* Rock style accent */
    --text-light: #e0e0e0;        /* Light text */
    --text-muted: #a0a0a0;        /* Muted text */
}
```

### Update Logo/Branding
Find `.logo` in `css/styles.css` and `index.html` to update:
- Logo text
- Logo styling
- Font sizes and effects

## Features Explained

### Responsive Design
- Mobile-first approach
- Hamburger menu on smaller screens
- Touch-friendly buttons and spacing

### Interactive Elements
- Smooth scroll navigation
- Hover effects on cards and buttons
- Form validation
- Success notifications
- Scroll animations on elements

### Performance
- Optimized CSS with minimal repaints
- Lazy animations
- Efficient JavaScript
- No external dependencies

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Consider adding:
- Backend form submission (to save inquiries)
- Image gallery with lightbox
- Customer testimonials section
- Pricing calculator
- Integration with print-on-demand services
- Blog section for design tips
- E-commerce functionality

## Rock & Metal Aesthetic Details

The design incorporates metal/rock styling through:
- **Typography**: Bold, angular fonts (Bebas Neue)
- **Colors**: Gold/silver metallics with crimson accents
- **Effects**: Glow effects, shadows, bold text-shadows
- **Imagery**: Lightning bolt symbols (⚡)
- **Visual Weight**: Strong contrast and defined borders

## Support & Notes

- All fonts are from Google Fonts (cached locally)
- No external CDN dependencies for critical resources
- Mobile menu is fully functional
- Form is set up for client-side handling (implement backend as needed)

---

**Ready to showcase your t-shirt printing excellence!** ⚡
