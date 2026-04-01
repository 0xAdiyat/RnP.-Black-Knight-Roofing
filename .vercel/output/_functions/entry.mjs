import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CLoV-5jF.mjs';
import { manifest } from './manifest_BnmDZVat.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/about-us.astro.mjs');
const _page4 = () => import('./pages/accessibility.astro.mjs');
const _page5 = () => import('./pages/before-and-after.astro.mjs');
const _page6 = () => import('./pages/blogs/_slug_.astro.mjs');
const _page7 = () => import('./pages/blogs.astro.mjs');
const _page8 = () => import('./pages/case-studies/_slug_.astro.mjs');
const _page9 = () => import('./pages/case-studies.astro.mjs');
const _page10 = () => import('./pages/company-info.astro.mjs');
const _page11 = () => import('./pages/contact-us.astro.mjs');
const _page12 = () => import('./pages/faqs.astro.mjs');
const _page13 = () => import('./pages/financing.astro.mjs');
const _page14 = () => import('./pages/gallery.astro.mjs');
const _page15 = () => import('./pages/privacy-policy.astro.mjs');
const _page16 = () => import('./pages/service-areas/_slug_.astro.mjs');
const _page17 = () => import('./pages/service-areas.astro.mjs');
const _page18 = () => import('./pages/services/commercial-roofing-co.astro.mjs');
const _page19 = () => import('./pages/services/gutters-co.astro.mjs');
const _page20 = () => import('./pages/services/hail-damage-repair-co.astro.mjs');
const _page21 = () => import('./pages/services/metal-roofing-co.astro.mjs');
const _page22 = () => import('./pages/services/residential-roofing-co.astro.mjs');
const _page23 = () => import('./pages/services/roof-replacement-services-co.astro.mjs');
const _page24 = () => import('./pages/services/siding-co.astro.mjs');
const _page25 = () => import('./pages/services/stone-coated-steel-roofing-co.astro.mjs');
const _page26 = () => import('./pages/services/storm-damage-repair-co.astro.mjs');
const _page27 = () => import('./pages/services/wind-damage-repair-co.astro.mjs');
const _page28 = () => import('./pages/services/window-replacement-services-co.astro.mjs');
const _page29 = () => import('./pages/services/_serviceid_.astro.mjs');
const _page30 = () => import('./pages/services.astro.mjs');
const _page31 = () => import('./pages/terms-of-use.astro.mjs');
const _page32 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.18.0_@types+node@25.3.5_@vercel+functions@3.4.3_jiti@2.6.1_lightningcss@1.31.1__f58d88bd8fe5cc162582e0fc8424d917/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.18.0_@types+node@25.3.5_@vercel+functions@3.4.3_jiti@2.6.1_lightningcss@1.31.1__f58d88bd8fe5cc162582e0fc8424d917/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about-us.astro", _page3],
    ["src/pages/accessibility.astro", _page4],
    ["src/pages/before-and-after.astro", _page5],
    ["src/pages/blogs/[slug].astro", _page6],
    ["src/pages/blogs/index.astro", _page7],
    ["src/pages/case-studies/[slug].astro", _page8],
    ["src/pages/case-studies/index.astro", _page9],
    ["src/pages/company-info.astro", _page10],
    ["src/pages/contact-us.astro", _page11],
    ["src/pages/faqs.astro", _page12],
    ["src/pages/financing.astro", _page13],
    ["src/pages/gallery.astro", _page14],
    ["src/pages/privacy-policy.astro", _page15],
    ["src/pages/service-areas/[slug].astro", _page16],
    ["src/pages/service-areas/index.astro", _page17],
    ["src/pages/services/commercial-roofing-co.astro", _page18],
    ["src/pages/services/gutters-co.astro", _page19],
    ["src/pages/services/hail-damage-repair-co.astro", _page20],
    ["src/pages/services/metal-roofing-co.astro", _page21],
    ["src/pages/services/residential-roofing-co.astro", _page22],
    ["src/pages/services/roof-replacement-services-co.astro", _page23],
    ["src/pages/services/siding-co.astro", _page24],
    ["src/pages/services/stone-coated-steel-roofing-co.astro", _page25],
    ["src/pages/services/storm-damage-repair-co.astro", _page26],
    ["src/pages/services/wind-damage-repair-co.astro", _page27],
    ["src/pages/services/window-replacement-services-co.astro", _page28],
    ["src/pages/services/[serviceId].astro", _page29],
    ["src/pages/services/index.astro", _page30],
    ["src/pages/terms-of-use.astro", _page31],
    ["src/pages/index.astro", _page32]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "05572b19-e0e8-4124-8058-74ec114cbdfd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
