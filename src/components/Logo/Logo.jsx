import './Logo.css';

function Logo({ size = 32, showText = true }) {
  return (
    <div className="logo-container">
      <svg
        className="logo-icon"
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Abstract rising waves/layers */}
        <path
          d="M4 30Q12 26 20 28Q28 30 36 26"
          stroke="url(#wave-gradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M6 24Q14 18 22 21Q30 24 36 18"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M10 16Q16 10 24 13Q32 16 36 10"
          stroke="url(#wave-gradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Rising accent element */}
        <circle cx="34" cy="8" r="3" fill="url(#wave-gradient)" opacity="0.9"/>
        <circle cx="30" cy="12" r="1.5" fill="url(#wave-gradient)" opacity="0.5"/>

        <defs>
          <linearGradient id="wave-gradient" x1="4" y1="30" x2="36" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0044cc" />
            <stop offset="0.5" stopColor="#0066ff" />
            <stop offset="1" stopColor="#5b9fff" />
          </linearGradient>
        </defs>
      </svg>
      {showText && <span className="logo-text">ntions</span>}
    </div>
  );
}

export default Logo;
