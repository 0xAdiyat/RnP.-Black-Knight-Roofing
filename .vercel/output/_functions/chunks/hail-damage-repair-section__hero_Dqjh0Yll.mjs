const heroImage = new Proxy({"src":"/_astro/hail-damage-repair-section__hero.CaYiDwBl.avif","width":3072,"height":3072,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/hail-damage-repair-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
