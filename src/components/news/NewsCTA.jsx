// src/components/news/NewsCTA.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Heart, MessageCircle, Sparkles,
  Calendar, Users, Award, ChevronRight,
  Mail, Phone, MapPin, Clock, Shield, CheckCircle, AlertCircle
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const NewsCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Success
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (status === 'error' || status === 'success') {
      setStatus('idle');
      setMessage('');
    }
  };

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
              Don't miss out on
              <br />
              <span className="text-gold">our latest stories</span>
            </h2>
            
            <p className="text-white/80 text-lg mt-4">
              Subscribe to our newsletter and be the first to know about new programs, 
              events, and community impact stories.
            </p>

            {/* Newsletter Subscription - Working */}
            <form onSubmit={handleSubscribe} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    disabled={status === 'loading' || status === 'success'}
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border 
                              text-white placeholder-white/50 focus:border-gold focus:ring-2 
                              focus:ring-gold/20 outline-none transition-all duration-300
                              ${status === 'error' ? 'border-red-400 ring-2 ring-red-400/30' : 'border-white/20'}
                              ${status === 'success' ? 'border-green-400 ring-2 ring-green-400/30' : ''}
                              ${(status === 'loading' || status === 'success') ? 'opacity-70 cursor-not-allowed' : ''}`}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={status === 'idle' ? { scale: 1.05 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.95 } : {}}
                  disabled={status === 'loading' || status === 'success'}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold 
                             rounded-lg transition-all duration-300 shadow-lg shadow-gold/30
                             ${(status === 'loading' || status === 'success') 
                               ? 'opacity-70 cursor-not-allowed' 
                               : 'hover:bg-gold/90'}`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Subscribe Now
                    </>
                  )}
                </motion.button>
              </div>
              
              {/* Status Messages */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-3 text-sm flex items-center gap-2 ${
                    status === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  {message}
                </motion.div>
              )}
              
              <p className="text-white/50 text-xs mt-2">
                No spam. Unsubscribe anytime.
              </p>
            </form>

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
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Column - Highlights */}
          <AnimatedSection direction="right" disableHover={true}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-gold" />
                <h3 className="text-2xl font-bold text-white">Why Subscribe?</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Calendar, text: 'Get updates on upcoming events', color: 'text-coral' },
                  { icon: Users, text: 'Read inspiring community stories', color: 'text-gold' },
                  { icon: Heart, text: 'Learn about new programs and services', color: 'text-teal' },
                  { icon: Sparkles, text: 'Be part of positive change', color: 'text-gold' },
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
                  <p className="text-2xl font-bold text-gold">50+</p>
                  <p className="text-xs text-white/60">Articles Published</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">15+</p>
                  <p className="text-xs text-white/60">Community Stories</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">1,200+</p>
                  <p className="text-xs text-white/60">Readers</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">92%</p>
                  <p className="text-xs text-white/60">Reader Satisfaction</p>
                </motion.div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 p-4 bg-gold/20 rounded-xl border border-gold/20">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-sm font-semibold text-white">Trusted Content</p>
                    <p className="text-xs text-white/60">Verified stories and updates from CYAFSF</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NewsCTA;