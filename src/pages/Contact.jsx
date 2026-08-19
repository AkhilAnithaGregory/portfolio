import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setStatus('loading');
      
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', mobile: '', email: '', message: '' });
        
        // Reset status after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
    }
  };

  return (
    <div style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Let's Work Together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Have a project, idea, or opportunity? I'd love to hear from you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <form 
            onSubmit={handleSubmit}
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '1rem',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {/* First Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="firstName" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                  First Name <span style={{ color: 'var(--error-color)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    padding: '0.875rem',
                    borderRadius: '0.5rem',
                    border: `1px solid ${errors.firstName ? 'var(--error-color)' : 'var(--card-border)'}`,
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={(e) => e.target.style.borderColor = errors.firstName ? 'var(--error-color)' : 'var(--card-border)'}
                />
                {errors.firstName && <span style={{ color: 'var(--error-color)', fontSize: '0.8rem' }}>{errors.firstName}</span>}
              </div>

              {/* Last Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="lastName" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                  Last Name <span style={{ color: 'var(--error-color)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    padding: '0.875rem',
                    borderRadius: '0.5rem',
                    border: `1px solid ${errors.lastName ? 'var(--error-color)' : 'var(--card-border)'}`,
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={(e) => e.target.style.borderColor = errors.lastName ? 'var(--error-color)' : 'var(--card-border)'}
                />
                {errors.lastName && <span style={{ color: 'var(--error-color)', fontSize: '0.8rem' }}>{errors.lastName}</span>}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                  Email <span style={{ color: 'var(--error-color)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    padding: '0.875rem',
                    borderRadius: '0.5rem',
                    border: `1px solid ${errors.email ? 'var(--error-color)' : 'var(--card-border)'}`,
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={(e) => e.target.style.borderColor = errors.email ? 'var(--error-color)' : 'var(--card-border)'}
                />
                {errors.email && <span style={{ color: 'var(--error-color)', fontSize: '0.8rem' }}>{errors.email}</span>}
              </div>

              {/* Mobile (Optional) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="mobile" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                  Mobile <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  style={{
                    padding: '0.875rem',
                    borderRadius: '0.5rem',
                    border: '1px solid var(--card-border)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                />
              </div>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                Message <span style={{ color: 'var(--error-color)' }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                style={{
                  padding: '0.875rem',
                  borderRadius: '0.5rem',
                  border: `1px solid ${errors.message ? 'var(--error-color)' : 'var(--card-border)'}`,
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  outline: 'none',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = errors.message ? 'var(--error-color)' : 'var(--card-border)'}
              ></textarea>
              {errors.message && <span style={{ color: 'var(--error-color)', fontSize: '0.8rem' }}>{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                opacity: status === 'loading' ? 0.7 : 1,
                transition: 'all 0.3s ease',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              }}
              onMouseOver={(e) => {
                if (status !== 'loading') e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              }}
              onMouseOut={(e) => {
                if (status !== 'loading') e.currentTarget.style.backgroundColor = 'var(--accent-color)';
              }}
            >
              {status === 'loading' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success/Error Toasts */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '50%',
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--success-color)',
              color: 'var(--text-primary)',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }}
          >
            <CheckCircle color="var(--success-color)" size={24} style={{ marginTop: '2px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <strong style={{ color: 'var(--success-color)' }}>Message sent successfully!</strong>
              <span style={{ fontSize: '0.9rem' }}>Thanks for reaching out. I'll get back to you soon.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
