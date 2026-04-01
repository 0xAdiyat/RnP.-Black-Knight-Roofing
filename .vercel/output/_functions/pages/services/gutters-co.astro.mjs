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
import { $ as $$RecentProjects } from '../../chunks/RecentProjects_Dv_CGC0Z.mjs';
import { $ as $$RecentArticales } from '../../chunks/RecentArticales_KLXtsZ4p.mjs';
import { $ as $$ServiceAreas } from '../../chunks/ServiceAreas_BfRTDTiz.mjs';
import { $ as $$Statistics } from '../../chunks/Statistics_CGQ_s-R4.mjs';
import { H as HeroBgImage } from '../../chunks/gutters-section__hero_DfFAv98B.mjs';
export { renderers } from '../../renderers.mjs';

const $$GuttersCo = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "title": "Invest in New Gutters With Black Knight Roofing", "subtitle": "Gutter Installation In Colorado", "backgroundImage": HeroBgImage }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-sm">
Tired of leaks, creaks, and constant roof damage? It may be time to invest in a new gutter system. If you&apos;re
      not sure where to start, our team at Black Knight Roofing is here to help! Our custom gutter systems work for
      residential and commercial properties alike, making us your one-stop-shop for all of your gutter needs!
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-8 lg:py-20"> <div class="grid auto-cols-max grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-stretch"> <!-- Left contents --> <div class="flex items-center"> <div class="space-y-8 py-8"> <div class="flex-1 space-y-4"> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Services", href: "/services" }, { label: "Gutters" }] })} <h2 class="text-medium max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]">
Why Your Gutters Matter
</h2> <p class="text-sm lg:text-base">
Your home is an extension of your personality and style. Your home exterior should reflect that just as
                clearly as the interior! At Black Knight Roofing, we understand that that means having a wide range of
                options to choose from is hugely important. We offer both vinyl and steel siding in a range of colors
                and finishes to suit every taste, from classic to modern!
</p> </div> ${renderComponent($$result3, "Button", $$Button, { "class": "px-8 py-4 text-base" }, { "default": ($$result4) => renderTemplate` Talk to a Gutter Professional ` })} </div> </div> <!-- Right Contents --> <div class="h-[396px]"> ${renderComponent($$result3, "Image", $$Image, { "src": "/placeholders/thumbnails/gutter-1.avif", "alt": "Residential Roofing", "width": 600, "height": 400, "class": "h-full w-full rounded-lg object-cover" })} </div> </div> </div> ` })} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "badgeText": "Why Choose Black Knight Roofing", "title": "Keeping Your Place Safe with Pro-Level Care", "description": "Your roof should do more than keep water out. It should fit the look of your home, hold up to Colorado weather, and add lasting value without hidden fees or corner-cutting. Black Knight Roofing brings builder-level oversight, straightforward pricing, and residential roofing guidance that helps you feel good about the result long after the crew leaves.", "image": "/placeholders/thumbnails/gutter-2.avif", "buttonText": "FREE Roof Estimate", "imagePosition": "left" })} <div class="via-primary container h-px bg-linear-to-r from-transparent to-transparent lg:hidden"></div> ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "RecentProjects", $$RecentProjects, {})} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/gutters-co.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/gutters-co.astro";
const $$url = "/services/gutters-co";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GuttersCo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
