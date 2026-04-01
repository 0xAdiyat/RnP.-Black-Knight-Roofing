import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_DZ-DbHVo.mjs';
import { f as cn, c as $$Icon } from './Footer_YfAkoF97.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { a as heroImage, h as heroImage$1, c as concreteTileHero, b as heroImage$7 } from './siding-section__hero_TvPsFjRM.mjs';
import { h as heroImage$2 } from './storm-damage-repair-section__hero_COlLr11u.mjs';
import { h as heroImage$3 } from './stone-coated-steel-roofing-section__hero_qzT4zRQt.mjs';
import { h as heroImage$4 } from './metal-roofing-section__hero_Ho0j1sN2.mjs';
import { h as heroImage$5 } from './roof-replacement-section__hero_CjKPRcr5.mjs';
import { h as heroImage$6 } from './window-replacement-section__hero_CBX7xhGg.mjs';
import { H as HeroBgImage } from './gutters-section__hero_DfFAv98B.mjs';
import { h as heroImage$8 } from './hail-damage-repair-section__hero_Dqjh0Yll.mjs';
import { h as heroImage$9 } from './wind-damage-repair-section__hero_Czfa9sQ7.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const {
    image,
    imageAlt = "",
    title,
    description,
    icon = "roof-icon",
    tags = [],
    href,
    class: className
  } = Astro2.props;
  const Tag = href ? "a" : "div";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": href, "class": cn(
    "group/service-card border-radial relative block h-[20rem] md:h-[25.125rem] w-full overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:scale-[1.01]",
    className
  ) }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="absolute inset-0 z-0 overflow-hidden rounded-2xl"> ${typeof image === "string" ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(imageAlt || title, "alt")} class="h-full w-full object-cover transition-transform duration-700 group-hover/service-card:scale-110">` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": imageAlt || title, "width": 400, "height": 600, "class": "h-full w-full object-cover transition-transform duration-700 group-hover/service-card:scale-110" })}`} <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/30 to-black/90"></div> </div> <div class="relative z-10 flex h-full flex-col justify-end p-6"> <div class="flex flex-col"> <div class="flex items-center gap-x-3"> <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-[0_4px_10px_rgba(0,0,0,0.25)]"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "size-full text-inverted" })} </div> <h3 class="font-heading text-xl leading-tight text-white drop-shadow-sm lg:text-2xl">${title}</h3> </div> <p class="max-h-0 overflow-hidden text-sm leading-[1.6] text-white opacity-0 transition-all delay-200 duration-500 ease-out group-hover/service-card:max-h-32 group-hover/service-card:pt-4 group-hover/service-card:opacity-100"> ${description} </p> ${tags.length > 0 && renderTemplate`<div class="flex max-h-0 translate-y-4 flex-wrap gap-1 overflow-hidden opacity-0 transition-all delay-300 duration-500 ease-out group-hover/service-card:max-h-20 group-hover/service-card:translate-y-0 group-hover/service-card:opacity-100"> <div class="flex flex-wrap gap-1 pt-3"> ${tags.map((tag) => renderTemplate`<span class="bg-primary/90 whitespace-nowrap rounded-full px-3 py-1 text-center font-body text-[12px] font-normal leading-4 text-[#111] backdrop-blur-sm"> ${tag} </span>`)} </div> </div>`} </div> </div> ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/services/ServiceCard.astro", void 0);

const services = [
  {
    slug: "residential-roofing-co",
    image: heroImage,
    title: "Residential Roofing",
    description: "We repair, replace, and upgrade roofs for Colorado homeowners using asphalt, metal, tile and premium systems — with guidance on what makes the most sense for your home and your long-term goals.",
    icon: "roof-icon",
    tags: ["Shingle Roofing", "Metal Roofing"],
    type: "residential"
  },
  {
    slug: "commercial-roofing-co",
    image: heroImage$1,
    title: "Commercial Roofing",
    description: "TPO, EPDM, metal, and other commercial roofing systems installed with organized scheduling, accountable jobsite management, and minimal disruption to your operations. We know your tenants and timelines can’t wait.",
    icon: "roof-icon",
    tags: ["TPO", "EPDM", "Metal"],
    type: "commercial"
  },
  {
    slug: "storm-damage-repair-co",
    image: heroImage$2,
    title: "Storm Damage Repair",
    description: "When hail, wind, or a bad storm hits, we inspect the roof, document what matters, and make repairs that restore protection — not just appearance. We work directly with your insurance adjuster so you get the coverage you’re actually owed.",
    icon: "roof-icon",
    tags: [],
    type: "residential"
  },
  {
    slug: "stone-coated-steel-roofing-co",
    image: heroImage$3,
    title: "Stone-Coated Steel Roofing",
    description: "Want the look of a premium roof with serious durability behind it? Stone-coated steel gives you strong curb appeal, long-term performance, and a smart upgrade path for Colorado weather. Class 4 impact rated — the highest available.",
    icon: "roof-icon",
    tags: ["50-Year Limited Warranty", "120 MPH Wind Rated", "Class 4 Impact Rated"],
    type: "residential"
  },
  {
    slug: "concrete-tile-roofing",
    image: concreteTileHero,
    title: "Concrete Tile Roofing",
    description: "Concrete tile gives your home a bold, finished look and lasting protection. It’s premium option for homeowners who want standout style, strong durability, and long-term value. Available in Class 3 and Class 4 hail-rated profiles. ",
    icon: "roof-icon",
    tags: ["Limited Lifetime Warranty", "Class 4 Fire Rated", "Class 3 & 4 Hail Options"],
    type: "residential"
  },
  {
    slug: "metal-roofing-co",
    image: heroImage$4,
    title: "Metal Roofing",
    description: "High-performance metal roofing with clean lines, strong weather resistance, and low-maintenance ownership — for homeowners who want a longer-lasting system that doesn’t need babying after every Colorado storm.",
    icon: "roof-icon",
    tags: [],
    type: "residential"
  },
  {
    slug: "roof-replacement-services-co",
    image: heroImage$5,
    title: "Roof Replacement",
    description: "When repairs are no longer the right answer, we handle the full tear-off, system updates, and installation with builder-level oversight and clean execution. You’ll know the plan, the timeline, and the cost before we start.",
    icon: "roof-icon",
    tags: [],
    type: "residential"
  },
  {
    slug: "window-replacement-services-co",
    image: heroImage$6,
    title: "Window Replacement",
    description: "Replace drafty, dated windows with better comfort, cleaner trim work, and tighter seals that help your home feel more efficient year-round. We install Westlake Royal Window Solutions as an authorized installer.",
    icon: "roof-icon",
    tags: [],
    type: "residential"
  },
  {
    slug: "siding-co",
    image: heroImage$7,
    title: "Siding",
    description: "Refresh the look of your home and protect the structure underneath with durable vinyl or steel siding — installed for straight lines, tight seams, and lasting color that holds up to Colorado sun and weather.",
    icon: "roof-icon",
    tags: ["Vinyl Siding", "Steel Siding"],
    type: "residential"
  },
  {
    slug: "gutters-co",
    image: HeroBgImage,
    title: "Gutters",
    description: "Seamless gutters and guards move water away from your roofline, fascia, and foundation so small drainage issues don’t turn into bigger repair bills. We size and install them to actually work with your roof system.",
    icon: "roof-icon",
    tags: ["Seamless Gutters", "Gutter Guards"],
    type: "residential"
  },
  {
    slug: "hail-damage-repair-co",
    image: heroImage$8,
    title: "Hail Damage Repair",
    description: "Colorado hail can bruise shingles and shorten roof life fast. We document the damage clearly and repair or replace the affected areas with long-term protection in mind — and we help you get your insurance claim right the first time.",
    icon: "roof-icon",
    tags: [],
    type: "residential"
  },
  {
    slug: "wind-damage-repair-co",
    image: heroImage$9,
    title: "Wind Damage Repair",
    description: "Lifted shingles, exposed underlayment, and loosened edges can lead to leaks fast. We fix the weak points and help secure the system before the next storm rolls through — because wind damage that looks minor rarely stays that way.",
    icon: "roof-icon",
    tags: [],
    type: "residential"
  }
];

export { $$ServiceCard as $, services as s };
