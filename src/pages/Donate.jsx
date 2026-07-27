// frontend/src/pages/Donate.jsx

import DonateHero from '../components/donate/DonateHero.jsx';
import DonateOptions from '../components/donate/DonateOptions.jsx';
import DonateImpact from '../components/donate/DonateImpact.jsx';
import DonateCTA from '../components/donate/DonateCTA.jsx';

export default function Donate() {
  return (
    <>
      <DonateHero />
      {/* <DonateOptions /> */}
      <DonateImpact />
      <DonateCTA />
    </>
  );
}
