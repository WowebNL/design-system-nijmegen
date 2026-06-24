import{s as b,r as w,p as j}from"./server.browser-rAMDWieH.js";import{a as z,b as x}from"./_ProgressList-BuwQWB8z.js";const v={title:"Components/Progress list/Html Implementation",id:"html-progresslist",argTypes:z,component:x,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(l,e)=>{var a,r;const s=typeof e.component=="function"?e.component:typeof((a=e.component)==null?void 0:a.render)=="function"?(r=e.component)==null?void 0:r.render:null;return s?b.format(w(s(e.args)),{parser:"babel",plugins:[j]}):l}}}}},n={args:{steps:[{heading:"Component ontwerpen",status:"checked",subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current"},{heading:"Component beschikbaar stellen",body:"Het component kan op dit punt worden gebruikt door andere ontwerpers."}]}},t={name:"Warning",args:{steps:[{heading:"Component ontwerpen",status:"checked",subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"warning",subSteps:[{text:"Design tokens zijn aangemaakt.",status:"warning"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom."}]},{heading:"Component documenteren"},{heading:"Component beschikbaar stellen",body:"Het component kan op dit punt worden gebruikt door andere ontwerpers."}]}},o={name:"Error",args:{steps:[{heading:"Component ontwerpen",status:"checked",subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"error",subSteps:[{text:"Design tokens zijn aangemaakt.",status:"error"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom."}]},{heading:"Component documenteren"},{heading:"Component beschikbaar stellen",body:"Het component kan op dit punt worden gebruikt door andere ontwerpers."}]}};var i,d,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      subSteps: [{
        text: 'Atomen van het component zijn geïdentificeerd.',
        status: 'checked'
      }, {
        text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
        status: 'checked'
      }]
    }, {
      heading: 'Component opbouwen met design tokens',
      status: 'checked',
      subSteps: [{
        text: 'Design tokens zijn aangemaakt.',
        status: 'checked'
      }, {
        text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
        status: 'checked'
      }]
    }, {
      heading: 'Component documenteren',
      status: 'current'
    }, {
      heading: 'Component beschikbaar stellen',
      body: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.'
    }]
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Warning',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      subSteps: [{
        text: 'Atomen van het component zijn geïdentificeerd.',
        status: 'checked'
      }, {
        text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
        status: 'checked'
      }]
    }, {
      heading: 'Component opbouwen met design tokens',
      status: 'warning',
      subSteps: [{
        text: 'Design tokens zijn aangemaakt.',
        status: 'warning'
      }, {
        text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.'
      }]
    }, {
      heading: 'Component documenteren'
    }, {
      heading: 'Component beschikbaar stellen',
      body: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.'
    }]
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,k,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      subSteps: [{
        text: 'Atomen van het component zijn geïdentificeerd.',
        status: 'checked'
      }, {
        text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
        status: 'checked'
      }]
    }, {
      heading: 'Component opbouwen met design tokens',
      status: 'error',
      subSteps: [{
        text: 'Design tokens zijn aangemaakt.',
        status: 'error'
      }, {
        text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.'
      }]
    }, {
      heading: 'Component documenteren'
    }, {
      heading: 'Component beschikbaar stellen',
      body: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.'
    }]
  }
}`,...(h=(k=o.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const S=["Default","Warning","Error"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Error:o,Warning:t,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{D as P};
