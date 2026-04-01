import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DZ-DbHVo.mjs';
import { f as cn, c as $$Icon, h as $$RatingStars } from './Footer_YfAkoF97.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { c as bbbLogo } from './BadgeTitle_CkONzckv.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$SocialProof = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialProof;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "flex items-center justify-center gap-4 divide-white/20 py-2 text-sm sm:divide-x md:justify-start lg:gap-x-0",
    className
  ), "class")}> <!-- Google Rating --> <div class="flex items-center gap-x-4 sm:pr-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "google-logo", "class": "size-5 md:size-8" })} <div class="flex flex-col gap-y-1 text-xs font-semibold md:text-sm"> <span> 40+ Five-Star </span> <span> Google Reviews </span> </div> </div> <!-- Facebook Rating --> <div class="flex items-center gap-x-4 px-0 font-semibold sm:px-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "facebook-logo", "class": "size-5 md:size-8" })} <div class="flex flex-col gap-y-1"> ${renderComponent($$result, "RatingStars", $$RatingStars, { "rating": 5, "fillColor": "white", "strokeColor": "transparent", "class": "[&_svg]:size-2 md:[&_svg]:size-3" })} <span class="text-xs md:text-sm"> 5.0 Rating </span> </div> </div> <!-- BBB Rating --> <div class="flex items-center gap-x-4 pl-0 font-semibold sm:pl-4"> ${renderComponent($$result, "Image", $$Image, { "src": bbbLogo, "alt": "BBB Logo", "width": 64, "height": 64, "class": "size-5 md:size-8" })} <div class="flex flex-col gap-y-1"> ${renderComponent($$result, "RatingStars", $$RatingStars, { "rating": 5, "class": "[&_svg]:size-2 md:[&_svg]:size-3", "fillColor": "white", "strokeColor": "transparent" })} <span class="text-xs md:text-sm"> A+ Rating </span> </div> </div> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/SocialProof.astro", void 0);

export { $$SocialProof as $ };
