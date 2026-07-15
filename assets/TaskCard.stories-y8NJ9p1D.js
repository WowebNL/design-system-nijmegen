import{s as b,r as W,p as D}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";/* empty css                  *//* empty css              */import{I as S}from"./IconAlertTriangle-C8yEghIP.js";const N={title:{name:"Title",control:"text"},link:{name:"Link Text",control:"text"},href:{name:"URL",control:"text"},date:{name:"Date",control:"text"},dateTime:{name:"DateTime",control:"text"},dateWarning:{name:"Date Warning",control:"boolean"}},c=({title:i="",link:a="",href:o="",date:l="",dateTime:d="",dateWarning:m=!1})=>e.jsxs("a",{className:"nijmegen-task-card",href:o,children:[e.jsx("div",{className:"nijmegen-task-card__content",children:e.jsx("strong",{children:i})}),e.jsxs("div",{className:"nijmegen-task-card__context",children:[e.jsx("div",{className:"nijmegen-task-card__details",children:e.jsxs("div",{className:`nijmegen-task-card__date ${m?"nijmegen-task-card__date--warning":""}`,children:[m&&e.jsx(S,{}),e.jsx("time",{dateTime:d,children:l})]})}),a&&e.jsx("div",{className:"nijmegen-task-card__actions",children:e.jsx("span",{className:"utrecht-button utrecht-button--primary-action",children:a})})]})]});try{c.displayName="TaskCardStory",c.__docgenInfo={description:"",displayName:"TaskCardStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:{value:""},description:"",name:"link",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},date:{defaultValue:{value:""},description:"",name:"date",required:!1,type:{name:"string"}},dateTime:{defaultValue:{value:""},description:"",name:"dateTime",required:!1,type:{name:"string"}},dateWarning:{defaultValue:{value:"false"},description:"",name:"dateWarning",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"Components/Task card/Html Implementation",id:"html-taskCard",argTypes:N,component:c,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(i,a)=>{var l,d;const o=typeof a.component=="function"?a.component:typeof((l=a.component)==null?void 0:l.render)=="function"?(d=a.component)==null?void 0:d.render:null;return o?b.format(W(o(a.args)),{parser:"babel",plugins:[D]}):i}}}}},t={name:"TaskCard",args:{title:"Task",link:"Text",href:"#example"}},r={name:"With date",args:{title:"Task",link:"Text",href:"#example",date:"29-09-2023"}},n={name:"With date relative",args:{title:"Task",link:"Text",href:"#example",date:"vóór 2 oktober 2023"}},s={name:"With date warning",args:{title:"Task",link:"Text",href:"#example",date:"nog 2 dagen",dateWarning:!0}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'TaskCard',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example'
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,k,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With date',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
    date: '29-09-2023'
  }
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var T,h,_;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With date relative',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
    date: 'vóór 2 oktober 2023'
  }
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var j,v,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With date warning',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
    date: 'nog 2 dagen',
    dateWarning: true
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const V=["Default","Date","DateReletave","DateWarning"],O=Object.freeze(Object.defineProperty({__proto__:null,Date:r,DateReletave:n,DateWarning:s,Default:t,__namedExportsOrder:V,default:q},Symbol.toStringTag,{value:"Module"}));export{t as D,O as T,r as a,n as b,s as c};
