import { b as createAstro, c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_DZ-DbHVo.mjs';
import { f as cn } from './Footer_YfAkoF97.mjs';
/* empty css                            */

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$FaqItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqItem;
  const { question, answer, open = false } = Astro2.props;
  const paragraphs = Array.isArray(answer) ? answer : [answer];
  return renderTemplate`${renderComponent($$result, "faq-item", "faq-item", { "data-open": open.toString(), "class": cn(
    "border-gradient before:via-primary/30 before:pt-0 group/faq-item before:bg-linear-to-r before:from-transparent rounded-2xl before:via-50% before:to-transparent data-[open=true]:before:pt-px data-[open=true]:before:from-[#F2C74422] data-[open=true]:before:via-primary data-[open=true]:before:to-[#F2C74422] transition-all duration-200 ease-in-out"
  ), "data-astro-cid-wbvgzpdm": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<div${addAttribute(cn("bg-[#171717] lg:bg-bg-default block p-5 rounded-2xl", open && "rounded-2xl"), "class")} data-astro-cid-wbvgzpdm> <button class="flex w-full items-center justify-between gap-x-4 text-left hover:cursor-pointer"${addAttribute(open, "aria-expanded")} data-astro-cid-wbvgzpdm> <div class="text-base" data-astro-cid-wbvgzpdm>${question}</div> <div class="from-primary rounded-full bg-radial-[at_25%_25%] via-[#594216] via-50% to-[#594216] p-px" data-astro-cid-wbvgzpdm> <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#303030] transition-colors duration-300" data-astro-cid-wbvgzpdm> <svg class="faq-icon-plus transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-wbvgzpdm> <path d="M5 12h14" data-astro-cid-wbvgzpdm></path> <path class="faq-icon-vertical" d="M12 5v14" data-astro-cid-wbvgzpdm></path> </svg> </div> </div> </button> <div class="faq-answer" data-astro-cid-wbvgzpdm> <div class="space-y-3 pt-4 text-sm leading-relaxed text-white/60" data-astro-cid-wbvgzpdm> ${paragraphs.map((paragraph) => renderTemplate`<p data-astro-cid-wbvgzpdm>${paragraph}</p>`)} </div> </div> </div> ` })}  ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/faqs/FaqItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/faqs/FaqItem.astro", void 0);

export { $$FaqItem as $ };
