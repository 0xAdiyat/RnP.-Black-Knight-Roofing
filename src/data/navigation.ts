export const quickLinks = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about-us' },
  { label: 'Past Work', url: '/gallery' },
  { label: 'Financing', url: '/financing' },
  { label: 'Blogs', url: '/blogs' },
  { label: 'FAQs', url: '/faqs' },
  { label: 'Services', url: '/services' },
  { label: 'Service Areas', url: '/service-areas' },
  { label: 'Contact', url: '/contact-us' },
];

export const servicesLinks = [
  { label: 'Residential Roofing', url: '/services/residential-roofing-co' },
  { label: 'Commercial Roofing', url: '/services/commercial-roofing-co' },
  { label: 'Storm Damage Repair', url: '/services/storm-damage-repair-co' },
  { label: 'Roof Replacement', url: '/services/roof-replacement-services-co' },
  { label: 'Gutters & Drainage', url: '/services/gutters-co' },
  { label: 'Siding Installation', url: '/services/siding-co' },
  { label: 'Window Replacement', url: '/services/window-replacement-services-co' },
  { label: 'Roof Inspection', url: '/services/hail-damage-repair-co' },
  { label: 'Metal Roofing', url: '/services/metal-roofing-co' },
];

export const allLinks = [
  ...quickLinks.map(l => ({ ...l, category: 'Quick Links' })),
  ...servicesLinks.map(l => ({ ...l, category: 'Our Services' })),
  { label: 'Privacy Policy', url: '/privacy-policy', category: 'Legal' },
  { label: 'Terms of Use', url: '/terms-of-use', category: 'Legal' },
  { label: 'Accessibility', url: '/accessibility', category: 'Legal' },
  { label: 'Company Info', url: '/company-info', category: 'Legal' },
];
