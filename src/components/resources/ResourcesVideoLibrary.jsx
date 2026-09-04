// src/components/resources/ResourcesVideoLibrary.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesVideoLibrary = () => {
  const videosData = [
    {
      id: 1,
      title: 'Supporting Youth Mental Wellness',
      description: 'Practical tips for supporting youth mental health.',
    },
    {
      id: 2,
      title: 'Positive Parenting Strategies',
      description: 'Building strong, healthy relationships with your children.',
    },
    {
      id: 3,
      title: 'Getting Involved in Your Community',
      description: 'Ways to make a difference and build connections.',
    },
    {
      id: 4,
      title: 'Youth Leadership Skills',
      description: 'Develop confidence and leadership in youth.',
    },
  ];

  return (
    <section className="py-10 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-[#edf7f6] border border-[#ccfbf1] rounded-3xl p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Box */}
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0d9488] text-white flex items-center justify-center shadow-md">
                <Video className="w-6 h-6" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Video Library
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                Expert talks, workshops, and helpful sessions on mental wellness, parenting, youth development, and more.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-sm shadow-[#0d9488]/30 group"
                >
                  <span>View All Videos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right 4 Video Cards with Coming Soon Placeholders */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {videosData.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-200/80 flex flex-col group"
                  >
                    {/* Coming Soon Placeholder Top Area */}
                    <div className="relative h-28 w-full bg-gradient-to-br from-teal-50/80 via-slate-100 to-teal-100/50 flex flex-col items-center justify-center border-b border-slate-100/80 p-2">
                      <div className="w-9 h-9 rounded-full bg-[#0d9488]/10 text-[#0d9488] flex items-center justify-center mb-1.5 shadow-xs">
                        <Video className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-extrabold text-[#0d9488] uppercase tracking-wider bg-white/90 px-3 py-0.5 rounded-full border border-[#0d9488]/20 shadow-xs">
                        Coming Soon
                      </span>
                    </div>

                    {/* Video Info */}
                    <div className="p-3.5 flex flex-col justify-between flex-1 space-y-1.5">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesVideoLibrary;

