// frontend/src/pages/Programs.jsx

import { useState } from 'react';
import { 
  FaUserGraduate, 
  FaHome, 
  FaBookOpen, 
  FaHeartbeat, 
  FaUsers, 
  FaChalkboardTeacher,
  FaChild,
  FaHands,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';
import { GiFamilyHouse, GiSchoolBag, GiHeartWings } from 'react-icons/gi';
import { MdHealthAndSafety, MdPeople, MdSchool } from 'react-icons/md';
import ProgramsHero from '../components/programs/ProgramsHero.jsx';
import ProgramsFilter from '../components/programs/ProgramsFilter.jsx';
import ProgramsGrid from '../components/programs/ProgramsGrid.jsx';
import ProgramsCTA from '../components/programs/ProgramsCTA.jsx';

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Program data with React Icons
  const allPrograms = [
    {
      id: 1,
      title: 'Youth Mentorship Program',
      description: 'One-on-one mentoring that builds confidence, develops skills, and creates lasting connections for young people aged 12-24.',
      category: 'Youth',
      audience: 'Youth aged 12-24',
      duration: '6-12 months',
      location: 'In-person & Virtual',
      eligibility: 'Open to all youth',
      link: '/programs/youth-mentorship',
      featured: true,
      icon: <FaUserGraduate className="text-3xl text-teal-600" />,
      iconBg: 'from-teal-100 to-teal-200'
    },
    {
      id: 2,
      title: 'Family Support Services',
      description: 'Practical support for families including counseling, resource navigation, and parent education workshops.',
      category: 'Family',
      audience: 'Parents & Caregivers',
      duration: 'Ongoing',
      location: 'In-person & Virtual',
      eligibility: 'Families in need',
      link: '/family-support',
      featured: true,
      icon: <GiFamilyHouse className="text-3xl text-teal-600" />,
      iconBg: 'from-teal-100 to-teal-200'
    },
    {
      id: 3,
      title: 'Skills Development Program',
      description: 'Job readiness training, life skills workshops, and career exploration programs for youth and young adults.',
      category: 'Skills',
      audience: 'Youth & Young Adults',
      duration: '3-6 months',
      location: 'In-person & Virtual',
      eligibility: 'Open to all',
      link: '/programs/skills-development',
      featured: true,
      icon: <GiSchoolBag className="text-3xl text-teal-600" />,
      iconBg: 'from-teal-100 to-teal-200'
    },
    {
      id: 4,
      title: 'Mental Health Support',
      description: 'Accessible mental health support and counseling services for youth and families in our community.',
      category: 'Health',
      audience: 'Youth & Families',
      duration: 'Ongoing',
      location: 'Virtual',
      eligibility: 'No cost to participants',
      link: '/programs/mental-health',
      featured: false,
      icon: <FaHeartbeat className="text-3xl text-coral" />,
      iconBg: 'from-coral-100 to-coral-200'
    },
    {
      id: 5,
      title: 'Community Connection Program',
      description: 'Building community through group activities, social events, and peer support networks.',
      category: 'Community',
      audience: 'All Ages',
      duration: 'Ongoing',
      location: 'In-person',
      eligibility: 'Open to everyone',
      link: '/programs/community-connection',
      featured: false,
      icon: <FaUsers className="text-3xl text-navy" />,
      iconBg: 'from-navy-100 to-navy-200'
    },
    {
      id: 6,
      title: 'Parent Education Workshops',
      description: 'Educational workshops for parents covering child development, communication strategies, and family wellbeing.',
      category: 'Family',
      audience: 'Parents',
      duration: '4-6 weeks',
      location: 'In-person & Virtual',
      eligibility: 'Free for all parents',
      link: '/programs/parent-education',
      featured: false,
      icon: <FaChalkboardTeacher className="text-3xl text-gold" />,
      iconBg: 'from-gold-100 to-gold-200'
    },
    {
      id: 7,
      title: 'Youth Leadership Program',
      description: 'Develop leadership skills, civic engagement, and community advocacy for young leaders aged 16-25.',
      category: 'Youth',
      audience: 'Youth aged 16-25',
      duration: '8-12 months',
      location: 'In-person',
      eligibility: 'Application required',
      link: '/programs/youth-leadership',
      featured: false,
      icon: <FaChild className="text-3xl text-teal-600" />,
      iconBg: 'from-teal-100 to-teal-200'
    },
    {
      id: 8,
      title: 'Crisis Support Services',
      description: 'Immediate support and resources for families and youth experiencing crisis situations.',
      category: 'Health',
      audience: 'Youth & Families',
      duration: 'Immediate/Short-term',
      location: 'Virtual & In-person',
      eligibility: 'Open to all',
      link: '/programs/crisis-support',
      featured: false,
      icon: <FaHands className="text-3xl text-coral" />,
      iconBg: 'from-coral-100 to-coral-200'
    },
    {
      id: 9,
      title: 'Financial Literacy Program',
      description: 'Learn essential financial skills including budgeting, saving, and planning for the future.',
      category: 'Skills',
      audience: 'Youth & Young Adults',
      duration: '6 weeks',
      location: 'Virtual',
      eligibility: 'Free for participants',
      link: '/programs/financial-literacy',
      featured: false,
      icon: <MdSchool className="text-3xl text-gold" />,
      iconBg: 'from-gold-100 to-gold-200'
    }
  ];

  const categories = ['All', 'Youth', 'Family', 'Skills', 'Health', 'Community'];

  const filteredPrograms = activeCategory === 'All'
    ? allPrograms
    : allPrograms.filter(p => p.category === activeCategory);

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <ProgramsHero />
      <ProgramsFilter 
        categories={categories} 
        onFilterChange={handleFilterChange}
        activeCategory={activeCategory}
      />
      <ProgramsGrid programs={filteredPrograms} />
      <ProgramsCTA />
    </>
  );
}