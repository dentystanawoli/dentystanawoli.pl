(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{124:function(t,e,n){"use strict";e.a={target:"static",head:{titleTemplate:"%s | Dentysta na Woli",htmlAttrs:{lang:"pl"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{name:"format-detection",content:"telephone=no"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]},messages:{error_404:"Nie znaleziono strony."},css:["@/assets/scss/theme/main.scss"],plugins:[],components:!0,buildModules:["@nuxtjs/eslint-module","@nuxtjs/stylelint-module","@nuxtjs/google-fonts","nuxt-compress","@nuxt/image"],modules:["bootstrap-vue/nuxt","@nuxt/content"],bootstrapVue:{bootstrapCSS:!1,bootstrapVueCSS:!1,components:["BContainer","BRow","BCol","BNavbar","BNavbarBrand","BNavbarToggle","BCollapse","BNavbarNav","BNavItem","BNavItemDropdown","BDropdownItem","BDropdownDivider","BNav","BIcon","BIconFacebook","BIconTelephoneFill","BIconMapFill","BIconEnvelopeFill","BIconClock","BForm","BButton"]},googleFonts:{display:"swap",families:{"Open+Sans":!0}},content:{blogPagination:5},build:{babel:{babelrc:!0,plugins:["@babel/plugin-proposal-optional-chaining"]}},generate:{dir:"public",fallback:"404.html"}}},133:function(t,e,n){"use strict";n.r(e);var r=n(124),l={props:{total:{type:Number,default:0},perPage:{type:Number,default:r.a.content.blogPagination||5}},computed:{totalPages(){return Math.ceil(this.total/this.perPage)},currentPage(){return parseInt(this.$route.params.page)||1},prevPage(){return this.currentPage>1?this.currentPage-1:1},nextPage(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"Nawigacja"}},[n("ul",{staticClass:"pagination justify-content-center"},[1===t.currentPage&&t.total>t.perPage?n("li",{staticClass:"page-item disabled"},[n("span",{staticClass:"page-link"},[t._v("Pierwsza")])]):t._e(),t._v(" "),1!==t.currentPage&&t.total>t.perPage?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:1}}}},[t._v("\n        Pierwsza\n      ")])],1):t._e(),t._v(" "),t.currentPage>2?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage-1}}}},[t._v("\n        "+t._s(t.currentPage-2)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage>1?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage-1}}}},[t._v("\n        "+t._s(t.currentPage-1)+"\n      ")])],1):t._e(),t._v(" "),t.total>t.perPage?n("li",{staticClass:"page-item active"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage}}}},[t._v("\n        "+t._s(t.currentPage)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage+1<=t.totalPages?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage+1}}}},[t._v("\n        "+t._s(t.currentPage+1)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage+2<=t.totalPages?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage+2}}}},[t._v("\n        "+t._s(t.currentPage+2)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage===t.totalPages&&t.total>t.perPage?n("li",{staticClass:"page-item disabled"},[n("span",{staticClass:"page-link"},[t._v("\n        Ostatnia\n      ")])]):t._e(),t._v(" "),t.currentPage!==t.totalPages?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.totalPages}}}},[t._v("\n        Ostatnia\n      ")])],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);