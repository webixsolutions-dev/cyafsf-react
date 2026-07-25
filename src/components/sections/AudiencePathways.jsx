import { Link } from 'react-router-dom';

const PATHWAYS = [
  { to: '/programs', q: "I'm a young person", d: 'Explore programs and opportunities built around what you need right now.', border: 'border-t-gold' },
  { to: '/family-support', q: "I'm a parent or caregiver", d: 'Find guidance, referrals and practical support for your family.', border: 'border-t-coral' },
  { to: '/get-involved', q: 'I want to help', d: 'Volunteer, partner or give &mdash; see the ways you can make a difference.', border: 'border-t-teal' },
];

export default function AudiencePathways() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <p className="eyebrow">Find your way in</p>
        <h2 className="text-2xl md:text-3xl mb-6">Wherever you're starting from, there's a next step here.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PATHWAYS.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`bg-white border border-cream border-t-4 ${p.border} rounded-md p-6 flex flex-col gap-2
                          hover:-translate-y-1 hover:shadow-lg hover:border-navy transition`}
            >
              <span className="font-bold text-navy text-lg">{p.q}</span>
              <p className="text-ink">{p.d}</p>
              <span className="mt-auto font-bold text-coral">Explore &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
