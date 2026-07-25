// src/components/getInvolved/GetInvolvedVolunteer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Hand, Clock, Users, Heart, 
  CheckCircle, ArrowRight, Calendar,
  Award, Star, MessageCircle
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const GetInvolvedVolunteer = () => {
  const volunteerRoles = [
    'Youth Mentor',
    'Event Support',
    'Administrative Assistant',
    'Social Media Volunteer',
    'Program Facilitator',
    'Community Outreach',
  ];

  const benefits = [
    'Make a meaningful difference in your community',
    'Build new skills and gain valuable experience',
    'Connect with like-minded people',
    'Flexible opportunities to fit your schedule',
    'Receive training and ongoing support',
    'Be part of a caring community',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - No hover effects */}
          <AnimatedSection disableHover={true}>
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider 
                           bg-coral/10 px-4 py-1.5 rounded-full mb-4">
              Volunteer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Give your time,
              <br />
              <span className="text-coral">make a difference</span>
            </h2>
            <p className="text-ink/70 text-lg mt-4">
              Join our team of dedicated volunteers who support youth, families, 
              and communities across Canada.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mt-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 text-ink/70"
                >
                  <CheckCircle className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-coral text-white font-semibold 
                           rounded-lg hover:bg-coral/90 transition-all duration-300 shadow-lg shadow-coral/30"
              >
                <Hand className="w-5 h-5" />
                Become a Volunteer
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </AnimatedSection>

          {/* Right Column - With hover effects */}
          <AnimatedSection direction="right">
            <div className="bg-cream rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-coral" />
                <h3 className="text-2xl font-bold text-navy">Volunteer Roles</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {volunteerRoles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                    className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm 
                               transition-all duration-300 cursor-pointer"
                  >
                    <Star className="w-4 h-4 text-gold" />
                    <span className="text-sm text-ink/70">{role}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-coral/10 rounded-xl border border-coral/20">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-coral" />
                  <div>
                    <p className="text-sm font-medium text-navy">Flexible Hours</p>
                    <p className="text-xs text-ink/50">Weekdays, evenings & weekends available</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gold/10 rounded-xl border border-gold/20">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-sm font-medium text-navy">Recognition Program</p>
                    <p className="text-xs text-ink/50">Volunteer appreciation and certificates</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedVolunteer;