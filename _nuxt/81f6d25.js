(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{125:function(t,e,l){"use strict";function o(t){return new Date(t.createdAt).toLocaleDateString()}l.d(e,"a",(function(){return o}))},129:function(t,e,l){"use strict";l.r(e);var o=l(125),c={props:{blog:{type:Object,default:()=>({})}},methods:{created:t=>Object(o.a)(t)}},n=l(15),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-teaser"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12 col-md-6"},[l("nuxt-link",{attrs:{to:t.blog}},[l("nuxt-img",{staticClass:"img-fluid",attrs:{alt:t.blog.title,src:"/images/blog/"+t.blog.image}})],1)],1),t._v(" "),l("div",{staticClass:"col-12 col-md-6"},[l("h3",{staticClass:"title"},[l("nuxt-link",{attrs:{to:t.blog}},[t._v(t._s(t.blog.title))])],1),t._v(" "),l("div",{staticClass:"teaser"},[l("nuxt-content",{attrs:{document:{body:t.blog.excerpt}}})],1),t._v(" "),l("div",{staticClass:"footer"},[l("span",{staticClass:"published"},[l("b-icon-clock",{attrs:{variant:"primary"}}),t._v(" "+t._s(t.created(t.blog)))],1),t._v(" "),l("span",{staticClass:"category float-right"},[t._v("Kategoria: "+t._s(t.blog.category))])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);