// src/components/getInvolved/GetInvolvedHero.jsx
import React from 'react';

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
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedHero;

