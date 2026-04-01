import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, e as $$NoiseBg, s as sunflow, b as $$Button, d as $$Footer } from '../../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Brands, a as $$BadgeTitle } from '../../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Testimonials } from '../../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$Faqs } from '../../chunks/Faqs_DHvlwYar.mjs';
import { s as services, $ as $$ServiceCard } from '../../chunks/services_BEFxAK7I.mjs';
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
import { $ as $$ComparisonSection, a as $$ComparisonTable, b as $$StylesProfiles } from '../../chunks/ComparisonTable_Zw6_y680.mjs';
import { $ as $$PopularRoofingMaterials } from '../../chunks/PopularRoofingMaterials_D-DLxFoo.mjs';
import { $ as $$Statistics } from '../../chunks/Statistics_CGQ_s-R4.mjs';
import { $ as $$Carousel, a as $$CarouselSlide } from '../../chunks/CarouselSlide_CqFOE99K.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
async function getStaticPaths() {
  return services.map((service) => ({
    params: { serviceId: service.slug },
    props: { service }
  }));
}
const $$serviceId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$serviceId;
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
  const { service } = Astro2.props;
  services.filter((s) => s.slug !== service.slug).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": service.image, "title": "Roofing Services Built for Colorado Homes and Colorado Weather", "subtitle": "Colorado's #1 Veteran-Owned Roofing Company" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-sm">
Need a repair, a storm-damage game plan, or a premium roof upgrade that changes the look of your home? Black
      Knight Roofing helps homeowners and property owners from Colorado Springs to Fort Collins with roof replacement,
      storm restoration, gutters, siding, windows, and premium roofing systems like stone-coated steel and concrete
      tile.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "relative px-0 py-0" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": sunflow, "alt": "Sun Flow", "width": sunflow.width, "height": sunflow.height, "class": "pointer-events-none absolute inset-x-0 top-0 left-0 opacity-10" })} <div class="z-10 container py-8 lg:py-20"> <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"> <!-- Left contents --> <div class="space-y-8 py-8"> <div class="flex-1 space-y-4"> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Services", href: "/services" }, { label: service.title }] })} <h2 class="text-medium max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]">
Repairs vs. Replacement: Which Is Right For You?
</h2> <p class="text-sm lg:text-base">
When you're dealing with a roofing issue, it can feel overwhelming, especially when you do not know what
              to expect. We help you understand the difference between repairs and replacements, and when each one makes
              the most sense. In many cases, you might be surprised by what can be repaired, which can save you time and
              money. And when it is time for a new roofing system, we are here to guide you toward the right product and
              install it with care.
</p> </div> ${renderComponent($$result3, "Button", $$Button, {}, { "default": ($$result4) => renderTemplate` <span> <strong> FREE </strong> Roof Estimate </span> ` })} </div> <!-- Right Contents --> <div class=""> ${renderComponent($$result3, "Image", $$Image, { "src": service.image, "alt": service.title, "width": 600, "height": 400, "class": "rounded-lg object-cover" })} </div> </div> </div> ` })} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "badgeText": "Expert Quality & Care", "title": service.title, "description": service.description, "image": service.image, "buttonText": "FREE Roof Estimate", "imagePosition": "left" })} ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "relative px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="z-10 container space-y-4 py-10 lg:py-20"> <div class="py-4 text-center"> ${renderComponent($$result3, "BadgeTitle", $$BadgeTitle, { "as": "h2", "title": "Roofing Services In Colorado" })} </div> ${renderComponent($$result3, "Carousel", $$Carousel, { "slidesPerView": 1.2, "spaceBetween": 20, "breakpoints": {
    640: { slidesPerView: 2.5 },
    1024: { slidesPerView: 4 }
  } }, { "default": ($$result4) => renderTemplate`${services.slice(0, 8).map((s) => renderTemplate`${renderComponent($$result4, "CarouselSlide", $$CarouselSlide, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "ServiceCard", $$ServiceCard, { "image": s.image, "title": s.title, "description": s.description, "icon": s.icon, "tags": s.tags, "href": `/services/${s.slug}` })} ` })}`)}` })} </div> ${renderComponent($$result3, "Image", $$Image, { "src": sunflow, "alt": "Background Noise", "width": 1520, "height": 900, "loading": "eager", "sizes": "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", "class": "pointer-events-none absolute bottom-0 rotate-180 opacity-10" })} ` })} ${renderComponent($$result2, "PopularRoofingMaterials", $$PopularRoofingMaterials, { "materials": roofingMaterials })} ${renderComponent($$result2, "ComparisonSection", $$ComparisonSection, {})} ${renderComponent($$result2, "ComparisonTable", $$ComparisonTable, {})}  ${renderComponent($$result2, "StylesProfiles", $$StylesProfiles, {})} ${renderComponent($$result2, "RecentProjects", $$RecentProjects, {})} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/[serviceId].astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/[serviceId].astro";
const $$url = "/services/[serviceId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$serviceId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
