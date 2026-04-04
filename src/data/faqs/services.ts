export interface FaqItem {
  question: string;
  answer: string | string[];
}

export const servicesFaqs: FaqItem[] = [
  {
    question: 'What roofing services do you offer?',
    answer: [
      "We handle residential and commercial roofing — full replacements, repairs, storm restoration, hail and wind damage, gutters, siding, windows, and premium systems like stone-coated steel and concrete tile. If it's on your home's exterior, there's a good chance we can help.",
    ],
  },
  {
    question: 'What roofing materials do you install?',
    answer: [
      "Architectural shingles, Class 4 impact-resistant shingles, standing seam metal, stone-coated steel (Unified Steel™ by Westlake Royal), concrete tile (Newpoint™ by Westlake Royal), EPDM flat roofing, TPO, gutters, siding, and windows. We'll walk you through which system fits your home, your neighborhood, and your budget.",
    ],
  },
  {
    question: 'How long does a roof replacement take?',
    answer: [
      'Most residential replacements take one to two days. Larger homes, steeper pitches, and premium material systems like tile or standing seam metal may take longer. We always check the forecast before scheduling and give you a clear timeline before any work begins.',
    ],
  },
  {
    question: 'Do you do commercial roofing?',
    answer: [
      "Yes. We install TPO, EPDM, metal, and other commercial systems with organized scheduling and minimal disruption to your operations. Contact us to discuss your building's needs.",
    ],
  },
  {
    question: 'How do I know if I need a repair or a full replacement?',
    answer: [
      "That's exactly what the free inspection is for. Most homeowners can't tell from the ground whether a problem is a targeted repair or a full system issue. We get on the roof, tell you what we find, and give you an honest recommendation — not an upsell.",
    ],
  },
  {
    question: 'Do you offer free estimates?',
    answer: [
      'Yes. Roof inspections and estimates are completely free and come with no obligation. We show up, assess the roof, and give you a straight answer — including whether we think you need anything at all.',
    ],
  },
];
