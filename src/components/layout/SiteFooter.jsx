import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';

import {
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

import logo from '../../assets/images/Footer-logo.png';

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-[#C9D8DB] pt-16 pb-6">

      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="CYAFSF Logo"
              className="w-40 sm:w-48 md:w-52 h-auto object-contain mb-3"
            />
          </Link>

          <p className="mt-2 max-w-[34ch] text-[#AFC3C7]">
            Stronger youth. Stronger families. Stronger communities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">

            <a
              href="#"
              className="text-[#AFC3C7] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-[#AFC3C7] hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-[#AFC3C7] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-[#AFC3C7] hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-[#AFC3C7] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

          </div>
        </div>


        {/* Explore */}
        <nav aria-label="Explore">
          <h4 className="text-white text-sm uppercase tracking-wider mb-3">
            Explore
          </h4>

          <ul className="flex flex-col gap-2 text-sm">

            <li>
              <Link
                to="/about"
                className="hover:text-white hover:underline transition-colors"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/programs"
                className="hover:text-white hover:underline transition-colors"
              >
                Programs
              </Link>
            </li>

            <li>
              <Link
                to="/family-support"
                className="hover:text-white hover:underline transition-colors"
              >
                Family Support
              </Link>
            </li>

            <li>
              <Link
                to="/events"
                className="hover:text-white hover:underline transition-colors"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                to="/resources"
                className="hover:text-white hover:underline transition-colors"
              >
                Resources
              </Link>
            </li>

            <li>
              <Link
                to="/news"
                className="hover:text-white hover:underline transition-colors"
              >
                News & Stories
              </Link>
            </li>

          </ul>
        </nav>


        {/* Take Action */}
        <nav aria-label="Take action">

          <h4 className="text-white text-sm uppercase tracking-wider mb-3">
            Take Action
          </h4>

          <ul className="flex flex-col gap-2 text-sm">

            <li>
              <Link
                to="/get-involved"
                className="hover:text-white hover:underline transition-colors"
              >
                Get Involved
              </Link>
            </li>

            <li>
              <Link
                to="/get-involved"
                className="hover:text-white hover:underline transition-colors"
              >
                Volunteer
              </Link>
            </li>

            <li>
              <Link
                to="/get-involved"
                className="hover:text-white hover:underline transition-colors"
              >
                Partner With Us
              </Link>
            </li>

            <li>
              <Link
                to="/donate"
                className="hover:text-white hover:underline transition-colors"
              >
                Donate
              </Link>
            </li>

          </ul>
        </nav>


        {/* Contact */}
        <div>

          <h4 className="text-white text-sm uppercase tracking-wider mb-3">
            Contact
          </h4>

          <ul className="flex flex-col gap-3 text-sm">

            {/* Head Office */}
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />

              <span className="text-[#AFC3C7]">
                <span className="text-white font-medium">
                  Head Office
                </span>
                <br />
                495 Water St,
                <br />
                St. John's, NL A1E 6B5
              </span>
            </li>


            {/* Calgary Branch */}
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />

              <span className="text-[#AFC3C7]">
                <span className="text-white font-medium">
                  Calgary Branch
                </span>
                <br />
                10B, 717 7 Ave SW,
                <br />
                Calgary, AB T2P 0Z3
              </span>
            </li>


            {/* Phone */}
            <li className="flex items-center gap-3">

              <Phone className="w-4 h-4 text-teal flex-shrink-0" />

              <a
                href="tel:+14034048969"
                className="text-[#AFC3C7] hover:text-white hover:underline transition-colors"
              >
                403-404-8969
              </a>

            </li>


            {/* Email */}
            <li className="flex items-center gap-3">

              <Mail className="w-4 h-4 text-teal flex-shrink-0" />

              <a
                href="mailto:info@cyafsf.com"
                className="text-[#AFC3C7] hover:text-white hover:underline transition-colors"
              >
                info@cyafsf.com
              </a>

            </li>


            {/* Hours */}
            <li className="flex items-center gap-3">

              <Clock className="w-4 h-4 text-teal flex-shrink-0" />

              <span className="text-[#8FA6AB] text-xs">
                Mon-Fri 9:00 AM - 5:00 PM
              </span>

            </li>

          </ul>
        </div>

      </div>


      {/* Bottom Bar */}
      <div className="container mt-10 pt-4 border-t border-white/15 flex flex-wrap justify-between gap-2 text-xs text-[#8FA6AB]">

        <span className="py-2">
          &copy; {new Date().getFullYear()} Canadian Youth and Family Support
          Foundation. All rights reserved.
        </span>

        <div className="flex gap-4">

          <Link
            to="/privacy"
            className="hover:text-white hover:underline transition-colors"
          >
            Privacy
          </Link>

          <Link
            to="/accessibility"
            className="hover:text-white hover:underline transition-colors"
          >
            Accessibility
          </Link>

          <Link
            to="/terms"
            className="hover:text-white hover:underline transition-colors"
          >
            Terms
          </Link>

        </div>

      </div>

    </footer>
  );
}
