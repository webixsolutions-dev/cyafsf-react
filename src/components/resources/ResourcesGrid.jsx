// src/components/resources/ResourcesGrid.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import ImagePlaceholder from '../shared/ImagePlaceholder';

const ResourcesGrid = ({ filteredResources = [] }) => {
  // Map resource types to badge styling matching reference image
  const badgeStyleMap = {
    'Guide': { bg: 'bg-[#0d9488]', text: 'text-white' },
    'Toolkit': { bg: 'bg-[#f97316]', text: 'text-white' },
    'Directory': { bg: 'bg-[#eab308]', text: 'text-white' },
    'Video Series': { bg: 'bg-[#f43f5e]', text: 'text-white' },
  };

  return (
    <section className="py-8 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#092e35] tracking-tight">
              Featured Resources
            </h2>
            <div className="w-9 h-1 bg-[#f3b544] rounded-full mt-1.5" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-400">
            {filteredResources.length} resources found
          </span>
        </div>

        {/* Cards Grid - 6 cards horizontally in 1 line on desktop */}
        <AnimatePresence mode="wait">
          {filteredResources.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
            >
              {filteredResources.map((resource, index) => {
                const badgeInfo = badgeStyleMap[resource.type] || { bg: 'bg-[#0d9488]', text: 'text-white' };

                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group"
                  >
                    {/* Top Image Container */}
                    <div className="relative h-32 sm:h-36 w-full overflow-hidden">
                      {resource.image ? (
                        <img 
                          src={resource.image} 
                          alt={resource.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <ImagePlaceholder
                          aspectRatio="aspect-[16/9]"
                          label={`Image for ${resource.title}`}
                          badgeText={resource.type}
                          badgeBg={badgeInfo.bg}
                          className="rounded-t-xl"
                        />
                      )}
                      {/* Badge Tag Overlay on bottom left of image */}
                      <span className={`absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold ${badgeInfo.bg} ${badgeInfo.text} shadow-sm z-10`}>
                        {resource.type}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-3.5 flex flex-col flex-1 justify-between gap-3">
                      <div className="space-y-1.5">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors leading-snug line-clamp-2">
                          {resource.title}
                        </h3>
                        <p className="text-slate-500 text-[11px] sm:text-xs leading-normal line-clamp-3">
                          {resource.description}
                        </p>
                      </div>

                      {/* Bottom Footer Area - 2 stacked lines */}
                      <div className="pt-2.5 border-t border-slate-100 mt-auto flex flex-col gap-2">
                        {/* Line 1: Category Tag */}
                        <div>
                          <span className="inline-block bg-slate-100 text-slate-600 text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                            {resource.category}
                          </span>
                        </div>

                        {/* Line 2: Access Resource Link */}
                        <div>
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-1 text-[#0d9488] font-bold text-[11px] sm:text-xs hover:text-[#0f766e] transition-colors"
                          >
                            <span>Access Resource</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <h3 className="text-base font-bold text-slate-800">No resources found</h3>
              <p className="text-xs text-slate-500 mt-1">Try clearing or changing your filters.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResourcesGrid;