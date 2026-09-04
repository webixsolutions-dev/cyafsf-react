// src/components/getInvolved/GetInvolvedHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Handshake, Heart, ArrowRight } from 'lucide-react';

const GetInvolvedHero = () => {
  return (
    <section className="relative bg-[#062831] text-white overflow-hidden py-10 lg:py-14 min-h-[420px] md:min-h-[460px] flex items-center">
      
      {/* Right Side Image - Placed strictly on the right half with NO overlay on the image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
        <img
          src="/getinvolved/01_get_involved_hero.webp"
          alt="Volunteers packing care packages"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft edge seam transition at left border of image only */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#062831] to-transparent hidden lg:block" />
        {/* Mobile Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#062831] via-[#062831]/70 to-transparent lg:hidden" />
      </div>

      {/* Solid bluish background covering left half till center on desktop */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-[#062831] z-0 hidden lg:block" />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Get involved.
              <br />
              Help build{' '}
              <span className="text-[#E5A01A]">stronger futures.</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base mt-4 max-w-xl font-normal leading-relaxed">
              Every hour volunteered, every partnership formed, and every gift given helps create brighter possibilities for youth and families across Canada.
            </p>
          </div>

          {/* 3 Bottom Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-7 max-w-lg">
            
            {/* Card 1: Volunteer */}
            <Link to="/contact" className="block group">
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-4 shadow-lg transition-all duration-300 border border-slate-100 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-[#EF4444] mb-2.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-[#EF4444] text-sm sm:text-base leading-tight">
                    Volunteer
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
                    Share your time and talents
                  </p>
                </div>
                <div className="flex justify-end mt-3">
                  <ArrowRight className="w-4 h-4 text-[#EF4444] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Card 2: Partner With Us */}
            <Link to="/contact" className="block group">
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-4 shadow-lg transition-all duration-300 border border-slate-100 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-[#14857E] mb-2.5">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-[#115C56] text-sm sm:text-base leading-tight">
                    Partner With Us
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
                    Collaborate for greater impact
                  </p>
                </div>
                <div className="flex justify-end mt-3">
                  <ArrowRight className="w-4 h-4 text-[#14857E] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Card 3: Donate */}
            <Link to="/donate" className="block group">
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-4 shadow-lg transition-all duration-300 border border-slate-100 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-[#E5A01A] mb-2.5">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                  <h3 className="font-extrabold text-[#E5A01A] text-sm sm:text-base leading-tight">
                    Donate
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
                    Fuel programs and change lives
                  </p>
                </div>
                <div className="flex justify-end mt-3">
                  <ArrowRight className="w-4 h-4 text-[#E5A01A] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedHero;
