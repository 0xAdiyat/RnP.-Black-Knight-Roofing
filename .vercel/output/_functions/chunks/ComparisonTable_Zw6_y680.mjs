import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, u as unescapeHTML } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { a as $$BadgeTitle } from './BadgeTitle_CkONzckv.mjs';
import { e as $$NoiseBg, b as $$Button, s as sunflow, c as $$Icon } from './Footer_YfAkoF97.mjs';
/* empty css                               */
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { c as component1, a as component2, b as component3, d as component4, e as component5 } from './component-5_WqK1aXHa.mjs';
import { c as createSvgComponent } from './runtime_iOZzyetK.mjs';

const previewImg = new Proxy({"src":"/_astro/pine-crest-shake-preview.DbHRZ943.png","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/styles-profiles/pine-crest-shake-preview.png";
							}
							
							return target[name];
						}
					});

const swatchImg = new Proxy({"src":"/_astro/shake-texture-swatch.DCbiHOI5.png","width":640,"height":640,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/styles-profiles/shake-texture-swatch.png";
							}
							
							return target[name];
						}
					});

const $$StylesProfiles = createComponent(($$result, $$props, $$slots) => {
  const profiles = [
    {
      id: "pine-crest-shake",
      label: "Pine - Crest shake",
      title: "Pine - Crest Shake",
      description: "Engineered to replicate hand-split wood shake with the durability of steel.",
      previewImage: previewImg,
      colors: [
        { name: "HARBORWOOD", code: "4DAP93569SF", color: "#6D5A4A" },
        { name: "STIRLING GRAY", code: "4DAP95427SF", color: "#6B6B6B" },
        { name: "COUNTRY BLEND", code: "4DAP93145SF", color: "#7B624A" },
        { name: "IRONWOOD", code: "4DAP95325SF", color: "#4A4139" },
        { name: "GOLD RIVER", code: "4DAP93245SF", color: "#8C7355" },
        { name: "TIMBERWOOD", code: "4DAP93225SF", color: "#7B6241" },
        { name: "BARCELONA", code: "4DAP93185SF", color: "#7B4A4A" },
        { name: "CHARCOAL", code: "4DAP9104000", color: "#333333", isDefault: true }
      ]
    },
    {
      id: "cottage-shingle",
      label: "Cottage Shingle",
      title: "Cottage Shingle",
      description: "A clean, modern look that complements a variety of architectural styles.",
      previewImage: previewImg,
      colors: [
        { name: "CHARCOAL", code: "4DAP9104000", color: "#333333", isDefault: true },
        { name: "WEATHERED WOOD", code: "4DAP9104001", color: "#5D5D4A" }
      ]
    },
    {
      id: "granite-ridge-shingle",
      label: "Granite Ridge Shingle",
      title: "Granite Ridge Shingle",
      description: "The strength of steel with the refined look of architectural shingles.",
      previewImage: previewImg,
      colors: [
        { name: "TIMBERWOOD", code: "4DAP93225SF", color: "#7B6241" }
      ]
    },
    {
      id: "barrel-vault-tile",
      label: "Barrel Vault Tile",
      title: "Barrel Vault Tile",
      description: "Captures the timeless look of Spanish clay tile in a durable steel format.",
      previewImage: previewImg,
      colors: [
        { name: "BARCELONA", code: "4DAP93185SF", color: "#7B4A4A" }
      ]
    },
    {
      id: "pacific-tile",
      label: "Pacific Tile",
      title: "Pacific Tile",
      description: "A low-profile Mediterranean-inspired design for a clean, sophisticated roof.",
      previewImage: previewImg,
      colors: [
        { name: "CHARCOAL", code: "4DAP9104000", color: "#333333", isDefault: true }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": "px-0 py-0", "data-astro-cid-rxwffb5c": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-20 overflow-hidden" id="styles-profiles" data-astro-cid-rxwffb5c> <div class="flex flex-col items-center text-center gap-y-4 mb-20" data-astro-cid-rxwffb5c> ${renderComponent($$result2, "BadgeTitle", $$BadgeTitle, { "badge": "Options", "title": "Styles & Profiles", "class": "flex flex-col items-center", "titleClass": "text-5xl lg:text-7xl font-heading mb-4", "data-astro-cid-rxwffb5c": true })} <p class="text-[#CCCCCC] max-w-2xl text-lg leading-relaxed" data-astro-cid-rxwffb5c>
Choose a profile that matches your home's architecture—then explore CRRC cool roof color options.
</p> </div> <div class="styles-tabs-container" data-astro-cid-rxwffb5c> <!-- Tabs Pill --> <div class="no-scrollbar flex flex-nowrap justify-start gap-2 overflow-x-auto rounded-2xl border border-white/10 p-1.5 backdrop-blur-xl lg:justify-center mx-auto w-full lg:w-auto max-w-full lg:max-w-fit mb-20" data-astro-cid-rxwffb5c> ${profiles.map((profile, idx) => renderTemplate`<button${addAttribute([
    "style-tab-trigger whitespace-nowrap px-4 py-3 [&.active-tab]:border-radial [&.active-tab]:text-primary rounded-xl text-base lg:text-lg font-medium transition-all text-[#888] border-white/5 border hover:bg-white/5 duration-500 cursor-pointer outline-none shrink-0",
    idx === 0 && "active-tab"
  ], "class:list")}${addAttribute(profile.id, "data-id")} data-astro-cid-rxwffb5c> ${profile.label} </button>`)} </div> <!-- Panels --> ${profiles.map((profile, idx) => renderTemplate`<div${addAttribute(["style-panel flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch", idx !== 0 && "hidden"], "class:list")}${addAttribute(profile.id, "data-panel")} data-astro-cid-rxwffb5c> <!-- Left: Preview --> <div class="flex-1 w-full relative aspect-4/5 lg:aspect-758/767 rounded-[40px] overflow-hidden group/preview shadow-2xl" data-astro-cid-rxwffb5c> ${renderComponent($$result2, "Image", $$Image, { "src": profile.previewImage, "width": profile.previewImage.width, "height": profile.previewImage.height, "alt": profile.title, "loading": "eager", "class": "w-full h-full object-cover transition-transform duration-1000 group-hover/preview:scale-105", "data-astro-cid-rxwffb5c": true })} <!-- Overlay Gradients --> <div class="absolute inset-0 bg-linear-to-t from-black/95 via-black/20 to-transparent opacity-90" data-astro-cid-rxwffb5c></div> <div class="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-transparent opacity-40" data-astro-cid-rxwffb5c></div> <!-- Overlay content --> <div class="absolute top-8 left-8" data-astro-cid-rxwffb5c> <div class="flex items-center gap-x-3 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 shadow-xl" data-astro-cid-rxwffb5c> <div class="relative size-3.5 flex items-center justify-center" data-astro-cid-rxwffb5c> <div class="absolute size-full rounded-full bg-[#F7B715] opacity-50 animate-ping" data-astro-cid-rxwffb5c></div> <div class="relative size-2 rounded-full bg-[#F7D515] shadow-[0_0_10px_#F7D515]" data-astro-cid-rxwffb5c></div> </div> <span class="text-[10px] font-black text-white tracking-[0.2em] uppercase" data-astro-cid-rxwffb5c>Live Preview</span> </div> </div> <div class="absolute bottom-0 left-0 inset-x-0 p-4 md:p-12 space-y-2" data-astro-cid-rxwffb5c> <h3 class="text-[clamp(3rem,6vw,5rem)] leading-none font-medium text-white tracking-tight" data-astro-cid-rxwffb5c>${profile.title}</h3> <div class="flex items-center gap-x-3 bg-white/5 backdrop-blur-md w-fit px-3 py-2 rounded-full border border-white/10 group/color" data-astro-cid-rxwffb5c> <div class="size-4 rounded-full bg-[#333333] border border-white/20 shadow-inner group-hover/color:scale-110 transition-transform" data-astro-cid-rxwffb5c></div> <span class="text-sm font-semibold text-white/90 active-color-label" data-astro-cid-rxwffb5c>Charcoal</span> </div> <p class="text-[#CCCCCC] text-base leading-relaxed max-w-xl font-light" data-astro-cid-rxwffb5c> ${profile.description} </p> </div> </div> <!-- Right: Color Grid --> <div class="w-full lg:w-[540px] flex flex-col" data-astro-cid-rxwffb5c> <div class="mb-10 flex items-center gap-4" data-astro-cid-rxwffb5c> <span class="text-primary font-bold text-base tracking-wide uppercase" data-astro-cid-rxwffb5c>Color Options</span> <div class="h-px flex-1 bg-linear-to-r from-primary/30 to-transparent" data-astro-cid-rxwffb5c></div> </div> <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-y-12" data-astro-cid-rxwffb5c> ${profile.colors.map((color) => renderTemplate`<div class="space-y-5 group/swatch cursor-pointer swatch-trigger"${addAttribute(color.name, "data-color-name")} data-astro-cid-rxwffb5c> <div class="relative aspect-square rounded-[32px] overflow-hidden bg-[#1A1A1A] p-0.5 shadow-xl transition-all duration-500 group-hover/swatch:shadow-primary/20 group-hover/swatch:-translate-y-2 ring-primary ring-offset-[6px] ring-offset-black transtion-all group-hover/swatch:ring-2 ring-0" data-astro-cid-rxwffb5c> <div class="w-full h-full rounded-[30px] overflow-hidden relative" data-astro-cid-rxwffb5c> ${renderComponent($$result2, "Image", $$Image, { "src": swatchImg, "alt": color.name, "class": "w-full h-full object-cover scale-[1.3] transition-transform duration-700 group-hover/swatch:scale-[1.4]", "data-astro-cid-rxwffb5c": true })} <!-- Color Tint Overlays for high-fidelity look --> <div class="absolute inset-0 transition-opacity duration-500 opacity-40 group-hover/swatch:opacity-60"${addAttribute(`background-color: ${color.color}; mix-blend-mode: overlay;`, "style")} data-astro-cid-rxwffb5c></div> <div class="absolute inset-0 transition-opacity duration-500 opacity-20 group-hover/swatch:opacity-40"${addAttribute(`background-color: ${color.color}; mix-blend-mode: multiply;`, "style")} data-astro-cid-rxwffb5c></div> <div class="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" data-astro-cid-rxwffb5c></div> </div> </div> <div class="text-center md:text-left space-y-1 pl-1" data-astro-cid-rxwffb5c> <div class="text-white font-bold text-sm tracking-[0.15em] transition-colors group-hover/swatch:text-primary italic uppercase" data-astro-cid-rxwffb5c>${color.name}</div> <div class="text-[#666666] text-xs font-semibold tracking-widest" data-astro-cid-rxwffb5c>${color.code}</div> </div> </div>`)} </div> </div> </div>`)} </div> </section> ` })} ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/services/StylesProfiles.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/services/StylesProfiles.astro", void 0);

const comparisonHeroDefault = new Proxy({"src":"/_astro/comparison-hero.6Zjxw2Kd.png","width":2402,"height":1146,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/tiles/comparison-hero.png";
							}
							
							return target[name];
						}
					});

const roiIllustrationDefault = new Proxy({"src":"/_astro/roi-illustration.C6Pt1_Fu.png","width":1610,"height":968,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/tiles/roi-illustration.png";
							}
							
							return target[name];
						}
					});

const heroBg = new Proxy({"src":"/_astro/hero-bg.xB0oNFbz.png","width":720,"height":750,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/tiles/hero-bg.png";
							}
							
							return target[name];
						}
					});

const heroGradient = new Proxy({"src":"/_astro/bg-overlay.ybO19Ptn.png","width":2880,"height":1800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/tiles/hero-gradient.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$ComparisonSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ComparisonSection;
  const {
    comparisonHero = comparisonHeroDefault,
    titlePart1 = "Concrete Tile",
    titlePart2 = "Asphalt Shingle",
    subtitle = "Temperature Differences",
    messagingTitle = 'Designed for Colorado Architecture. <br class="hidden lg:block" /> Built from the Right Material.',
    messagingContent = "Colorado homes are exposed to extremes \u2014 high-altitude UV radiation, rapid temperature swings, freeze-thaw cycles, heavy hailstorms, and elevated wildfire risk \u2014 which means the roofing material must do far more than simply look good; it must endure. Concrete tile delivers structural integrity and architectural permanence in a way lightweight roofing systems cannot. Unlike traditional shingles that rely primarily on surface granules for protection, concrete tile is solid through its entire thickness.",
    roiBadge = "The ROI",
    roiTitle = "Keeping Temperatures Cool and ROI High",
    roiContent = "The energy-saving Westlake Royal\u2122 Cool Roof System and Cool Roof Color options provide a comfortable living climate, savings on energy costs and can last longer than traditional roof construction. Investing in a tile roof is a long-term strategy for home value and climate resilience.",
    roiCTA,
    roiImage = roiIllustrationDefault,
    showcaseBadge = "How it Work",
    showcaseTitle = "We Use 5 Components to Provide Energy Efficiency and Give Substantial Return on Your Investment",
    showcaseItems = [
      { img: component1, label: "Newpoint\u2122 Concrete Roof Tile" },
      { img: component2, label: "Westlake Royal TileSeal\u2122 Underlayment" },
      { img: component3, label: "Vented Eave Riser" },
      { img: component4, label: "Elevated Batten System\xAE" },
      { img: component5, label: "Vented Ridge" }
    ]
  } = Astro2.props;
  const processMarkdown = async (text) => {
    if (!text) return "";
    const html = await marked.parse(text);
    try {
      if (typeof window !== "undefined" && DOMPurify?.sanitize) {
        return DOMPurify.sanitize(html);
      }
      return html;
    } catch (e) {
      return html;
    }
  };
  const sanitizedHtml = await processMarkdown(roiContent);
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden py-16 lg:py-24"> <!-- Dynamic Background Layers --> <div class="absolute inset-0 -z-10"> <div class="absolute inset-0 bg-[#0A0A0A]"></div> <div class="absolute inset-0 opacity-5"> ${renderComponent($$result, "Image", $$Image, { "src": heroBg, "alt": "", "class": "h-full w-full object-cover", "loading": "lazy" })} </div> <div class="absolute inset-0 opacity-20 lg:opacity-30"> ${renderComponent($$result, "Image", $$Image, { "src": heroGradient, "alt": "", "class": "h-full w-full object-cover", "loading": "lazy" })} </div> </div> <div class="container space-y-16 lg:space-y-24"> <!-- Temperature Differences Hero --> <div class="relative flex flex-col items-center justify-center pt-10 lg:min-h-[600px] lg:pt-20"> <div class="w-full max-w-[1440px]"> ${renderComponent($$result, "Image", $$Image, { "src": comparisonHero, "width": comparisonHero.width, "height": comparisonHero.height, "alt": subtitle, "class": "w-full rounded-3xl object-cover" })} </div> <div class="relative z-10 flex flex-col items-center justify-center px-4 pt-10 text-center uppercase"> <div class="bg-linear-to-b from-white via-[#d9d9d9] to-white/10 bg-clip-text text-[clamp(1.5rem,6vw,5rem)] leading-none font-extrabold tracking-tighter text-transparent"> <span class="block lg:inline">${titlePart1}</span> <span class="text-primary italic opacity-80">vs</span> <span class="block lg:inline">${titlePart2}</span> </div> <div class="mt-2 bg-linear-to-b from-white via-[#d9d9d9] to-[#1a1a1a] bg-clip-text text-[clamp(1.8rem,8vw,64px)] font-bold tracking-tight text-transparent lg:mt-4" style="text-shadow: 0px 4px 24px rgba(0,0,0,0.8), 0px -8px 100px black;"> ${subtitle} </div> </div> </div> <!-- Core Messaging Section --> <div class="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16"> <div class="lg:col-span-5"> <h2 class="font-heading text-3xl leading-[1.1] tracking-tight lg:text-5xl">${unescapeHTML(messagingTitle)}</h2> </div> <div class="border-primary/30 border-l-2 py-2 pl-6 lg:col-span-7 lg:pl-10"> <p class="text-neutral-lighter text-base leading-relaxed font-normal lg:text-xl"> ${messagingContent} </p> </div> </div> <!-- ROI Analysis Section --> <div class="grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-20"> <div class="order-2 space-y-6 lg:order-1 lg:space-y-8"> ${(roiBadge || roiTitle) && renderTemplate`${renderComponent($$result, "BadgeTitle", $$BadgeTitle, { "badge": roiBadge, "title": roiTitle })}`} <div class="text-neutral-lighter text-lg leading-relaxed prose prose-invert max-w-none">${unescapeHTML(sanitizedHtml)}</div> ${roiCTA && renderTemplate`<div class="pt-4"> ${renderComponent($$result, "Button", $$Button, { "href": roiCTA.href, "variant": "primary", "size": "lg", "class": "text-sm font-bold tracking-wide uppercase" }, { "default": async ($$result2) => renderTemplate`${roiCTA.label}` })} </div>`} </div> <div class="relative order-1 overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:order-2"> ${renderComponent($$result, "Image", $$Image, { "src": roiImage, "alt": roiTitle, "class": "w-full transition-transform duration-1000 hover:scale-105" })} </div> </div> <!-- Components Showcase --> <div class="space-y-12 pt-16 lg:space-y-16 lg:pt-24"> ${(showcaseBadge || showcaseTitle) && renderTemplate`${renderComponent($$result, "BadgeTitle", $$BadgeTitle, { "badge": showcaseBadge, "title": showcaseTitle, "class": "mx-auto flex max-w-4xl flex-col items-center text-center" })}`} <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center gap-6 lg:flex lg:flex-wrap lg:items-center lg:justify-center"> ${showcaseItems.map((comp) => renderTemplate`<div class="group relative w-full max-w-[400px] space-y-3 text-center"> <div class="relative aspect-5/3 overflow-hidden rounded-2xl border border-white/5 bg-neutral-900 shadow-xl"> ${renderComponent($$result, "Image", $$Image, { "src": comp.img, "alt": comp.label, "class": "h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" })} </div> <p class="text-neutral-lighter group-hover:text-primary px-2 text-sm font-semibold tracking-wide transition-colors duration-300"> ${comp.label} </p> </div>`)} </div> </div> </div> </section>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/services/ComparisonSection.astro", void 0);

const illustrationTop = createSvgComponent({"meta":{"src":"/_astro/illustration-top.BOYzRCHx.svg","width":663,"height":465,"format":"svg"},"attributes":{"preserveAspectRatio":"none","width":"100%","height":"100%","overflow":"visible","style":"display: block;","viewBox":"0 0 663.025 465.254","fill":"none"},"children":"\n<g id=\"illustration\">\n<path id=\"Vector 92\" d=\"M329.714 2.35575L3.99728 330.45H658.997L329.714 2.35575Z\" fill=\"var(--fill-0, #111111)\" stroke=\"url(#paint0_linear_17052_48681)\" stroke-width=\"3.32849\" />\n<path id=\"Vector 93\" opacity=\"0.24\" d=\"M329.714 68.9256L3.99728 397.02H658.997L329.714 68.9256Z\" fill=\"var(--fill-0, #111111)\" stroke=\"url(#paint1_linear_17052_48681)\" stroke-width=\"3.32849\" />\n<path id=\"Vector 94\" opacity=\"0.24\" d=\"M329.714 135.495L3.99728 463.59H658.997L329.714 135.495Z\" fill=\"var(--fill-0, #111111)\" stroke=\"url(#paint2_linear_17052_48681)\" stroke-width=\"3.32849\" />\n</g>\n<defs>\n<linearGradient id=\"paint0_linear_17052_48681\" x1=\"331.497\" y1=\"2.35575\" x2=\"331.497\" y2=\"330.45\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#F2C744\" />\n<stop offset=\"0.300814\" stop-color=\"#F2C744\" stop-opacity=\"0.32\" />\n<stop offset=\"0.60491\" stop-color=\"#F2C744\" stop-opacity=\"0.22\" />\n<stop offset=\"1\" stop-color=\"#111111\" />\n</linearGradient>\n<linearGradient id=\"paint1_linear_17052_48681\" x1=\"331.497\" y1=\"68.9256\" x2=\"331.497\" y2=\"397.02\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#F2C744\" />\n<stop offset=\"0.300814\" stop-color=\"#F2C744\" stop-opacity=\"0.32\" />\n<stop offset=\"0.60491\" stop-color=\"#F2C744\" stop-opacity=\"0.22\" />\n<stop offset=\"1\" stop-color=\"#111111\" />\n</linearGradient>\n<linearGradient id=\"paint2_linear_17052_48681\" x1=\"331.497\" y1=\"135.495\" x2=\"331.497\" y2=\"463.59\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#F2C744\" />\n<stop offset=\"0.300814\" stop-color=\"#F2C744\" stop-opacity=\"0.32\" />\n<stop offset=\"0.60491\" stop-color=\"#F2C744\" stop-opacity=\"0.22\" />\n<stop offset=\"1\" stop-color=\"#111111\" />\n</linearGradient>\n</defs>\n"});

const comparisonBg = new Proxy({"src":"/_astro/background.CSAIOI65.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/comparison/background.png";
							}
							
							return target[name];
						}
					});

const roofMini = new Proxy({"src":"/_astro/roof-mini.BCQn2gYA.png","width":2580,"height":1135,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/comparison/roof-mini.png";
							}
							
							return target[name];
						}
					});

const bgEllipse = createSvgComponent({"meta":{"src":"/_astro/bg-ellipse.NJlFH-0O.svg","width":395,"height":299,"format":"svg"},"attributes":{"preserveAspectRatio":"none","width":"100%","height":"100%","overflow":"visible","style":"display: block;","viewBox":"0 0 395.076 299","fill":"none"},"children":"\n<g id=\"Ellipse 32\" filter=\"url(#filter0_f_17052_48636)\">\n<ellipse cx=\"197.538\" cy=\"149.5\" rx=\"85.5379\" ry=\"37.5\" fill=\"var(--fill-0, #222222)\" />\n</g>\n<defs>\n<filter id=\"filter0_f_17052_48636\" x=\"0\" y=\"0\" width=\"395.076\" height=\"299\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n<feGaussianBlur stdDeviation=\"56\" result=\"effect1_foregroundBlur_17052_48636\" />\n</filter>\n</defs>\n"});

const $$ComparisonTable = createComponent(($$result, $$props, $$slots) => {
  const comparisonData = [
    { label: "Lifespan", icon: "battery", asphalt: "20\u201330 years", tile: "50-100 years" },
    { label: "Hail Rating", icon: "hail", asphalt: "Varies", tile: "Class A" },
    { label: "Wind Warranty", icon: "wind", asphalt: "Typically lower", tile: "120 mph" },
    { label: "Attic Heat (Tested)", icon: "heat-meter", asphalt: "139\xB0", tile: "94\xB0" },
    { label: "Maintenance", icon: "setting", asphalt: "Moderate", tile: "Minimal" },
    { label: "Weight", icon: "wight-machine", asphalt: "Heavier layered system", tile: "1.5 lbs/sq-ft" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative container overflow-hidden py-16 lg:py-24"> ${renderComponent($$result, "Image", $$Image, { "src": illustrationTop, "alt": "", "class": "pointer-events-none absolute -top-[100px] lg:-top-[150px] left-1/2 z-0 w-full max-w-[800px] -translate-x-1/2 opacity-40" })} <div class="from-primary to-primary/0 relative rounded-[32px] lg:rounded-[48px] bg-linear-to-b p-[2px]"> ${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": "relative overflow-hidden rounded-[32px] lg:rounded-[48px] bg-[#171717] px-6 py-10 lg:px-12 lg:py-16" }, { "default": ($$result2) => renderTemplate` <div> ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "", "class": "pointer-events-none absolute inset-x-0 top-0 z-0 w-full opacity-20" })} ${renderComponent($$result2, "Image", $$Image, { "src": comparisonBg, "alt": "", "class": "pointer-events-none absolute inset-x-0 top-0 z-0 w-full opacity-10" })} <div class="absolute inset-0 top-0 left-0 h-full w-full bg-linear-to-b from-transparent from-70% to-black"></div> <!-- Heading & Icons --> <div class="relative z-10 mb-10 lg:mb-16 flex flex-col items-center gap-6 lg:gap-8 text-center"> <div class="flex flex-col items-center gap-3 lg:gap-4"> <div class="flex items-center gap-x-3"> <div class="relative size-4 lg:size-5 rounded-[5px] bg-[#F7B715]/50 drop-shadow-2xl before:absolute before:top-1/2 before:left-1/2 before:size-1.5 lg:before:size-2 before:-translate-1/2 before:rounded-full before:bg-[#F7D515] before:content-['']"></div> <div class="text-xs lg:text-sm font-medium tracking-wider text-white uppercase">Comparison</div> </div> <div class="relative mt-2 flex items-center justify-center gap-4 lg:gap-16"> ${renderComponent($$result2, "Image", $$Image, { "src": roofMini, "alt": "", "class": "hidden w-20 lg:w-24 brightness-75 transition-all group-hover:brightness-100 lg:block" })} <h2 class="font-heading text-3xl leading-tight text-white lg:text-6xl max-w-[90%] lg:max-w-none mx-auto">
Stone-Coated Steel vs <br class="hidden lg:block"> Asphalt Shingles
</h2> ${renderComponent($$result2, "Image", $$Image, { "src": roofMini, "alt": "", "class": "hidden w-20 lg:w-24 brightness-75 lg:block" })} <!-- Floating Ellipse decoration --> ${renderComponent($$result2, "Image", $$Image, { "src": bgEllipse, "alt": "", "class": "pointer-events-none absolute -top-5 lg:-top-10 -right-10 lg:-right-20 w-32 lg:w-48 opacity-40" })} </div> </div> </div> <!-- Table View (Desktop) --> <div class="relative z-10 hidden lg:block"> <table class="w-full border-separate border-spacing-0"> <thead> <tr> <th class="border-b border-[#594216] px-6 py-6 text-left text-xl font-medium text-white">Feature</th> <th class="border-b border-[#594216] px-6 py-6 text-left text-xl font-medium text-white">Asphalt Shingles</th> <th class="relative p-0 text-left"> <div class="from-primary absolute inset-0 -top-4 z-0 rounded-t-3xl bg-radial-[at_40%_20%] via-[#594216] to-[#594216] px-px pt-px"> <div class="h-full w-full rounded-t-3xl bg-[#111]"></div> </div> <div class="text-primary relative z-10 border-b border-[#59421650] px-6 py-6 text-left text-xl font-medium">
Stone-Coated Steel
</div> </th> </tr> </thead> <tbody class="text-neutral-lighter"> ${comparisonData.map((row, idx, arr) => renderTemplate`<tr class="group"> <td class="border-b border-[#594216] px-6 py-7 group-last:border-b-0"> <div class="flex items-center gap-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": row.icon, "size": 24, "class": "text-primary" })} <span class="text-base font-medium">${row.label}</span> </div> </td> <td class="border-b border-[#594216] px-6 py-7 text-left text-white/70 group-last:border-b-0"> ${row.asphalt} </td> <td class="relative p-0 text-left"> <div${addAttribute(["absolute inset-0 z-0 border-x border-[#594216] bg-[#111]", idx === arr.length - 1 && "rounded-b-3xl border-b"], "class:list")}></div> <div${addAttribute(["text-primary relative z-10 flex items-center gap-2 border-b border-[#59421650] px-6 py-7 text-left text-lg font-semibold", idx === arr.length - 1 && "border-none"], "class:list")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "double-tick", "size": 16 })} <span>${row.tile}</span> </div> </td> </tr>`)} </tbody> </table> </div> <!-- Card View (Mobile/Tablet) --> <div class="relative z-10 grid grid-cols-1 gap-6 lg:hidden"> ${comparisonData.map((row) => renderTemplate`<div class="rounded-2xl border border-[#594216]/30 bg-neutral-900/50 p-6 space-y-4"> <div class="flex items-center gap-3 border-b border-[#594216]/30 pb-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": row.icon, "size": 20, "class": "text-primary" })} <span class="text-lg font-bold text-white tracking-wide">${row.label}</span> </div> <div class="grid grid-cols-2 gap-4"> <div class="space-y-1"> <p class="text-[10px] uppercase tracking-widest text-neutral-light font-bold">Asphalt</p> <p class="text-sm text-white/80">${row.asphalt}</p> </div> <div class="space-y-1 border-l border-[#594216]/30 pl-4"> <p class="text-[10px] uppercase tracking-widest text-primary font-bold">Stone-Steel</p> <div class="flex items-center gap-2"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "double-tick", "size": 14, "class": "text-primary" })} <p class="text-sm font-bold text-primary">${row.tile}</p> </div> </div> </div> </div>`)} </div> </div> ` })} </div> </section>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/services/ComparisonTable.astro", void 0);

export { $$ComparisonSection as $, $$ComparisonTable as a, $$StylesProfiles as b };
