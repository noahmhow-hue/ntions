import './Hero.css';

function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-badge">AI Solutions for Modern Business</div>
        <h1>
          Work Smarter.<br />
          <span className="highlight">Scale Faster.</span>
        </h1>
        <p>
          We build practical AI solutions that integrate seamlessly into your
          workflows. No hype—just intelligent automation, data-driven insights,
          and custom tools that deliver real, measurable results.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>
            Get Started
          </button>
          <button className="btn-secondary" onClick={(e) => scrollToSection(e, 'services')}>
            Explore Services
          </button>
        </div>
      </div>
      <div className="hero-glow"></div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
}

export default Hero;
