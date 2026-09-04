// src/components/familySupport/FamilySupportHero.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FamilySupportHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#0B2530] min-h-[520px] md:min-h-[600px] flex items-center py-16 md:py-24">
      {/* Background with solid blue on left and clear right-aligned image */}
      <div className="absolute inset-0 z-0 bg-[#0B2530] overflow-hidden">
        {/* Image container positioned on right half */}
        <div className="absolute top-0 bottom-0 right-0 w-full lg:w-[62%] xl:w-[58%] h-full">
          <img
            src="/family/family-hero.webp.webp"
            alt="Happy family of four enjoying time together outdoors"
            className="w-full h-full object-cover object-[center_30%]"
          />
          {/* Smooth left overlay to blend image into solid blue background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2530] via-[#0B2530]/40 to-transparent via-25%" />
          {/* Subtle mobile overlay for readability on small screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2530] via-[#0B2530]/60 to-transparent lg:hidden" />
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-xl md:max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge Tag */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm">
              FAMILY SUPPORT
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold text-white leading-[1.15] mb-5"
          >
            Support for Families.<br className="hidden sm:inline" />{' '}
            <span className="text-gold block mt-1 sm:mt-0">Hope for the Future.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[#DCE7EA] text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            We provide compassionate support, guidance, and practical resources to help
            families navigate challenges, strengthen relationships, and build brighter
            futures together.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base"
            >
              Get Support Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-7 py-3 border border-white/40 bg-white/5 hover:bg-white/15 hover:border-white text-white font-semibold rounded-full backdrop-blur-xs transition-all duration-200 text-sm md:text-base"
            >
              Browse Resources
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


