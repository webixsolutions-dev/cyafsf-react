// src/components/contact/ContactInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, 
  Heart, Users, Shield, Award
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import AnimatedSection from '../shared/AnimatedCard';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Details */}
          <AnimatedSection disableHover={true}>
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider 
                           bg-teal/10 px-4 py-1.5 rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl font-bold text-navy">
              We'd love to hear
              <br />
              <span className="text-teal">from you</span>
            </h2>
            <p className="text-ink/70 text-lg mt-4">
              Whether you have a question, need support, or want to get involved, 
              our team is here to help.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mt-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Phone</p>
                  <a href="tel:+1234567890" className="text-sm text-ink/60 hover:text-teal transition-colors">
                    1-234-567-890
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Email</p>
                  <a href="mailto:info@cyafsf.ca" className="text-sm text-ink/60 hover:text-teal transition-colors">
                    info@cyafsf.ca
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Address</p>
                  <p className="text-sm text-ink/60">
                    123 Support Street<br />
                    Ottawa, ON K1A 0B1
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Hours</p>
                  <p className="text-sm text-ink/60">
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quick Response Note */}
            <div className="mt-6 p-4 bg-teal/10 rounded-xl border border-teal/20">
              <p className="text-sm text-navy text-center">
                <span className="font-bold">Quick response:</span> We aim to respond to all inquiries within 24 hours.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Column - Social & Map */}
          <AnimatedSection direction="right" disableHover={true}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Social Media */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-coral" />
                  Connect with us
                </h3>
                <p className="text-sm text-ink/60 mb-4">
                  Follow us on social media for updates, stories, and community news.
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="w-12 h-12 bg-[#1877F2] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="w-12 h-12 bg-[#000000] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="w-12 h-12 bg-[#E4405F] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="w-12 h-12 bg-[#FF0000] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Map - Updated with your location */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal" />
                  Find us
                </h3>
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.678901234567!2d-75.6769706!3d45.3512294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce08831a150dfb%3A0x6c6310ce18432438!2s123%20Support%20St%2C%20Ottawa%2C%20ON%20K1A%200B1!5e0!3m2!1sen!2sca!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CYAFSF Location Map"
                    className="rounded-xl"
                  />
                </div>
                <p className="text-xs text-ink/40 text-center mt-2">
                  123 Support Street, Ottawa, ON K1A 0B1
                </p>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs text-ink/40">
                    <Shield className="w-4 h-4 text-teal" />
                    <span>Safe & Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink/40">
                    <Users className="w-4 h-4 text-teal" />
                    <span>Community Trust</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink/40">
                    <Award className="w-4 h-4 text-teal" />
                    <span>Registered Charity</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink/40">
                    <Heart className="w-4 h-4 text-teal" />
                    <span>Making Impact</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-ink/30 mt-4">
                Charitable Registration #: 12345-6789
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;