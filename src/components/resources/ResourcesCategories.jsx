// src/components/resources/ResourcesCategories.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, BookOpen, FileText, Video, Link as LinkIcon } from 'lucide-react';

const ResourcesCategories = ({ resources, onFilteredResources }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'Family', label: 'Family', icon: BookOpen },
    { id: 'Youth', label: 'Youth', icon: FileText },
    { id: 'Community', label: 'Community', icon: LinkIcon },
  ];

  const resourceTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'Guide', label: 'Guides' },
    { id: 'Toolkit', label: 'Toolkits' },
    { id: 'Video Series', label: 'Videos' },
    { id: 'Directory', label: 'Directories' },
  ];

  // Memoize filtered resources
  const filteredResources = useMemo(() => {
    let filtered = resources;

    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(resource => 
        resource.category === activeCategory
      );
    }

    // Apply type filter
    if (activeType !== 'all') {
      filtered = filtered.filter(resource => 
        resource.type === activeType
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, activeType, searchQuery, resources]);

  // Use ref to prevent infinite loop
  const prevFilteredRef = useRef([]);

  useEffect(() => {
    const currentFiltered = JSON.stringify(filteredResources);
    const prevFiltered = JSON.stringify(prevFilteredRef.current);
    
    if (currentFiltered !== prevFiltered) {
      prevFilteredRef.current = filteredResources;
      onFilteredResources?.(filteredResources);
    }
  }, [filteredResources, onFilteredResources]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleTypeClick = (type) => {
    setActiveType(type);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const clearAllFilters = () => {
    setActiveCategory('all');
    setActiveType('all');
    setSearchQuery('');
  };

  const hasActiveFilters = activeCategory !== 'all' || activeType !== 'all' || searchQuery !== '';

  return (
    <section className="py-6 bg-white border-b border-gray-100">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeCategory === cat.id
                    ? 'bg-teal text-white shadow-lg shadow-teal/30'
                    : 'bg-gray-100 text-ink/70 hover:bg-gray-200'
                  }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Search & Filter */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-3 w-full lg:w-auto"
          >
            {/* Search Bar */}
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg 
                         focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none 
                         transition-all duration-300"
              />
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 
                           hover:text-ink/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden p-2 border border-gray-200 rounded-lg hover:border-teal 
                         transition-colors duration-300"
            >
              <Filter className="w-5 h-5 text-ink/60" />
            </motion.button>

            {/* Type Filters - Desktop */}
            <div className="hidden lg:flex gap-2">
              {resourceTypes.map((type) => (
                <motion.button
                  key={type.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTypeClick(type.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300
                    ${activeType === type.id
                      ? 'bg-teal/10 text-teal border border-teal/30'
                      : 'bg-gray-50 text-ink/50 hover:bg-gray-100 border border-transparent'
                    }`}
                >
                  {type.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Filter Dropdown */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-xl">
                {resourceTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleTypeClick(type.id);
                      setIsFilterOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300
                      ${activeType === type.id
                        ? 'bg-teal text-white shadow-lg shadow-teal/30'
                        : 'bg-white text-ink/50 hover:bg-gray-100'
                      }`}
                  >
                    {type.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex flex-wrap items-center gap-2"
          >
            <span className="text-sm text-ink/50">Active filters:</span>
            
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal/10 text-teal text-sm rounded-full">
                {categories.find(c => c.id === activeCategory)?.label}
                <button onClick={() => setActiveCategory('all')} className="ml-1 hover:text-coral">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {activeType !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal/10 text-teal text-sm rounded-full">
                {resourceTypes.find(t => t.id === activeType)?.label}
                <button onClick={() => setActiveType('all')} className="ml-1 hover:text-coral">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal/10 text-teal text-sm rounded-full">
                "{searchQuery}"
                <button onClick={clearSearch} className="ml-1 hover:text-coral">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={clearAllFilters}
              className="text-sm text-ink/50 hover:text-coral transition-colors ml-2"
            >
              Clear all
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ResourcesCategories;