import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, e as $$NoiseBg, s as sunflow, b as $$Button, d as $$Footer } from '../../chunks/Footer_YfAkoF97.mjs';
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
import { $ as $$RecentProjects } from '../../chunks/RecentProjects_Dv_CGC0Z.mjs';
import { $ as $$RecentArticales } from '../../chunks/RecentArticales_KLXtsZ4p.mjs';
import { $ as $$ServiceAreas } from '../../chunks/ServiceAreas_BfRTDTiz.mjs';
import { $ as $$Statistics } from '../../chunks/Statistics_CGQ_s-R4.mjs';
import { h as heroImage } from '../../chunks/metal-roofing-section__hero_Ho0j1sN2.mjs';
export { renderers } from '../../renderers.mjs';

const $$MetalRoofingCo = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "Colorado's Premiere Metal Roofing Company", "subtitle": "Metal Roofing In Colorado" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-sm">
At Black Knight Roofing, we specialize in durable metal roofing designed to withstand Colorado's harsh
      conditions—intense UV, hail, high winds, and freeze-thaw cycles. Unlike asphalt shingles, metal roofs last 40-70
      years, resist damage, shed snow, and cut cooling costs by up to 25%. As a Metal Roofing Alliance member, we
      install standing seam and exposed fastener systems backed by a lifetime workmanship warranty for homes and
      businesses across Colorado.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "relative px-0 py-0" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": sunflow, "alt": "Sun Flow", "width": sunflow.width, "height": sunflow.height, "class": "pointer-events-none absolute inset-x-0 top-0 left-0 opacity-10" })} <div class="z-10 container py-8 lg:py-20"> <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-stretch"> <!-- Left contents --> <div class="space-y-8 py-8"> <div class="flex-1 space-y-4"> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Services", href: "/services" }, { label: "Metal Roofing Services" }] })} <h2 class="text-medium max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]">
Top-Quality Metal Roofing with Westlake Royal Products
</h2> <p class="text-sm lg:text-base">
Metal roofing comes in two main types: standing seam and exposed fastener. Standing seam panels lock
              together with hidden screws, offering a sleek look, weatherproof surface, and last 50–70 years with little
              upkeep. Exposed fastener panels have visible screws, cost less, install faster, and last 20–35 years with
              some maintenance. We use materials from Westlake Royal, designed for tough Colorado conditions. Both types
              beat asphalt shingles in durability and weather resistance. We'll help you pick the best option for your
              home and budget.
</p> </div> ${renderComponent($$result3, "Button", $$Button, { "class": "px-8 py-4 text-base" }, { "default": ($$result4) => renderTemplate` <span> <strong> FREE </strong> Estimate </span> ` })} </div> <!-- Right Contents --> <div class="h-[400px] w-full items-center overflow-hidden rounded-lg lg:self-center"> ${renderComponent($$result3, "Image", $$Image, { "src": "/placeholders/thumbnails/residential-1.png", "alt": "Residential Roofing", "width": 600, "height": 400, "class": "h-full w-full object-cover" })} </div> </div> </div> ` })} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "badgeText": "Why Choose Us", "title": "Proudly Serving Colorado Residents \u2014 With Westlake  Royal Products", "description": "<p>Most roofers can install asphalt shingles, but metal roofing needs special skills and precise work. It requires correct fastener placement, thermal expansion handling, proper underlayment, and careful panel checks. Poor installation can cause leaks and damage, but done right, a metal roof lasts a lifetime. As a Metal Roofing Alliance member and authorized Westlake Royal installer, we meet high standards and offer a lifetime workmanship warranty.</p> <p> We act as licensed general contractors, inspecting your roof\u2019s structure, pitch, decking, ventilation, and drainage before recommending a system. A metal roof over damaged decking or poor ventilation won\u2019t perform well. We handle everything: tear-off, deck repair, installation, and final inspection. Plus, financing options start at $99/month through Service Finance Company and Wisetack. </p>", "image": "/placeholders/thumbnails/residential-2.png", "buttonText": "Get FREE Metal Roofing Estimate", "imagePosition": "left" })} <div class="via-primary container h-px bg-linear-to-r from-transparent to-transparent lg:hidden"></div> ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "RecentProjects", $$RecentProjects, {})} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/metal-roofing-co.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/metal-roofing-co.astro";
const $$url = "/services/metal-roofing-co";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MetalRoofingCo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
