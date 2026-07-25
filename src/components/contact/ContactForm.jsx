// src/components/contact/ContactForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, User, Mail, Phone, MessageCircle, 
  CheckCircle, AlertCircle, ArrowRight,
  Shield, Lock, MapPin, Clock
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reasons = [
    { value: '', label: 'Select a reason' },
    { value: 'programs', label: 'Programs & Services' },
    { value: 'family-support', label: 'Family Support' },
    { value: 'volunteer', label: 'Volunteering' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'donation', label: 'Donation' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.consent) newErrors.consent = 'Please agree to the terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: '',
        consent: false,
      });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection disableHover={true}>
                <h2 className="text-2xl font-bold text-navy mb-2">Send us a message</h2>
                <p className="text-ink/60 text-sm mb-6">We'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink/70 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          data-error={!!errors.name}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border 
                            ${errors.name ? 'border-coral' : 'border-gray-200'} 
                            focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none 
                            transition-all duration-300`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-coral text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink/70 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          data-error={!!errors.email}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-lg border 
                            ${errors.email ? 'border-coral' : 'border-gray-200'} 
                            focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none 
                            transition-all duration-300`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-coral text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-ink/70 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 
                                 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none 
                                 transition-all duration-300"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block text-sm font-medium text-ink/70 mb-1">
                      Reason for Contacting
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/30" />
                      <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 
                                 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none 
                                 transition-all duration-300 appearance-none bg-white"
                      >
                        {reasons.map((reason) => (
                          <option key={reason.value} value={reason.value}>
                            {reason.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-ink/70 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      data-error={!!errors.message}
                      className={`w-full px-4 py-2.5 rounded-lg border 
                        ${errors.message ? 'border-coral' : 'border-gray-200'} 
                        focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none 
                        transition-all duration-300 resize-none`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && (
                      <p className="text-coral text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      data-error={!!errors.consent}
                      className={`w-5 h-5 mt-0.5 rounded border 
                        ${errors.consent ? 'border-coral' : 'border-gray-300'} 
                        text-teal focus:ring-teal/20 transition-all duration-300`}
                    />
                    <label className="text-sm text-ink/60 cursor-pointer">
                      I understand that my information will be used to respond to my inquiry
                      and will not be shared with third parties.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-coral text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.consent}
                    </p>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 rounded-lg font-bold text-white transition-all duration-300
                      ${isSubmitting 
                        ? 'bg-teal/70 cursor-not-allowed' 
                        : 'bg-teal hover:bg-teal/90 shadow-lg shadow-teal/30'
                      } flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Success Message */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <p className="text-sm text-green-700">
                          Thank you! Your message has been sent successfully.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </AnimatedSection>
            </div>

            {/* Right Column - Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right" disableHover={true}>
                <div className="bg-cream rounded-2xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-navy mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-teal mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-navy">Phone</p>
                        <a href="tel:+1234567890" className="text-sm text-ink/60 hover:text-teal transition-colors">
                          1-234-567-890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-teal mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-navy">Email</p>
                        <a href="mailto:info@cyafsf.ca" className="text-sm text-ink/60 hover:text-teal transition-colors">
                          info@cyafsf.ca
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-teal mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-navy">Address</p>
                        <p className="text-sm text-ink/60">
                          123 Support Street<br />
                          Ottawa, ON K1A 0B1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-teal mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-navy">Hours</p>
                        <p className="text-sm text-ink/60">
                          Monday - Friday<br />
                          9:00 AM - 5:00 PM EST
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-xs text-ink/40">
                      <Shield className="w-4 h-4" />
                      <span>Your information is safe and secure</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-ink/40 mt-1">
                      <Lock className="w-4 h-4" />
                      <span>We respect your privacy</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;