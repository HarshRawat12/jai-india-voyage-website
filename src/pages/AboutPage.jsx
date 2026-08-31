import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const TEAM = [
  {
    name: 'Ashish Mittal',
    photo: '/images/team/ashish_mittal.webp',
    initials: 'AM',
    bio: "Educated in Paris and a psychology scholar in Delhi, Ashish earned a distinguished scholarship at the University of Angers, France. A licensed guide of over two decades, he is part historian, part storyteller — a living archive of India's cultures, traditions, and artisanal heritage.",
  },
  {
    name: 'Raj Vir Mittal',
    photo: '/images/team/raj_vir_mittal.webp',
    initials: 'RM',
    bio: 'After a decade in Europe, Raj Vir introduced "Namastey India" to France and Italy. A photographer and professionally qualified travel writer, he is the mentor behind Jai India Voyage and an authority on India\'s tribes, cuisines and hidden corners.',
  },
  {
    name: 'Vikas Sajwan',
    photo: '/images/team/vikas_sajwan.webp',
    initials: 'VS',
    bio: 'A keen traveller and travel graduate, Vikas heads the operations team that helps each tailored itinerary unfold with care. He embodies the company vision — treating travel as an intimate and intellectual experience rather than a checklist of sights.',
  },
  {
    name: 'Divya Mittal',
    photo: '/images/team/divya_mittal.webp',
    initials: 'DM',
    bio: "Divya's passion for cooking is woven into the guest experience — private lunches, intimate dinners and hosted cooking classes that reflect her talent and warmth. She also oversees the company's accounts, bringing the same precision to its finances.",
  },
];

const CSR_INITIATIVES = [
  {
    title: 'Women Empowerment',
    desc: 'Training women in rural communities as local guides, artisans, and homestay hosts — creating sustainable livelihoods.',
    image: '/images/Empowering_Women.webp',
  },
  {
    title: 'Clean Water Initiative',
    desc: 'Partnering with NGOs to provide clean drinking water access in remote villages of Rajasthan.',
    image: '/images/Clean_Water_Initiative.webp',
  },
  {
    title: 'Artisan Support',
    desc: 'Connecting traditional craftspeople directly with tourists, ensuring fair trade and preserving centuries-old art forms.',
    image: '/images/Crafting_Livelihood.webp',
  },
  {
    title: 'Hygiene & Education',
    desc: 'Distributing hygiene kits and supporting education programs in underserved communities we visit.',
    image: '/images/Hygiene_Empowerment.webp',
  },
  {
    title: 'Sustainable Livelihood',
    desc: 'Building resilient livelihoods through the conservation of natural resources and sustainable agricultural practices.',
    image: '/images/Sustainable_Livelihood.webp',
  },
  {
    title: 'Digital Education Drive',
    desc: 'Expanding access to learning by supporting digital classrooms and technology-enabled education in local communities.',
    image: '/images/Jiv_5.webp',
  },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection
        image="/images/header_about.webp"
        label="Our Story"
        title="A Legacy of <em>Passion</em>"
        subtitle="Three generations of love for India, its people, and its timeless heritage."
        short
      />

      {/* ─── OUR STORY ─── */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">About Us</p>
              <h2>The Jai India Voyage Story</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-center">
              <p>
                <strong>Jai India Voyage Pvt. Ltd.</strong> is a Destination Management Company led by experienced tourism professionals with decades of expertise in Europe and India.
              </p>
              <p>
                We shape <strong>tailor-made journeys</strong> across India and the subcontinent, specialising in lesser-known cultural, heritage, wildlife, adventure, wellness, and leisure experiences.
              </p>
              <p>
                Our tailored programmes welcome travellers, photographers, journalists, and Press &amp; TV teams drawn to places beyond the familiar route.
              </p>
              <p>
                We also curate specialised experiences around <strong>Indian art, crafts, textiles, architecture, festivals, and tribal cultures</strong>, along with private Indian cooking sessions featuring regional specialities.
              </p>
              <p className="prose-center__closing prose-center__closing--italic">
                Our philosophy is simple: <strong>India is more than a holiday — it is an opportunity to discover, connect, and experience something deeply personal.</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="section section--cream">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Our People</p>
              <h2>Meet the Team</h2>
              <p className="section-subtitle">
                The caring people behind every meaningful journey
              </p>
            </div>
          </ScrollReveal>

          <div className="team-grid">
            {TEAM.map((member) => (
              <ScrollReveal key={member.name} className="team-grid__cell">
                <article className="team-card">
                  <div className="team-card__frame">
                    {member.photo ? (
                      <img
                        className="team-card__photo"
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                      />
                    ) : (
                      <span className="team-card__monogram" aria-hidden="true">
                        {member.initials}
                      </span>
                    )}
                  </div>

                  <div className="team-card__body">
                    <h3 className="team-card__name">{member.name}</h3>
                    <p className="team-card__bio">{member.bio}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CSR / RESPONSIBLE TOURISM ─── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Giving Back</p>
              <h2>Responsible Tourism</h2>
              <p className="section-subtitle">
                We believe travel should uplift communities, preserve cultures, and protect our planet.
              </p>
            </div>
          </ScrollReveal>

          <div className="csr-grid">
            {CSR_INITIATIVES.map((item) => (
              <ScrollReveal key={item.title}>
                <div className="feature-card feature-card--csr">
                  <div className="csr-card__avatar">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
