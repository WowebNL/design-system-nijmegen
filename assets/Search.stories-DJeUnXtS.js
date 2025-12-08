import{s as O,r as Z,p as D}from"./server.browser-rAMDWieH.js";import{a as _,S as T}from"./_Search-V-uaXP73.js";const E={title:"Components/Search/Html Implementation",id:"html-search",argTypes:_,component:T,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(y,e)=>{var l,d;const o=typeof e.component=="function"?e.component:typeof((l=e.component)==null?void 0:l.render)=="function"?(d=e.component)==null?void 0:d.render:null;return o?O.format(Z(o(e.args)),{parser:"babel",plugins:[D]}):y}}}}},a={name:"Search",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,readOnly:!1}},r={name:"Search disabled",args:{placeholder:"Zoeken",icon:!0,disabled:!0,dark:!1,readOnly:!1}},n={name:"Search read only",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,readOnly:!0}},s={name:"Search dark mode",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!0,readOnly:!1}};var c,t,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Search',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    readOnly: false
  }
}`,...(p=(t=a.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var m,i,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Search disabled',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: true,
    dark: false,
    readOnly: false
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var f,h,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Search read only',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    readOnly: true
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,b,g;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Search dark mode',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: true,
    readOnly: false
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const R=["Default","Disabled","ReadOnly","Dark"],M=Object.freeze(Object.defineProperty({__proto__:null,Dark:s,Default:a,Disabled:r,ReadOnly:n,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{a as D,n as R,M as S,r as a,s as b};
