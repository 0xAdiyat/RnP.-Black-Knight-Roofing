export interface Service {
  slug: string;
  image: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export const services: Service[] = [
  {
    slug: 'residential-roofing',
    image: '/placeholders/services/1.png',
    title: 'Residential Roofing',
    description: 'Roof repairs, replacements, and upgrades for Colorado homes, with clear guidance on asphalt, metal, tile, and other systems that fit your budget and your long-term goals.',
    icon: 'roof-icon',
    tags: ['Metal', 'Tile', 'Asphalt'],
  },
  {
    slug: 'commercial-roofing',
    image: '/placeholders/services/2.png',
    title: 'Commercial Roofing',
    description: 'Professional commercial roofing solutions including flat roofs, TPO, EPDM, and metal systems designed for Colorado businesses and commercial properties.',
    icon: 'roof-icon',
    tags: ['Flat Roof', 'TPO', 'EPDM'],
  },
  {
    slug: 'storm-damage-repair',
    image: '/placeholders/services/3.png',
    title: 'Storm Damage Repair',
    description: 'Fast response to hail, wind, and storm damage with expert assessments, insurance claim support, and quality repairs that restore your roof to peak condition.',
    icon: 'roof-icon',
    tags: ['Hail', 'Wind', 'Emergency'],
  },
  {
    slug: 'roof-replacement',
    image: '/placeholders/services/4.png',
    title: 'Roof Replacement',
    description: 'Complete roof replacement services using premium materials and expert installation techniques that protect your home for decades to come.',
    icon: 'roof-icon',
    tags: ['Full Replacement', 'Upgrade'],
  },
  {
    slug: 'gutters-and-drainage',
    image: '/placeholders/services/5.png',
    title: 'Gutters & Drainage',
    description: "Seamless gutter installation, repair, and maintenance to protect your home's foundation and landscaping from Colorado's heavy rains and snowmelt.",
    icon: 'roof-icon',
    tags: ['Seamless', 'Guards', 'Repair'],
  },
  {
    slug: 'siding-installation',
    image: '/placeholders/services/1.png',
    title: 'Siding Installation',
    description: "Premium siding options including vinyl, fiber cement, and wood that enhance your home's curb appeal and provide lasting weather protection.",
    icon: 'roof-icon',
    tags: ['Vinyl', 'Fiber Cement', 'Wood'],
  },
  {
    slug: 'window-replacement',
    image: '/placeholders/services/2.png',
    title: 'Window Replacement',
    description: 'Energy-efficient window installation that reduces utility costs, improves comfort, and adds value to your Colorado home.',
    icon: 'roof-icon',
    tags: ['Energy Efficient', 'Double Pane'],
  },
  {
    slug: 'roof-inspection',
    image: '/placeholders/services/3.png',
    title: 'Roof Inspection',
    description: 'Thorough roof inspections to identify potential issues before they become costly problems, with detailed reports and maintenance recommendations.',
    icon: 'roof-icon',
    tags: ['Preventive', 'Assessment'],
  },
  {
    slug: 'metal-roofing',
    image: '/placeholders/services/1.png',
    title: 'Metal Roofing',
    description: 'Durable and stylish metal roofing systems including standing seam, corrugated, and stone-coated steel that last a lifetime.',
    icon: 'roof-icon',
    tags: ['Standing Seam', 'Steel'],
  },
  {
    slug: 'tile-roofing',
    image: '/placeholders/services/2.png',
    title: 'Tile Roofing',
    description: "Beautiful concrete and clay tile roofing that adds elegance and superior protection, perfect for Colorado's varied climate.",
    icon: 'roof-icon',
    tags: ['Concrete', 'Clay'],
  },
  {
    slug: 'roof-maintenance',
    image: '/placeholders/services/3.png',
    title: 'Roof Maintenance',
    description: 'Scheduled maintenance programs that extend the life of your roof and prevent unexpected repair costs throughout the year.',
    icon: 'roof-icon',
    tags: ['Preventive', 'Annual Plans'],
  },
  {
    slug: 'insurance-claims',
    image: '/placeholders/services/3.png',
    title: 'Insurance Claims',
    description: 'Expert guidance through the insurance claim process for storm damage, with documentation, estimates, and direct adjuster coordination.',
    icon: 'roof-icon',
    tags: ['Claims', 'Documentation'],
  },
];
