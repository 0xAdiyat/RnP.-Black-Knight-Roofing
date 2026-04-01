import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, e as renderScript } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { f as cn, c as $$Icon, $ as $$Layout, a as $$Navbar, s as sunflow, e as $$NoiseBg, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Brands } from '../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$Faqs } from '../chunks/Faqs_DHvlwYar.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CCmGuUXD.mjs';
import { $ as $$Hero } from '../chunks/Hero_B45vm2wT.mjs';
import { $ as $$RecentArticales } from '../chunks/RecentArticales_KLXtsZ4p.mjs';
import { $ as $$ServiceAreas } from '../chunks/ServiceAreas_BfRTDTiz.mjs';
/* empty css                                            */
import { $ as $$Pagination } from '../chunks/Pagination_CcRgn7w8.mjs';
import { $ as $$Statistics } from '../chunks/Statistics_CGQ_s-R4.mjs';
import { b as beforeAfterHero } from '../chunks/before-after-section__hero_DPB5KVnX.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$BeforeAfter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BeforeAfter;
  const {
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    class: className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("group relative overflow-hidden rounded-2xl select-none", className), "class")} data-before-after data-astro-cid-vzs3nbvf> <!-- After Image & Label (Base) --> <div class="relative h-full w-full" data-astro-cid-vzs3nbvf> ${typeof afterImage === "string" ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": afterImage, "alt": "After", "width": 800, "height": 450, "class": "h-full w-full object-cover", "data-astro-cid-vzs3nbvf": true })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": afterImage, "alt": "After", "width": 800, "height": 450, "class": "h-full w-full object-cover", "data-astro-cid-vzs3nbvf": true })}`} <div class="absolute bottom-6 right-6" data-astro-cid-vzs3nbvf> <div class="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-tx-heading" data-astro-cid-vzs3nbvf> ${afterLabel} </div> </div> </div> <!-- Before Image & Label (Overlay) --> <div class="absolute inset-0 h-full w-full z-10" data-before-container style="clip-path: inset(0 50% 0 0);" data-astro-cid-vzs3nbvf> <div class="relative h-full w-full" data-astro-cid-vzs3nbvf> ${typeof beforeImage === "string" ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": beforeImage, "alt": "Before", "width": 800, "height": 450, "class": "h-full w-full object-cover", "data-astro-cid-vzs3nbvf": true })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": beforeImage, "alt": "Before", "width": 800, "height": 450, "class": "h-full w-full object-cover", "data-astro-cid-vzs3nbvf": true })}`} <div class="absolute bottom-6 left-6" data-astro-cid-vzs3nbvf> <div class="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md whitespace-nowrap" data-astro-cid-vzs3nbvf> ${beforeLabel} </div> </div> </div> </div> <!-- Divider Line & Handle --> <div class="absolute top-0 bottom-0 left-[50%] w-px bg-white/50 z-20 pointer-events-none" data-handle-line data-astro-cid-vzs3nbvf> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full border border-primary bg-[#454545] shadow-2xl flex items-center justify-center" data-astro-cid-vzs3nbvf> ${renderComponent($$result, "Icon", $$Icon, { "name": "dots", "class": "size-5 text-primary rotate-90", "data-astro-cid-vzs3nbvf": true })} </div> </div> <!-- Range Input (Control) --> <input type="range" min="0" max="100" value="50" class="absolute inset-0 z-30 w-full h-full opacity-0 cursor-col-resize" data-slider data-astro-cid-vzs3nbvf> </div>  ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/comparison/BeforeAfter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/comparison/BeforeAfter.astro", void 0);

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$BeforeAndAfter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BeforeAndAfter;
  const beforeAfterProjects = [
    {
      before: "/placeholders/projects/project-1.jpg",
      after: "/placeholders/projects/project-2.jpg",
      aspect: "aspect-square"
    },
    {
      before: "/placeholders/projects/project-3.jpg",
      after: "/placeholders/projects/project-4.jpg",
      aspect: "aspect-video"
    },
    {
      before: "/placeholders/projects/project-1.jpg",
      after: "/placeholders/projects/project-2.jpg",
      aspect: "aspect-[3/4]"
    },
    {
      before: "/placeholders/projects/project-1.jpg",
      after: "/placeholders/projects/project-2.jpg",
      aspect: "aspect-video"
    },
    {
      before: "/placeholders/projects/project-3.jpg",
      after: "/placeholders/projects/project-4.jpg",
      aspect: "aspect-[9/16]"
    },
    {
      before: "/placeholders/projects/project-1.jpg",
      after: "/placeholders/projects/project-2.jpg",
      aspect: "aspect-video"
    },
    {
      before: "/placeholders/projects/project-3.jpg",
      after: "/placeholders/projects/project-4.jpg",
      aspect: "aspect-square"
    },
    {
      before: "/placeholders/projects/project-1.jpg",
      after: "/placeholders/projects/project-2.jpg",
      aspect: "aspect-video"
    },
    {
      before: "/placeholders/projects/project-3.jpg",
      after: "/placeholders/projects/project-4.jpg",
      aspect: "aspect-[4/3]"
    }
  ];
  const url = new URL(Astro2.request.url);
  const currentPage = Number(url.searchParams.get("page")) || 1;
  const totalPages = 96;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": beforeAfterHero, "title": "Before & After Gallery", "subtitle": "Colorado's #1 Veteran-Owned Roofing Company" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>
Use your cursor to move the image sliders left and right to see the difference we made for these Wisconsin and
      Illinois homes. We work with quality in mind so your roof, windows, doors, & siding stay durable and under
      warranty for years to come.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  <div class="relative px-0 py-0"> ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "sun-flow", "width": 1920, "height": 1080, "class": "absolute inset-0 h-full w-full object-cover opacity-20" })} <div class="container py-12 lg:py-20"> <div class="z-10 flex flex-col items-center space-y-8 lg:space-y-10"> <div class="flex flex-col items-center gap-4 text-center"> <div class="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Visual Transitions</div> <h2 class="font-heading text-4xl text-white md:text-5xl">Filter Gallery By:</h2> </div> <div class="flex flex-wrap items-end justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-2"> ${[
    { name: "All Work", icon: "gallery-image" },
    { name: "Stone Coated", icon: "stone-roof" },
    { name: "Asphalt", icon: "roof-icon" },
    { name: "Concrete Tile", icon: "materials" },
    { isSeparator: true },
    { name: "Siding", icon: "materials" },
    { name: "Gutters", icon: "roof-air-flow" }
  ].map(
    (cat) => cat.isSeparator ? renderTemplate`<div class="mx-4 hidden h-[90px] w-px bg-white/15 lg:block"></div>` : renderTemplate`<button class="group flex flex-col items-center gap-3 transition-all hover:-translate-y-1"> <div class="group-hover:border-primary/50 flex h-[110px] w-[95px] items-center justify-center rounded-xl border border-white/5 bg-white/5 shadow-2xl transition-all duration-300 group-hover:bg-white/10 sm:h-[135px] sm:w-[116px]"> ${renderComponent($$result2, "Icon", $$Icon, { "name": cat.icon, "class": "text-primary size-8 transition-transform duration-300 group-hover:scale-110 sm:size-10" })} </div> <span class="text-[10px] font-bold tracking-wider text-white/40 uppercase transition-colors duration-300 group-hover:text-white sm:text-xs"> ${cat.name} </span> </button>`
  )} </div> </div> </div> </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-10 lg:py-20"> <div class="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3"> ${beforeAfterProjects.map((project) => renderTemplate`<div class="mb-6 break-inside-avoid"> ${renderComponent($$result3, "BeforeAfter", $$BeforeAfter, { "beforeImage": project.before, "afterImage": project.after, "class": project.aspect })} </div>`)} </div> <!-- Pagination --> <div class="mt-16 flex justify-center"> ${renderComponent($$result3, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/before-and-after" })} </div> </div> ` })}  <div class="container py-16"> ${renderComponent($$result2, "Statistics", $$Statistics, {})} </div> ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/before-and-after.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/before-and-after.astro";
const $$url = "/before-and-after";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BeforeAndAfter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
