// src/components/events/EventsGrid.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, MapPin, Clock, Users, ArrowRight, 
  ChevronLeft, ChevronRight, Star
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const EventsGrid = ({ filteredEvents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('grid');
  const eventsPerPage = 6;

  const events = filteredEvents || [];
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const currentEvents = events.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-cream">
      <div className="container">
        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                view === 'grid' 
                  ? 'bg-teal text-white shadow-lg shadow-teal/30' 
                  : 'bg-white text-ink/50 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" strokeWidth="2" rx="1" />
                <rect x="14" y="3" width="7" height="7" strokeWidth="2" rx="1" />
                <rect x="3" y="14" width="7" height="7" strokeWidth="2" rx="1" />
                <rect x="14" y="14" width="7" height="7" strokeWidth="2" rx="1" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setView('list')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                view === 'list' 
                  ? 'bg-teal text-white shadow-lg shadow-teal/30' 
                  : 'bg-white text-ink/50 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
                <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
                <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
              </svg>
            </motion.button>
          </div>
          <p className="text-sm text-ink/50">{events.length} events found</p>
        </div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={view + currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-6 ${
              view === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {currentEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                             transition-all duration-300 flex flex-col h-full
                             ${view === 'list' ? 'flex-col md:flex-row' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative ${view === 'list' ? 'md:w-72 md:flex-shrink-0' : 'h-48'}`}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    {event.featured && (
                      <span className="absolute top-3 left-3 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 inline mr-1" />
                        Featured
                      </span>
                    )}
                    <span className="absolute top-3 right-3 bg-teal text-white text-xs font-medium px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                    {event.registered >= event.spots * 0.8 && (
                      <span className="absolute bottom-3 right-3 bg-coral text-white text-xs font-medium px-3 py-1 rounded-full">
                        Almost Full
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`p-6 flex flex-col flex-1 ${view === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-navy hover:text-teal transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-ink/70 text-sm mt-2 line-clamp-2 flex-1">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mt-4 text-sm">
                      <div className="flex items-center gap-2 text-ink/60">
                        <Calendar className="w-4 h-4 text-teal flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-ink/60">
                        <Clock className="w-4 h-4 text-teal flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-ink/60">
                        <MapPin className="w-4 h-4 text-teal flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-ink/60">
                        <Users className="w-4 h-4 text-teal flex-shrink-0" />
                        <span>{event.registered} / {event.spots} registered</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {currentEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Calendar className="w-16 h-16 text-ink/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy">No events found</h3>
            <p className="text-ink/60 mt-2">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-gray-100 text-ink/30 cursor-not-allowed'
                  : 'bg-white text-ink/60 hover:bg-teal hover:text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-teal text-white shadow-lg shadow-teal/30'
                    : 'bg-white text-ink/60 hover:bg-gray-100'
                }`}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-ink/30 cursor-not-allowed'
                  : 'bg-white text-ink/60 hover:bg-teal hover:text-white'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsGrid;