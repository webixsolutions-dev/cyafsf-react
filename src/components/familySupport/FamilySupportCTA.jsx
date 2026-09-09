// src/components/familySupport/FamilySupportCTA.jsx

import { motion } from 'framer-motion';
import { Heart, Shield, Users, Leaf } from 'lucide-react';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white text-center mb-12">
            Our promise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
