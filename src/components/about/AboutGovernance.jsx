// frontend/src/components/about/AboutGovernance.jsx

import { motion } from 'framer-motion';

export default function AboutGovernance() {
  return (
    <section className="py-16 md:py-20 bg-[#F4F7F6]">
      <div className="container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy mb-6">
            Governance & Accountability
          </h2>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100/90">
            <h3 className="font-bold text-navy text-base sm:text-lg mb-3">
              Legal name: Canadian Youth and Family Support Foundation
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              CYAFSF is committed to transparency, ethical governance, responsible stewardship, and compliance with applicable requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}