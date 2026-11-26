import{s as w,r as E,p as H}from"./server.browser-rAMDWieH.js";import{j as R}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./index-Chmavs8-.js";const B={id:{control:"text",description:"Unique identifier to associate it with a form field label"},placeholder:{control:"text",description:"Placeholder text shown when the input is empty"},state:{control:{type:"select"},options:["default","hover","focus-visible","disabled","invalid","read-only"],description:"Show the text input in a specific state"}},c=({id:l,placeholder:r,state:a="default"})=>{const d=["nijmegen-text-input",a!=="default"&&`nijmegen-text-input--${a}`].filter(Boolean).join(" ");return R.jsx("input",{type:"text",id:l,className:d,placeholder:r||void 0,disabled:a==="disabled"||void 0,"aria-invalid":a==="invalid"||void 0,readOnly:a==="read-only"||void 0})};try{c.displayName="TextInputStory",c.__docgenInfo={description:"",displayName:"TextInputStory",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"default"'},{value:'"hover"'},{value:'"focus-visible"'},{value:'"invalid"'},{value:'"read-only"'}]}}}}}catch{}const F={title:"Components/Text input/Html Implementation",id:"html-text-input",component:c,argTypes:B,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(l,r)=>{var d,p;const a=typeof r.component=="function"?r.component:typeof((d=r.component)==null?void 0:d.render)=="function"?(p=r.component)==null?void 0:p.render:null;return a?w.format(E(a(r.args)),{parser:"babel",plugins:[H]}):l}}}}},e={args:{id:"06c51b81-480a-46bb-938d-e20a4540a9c1",placeholder:"",state:"default"}},t={args:{...e.args,state:"hover"}},s={args:{...e.args,state:"focus-visible"}},o={args:{...e.args,state:"disabled"}},n={args:{...e.args,state:"invalid"}},i={args:{...e.args,state:"read-only"}};var u,m,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: '06c51b81-480a-46bb-938d-e20a4540a9c1',
    placeholder: '',
    state: 'default'
  }
}`,...(f=(m=e.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,v,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'hover'
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,h,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'focus-visible'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var _,S,D;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'disabled'
  }
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var T,I,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'invalid'
  }
}`,...(j=(I=n.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var O,V,q;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'read-only'
  }
}`,...(q=(V=i.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const N=["Default","Hover","FocusVisible","Disabled","Invalid","ReadOnly"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:o,FocusVisible:s,Hover:t,Invalid:n,ReadOnly:i,__namedExportsOrder:N,default:F},Symbol.toStringTag,{value:"Module"}));export{e as D,s as F,t as H,n as I,i as R,A as T,o as a};
