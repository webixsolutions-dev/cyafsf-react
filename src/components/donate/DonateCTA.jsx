// src/components/donate/DonateCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Heart, Hand, Users, 
  MessageCircle, Gift, Sparkles,
  Calendar, Star, Award, ChevronRight,
  Phone, Mail, Clock, MapPin, Shield
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const DonateCTA = () => {
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
          {/* Left Column - No hover effects */}
          <AnimatedSection disableHover={true}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-gold font-semibold text-sm uppercase tracking-wider 
                         bg-white/10 px-4 py-1.5 rounded-full mb-4"
            >
              Make a Difference
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Every gift counts.
              <br />
              <span className="text-gold">Join us today.</span>
            </h2>
            
            <p className="text-white/80 text-lg mt-4">
              Your support helps us continue our mission of strengthening youth, 
              families, and communities across Canada.
            </p>

            {/* Donation Options */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-bold 
                             rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/30
                             text-lg"
                >
                  <Heart className="w-6 h-6" />
                  Donate Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white/30 
                             text-white font-semibold rounded-lg hover:bg-white/10 
                             transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                </motion.button>
              </Link>
            </div>

            {/* Quick Links - No hover effects */}
            <div className="flex flex-wrap gap-6 mt-6">
              <Link to="/get-involved" className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-1">
                <Hand className="w-4 h-4" />
                Volunteer
              </Link>
              <Link to="/get-involved" className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-1">
                <Users className="w-4 h-4" />
                Partner
              </Link>
              <Link to="/events" className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Events
              </Link>
            </div>

            {/* Contact Info - No hover effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <span>403-404-8969</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <span>info@cyafsf.com</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - With hover effects */}
          <AnimatedSection direction="right">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-gold" />
                <h3 className="text-2xl font-bold text-white">Why Donate?</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Heart, text: 'Directly support youth and families in need', color: 'text-coral' },
                  { icon: Gift, text: 'Tax-deductible donations', color: 'text-gold' },
                  { icon: Users, text: 'Strengthen communities across Canada', color: 'text-teal' },
                  { icon: Sparkles, text: 'Create lasting, positive change', color: 'text-gold' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 transition-all duration-300"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-white/90">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">2,500+</p>
                  <p className="text-xs text-white/60">Youth Served</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">1,200+</p>
                  <p className="text-xs text-white/60">Families Supported</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">92%</p>
                  <p className="text-xs text-white/60">Goes to Programs</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">15+</p>
                  <p className="text-xs text-white/60">Programs Funded</p>
                </motion.div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 p-4 bg-gold/20 rounded-xl border border-gold/20">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-sm font-semibold text-white">100% Transparent</p>
                    <p className="text-xs text-white/60">Annual reports and financial statements available</p>
                  </div>
                </div>
              </div>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 bg-white/10 text-white font-semibold rounded-lg 
                           hover:bg-white/20 transition-all duration-300 border border-white/20
                           flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Make a Donation
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <p className="text-center text-xs text-white/40 mt-4">
                Charitable Registration #: 12345-6789
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DonateCTA;