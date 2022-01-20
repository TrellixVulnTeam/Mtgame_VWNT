<template>
	<div class="phonics5">
    <span id="gameplay">
    <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
    </span>
    <!--<img src="../../assets/image/phonicsbg1.png"  style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;" >-->

    <transition name="fades">
			<div class="contain" v-show="!resume">
					<img src="../../assets/image/prightback.png"  @click="gomemu" class="backbutton"/>
					 <img src="../../assets/image/phelp.png"  @click="help" class="helpbutton"/>
        <!--<img src="../../assets/image/phonicsbg1.png"  style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;" >-->

        <transition name="fade1">
					<div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <!-- <img src="../../assets/image/zhizhuw.png" style="width: 100%;z-index: -1; display:block;position: absolute;"> -->
						<!--<img src="../../assets/image/phonicsbg1.png"  style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;" >-->
						<p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{this.question}}</p>
					</div>
				</transition>
				<transition name="fade1">
					<div v-if="!onef" style="width: 100%; height: 86%;text-align: center;display:block;position: fixed;">
            <!--<img src="../../assets/image/zhizhuw.png" style="width: 100%;z-index: -1; display:block;position: absolute;">-->
             <!--<img src="../../assets/image/phonicsbg1.png"  style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;">-->
						<div  v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
						<audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3"></audio>
						<audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3" ></audio>
						<div class="jtk-demo">
							<div class="jtk-demo-canvas canvas-wide drag-drop-demo jtk-surface jtk-surface-nopan" id="canvas">
								<div class="leftbox" v-bind:class="{leftbox1:changwidth}">
									<div class="window" v-for="li in list1" :key="li.name" :id="li.id" v-bind:class="{window1:changwidth}" @click="makesound(li)">
                    <!--<button class="buttonstyle">{{li.bg_name}}</button>-->
                    <!--<button>-->
                      <img :src="pic+li.bg" class="imgsty" v-bind:class="{imgsty1:changwidth}" @load="loadimg">
                    <!--</button>-->

	                   <audio  autoplay="autoplay" v-if="li.showbg"><source :src="pic+li.audio" ></audio>
									</div>
								</div>
								<img src="../../assets/image/StarYellow.png" class="start" v-if="showbg" />
								<div class="rightbox" v-bind:class="{rightbox1:changwidth}">
									<div class="windows" v-for="st in list2" :key="st.name" :id="st.id" v-bind:class="{answer:st.issuccess,changecolor:st.changecolor,otherwidth:changwidth}">
										<span class="spanlist" v-bind:class="{namesize:st.size}">{{st.name}}</span>
										<img  src="../../assets/image/answerbg2.png" class="bglist"/>
									</div>
								</div>
                <button class="undo" @click="undo()">Undo</button>
							</div>
						</div>
					</div>

				</transition>
				<div class="settinglist">
					<img src="../../assets/image/pbar.png" style="width: 100%;bottom: 0;height: 100%;">

					<span class="fontsize">Listen and match the pictures to the correct letters.</span>
					<div @click="changesett">
						<img src="../../assets/image/p-pause.png" class=" repeat">
					</div>
					<!-- <div @click="change">
						<img src="../../assets/image/Icon_Repeat.png" class=" repeat">
					</div> -->
				</div>

			</div>
		</transition>
		<div class='popContainer' v-show="popp">
			<p class="spanp">{{spanp}}</p>
			<button class="roleimg">
				<img src="../../assets/image/p-rule.png" style="height: 100%;"/>
			</button>
			<div class="withcolor">
				<div class="close"  @click="pop">
					<img src="../../assets/image/pcloce.png">
				</div>
				<img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/excercise5.gif">


			</div>
		</div>
		<transition name="fades">
			<div class="about" v-show="resume">
				<div class="twomenu">
					<div>
						<img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show"  @click="sound"/>
						<img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show"  @click="sound"/>
					</div>
					<div style="margin-top: 5px;">
						<img src="../../assets/image/resume.png" style="width: 30%; height: 10%;" @click="changesett">
					</div>
					<!-- <div style="margin-top: 5px;">
						<div><img src="../../assets/image/home.png" style="width: 30%; height: 10%;"  @click="gomemu"></div>
					</div> -->
				</div>
			</div>
		</transition>
	</div>

</template>

<script>
	import Vue from "vue";
    import $ from 'jquery';
	var qs = require('qs');
	import {
		jsPlumb
	} from 'jsplumb';

	export default {
		name: "phonics5",
		watch: {

			'loaded': function(newVal) {
				if (this.onef == true) {
					if (this.list1.length > 2 ||this.list2.length > 2) {
						 this.changwidth = true;
						}
            for(var i=0;i<this.list2.length;i++){
              if(this.list2[i].name.length>10){
                 this.list2[i].size=1;
              }
            }

					setTimeout(() => {
						this.onef = false;
					}, 2000);

				}
				if (this.onef == false) {

					setTimeout(() => {
						const that = this;
						jsPlumb.ready(function() {
							var instance = jsPlumb.getInstance({
								DragOptions: {
									cursor: "pointer",
									// zIndex: 2000
								},
								PaintStyle: {
									//stroke: "#057bb8"
								},
								// EndpointHoverStyle: {
								// 	fill: "#f3c70f"
								// },
								// HoverPaintStyle: {
								// 	stroke: "#057bb8"
								// },
								// ReattachConnections : false,
								ConnectionsDetachable: false,
								EndpointStyle: {
									width:20,
									height: 16,
									margin: 20,
									//stroke: "#057bb8"
								},
								Endpoint: "Image",
								// Anchors: ["TopCenter", "TopCenter"],
								Container: "canvas"
							});
							// suspend drawing and initialise.
							instance.batch(function() {
								instance.bind("click", function(component, originalEvent) {
									jsPlumb.detach(component);
								});
								// configure some drop options for use by all endpoints.
								var exampleDropOptions = {
									tolerance: "touch",
									hoverClass: "dropHover",
									activeClass: "dragActive",
								};
								// the second example uses a Dot of radius 15 as the endpoint marker, is both a source and target,
								// and has scope 'exampleConnection2'.
								//
								var color2 = "#FFF255";
								var exampleEndpoint2 = {
									endpoint: ["Image", {
										src: "http://monkeytown.monkeytree.com.hk/image2/star3.png"
									}],
									paintStyle: {
										fill:"#057bb8"
									},
									isSource: true,
									scope: "#057bb8",
									connectorStyle: {
										stroke: "#FFF255",
										strokeWidth: 6
									},
									connector: ["Straight", {
										 gap: 15,
									}],
									maxConnections: 1,
									isTarget: false,
									dropOptions: exampleDropOptions
								};
								var exampleEndpoint3 = {
									endpoint: ["Image", {
										src: "http://monkeytown.monkeytree.com.hk/image2/star3.png"
									}],
									EndpointStyle: {
										margin: 20,
									},
									paintStyle: {
										fill: "#057bb8"
									},
									isSource: false,
									scope: "#057bb8",
									connectorStyle: {
										stroke: "#FFF255",
										strokeWidth: 6
									},
									connector: ["Straight", {
										gap: 15,
									}],
									maxConnections: 1,
									isTarget: true,
									dropOptions: exampleDropOptions
								};
                                if (that.list1.length > 2 ||that.list2.length > 2) {
                                   that.changwidth = true;
                                 }

								for (var i = 0; i < that.list1.length; i++) {
									 if(that.loaded==true){
									instance.addEndpoint(
										that.list1[i].id, {
											anchor: [1,0.5,0,0,25,0],
										},
										exampleEndpoint2
									)
									}
								}
								for (var j = 0; j < that.list2.length; j++) {
									 if(that.loaded==true){
									instance.addEndpoint(
										that.list2[j].id, {
											anchor: [0,0.5,0,0,-20,0],
										},
										exampleEndpoint3
									)
									}
								}
								//   instance.bind("connectionDrag", function(connection) {
								//
								// });
								instance.bind("connectionDragStop", function(connection) {
									that.zhezhao=true;
									//console.log(connection);
									var truetime = that.list1.length;
									for (var i = 0; i < that.list1.length; i++) {
										if (connection.sourceId == that.list1[i].id) {
											if (connection.targetId == that.list1[i].targetId) {
												if (connection.target != null) {
													if(that.truelist.length <= 0){
														that.truelist.push(connection.targetId);
														for (var f = 0; f < that.falselist.length; f++) {
															if (that.falselist[f] == connection.suspendedElementId) {
																that.falselist.splice(f, 1);
															}
														}
													}else{
														// for(var f=0;f<that.truelist.length;f++){
														// 	if(that.truelist[f] != connection.targetId){
																that.truelist.push(connection.targetId);
														// 	}
														// }
														for (var f = 0; f < that.falselist.length; f++) {
															if (that.falselist[f] == connection.suspendedElementId) {
																that.falselist.splice(f, 1);
															}
														}
													}
												} else {
													for (var t = 0; t < that.truelist.length; t++) {
														if (that.truelist[t] == connection.suspendedElementId) {
															that.truelist.splice(t, 1);
														}
													}
													for (var f = 0; f < that.falselist.length; f++) {
														if (that.falselist[f] == connection.suspendedElementId) {
															that.falselist.splice(f, 1);
														}
													}
												}
											} else {
												for (var g = 0; g < that.list1.length; g++) {
													if (connection.targetId == that.list1[g].targetId) {
														if (connection.target != null) {
															if(that.falselist.length <= 0){
																that.falselist.push(connection.targetId);
																for (var t = 0; t < that.truelist.length; t++) {
																	if (that.truelist[t] == connection.suspendedElementId) {
																		that.truelist.splice(t, 1);
																	}
																}
															}else{
																// for(var f=0;f<that.falselist.length;f++){
																// 	if(that.falselist[f] != connection.targetId){
																		that.falselist.push(connection.targetId);
																// 	}
																// }
															}
														} else {
															for (var f = 0; f < that.falselist.length; f++) {
																if (that.falselist[f] == connection.suspendedElementId) {
																	that.falselist.splice(f, 1);
																}
															}
														}
													}
												}
											}
										}
									}

									setTimeout(() => {
										that.nowtime = document.getElementsByTagName("svg").length;
                    //console.log(that.nowtime);

										if (that.nowtime == truetime) { //连接的数量
										that.zhezhao=true;
										that.countpage += 1;
											if (that.falselist.length <= 0) { //错误list的长度
												that.showbg = 1;that.soundscorrect=true;
												for (var i = 0; i < that.list2.length; i++) {
													 //展示星星

													that.list2[i].changecolor=1;
												}
												//console.log( that.account);
													// that.account += 1;
												setTimeout(() => {
													// for (var i = 0; i < that.list2.length; i++) {
														that.showbg = 0;that.soundscorrect=false;
													// }
													that.nowtime = 0;
													if(that.countpage<=that.listD.length){
                             that.account += 1;
													   that.onef = true;
													   that.loaded=false;
													   that.list =that.listD[that.countpage-1];
													   that.list2=[];that.list1=[];
													   for( var i=0;i<that.list.length;i++){
													   	that.list1.push(that.list[i]);
													   	// that.list2.push(that.list[i]);
													   }
													   for(var u=0;u<that.list.length;u++){
													   	that.list2.push({
                                bg: that.list[u].bg,
													   		id:that.list[u].id2,
													   		changecolor: that.list[u].changecolor,

													   		issuccess:that.list[u].issuccess,
													   		name:that.list[u].name,

													   		showbg:that.list[u].showbg,

													   		targetId:that.list[u].targetId2,

													   	})

													   }
													   // var leng=that.list.length/2-1;
													   //   that.list2=[];that.list1=[];
													   // for(var i=leng+1;i<that.list.length;i++){
													   // 	that.list2.push(that.list[i]);
													   // }
													   // for(var i=0;i<leng+1;i++){
													   // 	that.list1.push(that.list[i]);
													   // }
													 that.zhezhao=false;
													}else{
                                                            that.account += 1;
																setTimeout(() => {
																	that.zhezhao=false;
																	that.$router.push({
																		//核心语句
																		path: "/presult", //跳转的路径
																		query: {
																			//路由传参时push和query搭配使用 ，作用时传递参数
																			// id: that.id,
																			// account: that.account,
																			// type: that.type,
																			// sum: that.sum,
																			type:that.type,
																			partName:'phonics5',
																			account:that.account,
																			menuId: that.menuId,
																			unitsId:that.unitsId,
																			unit:that.unit
																		}
																	});

																}, 2000);
													}
													that.truelist = [];
													that.falselist = [];


												}, 2000);
											} else {
												var svgLine = document.getElementsByTagName("svg");
												that.soundsWrong=true;
													for (var i = 0; i < that.list2.length; i++) {
														for (var k = 0; k < that.falselist.length; k++) {
														if (that.falselist[k] == that.list2[i].id) {
															that.list2[i].issuccess = 1; //晃动错误
														}
														if (that.falselist[k] == svgLine[i]._jsPlumb.targetId) {
															svgLine[i].children[0].setAttribute("stroke", "#cc6453");
														}
													}
												}
												// that.account=that.account+that.list2.length-that.falselist.length;
												//console.log( that.account);
												setTimeout(() => {
													that.soundsWrong=false;
													for (var i = 0; i < svgLine.length; i++) {
														/*svgLine[i].children[0].setAttribute("stroke", "#cc6453");*/
														svgLine[i].style.transition = 'all 0.4s';
														svgLine[i].style.width = '0px';
													}
													setTimeout(() => {
														var lineW;
														instance.deleteEveryConnection();

														for (var i = 0; i < that.list1.length; i++) {
															that.list2[i].changecolor = 1;
															instance.connect({
																source: that.list1[i].id,
																target: that.list1[i].targetId,
																endpoint: ["Image", {
												                  src: "http://monkeytown.monkeytree.com.hk/image2/star3.png"
											                      }],
																connector: ['Straight', {
												                   gap: 15,
											                     }],
																paintStyle: {
																	stroke: '#FFF255',
																	strokeWidth: 6
																},
																anchor: [ [1,0.5,0,0,25,0],  [0,0.5,0,0,-20,0]]
															});
															lineW = svgLine[i].clientWidth || svgLine[i].offsetWidth;
															svgLine[i].style.width = '0px';
															svgLine[i].style.transition = 'all 0 ease 0';
														}
														setTimeout(() => {
															for (var i = 0; i < svgLine.length; i++) {
																svgLine[i].style.transition = 'all 0.4s';
																svgLine[i].style.width = lineW + 'px';
															}
															setTimeout(() => {
																instance.deleteEveryConnection();
																for (var i = 0; i < that.list2.length; i++) {
																	that.list2[i].changecolor = 0;
																	that.list2[i].issuccess = 0;
																}
																that.nowtime = 0;

																if(that.countpage<=that.listD.length){
																   that.onef = true;
																   that.loaded=false;
																   that.list =that.listD[that.countpage-1];
																   var leng=that.list.length/2-1;
																   that.list2=[];that.list1=[];
																   for( var i=0;i<that.list.length;i++){
																   	that.list1.push(that.list[i]);
																   	// that.list2.push(that.list[i]);
																   }
																   for(var u=0;u<that.list.length;u++){
																   	that.list2.push({
                                      bg: that.list[u].bg,
																   		id:that.list[u].id2,
																   		changecolor: that.list[u].changecolor,

																   		issuccess:that.list[u].issuccess,
																   		name:that.list[u].name,

																   		showbg:that.list[u].showbg,

																   		targetId:that.list[u].targetId2,

                                      size:0,
																   	})


																   }

																   that.zhezhao=false;
																}else{
																			setTimeout(() => {
																				that.zhezhao=false;
																				that.$router.push({
																					//核心语句
																					path: "/presult", //跳转的路径
																					query: {
																						//路由传参时push和query搭配使用 ，作用时传递参数
																						// id: that.id,
																						// account: that.account,
																						// type: that.type,
																						// sum: that.sum,
																						type:that.type,
																						partName:'phonics5',
																						account:that.account,
																						menuId: that.menuId,
																						unitsId:that.unitsId,
																						unit:that.unit
																					}
																				});
//
																			}, 2000);
																}
																that.truelist = [];
																that.falselist = [];

															}, 1000);
														}, 100);
													}, 300);
												}, 2000);
											}
										}else{
											that.zhezhao=false;
										}
									}, 400);
								});
								// make .window divs draggable
								//instance.draggable(jsPlumb.getSelector(".drag-drop-demo .window"));
							});
							// jsPlumb.fire("jsPlumbDemoLoaded", instance);
						});
					}, 500);
				}

			},
		},
		data() {
			return {
				popp: false,
				ruleimg8:false,
				spanp:'',
				loaded:false,
        shownumb:false,
				ruleimg10:false,
				ruleimg4:false,
				ruleimg15:false,
				ruleimg25:false,
				ruleimg12:false,
				list1: [
				],
				list2: [
				],
				list:[],
				changwidth: false,
				action:false,
				action1:false,
				zhezhao:false,
				nowtime: 0,
				question:10,
				soundsWrong:false,
				soundscorrect:false,
				showbg:0,
				falselist: [],
				truelist:[],
				countpage: 1,
				unitsId:'',
				unit:'',
				menuId:'',
				listD: [],
				account: 0,
				flag2: true,
				show: true,
				resume: false,
				id: '',
				pic: "",
				// url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseD',
				url: '/phonics/phonics',
				 gamename:'',
           timeurl:'/user/playTime',
				levels:0,
				// page: this.page++,
				type: 'phonics5',
				onef: true,

			}
		},

		methods: {
		  gomemu(){
				var audio = document.getElementById('music');
				if(localStorage.getItem('audiomusic')==="false"){

				}else{
					audio.play();
				}
        // 统计时间
         var endtimestamp = (new Date()).getTime();
        this.$axios.post(this.timeurl, qs.stringify({
          id: localStorage.getItem('startTimeid'),
          time: endtimestamp,
          name:this.gamename,
          studentId:localStorage.getItem('studentId')
        })).then(res => {
          localStorage.setItem('startTimeid','');
          localStorage.setItem('gamename','');
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
            this.$router.push({ //核心语句
            	path: '/phonicsmenu', //跳转的路径
            	query: {
            		unitsId: this.unitsId,
            		unit:this.unit
            	}
            })
            },
			pop(){
				 this.popp = !this.popp;
			},
      undo(){
        this.onef = true;
        this.loaded=false;
        this.nowtime = 0;
        this.list =this.listD[this.countpage-1];
        this.list2=[];this.list1=[];
        for( var i=0;i<this.list.length;i++){
          this.list1.push(this.list[i]);
          // that.list2.push(that.list[i]);
        }
        for(var u=0;u<this.list.length;u++){
          this.list2.push({
            bg: this.list[u].bg,
            id:this.list[u].id2,
            changecolor: this.list[u].changecolor,
            issuccess:this.list[u].issuccess,
            name:this.list[u].name,
            showbg:this.list[u].showbg,
            targetId:this.list[u].targetId2,

          })

        }
        this.truelist = [];
        this.falselist = [];
        // var leng=that.list.length/2-1;
        //   that.list2=[];that.list1=[];
        // for(var i=leng+1;i<that.list.length;i++){
        // 	that.list2.push(that.list[i]);
        // }
        // for(var i=0;i<leng+1;i++){
        // 	that.list1.push(that.list[i]);
        // }
        this.zhezhao=false;
      },
      loadimg(){
        this.loaded=true;
        // console.log(this.loaded);
      },
			help(){
				if(this.onef==false){
					this.spanp="Listen and match the pictures to the correct letters.";
				this.popp = !this.popp;
				if( this.list1[0].rank==0){
					this.ruleimg8=true;this.ruleimg12=false;
				}else if( this.list1[0].rank==1){
					this.ruleimg8=false;this.ruleimg12=true;
				}
				}
			},
			makesound(li){
		    console.log(li);
        if(li.showbg==0){
          li.showbg = 1;
          setTimeout(() => {
            li.showbg = 0;
          }, 3000);
        }

			},
			changesett() {
				if(this.action==false&&this.onef==false){
				this.action=true;
				setTimeout(() => {
				this.action=false;
				this.resume = !this.resume;
				}, 1000);
				}
			},
			sound(){
				this.show=!this.show;
				if(this.show==false){
					 // this.$refs.MusicPlay.pause();
					 localStorage.setItem("gamemusic", "false");
				}else{
					// this.$refs.MusicPlay.play();
					 localStorage.setItem("gamemusic", "true");
				}
			},
			bodyScroll(event) {
			event.preventDefault();
			},

		},
		destroyed() {
		    document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
        window.removeEventListener('popstate',this.gomemu,false);
		},

		created() { //生命周期里接收参数
		    this.pic=this.$axios.defaults.baseURL2;
			this.unit = this.$route.query.unit;
			this.unitsId=this.$route.query.unitsId;
			this.menuId = this.$route.query.menuId; //接受参数关键代码
      this.gamename=this.$route.query.name;
      localStorage.setItem('gamename',this.gamename);
      var timestamp = (new Date()).getTime();
      localStorage.setItem('startTimeid',timestamp);
			if(localStorage.getItem('gamemusic')=="false"){
			    this.show=false;
			}else{
				 this.show=true;
			}

					this.$axios.post(this.url, qs.stringify({
					  menuId: this.menuId,
            num:8
					})).then(res => {
						 // this.listD=res.data;
						 for (let i in res.data.maps) {
						     this.listD.push(res.data.maps[i]); //属性
						 }
            // console.log(this.listD);
            for(let i = 0,len = this.listD.length; i < len; i++){
              let currentRandom = parseInt(Math.random() * (len - 1));
              let current = this.listD[i];
              this.listD[i] = this.listD[currentRandom];
              this.listD[currentRandom] = current;
            }

						  this.question=this.listD.length;
              this.shownumb=true;
						this.list =this.listD[this.countpage-1];
						for( var i=0;i<this.list.length;i++){
							this.list1.push(this.list[i]);
							// this.list2.push(this.list[i]);
						}
						for(var u=0;u<this.list.length;u++){
							this.list2.push({
                bg: this.list[u].bg,
								id:this.list[u].id2,
								changecolor: this.list[u].changecolor,
								issuccess:this.list[u].issuccess,
								name:this.list[u].name,
								showbg:this.list[u].showbg,
								targetId:this.list[u].targetId2,
                size:0
							})

						}
            for(var i=0;i<this.list2.length;i++){
              if(this.list2[i].name.length>10){
                 this.list2[i].size=1;
              }
            }

	         if (this.onef == true && this.shownumb==true) {
						setTimeout(() => {
						this.onef = false;
					  	if (this.list1.length > 2 ||this.list2.length > 2) {
							 this.changwidth = true;
							}

						},1000);

            }
					}, res => {
						alertMsg("You must be connected to the internet.<br>Please connect and try again.");
					});
         // 统计时间
         this.$axios.post(this.timeurl, qs.stringify({
           id: timestamp,
           time: timestamp,
           name:this.gamename,
           studentId:localStorage.getItem('studentId')
         })).then(res => {
           // console.log(res.data);
         }, res => {
           alertMsg("You must be connected to the internet.<br>Please connect and try again.");
         });
         if(window.history && window.history.pushState){
            history.pushState(null,null, document.URL);
            window.addEventListener('popstate', this.gomemu,false);
         }

				 document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
		},

	};
</script>

<style scoped lang="less">
	* {
		box-sizing: border-box;
	}

	body {
		padding: 0;
		cursor: auto !important;
	}
	html,
	body {
		margin: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
    .phonics5 {
    	width: 100%;
    	height: 100%;
      background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/phonicsbg1.png");
      background-color: #204900;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    	position: absolute;
    	display: flex;
    }

    .foo {
    	margin: 0 20px !important;
    }

    .about {
    	display: flex;
    	margin: 0px;
    	width: 100%;
    	height: 100%;
    	display: block;
    	position: fixed;
    	background-color: #44ccc2;
    	z-index:201;
    }
    .undo{
      position: absolute;
      top: 20%;
      right: 2%;
      border: none;
      background: none;
      background-image: url("../../assets/image/listbg.png");
      width: 100px;
      color: white;
      font-size: 1.5rem;
      font-family: pepper;
      background-position: center;
      border-radius: 15px;
      height: 50px;
      background-size: contain;
    }
    .twomenu {
    	padding-top: 18%;
    	display: flex;
    	margin: 0px;
    	width: 100%;
    	height: 100%;
    	display: block;
    	position: fixed;
    }

	.drag-locked {
		border: 1px solid red;
	}

	.cmdLink {
		font-size: 0.80em;
	}

	/** DRAG/DROP CLASSES **/
	.dragActive {
		border: 2px dotted orange;
	}

	.dropHover {
		border: 1px dotted red;
	}

	path,
	.jtk-endpoint {
		cursor: pointer;
		margin: 0 20px !important;
	}

	svg {
		margin: 0 20px !important;
	}
    .windows {
    	// background-color: #44ccc2;
    font-family: pepper;
    	font-size: 1.3rem;
    	color: #FFFFFF;
    	position: relative;
    	margin: 10px;
    	width: 45%;
    margin: 3rem 1px 0 15px;
    height: 3rem;
    	display: grid;
    	-ms-flex-line-pack: center;
    	align-content: center;
    	-webkit-box-align: center;
    }

	.leftbox {
	  width: 60%;
	  margin-left: 7%;
	  float: left;
	  margin-top: 1%;
	  display: inline-block;
	}

	.leftbox1 {
	  width: 47%;
	  margin-left: 13%;
	  margin-top: 1%;
	}

	.rightbox {
		width: 30%;
		right: 0;
		height: 95%;
		top: -5%;
		 position: absolute;
		 border: none;
		 background: none;
		 display: table;
		 text-align: center;
	}

	.rightbox1 {
		width: 40%;
	}

	.otherwidth {
		height: 3rem;
		font-size: 1.3rem;
		margin: 3rem 1px 0 15px;
	}


  .bglist{
  	width: 100%;
  	height: 100%;
  	position: absolute;
  }
  .spanlist{
  	    position: absolute;
  	    width: 100%;
  	    z-index: 2;
  	    line-height: 3rem;
  }
  .namesize{
  	font-size: 1rem !important;
  }


	.drag-drop-demo .window1 {
		width: 30% ;
		border-radius: 25px !important;
		border: 0.4rem solid #8e5644 !important;
	}


	.start {
		display: block;
		    position: absolute;
		    // top: -15%;
			height: 100%;
		    width: 50%;
		    left: 25%;
			z-index: 99;
	}

	.imgsty {
		width: 66%;
		text-align: center;
		margin: 0 auto;
    max-height: 4.5rem;
	}
  .imgsty1 {
    width: 57% !important;
  }
  .buttonstyle{
    min-height: 60px;
    width: 100%;
    border: none;
    color: #7d4e28;
    font-family: kg;
    font-size: 2.8rem;
    background: none;
  }
	.listimg img {
		cursor: pointer;
		//transition: all 0.6s;
	}

	.listimg:focus {
		transform: scale(1.2);
	}

	// .listimg:hover {
	// 	transform: scale(1.2);
	// }

	.listimg:active {
		transform: scale(1.2);
	}

	// .listimg:visited {
	// 	transform: scale(1);
	// }
    #dragDropWindow1 {
    	top: 30px;
    	left: 60px;
    }

    #dragDropWindow2 {
    	top: 30px;
    	left: 10px;
    }

    /** ELEMENTS **/
    .drag-drop-demo .window {
    	background-color: #FBFDD2;
    	width: 40%;
    	border-radius: 30px;
    	margin: 15px 30px;
    	display: flex;
    	border: 0.5rem solid #8e5644;
    	box-shadow: 0.2rem 0.2rem 0.1rem #683325;
    	text-align: center;
    	align-content: center;
    	align-items: center;
    	vertical-align: middle;
    }
    .backbutton{
    	// display: block;
    	z-index: 101;
    	 width: 6%;
    	 position: fixed;
    	 left: 15px;
    	  top: 15px;
    }
    .helpbutton{
    	z-index: 101;
    	 width: 6%;
    	 position: fixed;
    	 right: 15px;
    	  top: 15px;
    }
  .popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 102;
    background: rgba(0, 0, 0, 0.3);
  }

  .withcolor {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    top: 14%;
    background-color: #FFEECB;
    height: 65%;
    border: 10px solid #70401E;
    border-radius: 50px;
    position: relative;
  }

  .oringe {
    background-color: #FFEECB !important;
    border: 10px solid #70401E !important;
  }

  .close {
    width: 50px;
    height: 50px;
    float: right;
    margin: -15px;
    border-radius: 50px;
    text-align: center;
  }

  .close img {
    height: 50px;
    width: 50px;
    margin: 0 auto;
  }

  .spanp {
    position: absolute;
    width: 50%;
    margin: 0 25%;
    top: 18%;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    z-index: 2;color: #603915;
    font-family: pepper;
  }

  .spanp1 {
    font-size: 0.8rem;
    /*text-align: left;*/
  }

  .animapng {
    height: 80%;
    margin-top: -7%;
    margin-left: 10%;
  }

  .animapng7 {
    height: 70%;
    width: auto;
    margin-top: 5%
  }

  .roleimg {
    position: absolute;
    height: 68%;
    top: 15%;
    left: 5%;
    border: none;
    background: none;
  }


	.fontsize {
		font-family: pepper;
		color: white;
		bottom: 15%;
		left: 3%;
		position: absolute;
		font-size: 1.4rem;
		max-height: 100%;
		min-height: 60%;
		//margin-left: 2%;
	}

	.fontsizes {
		font-family: kg;
		font-weight: bolder;
		color: #935D24;
		// position: sticky;
		text-align: center;
		vertical-align: middle;
		margin-top: 22%;
		font-size: xx-large;
	}

	.contain {
		width: 100%;
		height: 100%;
		position: relative;
		display: contents;
		overflow: hidden;
	}

	.fade-enter {
		transform: translate3d(100%, 0, 0);
	}

	.fade-enter-active {
		transition: all 0.6s;
	}

	.fade-leave-active {
		transition: all 0.6s;
	}

	.fade-leave-to {
		//opacity: 0;
		transform: translate3d(0, 0, 0);
	}

	.fade1-enter-active {
		transition: all 0.6s;
	}

	.fade1-leave-active {
		transition: all 0.6s;
	}

	.fade1-enter {
		transform: translate3d(100%, 0, 0);
	}

	.fade1-leave-to {
		//transform: translate3d(100%, 0, 0);
		transform: translate3d(-99%, 0, 0);
	}

	.fades-enter-active {
		transition: all 0.6s;
	}

	.fades-leave-active {
		transition: all 0.6s;
	}

	.fades-enter {
		//opacity: 1;
		transform: translate3d(0, 100%, 0);
	}

	.fades-leave-to {
		//opacity: 0;
		//transform: translate3d(0,-100%,0) !important;

	}

	.changecolor {
		color: #52ADFF !important;
	}

	.answer {
		color: #cc6453;
		animation: myPlay 0.7s 0s infinite alternate;
		animation-timing-function: linear;
		animation-iteration-count: 3;

		-webkit-animation: myPlay 0.7s 0s infinite alternate;
		-webkit-animation-timing-function: linear;
		-webkit-animation-iteration-count: 3;

		-moz-animation: myPlay 0.7s 0s infinite alternate;
		-moz-animation-timing-function: linear;
		-moz-animation-iteration-count: 3;
		-o-animation: myPlay 0.7s 0s infinite alternate;
		-o-animation-timing-function: linear;
		-o-animation-iteration-count: 3;
	}

	@keyframes myPlay {
		0% {

		}

		50% {
			margin-left: 20px;
		}

		100% {
			// position: relative;
			// left: 0px;
		}
	}

	@-webkit-keyframes myPlay {
		0% {
			// position: relative;
			// left: 0px;
		}

		50% {
			margin-left: 20px;
		}

		100% {
			// position: relative;
			// left: 0px;
		}
	}

	@-moz-keyframes myPlay {
		0% {
			// position: relative;
			// left: 0px;
		}

		50% {
              margin-left: 20px;
		}

		100% {
			// position: relative;
			// left: 0px;
		}
	}

	@media screen and (max-width:481px) {
		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 11%;
			left: 3%;
			position: absolute;
			font-size: large;
			max-height: 100%;
			min-height: 60%;
			margin-left: 2%;
		}

		.twomenu {
			padding-top: 18%;
		}

		.leftbox {
			margin-top: 4%;
			margin-left: 5%;
		}

		.drag-drop-demo .window {}

		.rightbox {
			width: 26%;
		}

		.windows {
			height: 2.5rem;
			margin: 3.5rem 1px 4.5rem 0px;
		}

		.drag-drop-demo .window1 {
			width: 35% !important;
			border-radius: 20px !important;
			border: 0.3rem solid #44ccc2 !important;
			box-shadow: 0.2rem 0.2rem 0.1rem #057bb8;

		}

		.otherwidth {
			width: 75%;
			font-size: 1.2rem;
			height: 2.2rem;
			margin: 2.4rem 1px 0 15px;
		}

	}

	@media screen and (min-width: 482px) and (max-width: 569px) {

		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 11%;
			left: 3%;
			position: absolute;
			font-size: large;
			max-height: 100%;
			min-height: 60%;
			margin-left: 2%;
		}
   //      .start{
   //      	display: block;
   //      	position: absolute;
   //      	top: -15%;
   //      	width: 50%;
   //      	left: 25%;
			// z-index: 99;
   //      }
		.twomenu {
			padding-top: 18%;
		}

		.leftbox {
			margin-top: 1%;
			margin-left: 5%;
		}

		.rightbox {
			width: 26%;
		}

		.windows {
			height: 2.5rem;
			margin: 3.5rem 1px 4.5rem 0px;
		}

		.drag-drop-demo .window1 {
			border-radius: 20px !important;
			border: 0.3rem solid #44ccc2 !important;
			box-shadow: 0.2rem 0.2rem 0.1rem #057bb8;

		}

		.leftbox1 {
			margin-top: 0 ;
		}

		.otherwidth {
			width: 75%;
			font-size: 1.2rem;
			height: 2.2rem;
			margin: 2.4rem 1px 0 15px;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1354px){

		.fontsizes {
			margin-top: 30%;
		}
     //    .start {
		   //     top: 3%;
		   //     left: 25%;
	    // }
		.twomenu {
			padding-top: 26%;
		}


		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 15%;
			left: 8%;
			position: absolute;
			font-size: xx-large;
			max-height: 80%;
			min-height: 50%;
			margin-left: 2%;
			transform: scale(1.2);
		}

		.leftbox {
			margin-top: 7%;
		}

		.drag-drop-demo .window {
			margin: 50px 30px;
			border-radius: 40px;
			border: 0.6rem solid #8e5644;
			box-shadow: 0.4rem 0.4rem 0.1rem #683325;
		}

		.rightbox {
			// margin-top: 3%;
			// margin-right: 11%;
		}

		.windows {
			font-size: 2rem;
			width: 50%;
			height: 5rem;
			margin: 9.5rem 1px 0 15px;
		}

		.otherwidth {
			height: 4rem;
			font-size: 2rem;
			margin: 8.5rem 1px 0 15px;
		}
    .imgsty{
      max-height: 8rem;
    }
		.imgsty1 {
			width: 66% !important;
		}

		.rightbox1 {
			margin-top: -1%;

		}

		.leftbox1 {
			margin-top: 1%;
		}

		.drag-drop-demo .window1 {
			width: 45% !important;
			border-radius: 40px !important;
			margin: 40px 30px;
			border: 0.6rem solid #8e5644 !important;
		}
         .spanp{
         	top:22%;
         	font-size:1.5rem;
         }
         .spanp1{
         	font-size:1.3rem;
         }
         .withcolor{
         	height:50%;
         	top:20%;
         	    border-radius: 75px;
         }
         .close {
         	width: 70px;
         	height:70px;

         }

         .close img {
         	height: 70px;
         	width: 70px;

         }
         .roleimg{
         	    height: 53%;
         	    top: 20%;
         }
         .spanlist{
           line-height: 3.5rem;
         }
    .namesize{
      font-size: 1.5rem !important;
    }
	}
  @media screen and (min-width: 1355px) and (max-width: 1600px) {
    .fontsizes {
      margin-top: 30%;
    }
    //    .start {
    //     top: 3%;
    //     left: 25%;
    // }
    .twomenu {
      padding-top: 26%;
    }


    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 15%;
      left: 8%;
      position: absolute;
      font-size: xx-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.2);
    }

    .leftbox {
      margin-top: 7%;
    }

    .drag-drop-demo .window {
      margin: 50px 30px;
      border-radius: 40px;
      border: 0.6rem solid #8e5644;
      box-shadow: 0.4rem 0.4rem 0.1rem #683325;
    }

    .rightbox {
      // margin-top: 3%;
      // margin-right: 11%;
    }

    .windows {
      font-size: 2rem;
      width: 50%;
      height: 5rem;
      margin: 9.5rem 1px 0 15px;
    }

    .otherwidth {
      height: 4rem;
      font-size: 2rem;
      margin: 8.5rem 1px 0 15px;
    }
    .imgsty{
      max-height: 11rem;
    }
    .imgsty1 {
      width: 66% !important;
    }



    .drag-drop-demo .window1 {
      width: 45% !important;
      border-radius: 40px !important;
      margin: 40px 30px;
      border: 0.6rem solid #8e5644 !important;
    }
		  .leftbox1{
            margin-top: 4%;
      }
      .rightbox{
			  margin-top: 7%;
	  	}
      .otherwidth{
        height: 5.5rem;
      }
      .spanlist{
        line-height: 5rem;
      }
      .spanp{
        top:22%;
        font-size:1.5rem;
      }
      .spanp1{
        font-size:1.3rem;
      }
      .withcolor{
        height:50%;
        top:20%;
        border-radius: 75px;
      }
      .close {
        width: 70px;
        height:70px;

      }

      .close img {
        height: 70px;
        width: 70px;

      }
      .roleimg{
        height: 53%;
        top: 20%;
      }
      .namesize{
        font-size: 1.5rem !important;
      }
	}
	@media screen and (min-width: 700px) and (max-width: 811px) {
	  	.fontsizes {
	  		margin-top: 17%;
	  	}
		.twomenu {
			padding-top: 18%;
		}
		.drag-drop-demo .window1 {
			width: 30%;
		}
		.leftbox1 {
		  width: 58%;
		  margin-top: 1%;
		  margin-left: 14%;
		}
    .rightbox1 {
    	margin-top: 2% !important;

    }


	  }
	@media screen and (min-width: 812px) and (max-width:895px) {

		.twomenu {
			padding-top: 14%;
		}


		.fontsizes {
			margin-top: 17%;
		}
	      .imgsty1{
			width: 63% !important;
		}
		.windows {

			margin: 5rem 1px 0 15px;
		}
		.leftbox {
		  margin-top: 4%;
		}
		.leftbox1{
		  margin-top: 2%;
		}

		.drag-drop-demo .window {
			width: 30%;
		}

		.drag-drop-demo .window1 {
			width: 30% !important;
		}

		.otherwidth {
			margin: 2.8rem 1px 0 15px;
		}
		.rightbox1 {
			margin-top: 1% !important;
		}
		.withcolor {
			height: 70%;
		}

	}
	@media screen and (min-width: 895px) and (max-width:1023px) {

		.twomenu {
			padding-top: 14%;
		}


		.fontsizes {
			margin-top: 17%;
		}
    .imgsty{
      max-height: 5rem;
    }
		.windows {

			margin: 5rem 1px 0 15px;
		}
		.leftbox {
			margin-top: 3%;
		}
	    // .window1{
	    // 	width: 30%;
	    // }
		.drag-drop-demo .window {
			width: 30%;
		}

		.leftbox1 {
		  margin-top: 2% !important;
		}
	    .rightbox{
			margin-top: 0%;
		}
		.rightbox1{
			margin-top: 4%;

		}
		.drag-drop-demo .window1 {
			width: 30% !important;
		}

		.otherwidth {
			margin: 2.8rem 1px 0 15px;
      height: 3.5rem;
		}
		.withcolor {
			height: 70%;
		}


	}
  @media screen and (min-width: 1600px){
    .fontsizes {
      margin-top: 20%;
      font-size: 3rem;
    }

    .twomenu {
      padding-top: 14%;
    }

    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 0%;
      left: 8%;
      position: absolute;
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }

    .leftbox {
      margin-top: 7%;
    }

    .drag-drop-demo .window {
      margin: 50px 30px;
      border-radius: 40px;
      border: 0.6rem solid #8e5644;
      box-shadow: 0.4rem 0.4rem 0.1rem #683325;
    }

    .rightbox {
      // margin-top: 3%;
      // margin-right: 11%;
    }

    .windows {
      font-size: 2rem;
      width: 50%;
      height: 5rem;
      margin: 9.5rem 1px 0 15px;
    }

    .otherwidth {
      height: 4rem;
      font-size: 2rem;
      margin: 8.5rem 1px 0 15px;
    }
    .imgsty{
      max-height: 12rem;
    }
    .imgsty1 {
      width: 66% !important;
    }



    .drag-drop-demo .window1 {
      width: 27% !important;
      border-radius: 40px !important;
      margin: 40px 30px;
      border: 0.6rem solid #8e5644 !important;
    }
    .leftbox1{
      margin-top: 4%;
      margin-left: 20%;
    }
    .rightbox{
      margin-top: 7%;
    }
    .otherwidth{
      height: 7rem;
      width: 40%;
      font-size: 3rem;
      line-height: 3rem;
      margin: 6.5rem 1px 0 15px;
    }
    .spanlist{
      line-height: 7rem;
    }
    .spanp{
      top:22%;
      font-size:2rem;
    }
    .spanp1{
      font-size:2rem;
    }
    .withcolor{
      height:60%;
      top:20%;
      border-radius: 75px;
    }
    .animapng7{
      width: auto;
    }
    .close {
      width: 100px;
      height:100px;
      margin: -36px;
    }

    .close img {
      height:100px;
      width: 100px;

    }
    .roleimg{
      height: 63%;
      top: 20%;
    }
    .namesize{
      font-size: 1.5rem !important;
    }
  }
</style>
