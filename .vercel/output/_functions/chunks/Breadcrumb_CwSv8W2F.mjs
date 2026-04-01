import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DZ-DbHVo.mjs';
import { f as cn, c as $$Icon } from './Footer_YfAkoF97.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { items, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(cn("flex flex-wrap items-center gap-y-2 gap-x-2 md:gap-x-3 text-[10px] sm:text-xs md:text-sm text-white", className), "class")}>  <div class="relative size-4 md:size-5 shrink-0 rounded-[5px] bg-primary/50 drop-shadow-2xl before:absolute before:top-1/2 before:left-1/2 before:size-1.5 md:before:size-2 before:-translate-1/2 before:rounded-full before:bg-primary before:content-['']"></div> ${items.map((item, index) => renderTemplate`<div class="flex items-center gap-x-2 md:gap-x-3"> ${index > 0 && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-right", "class": "size-3 md:size-4 opacity-50 shrink-0" })}`} ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(cn(
    "max-w-[80px] min-[400px]:max-w-[120px] sm:max-w-[200px] md:max-w-none truncate transition-colors hover:text-white",
    index === items.length - 1 ? "text-white" : "opacity-50"
  ), "class")}${addAttribute(item.label, "title")}> ${item.label} </a>` : renderTemplate`<span${addAttribute(cn(
    "max-w-[80px] min-[400px]:max-w-[120px] sm:max-w-[200px] md:max-w-none truncate",
    index === items.length - 1 ? "text-white" : "opacity-50"
  ), "class")}${addAttribute(item.label, "title")}> ${item.label} </span>`} </div>`)} </nav>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
