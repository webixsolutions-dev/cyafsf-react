// frontend/src/components/layout/SiteHeader.jsx
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { NAV_ITEMS } from '../../data/navigation.js';
import {
  FaPhone,
  FaGlobe,
  FaBars,
  FaTimes,
  FaHeart,
  FaEnvelope
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/images/logo.png';

export default function SiteHeader() {
  const { toggleLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar - Foundation Title */}
      <div className="bg-[#071923] text-white py-1.5 text-xs font-medium border-b border-white/10">
        <div className="container flex items-center justify-center text-center">
          <span>Canadian Youth and Family Support Foundation</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container flex items-center justify-between gap-4 py-3">
        {/* Logo - Bigger Size */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="CYAFSF Logo"
            className="w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation with Separators */}
        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`
            fixed md:static inset-0 md:inset-auto 
            bg-white md:bg-transparent 
            transform transition-transform duration-300 ease-in-out
            ${open ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            md:transform-none
            flex md:block
            z-40
          `}
        >
          {/* Mobile Menu Header - Fixed at top */}
          <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-100 bg-white sticky top-0 z-50">
            <span className="font-bold text-gray-800">{t('menu')}</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaTimes size={24} className="text-gray-600" />
            </button>
          </div>

          <ul className="
            flex flex-col md:flex-row 
            gap-0 md:gap-0 
            items-start md:items-center 
            p-4 md:p-0
            h-full md:h-auto
            overflow-y-auto md:overflow-visible
            pt-0 md:pt-0
          ">
            {/* Navigation Links */}
            {NAV_ITEMS.map((item, index) => (
              <li
                className="w-full md:w-auto flex items-center border-b md:border-b-0 border-gray-100"
                key={item.to}
              >
                {/* Separator - Desktop only (except first item) */}
                {index > 0 && (
                  <span className="hidden md:inline text-gray-300 select-none mx-1">|</span>
                )}

                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block py-3 md:py-2 px-4 md:px-2 font-medium text-sm transition-all
                     ${isActive
                      ? 'text-teal-600 bg-teal-50 md:bg-transparent md:text-teal-600 md:border-b-2 md:border-teal-600'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50 md:hover:bg-transparent'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Mobile Donate Button */}
            <li className="w-full md:hidden mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/donate"
                className="block w-full text-center py-3 px-4 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-colors"
                onClick={() => setOpen(false)}
              >
                <FaHeart className="inline mr-2" />
                {t('donate')}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Contact Us Button - Desktop */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-navy bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200"
          >
            <FaEnvelope className="text-navy/70" />
            Contact Us
          </Link>

          {/* Donate Button - Desktop only */}
          <Link
            to="/donate"
            className="hidden md:inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 text-sm font-semibold text-white bg-coral hover:bg-coral/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <FaHeart className="text-white/80" />
            {t('donate')}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
          >
            {open ? (
              <FaTimes size={20} className="text-gray-600" />
            ) : (
              <FaBars size={20} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}