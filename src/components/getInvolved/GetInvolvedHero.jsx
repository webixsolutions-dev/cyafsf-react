// src/components/getInvolved/GetInvolvedHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Heart, Hand, Users, DollarSign,
  Sparkles, Star, Award
} from 'lucide-react';

const GetInvolvedHero = () => {
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
              Get Involved
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl text-white md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Make a difference
              <br />
              <span className="text-gold">today</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/80 text-lg mt-4 max-w-xl"
            >
              There are many ways to support CYAFSF and help strengthen youth, 
              families, and communities across Canada.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold 
                             rounded-lg hover:bg-coral/90 transition-all duration-300 shadow-lg shadow-coral/30"
                >
                  <Hand className="w-5 h-5" />
                  Volunteer
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
                  Donate Now
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/20"
            >
              {[
                { value: '150+', label: 'Active Volunteers', icon: Users },
                { value: '45+', label: 'Community Partners', icon: Award },
                { value: '92%', label: 'Satisfaction Rate', icon: Star },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <stat.icon className="w-5 h-5 text-gold" />
                  <div>
                    <p className="font-bold">{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
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
              { icon: Hand, label: 'Volunteer', color: 'bg-coral/20' },
              { icon: Users, label: 'Partner', color: 'bg-gold/20' },
              { icon: DollarSign, label: 'Donate', color: 'bg-teal/20' },
              { icon: Sparkles, label: 'Impact', color: 'bg-white/20' },
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

export default GetInvolvedHero;