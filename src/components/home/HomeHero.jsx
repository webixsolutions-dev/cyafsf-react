// frontend/src/components/home/HomeHero.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function HomeHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden text-white py-20 md:py-28"
    >
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/01_CYAFSF_Hero.webp')",
          backgroundPosition: 'center 15%',
        }}
      />

      {/* Bluish overlay for text contrast and brand tone */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50" />
      
      <div className="container relative grid md:grid-cols-1 gap-10 items-center z-10">
        <div>
          <motion.div 
            variants={itemVariants}
            className="text-gold font-semibold text-sm md:text-base uppercase tracking-wider mb-2 drop-shadow-md"
          >
            Support • Belonging • Opportunity
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-4 drop-shadow-lg"
          >
            Supporting Youth.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">
              Strengthening Families.
            </span>
            <br />
            Building Brighter Futures.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-white text-base md:text-lg max-w-[46ch] mb-8 leading-relaxed drop-shadow-md"
          >
            CYAFSF connects young people and families with practical resources, 
            skill-building programs, mental wellness education, and supportive community networks.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/family-support" 
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-coral text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Find Support
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/programs" 
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Explore Programs 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
