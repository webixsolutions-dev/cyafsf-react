// src/components/familySupport/FamilySupportServices.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, Users, Shield, BookOpen, Phone, 
  ChevronRight, CheckCircle, ArrowRight, Calendar
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';
import SectionTitle from '../shared/SectionTitle';
import Card from '../ui/Card';

const FamilySupportServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Heart,
      title: 'Family Counselling',
      description: 'Professional counselling to help families navigate challenges, improve communication, and build resilience together.',
      details: [
        'Individual and family sessions available',
        'In-person and virtual options',
        'Sliding scale fees',
        'Culturally responsive approach',
      ],
      color: 'coral',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      icon: Users,
      title: 'Parent Support Groups',
      description: 'Supportive group sessions for parents and caregivers to share experiences, learn strategies, and build community.',
      details: [
        'Weekly group sessions',
        'Peer support and connection',
        'Expert facilitators',
        'Childcare available',
      ],
      color: 'teal',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      icon: Shield,
      title: 'Resource Navigation',
      description: 'Personalized support to help families find and access community resources and services.',
      details: [
        'One-on-one guidance',
        'Resource mapping',
        'Application assistance',
        'Follow-up support',
      ],
      color: 'gold',
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      icon: BookOpen,
      title: 'Parent Education Workshops',
      description: 'Workshops covering parenting strategies, child development, and family wellbeing.',
      details: [
        'Monthly workshops',
        'Expert speakers',
        'Practical skills',
        'Q&A sessions',
      ],
      color: 'navy',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      icon: Phone,
      title: 'Crisis Support',
      description: 'Immediate support and guidance for families in crisis situations.',
      details: [
        '24/7 crisis line',
        'Immediate response',
        'Safety planning',
        'Referral to services',
      ],
      color: 'coral',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      icon: Calendar,
      title: 'Family Activities & Events',
      description: 'Community events and activities designed to bring families together and build connections.',
      details: [
        'Monthly family events',
        'Seasonal activities',
        'All ages welcome',
        'Free participation',
      ],
      color: 'teal',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
    },
  ];

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  const colorClasses = {
    coral: { 
      text: 'text-coral', 
      iconBg: 'bg-coral/20', 
      overlay: 'from-coral/80 to-coral/50',
      hoverOverlay: 'hover:from-coral/60 hover:to-coral/30',
      border: 'border-coral/30'
    },
    teal: { 
      text: 'text-teal', 
      iconBg: 'bg-teal/20', 
      overlay: 'from-teal/80 to-teal/50',
      hoverOverlay: 'hover:from-teal/60 hover:to-teal/30',
      border: 'border-teal/30'
    },
    gold: { 
      text: 'text-gold', 
      iconBg: 'bg-gold/20', 
      overlay: 'from-gold/80 to-gold/50',
      hoverOverlay: 'hover:from-gold/60 hover:to-gold/30',
      border: 'border-gold/30'
    },
    navy: { 
      text: 'text-navy', 
      iconBg: 'bg-navy/20', 
      overlay: 'from-navy/80 to-navy/50',
      hoverOverlay: 'hover:from-navy/60 hover:to-navy/30',
      border: 'border-navy/30'
    },
  };

  return (
    <section className="py-16 bg-cream">
      <div className="container">
        <SectionTitle
          title="Our family support services"
          subtitle="Comprehensive support designed to strengthen families and build resilience."
          tag="Services"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            const isActive = activeService === service.id;

            return (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-white/30"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleServiceClick(service.id)}
                >
                  {/* Background Image with Better Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Dark Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                    {/* Color Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${colors.overlay} opacity-90 group-hover:opacity-75 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 min-h-[280px] flex flex-col">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${colors.iconBg} backdrop-blur-sm rounded-xl flex items-center justify-center 
                                    flex-shrink-0 group-hover:scale-110 transition-all duration-500`}>
                        <service.icon className={`w-6 h-6 ${colors.text} drop-shadow-lg`} />
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm mt-3 drop-shadow-md leading-relaxed">
                      {service.description}
                    </p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                            {service.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-sm text-white/90 drop-shadow-md"
                              >
                                <CheckCircle className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                                <span>{detail}</span>
                              </motion.div>
                            ))}
                            <Link to="/contact">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`mt-3 w-full py-2.5 px-4 rounded-lg font-medium text-center
                                          bg-white/20 backdrop-blur-sm text-white
                                          hover:bg-white/30 transition-all duration-500 
                                          flex items-center justify-center gap-2 border border-white/20`}
                              >
                                Learn More <ArrowRight className="w-4 h-4" />
                              </motion.button>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-auto pt-3 text-center"
                    >
                      <ChevronRight className={`w-5 h-5 ${colors.text} mx-auto transition-all duration-500 drop-shadow-lg`} />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FamilySupportServices;