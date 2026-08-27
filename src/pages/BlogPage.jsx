import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Varanasi: The City Older Than History',
    location: 'Varanasi, Uttar Pradesh',
    category: 'Spiritual',
    readTime: '6 min read',
    date: 'June 10, 2026',
    image: '/images/Holy-tour-to-Haridwar.jpg',
    summary: 'Discover India\'s spiritual heart on the banks of the sacred Ganges—a mystical city of rituals, ancient temples, and eternal fire.',
    content: `
      <p>Varanasi, also known as Benares or Kashi, is not just a city; it is a doorway into another dimension of human spirituality. Mark Twain famously wrote: <em>"Benares is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together."</em> For over 3,000 years, this sacred spot on the banks of the River Ganges has been the center of the Hindu universe, drawing pilgrims, yogis, and travelers seeking liberation (Moksha).</p>
      
      <h3>The Deep History</h3>
      <p>According to legend, Varanasi was founded by Lord Shiva himself. The city has witnessed the rise and fall of empires, surviving waves of invasions while maintaining its spiritual heartbeat. It is where Gautama Buddha gave his first sermon in nearby Sarnath around 528 BCE, and where the great poet Kabir lived and wrote. Walking through the narrow, maze-like alleyways (known as galis), you are walking through layers of living history—ancient shrines, small spice stalls, and cows wandering past medieval doorways.</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>The Ganga Aarti at Sunset:</strong> As dusk falls, head to Dashashwamedh Ghat. The air fills with the smell of incense, sandalwood, and camphor. Seven young priests, clad in saffron robes, stand on elevated platforms facing the river. In perfect synchronization, they perform a rhythmic fire ritual, waving massive, multi-tiered brass lamps weighing several kilograms. The sound of conch shells, bells, and chanting echoes over the water as thousands of travelers watch from wooden boats, releasing small leaf cups with burning candles and marigolds into the flowing river. It is a spectacle of light, sound, and devotion that you will never forget.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Wake up at 5:00 AM for a sunrise boat ride. The morning light over the heritage ghats is magical, and you will see the city waking up—pilgrims performing morning prayers, dhobis washing clothes, and sadhus meditating on the stone steps in quiet contemplation.</p>
    `
  },
  {
    id: 2,
    title: 'Taj Mahal: A Monument to Undying Love',
    location: 'Agra, Uttar Pradesh',
    category: 'Heritage',
    readTime: '5 min read',
    date: 'June 05, 2026',
    image: '/images/golden_triangle.png',
    summary: 'The ultimate symbol of architectural perfection and romance. Read the history and discover the best spots to view the Taj without the crowds.',
    content: `
      <p>The Taj Mahal requires no introduction, yet no photograph can prepare you for the emotional impact of seeing it in person. Standing on the banks of the Yamuna River, this ivory-white marble mausoleum is widely considered the finest example of Mughal architecture, combining Persian, Islamic, and Indian design elements into a symmetrical masterpiece.</p>
      
      <h3>The Deep History</h3>
      <p>Commissioned in 1632 by the Mughal Emperor Shah Jahan, the Taj Mahal was built to house the tomb of his favorite wife, Mumtaz Mahal, who died giving birth to their fourteenth child. Over 20,000 artisans, sculptors, and builders from across Asia worked for 22 years to complete the complex. The white marble was transported from Makrana in Rajasthan, while precious stones like lapis lazuli, turquoise, and jade were imported from Tibet, Persia, and China to create the intricate floral inlay work (pietra dura).</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>Dawn from Mehtab Bagh:</strong> Avoid the massive morning queues at the main gates and cross the river to Mehtab Bagh (The Moonlight Garden). Stand on the banks of the Yamuna River at 5:30 AM as the early morning mist rises. The Taj Mahal appears to float on the fog, its marble transitioning from a soft peach-pink to brilliant golden-white as the sun rises. The symmetry of the monument, reflected in the quiet river, creates a peaceful, near-spiritual view away from the tourist crowds.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Look closely at the marble walls. The carvings are so precise that a single flower in the inlay work can contain up to 60 different semi-precious stones, polished so finely that they feel flat to the touch. The Taj is closed on Fridays, so plan your itinerary carefully.</p>
    `
  },
  {
    id: 3,
    title: 'Jaipur: The Pink City and its Fortresses',
    location: 'Jaipur, Rajasthan',
    category: 'Heritage',
    readTime: '7 min read',
    date: 'May 28, 2026',
    image: '/images/royal_rajasthan.png',
    summary: 'Step into the land of Maharajas. Explore the massive Amber Fort, the wind palace Hawa Mahal, and the royal history of Jaipur.',
    content: `
      <p>Jaipur, the capital of Rajasthan, is a vibrant assault on the senses. Known as the Pink City, its streets are a mix of camels, rickshaws, colorful textiles, and towering medieval forts. It is a city where royal history is not kept in textbooks but lived in grand palaces and active bazaars.</p>
      
      <h3>The Deep History</h3>
      <p>Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was India\'s first planned city, designed according to ancient architectural principles (Vastu Shastra). In 1876, Maharaja Ram Singh ordered the entire city to be painted pink—the traditional color of hospitality—to welcome Prince Albert (later King Edward VII) of Great Britain. The color remains law in the historic old city center to this day.</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>Amber Fort at Sunset:</strong> Located 11 km outside the city, the Amber Fort is a massive sandstone palace complex built on a hilltop. Stand on the ramparts at sunset, looking down at Maota Lake. The yellow sandstone walls glow deep gold in the fading light. As the stars emerge, the Sheesh Mahal (Mirror Palace) inside the fort comes alive; when a single candle is lit, its light reflects off thousands of tiny imported Belgian mirrors, making the room look like it is filled with starlight.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Don\'t miss the Jantar Mantar observatory. It houses the world\'s largest stone sundial (27 meters high) which can tell the time with an accuracy of two seconds, built in the early 18th century. It is a UNESCO World Heritage site and an architectural wonder.</p>
    `
  },
  {
    id: 4,
    title: 'Kerala Backwaters: A Slow Waterway Journey',
    location: 'Alleppey, Kerala',
    category: 'Nature',
    readTime: '5 min read',
    date: 'May 20, 2026',
    image: '/images/header_experiences.png',
    summary: 'Unwind on a traditional luxury houseboat, gliding down quiet palm-fringed canals, spice plantations, and serene lagoons.',
    content: `
      <p>If Northern India is a festival of colors and palaces, Southern India is a sanctuary of green hills, serene waters, and slow living. Nowhere is this more apparent than the backwaters of Kerala, a network of interconnected brackish lakes, rivers, and canals running parallel to the Arabian Sea coast.</p>
      
      <h3>The Deep History</h3>
      <p>These waterways were once the spice highways of ancient India. For centuries, traders from Europe, Rome, and Arabia came here to buy black pepper, cardamom, and cinnamon. The houseboats, known as <em>Kettuvallams</em>, were originally cargo boats used to carry rice and spices. They are made using eco-friendly materials—bamboo poles, coconut fibers, and cashew nut oil—without using a single metal nail.</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>Dusk on the Lagoon:</strong> As your luxury houseboat glides into the wide Vembanad Lake at sunset, the water turns into a mirror reflecting the purple and pink sky. Palm trees lean over the banks, their silhouettes framing the water. You sit on the wicker deck with a fresh coconut or a cup of local cardamom tea, watching traditional fishermen in small wooden canoes setting up Chinese fishing nets. The only sound is the gentle splash of water against the bamboo hull. It is the ultimate antidote to the busy modern lifestyle.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Hire a private, fully-staffed houseboat with a personal chef. They will cook traditional Keralan meals, like Karimeen Pollichathu (pearl spot fish marinated in spices and grilled in a banana leaf), fresh on board using spices sourced from plantations along the way.</p>
    `
  },
  {
    id: 5,
    title: 'Hampi: The Lost Empire of Vijayanagara',
    location: 'Hampi, Karnataka',
    category: 'Heritage',
    readTime: '7 min read',
    date: 'May 12, 2026',
    image: '/images/Khajuraho.jpg',
    summary: 'Explore a surreal landscape of giant granite boulders and ruined temples of a forgotten 14th-century empire.',
    content: `
      <p>Hampi is one of the most visually stunning archaeological sites on Earth. The ruins of the Vijayanagara Empire are scattered across a dry, red landscape covered in millions of giant granite boulders, looking like a forgotten fantasy kingdom.</p>
      
      <h3>The Deep History</h3>
      <p>In the 14th century, Hampi was the capital of the Vijayanagara Empire, one of the richest and most powerful empires in medieval India. Portuguese and Persian travelers wrote of its grand bazaars filled with rubies, diamonds, and silks. However, in 1565, the empire was defeated by a coalition of sultanates. The city was systematically plundered, burned, and abandoned, leaving behind a 4,000-hectare open-air museum of palaces, stables, and temples.</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>The Stone Chariot at Sunset:</strong> Visit the Vittala Temple complex at dusk. The iconic Stone Chariot—a highly detailed sculpture of a ceremonial chariot carved from a single block of granite—stands in the temple courtyard. As the sun sets behind the rocky hills, the granite structures turn a fiery orange, casting long, dramatic shadows across the ancient stone pillars. The silence of the abandoned empire, broken only by the chirping of birds, is deeply atmospheric.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Rent a bicycle or a moped to explore the vast ruins. Cross the Tungabhadra River in a circular coracle boat to visit the quieter "hippie island" side of Hampi, famous for its emerald green rice paddies and boulder-climbing spots.</p>
    `
  },
  {
    id: 6,
    title: 'Ladakh: The Land of High Himalayan Passes',
    location: 'Leh, Ladakh',
    category: 'Nature',
    readTime: '6 min read',
    date: 'May 02, 2026',
    image: '/images/kashmir_ladakh.png',
    summary: 'A high-altitude desert bordering Tibet. Read about the turquoise lakes, ancient monasteries, and trekking over the roof of the world.',
    content: `
      <p>Ladakh is a high-altitude desert nestled between the Karakoram and Himalayan mountain ranges. Known as Little Tibet, it is a land of barren peaks, dramatic deep valleys, ancient Buddhist monasteries, and friendly people who live in harmony with the harsh environment.</p>
      
      <h3>The Deep History</h3>
      <p>Ladakh was a crucial branch of the ancient Silk Route. Caravans carrying wool, spices, and precious stones crossed its high passes for centuries. The Leh Palace, built in the 17th century, resembles the Potala Palace in Lhasa. Tibetan Buddhism has flourished here since the 10th century, and monasteries like Thiksey and Hemis remain active centers of religious life and meditation.</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>Pangong Tso at Noon:</strong> Drive through the Chang La pass (one of the highest motorable roads in the world) to reach Pangong Tso Lake. Situated at 14,000 feet, this 134-km-long lake lies on the border between India and Tibet. At midday, the water turns a brilliant, saturated turquoise blue, contrasting with the dry, snow-capped brown mountains that surround it. The air is crisp and thin, and the water is icy clear. It feels like standing on the roof of the world.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Since Leh is at 11,500 feet (3,500m), spend your first 48 hours resting in Leh town to allow your body to acclimatize to the altitude and avoid mountain sickness. Drink plenty of water and ginger tea.</p>
    `
  },
  {
    id: 7,
    title: 'Amritsar: The Golden Temple and Sikh Heritage',
    location: 'Amritsar, Punjab',
    category: 'Spiritual',
    readTime: '5 min read',
    date: 'April 25, 2026',
    image: '/images/img4.jpg',
    summary: 'Experience the spiritual energy of the Golden Temple and the heartwarming tradition of Langar, feeding 100,000 people daily.',
    content: `
      <p>Amritsar is the spiritual capital of the Sikh religion. While it is a bustling Punjabi city, the moment you step inside the white marble complex of the Harmandir Sahib (The Golden Temple), a sense of profound peace and welcome washes over you.</p>
      
      <h3>The Deep History</h3>
      <p>Founded in 1727 by the fourth Sikh Guru, Guru Ram Das, the temple was built as a place of worship for men and women of all religions and walks of life. The temple has four entrances, symbolizing openness to all directions and castes. In the early 19th century, Maharaja Ranjit Singh covered the upper half of the temple with 750 kg of pure gold leaf, giving it its famous golden appearance.</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>The Golden Reflection:</strong> Sit on the cool marble walkway (parikrama) surrounding the central pool at 9:00 PM. The Golden Temple, lit by thousands of lights, glows like a jewel box in the center of the dark water. The continuous chanting of the holy scriptures (Gurbani) floats over the pool, accompanied by traditional string instruments. The reflection of the temple shimmering on the dark water creates a mesmerizing, meditative atmosphere.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Visit the Langar (community kitchen). It is the largest free kitchen in the world, serving simple vegetarian meals to over 100,000 people daily, regardless of race or religion. Walk through the kitchens to see the massive cauldrons of lentils and automated flatbread makers—an incredible display of community service.</p>
    `
  },
  {
    id: 8,
    title: 'Jaisalmer: The Golden City of Thar Desert',
    location: 'Jaisalmer, Rajasthan',
    category: 'Heritage',
    readTime: '6 min read',
    date: 'April 15, 2026',
    image: '/images/Waiting-for-sunset-at-Sam-s.jpg',
    summary: 'A golden sandstone fort rising from the sand dunes. Experience desert camping, camel safaris, and medieval architecture.',
    content: `
      <p>Jaisalmer is like a sandcastle that has come to life. Rising from the Thar Desert in western Rajasthan, the city is constructed almost entirely of yellow sandstone, giving it a golden glow that changes shades as the sun moves across the sky.</p>
      
      <h3>The Deep History</h3>
      <p>Founded in 1156 by Rawal Jaisal, the city grew wealthy as a trade stop on the camel caravan routes between India and Central Asia. The massive Jaisalmer Fort, built on a triangular hill, is one of the very few "living forts" left in the world. Unlike European castles, a quarter of the old city\'s population still lives, works, and runs hotels inside the ancient fort walls.</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>Sunset in the Sand Dunes:</strong> Travel to the Sam Sand Dunes at 5:00 PM. Climb onto a camel and ride into the desert as the sun begins to set. The wind ripples the fine sand, turning the dunes a deep orange-red. Sit on the ridge of a giant dune and watch the sun melt into the desert horizon. At night, retreat to a luxury desert camp for folk music, traditional dances around a campfire, and sleep under a sky thick with stars.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Explore the Patwon ki Haveli in the old town. These are multi-story merchant houses carved with such delicate, lace-like stone screens (jalis) that it is hard to believe they were chiseled out of hard sandstone by hand.</p>
    `
  },
  {
    id: 9,
    title: 'Munnar: Emerald Tea Estates of the South',
    location: 'Munnar, Kerala',
    category: 'Nature',
    readTime: '5 min read',
    date: 'April 08, 2026',
    image: '/images/img1.jpg',
    summary: 'Escape the heat in the cool hills of the Western Ghats. Discover rolling green tea plantations and scenic valley views.',
    content: `
      <p>Located 1,600 meters above sea level in the Western Ghats, Munnar is a hill station of green valleys, tea plantations, and cool mountain air. It is a peaceful escape from the warm coastal weather of South India.</p>
      
      <h3>The Deep History</h3>
      <p>Munnar was once the summer resort of the British administration in South India. In the late 19th century, British pioneers discovered that the soil and climate were perfect for tea cultivation. They cleared the dense forests and planted tea bushes, transforming the hills into rolling green carpets that are managed today by local cooperatives and estate owners.</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>Lockhart Gap Sunrise:</strong> Stand at the Lockhart Gap viewpoint at 6:00 AM. The valley below is completely filled with a dense sea of white clouds. As the sun rises over the peaks, the clouds slowly disperse, revealing the endless, neatly-trimmed green tea plantations underneath. The morning dew glistens on the tea leaves, and the air smells of fresh pine and mountain herbs. It is a lush green landscape that stretches as far as the eye can see.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Visit the Tea Museum to learn how tea leaves are processed, from picking to packaging, and sample rare varieties of local black and white teas. You can also spot the endangered Nilgiri Tahr (mountain goat) in nearby Eravikulam National Park.</p>
    `
  },
  {
    id: 10,
    title: 'Meghalaya: Root Bridges and Rainforests',
    location: 'Cherrapunji, Meghalaya',
    category: 'Nature',
    readTime: '7 min read',
    date: 'March 28, 2026',
    image: '/images/northeast_explorer.png',
    summary: 'Journey into the wettest rainforests on Earth. See how the indigenous Khasi tribe grows living root bridges across rivers.',
    content: `
      <p>Meghalaya, which translates to "The Abode of Clouds," is a hilly state in Northeast India. It is a green wonderland of high plateaus, dense subtropical rainforests, clean rivers, and deep limestone caves.</p>
      
      <h3>The Deep History</h3>
      <p>The state is home to the indigenous Khasi, Jaintia, and Garo tribes, who have a unique matrilineal society. Living in one of the wettest places on earth, the Khasi people faced a challenge: heavy monsoons would regularly wash away wooden bridges over rivers. Centuries ago, they developed an ingenious solution—guiding the aerial roots of the <em>Ficus elastica</em> tree across rivers using hollowed bamboo trunks. Over 15 to 20 years, these roots grew across and took hold in the opposite bank, creating living, self-strengthening bridges that can support up to 50 people at once.</p>
      
      <h3>The Epic Scene</h3>
      <p><strong>The Double-Decker Bridge:</strong> Trek down 3,000 stone steps into the deep valley of Nongriat village. Here, surrounded by giant ferns, orchid blossoms, and butterflies, stands the Double-Decker Living Root Bridge. Two levels of thick, braided tree roots span across a rushing mountain stream. Stand on the bridge and look down at the crystal-clear turquoise natural pools below. The combination of tribal engineering and ancient rainforest nature creates a magical, fantasy-like setting.</p>

      <h3>Travel Tip for European Visitors</h3>
      <p>Carry good trekking shoes and a raincoat, as it can rain unexpectedly at any time. Mawlynnong village, located nearby, was awarded the title of "Cleanest Village in Asia" and is famous for its clean stone streets and flower-lined pathways.</p>
    `
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection
        image="/images/header_gallery.png"
        label="Travel Chronicles"
        title="Our <em>Blog</em>"
        subtitle="Explore the deep history, legends, and epic travel stories from the most iconic corners of India."
        short
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Travel Journal</p>
              <h2>Stories from the Soul of India</h2>
              <p className="section-subtitle">A guide to the history, magic, and culture of India—tailored for curious minds.</p>
            </div>
          </ScrollReveal>

          {/* Blog Grid */}
          <div className="blog-grid">
            {BLOG_POSTS.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 100}>
                <article className="blog-card">
                  <div className="blog-card__image-wrap">
                    <img className="blog-card__img" src={post.image} alt={post.title} loading="lazy" />
                    <span className="blog-card__category">{post.category}</span>
                  </div>

                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="blog-card__title">{post.title}</h3>

                    <p className="blog-card__summary">{post.summary}</p>

                    <button
                      onClick={() => setSelectedPost(post)}
                      className="btn btn--outline blog-card__cta"
                    >
                      Read Full Story →
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Modal */}
      {selectedPost && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 26, 20, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 2000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem'
        }} onClick={() => setSelectedPost(null)}>
          <div style={{
            background: 'var(--color-light)',
            width: '100%',
            maxWidth: '850px',
            maxHeight: '90vh',
            borderRadius: 'var(--border-radius-lg)',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--color-border)'
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* Close button */}
            <button 
              onClick={() => setSelectedPost(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(15,26,20,0.8)',
                color: 'white',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              ✕
            </button>

            {/* Modal Image Header */}
            <div style={{
              width: '100%',
              height: '350px',
              position: 'relative',
              background: 'var(--color-primary-dark)'
            }}>
              <img src={selectedPost.image} alt={selectedPost.title} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15,26,20,0.9), transparent)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
                color: 'white'
              }}>
                <span style={{
                  background: 'var(--color-secondary)',
                  color: 'var(--color-primary-dark)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '50px',
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                  display: 'inline-block'
                }}>{selectedPost.category}</span>
                
                <h2 style={{
                  color: 'white',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                  lineHeight: '1.2',
                  marginBottom: '0.5rem'
                }}>{selectedPost.title}</h2>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem 1.5rem',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.8)'
                }}>
                  <span>📍 {selectedPost.location}</span>
                  <span>📅 {selectedPost.date}</span>
                  <span>🕐 {selectedPost.readTime}</span>
                </div>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="blog-detail-body" style={{
              padding: '2.5rem',
            }}>
              <div 
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.05rem',
                  color: 'var(--color-text)'
                }}
              />
              
              <div style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>
                    Inspired to Visit {selectedPost.location.split(',')[0]}?
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                    Let our specialists craft a custom bespoke trip covering this location.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    window.location.href = '/contact';
                  }}
                  className="btn btn--primary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Plan This Journey →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
