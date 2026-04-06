export interface FaqItem {
  question: string;
  answer: string | string[];
}

export const homeFaqs: FaqItem[] = [
  {
    question: "Will my homeowner's insurance cover a new roof?",
    answer:
      "It depends on the cause of the damage. Most policies cover storm, hail, and wind damage — but the way the claim is documented makes a real difference in whether it gets approved. We're insurance claim specialists. We inspect your roof, document the damage properly, and work directly with your adjuster to give you the best chance of full claim approval.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements in Colorado take one to three days, depending on the size and complexity of your roof. We'll give you a clear timeline before we start — no guessing, no surprises.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. We work with Service Finance Company and Wisetack to offer flexible options — including 0% promotional financing, fixed APR plans from 8%–12%, and long-term payment terms up to 10 years. No down payment required. Payments start from as low as $99 per month.",
  },
  {
    question: "What roofing materials do you install?",
    answer:
      "We install asphalt shingles, metal roofing, stone-coated steel, concrete tile, and flat/TPO/EPDM systems. For homeowners who want a roof that truly lasts, we specialize in stone-coated steel and concrete tile — Class 4 impact rated and built to handle Colorado's hail and wind.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Front Range corridor — from Colorado Springs in the south to Fort Collins in the north, including Denver, Aurora, Brighton, Westminster, Greeley, Longmont, Boulder, and everywhere in between.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "Every roof we install comes with a lifetime workmanship warranty — if something goes wrong due to our installation, we fix it. You also receive the manufacturer's warranty on materials, which varies by product and can range from 30 years to lifetime coverage.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "Yes. We offer discounts for veterans and elderly homeowners, plus free roof inspections for new customers. Contact us to find out what applies to your project.",
  },
];
