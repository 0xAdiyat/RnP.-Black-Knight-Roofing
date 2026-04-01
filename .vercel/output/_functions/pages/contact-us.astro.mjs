import { b as createAstro, c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, f as renderSlot, F as Fragment } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { e as $$NoiseBg, s as sunflow, h as $$RatingStars, c as $$Icon, b as $$Button, f as cn, $ as $$Layout, a as $$Navbar, d as $$Footer } from '../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Brands } from '../chunks/BadgeTitle_CkONzckv.mjs';
import { $ as $$CTASection } from '../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Process } from '../chunks/Process_i5H1XAKH.mjs';
import { $ as $$Faqs } from '../chunks/Faqs_DHvlwYar.mjs';
import { s as step1, a as step2, b as step4 } from '../chunks/step-4_PqBYbBEu.mjs';
import { s as step3 } from '../chunks/step-3_DCOQ1mro.mjs';
import { $ as $$Image, a as getImage } from '../chunks/_astro_assets_CCmGuUXD.mjs';
import { h as heroBgImage } from '../chunks/hero-bg_BXehMxZ0.mjs';
import { g as gridFrame } from '../chunks/grid-frame_njfNNQjF.mjs';
export { renderers } from '../renderers.mjs';

const quoteBg = new Proxy({"src":"/_astro/business-rate-badge.CqVSmwvd.png","width":439,"height":341,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/business-rate-badge.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$ContactUsForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactUsForm;
  const {
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
    class: className
  } = Astro2.props;
  const testimonials = [
    {
      name: "Chris Owens",
      role: "Frontline Adjusters",
      text: "Sensory Creative redesigned my companies website, they are consummate pros and it came out fantastic. Being in the roofing industry it can be difficult to explain nuances to website designers. With Hook, they knew the language and the industry like the back of their hand. Maggie and Claudia have been essential to my companies success! Also running PPC with them.",
      rating: 5
    }
  ];
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class:list": ["group/form relative overflow-hidden rounded-3xl border border-white/20 bg-[#181818] p-4", className] }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "sunflow", "class": "pointer-events-none absolute inset-x-0 top-0 left-0 h-full w-full object-cover opacity-10 transition-transform duration-1000 group-hover/form:scale-110" })} ${maybeRenderHead()}<div class="grid grid-cols-1 gap-6 lg:grid-cols-12"> <!-- Left Side: Testimonial/Award Card --> <div class="lg:col-span-5"> <div class="via-primary h-full rounded-2xl bg-linear-to-r from-white/15 to-white/15 p-px"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "relative flex h-full flex-col items-center justify-center space-y-8 rounded-2xl bg-[#181818] p-8 text-center shadow-lg" }, { "default": async ($$result3) => renderTemplate` <div class="absolute inset-0 z-[-1] opacity-5"> ${renderComponent($$result3, "Image", $$Image, { "src": quoteBg, "alt": "", "class": "h-full w-full rounded-2xl object-cover" })} </div> <div class="flex flex-col items-center space-y-2"> <div class="relative h-24 w-32 shrink-0"> ${renderComponent($$result3, "Image", $$Image, { "src": quoteBg, "width": 160, "height": 160, "alt": "Award Badge", "class": "h-full w-full object-contain" })} </div> </div> <div class="flex items-center gap-x-4"> <div class="from-primary rounded-full bg-radial-[at_30%_30%] via-[#594216]/30 to-[#594216]/30 p-px"> <div class="border-primary flex size-16 items-center justify-center overflow-hidden rounded-full bg-[#111]"> <span class="text-xl font-medium text-white"> CO </span> </div> </div> <div class="text-left"> <div class="text-2xl font-semibold text-white">${testimonials[0].name}</div> <p class="text-[13px] text-[#828282]">${testimonials[0].role}</p> </div> </div> <p class="text-sm leading-relaxed text-[#ccc]">
&ldquo;${testimonials[0].text}&rdquo;
</p> <div class="flex items-center gap-x-4"> <div class="h-fit w-fit"> ${renderComponent($$result3, "Image", $$Image, { "alt": "G", "width": 24, "height": 24, "loading": "lazy", "src": "https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw" })} </div> ${renderComponent($$result3, "RatingStars", $$RatingStars, { "rating": testimonials[0].rating, "size": 20, "fillColor": "#F7B715", "strokeColor": "transparent" })} </div> <div class="flex gap-x-2"> <button aria-label="Previous button" class="from-primary rounded-full bg-radial-[at_30%_30%] via-[#594216]/30 to-[#594216]/30 p-px"> <div class="border-primary/40 flex size-9 items-center justify-center rounded-full border bg-[#0d0d0d]"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "chevron-left", "class": "size-5 text-white" })} </div> <span class="sr-only">Previous</span> </button> <button aria-label="Next button" class="from-primary rounded-full bg-radial-[at_30%_30%] via-[#594216]/30 to-[#594216]/30 p-px"> <div class="border-primary/40 flex size-9 items-center justify-center rounded-full border bg-[#0d0d0d]"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "chevron-right", "class": "size-5 text-white" })} </div> <span class="sr-only">Next</span> </button> </div> ` })} </div> </div> <!-- Right Side: Form --> <div class="lg:col-span-7"> <div class="space-y-6 px-4 py-4 lg:px-8 lg:py-8"> <!-- Success Message --> <div id="contact-us-success" class="hidden flex-col items-center justify-center gap-y-4 py-12 text-center"> <div class="bg-primary/20 border-primary/40 flex size-16 items-center justify-center rounded-full border"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "circle-tick", "class": "text-primary size-8" })} </div> <h3 class="text-xl font-semibold text-white">Message Sent!</h3> <p class="text-sm text-[#828282]">
Thanks! We received your message and will get back to you shortly.
</p> </div> <div id="contact-us-form-container"> <div class="text-xl font-medium text-white">Fill out this form to get in touch:</div> <form class="space-y-4" id="contact-us-form" novalidate> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"> <!-- First Name --> <div class="group space-y-2"> <label class="flex items-center gap-x-1.5 text-sm font-medium text-[#828282] transition-colors duration-300 group-focus-within:text-white"> <sup> ${renderComponent($$result2, "Icon", $$Icon, { "name": "star-icon", "size": 12, "class": "text-primary transition-transform duration-300 group-focus-within:rotate-45" })} </sup>
First Name
</label> <div class="from-primary rounded-lg bg-radial-[at_35%_10%] via-[#594216] to-[#594216] p-px transition-all duration-500 ease-in-out focus-within:bg-radial-[at_70%_20%] focus-within:via-[#F7B715]"> <input type="text" name="firstName" placeholder="John Doe" required class="w-full rounded-lg bg-[#131313] px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-[#aaa] focus:outline-none"> </div> </div> <!-- Phone --> <div class="group space-y-2"> <label class="flex items-center gap-x-1.5 text-sm font-medium text-[#828282] transition-colors duration-300 group-focus-within:text-white"> <sup> ${renderComponent($$result2, "Icon", $$Icon, { "name": "star-icon", "size": 12, "class": "text-primary transition-transform duration-300 group-focus-within:rotate-45" })} </sup>
Phone
</label> <div class="from-primary rounded-lg bg-radial-[at_35%_10%] via-[#594216] to-[#594216] p-px transition-all duration-500 ease-in-out focus-within:bg-radial-[at_70%_20%] focus-within:via-[#F7B715]"> <input type="tel" name="phone" placeholder="(555) 000-0000" required class="w-full rounded-lg bg-[#131313] px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-[#aaa] focus:outline-none"> </div> </div> </div> <!-- Email --> <div class="group space-y-2"> <label class="flex items-center gap-x-1.5 text-sm font-medium text-[#828282] transition-colors duration-300 group-focus-within:text-white"> <sup> ${renderComponent($$result2, "Icon", $$Icon, { "name": "star-icon", "size": 12, "class": "text-primary transition-transform duration-300 group-focus-within:rotate-45" })} </sup>
Email
</label> <div class="from-primary rounded-lg bg-radial-[at_35%_10%] via-[#594216] to-[#594216] p-px transition-all duration-500 ease-in-out focus-within:bg-radial-[at_70%_20%] focus-within:via-[#F7B715]"> <input type="email" name="email" placeholder="john@example.com" required class="w-full rounded-lg bg-[#131313] px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-[#aaa] focus:outline-none"> </div> </div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"> <!-- Address --> <div class="group space-y-2"> <label class="flex items-center gap-x-1.5 text-sm font-medium text-[#828282] transition-colors duration-300 group-focus-within:text-white"> <sup> ${renderComponent($$result2, "Icon", $$Icon, { "name": "star-icon", "size": 12, "class": "text-primary transition-transform duration-300 group-focus-within:rotate-45" })} </sup>
Address
</label> <div class="from-primary rounded-lg bg-radial-[at_35%_10%] via-[#594216] to-[#594216] p-px transition-all duration-500 ease-in-out focus-within:bg-radial-[at_70%_20%] focus-within:via-[#F7B715]"> <input type="text" name="address" placeholder="123 Street Ave" required class="w-full rounded-lg bg-[#131313] px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-[#aaa] focus:outline-none"> </div> </div> <!-- Zip --> <div class="group space-y-2"> <label class="flex items-center gap-x-1.5 text-sm font-medium text-[#828282] transition-colors duration-300 group-focus-within:text-white"> <sup> ${renderComponent($$result2, "Icon", $$Icon, { "name": "star-icon", "size": 12, "class": "text-primary transition-transform duration-300 group-focus-within:rotate-45" })} </sup>
Zip
</label> <div class="from-primary rounded-lg bg-radial-[at_35%_10%] via-[#594216] to-[#594216] p-px transition-all duration-500 ease-in-out focus-within:bg-radial-[at_70%_20%] focus-within:via-[#F7B715]"> <input type="text" name="zip" placeholder="91740" required class="w-full rounded-lg bg-[#131313] px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-[#aaa] focus:outline-none"> </div> </div> </div> <!-- Service Needed --> <div class="group space-y-2"> <label class="flex items-center gap-x-1.5 text-sm font-medium text-[#828282] transition-colors duration-300 group-focus-within:text-white"> <sup> ${renderComponent($$result2, "Icon", $$Icon, { "name": "star-icon", "size": 12, "class": "text-primary transition-transform duration-300 group-focus-within:rotate-45" })} </sup>
Service Needed
</label> <div class="from-primary rounded-lg bg-radial-[at_35%_10%] via-[#594216] to-[#594216] p-px transition-all duration-500 ease-in-out focus-within:bg-radial-[at_70%_20%] focus-within:via-[#F7B715]"> <div class="relative w-full rounded-lg bg-[#131313]"> <select name="service" class="w-full appearance-none bg-transparent px-4 py-3 text-sm text-[#aaa] transition-all duration-300 focus:text-white focus:outline-none"> <option value="" disabled selected>Select a Service</option> ${services.map((service) => renderTemplate`<option${addAttribute(service, "value")}>${service}</option>`)} </select> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-down", "class": "text-primary pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" })} </div> </div> </div> <!-- Message --> <div class="group space-y-2"> <label class="flex items-center gap-x-1.5 text-sm font-medium text-[#828282] transition-colors duration-300 group-focus-within:text-white"> <sup> ${renderComponent($$result2, "Icon", $$Icon, { "name": "star-icon", "size": 12, "class": "text-primary transition-transform duration-300 group-focus-within:rotate-45" })} </sup>
Message
</label> <div class="from-primary h-fit rounded-lg bg-radial-[at_35%_10%] via-[#594216] to-[#594216] p-px transition-all duration-500 ease-in-out focus-within:bg-radial-[at_70%_20%] focus-within:via-[#F7B715]"> <textarea name="message" rows="3" placeholder="Your message here..." class="block w-full rounded-lg bg-[#131313] px-4 py-3 text-sm text-white transition-all duration-300 placeholder:text-[#aaa] focus:outline-none"></textarea> </div> </div> <!-- Submit --> <div class="pt-4"> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "lg", "class": "w-full md:w-[222px]", "data-submit-btn": true }, { "default": async ($$result3) => renderTemplate` <span data-submit-label>Request My Quote</span> <svg data-submit-spinner class="hidden size-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path> </svg> ` })} </div> <p class="text-xs leading-5 text-white/60">
By submitting this form, you agree that Black Knight Roofing may contact you about your request. See our
<a href="/privacy-policy" class="text-primary font-semibold transition-colors hover:text-white">Privacy Policy</a>
for details.
</p> </form> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/contact-us/ContactUsForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/contact-us/ContactUsForm.astro", void 0);

const heroBg = new Proxy({"src":"/_astro/contact-us-section__hero.KFBHKlAx.avif","width":1200,"height":1600,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/contact-us-section__hero.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$ContactUsHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactUsHero;
  const { backgroundImage = heroBgImage, title, subtitle, subtitleIcon = "badge-tick", class: className } = Astro2.props;
  const heroImgSrc = typeof backgroundImage === "string" ? backgroundImage : (await getImage({ src: backgroundImage, width: 1536, height: 1152, format: "avif" })).src;
  const gridFrameOp = await getImage({ src: gridFrame });
  const hasSidebar = Astro2.slots.has("sidebar");
  const hasSocialProof = Astro2.slots.has("social-proof");
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("grid-line relative max-h-[833px]", className), "class")}> ${renderComponent($$result, "Image", $$Image, { "src": heroImgSrc, "alt": "About Us", "width": heroBgImage?.width || 1536, "height": heroBgImage?.height || 1152, "format": "avif", "fetchpriority": "high", "loading": "eager", "sizes": "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw", "class": "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-80" })} <div${addAttribute(`
background-image:
    linear-gradient( 234deg, rgba(0, 0, 0, 0) 28.39%, rgba(0, 0, 0, 0.2) 72.48%, rgba(0, 0, 0, 0.2) 89.9%),
    url("${gridFrameOp.src}"),
    linear-gradient( 180deg, rgba(8, 42, 64, 0) 34.45%, #082A40 64.34%, #0D0D0D 97.01%);
background-position: center, -178.686px -1.253px, center;
background-size: auto, 124.644% 151.637%, auto;
background-repeat: no-repeat, no-repeat, no-repeat;
`, "style")}> <div class="container pt-20 pb-40"> <div class="flex flex-col items-center justify-center gap-8 text-center"> <div class="relative h-full w-full max-w-[800px] text-white"> <div class="flex flex-col items-center space-y-8"> <div class="flex flex-col items-center space-y-6"> <div class="flex flex-col items-center space-y-4"> ${subtitle && renderTemplate`<div class="flex items-center gap-x-1.5 rounded-full px-4 py-1.5"> <div class="bg-secondary/10 flex h-5 w-5 items-center justify-center rounded-sm"> <div class="bg-primary size-2 rounded-full"></div> </div> <span class="text-sm font-medium tracking-wider">${subtitle}</span> </div>`} <div> <h1 class="font-heading text-[40px] leading-[52px] font-normal text-[#FFFFEC] sm:text-7xl sm:leading-tight sm:text-white">${unescapeHTML(title)}</h1> </div> </div> <div class="flex w-full flex-col items-center space-y-6"> ${renderSlot($$result, $$slots["default"])} </div> </div> ${hasSocialProof && renderTemplate`<div class="flex w-full flex-col items-stretch divide-y divide-white/10 py-6 text-sm md:flex-row md:items-center md:justify-between md:divide-x md:divide-y-0 md:divide-white/20 md:py-2"> ${renderSlot($$result, $$slots["social-proof"])} </div>`} </div> </div> ${hasSidebar && renderTemplate`<div class="flex w-full justify-center"> ${renderSlot($$result, $$slots["sidebar"])} </div>`} </div> </div> </div> </section>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/hero/ContactUsHero.astro", void 0);

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact Us | Top Veteran Owned Roofing Company | Black Knight Roofing";
  const processSteps = [
    {
      image: step1,
      step: "Step 1",
      title: "Contact Our Team",
      description: "Get in touch with us by phone or fill out a form! Our customer service team is on standby."
    },
    {
      image: step2,
      step: "Step 2",
      title: "Schedule Inspection",
      description: "We will schedule a convenient time to inspect your roof and assess the project scope."
    },
    {
      image: step3,
      step: "Step 3",
      title: "Review Your Proposal",
      description: "Receive a detailed proposal outlining the work, timeline, and transparent pricing."
    },
    {
      image: step4,
      step: "Step 4",
      title: "Project Completion",
      description: "Our expert team completes the project to the highest standards with a final walkthrough."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "ContactUsHero", $$ContactUsHero, { "backgroundImage": heroBg, "title": "Contact Us to Set Up <br/> A Brief Introductory Call", "subtitle": "Contact Us" }, { "social-proof": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "social-proof" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full items-center gap-x-4 px-6 py-4 md:w-auto md:px-8 md:py-0 lg:px-10"> <div class="bg-inverted flex h-14 w-14 items-center justify-center rounded-full p-1.5"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "phone", "size": 24, "class": "text-primary" })} </div> <div class="flex min-w-0 flex-col items-start text-start"> <div class="text-[18px] leading-7 font-bold text-white sm:whitespace-nowrap">Give us a Call</div> <div class="text-sm">(970) 888-7230</div> </div> </div> <div class="flex w-full items-center gap-x-4 px-6 py-4 md:w-auto md:px-8 md:py-0 lg:px-10"> <div class="bg-inverted flex h-14 w-14 items-center justify-center rounded-full p-1.5"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "send-message", "size": 24, "class": "text-primary" })} </div> <div class="flex min-w-0 flex-col items-start text-start"> <div class="text-[18px] leading-7 font-bold text-white sm:whitespace-nowrap">Send us a Message</div> <div class="text-sm">support@blackknightroofing.com</div> </div> </div> <div class="flex w-full items-center gap-x-4 px-6 py-4 md:w-auto md:px-8 md:py-0 lg:px-10"> <div class="bg-inverted flex h-14 w-14 items-center justify-center rounded-full p-1.5"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "location-02", "size": 24, "class": "text-primary" })} </div> <div class="flex min-w-0 flex-col items-start text-start"> <div class="text-[18px] leading-7 font-bold text-white sm:whitespace-nowrap">Visit Our Office</div> <div class="text-xs leading-4 font-medium text-white">
865 Draw St <br> Lochbuie, CO 80603
</div> </div> </div> ` })}` })}  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "bg-[#111] px-0 py-20 pb-40" }, { "default": ($$result3) => renderTemplate` <div class="container -mt-[200px]"> ${renderComponent($$result3, "ContactUsForm", $$ContactUsForm, {})} </div> ` })}  ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "relative bg-[#111] px-0 py-20" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": sunflow, "width": 1440, "height": 810, "alt": "Sunflow", "class": "pointer-events-none absolute top-0 right-0 h-full w-full object-cover opacity-20" })} <div class="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2"> <div class="space-y-8"> <div class="flex items-center gap-x-3 text-sm font-medium"> <div class="relative flex size-3 items-center justify-center"> <div class="absolute aspect-square w-full rounded-full bg-[#f7b715] opacity-50"></div> <div class="z-10 size-2 rounded-full bg-[#f7d515] shadow-[0px_0px_4px_0px_rgba(247,213,21,0.5)]"></div> </div> <div class="flex items-center gap-x-4"> <span class="border-b border-white/50 pb-0.5 opacity-50">Roofing Company in Denver, CO</span> ${renderComponent($$result3, "Icon", $$Icon, { "name": "chevron-right", "class": "size-3 opacity-50" })} <span class="border-b border-white pb-0.5">Contact Us</span> </div> </div> <h2 class="font-heading text-[28px] leading-10 font-normal text-white lg:text-5xl lg:leading-tight">
The #1 Choice For Colorado Residents
</h2> <p class="text-lg text-[#ccc]">
At Black Knight Roofing, we're proud to serve homeowners and businesses across the Denver metro and Colorado's
          Front Range. Our team knows this region's roofing challenges — hail, wind, rapid temperature swings, and
          everything that comes with living at elevation. Whether you need a free inspection after a storm, want to talk
          through a full replacement, or just have questions about your insurance claim, we're easy to reach and fast to
          respond. A real conversation with our team costs you nothing.
</p> ${renderComponent($$result3, "Button", $$Button, { "variant": "primary", "data-estimate-trigger": true }, { "default": ($$result4) => renderTemplate`FREE Roof Estimate` })} </div> <div class="relative aspect-4/3 overflow-hidden rounded-[12px]"> <img src="/placeholders/works/1.jpg" alt="Black Knight Roofing Team" class="h-full w-full object-cover"> </div> </div> ` })}  <div class="container grid grid-cols-1 gap-x-2 py-16 md:grid-cols-2 lg:grid-cols-4"> <!-- Total Projects Completed --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result3) => renderTemplate` <div class="font-heading text-primary text-[2rem]">100+</div> <div> <div class="text-lg font-bold">Roofing Projects</div> <div class="text-[#AAAAAA]">in Colorado</div> </div> ` })} </div> <!-- Google Retings --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result3) => renderTemplate` <div class="text-primary text-[2rem] font-bold">5.0</div> <div class="space-y-1"> <div class="text-lg font-bold"> ${renderComponent($$result3, "RatingStars", $$RatingStars, { "rating": 5, "size": 16, "fillColor": "#F7B715", "strokeColor": "none" })} </div> <div class="text-[#AAAAAA]">40+ Google Reviews</div> </div> ` })} </div> <!-- Workmanship Warranty --> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result3) => renderTemplate` <div class="text-primary size-12 font-bold"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "shield-check", "size": 48 })} </div> <div> <div class="font-heading text-[2rem] leading-11 font-normal">Licensed</div> <div class="text-[#AAAAAA]">Bonded & Insured</div> </div> ` })} </div> <div class="from-primary rounded-[5px] bg-radial-[at_30%_30%] via-[#594216] to-[#594216] p-px"> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "flex h-full items-center justify-center gap-x-2 rounded-[5px] px-6 py-4" }, { "default": ($$result3) => renderTemplate` <div class="text-primary size-12 font-bold"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "badge", "size": 48 })} </div> <div> <div class="font-heading text-[2rem] leading-11 font-normal">Lifetime</div> <div class="text-[#AAAAAA]">Workmanship Warranty</div> </div> ` })} </div> </div> ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps, "headingClass": "font-heading text-[28px] leading-10 font-normal text-white md:text-5xl md:leading-tight lg:text-5xl lg:leading-tight", "subheadingClass": "font-normal" })} ${renderComponent($$result2, "Faqs", $$Faqs, { "headingClass": "font-heading text-[28px] leading-10 font-normal text-white lg:text-5xl lg:leading-tight", "phoneLinkClass": "text-white text-[20px] leading-8 font-medium underline" })} <div class="relative"> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent"></div> ${renderComponent($$result2, "Brands", $$Brands, {})} </div> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/contact-us.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/contact-us.astro";
const $$url = "/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ContactUs,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
