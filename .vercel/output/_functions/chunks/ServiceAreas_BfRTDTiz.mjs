import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderTemplate, r as renderComponent } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { e as $$NoiseBg, s as sunflow, b as $$Button } from './Footer_YfAkoF97.mjs';
import 'clsx';
import { a as $$BadgeTitle } from './BadgeTitle_CkONzckv.mjs';
import { s as serviceAreas } from './service-areas_Duz4fqXM.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$AreaButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AreaButton;
  const { area, href, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(attrs)}${addAttribute([
    "inline-block rounded-3xl border border-white/20 p-px no-underline transition-colors hover:border-white/35",
    attrs.class
  ], "class:list")}> <div class="flex h-10 items-center justify-between gap-x-4 p-1 pr-4 text-sm"> <div class="bg-primary text-inverted rounded-3xl px-4 py-1.5"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> <g clip-path="url(#clip0_16753_112)"> <path d="M10 0C5.865 0 2.5 3.38833 2.5 7.55417C2.5 13.4733 9.295 19.585 9.58417 19.8417C9.70333 19.9475 9.85167 20 10 20C10.1483 20 10.2967 19.9475 10.4158 19.8425C10.705 19.585 17.5 13.4733 17.5 7.55417C17.5 3.38833 14.135 0 10 0ZM10 11.6667C7.7025 11.6667 5.83333 9.7975 5.83333 7.5C5.83333 5.2025 7.7025 3.33333 10 3.33333C12.2975 3.33333 14.1667 5.2025 14.1667 7.5C14.1667 9.7975 12.2975 11.6667 10 11.6667Z" fill="#3B2D00"></path> </g> <defs> <clipPath id="clip0_16753_112"> <rect width="20" height="20" fill="white"></rect> </clipPath> </defs> </svg> </div> <span>${area}</span> </div> </a>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/AreaButton.astro", void 0);

const $$ServiceAreas = createComponent(($$result, $$props, $$slots) => {
  const chipRows = [
    ["Denver", "Aurora", "Thornton"],
    ["Westminster", "Arvada", "Brighton", "Lochbuie", "Greeley", "Longmont"],
    ["Boulder", "Loveland", "Fort Collins", "Colorado Springs"]
  ];
  const areaSlugMap = new Map(serviceAreas.map((area) => [area.city, area.slug]));
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": "relative space-y-12 overflow-hidden px-0 py-12" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "Background Decoration", "class": "pointer-events-none absolute top-0 left-0 h-full w-full opacity-10" })} ${maybeRenderHead()}<div class="relative z-10 container space-y-12"> <div class="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:py-8"> ${renderComponent($$result2, "BadgeTitle", $$BadgeTitle, { "badge": "Service Areas", "title": "Serving Homeowners from Colorado Springs to Fort Collins", "titleClass": "max-w-[530px] font-normal text-3xl sm:text-4xl", "class": "w-full flex-1" })} ${renderComponent($$result2, "Button", $$Button, { "class": "w-fit shrink-0 px-8 sm:w-auto", "href": "/service-areas" }, { "default": ($$result3) => renderTemplate`View All Service Areas` })} </div> </div> <div class="container"> <div class="rounded-3xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-sm sm:px-8 sm:py-8 lg:px-12 lg:py-10"> <!-- Desktop --> <div class="mx-auto flex max-w-[1220px] flex-col gap-6"> ${chipRows.map((row) => renderTemplate`<ul class="flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap lg:gap-5"> ${row.map((area) => renderTemplate`<li> ${renderComponent($$result2, "AreaButton", $$AreaButton, { "area": area, "href": `/service-areas/${areaSlugMap.get(area)}` })} </li>`)} </ul>`)} </div> </div> </div> <div class="container h-[300px] overflow-hidden rounded-3xl sm:h-[575px]"> <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1LrnEinjqfTPQXxHVs9jcBOubADuHS8A&ehbc=2E312F&noprof=1" title="Black Knight Roofing service area map" class="block h-full w-full rounded-[inherit] border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/service-area/ServiceAreas.astro", void 0);

export { $$ServiceAreas as $ };
