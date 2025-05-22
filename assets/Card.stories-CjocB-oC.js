import{j as e}from"./jsx-runtime-CKrituN3.js";import{s as V,r as k,p as S}from"./server.browser-rAMDWieH.js";import{e as E,P}from"./index-DaF7JW6C.js";/* empty css                  */import{c as B}from"./clsx-B-dksMZM.js";import{I as q}from"./IconArrowRight-pMXm72se.js";import{I as d}from"./IconCalendarEvent-3BPlFUi5.js";import{c as I}from"./createReactComponent-D_5DJZVZ.js";/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var M=I("outline","clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var C=I("outline","map-pin","IconMapPin",[["path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",key:"svg-1"}]]);const O={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},image:{name:"Image",control:"text",table:{defaultValue:""}},image_alt:{name:"Image alt",control:"text",table:{defaultValue:""}},date:{name:"Date",control:"text",table:{defaultValue:""}},meta:{name:"Meta",control:{type:"object"},table:{defaultValue:""}},state:{name:"State",description:"State of the card, in the example code a state class is set for simulating the state appearance. When implementing this component it is not needed to set a state class, the state will be set by the browser and the styles will automatic apply.",control:{type:"select"},options:["default","active","hover","focus","focus-visible"]}},m=({title:o="",text:a="",meta:n=[{children:"",icon:null}],image:t="",image_alt:c="",date:p="",state:l=""})=>e.jsxs("div",{className:B("nijmegen-card",{"nijmegen-card--active":l==="active","nijmegen-card--hover":l==="hover","nijmegen-card--focus":l==="focus","nijmegen-card--focus-visible":l==="focus-visible"}),children:[e.jsxs("div",{className:"nijmegen-card__inner",children:[e.jsxs("div",{className:"nijmegen-card__content",children:[e.jsx(E,{children:e.jsx("a",{className:"nijmegen-card__link",href:"/",children:o})}),a&&e.jsx(P,{children:a})]}),n.length>0&&e.jsx("ul",{className:"nijmegen-card__meta",children:n.map((u,N)=>e.jsxs("li",{className:"nijmegen-card__meta-item",children:[u.icon,u.children]},N))})]}),t&&e.jsx("figure",{className:"nijmegen-card__figure",children:e.jsx("img",{loading:"lazy",src:t,alt:c})}),e.jsxs("div",{className:"nijmegen-card__footer",children:[e.jsx(q,{}),p&&e.jsxs("div",{className:"nijmegen-card__meta-item",children:[e.jsx(d,{}),e.jsx("span",{children:p})]})]})]});try{m.displayName="CardStory",m.__docgenInfo={description:"",displayName:"CardStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},meta:{defaultValue:{value:"[{ children: '', icon: null as any }]"},description:"",name:"meta",required:!1,type:{name:"{ children: string; icon: any; }[]"}},image:{defaultValue:{value:""},description:"",name:"image",required:!1,type:{name:"string"}},image_alt:{defaultValue:{value:""},description:"",name:"image_alt",required:!1,type:{name:"string"}},date:{defaultValue:{value:""},description:"",name:"date",required:!1,type:{name:"string"}},state:{defaultValue:{value:""},description:"",name:"state",required:!1,type:{name:"string"}}}}}catch{}const w={title:"Components/Card/Html Implementation",id:"html-card",argTypes:O,component:m,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(o,a)=>{var t,c;const n=typeof a.component=="function"?a.component:typeof((t=a.component)==null?void 0:t.render)=="function"?(c=a.component)==null?void 0:c.render:null;return n?V.format(k(n(a.args)),{parser:"babel",plugins:[S]}):o}}}}},r={name:"Card news",args:{title:"Ondernemers opgelet",text:"Ondernemers en bedrijven uit Nijmegen opgelet! ",image:"https://picsum.photos/640/360/",image_alt:"Image description",date:"7 februari 2024",meta:[{children:"Meta 1",icon:e.jsx(d,{})},{children:"Meta 2",icon:e.jsx(M,{})},{children:"Meta 3",icon:e.jsx(C,{})}]}},i={name:"Card event",args:{title:"Bevrijdingsdag 2025",image:"https://picsum.photos/640/360/",image_alt:"Image description",meta:[{children:"Meta 1",icon:e.jsx(d,{})},{children:"Meta 2",icon:e.jsx(M,{})},{children:"Meta 3",icon:e.jsx(C,{})}]}},s={name:"Card persona",args:{title:"Hubert Bruls",text:"Burgemeester",image:"https://picsum.photos/640/360/",image_alt:"Image description"}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Card news',
  args: {
    title: 'Ondernemers opgelet',
    text: 'Ondernemers en bedrijven uit Nijmegen opgelet! ',
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
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,v,_;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Card event',
  args: {
    title: 'Bevrijdingsdag 2025',
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
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var x,y,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Card persona',
  args: {
    title: 'Hubert Bruls',
    text: 'Burgemeester',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const T=["Default","Event","Persona"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Event:i,Persona:s,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{J as C,r as D,i as E,s as P};
