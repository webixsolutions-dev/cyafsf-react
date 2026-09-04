// frontend/src/components/programs/ProgramsCategories.jsx

import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

const categories = [
  {
    title: 'Youth Empowerment Programs',
    image: '/programs/youth-empowerment.webp',
    intro: 'Helping young people develop:',
    bullets: [
      'Confidence',
      'Leadership skills',
      'Emotional awareness',
      'Positive decision-making skills'
    ],
    linkText: 'Explore Youth Programs',
    linkType: 'scroll',
    linkTarget: 'programs-designed'
  },
  {
    title: 'Family Support Services',
    image: '/programs/family-support.webp',
    intro: 'Providing:',
    bullets: [
      'Parenting resources',
      'Family wellness education',
      'Community connections',
      'Support navigation'
    ],
    linkText: 'Access Family Resources',
    linkType: 'route',
    linkTarget: '/family-support'
  },
  {
    title: 'Mental Wellness Education',
    image: '/programs/mental-wellness.webp',
    intro: 'Helping individuals understand:',
    bullets: [
      'Stress management',
      'Emotional regulation',
      'Healthy coping strategies',
      'Self-care practices'
    ],
    linkText: 'Learn More',
    linkType: 'scroll',
    linkTarget: 'mental-wellness-awareness'
  }
];

function CategoryLink({ category }) {
  const linkClasses =
    'inline-flex items-center gap-1 text-teal font-semibold text-sm hover:text-teal/80 transition-colors group/link';

  if (category.linkType === 'route') {
    return (
      <Link to={category.linkTarget} className={linkClasses}>
        {category.linkText}
        <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
      </Link>
    );
  }

  const handleScroll = () => {
    const element = document.getElementById(category.linkTarget);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button type="button" onClick={handleScroll} className={linkClasses}>
      {category.linkText}
      <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
    </button>
  );
}

export default function ProgramsCategories() {
  return (
    <section id="program-categories" className="py-16 md:py-20 bg-white">
      <div className="container">
        <SectionTitle
          title="Program "
          highlight="Categories"
          subtitle="Programs and resources that strengthen mental wellness, resilience, and family connections."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <AnimatedCard
              key={category.title}
              variant="default"
              delay={index * 0.15}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3">{category.title}</h3>
                <p className="text-ink/70 text-sm mb-3">{category.intro}</p>
                <ul className="space-y-2 mb-5">
                  {category.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-ink/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <CategoryLink category={category} />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
