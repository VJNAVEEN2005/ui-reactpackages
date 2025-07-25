import React, { useState, useEffect, useRef } from "react";
import { IconX, IconMaximize, IconMinimize } from "@tabler/icons-react";

const Modal = ({
  // Basic props
  isOpen = false,
  onClose,
  onConfirm,
  onCancel,
  
  // Content props
  title = "",
  children,
  footer,
  
  // Theming props
  primaryColor = "#2563eb",
  secondaryColor = "#1e40af",
  backgroundColor = "rgba(255, 255, 255, 0.95)",
  backdropColor = "rgba(0, 0, 0, 0.5)",
  textColor = "#1f2937",
  borderColor = "rgba(255, 255, 255, 0.2)",
  
  // Size and styling props
  size = "md", // "xs", "sm", "md", "lg", "xl", "full"
  variant = "default", // "default", "glassmorphism", "minimal", "card"
  borderRadius = "16px",
  className = "",
  
  // Behavior props
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  showMaximizeButton = false,
  preventBodyScroll = true,
  
  // Animation props
  animationDuration = 300,
  enterAnimation = "fadeScale", // "fade", "fadeScale", "slideUp", "slideDown", "slideLeft", "slideRight"
  exitAnimation = "fadeScale",
  
  // Button props
  confirmText = "Confirm",
  cancelText = "Cancel",
  showConfirmButton = false,
  showCancelButton = false,
  confirmButtonVariant = "primary",
  cancelButtonVariant = "secondary",
  
  // Advanced props
  backdrop = true,
  fullScreen = false,
  centered = true,
  scrollable = true,
  headerClassName = "",
  bodyClassName = "",
  footerClassName = "",
  
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  // Handle modal open/close
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      if (preventBodyScroll) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (preventBodyScroll) {
        document.body.style.overflow = '';
      }
      const timer = setTimeout(() => setIsVisible(false), animationDuration);
      return () => clearTimeout(timer);
    }
    
    return () => {
      if (preventBodyScroll) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen, preventBodyScroll, animationDuration]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && closeOnEscape && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, closeOnEscape]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current && closeOnBackdropClick) {
      handleClose();
    }
  };

  // Handle close
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Handle confirm
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  // Handle cancel
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  // Toggle maximize
  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  // Get size styles
  const getSizeStyles = () => {
    if (fullScreen || isMaximized) {
      return {
        width: '100vw',
        height: '100vh',
        maxWidth: 'none',
        maxHeight: 'none',
        margin: 0,
        borderRadius: 0,
      };
    }

    switch (size) {
      case "xs":
        return {
          width: '90%',
          maxWidth: '300px',
          maxHeight: '90vh',
        };
      case "sm":
        return {
          width: '90%',
          maxWidth: '400px',
          maxHeight: '90vh',
        };
      case "lg":
        return {
          width: '90%',
          maxWidth: '800px',
          maxHeight: '90vh',
        };
      case "xl":
        return {
          width: '90%',
          maxWidth: '1200px',
          maxHeight: '90vh',
        };
      case "full":
        return {
          width: '95vw',
          height: '95vh',
          maxWidth: 'none',
          maxHeight: 'none',
        };
      default: // md
        return {
          width: '90%',
          maxWidth: '600px',
          maxHeight: '90vh',
        };
    }
  };

  // Get variant styles
  const getVariantStyles = () => {
    const baseStyles = {
      borderRadius: fullScreen || isMaximized ? 0 : borderRadius,
      boxShadow: variant === 'minimal' 
        ? '0 4px 20px rgba(0, 0, 0, 0.15)'
        : '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: variant === 'glassmorphism' 
        ? `1px solid ${borderColor}`
        : 'none',
    };

    switch (variant) {
      case "glassmorphism":
        return {
          ...baseStyles,
          background: `linear-gradient(135deg, ${backgroundColor}, rgba(255, 255, 255, 0.8))`,
          backdropFilter: 'blur(20px)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)',
        };
      case "minimal":
        return {
          ...baseStyles,
          background: '#ffffff',
          border: '1px solid #e5e7eb',
        };
      case "card":
        return {
          ...baseStyles,
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
        };
      default:
        return {
          ...baseStyles,
          background: backgroundColor,
        };
    }
  };

  // Get animation styles
  const getAnimationStyles = () => {
    const duration = `${animationDuration}ms`;
    const animation = isOpen ? enterAnimation : exitAnimation;
    
    const animations = {
      fade: {
        opacity: isOpen ? 1 : 0,
        transition: `opacity ${duration} ease-in-out`,
      },
      fadeScale: {
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'scale(1)' : 'scale(0.95)',
        transition: `all ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
      },
      slideUp: {
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
        transition: `all ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
      },
      slideDown: {
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
        transition: `all ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
      },
      slideLeft: {
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
        transition: `all ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
      },
      slideRight: {
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
        transition: `all ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
      },
    };

    return animations[animation] || animations.fadeScale;
  };

  // Get button styles
  const getButtonStyles = (buttonVariant) => {
    const baseStyles = {
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    };

    switch (buttonVariant) {
      case "primary":
        return {
          ...baseStyles,
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
          color: 'white',
        };
      case "secondary":
        return {
          ...baseStyles,
          background: 'transparent',
          color: textColor,
          border: `1px solid ${borderColor}`,
        };
      default:
        return baseStyles;
    }
  };

  if (!isVisible) return null;

  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();
  const animationStyles = getAnimationStyles();

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1050,
        display: 'flex',
        alignItems: centered ? 'center' : 'flex-start',
        justifyContent: 'center',
        padding: centered ? '20px' : '20px 20px 0',
        background: backdrop ? backdropColor : 'transparent',
        opacity: isOpen ? 1 : 0,
        transition: `opacity ${animationDuration}ms ease-in-out`,
        overflow: scrollable ? 'auto' : 'hidden',
      }}
      className={`ui-modal-backdrop ${className}`}
      {...rest}
    >
      <div
        ref={modalRef}
        style={{
          ...sizeStyles,
          ...variantStyles,
          ...animationStyles,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          color: textColor,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          overflow: 'hidden',
        }}
        className="ui-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showCloseButton || showMaximizeButton) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              borderBottom: variant === 'minimal' ? '1px solid #e5e7eb' : 'none',
              backgroundColor: variant === 'glassmorphism' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            }}
            className={`ui-modal-header ${headerClassName}`}
          >
            <h2
              style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: '600',
                color: textColor,
                flex: 1,
              }}
            >
              {title}
            </h2>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {showMaximizeButton && (
                <button
                  onClick={toggleMaximize}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    color: textColor,
                    opacity: 0.7,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.background = 'rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '0.7';
                    e.target.style.background = 'none';
                  }}
                >
                  {isMaximized ? <IconMinimize size={18} /> : <IconMaximize size={18} />}
                </button>
              )}
              
              {showCloseButton && (
                <button
                  onClick={handleClose}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    color: textColor,
                    opacity: 0.7,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = '1';
                    e.target.style.background = 'rgba(220, 38, 38, 0.1)';
                    e.target.style.color = '#dc2626';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = '0.7';
                    e.target.style.background = 'none';
                    e.target.style.color = textColor;
                  }}
                >
                  <IconX size={18} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Body */}
        <div
          style={{
            flex: 1,
            padding: title ? '24px' : '32px 24px',
            overflow: scrollable ? 'auto' : 'visible',
            minHeight: 0,
          }}
          className={`ui-modal-body ${bodyClassName}`}
        >
          {children}
        </div>

        {/* Footer */}
        {(footer || showConfirmButton || showCancelButton) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '12px',
              padding: '20px 24px',
              borderTop: variant === 'minimal' ? '1px solid #e5e7eb' : 'none',
              backgroundColor: variant === 'glassmorphism' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            }}
            className={`ui-modal-footer ${footerClassName}`}
          >
            {footer ? (
              footer
            ) : (
              <>
                {showCancelButton && (
                  <button
                    onClick={handleCancel}
                    style={getButtonStyles(cancelButtonVariant)}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {cancelText}
                  </button>
                )}
                {showConfirmButton && (
                  <button
                    onClick={handleConfirm}
                    style={getButtonStyles(confirmButtonVariant)}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {confirmText}
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
