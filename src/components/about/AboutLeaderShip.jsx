// frontend/src/components/about/AboutLeadership.jsx

import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle.jsx';

export default function AboutLeadership() {
  const cards = [
    {
      title: 'Board of Directors',
      description: 'Provides governance, oversight, and long-term direction for the foundation.'
    },
    {
      title: 'Program Leadership',
      description: 'Guides the planning and delivery of responsive youth and family initiatives.'
    },
    {
      title: 'Community Engagement',
      description: 'Strengthens relationships with families, volunteers, organizations, and partners.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7]">
      <div className="container max-w-6xl">
        <SectionTitle 
          title="Leadership & "
          highlight="Governance"
          subtitle="A collaborative structure focused on responsible decisions, effective programs, and community needs."
        />

        {/* Center Feature Banner Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-sm mb-8 bg-gray-100"
        >
          <img 
            src="/about/06-leadership-governance.webp" 
            alt="CYAFSF leadership team meeting" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl"
          />
        </motion.div>

        {/* 3 Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/90 text-left flex flex-col justify-start h-full hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-navy text-lg mb-2.5">{card.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}