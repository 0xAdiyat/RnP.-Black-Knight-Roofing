const heroImage = new Proxy({"src":"/_astro/window-replacement-section__hero.C1R8AVaE.avif","width":2048,"height":2048,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/window-replacement-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
