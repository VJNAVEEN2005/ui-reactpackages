import React from 'react';
import { Navbar } from './index';
import {
  IconChartBar,
  IconChartBarPopular,
  IconDeviceMobile,
  IconHelp,
  IconHome2,
  IconMovie,
  IconSettings,
  IconSquareChevronsLeft,
  IconChevronDown,
  IconChevronRight,
  IconUsers,
  IconUserPlus,
  IconUserCog,
  IconFolder,
  IconFile,
  IconFileText,
  IconVideo,
  IconMail,
  IconInbox,
  IconSend,
  IconArchive,
  IconImageInPicture,
} from "@tabler/icons-react";

const NavbarExample = () => {
  const topNavItems = [
    { icon: <IconHome2 />, text: "Dashboard", path: "/" },
    { 
      icon: <IconChartBarPopular />, 
      text: "Analytics", 
      path: "/analytics",
      children: [
        { icon: <IconChartBar />, text: "Overview", path: "/analytics/overview" },
        { icon: <IconUsers />, text: "User Analytics", path: "/analytics/users" },
        { icon: <IconDeviceMobile />, text: "Device Stats", path: "/analytics/devices" },
      ]
    },
    { 
      icon: <IconFolder />, 
      text: "Media", 
      path: "/media",
      children: [
        { icon: <IconVideo />, text: "Videos", path: "/media/videos" },
        { icon: <IconImageInPicture />, text: "Images", path: "/media/images" },
        { icon: <IconFileText />, text: "Documents", path: "/media/documents" },
      ]
    },
    { icon: <IconMovie />, text: "Apps", path: "/apps" },
    { 
      icon: <IconMail />, 
      text: "Messages", 
      path: "/messages",
      children: [
        { icon: <IconInbox />, text: "Inbox", path: "/messages/inbox" },
        { icon: <IconSend />, text: "Sent", path: "/messages/sent" },
        { icon: <IconArchive />, text: "Archive", path: "/messages/archive" },
      ]
    },
  ];

  const bottomNavItems = [
    { 
      icon: <IconSettings />, 
      text: "Settings", 
      path: "/settings",
      children: [
        { icon: <IconUserCog />, text: "Profile", path: "/settings/profile" },
        { icon: <IconUsers />, text: "Team", path: "/settings/team" },
        { icon: <IconHelp />, text: "Support", path: "/settings/support" },
      ]
    },
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{ display: "flex", height: "100vh", background: "#f8fafc" }}>
        <Navbar
          primaryColor="#6366f1"
          secondaryColor="#4f46e5"
          heading="VJ Dashboard"
          topdata={topNavItems}
          bottomdata={bottomNavItems}
          iconColor="#e2e8f0"
          textColor="#f1f5f9"
        />
        
        {/* Main content area */}
        <div 
          style={{ 
            flex: 1, 
            padding: "2rem",
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            overflow: "auto"
          }}
        >
          <div style={{ 
            maxWidth: "800px", 
            margin: "0 auto", 
            background: "white", 
            borderRadius: "16px", 
            padding: "2rem", 
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", 
            border: "1px solid #e2e8f0" 
          }}>
            <h1 style={{ 
              fontSize: "2.5rem", 
              fontWeight: "700",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
              letterSpacing: "-0.025em"
            }}>
              🧭 Navbar Component
            </h1>
            
            <p style={{ 
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              color: "#64748b",
              lineHeight: "1.7",
              marginBottom: "2rem"
            }}>
              This is a demonstration of the Navbar component with sidebar layout. The navbar includes:
            </p>

            {/* Feature showcase cards */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
              gap: "1.5rem", 
              marginBottom: "2rem" 
            }}>
              <div style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                borderRadius: "12px",
                padding: "1.5rem",
                color: "white",
                boxShadow: "0 8px 25px rgba(99, 102, 241, 0.25)",
              }}>
                <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem", fontWeight: "600" }}>
                  Dual Layout Support
                </h3>
                <p style={{ margin: 0, opacity: 0.9, fontSize: "0.95rem", lineHeight: "1.5" }}>
                  Switch between sidebar and top navigation layouts
                </p>
              </div>
              
              <div style={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                borderRadius: "12px",
                padding: "1.5rem",
                color: "white",
                boxShadow: "0 8px 25px rgba(16, 185, 129, 0.25)",
              }}>
                <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem", fontWeight: "600" }}>
                  Dropdown Menus
                </h3>
                <p style={{ margin: 0, opacity: 0.9, fontSize: "0.95rem", lineHeight: "1.5" }}>
                  Multi-level dropdown navigation with smooth animations
                </p>
              </div>
              
              <div style={{
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                borderRadius: "12px",
                padding: "1.5rem",
                color: "white",
                boxShadow: "0 8px 25px rgba(245, 158, 11, 0.25)",
              }}>
                <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem", fontWeight: "600" }}>
                  Mobile Responsive
                </h3>
                <p style={{ margin: 0, opacity: 0.9, fontSize: "0.95rem", lineHeight: "1.5" }}>
                  Touch-optimized interactions for all screen sizes
                </p>
              </div>
              
              <div style={{
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                borderRadius: "12px",
                padding: "1.5rem",
                color: "white",
                boxShadow: "0 8px 25px rgba(239, 68, 68, 0.25)",
              }}>
                <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem", fontWeight: "600" }}>
                  Glassmorphism Design
                </h3>
                <p style={{ margin: 0, opacity: 0.9, fontSize: "0.95rem", lineHeight: "1.5" }}>
                  Beautiful frosted glass effects with backdrop blur
                </p>
              </div>
            </div>

            {/* Code example */}
            <div style={{
              background: "#1f2937",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "2rem"
            }}>
              <h3 style={{ margin: "0 0 1rem 0", color: "#ffffff", fontSize: "1.1rem" }}>
                📖 Usage Example
              </h3>
              <pre style={{ 
                margin: 0, 
                color: "#10b981", 
                fontSize: "0.9rem", 
                lineHeight: "1.6",
                overflow: "auto"
              }}>
{`<Navbar
  primaryColor="#6366f1"
  secondaryColor="#4f46e5"
  heading="My Dashboard"
  topdata={navItems}
  bottomdata={bottomItems}
  layout="sidebar"
/>`}
              </pre>
            </div>

            <p style={{ 
              margin: 0, 
              fontSize: "0.95rem", 
              color: "#6b7280", 
              textAlign: "center" 
            }}>
              Try clicking on the menu items to see the navigation in action!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarExample;
