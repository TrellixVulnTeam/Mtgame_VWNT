<template>
	<div id="app" style=" padding: 0;margin: 0;">

    <div  v-if="zhezhao" style="width: 100%; height: 100%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
		<transition name="fade" v-if="loading01">
		  <div class="loading">
		    <div class="loading-picture">
				<img src="./assets/image/spash.png">
					<!-- <p style="text-align: center;font-size: 36px;color: #cccccc;font-family: kg;"><span id="s1"></span>%</p> -->
			</div>
		  </div>
		</transition>
		<!-- 首显示start -->
		<!-- <transition name="fade" v-if="already">
			<div class="start01">
				<div class="container">
					<div class="back">
						<a>
							<div class="rotate">
								<img src="./assets/image/s-earth.png" class="rotate-img" />
								<div class="plane"  @click="alreadylogin">
									<img src="./assets/image/splash-03.png" />
									<img src="./assets/image/wind.png" class="wind-img" />
								</div>
								<div class="m_town"  @click="alreadylogin">
									<img src="./assets/image/splash-02.png" />
								</div>
								<div class="m_btn_start">
									<img src="./assets/image/start-01.png" @click="alreadylogin" />
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</transition> -->
		<!-- 所有关卡页面 -->
		<!-- <transition name="fade"> -->
			<!-- <transition name="fade"> -->
			 <audio id="music" autoplay="autoplay" loop="loop"><source  v-if="!loading01" src="./assets/video/appmusic.mp3"></audio>
				<router-view></router-view>
			<!-- </transition>	 -->
	<!-- 	</transition> -->
	</div>
</template>

<script>
import $ from "jquery";
  var qs = require('qs');
  // import { createWorker } from 'tesseract.js';
  import * as MyScriptJS from 'myscript';
	export default {
		name: "App",
		watch: {
			username: function(newVal) {
				if (this.username === "") {
					this.warn = false;
				}
			},

		},
		data() {
			return {
				checkbox: true,
				closemusic:false,
				resume1: false,
				already: false,
        zhezhao:true,
				//musicclose:true,
				loading01:true,
				show: Boolean,
				picked: "pick",
				warn: false,
				username: "",
        url: '/user/',
        url1:'',
        url2:'',
				password: "",
				checked: true,
        i:0,
				// pic: "http://demo11.embraiz.com/mtGame",
				// url: "http://demo11.embraiz.com/mtGame/user/login",
				// pic: "http://demo11.embraiz.com/mtGameHK",
				// url: "http://demo11.embraiz.com/mtGameHK/user/login",
				//url: 'http://localhost:8080/mtGame/user/login',
				// userId:'',
			};
		},
		methods: {
		  numberpercent(){
			  	//this.closemusic=true;
			setTimeout(() => {
				this.loading01=false;
				 var audio = document.getElementById('music');
			      audio.pause();
			   this.$router.push({path: '/start'});
			},2000);
		  // 	var i = 0;
		   		// i = i + 20;
		   		//var o = $('#s1');//document.getElementById('s1');
		   		//o.html(i);//jq获取标签的值
		   	// 	if(i<100)
		   	// 	var bb=setInterval(()=>{
		   	// 		if(i>=80){
		   	// 			window.clearInterval(bb);
		   	// 			this.loading01 = !this.loading01;//跳转
						// this.$router.push({path: '/start'})
		   	// 		}
		   	// 		i = i + 20;
		   	// 		var o = $('#s1');//document.getElementById('s1');
		   	// 		o.html(i);
		   	// 	},500);
		},
      verifyCode(){
        // if (localStorage.getItem('userId') !== '' && localStorage.getItem('userId') !== undefined&& localStorage.getItem('userId') !== null
        //   &&localStorage.getItem('verifyCode')!=='' &&localStorage.getItem('verifyCode')!==undefined&&localStorage.getItem('verifyCode')!==null
        //   &&localStorage.getItem('studentId')!=='' &&localStorage.getItem('studentId')!==undefined &&localStorage.getItem('studentId')!==null) { //cookie值不为空，则进入index01主页面
        //   this.url2=this.url+"checkVerifyCode";
        //   this.$axios
        //     .post(this.url2,qs.stringify({
        //       verifyCode:localStorage.getItem('verifyCode'),
        //       studentId:localStorage.getItem('studentId'),
        //     })).then(
        //     res => {
        //       if(res.data.success==="false") {
        //         this.$router.push({path: '/login'});
        //         alertMsg5("Login exceeds maximum allowed users.");
        //       }
        //     },
        //     res => {
        //       // alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        //     });

        //   setTimeout(() => {
        //     this.verifyCode();
        //   }, 1000*60);
        // }
      },

		},
		created() {
      console.log(new Date());
			if (localStorage.getItem('checkbox') === true || localStorage.getItem('checkbox') === "true") {
				this.username = localStorage.getItem('username');
				this.password = localStorage.getItem('password');
			}
      this.url1=this.url+"version";
      this.$axios
      	.post(this.url1,qs.stringify({
      			version:localStorage.getItem('version'),
            // 等待发布版本是
            // 发布出去的版本是16,17,19,21
            // 测试版本20
      		})).then(
      		res => {
            if(res.data.success==="success"){
              this.zhezhao=false;
			        //localStorage.setItem('update',false);
            }else if(res.data.success==="false"){
              this.zhezhao=true;
              alertMsg2("Please update your app to new version to continue.");
              console.log(new Date());
			        //localStorage.setItem('update',true);
            }
      		},
      		res => {
      			alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      		}
      	);
			this.numberpercent();

//       document.addEventListener("pause", function(){
//       	//从前台切换到后台
//         var audio = document.getElementById('music');
//          var partmusic = document.getElementById('partmusic');
//         if(localStorage.getItem('audiomusic')=="false"){
//             audio.stop();alert("1");
//         }else{
//         	audio.stop();alert("1");
//         }
//         if(partmusic){
//           if(localStorage.getItem('gamemusic')=="false"){
//             partmusic.stop();alert("1");
//         }else{
//         	  partmusic.stop();alert("1");
//         }
//         }
//       }, false);
//       document.addEventListener("resume", function(){
//       			//从后台切换到前台
//             var audio = document.getElementById('music');
//              var partmusic = document.getElementById('partmusic');
//
//             if(partmusic){
//               if(localStorage.getItem('gamemusic')=="false"){
//                 partmusic.stop();alert("1");
//             }else{
//             	  partmusic.play();alert("1");
//             }
//             }else{
//                if(localStorage.getItem('audiomusic')=="false"){
//                 audio.stop();alert("1");
//             }else{
//             	audio.play();alert("1");
//             }
//             }
//
//       		}, false);
		},
    // mounted() {

//       document.addEventListener("pause", function(){
//       	//从前台切换到后台
//         var audio = document.getElementById('music');
//          var partmusic = document.getElementById('partmusic');
//         if(localStorage.getItem('audiomusic')=="false"){
//             audio.stop();alert("1");
//         }else{
//         	audio.stop();alert("1");
//         }
//         if(partmusic){
//           if(localStorage.getItem('gamemusic')=="false"){
//             partmusic.stop();alert("1");
//         }else{
//         	  partmusic.stop();alert("1");
//         }
//         }
//       }, false);
//       document.addEventListener("resume", function(){
//       			//从后台切换到前台
//             var audio = document.getElementById('music');
//              var partmusic = document.getElementById('partmusic');
//
//             if(partmusic){
//               if(localStorage.getItem('gamemusic')=="false"){
//                 partmusic.stop();alert("1");
//             }else{
//             	  partmusic.play();alert("1");
//             }
//             }else{
//                if(localStorage.getItem('audiomusic')=="false"){
//                 audio.stop();alert("1");
//             }else{
//             	audio.play();alert("1");
//             }
//             }
//
//       		}, false);


      // var myVideo=document.getElementById("music");
                // document.getElementById("music").addEventListener('play',function(){
                //          console.log("play");
                // });
                // document.getElementById("music").addEventListener('pause',function(){
                //       console.log("pause");
                // })

//         document.addEventListener("visibilitychange", (e) => {
//                           if (e.hidden) {  // 网页被挂起
//
//                           } else { // 网页被呼起
//                            alert("网页被呼气");
//                               var audio = document.getElementById('music');
//                                var partmusic = document.getElementById('partmusic');
//
//                               if(partmusic){
//                                 if(localStorage.getItem('gamemusic')=="false"){
//                                   partmusic.stop();
//                               }else{
//                               	  partmusic.play();
//                               }
//                               }else{
//                                  if(localStorage.getItem('audiomusic')=="false"){
//                                   audio.stop();
//                               }else{
//                               	audio.play();
//                               }
//                               }
//
//                           }
//
//         });
//     }
	// 	mounted(){
	// 	  // 如果支持 popstate 一般移动端都支持了
	// 	  if (window.history && window.history.pushState) {
	// 	    // 往历史记录里面添加一条新的当前页面的url
	// 	    history.pushState(null, null, document.URL);
	// 	    // 给 popstate 绑定一个方法 监听页面刷新
	// 	    window.addEventListener('popstate', this.backChange, false);//false阻止默认事件
	// 	  }
	// 	},
	//
	// 	destroyed(){
	// 	  window.removeEventListener('popstate', this.backChange, false);//false阻止默认事件
	// 	},
		// mounted(){
		// 	alert('index');
		//   if (window.history && window.history.pushState) {
		// 	  alert('index11');
		//     history.pushState(null, null, document.URL);
		//     window.addEventListener('popstate', goBack(), false);
		//   }
		// },
		// beforeDestroy(to,from,next) {
		// 	alert('index44');
		// 	 //back();
		// },
		// //页面销毁时，取消监听。否则其他vue路由页面也会被监听
		// destroyed(){
		//   window.removeEventListener('popstate',  goBack(), false);
		// },
	};
</script>
<style lang="less">
	@import "./common/font.css";
	@import "./common/start.css";
  // @import "../../common/index.css";
 /*@import url('myscript/dist/myscript.min.css');*/

	body {
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
	}

	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
	}
	*{
    user-select:none;
	    -webkit-touch-callout:none;  /*系统默认菜单被禁用*/
	    -webkit-user-select:none; /*webkit浏览器*/
	    -khtml-user-select:none; /*早期浏览器*/
	    -moz-user-select:none;/*火狐*/
	    -ms-user-select:none; /*IE10*/
	}
	input,textarea {
	    -webkit-user-select:auto; /*webkit浏览器*/
	    margin: 0;
	    padding: 0;
	    outline: none;
	}
	*{
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-tap-highlight-color: transparent; /* For some Androids */
	}

    .about {
    	display: flex;
    	margin: 0px;
    	width: 100%;
    	height: 100%;
    	display: block;
    	text-align: center;
    	position: fixed;
    	background-color: #44ccc2;
    }
	.settinglist {
		position: absolute;
		width: 100%;
		// display: inline-flex;
		float: right;
		height: 15%;
		bottom: 0%;
		z-index: 3;
	}
	.loading{
    height: 100%;
		background-color: white;
	}
   .loading-picture{
   	position: relative;
   	display: block;
   	text-align: center;
   	top: 50%;
   	transform: translateY(-70%);
   	margin: auto;
   	width: 60%;
   }
   .loading-picture img{
   	max-width: 100%;
   }

	//pubilc
	.fontsize {
		font-family: pepper,serif;
		color: white;
		bottom: 12%;
		left: 6%;
		position: absolute;
		font-size: 1.4rem;
		max-height: 100%;
		min-height: 60%;
		//margin-left: 2%;
	}



  .text2{
       width: 100%;
       font-size: 2rem;
       font-family: cboard,serif;
       position: relative;
       font-weight: bold;
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       background-color: #2c3e50;
       background-image:url("http://107.150.121.34/monkeytownHK/image/img/bluebackg.png");
       background-repeat:no-repeat;
       background-position: -400px 0;
       animation-iteration-count: 1;
       // -webkit-animation:mymoves 5s linear infinite;
  }
  .animation{
    animation:mymoves1 1s linear ;
    -webkit-animation:mymoves1 1s linear ;
  }
   @-webkit-keyframes mymoves1{
       0%{background-position: -400px -0px;}
       100%{background-position: 0px 0;}
  }
	.fontsizes {
		font-family: kg,serif;
		font-weight: bolder;
		color: #cc6453;
		text-align: center;
		vertical-align: middle;
		margin-top: 22%;
		font-size: xx-large;
	}

	.fade-enter-active {
		transition: all 0.6s;
	}

	.fade-leave-active {
		// opacity: 0;
		transition: all 0.6s;
	}

	.fade-enter {
		//opacity: 0;
		transform: translate3d(0, 100%, 0);
	}

	.fade-leave-to {
		//opacity: 0;
		transform: translate3d(0, 0, 0);
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

	.fade2-enter-active {
		transition: all 0.6s;
	}

	.fade2-leave-active {
		// opacity: 0;
		transition: all 0.6s;
	}

	.fade2-enter {
		//opacity: 0;
		//transform: translate3d(0, 100%, 0);
	}

	.fade2-leave-to {
		//opacity: 0;
		//transform: translate3d(0, -100%,0);
	}

	.pause {
		width: 11%;
		position: absolute;
		right: 17%;
		bottom: 0%;
	}

	.repeat {
		width: 11%;
		position: absolute;
		right: 5%;
		bottom: 0%;
	}

	@media screen and (max-width: 481px) {
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
		.loading-picture img {
		    max-width: 75%;
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
		.loading-picture img {
		    max-width: 75%;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1199px){
		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 12%;
			left: 8%;
			position: absolute;
			font-size: xx-large;
			max-height: 80%;
			min-height: 50%;
			margin-left: 2%;
			// transform: scale(1.2);
		}
		.pause {
			bottom: 11%;width: 13%;    right: 17%;
		}

		.repeat {
			bottom: 14%;
			width: 13%;
		}
	}

	@media screen and (min-width: 812px) and (max-width: 1023px) {

		.fontsizes {
			margin-top: 18%;
		}


		.pause {
			width: 10%;
			position: absolute;
			right: 17%;
			bottom: 0%;
		}

		.repeat {
			width: 10%;
			position: absolute;
			right: 5%;
			bottom: 0%;
		}
	}

  @media screen and (min-width: 1200px) and (max-width: 1600px){
		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 12%;
			left: 8%;
			position: absolute;
			font-size: xx-large;
			max-height: 80%;
			min-height: 50%;
			margin-left: 2%;
			// transform: scale(1.2);
		}
		.pause {
			bottom: 16%;width: 13%;    right: 17%;
		}

		.repeat {
			bottom: 14%;
			width: 13%;
		}
	}

  @media screen and (min-width: 1600px)  {
    .repeat {
      bottom: 0%;
      width: 11%;
    }
    @media screen and (min-width: 375px) and (max-width: 811px){
      .text2{
        font-size: 22px !important;
      }
    }
  }
</style>
