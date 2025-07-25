import { ReactNode, ChangeEvent, FocusEvent } from 'react';

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

declare const Navbar: React.FC<NavbarProps>;
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
declare const Search: React.ForwardRefExoticComponent<SearchProps & React.RefAttributes<HTMLInputElement>>;

export default Navbar;
export { Navbar, Input, Search };
