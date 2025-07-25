import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar, Input } from '@vjnav/ui-components';
import { 
  IconHome, 
  IconUser, 
  IconSettings, 
  IconChart,
  IconMail,
  IconLock,
  IconSearch,
  IconPhone,
  IconMapPin,
  IconCalendar,
  IconCreditCard
} from '@tabler/icons-react';

// Mock pages
const Dashboard = () => (
  <div style={{ padding: '20px' }}>
    <h1>Dashboard</h1>
    <p>Welcome to the dashboard!</p>
  </div>
);

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear errors when user types
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Profile updated successfully!');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ marginBottom: '30px', color: '#1f2937' }}>User Profile</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleInputChange('fullName')}
          leftIcon={<IconUser size={18} />}
          error={errors.fullName}
          variant="glassmorphism"
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange('email')}
          leftIcon={<IconMail size={18} />}
          error={errors.email}
          success={formData.email && validateEmail(formData.email)}
          variant="glassmorphism"
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleInputChange('phone')}
          leftContent={
            <div style={{ 
              padding: '4px 8px', 
              background: '#f3f4f6', 
              borderRadius: '4px',
              fontSize: '0.875rem',
              color: '#6b7280',
              border: '1px solid #e5e7eb'
            }}>
              +1
            </div>
          }
          rightIcon={<IconPhone size={18} />}
          variant="glassmorphism"
        />

        <Input
          label="Address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleInputChange('address')}
          leftIcon={<IconMapPin size={18} />}
          variant="glassmorphism"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter new password"
          value={formData.password}
          onChange={handleInputChange('password')}
          leftIcon={<IconLock size={18} />}
          showPasswordToggle={true}
          error={errors.password}
          helperText="Password must be at least 8 characters long"
          variant="glassmorphism"
          required
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          leftIcon={<IconLock size={18} />}
          showPasswordToggle={true}
          error={errors.confirmPassword}
          variant="glassmorphism"
          required
        />

        <button
          type="submit"
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

const Analytics = () => (
  <div style={{ padding: '20px' }}>
    <h1>Analytics</h1>
    <p>Analytics dashboard content here.</p>
  </div>
);

const Settings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationEmail, setNotificationEmail] = useState('user@example.com');
  
  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1 style={{ marginBottom: '30px', color: '#1f2937' }}>Settings</h1>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        <Input
          placeholder="Search settings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          leftIcon={<IconSearch size={18} />}
          rightContent={
            <div style={{ 
              padding: '2px 6px', 
              background: '#3b82f6', 
              color: 'white',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              ⌘K
            </div>
          }
          variant="glassmorphism"
        />

        <Input
          label="Notification Email"
          type="email"
          value={notificationEmail}
          onChange={(e) => setNotificationEmail(e.target.value)}
          leftIcon={<IconMail size={18} />}
          variant="glassmorphism"
          helperText="Receive important updates and notifications"
        />

        <Input
          label="API Key"
          value="sk-1234567890abcdef"
          readOnly={true}
          variant="filled"
          helperText="Your read-only API key"
        />
      </div>
    </div>
  );
};

const App = () => {
  const [layout, setLayout] = useState('side');

  const navItems = [
    { icon: <IconHome />, text: "Dashboard", path: "/" },
    { icon: <IconUser />, text: "Profile", path: "/profile" },
    { icon: <IconChart />, text: "Analytics", path: "/analytics" },
  ];

  const bottomNavItems = [
    { icon: <IconSettings />, text: "Settings", path: "/settings" },
  ];

  const toggleLayout = () => {
    setLayout(layout === 'side' ? 'top' : 'side');
  };

  return (
    <BrowserRouter>
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        {/* Layout Toggle Button */}
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000
        }}>
          <button
            onClick={toggleLayout}
            style={{
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            Switch to {layout === 'side' ? 'Top' : 'Side'} Layout
          </button>
        </div>

        {/* Main Layout */}
        <div style={{ 
          display: layout === 'side' ? 'flex' : 'block',
          minHeight: '100vh'
        }}>
          <Navbar
            layout={layout}
            primaryColor="#6366f1"
            secondaryColor="#4338ca"
            heading="UI Components"
            topdata={navItems}
            bottomdata={bottomNavItems}
            position="fixed"
            showToggleButton={true}
            backgroundColor="rgba(255, 255, 255, 0.1)"
          />

          {/* Main Content */}
          <div style={{
            flex: 1,
            marginLeft: layout === 'side' ? '280px' : '0',
            marginTop: layout === 'top' ? '70px' : '0',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            minHeight: layout === 'side' ? '100vh' : 'calc(100vh - 70px)',
            borderRadius: layout === 'side' ? '0 20px 0 0' : '0',
            transition: 'all 0.3s ease'
          }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
