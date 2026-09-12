// src/components/contact/ContactForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, User, Mail, Phone, 
  CheckCircle, MapPin, Clock,
  ChevronDown
} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    { value: '', label: 'Select a subject' },
    { value: 'programs', label: 'Programs & Services' },
    { value: 'family-support', label: 'Family Support Services' },
    { value: 'volunteer', label: 'Volunteering Opportunities' },
    { value: 'partnership', label: 'Corporate & Community Partnership' },
    { value: 'donation', label: 'Donations & Sponsorship' },
    { value: 'general', label: 'General Inquiry' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate submission or send email
      await new Promise(res => setTimeout(res, 1000));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setErrors({ form: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white text-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Send us a message Form */}
          <div className="lg:col-span-7 self-start order-1">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#082330] tracking-tight">
                Send us a message
              </h2>
              <p className="text-slate-500 text-sm mt-1 mb-8">
                We'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full pl-10 pr-4 py-3 rounded-full border text-sm bg-white outline-none transition-all ${
                          errors.name ? 'border-[#EF4444]' : 'border-slate-200 focus:border-[#0D6863] focus:ring-2 focus:ring-teal-100'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[#EF4444] text-xs mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-full border text-sm bg-white outline-none transition-all ${
                          errors.email ? 'border-[#EF4444]' : 'border-slate-200 focus:border-[#0D6863] focus:ring-2 focus:ring-teal-100'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[#EF4444] text-xs mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="403-123-4567"
                      className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 text-sm bg-white outline-none focus:border-[#0D6863] focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Subject Select */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Subject <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full pl-4 pr-10 py-3 rounded-full border text-sm bg-white appearance-none outline-none transition-all ${
                        errors.subject ? 'border-[#EF4444]' : 'border-slate-200 focus:border-[#0D6863] focus:ring-2 focus:ring-teal-100'
                      }`}
                    >
                      {subjects.map((subj) => (
                        <option key={subj.value} value={subj.value}>
                          {subj.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                  {errors.subject && (
                    <p className="text-[#EF4444] text-xs mt-1 font-medium">{errors.subject}</p>
                  )}
                </div>

                {/* Row 4: Message Textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Message <span className="text-[#EF4444]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`w-full p-4 rounded-2xl border text-sm bg-white outline-none transition-all resize-none ${
                      errors.message ? 'border-[#EF4444]' : 'border-slate-200 focus:border-[#0D6863] focus:ring-2 focus:ring-teal-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[#EF4444] text-xs mt-1 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0B3A42] hover:bg-[#07282F] text-white font-bold rounded-full px-8 py-3.5 flex items-center gap-2.5 shadow-md transition-all text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>
                </div>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-sm font-medium"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="lg:col-span-5 self-start order-3 lg:order-2">
            <div className="bg-[#FAF6EE] border border-[#F2E5D5] rounded-3xl p-5 md:p-6 w-full">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#082330] tracking-tight">
                Contact Information
              </h2>
              <p className="text-slate-500 text-sm mt-1 mb-5">
                Reach us directly during office hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0D6863] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-extrabold text-xs text-[#082330]">Phone</p>
                    <a href="tel:4034048969" className="text-xs text-slate-600 hover:text-[#0D6863] transition-colors mt-0.5 block">
                      403-404-8969
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0D6863] flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-extrabold text-xs text-[#082330]">Email</p>
                    <a href="mailto:info@cyafsf.com" className="text-xs text-slate-600 hover:text-[#0D6863] transition-colors mt-0.5 block break-all">
                      info@cyafsf.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0D6863] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-extrabold text-xs text-[#082330]">Address</p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      EastBid, 495 Water St #303
                      <br />
                      St. John&apos;s, NL A1E 6B5
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0D6863] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-extrabold text-xs text-[#082330]">Office Hours</p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Mon-Fri: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider & Socials */}
              <div className="mt-5 pt-4 border-t border-slate-200/80">
                <p className="font-extrabold text-xs text-[#082330] mb-2.5">
                  Follow Us
                </p>
                <div className="flex items-center gap-2.5">
                  <a href="#facebook" className="w-8 h-8 rounded-full bg-[#0D6863] hover:bg-[#07282F] text-white flex items-center justify-center text-xs transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="#twitter" className="w-8 h-8 rounded-full bg-[#0D6863] hover:bg-[#07282F] text-white flex items-center justify-center text-xs transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#instagram" className="w-8 h-8 rounded-full bg-[#0D6863] hover:bg-[#07282F] text-white flex items-center justify-center text-xs transition-colors">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width map — below form + contact row */}
          <div className="lg:col-span-12 mt-10 md:mt-12 order-2 lg:order-3">
            <div className="bg-[#FAF6EE] border border-[#F2E5D5] rounded-3xl p-5 md:p-6 w-full shadow-sm">
              <p className="font-extrabold text-xs text-[#082330] mb-2.5">
                Our Location
              </p>
              <div className="w-full overflow-hidden rounded-2xl border border-[#F2E5D5] h-[300px] md:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d-52.7134639!3d47.5545453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca34d822d533d%3A0x5cf5e0901a7c9cb4!2sEastBid!5e0!3m2!1sen!2sca"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="EastBid Office Location Map"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
