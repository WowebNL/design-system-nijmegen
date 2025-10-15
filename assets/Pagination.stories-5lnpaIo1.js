import{s as c,r as m,p as f}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import{c as r}from"./clsx-B-dksMZM.js";const _={next:{name:"Volgende",control:"object"},prev:{name:"Vorige",control:"object"},ellipses:{name:"Toon ellipses",control:"boolean"}},l=({next:a={href:"",disabled:!1},prev:n={href:"",disabled:!1},ellipses:t=!1})=>e.jsxs("nav",{className:"nijmegen-pagination",children:[n.disabled?e.jsx("span",{className:r("nijmegen-pagination__relative-link","nijmegen-pagination__relative-link--prev","nijmegen-pagination__relative-link--disabled"),rel:"prev",children:e.jsx("span",{children:"Vorige"})}):e.jsx("a",{href:n.href,className:r("nijmegen-pagination__relative-link","nijmegen-pagination__relative-link--prev"),rel:"prev",children:e.jsx("span",{children:"Vorige"})}),e.jsxs("span",{role:"group",className:"nijmegen-pagination__pages",children:[e.jsx("a",{className:"nijmegen-pagination__page-link nijmegen-pagination__page-link--current","aria-current":"true",href:"./1",children:"1"}),e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./2",rel:"next",children:"2"}),e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./3",children:"3"}),t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"nijmegen-pagination__ellipses",children:"..."}),e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./99",children:"99"})]}):e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./4",children:"4"}),e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./5",children:"5"})]})]}),a.disabled?e.jsx("span",{className:r("nijmegen-pagination__relative-link","nijmegen-pagination__relative-link--next","nijmegen-pagination__relative-link--disabled"),rel:"next",children:e.jsx("span",{children:"Volgende"})}):e.jsx("a",{href:a.href,className:r("nijmegen-pagination__relative-link","nijmegen-pagination__relative-link--next"),rel:"next",children:e.jsx("span",{children:"Volgende"})})]});try{l.displayName="PaginationStory",l.__docgenInfo={description:"",displayName:"PaginationStory",props:{next:{defaultValue:{value:"{ href: '', disabled: false }"},description:"",name:"next",required:!1,type:{name:"{ href: string; disabled: boolean; }"}},prev:{defaultValue:{value:"{ href: '', disabled: false }"},description:"",name:"prev",required:!1,type:{name:"{ href: string; disabled: boolean; }"}},ellipses:{defaultValue:{value:"false"},description:"",name:"ellipses",required:!1,type:{name:"boolean"}}}}}catch{}const h={title:"Components/Pagination/Html Implementation",id:"html-pagination",argTypes:_,component:l,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(a,n)=>{var s,o;const t=typeof n.component=="function"?n.component:typeof((s=n.component)==null?void 0:s.render)=="function"?(o=n.component)==null?void 0:o.render:null;return t?c.format(m(t(n.args)),{parser:"babel",plugins:[f]}):a}}}}},i={name:"Pagination",args:{next:{href:"",disabled:!1},prev:{href:"",disabled:!0},links:[{href:"./1",index:1,title:"Resultaat 1 tot 10"},{href:"./2",index:2,title:"Resultaat 11 tot 20"},{href:"./3",index:3,title:"Resultaat 21 tot 30"},{href:"./4",index:4,title:"Resultaat 31 tot 40"},{href:"./5",index:5,title:"Resultaat 41 tot 50"}]}};var p,d,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Pagination',
  args: {
    next: {
      href: '',
      disabled: false
    },
    prev: {
      href: '',
      disabled: true
    },
    links: [{
      href: './1',
      index: 1,
      title: 'Resultaat 1 tot 10'
    }, {
      href: './2',
      index: 2,
      title: 'Resultaat 11 tot 20'
    }, {
      href: './3',
      index: 3,
      title: 'Resultaat 21 tot 30'
    }, {
      href: './4',
      index: 4,
      title: 'Resultaat 31 tot 40'
    }, {
      href: './5',
      index: 5,
      title: 'Resultaat 41 tot 50'
    }]
  }
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const u=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:u,default:h},Symbol.toStringTag,{value:"Module"}));export{k as P};
