import{s as k,r as P,p as V}from"./server.browser-rAMDWieH.js";import{j as p}from"./jsx-runtime-CKrituN3.js";import{c as w,P as I}from"./index-Cr_ziExY.js";import{c as E}from"./clsx-B-dksMZM.js";const H={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},type:{description:"Type",control:{type:"select"},options:["default","info","error","ok","warning"],table:{defaultValue:"default"}}},l=({title:i="",text:t="",type:r="default"})=>{const c=E("utrecht-spotlight-section",{"utrecht-spotlight-section--info":r==="info","utrecht-spotlight-section--error":r==="error","utrecht-spotlight-section--ok":r==="ok","utrecht-spotlight-section--warning":r==="warning"});return p.jsxs("div",{className:c,children:[p.jsx(w,{children:i}),p.jsx(I,{children:t})]})};try{l.displayName="NoteStory",l.__docgenInfo={description:"",displayName:"NoteStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Components/Note/Html Implementation",id:"html-note",argTypes:H,component:l,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(i,t)=>{var c,u;const r=typeof t.component=="function"?t.component:typeof((c=t.component)==null?void 0:c.render)=="function"?(u=t.component)==null?void 0:u.render:null;return r?k.format(P(r(t.args)),{parser:"babel",plugins:[V]}):i}}}}},e={name:"Note",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"}},a={args:{...e.args,type:"info"}},o={args:{...e.args,type:"error"}},s={args:{...e.args,type:"ok"}},n={args:{...e.args,type:"warning"}};var d,m,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Note',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  }
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,y,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'info'
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var _,x,N;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'error'
  }
}`,...(N=(x=o.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var S,b,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'ok'
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,D,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'warning'
  }
}`,...(T=(D=n.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const O=["Default","Info","Negative","Positive","Warning"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Info:a,Negative:o,Positive:s,Warning:n,__namedExportsOrder:O,default:q},Symbol.toStringTag,{value:"Module"}));export{e as D,a as I,o as N,s as P,n as W,z as a};
