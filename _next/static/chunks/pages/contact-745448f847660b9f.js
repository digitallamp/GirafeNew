(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{6790:function(e,t,n){"use strict";var a=n(11720),r=n(67253),i=n(38443),c=n(70131),o=n(92052),l=n.n(o),s=n(97997);t.Z=function({data:e,color:t="#e7ecf0",className:n="",imageWrapperClassName:o="",imageRootClassName:d="",imageClassName:u=""}){var p,m,h,_,f,g;const{lightColor:b,darkColor:v}=function(e){const[t,n]=a.default.useState("");return(0,a.useEffect)((()=>{n((0,i.p_)(e,.5))}),[e]),{lightColor:e,darkColor:t}}(null!==t&&void 0!==t?t:"#e7ecf0"),Z=(0,a.useRef)(null),y=(0,a.useRef)(null),N=(0,a.useRef)(null),{ref:w,inView:x}=(0,c.YD)({threshold:.1,triggerOnce:!0});function O(){const e=y.current;if(null!==e){const{width:t,height:n}=e.getBoundingClientRect(),a=Math.max(t,n);!function(e){const t=e.querySelectorAll(".".concat(l().bubble));for(let n=t.length-1;n>=0;n-=1)t[n].remove()}(e);const r=document.createElement("span");!function(e,t,n,a){e.style.setProperty("--start-color",n),e.style.setProperty("--end-color",a),e.style.width="".concat(t,"px"),e.style.height="".concat(t,"px"),e.classList.add(l().bubble)}(r,a,b,v),e.insertBefore(r,e.childNodes[0]),r.addEventListener("animationend",(()=>{null!==Z.current&&(Z.current.style.opacity="0"),r.style.opacity="0"}))}}return(0,a.useEffect)((()=>{x&&(O(),N.current&&N.current.play())}),[x]),(0,a.useEffect)((()=>{if(!e)throw new Error("Data prop is required, please make sure it's provided")}),[e]),(0,s.tZ)("div",{className:n,ref:w,children:(0,s.BX)("div",{className:"\n          ".concat(l().wrapper,"\n          ").concat(o,"\n        "),ref:y,children:[(0,s.tZ)("div",{className:l()["bubble-background"],ref:Z}),"mp4"===e.format||"webm"===e.format?(0,s.BX)("video",{className:u,controls:!1,loop:!0,muted:!0,playsInline:!0,poster:null!==(p=null===(m=e.video)||void 0===m?void 0:m.poster)&&void 0!==p?p:"",preload:"none",ref:N,children:[(0,s.tZ)("source",{src:null!==(h=e.url)&&void 0!==h?h:"",type:null!==(_=e.mimeType)&&void 0!==_?_:""}),(0,s.tZ)("source",{src:null!==(f=null===(g=e.video)||void 0===g?void 0:g.src)&&void 0!==f?f:"",type:"video/mp4"})]}):e&&(0,s.tZ)(r.E,{className:d,data:e,pictureClassName:u,style:{backgroundColor:"".concat(b)}})]})})}},38787:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var a=n(11720),r=n(59632),i=n.n(r),c=n(11880),o=n(6203),l=n(59499),s=n(41664),d=n(95569),u=n(5473),p=n(39752),m=n.n(p),h=n(97102),_=n(97997);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=({label:e="Back to",items:t=[],className:n="",single:r})=>{var i,c;const{0:o,1:l}=(0,a.useState)(t),p=(0,u.Z)("(max-width: 562px)");if(null!==(i=o[0].title)&&void 0!==i&&i.includes("#")){const[e]=o[0].title.split("#");o[0].title=e}return(0,a.useEffect)((()=>{if(!p||r)l(t);else{const e=[...t],n=0,a=t.length-2;e.splice(n,a),e.pop(),l(e)}}),[t,p,r]),(0,_.tZ)("nav",{"aria-label":"Breadcrumb",children:(0,_.BX)("ol",{className:"\n          ".concat(m().breadcrumb,"\n          ").concat(n,"\n        "),children:[p&&!r&&(0,_.tZ)("p",{className:"body-l",children:(0,_.tZ)(s.default,{href:null!==(c=o[0].path)&&void 0!==c?c:"",children:(0,_.BX)("a",{className:"body-l underline",href:o[0].path,children:[(0,_.tZ)(d.ZP,{className:m().chevron,direction:h.T.West,name:"chevron",size:h.J.Large}),(0,_.tZ)("span",{className:"".concat(m().back),children:e}),o[0].title]})})}),o.map((({path:e,title:t},n)=>(0,_.BX)("li",{className:"".concat(m().item," ").concat(p&&!r?m().hidden:""," "),children:[n<o.length-1&&(0,_.tZ)(_.HY,{children:""!==e?(0,_.tZ)(s.default,{href:null!==e&&void 0!==e?e:"",children:(0,_.tZ)("a",g(g({className:"body-l underline",href:e},o.length===n+1&&{"aria-current":"page"}),{},{children:t}))}):(0,_.tZ)("p",{className:"body-l",children:t})}),n<o.length-1&&(0,_.tZ)(d.ZP,{className:m().chevron,direction:h.T.East,name:"chevron",size:h.J.Large}),n>=o.length-1&&(0,_.tZ)("p",g(g({className:"body-l ".concat(m().current)},o.length===n+1&&{"aria-current":"page"}),{},{children:o[n].title}),n)]},n)))]})})},v=n(99520),Z=n(18522),y=n(1673),N=n(12560),w=n(21190),x=n(35755),O=n(11276),B=n.n(O);const C={enter:()=>({display:"none",opacity:0,x:20}),center:{opacity:1,display:"inline-flex",x:0},exit:()=>({opacity:0,transition:{delay:0,duration:.2}})},S=({items:e})=>{const{0:[t],1:n}=(0,a.useState)([0]),r=(0,x.r)(0,e.length,t),i=(0,a.useCallback)((()=>{n([t+1])}),[t]);return(0,a.useEffect)((()=>{const e=setTimeout((()=>i()),2500);return()=>{clearTimeout(e)}}),[i]),(0,_.BX)("span",{className:B().anim,children:[(0,_.tZ)("span",{className:B()["screen-reader-only"],children:e.join(", ")}),(0,_.tZ)(w.M,{exitBeforeEnter:!0,initial:!1,children:(0,_.tZ)(Z.X,{features:y.H,strict:!0,children:(0,_.tZ)(N.m.span,{"aria-hidden":"true",children:(c=e[r],[...c].map(((e,t)=>(0,_.tZ)(Z.X,{features:y.H,strict:!0,children:(0,_.tZ)(N.m.span,{animate:"center",exit:"exit",initial:"enter",transition:{duration:.5*.92**t,ease:"easeOut",opacity:{duration:.5*.94**t,delay:.1*t},delay:.1*t},variants:C,children:e})},t))))},t)})})]});var c},P=({title:e,rotatingTitles:t})=>{const n=[],r=Object.values(t);n.push(...r);const c=i()(e,/{{|}}/g,(()=>(0,_.tZ)(S,{items:n})));return(0,_.tZ)("h1",{className:B()["flex-header"],children:c.map(((e,t)=>"string"===typeof e?(0,_.BX)(a.Fragment,{children:[(0,_.tZ)("span",{children:e}),0===t?(0,_.tZ)("span",{children:"\xa0"}):null]},t):(0,_.tZ)(a.Fragment,{children:e},t)))})};var k=({title:e,rotatingTitles:t,description:n,breadcrumb:r=[],hasSmallDescription:l,buttonTarget:s,buttonText:d,single:u})=>{const{0:p,1:m}=(0,a.useState)(0);(0,a.useEffect)((()=>{if(!t)return;const e=Object.keys(t).length,n=setTimeout((()=>{m((t=>t<e-1?t+1:0))}),4e3);return()=>clearInterval(n)}),[p,m,t]);const h=i()(e,"~bad~",(()=>(0,_.tZ)(_.HY,{children:(0,_.tZ)("s",{className:B().bad,children:"bad"})})));return(0,_.tZ)(c.Z,{className:B().header,cols:12,size:"l",children:(0,_.BX)(o.Z,{span:10,start:2,children:[r.length>0&&(0,_.tZ)(b,{className:B().breadcrumb,items:r,single:u}),(0,_.BX)("div",{className:B().text,id:"fill-in-form",children:[t&&Object.keys(t).length>0?(0,_.tZ)(P,{rotatingTitles:t,title:e}):(0,_.tZ)("h1",{children:h}),n&&(0,_.tZ)("div",{className:"\n                  body-l\n                  ".concat(B().description,"\n                  ").concat(l?"".concat(B().right):"","\n                "),dangerouslySetInnerHTML:{__html:n}}),s&&(0,_.tZ)(v.Z,{className:B().button,href:s,children:d})]})]})})}},55293:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(11720),r=n(18522),i=n(1673),c=n(12560),o=n(92709),l=n(8082),s=n.n(l),d=n(97997);var u=({defaultActive:e=0,active:t,slides:n,isInversed:r,name:i,className:c="",onSelect:l=(()=>{console.warn("Method onSelect is not provided for ".concat(i))}),twoItemsPerSlide:u,authors:p})=>{const m=(0,o.Z)("".concat(i)),{0:h,1:_}=(0,a.useState)(e);function f(e){_(e),l(e)}return(0,a.useEffect)((()=>{"undefined"!==typeof t&&_(t)}),[t]),(0,d.tZ)("div",{className:"\n      ".concat(s()["pagination-dot-group"],"\n      ").concat(r?s().inversed:"","\n      ").concat(c,"\n    "),children:u?null===n||void 0===n?void 0:n.map(((e,t)=>{if(t%2===0)return(0,d.BX)(a.Fragment,{children:[(0,d.tZ)("input",{checked:t===h,id:"pdg-".concat(m,"-").concat(t),name:"pdg-".concat(m),onChange:()=>{f(t)},onClick:()=>{f(t)},type:"radio",value:t}),(0,d.tZ)("label",{className:s().dot,htmlFor:"pdg-".concat(m,"-").concat(t)})]},t)})):null===n||void 0===n?void 0:n.map(((e,t)=>(0,d.BX)(a.Fragment,{children:[(0,d.tZ)("input",{checked:t===h,id:"pdg-".concat(m,"-").concat(t),name:"pdg-".concat(m),onChange:()=>{f(t)},onClick:()=>{f(t)},type:"radio",value:t}),(0,d.tZ)("label",{"aria-label":"Slide ".concat(t+1,": ").concat(e),className:s().dot,htmlFor:"pdg-".concat(m,"-").concat(t),title:"Slide ".concat(t+1).concat(p?": ".concat(p[t]):"")})]},t)))})},p=n(14754),m=n(86195),h=n.n(m),_=n(57610);var f=(e,t)=>{if(!e)return[];const n=[];let a=[];for(const[r,i]of e.entries())r%t===0&&0!==r&&(n.push(a),a=[]),a.push(i);return n.push(a),n},g=n(97102);const b=({arrowSize:e="m",arrowVariation:t="secondary",className:n="",gap:o=24,heading:l,headingClassName:s="",isInversed:m,items:b,itemsPerGroup:v=2,loop:Z=!1,showDots:y=!0,showScrollbar:N=!1,authors:w})=>{const{0:x,1:O}=(0,a.useState)(0),B=(0,a.useRef)(null),C=(0,a.useRef)(null),S=f(b,v),P=e=>{const t=x+e,n=S.length-1;return t>n?O(Z?0:n):t<0?O(Z?n:0):void O(t)},k={gap:o,width:"calc(".concat(100*S.length,"% + ").concat((S.length-1)*o,"px)"),gridTemplateColumns:"repeat(".concat(S.length,", 1fr)")};return(0,d.BX)(d.HY,{children:[(0,d.BX)("header",{className:"\n          ".concat(h().header,"\n          ").concat(m?h().inversed:"","\n          ").concat(s,"\n        "),children:[l,S.length-1>0&&(0,d.BX)("div",{className:h().controls,children:[y&&(0,d.tZ)(u,{active:x,authors:w,className:h().dots,isInversed:m,name:"carousel-".concat((Math.random()+1).toString(36).slice(7)),onSelect:e=>{O(e)},slides:S.map(((e,t)=>t.toString()))}),(0,d.tZ)(p.Z,{icon:"arrow",iconDirection:g.T.West,isDisabled:!Z&&0===x,isInversed:m,label:"Previous slide",onClick:()=>{P(-1)},size:e,variation:t}),(0,d.tZ)(p.Z,{icon:"arrow",iconDirection:g.T.East,isDisabled:!Z&&x===S.length-1,isInversed:m,label:"Next slide",onClick:()=>{P(1)},size:e,variation:t})]})]}),(0,d.tZ)("div",{className:"\n          ".concat(h().carousel,"\n          ").concat(n,"\n          ").concat(N?"":h()["hide-scrollbar"],"\n          ").concat(1===v?h().hidden:"","\n          "),children:(0,d.tZ)(r.X,{features:i.H,children:(0,d.tZ)(c.m.ul,{animate:{x:"calc(".concat(-1*x/S.length*100,"% - ").concat(x/S.length*o,"px)")},className:"".concat(h().slides," ").concat(N?"":h()["hide-scrollbar"]," ").concat(l||S.length-1>0?h()["slides-padding-top"]:""),ref:B,style:k,transition:{duration:_.sP,ease:_.mv},children:S.map(((e,t)=>(0,d.tZ)("li",{className:"".concat(h().group," ").concat(t===x?"":h().inactive),style:{gridTemplateColumns:"repeat(".concat(v,", 1fr)"),gap:o},children:e.map(((e,t)=>(0,d.tZ)("div",{ref:C,children:e},t)))},t)))})})})]})};var v=a.default.memo(b)},20123:function(e,t,n){"use strict";n(11720);var a=n(6790),r=n(11880),i=n(6203),c=n(99520),o=n(97102),l=n(66667),s=n.n(l),d=n(97997);t.Z=({emailButtonText:e,downloadButtonText:t,downloadableFileHref:n,description:l,person:u,title:p,href:m})=>{var h;return(0,d.tZ)(r.Z,{as:"section",className:s()["section-email"],cols:12,size:"l",children:(0,d.BX)(i.Z,{className:s().content,span:10,start:2,children:[(null===u||void 0===u?void 0:u.image)&&(0,d.tZ)(a.Z,{color:null===(h=u.color)||void 0===h?void 0:h.hex,data:u.image.responsiveImage,imageWrapperClassName:s().portrait}),(0,d.BX)("div",{className:s().right,children:[(0,d.tZ)("h2",{className:"heading-2-xl",children:p}),(0,d.tZ)("div",{className:"body-m",dangerouslySetInnerHTML:{__html:null!==l&&void 0!==l?l:""}}),(0,d.tZ)("img",{alt:"Signature of Vince",className:s().signature,height:"29.353293413173656",loading:"lazy",src:"/img/contact/signature.webp",width:"86"}),(0,d.BX)("div",{className:s()["button-container"],children:[(0,d.tZ)(c.Z,{className:s().button,href:m,icon:"email",iconPosition:"left",size:"m",children:e}),n&&t&&(0,d.tZ)(c.Z,{className:s().button,download:!0,href:n,icon:"arrow",iconDirection:o.T.NorthEast,iconPosition:"left",size:"m",children:t})]})]})]})})}},74511:function(e,t,n){"use strict";n(11720);var a=n(5152),r=n(6790),i=n(11880),c=n(6203),o=n(55293),l=n(11179),s=n.n(l),d=n(97997);t.Z=({locationTitle:e,locationDescription:t,isDark:l,className:u="",localSpots:p,locationImages:m})=>{const h=(0,a.default)((()=>n.e(8566).then(n.bind(n,98566))),{loadableGenerated:{webpack:()=>[98566]}});return(0,d.tZ)("section",{className:"\n      ".concat(s()["section-office"]," ").concat(u,"\n      ").concat(l?s().dark:"","\n    "),children:(0,d.BX)(i.Z,{className:s().grid,children:[(0,d.tZ)("picture",{className:s().map,children:l?(0,d.BX)(d.HY,{children:[(0,d.tZ)("source",{media:"(max-width: 414px)",srcSet:"/img/maps/map-dark-mobile@2x.webp"}),(0,d.tZ)("img",{alt:"Map of the office including highlights","aria-hidden":"true",loading:"lazy",src:"/img/maps/map-dark@2x.webp"})]}):(0,d.BX)(d.HY,{children:[(0,d.tZ)("source",{media:"(max-width: 414px)",srcSet:"/img/maps/map-light-mobile@2x.webp"}),(0,d.tZ)("img",{alt:"Map of the office including highlights","aria-hidden":"true",loading:"lazy",src:"/img/maps/map-light@2x.webp"})]})}),(0,d.BX)(c.Z,{className:s().content,span:4,start:2,children:[(0,d.BX)("div",{className:"".concat(s().heading," ").concat(l?s().dark:""),children:[(0,d.tZ)("h2",{className:"heading-3-xl",children:e}),(0,d.tZ)("div",{className:"body-l",dangerouslySetInnerHTML:{__html:t}})]}),(0,d.BX)("div",{className:"".concat(s().address," ").concat(l&&s().dark),children:[(0,d.tZ)("h3",{className:"heading-s",children:"Our address"}),(0,d.tZ)("address",{lang:"nl",children:(0,d.BX)("a",{className:"heading-l",href:"https://goo.gl/maps/36etXfHjYR52",rel:"noreferrer",target:"_blank",children:["Jacob van Lennepkade 334H",(0,d.tZ)("br",{}),"1053 NJ Amsterdam",(0,d.tZ)("br",{}),"the Netherlands"]})})]})]}),(0,d.tZ)(c.Z,{className:s().images,span:8,start:1,children:m.map(((e,t)=>(0,d.tZ)(r.Z,{data:e.responsiveImage},t)))}),(0,d.tZ)(c.Z,{className:s()["office-carousel"],span:4,start:9,children:(0,d.tZ)(o.Z,{arrowSize:"s",heading:(0,d.tZ)("p",{className:"heading-s",children:"Our favorite local spots"}),isInversed:l,items:p.length>0?p.map(((e,t)=>(0,d.tZ)(h,{description:e.description,href:e.href,image:e.image,isInversed:l,title:e.title},t))):[],itemsPerGroup:1,loop:!0,showDots:!1})})]})})}},43607:function(e,t,n){"use strict";n.d(t,{oM:function(){return a}});const a=[{attributes:{rel:"icon",type:"image/png",href:"/favicons/apple-touch-icon.png"},content:null,tag:"link"},{attributes:{sizes:"180x180",rel:"apple-touch-icon",type:"image/png",href:"/favicons/apple-touch-icon.png"},content:null,tag:"link"},{attributes:{rel:"icon",type:"image/x-icon",href:"/favicons/favicon.ico"},content:null,tag:"link"}]},48687:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(11163);const r=e=>{switch(e){case"ux-design":return"UX Design";case"ux-design-intern":return"UX Design Intern";case"privacy-policy":return"Privacy Policy";default:return e}};function i(){const{asPath:e}=(0,a.useRouter)(),[t]=e.split("?"),n=t.split("/").filter((e=>""!==e)),i=n.slice(1),c=[],o=n.length>0?{path:n[0],title:n[0]}:{title:"",path:""};return i.map((e=>{const t={path:e,title:r(e)};c.push(t)})),{base:o,items:c}}},17745:function(e,t){"use strict";t.Z=e=>e.charAt(0).toUpperCase()+e.slice(1)},28865:function(e,t,n){"use strict";var a=n(17745);t.Z=(e,t)=>{let n=e.path?"/".concat(e.path):"";const r=[{title:e.title,path:n}];return null===t||void 0===t||t.map((e=>{const t={title:"",path:""};n+="/".concat(e.path),t.path=n,t.title=(0,a.Z)(e.title).replace(/-/g," "),r.push(t)})),"legal"===e.title?t:r}},92709:function(e,t){"use strict";t.Z=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()},49347:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Y},default:function(){return U}});n(11720);var a=n(9008),r=n(85548),i=n(11880),c=n(6203),o=n(11163),l=n(87536),s=n(92876),d=n(49080),u=n(95569),p=n(59499),m=n(4730),h=n(18522),_=n(1673),f=n(12560),g=n(57530),b=n.n(g),v=n(57610),Z=n(97997);const y=["id","label","size","placeholder","isDisabled","hasError","type","isOptional","onChange","onFocus","autoComplete","spellCheck","rules","register","name","className","error"];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=e=>{let{id:t,label:n,size:a="m",placeholder:r,isDisabled:i,hasError:c,type:o="text",isOptional:l,onChange:s,onFocus:d,autoComplete:p="on",spellCheck:g=!0,rules:N,register:x,name:O,className:B="",error:C}=e,S=(0,m.Z)(e,y);return(0,Z.BX)("div",{className:"\n      ".concat(b().input,"\n      ").concat(b()[a],"\n      ").concat(B,"\n    "),children:[n&&(0,Z.BX)("label",{className:"\n            heading-m\n            ".concat(b().label,"\n          "),htmlFor:t,children:[n,l&&(0,Z.tZ)("span",{children:"\u2022 optional"}),c&&(0,Z.tZ)(h.X,{features:_.H,children:(0,Z.BX)(f.m.div,{animate:{opacity:1},className:b().error,initial:{opacity:0},transition:{duration:v.$w},children:[(0,Z.tZ)(u.ZP,{name:"warning"}),(0,Z.tZ)("span",{className:"body-s",children:C})]})})]}),(0,Z.tZ)("input",w(w({},S),{},{autoComplete:p,className:"\n          ".concat(b()["input-element"],"\n          ").concat(b()[a],"\n        "),disabled:i,id:t,onFocus:d,placeholder:r,spellCheck:g,type:o},x(O,w(w({},N),{},{required:!l,onChange:s}))))]})},O=n(14754),B=n(713),C=n.n(B);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=({id:e,name:t,label:n,size:a="m",placeholder:r,isDisabled:i,hasError:c,isOptional:o,onChange:l,onFocus:s,autoComplete:d="on",spellCheck:p=!0,className:m="",register:g,rules:b,error:y})=>(0,Z.BX)("div",{className:"\n      ".concat(C().textarea," \n      ").concat(m,"\n    "),children:[n&&(0,Z.BX)("label",{className:"heading-m ".concat(C().label),htmlFor:e,children:[n,c&&(0,Z.tZ)(h.X,{features:_.H,children:(0,Z.BX)(f.m.div,{animate:{opacity:1},className:C().error,initial:{opacity:0},transition:{duration:v.$w},children:[(0,Z.tZ)(u.ZP,{name:"warning"}),(0,Z.tZ)("span",{className:"body-s",children:y})]})}),o&&(0,Z.tZ)("span",{children:"Optional"})]}),(0,Z.tZ)("textarea",P({autoComplete:d,className:"\n          ".concat(C()["textarea-element"],"\n          ").concat(C()[a],"\n        "),disabled:i,id:e,onFocus:s,placeholder:r,spellCheck:p},g(t,P(P({},b),{},{required:!o,onChange:l}))))]});const X=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;var T=n(85171),E=n.n(T);var H=()=>{var e;const t=(0,o.useRouter)(),[n,a]=(0,d.cI)("xwkypebd"),{register:r,handleSubmit:i,formState:{errors:c}}=(0,l.cI)();return n.errors.length>0&&(0,s.Tb)(new Error("Formspree: ".concat(JSON.stringify(n.errors,null,2),")}"))),n.succeeded&&t.push("/contact/sent"),(0,Z.BX)("form",{className:E().form,onSubmit:i(a),children:[(0,Z.tZ)(x,{autoComplete:"name",className:E().wrapper,error:c.name&&"Please enter at least your first or last name",hasError:void 0!==c.name,id:"input-name",label:"What's your name?",name:"name",register:r}),(0,Z.tZ)(x,{autoComplete:"email",className:E().wrapper,error:"required"===(null===(e=c.email)||void 0===e?void 0:e.type)?"Please enter your email":"Please make sure your email contains an @ and a valid domain",hasError:void 0!==c.email,id:"input-email",label:"Your email",name:"email",register:r,rules:{pattern:X}}),(0,Z.tZ)(k,{autoComplete:"off",className:E().wrapper,error:c.whatCanWeHelp&&"Please enter your wants & needs",hasError:void 0!==c.whatCanWeHelp,id:"input-what-can-we-help",label:"What can we help you with?",name:"whatCanWeHelp",register:r,size:"m"}),(0,Z.BX)("div",{className:E()["button-container"],children:[(0,Z.tZ)(O.Z,{hasNegativeHover:!0,label:"Send",size:"l",type:"submit",children:"Send"}),n.errors.length>0&&(0,Z.BX)("p",{className:"body-s",children:[(0,Z.tZ)(u.ZP,{name:"warning"}),"Your message couldn't be sent. Please try again later."]})]})]})},j=n(38787),I=n(89248),D=n.n(I);var z=({title:e,breadcrumb:t=[],className:n=""})=>(0,Z.tZ)("header",{className:"\n      ".concat(n,"\n      ").concat(D().header,"\n    "),children:(0,Z.tZ)(j.Z,{breadcrumb:t,single:!0,title:null!==e&&void 0!==e?e:""})}),F=n(20123),A=n(74511),M=n(28865),L=n(48687),R=n(43607),W=n(82188),q=n.n(W);var Y=!0,U=({data:e})=>{var t,n,o;const{base:l,items:s}=(0,L.Z)(),d=[...null!==(t=null===(n=e.contact)||void 0===n?void 0:n.seo)&&void 0!==t?t:[],...e.site.favicon,...R.oM],{headerTitle:u,description:p,emailTitle:m,emailDescription:h,emailButtonText:_,downloadableFile:f,downloadButtonText:g,person:b,locationTitle:v,locationDescription:y,locationLocalSpots:N,locationImages:w}=e.contact;return(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(a.default,{children:(0,r.y)(d)}),(0,Z.BX)("main",{className:"contact",children:[(0,Z.tZ)(z,{breadcrumb:(0,M.Z)(l,s),title:u}),(0,Z.BX)(i.Z,{className:q().content,cols:12,size:"l",children:[(0,Z.tZ)(c.Z,{className:q().text,span:3,start:2,children:(0,Z.tZ)("div",{className:"body-l",dangerouslySetInnerHTML:{__html:null!==p&&void 0!==p?p:""}})}),(0,Z.tZ)(c.Z,{className:q().contact,span:7,start:6,children:(0,Z.tZ)(H,{})})]}),(0,Z.tZ)(F.Z,{description:h,downloadButtonText:null!==g&&void 0!==g?g:"Download Company PDF",downloadableFileHref:null!==(o=null===f||void 0===f?void 0:f.url)&&void 0!==o?o:"",emailButtonText:_,href:"mailto:vince@yummygum.com",person:b,title:m}),(0,Z.tZ)(A.Z,{localSpots:N,locationDescription:null!==y&&void 0!==y?y:"",locationImages:w,locationTitle:null!==v&&void 0!==v?v:""})]})]})}},29679:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(49347)}])},57530:function(e){e.exports={input:"Input_input__fIbUx",s:"Input_s__I0EOp",m:"Input_m__qnYNs",l:"Input_l__0Em3y",label:"Input_label__ZjenT",error:"Input_error__z7sMl","input-element":"Input_input-element__QYM_i"}},92052:function(e){e.exports={wrapper:"LazyImage_wrapper__KFcqr",bubble:"LazyImage_bubble__UNDBu","bubble-background":"LazyImage_bubble-background__AwWqn"}},8082:function(e){e.exports={"pagination-dot-group":"PaginationDotGroup_pagination-dot-group__NF7v5",inversed:"PaginationDotGroup_inversed__D8TOI"}},713:function(e){e.exports={textarea:"TextArea_textarea__rBSKV",s:"TextArea_s__8uqGr",m:"TextArea_m__vVJFS",l:"TextArea_l__KzcHo",label:"TextArea_label__HuKAt",error:"TextArea_error__W98du","textarea-element":"TextArea_textarea-element__UIFT7"}},39752:function(e){e.exports={breadcrumb:"Breadcrumb_breadcrumb__3A31f",item:"Breadcrumb_item__SX_9h",hidden:"Breadcrumb_hidden__DVURu",back:"Breadcrumb_back__bwyH0",current:"Breadcrumb_current__MeFmN"}},11276:function(e){e.exports={header:"HeaderBase_header__KVjAm","flex-header":"HeaderBase_flex-header__4CkPm",description:"HeaderBase_description__PtiXa",right:"HeaderBase_right__cvIT4",text:"HeaderBase_text__LoOWT",bad:"HeaderBase_bad__RXBeS","screen-reader-only":"HeaderBase_screen-reader-only__HE6ky",breadcrumb:"HeaderBase_breadcrumb___rBpk",button:"HeaderBase_button__OOfJR",anim:"HeaderBase_anim__JsPmx"}},86195:function(e){e.exports={carousel:"Carousel_carousel__xEsTa",hidden:"Carousel_hidden__ZlS7U",slides:"Carousel_slides__PqH3g","slides-padding-top":"Carousel_slides-padding-top__VxPYp","hide-scrollbar":"Carousel_hide-scrollbar__gLiMH",header:"Carousel_header__ctjMG",inversed:"Carousel_inversed__1sCiX",controls:"Carousel_controls__HznZg",dots:"Carousel_dots__ZpuwS",group:"Carousel_group__r4pIq",inactive:"Carousel_inactive__KeWdE"}},66667:function(e){e.exports={"section-email":"SectionEmail_section-email__zA4wX",content:"SectionEmail_content__JbeKf",portrait:"SectionEmail_portrait__78syu",right:"SectionEmail_right__NIxPQ",signature:"SectionEmail_signature__BqRHg",button:"SectionEmail_button__8MWFL","button-container":"SectionEmail_button-container__U2fiT"}},11179:function(e){e.exports={"section-office":"SectionOffice_section-office__CyuGR",dark:"SectionOffice_dark__I1Eg_",grid:"SectionOffice_grid___2onB",content:"SectionOffice_content__WqasY",heading:"SectionOffice_heading__95DNf",address:"SectionOffice_address__dB6Bb",map:"SectionOffice_map__Ad7ze",images:"SectionOffice_images__5zWPc","office-carousel":"SectionOffice_office-carousel__ZuBoV"}},85171:function(e){e.exports={form:"ContactForm_form__qdC_m",wrapper:"ContactForm_wrapper__2r6uv","button-container":"ContactForm_button-container__gUZkf"}},89248:function(e){e.exports={header:"ContactHeader_header__V95CA"}},82188:function(e){e.exports={contact:"Contact_contact__n5RaJ",content:"Contact_content__IUMuG",text:"Contact_text__v74N1"}}},function(e){e.O(0,[2198,6732,4401,9774,2888,179],(function(){return t=29679,e(e.s=t);var t}));var t=e.O();_N_E=t}]);