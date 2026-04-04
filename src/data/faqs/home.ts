export interface FaqItem {
  question: string;
  answer: string | string[];
}

export const homeFaqs: FaqItem[] = [
  {
    question: "Will my homeowner's insurance cover a new roof?",
    answer:
      "It depends on the cause of damage. Most policies cover storm, hail, and wind damage. We're insurance claim specialists—we inspect your roof, document the damage, and work directly with your adjuster to give you the best chance of full claim approval.",
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most residential roof replacements are completed in 1-3 days, depending on the size of your roof and weather conditions. We always aim to minimize disruption to your daily routine.',
  },
  {
    question: 'Do you offer financing?',
    answer:
      'Yes! We offer flexible financing options to make your roofing project affordable. Ask us about our payment plans and we will find the right solution for your budget.',
  },
  {
    question: 'What roofing materials do you install?',
    answer:
      'We install a wide range of materials including asphalt shingles, metal roofing, cedar shakes, and flat roofing systems. Our team can help you choose the best material for your home and budget.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve homeowners from Colorado Springs to Fort Collins and everywhere in between, including Denver, Aurora, Lakewood, and surrounding communities.',
  },
  {
    question: 'What warranty do you offer?',
    answer:
      "We stand behind our work with a comprehensive warranty on both materials and labor. Specific warranty terms vary by product, so we'll walk you through the details before your project begins.",
  },
  {
    question: 'Do you offer any discounts?',
    answer:
      'Yes, we offer seasonal promotions and discounts for military, first responders, and seniors. Contact us to learn about current offers available in your area.',
  },
];
