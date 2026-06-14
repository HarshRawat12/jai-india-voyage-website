import React from 'react';

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar__stat">
        <div className="trust-bar__number">25+</div>
        <div className="trust-bar__label">Years of Expertise</div>
      </div>
      <div className="trust-bar__stat">
        <div className="trust-bar__number">5000+</div>
        <div className="trust-bar__label">Happy Travelers</div>
      </div>
      <div className="trust-bar__stat">
        <div className="trust-bar__number">200+</div>
        <div className="trust-bar__label">Curated Itineraries</div>
      </div>
      <div className="trust-bar__stat">
        <div className="trust-bar__number">30+</div>
        <div className="trust-bar__label">Countries Served</div>
      </div>
      <div className="trust-bar__item">
        <img src="/images/IATO_Logo.jpeg" alt="IATO Member" />
      </div>
      <div className="trust-bar__item">
        <img src="/images/dot_logo.jpeg" alt="Govt. of India Approved" />
      </div>
    </div>
  );
}
