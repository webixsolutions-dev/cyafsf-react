// src/components/resources/ResourcesCategories.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Search, LayoutGrid, BookOpen, FileText, Link as LinkIcon } from 'lucide-react';

const ResourcesCategories = ({
  activeCategory,
  setActiveCategory,
  activeType,
  setActiveType,
  searchQuery,
  setSearchQuery,
}) => {
  const categoryFilters = [
    { id: 'all', label: 'All Resources', icon: LayoutGrid },
    { id: 'Family', label: 'Family', icon: BookOpen },
    { id: 'Youth', label: 'Youth', icon: FileText },
    { id: 'Community', label: 'Community', icon: LinkIcon },
  ];

  const typeFilters = [
    { id: 'all', label: 'All Types' },
    { id: 'Guide', label: 'Guides' },
    { id: 'Toolkit', label: 'Toolkits' },
    { id: 'Video Series', label: 'Videos' },
    { id: 'Directory', label: 'Directories' },
  ];

  return (
    <div className="py-4 bg-white border-b border-slate-200/60 overflow-x-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-4 flex-nowrap min-w-max lg:min-w-0">
          
          {/* Left Category Pills (Single horizontal row) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {categoryFilters.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0f766e] text-white shadow-sm'
                      : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Middle Search Input */}
          <div className="relative w-full lg:w-56 xl:w-64 shrink">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 transition-all"
            />
          </div>

          {/* Right Type Filter Pills (Single horizontal row) */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {typeFilters.map((type) => {
              const isActive = activeType === type.id;

              return (
                <button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#d1fae5] text-[#065f46] border border-[#a7f3d0]'
                      : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 border border-transparent'
                  }`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResourcesCategories;