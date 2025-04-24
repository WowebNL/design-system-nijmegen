import{j as e}from"./jsx-runtime-CKrituN3.js";import{O as l,b as t}from"./index-B96GDcmv.js";import{a as o}from"./_OrderedList-C6rKkPeO.js";const c={title:"Components/Ordered list/React Implementation",id:"react-ordered-list",component:l,argTypes:o,args:{children:""},parameters:{status:{type:"BETA"}}},r={args:{children:[e.jsx(t,{children:"List item 1"},"li-1"),e.jsx(t,{children:"List item 2"},"li-2"),e.jsx(t,{children:"List item 3"},"li-3")]}},s={args:{children:[e.jsx(t,{children:"List item 1"},"li-4"),e.jsxs(t,{children:["List item 2",e.jsxs(l,{children:[e.jsx(t,{children:"Nested List item 1"}),e.jsx(t,{children:"Nested List item 2"})]})]},"li-5"),e.jsx(t,{children:"List item 3"},"li-6")]}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-1">List item 1</OrderedListItem>, <OrderedListItem key="li-2">List item 2</OrderedListItem>, <OrderedListItem key="li-3">List item 3</OrderedListItem>]
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var n,a,L;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-4">List item 1</OrderedListItem>, <OrderedListItem key="li-5">
        List item 2
        <OrderedList>
          <OrderedListItem>Nested List item 1</OrderedListItem>
          <OrderedListItem>Nested List item 2</OrderedListItem>
        </OrderedList>
      </OrderedListItem>, <OrderedListItem key="li-6">List item 3</OrderedListItem>]
  }
}`,...(L=(a=s.parameters)==null?void 0:a.docs)==null?void 0:L.source}}};const O=["DefaultOrderedList","NestedOrderedList"],u=Object.freeze(Object.defineProperty({__proto__:null,DefaultOrderedList:r,NestedOrderedList:s,__namedExportsOrder:O,default:c},Symbol.toStringTag,{value:"Module"}));export{u as O};
