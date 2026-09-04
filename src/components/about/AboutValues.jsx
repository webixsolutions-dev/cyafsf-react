// frontend/src/components/about/AboutValues.jsx

import { motion } from 'framer-motion';
import { FaEarListen, FaUsers, FaHeart, FaHandshake } from 'react-icons/fa6';
import SectionTitle from '../shared/SectionTitle.jsx';

export default function AboutValues() {
  const values = [
    {
      icon: <FaEarListen className="text-teal text-2xl" />,
      title: 'Listen First',
      description: 'We begin by understanding each person\'s experiences, strengths, needs, and goals.'
    },
    {
      icon: <FaUsers className="text-teal text-2xl" />,
      title: 'Belonging & Inclusion',
      description: 'We create welcoming spaces where young people and families feel respected and valued.'
    },
    {
      icon: <FaHeart className="text-teal text-2xl" />,
      title: 'Compassionate Support',
      description: 'We provide care and guidance with empathy, dignity, and respect.'
    },
    {
      icon: <FaHandshake className="text-teal text-2xl" />,
      title: 'Collaboration & Accountability',
      description: 'We work responsibly with families, partners, and communities to strengthen support.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FAF9]">
      <div className="container max-w-6xl">
        <SectionTitle 
          title="Our "
          highlight="Values"
          subtitle="These principles guide how CYAFSF listens, serves, collaborates, and grows."
        />

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/90 text-center flex flex-col items-center h-full hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-[#DFF2EF] flex items-center justify-center mb-5 flex-shrink-0">
                {value.icon}
              </div>
              <h3 className="font-bold text-navy text-lg mb-2.5 leading-snug">{value.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}