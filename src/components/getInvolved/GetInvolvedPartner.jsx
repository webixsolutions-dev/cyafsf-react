// src/components/getInvolved/GetInvolvedDonate.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DollarSign, Heart, Gift, Shield,
  CheckCircle, ArrowRight, Award,
  TrendingUp, Users, Clock, Star
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const GetInvolvedDonate = () => {
  const benefits = [
    'Directly support programs and services',
    'Tax-deductible donations',
    'Monthly giving options available',
    'Transparent reporting on impact',
    'Choose where your donation goes',
    'Receive regular impact updates',
  ];

  const donationImpact = [
    { icon: Users, label: 'Youth Served', value: '2,500+' },
    { icon: Heart, label: 'Families Supported', value: '1,200+' },
    { icon: Award, label: 'Programs Funded', value: '15+' },
    { icon: TrendingUp, label: 'Community Impact', value: '92%' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - No hover effects */}
          <AnimatedSection disableHover={true}>
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider 
                           bg-gold/10 px-4 py-1.5 rounded-full mb-4">
              Donate
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Your gift makes
              <br />
              <span className="text-gold">a difference</span>
            </h2>
            <p className="text-ink/70 text-lg mt-4">
              Support youth, families, and communities across Canada with a 
              donation that creates lasting change.
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
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-gold text-navy font-semibold 
                           rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/30"
              >
                <Heart className="w-5 h-5" />
                Donate Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            <div className="mt-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-xs text-ink/50">Secure payment • Tax receipt provided</span>
            </div>
          </AnimatedSection>

          {/* Right Column - With hover effects */}
          <AnimatedSection direction="right">
            <div className="bg-cream rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-8 h-8 text-gold" />
                <h3 className="text-2xl font-bold text-navy">Your Impact</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {donationImpact.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                    className="bg-white rounded-xl p-4 text-center shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    <item.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                    <p className="text-xl font-bold text-navy">{item.value}</p>
                    <p className="text-xs text-ink/50">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-sm font-medium text-navy">Monthly Giving</p>
                    <p className="text-xs text-ink/50">Sustainable support for ongoing programs</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-teal/10 rounded-xl border border-teal/20">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-teal" />
                  <div>
                    <p className="text-sm font-medium text-navy">$0.92 of every dollar</p>
                    <p className="text-xs text-ink/50">Goes directly to programs and services</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-ink/40">
                  Charitable Registration #: 12345-6789
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedDonate;