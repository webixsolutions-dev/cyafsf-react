// frontend/src/components/about/AboutServiceArea.jsx

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';

export default function AboutServiceArea() {
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              title="Where We "
              highlight="Serve"
              centered={false}
              className="text-left !mx-0"
            />

            <motion.p 
              className="text-gray-600 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              CYAFSF proudly serves communities across [Service Area]. We work 
              in partnership with local organizations, schools, and community 
              groups to reach youth and families where they are.
            </motion.p>

            <motion.p 
              className="text-gray-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our programs and services are designed to be accessible and 
              inclusive, meeting the diverse needs of the communities we serve.
            </motion.p>

            <motion.div 
              className="flex items-center gap-3 text-gray-600 bg-teal-50 p-4 rounded-lg"
              animate={floatAnimation}
            >
              <FaMapMarkerAlt className="text-teal-600 text-2xl" />
              <span className="font-medium">[Service area details to be confirmed]</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center overflow-hidden relative">
              {/* Animated map pins */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div 
                    className="w-32 h-32 bg-teal-200 rounded-full absolute -top-16 -left-16"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <motion.div 
                    className="w-24 h-24 bg-coral-200 rounded-full absolute -bottom-12 -right-12"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1
                    }}
                  />
                  <motion.div 
                    className="w-16 h-16 bg-gold-200 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 2
                    }}
                  />
                  
                  <motion.div animate={floatAnimation}>
                    <FaMapMarkerAlt className="text-6xl text-teal-600 relative z-10" />
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-teal-600/30 rounded-full"
                    animate={{
                      scale: [1, 0.5, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </div>
              </div>
              
              {/* Animated dots */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-teal-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: Math.random() * 3
                  }}
                />
              ))}
              
              <div className="relative z-10 text-center text-gray-400 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                <FaGlobe className="text-2xl mx-auto mb-2 text-teal-600" />
                <p className="font-semibold text-gray-600">Service Area Map</p>
                <p className="text-sm">[Map or location image here]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}