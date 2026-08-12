// frontend/src/pages/Terms.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Shield, AlertCircle, CheckCircle, Mail, Phone } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';

const Terms = () => {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Terms & Conditions"
            subtitle="Terms of use for the CYAFSF website"
            tag="Terms"
            centered
          />

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mt-8 space-y-6">
            <div className="flex items-center gap-3 text-teal">
              <FileText className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Acceptance of Terms</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              By accessing and using the CYAFSF website, you agree to comply with and be bound by 
              these Terms & Conditions. If you do not agree to these terms, please do not use our website.
            </p>

            <div className="flex items-center gap-3 text-teal mt-6">
              <Shield className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Use of Website</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              You agree to use this website for lawful purposes only. You may not:
            </p>
            <ul className="list-disc list-inside text-ink/70 space-y-2 pl-4">
              <li>Use the website in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Distribute harmful or malicious content</li>
              <li>Impersonate any person or entity</li>
            </ul>

            <div className="flex items-center gap-3 text-teal mt-6">
              <AlertCircle className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Intellectual Property</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property 
              of CYAFSF and is protected by copyright and intellectual property laws. You may not 
              reproduce, distribute, or modify any content without our prior written consent.
            </p>

            <div className="flex items-center gap-3 text-teal mt-6">
              <CheckCircle className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Disclaimer</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              The information provided on this website is for general informational purposes only. 
              While we strive to keep information accurate and up-to-date, we make no representations 
              or warranties of any kind, express or implied, about the completeness, accuracy, 
              reliability, or suitability of the information.
            </p>

            <div className="flex items-center gap-3 text-teal mt-6">
              <Shield className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Limitation of Liability</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              CYAFSF shall not be liable for any damages arising from the use of or inability to use 
              this website, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>

            <div className="bg-cream rounded-xl p-6 mt-6 border border-gray-200">
              <h3 className="font-bold text-navy mb-2">Contact Us</h3>
              <p className="text-ink/70 text-sm">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-ink/70 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal" />
                  <a href="mailto:info@cyafsf.com" className="text-teal hover:underline">info@cyafsf.com</a>
                </p>
                <p className="text-ink/70 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal" />
                  <a href="tel:+1234567890" className="text-teal hover:underline">1-234-567-890</a>
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

export default Terms;