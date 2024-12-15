import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as createAstro } from './astro/server_soWoHjxu.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CYE57WBe.mjs';

const $$Astro = createAstro();
const $$TeamMemberCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamMemberCard;
  const { image, name, experience, role } = Astro2.props;
  console.log(image);
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-3 text-center pb-3"> <div class="px-4"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": name, "class": "w-full aspect-square rounded-full object-cover", "width": 418, "height": 418 })} </div> <div> <p class="text-[#FFFFFF] text-base font-medium leading-normal"> ${name} - Pengalaman ${experience} Tahun
</p> <p class="text-[#9BACBB] text-sm font-normal leading-normal"> ${role} </p> </div> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TeamMemberCard.astro", void 0);

const $$file = "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TeamMemberCard.astro";
const $$url = undefined;

export { $$TeamMemberCard as default, $$file as file, $$url as url };
