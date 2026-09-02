// frontend/src/components/home/HomeNews.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

function CardImage({ src, alt }) {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default function HomeNews() {
  const newsItems = [
    {
      id: 1,
      title: 'Program Updates',
      summary: 'Learn about upcoming programs, workshops, and youth and family support initiatives.',
      link: '/news',
      image: '/05_Program_Updates.webp'
    },
    {
      id: 2,
      title: 'Community Events',
      summary: 'Explore opportunities to connect, learn, volunteer, and participate in your community.',
      link: '/news',
      image: '/06_Community_Events.webp'
    },
    {
      id: 3,
      title: 'Resources & Stories',
      summary: 'Find practical tools, helpful information, and stories that encourage resilience and growth.',
      link: '/news',
      image: '/07_Resources_and_Stories.webp'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="relative mb-12">
          <SectionTitle 
            title="Stay Connected with "
            highlight="CYAFSF"
            subtitle="Discover program updates, community activities, educational resources, and opportunities to get involved."
            centered={true}
          />
          <motion.div 
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block absolute top-0 right-0"
          >
            <Link to="/news" className="text-teal font-semibold hover:text-teal/80 flex items-center gap-1">
              View All <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {newsItems.map((item, index) => (
            <AnimatedCard
              key={item.id}
              variant="default"
              delay={index * 0.2}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-cream-dark/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link to={item.link} className="block group">
                <CardImage src={item.image} alt={item.title} />
                <div className="p-6">
                  <h3 className="font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/70 mb-3 leading-relaxed">
                    {item.summary}
                  </p>
                  <span className="text-teal font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More 
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <FaArrowRight className="text-xs" />
                    </motion.span>
                  </span>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </motion.div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/news" className="text-teal font-semibold hover:text-teal/80 inline-flex items-center gap-1">
            View All <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
