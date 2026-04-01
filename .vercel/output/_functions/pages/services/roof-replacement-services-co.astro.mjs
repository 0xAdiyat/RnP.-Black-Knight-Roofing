import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, e as $$NoiseBg, b as $$Button, c as $$Icon, d as $$Footer } from '../../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Brands } from '../../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Testimonials } from '../../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$Faqs } from '../../chunks/Faqs_DHvlwYar.mjs';
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
import { h as heroImage } from '../../chunks/roof-replacement-section__hero_CjKPRcr5.mjs';
export { renderers } from '../../renderers.mjs';

const $$RoofReplacementServicesCo = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "A Roof Replacement You Can Trust in Colorado", "subtitle": "Roof Replacement Services In Colorado" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-sm">
At Black Knight Roofing Roofing, we understand that your roof is more than just a covering—it's the first line of
      defense for your home or business. Over time, roofs can suffer from weather damage, aging materials, or unexpected
      events, putting your property at risk. That's why our roof replacement services are designed to provide durable,
      high-quality solutions with expert craftsmanship and a stress-free experience. Whether it's residential or
      commercial, our team delivers customized solutions using premium materials, ensuring your property stays protected
      while enhancing its curb appeal and long-term value.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-8 lg:py-20"> <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-stretch"> <!-- Left contents --> <div class="space-y-8 py-8"> <div class="flex-1 space-y-4"> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Services", href: "/services" }, { label: "Roof Replacement Services" }] })} <h2 class="text-medium max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]">
Supporting Colorado Homes and Businesses
</h2> <p class="text-sm lg:text-base">
Florida's weather can be unpredictable, from intense heat to hurricane-force winds. Our roof replacement
              solutions are designed specifically for this environment, using materials and installation techniques that
              withstand the toughest conditions. We're committed to protecting your property and providing exceptional
              customer service throughout the project. Whether it's a storm-damaged commercial roof or an aging
              residential system, our team ensures a durable, long-lasting result that keeps your property safe and
              secure.
</p> </div> ${renderComponent($$result3, "Button", $$Button, { "class": "px-8 py-4 text-base" }, { "default": ($$result4) => renderTemplate` <span> Get <strong> FREE </strong> Roof Estimate </span> ` })} </div> <!-- Right Contents --> <div class="h-[380px] w-full items-center overflow-hidden rounded-lg lg:self-center"> ${renderComponent($$result3, "Image", $$Image, { "src": "/placeholders/thumbnails/roof-replacement-1.avif", "alt": "Roof Replacement", "width": 442, "height": 785, "class": "h-full w-full rounded-lg object-cover" })} </div> </div> </div> ` })} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})}  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-8 lg:py-20"> <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-stretch"> <!-- Left contents --> <div class="h-[380px] w-full items-center overflow-hidden rounded-lg lg:self-center"> ${renderComponent($$result3, "Image", $$Image, { "src": "/placeholders/thumbnails/roof-replacement-1.avif", "alt": "Roof Replacement", "width": 442, "height": 785, "class": "h-full w-full rounded-lg object-cover" })} </div> <!-- Right Contents --> <div class="space-y-8 py-8"> <div class="flex-1 space-y-4"> <div class="flex items-center gap-x-3 text-base"> <div class="relative size-5 rounded-[5px] bg-[#F7B715]/50 drop-shadow-2xl before:absolute before:top-1/2 before:left-1/2 before:size-2 before:-translate-1/2 before:rounded-full before:bg-[#F7D515] before:content-['']"></div> <div class="font-medium">Why Choose Us</div> </div> <h2 class="text-medium max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]">
The Black Knight Roof Replacement Advantage
</h2> <div class="text-neutral-lighter text-sm lg:text-base"> <ul class="space-y-4"> <li class="flex items-center gap-x-2"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "double-tick" })}
Experienced professionals for every project
</li> <li class="flex items-center gap-x-2"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "double-tick" })}
Premium roofing materials for long-lasting results
</li> <li class="flex items-center gap-x-2"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "double-tick" })}
Energy-efficient options to reduce cooling costs
</li> <li class="flex items-center gap-x-2"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "double-tick" })}
Peace of mind with inspections, warranties, and expert installation
</li> </ul> </div> </div> ${renderComponent($$result3, "Button", $$Button, { "class": "px-8 py-4 text-base" }, { "default": ($$result4) => renderTemplate` <span> Get <strong> FREE </strong> Roof Estimate </span> ` })} </div> </div> </div> ` })} <div class="via-primary container h-px bg-linear-to-r from-transparent to-transparent lg:hidden"></div> ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "RecentProjects", $$RecentProjects, {})} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/roof-replacement-services-co.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/roof-replacement-services-co.astro";
const $$url = "/services/roof-replacement-services-co";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RoofReplacementServicesCo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
