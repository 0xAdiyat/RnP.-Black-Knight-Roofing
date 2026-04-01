const step3 = new Proxy({"src":"/_astro/step-3.BO94qDp_.png","width":218,"height":218,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/steps/step-3.png";
							}
							
							return target[name];
						}
					});

export { step3 as s };
