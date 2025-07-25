import React, { useState } from 'react';
import { Search } from 'vj-ui-components';
import { 
  IconSearch, 
  IconUser, 
  IconFile, 
  IconFolder, 
  IconMail,
  IconSettings,
  IconChart,
  IconHome,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandPython,
  IconDatabase,
  IconCloud,
  IconDeviceMobile
} from '@tabler/icons-react';

const SearchExample = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Sample data for suggestions
  const suggestions = [
    {
      title: "User Profile Settings",
      description: "Manage your account settings and preferences",
      category: "Settings",
      metadata: { type: "page", icon: <IconUser size={16} /> }
    },
    {
      title: "Dashboard Analytics",
      description: "View detailed analytics and reports",
      category: "Analytics",
      metadata: { type: "page", icon: <IconChart size={16} /> }
    },
    {
      title: "File Manager",
      description: "Browse and manage your files",
      category: "Tools",
      metadata: { type: "app", icon: <IconFile size={16} /> }
    },
    {
      title: "Email Templates",
      description: "Create and manage email templates",
      category: "Communication",
      metadata: { type: "feature", icon: <IconMail size={16} /> }
    },
    {
      title: "Project Folders",
      description: "Organize your projects and documents",
      category: "Organization",
      metadata: { type: "feature", icon: <IconFolder size={16} /> }
    },
    {
      title: "System Settings",
      description: "Configure system preferences",
      category: "Settings",
      metadata: { type: "page", icon: <IconSettings size={16} /> }
    },
    {
      title: "React Components",
      description: "Browse available React components",
      category: "Development",
      metadata: { type: "documentation", icon: <IconBrandReact size={16} /> }
    },
    {
      title: "JavaScript Functions",
      description: "Utility functions and helpers",
      category: "Development",
      metadata: { type: "code", icon: <IconBrandJavascript size={16} /> }
    },
    {
      title: "TypeScript Interfaces",
      description: "Type definitions and interfaces",
      category: "Development",
      metadata: { type: "code", icon: <IconBrandTypescript size={16} /> }
    },
    {
      title: "Database Queries",
      description: "SQL queries and database operations",
      category: "Data",
      metadata: { type: "code", icon: <IconDatabase size={16} /> }
    }
  ];

  // Recent searches
  const recentSearches = [
    "user settings",
    "dashboard",
    "analytics report",
    "file upload",
    "email template"
  ];

  // Trending searches
  const trendingSearches = [
    {
      title: "React Hooks",
      description: "Most searched this week",
      metadata: { icon: <IconBrandReact size={16} /> }
    },
    {
      title: "API Integration",
      description: "Popular development topic",
      metadata: { icon: <IconCloud size={16} /> }
    },
    {
      title: "Mobile Design",
      description: "Trending UI topic",
      metadata: { icon: <IconDeviceMobile size={16} /> }
    },
    {
      title: "Python Scripts",
      description: "Hot in automation",
      metadata: { icon: <IconBrandPython size={16} /> }
    }
  ];

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Simulate search results
    const results = suggestions.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelect = (item) => {
    console.log('Selected:', item);
    alert(`Selected: ${typeof item === 'string' ? item : item.title}`);
  };

  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '900px', 
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
          Search Component Examples
        </h1>

        {/* Basic Search */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px', color: '#374151' }}>Basic Search</h2>
          
          <Search
            placeholder="Search anything..."
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
            onSelect={handleSelect}
            suggestions={suggestions.map(s => s.title)}
            recentSearches={recentSearches}
            variant="default"
          />
        </section>

        {/* Advanced Search with Recommendations */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px', color: '#374151' }}>Advanced Search with Recommendations</h2>
          
          <Search
            placeholder="Search with smart suggestions..."
            onSearch={handleSearch}
            onSelect={handleSelect}
            suggestions={suggestions}
            recentSearches={recentSearches}
            trendingSearches={trendingSearches}
            variant="glassmorphism"
            primaryColor="#6366f1"
            backgroundColor="rgba(99, 102, 241, 0.1)"
            showRecentSearches={true}
            showTrendingSearches={true}
            maxResults={6}
            debounceMs={200}
          />
        </section>

        {/* Size Variants */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px', color: '#374151' }}>Size Variants</h2>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <h4 style={{ marginBottom: '10px', color: '#6b7280' }}>Small</h4>
              <Search
                placeholder="Small search..."
                size="sm"
                suggestions={suggestions.slice(0, 4).map(s => s.title)}
                variant="outlined"
              />
            </div>
            
            <div>
              <h4 style={{ marginBottom: '10px', color: '#6b7280' }}>Medium (Default)</h4>
              <Search
                placeholder="Medium search..."
                size="md"
                suggestions={suggestions.slice(0, 4).map(s => s.title)}
                variant="filled"
              />
            </div>
            
            <div>
              <h4 style={{ marginBottom: '10px', color: '#6b7280' }}>Large</h4>
              <Search
                placeholder="Large search..."
                size="lg"
                suggestions={suggestions.slice(0, 4).map(s => s.title)}
                variant="glassmorphism"
                primaryColor="#8b5cf6"
              />
            </div>
          </div>
        </section>

        {/* Custom Styling */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px', color: '#374151' }}>Custom Styling</h2>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <h4 style={{ marginBottom: '10px', color: '#6b7280' }}>Purple Theme</h4>
              <Search
                placeholder="Search with purple theme..."
                suggestions={suggestions.slice(0, 5)}
                variant="glassmorphism"
                primaryColor="#8b5cf6"
                backgroundColor="rgba(139, 92, 246, 0.1)"
                focusBorderColor="#8b5cf6"
                borderRadius="16px"
                leftIcon={<IconSearch size={20} />}
              />
            </div>
            
            <div>
              <h4 style={{ marginBottom: '10px', color: '#6b7280' }}>Green Theme</h4>
              <Search
                placeholder="Search with green theme..."
                suggestions={suggestions.slice(0, 5)}
                variant="glassmorphism"
                primaryColor="#10b981"
                backgroundColor="rgba(16, 185, 129, 0.1)"
                focusBorderColor="#10b981"
                borderRadius="20px"
                leftIcon={<IconSearch size={20} />}
              />
            </div>
          </div>
        </section>

        {/* Behavior Customization */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '20px', color: '#374151' }}>Behavior Customization</h2>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <h4 style={{ marginBottom: '10px', color: '#6b7280' }}>Quick Search (No Debounce)</h4>
              <Search
                placeholder="Instant search results..."
                suggestions={suggestions}
                debounceMs={0}
                variant="filled"
                maxResults={4}
                emptyStateMessage="No instant results found"
              />
            </div>
            
            <div>
              <h4 style={{ marginBottom: '10px', color: '#6b7280' }}>Simple Search (No Recommendations)</h4>
              <Search
                placeholder="Simple search without recommendations..."
                suggestions={suggestions.map(s => s.title)}
                showRecentSearches={false}
                showTrendingSearches={false}
                variant="outlined"
                emptyStateMessage="Type to see suggestions"
              />
            </div>
            
            <div>
              <h4 style={{ marginBottom: '10px', color: '#6b7280' }}>Clear on Select</h4>
              <Search
                placeholder="Clears after selection..."
                suggestions={suggestions}
                recentSearches={recentSearches}
                clearOnSelect={true}
                variant="glassmorphism"
                onSelect={(item) => {
                  alert(`Selected: ${typeof item === 'string' ? item : item.title}`);
                }}
              />
            </div>
          </div>
        </section>

        {/* Real-world Example */}
        <section>
          <h2 style={{ marginBottom: '20px', color: '#374151' }}>Complete Search Experience</h2>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '30px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Search
              placeholder="Search documentation, files, settings..."
              suggestions={suggestions}
              recentSearches={recentSearches}
              trendingSearches={trendingSearches}
              onSearch={handleSearch}
              onSelect={handleSelect}
              variant="glassmorphism"
              size="lg"
              primaryColor="#6366f1"
              backgroundColor="rgba(255, 255, 255, 0.1)"
              borderRadius="12px"
              maxResults={8}
              showRecentSearches={true}
              showTrendingSearches={true}
              recentSearchesTitle="Recent"
              trendingSearchesTitle="Popular"
              suggestionsTitle="Suggestions"
              emptyStateMessage="No results found. Try a different search term."
              leftIcon={<IconSearch size={20} />}
            />
            
            <div style={{ 
              marginTop: '20px', 
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: '#6b7280'
            }}>
              <strong>Features demonstrated:</strong> Auto-complete, recent searches, trending suggestions, 
              keyboard navigation (↑↓ to navigate, Enter to select, Esc to close), debounced input, 
              custom theming, and glassmorphism design.
            </div>
          </div>
        </section>

        {/* Search Results Display */}
        {searchResults.length > 0 && (
          <section style={{ marginTop: '40px' }}>
            <h2 style={{ marginBottom: '20px', color: '#374151' }}>Search Results</h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  style={{
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontWeight: '600', color: '#1f2937', marginBottom: '4px' }}>
                    {result.title}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {result.description}
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: '#9ca3af', 
                    marginTop: '8px',
                    fontWeight: '500'
                  }}>
                    {result.category}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SearchExample;
