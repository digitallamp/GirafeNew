(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4401],{49080:function(e,t,r){"use strict";r.d(t,{cI:function(){return I}});var n=r(11720);var o=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){return t.reject(r)}))}))};var i=function(e){return new this((function(t,r){if(!e||"undefined"===typeof e.length)return r(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,r){if(r&&("object"===typeof r||"function"===typeof r)){var s=r.then;if("function"===typeof s)return void s.call(r,(function(t){i(e,t)}),(function(r){n[e]={status:"rejected",reason:r},0===--o&&t(n)}))}n[e]={status:"fulfilled",value:r},0===--o&&t(n)}for(var s=0;s<n.length;s++)i(s,n[s])}))},s=setTimeout,a="undefined"!==typeof setImmediate?setImmediate:null;function u(e){return Boolean(e&&"undefined"!==typeof e.length)}function l(){}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],m(e,this)}function f(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn((function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null!==r){var n;try{n=r(e._value)}catch(o){return void h(t.promise,o)}d(t.promise,n)}else(1===e._state?d:h)(t.promise,e._value)}))):e._deferreds.push(t)}function d(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===typeof t||"function"===typeof t)){var r=t.then;if(t instanceof c)return e._state=3,e._value=t,void y(e);if("function"===typeof r)return void m((n=r,o=t,function(){n.apply(o,arguments)}),e)}e._state=1,e._value=t,y(e)}catch(i){h(e,i)}var n,o}function h(e,t){e._state=2,e._value=t,y(e)}function y(e){2===e._state&&0===e._deferreds.length&&c._immediateFn((function(){e._handled||c._unhandledRejectionFn(e._value)}));for(var t=0,r=e._deferreds.length;t<r;t++)f(e,e._deferreds[t]);e._deferreds=null}function p(e,t,r){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=r}function m(e,t){var r=!1;try{e((function(e){r||(r=!0,d(t,e))}),(function(e){r||(r=!0,h(t,e))}))}catch(n){if(r)return;r=!0,h(t,n)}}c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){var r=new this.constructor(l);return f(this,new p(e,t,r)),r},c.prototype.finally=o,c.all=function(e){return new c((function(t,r){if(!u(e))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,s){try{if(s&&("object"===typeof s||"function"===typeof s)){var a=s.then;if("function"===typeof a)return void a.call(s,(function(t){i(e,t)}),r)}n[e]=s,0===--o&&t(n)}catch(u){r(u)}}for(var s=0;s<n.length;s++)i(s,n[s])}))},c.allSettled=i,c.resolve=function(e){return e&&"object"===typeof e&&e.constructor===c?e:new c((function(t){t(e)}))},c.reject=function(e){return new c((function(t,r){r(e)}))},c.race=function(e){return new c((function(t,r){if(!u(e))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=e.length;n<o;n++)c.resolve(e[n]).then(t,r)}))},c._immediateFn="function"===typeof a&&function(e){a(e)}||function(e){s(e,0)},c._unhandledRejectionFn=function(e){"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var v=c,b=r(87559),g=r.n(b);function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),e}var F="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",S=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var x,V=function(e){return function(e){for(var t,r,n,o,i="",s=0,a=(e=String(e)).length%3;s<e.length;){if((r=e.charCodeAt(s++))>255||(n=e.charCodeAt(s++))>255||(o=e.charCodeAt(s++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=F.charAt((t=r<<16|n<<8|o)>>18&63)+F.charAt(t>>12&63)+F.charAt(t>>6&63)+F.charAt(63&t)}return a?i.slice(0,a-3)+"===".substring(a):i}(JSON.stringify(e))},D=function(e){var t="@formspree/core@".concat("2.6.2");return e?"".concat(e," ").concat(t):t},E=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!S.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,r,n,o="",i=0;i<e.length;)t=F.indexOf(e.charAt(i++))<<18|F.indexOf(e.charAt(i++))<<12|(r=F.indexOf(e.charAt(i++)))<<6|(n=F.indexOf(e.charAt(i++))),o+=64===r?String.fromCharCode(t>>16&255):64===n?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},k=function(){function e(){w(this,e),this.loadedAt=1*new Date,this.webdriver=E()}return A(e,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),e}(),T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};w(this,e),this.project=t.project,"undefined"!==typeof window&&this.startBrowserSession()}return A(e,[{key:"startBrowserSession",value:function(){this.session||(this.session=new k)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.endpoint||"https://formspree.io",o=r.fetchImpl||g()({Promise:v}).fetch,i=this.project?"".concat(n,"/p/").concat(this.project,"/f/").concat(e):"".concat(n,"/f/").concat(e),s=function(e){return e instanceof FormData?e:JSON.stringify(e)},a={Accept:"application/json","Formspree-Client":D(r.clientName)};this.session&&(a["Formspree-Session-Data"]=V(this.session.data())),t instanceof FormData||(a["Content-Type"]="application/json");var u={method:"POST",mode:"cors",body:s(t),headers:a};return o(i,u).then((function(e){return e.json().then((function(t){return{body:t,response:e}}))}))}}]),e}(),j=function(){var e;return x||(x=new T(e)),x};function O(e){return O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U=n.default.createContext({client:void 0});U.displayName="Formspree";function R(){return(0,n.useContext)(U).client||j()}var P="2.2.4";function N(e){return void 0!==e.preventDefault}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,n.useState)(!1),o=C(r,2),i=o[0],s=o[1],a=(0,n.useState)(!1),u=C(a,2),l=u[0],c=u[1],f=(0,n.useState)([]),d=C(f,2),h=d[0],y=d[1],p=R(),m=t.client||p;if(!m)throw new Error("You must provide a Formspree client");if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');var v=!!t.debug,b=t.data,g=function(){s(!1),c(!1),y([])},w=function(r){var n=N(r)?function(e){e.preventDefault();var t=e.target;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(r):r,o=function(e,t){n instanceof FormData?n.append(e,t):n=Object.assign(n,B({},e,t))};if("object"===O(b))for(var i in b)"function"===typeof b[i]?o(i,b[i].call(null)):o(i,b[i]);return s(!0),m.submitForm(e,n,{endpoint:t.endpoint,clientName:"@formspree/react@".concat(P)}).then((function(e){var t,r=e.response.status;return 200===r?(v&&console.log("Form submitted",e),c(!0),y([])):r>=400&&r<500?((t=e.body).errors&&y(t.errors),v&&console.log("Validation error",e),c(!1)):(v&&console.log("Unexpected error",e),c(!1)),e})).catch((function(e){throw v&&console.log("Unexpected error",e),c(!1),e})).finally((function(){s(!1)}))};return[{submitting:i,succeeded:l,errors:h},w,g]}},87559:function(e,t,r){var n;!function(o){"use strict";function i(e){var t=e&&e.Promise||o.Promise,r=e&&e.XMLHttpRequest||o.XMLHttpRequest,n=o;return function(){var e=Object.create(n,{fetch:{value:void 0,writable:!0}});return function(e){if(!e.fetch){var n="URLSearchParams"in e,o="Symbol"in e&&"iterator"in Symbol,i="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),s="FormData"in e,a="ArrayBuffer"in e;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=function(e){return e&&DataView.prototype.isPrototypeOf(e)},c=ArrayBuffer.isView||function(e){return e&&u.indexOf(Object.prototype.toString.call(e))>-1};m.prototype.append=function(e,t){e=h(e),t=y(t);var r=this.map[e];this.map[e]=r?r+","+t:t},m.prototype.delete=function(e){delete this.map[h(e)]},m.prototype.get=function(e){return e=h(e),this.has(e)?this.map[e]:null},m.prototype.has=function(e){return this.map.hasOwnProperty(h(e))},m.prototype.set=function(e,t){this.map[h(e)]=y(t)},m.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},m.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),p(e)},m.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),p(e)},m.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),p(e)},o&&(m.prototype[Symbol.iterator]=m.prototype.entries);var f=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];A.prototype.clone=function(){return new A(this,{body:this._bodyInit})},_.call(A.prototype),_.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new m(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var d=[301,302,303,307,308];x.redirect=function(e,t){if(-1===d.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})},e.Headers=m,e.Request=A,e.Response=x,e.fetch=function(e,n){return new t((function(t,o){var s=new A(e,n),a=new r;a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:S(a.getAllResponseHeaders()||"")};e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;t(new x(r,e))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&i&&(a.responseType="blob"),s.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),a.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))},e.fetch.polyfill=!0}function h(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function y(e){return"string"!==typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function m(e){this.map={},e instanceof m?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function v(e){if(e.bodyUsed)return t.reject(new TypeError("Already read"));e.bodyUsed=!0}function b(e){return new t((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function g(e){var t=new FileReader,r=b(t);return t.readAsArrayBuffer(e),r}function w(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"===typeof e)this._bodyText=e;else if(i&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(s&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(n&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(a&&i&&l(e))this._bodyArrayBuffer=w(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!a||!ArrayBuffer.prototype.isPrototypeOf(e)&&!c(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=w(e)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return t.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return t.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return t.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?v(this)||t.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=b(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return t.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return t.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(F)}),this.json=function(){return this.text().then(JSON.parse)},this}function A(e,t){var r=(t=t||{}).body;if(e instanceof A){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new m(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new m(t.headers)),this.method=function(e){var t=e.toUpperCase();return f.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function F(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function S(e){var t=new m;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t}function x(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new m(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!==typeof e?e:this),{fetch:e.fetch,Headers:e.Headers,Request:e.Request,Response:e.Response}}()}void 0===(n=function(){return i}.call(t,r,t,e))||(e.exports=n)}("undefined"!==typeof self?self:"undefined"!==typeof r.g?r.g:this)},87536:function(e,t,r){"use strict";r.d(t,{cI:function(){return _e}});var n=r(11720),o=e=>"checkbox"===e.type,i=e=>e instanceof Date,s=e=>null==e;const a=e=>"object"===typeof e;var u=e=>!s(e)&&!Array.isArray(e)&&a(e)&&!i(e),l=e=>u(e)&&e.target?o(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),f=e=>Array.isArray(e)?e.filter(Boolean):[],d=e=>void 0===e,h=(e,t,r)=>{if(!t||!u(e))return r;const n=f(t.split(/[,[\].]+?/)).reduce(((e,t)=>s(e)?e:e[t]),e);return d(n)||n===e?d(e[t])?r:e[t]:n};const y="blur",p="focusout",m="onBlur",v="onChange",b="onSubmit",g="onTouched",w="all",_="max",A="min",F="maxLength",S="minLength",x="pattern",V="required",D="validate";n.default.createContext(null);var E=(e,t,r,n=!0)=>{const o={};for(const i in e)Object.defineProperty(o,i,{get:()=>{const o=i;return t[o]!==w&&(t[o]=!n||w),r&&(r[o]=!0),e[o]}});return o},k=e=>u(e)&&!Object.keys(e).length,T=(e,t,r)=>{const{name:n,...o}=e;return k(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find((e=>t[e]===(!r||w)))},j=e=>Array.isArray(e)?e:[e];function O(e){const t=n.default.useRef(e);t.current=e,n.default.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var B=e=>"string"===typeof e,C=(e,t,r,n)=>{const o=Array.isArray(e);return B(e)?(n&&t.watch.add(e),h(r,e)):o?e.map((e=>(n&&t.watch.add(e),h(r,e)))):(n&&(t.watchAll=!0),r)},U=e=>"function"===typeof e,R=e=>{for(const t in e)if(U(e[t]))return!0;return!1};var P=(e,t,r,n,o)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:o||!0}}:{},N=e=>/^\w*$/.test(e),I=e=>f(e.replace(/["|']|\]/g,"").split(/\.|\[/));function L(e,t,r){let n=-1;const o=N(t)?[t]:I(t),i=o.length,s=i-1;for(;++n<i;){const t=o[n];let i=r;if(n!==s){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+o[n+1])?{}:[]}e[t]=i,e=e[t]}return e}const q=(e,t,r)=>{for(const n of r||Object.keys(e)){const r=h(e,n);if(r){const{_f:e,...n}=r;if(e&&t(e.name)){if(e.ref.focus&&d(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(n)&&q(n,t)}}};var M=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));var H="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function z(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(H&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;t=r?[]:{};for(const r in e){if(U(e[r])){t=e;break}t[r]=z(e[r])}}return t}function $(e,t){const r=N(t)?[t]:I(t),n=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=d(e)?n++:e[t[n++]];return e}(e,r),o=r[r.length-1];let i;n&&delete n[o];for(let s=0;s<r.slice(0,-1).length;s++){let t,n=-1;const o=r.slice(0,-(s+1)),a=o.length-1;for(s>0&&(i=e);++n<o.length;){const r=o[n];t=t?t[r]:e[r],a===n&&(u(t)&&k(t)||Array.isArray(t)&&!t.filter((e=>!d(e))).length)&&(i?delete i[r]:delete e[r]),i=t}}return e}function G(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var J=e=>s(e)||!a(e);function W(e,t){if(J(e)||J(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const o of r){const r=e[o];if(!n.includes(o))return!1;if("ref"!==o){const e=t[o];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!W(r,e):r!==e)return!1}}return!0}var Z=e=>({isOnSubmit:!e||e===b,isOnBlur:e===m,isOnChange:e===v,isOnAll:e===w,isOnTouch:e===g}),X=e=>"boolean"===typeof e,Y=e=>"file"===e.type,K=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Q=e=>"select-multiple"===e.type,ee=e=>"radio"===e.type,te=e=>K(e)&&e.isConnected;function re(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const n in e)Array.isArray(e[n])||u(e[n])&&!R(e[n])?(t[n]=Array.isArray(e[n])?[]:{},re(e[n],t[n])):s(e[n])||(t[n]=!0);return t}function ne(e,t,r){const n=Array.isArray(e);if(u(e)||n)for(const o in e)Array.isArray(e[o])||u(e[o])&&!R(e[o])?d(t)||J(r[o])?r[o]=Array.isArray(e[o])?re(e[o],[]):{...re(e[o])}:ne(e[o],s(t)?{}:t[o],r[o]):r[o]=!W(e[o],t[o]);return r}var oe=(e,t)=>ne(e,t,re(t));const ie={value:!1,isValid:!1},se={value:!0,isValid:!0};var ae=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!d(e[0].attributes.value)?d(e[0].value)||""===e[0].value?se:{value:e[0].value,isValid:!0}:se:ie}return ie},ue=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>d(e)?e:t?""===e||s(e)?NaN:+e:r&&B(e)?new Date(e):n?n(e):e;const le={isValid:!1,value:null};var ce=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),le):le;function fe(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return Y(t)?t.files:ee(t)?ce(e.refs).value:Q(t)?[...t.selectedOptions].map((({value:e})=>e)):o(t)?ae(e.refs).value:ue(d(t.value)?e.ref.value:t.value,e)}var de=e=>e instanceof RegExp,he=e=>d(e)?void 0:de(e)?e.source:u(e)?de(e.value)?e.value.source:e.value:e;function ye(e,t,r){const n=h(e,r);if(n||N(r))return{error:n,name:r};const o=r.split(".");for(;o.length;){const n=o.join("."),i=h(t,n),s=h(e,n);if(i&&!Array.isArray(i)&&r!==n)return{name:r};if(s&&s.type)return{name:n,error:s};o.pop()}return{name:r}}var pe=e=>B(e)||n.default.isValidElement(e);function me(e,t,r="validate"){if(pe(e)||Array.isArray(e)&&e.every(pe)||X(e)&&!e)return{type:r,message:pe(e)?e:"",ref:t}}var ve=e=>u(e)&&!de(e)?e:{value:e,message:""},be=async(e,t,r,n)=>{const{ref:i,refs:a,required:l,maxLength:c,minLength:f,min:d,max:h,pattern:y,validate:p,name:m,valueAsNumber:v,mount:b,disabled:g}=e._f;if(!b||g)return{};const w=a?a[0]:i,E=e=>{n&&w.reportValidity&&(w.setCustomValidity(X(e)?"":e||" "),w.reportValidity())},T={},j=ee(i),O=o(i),C=j||O,R=(v||Y(i))&&!i.value||""===t||Array.isArray(t)&&!t.length,N=P.bind(null,m,r,T),I=(e,t,r,n=F,o=S)=>{const s=e?t:r;T[m]={type:e?n:o,message:s,ref:i,...N(e?n:o,s)}};if(l&&(!C&&(R||s(t))||X(t)&&!t||O&&!ae(a).isValid||j&&!ce(a).isValid)){const{value:e,message:t}=pe(l)?{value:!!l,message:l}:ve(l);if(e&&(T[m]={type:V,message:t,ref:w,...N(V,t)},!r))return E(t),T}if(!R&&(!s(d)||!s(h))){let e,n;const o=ve(h),a=ve(d);if(s(t)||isNaN(t)){const r=i.valueAsDate||new Date(t);B(o.value)&&(e=r>new Date(o.value)),B(a.value)&&(n=r<new Date(a.value))}else{const r=i.valueAsNumber||+t;s(o.value)||(e=r>o.value),s(a.value)||(n=r<a.value)}if((e||n)&&(I(!!e,o.message,a.message,_,A),!r))return E(T[m].message),T}if((c||f)&&!R&&B(t)){const e=ve(c),n=ve(f),o=!s(e.value)&&t.length>e.value,i=!s(n.value)&&t.length<n.value;if((o||i)&&(I(o,e.message,n.message),!r))return E(T[m].message),T}if(y&&!R&&B(t)){const{value:e,message:n}=ve(y);if(de(e)&&!t.match(e)&&(T[m]={type:x,message:n,ref:i,...N(x,n)},!r))return E(n),T}if(p)if(U(p)){const e=me(await p(t),w);if(e&&(T[m]={...e,...N(D,e.message)},!r))return E(e.message),T}else if(u(p)){let e={};for(const n in p){if(!k(e)&&!r)break;const o=me(await p[n](t),w,n);o&&(e={...o,...N(n,o.message)},E(o.message),r&&(T[m]=e))}if(!k(e)&&(T[m]={ref:w,...e},!r))return T}return E(!0),T};const ge={mode:b,reValidateMode:v,shouldFocusError:!0};function we(e={}){let t,r={...ge,...e},n={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},a={},u=z(r.defaultValues)||{},m=r.shouldUnregister?{}:z(u),v={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},g=0,_={};const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},F={watch:G(),array:G(),state:G()},S=Z(r.mode),x=Z(r.reValidateMode),V=r.criteriaMode===w,D=async e=>{let t=!1;return A.isValid&&(t=r.resolver?k((await R()).errors):await P(a,!0),e||t===n.isValid||(n.isValid=t,F.state.next({isValid:t}))),t},E=(e,t,r,n)=>{const o=h(a,e);if(o){const i=h(m,e,d(r)?h(u,e):r);d(i)||n&&n.defaultChecked||t?L(m,e,t?i:fe(o._f)):re(e,i),v.mount&&D()}},T=(e,t,r,o,i)=>{let s=!1;const a={name:e},l=h(n.touchedFields,e);if(A.isDirty){const e=n.isDirty;n.isDirty=a.isDirty=N(),s=e!==a.isDirty}if(A.dirtyFields&&(!r||o)){const r=h(n.dirtyFields,e);W(h(u,e),t)?$(n.dirtyFields,e):L(n.dirtyFields,e,!0),a.dirtyFields=n.dirtyFields,s=s||r!==h(n.dirtyFields,e)}return r&&!l&&(L(n.touchedFields,e,r),a.touchedFields=n.touchedFields,s=s||A.touchedFields&&l!==r),s&&i&&F.state.next(a),s?a:{}},O=async(r,o,i,s)=>{const a=h(n.errors,r),u=A.isValid&&n.isValid!==o;var l;if(e.delayError&&i?(l=()=>((e,t)=>{L(n.errors,e,t),F.state.next({errors:n.errors})})(r,i),t=e=>{clearTimeout(g),g=window.setTimeout(l,e)},t(e.delayError)):(clearTimeout(g),t=null,i?L(n.errors,r,i):$(n.errors,r)),(i?!W(a,i):a)||!k(s)||u){const e={...s,...u?{isValid:o}:{},errors:n.errors,name:r};n={...n,...e},F.state.next(e)}_[r]--,A.isValidating&&!Object.values(_).some((e=>e))&&(F.state.next({isValidating:!1}),_={})},R=async e=>r.resolver?await r.resolver({...m},r.context,((e,t,r,n)=>{const o={};for(const i of e){const e=h(t,i);e&&L(o,i,e._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:n}})(e||b.mount,a,r.criteriaMode,r.shouldUseNativeValidation)):{},P=async(e,t,o={valid:!0})=>{for(const i in e){const s=e[i];if(s){const{_f:e,...i}=s;if(e){const i=await be(s,h(m,e.name),V,r.shouldUseNativeValidation);if(i[e.name]&&(o.valid=!1,t))break;t||(i[e.name]?L(n.errors,e.name,i[e.name]):$(n.errors,e.name))}i&&await P(i,t,o)}}return o.valid},N=(e,t)=>(e&&t&&L(m,e,t),!W(le(),u)),I=(e,t,r)=>{const n={...v.mount?m:d(t)?u:B(e)?{[e]:t}:t};return C(e,b,n,r)},re=(e,t,r={})=>{const n=h(a,e);let i=t;if(n){const r=n._f;r&&(!r.disabled&&L(m,e,ue(t,r)),i=H&&K(r.ref)&&s(t)?"":t,Q(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?o(r.ref)?r.refs.length>1?r.refs.forEach((e=>!e.disabled&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):Y(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||F.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&T(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&ae(e)},ne=(e,t,r)=>{for(const n in t){const o=t[n],s=`${e}.${n}`,u=h(a,s);!b.array.has(e)&&J(o)&&(!u||u._f)||i(o)?re(s,o,r):ne(s,o,r)}},ie=(e,t,r={})=>{const o=h(a,e),i=b.array.has(e),l=z(t);L(m,e,l),i?(F.array.next({name:e,values:m}),(A.isDirty||A.dirtyFields)&&r.shouldDirty&&(n.dirtyFields=oe(u,m),F.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:N(e,l)}))):!o||o._f||s(l)?re(e,l,r):ne(e,l,r),M(e,b)&&F.state.next({}),F.watch.next({name:e})},se=async e=>{const o=e.target;let i=o.name;const s=h(a,i);if(s){let c,f;const d=o.type?fe(s._f):l(e),v=e.type===y||e.type===p,g=!((u=s._f).mount&&(u.required||u.min||u.max||u.maxLength||u.minLength||u.pattern||u.validate))&&!r.resolver&&!h(n.errors,i)&&!s._f.deps||((e,t,r,n,o)=>!o.isOnAll&&(!r&&o.isOnTouch?!(t||e):(r?n.isOnBlur:o.isOnBlur)?!e:!(r?n.isOnChange:o.isOnChange)||e))(v,h(n.touchedFields,i),n.isSubmitted,x,S),w=M(i,b,v);L(m,i,d),v?(s._f.onBlur&&s._f.onBlur(e),t&&t(0)):s._f.onChange&&s._f.onChange(e);const A=T(i,d,v,!1),E=!k(A)||w;if(!v&&F.watch.next({name:i,type:e.type}),g)return E&&F.state.next({name:i,...w?{}:A});if(!v&&w&&F.state.next({}),_[i]=(_[i],1),F.state.next({isValidating:!0}),r.resolver){const{errors:e}=await R([i]),t=ye(n.errors,a,i),r=ye(e,a,t.name||i);c=r.error,i=r.name,f=k(e)}else c=(await be(s,h(m,i),V,r.shouldUseNativeValidation))[i],f=await D(!0);s._f.deps&&ae(s._f.deps),O(i,f,c,A)}var u},ae=async(e,t={})=>{let o,i;const s=j(e);if(F.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await R();if(e)for(const r of e){const e=h(t,r);e?L(n.errors,r,e):$(n.errors,r)}else n.errors=t;return t})(d(e)?e:s);o=k(t),i=e?!s.some((e=>h(t,e))):o}else e?(i=(await Promise.all(s.map((async e=>{const t=h(a,e);return await P(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||n.isValid)&&D()):i=o=await P(a);return F.state.next({...!B(e)||A.isValid&&o!==n.isValid?{}:{name:e},...r.resolver?{isValid:o}:{},errors:n.errors,isValidating:!1}),t.shouldFocus&&!i&&q(a,(e=>h(n.errors,e)),e?s:b.mount),i},le=e=>{const t={...u,...v.mount?m:{}};return d(e)?t:B(e)?h(t,e):e.map((e=>h(t,e)))},ce=(e,t)=>({invalid:!!h((t||n).errors,e),isDirty:!!h((t||n).dirtyFields,e),isTouched:!!h((t||n).touchedFields,e),error:h((t||n).errors,e)}),de=(e,t={})=>{for(const o of e?j(e):b.mount)b.mount.delete(o),b.array.delete(o),h(a,o)&&(t.keepValue||($(a,o),$(m,o)),!t.keepError&&$(n.errors,o),!t.keepDirty&&$(n.dirtyFields,o),!t.keepTouched&&$(n.touchedFields,o),!r.shouldUnregister&&!t.keepDefaultValue&&$(u,o));F.watch.next({}),F.state.next({...n,...t.keepDirty?{isDirty:N()}:{}}),!t.keepIsValid&&D()},pe=(e,t={})=>{let n=h(a,e);const i=X(t.disabled);return L(a,e,{_f:{...n&&n._f?n._f:{ref:{name:e}},name:e,mount:!0,...t}}),b.mount.add(e),n?i&&L(m,e,t.disabled?void 0:h(m,e,fe(n._f))):E(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:he(t.min),max:he(t.max),minLength:he(t.minLength),maxLength:he(t.maxLength),pattern:he(t.pattern)}:{},name:e,onChange:se,onBlur:se,ref:i=>{if(i){pe(e,t),n=h(a,e);const r=d(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,s=(e=>ee(e)||o(e))(r),l=n._f.refs||[];if(s?l.find((e=>e===r)):r===n._f.ref)return;L(a,e,{_f:{...n._f,...s?{refs:[...l.filter(te),r,...Array.isArray(h(u,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),E(e,!1,void 0,r)}else n=h(a,e,{}),n._f&&(n._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(b.array,e)||!v.action)&&b.unMount.add(e)}}};return{control:{register:pe,unregister:de,getFieldState:ce,_executeSchema:R,_getWatch:I,_getDirty:N,_updateValid:D,_removeUnmounted:()=>{for(const e of b.unMount){const t=h(a,e);t&&(t._f.refs?t._f.refs.every((e=>!te(e))):!te(t._f.ref))&&de(e)}b.unMount=new Set},_updateFieldArray:(e,t=[],r,o,i=!0,s=!0)=>{if(o&&r){if(v.action=!0,s&&Array.isArray(h(a,e))){const t=r(h(a,e),o.argA,o.argB);i&&L(a,e,t)}if(A.errors&&s&&Array.isArray(h(n.errors,e))){const t=r(h(n.errors,e),o.argA,o.argB);i&&L(n.errors,e,t),((e,t)=>{!f(h(e,t)).length&&$(e,t)})(n.errors,e)}if(A.touchedFields&&s&&Array.isArray(h(n.touchedFields,e))){const t=r(h(n.touchedFields,e),o.argA,o.argB);i&&L(n.touchedFields,e,t)}A.dirtyFields&&(n.dirtyFields=oe(u,m)),F.state.next({isDirty:N(e,t),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else L(m,e,t)},_getFieldArray:t=>f(h(v.mount?m:u,t,e.shouldUnregister?h(u,t,[]):[])),_subjects:F,_proxyFormState:A,get _fields(){return a},get _formValues(){return m},get _stateFlags(){return v},set _stateFlags(e){v=e},get _defaultValues(){return u},get _names(){return b},set _names(e){b=e},get _formState(){return n},set _formState(e){n=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:ae,register:pe,handleSubmit:(e,t)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let i=!0,s=z(m);F.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await R();n.errors=e,s=t}else await P(a);k(n.errors)?(F.state.next({errors:{},isSubmitting:!0}),await e(s,o)):(t&&await t({...n.errors},o),r.shouldFocusError&&q(a,(e=>h(n.errors,e)),b.mount))}catch(u){throw i=!1,u}finally{n.isSubmitted=!0,F.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:k(n.errors)&&i,submitCount:n.submitCount+1,errors:n.errors})}},watch:(e,t)=>U(e)?F.watch.subscribe({next:r=>e(I(void 0,t),r)}):I(e,t,!0),setValue:ie,getValues:le,reset:(t,r={})=>{const o=t||u,i=z(o),s=t&&!k(t)?i:u;if(r.keepDefaultValues||(u=o),!r.keepValues){if(r.keepDirtyValues)for(const e of b.mount)h(n.dirtyFields,e)?L(s,e,h(m,e)):ie(e,h(s,e));else{if(H&&d(t))for(const e of b.mount){const t=h(a,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{K(e)&&e.closest("form").reset();break}catch(l){}}}a={}}m=e.shouldUnregister?r.keepDefaultValues?z(u):{}:i,F.array.next({values:s}),F.watch.next({values:s})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},v.mount=!A.isValid||!!r.keepIsValid,v.watch=!!e.shouldUnregister,F.state.next({submitCount:r.keepSubmitCount?n.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?n.isDirty:!(!r.keepDefaultValues||W(t,u)),isSubmitted:!!r.keepIsSubmitted&&n.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?n.dirtyFields:r.keepDefaultValues&&t?oe(u,t):{},touchedFields:r.keepTouched?n.touchedFields:{},errors:r.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{h(a,e)&&(d(t.defaultValue)?ie(e,h(u,e)):(ie(e,t.defaultValue),L(u,e,t.defaultValue)),t.keepTouched||$(n.touchedFields,e),t.keepDirty||($(n.dirtyFields,e),n.isDirty=t.defaultValue?N(e,h(u,e)):N()),t.keepError||($(n.errors,e),A.isValid&&D()),F.state.next({...n}))},clearErrors:e=>{e?j(e).forEach((e=>$(n.errors,e))):n.errors={},F.state.next({errors:n.errors})},unregister:de,setError:(e,t,r)=>{const o=(h(a,e,{_f:{}})._f||{}).ref;L(n.errors,e,{...t,ref:o}),F.state.next({name:e,errors:n.errors,isValid:!1}),r&&r.shouldFocus&&o&&o.focus&&o.focus()},setFocus:(e,t={})=>{const r=h(a,e)._f,n=r.refs?r.refs[0]:r.ref;n.focus(),t.shouldSelect&&n.select()},getFieldState:ce}}function _e(e={}){const t=n.default.useRef(),[r,o]=n.default.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current={...we(e),formState:r};const i=t.current.control,s=n.default.useCallback((e=>{T(e,i._proxyFormState,!0)&&(i._formState={...i._formState,...e},o({...i._formState}))}),[i]);return O({subject:i._subjects.state,callback:s}),n.default.useEffect((()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),t.current.formState=E(r,i._proxyFormState),t.current}}}]);