// frontend/src/components/about/AboutGovernance.jsx

import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa';

export default function AboutGovernance() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200"
    >
      <div className="container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <FaHandshake className="text-teal-600 text-2xl" />
            <h3 className="text-xl font-bold text-navy">Governance & Accountability</h3>
          </div>
          <motion.div 
            className="space-y-3 text-sm text-gray-600 bg-white p-6 rounded-xl shadow-md"
            whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
          >
            <motion.p 
              className="flex items-start gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-teal-600">•</span>
              <span><span className="font-semibold">Legal Name:</span> Canadian Youth and Family Support Foundation</span>
            </motion.p>
            <motion.p 
              className="flex items-start gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
            >
              <span className="text-teal-600">•</span>
              <span><span className="font-semibold">Registration Number:</span> [Registration number to be confirmed]</span>
            </motion.p>
            <motion.p 
              className="flex items-start gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            >
              <span className="text-teal-600">•</span>
              <span><span className="font-semibold">Charitable Status:</span> [Registered charity status to be confirmed]</span>
            </motion.p>
            <motion.div 
              className="mt-4 pt-4 border-t border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 leading-relaxed">
                CYAFSF is committed to transparency, accountability, and ethical 
                governance. We adhere to all applicable laws and regulations, and 
                we're proud to be a trusted partner in our community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}