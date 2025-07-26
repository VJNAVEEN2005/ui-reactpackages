import React from 'react';
import './Skeleton.css';

const Skeleton = ({
  variant = 'text',
  width = '100%',
  height = 'auto',
  lines = 1,
  animation = 'pulse',
  className = '',
  style = {}
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'text':
        return 'skeleton-text';
      case 'rectangular':
        return 'skeleton-rectangular';
      case 'circular':
        return 'skeleton-circular';
      case 'rounded':
        return 'skeleton-rounded';
      default:
        return 'skeleton-text';
    }
  };

  const getAnimationClass = () => {
    switch (animation) {
      case 'pulse':
        return 'skeleton-pulse';
      case 'wave':
        return 'skeleton-wave';
      case 'none':
        return '';
      default:
        return 'skeleton-pulse';
    }
  };

  const skeletonStyle = {
    width,
    height: variant === 'text' && height === 'auto' ? '1em' : height,
    ...style
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`skeleton-container ${className}`}>
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={`skeleton ${getVariantClass()} ${getAnimationClass()}`}
            style={{
              ...skeletonStyle,
              width: index === lines - 1 ? '80%' : width,
              marginBottom: index < lines - 1 ? '0.5em' : 0
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`skeleton ${getVariantClass()} ${getAnimationClass()} ${className}`}
      style={skeletonStyle}
    />
  );
};

// Predefined skeleton layouts
export const SkeletonCard = ({ showAvatar = true, lines = 3, className = '' }) => (
  <div className={`skeleton-card ${className}`}>
    {showAvatar && (
      <div className="skeleton-card-header">
        <Skeleton variant="circular" width="40px" height="40px" />
        <div className="skeleton-card-title">
          <Skeleton variant="text" width="120px" height="16px" />
          <Skeleton variant="text" width="80px" height="12px" />
        </div>
      </div>
    )}
    <div className="skeleton-card-content">
      <Skeleton variant="text" lines={lines} />
    </div>
  </div>
);

export const SkeletonTable = ({ 
  rows = 5, 
  columns = 4, 
  showHeader = true, 
  className = '' 
}) => (
  <div className={`skeleton-table ${className}`}>
    {showHeader && (
      <div className="skeleton-table-header">
        {Array.from({ length: columns }, (_, index) => (
          <Skeleton key={index} variant="text" height="20px" />
        ))}
      </div>
    )}
    <div className="skeleton-table-body">
      {Array.from({ length: rows }, (_, rowIndex) => (
        <div key={rowIndex} className="skeleton-table-row">
          {Array.from({ length: columns }, (_, colIndex) => (
            <Skeleton key={colIndex} variant="text" height="16px" />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const SkeletonList = ({ 
  items = 5, 
  showAvatar = true, 
  showAction = true, 
  className = '' 
}) => (
  <div className={`skeleton-list ${className}`}>
    {Array.from({ length: items }, (_, index) => (
      <div key={index} className="skeleton-list-item">
        {showAvatar && (
          <Skeleton variant="circular" width="32px" height="32px" />
        )}
        <div className="skeleton-list-content">
          <Skeleton variant="text" width="60%" height="16px" />
          <Skeleton variant="text" width="40%" height="12px" />
        </div>
        {showAction && (
          <Skeleton variant="rectangular" width="60px" height="24px" />
        )}
      </div>
    ))}
  </div>
);

export const SkeletonProfile = ({ className = '' }) => (
  <div className={`skeleton-profile ${className}`}>
    <div className="skeleton-profile-header">
      <Skeleton variant="circular" width="80px" height="80px" />
      <div className="skeleton-profile-info">
        <Skeleton variant="text" width="150px" height="24px" />
        <Skeleton variant="text" width="100px" height="16px" />
        <Skeleton variant="text" width="200px" height="14px" />
      </div>
    </div>
    <div className="skeleton-profile-stats">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="skeleton-profile-stat">
          <Skeleton variant="text" width="40px" height="20px" />
          <Skeleton variant="text" width="60px" height="14px" />
        </div>
      ))}
    </div>
  </div>
);

export const SkeletonImage = ({ 
  width = '100%', 
  height = '200px', 
  className = '' 
}) => (
  <div className={`skeleton-image ${className}`}>
    <Skeleton 
      variant="rectangular" 
      width={width} 
      height={height}
      animation="wave"
    />
    <div className="skeleton-image-overlay">
      <Skeleton variant="circular" width="48px" height="48px" />
    </div>
  </div>
);

export default Skeleton;
