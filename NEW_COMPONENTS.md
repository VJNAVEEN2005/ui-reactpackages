# New Components Documentation

This package now includes three powerful new components: **Loader**, **Tags**, and **Skeleton**. Each component is highly customizable and feature-rich.

## 🔄 Loader Component

A versatile loading component with automatic progress counting and multiple display variants.

### Features
- **Automatic Progress**: Self-incrementing progress with customizable duration
- **Manual Control**: Set progress manually for real async operations
- **Multiple Variants**: Circular, Linear, Spinner, and Dots animations
- **Customizable**: Different sizes, colors, and styles
- **Callbacks**: onComplete callback when loading finishes

### Basic Usage

```jsx
import { Loader } from 'vj-navbar';

// Automatic progress loader
<Loader
  duration={3000}
  variant="circular"
  size="medium"
  color="#3b82f6"
  onComplete={() => console.log('Loading complete!')}
>
  Loading your content...
</Loader>

// Manual progress control
const [progress, setProgress] = useState(0);
<Loader
  progress={progress}
  variant="linear"
  showPercentage={true}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress` | number | null | Manual progress (0-100). If null, auto-progresses |
| `duration` | number | 3000 | Duration in ms for auto-progress |
| `autoStart` | boolean | true | Whether to start auto-progress immediately |
| `onComplete` | function | () => {} | Callback when progress reaches 100% |
| `size` | string | 'medium' | Size: 'small', 'medium', 'large' |
| `variant` | string | 'circular' | Type: 'circular', 'linear', 'spinner', 'dots' |
| `showPercentage` | boolean | true | Show percentage text |
| `color` | string | '#3b82f6' | Primary color |
| `children` | ReactNode | - | Loading message content |

### Variants

- **Circular**: Classic circular progress indicator
- **Linear**: Horizontal progress bar
- **Spinner**: Spinning ring animation
- **Dots**: Bouncing dots animation

## 🏷️ Tags Component

A flexible tagging system with editing capabilities and predefined collections.

### Features
- **Editable Mode**: Add/remove tags dynamically
- **Click Handlers**: Make tags clickable for interactions
- **Multiple Styles**: 4 variants × 7 colors × 3 sizes
- **Max Limits**: Set maximum number of tags
- **Predefined Collections**: Ready-to-use tag sets

### Basic Usage

```jsx
import { Tags, TagCollections } from 'vj-navbar';

// Read-only tags
<Tags
  tags={['JavaScript', 'React', 'CSS']}
  variant="default"
  color="blue"
  removable={false}
/>

// Editable tags
const [tags, setTags] = useState(['Tag 1']);
<Tags
  tags={tags}
  onTagAdd={(tag) => setTags([...tags, tag])}
  onTagRemove={(tag) => setTags(tags.filter(t => t !== tag))}
  editable={true}
  maxTags={10}
  placeholder="Add a tag..."
/>

// Using predefined collections
<Tags tags={TagCollections.skills} />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tags` | string[] | [] | Array of tag strings |
| `onTagAdd` | function | () => {} | Called when tag is added |
| `onTagRemove` | function | () => {} | Called when tag is removed |
| `onTagClick` | function | () => {} | Called when tag is clicked |
| `editable` | boolean | false | Enable add/edit functionality |
| `removable` | boolean | true | Show remove buttons |
| `clickable` | boolean | false | Make tags clickable |
| `maxTags` | number | null | Maximum number of tags |
| `placeholder` | string | "Add a tag..." | Input placeholder |
| `variant` | string | 'default' | Style: 'default', 'outlined', 'filled', 'minimal' |
| `size` | string | 'medium' | Size: 'small', 'medium', 'large' |
| `color` | string | 'blue' | Color: 'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'gray' |

### Predefined Collections

```jsx
import { TagCollections } from 'vj-navbar';

TagCollections.skills     // ['JavaScript', 'React', 'Node.js', ...]
TagCollections.categories // ['Work', 'Personal', 'Important', ...]
TagCollections.priorities // ['High', 'Medium', 'Low', 'Critical']
TagCollections.status     // ['Active', 'Inactive', 'Pending', ...]
```

## 💀 Skeleton Component

Loading placeholders that match your content structure while data loads.

### Features
- **Multiple Shapes**: Text, rectangular, circular, rounded
- **Animation Types**: Pulse, wave, or no animation
- **Predefined Layouts**: Card, table, list, profile, image skeletons
- **Responsive**: Adapts to different screen sizes
- **Dark Mode**: Automatic dark theme support

### Basic Usage

```jsx
import { 
  Skeleton, 
  SkeletonCard, 
  SkeletonTable, 
  SkeletonList,
  SkeletonProfile,
  SkeletonImage 
} from 'vj-navbar';

// Basic skeletons
<Skeleton variant="text" width="100%" />
<Skeleton variant="rectangular" width="300px" height="200px" />
<Skeleton variant="circular" width="50px" height="50px" />

// Multi-line text
<Skeleton variant="text" lines={3} />

// Predefined layouts
<SkeletonCard showAvatar={true} lines={3} />
<SkeletonTable rows={5} columns={4} />
<SkeletonList items={5} showAvatar={true} />
<SkeletonProfile />
<SkeletonImage width="300px" height="200px" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | 'text' | Shape: 'text', 'rectangular', 'circular', 'rounded' |
| `width` | string | '100%' | CSS width value |
| `height` | string | 'auto' | CSS height value |
| `lines` | number | 1 | Number of text lines (text variant only) |
| `animation` | string | 'pulse' | Animation: 'pulse', 'wave', 'none' |
| `className` | string | '' | Additional CSS classes |
| `style` | object | {} | Inline styles |

### Predefined Layouts

#### SkeletonCard
```jsx
<SkeletonCard 
  showAvatar={true}  // Show avatar placeholder
  lines={3}          // Number of content lines
/>
```

#### SkeletonTable
```jsx
<SkeletonTable 
  rows={5}           // Number of data rows
  columns={4}        // Number of columns
  showHeader={true}  // Show header row
/>
```

#### SkeletonList
```jsx
<SkeletonList 
  items={5}          // Number of list items
  showAvatar={true}  // Show avatar for each item
  showAction={true}  // Show action button placeholder
/>
```

## Installation & Import

```jsx
// Import individual components
import { Loader, Tags, Skeleton } from 'vj-navbar';

// Import predefined layouts
import { 
  SkeletonCard, 
  SkeletonTable, 
  SkeletonList,
  SkeletonProfile,
  SkeletonImage,
  TagCollections 
} from 'vj-navbar';
```

## Examples

Visit the demo at `/new-components` route to see all components in action with interactive examples.

### Common Patterns

#### Loading State Management
```jsx
const [isLoading, setIsLoading] = useState(true);

return (
  <div>
    {isLoading ? (
      <SkeletonCard lines={3} />
    ) : (
      <div>Your actual content</div>
    )}
  </div>
);
```

#### Tag Management
```jsx
const [tags, setTags] = useState([]);

const handleTagAdd = (tag) => {
  if (!tags.includes(tag)) {
    setTags([...tags, tag]);
  }
};

const handleTagRemove = (tagToRemove) => {
  setTags(tags.filter(tag => tag !== tagToRemove));
};
```

#### Progress Tracking
```jsx
const [uploadProgress, setUploadProgress] = useState(0);

// During file upload
<Loader
  progress={uploadProgress}
  variant="linear"
  color="#10b981"
>
  Uploading file... {uploadProgress}%
</Loader>
```

## Styling

All components include comprehensive CSS with:
- Responsive design
- Dark mode support
- Customizable CSS variables
- Smooth animations and transitions

The CSS files are automatically imported when you import the components.
