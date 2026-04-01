import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { e as $$NoiseBg, c as $$Icon } from './Footer_YfAkoF97.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$ArticalCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticalCard;
  const {
    image = "/social-preview.png",
    imageAlt = "",
    title,
    description = "",
    date = "",
    readTime = "",
    href = "#",
    class: className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "group border-gradient block overflow-hidden rounded-2xl before:bg-linear-to-b before:from-white/34 before:to-white/4",
    className
  ], "class:list")}> ${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0 [--noise-overlay:linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.9))] [--noise-radial:radial-gradient(50%_50%_at_50%_50%,rgba(48,48,48,0.2)_0%,rgba(48,48,48,0.5)_100%)]" }, { "default": ($$result2) => renderTemplate`  <div class="group/image relative aspect-video w-full overflow-hidden"> ${typeof image === "string" ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(imageAlt || title, "alt")} class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/image:scale-105">` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": imageAlt || title, "class": "h-full w-full object-cover transition-transform duration-500 ease-out group-hover/image:scale-105" })}`} <!-- Overlay Gradient --> <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0"></div> </div>  <div class="space-y-4 p-4"> <!-- Meta --> <div class="flex items-center gap-x-6 text-sm font-medium"> ${date && renderTemplate`<div class="flex items-center gap-x-2 text-[#CCCCCC]"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "calender-2", "class": "size-5 shrink-0" })} <span>${date}</span> </div>`} ${readTime && renderTemplate`<div class="flex items-center gap-x-2 text-[#CCCCCC]"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "clock-2", "class": "size-5 shrink-0" })} <span>${readTime}</span> </div>`} </div> <!-- Title & Description --> <div class="space-y-3"> <h4 class="font-heading text-2xl leading-8 font-normal text-white"> ${title} </h4> ${description && renderTemplate`<p class="line-clamp-2 text-sm leading-relaxed text-white/60">${description}</p>`} </div> <!-- Read More --> <div class="flex items-center gap-x-2"> <span class="text-sm font-bold tracking-wider text-white underline underline-offset-4 transition-colors duration-200 group-hover:text-primary">Read More</span> </div> </div> ` })} </a>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/articales/ArticalCard.astro", void 0);

const blogEntries = [
  {
    slug: "hail-damage-9-signs",
    image: "/placeholders/works/1.jpg",
    date: "July 1, 2026",
    readTime: "7 Mins",
    title: "Hail Damage: 9 Signs Your Roof Took a Hit (Even If It Looks Fine)",
    description: "After a Colorado storm, damage often hides in the details—soft spots, granule loss, bruised tiles, or bent flashing. Here’s a fast visual checklist to know when you should schedule an inspection vs. when you’re safe to wait."
  },
  {
    slug: "roof-replacement-cost",
    image: "/placeholders/works/2.jpg",
    date: "July 1, 2026",
    readTime: "8 Mins",
    title: "Roof Replacement Cost: What Actually Changes the Price in Colorado",
    description: "Square footage is only the starting point. Material type, roof pitch, tear-off layers, ventilation upgrades, and code requirements can swing the total a lot. We’ll break down the biggest price drivers so your quote makes sense."
  },
  {
    slug: "spring-roof-maintenance",
    image: "/placeholders/works/3.jpg",
    date: "January 3, 2026",
    readTime: "3 Mins",
    title: "Spring Roof Maintenance: 12-Minute Routine to Prevent Expensive Repairs",
    description: "Small issues become leaks when temperatures swing. This quick seasonal routine covers gutters, vents, seal points, and debris zones—plus what you should never DIY on steep roofs. A little prevention now saves a lot later."
  },
  {
    slug: "the-5-roof-leaks",
    image: "/placeholders/works/4.jpg",
    date: "May 12, 2026",
    readTime: "6 Mins",
    title: "The 5 Roof Leaks That Start Small—and Get Expensive Fast",
    description: "Most leaks begin at transitions: flashing, valleys, vents, and skylights. Learn where to look first, what “warning stains” really mean, and when a quick fix becomes a full repair."
  },
  {
    slug: "colorado-wind-uplift",
    image: "/placeholders/works/1.jpg",
    date: "April 21, 2026",
    readTime: "12 Mins",
    title: "Colorado Wind Uplift: Why Some Roofs Fail Before the Storm Ends",
    description: "Wind doesn’t just “blow shingles off”—it lifts edges, breaks seals, and exploits weak decking zones. Here’s how proper fastening, underlayment, and edge metal prevent blow-offs."
  },
  {
    slug: "hail-damage-checklist",
    image: "/placeholders/works/2.jpg",
    date: "March 28, 2026",
    readTime: "8 Mins",
    title: "Hail Damage Checklist: What Insurance Adjusters Notice First",
    description: "Bruising, mat fractures, granule loss, dented vents—hail signatures look different by material. Use this homeowner-friendly checklist before you file (or skip) a claim."
  }
];
const blogListItems = blogEntries.map((blog) => ({
  ...blog,
  href: `/blogs/${blog.slug}`
}));
const recentBlogListItems = blogListItems.slice(0, 3);

export { $$ArticalCard as $, blogListItems as b, recentBlogListItems as r };
