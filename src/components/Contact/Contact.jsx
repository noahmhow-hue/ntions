import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

function Contact() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [formRef, formVisible] = useScrollAnimation(0.2);

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
        <form
          ref={formRef}
          className={`contact-form animate-fade-up ${formVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your email" required />
            </div>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company (optional)" />
          </div>
          <div className="form-group">
            <textarea placeholder="Tell us about your project or challenge..." rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Send Message
            <span className="btn-arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
