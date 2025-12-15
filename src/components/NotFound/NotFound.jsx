import Logo from '../Logo/Logo';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <Logo size={48} showText={false} />
        <h1>404</h1>
        <p>This page doesn't exist or has been moved.</p>
        <a href="/" className="btn-home">
          Back to Home
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </div>
  );
}

export default NotFound;
