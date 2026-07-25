// frontend/src/pages/About.jsx

import AboutHero from '../components/about/AboutHero.jsx';
import AboutMission from '../components/about/AboutMission.jsx';
import AboutValues from '../components/about/AboutValues.jsx';
import AboutStory from '../components/about/AboutStory.jsx';
import AboutLeadership from '../components/about/AboutLeaderShip.jsx';
import AboutServiceArea from '../components/about/AboutServiceArea.jsx';
import AboutGovernance from '../components/about/AboutGovernance.jsx';
import AboutCTA from '../components/about/AboutCTA.jsx';

export default function About() {
  const scrollToMission = () => {
    const element = document.getElementById('mission');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AboutHero onScrollToMission={scrollToMission} />
      <div id="mission">
        <AboutMission />
      </div>
      <AboutValues />
      <AboutStory />
      <AboutLeadership />
      <AboutServiceArea />
      <AboutGovernance />
      <AboutCTA />
    </>
  );
}