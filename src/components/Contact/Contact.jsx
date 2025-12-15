import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

function Contact() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [formRef, formVisible] = useScrollAnimation(0.2);
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '098b29a0-7077-45fa-9f66-e42559013725',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          from_name: 'ntions Website',
          subject: `New inquiry from ${formData.name}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div
          ref={headerRef}
          className={`contact-header animate-fade-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-label">Get in touch</span>
          <h2>Let's build something great</h2>
          <p>Tell us about your project and we'll get back to you with ideas on how we can help.</p>
        </div>

        {status === 'success' ? (
          <div className="form-success animate-fade-up is-visible">
            <div className="success-icon">✓</div>
            <h3>Message sent!</h3>
            <p>We'll get back to you within 24 hours.</p>
            <button onClick={() => setStatus('idle')} className="btn-submit">
              Send another message
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            className={`contact-form animate-fade-up ${formVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your project or challenge..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again.</p>
            )}
            <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
              {status !== 'submitting' && <span className="btn-arrow">→</span>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
