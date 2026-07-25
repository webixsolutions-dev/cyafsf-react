// src/components/getInvolved/GetInvolvedCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Heart, Hand, Users, 
  MessageCircle, Sparkles, Gift,
  Calendar, Star, Award, ChevronRight
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';
import { useLanguage } from '../../context/LanguageContext';

const GetInvolvedCTA = () => {
  const { t } = useLanguage();

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
              {t('getInvolvedCTATitle') || 'Take Action'}
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('getInvolvedCTAHeading') || 'Ready to make'}
              <br />
              <span className="text-gold">{t('getInvolvedCTAHighlight') || 'a difference?'}</span>
            </h2>
            
            <p className="text-white/80 text-lg mt-4">
              {t('getInvolvedCTADesc') || 'Join us in building stronger youth, families, and communities. There are many ways to get involved and make a lasting impact.'}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold 
                             rounded-lg hover:bg-coral/90 transition-all duration-300 shadow-lg shadow-coral/30"
                >
                  <Hand className="w-5 h-5" />
                  {t('getInvolvedVolunteer') || 'Volunteer'}
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-white font-semibold 
                             rounded-lg hover:bg-teal/90 transition-all duration-300 shadow-lg shadow-teal/30"
                >
                  <Users className="w-5 h-5" />
                  {t('getInvolvedPartner') || 'Partner'}
                </motion.button>
              </Link>
              <Link to="/donate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold 
                             rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/30"
                >
                  <Heart className="w-5 h-5" />
                  {t('donate') || 'Donate'}
                </motion.button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 mt-6">
              <Link to="/contact" className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {t('contact') || 'Contact Us'}
              </Link>
              <Link to="/events" className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {t('getInvolvedCTAEvents') || 'Upcoming Events'}
              </Link>
              <Link to="/news" className="text-white/70 hover:text-gold transition-colors text-sm flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                {t('footerNews') || 'News & Stories'}
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Column - Impact Highlights */}
          <AnimatedSection direction="right" disableHover={true}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-gold" />
                <h3 className="text-2xl font-bold text-white">{t('getInvolvedCTAWhy') || 'Why Get Involved?'}</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Star, text: t('getInvolvedCTAWhy1') || 'Make a meaningful impact in your community', color: 'text-gold' },
                  { icon: Users, text: t('getInvolvedCTAWhy2') || 'Connect with passionate people', color: 'text-coral' },
                  { icon: Heart, text: t('getInvolvedCTAWhy3') || 'Support youth and families in need', color: 'text-teal' },
                  { icon: Sparkles, text: t('getInvolvedCTAWhy4') || 'Be part of something bigger', color: 'text-gold' },
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
                  <p className="text-2xl font-bold text-gold">150+</p>
                  <p className="text-xs text-white/60">{t('getInvolvedCTAVolunteers') || 'Active Volunteers'}</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">45+</p>
                  <p className="text-xs text-white/60">{t('getInvolvedCTAPartners') || 'Community Partners'}</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">92%</p>
                  <p className="text-xs text-white/60">{t('getInvolvedCTASatisfaction') || 'Satisfaction Rate'}</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                >
                  <p className="text-2xl font-bold text-gold">15+</p>
                  <p className="text-xs text-white/60">{t('getInvolvedCTAPrograms') || 'Programs Available'}</p>
                </motion.div>
              </div>

              <Link to="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 bg-white/10 text-white font-semibold rounded-lg 
                           hover:bg-white/20 transition-all duration-300 border border-white/20
                           flex items-center justify-center gap-2"
                >
                  {t('getInvolvedCTAExplore') || 'Explore All Ways to Help'}
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedCTA;