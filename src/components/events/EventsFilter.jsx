// src/components/events/EventsFilter.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Calendar, X } from 'lucide-react';

const EventsFilter = ({ events, onFilteredEvents }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['all', 'Youth', 'Family', 'Community'];
  const types = ['Workshop', 'Community', 'Webinar', 'Fair', 'Training'];

  // Memoize filtered events to prevent unnecessary recalculations
  const filteredEvents = useMemo(() => {
    let filtered = events;

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(event => 
        event.category.toLowerCase() === activeFilter.toLowerCase() ||
        event.type.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeFilter, searchQuery, events]);

  // Use useEffect with a ref to prevent infinite loop
  const prevFilteredRef = React.useRef([]);
  
  useEffect(() => {
    // Only call onFilteredEvents if the filtered events have actually changed
    const currentFiltered = JSON.stringify(filteredEvents);
    const prevFiltered = JSON.stringify(prevFilteredRef.current);
    
    if (currentFiltered !== prevFiltered) {
      prevFilteredRef.current = filteredEvents;
      onFilteredEvents?.(filteredEvents);
    }
  }, [filteredEvents, onFilteredEvents]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section className="py-6 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
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
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterClick(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeFilter === cat
                    ? 'bg-teal text-white shadow-lg shadow-teal/30'
                    : 'bg-gray-100 text-ink/70 hover:bg-gray-200'
                  }`}
              >
                {cat === 'all' ? 'All Events' : cat}
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
                placeholder="Search events..."
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
              {types.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFilterClick(type.toLowerCase())}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300
                    ${activeFilter === type.toLowerCase()
                      ? 'bg-teal/10 text-teal border border-teal/30'
                      : 'bg-gray-50 text-ink/50 hover:bg-gray-100 border border-transparent'
                    }`}
                >
                  {type}
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
                {types.map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleFilterClick(type.toLowerCase());
                      setIsFilterOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300
                      ${activeFilter === type.toLowerCase()
                        ? 'bg-teal text-white shadow-lg shadow-teal/30'
                        : 'bg-white text-ink/50 hover:bg-gray-100'
                      }`}
                  >
                    {type}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventsFilter;