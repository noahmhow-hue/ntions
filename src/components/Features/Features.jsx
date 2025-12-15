import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Features.css';

function Features() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const features = [
    {
      number: '01',
      title: 'Seamless Integration',
      description: 'Our solutions plug directly into your existing tools and workflows. No disruption, no steep learning curve - just immediate value.',
    },
    {
      number: '02',
      title: 'Scalable Architecture',
      description: 'Built to grow with your business. Start small and expand as needed, with systems designed for long-term reliability.',
    },
    {
      number: '03',
      title: 'Measurable Outcomes',
      description: 'We focus on results you can track. Every solution comes with clear metrics so you know exactly what value you are getting.',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div
          ref={headerRef}
          className={`features-header animate-fade-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-label">Why ntions</span>
          <h2>Practical AI, real results</h2>
        </div>
        <div ref={gridRef} className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card animate-fade-up stagger-${index + 1} ${gridVisible ? 'is-visible' : ''}`}
            >
              <div className="feature-number">{feature.number}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
