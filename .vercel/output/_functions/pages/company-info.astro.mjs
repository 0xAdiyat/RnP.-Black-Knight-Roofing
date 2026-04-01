import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DZ-DbHVo.mjs';
import { $ as $$LegalPage } from '../chunks/LegalPage_VOHueW7m.mjs';
export { renderers } from '../renderers.mjs';

const $$CompanyInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LegalPage", $$LegalPage, { "title": "Company Info | Black Knight Roofing", "description": "Public-facing company information for Black Knight Roofing, including contact details and service area coverage.", "heading": "Company Info", "intro": "This page summarizes the public-facing business information currently published on the Black Knight Roofing website." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Business Name</h2> <p>Black Knight Roofing</p> <h2>Leadership</h2> <p>
The website identifies Adam Knight as founder, President, owner, US Army veteran, and licensed general contractor.
</p> <h2>What We Do</h2> <p>
The website presents Black Knight Roofing as a veteran-owned roofing and exterior contractor serving Colorado
    homeowners and property owners with roof replacement, roof repair, inspections, storm-damage response, gutters,
    siding, and related services.
</p> <h2>Service Area</h2> <p>
The website states that Black Knight Roofing serves Denver and Colorado&apos;s Front Range, including communities from
    Colorado Springs to Fort Collins.
</p> <h2>Published Contact Information</h2> <ul> <li>Phone: <a href="tel:9708887230">(970) 888-7230</a></li> <li>Email: <a href="mailto:support@blackknightroofing.com">support@blackknightroofing.com</a></li> <li>Hours: Monday through Friday, 9am to 5pm</li> <li>Office address shown on the website: 865 Draw St, Lochbuie, CO 80603</li> </ul> <h2>Business Positioning Published on This Website</h2> <ul> <li>Veteran-owned</li> <li>Licensed, bonded, and insured</li> <li>Lifetime workmanship warranty</li> </ul> <p>
This page is intended to reflect the public-facing information currently presented on the website. It does not add
    or confirm a separate legal entity suffix or corporate filing status not otherwise published here.
</p> <h2>Related Pages</h2> <p>
For how this site handles personal data, see the <a href="/privacy-policy">Privacy Policy</a>. For website terms,
    see the <a href="/terms-of-use">Terms of Use</a>. For assistance using the site, see
<a href="/accessibility">Accessibility</a>.
</p> ` })}`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/company-info.astro", void 0);

const $$file = "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/pages/company-info.astro";
const $$url = "/company-info";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CompanyInfo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
