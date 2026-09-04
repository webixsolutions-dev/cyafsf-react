// frontend/src/components/programs/ProgramsGrid.jsx

import SectionTitle from '../shared/SectionTitle.jsx';
import AnimatedCard from '../shared/AnimatedCard.jsx';

const programs = [
  {
    id: 'youth-resilience-initiative',
    title: 'Youth Resilience Initiative',
    image: '/programs/youth-resilience-initiative.webp',
    description: 'Help youth develop emotional strength and life skills.',
    bullets: [
      'Confidence-building workshops',
      'Peer support groups',
      'Leadership programs',
      'Career readiness support'
    ]
  },
  {
    id: 'family-wellness-program',
    title: 'Family Wellness Program',
    image: '/programs/family-wellness-program.webp',
    description: 'Strengthen family relationships.',
    bullets: [
      'Parenting education',
      'Family communication workshops',
      'Resource navigation',
      'Community events'
    ]
  },
  {
    id: 'mental-wellness-awareness',
    title: 'Mental Wellness Awareness Campaign',
    image: '/programs/mental-wellness-awareness.webp',
    description: 'Reduce stigma and increase understanding.',
    bullets: [
      'School presentations',
      'Community seminars',
      'Online education',
      'Awareness campaigns'
    ]
  },
  {
    id: 'youth-mentorship-program',
    title: 'Youth Mentorship Program',
    image: '/programs/youth-mentorship.webp',
    description: 'Connecting youth with positive mentors who provide:',
    bullets: [
      'Guidance',
      'Encouragement',
      'Goal setting',
      'Personal development support'
    ]
  },
  {
    id: 'community-support-network',
    title: 'Community Support Network',
    image: '/programs/community-support-network.webp',
    description: 'Creating partnerships that connect families with:',
    bullets: [
      'Local resources',
      'Education services',
      'Employment support',
      'Community programs'
    ]
  },
  {
    id: 'crisis-resource-navigation',
    title: 'Crisis & Support Resource Navigation',
    image: '/programs/crisis-resource-navigation.webp',
    description:
      'Providing information and connections to appropriate professional and community resources.',
    bullets: []
  }
];

export default function ProgramsGrid() {
  return (
    <section id="programs-designed" className="py-16 md:py-20 bg-gray-50">
      <div className="container">
        <SectionTitle
          title="Programs Designed to "
          highlight="Create Change"
          subtitle="Practical support designed to build confidence, strengthen families, and connect communities."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <AnimatedCard
              key={program.id}
              delay={index * 0.1}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow scroll-mt-24"
            >
              <div id={program.id}>
              <div className="flex flex-row gap-4 mb-4">
                <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-[15px] lg:text-lg font-bold text-navy mb-1.5 leading-tight whitespace-nowrap">
                    {program.title}
                  </h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{program.description}</p>
                </div>
              </div>

              {program.bullets.length > 0 && (
                <ul className="space-y-2">
                  {program.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-ink/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span className="leading-relaxed whitespace-nowrap">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
