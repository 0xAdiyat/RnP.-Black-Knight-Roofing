import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, e as $$NoiseBg, f as cn, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Hero } from '../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Brands, a as $$BadgeTitle } from '../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$Process } from '../chunks/Process_i5H1XAKH.mjs';
import { s as step1, a as step2, b as step4 } from '../chunks/step-4_PqBYbBEu.mjs';
import { s as step3 } from '../chunks/step-3_DCOQ1mro.mjs';
import { $ as $$ServiceAreas } from '../chunks/ServiceAreas_BfRTDTiz.mjs';
import { $ as $$Faqs } from '../chunks/Faqs_DHvlwYar.mjs';
import { $ as $$RecentArticales } from '../chunks/RecentArticales_KLXtsZ4p.mjs';
import { s as services, $ as $$ServiceCard } from '../chunks/services_BEFxAK7I.mjs';
import { h as heroImage } from '../chunks/services-and-gallery-section__hero_Bck1HWKF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const rowPattern = [3, 2, 3, 4];
  const colSpanMap = {
    2: "md:col-span-6",
    3: "md:col-span-4",
    4: "md:col-span-3"
  };
  function getColSpanClass(index) {
    let remaining = index;
    let patternIndex = 0;
    while (remaining >= rowPattern[patternIndex % rowPattern.length]) {
      remaining -= rowPattern[patternIndex % rowPattern.length];
      patternIndex++;
    }
    const cardsInRow = rowPattern[patternIndex % rowPattern.length];
    return colSpanMap[cardsInRow] || "col-span-4";
  }
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "Roofing Services Built for Colorado Homes and Colorado Weather", "subtitle": "Colorado's #1 Veteran-Owned Roofing Company" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-sm">
Need a repair, a storm-damage game plan, or a premium roof upgrade that changes the look of your home? Black
      Knight Roofing helps homeowners and property owners from Colorado Springs to Fort Collins with roof replacement,
      storm restoration, gutters, siding, windows, and premium roofing systems like stone-coated steel and concrete
      tile.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-20"> ${renderComponent($$result3, "BadgeTitle", $$BadgeTitle, { "badge": "Our Services", "title": "Services We Offer", "class": "flex flex-col items-center text-center" })} <div class="grid grid-cols-12 gap-x-4 gap-y-8 pt-16"> ${services.map((service, index) => renderTemplate`${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "image": service.image, "title": service.title, "description": service.description, "icon": service.icon, "tags": service.tags, "href": `/services/${service.slug}`, "class": cn("col-span-12", getColSpanClass(index)) })}`)} </div> </div> ` })} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/index.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
