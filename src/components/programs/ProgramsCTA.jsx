// frontend/src/components/programs/ProgramsCTA.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProgramsCTA() {
  return (
    <section className="bg-teal py-16 md:py-24 text-white overflow-hidden">
      <div className="container max-w-4xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Help Build Stronger Futures
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Your contribution helps provide programs, resources, and support that empower youth
            and families.
          </p>

          <Link to="/donate">
            <button
              type="button"
              className="px-8 py-3.5 bg-gold hover:bg-yellow-400 text-navy font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-sm sm:text-base"
            >
              Donate Today
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
