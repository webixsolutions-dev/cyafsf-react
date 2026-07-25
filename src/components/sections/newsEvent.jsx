// frontend/src/components/sections/NewsEvents.jsx

import { Link } from 'react-router-dom';
import { FaArrowRight, FaNewspaper, FaCalendarAlt } from 'react-icons/fa';

export default function NewsEvents() {
  const newsItems = [
    {
      id: 1,
      title: 'New Youth Mental Health Initiative Launches',
      type: 'News',
      date: 'July 20, 2026',
      summary: 'CYAFSF partners with local organizations to provide accessible mental health support for youth in our community.',
      link: '/news/mental-health-initiative'
    },
    {
      id: 2,
      title: 'Community Family Day 2026',
      type: 'Event',
      date: 'August 15, 2026',
      summary: 'Join us for a day of family fun, activities, and community connection. Free for all families!',
      link: '/events/community-family-day'
    },
    {
      id: 3,
      title: 'Annual Impact Report Released',
      type: 'News',
      date: 'June 28, 2026',
      summary: 'Our 2025-2026 Impact Report highlights the achievements and growth of our programs serving youth and families.',
      link: '/news/impact-report-2026'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-navy">News & Events</h2>
            <p className="text-gray-600 mt-2">Stay updated with the latest from CYAFSF</p>
          </div>
          <Link to="/news" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-1">
            View all <FaArrowRight className="text-sm" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.link}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="flex items-center gap-2 mb-3">
                {item.type === 'News' ? (
                  <FaNewspaper className="text-teal-600" />
                ) : (
                  <FaCalendarAlt className="text-coral" />
                )}
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  item.type === 'News' ? 'bg-teal-100 text-teal-700' : 'bg-coral/10 text-coral'
                }`}>
                  {item.type}
                </span>
                <span className="text-xs text-gray-500 ml-auto">{item.date}</span>
              </div>
              <h3 className="font-bold text-navy mb-2 group-hover:text-teal-600 transition-colors">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.summary}</p>
              <span className="text-teal-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <FaArrowRight className="text-xs" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}