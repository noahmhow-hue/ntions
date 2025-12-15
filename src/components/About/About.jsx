import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

function About() {
  const [contentRef, contentVisible] = useScrollAnimation(0.2);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          <div
            ref={contentRef}
            className={`about-content animate-slide-left ${contentVisible ? 'is-visible' : ''}`}
          >
            <span className="section-label">About ntions</span>
            <h2>Practical AI that delivers</h2>
            <p>
              We're a modern AI solutions company focused on helping businesses
              work smarter, move faster, and scale efficiently. By leveraging
              artificial intelligence, automation, and custom digital tools, we
              design systems that reduce manual work, improve decision-making,
              and unlock new growth opportunities.
            </p>
            <p>
              Our approach is simple: practical AI that delivers real results.
              We don't build hype-driven tech—we build solutions that integrate
              seamlessly into existing workflows and provide immediate value.
            </p>
            <div className="about-values">
              <div className="value">
                <span className="value-marker"></span>
                <span>Practical Solutions</span>
              </div>
              <div className="value">
                <span className="value-marker"></span>
                <span>Real Results</span>
              </div>
              <div className="value">
                <span className="value-marker"></span>
                <span>Long-term Reliability</span>
              </div>
            </div>
          </div>
          <div ref={statsRef} className="about-stats-grid">
            <div className={`stat-card animate-scale stagger-1 ${statsVisible ? 'is-visible' : ''}`}>
              <span className="stat-number">AI</span>
              <span className="stat-label">Powered Solutions</span>
            </div>
            <div className={`stat-card animate-scale stagger-2 ${statsVisible ? 'is-visible' : ''}`}>
              <span className="stat-number">100%</span>
              <span className="stat-label">Custom Built</span>
            </div>
            <div className={`stat-card animate-scale stagger-3 ${statsVisible ? 'is-visible' : ''}`}>
              <span className="stat-number">Fast</span>
              <span className="stat-label">Implementation</span>
            </div>
            <div className={`stat-card animate-scale stagger-4 ${statsVisible ? 'is-visible' : ''}`}>
              <span className="stat-number">Scalable</span>
              <span className="stat-label">Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
