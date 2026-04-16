# INOA Furniture Specification Pro v2.0.0

A professional, production-ready furniture specification document builder with advanced features.

## 🎯 Overview

This is a complete rewrite and enhancement of the original INOA furniture specification tool, now featuring:

- ✅ **Data Persistence** - Auto-save, manual save, import/export
- ✅ **Undo/Redo** - Full history tracking with 50 steps
- ✅ **Multi-language** - Lithuanian and English support
- ✅ **Theme System** - Light, Warm, Neutral, Dark themes
- ✅ **Budget Tracking** - Real-time budget calculation
- ✅ **Search & Filter** - Find items across all pages
- ✅ **Image Optimization** - Automatic compression
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **Templates** - Pre-built furniture collections
- ✅ **Image Gallery** - View all images in one place
- ✅ **Keyboard Shortcuts** - Power user features
- ✅ **PDF Generation** - Client-side PDF creation
- ✅ **Accessibility** - ARIA labels, keyboard navigation

## 📁 Project Structure

```
furniture-spec-pro/
├── index.html
├── css/
│   ├── styles.css           # Main styles with theme system
│   ├── styles-extended.css  # Page styles, modals, toasts
│   └── mobile.css           # Responsive breakpoints
├── js/
│   ├── config.js            # Configuration constants
│   ├── i18n.js              # Internationalization
│   ├── storage.js           # localStorage & import/export
│   ├── history.js           # Undo/redo system
│   ├── utils.js             # Utility functions
│   ├── templates.js         # Pre-built templates
│   ├── imageUtils.js        # Image compression
│   ├── data.js              # Data model & management
│   ├── render.js            # DOM rendering
│   ├── ui.js                # UI interactions
│   ├── export.js            # Export functionality
│   ├── print.js             # Print optimization
│   └── app.js               # Application initialization
└── README.md
```

## 🚀 Getting Started

### Installation

1. Download the entire `furniture-spec-pro` folder
2. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)
3. No build process or server required!

### First Use

1. The app loads with default Lithuanian content
2. Switch language using LT/EN buttons
3. Enter client and project information in the sidebar
4. Start adding pages and furniture items

## 🎨 Features Guide

### Theme System

Choose from 4 carefully designed themes:
- **Light** - Bright and clean
- **Warm** - Earthy tones
- **Neutral** - Default balanced theme
- **Dark** - Easy on the eyes

Themes automatically persist across sessions.

### Data Management

#### Auto-Save
- Automatically saves every 30 seconds
- Protects against data loss
- Recovery from browser crashes

#### Manual Save/Load
- **Save** - Store current document
- **Load** - Restore saved document
- **Export** - Download as JSON file
- **Import** - Load JSON file

#### New Document
- Starts fresh with default template
- Warns about unsaved changes

### Page Types

1. **Cover Page** - Title, client info, featured image
2. **Index Page** - Table of contents
3. **Section Title** - Chapter dividers with imagery
4. **Content Page** - Furniture specifications
5. **Thank You Page** - Closing message

### Content Management

#### Adding Items
- Click "+ Add Item" in any content page
- Fill in specifications inline
- Upload product images (auto-compressed)
- Add pricing information

#### Reordering
- **Pages** - Drag in sidebar navigation
- **Items** - Drag handles on content pages
- Cover page always stays first

#### Editing
- All text is editable inline
- Click any text to edit
- Changes auto-save
- Undo/redo with Ctrl+Z/Ctrl+Y

### Budget Tracking

- Toggle price display with "Show/Hide Prices"
- Real-time calculation of total budget
- Prices display in content pages
- Hidden in print/PDF output

### Search

- Search across all pages and items
- Finds: suppliers, product names, materials
- Highlights matching nav items
- Clear with ✕ button

### Image Management

#### Upload
- Click any image placeholder
- Automatic compression to <5MB
- Maintains aspect ratio
- Converts to JPEG for efficiency

#### Gallery View
- View all uploaded images
- Grid layout
- Click to enlarge
- See which item each image belongs to

### Templates

Pre-built furniture collections:
- Modern Living Room
- Minimalist Bedroom
- Luxury Kitchen
- Scandinavian Style

Apply templates to quickly populate content pages.

### Keyboard Shortcuts

- **Ctrl + S** - Save document
- **Ctrl + P** - Print/PDF
- **Ctrl + Z** - Undo
- **Ctrl + Y** / **Ctrl + Shift + Z** - Redo
- **Esc** - Close modals

### Print & PDF

#### Browser Print
1. Click "Print" button
2. Select printer or "Save as PDF"
3. A4 size, exact colors preserved

#### PDF Generation
1. Click "Generate PDF" button
2. Client-side PDF creation
3. Download directly

**Print Optimizations:**
- Removes UI elements
- Preserves exact colors
- A4 page size
- Page breaks between pages

## 📱 Mobile Experience

### Responsive Design
- Sidebar collapses to hamburger menu
- Touch-optimized buttons (44px minimum)
- Swipe gestures
- Vertical scrolling layout

### Mobile Features
- Full editing capability
- Image upload from camera
- Landscape orientation support
- Works offline (once loaded)

## 🛠 Technical Details

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Storage
- localStorage for persistence
- ~10MB quota (plenty for documents)
- JSON format for import/export
- Base64 images (compressed)

### Performance
- Vanilla JavaScript (no frameworks)
- No external dependencies
- <100KB total size (excluding images)
- Instant load times

### Accessibility
- ARIA labels throughout
- Keyboard navigation
- Focus indicators
- Screen reader support
- High contrast mode compatible

## 💡 Tips & Tricks

### Workflow Recommendations

1. **Start with structure** - Add all pages first
2. **Use templates** - Modify rather than build from scratch
3. **Upload images last** - Complete text content first
4. **Regular exports** - Download JSON backups
5. **Test print early** - Check layout before finishing

### Best Practices

#### Images
- Use high-quality product photos
- Consistent aspect ratios per page
- White/neutral backgrounds work best
- Compress before upload if >1MB

#### Text
- Keep product names concise
- Use consistent terminology
- Include full care instructions
- Add supplier codes in notes

#### Organization
- Group similar items in sections
- Use section titles for categories
- Maintain logical page order
- Update index page numbers

### Advanced Usage

#### Custom Styling
Edit CSS files to customize:
- Colors and fonts
- Spacing and layout
- Print styles
- Theme definitions

#### Data Structure
The JSON export contains:
```json
{
  "app": "INOA Furniture Specification Pro",
  "version": "2.0.0",
  "data": [
    {
      "id": "p_1",
      "type": "content",
      "room": "Living Room",
      "items": [...]
    }
  ]
}
```

Manipulate externally for bulk operations.

## 🐛 Troubleshooting

### Images not uploading
- Check file size (<5MB)
- Ensure valid image format (JPG, PNG, WebP, GIF)
- Try a different browser
- Clear browser cache

### Auto-save not working
- Check browser console for errors
- Ensure localStorage is enabled
- Check available storage quota
- Disable browser privacy modes

### Print issues
- Use Chrome/Edge for best results
- Check print preview first
- Ensure "Background graphics" is enabled
- Try PDF generation instead

### Performance slow
- Large images (>2MB each) can slow down
- Limit to 50-100 images total
- Use image compression
- Export and start new document if needed

## 📄 License & Credits

**Original Design:** INOA Interior Studio  
**Enhanced By:** Claude (Anthropic)  
**Version:** 2.0.0 Pro  
**License:** MIT License

Free to use, modify, and distribute.

## 🔄 Version History

### v2.0.0 (2026-04-16)
- Complete rewrite with modular architecture
- Added persistence (auto-save, import/export)
- Implemented undo/redo (50 steps)
- Multi-language support (LT/EN)
- Theme system (4 themes)
- Budget tracking
- Search functionality
- Templates library
- Image compression
- Mobile responsive
- Accessibility improvements
- Keyboard shortcuts
- PDF generation

### v1.0.0 (Original)
- Basic document editor
- Drag-and-drop reordering
- Image upload
- Print functionality

## 📞 Support

For issues or questions:
1. Check this README
2. Check browser console for errors
3. Try in a different browser
4. Contact: INOA Interior Studio

## 🚀 Future Enhancements

Possible additions:
- Cloud sync
- Collaboration features
- Version history
- Comments/annotations
- More templates
- Advanced PDF customization
- Excel/CSV import
- QR codes for links
- Digital signatures

---

**Made with ❤️ for interior designers and architects**
# INOA---Baldu-Specifikacija
