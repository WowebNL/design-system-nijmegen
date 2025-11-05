var f=(a,n,t)=>{if(!n.has(a))throw TypeError("Cannot "+t)};var p=(a,n,t)=>{if(n.has(a))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(a):n.set(a,t)};var h=(a,n,t)=>(f(a,n,"access private method"),t);import{j as o}from"./jsx-runtime-CKrituN3.js";/* empty css                  *//* empty css              */import{c as m}from"./clsx-B-dksMZM.js";import{I as _,a as j}from"./IconX-Dxo-hgpO.js";(function(){var i,u;function a(c,d){d===void 0&&(d={});var l=d.insertAt;if(!(!c||typeof document>"u")){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",l==="top"&&e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.styleSheet?r.styleSheet.cssText=c:r.appendChild(document.createTextNode(c))}}var n=`/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/* stylelint-disable-next-line block-no-empty */
/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/* stylelint-disable-next-line block-no-empty */
/* TODO: Enable ordering properties when the plugin supports logical CSS properties
 * https://github.com/hudochenkov/stylelint-order/pull/162 */
/* stylelint-disable order/properties-alphabetical-order */
.nijmegen-search {
  display: flex;
  gap: var(--nijmegen-search-column-gap);
  width: 100%; /* stylelint-disable-line property-disallowed-list */
}

.nijmegen-search__input-holder {
  flex: 1;
  max-inline-size: var(--nijmegen-search-max-inline-size);
  position: relative;
}

.nijmegen-search__search-button.nijmegen-search__search-button--dark {
  border-color: var(--nijmegen-search-button-border-color) !important;
}
@media (width < 576px) {
  .nijmegen-search__search-button svg {
    display: none;
  }
}

.nijmegen-search__clear-button {
  align-items: center;
  aspect-ratio: 1/1;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 100%; /* stylelint-disable-line property-disallowed-list */
  justify-content: center;
  position: absolute;
  right: 0; /* stylelint-disable-line property-disallowed-list */
  top: 0; /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-search__clear-button.nijmegen-search__clear-button--hide {
  display: none;
}
.nijmegen-search__clear-button svg {
  stroke: var(--nijmegen-interaction-color);
}

.nijmegen-search__input {
  background-color: var(--nijmegen-search-background-color);
  border-block-end-width: var(--nijmegen-search-border-block-end-width);
  border-color: var(--nijmegen-search-border-color);
  border-radius: var(--nijmegen-search-input-border-radius);
  border-width: var(--nijmegen-search-border-width);
  box-sizing: border-box;
  color: var(--nijmegen-search-color);
  font-family: var(--nijmegen-search-input-font-family);
  font-size: var(--nijmegen-search-input-font-size);
  font-weight: var(--nijmegen-search-input-font-weight);
  line-height: var(--nijmegen-search-input-line-height);
  min-block-size: var(--nijmegen-search-min-block-size);
  padding-block-end: var(--nijmegen-search-padding-block-end);
  padding-block-start: var(--nijmegen-search-padding-block-start);
  padding-inline-end: var(--nijmegen-search-padding-inline-end);
  padding-inline-start: var(--nijmegen-search-padding-inline-start);
  width: 100%; /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-search__input:hover, .nijmegen-search__input.nijmegen-search__input--hover {
  background-color: var(--nijmegen-search-hover-background-color);
  border-color: var(--nijmegen-search-hover-border-color);
  color: var(--nijmegen-search-hover-color);
}
.nijmegen-search__input:focus, .nijmegen-search__input.nijmegen-search__input--focus {
  background-color: var(--nijmegen-search-focus-background-color);
  border-color: var(--nijmegen-search-focus-border-color);
  color: var(--nijmegen-search-focus-color);
}
.nijmegen-search__input:focus-visible, .nijmegen-search__input.nijmegen-search__input--focus {
  /* - The browser default focus ring should apply when these CSS custom properties are not set.
   * - Make the \`box-shadow\` value available, so components that have their own \`box-shadow\`
   *   can combine it with the focus ring box shadow.
   */
  --_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);
  box-shadow: var(--_utrecht-focus-ring-box-shadow);
  outline-color: var(--utrecht-focus-outline-color, revert);
  outline-offset: var(--utrecht-focus-outline-offset, revert);
  outline-style: var(--utrecht-focus-outline-style, revert);
  outline-width: var(--utrecht-focus-outline-width, revert);
  z-index: 1;
  background-color: var(--nijmegen-search-focus-background-color);
  border-color: var(--nijmegen-search-focus-border-color);
  color: var(--nijmegen-search-focus-color);
}
.nijmegen-search__input:read-only, .nijmegen-search__input.nijmegen-search__input-read-only {
  background-color: var(--nijmegen-search-read-only-background-color);
  border-color: var(--nijmegen-search-read-only-border-color);
  color: var(--nijmegen-search-read-only-color);
}
.nijmegen-search__input.nijmegen-search__input--disabled {
  background-color: var(--nijmegen-search-disabled-background-color);
  border-color: var(--nijmegen-search-disabled-border-color);
  color: var(--nijmegen-search-disabled-color);
  cursor: var(--utrecht-action-disabled-cursor, not-allowed);
}
.nijmegen-search__input::placeholder {
  color: var(--nijmegen-search-placeholder-color);
}`;a(n);var t=`<form class="nijmegen-search" method="GET" action="" role="search">
  <slot></slot>
</form>
`;class s extends HTMLElement{constructor(){super();p(this,i);const l=document.createElement("template");l.innerHTML=t;const e=this.attachShadow({mode:"open"});e.appendChild(l.content.cloneNode(!0));const r=new CSSStyleSheet;r.replaceSync(n),e.adoptedStyleSheets=[r]}connectedCallback(){Array.from(this.children).forEach(l=>{const e=l.querySelector(".nijmegen-search__input"),r=l.querySelector(".nijmegen-search__clear-button");e&&r&&(e.addEventListener("input",()=>{h(this,i,u).call(this,e,r)}),e.addEventListener("keyup",()=>{h(this,i,u).call(this,e,r)}),r.addEventListener("click",()=>{e.value="",h(this,i,u).call(this,e,r),e.focus()}))})}}i=new WeakSet,u=function(l,e){l.value.trim().length>0?e.classList.remove("nijmegen-search__clear-button--hide"):e.classList.add("nijmegen-search__clear-button--hide")},customElements.define("nijmegen-search",s)})();const C={placeholder:{name:"Placeholder",control:"text"},disabled:{name:"Disabled",control:"boolean"},readOnly:{name:"Read only",control:"boolean"},icon:{name:"Search icon",control:"boolean",table:{disable:!0}},dark:{name:"Dark mode",control:"boolean"}},b=({icon:a=!0,disabled:n=!1,readOnly:t=!1,dark:s=!1,placeholder:i="Zoeken"})=>o.jsxs("nijmegen-search",{children:[o.jsxs("div",{className:"nijmegen-search__input-holder",children:[o.jsx("input",{className:m("nijmegen-search__input",n&&"nijmegen-search__input--disabled"),disabled:n,readOnly:t,id:"search",type:"text",placeholder:i,"aria-controls":"autocomplete-results","aria-autocomplete":"both","aria-label":"Zoekveld","aria-describedby":"autocomplete-help-text"}),o.jsx("button",{className:"nijmegen-search__clear-button nijmegen-search__clear-button--hide","aria-label":"Invoer wissen",title:"Invoer wissen",tabIndex:"-1",children:o.jsx(_,{})})]}),o.jsxs("button",{className:m("utrecht-button utrecht-button--primary-action nijmegen-search__search-button",s&&"nijmegen-search__search-button--dark"),"aria-label":"Zoekknop",children:[a&&o.jsx(j,{})," Zoeken"]})]}),g=({icon:a=!0,disabled:n=!1,readOnly:t=!1,dark:s=!1,placeholder:i="Zoeken"})=>o.jsxs("form",{className:"nijmegen-search",method:"GET",action:"",role:"search",children:[o.jsxs("div",{className:"nijmegen-search__input-holder",children:[o.jsx("input",{className:m("nijmegen-search__input",n&&"nijmegen-search__input--disabled"),disabled:n,readOnly:t,id:"search",type:"text",placeholder:i,"aria-controls":"autocomplete-results","aria-autocomplete":"both","aria-label":"Zoekveld","aria-describedby":"autocomplete-help-text"}),o.jsx("button",{className:"nijmegen-search__clear-button nijmegen-search__clear-button--hide","aria-label":"Invoer wissen",title:"Invoer wissen",tabIndex:"-1",children:o.jsx(_,{})})]}),o.jsxs("button",{className:m("utrecht-button utrecht-button--primary-action nijmegen-search__search-button",s&&"nijmegen-search__search-button--dark"),"aria-label":"Zoekknop",children:[a&&o.jsx(j,{})," Zoeken"]})]});try{b.displayName="SearchStoryWebComponent",b.__docgenInfo={description:"",displayName:"SearchStoryWebComponent",props:{icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Zoeken"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}try{g.displayName="SearchStory",g.__docgenInfo={description:"",displayName:"SearchStory",props:{icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Zoeken"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{g as S,C as a,b};
