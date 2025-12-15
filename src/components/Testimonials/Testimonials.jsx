import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      quote: "NTiONS transformed our online presence completely. Their attention to detail and commitment to excellence is unmatched. Our conversions increased by 150% within the first month.",
      author: "Sarah Chen",
      role: "CEO, TechFlow Inc.",
      avatar: "SC",
    },
    {
      quote: "Working with NTiONS was a game-changer for our startup. They understood our vision from day one and delivered beyond our expectations. Highly recommend!",
      author: "Marcus Johnson",
      role: "Founder, Elevate Labs",
      avatar: "MJ",
    },
    {
      quote: "The team at NTiONS brings both creativity and technical expertise to every project. They're not just developers, they're true partners in building something great.",
      author: "Emily Rodriguez",
      role: "Marketing Director, Nova Brands",
      avatar: "ER",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2>What our clients say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote">
                <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
