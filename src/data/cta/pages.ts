import type { CTAData } from './types';
import roof from '@/assets/roof.avif';

export const blogCTA: CTAData = {
  badge: 'Expert Insights',
  title: 'Keep Your Home in Top Shape',
  excerpt: '“We share our knowledge because an informed homeowner is our best customer. Read more to protect your investment.”',
  author: {
    name: 'Adam Knight',
    avatar: '/placeholders/profile.png',
    title: ', President & Owner',
  },
  button: {
    label: 'Subscribe to Tips',
    href: '/contact-us',
  },
  handwrittenText: 'Local Knowledge<br />Builder-Level Oversight',
  backgroundImage: roof,
};

export const serviceAreaCTA: CTAData = {
  badge: 'Local Roofing Pros',
  title: 'Serving Your Community with Integrity',
  excerpt: '“We live and work where you do. We know the local codes and the local weather challenges better than anyone.”',
  author: {
    name: 'Adam Knight',
    avatar: '/placeholders/profile.png',
    title: ', President & Owner',
  },
  button: {
    label: 'Find Your Area',
    href: '/service-areas',
  },
  handwrittenText: 'Your Neighbors<br />Trusted Since Day One',
  backgroundImage: roof,
};
