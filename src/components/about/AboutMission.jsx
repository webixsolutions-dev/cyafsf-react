// frontend/src/components/about/AboutMission.jsx

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaAward } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function AboutMission() {
  const missions = [
    {
      icon: <FaRocket className="text-white text-2xl" />,
      iconBg: 'from-teal-500 to-teal-600',
      title: 'Our Mission',
      description: 'To strengthen youth and families by providing accessible support, building meaningful connections, and creating opportunities for growth and belonging.'
    },
    {
      icon: <FaLightbulb className="text-white text-2xl" />,
      iconBg: 'from-gold to-yellow-500',
      title: 'Our Vision',
      description: 'A community where every young person and family has the support, skills, and opportunities they need to thrive.'
    },
    {
      icon: <FaAward className="text-white text-2xl" />,
      iconBg: 'from-coral to-red-500',
      title: 'Our Impact',
      description: 'Since 2011, we\'ve been making a difference in the lives of youth and families through trusted programs, practical resources, and community connections.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <SectionTitle 
          title="Our "
          highlight="Purpose"
        />

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {missions.map((item, index) => (
            <AnimatedCard
              key={index}
              variant="default"
              delay={index * 0.2}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${item.iconBg} rounded-full flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}