// frontend/src/components/home/HomePrograms.jsx

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

export default function HomePrograms() {
  const programs = [
    {
      title: 'Youth Mentorship Program',
      description: 'Young people connect with encouraging mentors who provide guidance, support goal-setting, and help them recognize their strengths.',
      link: '/programs',
      image: '/02_Youth_Mentorship_Program.webp',
      color: 'hover:border-teal-400'
    },
    {
      title: 'Family Support Services',
      description: 'Families can access parenting resources, wellness education, support navigation, and community services.',
      link: '/programs',
      image: '/03_Family_Support_Services.webp',
      color: 'hover:border-navy/30'
    },
    {
      title: 'Skills Development',
      description: 'Youth develop practical life, leadership, communication, decision-making, and career-readiness skills.',
      link: '/programs',
      image: '/04_Skills_Development.webp',
      color: 'hover:border-coral/40'
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
    <section className="py-16 md:py-20 bg-cream">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-12">
          <SectionTitle 
            title="Programs Designed to Help People "
            highlight="Thrive"
            subtitle="Supportive programs that promote confidence, emotional wellbeing, practical skills, and stronger relationships."
            centered={false}
            className="text-left !mx-0 !max-w-none !mb-0 lg:flex-1 [&_h2]:whitespace-nowrap [&_h2]:!text-lg sm:[&_h2]:!text-xl md:[&_h2]:!text-2xl lg:[&_h2]:!text-3xl xl:[&_h2]:!text-4xl"
          />
          <motion.div 
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block shrink-0 whitespace-nowrap"
          >
            <Link to="/programs" className="text-teal font-semibold hover:text-teal/80 inline-flex items-center gap-1 whitespace-nowrap">
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
          {programs.map((program, index) => (
            <AnimatedCard
              key={index}
              variant="default"
              delay={index * 0.2}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-transparent ${program.color} 
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <CardImage src={program.image} alt={program.title} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{program.title}</h3>
                <p className="text-ink/70 text-sm mb-4 leading-relaxed">{program.description}</p>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to={program.link} className="text-teal font-semibold text-sm hover:text-teal/80 inline-flex items-center gap-1">
                    Learn More <FaArrowRight className="text-xs" />
                  </Link>
                </motion.div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/programs" className="text-teal font-semibold hover:text-teal/80 inline-flex items-center gap-1">
            View All <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
