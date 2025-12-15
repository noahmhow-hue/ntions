import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './NewsletterSection.css';

function NewsletterSection() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.2);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="newsletter-section">
      <div
        ref={sectionRef}
        className={`newsletter-section-container animate-fade-up ${sectionVisible ? 'is-visible' : ''}`}
      >
        <div className="newsletter-section-content">
          <span className="section-label">Newsletter</span>
          <h2>Get AI insights delivered weekly</h2>
          <p>
            Practical tips, industry trends, and actionable strategies to help your business
            leverage AI effectively. No spam, just value.
          </p>
        </div>

        <div className="newsletter-section-form">
          {status === 'success' ? (
            <div className="newsletter-success-box">
              <span className="success-icon">✓</span>
              <div>
                <strong>You're subscribed!</strong>
                <p>Check your inbox for a welcome email.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {status === 'error' && (
                <p className="newsletter-error">Something went wrong. Please try again.</p>
              )}
              <p className="newsletter-disclaimer">
                Join 100+ business leaders. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
