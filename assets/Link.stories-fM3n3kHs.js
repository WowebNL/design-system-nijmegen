import{j as a}from"./jsx-runtime-CKrituN3.js";import{a as x}from"./index-N71Teeq5.js";import{s as I,r as L,p as j}from"./server.browser-rAMDWieH.js";import{a as E}from"./_Link-C6rKkPeO.js";import{I as S}from"./IconCalendarEvent-3BPlFUi5.js";import{I as T}from"./IconArrowRight-pMXm72se.js";const b={title:"Components/Link/Html Implementation",id:"html-link",component:x,argTypes:E,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(g,e)=>{var s,c;const o=typeof e.component=="function"?e.component:typeof((s=e.component)==null?void 0:s.render)=="function"?(c=e.component)==null?void 0:c.render:null;return o?I.format(L(o(e.args)),{parser:"babel",plugins:[j]}):g}}}}},r={name:"Link",args:{href:"https://example.com",title:"Link",children:"Link"}},n={name:"Icon start",args:{href:"https://example.com",title:"Link",children:[a.jsx(S,{stroke:2}),a.jsx("span",{children:"Text"})]}},t={name:"Icon end",args:{href:"https://example.com",title:"Link",children:[a.jsx("span",{children:"Text"}),a.jsx(T,{stroke:2})]}};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Link',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: 'Link'
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,d,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Icon start',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [<IconCalendarEvent stroke={2} />, <span>Text</span>]
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,h,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Icon end',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [<span>Text</span>, <IconArrowRight stroke={2} />]
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const _=["Default","IconStart","IconEnd"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:r,IconEnd:t,IconStart:n,__namedExportsOrder:_,default:b},Symbol.toStringTag,{value:"Module"}));export{B as L};
