// frontend/src/components/about/AboutCTA.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutCTA() {
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
            Help Create Stronger Futures
          </h2>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you are looking for support, interested in volunteering, or exploring a community partnership, CYAFSF would be pleased to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <button className="px-7 py-3 bg-white text-teal font-semibold rounded-full shadow-sm hover:bg-gray-100 transition-all duration-200 cursor-pointer text-sm sm:text-base">
                Get in Touch
              </button>
            </Link>
            <Link to="/get-involved">
              <button className="px-7 py-3 border border-white hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-200 cursor-pointer text-sm sm:text-base">
                Get Involved
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}