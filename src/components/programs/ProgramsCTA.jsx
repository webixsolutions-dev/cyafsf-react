// frontend/src/components/programs/ProgramsCTA.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaHandsHelping, 
  FaEnvelope,
  FaQuestionCircle,
  FaPhone
} from 'react-icons/fa';

export default function ProgramsCTA() {
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
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"
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
              className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"
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
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/5"
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

          <motion.div 
            className="relative z-10 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mb-4"
            >
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <FaQuestionCircle className="text-4xl text-white" />
              </motion.div>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-display font-extrabold mb-4"
            >
              Not Sure Which Program Is Right for You?
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-teal-100 mb-8 max-w-2xl mx-auto"
            >
              Our team is here to help you find the perfect program for your needs. 
              Reach out and we'll guide you through the options.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  <FaEnvelope />
                  Contact Us
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/get-involved" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaHandsHelping />
                  Get Involved
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center gap-6 text-teal-100/80 text-sm"
            >
              <span className="flex items-center gap-2">
                <FaPhone className="text-white" />
                Call us: [Phone Number]
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-white" />
                Email: [Email Address]
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}