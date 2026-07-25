// frontend/src/components/shared/SectionTitle.jsx

import { motion } from 'framer-motion';

export default function SectionTitle({ 
  title, 
  subtitle, 
  highlight, 
  centered = true,
  className = ''
}) {
  return (
    <motion.div 
      className={`${centered ? 'text-center' : ''} max-w-3xl mx-auto mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-5xl font-display font-extrabold text-navy mb-4">
        {title}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
            {highlight}
          </span>
        )}
      </h2>
      <motion.div 
        className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto"
        animate={{ width: ['6rem', '8rem', '6rem'] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      {subtitle && (
        <p className="text-gray-600 mt-6">{subtitle}</p>
      )}
    </motion.div>
  );
}