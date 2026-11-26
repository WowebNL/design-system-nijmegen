import{s as F,r as _,p as k}from"./server.browser-rAMDWieH.js";import{j}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./index-Chmavs8-.js";const S={htmlFor:{control:"text",description:"Id of the form input this label belongs to"},children:{control:"text",description:"Set the content of the label"},type:{control:{type:"radio"},options:["","checkbox","radio"]},checked:{control:"boolean"},disabled:{control:"boolean"}},d=({htmlFor:l,children:e,type:a,checked:n,disabled:s})=>{const y=["nijmegen-form-field-label",a&&`nijmegen-form-field-label--${a}`,n&&"nijmegen-form-field-label--checked",s&&"nijmegen-form-field-label--disabled"].filter(Boolean).join(" ");return j.jsx("label",{htmlFor:l,className:y,children:e})};try{d.displayName="FormFieldLabelStory",d.__docgenInfo={description:"",displayName:"FormFieldLabelStory",props:{htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"radio"'},{value:'"checkbox"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Components/Form field label/Html Implementation",id:"html-form-field-label",component:d,argTypes:S,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(l,e)=>{var n,s;const a=typeof e.component=="function"?e.component:typeof((n=e.component)==null?void 0:n.render)=="function"?(s=e.component)==null?void 0:s.render:null;return a?F.format(_(a(e.args)),{parser:"babel",plugins:[k]}):l}}}}},r={args:{htmlFor:"f8d58cea-75ad-41d0-b7d8-34989929bb78",children:"Username",type:"",checked:!1,disabled:!1}},o={args:{...r.args,checked:!0}},t={args:{...r.args,disabled:!0}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    htmlFor: 'f8d58cea-75ad-41d0-b7d8-34989929bb78',
    children: 'Username',
    type: '',
    checked: false,
    disabled: false
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    checked: true
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,g,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const x=["Default","Checked","Disabled"],T=Object.freeze(Object.defineProperty({__proto__:null,Checked:o,Default:r,Disabled:t,__namedExportsOrder:x,default:D},Symbol.toStringTag,{value:"Module"}));export{o as C,r as D,T as F,t as a};
