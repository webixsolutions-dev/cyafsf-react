// src/components/news/NewsGrid.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, User, Tag, ArrowRight, 
  Search, Filter, X, Clock, Eye,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const NewsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const articlesPerPage = 6;

  const articles = [
    {
      id: 1,
      title: 'Summer Youth Program Launches with Record Enrollment',
      excerpt: 'Our annual summer program has seen the highest enrollment in history, connecting youth with mentors and skill-building activities.',
      date: 'July 15, 2026',
      author: 'Sarah Johnson',
      category: 'Program',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=400&fit=crop',
      featured: true,
      readTime: '4 min read',
      views: 245,
    },
    {
      id: 2,
      title: 'Community Fundraiser Exceeds Goals',
      excerpt: 'The annual CYAFSF community fundraiser has exceeded all expectations, raising funds to expand family support services.',
      date: 'July 5, 2026',
      author: 'Michael Chen',
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&h=400&fit=crop',
      featured: false,
      readTime: '3 min read',
      views: 189,
    },
    {
      id: 3,
      title: 'New Partnership with Local Schools Announced',
      excerpt: 'CYAFSF is proud to partner with local schools to bring mental health support and resources directly to students.',
      date: 'June 28, 2026',
      author: 'Emily Rodriguez',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=400&fit=crop',
      featured: false,
      readTime: '5 min read',
      views: 312,
    },
    {
      id: 4,
      title: 'Youth Leadership Program Graduates First Cohort',
      excerpt: 'The inaugural youth leadership program celebrates its graduates, marking a milestone in community empowerment.',
      date: 'June 20, 2026',
      author: 'David Kim',
      category: 'Program',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      featured: false,
      readTime: '6 min read',
      views: 156,
    },
    {
      id: 5,
      title: 'Volunteer Spotlight: Meet Our Dedicated Team',
      excerpt: 'Highlighting the incredible volunteers who make CYAFSF programs possible and communities stronger.',
      date: 'June 10, 2026',
      author: 'Sarah Johnson',
      category: 'Volunteer',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=400&fit=crop',
      featured: false,
      readTime: '4 min read',
      views: 278,
    },
    {
      id: 6,
      title: 'Mental Health Awareness Campaign Launched',
      excerpt: 'New campaign aims to reduce stigma and provide resources for youth mental health across communities.',
      date: 'June 5, 2026',
      author: 'Michael Chen',
      category: 'Program',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=400&fit=crop',
      featured: false,
      readTime: '3 min read',
      views: 198,
    },
    {
      id: 7,
      title: 'Family Support Services Expand to New Communities',
      excerpt: 'CYAFSF announces expansion of family support services to three new communities across Ontario.',
      date: 'May 28, 2026',
      author: 'Emily Rodriguez',
      category: 'Family Support',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=400&fit=crop',
      featured: false,
      readTime: '4 min read',
      views: 134,
    },
    {
      id: 8,
      title: 'Annual Gala Celebrates Community Impact',
      excerpt: 'CYAFSF hosts annual gala celebrating achievements and honoring community partners and volunteers.',
      date: 'May 20, 2026',
      author: 'David Kim',
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop',
      featured: false,
      readTime: '5 min read',
      views: 423,
    },
  ];

  const categories = ['all', 'Program', 'Event', 'Partnership', 'Volunteer', 'Family Support'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredArticle = articles.find(a => a.featured);

  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Featured Article */}
        {featuredArticle && (
          <AnimatedSection className="mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-white/80 text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  {featuredArticle.title}
                </h2>
                <p className="text-white/80 mt-2 max-w-2xl">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <span className="text-white/70 text-sm flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}
                  </span>
                  <span className="text-white/50 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeCategory === cat
                    ? 'bg-teal text-white shadow-lg shadow-teal/30'
                    : 'bg-gray-100 text-ink/70 hover:bg-gray-200'
                  }`}
              >
                {cat === 'all' ? 'All Stories' : cat}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg 
                       focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none 
                       transition-all duration-300"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-ink/50">{filteredArticles.length} articles found</p>
        </div>

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery + currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentArticles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                             transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-teal text-white text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm 
                                  text-white text-xs px-2 py-1 rounded-full">
                      <Eye className="w-3 h-3" />
                      {article.views}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-ink/50 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-navy hover:text-teal transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-ink/70 text-sm mt-2 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs text-ink/50 flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {currentArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-ink/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy">No articles found</h3>
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

export default NewsGrid;