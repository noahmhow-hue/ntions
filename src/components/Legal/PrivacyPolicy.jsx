import './Legal.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back">← Back to Home</a>

        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: December 2024</p>

        <p>
          At ntions, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect information about you in a variety of ways, including:</p>
        <ul>
          <li><strong>Personal Data:</strong> Name, email address, company name, and other contact information you voluntarily provide through our contact form.</li>
          <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
          <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and improve your experience.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you information about our services that may interest you</li>
          <li>Improve our website and services</li>
          <li>Analyze usage patterns and trends</li>
          <li>Protect against fraudulent or unauthorized activity</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share
          your information with trusted service providers who assist us in operating our website
          and conducting our business, as long as they agree to keep this information confidential.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your
          personal information. However, no method of transmission over the Internet is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of marketing communications</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices of these external sites. We encourage you to read their privacy policies.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes
          by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us through our
          website contact form or email us directly.
        </p>

        <div className="legal-footer">
          <p>© {new Date().getFullYear()} ntions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
