function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Annotatie-C5WzWpUP.js","./jsx-runtime-CKrituN3.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js","./index-DI5IigMn.js","./Documentatie-BzwX3a8f.js","./chunk-HLWAVYOI-BgTD7_0J.js","./react-18-Bym-zv4b.js","./extends-CCbyfPlC.js","./index-VaGq4-f5.js","./Button.stories-CUdl7oCs.js","./index-Bl22gwsP.css","./Button.docs-D5zVrT42.js","./Button.stories-BL5b-S3u.js","./Button-CGFopZK_.css","./Button.docs-C2DbI58D.js","./introduction.stories-Ba2V4I6M.js","./license.stories-CYDlkGhy.js","./notice.stories-Fil7cQof.js","./entry-preview-puqlPxUk.js","./entry-preview-docs-AjXcrm1u.js","./preview-C60M3PNS.js","./preview-C45wZDNS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",p=function(n,_){return new URL(n,_).href},d={},r=function(_,s,c){let t=Promise.resolve();if(s&&s.length>0){const e=document.getElementsByTagName("link");t=Promise.all(s.map(o=>{if(o=p(o,c),o in d)return;d[o]=!0;const m=o.endsWith(".css"),O=m?'[rel="stylesheet"]':"";if(!!c)for(let u=e.length-1;u>=0;u--){const l=e[u];if(l.href===o&&(!m||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${O}`))return;const i=document.createElement("link");if(i.rel=m?"stylesheet":E,m||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),m)return new Promise((u,l)=>{i.addEventListener("load",u),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})}))}return t.then(()=>_()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,a=R({page:"preview"});f.setChannel(a);window.__STORYBOOK_ADDONS_CHANNEL__=a;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=a);const P={"./src/components/button/Annotatie.mdx":async()=>r(()=>import("./Annotatie-C5WzWpUP.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./src/components/button/Documentatie.mdx":async()=>r(()=>import("./Documentatie-BzwX3a8f.js"),__vite__mapDeps([5,1,2,3,6,7,8,9,10,11,4]),import.meta.url),"./src/components/button/Html/Button.docs.mdx":async()=>r(()=>import("./Button.docs-D5zVrT42.js"),__vite__mapDeps([12,1,2,3,6,7,8,9,13,14,11,4]),import.meta.url),"./src/components/button/Html/Button.stories.tsx":async()=>r(()=>import("./Button.stories-BL5b-S3u.js").then(n=>n.B),__vite__mapDeps([13,3,2,1,14,11]),import.meta.url),"./src/components/button/React/Button.docs.mdx":async()=>r(()=>import("./Button.docs-C2DbI58D.js"),__vite__mapDeps([15,1,2,3,6,7,8,9,10,11,4]),import.meta.url),"./src/components/button/React/Button.stories.tsx":async()=>r(()=>import("./Button.stories-CUdl7oCs.js").then(n=>n.b),__vite__mapDeps([10,2,3,1,8,11]),import.meta.url),"./src/docs/introduction.stories.mdx":async()=>r(()=>import("./introduction.stories-Ba2V4I6M.js"),__vite__mapDeps([16,6,2,3,7,8,9,1,4]),import.meta.url),"./src/docs/license.stories.mdx":async()=>r(()=>import("./license.stories-CYDlkGhy.js"),__vite__mapDeps([17,6,2,3,7,8,9,1,4]),import.meta.url),"./src/docs/notice.stories.mdx":async()=>r(()=>import("./notice.stories-Fil7cQof.js"),__vite__mapDeps([18,6,2,3,7,8,9,1,4]),import.meta.url)};async function T(n){return P[n]()}const{composeConfigs:w,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const n=await Promise.all([r(()=>import("./entry-preview-puqlPxUk.js"),__vite__mapDeps([19,2,3,7]),import.meta.url),r(()=>import("./entry-preview-docs-AjXcrm1u.js"),__vite__mapDeps([20,9,3,2]),import.meta.url),r(()=>import("./preview-Bj1MZHvr.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-C7tAAfkq.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-DF-d5FoE.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-CERQ_MbU.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-C60M3PNS.js").then(_=>_.p),__vite__mapDeps([21,1,2,3,22]),import.meta.url)]);return w(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:v});export{r as _};
