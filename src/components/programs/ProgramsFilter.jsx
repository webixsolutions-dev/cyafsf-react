// frontend/src/components/programs/ProgramsFilter.jsx

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaChevronDown, 
  FaFilter, 
  FaChild, 
  FaUsers, 
  FaHeartbeat,
  FaCheckCircle 
} from 'react-icons/fa';
import { GiFamilyHouse, GiSchoolBag } from 'react-icons/gi';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function ProgramsFilter({ categories, onFilterChange, activeCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onFilterChange(category);
    setIsOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  // Category icons mapping
  const categoryIcons = {
    'All': <FaFilter className="text-xs" />,
    'Youth': <FaChild className="text-xs" />,
    'Family': <GiFamilyHouse className="text-xs" />,
    'Skills': <GiSchoolBag className="text-xs" />,
    'Health': <FaHeartbeat className="text-xs" />,
    'Community': <FaUsers className="text-xs" />
  };

  return (
    <AnimatedCard
      variant="default"
      className="py-6 bg-white border-b border-gray-100 shadow-sm"
      id="programs-filter"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <FaFilter className="text-teal-600" />
              Filter by:
            </span>
            
            {/* Mobile Dropdown */}
            <div className="md:hidden relative">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {categoryIcons[activeCategory]}
                {activeCategory}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-xs" />
                </motion.span>
              </motion.button>

              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                exit="exit"
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-20 overflow-hidden"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm transition-all ${
                      activeCategory === category
                        ? 'bg-teal-50 text-teal-600 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-teal-600">{categoryIcons[category]}</span>
                    {category}
                    {activeCategory === category && (
                      <FaCheckCircle className="ml-auto text-teal-600 text-xs" />
                    )}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Desktop Categories */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={activeCategory === category ? 'text-white' : 'text-teal-600'}>
                    {categoryIcons[category]}
                  </span>
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div 
            className="text-sm text-gray-500 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>Showing</span>
            <span className="font-semibold text-teal-600">{categories.length - 1}</span>
            <span>programs</span>
          </motion.div>
        </div>
      </div>
    </AnimatedCard>
  );
}