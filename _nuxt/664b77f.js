(window.webpackJsonp=window.webpackJsonp||[]).push([[21,13],{144:function(t,e,r){"use strict";r.r(e);var l={props:{member:{type:Object,default:()=>({})}}},o=r(22),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"team-member col"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("p",{staticClass:"card-title"},[t._v("\n        "+t._s(t.member.name)+"\n      ")])]),t._v(" "),r("div",{staticClass:"list-group list-group-flush"},[r("div",{staticClass:"list-group-item specs"},[t._v(t._s(t.member.specs.join(", ")))]),t._v(" "),r("div",{staticClass:"list-group-item body"},[r("nuxt-content",{attrs:{document:t.member}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},157:function(t,e,r){"use strict";r.r(e);var l={asyncData:async({$content:t})=>({team:await t("nasz-zespol").sortBy("weight").fetch()}),data:()=>({team:{}}),head:()=>({title:"Nasz zespół"}),mounted(){this.$store.commit("SET_TITLE","Nasz zespół")}},o=r(22),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3"},t._l(t.team,(function(t){return r("TeamMember",{key:t.slug,attrs:{member:t}})})),1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("p",[t._v("Jesteśmy "),r("strong",[t._v("zespołem doświadczonych stomatologów")]),t._v(" w zakresie "),r("strong",[t._v("stomatologii zachowawczej, protetyki, chirurgii, ortodoncji i implantologii")]),t._v(". Naszą wiedzę poszerzamy regularnie na kursach i szkoleniach.")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-3"},[r("div",{staticClass:"col"},[r("h2",{staticClass:"header-underline"},[t._v("Poznaj nas")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TeamMember:r(144).default})}}]);