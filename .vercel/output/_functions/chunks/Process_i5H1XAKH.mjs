import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, e as renderScript, f as renderSlot } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { f as cn, e as $$NoiseBg, c as $$Icon, h as $$RatingStars, s as sunflow } from './Footer_YfAkoF97.mjs';
import { a as $$BadgeTitle } from './BadgeTitle_CkONzckv.mjs';
import { a as $$Avatar } from './CTASection_Bqv-Tw5s.mjs';

const dogImage = new Proxy({"src":"/_astro/dog-image.BX5KVhNt.avif","width":738,"height":685,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/dog-image.avif";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$ProcessCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProcessCard;
  const { image, imageAlt = "Process Step", step, title, description, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-gradient rounded-3xl before:bg-linear-to-b before:from-[#8f99b4] before:to-[#111]"> <div${addAttribute(cn(
    "flex flex-col items-center h-full transition-colors duration-150 ease-out rounded-3xl group-[*.swiper-slide-active]/swiper-slide:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_100%),radial-gradient(175.94%_145.17%_at_0%_0%,#F2C744_0%,#BF8D30_41.16%,#082A40_100%)] pt-4 pb-8",
    "bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#141414_100%),radial-gradient(175.94%_145.17%_at_0%_0%,#111_0%,#111_41.16%,#082A40_100%)]",
    className
  ), "class")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": imageAlt, "width": 400, "height": 300, "class": "h-[180px] w-[180px] rounded-2xl object-cover sm:h-[218px] sm:w-[218px]" })} <div class="flex flex-col items-center text-center"> <div>${step}</div> <h4>${title}</h4> <div class="max-w-[400px]"> ${description} </div> </div> </div> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/process/ProcessCard.astro", void 0);

const bbaLogo = new Proxy({"src":"/_astro/bbb-logo.Cg-RKF04.avif","width":40,"height":40,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bbb-logo.avif";
							}
							
							return target[name];
						}
					});

const bottomShape = new Proxy({"src":"/_astro/bottom-shape.tDzF4hxH.avif","width":1440,"height":153,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bottom-shape.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Process = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Process;
  const {
    badge = "Our Process",
    heading = "A Clear 4-step Plan <br />From Kick-off to Project",
    headingClass,
    subheading = "And Here is How!",
    subheadingClass,
    subheadingDescription = "You shouldn't have to worry about not getting a call back, wondering when your project will start, or who to contact. Know what to expect with our clear, straightforward process!",
    quote = {
      profileImage: "/placeholders/profile.png",
      profileAlt: "profile",
      quote: "We'll help you every step of the way.",
      author: "Adam Knight, President"
    },
    steps = [],
    class: className
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class:list": ["relative space-y-12 overflow-hidden px-0 py-10 lg:py-20", className] }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="z-10 order-2 container flex flex-col gap-y-12 lg:order-1 lg:flex-row lg:items-center lg:justify-between"> ${renderComponent($$result2, "BadgeTitle", $$BadgeTitle, { "badge": badge, "title": heading, "class": "w-full max-w-[500px]" })} ${quote && renderTemplate`<div class="ml-8 w-full max-w-[320px] flex-1 sm:ml-auto md:max-w-[400px]"> <div class="before:via-primary border-gradient rounded-2xl p-px before:bg-linear-to-r before:from-[rgba(255,255,255,0.15)] before:to-[rgba(255,255,255,0.15)] lg:ml-10"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "relative flex items-center rounded-2xl py-6 pr-6 pl-0 lg:py-7" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Avatar", $$Avatar, { "src": quote.profileImage || "/placeholders/profile.png", "alt": quote.profileAlt || "profile", "class": "z-10 -ml-8" })} <div class="lg:pl-0"> <div class="text-sm leading-relaxed italic md:text-base">&ldquo;${quote.quote}&rdquo;</div> <div class="text-tx-brand mt-1 text-xs font-bold md:text-sm">${quote.author}</div> </div> ` })} </div> </div>`} </div>  <div class="z-10 order-1 container lg:order-2"> <div class="rounded-[32px] lg:rounded-[52px]"> <div class="border-gradient rounded-[32px] p-6 backdrop-blur-[2px] before:bg-linear-to-b before:from-white/34 before:to-white/5 sm:p-10 lg:rounded-[52px] lg:p-16"> <div class="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8"> <!-- Content --> <div class="flex-1"> <div class="mb-12 flex max-w-[436px] items-center lg:mb-[100px] lg:text-left"> <div class="space-y-4"> <h3${addAttribute(["text-2xl font-normal md:text-3xl lg:text-4xl", subheadingClass], "class:list")}>${subheading}</h3> <div class="text-neutral-lighter text-sm leading-relaxed md:text-base"> ${subheadingDescription} </div> </div> </div> <!-- Social Proof --> <div class="relative mx-auto w-fit rounded-2xl lg:mx-0"> ${renderComponent($$result2, "Image", $$Image, { "src": dogImage, "alt": "", "width": 128, "height": 128, "class": "absolute top-0 right-0 z-20 -mt-[60px] h-[70px] w-[80px] lg:right-10 lg:-mt-[85px] lg:h-[92px] lg:w-[102px]" })} <ul class="border-gradient relative flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-black/20 p-2.5 py-4 before:bg-linear-to-l before:from-white/34 before:to-transparent sm:flex-row sm:p-4"> <li class="flex items-center gap-x-2 py-2 sm:p-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "google-logo", "class": "size-4 text-[#F7B715] sm:size-6 lg:size-8" })} <div> <div> ${renderComponent($$result2, "RatingStars", $$RatingStars, { "rating": 5, "fillColor": "white", "strokeColor": "transparent", "class": "[&_svg]:size-2 sm:[&_svg]:size-2.5" })} </div> <div class="text-xs lg:text-sm">5.0 Rating</div> </div> </li> <li class="hidden h-8 w-px bg-white/10 sm:block"></li> <li class="flex items-center gap-x-2 py-2 sm:p-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "facebook-logo", "class": "size-4 text-[#F7B715] sm:size-6 lg:size-8" })} <div> <div> ${renderComponent($$result2, "RatingStars", $$RatingStars, { "rating": 5, "fillColor": "white", "strokeColor": "transparent", "class": "[&_svg]:size-2 sm:[&_svg]:size-2.5" })} </div> <div class="text-xs lg:text-sm">5.0 Rating</div> </div> </li> <li class="hidden h-8 w-px bg-white/10 sm:block"></li> <li class="flex items-center gap-x-2 py-2 sm:p-2"> <div> ${renderComponent($$result2, "Image", $$Image, { "src": bbaLogo, "alt": "Better Business Bureau Logo", "width": 32, "height": 32, "class": "size-5 text-[#F7B715] sm:size-6 lg:size-8" })} </div> <div class="flex flex-col items-start"> <div> ${renderComponent($$result2, "RatingStars", $$RatingStars, { "rating": 5, "fillColor": "white", "strokeColor": "transparent", "class": "[&_svg]:size-2 sm:[&_svg]:size-2.5" })} </div> <div class="text-xs lg:text-sm">5.0 Rating</div> </div> </li> </ul> </div> </div> <!-- Process Cards Swiper --> <div class="flex w-full flex-col items-center gap-y-6 lg:w-auto"> ${renderComponent($$result2, "process-cards-swiper", "process-cards-swiper", { "class": "swiper block w-full max-w-[320px] sm:max-w-[421px]" }, { "default": () => renderTemplate` <div class="swiper-wrapper"> ${steps.length > 0 ? steps.map((s) => renderTemplate`<div class="swiper-slide group/swiper-slide h-full rounded-3xl!"> ${renderComponent($$result2, "ProcessCard", $$ProcessCard, { "image": s.image, "imageAlt": s.imageAlt, "step": s.step, "title": s.title, "description": s.description })} </div>`) : renderTemplate`${renderSlot($$result2, $$slots["default"])}`} </div> ` })} <!-- Navigation --> <div class="flex items-center gap-x-2"> <button class="process-swiper-prev hover:bg-primary hover:text-inverted flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-colors duration-200" aria-label="Previous step"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-left", "size": 16 })} <span class="sr-only">Previous</span> </button> <button class="process-swiper-next hover:bg-primary hover:text-inverted flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-colors duration-200" aria-label="Next step"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-right", "size": 16 })} <span class="sr-only">Next</span> </button> </div> </div> </div> </div> </div> </div> ${renderComponent($$result2, "Image", $$Image, { "src": bottomShape, "alt": "", "width": 1500, "height": 100, "class": "absolute bottom-0 z-10 w-full translate-y-12 opacity-50" })} ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "", "class": "pointer-events-none absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2 rotate-z-180 opacity-10" })} ` })} ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/process/Process.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/process/Process.astro", void 0);

export { $$Process as $, dogImage as d };
