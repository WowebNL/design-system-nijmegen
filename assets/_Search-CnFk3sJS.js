var I=(o,a,s)=>{if(!a.has(o))throw TypeError("Cannot "+s)};var d=(o,a,s)=>{if(a.has(o))throw TypeError("Cannot add the same private member more than once");a instanceof WeakSet?a.add(o):a.set(o,s)};var l=(o,a,s)=>(I(o,a,"access private method"),s);import{j as r}from"./jsx-runtime-CKrituN3.js";/* empty css                  *//* empty css              */import{c as u}from"./clsx-B-dksMZM.js";import{I as N,a as q}from"./IconX-Dxo-hgpO.js";(function(){var c,C,g,E,m,x,b,L,_,T,p,k,j,V;function o(f,v){v===void 0&&(v={});var n=v.insertAt;if(!(!f||typeof document>"u")){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=f:t.appendChild(document.createTextNode(f))}}var a=`/**
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
  gap: var(--nijmegen-search-input-column-gap);
  inline-size: var(--nijmegen-search-input-max-inline-size);
  max-inline-size: 100%;
  position: relative;
}

.nijmegen-search__input-holder {
  flex: 1;
  position: relative;
}

.nijmegen-search__search-button.nijmegen-search__search-button--dark {
  border-color: var(--nijmegen-search-input-button-border-color) !important;
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
  background-color: var(--nijmegen-search-input-background-color);
  border-color: var(--nijmegen-search-input-border-color);
  border-radius: var(--nijmegen-search-input-border-radius);
  border-width: var(--nijmegen-search-input-border-width);
  box-sizing: border-box;
  color: var(--nijmegen-search-input-color);
  font-family: var(--nijmegen-search-input-font-family);
  font-size: var(--nijmegen-search-input-font-size);
  font-weight: var(--nijmegen-search-input-font-weight);
  line-height: var(--nijmegen-search-input-line-height);
  min-block-size: var(--nijmegen-search-input-min-block-size);
  padding-block-end: var(--nijmegen-search-input-padding-block-end);
  padding-block-start: var(--nijmegen-search-input-padding-block-start);
  padding-inline-end: var(--nijmegen-search-input-padding-inline-end);
  padding-inline-start: var(--nijmegen-search-input-padding-inline-start);
  width: 100%; /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-search__input:hover, .nijmegen-search__input.nijmegen-search__input--hover {
  background-color: var(--nijmegen-search-input-hover-background-color);
  border-color: var(--nijmegen-search-input-hover-border-color);
  color: var(--nijmegen-search-input-hover-color);
}
.nijmegen-search__input:focus, .nijmegen-search__input.nijmegen-search__input--focus {
  background-color: var(--nijmegen-search-input-focus-background-color);
  border-color: var(--nijmegen-search-input-focus-border-color);
  color: var(--nijmegen-search-input-focus-color);
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
  background-color: var(--nijmegen-search-input-focus-background-color);
  border-color: var(--nijmegen-search-input-focus-border-color);
  color: var(--nijmegen-search-input-focus-color);
}
.nijmegen-search__input:read-only, .nijmegen-search__input.nijmegen-search__input-read-only {
  background-color: var(--nijmegen-search-input-read-only-background-color);
  border-color: var(--nijmegen-search-input-read-only-border-color);
  color: var(--nijmegen-search-input-read-only-color);
}
.nijmegen-search__input.nijmegen-search__input--disabled {
  background-color: var(--nijmegen-search-input-disabled-background-color);
  border-color: var(--nijmegen-search-input-disabled-border-color);
  color: var(--nijmegen-search-input-disabled-color);
  cursor: var(--utrecht-action-disabled-cursor, not-allowed);
}
.nijmegen-search__input::placeholder {
  color: var(--nijmegen-search-input-placeholder-color);
}

.nijmegen-search__autocomplete-results {
  display: none;
  margin-block-start: var(--nijmegen-search-input-autocomplete-offset, 8px);
  position: absolute;
  top: var(--nijmegen-search-input-min-block-size); /* stylelint-disable-line property-disallowed-list */
  width: 100%; /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-search__autocomplete-results--show-results {
  display: block;
}`;o(a);var s=`<form class="nijmegen-search" method="GET" action="" role="search">
  <slot></slot>
</form>
`;class h extends HTMLElement{constructor(){super();d(this,c);d(this,g);d(this,m);d(this,b);d(this,_);d(this,p);d(this,j);const n=document.createElement("template");n.innerHTML=s;const e=this.attachShadow({mode:"open"});e.appendChild(n.content.cloneNode(!0));const t=new CSSStyleSheet;t.replaceSync(a),e.adoptedStyleSheets=[t]}connectedCallback(){const n=this.querySelector(".nijmegen-search__input"),e=this.querySelector(".nijmegen-search__clear-button"),t=this.querySelector(".nijmegen-listbox__list"),i=this.querySelector(".nijmegen-search__autocomplete-results");l(this,c,C).call(this,n,e),i&&i.classList.contains("nijmegen-search__autocomplete-results--example")&&l(this,g,E).call(this,n,e,t,i)}}c=new WeakSet,C=function(n,e){n&&e&&(n.addEventListener("input",()=>{l(this,m,x).call(this,n,e)}),e.addEventListener("click",()=>{n.value="",l(this,m,x).call(this,n,e),n.focus()}))},g=new WeakSet,E=function(n,e,t,i){n&&e&&t&&i&&(n.addEventListener("input",()=>{n.value.trim().length>=3?l(this,b,L).call(this,n.value,z=>{l(this,_,T).call(this,z,t,i)}):l(this,p,k).call(this,t,i)}),e.addEventListener("click",()=>{l(this,p,k).call(this,t,i)}))},m=new WeakSet,x=function(n,e){n.value.trim().length>0?e.classList.remove("nijmegen-search__clear-button--hide"):e.classList.add("nijmegen-search__clear-button--hide")},b=new WeakSet,L=function(n,e){const t=l(this,j,V).call(this,n),i=[{title:"Finibus "+t,url:"?q=1_"+t},{title:t+" elementum urna",url:"?q=2_"+t}];e(i)},_=new WeakSet,T=function(n,e,t){e.innerHTML=n.map(i=>`<li><a href="${i.url}" class="nijmegen-listbox__item">${i.title}</a></li>`).join(""),t.classList.add("nijmegen-search__autocomplete-results--show-results")},p=new WeakSet,k=function(n,e){n.innerHTML="",e.classList.remove("nijmegen-search__autocomplete-results--show-results")},j=new WeakSet,V=function(n){const e=document.createElement("p");return e.innerText=n,e.innerHTML},customElements.define("nijmegen-search",h)})();const G={placeholder:{name:"Placeholder",control:"text"},disabled:{name:"Disabled",control:"boolean"},readOnly:{name:"Read only",control:"boolean"},icon:{name:"Search icon",control:"boolean",table:{disable:!0}},dark:{name:"Dark mode",control:"boolean"},autocomplete:{name:"Autocomplete",control:"boolean",table:{disable:!0}}},w=({icon:o=!0,disabled:a=!1,readOnly:s=!1,dark:h=!1,autocomplete:c=!1,placeholder:y="Zoeken"})=>r.jsxs("nijmegen-search",{children:[r.jsxs("div",{className:"nijmegen-search__input-holder",children:[r.jsx("input",{className:u("nijmegen-search__input",a&&"nijmegen-search__input--disabled"),disabled:a,readOnly:s,id:"search",type:"text",placeholder:y,"aria-controls":"autocomplete-results","aria-autocomplete":"both","aria-label":"Zoekveld","aria-describedby":"autocomplete-help-text"}),r.jsx("button",{className:"nijmegen-search__clear-button nijmegen-search__clear-button--hide","aria-label":"Invoer wissen",title:"Invoer wissen",tabIndex:"-1",children:r.jsx(N,{})})]}),r.jsxs("button",{className:u("utrecht-button utrecht-button--primary-action nijmegen-search__search-button",h&&"nijmegen-search__search-button--dark"),"aria-label":"Zoekknop",children:[o&&r.jsx(q,{})," Zoeken"]}),r.jsx("div",{className:u("nijmegen-search__autocomplete-results",c&&"nijmegen-search__autocomplete-results--example"),children:r.jsx("div",{className:"nijmegen-listbox",role:"listbox",children:r.jsx("ul",{className:"nijmegen-listbox__list",role:"list"})})})]}),S=({icon:o=!0,disabled:a=!1,readOnly:s=!1,dark:h=!1,autocomplete:c=!1,placeholder:y="Zoeken"})=>r.jsxs("form",{className:"nijmegen-search",method:"GET",action:"",role:"search",children:[r.jsxs("div",{className:"nijmegen-search__input-holder",children:[r.jsx("input",{className:u("nijmegen-search__input",a&&"nijmegen-search__input--disabled"),disabled:a,readOnly:s,id:"search",type:"text",placeholder:y,"aria-controls":"autocomplete-results","aria-autocomplete":"both","aria-label":"Zoekveld","aria-describedby":"autocomplete-help-text"}),r.jsx("button",{className:"nijmegen-search__clear-button nijmegen-search__clear-button--hide","aria-label":"Invoer wissen",title:"Invoer wissen",tabIndex:"-1",children:r.jsx(N,{})})]}),r.jsxs("button",{className:u("utrecht-button utrecht-button--primary-action nijmegen-search__search-button",h&&"nijmegen-search__search-button--dark"),"aria-label":"Zoekknop",children:[o&&r.jsx(q,{})," Zoeken"]}),r.jsx("div",{className:u("nijmegen-search__autocomplete-results",c&&"nijmegen-search__autocomplete-results--example"),children:r.jsx("div",{className:"nijmegen-listbox",role:"listbox",children:r.jsx("ul",{className:"nijmegen-listbox__list",role:"list"})})})]});try{w.displayName="SearchStoryWebComponent",w.__docgenInfo={description:"",displayName:"SearchStoryWebComponent",props:{icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"false"},description:"",name:"autocomplete",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Zoeken"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}try{S.displayName="SearchStory",S.__docgenInfo={description:"",displayName:"SearchStory",props:{icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"false"},description:"",name:"autocomplete",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Zoeken"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{S,G as a,w as b};
