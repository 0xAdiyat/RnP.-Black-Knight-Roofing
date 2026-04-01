import { c as createComponent, m as maybeRenderHead, r as renderComponent, d as addAttribute, a as renderTemplate, b as createAstro, e as renderScript } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$Hero } from '../chunks/Hero_B45vm2wT.mjs';
import { f as cn, $ as $$Layout, a as $$Navbar, e as $$NoiseBg, c as $$Icon, b as $$Button, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Brands, a as $$BadgeTitle } from '../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CCmGuUXD.mjs';
import { c as createSvgComponent } from '../chunks/runtime_iOZzyetK.mjs';
import { $ as $$Statistics } from '../chunks/Statistics_CGQ_s-R4.mjs';
import { s as step3$1 } from '../chunks/step-3_DCOQ1mro.mjs';
import { $ as $$Faqs } from '../chunks/Faqs_DHvlwYar.mjs';
import { t as topShape } from '../chunks/top-frame_BP2oeTAJ.mjs';
import { h as heroImage } from '../chunks/faq-and-financing-section__hero_Bm9ugcgl.mjs';
export { renderers } from '../renderers.mjs';

const bgTexture = new Proxy({"src":"/_astro/hero-bg.xB0oNFbz.png","width":720,"height":750,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/about-financing/bg-texture.png";
							}
							
							return target[name];
						}
					});

const bgOverlay = new Proxy({"src":"/_astro/bg-overlay.ybO19Ptn.png","width":2880,"height":1800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/about-financing/bg-overlay.png";
							}
							
							return target[name];
						}
					});

const arrowRight = createSvgComponent({"meta":{"src":"/_astro/arrow-right.B-01fp7I.svg","width":10,"height":16,"format":"svg"},"attributes":{"preserveAspectRatio":"none","width":"100%","height":"100%","overflow":"visible","style":"display: block;","viewBox":"0 0 10 16","fill":"none"},"children":"\n<g id=\"Img\">\n<path id=\"Vector\" d=\"M9.53125 7.46875C9.825 7.7625 9.825 8.2375 9.53125 8.52812L3.53125 14.5312C3.2375 14.825 2.7625 14.825 2.47187 14.5312C2.18125 14.2375 2.17812 13.7625 2.47187 13.4719L7.94063 8.00313L2.46875 2.53125C2.175 2.2375 2.175 1.7625 2.46875 1.47187C2.7625 1.18125 3.2375 1.17812 3.52812 1.47187L9.53125 7.46875Z\" fill=\"var(--fill-0, white)\" />\n</g>\n"});

const $$AboutFinancing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full overflow-hidden bg-[#111] py-16 lg:py-[64px]"> <!-- Background Area --> <div class="pointer-events-none absolute inset-0 select-none"> <div class="absolute inset-0 bg-linear-to-r from-[#111] to-[#111]"></div> ${renderComponent($$result, "Image", $$Image, { "src": bgTexture, "alt": "", "class": "absolute inset-0 h-full w-full max-w-none object-cover opacity-4" })} <div class="absolute inset-0 overflow-hidden opacity-16"> ${renderComponent($$result, "Image", $$Image, { "src": bgOverlay, "alt": "", "class": "absolute top-0 -left-[20%] h-[111%] w-[141%] max-w-none object-cover" })} </div> </div> <div class="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 md:px-8 lg:flex-row lg:items-start lg:gap-[48px]"> <!-- Left Content --> <div class="flex w-full flex-1 shrink-0 flex-col items-start gap-6 lg:max-w-[632px] lg:py-[32px]"> <!-- Heading section --> <div class="flex w-full shrink-0 flex-col items-start gap-4"> <!-- Chip --> <div class="flex flex-wrap items-center gap-2 rounded-full lg:h-8 lg:gap-3"> <div class="relative flex h-[21px] w-[21px] shrink-0 items-center justify-center"> <div class="absolute inset-0 m-auto h-[12px] w-[12px]"> <div class="absolute -inset-[38%] animate-pulse rounded-[5px] bg-[#f7b715] opacity-50"></div> <div class="absolute inset-[2px] rounded-[10px] bg-[#f7d515] shadow-[0_0_4px_rgba(247,213,21,0.5)]"></div> </div> </div> <div class="flex flex-wrap items-center gap-2 text-white/50 lg:gap-4"> <span class="border-b border-white/50 text-sm font-medium lg:text-base lg:leading-[24px]">Roofing Company in Denver, CO</span> <div class="relative h-[12px] w-[8px] lg:h-[16px] lg:w-[10px]"> <img${addAttribute(arrowRight.src, "src")} alt="" class="absolute inset-0 h-full w-full"> </div> <span class="border-b border-white/50 text-sm font-medium text-white lg:text-base lg:leading-[24px]">Financing</span> </div> </div> <!-- Title --> <div class="w-full"> <h2 class="font-heading text-3xl leading-tight text-white lg:text-[48px] lg:leading-[60px]">Industry-Best Warranties & Financing</h2> </div> </div> <!-- Text --> <div class="flex w-full shrink-0 flex-col justify-center"> <p class="text-base leading-[24px] text-[#ccc]">
A new roof is one of the biggest purchases most homeowners make. We don't think you should have to drain your
          savings or delay the work to afford it. Our financing options cover projects from under $10,000 to $40,000, with
          terms up to 10 years, a soft credit check to prequalify, and approval decisions that don't take long. Whether
          you're dealing with storm damage, planning an upgrade to stone-coated steel, or simply replacing a roof that's run
          its course — there's a plan here that works.
</p> </div> </div> <!-- Right Content (Cards) --> <div class="relative mt-8 flex w-full flex-col items-center gap-y-4 lg:mt-0 lg:w-auto lg:items-end lg:gap-y-0"> <!-- Top Card Container --> <div class="relative flex w-full flex-col items-center gap-4 lg:w-auto lg:flex-row lg:items-end lg:gap-[8px] lg:-mb-[15px]"> <div class="relative flex flex-col items-center lg:items-start lg:gap-[10px]"> <div class="relative px-4 lg:px-[16px]"> <span class="text-2xl font-bold text-white lg:text-[32px] lg:leading-[44px]">Get A</span> </div> <div class="bg-primary relative flex flex-col items-center gap-2 px-6 py-4 text-center lg:items-start lg:gap-[10px] lg:px-[32px] lg:py-[16px] lg:text-left text-[#222]"> <div class="text-3xl font-extrabold lg:text-[48px] lg:leading-[60px]"> <p class="m-0">Free Roof</p> <p class="m-0">Inspection</p> </div> <p class="text-xl font-semibold lg:text-[32px] lg:leading-[44px]">(A $1,250 Value!)</p> </div> </div> <div class="relative flex items-start justify-center lg:pb-[32px]"> <span class="text-2xl font-extrabold text-white lg:text-[32px] lg:leading-[44px]">Plus Enjoy A</span> </div> </div> <!-- Bottom Card Container --> <div class="relative flex w-full flex-col items-center lg:w-auto lg:items-end lg:-mb-[15px]"> <div class="bg-primary relative flex flex-col items-center gap-2 px-6 py-4 text-center lg:items-start lg:gap-[10px] lg:px-[32px] lg:py-[16px] lg:text-left text-[#222]"> <p class="text-3xl font-extrabold lg:text-[48px] lg:leading-[60px]">10 Year Warranty</p> <p class="text-xl font-semibold lg:text-[32px] lg:leading-[44px]">On Any Roof Replacement</p> </div> </div> </div> </div> </section>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/AboutFinancing.astro", void 0);

const imgTop = new Proxy({"src":"/_astro/img-top.lF_V-xv9.png","width":954,"height":868,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/financing-banner/img-top.png";
							}
							
							return target[name];
						}
					});

const imgBottom = new Proxy({"src":"/_astro/img-bottom.81qs7-58.png","width":1132,"height":750,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/financing-banner/img-bottom.png";
							}
							
							return target[name];
						}
					});

const wisetackLogo = new Proxy({"src":"/_astro/wisetack-logo.hMjVlyGg.png","width":327,"height":57,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/financing-banner/wisetack-logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$FinanceStepCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FinanceStepCard;
  const { image, imageAlt = "Process Step", step, title, description, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-gradient w-full rounded-3xl before:bg-linear-to-b before:from-[#8f99b4] before:to-[#111] lg:w-[392px]"> <div${addAttribute(cn(
    "flex flex-col items-center h-full transition-colors duration-150 ease-out rounded-3xl bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_100%),radial-gradient(175.94%_145.17%_at_0%_0%,#F2C744_0%,#BF8D30_41.16%,#082A40_100%)] pt-4 pb-8",
    className
  ), "class")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": imageAlt, "width": 400, "height": 300, "class": "h-[180px] w-[180px] rounded-2xl object-cover sm:h-[218px] sm:w-[218px]" })} <div class="flex flex-col items-center text-center gap-3 px-6"> ${step && renderTemplate`<div class="text-[20px] lg:text-[32px] font-medium text-white leading-[28px] lg:leading-[44px]" style="font-size: var(--Text-Sizes-Text-Large, 20px);">${step}</div>`} ${title && renderTemplate`<h4 class="text-xl font-bold">${title}</h4>`} <div class="max-w-[400px] text-base font-normal text-[#CCC] leading-6"> ${description} </div> </div> </div> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/finance/FinanceStepCard.astro", void 0);

const step2 = new Proxy({"src":"/_astro/step-5.B1kYPNrB.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/steps/step-5.png";
							}
							
							return target[name];
						}
					});

const step3 = new Proxy({"src":"/_astro/step-6.B2sbWr31.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/steps/step-6.png";
							}
							
							return target[name];
						}
					});

const CreditCardImage = new Proxy({"src":"/_astro/credit-card.BxLfMy8w.avif","width":1354,"height":768,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/credit-card.avif";
							}
							
							return target[name];
						}
					});

const $$Financing = createComponent(($$result, $$props, $$slots) => {
  const financeSteps = [
    {
      image: step3$1,
      step: "STEP 01",
      title: "",
      description: "Apply in minutes with our trusted financing partner."
    },
    {
      image: step2,
      step: "STEP 02",
      title: "",
      description: "Get approved instantly with flexible payment options."
    },
    {
      image: step3,
      step: "STEP 03",
      title: "",
      description: "Your roof gets done. You pay over time."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Roofing Financing | Top Veteran Owned Roofing Company | Black Knight Roofing" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div id="hero-section"> ${renderComponent($$result2, "Hero", $$Hero, { "backgroundImage": heroImage, "title": "Flexible Roof Financing <br/> For All Your Needs", "subtitle": "Colorado's #1 Veteran-Owned Roofing Company" }, { "default": ($$result3) => renderTemplate` <p>
Your roof shouldn't wait because the timing isn't perfect. We work with Service Finance Company and
        Wisetack to offer payment plans that fit real budgets — starting at $99/month, with no down payment
        required and no penalty if you pay it off early.
</p> ` })} </div>  <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "AboutFinancing", $$AboutFinancing, {})}  ${renderComponent($$result2, "Statistics", $$Statistics, {})}  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "container mx-auto my-8 overflow-hidden rounded-[16px] px-6 py-8" }, { "default": ($$result3) => renderTemplate` <div class="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-14 lg:flex-row"> <!-- Left side: Overlapping images --> <div class="relative h-[400px] w-full max-w-[554px] shrink-0 sm:h-[480px] lg:h-[521px]"> ${renderComponent($$result3, "Image", $$Image, { "src": imgTop, "alt": "", "class": "absolute top-0 right-0 h-[340px] w-[85%] rounded-2xl object-cover sm:h-[400px] lg:left-[77px] lg:h-[434px] lg:w-[477px]" })} <div class="absolute bottom-0 left-0 h-[280px] w-[80%] overflow-hidden rounded-2xl shadow-[0px_40px_60px_-15px_rgba(0,0,0,0.5)] sm:h-[340px] lg:top-[133px] lg:h-[388px] lg:w-[426px]"> ${renderComponent($$result3, "Image", $$Image, { "src": imgBottom, "alt": "", "class": "absolute inset-0 h-full w-full object-cover" })} <div class="absolute inset-0 rounded-2xl bg-linear-to-b from-transparent to-black opacity-80"></div> ${renderComponent($$result3, "Image", $$Image, { "src": wisetackLogo, "alt": "Wisetack", "class": "absolute bottom-[20px] left-[20px] z-10 h-[30px] w-[180px] object-contain lg:h-[43px] lg:w-[248px]" })} </div> </div> <!-- Right side: Text Content --> <div class="flex flex-col items-start gap-[40px] lg:max-w-[656px]"> <div class="flex flex-col gap-[24px]"> <div class="flex flex-col gap-[16px]"> <div class="flex h-[32px] items-center gap-[12px] rounded-full"> <!-- Chip --> <div class="relative flex h-[21px] w-[21px] shrink-0 items-center justify-center"> <div class="absolute inset-0 m-auto h-[12px] w-[12px]"> <div class="absolute -inset-[38%] animate-pulse rounded-[5px] bg-[#f7b715] opacity-50"></div> <div class="absolute inset-[2px] rounded-[10px] bg-[#f7d515] shadow-[0_0_4px_rgba(247,213,21,0.5)]"></div> </div> </div> <p class="text-base leading-[24px] font-medium text-white">Upgrade your home's curb appeal</p> </div> <h2 class="font-heading max-w-xl text-[48px] leading-[60px] text-white">
With payments that fit your budget.
</h2> </div> <p class="text-[16px] leading-[24px] font-normal text-[#ccc]">
Wisetack is one of our financing partners for projects where speed and flexibility matter. Apply in under
            two minutes, see your options without a hard credit pull, and choose the terms that make sense for your
            situation.
</p> <ul class="flex flex-col gap-[16px]"> <li class="flex items-center gap-[12px]"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "circle-tick", "class": "text-primary size-8" })} <span class="text-[20px] leading-[32px] font-semibold text-[#ccc]">Pay nothing for the first 6 months</span> </li> <li class="flex items-center gap-[12px]"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "circle-tick", "class": "text-primary size-8" })} <span class="text-[20px] leading-[32px] font-semibold text-[#ccc]">0% interest for 12 months</span> </li> <li class="flex items-center gap-[12px]"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "circle-tick", "class": "text-primary size-8" })} <span class="text-[20px] leading-[32px] font-semibold text-[#ccc]">New door from $39/mo</span> </li> </ul> <p class="text-[16px] leading-[24px] font-normal text-[#ccc]">
Quick application. No hidden fees. No prepayment penalty. Get approved and schedule your project in the same
            call.
</p> </div> ${renderComponent($$result3, "Button", $$Button, { "variant": "primary", "class": "flex h-[56px] items-center justify-center rounded-[4px] px-[32px] py-[16px] text-[16px] font-semibold text-[#111]" }, { "default": ($$result4) => renderTemplate`
Get Approved
` })} </div> </div> ` })}  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "px-0 py-10 lg:py-20" }, { "default": ($$result3) => renderTemplate` <div class="container mx-auto space-y-12 px-4"> ${renderComponent($$result3, "BadgeTitle", $$BadgeTitle, { "badge": "How It Work", "title": "We've Made Getting Your Roof Financed Easier than Ever", "class": "flex flex-col items-center text-center" })} <div class="relative"> <div class="flex flex-col items-center justify-center"> <div class="group relative z-0 flex flex-col items-center justify-center space-y-8 self-stretch lg:flex-row lg:gap-[-160px] lg:space-y-0 lg:pr-20"> ${financeSteps.map((f, i) => renderTemplate`<div${addAttribute(cn(
    "w-full max-w-[320px] lg:w-[300px] relative transition-transform duration-200 ease-out hover:-translate-y-4 hover:scale-105 cursor-pointer",
    i === 0 ? "z-30 hover:z-50 lg:group-hover:-translate-x-20" : i === 1 ? "z-20 hover:z-50" : "z-10 hover:z-50 lg:group-hover:translate-x-20"
  ), "class")}> ${renderComponent($$result3, "FinanceStepCard", $$FinanceStepCard, { "image": f.image, "step": f.step, "title": f.title, "description": f.description })} </div>`)} </div> </div> </div> </div> ` })} <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "src": topShape, "width": topShape.width, "height": topShape.height, "alt": "bottom shape", "class": "absolute inset-x-0 top-0 left-0 w-full" })} ${renderComponent($$result2, "Faqs", $$Faqs, {})} </div> <div id="sticky-financing-banner" class="fixed bottom-[80px] lg:sticky lg:bottom-4 z-50 mx-auto w-full lg:mb-10 lg:max-w-[942px] lg:px-4 pointer-events-none transition-all duration-300 ease-out translate-y-[20px] opacity-0 flex flex-col items-center"> <!-- Close Button (Mobile only) --> <div class="w-full flex justify-end lg:hidden pointer-events-auto pr-6 mb-[-24px] relative z-10"> <button id="close-financing-banner" class="flex size-[52px] items-center justify-center rounded-full bg-primary border-[2.5px] border-[#111] text-[#111] shadow-lg transition-transform active:scale-95" aria-label="Dismiss"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> <!-- Banner Inner --> <div class="bg-primary pointer-events-auto w-full lg:rounded-lg shadow-[0_-10px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5 lg:ring-white/10 origin-bottom transition duration-200 ease-out lg:scale-[0.7] lg:hover:scale-100 lg:hover:shadow-[0_40px_60px_rgba(0,0,0,0.4)]"> <!-- Mobile Layout --> <div class="flex flex-col gap-6 px-6 pt-6 pb-6 lg:hidden"> <!-- Top row: image + text --> <div class="flex items-center gap-6"> <div class="shrink-0"> ${renderComponent($$result2, "Image", $$Image, { "src": CreditCardImage, "width": 216, "height": 116, "alt": "Credit Card", "class": "w-[108px] h-[58px] object-cover drop-shadow-sm", "style": "aspect-ratio: 54/29;" })} </div> <div class="flex flex-1 flex-col gap-2 text-[#000]"> <h4 style="font-family: 'Instrument Serif', serif; font-size: 20px; font-weight: 400; line-height: 28px; color: #000;">Explore 0%* APR Financing for your project</h4> <p style="font-family: Manrope, sans-serif; font-size: 12px; font-weight: 400; line-height: 16px; color: #444;">*0% interest for promotional period only</p> </div> </div> <!-- Bottom row: button (left) + phone (centered) --> <div class="flex items-center justify-between w-full"> ${renderComponent($$result2, "Button", $$Button, { "class": "bg-white text-[#111] px-5 py-2.5 text-sm font-semibold rounded-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.08)] hover:bg-white active:scale-95 transition-transform" }, { "default": ($$result3) => renderTemplate`
See Options
` })} <div class="flex flex-1 items-center justify-center gap-2 text-[#111] font-medium text-[18px]"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "phone", "class": "size-5" })} <span>(970) 888-7230</span> </div> </div> </div> <!-- Desktop Layout --> <div class="hidden lg:flex w-full flex-col items-center gap-6 p-5 lg:p-6 lg:flex-row lg:items-center"> <div class="shrink-0"> ${renderComponent($$result2, "Image", $$Image, { "src": CreditCardImage, "width": 426, "height": 230, "alt": "Credit Card Image", "class": "h-auto w-[180px] lg:h-[115px] lg:w-[213px]" })} </div> <div class="text-inverted flex flex-1 flex-col items-center gap-6 text-center lg:flex-row lg:text-left"> <div class="flex-1"> <h4 class="text-xl font-medium lg:pb-2 lg:text-2xl">Explore 0%* APR Financing for your project</h4> <p class="text-sm opacity-80 lg:text-base">*0% interest for promotional period only</p> </div> <div class="flex flex-col items-center gap-y-4 lg:items-end"> ${renderComponent($$result2, "Button", $$Button, { "class": "text-inverted w-full bg-white px-6 py-4 text-sm leading-5 font-bold transition-transform hover:scale-105 hover:bg-white hover:ring-2 hover:ring-black/20 lg:w-auto" }, { "default": ($$result3) => renderTemplate`
See Options
` })} <div class="flex items-center gap-x-2 text-lg font-semibold lg:text-base"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "phone", "class": "size-6" })} <span>(970) 888-7230 </span> </div> </div> </div> </div> </div> </div> <div id="brands-section"> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/financing.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/financing.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/financing.astro";
const $$url = "/financing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Financing,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
