import{s as E,r as q,p as O}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./index-Chmavs8-.js";const V={id:{control:"text"},label:{control:"text"},description:{control:"text"},invalid:{control:"boolean"},errorMessage:{control:"text"},fieldType:{control:{type:"select"},options:["Text input","Text area","Select"]}},m=({id:a,label:n,description:s,invalid:t,errorMessage:i,fieldType:c="Text input"})=>{const u=`${a}-description`,f=`${a}-error-message`,g=t&&i,I=[s&&u,g&&f].filter(Boolean).join(" "),M=["nijmegen-form-field",t&&"nijmegen-form-field--invalid"].filter(Boolean).join(" "),p={id:a,"aria-describedby":I||void 0,"aria-invalid":t||void 0};return e.jsxs("div",{className:M,children:[e.jsx("label",{htmlFor:a,className:"nijmegen-form-field-label",children:n}),s&&e.jsx("div",{id:u,className:"nijmegen-form-field-description",children:s}),g&&e.jsx("div",{id:f,className:"nijmegen-form-field-error-message",children:i}),c==="Text input"&&e.jsx("input",{type:"text",className:"nijmegen-text-input",...p}),c==="Text area"&&e.jsx("textarea",{className:"nijmegen-text-area",rows:4,...p}),c==="Select"&&e.jsxs("select",{className:"nijmegen-select",...p,children:[e.jsx("option",{value:"1",className:"nijmegen-select__option",children:"Option 1"}),e.jsx("option",{value:"2",className:"nijmegen-select__option",children:"Option 2"}),e.jsx("option",{value:"3",className:"nijmegen-select__option",children:"Option 3"})]})]})};try{m.displayName="FormFieldStory",m.__docgenInfo={description:"",displayName:"FormFieldStory",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},fieldType:{defaultValue:{value:"Text input"},description:"",name:"fieldType",required:!1,type:{name:"enum",value:[{value:'"Text input"'},{value:'"Text area"'},{value:'"Select"'}]}}}}}catch{}const B={title:"Components/Form field/Html Implementation",id:"html-form-field",component:m,argTypes:V,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(a,n)=>{var t,i;const s=typeof n.component=="function"?n.component:typeof((t=n.component)==null?void 0:t.render)=="function"?(i=n.component)==null?void 0:i.render:null;return s?E.format(q(s(n.args)),{parser:"babel",plugins:[O]}):a}}}}},r={args:{id:"7fcad79b-7b5a-496b-bc99-b33027924cf4",label:"Username",description:"Your username is your email address.",invalid:!1,errorMessage:"Enter a valid email address.",fieldType:"Text input"}},o={args:{...r.args,invalid:!0}},l={args:{...r.args,description:""}},d={args:{...r.args,description:"",invalid:!0}};var v,x,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: '7fcad79b-7b5a-496b-bc99-b33027924cf4',
    label: 'Username',
    description: 'Your username is your email address.',
    invalid: false,
    errorMessage: 'Enter a valid email address.',
    fieldType: 'Text input'
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,y,_;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    invalid: true
  }
}`,...(_=(y=o.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var N,T,S;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: ''
  }
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var h,F,D;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: '',
    invalid: true
  }
}`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const w=["Default","Invalid","NoDescription","InvalidNoDescription"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Invalid:o,InvalidNoDescription:d,NoDescription:l,__namedExportsOrder:w,default:B},Symbol.toStringTag,{value:"Module"}));export{r as D,k as F,o as I,l as N,d as a};
