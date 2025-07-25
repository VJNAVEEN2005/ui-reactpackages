# React UI Components

A collection of beautiful, customizable React UI components including versatile navigation with dual layout support and stylish input fields with extensive customization options.

## Components

### Navbar Component
A powerful navigation component that supports both **sidebar** and **top navigation** layouts with seamless switching, dropdown support, glassmorphism design, and smooth animations.

### Input Component
A feature-rich input component with icon support, multiple variants, custom content areas, and beautiful theming options including glassmorphism effects.

## Features

### Navbar Features
- 🎨 **Dual Layout Support** - Switch between sidebar and top navigation layouts
- 🔄 **Layout Switching** - Seamlessly change layouts with a simple prop
- 📱 **Mobile Responsive** - Automatic mobile menu for top layout
- 🎨 **Glassmorphism Design** - Modern frosted glass effect with backdrop blur
- 🔽 **Dropdown Support** - Nested navigation with smooth animations
- ✨ **Active State Highlighting** - Intelligent current page detection
- 📱 **Collapsible Sidebar** - Space-saving collapsed state for side layout

### Input Features
- � **Multiple Variants** - Default, filled, outlined, and glassmorphism styles
- 🔢 **Icon Support** - Left and right icon placement with custom content
- 📏 **Size Options** - Small, medium, and large size variants
- 🔒 **Password Toggle** - Built-in show/hide password functionality
- ✅ **Validation States** - Error, success, and helper text support
- �🎯 **TypeScript Support** - Full TypeScript definitions included
- 🚀 **Performance** - Lightweight and optimized
- 🎨 **Fully Customizable** - Colors, borders, theming, and behavior

## Installation

```bash
npm install @vjnav/ui-components
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom react-router-dom @tabler/icons-react
```

## Usage

### Sidebar Layout (Default)
```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@vjnav/ui-components';
import { IconHome, IconSettings, IconChart } from '@tabler/icons-react';

const App = () => {
  const topNavItems = [
    { icon: <IconHome />, text: "Dashboard", path: "/" },
    { 
      icon: <IconChart />, 
      text: "Analytics", 
      path: "/analytics",
      children: [
        { icon: <IconChart />, text: "Overview", path: "/analytics/overview" },
        { icon: <IconChart />, text: "Reports", path: "/analytics/reports" },
      ]
    },
  ];

  const bottomNavItems = [
    { icon: <IconSettings />, text: "Settings", path: "/settings" },
  ];

  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh" }}>
        <Navbar
          layout="side"
          primaryColor="#6366f1"
          secondaryColor="#4f46e5"
          heading="My App"
          topdata={topNavItems}
          bottomdata={bottomNavItems}
          iconColor="#e2e8f0"
          textColor="#f1f5f9"
        />
        <div style={{ marginLeft: "280px", padding: "2rem", flex: 1 }}>
          <Routes>
            <Route path="/" element={<div>Dashboard</div>} />
            <Route path="/analytics" element={<div>Analytics</div>} />
            <Route path="/analytics/overview" element={<div>Overview</div>} />
            <Route path="/analytics/reports" element={<div>Reports</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
```

### Top Navigation Layout
```jsx
return (
  <BrowserRouter>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar
        layout="top"
        primaryColor="#6366f1"
        secondaryColor="#4f46e5"
        heading="My App"
        topdata={topNavItems}
        bottomdata={bottomNavItems}
        iconColor="#e2e8f0"
        textColor="#f1f5f9"
        topbarHeight="70px"
        position="fixed"
      />
      <div style={{ marginTop: "70px", padding: "2rem", flex: 1 }}>
        <Routes>
          {/* Your routes */}
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
```

### Dynamic Layout Switching
```jsx
const [layout, setLayout] = useState('side');

const toggleLayout = () => {
  setLayout(layout === 'side' ? 'top' : 'side');
};

return (
  <div>
    <button onClick={toggleLayout}>
      Switch to {layout === 'side' ? 'Top' : 'Side'} Layout
    </button>
    <Navbar layout={layout} {/* other props */} />
  </div>
);
```

## Input Component Usage

### Basic Input
```jsx
import React, { useState } from 'react';
import { Input } from '@vjnav/ui-components';
import { IconUser, IconMail, IconLock } from '@tabler/icons-react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  return (
    <div>
      <Input
        label="Username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
        leftIcon={<IconUser size={18} />}
        required
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        leftIcon={<IconMail size={18} />}
        variant="glassmorphism"
      />
      
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        leftIcon={<IconLock size={18} />}
        showPasswordToggle={true}
        variant="glassmorphism"
      />
    </div>
  );
};
```

### Input with Custom Content
```jsx
import { IconSearch, IconPhone } from '@tabler/icons-react';

// Search with keyboard shortcut
<Input
  placeholder="Search..."
  leftIcon={<IconSearch size={18} />}
  rightContent={
    <span style={{
      padding: '2px 6px',
      background: '#3b82f6',
      color: 'white',
      borderRadius: '4px',
      fontSize: '0.75rem'
    }}>⌘K</span>
  }
/>

// Phone with country code
<Input
  label="Phone Number"
  type="tel"
  placeholder="Your phone number"
  leftContent={
    <div style={{
      padding: '4px 8px',
      background: '#f3f4f6',
      borderRadius: '4px',
      fontSize: '0.875rem'
    }}>+1</div>
  }
  rightIcon={<IconPhone size={18} />}
/>
```

### Input Variants
```jsx
// Different styling variants
<Input placeholder="Default variant" variant="default" />
<Input placeholder="Filled variant" variant="filled" />
<Input placeholder="Outlined variant" variant="outlined" />
<Input placeholder="Glassmorphism variant" variant="glassmorphism" />

// Different sizes
<Input placeholder="Small" size="sm" />
<Input placeholder="Medium" size="md" />
<Input placeholder="Large" size="lg" />
```

### Input States
```jsx
// Success state
<Input
  label="Valid Email"
  value="user@example.com"
  success={true}
  helperText="Perfect! This email is valid."
/>

// Error state
<Input
  label="Required Field"
  error="This field is required"
  placeholder="Enter something..."
/>

// Disabled state
<Input
  label="Disabled"
  disabled={true}
  value="Cannot edit"
/>
```

## Props

### Navbar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layout` | `'side' \| 'top'` | `'side'` | Navigation layout type |
| `position` | `'fixed' \| 'sticky' \| 'relative'` | `'fixed'` | CSS position for the navbar |
| `primaryColor` | `string` | `"#2563eb"` | Primary gradient color |
| `secondaryColor` | `string` | `"#1e40af"` | Secondary gradient color |
| `heading` | `string` | `undefined` | Header text in the navbar |
| `topdata` | `NavItem[]` | `[]` | Top/main navigation items |
| `bottomdata` | `NavItem[]` | `[]` | Bottom navigation items |
| `iconColor` | `string` | `"white"` | Color for icons |
| `textColor` | `string` | `"white"` | Color for text |
| `showToggleButton` | `boolean` | `true` | Show collapse toggle (sidebar only) |
| `showBranding` | `boolean` | `true` | Show heading/branding |
| `sidebarWidth` | `string` | `"280px"` | Width of expanded sidebar |
| `collapsedWidth` | `string` | `"80px"` | Width of collapsed sidebar |
| `topbarHeight` | `string` | `"70px"` | Height of top navigation bar |
| `className` | `string` | `""` | Additional CSS classes |

## NavItem Interface

```typescript
interface NavItem {
  icon: ReactNode;
  text: string;
  path: string;
  children?: NavItem[];
}
```

### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | HTML input type (text, email, password, etc.) |
| `placeholder` | `string` | `''` | Placeholder text |
| `value` | `string` | - | Controlled input value |
| `onChange` | `function` | - | Change event handler |
| `onFocus` | `function` | - | Focus event handler |
| `onBlur` | `function` | - | Blur event handler |
| `disabled` | `boolean` | `false` | Disable the input |
| `error` | `boolean \| string` | `false` | Error state or error message |
| `success` | `boolean` | `false` | Success state styling |
| `required` | `boolean` | `false` | Mark field as required |
| `label` | `string` | - | Input label text |
| `helperText` | `string` | - | Helper text below input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size variant |
| `variant` | `'default' \| 'filled' \| 'outlined' \| 'glassmorphism'` | `'default'` | Styling variant |
| `leftIcon` | `ReactNode` | - | Icon on the left side |
| `rightIcon` | `ReactNode` | - | Icon on the right side |
| `leftContent` | `ReactNode` | - | Custom content on the left |
| `rightContent` | `ReactNode` | - | Custom content on the right |
| `showPasswordToggle` | `boolean` | `false` | Show password visibility toggle |
| `primaryColor` | `string` | `'#2563eb'` | Primary theme color |
| `backgroundColor` | `string` | `'rgba(255, 255, 255, 0.1)'` | Background color |
| `textColor` | `string` | `'#1f2937'` | Text color |
| `borderColor` | `string` | `'rgba(255, 255, 255, 0.2)'` | Border color |
| `focusBorderColor` | `string` | `'#3b82f6'` | Focus border color |
| `errorColor` | `string` | `'#ef4444'` | Error state color |
| `successColor` | `string` | `'#10b981'` | Success state color |
| `iconColor` | `string` | `'#6b7280'` | Icon color |
| `borderRadius` | `string` | `'12px'` | Border radius |
| `className` | `string` | `''` | Additional CSS classes |

## Features in Detail

### Layout Options
**Sidebar Layout:**
- Traditional left sidebar navigation
- Collapsible to icon-only mode
- Glassmorphism design with decorative elements
- Separate top and bottom navigation sections

**Top Navigation Layout:**
- Horizontal navigation bar
- Mobile-responsive with hamburger menu
- Dropdown menus positioned below items
- Center-aligned navigation with left/right branding areas

### Active State Detection
The component automatically detects the current route and highlights the corresponding navigation item with:
- Enhanced background opacity
- Glowing border effect
- Left indicator line (sidebar) or bottom indicator (top nav)
- Scaled and glowing icon
- Enhanced text weight and shadow

### Dropdown Navigation
Support for nested navigation items with:
- Smooth slide-down animations
- Chevron rotation indicators (right arrow for sidebar, down arrow for top nav)
- Smart parent highlighting when child is active
- Collapsible/expandable sections
- Absolute positioning for top nav dropdowns

### Responsive Design
- **Sidebar**: Collapsible sidebar for space saving
- **Top Nav**: Automatic mobile menu on smaller screens
- Smooth width/height transitions
- Touch-friendly interactions
- Breakpoint-based behavior switching

### Mobile Support
**Top Layout Mobile Features:**
- Hamburger menu button appears on mobile
- Full-screen dropdown menu
- Touch-optimized button sizes
- Automatic menu closure on navigation

### Accessibility
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- High contrast support

## Styling

The component uses inline styles for maximum compatibility, but you can override styles by:

1. Using CSS custom properties
2. Wrapping in a container with custom styles
3. Passing custom color props

## Requirements

- React 16.8+ (for hooks)
- React Router DOM 6.0+ (for navigation)
- Tabler Icons React 2.0+ (for icons)

## License

MIT

## Contributing

Issues and pull requests are welcome!

## Author

vjnav
