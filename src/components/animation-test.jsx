import React, { useState } from 'react';
import { Modal } from './index';

const AnimationTest = () => {
  const [activeModal, setActiveModal] = useState(null);

  const animations = [
    { 
      name: 'Fade', 
      value: 'fade', 
      color: '#3b82f6',
      description: 'Simple opacity transition'
    },
    { 
      name: 'Fade Scale', 
      value: 'fadeScale', 
      color: '#10b981',
      description: 'Scale with fade effect (default)'
    },
    { 
      name: 'Slide Up', 
      value: 'slideUp', 
      color: '#f59e0b',
      description: 'Slides in from bottom'
    },
    { 
      name: 'Slide Down', 
      value: 'slideDown', 
      color: '#ef4444',
      description: 'Slides in from top'
    },
    { 
      name: 'Slide Left', 
      value: 'slideLeft', 
      color: '#8b5cf6',
      description: 'Slides in from right'
    },
    { 
      name: 'Slide Right', 
      value: 'slideRight', 
      color: '#06b6d4',
      description: 'Slides in from left'
    }
  ];

  const openModal = (animation) => {
    setActiveModal(animation);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div style={{ 
      padding: '40px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🎭 Modal Animation Test
        </h1>

        <p style={{ 
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: '1.1rem',
          color: '#6b7280',
          lineHeight: 1.6
        }}>
          Click any button below to test different modal animations. Each modal opens with a different entrance effect.
        </p>

        {/* Animation Buttons */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          {animations.map((anim) => (
            <button
              key={anim.value}
              onClick={() => openModal(anim)}
              style={{
                padding: '20px',
                background: `linear-gradient(135deg, ${anim.color}, ${anim.color}dd)`,
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = `0 8px 25px ${anim.color}40`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '1.2rem', 
                fontWeight: '600' 
              }}>
                {anim.name}
              </h3>
              <p style={{ 
                margin: '0 0 12px 0', 
                opacity: 0.9, 
                fontSize: '0.9rem',
                lineHeight: 1.4
              }}>
                {anim.description}
              </p>
              <code style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontFamily: 'Monaco, Consolas, monospace'
              }}>
                enterAnimation="{anim.value}"
              </code>
            </button>
          ))}
        </div>

        {/* Test with different durations */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '30px'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#1f2937' }}>
            ⏱️ Animation Duration Test
          </h3>
          <p style={{ marginBottom: '16px', color: '#6b7280', lineHeight: 1.6 }}>
            Test the same animation with different durations:
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[150, 300, 500, 800].map(duration => (
              <button
                key={duration}
                onClick={() => openModal({
                  name: `Fade Scale (${duration}ms)`,
                  value: 'fadeScale',
                  color: '#6366f1',
                  description: `Fade scale animation with ${duration}ms duration`,
                  duration: duration
                })}
                style={{
                  padding: '8px 16px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {duration}ms
              </button>
            ))}
          </div>
        </div>

        {/* Animation Code Examples */}
        <div style={{
          background: '#1f2937',
          borderRadius: '12px',
          padding: '24px',
          color: '#f8fafc'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#ffffff' }}>
            📖 Code Examples
          </h3>
          <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
            <div style={{ marginBottom: '12px' }}>
              <code style={{ color: '#10b981' }}>
                {'<Modal enterAnimation="fade" animationDuration={300}>'}
              </code>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <code style={{ color: '#10b981' }}>
                {'<Modal enterAnimation="fadeScale" animationDuration={500}>'}
              </code>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <code style={{ color: '#10b981' }}>
                {'<Modal enterAnimation="slideUp" animationDuration={400}>'}
              </code>
            </div>
            <div>
              <code style={{ color: '#10b981' }}>
                {'<Modal enterAnimation="slideRight" animationDuration={350}>'}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Test Modal */}
      {activeModal && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={`${activeModal.name} Animation`}
          size="md"
          variant="glassmorphism"
          enterAnimation={activeModal.value}
          exitAnimation={activeModal.value}
          animationDuration={activeModal.duration || 300}
          primaryColor={activeModal.color}
        >
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: `linear-gradient(135deg, ${activeModal.color}, ${activeModal.color}dd)`,
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              🎭
            </div>
            
            <h3 style={{ margin: '0 0 12px 0', color: '#1f2937' }}>
              {activeModal.name} Animation
            </h3>
            
            <p style={{ margin: '0 0 20px 0', color: '#6b7280', lineHeight: 1.6 }}>
              {activeModal.description}
            </p>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '20px'
            }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#374151' }}>
                Animation Properties:
              </h4>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5 }}>
                <div>
                  <strong>Type:</strong> {activeModal.value}
                </div>
                <div>
                  <strong>Duration:</strong> {activeModal.duration || 300}ms
                </div>
                <div>
                  <strong>Easing:</strong> cubic-bezier(0.4, 0, 0.2, 1)
                </div>
              </div>
            </div>

            <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280' }}>
              Click outside the modal or press Escape to close and see the exit animation.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AnimationTest;
