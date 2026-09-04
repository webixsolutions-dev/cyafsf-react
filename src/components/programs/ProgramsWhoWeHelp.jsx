// frontend/src/components/programs/ProgramsWhoWeHelp.jsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle.jsx';

const audienceTags = [
  'Children and youth',
  'Parents and caregivers',
  'Newcomer families',
  'Families experiencing hardship',
  'Students',
  'Young adults transitioning into adulthood',
  'Communities needing additional support'
];

export default function ProgramsWhoWeHelp() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container">
        <SectionTitle
          title="Who We "
          highlight="Help"
          subtitle="Support for youth, families, students, and communities across Canada."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="/programs/who-we-help.webp"
              alt="Diverse group of youth, adults, and seniors gathered together"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[400px]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3 mb-3">
              {audienceTags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2.5 bg-teal-light text-navy text-sm font-medium rounded-full text-center"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="block w-full px-4 py-2.5 bg-teal-light text-navy text-sm font-medium rounded-full text-center mb-8">
              {audienceTags[6]}
            </span>

            <div className="flex justify-center">
              <Link
                to="/resources"
                className="inline-block px-8 py-3.5 bg-teal hover:bg-teal/90 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base"
              >
                Find Support Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
