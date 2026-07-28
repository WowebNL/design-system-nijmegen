import{j as e}from"./jsx-runtime-CKrituN3.js";import"./index-S9DfXEnO.js";import{s as x,r as b,p as f}from"./server.browser-rAMDWieH.js";/* empty css                  */import{c as y,P as j}from"./index-DP2ZV-sn.js";import{B as s}from"./index-7bwtWdbn.js";const k={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},children:{name:"Buttons",defaultValue:""}},i=({title:r="",text:t="",children:o})=>e.jsxs("div",{className:"nijmegen-action-card",children:[e.jsxs("div",{className:"nijmegen-action-card__content",children:[e.jsx(y,{children:r}),e.jsx(j,{children:t})]}),e.jsx("p",{role:"group",className:"utrecht-button-group",children:o})]});try{i.displayName="ActioncardStory",i.__docgenInfo={description:"",displayName:"ActioncardStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Components/Action Card/Html Implementation",id:"css-action-card",component:i,argTypes:k,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(r,t)=>{var c,l;const o=typeof t.component=="function"?t.component:typeof((c=t.component)==null?void 0:c.render)=="function"?(l=t.component)==null?void 0:l.render:null;return o?x.format(b(o(t.args)),{parser:"babel",plugins:[f]}):r}}}}},n={args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",children:[e.jsx(s,{appearance:"primary-action-button",children:"Text"},"1"),e.jsx(s,{appearance:"secondary-action-button",children:"Text"},"2")]}},a={args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",children:[e.jsxs("button",{className:"utrecht-button utrecht-button--primary-action",type:"button",iconbeginning:"Tabler example",children:["Afspraak maken",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"tabler-icon tabler-icon-external-link ",children:[e.jsx("path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"}),e.jsx("path",{d:"M11 13l9 -9"}),e.jsx("path",{d:"M15 4h5v5"})]})]}),e.jsx(s,{appearance:"secondary-action-button",children:"Terug"},"2")]}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    children: [<Button key="1" appearance="primary-action-button">
        Text
      </Button>, <Button key="2" appearance="secondary-action-button">
        Text
      </Button>]
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,h,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    children: [<button className="utrecht-button utrecht-button--primary-action" type="button" iconbeginning="Tabler example">
        Afspraak maken
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link ">
          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
          <path d="M11 13l9 -9"></path>
          <path d="M15 4h5v5"></path>
        </svg>
      </button>, <Button key="2" appearance="secondary-action-button">
        Terug
      </Button>]
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const _=["Default","Icon"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Icon:a,__namedExportsOrder:_,default:v},Symbol.toStringTag,{value:"Module"}));export{N as A,n as D,a as I};
