import Logo from '../Logo/Logo';
import './Footer.css';

function Footer() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo size={36} showText={true} />
            <p>AI solutions that help businesses work smarter, move faster, and scale efficiently.</p>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-column">
              <h4>Navigate</h4>
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
              <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            </div>
            <div className="footer-nav-column">
              <h4>Resources</h4>
              <a href="/blog">Blog</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ntions. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
