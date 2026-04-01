import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, f as renderSlot } from './astro/server_DZ-DbHVo.mjs';
import { f as cn, e as $$NoiseBg, s as sunflow, b as $$Button } from './Footer_YfAkoF97.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhyChooseUs;
  const {
    badgeText = "A Roof You'll Love Coming Home To",
    title = "Repairs vs. Replacement: Which Is Right For You?",
    description = "When you're dealing with a roofing issue, it can feel overwhelming, especially when you do not know what to expect. We help you understand the difference between repairs and replacements, and when each one makes the most sense. In many cases, you might be surprised by what can be repaired, which can save you time and money. And when it is time for a new roofing system, we are here to guide you toward the right product and install it with care.",
    image = "/placeholders/services/1.png",
    imageAlt = "Service Image",
    buttonText = "FREE Roof Estimate",
    buttonHref = "#",
    imagePosition = "left",
    class: className
  } = Astro2.props;
  const imageOrderClass = imagePosition === "right" ? "order-2" : "order-1";
  const textOrderClass = imagePosition === "right" ? "order-1" : "order-2";
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": cn("relative px-0 py-0", className) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "Background Noise", "width": 1520, "height": 900, "class": "pointer-events-none absolute top-0 left-0 h-full w-full opacity-10" })} ${maybeRenderHead()}<div class="z-10 container py-10 lg:py-20"> <div class="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:items-stretch lg:gap-12"> <!-- Image Content --> <div${addAttribute(cn("h-full", imageOrderClass), "class")}> ${typeof image === "string" ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} class="h-full w-full rounded-lg object-cover">` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": imageAlt, "width": 600, "height": 400, "class": "h-full w-full rounded-lg object-cover" })}`} </div> <!-- Text Content --> <div${addAttribute(cn("space-y-8 py-8", textOrderClass), "class")}> <div class="flex-1 space-y-4"> ${badgeText && renderTemplate`<div class="flex items-center gap-x-3 text-base"> <div class="relative size-5 rounded-[5px] bg-[#F7B715]/50 drop-shadow-2xl before:absolute before:top-1/2 before:left-1/2 before:size-2 before:-translate-1/2 before:rounded-full before:bg-[#F7D515] before:content-['']"></div> <div class="font-medium">${badgeText}</div> </div>`} ${title && renderTemplate`<h2 class="max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)] font-medium"> ${title} </h2>`} ${description && renderTemplate`<div class="text-neutral-lighter prose text-sm leading-relaxed font-normal lg:text-base">${unescapeHTML(description)}</div>`} ${renderSlot($$result2, $$slots["default"])} </div> ${buttonText && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": buttonHref, "data-estimate-trigger": buttonText === "FREE Roof Estimate" ? true : void 0 }, { "default": ($$result3) => renderTemplate` <span> <strong>${buttonText.split(" ")[0]}</strong> ${buttonText.split(" ").slice(1).join(" ")} </span> ` })}`} </div> </div> </div> ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/WhyChooseUs.astro", void 0);

export { $$WhyChooseUs as $ };
