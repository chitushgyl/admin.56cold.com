(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c93cea40"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function l(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var s=n(),o=t-s,r=20,c=0;e="undefined"===typeof e?500:e;var p=function t(){c+=r;var n=Math.easeInOutQuad(c,s,o,e);l(n),c<e?i(t):a&&"function"===typeof a&&a()};p()}},"0a49":function(t,e,a){var i=a("9b43"),l=a("626a"),n=a("4bf8"),s=a("9def"),o=a("cd1c");t.exports=function(t,e){var a=1==t,r=2==t,c=3==t,p=4==t,u=6==t,d=5==t||u,f=e||o;return function(e,o,m){for(var y,_,h=n(e),g=l(h),v=i(o,m,3),b=s(g.length),w=0,k=a?f(e,b):r?f(e,0):void 0;b>w;w++)if((d||w in g)&&(y=g[w],_=v(y,w,h),t))if(a)k[w]=_;else if(_)switch(t){case 3:return!0;case 5:return y;case 6:return w;case 2:k.push(y)}else if(p)return!1;return u?-1:c||p?p:k}}},"0f28":function(t,e,a){"use strict";function i(){var t="".concat(window.location.origin).concat("/prod-api","/up/img");return t}a.d(e,"a",(function(){return i}))},1169:function(t,e,a){var i=a("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"20d6":function(t,e,a){"use strict";var i=a("5ca1"),l=a("0a49")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},6724:function(t,e,a){"use strict";a("8d41");var i="@@wavesContext";function l(t,e){function a(a){var i=Object.assign({},e.value),l=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),n=l.ele;if(n){n.style.position="relative",n.style.overflow="hidden";var s=n.getBoundingClientRect(),o=n.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",n.appendChild(o)),l.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=l.color,o.className="waves-ripple z-active",!1}}return t[i]?t[i].removeHandle=a:t[i]={removeHandle:a},a}var n={bind:function(t,e){t.addEventListener("click",l(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[i].removeHandle,!1),t.addEventListener("click",l(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[i].removeHandle,!1),t[i]=null,delete t[i]}},s=function(t){t.directive("waves",n)};window.Vue&&(window.waves=n,Vue.use(s)),n.install=s;e["a"]=n},"8d41":function(t,e,a){},c9d9:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i={ajax:"ajax",wicket:"wicket",edit:"edit"}},cd1c:function(t,e,a){var i=a("e853");t.exports=function(t,e){return new(i(t))(e)}},e158:function(t,e,a){"use strict";a("fc1f")},e853:function(t,e,a){var i=a("d3f4"),l=a("1169"),n=a("2b4c")("species");t.exports=function(t){var e;return l(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!l(e.prototype)||(e=void 0),i(e)&&(e=e[n],null===e&&(e=void 0))),void 0===e?Array:e}},f47e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"table-header header-fixed"},[a("div",{staticClass:"flex-space-between table-title-container"},[a("div",[t._v("公司列表")]),t._v(" "),a("div",t._l(t.thButtonInfo,(function(e){return a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],key:e.id,staticClass:"filter-item",style:[{backgroundColor:e.color,color:"white"}],attrs:{size:"mini",icon:e.img},on:{click:function(a){return t.onThBtnClick(e)}}},[t._v(t._s("icon"==e.show_flag?null:e.name))])})),1)]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"公司名称"},model:{value:t.listQuery.group_name,callback:function(e){t.$set(t.listQuery,"group_name",e)},expression:"listQuery.group_name"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"联系人"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{placeholder:"电话"},model:{value:t.listQuery.tel,callback:function(e){t.$set(t.listQuery,"tel",e)},expression:"listQuery.tel"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"全国",clearable:""},on:{change:t.onProChanged},model:{value:t.listQuery.pro,callback:function(e){t.$set(t.listQuery,"pro",e)},expression:"listQuery.pro"}},t._l(t.proOptions,(function(t){return a("el-option",{key:t.self_id,attrs:{label:t.code_name,value:t.self_id}})})),1),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"全市",clearable:""},on:{change:t.onCityChanged},model:{value:t.listQuery.city,callback:function(e){t.$set(t.listQuery,"city",e)},expression:"listQuery.city"}},t._l(t.cityOptions,(function(t){return a("el-option",{key:t.self_id,attrs:{label:t.code_name,value:t.self_id}})})),1),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},attrs:{placeholder:"全区",clearable:""},model:{value:t.listQuery.area,callback:function(e){t.$set(t.listQuery,"area",e)},expression:"listQuery.area"}},t._l(t.areaOptions,(function(t){return a("el-option",{key:t.self_id,attrs:{label:t.code_name,value:t.self_id}})})),1),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"状态",clearable:""},model:{value:t.listQuery.use_flag,callback:function(e){t.$set(t.listQuery,"use_flag",e)},expression:"listQuery.use_flag"}},t._l(t.useFlagOptions,(function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onFilter}},[t._v("查找")])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"公司名称","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(i.group_name))])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"到期时间","class-name":"status-col","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.expire_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态","class-name":"status-col",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s("Y"==i.use_flag?"已启用":"已禁用"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row,l=e.$index;return t._l(i.button_info,(function(e){return a("div",{key:e.id,staticStyle:{display:"inline-block"}},["text"==e.show_flag&&null==e.img?a("el-button",{staticStyle:{padding:"3px","margin-right":"5px"},attrs:{size:"mini",plain:"",type:e.but_type},on:{click:function(a){return t.onRowBtnClick(i,l,e)}}},[t._v(t._s(e.name))]):t._e(),t._v(" "),"icon"==e.show_flag?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.name,placement:"bottom-start"}},[a("el-button",{staticStyle:{"margin-right":"5px"},attrs:{type:e.but_type,icon:e.img,circle:""},on:{click:function(a){return t.onRowBtnClick(i,l,e)}}})],1):t._e(),t._v(" "),"text"!==e.show_flag&&null!==e.img&&"icon"!==e.show_flag?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.name,placement:"bottom-start"}},[a("i",{class:e.img,style:[{marginRight:"5px",color:e.color,fontSize:"15px"}],attrs:{size:"mini",circle:""},on:{click:function(a){return t.onRowBtnClick(i,l,e)}}})]):t._e()],1)}))}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,"page-sizes":t.thPageInfo,page:t.listQuery.page,limit:t.listQuery.num},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"num",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{staticStyle:{"margin-top":"-60px"},attrs:{title:t.title1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"90px",width:"900px"}},[a("el-row",[t._l(t.textInfo,(function(e){return a("el-col",{key:e.key,staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-form-item",{attrs:{label:e.name+"："}},["input"==e.flag?a("el-input",{staticStyle:{width:"90%"},attrs:{placeholder:e.name},model:{value:t.temp[e.key],callback:function(a){t.$set(t.temp,e.key,a)},expression:"temp[item.key]"}}):"select"==e.flag?a("el-select",{staticStyle:{width:"90%"},attrs:{placeholder:"是否显示"+e.name+"："},model:{value:t.temp[e.key],callback:function(a){t.$set(t.temp,e.key,a)},expression:"temp[item.key]"}},[a("el-option",{attrs:{label:"显示",value:"Y"}}),t._v(" "),a("el-option",{attrs:{label:"隐藏",value:"N"}})],1):t._e()],1)],1)})),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-form-item",[a("div",{staticClass:"image-uploads-container"},t._l(t.keyInfo,(function(e){return a("image-upload",{key:e.key,attrs:{imageKey:e.key,showLimit:!0,limit:parseInt(e.count),title:e.name,list:e.images},on:{update:t.onImagesUpdate}})})),1)])],1)],2)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("提交")])],1)],1),t._v(" "),a("el-dialog",{staticStyle:{"margin-top":"-60px"},attrs:{title:t.title2,visible:t.payFormVisible},on:{"update:visible":function(e){t.payFormVisible=e}}},[a("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.paytemp,"label-position":"left","label-width":"120px",width:"900px"}},[a("el-row",[a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-form-item",{attrs:{label:"支付类型"}},[a("el-select",{staticStyle:{width:"95%"},attrs:{placeholder:"是否显示分享图标："},model:{value:t.paytemp.gathering_flag,callback:function(e){t.$set(t.paytemp,"gathering_flag",e)},expression:"paytemp.gathering_flag"}},[a("el-option",{attrs:{label:"平台",value:"P"}}),t._v(" "),a("el-option",{attrs:{label:"个人",value:"G"}})],1)],1)],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-form-item",{attrs:{label:"公众号名称："}},[a("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"公众号名称"},model:{value:t.paytemp.wx_name,callback:function(e){t.$set(t.paytemp,"wx_name",e)},expression:"paytemp.wx_name"}})],1)],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-form-item",{attrs:{label:"公众号app_id："}},[a("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"公众号app_id"},model:{value:t.paytemp.app_id,callback:function(e){t.$set(t.paytemp,"app_id",e)},expression:"paytemp.app_id"}})],1)],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-form-item",{attrs:{label:"公众号secret："}},[a("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"公众号secret"},model:{value:t.paytemp.secret,callback:function(e){t.$set(t.paytemp,"secret",e)},expression:"paytemp.secret"}})],1)],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-form-item",{attrs:{label:"支付app_id："}},[a("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"支付app_id"},model:{value:t.paytemp.pay_app_id,callback:function(e){t.$set(t.paytemp,"pay_app_id",e)},expression:"paytemp.pay_app_id"}})],1)],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-form-item",{attrs:{label:"支付商户号："}},[a("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"支付商户号"},model:{value:t.paytemp.mch_id,callback:function(e){t.$set(t.paytemp,"mch_id",e)},expression:"paytemp.mch_id"}})],1)],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:24}},[a("el-form-item",{attrs:{label:"支付key："}},[a("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"支付key"},model:{value:t.paytemp.key,callback:function(e){t.$set(t.paytemp,"key",e)},expression:"paytemp.key"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.payFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createPayData():t.updateData()}}},[t._v("提交")])],1)],1)],1)},l=[],n=(a("20d6"),a("ac6a"),a("1b0d")),s=a("0835"),o=a("c9d9"),r=a("6724"),c=a("333d"),p={name:"ComplexTable",components:{Pagination:c["a"],ImageUpload:s["a"]},directives:{waves:r["a"]},data:function(){return{idd:"",thButtonInfo:[],thPageInfo:[],thAddressInfo:[],proOptions:[],cityOptions:[],areaOptions:[],useFlagOptions:[{key:"Y",label:"启用"},{key:"N",label:"禁用"}],dialogVisible:!1,tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,num:10,group_name:void 0,name:void 0,tel:void 0,use_flag:void 0,pro:void 0,city:void 0,area:void 0},keyInfo:[],textInfo:[],shareInfo:{},ewm_show:"Y",temp:{care_flag:"Y",care_tel_flag:"Y",identity:null,location_flag:"Y",share_content:null,share_title:null,fen_flag:"Y",img_info:[],self_id:null},paytemp:{app_id:null,secret:null,pay_app_id:null,mch_id:null,key:null,wx_name:null,gathering_flag:"P",self_id:null},dialogFormVisible:!1,payFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},title1:null,title2:null,dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},fileList:[]}},created:function(){var t=this;this.getList(),Object(n["h"])().then((function(e){t.thButtonInfo=e.data.button_info,t.thPageInfo=e.data.page_info,t.thAddressInfo=e.data.address_all_info,t.proOptions=t.thAddressInfo.filter((function(t){return 0==t.code_parent}))}))},methods:{onImagesUpdate:function(t){console.log("data",t),this.keyInfo.forEach((function(e){e.key==t.imageKey&&(e.images=t.images)}))},confirm:function(){console.log("keyInfo:",this.keyInfo)},getList:function(){var t=this;this.listLoading=!0,Object(n["i"])(this.listQuery).then((function(e){t.list=e.data.items,t.total=e.data.total,t.ewm_show=e.data.ewm_show,t.listLoading=!1}))},onThBtnClick:function(t){"edit"==t.use_type&&this.$router.push({path:"/company/edit"})},onProChanged:function(t){this.cityOptions=this.thAddressInfo.filter((function(e){return e.code_parent==t})),this.areaOptions=[],this.listQuery.city=void 0,this.listQuery.area=void 0},onCityChanged:function(t){this.areaOptions=this.thAddressInfo.filter((function(e){return e.code_parent==t})),this.listQuery.area=void 0},onFilter:function(){this.listQuery.page=1,this.getList()},onRowBtnClick:function(t,e,a){var i=this;a.use_type==o["a"].ajax?"use_flag"==a.flag?Object(n["d"])(t.self_id).then((function(e){t.use_flag=e.data.use_flag})):"delete_flag"==a.flag&&this.$confirm("此操作将删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.self_id?Object(n["e"])(t.self_id).then((function(t){i.$notify({title:"成功",message:t.msg,type:"success",duration:2e3}),i.list.splice(e,1)})):i.list.splice(e,1)})):a.use_type==o["a"].wicket&&"share"==a.flag?(this.handleCreate(t),this.temp.self_id=t.self_id):"details"==a.flag?this.$router.push({path:"/company/details",query:{id:t.self_id}}):a.use_type==o["a"].update||a.use_type==o["a"].edit?this.$router.push({path:"/company/edit",query:{id:t.self_id}}):a.use_type==o["a"].wicket&&"pay"==a.flag&&(this.payCreate(t),this.paytemp.self_id=t.self_id)},resetTemp:function(){this.temp={care_flag:"Y",care_tel_flag:"Y",identity:null,location_flag:"Y",share_content:null,share_title:null,fen_flag:"Y",img_info:[],self_id:null}},resetTemp2:function(){this.paytemp={app_id:null,secret:null,pay_app_id:null,mch_id:null,key:null,wx_name:null,gathering_flag:"P",self_id:null}},handleCreate:function(t){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()})),Object(n["k"])(t.self_id).then((function(a){var i=a.data.share_info;i&&(e.temp.share_title=a.data.share_info.share_title,e.temp.share_content=a.data.share_info.share_content,e.temp.care_flag=a.data.share_info.care_flag,e.temp.care_tel_flag=a.data.share_info.care_tel_flag,e.temp.fen_flag=a.data.share_info.fen_flag,e.temp.location_flag=a.data.share_info.location_flag,e.temp.identity=a.data.share_info.identity),e.keyInfo=a.data.key_info.map((function(t){return t.images=i&&i[t.key]?i[t.key]:[],t})),e.textInfo=a.data.text_info,e.title1=t.group_name+" 分享配置"}))},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},payCreate:function(t){var e=this;this.resetTemp2(),this.dialogStatus="create",this.payFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()})),Object(n["j"])(t.self_id).then((function(t){e.paytemp.app_id=t.data.wx_pay_info.app_id,e.paytemp.key=t.data.wx_pay_info.key,e.paytemp.mch_id=t.data.wx_pay_info.mch_id,e.paytemp.pay_app_id=t.data.wx_pay_info.pay_app_id,e.paytemp.secret=t.data.wx_pay_info.secret,e.paytemp.wx_name=t.data.wx_pay_info.wx_name,e.paytemp.gathering_flag=t.data.gathering_flag})),this.title2=t.group_name+" 支付配置"},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&(t.temp.img_info=t.keyInfo,Object(n["c"])(t.temp).then((function(e){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:e.msg,type:"success",duration:2e3}),t.getList()})))}))},createPayData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&Object(n["b"])(t.paytemp).then((function(e){t.list.unshift(t.paytemp),t.payFormVisible=!1,t.$notify({title:"支付配置",message:e.msg,type:"success",duration:2e3}),t.getList()}))}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);a.timestamp=+new Date(a.timestamp),updateArticle(a).then((function(){var e=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(e,1,t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))}}},u=p,d=(a("e158"),a("2877")),f=Object(d["a"])(u,i,l,!1,null,null,null);e["default"]=f.exports},fc1f:function(t,e,a){}}]);