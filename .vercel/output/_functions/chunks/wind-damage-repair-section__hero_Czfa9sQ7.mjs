const heroImage = new Proxy({"src":"/_astro/wind-damage-repair-section__hero.eCGL84YI.avif","width":4096,"height":2286,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/wind-damage-repair-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
