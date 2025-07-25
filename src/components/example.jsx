import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './index.js';
import { 
  IconHome2, 
  IconChartBarPopular, 
  IconSettings, 
  IconMail,
  IconChartBar,
  IconUsers,
  IconDeviceMobile,
  IconToggleLeft,
  IconToggleRight,
} from '@tabler/icons-react';

// Example usage of the Navbar component with layout switching
const Example = () => {
  const [layout, setLayout] = useState('side'); // 'side' or 'top'

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
  ];

  const bottomNavItems = [
    { icon: <IconMail />, text: "Messages", path: "/messages" },
    { icon: <IconSettings />, text: "Settings", path: "/settings" },
  ];

  const toggleLayout = () => {
    setLayout(layout === 'side' ? 'top' : 'side');
  };

  const getMainContentStyle = () => {
    if (layout === 'top') {
      return {
        marginTop: "70px", // Account for top navbar height
        padding: "2rem",
        background: "#f8fafc",
        minHeight: "calc(100vh - 70px)",
      };
    } else {
      return {
        marginLeft: "280px", // Account for sidebar width
        padding: "2rem",
        background: "#f8fafc",
        minHeight: "100vh",
        transition: "margin-left 0.3s ease",
      };
    }
  };

  return (
    <BrowserRouter>
      {/* Layout Toggle Button */}
      <button
        onClick={toggleLayout}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 9999,
          background: "#6366f1",
          color: "white",
          border: "none",
          borderRadius: "50px",
          padding: "12px 20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 6px 20px rgba(99, 102, 241, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 15px rgba(99, 102, 241, 0.3)";
        }}
      >
        {layout === 'side' ? <IconToggleRight size={16} /> : <IconToggleLeft size={16} />}
        Switch to {layout === 'side' ? 'Top' : 'Side'} Layout
      </button>

      <div style={{ display: "flex", flexDirection: layout === 'top' ? 'column' : 'row', minHeight: "100vh" }}>
        <Navbar
          primaryColor="#6366f1"
          secondaryColor="#4f46e5"
          heading="My Dashboard"
          topdata={topNavItems}
          bottomdata={bottomNavItems}
          iconColor="#e2e8f0"
          textColor="#f1f5f9"
          layout={layout}
          position="fixed"
          showToggleButton={layout === 'side'}
          showBranding={true}
          sidebarWidth="280px"
          collapsedWidth="80px"
          topbarHeight="70px"
        />
        
        <div style={getMainContentStyle()}>
          <div style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "white",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
            border: "1px solid #e2e8f0",
          }}>
            <Routes>
              <Route path="/" element={
                <div>
                  <h1 style={{ color: "#1f2937", marginBottom: "1rem" }}>🏠 Dashboard</h1>
                  <p style={{ color: "#64748b", lineHeight: "1.7" }}>
                    Welcome to your dashboard! This navbar component now supports both <strong>side</strong> and <strong>top</strong> layouts.
                  </p>
                  <div style={{ 
                    background: "#f8fafc", 
                    padding: "1rem", 
                    borderRadius: "8px", 
                    margin: "1rem 0",
                    border: "1px solid #e2e8f0" 
                  }}>
                    <h3 style={{ color: "#374151", margin: "0 0 0.5rem 0" }}>Current Layout: {layout.toUpperCase()}</h3>
                    <p style={{ color: "#64748b", margin: 0 }}>
                      Use the toggle button in the top-right corner to switch between layouts!
                    </p>
                  </div>
                </div>
              } />
              <Route path="/analytics" element={
                <div>
                  <h1 style={{ color: "#1f2937", marginBottom: "1rem" }}>📊 Analytics</h1>
                  <p style={{ color: "#64748b", lineHeight: "1.7" }}>
                    Analytics page with {layout} layout. Notice how the navigation adapts to different layouts!
                  </p>
                </div>
              } />
              <Route path="/analytics/overview" element={<div><h1>📈 Analytics Overview</h1></div>} />
              <Route path="/analytics/users" element={<div><h1>👥 User Analytics</h1></div>} />
              <Route path="/analytics/devices" element={<div><h1>📱 Device Statistics</h1></div>} />
              <Route path="/messages" element={
                <div>
                  <h1 style={{ color: "#1f2937", marginBottom: "1rem" }}>💬 Messages</h1>
                  <p style={{ color: "#64748b", lineHeight: "1.7" }}>
                    Messages page. Try switching layouts to see how the navigation transforms!
                  </p>
                </div>
              } />
              <Route path="/settings" element={
                <div>
                  <h1 style={{ color: "#1f2937", marginBottom: "1rem" }}>⚙️ Settings</h1>
                  <p style={{ color: "#64748b", lineHeight: "1.7" }}>
                    Settings page. The navbar maintains all functionality across both layouts.
                  </p>
                </div>
              } />
            </Routes>
            
            {/* Feature showcase */}
            <div style={{ 
              marginTop: "2rem", 
              padding: "1.5rem", 
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              borderRadius: "12px",
              color: "white"
            }}>
              <h3 style={{ margin: "0 0 1rem 0" }}>🎯 Layout Features</h3>
              <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                <li><strong>Side Layout:</strong> Traditional sidebar with collapsible functionality</li>
                <li><strong>Top Layout:</strong> Horizontal navbar with mobile-responsive dropdown</li>
                <li><strong>Responsive:</strong> Automatically adapts to mobile devices</li>
                <li><strong>Customizable:</strong> Colors, sizes, and behavior are all configurable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Example;
