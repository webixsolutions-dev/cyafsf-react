import { useEffect, useState } from 'react';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import { fetchPrograms } from '../../lib/api.js';

const ACCENTS = ['teal', 'coral', 'gold'];

export default function FeaturedPrograms() {
  const [programs, setPrograms] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetchPrograms()
      .then((data) => { setPrograms(data.slice(0, 3)); setStatus('ready'); })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow">Featured programs</p>
            <h2 className="text-2xl md:text-3xl">Three ways we're showing up this season</h2>
          </div>
          <Button to="/programs" variant="secondary">View all programs</Button>
        </div>

        {status === 'loading' && <p>Loading programs&hellip;</p>}
        {status === 'error' && <p>Programs are temporarily unavailable.</p>}

        {status === 'ready' && (
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <Card key={p.id} tag={p.category} accent={ACCENTS[i % ACCENTS.length]} title={p.title}>
                <p>{p.summary}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
