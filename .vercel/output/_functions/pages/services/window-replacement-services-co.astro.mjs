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
import { h as heroImage } from '../../chunks/window-replacement-section__hero_CBX7xhGg.mjs';
export { renderers } from '../../renderers.mjs';

const $$WindowReplacementServicesCo = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "A Window Replacement You Can Trust in Colorado", "subtitle": "Window Replacement Services In Colorado" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-sm">
Colorado's climate is harder on windows than most homeowners realize. UV radiation is 25% more intense at
      altitude, temperatures can swing 30+ degrees in a single day, and hail season runs April through September with
      storms capable of shattering standard glass. Old or builder-grade windows leak heat in winter, trap it in summer,
      and cost you on every energy bill. At Black Knight Roofing, we install premium replacement windows built for this
      environment — energy-efficient, impact-rated, and backed by the same lifetime workmanship warranty we put on every
      roof we touch.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-8 lg:py-20"> <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-stretch"> <!-- Left contents --> <div class="space-y-8 py-8"> <div class="flex-1 space-y-4"> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Services", href: "/services" }, { label: "Window Replacement Services" }] })} <h2 class="text-medium max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]">
Upgrading Colorado Homes and Businesses with Durable, Climate-Ready Window Replacement
</h2> <p class="text-sm lg:text-base">
Colorado's weather doesn't ease up — scorching sun one day, freezing temperatures the next, and hail that
              can go from pea-sized to golf ball in minutes. Builder-grade windows aren't designed for this. They lose
              their seal, let drafts in, and quietly drive up your energy bills year after year. Our window replacement
              services are designed specifically for this climate, using materials and installation techniques built to
              handle Colorado's extremes. As an authorized Westlake Royal installer and licensed general contractor, we
              don't just swap frames — we make sure every window is airtight, properly sealed, and set up to perform for
              decades. Whether you're dealing with storm damage, aging units, or windows that were never right for
              Colorado's altitude, we'll handle it from inspection to final walkthrough.
</p> </div> ${renderComponent($$result3, "Button", $$Button, { "class": "px-8 py-4 text-base" }, { "default": ($$result4) => renderTemplate` <span> Get <strong> FREE </strong> Estimate </span> ` })} </div> <!-- Right Contents --> <div class="h-[380px] w-full items-center overflow-hidden rounded-lg lg:self-center"> ${renderComponent($$result3, "Image", $$Image, { "src": "/placeholders/thumbnails/roof-replacement-1.avif", "alt": "Roof Replacement", "width": 442, "height": 785, "class": "h-full w-full rounded-lg object-cover" })} </div> </div> </div> ` })} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "badgeText": "Expert Quality & Care", "title": "Installed by a Licensed General Contractor \u2014 Not Just a Window Company", "description": "<p> Most window installers focus on the frame and call it done. We approach every window replacement the way a licensed general contractor does \u2014 checking the surrounding structure, the seal integrity, and how the unit integrates with your home's overall weatherproofing. A window that looks right but isn't properly installed is still a problem waiting to happen, especially in Colorado's freeze-thaw environment.  </p> <p>As an authorized Westlake Royal installer, we have access to windows engineered for Colorado's climate \u2014 double and triple-pane glass with Low-E coatings that block UV, argon gas fills that resist heat transfer, and impact-rated options built for the Front Range hail corridor. Every installation comes with our lifetime workmanship warranty. If something goes wrong with how we put it in, we fix it. </p>", "image": "/placeholders/thumbnails/residential-2.png", "buttonText": "FREE Storm Damage Inspection", "imagePosition": "left" })} <div class="via-primary container h-px bg-linear-to-r from-transparent to-transparent lg:hidden"></div> ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "RecentProjects", $$RecentProjects, {})} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/window-replacement-services-co.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/window-replacement-services-co.astro";
const $$url = "/services/window-replacement-services-co";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WindowReplacementServicesCo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
