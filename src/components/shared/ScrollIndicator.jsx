// frontend/src/components/shared/ScrollIndicator.jsx

import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function ScrollIndicator({ onClick, className = '' }) {
  return (
    <motion.div 
      className={`hidden md:flex justify-center -mt-8 relative z-10 ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <motion.button
        onClick={onClick}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronDown className="text-navy text-xl" />
      </motion.button>
    </motion.div>
  );
}