# React UI Components

A comprehensive collection of beautiful, customizable React UI components including versatile navigation, form inputs, loading states, tagging systems, and skeleton placeholders.

## Components

### Navbar Component
A powerful navigation component that supports both **sidebar** and **top navigation** layouts with seamless switching, dropdown support, glassmorphism design, and smooth animations.

### Input Component
A feature-rich input component with icon support, multiple variants, custom content areas, and beautiful theming options including glassmorphism effects.

### Search Component
An intelligent search component with autocomplete, suggestions, recent searches, and trending searches functionality.

### Modal Component
A flexible modal dialog component with multiple variants, animations, and customizable actions.

### Loader Component
An advanced loading component with automatic progress counting, multiple animation variants, and manual progress control.

### Tags Component
A powerful tagging system with editable modes, predefined collections, and extensive customization options.

### Skeleton Component
Loading placeholder components with multiple shapes, animations, and predefined layouts for different content types.

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
- 🎨 **Multiple Variants** - Default, filled, outlined, and glassmorphism styles
- 🔢 **Icon Support** - Left and right icon placement with custom content
- 📏 **Size Options** - Small, medium, and large size variants
- 🔒 **Password Toggle** - Built-in show/hide password functionality
- ✅ **Validation States** - Error, success, and helper text support
- 🎯 **TypeScript Support** - Full TypeScript definitions included
- 🚀 **Performance** - Lightweight and optimized
- 🎨 **Fully Customizable** - Colors, borders, theming, and behavior

### Search Features
- 🔍 **Smart Autocomplete** - Intelligent suggestions as you type
- 📝 **Recent Searches** - Remember and display recent search terms
- 🔥 **Trending Searches** - Show popular or trending search terms
- ⚡ **Debounced Input** - Optimized performance with configurable debouncing
- 🎨 **Multiple Variants** - Same styling options as Input component
- 📱 **Mobile Optimized** - Touch-friendly interface

### Modal Features
- 🎭 **Multiple Variants** - Default, glassmorphism, minimal, and card styles
- 📐 **Flexible Sizing** - From xs to full-screen modes
- ✨ **Rich Animations** - Fade, slide, and scale entrance/exit animations
- 🎯 **Smart Positioning** - Centered, full-screen, or custom positioning
- ⌨️ **Keyboard Support** - ESC to close, focus management
- 🔒 **Backdrop Control** - Configurable backdrop click behavior

### Loader Features
- 🔄 **Automatic Progress** - Self-incrementing progress with customizable duration
- 🎛️ **Manual Control** - Set progress manually for real async operations
- 🎨 **Multiple Variants** - Circular, linear, spinner, and dots animations
- 📊 **Progress Display** - Optional percentage counter
- 🎯 **Completion Callbacks** - Execute functions when loading completes
- 🎨 **Customizable Styling** - Multiple sizes, colors, and animations

### Tags Features
- ✏️ **Editable Mode** - Add and remove tags dynamically
- 🎨 **Multiple Styles** - 4 variants × 7 colors × 3 sizes = 84 combinations
- 📦 **Predefined Collections** - Ready-to-use tag sets (skills, categories, etc.)
- 🎯 **Click Handlers** - Make tags interactive and clickable
- 🔢 **Max Limits** - Control maximum number of tags
- ⌨️ **Keyboard Support** - Enter to add, Escape to cancel

### Skeleton Features
- 🦴 **Multiple Shapes** - Text, rectangular, circular, and rounded variants
- ✨ **Animation Types** - Pulse, wave, or static animations
- 📐 **Predefined Layouts** - Card, table, list, profile, and image skeletons
- 📱 **Responsive Design** - Adapts to different screen sizes
- 🌙 **Dark Mode** - Automatic dark theme support
- 🔧 **Highly Customizable** - Custom dimensions, styles, and animations

## Installation

```bash
npm install vj-navbar
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom react-router-dom @tabler/icons-react
```

## Quick Start

### Import Components
```jsx
import { 
  Navbar, 
  Input, 
  Search, 
  Modal, 
  Loader, 
  Tags, 
  Skeleton,
  SkeletonCard,
  SkeletonTable,
  SkeletonList,
  TagCollections 
} from 'vj-navbar';
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

## Loader Component Usage

### Automatic Progress Loader
```jsx
import { Loader } from 'vj-navbar';

// Basic automatic progress
<Loader
  duration={3000}
  variant="circular"
  size="medium"
  color="#3b82f6"
  onComplete={() => console.log('Loading complete!')}
>
  Loading your content...
</Loader>

// Different variants
<Loader variant="linear" duration={2000} color="#10b981">
  Processing data...
</Loader>

<Loader variant="spinner" size="large" color="#f59e0b">
  Syncing files...
</Loader>

<Loader variant="dots" color="#ec4899">
  Connecting...
</Loader>
```

### Manual Progress Control
```jsx
const [uploadProgress, setUploadProgress] = useState(0);

// Simulate file upload
const simulateUpload = () => {
  const interval = setInterval(() => {
    setUploadProgress(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        return 100;
      }
      return prev + 10;
    });
  }, 500);
};

return (
  <div>
    <button onClick={simulateUpload}>Start Upload</button>
    <Loader
      progress={uploadProgress}
      variant="linear"
      showPercentage={true}
      color="#3b82f6"
    >
      Uploading file: {uploadProgress}%
    </Loader>
  </div>
);
```

## Tags Component Usage

### Basic Tags
```jsx
import { Tags, TagCollections } from 'vj-navbar';

// Read-only tags
<Tags
  tags={['JavaScript', 'React', 'TypeScript']}
  variant="default"
  color="blue"
  size="medium"
  removable={false}
/>

// Using predefined collections
<Tags 
  tags={TagCollections.skills.slice(0, 4)} 
  color="green" 
  variant="filled"
/>
```

### Editable Tags
```jsx
const [skills, setSkills] = useState(['JavaScript', 'React']);

const handleAddTag = (tag) => {
  if (!skills.includes(tag)) {
    setSkills([...skills, tag]);
  }
};

const handleRemoveTag = (tagToRemove) => {
  setSkills(skills.filter(tag => tag !== tagToRemove));
};

return (
  <Tags
    tags={skills}
    onTagAdd={handleAddTag}
    onTagRemove={handleRemoveTag}
    editable={true}
    maxTags={10}
    placeholder="Add a skill..."
    variant="outlined"
    color="purple"
    size="medium"
  />
);
```

### Interactive Tags
```jsx
const [selectedTags, setSelectedTags] = useState([]);

const handleTagClick = (tag) => {
  if (selectedTags.includes(tag)) {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  } else {
    setSelectedTags([...selectedTags, tag]);
  }
};

return (
  <Tags
    tags={TagCollections.categories}
    onTagClick={handleTagClick}
    clickable={true}
    variant={selectedTags.length > 0 ? "filled" : "outlined"}
    color="blue"
  />
);
```

## Skeleton Component Usage

### Basic Skeletons
```jsx
import { Skeleton } from 'vj-navbar';

// Different shapes
<Skeleton variant="text" width="100%" />
<Skeleton variant="text" lines={3} />
<Skeleton variant="rectangular" width="300px" height="200px" />
<Skeleton variant="circular" width="60px" height="60px" />

// Different animations
<Skeleton variant="rectangular" animation="pulse" width="100%" height="100px" />
<Skeleton variant="rectangular" animation="wave" width="100%" height="100px" />
<Skeleton variant="rectangular" animation="none" width="100%" height="100px" />
```

### Predefined Layouts
```jsx
import { 
  SkeletonCard, 
  SkeletonTable, 
  SkeletonList, 
  SkeletonProfile,
  SkeletonImage 
} from 'vj-navbar';

// Card skeleton
<SkeletonCard showAvatar={true} lines={3} />

// Table skeleton
<SkeletonTable rows={5} columns={4} showHeader={true} />

// List skeleton
<SkeletonList items={5} showAvatar={true} showAction={true} />

// Profile skeleton
<SkeletonProfile />

// Image skeleton
<SkeletonImage width="400px" height="250px" />
```

### Loading State Pattern
```jsx
const [isLoading, setIsLoading] = useState(true);
const [data, setData] = useState(null);

useEffect(() => {
  // Simulate API call
  setTimeout(() => {
    setData({ name: 'John Doe', email: 'john@example.com' });
    setIsLoading(false);
  }, 2000);
}, []);

return (
  <div>
    {isLoading ? (
      <SkeletonCard showAvatar={true} lines={2} />
    ) : (
      <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <h3>{data.name}</h3>
        <p>{data.email}</p>
      </div>
    )}
  </div>
);
```

## Search Component Usage

### Basic Search
```jsx
import { Search } from 'vj-navbar';

const [searchValue, setSearchValue] = useState('');
const suggestions = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

<Search
  placeholder="Search frameworks..."
  value={searchValue}
  onChange={setSearchValue}
  suggestions={suggestions}
  onSelect={(item) => console.log('Selected:', item)}
  variant="glassmorphism"
  size="lg"
/>
```

### Advanced Search with Categories
```jsx
const searchSuggestions = [
  { title: 'React', description: 'A JavaScript library for building user interfaces', category: 'Frontend' },
  { title: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8', category: 'Backend' },
  { title: 'MongoDB', description: 'Document database with high performance', category: 'Database' }
];

<Search
  placeholder="Search technologies..."
  suggestions={searchSuggestions}
  recentSearches={['React hooks', 'TypeScript']}
  trendingSearches={['Next.js', 'Tailwind CSS']}
  showRecentSearches={true}
  showTrendingSearches={true}
  maxResults={10}
  debounceMs={300}
/>
```

## Modal Component Usage

### Basic Modal
```jsx
import { Modal } from 'vj-navbar';

const [isModalOpen, setIsModalOpen] = useState(false);

<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Confirm Action"
  size="md"
  variant="default"
>
  <p>Are you sure you want to perform this action?</p>
</Modal>
```

### Advanced Modal with Custom Actions
```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onConfirm={handleConfirm}
  onCancel={() => setIsOpen(false)}
  title="Delete Item"
  confirmText="Delete"
  cancelText="Cancel"
  showConfirmButton={true}
  showCancelButton={true}
  confirmButtonVariant="primary"
  size="lg"
  variant="glassmorphism"
  enterAnimation="slideUp"
  exitAnimation="fade"
>
  <div>
    <p>This action cannot be undone. Are you sure?</p>
    <div style={{ marginTop: '1rem', padding: '1rem', background: '#fef2f2', borderRadius: '8px' }}>
      <strong>Warning:</strong> This will permanently delete the item.
    </div>
  </div>
</Modal>
```
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

### Loader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress` | `number \| null` | `null` | Manual progress (0-100). If null, auto-progresses |
| `duration` | `number` | `3000` | Duration in ms for auto-progress |
| `autoStart` | `boolean` | `true` | Whether to start auto-progress immediately |
| `onComplete` | `function` | `() => {}` | Callback when progress reaches 100% |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size variant |
| `variant` | `'circular' \| 'linear' \| 'spinner' \| 'dots'` | `'circular'` | Animation type |
| `showPercentage` | `boolean` | `true` | Show percentage text |
| `color` | `string` | `'#3b82f6'` | Primary color |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | - | Loading message content |

### Tags Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tags` | `string[]` | `[]` | Array of tag strings |
| `onTagAdd` | `function` | `() => {}` | Called when tag is added |
| `onTagRemove` | `function` | `() => {}` | Called when tag is removed |
| `onTagClick` | `function` | `() => {}` | Called when tag is clicked |
| `editable` | `boolean` | `false` | Enable add/edit functionality |
| `removable` | `boolean` | `true` | Show remove buttons |
| `clickable` | `boolean` | `false` | Make tags clickable |
| `maxTags` | `number \| null` | `null` | Maximum number of tags |
| `placeholder` | `string` | `'Add a tag...'` | Input placeholder |
| `variant` | `'default' \| 'outlined' \| 'filled' \| 'minimal'` | `'default'` | Style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size variant |
| `color` | `'blue' \| 'green' \| 'red' \| 'yellow' \| 'purple' \| 'pink' \| 'gray'` | `'blue'` | Color scheme |
| `className` | `string` | `''` | Additional CSS classes |

### Skeleton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'text' \| 'rectangular' \| 'circular' \| 'rounded'` | `'text'` | Shape variant |
| `width` | `string` | `'100%'` | CSS width value |
| `height` | `string` | `'auto'` | CSS height value |
| `lines` | `number` | `1` | Number of text lines (text variant only) |
| `animation` | `'pulse' \| 'wave' \| 'none'` | `'pulse'` | Animation type |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `CSSProperties` | `{}` | Inline styles |

### Search Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `''` | Placeholder text |
| `value` | `string` | - | Controlled input value |
| `onChange` | `function` | - | Value change handler |
| `onSelect` | `function` | - | Item selection handler |
| `onSearch` | `function` | - | Search submit handler |
| `suggestions` | `(string \| SearchSuggestion)[]` | `[]` | Search suggestions |
| `recentSearches` | `string[]` | `[]` | Recent search terms |
| `trendingSearches` | `(string \| SearchSuggestion)[]` | `[]` | Trending searches |
| `showRecentSearches` | `boolean` | `true` | Show recent searches section |
| `showTrendingSearches` | `boolean` | `true` | Show trending searches section |
| `showSuggestions` | `boolean` | `true` | Show suggestions dropdown |
| `maxResults` | `number` | `10` | Maximum results to show |
| `enableAutocomplete` | `boolean` | `true` | Enable autocomplete functionality |
| `debounceMs` | `number` | `300` | Debounce delay in milliseconds |
| `clearOnSelect` | `boolean` | `false` | Clear input after selection |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `variant` | `'default' \| 'filled' \| 'outlined' \| 'glassmorphism'` | `'default'` | Style variant |
| `leftIcon` | `ReactNode` | - | Left icon component |
| `className` | `string` | `''` | Additional CSS classes |

### Modal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Whether modal is open |
| `onClose` | `function` | - | Close handler |
| `onConfirm` | `function` | - | Confirm button handler |
| `onCancel` | `function` | - | Cancel button handler |
| `title` | `string` | - | Modal title |
| `children` | `ReactNode` | - | Modal content |
| `footer` | `ReactNode` | - | Custom footer content |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Modal size |
| `variant` | `'default' \| 'glassmorphism' \| 'minimal' \| 'card'` | `'default'` | Style variant |
| `closeOnBackdropClick` | `boolean` | `true` | Close on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Close on ESC key |
| `showCloseButton` | `boolean` | `true` | Show close button |
| `showConfirmButton` | `boolean` | `false` | Show confirm button |
| `showCancelButton` | `boolean` | `false` | Show cancel button |
| `confirmText` | `string` | `'Confirm'` | Confirm button text |
| `cancelText` | `string` | `'Cancel'` | Cancel button text |
| `enterAnimation` | `'fade' \| 'fadeScale' \| 'slideUp' \| 'slideDown' \| 'slideLeft' \| 'slideRight'` | `'fade'` | Enter animation |
| `exitAnimation` | `'fade' \| 'fadeScale' \| 'slideUp' \| 'slideDown' \| 'slideLeft' \| 'slideRight'` | `'fade'` | Exit animation |
| `centered` | `boolean` | `true` | Center modal vertically |
| `fullScreen` | `boolean` | `false` | Full screen mode |
| `scrollable` | `boolean` | `true` | Allow content scrolling |
| `className` | `string` | `''` | Additional CSS classes |

## Predefined Collections

### TagCollections
```jsx
import { TagCollections } from 'vj-navbar';

// Available collections
TagCollections.skills      // ['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML', 'TypeScript']
TagCollections.categories  // ['Work', 'Personal', 'Important', 'Urgent', 'Draft']
TagCollections.priorities  // ['High', 'Medium', 'Low', 'Critical']
TagCollections.status      // ['Active', 'Inactive', 'Pending', 'Completed', 'In Progress']
```

### Skeleton Layout Components

#### SkeletonCard Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showAvatar` | `boolean` | `true` | Show avatar placeholder |
| `lines` | `number` | `3` | Number of content lines |
| `className` | `string` | `''` | Additional CSS classes |

#### SkeletonTable Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rows` | `number` | `5` | Number of data rows |
| `columns` | `number` | `4` | Number of columns |
| `showHeader` | `boolean` | `true` | Show header row |
| `className` | `string` | `''` | Additional CSS classes |

#### SkeletonList Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `number` | `5` | Number of list items |
| `showAvatar` | `boolean` | `true` | Show avatar for each item |
| `showAction` | `boolean` | `true` | Show action button placeholder |
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

### Loading States
**Loader Component:**
- **Automatic Mode**: Self-incrementing progress with customizable duration
- **Manual Mode**: Perfect for tracking real async operations like file uploads
- **Multiple Animations**: Choose from circular, linear, spinner, or dots variants
- **Progress Display**: Optional percentage counter with completion callbacks

**Skeleton Component:**
- **Shape Variants**: Text lines, rectangles, circles, and rounded rectangles
- **Animation Types**: Smooth pulse, flowing wave, or static placeholders
- **Predefined Layouts**: Ready-made skeletons for cards, tables, lists, profiles, and images
- **Responsive**: Automatically adapts to container sizes

### Tagging System
**Tags Component:**
- **Editable Mode**: Add tags by typing and pressing Enter
- **Visual Variants**: 4 different styles (default, outlined, filled, minimal)
- **Color Schemes**: 7 color options for different categorization needs
- **Interactive Features**: Click handlers, removal controls, maximum limits
- **Predefined Collections**: Common tag sets for skills, categories, priorities, and status

### Search & Discovery
**Search Component:**
- **Smart Suggestions**: Real-time filtering of suggestion lists
- **Recent Searches**: Remembers and displays recent search terms
- **Trending Searches**: Showcase popular or recommended searches
- **Debounced Input**: Optimized performance with configurable delay
- **Rich Suggestions**: Support for objects with titles, descriptions, and categories

### Modal System
**Modal Component:**
- **Flexible Sizing**: From compact dialogs to full-screen overlays
- **Animation Library**: Multiple entrance and exit animations
- **Smart Positioning**: Automatic centering with overflow handling
- **Accessibility**: Keyboard navigation, focus management, and screen reader support
- **Action Buttons**: Configurable confirm/cancel buttons with custom styling

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
- **Loading Components**: Scale appropriately across device sizes
- **Tags**: Wrap naturally on smaller screens
- **Modals**: Responsive sizing with mobile-optimized layouts
- **Skeletons**: Maintain aspect ratios across breakpoints

### Mobile Support
**Top Layout Mobile Features:**
- Hamburger menu button appears on mobile
- Full-screen dropdown menu
- Touch-optimized button sizes
- Automatic menu closure on navigation

**Component Mobile Optimizations:**
- Touch-friendly interactive elements
- Appropriate sizing for finger navigation
- Swipe-friendly animations
- Reduced complexity on smaller screens

### Accessibility
- Keyboard navigation support
- Focus indicators and management
- Screen reader friendly labels
- High contrast support
- ARIA attributes where appropriate
- Semantic HTML structure

### Performance Features
- **Debounced Search**: Reduces API calls and improves responsiveness
- **Lazy Loading**: Skeleton components reduce perceived loading time
- **Optimized Animations**: Hardware-accelerated CSS animations
- **Minimal Bundle Size**: Tree-shakeable exports
- **Memory Efficient**: Proper cleanup of timers and event listeners

## Common Patterns

### Loading State Management
```jsx
const [isLoading, setIsLoading] = useState(true);
const [data, setData] = useState(null);

// Show skeleton while loading
{isLoading ? (
  <SkeletonCard lines={3} />
) : (
  <Card data={data} />
)}

// Show progress for operations
<Loader 
  progress={uploadProgress} 
  variant="linear"
  onComplete={() => setUploading(false)}
>
  Uploading... {uploadProgress}%
</Loader>
```

### Tag Management
```jsx
const [tags, setTags] = useState([]);

const handleAddTag = (tag) => {
  if (!tags.includes(tag) && tags.length < 10) {
    setTags([...tags, tag]);
  }
};

const handleRemoveTag = (tagToRemove) => {
  setTags(tags.filter(tag => tag !== tagToRemove));
};

<Tags
  tags={tags}
  onTagAdd={handleAddTag}
  onTagRemove={handleRemoveTag}
  editable={true}
  maxTags={10}
/>
```

### Search Integration
```jsx
const [searchTerm, setSearchTerm] = useState('');
const [suggestions, setSuggestions] = useState([]);

const handleSearch = async (term) => {
  const results = await api.search(term);
  setSuggestions(results);
};

<Search
  value={searchTerm}
  onChange={setSearchTerm}
  onSearch={handleSearch}
  suggestions={suggestions}
  debounceMs={300}
/>
```

## Styling

All components use modern CSS with:

### Design System
- **Consistent Color Palette**: Semantic color naming across all components
- **Typography Scale**: Harmonious font sizes and weights
- **Spacing System**: Consistent margins and padding using CSS custom properties
- **Border Radius**: Unified rounding for cohesive appearance
- **Shadow System**: Layered shadows for depth and hierarchy

### CSS Architecture
- **CSS Custom Properties**: Easy theming and customization
- **Responsive Design**: Mobile-first approach with breakpoint-based adaptations
- **Dark Mode Support**: Automatic dark theme detection and adaptation
- **Animation System**: Smooth, performant CSS animations
- **Accessibility**: High contrast support and reduced motion preferences

### Customization Options
1. **CSS Custom Properties**: Override default values
```css
:root {
  --loader-primary-color: #your-color;
  --tags-border-radius: 8px;
  --skeleton-animation-duration: 1.5s;
}
```

2. **Component Props**: Direct styling through props
```jsx
<Loader color="#custom-color" />
<Tags variant="filled" color="purple" />
<Skeleton animation="wave" />
```

3. **CSS Classes**: Add custom classes for advanced styling
```jsx
<Tags className="my-custom-tags" />
<Modal className="branded-modal" />
```

4. **Inline Styles**: Direct style objects for specific needs
```jsx
<Skeleton style={{ borderRadius: '16px', opacity: 0.7 }} />
```

### Theme Integration
The components are designed to integrate seamlessly with popular design systems:
- **Material Design**: Compatible color schemes and elevations
- **Tailwind CSS**: Easy integration with utility classes
- **Chakra UI**: Similar API patterns and theming approach
- **Custom Design Systems**: Flexible enough for any brand requirements

## Requirements

- **React**: 16.8+ (for hooks support)
- **React Router DOM**: 6.0+ (for navigation components)
- **Tabler Icons React**: 2.0+ (for icon components)
- **Modern Browsers**: Support for CSS custom properties and flexbox

### Optional Dependencies
- **TypeScript**: Full type definitions included
- **CSS Preprocessors**: SCSS/Less support for advanced styling
- **Build Tools**: Compatible with Webpack, Vite, Create React App

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

### Progressive Enhancement
- **Core Functionality**: Works in all supported browsers
- **Advanced Features**: Enhanced experience in modern browsers
- **Graceful Degradation**: Fallbacks for older browser versions

## Performance

### Bundle Size
- **Tree Shakeable**: Import only the components you need
- **Optimized CSS**: Minimal styles with efficient selectors
- **No External Dependencies**: Reduces bundle bloat
- **Gzip Friendly**: Highly compressible code

### Runtime Performance
- **Virtual DOM Optimized**: Minimal re-renders
- **Hardware Acceleration**: CSS animations use GPU when available
- **Memory Efficient**: Proper cleanup of timers and event listeners
- **Lazy Loading**: Skeleton components improve perceived performance

### Best Practices
- Import only needed components: `import { Loader } from 'vj-navbar'`
- Use skeleton components for loading states
- Implement proper error boundaries
- Optimize re-renders with React.memo when needed

## Requirements

- React 16.8+ (for hooks)
- React Router DOM 6.0+ (for navigation)
- Tabler Icons React 2.0+ (for icons)

## License

MIT License - feel free to use in personal and commercial projects.

## Contributing

We welcome contributions! Please feel free to submit:

- 🐛 **Bug Reports**: Help us identify and fix issues
- 💡 **Feature Requests**: Suggest new components or enhancements
- 🔧 **Pull Requests**: Contribute code improvements
- 📖 **Documentation**: Improve guides and examples
- 🎨 **Design Feedback**: UI/UX suggestions and improvements

### Development Setup
```bash
# Clone the repository
git clone https://github.com/VJNAVEEN2005/ui-reactpackages.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Component Guidelines
- Follow React hooks patterns
- Include TypeScript definitions
- Add comprehensive props documentation
- Ensure accessibility compliance
- Include example usage
- Write unit tests

## Changelog

### Version 2.3.0
- ✅ Added Loader component with automatic progress
- ✅ Added Tags component with editing capabilities
- ✅ Added Skeleton component with predefined layouts
- ✅ Enhanced TypeScript definitions
- ✅ Improved documentation and examples
- ✅ Added new demo showcase

### Previous Versions
- **2.2.0**: Enhanced Modal and Search components
- **2.1.0**: Added Input component variants
- **2.0.0**: Major redesign with glassmorphism effects
- **1.x.x**: Initial Navbar component releases

## Roadmap

### Upcoming Features
- 🔄 **Pagination Component**: Table and list pagination
- 📊 **Chart Components**: Basic data visualization
- 🗂️ **Tabs Component**: Tabbed interface navigation
- 🎚️ **Slider Component**: Range and value sliders
- 📅 **Date Picker**: Calendar and date selection
- 🎨 **Theme Provider**: Centralized theme management

### Community Requests
- 📱 **Mobile Components**: Touch-optimized mobile components
- 🌐 **Internationalization**: Multi-language support
- 🎭 **Animation Library**: Extended animation options
- 📈 **Performance Metrics**: Built-in performance monitoring

## Support

### Documentation
- 📖 **Component Docs**: Comprehensive API reference
- 🎯 **Examples**: Live demos and code samples
- 🎥 **Video Tutorials**: Step-by-step implementation guides
- 📝 **Best Practices**: Recommended usage patterns

### Community
- 💬 **GitHub Discussions**: Community questions and answers
- 🐛 **Issue Tracker**: Bug reports and feature requests
- 📧 **Email Support**: Direct developer contact
- 🌟 **Discord Server**: Real-time community chat

### Resources
- 🚀 **Getting Started Guide**: Quick setup tutorial
- 🔧 **Migration Guide**: Upgrading from previous versions
- 🎨 **Design Resources**: Figma components and design tokens
- 📦 **Starter Templates**: Complete project templates

## Author

**VJ Naveen** - Full Stack Developer
- 🌐 **GitHub**: [@VJNAVEEN2005](https://github.com/VJNAVEEN2005)
- 📧 **Email**: vjnaveen2005@gmail.com
- 🐦 **Twitter**: [@vjnaveen2005](https://twitter.com/vjnaveen2005)
- 💼 **LinkedIn**: [VJ Naveen](https://linkedin.com/in/vjnaveen2005)

### Acknowledgments
- **React Team**: For the amazing React library
- **Tabler Icons**: For the beautiful icon set
- **Community Contributors**: For feedback and contributions
- **Beta Testers**: For helping improve the components

---

**Made with ❤️ for the React community**

*If you find this package useful, please consider giving it a ⭐ on GitHub!*
