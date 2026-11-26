import{s as I,r as E,p as H}from"./server.browser-rAMDWieH.js";import{j as c}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./index-Chmavs8-.js";const T={id:{control:"text",description:"Unique identifier to associate it with a form field label"},state:{control:{type:"select"},options:["default","hover","focus-visible","disabled","invalid"],description:"Show the select in a specific state"}},l=({id:n,state:e="default"})=>{const i=["nijmegen-select",e!=="default"&&`nijmegen-select--${e}`].filter(Boolean).join(" ");return c.jsxs("select",{id:n,className:i,disabled:e==="disabled"||void 0,"aria-invalid":e==="invalid"||void 0,children:[c.jsx("option",{value:"1",className:"nijmegen-select__option",children:"Option 1"}),c.jsx("option",{value:"2",className:"nijmegen-select__option",children:"Option 2"}),c.jsx("option",{value:"3",className:"nijmegen-select__option",children:"Option 3"})]})};try{l.displayName="SelectStory",l.__docgenInfo={description:"",displayName:"SelectStory",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"default"'},{value:'"hover"'},{value:'"focus-visible"'},{value:'"invalid"'}]}}}}}catch{}const V={title:"Components/Select/Html Implementation",id:"html-select",component:l,argTypes:T,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(n,e)=>{var d,p;const i=typeof e.component=="function"?e.component:typeof((d=e.component)==null?void 0:d.render)=="function"?(p=e.component)==null?void 0:p.render:null;return i?I.format(E(i(e.args)),{parser:"babel",plugins:[H]}):n}}}}},a={args:{id:"59476ba2-cdc6-4b10-ac9d-70350f26dc86",state:"default"}},s={args:{...a.args,state:"hover"}},r={args:{...a.args,state:"focus-visible"}},t={args:{...a.args,state:"disabled"}},o={args:{...a.args,state:"invalid"}};var u,m,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: '59476ba2-cdc6-4b10-ac9d-70350f26dc86',
    state: 'default'
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,v,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'hover'
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var _,S,j;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'focus-visible'
  }
}`,...(j=(S=r.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var h,y,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'disabled'
  }
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var x,N,O;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'invalid'
  }
}`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const q=["Default","Hover","FocusVisible","Disabled","Invalid"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Disabled:t,FocusVisible:r,Hover:s,Invalid:o,__namedExportsOrder:q,default:V},Symbol.toStringTag,{value:"Module"}));export{a as D,r as F,s as H,o as I,k as S,t as a};
