import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment, u as unescapeHTML } from './astro/server_DZ-DbHVo.mjs';
import { e as $$NoiseBg, b as $$Button, c as $$Icon } from './Footer_YfAkoF97.mjs';
import { $ as $$FaqItem } from './FaqItem_D0dU7jMC.mjs';

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faqs;
  const {
    badge = "FAQs",
    heading = "Got Question? <br /> We've Got Answers",
    headingClass,
    buttonLabel = "View All Questions",
    buttonHref,
    phoneNumber = "(970) 888-7230",
    phoneLinkClass,
    faqs = [
      {
        question: "Will my homeowner's insurance cover a new roof?",
        answer: "It depends on the cause of damage. Most policies cover storm, hail, and wind damage. We're insurance claim specialists\u2014we inspect your roof, document the damage, and work directly with your adjuster to give you the best chance of full claim approval."
      },
      {
        question: "How long does a roof replacement take?",
        answer: "Most residential roof replacements are completed in 1-3 days, depending on the size of your roof and weather conditions. We always aim to minimize disruption to your daily routine."
      },
      {
        question: "Do you offer financing?",
        answer: "Yes! We offer flexible financing options to make your roofing project affordable. Ask us about our payment plans and we will find the right solution for your budget."
      },
      {
        question: "What roofing materials do you install?",
        answer: "We install a wide range of materials including asphalt shingles, metal roofing, cedar shakes, and flat roofing systems. Our team can help you choose the best material for your home and budget."
      },
      {
        question: "What areas do you serve?",
        answer: "We proudly serve homeowners from Colorado Springs to Fort Collins and everywhere in between, including Denver, Aurora, Lakewood, and surrounding communities."
      },
      {
        question: "What warranty do you offer?",
        answer: "We stand behind our work with a comprehensive warranty on both materials and labor. Specific warranty terms vary by product, so we'll walk you through the details before your project begins."
      },
      {
        question: "Do you offer any discounts?",
        answer: "Yes, we offer seasonal promotions and discounts for military, first responders, and seniors. Contact us to learn about current offers available in your area."
      }
    ],
    class: className
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "NoiseBg", $$NoiseBg, { "class:list": [
    "px-0 pt-16 pb-20 [--noise-overlay:linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8))] [--noise-radial:radial-gradient(50%_50%_at_50%_50%,rgba(48,48,48,0.4)_0%,rgba(48,48,48,0.88)_100%)] lg:[--noise-overlay:linear-gradient(to_bottom,rgba(0,0,0,0.93),rgba(0,0,0,0.93))] lg:[--noise-radial:radial-gradient(50%_50%_at_50%_50%,rgba(48,48,48,0)_0%,rgba(48,48,48,0.4)_100%)]",
    className
  ] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex flex-col gap-y-6 sm:gap-12 lg:flex-row lg:items-stretch lg:gap-24 xl:gap-32"> <!-- Left Content --> <div class="flex flex-col justify-between gap-10 lg:w-[432px] lg:shrink-0"> <div class="space-y-8"> <div class="space-y-4"> <div class="flex items-center gap-x-3"> <div class="relative size-5 rounded-[5px] bg-[#F7B715]/50 drop-shadow-2xl before:absolute before:top-1/2 before:left-1/2 before:size-2 before:-translate-1/2 before:rounded-full before:bg-[#F7D515] before:content-['']"></div> <div class="text-sm font-medium tracking-wide text-white/80 uppercase">${badge}</div> </div> <h2${addAttribute(["text-4xl leading-tight font-normal lg:text-5xl lg:leading-tight", headingClass], "class:list")}> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(heading)}` })} </h2> </div> ${renderComponent($$result2, "Button", $$Button, { "href": buttonHref, "class": "w-fit px-8" }, { "default": ($$result3) => renderTemplate`${buttonLabel}` })} </div> <!-- Call us --> <div class="border-primary mt-8 hidden space-y-2 border-l-2 pl-4 lg:mt-12 lg:block"> <div class="text-sm text-white/60">Still can't find your answers? Call us:</div> <a${addAttribute(`tel:${phoneNumber.replace(/[^+\d]/g, "")}`, "href")}${addAttribute(["flex items-center gap-x-2 text-[20px] leading-8 font-medium text-white underline", phoneLinkClass], "class:list")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "phone", "class": "text-primary size-5" })} ${phoneNumber} </a> </div> </div> <!-- FAQ Accordion --> <div class="flex w-full flex-col gap-y-4 pt-4 lg:pt-2"> ${faqs.map((faq, index) => renderTemplate`${renderComponent($$result2, "FaqItem", $$FaqItem, { "question": faq.question, "answer": faq.answer, "open": index === 0 })}`)} </div> <!-- Call us --> <div class="border-primary space-y-2 border-l-2 pl-4 lg:hidden"> <div class="text-sm text-white/60">Still can't find your answers? Call us:</div> <a${addAttribute(`tel:${phoneNumber.replace(/[^+\d]/g, "")}`, "href")}${addAttribute(["flex items-center gap-x-2 text-[20px] leading-8 font-medium text-white underline", phoneLinkClass], "class:list")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "phone", "class": "text-primary size-5" })} ${phoneNumber} </a> </div> </div> ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/faqs/Faqs.astro", void 0);

export { $$Faqs as $ };
