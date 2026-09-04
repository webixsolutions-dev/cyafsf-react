// frontend/src/components/about/AboutStory.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';

export default function AboutStory() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column - Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              title="Our "
              highlight="Story"
              centered={false}
              className="text-left !mx-0 mb-6"
            />

            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                CYAFSF was created from a shared belief that young people and families should be able to access practical support, opportunities to learn, and meaningful community connections.
              </p>
              <p>
                Our work is centred on listening first, understanding individual needs, and connecting people with appropriate resources, programs, and supportive relationships.
              </p>
              <p>
                As the foundation grows, we remain focused on accessible support, responsible partnerships, and lasting opportunities for youth and families.
              </p>
            </div>

            <div className="mt-6">
              <Link 
                to="/get-involved" 
                className="inline-flex items-center gap-2 text-teal font-semibold text-sm md:text-base hover:text-teal-dark transition-colors group"
              >
                <span>Join our mission</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-md max-h-[440px]">
              <img 
                src="/about/05-our-story.webp" 
                alt="CYAFSF community group discussion" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}