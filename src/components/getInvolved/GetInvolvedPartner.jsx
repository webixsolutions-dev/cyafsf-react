// src/components/getInvolved/GetInvolvedPartner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, GraduationCap, BookOpen, Heart, 
  Briefcase, Handshake, Leaf, ArrowRight
} from 'lucide-react';

const GetInvolvedPartner = () => {
  const partnersRow1 = [
    { title: 'Schools', icon: GraduationCap },
    { title: 'Universities', icon: BookOpen },
    { title: 'Community Organizations', icon: Users },
    { title: 'Healthcare Providers', icon: Heart },
  ];

  const partnersRow2 = [
    { title: 'Local Businesses', icon: Briefcase },
    { title: 'Social Service Organizations', icon: Handshake },
    { title: 'Indigenous and Cultural Community Groups', icon: Leaf },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F2F7F9] text-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Top Header & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left Column Content */}
          <div className="lg:col-span-6">
            {/* Category Tag */}
            <div className="flex items-center gap-2 text-[#14857E] font-bold text-xs uppercase tracking-wider mb-3">
              <Users className="w-4 h-4" />
              <span>PARTNER WITH US</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#082330] leading-tight">
              Stronger together
              <br />
              <span className="text-[#14857E]">for lasting impact</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed max-w-xl">
              We collaborate with organizations and businesses to expand our reach, share resources, and create more opportunities for youth and families.
            </p>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-lg h-[260px] md:h-[300px]">
              <img 
                src="/getinvolved/03_partner_with_us.webp" 
                alt="Business professionals collaborating around table" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>

        {/* 7 Partner Categories Grid */}
        <div className="space-y-4 mt-8">
          
          {/* Row 1: 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnersRow1.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100/80 shadow-sm rounded-2xl px-5 py-4 flex items-center gap-3.5 font-extrabold text-[#082330] text-sm"
              >
                <item.icon className="w-5 h-5 text-[#14857E] flex-shrink-0" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          {/* Row 2: 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnersRow2.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100/80 shadow-sm rounded-2xl px-5 py-4 flex items-center gap-3.5 font-extrabold text-[#082330] text-sm"
              >
                <item.icon className="w-5 h-5 text-[#14857E] flex-shrink-0" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#107B75] hover:bg-[#0D6863] text-white font-bold rounded-full px-8 py-3.5 flex items-center gap-3 shadow-lg shadow-teal-200 transition-all text-base"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Handshake className="w-4 h-4 text-white" />
              </div>
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GetInvolvedPartner;