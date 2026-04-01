const beforeAfterHero = new Proxy({"src":"/_astro/before-after-section__hero.BCZ23ExP.avif","width":8232,"height":4212,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/before-after-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { beforeAfterHero as b };
