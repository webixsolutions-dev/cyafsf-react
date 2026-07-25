// frontend/src/components/about/AboutCTA.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function AboutCTA() {
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
    hidden: { y: 20, opacity: 0 },
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 md:py-20 bg-gradient-to-br from-teal-700 to-teal-800 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            animate={{ x: [-5, 5, -5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <FaQuoteLeft className="text-4xl text-white/20 mx-auto mb-4" />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-display font-extrabold mb-4"
          >
            Join Us in Making a Difference
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-teal-100 mb-8 text-lg"
          >
            Whether you're looking for support, want to volunteer, or are 
            interested in partnering with us, we'd love to hear from you.
          </motion.p>

          <motion.div
            variants={itemVariants}
            animate={{ x: [5, -5, 5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
          >
            <FaQuoteRight className="text-4xl text-white/20 mx-auto mb-8" />
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="group px-8 py-3.5 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Get in Touch
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
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/get-involved" 
                className="group px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                Get Involved
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5
                  }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}