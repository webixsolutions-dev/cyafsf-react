// frontend/src/pages/Programs.jsx

import { useEffect } from 'react';
import ProgramsHero from '../components/programs/ProgramsHero.jsx';
import ProgramsCategories from '../components/programs/ProgramsCategories.jsx';
import ProgramsGrid from '../components/programs/ProgramsGrid.jsx';
import ProgramsWhoWeHelp from '../components/programs/ProgramsWhoWeHelp.jsx';
import ProgramsCTA from '../components/programs/ProgramsCTA.jsx';

export default function Programs() {
  useEffect(() => {
    document.title = 'Programs & Services | CYAFSF';
  }, []);

  return (
    <>
      <ProgramsHero />
      <ProgramsCategories />
      <ProgramsGrid />
      <ProgramsWhoWeHelp />
      <ProgramsCTA />
    </>
  );
}
