import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, s as sunflow, c as $$Icon, e as $$NoiseBg, h as $$RatingStars, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Hero } from '../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Brands } from '../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$ServiceAreas } from '../chunks/ServiceAreas_BfRTDTiz.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CCmGuUXD.mjs';
import { c as caseStudiesHero, $ as $$WorkCard } from '../chunks/case-studies-section__hero_BszDkWR9.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_CcRgn7w8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const works = [
    {
      image: "/placeholders/works/1.jpg",
      title: "EDCO METAL SIDING",
      subtitle: "CHARCOAL GRAY",
      category: "Roofing"
    },
    {
      image: "/placeholders/works/2.jpg",
      title: "Stone Coated Steel",
      subtitle: "Weathered Wood",
      category: "Roofing"
    },
    {
      image: "/placeholders/works/3.jpg",
      title: "Concrete Tile",
      subtitle: "Barcelona Sand",
      category: "Roofing"
    },
    {
      image: "/placeholders/works/4.jpg",
      title: "Asphalt Shingle",
      subtitle: "Estate Gray",
      category: "Roofing"
    },
    {
      image: "/placeholders/works/1.jpg",
      title: "EDCO METAL SIDING",
      subtitle: "CHARCOAL GRAY",
      category: "Roofing"
    },
    {
      image: "/placeholders/works/2.jpg",
      title: "Stone Coated Steel",
      subtitle: "Weathered Wood",
      category: "Roofing"
    },
    {
      image: "/placeholders/works/3.jpg",
      title: "Concrete Tile",
      subtitle: "Barcelona Sand",
      category: "Roofing"
    },
    {
      image: "/placeholders/works/4.jpg",
      title: "Asphalt Shingle",
      subtitle: "Estate Gray",
      category: "Roofing"
    }
  ];
  const currentPage = Number(Astro2.url.searchParams.get("page") || 1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(works.length / itemsPerPage);
  const displayedWorks = works.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Denver Roofing Case Studies | Black Knight Roofing" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": caseStudiesHero, "title": "See Past Work In Your <br/> Neighborhood", "subtitle": "Colorado's #1 Veteran-Owned Roofing Company" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>
Lorem ipsum dolor sit amet consectetur. Dictum morbi ac nibh nibh leo vitae at id faucibus. Ultrices duis tempor
      eget proin euismod sed dolor eu suspendisse. Amet ridiculus erat sit vulputate. Dui est feugiat risus ultrices.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  <div class="relative px-0 py-0"> ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "sun-flow", "width": 1920, "height": 1080, "class": "absolute inset-0 h-full w-full object-cover opacity-20" })} <div class="container py-12 lg:py-20"> <div class="z-10 flex flex-col items-center space-y-8 lg:space-y-10"> <div class="flex flex-col items-center gap-4 text-center"> <div class="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">Explore Our Results</div> <h2 class="font-heading text-4xl text-white md:text-5xl">Filter Gallery By:</h2> </div> <div class="flex flex-wrap items-end justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-2"> ${[
    { name: "All Work", icon: "gallery-image" },
    { name: "Stone Coated", icon: "stone-roof" },
    { name: "Asphalt", icon: "roof-icon" },
    { name: "Concrete Tile", icon: "materials" },
    { isSeparator: true },
    { name: "Siding", icon: "materials" },
    { name: "Gutters", icon: "roof-air-flow" }
  ].map(
    (cat) => cat.isSeparator ? renderTemplate`<div class="mx-4 hidden h-[90px] w-px bg-white/15 lg:block"></div>` : renderTemplate`<button class="group flex flex-col items-center gap-3 transition-all hover:-translate-y-1"> <div class="group-hover:border-primary/50 flex h-[110px] w-[95px] items-center justify-center rounded-xl border border-white/5 bg-white/5 shadow-2xl transition-all duration-300 group-hover:bg-white/10 sm:h-[135px] sm:w-[116px]"> ${renderComponent($$result2, "Icon", $$Icon, { "name": cat.icon, "class": "text-primary size-8 transition-transform duration-300 group-hover:scale-110 sm:size-10" })} </div> <span class="text-[10px] font-bold tracking-wider text-white/40 uppercase transition-colors duration-300 group-hover:text-white sm:text-xs"> ${cat.name} </span> </button>`
  )} </div> </div> </div> </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-10 lg:py-20"> <div class="grid auto-cols-max auto-rows-max grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 lg:gap-x-2"> ${displayedWorks.map((work) => renderTemplate`${renderComponent($$result3, "WorkCard", $$WorkCard, { "image": work.image, "title": work.title, "subtitle": work.subtitle, "category": work.category })}`)} </div> <!-- Pagination --> <div class="mt-12 flex justify-center"> ${renderComponent($$result3, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/case-studies" })} </div> </div> ` })}  <div class="container grid grid-cols-1 gap-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-2"> <!-- Total Projects Completed --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result3) => renderTemplate` <div class="font-heading text-primary text-[2rem]">100+</div> <div> <div class="text-lg font-bold">Roofing Projects</div> <div class="text-[#AAAAAA]">in Colorado</div> </div> ` })} </div> <!-- Google Retings --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result3) => renderTemplate` <div class="text-primary text-[2rem] font-bold">5.0</div> <div class="space-y-1"> <div class="text-lg font-bold"> ${renderComponent($$result3, "RatingStars", $$RatingStars, { "rating": 5, "size": 16, "fillColor": "#F7B715", "strokeColor": "none" })} </div> <div class="text-[#AAAAAA]">40+ Google Reviews</div> </div> ` })} </div> <!-- Workmanship Warranty --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result3) => renderTemplate` <div class="text-primary size-12 font-bold"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "shield-check", "size": 48 })} </div> <div> <div class="font-heading text-[2rem] leading-11 font-normal">Licensed</div> <div class="text-[#AAAAAA]">Bonded & Insured</div> </div> ` })} </div> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result3) => renderTemplate` <div class="text-primary size-12 font-bold"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "badge", "size": 48 })} </div> <div> <div class="font-heading text-[2rem] leading-11 font-normal">Lifetime</div> <div class="text-[#AAAAAA]">Workmanship Warranty</div> </div> ` })} </div> </div> ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/case-studies/index.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/case-studies/index.astro";
const $$url = "/case-studies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
