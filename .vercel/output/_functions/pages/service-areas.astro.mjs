import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, e as $$NoiseBg, h as $$RatingStars, c as $$Icon, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Hero } from '../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Brands, a as $$BadgeTitle } from '../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$Process } from '../chunks/Process_i5H1XAKH.mjs';
import { s as step1, a as step2, b as step4 } from '../chunks/step-4_PqBYbBEu.mjs';
import { s as step3 } from '../chunks/step-3_DCOQ1mro.mjs';
import { $ as $$Faqs } from '../chunks/Faqs_DHvlwYar.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CCmGuUXD.mjs';
import { s as serviceAreas } from '../chunks/service-areas_Duz4fqXM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$ServiceAreaCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceAreaCard;
  const { image, city, state, href = "#", class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="from-primary rounded-2xl bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> <div${addAttribute([
    "group relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-[#111]",
    className
  ], "class:list")}> <!-- Background Image --> <div class="absolute inset-0 transition-transform duration-500 group-hover:scale-105"> ${typeof image === "string" ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(`${city}, ${state}`, "alt")} class="h-full w-full object-cover">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "alt": `${city}, ${state}`, "class": "h-full w-full object-cover" })}`} <!-- Overlay Gradient --> <div class="absolute inset-0 bg-linear-to-b from-transparent from-40% to-black"></div> </div> <!-- Content --> <div class="relative z-10 px-4 py-8"> <p class="font-body text-lg font-medium text-white"> ${city}, ${state} </p> </div> </div> </a>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/service-area/ServiceAreaCard.astro", void 0);

const heroBg = new Proxy({"src":"/_astro/service-area-section__hero.Dl6UvQcw.avif","width":4032,"height":2304,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/service-area-section__hero.avif";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const processSteps = [
    {
      image: step1,
      step: "Step 1",
      title: "Contact Our Team",
      description: "Get in touch with us by phone or fill out a form! Our customer service team is on standby."
    },
    {
      image: step2,
      step: "Step 2",
      title: "Schedule Inspection",
      description: "We will schedule a convenient time to inspect your roof and assess the project scope."
    },
    {
      image: step3,
      step: "Step 3",
      title: "Review Your Proposal",
      description: "Receive a detailed proposal outlining the work, timeline, and transparent pricing."
    },
    {
      image: step4,
      step: "Step 4",
      title: "Project Completion",
      description: "Our expert team completes the project to the highest standards with a final walkthrough."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroBg, "title": "Your Roofing Solution Across Colorado", "subtitle": "Colorado's #1 Veteran-Owned Roofing Company" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>
Whether you need a roof inspection, repair, or replacement, our team is ready to assist you. Fill out the form or
      give us a call to schedule a free consultation at your home. Service areas include Denver, Aurora, Littleton,
      Westminster, Arvada, Golden, Erie, Brighton. Anywhere from Fort Collins to Colorado Springs!
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div>  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-20"> ${renderComponent($$result3, "BadgeTitle", $$BadgeTitle, { "badge": "Service Areas", "title": "Locations We Serve Throughout <br /> Colorado and Surroundings", "class": "flex flex-col items-center text-center" })} <div class="grid grid-cols-1 gap-x-4 gap-y-8 pt-16 md:grid-cols-2 lg:grid-cols-3"> ${serviceAreas.map((area) => renderTemplate`${renderComponent($$result3, "ServiceAreaCard", $$ServiceAreaCard, { "city": area.city, "state": area.state, "image": area.image, "href": `/service-areas/${area.slug}` })}`)} </div> </div>  <div class="container grid grid-cols-1 gap-4 py-16 md:grid-cols-2 lg:grid-cols-4"> <!-- Total Projects Completed --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result3, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result4) => renderTemplate` <div class="font-heading text-primary text-[2rem]">100+</div> <div> <div class="text-lg font-bold">Roofing Projects</div> <div class="text-[#AAAAAA]">in Colorado</div> </div> ` })} </div> <!-- Google Retings --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result3, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result4) => renderTemplate` <div class="text-primary text-[2rem] font-bold">5.0</div> <div class="space-y-1"> <div class="text-lg font-bold"> ${renderComponent($$result4, "RatingStars", $$RatingStars, { "rating": 5, "size": 16, "fillColor": "#F7B715", "strokeColor": "none" })} </div> <div class="text-[#AAAAAA]">40+ Google Reviews</div> </div> ` })} </div> <!-- Workmanship Warranty --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result3, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result4) => renderTemplate` <div class="text-primary size-12 font-bold"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "shield-check", "size": 48 })} </div> <div> <div class="font-heading text-[2rem] leading-11 font-normal">Licensed</div> <div class="text-[#AAAAAA]">Bonded & Insured</div> </div> ` })} </div> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result3, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result4) => renderTemplate` <div class="text-primary size-12 font-bold"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "badge", "size": 48 })} </div> <div> <div class="font-heading text-[2rem] leading-11 font-normal">Lifetime</div> <div class="text-[#AAAAAA]">Workmanship Warranty</div> </div> ` })} </div> </div> ` })} ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/service-areas/index.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/service-areas/index.astro";
const $$url = "/service-areas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
