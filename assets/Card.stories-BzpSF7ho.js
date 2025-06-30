import{j as e}from"./jsx-runtime-CKrituN3.js";import{s as T,r as H,p as A}from"./server.browser-rAMDWieH.js";import{H as D,P as f}from"./index-B0KGBP-1.js";/* empty css                  */import{c as z}from"./clsx-B-dksMZM.js";import{I as R}from"./IconArrowRight-pMXm72se.js";import{I as g}from"./IconCalendarEvent-3BPlFUi5.js";import{c as P}from"./createReactComponent-D_5DJZVZ.js";/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var w=P("outline","clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var B=P("outline","map-pin","IconMapPin",[["path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",key:"svg-1"}]]);const L={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},image:{name:"Image",control:"text",table:{defaultValue:""}},image_alt:{name:"Image alt",control:"text",table:{defaultValue:""}},date:{name:"Date",control:"text",table:{defaultValue:""}},meta:{name:"Meta",control:{type:"object"},table:{defaultValue:""}},state:{name:"State",description:"State of the card, in the example code a state class is set for simulating the state appearance. When implementing this component it is not needed to set a state class, the state will be set by the browser and the styles will automatic apply.",control:{type:"select"},options:["default","active","hover","focus","focus-visible"]}},p=({title:l="",text:a="",meta:n=[],image:t="",image_alt:m="",date:u="",state:d=""})=>e.jsxs("div",{className:z("nijmegen-card",{"nijmegen-card--active":d==="active","nijmegen-card--hover":d==="hover","nijmegen-card--focus":d==="focus","nijmegen-card--focus-visible":d==="focus-visible"}),children:[e.jsxs("div",{className:"nijmegen-card__inner",children:[e.jsxs("div",{className:"nijmegen-card__content",children:[e.jsx(D,{children:e.jsx("a",{className:"nijmegen-card__link",href:"/",children:l})}),(!n||n.length===0)&&a&&e.jsx(f,{children:a})]}),n.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"nijmegen-card__meta",children:n.map((h,q)=>e.jsxs("li",{className:"nijmegen-card__meta-item",children:[h.icon,h.children]},q))}),a&&e.jsx(f,{children:a})]})]}),t&&e.jsx("figure",{className:"nijmegen-card__figure",children:e.jsx("img",{loading:"lazy",src:t,alt:m})}),e.jsxs("div",{className:"nijmegen-card__footer",children:[e.jsx(R,{}),u&&e.jsxs("div",{className:"nijmegen-card__meta-item",children:[e.jsx(g,{}),e.jsx("span",{children:u})]})]})]});try{p.displayName="CardStory",p.__docgenInfo={description:"",displayName:"CardStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},meta:{defaultValue:{value:"[] as { children: string; icon: any }[]"},description:"",name:"meta",required:!1,type:{name:"{ children: string; icon: any; }[]"}},image:{defaultValue:{value:""},description:"",name:"image",required:!1,type:{name:"string"}},image_alt:{defaultValue:{value:""},description:"",name:"image_alt",required:!1,type:{name:"string"}},date:{defaultValue:{value:""},description:"",name:"date",required:!1,type:{name:"string"}},state:{defaultValue:{value:""},description:"",name:"state",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Components/Card/Html Implementation",id:"html-card",argTypes:L,component:p,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(l,a)=>{var t,m;const n=typeof a.component=="function"?a.component:typeof((t=a.component)==null?void 0:t.render)=="function"?(m=a.component)==null?void 0:m.render:null;return n?T.format(H(n(a.args)),{parser:"babel",plugins:[A]}):l}}}}},r={name:"Card",args:{title:"Ondernemers opgelet",text:"Ondernemers en bedrijven uit Nijmegen opgelet!",image:"https://picsum.photos/640/360/",image_alt:"Image description",date:"7 februari 2024",meta:[{children:"Meta 1",icon:e.jsx(g,{})},{children:"Meta 2",icon:e.jsx(w,{})},{children:"Meta 3",icon:e.jsx(B,{})}]}},s={name:"Card news",args:{title:"Ondernemers opgelet",text:"Ondernemers en bedrijven uit Nijmegen opgelet!",image:"https://picsum.photos/640/360/",image_alt:"Image description",date:"7 februari 2024"}},i={name:"Card event",args:{title:"Bevrijdingsdag 2025",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",meta:[{children:"Meta 1",icon:e.jsx(g,{})},{children:"Meta 2",icon:e.jsx(w,{})},{children:"Meta 3",icon:e.jsx(B,{})}]}},o={name:"Card persona",args:{title:"Hubert Bruls",text:"Burgemeester",image:"https://picsum.photos/640/360/",image_alt:"Image description"}},c={name:"Card no image",args:{title:"Ondernemers opgelet",text:"Ondernemers en bedrijven uit Nijmegen opgelet!",image:"",image_alt:"",date:"7 februari 2024"}};var j,v,_;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Card',
  args: {
    title: 'Ondernemers opgelet',
    text: 'Ondernemers en bedrijven uit Nijmegen opgelet!',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    date: '7 februari 2024',
    meta: ([{
      children: 'Meta 1',
      icon: <IconCalendarEvent />
    }, {
      children: 'Meta 2',
      icon: <IconClock />
    }, {
      children: 'Meta 3',
      icon: <IconMapPin />
    }] as Array<{
      children: string;
      icon: any;
    }>)
  }
}`,...(_=(v=r.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var x,b,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Card news',
  args: {
    title: 'Ondernemers opgelet',
    text: 'Ondernemers en bedrijven uit Nijmegen opgelet!',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    date: '7 februari 2024'
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var I,M,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Card event',
  args: {
    title: 'Bevrijdingsdag 2025',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    meta: ([{
      children: 'Meta 1',
      icon: <IconCalendarEvent />
    }, {
      children: 'Meta 2',
      icon: <IconClock />
    }, {
      children: 'Meta 3',
      icon: <IconMapPin />
    }] as Array<{
      children: string;
      icon: any;
    }>)
  }
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var C,O,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Card persona',
  args: {
    title: 'Hubert Bruls',
    text: 'Burgemeester',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description'
  }
}`,...(S=(O=o.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var V,k,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Card no image',
  args: {
    title: 'Ondernemers opgelet',
    text: 'Ondernemers en bedrijven uit Nijmegen opgelet!',
    image: '',
    image_alt: '',
    date: '7 februari 2024'
  }
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const W=["Default","News","Event","Persona","NoImage"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Event:i,News:s,NoImage:c,Persona:o,__namedExportsOrder:W,default:F},Symbol.toStringTag,{value:"Module"}));export{$ as C,r as D,i as E,c as N,o as P};
