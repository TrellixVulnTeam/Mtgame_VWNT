<template>
	<div class="part7to">
		<span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
		</span>
		<transition name="fades">
			<div class="contain" v-if="!resume3">
				<img src="../../assets/image/rightback.png"  @click="gomemu" class="backbutton"/>
				 <img src="../../assets/image/help.png"  @click="help" class="helpbutton"/>
				<transition name="fade1">
					<div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
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
            <img src="../../assets/image/6-6bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;opacity: 0.5;height: 100%;display:block;position: absolute;" v-if="bgimg[15].active">
            <img src="../../assets/image/7-7bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[16].active">
            <img src="../../assets/image/8-8bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">
            <p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{ this.allquestion}}</p>
					</div>
				</transition>
				<transition name="fade1">
					<div v-show="!onef" style="width: 100%; height: 90%;display:block;position: absolute;">
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
            <img src="../../assets/image/6-6bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;opacity: 0.5;height: 100%;display:block;position: absolute;" v-if="bgimg[15].active">
            <img src="../../assets/image/7-7bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[16].active">
            <img src="../../assets/image/8-8bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">
            <div  v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
						<audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3"  ></audio>
						<audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3"  ></audio>
						<div class="winword" v-bind:class="{ changeblue: issuccess1 ,changered:issuccess2,resize:questionsize}">
							{{this.question}}
						</div>
						<div class="windows">
							<div class="imgbox" id="imgBox">
								<div v-for="(item, index) in list1" :key="index" class="imgsty">
									<img src="../../assets/image/StarOrange.png" class="answerSucc"/>
									<img v-bind:src="pic+item.bg" />
								</div>
							</div>
							<canvas id="canvas" style="position: absolute;left:0;z-index: 99;width: 100%;height: 100%;"
								@mousedown="canvasDown($event)" @mouseup="canvasUp($event)" @mousemove="canvasMove($event)"
								@touchstart="canvasDown($event)" @touchend="canvasUp($event)" @touchmove="canvasMove($event)">
								您的浏览器不支持Canvas
							</canvas>
						</div>
					</div>
				</transition>
				<div class="settinglist">
					<img src="../../assets/image/season-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[0].active">
					<img src="../../assets/image/4-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[1].active">
					<img src="../../assets/image/5-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[2].active">
					<img src="../../assets/image/6-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[3].active">
					<img src="../../assets/image/7-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[4].active">
					<img src="../../assets/image/8-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[5].active">
					<img src="../../assets/image/9-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[6].active">
					<img src="../../assets/image/10-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[7].active">
					<img src="../../assets/image/11-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[8].active">
					<img src="../../assets/image/12-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[9].active">
          <img src="../../assets/image/1-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[10].active">
          <img src="../../assets/image/2-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[11].active">
          <img src="../../assets/image/3-3bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[12].active">
          <img src="../../assets/image/4-4bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[13].active">
          <img src="../../assets/image/5-5bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[14].active">
          <img src="../../assets/image/6-6bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[15].active">
          <img src="../../assets/image/7-7bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[16].active">
          <img src="../../assets/image/8-8bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[17].active">
          <img src="../../assets/image/9-9bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[18].active">
          <img src="../../assets/image/10-10bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[19].active">
          <img src="../../assets/image/11-11bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[20].active">
          <img src="../../assets/image/12-12bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[21].active">
          <img src="../../assets/image/1-1bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[22].active">
          <img src="../../assets/image/2-2bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[23].active">
					<span class="fontsize">Read the word and circle the correct picture.</span>
					<div @click="changesett">
						<img src="../../assets/image/season-pause.png" class=" repeat" v-if="bgimg[0].active">
						<img src="../../assets/image/4-pause.png" class=" repeat" v-if="bgimg[1].active">
						<img src="../../assets/image/5-pause.png" class=" repeat" v-if="bgimg[2].active">
						<img src="../../assets/image/6-pause.png" class=" repeat" v-if="bgimg[3].active">
						<img src="../../assets/image/7-pause.png" class=" repeat" v-if="bgimg[4].active">
						<img src="../../assets/image/8-pause.png" class=" repeat" v-if="bgimg[5].active">
						<img src="../../assets/image/9-pause.png" class=" repeat" v-if="bgimg[6].active">
						<img src="../../assets/image/10-pause.png" class=" repeat" v-if="bgimg[7].active">
						<img src="../../assets/image/11-pause.png" class=" repeat" v-if="bgimg[8].active">
						<img src="../../assets/image/12-pause.png" class=" repeat" v-if="bgimg[9].active">
            <img src="../../assets/image/1-pause.png" class=" repeat" v-if="bgimg[10].active">
            <img src="../../assets/image/2-pause.png" class=" repeat" v-if="bgimg[11].active">
            <img src="../../assets/image/3-3pause.png" class=" repeat" v-if="bgimg[12].active">
            <img src="../../assets/image/4-4pause.png" class=" repeat" v-if="bgimg[13].active">
            <img src="../../assets/image/5-5pause.png" class=" repeat" v-if="bgimg[14].active">
            <img src="../../assets/image/6-6pause.png" class=" repeat" v-if="bgimg[15].active">
            <img src="../../assets/image/7-7pause.png" class=" repeat" v-if="bgimg[16].active">
            <img src="../../assets/image/8-pause.png" class=" repeat" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9pause.png" class=" repeat" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10pause.png" class=" repeat" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11pause.png" class=" repeat" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12pause.png" class=" repeat" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1pause.png" class=" repeat" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2pause.png" class=" repeat" v-if="bgimg[23].active">
					</div>
				</div>
			</div>
		</transition>
		<div class='popContainer' v-show="popp">
			<p class="spanp">{{spanp}}</p>
			<button class="roleimg">
				<img src="../../assets/image/score-rule.png" style="height: 100%;" v-if="ruleimg10"/>
				<img src="../../assets/image/boss-rule2.png" style="height: 100%;"  v-if="ruleimg8"/>
			</button>
			<div class="withcolor">
				<div class="close"  @click="pop">
					<img src="../../assets/image/cloce.png">
				</div>
				<img class="animapng7" src="http://103.218.241.33/mtgameweb/assets/img/g.gif">


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
	/*import { fabric } from 'fabric'
	var qs = require('qs');*/
	var qs = require('qs');
	export default {
		name: "part7to",
		data() {
			return {
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
				fisrtanswer:false,
				question: "",
				zhezhao:false,
				action:false,
				action1:false,
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
          {active:false,spring:'Exploration'},
          {active:false,spring:'Summer Fun'},
          {active:false,spring:'School Time'},
          {active:false,spring:'Animals'},
          {active:false,spring:'Family Time'},
          {active:false,spring:'Holidays'},
          {active:false,spring:'Meal Time'},
          {active:false,spring:'On the Farm'},
        ],
				list1: [

				],
				onef: true,
				fade: 'fade',
				levels: 0,
				flag2: true,
				soundsWrong:false,
				soundscorrect:false,
				show: true,
				resume3: false,
				id: '',
				page: this.page++,
				account: 0,
				unitsId:'',
				allquestion:8,
				unit:'',
				menuId:'',
				listG: [],
				type: 'part7to',
				sum: 0,
				score:"",
				issuccess: true,
				issuccess2:false,
				issuccess1:false,
				canvasObj: null,
				canvasH: null,
				context: {},
				pic: "",
         gamename:'',
         timeurl:'/user/playTime',
				questionsize:0,
				// url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseG',
				// pic: "http://demo11.embraiz.com/mtGameHK",
				url: '/exercise/',
        part:'',
        url1:'',
				//url: 'http://localhost:8080/mtGame/exercise/exerciseG',
        		canvasMoveUse: true,
        		centerP: [], // 存储数组图片中心点的位置
		        // 配置参数
				config: {
					lineWidth: 3,
					lineColor: "#44ccc2",
					shadowBlur: 1
				}
			}
		},
		created() { //生命周期里接收参数
			this.pic=this.$axios.defaults.baseURL2;
			this.unit = this.$route.query.unit;
			this.part = this.$route.query.part;
			this.unitsId=this.$route.query.unitsId;
			this.menuId = this.$route.query.menuId; //接受参数关键代码
      this.gamename=this.$route.query.name;
      if(this.part==='part1'){
        this.url1=this.url+'exerciseGPart1';
      }else if(this.part==='part2'){
        this.url1=this.url+'exerciseGPart2';
      }else if(this.part==='part3'){
        this.url1=this.url+'exerciseG';
      }
      if(this.gamename==''||this.gamename==undefined){
        this.gamename=localStorage.getItem('gamename')
      }else {
        localStorage.setItem('gamename',this.gamename);
      }
      var timestamp = (new Date()).getTime();
      localStorage.setItem('startTimeid',timestamp);
			for(var i=0;i<this.bgimg.length;i++){
				if(this.unit===this.bgimg[i].spring){
					this.bgimg[i].active=true;
				}else{
					this.bgimg[i].active=false;
				}
			}
			if(localStorage.getItem('gamemusic')=="false"){
			    this.show=false;
			}else{
				 this.show=true;
			}

				this.$axios.post(this.url1, qs.stringify({
						  menuDetailId: this.menuId,
					})).then(res => {
          if(this.part==='part1'){
            for (let i in res.data.ListPart1) {
              this.listG.push(res.data.ListPart1[i]); //属性
              this.allquestion = this.listG.length;
            }
          }else if(this.part==='part2'){
            for (let i in res.data.ListPart2) {
              this.listG.push(res.data.ListPart2[i]); //属性
              this.allquestion = this.listG.length;
            }
          }else if(this.part==='part3'){
            for (let i in res.data) {
              this.listG.push(res.data[i]); //属性
              this.allquestion = this.listG.length - 3;
            }
          }
						// for (let i in res.data) {
						//     this.listG.push(res.data[i]); //属性
						// }
						//  this.allquestion=this.listG.length-3;
						this.list1 =this.listG[this.countpage-1];
						this.question=this.list1[0].question;
            this.shownumb=true;
						if(this.question.length>10){
							this.questionsize=1;
						}else{
							this.questionsize=0;
						  }
          if(this.onef == true) {
            setTimeout(() => {
              this.onef = false;
            }, 1000);
          }
					 //    this.list1=res.data.Maplist;
						// this.question=res.data.question;
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
		mounted() {
			setTimeout(() => {
				const canvas = document.getElementById('canvas'); // 初次进来初始化画布
				let imgBox = document.getElementById('imgBox');
				let imgsty = document.getElementsByClassName('imgsty');
				for (let i=0; i<imgsty.length; i++) {
					let coreP = { // 获取图片中心点位置
						corePx: imgsty[i].offsetLeft + imgsty[i].offsetWidth/2,
						corePy: imgsty[i].offsetTop + imgsty[i].offsetHeight/2
					}
					this.centerP.push(coreP);

				}
				this.canvasObj = canvas;
				this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
				canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
	      		canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
	      		this.context = canvas.getContext('2d');
				this.setCanvasStyle();
			}, 4000);
		},
		destroyed() {
		document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
     window.removeEventListener('popstate',this.gomemu,false);
		},
		methods: {
			bodyScroll(event) {
			event.preventDefault();
			},
			isPc () {
		        const userAgentInfo = navigator.userAgent;
		        const Agents = ['Android', 'iPhone','iPhoneX','iPhoneXR', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
		        let flag = false;
		        // for (let v = 0; v < Agents.length; v++) {
		        //   	if (userAgentInfo.indexOf(Agents[v]) > 0) {
		        //     	flag = false;
		        //     	break;
		        //   	}
		        // }
		        return flag;
		    },
			// 在canvas中鼠标按下
			canvasDown(e) {
				//console.log(e);
			    if(e.touches && e.touches.length==1){
					 this.canvasMoveUse = true;
				     const t = e.target;
				     let canvasX;
				     let canvasY;
				     // 由于手机端和pc端获取页面坐标方式不同，所以需要做出判断
				    if(this.isPc()) {
					  canvasX = e.clientX - t.parentNode.offsetLeft;
					   canvasY = e.clientY - t.parentNode.offsetTop;
				    } else {
				     	//console.log(e.changedTouches);
					   if(e.changedTouches){
					    	canvasX = e.changedTouches[0].clientX - t.parentNode.offsetLeft;
					        canvasY = e.changedTouches[0].clientY - t.parentNode.offsetTop;
					}
				};
				   this.context.beginPath();
				    this.context.moveTo(canvasX, canvasY);
				    this.context.stroke();
				}else{
					this.canvasMoveUse = false;
					return;
				}

			},

			// canvas中鼠标移动
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

			// canvas中鼠标放开
			canvasUp(e) {
				// console.log(e);
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
          // console.log(this.context.isPointInPath(item.corePx, item.corePy));
					if (this.question == this.list1[index].value) { // 获取正确选项下标
						successIndex = index;
					};
					if (this.context.isPointInPath(item.corePx, item.corePy)) {
						isSelect = true;
						anwserList.push(item);
					};
				});
				if (!isSelect) { // 没有选中
					this.canvasObj.height = this.canvasH;
					this.setCanvasStyle();
				} else {
					if (anwserList.length === 1) { // 答题时只有圈中一个选项才能进行判断
					     this.zhezhao=true;
						// console.log(anwserIndex);
						if (this.question == this.list1[anwserIndex].value) {
							/*回答正确在这里写效果*/
							this.soundscorrect=true;
							setTimeout(() => {
								this.soundscorrect=false;
							},2000);
							setTimeout(() => {
								this.canvasObj.height = this.canvasH; // 清空画布
								this.issuccess1=true;
								this.score="1";
								this.countpage += 1;
								if(this.fisrtanswer==false){
									this.account += 1;
								}
								this.context.beginPath(); // 重新绘制一个圆
								this.context.lineWidth = 6;
								this.context.shadowBlur = 1;
								this.context.shadowColor = "#007BB8";
								this.context.strokeStyle = "#007BB8";
								this.context.arc(this.centerP[anwserIndex].corePx, this.centerP[anwserIndex].corePy, this.canvasH/4, 0,2*Math.PI);
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
												if(this.countpage<=this.allquestion){
												this.onef = true;
												}else{
													// this.$axios.post(this.url, qs.stringify({
													// 	partName: 'partG',
													// 	userId: this.getCookie('userId'),
													// 	numQuestion: this.countpage,
													// 	account: 1
													// })).then(res => {
													// 	this.sum = res.data['sum(score)'];
													// 	this.account = res.data.count;
													// 	}, res => {
													// 			alertMsg("You must be connected to the internet.<br>Please connect and try again.");
													// 	})
															setTimeout(() => {
																 this.zhezhao=false;
																this.$router.push({
																	//核心语句
																	path: "/result", //跳转的路径
																	query: {
																		//路由传参时push和query搭配使用 ，作用时传递参数
																		type:this.type,
																		partName:'partNameG',
																		account:this.account,
																		menuId: this.menuId,
																		unitsId:this.unitsId,
																		unit:this.unit,
                                    part:this.part
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
							this.fisrtanswer=true;this.issuccess2=true;
							setTimeout(() => {
								this.soundsWrong=false;
							},2000);
							setTimeout(() => {
								this.canvasObj.height = this.canvasH; // 清空画布
								this.score="0";
								// this.countpage += 1;
								this.context.beginPath(); // 重新绘制一个圆
								this.context.lineWidth = 6;
								this.context.shadowBlur = 1;
								this.context.shadowColor = "#cc6453";
								this.context.strokeStyle = "#cc6453";
								this.context.arc(this.centerP[anwserIndex].corePx, this.centerP[anwserIndex].corePy, this.canvasH/4, 0, 2*Math.PI);
								this.context.stroke();

								setTimeout(() => {
									// this.canvasObj.style.transition = "all 0.4s";
									// this.canvasObj.style.opacity = 0;
									this.zhezhao=false;
									const canvas = document.getElementById('canvas'); // 初次进来初始化画布
									let imgBox = document.getElementById('imgBox');
									this.canvasObj = canvas;
									this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
									canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
									canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
									this.context = canvas.getContext('2d');
									this.setCanvasStyle();this.issuccess2=false;
									// setTimeout(() => {
									// 	imgsty[anwserIndex].classList.add("answer");
									// 	imgsty[anwserIndex].classList.add("answer");
									// 	imgsty[successIndex].style.transition = "all 0.6s";
									// 	setTimeout(() => {
									// 		imgsty[successIndex].classList.add("sacle1_2");
									// 		imgsty[anwserIndex].classList.remove("answer");
									// 		setTimeout(() => {
									// 			if(this.countpage<=this.listG.length-3){
									// 			this.onef = true;
									// 			}else{
									//
									// 						setTimeout(() => {
									// 							 this.zhezhao=false;
									// 							this.$router.push({
									// 								//核心语句
									// 								path: "/result", //跳转的路径
									// 								query: {
									// 									//路由传参时push和query搭配使用 ，作用时传递参数
									// 									type:this.type,
									// 									partName:'partNameG',
									// 									account:this.account,
									// 									menuId: this.menuId,
									// 									unitsId:this.unitsId,
									// 									unit:this.unit
									// 								}
									// 							});
									//
									// 						}, 1000);
									// 			}
									// 			imgsty[successIndex].classList.remove("sacle1_2");
									// 			/*答题完成后重新渲染设置画布*/
									//       		this.canvasObj.height = this.canvasH; // 动态赋值canvas的高度
									//       		this.setCanvasStyle();
									// 			this.canvasObj.style.opacity = 1;
									// 		}, 2000);
									// 	}, 1000);
									// }, 600);
								}, 800);
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
					if(this.action==false&&this.onef==false){
				this.action=true;
				setTimeout(() => {
				this.action=false;
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
					this.spanp="Read the word and circle the correct picture.";
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
				path: '/home', //跳转的路径
				query: {
					unitsId: this.unitsId,
					unit:this.unit,
          part:this.part
				}
			})
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
					      if(this.score=="1"){
							//  this.$axios.post(this.url, qs.stringify({
							// 	partName: 'partG',
							// 	userId:this.getCookie('userId'),
							// 	numQuestion: this.countpage,
							// 	account: 1
							// })).then(res => {
							//     this.list1=res.data.Maplist;
							// 	this.question=res.data.question;

								setTimeout(() => {
								this.onef = false;
								this.fisrtanswer=false;
								this.issuccess1=false;
								this.issuccess2=false;
								this.zhezhao=false;
								this.list1 =this.listG[this.countpage-1];
							    this.question=this.list1[0].question;
								if(this.question.length>10){
									this.questionsize=1;
								}else{
									this.questionsize=0;
								  }

							   }, 2000);

							// }, res => {
							// 	alertMsg("You must be connected to the internet.<br>Please connect and try again.");
							// })
						  }else{
						// 	  this.$axios.post(this.url, qs.stringify({
						// 	partName: 'partG',
						// 	userId:this.getCookie('userId'),
						// 	numQuestion: this.countpage,
						// })).then(res => {
						//     this.list1=res.data.Maplist;
						// 	this.question=res.data.question;

							setTimeout(() => {
							this.onef = false;
							this.issuccess1=false;
							this.issuccess2=false;
							this.zhezhao=false;
							this.list1 =this.listG[this.countpage-1];
							this.question=this.list1[0].question;
							if(this.question.length>10){
								this.questionsize=1;
							}else{
								this.questionsize=0;
							  }
						   }, 2000);


						// }, res => {
						// 	alertMsg("You must be connected to the internet.<br>Please connect and try again.");
						// })
						  }
				};
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

	.part7to {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
    background-color: #ffd55f;
    z-index: -1;
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
		width: 75%;
		height: 90%;
		margin: 0 auto;
		background-color: #FCFFD1;
		border: 0.5rem solid #007BB8 !important;
		box-shadow: 0.3rem 0.3rem 0.1rem #085D77 !important;
		border-radius: 30px;
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

	.imgsty {
		position: relative;
		width: 33.3%;
		height: auto;
		text-align: center;
		display: inline-block;
	}

	.answerSucc{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 110%;
		display: none;
	}

	.imgsty img{
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
		background-color: #FCFFD1;
		height: 65%;
		border: 10px solid #FFD550;
		border-radius: 50px;
		position: relative;
	}
	.oringe{
		background-color: #FFD550 !important;
		border: 10px solid #FCFFD1 !important;
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
	    z-index: 2;
	    font-family: pepper;
	}
	.spanp1{
	     font-size: 0.8rem;
	    text-align: left;
	}
	.animapng {
		height: 80%;
		    margin-top: -7%;
		    margin-left: 10%;
	}
	.animapng7 {
		    height: 70%;
		    width: 100%;
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
		color:  #EA8C26;
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
		.windows {
			top: 10%;
		}
		.imgbox{
			margin-top: -5%;
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
	}
	@media screen and (min-width: 1355px)and (max-width: 1600px) {
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
		.windows {
			top: 16%;
			border-radius: 50px;
		}
		.imgbox{
			margin-top: -5%;
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
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }
    .winword {
      top: 16%;
      height: 6rem;
      font-family: pepper;
      font-size: 3rem;
      line-height: 5rem;
    }
    .windows {
      top: 11%;
      border-radius: 50px;
    }
    .imgbox{
      margin-top: -5%;
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

  }
</style>
