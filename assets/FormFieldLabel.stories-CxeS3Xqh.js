import{s as y,r as _,p as k}from"./server.browser-rAMDWieH.js";import{j as L}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./index-Chmavs8-.js";const j={htmlFor:{control:"text",description:"Id of the form input this label belongs to"},children:{control:"text",description:"Set the content of the label"},type:{control:{type:"radio"},options:["","checkbox","radio"]},checked:{control:"boolean"},disabled:{control:"boolean"}},d=({htmlFor:t,children:e,type:a,checked:n,disabled:s})=>{const h=["nijmegen-form-field-label",a&&`nijmegen-form-field-label--${a}`,n&&"nijmegen-form-field-label--checked",s&&"nijmegen-form-field-label--disabled"].filter(Boolean).join(" ");return L.jsx("label",{htmlFor:t,className:h,children:e})};try{d.displayName="FormFieldLabelStory",d.__docgenInfo={description:"",displayName:"FormFieldLabelStory",props:{htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"radio"'},{value:'"checkbox"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Components/Form field label/Html Implementation",id:"html-form-field-label",component:d,argTypes:j,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(t,e)=>{var n,s;const a=typeof e.component=="function"?e.component:typeof((n=e.component)==null?void 0:n.render)=="function"?(s=e.component)==null?void 0:s.render:null;return a?y.format(_(a(e.args)),{parser:"babel",plugins:[k]}):t}}}}},r={args:{htmlFor:"f8d58cea-75ad-41d0-b7d8-34989929bb78",children:"Username",type:"",checked:!1,disabled:!1}},o={args:{...r.args,checked:!0}},l={args:{...r.args,disabled:!0}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    htmlFor: 'f8d58cea-75ad-41d0-b7d8-34989929bb78',
    children: 'Username',
    type: '',
    checked: false,
    disabled: false
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...DefaultFormFieldLabel.args,
    checked: true
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,F,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...DefaultFormFieldLabel.args,
    disabled: true
  }
}`,...(g=(F=l.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};const x=["DefaultFormFieldLabel","CheckedFormFieldLabel","DisabledFormFieldLabel"],T=Object.freeze(Object.defineProperty({__proto__:null,CheckedFormFieldLabel:o,DefaultFormFieldLabel:r,DisabledFormFieldLabel:l,__namedExportsOrder:x,default:S},Symbol.toStringTag,{value:"Module"}));export{T as F};
