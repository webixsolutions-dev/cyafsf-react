// frontend/src/components/sections/Impact.jsx

import { Link } from 'react-router-dom';
import { FaArrowRight, FaUsers, FaChartLine, FaHands, FaClock } from 'react-icons/fa';

export default function Impact() {
  const impactStats = [
    { number: '5,000+', label: 'Youth Served', source: '2025 Annual Report', icon: <FaUsers className="text-teal-600 text-2xl" /> },
    { number: '95%', label: 'Program Satisfaction', source: '2025 Participant Survey', icon: <FaChartLine className="text-teal-600 text-2xl" /> },
    { number: '200+', label: 'Community Partners', source: '2025 Partnership Data', icon: <FaHands className="text-teal-600 text-2xl" /> },
    { number: '15+', label: 'Years of Service', source: 'Since 2011', icon: <FaClock className="text-teal-600 text-2xl" /> }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-navy">Our Impact</h2>
          <p className="text-gray-600 mt-2">Measurable results making a difference in our community</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-1">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.source}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/impact" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-1">
            View our full impact report <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}