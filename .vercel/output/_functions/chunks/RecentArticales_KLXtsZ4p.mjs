import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_DZ-DbHVo.mjs';
import { b as $$Button, s as sunflow } from './Footer_YfAkoF97.mjs';
import { r as recentBlogListItems, $ as $$ArticalCard } from './blogs_DugLSlI_.mjs';
import { $ as $$Carousel, a as $$CarouselSlide } from './CarouselSlide_CqFOE99K.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { a as $$BadgeTitle } from './BadgeTitle_CkONzckv.mjs';

const $$RecentArticales = createComponent(($$result, $$props, $$slots) => {
  const breakpoints = {
    320: { slidesPerView: 1.08, spaceBetween: 12 },
    500: { slidesPerView: 1.18, spaceBetween: 14 },
    768: { slidesPerView: 2, spaceBetween: 32 },
    1024: { slidesPerView: 3, spaceBetween: 32 }
  };
  return renderTemplate`${maybeRenderHead()}<section class="bg-noise relative overflow-hidden border-t border-white/10 py-16 lg:py-24"> <div class="relative z-10 container"> <!-- Header --> <div class="mb-12 flex flex-col justify-between gap-8 border-b border-[#444444] pb-12 md:flex-row md:items-center md:border-b-0 md:pb-0"> ${renderComponent($$result, "BadgeTitle", $$BadgeTitle, { "badge": "Recent Articles", "title": "Roofing Advice for Colorado Homeowners" })} ${renderComponent($$result, "Button", $$Button, { "href": "/blogs", "class": "px:px-8 w-fit py-3.5 text-sm font-bold" }, { "default": ($$result2) => renderTemplate` View all articles ` })} </div> <!-- Articles Carousel --> ${renderComponent($$result, "Carousel", $$Carousel, { "slidesPerView": "auto", "spaceBetween": 32, "breakpoints": breakpoints, "centeredSlides": false, "loop": false, "autoplay": false, "class": "z-10 w-full overflow-visible md:overflow-hidden" }, { "default": ($$result2) => renderTemplate`${recentBlogListItems.map((article) => renderTemplate`${renderComponent($$result2, "CarouselSlide", $$CarouselSlide, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ArticalCard", $$ArticalCard, { ...article })} ` })}`)}` })} </div> ${renderComponent($$result, "Image", $$Image, { "src": sunflow, "alt": "Background Decoration", "class": "pointer-events-none absolute bottom-0 left-0 h-full w-full rotate-180 opacity-10" })} </section>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/articales/RecentArticales.astro", void 0);

export { $$RecentArticales as $ };
