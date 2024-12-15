import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CfNGUc8P.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_soWoHjxu.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/abiay/OneDrive/Documents/visual%20studio%20code/astro/rumah-biru-barbershop/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.iERXnOXH.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TestimonialCard.astro":"chunks/TestimonialCard_CZDXIId9.mjs","C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TeamMemberCard.astro":"chunks/TeamMemberCard_FRadTenU.mjs","C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/GallerySlide.astro":"chunks/GallerySlide_MNyXnGOc.mjs","C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bwmiq_FT.mjs","\u0000@astrojs-manifest":"manifest_CXvmC5e9.mjs","C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Gallery.astro?astro&type=script&index=0&lang.ts":"_astro/Gallery.astro_astro_type_script_index_0_lang.COT0VZOH.js","C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.SVxgSSLj.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Header.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"menu-button\"),e=document.getElementById(\"mobile-menu\"),t=document.getElementById(\"menu-open\"),o=document.getElementById(\"menu-close\");n?.addEventListener(\"click\",()=>{e?.classList.toggle(\"hidden\"),t?.classList.toggle(\"hidden\"),o?.classList.toggle(\"hidden\"),document.body.style.overflow=e?.classList.contains(\"hidden\")?\"auto\":\"hidden\"});"]],"assets":["/_astro/work-sans-latin-wght-normal.CkJCGd27.woff2","/_astro/work-sans-vietnamese-400-normal.Dtu8X5r1.woff2","/_astro/work-sans-latin-ext-500-normal.x-AUL-Ds.woff2","/_astro/work-sans-latin-400-normal.CO25iGFc.woff2","/_astro/work-sans-latin-ext-400-normal.DFCb0lrE.woff2","/_astro/work-sans-vietnamese-700-normal.DlhJC1Cf.woff2","/_astro/work-sans-vietnamese-500-normal.CGZR0xuG.woff2","/_astro/work-sans-latin-500-normal.DxRKHa88.woff2","/_astro/work-sans-latin-700-normal.8NPS7-Eu.woff2","/_astro/work-sans-latin-900-normal.BPuhjcFH.woff2","/_astro/work-sans-vietnamese-900-normal.DoQ7WYAP.woff2","/_astro/work-sans-latin-ext-700-normal.DBufOjzI.woff2","/_astro/work-sans-latin-ext-900-normal.DaucKwIg.woff2","/_astro/work-sans-vietnamese-400-normal.RUrI7Cd4.woff","/_astro/work-sans-vietnamese-700-normal.C3tUcDt0.woff","/_astro/work-sans-vietnamese-500-normal.BTVJ4LWU.woff","/_astro/work-sans-latin-ext-500-normal.CDrTE6L5.woff","/_astro/work-sans-latin-ext-400-normal.BHfVSso1.woff","/_astro/work-sans-latin-400-normal.C_QB87mg.woff","/_astro/work-sans-vietnamese-900-normal.CO75TTGf.woff","/_astro/work-sans-latin-500-normal.VdYb_rL3.woff","/_astro/work-sans-latin-700-normal.C7D6rmx2.woff","/_astro/work-sans-latin-ext-700-normal.Djef0w78.woff","/_astro/work-sans-latin-900-normal.BZAZU6Ww.woff","/_astro/work-sans-latin-ext-900-normal.DB_13sDB.woff","/_astro/index.iERXnOXH.css","/favicon.svg","/hero-image.jpg","/_astro/Gallery.astro_astro_type_script_index_0_lang.COT0VZOH.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TestimonialCard.astro","TestimonialCard"],["C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TeamMemberCard.astro","TeamMemberCard"],["C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/GallerySlide.astro","GallerySlide"]],"key":"2Ki32HqbvyT1HH33LwNDgsqvvQGf7ezWD2AFq/Gbneg="});

export { manifest };
