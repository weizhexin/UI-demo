(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{374:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},375:function(t,e,n){var r=n(27),i="["+n(374)+"]",a=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},376:function(t,e,n){"use strict";var r=n(1),i=n(375).trim;r({target:"String",proto:!0,forced:n(377)("trim")},{trim:function(){return i(this)}})},377:function(t,e,n){var r=n(2),i=n(374);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},384:function(t,e,n){},385:function(t,e,n){},386:function(t,e,n){},397:function(t,e,n){"use strict";var r=n(384);n.n(r).a},398:function(t,e,n){"use strict";var r=n(385);n.n(r).a},399:function(t,e,n){"use strict";var r=n(386);n.n(r).a},402:function(t,e,n){"use strict";n(113),n(81),n(114);var r={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"Gulusider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},i=(n(397),n(54)),a=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"2e5f7068",null);e.a=a.exports},403:function(t,e,n){"use strict";var r={name:"Gulusider",data:function(){return{visible:!0}}},i=(n(399),n(54)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()}),[],!1,null,"c4c01d6a",null);e.a=a.exports},404:function(t,e,n){"use strict";var r=n(54),i=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"d1d9f6a4",null);e.a=i.exports},405:function(t,e,n){"use strict";var r=n(54),i=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"5df174f1",null);e.a=i.exports},406:function(t,e,n){"use strict";n(398);var r=n(54),i=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"55b43fa8",null);e.a=i.exports},425:function(t,e,n){},476:function(t,e,n){"use strict";var r=n(425);n.n(r).a},501:function(t,e,n){"use strict";n.r(e);n(55),n(79),n(376);var r=n(402),i=n(404),a=n(405),s=n(406),u=n(403),c={components:{GLayout:r.a,GHeader:i.a,GFooter:a.a,GContent:s.a,GSider:u.a},data:function(){return{content:'\n      <g-layout style="color: white; margin-bottom:50px;">\n        <g-header style="height: 50px; background:lightskyblue;">\n          header\n        </g-header>\n        <g-content style="height: 100px; background:deepskyblue;">\n          content\n        </g-content>\n        <g-footer style="height: 50px; background:lightskyblue;">\n          footer\n        </g-footer>\n      </g-layout>\n  '.replace(/^ {8}/gm,"").trim()}}},o=(n(476),n(54)),l=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n            header\n        ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n            content\n        ")]),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n            footer\n        ")])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"08dcaf80",null);e.default=l.exports}}]);