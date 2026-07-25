// frontend/src/components/home/HomeAudience.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChild, FaUserFriends, FaHandsHelping } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function HomeAudience() {
  const audiences = [
    {
      to: '/youth',
      icon: <FaChild className="text-3xl text-teal-600" />,
      iconBg: 'bg-teal-600/10 group-hover:bg-teal-600/20',
      title: "I'm a Young Person",
      description: 'Build skills, confidence, and connections for your future.',
      color: 'from-teal-50 to-teal-100/50 hover:from-teal-100 hover:to-teal-200/50',
      borderColor: 'hover:border-teal-400',
      linkText: 'Get started'
    },
    {
      to: '/family-support',
      icon: <FaUserFriends className="text-3xl text-navy" />,
      iconBg: 'bg-navy/10 group-hover:bg-navy/20',
      title: "I'm a Parent or Caregiver",
      description: 'Find support, resources, and community for your family.',
      color: 'from-navy/5 to-navy/10 hover:from-navy/10 hover:to-navy/20',
      borderColor: 'hover:border-navy/30',
      linkText: 'Explore support'
    },
    {
      to: '/get-involved',
      icon: <FaHandsHelping className="text-3xl text-coral" />,
      iconBg: 'bg-coral/10 group-hover:bg-coral/20',
      title: 'I Want to Help',
      description: 'Volunteer, partner, or donate to make a difference.',
      color: 'from-coral/10 to-coral/20 hover:from-coral/20 hover:to-coral/30',
      borderColor: 'hover:border-coral/40',
      linkText: 'Get involved'
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
        <SectionTitle 
          title="How Can We Help "
          highlight="Today?"
          subtitle="Choose the path that best describes your journey, and we'll connect you with the right support."
        />

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {audiences.map((item, index) => (
            <AnimatedCard
              key={index}
              variant="default"
              delay={index * 0.2}
              className={`group bg-gradient-to-br ${item.color} rounded-2xl p-8 transition-all duration-300 border-2 border-transparent ${item.borderColor}`}
            >
              <Link to={item.to} className="block">
                <motion.div 
                  className={`w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center mb-4 transition-colors`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <span className="inline-flex items-center text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  {item.linkText} 
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <FaArrowRight className="ml-1" />
                  </motion.span>
                </span>
              </Link>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}