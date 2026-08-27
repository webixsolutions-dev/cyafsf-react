// frontend/src/components/about/AboutServiceArea.jsx

import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
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

  // List of cities
  const cities = [
    'Ottawa', 'Toronto', 'Vancouver', 'Calgary',
    'Montreal', 'Halifax', 'Winnipeg', 'Edmonton'
  ];

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
              CYAFSF proudly serves communities across Canada. We work 
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

            {/* Cities Grid */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {cities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2"
                >
                  <FaMapMarkerAlt className="text-teal-600 text-xs" />
                  <span className="text-sm text-gray-700 font-medium">{city}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex items-center gap-3 text-gray-600 bg-teal-50 p-4 rounded-lg"
              animate={floatAnimation}
            >
              <FaMapMarkerAlt className="text-teal-600 text-2xl" />
              <span className="font-medium">Serving communities across Canada</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Google Map */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.678901234567!2d-75.6769706!3d45.3512294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce08831a150dfb%3A0x6c6310ce18432438!2s495%20Water%20St%2C%20St.%20John%27s%2C%20NL%20A1E%206B5!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CYAFSF Location Map"
                className="rounded-xl"
              />
            </div>
            <p className="text-xs text-ink/40 text-center mt-2">
              495 Water St, St. John's, NL A1E 6B5
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}