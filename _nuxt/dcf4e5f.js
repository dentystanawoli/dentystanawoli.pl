(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,5,6,7],{124:function(t,e,n){var map={"./ale-kanal.webp":125,"./aparat-ortodontyczny-samoligaturujacy.webp":126,"./brakujacy-zab.webp":127,"./implant-vs-most.webp":128,"./jama-ustna-nie-moze-byc-izolowana.webp":129,"./po-co-mi-pantomogram.webp":130,"./po-co-mi-pantomogram/zatrzymana-dziewiatka.webp":131,"./po-co-mi-pantomogram/zatrzymana-piatka-stala-obecna-piatka-mleczna.webp":132,"./po-co-mi-pantomogram/zmiany-okolowierzcholkowe-przy-zebach-po-leczeniu-kanalowym.webp":133,"./wplyw-stanu-jamy-ustnej-na-organizm-czyli-o-efekcie-motyla-w-naszym-ciele.webp":134,"./zalozenie-aparatu-jak-ugryzc.webp":135};function o(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=l,t.exports=o,o.id=124},125:function(t,e,n){t.exports=n.p+"img/ale-kanal.1e243c6.webp"},126:function(t,e,n){t.exports=n.p+"img/aparat-ortodontyczny-samoligaturujacy.b245fe1.webp"},127:function(t,e,n){t.exports=n.p+"img/brakujacy-zab.d61b916.webp"},128:function(t,e,n){t.exports=n.p+"img/implant-vs-most.bb4f529.webp"},129:function(t,e,n){t.exports=n.p+"img/jama-ustna-nie-moze-byc-izolowana.85c64b9.webp"},130:function(t,e,n){t.exports=n.p+"img/po-co-mi-pantomogram.893020b.webp"},131:function(t,e,n){t.exports=n.p+"img/zatrzymana-dziewiatka.55f0d5d.webp"},132:function(t,e,n){t.exports=n.p+"img/zatrzymana-piatka-stala-obecna-piatka-mleczna.5908121.webp"},133:function(t,e,n){t.exports=n.p+"img/zmiany-okolowierzcholkowe-przy-zebach-po-leczeniu-kanalowym.7084ecf.webp"},134:function(t,e,n){t.exports=n.p+"img/wplyw-stanu-jamy-ustnej-na-organizm-czyli-o-efekcie-motyla-w-naszym-ciele.e2d82f7.webp"},135:function(t,e,n){t.exports=n.p+"img/zalozenie-aparatu-jak-ugryzc.3c2e916.webp"},136:function(t,e,n){"use strict";n.r(e);var o={data:()=>({categories:{}}),async fetch(){const t=await this.$content("blog",{deep:!0}).sortBy("weight").only(["category"]).fetch();this.categories=[...new Set(t.map((t=>t.category)))]},fetchOnServer:!1},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-categories"},[n("h4",{staticClass:"header-underline"},[t._v("Kategorie")]),t._v(" "),n("ul",t._l(t.categories,(function(e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:"blog/kategoria/"+e.replace(/\s+/g,"-").toLowerCase()}},[t._v(t._s(e))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},137:function(t,e,n){"use strict";e.a={target:"static",head:{titleTemplate:"%s | Dentysta na Woli",htmlAttrs:{lang:"pl"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{name:"format-detection",content:"telephone=no"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]},messages:{error_404:"Nie znaleziono strony."},css:["@/assets/scss/theme/main.scss"],plugins:[],components:!0,buildModules:["@nuxtjs/eslint-module","@nuxtjs/stylelint-module","@nuxtjs/google-fonts",["@nuxt/image",{provider:"static"}],"nuxt-compress"],modules:["bootstrap-vue/nuxt","@nuxt/content","nuxt-content-git"],bootstrapVue:{bootstrapCSS:!1,bootstrapVueCSS:!1,components:["BContainer","BRow","BCol","BNavbar","BNavbarBrand","BNavbarToggle","BCollapse","BNavbarNav","BNavItem","BNavItemDropdown","BDropdownItem","BDropdownDivider","BNav","BIcon","BIconFacebook","BIconTelephoneFill","BIconMapFill","BIconEnvelopeFill","BIconClock"]},googleFonts:{display:"swap",families:{"Open+Sans":!0}},content:{blogPagination:5},build:{babel:{babelrc:!0,plugins:["@babel/plugin-proposal-optional-chaining"]}},generate:{dir:"public",fallback:"404.html"}}},140:function(t,e,n){"use strict";n.r(e);var o=n(15),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog-sidebar"},[e("BlogCategories")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogCategories:n(136).default})},153:function(t,e,n){"use strict";n.r(e);var o={props:{blog:{type:Object,default:()=>({})}},computed:{created(){return new Date(this.blog.createdAt).toLocaleDateString()}}},l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-teaser"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-md-6"},[o("nuxt-link",{attrs:{to:t.blog}},[o("img",{staticClass:"img-fluid",attrs:{alt:t.blog.title,src:n(124)("./"+t.blog.image)}})])],1),t._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("h3",{staticClass:"title"},[o("nuxt-link",{attrs:{to:t.blog}},[t._v(t._s(t.blog.title))])],1),t._v(" "),o("div",{staticClass:"teaser"},[o("nuxt-content",{attrs:{document:{body:t.blog.excerpt}}})],1),t._v(" "),o("div",{staticClass:"footer"},[o("span",{staticClass:"published"},[o("b-icon-clock",{attrs:{variant:"primary"}}),t._v(" "+t._s(t.created))],1),t._v(" "),o("span",{staticClass:"category float-right"},[t._v("Kategoria: "+t._s(t.blog.category))])])])])])}),[],!1,null,null,null);e.default=component.exports},154:function(t,e,n){"use strict";n.r(e);var o=n(137),l={props:{total:{type:Number,default:0},perPage:{type:Number,default:o.a.content.blogPagination||5}},computed:{totalPages(){return Math.ceil(this.total/this.perPage)},currentPage(){return parseInt(this.$route.params.page)||1},prevPage(){return this.currentPage>1?this.currentPage-1:1},nextPage(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},r=n(15),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"Nawigacja"}},[n("ul",{staticClass:"pagination justify-content-center"},[1===t.currentPage?n("li",{staticClass:"page-item disabled"},[n("span",{staticClass:"page-link"},[t._v("Pierwsza")])]):t._e(),t._v(" "),1!==t.currentPage?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:1}}}},[t._v("\n        Pierwsza\n      ")])],1):t._e(),t._v(" "),t.currentPage>2?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage-1}}}},[t._v("\n        "+t._s(t.currentPage-2)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage>1?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage-1}}}},[t._v("\n        "+t._s(t.currentPage-1)+"\n      ")])],1):t._e(),t._v(" "),n("li",{staticClass:"page-item active"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage}}}},[t._v("\n        "+t._s(t.currentPage)+"\n      ")])],1),t._v(" "),t.currentPage+1<=t.totalPages?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage+1}}}},[t._v("\n        "+t._s(t.currentPage+1)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage+2<=t.totalPages?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.currentPage+2}}}},[t._v("\n        "+t._s(t.currentPage+2)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage===t.totalPages?n("li",{staticClass:"page-item disabled"},[n("span",{staticClass:"page-link"},[t._v("\n        Ostatnia\n      ")])]):t._e(),t._v(" "),t.currentPage!==t.totalPages?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-strona-page",params:{page:t.totalPages}}}},[t._v("\n        Ostatnia\n      ")])],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports},162:function(t,e,n){"use strict";n.r(e);var o=n(137),l={async asyncData({$content:t,params:e,error:n}){const content=await(async(t,e,n)=>{const l=parseInt(e.page),r=o.a.content.blogPagination||5,c=await t("blog").fetch(),m=c.length,d=Math.ceil(m/r),v=m%r==0?r:m%r,f=await t("blog").sortBy("createdAt","desc").limit(r).skip(1===l?0:l===d?m-v:(l-1)*r).fetch();return 0!==l&&f.length?{allBlogs:c,paginatedBlogs:f}:n({statusCode:404,message:"Nie znaleziono strony!"})})(t,e,n);return{allBlogs:content.allBlogs,paginatedBlogs:content.paginatedBlogs}},data:()=>({allBlogs:{},paginatedBlogs:{}}),head:()=>({title:"Blog"}),mounted(){this.$store.commit("SET_TITLE","Blog")}},r=n(15),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-8 mb-100"},[t._l(t.paginatedBlogs,(function(t){return n("BlogTeaser",{key:t.slug,attrs:{blog:t}})})),t._v(" "),n("BlogPagination",{attrs:{total:t.allBlogs.length}})],2),t._v(" "),n("div",{staticClass:"col-12 col-lg-4"},[n("BlogSidebar")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogTeaser:n(153).default,BlogPagination:n(154).default,BlogSidebar:n(140).default})}}]);