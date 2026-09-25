import React, { useState } from 'react';
import './JoinYappers.css';

const JoinYappers = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const { submitJoinRequest } = await import('../../services/api');
      const res = await submitJoinRequest(formData);
      if (res.success) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', reason: '' });
      } else {
        setErrorMsg(res.message || 'Something went wrong');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join" className="join-section">
      <div className="join-container">
        
        <div className="join-card">
          <div className="join-icon-wrapper">
            <svg className="join-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          
          <h2 className="join-title">Join Yappers Chhatarpur</h2>
          <p className="join-subtitle">
            Fill this quick note and we'll send you an invite on WhatsApp for our next gathering.
          </p>

          {isSubmitted ? (
            <div className="join-success-msg">
              <h3 className="success-title">Thanks! We'll reach out to you soon.</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="join-form">
              <div className="form-group">
                <label htmlFor="name">YOUR NAME *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="e.g. Ananya or Rahul" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">WHATSAPP / PHONE NUMBER *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="+91 98765 43210" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="reason">WHY DO YOU WANT TO JOIN?</label>
                <textarea 
                  id="reason" 
                  name="reason" 
                  placeholder="Tell us what you enjoy—morning walks, cafe talks, or making new friends..." 
                  value={formData.reason}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>

              {errorMsg && <p className="error-text" style={{ color: 'red', marginBottom: '10px' }}>{errorMsg}</p>}
              <button type="submit" className="join-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send My Invite →'}
              </button>
            </form>
          )}

          <div className="join-footer-note">
            <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Zero spam. Verified, warm and safe community.
          </div>
        </div>

      </div>
    </section>
  );
};

export default JoinYappers;
