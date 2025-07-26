import React, { useState } from 'react';
import Skeleton, { 
  SkeletonCard, 
  SkeletonTable, 
  SkeletonList, 
  SkeletonProfile,
  SkeletonImage 
} from './Skeleton.jsx';

const SkeletonExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStates, setLoadingStates] = useState({
    card: true,
    table: true,
    list: true,
    profile: true,
    image: true
  });

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const toggleSpecificLoading = (type) => {
    setLoadingStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Skeleton Component Examples</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={toggleLoading}
          style={{ 
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '1rem'
          }}
        >
          {isLoading ? 'Show Content' : 'Show Skeletons'}
        </button>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Basic Skeleton Variants</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h4>Text Skeleton</h4>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </div>
          <div>
            <h4>Rectangular Skeleton</h4>
            <Skeleton variant="rectangular" width="100%" height="120px" />
          </div>
          <div>
            <h4>Circular Skeleton</h4>
            <Skeleton variant="circular" width="80px" height="80px" />
          </div>
          <div>
            <h4>Rounded Skeleton</h4>
            <Skeleton variant="rounded" width="100%" height="60px" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Multi-line Text Skeleton</h2>
        <Skeleton variant="text" lines={5} width="100%" />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Animation Types</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h4>Pulse Animation</h4>
            <Skeleton variant="rectangular" width="100%" height="100px" animation="pulse" />
          </div>
          <div>
            <h4>Wave Animation</h4>
            <Skeleton variant="rectangular" width="100%" height="100px" animation="wave" />
          </div>
          <div>
            <h4>No Animation</h4>
            <Skeleton variant="rectangular" width="100%" height="100px" animation="none" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Card Skeleton</h2>
        <button 
          onClick={() => toggleSpecificLoading('card')}
          style={{ 
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle Card Loading
        </button>
        {loadingStates.card ? (
          <SkeletonCard showAvatar={true} lines={3} />
        ) : (
          <div style={{ 
            padding: '1rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px',
            backgroundColor: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#3b82f6', 
                borderRadius: '50%' 
              }}></div>
              <div>
                <div style={{ fontWeight: 'bold' }}>John Doe</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Software Developer</div>
              </div>
            </div>
            <p>This is the actual content that would appear after loading is complete. It contains meaningful information about the user or item being displayed.</p>
          </div>
        )}
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Table Skeleton</h2>
        <button 
          onClick={() => toggleSpecificLoading('table')}
          style={{ 
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#8b5cf6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle Table Loading
        </button>
        {loadingStates.table ? (
          <SkeletonTable rows={5} columns={4} showHeader={true} />
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Name</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Email</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Role</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
                { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
                { name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' }
              ].map((user, index) => (
                <tr key={index}>
                  <td style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>{user.name}</td>
                  <td style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>{user.email}</td>
                  <td style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>{user.role}</td>
                  <td style={{ padding: '0.75rem', borderBottom: '1px solid #e5e7eb' }}>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>List Skeleton</h2>
        <button 
          onClick={() => toggleSpecificLoading('list')}
          style={{ 
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle List Loading
        </button>
        {loadingStates.list ? (
          <SkeletonList items={4} showAvatar={true} showAction={true} />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { name: 'Task 1', description: 'Complete the project documentation' },
              { name: 'Task 2', description: 'Review pull requests' },
              { name: 'Task 3', description: 'Update dependencies' },
              { name: 'Task 4', description: 'Fix reported bugs' }
            ].map((task, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                padding: '0.75rem',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                backgroundColor: 'white'
              }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: '#f59e0b', 
                  borderRadius: '50%' 
                }}></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '500' }}>{task.name}</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{task.description}</div>
                </div>
                <button style={{ 
                  padding: '0.25rem 0.75rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.875rem'
                }}>
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Profile Skeleton</h2>
        <button 
          onClick={() => toggleSpecificLoading('profile')}
          style={{ 
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#ec4899',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle Profile Loading
        </button>
        {loadingStates.profile ? (
          <SkeletonProfile />
        ) : (
          <div style={{ 
            padding: '1.5rem',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#3b82f6', 
                borderRadius: '50%' 
              }}></div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>Sarah Wilson</h3>
                <p style={{ margin: '0 0 0.5rem 0', color: '#6b7280' }}>Senior Frontend Developer</p>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>Building amazing user experiences with React and TypeScript</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>127</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Projects</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>1.2k</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Followers</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>567</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Following</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2>Image Skeleton</h2>
        <button 
          onClick={() => toggleSpecificLoading('image')}
          style={{ 
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Toggle Image Loading
        </button>
        {loadingStates.image ? (
          <SkeletonImage width="300px" height="200px" />
        ) : (
          <div style={{ 
            width: '300px', 
            height: '200px', 
            backgroundColor: '#3b82f6',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.125rem'
          }}>
            Loaded Image Content
          </div>
        )}
      </div>
    </div>
  );
};

export default SkeletonExample;
