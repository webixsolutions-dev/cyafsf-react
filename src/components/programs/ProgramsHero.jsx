// frontend/src/components/programs/ProgramsHero.jsx

import { motion } from 'framer-motion';

export default function ProgramsHero({ onExplorePrograms }) {
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
    <section className="relative overflow-hidden bg-navy min-h-[520px] md:min-h-[600px] flex items-center py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <img
          src="/programs/programs-hero.webp"
          alt="Young people and an adult engaged in a group discussion"
          className="w-full h-full object-cover object-center md:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2530]/95 from-0% via-[#0B2530]/75 via-40% to-transparent to-50%" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-xl md:max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-gold font-bold text-xs md:text-sm tracking-widest uppercase mb-4"
          >
            <span className="w-2.5 h-2.5 bg-gold rounded-full inline-block shadow-sm" />
            Our Programs
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-5 leading-[1.15]"
          >
            Programs &amp; Services{' '}
            <span className="text-teal block sm:inline">
              that strengthen communities
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-[#DCE7EA] text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Our mission is to provide programs and resources that strengthen mental wellness,
            encourage resilience, and help youth and families navigate life&apos;s challenges.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button
              onClick={onExplorePrograms}
              className="px-7 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm md:text-base"
            >
              Explore Programs
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
