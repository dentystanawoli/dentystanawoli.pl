(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,6],{120:function(t,e,n){var map={"./ale-kanal.webp":121,"./aparat-ortodontyczny-samoligaturujacy.webp":122,"./brakujacy-zab.webp":123,"./implant-vs-most.webp":124,"./po-co-mi-pantomogram.webp":125,"./wplyw-stanu-jamy-ustnej-na-organizm-czyli-o-efekcie-motyla-w-naszym-ciele.webp":126,"./zalozenie-aparatu-jak-ugryzc.webp":127};function o(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=l,t.exports=o,o.id=120},121:function(t,e,n){t.exports=n.p+"img/ale-kanal.1e243c6.webp"},122:function(t,e,n){t.exports=n.p+"img/aparat-ortodontyczny-samoligaturujacy.b245fe1.webp"},123:function(t,e,n){t.exports=n.p+"img/brakujacy-zab.d61b916.webp"},124:function(t,e,n){t.exports=n.p+"img/implant-vs-most.bb4f529.webp"},125:function(t,e,n){t.exports=n.p+"img/po-co-mi-pantomogram.893020b.webp"},126:function(t,e,n){t.exports=n.p+"img/wplyw-stanu-jamy-ustnej-na-organizm-czyli-o-efekcie-motyla-w-naszym-ciele.e2d82f7.webp"},127:function(t,e,n){t.exports=n.p+"img/zalozenie-aparatu-jak-ugryzc.3c2e916.webp"},128:function(t,e,n){"use strict";n.r(e);var o={data:()=>({categories:{}}),async fetch(){const t=await this.$content("blog",{deep:!0}).sortBy("weight").only(["category"]).fetch();this.categories=[...new Set(t.map((t=>t.category)))]},fetchOnServer:!1},l=n(22),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-categories"},[n("h4",{staticClass:"header-underline"},[t._v("Kategorie")]),t._v(" "),n("ul",t._l(t.categories,(function(e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:"blog/kategoria/"+e.replace(/\s+/g,"-").toLowerCase()}},[t._v(t._s(e))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},132:function(t,e,n){"use strict";n.r(e);var o=n(22),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog-sidebar"},[e("BlogCategories")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogCategories:n(128).default})},159:function(t,e,n){"use strict";n.r(e);var o={async asyncData({$content:t,params:e}){const n=await t("blog",e.slug).fetch();return{blog:n,title:n.title}},data:()=>({blog:null,title:null}),head(){return{title:this.title}},mounted(){this.$store.commit("SET_TITLE",this.title)}},l=n(22),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-lg-8 mb-100"},[o("img",{staticClass:"img-fluid mb-5",attrs:{alt:t.blog.title,src:n(120)("./"+t.blog.image)}}),t._v(" "),o("nuxt-content",{attrs:{document:t.blog}})],1),t._v(" "),o("div",{staticClass:"col-12 col-lg-4"},[o("BlogSidebar")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogSidebar:n(132).default})}}]);