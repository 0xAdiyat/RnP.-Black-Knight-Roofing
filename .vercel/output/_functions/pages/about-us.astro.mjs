import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, e as $$NoiseBg, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Hero } from '../chunks/Hero_B45vm2wT.mjs';
import { $ as $$Brands } from '../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$AboutSection } from '../chunks/AboutSection_DeskLe6c.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_CtEZUqdL.mjs';
import { $ as $$Process } from '../chunks/Process_i5H1XAKH.mjs';
import { s as step1, a as step2, b as step4 } from '../chunks/step-4_PqBYbBEu.mjs';
import { s as step3 } from '../chunks/step-3_DCOQ1mro.mjs';
import { $ as $$ServiceAreas } from '../chunks/ServiceAreas_BfRTDTiz.mjs';
import { $ as $$Faqs } from '../chunks/Faqs_DHvlwYar.mjs';
import { $ as $$RecentArticales } from '../chunks/RecentArticales_KLXtsZ4p.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CCmGuUXD.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { teamMember } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-4 rounded overflow-hidden flex flex-col items-center"> <div class="aspect-29/31 overflow-hidden rounded"> ${teamMember.image && typeof teamMember.image === "string" ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": teamMember.image, "alt": teamMember.name, "width": 300, "height": 300, "class": "rounded" })}` : teamMember.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": teamMember.image, "alt": teamMember.name, "width": 300, "height": 300, "class": "rounded" })}` : renderTemplate`<div class="aspect-29/31 bg-white/15 rounded"></div>`} </div> <div class="text-center"> <div class="text-xl font-semibold leading-8"> ${teamMember.name} </div> <p class="text-xs"> ${teamMember.position} </p> </div> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/TeamCard.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/about-us-section__hero.CjWJzyoU.avif","width":2880,"height":1920,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/about-us-section__hero.avif";
							}
							
							return target[name];
						}
					});

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | Top Veteran Owned Roofing Company | Black Knight Roofing" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "Meet the Team of Experts <br/> That Gets Your Roofing Job Done", "subtitle": "Colorado's #1 Veteran-Owned Roofing Company" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>
Lorem ipsum dolor sit amet consectetur. Dictum morbi ac nibh nibh leo vitae at id faucibus. Ultrices duis tempor
      eget proin euismod sed dolor eu suspendisse. Amet ridiculus erat sit vulputate. Dui est feugiat risus ultrices.
</p> ` })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "AboutSection", $$AboutSection, {})} ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "id": "meet-the-team px-0 py-0" }, { "default": ($$result3) => renderTemplate` <div class="container space-y-12 py-10 lg:py-20"> <h2 class="text-center">Meet the Black Knight Roofing Team</h2> <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-5 gap-y-12"> ${renderComponent($$result3, "TeamCard", $$TeamCard, { "teamMember": {
    image: "/placeholders/teams/1.png",
    name: "Dan Crowder",
    position: "Founder & Managing Director"
  } })} ${renderComponent($$result3, "TeamCard", $$TeamCard, { "teamMember": {
    image: "/placeholders/teams/2.png",
    name: "Dan Crowder",
    position: "Founder & Managing Director"
  } })} ${renderComponent($$result3, "TeamCard", $$TeamCard, { "teamMember": {
    image: "/placeholders/teams/3.png",
    name: "Dan Crowder",
    position: "Founder & Managing Director"
  } })} ${renderComponent($$result3, "TeamCard", $$TeamCard, { "teamMember": {
    image: "/placeholders/teams/4.png",
    name: "Dan Crowder",
    position: "Founder & Managing Director"
  } })} ${renderComponent($$result3, "TeamCard", $$TeamCard, { "teamMember": {
    image: "/placeholders/teams/1.png",
    name: "Dan Crowder",
    position: "Founder & Managing Director"
  } })} ${renderComponent($$result3, "TeamCard", $$TeamCard, { "teamMember": {
    image: "/placeholders/teams/2.png",
    name: "Dan Crowder",
    position: "Founder & Managing Director"
  } })} ${renderComponent($$result3, "TeamCard", $$TeamCard, { "teamMember": {
    image: "/placeholders/teams/3.png",
    name: "Dan Crowder",
    position: "Founder & Managing Director"
  } })} ${renderComponent($$result3, "TeamCard", $$TeamCard, { "teamMember": {
    image: "/placeholders/teams/4.png",
    name: "Dan Crowder",
    position: "Founder & Managing Director"
  } })} </div> </div> ` })} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} <div id="our-process"> ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps })} </div> ${renderComponent($$result2, "ServiceAreas", $$ServiceAreas, {})} ${renderComponent($$result2, "Faqs", $$Faqs, {})} ${renderComponent($$result2, "RecentArticales", $$RecentArticales, {})} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/about-us.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AboutUs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
