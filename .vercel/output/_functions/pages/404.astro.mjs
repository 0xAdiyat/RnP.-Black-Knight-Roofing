import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Layout, a as $$Navbar, b as $$Button, c as $$Icon, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found | Black Knight Roofing", "description": "The page you are looking for does not exist. Return to Black Knight Roofing home page for expert roofing services in Denver.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-zetdm5md": true })} ${maybeRenderHead()}<main class="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-noise px-4 py-16 text-center md:py-24" data-astro-cid-zetdm5md> <!-- Animated background glow --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20 select-none pointer-events-none" data-astro-cid-zetdm5md> <div class="w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary blur-[100px] md:blur-[150px] rounded-full animate-pulse" data-astro-cid-zetdm5md></div> </div> <!-- Background 404 Text - Fixed for responsiveness --> <div class="absolute inset-0 flex items-center justify-center -z-10 select-none pointer-events-none overflow-hidden" data-astro-cid-zetdm5md> <span class="font-heading text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[25rem] leading-none text-white/[0.03] tracking-tighter transition-all duration-500" data-astro-cid-zetdm5md>
404
</span> </div> <div class="container relative z-10 flex flex-col items-center justify-center max-w-4xl" data-astro-cid-zetdm5md> <h1 class="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-none text-balance mb-4" data-astro-cid-zetdm5md>
404
</h1> <!-- Content --> <div class="max-w-2xl space-y-6 md:space-y-8" data-astro-cid-zetdm5md> <p class="text-base sm:text-lg md:text-xl text-tx-body/80 text-pretty leading-relaxed" data-astro-cid-zetdm5md>
It looks like this page has been weathered away or moved to a new location. Don't worry, our structural integrity remains intact.
</p> <!-- Actions --> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-2" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "size": "lg", "href": "/", "class": "w-full sm:w-auto min-w-[200px]", "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` <span data-astro-cid-zetdm5md>Back to Home</span> ` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": "/contact-us", "class": "flex items-center gap-2 group text-white/70 hover:text-white transition-all", "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "phone", "class": "size-5 transition-transform group-hover:scale-110", "data-astro-cid-zetdm5md": true })} <span class="text-lg" data-astro-cid-zetdm5md>Contact Support</span> ` })} </div> </div> </div> <!-- Bottom accent line --> <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" data-astro-cid-zetdm5md></div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-zetdm5md": true })} ` })} `;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/404.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
