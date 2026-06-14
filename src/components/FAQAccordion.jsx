import React, { useState } from 'react';

const FAQ_DATA = [
  {
    q: "What is the best time to visit India?",
    a: "India is a year-round destination! October to March is ideal for most of North India (Rajasthan, Golden Triangle). South India is best from October to February. The Himalayas and Kashmir are stunning in summer (May–September). Monsoon season (July–September) has its own dramatic beauty, especially in Kerala and the Northeast.",
  },
  {
    q: "Do I need a visa to travel to India?",
    a: "Most nationalities require a visa. India offers e-Visa for citizens of over 160 countries, which can be obtained online within 72 hours. We provide full visa guidance and support as part of our tour planning services.",
  },
  {
    q: "How customizable are your tours?",
    a: "Every tour is 100% bespoke. We don't do cookie-cutter packages. Tell us your interests — heritage, wildlife, spirituality, cuisine, adventure — and we craft a personalized itinerary with handpicked hotels, private guides, and unique local experiences.",
  },
  {
    q: "What kind of accommodations do you offer?",
    a: "From heritage havelis and palace hotels to boutique properties and luxury tented camps. We also offer authentic homestays with Indian families for those seeking deeper cultural immersion. Every accommodation is personally vetted by our team.",
  },
  {
    q: "Is India safe for solo travelers and families?",
    a: "Absolutely! With our expert guides and 24/7 on-ground support, India is completely safe and incredibly rewarding. We specialize in family tours and have hosted solo travelers, school groups, and senior citizens with equal care and safety.",
  },
  {
    q: "What is responsible tourism and how do you practice it?",
    a: "We believe in travel that gives back. Our responsible tourism initiatives include supporting local artisans, promoting eco-friendly accommodations, community-based tourism projects, women empowerment programs, and clean water initiatives in rural areas.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="faq-list">
      {FAQ_DATA.map((item, i) => (
        <div className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`} key={i}>
          <button className="faq-item__question" onClick={() => toggle(i)}>
            <span>{item.q}</span>
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__answer">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
