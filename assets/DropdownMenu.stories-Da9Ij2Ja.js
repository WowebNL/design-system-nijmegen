import{s as c,r as l,p as u}from"./server.browser-rAMDWieH.js";import{j as o}from"./jsx-runtime-CKrituN3.js";/* empty css                  */const f={items:{control:"object"}},a=({items:r=[{text:"Placeholder",href:"#"}]})=>o.jsx("div",{className:"nijmegen-dropdown-menu",children:o.jsx("ul",{className:"nijmegen-dropdown-menu__list",role:"list",children:r.map((e,t)=>o.jsx("li",{children:o.jsx("a",{href:e.href,className:"nijmegen-dropdown-menu__item",children:e.text})},t))})});try{a.displayName="DropdownMenuStory",a.__docgenInfo={description:"",displayName:"DropdownMenuStory",props:{items:{defaultValue:{value:"[{ text: 'Placeholder', href: '#' }]"},description:"",name:"items",required:!1,type:{name:"{ text: string; href: string; }[]"}}}}}catch{}const h={title:"Components/Dropdown Menu/Html Implementation",id:"html-dropdown-menu",argTypes:f,component:a,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(r,e)=>{var s,p;const t=typeof e.component=="function"?e.component:typeof((s=e.component)==null?void 0:s.render)=="function"?(p=e.component)==null?void 0:p.render:null;return t?c.format(l(t(e.args)),{parser:"babel",plugins:[u]}):r}}}}},n={name:"Dropdown menu",args:{items:[{text:"Option #1",href:"#"},{text:"Option #2",href:"#"},{text:"Option #3",href:"#"}]}};var i,m,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Dropdown menu',
  args: {
    items: [{
      text: 'Option #1',
      href: '#'
    }, {
      text: 'Option #2',
      href: '#'
    }, {
      text: 'Option #3',
      href: '#'
    }]
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const _=["Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:_,default:h},Symbol.toStringTag,{value:"Module"}));export{n as D,w as a};
