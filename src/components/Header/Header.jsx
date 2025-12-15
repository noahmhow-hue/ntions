import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="header-logo">
          <Logo size={32} showText={true} />
        </a>
        <nav className="nav">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
