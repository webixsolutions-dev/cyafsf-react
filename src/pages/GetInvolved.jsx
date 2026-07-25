// frontend/src/pages/GetInvolved.jsx

import GetInvolvedHero from '../components/getInvolved/GetInvolvedHero.jsx';
import GetInvolvedVolunteer from '../components/getInvolved/GetInvolvedVolunteer.jsx';
import GetInvolvedPartner from '../components/getInvolved/GetInvolvedPartner.jsx';
import GetInvolvedDonate from '../components/getInvolved/GetInvolvedDonate.jsx';
import GetInvolvedCTA from '../components/getInvolved/GetInvolvedCTA.jsx';

export default function GetInvolved() {
  return (
    <>
      <GetInvolvedHero />
      <GetInvolvedVolunteer />
      <GetInvolvedPartner />
      <GetInvolvedDonate />
      <GetInvolvedCTA />
    </>
  );
}
