// frontend/src/components/layout/SiteHeader.jsx

import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { NAV_ITEMS } from '../../data/navigation.js';
import { 
  FaPhone, 
  FaGlobe, 
  FaBars, 
  FaTimes,
  FaHeart
} from 'react-icons/fa';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar - Contact Info */}
      <div className="hidden md:block bg-slate-800 border-b py-2 border-gray-100">
        <div className="container flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-4 text-gray-600">
            <span className="font-semibold text-white">
              Canadian Youth and Family Support Foundation
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-teal-600 transition-colors flex items-center gap-1">
              <FaPhone className="text-white" size={12} />
              <span className='text-white'>Contact</span>
            </Link>
            <span className="text-white">|</span>
            <button className="hover:text-white transition-colors flex items-center gap-1">
              <FaGlobe size={12} className='text-white' />
              <span className='text-white'>Français</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container flex items-center justify-between gap-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-700 to-teal-600 flex items-center justify-center text-white font-display font-extrabold text-lg shadow-md group-hover:shadow-lg transition-shadow">
            CY
          </div>
          <div className="font-display leading-tight">
            <span className="block text-xl font-extrabold text-gray-800 tracking-tight">
              CYAFSF
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
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
            w-full md:w-auto
            h-full md:h-auto
          `}
        >
          {/* Mobile Menu - Close Button at TOP */}
          <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-100 bg-white">
            <span className="font-bold text-gray-800">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <FaTimes size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="
            flex flex-col md:flex-row 
            gap-0 md:gap-0 
            items-start md:items-center 
            px-4 pb-4 md:p-0
            overflow-y-auto md:overflow-visible
            flex-1
          ">
            {NAV_ITEMS.map((item, index) => (
              <li 
                className="w-full md:w-auto flex items-center border-b md:border-b-0 border-gray-100" 
                key={item.to}
              >
                {index > 0 && (
                  <span className="hidden md:inline text-gray-300 select-none mx-1">|</span>
                )}
                
                <NavLink 
                  to={item.to} 
                  className={({ isActive }) =>
                    `block py-3 md:py-2 px-4 md:px-2 font-medium text-sm transition-all w-full
                     ${isActive 
                       ? 'text-teal-600 bg-teal-50 md:bg-transparent md:text-teal-600 md:border-b-2 md:border-teal-600' 
                       : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50 md:hover:bg-transparent'}`
                  }
                  onClick={handleLinkClick}
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
                onClick={handleLinkClick}
              >
                <FaHeart className="inline mr-2" />
                Donate
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Side Actions - Desktop Only */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Donate Button - Hidden on mobile (shown in menu) */}
          <Link 
            to="/donate" 
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-coral hover:bg-coral/90 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <FaHeart className="text-white/80" />
            Donate
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
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
          aria-hidden="true"
        />
      )}
    </header>
  );
}