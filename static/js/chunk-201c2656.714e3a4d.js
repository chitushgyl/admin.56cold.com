(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-201c2656"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),Math.easeInOutQuad=function(t,e,n,i){return t/=i/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function a(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var s=r(),l=t-s,o=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=o;var r=Math.easeInOutQuad(c,s,l,e);a(r),c<e?i(t):n&&"function"===typeof n&&n()};u()}},"43c2":function(t,e,n){"use strict";n("89ab")},6724:function(t,e,n){"use strict";n("8d41");var i="@@wavesContext";function a(t,e){function n(n){var i=Object.assign({},e.value),a=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),r=a.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),l=r.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",r.appendChild(l)),a.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(n.pageY-s.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(n.pageX-s.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=a.color,l.className="waves-ripple z-active",!1}}return t[i]?t[i].removeHandle=n:t[i]={removeHandle:n},n}var r={bind:function(t,e){t.addEventListener("click",a(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[i].removeHandle,!1),t.addEventListener("click",a(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[i].removeHandle,!1),t[i]=null,delete t[i]}},s=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;e["a"]=r},"89ab":function(t,e,n){},"8d41":function(t,e,n){},aa77:function(t,e,n){var i=n("5ca1"),a=n("be13"),r=n("79e5"),s=n("fdef"),l="["+s+"]",o="​",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),d=function(t,e,n){var a={},l=r((function(){return!!s[t]()||o[t]()!=o})),c=a[t]=l?e(f):s[t];n&&(a[n]=c),i(i.P+i.F*l,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),r=n("2d95"),s=n("5dbc"),l=n("6a99"),o=n("79e5"),c=n("9093").f,u=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,p="Number",m=i[p],_=m,g=m.prototype,h=r(n("2aeb")(g))==p,v="trim"in String.prototype,b=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():f(e,3);var n,i,a,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var s,o=e.slice(2),c=0,u=o.length;c<u;c++)if(s=o.charCodeAt(c),s<48||s>a)return NaN;return parseInt(o,i)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(h?o((function(){g.valueOf.call(n)})):r(n)!=p)?s(new _(b(e)),n,m):b(e)};for(var y,w=n("9e1e")?c(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)a(_,y=w[x])&&!a(m,y)&&d(m,y,u(_,y));m.prototype=g,g.constructor=m,n("2aba")(i,p,m)}},c9d9:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={ajax:"ajax",wicket:"wicket",edit:"edit"}},d05d:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"g",(function(){return l})),n.d(e,"f",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"h",(function(){return d}));var i=n("b775");function a(t){return Object(i["a"])({url:"/tms/address/addressList",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/tms/address/addressPage",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/tms/address/addAddress",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/tms/address/createAddress",method:"post",data:{self_id:t}})}function o(t){return Object(i["a"])({url:"/tms/address/addressUseFlag",method:"post",data:{self_id:t}})}function c(t){return Object(i["a"])({url:"/tms/address/addressDelFlag",method:"post",data:{self_id:t}})}function u(t){return Object(i["a"])({url:"/tms/address/import",method:"get",params:t})}function d(t){return Object(i["a"])({url:"/tms/address/details",method:"get",params:{self_id:t}})}},e43d3:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"table-header header-fixed"},[n("div",{staticClass:"flex-space-between table-title-container"},[n("div",[t._v("地址列表")]),t._v(" "),n("div",[t._l(t.thButtonInfo,(function(e){return"一键导出"!=e.name?n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],key:e.id,staticClass:"filter-item",style:[{backgroundColor:e.color,color:"white"}],attrs:{size:"mini",icon:e.img},on:{click:function(n){return t.onThBtnClick(e)}}},[t._v("\n          "+t._s("icon"==e.show_flag?null:e.name)+"\n        ")]):t._e()})),t._v(" "),n("a",{attrs:{href:t.import_url}},[n("el-button",{attrs:{type:"danger"}},[t._v("\n            下载示例文件\n          ")])],1)],2)]),t._v(" "),n("div",{staticClass:"filter-container"},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择公司",clearable:"",filterable:""},model:{value:t.listQuery.group_code,callback:function(e){t.$set(t.listQuery,"group_code",e)},expression:"listQuery.group_code"}},t._l(t.groupOption,(function(t){return n("el-option",{key:t.self_id,attrs:{label:t.group_name,value:t.group_code}})})),1),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"状态",clearable:""},model:{value:t.listQuery.use_flag,callback:function(e){t.$set(t.listQuery,"use_flag",e)},expression:"listQuery.use_flag"}},t._l(t.useFlagOptions,(function(t){return n("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),1),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onFilter}},[t._v("\n        查找\n      ")])],1)]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"所属公司","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.group_name))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"地址","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.sheng_name)+t._s(i.shi_name)+t._s(i.qu_name)+t._s(i.address))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"联系人","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.contacts))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"联系电话","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.tel))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建人及创建时间","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s(i.create_user_name)+"  "+t._s(i.create_time))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return n("div",{staticClass:"flex-column"},[n("span",[t._v(t._s("Y"==i.use_flag?"启用":"禁用"))])])}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作","min-width":"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row,a=e.$index;return t._l(i.button_info,(function(e){return n("div",{key:e.id,staticStyle:{display:"inline-block"}},["text"==e.show_flag&&null==e.img?n("el-button",{staticStyle:{padding:"3px","margin-right":"5px"},attrs:{size:"mini",plain:"",type:e.but_type},on:{click:function(n){return t.onRowBtnClick(i,a,e)}}},[t._v(t._s(e.name))]):t._e(),t._v(" "),"icon"==e.show_flag?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.name,placement:"bottom-start"}},[n("el-button",{staticStyle:{"margin-right":"5px"},attrs:{type:e.but_type,icon:e.img,circle:""},on:{click:function(n){return t.onRowBtnClick(i,a,e)}}})],1):t._e(),t._v(" "),"text"!==e.show_flag&&null!==e.img&&"icon"!==e.show_flag?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.name,placement:"bottom-start"}},[n("i",{class:e.img,style:[{marginRight:"5px",color:e.color,fontSize:"15px"}],attrs:{size:"mini",circle:""},on:{click:function(n){return t.onRowBtnClick(i,a,e)}}})]):t._e()],1)}))}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,"page-sizes":t.thPageInfo,page:t.listQuery.page,limit:t.listQuery.num},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"num",e)},pagination:t.getList}}),t._v(" "),n("el-dialog",{attrs:{title:"导入Excel文件",visible:t.addressExcel,width:"550px"},on:{"update:visible":function(e){t.addressExcel=e}}},[n("div",{domProps:{innerHTML:t._s(t.aHtml)}}),t._v(" "),n("div",[n("label",[t._v("公司选择：")]),t._v(" "),n("el-select",{ref:"self_id",staticStyle:{width:"400px",margin:"10px 0"},attrs:{placeholder:"请选择",clearable:""},on:{change:t.getCompanyEx},model:{value:t.self_id,callback:function(e){t.self_id=e},expression:"self_id"}},t._l(t.groupOption,(function(t){return n("el-option",{key:t.self_id,attrs:{label:t.group_name,value:t.self_id}})})),1)],1),t._v(" "),n("div"),t._v(" "),n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:t.uploadUrl(),accept:".xls,.xlsx","on-preview":t.handlePreview,"on-remove":t.handleRemove,"show-file-list":!0,limit:1,name:"importFile",headers:t.uploadHeaders(),"on-success":t.onSuccess}},[n("el-button",{attrs:{slot:"trigger",round:"",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submitUpload}},[t._v("确 定")])],1)],1)],1)},a=[],r=n("d05d"),s=n("c24f"),l=n("c9d9"),o=n("6724"),c=(n("ed08"),n("333d")),u=(n("bc3a"),n("5f87")),d={name:"ComplexTable",components:{Pagination:c["a"]},directives:{waves:o["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},typeFilter:function(t){return calendarTypeKeyValue[t]}},data:function(){return{thImportInfo:[],thButtonInfo:[],thPageInfo:[],tableKey:0,list:null,total:0,listLoading:!0,groupOption:[],tmscompanyOption:[],file_id:"",self_id:"",fileList:[],returnUrl:"",listQuery:{page:1,limit:20,start_time:null,end_time:null,group_code:null},useFlagOptions:[{key:"ALL",label:"全部"},{key:"Y",label:"启用"},{key:"N",label:"禁用"}],title2:null,title:null,dialogFormVisible:!1,addressExport:!1,addressExcel:!1,temp:{car_brand:null,car_number:null,car_possess:null,volam:null,control:null,weight:null,self_id:null},iUrl:"",importHtml:"",aHtml:"",import_color:"",import_text:"",import_url:"",rules:{car_brand:[{required:!0,message:"请选择车辆类型",trigger:"blur"}],car_number:[{required:!0,message:"请输入车牌号",trigger:"blur"}]}}},created:function(){var t=this;this.getList(),Object(r["d"])().then((function(e){t.thButtonInfo=e.data.button_info,t.thPageInfo=e.data.page_info,t.import_color=e.data.import_info.import_color,t.import_text=e.data.import_info.import_text,t.import_url=e.data.import_info.import_url})),this.getGroup()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(r["e"])(this.listQuery).then((function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1}))},onThBtnClick:function(t){if("create"==t.flag)this.$router.push({path:"/tms/address/edit",query:{id:null}});else if("imports"==t.flag){var e=this;e.aHtml='<a style="color:'+this.import_color+'" href="'+this.import_url+'">'+this.import_text+"</a>",console.log(this.aHtml),this.addressExcel=!0}},onRowBtnClick:function(t,e,n){var i=this;n.use_type==l["a"].ajax?"use_flag"==n.flag?Object(r["f"])(t.self_id).then((function(e){t.use_flag=e.data.use_flag})):"delete_flag"==n.flag&&this.$confirm("此操作将删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.self_id?Object(r["b"])(t.self_id).then((function(t){i.$notify({title:"成功",message:t.msg,type:"success",duration:2e3}),i.list.splice(e,1)})):i.list.splice(e,1)})).catch((function(){i.$message({type:"info",message:"已取消"})})):"edit"==n.use_type?this.$router.push({path:"/tms/address/edit",query:{id:t.self_id}}):"details"==n.use_type&&this.$router.push({path:"/tms/address/details",query:{id:t.self_id}})},getGroup:function(){var t=this;Object(s["l"])().then((function(e){t.groupOption=e.data.items}))},getCompanyEx:function(){var t=this,e={group_code:this.self_id,type:"carriers"};Object(s["r"])(e).then((function(e){t.tmscompanyOption=e.data.info}))},onFilter:function(){this.listQuery.page=1,this.getList()},handlePreview:function(t){console.log(t)},handleRemove:function(t,e){},uploadUrl:function(){var t="".concat(window.location.origin).concat("/prod-api","/up/execl");return t},uploadHeaders:function(){return{dtoken:Object(u["a"])()}},onSuccess:function(t,e,n){this.file_id=t.data.self_id,this.returnUrl=t.data.pathurl},submitUpload:function(){var t=this,e={importurl:this.returnUrl,group_code:this.self_id,file_id:this.file_id};Object(r["c"])(e).then((function(e){t.$message({message:e.msg,type:"success",center:!0}),setTimeout((function(){t.getList(),t.addressExcel=!1,t.$refs.upload.clearFiles(),t.self_id=""}),1e3)})).catch((function(e){t.$message({showClose:!0,dangerouslyUseHTMLString:!0,message:e,type:"error",center:!0,duration:0})}))}}},f=d,p=(n("43c2"),n("2877")),m=Object(p["a"])(f,i,a,!1,null,null,null);e["default"]=m.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);