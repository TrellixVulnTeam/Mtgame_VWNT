webpackJsonp([40],{"8IfH":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("mw3O"),n={name:"intermediate8",watch:{onef:function(t){var s=this;console.log("watch"+(new Date).toLocaleTimeString()),!0===this.onef&&setTimeout(function(){s.onef=!1,s.zhezhao=!1,s.list1=s.listG[s.countpage-1];for(var t=0;t<s.list1.length;t++)s.list1[t].bg=s.pic+s.list1[t].bg,s.list1[t].audio=s.pic+s.list1[t].audio,s.list1[t].successful=0,s.list1[t].fail=0;s.video=!0},1e3)},video:function(t){var s=this;!0===this.video&&setTimeout(function(){s.video=!1},8e3)},show1:function(t){!0===this.show1&&(this.$refs.show1.play(),this.show1=!1)},show2:function(t){!0===this.show2&&(this.$refs.show2.play(),this.show2=!1)},show3:function(t){!0===this.show3&&(this.$refs.show3.play(),this.show3=!1)},show4:function(t){!0===this.show4&&(this.$refs.show4.play(),this.show4=!1)}},data:function(){return{popp:!1,spanp:"",playtime:1,countpage:1,shownumb:!1,fisrtanswer:!1,question:1,zhezhao:!0,list1:[{fail:0,sound:0,successful:0},{fail:0,sound:0,successful:0},{fail:0,sound:0,successful:0},{fail:0,sound:0,successful:0}],show1:!1,show2:!1,show3:!1,show4:!1,truesound:"",onef:!0,fade:"fade",levels:0,flag2:!0,video:!1,soundsWrong:!1,soundscorrect:!1,show:!0,resume3:!1,id:"",page:this.page++,account:0,unitsId:"",allquestion:10,unit:"",menuId:"",listG:[],type:"intermediate",sum:0,score:"",issuccess:!0,issuccess2:!1,issuccess1:!1,canvasObj:null,canvasH:null,context:{},pic:"",questionsize:0,url:"/phonics2/phonics2",canvasMoveUse:!0,centerP:[],config:{lineWidth:3,lineColor:"#44ccc2",shadowBlur:1},gamename:"",timeurl:"/user/playTime"}},created:function(){var t=this;console.log("created开头"+(new Date).toLocaleTimeString()),this.pic=this.$axios.defaults.baseURL2,this.unit=this.$route.query.unit,this.unitsId=this.$route.query.unitsId,this.menuId=this.$route.query.menuId,this.gamename=this.$route.query.name,localStorage.setItem("gamename",this.gamename);var s=(new Date).getTime();localStorage.setItem("startTimeid",s),this.show="false"!==localStorage.getItem("gamemusic"),this.$axios.post(this.url,i.stringify({menuId:this.menuId,num:18})).then(function(s){for(var e in s.data.maps)t.listG.push(s.data.maps[e]);for(var i=0,n=t.listG.length;i<n;i++){var o=parseInt(Math.random()*(n-1)),a=t.listG[i];t.listG[i]=t.listG[o],t.listG[o]=a}t.allquestion=t.listG.length,t.list1=t.listG[t.countpage-1],t.shownumb=!0;for(var c=0;c<t.list1.length;c++)t.list1[c].audio=t.pic+t.list1[c].audio,t.list1[c].successful=0,t.list1[c].sound=0,t.list1[c].fail=0;console.log("created的onef前面"+(new Date).toLocaleTimeString()),!0===t.onef&&(t.onef=!1,t.video=!0),setTimeout(function(){if(t.list1.length>0){var s=document.getElementById("canvas"),e=document.getElementById("imgBox"),i=document.getElementsByClassName("imgsty");console.log("mounted"+(new Date).toLocaleTimeString());for(var n=0;n<i.length;n++){var o={corePx:i[n].offsetParent.offsetLeft+i[n].offsetParent.offsetWidth/2,corePy:i[n].offsetParent.offsetTop+.75*i[n].offsetParent.offsetHeight};t.centerP.push(o)}t.canvasObj=s,t.canvasH=e.clientHeight,s.width=e.clientWidth,s.height=e.clientHeight,t.context=s.getContext("2d"),t.setCanvasStyle(),t.zhezhao=!1}},1e3)},function(t){alertMsg("You must be connected to the internet.<br>Please connect and try again.")}),this.$axios.post(this.timeurl,i.stringify({id:s,time:s,name:this.gamename,studentId:localStorage.getItem("studentId")})).then(function(t){},function(t){alertMsg("You must be connected to the internet.<br>Please connect and try again.")}),window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",this.gomemu,!1)),document.body.addEventListener("touchmove",this.bodyScroll,{passive:!1})},mounted:function(){},destroyed:function(){document.body.removeEventListener("touchmove",this.bodyScroll,{passive:!1}),window.removeEventListener("popstate",this.gomemu,!1)},methods:{bodyScroll:function(t){t.preventDefault()},xy:function(t){console.log(t);for(var s=0;s<this.centerP.length;s++)this.centerP[s].corePx-80<=t.offsetX&&t.offsetX<=this.centerP[s].corePx+80&&this.centerP[s].corePy-80<=t.offsetY&&t.offsetY<=this.centerP[s].corePy+80&&(0===s?!1===this.show1&&(this.show1=!0):1===s?!1===this.show2&&(this.show2=!0):2===s?!1===this.show3&&(this.show3=!0):3===s&&!1===this.show4&&(this.show4=!0))},isPc:function(){navigator.userAgent;return!1},canvasDown:function(t){if(t.touches&&1===t.touches.length){this.canvasMoveUse=!0;var s=t.target,e=void 0,i=void 0;this.isPc()?(e=t.clientX-s.parentNode.offsetLeft,i=t.clientY-s.parentNode.offsetTop):t.changedTouches&&(e=t.changedTouches[0].clientX-s.parentNode.offsetLeft,i=t.changedTouches[0].clientY-s.parentNode.offsetTop),this.context.beginPath(),this.context.moveTo(e,i),this.context.stroke()}else this.canvasMoveUse=!1},canvasMove:function(t){if(this.canvasMoveUse){var s=t.target,e=void 0,i=void 0;this.isPc()?(e=t.clientX-s.parentNode.offsetLeft,i=t.clientY-s.parentNode.offsetTop):(e=t.changedTouches[0].clientX-s.parentNode.offsetLeft,i=t.changedTouches[0].clientY-s.parentNode.offsetTop),this.context.lineTo(e,i),this.context.stroke()}},canvasUp:function(t){var s=this;this.context.closePath();var e=!1,i=void 0,n=void 0,o=[],a=document.getElementsByClassName("imgsty");this.centerP.forEach(function(t,a){s.context.isPointInPath(t.corePx,t.corePy)&&(i=a),"1"===s.list1[a].score&&(n=a),s.context.isPointInPath(t.corePx,t.corePy)&&(e=!0,o.push(t))}),e&&1===o.length?(this.zhezhao=!0,"1"===this.list1[i].score?(this.soundscorrect=!0,setTimeout(function(){s.soundscorrect=!1},2e3),setTimeout(function(){s.canvasObj.height=s.canvasH,s.score="1",s.countpage+=1,s.account+=1,s.context.beginPath(),s.context.lineWidth=6,s.context.shadowBlur=1,s.context.shadowColor="#007BB8",s.context.strokeStyle="#007BB8",s.context.arc(s.centerP[i].corePx,s.centerP[i].corePy,s.canvasH/6,0,2*Math.PI),s.context.stroke(),s.canvasObj.style.transition="all 0.4s",a[n].style.transition="all 0.6s",setTimeout(function(){s.canvasObj.style.opacity=0,setTimeout(function(){a[n].classList.add("sacle1_2"),setTimeout(function(){a[n].children[0].style.display="block",setTimeout(function(){s.countpage<=s.listG.length?s.onef=!0:setTimeout(function(){s.zhezhao=!1,s.$router.push({path:"/presult",query:{type:s.type,partName:"intermediate8",account:s.account,menuId:s.menuId,unitsId:s.unitsId,unit:s.unit}})},1e3),a[n].classList.remove("sacle1_2"),a[n].children[0].style.display="none",s.canvasObj.height=s.canvasH,s.setCanvasStyle(),s.canvasObj.style.opacity=1},2e3)},800)},800)},400)},500)):(this.soundsWrong=!0,setTimeout(function(){s.soundsWrong=!1},2e3),setTimeout(function(){s.canvasObj.height=s.canvasH,s.score="0",s.countpage+=1,s.context.beginPath(),s.context.lineWidth=6,s.context.shadowBlur=1,s.context.shadowColor="#851c1c",s.context.strokeStyle="#851c1c",s.context.arc(s.centerP[i].corePx,s.centerP[i].corePy,s.canvasH/6,0,2*Math.PI),s.context.stroke(),setTimeout(function(){s.canvasObj.height=s.canvasH,s.setCanvasStyle(),s.canvasObj.style.opacity=1;for(var t=0;t<s.list1.length;t++)"1"===s.list1[t].score?(s.list1[t].successful=1,console.log(s.list1)):s.list1[t].fail=1;s.countpage>s.listG.length?setTimeout(function(){s.$router.push({path:"/presult",query:{type:s.type,partName:"intermediate8",account:s.account,menuId:s.menuId,unitsId:s.unitsId,unit:s.unit}})},2e3):setTimeout(function(){s.onef=!0},2e3)},1e3)},500))):(this.canvasObj.height=this.canvasH,this.setCanvasStyle()),this.canvasMoveUse=!1},setCanvasStyle:function(){this.context.lineWidth=this.config.lineWidth,this.context.shadowBlur=this.config.shadowBlur,this.context.shadowColor=this.config.lineColor,this.context.strokeStyle=this.config.lineColor},changesett:function(){var t=this;0==this.onef&&setTimeout(function(){t.resume3=!t.resume3,t.resume3||setTimeout(function(){var s=document.getElementById("canvas"),e=document.getElementById("imgBox");t.canvasObj=s,t.canvasH=e.clientHeight,s.width=e.clientWidth,s.height=e.clientHeight,t.context=s.getContext("2d"),t.setCanvasStyle()},2100)},1e3)},pop:function(){this.popp=!this.popp},help:function(){0==this.onef&&(this.spanp="Listen and circle the word that does not match.",this.popp=!this.popp)},gomemu:function(){var t=document.getElementById("music");"false"==localStorage.getItem("audiomusic")||t.play();var s=(new Date).getTime();this.$axios.post(this.timeurl,i.stringify({id:localStorage.getItem("startTimeid"),time:s,name:this.gamename,studentId:localStorage.getItem("studentId")})).then(function(t){localStorage.setItem("startTimeid",""),localStorage.setItem("gamename","")},function(t){alertMsg("You must be connected to the internet.<br>Please connect and try again.")}),this.$router.push({path:"/intermenu",query:{unitsId:this.unitsId,unit:this.unit}})},listen:function(){!1===this.onef&&!1===this.video&&(this.video=!0)},sound:function(){this.show=!this.show,0==this.show?localStorage.setItem("gamemusic","false"):localStorage.setItem("gamemusic","true")}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"intermediate8"},[i("span",{attrs:{id:"gameplay"}},[t.show?i("audio",{ref:"MusicPlay",attrs:{autoplay:"autoplay",loop:"loop",id:"partmusic"}},[i("source",{attrs:{src:e("0tuX")}})]):t._e()]),t._v(" "),i("img",{staticStyle:{width:"100%","z-index":"-2",height:"100%",display:"block",position:"absolute"},attrs:{src:e("gUuL")}}),t._v(" "),i("transition",{attrs:{name:"fades"}},[t.resume3?t._e():i("div",{staticClass:"contain"},[i("img",{staticClass:"backbutton",attrs:{src:e("DLSt")},on:{click:t.gomemu}}),t._v(" "),i("img",{staticClass:"helpbutton",attrs:{src:e("8Nyn")},on:{click:t.help}}),t._v(" "),i("transition",{attrs:{name:"fade1"}},[t.onef?i("div",{staticStyle:{width:"100%",height:"90%",display:"block",position:"absolute"}},[t.shownumb?i("p",{staticClass:"fontsizes"},[t._v(t._s(this.countpage)+"/"+t._s(this.allquestion))]):t._e()]):t._e()]),t._v(" "),i("transition",{attrs:{name:"fade1"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.onef,expression:"!onef"}],staticStyle:{width:"100%",height:"90%",display:"block",position:"absolute"}},[t.zhezhao?i("div",{staticStyle:{width:"100%",height:"95%",display:"block",position:"absolute",opacity:"0","z-index":"100"}}):t._e(),t._v(" "),t.soundsWrong?i("audio",{attrs:{autoplay:"autoplay"}},[i("source",{attrs:{src:e("/eCP")}})]):t._e(),t._v(" "),t.soundscorrect?i("audio",{attrs:{autoplay:"autoplay"}},[i("source",{attrs:{src:e("MwoW")}})]):t._e(),t._v(" "),i("div",{staticClass:"windows"},[i("div",{staticClass:"imgbox",attrs:{id:"imgBox"}},[i("div",{staticClass:"imgsty1",class:{changeopcily:this.list1[0].fail},attrs:{id:"make1"}},[i("button",{staticClass:"imgsty"},[i("img",{staticClass:"answerSucc",attrs:{src:e("/xv5")}}),t._v(" "),i("img",{staticClass:"spanlist ",class:{changetranform:this.list1[0].successful},staticStyle:{display:"inline",height:"100%"},attrs:{src:e("V9Bn")}}),t._v(" "),i("audio",{ref:"show1",attrs:{id:"show1",src:this.list1[0].audio}}),t._v(" "),i("button",{staticClass:"word",class:{changetranform:this.list1[0].successful}},[t._v("\n                      "+t._s(this.list1[0].name)+"\n                    ")])])]),t._v(" "),i("div",{staticClass:"imgsty1",class:{changeopcily:this.list1[1].fail},attrs:{id:"make2"}},[i("button",{staticClass:"imgsty"},[i("img",{staticClass:"answerSucc",attrs:{src:e("/xv5")}}),t._v(" "),i("img",{staticClass:"spanlist ",class:{changetranform:this.list1[1].successful},staticStyle:{display:"inline",height:"100%"},attrs:{src:e("V9Bn")}}),t._v(" "),i("audio",{ref:"show2",attrs:{id:"show2",src:this.list1[1].audio}}),t._v(" "),i("button",{staticClass:"word",class:{changetranform:this.list1[1].successful}},[t._v("\n                      "+t._s(this.list1[1].name)+"\n                    ")])])]),t._v(" "),i("div",{staticClass:"imgsty1",class:{changeopcily:this.list1[2].fail},attrs:{id:"make3"}},[i("button",{staticClass:"imgsty"},[i("img",{staticClass:"answerSucc",attrs:{src:e("/xv5")}}),t._v(" "),i("img",{staticClass:"spanlist ",class:{changetranform:this.list1[2].successful},staticStyle:{display:"inline",height:"100%"},attrs:{src:e("V9Bn")}}),t._v(" "),i("audio",{ref:"show3",attrs:{id:"show3",src:this.list1[2].audio}}),t._v(" "),i("button",{staticClass:"word",class:{changetranform:this.list1[2].successful}},[t._v("\n                      "+t._s(this.list1[2].name)+"\n                    ")])])]),t._v(" "),i("div",{staticClass:"imgsty1",class:{changeopcily:this.list1[3].fail},attrs:{id:"make4"}},[i("button",{staticClass:"imgsty"},[i("img",{staticClass:"answerSucc",attrs:{src:e("/xv5")}}),t._v(" "),i("img",{staticClass:"spanlist ",class:{changetranform:this.list1[3].successful},staticStyle:{display:"inline",height:"100%"},attrs:{src:e("V9Bn")}}),t._v(" "),i("audio",{ref:"show4",attrs:{id:"show4",src:this.list1[3].audio}}),t._v(" "),i("button",{staticClass:"word",class:{changetranform:this.list1[3].successful}},[t._v("\n                      "+t._s(this.list1[3].name)+"\n                    ")])])])]),t._v(" "),i("canvas",{staticStyle:{position:"absolute",left:"0",top:"0","z-index":"99",width:"100%",height:"100%"},attrs:{id:"canvas"},on:{click:function(s){return t.xy(s)},mousedown:function(s){return t.canvasDown(s)},mouseup:function(s){return t.canvasUp(s)},mousemove:function(s){return t.canvasMove(s)},touchstart:function(s){return t.canvasDown(s)},touchend:function(s){return t.canvasUp(s)},touchmove:function(s){return t.canvasMove(s)}}},[t._v("\n                您的浏览器不支持Canvas\n              ")])])])]),t._v(" "),i("div",{staticClass:"settinglist"},[i("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("5B5J")}}),t._v(" "),i("span",{staticClass:"fontsize"},[t._v("Listen and circle the word that does not match.")]),t._v(" "),i("div",{on:{click:t.changesett}},[i("img",{staticClass:" repeat",attrs:{src:e("L6Ht")}})])])],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.popp,expression:"popp"}],staticClass:"popContainer"},[i("p",{staticClass:"spanp"},[t._v(t._s(t.spanp))]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"withcolor"},[i("div",{staticClass:"close",on:{click:t.pop}},[i("img",{attrs:{src:e("Nh7p")}})]),t._v(" "),i("img",{staticClass:"animapng7",attrs:{src:"http://monkeytown.monkeytree.com.hk/image/intermediate8.gif"}})])]),t._v(" "),i("transition",{attrs:{name:"fades"}},[t.resume3?i("div",{staticClass:"about"},[i("div",{staticClass:"twomenu"},[i("div",[i("img",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticStyle:{width:"30%",height:"10%"},attrs:{src:e("eSb0")},on:{click:t.sound}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticStyle:{width:"30%",height:"10%"},attrs:{src:e("Gsqe")},on:{click:t.sound}})]),t._v(" "),i("div",{staticStyle:{"margin-top":"5px"}},[i("img",{staticStyle:{width:"30%",height:"10%"},attrs:{src:e("mKkN")},on:{click:t.changesett}})])])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"roleimg"},[s("img",{staticStyle:{height:"100%"},attrs:{src:e("engw")}})])}]};var a=e("VU/8")(n,o,!1,function(t){e("8Vps")},"data-v-232d644e",null);s.default=a.exports},"8Vps":function(t,s){},V9Bn:function(t,s,e){t.exports=e.p+"img/soundlong.9c90e1a.png"},gUuL:function(t,s,e){t.exports=e.p+"img/interbg6.ff82062.png"}});
