import { b as createAstro, c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, f as renderSlot, d as addAttribute } from './astro/server_DZ-DbHVo.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carousel;
  const {
    class: className = "",
    slidesPerView = 1,
    spaceBetween = 0,
    loop = false,
    autoplay = false,
    centeredSlides = false,
    loopedSlides,
    breakpoints
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "swiper-carousel", "swiper-carousel", { "class": `swiper block ${className}`, "data-slides-per-view": slidesPerView, "data-space-between": spaceBetween, "data-loop": loop.toString(), "data-autoplay": autoplay.toString(), "data-centered-slides": centeredSlides.toString(), "data-looped-slides": loopedSlides ? loopedSlides.toString() : void 0, "data-breakpoints": breakpoints ? JSON.stringify(breakpoints) : void 0 }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="swiper-wrapper"> ${renderSlot($$result, $$slots["default"])} </div> ${renderSlot($$result, $$slots["pagination"])} ${renderSlot($$result, $$slots["navigation"])} ` })} ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/Carousel.astro", void 0);

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$CarouselSlide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CarouselSlide;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`swiper-slide ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/CarouselSlide.astro", void 0);

export { $$Carousel as $, $$CarouselSlide as a };
