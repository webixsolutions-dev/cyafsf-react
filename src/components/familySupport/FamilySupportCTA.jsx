// src/components/familySupport/FamilySupportCTA.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Users, Leaf } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Compassionate Support',
    description: 'We listen with care and respect every family.',
    iconColor: 'text-gold',
  },
  {
    icon: Shield,
    title: 'Confidential & Safe',
    description: 'Your privacy and safety are our priority.',
    iconColor: 'text-white',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our team is trained and dedicated to helping families.',
    iconColor: 'text-white',
  },
  {
    icon: Leaf,
    title: 'Community Focused',
    description: 'Connecting families to stronger communities.',
    iconColor: 'text-white',
  },
];

export default function FamilySupportCTA() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#0B2530] via-[#143B4A] to-[#168C87] text-white overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-gold font-bold text-xs md:text-sm tracking-widest uppercase mb-4 bg-white/10 px-4 py-1.5 rounded-full">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
              We&apos;re here for you.
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Reach out today to speak with our team and find the support your family needs.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/80 hover:border-white hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-200 text-sm md:text-base"
              >
                Browse Resources
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
