import{s as g,r as k,p as V}from"./server.browser-rAMDWieH.js";import{j as S}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./index-Uj-N_Xw0.js";import{c as v}from"./clsx-B-dksMZM.js";const _={children:{name:"Children",control:"text",description:"Link text"},href:{name:"rel",control:"text"},visibilty:{name:"Visibilty",control:{type:"boolean"},description:"Visibilty"},focusVisible:{name:"focusVisible",control:{type:"boolean"},description:"Simulate :focus-visible"}},t=({children:r="",href:e="",visibilty:a=!1,focusVisible:o=!1})=>S.jsx("a",{href:e,className:v("nijmegen-skip-link",a&&"nijmegen-skip-link--focus",o&&"nijmegen-skip-link--focus-visible"),children:r});try{t.displayName="SkipLinkStory",t.__docgenInfo={description:"",displayName:"SkipLinkStory",props:{href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},visibilty:{defaultValue:{value:"false"},description:"",name:"visibilty",required:!1,type:{name:"boolean"}},focusVisible:{defaultValue:{value:"false"},description:"",name:"focusVisible",required:!1,type:{name:"boolean"}}}}}catch{}const j={title:"Components/Skip link/Html Implementation",id:"html-skiplink",component:t,argTypes:_,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(r,e)=>{var o,l;const a=typeof e.component=="function"?e.component:typeof((o=e.component)==null?void 0:o.render)=="function"?(l=e.component)==null?void 0:l.render:null;return a?g.format(k(a(e.args)),{parser:"babel",plugins:[V]}):r}}}}},i={args:{href:"#main",children:"Ga naar hoofdinhoud",visibilty:!0,focusVisible:!1}},s={name:"Default focus",args:{href:"#main",children:"Ga naar hoofdinhoud",visibilty:!0,focusVisible:!0}},n={name:"Visible on focus",args:{href:"#main",children:"Ga naar hoofdinhoud",visibilty:!1,focusVisible:!1}};var c,u,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    href: '#main',
    children: 'Ga naar hoofdinhoud',
    visibilty: true,
    focusVisible: false
  }
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,m,d;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Default focus',
  args: {
    href: '#main',
    children: 'Ga naar hoofdinhoud',
    visibilty: true,
    focusVisible: true
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,h,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Visible on focus',
  args: {
    href: '#main',
    children: 'Ga naar hoofdinhoud',
    visibilty: false,
    focusVisible: false
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const x=["Default","Focus","VisibleOnFocus"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Focus:s,VisibleOnFocus:n,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{i as D,s as F,L as S,n as V};
