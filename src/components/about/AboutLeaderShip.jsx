// frontend/src/components/about/AboutLeadership.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function AboutLeadership() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const leadership = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Executive Director',
      bio: '20+ years of experience in youth development and family services.',
      icon: <FaUserTie className="text-3xl" />
    },
    {
      name: 'Michael Chen',
      title: 'Board Chair',
      bio: 'Community leader with expertise in nonprofit governance and strategic planning.',
      icon: <FaUserTie className="text-3xl" />
    },
    {
      name: 'Emily Rodriguez',
      title: 'Director of Programs',
      bio: 'Passionate about creating impactful programs for youth and families.',
      icon: <FaUserTie className="text-3xl" />
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <SectionTitle 
          title="Leadership "
          highlight="Team"
          subtitle="Dedicated individuals leading CYAFSF with passion and expertise."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {leadership.map((person, index) => (
            <AnimatedCard
              key={index}
              variant="default"
              delay={index * 0.2}
              className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div 
                className="w-28 h-28 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4"
                animate={{
                  scale: hoveredCard === index ? 1.1 : 1,
                  rotate: hoveredCard === index ? 10 : 0
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-5xl text-teal-600">
                  {person.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-navy">{person.name}</h3>
              <p className="text-teal-600 font-semibold text-sm mb-3">{person.title}</p>
              <AnimatePresence>
                {hoveredCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-gray-600">{person.bio}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div 
                className="mt-4 w-12 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto"
                animate={{ width: hoveredCard === index ? '6rem' : '3rem' }}
                transition={{ duration: 0.3 }}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}