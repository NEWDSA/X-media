(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17667fed"],{"0ee1":function(t,e,a){"use strict";var i=a("dd32"),n=a.n(i);n.a},3698:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("x-note",{attrs:{type:"info"}},[a("h3",[t._v("本页三级路由开启了缓存，但是二级路由关闭了缓存，切换左侧导航，你的录入数据会消失")])]),t._v(" "),a("el-radio-group",{on:{change:t.to},model:{value:t.activePath,callback:function(e){t.activePath=e},expression:"activePath"}},[a("el-radio",{attrs:{label:"/order/list/toutiao",border:""}},[t._v("头条")]),t._v(" "),a("el-radio",{attrs:{label:"/order/list/baijiahao",border:""}},[t._v("百家号")]),t._v(" "),a("el-radio",{attrs:{label:"/order/list/weibo",border:""}},[t._v("微博")])],1),t._v(" "),a("el-card",{staticStyle:{"margin-top":"20px"}},[a("keep-alive",{attrs:{include:t.cachedViews}},[a("router-view",{staticClass:"x-two-router-view"})],1)],1)],1)},n=[],r=(a("c041"),a("ae5b")),o=a("7a78"),c={name:"OrderList",components:{XNote:r["a"]},mixins:[o["a"]],data:function(){return{activePath:"/order/list/toutiao"}},activated:function(){this.activePath&&this.$router.replace(this.activePath)},methods:{to:function(t){this.$router.push(t)}}},s=c,u=a("4e82"),d=Object(u["a"])(s,i,n,!1,null,null,null);e["default"]=d.exports},"7a78":function(t,e,a){"use strict";a("bada"),a("e6d1"),a("7cfd");e["a"]={data:function(){return{cachedViews:[]}},watch:{$route:function(){this.updateCachedView()}},created:function(){var t=this.$route.meta;t&&t.activeMenu&&!t.parentNoCache&&this.$store.dispatch("common/addTwoCachedView",{name:t.activeMenu,meta:{noCache:t.parentNoCache}}),this.updateCachedView()},methods:{updateCachedView:function(){var t=this.$route,e=t.name,a=t.meta,i=t.path;if(a&&!a.noCache&&3===i.split("").filter((function(t){return"/"===t})).length){var n=this.cachedViews.find((function(t){return t===e}));n||this.cachedViews.push(e)}}}}},ae5b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["x-note","x-note-"+t.type]},[a("p",[t._t("default")],2)])},n=[],r={name:"XNote",props:{type:{type:String,default:"primary"}}},o=r,c=(a("0ee1"),a("4e82")),s=Object(c["a"])(o,i,n,!1,null,null,null);e["a"]=s.exports},dd32:function(t,e,a){}}]);