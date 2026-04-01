const HeroBgImage = new Proxy({"src":"/_astro/gutters-section__hero.Cd_u0Dou.avif","width":4096,"height":2286,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/gutters-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { HeroBgImage as H };
