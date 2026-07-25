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
      className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep text-white py-20 md:py-28"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/50" />
      
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
      
      <div className="container relative grid md:grid-cols-1 gap-10 items-center z-10">
        <div>
          <motion.div 
            variants={itemVariants}
            className="text-gold font-semibold text-sm md:text-base uppercase tracking-wider mb-2"
          >
            Support • Belonging • Opportunity
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-4"
          >
            Stronger youth.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-400">
              Stronger families.
            </span>
            <br />
            Stronger communities.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-[#DCE7EA] text-base md:text-lg max-w-[46ch] mb-8 leading-relaxed"
          >
            CYAFSF connects young people and families with practical support, 
            learning opportunities and community relationships that help them thrive.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/programs" 
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