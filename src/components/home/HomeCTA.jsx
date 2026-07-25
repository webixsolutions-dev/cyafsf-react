// frontend/src/components/home/HomeCTA.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHandsHelping, FaHands, FaDonate, FaArrowRight } from 'react-icons/fa';

export default function HomeCTA() {
  const actions = [
    {
      to: '/volunteer',
      icon: <FaHandsHelping className="text-3xl text-white" />,
      title: 'Volunteer',
      description: 'Share your time and skills to make a meaningful impact in young lives.',
      buttonText: 'Learn More',
      buttonColor: 'bg-white text-teal-700 hover:bg-teal-50'
    },
    {
      to: '/partner',
      icon: <FaHands className="text-3xl text-white" />,
      title: 'Partner',
      description: 'Collaborate with us to expand our reach and create lasting change.',
      buttonText: 'Learn More',
      buttonColor: 'bg-white text-teal-700 hover:bg-teal-50'
    },
    {
      to: '/donate',
      icon: <FaDonate className="text-3xl text-white" />,
      title: 'Donate',
      description: 'Your financial support helps us provide essential programs and services.',
      buttonText: 'Donate Now',
      buttonColor: 'bg-gold text-navy hover:bg-yellow-400'
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
    <section className="py-16 md:py-20 bg-gradient-to-br from-teal-700 to-teal-800 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">
              Get Involved
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6"
              animate={{ width: ['6rem', '8rem', '6rem'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <p className="text-teal-100 mb-12 text-lg">
              Join us in building stronger youth, families, and communities. Your support makes a difference.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {actions.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                      damping: 12,
                      delay: index * 0.2
                    }
                  }
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-teal-100 text-sm mb-4">{item.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to={item.to} 
                    className={`inline-block px-6 py-2.5 ${item.buttonColor} font-semibold rounded-lg transition-colors`}
                  >
                    {item.buttonText}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}