import { b as createAstro, c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { e as $$NoiseBg, c as $$Icon, $ as $$Layout, a as $$Navbar, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Hero } from '../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Brands } from '../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$FaqItem } from '../chunks/FaqItem_D0dU7jMC.mjs';
/* empty css                                */
import { h as heroImage } from '../chunks/faq-and-financing-section__hero_Bm9ugcgl.mjs';
export { renderers } from '../renderers.mjs';

const faqCategories = [
  {
    label: "About Black Knight",
    items: [
      {
        question: "Who owns Black Knight Roofing?",
        answer: [
          "Adam Knight, our President & Owner. Adam is a US Army veteran and licensed general contractor based in Lochbuie, Colorado. He founded Black Knight Roofing to give Colorado homeowners a contractor they could trust — one who shows up, does the work right, and stands behind it with a lifetime workmanship warranty."
        ]
      },
      {
        question: "Is Black Knight Roofing a local company?",
        answer: [
          "Yes. We're based in Lochbuie, CO — right in the middle of the Front Range corridor we serve. We're not a national franchise or a storm-chasing outfit. We live here, work here, and we're accountable to this community."
        ]
      },
      {
        question: "Is Black Knight Roofing licensed, bonded, and insured?",
        answer: [
          "Yes. We're fully licensed as a general contractor in Colorado, bonded, and insured. Adam holds the license himself, which means he's directly accountable for every job — not a hired project manager acting as a middleman."
        ]
      },
      {
        question: "What certifications does Black Knight hold?",
        answer: [
          "We're a Tamko Pro Certified Contractor, an MRA Member Contractor, BBB Accredited with an A+ Rating, and an authorized Westlake Royal Window Solutions installer. We also hold a Best of 2026 BusinessRate recognition."
        ]
      },
      {
        question: "What areas do you serve?",
        answer: [
          "We serve the Denver metro and Colorado's Front Range, including Brighton, Thornton, Westminster, Aurora, Commerce City, Arvada, Broomfield, Lakewood, and surrounding communities. If you're unsure whether we cover your area, call us — we'll confirm it quickly."
        ]
      },
      {
        question: "What are your hours?",
        answer: [
          "Monday through Friday, 9am to 5pm. For storm emergencies in the Denver metro, we respond as fast as we can — don't hesitate to call outside normal hours if you have urgent damage."
        ]
      }
    ]
  },
  {
    label: "Roofing Services",
    items: [
      {
        question: "What roofing services do you offer?",
        answer: [
          "We handle residential and commercial roofing — full replacements, repairs, storm restoration, hail and wind damage, gutters, siding, windows, and premium systems like stone-coated steel and concrete tile. If it's on your home's exterior, there's a good chance we can help."
        ]
      },
      {
        question: "What roofing materials do you install?",
        answer: [
          "Architectural shingles, Class 4 impact-resistant shingles, standing seam metal, stone-coated steel (Unified Steel™ by Westlake Royal), concrete tile (Newpoint™ by Westlake Royal), EPDM flat roofing, TPO, gutters, siding, and windows. We'll walk you through which system fits your home, your neighborhood, and your budget."
        ]
      },
      {
        question: "How long does a roof replacement take?",
        answer: [
          "Most residential replacements take one to two days. Larger homes, steeper pitches, and premium material systems like tile or standing seam metal may take longer. We always check the forecast before scheduling and give you a clear timeline before any work begins."
        ]
      },
      {
        question: "Do you do commercial roofing?",
        answer: [
          "Yes. We install TPO, EPDM, metal, and other commercial systems with organized scheduling and minimal disruption to your operations. Contact us to discuss your building's needs."
        ]
      },
      {
        question: "How do I know if I need a repair or a full replacement?",
        answer: [
          "That's exactly what the free inspection is for. Most homeowners can't tell from the ground whether a problem is a targeted repair or a full system issue. We get on the roof, tell you what we find, and give you an honest recommendation — not an upsell."
        ]
      },
      {
        question: "Do you offer free estimates?",
        answer: [
          "Yes. Roof inspections and estimates are completely free and come with no obligation. We show up, assess the roof, and give you a straight answer — including whether we think you need anything at all."
        ]
      }
    ]
  },
  {
    label: "Insurance & Claims",
    items: [
      {
        question: "Will my homeowner's insurance cover storm or hail damage?",
        answer: [
          "Most likely yes — if the damage was caused by a storm event, hail, or wind. Colorado policies almost universally include this coverage because we’re in one of the highest-frequency hail zones in the country. What matters most is how the damage is documented. Call us before you call your insurer — the order matters."
        ]
      },
      {
        question: "Should I call a roofer or my insurance company first?",
        answer: [
          "Call us first. A professional inspection before the adjuster visits means every damage point is photographed and documented clearly. Insurance adjusters sometimes miss items — particularly on slopes they don’t inspect closely. Having our report in hand gives you leverage and protects your claim."
        ]
      },
      {
        question: "What's the difference between RCV and ACV coverage?",
        answer: [
          "RCV (Replacement Cost Value) pays to replace your roof with similar materials regardless of age. ACV (Actual Cash Value) depreciates the roof based on its age — which can leave a significant out-of-pocket gap, especially on older roofs. We can help you understand which policy type you have before you file."
        ]
      },
      {
        question: "How do storm chasers operate, and how do I avoid them?",
        answer: [
          "Storm chasers are out-of-state contractors who flood neighborhoods after major hail events, pressure homeowners into same-day contracts, and often disappear before warranty work is needed. They may install materials rated for lower wind zones than your address requires. Always work with a licensed local contractor you can hold accountable. We’re based here — we’re not going anywhere."
        ]
      },
      {
        question: "Can you be present when the insurance adjuster visits?",
        answer: [
          "Yes, and we recommend it. We’ve worked alongside adjusters many times and know what gets missed. We can walk the roof together, point out every damage point, and make sure the scope of the claim reflects the actual work needed."
        ]
      },
      {
        question: "What if the insurance payout doesn't cover the full cost?",
        answer: [
          "We offer financing to bridge any gap — including options to cover your deductible. We work with Service Finance Company and Wisetack, with plans starting around $99/month and no down payment required."
        ]
      }
    ]
  },
  {
    label: "Financing",
    items: [
      {
        question: "Do you offer financing for roof replacement?",
        answer: [
          "Yes. We work with Service Finance Company and Wisetack to offer payment plans starting around $99/month. Options include 0% promotional APR, fixed rates in the 8–12% range, and terms up to 10 years. No down payment required for qualified applicants."
        ]
      },
      {
        question: "What credit score do I need to qualify?",
        answer: [
          "A minimum score of 600 is required. We use a soft credit check to prequalify, which doesn't affect your score. You'll see your options before committing to anything."
        ]
      },
      {
        question: "How long does the application process take?",
        answer: [
          "About two minutes. The soft pull prequalification is fast, and approval decisions typically come quickly. We can often get you approved and a project start date scheduled in the same conversation."
        ]
      },
      {
        question: "Can I finance a premium roofing system like stone-coated steel or concrete tile?",
        answer: [
          "Yes — and it often makes strong financial sense. A stone-coated steel or Newpoint™ concrete tile roof carries a 50-year to lifetime warranty. Spreading the cost over 10 years means long-term protection in manageable monthly amounts. We have higher approval rates on upgrade projects."
        ]
      },
      {
        question: "Is there a prepayment penalty if I pay off early?",
        answer: [
          "No. There's no repayment penalty on any of our financing plans. Pay it off early whenever you're ready."
        ]
      },
      {
        question: "Do you offer discounts in addition to financing?",
        answer: [
          "Yes — we offer a veteran discount and a senior/elderly discount. These can be combined with financing. Mention it when you call or when you apply."
        ]
      }
    ]
  },
  {
    label: "Storm & Hail",
    items: [
      {
        question: "How do I know if my roof has hail damage?",
        answer: [
          "Hail damage usually isn't visible from the ground. On the roof, you're looking for soft spots or circular bruising on shingles, granule loss collecting in gutters, dented metal flashing, and lifted or cracked shingles along ridges and edges. If your neighbors are getting inspections after a storm, yours needs one too."
        ]
      },
      {
        question: "How quickly do I need to act after a storm?",
        answer: [
          "As soon as possible. Many Colorado policies require you to file within one year of the storm date, but delaying a claim can complicate things if additional damage occurs in the meantime. Also, the longer granule-damaged shingles go unaddressed, the faster they deteriorate. Call us — we prioritize post-storm inspections."
        ]
      },
      {
        question: "What's the difference between hail, wind, and storm damage repair?",
        answer: [
          "Hail damage affects the shingle surface and granule coating, shortening roof life even when it looks minor. Wind damage typically starts at seals, corners, and ridges — lifting shingles and breaking the waterproof barrier before anything visibly lifts. Storm damage is the broader category that includes both, plus potential structural issues. Each needs a different inspection approach."
        ]
      },
      {
        question: "Can I stay in my home during roof replacement after storm damage?",
        answer: [
          "Yes, in most cases. Roof replacement is noisy and there's some vibration, but you can remain in the home. We protect your landscaping, clean up daily, and work to minimize disruption."
        ]
      },
      {
        question: "What roofing materials hold up best to Colorado hail?",
        answer: [
          'Class 4 impact-rated materials — the highest rating available. This includes our stone-coated steel (Unified Steel™, warranted for hail up to 2½" diameter), Newpoint™ concrete tile (Class 3 and Class 4 profiles), and Class 4 architectural shingles. Many Colorado insurers offer premium discounts of 5–25% for Class 4 installations.'
        ]
      },
      {
        question: "What's Colorado's hail season?",
        answer: [
          `Peak season runs April through September, with the most severe storms typically occurring May through July. That said, damaging hail is possible outside these months. Colorado's Front Range sits in what meteorologists call "Hail Alley" — the highest-frequency large hailstorm region in the country.`
        ]
      }
    ]
  },
  {
    label: "Warranties",
    items: [
      {
        question: "What warranty do you offer on your work?",
        answer: [
          "Every job comes with a lifetime workmanship warranty — that covers our labor on top of whatever the material manufacturer provides. If we installed it and something fails due to workmanship, we stand behind it."
        ]
      },
      {
        question: "What warranty comes with stone-coated steel roofing?",
        answer: [
          'Unified Steel™ by Westlake Royal Building Products carries a 50-Year Limited Warranty, fully transferable, including a Hail Stone Penetration Warranty for hailstones up to 2½" diameter and a 120 MPH Wind Warranty.',
          "Per Unified Steel™ warranty. See WestlakeRoyalRoofing.com for full terms."
        ]
      },
      {
        question: "What warranty comes with concrete tile roofing?",
        answer: [
          "Newpoint™ concrete tile by Westlake Royal carries a fully transferable, non-prorated Limited Lifetime Warranty and a Class A fire rating across all profiles.",
          "Per Newpoint™ warranty. See WestlakeRoyalRoofing.com for full terms."
        ]
      },
      {
        question: 'What does "transferable warranty" mean?',
        answer: [
          "It means the warranty transfers to the next owner if you sell the home. For stone-coated steel and concrete tile, this is a significant selling point — a buyer inheriting a 50-year or lifetime roof warranty is much more valuable than one inheriting standard shingles with 10 years left."
        ]
      },
      {
        question: "Does a manufacturer warranty cover storm damage?",
        answer: [
          "Manufacturer warranties cover product defects — they don't replace homeowner's insurance for storm events. However, Class 4 rated materials often reduce your insurance premiums and improve claim outcomes because they demonstrate the roof was built to resist impact."
        ]
      },
      {
        question: "What happens if there's a workmanship issue after my roof is installed?",
        answer: [
          "Call us. Our lifetime workmanship warranty means we'll come back out, assess the issue, and make it right. Adam Knight's name is on every job we do — there's no scenario where we walk away from a legitimate workmanship problem."
        ]
      }
    ]
  }
];

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Faqs2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faqs2;
  const allTabLabel = "All";
  const tabs = [allTabLabel, ...faqCategories.map((category) => category.label)];
  const defaultTab = tabs[0];
  const activeTabClass = "bg-primary text-[#111]";
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0", "data-astro-cid-i74hdggv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-12 lg:py-20" data-astro-cid-i74hdggv> <div class="flex flex-1 flex-col items-center space-y-3 text-center sm:space-y-4" data-astro-cid-i74hdggv> <div class="flex items-center gap-x-3 text-sm md:text-base" data-astro-cid-i74hdggv> <div class="relative size-4 rounded-[5px] bg-[#F7B715]/50 drop-shadow-2xl before:absolute before:top-1/2 before:left-1/2 before:size-1.5 before:-translate-1/2 before:rounded-full before:bg-[#F7D515] before:content-[''] md:size-5 md:before:size-2" data-astro-cid-i74hdggv></div> <div data-astro-cid-i74hdggv>FAQs</div> </div> <h2 class="max-w-[530px] text-2xl leading-tight sm:text-3xl md:text-5xl" data-astro-cid-i74hdggv>Frequently Asked Questions</h2> </div> <div class="mx-auto flex max-w-[920px] flex-col space-y-6 sm:space-y-8" data-astro-cid-i74hdggv> <!-- Search & Tabs --> <div class="sticky top-16 z-30 pt-4 pb-3 sm:top-20 sm:pt-6 md:top-24" data-astro-cid-i74hdggv> <div class="pointer-events-none absolute inset-x-0 -inset-y-3 -z-10 bg-linear-to-b from-[#0F0F0F]/0 via-[#0F0F0F]/92 to-[#0F0F0F]/0" data-astro-cid-i74hdggv></div> <!-- Search --> <div class="border-radial rounded-full" data-astro-cid-i74hdggv> <div class="testimonial-bg-noise relative flex items-center rounded-full bg-[#1A1A1A]/95 px-0 py-0 backdrop-blur-md" data-astro-cid-i74hdggv> ${renderComponent($$result2, "Icon", $$Icon, { "name": "search", "size": 22, "class": "absolute top-1/2 left-5 -translate-y-1/2 text-white sm:left-8 sm:size-6", "data-astro-cid-i74hdggv": true })} <input id="faq-search-input" placeholder="Search for answers..." class="h-13 w-full rounded-full bg-transparent px-14 py-3 text-sm focus:outline-none sm:h-[56px] sm:px-20 sm:py-4 sm:text-base" data-astro-cid-i74hdggv> </div> </div> <!-- Categories --> <div class="relative mt-4 md:hidden" data-astro-cid-i74hdggv> <div class="border-radial rounded-full" data-astro-cid-i74hdggv> <button id="faq-dropdown-trigger" class="flex h-11 w-full items-center justify-between rounded-full bg-[#1A1A1A]/95 px-4 text-xs font-semibold sm:h-12 sm:px-6 sm:text-sm" data-astro-cid-i74hdggv> <span id="faq-active-label" data-astro-cid-i74hdggv>${tabs[0]}</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-down", "size": 20, "class": "transition-transform duration-300", "id": "faq-chevron", "data-astro-cid-i74hdggv": true })} </button> </div> <div id="faq-dropdown-menu" class="absolute top-full right-0 left-0 z-50 mt-2 hidden rounded-2xl border border-white/10 bg-[#0F0F0F]/95 p-1 shadow-2xl backdrop-blur-xl" data-astro-cid-i74hdggv> ${tabs.map((t) => renderTemplate`<button class="faq-mobile-tab flex min-h-11 w-full items-center rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:bg-white/5 active:scale-[0.98] sm:px-5"${addAttribute(t, "data-category")} data-astro-cid-i74hdggv> ${t} </button>`)} </div> </div> <div class="border-radial mt-4 hidden rounded-full md:block" data-astro-cid-i74hdggv> <div class="no-scrollbar flex items-center gap-2 overflow-x-auto rounded-full bg-[#1A1A1A]/95 p-2 md:justify-start xl:justify-center xl:gap-x-2.5" data-astro-cid-i74hdggv> ${tabs.map((t, index) => renderTemplate`<button${addAttribute([
    "faq-desktop-tab border-radial shrink-0 rounded-full whitespace-nowrap text-white/75 transition-all duration-300 ease-out active:scale-[0.98]",
    { [activeTabClass]: index === 0 }
  ], "class:list")}${addAttribute(t, "data-category")} data-astro-cid-i74hdggv> <div class="flex h-11 items-center justify-center rounded-full px-4 py-3 text-xs font-semibold lg:h-12 lg:px-6" data-astro-cid-i74hdggv> ${t} </div> </button>`)} </div> </div> </div> <div id="faq-items" class="space-y-4 transition-[opacity,transform,filter] duration-300 ease-out" data-astro-cid-i74hdggv> ${faqCategories.map(
    (category) => category.items.map((faq, index) => renderTemplate`<div${addAttribute(["p-1", { hidden: defaultTab !== allTabLabel }], "class:list")} data-faq-entry${addAttribute(category.label, "data-category")}${addAttribute(`${faq.question} ${faq.answer.join(" ")}`.toLowerCase(), "data-search")} data-astro-cid-i74hdggv> ${renderComponent($$result2, "FaqItem", $$FaqItem, { "question": faq.question, "answer": faq.answer, "open": category.label === faqCategories[0]?.label && index === 0, "data-astro-cid-i74hdggv": true })} </div>`)
  )} <div id="faq-empty-state" class="hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center text-white/60" data-astro-cid-i74hdggv>
No answers match this search in the selected category.
</div> </div> </div> </div> ` })}  ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/faqs/Faqs2.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/faqs/Faqs2.astro", void 0);

const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Denver Roofing FAQs | Black Knight Roofing" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "title": "Got Question? <br/> We've Got Answers.", "subtitle": "Colorado's #1 Veteran-Owned Roofing Company", "backgroundImage": heroImage }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>
We've compiled answers to the questions Colorado homeowners ask us most — from storm damage and insurance claims
      to materials, financing, and what to expect from our process. Can't find what you're looking for? Call us directly
      at (970) 888-7230.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "Faqs2", $$Faqs2, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/faqs.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/faqs.astro";
const $$url = "/faqs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faqs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
