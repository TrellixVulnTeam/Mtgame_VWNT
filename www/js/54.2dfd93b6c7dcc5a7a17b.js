webpackJsonp([54],{FwGk:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("7+uW"),e("7t+N");var i=e("3eaK"),A=e("mw3O"),a={name:"phonics8",watch:{loaded:function(t){var s=this;if(1==this.onef){(this.list1.length>2||this.list2.length>2)&&(this.changwidth=!0);for(var e=0;e<this.list2.length;e++)this.list2[e].name.length>10&&(this.list2[e].size=1);setTimeout(function(){s.onef=!1},2e3)}0==this.onef&&setTimeout(function(){var t=s;i.jsPlumb.ready(function(){var s=i.jsPlumb.getInstance({DragOptions:{cursor:"pointer"},PaintStyle:{},ConnectionsDetachable:!1,EndpointStyle:{width:20,height:16,margin:20},Endpoint:"Image",Container:"canvas"});s.batch(function(){s.bind("click",function(t,s){i.jsPlumb.detach(t)});var e={tolerance:"touch",hoverClass:"dropHover",activeClass:"dragActive"},A={endpoint:["Image",{src:"http://103.218.241.33/monkeytreeApp/www/assets/image/star3.png"}],paintStyle:{fill:"#057bb8"},EndpointStyle:{margin:10},isSource:!0,scope:"#057bb8",connectorStyle:{stroke:"#fcfcfc",strokeWidth:6},connector:["Straight",{gap:15}],maxConnections:1,isTarget:!1,dropOptions:e},a={endpoint:["Image",{src:"http://103.218.241.33/monkeytreeApp/www/assets/image/star3.png"}],EndpointStyle:{margin:20},paintStyle:{fill:"#057bb8"},isSource:!1,scope:"#057bb8",connectorStyle:{stroke:"#fcfcfc",strokeWidth:6},connector:["Straight",{gap:15}],maxConnections:1,isTarget:!0,dropOptions:e};(t.list1.length>2||t.list2.length>2)&&(t.changwidth=!0);for(var n=0;n<t.list1.length;n++)1==t.loaded&&s.addEndpoint(t.list1[n].id,{anchor:[1,.5,0,0,25,0]},A);for(var l=0;l<t.list2.length;l++)1==t.loaded&&s.addEndpoint(t.list2[l].id,{anchor:[0,.5,0,0,-20,0]},a);s.bind("connectionDragStop",function(e){t.zhezhao=!0;for(var i=t.list1.length,A=0;A<t.list1.length;A++)if(e.sourceId==t.list1[A].id)if(e.targetId==t.list1[A].targetId)if(null!=e.target)if(t.truelist.length<=0){t.truelist.push(e.targetId);for(var a=0;a<t.falselist.length;a++)t.falselist[a]==e.suspendedElementId&&t.falselist.splice(a,1)}else{t.truelist.push(e.targetId);for(a=0;a<t.falselist.length;a++)t.falselist[a]==e.suspendedElementId&&t.falselist.splice(a,1)}else{for(var n=0;n<t.truelist.length;n++)t.truelist[n]==e.suspendedElementId&&t.truelist.splice(n,1);for(a=0;a<t.falselist.length;a++)t.falselist[a]==e.suspendedElementId&&t.falselist.splice(a,1)}else for(var l=0;l<t.list1.length;l++)if(e.targetId==t.list1[l].targetId)if(null!=e.target)if(t.falselist.length<=0){t.falselist.push(e.targetId);for(n=0;n<t.truelist.length;n++)t.truelist[n]==e.suspendedElementId&&t.truelist.splice(n,1)}else t.falselist.push(e.targetId);else for(a=0;a<t.falselist.length;a++)t.falselist[a]==e.suspendedElementId&&t.falselist.splice(a,1);setTimeout(function(){if(t.nowtime=document.getElementsByTagName("svg").length,t.nowtime==i)if(t.zhezhao=!0,t.countpage+=1,t.falselist.length<=0){t.showbg=1,t.soundscorrect=!0;for(var e=0;e<t.list2.length;e++)t.list2[e].changecolor=1;setTimeout(function(){if(t.showbg=0,t.soundscorrect=!1,t.nowtime=0,t.countpage<=t.listD.length){t.account+=1,t.onef=!0,t.loaded=!1,t.list=t.listD[t.countpage-1],t.list2=[],t.list1=[];for(var s=0;s<t.list.length;s++)t.list1.push(t.list[s]);for(var e=0;e<t.list.length;e++)t.list2.push({bg:t.list[e].bg,id:t.list[e].id2,changecolor:t.list[e].changecolor,issuccess:t.list[e].issuccess,name:t.list[e].name,showbg:t.list[e].showbg,targetId:t.list[e].targetId2});t.zhezhao=!1}else t.account+=1,setTimeout(function(){t.zhezhao=!1,t.$router.push({path:"/presult",query:{type:t.type,partName:"phonics8",account:t.account,menuId:t.menuId,unitsId:t.unitsId,unit:t.unit}})},2e3);t.truelist=[],t.falselist=[]},2e3)}else{var A=document.getElementsByTagName("svg");t.soundsWrong=!0;for(e=0;e<t.list2.length;e++)for(var a=0;a<t.falselist.length;a++)t.falselist[a]==t.list2[e].id&&(t.list2[e].issuccess=1),t.falselist[a]==A[e]._jsPlumb.targetId&&A[e].children[0].setAttribute("stroke","#cc6453");setTimeout(function(){t.soundsWrong=!1;for(var e=0;e<A.length;e++)A[e].style.transition="all 0.4s",A[e].style.width="0px";setTimeout(function(){var e;s.deleteEveryConnection();for(var i=0;i<t.list1.length;i++)t.list2[i].changecolor=1,s.connect({source:t.list1[i].id,target:t.list1[i].targetId,endpoint:["Image",{src:"http://103.218.241.33/monkeytreeApp/www/assets/image/star3.png"}],connector:["Straight",{gap:15}],paintStyle:{stroke:"#fcfcfc",strokeWidth:6},anchor:[[1,.5,0,0,25,0],[0,.5,0,0,-20,0]]}),e=A[i].clientWidth||A[i].offsetWidth,A[i].style.width="0px",A[i].style.transition="all 0 ease 0";setTimeout(function(){for(var i=0;i<A.length;i++)A[i].style.transition="all 0.4s",A[i].style.width=e+"px";setTimeout(function(){s.deleteEveryConnection();for(var e=0;e<t.list2.length;e++)t.list2[e].changecolor=0,t.list2[e].issuccess=0;if(t.nowtime=0,t.countpage<=t.listD.length){t.onef=!0,t.loaded=!1,t.list=t.listD[t.countpage-1];t.list.length;t.list2=[],t.list1=[];for(e=0;e<t.list.length;e++)t.list1.push(t.list[e]);for(var i=0;i<t.list.length;i++)t.list2.push({bg:t.list[i].bg,id:t.list[i].id2,changecolor:t.list[i].changecolor,issuccess:t.list[i].issuccess,name:t.list[i].name,showbg:t.list[i].showbg,targetId:t.list[i].targetId2,size:0});t.zhezhao=!1}else setTimeout(function(){t.zhezhao=!1,t.$router.push({path:"/presult",query:{type:t.type,partName:"phonics8",account:t.account,menuId:t.menuId,unitsId:t.unitsId,unit:t.unit}})},2e3);t.truelist=[],t.falselist=[]},1e3)},100)},300)},2e3)}else t.zhezhao=!1},400)})})})},500)}},data:function(){return{popp:!1,ruleimg8:!1,spanp:"",loaded:!1,shownumb:!1,ruleimg10:!1,ruleimg4:!1,ruleimg15:!1,ruleimg25:!1,ruleimg12:!1,list1:[],list2:[],list:[],changwidth:!1,action:!1,action1:!1,zhezhao:!1,nowtime:0,question:10,soundsWrong:!1,soundscorrect:!1,showbg:0,falselist:[],truelist:[],countpage:1,unitsId:"",unit:"",menuId:"",listD:[],account:0,flag2:!0,show:!0,resume:!1,id:"",pic:"",url:"/phonics/phonics",levels:0,type:"phonics8",onef:!0,gamename:"",timeurl:"/user/playTime"}},methods:{gomemu:function(){var t=document.getElementById("music");"false"==localStorage.getItem("audiomusic")||t.play();var s=(new Date).getTime();this.$axios.post(this.timeurl,A.stringify({id:localStorage.getItem("startTimeid"),time:s,name:this.gamename,studentId:localStorage.getItem("studentId")})).then(function(t){localStorage.setItem("startTimeid",""),localStorage.setItem("gamename","")},function(t){alertMsg("You must be connected to the internet.<br>Please connect and try again.")}),this.$router.push({path:"/phonicsmenu",query:{unitsId:this.unitsId,unit:this.unit}})},pop:function(){this.popp=!this.popp},undo:function(){this.onef=!0,this.loaded=!1,this.nowtime=0,this.list=this.listD[this.countpage-1],this.list2=[],this.list1=[];for(var t=0;t<this.list.length;t++)this.list1.push(this.list[t]);for(var s=0;s<this.list.length;s++)this.list2.push({bg:this.list[s].bg,id:this.list[s].id2,changecolor:this.list[s].changecolor,issuccess:this.list[s].issuccess,name:this.list[s].name,showbg:this.list[s].showbg,targetId:this.list[s].targetId2})},loadimg:function(){this.loaded=!0},help:function(){0==this.onef&&(this.spanp="Match the pictures with the correct words.",this.popp=!this.popp,0==this.list1[0].rank?(this.ruleimg8=!0,this.ruleimg12=!1):1==this.list1[0].rank&&(this.ruleimg8=!1,this.ruleimg12=!0))},makesound:function(t){0==t.showbg&&(t.showbg=1,setTimeout(function(){t.showbg=0},3e3))},changesett:function(){var t=this;0==this.action&&0==this.onef&&(this.action=!0,setTimeout(function(){t.action=!1,t.resume=!t.resume},1e3))},sound:function(){this.show=!this.show,0==this.show?localStorage.setItem("gamemusic","false"):localStorage.setItem("gamemusic","true")},bodyScroll:function(t){t.preventDefault()}},destroyed:function(){document.body.removeEventListener("touchmove",this.bodyScroll,{passive:!1}),window.removeEventListener("popstate",this.gomemu,!1)},created:function(){var t=this;this.pic=this.$axios.defaults.baseURL2,this.unit=this.$route.query.unit,this.unitsId=this.$route.query.unitsId,this.menuId=this.$route.query.menuId,this.gamename=this.$route.query.name,localStorage.setItem("gamename",this.gamename);var s=(new Date).getTime();localStorage.setItem("startTimeid",s),"false"==localStorage.getItem("gamemusic")?this.show=!1:this.show=!0,this.$axios.post(this.url,A.stringify({menuId:this.menuId,num:1})).then(function(s){for(var e in s.data.maps)t.listD.push(s.data.maps[e]);for(var i=0,A=t.listD.length;i<A;i++){var a=parseInt(Math.random()*(A-1)),n=t.listD[i];t.listD[i]=t.listD[a],t.listD[a]=n}t.question=t.listD.length,t.shownumb=!0,t.list=t.listD[t.countpage-1];for(var l=0;l<t.list.length;l++)t.list1.push(t.list[l]);for(var o=0;o<t.list.length;o++)t.list2.push({bg:t.list[o].bg,id:t.list[o].id2,changecolor:t.list[o].changecolor,issuccess:t.list[o].issuccess,name:t.list[o].name,showbg:t.list[o].showbg,targetId:t.list[o].targetId2,size:0});for(l=0;l<t.list2.length;l++)t.list2[l].name.length>10&&(t.list2[l].size=1);1==t.onef&&1==t.shownumb&&setTimeout(function(){t.onef=!1,(t.list1.length>2||t.list2.length>2)&&(t.changwidth=!0)},1e3)},function(t){alertMsg("You must be connected to the internet.<br>Please connect and try again.")}),this.$axios.post(this.timeurl,A.stringify({id:s,time:s,name:this.gamename,studentId:localStorage.getItem("studentId")})).then(function(t){},function(t){alertMsg("You must be connected to the internet.<br>Please connect and try again.")}),window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",this.gomemu,!1)),document.body.addEventListener("touchmove",this.bodyScroll,{passive:!1})}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"phonics8"},[i("span",{attrs:{id:"gameplay"}},[t.show?i("audio",{ref:"MusicPlay",attrs:{autoplay:"autoplay",loop:"loop",id:"partmusic"}},[i("source",{attrs:{src:e("0tuX")}})]):t._e()]),t._v(" "),i("transition",{attrs:{name:"fades"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.resume,expression:"!resume"}],staticClass:"contain"},[i("img",{staticClass:"backbutton",attrs:{src:e("Iiq7")},on:{click:t.gomemu}}),t._v(" "),i("img",{staticClass:"helpbutton",attrs:{src:e("ynQl")},on:{click:t.help}}),t._v(" "),i("transition",{attrs:{name:"fade1"}},[t.onef?i("div",{staticStyle:{width:"100%",height:"90%",display:"block",position:"absolute"}},[t.shownumb?i("p",{staticClass:"fontsizes"},[t._v(t._s(this.countpage)+"/"+t._s(this.question))]):t._e()]):t._e()]),t._v(" "),i("transition",{attrs:{name:"fade1"}},[t.onef?t._e():i("div",{staticStyle:{width:"100%",height:"86%","text-align":"center",display:"block",position:"fixed"}},[t.zhezhao?i("div",{staticStyle:{width:"100%",height:"95%",display:"block",position:"absolute",opacity:"0","z-index":"100"}}):t._e(),t._v(" "),t.soundsWrong?i("audio",{attrs:{autoplay:"autoplay"}},[i("source",{attrs:{src:e("/eCP")}})]):t._e(),t._v(" "),t.soundscorrect?i("audio",{attrs:{autoplay:"autoplay"}},[i("source",{attrs:{src:e("MwoW")}})]):t._e(),t._v(" "),i("div",{staticClass:"jtk-demo"},[i("div",{staticClass:"jtk-demo-canvas canvas-wide drag-drop-demo jtk-surface jtk-surface-nopan",attrs:{id:"canvas"}},[i("div",{staticClass:"leftbox",class:{leftbox1:t.changwidth}},t._l(t.list1,function(s){return i("div",{key:s.name,staticClass:"window",class:{window1:t.changwidth},attrs:{id:s.id},on:{click:function(e){return t.makesound(s)}}},[i("img",{staticClass:"imgsty",class:{imgsty1:t.changwidth},attrs:{src:t.pic+s.bg},on:{load:t.loadimg}}),t._v(" "),s.showbg?i("audio",{attrs:{autoplay:"autoplay"}},[i("source",{attrs:{src:t.pic+s.audio}})]):t._e()])}),0),t._v(" "),t.showbg?i("img",{staticClass:"start",attrs:{src:e("JRUa")}}):t._e(),t._v(" "),i("div",{staticClass:"rightbox",class:{rightbox1:t.changwidth}},t._l(t.list2,function(s){return i("div",{key:s.name,staticClass:"windows",class:{answer:s.issuccess,changecolor:s.changecolor,otherwidth:t.changwidth},attrs:{id:s.id}},[i("span",{staticClass:"spanlist",class:{namesize:s.size}},[t._v(t._s(s.name))]),t._v(" "),i("img",{staticClass:"bglist",attrs:{src:e("G+gV")}})])}),0),t._v(" "),i("button",{staticClass:"undo",on:{click:function(s){return t.undo()}}},[t._v("Undo")])])])])]),t._v(" "),i("div",{staticClass:"settinglist"},[i("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("Mcdc")}}),t._v(" "),i("span",{staticClass:"fontsize"},[t._v("Match the pictures with the correct words.")]),t._v(" "),i("div",{on:{click:t.changesett}},[i("img",{staticClass:" repeat",attrs:{src:e("45Nx")}})])])],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.popp,expression:"popp"}],staticClass:"popContainer"},[i("p",{staticClass:"spanp"},[t._v(t._s(t.spanp))]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"withcolor"},[i("div",{staticClass:"close",on:{click:t.pop}},[i("img",{attrs:{src:e("Nh7p")}})]),t._v(" "),i("img",{staticClass:"animapng7",attrs:{src:"http://monkeytown.monkeytree.com.hk/image/excercise8.gif"}})])]),t._v(" "),i("transition",{attrs:{name:"fades"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.resume,expression:"resume"}],staticClass:"about"},[i("div",{staticClass:"twomenu"},[i("div",[i("img",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticStyle:{width:"30%",height:"10%"},attrs:{src:e("eSb0")},on:{click:t.sound}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticStyle:{width:"30%",height:"10%"},attrs:{src:e("Gsqe")},on:{click:t.sound}})]),t._v(" "),i("div",{staticStyle:{"margin-top":"5px"}},[i("img",{staticStyle:{width:"30%",height:"10%"},attrs:{src:e("mKkN")},on:{click:t.changesett}})])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"roleimg"},[s("img",{staticStyle:{height:"100%"},attrs:{src:e("engw")}})])}]};var l=e("VU/8")(a,n,!1,function(t){e("pw1h")},"data-v-2aeb676b",null);s.default=l.exports},"G+gV":function(t,s){t.exports="data:image/png;base64,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"},pw1h:function(t,s){}});
