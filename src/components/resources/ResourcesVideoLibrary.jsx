import React from 'react';
import { motion } from 'framer-motion';
import { Video, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesVideoLibrary = () => {
  const videosData = [
    {
      id: 1,
      title: 'Supporting Youth Mental Wellness',
      description: 'Practical tips for supporting youth mental health.',
      duration: '13:24',
      image: '/getinvolved/04_community_supporter.webp',
    },
    {
      id: 2,
      title: 'Positive Parenting Strategies',
      description: 'Building strong, healthy relationships with your children.',
      duration: '11:48',
      image: '/resources/parenting_through_challenging_times.webp',
    },
    {
      id: 3,
      title: 'Getting Involved in Your Community',
      description: 'Ways to make a difference and build connections.',
      duration: '10:22',
      image: '/getinvolved/01_get_involved_hero.webp',
    },
    {
      id: 4,
      title: 'Youth Leadership Skills',
      description: 'Develop confidence and leadership in youth.',
      duration: '15:18',
      image: '/getinvolved/05_youth_champion.webp',
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

            {/* Right 4 Video Thumbnails Grid (2x2) */}
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
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-200/80 flex flex-col group cursor-pointer"
                  >
                    {/* Thumbnail Image with Play button and duration */}
                    <div className="relative h-28 w-full overflow-hidden rounded-t-2xl">
                      <img 
                        src={video.image} 
                        alt={video.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <div className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-white text-slate-900 flex items-center justify-center shadow-md pl-0.5 transition-transform group-hover:scale-110">
                          <Play className="w-4 h-4 fill-slate-900" />
                        </div>
                      </div>
                      {/* Duration Tag */}
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-white font-semibold text-[10px]">
                        {video.duration}
                      </span>
                    </div>

                    {/* Video Info */}
                    <div className="p-3.5 flex flex-col justify-between flex-1 space-y-1">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#0d9488] transition-colors leading-snug line-clamp-2">
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
