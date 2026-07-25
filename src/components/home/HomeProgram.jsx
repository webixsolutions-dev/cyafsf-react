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
      description: 'One-on-one mentoring that builds confidence, develops skills, and creates lasting connections for young people aged 12-24.',
      link: '/programs/youth-mentorship',
      icon: <FaUserGraduate className="text-4xl text-teal-600" />
    },
    {
      title: 'Family Support Services',
      description: 'Practical support for families including counseling, resource navigation, and parent education workshops.',
      link: '/family-support',
      icon: <GiFamilyHouse className="text-4xl text-teal-600" />
    },
    {
      title: 'Skills Development',
      description: 'Job readiness training, life skills workshops, and career exploration programs for youth and young adults.',
      link: '/programs/skills-development',
      icon: <FaBookOpen className="text-4xl text-teal-600" />
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
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <SectionTitle 
            title="Featured "
            highlight="Programs"
            subtitle="Discover our priority programs designed to make a real difference."
            centered={false}
            className="text-left !mx-0"
          />
          <motion.div 
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link to="/programs" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-1">
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
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {program.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-navy mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{program.description}</p>
              <motion.div whileHover={{ x: 5 }}>
                <Link to={program.link} className="text-teal-600 font-semibold text-sm hover:text-teal-700 inline-flex items-center gap-1">
                  Learn more <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            </AnimatedCard>
          ))}
        </motion.div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/programs" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-1">
            View all programs <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}