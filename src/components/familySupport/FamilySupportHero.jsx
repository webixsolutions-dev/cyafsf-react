// src/components/familySupport/FamilySupportHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Phone } from 'lucide-react'; // Added Phone import

const FamilySupportHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-navy to-teal text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-gold font-semibold text-sm uppercase tracking-wider 
                         bg-white/10 px-4 py-1.5 rounded-full mb-4"
            >
              Family Support
            </motion.span>
            <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold leading-tight">
              Supporting families,
              <br />
              <span className="text-gold">building futures</span>
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-xl">
              Finding the right information can feel overwhelming. CYAFSF helps families 
              understand available options, connect with trusted resources, and take the next step.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold 
                             rounded-lg hover:bg-coral/90 transition-all duration-300 shadow-lg shadow-coral/30"
                >
                  Get Support Now
                  <ArrowRight className="w-5 h-5" />
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Heart, label: 'Family Counselling', color: 'bg-coral/20' },
              { icon: Users, label: 'Support Groups', color: 'bg-gold/20' },
              { icon: Shield, label: 'Resource Navigation', color: 'bg-teal/20' },
              { icon: Phone, label: 'Crisis Support', color: 'bg-white/20' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`${item.color} backdrop-blur-sm rounded-2xl p-6 text-center 
                            border border-white/10 hover:border-white/30 transition-all duration-300
                            hover:-translate-y-1 hover:shadow-xl`}
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

export default FamilySupportHero;