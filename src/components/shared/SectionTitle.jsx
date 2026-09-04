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
      className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''} mb-8 sm:mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-navy mb-3">
        {title}
        {highlight && (
          <span className="text-teal font-extrabold">
            {highlight}
          </span>
        )}
      </h2>
      <div 
        className={`h-[3px] sm:h-1 w-16 bg-gold rounded-full ${centered ? 'mx-auto' : 'mx-0'}`}
      />
      {subtitle && (
        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}