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
    coral: { text: 'text-coral', iconBg: 'bg-coral/20', overlay: 'from-coral/70 to-coral/30' },
    teal: { text: 'text-teal', iconBg: 'bg-teal/20', overlay: 'from-teal/70 to-teal/30' },
    gold: { text: 'text-gold', iconBg: 'bg-gold/20', overlay: 'from-gold/70 to-gold/30' },
    navy: { text: 'text-navy', iconBg: 'bg-navy/20', overlay: 'from-navy/70 to-navy/30' },
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
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleServiceClick(service.id)}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${colors.overlay} 
                                  group-hover:opacity-0 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-white/90 group-hover:bg-white/20 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center 
                                    flex-shrink-0 group-hover:bg-white/30 group-hover:backdrop-blur-sm transition-all duration-500`}>
                        <service.icon className={`w-6 h-6 ${colors.text} group-hover:text-white transition-colors duration-500`} />
                      </div>
                      <h3 className="text-xl font-bold text-navy group-hover:text-white transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-ink/70 group-hover:text-white/90 text-sm mt-3 transition-colors duration-500">
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
                          <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-white/30 space-y-2 transition-colors duration-500">
                            {service.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-sm text-ink/70 group-hover:text-white/80"
                              >
                                <CheckCircle className={`w-4 h-4 ${colors.text} group-hover:text-white mt-0.5 flex-shrink-0 transition-colors duration-500`} />
                                <span>{detail}</span>
                              </motion.div>
                            ))}
                            <Link to="/contact">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`mt-3 w-full py-2 px-4 rounded-lg font-medium text-center
                                          ${colors.text} group-hover:text-white
                                          ${colors.iconBg} group-hover:bg-white/20
                                          transition-all duration-500 flex items-center justify-center gap-2`}
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
                      className="mt-3 text-center"
                    >
                      <ChevronRight className={`w-5 h-5 ${colors.text} group-hover:text-white mx-auto transition-all duration-500`} />
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