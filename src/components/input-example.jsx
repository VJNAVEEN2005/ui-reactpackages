import React, { useState } from 'react';
import { Input } from '@vjnav/ui-components';
import { 
  IconUser, 
  IconMail, 
  IconLock, 
  IconSearch, 
  IconPhone,
  IconMapPin,
  IconCreditCard,
  IconCalendar,
  IconCheck,
  IconX
} from '@tabler/icons-react';

const InputExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    search: '',
    phone: '',
    address: '',
    cardNumber: '',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setErrors(prev => ({
        ...prev,
        email: 'Please enter a valid email address'
      }));
    }
  };

  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{ marginBottom: '30px', color: '#1f2937' }}>
        Input Component Examples
      </h1>

      {/* Basic Inputs */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: '#374151' }}>Basic Inputs</h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          <Input
            label="Username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange('username')}
            leftIcon={<IconUser size={18} />}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange('email')}
            onBlur={handleEmailBlur}
            leftIcon={<IconMail size={18} />}
            error={errors.email}
            success={formData.email && validateEmail(formData.email)}
            rightIcon={formData.email && validateEmail(formData.email) ? 
              <IconCheck size={18} color="#10b981" /> : 
              (errors.email ? <IconX size={18} color="#ef4444" /> : null)
            }
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange('password')}
            leftIcon={<IconLock size={18} />}
            showPasswordToggle={true}
            helperText="Password must be at least 8 characters long"
            required
          />
        </div>
      </section>

      {/* Variant Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: '#374151' }}>Variants</h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          <Input
            label="Default Variant"
            placeholder="Default styling"
            variant="default"
            leftIcon={<IconSearch size={18} />}
          />

          <Input
            label="Filled Variant"
            placeholder="Filled background"
            variant="filled"
            leftIcon={<IconSearch size={18} />}
          />

          <Input
            label="Outlined Variant"
            placeholder="Outlined border only"
            variant="outlined"
            leftIcon={<IconSearch size={18} />}
          />

          <Input
            label="Glassmorphism Variant"
            placeholder="Beautiful glass effect"
            variant="glassmorphism"
            leftIcon={<IconSearch size={18} />}
            backgroundColor="rgba(59, 130, 246, 0.1)"
          />
        </div>
      </section>

      {/* Size Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: '#374151' }}>Sizes</h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          <Input
            label="Small Size"
            placeholder="Small input field"
            size="sm"
            leftIcon={<IconUser size={16} />}
          />

          <Input
            label="Medium Size (Default)"
            placeholder="Medium input field"
            size="md"
            leftIcon={<IconUser size={18} />}
          />

          <Input
            label="Large Size"
            placeholder="Large input field"
            size="lg"
            leftIcon={<IconUser size={20} />}
          />
        </div>
      </section>

      {/* Custom Content Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: '#374151' }}>Custom Content</h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            leftContent={
              <div style={{ 
                padding: '4px 8px', 
                background: '#f3f4f6', 
                borderRadius: '4px',
                fontSize: '0.875rem',
                color: '#6b7280',
                border: '1px solid #e5e7eb'
              }}>
                +1
              </div>
            }
            rightIcon={<IconPhone size={18} />}
          />

          <Input
            label="Search with Badge"
            placeholder="Search products..."
            value={formData.search}
            onChange={handleInputChange('search')}
            leftIcon={<IconSearch size={18} />}
            rightContent={
              <div style={{ 
                padding: '2px 6px', 
                background: '#3b82f6', 
                color: 'white',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                ⌘K
              </div>
            }
          />

          <Input
            label="Credit Card"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleInputChange('cardNumber')}
            leftIcon={<IconCreditCard size={18} />}
            rightContent={
              <div style={{ display: 'flex', gap: '4px' }}>
                <img src="https://img.icons8.com/color/20/000000/visa.png" alt="Visa" />
                <img src="https://img.icons8.com/color/20/000000/mastercard.png" alt="Mastercard" />
              </div>
            }
          />
        </div>
      </section>

      {/* Special Input Types */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: '#374151' }}>Special Types</h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          <Input
            label="Date"
            type="date"
            value={formData.date}
            onChange={handleInputChange('date')}
            leftIcon={<IconCalendar size={18} />}
          />

          <Input
            label="Address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleInputChange('address')}
            leftIcon={<IconMapPin size={18} />}
            variant="glassmorphism"
          />

          <Input
            label="Disabled Input"
            placeholder="This input is disabled"
            disabled={true}
            leftIcon={<IconUser size={18} />}
            value="Cannot edit this"
          />

          <Input
            label="Read Only Input"
            placeholder="This input is read only"
            readOnly={true}
            leftIcon={<IconUser size={18} />}
            value="Read only value"
            helperText="This field cannot be modified"
          />
        </div>
      </section>

      {/* Custom Styling */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: '#374151' }}>Custom Styling</h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          <Input
            label="Custom Colors"
            placeholder="Beautiful custom styling"
            variant="glassmorphism"
            primaryColor="#8b5cf6"
            backgroundColor="rgba(139, 92, 246, 0.1)"
            focusBorderColor="#8b5cf6"
            leftIcon={<IconSearch size={18} />}
            borderRadius="16px"
          />

          <Input
            label="Success State"
            placeholder="This looks great!"
            success={true}
            leftIcon={<IconCheck size={18} />}
            helperText="Perfect! This field is valid."
          />

          <Input
            label="Error State"
            placeholder="Something went wrong"
            error="This field is required"
            leftIcon={<IconX size={18} />}
          />
        </div>
      </section>

      {/* Form Example */}
      <section>
        <h2 style={{ marginBottom: '20px', color: '#374151' }}>Complete Form Example</h2>
        
        <form style={{ 
          padding: '30px', 
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <Input
              label="Full Name"
              placeholder="John Doe"
              variant="glassmorphism"
              leftIcon={<IconUser size={18} />}
              required
            />
            
            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              variant="glassmorphism"
              leftIcon={<IconMail size={18} />}
              required
            />
            
            <Input
              label="Phone"
              type="tel"
              placeholder="(555) 123-4567"
              variant="glassmorphism"
              leftIcon={<IconPhone size={18} />}
            />
            
            <Input
              label="Address"
              placeholder="123 Main St, City, State"
              variant="glassmorphism"
              leftIcon={<IconMapPin size={18} />}
            />
          </div>
          
          <div style={{ marginTop: '20px' }}>
            <Input
              label="Password"
              type="password"
              placeholder="Create a secure password"
              variant="glassmorphism"
              leftIcon={<IconLock size={18} />}
              showPasswordToggle={true}
              helperText="Use at least 8 characters with a mix of letters, numbers, and symbols"
              required
            />
          </div>
          
          <button
            type="submit"
            style={{
              marginTop: '30px',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              width: '100%'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Submit Form
          </button>
        </form>
      </section>
    </div>
  );
};

export default InputExample;
