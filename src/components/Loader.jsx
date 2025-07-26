import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({
  progress = null,
  duration = 3000,
  autoStart = true,
  onComplete = () => {},
  size = 'medium',
  variant = 'circular',
  showPercentage = true,
  color = '#3b82f6',
  children
}) => {
  const [currentProgress, setCurrentProgress] = useState(progress !== null ? progress : 0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (progress !== null) {
      setCurrentProgress(progress);
      if (progress >= 100) {
        setIsComplete(true);
        onComplete();
      }
      return;
    }

    if (!autoStart) return;

    const interval = setInterval(() => {
      setCurrentProgress(prev => {
        const next = prev + (100 / (duration / 100));
        if (next >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          onComplete();
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [progress, duration, autoStart, onComplete]);

  const sizeClasses = {
    small: 'loader-small',
    medium: 'loader-medium',
    large: 'loader-large'
  };

  const renderCircularLoader = () => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (currentProgress / 100) * circumference;

    return (
      <div className={`loader-container ${sizeClasses[size]}`}>
        <div className="loader-circular">
          <svg className="loader-svg" viewBox="0 0 100 100">
            <circle
              className="loader-track"
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              className="loader-progress"
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 0.3s ease',
                transformOrigin: '50% 50%',
                transform: 'rotate(-90deg)'
              }}
            />
          </svg>
          {showPercentage && (
            <div className="loader-percentage" style={{ color }}>
              {Math.round(currentProgress)}%
            </div>
          )}
        </div>
        {children && <div className="loader-content">{children}</div>}
      </div>
    );
  };

  const renderLinearLoader = () => (
    <div className={`loader-container ${sizeClasses[size]}`}>
      <div className="loader-linear">
        <div className="loader-track-linear">
          <div
            className="loader-progress-linear"
            style={{
              width: `${currentProgress}%`,
              backgroundColor: color,
              transition: 'width 0.3s ease'
            }}
          />
        </div>
        {showPercentage && (
          <div className="loader-percentage-linear" style={{ color }}>
            {Math.round(currentProgress)}%
          </div>
        )}
      </div>
      {children && <div className="loader-content">{children}</div>}
    </div>
  );

  const renderSpinnerLoader = () => (
    <div className={`loader-container ${sizeClasses[size]}`}>
      <div className="loader-spinner">
        <div 
          className="loader-spinner-ring"
          style={{ borderTopColor: color }}
        />
        {showPercentage && (
          <div className="loader-percentage-spinner" style={{ color }}>
            {Math.round(currentProgress)}%
          </div>
        )}
      </div>
      {children && <div className="loader-content">{children}</div>}
    </div>
  );

  const renderDotsLoader = () => (
    <div className={`loader-container ${sizeClasses[size]}`}>
      <div className="loader-dots">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="loader-dot"
            style={{
              backgroundColor: color,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
      {showPercentage && (
        <div className="loader-percentage-dots" style={{ color }}>
          {Math.round(currentProgress)}%
        </div>
      )}
      {children && <div className="loader-content">{children}</div>}
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'linear':
        return renderLinearLoader();
      case 'spinner':
        return renderSpinnerLoader();
      case 'dots':
        return renderDotsLoader();
      default:
        return renderCircularLoader();
    }
  };

  return (
    <div className={`loader-wrapper ${isComplete ? 'loader-complete' : ''}`}>
      {renderLoader()}
    </div>
  );
};

export default Loader;
