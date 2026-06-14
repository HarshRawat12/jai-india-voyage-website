import React, { useState, useEffect, useRef } from 'react';

export default function LotusLoader({ onLoadingComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const mountTime = useRef(Date.now());

  useEffect(() => {
    const minDisplayTime = 3200; // minimum time to show the bloom animation

    const handleLoad = () => {
      const elapsed = Date.now() - mountTime.current;
      const remaining = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsVisible(false);
          if (onLoadingComplete) onLoadingComplete();
        }, 900);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`lotus-loader ${isExiting ? 'lotus-loader--exit' : ''}`}
      id="lotus-loader"
      aria-label="Loading page content"
      role="status"
    >
      {/* Background particles */}
      <div className="lotus-loader__particles">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="lotus-loader__particle"
            style={{
              '--x': `${5 + Math.random() * 90}%`,
              '--delay': `${Math.random() * 4}s`,
              '--size': `${3 + Math.random() * 6}px`,
              '--duration': `${5 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Rotating mandala ring behind lotus */}
      <div className="lotus-loader__mandala-ring">
        <svg viewBox="0 0 300 300" className="lotus-loader__mandala-svg">
          {/* Outer decorative ring */}
          <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          <circle cx="150" cy="150" r="130" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.15" strokeDasharray="4 8" />
          {/* Tick marks */}
          {Array.from({ length: 36 }).map((_, i) => (
            <line
              key={i}
              x1="150"
              y1={i % 3 === 0 ? 8 : 12}
              x2="150"
              y2={i % 3 === 0 ? 22 : 18}
              stroke="currentColor"
              strokeWidth={i % 3 === 0 ? 1.2 : 0.5}
              opacity={i % 3 === 0 ? 0.7 : 0.25}
              transform={`rotate(${i * 10} 150 150)`}
            />
          ))}
          {/* Decorative dots */}
          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={`dot-${i}`}
              cx="150"
              cy="16"
              r="2"
              fill="currentColor"
              opacity="0.45"
              transform={`rotate(${i * 30} 150 150)`}
            />
          ))}
          {/* Diamond shapes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <polygon
              key={`diamond-${i}`}
              points="150,26 152,30 150,34 148,30"
              fill="currentColor"
              opacity="0.35"
              transform={`rotate(${i * 45} 150 150)`}
            />
          ))}
        </svg>
      </div>

      {/* The Lotus — pure SVG with group-based rotation for proper animation */}
      <div className="lotus-loader__lotus">
        <svg
          viewBox="0 0 200 220"
          className="lotus-loader__lotus-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="petal-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8D5A8" />
              <stop offset="50%" stopColor="#D4BC8A" />
              <stop offset="100%" stopColor="#B89E60" />
            </linearGradient>
            <linearGradient id="petal-gold-inner" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0E0B8" />
              <stop offset="50%" stopColor="#E8D5A8" />
              <stop offset="100%" stopColor="#D4BC8A" />
            </linearGradient>
            <linearGradient id="petal-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0A070" />
              <stop offset="40%" stopColor="#E85D3A" />
              <stop offset="100%" stopColor="#C4452A" />
            </linearGradient>
            <radialGradient id="center-glow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#F0E0B8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C8A96E" stopOpacity="0" />
            </radialGradient>
            <filter id="soft-glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="petal-shadow">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#C8A96E" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Center glow effect */}
          <circle cx="100" cy="140" r="35" fill="url(#center-glow)" className="lotus-loader__center-glow" />

          {/* ── OUTER PETALS (bloom 3rd — largest, widest spread) ── */}
          {[
            { rotate: -60, delay: 1.6 },
            { rotate: -35, delay: 1.7 },
            { rotate: -12, delay: 1.75 },
            { rotate: 12, delay: 1.8 },
            { rotate: 35, delay: 1.85 },
            { rotate: 60, delay: 1.9 },
          ].map((p, i) => (
            <g key={`outer-${i}`} transform={`rotate(${p.rotate} 100 145)`}>
              <path
                d="M100 145 Q80 100 90 50 Q100 40 110 50 Q120 100 100 145"
                fill="url(#petal-gold)"
                stroke="#C8A96E"
                strokeWidth="0.4"
                className="lotus-loader__petal"
                style={{ '--bloom-delay': `${p.delay}s` }}
                filter="url(#petal-shadow)"
              />
            </g>
          ))}

          {/* ── MIDDLE PETALS (bloom 2nd) ── */}
          {[
            { rotate: -40, delay: 1.1 },
            { rotate: -15, delay: 1.2 },
            { rotate: 0, delay: 1.15 },
            { rotate: 15, delay: 1.25 },
            { rotate: 40, delay: 1.3 },
          ].map((p, i) => (
            <g key={`mid-${i}`} transform={`rotate(${p.rotate} 100 145)`}>
              <path
                d="M100 143 Q84 105 92 65 Q100 55 108 65 Q116 105 100 143"
                fill="url(#petal-gold-inner)"
                stroke="#D4BC8A"
                strokeWidth="0.3"
                className="lotus-loader__petal"
                style={{ '--bloom-delay': `${p.delay}s` }}
                filter="url(#petal-shadow)"
              />
            </g>
          ))}

          {/* ── INNER PETALS (bloom 1st — smallest, central) ── */}
          {[
            { rotate: -20, delay: 0.5 },
            { rotate: 0, delay: 0.6 },
            { rotate: 20, delay: 0.7 },
          ].map((p, i) => (
            <g key={`inner-${i}`} transform={`rotate(${p.rotate} 100 142)`}>
              <path
                d="M100 140 Q88 112 94 80 Q100 72 106 80 Q112 112 100 140"
                fill="url(#petal-gold-inner)"
                stroke="#E8D5A8"
                strokeWidth="0.3"
                className="lotus-loader__petal"
                style={{ '--bloom-delay': `${p.delay}s` }}
              />
            </g>
          ))}

          {/* ── CENTER PISTIL ── */}
          <circle
            cx="100"
            cy="140"
            r="10"
            fill="url(#petal-accent)"
            className="lotus-loader__pistil"
            filter="url(#soft-glow)"
          />
          <circle
            cx="100"
            cy="140"
            r="5"
            fill="#F0E0B8"
            opacity="0.6"
            className="lotus-loader__pistil-inner"
          />

          {/* ── DECORATIVE SIDE CURVES (water/leaves) ── */}
          <path
            d="M40 170 Q30 155 50 145 Q65 150 85 148"
            fill="none"
            stroke="#C8A96E"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="lotus-loader__leaf"
            style={{ '--bloom-delay': '2.2s' }}
          />
          <path
            d="M160 170 Q170 155 150 145 Q135 150 115 148"
            fill="none"
            stroke="#C8A96E"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="lotus-loader__leaf"
            style={{ '--bloom-delay': '2.3s' }}
          />

          {/* Water line */}
          <path
            d="M30 175 Q65 168 100 170 Q135 172 170 175"
            fill="none"
            stroke="#C8A96E"
            strokeWidth="0.8"
            opacity="0.3"
            className="lotus-loader__leaf"
            style={{ '--bloom-delay': '2.4s' }}
          />
        </svg>
      </div>

      {/* Brand text */}
      <div className="lotus-loader__brand">
        <span className="lotus-loader__brand-name">Jai India Voyage</span>
        <span className="lotus-loader__brand-tagline">Crafting your journey...</span>
      </div>

      {/* Loading dots */}
      <div className="lotus-loader__dots">
        <span className="lotus-loader__dot" style={{ '--dot-delay': '0s' }} />
        <span className="lotus-loader__dot" style={{ '--dot-delay': '0.2s' }} />
        <span className="lotus-loader__dot" style={{ '--dot-delay': '0.4s' }} />
      </div>
    </div>
  );
}
