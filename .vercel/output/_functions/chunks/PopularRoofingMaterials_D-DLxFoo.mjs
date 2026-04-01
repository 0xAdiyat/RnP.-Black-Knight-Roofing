import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, f as renderSlot, e as renderScript, r as renderComponent } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { b as $$Button, e as $$NoiseBg, c as $$Icon } from './Footer_YfAkoF97.mjs';
import { a as $$BadgeTitle } from './BadgeTitle_CkONzckv.mjs';
import 'clsx';
/* empty css                               */
import { $ as $$Carousel, a as $$CarouselSlide } from './CarouselSlide_CqFOE99K.mjs';

const $$Astro$2 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Tabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tabs;
  const { tabs, defaultTab = tabs[0]?.id, class: className = "", listClass = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`tabs-container w-full ${className}`, "class")}${addAttribute(defaultTab, "data-default-tab")} data-astro-cid-dhgaq5xt> <!-- Tab Headers --> <div${addAttribute(`flex flex-row items-center gap-x-6 lg:gap-x-10 border-b border-white/15 overflow-x-auto no-scrollbar ${listClass}`, "class")} data-astro-cid-dhgaq5xt> ${tabs.map((tab) => renderTemplate`<button class="tab-trigger py-3 lg:py-4 transition-all duration-300 cursor-pointer text-[#828282] hover:text-white relative text-center whitespace-nowrap shrink-0"${addAttribute(tab.id, "data-tab-id")} data-astro-cid-dhgaq5xt> ${tab.label} <div class="tab-indicator absolute bottom-0 left-0 h-0.5 w-full bg-primary opacity-0 transition-opacity duration-300" data-astro-cid-dhgaq5xt></div> </button>`)} </div> <!-- Tab Contents --> <div class="tabs-content pt-6 lg:pt-10" data-astro-cid-dhgaq5xt> ${renderSlot($$result, $$slots["default"])} </div> </div>  ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/Tabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/Tabs.astro", void 0);

const $$Astro$1 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$PopularRoofingCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PopularRoofingCard;
  const { title, description, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative flex h-auto w-full flex-col pl-3 md:pl-6 lg:block lg:h-[490px] lg:pr-20"> <div class="h-[250px] w-full sm:h-[350px] lg:h-full"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "alt": title || "", "width": 600, "height": 490, "class": "h-full w-full rounded-2xl object-cover shadow-xl" })}`} </div> <div class="bg-primary text-inverted relative z-10 mx-6 -mt-16 rounded-2xl p-4 shadow-2xl sm:-mt-20 sm:p-10 lg:absolute lg:top-1/2 lg:right-0 lg:m-0 lg:w-[448px] lg:-translate-y-1/2 lg:rounded-xl lg:px-12 lg:py-8"> <div class="space-y-4 lg:space-y-6"> <div class="space-y-2 lg:space-y-4"> <h4 class="text-xl leading-tight font-normal text-black lg:text-3xl">${title}</h4> <p class="text-[13px] leading-relaxed font-normal text-[#444444] lg:text-base"> ${description} </p> </div> <div class="pt-2"> ${renderComponent($$result, "Button", $$Button, { "variant": "outline", "class": "border-black px-[18px] py-3 text-sm font-bold text-black transition-all hover:bg-black hover:text-white" }, { "default": ($$result2) => renderTemplate`
Learn More
` })} </div> </div> </div> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/services/PopularRoofingCard.astro", void 0);

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$PopularRoofingMaterials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PopularRoofingMaterials;
  const {
    badge = "Popular Roofing Materials",
    title = "Popular Roofing Materials Used in Colorado",
    description = "The best residential roof is not just about price. It is about how the material looks on your home, how it handles Colorado weather, how much maintenance you want, and how long you want the system to last. We help you compare the tradeoffs clearly before you commit.",
    quote = "\u201CWe help homeowners choose the roofing system that fits their home, their budget, and how long they want it to last.\u201D",
    quoteAuthor = "Adam Knight",
    quoteRole = "President",
    quoteImage = "/placeholders/profile.png",
    categories: categoriesProp,
    materials,
    source
  } = Astro2.props;
  const categories = categoriesProp || (materials ? [
    {
      id: "materials",
      label: "Materials",
      items: materials.map((m) => ({
        title: m.label,
        description: m.description,
        image: m.image
      }))
    }
  ] : []);
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": "relative px-0 py-0" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-10 lg:py-20"> <div class="container grid grid-cols-1 gap-12 pb-8 lg:grid-cols-2"> <div class="space-y-4"> ${renderComponent($$result2, "BadgeTitle", $$BadgeTitle, { "badge": badge, "title": title, "class": "flex flex-col items-start text-left" })} <div class="space-y-6"> <p class="text-neutral-lighter text-sm leading-relaxed font-normal lg:text-base"> ${description} </p> ${source && renderTemplate`<p class="flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "circle-info", "class": "text-primary" })} <span class="text-neutral-lighter">
Source:${" "} <a${addAttribute(source.href, "href")} class="hover:text-primary text-white underline"> ${source.label} </a> </span> </p>`} </div> </div> <div class="flex items-center justify-center lg:justify-end"> <div class="via-primary mt-8 ml-8 h-fit w-full max-w-[320px] rounded-2xl bg-linear-to-r from-[rgba(242,199,68,0)] to-[rgba(242,199,68,0)] p-px md:max-w-[400px] lg:mt-0 lg:ml-12"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "relative flex items-center rounded-2xl py-6 pr-6 pl-0 lg:py-7" }, { "default": ($$result3) => renderTemplate`<div class="via-primary z-10 -ml-8 flex w-fit items-center justify-center rounded-full bg-linear-to-r from-[rgba(242,199,68,0)] to-[rgba(242,199,68,0)] p-0.5"> <div class="from-primary to-tertiary relative h-[60px] w-[60px] overflow-hidden rounded-full bg-conic-150 lg:h-[73px] lg:w-[73px]"> ${quoteImage && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": quoteImage, "alt": quoteAuthor, "width": 256, "height": 256, "class": "absolute h-full w-full object-cover" })}`} </div> </div> <div class="pl-0"> <div class="text-sm leading-relaxed italic md:text-base"> ${quote} </div> <div class="text-tx-brand mt-1 text-xs font-bold md:text-sm"> ${quoteAuthor}, <small class="font-normal opacity-70"> ${quoteRole} </small> </div> </div> ` })} </div> </div> </div> <!-- Roofing Materials --> ${renderComponent($$result2, "Tabs", $$Tabs, { "tabs": categories.map((c) => ({ label: c.label, id: c.id })), "listClass": "no-scrollbar container" }, { "default": ($$result3) => renderTemplate`${categories.map((category) => renderTemplate`<div${addAttribute(category.id, "data-tab-panel")} class="hidden"> ${renderComponent($$result3, "Carousel", $$Carousel, { "slidesPerView": 1.2, "spaceBetween": 0, "centeredSlides": true, "autoplay": true, "loop": true, "loopedSlides": 1, "breakpoints": {
    1024: {
      slidesPerView: 1.6,
      spaceBetween: 0,
      centeredSlides: false,
      loopedSlides: 1
    }
  } }, { "default": ($$result4) => renderTemplate`${category.items.map((item) => renderTemplate`${renderComponent($$result4, "CarouselSlide", $$CarouselSlide, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PopularRoofingCard", $$PopularRoofingCard, { "title": item.title, "description": item.description, "image": item.image })} ` })}`)}` })} </div>`)}` })} </div> ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/services/PopularRoofingMaterials.astro", void 0);

export { $$PopularRoofingMaterials as $ };
