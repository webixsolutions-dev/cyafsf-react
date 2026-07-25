// frontend/src/components/shared/AnimatedCard.jsx

import { motion } from 'framer-motion';

export default function AnimatedCard({ 
  children, 
  className = '', 
  hoverEffect = true,
  delay = 0,
  variant = 'default'
}) {
  const variants = {
    default: {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 12,
          delay
        }
      }
    },
    slideLeft: {
      hidden: { x: -30, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay
        }
      }
    },
    slideRight: {
      hidden: { x: 30, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          delay
        }
      }
    }
  };

  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hoverEffect ? { 
        y: -10, 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      } : {}}
      className={className}
    >
      {children}
    </motion.div>
  );
}