(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6594d724"],{"09f4":function(e,t,s){"use strict";s.d(t,"a",(function(){return l})),Math.easeInOutQuad=function(e,t,s,a){return e/=a/2,e<1?s/2*e*e+t:(e--,-s/2*(e*(e-2)-1)+t)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function i(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,s){var l=n(),r=e-l,o=20,d=0;t="undefined"===typeof t?500:t;var c=function e(){d+=o;var n=Math.easeInOutQuad(d,l,r,t);i(n),d<t?a(e):s&&"function"===typeof s&&s()};c()}},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3a29":function(e,t,s){"use strict";s.d(t,"d",(function(){return n})),s.d(t,"f",(function(){return l})),s.d(t,"a",(function(){return r})),s.d(t,"e",(function(){return o})),s.d(t,"h",(function(){return d})),s.d(t,"c",(function(){return c})),s.d(t,"g",(function(){return u})),s.d(t,"b",(function(){return p}));var a=s("ade3"),i=s("b775");s("ba0f");function n(e){return Object(i["a"])({url:"/tms/dispatch/dispatchList",method:"get",params:e})}function l(e){var t;return Object(i["a"])((t={url:"/tms/dispatch/dispatchPage",method:"get"},Object(a["a"])(t,"method","post"),Object(a["a"])(t,"data",e),t))}function r(e){return Object(i["a"])({url:"/tms/dispatch/addDispatch",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/tms/dispatch/dispatchOrder",method:"post",data:{group_code:e}})}function d(e){return Object(i["a"])({url:"/tms/dispatch/unline",method:"post",data:{self_id:e}})}function c(e){return Object(i["a"])({url:"/tms/dispatch/details",method:"post",params:{self_id:e}})}function u(e){return Object(i["a"])({url:"/tms/dispatch/online",method:"post",data:e})}function p(e){return Object(i["a"])({url:"/tms/dispatch/createDispatch",method:"post",data:e})}},4:function(e,t){},5:function(e,t){},"5d3e":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"table-header header-fixed"},[s("div",{staticClass:"flex-space-between table-title-container"},[s("div",[e._v("调度列表")]),e._v(" "),s("div",e._l(e.thButtonInfo,(function(t){return s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],key:t.id,staticClass:"filter-item",style:[{backgroundColor:t.color,color:"white"}],attrs:{size:"mini",icon:t.img},on:{click:function(s){return e.onThBtnClick(t)}}},[e._v("\n          "+e._s("icon"==t.show_flag?null:t.name)+"\n        ")])})),1)]),e._v(" "),s("div",{staticClass:"filter-container"},[s("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择公司",clearable:"",filterable:""},model:{value:e.listQuery.group_code,callback:function(t){e.$set(e.listQuery,"group_code",t)},expression:"listQuery.group_code"}},e._l(e.groupOption,(function(e){return s("el-option",{key:e.self_id,attrs:{label:e.group_name,value:e.group_code}})})),1),e._v(" "),s("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"状态",clearable:""},model:{value:e.listQuery.order_status,callback:function(t){e.$set(e.listQuery,"order_status",t)},expression:"listQuery.order_status"}},e._l(e.useFlagOptions,(function(e){return s("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),1),e._v(" "),s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.onFilter}},[e._v("\n        查找\n      ")])],1)]),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"","highlight-current-row":""}},[s("el-table-column",{attrs:{label:"所属公司","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return s("div",{staticClass:"flex-column"},[s("span",[e._v(e._s(a.group_name))])])}}])}),e._v(" "),s("el-table-column",{attrs:{label:"客户公司","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return s("div",{staticClass:"flex-column"},[s("span",[e._v(e._s(a.company_name))])])}}])}),e._v(" "),s("el-table-column",{attrs:{label:"运输类型","min-width":"500px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return s("div",{staticClass:"flex-column"},[s("span",{staticStyle:{display:"inline-flex",width:"500px",height:"20px"}},[s("el-image",{staticStyle:{width:"20px",height:"20px",display:"inline-block","margin-right":"5px"},attrs:{src:a.type_inco}}),e._v(" "),s("span",[e._v("始发地："+e._s(a.send_sheng_name)+e._s(a.send_shi_name)+e._s(a.send_qu_name)+"\n            "),s("strong",[e._v("→")]),e._v("\n            目的地："+e._s(a.gather_sheng_name)+e._s(a.gather_shi_name)+e._s(a.gather_qu_name))])],1)])}}])}),e._v(" "),s("el-table-column",{attrs:{label:"状态","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return s("div",{staticClass:"flex-column"},[s("el-col",[s("span",{style:{color:a.dispatch_status_color}},[e._v(e._s(a.dispatch_status_text))]),e._v(" "),s("span",{style:{color:a.online_status_color}},[e._v(e._s(a.online_status_text))])]),e._v(" "),s("span")],1)}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作","min-width":"200","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row,i=t.$index;return e._l(a.button_info,(function(t){return s("div",{key:t.id,staticStyle:{display:"inline-block"}},["text"==t.show_flag&&null==t.img?s("el-button",{staticStyle:{padding:"3px","margin-right":"5px"},attrs:{size:"mini",plain:"",type:t.but_type},on:{click:function(s){return e.onRowBtnClick(a,i,t)}}},[e._v(e._s(t.name))]):e._e(),e._v(" "),"icon"==t.show_flag?s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.name,placement:"bottom-start"}},[s("el-button",{staticStyle:{"margin-right":"5px"},attrs:{type:t.but_type,icon:t.img,circle:""},on:{click:function(s){return e.onRowBtnClick(a,i,t)}}})],1):e._e(),e._v(" "),"text"!==t.show_flag&&null!==t.img&&"icon"!==t.show_flag?s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.name,placement:"bottom-start"}},[s("i",{class:t.img,style:[{marginRight:"5px",color:t.color,fontSize:"15px"}],attrs:{size:"mini",circle:""},on:{click:function(s){return e.onRowBtnClick(a,i,t)}}})]):e._e()],1)}))}}])})],1),e._v(" "),s("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,"page-sizes":e.thPageInfo,page:e.listQuery.page,limit:e.listQuery.num},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"num",t)},pagination:e.getList}}),e._v(" "),s("el-dialog",{attrs:{title:"导入Excel文件",visible:e.packExcel,width:"550px"},on:{"update:visible":function(t){e.packExcel=t}}},[s("div",{domProps:{innerHTML:e._s(e.aHtml)}}),e._v(" "),s("div",[s("label",[e._v("公司选择：")]),e._v(" "),s("el-select",{ref:"self_id",staticStyle:{width:"400px",margin:"10px 0"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.self_id,callback:function(t){e.self_id=t},expression:"self_id"}},e._l(e.groupOption,(function(e){return s("el-option",{key:e.self_id,attrs:{label:e.group_name,value:e.self_id}})})),1)],1),e._v(" "),s("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.uploadUrl(),accept:".xls,.xlsx","on-preview":e.handlePreview,"on-remove":e.handleRemove,"show-file-list":!0,limit:1,name:"importFile",headers:e.uploadHeaders(),"on-success":e.onSuccess}},[s("el-button",{attrs:{slot:"trigger",round:"",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")])],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:e.submitUpload}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:e.title,visible:e.dialogFormCheck,width:"600px"},on:{"update:visible":function(t){e.dialogFormCheck=t}}},[s("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px",width:"400px"},attrs:{model:e.temp,rules:e.rules,"label-position":"left","label-width":"100px"}},[s("el-form-item",{attrs:{label:"运费",prop:"tel"}},[s("el-input",{staticClass:"filter-item",model:{value:e.temp.price,callback:function(t){e.$set(e.temp,"price",t)},expression:"temp.price"}})],1),e._v(" "),s("el-row",[s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.selAddress,expression:"selAddress"}]},[s("el-form-item",{attrs:{label:"发货地址",prop:"contacts"}},[s("el-input",{staticClass:"filter-item",attrs:{disabled:""},model:{value:e.temp.send_address,callback:function(t){e.$set(e.temp,"send_address",t)},expression:"temp.send_address"}})],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.add_Address,expression:"add_Address"}]},[s("el-form-item",{attrs:{label:"发货地址",required:""}},[s("el-row",[s("el-select",{staticClass:"filter-item",staticStyle:{width:"97px"},attrs:{placeholder:"全国",clearable:""},on:{change:e.onProChanged_send},model:{value:e.temp.send_sheng,callback:function(t){e.$set(e.temp,"send_sheng",t)},expression:"temp.send_sheng"}},e._l(e.proOptions_send,(function(e){return s("el-option",{key:e.self_id,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),s("el-select",{staticClass:"filter-item",staticStyle:{width:"97px"},attrs:{placeholder:"全市",clearable:""},on:{change:e.onCityChanged_send},model:{value:e.temp.send_shi,callback:function(t){e.$set(e.temp,"send_shi",t)},expression:"temp.send_shi"}},e._l(e.cityOptions_send,(function(e){return s("el-option",{key:e.self_id,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),s("el-select",{staticClass:"filter-item",staticStyle:{width:"97px"},attrs:{placeholder:"全区",clearable:""},model:{value:e.temp.send_qu,callback:function(t){e.$set(e.temp,"send_qu",t)},expression:"temp.send_qu"}},e._l(e.areaOptions_send,(function(e){return s("el-option",{key:e.self_id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.add_Address,expression:"add_Address"}]},[s("el-form-item",{attrs:{label:"详细地址",prop:"send_address"}},[s("el-input",{staticClass:"filter-item",staticStyle:{float:"left"},attrs:{placeholder:"详细地址"},model:{value:e.temp.send_address_txt,callback:function(t){e.$set(e.temp,"send_address_txt",t)},expression:"temp.send_address_txt"}})],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.add_Address,expression:"add_Address"}]},[s("el-form-item",{attrs:{label:"联系方式",prop:"send_address"}},[s("el-input",{staticClass:"filter-item",staticStyle:{float:"left",width:"148px"},attrs:{placeholder:"联系人"},model:{value:e.temp.send_name,callback:function(t){e.$set(e.temp,"send_name",t)},expression:"temp.send_name"}}),e._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{float:"right",width:"148px"},attrs:{placeholder:"联系电话"},model:{value:e.temp.send_tel,callback:function(t){e.$set(e.temp,"send_tel",t)},expression:"temp.send_tel"}})],1)],1)],1),e._v(" "),s("el-row",[s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.selgatherAddress,expression:"selgatherAddress"}]},[s("el-form-item",{attrs:{label:"收货地址",prop:"tel"}},[s("el-input",{staticClass:"filter-item",attrs:{disabled:""},model:{value:e.temp.gather_address,callback:function(t){e.$set(e.temp,"gather_address",t)},expression:"temp.gather_address"}})],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.add_gatherAddress,expression:"add_gatherAddress"}]},[s("el-form-item",{attrs:{label:"收货地址",required:""}},[s("el-row",[s("el-select",{staticClass:"filter-item",staticStyle:{width:"97px"},attrs:{placeholder:"全国",clearable:""},on:{change:e.onProChanged_gather},model:{value:e.temp.gather_sheng,callback:function(t){e.$set(e.temp,"gather_sheng",t)},expression:"temp.gather_sheng"}},e._l(e.proOptions_gather,(function(e){return s("el-option",{key:e.self_id,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),s("el-select",{staticClass:"filter-item",staticStyle:{width:"97px"},attrs:{placeholder:"全市",clearable:""},on:{change:e.onCityChanged_gather},model:{value:e.temp.gather_shi,callback:function(t){e.$set(e.temp,"gather_shi",t)},expression:"temp.gather_shi"}},e._l(e.cityOptions_gather,(function(e){return s("el-option",{key:e.self_id,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),s("el-select",{staticClass:"filter-item",staticStyle:{width:"97px"},attrs:{placeholder:"全区",clearable:""},model:{value:e.temp.gather_qu,callback:function(t){e.$set(e.temp,"gather_qu",t)},expression:"temp.gather_qu"}},e._l(e.areaOptions_gather,(function(e){return s("el-option",{key:e.self_id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.add_gatherAddress,expression:"add_gatherAddress"}]},[s("el-form-item",{attrs:{label:"详细地址",prop:"send_address"}},[s("el-input",{staticClass:"filter-item",staticStyle:{float:"left"},attrs:{placeholder:"详细地址"},model:{value:e.temp.gather_address_txt,callback:function(t){e.$set(e.temp,"gather_address_txt",t)},expression:"temp.gather_address_txt"}})],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.add_gatherAddress,expression:"add_gatherAddress"}]},[s("el-form-item",{attrs:{label:"联系方式",prop:"send_address"}},[s("el-input",{staticClass:"filter-item",staticStyle:{float:"left",width:"148px"},attrs:{placeholder:"联系人"},model:{value:e.temp.gather_name,callback:function(t){e.$set(e.temp,"gather_name",t)},expression:"temp.gather_name"}}),e._v(" "),s("el-input",{staticClass:"filter-item",staticStyle:{float:"right",width:"148px"},attrs:{placeholder:"联系电话"},model:{value:e.temp.gather_tel,callback:function(t){e.$set(e.temp,"gather_tel",t)},expression:"temp.gather_tel"}})],1)],1)],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.dialogFormRemove}},[e._v("\n        取消\n      ")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.online}},[e._v("\n        提交\n      ")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"可调度订单",visible:e.dialogFormdd,width:"60%"},on:{"update:visible":function(t){e.dialogFormdd=t}}},[s("div",{staticStyle:{padding:"0 0 10px 0","margin-top":"-17px"}},[s("label",[e._v("公司选择：")]),e._v(" "),s("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请选择公司",clearable:"",filterable:""},on:{change:e.group_change},model:{value:e.listQuery2.group_code,callback:function(t){e.$set(e.listQuery2,"group_code",t)},expression:"listQuery2.group_code"}},e._l(e.groupOption,(function(e){return s("el-option",{key:e.self_id,attrs:{label:e.group_name,value:e.group_code}})})),1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listCheck,expression:"listCheck"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list2,border:"","highlight-current-row":"",height:"400"},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),s("el-table-column",{attrs:{label:"所属公司","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return s("div",{staticClass:"flex-column"},[s("span",[e._v(e._s(a.group_name))])])}}])}),e._v(" "),s("el-table-column",{attrs:{label:"客户公司","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return s("div",{staticClass:"flex-column"},[s("span",[e._v(e._s(a.company_name))])])}}])}),e._v(" "),s("el-table-column",{attrs:{label:"运输类型","min-width":"300px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return s("div",{staticClass:"flex-column"},[s("span",{staticStyle:{display:"inline-flex",width:"500px",height:"20px"}},[s("el-image",{staticStyle:{width:"20px",height:"20px",display:"inline-block","margin-right":"5px"},attrs:{src:a.type_inco}}),e._v(" "),s("span",{staticStyle:{display:"inline-block",width:"470px",overflow:"hidden"}},[e._v("始发地："+e._s(a.send_sheng_name)+e._s(a.send_shi_name)+e._s(a.send_qu_name)+"\n              "+e._s(a.send_address)),s("strong",[e._v("→")]),e._v("\n              目的地："+e._s(a.gather_sheng_name)+e._s(a.gather_shi_name)+e._s(a.gather_qu_name)+"\n              "+e._s(a.gather_address)+" ")])],1)])}}])}),e._v(" "),s("el-table-column",{attrs:{label:"货品信息","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return s("div",{staticClass:"flex-column"},[s("el-tooltip",{attrs:{placement:"left",effect:"right"}},[0!=a.count?s("div",{attrs:{slot:"content"},slot:"content"},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%","border-radius":"10px","box-shadow":"-1px -1px 20px 1px #C0C0C0"},attrs:{data:a.good_info,"header-cell-style":{background:"#eef1f6"},"row-style":{},border:"","max-height":"500","highlight-current-row":""}},[s("el-table-column",{attrs:{label:"货品名称"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("span",[e._v(e._s(a.good_name))])]}}],null,!0)}),e._v(" "),s("el-table-column",{attrs:{label:"货品数量"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("span",[e._v(e._s(a.good_number)+" ")])]}}],null,!0)}),e._v(" "),s("el-table-column",{attrs:{label:"货品重量","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("span",[e._v(e._s(a.good_weight))])]}}],null,!0)}),e._v(" "),s("el-table-column",{attrs:{label:"货品体积"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("span",[e._v(e._s(a.good_volume))])]}}],null,!0)})],1)],1):e._e(),e._v(" "),s("div",[s("span",[e._v(e._s(a.good_info_show))])])])],1)}}])})],1),e._v(" "),s("div",{staticStyle:{"text-align":"center","margin-left":"0","margin-top":"15px"}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.create_dispatch}},[e._v("提交")])],1)],1)],1)},i=[],n=(s("ac6a"),s("ade3")),l=s("3a29"),r=s("c24f"),o=s("c9d9"),d=s("6724"),c=(s("ed08"),s("333d")),u=(s("bc3a"),s("5f87")),p={name:"ComplexTable",components:{Pagination:c["a"]},directives:{waves:d["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]},typeFilter:function(e){return calendarTypeKeyValue[e]}},data:function(){var e,t;return t={multipleSelection:"",thImportInfo:[],thButtonInfo:[],thPageInfo:[],tableKey:0,list:null,list_dis:null,total:0,listLoading:!0,listDispatch:!0,groupOption:[],file_id:"",self_id:"",fileList:[],returnUrl:"",listQuery:{page:1,limit:20,start_time:null,end_time:null,group_code:null},listQuery2:{group_code:null},useFlagOptions:[{key:"1",label:"未支付"},{key:"2",label:"未接单"},{key:"3",label:"已接单"},{key:"4",label:"已调度"},{key:"5",label:"运输中"},{key:"6",label:"已完成"},{key:"7",label:"已取消"}],proOptions_send:[],cityOptions_send:[],areaOptions_send:[],proOptions_gather:[],cityOptions_gather:[],areaOptions_gather:[],title2:null,title:null,dialogFormDis:!1,dialogFormVisible:!1,dialogFormCheck:!1,dialogFormdd:!1,packExport:!1,packExcel:!1,selAddress:!0,add_Address:!1,selgatherAddress:!0,add_gatherAddress:!1,temp:(e={price:"",self_id:"",group_code:"",send_sheng:"",send_shi:"",send_qu:"",gather_sheng:"",gather_shi:"",gather_qu:"",send_tel:"",gather_tel:"",send_name:"",gather_name:"",send_address:"",gather_address:"",send_address_txt:"",gather_address_txt:"",checked_Send:null,checked_Gather:null},Object(n["a"])(e,"checked_Send",!1),Object(n["a"])(e,"checked_Gather",!1),e),selectedIDs:null},Object(n["a"])(t,"dialogFormCheck",!1),Object(n["a"])(t,"iUrl",""),Object(n["a"])(t,"importHtml",""),Object(n["a"])(t,"aHtml",""),Object(n["a"])(t,"import_color",""),Object(n["a"])(t,"import_text",""),Object(n["a"])(t,"import_url",""),Object(n["a"])(t,"rules",{car_brand:[{required:!0,message:"请选择车辆类型",trigger:"blur"}],car_number:[{required:!0,message:"请输入车牌号",trigger:"blur"}]}),Object(n["a"])(t,"list2",null),Object(n["a"])(t,"listCheck",!1),t},created:function(){var e=this;this.getList(),this.tmsAddres_send(),this.tmsAddres_gather(),Object(l["d"])().then((function(t){e.thButtonInfo=t.data.button_info,e.thPageInfo=t.data.page_info})),this.getGroup()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(l["f"])(this.listQuery).then((function(t){e.list=t.data.items,e.total=t.data.total,e.listLoading=!1}))},handleDisable:function(e,t){return"Y"===e.dispatch_flag&&"N"===e.on_line_flag},handleSelectionChange:function(e){console.log(e),this.multipleSelection=e;var t="";this.multipleSelection.map((function(e){t+=e.self_id+",",console.log(t)})),this.selectedIDs=t},create_dispatch:function(){var e=this;""!=this.multipleSelection?this.$router.push({path:"/tms/dispatch/check",query:{id:this.selectedIDs}}):e.$notify({title:"温馨提示：",message:"您未选中调度订单，请重新操作！",type:"warning"})},onThBtnClick:function(e){"dispatch"==e.use_type?this.dialogFormdd=!0:"combination"==e.use_type&&this.$router.push({path:"/tms/line/edit_combination",query:{id:null}})},group_change:function(){var e=this;this.listCheck=!0;var t={group_code:this.listQuery2.group_code,status:"1"};Object(l["b"])(t).then((function(t){e.list2=t.data.info,e.listCheck=!1}))},onRowBtnClick:function(e,t,s){var a=this;if(console.log(e,t,s),s.use_type==o["a"].ajax)if("use_flag"==s.flag)lineUseFlag(e.self_id).then((function(t){e.use_flag=t.data.use_flag}));else if("ajax"==s.use_type){var i="Y"==e.on_line_flag?"N":"Y";Object(l["h"])(e.self_id).then((function(t){e.on_line_flag=i,a.getList()}))}else"delete_flag"==s.flag&&this.$confirm("此操作将删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.self_id?lineDelFlag(e.self_id).then((function(e){a.$notify({title:"成功",message:e.msg,type:"success",duration:2e3}),a.list.splice(t,1)})):a.list.splice(t,1)})).catch((function(){a.$message({type:"info",message:"已取消"})}));else"details"==s.use_type?this.$router.push({path:"/tms/dispatch/details",query:{id:e.self_id}}):"online"==s.flag&&(this.dialogFormCheck=!0,this.title="上线",this.temp.self_id=e.self_id,this.temp.group_code=e.group_code,this.temp.send_address=e.send_sheng_name+""+e.send_shi_name+e.send_qu_name+e.send_address,this.temp.gather_address=e.gather_sheng_name+""+e.gather_shi_name+e.gather_qu_name+e.gather_address,console.log(this.temp.self_id))},getGroup:function(){var e=this;Object(r["l"])().then((function(t){e.groupOption=t.data.items}))},onFilter:function(){this.listQuery.page=1,this.getList()},handlePreview:function(e){console.log(e)},handleRemove:function(e,t){},disSubmit:function(){var e=app.multipleSelection,t=[];e.forEach((function(e){e.carId+",",t.push(e.self_id)}));this.$router.push({path:"/tms/dispatch/check",query:{id:null}})},onProChanged_send:function(){var e=this;this.cityOptions_send=this.thAddressInfo.filter((function(t){return t.parent_id==e.temp.send_sheng})),this.areaOptions_send=[],this.temp.city=void 0,this.temp.area=void 0},onCityChanged_send:function(e){var t=this;this.areaOptions_send=this.thAddressInfo.filter((function(e){return e.parent_id==t.temp.send_shi})),this.temp.area=void 0},onProChanged_gather:function(){var e=this;this.cityOptions_gather=this.thAddressInfo.filter((function(t){return t.parent_id==e.temp.gather_sheng})),this.areaOptions_gather=[],this.temp.city=void 0,this.temp.area=void 0},onCityChanged_gather:function(e){var t=this;this.areaOptions_gather=this.thAddressInfo.filter((function(e){return e.parent_id==t.temp.gather_shi})),this.temp.area=void 0},tmsAddres_send:function(){var e=this;Object(r["y"])().then((function(t){e.thAddressInfo=t.data.address_all_info,e.proOptions_send=e.thAddressInfo.filter((function(e){return 0==e.parent_id}))}))},tmsAddres_gather:function(){var e=this;Object(r["y"])().then((function(t){e.thAddressInfo=t.data.address_all_info,e.proOptions_gather=e.thAddressInfo.filter((function(e){return 0==e.parent_id}))}))},checked_send:function(){1==this.temp.checked_Send?(this.selAddress=!1,this.add_Address=!0):(this.selAddress=!0,this.add_Address=!1),this.temp.send_sheng="",this.temp.send_shi="",this.temp.send_qu="",this.temp.send_address_txt="",this.temp.send_name="",this.temp.send_tel=""},checked_gather:function(){1==this.temp.checked_Gather?(this.selgatherAddress=!1,this.add_gatherAddress=!0):(this.selgatherAddress=!0,this.add_gatherAddress=!1),this.temp.gather_sheng="",this.temp.gather_shi="",this.temp.gather_qu="",this.temp.gather_address_txt="",this.temp.gather_name="",this.temp.gather_tel=""},uploadUrl:function(){var e="".concat(window.location.origin).concat("/prod-api","/up/execl");return e},uploadHeaders:function(){return{dtoken:Object(u["a"])()}},onSuccess:function(e,t,s){this.file_id=e.data.self_id,this.returnUrl=e.data.pathurl},submitUpload:function(){var e=this;if(this.self_id){var t={importurl:this.returnUrl,group_code:this.self_id,file_id:this.file_id};packImport(t).then((function(t){e.$message({message:t.msg,type:"success",center:!0}),setTimeout((function(){e.getList(),e.packExcel=!1,e.$refs.upload.clearFiles(),e.self_id=""}),1e3)})).catch((function(t){e.$message({showClose:!0,dangerouslyUseHTMLString:!0,message:t,type:"error",center:!0,duration:0})}))}else this.$message({message:"请选择公司",type:"warning",center:!0})},dialogFormRemove:function(){this.dialogFormCheck=!1,this.temp.price="",this.temp.send_sheng="",this.temp.send_shi="",this.temp.send_qu="",this.temp.send_address_txt="",this.temp.send_name="",this.temp.send_tel="",this.temp.gather_sheng="",this.temp.gather_shi="",this.temp.gather_qu="",this.temp.gather_address_txt="",this.temp.gather_name="",this.temp.gather_tel=""},online:function(){var e,t,s,a,i=this;e=this.temp.checked_Send?"Y":"N",t=this.temp.checked_Gather?"Y":"N",console.log(e),console.log(t),a={send_qu:this.temp.send_qu,send_address:this.temp.send_address_txt,send_name:this.temp.send_name,send_tel:this.temp.send_tel,gather_qu:this.temp.gather_qu,gather_address:this.temp.gather_address_txt,gather_name:this.temp.gather_name,gather_tel:this.temp.gather_tel},s={address:a,self_id:this.temp.self_id,price:this.temp.price,send_flag:e,gather_flag:t,group_code:this.temp.group_code},console.log(this.temp),Object(l["g"])(s).then((function(e){i.$notify({title:"Success",message:e.msg,type:"success",duration:1e3}),i.temp.price=null,i.dialogFormCheck=!1,i.getList()})),this.temp.price=null,this.dialogFormCheck=!1,this.getList()}}},h=p,_=(s("689e"),s("2877")),m=Object(_["a"])(h,a,i,!1,null,null,null);t["default"]=m.exports},"5ee5":function(e,t,s){},6:function(e,t){},6724:function(e,t,s){"use strict";s("8d41");var a="@@wavesContext";function i(e,t){function s(s){var a=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),n=i.ele;if(n){n.style.position="relative",n.style.overflow="hidden";var l=n.getBoundingClientRect(),r=n.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(l.width,l.height)+"px",n.appendChild(r)),i.type){case"center":r.style.top=l.height/2-r.offsetHeight/2+"px",r.style.left=l.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(s.pageY-l.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(s.pageX-l.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=i.color,r.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=s:e[a]={removeHandle:s},s}var n={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},l=function(e){e.directive("waves",n)};window.Vue&&(window.waves=n,Vue.use(l)),n.install=l;t["a"]=n},"689e":function(e,t,s){"use strict";s("5ee5")},"8d41":function(e,t,s){},aa77:function(e,t,s){var a=s("5ca1"),i=s("be13"),n=s("79e5"),l=s("fdef"),r="["+l+"]",o="​",d=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),u=function(e,t,s){var i={},r=n((function(){return!!l[e]()||o[e]()!=o})),d=i[e]=r?t(p):l[e];s&&(i[s]=d),a(a.P+a.F*r,"String",i)},p=u.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},c5f6:function(e,t,s){"use strict";var a=s("7726"),i=s("69a8"),n=s("2d95"),l=s("5dbc"),r=s("6a99"),o=s("79e5"),d=s("9093").f,c=s("11e9").f,u=s("86cc").f,p=s("aa77").trim,h="Number",_=a[h],m=_,f=_.prototype,g=n(s("2aeb")(f))==h,v="trim"in String.prototype,b=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():p(t,3);var s,a,i,n=t.charCodeAt(0);if(43===n||45===n){if(s=t.charCodeAt(2),88===s||120===s)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+t}for(var l,o=t.slice(2),d=0,c=o.length;d<c;d++)if(l=o.charCodeAt(d),l<48||l>i)return NaN;return parseInt(o,a)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof _&&(g?o((function(){f.valueOf.call(s)})):n(s)!=h)?l(new m(b(t)),s,_):b(t)};for(var y,w=s("9e1e")?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)i(m,y=w[x])&&!i(_,y)&&u(_,y,c(m,y));_.prototype=f,f.constructor=_,s("2aba")(a,h,_)}},c9d9:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var a={ajax:"ajax",wicket:"wicket",edit:"edit"}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);