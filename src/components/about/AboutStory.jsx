// frontend/src/components/about/AboutStory.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaHome, FaGraduationCap, FaHands, FaStar } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function AboutStory() {
  const [expandedItem, setExpandedItem] = useState(null);

  const milestones = [
    {
      year: '2011',
      title: 'Foundation Established',
      description: 'CYAFSF was founded to support youth and families in our community.',
      icon: <FaHome className="text-teal-600" />
    },
    {
      year: '2015',
      title: 'Expanded Programs',
      description: 'Launched mentorship and skills development programs for youth.',
      icon: <FaGraduationCap className="text-teal-600" />
    },
    {
      year: '2020',
      title: 'Family Support Initiative',
      description: 'Introduced comprehensive family support services and resources.',
      icon: <FaHands className="text-teal-600" />
    },
    {
      year: '2024',
      title: 'Community Impact',
      description: 'Served over 5,000 youth and families across the region.',
      icon: <FaStar className="text-teal-600" />
    }
  ];

  const toggleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              title="Our "
              highlight="Story"
              centered={false}
              className="text-left !mx-0"
            />

            <motion.div 
              className="space-y-4 text-gray-600 leading-relaxed"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={textVariants}>
                CYAFSF was founded in 2011 with a simple but powerful belief: 
                every young person and family deserves access to support, 
                opportunities, and a community that believes in them.
              </motion.p>
              <motion.p variants={textVariants}>
                What started as a small community initiative has grown into a 
                trusted organization serving thousands of youth and families 
                across the region. We've expanded our programs, deepened our 
                impact, and built lasting partnerships—all while staying true 
                to our core mission.
              </motion.p>
              <motion.p variants={textVariants}>
                Today, CYAFSF continues to evolve and grow, always listening 
                to the communities we serve and adapting to meet their changing 
                needs. We're proud of our history and excited about the future 
                we're building together.
              </motion.p>
            </motion.div>

            <motion.div 
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6"
            >
              <Link 
                to="/get-involved" 
                className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                Join our mission 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Milestones */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
              <FaCalendarAlt className="text-teal-600" />
              Our Milestones
            </h3>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                className="group bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 shadow-md cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {milestone.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-teal-600 font-bold text-sm">{milestone.year}</span>
                      <motion.span 
                        className="text-xs text-gray-400"
                        animate={{ rotate: expandedItem === index ? 180 : 0 }}
                      >
                        ▼
                      </motion.span>
                    </div>
                    <h4 className="font-bold text-navy">{milestone.title}</h4>
                    <AnimatePresence>
                      {expandedItem === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2"
                        >
                          <p className="text-sm text-gray-600">{milestone.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}