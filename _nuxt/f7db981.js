(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{258:function(t,e,r){"use strict";r.r(e);r(42),r(31),r(59),r(34),r(60);var n=r(30),c=(r(41),r(11),r(24),r(75),r(61),r(62),r(63));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:l(l({},Object(c.b)(["searchValue","selectedCanton","gentiles"])),{},{filteredGentile:function(){var t=this;return this.gentiles.filter((function(e){function r(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g,"").replace("-"," ")}var n=r(t.searchValue);return e.canton.includes(t.selectedCanton)&&(r(e.commune).includes(n)||r(e.gentile).includes(n))}))}})},f=r(35),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"border rounded shadow overflow-x-auto"},[r("table",{staticClass:"w-full divide-y divide-gray-200"},[t._m(0),t._v(" "),r("tbody",t._l(t.filteredGentile,(function(e,n){return r("tr",{key:n,staticClass:"hover:bg-gray-200 duration-300",class:{"bg-white":n%2==1,"bg-gray-50":n%2==0}},[r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80"},[t._v("\n                        "+t._s(e.canton)+"\n                    ")]),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80"},[t._v("\n                        "+t._s(e.commune)+"\n                    ")]),t._v(" "),r("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80"},[t._v("\n                        "+t._s(e.gentile)+"\n                    ")])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"bg-gray-50"},[r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-primary-900 text-opacity-60 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                    Canton\n                ")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-primary-900 text-opacity-60 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                    Commune\n                ")]),t._v(" "),r("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-primary-900 text-opacity-60 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                    Gentile\n                ")])])}],!1,null,null,null);e.default=component.exports}}]);