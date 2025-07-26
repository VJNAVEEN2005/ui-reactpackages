import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Modal from './components/Modal';
import './App.css';

const AnimationTestApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('fadeScale');

  const animations = [
    'fade',
    'fadeScale', 
    'slideUp',
    'slideDown',
    'slideLeft',
    'slideRight'
  ];

  const testAnimation = (animation) => {
    setCurrentAnimation(animation);
    setIsModalOpen(true);
  };

  return (
    <div style={{ 
      padding: '40px',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>
        Modal Animation Test
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {animations.map(animation => (
          <button
            key={animation}
            onClick={() => testAnimation(animation)}
            style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              textTransform: 'capitalize'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            {animation}
          </button>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${currentAnimation} Animation Test`}
        size="md"
        variant="glassmorphism"
        enterAnimation={currentAnimation}
        exitAnimation={currentAnimation}
        animationDuration={400}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>Animation: {currentAnimation}</h3>
          <p>This modal is using the "{currentAnimation}" animation.</p>
          <p>Click outside or press Escape to close and see the exit animation.</p>
          
          <div style={{
            background: '#f0f0f0',
            padding: '15px',
            borderRadius: '8px',
            marginTop: '20px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
            enterAnimation="{currentAnimation}"<br/>
            animationDuration={400}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AnimationTestApp;
