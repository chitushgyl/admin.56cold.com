(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-950a0244"],{"09f4":function(t,e,i){"use strict";i.d(e,"a",(function(){return l})),Math.easeInOutQuad=function(t,e,i,n){return t/=n/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function a(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,i){var l=o(),r=t-l,s=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=s;var o=Math.easeInOutQuad(c,l,r,e);a(o),c<e?n(t):i&&"function"===typeof i&&i()};u()}},"22c5":function(t,e,i){"use strict";i("43ef")},"43ef":function(t,e,i){},6724:function(t,e,i){"use strict";i("8d41");var n="@@wavesContext";function a(t,e){function i(i){var n=Object.assign({},e.value),a=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),o=a.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var l=o.getBoundingClientRect(),r=o.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(l.width,l.height)+"px",o.appendChild(r)),a.type){case"center":r.style.top=l.height/2-r.offsetHeight/2+"px",r.style.left=l.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(i.pageY-l.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(i.pageX-l.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=a.color,r.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=i:t[n]={removeHandle:i},i}var o={bind:function(t,e){t.addEventListener("click",a(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",a(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},l=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(l)),o.install=l;e["a"]=o},"8d41":function(t,e,i){},"8fd4":function(t,e,i){"use strict";i.d(e,"g",(function(){return a})),i.d(e,"e",(function(){return o})),i.d(e,"h",(function(){return l})),i.d(e,"a",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"f",(function(){return c})),i.d(e,"d",(function(){return u})),i.d(e,"b",(function(){return d}));var n=i("b775");function a(t){return Object(n["a"])({url:"/tms/order/orderList",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/tms/type/getType",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/tms/order/orderPage",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/tms/order/addOrder",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/tms/order/createOrder",method:"post",data:{self_id:t}})}function c(t){return Object(n["a"])({url:"/tms/order/orderDelFlag",method:"post",data:{self_id:t}})}function u(t){return Object(n["a"])({url:"/tms/order/details",method:"get",params:{self_id:t}})}function d(t){return Object(n["a"])({url:"/tms/order/add_order",method:"post",data:t})}},aa77:function(t,e,i){var n=i("5ca1"),a=i("be13"),o=i("79e5"),l=i("fdef"),r="["+l+"]",s="​",c=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),d=function(t,e,i){var a={},r=o((function(){return!!l[t]()||s[t]()!=s})),c=a[t]=r?e(p):l[t];i&&(a[i]=c),n(n.P+n.F*r,"String",a)},p=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},c5f6:function(t,e,i){"use strict";var n=i("7726"),a=i("69a8"),o=i("2d95"),l=i("5dbc"),r=i("6a99"),s=i("79e5"),c=i("9093").f,u=i("11e9").f,d=i("86cc").f,p=i("aa77").trim,f="Number",m=n[f],g=m,_=m.prototype,h=o(i("2aeb")(_))==f,v="trim"in String.prototype,b=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():p(e,3);var i,n,a,o=e.charCodeAt(0);if(43===o||45===o){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var l,s=e.slice(2),c=0,u=s.length;c<u;c++)if(l=s.charCodeAt(c),l<48||l>a)return NaN;return parseInt(s,n)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof m&&(h?s((function(){_.valueOf.call(i)})):o(i)!=f)?l(new g(b(e)),i,m):b(e)};for(var y,w=i("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;w.length>k;k++)a(g,y=w[k])&&!a(m,y)&&d(m,y,u(g,y));m.prototype=_,_.constructor=m,i("2aba")(n,f,m)}},c9d9:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={ajax:"ajax",wicket:"wicket",edit:"edit"}},d9af7:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"table-header header-fixed"},[i("div",{staticClass:"flex-space-between table-title-container"},[i("div",[t._v("订单列表")]),t._v(" "),i("div",t._l(t.thButtonInfo,(function(e){return i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],key:e.id,staticClass:"filter-item",style:[{backgroundColor:e.color,color:"white"}],attrs:{size:"mini",icon:e.img},on:{click:function(i){return t.onThBtnClick(e)}}},[t._v("\n          "+t._s("icon"==e.show_flag?null:e.name)+"\n     ")])})),1)]),t._v(" "),i("div",{staticClass:"filter-container"},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择公司",clearable:"",filterable:""},model:{value:t.listQuery.group_code,callback:function(e){t.$set(t.listQuery,"group_code",e)},expression:"listQuery.group_code"}},t._l(t.groupOption,(function(t){return i("el-option",{key:t.self_id,attrs:{label:t.group_name,value:t.group_code}})})),1),t._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"状态",clearable:""},model:{value:t.listQuery.order_status,callback:function(e){t.$set(t.listQuery,"order_status",e)},expression:"listQuery.order_status"}},t._l(t.useFlagOptions,(function(t){return i("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),1),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onFilter}},[t._v("\n        查找\n      ")])],1)]),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"所属公司","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return i("div",{staticClass:"flex-column"},[i("span",[t._v(t._s(n.object_show))])])}}])}),t._v(" "),i("el-table-column",{attrs:{label:"业务公司","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return i("div",{staticClass:"flex-column"},[i("span",[t._v(t._s(n.company_name))])])}}])}),t._v(" "),i("el-table-column",{attrs:{label:"订单类型","min-width":"220px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return i("div",{},[i("span",{staticStyle:{display:"inline-flex",width:"200px",height:"20px"}},[i("el-image",{staticStyle:{width:"20px",height:"20px",display:"inline-block","margin-right":"5px"},attrs:{src:n.type_inco}}),t._v(" "),i("span",[t._v("始发地："+t._s(n.send_shi_name)+" "),i("strong",[t._v("→")]),t._v("   目的地："+t._s(n.gather_shi_name))])],1)])}}])}),t._v(" "),i("el-table-column",{attrs:{label:"订单状态","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return i("div",{staticClass:"flex-column"},[i("span",[t._v(t._s(n.order_status_show))])])}}])}),t._v(" "),i("el-table-column",{attrs:{label:"应收金额(元)","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return i("div",{staticClass:"flex-column"},[i("span",[t._v(t._s(n.total_money))])])}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作","min-width":"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,a=e.$index;return t._l(n.button_info,(function(e){return i("div",{key:e.id,staticStyle:{display:"inline-block"}},["text"==e.show_flag&&"details"==e.flag||"text"==e.show_flag&&1==n.order_status&&"details"!=e.flag?i("el-button",{staticStyle:{padding:"3px","margin-right":"5px"},attrs:{size:"mini",plain:"",type:e.but_type},on:{click:function(i){return t.onRowBtnClick(n,a,e)}}},[t._v(t._s(e.name))]):t._e(),t._v(" "),"icon"==e.show_flag?i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.name,placement:"bottom-start"}},[i("el-button",{staticStyle:{"margin-right":"5px"},attrs:{type:e.but_type,icon:e.img,circle:""},on:{click:function(i){return t.onRowBtnClick(n,a,e)}}})],1):t._e(),t._v(" "),"text"!==e.show_flag&&null!==e.img&&"icon"!==e.show_flag?i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.name,placement:"bottom-start"}},[i("i",{class:e.img,style:[{marginRight:"5px",color:e.color,fontSize:"15px"}],attrs:{size:"mini",circle:""},on:{click:function(i){return t.onRowBtnClick(n,a,e)}}})]):t._e()],1)}))}}])})],1),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,"page-sizes":t.thPageInfo,page:t.listQuery.page,limit:t.listQuery.num},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"num",e)},pagination:t.getList}}),t._v(" "),i("el-dialog",{attrs:{title:t.title,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{model:t.temp,rules:t.rules,"label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"所属公司",prop:"group_code"}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:null!=t.temp.self_id,clearable:""},model:{value:t.temp.group_code,callback:function(e){t.$set(t.temp,"group_code",e)},expression:"temp.group_code"}},t._l(t.groupOption,(function(t,e){return i("el-option",{key:t+e,attrs:{label:t.group_name,value:t.self_id}})})),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"包装名称",prop:"pack"}},[i("el-input",{staticClass:"filter-item",nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addPack(e)}},model:{value:t.temp.pack,callback:function(e){t.$set(t.temp,"pack",e)},expression:"temp.pack"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n        取消\n      ")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.addPack}},[t._v("\n        提交\n      ")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"导入Excel文件",visible:t.packExcel,width:"550px"},on:{"update:visible":function(e){t.packExcel=e}}},[i("div",{domProps:{innerHTML:t._s(t.aHtml)}}),t._v(" "),i("div",[i("label",[t._v("公司选择：")]),t._v(" "),i("el-select",{ref:"self_id",staticStyle:{width:"400px",margin:"10px 0"},attrs:{placeholder:"请选择",clearable:""},model:{value:t.self_id,callback:function(e){t.self_id=e},expression:"self_id"}},t._l(t.groupOption,(function(t){return i("el-option",{key:t.self_id,attrs:{label:t.group_name,value:t.self_id}})})),1)],1),t._v(" "),i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:t.uploadUrl(),accept:".xls,.xlsx","on-preview":t.handlePreview,"on-remove":t.handleRemove,"show-file-list":!0,limit:1,name:"importFile",headers:t.uploadHeaders(),"on-success":t.onSuccess}},[i("el-button",{attrs:{slot:"trigger",round:"",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.submitUpload}},[t._v("确 定")])],1)],1)],1)},a=[],o=(i("6b54"),i("8fd4")),l=i("c24f"),r=i("c9d9"),s=i("6724"),c=(i("ed08"),i("333d")),u=(i("bc3a"),i("5f87")),d={name:"ComplexTable",components:{Pagination:c["a"]},directives:{waves:s["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},typeFilter:function(t){return calendarTypeKeyValue[t]}},data:function(){return{thImportInfo:[],thButtonInfo:[],thPageInfo:[],tableKey:0,list:null,total:0,listLoading:!0,groupOption:[],file_id:"",self_id:"",fileList:[],returnUrl:"",listQuery:{page:1,limit:20,start_time:null,end_time:null,group_code:""},useFlagOptions:[{key:"1",label:"未支付"},{key:"2",label:"未接单"},{key:"3",label:"已接单"},{key:"4",label:"已调度"},{key:"5",label:"运输中"},{key:"6",label:"已完成"},{key:"7",label:"已取消"}],title2:null,title:null,dialogFormVisible:!1,packExport:!1,packExcel:!1,temp:{group_code:null,pack:null,self_id:null},iUrl:"",importHtml:"",aHtml:"",import_color:"",import_text:"",import_url:"",rules:{group_code:[{required:!0,message:"请选择公司",trigger:"change"}],pack:[{required:!0,message:"请输入包装名称",trigger:"blur"}]}}},created:function(){var t=this;this.getList(),Object(o["g"])().then((function(e){console.log(e.data),t.thButtonInfo=e.data.button_info,t.thPageInfo=e.data.page_info,t.import_color=e.data.import_info.import_color,t.import_text=e.data.import_info.import_text,t.import_url=e.data.import_info.import_url})),this.getGroup()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(o["h"])(this.listQuery).then((function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1}))},onThBtnClick:function(t){if("edit"==t.use_type)this.$router.push({path:"/tms/order/edit",query:{id:null}});else if("imports"==t.flag){var e=this;e.aHtml='<a style="color:'+this.import_color+'" href="'+this.import_url+'">'+this.import_text+"</a>",console.log(this.aHtml),this.packExcel=!0}},onRowBtnClick:function(t,e,i){var n=this;i.use_type==r["a"].ajax?"use_flag"==i.flag?typeDelFlag(t.self_id).then((function(e){t.use_flag=e.data.use_flag})):"delete_flag"==i.flag&&this.$confirm("此操作将删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.self_id?Object(o["f"])(t.self_id).then((function(t){n.$notify({title:"成功",message:t.msg,type:"success",duration:2e3}),n.list.splice(e,1)})):n.list.splice(e,1)})).catch((function(){n.$message({type:"info",message:"已取消"})})):"create"==i.use_type?this.$router.push({path:"/tms/order/edit",query:{id:t.self_id}}):"details"==i.use_type&&this.$router.push({path:"/tms/order/details",query:{id:t.self_id}})},getGroup:function(){var t=this;Object(l["l"])().then((function(e){t.groupOption=e.data.items}))},onFilter:function(){this.listQuery.page=1,this.getList()},handlePreview:function(t){console.log(t)},handleRemove:function(t,e){},uploadUrl:function(){var t="".concat(window.location.origin).concat("/prod-api","/up/execl");return t},uploadHeaders:function(){return{dtoken:Object(u["a"])()}},onSuccess:function(t,e,i){this.file_id=t.data.self_id,this.returnUrl=t.data.pathurl},submitUpload:function(){var t=this;if(this.self_id){var e={importurl:this.returnUrl,group_code:this.self_id,file_id:this.file_id};packImport(e).then((function(e){t.$message({message:e.msg,type:"success",center:!0}),setTimeout((function(){t.getList(),t.packExcel=!1,t.$refs.upload.clearFiles(),t.self_id=""}),1e3)})).catch((function(e){t.$message({showClose:!0,dangerouslyUseHTMLString:!0,message:e,type:"error",center:!0,duration:0})}))}else this.$message({message:"请选择公司",type:"warning",center:!0})},addPack:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;addPack(this.temp).then((function(e){t.$notify({title:"Success",message:e.msg,type:"success",duration:2e3}),t.dialogFormVisible=!1,t.getList()}))}))}},p=d,f=(i("22c5"),i("2877")),m=Object(f["a"])(p,n,a,!1,null,null,null);e["default"]=m.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);