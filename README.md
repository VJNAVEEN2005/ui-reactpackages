# React UI Components Package

A beautiful collection of customizable React UI com### Input Component
- 🎨 **Multiple Variants**: Default, filled, outlined, glassmorphism
- 🔢 **Icon Support**: Left and right icon placement
- 📏 **Size Options**: Small, medium, and large variants
- 🔒 **Password Toggle**: Built-in show/hide functionality
- ✅ **Validation**: Error, success, and helper text states

### Search Component
- 🔍 **Smart Autocomplete**: Intelligent search suggestions
- 📝 **Recent Searches**: Remembers user search history  
- 📈 **Trending Items**: Popular search recommendations
- ⌨️ **Keyboard Navigation**: Full arrow key and enter support
- ⚡ **Debounced Input**: Optimized performance
- 🎨 **Multiple Variants**: Default, glassmorphism, and outlined styles

### Modal Component
- 📐 **Multiple Sizes**: xs, sm, md, lg, xl, and fullscreen
- 🎨 **Design Variants**: Default, glassmorphism, minimal, and card
- ✨ **Smooth Animations**: Fade, scale, and slide effects
- 🔧 **Advanced Features**: Maximize/minimize, backdrop control
- ⌨️ **Keyboard Support**: Escape key and focus management
- 📱 **Mobile Optimized**: Touch-friendly interactionsng modern glassmorphism design, dual layout navigation, advanced input fields, smart search, and elegant modals.

## 🎨 Components

- **Navbar**: Versatile navigation with sidebar/top layouts, dropdowns, and mobile responsiveness
- **Input**: Feature-rich input fields with icons, validation states, and multiple variants  
- **Search**: Smart search with autocomplete, recommendations, and keyboard navigation
- **Modal**: Elegant modals with animations, multiple sizes, and glassmorphism effects

## 📦 NPM Package

```bash
npm install vj-ui-components
```

**Package**: https://www.npmjs.com/package/vj-ui-components

## 🚀 Quick Start

```jsx
import { Navbar, Input, Search, Modal } from 'vj-ui-components';
import { IconHome, IconUser } from '@tabler/icons-react';

function App() {
  const navItems = [
    { icon: <IconHome />, text: "Dashboard", path: "/" },
    { icon: <IconUser />, text: "Profile", path: "/profile" }
  ];

  return (
    <div>
      <Navbar 
        topdata={navItems}
        layout="side" 
        primaryColor="#6366f1"
      />
      
      <Input
        label="Username"
        placeholder="Enter username"
        leftIcon={<IconUser size={18} />}
        variant="glassmorphism"
      />
      
      <Search
        placeholder="Search products..."
        suggestions={['iPhone', 'MacBook', 'iPad']}
        variant="glassmorphism"
      />
      
      <Modal
        isOpen={showModal}
        title="Welcome"
        size="md"
        variant="glassmorphism"
        onClose={() => setShowModal(false)}
      >
        <p>Welcome to our application!</p>
      </Modal>
    </div>
  );
}
```

## 📖 Documentation

Complete documentation and examples are available in the [`src/components/`](./src/components/) directory:

- [Component Documentation](./src/components/README.md)
- [Navbar Examples](./src/components/example.jsx)
- [Input Examples](./src/components/input-example.jsx)
- [Complete App Example](./src/components/complete-example.jsx)

## ✨ Features

### Navbar Component
- 🎨 **Dual Layout**: Switch between sidebar and top navigation
- 📱 **Mobile Responsive**: Automatic mobile menu
- 🔽 **Dropdown Support**: Nested navigation menus
- ✨ **Active State**: Intelligent current page detection
- 🎨 **Glassmorphism**: Modern frosted glass effects

### Search Component
- 🔍 **Smart Autocomplete**: Intelligent search suggestions
- 📝 **Recent Searches**: Remembers user search history  
- � **Trending Items**: Popular search recommendations
- ⌨️ **Keyboard Navigation**: Full arrow key and enter support
- ⚡ **Debounced Input**: Optimized performance
- 🎨 **Multiple Variants**: Default, glassmorphism, and outlined styles

### Modal Component
- � **Multiple Sizes**: xs, sm, md, lg, xl, and fullscreen
- 🎨 **Design Variants**: Default, glassmorphism, minimal, and card
- ✨ **Smooth Animations**: Fade, scale, and slide effects
- 🔧 **Advanced Features**: Maximize/minimize, backdrop control
- ⌨️ **Keyboard Support**: Escape key and focus management
- 📱 **Mobile Optimized**: Touch-friendly interactions

## 🎯 TypeScript Support

Full TypeScript definitions included with comprehensive prop interfaces.

## 📱 Mobile Responsive

All components are fully responsive with touch-optimized interactions.

## 🎨 Customizable Theming

Extensive customization options for colors, sizes, and styling to match your brand.

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 👨‍💻 Author

**VJNAVEEN2005** - [GitHub](https://github.com/VJNAVEEN2005)

## 🤝 Contributing

Issues and pull requests are welcome! Please check the existing issues before creating new ones.

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/vj-ui-components)
- [GitHub Repository](https://github.com/VJNAVEEN2005/ui-reactpackages)
- [Documentation](./src/components/README.md)
