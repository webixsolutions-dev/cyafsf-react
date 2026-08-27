// frontend/src/pages/Accessibility.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Accessibility as AccessibilityIcon, 
  Eye, Keyboard, Monitor, Mail, Phone 
} from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';

const AccessibilityPage = () => {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Accessibility Statement"
            subtitle="Our commitment to making our website accessible to everyone"
            tag="Accessibility"
            centered
          />

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mt-8 space-y-6">
            <div className="flex items-center gap-3 text-teal">
              <AccessibilityIcon className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Our Commitment</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              CYAFSF is committed to ensuring that our website is accessible to all individuals, 
              regardless of ability or technology. We believe in creating an inclusive digital 
              environment where everyone can access information and services.
            </p>

            <div className="flex items-center gap-3 text-teal mt-6">
              <Eye className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Accessibility Features</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc list-inside text-ink/70 space-y-2 pl-4">
              <li>WCAG 2.2 AA compliance target</li>
              <li>Keyboard-navigable menus and controls</li>
              <li>Visible focus states for interactive elements</li>
              <li>Semantic headings and landmarks</li>
              <li>Color contrast of at least 4.5:1 for normal text</li>
              <li>Responsive text without horizontal scrolling</li>
              <li>Reduced-motion support</li>
              <li>Descriptive alt text for images</li>
            </ul>

            <div className="flex items-center gap-3 text-teal mt-6">
              <Keyboard className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Keyboard Navigation</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              All interactive elements on our website can be accessed using a keyboard. 
              Use the Tab key to navigate through content and interactive elements, 
              and Enter or Spacebar to activate buttons and links.
            </p>

            <div className="flex items-center gap-3 text-teal mt-6">
              <Monitor className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Screen Reader Support</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              Our website is designed to be compatible with screen readers. We use 
              semantic HTML, ARIA landmarks, and appropriate heading structures to 
              ensure content is properly interpreted by assistive technologies.
            </p>

            <div className="bg-cream rounded-xl p-6 mt-6 border border-gray-200">
              <h3 className="font-bold text-navy mb-2">Feedback & Support</h3>
              <p className="text-ink/70 text-sm">
                If you experience any difficulty accessing our website or have suggestions 
                for improvement, please contact us:
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-ink/70 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal" />
                  <a href="mailto:info@cyafsf.com" className="text-teal hover:underline">info@cyafsf.com</a>
                </p>
                <p className="text-ink/70 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal" />
                  <a href="tel:+14034048969" className="text-teal hover:underline">403-404-8969</a>
                </p>
              </div>
            </div>

            <p className="text-xs text-ink/40 mt-6 pt-4 border-t border-gray-200">
              Last Updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccessibilityPage;