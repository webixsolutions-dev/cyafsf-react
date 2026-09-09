// frontend/src/pages/About.jsx

import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AboutHero from '../components/about/AboutHero.jsx';
import AboutMission from '../components/about/AboutMission.jsx';
import AboutValues from '../components/about/AboutValues.jsx';
import AboutStory from '../components/about/AboutStory.jsx';
import AboutLeadership from '../components/about/AboutLeaderShip.jsx';
import AboutServiceArea from '../components/about/AboutServiceArea.jsx';
import AboutGovernance from '../components/about/AboutGovernance.jsx'

export default function About() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('aboutHeroTitle') + ' | CYAFSF';
  }, [t]);

  return (
    <>
      <AboutHero />
      <div id="mission">
        <AboutMission />
      </div>
      <AboutValues />
      <AboutStory />
      <AboutLeadership />
      <AboutServiceArea />
      <AboutGovernance />
    </>
  );
}