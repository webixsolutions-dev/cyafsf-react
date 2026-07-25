// frontend/src/components/programs/ProgramsGrid.jsx

import { motion } from 'framer-motion';
import { FaSearch, FaFrown } from 'react-icons/fa';
import ProgramsCard from './ProgramsCard.jsx';

export default function ProgramsGrid({ programs }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {programs.map((program, index) => (
            <ProgramsCard 
              key={program.id || index} 
              program={program} 
              index={index} 
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {programs.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            </motion.div>
            <p className="text-gray-500 text-lg">No programs found matching your criteria.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}