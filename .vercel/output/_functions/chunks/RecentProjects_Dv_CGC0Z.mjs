import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, e as renderScript } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { e as $$NoiseBg, c as $$Icon } from './Footer_YfAkoF97.mjs';
import { t as topShape } from './top-frame_BP2oeTAJ.mjs';
import { a as $$BadgeTitle } from './BadgeTitle_CkONzckv.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$RecentProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecentProjectCard;
  const {
    image,
    imageAlt = "Project Image",
    title,
    category = "Roofing",
    href,
    class: className
  } = Astro2.props;
  const imageSrc = typeof image === "string" ? image : image.src;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(["group relative aspect-358/387 w-full overflow-hidden rounded-2xl text-left", className], "class:list")} data-project-trigger${addAttribute(title, "data-project-title")}${addAttribute(category, "data-project-category")}${addAttribute(imageSrc, "data-project-image")}${addAttribute(imageAlt, "data-project-alt")}${addAttribute(`Open ${title} in full screen view`, "aria-label")}> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "alt": imageAlt, "width": 600, "height": 600, "class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "alt": imageAlt, "class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" })}`} <div class="absolute inset-0 flex h-full flex-col justify-end bg-linear-to-b from-black/0 from-40% via-black/60 to-black/90 p-6 transition-all duration-300"> <div class="flex items-center justify-between gap-x-4"> <div class="space-y-1"> <h4 class="font-heading text-xl leading-tight text-white drop-shadow-sm lg:text-2xl">${title}</h4> <p class="text-xs font-semibold tracking-widest text-white/70 uppercase">${category}</p> </div> <span class="bg-primary text-black flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <line x1="12" y1="5" x2="12" y2="19"></line> <line x1="5" y1="12" x2="19" y2="12"></line> </svg> </span> </div> </div> </button>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/recent-projects/RecentProjectCard.astro", void 0);

const $$RecentProjects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      image: "/placeholders/projects/project-1.jpg",
      title: "EDCO Metal Siding (Charcoal Gray)",
      category: "Roofing"
    },
    {
      image: "/placeholders/projects/project-2.jpg",
      title: "Asphalt Shingle Replacement",
      category: "Roofing"
    },
    {
      image: "/placeholders/projects/project-3.jpg",
      title: "Cedar Shake Restoration",
      category: "Siding"
    },
    {
      image: "/placeholders/projects/project-4.jpg",
      title: "Standing Seam Metal Roof",
      category: "Roofing"
    }
  ];
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": "relative overflow-hidden px-0 py-20 pb-32" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": topShape, "alt": "Top Shape", "class": "pointer-events-none absolute top-0 left-0 -mt-11 w-full" })} ${renderComponent($$result2, "BadgeTitle", $$BadgeTitle, { "badge": "Our Recent Work", "title": "120+ Families Protected <br/> Across Colorado", "class": "relative z-10 container flex flex-col items-center space-y-4 border-b border-white/10 pb-12 text-center text-balance" })} ${maybeRenderHead()}<div class="container mt-16 px-4"> <div class="sm:hidden"> <div class="recent-projects-mobile-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" data-recent-projects-scroll> ${projects.map((project) => renderTemplate`<div class="w-[min(84vw,360px)] shrink-0 snap-center"> ${renderComponent($$result2, "RecentProjectCard", $$RecentProjectCard, { "image": project.image, "title": project.title, "category": project.category })} </div>`)} </div> <div class="mt-8 flex items-center justify-center gap-3"> <button type="button" class="recent-projects-nav hover:bg-primary hover:text-inverted flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-colors duration-200" data-recent-projects-prev aria-label="Previous recent project"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-left", "size": 16 })} </button> <button type="button" class="recent-projects-nav hover:bg-primary hover:text-inverted flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-colors duration-200" data-recent-projects-next aria-label="Next recent project"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-right", "size": 16 })} </button> </div> </div> <div class="hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "RecentProjectCard", $$RecentProjectCard, { "image": project.image, "title": project.title, "category": project.category })}`)} </div> </div> <div class="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 opacity-0 transition-opacity duration-300" data-project-lightbox aria-hidden="true" inert> <button type="button" class="absolute inset-0" data-project-lightbox-close aria-label="Close full screen project view"></button> <div class="relative z-10 flex h-full w-full max-w-6xl items-center justify-center"> <button type="button" class="absolute top-4 right-0 z-20 flex size-11 items-center justify-center rounded-full border border-white/20 bg-[#1A1A1A]/90 text-white backdrop-blur-sm transition-colors hover:border-white/40" data-project-lightbox-close aria-label="Close full screen project view"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"> <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> </svg> </button> <button type="button" class="hover:bg-primary hover:text-inverted absolute left-0 hidden h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-colors duration-200 md:flex" data-project-lightbox-prev aria-label="Previous project"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-left", "size": 16 })} </button> <div class="mx-auto flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#111111] shadow-2xl"> <div class="relative min-h-0 flex-1 bg-black"> <img src="" alt="" class="h-[55vh] w-full object-contain md:h-[72vh]" data-project-lightbox-image> </div> <div class="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 md:px-6"> <div class="min-w-0"> <h3 class="font-heading text-2xl leading-tight text-white md:text-3xl" data-project-lightbox-title></h3> <p class="mt-1 text-xs font-semibold tracking-widest text-white/70 uppercase" data-project-lightbox-category></p> </div> <div class="flex items-center gap-3 md:hidden"> <button type="button" class="hover:bg-primary hover:text-inverted flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-colors duration-200" data-project-lightbox-prev aria-label="Previous project"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-left", "size": 16 })} </button> <button type="button" class="hover:bg-primary hover:text-inverted flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-colors duration-200" data-project-lightbox-next aria-label="Next project"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-right", "size": 16 })} </button> </div> </div> </div> <button type="button" class="hover:bg-primary hover:text-inverted absolute right-0 hidden h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-colors duration-200 md:flex" data-project-lightbox-next aria-label="Next project"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-right", "size": 16 })} </button> </div> </div> ` })} ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/recent-projects/RecentProjects.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/recent-projects/RecentProjects.astro", void 0);

export { $$RecentProjects as $ };
