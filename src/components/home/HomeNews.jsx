// frontend/src/components/home/HomeNews.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaNewspaper, FaCalendarAlt } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function HomeNews() {
  const newsItems = [
    {
      id: 1,
      title: 'New Youth Mental Health Initiative Launches',
      type: 'News',
      date: 'July 20, 2026',
      summary: 'CYAFSF partners with local organizations to provide accessible mental health support for youth in our community.',
      link: '/news/mental-health-initiative'
    },
    {
      id: 2,
      title: 'Community Family Day 2026',
      type: 'Event',
      date: 'August 15, 2026',
      summary: 'Join us for a day of family fun, activities, and community connection. Free for all families!',
      link: '/events/community-family-day'
    },
    {
      id: 3,
      title: 'Annual Impact Report Released',
      type: 'News',
      date: 'June 28, 2026',
      summary: 'Our 2025-2026 Impact Report highlights the achievements and growth of our programs serving youth and families.',
      link: '/news/impact-report-2026'
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
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <SectionTitle 
            title="News & "
            highlight="Events"
            subtitle="Stay updated with the latest from CYAFSF"
            centered={false}
            className="text-left !mx-0"
          />
          <motion.div 
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link to="/news" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-1">
              View all <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {newsItems.map((item, index) => (
            <AnimatedCard
              key={item.id}
              variant="default"
              delay={index * 0.2}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <Link to={item.link} className="block group">
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {item.type === 'News' ? (
                      <FaNewspaper className="text-teal-600" />
                    ) : (
                      <FaCalendarAlt className="text-coral" />
                    )}
                  </motion.div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    item.type === 'News' ? 'bg-teal-100 text-teal-700' : 'bg-coral/10 text-coral'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">{item.date}</span>
                </div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-teal-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
                <span className="text-teal-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more 
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <FaArrowRight className="text-xs" />
                  </motion.span>
                </span>
              </Link>
            </AnimatedCard>
          ))}
        </motion.div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/news" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-1">
            View all news & events <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}