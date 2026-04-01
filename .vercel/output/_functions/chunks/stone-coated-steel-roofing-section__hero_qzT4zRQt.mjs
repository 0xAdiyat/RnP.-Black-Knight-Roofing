const heroImage = new Proxy({"src":"/_astro/stone-coated-steel-roofing-section__hero.BegKRPOm.avif","width":4032,"height":2304,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/stone-coated-steel-roofing-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
