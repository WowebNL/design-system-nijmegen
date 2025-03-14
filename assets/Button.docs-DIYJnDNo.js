import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as s,P as r,b as m,e as a}from"./chunk-HLWAVYOI-ChkRPt4t.js";import{B as c}from"./Button.stories-DB-eeu9z.js";import{useMDXComponents as i}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-pIBXBrZ5.js";import"../sb-preview/runtime.js";import"./react-18-Bym-zv4b.js";import"./extends-CCbyfPlC.js";import"./index-VaGq4-f5.js";import"./index.esm-pKPiTpqL.js";/* empty css              */import"./createReactComponent-D_5DJZVZ.js";function o(n){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2"},i(),n.components);return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h1,{id:"button-component-react-implementation",children:"Button Component React implementation"}),`
`,e.jsxs(t.p,{children:["This documentation page shows the implementation of the Button component in ",e.jsx(t.a,{href:"https://react.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"}),"."]}),`
`,e.jsx(t.h2,{id:"component-suported-arguments",children:"Component suported arguments"}),`
`,e.jsx(r,{}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"example-implementation",children:"Example implementation"}),`
`,e.jsx(a,{language:"jsx",code:`
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
`}),`
`,e.jsx(t.h2,{id:"icon-use",children:"Icon use"}),`
`,e.jsxs(t.p,{children:["Please read the ",e.jsx(t.a,{href:"/?path=/docs/foundations-icons-developer-documentation--docs",children:"Icon developer documentation"})," if you want to use icons inside the buttons."]})]})}function v(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{v as default};
