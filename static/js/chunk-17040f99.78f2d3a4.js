(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17040f99"],{"05c9":function(e,t,o){"use strict";o("bc7a")},"09f4":function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),Math.easeInOutQuad=function(e,t,o,n){return e/=n/2,e<1?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function a(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(e,t,o){var i=r(),s=e-i,l=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=l;var r=Math.easeInOutQuad(c,i,s,t);a(r),c<t?n(e):o&&"function"===typeof o&&o()};u()}},6724:function(e,t,o){"use strict";o("8d41");var n="@@wavesContext";function a(e,t){function o(o){var n=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=a.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var i=r.getBoundingClientRect(),s=r.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(i.width,i.height)+"px",r.appendChild(s)),a.type){case"center":s.style.top=i.height/2-s.offsetHeight/2+"px",s.style.left=i.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(o.pageY-i.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(o.pageX-i.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=a.color,s.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=o:e[n]={removeHandle:o},o}var r={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},i=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(i)),r.install=i;t["a"]=r},"6bcc":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-card",{staticClass:"box-card",staticStyle:{"min-width":"1000px"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("div",{staticStyle:{"font-weight":"bold"}},[e._v("详情信息\n      ")])]),e._v(" "),o("el-form",{ref:"form",staticStyle:{"margin-top":"10px","min-width":"1000px",height:"730px"},attrs:{model:e.form,"label-width":"150px",rules:e.rules}},[o("el-row",{staticStyle:{"text-align":"center",width:"50%",margin:"auto"}},[o("el-form-item",{staticStyle:{"margin-right":"10px"},attrs:{label:"落地配城市",prop:"group_code"}},[o("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"全国",clearable:""},on:{change:e.onProChanged},model:{value:e.listQuery.pro,callback:function(t){e.$set(e.listQuery,"pro",t)},expression:"listQuery.pro"}},e._l(e.proOptions,(function(e){return o("el-option",{key:e.self_id,attrs:{label:e.code_name,value:e.self_id}})})),1),e._v(" "),o("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"全市",clearable:""},on:{change:e.onCityChanged},model:{value:e.listQuery.city,callback:function(t){e.$set(e.listQuery,"city",t)},expression:"listQuery.city"}},e._l(e.cityOptions,(function(e){return o("el-option",{key:e.self_id,attrs:{label:e.code_name,value:e.self_id}})})),1),e._v(" "),o("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},attrs:{placeholder:"全区",clearable:""},model:{value:e.listQuery.area,callback:function(t){e.$set(e.listQuery,"area",t)},expression:"listQuery.area"}},e._l(e.areaOptions,(function(e){return o("el-option",{key:e.self_id,attrs:{label:e.code_name,value:e.self_id}})})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:"起步价格",prop:"company_id"}},[o("el-input",{attrs:{placeholder:"请输入起步价格",readonly:null!=e.form.self_id},model:{value:e.form.external_sku_id,callback:function(t){e.$set(e.form,"external_sku_id",t)},expression:"form.external_sku_id"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"最高价格",prop:"external_sku_id"}},[o("el-input",{attrs:{placeholder:"请输入最高价格",readonly:null!=e.form.self_id},model:{value:e.form.external_sku_id,callback:function(t){e.$set(e.form,"external_sku_id",t)},expression:"form.external_sku_id"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"超出起步价单价",prop:"good_name"}},[o("el-input",{attrs:{placeholder:"请输入超出起步价单价"},model:{value:e.form.good_name,callback:function(t){e.$set(e.form,"good_name",t)},expression:"form.good_name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"起步件数",prop:"good_english_name"}},[o("el-input",{attrs:{placeholder:"请输入起步件数"},model:{value:e.form.good_english_name,callback:function(t){e.$set(e.form,"good_english_name",t)},expression:"form.good_english_name"}})],1)],1),e._v(" "),o("el-form-item",{staticStyle:{"text-align":"center","margin-left":"0"}},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消\n        ")])],1)],1)],1)],1)},a=[],r=o("ef4e"),i=o("6724"),s=o("c24f"),l=(o("333d"),{components:{},directives:{waves:i["a"]},data:function(){return{form:{good_name:"",good_english_name:"",wms_length:null,wms_wide:null,wms_high:null,wms_weight:null,wms_scale:null,wms_spec:null,wms_out_unit:"",wms_target_unit:"",wms_unit:"",company_id:"",group_code:"",external_sku_id:"",period_value:null,period:null},disabled:!1,groupOption:[],companyOption:[],packOption:[],periodOption:[],rules:{group_code:[{required:!0,message:"请选择公司",trigger:"change"}],company_id:[{required:!0,message:"请选择业务公司",trigger:"change"}],external_sku_id:[{required:!0,message:"请输入商品编号",trigger:"blur"}],good_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],wms_unit:[{required:!0,message:"请选择最小单位",trigger:"change"}]},listQuery:{page:1,num:10,group_name:void 0,name:void 0,tel:void 0,use_flag:void 0,pro:void 0,city:void 0,area:void 0}}},created:function(){this.getList(),this.getGroup()},methods:{getList:function(){var e=this;this.self_id=this.$route.query.id,this.listLoading=!0,Object(r["b"])(this.self_id).then((function(t){e.periodOption=t.data.period,null!=t.data.info&&(e.form.group_code=t.data.info.group_code,e.form.company_name=t.data.info.company_name,e.form.company_id=t.data.info.company_id,e.form.good_name=t.data.info.good_name,e.form.wms_length=t.data.info.wms_length,e.form.group_name=t.data.info.group_name,e.form.wms_length=t.data.info.wms_length,e.form.wms_high=t.data.info.wms_high,e.form.wms_weight=t.data.info.wms_weight,e.form.wms_wide=t.data.info.wms_wide,e.form.self_id=t.data.info.self_id,e.form.wms_scale=t.data.info.wms_scale,e.form.wms_spec=t.data.info.wms_spec,e.form.wms_out_unit=t.data.info.wms_out_unit,e.form.wms_target_unit=t.data.info.wms_target_unit,e.form.wms_unit=t.data.info.wms_unit,e.form.external_sku_id=t.data.info.external_sku_id,e.form.period_value=t.data.info.period_value,e.form.period=t.data.info.period,e.getCompany2(e.form.group_code),e.getPack2(e.form.group_code))}))},getGroup:function(){var e=this;Object(s["l"])().then((function(t){e.groupOption=t.data.items}))},getCompany:function(){var e=this;Object(s["h"])(this.form.group_code).then((function(t){e.form.company_id="",e.companyOption=t.data.info,e.form.wms_target_unit="",e.form.wms_unit=""}))},getPack:function(){var e=this;Object(s["n"])(this.form.group_code).then((function(t){e.packOption=t.data.info,e.form.wms_target_unit="",e.form.wms_unit=""}))},getCompany2:function(){var e=this;Object(s["h"])(this.form.group_code).then((function(t){e.companyOption=t.data.info}))},getPack2:function(){var e=this;Object(s["n"])(this.form.group_code).then((function(t){e.packOption=t.data.info}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.temp.id=parseInt(100*Math.random())+1024,e.temp.author="vue-element-admin",createArticle(e.form).then((function(){e.list.unshift(e.form),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleFetchPv:function(e){var t=this;fetchPv(e).then((function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0}))},onSubmit:function(){var e=this;Object(r["a"])(this.form).then((function(t){e.$message({message:t.msg,type:"success",center:!0}),setTimeout((function(){e.$router.go(-1)}),1e3)}))}}}),c=l,u=(o("05c9"),o("2877")),d=Object(u["a"])(c,n,a,!1,null,null,null);t["default"]=d.exports},"8d41":function(e,t,o){},aa77:function(e,t,o){var n=o("5ca1"),a=o("be13"),r=o("79e5"),i=o("fdef"),s="["+i+"]",l="​",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(e,t,o){var a={},s=r((function(){return!!i[e]()||l[e]()!=l})),c=a[e]=s?t(f):i[e];o&&(a[o]=c),n(n.P+n.F*s,"String",a)},f=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},bc7a:function(e,t,o){},c5f6:function(e,t,o){"use strict";var n=o("7726"),a=o("69a8"),r=o("2d95"),i=o("5dbc"),s=o("6a99"),l=o("79e5"),c=o("9093").f,u=o("11e9").f,d=o("86cc").f,f=o("aa77").trim,m="Number",p=n[m],g=p,_=p.prototype,h=r(o("2aeb")(_))==m,v="trim"in String.prototype,w=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():f(t,3);var o,n,a,r=t.charCodeAt(0);if(43===r||45===r){if(o=t.charCodeAt(2),88===o||120===o)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,l=t.slice(2),c=0,u=l.length;c<u;c++)if(i=l.charCodeAt(c),i<48||i>a)return NaN;return parseInt(l,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof p&&(h?l((function(){_.valueOf.call(o)})):r(o)!=m)?i(new g(w(t)),o,p):w(t)};for(var b,y=o("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)a(g,b=y[x])&&!a(p,b)&&d(p,b,u(g,b));p.prototype=_,_.constructor=p,o("2aba")(n,m,p)}},ef4e:function(e,t,o){"use strict";o.d(t,"g",(function(){return a})),o.d(t,"h",(function(){return r})),o.d(t,"a",(function(){return i})),o.d(t,"i",(function(){return s})),o.d(t,"d",(function(){return l})),o.d(t,"b",(function(){return c})),o.d(t,"f",(function(){return u})),o.d(t,"e",(function(){return d})),o.d(t,"c",(function(){return f}));var n=o("b775");function a(e){return Object(n["a"])({url:"/wms/good/goodList",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/wms/good/goodPage",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/wms/good/addGood",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/wms/good/goodUseFlag",method:"post",data:{self_id:e}})}function l(e){return Object(n["a"])({url:"/wms/good/goodDelFlag",method:"post",data:{self_id:e}})}function c(e){return Object(n["a"])({url:"/wms/good/createGood",method:"post",data:{self_id:e}})}function u(e){return Object(n["a"])({url:"/wms/good/import",method:"get",params:e})}function d(e){return Object(n["a"])({url:"/wms/good/execl",methods:"get",params:e})}function f(e){return Object(n["a"])({url:"/wms/good/details",method:"get",params:{self_id:e}})}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);