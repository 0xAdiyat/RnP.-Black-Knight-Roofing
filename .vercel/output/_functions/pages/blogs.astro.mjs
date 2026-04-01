import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, c as $$Icon, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Hero } from '../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Brands, a as $$BadgeTitle } from '../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_CcRgn7w8.mjs';
import { $ as $$ArticalCard, b as blogListItems } from '../chunks/blogs_DugLSlI_.mjs';
import { h as heroImage } from '../chunks/blogs-and-blog-details-section__hero_BO1mDroF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPage = Number(Astro2.url.searchParams.get("page") || 1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(blogListItems.length / itemsPerPage);
  const displayedBlogs = blogListItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "See Past Work In Your <br/> Neighborhood", "subtitle": "Colorado's #1 Veteran-Owned Roofing Company" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>
Lorem ipsum dolor sit amet consectetur. Dictum morbi ac nibh nibh leo vitae at id faucibus. Ultrices duis tempor
      eget proin euismod sed dolor eu suspendisse. Amet ridiculus erat sit vulputate. Dui est feugiat risus ultrices.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  <div class="bg-linear-[135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.00)_100%] px-0 py-0"> <div class="container py-10 lg:py-20"> <div class="mb-12 space-y-8 rounded-3xl border border-white/5 bg-[#222] p-4 md:p-8 lg:p-12"> <div class="flex flex-col items-center justify-between gap-8 md:flex-row"> ${renderComponent($$result2, "BadgeTitle", $$BadgeTitle, { "title": "Blog Posts by The Roof Pros", "badge": "Blogs" })} <div class="w-full max-w-md"> <div class="group border-radial has-focus-within:border-primary has-focus-within:ring-primary/50 relative rounded-2xl has-focus-within:ring-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "search", "class": "group-focus-within:text-primary absolute top-1/2 left-4 size-5 -translate-y-1/2 text-white/40 transition-colors" })} <input type="text" placeholder="Search articles about roofing, gutters, etc..." class="w-full rounded-2xl border bg-[#111] py-4 pr-4 pl-12 text-white placeholder-white/40 outline-none"> </div> </div> </div> <div class="flex flex-wrap items-center gap-2 border-t border-white/5 pt-6"> <span class="pr-2 text-xs font-bold tracking-widest text-white/40 uppercase">Trending:</span> ${["Storm Damage", "Cost Estimates", "Spring Maintenance"].map((tag) => renderTemplate`<button class="hover:bg-primary rounded-full bg-white/5 px-4 py-1.5 text-sm text-white transition-all hover:text-black"> ${tag} </button>`)} </div> </div> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> ${displayedBlogs.map((blog) => renderTemplate`${renderComponent($$result2, "ArticalCard", $$ArticalCard, { ...blog })}`)} </div> <!-- Pagination --> <div class="mt-20 flex justify-center"> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/blogs" })} </div> </div> </div> <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/blogs/index.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
