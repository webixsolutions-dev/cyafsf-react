// frontend/src/components/shared/AnimatedCard.jsx
import { motion } from 'framer-motion';

export default function AnimatedCard({ 
  children, 
  className = '', 
  hoverEffect = true,
  delay = 0,
  direction = 'up', // 'up', 'down', 'left', 'right', 'scale'
  duration = 0.6,
  disableHover = false, // New prop to completely disable hover
}) {
  const getVariants = () => {
    const base = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 12,
          delay
        }
      }
    };

    switch(direction) {
      case 'up':
        return {
          hidden: { ...base.hidden, y: 40 },
          visible: { ...base.visible, y: 0 }
        };
      case 'down':
        return {
          hidden: { ...base.hidden, y: -40 },
          visible: { ...base.visible, y: 0 }
        };
      case 'left':
        return {
          hidden: { ...base.hidden, x: -40 },
          visible: { ...base.visible, x: 0 }
        };
      case 'right':
        return {
          hidden: { ...base.hidden, x: 40 },
          visible: { ...base.visible, x: 0 }
        };
      case 'scale':
        return {
          hidden: { ...base.hidden, scale: 0.9 },
          visible: { ...base.visible, scale: 1 }
        };
      default:
        return {
          hidden: { ...base.hidden, y: 40 },
          visible: { ...base.visible, y: 0 }
        };
    }
  };

  // Determine if hover should be applied
  const shouldHover = hoverEffect && !disableHover;

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={shouldHover ? { 
        y: -10, 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transition: { duration: 0.3 }
      } : {}}
      className={className}
    >
      {children}
    </motion.div>
  );
}