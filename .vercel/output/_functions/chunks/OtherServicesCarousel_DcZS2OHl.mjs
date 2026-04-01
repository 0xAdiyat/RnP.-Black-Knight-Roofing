import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { e as $$NoiseBg, s as sunflow } from './Footer_YfAkoF97.mjs';
import { a as $$BadgeTitle } from './BadgeTitle_CkONzckv.mjs';
import { $ as $$Carousel, a as $$CarouselSlide } from './CarouselSlide_CqFOE99K.mjs';
import { $ as $$ServiceCard, s as services } from './services_BEFxAK7I.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$OtherServicesCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OtherServicesCarousel;
  const {
    title = "Roofing Services In Colorado",
    count = 8
  } = Astro2.props;
  const displayServices = services.slice(0, count);
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": "relative px-0 py-0 overflow-hidden" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="z-10 container space-y-4 py-10 lg:py-20"> <div class="py-4 text-center"> ${renderComponent($$result2, "BadgeTitle", $$BadgeTitle, { "as": "h2", "title": title })} </div> ${renderComponent($$result2, "Carousel", $$Carousel, { "slidesPerView": 1.2, "spaceBetween": 20, "breakpoints": {
    640: { slidesPerView: 2.5 },
    1024: { slidesPerView: 4 }
  } }, { "default": ($$result3) => renderTemplate`${displayServices.map((s) => renderTemplate`${renderComponent($$result3, "CarouselSlide", $$CarouselSlide, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ServiceCard", $$ServiceCard, { "image": s.image, "title": s.title, "description": s.description, "icon": s.icon, "tags": s.tags, "href": `/services/${s.slug}` })} ` })}`)}` })} </div> ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "Background Noise", "width": 1520, "height": 900, "loading": "lazy", "sizes": "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", "class": "pointer-events-none absolute bottom-0 rotate-180 opacity-10" })} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/services/OtherServicesCarousel.astro", void 0);

export { $$OtherServicesCarousel as $ };
