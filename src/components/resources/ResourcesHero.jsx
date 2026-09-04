// src/components/resources/ResourcesHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Link as LinkIcon, Download, Users } from 'lucide-react';

const ResourcesHero = ({ onQuickSelect }) => {
  const quickLinks = [
    { id: 'Guide', icon: BookOpen, label: 'Guides' },
    { id: 'Toolkit', icon: FileText, label: 'Toolkits' },
    { id: 'Video', icon: Video, label: 'Videos' },
    { id: 'Link', icon: LinkIcon, label: 'Links' },
    { id: 'Download', icon: Download, label: 'Downloads' },
    { id: 'Directory', icon: Users, label: 'Directory' },
  ];

  return (
    <section className="relative bg-[#0a353d] text-white overflow-hidden py-10 lg:py-14 min-h-[380px] md:min-h-[420px] flex items-center">
      
      {/* Right Side Image - Placed strictly on the right half/corner with NO overlay on the image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
        <img
          src="/heroresource.webp"
          alt="Family using tablet together"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft edge seam transition at the left border of image only */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a353d] to-transparent hidden lg:block" />
        {/* Mobile Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a353d] via-[#0a353d]/70 to-transparent lg:hidden" />
      </div>

      {/* Solid bluish background covering left half till center on desktop */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-[#0a353d] z-0 hidden lg:block" />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-xl lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Top Pill Badge */}
            <div>
              <span className="inline-block text-[#f3b544] font-bold text-[11px] uppercase tracking-wider bg-[#f3b544]/10 border border-[#f3b544]/40 px-3 py-0.5 rounded-full">
                RESOURCES
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Find the resources <br />
              <span className="text-[#38bdf8]">you need</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base max-w-lg font-normal leading-relaxed">
              Practical guides, toolkits, and resources to support youth, families, and communities.
            </p>

            {/* Quick Links Horizontal Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {quickLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => onQuickSelect && onQuickSelect(item.id)}
                    className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#38bdf8] text-xs sm:text-sm font-medium transition-colors group cursor-pointer"
                  >
                    <IconComponent className="w-4 h-4 text-[#f3b544] group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;