// frontend/src/pages/Privacy.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Privacy Policy"
            subtitle="How we collect, use, and protect your personal information"
            tag="Privacy"
            centered
          />

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mt-8 space-y-6">
            <div className="flex items-center gap-3 text-teal">
              <Shield className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Our Commitment</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              CYAFSF is committed to protecting the privacy and confidentiality of personal information 
              entrusted to us. We respect your privacy and are dedicated to maintaining the trust of 
              those we serve.
            </p>

            <div className="flex items-center gap-3 text-teal mt-6">
              <FileText className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Information We Collect</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              We may collect personal information such as:
            </p>
            <ul className="list-disc list-inside text-ink/70 space-y-2 pl-4">
              <li>Name and contact information</li>
              <li>Demographic information</li>
              <li>Communication preferences</li>
              <li>Information provided through our contact forms</li>
            </ul>

            <div className="flex items-center gap-3 text-teal mt-6">
              <Lock className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">How We Use Your Information</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-ink/70 space-y-2 pl-4">
              <li>Respond to your inquiries</li>
              <li>Provide requested services and support</li>
              <li>Send updates and newsletters (with your consent)</li>
              <li>Improve our programs and services</li>
            </ul>

            <div className="flex items-center gap-3 text-teal mt-6">
              <Eye className="w-6 h-6" />
              <h2 className="text-xl font-bold text-navy">Information Sharing</h2>
            </div>
            <p className="text-ink/70 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. 
              Information is only shared when required by law or with your explicit consent.
            </p>

            <div className="bg-cream rounded-xl p-6 mt-6 border border-gray-200">
              <h3 className="font-bold text-navy mb-2">Contact Us</h3>
              <p className="text-ink/70 text-sm">
                If you have questions about our privacy policy or how we handle your information, 
                please contact us at:
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-ink/70">Email: <a href="mailto:info@cyafs.com" className="text-teal hover:underline">info@cyafsf.com</a></p>
                <p className="text-ink/70">Phone: <a href="tel:+14034048969" className="text-teal hover:underline">403-404-8969</a></p>
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

export default Privacy;