import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, e as $$NoiseBg, g as $$EstimateButton, d as $$Footer } from '../../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Brands } from '../../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Testimonials } from '../../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$Faqs } from '../../chunks/Faqs_DHvlwYar.mjs';
import { $ as $$WhyChooseUs } from '../../chunks/WhyChooseUs_DQFn4lkB.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_CwSv8W2F.mjs';
import { $ as $$Hero } from '../../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CCmGuUXD.mjs';
import { a as heroImage } from '../../chunks/siding-section__hero_TvPsFjRM.mjs';
import { $ as $$Process } from '../../chunks/Process_i5H1XAKH.mjs';
import { s as step1, a as step2, b as step4 } from '../../chunks/step-4_PqBYbBEu.mjs';
import { s as step3 } from '../../chunks/step-3_DCOQ1mro.mjs';
import { $ as $$RecentProjects } from '../../chunks/RecentProjects_Dv_CGC0Z.mjs';
import { $ as $$RecentArticales } from '../../chunks/RecentArticales_KLXtsZ4p.mjs';
import { $ as $$ServiceAreas } from '../../chunks/ServiceAreas_BfRTDTiz.mjs';
import { $ as $$OtherServicesCarousel } from '../../chunks/OtherServicesCarousel_DcZS2OHl.mjs';
import { $ as $$PopularRoofingMaterials } from '../../chunks/PopularRoofingMaterials_D-DLxFoo.mjs';
import { $ as $$Statistics } from '../../chunks/Statistics_CGQ_s-R4.mjs';
export { renderers } from '../../renderers.mjs';

const $$ResidentialRoofingCo = createComponent(($$result, $$props, $$slots) => {
  const roofingMaterials = [
    {
      id: "shingles",
      label: "Architectural Shingles",
      description: "A reliable, budget-friendly choice with layered dimension, broad color options, and dependable everyday performance for Colorado homes.",
      image: "/placeholders/popular-materials/1.png"
    },
    {
      id: "steel",
      label: "Stone Coated Steel",
      description: "The ultimate protection against Colorado hail. Lightweight, non-combustible, and designed to last a lifetime with the look of traditional tile or wood shake.",
      image: "/placeholders/popular-materials/2.png"
    },
    {
      id: "tile",
      label: "Concrete Tile",
      description: "Superior thermal performance and exceptional durability. Concrete tile offers high fire resistance and a distinct aesthetic for premium Colorado residences.",
      image: "/placeholders/popular-materials/3.png"
    }
  ];
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "Residential Roofing in Denver, CO", "subtitle": "Residential Roofing Services" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-sm">
From roof repairs and full replacements to premium upgrades, Black Knight Roofing helps Colorado homeowners choose
      the right residential roofing system for protection, curb appeal, and long-term value. We install asphalt
      shingles, metal roofing, flat roofing, tile, stone-coated steel, and concrete tile systems from Colorado Springs
      to Fort Collins.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-8 lg:py-20"> <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-stretch"> <!-- Left contents --> <div class="space-y-8 py-8"> <div class="flex-1 space-y-4"> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Services", href: "/services" }, { label: "Residential Roofing" }] })} <h2 class="text-medium max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]">
Repairs vs. Replacement: Which Is Right For You?
</h2> <p class="text-neutral-lighter text-sm font-normal lg:text-base">
When you're dealing with a roofing issue, it can feel overwhelming, especially when you do not know what
              to expect. We help you understand the difference between repairs and replacements, and when each one makes
              the most sense. In many cases, you might be surprised by what can be repaired, which can save you time and
              money. And when it is time for a new roofing system, we are here to guide you toward the right product and
              install it with care.
</p> </div> ${renderComponent($$result3, "EstimateButton", $$EstimateButton, { "class": "px-8 py-4 text-base", "offerText": "", "actionText": "**FREE** Roof Estimate" })} </div> <!-- Right Contents --> <div class="h-[400px] w-full items-center overflow-hidden rounded-lg lg:self-center"> ${renderComponent($$result3, "Image", $$Image, { "src": "/placeholders/thumbnails/residential-1.png", "alt": "Residential Roofing", "width": 600, "height": 400, "class": "h-full w-full object-cover" })} </div> </div> </div> ` })} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "badgeText": "Expert Quality & Care", "title": "Residential Roofing in Denver, CO", "description": "Your roof should do more than keep water out. It should fit the look of your home, hold up to Colorado weather, and add lasting value without hidden fees or corner-cutting. Black Knight Roofing brings builder-level oversight, straightforward pricing, and residential roofing guidance that helps you feel good about the result long after the crew leaves.", "image": "/placeholders/thumbnails/residential-2.png", "buttonText": "FREE Roof Estimate", "imagePosition": "left" })} <div class="via-primary container h-px bg-linear-to-r from-transparent to-transparent lg:hidden"></div> ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "OtherServicesCarousel", $$OtherServicesCarousel, {})} ${renderComponent($$result2, "PopularRoofingMaterials", $$PopularRoofingMaterials, { "materials": roofingMaterials })} ${renderComponent($$result2, "RecentProjects", $$RecentProjects, {})} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/residential-roofing-co.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/residential-roofing-co.astro";
const $$url = "/services/residential-roofing-co";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResidentialRoofingCo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
