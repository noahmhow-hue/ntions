import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import About from './components/About/About';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
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
  );
}

export default App;
