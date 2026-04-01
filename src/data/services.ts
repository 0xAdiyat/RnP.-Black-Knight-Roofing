export interface Service {
  slug: string;
  image: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  isPopular?: boolean;
  type: 'residential' | 'commercial';
}

export const services: Service[] = [
  {
    slug: 'residential-roofing-co',
    image: '/placeholders/services/1.png',
    title: 'Residential Roofing',
    description: 'We repair, replace, and upgrade roofs for Colorado homeowners using asphalt, metal, tile and premium systems — with guidance on what makes the most sense for your home and your long-term goals.',
    icon: 'roof-icon',
    tags: ['Shingle Roofing', 'Metal Roofing'],
    type: 'residential',
  },
  {
    slug: 'commercial-roofing-co',
    image: '/placeholders/services/2.png',
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, metal, and other commercial roofing systems installed with organized scheduling, accountable jobsite management, and minimal disruption to your operations. We know your tenants and timelines can’t wait.',
    icon: 'roof-icon',
    tags: ['TPO', 'EPDM', 'Metal'],
    type: 'commercial',
  },
  {
    slug: 'storm-damage-repair-co',
    image: '/placeholders/services/3.png',
    title: 'Storm Damage Repair',
    description: 'When hail, wind, or a bad storm hits, we inspect the roof, document what matters, and make repairs that restore protection — not just appearance. We work directly with your insurance adjuster so you get the coverage you’re actually owed.',
    icon: 'roof-icon',
    tags: [],
    type: 'residential',
  },
  {
    slug: 'stone-coated-steel-roofing-co',
    image: '/placeholders/services/1.png',
    title: 'Stone-Coated Steel Roofing',
    description: 'Want the look of a premium roof with serious durability behind it? Stone-coated steel gives you strong curb appeal, long-term performance, and a smart upgrade path for Colorado weather. Class 4 impact rated — the highest available.',
    icon: 'roof-icon',
    tags: ['50-Year Limited Warranty', '120 MPH Wind Rated', 'Class 4 Impact Rated'],
    type: 'residential',
  },
  {
    slug: 'concrete-tile-roofing',
    image: '/placeholders/services/2.png',
    title: 'Concrete Tile Roofing',
    description: 'Concrete tile gives your home a bold, finished look and lasting protection. It’s premium option for homeowners who want standout style, strong durability, and long-term value. Available in Class 3 and Class 4 hail-rated profiles. ',
    icon: 'roof-icon',
    tags: ['Limited Lifetime Warranty', 'Class 4 Fire Rated', 'Class 3 & 4 Hail Options'],
    type: 'residential',
  },
  {
    slug: 'metal-roofing-co',
    image: '/placeholders/services/1.png',
    title: 'Metal Roofing',
    description: 'High-performance metal roofing with clean lines, strong weather resistance, and low-maintenance ownership — for homeowners who want a longer-lasting system that doesn’t need babying after every Colorado storm.',
    icon: 'roof-icon',
    tags: [],
    type: 'residential',
  },
  {
    slug: 'roof-replacement-services-co',
    image: '/placeholders/services/4.png',
    title: 'Roof Replacement',
    description: 'When repairs are no longer the right answer, we handle the full tear-off, system updates, and installation with builder-level oversight and clean execution. You’ll know the plan, the timeline, and the cost before we start.',
    icon: 'roof-icon',
    tags: [],
    type: 'residential',
  },
  {
    slug: 'window-replacement-services-co',
    image: '/placeholders/services/2.png',
    title: 'Window Replacement',
    description: 'Replace drafty, dated windows with better comfort, cleaner trim work, and tighter seals that help your home feel more efficient year-round. We install Westlake Royal Window Solutions as an authorized installer.',
    icon: 'roof-icon',
    tags: [],
    type: 'residential',
  },
  {
    slug: 'siding-co',
    image: '/placeholders/services/1.png',
    title: 'Siding',
    description: 'Refresh the look of your home and protect the structure underneath with durable vinyl or steel siding — installed for straight lines, tight seams, and lasting color that holds up to Colorado sun and weather.',
    icon: 'roof-icon',
    tags: ['Vinyl Siding', 'Steel Siding'],
    type: 'residential',
  },
  {
    slug: 'gutters-co',
    image: '/placeholders/services/5.png',
    title: 'Gutters',
    description: 'Seamless gutters and guards move water away from your roofline, fascia, and foundation so small drainage issues don’t turn into bigger repair bills. We size and install them to actually work with your roof system.',
    icon: 'roof-icon',
    tags: ['Seamless Gutters', 'Gutter Guards'],
    type: 'residential',
  },
  {
    slug: 'hail-damage-repair-co',
    image: '/placeholders/services/3.png',
    title: 'Hail Damage Repair',
    description: 'Colorado hail can bruise shingles and shorten roof life fast. We document the damage clearly and repair or replace the affected areas with long-term protection in mind — and we help you get your insurance claim right the first time.',
    icon: 'roof-icon',
    tags: [],
    type: 'residential',
  },
  {
    slug: 'wind-damage-repair-co',
    image: '/placeholders/services/3.png',
    title: 'Wind Damage Repair',
    description: 'Lifted shingles, exposed underlayment, and loosened edges can lead to leaks fast. We fix the weak points and help secure the system before the next storm rolls through — because wind damage that looks minor rarely stays that way.',
    icon: 'roof-icon',
    tags: [],
    type: 'residential',
  },
];

