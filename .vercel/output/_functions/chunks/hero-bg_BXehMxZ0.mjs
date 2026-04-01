const heroBgImage = new Proxy({"src":"/_astro/hero-bg.BPae1bEG.avif","width":1536,"height":1152,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/hero-bg.avif";
							}
							
							return target[name];
						}
					});

export { heroBgImage as h };
