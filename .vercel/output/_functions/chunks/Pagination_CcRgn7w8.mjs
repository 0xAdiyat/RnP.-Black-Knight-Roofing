import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, f as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server_DZ-DbHVo.mjs';
import { f as cn, c as $$Icon } from './Footer_YfAkoF97.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$PaginationLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PaginationLink;
  const { isActive, isDisabled, class: className, href, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "rounded-full overflow-hidden transition-all duration-300",
    isActive ? "bg-primary border-radial " : "bg-white/10 hover:bg-white/20"
  ), "class")}> <a${addAttribute(isDisabled ? void 0 : href, "href")}${addAttribute(cn(
    "flex size-9 items-center justify-center rounded-full text-sm font-medium transition-colors",
    isActive ? "bg-[#0d0d0d] text-white" : "bg-white/10 backdrop-blur-[16.5px] text-white/70 hover:text-white",
    isDisabled && "opacity-30 cursor-not-allowed pointer-events-none",
    className
  ), "class")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </a> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/pagination/PaginationLink.astro", void 0);

const $$Astro$1 = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$PaginationEllipsis = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PaginationEllipsis;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("flex size-9 items-center justify-center text-white/40 font-bold", className), "class")}> <span>...</span> </div>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/pagination/PaginationEllipsis.astro", void 0);

const $$Astro = createAstro("https://rnp-black-knight-roofing.vercel.app");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    currentPage,
    totalPages,
    baseUrl,
    queryParam = "page",
    searchParams = {},
    class: className
  } = Astro2.props;
  const getPageUrl = (page) => {
    const url = new URL(baseUrl, Astro2.url.origin);
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== void 0 && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
    url.searchParams.set(queryParam, page.toString());
    return url.pathname + url.search;
  };
  const generatePages = () => {
    const pages2 = [];
    const maxVisiblePages = 7;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages2.push(i);
    } else {
      if (currentPage <= 4) {
        pages2.push(1, 2, 3, 4, 5, "DOTS", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages2.push(1, "DOTS", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages2.push(1, "DOTS", currentPage - 1, currentPage, currentPage + 1, "DOTS", totalPages);
      }
    }
    return pages2;
  };
  const pages = generatePages();
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Pagination"${addAttribute(cn("flex items-center gap-2", className), "class")}> <!-- Previous Button --> ${renderComponent($$result, "PaginationLink", $$PaginationLink, { "href": currentPage > 1 ? getPageUrl(currentPage - 1) : void 0, "isDisabled": currentPage <= 1, "aria-label": "Go to previous page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-left", "class": "size-5" })} ` })} <!-- Page Numbers --> <div class="flex items-center gap-2"> ${pages.map(
    (page) => page === "DOTS" ? renderTemplate`${renderComponent($$result, "PaginationEllipsis", $$PaginationEllipsis, {})}` : renderTemplate`${renderComponent($$result, "PaginationLink", $$PaginationLink, { "href": getPageUrl(page), "isActive": currentPage === page, "aria-label": `Go to page ${page}`, "aria-current": currentPage === page ? "page" : void 0 }, { "default": ($$result2) => renderTemplate`${page}` })}`
  )} </div> <!-- Next Button --> ${renderComponent($$result, "PaginationLink", $$PaginationLink, { "href": currentPage < totalPages ? getPageUrl(currentPage + 1) : void 0, "isDisabled": currentPage >= totalPages, "aria-label": "Go to next page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-right", "class": "size-5" })} ` })} </nav>`;
}, "/Users/fhixa.com/Projects/Niche Projects/RnP.-Black-Knight-Roofing/src/components/ui/pagination/Pagination.astro", void 0);

export { $$Pagination as $ };
