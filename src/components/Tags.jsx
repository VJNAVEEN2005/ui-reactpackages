import React, { useState } from 'react';
import './Tags.css';

const Tags = ({
  tags = [],
  onTagAdd = () => {},
  onTagRemove = () => {},
  onTagClick = () => {},
  editable = false,
  removable = true,
  clickable = false,
  maxTags = null,
  placeholder = "Add a tag...",
  variant = 'default',
  size = 'medium',
  color = 'blue',
  className = ''
}) => {
  const [inputValue, setInputValue] = useState('');
  const [inputVisible, setInputVisible] = useState(false);

  const handleInputConfirm = () => {
    if (inputValue && inputValue.trim() !== '' && !tags.includes(inputValue.trim())) {
      if (maxTags === null || tags.length < maxTags) {
        onTagAdd(inputValue.trim());
      }
    }
    setInputValue('');
    setInputVisible(false);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleInputConfirm();
    } else if (e.key === 'Escape') {
      setInputValue('');
      setInputVisible(false);
    }
  };

  const handleTagRemove = (tagToRemove) => {
    onTagRemove(tagToRemove);
  };

  const handleTagClick = (tag) => {
    if (clickable) {
      onTagClick(tag);
    }
  };

  const sizeClasses = {
    small: 'tags-small',
    medium: 'tags-medium',
    large: 'tags-large'
  };

  const colorClasses = {
    blue: 'tags-blue',
    green: 'tags-green',
    red: 'tags-red',
    yellow: 'tags-yellow',
    purple: 'tags-purple',
    pink: 'tags-pink',
    gray: 'tags-gray'
  };

  const variantClasses = {
    default: 'tags-default',
    outlined: 'tags-outlined',
    filled: 'tags-filled',
    minimal: 'tags-minimal'
  };

  return (
    <div className={`tags-container ${className}`}>
      <div className="tags-list">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`
              tag 
              ${sizeClasses[size]} 
              ${colorClasses[color]} 
              ${variantClasses[variant]}
              ${clickable ? 'tag-clickable' : ''}
              ${removable ? 'tag-removable' : ''}
            `}
            onClick={() => handleTagClick(tag)}
          >
            <span className="tag-text">{tag}</span>
            {removable && (
              <button
                className="tag-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTagRemove(tag);
                }}
                aria-label={`Remove ${tag} tag`}
              >
                ×
              </button>
            )}
          </span>
        ))}
        
        {editable && (
          <>
            {inputVisible ? (
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleInputConfirm}
                onKeyDown={handleInputKeyPress}
                className={`tag-input ${sizeClasses[size]}`}
                placeholder={placeholder}
                autoFocus
              />
            ) : (
              <button
                className={`tag-add-button ${sizeClasses[size]} ${colorClasses[color]}`}
                onClick={() => setInputVisible(true)}
                disabled={maxTags !== null && tags.length >= maxTags}
              >
                + Add Tag
              </button>
            )}
          </>
        )}
      </div>
      
      {maxTags && (
        <div className="tags-counter">
          {tags.length} / {maxTags} tags
        </div>
      )}
    </div>
  );
};

// Predefined tag collections
export const TagCollections = {
  skills: ['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML', 'TypeScript'],
  categories: ['Work', 'Personal', 'Important', 'Urgent', 'Draft'],
  priorities: ['High', 'Medium', 'Low', 'Critical'],
  status: ['Active', 'Inactive', 'Pending', 'Completed', 'In Progress']
};

export default Tags;
