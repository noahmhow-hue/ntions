import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '098b29a0-7077-45fa-9f66-e42559013725',
          email: email,
          from_name: 'ntions Newsletter',
          subject: 'New Newsletter Subscriber'
        })
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
    <div className="newsletter">
      <h3>Stay Updated</h3>
      <p>Get AI insights and practical tips delivered to your inbox weekly.</p>

      {status === 'success' ? (
        <div className="newsletter-success">
          <span className="success-check">✓</span>
          <span>You're subscribed!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? '...' : 'Subscribe'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="newsletter-error">Something went wrong. Try again.</p>
      )}

      <p className="newsletter-privacy">No spam. Unsubscribe anytime.</p>
    </div>
  );
}

export default Newsletter;
