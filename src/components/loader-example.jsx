import React, { useState } from 'react';
import Loader from './Loader.jsx';

const LoaderExample = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const startManualProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const startAsyncLoading = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Loader Component Examples</h1>
      
      <div style={{ marginBottom: '3rem' }}>
        <h2>Automatic Progress Loader (Circular)</h2>
        <Loader
          duration={4000}
          variant="circular"
          size="large"
          color="#3b82f6"
          onComplete={() => console.log('Loading complete!')}
        >
          Loading your content...
        </Loader>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Linear Progress Loader</h2>
        <Loader
          variant="linear"
          duration={3000}
          color="#22c55e"
          size="medium"
        >
          Processing data...
        </Loader>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Spinner Loader</h2>
        <Loader
          variant="spinner"
          duration={2000}
          color="#ef4444"
          size="medium"
        >
          Syncing files...
        </Loader>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Dots Loader</h2>
        <Loader
          variant="dots"
          duration={2500}
          color="#8b5cf6"
          size="large"
        >
          Connecting to server...
        </Loader>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Manual Progress Control</h2>
        <button 
          onClick={startManualProgress}
          style={{ 
            marginBottom: '1rem', 
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Start Manual Progress
        </button>
        <Loader
          progress={progress}
          variant="circular"
          size="medium"
          color="#f59e0b"
          showPercentage={true}
        >
          Manual progress: {progress}%
        </Loader>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Different Sizes</h2>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h4>Small</h4>
            <Loader variant="circular" size="small" duration={2000} />
          </div>
          <div>
            <h4>Medium</h4>
            <Loader variant="circular" size="medium" duration={2000} />
          </div>
          <div>
            <h4>Large</h4>
            <Loader variant="circular" size="large" duration={2000} />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Without Percentage</h2>
        <Loader
          variant="circular"
          duration={3000}
          showPercentage={false}
          color="#ec4899"
        >
          Loading without percentage...
        </Loader>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Async Loading Example</h2>
        <button 
          onClick={startAsyncLoading}
          disabled={isLoading}
          style={{ 
            marginBottom: '1rem', 
            padding: '0.5rem 1rem',
            backgroundColor: isLoading ? '#9ca3af' : '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Loading...' : 'Start Async Operation'}
        </button>
        {isLoading && (
          <Loader
            variant="spinner"
            autoStart={false}
            color="#10b981"
            size="medium"
          >
            Performing async operation...
          </Loader>
        )}
      </div>
    </div>
  );
};

export default LoaderExample;
