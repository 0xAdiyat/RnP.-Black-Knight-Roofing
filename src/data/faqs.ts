export interface FaqEntry {
  question: string;
  answer: string[];
}

export interface FaqCategory {
  label: string;
  items: FaqEntry[];
}

export const faqCategories: FaqCategory[] = [
  {
    label: 'About Black Knight',
    items: [
      {
        question: 'Who owns Black Knight Roofing?',
        answer: [
          'Adam Knight, our President & Owner. Adam is a US Army veteran and licensed general contractor based in Lochbuie, Colorado. He founded Black Knight Roofing to give Colorado homeowners a contractor they could trust — one who shows up, does the work right, and stands behind it with a lifetime workmanship warranty.',
        ],
      },
      {
        question: 'Is Black Knight Roofing a local company?',
        answer: [
          "Yes. We're based in Lochbuie, CO — right in the middle of the Front Range corridor we serve. We're not a national franchise or a storm-chasing outfit. We live here, work here, and we're accountable to this community.",
        ],
      },
      {
        question: 'Is Black Knight Roofing licensed, bonded, and insured?',
        answer: [
          "Yes. We're fully licensed as a general contractor in Colorado, bonded, and insured. Adam holds the license himself, which means he's directly accountable for every job — not a hired project manager acting as a middleman.",
        ],
      },
      {
        question: 'What certifications does Black Knight hold?',
        answer: [
          "We're a Tamko Pro Certified Contractor, an MRA Member Contractor, BBB Accredited with an A+ Rating, and an authorized Westlake Royal Window Solutions installer. We also hold a Best of 2026 BusinessRate recognition.",
        ],
      },
      {
        question: 'What areas do you serve?',
        answer: [
          "We serve the Denver metro and Colorado's Front Range, including Brighton, Thornton, Westminster, Aurora, Commerce City, Arvada, Broomfield, Lakewood, and surrounding communities. If you're unsure whether we cover your area, call us — we'll confirm it quickly.",
        ],
      },
      {
        question: 'What are your hours?',
        answer: [
          "Monday through Friday, 9am to 5pm. For storm emergencies in the Denver metro, we respond as fast as we can — don't hesitate to call outside normal hours if you have urgent damage.",
        ],
      },
    ],
  },
  {
    label: 'Roofing Services',
    items: [
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
    ],
  },
  {
    label: 'Insurance & Claims',
    items: [
      {
        question: "Will my homeowner's insurance cover storm or hail damage?",
        answer: [
          'Most likely yes — if the damage was caused by a storm event, hail, or wind. Colorado policies almost universally include this coverage because we’re in one of the highest-frequency hail zones in the country. What matters most is how the damage is documented. Call us before you call your insurer — the order matters.',
        ],
      },
      {
        question: 'Should I call a roofer or my insurance company first?',
        answer: [
          'Call us first. A professional inspection before the adjuster visits means every damage point is photographed and documented clearly. Insurance adjusters sometimes miss items — particularly on slopes they don’t inspect closely. Having our report in hand gives you leverage and protects your claim.',
        ],
      },
      {
        question: "What's the difference between RCV and ACV coverage?",
        answer: [
          'RCV (Replacement Cost Value) pays to replace your roof with similar materials regardless of age. ACV (Actual Cash Value) depreciates the roof based on its age — which can leave a significant out-of-pocket gap, especially on older roofs. We can help you understand which policy type you have before you file.',
        ],
      },
      {
        question: 'How do storm chasers operate, and how do I avoid them?',
        answer: [
          'Storm chasers are out-of-state contractors who flood neighborhoods after major hail events, pressure homeowners into same-day contracts, and often disappear before warranty work is needed. They may install materials rated for lower wind zones than your address requires. Always work with a licensed local contractor you can hold accountable. We’re based here — we’re not going anywhere.',
        ],
      },
      {
        question: 'Can you be present when the insurance adjuster visits?',
        answer: [
          'Yes, and we recommend it. We’ve worked alongside adjusters many times and know what gets missed. We can walk the roof together, point out every damage point, and make sure the scope of the claim reflects the actual work needed.',
        ],
      },
      {
        question: "What if the insurance payout doesn't cover the full cost?",
        answer: [
          'We offer financing to bridge any gap — including options to cover your deductible. We work with Service Finance Company and Wisetack, with plans starting around $99/month and no down payment required.',
        ],
      },
    ],
  },
  {
    label: 'Financing',
    items: [
      {
        question: 'Do you offer financing for roof replacement?',
        answer: [
          'Yes. We work with Service Finance Company and Wisetack to offer payment plans starting around $99/month. Options include 0% promotional APR, fixed rates in the 8–12% range, and terms up to 10 years. No down payment required for qualified applicants.',
        ],
      },
      {
        question: 'What credit score do I need to qualify?',
        answer: [
          "A minimum score of 600 is required. We use a soft credit check to prequalify, which doesn't affect your score. You'll see your options before committing to anything.",
        ],
      },
      {
        question: 'How long does the application process take?',
        answer: [
          'About two minutes. The soft pull prequalification is fast, and approval decisions typically come quickly. We can often get you approved and a project start date scheduled in the same conversation.',
        ],
      },
      {
        question: 'Can I finance a premium roofing system like stone-coated steel or concrete tile?',
        answer: [
          'Yes — and it often makes strong financial sense. A stone-coated steel or Newpoint™ concrete tile roof carries a 50-year to lifetime warranty. Spreading the cost over 10 years means long-term protection in manageable monthly amounts. We have higher approval rates on upgrade projects.',
        ],
      },
      {
        question: 'Is there a prepayment penalty if I pay off early?',
        answer: [
          "No. There's no repayment penalty on any of our financing plans. Pay it off early whenever you're ready.",
        ],
      },
      {
        question: 'Do you offer discounts in addition to financing?',
        answer: [
          'Yes — we offer a veteran discount and a senior/elderly discount. These can be combined with financing. Mention it when you call or when you apply.',
        ],
      },
    ],
  },
  {
    label: 'Storm & Hail',
    items: [
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
      },
    ],
  },
  {
    label: 'Warranties',
    items: [
      {
        question: 'What warranty do you offer on your work?',
        answer: [
          'Every job comes with a lifetime workmanship warranty — that covers our labor on top of whatever the material manufacturer provides. If we installed it and something fails due to workmanship, we stand behind it.',
        ],
      },
      {
        question: 'What warranty comes with stone-coated steel roofing?',
        answer: [
          'Unified Steel™ by Westlake Royal Building Products carries a 50-Year Limited Warranty, fully transferable, including a Hail Stone Penetration Warranty for hailstones up to 2½" diameter and a 120 MPH Wind Warranty.',
          'Per Unified Steel™ warranty. See WestlakeRoyalRoofing.com for full terms.',
        ],
      },
      {
        question: 'What warranty comes with concrete tile roofing?',
        answer: [
          'Newpoint™ concrete tile by Westlake Royal carries a fully transferable, non-prorated Limited Lifetime Warranty and a Class A fire rating across all profiles.',
          'Per Newpoint™ warranty. See WestlakeRoyalRoofing.com for full terms.',
        ],
      },
      {
        question: 'What does "transferable warranty" mean?',
        answer: [
          'It means the warranty transfers to the next owner if you sell the home. For stone-coated steel and concrete tile, this is a significant selling point — a buyer inheriting a 50-year or lifetime roof warranty is much more valuable than one inheriting standard shingles with 10 years left.',
        ],
      },
      {
        question: 'Does a manufacturer warranty cover storm damage?',
        answer: [
          "Manufacturer warranties cover product defects — they don't replace homeowner's insurance for storm events. However, Class 4 rated materials often reduce your insurance premiums and improve claim outcomes because they demonstrate the roof was built to resist impact.",
        ],
      },
      {
        question: "What happens if there's a workmanship issue after my roof is installed?",
        answer: [
          "Call us. Our lifetime workmanship warranty means we'll come back out, assess the issue, and make it right. Adam Knight's name is on every job we do — there's no scenario where we walk away from a legitimate workmanship problem.",
        ],
      },
    ],
  },
];
