import type { CTAData } from './types';
import roof from '@/assets/roof.avif';

export const defaultCTA: CTAData = {
  badge: 'Get Started',
  title: 'Your Roof Deserves a Contractor Who Treats It Like Their Own',
  excerpt: '“Every roof we build, we treat like it\'s our family\'s house underneath it. That\'s the only standard we know.”',
  author: {
    name: 'Adam Knight',
    avatar: '/placeholders/profile.png',
    title: ', President & Owner',
  },
  button: {
    label: 'Contact Our Team',
    href: '/contact-us',
  },
  handwrittenText: 'No Obligation<br />Free Roof Inspection',
  backgroundImage: roof,
};
