webpackJsonp([1,2],Array(32).concat([function(t,e){},function(t,e,n){n(116);var a=n(3)(n(83),n(132),null,null);t.exports=a.exports},function(t,e,n){n(114);var a=n(3)(n(84),n(130),null,null);t.exports=a.exports},function(t,e,n){n(118);var a=n(3)(n(85),n(134),null,null);t.exports=a.exports},function(t,e,n){n(120);var a=n(3)(n(87),n(136),null,null);t.exports=a.exports},function(t,e,n){n(121);var a=n(3)(n(89),n(137),null,null);t.exports=a.exports},function(t,e,n){n(115);var a=n(3)(n(90),n(131),null,null);t.exports=a.exports},function(t,e,n){n(122);var a=n(3)(n(91),n(138),null,null);t.exports=a.exports},function(t,e,n){n(123);var a=n(3)(n(92),n(139),null,null);t.exports=a.exports},function(t,e,n){n(117);var a=n(3)(n(93),n(133),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(128),i=n.n(a);e.default={name:"app",data:function(){return{show:!1,isActive:!1}},components:{Navigation:i.a}}},function(t,e){},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(64),i=n.n(a);e.default={data:function(){return{activities:[]}},mounted:function(){var t=this;i.a.get("static/api/activities.json").then(function(e){for(var n=e.data.activities,a=[],i=0;i<n.length;i++)n[i].pics[0].urls.length<=3?(a=n[i].pics[0].urls,n[i].pics=a):(a=n[i].pics[0].urls.slice(0,3),n[i].pics=a);t.activities=n})}}},function(t,e){},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sites:["kaleidoscope_BN","BONAPICS0819","Rabbit_950819","redballoon_95","Flawless_L0819"],siteValue:"",types:["预览","高清","官方图"],typeValue:"",dateValue:"",disableFutureDays:{disabledDate:function(t){return t.getTime()>Date.now()-864e5}}}}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(127),i=n.n(a);e.default={components:{Articles:i.a}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sites:["kaleidoscope_BN","BONAPICS0819","Rabbit_950819","redballoon_95","Flawless_L0819"],siteValue:"",types:["中字","饭拍","官方视频"],typeValue:"",dateValue:"",disableFutureDays:{disabledDate:function(t){return t.getTime()>Date.now()}}}}}},,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){n(113);var a=n(3)(n(86),n(129),null,null);t.exports=a.exports},function(t,e,n){n(119);var a=n(3)(n(88),n(135),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},t._l(t.activities,function(e){return n("el-card",{attrs:{"body-style":{padding:"2px"}}},[n("div",{staticStyle:{padding:"14px"}},[n("h3",[t._v(t._s(e.time+" "+e.name))]),t._v(" "),n("div",{staticClass:"bottom clearfix"},[n("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("更多")])],1)]),t._v(" "),n("div",{staticClass:"block"},[n("el-carousel",{attrs:{trigger:"click"}},t._l(e.pics,function(t){return n("el-carousel-item",[n("img",{staticClass:"image",attrs:{src:t}})])}))],1)])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("关于苞娜")]),t._v(" "),n("article",[n("h2",[t._v("基本信息")]),t._v(" "),n("p",[t._v("苞娜（Bona, 보나），本名金知妍（Kim Ji Yeon, 김지연），1995年8月19日出生于韩国大邱广域市达西区，身高:163cm，血型: A，星座: 狮子座，中韩联手于2016年2月25日推出的女子团体 宇宙少女 成员，宇宙少女队内分队 WONDER UNIT 成员，队内职务: 领舞、门面、副主唱。")])]),t._v(" "),n("article",[n("h2",[t._v("安利与科普")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://t.cn/Riff76W"}},[t._v("苞娜2016年唱歌合辑")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://t.cn/RifJl7i"}},[t._v("苞娜2016年说中文合辑（中首自制）")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://t.cn/Riff76Y"}},[t._v("《Nylon》2017年3月刊苞娜专访")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://t.cn/Riff76l"}},[t._v("2016.09.29 ETNEWS专访")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://t.cn/Riff76r"}},[t._v("2016年4月杂志专访")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://t.cn/Riff76n"}},[t._v("2016.03.26 UZZU 苞娜Q&A")])]),t._v(" "),n("li",[t._v("苞娜美颜合辑：360度无死角仙女每时每刻都是合辑")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("SNS")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"mobile-icon",attrs:{src:"static/menu.png"},on:{click:function(e){t.show=!t.show}}}),t._v(" "),n("transition",{attrs:{name:"sidebar"}},[t.show?n("div",{staticClass:"mobile-nav-div"},[t.show?n("nav",{staticClass:"mobile-nav",on:{click:function(e){t.show=!t.show}}},[n("Navigation")],1):t._e()]):t._e()]),t._v(" "),n("div",{attrs:{id:"banner"},on:{click:function(e){t.show=!1}}},[n("div",{attrs:{id:"banner-bg"}})]),t._v(" "),n("div",{attrs:{id:"main"},on:{click:function(e){t.show=!1}}},[n("div",{attrs:{id:"nav"}},[n("Navigation")],1),t._v(" "),n("div",{attrs:{id:"timeline"}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("视频")]),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{staticClass:"date-selector",attrs:{xs:12,sm:8}},[n("el-date-picker",{attrs:{type:"date",placeholder:"日期","picker-options":t.disableFutureDays},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}})],1),t._v(" "),n("el-col",{staticClass:"type-selector",attrs:{xs:12,sm:8}},[n("el-select",{attrs:{placeholder:"类型"},model:{value:t.typeValue,callback:function(e){t.typeValue=e},expression:"typeValue"}},t._l(t.types,function(t){return n("el-option",{attrs:{value:t}})}))],1),t._v(" "),n("el-col",{staticClass:"site-selector",attrs:{xs:12,sm:8}},[n("el-select",{attrs:{placeholder:"站子"},model:{value:t.siteValue,callback:function(e){t.siteValue=e},expression:"siteValue"}},t._l(t.sites,function(t){return n("el-option",{attrs:{value:t}})}))],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("关于我们")]),t._v(" "),n("article",[n("h2",[t._v("发展历程")]),t._v(" "),n("ul",[n("li",[t._v("2015.12.06，微博"),n("a",{attrs:{href:"http://weibo.com/u/5784287016"}},[t._v("@BONA苞娜中文首站")]),t._v(" 正式开通。")]),t._v(" "),n("li",[t._v("2016.03.14，宇宙少女出道后首次微访谈，我们被苞娜翻牌了。"),n("a",{attrs:{href:"http://t.cn/Riff76j"}},[t._v("详情点此")])]),t._v(" "),n("li",[t._v("2016.05.27-2016.05.30，宇宙少女全团来中国，参加上海的MCD，我们也积极参与了应援。"),n("a",{attrs:{href:"http://t.cn/Riff76O"}},[t._v("详情点此")])]),t._v(" "),n("li",[t._v("2016.08.19，苞娜出道后第一次生日，我们组织了"),n("a",{attrs:{href:"http://t.cn/Riff76R"}},[t._v("集资活动")]),t._v("。东西不多，经验也不是很足，但我们会继续努力。")]),t._v(" "),n("li",[t._v("2017.01.08，在我们的推动和粉丝们的帮助下，"),n("a",{attrs:{href:"http://weibo.com/p/100808a4da24c3849a648d01a7606d626822c4/super_index"}},[t._v("#苞娜#")]),t._v("超级话题正式开通。")]),t._v(" "),n("li",[t._v("2017.03.07，BONA苞娜中文首站的网站正式开放。")]),t._v(" "),n("p",[t._v("还有更多的未来等着我们抒写。")])])]),t._v(" "),n("article",[n("h2",[t._v("粉丝名")]),t._v(" "),n("span",[t._v("粉丝名(苞娜本人的选择)：花苞。")]),n("a",{attrs:{href:"http://t.cn/Riff76Q"}},[t._v("详情点此")]),n("br"),t._v(" "),n("img",{attrs:{src:"http://ww4.sinaimg.cn/mw690/006jshhSgw1fb2s2uw9s2j30qo0zkafl.jpg"}})]),t._v(" "),n("article",[n("h2",[t._v("运营")]),t._v(" "),n("h3",[t._v("关于招新：")]),t._v(" "),n("p",[t._v("我们工作组一直很缺人，所以各组别长期招新，有兴趣加入我们、为苞娜贡献自己一点力量的小伙伴可以"),n("a",{attrs:{href:"http://weibo.com/5784287016/Ez1G6agPV?from=page_1005055784287016_profile&wvr=6&mod=weibotime"}},[t._v("点这里")]),t._v("看详情。什么都不会可以教，只要你有心，态度好。")]),t._v(" "),n("h3",[t._v("粉丝QQ群：")]),t._v(" "),n("p",[t._v("群号586860412，也可通过扫码加入：")]),n("br"),t._v(" "),n("img",{attrs:{src:"http://wx1.sinaimg.cn/mw690/006jshhSgy1fd6giun8jqj30f00kkwhr.jpg"}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-col",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{theme:"dark"}},[n("router-link",{attrs:{to:"/timeline"}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("首页")])],1),t._v(" "),n("router-link",{attrs:{to:"/photos"}},[n("el-menu-item",{attrs:{index:"2"}},[t._v("图片")])],1),t._v(" "),n("router-link",{attrs:{to:"/videos"}},[n("el-menu-item",{attrs:{index:"3"}},[t._v("视频")])],1),t._v(" "),n("router-link",{attrs:{to:"/sns"}},[n("el-menu-item",{attrs:{index:"4"}},[t._v("SNS")])],1),t._v(" "),n("router-link",{attrs:{to:"/aboutBona"}},[n("el-menu-item",{attrs:{index:"5"}},[t._v("关于苞娜")])],1),t._v(" "),n("router-link",{attrs:{to:"/aboutUs"}},[n("el-menu-item",{attrs:{index:"6"}},[t._v("关于我们")])],1),t._v(" "),n("router-link",{attrs:{to:"/links"}},[n("el-menu-item",{attrs:{index:"7"}},[t._v("友情链接")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("友情链接")]),t._v(" "),n("ul",[n("li",[t._v("微博"),n("a",{attrs:{href:"http://weibo.com/u/5784287016"}},[t._v("@BONA苞娜中文首站")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://space.bilibili.com/70770210/"}},[t._v("B站")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("图片")]),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{staticClass:"date-selector",attrs:{xs:12,sm:8}},[n("el-date-picker",{attrs:{type:"date",placeholder:"日期","picker-options":t.disableFutureDays},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}})],1),t._v(" "),n("el-col",{staticClass:"type-selector",attrs:{xs:12,sm:8}},[n("el-select",{attrs:{placeholder:"类型"},model:{value:t.typeValue,callback:function(e){t.typeValue=e},expression:"typeValue"}},t._l(t.types,function(t){return n("el-option",{attrs:{value:t}})}))],1),t._v(" "),n("el-col",{staticClass:"site-selector",attrs:{xs:12,sm:8}},[n("el-select",{attrs:{placeholder:"站子"},model:{value:t.siteValue,callback:function(e){t.siteValue=e},expression:"siteValue"}},t._l(t.sites,function(t){return n("el-option",{attrs:{value:t}})}))],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Articles")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("h1",[t._v("更新日志")]),t._v(" "),n("article",[n("h2",[t._v("v1.1.0 （2017.03.15）")]),t._v(" "),n("ul",[n("li",[t._v("首页文章显示缩短，增加了“阅读全文”的按钮，同时设定每页显示5条，避免了首页信息流过长的问题")])])]),t._v(" "),n("article",[n("h2",[t._v("v1.0.1 （2017.03.15）")]),t._v(" "),n("ul",[n("li",[t._v("改变“目录”中的文章排列方式，现在可以正常按照时间排序了")]),t._v(" "),n("li",[t._v("“目录”中的上一页和下一页的显示现在正常了")]),t._v(" "),n("li",[t._v("增加了更新日志页面")]),t._v(" "),n("li",[t._v("增加了404页面")])])])])}]}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=n(33),r=n.n(i),s=n(42),l=n(34),o=n.n(l),c=n(39),u=n.n(c),v=n(37),_=n.n(v),f=n(41),p=n.n(f),d=n(35),h=n.n(d),m=n(36),x=n.n(m),b=n(40),w=n.n(b),y=n(38),k=n.n(y),g=n(31),R=n.n(g),V=n(32);n.n(V);a.default.use(s.a),a.default.use(R.a);var C=[{path:"/timeline",component:u.a},{path:"/photos",component:_.a},{path:"/videos",component:p.a},{path:"/aboutBona",component:o.a},{path:"/aboutUs",component:h.a},{path:"/links",component:x.a},{path:"/updateLog",component:w.a},{path:"/sns",component:k.a},{path:"/",redirect:"/timeline"}],E=new s.a({routes:C});new a.default({el:"#app",router:E,template:"<App/>",components:{App:r.a}})}]),[141]);
//# sourceMappingURL=app.6193ab3ac722a90914c9.js.map