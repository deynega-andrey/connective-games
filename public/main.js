!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t,o){"use strict";o.r(t),o.d(t,"createBalls",(function(){return n})),o.d(t,"addColor",(function(){return i})),o.d(t,"moveBalls",(function(){return c}));var r=o(1);const n=()=>({type:r.PAINT_BALLS}),i=()=>({type:r.ADD_COLOR}),c=e=>({type:r.MOVE_BALLS,amount:e})},function(e,t,o){"use strict";o.r(t),o.d(t,"PAINT_BALLS",(function(){return r})),o.d(t,"ADD_COLOR",(function(){return n})),o.d(t,"MOVE_BALLS",(function(){return i}));const r="CREATE_BALLS",n="ADD_COLOR",i="MOVE_BALLS"},function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return i}));const r=document.getElementById("canvas"),n=new PIXI.Application({view:r,width:510,height:510});class i{constructor({x:e,y:t,color:o}){this.x=e,this.y=t,this.colors=["blue","green","grey","orange","purple","red","yellow"],this.color=this.colors[o],this.init()}init(){this.paint()}paint(){const e=new PIXI.Texture.from(`img/${this.color}.png`),t=new PIXI.Sprite(e);t.x=50*this.x,t.y=50*this.y,n.stage.addChild(t)}}},function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return n}));var r=o(2);class n{constructor(){this.paint=e=>e.balls.forEach(e=>e.forEach(e=>new r.default(e))),this.moveBalls=e=>{let t,o,r,n,i,c,s,l;canvas.addEventListener("mousedown",e=>{i=e.pageX,c=e.pageY,t=Math.floor(e.pageX/50),o=Math.floor(e.pageY/50)}),canvas.addEventListener("mouseup",a=>{s=a.pageX,l=a.pageY,r=Math.floor(a.pageX/50),n=Math.floor(a.pageY/50),t===r&&o===n||e({downX:i,downY:c,upX:s,upY:l})})}}}},function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return c}));var r=o(5),n=o(6),i=o(0);class c{constructor(){this.createStore=()=>this.store=Object(r.default)(n.default),this.paint=()=>this.store.dispatch([Object(i.createBalls)(),Object(i.addColor)()]),this.getState=()=>this.store.getState(),this.subscribe=e=>this.store.subscribe(()=>e(this.getState())),this.moveBalls=e=>this.store.dispatch([Object(i.moveBalls)(e)]),this.init()}init(){this.createStore()}}},function(e,t,o){"use strict";o.r(t);t.default=e=>{let t;const o=[];return{getState:()=>t,dispatch:r=>{r.forEach(o=>t=e(o,t)),o.forEach(e=>e()),console.log("paint")},subscribe:e=>o.push(e)}}},function(e,t,o){"use strict";o.r(t);const r=(e,t,o,r)=>{let n=!0;return t>1&&r===e[t-1][o].color&&e[t-1][o].color===e[t-2][o].color&&(n=!1),o>1&&r===e[t][o-1].color&&e[t][o-1].color===e[t][o-2].color&&(n=!1),n},n={balls:[]};t.default=(e,t=n)=>{switch(e.type){case"CREATE_BALLS":let o=[];for(let e=0;e<10;e++){o[e]=[];for(let t=0;t<10;t++)o[e][t]={x:e,y:t}}return{...t,balls:o};case"ADD_COLOR":let n=[...t.balls];for(let e=0;e<10;e++)for(let t=0;t<10;t++)for(;;){let o=Math.floor(6*Math.random());if(r(n,e,t,o)){n[e][t].color=o;break}}return{...t,balls:n};case"MOVE_BALLS":let i=[...t.balls],{downX:c,downY:s,upX:l,upY:a}=e.amount,u=Math.floor(c/50),f=Math.floor(s/50);const d=u,h=f;let p=i[u][f].color;if(l-c==0&&a-s==0)return;if(Math.abs(c-l)>Math.abs(s-a))if(l>c&&u<7&&p===i[u+2][f].color&&p===i[u+3][f].color||f>1&&u<9&&p===i[u+1][f+1].color&&p===i[u+1][f+2].color||f>0&&u<9&&f<9&&p===i[u+1][f+1].color&&p===i[u+1][f-1].color||f<8&&u<9&&p===i[u+1][f-1].color&&p===i[u+1][f-2].color)u+=1;else{if(!(l<c&&u>2&&p===i[u-2][f].color&&p===i[u-3][f].color||f>1&&u>0&&p===i[u-1][f+1].color&&p===i[u-1][f+2].color||f>0&&f<9&&u>0&&p===i[u-1][f+1].color&&p===i[u-1][f-1].color||f<8&&u>0&&p===i[u-1][f-1].color&&p===i[u-1][f-2].color))return;u-=1}else if(a>s&&f<7&&p===i[u][f+2].color&&p===i[u][f+3].color||u>1&&f<9&&p===i[u-1][f+1].color&&p===i[u-2][f+1].color||u>0&&u<9&&f<9&&p===i[u-1][f+1].color&&p===i[u+1][f+1].color||u<8&&f<9&&p===i[u+1][f+1].color&&p===i[u+2][f+1].color)f+=1;else{if(!(a<s&&f>2&&p===i[u][f-2].color&&p===i[u][f-3].color||u>1&&f>0&&p===i[u-1][f-1].color&&p===i[u-2][f-1].color||u>0&&u<9&&f>0&&p===i[u-1][f-1].color&&p===i[u+1][f-1].color||u<8&&f>0&&p===i[u+1][f-1].color&&p===i[u+2][f-1].color))return;f-=1}let v=i[u][f].color;return i[u][f].color=i[d][h].color,i[d][h].color=v,{...t,balls:i};default:return t}}},function(e,t,o){var r;(r=o(8)).keys().forEach(r)},function(e,t,o){var r={"./components/ball.js":2,"./components/controller.js":9,"./components/model.js":4,"./components/view.js":3,"./index.js":7,"./redux/action-creators.js":0,"./redux/actions.js":1,"./redux/create-store.js":5,"./redux/reducer.js":6,"./style.scss":10};function n(e){var t=i(e);return o(t)}function i(e){if(!o.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id=8},function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return s}));var r=o(3),n=o(4);const i=new r.default,c=new n.default;class s{constructor(e,t){this.paint=()=>this.model.paint(),this.subscribe=()=>this.model.subscribe(this.view.paint),this.moveBalls=()=>this.view.moveBalls(this.model.moveBalls),this.model=t,this.view=e,this.init()}init(){this.subscribe(),this.paint(),this.moveBalls()}}new s(i,c)},function(e,t,o){var r=o(11),n=o(12);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(n,i);e.exports=n.locals||{}},function(e,t,o){"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),c=[];function s(e){for(var t=-1,o=0;o<c.length;o++)if(c[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},r=[],n=0;n<e.length;n++){var i=e[n],l=t.base?i[0]+t.base:i[0],a=o[l]||0,u="".concat(l," ").concat(a);o[l]=a+1;var f=s(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(c[f].references++,c[f].updater(d)):c.push({identifier:u,updater:b(d,t),references:1}),r.push(u)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var n=o.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,o,r){var n=o?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,n);else{var i=document.createTextNode(n),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function h(e,t,o){var r=o.css,n=o.media,i=o.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function b(e,t){var o,r,n;if(t.singleton){var i=v++;o=p||(p=a(t)),r=d.bind(null,o,i,!1),n=d.bind(null,o,i,!0)}else o=a(t),r=h.bind(null,o,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<o.length;r++){var n=s(o[r]);c[n].references--}for(var i=l(e,t),a=0;a<o.length;a++){var u=s(o[a]);0===c[u].references&&(c[u].updater(),c.splice(u,1))}o=i}}}},function(e,t,o){}]);