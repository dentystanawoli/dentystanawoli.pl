(window.webpackJsonp=window.webpackJsonp||[]).push([[23,12],{129:function(t,e,c){"use strict";c.r(e);var r={props:{service:{type:Object,default:()=>({})}}},n=c(15),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"service-card col"},[c("div",{staticClass:"card"},[c("nuxt-img",{staticClass:"card-img-top",attrs:{src:"/images/oferta/"+t.service.slug+".svg",alt:t.service.title,width:"112",height:"112"}}),t._v(" "),c("div",{staticClass:"card-header"},[c("h5",{staticClass:"text-center"},[t._v("\n        "+t._s(t.service.title)+"\n      ")])]),t._v(" "),c("div",{staticClass:"card-body text-center"},[c("nuxt-link",{staticClass:"btn btn-primary text-white",attrs:{to:"/oferta/"+t.service.slug}},[t._v("Dowiedz się więcej")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports},142:function(t,e,c){"use strict";c.r(e);var r={asyncData:async({$content:t})=>({services:await t("oferta").sortBy("weight").fetch()}),data:()=>({services:{}}),head:()=>({title:"Oferta"}),mounted(){this.$store.commit("SET_TITLE","Oferta")}},n=c(15),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),c("div",{staticClass:"row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3"},t._l(t.services,(function(t){return c("ServiceCard",{key:t.slug,attrs:{service:t}})})),1)])}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"row"},[c("div",{staticClass:"col"},[c("h3",[t._v("Wykonujemy zabiegi medyczne w pełnym zakresie stomatologii dla dzieci i dorosłych")]),t._v(" "),c("p",[t._v("Istniejemy od ponad 10 lat, przez cały ten czas dbając o zdrowie i uśmiech naszych Pacjentów na warszawskiej Woli. Naszym atutem jest wspaniała atmosfera i fachowa opieka.")]),t._v(" "),c("p",[t._v("W naszej Klinice stomatologicznej korzystamy z nowoczesnej technologii, sprzętu medyczno - diagnostycznego i materiałów na wysokim poziomie.")])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"row"},[c("div",{staticClass:"col"},[c("h2",{staticClass:"mt-5 mb-5 header-underline"},[t._v("Nasze usługi")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ServiceCard:c(129).default})}}]);