(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4890a4ec"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),Math.easeInOutQuad=function(t,e,n,i){return t/=i/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function a(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,n){var r=l(),o=t-r,s=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=s;var l=Math.easeInOutQuad(c,r,o,e);a(l),c<e?i(t):n&&"function"===typeof n&&n()};u()}},1124:function(t,e,n){},"406f":function(t,e,n){},"55c1":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"table-header header-fixed"},[n("div",{staticClass:"flex-space-between table-title-container"},[t._m(0),t._v(" "),n("div",[t._l(t.thButtonInfo,(function(e){return"一键导出"!=e.name?n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],key:e.id,staticClass:"filter-item",style:[{backgroundColor:e.color,color:"white"}],attrs:{size:"mini",icon:e.img},on:{click:function(n){return t.onThBtnClick(e)}}},[t._v("\n          "+t._s("icon"==e.show_flag?null:e.name)+"\n        ")]):t._e()})),t._v(" "),n("a",{attrs:{href:t.import_url}},[n("el-button",{attrs:{type:"danger"}},[t._v(" 下载示例文件\n          ")])],1)],2)]),t._v(" "),n("div",{staticClass:"filter-container"},[n("p",{staticStyle:{display:"inline-block"}},[t._m(1),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"130px",height:"20px","vertical-align":"middle"},attrs:{placeholder:"公司名称",clearable:"",filterable:""},model:{value:t.listQuery.group_code,callback:function(e){t.$set(t.listQuery,"group_code",e)},expression:"listQuery.group_code"}},t._l(t.groupOption,(function(t){return n("el-option",{key:t.self_id,attrs:{label:t.group_name,value:t.group_code}})})),1)],1),t._v(" "),n("p",{staticStyle:{display:"inline-block"}},[t._m(2),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"130px",height:"20px","vertical-align":"middle"},attrs:{placeholder:"状态",clearable:""},model:{value:t.listQuery.use_flag,callback:function(e){t.$set(t.listQuery,"use_flag",e)},expression:"listQuery.use_flag"}},t._l(t.useFlagOptions,(function(t){return n("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),1)],1),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onFilter}},[t._v("\n        查找\n      ")])],1)]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"公司名称","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.group_name))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"车牌号","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.car_number))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"车辆类型","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.car_type_name))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"车辆属性","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.car_possess_show))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"温控类型","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.tms_control_type_show))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"体积(m³)","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.volam))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"承重(kg)","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.weight))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s("Y"==i.use_flag?"启用":"禁用"))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作","min-width":"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row,a=e.$index;return t._l(i.button_info,(function(e){return n("div",{key:e.id,staticStyle:{display:"inline-block"}},["text"==e.show_flag&&null==e.img?n("el-button",{staticStyle:{padding:"3px","margin-right":"5px"},attrs:{size:"mini",plain:"",type:e.but_type},on:{click:function(n){return t.onRowBtnClick(i,a,e)}}},[t._v("\n            "+t._s(e.name))]):t._e(),t._v(" "),"icon"==e.show_flag?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.name,placement:"bottom-start"}},[n("el-button",{staticStyle:{"margin-right":"5px"},attrs:{type:e.but_type,icon:e.img,circle:""},on:{click:function(n){return t.onRowBtnClick(i,a,e)}}})],1):t._e(),t._v(" "),"text"!==e.show_flag&&null!==e.img&&"icon"!==e.show_flag?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.name,placement:"bottom-start"}},[n("i",{class:e.img,style:[{marginRight:"5px",color:e.color,fontSize:"15px"}],attrs:{size:"mini",circle:""},on:{click:function(n){return t.onRowBtnClick(i,a,e)}}})]):t._e()],1)}))}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,"page-sizes":t.thPageInfo,page:t.listQuery.page,limit:t.listQuery.num},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"num",e)},pagination:t.getList}}),t._v(" "),n("el-dialog",{attrs:{title:"导入Excel文件",visible:t.carExcel,width:"550px"},on:{"update:visible":function(e){t.carExcel=e}}},[n("div",{domProps:{innerHTML:t._s(t.aHtml)}}),t._v(" "),n("div",[n("label",[t._v("公司选择：")]),t._v(" "),n("el-select",{ref:"self_id",staticStyle:{width:"400px",margin:"10px 0"},attrs:{placeholder:"请选择",clearable:""},on:{change:t.getCompany},model:{value:t.self_id,callback:function(e){t.self_id=e},expression:"self_id"}},t._l(t.groupOption,(function(t){return n("el-option",{key:t.self_id,attrs:{label:t.group_name,value:t.self_id}})})),1)],1),t._v(" "),n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:t.uploadUrl(),accept:".xls,.xlsx","on-preview":t.handlePreview,"on-remove":t.handleRemove,"show-file-list":!0,limit:1,name:"importFile",headers:t.uploadHeaders(),"on-success":t.onSuccess}},[n("el-button",{attrs:{slot:"trigger",round:"",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件\n      ")])],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitUpload}},[t._v("确 定")])],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("运力列表")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"author"}},[n("small",{staticStyle:{color:"#666"}},[t._v("公司名称：")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"author"}},[n("small",{staticStyle:{color:"#666"}},[t._v("状态：")])])}],l=n("9423"),r=n("c24f"),o=n("c9d9"),s=n("6724"),c=(n("ed08"),n("333d")),u=(n("bc3a"),n("5f87")),d={name:"ComplexTable",components:{Pagination:c["a"]},directives:{waves:s["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},typeFilter:function(t){return calendarTypeKeyValue[t]}},data:function(){return{thImportInfo:[],thButtonInfo:[],thPageInfo:[],tableKey:0,list:null,total:0,listLoading:!0,typeOption:[],companyOption:[],groupOption:[],company_id:"",car_type_id:"",file_id:"",self_id:"",fileList:[],returnUrl:"",listQuery:{page:1,limit:20,start_time:null,end_time:null,group_code:null},useFlagOptions:[{key:"ALL",label:"全部"},{key:"Y",label:"启用"},{key:"N",label:"禁用"}],title2:null,title:null,dialogFormVisible:!1,carExport:!1,carExcel:!1,temp:{car_brand:null,car_number:null,car_possess:null,volam:null,control:null,weight:null,self_id:null},iUrl:"",aHtml:"",import_color:"",import_text:"",import_url:"",rules:{car_brand:[{required:!0,message:"请选择车辆类型",trigger:"blur"}],car_number:[{required:!0,message:"请输入车牌号",trigger:"blur"}]}}},created:function(){var t=this;this.getList(),this.getType(),Object(l["d"])().then((function(e){t.thButtonInfo=e.data.button_info,t.thPageInfo=e.data.page_info,t.import_color=e.data.import_info.import_color,t.import_text=e.data.import_info.import_text,t.import_url=e.data.import_info.import_url})),this.getGroup()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(l["e"])(this.listQuery).then((function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1}))},onThBtnClick:function(t){if("create"==t.flag)this.$router.push({path:"/tms/car/edit",query:{id:null}});else if("imports"==t.flag){var e=this;e.aHtml='<a style="color:'+this.import_color+'" href="'+this.import_url+'">'+this.import_text+"</a>",console.log(this.aHtml),this.carExcel=!0}},onRowBtnClick:function(t,e,n){var i=this;n.use_type==o["a"].ajax?"use_flag"==n.flag?Object(l["f"])(t.self_id).then((function(e){t.use_flag=e.data.use_flag})):"delete_flag"==n.flag&&this.$confirm("此操作将删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.self_id?Object(l["b"])(t.self_id).then((function(t){i.$notify({title:"成功",message:t.msg,type:"success",duration:2e3}),i.list.splice(e,1)})):i.list.splice(e,1)})).catch((function(){i.$message({type:"info",message:"已取消"})})):"edit"==n.flag?this.$router.push({path:"/tms/car/edit",query:{id:t.self_id}}):"details"==n.flag&&this.$router.push({path:"/tms/car/details",query:{id:t.self_id}})},getGroup:function(){var t=this;Object(r["l"])().then((function(e){t.groupOption=e.data.items}))},getType:function(){var t=this;Object(r["s"])().then((function(e){t.typeOption=e.data.info}))},getCompany:function(){var t=this,e={group_code:this.self_id,type:"carriers"};Object(r["r"])(e).then((function(e){t.companyOption=e.data.info,t.company_id=null}))},onFilter:function(){this.listQuery.page=1,this.getList()},handlePreview:function(t){console.log(t)},handleRemove:function(t,e){},uploadUrl:function(){var t="".concat(window.location.origin).concat("/prod-api","/up/execl");return t},uploadHeaders:function(){return{dtoken:Object(u["a"])()}},onSuccess:function(t,e,n){this.file_id=t.data.self_id,this.returnUrl=t.data.pathurl},submitUpload:function(){var t=this,e={importurl:this.returnUrl,group_code:this.self_id,file_id:this.file_id};Object(l["c"])(e).then((function(e){t.$message({message:e.msg,type:"success",center:!0}),setTimeout((function(){t.getList(),t.carExcel=!1,t.$refs.upload.clearFiles(),t.self_id=""}),1e3)})).catch((function(e){t.$message({showClose:!0,dangerouslyUseHTMLString:!0,message:e,type:"error",center:!0,duration:0})}))},addCar:function(){var t=this;Object(l["a"])(this.temp).then((function(e){t.$notify({title:"Success",message:e.msg,type:"success",duration:2e3}),t.dialogFormVisible=!1,t.getList()}))},driver:function(){this.$router.push({path:"/tms/driver"})}}},f=d,p=(n("e551"),n("f789"),n("2877")),m=Object(p["a"])(f,i,a,!1,null,"4bacf9f4",null);e["default"]=m.exports},6724:function(t,e,n){"use strict";n("8d41");var i="@@wavesContext";function a(t,e){function n(n){var i=Object.assign({},e.value),a=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),l=a.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var r=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",l.appendChild(o)),a.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(n.pageY-r.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(n.pageX-r.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}}return t[i]?t[i].removeHandle=n:t[i]={removeHandle:n},n}var l={bind:function(t,e){t.addEventListener("click",a(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[i].removeHandle,!1),t.addEventListener("click",a(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[i].removeHandle,!1),t[i]=null,delete t[i]}},r=function(t){t.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(r)),l.install=r;e["a"]=l},"8d41":function(t,e,n){},9423:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return f}));var i=n("b775");function a(t){return Object(i["a"])({url:"/tms/car/carList",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/tms/car/carPage",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/tms/car/addCar",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/tms/car/createCar",method:"post",data:{self_id:t}})}function s(t){return Object(i["a"])({url:"/tms/car/carUseFlag",method:"post",data:{self_id:t}})}function c(t){return Object(i["a"])({url:"/tms/car/carDelFlag",method:"post",data:{self_id:t}})}function u(t){return Object(i["a"])({url:"/tms/car/import",method:"get",params:t})}function d(t){return Object(i["a"])({url:"/tms/car/details",method:"get",params:{self_id:t}})}function f(t){return Object(i["a"])({url:"/tms/group/getGroup",method:"post",data:t})}},aa77:function(t,e,n){var i=n("5ca1"),a=n("be13"),l=n("79e5"),r=n("fdef"),o="["+r+"]",s="​",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t,e,n){var a={},o=l((function(){return!!r[t]()||s[t]()!=s})),c=a[t]=o?e(f):r[t];n&&(a[n]=c),i(i.P+i.F*o,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),l=n("2d95"),r=n("5dbc"),o=n("6a99"),s=n("79e5"),c=n("9093").f,u=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,p="Number",m=i[p],_=m,h=m.prototype,v=l(n("2aeb")(h))==p,g="trim"in String.prototype,b=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var n,i,a,l=e.charCodeAt(0);if(43===l||45===l){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var r,s=e.slice(2),c=0,u=s.length;c<u;c++)if(r=s.charCodeAt(c),r<48||r>a)return NaN;return parseInt(s,i)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(v?s((function(){h.valueOf.call(n)})):l(n)!=p)?r(new _(b(e)),n,m):b(e)};for(var y,w=n("9e1e")?c(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)a(_,y=w[x])&&!a(m,y)&&d(m,y,u(_,y));m.prototype=h,h.constructor=m,n("2aba")(i,p,m)}},c9d9:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={ajax:"ajax",wicket:"wicket",edit:"edit"}},e551:function(t,e,n){"use strict";n("406f")},f789:function(t,e,n){"use strict";n("1124")},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);