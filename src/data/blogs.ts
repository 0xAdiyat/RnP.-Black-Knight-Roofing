export interface BlogListItem {
  slug: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  href: string;
}

const blogEntries = [
  {
    slug: 'hail-damage-9-signs',
    image: '/bg/concrete-tile-roof-mediterranean-villa-co.png',
    date: 'July 1, 2026',
    readTime: '7 Mins',
    title: 'Hail Damage: 9 Signs Your Roof Took a Hit (Even If It Looks Fine)',
    description:
      'After a Colorado storm, damage often hides in the details—soft spots, granule loss, bruised tiles, or bent flashing. Here’s a fast visual checklist to know when you should schedule an inspection vs. when you’re safe to wait.',
  },
  {
    slug: 'roof-replacement-cost',
    image: '/bg/luxury-shingle-roof-suburban-home-denver.png',
    date: 'July 1, 2026',
    readTime: '8 Mins',
    title: 'Roof Replacement Cost: What Actually Changes the Price in Colorado',
    description:
      'Square footage is only the starting point. Material type, roof pitch, tear-off layers, ventilation upgrades, and code requirements can swing the total a lot. We’ll break down the biggest price drivers so your quote makes sense.',
  },
  {
    slug: 'spring-roof-maintenance',
    image: '/bg/blue-metal-roofing-modern-house-colorado.png',
    date: 'January 3, 2026',
    readTime: '3 Mins',
    title: 'Spring Roof Maintenance: 12-Minute Routine to Prevent Expensive Repairs',
    description:
      'Small issues become leaks when temperatures swing. This quick seasonal routine covers gutters, vents, seal points, and debris zones—plus what you should never DIY on steep roofs. A little prevention now saves a lot later.',
  },
  {
    slug: 'the-5-roof-leaks',
    image: '/bg/colorado-metal-roof-installation-denver.png',
    date: 'May 12, 2026',
    readTime: '6 Mins',
    title: 'The 5 Roof Leaks That Start Small—and Get Expensive Fast',
    description:
      'Most leaks begin at transitions: flashing, valleys, vents, and skylights. Learn where to look first, what “warning stains” really mean, and when a quick fix becomes a full repair.',
  },
  {
    slug: 'colorado-wind-uplift',
    image: '/bg/colorado-springs-standing-seam-metal-roof.png',
    date: 'April 21, 2026',
    readTime: '12 Mins',
    title: 'Colorado Wind Uplift: Why Some Roofs Fail Before the Storm Ends',
    description:
      'Wind doesn’t just “blow shingles off”—it lifts edges, breaks seals, and exploits weak decking zones. Here’s how proper fastening, underlayment, and edge metal prevent blow-offs.',
  },
  {
    slug: 'hail-damage-checklist',
    image: '/bg/denver-asphalt-shingle-roof-replacement.png',
    date: 'March 28, 2026',
    readTime: '8 Mins',
    title: 'Hail Damage Checklist: What Insurance Adjusters Notice First',
    description:
      'Bruising, mat fractures, granule loss, dented vents—hail signatures look different by material. Use this homeowner-friendly checklist before you file (or skip) a claim.',
  },
] as const satisfies Omit<BlogListItem, 'href'>[];

export const blogListItems: BlogListItem[] = blogEntries.map((blog) => ({
  ...blog,
  href: `/blog/${blog.slug}`,
}));

export const recentBlogListItems = blogListItems.slice(0, 3);
