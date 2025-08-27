import{s as f,r as h,p as y}from"./server.browser-rAMDWieH.js";import{j as t}from"./jsx-runtime-CKrituN3.js";import{d as _,e as x,P as j}from"./index-BOnBFsZr.js";/* empty css                  */import{c as H}from"./clsx-B-dksMZM.js";const b={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},image:{name:"Image",control:"text",table:{defaultValue:""}},image_alt:{name:"Image alt",control:"text",table:{defaultValue:""}},type:{name:"Type",control:{type:"select"},options:["home","category"]}},m=({title:r="",text:e="",image:o="",image_alt:i="",type:a=""})=>t.jsxs("section",{className:H("nijmegen-hero",{"nijmegen-hero--home":a==="home"}),children:[t.jsx("div",{className:"nijmegen-hero__container",children:t.jsxs("div",{className:"nijmegen-hero__content",children:[t.jsxs("div",{className:"nijmegen-hero__content--heading",children:[r&&t.jsx(_,{children:r}),e&&a==="home"&&t.jsx(x,{children:e})]}),e&&a==="category"&&t.jsx(j,{children:e})]})}),o&&a==="home"&&t.jsx("img",{className:"nijmegen-hero__image",src:o,alt:i})]});try{m.displayName="HeroStory",m.__docgenInfo={description:"",displayName:"HeroStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},image:{defaultValue:{value:""},description:"",name:"image",required:!1,type:{name:"string"}},image_alt:{defaultValue:{value:""},description:"",name:"image_alt",required:!1,type:{name:"string"}},type:{defaultValue:{value:""},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Components/Hero/Html Implementation",id:"html-hero",argTypes:b,component:m,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(r,e)=>{var i,a;const o=typeof e.component=="function"?e.component:typeof((i=e.component)==null?void 0:i.render)=="function"?(a=e.component)==null?void 0:a.render:null;return o?f.format(h(o(e.args)),{parser:"babel",plugins:[y]}):r}}}}},n={name:"Hero homepage",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",type:"home"}},s={name:"Hero category",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",type:"category"}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Hero homepage',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    type: 'home'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Hero category',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    type: 'category'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const V=["Default","Category"],E=Object.freeze(Object.defineProperty({__proto__:null,Category:s,Default:n,__namedExportsOrder:V,default:v},Symbol.toStringTag,{value:"Module"}));export{s as C,n as D,E as H};
