// frontend/src/components/programs/ProgramsHero.jsx

import { motion } from 'framer-motion';

export default function ProgramsHero() {
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
      className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep text-white py-16 md:py-24"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
      
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
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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
            Our Programs
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 leading-tight">
            Find the Right
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">
              Support for You
            </span>
          </h1>
          <p className="text-[#DCE7EA] text-lg md:text-xl max-w-2xl leading-relaxed">
            Explore our programs designed to support youth, families, and 
            communities. Each program is tailored to meet specific needs 
            and create lasting impact.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}