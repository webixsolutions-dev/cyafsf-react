// src/components/getInvolved/GetInvolvedDonate.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';

const GetInvolvedDonate = () => {
  const topCards = [
    {
      image: '/getinvolved/04_community_supporter.webp',
      title: 'Community Supporter',
      price: '$25/month',
      description: 'Helps provide essential program resources',
    },
    {
      image: '/getinvolved/05_youth_champion.webp',
      title: 'Youth Champion',
      price: '$50/month',
      description: 'Supports youth programs and mentorship',
    },
    {
      image: '/getinvolved/06_family_advocate.webp',
      title: 'Family Advocate',
      price: '$100/month',
      description: 'Strengthens family support and services',
    },
  ];

  const bottomCards = [
    {
      image: '/getinvolved/07_sponsor_youth_program.webp',
      title: 'Sponsor A Youth Program',
      description: 'Help fund youth programs and activities',
    },
    {
      image: '/getinvolved/08_sponsor_family_resource_package.webp',
      title: 'Sponsor A Family Resource Package',
      description: 'Provide resources and support for families in need',
    },
    {
      image: '/getinvolved/09_community_partnership_fund.webp',
      title: 'Community Partnership Fund',
      description: 'Support community-wide programs and initiatives',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF6EE] text-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Category Tag */}
        <div className="flex items-center gap-2 text-[#E5A01A] font-bold text-xs uppercase tracking-wider mb-3">
          <Heart className="w-4 h-4 text-[#E5A01A]" />
          <span>DONATE</span>
        </div>

        {/* Top Layout Grid: Left Text + Right 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Text Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#082330] leading-tight">
                Your Support
                <br />
                <span className="text-[#E5A01A]">Creates Opportunities</span>
              </h2>

              <p className="text-slate-600 text-base mt-4 leading-relaxed">
                Your generosity helps provide programs, resources, and support services that empower youth and strengthen families.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-extrabold text-[#082330] text-base leading-snug">
                Future Builders Circle
              </h3>
              <h4 className="font-extrabold text-[#082330] text-base leading-snug">
                Monthly Giving
              </h4>
              <p className="text-slate-600 text-sm mt-1">
                Join our monthly giving community and make a lasting impact.
              </p>
            </div>
          </div>

          {/* Right 3 Vertical Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {topCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100/80 flex flex-col h-full"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col items-center text-center flex-grow">
                  <h4 className="font-extrabold text-[#082330] text-base">
                    {card.title}
                  </h4>
                  <p className="text-[#E5A01A] font-extrabold text-sm mt-1">
                    {card.price}
                  </p>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Row: 3 Program Sponsor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {bottomCards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100/80 flex flex-col h-full"
            >
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h4 className="font-extrabold text-[#082330] text-lg leading-tight">
                  {card.title}
                </h4>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-xs">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <Link to="/donate">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#E5A01A] hover:bg-amber-600 text-white font-bold rounded-full px-8 py-3.5 flex items-center gap-3 shadow-md transition-all text-base"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-current" />
              </div>
              <span>Make A Difference Today</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>

          <Link to="/donate">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white hover:bg-slate-50 border border-slate-300 text-[#082330] font-bold rounded-full px-8 py-3.5 flex items-center gap-3 shadow-sm transition-all text-base"
            >
              <span>Donate Now</span>
              <ArrowRight className="w-5 h-5 text-[#082330]" />
            </motion.button>
          </Link>
        </div>

        {/* Security Note */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-medium mt-4">
          <Heart className="w-4 h-4 text-[#E5A01A]" />
          <span>Secure donation · Tax receipt provided</span>
        </div>

      </div>
    </section>
  );
};

export default GetInvolvedDonate;