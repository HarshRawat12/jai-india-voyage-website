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
    a: "Every tour is thoughtfully tailored. We begin with your interests — heritage, wildlife, spirituality, cuisine, adventure — then shape a personal itinerary with carefully chosen hotels, private guides, and meaningful local experiences.",
  },
  {
    q: "What kind of accommodations do you offer?",
    a: "From heritage havelis and palace hotels to boutique properties and luxury tented camps. We also offer authentic homestays with Indian families for guests seeking a deeper cultural connection. Each stay is personally checked by our team.",
  },
  {
    q: "Is India safe for solo travelers and families?",
    a: "Absolutely. With our experienced guides and 24/7 local support, you can travel India with reassurance. We welcome families, solo travelers, school groups, and seniors with the same care and attention.",
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
