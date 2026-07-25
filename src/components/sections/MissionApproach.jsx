// frontend/src/components/sections/MissionApproach.jsx

import { FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

export default function MissionApproach() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-navy to-navy-deep text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-6">Our Mission & Approach</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-[#DCE7EA] leading-relaxed mb-8">
            At CYAFSF, we believe in <span className="text-gold font-semibold">listening first</span> — understanding the unique 
            needs of each person we serve. We connect youth, parents, and caregivers to the right support, 
            creating <span className="text-gold font-semibold">lasting opportunities</span> for growth, belonging, and success.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <FaLightbulb className="text-4xl text-gold mx-auto mb-3 block" />
              <h3 className="font-bold mb-2">Listen First</h3>
              <p className="text-sm text-[#DCE7EA]">Understanding individual needs and stories before offering support.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <FaUsers className="text-4xl text-teal-400 mx-auto mb-3 block" />
              <h3 className="font-bold mb-2">Connect to Support</h3>
              <p className="text-sm text-[#DCE7EA]">Bridging people with the right programs, resources, and community.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <FaRocket className="text-4xl text-coral mx-auto mb-3 block" />
              <h3 className="font-bold mb-2">Create Opportunities</h3>
              <p className="text-sm text-[#DCE7EA]">Building pathways to skills, confidence, and lasting success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}