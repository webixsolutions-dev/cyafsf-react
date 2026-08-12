// src/components/familySupport/FamilySupportCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Phone, Mail, Clock, MapPin,
  Heart, MessageCircle, Calendar, Shield, Users
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const FamilySupportCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-navy via-navy/95 to-teal/90 text-white overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
          {/* Left Column - From mockup */}
          <AnimatedSection disableHover={true}>
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider 
                           bg-white/10 px-4 py-1.5 rounded-full mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to get support for your family?
            </h2>
            <p className="text-white/80 text-lg mt-4">
              Our team is here to help you find the right services and resources for your family's unique needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold 
                             rounded-lg hover:bg-coral/90 transition-all duration-300 shadow-lg shadow-coral/30"
                >
                  <ArrowRight className="w-5 h-5" />
                  Contact Us
                </motion.button>
              </Link>
              <Link to="/resources">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 
                             text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Browse Resources
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium">Call us</p>
                  <p className="text-sm text-white/60">1-234-567-890</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium">Email us</p>
                  <p className="text-sm text-white/60">family@cyafsf.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium">Hours</p>
                  <p className="text-sm text-white/60">Mon-Fri 9AM-5PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-white/60">123 Support Street, Ottawa</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Matching mockup exactly */}
          <AnimatedSection direction="right" disableHover={true}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-gold" />
                <h3 className="text-2xl font-bold text-white">How we can help</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: MessageCircle, text: 'Personalized guidance for your family' },
                  { icon: Calendar, text: 'Flexible scheduling options' },
                  { icon: Users, text: 'Experienced and caring team' },
                  { icon: Shield, text: 'Confidential and safe environment' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-gold" />
                    <span className="text-white/90">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gold/20 rounded-xl border border-gold/20">
                <p className="text-white text-sm">
                  <span className="font-semibold text-gold">Coming soon:</span> Online resource library 
                  and family support chat service.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FamilySupportCTA;