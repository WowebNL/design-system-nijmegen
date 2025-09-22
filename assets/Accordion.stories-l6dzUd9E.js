import{j as a}from"./jsx-runtime-CKrituN3.js";import{A as b}from"./index-CdovAc_6.js";import{I as x}from"./IconChevronDown-xLOYuVOv.js";const g={label:{name:"label",control:"text",table:{defaultValue:""}},body:{name:"body",control:"text",table:{defaultValue:""}},expanded:{name:"expanded",control:"boolean",table:{defaultValue:""}},icon:{name:"icon",table:{disable:!0}}},q=[{label:"Title 1",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,expanded:!1},{label:"Title 2",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,expanded:!1},{label:"Title 3",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,expanded:!1}],f=({expanded:c,label:l,body:m,icon:u,sections:p})=>a.jsx(b,{icon:u,sections:p||[{expanded:c,label:l,body:m}]}),y={title:"Components/Accordion/React Implementation",id:"react-accordion",argTypes:g,args:{label:"",body:"",expanded:!1,icon:a.jsx("span",{className:"utrecht-icon",children:a.jsx(x,{})})},parameters:{status:{type:"BETA"}},render:f},e={args:{label:"Title",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,expanded:!1}},o={args:{sections:q,expanded:!1},name:"Accordion with sections"};var i,t,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    body: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.\`,
    expanded: false
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var s,r,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sections: accordionData,
    expanded: false
  },
  name: 'Accordion with sections'
}`,...(d=(r=o.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const A=["Default","AccordionWithSections"],j=Object.freeze(Object.defineProperty({__proto__:null,AccordionWithSections:o,Default:e,__namedExportsOrder:A,default:y},Symbol.toStringTag,{value:"Module"}));export{j as A};
