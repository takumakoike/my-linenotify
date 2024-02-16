/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../astro_RHo4ZIl7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { R as REDIRECT_URI, C as CLIENTID, a as CLIENTSECRET, $ as $$Common } from './index_Bv-sE7DN.mjs';

const $$Astro = createAstro();
const $$Redirect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Redirect;
  const NOW_URL = new URL(Astro2.request.url);
  let code = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const codeValue = formData.get("code");
    if (codeValue !== null) {
      code = codeValue.toString();
    }
  }
  const AUTH_POST_ENDPOINT = "https://notify-bot.line.me/oauth/token";
  const PARAMS = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENTID,
    client_secret: CLIENTSECRET
  };
  let response = await fetch(AUTH_POST_ENDPOINT, PARAMS);
  let jsonData = response.json();
  return renderTemplate`${renderComponent($$result, "Common", $$Common, { "pageTitle": "\u8A8D\u8A3C\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F" })} ${maybeRenderHead()}<main class="container flex-col flex mx-auto"> <header class="p-5 bg-gray-400 w-full">テスト</header> <section class="container mx-auto p-3"> <h2 class="text-3xl text-green-500 font-bold text-center">LINEログイン認証</h2> <a href="" target="_blank" class="btn bg-blue-600 flex justify-center p-2 mt-4 rounded-2xl text-white hover:bg-blue-200 hover:text-blue-700 transition-shadow lg:w-52 lg:mx-auto">ここからログインする</a> <dl> <dt></dt><dd>このページのURL</dd> <dd>${NOW_URL}</dd> <dt></dt><dd>POSTリクエストに対するレスポンス全容</dd> <dd>${response}</dd> <dt></dt><dd>POSTリクエストに対するJSONデータ</dd> <dd>${jsonData}</dd> </dl> </section> <footer class="p-5 bg-blue-500 w-full">フッター</footer> </main>`;
}, "/Users/koiketakuma/Documents/GitHub/my-line-notify/src/pages/redirect.astro", void 0);

const $$file = "/Users/koiketakuma/Documents/GitHub/my-line-notify/src/pages/redirect.astro";
const $$url = "/redirect";

export { $$Redirect as default, $$file as file, $$url as url };
