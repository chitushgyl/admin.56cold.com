(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04f7d054"],{"06b2":function(t,e,a){"use strict";a("f93b")},"0a49":function(t,e,a){var n=a("9b43"),i=a("626a"),r=a("4bf8"),o=a("9def"),c=a("cd1c");t.exports=function(t,e){var a=1==t,s=2==t,l=3==t,u=4==t,d=6==t,h=5==t||d,p=e||c;return function(e,c,f){for(var g,m,F=r(e),v=i(F),_=n(c,f,3),b=o(v.length),w=0,y=a?p(e,b):s?p(e,0):void 0;b>w;w++)if((h||w in v)&&(g=v[w],m=_(g,w,F),t))if(a)y[w]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:y.push(g)}else if(u)return!1;return d?-1:l||u?u:y}}},1169:function(t,e,a){var n=a("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"23ba":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("b775");function i(t){return Object(n["a"])({url:"company/company/getGroup",method:"get",params:t})}},7514:function(t,e,a){"use strict";var n=a("5ca1"),i=a("0a49")(5),r="find",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n(n.P+n.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(r)},"7e2b":function(t,e){},"7e8d":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return c}));var n=a("b775");function i(t){return Object(n["a"])({url:"/school/real/real_line",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/school/real/real_info",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/school/real/real_pathway",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/school/real/real_count",method:"get",params:t})}},"805f":function(t,e,a){},c742:function(t,e,a){"use strict";a("805f")},cd1c:function(t,e,a){var n=a("e853");t.exports=function(t,e){return new(n(t))(e)}},d7f77:function(t,e,a){"use strict";a.r(e);a("7f7f"),a("7514");var n,i,r=a("23ba"),o=a("7e8d"),c=a("9ca8"),s=(a("c037"),a("d28f"),a("627c"),a("007d"),a("8f9b")),l=new s["AMapManager"],u={components:{"v-chart":c["a"]},data:function(){var t=this;return{chooseGroup:"",amapManager:l,center:[121.329402,31.228667],zoom:10,events:{init:function(){s["lazyAMapApiLoaderInstance"].load().then((function(){t.initSearch()}))}},markerEvents:{},groupArr:[],pathInfo:[],pathWay:[],line_name:"",originPath:[],tempOriginPath:[],realOriginPath:[],markers:[],isShow:!1,color:["#3366cc","#dc3912","#ff9900","#109618","#990099","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6","#3b3eac","#FF0000","#FF00FF"],intervalId:null,pie1:{color:["#e78a20","#ebcca9"],title:{text:"车辆运行信息",left:"5%",textStyle:{color:"#FFFFFF"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",right:"3%",top:"35%",data:[],textStyle:{color:"#FFFFFF"},temWidth:20,itemHeight:20},series:[{name:"车辆运行信息",type:"pie",radius:"45%",center:["25%","47%"],data:[],label:{show:!1,position:"center"}}]},pie2:{color:["#e78a20","#ebcca9"],title:{text:"学生信息",textStyle:{color:"#FFFFFF"},left:"5%",top:"15px"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",top:"40%",right:"3%",data:[],textStyle:{color:"#FFFFFF"},temWidth:18,itemHeight:18},series:[{name:"学生信息",type:"pie",radius:"45%",center:["25%","52%"],data:[],label:{show:!1,position:"center"}}]},pie3:{color:["#e78a20","#ebcca9"],title:{text:"工作人员信息",textStyle:{color:"#FFFFFF"},left:"5%"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",top:"35%",right:"3%",data:[],textStyle:{color:"#FFFFFF"},temWidth:20,itemHeight:20},series:[{name:"工作人员信息",type:"pie",radius:"45%",center:["25%","47%"],data:[],label:{show:!1,position:"center"}}]},path:[[121.368463,31.190432],[121.403826,31.198766],[121.435197,31.202363],[121.464465,31.220128],[121.484721,31.238219]],indexss:0,isSetFitView:!1,position:[],groupMarker:[],logo:""}},created:function(){var t=this;Object(r["a"])().then((function(e){e.data.items.length>0&&(t.groupArr=e.data.items,t.chooseGroup=t.groupArr[0].group_code,t.sure(),t.get_lonlat())})),this.pathTimer()},methods:{pathTimer:function(){var t=this;this.intervalId=setInterval((function(){t.realOriginPath.length>0&&t.get_lonlat()}),6e3)},get_lonlat:function(){var t=this;this.indexss++,Object(o["c"])({group_code:this.chooseGroup}).then((function(e){var a=[];if(e.data){if(a=e.data.car_info,t.backTime=e.data.time,t.isXianlu=e.data.show,t.realOriginPath.length>0)for(var n=function(e){var n=t.realOriginPath.find((function(t){return t.self_id==a[e].self_id}));n&&a[e].real_longitude?n.path=[parseFloat(a[e].real_longitude),parseFloat(a[e].real_latitude)]:a[e].real_longitude&&t.realOriginPath.push({name:a[e].path_name,isShow:!0,isXuan:!1,self_id:a[e].self_id,icon:a[e].icon,path:[[parseFloat(a[e].real_longitude),parseFloat(a[e].real_latitude)]]})},i=0;i<a.length;i++)n(i);else{for(var r=0;r<a.length;r++)a[r].real_longitude&&a[r].real_latitude?t.tempOriginPath.push({name:a[r].path_name,isShow:!0,isXuan:!1,self_id:a[r].self_id,icon:a[r].icon,path:[[parseFloat(a[r].real_longitude),parseFloat(a[r].real_latitude)]]}):t.tempOriginPath.push({name:a[r].path_name,isShow:!1,isXuan:!1,self_id:a[r].self_id,icon:a[r].icon,path:[]});t.originPath=t.unique(t.tempOriginPath,"name"),t.realOriginPath=t.originPath.filter((function(t){if(console.log(t),t)return t.path.length>0}))}t.initSearch()}}))},unique:function(t,e){for(var a=[t[0]],n=1;n<t.length;n++){for(var i=t[n],r=!1,o=0;o<a.length;o++)if(i[e]==a[o][e]){r=!0;break}r||a.push(i)}return a},initSearch:function(){var t=this,e=this.amapManager.getMap();t.realOriginPath.length>0&&(e.remove(this.markers),t.drawMap(e),t.isSetFitView||(e.setFitView(),t.isSetFitView=!0))},drawMap:function(t){for(var e=this,a=0;a<e.realOriginPath.length;a++){var n=new AMap.Marker({position:e.realOriginPath[a].path,map:t,icon:new AMap.Icon({image:e.realOriginPath[a].icon,size:new AMap.Size(28,36),imageSize:new AMap.Size(28,36)}),label:{content:"<div class='info' style='text-align:center'>"+e.realOriginPath[a].name+"</div>",direction:"top"}});this.markers.push(n)}},sure:function(){var t=this,e={group_code:this.chooseGroup};Object(o["a"])(e).then((function(e){var a=t.amapManager.getMap();if(clearInterval(t.intervalId),a.remove(t.markers),t.realOriginPath=[],t.realOriginPath=[],t.tempOriginPath=[],e.data.school_address.longitude&&e.data.school_address.dimensionality&&(a.remove(t.groupMarker),t.position=[e.data.school_address.longitude,e.data.school_address.dimensionality],t.position.length>1)){var n=new AMap.Icon({image:e.data.school_address.logo?e.data.school_address.logo:"https://bloodcity.oss-cn-beijing.aliyuncs.com/images/2020-08-21/23e6f6f62a180f94e96755964a24ba14.png",imageSize:new AMap.Size(46,46),size:new AMap.Size(46,46)}),i=new AMap.Marker({icon:n,position:t.position,zIndex:101,map:a});t.groupMarker.push(i),a.setCenter(t.position)}t.pie1.series[0].data=e.data.car_count,t.pie1.legend.data=e.data.car_count,t.pie2.series[0].data=e.data.student_counts,t.pie2.legend.data=e.data.student_counts,t.pie3.series[0].data=e.data.person_count,t.pie3.legend.data=e.data.person_count,t.get_lonlat(),t.pathTimer()})).catch((function(t){}))},carouselChange:function(t){this.pathInfo[t].self_id},getPathWay:function(t){var e=this;Object(o["d"])({path_id:t}).then((function(t){t.data&&(e.pathWay=t.data,e.line_name=t.path_name)}))},jump:function(){this.$router.push({path:"/big_show",query:{group_code:this.chooseGroup}})}},destroyed:function(){this.intervalId&&clearInterval(this.intervalId)},filters:{distanceFilter:function(t){return t?t>1e3?"".concat((t/1e3).toFixed(1),"公里　"):t<=1e3?"".concat(t,"米　"):t:""},timeFilter:function(t){if(0===t)return"已到站　";if(!t)return"----　";var e,a=parseInt(t),n=Math.floor(a/3600)>0?"".concat(Math.floor(a/3600),"小时"):"",i=a>0?"".concat(Math.floor(a%60)):"";return a/60%60>0&&(Math.floor(a/60%60)>0?(e="".concat(Math.floor(a/60%60)),i>30&&(e=parseInt(e)+1)):e="1"),a="剩余".concat(n+e,"分钟　"),a}}},d=u,h=(a("06b2"),a("c742"),a("2877")),p=a("7e2b"),f=a.n(p),g=Object(h["a"])(d,n,i,!1,null,"6475e6d3",null);"function"===typeof f.a&&f()(g);e["default"]=g.exports},e853:function(t,e,a){var n=a("d3f4"),i=a("1169"),r=a("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&(e=e[r],null===e&&(e=void 0))),void 0===e?Array:e}},f93b:function(t,e,a){}}]);