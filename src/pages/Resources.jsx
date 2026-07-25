// src/pages/Resources.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResourcesHero from '../components/resources/ResourcesHero';
import ResourcesCategories from '../components/resources/ResourcesCategories';
import ResourcesGrid from '../components/resources/ResourcesGrid';
import ResourcesCTA from '../components/resources/ResourcesCTA';

const Resources = () => {
  const [filteredResources, setFilteredResources] = useState([]);

  const resourcesData = [
    {
      id: 1,
      title: 'Parenting Through Challenging Times',
      type: 'Guide',
      category: 'Family',
      description: 'Practical strategies for parents navigating difficult periods with their children.',
      icon: 'BookOpen',
      download: true,
      downloads: 245,
      color: 'coral',
    },
    {
      id: 2,
      title: 'Youth Mental Health Toolkit',
      type: 'Toolkit',
      category: 'Youth',
      description: 'Resources and exercises to support youth mental health and wellbeing.',
      icon: 'Heart',
      download: true,
      downloads: 189,
      color: 'teal',
    },
    {
      id: 3,
      title: 'Community Resource Directory',
      type: 'Directory',
      category: 'Community',
      description: 'A comprehensive list of community services and support available in your area.',
      icon: 'Users',
      download: false,
      downloads: 312,
      color: 'gold',
    },
    {
      id: 4,
      title: 'Building Resilient Families',
      type: 'Guide',
      category: 'Family',
      description: 'Strategies for building resilience and strength in family relationships.',
      icon: 'Shield',
      download: true,
      downloads: 156,
      color: 'navy',
    },
    {
      id: 5,
      title: 'Youth Transition to Adulthood',
      type: 'Video Series',
      category: 'Youth',
      description: 'Video series helping youth navigate the transition to adulthood with confidence.',
      icon: 'Video',
      download: false,
      downloads: 423,
      color: 'coral',
    },
    {
      id: 6,
      title: 'Community Engagement Guide',
      type: 'Guide',
      category: 'Community',
      description: 'How to get involved and make a difference in your community.',
      icon: 'Link',
      download: true,
      downloads: 278,
      color: 'teal',
    },
    {
      id: 7,
      title: 'Digital Safety for Families',
      type: 'Toolkit',
      category: 'Family',
      description: 'Essential tools and tips for keeping your family safe online.',
      icon: 'Shield',
      download: true,
      downloads: 198,
      color: 'gold',
    },
    {
      id: 8,
      title: 'Youth Leadership Guide',
      type: 'Guide',
      category: 'Youth',
      description: 'Develop leadership skills and make a positive impact in your community.',
      icon: 'BookOpen',
      download: true,
      downloads: 134,
      color: 'navy',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ResourcesHero />
      <ResourcesCategories 
        resources={resourcesData}
        onFilteredResources={setFilteredResources}
      />
      <ResourcesGrid filteredResources={filteredResources.length > 0 ? filteredResources : resourcesData} />
      <ResourcesCTA />
    </motion.div>
  );
};

export default Resources;