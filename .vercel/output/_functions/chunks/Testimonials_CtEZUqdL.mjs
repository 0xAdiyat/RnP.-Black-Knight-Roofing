import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute } from './astro/server_DZ-DbHVo.mjs';
import { $ as $$Image, a as getImage } from './_astro_assets_CCmGuUXD.mjs';
import { h as $$RatingStars, b as $$Button, s as sunflow, c as $$Icon } from './Footer_YfAkoF97.mjs';
import { $ as $$Carousel, a as $$CarouselSlide } from './CarouselSlide_CqFOE99K.mjs';
import { a as $$BadgeTitle } from './BadgeTitle_CkONzckv.mjs';

const GoogleIcon = new Proxy({"src":"/_astro/google-icon-logo.BRe8XQUp.avif","width":48,"height":48,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/google-icon-logo.avif";
							}
							
							return target[name];
						}
					});

const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="border-radial rounded-2xl group"> <div class="testimonial-bg-noise relative w-full rounded-2xl p-6"> <div class="size-8 rounded-full bg-white/10"></div> <div class="flex items-center gap-x-3 pt-2.5 font-medium"> <div>Jennifer Lawrance</div> ${renderComponent($$result, "RatingStars", $$RatingStars, { "rating": 5 })} </div> <div class="pt-4 text-sm">Couldn&apos;t be happier with the results.</div> <div class="text-sm">
The crew was professional, communication was clear, and the roof looks incredible. They made the whole process
      easy.
</div> <div class="flex w-fit items-center gap-x-1 pt-3"> <div class="py-2.5 pr-2.5"> ${renderComponent($$result, "Image", $$Image, { "alt": "Google Logo", "width": 24, "height": 24, "loading": "eager", "src": GoogleIcon })} </div> <div class="bg-linear-to-r from-white/70 via-white to-white/70 bg-[length:200%_auto] bg-left bg-clip-text text-transparent transition-all duration-[1200ms] ease-in-out group-hover:bg-right">
Google Verified
</div> </div> </div> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/TestimonialCard.astro", void 0);

const googleLogo = new Proxy({"src":"/_astro/google-logo.BOuw-PGZ.avif","width":160,"height":62,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/google-logo.avif";
							}
							
							return target[name];
						}
					});

const bgShapeImage = new Proxy({"src":"/_astro/testimonial-section-shape.C1zMgSzL.avif","width":1439,"height":844,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/testimonial-section-shape.avif";
							}
							
							return target[name];
						}
					});

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const bgShape = await getImage({ src: bgShapeImage, width: 1536, height: 850, format: "avif" });
  return renderTemplate`${maybeRenderHead()}<section data-testid="testimonials" id="testimonials" class="relative overflow-hidden"> <!-- Background Image --> <div class="pointer-events-none absolute inset-0 -z-10 bg-[#151515]"> ${renderComponent($$result, "Image", $$Image, { "src": sunflow, "alt": "", "width": 1536, "height": 1152, "format": "avif", "loading": "eager", "fetchpriority": "high", "sizes": "(max-width: 768px) 100vw, 1536px", "class": "h-full w-full object-cover object-top" })} <!-- This div acts as your linear-gradient overlay to manage opacity/tint --> <div class="absolute inset-0 bg-[#151515]/85"></div> </div> <div class="z-10 py-20 lg:bg-size-[auto_100%] lg:bg-position-[top_right]"${addAttribute(`
      background-image: url(${bgShape.src});
      background-repeat: no-repeat;
    `, "style")}> <div class="space-y-12"> <!-- Top section --> <div class="container flex flex-col gap-y-10 pt-8 lg:flex-row lg:items-end"> <div class="w-full max-w-[450px]"> ${renderComponent($$result, "BadgeTitle", $$BadgeTitle, { "badge": "Homeowner Reviews", "title": "Real Reviews from Colorado Homeowners", "titleClass": "text-3xl lg:text-4xl font-normal leading-tight" })} </div> <div class="flex flex-col items-start gap-8 md:flex-row md:items-center lg:gap-x-16"> <div class="flex flex-col items-start gap-y-4 sm:flex-row sm:items-center sm:gap-x-4"> ${renderComponent($$result, "Image", $$Image, { "fetchpriority": "high", "loading": "eager", "src": googleLogo, "alt": "google Logo", "width": googleLogo.width, "height": googleLogo.height, "class": "h-8 w-fit object-contain" })} <div class="flex flex-wrap items-center gap-x-4 text-sm sm:text-base"> <span class="font-medium"> Excellent </span> ${renderComponent($$result, "RatingStars", $$RatingStars, { "rating": 5, "size": 18, "fillColor": "#F7B715", "strokeColor": "none" })} <span class="font-bold"> 5.0 </span> <span class="hidden h-4 w-px bg-white/30 sm:block"></span> <span class="text-white/70"> 41 reviews </span> </div> </div> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "class": "w-full max-w-[200px] sm:w-auto" }, { "default": async ($$result2) => renderTemplate` Write a Review` })} </div> </div> <!-- Testimonial cards --> <div class="relative w-full overflow-hidden"> <div class="relative"> <!-- Responsive overlays --> <div class="pointer-events-none absolute inset-y-0 top-0 left-0 z-10 w-4 bg-linear-to-r from-[#151515] to-[#15151500] md:w-32 lg:w-[250px]"></div> <div class="pointer-events-none absolute inset-y-0 top-0 right-0 z-10 w-4 bg-linear-to-l from-[#151515] to-[#15151500] md:w-32 lg:w-[250px]"></div> ${renderComponent($$result, "Carousel", $$Carousel, { "slidesPerView": 1.3, "centeredSlides": true, "spaceBetween": 12, "loop": true, "autoplay": true, "breakpoints": {
    640: { slidesPerView: 1.5, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 24, centeredSlides: false },
    1024: { slidesPerView: 3, spaceBetween: 32, centeredSlides: false },
    1440: { slidesPerView: 3.5, spaceBetween: 40, centeredSlides: false }
  }, "class": "w-full pb-16" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CarouselSlide", $$CarouselSlide, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "TestimonialCard", $$TestimonialCard, {})} ` })} ${renderComponent($$result2, "CarouselSlide", $$CarouselSlide, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "TestimonialCard", $$TestimonialCard, {})} ` })} ${renderComponent($$result2, "CarouselSlide", $$CarouselSlide, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "TestimonialCard", $$TestimonialCard, {})} ` })} ${renderComponent($$result2, "CarouselSlide", $$CarouselSlide, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "TestimonialCard", $$TestimonialCard, {})} ` })}  `, "navigation": async ($$result2) => renderTemplate`<div class="mt-8 flex justify-center gap-x-2.5 lg:mt-12"> <button type="button" aria-label="Previous testimonial" class="swiper-button-prev hover:bg-primary group static! mt-0! flex h-10! w-10! items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-colors duration-200 after:content-none!"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-left", "class": "size-4! text-white group-hover:text-black" })} </button> <button type="button" aria-label="Next testimonial" class="swiper-button-next hover:bg-primary group static! mt-0! flex h-10! w-10! items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-colors duration-200 after:content-none!"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-right", "class": "size-4! text-white group-hover:text-black" })} </button> </div>` })} </div> </div> </div> </div> </section>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/Testimonials.astro", void 0);

export { $$Testimonials as $, GoogleIcon as G };
