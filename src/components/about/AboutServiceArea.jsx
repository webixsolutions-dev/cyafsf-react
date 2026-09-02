// frontend/src/components/about/AboutServiceArea.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';

export default function AboutServiceArea() {
  const locations = [
    {
      title: 'Head Office',
      address: '495 Water Street, St. John\'s, NL A1E 6B5'
    },
    {
      title: 'Calgary Branch',
      address: '100, 717 7 Avenue SW, Calgary, AB T2P 0Z3'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              title="Where We "
              highlight="Serve"
              centered={false}
              className="text-left !mx-0 mb-6"
            />

            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                CYAFSF works to make support easier to understand and access through community-based programs, resources, and partnerships.
              </p>
              <p>
                Program availability may vary by location. Contact our team to learn about current services and support in your area.
              </p>
            </div>

            <div className="mt-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm md:text-base hover:text-teal-dark transition-colors group"
              >
                <span>Contact us about services</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Locations Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#E6F4F1] rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-navy text-lg sm:text-xl mb-5">
                Current locations
              </h3>

              <div className="space-y-4">
                {locations.map((loc, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100/80 flex items-center gap-4"
                  >
                    {/* Teal circle dot icon */}
                    <div className="w-9 h-9 rounded-full bg-[#C7ECE6] flex items-center justify-center flex-shrink-0">
                      <div className="w-3.5 h-3.5 rounded-full bg-teal" />
                    </div>

                    <div>
                      <h4 className="font-bold text-navy text-base">{loc.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{loc.address}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}