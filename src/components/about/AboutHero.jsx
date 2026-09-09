// frontend/src/components/about/AboutHero.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0b2530] text-white min-h-[460px] md:min-h-[520px] flex items-center py-12 md:py-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/about/01-about-hero.webp"
          alt="CYAFSF young people and families walking together"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2530] from-0% via-[#0b2530]/80 via-22% to-transparent to-45%" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2530] via-[#0b2530]/90 to-[#0b2530]/50 lg:hidden" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          className="max-w-xl lg:max-w-xl xl:max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-gold font-bold text-xs md:text-sm tracking-widest uppercase mb-4"
          >
            <span className="w-2.5 h-2.5 bg-gold rounded-full inline-block shadow-sm" />
            ABOUT CYAFSF
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-extrabold text-white mb-4 leading-tight tracking-tight"
          >
            Working alongside{' '}
            <span className="text-gold block sm:inline">
              young people and families
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[#DCE7EA] text-sm md:text-base leading-relaxed mb-7 max-w-xl"
          >
            CYAFSF supports young people and families through practical resources, skill-building opportunities, compassionate guidance, and meaningful community connections.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/contact">
              <button
                className="px-7 py-3 border border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-200 cursor-pointer text-sm md:text-base"
              >
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
