(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c16ceb36"],{"04a9":function(t,e,a){},"0878":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"table-header header-fixed"},[a("div",{staticClass:"flex-space-between table-title-container"},[a("div",[t._v(t._s(t.title))])])]),t._v(" "),a("div",{staticStyle:{width:"100%",padding:"10px 10px 0px 10px",border:"1px solid #eee",margin:"10px 0","box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.1)"}},[a("el-form",{staticStyle:{width:"100%"},attrs:{inline:!0,model:t.form,"label-width":"140px"}},[a("el-input",{staticStyle:{display:"none"},attrs:{placeholder:"线路id"},model:{value:t.form.self_id,callback:function(e){t.$set(t.form,"self_id",e)},expression:"form.self_id"}}),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:18}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"线路名称"}},[a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"线路名称"},model:{value:t.form.path_name,callback:function(e){t.$set(t.form,"path_name",e)},expression:"form.path_name"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"线路类型"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"选择线路类型",disabled:null!=t.form.self_id},model:{value:t.form.site_type,callback:function(e){t.$set(t.form,"site_type",e)},expression:"form.site_type"}},[a("el-option",{attrs:{label:"上学",value:"UP"}}),t._v(" "),a("el-option",{attrs:{label:"放学",value:"DOWN"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"发车批次"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"发车批次"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}},[a("el-option",{attrs:{label:"第一批次",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"第二批次",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"第三批次",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"第四批次",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"第五批次",value:"5"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"派遣司机"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"派遣司机"},model:{value:t.form.default_driver_id,callback:function(e){t.$set(t.form,"default_driver_id",e)},expression:"form.default_driver_id"}},t._l(t.dirverArr,(function(t,e){return a("el-option",{key:e,attrs:{value:t.self_id,label:t.actual_name}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"跟车照管"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"跟车照管"},model:{value:t.form.default_care_id,callback:function(e){t.$set(t.form,"default_care_id",e)},expression:"form.default_care_id"}},t._l(t.careArr,(function(t,e){return a("el-option",{key:e,attrs:{value:t.self_id,label:t.actual_name}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"上车点名"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"上车点名"},model:{value:t.form.call_up_flag,callback:function(e){t.$set(t.form,"call_up_flag",e)},expression:"form.call_up_flag"}},[a("el-option",{attrs:{label:"是",value:"Y"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"N"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"下车点名"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"下车点名"},model:{value:t.form.call_down_flag,callback:function(e){t.$set(t.form,"call_down_flag",e)},expression:"form.call_down_flag"}},[a("el-option",{attrs:{label:"是",value:"Y"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"N"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"发车提醒"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"发车提醒"},model:{value:t.form.start_flag,callback:function(e){t.$set(t.form,"start_flag",e)},expression:"form.start_flag"}},[a("el-option",{attrs:{label:"是",value:"Y"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"N"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"结束提醒"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"结束提醒"},model:{value:t.form.end_flag,callback:function(e){t.$set(t.form,"end_flag",e)},expression:"form.end_flag"}},[a("el-option",{attrs:{label:"是",value:"Y"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"N"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"到站提醒"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"到站提醒"},model:{value:t.form.arrive_flag,callback:function(e){t.$set(t.form,"arrive_flag",e)},expression:"form.arrive_flag"}},[a("el-option",{attrs:{label:"是",value:"Y"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"N"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"预约到站提醒"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"到站提醒"},on:{change:t.arriveflagss},model:{value:t.form.go_flag,callback:function(e){t.$set(t.form,"go_flag",e)},expression:"form.go_flag"}},[a("el-option",{attrs:{label:"是",value:"Y"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"N"}})],1)],1),t._v(" "),t.shows?a("el-form-item",{attrs:{label:"预约提醒时间 秒"}},[a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"提醒时间"},model:{value:t.form.go_time,callback:function(e){t.$set(t.form,"go_time",e)},expression:"form.go_time"}})],1):t._e()],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"是否允许打开小程序"}},[a("el-select",{staticStyle:{width:"250px"},attrs:{placeholder:"是否允许打开小程序"},model:{value:t.form.mini_flag,callback:function(e){t.$set(t.form,"mini_flag",e)},expression:"form.mini_flag"}},[a("el-option",{attrs:{label:"是",value:"Y"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"N"}})],1)],1)],1)],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.hasPath.length>0,expression:"hasPath.length>0"}],attrs:{span:6}},[a("el-card",{staticClass:"box-card",staticStyle:{width:"100%"}},[a("div",{staticStyle:{"margin-bottom":"5px"}},[t._v("已配置线路")]),t._v(" "),t._l(t.hasPath,(function(e,l){return a("div",{key:l,staticClass:"text item"},[t._v("\n                                "+t._s(e.path_name)+" -- "+t._s("UP"==e.site_type?"上学":"放学")+" -- "+t._s("第"+e.sort+"批次")+"\n                            ")])}))],2)],1)],1),t._v(" "),a("div",{staticStyle:{width:"100%",margin:"10px 0"}},[a("div",{staticStyle:{width:"150px",margin:"auto",display:"flex"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("取消")])],1)])],1)],1)])},r=[],o=(a("55dd"),a("e310")),i={data:function(){return{title:"",form:{path_name:"",site_type:"UP",school_car_id:"",default_driver_id:"",default_care_id:"",self_id:"",sort:"1",call_up_flag:"N",call_down_flag:"N",start_flag:"N",go_flag:"N",go_time:300,go_flag2:"N",go_time2:300,end_flag:"N",arrive_flag:"N",mini_flag:"N"},groupArr:[],carArr:[],dirverArr:[],careArr:[],self_id:"",path_name:"",shows:!0,shows2:!0,hasPath:[]}},created:function(){this.self_id=this.$route.query.self_id,this.school_car_id=this.$route.query.school_car_id,this.path_name=this.$route.query.path_name,this.form.school_car_id=this.school_car_id,this.form.self_id=this.self_id;var t={school_car_id:this.form.school_car_id,self_id:this.form.self_id};this.getHasLine(t)},methods:{chooseGroup:function(t){this.form.school_car_id="",this.form.default_driver_id="",this.form.default_care_id="",this.form.start_flag="Y",this.form.end_flag="Y",this.form.go_flag="Y",this.form.go_time="300",this.form.sort="1",this.form.call_down_flag="N",this.form.call_up_flag="N",this.form.arrive_flag="Y"},arriveflagss:function(){"N"==this.form.go_flag?this.shows=!1:this.shows=!0},arriveflagss2:function(){"N"==this.form.go_flag2?this.shows2=!1:this.shows2=!0},onSubmit:function(){var t=this;this.form.path_name?Object(o["m"])(this.form).then((function(e){t.$message({message:"线路添加成功！",type:"success",center:!0}),setTimeout((function(){t.$router.go(-1)}),1e3)})):this.$message({message:"线路名称不能为空！",type:"warning",center:!0})},getHasLine:function(t){var e=this;Object(o["a"])(t).then((function(t){null!==t.data.driver&&(e.dirverArr=t.data.driver.school_info),null!==t.data.care&&(e.careArr=t.data.care.school_info),e.form.school_car_id=t.data.school_car_id,null!=t.data.path_info?(e.form.path_name=t.data.path_info.path_name,e.form.group_code=t.data.path_info.group_code,null!==t.data.driver&&null!==t.data.care&&(e.form.default_driver_id=t.data.path_info.default_driver_id,e.form.default_care_id=t.data.path_info.default_care_id),e.form.start_flag=t.data.path_info.start_flag,e.form.end_flag=t.data.path_info.end_flag,e.form.go_flag=t.data.path_info.go_flag,e.form.go_time=t.data.path_info.go_time,e.form.arrive_flag=t.data.path_info.arrive_flag,e.form.site_type=t.data.path_info.site_type,e.form.call_up_flag=t.data.path_info.call_up_flag,e.form.call_down_flag=t.data.path_info.call_down_flag,e.form.sort=String(t.data.path_info.sort),e.form.mini_flag=t.data.path_info.mini_flag,"Y"==e.form.go_flag?e.shows=!0:e.shows=!1,"Y"==e.form.go_flag2?e.shows2=!0:e.shows2=!1):(e.shows=!1,e.shows2=!1),null!==e.form.self_id&&null!==t.data.path_info?e.title="修改"+t.data.car_info.group_name+" 车辆："+t.data.car_info.car_number+" 核载人数"+t.data.car_info.car_nuclear+" 的线路":e.title="新增"+t.data.car_info.group_name+" 车辆："+t.data.car_info.car_number+" 核载人数"+t.data.car_info.car_nuclear+" 的线路",t.data.has_path&&(e.hasPath=t.data.has_path)}))}}},s=i,n=(a("5be4"),a("2877")),c=Object(n["a"])(s,l,r,!1,null,"1b151d6e",null);e["default"]=c.exports},"2f21":function(t,e,a){"use strict";var l=a("79e5");t.exports=function(t,e){return!!t&&l((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,e,a){"use strict";var l=a("5ca1"),r=a("d8e8"),o=a("4bf8"),i=a("79e5"),s=[].sort,n=[1,2,3];l(l.P+l.F*(i((function(){n.sort(void 0)}))||!i((function(){n.sort(null)}))||!a("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),r(t))}})},"5be4":function(t,e,a){"use strict";a("04a9")},e310:function(t,e,a){"use strict";a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"m",(function(){return s})),a.d(e,"a",(function(){return n})),a.d(e,"f",(function(){return c})),a.d(e,"h",(function(){return f})),a.d(e,"g",(function(){return d})),a.d(e,"i",(function(){return _})),a.d(e,"j",(function(){return u})),a.d(e,"k",(function(){return m})),a.d(e,"l",(function(){return h})),a.d(e,"n",(function(){return p}));var l=a("b775");function r(t){return Object(l["a"])({url:"/school/line/lineList",method:"get",params:t})}function o(t){return Object(l["a"])({url:"/school/line/linePage",method:"get",params:t})}function i(t){return Object(l["a"])({url:"company/company/getGroup",method:"get",params:t})}function s(t){return Object(l["a"])({url:"/school/line/lineAdd",method:"get",params:t})}function n(t){return Object(l["a"])({url:"/school/line/createLine",method:"get",params:t})}function c(t){return Object(l["a"])({url:"/school/line/linePathway",method:"get",params:t})}function f(t){return Object(l["a"])({url:"/school/line/linePathwayDelete",method:"get",params:t})}function d(t){return Object(l["a"])({url:"/school/line/linePathwayAdd",method:"get",params:t})}function _(t){return Object(l["a"])({url:"/school/line/pathwayStation",methods:"get",params:t})}function u(t){return Object(l["a"])({url:"/school/line/pathwayStudent",method:"get",params:t})}function m(t){return Object(l["a"])({url:"/school/line/pathwayStudentAdd",method:"get",params:t})}function h(t){return Object(l["a"])({url:"/school/line/studentImport",method:"get",params:t})}function p(t){return Object(l["a"])({url:"/school/line/lineExcel",methods:"get",params:t})}}}]);