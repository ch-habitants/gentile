(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{231:function(e,t,n){"use strict";n.r(t);n(36),n(27),n(49),n(30),n(50);var r=n(25),c=(n(35),n(51),n(52),n(53));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={computed:l(l({},Object(c.b)(["searchValue","gentiles"])),{},{filteredGentile:function(){var e=this;return this.gentiles.filter((function(t){return t.canton.includes(e.searchValue)||t.commune.includes(e.searchValue)||t.gentile.includes(e.searchValue)}))}})},O=n(42),component=Object(O.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",e._l(e.filteredGentile,(function(t,r){return n("tr",{key:r},[n("td",[e._v("\n            "+e._s(t.canton)+"\n        ")]),e._v(" "),n("td",[e._v("\n            "+e._s(t.commune)+"\n        ")]),e._v(" "),n("td",[e._v("\n            "+e._s(t.gentile)+"\n        ")])])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);