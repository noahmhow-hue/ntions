import { useEffect, useState } from 'react';
import './Loader.css';

function Loader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loader ${!isLoading ? 'loader-hidden' : ''}`}>
      <div className="loader-content">
        <svg
          className="loader-logo"
          width="60"
          height="60"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="wave wave-1"
            d="M4 30Q12 26 20 28Q28 30 36 26"
            stroke="url(#loader-gradient)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            className="wave wave-2"
            d="M6 24Q14 18 22 21Q30 24 36 18"
            stroke="url(#loader-gradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            className="wave wave-3"
            d="M10 16Q16 10 24 13Q32 16 36 10"
            stroke="url(#loader-gradient)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <circle className="dot dot-1" cx="34" cy="8" r="3" fill="url(#loader-gradient)" opacity="0.9"/>
          <circle className="dot dot-2" cx="30" cy="12" r="1.5" fill="url(#loader-gradient)" opacity="0.5"/>
          <defs>
            <linearGradient id="loader-gradient" x1="4" y1="30" x2="36" y2="8" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0044cc" />
              <stop offset="0.5" stopColor="#0066ff" />
              <stop offset="1" stopColor="#5b9fff" />
            </linearGradient>
          </defs>
        </svg>
        <span className="loader-text">ntions</span>
      </div>
    </div>
  );
}

export default Loader;
