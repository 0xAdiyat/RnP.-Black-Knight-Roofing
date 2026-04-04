export interface FaqItem {
  question: string;
  answer: string | string[];
}

export const stormDamageFaqs: FaqItem[] = [
  {
    question: 'How do I know if my roof has hail damage?',
    answer: [
      "Hail damage usually isn't visible from the ground. On the roof, you're looking for soft spots or circular bruising on shingles, granule loss collecting in gutters, dented metal flashing, and lifted or cracked shingles along ridges and edges. If your neighbors are getting inspections after a storm, yours needs one too.",
    ],
  },
  {
    question: 'How quickly do I need to act after a storm?',
    answer: [
      'As soon as possible. Many Colorado policies require you to file within one year of the storm date, but delaying a claim can complicate things if additional damage occurs in the meantime. Also, the longer granule-damaged shingles go unaddressed, the faster they deteriorate. Call us — we prioritize post-storm inspections.',
    ],
  },
  {
    question: "What's the difference between hail, wind, and storm damage repair?",
    answer: [
      'Hail damage affects the shingle surface and granule coating, shortening roof life even when it looks minor. Wind damage typically starts at seals, corners, and ridges — lifting shingles and breaking the waterproof barrier before anything visibly lifts. Storm damage is the broader category that includes both, plus potential structural issues. Each needs a different inspection approach.',
    ],
  },
  {
    question: 'Can I stay in my home during roof replacement after storm damage?',
    answer: [
      "Yes, in most cases. Roof replacement is noisy and there's some vibration, but you can remain in the home. We protect your landscaping, clean up daily, and work to minimize disruption.",
    ],
  },
  {
    question: 'What roofing materials hold up best to Colorado hail?',
    answer: [
      'Class 4 impact-rated materials — the highest rating available. This includes our stone-coated steel (Unified Steel™, warranted for hail up to 2½" diameter), Newpoint™ concrete tile (Class 3 and Class 4 profiles), and Class 4 architectural shingles. Many Colorado insurers offer premium discounts of 5–25% for Class 4 installations.',
    ],
  },
  {
    question: "What's Colorado's hail season?",
    answer: [
      `Peak season runs April through September, with the most severe storms typically occurring May through July. That said, damaging hail is possible outside these months. Colorado's Front Range sits in what meteorologists call "Hail Alley" — the highest-frequency large hailstorm region in the country.`,
    ],
  }
];
