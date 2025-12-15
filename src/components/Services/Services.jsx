import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Services.css';

function Services() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const services = [
    {
      number: '01',
      title: 'Intelligent Automation',
      description: 'Eliminate repetitive tasks and streamline operations with custom AI-powered automation that integrates into your existing workflows.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Management'],
    },
    {
      number: '02',
      title: 'Data-Driven Insights',
      description: 'Transform raw data into actionable intelligence. Make faster, smarter decisions with analytics that reveal what matters most.',
      features: ['Business Analytics', 'Predictive Models', 'Custom Dashboards'],
    },
    {
      number: '03',
      title: 'Custom AI Tools',
      description: 'Purpose-built AI solutions designed for your specific challenges. From chatbots to internal tools, we build what you need.',
      features: ['AI Assistants', 'Custom Integrations', 'API Development'],
    },
    {
      number: '04',
      title: 'Digital Optimization',
      description: 'Modernize your digital presence and infrastructure. We help you work smarter with systems built for scale and reliability.',
      features: ['System Architecture', 'Performance Tuning', 'Cloud Solutions'],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div
          ref={headerRef}
          className={`services-header animate-fade-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="section-label">Our Services</span>
          <h2>AI solutions that deliver real results</h2>
          <p>Enterprise-level efficiency without enterprise-level complexity. Every solution is tailored, scalable, and built for long-term reliability.</p>
        </div>
        <div ref={gridRef} className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card animate-fade-up stagger-${index + 1} ${gridVisible ? 'is-visible' : ''}`}
            >
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
