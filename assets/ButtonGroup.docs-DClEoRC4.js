import{j as t}from"./jsx-runtime-CKrituN3.js";import{M as s,P as i,b as a,e as m}from"./chunk-HLWAVYOI-ChkRPt4t.js";import{B as c}from"./ButtonGroup.stories-DBMUWi2l.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-pIBXBrZ5.js";import"../sb-preview/runtime.js";import"./react-18-Bym-zv4b.js";import"./extends-CCbyfPlC.js";import"./index-VaGq4-f5.js";import"./_ButtonGroup-CXvEQubb.js";import"./createReactComponent-D_5DJZVZ.js";import"./index.esm-pKPiTpqL.js";function o(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2"},r(),e.components);return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(s,{of:c}),`
`,t.jsx(n.h1,{id:"button-component-react-implementation",children:"Button Component React implementation"}),`
`,t.jsxs(n.p,{children:["This documentation page shows the implementation of the Button component in ",t.jsx(n.a,{href:"https://react.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"}),"."]}),`
`,t.jsx(n.h2,{id:"component-suported-arguments",children:"Component suported arguments"}),`
`,t.jsx(i,{}),`
`,t.jsx(a,{}),`
`,t.jsx(n.h2,{id:"example-implementation",children:"Example implementation"}),`
`,t.jsx(m,{language:"jsx",code:`
// global
import '@gemeentenijmegen/design-tokens/dist/index.css';
import '@gemeentenijmegen/font/dist/index.css';

// specific for ButtonGroup component
import { ButtonGroup, Button } from "@utrecht/component-library-react";
import '@utrecht/components/button/css/index.scss';
import '@utrecht/components/button-group/css/index.scss';

export const MyPage = () => (
    <div className="nijmegen-theme">
      <ButtonGroup>
        <Button appearance="primary-action-button">Opslaan en doorgaan</Button>
        <Button appearance="secondary-action-button">Terug</Button>
      </ButtonGroup>
    </div>
);
`}),`
`,t.jsx(n.h2,{id:"icon-use",children:"Icon use"}),`
`,t.jsxs(n.p,{children:["Please read the ",t.jsx(n.a,{href:"/?path=/docs/foundations-icons-developer-documentation--docs",children:"Icon developer documentation"})," if you want to use icons inside the buttons."]})]})}function v(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{v as default};
