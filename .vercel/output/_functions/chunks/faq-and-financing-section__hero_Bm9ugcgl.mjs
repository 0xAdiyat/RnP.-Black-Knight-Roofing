const heroImage = new Proxy({"src":"/_astro/faq-and-financing-section__hero.o1lES-TC.avif","width":1440,"height":741,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/faq-and-financing-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
