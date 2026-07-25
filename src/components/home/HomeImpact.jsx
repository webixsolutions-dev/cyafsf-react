// frontend/src/components/home/HomeImpact.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUsers, FaChartLine, FaHands, FaClock } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function HomeImpact() {
  const stats = [
    { number: '5,000+', label: 'Youth Served', source: '2025 Annual Report', icon: <FaUsers className="text-teal-600 text-2xl" /> },
    { number: '95%', label: 'Program Satisfaction', source: '2025 Participant Survey', icon: <FaChartLine className="text-teal-600 text-2xl" /> },
    { number: '200+', label: 'Community Partners', source: '2025 Partnership Data', icon: <FaHands className="text-teal-600 text-2xl" /> },
    { number: '15+', label: 'Years of Service', source: 'Since 2011', icon: <FaClock className="text-teal-600 text-2xl" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <SectionTitle 
          title="Our "
          highlight="Impact"
          subtitle="Measurable results making a difference in our community"
        />

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <AnimatedCard
              key={index}
              variant="scale"
              delay={index * 0.15}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl"
            >
              <motion.div 
                className="flex justify-center mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 200, 
                  damping: 20,
                  delay: 0.2 + index * 0.1 
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.source}</div>
            </AnimatedCard>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <Link to="/impact" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-1">
              View our full impact report <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}