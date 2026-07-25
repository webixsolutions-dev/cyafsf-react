// src/components/resources/ResourcesGrid.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, FileText, Video, Link as LinkIcon, 
  Download, ArrowRight, ChevronLeft, ChevronRight,
  Heart, Users, Shield, Clock
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const ResourcesGrid = ({ filteredResources }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 6;

  const resources = filteredResources || [];

  const iconMap = {
    'BookOpen': BookOpen,
    'Heart': Heart,
    'Users': Users,
    'Shield': Shield,
    'Video': Video,
    'Link': LinkIcon,
    'FileText': FileText,
    'Clock': Clock,
  };

  const totalPages = Math.ceil(resources.length / resourcesPerPage);
  const currentResources = resources.slice(
    (currentPage - 1) * resourcesPerPage,
    currentPage * resourcesPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const colorClasses = {
    coral: { bg: 'bg-coral/10', text: 'text-coral', hover: 'hover:border-coral' },
    teal: { bg: 'bg-teal/10', text: 'text-teal', hover: 'hover:border-teal' },
    gold: { bg: 'bg-gold/10', text: 'text-gold', hover: 'hover:border-gold' },
    navy: { bg: 'bg-navy/10', text: 'text-navy', hover: 'hover:border-navy' },
  };

  return (
    <section className="py-16 bg-cream">
      <div className="container">
        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-ink/50">{resources.length} resources found</p>
        </div>

        {/* Resources Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentResources.map((resource, index) => {
              const colors = colorClasses[resource.color] || colorClasses.teal;
              const IconComponent = iconMap[resource.icon] || BookOpen;

              return (
                <AnimatedSection key={resource.id} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                               transition-all duration-300 border-2 border-transparent ${colors.hover}`}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <span className={`text-xs font-medium ${colors.text} ${colors.bg} px-3 py-1 rounded-full`}>
                          {resource.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-navy mt-4 hover:text-teal transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-ink/70 text-sm mt-2 line-clamp-2">{resource.description}</p>
                      
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                        <span className="text-xs font-medium text-ink/50 bg-gray-100 px-3 py-1 rounded-full">
                          {resource.category}
                        </span>
                        <span className="text-xs font-medium text-ink/50 flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {resource.downloads}
                        </span>
                        {resource.download && (
                          <span className="text-xs font-medium text-teal bg-teal/10 px-3 py-1 rounded-full flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            Download
                          </span>
                        )}
                      </div>

                      <Link to={`/resources/${resource.id}`} className="inline-flex items-center gap-2 mt-4 text-teal font-medium hover:gap-3 transition-all">
                        <span>Access Resource</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {currentResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <BookOpen className="w-16 h-16 text-ink/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy">No resources found</h3>
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

export default ResourcesGrid;