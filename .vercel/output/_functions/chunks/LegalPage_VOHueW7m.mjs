import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, aq as renderTransition, f as renderSlot } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, d as $$Footer } from './Footer_YfAkoF97.mjs';
/* empty css                                 */

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$LegalPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LegalPage;
  const {
    title,
    description,
    eyebrow = "Legal Information",
    heading,
    intro,
    updatedLabel = "Last updated: March 31, 2026"
  } = Astro2.props;
  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/accessibility", label: "Accessibility" },
    { href: "/company-info", label: "Company Info" },
    { href: "/terms-of-use", label: "Terms of Use" }
  ];
  const pathname = Astro2.url.pathname.replace(/\/$/, "") || "/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<section class="legal-shell px-0 pt-32 pb-14 sm:pt-28 lg:pt-32"> <div class="container"> <div class="px-1 sm:px-4 lg:px-0"> <div class="mb-8 flex items-start justify-between gap-6 sm:mb-10 lg:mb-12 lg:gap-8"> <div class="min-w-0 max-w-5xl"> <div class="text-[0.72rem] leading-5 font-semibold tracking-[0.02em] text-white/45 uppercase lg:hidden"${addAttribute(renderTransition($$result2, "ygm5yrmq", "", "legal-meta-mobile"), "data-astro-transition-scope")}> <div>${eyebrow}</div> <div class="mt-1 normal-case">${updatedLabel}</div> </div> <h1 class="legal-display-word mt-4 max-w-4xl text-left sm:mt-5"${addAttribute(renderTransition($$result2, "owtv5m2p", "", "legal-heading"), "data-astro-transition-scope")}> ${heading} </h1> </div> <div class="hidden shrink-0 pt-4 text-right text-[0.78rem] leading-5 font-semibold tracking-[0.02em] text-white/45 uppercase lg:block"${addAttribute(renderTransition($$result2, "myli6q5g", "", "legal-meta-desktop"), "data-astro-transition-scope")}> <div>${eyebrow}</div> <div class="mt-1 normal-case">${updatedLabel}</div> </div> </div> <div class="mx-auto max-w-4xl"> ${intro && renderTemplate`<p class="legal-intro mt-3 lg:mt-0"${addAttribute(renderTransition($$result2, "qa7eewpc", "", "legal-intro"), "data-astro-transition-scope")}>${intro}</p>`} <div class="sticky top-20 z-30 mt-6 border-y border-white/10 bg-[#171717]/88 py-3 backdrop-blur-md sm:top-20 sm:mt-8 sm:py-4"> <nav aria-label="Legal pages" class="legal-tabs-scroll -mx-1 flex gap-2 overflow-x-auto px-1 sm:mx-0 sm:flex-wrap sm:gap-2.5 sm:overflow-visible sm:px-0"${addAttribute(renderTransition($$result2, "s4nngw3u", "", "legal-nav"), "data-astro-transition-scope")}> ${legalLinks.map((link) => {
    const isActive = pathname === link.href;
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(isActive ? "page" : void 0, "aria-current")}${addAttribute([
      "shrink-0 rounded-full px-3 py-1.5 text-sm whitespace-nowrap transition-colors",
      isActive ? "bg-primary text-black" : "text-white/58 hover:bg-white/5 hover:text-white"
    ], "class:list")}${addAttribute(renderTransition($$result2, "hfw4odob", "", `legal-tab-${link.label.toLowerCase().replace(/\s+/g, "-")}`), "data-astro-transition-scope")}> ${link.label} </a>`;
  })} </nav> </div> <article class="legal-prose mt-8 sm:mt-10"${addAttribute(renderTransition($$result2, "oq53dnqd", "", "legal-content"), "data-astro-transition-scope")}> ${renderSlot($$result2, $$slots["default"])} </article> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/legal/LegalPage.astro", "self");

export { $$LegalPage as $ };
