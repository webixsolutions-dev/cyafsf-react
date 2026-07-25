// frontend/src/components/sections/Hero.jsx

import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-deep text-white py-20 md:py-28">
      {/* Background Image from Unsplash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/50" />
      
      {/* Decorative Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative grid md:grid-cols-2 gap-10 items-center z-10">
        <div>
          <p className="text-gold font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
            Support • Belonging • Opportunity
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-4">
            Stronger youth.
            <br />
            <span className="text-gold">Stronger families.</span>
            <br />
            Stronger communities.
          </h1>
          <p className="text-[#DCE7EA] text-base md:text-lg max-w-[46ch] mb-8 leading-relaxed">
            CYAFSF connects young people and families with practical support, 
            learning opportunities and community relationships that help them thrive.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/programs" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Find Support
            </Link>
            <Link 
              to="/programs" 
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Programs <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      
      </div>
    </section>
  );
}