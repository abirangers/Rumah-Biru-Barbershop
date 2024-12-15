import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Z1TpDA00.mjs';
import { manifest } from './manifest_CXvmC5e9.mjs';

const serverIslandMap = new Map([
	['TestimonialCard', () => import('./chunks/TestimonialCard_CZDXIId9.mjs')],
	['TeamMemberCard', () => import('./chunks/TeamMemberCard_FRadTenU.mjs')],
	['GallerySlide', () => import('./chunks/GallerySlide_MNyXnGOc.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "77cb231c-6589-4178-9119-3ebecd7c3085",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
