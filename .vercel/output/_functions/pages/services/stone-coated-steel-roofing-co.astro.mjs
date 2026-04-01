import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot } from '../../chunks/astro/server_DZ-DbHVo.mjs';
import { f as cn, e as $$NoiseBg, s as sunflow, c as $$Icon, b as $$Button, $ as $$Layout, a as $$Navbar, d as $$Footer } from '../../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Brands } from '../../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Faqs } from '../../chunks/Faqs_DHvlwYar.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_CwSv8W2F.mjs';
import { $ as $$Hero } from '../../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CCmGuUXD.mjs';
import '../../chunks/step-4_PqBYbBEu.mjs';
import '../../chunks/step-3_DCOQ1mro.mjs';
import { $ as $$RecentProjects } from '../../chunks/RecentProjects_Dv_CGC0Z.mjs';
import { $ as $$ServiceAreas } from '../../chunks/ServiceAreas_BfRTDTiz.mjs';
import { $ as $$ComparisonSection, a as $$ComparisonTable, b as $$StylesProfiles } from '../../chunks/ComparisonTable_Zw6_y680.mjs';
import { $ as $$PopularRoofingMaterials } from '../../chunks/PopularRoofingMaterials_D-DLxFoo.mjs';
import { $ as $$Statistics } from '../../chunks/Statistics_CGQ_s-R4.mjs';
import { h as heroImage } from '../../chunks/stone-coated-steel-roofing-section__hero_qzT4zRQt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$WhyStoneCoated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhyStoneCoated;
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
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": cn("relative px-0 py-0", className) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "Background Noise", "width": 1520, "height": 900, "class": "pointer-events-none absolute top-0 left-0 h-full w-full opacity-10" })} ${maybeRenderHead()}<div class="z-10 container py-10 lg:py-20"> <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-stretch lg:gap-12"> <!-- Image Content --> <div${addAttribute(cn("h-[320px] md:h-full", imageOrderClass), "class")}> ${typeof image === "string" ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} class="h-full w-full rounded-lg object-cover">` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": imageAlt, "width": 600, "height": 400, "class": "h-full w-full rounded-lg object-cover" })}`} </div> <!-- Text Content --> <div${addAttribute(cn("flex flex-col justify-center space-y-8 py-0 md:py-8", textOrderClass), "class")}> <div class="space-y-4"> ${badgeText && renderTemplate`<div class="flex items-center gap-x-3 text-sm lg:text-base"> <div class="relative size-4 lg:size-5 rounded-[5px] bg-[#F7B715]/50 drop-shadow-2xl before:absolute before:top-1/2 before:left-1/2 before:size-1.5 lg:before:size-2 before:-translate-1/2 before:rounded-full before:bg-[#F7D515] before:content-['']"></div> <div class="font-medium">${badgeText}</div> </div>`} ${title && renderTemplate`<h2 class="max-w-[530px] text-[clamp(24px,5vw,48px)] leading-[1.2] lg:leading-[clamp(40px,4vw,52px)] font-medium"> ${title} </h2>`} ${description && renderTemplate`<div class="flex flex-col gap-y-8 text-neutral-lighter text-sm leading-relaxed font-normal lg:text-base"> <p>
Installed over battens with Above-Sheathing Ventilation instead of directly on the deck, this system
                  actively moves hot air away from your home — reducing attic temperatures and cutting energy costs
                  year-round. It doesn't just protect your house. It performs for it.
</p> <ul class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2"> <li class="flex items-center gap-x-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "sun-rise", "class": "size-8 lg:size-10 shrink-0 text-[#8D8780]" })} <span class="text-sm"> 50-Year Limited Warranty* </span> </li> <li class="flex items-center gap-x-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "stone-roof", "class": "size-8 lg:size-10 shrink-0 text-[#8D8780]" })} <span class="text-sm">Hail Stone Penetration Warranty*</span> </li> <li class="flex items-center gap-x-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "roof-air-flow", "class": "size-8 lg:size-10 shrink-0 text-[#8D8780]" })} <span class="text-sm">120 mph Wind Warranty*</span> </li> <li class="flex items-center gap-x-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "roof-fire", "class": "size-8 lg:size-10 shrink-0 text-[#8D8780]" })} <span class="text-sm">Fire Resistant* Materials</span> </li> <li class="flex items-center gap-x-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "roof-feather", "class": "size-8 lg:size-10 shrink-0 text-[#8D8780]" })} <span class="text-sm">Lightweight 1.5-lbs/sq-ft.</span> </li> <li class="flex items-center gap-x-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "roof-fix", "class": "size-8 lg:size-10 shrink-0 text-[#8D8780]" })} <span class="text-sm">Energy-Efficient Above-Sheathing Ventilation*</span> </li> </ul> </div>`} <div class="pt-4"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ${buttonText && renderTemplate`<div class="pt-4"> ${renderComponent($$result2, "Button", $$Button, { "href": buttonHref, "class": "w-full sm:w-auto", "data-estimate-trigger": buttonText === "FREE Roof Estimate" ? true : void 0 }, { "default": ($$result3) => renderTemplate` <span> <strong>${buttonText.split(" ")[0]}</strong> ${buttonText.split(" ").slice(1).join(" ")} </span> ` })} </div>`} </div> </div> </div> ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/services/WhyStoneCoated.astro", void 0);

const $$StoneCoatedSteelRoofingCo = createComponent(($$result, $$props, $$slots) => {
  const materials = [
    {
      id: "shingles",
      label: "Architectural Shingles",
      description: "A reliable, budget-friendly choice with layered dimension, broad color options, and dependable everyday performance for Colorado homes.",
      image: "/placeholders/popular-materials/1.png"
    },
    {
      id: "steel",
      label: "Stone Coated Steel",
      description: "The ultimate protection against Colorado hail. Lightweight, non-combustible, and designed to last a lifetime with the look of traditional tile or wood shake.",
      image: "/placeholders/popular-materials/1.png"
    },
    {
      id: "tile",
      label: "Concrete Tile",
      description: "Superior thermal performance and exceptional durability. Concrete tile offers high fire resistance and a distinct aesthetic for premium Colorado residences.",
      image: "/placeholders/popular-materials/1.png"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "Stone-Coated Steel Roofing Built for Colorado Storms", "subtitle": "Stone-Coated Steel Services in Colorado" }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul class="space-y-4 text-[14px] sm:text-[15px] lg:space-y-3"> <li class="flex items-start gap-x-4 lg:items-center"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "shield", "size": 24, "class": "shrink-0" })} <span class="text-normal flex-1"> <strong class="font-semibold text-white">Proud Veteran Owned:</strong>
Most roofers just replace shingles. As a licensed general contractor and Army veteran, Adam inspects your whole
          home — and builds to last.
</span> </li> <li class="flex items-start gap-x-4 lg:items-center"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "helmet", "size": 24, "class": "shrink-0" })} <span class="text-normal flex-1"> <strong class="font-semibold text-white">Stone-Coated Steel Experts:</strong> We specialize in the materials most
          roofers won't touch — stone-coated steel and concrete tile — because we know they're the best thing on your roof.
</span> </li> <li class="flex items-start gap-x-4 lg:items-center"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "star-leaf", "size": 24, "class": "shrink-0" })} <span class="text-normal flex-1"> <strong class="font-semibold text-white">Insurance Claim Specialists + Lifetime Guarantee:</strong>
We handle insurance claim and provide lifetime workmanship warranty plus manufacturer guarantees.
</span> </li> </ul> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "relative px-0 py-0" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": sunflow, "alt": "Sun Flow", "width": sunflow.width, "height": sunflow.height, "class": "pointer-events-none absolute inset-x-0 top-0 left-0 opacity-10" })} <div class="z-10 container py-8 lg:py-20"> <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-stretch"> <!-- Left contents --> <div class="space-y-8 py-8"> <div class="flex-1 space-y-4"> ${renderComponent($$result3, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Services", href: "/services" }, { label: "Stone-Coated Steel" }] })} <h2 class="text-medium max-w-[530px] text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]">
What is Stone-Coated Steel Roofing?
</h2> <p class="text-sm lg:text-base">
Stone-coated steel roofing gives you the look of shake, clay tile, or traditional shingles — with the
              strength of a steel core underneath. Each panel is built from a galvanized steel base, coated with a layer
              of natural stone granules bonded with an acrylic film. The result is a roof that handles Colorado's hail,
              UV intensity, and freeze-thaw cycles without granule loss, cracking, or warping. Installed over battens
              using Above-Sheathing Ventilation (ASV), hot air rises naturally and vents away from the roof deck —
              keeping your attic cooler in summer and reducing heat loss in winter. It looks nothing like industrial
              metal roofing. It looks like the best roof on the block.
</p> </div> <div class="flex gap-4"> ${renderComponent($$result3, "Button", $$Button, { "class": "px-8 py-4 text-base" }, { "default": ($$result4) => renderTemplate` <span> <strong> FREE </strong> Estimate </span> ` })} ${renderComponent($$result3, "Button", $$Button, { "variant": "link", "class": "flex items-center gap-2" }, { "default": ($$result4) => renderTemplate` <svg width="13" height="16" viewBox="0 0 13 16" fill="none"> <path d="M12.361 8.2787L0.503906 14.868C0.367002 14.9454 0.249442 14.9543 0.151228 14.8948C0.0530134 14.8353 0.00390625 14.7281 0.00390625 14.5733V1.43049C0.00390625 1.27573 0.0530134 1.16858 0.151228 1.10906C0.249442 1.04954 0.367002 1.05846 0.503906 1.13585L12.361 7.72513C12.498 7.80251 12.5664 7.89477 12.5664 8.00192C12.5664 8.10906 12.498 8.20132 12.361 8.2787Z" fill="white"></path> </svg> <span> Explore Styles & Colors </span> ` })} </div> </div> <!-- Right Contents --> <div class="h-[400px] w-full items-center overflow-hidden rounded-lg lg:self-center"> ${renderComponent($$result3, "Image", $$Image, { "src": "/placeholders/thumbnails/residential-1.png", "alt": "Residential Roofing", "width": 600, "height": 400, "class": "h-full w-full object-cover" })} </div> </div> </div> ` })} ${renderComponent($$result2, "WhyStoneCoated", $$WhyStoneCoated, { "badgeText": "Why Stone-Coated Steel", "title": "Why Upgrade to Stone-Coated Steel?", "description": "<p>Most roofers can install asphalt shingles, but metal roofing needs special skills and precise work. It requires correct fastener placement, thermal expansion handling, proper underlayment, and careful panel checks. Poor installation can cause leaks and damage, but done right, a metal roof lasts a lifetime. As a Metal Roofing Alliance member and authorized Westlake Royal installer, we meet high standards and offer a lifetime workmanship warranty.</p> <p> We act as licensed general contractors, inspecting your roof\u2019s structure, pitch, decking, ventilation, and drainage before recommending a system. A metal roof over damaged decking or poor ventilation won\u2019t perform well. We handle everything: tear-off, deck repair, installation, and final inspection. Plus, financing options start at $99/month through Service Finance Company and Wisetack. </p>", "image": "/placeholders/thumbnails/residential-2.png", "buttonText": "Get FREE Metal Roofing Estimate", "imagePosition": "left" })} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "PopularRoofingMaterials", $$PopularRoofingMaterials, { "badge": "Why Stone-Coated Steel", "title": "Extreme Weather Protection for Colorado Homes", "description": "Colorado doesn't have one type of severe weather \u2014 it has all of them. Hail season runs April through September. Wind events regularly push past 60 mph on the Front Range. Wildfires are a growing concern across the state, and UV exposure at altitude degrades ordinary roofing materials faster than anywhere at sea level. Unified Steel\u2122 stone-coated panels are engineered to handle all of it \u2014 tested and warranted, not just rated.", "materials": materials, "source": { label: "Source: Westlake Royal Building Products \u2014 Unified Steel\u2122", href: "#" } })} ${renderComponent($$result2, "ComparisonSection", $$ComparisonSection, {})} ${renderComponent($$result2, "ComparisonTable", $$ComparisonTable, {})} ${renderComponent($$result2, "StylesProfiles", $$StylesProfiles, {})} ${renderComponent($$result2, "RecentProjects", $$RecentProjects, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/stone-coated-steel-roofing-co.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/services/stone-coated-steel-roofing-co.astro";
const $$url = "/services/stone-coated-steel-roofing-co";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StoneCoatedSteelRoofingCo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
