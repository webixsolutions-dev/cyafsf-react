// frontend/src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations = {
  en: {
    // --- HEADER ---
    foundationName: 'Canadian Youth and Family Support Foundation',
    contact: 'Contact',
    language: 'Français',
    donate: 'Donate',
    menu: 'Menu',
    
    // --- FOOTER ---
    footerExplore: 'Explore',
    footerAction: 'Take Action',
    footerContact: 'Contact',
    footerAbout: 'About Us',
    footerPrograms: 'Programs',
    footerFamilySupport: 'Family Support',
    footerEvents: 'Events',
    footerResources: 'Resources',
    footerNews: 'News & Stories',
    footerGetInvolved: 'Get Involved',
    footerVolunteer: 'Volunteer',
    footerPartner: 'Partner With Us',
    footerDonate: 'Donate',
    footerPrivacy: 'Privacy',
    footerAccessibility: 'Accessibility',
    footerTerms: 'Terms',
    footerRights: 'All rights reserved.',
    contactAddress: '495 Water St, St. John's, NL A1E 6B5',
    contactHours: 'Mon-Fri 9:00 AM - 5:00 PM EST',
    
    // --- HERO (Home) ---
    heroTitle: 'Stronger youth. Stronger families. Stronger communities.',
    heroSubtitle: 'CYAFSF works alongside young people and families to strengthen wellbeing, build skills, and create meaningful connections to community.',
    heroBtn1: 'Find Support',
    heroBtn2: 'Explore Programs',
    
    // --- AUDIENCE PATHWAYS (Home) ---
    audienceTitle: 'Find the support you need',
    audienceSubtitle: 'Whether you\'re a young person, a parent, or looking to help, we\'re here for you.',
    audienceYouth: 'I\'m a young person',
    audienceParent: 'I\'m a parent or caregiver',
    audienceHelp: 'I want to help',
    
    // --- PROGRAMS (Home) ---
    programsTitle: 'Our programs',
    programsSubtitle: 'Discover programs designed to support youth, families, and communities.',
    programsLearnMore: 'Learn more',
    
    // --- IMPACT (Home) ---
    impactTitle: 'Making a difference together',
    impactSubtitle: 'Every day, we work with youth, families, and communities to create positive change.',
    impactBtn: 'Learn more about our impact',
    
    // --- NEWS (Home) ---
    newsTitle: 'News & events',
    newsSubtitle: 'Stay up to date with the latest from CYAFSF.',
    newsViewAll: 'View all',
    newsReadMore: 'Read more',
    
    // --- GET INVOLVED (Home) ---
    getInvolvedTitle: 'Ready to make a difference?',
    getInvolvedSubtitle: 'Join us in building stronger youth, families, and communities. There are many ways to get involved.',
    getInvolvedVolunteer: 'Volunteer',
    getInvolvedPartner: 'Partner With Us',
    getInvolvedDonate: 'Donate Now',
    
    // --- FAMILY SUPPORT PAGE ---
    familySupportHeroTitle: 'Supporting families, building futures',
    familySupportHeroSub: 'Finding the right information can feel overwhelming. CYAFSF helps families understand available options, connect with trusted resources and take the next step.',
    familySupportCTA: 'Get Support Now',
    familySupportBrowse: 'Browse Resources',
    familySupportServices: 'Our family support services',
    familySupportServicesSub: 'Comprehensive support designed to strengthen families and build resilience.',
    familySupportService1: 'Family Counselling',
    familySupportService1Desc: 'Professional counselling to help families navigate challenges, improve communication, and build resilience together.',
    familySupportService2: 'Parent Support Groups',
    familySupportService2Desc: 'Supportive group sessions for parents and caregivers to share experiences, learn strategies, and build community.',
    familySupportService3: 'Resource Navigation',
    familySupportService3Desc: 'Personalized support to help families find and access community resources and services.',
    familySupportService4: 'Parent Education Workshops',
    familySupportService4Desc: 'Workshops covering parenting strategies, child development, and family wellbeing.',
    familySupportService5: 'Crisis Support',
    familySupportService5Desc: 'Immediate support and guidance for families in crisis situations.',
    familySupportService6: 'Family Activities & Events',
    familySupportService6Desc: 'Community events and activities designed to bring families together and build connections.',
    familySupportCTAReady: 'Ready to get support for your family?',
    familySupportCTASub: 'Our team is here to help you find the right services and resources for your family\'s unique needs.',
    familySupportCTAContact: 'Contact Us',
    familySupportCTABrowse: 'Browse Resources',
    familySupportCTACall: 'Call us',
    familySupportCTAEmail: 'Email us',
    familySupportCTAHours: 'Hours',
    familySupportCTALocation: 'Location',
    familySupportCTAHelp: 'How we can help',
    familySupportCTAComing: 'Coming soon: Online resource library and family support chat service.',
    
    // --- EVENTS PAGE ---
    eventsHeroTitle: 'Join us at our events',
    eventsHeroSub: 'Connect, learn, and grow at CYAFSF events designed for youth, families, and communities.',
    eventsAll: 'All Events',
    eventsRegister: 'Register Now',
    eventsDetails: 'Details',
    eventsFound: 'events found',
    eventsNoResults: 'No events found',
    eventsFilter: 'Filter',
    eventsSearch: 'Search events...',
    
    // --- RESOURCES PAGE ---
    resourcesHeroTitle: 'Find the resources you need',
    resourcesHeroSub: 'Practical guides, toolkits, and resources to support youth, families, and communities.',
    resourcesAll: 'All Resources',
    resourcesSearch: 'Search resources...',
    resourcesAccess: 'Access Resource',
    resourcesFound: 'resources found',
    resourcesNoResults: 'No resources found',
    resourcesFamily: 'Family',
    resourcesYouth: 'Youth',
    resourcesCommunity: 'Community',
    resourcesAllTypes: 'All Types',
    resourcesGuides: 'Guides',
    resourcesToolkits: 'Toolkits',
    resourcesVideos: 'Videos',
    resourcesDirectories: 'Directories',
    
    // --- GET INVOLVED PAGE ---
    getInvolvedPageTitle: 'Make a difference today',
    getInvolvedPageSub: 'There are many ways to support CYAFSF and help strengthen youth, families, and communities.',
    getInvolvedOptions: 'Ways to get involved',
    getInvolvedOptionsSub: 'Choose the path that\'s right for you and make a meaningful impact.',
    getInvolvedVolunteerTitle: 'Volunteer',
    getInvolvedVolunteerDesc: 'Give your time and skills to support youth and families in your community.',
    getInvolvedPartnerTitle: 'Partner With Us',
    getInvolvedPartnerDesc: 'Collaborate with CYAFSF to expand reach and create greater community impact.',
    getInvolvedDonateTitle: 'Donate',
    getInvolvedDonateDesc: 'Support our mission with a financial contribution that makes a lasting difference.',
    getInvolvedBtn: 'Get Started',
    getInvolvedBenefits: 'Benefits',
    getInvolvedRoles: 'Volunteer Roles',
    getInvolvedFlexible: 'Flexible Hours',
    getInvolvedRecognition: 'Recognition Program',
    
    // --- DONATE PAGE ---
    donateHeroTitle: 'Your gift makes a difference',
    donateHeroSub: 'Support youth, families, and communities across Canada with a donation that creates lasting change.',
    donateOptionsTitle: 'Make a donation',
    donateOptionsSub: 'Your support helps us continue our mission of strengthening youth, families, and communities.',
    donateChoose: 'Choose your amount',
    donateMonthly: 'Make this a monthly donation',
    donateImpact: 'Your impact',
    donateNow: 'Donate Now',
    donateSecure: 'Secure transaction • SSL encrypted',
    donateReg: 'Charitable Registration #: 12345-6789',
    donateDirect: 'Direct support',
    donateDirectDesc: '92% of your donation goes directly to programs',
    donateTax: 'Tax receipt',
    donateTaxDesc: 'Official tax receipt provided for all donations',
    donateSecurePayment: 'Secure payment',
    donateSecurePaymentDesc: 'Your information is safe and protected',
    donateTrust: '100% Transparent',
    donateTrustDesc: 'Annual reports and financial statements available',
    
    // --- CONTACT PAGE ---
    contactHeroTitle: 'Get in touch with us',
    contactHeroSub: 'We\'re here to help. Reach out and we\'ll connect you with the right support for your needs.',
    contactFormTitle: 'Send us a message',
    contactFormSub: 'We\'ll get back to you within 24 hours.',
    contactName: 'Full Name *',
    contactEmail: 'Email Address *',
    contactPhone: 'Phone Number',
    contactReason: 'Reason for Contacting',
    contactReasonPrograms: 'Programs & Services',
    contactReasonFamily: 'Family Support',
    contactReasonVolunteer: 'Volunteering',
    contactReasonPartnership: 'Partnership',
    contactReasonDonation: 'Donation',
    contactReasonOther: 'Other',
    contactMessage: 'Message *',
    contactConsent: 'I understand that my information will be used to respond to my inquiry and will not be shared with third parties.',
    contactSend: 'Send Message',
    contactSending: 'Sending...',
    contactSuccess: 'Thank you! Your message has been sent successfully.',
    contactInfoTitle: 'Contact Information',
    contactPhoneLabel: 'Phone',
    contactEmailLabel: 'Email',
    contactAddressLabel: 'Address',
    contactHoursLabel: 'Hours',
    contactSecure: 'Your information is safe and secure',
    contactPrivacy: 'We respect your privacy',
    
    // --- NEWS PAGE ---
    newsHeroTitle: 'Latest updates from CYAFSF',
    newsHeroSub: 'Stay informed about our programs, events, and the impact we\'re making together.',
    newsAll: 'All Stories',
    newsSearch: 'Search articles...',
    newsFound: 'articles found',
    newsReadFull: 'Read Full Story',
    newsSubscribe: 'Subscribe',
    newsNoResults: 'No articles found',
    newsFeatured: 'Featured',
    newsSubscribeTitle: 'Stay Connected',
    newsSubscribeSub: 'Don\'t miss out on our latest stories',
    newsSubscribeDesc: 'Subscribe to our newsletter and be the first to know about new programs, events, and community impact stories.',
    newsSubscribeNow: 'Subscribe Now',
    newsWhySubscribe: 'Why Subscribe?',
    newsTrust: 'Trusted Content',
    newsTrustDesc: 'Verified stories and updates from CYAFSF',
    newsReadAll: 'Read All Stories',
    
    // --- ABOUT PAGE ---
    aboutHeroTitle: 'Building stronger communities together',
    aboutHeroSub: 'CYAFSF works alongside young people and families to strengthen wellbeing, build skills, and create meaningful connections to community.',
    aboutStoryTitle: 'Our Story',
    aboutStoryDesc: 'Founded in 2010, CYAFSF began with a simple but powerful vision: that every young person and family in Canada should have access to the support they need to thrive.',
    aboutMission: 'Our Mission',
    aboutMissionDesc: 'To strengthen youth and families by providing accessible support, building skills, and creating meaningful connections to community.',
    aboutVision: 'Our Vision',
    aboutVisionDesc: 'A Canada where every young person and family has the support, belonging, and opportunity they need to thrive.',
    aboutValues: 'Our values',
    aboutValuesSub: 'The principles that guide everything we do.',
    aboutLeadership: 'Our leadership',
    aboutLeadershipSub: 'Meet the dedicated team guiding CYAFSF forward.',
    aboutServiceArea: 'Serving communities across Canada',
    aboutServiceAreaSub: 'CYAFSF provides support and programs in communities throughout Canada, with a focus on reaching those who need us most.',
    aboutGovernance: 'Committed to transparency and accountability',
    aboutGovernanceSub: 'CYAFSF is governed by a dedicated Board of Directors and operates with the highest standards of integrity and accountability.',
    aboutJoin: 'Join us in making a difference',
    aboutJoinSub: 'Learn more about how you can support our mission.',
  },
  
  fr: {
    // --- HEADER ---
    foundationName: 'Fondation canadienne pour la jeunesse et la famille',
    contact: 'Contactez-nous',
    language: 'English',
    donate: 'Faire un don',
    menu: 'Menu',
    
    // --- FOOTER ---
    footerExplore: 'Explorer',
    footerAction: 'Agir',
    footerContact: 'Contact',
    footerAbout: 'À propos',
    footerPrograms: 'Programmes',
    footerFamilySupport: 'Soutien familial',
    footerEvents: 'Événements',
    footerResources: 'Ressources',
    footerNews: 'Actualités',
    footerGetInvolved: 'S\'impliquer',
    footerVolunteer: 'Bénévole',
    footerPartner: 'Partenariat',
    footerDonate: 'Faire un don',
    footerPrivacy: 'Confidentialité',
    footerAccessibility: 'Accessibilité',
    footerTerms: 'Conditions',
    footerRights: 'Tous droits réservés.',
    contactAddress: '123 Rue Support, St. John's, NL A1E 6B5',
    contactHours: 'Lun-Ven 9h00 - 17h00 HNE',
    
    // --- HERO (Home) ---
    heroTitle: 'Des jeunes plus forts. Des familles plus fortes. Des communautés plus fortes.',
    heroSubtitle: 'La FCCJF travaille aux côtés des jeunes et des familles pour renforcer le bien-être, développer les compétences et créer des liens significatifs avec la communauté.',
    heroBtn1: 'Trouver du soutien',
    heroBtn2: 'Explorer les programmes',
    
    // --- AUDIENCE PATHWAYS (Home) ---
    audienceTitle: 'Trouvez le soutien dont vous avez besoin',
    audienceSubtitle: 'Que vous soyez un jeune, un parent ou que vous cherchiez à aider, nous sommes là pour vous.',
    audienceYouth: 'Je suis un jeune',
    audienceParent: 'Je suis un parent ou un aidant',
    audienceHelp: 'Je veux aider',
    
    // --- PROGRAMS (Home) ---
    programsTitle: 'Nos programmes',
    programsSubtitle: 'Découvrez des programmes conçus pour soutenir les jeunes, les familles et les communautés.',
    programsLearnMore: 'En savoir plus',
    
    // --- IMPACT (Home) ---
    impactTitle: 'Ensemble, nous faisons une différence',
    impactSubtitle: 'Chaque jour, nous travaillons avec les jeunes, les familles et les communautés pour créer un changement positif.',
    impactBtn: 'En savoir plus sur notre impact',
    
    // --- NEWS (Home) ---
    newsTitle: 'Actualités et événements',
    newsSubtitle: 'Restez au courant des dernières nouvelles de la FCCJF.',
    newsViewAll: 'Voir tout',
    newsReadMore: 'Lire la suite',
    
    // --- GET INVOLVED (Home) ---
    getInvolvedTitle: 'Prêt à faire une différence ?',
    getInvolvedSubtitle: 'Joignez-vous à nous pour bâtir des jeunes, des familles et des communautés plus forts. Il y a plusieurs façons de vous impliquer.',
    getInvolvedVolunteer: 'Bénévole',
    getInvolvedPartner: 'Partenariat',
    getInvolvedDonate: 'Faire un don',
    
    // --- FAMILY SUPPORT PAGE ---
    familySupportHeroTitle: 'Soutenir les familles, construire l\'avenir',
    familySupportHeroSub: 'Trouver les bonnes informations peut sembler accablant. La FCCJF aide les familles à comprendre les options disponibles, à se connecter avec des ressources de confiance et à passer à l\'étape suivante.',
    familySupportCTA: 'Obtenir du soutien',
    familySupportBrowse: 'Parcourir les ressources',
    familySupportServices: 'Nos services de soutien familial',
    familySupportServicesSub: 'Un soutien complet conçu pour renforcer les familles et développer la résilience.',
    familySupportService1: 'Counseling familial',
    familySupportService1Desc: 'Counseling professionnel pour aider les familles à surmonter les défis, améliorer la communication et renforcer la résilience.',
    familySupportService2: 'Groupes de soutien parental',
    familySupportService2Desc: 'Sessions de groupe pour les parents et les aidants afin de partager leurs expériences, apprendre des stratégies et créer une communauté.',
    familySupportService3: 'Navigation dans les ressources',
    familySupportService3Desc: 'Soutien personnalisé pour aider les familles à trouver et à accéder aux ressources et services communautaires.',
    familySupportService4: 'Ateliers d\'éducation parentale',
    familySupportService4Desc: 'Ateliers couvrant les stratégies parentales, le développement de l\'enfant et le bien-être familial.',
    familySupportService5: 'Soutien en cas de crise',
    familySupportService5Desc: 'Soutien et orientation immédiats pour les familles en situation de crise.',
    familySupportService6: 'Activités et événements familiaux',
    familySupportService6Desc: 'Événements et activités communautaires conçus pour rassembler les familles et créer des liens.',
    familySupportCTAReady: 'Prêt à obtenir du soutien pour votre famille ?',
    familySupportCTASub: 'Notre équipe est là pour vous aider à trouver les services et ressources adaptés aux besoins uniques de votre famille.',
    familySupportCTAContact: 'Contactez-nous',
    familySupportCTABrowse: 'Parcourir les ressources',
    familySupportCTACall: 'Appelez-nous',
    familySupportCTAEmail: 'Envoyez-nous un email',
    familySupportCTAHours: 'Horaires',
    familySupportCTALocation: 'Emplacement',
    familySupportCTAHelp: 'Comment nous pouvons vous aider',
    familySupportCTAComing: 'À venir : Bibliothèque de ressources en ligne et service de chat de soutien familial.',
    
    // --- EVENTS PAGE ---
    eventsHeroTitle: 'Participez à nos événements',
    eventsHeroSub: 'Connectez-vous, apprenez et grandissez lors des événements de la FCCJF conçus pour les jeunes, les familles et les communautés.',
    eventsAll: 'Tous les événements',
    eventsRegister: 'S\'inscrire',
    eventsDetails: 'Détails',
    eventsFound: 'événements trouvés',
    eventsNoResults: 'Aucun événement trouvé',
    eventsFilter: 'Filtrer',
    eventsSearch: 'Rechercher des événements...',
    
    // --- RESOURCES PAGE ---
    resourcesHeroTitle: 'Trouvez les ressources dont vous avez besoin',
    resourcesHeroSub: 'Guides pratiques, trousses d\'outils et ressources pour soutenir les jeunes, les familles et les communautés.',
    resourcesAll: 'Toutes les ressources',
    resourcesSearch: 'Rechercher des ressources...',
    resourcesAccess: 'Accéder à la ressource',
    resourcesFound: 'ressources trouvées',
    resourcesNoResults: 'Aucune ressource trouvée',
    resourcesFamily: 'Famille',
    resourcesYouth: 'Jeunes',
    resourcesCommunity: 'Communauté',
    resourcesAllTypes: 'Tous les types',
    resourcesGuides: 'Guides',
    resourcesToolkits: 'Trousses d\'outils',
    resourcesVideos: 'Vidéos',
    resourcesDirectories: 'Répertoires',
    
    // --- GET INVOLVED PAGE ---
    getInvolvedPageTitle: 'Faites une différence aujourd\'hui',
    getInvolvedPageSub: 'Il y a plusieurs façons de soutenir la FCCJF et d\'aider à renforcer les jeunes, les familles et les communautés.',
    getInvolvedOptions: 'Façons de vous impliquer',
    getInvolvedOptionsSub: 'Choisissez la voie qui vous convient et faites un impact significatif.',
    getInvolvedVolunteerTitle: 'Bénévole',
    getInvolvedVolunteerDesc: 'Donnez de votre temps et de vos compétences pour soutenir les jeunes et les familles dans votre communauté.',
    getInvolvedPartnerTitle: 'Partenariat',
    getInvolvedPartnerDesc: 'Collaborez avec la FCCJF pour étendre votre portée et créer un plus grand impact communautaire.',
    getInvolvedDonateTitle: 'Faire un don',
    getInvolvedDonateDesc: 'Soutenez notre mission avec une contribution financière qui fait une différence durable.',
    getInvolvedBtn: 'Commencer',
    getInvolvedBenefits: 'Avantages',
    getInvolvedRoles: 'Rôles bénévoles',
    getInvolvedFlexible: 'Horaires flexibles',
    getInvolvedRecognition: 'Programme de reconnaissance',
    
    // --- DONATE PAGE ---
    donateHeroTitle: 'Votre don fait une différence',
    donateHeroSub: 'Soutenez les jeunes, les familles et les communautés à travers le Canada avec un don qui crée un changement durable.',
    donateOptionsTitle: 'Faire un don',
    donateOptionsSub: 'Votre soutien nous aide à poursuivre notre mission de renforcement des jeunes, des familles et des communautés.',
    donateChoose: 'Choisissez votre montant',
    donateMonthly: 'Faire de ce don un don mensuel',
    donateImpact: 'Votre impact',
    donateNow: 'Faire un don',
    donateSecure: 'Transaction sécurisée • Chiffré SSL',
    donateReg: 'Numéro d\'enregistrement de bienfaisance : 12345-6789',
    donateDirect: 'Soutien direct',
    donateDirectDesc: '92 % de votre don va directement aux programmes',
    donateTax: 'Reçu fiscal',
    donateTaxDesc: 'Reçu fiscal officiel fourni pour tous les dons',
    donateSecurePayment: 'Paiement sécurisé',
    donateSecurePaymentDesc: 'Vos informations sont protégées',
    donateTrust: '100 % Transparent',
    donateTrustDesc: 'Rapports annuels et états financiers disponibles',
    
    // --- CONTACT PAGE ---
    contactHeroTitle: 'Contactez-nous',
    contactHeroSub: 'Nous sommes là pour vous aider. Contactez-nous et nous vous mettrons en relation avec le bon soutien pour vos besoins.',
    contactFormTitle: 'Envoyez-nous un message',
    contactFormSub: 'Nous vous répondrons dans les 24 heures.',
    contactName: 'Nom complet *',
    contactEmail: 'Adresse e-mail *',
    contactPhone: 'Numéro de téléphone',
    contactReason: 'Raison du contact',
    contactReasonPrograms: 'Programmes et services',
    contactReasonFamily: 'Soutien familial',
    contactReasonVolunteer: 'Bénévolat',
    contactReasonPartnership: 'Partenariat',
    contactReasonDonation: 'Don',
    contactReasonOther: 'Autre',
    contactMessage: 'Message *',
    contactConsent: 'Je comprends que mes informations seront utilisées pour répondre à ma demande et ne seront pas partagées avec des tiers.',
    contactSend: 'Envoyer le message',
    contactSending: 'Envoi en cours...',
    contactSuccess: 'Merci ! Votre message a été envoyé avec succès.',
    contactInfoTitle: 'Coordonnées',
    contactPhoneLabel: 'Téléphone',
    contactEmailLabel: 'E-mail',
    contactAddressLabel: 'Adresse',
    contactHoursLabel: 'Horaires',
    contactSecure: 'Vos informations sont en sécurité',
    contactPrivacy: 'Nous respectons votre vie privée',
    
    // --- NEWS PAGE ---
    newsHeroTitle: 'Dernières nouvelles de la FCCJF',
    newsHeroSub: 'Restez informé de nos programmes, événements et de l\'impact que nous créons ensemble.',
    newsAll: 'Toutes les histoires',
    newsSearch: 'Rechercher des articles...',
    newsFound: 'articles trouvés',
    newsReadFull: 'Lire l\'article complet',
    newsSubscribe: 'S\'abonner',
    newsNoResults: 'Aucun article trouvé',
    newsFeatured: 'À la une',
    newsSubscribeTitle: 'Restez connecté',
    newsSubscribeSub: 'Ne manquez pas nos dernières histoires',
    newsSubscribeDesc: 'Abonnez-vous à notre newsletter pour être le premier informé des nouveaux programmes, événements et histoires d\'impact communautaire.',
    newsSubscribeNow: 'S\'abonner maintenant',
    newsWhySubscribe: 'Pourquoi s\'abonner ?',
    newsTrust: 'Contenu de confiance',
    newsTrustDesc: 'Histoires et mises à jour vérifiées de la FCCJF',
    newsReadAll: 'Lire toutes les histoires',
    
    // --- ABOUT PAGE ---
    aboutHeroTitle: 'Bâtir des communautés plus fortes ensemble',
    aboutHeroSub: 'La FCCJF travaille aux côtés des jeunes et des familles pour renforcer le bien-être, développer les compétences et créer des liens significatifs avec la communauté.',
    aboutStoryTitle: 'Notre histoire',
    aboutStoryDesc: 'Fondée en 2010, la FCCJF a commencé avec une vision simple mais puissante : que chaque jeune et chaque famille au Canada ait accès au soutien dont ils ont besoin pour s\'épanouir.',
    aboutMission: 'Notre mission',
    aboutMissionDesc: 'Renforcer les jeunes et les familles en offrant un soutien accessible, en développant des compétences et en créant des liens significatifs avec la communauté.',
    aboutVision: 'Notre vision',
    aboutVisionDesc: 'Un Canada où chaque jeune et chaque famille a le soutien, le sentiment d\'appartenance et les opportunités dont ils ont besoin pour s\'épanouir.',
    aboutValues: 'Nos valeurs',
    aboutValuesSub: 'Les principes qui guident tout ce que nous faisons.',
    aboutLeadership: 'Notre direction',
    aboutLeadershipSub: 'Rencontrez l\'équipe dévouée qui guide la FCCJF vers l\'avenir.',
    aboutServiceArea: 'Servir les communautés à travers le Canada',
    aboutServiceAreaSub: 'La FCCJF offre du soutien et des programmes dans les communautés à travers le Canada, en mettant l\'accent sur l\'atteinte de ceux qui ont le plus besoin de nous.',
    aboutGovernance: 'Engagés envers la transparence et la responsabilité',
    aboutGovernanceSub: 'La FCCJF est gouvernée par un conseil d\'administration dévoué et fonctionne selon les normes les plus élevées d\'intégrité et de responsabilité.',
    aboutJoin: 'Joignez-vous à nous pour faire une différence',
    aboutJoinSub: 'Apprenez-en plus sur comment vous pouvez soutenir notre mission.',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('cyafsf-language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('cyafsf-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};