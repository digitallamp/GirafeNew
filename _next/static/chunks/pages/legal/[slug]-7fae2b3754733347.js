(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9038],{73875:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(11720),a=n(34087),c=n(23526),l=n(18522),o=n(1673),i=n(12560),s=n(11880),u=n(6203),d=n(99520),p=n(14682),h=n.n(p),_=n(97997);var f=({className:e="",contactTitle:t,contactDescription:n,buttonTitle:r,buttonLink:a})=>(0,_.BX)("div",{className:"\n      ".concat(h().card,"\n      ").concat(e,"\n    "),children:[(0,_.tZ)("h2",{className:"heading-4-xl",children:t}),(0,_.tZ)("p",{className:"body-l",children:n}),(0,_.tZ)(d.Z,{className:h().button,hasNegativeHover:!0,href:null!==a&&void 0!==a&&a.includes("mailto:")?"".concat(a):"/".concat(a),size:"m",variation:"primary",children:r})]}),m=n(69025),b=n(89297),g=n.n(b);var y=({title:e,contactTitle:t,contactDescription:n,buttonTitle:d="Start a project",buttonLink:p="/contact/#fill-in-form",className:h=""})=>{const b=(0,r.useRef)(null),{scrollYProgress:y}=(0,a.M)(),{start:Z,end:v}=(0,m.Z)(b),w=(0,c.H)(y,[Z,v],[1,1.2]);return(0,_.tZ)(l.X,{features:o.H,strict:!0,children:(0,_.tZ)(s.Z,{as:"section",className:"".concat(h," ").concat(g().grid),cols:12,size:"l",children:(0,_.BX)(u.Z,{className:"".concat(g().cta),span:10,start:2,children:[(0,_.tZ)("div",{className:"heading-3-xl ".concat(g().title),dangerouslySetInnerHTML:{__html:null!==e&&void 0!==e?e:""}}),(0,_.tZ)(f,{buttonLink:p,buttonTitle:d,contactDescription:n,contactTitle:t}),(0,_.tZ)(i.m.span,{className:g().background,ref:b,style:{scale:w}})]})})})}},43607:function(e,t,n){"use strict";n.d(t,{oM:function(){return r}});const r=[{attributes:{rel:"icon",type:"image/png",href:"/favicons/apple-touch-icon.png"},content:null,tag:"link"},{attributes:{sizes:"180x180",rel:"apple-touch-icon",type:"image/png",href:"/favicons/apple-touch-icon.png"},content:null,tag:"link"},{attributes:{rel:"icon",type:"image/x-icon",href:"/favicons/favicon.ico"},content:null,tag:"link"}]},48687:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(11163);const a=e=>{switch(e){case"ux-design":return"UX Design";case"ux-design-intern":return"UX Design Intern";case"privacy-policy":return"Privacy Policy";default:return e}};function c(){const{asPath:e}=(0,r.useRouter)(),[t]=e.split("?"),n=t.split("/").filter((e=>""!==e)),c=n.slice(1),l=[],o=n.length>0?{path:n[0],title:n[0]}:{title:"",path:""};return c.map((e=>{const t={path:e,title:a(e)};l.push(t)})),{base:o,items:l}}},69025:function(e,t,n){"use strict";var r=n(11720);t.Z=(e,t=0)=>{const n=e,{0:a,1:c}=(0,r.useState)(0),{0:l,1:o}=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=()=>{const e=n.current.getBoundingClientRect(),r=window.pageYOffset||document.documentElement.scrollTop,a=e.top+r;c(a/document.body.clientHeight),o((a+e.height+t)/document.body.clientHeight)};null!==n.current&&e();const r=new ResizeObserver((()=>{null!==n.current&&e()}));return r.observe(document.body),()=>{r.disconnect()}}),[c,n,t]),{ref:n,start:a,end:l}}},28865:function(e,t,n){"use strict";var r=n(17745);t.Z=(e,t)=>{let n=e.path?"/".concat(e.path):"";const a=[{title:e.title,path:n}];return null===t||void 0===t||t.map((e=>{const t={title:"",path:""};n+="/".concat(e.path),t.path=n,t.title=(0,r.Z)(e.title).replace(/-/g," "),a.push(t)})),"legal"===e.title?t:a}},54210:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return T},default:function(){return j}});var r=n(59499),a=n(11720),c=n(9008),l=n(85548),o=n(92757),i=n(92064),s=n(27482),u=n(73875),d=n(11880),p=n(6203),h=n(42758),_=n(46252),f=n.n(_),m=n(97997);var b=function({titleCol1:e,titleCol2:t,titleCol3:n,titleCol4:r,titleCol5:a,rows:c}){return(0,m.tZ)("div",{className:f().wrapper,children:(0,m.BX)("table",{className:f().table,children:[(0,m.tZ)("thead",{className:f().head,children:(0,m.BX)("tr",{children:[e&&(0,m.tZ)("th",{children:e}),t&&(0,m.tZ)("th",{children:t}),n&&(0,m.tZ)("th",{children:n}),r&&(0,m.tZ)("th",{children:r}),a&&(0,m.tZ)("th",{children:a})]})}),(0,m.tZ)("tbody",{className:f().body,children:null===c||void 0===c?void 0:c.map(((e,t)=>(0,m.BX)("tr",{children:[e.column1&&(0,m.tZ)("td",{dangerouslySetInnerHTML:{__html:e.column1}}),e.column2&&(0,m.tZ)("td",{dangerouslySetInnerHTML:{__html:e.column2}}),e.column3&&(0,m.tZ)("td",{dangerouslySetInnerHTML:{__html:e.column3}}),e.column4&&(0,m.tZ)("td",{dangerouslySetInnerHTML:{__html:e.column4}}),e.column5&&(0,m.tZ)("td",{dangerouslySetInnerHTML:{__html:e.column5}})]},t)))})]})})};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function({children:e,className:t=""}){const n=a.useRef(null),[r,c]=a.useState(!1);a.useEffect((()=>{if(n.current){var e;const t=null===(e=n.current.parentElement)||void 0===e?void 0:e.closest("[data-is-wrapper]");c(!!t)}}),[n]);const l=a.useMemo((()=>r?a.Fragment:p.Z),[r]);return(0,m.tZ)(l,y(y({"data-is-wrapper":!0,ref:n},r?{}:{span:6,start:2,className:t}),{},{children:e}))},v=n(28865),w=n(48687),N=n(43607);var O=e=>"Last updated: ".concat(new Date(e).toLocaleDateString("en-US",{day:"numeric",year:"numeric",month:"short"})),k=n(58270),C=n.n(k);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=!0,j=({data:e})=>{var t,n;const{base:r,items:a}=(0,w.Z)(),_=[...null!==(t=null===(n=e.legal)||void 0===n?void 0:n.seo)&&void 0!==t?t:[],...e.site.favicon,...N.oM],{header:f,content:g,_updatedAt:y,ctaRow:k}=e.legal;return(0,m.BX)(m.HY,{children:[(0,m.tZ)(c.default,{children:(0,l.y)(_)}),(0,m.BX)("main",{children:[f.map(((e,t)=>null===e?null:(0,m.tZ)(h.ZP,S(S({breadcrumb:(0,v.Z)(r,a)},e),{},{description:O(y)}),t))),(0,m.tZ)(d.Z,{className:C().grid,cols:12,size:"l",children:(0,m.tZ)(o.rZ,{customRules:[(0,i.SZ)(s.u$,(({adapter:{renderNode:e},children:t,key:n,node:r})=>(0,m.tZ)(Z,{className:C().wrapper,children:(0,m.tZ)("span",{className:"underline-inline",children:e("a",{key:n,href:r.url,target:"_blank",rel:"noopener noreferrer"},t)})}))),(0,i.SZ)(s.Xy,(({adapter:{renderNode:e},children:t,key:n,node:r})=>{let a;switch(r.level){case 3:a="heading-1-xl";break;case 4:case 5:case 6:a="heading-l";break;default:a="heading-2-xl"}return(0,m.tZ)(Z,{className:C().wrapper,children:e("h".concat(1===r.level?2:r.level),{key:n,className:a,id:null!==t&&void 0!==t&&t[0].toString().includes("cookies")?"cookies":""},t)})})),(0,i.SZ)(s.RF,(({adapter:{renderNode:e},children:t,key:n})=>(0,m.tZ)(Z,{className:C().wrapper,children:e("p",{key:n,className:"body-l"},t)}))),(0,i.SZ)(s.nq,(({adapter:{renderNode:e},children:t,key:n})=>(0,m.tZ)(Z,{className:C().wrapper,children:e("ul",{key:n},t)}))),(0,i.SZ)(s.b2,(({adapter:{renderNode:e},children:t,key:n})=>(0,m.tZ)(Z,{className:C().wrapper,children:e("blockquote",{key:n},t)})))],data:g,renderBlock:({record:e})=>{switch(e.__typename){case"Table2ColumnRecord":case"Table3ColumnRecord":case"Table4ColumnRecord":case"Table5ColumnRecord":return(0,m.tZ)(p.Z,{span:12,children:(0,m.tZ)(b,S({},e))});default:return null}}})}),k&&(0,m.tZ)(u.Z,S(S({},k),{},{className:C().cta}))]})]})}},79302:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legal/[slug]",function(){return n(54210)}])},14682:function(e){e.exports={card:"CardCta_card__K0niS",faded:"CardCta_faded__GEAG6",appear:"CardCta_appear__eQpN3"}},89297:function(e){e.exports={cta:"CtaRow_cta__3nxNv",title:"CtaRow_title__an_u2",card:"CtaRow_card__6PeVP",button:"CtaRow_button__Q3QOS",faded:"CtaRow_faded__xa_ZF",appear:"CtaRow_appear__LiVjp",background:"CtaRow_background__VHHYc",grid:"CtaRow_grid__Ewtq0"}},46252:function(e){e.exports={wrapper:"Table_wrapper__IkT3z",table:"Table_table__fDNcT",head:"Table_head__HLvWZ",body:"Table_body__8W_6V"}},58270:function(e){e.exports={wrapper:"Legal_wrapper__HRI40",cta:"Legal_cta__uCePE",grid:"Legal_grid__y3ZgA"}}},function(e){e.O(0,[2198,6732,7333,5711,9007,9774,2888,179],(function(){return t=79302,e(e.s=t);var t}));var t=e.O();_N_E=t}]);