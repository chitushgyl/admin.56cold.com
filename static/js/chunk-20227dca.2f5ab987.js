(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20227dca"],{"09f4":function(t,a,e){"use strict";e.d(a,"a",(function(){return l})),Math.easeInOutQuad=function(t,a,e,s){return t/=s/2,t<1?e/2*t*t+a:(t--,-e/2*(t*(t-2)-1)+a)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,a,e){var l=i(),o=t-l,r=20,c=0;a="undefined"===typeof a?500:a;var d=function t(){c+=r;var i=Math.easeInOutQuad(c,l,o,a);n(i),c<a?s(t):e&&"function"===typeof e&&e()};d()}},1:function(t,a){},2:function(t,a){},3:function(t,a){},"3a29":function(t,a,e){"use strict";e.d(a,"d",(function(){return i})),e.d(a,"f",(function(){return l})),e.d(a,"a",(function(){return o})),e.d(a,"e",(function(){return r})),e.d(a,"c",(function(){return c})),e.d(a,"g",(function(){return d})),e.d(a,"b",(function(){return p})),e.d(a,"h",(function(){return u}));var s=e("ade3"),n=e("b775");e("ba0f");function i(t){return Object(n["a"])({url:"/tms/dispatch/dispatchList",method:"get",params:t})}function l(t){var a;return Object(n["a"])((a={url:"/tms/dispatch/dispatchPage",method:"get"},Object(s["a"])(a,"method","post"),Object(s["a"])(a,"data",t),a))}function o(t){return Object(n["a"])({url:"/tms/dispatch/addDispatch",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/tms/dispatch/dispatchOrder",method:"post",data:{group_code:t}})}function c(t){return Object(n["a"])({url:"/tms/dispatch/details",method:"post",params:{self_id:t}})}function d(t){return Object(n["a"])({url:"/tms/dispatch/online",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/tms/dispatch/createDispatch",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/up/upload_img",method:"post",data:t})}},4:function(t,a){},5:function(t,a){},6:function(t,a){},6724:function(t,a,e){"use strict";e("8d41");var s="@@wavesContext";function n(t,a){function e(e){var s=Object.assign({},a.value),n=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},s),i=n.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var l=i.getBoundingClientRect(),o=i.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",i.appendChild(o)),n.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(e.pageY-l.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(e.pageX-l.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}}return t[s]?t[s].removeHandle=e:t[s]={removeHandle:e},e}var i={bind:function(t,a){t.addEventListener("click",n(t,a),!1)},update:function(t,a){t.removeEventListener("click",t[s].removeHandle,!1),t.addEventListener("click",n(t,a),!1)},unbind:function(t){t.removeEventListener("click",t[s].removeHandle,!1),t[s]=null,delete t[s]}},l=function(t){t.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(l)),i.install=l;a["a"]=i},"8d41":function(t,a,e){},9617:function(t,a,e){"use strict";e("e5b7")},aa77:function(t,a,e){var s=e("5ca1"),n=e("be13"),i=e("79e5"),l=e("fdef"),o="["+l+"]",r="​",c=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),p=function(t,a,e){var n={},o=i((function(){return!!l[t]()||r[t]()!=r})),c=n[t]=o?a(u):l[t];e&&(n[e]=c),s(s.P+s.F*o,"String",n)},u=p.trim=function(t,a){return t=String(n(t)),1&a&&(t=t.replace(c,"")),2&a&&(t=t.replace(d,"")),t};t.exports=p},c5f6:function(t,a,e){"use strict";var s=e("7726"),n=e("69a8"),i=e("2d95"),l=e("5dbc"),o=e("6a99"),r=e("79e5"),c=e("9093").f,d=e("11e9").f,p=e("86cc").f,u=e("aa77").trim,m="Number",_=s[m],f=_,h=_.prototype,v=i(e("2aeb")(h))==m,g="trim"in String.prototype,w=function(t){var a=o(t,!1);if("string"==typeof a&&a.length>2){a=g?a.trim():u(a,3);var e,s,n,i=a.charCodeAt(0);if(43===i||45===i){if(e=a.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(a.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+a}for(var l,r=a.slice(2),c=0,d=r.length;c<d;c++)if(l=r.charCodeAt(c),l<48||l>n)return NaN;return parseInt(r,s)}}return+a};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof _&&(v?r((function(){h.valueOf.call(e)})):i(e)!=m)?l(new f(w(a)),e,_):w(a)};for(var y,x=e("9e1e")?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)n(f,y=x[S])&&!n(_,y)&&p(_,y,d(f,y));_.prototype=h,h.constructor=_,e("2aba")(s,m,_)}},db91:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("详细信息")])]),t._v(" "),e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},[null!=t.form.group_name?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("所属公司：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.group_name))])])],1):t._e(),t._v(" "),null!=t.form.company_name?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("业务公司：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.company_name))])])],1):t._e()],1)],1),t._v(" "),e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},[null!=t.form.send_address?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"900",color:"#8c939d","margin-right":"5px"}},[t._v("发货地址：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.send_address))])])],1):t._e(),t._v(" "),null!=t.form.send_name||null!=t.form.send_tel?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"900",color:"#8c939d","margin-right":"5px"}},[t._v("联系方式：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.send_name)+" "+t._s(t.form.send_tel))])])],1):t._e()],1)],1),t._v(" "),e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},[null!=t.form.gather_address?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"900",color:"#8c939d","margin-right":"5px"}},[t._v("收货地址：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.gather_address))])])],1):t._e(),t._v(" "),null!=t.form.gather_name||null!=t.form.gather_tel?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"900",color:"#8c939d","margin-right":"5px"}},[t._v("联系方式：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.gather_name)+" "+t._s(t.form.gather_tel))])])],1):t._e()],1)],1),t._v(" "),e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},[null!=t.form.good_weight?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("货物重量：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.good_weight)+"kg")])])],1):t._e(),t._v(" "),null!=t.form.good_volume?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("货物体积：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.good_volume)+"m³")])])],1):t._e()],1)],1),t._v(" "),"N"==t.form.dispatch_flag||"Y"==t.form.on_line_flag?e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},["N"==t.form.dispatch_flag?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("状态：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s("N"==t.form.dispatch_flag?"已调度":"未调度"))])])],1):t._e(),t._v(" "),"Y"==t.form.on_line_flag?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("状态：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s("Y"==t.form.on_line_flag?"已上线":"未上线"))])])],1):t._e()],1)],1):t._e(),t._v(" "),"Y"==t.form.dispatch_flag&&"N"==t.form.on_line_flag?e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},[e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("调度状态：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s("N"==t.form.dispatch_flag?"已调度":"未调度"))])])],1),t._v(" "),e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("上线状态：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s("Y"==t.form.on_line_flag?"已上线":"未上线"))])])],1)],1)],1):t._e(),t._v(" "),e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},[null!=t.form.order_type?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("订单类型：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.order_type))])])],1):t._e()],1)],1)]),t._v(" "),null!=t.car_info?e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("调度信息")])]),t._v(" "),e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},[null!=t.form.group_name?e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"700",color:"#8c939d","margin-right":"5px"}},[t._v("所属公司：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.form.group_name))])])],1):t._e(),t._v(" "),e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"900",color:"#8c939d","margin-right":"5px"}},[t._v("车牌号：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.car_info.car_number))])])],1)],1)],1),t._v(" "),e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},[e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"900",color:"#8c939d","margin-right":"5px"}},[t._v("联系人：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.car_info.contacts))])])],1),t._v(" "),e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:12}},[e("el-col",{staticStyle:{"min-width":"90px"},attrs:{span:1}},[e("span",{staticStyle:{"font-weight":"900",color:"#8c939d","margin-right":"5px"}},[t._v("联系电话：")])]),t._v(" "),e("el-col",{attrs:{span:18}},[e("span",{staticClass:"name"},[t._v(t._s(t.car_info.tel))])])],1)],1)],1),t._v(" "),e("div",{staticStyle:{width:"100%","min-width":"1000px"}},[e("el-row",{staticClass:"span_title"},t._l(t.receipt,(function(t,a){return e("div",{key:a},[e("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.url,alt:""}})])})),0)],1)]):t._e(),t._v(" "),e("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"10px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v(" 货物详情")])]),t._v(" "),e("div",{staticClass:"text item"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"max-height":"500",border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{label:"货物名称","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return e("div",{staticClass:"flex-column"},[e("span",[t._v(t._s(s.good_name))])])}}])}),t._v(" "),e("el-table-column",{attrs:{label:"温控类型","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return e("div",{staticClass:"flex-column"},[e("span",[t._v(t._s(s.clod))])])}}])}),t._v(" "),e("el-table-column",{attrs:{label:"货物数量","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return e("div",{staticClass:"flex-column"},[e("span",[t._v(t._s(s.good_number)+"件")])])}}])}),t._v(" "),e("el-table-column",{attrs:{label:"货物体积","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return e("div",{staticClass:"flex-column"},[e("span",[t._v(t._s(s.good_volume)+"m³")])])}}])}),t._v(" "),e("el-table-column",{attrs:{label:"货物重量","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return e("div",{staticClass:"flex-column"},[e("span",[t._v(t._s(s.good_weight)+"kg")])])}}])})],1)],1)]),t._v(" "),"Y"==t.log_flag?e("el-card",{staticClass:"box-card"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("日志 显示最近 "+t._s(t.log_num)+" 条数据")]),t._v(" "),e("div",{staticClass:"text item"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.log_data,border:"",fit:"","highlight-current-row":""}},[e("el-table-column",{attrs:{label:"操作类型","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return e("div",{staticClass:"flex-column"},[e("span",[t._v(t._s(s.access_cause))])])}}],null,!1,3910070078)}),t._v(" "),e("el-table-column",{attrs:{label:"操作人及操作时间","class-name":"status-col","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return[e("span",[t._v(t._s(s.create_user_name)+" "+t._s(s.create_time))])]}}],null,!1,3497583665)}),t._v(" "),e("el-table-column",{attrs:{label:"状态","class-name":"status-col","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.row;return[e("span",[t._v(t._s(s.result))])]}}],null,!1,2358953197)})],1)],1)]):t._e(),t._v(" "),e("div",{staticStyle:{"text-align":"center","margin-left":"0","margin-top":"15px"}},[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.$router.go(-1)}}},[t._v("返回")])],1)],1)},n=[],i=e("3a29"),l=e("6724"),o=(e("c24f"),e("333d"),e("83d6"),{components:{},directives:{waves:l["a"]},data:function(){return{form:{},listLoading:!0,list:null,log_data:[],log_flag:"N",log_num:null,car_info:null,receipt:null}},created:function(){this.getList()},methods:{goBack:function(){this.$router.go(-1)},getList:function(){var t=this;this.self_id=this.$route.query.id,this.listLoading=!0,Object(i["c"])(this.self_id).then((function(a){null!=a.data.info&&(t.form=a.data.info,null!=t.form.receipt&&(t.receipt=t.form.receipt,console.log("this.receipt"+t.receipt))),a.data.info.car_info&&(t.car_info=a.data.info.car_info[0]),t.list=a.data.info.good_info_show,t.listLoading=!1,"Y"==a.data.log_flag&&(t.log_data=a.data.log_data,t.log_flag=a.data.log_flag,t.log_num=a.data.log_num)}))}}}),r=o,c=(e("9617"),e("2877")),d=Object(c["a"])(r,s,n,!1,null,null,null);a["default"]=d.exports},e5b7:function(t,a,e){},fdef:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);