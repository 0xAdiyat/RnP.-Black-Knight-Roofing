export interface FaqItem {
  question: string;
  answer: string | string[];
}

export const servicesFaqs: FaqItem[] = [
  {
    question: "Will my homeowner's insurance cover a new roof?",
    answer:
      "It depends on the cause of damage. Most policies cover storm, hail, and wind damage — which are the most common causes in Colorado. We're insurance claim specialists. We inspect your roof, photograph every impact point, and work directly with your adjuster to give you the best chance of full claim approval. Call us before you file.",
  },
  {
    question: "How do I know which service I actually need?",
    answer:
      "That's exactly what the free inspection is for. Most homeowners can't tell from the ground whether something is a repair, a partial replacement, or a full system replacement. We come out, get on the roof, and give you a straight read. No upsell, no pressure — just what we actually find.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential replacements take one to two days. Size, material, and Colorado's weather all factor in. We check the forecast before committing to a start date, and we give you a clear timeline before we begin — not after.",
  },
  {
    question: "What roofing materials do you install?",
    answer:
      "Asphalt shingles, standing seam metal, stone-coated steel, concrete tile, TPO, EPDM, and flat roofing systems. For exterior work beyond the roof, we also install gutters, siding, and windows. If you're not sure what material fits your home or budget, that's a conversation we're happy to have — for free.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. We work with Service Finance Company and Wisetack. Options include 0% promotional APR, fixed rates starting around 8–12%, terms up to 10 years, and starting payments around $99/month. No down payment required for qualified applicants. You'll need a 600+ credit score to apply.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "Every job comes with our lifetime workmanship warranty. Materials carry the manufacturer's warranty on top of that — which can be 50 years for stone-coated steel or a full lifetime warranty for Newpoint™ concrete tile. We'll walk you through exactly what's covered before we start.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "Yes — we offer a veteran discount and a senior/elderly discount. Just mention it when you call or in the form message. We also have financing options starting around $99/month if budget is the hold-up on getting your roof done right.",
  },
];
