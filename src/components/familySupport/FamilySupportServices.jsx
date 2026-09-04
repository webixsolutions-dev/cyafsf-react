// src/components/familySupport/FamilySupportServices.jsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Users,
  Compass,
  GraduationCap,
  Phone,
  CalendarHeart,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import SectionTitle from '../shared/SectionTitle.jsx';

const services = [
  {
    icon: MessageCircle,
    title: 'Family Counselling',
    description:
      'Professional counselling to help families improve communication, resolve conflicts, and strengthen relationships.',
    iconBg: 'bg-teal',
  },
  {
    icon: Users,
    title: 'Parent Support Groups',
    description:
      'Connect with other parents, share experiences, and learn strategies in a supportive environment.',
    iconBg: 'bg-[#5A7A5E]',
  },
  {
    icon: Compass,
    title: 'Resource Navigation',
    description:
      'Personalized support to help families find and access community resources, services, and programs.',
    iconBg: 'bg-gold',
  },
  {
    icon: GraduationCap,
    title: 'Parent Education Workshops',
    description:
      'Workshops on parenting skills, child development, mental wellness, and educational support.',
    iconBg: 'bg-navy',
  },
  {
    icon: Phone,
    title: 'Crisis Support',
    description:
      'Immediate support and guidance for families facing urgent challenges or difficult situations.',
    iconBg: 'bg-coral',
  },
  {
    icon: CalendarHeart,
    title: 'Family Activities & Events',
    description:
      'Community events and activities that bring families together and build connections.',
    iconBg: 'bg-teal',
  },
];

const whoWeHelpItems = [
  'Families experiencing stress or conflict',
  'Single parents seeking support',
  'Families navigating mental health challenges',
  'Newcomer and immigrant families',
  'Families facing financial or housing instability',
  'Children and youth in need of guidance and support',
];

const collageImages = [
  {
    src: '/family/cyafsf_family_support_image_2.webp',
    alt: 'Mother hugging her young daughter',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/family/cyafsf_family_support_image_3.webp',
    alt: 'Diverse group of adults collaborating at a table',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/family/cyafsf_family_support_image_4.webp',
    alt: 'Two women having a supportive conversation on a sofa',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/family/cyafsf_family_support_image_5.webp',
    alt: 'Couple walking together with arms around each other in a park',
    className: 'col-span-1 row-span-1',
  },
];

export default function FamilySupportServices() {
  return (
    <>
      <section className="py-16 md:py-20 bg-cream">
        <div className="container">
          <SectionTitle
            title="How We Support "
            highlight="Families"
            subtitle="Our family support services are designed to meet families where they are and help them move forward with confidence and hope."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-5`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#E8EEF2]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Who We "
                highlight="Help"
                subtitle="We support families of all shapes and backgrounds, including:"
                centered={false}
                className="mb-6"
              />

              <ul className="space-y-3 mb-8">
                {whoWeHelpItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-ink text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-coral hover:bg-coral-dark text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base"
              >
                Learn More About Our Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute -top-4 -right-4 w-24 h-24 opacity-30 pointer-events-none hidden md:block"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #9CA3AF 1.5px, transparent 1.5px)',
                  backgroundSize: '12px 12px',
                }}
              />
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {collageImages.map((image) => (
                  <div
                    key={image.src}
                    className={`rounded-2xl overflow-hidden ${image.className}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover aspect-[4/3]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
