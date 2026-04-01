const step1 = new Proxy({"src":"/_astro/step-1.Br-aeM4L.png","width":218,"height":218,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/steps/step-1.png";
							}
							
							return target[name];
						}
					});

const step2 = new Proxy({"src":"/_astro/step-2.CWiWyFvE.png","width":218,"height":218,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/steps/step-2.png";
							}
							
							return target[name];
						}
					});

const step4 = new Proxy({"src":"/_astro/step-4.DKQAxQwk.png","width":218,"height":218,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/assets/steps/step-4.png";
							}
							
							return target[name];
						}
					});

export { step2 as a, step4 as b, step1 as s };
