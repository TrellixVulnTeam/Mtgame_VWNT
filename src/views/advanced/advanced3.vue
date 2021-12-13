<template>
	<div class="advanced3">
		<span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
		</span>
    <img src="../../assets/image/advancebg3.png"  style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;">
    <!--<img src="../../assets/image/shuzhi.png" style="width: 100%;display:block;position: absolute;">-->

    <transition name="fades">
			<div class="contain" v-if="!resume3">
				<img src="../../assets/image/aback.png"  @click="gomemu" class="backbutton"/>
				 <img src="../../assets/image/ahelp.png"  @click="help" class="helpbutton"/>
				<transition name="fade1">
					<div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
						<!--<img src="../../assets/image/shuzhi.png" style="width: 100%;display:block;z-index: -1; position: absolute;">-->
            <!--&lt;!&ndash;<img src="../../assets/image/phonicsbg.png"  style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;">&ndash;&gt;-->
            <p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{ this.allquestion}}</p>
					</div>
				</transition>
				<transition name="fade1">
					<div v-show="!onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <!--<img src="../../assets/image/shuzhi.png" style="width: 100%;display:block;z-index: -1; position: absolute;">-->
						<!--<img src="../../assets/image/phonicsbg.png"  style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;">-->
						<div  v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
						<audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3" ></audio>
						<audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3" ></audio>

            <audio @canplay="getDuration"  ref="videos" id="videos" autoplay="autoplay" :src="truesound"></audio>

						<div class="windows">
							<div class="imgbox" id="imgBox">
								<div  v-for="(li,index)  in list1" :key="index" :class="{imgsty1:!index,imgsty2:index}" @click="answer1(li)">
                  <button class="imgsty">
                    <img src="../../assets/image/StarOrange.png" class="answerSucc" v-show="li.showstart" />
                    <span class="fontstyle">{{li.value}}</span>
                    <!--<img v-for="(li,index) in list1" :key="index" v-if="!index" :src="li.bg">-->
                  </button>
								</div>
                <!--<div  class="imgsty2"  @click="answer1(this.list1[1])">-->
                  <!--<button class="imgsty">-->
                	    <!--<img src="../../assets/image/StarOrange.png" class="answerSucc"/>-->
                      <!--<span class="fontstyle">{{this.list1[1].value}}</span>-->
                	    <!--&lt;!&ndash;<img v-for="(li,index) in list1" :key="index" v-if="index" :src="li.bg">&ndash;&gt;-->
                  <!--</button>-->
                <!--</div>-->
							</div>
							<!--<canvas id="canvas" style="position: absolute;left:0;z-index: 99;width: 100%;height: 100%;"-->
								<!--@mousedown="canvasDown($event)" @mouseup="canvasUp($event)" @mousemove="canvasMove($event)"-->
								<!--@touchstart="canvasDown($event)" @touchend="canvasUp($event)" @touchmove="canvasMove($event)">-->
								<!--您的浏览器不支持Canvas-->
							<!--</canvas>-->
						</div>
            <div>
              <!--<img class="repeatsound" src="../../assets/image/makesound.png" >-->
              <img class="rightbird" src="../../assets/image/teacher.png" @click="listen()">
            </div>
					</div>
				</transition>
				<div class="settinglist">
					<img src="../../assets/image/abar.png" style="width: 100%;bottom: 0;height: 100%;">
					<span class="fontsize">Listen to the word and select the correct sound.</span>
					<div @click="changesett">
						<img src="../../assets/image/advpause.png" class=" repeat">
					</div>
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
				<img class="animapng7" src="http://103.218.241.33/mtgameweb/assets/img/advanced3.gif">


			</div>
		</div>
		<transition name="fades">
			<div class="about" v-if="resume3">
				<div class="twomenu">
					<div>
						<img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show"  @click="sound"/>
						<img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show"  @click="sound"/>
					</div>
					<div style="margin-top: 5px;">
						<img src="../../assets/image/resume.png" style="width: 30%; height: 10%;" @click="changesett">
					</div>
					<!-- <div style="margin-top: 5px;" >
						<div><img src="../../assets/image/home.png" style="width: 30%; height: 10%;" @click="gomemu"></div>
					</div> -->
				</div>
			</div>
		</transition>
	</div>
</template>

<script>

	var qs = require('qs');
	export default {
		name: "advanced3",
		data() {
			return {
			  showNum: false,
				popp: false,
				spanp:'',
				ruleimg8:false,
				ruleimg10:false,
				ruleimg4:false,
				ruleimg15:false,
				ruleimg25:false,
				ruleimg12:false,
				countpage:1,
        shownumb:false,
        duration:0,
				fisrtanswer:false,
				question: 1,
				zhezhao:true,
				list1: [
				],
        truesound:'',
				onef: true,
				fade: 'fade',
				levels: 0,
				flag2: true,
        video:false,
				soundsWrong:false,
				soundscorrect:false,
				show: true,
				resume3: false,
				id: '',
				page: this.page++,
				account: 0,
				unitsId:'',
				allquestion:10,
				unit:'',
				menuId:'',
				listG: [],
				type: 'advanced',
				sum: 0,
				score:"",
				issuccess: true,
				issuccess2:false,
				issuccess1:false,
				canvasObj: null,
				canvasH: null,
				context: {},
				pic: "",
				questionsize:0,
				url:'/phonics3/phonics',
        		canvasMoveUse: true,
        		centerP: [], // 存储数组图片中心点的位置
		        // 配置参数
				config: {
					lineWidth: 3,
					lineColor: "#44ccc2",
					shadowBlur: 1
				},
         gamename:'',
         timeurl:'/user/playTime',
			}
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
              num:24
					})).then(res => {
						for (let i in res.data.maps) {
						    this.listG.push(res.data.maps[i]); //属性
						}
          for(let i = 0,len = this.listG.length; i < len; i++){
            let currentRandom = parseInt(Math.random() * (len - 1));
            let current = this.listG[i];
            this.listG[i] = this.listG[currentRandom];
            this.listG[currentRandom] = current;
          }
            this.allquestion=this.listG.length;
						this.list1 =this.listG[this.countpage-1];
						this.truesound=this.pic+this.list1[0].audio;
            this.shownumb=true;
            // for(var i=0;i<this.list1.length;i++){
            //   this.list1[i].bg=this.pic+this.list1[i].bg
            // }
          if(this.onef === true) {
            this.showNum = true;
            setTimeout(() => {
              this.onef = false;
              this.zhezhao=false;
            }, 1000);
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

		destroyed() {
		document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
     window.removeEventListener('popstate',this.gomemu,false);
		},
		methods: {

      getDuration() {
        console.log(this.$refs.videos.duration); //此时可以获取到duration
        this.duration = this.$refs.videos.duration;
        this.video=true;
      },
			bodyScroll(event) {
			event.preventDefault();
			},

			canvasMove(e) {
				//console.log(e);
				if(this.canvasMoveUse) {
					// 只有允许移动时调用
					const t = e.target;
					let canvasX;
					let canvasY;
					// 由于手机端和pc端获取页面坐标方式不同，所以需要做出判断
					if(this.isPc()) {
						canvasX = e.clientX - t.parentNode.offsetLeft;
						canvasY = e.clientY - t.parentNode.offsetTop;
					} else {
						canvasX = e.changedTouches[0].clientX - t.parentNode.offsetLeft;
						canvasY = e.changedTouches[0].clientY - t.parentNode.offsetTop;
					};
					// 连接到移动的位置并上色
					this.context.lineTo(canvasX, canvasY);
					this.context.stroke();
				}
			},
      answer1(li){
        this.zhezhao=true;
        if(li.score=='1'){
          this.soundscorrect=true;
          this.countpage += 1;
          this.account += 1;
          li.showstart=1;
          setTimeout(() => {
            this.soundscorrect=false;
          },2000);
          if(this.countpage<=this.listG.length){
            setTimeout(() => {
            li.showstart=0;
            this.onef = true;
            },2000);
          }else{
            setTimeout(() => {
              li.showstart=0;
              this.zhezhao=false;
              this.$router.push({
                //核心语句
                path: "/presult", //跳转的路径
                query: {
                  //路由传参时push和query搭配使用 ，作用时传递参数
                  type:this.type,
                  partName:'advanced3',
                  account:this.account,
                  menuId: this.menuId,
                  unitsId:this.unitsId,
                  unit:this.unit
                }
              });

            }, 2000);
          }
        }else {
          this.soundsWrong=true;
          this.countpage += 1;
          setTimeout(() => {
            this.soundsWrong=false;
          },2000);
          if(this.countpage<=this.listG.length){
            setTimeout(() => {
            this.onef = true;
            },2000);
          }else{
            setTimeout(() => {
              this.zhezhao=false;
              this.$router.push({
                //核心语句
                path: "/presult", //跳转的路径
                query: {
                  type:this.type,
                  partName:'advanced3',
                  account:this.account,
                  menuId: this.menuId,
                  unitsId:this.unitsId,
                  unit:this.unit
                }
              });

            },2000);
          }
        }
      },
			// canvas中鼠标放开
			canvasUp(e) {

				this.context.closePath();
				let isSelect = false; // 用于判断是否选中了选项
				let anwserIndex;
				let successIndex;
				let anwserList = []; // 用于判断答题时圈中了几个选项
				let imgsty = document.getElementsByClassName('imgsty');

				this.centerP.forEach((item, index) => {
					if (this.context.isPointInPath(item.corePx, item.corePy)) { // 获取答题选项下标
						anwserIndex = index;
					};
					if (this.list1[index].score==1) { // 获取正确选项下标
						successIndex = index;
					};
					if (this.context.isPointInPath(item.corePx, item.corePy)) {
						isSelect = true;
						anwserList.push(item);
					};
				});
        //  const canvas = document.getElementById('canvas');
        // this.convertCanvasToImage(canvas);
				if (!isSelect) { // 没有选中
					this.canvasObj.height = this.canvasH;
					this.setCanvasStyle();
				} else {
					if (anwserList.length === 1) { // 答题时只有圈中一个选项才能进行判断
					     this.zhezhao=true;
						// console.log(anwserIndex);
						if (this.list1[anwserIndex].score==1) {
							/*回答正确在这里写效果*/
							this.soundscorrect=true;
							setTimeout(() => {
								this.soundscorrect=false;
							},2000);
							setTimeout(() => {
								this.canvasObj.height = this.canvasH; // 清空画布
								// this.issuccess1=true;
								this.score="1";
								this.countpage += 1;
								// if(this.fisrtanswer==false){
									this.account += 1;
								// }
								this.context.beginPath(); // 重新绘制一个圆
								this.context.lineWidth = 6;
								this.context.shadowBlur = 1;
								this.context.shadowColor = "#007BB8";
								this.context.strokeStyle = "#007BB8";
								this.context.arc(this.centerP[anwserIndex].corePx, this.centerP[anwserIndex].corePy, this.canvasH/5, 0,2*Math.PI);
								this.context.stroke();
								this.canvasObj.style.transition = "all 0.4s";
								imgsty[successIndex].style.transition = "all 0.6s";
								setTimeout(() => {
									this.canvasObj.style.opacity = 0;
									setTimeout(() => {
										imgsty[successIndex].classList.add("sacle1_2");
										setTimeout(() => {
											imgsty[successIndex].children[0].style.display = "block";
											setTimeout(() => {
												if(this.countpage<=this.listG.length){
												this.onef = true;
												}else{

															setTimeout(() => {
																 this.zhezhao=false;
                                 // this.gomemu();
																this.$router.push({
																	//核心语句
																	path: "/presult", //跳转的路径
																	query: {
																		//路由传参时push和query搭配使用 ，作用时传递参数
																		type:this.type,
																		partName:'advanced3',
																		account:this.account,
																		menuId: this.menuId,
																		unitsId:this.unitsId,
																		unit:this.unit
																	}
																});

															}, 1000);
												}
												imgsty[successIndex].classList.remove("sacle1_2");
												imgsty[successIndex].children[0].style.display = "none";
												/*答题完成后重新清空置画布*/
									      		this.canvasObj.height = this.canvasH; // 动态赋值canvas的高度
									      		this.setCanvasStyle();
												this.canvasObj.style.opacity = 1;
											}, 2000);
										}, 800);
									}, 800);
								}, 400);
							}, 500);
						} else {
							/*回答错误在这里写效果*/
							this.soundsWrong=true;
							// this.fisrtanswer=true;this.issuccess2=true;
							setTimeout(() => {
								this.soundsWrong=false;
							},2000);
							setTimeout(() => {
								this.canvasObj.height = this.canvasH; // 清空画布
								this.score="0";
								this.countpage += 1;
								this.context.beginPath(); // 重新绘制一个圆
								this.context.lineWidth = 6;
								this.context.shadowBlur = 1;
								this.context.shadowColor = "#cc6453";
								this.context.strokeStyle = "#cc6453";
								this.context.arc(this.centerP[anwserIndex].corePx, this.centerP[anwserIndex].corePy, this.canvasH/5, 0, 2*Math.PI);
								this.context.stroke();
                if (this.countpage>this.listG.length) {
                	setTimeout(() => {
                    // this.gomemu();
                		this.$router.push({
                			//核心语句
                			path: "/presult", //跳转的路径
                			query: {
                				//路由传参时push和query搭配使用 ，作用时传递参数
                				// id: this.id,
                				// account: this.account,
                				// type: this.type,
                				// sum:this.sum,
                				type:this.type,
                				partName:'advanced3',
                				account:this.account,
                				menuId: this.menuId,
                				unitsId:this.unitsId,
                				unit:this.unit
                			}
                		});

                	},2000);
                } else {
                	setTimeout(() => {
                    // imgsty[successIndex].classList.remove("sacle1_2");
                    // imgsty[successIndex].children[0].style.display = "none";
                    /*答题完成后重新清空置画布*/
                    		this.canvasObj.height = this.canvasH; // 动态赋值canvas的高度
                    		this.setCanvasStyle();
                    this.canvasObj.style.opacity = 1;
                	this.onef = true;
                	}, 2000);
                }
// 								setTimeout(() => {
// 									// this.canvasObj.style.transition = "all 0.4s";
// 									// this.canvasObj.style.opacity = 0;
//
// 									const canvas = document.getElementById('canvas'); // 初次进来初始化画布
// 									let imgBox = document.getElementById('imgBox');
// 									this.canvasObj = canvas;
// 									this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
// 									canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
// 									canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
// 									this.context = canvas.getContext('2d');
// 									this.setCanvasStyle();
//
//
// 								}, 800);
							}, 500);
						}
					} else {
						this.canvasObj.height = this.canvasH;
						this.setCanvasStyle();
					}
				}
				this.canvasMoveUse = false;
			},

			// 设置绘画配置
			setCanvasStyle() {
				this.context.lineWidth = this.config.lineWidth;
				this.context.shadowBlur = this.config.shadowBlur;
				this.context.shadowColor = this.config.lineColor;
				this.context.strokeStyle = this.config.lineColor;
			},

			changesett() {
					if(this.onef==false){
				setTimeout(() => {
				   this.resume3 = !this.resume3;
				if (!this.resume3) {
					setTimeout(() => {
						const canvas = document.getElementById('canvas'); // 初次进来初始化画布
						let imgBox = document.getElementById('imgBox');
						this.canvasObj = canvas;
						this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
						canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
			      		canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
			      		this.context = canvas.getContext('2d');
						this.setCanvasStyle();
					}, 2100);
				}
				}, 1000);
				}
			},
			pop(){
				 this.popp = !this.popp;
			},
			help(){
				if(this.onef==false){
					this.spanp="Listen to the word and circle the correct letter.";
				this.popp = !this.popp;
				if( this.list1[0].rank==0){
					this.ruleimg8=true;this.ruleimg10=false;
				}else if( this.list1[0].rank==1){
					this.ruleimg8=false;this.ruleimg10=true;
				}
				}
			},
			gomemu(){
				var audio = document.getElementById('music');
				if(localStorage.getItem('audiomusic')=="false"){

				}else{
					audio.play();
				}
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
				path: '/advmenu', //跳转的路径
				query: {
					unitsId: this.unitsId,
					unit:this.unit
				}
			})
			},
      listen() {
      	if(this.onef == false){
      		this.video=true;
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
			}
		},
		watch: {
			'onef': function(newVal) {
				if(this.onef == true) {
								setTimeout(() => {
								this.onef = false;
								this.zhezhao=false;

								this.list1 =this.listG[this.countpage-1];
                this.truesound=this.pic+this.list1[0].audio;
                // for(var i=0;i<this.list1.length;i++){
                //   this.list1[i].bg=this.pic+this.list1[i].bg;
                // }
                // this.video=true;
							   }, 2000);

        }
			},
      'video': function(newVal) {
        // console.log(this.video);
        if (this.video == true) {
          this.$refs.videos.play();
          setTimeout(() => {
            this.$refs.videos.pause();
            this.video =false;
          }, this.duration*1000);
        }
      },

    }
	};
</script>

<style scoped lang="less">
	*{
		margin: 0;
		box-sizing: border-box;
	}
	.body {
		padding: 0;
	}

	.advanced3 {
		width: 100%;
		height: 100%;
    /*background-image: url("http://107.150.121.34/monkeytownHK/image/img/phonicsbg.png");*/
    /*background-color: #204900;*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
		position: absolute;
		display: flex;
	}

	.about {
		display: flex;
		margin: 0px;
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
		background-color: #44ccc2;
		z-index: 201;
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

	.start {
		position: absolute;
		transform: scale(1.2);
		margin-left: -37%;
		display: inline-block;
		margin-top: -6%;
	}

	.winword {
		background-color: #44ccc2;
		width: 30%;
		height: 3rem;
		font-family: pepper;
		font-size: 2rem;
		line-height: 2.5rem;
		color: white;
		overflow: hidden;
		text-align: center;
		padding: 3px 5px;
		border-radius: 50px;
		position: relative;
		top: 2rem;
		margin: 0 auto;
		position: relative;
		z-index: 2;
	}

	.windows {
		width: 65%;
		height: 100%;
    display: inline-block;
		-ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-align: center;
        position: relative;
	}
	.changeblue{
		background-color: #007BB8 !important;
	}
	.changered{
		background-color: #DB7365 !important;
	}
  .repeatsound{
    width: 10%;
    bottom: 50%;
    right: 25%;
    z-index: 2;
    position: absolute;
  }
  .rightbird{
    width: 40%;
    bottom: -5%;
    right: 0;
    position: absolute;
  }
	.resize{
		font-size: 1.5rem;
		line-height: 2.5rem;
	}
	.imgbox {
		width: 100%;
		height: 100%;
		float: left;
		display: flex;
		align-items: center;
	}

	.imgsty1 {
		position: relative;
		width: 50%;
		height: 100%;
    left: 3%;
    top: 15%;
		text-align: center;
		display: inline-block;
    background-image: url('../../assets/image/shu1.png');
    -ms-flex-line-pack: center;
        align-content: center;
        background-size: cover;
        -webkit-box-align: center;
        background-repeat: no-repeat;
        background-position: top;
        img{
        	    width: 100%;
        	    margin-top: 6%;
        	    position: relative;
        	    left: 0;

        }
	}

  .imgsty2 {
  	position: relative;
  	width: 50%;
  	height: 100%;
    left: -7%;
    top: 2%;
  	text-align: center;
  	display: inline-block;
    background-image: url('../../assets/image/shu2.png');
    -ms-flex-line-pack: center;
        align-content: center;
        background-size: cover;
        -webkit-box-align: center;
        background-repeat: no-repeat;
        background-position: top;
        img{
        	    width: 100%;
        	    margin-top: 6%;
        	    position: relative;
        	    left: 0;
        }
  }
  .imgsty{
    width: 50%;
    height: auto;
    left: 0;
    background: none;
    border: none;
    top: 35%;
    position: absolute;
    margin: 0 25%;
  }
  .fontstyle{
    font-size: 2rem;
    color: white;
    font-family: 'pepper';
  }
	.answerSucc{
		position: absolute !important;
    z-index: 2;
		transform: translateY(-50%);
		width: 100%;

	}



	.opciay {
		opacity: 0.5;
	}

	.showbgs1 {
		left: 56px;
	}

	.sacle {
		border: 0.5rem solid #007BB8 !important;
		box-shadow: 0.3rem 0.3rem 0.1rem #085D77 !important;
		transform: scale(1.1);
	}

	.sacle1_2 {
		transform: scale(1.2);
		-ms-transform:scale(1.2);     /* IE 9 */
    	-moz-transform:scale(1.2);     /* Firefox */
    	-webkit-transform:scale(1.2); /* Safari 和 Chrome */
    	-o-transform:scale(1.2);
	}

	.listimg img {
		cursor: pointer;
	}

	.listimg:focus {
		transform: scale(1.2);
	}

	.listimg:active {
		transform: scale(1.2);
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
		z-index:102;
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
	.spanp{
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
	.spanp1{
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
			margin-top:5%
	}

	.roleimg {
		position: absolute;
		    height: 68%;
		    top: 15%;
		    left: 5%;
		    border: none;
		    background: none;
	}

	.fontsizes {
		font-family: kg;
		font-weight: bolder;
		color:  #935D24;
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
		//opacity: 0;
		transform: translate3d(0, 100%, 0);
	}

	.fades-leave-to {
		//opacity: 0;
		transform: translate3d(0, -100%, 0);
	}

	.answer {
		animation: myPlay 0.5s infinite alternate;
		animation-timing-function: linear;
		animation-iteration-count: 2;

		-webkit-animation: myPlay 0.5s infinite alternate;
		-webkit-animation-timing-function: linear;
		-webkit-animation-iteration-count: 2;

		-moz-animation: myPlay 0.5s infinite alternate;
		-moz-animation-timing-function: linear;
		-moz-animation-iteration-count: 2;
		-o-animation: myPlay 0.5s infinite alternate;
		-o-animation-timing-function: linear;
		-o-animation-iteration-count: 2;
	}

	@keyframes myPlay {
		0% {
			position: relative;
			left: 0px;
		}
		50% {
			position: relative;
			left: 20px;
		}
		100% {
			position: relative;
			left: 0px;
		}
	}

	@-webkit-keyframes myPlay {
		0% {
			position: relative;
			left: 0px;
		}
		50% {
			position: relative;
			left: 20px;
		}
		100% {
			position: relative;
			left: 0px;
		}
	}

	@-moz-keyframes myPlay {
		0% {
			left: 0px;
		}
		50% {
			left: 20px;
		}
		100% {
			left: 0px;
		}
	}

	@media screen and (max-width: 481px) {
		.showbgs1 {
			margin-left: -40px;
		}
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
	}

	@media screen and (min-width: 1024px) and (max-width: 1354px)  {
		.start {
			transform: scale(2);
			margin-left: -22%;
			display: inline-block;
			margin-top: 6%;
		}
		.showbgs1 {
			margin-left: 40px;
		}
		.fontsizes {
			margin-top: 30%;
		}
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
		.winword {
			top: 6rem;
		}
    .windows{
      height: 75%;bottom: 0%;position: absolute;
    }

		.sacle {
			border: 0.8rem solid #007BB8 !important;
			box-shadow: 0.6rem 0.6rem 0.1rem #085D77 !important;
			transform: scale(1.1);
		}
		.spanp{
			top:22%;
			font-size:1.5rem;
		}
		.spanp1{
			font-size:1.3rem;
		}
    .rightbird{
      width: 45%;
      bottom: 0%;
      right: 0;
      height: 100%;
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
    .repeatsound{
      width: 10%;
      bottom: 40%;
      right: 23%;
      position: absolute;
    }
	}
	@media screen and (min-width: 1355px)and (max-width: 1600px){
		.start {
			transform: scale(2);
			margin-left: -22%;
			display: inline-block;
			margin-top: 6%;
		}
		.showbgs1 {
			margin-left: 40px;
		}
		.fontsizes {
			margin-top: 30%;
		}
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
		.winword {
			top: 19%;
		}


    .windows{
      height: 75%;bottom: 0%;position: absolute;
    }
    .fontstyle{
      font-size: 3rem;
    }
		.sacle {
			border: 0.8rem solid #007BB8 !important;
			box-shadow: 0.6rem 0.6rem 0.1rem #085D77 !important;
			transform: scale(1.1);
		}
    .rightbird{
      width: 45%;
      bottom: 0%;
      right: 0;
      height: 100%;
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
    .repeatsound{
      width: 10%;
      bottom: 40%;
      right: 23%;
      position: absolute;
    }
	}
	@media screen and (min-width: 700px) and (max-width: 811px) {
		.fontsizes {
			margin-top: 17%;
		}
		.twomenu {
			padding-top: 18%;
		}
	}
	@media screen and (min-width: 812px) and (max-width:1023px) {
		.showbgs1 {
			margin-left: -17px;
		}
		.twomenu {
			padding-top: 14%;
		}
		.fontsizes {
			margin-top: 17%;
		}
		.withcolor {
			height: 70%;
		}
    .imgsty{
      top: 43%;
    }

	}
  @media screen and (min-width: 1600px){
    .start {
      transform: scale(2);
      margin-left: -22%;
      display: inline-block;
      margin-top: 6%;
    }
    .showbgs1 {
      margin-left: 40px;
    }
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
      font-size: 2rem;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }
    .winword {
      top: 19%;
    }
    .windows{
      /*height: 85%;*/
    }

    .imgsty{
      top: 43%;
    }
    .fontstyle{
      font-size: 5rem;
    }
    .sacle {
      border: 0.8rem solid #007BB8 !important;
      box-shadow: 0.6rem 0.6rem 0.1rem #085D77 !important;
      transform: scale(1.1);
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
    .repeatsound{
      width: 10%;
      bottom: 65%;
      right: 23%;
      position: absolute;
    }
  }
</style>
