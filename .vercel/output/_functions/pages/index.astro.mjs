/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderScript, g as renderHead, b as renderComponent, h as renderSlot, a as createAstro } from '../chunks/astro/server_soWoHjxu.mjs';
import 'kleur/colors';
import 'clsx';
import $$TeamMemberCard from '../chunks/TeamMemberCard_FRadTenU.mjs';
import $$TestimonialCard from '../chunks/TestimonialCard_CZDXIId9.mjs';
import $$GallerySlide from '../chunks/GallerySlide_MNyXnGOc.mjs';
export { renderers } from '../renderers.mjs';

const workSansWoff2 = "/_astro/work-sans-latin-wght-normal.CkJCGd27.woff2";

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const menuItems = [
    { text: "Tentang Kami", href: "#about" },
    { text: "Layanan", href: "#services" },
    { text: "Tim Kami", href: "#team" },
    { text: "Testimoni", href: "#testimonials" },
    { text: "Galeri", href: "#gallery" },
    { text: "Lokasi Kami", href: "#location" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#27313A] px-4 sm:px-10 py-3 bg-[#141414]"> <div class="flex items-center gap-4 text-[#FFFFFF]"> <div class="size-4"> <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path> </svg> </div> <h2 class="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em]">
RBB
</h2> </div> <!-- Mobile menu button --> <button class="lg:hidden text-white relative z-[51]" aria-label="Menu" id="menu-button"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block" id="menu-open" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" id="menu-close" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Desktop menu --> <div class="hidden lg:flex flex-1 justify-end gap-8"> <div class="flex items-center gap-9"> ${menuItems.map((item) => renderTemplate`<a class="text-[#FFFFFF] text-sm font-medium leading-normal hover:text-[#359EFF] transition-all duration-300"${addAttribute(item.href, "href")}> ${item.text} </a>`)} </div> <a href="https://wa.me/6289510431269" target="_blank" rel="noopener noreferrer" class="inline-flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-xl px-4 bg-[#359EFF] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2A85D9] hover:scale-105 transition-all duration-300 @[480px]:h-12 @[480px]:px-5 @[480px]:text-base"> <span>Hubungi Kami</span> </a> </div> <!-- Mobile menu --> <div id="mobile-menu" class="fixed inset-0 bg-[#141414] z-50 lg:hidden hidden pt-20 px-4"> <div class="flex flex-col gap-4"> ${menuItems.map((item) => renderTemplate`<a class="text-[#FFFFFF] text-lg font-medium leading-normal hover:text-[#359EFF]"${addAttribute(item.href, "href")}> ${item.text} </a>`)} <button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#359EFF] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] mt-4"> <span class="truncate">Hubungi Kami</span> </button> </div> </div> </header> ${renderScript($$result, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-[#27313A] bg-[#141414]"> <div class="max-w-[960px] mx-auto px-4 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8">  <div class="flex flex-col gap-4"> <div class="flex items-center gap-3"> <div class="w-6 h-6 text-[#FFFFFF]"> <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path> </svg> </div> <h2 class="text-[#FFFFFF] text-xl font-bold">
Rumah Biru Barbershop
</h2> </div> <p class="text-[#9BACBB] text-sm leading-relaxed">
Barbershop premium dengan layanan terbaik untuk tampilan terbaik Anda.
</p> </div>  <div class="flex flex-col gap-4"> <h3 class="text-[#FFFFFF] text-lg font-bold">Layanan</h3> <nav class="flex flex-col gap-3"> ${["Potongan Rambut", "Pemangkasan Jenggot", "Cukur"].map(
    (service) => renderTemplate`<a href="#about" class="text-[#9BACBB] hover:text-[#359EFF] transition-colors text-sm"> ${service} </a>`
  )} </nav> </div>  <div class="flex flex-col gap-4"> <h3 class="text-[#FFFFFF] text-lg font-bold">Kontak</h3> <div class="flex flex-col gap-3"> <p class="text-[#9BACBB] text-sm"> <span class="block">+62 812-3456-7890</span> <span class="block mt-1">info@rumahbirubarbershop.com</span> </p> <p class="text-[#9BACBB] text-sm">
Jl. Industri. Tarikolot<br>
Citeurep, Bogor, 16810
</p> </div> </div>  <div class="flex flex-col gap-4"> <h3 class="text-[#FFFFFF] text-lg font-bold">Sosial Media</h3> <div class="flex flex-wrap gap-4"> ${["Instagram", "Facebook", "Twitter"].map((social) => renderTemplate`<a href="#" class="text-[#9BACBB] hover:text-[#359EFF] transition-colors text-sm"> ${social} </a>`)} </div> </div> </div>  <div class="mt-12 pt-8 border-t border-[#27313A]"> <p class="text-center text-[#9BACBB] text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Rumah Biru Barbershop. All rights reserved.
</p> </div> </div> </footer>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Rumah Biru Barbershop</title><link rel="preload" as="font" type="font/woff2"${addAttribute(workSansWoff2, "href")} crossorigin="anonymous">${renderHead()}</head> <body class="bg-[#141414]" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main class="flex flex-col grow text-white max-w-[944px] mx-auto mt-5" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/layouts/Layout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="@container"> <div class="@[480px]:p-4"> <div class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(&quot;/hero-image.jpg&quot;);"> <div class="flex flex-col gap-2 text-center"> <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
Selamat datang di Rumah Biru Barbershop
</h1> <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
Tidak ada tempat yang lebih baik untuk memperbarui gaya Anda selain di
          Rumah Biru Barbershop. Dua barber kami yang berpengalaman siap
          menghadirkan potongan rambut sempurna dan pelayanan terbaik. Walk-ins
          selalu disambut dengan hangat!
</h2> </div> <a href="https://wa.me/6289510431269" target="_blank" rel="noopener noreferrer" class="inline-flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-xl px-4 bg-[#359EFF] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2A85D9] hover:scale-105 transition-all duration-300 @[480px]:h-12 @[480px]:px-5 @[480px]:text-base"> <span>Hubungi Kami</span> </a> </div> </div> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Hero.astro", void 0);

const $$StatList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-3 px-4 py-3"> <div class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#27313A] p-3 items-center text-center"> <p class="text-[#FFFFFF] tracking-light text-2xl font-bold leading-tight">
5.0
</p> <div class="flex items-center gap-2"> <p class="text-[#9BACBB] text-sm font-normal leading-normal">
Rata-rata Rating
</p> </div> </div> <div class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#27313A] p-3 items-center text-center"> <p class="text-[#FFFFFF] tracking-light text-2xl font-bold leading-tight">
8+
</p> <div class="flex items-center gap-2"> <p class="text-[#9BACBB] text-sm font-normal leading-normal">
Tahun Pengalaman
</p> </div> </div> <div class="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#27313A] p-3 items-center text-center"> <p class="text-[#FFFFFF] tracking-light text-2xl font-bold leading-tight">
1200+
</p> <div class="flex items-center gap-2"> <p class="text-[#9BACBB] text-sm font-normal leading-normal">Pelanggan</p> </div> </div> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/StatList.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="about"> <h2 class="text-[#FFFFFF] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
Tentang Kami
</h2> <p class="text-[#FFFFFF] text-base font-normal leading-normal pb-3 pt-1 px-4">
Didirikan oleh Yudi dan Lucas, Rumah Biru Barbershop adalah barbershop
    favorit di Indonesia. Kami ahli dalam potongan rambut modern, trim jenggot
    rapi, dan layanan cukur dengan handuk panas. Fokus kami? Memberikan
    pengalaman yang nyaman dan gaya yang memukau setiap kali Anda datang.
</p> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/About.astro", void 0);

const $$ServiceList = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      image: "https://cdn.usegalileo.ai/sdxl10/21e0e58b-dda6-4a19-8a6a-0eb4185f2793.png",
      title: "Potongan Rambut"
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/c7632885-16aa-4c18-89f1-91f4363fea5d.png",
      title: "Pemangkasan Jenggot"
    },
    {
      image: "https://cdn.usegalileo.ai/sdxl10/4dce3ee6-dcb1-4da4-955b-6e74aad0ae2d.png",
      title: "Cukur dengan Handuk Panas"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="services"> <h2 class="text-[#FFFFFF] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
Layanan Kami
</h2> <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"> ${services.map((service) => renderTemplate`<div class="flex flex-col gap-3 pb-3"> <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"${addAttribute(`background-image: url("${service.image}");`, "style")}></div> <p class="text-[#FFFFFF] text-base font-medium leading-normal"> ${service.title} </p> </div>`)} </div> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/ServiceList.astro", void 0);

const $$TeamList = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(
    `${"http://localhost/rumah-biru-barbershop/wp-json/wp/v2"}/teams?acf_format=standard`,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const team = await response.json();
  return renderTemplate`${maybeRenderHead()}<div id="team"> <h2 class="text-[#FFFFFF] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
Tim Kami
</h2> <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,450px))] gap-3 p-4 justify-center"> ${team.map((member) => renderTemplate`${renderComponent($$result, "TeamMemberCard", $$TeamMemberCard, { "server:defer": true, "image": member.acf.profile_picture, "name": member.acf.name, "experience": member.acf.experience, "role": member.acf.role, "server:component-directive": "defer", "server:component-path": "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TeamMemberCard.astro", "server:component-export": "default" }, { "fallback": ($$result2) => renderTemplate`<div class="flex flex-col gap-3 text-center pb-3 animate-pulse"> <div class="px-4"> <div class="w-full aspect-square rounded-full bg-gray-700"></div> </div> <div> <div class="h-5 bg-gray-700 rounded w-3/4 mx-auto mb-2"></div> <div class="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div> </div> </div>` })}`)} </div> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TeamList.astro", void 0);

const $$TestimonialList = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(`${"http://localhost/rumah-biru-barbershop/wp-json/wp/v2"}/testimonials`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const testimonials = await response.json();
  return renderTemplate`${maybeRenderHead()}<div id="testimonials"> <h2 class="text-[#FFFFFF] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
Testimoni Pelanggan
</h2> <div class="flex flex-col gap-4 overflow-x-hidden bg-[#141414] p-4"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialCard", $$TestimonialCard, { "server:defer": true, "customerName": testimonial.acf.customer_name, "reviewDate": testimonial.acf.review_date, "rating": testimonial.acf.rating, "reviewText": testimonial.acf.review_text, "server:component-directive": "defer", "server:component-path": "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TestimonialCard.astro", "server:component-export": "default" }, { "fallback": ($$result2) => renderTemplate`<div class="animate-pulse"> <div class="h-4 bg-gray-700 rounded w-3/4 mb-2"></div> <div class="h-3 bg-gray-700 rounded w-1/2 mb-4"></div> <div class="flex gap-1 mb-4"> ${Array(5).fill(0).map(() => renderTemplate`<div class="w-5 h-5 bg-gray-700 rounded"></div>`)} </div> <div class="h-20 bg-gray-700 rounded"></div> </div>` })}`)} </div> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/TestimonialList.astro", void 0);

const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(
    `${"http://localhost/rumah-biru-barbershop/wp-json/wp/v2"}/galleries?acf_format=standard`,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const gallery = await response.json();
  return renderTemplate`${maybeRenderHead()}<div id="gallery" class="relative" data-astro-cid-ihllb3az> <h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-white" data-astro-cid-ihllb3az>
Galeri
</h2> <!-- Slide indicator --> <div class="absolute right-6 top-6 flex items-center gap-2 text-white/70" data-astro-cid-ihllb3az> <span class="text-sm" data-astro-cid-ihllb3az>Geser</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ihllb3az> <path d="M5 12h14" data-astro-cid-ihllb3az></path> <path d="m12 5 7 7-7 7" data-astro-cid-ihllb3az></path> </svg> </div> <div class="swiper mySwiper" data-astro-cid-ihllb3az> <div class="swiper-wrapper" data-astro-cid-ihllb3az> ${gallery.map((gallery2, index) => renderTemplate`${renderComponent($$result, "GallerySlide", $$GallerySlide, { "server:defer": true, "src": gallery2.acf.image, "alt": gallery2.acf.image_alt_text, "server:component-directive": "defer", "server:component-path": "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/GallerySlide.astro", "server:component-export": "default", "data-astro-cid-ihllb3az": true }, { "fallback": ($$result2) => renderTemplate`<div class="animate-pulse" data-astro-cid-ihllb3az> <div class="w-[214px] h-[214px] bg-gray-700 rounded-xl mr-4" data-astro-cid-ihllb3az></div> </div>` })}`)} </div> </div> </div> ${renderScript($$result, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Gallery.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Gallery.astro", void 0);

const $$Location = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="location"> <h2 class="text-[#FFFFFF] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
Lokasi Kami
</h2> <div class="px-4 py-3"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2250725707954!2d106.88794067499273!3d-6.493161393498938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1bc4f05f60f%3A0x54d185bb1f3d374d!2sRumah%20Biru%20Barbershop!5e0!3m2!1sid!2sid!4v1734162906349!5m2!1sid!2sid" width="100%" height="513" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-xl mb-3" title="Lokasi Kami">
    </iframe> <p class="text-[#FFFFFF] text-base font-normal leading-normal">
Kami berlokasi di Jl. Industri. Tarikolot, Kecamatan Citeurep, Kabupaten
      Bogor, Jawa Barat.
</p> <p class="text-[#FFFFFF] text-base font-normal leading-normal">
Jam Operasional: Selasa - Minggu: 17.00 - 22.00, Senin: Tutup.
</p> </div> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/Location.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="@container"> <div class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"> <div class="flex flex-col gap-2 text-center"> <h1 class="text-[#FFFFFF] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[640px] mx-auto">
Siap untuk potongan rambut segar?
</h1> <p class="text-[#FFFFFF] text-base font-normal leading-normal max-w-[720px">
Tidak perlu ribet, datang saja langsung! Kami siap menyambut Anda kapan
        saja selama jam operasional. Untuk pertanyaan lebih lanjut, hubungi kami
        sekarang.
</p> </div> <div class="flex flex-1 justify-center"> <div class="flex justify-center"> <a href="https://wa.me/6289510431269" target="_blank" rel="noopener noreferrer" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#359EFF] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow hover:bg-[#2A85D9] hover:scale-105 transition-all duration-300"> <span class="truncate">Hubungi Kami</span> </a> </div> </div> </div> </div>`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/components/CTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "StatList", $$StatList, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "ServiceList", $$ServiceList, {})} ${renderComponent($$result2, "TeamList", $$TeamList, {})} ${renderComponent($$result2, "TestimonialList", $$TestimonialList, {})} ${renderComponent($$result2, "Gallery", $$Gallery, {})} ${renderComponent($$result2, "Location", $$Location, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/pages/index.astro", void 0);

const $$file = "C:/Users/abiay/OneDrive/Documents/visual studio code/astro/rumah-biru-barbershop/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
