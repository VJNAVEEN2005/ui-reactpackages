import React, { useState, useEffect, useRef, forwardRef } from "react";
import { IconSearch, IconX, IconClock, IconTrendingUp, IconArrowRight } from "@tabler/icons-react";

const Search = forwardRef(({
  placeholder = "Search...",
  value = "",
  onChange,
  onSelect,
  onSearch,
  
  // Data sources
  suggestions = [],
  recentSearches = [],
  trendingSearches = [],
  
  // Theming props
  primaryColor = "#2563eb",
  secondaryColor = "#1e40af",
  backgroundColor = "rgba(255, 255, 255, 0.1)",
  textColor = "#1f2937",
  placeholderColor = "#6b7280",
  borderColor = "rgba(255, 255, 255, 0.2)",
  focusBorderColor = "#3b82f6",
  
  // Styling props
  size = "md", // "sm", "md", "lg"
  variant = "default", // "default", "filled", "outlined", "glassmorphism"
  borderRadius = "12px",
  className = "",
  
  // Behavior props
  showRecentSearches = true,
  showTrendingSearches = true,
  showSuggestions = true,
  maxResults = 8,
  enableAutocomplete = true,
  debounceMs = 300,
  clearOnSelect = false,
  
  // Custom content
  leftIcon = <IconSearch size={18} />,
  emptyStateMessage = "No results found",
  recentSearchesTitle = "Recent Searches",
  trendingSearchesTitle = "Trending",
  suggestionsTitle = "Suggestions",
  
  ...rest
}, ref) => {
  const [inputValue, setInputValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchHistory, setSearchHistory] = useState(recentSearches);
  
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const debounceRef = useRef(null);

  // Handle input changes with debouncing
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    debounceRef.current = setTimeout(() => {
      if (inputValue && enableAutocomplete) {
        const filtered = suggestions
          .filter(item => 
            typeof item === 'string' 
              ? item.toLowerCase().includes(inputValue.toLowerCase())
              : item.title?.toLowerCase().includes(inputValue.toLowerCase()) ||
                item.description?.toLowerCase().includes(inputValue.toLowerCase())
          )
          .slice(0, maxResults);
        setFilteredSuggestions(filtered);
      } else {
        setFilteredSuggestions([]);
      }
      
      if (onChange) {
        onChange(inputValue);
      }
    }, debounceMs);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [inputValue, suggestions, enableAutocomplete, maxResults, debounceMs, onChange]);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get size styles
  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return {
          padding: "8px 12px",
          fontSize: "0.875rem",
          minHeight: "36px",
        };
      case "lg":
        return {
          padding: "16px 20px",
          fontSize: "1.125rem",
          minHeight: "56px",
        };
      default: // md
        return {
          padding: "12px 16px",
          fontSize: "1rem",
          minHeight: "44px",
        };
    }
  };

  // Get variant styles
  const getVariantStyles = () => {
    const baseStyles = {
      border: `1px solid ${isOpen ? focusBorderColor : borderColor}`,
      borderRadius: borderRadius,
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      outline: "none",
      width: "100%",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    };

    switch (variant) {
      case "filled":
        return {
          ...baseStyles,
          background: backgroundColor,
          backdropFilter: "none",
          boxShadow: isOpen ? `0 0 0 3px ${focusBorderColor}20` : "none",
        };
      case "outlined":
        return {
          ...baseStyles,
          background: "transparent",
          backdropFilter: "none",
          boxShadow: isOpen ? `0 0 0 3px ${focusBorderColor}20` : "none",
        };
      case "glassmorphism":
        return {
          ...baseStyles,
          background: `linear-gradient(135deg, ${backgroundColor}, rgba(255, 255, 255, 0.05))`,
          backdropFilter: "blur(10px)",
          boxShadow: isOpen 
            ? `0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px ${focusBorderColor}40`
            : "0 4px 16px rgba(0, 0, 0, 0.08)",
          border: `1px solid ${isOpen ? focusBorderColor : 'rgba(255, 255, 255, 0.2)'}`,
        };
      default:
        return {
          ...baseStyles,
          background: "#ffffff",
          boxShadow: isOpen 
            ? `0 0 0 3px ${focusBorderColor}20, 0 2px 8px rgba(0, 0, 0, 0.1)`
            : "0 1px 3px rgba(0, 0, 0, 0.1)",
        };
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  // Handle input focus
  const handleFocus = () => {
    setIsOpen(true);
  };

  // Handle search execution
  const handleSearch = (searchTerm = inputValue) => {
    if (searchTerm.trim()) {
      // Add to search history
      const newHistory = [searchTerm, ...searchHistory.filter(item => item !== searchTerm)].slice(0, 5);
      setSearchHistory(newHistory);
      
      // Call search callback
      if (onSearch) {
        onSearch(searchTerm);
      }
      
      // Clear input if specified
      if (clearOnSelect) {
        setInputValue("");
      }
      
      setIsOpen(false);
    }
  };

  // Handle item selection
  const handleItemSelect = (item) => {
    const searchTerm = typeof item === 'string' ? item : item.title || item.value || '';
    setInputValue(searchTerm);
    
    if (onSelect) {
      onSelect(item);
    }
    
    handleSearch(searchTerm);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    const totalItems = getTotalDropdownItems();
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < totalItems - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : totalItems - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          const selectedItem = getItemAtIndex(highlightedIndex);
          handleItemSelect(selectedItem);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        if (searchRef.current) {
          searchRef.current.blur();
        }
        break;
    }
  };

  // Get total dropdown items count
  const getTotalDropdownItems = () => {
    let count = 0;
    if (inputValue && filteredSuggestions.length > 0) count += filteredSuggestions.length;
    if (!inputValue && showRecentSearches && searchHistory.length > 0) count += searchHistory.length;
    if (!inputValue && showTrendingSearches && trendingSearches.length > 0) count += trendingSearches.length;
    return count;
  };

  // Get item at specific index
  const getItemAtIndex = (index) => {
    let currentIndex = 0;
    
    if (inputValue && filteredSuggestions.length > 0) {
      if (index < filteredSuggestions.length) {
        return filteredSuggestions[index];
      }
      currentIndex += filteredSuggestions.length;
    }
    
    if (!inputValue && showRecentSearches && searchHistory.length > 0) {
      if (index < currentIndex + searchHistory.length) {
        return searchHistory[index - currentIndex];
      }
      currentIndex += searchHistory.length;
    }
    
    if (!inputValue && showTrendingSearches && trendingSearches.length > 0) {
      return trendingSearches[index - currentIndex];
    }
    
    return null;
  };

  // Clear input
  const handleClear = () => {
    setInputValue("");
    setIsOpen(false);
    setHighlightedIndex(-1);
    if (onChange) {
      onChange("");
    }
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  // Render dropdown item
  const renderItem = (item, index, type = "suggestion") => {
    const isHighlighted = index === highlightedIndex;
    const itemText = typeof item === 'string' ? item : item.title || item.value || '';
    const itemDescription = typeof item === 'object' ? item.description : null;
    
    return (
      <div
        key={`${type}-${index}`}
        className="search-dropdown-item"
        style={{
          padding: "12px 16px",
          cursor: "pointer",
          borderRadius: "8px",
          margin: "2px 0",
          background: isHighlighted ? `${primaryColor}10` : "transparent",
          border: isHighlighted ? `1px solid ${primaryColor}30` : "1px solid transparent",
          transition: "all 0.2s ease",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => handleItemSelect(item)}
        onMouseEnter={() => setHighlightedIndex(index)}
      >
        {type === "recent" && <IconClock size={16} style={{ color: placeholderColor }} />}
        {type === "trending" && <IconTrendingUp size={16} style={{ color: primaryColor }} />}
        {type === "suggestion" && leftIcon}
        
        <div style={{ flex: 1 }}>
          <div style={{ 
            color: textColor, 
            fontSize: "0.9rem",
            fontWeight: isHighlighted ? "500" : "400"
          }}>
            {itemText}
          </div>
          {itemDescription && (
            <div style={{ 
              color: placeholderColor, 
              fontSize: "0.8rem",
              marginTop: "2px"
            }}>
              {itemDescription}
            </div>
          )}
        </div>
        
        {isHighlighted && <IconArrowRight size={14} style={{ color: primaryColor }} />}
      </div>
    );
  };

  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();
  
  const containerStyles = {
    ...variantStyles,
    display: "flex",
    alignItems: "center",
    position: "relative",
    cursor: "text",
    padding: sizeStyles.padding,
    minHeight: sizeStyles.minHeight,
  };

  return (
    <div style={{ position: "relative", width: "100%" }} className={className}>
      {/* Search Input Container */}
      <div
        ref={searchRef}
        style={containerStyles}
        onClick={() => {
          if (ref?.current) {
            ref.current.focus();
          }
        }}
      >
        {/* Left Icon */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          color: placeholderColor,
          marginRight: "8px",
          flexShrink: 0
        }}>
          {leftIcon}
        </div>

        {/* Input Element */}
        <input
          ref={ref}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            flex: 1,
            color: textColor,
            fontSize: sizeStyles.fontSize,
            fontFamily: "inherit",
            padding: 0,
            margin: 0,
          }}
          {...rest}
        />

        {/* Clear Button */}
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              color: placeholderColor,
              marginLeft: "8px",
              borderRadius: "4px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "none";
            }}
          >
            <IconX size={16} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 1000,
            marginTop: "4px",
            background: variant === "glassmorphism" 
              ? `linear-gradient(135deg, ${backgroundColor}, rgba(255, 255, 255, 0.05))`
              : "#ffffff",
            backdropFilter: variant === "glassmorphism" ? "blur(10px)" : "none",
            border: `1px solid ${borderColor}`,
            borderRadius: borderRadius,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            maxHeight: "320px",
            overflowY: "auto",
            padding: "8px",
          }}
        >
          {/* Filtered Suggestions */}
          {inputValue && filteredSuggestions.length > 0 && (
            <div>
              {showSuggestions && (
                <div style={{ 
                  padding: "8px 16px 4px", 
                  fontSize: "0.75rem", 
                  fontWeight: "600",
                  color: placeholderColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  {suggestionsTitle}
                </div>
              )}
              {filteredSuggestions.map((item, index) => 
                renderItem(item, index, "suggestion")
              )}
            </div>
          )}

          {/* Recent Searches */}
          {!inputValue && showRecentSearches && searchHistory.length > 0 && (
            <div>
              <div style={{ 
                padding: "8px 16px 4px", 
                fontSize: "0.75rem", 
                fontWeight: "600",
                color: placeholderColor,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                {recentSearchesTitle}
              </div>
              {searchHistory.map((item, index) => 
                renderItem(item, index, "recent")
              )}
            </div>
          )}

          {/* Trending Searches */}
          {!inputValue && showTrendingSearches && trendingSearches.length > 0 && (
            <div>
              <div style={{ 
                padding: "8px 16px 4px", 
                fontSize: "0.75rem", 
                fontWeight: "600",
                color: placeholderColor,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                {trendingSearchesTitle}
              </div>
              {trendingSearches.map((item, index) => 
                renderItem(item, index + (searchHistory.length || 0), "trending")
              )}
            </div>
          )}

          {/* Empty State */}
          {inputValue && filteredSuggestions.length === 0 && (
            <div style={{
              padding: "24px 16px",
              textAlign: "center",
              color: placeholderColor,
              fontSize: "0.9rem"
            }}>
              {emptyStateMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

Search.displayName = "Search";

export default Search;
