// frontend/src/components/programs/ProgramsCard.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaUsers, 
  FaClock, 
  FaMapMarkerAlt, 
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function ProgramsCard({ program, index }) {
  const {
    title,
    description,
    icon,
    iconBg,
    category,
    audience,
    duration,
    location,
    eligibility,
    link,
    featured
  } = program;

  // Category color mapping
  const categoryColors = {
    'Youth': 'bg-blue-50 text-blue-600',
    'Family': 'bg-green-50 text-green-600',
    'Skills': 'bg-purple-50 text-purple-600',
    'Health': 'bg-red-50 text-red-600',
    'Community': 'bg-orange-50 text-orange-600'
  };

  return (
    <AnimatedCard
      variant="default"
      delay={index * 0.1}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group relative"
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div 
          className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-gold to-yellow-400 text-navy text-xs font-bold rounded-full flex items-center gap-1 shadow-lg"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <FaStar className="text-xs" />
          Featured
        </motion.div>
      )}

      <div className="p-6">
        {/* Icon */}
        <motion.div 
          className={`w-16 h-16 bg-gradient-to-br ${iconBg || 'from-teal-100 to-teal-200'} rounded-xl flex items-center justify-center mb-4`}
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          {icon}
        </motion.div>

        {/* Category Badge */}
        <motion.span 
          className={`inline-block px-3 py-1 ${categoryColors[category] || 'bg-gray-50 text-gray-600'} text-xs font-semibold rounded-full mb-3`}
          whileHover={{ scale: 1.05 }}
        >
          {category}
        </motion.span>

        {/* Title */}
        <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-teal-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Details with Icons */}
        <div className="space-y-2 mb-4 border-t border-gray-100 pt-4">
          <motion.div 
            className="flex items-center gap-2 text-sm text-gray-500"
            whileHover={{ x: 3 }}
          >
            <FaUsers className="text-teal-600 text-sm" />
            <span>{audience}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 text-sm text-gray-500"
            whileHover={{ x: 3 }}
          >
            <FaClock className="text-teal-600 text-sm" />
            <span>{duration}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 text-sm text-gray-500"
            whileHover={{ x: 3 }}
          >
            <FaMapMarkerAlt className="text-teal-600 text-sm" />
            <span>{location}</span>
          </motion.div>
          {eligibility && (
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-500"
              whileHover={{ x: 3 }}
            >
              <FaCheckCircle className="text-teal-600 text-sm" />
              <span>{eligibility}</span>
            </motion.div>
          )}
        </div>

        {/* Link */}
        <motion.div 
          whileHover={{ x: 5 }}
          className="mt-2"
        >
          <Link 
            to={link} 
            className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors group/link"
          >
            Learn More
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
          </Link>
        </motion.div>
      </div>
    </AnimatedCard>
  );
}