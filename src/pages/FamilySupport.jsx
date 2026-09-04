// frontend/src/pages/FamilySupport.jsx

import { useEffect } from 'react';
import FamilySupportHero from '../components/familySupport/FamilySupportHero.jsx';
import FamilySupportServices from '../components/familySupport/FamilySupportServices.jsx';
import FamilySupportCTA from '../components/familySupport/FamilySupportCTA.jsx';
import FamilySupportContact from '../components/familySupport/FamilySupportContact.jsx';

export default function FamilySupport() {
  useEffect(() => {
    document.title = 'Family Support | CYAFSF';
  }, []);

  return (
    <>
      <FamilySupportHero />
      <FamilySupportServices />
      <FamilySupportCTA />
      <FamilySupportContact />
    </>
  );
}
