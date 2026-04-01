import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, e as $$NoiseBg, s as sunflow, b as $$Button, f as cn, h as $$RatingStars, c as $$Icon, d as $$Footer } from '../../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Hero } from '../../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Brands, a as $$BadgeTitle } from '../../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Testimonials } from '../../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$Process } from '../../chunks/Process_i5H1XAKH.mjs';
import { $ as $$Faqs } from '../../chunks/Faqs_DHvlwYar.mjs';
import { s as step1, a as step2, b as step4 } from '../../chunks/step-4_PqBYbBEu.mjs';
import { s as step3 } from '../../chunks/step-3_DCOQ1mro.mjs';
import { s as services, $ as $$ServiceCard } from '../../chunks/services_BEFxAK7I.mjs';
import { s as serviceAreas } from '../../chunks/service-areas_Duz4fqXM.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CCmGuUXD.mjs';
export { renderers } from '../../renderers.mjs';

const heroBg = new Proxy({"src":"/_astro/specific-service-area-section__hero.DTRTrHCy.avif","width":2880,"height":2160,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/specific-service-area-section__hero.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
async function getStaticPaths() {
  return serviceAreas.map((area) => ({
    params: { slug: area.slug },
    props: { area }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { area } = Astro2.props;
  const rowPattern = [3, 2, 3, 4];
  const colSpanMap = {
    2: "md:col-span-6",
    3: "md:col-span-4",
    4: "md:col-span-3"
  };
  function getColSpanClass(index) {
    let remaining = index;
    let patternIndex = 0;
    while (remaining >= rowPattern[patternIndex % rowPattern.length]) {
      remaining -= rowPattern[patternIndex % rowPattern.length];
      patternIndex++;
    }
    const cardsInRow = rowPattern[patternIndex % rowPattern.length];
    return colSpanMap[cardsInRow] || "col-span-4";
  }
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Roofing Services in ${area.city}, ${area.state} | Black Knight Roofing` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroBg, "title": `Expert Roofing Services in <br /> ${area.city}, ${area.state}`, "subtitle": `${area.city}'s Preferred Veteran-Owned Roofers` }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>
Black Knight Roofing provides premium roofing solutions, storm restoration, and exterior upgrades for homeowners
      in ${area.city} and the surrounding areas. From minor repairs to full replacements, we bring quality craftsmanship and
      veteran-owned integrity to every project.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "relative bg-[#131313] px-0 py-0" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": sunflow, "width": 1440, "height": 810, "alt": "Sunflow", "class": "pointer-events-none absolute top-0 right-0 h-full w-full object-cover opacity-20" })} <div class="relative container grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2"> <div class="space-y-8"> ${renderComponent($$result3, "BadgeTitle", $$BadgeTitle, { "badge": "Service Area", "title": `${area.city}\u2019s Favorite Roofers`, "class": "flex flex-col items-start" })} <p class="text-lg text-[#AAAAAA]">
We&apos;re proud to call ${area.city} our home. Our dependable service and quality roofing reflect the care we have
          for our community. Through Black Knight Cares, we support local initiatives and help residents stay safe when storms
          approach. Serving ${area.city} means helping the community shine brighter every day.
</p> ${renderComponent($$result3, "Button", $$Button, { "variant": "primary", "data-estimate-trigger": true }, { "default": ($$result4) => renderTemplate`FREE Roof Estimate` })} </div> <div class="relative aspect-2/1 h-[360px] w-full overflow-hidden rounded-[12px] lg:aspect-square"> <img src="/placeholders/works/1.jpg"${addAttribute(`${area.city} roofing projects`, "alt")} class="h-full w-full object-cover"> </div> </div> ` })}  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "bg-[#111] px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container py-20"> ${renderComponent($$result3, "BadgeTitle", $$BadgeTitle, { "badge": "Our Services", "title": `Roofing Services Offered in ${area.city}`, "class": "flex flex-col items-center text-center" })} <div class="grid grid-cols-12 gap-x-4 gap-y-8 pt-16"> ${services.map((service, index) => renderTemplate`${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "image": service.image, "title": service.title, "description": service.description, "icon": service.icon, "tags": service.tags, "href": `/services/${service.slug}`, "class": cn("col-span-12", getColSpanClass(index)) })}`)} </div> </div>  <div class="container grid grid-cols-1 gap-x-2 py-16 md:grid-cols-2 lg:grid-cols-4"> <!-- Total Projects Completed --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result3, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result4) => renderTemplate` <div class="font-heading text-primary text-[2rem]">100+</div> <div> <div class="text-lg font-bold">Roofing Projects</div> <div class="text-[#AAAAAA]">in Colorado</div> </div> ` })} </div> <!-- Google Retings --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result3, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result4) => renderTemplate` <div class="text-primary text-[2rem] font-bold">5.0</div> <div class="space-y-1"> <div class="text-lg font-bold"> ${renderComponent($$result4, "RatingStars", $$RatingStars, { "rating": 5, "size": 16, "fillColor": "#F7B715", "strokeColor": "none" })} </div> <div class="text-[#AAAAAA]">40+ Google Reviews</div> </div> ` })} </div> <!-- Workmanship Warranty --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result3, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result4) => renderTemplate` <div class="text-primary size-12 font-bold"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "shield-check", "size": 48 })} </div> <div> <div class="font-heading text-[2rem] leading-11 font-normal">Licensed</div> <div class="text-[#AAAAAA]">Bonded & Insured</div> </div> ` })} </div> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result3, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result4) => renderTemplate` <div class="text-primary size-12 font-bold"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "badge", "size": 48 })} </div> <div> <div class="font-heading text-[2rem] leading-11 font-normal">Lifetime</div> <div class="text-[#AAAAAA]">Workmanship Warranty</div> </div> ` })} </div> </div> ` })} ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} ${renderComponent($$result2, "Faqs", $$Faqs, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/service-areas/[slug].astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/service-areas/[slug].astro";
const $$url = "/service-areas/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
