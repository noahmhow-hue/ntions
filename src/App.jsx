import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import About from './components/About/About';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import TermsOfService from './components/Legal/TermsOfService';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/privacy') setCurrentPage('privacy');
    else if (path === '/terms') setCurrentPage('terms');
    else setCurrentPage('home');
  }, []);

  const handleLoaderComplete = () => {
    setIsLoaded(true);
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService />;
  }

  return (
    <>
      {!isLoaded && <Loader onComplete={handleLoaderComplete} />}
      <div className={`app ${isLoaded ? 'app-loaded' : ''}`}>
        <Header />
        <main>
          <Hero />
          <Services />
          <Features />
          <About />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
