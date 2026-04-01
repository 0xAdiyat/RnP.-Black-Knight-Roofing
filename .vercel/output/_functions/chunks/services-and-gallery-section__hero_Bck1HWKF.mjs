const heroImage = new Proxy({"src":"/_astro/services-and-gallery-section__hero.C2MvkTfB.avif","width":4320,"height":2277,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/services-and-gallery-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
