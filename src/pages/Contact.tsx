import PageHeading from '@/components/PageHeading';
import Layout from '@/components/Layout';
import RevealText from '@/components/RevealText';
import SEO from '@/components/SEO';

export default function Contact() {
  return (
    <Layout>
      <SEO 
        title="Contact Us | Dress That Day Cyprus"
        description="Start planning your dream event today. Contact Dress That Day for luxury event styling in Paphos and Limassol."
        canonical="/contact"
      />
      <section className="pt-40 pb-20 bg-luxury-blush" data-scroll-section>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <RevealText 
              text="Begin Your Journey" 
              tag="h1" 
              className="font-display text-5xl md:text-7xl text-luxury-text mb-6"
            />
            <p className="font-body text-gray-600 text-lg font-light max-w-2xl mx-auto">
              We invite you to share your vision with us. Whether you're planning an intimate proposal or a grand celebration, we are here to bring your dreams to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-2xl text-luxury-text mb-4">Get in Touch</h3>
                <p className="font-body text-gray-600 font-light mb-2">
                  <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Phone / WhatsApp</span>
                  <a href="tel:+35799512309" className="hover:text-luxury-gold transition-colors text-lg">(00 357) 99 512309</a>
                </p>
                <p className="font-body text-gray-600 font-light">
                  <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Email</span>
                  <a href="mailto:hello@dressthatday.com" className="hover:text-luxury-gold transition-colors text-lg">hello@dressthatday.com</a>
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-luxury-text mb-4">Visit Us</h3>
                <p className="font-body text-gray-600 font-light leading-relaxed">
                  4 Agiou Stefanou Street<br />
                  8560 Chlorakas<br />
                  Paphos, Cyprus
                </p>
                <p className="font-body text-gray-500 text-sm mt-4 italic">By appointment only</p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-luxury-text mb-4">Service Areas</h3>
                <p className="font-body text-gray-600 font-light leading-relaxed">
                  Primarily serving Paphos and Limassol.<br />
                  Available for destination events across Cyprus upon request.
                </p>
              </div>
            </div>

            <div className="bg-white p-10 shadow-sm border border-gray-100">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-xs uppercase tracking-widest text-gray-500">Event Type</label>
                  <select 
                    id="type" 
                    className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light"
                  >
                    <option value="">Select an event type...</option>
                    <option value="wedding">Wedding / Proposal</option>
                    <option value="kids">Little Un's Party</option>
                    <option value="teepee">Teepee Sleepover</option>
                    <option value="picnic">Luxury Picnic</option>
                    <option value="shower">Baby Shower / Gender Reveal</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest text-gray-500">Event Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500">Your Vision</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full border-b border-gray-300 py-2 focus:border-luxury-gold outline-none transition-colors bg-transparent font-body font-light resize-none"
                    placeholder="Tell us about your dream event..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-luxury-text text-white py-4 text-sm uppercase tracking-[0.2em] hover:bg-luxury-gold transition-colors duration-300 mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
