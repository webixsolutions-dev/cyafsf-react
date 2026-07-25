// frontend/src/components/about/AboutValues.jsx

import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaHeart, FaHands } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function AboutValues() {
  const values = [
    {
      icon: <FaLightbulb className="text-gold text-4xl" />,
      title: 'Listen First',
      description: 'Understanding individual needs and stories before offering support.',
      color: 'from-gold/20 to-yellow-100',
      borderColor: 'border-gold'
    },
    {
      icon: <FaUsers className="text-teal-600 text-4xl" />,
      title: 'Community Connection',
      description: 'Building bridges between people and the resources they need.',
      color: 'from-teal-100 to-teal-50',
      borderColor: 'border-teal-600'
    },
    {
      icon: <FaHeart className="text-coral text-4xl" />,
      title: 'Compassionate Support',
      description: 'Providing care and guidance with empathy, respect, and dignity.',
      color: 'from-coral/20 to-red-50',
      borderColor: 'border-coral'
    },
    {
      icon: <FaHands className="text-navy text-4xl" />,
      title: 'Collaborative Partnership',
      description: 'Working together with families, partners, and communities.',
      color: 'from-navy/10 to-blue-50',
      borderColor: 'border-navy'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="Our "
          highlight="Values"
          subtitle="These core values guide everything we do at CYAFSF."
        />

        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <AnimatedCard
              key={index}
              variant="default"
              delay={index * 0.15}
              className={`bg-gradient-to-br ${value.color} rounded-2xl p-6 shadow-lg border-2 ${value.borderColor}`}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="font-bold text-navy text-center mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 text-center">{value.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}