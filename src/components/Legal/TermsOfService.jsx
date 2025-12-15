import './Legal.css';

function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back">← Back to Home</a>

        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: December 2024</p>

        <p>
          Welcome to ntions. By accessing or using our website and services, you agree to be bound
          by these Terms of Service. Please read them carefully.
        </p>

        <h2>Services</h2>
        <p>
          ntions provides AI consulting, automation, and integration services for businesses.
          Our services are designed to help organizations work smarter and more efficiently
          through the practical application of artificial intelligence.
        </p>

        <h2>Use of Our Website</h2>
        <p>You agree to use our website only for lawful purposes and in a way that does not:</p>
        <ul>
          <li>Infringe the rights of others</li>
          <li>Restrict or inhibit anyone else from using the website</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Transmit any harmful or malicious code</li>
          <li>Attempt to gain unauthorized access to our systems</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, images, and software,
          is the property of ntions or its content suppliers and is protected by intellectual
          property laws. You may not reproduce, distribute, or create derivative works without
          our express written consent.
        </p>

        <h2>Client Engagements</h2>
        <p>
          Specific terms for consulting engagements and projects will be outlined in separate
          agreements. These Terms of Service govern general use of our website and do not
          supersede any signed client agreements.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          Our website and services are provided "as is" without warranties of any kind, either
          express or implied. We do not warrant that our services will be uninterrupted,
          error-free, or completely secure.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, ntions shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising from your use of our
          website or services.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless ntions and its officers, directors, employees,
          and agents from any claims, damages, or expenses arising from your use of our website
          or violation of these terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws
          of the jurisdiction in which ntions operates, without regard to conflict of law principles.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Changes will be
          effective immediately upon posting to our website. Your continued use of the website
          constitutes acceptance of the modified terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about these Terms of Service, please contact us through our
          website contact form.
        </p>

        <div className="legal-footer">
          <p>© {new Date().getFullYear()} ntions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
