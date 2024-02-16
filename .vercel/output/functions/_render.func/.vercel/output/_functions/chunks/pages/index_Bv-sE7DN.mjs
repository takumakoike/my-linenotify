/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_RHo4ZIl7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Common = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Common;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/koiketakuma/Documents/GitHub/my-line-notify/src/components/Common.astro", void 0);

const $$Astro = createAstro();
const CLIENTID = "xQDd1RzlrR2qoDIQvmdASG";
const CLIENTSECRET = "OmHSL6B0HHnUSNpROhmHQF9i1u45ELIbs0dvfrKoMuO";
const REDIRECT_URI = "https://my-linenotify.vercel.app/redirect";
const AUTH_GET_ENDPOINT = "https://notify-bot.line.me/oauth/authorize";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const param = `response_type=code&client_id=${CLIENTID}&redirect_uri=${REDIRECT_URI}&scope=notify&state=state&response_mode=form_post`;
  const AUTH_GET_REQUEST = AUTH_GET_ENDPOINT + "?" + param;
  return renderTemplate`${renderComponent($$result, "Common", $$Common, { "pageTitle": "Astro\u3092\u4F7F\u3063\u305FLINE\u9023\u643A" })} ${maybeRenderHead()}<main class="container flex-col flex mx-auto"> <header class="p-5 bg-gray-400 w-full">テスト</header> <section class="container mx-auto p-3"> <h2 class="text-3xl text-green-500 font-bold text-center">LINEログイン認証</h2> <a${addAttribute(AUTH_GET_REQUEST, "href")} target="_blank" class="btn bg-blue-600 flex justify-center p-2 mt-4 rounded-2xl text-white hover:bg-blue-200 hover:text-blue-700 transition-shadow lg:w-52 lg:mx-auto">ここからログインする</a> </section> <footer class="p-5 bg-blue-500 w-full">フッター</footer> </main>`;
}, "/Users/koiketakuma/Documents/GitHub/my-line-notify/src/pages/index.astro", void 0);

const $$file = "/Users/koiketakuma/Documents/GitHub/my-line-notify/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    AUTH_GET_ENDPOINT,
    CLIENTID,
    CLIENTSECRET,
    REDIRECT_URI,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Common as $, CLIENTID as C, REDIRECT_URI as R, CLIENTSECRET as a, index as i };
