// src/components/donate/DonateImpact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Users, Award, TrendingUp,
  DollarSign, Clock, Shield, CheckCircle,
  ArrowRight, Gift, Star
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';
import SectionTitle from '../shared/SectionTitle';

const DonateImpact = () => {
  const impactStats = [
    { 
      value: '2,500+', 
      label: 'Youth Served', 
      icon: Users,
      description: 'Young people supported through our programs annually',
      color: 'coral'
    },
    { 
      value: '1,200+', 
      label: 'Families Supported', 
      icon: Heart,
      description: 'Families receiving counselling and support services',
      color: 'teal'
    },
    { 
      value: '15+', 
      label: 'Programs Funded', 
      icon: Gift,
      description: 'Active programs across youth, family, and community',
      color: 'gold'
    },
    { 
      value: '92%', 
      label: 'Program Impact', 
      icon: TrendingUp,
      description: 'Of every dollar goes directly to programs',
      color: 'navy'
    },
  ];

  const transparencyItems = [
    {
      icon: Shield,
      title: '100% Transparent',
      description: 'We share annual reports and financial statements',
    },
    {
      icon: CheckCircle,
      title: 'Tax Deductible',
      description: 'Official receipts provided for all donations',
    },
    {
      icon: Clock,
      title: 'Regular Updates',
      description: 'Quarterly impact reports for all donors',
    },
    {
      icon: Star,
      title: 'Community Trust',
      description: 'Recognized as a trusted community organization',
    },
  ];

  const colorClasses = {
    coral: { bg: 'bg-coral/10', text: 'text-coral', border: 'border-coral/20' },
    teal: { bg: 'bg-teal/10', text: 'text-teal', border: 'border-teal/20' },
    gold: { bg: 'bg-gold/10', text: 'text-gold', border: 'border-gold/20' },
    navy: { bg: 'bg-navy/10', text: 'text-navy', border: 'border-navy/20' },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <SectionTitle
          title="Your impact in action"
          subtitle="See how your donation makes a real difference in communities across Canada."
          tag="Impact"
          centered
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {impactStats.map((stat, index) => {
            const colors = colorClasses[stat.color];
            return (
              <AnimatedSection key={index} delay={index * 0.1} disableHover={true}>
                <motion.div
                  transition={{ duration: 0.3 }}
                  className={`${colors.bg} ${colors.border} rounded-2xl p-6 text-center border-2 
                             transition-all duration-300 hover:shadow-xl`}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <p className="text-3xl font-bold text-navy">{stat.value}</p>
                  <p className="text-sm font-semibold text-ink/70 mt-1">{stat.label}</p>
                  <p className="text-xs text-ink/40 mt-2">{stat.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Transparency Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection disableHover={true}>
              <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider 
                             bg-teal/10 px-4 py-1.5 rounded-full mb-4">
                Transparency
              </span>
              <h2 className="text-3xl font-bold text-navy">
                We believe in
                <br />
                <span className="text-teal">full transparency</span>
              </h2>
              <p className="text-ink/70 text-lg mt-4">
                We are committed to being open and accountable about how your donations 
                are used to create meaningful change.
              </p>

              <div className="space-y-4 mt-6">
                {transparencyItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-cream rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{item.title}</h4>
                      <p className="text-sm text-ink/60">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/20">
                <p className="text-sm text-navy text-center">
                  <span className="font-bold">$0.92</span> of every dollar goes directly to programs and services
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" disableHover={true}>
              <div className="bg-gradient-to-br from-navy to-teal rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-gold" />
                  <h3 className="text-2xl font-bold">Why give to CYAFSF?</h3>
                </div>

                <div className="space-y-4">
                  {[
                    'Direct impact on youth and families',
                    'Transparent and accountable organization',
                    'Proven programs with measurable results',
                    'Community-driven approach',
                    'Tax-deductible donations',
                    'Regular impact updates',
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-white/90"
                    >
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-sm text-center text-white/80">
                    "Every donation helps us support more youth and families"
                  </p>
                  <p className="text-xs text-white/50 text-center mt-1">
                    — CYAFSF Team
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateImpact;