// frontend/src/components/home/HomePrograms.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUserGraduate, FaBookOpen } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function HomePrograms() {
  const programs = [
    {
      title: 'Youth Mentorship Program',
      description: 'Build confidence, develop skills, and create lasting connections through one-on-one mentoring for youth aged 12-24.',
      link: '/programs',
      icon: <FaUserGraduate className="text-4xl text-teal-600" />,
      color: 'hover:border-teal-400'
    },
    {
      title: 'Family Support Services',
      description: 'Find practical support including counseling, resource navigation, and parent education workshops for families.',
      link: '/family-support',
      icon: <GiFamilyHouse className="text-4xl text-teal-600" />,
      color: 'hover:border-navy/30'
    },
    {
      title: 'Skills Development',
      description: 'Build job readiness, learn life skills, and explore career opportunities through our skills development programs.',
      link: '/programs',
      icon: <FaBookOpen className="text-4xl text-teal-600" />,
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
        <div className="flex justify-between items-center mb-12">
          <SectionTitle 
            title="Featured "
            highlight="Programs"
            subtitle="Discover our priority programs designed to strengthen youth, families, and communities."
            centered={false}
            className="text-left !mx-0"
          />
          <motion.div 
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link to="/programs" className="text-teal font-semibold hover:text-teal/80 flex items-center gap-1">
              View all <FaArrowRight className="text-sm" />
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
              className={`bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent ${program.color} 
                         transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {program.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-navy mb-2">{program.title}</h3>
              <p className="text-ink/70 text-sm mb-4 leading-relaxed">{program.description}</p>
              <motion.div whileHover={{ x: 5 }}>
                <Link to={program.link} className="text-teal font-semibold text-sm hover:text-teal/80 inline-flex items-center gap-1">
                  Learn more <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            </AnimatedCard>
          ))}
        </motion.div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/programs" className="text-teal font-semibold hover:text-teal/80 inline-flex items-center gap-1">
            View all programs <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}