const heroImage = new Proxy({"src":"/_astro/storm-damage-repair-section__hero.D3MTIhg5.avif","width":1376,"height":768,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/storm-damage-repair-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
