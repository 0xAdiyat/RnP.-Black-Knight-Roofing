import type { CTAData } from './types';
import roof from '@/assets/roof.avif';

export const residentialCTA: CTAData = {
  badge: 'Residential Experts',
  title: 'Give Your Home the Protection It Deserves',
  excerpt: '“We don’t just install roofs; we provide peace of mind for Colorado families. Our quality is our signature.”',
  author: {
    name: 'Adam Knight',
    avatar: '/placeholders/profile.png',
    title: ', President & Owner',
  },
  button: {
    label: 'Get Free Estimate',
    href: '/contact-us',
  },
  handwrittenText: 'Veteran Owned<br />Quality Guaranteed',
  backgroundImage: roof,
};

export const commercialCTA: CTAData = {
  badge: 'Commercial Services',
  title: 'Durable Roofing Solutions for Your Business',
  excerpt: '“We understand that your business can’t stop for a roof leak. We provide fast, reliable commercial roofing that lasts.”',
  author: {
    name: 'Adam Knight',
    avatar: '/placeholders/profile.png',
    title: ', President & Owner',
  },
  button: {
    label: 'Request Consultation',
    href: '/contact-us',
  },
  handwrittenText: 'Minimize Downtime<br />Maximize Protection',
  backgroundImage: roof,
};

export const stormCTA: CTAData = {
  badge: 'Storm Restoration',
  title: 'Fast, Professional Help After the Storm',
  excerpt: '“Storm damage is stressful. We handle the documentation and the repairs so you can get back to normal quickly.”',
  author: {
    name: 'Adam Knight',
    avatar: '/placeholders/profile.png',
    title: ', President & Owner',
  },
  button: {
    label: 'Schedule Inspection',
    href: '/contact-us',
  },
  handwrittenText: 'Insurance Specialist<br />Free Damage Assessment',
  backgroundImage: roof,
};
