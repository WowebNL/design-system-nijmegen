import{s as O,r as Z,p as D}from"./server.browser-rAMDWieH.js";import{a as _,b as T}from"./_Search-Ct2hWxMo.js";const E={title:"Components/Search/Web Component Implementation",id:"web-component-search",argTypes:_,component:T,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(y,e)=>{var t,l;const s=typeof e.component=="function"?e.component:typeof((t=e.component)==null?void 0:t.render)=="function"?(l=e.component)==null?void 0:l.render:null;return s?O.format(Z(s(e.args)),{parser:"babel",plugins:[D]}):y}}}}},a={name:"Search",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,readOnly:!1,autocomplete:!0}},r={name:"Search disabled",args:{placeholder:"Zoeken",icon:!0,disabled:!0,dark:!1,readOnly:!1,autocomplete:!0}},n={name:"Search read only",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,readOnly:!0,autocomplete:!0}},o={name:"Search dark mode",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!0,readOnly:!1,autocomplete:!0}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Search',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    readOnly: false,
    autocomplete: true
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Search disabled',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: true,
    dark: false,
    readOnly: false,
    autocomplete: true
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var f,b,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Search read only',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    readOnly: true,
    autocomplete: true
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var h,S,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Search dark mode',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: true,
    readOnly: false,
    autocomplete: true
  }
}`,...(g=(S=o.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const j=["Default","Disabled","ReadOnly","Dark"],R=Object.freeze(Object.defineProperty({__proto__:null,Dark:o,Default:a,Disabled:r,ReadOnly:n,__namedExportsOrder:j,default:E},Symbol.toStringTag,{value:"Module"}));export{R as S};
