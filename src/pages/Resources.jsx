// src/pages/Resources.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ResourcesHero from '../components/resources/ResourcesHero';
import ResourcesQuickNav from '../components/resources/ResourcesQuickNav';
import ResourcesCategories from '../components/resources/ResourcesCategories';
import ResourcesGrid from '../components/resources/ResourcesGrid';
import ResourcesVideoLibrary from '../components/resources/ResourcesVideoLibrary';
import ResourcesDownloads from '../components/resources/ResourcesDownloads';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allResources = [
    {
      id: 1,
      title: 'Parenting Through Challenging Times',
      type: 'Guide',
      category: 'Family',
      description: 'Practical strategies for parents navigating difficult periods with their children.',
      image: '/resources/parenting_through_challenging_times.webp',
    },
    {
      id: 2,
      title: 'Youth Mental Health Toolkit',
      type: 'Toolkit',
      category: 'Youth',
      description: 'Resources and exercises to support youth mental health and wellbeing.',
      image: '/resources/youth_mental_health_toolkit.webp',
    },
    {
      id: 3,
      title: 'Community Resource Directory',
      type: 'Directory',
      category: 'Community',
      description: 'A comprehensive list of community services and support available in your area.',
      image: '/resources/community_resource_directory.webp',
    },
    {
      id: 4,
      title: 'Building Resilient Families',
      type: 'Guide',
      category: 'Family',
      description: 'Strategies for building resilience and strength in family relationships.',
      image: '/resources/building_resilient_families.webp',
    },
    {
      id: 5,
      title: 'Youth Transition to Adulthood',
      type: 'Video Series',
      category: 'Youth',
      description: 'Video series helping youth navigate the transition to adulthood with confidence.',
      image: '/resources/youth_transition_to_adulthood.webp',
    },
    {
      id: 6,
      title: 'Community Engagement Guide',
      type: 'Guide',
      category: 'Community',
      description: 'How to get involved and make a difference in your community.',
      image: '/resources/community_engagement_guide.webp',
    },
  ];

  // Filtering Logic
  const filteredResources = useMemo(() => {
    return allResources.filter((item) => {
      // Category filter
      if (activeCategory !== 'all') {
        // Quick nav mappings or direct category
        if (activeCategory === 'Family' && item.category !== 'Family') return false;
        if (activeCategory === 'Youth' && item.category !== 'Youth') return false;
        if (activeCategory === 'Community' && item.category !== 'Community') return false;
        if (activeCategory === 'Video' && item.type !== 'Video Series') return false;
        if (activeCategory === 'Downloads' && item.type !== 'Guide' && item.type !== 'Toolkit') return false;
        if (activeCategory === 'Directory' && item.type !== 'Directory') return false;
      }

      // Type filter
      if (activeType !== 'all') {
        if (item.type !== activeType) return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesType = item.type.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCategory && !matchesType) return false;
      }

      return true;
    });
  }, [activeCategory, activeType, searchQuery]);

  const handleQuickSelect = (typeOrCat) => {
    if (['Family', 'Youth', 'Community', 'Video', 'Downloads', 'Directory'].includes(typeOrCat)) {
      setActiveCategory(typeOrCat);
    } else if (['Guide', 'Toolkit', 'Video', 'Link', 'Download', 'Directory'].includes(typeOrCat)) {
      if (typeOrCat === 'Guide') setActiveType('Guide');
      else if (typeOrCat === 'Toolkit') setActiveType('Toolkit');
      else if (typeOrCat === 'Video') setActiveType('Video Series');
      else if (typeOrCat === 'Directory') setActiveType('Directory');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white min-h-screen"
    >
      {/* 1. Hero Section */}
      <ResourcesHero onQuickSelect={handleQuickSelect} />

      {/* 2. Top Quick Nav (6 Cards) */}
      <ResourcesQuickNav
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* 3. Filter Bar & Search */}
      <ResourcesCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeType={activeType}
        setActiveType={setActiveType}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 4. Featured Resources Grid */}
      <ResourcesGrid filteredResources={filteredResources} />

      {/* 5. Video Library Section */}
      <ResourcesVideoLibrary />

      {/* 6. Downloadable Resources Section */}
      <ResourcesDownloads />
    </motion.div>
  );
};

export default Resources;