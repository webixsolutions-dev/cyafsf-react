// src/components/contact/ContactHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative bg-[#062831] text-white overflow-hidden min-h-[460px] lg:min-h-[520px] flex items-center">
      
      {/* Right Side Background Image with Gradient Fade at left edge only */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 z-0">
        <img 
          src="/contact/heroimage.webp" 
          alt="Support team consulting with clients" 
          className="w-full h-full object-cover object-center"
        />
        {/* Desktop Gradient Fade on left edge of image only (stops by center of section) */}
        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#062831] via-[#062831]/60 to-transparent hidden lg:block" />
        {/* Mobile Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#062831] via-[#062831]/50 to-transparent lg:hidden" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 py-12 lg:py-16">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Tag Badge */}
          <div className="inline-block text-[#E5A01A] font-bold text-xs uppercase tracking-wider bg-white/10 px-3.5 py-1 rounded-full mb-4">
            CONTACT US
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Get in touch
            <br />
            <span className="text-[#E5A01A]">with us</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-base md:text-lg mt-4 max-w-md leading-relaxed">
            We're here to help. Reach out and we'll connect you with the right support for your needs.
          </p>

          {/* 2 Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-lg">
            {/* Call us Card */}
            <a 
              href="tel:4034048969" 
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 hover:bg-white/15 transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-[#E5A01A]/20 flex items-center justify-center text-[#E5A01A] flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-300 font-medium">Call us</p>
                <p className="text-sm font-bold text-white">403-404-8969</p>
              </div>
            </a>

            {/* Email us Card */}
            <a 
              href="mailto:info@cyafsf.com" 
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-3.5 flex items-center gap-3 hover:bg-white/15 transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-[#E5A01A]/20 flex items-center justify-center text-[#E5A01A] flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-300 font-medium">Email us</p>
                <p className="text-sm font-bold text-white">info@cyafsf.com</p>
              </div>
            </a>
          </div>

          {/* Office Hours Note */}
          <div className="flex items-center gap-2 text-slate-300 text-sm mt-5 font-medium">
            <Clock className="w-4 h-4 text-[#E5A01A]" />
            <span>Mon-Fri 9:00 AM - 5:00 PM</span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ContactHero;
