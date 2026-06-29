import{s as E,r as H,p as U}from"./server.browser-rAMDWieH.js";import{a as F,b as _}from"./_ProgressList-DTGbcTrT.js";const O={title:"Components/Progress list/Html Implementation",id:"html-progresslist",argTypes:F,component:_,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(A,e)=>{var d,c;const i=typeof e.component=="function"?e.component:typeof((d=e.component)==null?void 0:d.render)=="function"?(c=e.component)==null?void 0:c.render:null;return i?E.format(H(i(e.args)),{parser:"babel",plugins:[U]}):A}}}}},n={args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},t={name:"Warning",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"warning",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"warning"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom."}]},{heading:"Component documenteren"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},a={name:"Error",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"error",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"error"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom."}]},{heading:"Component documenteren"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},o={name:"Alles afgerond",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"checked"},{heading:"Component beschikbaar stellen",status:"checked",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},s={name:"Alles geopend",args:{steps:[{heading:"Component ontwerpen",status:"checked",subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},r={name:"Alles gesloten",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current",enableToggle:!0},{heading:"Component beschikbaar stellen",enableToggle:!0,meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}};var p,g,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,k,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(k=t.parameters)==null?void 0:k.docs)==null?void 0:l.source}}};var h,b,j;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,z,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Alles afgerond',
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
      status: 'checked'
    }, {
      heading: 'Component beschikbaar stellen',
      status: 'checked',
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(x=(z=o.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var v,S,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,f,T;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const P=["Default","Warning","Error","Shecked","Open","Closed"],B=Object.freeze(Object.defineProperty({__proto__:null,Closed:r,Default:n,Error:a,Open:s,Shecked:o,Warning:t,__namedExportsOrder:P,default:O},Symbol.toStringTag,{value:"Module"}));export{B as P};
