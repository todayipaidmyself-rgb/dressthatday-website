import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import PageHeading from '@/components/PageHeading';
import SEO from '@/components/SEO';
import { useState } from 'react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Parties', 'Weddings & Proposals', 'Picnics', 'Details'];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Dress That Day Event Styling Portfolio",
    "description": "Authentic photos from luxury events styled by Dress That Day in Cyprus - weddings, proposals, birthday parties, picnics, and special celebrations",
    "provider": {
      "@type": "Organization",
      "name": "Dress That Day",
      "url": "https://dressthatday.site"
    }
  };

  const images = [
    // Authentic New Collection - Real Event Photos
    { src: "/images/new_collection/1.webp", title: "Grinch Party Favors", loc: "Cyprus", category: "Parties", alt: "Custom Grinch-themed party favors with white ribbon bows for children's birthday celebration" },
    { src: "/images/new_collection/2.webp", title: "Elegant Party Setup", loc: "Paphos", category: "Details", alt: "Elegant party table setup with premium decor and styling details" },
    { src: "/images/new_collection/3.webp", title: "Birthday Celebration", loc: "Limassol", category: "Parties", alt: "Luxury birthday party celebration with bespoke styling and decor" },
    { src: "/images/new_collection/4.webp", title: "Bespoke Event Decor", loc: "Private Villa", category: "Details", alt: "Custom bespoke event decor with attention to detail and premium materials" },
    { src: "/images/new_collection/5.webp", title: "Magical Party Atmosphere", loc: "Cyprus", category: "Parties", alt: "Magical party atmosphere created with luxury styling and ambient lighting" },
    { src: "/images/new_collection/6.webp", title: "Party Perfection", loc: "Paphos", category: "Parties", alt: "Perfectly styled party setup showcasing Dress That Day's attention to detail" },
    { src: "/images/new_collection/7.webp", title: "Styled with Love", loc: "Limassol", category: "Details", alt: "Event styling details crafted with love and professional expertise" },
    { src: "/images/new_collection/8.webp", title: "Premium Event Design", loc: "Cyprus", category: "Parties", alt: "Premium event design featuring luxury elements and sophisticated styling" },
    { src: "/images/new_collection/9.webp", title: "Luxury Event Details", loc: "Paphos", category: "Details", alt: "Close-up of luxury event details showcasing quality and craftsmanship" },
    { src: "/images/new_collection/10.webp", title: "Celebration Styling", loc: "Limassol", category: "Parties", alt: "Professional celebration styling for special occasions in Cyprus" },
    { src: "/images/new_collection/11.webp", title: "Elegant Touches", loc: "Cyprus", category: "Details", alt: "Elegant finishing touches that elevate event styling to luxury level" },
    { src: "/images/new_collection/12.webp", title: "Party Vibes", loc: "Paphos", category: "Parties", alt: "Fun party vibes created through thoughtful styling and decor choices" },
    { src: "/images/new_collection/13.webp", title: "Bespoke Events", loc: "Limassol", category: "Parties", alt: "Bespoke event styling tailored to client vision and preferences" },
    { src: "/images/new_collection/14.webp", title: "Luxury Setup", loc: "Cyprus", category: "Details", alt: "Luxury event setup with premium props and styling elements" },
    { src: "/images/new_collection/15.webp", title: "Event Magic", loc: "Paphos", category: "Parties", alt: "Creating event magic through professional styling and design expertise" },
    { src: "/images/new_collection/16.webp", title: "Styled Events", loc: "Limassol", category: "Details", alt: "Professionally styled events showcasing Dress That Day's signature aesthetic" },
    { src: "/images/new_collection/17.webp", title: "Celebration Design", loc: "Cyprus", category: "Parties", alt: "Celebration design featuring cohesive styling and premium decor" },
    { src: "/images/new_collection/18.webp", title: "Luxury Moments", loc: "Paphos", category: "Details", alt: "Capturing luxury moments through carefully curated event details" },
    { src: "/images/new_collection/19.webp", title: "Event Perfection", loc: "Limassol", category: "Parties", alt: "Event perfection achieved through meticulous planning and styling" },
    { src: "/images/new_collection/20.webp", title: "Bespoke Styling", loc: "Cyprus", category: "Details", alt: "Bespoke styling services for luxury events in Cyprus" },
    { src: "/images/new_collection/21.webp", title: "Party Elegance", loc: "Paphos", category: "Parties", alt: "Elegant party styling combining sophistication with celebration" },

    // Real Event Highlights - Authentic Photos
    { src: "/images/gallery_proposal_setup.webp", title: "Little Prince Christening", loc: "Elea Estate, Paphos", category: "Parties", alt: "Little Prince themed christening celebration with elegant blue and gold decor at Elea Estate Paphos" },
    { src: "/images/beach_picnic_sunset.webp", title: "Mermaid Picnic Party", loc: "Private Villa, Paphos", category: "Picnics", alt: "Mermaid themed beach picnic party setup with ocean-inspired decor at private villa in Paphos" },
    { src: "/images/closeup_florals_balloons.webp", title: "Milestone Birthday", loc: "Absolute 168, Paphos", category: "Parties", alt: "Milestone birthday celebration featuring fresh florals and balloon arrangements at Absolute 168 Paphos" },
    { src: "/images/hero_teepee_interior.webp", title: "Princess Teepee Party", loc: "Private Residence", category: "Parties", alt: "Princess themed teepee tent party with fairy lights and cozy interior styling for children's sleepover" },
    { src: "/images/proposal_setup_roses.webp", title: "Luxury Proposal", loc: "Secret Location", category: "Weddings & Proposals", alt: "Romantic luxury proposal setup with red roses, candles, and elegant decor at secret Cyprus location" },
    { src: "/images/baby_shower_elegant.webp", title: "Harper's Baby Shower", loc: "Suite 48, Paphos", category: "Parties", alt: "Elegant neutral baby shower celebration for Harper at Suite 48 Paphos with sophisticated styling" },
    { src: "/images/kids_party_superhero.webp", title: "Superhero Birthday", loc: "Private Villa", category: "Parties", alt: "Superhero themed birthday party for kids with action-packed decor at private villa Cyprus" },
    { src: "/images/afternoon_tea_luxury_v3.webp", title: "Elegant Afternoon Tea", loc: "Limassol", category: "Picnics", alt: "Elegant afternoon tea party setup with fine china, pastries, and luxury styling in Limassol Cyprus" }
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <Layout>
      <SEO 
        title="Event Styling Portfolio Gallery | Authentic Photos | Dress That Day Cyprus"
        description="Browse our authentic portfolio of luxury event styling in Cyprus. Real photos from weddings, proposals, birthday parties, picnics, and special celebrations styled by Dress That Day."
        canonical="/gallery"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] bg-luxury-blush overflow-hidden flex items-center justify-center" data-scroll-section>
        <PageHeading
          text="Gallery"
          subtextBelow="Authentic moments from real events we've styled"
        />
      </section>

      {/* Gallery Content Section */}
      <section className="pt-20 pb-20 bg-white" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <RevealText 
              text="Our Portfolio" 
              tag="h1" 
              className="font-display text-5xl md:text-7xl text-luxury-text mb-6 hidden"
            />
            <p className="font-body text-gray-600 text-lg font-light max-w-2xl mx-auto mb-10">
              Every image tells a story. These are real moments from real events we've had the privilege to style across Cyprus.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 border ${
                    filter === cat 
                      ? 'bg-luxury-text text-white border-luxury-text' 
                      : 'bg-transparent text-luxury-text border-luxury-text/30 hover:border-luxury-text'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredImages.map((img, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden mb-8 animate-fade-in" data-scroll data-scroll-speed={0.5}>
                <img 
                  src={img.src} 
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="font-display text-white text-2xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h3>
                  <p className="font-body text-white/80 text-sm font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.loc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <RevealText 
              text="Ready to create your moment?" 
              tag="h2" 
              className="font-display text-3xl md:text-4xl text-luxury-text mb-6"
            />
            <p className="font-body text-gray-600 text-lg font-light mb-8 max-w-xl mx-auto">
              Let's design an event that's uniquely yours. Every celebration deserves to be styled with intention.
            </p>
            <a 
              href="/contact"
              className="inline-block px-12 py-5 bg-luxury-text text-white text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold transition-all duration-500 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
