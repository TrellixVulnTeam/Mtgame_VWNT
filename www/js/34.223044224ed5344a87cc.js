webpackJsonp([34],{"+XBy":function(t,i,e){t.exports=e.p+"img/back.09834bf.png"},AAeF:function(t,i,e){t.exports=e.p+"img/mistakes4.06ea0a5.png"},UY6P:function(t,i){},x62m:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("mw3O"),a={name:"part3to",watch:{onef:function(t){var i=this;!0===this.onef&&setTimeout(function(){i.onef=!1,i.list1=i.listC[i.countpage-1];for(var t=0;t<i.list1.length;t++)i.list1[t].size=0,i.list1[t].name.length>=10&&(i.list1[t].size=1);4===i.list1.length?(i.consize1=!0,i.consize2=!1,i.consize3=!1):6===i.list1.length?(i.consize1=!1,i.consize2=!0,i.consize3=!1):8===i.list1.length&&(i.consize1=!1,i.consize1=!1,i.consize3=!0),setTimeout(function(){for(var t=0;t<i.list1.length;t++)i.list1[t].flag=1},500),setTimeout(function(){for(var t=0;t<i.list1.length;t++)i.list1[t].flag=0},2500),i.list2=[]},2e3)}},data:function(){return{level:"",issuccess:Boolean,popp:!1,spanp:"",ruleimg8:!1,ruleimg10:!1,ruleimg4:!1,ruleimg15:!1,ruleimg25:!1,ruleimg12:!1,onef:!0,action:!1,action1:!1,soundsWrong:!1,soundscorrect:!1,zhezhao:!0,fade:"fade",question:4,show:!0,pic:"",url:"/exercise/",url1:"",part:"",resume:!1,listout:[{id:1,bgc:!1},{id:2,bgc:!1},{id:3,bgc:!1},{id:4,bgc:!1}],list2:[],list1:[],listC:[],id:"",unitsId:"",bgimg:[{active:!1,spring:"Seasons"},{active:!1,spring:"Transportation"},{active:!1,spring:"Bugs"},{active:!1,spring:"Clothes"},{active:!1,spring:"Theme Park"},{active:!1,spring:"Space"},{active:!1,spring:"My Body"},{active:!1,spring:"My Weekend"},{active:!1,spring:"Wild Animals"},{active:!1,spring:"Christmas"},{active:!1,spring:"Let's Go Shopping"},{active:!1,spring:"My Community"},{active:!1,spring:"Fun Time!"},{active:!1,spring:"My Home"},{active:!1,spring:"Our World"},{active:!1,spring:"Fairy Tales"},{active:!1,spring:"Exploration"},{active:!1,spring:"Summer Fun"},{active:!1,spring:"School Time"},{active:!1,spring:"Animals"},{active:!1,spring:"Family Time"},{active:!1,spring:"Holidays"},{active:!1,spring:"Meal Time"},{active:!1,spring:"On the Farm"}],unit:"",menuId:"",shownumb:!1,timeout:0,consize1:!1,consize2:!1,consize3:!1,levels:0,countpage:1,account:0,sum:0,gamename:"",timeurl:"/user/playTime",type:"part3to"}},methods:{gomemu:function(){var t=document.getElementById("music");"false"==localStorage.getItem("audiomusic")||t.play();var i=(new Date).getTime();this.$axios.post(this.timeurl,s.stringify({id:localStorage.getItem("startTimeid"),time:i,name:this.gamename,unit:this.unit,level:localStorage.getItem("level"),cources:localStorage.getItem("cources"),studentId:localStorage.getItem("studentId")})).then(function(t){localStorage.setItem("startTimeid",""),localStorage.setItem("gamename","")},function(t){alertMsg("You must be connected to the internet.<br>Please connect and try again.")}),this.$router.push({path:"/home",query:{unitsId:this.unitsId,unit:this.unit,part:this.part,level:this.level}})},pop:function(){this.popp=!this.popp},help:function(){0==this.onef&&(this.spanp="Match the pictures that are the same.",this.popp=!this.popp,0==this.list1[0].rank?this.ruleimg4=!0:1==this.list1[0].rank&&(this.ruleimg4=!0))},changesett:function(){var t=this;0==this.action&&0==this.onef&&(this.action=!0,setTimeout(function(){t.action=!1,t.resume=!t.resume},1e3))},sound:function(){this.show=!this.show,0==this.show?localStorage.setItem("gamemusic","false"):localStorage.setItem("gamemusic","true")},box2:function(t){var i=this;this.zhezhao=!0,0==t.flag&&(this.list2.push({value:t.name,id:t.question_id}),t.flag=1),2==this.list2.length&&1==t.flag?setTimeout(function(){if(i.list2[0].value==i.list2[1].value){i.soundscorrect=!0;for(var t=0;t<i.list2.length;t++)for(var e=0;e<i.list1.length;e++)i.list1[e].question_id==i.list2[t].id&&(i.list1[e].level=1);setTimeout(function(){i.soundscorrect=!1;for(var t=0;t<i.list1.length;t++)for(var e=0;e<i.list2.length;e++)i.list1[t].question_id==i.list2[e].id&&(i.list1[t].level=0);i.zhezhao=!1,i.list2=[];for(t=0;t<i.list1.length;t++){if(0==i.list1[t].flag)return i.issuccess=!0;i.issuccess=!1}0==i.issuccess&&(i.countpage+=1,0==i.list2.length&&setTimeout(function(){i.countpage>i.listC.length?setTimeout(function(){i.$router.push({path:"/result",query:{type:i.type,partName:"partNameC",account:i.timeout,menuId:i.menuId,unitsId:i.unitsId,unit:i.unit,part:i.part,level:i.level}})},2e3):(i.onef=!0,i.zhezhao=!1)},2e3))},2e3)}else{i.soundsWrong=!0;for(e=0;e<i.list1.length;e++)for(t=0;t<i.list2.length;t++)i.list1[e].question_id==i.list2[t].id&&(i.list1[e].turefalse=1);if(i.timeout=i.timeout+1,i.timeout>=1)for(var s=1;s<=i.timeout;s++)i.listout[4-s].bgc=!0;setTimeout(function(){i.soundsWrong=!1,i.timeout>=4?setTimeout(function(){i.$router.push({path:"/result",query:{type:i.type,partName:"partNameC",account:i.timeout,menuId:i.menuId,unitsId:i.unitsId,unit:i.unit,part:i.part,level:i.level}})},2e3):setTimeout(function(){for(var t=0;t<i.list1.length;t++)for(var e=0;e<i.list2.length;e++)i.list1[t].name==i.list2[e].value&&(i.list1[t].flag=0,i.list1[t].turefalse=0);i.list2=[],i.zhezhao=!1},2e3)},2e3)}},1e3):this.zhezhao=!1},bodyScroll:function(t){t.preventDefault()}},destroyed:function(){document.body.removeEventListener("touchmove",this.bodyScroll,{passive:!1}),window.removeEventListener("popstate",this.gomemu,!1)},created:function(){var t=this;this.pic=this.$axios.defaults.baseURL2,this.unit=this.$route.query.unit,this.part=this.$route.query.part,this.unitsId=this.$route.query.unitsId,this.menuId=this.$route.query.menuId,this.gamename=this.$route.query.name,this.level=this.$route.query.level,"part1"===this.part?this.url1=this.url+"exerciseCPart1":"part2"===this.part?this.url1=this.url+"exerciseCPart2":"part3"===this.part&&(this.url1=this.url+"exerciseC"),""===this.gamename||void 0===this.gamename?this.gamename=localStorage.getItem("gamename"):localStorage.setItem("gamename",this.gamename);var i=(new Date).getTime();localStorage.setItem("startTimeid",i);for(var e=0;e<this.bgimg.length;e++)this.unit===this.bgimg[e].spring?this.bgimg[e].active=!0:this.bgimg[e].active=!1;"false"===localStorage.getItem("gamemusic")?this.show=!1:this.show=!0,this.$axios.post(this.url1,s.stringify({menuDetailId:this.menuId})).then(function(i){for(var e in i.data.ListC)t.listC.push(i.data.ListC[e]);t.list1=t.listC[t.countpage-1],t.question=t.listC.length,t.shownumb=!0,4===t.list1.length?t.consize1=!0:6===t.list1.length?t.consize2=!0:8===t.list1.length&&(t.consize3=!0);for(var s=0;s<t.list1.length;s++)t.list1[s].size=0,t.list1[s].name.length>=10&&(t.list1[s].size=1);!0===t.onef&&setTimeout(function(){t.onef=!1},1e3),t.timeout=0,setTimeout(function(){for(var i=0;i<t.list1.length;i++)t.list1[i].flag=1},500),setTimeout(function(){for(var i=0;i<t.list1.length;i++)t.list1[i].flag=0;t.zhezhao=!1},2500),setTimeout(function(){document.getElementById("alertFram").style.display="none"},1e3)},function(t){alertMsg("You must be connected to the internet.<br>Please connect and try again.")}),this.$axios.post(this.timeurl,s.stringify({id:i,time:i,name:this.gamename,unit:this.unit,level:localStorage.getItem("level"),cources:localStorage.getItem("cources"),studentId:localStorage.getItem("studentId")})).then(function(t){},function(t){alertMsg("You must be connected to the internet.<br>Please connect and try again.")}),window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",this.gomemu,!1)),document.body.addEventListener("touchmove",this.bodyScroll,{passive:!1})}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"part3to"},[s("span",{attrs:{id:"gameplay"}},[t.show?s("audio",{ref:"MusicPlay",attrs:{autoplay:"autoplay",loop:"loop",id:"partmusic"}},[s("source",{attrs:{src:e("0tuX")}})]):t._e()]),t._v(" "),s("transition",{attrs:{name:"fades"}},[t.resume?t._e():s("div",{staticClass:"contain"},[s("img",{staticClass:"backbutton",attrs:{src:e("6gXK")},on:{click:t.gomemu}}),t._v(" "),s("img",{staticClass:"helpbutton",attrs:{src:e("21Y0")},on:{click:t.help}}),t._v(" "),s("transition",{attrs:{name:"fade1"}},[t.onef?s("div",{staticStyle:{width:"100%",height:"90%",display:"block",position:"absolute"}},[t.bgimg[0].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("ZP0/")}}):t._e(),t._v(" "),t.bgimg[1].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("EFlT")}}):t._e(),t._v(" "),t.bgimg[2].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("9cse")}}):t._e(),t._v(" "),t.bgimg[3].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",opacity:"0.5",height:"100%",display:"block",position:"absolute"},attrs:{src:e("iY+W")}}):t._e(),t._v(" "),t.bgimg[4].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("3QeF")}}):t._e(),t._v(" "),t.bgimg[5].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("maxK")}}):t._e(),t._v(" "),t.bgimg[6].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("DnAQ")}}):t._e(),t._v(" "),t.bgimg[7].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("JAQr")}}):t._e(),t._v(" "),t.bgimg[8].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("757y")}}):t._e(),t._v(" "),t.bgimg[9].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("Kw7g")}}):t._e(),t._v(" "),t.bgimg[10].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("gGKR")}}):t._e(),t._v(" "),t.bgimg[11].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("6fQc")}}):t._e(),t._v(" "),t.bgimg[12].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("9D30")}}):t._e(),t._v(" "),t.bgimg[13].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("5O7H")}}):t._e(),t._v(" "),t.bgimg[14].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("XGyp")}}):t._e(),t._v(" "),t.bgimg[15].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",opacity:"0.5",height:"100%",display:"block",position:"absolute"},attrs:{src:e("YXTh")}}):t._e(),t._v(" "),t.bgimg[16].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("3UtX")}}):t._e(),t._v(" "),t.bgimg[17].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("ch+E")}}):t._e(),t._v(" "),t.bgimg[18].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("kLHZ")}}):t._e(),t._v(" "),t.bgimg[19].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("GbNO")}}):t._e(),t._v(" "),t.bgimg[20].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("Hvx2")}}):t._e(),t._v(" "),t.bgimg[21].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("gOFn")}}):t._e(),t._v(" "),t.bgimg[22].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("/zsU")}}):t._e(),t._v(" "),t.bgimg[23].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("9LTN")}}):t._e(),t._v(" "),this.shownumb?s("p",{staticClass:"fontsizes"},[t._v(t._s(this.countpage)+"/"+t._s(this.question))]):t._e()]):t._e()]),t._v(" "),s("transition",{attrs:{name:"fade1"}},[t.onef?t._e():s("div",{staticStyle:{width:"100%",height:"90%","text-align":"center",display:"block",position:"absolute"}},[t.bgimg[0].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("ZP0/")}}):t._e(),t._v(" "),t.bgimg[1].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("EFlT")}}):t._e(),t._v(" "),t.bgimg[2].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("9cse")}}):t._e(),t._v(" "),t.bgimg[3].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",opacity:"0.5",height:"100%",display:"block",position:"absolute"},attrs:{src:e("iY+W")}}):t._e(),t._v(" "),t.bgimg[4].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("3QeF")}}):t._e(),t._v(" "),t.bgimg[5].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("maxK")}}):t._e(),t._v(" "),t.bgimg[6].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("DnAQ")}}):t._e(),t._v(" "),t.bgimg[7].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("JAQr")}}):t._e(),t._v(" "),t.bgimg[8].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("757y")}}):t._e(),t._v(" "),t.bgimg[9].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("Kw7g")}}):t._e(),t._v(" "),t.bgimg[10].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("gGKR")}}):t._e(),t._v(" "),t.bgimg[11].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("6fQc")}}):t._e(),t._v(" "),t.bgimg[12].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("9D30")}}):t._e(),t._v(" "),t.bgimg[13].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("5O7H")}}):t._e(),t._v(" "),t.bgimg[14].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("XGyp")}}):t._e(),t._v(" "),t.bgimg[15].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",opacity:"0.5",height:"100%",display:"block",position:"absolute"},attrs:{src:e("YXTh")}}):t._e(),t._v(" "),t.bgimg[16].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("3UtX")}}):t._e(),t._v(" "),t.bgimg[17].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("ch+E")}}):t._e(),t._v(" "),t.bgimg[18].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("kLHZ")}}):t._e(),t._v(" "),t.bgimg[19].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("GbNO")}}):t._e(),t._v(" "),t.bgimg[20].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("Hvx2")}}):t._e(),t._v(" "),t.bgimg[21].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("gOFn")}}):t._e(),t._v(" "),t.bgimg[22].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("/zsU")}}):t._e(),t._v(" "),t.bgimg[23].active?s("img",{staticStyle:{width:"100%","z-index":"-1","background-color":"#ffd55f",height:"100%",display:"block",position:"absolute"},attrs:{src:e("9LTN")}}):t._e(),t._v(" "),t.zhezhao?s("div",{staticStyle:{width:"100%",height:"95%",display:"block",position:"absolute",opacity:"0","z-index":"100"}}):t._e(),t._v(" "),t.soundsWrong?s("audio",{attrs:{autoplay:"autoplay"}},[s("source",{attrs:{src:e("/eCP")}})]):t._e(),t._v(" "),t.soundscorrect?s("audio",{attrs:{autoplay:"autoplay"}},[s("source",{attrs:{src:e("MwoW")}})]):t._e(),t._v(" "),s("div",{staticClass:"smalltimes"},t._l(t.listout,function(i){return s("span",{key:i.id},[s("img",{directives:[{name:"show",rawName:"v-show",value:!i.bgc,expression:"!ou.bgc"}],staticClass:"smallimg",attrs:{src:e("N6eQ")}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:i.bgc,expression:"ou.bgc"}],staticClass:"smallimg",attrs:{src:e("k5z5")}})])}),0),t._v(" "),s("ul",{staticClass:"card-list clearfix",class:{consize1:t.consize1,consize2:t.consize2,consize3:t.consize3}},t._l(t.list1,function(i){return s("li",{key:i.id,staticClass:"card",class:{list2:t.consize2,list3:t.consize3},on:{click:function(e){return t.box2(i)}}},[s("div",{staticClass:"card-face",class:{cardface:i.flag,cardback:!i.flag,answer:i.turefalse}},[i.turefalse?t._e():s("img",{staticClass:"card-img",attrs:{src:e("+XBy")}})]),t._v(" "),s("div",{staticClass:"card-back",class:{cardback:i.flag,cardface:!i.flag,answer:i.turefalse}},[s("img",{staticStyle:{width:"70%",height:"62%",position:"absolute",left:"14%","padding-top":"10px"},attrs:{src:t.pic+i.bg}}),t._v(" "),s("span",{staticClass:"namestyle",class:{namesize:i.size}},[t._v(t._s(i.name))]),t._v(" "),s("img",{staticClass:"card-img",attrs:{src:"http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/front.png"}}),t._v(" "),i.level?s("img",{staticClass:"start2",attrs:{src:e("/xv5")}}):t._e()])])}),0)])]),t._v(" "),s("div",{staticClass:"settinglist"},[t.bgimg[0].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("MWV2")}}):t._e(),t._v(" "),t.bgimg[1].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("USM2")}}):t._e(),t._v(" "),t.bgimg[2].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("fghD")}}):t._e(),t._v(" "),t.bgimg[3].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("xaIt")}}):t._e(),t._v(" "),t.bgimg[4].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("ot0w")}}):t._e(),t._v(" "),t.bgimg[5].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("BiCP")}}):t._e(),t._v(" "),t.bgimg[6].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("lJnb")}}):t._e(),t._v(" "),t.bgimg[7].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("oMzc")}}):t._e(),t._v(" "),t.bgimg[8].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("2ku4")}}):t._e(),t._v(" "),t.bgimg[9].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("3nnv")}}):t._e(),t._v(" "),t.bgimg[10].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("HxLG")}}):t._e(),t._v(" "),t.bgimg[11].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("5ZHs")}}):t._e(),t._v(" "),t.bgimg[12].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("fZz3")}}):t._e(),t._v(" "),t.bgimg[13].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("2gdr")}}):t._e(),t._v(" "),t.bgimg[14].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("SlRf")}}):t._e(),t._v(" "),t.bgimg[15].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("3oXv")}}):t._e(),t._v(" "),t.bgimg[16].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("hhS+")}}):t._e(),t._v(" "),t.bgimg[17].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("DUtI")}}):t._e(),t._v(" "),t.bgimg[18].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("MjMO")}}):t._e(),t._v(" "),t.bgimg[19].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("nzEY")}}):t._e(),t._v(" "),t.bgimg[20].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("/ktE")}}):t._e(),t._v(" "),t.bgimg[21].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("LZVQ")}}):t._e(),t._v(" "),t.bgimg[22].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("SJkC")}}):t._e(),t._v(" "),t.bgimg[23].active?s("img",{staticStyle:{width:"100%",bottom:"0",height:"100%"},attrs:{src:e("5sa9")}}):t._e(),t._v(" "),s("span",{staticClass:"fontsize"},[t._v("Match the pictures that are the same.")]),t._v(" "),s("div",{on:{click:t.changesett}},[t.bgimg[0].active?s("img",{staticClass:" repeat",attrs:{src:e("Uslt")}}):t._e(),t._v(" "),t.bgimg[1].active?s("img",{staticClass:" repeat",attrs:{src:e("lDLE")}}):t._e(),t._v(" "),t.bgimg[2].active?s("img",{staticClass:" repeat",attrs:{src:e("F4UJ")}}):t._e(),t._v(" "),t.bgimg[3].active?s("img",{staticClass:" repeat",attrs:{src:e("qdIo")}}):t._e(),t._v(" "),t.bgimg[4].active?s("img",{staticClass:" repeat",attrs:{src:e("WFyF")}}):t._e(),t._v(" "),t.bgimg[5].active?s("img",{staticClass:" repeat",attrs:{src:e("GF21")}}):t._e(),t._v(" "),t.bgimg[6].active?s("img",{staticClass:" repeat",attrs:{src:e("ePX/")}}):t._e(),t._v(" "),t.bgimg[7].active?s("img",{staticClass:" repeat",attrs:{src:e("4tHV")}}):t._e(),t._v(" "),t.bgimg[8].active?s("img",{staticClass:" repeat",attrs:{src:e("GHFY")}}):t._e(),t._v(" "),t.bgimg[9].active?s("img",{staticClass:" repeat",attrs:{src:e("mvhV")}}):t._e(),t._v(" "),t.bgimg[10].active?s("img",{staticClass:" repeat",attrs:{src:e("EZPi")}}):t._e(),t._v(" "),t.bgimg[11].active?s("img",{staticClass:" repeat",attrs:{src:e("WnDf")}}):t._e(),t._v(" "),t.bgimg[12].active?s("img",{staticClass:" repeat",attrs:{src:e("A5XQ")}}):t._e(),t._v(" "),t.bgimg[13].active?s("img",{staticClass:" repeat",attrs:{src:e("12UM")}}):t._e(),t._v(" "),t.bgimg[14].active?s("img",{staticClass:" repeat",attrs:{src:e("2S0o")}}):t._e(),t._v(" "),t.bgimg[15].active?s("img",{staticClass:" repeat",attrs:{src:e("Ej0o")}}):t._e(),t._v(" "),t.bgimg[16].active?s("img",{staticClass:" repeat",attrs:{src:e("ohGQ")}}):t._e(),t._v(" "),t.bgimg[17].active?s("img",{staticClass:" repeat",attrs:{src:e("GF21")}}):t._e(),t._v(" "),t.bgimg[18].active?s("img",{staticClass:" repeat",attrs:{src:e("BL4G")}}):t._e(),t._v(" "),t.bgimg[19].active?s("img",{staticClass:" repeat",attrs:{src:e("vYM2")}}):t._e(),t._v(" "),t.bgimg[20].active?s("img",{staticClass:" repeat",attrs:{src:e("Bta6")}}):t._e(),t._v(" "),t.bgimg[21].active?s("img",{staticClass:" repeat",attrs:{src:e("FC8b")}}):t._e(),t._v(" "),t.bgimg[22].active?s("img",{staticClass:" repeat",attrs:{src:e("hSfz")}}):t._e(),t._v(" "),t.bgimg[23].active?s("img",{staticClass:" repeat",attrs:{src:e("e15m")}}):t._e()])])],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.popp,expression:"popp"}],staticClass:"popContainer"},[s("p",{staticClass:"spanp"},[t._v(t._s(t.spanp))]),t._v(" "),s("button",{staticClass:"roleimg"},[t.ruleimg4?s("img",{staticStyle:{height:"100%"},attrs:{src:e("AAeF")}}):t._e()]),t._v(" "),s("div",{staticClass:"withcolor oringe"},[s("div",{staticClass:"close",on:{click:t.pop}},[s("img",{attrs:{src:e("EGSE")}})]),t._v(" "),s("img",{staticClass:"animapng7",attrs:{src:"http://monkeytown.monkeytree.com.hk/image/c.gif"}})])]),t._v(" "),s("transition",{attrs:{name:"fades"}},[t.resume?s("div",{staticClass:"about"},[s("div",{staticClass:"twomenu"},[s("div",[s("img",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticStyle:{width:"30%",height:"10%"},attrs:{src:e("eSb0")},on:{click:t.sound}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticStyle:{width:"30%",height:"10%"},attrs:{src:e("Gsqe")},on:{click:t.sound}})]),t._v(" "),s("div",{staticStyle:{"margin-top":"5px"}},[s("img",{staticStyle:{width:"30%",height:"10%"},attrs:{src:e("mKkN")},on:{click:t.changesett}})])])]):t._e()])],1)},staticRenderFns:[]};var c=e("VU/8")(a,o,!1,function(t){e("UY6P")},"data-v-d834b4e6",null);i.default=c.exports}});