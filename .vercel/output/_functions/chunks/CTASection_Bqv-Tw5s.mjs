import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { f as cn, b as $$Button } from './Footer_YfAkoF97.mjs';
import { a as $$BadgeTitle, b as $$QuoteForm } from './BadgeTitle_CkONzckv.mjs';

const roofImage = new Proxy({"src":"/_astro/roof.vV7olIn6.avif","width":3072,"height":3072,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/roof.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { src, alt = "profile", class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "via-primary flex w-fit items-center justify-center rounded-full bg-linear-to-r from-[rgba(242,199,68,0)] to-[rgba(242,199,68,0)] p-0.5",
    className
  ), "class")}> <div class="from-primary border-raidal to-tertiary relative aspect-square h-[60px] w-[60px] overflow-hidden rounded-full bg-conic-150 lg:h-[73px] lg:w-[73px]"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "width": 256, "height": 256, "class": "absolute h-full w-full object-cover" })} </div> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/Avatar.astro", void 0);

const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative container py-12"> <div class="via-primary/50 absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-transparent to-transparent"></div> <div class="relative container overflow-hidden rounded-2xl px-0"> ${renderComponent($$result, "Image", $$Image, { "src": roofImage, "alt": "Roof", "width": roofImage.width, "height": roofImage.height, "class": "absolute inset-0 h-full w-full object-cover object-[center_40%] opacity-30" })} <div class="relative z-10 grid grid-cols-1 items-center gap-16 bg-[linear-gradient(259deg,rgba(0,0,0,0.24)_38.06%,rgba(0,0,0,0.90)_83.55%)] py-6 lg:grid-cols-2 lg:gap-24"> <!-- Left Content --> <div class="lg:p-8"> <div class="flex flex-col space-y-6 px-6 text-center lg:items-start lg:text-left"> ${renderComponent($$result, "BadgeTitle", $$BadgeTitle, { "badge": "Get Started", "title": "Your Roof Deserves a Contractor Who Treats It Like Their Own", "class": "flex flex-col items-center lg:items-start lg:text-left" })} <div class="space-y-4"> <p class="mx-auto max-w-[500px] text-base leading-relaxed text-white/70 lg:mx-0">
“Every roof we build, we treat like it's our family's house underneath it. That's the only standard we
              know.”
</p> <!-- Profile --> <div class="flex items-center justify-center gap-x-4 lg:justify-start"> ${renderComponent($$result, "Avatar", $$Avatar, { "src": "/placeholders/profile.png", "alt": "Adam Knight" })} <div class="flex items-center text-left"> <strong class="font-sm font-bold text-white">Adam Knight</strong> <span class="text-xs font-normal text-white/50">, President & Owner </span> </div> </div> </div> <!-- CTA + Handwritten text --> <div class="relative flex flex-col items-center gap-4 pt-0 pb-12 sm:flex-row sm:items-end sm:gap-12 lg:gap-x-7"> ${renderComponent($$result, "Button", $$Button, { "class": "h-11 w-fit px-8 py-4 text-sm font-bold", "href": "/contact-us" }, { "default": ($$result2) => renderTemplate`Contact Our Team` })} <div class="absolute top-11 right-0 flex items-center justify-center sm:top-0 sm:right-auto sm:left-full sm:pb-2 sm:pl-4"> <!-- Arrow --> <svg class="absolute -top-10 right-0 rotate-45 opacity-50 sm:top-0 sm:left-0 sm:rotate-0" xmlns="http://www.w3.org/2000/svg" width="49" height="33" viewBox="0 0 49 33" fill="none"> <path d="M2.86718 26.1025C9.70051 17.1025 25.9672 -0.497461 36.3672 1.10254C49.3672 3.10254 48.8672 17.1025 45.8672 23.6025C43.4672 28.8025 41.8665 31.1025 41.3662 31.6025" stroke="url(#paint0_linear_16793_5676)" stroke-width="2"></path> <path d="M20.8662 23.1025C16.5329 22.6025 6.46621 23.0025 0.866211 28.6025C4.03288 23.1025 9.66621 11.0025 6.86621 6.60254" stroke="white" stroke-width="2"></path> <defs> <linearGradient id="paint0_linear_16793_5676" x1="5.86621" y1="21.5005" x2="45.3662" y2="32.0005" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="#686868"></stop> </linearGradient> </defs> </svg> <span class="font-caveat -mb-4 rotate-12 bg-linear-to-r from-white to-[#8C8C8C] bg-clip-text text-center text-2xl text-nowrap italic sm:mt-0 sm:translate-y-8 sm:rotate-12">
No Obligation<br>Free Roof Inspection
</span> </div> </div> </div> </div> <!-- Right Card - Form --> <div class="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:justify-self-end"> ${renderComponent($$result, "QuoteForm", $$QuoteForm, {})} </div> </div> </div> </section>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/cta/CTASection.astro", void 0);

export { $$CTASection as $, $$Avatar as a, roofImage as r };
