const heroImage = new Proxy({"src":"/_astro/blogs-and-blog-details-section__hero.BTl37UqF.avif","width":4096,"height":1730,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/bg/blogs-and-blog-details-section__hero.avif";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
