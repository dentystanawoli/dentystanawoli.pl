(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,4,7,8],{124:function(t,e,n){"use strict";e.a={target:"static",head:{titleTemplate:"%s | Dentysta na Woli",htmlAttrs:{lang:"pl"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{name:"format-detection",content:"telephone=no"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]},messages:{error_404:"Nie znaleziono strony."},css:["@/assets/scss/theme/main.scss"],plugins:[],components:!0,buildModules:["@nuxtjs/eslint-module","@nuxtjs/stylelint-module","@nuxtjs/google-fonts","nuxt-compress","@nuxt/image"],modules:["bootstrap-vue/nuxt","@nuxt/content"],bootstrapVue:{bootstrapCSS:!1,bootstrapVueCSS:!1,components:["BContainer","BRow","BCol","BNavbar","BNavbarBrand","BNavbarToggle","BCollapse","BNavbarNav","BNavItem","BNavItemDropdown","BDropdownItem","BDropdownDivider","BNav","BIcon","BIconFacebook","BIconTelephoneFill","BIconMapFill","BIconEnvelopeFill","BIconClock","BForm","BButton"]},googleFonts:{display:"swap",families:{"Open+Sans":!0}},content:{blogPagination:5},build:{babel:{babelrc:!0,plugins:["@babel/plugin-proposal-optional-chaining"]}},generate:{dir:"public",fallback:"404.html"}}},125:function(t,e,n){"use strict";n.r(e);var o={data:()=>({categories:{}}),async fetch(){const t=await this.$content("blog",{deep:!0}).sortBy("weight").only(["category"]).fetch();this.categories=[...new Set(t.map((t=>t.category)))]},fetchOnServer:!1},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-categories"},[n("h4",{staticClass:"header-underline"},[t._v("Kategorie")]),t._v(" "),n("ul",t._l(t.categories,(function(e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:"/blog/kategoria/"+e.replace(/\s+/g,"-").toLowerCase()+"/strona/1"}},[t._v(t._s(e))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},126:function(t,e,n){"use strict";n.r(e);var o=n(15),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog-sidebar"},[e("BlogCategories")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogCategories:n(125).default})},128:function(t,e,n){"use strict";n.r(e);var o={props:{blog:{type:Object,default:()=>({})}},computed:{created(){return new Date(this.blog.createdAt).toLocaleDateString()}}},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-teaser"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6"},[n("nuxt-link",{attrs:{to:t.blog}},[n("nuxt-img",{staticClass:"img-fluid",attrs:{alt:t.blog.title,src:"/images/blog/"+t.blog.image}})],1)],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6"},[n("h3",{staticClass:"title"},[n("nuxt-link",{attrs:{to:t.blog}},[t._v(t._s(t.blog.title))])],1),t._v(" "),n("div",{staticClass:"teaser"},[n("nuxt-content",{attrs:{document:{body:t.blog.excerpt}}})],1),t._v(" "),n("div",{staticClass:"footer"},[n("span",{staticClass:"published"},[n("b-icon-clock",{attrs:{variant:"primary"}}),t._v(" "+t._s(t.created))],1),t._v(" "),n("span",{staticClass:"category float-right"},[t._v("Kategoria: "+t._s(t.blog.category))])])])])])}),[],!1,null,null,null);e.default=component.exports},130:function(t,e,n){"use strict";var o=n(124);e.a=async(t,e,n)=>{const r=parseInt(e.page),l={};e.category&&(l.category={$regex:[e.category.replace("-"," "),"i"]});const c=o.a.content.blogPagination||5,d=await t("blog").where(l).fetch(),m=d.length,v=Math.ceil(m/c),y=m%c==0?c:m%c,_=await t("blog").sortBy("createdAt","desc").limit(c).skip(1===r?0:r===v?m-y:(r-1)*c).where(l).fetch();if(0===r||!_.length)return n({statusCode:404,message:"Nie znaleziono strony!"});return{allBlogs:d,paginatedBlogs:_,blogCategory:_[0].category}}},134:function(t,e,n){"use strict";n.r(e);var o=n(124),r={props:{total:{type:Number,default:0},perPage:{type:Number,default:o.a.content.blogPagination||5},category:{type:String,default:""}},computed:{totalPages(){return Math.ceil(this.total/this.perPage)},currentPage(){return parseInt(this.$route.params.page)||1},prevPage(){return this.currentPage>1?this.currentPage-1:1},nextPage(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},l=n(15),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"Nawigacja"}},[n("ul",{staticClass:"pagination justify-content-center"},[1===t.currentPage&&t.total>t.perPage?n("li",{staticClass:"page-item disabled"},[n("span",{staticClass:"page-link"},[t._v("Pierwsza")])]):t._e(),t._v(" "),1!==t.currentPage&&t.total>t.perPage?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-kategoria-category-strona-page",params:{category:t.category,page:1}}}},[t._v("\n        Pierwsza\n      ")])],1):t._e(),t._v(" "),t.currentPage>2?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-kategoria-category-strona-page",params:{category:t.category,page:t.currentPage-1}}}},[t._v("\n        "+t._s(t.currentPage-2)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage>1?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-kategoria-category-strona-page",params:{category:t.category,page:t.currentPage-1}}}},[t._v("\n        "+t._s(t.currentPage-1)+"\n      ")])],1):t._e(),t._v(" "),t.total>t.perPage?n("li",{staticClass:"page-item active"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-kategoria-category-strona-page",params:{category:t.category,page:t.currentPage}}}},[t._v("\n        "+t._s(t.currentPage)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage+1<=t.totalPages?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-kategoria-category-strona-page",params:{category:t.category,page:t.currentPage+1}}}},[t._v("\n        "+t._s(t.currentPage+1)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage+2<=t.totalPages?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-kategoria-category-strona-page",params:{category:t.category,page:t.currentPage+2}}}},[t._v("\n        "+t._s(t.currentPage+2)+"\n      ")])],1):t._e(),t._v(" "),t.currentPage===t.totalPages&&t.total>t.perPage?n("li",{staticClass:"page-item disabled"},[n("span",{staticClass:"page-link"},[t._v("\n        Ostatnia\n      ")])]):t._e(),t._v(" "),t.currentPage!==t.totalPages?n("li",{staticClass:"page-item"},[n("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"blog-kategoria-category-strona-page",params:{category:t.category,page:t.totalPages}}}},[t._v("\n        Ostatnia\n      ")])],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports},147:function(t,e,n){"use strict";n.r(e);var o=n(130),r={async asyncData({$content:t,params:e,error:n}){const content=await Object(o.a)(t,e,n);return{allBlogs:content.allBlogs,paginatedBlogs:content.paginatedBlogs,category:content.blogCategory}},data:()=>({allBlogs:{},paginatedBlogs:{},category:""}),head(){return{title:"Blog - "+this.category}},mounted(){this.$store.commit("SET_TITLE","Blog - "+this.category)}},l=n(15),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-8 mb-100"},[t._l(t.paginatedBlogs,(function(t){return n("BlogTeaser",{key:t.slug,attrs:{blog:t}})})),t._v(" "),n("BlogCategoryPagination",{attrs:{total:t.allBlogs.length,category:t.category}})],2),t._v(" "),n("div",{staticClass:"col-12 col-lg-4"},[n("BlogSidebar")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogTeaser:n(128).default,BlogCategoryPagination:n(134).default,BlogSidebar:n(126).default})}}]);