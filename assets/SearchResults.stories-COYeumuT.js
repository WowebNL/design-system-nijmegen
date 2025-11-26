import{j as e}from"./jsx-runtime-CKrituN3.js";import{s as f,r as g,p as y}from"./server.browser-rAMDWieH.js";/* empty css                  */import{e as x,P as j,L as _}from"./index-CPTthvO3.js";import{c as b}from"./clsx-B-dksMZM.js";import{I as i}from"./IconCalendarEvent-3BPlFUi5.js";const v={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},link:{name:"Link",control:"text",table:{defaultValue:""}},url:{name:"Url",control:"text",table:{defaultValue:""}},meta:{name:"Meta",control:{type:"object"},table:{defaultValue:""}},layout:{name:"Meta layout",description:"Layout of the metadata",control:{type:"select"},options:["vertical","horizontal"]}},o=({meta:n=[],layout:a="horizontal",title:r="",text:l="",link:s="",url:c=""})=>e.jsxs("div",{className:"nijmegen-search-results",children:[e.jsx(x,{appearance:"utrecht-heading-4",level:4,children:e.jsx("a",{className:"nijmegen-search-results__heading",href:c,children:r})}),e.jsxs("div",{className:"nijmegen-search-results__content",children:[e.jsxs("div",{className:"nijmegen-search-results__summary",children:[e.jsx("ul",{className:b("nijmegen-metadata",a==="horizontal"&&"nijmegen-metadata__horizontal"),children:n.map((d,h)=>e.jsxs("li",{className:"nijmegen-metadata__item",children:[d.icon,d.children]},h))}),e.jsx(j,{children:l})]}),e.jsx(_,{href:c,children:s})]})]});try{o.displayName="SearchResultsStory",o.__docgenInfo={description:"",displayName:"SearchResultsStory",props:{meta:{defaultValue:{value:"[] as { children: string; icon: any }[]"},description:"",name:"meta",required:!1,type:{name:"{ children: string; icon: any; }[]"}},layout:{defaultValue:{value:"horizontal"},description:"",name:"layout",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},link:{defaultValue:{value:""},description:"",name:"link",required:!1,type:{name:"string"}},url:{defaultValue:{value:""},description:"",name:"url",required:!1,type:{name:"string"}}}}}catch{}const M={title:"Components/Search results/Html Implementation",id:"html-searchResults",argTypes:v,component:o,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(n,a)=>{var l,s;const r=typeof a.component=="function"?a.component:typeof((l=a.component)==null?void 0:l.render)=="function"?(s=a.component)==null?void 0:s.render:null;return r?f.format(g(r(a.args)),{parser:"babel",plugins:[y]}):n}}}}},t={name:"Search results",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",link:"Text",url:"#",layout:"horizontal",meta:[{children:"Metadata",icon:e.jsx(i,{"aria-label":"Metadata: "})},{children:"Metadata",icon:e.jsx(i,{"aria-label":"Metadata: "})},{children:"Metadata",icon:e.jsx(i,{"aria-label":"Metadata: "})}]}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Search results',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    link: 'Text',
    url: '#',
    layout: 'horizontal',
    meta: ([{
      children: 'Metadata',
      icon: <IconCalendarEvent aria-label="Metadata: " />
    }, {
      children: 'Metadata',
      icon: <IconCalendarEvent aria-label="Metadata: " />
    }, {
      children: 'Metadata',
      icon: <IconCalendarEvent aria-label="Metadata: " />
    }] as Array<{
      children: string;
      icon: any;
    }>)
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const S=["Default"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:S,default:M},Symbol.toStringTag,{value:"Module"}));export{t as D,I as S};
