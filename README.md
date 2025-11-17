# FloodSafe Navigator - HTML/CSS Version

A standalone HTML/CSS version of the FloodSafe Navigator website for flood evacuation and emergency navigation.

## Files Included

- **index.html** - Main HTML file with all content
- **styles.css** - Complete stylesheet with responsive design
- **script.js** - JavaScript for interactive features (mobile menu, smooth scroll, animations)

## How to Run

1. Download all three files to a folder
2. Open `index.html` in any web browser
3. That's it! No build tools or dependencies required.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Smooth scroll navigation
- ✅ Scroll animations
- ✅ Clean, semantic HTML
- ✅ Modern CSS with CSS Variables
- ✅ Cross-browser compatible

## Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **Status Dashboard** - Real-time flood alerts and status cards
3. **Features** - 6 key feature highlights
4. **Safety Guide** - Before/During/After flood safety guidelines
5. **Emergency Contacts** - Quick access to emergency services
6. **Footer** - Site links and information

## Browser Support

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit the CSS variables in `styles.css` (lines 8-17):
```css
:root {
    --bg-primary: #f8f9fb;
    --primary: #1e5a8e;
    --accent: #f59e0b;
    /* etc... */
}
```

### Content
Simply edit the text in `index.html` - all content is clearly marked with comments.

### Images
The hero background is currently a solid gradient. To add an image:
1. Add your image file to the same folder
2. Update line 289 in `styles.css`:
```css
.hero-bg {
    background: url('your-image.jpg') center/cover;
}
```

## Deployment

Upload these files to any web hosting service:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting (cPanel, etc.)

No build process needed - just upload and go!

## License

Free to use and modify for your projects.
