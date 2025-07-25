import React, { use, useState } from "react";
import "./App.css";
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
import { useNavigate, useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Input, Modal, Search } from "./components";


// Demo Component
const App = () => {
  

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
        { icon: <IconMovie />, text: "Videos", path: "/media/videos" },
        { icon: <IconImageInPicture />, text: "Images", path: "/media/images" },
        { icon: <IconFile />, text: "Documents", path: "/media/documents" },
      ]
    },
    { icon: <IconDeviceMobile />, text: "Apps", path: "/apps" },
  ];

  const bottomNavItems = [
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
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/analytics" element={<AnalyticsContent />} />
          <Route path="/analytics/overview" element={<AnalyticsOverviewContent />} />
          <Route path="/analytics/users" element={<UserAnalyticsContent />} />
          <Route path="/analytics/devices" element={<DeviceStatsContent />} />
          <Route path="/media" element={<MediaContent />} />
          <Route path="/media/videos" element={<VideosContent />} />
          <Route path="/media/images" element={<ImagesContent />} />
          <Route path="/media/documents" element={<DocumentsContent />} />
          <Route path="/apps" element={<AppsContent />} />
          <Route path="/messages" element={<MessagesContent />} />
          <Route path="/messages/inbox" element={<InboxContent />} />
          <Route path="/messages/sent" element={<SentContent />} />
          <Route path="/messages/archive" element={<ArchiveContent />} />
          <Route path="/settings" element={<SettingsContent />} />
          <Route path="/settings/profile" element={<ProfileContent />} />
          <Route path="/settings/team" element={<TeamContent />} />
          <Route path="/settings/support" element={<SupportContent />} />
        </Routes>
      </div>
    </div>
  );
};

// Content Components
const DashboardContent = () =>{ 
const [isModalOpen, setIsModalOpen] = useState(false);
  return (
  <div
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      background: "white",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e2e8f0",
    }}
  >
    <h1 
      style={{ 
        fontSize: "2.5rem", 
        fontWeight: "700",
        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "1rem",
        letterSpacing: "-0.025em"
      }}
    >
      Dashboard
    </h1>
    <Input
        placeholder="Search..."
        style={{ width: "100%", padding: "0.5rem 1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}
        rightContent={<IconSquareChevronsLeft size={20} style={{ color: "#4f46e5" }} />}
        leftContent={<IconChevronRight size={20} style={{ color: "#4f46e5" }} />}
        variant="glassmorphism"
    />
    <Search placeholder="Search..." 
        placeholderColor="#9ca3af"
        variant="glassmorphism"
        rightContent={<IconSquareChevronsLeft size={20} style={{ color: "#4f46e5" }} />}
        leftContent={<IconChevronRight size={20} style={{ color: "#4f46e5" }} />}
        suggestions={['React', 'JavaScript', 'TypeScript']}
    />
    <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
    
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Welcome to VJ Dashboard"
      textColor="#1f2937"
      size="md"
      variant="glassmorphism"
    >
      <p>This is a simple modal example. You can customize it as needed.</p>
    </Modal>
    <p 
      style={{ 
        marginTop: "1.5rem",
        fontSize: "1.1rem",
        color: "#64748b",
        lineHeight: "1.7",
        marginBottom: "1rem"
      }}
    >
      Welcome to your beautiful dashboard! Notice how the "Dashboard" item in the navbar is highlighted because you're currently on this page.
    </p>
    
    {/* Feature showcase cards */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          borderRadius: "12px",
          padding: "1.5rem",
          color: "white",
          boxShadow: "0 8px 25px rgba(99, 102, 241, 0.25)",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem", fontWeight: "600" }}>Active Highlighting</h3>
        <p style={{ margin: 0, opacity: 0.9, fontSize: "0.95rem", lineHeight: "1.5" }}>
          Current page is automatically highlighted in the navigation
        </p>
      </div>
      
      <div
        style={{
          background: "linear-gradient(135deg, #10b981, #059669)",
          borderRadius: "12px",
          padding: "1.5rem",
          color: "white",
          boxShadow: "0 8px 25px rgba(16, 185, 129, 0.25)",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem", fontWeight: "600" }}>Smart Detection</h3>
        <p style={{ margin: 0, opacity: 0.9, fontSize: "0.95rem", lineHeight: "1.5" }}>
          Automatically detects current route and updates highlighting
        </p>
      </div>
      
      <div
        style={{
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          borderRadius: "12px",
          padding: "1.5rem",
          color: "white",
          boxShadow: "0 8px 25px rgba(245, 158, 11, 0.25)",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem", fontWeight: "600" }}>Dropdown Navigation</h3>
        <p style={{ margin: 0, opacity: 0.9, fontSize: "0.95rem", lineHeight: "1.5" }}>
          Click items with arrows to expand sub-menus and explore nested content
        </p>
      </div>
    </div>
  </div>
)};

const AnalyticsContent = () => (
  <div
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      background: "white",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e2e8f0",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>
      📊 Analytics Dashboard
    </h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>
      You're now on the Analytics page! Notice how the "Analytics" item is highlighted in the navbar 
      with a glowing effect, indicator line, and enhanced styling.
    </p>
    <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f8fafc", borderRadius: "12px" }}>
      <h3 style={{ color: "#374151", marginBottom: "1rem" }}>Active State Features:</h3>
      <ul style={{ color: "#64748b", lineHeight: "1.6" }}>
        <li>✨ Glowing background with enhanced opacity</li>
        <li>🎯 Left indicator line with gradient</li>
        <li>⚡ Scaled and glowing icon</li>
        <li>💫 Enhanced text weight and shadow</li>
        <li>🚫 Disabled hover animations when active</li>
      </ul>
    </div>
  </div>
);

const MoviesContent = () => (
  <div
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      background: "white",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e2e8f0",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>
      🎬 Movies Library
    </h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>
      Welcome to the Movies section! The navbar automatically highlights the current page 
      you're viewing with beautiful visual indicators.
    </p>
  </div>
);

const AppsContent = () => (
  <div
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      background: "white",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e2e8f0",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>
      📱 Applications
    </h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>
      This is the Apps page. Check out how smoothly the navbar highlighting transitions 
      between different pages!
    </p>
  </div>
);

const HelpContent = () => (
  <div
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      background: "white",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e2e8f0",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>
      ❓ Help & Support
    </h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>
      Need help? You're in the right place! Notice how this bottom navigation item 
      is now highlighted in the navbar.
    </p>
  </div>
);

const SettingsContent = () => (
  <div
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      background: "white",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e2e8f0",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>
      ⚙️ Settings
    </h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>
      Configure your preferences here. The Settings nav item shows the active highlighting 
      and you can explore the dropdown sub-items like Profile, Team, and Support.
    </p>
  </div>
);

// New content components for dropdown items
const AnalyticsOverviewContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>📊 Analytics Overview</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Welcome to the Analytics Overview page! This is a sub-page of Analytics accessible through the dropdown menu.</p>
  </div>
);

const UserAnalyticsContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>👥 User Analytics</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Detailed user analytics and behavior insights from the Analytics dropdown menu.</p>
  </div>
);

const DeviceStatsContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>📱 Device Statistics</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Device usage statistics and platform analytics from the Analytics section.</p>
  </div>
);

const MediaContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>📁 Media Library</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Main media library page with access to videos, images, and documents through the dropdown.</p>
  </div>
);

const VideosContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>🎬 Videos</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Video library accessed through the Media dropdown menu.</p>
  </div>
);

const ImagesContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>🖼️ Images</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Image gallery accessed through the Media dropdown menu.</p>
  </div>
);

const DocumentsContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>📄 Documents</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Document library accessed through the Media dropdown menu.</p>
  </div>
);

const MessagesContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>💬 Messages</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Main messages page with dropdown access to Inbox, Sent, and Archive.</p>
  </div>
);

const InboxContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>📥 Inbox</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Your inbox messages accessed through the Messages dropdown.</p>
  </div>
);

const SentContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>📤 Sent Messages</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Your sent messages accessed through the Messages dropdown.</p>
  </div>
);

const ArchiveContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>🗄️ Archived Messages</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Your archived messages accessed through the Messages dropdown.</p>
  </div>
);

const ProfileContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>👤 Profile Settings</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Your profile settings accessed through the Settings dropdown.</p>
  </div>
);

const TeamContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>👥 Team Management</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Team management settings accessed through the Settings dropdown.</p>
  </div>
);

const SupportContent = () => (
  <div style={{ maxWidth: "800px", margin: "0 auto", background: "white", borderRadius: "16px", padding: "2rem", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)", border: "1px solid #e2e8f0" }}>
    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>🆘 Support</h1>
    <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.7" }}>Support and help resources accessed through the Settings dropdown.</p>
  </div>
);

export default App;
