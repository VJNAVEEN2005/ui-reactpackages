import React, { useState } from 'react';
import LoaderExample from './components/loader-example.jsx';
import TagsExample from './components/tags-example.jsx';
import SkeletonExample from './components/skeleton-example.jsx';

const NewComponentsDemo = () => {
  const [activeTab, setActiveTab] = useState('loader');

  const tabs = [
    { id: 'loader', label: 'Loader', component: LoaderExample },
    { id: 'tags', label: 'Tags', component: TagsExample },
    { id: 'skeleton', label: 'Skeleton', component: SkeletonExample }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || LoaderExample;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Navigation */}
      <nav style={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem'
        }}>
          <h1 style={{ 
            margin: '0 0 1rem 0', 
            fontSize: '1.875rem', 
            fontWeight: 'bold',
            color: '#111827'
          }}>
            New Components Demo
          </h1>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '6px',
                  backgroundColor: activeTab === tab.id ? '#3b82f6' : '#f3f4f6',
                  color: activeTab === tab.id ? 'white' : '#374151',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main style={{ backgroundColor: '#f9fafb' }}>
        <ActiveComponent />
      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: 'white', 
        borderTop: '1px solid #e5e7eb',
        padding: '2rem 0',
        marginTop: '4rem'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#111827' }}>
            Component Features Summary
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginTop: '1.5rem'
          }}>
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#3b82f6' }}>
                🔄 Loader Component
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#64748b' }}>
                <li>Automatic progress counting</li>
                <li>Multiple variants (circular, linear, spinner, dots)</li>
                <li>Customizable colors and sizes</li>
                <li>Manual progress control</li>
                <li>Completion callbacks</li>
              </ul>
            </div>
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '8px',
              border: '1px solid #bbf7d0'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#16a34a' }}>
                🏷️ Tags Component
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#64748b' }}>
                <li>Editable and read-only modes</li>
                <li>Multiple color schemes</li>
                <li>Different variants and sizes</li>
                <li>Predefined tag collections</li>
                <li>Click handlers and max limits</li>
              </ul>
            </div>
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#fefce8',
              borderRadius: '8px',
              border: '1px solid #fef08a'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#ca8a04' }}>
                💀 Skeleton Component
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#64748b' }}>
                <li>Multiple animation types</li>
                <li>Predefined layouts (card, table, list, profile)</li>
                <li>Customizable shapes and sizes</li>
                <li>Responsive design</li>
                <li>Dark mode support</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewComponentsDemo;
