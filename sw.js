if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,c,f)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(c.map(r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(e=>{const r=f(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"1.bundle.js",revision:"c4ec344fc861ba661f86c948b3582a78"},{url:"1.css",revision:"deac4a750d4810b8cd1f1b0094151606"},{url:"2.bundle.js",revision:"8610b04ff31d77ceb615a2835f5a8bf8"},{url:"2.css",revision:"fb1038036da7bc15f81a4474656ebf84"},{url:"3.bundle.js",revision:"f0c163fe49994b9b66e65107cc3af8bb"},{url:"4.bundle.js",revision:"4ae2bf2111f37712a056d0b2d2aea734"},{url:"android-chrome-192x192.png",revision:"47a01cb10f80097bb7385a960ebf1b19"},{url:"android-chrome-512x512.png",revision:"819eb6c308f4aa6400becc7f7bec3720"},{url:"apple-touch-icon.png",revision:"453bcef8fac950424bcb40a08cea8687"},{url:"cdd452a58c9d8da9eaf807190a975ffe.svg",revision:"24212bfda72dda061b9062c6cd254585"},{url:"d5acb6aa82cd9a55fdde483f0c55bf6b.svg",revision:"316c8904dd12145e192496b3574110a1"},{url:"favicon-16x16.png",revision:"aeb36d21d94d07fa4e3e74f23f21c74d"},{url:"favicon-32x32.png",revision:"277195f2b2e5d8ebfa4930bb503ed634"},{url:"favicon.ico",revision:"085c32eb6143751563885d4ee0b8616c"},{url:"index.html",revision:"4b3e03940ef5cf2b4f308bf9c77a0f23"},{url:"main.bundle.js",revision:"b6362fc22283d11ff6e18435adb14bd8"},{url:"main.css",revision:"2223a6146b7bb0be9473df52ce25faf2"},{url:"site.webmanifest",revision:"168f4ff0bd225c32f62fe55f81ed670f"}],{})}));
//# sourceMappingURL=sw.js.map
