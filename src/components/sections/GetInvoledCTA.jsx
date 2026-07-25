// frontend/src/components/sections/GetInvolvedCTA.jsx

import { Link } from 'react-router-dom';
import { FaHandsHelping, FaHands, FaDonate, FaHeart } from 'react-icons/fa';
import { GiHeartWings } from 'react-icons/gi';

export default function GetInvolvedCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-teal-700 to-teal-800 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">Get Involved</h2>
          <p className="text-teal-100 mb-12 text-lg">
            Join us in building stronger youth, families, and communities. Your support makes a difference.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Volunteer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Volunteer</h3>
              <p className="text-teal-100 text-sm mb-4">
                Share your time and skills to make a meaningful impact in young lives.
              </p>
              <Link 
                to="/volunteer" 
                className="inline-block px-6 py-2.5 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Partner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHands className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Partner</h3>
              <p className="text-teal-100 text-sm mb-4">
                Collaborate with us to expand our reach and create lasting change.
              </p>
              <Link 
                to="/partner" 
                className="inline-block px-6 py-2.5 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Donate */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDonate className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Donate</h3>
              <p className="text-teal-100 text-sm mb-4">
                Your financial support helps us provide essential programs and services.
              </p>
              <Link 
                to="/donate" 
                className="inline-block px-6 py-2.5 bg-gold text-navy font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}