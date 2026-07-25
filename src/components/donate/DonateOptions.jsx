// src/components/donate/DonateOptions.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, DollarSign, CreditCard, Shield,
  CheckCircle, ArrowRight, Calendar,
  Gift, Users, Award, Lock
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedCard';
import SectionTitle from '../shared/SectionTitle';

const DonateOptions = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const donationAmounts = [
    { amount: 25, description: 'Provides resources for one youth program session' },
    { amount: 50, description: 'Supports a family counselling session' },
    { amount: 100, description: 'Funds a community workshop event' },
    { amount: 250, description: 'Sponsors a youth mentorship program' },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your donation! You will be redirected to the secure payment page.');
    }, 1500);
  };

  const getDonationDescription = () => {
    const amount = selectedAmount || parseInt(customAmount) || 0;
    if (amount >= 250) return 'Sponsors a youth mentorship program';
    if (amount >= 100) return 'Funds a community workshop event';
    if (amount >= 50) return 'Supports a family counselling session';
    if (amount >= 25) return 'Provides resources for one youth program session';
    return 'Makes a difference in your community';
  };

  const getSelectedAmount = () => {
    return selectedAmount || parseInt(customAmount) || 0;
  };

  return (
    <section 
      id="donate-options" 
      className="py-16 bg-cream scroll-mt-20"
    >
      <div className="container">
        <SectionTitle
          title="Make a donation"
          subtitle="Your support helps us continue our mission of strengthening youth, families, and communities."
          tag="Donate"
          centered
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Donation Options */}
              <div>
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-gold" />
                  Choose your amount
                </h3>

                {/* Donation Amounts */}
                <div className="grid grid-cols-2 gap-3">
                  {donationAmounts.map((item) => (
                    <motion.button
                      key={item.amount}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAmountSelect(item.amount)}
                      className={`py-3 rounded-xl font-bold text-lg transition-all duration-300
                        ${selectedAmount === item.amount
                          ? 'bg-gold text-navy shadow-lg shadow-gold/30 border-2 border-gold'
                          : 'bg-gray-50 text-ink/70 hover:bg-gray-100 border-2 border-gray-200'
                        }`}
                    >
                      ${item.amount}
                    </motion.button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mt-3">
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 
                             focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none 
                             transition-all duration-300 text-lg"
                    min="1"
                  />
                </div>

                {/* Monthly Giving */}
                <div className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    id="monthly"
                    checked={isMonthly}
                    onChange={(e) => setIsMonthly(e.target.checked)}
                    className="w-5 h-5 text-gold rounded border-gray-300 focus:ring-gold"
                  />
                  <label htmlFor="monthly" className="text-sm text-ink/70 flex items-center gap-2 cursor-pointer">
                    <Calendar className="w-4 h-4 text-gold" />
                    Make this a monthly donation
                  </label>
                </div>

                {/* Donation Description */}
                <AnimatePresence>
                  {(selectedAmount || customAmount) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 bg-gold/10 rounded-xl border border-gold/20"
                    >
                      <p className="text-sm text-navy font-semibold">
                        ${getSelectedAmount()} {isMonthly && '(monthly)'}
                      </p>
                      <p className="text-sm text-ink/60 mt-1">
                        {getDonationDescription()}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column - Summary & Trust */}
              <div className="bg-cream rounded-xl p-6">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-coral" />
                  Your impact
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-navy">Direct support</p>
                      <p className="text-xs text-ink/50">92% of your donation goes directly to programs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-navy">Tax receipt</p>
                      <p className="text-xs text-ink/50">Official tax receipt provided for all donations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-navy">Secure payment</p>
                      <p className="text-xs text-ink/50">Your information is safe and protected</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-teal/10 rounded-xl border border-teal/20">
                  <p className="text-sm text-navy text-center">
                    <span className="font-bold">$0.92</span> of every dollar goes to programs
                  </p>
                </div>

                {/* Donate Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={!selectedAmount && !customAmount || isSubmitting}
                  className={`mt-4 w-full py-4 rounded-xl font-bold text-white transition-all duration-300
                    ${(selectedAmount || customAmount) && !isSubmitting
                      ? 'bg-gold text-navy hover:bg-gold/90 shadow-lg shadow-gold/30'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-navy" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Donate Now
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </motion.button>

                <div className="mt-3 flex items-center justify-center gap-1 text-xs text-ink/40">
                  <Lock className="w-3 h-3" />
                  Secure transaction • SSL encrypted
                </div>
              </div>
            </div>

            {/* Trust Badges - Bottom */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap justify-center gap-6 text-sm text-ink/50">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                Secure payment
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold" />
                Tax receipt provided
              </span>
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-gold" />
                100% transparent
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gold" />
                Supporting communities
              </span>
            </div>

            <p className="text-center text-xs text-ink/40 mt-4">
              Charitable Registration #: 12345-6789
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateOptions;