import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_soWoHjxu.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { customerName, reviewDate, rating, reviewText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-3 bg-[#141414]"> <div class="flex-1"> <p class="text-[#FFFFFF] text-base font-medium leading-normal"> ${customerName} </p> <p class="text-[#9BACBB] text-sm font-normal leading-normal"> ${reviewDate} </p> </div> <div class="flex gap-0.5"> ${Array(rating).fill(0).map(() => renderTemplate`<div class="text-[#359EFF]" data-icon="Star" data-size="20px" data-weight="fill"> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256"> <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path> </svg> </div>`)} </div> <p class="text-[#FFFFFF] text-base font-normal leading-normal"> ${reviewText} </p> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TestimonialCard.astro", void 0);

const $$file = "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TestimonialCard.astro";
const $$url = undefined;

export { $$TestimonialCard as default, $$file as file, $$url as url };
