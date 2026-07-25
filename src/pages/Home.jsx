// frontend/src/pages/Home.jsx

import HomeHero from '../components/home/HomeHero.jsx';
import HomeAudience from '../components/home/HomeAudience.jsx';
import HomePrograms from '../components/home/HomeProgram.jsx';
import HomeMission from '../components/home/HomeMission.jsx';
import HomeImpact from '../components/home/HomeImpact.jsx';
import HomeNews from '../components/home/HomeNews.jsx';
import HomeCTA from '../components/home/HomeCTA.jsx';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAudience />
      <HomePrograms />
      <HomeMission />
      <HomeImpact />
      <HomeNews />
      <HomeCTA />
    </>
  );
}