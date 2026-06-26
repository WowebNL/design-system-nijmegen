import{s as D,r as f,p as T}from"./server.browser-rAMDWieH.js";import{a as A,b as E}from"./_ProgressList-DTGbcTrT.js";const H={title:"Components/Progress list/Html Implementation",id:"html-progresslist",argTypes:A,component:E,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(S,e)=>{var i,d;const r=typeof e.component=="function"?e.component:typeof((i=e.component)==null?void 0:i.render)=="function"?(d=e.component)==null?void 0:d.render:null;return r?D.format(f(r(e.args)),{parser:"babel",plugins:[T]}):S}}}}},n={args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},t={name:"Warning",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"warning",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"warning"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom."}]},{heading:"Component documenteren"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},a={name:"Error",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"error",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"error"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom."}]},{heading:"Component documenteren"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},o={name:"Alles geopend",args:{steps:[{heading:"Component ontwerpen",status:"checked",subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},s={name:"Alles gesloten",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current",enableToggle:!0},{heading:"Component beschikbaar stellen",enableToggle:!0,meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}};var p,c,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      enableToggle: true,
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
      enableToggle: true,
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
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,u,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Warning',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      enableToggle: true,
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
      enableToggle: true,
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
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var l,h,b;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      enableToggle: true,
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
      enableToggle: true,
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
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var j,w,z;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Alles geopend',
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
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var x,v,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Alles gesloten',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      enableToggle: true,
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
      enableToggle: true,
      subSteps: [{
        text: 'Design tokens zijn aangemaakt.',
        status: 'checked'
      }, {
        text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
        status: 'checked'
      }]
    }, {
      heading: 'Component documenteren',
      status: 'current',
      enableToggle: true
    }, {
      heading: 'Component beschikbaar stellen',
      enableToggle: true,
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const U=["Default","Warning","Error","Open","Closed"],O=Object.freeze(Object.defineProperty({__proto__:null,Closed:s,Default:n,Error:a,Open:o,Warning:t,__namedExportsOrder:U,default:H},Symbol.toStringTag,{value:"Module"}));export{O as P};
