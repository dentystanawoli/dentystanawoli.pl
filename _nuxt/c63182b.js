(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{125:function(t,e,l){"use strict";function n(t){return new Date(t.createdAt).toLocaleDateString()}l.d(e,"a",(function(){return n}))},138:function(t,e,l){"use strict";l.r(e);var n=l(125),c={props:{blogs:{type:Object,default:()=>({})}},methods:{created:t=>Object(n.a)(t)}},r=l(15),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container latest-blogs mb-5 mt-5"},[t._m(0),t._v(" "),l("div",{staticClass:"row"},t._l(t.blogs,(function(e){return l("div",{key:e.slug,staticClass:"col-12 col-md-6 col-lg-4 d-flex align-items-stretch"},[l("div",{staticClass:"latest-blog"},[l("nuxt-link",{attrs:{to:e}},[l("nuxt-img",{staticClass:"img-fluid",attrs:{alt:e.title,src:"/images/blog/"+e.image}})],1),t._v(" "),l("div",{staticClass:"blog-content"},[l("nuxt-link",{attrs:{to:e}},[l("h4",{staticClass:"blog-title"},[t._v(t._s(e.title))])]),t._v(" "),l("div",{staticClass:"blog-excerpt"},[l("nuxt-content",{attrs:{document:{body:e.excerpt}}})],1),t._v(" "),l("span",{staticClass:"published"},[l("b-icon-clock",{attrs:{variant:"primary"}}),t._v(" "+t._s(t.created(e)))],1)],1)],1)])})),0)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("h2",{staticClass:"text-center header-underline mb-3"},[t._v("Ostatnie wpisy na blogu")])])])}],!1,null,null,null);e.default=component.exports}}]);