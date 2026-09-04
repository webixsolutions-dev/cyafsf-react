// src/components/resources/ResourcesQuickNav.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Video, Link as LinkIcon, Download, Users } from 'lucide-react';

const ResourcesQuickNav = ({ onSelectCategory, activeCategory }) => {
  const quickCards = [
    { id: 'Family', label: 'Family Guides', icon: BookOpen, type: 'Guide' },
    { id: 'Youth', label: 'Youth Toolkits', icon: Heart, type: 'Toolkit' },
    { id: 'Video', label: 'Video Library', icon: Video, type: 'Video Series' },
    { id: 'Community', label: 'Community Links', icon: LinkIcon, type: 'Link' },
    { id: 'Downloads', label: 'Downloads', icon: Download, type: 'Download' },
    { id: 'Directory', label: 'Resource Directory', icon: Users, type: 'Directory' },
  ];

  return (
    <section className="py-8 bg-slate-50/60 border-b border-slate-200/60">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickCards.map((card, index) => {
            const IconComponent = card.icon;
            const isActive = activeCategory === card.id;

            return (
              <motion.button
                key={card.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => onSelectCategory && onSelectCategory(card.id)}
                className={`bg-white rounded-2xl p-5 border transition-all duration-200 flex flex-col items-center justify-center text-center gap-3 cursor-pointer group ${
                  isActive
                    ? 'border-[#0d9488] shadow-md ring-2 ring-[#0d9488]/20'
                    : 'border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#e6f4f1] text-[#0d9488] flex items-center justify-center group-hover:bg-[#0d9488] group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-800 text-sm group-hover:text-[#0d9488] transition-colors">
                  {card.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesQuickNav;
