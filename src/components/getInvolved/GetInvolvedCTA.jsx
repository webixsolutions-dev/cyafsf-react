// src/components/getInvolved/GetInvolvedCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, PieChart, BarChart3, Landmark, Users, Heart 
} from 'lucide-react';

const GetInvolvedCTA = () => {
  const trustItems = [
    {
      title: 'Annual Reports',
      icon: FileText,
    },
    {
      title: 'Financial Summaries',
      icon: PieChart,
    },
    {
      title: 'Program Outcomes',
      icon: BarChart3,
    },
    {
      title: 'Governance Information',
      icon: Landmark,
    },
    {
      title: 'Board Members',
      icon: Users,
    },
    {
      title: 'Donation Impact Reports',
      icon: Heart,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F2F7F9] text-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#082330]">
            Trust & Transparency
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-3">
            We are committed to accountability and stewardship in everything we do.
          </p>
        </div>

        {/* 6 White Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-3 h-36 cursor-pointer"
            >
              <item.icon className="w-8 h-8 text-[#14857E]" />
              <h3 className="font-extrabold text-[#082330] text-sm leading-tight">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetInvolvedCTA;