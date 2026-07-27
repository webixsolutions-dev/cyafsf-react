// frontend/src/components/about/AboutHero.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ScrollIndicator from '../shared/ScrollIndicator.jsx';

export default function AboutHero({ onScrollToMission }) {
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
      className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep text-white py-20 md:py-28"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-teal/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-coral/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div variants={itemVariants}>
          <motion.div 
            className="flex items-center gap-2 text-gold font-semibold text-sm md:text-base uppercase tracking-wider mb-4"
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <motion.span 
              className="w-2 h-2 bg-gold rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            About CYAFSF
          </motion.div>
          <h1 className="text-4xl text-white md:text-6xl font-display font-extrabold mb-6 leading-tight">
            Working alongside
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">
              young people and families
            </span>
          </h1>
          <p className="text-[#DCE7EA] text-lg md:text-xl max-w-2xl leading-relaxed">
            CYAFSF works alongside young people and families to strengthen wellbeing, 
            build skills and create meaningful connections to community. We believe 
            every young person and family should be able to find support, feel a sense 
            of belonging and move toward a hopeful future.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-coral text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                Learn More
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator onClick={onScrollToMission} />
    </motion.section>
  );
}