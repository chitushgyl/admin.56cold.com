(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79043e60"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),Math.easeInOutQuad=function(t,e,a,s){return t/=s/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(t,e,a){var i=r(),o=t-i,l=20,c=0;e="undefined"===typeof e?500:e;var d=function t(){c+=l;var r=Math.easeInOutQuad(c,i,o,e);n(r),c<e?s(t):a&&"function"===typeof a&&a()};d()}},5e3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"table-header header-fixed"},[a("div",{staticClass:"flex-space-between table-title-container"},[a("div",[t._v(t._s(t.title))])])]),t._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:20}},[a("p",[t._v("订单信息")]),t._v(" "),a("el-col",{staticStyle:{border:"1px solid #ccc","border-radius":"5px",padding:"15px 10px"},attrs:{span:10}},[a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("订单编号：")]),t._v(t._s(t.order_info.order_sn))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("订单状态：")]),t._v(t._s(t.order_info.pay_status))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("购买时间：")]),t._v(t._s(t.order_info.create_time))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("购买人：")]),t._v(t._s(t.order_info.gather_name))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("联系方式：")]),t._v(t._s(t.order_info.gather_tel)+" ")]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("收货地址：")]),t._v(t._s(t.order_info.gather_address))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("所属公司：")]),t._v(t._s(t.order_info.group_name))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("商品总计：")]),t._v(t._s(t.order_info.money_goods/100))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("服务总计：")]),t._v(t._s(t.order_info.money_serves))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("活动优惠总计:")]),t._v(t._s(t.order_info.discounts_activity_total))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("全场券优惠总计：")]),t._v(t._s(t.order_info.discounts_all_total))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("单品券优惠总计：")]),t._v(t._s(t.order_info.discounts_single_total))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("订单总计：")]),t._v(t._s(t.order_info.money_freight))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("访问方式：")]),t._v(t._s(t.order_info.pay_way))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("支付方式：")]),t._v(t._s(t.order_info.pay_mode))]),t._v(" "),a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("支付时间：")]),t._v(t._s(t.order_info.pay_time))]),t._v(" "),a("div",[a("span",{staticClass:"span_title"},[a("strong",{staticClass:"swith"},[t._v("微信信息：")])]),t._v(" "),a("p",{staticStyle:{margin:"5px","padding-left":"120px"}},[a("el-avatar",{staticStyle:{width:"30px",height:"30px","border-radius":"30px",float:"left","margin-right":"5px"},attrs:{size:30,src:""}},[a("img",{attrs:{src:t.order_info.token_img}})]),t._v(" "),a("span",{staticStyle:{display:"inline-block",height:"30px","line-height":"30px",float:"left"}},[t._v(t._s(t.order_info.token_name))])],1)])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"商品信息"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.shop_order_list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"商品图片","min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return a("div",{staticClass:"flex-column"},[a("img",{staticStyle:{width:"25px",height:"25px"},attrs:{src:e.good_img,alt:""}})])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品名称","min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(s.good_title))])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"数量","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(s.number))])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"价格","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(s.price))])])}}])})],1)],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"物流信息"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.carriage,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"快递","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(s.deliver_company)+" "+t._s(s.deliver_company_sn))])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"时间","min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(s.create_time)+" ")])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(s.deliver_type))])])}}])})],1)],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"评价信息"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.evaluate,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"评价内容","min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(s.complain))])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"评价时间","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(s.create_time)+"   "+t._s(s.create_user_name))])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"订单那咋黄台","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(s.good_star_level))])])}}])})],1)],1)],1)],1)],1)],1)],1)],1)},n=[],r=a("dea0"),i=a("6724"),o=(a("333d"),{directives:{waves:i["a"]},data:function(){return{order_info:[],carriage:[],evaluate:[],shop_order_list:[],tableKey:0,listLoading:!0,title:null}},created:function(){var t=this;this.self_id=this.$route.query.self_id,Object(r["g"])(this.self_id).then((function(e){t.order_info=e.data.order_info,t.carriage=e.data.carriage,t.evaluate=e.data.evaluate,t.shop_order_list=e.data.shop_order_list,t.title="订单 "+t.order_info.order_sn+" 详情"}))},methods:{createData:function(){},handleFetchPv:function(t){var e=this;fetchPv(t).then((function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0}))},onSubmit:function(){var t=this;console.log(this.form),addCompany(this.form).then((function(e){t.$message({message:"线路添加成功！",type:"success",center:!0}),setTimeout((function(){t.$router.go(-1)}),1e3)}))}}}),l=o,c=(a("9a2b"),a("2877")),d=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=d.exports},"576f":function(t,e,a){},6724:function(t,e,a){"use strict";a("8d41");var s="@@wavesContext";function n(t,e){function a(a){var s=Object.assign({},e.value),n=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),r=n.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var i=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(i.width,i.height)+"px",r.appendChild(o)),n.type){case"center":o.style.top=i.height/2-o.offsetHeight/2+"px",o.style.left=i.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-i.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-i.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}}return t[s]?t[s].removeHandle=a:t[s]={removeHandle:a},a}var r={bind:function(t,e){t.addEventListener("click",n(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[s].removeHandle,!1),t.addEventListener("click",n(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[s].removeHandle,!1),t[s]=null,delete t[s]}},i=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(i)),r.install=i;e["a"]=r},"8d41":function(t,e,a){},"9a2b":function(t,e,a){"use strict";a("576f")},aa77:function(t,e,a){var s=a("5ca1"),n=a("be13"),r=a("79e5"),i=a("fdef"),o="["+i+"]",l="​",c=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),u=function(t,e,a){var n={},o=r((function(){return!!i[t]()||l[t]()!=l})),c=n[t]=o?e(_):i[t];a&&(n[a]=c),s(s.P+s.F*o,"String",n)},_=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},c5f6:function(t,e,a){"use strict";var s=a("7726"),n=a("69a8"),r=a("2d95"),i=a("5dbc"),o=a("6a99"),l=a("79e5"),c=a("9093").f,d=a("11e9").f,u=a("86cc").f,_=a("aa77").trim,f="Number",p=s[f],v=p,m=p.prototype,h=r(a("2aeb")(m))==f,g="trim"in String.prototype,w=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():_(e,3);var a,s,n,r=e.charCodeAt(0);if(43===r||45===r){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+e}for(var i,l=e.slice(2),c=0,d=l.length;c<d;c++)if(i=l.charCodeAt(c),i<48||i>n)return NaN;return parseInt(l,s)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof p&&(h?l((function(){m.valueOf.call(a)})):r(a)!=f)?i(new v(w(e)),a,p):w(e)};for(var b,y=a("9e1e")?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)n(v,b=y[C])&&!n(p,b)&&u(p,b,d(v,b));p.prototype=m,m.constructor=p,a("2aba")(s,f,p)}},dea0:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"f",(function(){return r})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o})),a.d(e,"g",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return d}));var s=a("b775");function n(t){return Object(s["a"])({url:"/order/order/orderList",method:"get",params:t})}function r(t){return Object(s["a"])({url:"/order/order/orderPage",method:"get",params:t})}function i(t){return Object(s["a"])({url:"/order/order/createDeliver",method:"post",data:{self_id:t}})}function o(t){return Object(s["a"])({url:"/order/order/addDeliver",method:"get",params:t})}function l(t){return Object(s["a"])({url:"/order/order/orderDetails",params:{self_id:t}})}function c(t){return Object(s["a"])({url:"/order/order/addOrder",params:t})}function d(t){return Object(s["a"])({url:"/order/order/createOrder",params:{self_id:t}})}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);