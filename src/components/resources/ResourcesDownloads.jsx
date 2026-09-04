// src/components/resources/ResourcesDownloads.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const ResourcesDownloads = () => {
  const downloadsData = [
    {
      id: 1,
      title: 'Parenting Worksheets',
      description: 'Practical worksheets for everyday parenting.',
      colorStyle: {
        bg: 'bg-[#0d9488]/10',
        text: 'text-[#0d9488]',
        border: 'border-[#0d9488]/20',
        badge: 'bg-[#0d9488]',
      },
    },
    {
      id: 2,
      title: 'Self-Care Planner',
      description: 'Plan self-care and build healthy habits.',
      colorStyle: {
        bg: 'bg-[#d97706]/10',
        text: 'text-[#d97706]',
        border: 'border-[#d97706]/20',
        badge: 'bg-[#d97706]',
      },
    },
    {
      id: 3,
      title: 'Youth Goal Setting Worksheet',
      description: 'Help youth set goals and track their progress.',
      colorStyle: {
        bg: 'bg-[#e11d48]/10',
        text: 'text-[#e11d48]',
        border: 'border-[#e11d48]/20',
        badge: 'bg-[#e11d48]',
      },
    },
    {
      id: 4,
      title: 'Community Event Planning Guide',
      description: 'Step-by-step guide to plan successful events.',
      colorStyle: {
        bg: 'bg-[#0d9488]/10',
        text: 'text-[#0d9488]',
        border: 'border-[#0d9488]/20',
        badge: 'bg-[#0d9488]',
      },
    },
  ];

  return (
    <section className="py-10 pb-16 bg-slate-50/50">
      <div className="container">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Downloadable Resources
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
            Free downloadable guides, worksheets, and toolkits to support your family and community.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {downloadsData.map((item, index) => (
            <motion.a
              key={item.id}
              href="#download"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4 group cursor-pointer"
            >
              {/* PDF Icon Box */}
              <div
                className={`w-14 h-14 rounded-2xl ${item.colorStyle.bg} ${item.colorStyle.text} border ${item.colorStyle.border} flex flex-col items-center justify-center shrink-0 space-y-0.5`}
              >
                <FileText className="w-5 h-5" />
                <span className={`text-[9px] font-black text-white ${item.colorStyle.badge} px-1.5 py-0.5 rounded leading-none`}>
                  PDF
                </span>
              </div>

              {/* Text Info */}
              <div className="space-y-0.5">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#0d9488] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesDownloads;
