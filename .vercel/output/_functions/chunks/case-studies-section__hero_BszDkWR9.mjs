import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { b as $$Button, c as $$Icon } from './Footer_YfAkoF97.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$WorkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkCard;
  const { image, title, subtitle, category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative h-[387px] overflow-hidden rounded-2xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "alt": title, "width": 358, "height": 387, "class": "h-full w-full rounded-2xl object-cover" })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "alt": title, "width": 358, "height": 387, "class": "h-full w-full rounded-2xl object-cover" })}`} <div class="from-inverted/0 to-inverted absolute inset-0 top-0 left-0 flex h-full w-full flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-b from-30% p-5"> <div class="flex items-center gap-x-4"> <div class="flex-1 space-y-2"> <div class="text-base font-bold uppercase"> <div>${title}</div> ${subtitle && renderTemplate`<div>(${subtitle})</div>`} </div> <div class="text-xs font-bold uppercase">${category}</div> </div> ${renderComponent($$result, "Button", $$Button, { "class": "flex h-8 w-8 items-center justify-center rounded-full p-2" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "plus" })} ` })} </div> </div> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/recent-projects/WorkCard.astro", void 0);

const caseStudiesHero = new Proxy({"src":"/_astro/case-studies-section__hero.D3rPkkYQ.avif","width":2316,"height":3088,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/case-studies-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { $$WorkCard as $, caseStudiesHero as c };
