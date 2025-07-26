import { ReactNode, ChangeEvent, FocusEvent, CSSProperties } from 'react';

export interface NavItem {
  icon: ReactNode;
  text: string;
  path: string;
  children?: NavItem[];
}

export interface NavbarProps {
  primaryColor?: string;
  secondaryColor?: string;
  heading?: string;
  topdata?: NavItem[];
  bottomdata?: NavItem[];
  iconColor?: string;
  textColor?: string;
  layout?: 'side' | 'top';
  position?: 'fixed' | 'sticky' | 'relative';
  showToggleButton?: boolean;
  showBranding?: boolean;
  sidebarWidth?: string;
  collapsedWidth?: string;
  topbarHeight?: string;
  className?: string;
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean | string;
  success?: boolean;
  required?: boolean;
  
  // Theming props
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  placeholderColor?: string;
  borderColor?: string;
  focusBorderColor?: string;
  errorColor?: string;
  successColor?: string;
  
  // Icon and content props
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  iconColor?: string;
  
  // Styling props
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined' | 'glassmorphism';
  borderRadius?: string;
  className?: string;
  
  // Input specific props
  showPasswordToggle?: boolean;
  label?: string;
  helperText?: string;
  maxLength?: number;
  autoComplete?: string;
  autoFocus?: boolean;
  readOnly?: boolean;
}

export interface SearchSuggestion {
  title?: string;
  description?: string;
  value?: string;
  category?: string;
  metadata?: any;
}

export interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSelect?: (item: string | SearchSuggestion) => void;
  onSearch?: (searchTerm: string) => void;
  
  // Data sources
  suggestions?: (string | SearchSuggestion)[];
  recentSearches?: string[];
  trendingSearches?: (string | SearchSuggestion)[];
  
  // Theming props
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  placeholderColor?: string;
  borderColor?: string;
  focusBorderColor?: string;
  
  // Styling props
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined' | 'glassmorphism';
  borderRadius?: string;
  className?: string;
  
  // Behavior props
  showRecentSearches?: boolean;
  showTrendingSearches?: boolean;
  showSuggestions?: boolean;
  maxResults?: number;
  enableAutocomplete?: boolean;
  debounceMs?: number;
  clearOnSelect?: boolean;
  
  // Custom content
  leftIcon?: ReactNode;
  emptyStateMessage?: string;
  recentSearchesTitle?: string;
  trendingSearchesTitle?: string;
  suggestionsTitle?: string;
}

export interface ModalProps {
  // Basic props
  isOpen?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  
  // Content props
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
  
  // Theming props
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  backdropColor?: string;
  textColor?: string;
  borderColor?: string;
  
  // Size and styling props
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  variant?: 'default' | 'glassmorphism' | 'minimal' | 'card';
  borderRadius?: string;
  className?: string;
  
  // Behavior props
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  showMaximizeButton?: boolean;
  preventBodyScroll?: boolean;
  
  // Animation props
  animationDuration?: number;
  enterAnimation?: 'fade' | 'fadeScale' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
  exitAnimation?: 'fade' | 'fadeScale' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
  
  // Button props
  confirmText?: string;
  cancelText?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonVariant?: 'primary' | 'secondary';
  cancelButtonVariant?: 'primary' | 'secondary';
  
  // Advanced props
  backdrop?: boolean;
  fullScreen?: boolean;
  centered?: boolean;
  scrollable?: boolean;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

export interface LoaderProps {
  // Progress props
  progress?: number | null;
  duration?: number;
  autoStart?: boolean;
  onComplete?: () => void;
  
  // Styling props
  size?: 'small' | 'medium' | 'large';
  variant?: 'circular' | 'linear' | 'spinner' | 'dots';
  showPercentage?: boolean;
  color?: string;
  className?: string;
  
  // Content
  children?: ReactNode;
}

export interface TagsProps {
  // Data props
  tags?: string[];
  onTagAdd?: (tag: string) => void;
  onTagRemove?: (tag: string) => void;
  onTagClick?: (tag: string) => void;
  
  // Behavior props
  editable?: boolean;
  removable?: boolean;
  clickable?: boolean;
  maxTags?: number | null;
  placeholder?: string;
  
  // Styling props
  variant?: 'default' | 'outlined' | 'filled' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'gray';
  className?: string;
}

export interface SkeletonProps {
  // Shape props
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded';
  width?: string;
  height?: string;
  lines?: number;
  
  // Animation props
  animation?: 'pulse' | 'wave' | 'none';
  
  // Styling props
  className?: string;
  style?: CSSProperties;
}

export interface SkeletonCardProps {
  showAvatar?: boolean;
  lines?: number;
  className?: string;
}

export interface SkeletonTableProps {
  rows?: number;
  columns?: number;
  showHeader?: boolean;
  className?: string;
}

export interface SkeletonListProps {
  items?: number;
  showAvatar?: boolean;
  showAction?: boolean;
  className?: string;
}

export interface SkeletonProfileProps {
  className?: string;
}

export interface SkeletonImageProps {
  width?: string;
  height?: string;
  className?: string;
}

export interface TagCollections {
  skills: string[];
  categories: string[];
  priorities: string[];
  status: string[];
}

declare const Navbar: React.FC<NavbarProps>;
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
declare const Search: React.ForwardRefExoticComponent<SearchProps & React.RefAttributes<HTMLInputElement>>;
declare const Modal: React.FC<ModalProps>;
declare const Loader: React.FC<LoaderProps>;
declare const Tags: React.FC<TagsProps>;
declare const Skeleton: React.FC<SkeletonProps>;
declare const SkeletonCard: React.FC<SkeletonCardProps>;
declare const SkeletonTable: React.FC<SkeletonTableProps>;
declare const SkeletonList: React.FC<SkeletonListProps>;
declare const SkeletonProfile: React.FC<SkeletonProfileProps>;
declare const SkeletonImage: React.FC<SkeletonImageProps>;
declare const TagCollections: TagCollections;

export default Navbar;
export { 
  Navbar, 
  Input, 
  Search, 
  Modal, 
  Loader, 
  Tags, 
  TagCollections,
  Skeleton,
  SkeletonCard,
  SkeletonTable,
  SkeletonList,
  SkeletonProfile,
  SkeletonImage
};
