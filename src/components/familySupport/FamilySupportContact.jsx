// src/components/familySupport/FamilySupportContact.jsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Users } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: [
      { text: '403-404-8969', href: 'tel:+14034048969' },
      { text: 'Mon–Fri: 9AM – 5PM' },
    ],
    iconBg: 'bg-teal',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [
      { text: 'family@cyafsf.com', href: 'mailto:family@cyafsf.com' },
      { text: 'We reply within 1–2 business days.' },
    ],
    iconBg: 'bg-[#5A7A5E]',
  },
  {
    icon: MapPin,
    title: 'Location',
    lines: [{ text: '495 Water St, Ottawa' }, { text: 'Ontario, Canada' }],
    iconBg: 'bg-gold',
  },
  {
    icon: Users,
    title: 'Find Support Today',
    lines: [
      { text: "You don't have to face challenges alone." },
      { text: "We're here to help.", href: '/contact' },
    ],
    iconBg: 'bg-coral',
  },
];

export default function FamilySupportContact() {
  return (
    <section className="py-14 md:py-16 bg-cream">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-14 h-14 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-navy font-bold text-base mb-2">{item.title}</h3>
              {item.lines.map((line) =>
                line.href ? (
                  line.href.startsWith('/') ? (
                    <Link
                      key={line.text}
                      to={line.href}
                      className="block text-gray-600 text-sm leading-relaxed hover:text-teal transition-colors"
                    >
                      {line.text}
                    </Link>
                  ) : (
                    <a
                      key={line.text}
                      href={line.href}
                      className="block text-gray-600 text-sm leading-relaxed hover:text-teal transition-colors"
                    >
                      {line.text}
                    </a>
                  )
                ) : (
                  <p key={line.text} className="text-gray-600 text-sm leading-relaxed">
                    {line.text}
                  </p>
                )
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
