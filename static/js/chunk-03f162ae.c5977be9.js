(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03f162ae"],{"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,a,i){return t/=i/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,a){var o=s(),l=t-o,r=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=r;var s=Math.easeInOutQuad(c,o,l,e);n(s),c<e?i(t):a&&"function"===typeof a&&a()};u()}},"0a49":function(t,e,a){var i=a("9b43"),n=a("626a"),s=a("4bf8"),o=a("9def"),l=a("cd1c");t.exports=function(t,e){var a=1==t,r=2==t,c=3==t,u=4==t,d=6==t,f=5==t||d,p=e||l;return function(e,l,m){for(var _,y,h=s(e),g=n(h),v=i(l,m,3),w=o(g.length),b=0,x=a?p(e,w):r?p(e,0):void 0;w>b;b++)if((f||b in g)&&(_=g[b],y=v(_,b,h),t))if(a)x[b]=y;else if(y)switch(t){case 3:return!0;case 5:return _;case 6:return b;case 2:x.push(_)}else if(u)return!1;return d?-1:c||u?u:x}}},"0ec3":function(t,e,a){"use strict";a("a721")},"0f28":function(t,e,a){"use strict";function i(){var t="".concat(window.location.origin).concat("/prod-api","/up/img");return t}a.d(e,"a",(function(){return i}))},1169:function(t,e,a){var i=a("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"20d6":function(t,e,a){"use strict";var i=a("5ca1"),n=a("0a49")(6),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(s)},"23ba":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("b775");function n(t){return Object(i["a"])({url:"company/company/getGroup",method:"get",params:t})}},"3dc3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"table-header header-fixed"},[a("div",{staticClass:"flex-space-between table-title-container"},[a("div",[t._v("用户访问页面统计列表")]),t._v(" "),a("div",t._l(t.thButtonInfo,(function(e){return a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],key:e.id,staticClass:"filter-item",style:[{backgroundColor:e.color,color:"white"}],attrs:{size:"mini",icon:e.img},on:{click:function(a){return t.onThBtnClick(e)}}},[t._v(t._s("icon"==e.show_flag?null:e.name))])})),1)]),t._v(" "),a("div",{staticClass:"filter-container"})]),t._v(" "),a("el-row",[a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:19}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{directives:[{name:"show",rawName:"v-show",value:"Y"==t.group_show,expression:'group_show == "Y"'}],attrs:{label:"所属公司","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(i.group_name))])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"访问页面","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v(t._s(i.browse_path))])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"访问时间",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.create_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"访问来源",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.place))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"访问ip",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.ip))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"用户信息",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",{staticStyle:{height:"60px","line-height":"60px",display:"inline-block",float:"left","margin-right":"10px"}},[t._v(t._s(i.token_name))])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,"page-sizes":t.thPageInfo,page:t.listQuery.page,limit:t.listQuery.num},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"num",e)},pagination:t.getList}})],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:5}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("用户访问页面排行")])]),t._v(" "),t._l(t.ranking_info,(function(e,i){return a("div",{key:i,staticClass:"text item",staticStyle:{display:"flex"}},[a("el-tag",{staticStyle:{width:"25px"}},[t._v(t._s(i+1))]),a("span",{staticStyle:{display:"flex",flex:"1",padding:"0 10px",overflow:"hidden"}},[t._v(t._s(e.browse_path))]),a("span",{staticStyle:{display:"inline-block",float:"right"}},[t._v(t._s(e.count)+"次")])],1)}))],2)],1)],1)],1)},n=[],s=(a("20d6"),a("ac6a"),a("ade3")),o=a("b775");function l(t){return Object(o["a"])({url:"/analyze/visit/visitList",method:"post",params:t})}function r(t){return Object(o["a"])({url:"/analyze/visit/visitPage",method:"post",params:t})}var c=a("23ba"),u=a("0835"),d=a("c9d9"),f=a("6724"),p=a("333d"),m={name:"ComplexTable",components:{Pagination:p["a"],ImageUpload:u["a"]},directives:{waves:f["a"]},data:function(){var t;return{idd:"",thButtonInfo:[],thPageInfo:[],group:[],classify_1:[],useFlagOptions:[{key:"Y",label:"启用"},{key:"N",label:"禁用"}],classify_show:!1,tableKey:0,list:null,total:0,listLoading:!0,group_show:"N",listQuery:{page:1,num:10,classify_name:null,level:null,use_flag:"Y"},ranking_info:[],temp:(t={group_code:null,type:"1",parent_classify_id:null,classify_name:null},Object(s["a"])(t,"parent_classify_id",null),Object(s["a"])(t,"self_id",null),t),dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]}}},created:function(){var t=this;this.getList(),l().then((function(e){t.thButtonInfo=e.data.button_info,t.thPageInfo=e.data.page_info})),this.getGroup()},methods:{onImagesUpdate:function(t){console.log("data",t),this.keyInfo.forEach((function(e){e.key==t.imageKey&&(e.imageUrls=t.imageUrls)}))},confirm:function(){console.log("keyInfo:",this.keyInfo)},getList:function(){var t=this;this.listLoading=!0,r(this.listQuery).then((function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1,t.ranking_info=e.data.ranking_info,t.group_show=e.data.group_show}))},onThBtnClick:function(t){"wicket"==t.use_type&&(this.temp.self_id=null,this.temp.group_code=this.group[0].group_code,this.handleCreate(this.temp.group_code,null),1==this.temp.type?this.classify_show=!1:this.classify_show=!0)},getGroup:function(){var t=this;Object(c["a"])().then((function(e){t.group=e.data.items}))},onFilter:function(){this.listQuery.page=1,this.getList()},onRowBtnClick:function(t,e,a){var i=this;a.use_type==d["a"].ajax?"use_flag"==a.flag?changeClassifyUseFlag(t.self_id).then((function(e){t.use_flag=e.data.use_flag})):"delete_flag"==a.flag&&changeClassifyDelFlag(t.self_id).then((function(t){i.$notify({title:"成功",message:t.msg,type:"success",duration:2e3}),i.list.splice(e,1)})):a.use_type==d["a"].update||a.use_type==d["a"].edit?this.$router.push({path:"/company/edit",query:{id:t.self_id}}):a.use_type==d["a"].wicket&&"son_revise"==a.flag&&(this.handleCreate(t.group_code,t.self_id),this.temp.self_id=t.self_id)},resetTemp:function(){this.temp={group_code:null,type:"1",parent_classify_id:null,classify_name:null,self_id:null}},onlevelChanged:function(){1==this.temp.type?this.classify_show=!1:this.classify_show=!0},onGroupChanged:function(){var t=this;this.temp.parent_classify_id=null;var e={group_code:this.temp.group_code,self_id:this.temp.self_id};createClassify(e).then((function(e){null!=e.data.can_classify_info?(t.classify_1=e.data.can_classify_info,t.temp.group_code=e.data.classify_info.group_code,t.temp.classify_name=e.data.classify_info.classify_name,t.temp.type=e.data.classify_info.level,t.temp.self_id=e.data.classify_info.self_id,t.temp.parent_classify_id=e.data.classify_info.parent_classify_id):(t.temp.group_code=t.group[0].group_code,console.log(t.temp.group_code)),1==t.temp.type?t.classify_show=!1:t.classify_show=!0}))},handleCreate:function(t,e){var a=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){a.$refs["dataForm"].clearValidate()}));var i={group_code:t,self_id:e};createClassify(i).then((function(t){a.temp.group_code=a.group[0].group_code,null!==t.data.can_classify_info&&(a.classify_1=t.data.can_classify_info,a.temp.group_code=t.data.classify_info.group_code,a.temp.classify_name=t.data.classify_info.classify_name,a.temp.type=t.data.classify_info.level,a.temp.self_id=t.data.classify_info.self_id,a.temp.parent_classify_id=t.data.classify_info.parent_classify_id),1==a.temp.type?a.classify_show=!1:a.classify_show=!0}))},onClassifyChanged:function(t){},payCreate:function(t){var e=this;this.resetTemp2(),this.dialogStatus="create",this.payFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()})),fetchCompanyPayEditInfo(t).then((function(t){e.paytemp.app_id=t.data.wx_pay_info.app_id,e.paytemp.key=t.data.wx_pay_info.key,e.paytemp.mch_id=t.data.wx_pay_info.mch_id,e.paytemp.pay_app_id=t.data.wx_pay_info.pay_app_id,e.paytemp.secret=t.data.wx_pay_info.secret,e.paytemp.wx_name=t.data.wx_pay_info.wx_name,e.paytemp.gathering_flag=t.data.gathering_flag}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&addClassify(t.temp).then((function(e){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:e.msg,type:"success",duration:2e3}),t.getList()}))}))},createPayData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&addCompanyPay(t.paytemp).then((function(e){t.list.unshift(t.paytemp),t.payFormVisible=!1,t.$notify({title:"支付配置",message:e.msg,type:"success",duration:2e3}),t.getList()}))}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);a.timestamp=+new Date(a.timestamp),updateArticle(a).then((function(){var e=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(e,1,t.temp),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))}}},_=m,y=(a("0ec3"),a("2877")),h=Object(y["a"])(_,i,n,!1,null,null,null);e["default"]=h.exports},6724:function(t,e,a){"use strict";a("8d41");var i="@@wavesContext";function n(t,e){function a(a){var i=Object.assign({},e.value),n=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=n.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),l=s.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",s.appendChild(l)),n.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-o.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-o.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=n.color,l.className="waves-ripple z-active",!1}}return t[i]?t[i].removeHandle=a:t[i]={removeHandle:a},a}var s={bind:function(t,e){t.addEventListener("click",n(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[i].removeHandle,!1),t.addEventListener("click",n(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[i].removeHandle,!1),t[i]=null,delete t[i]}},o=function(t){t.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(o)),s.install=o;e["a"]=s},"8d41":function(t,e,a){},a721:function(t,e,a){},c9d9:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i={ajax:"ajax",wicket:"wicket",edit:"edit"}},cd1c:function(t,e,a){var i=a("e853");t.exports=function(t,e){return new(i(t))(e)}},e853:function(t,e,a){var i=a("d3f4"),n=a("1169"),s=a("2b4c")("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)||(e=void 0),i(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}}}]);