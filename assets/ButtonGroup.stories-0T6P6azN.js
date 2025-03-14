import{j as r}from"./jsx-runtime-CKrituN3.js";import{B as f,a as b,I as B}from"./_ButtonGroup-CXvEQubb.js";import{B as t}from"./index.esm-pKPiTpqL.js";import{s as k,r as y,p as x}from"./server.browser-rAMDWieH.js";const j={title:"Components/Button Group/Html Implementation",id:"css-button-group",component:f,argTypes:b,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(g,n)=>{var s,p;const o=typeof n.component=="function"?n.component:typeof((s=n.component)==null?void 0:s.render)=="function"?(p=n.component)==null?void 0:p.render:null;return o?k.format(y(o(n.args)),{parser:"babel",plugins:[x]}):g}}}}},e={args:{children:[r.jsx(t,{appearance:"primary-action-button",children:"Opslaan en doorgaan"},"1"),r.jsx(t,{appearance:"secondary-action-button",children:"Terug"},"2")]}},a={args:{children:[r.jsxs(t,{appearance:"primary-action-button",iconBeginning:"Tabler example",children:["Afspraak maken",r.jsx(B,{stroke:2})]},"1"),r.jsx(t,{appearance:"subtle-button",children:"Annuleren"},"2")]}};var c,u,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: [<Button key="1" appearance="primary-action-button">
        Opslaan en doorgaan
      </Button>, <Button key="2" appearance="secondary-action-button">
        Terug
      </Button>]
  }
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: [<Button key="1" appearance="primary-action-button" iconBeginning="Tabler example">
        Afspraak maken
        <IconExternalLink stroke={2} />
      </Button>, <Button key="2" appearance="subtle-button">
        Annuleren
      </Button>]
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const h=["Default","DefaultVariant"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:e,DefaultVariant:a,__namedExportsOrder:h,default:j},Symbol.toStringTag,{value:"Module"}));export{A as B};
