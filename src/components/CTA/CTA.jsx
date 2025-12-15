import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './CTA.css';

function CTA() {
  const [ctaRef, ctaVisible] = useScrollAnimation(0.3);

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta">
      <div className="cta-bg"></div>
      <div className="cta-container">
        <div
          ref={ctaRef}
          className={`cta-content animate-scale ${ctaVisible ? 'is-visible' : ''}`}
        >
          <h2>Ready to work smarter?</h2>
          <p>
            Let's discuss how AI-powered solutions can help your business
            reduce manual work, improve efficiency, and scale faster.
          </p>
          <button className="cta-button" onClick={scrollToContact}>
            Start a Conversation
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
