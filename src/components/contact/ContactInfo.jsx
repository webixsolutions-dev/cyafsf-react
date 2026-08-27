// src/components/contact/ContactInfo.jsx

import React from 'react';
import { motion } from 'framer-motion';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Users,
  Shield,
  Award
} from 'lucide-react';

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';

import AnimatedSection from '../shared/AnimatedCard';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column - Contact Details */}
          <AnimatedSection disableHover={true}>

            <span
              className="
                inline-block
                text-teal
                font-semibold
                text-sm
                uppercase
                tracking-wider
                bg-teal/10
                px-4
                py-1.5
                rounded-full
                mb-4
              "
            >
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

              {/* Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                className="
                  flex
                  items-start
                  gap-4
                  p-4
                  bg-white
                  rounded-xl
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    bg-teal/10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <Phone className="w-6 h-6 text-teal" />
                </div>

                <div>
                  <p className="text-sm font-medium text-navy">
                    Phone
                  </p>

                  <a
                    href="tel:+14034048969"
                    className="
                      text-sm
                      text-ink/60
                      hover:text-teal
                      transition-colors
                    "
                  >
                    403-404-8969
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                className="
                  flex
                  items-start
                  gap-4
                  p-4
                  bg-white
                  rounded-xl
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    bg-teal/10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <Mail className="w-6 h-6 text-teal" />
                </div>

                <div>
                  <p className="text-sm font-medium text-navy">
                    Email
                  </p>

                  <a
                    href="mailto:info@cyafsf.com"
                    className="
                      text-sm
                      text-ink/60
                      hover:text-teal
                      transition-colors
                    "
                  >
                    info@cyafsf.com
                  </a>
                </div>
              </motion.div>

              {/* Head Office */}
              <motion.div
                whileHover={{ x: 5 }}
                className="
                  flex
                  items-start
                  gap-4
                  p-4
                  bg-white
                  rounded-xl
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    bg-teal/10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <MapPin className="w-6 h-6 text-teal" />
                </div>

                <div>
                  <p className="text-sm font-medium text-navy">
                    Head Office
                  </p>

                  <p className="text-sm text-ink/60">
                    495 Water St
                    <br />
                    St. John's, NL A1E 6B5
                  </p>
                </div>
              </motion.div>

              {/* Calgary Branch */}
              <motion.div
                whileHover={{ x: 5 }}
                className="
                  flex
                  items-start
                  gap-4
                  p-4
                  bg-white
                  rounded-xl
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    bg-teal/10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <MapPin className="w-6 h-6 text-teal" />
                </div>

                <div>
                  <p className="text-sm font-medium text-navy">
                    Calgary Branch
                  </p>

                  <p className="text-sm text-ink/60">
                    10B, 717 7 Ave SW
                    <br />
                    Calgary, AB T2P 0Z3
                  </p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{ x: 5 }}
                className="
                  flex
                  items-start
                  gap-4
                  p-4
                  bg-white
                  rounded-xl
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    bg-teal/10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <Clock className="w-6 h-6 text-teal" />
                </div>

                <div>
                  <p className="text-sm font-medium text-navy">
                    Hours
                  </p>

                  <p className="text-sm text-ink/60">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:00 PM
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Quick Response Note */}
            <div className="mt-6 p-4 bg-teal/10 rounded-xl border border-teal/20">
              <p className="text-sm text-navy text-center">
                <span className="font-bold">
                  Quick response:
                </span>{' '}
                We aim to respond to all inquiries within 24 hours.
              </p>
            </div>

          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection direction="right" disableHover={true}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">

              {/* Social Media */}
              <div className="mb-8">

                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-coral" />
                  Connect with us
                </h3>

                <p className="text-sm text-ink/60 mb-4">
                  Follow us on social media for updates, stories, and
                  community news.
                </p>

                <div className="flex flex-wrap gap-3">

                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="
                      w-12
                      h-12
                      bg-[#1877F2]
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-white
                      hover:shadow-lg
                      transition-all
                      duration-300
                    "
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="
                      w-12
                      h-12
                      bg-[#000000]
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-white
                      hover:shadow-lg
                      transition-all
                      duration-300
                    "
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="
                      w-12
                      h-12
                      bg-[#E4405F]
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-white
                      hover:shadow-lg
                      transition-all
                      duration-300
                    "
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="
                      w-12
                      h-12
                      bg-[#FF0000]
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-white
                      hover:shadow-lg
                      transition-all
                      duration-300
                    "
                    aria-label="YouTube"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, y: -3 }}
                    href="#"
                    className="
                      w-12
                      h-12
                      bg-[#0A66C2]
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-white
                      hover:shadow-lg
                      transition-all
                      duration-300
                    "
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </motion.a>

                </div>
              </div>

              {/* Map */}
              <div className="mt-6">

                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-teal" />
                  Find us
                </h3>

                <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps?q=495+Water+Street,+St.+John%27s,+NL+A1E+6B5,+Canada&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CYAFSF Head Office Location"
                    className="rounded-xl"
                  />
                </div>

                <p className="text-xs text-ink/40 text-center mt-2">
                  Head Office: 495 Water St, St. John's, NL A1E 6B5
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
