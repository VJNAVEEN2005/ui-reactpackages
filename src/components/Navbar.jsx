import React, { useState } from "react";
import {
  IconSquareChevronsLeft,
  IconChevronRight,
  IconChevronDown,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({
  primaryColor = "#2563eb",
  secondaryColor = "#1e40af",
  heading,
  topdata = null,
  bottomdata = null,
  iconColor = "white",
  textColor = "white",
  layout = "side", // "side" or "top"
  position = "fixed", // "fixed", "sticky", or "relative"
  showToggleButton = true,
  showBranding = true,
  sidebarWidth = "280px",
  collapsedWidth = "80px",
  topbarHeight = "70px",
  className = "",
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Function to check if current path matches the nav item
  const isActiveRoute = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Function to check if any child item is active
  const hasActiveChild = (children) => {
    if (!children) return false;
    return children.some(child => isActiveRoute(child.path));
  };

  // Toggle dropdown
  const toggleDropdown = (index, section) => {
    const key = `${section}-${index}`;
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Get layout-specific styles
  const getContainerStyle = () => {
    const baseStyle = {
      background: `linear-gradient(${layout === "top" ? "90deg" : "180deg"}, ${primaryColor} 0%, ${secondaryColor} 100%)`,
      display: "flex",
      position: position,
      boxShadow: layout === "top" 
        ? "0 4px 20px rgba(0, 0, 0, 0.1)" 
        : "4px 0 20px rgba(0, 0, 0, 0.1)",
      borderRight: layout === "side" ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      borderBottom: layout === "top" ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      zIndex: 1000,
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    };

    if (layout === "top") {
      return {
        ...baseStyle,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: topbarHeight,
        top: 0,
        left: 0,
        padding: "0 2rem",
      };
    } else {
      return {
        ...baseStyle,
        flexDirection: "column",
        justifyContent: "space-between",
        width: isCollapsed ? collapsedWidth : sidebarWidth,
        height: "100vh",
        top: 0,
        left: 0,
      };
    }
  };

  // Render navigation items for both layouts
  const renderNavItems = (items, section) => {
    if (!items) return null;

    return items.map((item, index) => {
      const isActive = isActiveRoute(item.path);
      const hasChildren = item.children && item.children.length > 0;
      const childrenActive = hasActiveChild(item.children);
      const dropdownKey = `${section}-${index}`;
      const isDropdownOpen = openDropdowns[dropdownKey];
      const itemIsActive = isActive || childrenActive;

      return (
        <div key={index} style={{ position: "relative" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: layout === "top" 
                ? "8px 16px" 
                : isCollapsed ? "12px" : "12px 16px",
              color: textColor,
              backgroundColor: itemIsActive ? "rgba(255, 255, 255, 0.2)" : "transparent",
              width: layout === "top" ? "auto" : "100%",
              textAlign: "left",
              border: itemIsActive ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid transparent",
              cursor: "pointer",
              borderRadius: "12px",
              transition: "all 0.2s ease",
              position: "relative",
              overflow: "hidden",
              justifyContent: layout === "top" ? "center" : isCollapsed ? "center" : "flex-start",
              backdropFilter: "blur(10px)",
              boxShadow: itemIsActive ? "0 4px 15px rgba(255, 255, 255, 0.1)" : "none",
              marginRight: layout === "top" ? "8px" : "0",
              marginBottom: layout === "side" ? "8px" : "0",
              whiteSpace: "nowrap",
            }}
            onClick={() => {
              if (hasChildren) {
                toggleDropdown(index, section);
              } else {
                navigate(item.path);
                if (layout === "top") setIsMobileMenuOpen(false);
              }
            }}
            onMouseEnter={(e) => {
              if (!itemIsActive) {
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
                e.target.style.transform = layout === "side" ? "translateX(4px)" : "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (!itemIsActive) {
                e.target.style.background = "transparent";
                e.target.style.transform = "translate(0)";
                e.target.style.boxShadow = "none";
              }
            }}
          >
            {/* Active indicator */}
            {itemIsActive && (
              <div
                style={{
                  position: "absolute",
                  left: layout === "side" ? "0" : "50%",
                  top: layout === "top" ? "0" : "50%",
                  bottom: layout === "side" ? "0" : "auto",
                  right: layout === "top" ? "50%" : "auto",
                  width: layout === "side" ? "4px" : "calc(100% - 4px)",
                  height: layout === "top" ? "4px" : "auto",
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))",
                  borderRadius: layout === "side" ? "0 4px 4px 0" : "0 0 4px 4px",
                  boxShadow: "2px 0 8px rgba(255, 255, 255, 0.3)",
                  transform: layout === "top" ? "translateX(50%)" : "none",
                }}
              />
            )}
            
            <div
              style={{
                color: iconColor,
                marginRight: layout === "top" ? "8px" : isCollapsed ? "0" : "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                filter: itemIsActive 
                  ? "drop-shadow(0 2px 8px rgba(255, 255, 255, 0.4))" 
                  : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                transform: itemIsActive ? "scale(1.1)" : "scale(1)",
                transition: "all 0.2s ease",
              }}
            >
              {item.icon}
            </div>
            
            {(!isCollapsed || layout === "top") && (
              <>
                <span
                  style={{
                    fontWeight: itemIsActive ? "600" : "500",
                    fontSize: "0.95rem",
                    textShadow: itemIsActive 
                      ? "0 2px 8px rgba(255, 255, 255, 0.3)" 
                      : "0 1px 3px rgba(0, 0, 0, 0.2)",
                    letterSpacing: "0.01em",
                    opacity: itemIsActive ? 1 : 0.95,
                    flex: 1,
                  }}
                >
                  {item.text}
                </span>
                {hasChildren && (
                  <div
                    style={{
                      color: iconColor,
                      transition: "transform 0.2s ease",
                      transform: isDropdownOpen ? "rotate(90deg)" : "rotate(0deg)",
                      marginLeft: "8px",
                    }}
                  >
                    {layout === "top" ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />}
                  </div>
                )}
              </>
            )}
          </button>

          {/* Dropdown items */}
          {hasChildren && (!isCollapsed || layout === "top") && isDropdownOpen && (
            <div
              style={{
                position: layout === "top" ? "absolute" : "relative",
                top: layout === "top" ? "100%" : "auto",
                left: layout === "top" ? "0" : "20px",
                marginTop: layout === "side" ? "4px" : "0",
                marginLeft: layout === "side" ? "20px" : "0",
                borderLeft: layout === "side" ? "2px solid rgba(255, 255, 255, 0.2)" : "none",
                paddingLeft: layout === "side" ? "16px" : "0",
                background: layout === "top" ? `linear-gradient(180deg, ${primaryColor} 0%, ${secondaryColor} 100%)` : "transparent",
                borderRadius: layout === "top" ? "8px" : "0",
                boxShadow: layout === "top" ? "0 8px 25px rgba(0, 0, 0, 0.2)" : "none",
                minWidth: layout === "top" ? "200px" : "auto",
                padding: layout === "top" ? "8px" : "0",
                zIndex: 1001,
                animation: "slideDown 0.2s ease-out",
              }}
            >
              {item.children.map((child, childIndex) => {
                const childActive = isActiveRoute(child.path);
                return (
                  <button
                    key={childIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      color: textColor,
                      backgroundColor: childActive ? "rgba(255, 255, 255, 0.15)" : "transparent",
                      width: "100%",
                      textAlign: "left",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "8px",
                      transition: "all 0.2s ease",
                      marginBottom: "2px",
                      fontSize: "0.85rem",
                      opacity: childActive ? 1 : 0.8,
                    }}
                    onClick={() => {
                      navigate(child.path);
                      if (layout === "top") setIsMobileMenuOpen(false);
                    }}
                    onMouseEnter={(e) => {
                      if (!childActive) {
                        e.target.style.background = "rgba(255, 255, 255, 0.1)";
                        e.target.style.transform = "translateX(4px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!childActive) {
                        e.target.style.background = "transparent";
                        e.target.style.transform = "translateX(0)";
                      }
                    }}
                  >
                    <div
                      style={{
                        color: iconColor,
                        marginRight: "8px",
                        fontSize: "16px",
                        opacity: 0.8,
                      }}
                    >
                      {child.icon}
                    </div>
                    <span
                      style={{
                        fontWeight: childActive ? "600" : "400",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {child.text}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      );
    });
  };

  // Render side navigation layout
  const renderSideNavigation = () => (
    <>
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "100px",
          height: "100px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          left: "-30px",
          width: "60px",
          height: "60px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          filter: "blur(15px)",
        }}
      />
      
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header with toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isCollapsed ? "center" : "space-between",
            width: "100%",
            marginBottom: "2rem",
            position: "relative",
          }}
        >
          {!isCollapsed && showBranding && (
            <h1
              style={{
                color: textColor,
                fontSize: "1.5rem",
                fontWeight: "700",
                margin: 0,
                letterSpacing: "-0.025em",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {heading}
            </h1>
          )}
          {showToggleButton && (
            <button
              style={{
                color: iconColor,
                cursor: "pointer",
                transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                padding: "8px",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: isCollapsed ? "0" : "auto",
              }}
              onClick={() => setIsCollapsed(!isCollapsed)}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = isCollapsed ? "rotate(180deg) scale(1.1)" : "rotate(0deg) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.transform = isCollapsed ? "rotate(180deg) scale(1)" : "rotate(0deg) scale(1)";
              }}
            >
              <IconSquareChevronsLeft size={20} />
            </button>
          )}
        </div>
        
        {/* Divider line */}
        {!isCollapsed && (
          <div
            style={{
              width: "80%",
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${textColor}40, transparent)`,
              marginBottom: "1.5rem",
              borderRadius: "1px",
            }}
          />
        )}
        
        {/* Top navigation */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
          }}
        >
          {renderNavItems(topdata, "top")}
        </div>
      </div>
      
      {/* Bottom navigation */}
      {bottomdata && (
        <div
          style={{
            padding: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(0, 0, 0, 0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "100%",
            }}
          >
            {renderNavItems(bottomdata, "bottom")}
          </div>
        </div>
      )}
    </>
  );

  // Render top navigation layout
  const renderTopNavigation = () => (
    <>
      {/* Left section - Branding */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {showBranding && (
          <h1
            style={{
              color: textColor,
              fontSize: "1.5rem",
              fontWeight: "700",
              margin: 0,
              letterSpacing: "-0.025em",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              marginRight: "2rem",
            }}
          >
            {heading}
          </h1>
        )}
      </div>

      {/* Center section - Navigation items */}
      <div 
        style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "8px",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {/* Desktop navigation */}
        <div 
          style={{ 
            display: window.innerWidth > 768 ? "flex" : "none",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {renderNavItems(topdata, "top")}
          {bottomdata && renderNavItems(bottomdata, "bottom")}
        </div>

        {/* Mobile menu button */}
        <button
          style={{
            display: window.innerWidth <= 768 ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            color: iconColor,
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "8px",
            padding: "8px",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: `linear-gradient(180deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
            borderRadius: "0 0 12px 12px",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
            padding: "1rem",
            zIndex: 1001,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {renderNavItems(topdata, "top-mobile")}
            {bottomdata && (
              <>
                <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.2)", margin: "8px 0" }} />
                {renderNavItems(bottomdata, "bottom-mobile")}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );

  return (
    <div
      style={getContainerStyle()}
      className={className}
    >
      {layout === "side" ? renderSideNavigation() : renderTopNavigation()}
    </div>
  );
};

export default Navbar;
