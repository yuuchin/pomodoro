(function(t){function e(e){for(var n,c,s=e[0],i=e[1],a=e[2],f=0,p=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(p.length)p.shift()();return u.push.apply(u,a||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(u.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},u=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var l=i;u.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,o=r("2b0e"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"center"},[r("p",[t._v("Cycles "+t._s(t.cycle))]),r("h1",[t._v("Hello Pomodoro")]),r("p",[t._v("Status: "+t._s(t.status))])]),r("h1",[t._v(t._s(Math.floor(t.timer/60))+":"+t._s(Math.floor(t.timer%60)))]),r("div",{staticClass:"center"},[r("button",{on:{click:function(e){return t.start()}}},[t._v("Start timer")]),r("button",{on:{click:function(e){return t.pause()}}},[t._v("Pause timer")]),r("button",{on:{click:function(e){return t.reset()}}},[t._v("Reset cycles")])])])])},c=[],s={name:"App",data:function(){return{timer:3,cycle:0,status:"study"}},methods:{start:function(){var t=this;this.stop(),n=setInterval((function(){0===t.timer?(t.pause(),t.cycle++,t.toggle(),t.restart(),t.start()):t.timer--}),1e3)},pause:function(){clearInterval(n)},reset:function(){this.restart(),this.cycle=0,this.status="study"},restart:function(){clearInterval(n),this.timer=3},toggle:function(){this.cycle%2===0?this.status="study":this.status="break"}}},i=s,a=(r("034f"),r("2877")),l=Object(a["a"])(i,u,c,!1,null,null,null),f=l.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.ede542a1.js.map