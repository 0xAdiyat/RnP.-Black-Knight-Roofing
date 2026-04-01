import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, e as $$NoiseBg, b as $$Button, d as $$Footer } from '../../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Brands } from '../../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Testimonials } from '../../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$Faqs } from '../../chunks/Faqs_DHvlwYar.mjs';
import { $ as $$WhyChooseUs } from '../../chunks/WhyChooseUs_DQFn4lkB.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_CwSv8W2F.mjs';
import { $ as $$Hero } from '../../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CCmGuUXD.mjs';
import { $ as $$Process } from '../../chunks/Process_i5H1XAKH.mjs';
import { s as step1, a as step2, b as step4 } from '../../chunks/step-4_PqBYbBEu.mjs';
import { s as step3 } from '../../chunks/step-3_DCOQ1mro.mjs';
import { $ as $$RecentArticales } from '../../chunks/RecentArticales_KLXtsZ4p.mjs';
import { $ as $$ServiceAreas } from '../../chunks/ServiceAreas_BfRTDTiz.mjs';
import { $ as $$Statistics } from '../../chunks/Statistics_CGQ_s-R4.mjs';
import { h as heroImage } from '../../chunks/storm-damage-repair-section__hero_COlLr11u.mjs';
export { renderers } from '../../renderers.mjs';

const $$StormDamageRepairCo = createComponent(($$result, $$props, $$slots) => {
  const processSteps = [
    {
      image: step1,
      step: "Step 1",
      title: "Contact Our Team",
      description: "Get in touch with us by phone or fill out a form! Our customer service team is on standby."
    },
    {
      image: step2,
      step: "Step 2",
      title: "Schedule Inspection",
      description: "We will schedule a convenient time to inspect your roof and assess the project scope."
    },
    {
      image: step3,
      step: "Step 3",
      title: "Review Your Proposal",
      description: "Receive a detailed proposal outlining the work, timeline, and transparent pricing."
    },
    {
      image: step4,
      step: "Step 4",
      title: "Project Completion",
      description: "Our expert team completes the project to the highest standards with a final walkthrough."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "A Home Exterior That Can Weather Any Storm", "subtitle": "Storm Damage Repair Services in Colorado" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-sm">
The Front Range lies in "hail alley," a top U.S. hail zone. Colorado ranks second for hail insurance claims, with
      storms April to September dropping hail from pea to golf ball size. Damage like bruised shingles and bent flashing
      often goes unseen until leaks form. Black Knight Roofing inspects and repairs storm damage properly, working with
      your insurance adjuster to ensure you get the coverage you deserve.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-8 lg:py-20"> <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-stretch"> <!-- Left contents --> <div class="space-y-8 py-8"> <div class="flex-1 space-y-4"> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Services", href: "/services" }, { label: "Storm Damage Repair" }] })} <h2 class="text-medium max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]">
You Don't Have To Navigate the Insurance Process On Your Own!
</h2> <p class="text-sm lg:text-base">
Know what's more stressful than a storm-damaged roof? Dealing with the insurance company after. Adjusters
              move fast, paperwork piles up, and insurers sometimes classify clear hail damage as "normal wear and tear"
              — especially on older roofs — to minimize the payout. Most homeowners don't know they can push back, or
              how. We do. At Black Knight Roofing, insurance claims are part of the job. We inspect your full exterior —
              roof, gutters, siding, flashing, and windows — document every impact with photos and written reports, and
              work directly with your adjuster as your advocate. You have up to one year from the storm date to file a
              claim in most Colorado policies. Don't wait. The longer damage goes uninspected, the harder it is to link
              to the original event.
</p> </div> ${renderComponent($$result3, "Button", $$Button, { "class": "px-8 py-4 text-base" }, { "default": ($$result4) => renderTemplate` FREE Storm Damage Inspection ` })} </div> <!-- Right Contents --> <div class="h-[380px] w-full items-center overflow-hidden rounded-lg lg:self-center"> ${renderComponent($$result3, "Image", $$Image, { "src": "/placeholders/thumbnails/roof-replacement-1.avif", "alt": "Roof Replacement", "width": 442, "height": 785, "class": "h-full w-full rounded-lg object-cover" })} </div> </div> </div> ` })} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "badgeText": "Why Choose Us", "title": "Roofs That Helps Colorado Homes Shine", "description": "<p>After a storm hits, you'll get door-knockers. Storm chasers \u2014 out-of-state contractors who follow hail paths, pressure homeowners into quick signatures, file the claim, collect the insurance check, and disappear before the job is done right. We've seen the aftermath. It's expensive to fix. Black Knight Roofing is local. We live and work on the Front Range, and our reputation here depends on every single job we finish. We're licensed, bonded, insured, and A+ accredited with the BBB \u2014 which means we're accountable to this community long after your roof is installed.</p> <p>As a licensed general contractor, Adam inspects your home the way a builder would \u2014 not just the shingles, but the full system. Gutters bent and clogged from impact. Flashing lifted at the ridge. Siding dented and cracked. Window seals compromised. We document all of it, back it with our lifetime workmanship warranty, and install using Tamko Pro Certified materials and processes so your replacement stands up to the next storm too.</p>", "image": "/placeholders/thumbnails/residential-2.png", "buttonText": "FREE Storm Damage Inspection", "imagePosition": "left" })} <div class="via-primary container h-px bg-linear-to-r from-transparent to-transparent lg:hidden"></div> ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/storm-damage-repair-co.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/storm-damage-repair-co.astro";
const $$url = "/services/storm-damage-repair-co";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StormDamageRepairCo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
