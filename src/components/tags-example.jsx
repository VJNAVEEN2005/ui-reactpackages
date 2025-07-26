import React, { useState } from 'react';
import Tags, { TagCollections } from './Tags.jsx';

const TagsExample = () => {
  const [skills, setSkills] = useState(['JavaScript', 'React', 'CSS']);
  const [categories, setCategories] = useState(['Work', 'Important']);
  const [priorities, setPriorities] = useState([]);
  const [editableTags, setEditableTags] = useState(['Tag 1', 'Tag 2']);

  const handleSkillAdd = (tag) => {
    setSkills([...skills, tag]);
  };

  const handleSkillRemove = (tagToRemove) => {
    setSkills(skills.filter(tag => tag !== tagToRemove));
  };

  const handleCategoryAdd = (tag) => {
    setCategories([...categories, tag]);
  };

  const handleCategoryRemove = (tagToRemove) => {
    setCategories(categories.filter(tag => tag !== tagToRemove));
  };

  const handlePriorityAdd = (tag) => {
    setPriorities([...priorities, tag]);
  };

  const handlePriorityRemove = (tagToRemove) => {
    setPriorities(priorities.filter(tag => tag !== tagToRemove));
  };

  const handleEditableAdd = (tag) => {
    setEditableTags([...editableTags, tag]);
  };

  const handleEditableRemove = (tagToRemove) => {
    setEditableTags(editableTags.filter(tag => tag !== tagToRemove));
  };

  const handleTagClick = (tag) => {
    alert(`Clicked on tag: ${tag}`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Tags Component Examples</h1>
      
      <div style={{ marginBottom: '3rem' }}>
        <h2>Basic Tags (Read-only)</h2>
        <Tags
          tags={['HTML', 'CSS', 'JavaScript', 'React']}
          variant="default"
          color="blue"
          size="medium"
          removable={false}
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Editable Skills Tags</h2>
        <Tags
          tags={skills}
          onTagAdd={handleSkillAdd}
          onTagRemove={handleSkillRemove}
          editable={true}
          maxTags={10}
          placeholder="Add a skill..."
          variant="filled"
          color="green"
          size="medium"
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Category Tags (Outlined)</h2>
        <Tags
          tags={categories}
          onTagAdd={handleCategoryAdd}
          onTagRemove={handleCategoryRemove}
          editable={true}
          variant="outlined"
          color="purple"
          size="large"
          maxTags={5}
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Priority Tags (Clickable)</h2>
        <Tags
          tags={priorities}
          onTagAdd={handlePriorityAdd}
          onTagRemove={handlePriorityRemove}
          onTagClick={handleTagClick}
          editable={true}
          clickable={true}
          variant="minimal"
          color="red"
          size="small"
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Different Variants</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h4>Default Variant</h4>
            <Tags tags={['Tag 1', 'Tag 2', 'Tag 3']} variant="default" color="blue" />
          </div>
          <div>
            <h4>Outlined Variant</h4>
            <Tags tags={['Tag 1', 'Tag 2', 'Tag 3']} variant="outlined" color="green" />
          </div>
          <div>
            <h4>Filled Variant</h4>
            <Tags tags={['Tag 1', 'Tag 2', 'Tag 3']} variant="filled" color="purple" />
          </div>
          <div>
            <h4>Minimal Variant</h4>
            <Tags tags={['Tag 1', 'Tag 2', 'Tag 3']} variant="minimal" color="yellow" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Different Colors</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'gray'].map(color => (
            <div key={color}>
              <h4 style={{ textTransform: 'capitalize' }}>{color}</h4>
              <Tags tags={[`${color} tag 1`, `${color} tag 2`]} color={color} variant="default" />
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Different Sizes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h4>Small</h4>
            <Tags tags={['Small Tag 1', 'Small Tag 2']} size="small" color="blue" />
          </div>
          <div>
            <h4>Medium</h4>
            <Tags tags={['Medium Tag 1', 'Medium Tag 2']} size="medium" color="blue" />
          </div>
          <div>
            <h4>Large</h4>
            <Tags tags={['Large Tag 1', 'Large Tag 2']} size="large" color="blue" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Predefined Collections</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <h4>Skills Collection</h4>
            <Tags tags={TagCollections.skills.slice(0, 4)} color="blue" removable={false} />
          </div>
          <div>
            <h4>Categories Collection</h4>
            <Tags tags={TagCollections.categories.slice(0, 3)} color="green" removable={false} />
          </div>
          <div>
            <h4>Priorities Collection</h4>
            <Tags tags={TagCollections.priorities} color="red" removable={false} />
          </div>
          <div>
            <h4>Status Collection</h4>
            <Tags tags={TagCollections.status.slice(0, 3)} color="purple" removable={false} />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Full-featured Editable Tags</h2>
        <Tags
          tags={editableTags}
          onTagAdd={handleEditableAdd}
          onTagRemove={handleEditableRemove}
          onTagClick={handleTagClick}
          editable={true}
          clickable={true}
          removable={true}
          maxTags={8}
          placeholder="Type and press Enter..."
          variant="default"
          color="blue"
          size="medium"
        />
      </div>
    </div>
  );
};

export default TagsExample;
