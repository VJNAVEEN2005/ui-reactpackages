# Publishing Guide for React UI Components

## Latest Version: 2.0.0 🎉

### Major New Features in v2.0.0:
- ✨ **Dual Layout Support** - Side and Top navigation layouts
- 📱 **Mobile Responsive** - Automatic mobile menu for top layout
- 🔄 **Layout Switching** - Dynamic layout changes with props
- 🎯 **Enhanced TypeScript** - Complete type definitions for all new props
- 📏 **Customizable Sizing** - Configurable widths, heights, and spacing

## Steps to Publish

### 1. Navigate to the components directory
```bash
cd src/components
```

### 2. Test the package locally (optional)
```bash
npm pack
```
This creates a `.tgz` file you can test locally.

### 3. Login to npm (if not already logged in)
```bash
npm login
```

### 4. Publish the package
```bash
# For first time publishing
npm publish --access public

# For updates, first bump version:
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes

# Then publish
npm publish
```

## Package Structure

```
src/components/
├── package.json          # Package configuration
├── index.js             # Main entry point
├── index.d.ts           # TypeScript definitions
├── Navbar.jsx           # Main component
├── Navbar.css           # Component styles
├── README.md            # Documentation
├── example.jsx          # Usage example
├── .npmignore           # Files to exclude from npm
└── PUBLISH.md           # This file
```

## What Gets Published

Only these files will be included in the npm package:
- `Navbar.jsx` - The enhanced component with dual layout support
- `Navbar.css` - Enhanced styling with mobile responsiveness
- `index.js` - Entry point
- `index.d.ts` - Complete TypeScript definitions
- `README.md` - Comprehensive documentation
- `package.json` - Package info

## After Publishing

Users can install with:
```bash
npm install @vjnav/ui-components
```

And use with both layouts:
```jsx
// Sidebar layout
import Navbar from '@vjnav/ui-components';
<Navbar layout="side" {...props} />

// Top navigation layout
<Navbar layout="top" {...props} />
```

## New Props in v2.0.0

- `layout`: Choose between 'side' or 'top' navigation
- `position`: Control CSS positioning (fixed, sticky, relative)
- `showToggleButton`: Show/hide collapse button
- `showBranding`: Control branding display
- `sidebarWidth`: Customize sidebar width
- `collapsedWidth`: Customize collapsed sidebar width
- `topbarHeight`: Customize top navigation height
- `className`: Add custom CSS classes

## Version Management

- **Patch** (1.0.x) - Bug fixes, no breaking changes
- **Minor** (1.x.0) - New features, no breaking changes  
- **Major** (x.0.0) - Breaking changes

## Tips

1. Always test locally before publishing
2. Update README.md with any changes
3. Follow semantic versioning
4. Check package size with `npm pack`
5. Verify all peer dependencies are correct
