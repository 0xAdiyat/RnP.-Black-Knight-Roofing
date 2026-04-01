import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, e as renderScript, a as renderTemplate, f as renderSlot, F as Fragment, u as unescapeHTML } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image } from './_astro_assets_CCmGuUXD.mjs';
import { e as $$NoiseBg, c as $$Icon, h as $$RatingStars, b as $$Button, f as cn } from './Footer_YfAkoF97.mjs';
import { a as actions } from './virtual_DvcSs0Oz.mjs';
/* empty css                            */
/* empty css                            */

const bbbLogo = new Proxy({"src":"/_astro/bbb-logo.mzJgwYD3.png","width":40,"height":40,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bbb-logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$QuoteForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$QuoteForm;
  const {
    headingLine1 = "Do Your Roof With The Best Rated",
    headingLine2 = "Roofer In Colorado",
    services = [
      "Roof Replacement",
      "Roof Repair",
      "New Roof Installation",
      "Roof Inspection",
      "Storm Damage",
      "Gutter Installation",
      "Siding",
      "Other"
    ],
    rating = 5,
    class: className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["w-full max-w-[34.375rem] rounded-2xl bg-linear-to-t from-[#F2C744]/90 to-[#F2C744]/10 p-2", className], "class:list")} data-astro-cid-xaellxyj> ${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class": "space-y-6 rounded-2xl bg-[#222222] p-8", "data-astro-cid-xaellxyj": true }, { "default": async ($$result2) => renderTemplate`  <div id="quote-success" class="hidden flex-col items-center justify-center gap-y-6 py-8 text-center" data-astro-cid-xaellxyj> <div class="bg-primary/20 border-primary/40 flex size-16 items-center justify-center rounded-full border" data-astro-cid-xaellxyj> ${renderComponent($$result2, "Icon", $$Icon, { "name": "circle-tick", "class": "text-primary size-8", "data-astro-cid-xaellxyj": true })} </div> <h3 class="text-xl font-semibold text-white" data-astro-cid-xaellxyj>Quote Request Sent!</h3> <p class="text-sm text-neutral-400" data-astro-cid-xaellxyj>We'll reach out to you shortly with your free quote.</p> </div> <div id="quote-form-content" class="space-y-6" data-astro-cid-xaellxyj> <!-- Stars --> <div class="flex justify-center" data-astro-cid-xaellxyj> ${renderComponent($$result2, "RatingStars", $$RatingStars, { "rating": rating, "size": 20, "fillColor": "#F7B715", "strokeColor": "transparent", "data-astro-cid-xaellxyj": true })} </div> <!-- Heading --> <h4 class="text-center leading-snug font-normal" data-astro-cid-xaellxyj> ${headingLine1} <br data-astro-cid-xaellxyj> ${headingLine2} </h4> <!-- Error message --> <div class="quote-form-error pointer-events-none max-h-0 overflow-hidden text-center text-sm font-semibold tracking-wide text-red-500 uppercase opacity-0 transition-all duration-300 ease-out" role="alert" aria-hidden="true" data-astro-cid-xaellxyj> <div class="pt-1" data-astro-cid-xaellxyj> <span class="block" data-astro-cid-xaellxyj>There was a problem with your submission.</span> <span class="block" data-astro-cid-xaellxyj>Please review the fields below.</span> </div> </div> <!-- Step indicator --> <div class="flex items-center justify-center gap-x-2 px-8" data-astro-cid-xaellxyj> <div class="quote-step-dot bg-primary flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-black transition-all duration-300 ease-out" data-step="1" data-state="active" data-astro-cid-xaellxyj> <span class="quote-step-label" data-astro-cid-xaellxyj>1</span> </div> <div class="quote-step-line h-px flex-1 bg-white/20 transition-colors duration-300 ease-out" data-after-step="1" data-astro-cid-xaellxyj></div> <div class="quote-step-dot flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm text-white/50 transition-all duration-300 ease-out" data-step="2" data-state="upcoming" data-astro-cid-xaellxyj> <span class="quote-step-label" data-astro-cid-xaellxyj>2</span> </div> <div class="quote-step-line h-px flex-1 bg-white/20 transition-colors duration-300 ease-out" data-after-step="2" data-astro-cid-xaellxyj></div> <div class="quote-step-dot flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm text-white/50 transition-all duration-300 ease-out" data-step="3" data-state="upcoming" data-astro-cid-xaellxyj> <span class="quote-step-label" data-astro-cid-xaellxyj>3</span> </div> </div> <!-- Form --> <form class="quote-form" novalidate method="POST"${addAttribute(actions.sendQuoteForm, "action")} data-astro-cid-xaellxyj> <div class="quote-steps-shell relative overflow-hidden" data-astro-cid-xaellxyj> <!-- Step 1: Zip Code --> <div class="quote-step is-active space-y-4" data-step="1" aria-hidden="false" data-astro-cid-xaellxyj> <label class="block font-medium" data-astro-cid-xaellxyj>Where is Your Project Located?</label> <div class="quote-field-wrapper from-primary rounded-lg bg-radial-[at_25%_25%] to-[#594216] p-px" data-astro-cid-xaellxyj> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "rounded-lg px-0 py-0", "data-astro-cid-xaellxyj": true }, { "default": async ($$result3) => renderTemplate` <input type="text" name="zipCode" placeholder="Zip Code" required maxlength="10" class="w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none" data-astro-cid-xaellxyj> ` })} </div> <p class="quote-field-error max-h-0 overflow-hidden text-xs font-semibold tracking-wide text-red-500 uppercase opacity-0 transition-all duration-300 ease-out" aria-hidden="true" data-astro-cid-xaellxyj> <span class="block pt-2" data-astro-cid-xaellxyj>The field is required.</span> </p> </div> <!-- Step 2: Service Selection --> <div class="quote-step space-y-4" data-step="2" aria-hidden="true" inert data-astro-cid-xaellxyj> <label class="block font-medium" data-astro-cid-xaellxyj>What Service Do You Need?</label> <div class="quote-field-wrapper from-primary relative rounded-lg bg-radial-[at_25%_25%] to-[#594216] p-px" data-astro-cid-xaellxyj> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "rounded-lg px-0 py-0", "data-astro-cid-xaellxyj": true }, { "default": async ($$result3) => renderTemplate` <select name="service" required class="w-full appearance-none rounded-lg bg-white/5 px-4 py-3 pr-10 text-sm text-white/40 focus:outline-none" data-astro-cid-xaellxyj> <option value="" disabled selected data-astro-cid-xaellxyj>Select Your Service</option> ${services.map((service) => renderTemplate`<option${addAttribute(service, "value")} class="bg-[#252525] text-white" data-astro-cid-xaellxyj> ${service} </option>`)} </select>  <svg class="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-white/50" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-xaellxyj> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" data-astro-cid-xaellxyj></path> </svg> ` })} </div> <p class="quote-field-error max-h-0 overflow-hidden text-xs font-semibold tracking-wide text-red-500 uppercase opacity-0 transition-all duration-300 ease-out" aria-hidden="true" data-astro-cid-xaellxyj> <span class="block pt-2" data-astro-cid-xaellxyj>Please select a service.</span> </p> </div> <!-- Step 3: Contact Details --> <div class="quote-step space-y-4" data-step="3" aria-hidden="true" inert data-astro-cid-xaellxyj> <label class="block font-medium" data-astro-cid-xaellxyj>Tell Us More About You</label> <div class="space-y-4" data-astro-cid-xaellxyj> <div data-astro-cid-xaellxyj> <div class="quote-field-wrapper from-primary rounded-lg bg-radial-[at_25%_25%] to-[#594216] p-px" data-astro-cid-xaellxyj> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "rounded-lg px-0 py-0", "data-astro-cid-xaellxyj": true }, { "default": async ($$result3) => renderTemplate` <input type="text" name="firstName" placeholder="First Name" required class="w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none" data-astro-cid-xaellxyj> ` })} </div> <p class="quote-field-error max-h-0 overflow-hidden text-xs font-semibold tracking-wide text-red-500 uppercase opacity-0 transition-all duration-300 ease-out" aria-hidden="true" data-astro-cid-xaellxyj> <span class="block pt-2" data-astro-cid-xaellxyj>First name is required.</span> </p> </div> <div data-astro-cid-xaellxyj> <div class="quote-field-wrapper from-primary rounded-lg bg-radial-[at_25%_25%] to-[#594216] p-px" data-astro-cid-xaellxyj> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "rounded-lg px-0 py-0", "data-astro-cid-xaellxyj": true }, { "default": async ($$result3) => renderTemplate` <input type="text" name="lastName" placeholder="Last Name" required class="w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none" data-astro-cid-xaellxyj> ` })} </div> <p class="quote-field-error max-h-0 overflow-hidden text-xs font-semibold tracking-wide text-red-500 uppercase opacity-0 transition-all duration-300 ease-out" aria-hidden="true" data-astro-cid-xaellxyj> <span class="block pt-2" data-astro-cid-xaellxyj>Last name is required.</span> </p> </div> <div data-astro-cid-xaellxyj> <div class="quote-field-wrapper from-primary rounded-lg bg-radial-[at_25%_25%] to-[#594216] p-px" data-astro-cid-xaellxyj> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "rounded-lg px-0 py-0", "data-astro-cid-xaellxyj": true }, { "default": async ($$result3) => renderTemplate` <input type="tel" name="phone" placeholder="Phone Number" required class="w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none" data-astro-cid-xaellxyj> ` })} </div> <p class="quote-field-error max-h-0 overflow-hidden text-xs font-semibold tracking-wide text-red-500 uppercase opacity-0 transition-all duration-300 ease-out" aria-hidden="true" data-astro-cid-xaellxyj> <span class="block pt-2" data-astro-cid-xaellxyj>Phone number is required.</span> </p> </div> <div data-astro-cid-xaellxyj> <div class="quote-field-wrapper from-primary rounded-lg bg-radial-[at_25%_25%] to-[#594216] p-px" data-astro-cid-xaellxyj> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "rounded-lg px-0 py-0", "data-astro-cid-xaellxyj": true }, { "default": async ($$result3) => renderTemplate` <input type="email" name="email" placeholder="Email Address" required class="w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none" data-astro-cid-xaellxyj> ` })} </div> <p class="quote-field-error max-h-0 overflow-hidden text-xs font-semibold tracking-wide text-red-500 uppercase opacity-0 transition-all duration-300 ease-out" aria-hidden="true" data-astro-cid-xaellxyj> <span class="block pt-2" data-astro-cid-xaellxyj>A valid email is required.</span> </p> </div> </div> </div> </div> <!-- Navigation buttons --> <div class="mt-6 flex items-center justify-center gap-x-3" data-astro-cid-xaellxyj> ${renderComponent($$result2, "Button", $$Button, { "type": "button", "variant": "outline", "class": "quote-btn-back hidden min-w-[120px] justify-center", "data-astro-cid-xaellxyj": true }, { "default": async ($$result3) => renderTemplate`
Back
` })} ${renderComponent($$result2, "Button", $$Button, { "type": "button", "class": "quote-btn-next min-w-[120px] justify-center", "data-astro-cid-xaellxyj": true }, { "default": async ($$result3) => renderTemplate` <span class="quote-btn-next-label" data-astro-cid-xaellxyj>Next</span> <svg class="quote-btn-next-spinner hidden size-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-astro-cid-xaellxyj> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-xaellxyj></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" data-astro-cid-xaellxyj></path> </svg> ` })} </div> <p class="mt-4 text-center text-xs leading-5 text-white/60" data-astro-cid-xaellxyj>
By submitting this form, you agree that Black Knight Roofing may contact you about your request. See our
<a href="/privacy-policy" class="text-primary font-semibold transition-colors hover:text-white" data-astro-cid-xaellxyj>
Privacy Policy
</a>
for details.
</p> </form> </div>  <div class="flex items-center justify-center gap-x-3 border-t border-white/10 pt-5 sm:gap-x-6" data-astro-cid-xaellxyj> <div class="flex items-center gap-x-2" data-astro-cid-xaellxyj> ${renderComponent($$result2, "Icon", $$Icon, { "name": "google-logo", "class": "size-4 text-white sm:size-5", "data-astro-cid-xaellxyj": true })} <div class="flex flex-col gap-y-[2px] text-[11px] leading-tight sm:text-xs" data-astro-cid-xaellxyj> ${renderComponent($$result2, "RatingStars", $$RatingStars, { "rating": 5, "size": 8, "fillColor": "#fff", "strokeColor": "transparent", "data-astro-cid-xaellxyj": true })} <span class="font-semibold text-white" data-astro-cid-xaellxyj>5.0 Rating</span> </div> </div> <div class="flex items-center gap-x-2" data-astro-cid-xaellxyj> ${renderComponent($$result2, "Icon", $$Icon, { "name": "facebook-logo", "class": "size-4 text-white sm:size-5", "data-astro-cid-xaellxyj": true })} <div class="flex flex-col gap-y-[2px] text-[11px] leading-tight sm:text-xs" data-astro-cid-xaellxyj> ${renderComponent($$result2, "RatingStars", $$RatingStars, { "rating": 5, "size": 8, "fillColor": "#fff", "strokeColor": "transparent", "data-astro-cid-xaellxyj": true })} <span class="font-semibold text-white" data-astro-cid-xaellxyj>5.0 Rating</span> </div> </div> <div class="flex items-center gap-x-2" data-astro-cid-xaellxyj> ${renderComponent($$result2, "Image", $$Image, { "src": bbbLogo, "alt": "BBB", "width": 16, "height": 16, "class": "size-4 sm:size-5", "data-astro-cid-xaellxyj": true })} <div class="flex flex-col gap-y-[2px] text-[11px] leading-tight sm:text-xs" data-astro-cid-xaellxyj> ${renderComponent($$result2, "RatingStars", $$RatingStars, { "rating": 5, "size": 8, "fillColor": "#fff", "strokeColor": "transparent", "data-astro-cid-xaellxyj": true })} <span class="font-semibold text-white" data-astro-cid-xaellxyj>A+ Rating</span> </div> </div> </div> ` })} </div>  ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/cta/QuoteForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/cta/QuoteForm.astro", void 0);

const googleLogo = new Proxy({"src":"/_astro/google-reviews.Nba7Hk8V.avif","width":612,"height":408,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/brands/google-reviews.avif";
							}
							
							return target[name];
						}
					});

const mraLogo = new Proxy({"src":"/_astro/mra.CCKCceSz.avif","width":630,"height":588,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/brands/mra.avif";
							}
							
							return target[name];
						}
					});

const businessLogo = new Proxy({"src":"/_astro/business-rate.K4jL10hU.avif","width":439,"height":341,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/brands/business-rate.avif";
							}
							
							return target[name];
						}
					});

const bbaLogo = new Proxy({"src":"/_astro/bba.CjZUvMH5.avif","width":169,"height":64,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/brands/bba.avif";
							}
							
							return target[name];
						}
					});

const tamkoLogo = new Proxy({"src":"/_astro/tamko-pro.DbcPE5Z4.avif","width":3085,"height":4096,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/brands/tamko-pro.avif";
							}
							
							return target[name];
						}
					});

const westlate = new Proxy({"src":"/_astro/westlake.hsV0HnhV.avif","width":312,"height":130,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/brands/westlake.avif";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Brands = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Brands;
  const { class: className } = Astro2.props;
  const classes = cn("relative px-0 py-[22px] sm:p-16", className);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(classes, "class")} data-astro-cid-syh6xvgc> <div class="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent" data-astro-cid-syh6xvgc></div> <div class="container relative px-0" data-astro-cid-syh6xvgc> <div class="swiper brands-swiper overflow-hidden" data-astro-cid-syh6xvgc> <div class="swiper-wrapper items-center" data-astro-cid-syh6xvgc> <!-- Group 1 --> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": googleLogo, "alt": "Google Reviews", "loading": "eager", "width": googleLogo.width, "height": googleLogo.height, "class": "h-[40px] sm:h-[52px] lg:h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": mraLogo, "alt": "MRA Contractor Member", "loading": "eager", "width": mraLogo.width, "height": mraLogo.height, "class": "h-[40px] sm:h-[52px] lg:h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": businessLogo, "alt": "Best of 2024 Business Rate", "loading": "eager", "width": businessLogo.width, "height": businessLogo.height, "class": "h-[40px] sm:h-[52px] lg:h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": bbaLogo, "alt": "BBB Accredited Business A+ Rating", "loading": "eager", "width": bbaLogo.width, "height": bbaLogo.height, "class": "h-[34px] sm:h-[46px] lg:h-[60px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": tamkoLogo, "alt": "Tamko Pro Certified Contractor", "loading": "eager", "width": tamkoLogo.width, "height": tamkoLogo.height, "class": "h-[40px] sm:h-[52px] lg:h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": westlate, "alt": "Westlake Royal Window Solutions", "loading": "eager", "width": westlate.width, "height": westlate.height, "class": "h-[40px] sm:h-[52px] lg:h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <!-- Group 2 (Duplicate for seamless loop) --> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": googleLogo, "alt": "Google Reviews", "loading": "eager", "width": googleLogo.width, "height": googleLogo.height, "class": "h-[40px] sm:h-[52px] lg:h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": mraLogo, "alt": "MRA Contractor Member", "loading": "eager", "width": mraLogo.width, "height": mraLogo.height, "class": "h-[40px] sm:h-[52px] lg:h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": businessLogo, "alt": "Best of 2024 Business Rate", "loading": "eager", "width": businessLogo.width, "height": businessLogo.height, "class": "h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-8 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": bbaLogo, "alt": "BBB Accredited Business A+ Rating", "loading": "eager", "width": bbaLogo.width, "height": bbaLogo.height, "class": "h-[34px] sm:h-[46px] lg:h-[60px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": tamkoLogo, "alt": "Tamko Pro Certified Contractor", "loading": "eager", "width": tamkoLogo.width, "height": tamkoLogo.height, "class": "h-[40px] sm:h-[52px] lg:h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> <div class="swiper-slide w-auto! px-4 sm:px-6 lg:px-12" data-astro-cid-syh6xvgc> ${renderComponent($$result, "Image", $$Image, { "src": westlate, "alt": "Westlake Royal Window Solutions", "loading": "eager", "width": westlate.width, "height": westlate.height, "class": "h-[40px] sm:h-[52px] lg:h-[72px] w-auto object-contain", "data-astro-cid-syh6xvgc": true })} </div> </div> </div> <div aria-hidden="true" class="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32 lg:w-40" style="background: linear-gradient(90deg, var(--Primitives-Background-Default, #111) 0%, rgba(17, 17, 17, 0) 100%);" data-astro-cid-syh6xvgc></div> <div aria-hidden="true" class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32 lg:w-40" style="background: linear-gradient(270deg, var(--Primitives-Background-Default, #111) 0%, rgba(17, 17, 17, 0) 100%);" data-astro-cid-syh6xvgc></div> </div> </section> ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/Brands.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/Brands.astro", void 0);

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$BadgeTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BadgeTitle;
  const { badge, title, as: Tag = "h2", titleClass = "", class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["space-y-4", className], "class:list")}> ${badge && renderTemplate`<div class="flex items-center gap-x-3 text-base"> <div class="relative size-5 rounded-[5px] bg-[#F7B715]/50 drop-shadow-2xl before:absolute before:top-1/2 before:left-1/2 before:size-2 before:-translate-1/2 before:rounded-full before:bg-[#F7D515] before:content-['']"></div> <div>${badge}</div> </div>`} ${title ? renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["text-medium text-[clamp(28px,4vw,48px)] leading-[clamp(40px,4vw,52px)]", titleClass] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(title)}` })} ` })}` : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/BadgeTitle.astro", void 0);

export { $$Brands as $, $$BadgeTitle as a, $$QuoteForm as b, bbbLogo as c };
