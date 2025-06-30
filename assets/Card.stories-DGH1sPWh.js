import{j as e}from"./jsx-runtime-CKrituN3.js";import{s as E,r as P,p as B}from"./server.browser-rAMDWieH.js";import{H as q,P as w}from"./index-B0KGBP-1.js";/* empty css                  */import{c as T}from"./clsx-B-dksMZM.js";import{I as H}from"./IconArrowRight-pMXm72se.js";import{I as p}from"./IconCalendarEvent-3BPlFUi5.js";import{c as V}from"./createReactComponent-D_5DJZVZ.js";/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var S=V("outline","clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var k=V("outline","map-pin","IconMapPin",[["path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",key:"svg-1"}]]);const A={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},image:{name:"Image",control:"text",table:{defaultValue:""}},image_alt:{name:"Image alt",control:"text",table:{defaultValue:""}},date:{name:"Date",control:"text",table:{defaultValue:""}},meta:{name:"Meta",control:{type:"object"},table:{defaultValue:""}},state:{name:"State",description:"State of the card, in the example code a state class is set for simulating the state appearance. When implementing this component it is not needed to set a state class, the state will be set by the browser and the styles will automatic apply.",control:{type:"select"},options:["default","active","hover","focus","focus-visible"]}},d=({title:c="",text:a="",meta:n=[{children:"",icon:null}],image:t="",image_alt:l="",date:g="",state:m=""})=>e.jsxs("div",{className:T("nijmegen-card",{"nijmegen-card--active":m==="active","nijmegen-card--hover":m==="hover","nijmegen-card--focus":m==="focus","nijmegen-card--focus-visible":m==="focus-visible"}),children:[e.jsxs("div",{className:"nijmegen-card__inner",children:[e.jsxs("div",{className:"nijmegen-card__content",children:[e.jsx(q,{children:e.jsx("a",{className:"nijmegen-card__link",href:"/",children:c})}),a&&e.jsx(w,{children:a})]}),n.length>0&&e.jsx("ul",{className:"nijmegen-card__meta",children:n.map((u,O)=>e.jsxs("li",{className:"nijmegen-card__meta-item",children:[u.icon,u.children]},O))})]}),t&&e.jsx("figure",{className:"nijmegen-card__figure",children:e.jsx("img",{loading:"lazy",src:t,alt:l})}),e.jsxs("div",{className:"nijmegen-card__footer",children:[e.jsx(H,{}),g&&e.jsxs("div",{className:"nijmegen-card__meta-item",children:[e.jsx(p,{}),e.jsx("span",{children:g})]})]})]});try{d.displayName="CardStory",d.__docgenInfo={description:"",displayName:"CardStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},meta:{defaultValue:{value:"[{ children: '', icon: null as any }]"},description:"",name:"meta",required:!1,type:{name:"{ children: string; icon: any; }[]"}},image:{defaultValue:{value:""},description:"",name:"image",required:!1,type:{name:"string"}},image_alt:{defaultValue:{value:""},description:"",name:"image_alt",required:!1,type:{name:"string"}},date:{defaultValue:{value:""},description:"",name:"date",required:!1,type:{name:"string"}},state:{defaultValue:{value:""},description:"",name:"state",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Components/Card/Html Implementation",id:"html-card",argTypes:A,component:d,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(c,a)=>{var t,l;const n=typeof a.component=="function"?a.component:typeof((t=a.component)==null?void 0:t.render)=="function"?(l=a.component)==null?void 0:l.render:null;return n?E.format(P(n(a.args)),{parser:"babel",plugins:[B]}):c}}}}},r={name:"Card news",args:{title:"Ondernemers opgelet",text:"Ondernemers en bedrijven uit Nijmegen opgelet!",image:"https://picsum.photos/640/360/",image_alt:"Image description",date:"7 februari 2024",meta:[{children:"Meta 1",icon:e.jsx(p,{})},{children:"Meta 2",icon:e.jsx(S,{})},{children:"Meta 3",icon:e.jsx(k,{})}]}},i={name:"Card event",args:{title:"Bevrijdingsdag 2025",image:"https://picsum.photos/640/360/",image_alt:"Image description",meta:[{children:"Meta 1",icon:e.jsx(p,{})},{children:"Meta 2",icon:e.jsx(S,{})},{children:"Meta 3",icon:e.jsx(k,{})}]}},s={name:"Card persona",args:{title:"Hubert Bruls",text:"Burgemeester",image:"https://picsum.photos/640/360/",image_alt:"Image description"}},o={name:"Card no image",args:{title:"Ondernemers opgelet",text:"Ondernemers en bedrijven uit Nijmegen opgelet!",image:"",image_alt:""}};var h,f,j;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Card news',
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
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,_,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(_=i.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var y,b,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Card persona',
  args: {
    title: 'Hubert Bruls',
    text: 'Burgemeester',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description'
  }
}`,...(I=(b=s.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var M,C,N;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Card no image',
  args: {
    title: 'Ondernemers opgelet',
    text: 'Ondernemers en bedrijven uit Nijmegen opgelet!',
    image: '',
    image_alt: ''
  }
}`,...(N=(C=o.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const z=["Default","Event","Persona","NoImage"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Event:i,NoImage:o,Persona:s,__namedExportsOrder:z,default:D},Symbol.toStringTag,{value:"Module"}));export{U as C,r as D,i as E,o as N,s as P};
