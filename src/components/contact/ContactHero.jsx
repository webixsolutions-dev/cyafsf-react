// src/components/contact/ContactHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, Phone, Mail, MapPin,
  Clock, ArrowRight, Heart, Users
} from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-navy to-teal text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block text-gold font-semibold text-sm uppercase tracking-wider 
                         bg-white/10 px-4 py-1.5 rounded-full mb-4"
            >
              Contact Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl text-white  md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Get in touch
              <br />
              <span className="text-gold">with us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/80 text-lg mt-4 max-w-xl"
            >
              We're here to help. Reach out and we'll connect you with the right support 
              for your needs.
            </motion.p>

            {/* Quick Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8"
            >
              <a href="tel:+14034048969" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/20 transition-all duration-300">
                <Phone className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-xs text-white/60">Call us</p>
                  <p className="text-sm font-medium">403-404-8969</p>
                </div>
              </a>
              <a href="mailto:info@cyafsf.ca" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/20 transition-all duration-300">
                <Mail className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-xs text-white/60">Email us</p>
                  <p className="text-sm font-medium">info@cyafsf.com</p>
                </div>
              </a>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-3 mt-4 text-white/70 text-sm"
            >
              <Clock className="w-4 h-4 text-gold" />
              <span>Mon-Fri 9:00 AM - 5:00 PM</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: MessageCircle, label: 'Get Support', color: 'bg-coral/20' },
              { icon: Users, label: 'Family Help', color: 'bg-gold/20' },
              { icon: Heart, label: 'Volunteer', color: 'bg-teal/20' },
              { icon: MapPin, label: 'Visit Us', color: 'bg-white/20' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`${item.color} backdrop-blur-sm rounded-2xl p-6 text-center 
                            border border-white/10 hover:border-white/30 transition-all duration-300
                            hover:shadow-xl`}
              >
                <item.icon className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-sm font-medium text-white">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;