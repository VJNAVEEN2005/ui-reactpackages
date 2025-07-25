import React, { useState } from 'react';
import './App.css';
import NavbarExample from './components/navbar-example';
import InputExample from './components/input-example';
import SearchExample from './components/search-example';
import ModalExample from './components/modal-example';

const MainDemo = () => {
  const [activeTab, setActiveTab] = useState('modal');

  const tabs = [
    { id: 'navbar', label: 'Navbar', icon: '🧭' },
    { id: 'input', label: 'Input', icon: '📝' },
    { id: 'search', label: 'Search', icon: '🔍' },
    { id: 'modal', label: 'Modal', icon: '📋' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'navbar':
        return <NavbarExample />;
      case 'input':
        return <InputExample />;
      case 'search':
        return <SearchExample />;
      case 'modal':
        return <ModalExample />;
      default:
        return <ModalExample />;
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Header Navigation */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '0 20px',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '70px'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '1.2rem'
            }}>
              VJ
            </div>
            <div>
              <h1 style={{ 
                margin: 0, 
                fontSize: '1.5rem', 
                fontWeight: '700',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                UI Components
              </h1>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>
                v2.3.0 - React Component Library
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            gap: '8px',
            padding: '4px',
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  background: activeTab === tab.id 
                    ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' 
                    : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#64748b',
                  fontWeight: activeTab === tab.id ? '600' : '500',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: activeTab === tab.id 
                    ? '0 4px 12px rgba(99, 102, 241, 0.3)' 
                    : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.7)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* GitHub Link */}
          <a
            href="https://www.npmjs.com/package/vj-ui-components"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 16px',
              background: 'linear-gradient(135deg, #1f2937, #374151)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            📦 NPM Package
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        flex: 1,
        transition: 'all 0.3s ease'
      }}>
        {renderContent()}
      </div>

      {/* Footer */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.8)'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          Built with ❤️ using React 19.1+ • vj-ui-components v2.3.0
        </p>
      </div>
    </div>
  );
};

export default MainDemo;
