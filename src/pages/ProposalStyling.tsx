import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeading from '@/components/PageHeading';
import { Link } from 'wouter';

export default function ProposalStyling() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Luxury Proposal Styling | Dress That Day Cyprus</title>
        <meta name="description" content="Create the perfect 'Yes' moment with our bespoke proposal styling. Romantic beach setups, private dinners, and breathtaking backdrops." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/heroes/proposals-hero.webp" 
            alt="Luxury Proposal Setup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <PageHeading
          text="Proposals"
          subtextBelow="Romantic moments, perfectly styled"
        />
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 hidden">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-xl md:text-2xl tracking-[0.2em] uppercase mb-4"
          >
            Experiences
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-8"
          >
            Proposal Styling
          </motion.h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-luxury-gold text-xl tracking-widest uppercase mb-8"
          >
            The Perfect Question
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-luxury-text mb-12 leading-tight"
          >
            Crafting the ultimate romantic setting for your life-changing moment.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg text-gray-600 leading-relaxed mb-12"
          >
            We specialize in creating breathtaking proposal settings that capture the essence of your love story. From intimate beach picnics at sunset to grand gestures with light-up letters and thousands of rose petals, we handle every detail so you can focus on the moment.
          </motion.p>
          
          <Link href="/design-your-day">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luxury-cta-btn px-12 py-4 bg-luxury-text text-white font-display uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors duration-300"
            >
              Plan Your Proposal
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 px-4 bg-luxury-blush/10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img 
              src="/images/new_collection/20.webp" 
              alt="Marry Me Letters" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden mt-12 md:mt-24"
          >
            <img 
              src="/images/blog_proposal_beach_sunset.webp" 
              alt="Beach Proposal" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Party Inspiration Gallery */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-luxury-gold text-xl tracking-widest uppercase mb-4"
            >
              Inspiration
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl md:text-4xl text-luxury-text"
            >
              Party Inspiration
            </motion.h3>
          </div>
          
          {/* TODO: Wire in 6 uploaded proposal images here */}
          {/* Gallery grid will display 6 unique proposal images in 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image slots ready for 6 uploaded images - DO NOT use duplicates or existing grid images */}
            {/* Uncomment and update paths once images are uploaded:
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/experiences/proposals/inspo/proposal-inspo-1.jpg" 
                alt="Proposal Setup 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/experiences/proposals/inspo/proposal-inspo-2.jpg" 
                alt="Proposal Setup 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/experiences/proposals/inspo/proposal-inspo-3.jpg" 
                alt="Proposal Setup 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/experiences/proposals/inspo/proposal-inspo-4.jpg" 
                alt="Proposal Setup 4" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/experiences/proposals/inspo/proposal-inspo-5.jpg" 
                alt="Proposal Setup 5" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/images/experiences/proposals/inspo/proposal-inspo-6.jpg" 
                alt="Proposal Setup 6" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
