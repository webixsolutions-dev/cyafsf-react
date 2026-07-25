// src/pages/Events.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EventsHero from '../components/events/EventsHero';
import EventsFilter from '../components/events/EventsFilter';
import EventsGrid from '../components/events/EventsGrid';
import EventsCTA from '../components/events/EventsCTA';

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);

  const eventsData = [
    {
      id: 1,
      title: 'Summer Youth Leadership Workshop',
      date: 'August 15, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Community Center, Ottawa',
      type: 'Workshop',
      category: 'Youth',
      description: 'Empowering young leaders with skills in communication, teamwork, and community engagement.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=400&fit=crop',
      spots: 25,
      registered: 18,
      featured: true,
    },
    {
      id: 2,
      title: 'Family Fun Day',
      date: 'August 22, 2026',
      time: '11:00 AM - 3:00 PM',
      location: 'Central Park, Toronto',
      type: 'Community',
      category: 'Family',
      description: 'A day of games, activities, and connection for families of all sizes and ages.',
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&h=400&fit=crop',
      spots: 100,
      registered: 72,
      featured: false,
    },
    {
      id: 3,
      title: 'Parenting in the Digital Age',
      date: 'September 5, 2026',
      time: '7:00 PM - 8:30 PM',
      location: 'Virtual (Zoom)',
      type: 'Webinar',
      category: 'Family',
      description: 'Expert guidance on navigating technology, social media, and screen time with children.',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=400&fit=crop',
      spots: 50,
      registered: 35,
      featured: false,
    },
    {
      id: 4,
      title: 'Community Volunteer Fair',
      date: 'September 12, 2026',
      time: '1:00 PM - 5:00 PM',
      location: 'Community Hall, Vancouver',
      type: 'Fair',
      category: 'Community',
      description: 'Connect with local organizations and discover volunteer opportunities in your community.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      spots: 200,
      registered: 145,
      featured: true,
    },
    {
      id: 5,
      title: 'Mental Health First Aid Training',
      date: 'September 19-20, 2026',
      time: '9:00 AM - 5:00 PM',
      location: 'Wellness Center, Calgary',
      type: 'Training',
      category: 'Youth',
      description: 'Certified training in mental health first aid for youth and young adults.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop',
      spots: 20,
      registered: 12,
      featured: false,
    },
    {
      id: 6,
      title: 'Annual Community Gala',
      date: 'October 10, 2026',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Ballroom, Montreal',
      type: 'Community',
      category: 'Community',
      description: 'Celebrating community achievements and raising funds for youth programs.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop',
      spots: 150,
      registered: 98,
      featured: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <EventsHero />
      <EventsFilter
        events={eventsData}
        onFilteredEvents={setFilteredEvents}
      />
      <EventsGrid filteredEvents={filteredEvents.length > 0 ? filteredEvents : eventsData} />
      <EventsCTA />
    </motion.div>
  );
};

export default Events;