import{s as A,r as I,p as E}from"./server.browser-rAMDWieH.js";import{j as H}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./index-Chmavs8-.js";const R={id:{control:"text",description:"Unique identifier to associate it with a form field label"},placeholder:{control:"text",description:"Placeholder text shown when the text area is empty"},state:{control:{type:"select"},options:["default","hover","focus-visible","disabled","invalid","read-only"],description:"Show the text area in a specific state"}},p=({id:i,placeholder:r,rows:d,state:a="default"})=>{const c=["nijmegen-text-area",a!=="default"&&`nijmegen-text-area--${a}`].filter(Boolean).join(" ");return H.jsx("textarea",{id:i,className:c,placeholder:r||void 0,rows:d||void 0,disabled:a==="disabled"||void 0,"aria-invalid":a==="invalid"||void 0,readOnly:a==="read-only"||void 0})};try{p.displayName="TextAreaStory",p.__docgenInfo={description:"",displayName:"TextAreaStory",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"default"'},{value:'"hover"'},{value:'"focus-visible"'},{value:'"invalid"'},{value:'"read-only"'}]}}}}}catch{}const B={title:"Components/Text area/Html Implementation",id:"html-text-area",component:p,argTypes:R,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(i,r)=>{var a,c;const d=typeof r.component=="function"?r.component:typeof((a=r.component)==null?void 0:a.render)=="function"?(c=r.component)==null?void 0:c.render:null;return d?A.format(I(d(r.args)),{parser:"babel",plugins:[E]}):i}}}}},e={args:{id:"c12c4a13-345c-4573-8f55-e5dba6a0bad7",placeholder:"",rows:4,state:"default"}},s={args:{...e.args,state:"hover"}},t={args:{...e.args,state:"focus-visible"}},o={args:{...e.args,state:"disabled"}},n={args:{...e.args,state:"invalid"}},l={args:{...e.args,state:"read-only"}};var u,m,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'c12c4a13-345c-4573-8f55-e5dba6a0bad7',
    placeholder: '',
    rows: 4,
    state: 'default'
  }
}`,...(f=(m=e.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,v,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'hover'
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,h,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'focus-visible'
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var _,S,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'disabled'
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var T,w,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'invalid'
  }
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var O,V,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'read-only'
  }
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const F=["Default","Hover","FocusVisible","Disabled","Invalid","ReadOnly"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:o,FocusVisible:t,Hover:s,Invalid:n,ReadOnly:l,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{e as D,t as F,s as H,n as I,l as R,z as T,o as a};
