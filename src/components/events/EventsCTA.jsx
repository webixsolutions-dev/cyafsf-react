// src/components/events/EventsCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Calendar, Heart, Users, 
  Sparkles, MessageCircle, Gift, Star
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const EventsCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-navy via-navy/95 to-teal/90 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <AnimatedSection disableHover={true}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-gold font-semibold text-sm uppercase tracking-wider 
                         bg-white/10 px-4 py-1.5 rounded-full mb-4"
            >
              Stay Connected
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Don't miss out on our
              <br />
              <span className="text-gold">upcoming events</span>
            </h2>
            
            <p className="text-white/80 text-lg mt-4">
              Subscribe to our newsletter and be the first to know about new events, 
              programs, and opportunities in your community.
            </p>

            {/* Email Subscription */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-white/50 focus:border-gold focus:ring-2 
                         focus:ring-gold/20 outline-none transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold 
                           rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/30"
              >
                <Sparkles className="w-5 h-5" />
                Subscribe Now
              </motion.button>
            </div>
            <p className="text-white/50 text-xs mt-2">
              No spam. Unsubscribe anytime.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 mt-6">
              <Link to="/contact" className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                Contact Us
              </Link>
              <Link to="/get-involved" className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-1">
                <Heart className="w-4 h-4" />
                Volunteer
              </Link>
              <Link to="/donate" className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-1">
                <Gift className="w-4 h-4" />
                Donate
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Column - Stats & Highlights */}
          <AnimatedSection direction="right" disableHover={true}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-gold" />
                <h3 className="text-2xl font-bold text-white">Event Highlights</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Star, text: '25+ events hosted annually', color: 'text-gold' },
                  { icon: Users, text: '500+ community members reached', color: 'text-coral' },
                  { icon: Heart, text: '15+ community partners', color: 'text-teal' },
                  { icon: Sparkles, text: 'New events added monthly', color: 'text-gold' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 transition-all duration-300"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-white/90">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Upcoming Event Teaser */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-6 p-4 bg-gold/20 rounded-xl border border-gold/20"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-gold/30 rounded-lg px-3 py-1 text-center flex-shrink-0">
                    <p className="text-xs text-gold font-bold">AUG</p>
                    <p className="text-lg text-white font-bold">15</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Summer Youth Leadership Workshop</p>
                    <p className="text-white/60 text-xs">Community Center, Ottawa</p>
                    <Link to="/events/1" className="text-gold text-xs font-medium hover:underline inline-flex items-center gap-1 mt-1">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 bg-teal text-white font-semibold rounded-lg 
                           hover:bg-teal/90 transition-all duration-300 shadow-lg shadow-teal/30
                           flex items-center justify-center gap-2"
                >
                  View All Events
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EventsCTA;