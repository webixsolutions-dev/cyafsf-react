// frontend/src/components/about/AboutMission.jsx

import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle.jsx';

export default function AboutMission() {
  const cards = [
    {
      image: '/about/02-our-mission.webp',
      alt: 'Our Mission - Young people talking with support worker',
      title: 'Our Mission',
      description: 'To support young people and families through accessible programs, practical resources, skills development, and meaningful community connections.'
    },
    {
      image: '/about/03-our-vision.webp',
      alt: 'Our Vision - Group of youth learning and building futures',
      title: 'Our Vision',
      description: 'Communities where young people and families feel supported, included, and equipped to build hopeful futures.'
    },
    {
      image: '/about/04-our-commitment.webp',
      alt: 'Our Commitment - Diverse community volunteers and families',
      title: 'Our Commitment',
      description: 'To provide respectful, inclusive, and responsive support while working with community partners to create lasting opportunities.'
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl">
        <SectionTitle 
          title="Our "
          highlight="Purpose"
          subtitle="Creating accessible pathways to support, belonging, learning, and opportunity."
        />

        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100/90 flex flex-col h-full hover:shadow-md transition-all"
            >
              <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-5 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2.5">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}