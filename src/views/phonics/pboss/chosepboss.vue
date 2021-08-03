<template>
	<div class="choseboss">
		<transition name="fades">
			<div class="contain">
				<transition name="fade1">
					<div style="width: 100%; height: 100%;display:block;position: absolute;">
						<img src="../../../assets/image/seasons.png"  style="width: 100%; z-index: -1;background-color: #ffd550; height: 100%;display:block;position: absolute;" v-if="bgimg[0].active">
						<img src="../../../assets/image/4-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd550; height: 100%;display:block;position: absolute;" v-if="bgimg[1].active">
						<img src="../../../assets/image/main_bg.png"  style="width: 100%; z-index: -1;background-color: #ffd550;height: 100%;display:block;position: absolute;" v-if="bgimg[2].active">
						<img src="../../../assets/image/main_bg.png"  style="width: 100%; z-index: -1;background-color: #ffd550;height: 100%;display:block;position: absolute;" v-if="bgimg[3].active">
						<img src="../../../assets/image/main_bg.png"  style="width: 100%; z-index: -1;background-color: #ffd550;height: 100%;display:block;position: absolute;" v-if="bgimg[4].active">
						<img src="../../../assets/image/main_bg.png"  style="width: 100%; z-index: -1;background-color: #ffd550;height: 100%;display:block;position: absolute;" v-if="bgimg[5].active">
						<img src="../../../assets/image/main_bg.png"  style="width: 100%; z-index: -1;background-color: #ffd550;height: 100%;display:block;position: absolute;" v-if="bgimg[6].active">
						<img src="../../../assets/image/main_bg.png"  style="width: 100%; z-index: -1;background-color: #ffd550;height: 100%;display:block;position: absolute;" v-if="bgimg[7].active">
						<img src="../../../assets/image/main_bg.png"  style="width: 100%; z-index: -1;background-color: #ffd550;height: 100%;display:block;position: absolute;" v-if="bgimg[8].active">
						<img src="../../../assets/image/main_bg.png"  style="width: 100%; z-index: -1;background-color: #ffd550;height: 100%;display:block;position: absolute;" v-if="bgimg[9].active">
						<div class="stylebar">
							<p class="stylefont">School Time</p>
						</div>
						<div class="menulist">
							<div class="listimg">
								<img :src=lightstar class="imgposit" v-if="stars[0].onestart">
								<img :src=star class="imgposit" v-if="!stars[0].onestart">
								<img :src=lightstar style="position: relative;height: 10%;top: 22%;    z-index: 2;" v-if="stars[0].twostart">
								<img :src=star style="position: relative;height: 10%;top: 22%;    z-index: 2;" v-if="!stars[0].twostart">
								<img :src=lightstar class="imgposit1"  v-if="stars[0].threestart">
								<img :src=star class="imgposit1"  v-if="!stars[0].threestart">
							<!-- 	<img :src=partBoss1.bg  class="chosen" @click="into"> -->
								<img  @click="into" :src=partBoss1.bg style="position: sticky;width: 65%;">

								<div class="collect">
									<!-- <span class="smtitle">{{partBoss1.part_name}}</span> -->
								<img src="../../../assets/image/colcard.png" class="colcard" v-if="mycard">
								<span class="colfont" v-if="mycard">{{partBoss1count}}</span>
							   </div>
							</div>
							<div class="listimg">
								<img :src=lightstar class="imgposit" v-if="stars[1].onestart">
								<img :src=star class="imgposit" v-if="!stars[1].onestart">
								<img :src=lightstar style="position: relative;height: 10%;top: 22%;    z-index: 2;" v-if="stars[1].twostart">
								<img :src=star style="position: relative;height: 10%;top: 22%;    z-index: 2;" v-if="!stars[1].twostart">
								<img :src=lightstar class="imgposit1"  v-if="stars[1].threestart">
								<img :src=star class="imgposit1"  v-if="!stars[1].threestart">
								<!-- <img :src=partBoss2.bg  class="chosen" @click="into2"> -->
								<img @click="into2" :src=partBoss2.bg style="position: sticky;width: 65%;">

								<div class="collect">
									<!-- <span class="smtitle">{{partBoss2.part_name}}</span> -->
								<img src="../../../assets/image/colcard.png" class="colcard" v-if="mycard">
								<span class="colfont" v-if="mycard">{{partBoss2count}}</span>
						    	</div>
							</div>
						</div>
					</div>
				</transition>
			</div>
		</transition>
	</div>

</template>

<script>
	var qs = require('qs');
	export default {
		name: "chosepboss",
		watch: {

		},
		data() {
			return {
				fade: 'fade',
				// bgimg:[
				// 	{name:"March",active:false},
				// 	{name:"April",active:false},
				// 	{name:"May",active:false},
				// 	{name:"June",active:false},
				// 	{name:"September",active:false},
				// 	{name:"October",active:false},
				// 	{name:"November",active:false},
				// 	{name:"December",active:false},
				// 	{name:"Jaunary",active:false},
				// 	{name:"Feburary",active:false},
				// ] ,
				// url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseBoss',
				pic: "",
				// pic: "http://demo11.embraiz.com/mtGameHK",
				url: '/exercise/exerciseBoss',
				//url: 'http://localhost:8080/mtGame/exercise/exerciseBoss',
				resume: false,
				star:'http://103.218.241.33/mtgameweb/assets/img/Little_Star_frame.png',
				lightstar:'http://103.218.241.33/mtgameweb/assets/img/star_frame.png',

				id: '',
				chosegame:'',
				partBoss1:[],
				partBoss1count:'',
				mycard:false,
				partBoss2:[],
				partBoss2count:'',
				unitsId:'',
				unit:'',
				menuId:'',
				stars:[
					{
				    onestart:false,
					twostart:false,
					threestart:false,
				},
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				}
				],
				type: 'choseboss',
			}
		},

		methods: {
		   into(){
			   this.chosegame='partpBoss1';
			  	this.$router.push({ //核心语句
			  		path: '/Pboss', //跳转的路径
					query: {
						//路由传参时push和query搭配使用 ，作用时传递参数
						type: this.chosegame,
						menuId:this.menuId ,
						unitsId:this.unitsId,
						unit:this.unit
					}
			  	})

		   },
		   into2(){
			    this.chosegame='partpBoss2';
		   		this.$router.push({ //核心语句
		   			path: '/Pboss', //跳转的路径
					query: {
						//路由传参时push和query搭配使用 ，作用时传递参数
						type: this.chosegame,
						menuId:this.menuId ,
						unitsId:this.unitsId,
						unit:this.unit
					}
		   		})
		   },
		},
		created() { //生命周期里接收参数
		    this.pic=this.$axios.defaults.baseURL;
			this.unit = this.$route.query.unit;
			this.unitsId=this.$route.query.unitsId;
			this.menuId = this.$route.query.menuId; //接受参数关键代码
			this.studentId=localStorage.getItem('studentId');
			for(var i=0;i<this.bgimg.length;i++){
				if(this.unit==this.bgimg[i].name){
					this.bgimg[i].active=true;
				}else{
					this.bgimg[i].active=false;
				}
			}
		this.$axios.post(this.url, qs.stringify({
			 menuDetailId: this.menuId,
			 studentId:localStorage.getItem('studentId')
		})).then(res => {
			 this.partBoss1=res.data.BossList[0];
			 this.partBoss2=res.data.BossList[1];
		  //    this.partBoss1count=res.data.partBoss1count;
			 // this.partBoss2count=res.data.partBoss2count;
			 this.partBoss1.bg=this.pic+this.partBoss1.bg;
			 this.partBoss2.bg=this.pic+this.partBoss2.bg;
			 if(this.partBoss1.star==0){
			 	this.stars[0].onestart=false;
			 	this.stars[0].twostart=false;
			 	this.stars[0].threestart=false;
			 	//this.startcoin=0;
			 }else if(this.partBoss1.star==1){
			 	this.stars[0].onestart=true;
			 	this.stars[0].twostart=false;
			 	 this.stars[0].threestart=false;
			 	 //this.startcoin=1;
			 }else if(this.partBoss1.star==2){
			 	this.stars[0].onestart=true;
			     this.stars[0].twostart=true;
			 	this.stars[0].threestart=false;
			 	 //this.startcoin=2;
			 }else if(this.partBoss1.star==3){
			 	this.stars[0].onestart=true;
			 	this.stars[0].twostart=true;
			 	this.stars[0].threestart=true;
			 	 //this.startcoin=3;
			 }
			 if(this.partBoss2.star==0){
			 	this.stars[1].onestart=false;
			 	this.stars[1].twostart=false;
			 	this.stars[1].threestart=false;
			 	//this.startcoin=0;
			 }else if(this.partBoss2.star==1){
			 	this.stars[1].onestart=true;
			 	this.stars[1].twostart=false;
			 	 this.stars[1].threestart=false;
			 	 //this.startcoin=1;
			 }else if(this.partBoss2.star==2){
			 	this.stars[1].onestart=true;
			     this.stars[1].twostart=true;
			 	this.stars[1].threestart=false;
			 	 //this.startcoin=2;
			 }else if(this.partBoss2.star==3){
			 	this.stars[1].onestart=true;
			 	this.stars[1].twostart=true;
			 	this.stars[1].threestart=true;
			 	 //this.startcoin=3;
			 }
		}, res => {
			alertMsg("You must be connected to the internet.<br>Please connect and try again.");
		})
	}
	};
</script>

<style scoped lang="less">
	.body {
		padding: 0;
		margin: 0;
	}

	.choseboss {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
	}
    .contain {
    	display: flex;
    	padding: 0px;
    	margin: 0px;
    	width: 100%;
    	height: 100%;
    	text-align: center;
    	display: block;
    	position: fixed;
    	overflow: hidden;
    }
	.stylebar{
		    width: 50%;
			background-color: #44CCC2;
			border-radius: 50px;
			display: inline-block;
			text-align: center;
		    color: white;
			top: 20%;
			position: relative;
	}
	.stylefont{
		    font-family: pepper;
		    font-size: 1.5rem;
		    margin: 10px !important;
	}
	.menulist {
		//sition: absolute;
		width: 100%;
		display: flex;
		float: left;
		height: 100%;
		margin: 3% 15%;
		overflow: hidden;
	}
    .listimg {
    	// margin-left: 20px;
    	display: block;
    	width: 35%;
    	position: relative;
    	height: 90%;
    }
    .smtitle{
		    width: 100%;
		    display: block;
		    margin-top: -17%;
		    position: absolute;
		    color: white;
			font-size: 1.2rem;
		    font-family: pepper;
	}
    .listimg img {
    	cursor: pointer;
    	transition: all 0.6s;
    }

    .listimg:visited {
    	transform: scale(1.1);
    }

    .listimg:active {
    	transform: scale(1.1);
    }
	.imgposit {
		position: relative;
		height: 10%;
		top: 26%;
		z-index: 2;
	}

	.imgposit1 {
		position: relative;
		height: 10%;
		top: 26%;
		left:1%;
		z-index: 2;
	}
	.collect{
		    position: absolute;
		    width: 100%;
	}
	.colcard{
		width: 7%;
	}
	.colfont{
		    font-size: 1.2rem;
		    font-family: KG;
            margin-left: 10px;
		    color: #007BB8;
			vertical-align: text-bottom;
	}
	.chosen{
		position: absolute;
		left: 29%;
		height: 29%;
		top: 28%;
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

    @media screen and (max-width: 481px) {
		.stylefont{
			    font-size: 1.2rem;
		}
	     .colfont{
	     	    font-size: 1rem;
	     }
	}

	@media screen and (min-width: 482px)and(max-width: 569px) {
		.stylefont{
			    font-size:1.2rem;
		}
         .colfont{
         	    font-size: 1rem;
         }

	}

	@media screen and (min-width: 1024px) {
		.menulist {
			margin: 6% 15%;
		}
		.stylebar{
			top: 22%;
		}
		.stylefont{
			    font-size: 2rem;
		}
	 .collect{
	 	 margin-top: 10px;
	 }
	 .colfont{
	 	    font-size: 1.5rem;
	 }
	 .chosen{
	 	left: 22%;
	 }
    .smtitle{
         margin-top: -5.1rem;
         font-size: 2rem;
	}
	}

	@media screen and (min-width: 812px) and (max-width:1023px) {
		.menulist{
		       margin: 3% 20%;
		}
       .listimg{
		     width: 30%;
	   }

	}
</style>
