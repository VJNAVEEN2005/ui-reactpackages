import React, { useState } from 'react';
import { Modal } from 'vj-ui-components';
import { 
  IconTrash, 
  IconEdit,
  IconSettings,
  IconUser,
  IconInfo,
  IconAlertTriangle,
  IconCheck,
  IconX,
  IconPhoto,
  IconFileText,
  IconMail,
  IconBell
} from '@tabler/icons-react';

const ModalExample = () => {
  const [modals, setModals] = useState({
    basic: false,
    confirm: false,
    form: false,
    fullscreen: false,
    glassmorphism: false,
    gallery: false,
    settings: false,
    notification: false,
    loading: false
  });

  const toggleModal = (modalName) => {
    setModals(prev => ({
      ...prev,
      [modalName]: !prev[modalName]
    }));
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = () => {
    alert('Form submitted!');
    toggleModal('form');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '1000px', 
      margin: '0 auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          marginBottom: '30px', 
          color: '#1f2937',
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Modal Component Examples
        </h1>

        {/* Modal Trigger Buttons */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          {/* Basic Modal */}
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'center'
          }}
          onClick={() => toggleModal('basic')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            <IconInfo size={24} style={{ marginBottom: '8px' }} />
            <h3 style={{ margin: '0 0 8px 0' }}>Basic Modal</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
              Simple modal with title and content
            </p>
          </div>

          {/* Confirmation Modal */}
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #ef4444, #dc2626)',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'center'
          }}
          onClick={() => toggleModal('confirm')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(239, 68, 68, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            <IconAlertTriangle size={24} style={{ marginBottom: '8px' }} />
            <h3 style={{ margin: '0 0 8px 0' }}>Confirmation</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
              Confirm or cancel actions
            </p>
          </div>

          {/* Form Modal */}
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'center'
          }}
          onClick={() => toggleModal('form')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            <IconEdit size={24} style={{ marginBottom: '8px' }} />
            <h3 style={{ margin: '0 0 8px 0' }}>Form Modal</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
              Modal with form inputs
            </p>
          </div>

          {/* Glassmorphism Modal */}
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'center'
          }}
          onClick={() => toggleModal('glassmorphism')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            <IconPhoto size={24} style={{ marginBottom: '8px' }} />
            <h3 style={{ margin: '0 0 8px 0' }}>Glassmorphism</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
              Beautiful glass effect modal
            </p>
          </div>

          {/* Fullscreen Modal */}
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'center'
          }}
          onClick={() => toggleModal('fullscreen')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(245, 158, 11, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            <IconFileText size={24} style={{ marginBottom: '8px' }} />
            <h3 style={{ margin: '0 0 8px 0' }}>Fullscreen</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
              Full screen modal with maximize
            </p>
          </div>

          {/* Settings Modal */}
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #6b7280, #4b5563)',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'center'
          }}
          onClick={() => toggleModal('settings')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(107, 114, 128, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            <IconSettings size={24} style={{ marginBottom: '8px' }} />
            <h3 style={{ margin: '0 0 8px 0' }}>Settings</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
              Complex settings modal
            </p>
          </div>
        </div>

        {/* Basic Modal */}
        <Modal
          isOpen={modals.basic}
          onClose={() => toggleModal('basic')}
          title="Basic Modal"
          size="md"
          variant="default"
        >
          <div>
            <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
              This is a basic modal with default styling. It includes a title, close button, 
              and can contain any content you need.
            </p>
            <p style={{ margin: 0, color: '#6b7280' }}>
              Click the X button or press Escape to close the modal.
            </p>
          </div>
        </Modal>

        {/* Confirmation Modal */}
        <Modal
          isOpen={modals.confirm}
          onClose={() => toggleModal('confirm')}
          title="Delete Item"
          size="sm"
          variant="default"
          showConfirmButton={true}
          showCancelButton={true}
          confirmText="Delete"
          cancelText="Cancel"
          confirmButtonVariant="primary"
          onConfirm={() => {
            alert('Item deleted!');
            toggleModal('confirm');
          }}
          onCancel={() => toggleModal('confirm')}
          primaryColor="#ef4444"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <IconTrash size={20} style={{ color: '#ef4444' }} />
            <span style={{ fontWeight: '500' }}>Are you sure?</span>
          </div>
          <p style={{ margin: 0, color: '#6b7280' }}>
            This action cannot be undone. The item will be permanently deleted from your account.
          </p>
        </Modal>

        {/* Form Modal */}
        <Modal
          isOpen={modals.form}
          onClose={() => toggleModal('form')}
          title="Contact Form"
          size="md"
          variant="default"
          showConfirmButton={true}
          showCancelButton={true}
          confirmText="Send Message"
          cancelText="Cancel"
          onConfirm={handleFormSubmit}
          onCancel={() => toggleModal('form')}
          primaryColor="#10b981"
        >
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  resize: 'vertical'
                }}
                placeholder="Enter your message"
              />
            </div>
          </div>
        </Modal>

        {/* Glassmorphism Modal */}
        <Modal
          isOpen={modals.glassmorphism}
          onClose={() => toggleModal('glassmorphism')}
          title="Glassmorphism Design"
          size="lg"
          variant="glassmorphism"
          primaryColor="#8b5cf6"
          backgroundColor="rgba(139, 92, 246, 0.1)"
          enterAnimation="fadeScale"
        >
          <div>
            <p style={{ marginBottom: '20px', lineHeight: 1.6 }}>
              This modal showcases the glassmorphism design variant with beautiful frosted glass effects,
              backdrop blur, and subtle transparency.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '16px',
              marginBottom: '20px'
            }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{ margin: '0 0 8px 0' }}>Feature {i}</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.8 }}>
                    Beautiful glass card with transparency
                  </p>
                </div>
              ))}
            </div>
            
            <p style={{ margin: 0, color: '#6b7280' }}>
              The glassmorphism effect creates depth and visual hierarchy while maintaining elegance.
            </p>
          </div>
        </Modal>

        {/* Fullscreen Modal */}
        <Modal
          isOpen={modals.fullscreen}
          onClose={() => toggleModal('fullscreen')}
          title="Document Viewer"
          size="full"
          variant="default"
          showMaximizeButton={true}
          enterAnimation="slideUp"
        >
          <div>
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px'
            }}>
              <h3 style={{ margin: '0 0 16px 0', color: '#1f2937' }}>
                Document Content
              </h3>
              <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                This is a fullscreen modal perfect for displaying documents, images, or any content
                that benefits from maximum screen real estate. You can also use the maximize button
                to toggle between normal and fullscreen modes.
              </p>
              <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                The modal supports scrolling when content exceeds the available height, ensuring
                all content remains accessible regardless of screen size.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
              gap: '12px'
            }}>
              {Array.from({length: 12}, (_, i) => (
                <div key={i} style={{
                  height: '100px',
                  background: `linear-gradient(135deg, ${['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'][i % 6]}, ${['#1e40af', '#059669', '#d97706', '#dc2626', '#7c3aed', '#0891b2'][i % 6]})`,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '500'
                }}>
                  Item {i + 1}
                </div>
              ))}
            </div>
          </div>
        </Modal>

        {/* Settings Modal */}
        <Modal
          isOpen={modals.settings}
          onClose={() => toggleModal('settings')}
          title="Application Settings"
          size="lg"
          variant="card"
          enterAnimation="slideRight"
        >
          <div style={{ display: 'grid', gap: '24px' }}>
            {/* User Settings */}
            <div>
              <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconUser size={20} />
                User Preferences
              </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="checkbox" defaultChecked />
                  <span>Email notifications</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="checkbox" />
                  <span>SMS notifications</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="checkbox" defaultChecked />
                  <span>Marketing emails</span>
                </label>
              </div>
            </div>

            {/* Theme Settings */}
            <div>
              <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconPhoto size={20} />
                Theme Settings
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="radio" name="theme" defaultChecked />
                  <span>Light theme</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="radio" name="theme" />
                  <span>Dark theme</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <input type="radio" name="theme" />
                  <span>Auto (system)</span>
                </label>
              </div>
            </div>

            {/* Language Settings */}
            <div>
              <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconMail size={20} />
                Language & Region
              </h3>
              <select style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '0.9rem',
                outline: 'none'
              }}>
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </Modal>

        {/* Features Overview */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '30px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          marginTop: '40px'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#374151' }}>Modal Features</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div>
              <h3 style={{ color: '#1f2937', marginBottom: '12px' }}>🎨 Design Variants</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.6, color: '#6b7280' }}>
                <li>Default clean design</li>
                <li>Glassmorphism with blur effects</li>
                <li>Minimal with subtle borders</li>
                <li>Card style with rounded corners</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#1f2937', marginBottom: '12px' }}>📐 Size Options</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.6, color: '#6b7280' }}>
                <li>Extra small (xs) - 300px max width</li>
                <li>Small (sm) - 400px max width</li>
                <li>Medium (md) - 600px max width</li>
                <li>Large (lg) - 800px max width</li>
                <li>Extra large (xl) - 1200px max width</li>
                <li>Full screen support</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#1f2937', marginBottom: '12px' }}>✨ Animations</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.6, color: '#6b7280' }}>
                <li>Fade in/out</li>
                <li>Scale with fade</li>
                <li>Slide from all directions</li>
                <li>Customizable duration</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#1f2937', marginBottom: '12px' }}>🎛️ Behavior</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.6, color: '#6b7280' }}>
                <li>Backdrop click to close</li>
                <li>Escape key support</li>
                <li>Body scroll prevention</li>
                <li>Maximize/minimize</li>
                <li>Custom buttons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalExample;
