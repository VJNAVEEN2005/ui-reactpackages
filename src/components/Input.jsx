import React, { useState, forwardRef } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const Input = forwardRef(({
  type = "text",
  placeholder = "",
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  error = false,
  success = false,
  required = false,
  
  // Theming props
  primaryColor = "#2563eb",
  secondaryColor = "#1e40af",
  backgroundColor = "rgba(255, 255, 255, 0.1)",
  textColor = "#1f2937",
  placeholderColor = "#6b7280",
  borderColor = "rgba(255, 255, 255, 0.2)",
  focusBorderColor = "#3b82f6",
  errorColor = "#ef4444",
  successColor = "#10b981",
  
  // Icon and content props
  leftIcon = null,
  rightIcon = null,
  leftContent = null,
  rightContent = null,
  iconColor = "#6b7280",
  
  // Styling props
  size = "md", // "sm", "md", "lg"
  variant = "default", // "default", "filled", "outlined", "glassmorphism"
  borderRadius = "12px",
  className = "",
  
  // Input specific props
  showPasswordToggle = false,
  label = "",
  helperText = "",
  maxLength,
  autoComplete,
  autoFocus = false,
  readOnly = false,
  
  ...rest
}, ref) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle focus
  const handleFocus = (e) => {
    setFocused(true);
    if (onFocus) onFocus(e);
  };

  // Handle blur
  const handleBlur = (e) => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Get input type (handle password toggle)
  const getInputType = () => {
    if (type === "password" && showPasswordToggle) {
      return showPassword ? "text" : "password";
    }
    return type;
  };

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
      border: `1px solid ${error ? errorColor : success ? successColor : focused ? focusBorderColor : borderColor}`,
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
          boxShadow: focused ? `0 0 0 3px ${focusBorderColor}20` : "none",
        };
      case "outlined":
        return {
          ...baseStyles,
          background: "transparent",
          backdropFilter: "none",
          boxShadow: focused ? `0 0 0 3px ${focusBorderColor}20` : "none",
        };
      case "glassmorphism":
        return {
          ...baseStyles,
          background: `linear-gradient(135deg, ${backgroundColor}, rgba(255, 255, 255, 0.05))`,
          backdropFilter: "blur(10px)",
          boxShadow: focused 
            ? `0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px ${focusBorderColor}40`
            : "0 4px 16px rgba(0, 0, 0, 0.08)",
          border: `1px solid ${error ? errorColor : success ? successColor : focused ? focusBorderColor : 'rgba(255, 255, 255, 0.2)'}`,
        };
      default:
        return {
          ...baseStyles,
          background: "#ffffff",
          boxShadow: focused 
            ? `0 0 0 3px ${focusBorderColor}20, 0 2px 8px rgba(0, 0, 0, 0.1)`
            : "0 1px 3px rgba(0, 0, 0, 0.1)",
        };
    }
  };

  // Get container styles
  const getContainerStyles = () => {
    const sizeStyles = getSizeStyles();
    const variantStyles = getVariantStyles();

    return {
      ...variantStyles,
      display: "flex",
      alignItems: "center",
      position: "relative",
      cursor: disabled ? "not-allowed" : "text",
      opacity: disabled ? 0.6 : 1,
      padding: sizeStyles.padding,
      minHeight: sizeStyles.minHeight,
    };
  };

  // Get input styles
  const getInputStyles = () => {
    const sizeStyles = getSizeStyles();
    
    return {
      background: "transparent",
      border: "none",
      outline: "none",
      flex: 1,
      color: disabled ? placeholderColor : textColor,
      fontSize: sizeStyles.fontSize,
      fontFamily: "inherit",
      padding: 0,
      margin: 0,
      "::placeholder": {
        color: placeholderColor,
        opacity: 0.7,
      },
    };
  };

  // Get icon/content wrapper styles
  const getIconWrapperStyles = (position) => ({
    display: "flex",
    alignItems: "center",
    color: iconColor,
    marginLeft: position === "right" ? "8px" : "0",
    marginRight: position === "left" ? "8px" : "0",
    flexShrink: 0,
  });

  return (
    <div style={{ width: "100%" }} className={className}>
      {/* Label */}
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "6px",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: textColor,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          {label}
          {required && (
            <span style={{ color: errorColor, marginLeft: "2px" }}>*</span>
          )}
        </label>
      )}

      {/* Input Container */}
      <div
        style={getContainerStyles()}
        onClick={() => {
          if (!disabled && ref?.current) {
            ref.current.focus();
          }
        }}
      >
        {/* Left Icon/Content */}
        {(leftIcon || leftContent) && (
          <div style={getIconWrapperStyles("left")}>
            {leftIcon || leftContent}
          </div>
        )}

        {/* Input Element */}
        <input
          ref={ref}
          type={getInputType()}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          readOnly={readOnly}
          style={getInputStyles()}
          {...rest}
        />

        {/* Password Toggle */}
        {type === "password" && showPasswordToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              color: iconColor,
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
            {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
          </button>
        )}

        {/* Right Icon/Content */}
        {(rightIcon || rightContent) && !showPasswordToggle && (
          <div style={getIconWrapperStyles("right")}>
            {rightIcon || rightContent}
          </div>
        )}
      </div>

      {/* Helper Text / Error Message */}
      {(helperText || error) && (
        <div
          style={{
            marginTop: "6px",
            fontSize: "0.75rem",
            color: error ? errorColor : success ? successColor : placeholderColor,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          {typeof error === "string" ? error : helperText}
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
