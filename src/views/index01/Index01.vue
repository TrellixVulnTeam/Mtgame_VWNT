<template>
	<div class="index">
		<!-- <transition name="fades"> -->
		<div class="container">
			<!-- yun -->
			<div class="itemWarp">
				<div class="item home">
					<img src="../../assets/image/home_yun.png" class="yun" style="z-index: 1;pointer-events: none"/>
				</div>
			</div>
			<!-- five picture -->
			<div class='imgWrap'>
				<img src="../../assets/image/s.png" class="imgCircular"/>
				<!-- roate-icon -->

			</div>
		<div class="itemWarp2" style="pointer-events: painted;z-index: 9;">
					<div class="item2 game active"  >
						<a class="monkey" @click="$tips(true);jumpexercise()" style="pointer-events: painted">
							<img src="../../assets/image/gameicon.png"  style="z-index: 100;"/>
						</a>
					</div>
					<div class="item2 exercise" >
						<a  class="monkey" @click="jumpgame()" style="pointer-events: painted">
							<img src="../../assets/image/exercise2.png" style="z-index: 100;"/>
						</a>
					</div>
					<div class="item2 courses" >
						<a  class="monkey" @click="jumpwatch" style="pointer-events: painted">
						<img src="../../assets/image/watchicon.png"  style="z-index: 100;"/>
						</a>
					</div>
					<div class="item2 watch">
						<a  class="monkey" @click="jumpbooks" style="pointer-events: painted">
							<img src="../../assets/image/books2.png"  style="z-index: 100;"/>
              <!--<img src="../../assets/image/books.png" style="z-index: 100;"/>-->
						</a>
					</div>
					<div class="item2 books" >
						<a  class="monkey book0001"  @click="jumpcourses" style="pointer-events: painted">
							<!-- 关闭主页course点击入口 -->
							<!-- <img src="../../assets/image/courses1.png"  @click="jumpcourses" style="z-index: 100;"/> -->
							<img src="../../assets/image/courses.png"   style="z-index: 100;"/>
						</a>
					</div>

    </div>
      <!--<div class="roate-icon">-->
        <!--<div class="roate-icon-img">-->
          <a style="position: absolute;left: 5%;top: 55%;width: 6%;z-index: 10" @click="$tips(true);roateleft()">
            <img src="../../assets/image/left-icon01_03.png" style="width: 100%"></a>
          <a style="position: absolute;right: 5%;top: 55%;width: 6%;z-index: 10" @click="$tips(true);roateright()">
            <img src="../../assets/image/right-icon01_03.png" style="width: 100%"></a>
        <!--</div>-->
      <!--</div>-->
			<!-- setting -->
			<div class="settinglist" style="z-index: 201;">
				<img src="../../assets/image/walker_bar.png" style="width: 100%;bottom: 0;height: 100%;">
			<!-- 	<img src="../../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
				<div>
					<img :src=gameImage class="acstyle" @click="$tips(true);goinfo()"/>
					<span class="fontsize1 leftmar" >{{firstName}}</span>
				</div>
				<div>
					<img src="../../assets/image/icon_coin.png" class="coinstyle">
					<span class="fontsize1 leftmar2">{{sum}}</span>
				</div>
				<div  @click="routerabout">
				<!-- 	<img src="../../assets/image/Icon_setting.png" class="setting" v-show="action"> -->
					<!-- <img src="../../assets/image/blue_setting.png" class="setting" v-if="levels" v-show="action"> -->
					<img src="../../assets/image/Icon_setting0.png" class="repeat">
					<!-- <img src="../../assets/image/blue_setting0.png" class="setting" v-if="levels" v-show="!action"> -->
				</div>
			</div>


		</div>
	   <!-- </transition> -->
	</div>
</template>

<script>
	var qs = require('qs');
	// import { realconsole } from '../../index01.js';
	export default {
	  name: 'index01',
	  props: {
	  	msg: String
	  },
	  data() {
	  	return {
	  		popp: false,
	  		sum:0,
	  		action:false,
	  		level:"VISITOR",
	  		levels:'',
	  		startcoin:0,
	  		startcoins:0,
	  		ruleimg:true,
	  		ruleimg1:false,
	  		ruleimg2:false,
	  		boss:true,
	  		boss1:false,
	  		boss2:false,
	  		game:'',
			firstName:'',
			gameImage:'',
			studentId:'',
        //star:require('../../assets/img/Little_Star_frame.png'),
	  		star:'http://monkeytown.monkeytree.com.hk/image/Little_Star_frame.png',
	  		lightstar:'http://monkeytown.monkeytree.com.hk/image/star_frame.png',
	  		_deg1:0,
			deg : 0,
			pageNow : 1,
			translate:0,
			//_height:any,
	  		// id: "a",
	  		// page: 1,
	  	}
	  },
	  methods: {
		  goinfo(){
		  	this.$router.push({ //核心语句
		  			path: '/info', //跳转的路径
		  	})
		  },
	      jumpgame(){
			  // this.$router.push({
			  // 	path: '/otherstart',
			  // })
			//window.location.href="http://monkeytown.monkeytree.com.hk/Game-flow/angry-monkey/index.html";
	      },
		  jumpexercise(){
		    this.$router.push({
		 	    path: '/chosegame',
          query: {
		 		  style:"game"
		 	}
		 })
		 // this.resume = !this.resume;
		  },
		  jumpcourses(){
		  	this.$router.push({
				path: '/courses',
			    query: {
			    	style:"courses"
			    }
			})
		  },
		  jumpwatch(){},
		  jumpbooks(){

        this.$router.push({
        	path: '/booksort',

        })
      },
		  routerabout(){
		  	this.action=true;
		  	setTimeout(() => {
		  		this.action=false;
		  	this.$router.push({
		  		//核心语句
		  		path: "/about", //跳转的路径
		  		// query: {
		  		// 	//路由传参时push和query搭配使用 ，作用时传递参数
		  		// 	id: this.id,
		  		// 	account: this.account,
		  		// 	type: this.type,
		  		// 	sum: this.sum,
		  		// }
		  	});
		  	}, 1000);
		  },
		  // click arrow roate
		  roateright(){
			var _height;
			 var direction = 'right';
			this.translate = direction === 'left' ? this.deg = this.deg - 72 : this.deg = this.deg + 72;
			this.translate = direction === 'left' ? this.pageNow = this.pageNow + 1 : this.pageNow = this.pageNow - 1;
			this.pageNow > 5 ? this.pageNow = 1 : this.pageNow;
			this.pageNow < 1 ? this.pageNow = 5 : this.pageNow;
			document.getElementsByClassName("imgCircular")[0].style.cssText = "transform: rotate(" + this.deg + "deg)";
			//document.getElementsByClassName("itemWarp")[0].style.cssText = "transform: rotate(" + this.deg + "deg)";
			document.getElementsByClassName("itemWarp2")[0].style.cssText = "transform: rotate(" + this.deg + "deg);height:"+_height+"px";
			setTimeout(function () {
			    // DOM操作需要放到异步队列中，否则会出现卡顿
			    for(var i=0; i<document.getElementsByClassName("item2").length; i++){
			    	//document.getElementsByClassName("item")[i].classList.remove("active");
			    	document.getElementsByClassName("item2")[i].classList.remove("active");
			    }
				// console.log(pageNow);
			    //document.getElementsByClassName("item")[this.pageNow-1].classList.add("active");
			    document.getElementsByClassName("item2")[this.pageNow-1].classList.add("active");
			    // switch (this.pageNow-1) {
				   //  case 0:
				   //      document.getElementsByClassName("container")[0].style.cssText="background: linear-gradient(to bottom, #2BA7E0 , #48C0F0);";
				   //      break;
				   //  case 1:
				   //      document.getElementsByClassName("container")[0].style.cssText="background: linear-gradient(to bottom, #2BA7E0 , #48C0F0);";
				   //      break;
				   //  case 2:
				   //      document.getElementsByClassName("container")[0].style.cssText="background: linear-gradient(to bottom, #2BA7E0 , #48C0F0);";
				   //      break;
				    // case 3:
				    //     document.getElementsByClassName("container")[0].style.cssText="background: linear-gradient(to bottom, #1D428E , #2BA7E0);";
				    //     break;
				//}
			}.bind(this), 100);
		  },
		  roateleft(){
			        var _height;
						 var direction = 'left';
						this.translate = direction === 'left' ? this.deg = this.deg - 72 : this.deg = this.deg + 72;
						this.translate = direction === 'left' ? this.pageNow = this.pageNow + 1 : this.pageNow = this.pageNow - 1;
						this.pageNow > 5 ? this.pageNow = 1 : this.pageNow;
						this.pageNow < 1 ? this.pageNow = 5 : this.pageNow;
						document.getElementsByClassName("imgCircular")[0].style.cssText = "transform: rotate(" + this.deg + "deg)";
						//document.getElementsByClassName("itemWarp")[0].style.cssText = "transform: rotate(" + this.deg + "deg)";
						document.getElementsByClassName("itemWarp2")[0].style.cssText = "transform: rotate(" + this.deg + "deg);height:"+_height+"px";
						setTimeout(function () {
						    // DOM操作需要放到异步队列中，否则会出现卡顿
						    for(var i=0; i<document.getElementsByClassName("item2").length; i++){
						    	//document.getElementsByClassName("item")[i].classList.remove("active");
						    	document.getElementsByClassName("item2")[i].classList.remove("active");
						    }
							// console.log(pageNow);
						    //document.getElementsByClassName("item")[this.pageNow-1].classList.add("active");
						    document.getElementsByClassName("item2")[this.pageNow-1].classList.add("active");
						}.bind(this), 100);
			},
			//手滑动转屏
			// index01doing(){
						 // 当前页码
						//var itemWrapHeight = document.getElementsByClassName("imgCircular")[0].clientHeight;
						//console.log(itemWrapHeight);

						TouchEvent(){
							var _height;
							var pageWidth = window.innerWidth; // 页面宽度
							var startX, startY;
							var initialPos = 0;  // 手指按下的屏幕位置
						   	var moveLength = 0;  // 手指当前滑动的距离
						   	var direction = 'left'; // 滑动的方向
						   	var isMove = false; // 是否发生左右滑动
						   	var startT = 0; // 记录手指按下去的时间
						  	var isTouchEnd = true; // 标记当前滑动是否结束(手指已离开屏幕)

							/*手指放在屏幕上*/
							document.addEventListener("touchstart", function(e){
								// 单手指触摸或者多手指同时触摸，禁止第二个手指延迟操作事件
						       	if (e.touches.length === 1 || isTouchEnd) {
						       		var _touch = e.touches[0]; // 获取坐标
						       		startX = _touch.pageX;

						           	startT = + new Date(); // 记录手指按下的开始时间
						           	isMove = false; // 是否产生滑动
						           	isTouchEnd = false; // 当前滑动开始
						       	}
							});

							/*手指在屏幕上滑动，页面跟随手指移动*/
							document.addEventListener("touchmove", function(e){
								// 如果当前滑动已结束，不管其他手指是否在屏幕上都禁止该事件
						       	if (isTouchEnd) return;

								var _touch = e.touches[0]; // 获取坐标
							    var deltaX = _touch.pageX - startX; // 手指滑动的长度
							    var _deg = deg + (deltaX/6); // 当前需要移动到的位置
							    document.getElementsByClassName("imgCircular")[0].style.cssText = "transform: rotate(" + _deg + "deg)";
							    document.getElementsByClassName("itemWarp")[0].style.cssText = "transform: rotate(" + _deg + "deg)";
							    document.getElementsByClassName("itemWarp2")[0].style.cssText = "transform: rotate(" + _deg + "deg); height:"+_height+"px";
						       	isMove = true;
						       	moveLength = deltaX;
						       	direction = deltaX > 0 ? 'right' : 'left'; // 判断手指滑动的方向
							});

							document.addEventListener("touchend", function(e){
									           	// console.log(_height);

								var translate = 0;
								var deltaT = + new Date() - startT; // 计算手指在屏幕上停留的时间
								// 发生了滑动，并且当前滑动事件未结束
						   		if (isMove && !isTouchEnd) {
						            isTouchEnd = true; // 标记当前完整的滑动事件已经结束

						            if (deltaT < 300) { // 如果停留时间小于300ms,则认为是快速滑动，无论滑动距离是多少，都停留到下一页
						              	translate = direction === 'left' ? deg = deg - 120 : deg = deg + 120;
						              	translate = direction === 'left' ? pageNow = pageNow + 1 : pageNow = pageNow - 1;
						              	pageNow > 3 ? pageNow = 1 : pageNow;
						          		pageNow < 1 ? pageNow = 3 : pageNow;
						              	document.getElementsByClassName("imgCircular")[0].style.cssText = "transform: rotate(" + deg + "deg)";
						              	document.getElementsByClassName("itemWarp")[0].style.cssText = "transform: rotate(" + deg + "deg)";
						              	document.getElementsByClassName("itemWarp2")[0].style.cssText = "transform: rotate(" + deg + "deg);height:"+_height+"px";
						            } else {
						                // 如果滑动距离小于屏幕的50%，则退回到上一页
						                if (Math.abs(moveLength) / pageWidth < 0.5) {
						                	document.getElementsByClassName("imgCircular")[0].style.cssText = "transform: rotate(" + deg + "deg)";
						                    document.getElementsByClassName("itemWarp")[0].style.cssText = "transform: rotate(" + deg + "deg)";
						                    document.getElementsByClassName("itemWarp2")[0].style.cssText = "transform: rotate(" + deg + "deg);height:"+_height+"px";
						                } else {
						                    // 如果滑动距离大于屏幕的50%，则滑动到下一页
						                  	translate = direction === 'left' ? deg = deg - 120 : deg = deg + 120;
						                  	translate = direction === 'left' ? pageNow = pageNow + 1 : pageNow = pageNow - 1;
						                  	pageNow > 3 ? pageNow = 1 : pageNow;
						          			pageNow < 1 ? pageNow = 3 : pageNow;
						                  	document.getElementsByClassName("imgCircular")[0].style.cssText = "transform: rotate(" + deg + "deg)";
						                  	document.getElementsByClassName("itemWarp")[0].style.cssText = "transform: rotate(" + deg + "deg)";
						                  	document.getElementsByClassName("itemWarp2")[0].style.cssText = "transform: rotate(" + deg + "deg);height:"+_height+"px";
						                }
						            }

						            // 计算当前的页码
						            setTimeout(function () {
						                // DOM操作需要放到异步队列中，否则会出现卡顿
						                for(var i=0; i<document.getElementsByClassName("item").length; i++){
						                	document.getElementsByClassName("item")[i].classList.remove("active");
						                	document.getElementsByClassName("item2")[i].classList.remove("active");
						                }
										// console.log(pageNow);
						                document.getElementsByClassName("item")[pageNow-1].classList.add("active");
						                document.getElementsByClassName("item2")[pageNow-1].classList.add("active");
						                switch (pageNow-1) {
										    case 0:
										        document.getElementsByClassName("container")[0].style.cssText="background: linear-gradient(to bottom, #2BA7E0 , #48C0F0);";
										        break;
										    case 1:
										        document.getElementsByClassName("container")[0].style.cssText="background: linear-gradient(to bottom, #2BA7E0 , #48C0F0);";
										        break;
										    case 2:
										        document.getElementsByClassName("container")[0].style.cssText="background: linear-gradient(to bottom, #2BA7E0 , #48C0F0);";
										        break;
										    // case 3:
										    //     document.getElementsByClassName("container")[0].style.cssText="background: linear-gradient(to bottom, #1D428E , #2BA7E0);";
										    //     break;
										}
						            }.bind(this), 100);
						        }
							})
						},
            bodyScroll(event) {
            event.preventDefault();
            },
			// TouchEvent();

		  //},

	},
  destroyed() {
  document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
  },
	created() {
		this.firstName=localStorage.getItem('firstName');
		this.gameImage=localStorage.getItem('gameImage');
		this.sum=localStorage.getItem('sumCoins');
		this.studentId=localStorage.getItem('studentId');
    document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
		// this.$axios.post(this.url,qs.stringify({
		// userId:localStorage.getItem('studentId')
		// })).then(res=>{
		// 	// if(res.data.nologin!=''&&res.data.nologin!=="false"){
		//  //       this.sum=res.data.sumscore["sum(score)"];
		// 	// }
		//  }, res => {
		// 	       console.info('false');
	 //    })
		//this.index01doing()	;
	},

	}
</script>


<style scoped lang="less">
	@import '../../common/index.css';
	.start01 .container .back a{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	    height: 100%;
		background-image: url(../../assets/image/back-05.png), url(../../assets/image/back-01.png);
		background-size: auto, 100% auto;
		background-repeat: repeat, no-repeat;
		background-position: center center;
	}
	.roate-icon{
		position: absolute;
		    top: 45%;
		    width: 90%;
		    text-align: center;
		    margin: auto;
		    left: 50%;
		    transform: translateX(-50%);
		    z-index: 999;
	}
	.roate-icon .roate-icon-img{
		display: flex;
		justify-content: space-between;
	}
	.roate-icon .roate-icon-img img{
		max-width: 55%;
		display: inline-block;
	}
	@media screen and (max-width: 991px){
		.roate-icon .roate-icon-img img{
			max-width: 35%;
		}
	}


	.acstyle {
		height: 70%;
		position: absolute;
		left: 5%;
		bottom: 9%;
		border-radius: 50px;
	}
	// .fonstart{
	// 	    top: -23%;
	// 	    left: 6%;
	// 	    color: white;
	// 	    position: relative;
	// 	    font-size: larger;
	// 	    font-family: kg;
	// }
	.coinstyle {
		height: 70%;
		position: absolute;
		left: 33%;
		bottom: 9%;
	}
	.fontsize1 {
			font-family: kg;
			color: white;
			bottom: 18%;
			max-width: 20%;
			text-align: left;
			overflow: hidden;
			position: absolute;
			font-size: x-large;
			max-height: 70%;
			min-height: 50%;
      white-space: nowrap;
			//margin-left: 2%;
		}

		.leftmar{
			left:13%
		}
		.leftmar2{
			left: 41%;
		}
		.setting {
			width: 12%;
			position: absolute;
			right: 8%;
			bottom: 0%;
			z-index: 999;
			cursor: pointer;
		}
		/* .fades-enter-active {
			transition: all 0.6s;
		}

		.fades-leave-active {
			transition: all 0.6s;
		}

		.fades-enter {
			//opacity: 0;
			//transform: translate3d(100%, 0, 0);
		}

		.fades-leave-to {
			//opacity: 0;
			//transform: translate3d(0, -100%, 0);
		} */

	@media screen and (max-width:481px) {

			.fontsize1 {
				bottom: 16%;
				position: absolute;
				font-size: 1.2rem;
				margin-left: 2%;
			}
			.withcolor{
				height:60%;
				top:18%;
			}
			.roleimg{
				margin-top: -23%;
			}

		}

		@media screen and (min-width: 482px) and (max-width: 569px) {
			.fontsize1 {
				bottom: 16%;
				position: absolute;
				font-size: 1.2rem;
				margin-left: 2%;
			}
			.roleimg{
				margin-top: -23%;
			}
		// 	.startspan{
		// 		    padding: 9%;
		// 		    font-size: large;
		// 	}
		//
		// 	.fonstart{
		// 		font-size: 1rem;
		// 	}
		}

		@media screen and (min-width: 1024px) and (max-width: 1354px) {
			// .imgposit {}

			.setting {
				width: 14%;
				position: absolute;
				right: 8%;
				bottom: 0%;
			}

			.listfirst {
				margin-left: -60px;
			}
			.acstyle {
				height: 70%;
				position: absolute;
				left: 5%;
				bottom: 9%;
			}

			.coinstyle {
				height: 70%;
				position: absolute;
				left: 35%;
				bottom: 9%;
			}

			.fontsize1 {
				bottom: 13%;
				position: absolute;
				font-size: 2.5rem;
				margin-left: 2%;
			}
			.leftmar2{
				left: 43%;
			}
			.withcolor{
				height:50%;
				top:20%;
				    border-radius: 75px;
			}
	// 		.close {
	// 			width: 70px;
	// 			height:70px;
	//
	// 		}
	// 		.startspan{
	// 			    padding: 12%;
	// 			    font-size: xx-large;
	// 		}
	// 		.close img {
	// 			height: 70px;
	// 			width: 70px;
	//
	// 		}
	//
	// 		.fonstart{
	// 			    top: -22%;
	// 			font-size: 2rem;
	// 		}
		}

		@media screen and (min-width: 812px) and (max-width:1023px) {
			.setting {
				width: 10%;
				position: absolute;
				right: 8%;
				bottom: 0%;
			}
			.roate-icon .roate-icon-img img{
				max-width: 35%;
			}
			// .startspan{
			// 	padding: 6%;
			// }
			.menulist {
				margin-top: 0%;
			}
			.withcolor{
				width: 50%;
			}
			.container .imgWrap img{
			    margin-bottom: -55%;
			}
			// .fonstart{
			// 	left: -5%;
			// }
		}

		@media screen and (min-width: 1355px)  and (max-width:1600px){
			.setting {
				width: 14%;
				position: absolute;
				right: 8%;
				bottom: 0%;
			}

			.listfirst {
				margin-left: -60px;
			}
			.acstyle {
				height: 70%;
				position: absolute;
				left: 5%;
				bottom: 9%;
			}

			.coinstyle {
				height: 70%;
				position: absolute;
				left: 35%;
				bottom: 9%;
			}

			.fontsize1 {
				bottom: 13%;
				position: absolute;
				font-size: 3rem;
				margin-left: 2%;
			}
			.leftmar2{
				left: 43%;
			}
			.withcolor{
				height:50%;
				top:20%;
				    border-radius: 75px;
			}

		}

  @media screen and (min-width: 1600px){
    .setting {
      width: 10%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }
    .roate-icon .roate-icon-img img{
      max-width:80%;
    }
    // .startspan{
    // 	padding: 6%;
    // }
    .menulist {
      margin-top: 0%;
    }
    .withcolor{
      width: 50%;
    }
    .container .imgWrap img{
      margin-bottom: -55%;
    }
    .fontsize1 {
      bottom: 13%;
      position: absolute;
      font-size: 3rem;
      margin-left: 2%;
    }
    .leftmar2{
      left: 43%;
    }


  }
</style>
