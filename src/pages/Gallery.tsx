import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import PageHeading from '@/components/PageHeading';
import SEO from '@/components/SEO';
import { useState } from 'react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Parties', 'Weddings & Proposals', 'Picnics', 'Details'];

  const images = [
    // New Collection Highlights
    { src: "/images/new_collection/1.webp", title: "Luxury Event Styling", loc: "Cyprus", category: "Parties" },
    { src: "/images/new_collection/2.webp", title: "Elegant Setup", loc: "Paphos", category: "Details" },
    { src: "/images/new_collection/3.webp", title: "Celebration Moments", loc: "Limassol", category: "Parties" },
    { src: "/images/new_collection/4.webp", title: "Bespoke Decor", loc: "Private Villa", category: "Details" },
    { src: "/images/new_collection/5.webp", title: "Magical Atmosphere", loc: "Cyprus", category: "Parties" },
    { src: "/images/new_collection/6.webp", title: "Party Perfection", loc: "Paphos", category: "Parties" },
    { src: "/images/new_collection/7.webp", title: "Styled with Love", loc: "Limassol", category: "Details" },
    { src: "/images/new_collection/8.webp", title: "Event Design", loc: "Cyprus", category: "Parties" },
    { src: "/images/new_collection/9.webp", title: "Luxury Details", loc: "Paphos", category: "Details" },
    { src: "/images/new_collection/10.webp", title: "Celebration Styling", loc: "Limassol", category: "Parties" },
    { src: "/images/new_collection/11.webp", title: "Elegant Touches", loc: "Cyprus", category: "Details" },
    { src: "/images/new_collection/12.webp", title: "Party Vibes", loc: "Paphos", category: "Parties" },
    { src: "/images/new_collection/13.webp", title: "Bespoke Events", loc: "Limassol", category: "Parties" },
    { src: "/images/new_collection/14.webp", title: "Luxury Setup", loc: "Cyprus", category: "Details" },
    { src: "/images/new_collection/15.webp", title: "Event Magic", loc: "Paphos", category: "Parties" },
    { src: "/images/new_collection/16.webp", title: "Styled Events", loc: "Limassol", category: "Details" },
    { src: "/images/new_collection/17.webp", title: "Celebration Design", loc: "Cyprus", category: "Parties" },
    { src: "/images/new_collection/18.webp", title: "Luxury Moments", loc: "Paphos", category: "Details" },
    { src: "/images/new_collection/19.webp", title: "Event Perfection", loc: "Limassol", category: "Parties" },
    { src: "/images/new_collection/20.webp", title: "Bespoke Styling", loc: "Cyprus", category: "Details" },
    { src: "/images/new_collection/21.webp", title: "Party Elegance", loc: "Paphos", category: "Parties" },

    // Real Event Highlights
    { src: "/images/gallery_proposal_setup.webp", title: "Little Prince Christening", loc: "Elea Estate, Paphos", category: "Parties" },
    { src: "/images/beach_picnic_sunset.webp", title: "Mermaid Picnic Party", loc: "Private Villa, Paphos", category: "Picnics" },
    { src: "/images/closeup_florals_balloons.webp", title: "Milestone Birthday", loc: "Absolute 168, Paphos", category: "Parties" },
    { src: "/images/hero_teepee_interior.webp", title: "Princess Teepee Party", loc: "Private Residence", category: "Parties" },
    { src: "/images/proposal_setup_roses.webp", title: "Luxury Proposal", loc: "Secret Location", category: "Weddings & Proposals" },
    { src: "/images/baby_shower_elegant.webp", title: "Harper's Baby Shower", loc: "Suite 48, Paphos", category: "Parties" },
    { src: "/images/kids_party_superhero.webp", title: "Superhero Birthday", loc: "Private Villa", category: "Parties" },
    { src: "/images/afternoon_tea_luxury_v3.webp", title: "Elegant Afternoon Tea", loc: "Limassol", category: "Picnics" },

    // Luxury Styling & Details
    { src: "/images/hero_slide_kids_luxury.webp", title: "Whimsical Kids Party", loc: "Private Garden", category: "Parties" },
    { src: "/images/hero_slide_teepee_luxury.webp", title: "Boho Sleepover", loc: "Paphos", category: "Parties" },
    { src: "/images/hero_slide_picnic_luxury.webp", title: "Sunset Beach Picnic", loc: "Coral Bay", category: "Picnics" },
    { src: "/images/hero_slide_letters_luxury.webp", title: "Light Up Letters", loc: "Wedding Venue", category: "Details" },
    { src: "/images/hero_slide_baby_shower_luxury.webp", title: "Neutral Baby Shower", loc: "Limassol", category: "Parties" },
    { src: "/images/hero_slide_proposal_luxury.webp", title: "Beach Proposal", loc: "Aphrodite's Rock", category: "Weddings & Proposals" },
    { src: "/images/luxury_picnic_detail_v2.webp", title: "Crystal Glassware Detail", loc: "Picnic Setup", category: "Details" },
    
    // Blog & Editorial Features
    { src: "/images/blog_kids_party_safari.webp", title: "Safari Adventure", loc: "Luxury Villa", category: "Parties" },
    { src: "/images/blog_kids_party_fairy.webp", title: "Enchanted Garden", loc: "Private Estate", category: "Parties" },
    { src: "/images/blog_teepee_boho_chic.webp", title: "Boho Chic Sleepover", loc: "Indoor Setup", category: "Parties" },
    { src: "/images/blog_teepee_movie_night.webp", title: "Cinema Night", loc: "Luxury Home", category: "Parties" },
    { src: "/images/blog_picnic_sunset_romance.webp", title: "Sunset Romance", loc: "Sea Caves", category: "Picnics" },
    { src: "/images/blog_picnic_group_celebration.webp", title: "Beach Celebration", loc: "Sandy Beach", category: "Picnics" },
    { src: "/images/blog_baby_shower_neutral.webp", title: "Neutral Elegance", loc: "Conservatory", category: "Parties" },
    { src: "/images/blog_baby_shower_gender_reveal.webp", title: "Gender Reveal", loc: "Outdoor Venue", category: "Parties" },
    { src: "/images/blog_proposal_beach_sunset.webp", title: "Marry Me", loc: "Private Beach", category: "Weddings & Proposals" },
    { src: "/images/blog_proposal_private_dinner.webp", title: "Private Dinner", loc: "Luxury Suite", category: "Weddings & Proposals" },
    { src: "/images/blog_styling_tips_outdoor.webp", title: "Outdoor Styling", loc: "Summer Event", category: "Details" },
    { src: "/images/blog_styling_tips_color_palette.webp", title: "Color Palette Design", loc: "Studio", category: "Details" },

    // Textures & Close-ups
    { src: "/images/fabric_texture_draping.webp", title: "Christening Details", loc: "Paphos", category: "Details" },
    { src: "/images/detail_balloons_pastel.webp", title: "Pastel Balloon Arch", loc: "Paphos", category: "Details" },
    { src: "/images/detail_floral_centerpiece.webp", title: "Floral Centerpiece", loc: "Limassol", category: "Details" },
    { src: "/images/detail_teepee_fabric.webp", title: "Teepee Fabric Detail", loc: "Private Residence", category: "Details" },
    { src: "/images/detail_picnic_cutlery.webp", title: "Picnic Cutlery", loc: "Beach Location", category: "Details" },
    { src: "/images/detail_light_bulb_vintage.webp", title: "Vintage Lighting", loc: "Evening Event", category: "Details" }
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <Layout>
      <SEO 
        title="Event Styling Portfolio | Dress That Day Cyprus"
        description="Browse our gallery of luxury event styling in Cyprus. Real weddings, proposals, christenings, and parties styled by Dress That Day."
        canonical="/gallery"
      />
      {/* Hero Section with Overlay */}
      <section className="relative h-[70vh] md:h-[80vh] bg-luxury-blush overflow-hidden flex items-center justify-center" data-scroll-section>
        <PageHeading
          text="Gallery"
          subtextBelow="Explore our portfolio of luxury event styling"
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
              A curated collection of our favorite moments, styled with love and executed with precision.
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
                  alt={img.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="font-display text-white text-2xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h3>
                  <p className="font-body text-white/80 text-sm font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
