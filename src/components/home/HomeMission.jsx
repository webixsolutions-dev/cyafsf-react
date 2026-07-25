// frontend/src/components/home/HomeMission.jsx

import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

export default function HomeMission() {
  const approaches = [
    {
      icon: <FaLightbulb className="text-4xl text-gold" />,
      title: 'Listen First',
      description: 'Understanding individual needs and stories before offering support.'
    },
    {
      icon: <FaUsers className="text-4xl text-teal-400" />,
      title: 'Connect to Support',
      description: 'Bridging people with the right programs, resources, and community.'
    },
    {
      icon: <FaRocket className="text-4xl text-coral" />,
      title: 'Create Opportunities',
      description: 'Building pathways to skills, confidence, and lasting success.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-navy to-navy-deep text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-teal/5 rounded-full blur-3xl"
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
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-coral/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-white md:text-5xl font-display font-extrabold mb-6">
              Our Mission & Approach
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-8"
              animate={{ width: ['6rem', '8rem', '6rem'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <p className="text-lg md:text-xl text-[#DCE7EA] leading-relaxed mb-8">
              At CYAFSF, we believe in <span className="text-gold font-semibold">listening first</span> — understanding the unique 
              needs of each person we serve. We connect youth, parents, and caregivers to the right support, 
              creating <span className="text-gold font-semibold">lasting opportunities</span> for growth, belonging, and success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {approaches.map((item, index) => (
              <AnimatedCard
                key={index}
                variant="default"
                delay={index * 0.2}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <motion.div 
                  className="flex justify-center mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#DCE7EA]">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}