(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e55864e"],{"06d8":function(t,e,a){},"09f4":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,a){var o=s(),l=t-o,r=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=r;var s=Math.easeInOutQuad(c,o,l,e);i(s),c<e?n(t):a&&"function"===typeof a&&a()};u()}},"0f28":function(t,e,a){"use strict";function n(){var t="".concat(window.location.origin).concat("/prod-api","/up/img");return t}a.d(e,"a",(function(){return n}))},6724:function(t,e,a){"use strict";a("8d41");var n="@@wavesContext";function i(t,e){function a(a){var n=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=i.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),l=s.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",s.appendChild(l)),i.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-o.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-o.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=a:t[n]={removeHandle:a},a}var s={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},o=function(t){t.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(o)),s.install=o;e["a"]=s},"8d41":function(t,e,a){},afbc:function(t,e,a){"use strict";a("06d8")},c9d9:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={ajax:"ajax",wicket:"wicket",edit:"edit"}},cede:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"table-header header-fixed"},[a("div",{staticClass:"flex-space-between table-title-container"},[a("div",[t._v("用户收藏及浏览商品列表")]),t._v(" "),a("div",t._l(t.thButtonInfo,(function(e){return a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],key:e.id,staticClass:"filter-item",style:[{backgroundColor:e.color,color:"white"}],attrs:{size:"mini",icon:e.img},on:{click:function(a){return t.onThBtnClick(e)}}},[t._v(t._s("icon"==e.show_flag?null:e.name))])})),1)])]),t._v(" "),a("el-row",[a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:19}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"商品信息","min-width":"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return a("div",{staticClass:"flex-column"},[a("span",[t._v("商品名称："+t._s(n.good_title))])])}}])}),t._v(" "),a("el-table-column",{attrs:{label:"是否删除收藏",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s("Y"==n.delete_flag?"删除":"未删除"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"浏览或收藏时间",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.create_time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"用户信息",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",{staticStyle:{height:"60px","line-height":"60px",display:"inline-block",float:"left","margin-right":"10px"}},[t._v(t._s(n.token_name))])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,"page-sizes":t.thPageInfo,page:t.listQuery.page,limit:t.listQuery.num},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"num",e)},pagination:t.getList}})],1),t._v(" "),a("el-col",{staticStyle:{"margin-top":"5px"},attrs:{span:5}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("用户收藏及浏览商品排行")])]),t._v(" "),t._l(t.ranking_info,(function(e,n){return a("div",{key:n,staticClass:"text item",staticStyle:{display:"flex"}},[a("el-tag",{staticStyle:{width:"25px"}},[t._v(t._s(n+1))]),a("span",{staticStyle:{display:"flex",flex:"1",padding:"0 10px",overflow:"hidden"}},[t._v(t._s(e.good_title))]),a("span",{staticStyle:{display:"inline-block",float:"right"}},[t._v(t._s(e.count)+"次")])],1)}))],2)],1)],1)],1)},i=[],s=(a("ac6a"),a("b775"));function o(t){return Object(s["a"])({url:"/analyze/track/trackList",method:"post",params:t})}function l(t){return Object(s["a"])({url:"/analyze/track/trackPage",method:"post",params:t})}var r=a("0835"),c=a("c9d9"),u=a("6724"),d=a("333d"),f={name:"ComplexTable",components:{Pagination:d["a"],ImageUpload:r["a"]},directives:{waves:u["a"]},data:function(){return{idd:"",thButtonInfo:[],thPageInfo:[],group:[],classify_1:[],useFlagOptions:[{key:"Y",label:"启用"},{key:"N",label:"禁用"}],classify_show:!1,tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,num:10,group_code:null,classify_name:null,level:null,use_flag:"Y"},ranking_info:[],textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[]}},created:function(){var t=this;this.getList(),o().then((function(e){t.thButtonInfo=e.data.button_info,t.thPageInfo=e.data.page_info}))},methods:{onImagesUpdate:function(t){console.log("data",t),this.keyInfo.forEach((function(e){e.key==t.imageKey&&(e.imageUrls=t.imageUrls)}))},confirm:function(){console.log("keyInfo:",this.keyInfo)},getList:function(){var t=this;this.listLoading=!0,l(this.listQuery).then((function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1,t.ranking_info=e.data.ranking_info}))},onThBtnClick:function(t){"wicket"==t.use_type&&(this.temp.self_id=null,this.temp.group_code=this.group[0].group_code,this.handleCreate(this.temp.group_code,null),1==this.temp.type?this.classify_show=!1:this.classify_show=!0)},onFilter:function(){this.listQuery.page=1,this.getList()},onRowBtnClick:function(t,e,a){var n=this;a.use_type==c["a"].ajax?"use_flag"==a.flag?changeClassifyUseFlag(t.self_id).then((function(e){t.use_flag=e.data.use_flag})):"delete_flag"==a.flag&&changeClassifyDelFlag(t.self_id).then((function(t){n.$notify({title:"成功",message:t.msg,type:"success",duration:2e3}),n.list.splice(e,1)})):a.use_type==c["a"].update||a.use_type==c["a"].edit?this.$router.push({path:"/company/edit",query:{id:t.self_id}}):a.use_type==c["a"].wicket&&"son_revise"==a.flag&&(this.handleCreate(t.group_code,t.self_id),this.temp.self_id=t.self_id)},resetTemp:function(){this.temp={group_code:null,type:"1",parent_classify_id:null,classify_name:null,self_id:null}},handleCreate:function(t,e){var a=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){a.$refs["dataForm"].clearValidate()}))},createData:function(){this.$refs["dataForm"].validate((function(t){}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);a.timestamp=+new Date(a.timestamp)}}))}}},p=f,m=(a("afbc"),a("2877")),h=Object(m["a"])(p,n,i,!1,null,null,null);e["default"]=h.exports}}]);