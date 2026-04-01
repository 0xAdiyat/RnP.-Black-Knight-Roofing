const heroImage = new Proxy({"src":"/_astro/metal-roofing-section__hero.DLEKNVB-.avif","width":4096,"height":2286,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/metal-roofing-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
