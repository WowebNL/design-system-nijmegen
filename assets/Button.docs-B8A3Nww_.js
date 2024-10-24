import{j as t}from"./jsx-runtime-CKrituN3.js";import{M as i,P as s,b as m,e as a}from"./chunk-HLWAVYOI-BfZZA4QT.js";import{b as p}from"./Button.stories-CUdl7oCs.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CHoXM8U8.js";import"../sb-preview/runtime.js";import"./react-18-Bym-zv4b.js";import"./extends-CCbyfPlC.js";import"./index-VaGq4-f5.js";/* empty css              */function o(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2"},r(),e.components);return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(i,{of:p}),`
`,t.jsx(n.h1,{id:"button-component-react-implementation",children:"Button Component React implementation"}),`
`,t.jsxs(n.p,{children:["This documentation page shows the implementation of the Button component in ",t.jsx(n.a,{href:"https://react.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"}),"."]}),`
`,t.jsx(n.h2,{id:"component-suported-arguments",children:"Component suported arguments"}),`
`,t.jsx(s,{}),`
`,t.jsx(m,{}),`
`,t.jsx(n.h2,{id:"example-implementation",children:"Example implementation"}),`
`,t.jsx(a,{language:"jsx",code:`
// global
import '@gemeentenijmegen/design-tokens/dist/index.css';
import '@gemeentenijmegen/font/dist/index.css';

// specific for Button component
import { Button } from "@utrecht/component-library-react";
import '@utrecht/components/button/css/index.scss';

export const MyPage = () => (
    <div className="nijmegen-theme">
      <Button appearance="primary-action-button">Label</Button>
    </div>
);
`})]})}function C(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{C as default};
