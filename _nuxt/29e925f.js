(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{314:function(t,e,r){"use strict";r.r(e);r(34),r(69),r(70),r(46),r(39);var n=r(28),c=(r(45),r(72),r(27),r(14),r(26),r(73),r(74),r(71));function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={computed:l(l({},Object(c.c)(["searchValue","selectedCanton","communes"])),{},{filteredCommunes:function(){var t=this;return this.communes.filter((function(e){var r=t.searchValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g,"").replace("-"," ");return e.canton.name_fr.includes(t.selectedCanton.name)&&(e.searchable_name.includes(r)||e.searchable_gentile.includes(r))}))}})},f=r(38),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"border rounded shadow overflow-x-auto"},[e("table",{staticClass:"w-full divide-y divide-gray-200"},[t._m(0),t._v(" "),e("tbody",t._l(t.filteredCommunes,(function(r,n){return e("tr",{key:n,staticClass:"hover:bg-gray-200 duration-300",class:{"bg-white":n%2==1,"bg-gray-50":n%2==0}},[e("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80"},[t._v("\n                        "+t._s(r.canton.name_fr)+"\n                    ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80"},[t._v("\n                        "+t._s(r.name_fr)+"\n                    ")]),t._v(" "),e("td",{staticClass:"px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-900 text-opacity-80"},[t._v("\n                        "+t._s(r.gentile_fr)+"\n                    ")])])})),0)])])])}),[function(){var t=this,e=t._self._c;return e("thead",{staticClass:"bg-gray-50"},[e("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-primary-900 text-opacity-60 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                    Canton\n                ")]),t._v(" "),e("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-primary-900 text-opacity-60 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                    Commune\n                ")]),t._v(" "),e("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-primary-900 text-opacity-60 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                    Gentile\n                ")])])}],!1,null,null,null);e.default=component.exports}}]);