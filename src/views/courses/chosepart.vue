<template>
	<div class="choseboss">
    <img src="../../assets/image/rightback.png" @click="back" class="backbutton"/>
		<transition name="fades">
			<div class="contain">
				<transition name="fade1">
					<div style="width: 100%; height: 100%;display:block;position: absolute;">
						<img src="../../assets/image/seasons.png"  style="width: 100%; z-index: -1;background-color: #ffd55f; height: 100%;display:block;position: absolute;" v-if="bgimg[0].active">
						<img src="../../assets/image/4-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f; height: 100%;display:block;position: absolute;" v-if="bgimg[1].active">
						<img src="../../assets/image/5-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[2].active">
						<img src="../../assets/image/6-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;opacity: 0.5;height: 100%;display:block;position: absolute;" v-if="bgimg[3].active">
						<img src="../../assets/image/7-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[4].active">
						<img src="../../assets/image/8-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[5].active">
						<img src="../../assets/image/9-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[6].active">
						<img src="../../assets/image/10-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[7].active">
						<img src="../../assets/image/11-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[8].active">
						<img src="../../assets/image/12-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[9].active">
            <img src="../../assets/image/1-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[10].active">
            <img src="../../assets/image/2-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[11].active">
            <img src="../../assets/image/3-3bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[12].active">
            <img src="../../assets/image/4-4bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[13].active">
            <img src="../../assets/image/5-5bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[14].active">
            <img src="../../assets/image/6-6bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[15].active">

            <img src="../../assets/image/9-9bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">

            <div class="stylebar" style="background-color: #EA5D13;" v-if="bgimg[0].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #289D4F;" v-if="bgimg[1].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #AD59AE;" v-if="bgimg[2].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #0090C8;" v-if="bgimg[3].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #B8122E;" v-if="bgimg[4].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #00539E;" v-if="bgimg[5].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #FF80A1;" v-if="bgimg[6].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #A45927;" v-if="bgimg[7].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #42B8E2;" v-if="bgimg[8].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #117500;" v-if="bgimg[9].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #D42C2C;" v-if="bgimg[10].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #009145;" v-if="bgimg[11].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #FF7F00;" v-if="bgimg[12].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #3ECCB1;" v-if="bgimg[13].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #009BE8;" v-if="bgimg[14].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #f26f8e;" v-if="bgimg[15].active"><p class="stylefont">{{this.level}}</p></div>

            <div class="stylebar" style="background-color: #b77e34;" v-if="bgimg[18].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #80ae0a;" v-if="bgimg[19].active"><p class="stylefont">{{this.level}}</p></div>
						<div class="stylebar" style="background-color: #ff7274;" v-if="bgimg[20].active"><p class="stylefont">{{this.level}}</p></div>
            <div class="stylebar" style="background-color: #cc1717;" v-if="bgimg[21].active"><p class="stylefont">{{this.level}}</p></div>
            <div class="stylebar" style="background-color: #ff7900;" v-if="bgimg[22].active"><p class="stylefont">{{this.level}}</p></div>
            <div class="stylebar" style="background-color: #ae441e;" v-if="bgimg[23].active"><p class="stylefont">{{this.level}}</p></div>
            <div class="menulist">
							<div class="listimg">
								<img :src=lightstar class="imgposit" v-if="stars[0].onestart">
								<img :src=star class="imgposit" v-if="!stars[0].onestart">
								<img :src=lightstar style="position: relative;height: 10%;top: 23%;    z-index: 2;" v-if="stars[0].twostart">
								<img :src=star style="position: relative;height: 10%;top: 23%;    z-index: 2;" v-if="!stars[0].twostart">
								<img :src=lightstar class="imgposit1"  v-if="stars[0].threestart">
								<img :src=star class="imgposit1"  v-if="!stars[0].threestart">
							<!-- 	<img :src=partBoss1.bg  class="chosen" @click="into"> -->
								<img  @click="into" class="partbossimg" :src=partBoss1.bossbg1 style="position: sticky;width: 75%;">

								<div class="collect">
									<!-- <span class="smtitle">{{partBoss1.part_name}}</span> -->
								<img src="../../assets/image/colcard.png" class="colcard" v-if="mycard">
								<span class="colfont" v-if="mycard">{{partBoss1count}}</span>
							   </div>
							</div>
							<div class="listimg">
								<img :src=lightstar class="imgposit" v-if="stars[1].onestart">
								<img :src=star class="imgposit" v-if="!stars[1].onestart">
								<img :src=lightstar style="position: relative;height: 10%;top: 23%;    z-index: 2;" v-if="stars[1].twostart">
								<img :src=star style="position: relative;height: 10%;top: 23%;    z-index: 2;" v-if="!stars[1].twostart">
								<img :src=lightstar class="imgposit1"  v-if="stars[1].threestart">
								<img :src=star class="imgposit1"  v-if="!stars[1].threestart">
								<!-- <img :src=partBoss2.bg  class="chosen" @click="into2"> -->
								<img @click="into2" class="partbossimg" :src=partBoss2.bossbg2 style="position: sticky;width: 75%;">

								<div class="collect">
									<!-- <span class="smtitle">{{partBoss2.part_name}}</span> -->
								<img src="../../assets/image/colcard.png" class="colcard" v-if="mycard">
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
		name: "chosepart",

		data() {
			return {
				fade: 'fade',
				spring:'',
        level:'',
        levelsId:'',
        bgimg:[
          {active:false,spring:'Seasons'},
          {active:false,spring:'Transportation'},
          {active:false,spring:'Bugs'},
          {active:false,spring:'Clothes'},
          {active:false,spring:'Theme Park'},
          {active:false,spring:'Space'},
          {active:false,spring:'My Body'},
          {active:false,spring:'My Weekend'},
          {active:false,spring:'Wild Animals'},
          {active:false,spring:'Christmas'},
          {active:false,spring:"Let's Go Shopping"},
          {active:false,spring:'My Community'},
          {active:false,spring:'Fun Time!'},
          {active:false,spring:'My Home'},
          {active:false,spring:'Our World'},
          {active:false,spring:'Fairy Tales'},
          {active:false,spring:'xxxxx'},
          {active:false,spring:'xxxxxx'},
          {active:false,spring:'School Life'},
          {active:false,spring:'Animals'},
          {active:false,spring:'Family Time'},
          {active:false,spring:'Holidays'},
          {active:false,spring:'Meal Time'},
          {active:false,spring:'On the Farm'},
        ] ,
				// url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseBoss',
				pic: "",
				// pic: "http://demo11.embraiz.com/mtGameHK",
				url: '/exercise/exerciseBoss',
        url2: '/games/part',
				//url: 'http://localhost:8080/mtGame/exercise/exerciseBoss',
				resume: false,
				star:'http://monkeytown.monkeytree.com.hk/image/Little_Star_frame.png',
				lightstar:'http://monkeytown.monkeytree.com.hk/image/star_frame.png',

				id: '',
				chosegame:'',
				partBoss1:[],
				partBoss1count:'',
				mycard:false,
				partBoss2:[],
				partBoss2count:'',
				unitsId:'',
				unit:'',
        gamename:'',
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
		   back(){
         this.$router.push({
           path: '/courses',
           query: {
             style:"courses",
             unitId:this.unitId,
             unit:this.unit,
             level:this.level
           }
         })
       },
		   into(){
			   var audio = document.getElementById('music');
			   	audio.pause();
			   this.chosegame='partBoss1';
			  	this.$router.push({ //核心语句
			  		path: '/boss', //跳转的路径
					query: {
						//路由传参时push和query搭配使用 ，作用时传递参数
						type: this.chosegame,
						menuId:this.menuId ,
						unitsId:this.unitsId,
						unit:this.unit,
            name:this.gamename,
					}
			  	})

		   },
		   into2(){
			   var audio = document.getElementById('music');
			   	audio.pause();
			    this.chosegame='partBoss2';
		   		this.$router.push({ //核心语句
		   			path: '/boss', //跳转的路径
					query: {
						//路由传参时push和query搭配使用 ，作用时传递参数
						type: this.chosegame,
						menuId:this.menuId ,
						unitsId:this.unitsId,
						unit:this.unit,
            name:this.gamename,
					}
		   		})
		   },
       bodyScroll(event) {
       event.preventDefault();
       },
		},
    destroyed() {
        document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
    },
		created() { //生命周期里接收参数
		    this.pic=this.$axios.defaults.baseURL2;
          this.levelsId=this.$route.query.levelsId;
          this.unit=this.$route.query.spring;
          this.level = this.$route.query.level;
          this.unitId=this.$route.query.unitId;
			this.studentId=localStorage.getItem('studentId');
			for(var i=0;i<this.bgimg.length;i++){
				if(this.unit===this.bgimg[i].spring){
					this.bgimg[i].active=true;
				}else{
					this.bgimg[i].active=false;
				}
			}
      if(this.unit==='Seasons'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/season-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/season-star.png";
      }else if(this.unit==='Transportation'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/4-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/4-star.png";
      }else if(this.unit==='Bugs'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/season-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/season-star.png";
      }else if(this.unit==='Clothes'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/6-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/6-star.png";
      }else if(this.unit==='Theme Park'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/6-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/6-star.png";
      }else if(this.unit==='Space'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/8-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/8-star.png";
      }else if(this.unit==='My Body'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/9-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/9-star.png";
      }else if(this.unit==='My Weekend'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/10-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/10-star.png";
      }else if(this.unit==='Wild Animals'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/11-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/11-star.png";
      }else if(this.unit==='Christmas'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/12-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/12-star.png";
      }else if(this.unit==='Let\'s Go Shopping'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/1-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/1-star.png";
      }else if(this.unit==='My Community'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/2-star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/2-star.png";
      }else if(this.unit==='Fun Time!'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/3-3star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/3-3star.png";
      }else if(this.unit==='My Home'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/4-4star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/4-4star.png";
      }else if(this.unit==='Our World'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/5-5star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/5-5star.png";
      }else if(this.unit==='Fairy Tales'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/6-6star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/6-6star.png";
      }else if(this.unit==='School Life'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/9-9star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/9-9star.png";
      }else if(this.unit==='Animals'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/10-10star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/10-10star.png";
      }else if(this.unit==='Family Time'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/11-11star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/11-11star.png";
      }else if(this.unit==='Holidays'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/12-12star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/12-12star.png";
      }else if(this.unit==="Meal Time"){
        this.star="http://107.150.121.34/monkeytownHK/image/img/1-1star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/1-1star.png";
      }else if(this.unit==='On the Farm'){
        this.star="http://107.150.121.34/monkeytownHK/image/img/2-2star2.png";
        this.lightstar="http://107.150.121.34/monkeytownHK/image/img/2-2star.png";
      }

        this.$axios.post(this.url2, qs.stringify({
          levelsDetailId: this.levelsId,
          studentId:localStorage.getItem('studentId')
        })).then(res => {
          this.partBoss1=res.data.partList[0];
          this.partBoss2=res.data.partList[1];
          //    this.partBoss1count=res.data.partBoss1count;
          // this.partBoss2count=res.data.partBoss2count;
          this.partBoss1.bossbg1=this.pic+this.partBoss1.bg1;
          this.partBoss2.bossbg2=this.pic+this.partBoss2.bg2;
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
        });
        document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
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
    background-color: #ffd55f;
    z-index: -1;
	}
    .contain {
    	/*display: flex;*/
    	padding: 0px;
    	margin: 0px;
    	width: 100%;
    	height: 100%;
    	text-align: center;
    	display: block;
    	position: fixed;
    	overflow: hidden;
    }
  .backbutton {
    // display: block;
    z-index: 2;
    width: 6%;
    position: fixed;
    left: 15px;
    top: 15px;
  }
	.stylebar{
		    width: 50%;
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
		top: 28%;
		z-index: 2;
	}

	.imgposit1 {
		position: relative;
		height: 10%;
		top: 28%;
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

	@media screen and (min-width: 1024px)  and (max-width:1600px){
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
		.partbossimg{
			top: 15%;
			transform: scale(1.3);
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

  @media screen and (min-width: 1600px){
    .menulist {
      margin: 6% 24%;
    }
    .listimg{
      width: 26%;
    }
    .stylebar{
      top: 22%;
    }
    .stylefont{
      font-size: 3rem;
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
    .partbossimg{
      top: 15%;
      transform: scale(1.3);
    }
  }
</style>
