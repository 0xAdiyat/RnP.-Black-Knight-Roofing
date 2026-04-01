import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML, f as renderSlot } from './astro/server_DZ-DbHVo.mjs';
import { a as getImage, $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { f as cn, c as $$Icon, g as $$EstimateButton, b as $$Button } from './Footer_YfAkoF97.mjs';
import { h as heroBgImage } from './hero-bg_BXehMxZ0.mjs';
import { g as gridFrame } from './grid-frame_njfNNQjF.mjs';
import { $ as $$SocialProof } from './SocialProof_ZvbB_87k.mjs';
import { b as $$QuoteForm } from './BadgeTitle_CkONzckv.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    backgroundImage = heroBgImage,
    title,
    subtitle,
    subtitleIcon = "badge-tick",
    class: className,
    hasQuoteForm = true,
    hasSocialProof = true,
    hasEstimateButton = true
  } = Astro2.props;
  const heroBgSrc = typeof backgroundImage === "string" ? backgroundImage : (await getImage({ src: backgroundImage, width: 1536, height: 1152, format: "webp" })).src;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("relative lg:max-h-[833px]", className), "class")}> ${renderComponent($$result, "Image", $$Image, { "src": heroBgSrc, "alt": "hero-bg", "width": 1536, "height": 1152, "format": "avif", "fetchpriority": "high", "loading": "eager", "sizes": "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw", "class": "pointer-events-none absolute inset-0 -z-12 h-full w-full object-cover opacity-80" })} ${renderComponent($$result, "Image", $$Image, { "src": gridFrame, "alt": "grid-frame", "width": gridFrame.width, "height": gridFrame.height, "format": "avif", "fetchpriority": "high", "loading": "eager", "sizes": "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw", "class": "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50" })} <div class="hero-bg-gradient z-10"> <div class="container space-y-6 py-12 lg:py-20"> <div class="flex flex-col items-stretch gap-y-10 lg:flex-row lg:items-center lg:gap-x-8"> <div class="relative h-full w-full max-w-[720px] text-white lg:flex lg:min-h-full lg:flex-col lg:justify-center"> <div class="space-y-8"> <div class="space-y-6 text-center sm:text-left"> <div class="space-y-4"> ${subtitle && renderTemplate`<div class="flex items-center justify-center gap-x-1.5 text-sm sm:justify-start sm:text-base"> ${renderComponent($$result, "Icon", $$Icon, { "name": subtitleIcon })} <span>${subtitle}</span> </div>`} <div> <h1 class="font-heading max-w-xl text-4xl leading-tight font-normal lg:text-[4rem] lg:leading-16">${unescapeHTML(title)}</h1> </div> </div> ${renderSlot($$result, $$slots["default"])} ${hasEstimateButton && renderTemplate`<div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-x-6"> ${renderComponent($$result, "EstimateButton", $$EstimateButton, {})} ${renderComponent($$result, "Button", $$Button, { "variant": "link", "href": "/gallery", "class": "px-0 pb-0 text-[16px] leading-[24px] font-normal text-white" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "map" })} <span class="border-b border-white">See Our Past Work</span> ` })} </div>`} </div> ${hasSocialProof && renderTemplate`<div class="flex flex-col items-center gap-4 divide-white/20 text-sm sm:flex-row sm:divide-x lg:justify-start"> ${Astro2.slots.has("social-proof") ? renderTemplate`${renderSlot($$result, $$slots["social-proof"])}` : renderTemplate`${renderComponent($$result, "SocialProof", $$SocialProof, {})}`} </div>`} </div> </div> ${hasQuoteForm && renderTemplate`<div class="w-full lg:ml-auto lg:max-w-[34.375rem]"> ${renderComponent($$result, "QuoteForm", $$QuoteForm, { "slot": "sidebar" })} </div>`} </div> </div> </div> </section>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/hero/Hero.astro", void 0);

export { $$Hero as $ };
