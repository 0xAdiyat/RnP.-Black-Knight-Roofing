import type { FaqItem } from './home';

export const getServiceAreaFaqs = (city: string, region: string): FaqItem[] => [
  {
    question: `Will my homeowner's insurance cover storm damage in ${city}?`,
    answer: `Most likely yes — if the cause was hail, wind, or a storm event. ${city} sits in Colorado's Front Range, one of the highest-frequency hail zones in the country. Most homeowner policies cover storm-related roof damage, but getting the full claim approved takes documentation and a contractor who knows what adjusters look for. We inspect your roof, photograph every impact point, and work directly with your adjuster so nothing gets missed or undervalued.`,
  },
  {
    question: `How quickly can you respond after a storm hits ${city}?`,
    answer: `We prioritize storm inspections immediately after major weather events in ${city} and across ${region}. In most cases, we can have someone on your roof within 24–48 hours. Call us before you call your insurance company — that order matters.`,
  },
  {
    question: `Do you serve ${city} and the nearby communities?`,
    answer: `Yes. We're headquartered in Lochbuie, which puts us close to ${city} and the wider ${region}. We serve Denver, Brighton, Commerce City, Thornton, Westminster, Arvada, Aurora, and communities across the Front Range. If you're not sure whether you're in our service area, just call — we'll confirm it fast.`,
  },
  {
    question: `What roofing materials work best for ${city}'s weather?`,
    answer: `For Colorado's hail and wind, we recommend Class 4 impact-rated materials — asphalt shingles, stone-coated steel, or concrete tile. Class 4 is the highest hail resistance rating available, and many insurers offer premium discounts for homes with it installed. We'll walk you through the options and help you pick what fits your home, your neighborhood, and your budget.`,
  },
  {
    question: `How long does a roof replacement take in ${city}?`,
    answer: `Most residential replacements take one to two days. Colorado's weather adds a scheduling variable, so we always check the forecast before committing to a start date. You'll have a clear timeline before we begin — and we stick to it.`,
  },
  {
    question: `Do you offer financing for homeowners in ${city}?`,
    answer: `Yes. We work with Service Finance Company and Wisetack to offer flexible payment plans — including 0% promotional APR options, fixed rates starting around 8–12%, terms up to 10 years, and starting payments around $99/month. No down payment required for qualified applicants. A credit score of 600+ is needed to apply.`,
  },
  {
    question: `What makes Black Knight Roofing different from other roofers in ${city}?`,
    answer: `Adam Knight, our President & Owner, is a US Army veteran and licensed general contractor — not a project manager hired to oversee subcontractors. Every job gets his direct oversight and a licensed crew. We're locally based, fully licensed, bonded, and insured, and we back every project with a lifetime workmanship warranty. You can check our 41+ five-star Google reviews — they're real, and most of them come from homeowners right here in ${region}.`,
  },
];
