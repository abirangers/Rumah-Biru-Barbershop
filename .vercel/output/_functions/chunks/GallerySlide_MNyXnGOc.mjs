import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as createAstro } from './astro/server_soWoHjxu.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CYE57WBe.mjs';

const $$Astro = createAstro();
const $$GallerySlide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GallerySlide;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "w-full h-full object-cover rounded-xl aspect-square", "width": 214, "height": 214 })} </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/GallerySlide.astro", void 0);

const $$file = "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/GallerySlide.astro";
const $$url = undefined;

export { $$GallerySlide as default, $$file as file, $$url as url };
