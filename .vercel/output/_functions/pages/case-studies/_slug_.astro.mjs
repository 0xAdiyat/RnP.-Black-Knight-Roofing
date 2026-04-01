import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as renderScript, d as addAttribute, u as unescapeHTML, f as renderSlot } from '../../chunks/astro/server_DZ-DbHVo.mjs';
import { f as cn, c as $$Icon, $ as $$Layout, a as $$Navbar, g as $$EstimateButton, s as sunflow, e as $$NoiseBg, b as $$Button, d as $$Footer } from '../../chunks/Footer_YfAkoF97.mjs';
import { $ as $$Brands } from '../../chunks/BadgeTitle_CkONzckv.mjs';
import { r as roofImage, $ as $$CTASection } from '../../chunks/CTASection_Bqv-Tw5s.mjs';
import { $ as $$Image, a as getImage } from '../../chunks/_astro_assets_CCmGuUXD.mjs';
import { $ as $$Process } from '../../chunks/Process_i5H1XAKH.mjs';
import { s as step1, a as step2, b as step4 } from '../../chunks/step-4_PqBYbBEu.mjs';
import { s as step3 } from '../../chunks/step-3_DCOQ1mro.mjs';
/* empty css                                     */
import { h as heroBgImage } from '../../chunks/hero-bg_BXehMxZ0.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_CwSv8W2F.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$ProjectSwiper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectSwiper;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project-swiper swiper relative w-full overflow-hidden py-12"> <div class="swiper-wrapper flex items-center"> ${images.map((image) => renderTemplate`<div class="swiper-slide w-auto!"> <div class="relative h-[288px] w-[448px] overflow-hidden rounded-2xl group border border-white/5"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "Project Image", "width": 896, "height": 576, "class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" })} <div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div> </div> </div>`)} </div> <!-- Stepper / Pagination --> <div class="swiper-pagination static! mt-8 flex justify-center gap-2!"></div> </div>  ${renderScript($$result, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/case-study/ProjectSwiper.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/case-study/ProjectSwiper.astro", void 0);

const gridFrame = new Proxy({"src":"/_astro/grid-frame.Tpp-WcWC.png","width":4096,"height":2783,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/grid-frame.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero2;
  const { backgroundImage = heroBgImage, title, subtitle, subtitleIcon = "badge-tick", class: className } = Astro2.props;
  const heroBgSrc = typeof backgroundImage === "string" ? backgroundImage : (await getImage({ src: backgroundImage, width: 1536, height: 1152, format: "webp" })).src;
  const gridFrameOp = await getImage({ src: gridFrame });
  const hasSidebar = Astro2.slots.has("sidebar");
  const hasSocialProof = Astro2.slots.has("social-proof");
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("grid-line relative max-h-[833px]", className), "class")}${addAttribute(`
      background-image:linear-gradient(to right,var(--inverted),rgba(0,0,0,0.1)),url(${heroBgSrc});
      background-size:cover, cover;
      background-repeat: no-repeat, no-repeat;
      background-position: center, center;
  `, "style")}> <div${addAttribute(`
background-image:
    linear-gradient( 234deg, rgba(0, 0, 0, 0) 28.39%, rgba(0, 0, 0, 0.2) 72.48%, rgba(0, 0, 0, 0.2) 89.9%),
    url("${gridFrameOp.src}"),
    linear-gradient( 180deg, rgba(8, 42, 64, 0) 34.45%, #082A40 64.34%, #0D0D0D 97.01%);
background-position: center, -178.686px -1.253px, center;
background-size: auto, 124.644% 151.637%, auto;
background-repeat: no-repeat, no-repeat, no-repeat;
`, "style")}> <div class="container pt-20 pb-40"> <div class="flex flex-col items-center justify-center gap-8 text-center"> <div class="relative h-full w-full max-w-[800px] text-white"> <div class="flex flex-col items-center space-y-8"> <div class="flex flex-col items-center space-y-6"> <div class="flex flex-col items-center space-y-4"> ${subtitle && renderTemplate`<div class="flex items-center gap-x-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": subtitleIcon, "class": "text-primary size-4" })} <span class="text-sm font-medium tracking-wider uppercase">${subtitle}</span> </div>`} <div> <h1 class="font-heading text-5xl leading-tight font-normal sm:text-7xl">${unescapeHTML(title)}</h1> </div> </div> <div class="flex w-full flex-col items-center space-y-6"> ${renderSlot($$result, $$slots["default"])} </div> </div> ${hasSocialProof && renderTemplate`<div class="flex flex-wrap items-center justify-center divide-x divide-white/20 py-2 text-sm"> ${renderSlot($$result, $$slots["social-proof"])} </div>`} </div> </div> ${hasSidebar && renderTemplate`<div class="flex w-full justify-center"> ${renderSlot($$result, $$slots["sidebar"])} </div>`} </div> </div> </div> </section>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/hero/Hero2.astro", void 0);

const heroBg = new Proxy({"src":"/_astro/case-studies-detail-section__hero.BtooA2hP.avif","width":7170,"height":4866,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/case-studies-detail-section__hero.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
async function getStaticPaths() {
  const caseStudies = [
    {
      slug: "1",
      title: "Star House\u201D Siding Upgrade \u2014 Done Right",
      subtitle: "Scott wanted a fresh exterior that still matched the character of his home.",
      location: "Forest City, IA",
      services: "Siding Replacement",
      materials: "D-5 Dutchlap (Acadia Green)",
      videoThumbnail: "/placeholders/projects/project-1.jpg",
      summary: "Scott wanted a fresh exterior that still matched the character of his home. We helped him compare colors, pick the right profile, and install with a clean, durable finish.",
      resultSummary: "curb appeal up, maintenance worry down.",
      customer: {
        title: "A Front Range Homeowner",
        content: "wanted a roof that looks high-end but holds up to Colorado\u2019s toughest weather. After repeated storm seasons and constant patchwork, they needed a long-term system\u2014not another temporary fix. They reached out to Black Knight Roofing for an expert-led evaluation and a solution designed for durability, aesthetics, and peace of mind."
      },
      problem: {
        content: `With demand for high-quality creative output growing across users and internal teams, Vimeo\u2019s Brand and Production team saw the need for a unified strategy to accelerate AI adoption and support creatives across the organization.`
      },
      solution: {
        content: `With demand for high-quality creative output growing across users and internal teams, Vimeo\u2019s Brand and Production team saw the need for a unified strategy to accelerate AI adoption and support creatives across the organization.`
      },
      result: {
        content: `With demand for high-quality creative output growing across users and internal teams, Vimeo\u2019s Brand and Production team saw the need for a unified strategy to accelerate AI adoption and support creatives across the organization.`
      },
      images: [
        "/placeholders/works/1.jpg",
        "/placeholders/works/2.jpg",
        "/placeholders/works/3.jpg",
        "/placeholders/works/4.jpg",
        "/placeholders/works/1.jpg",
        "/placeholders/works/2.jpg",
        "/placeholders/works/3.jpg"
      ]
    },
    {
      slug: "star-house-siding-upgrade",
      title: "Star House\u201D Siding Upgrade \u2014 Done Right",
      subtitle: "Scott wanted a fresh exterior that still matched the character of his home.",
      location: "Forest City, IA",
      services: "Siding Replacement",
      materials: "D-5 Dutchlap (Acadia Green)",
      videoThumbnail: "/placeholders/projects/project-1.jpg",
      summary: "Scott wanted a fresh exterior that still matched the character of his home. We helped him compare colors, pick the right profile, and install with a clean, durable finish.",
      resultSummary: "curb appeal up, maintenance worry down.",
      customer: {
        title: "A Front Range Homeowner",
        content: "wanted a roof that looks high-end but holds up to Colorado\u2019s toughest weather. After repeated storm seasons and constant patchwork, they needed a long-term system\u2014not another temporary fix. They reached out to Black Knight Roofing for an expert-led evaluation and a solution designed for durability, aesthetics, and peace of mind."
      },
      problem: {
        content: `With demand for high-quality creative output growing across users and internal teams, Vimeo\u2019s Brand and Production team saw the need for a unified strategy to accelerate AI adoption and support creatives across the organization.`
      },
      solution: {
        content: `With demand for high-quality creative output growing across users and internal teams, Vimeo\u2019s Brand and Production team saw the need for a unified strategy to accelerate AI adoption and support creatives across the organization.`
      },
      result: {
        content: `With demand for high-quality creative output growing across users and internal teams, Vimeo\u2019s Brand and Production team saw the need for a unified strategy to accelerate AI adoption and support creatives across the organization.`
      },
      images: [
        "/placeholders/works/1.jpg",
        "/placeholders/works/2.jpg",
        "/placeholders/works/3.jpg",
        "/placeholders/works/4.jpg",
        "/placeholders/works/1.jpg",
        "/placeholders/works/2.jpg",
        "/placeholders/works/3.jpg"
      ]
    }
  ];
  return caseStudies.map((caseStudy) => ({
    params: { slug: caseStudy.slug },
    props: { caseStudy }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const roofImgOp = await getImage({ src: roofImage });
  const { caseStudy } = Astro2.props;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${caseStudy.title} | Case Study`, "data-astro-cid-skaurlmh": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-skaurlmh": true })} ${renderComponent($$result2, "Hero2", $$Hero2, { "backgroundImage": heroBg, "title": "Case Studies Denver", "subtitle": "Case Studies", "data-astro-cid-skaurlmh": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-skaurlmh>
Insurance Claim Specialists: We navigate storm and hail damage claims for you, making insurance stress-free.
      Insurance Claim Specialists: We navigate storm and hail damage claims for you, making insurance stress-free.
      Insurance Claim Specialists: We navigate storm and hail damage claims for you, making insurance stress-free.
      Insurance Claim Specialists: We navigate storm and hail damage claims for you, making insurance stress-free.
</p> <div class="flex items-center gap-x-4" data-astro-cid-skaurlmh> ${renderComponent($$result3, "EstimateButton", $$EstimateButton, { "data-astro-cid-skaurlmh": true })} </div> ` })} <div class="relative" data-astro-cid-skaurlmh> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent" data-astro-cid-skaurlmh></div> ${renderComponent($$result2, "Brands", $$Brands, { "data-astro-cid-skaurlmh": true })} </div> <section class="bg-[#111] py-20" data-astro-cid-skaurlmh> <div class="container overflow-visible" data-astro-cid-skaurlmh> <!-- Breadcrumbs --> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: caseStudy.title, href: `/case-studies/${caseStudy.slug}` }
  ], "class": "mb-4", "data-astro-cid-skaurlmh": true })} <div class="flex flex-col items-start justify-between gap-12 lg:flex-row" data-astro-cid-skaurlmh> <!-- Main Content --> <div class="max-w-4xl flex-1 space-y-12" data-astro-cid-skaurlmh> <!-- Video Section --> <div class="space-y-12 rounded-3xl" data-astro-cid-skaurlmh> <div class="space-y-8" data-astro-cid-skaurlmh> <!-- Thumbnail --> <div class="group border-primary/30 relative aspect-video cursor-pointer overflow-hidden rounded-2xl border" data-astro-cid-skaurlmh> ${renderComponent($$result2, "Image", $$Image, { "src": caseStudy.videoThumbnail, "alt": caseStudy.title, "width": 1200, "height": 675, "class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", "data-astro-cid-skaurlmh": true })} <div class="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity group-hover:bg-black/20" data-astro-cid-skaurlmh> <div class="bg-primary shadow-primary/40 flex size-16 transform items-center justify-center rounded-full shadow-2xl transition-transform group-hover:scale-110" data-astro-cid-skaurlmh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "play", "class": "size-6 text-black", "data-astro-cid-skaurlmh": true })} </div> </div> </div> <!-- Heading Area --> <div class="space-y-4 px-2 pb-4 text-center sm:text-left" data-astro-cid-skaurlmh> <h4 class="font-heading pb-2 leading-tight text-white" data-astro-cid-skaurlmh> ${caseStudy.title} </h4> <div data-astro-cid-skaurlmh> <div class="relative py-2 pl-6" data-astro-cid-skaurlmh> <div class="bg-primary absolute inset-y-0 left-0 w-0.5 rounded-full" data-astro-cid-skaurlmh></div> <p class="text-left text-base leading-relaxed text-[#ccc]" data-astro-cid-skaurlmh> ${caseStudy.summary} </p> </div> <div class="relative py-2 pl-6" data-astro-cid-skaurlmh> <div class="bg-primary absolute inset-y-0 left-0 w-0.5 rounded-full" data-astro-cid-skaurlmh></div> <p class="text-left text-base text-[#ccc]" data-astro-cid-skaurlmh> <span class="font-bold text-white" data-astro-cid-skaurlmh>Result:</span> ${caseStudy.resultSummary} </p> </div> </div> </div> </div> </div> <!-- Info Bar --> <div class="via-primary relative mx-auto w-full rounded-3xl bg-linear-to-r from-[#594216]/30 to-[#594216]/30 p-px sm:w-fit" data-astro-cid-skaurlmh> <div class="border-primary/20 relative grid max-w-[787px] grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-3xl border bg-[#1a1a1a] p-8 shadow-2xl sm:grid-cols-3 sm:divide-x sm:divide-y-0" data-astro-cid-skaurlmh> ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "sun-flow", "width": 1920, "height": 1080, "class": "absolute inset-0 h-full w-full object-cover opacity-20", "data-astro-cid-skaurlmh": true })} <!-- Location --> <div class="flex items-center gap-4 py-4 sm:py-0 sm:pr-8" data-astro-cid-skaurlmh> <div class="py-4" data-astro-cid-skaurlmh> <div class="text-primary flex items-center gap-x-2 text-xl font-bold" data-astro-cid-skaurlmh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "location-02", "class": "text-primary size-6", "data-astro-cid-skaurlmh": true })} <span data-astro-cid-skaurlmh> Location </span> </div> <div class="text-[#ccc]" data-astro-cid-skaurlmh>${caseStudy.location}</div> </div> </div> <!-- Services --> <div class="flex items-center gap-4 py-4 sm:px-8 sm:py-0" data-astro-cid-skaurlmh> <div class="py-4" data-astro-cid-skaurlmh> <div class="text-primary flex items-center gap-x-2 text-xl font-bold" data-astro-cid-skaurlmh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "cap", "class": "text-primary size-6", "data-astro-cid-skaurlmh": true })} <span data-astro-cid-skaurlmh> Services </span> </div> <div class="text-[#ccc]" data-astro-cid-skaurlmh>${caseStudy.services}</div> </div> </div> <!-- Materials --> <div class="flex items-center gap-4 py-4 sm:py-0 sm:pl-8" data-astro-cid-skaurlmh> <div class="py-4" data-astro-cid-skaurlmh> <div class="text-primary flex items-center gap-x-2 text-xl font-bold" data-astro-cid-skaurlmh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "materials", "class": "text-primary size-6", "data-astro-cid-skaurlmh": true })} <span data-astro-cid-skaurlmh> Materials </span> </div> <div class="text-[#ccc]" data-astro-cid-skaurlmh>${caseStudy.materials}</div> </div> </div> </div> </div> <!-- Detailed Sections --> <div class="space-y-20 pt-10" data-astro-cid-skaurlmh> <!-- The Customer --> <section id="the-customer" class="scroll-mt-32 space-y-6" data-astro-cid-skaurlmh> <h2 class="font-heading text-primary text-4xl font-normal" data-astro-cid-skaurlmh>The Customer</h2> <p class="text-base leading-relaxed font-medium text-white/90 decoration-white/30 decoration-1 underline-offset-4" data-astro-cid-skaurlmh> <span class="underline decoration-white/50" data-astro-cid-skaurlmh>${caseStudy.customer.title}</span> ${caseStudy.customer.content} </p> </section> <!-- The Problem --> <section id="the-problem" class="scroll-mt-32 space-y-6" data-astro-cid-skaurlmh> <h2 class="font-heading text-primary text-4xl font-normal" data-astro-cid-skaurlmh>The Problem</h2> <div class="space-y-6 text-base leading-relaxed text-white/80" data-astro-cid-skaurlmh> <p data-astro-cid-skaurlmh>${caseStudy.problem.content}</p> <p data-astro-cid-skaurlmh>To learn more about Vimeo’s journey with Superside, we spoke with:</p> <ul class="space-y-3 pl-6" data-astro-cid-skaurlmh> <li class="flex items-start gap-3" data-astro-cid-skaurlmh> <div class="bg-primary mt-2.5 size-1.5 shrink-0 rounded-full" data-astro-cid-skaurlmh></div> <span class="font-medium text-white underline decoration-white/30 underline-offset-4" data-astro-cid-skaurlmh>Meagan Wood</span>, Director of Integrated Production
</li> <li class="flex items-start gap-3" data-astro-cid-skaurlmh> <div class="bg-primary mt-2.5 size-1.5 shrink-0 rounded-full" data-astro-cid-skaurlmh></div> <span class="font-medium text-white underline decoration-white/30 underline-offset-4" data-astro-cid-skaurlmh>Bia Castro</span>, Director of Brand and Creative
</li> <li class="flex items-start gap-3" data-astro-cid-skaurlmh> <div class="bg-primary mt-2.5 size-1.5 shrink-0 rounded-full" data-astro-cid-skaurlmh></div> <span class="font-medium text-white underline decoration-white/30 underline-offset-4" data-astro-cid-skaurlmh>Leif Huron</span>, Lead Production Manager, Creative Operations
</li> </ul> </div> </section> <!-- The Solution --> <section id="the-solution" class="scroll-mt-32 space-y-6" data-astro-cid-skaurlmh> <h2 class="font-heading text-primary text-4xl font-normal" data-astro-cid-skaurlmh>The Solution</h2> <div class="space-y-4 text-base leading-relaxed text-white/80" data-astro-cid-skaurlmh> <p data-astro-cid-skaurlmh>${caseStudy.solution.content}</p> </div> </section> <!-- The Result --> <section id="the-result" class="scroll-mt-32 space-y-6" data-astro-cid-skaurlmh> <h2 class="font-heading text-primary text-4xl font-normal" data-astro-cid-skaurlmh>The Result</h2> <div class="space-y-4 text-base leading-relaxed text-white/80" data-astro-cid-skaurlmh> <p data-astro-cid-skaurlmh>${caseStudy.result.content}</p> </div> </section> </div> <!-- Bottom CTA --> <div class="from-primary rounded-2xl bg-radial-[at_30%_30%] via-[#594216]/50 to-[#594216]/50 p-px" data-astro-cid-skaurlmh> ${renderComponent($$result2, "NoiseBg", $$NoiseBg, { "class": "group relative rounded-2xl p-8 transition-all duration-300", "data-astro-cid-skaurlmh": true }, { "default": async ($$result3) => renderTemplate` <div class="from-primary/5 absolute inset-0 bg-radial-[at_center] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" data-astro-cid-skaurlmh></div> <div class="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left" data-astro-cid-skaurlmh> <div class="space-y-1" data-astro-cid-skaurlmh> <h3 class="font-heading to-primary bg-linear-to-r from-white via-white bg-clip-text text-4xl text-transparent" data-astro-cid-skaurlmh>
Get Your FREE Roof Inspection Done!
</h3> <p class="text-sm font-bold tracking-wider text-white/50 uppercase" data-astro-cid-skaurlmh>
Need any roof repair help? Get in touch today!
</p> </div> ${renderComponent($$result3, "Button", $$Button, { "variant": "primary", "size": "lg", "class": "shadow-primary/10 rounded-lg shadow-xl", "data-estimate-trigger": true, "data-astro-cid-skaurlmh": true }, { "default": async ($$result4) => renderTemplate`
Get Started
` })} </div> ` })} </div> </div> <!-- Sidebar --> <aside class="w-full shrink-0 space-y-12 lg:sticky lg:top-32 lg:w-80" data-astro-cid-skaurlmh> <!-- Table of Contents --> <div class="hidden space-y-6 lg:block" data-astro-cid-skaurlmh> <div class="font-body text-xl font-bold text-white" data-astro-cid-skaurlmh>Table of Contents</div> <nav class="flex flex-col gap-2 border-l border-white/20 pl-4" data-astro-cid-skaurlmh> <a href="#the-customer" class="hover:text-primary py-1 text-[#ccc] transition-colors" data-astro-cid-skaurlmh>01 — The Customer</a> <a href="#the-problem" class="hover:text-primary py-1 text-[#ccc] transition-colors" data-astro-cid-skaurlmh>02 — The Problem</a> <a href="#the-solution" class="hover:text-primary py-1 text-[#ccc] transition-colors" data-astro-cid-skaurlmh>03 — The Solution</a> <a href="#the-result" class="hover:text-primary py-1 text-[#ccc] transition-colors" data-astro-cid-skaurlmh>04 — The Result</a> </nav> </div> <!-- Support Card --> <div class="via-primary rounded-2xl bg-linear-to-r from-white/0 to-white/0 p-px" data-astro-cid-skaurlmh> <div class="group relative flex aspect-3/4 flex-col justify-end overflow-hidden rounded-2xl p-8"${addAttribute(`
              background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${roofImgOp.src});
              background-size: cover;
              background-position: bottom;
              background-repeat: no-repeat;
             `, "style")} data-astro-cid-skaurlmh> <div class="absolute inset-0 z-10 bg-linear-to-t from-black via-black/40 to-transparent" data-astro-cid-skaurlmh></div> ${renderComponent($$result2, "Image", $$Image, { "src": sunflow, "alt": "Support", "class": "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105", "data-astro-cid-skaurlmh": true })} <div class="relative z-20 space-y-8" data-astro-cid-skaurlmh> <div class="space-y-4" data-astro-cid-skaurlmh> <h3 class="font-heading text-primary text-4xl leading-tight" data-astro-cid-skaurlmh>Need Help? Call Us Now</h3> <p class="leading-relaxed text-[#ccc]" data-astro-cid-skaurlmh>
Have questions or need a custom quote? Our team is here to help
</p> </div> <div class="flex items-center gap-4" data-astro-cid-skaurlmh> <div class="bg-primary flex size-12 shrink-0 items-center justify-center rounded-full" data-astro-cid-skaurlmh> ${renderComponent($$result2, "Icon", $$Icon, { "name": "phone", "class": "size-6 text-black", "data-astro-cid-skaurlmh": true })} </div> <div data-astro-cid-skaurlmh> <div class="text-xs font-bold tracking-widest text-white/60 uppercase" data-astro-cid-skaurlmh>Give us a call:</div> <div class="text-primary font-heading mt-1 text-3xl leading-none" data-astro-cid-skaurlmh>(815) 200-1255</div> </div> </div> <div class="border-t border-white/20 pt-4" data-astro-cid-skaurlmh> <p class="text-sm text-white/60" data-astro-cid-skaurlmh>Check Availability</p> <p class="font-medium text-white" data-astro-cid-skaurlmh>Secure your spot asap!</p> </div> </div> </div> </div> </aside> </div> </div> </section>  <section class="mb-20" data-astro-cid-skaurlmh> ${renderComponent($$result2, "ProjectSwiper", $$ProjectSwiper, { "images": caseStudy.images, "data-astro-cid-skaurlmh": true })} </section> ${renderComponent($$result2, "Process", $$Process, { "steps": processSteps, "data-astro-cid-skaurlmh": true })} <div class="relative" data-astro-cid-skaurlmh> <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F2C744]/50 to-transparent" data-astro-cid-skaurlmh></div> ${renderComponent($$result2, "Brands", $$Brands, { "data-astro-cid-skaurlmh": true })} </div> ${renderComponent($$result2, "CTASection", $$CTASection, { "data-astro-cid-skaurlmh": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-skaurlmh": true })} ` })} `;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/case-studies/[slug].astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/case-studies/[slug].astro";
const $$url = "/case-studies/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
