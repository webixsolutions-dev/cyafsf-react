// src/components/getInvolved/GetInvolvedVolunteer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Heart, Calendar, FileText,
  Sparkles, Award, UserCheck, ShieldCheck, ArrowRight,
  HandHeart, HeartHandshake
} from 'lucide-react';

const GetInvolvedVolunteer = () => {
  const volunteerRoles = [
    {
      title: 'Youth Mentors',
      icon: Users,
      iconColor: 'text-[#E5A01A]',
    },
    {
      title: 'Fundraising Supporters',
      icon: Heart,
      iconColor: 'text-[#EF4444]',
    },
    {
      title: 'Event Volunteers',
      icon: Calendar,
      iconColor: 'text-[#14857E]',
    },
    {
      title: 'Workshop Assistants',
      icon: FileText,
      iconColor: 'text-[#14857E]',
    },
    {
      title: 'Community Ambassadors',
      icon: Users,
      iconColor: 'text-[#14857E]',
    },
  ];

  const features = [
    {
      title: 'Make a',
      subtitle: 'Meaningful Difference',
      icon: HeartHandshake,
    },
    {
      title: 'Build Skills',
      subtitle: 'and Experience',
      icon: Award,
    },
    {
      title: 'Connect with',
      subtitle: 'Like-Minded People',
      icon: Users,
    },
    {
      title: 'Flexible',
      subtitle: 'Involvement',
      icon: UserCheck,
    },
    {
      title: 'Training and',
      subtitle: 'Ongoing Support',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white text-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Top Header & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-lg h-[340px] lg:h-[380px]">
              <img 
                src="/getinvolved/02_make_a_difference.webp" 
                alt="Youth doing art activities together" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column Content & Pills */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category Tag */}
              <div className="flex items-center gap-2 text-[#EF4444] font-bold text-xs uppercase tracking-wider mb-3">
                <Users className="w-4 h-4" />
                <span>VOLUNTEER OPPORTUNITIES</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#082330] leading-tight">
                Make a difference
                <br />
                <span className="text-[#EF4444]">in your community</span>
              </h2>

              {/* Subtitle */}
              <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed max-w-xl">
                Our volunteers are at the heart of everything we do. There are many ways to get involved and help create positive change.
              </p>
            </div>

            {/* 5 Volunteer Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {volunteerRoles.map((role, idx) => (
                <div 
                  key={idx}
                  className={`bg-white border border-slate-100 shadow-sm rounded-2xl px-5 py-3.5 flex items-center gap-3 font-extrabold text-[#082330] text-sm ${idx === 4 ? 'sm:col-span-1' : ''}`}
                >
                  <role.icon className={`w-5 h-5 ${role.iconColor} flex-shrink-0`} />
                  <span>{role.title}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Horizontal Feature Banner */}
        <div className="bg-[#FAF5EC] border border-[#F2E5D5] rounded-2xl p-6 md:p-8 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100/60 flex items-center justify-center text-[#E5A01A] flex-shrink-0 mt-0.5">
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold text-xs text-[#082330] leading-snug">
                    {feat.title}
                  </p>
                  <p className="font-extrabold text-xs text-[#082330] leading-snug">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#EF4444] hover:bg-red-600 text-white font-bold rounded-full px-8 py-3.5 flex items-center gap-3 shadow-lg shadow-red-200 transition-all text-base"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <HandHeart className="w-4 h-4 text-white" />
              </div>
              <span>Become a Volunteer</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GetInvolvedVolunteer;