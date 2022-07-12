<template>
	<div class="part3to">
    <span id="gameplay">
  <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
  </span>
		<transition name="fades">
			<div class="contain" v-if="!resume">
				<img src="../../assets/image/rightback.png"  @click="$tips(true);gomemu()" class="backbutton"/>
				 <img src="../../assets/image/help.png"  @click="$tips(true);help()" class="helpbutton"/>
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
						<p class="fontsizes" v-if="this.shownumb">{{this.countpage}}/{{this.question}}</p>
					</div>
				</transition>
				<transition name="fade1">
					<div v-if="!onef" style="width: 100%; height: 90%;text-align: center;display:block;position: absolute;">
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
						<div  v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div><!-- 遮罩禁止重复点击作用 -->
						<audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3"  ></audio>
						<audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3"  ></audio>
						<div class="smalltimes">
							<!-- <ul  style="">
									<li  > -->
							<span v-for="ou in listout" :key="ou.id">
								<img src="../../assets/image/smallback.png" v-show="!ou.bgc" class="smallimg" />
								<img src="../../assets/image/smallback1.png" v-show="ou.bgc" class="smallimg" />
							</span>
							<!-- </li>
					            </ul>	 -->
						</div>
						<!-- <img src="../../assets/image/star3.gif" class="start1" v-bind:class="{'showbg':showstart}" /> -->
						<ul class="card-list clearfix" v-bind:class="{'consize1':consize1,'consize2':consize2,'consize3':consize3}">
							<li class="card" v-for="li in list1" :key="li.id" @click="box2(li)" v-bind:class="{'list2':consize2,'list3':consize3}">
								<div class="card-face" v-bind:class="{'cardface':li.flag,'cardback':!li.flag,'answer':li.turefalse}">
									<img v-if="!li.turefalse" src="../../assets/image/back.png" class="card-img">
								</div>
								<div class="card-back" v-bind:class="{'cardback':li.flag,'cardface':!li.flag,'answer':li.turefalse}">
									<img :src="pic+li.bg" style="width: 70%;height: 62%; position: absolute;left: 14%;padding-top: 10px;">
									<span class="namestyle"  v-bind:class="{'namesize':li.size}">{{li.name}}</span>
									<img src="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/front.png"  class="card-img">
									<img src="../../assets/image/StarOrange.png" class="start2" v-if="li.level" />
								</div>
							</li>
						</ul>
						<!-- <img src="../../assets/image/star3.gif" class="start2" v-bind:class="{'showbg':showstart}" /> -->
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
					<!-- <img src="../../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
					<span class="fontsize">Match the pictures that are the same.</span>
					<div @click="$tips(true);changesett()">
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
					<!-- <div @click="change">
						<img src="../../assets/image/Icon_Repeat.png" class="repeat" v-if="!levels">
						<img src="../../assets/image/blue_repeat.png" class="repeat" v-if="levels">
					</div> -->
				</div>
			</div>
		</transition>
		<div class='popContainer' v-show="popp">
			<p class="spanp">{{spanp}}</p>
			<button class="roleimg">
				<img src="../../assets/image/mistakes4.png" style="height: 100%;" v-if="ruleimg4"/>

			</button>
			<div class="withcolor oringe">
				<div class="close"  @click="$tips(true);pop()">
					<img src="../../assets/image/cloce.png">
				</div>
				<img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/c.gif">

			</div>
		</div>
		<transition name="fades">
			<div class="about" v-if="resume">
				<div class="twomenu">
					<div>
						<img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show"  @click="sound"/>
						<img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show"  @click="sound"/>
					</div>
					<div style="margin-top: 5px;">
						<img src="../../assets/image/resume.png" style="width: 30%; height: 10%;" @click="$tips(true);changesett()">
					</div>
					<!-- <div style="margin-top: 5px;" >
						<div><img src="../../assets/image/home.png" style="width: 30%; height: 10%;"  @click="$tips(true);gomemu()"></div>
					</div> -->
				</div>
			</div>
		</transition>
	</div>

</template>

<script>
	var qs = require('qs');
	export default {
		name: "part3to",
		watch: {
			'onef': function(newVal) {
				if (this.onef === true) {
					setTimeout(() => {
						this.onef = false;
						this.list1 =this.listC[this.countpage-1];
						for(var i = 0; i < this.list1.length; i++){
							this.list1[i].size=0;
							if(this.list1[i].name.length>=10){
								this.list1[i].size=1;
							}
						}
						if (this.list1.length === 4) {
							this.consize1 = true;
              this.consize2 = false;
              this.consize3 = false;
						} else if (this.list1.length === 6) {
              this.consize1 = false;
							this.consize2 = true;
              this.consize3 = false;
						} else if (this.list1.length === 8) {
              this.consize1 = false;
              this.consize1 = false;
							this.consize3 = true;
						}
            setTimeout(() => {
							for (var i = 0; i < this.list1.length; i++) {
								this.list1[i].flag = 1;
							}
						}, 500);
						setTimeout(() => {
							for (var i = 0; i < this.list1.length; i++) {
								this.list1[i].flag = 0;
							}
							//console.log(this.list1);
						}, 2500);
						this.list2 = [];
					}, 2000);
				}
			},
		},
		data() {
			return {
			  level:'',
				issuccess: Boolean,
				popp: false,
				spanp:"",
				ruleimg8:false,
				ruleimg10:false,
				ruleimg4:false,
				ruleimg15:false,
				ruleimg25:false,
				ruleimg12:false,
				onef: true,
				action:false,
				action1:false,
				soundsWrong:false,
				soundscorrect:false,
				zhezhao:true,
				fade: 'fade',
				question:4,
				show: true,
				// url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseC',
				 pic: "",
				//pic: "http://demo11.embraiz.com/mtGameHK",
        url: '/exercise/',
        url1:'',
        part:'',
				//url: 'http://localhost:8080/mtGame/exercise/exerciseC',
				resume: false,

				listout: [{
						id: 1,
						// bg: "http://localhost:8080/assets/img/smallback.png",
						bgc: false,
					},
					{
						id: 2,
						// bg: "http://localhost:8080/assets/img/smallback.png",
						bgc: false,
					},
					{
						id: 3,
						//bg: "http://localhost:8080/assets/img/smallback.png",
						bgc: false,
					},
					{
						id: 4,
						//bg: "http://localhost:8080/assets/img/smallback.png",
						bgc: false,
					}
				],
				list2: [],
				list1: [],
				listC: [],
				id: '',
				unitsId:'',
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
				unit:'',
				menuId:'',
        shownumb:false,
				timeout: 0,
				consize1: false,
				consize2: false,
				consize3: false,
				levels: 0,
				countpage: 1,
				account: 0,
				sum:0,
         gamename:'',
         timeurl:'/user/playTime',
				// page: this.page++,
				type: 'part3to',
			}
		},

		methods: {
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
          unit:this.unit,
          level:localStorage.getItem('level'),
          cources:localStorage.getItem('cources'),
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
          part:this.part,
          level:this.level,
				}
			})
			},
			pop(){
				 this.popp = !this.popp;
			},
			help(){
				if(this.onef==false){
				this.spanp="Match the pictures that are the same.";
				this.popp = !this.popp;
				if( this.list1[0].rank==0){
					this.ruleimg4=true;
				}else if( this.list1[0].rank==1){
					this.ruleimg4=true;
				}
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
			box2(li) {
				this.zhezhao=true;
				if (li.flag == 0) {
					this.list2.push({
						'value': li.name,
						'id': li.question_id
					});
					li.flag = 1;
				}

				if (this.list2.length == 2 && li.flag == 1) {
				   setTimeout(() => {
					if (this.list2[0].value == this.list2[1].value) {
						this.soundscorrect=true;
							for (var j = 0; j < this.list2.length; j++) {
								for (var i = 0; i < this.list1.length; i++) {
								if (this.list1[i]['question_id'] == this.list2[j].id) {
									this.list1[i]['level'] = 1;
								}
							}
						}
						setTimeout(() => {
							this.soundscorrect=false;
							for (var i = 0; i < this.list1.length; i++) {
								for (var j = 0; j < this.list2.length; j++) {
									if (this.list1[i]['question_id'] == this.list2[j].id) {
										this.list1[i]['level'] = 0;
									}
								}
							}
							this.zhezhao=false;
							this.list2 = [];
								for (var i = 0; i < this.list1.length; i++) {
									if (this.list1[i].flag == 0) {
										return this.issuccess = true;
									} else {
										this.issuccess = false;//都翻开了
									}
								}
								if (this.issuccess == false) {
									this.countpage += 1;
									if ( this.list2.length == 0) {
										setTimeout(() => {
											if(this.countpage> this.listC.length){
											setTimeout(() => {
											this.$router.push({ //核心语句
												path: '/result', //跳转的路径
												query: { //路由传参时push和query搭配使用 ，作用时传递参数
													// id: this.id,
													// account: this.countpage-1,
													// type: this.type,
													// sum:this.sum,
													type:this.type,
													partName:'partNameC',
													account:this.timeout,
													menuId: this.menuId,
													unitsId:this.unitsId,
													unit:this.unit,
                          part:this.part,
                          level:this.level,
												}
											})
												},2000);
											}else{
												this.onef = true;
												this.zhezhao=false;
											}

										}, 2000);
									}

								}
								return;
							}, 2000);
					} else {
						this.soundsWrong=true;
						for (var i = 0; i < this.list1.length; i++) {
							for (var j = 0; j < this.list2.length; j++) {
								if (this.list1[i].question_id == this.list2[j].id) {
									this.list1[i].turefalse = 1;
								}
							}
						}
						this.timeout = this.timeout + 1;
						if (this.timeout >= 1) {
							for (var t = 1; t <= this.timeout; t++) {
								this.listout[4 - t].bgc = true;
							}
						}
						setTimeout(() => {
							this.soundsWrong=false;
							if (this.timeout >= 4) {
								setTimeout(() => {
								this.$router.push({ //核心语句
									path: '/result', //跳转的路径
									query: { //路由传参时push和query搭配使用 ，作用时传递参数
										// id: this.id,
										// account: this.countpage-1,
										// type: this.type,
										// sum:this.sum,
										type:this.type,
										partName:'partNameC',
										account:this.timeout,
										menuId: this.menuId,
										unitsId:this.unitsId,
										unit:this.unit,
                    part:this.part,
                    level:this.level,
									}
								})
								},2000);
							} else {
								setTimeout(() => {
								for (var i = 0; i < this.list1.length; i++) {
									for (var j = 0; j < this.list2.length; j++) {
										if (this.list1[i].name == this.list2[j].value) {
											this.list1[i].flag = 0;
											this.list1[i].turefalse = 0;

										}
									}
								}
								this.list2 = [];
								this.zhezhao=false;
								},2000);
							}
						}, 2000);
					}
				  },1000);
				}else{
					this.zhezhao=false;
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
		this.part = this.$route.query.part;
		this.unitsId=this.$route.query.unitsId;
		this.menuId = this.$route.query.menuId; //接受参数关键代码
     this.gamename=this.$route.query.name;
     this.level = this.$route.query.level;
      if(this.part==='part1'){
        this.url1=this.url+'exerciseCPart1';
      }else if(this.part==='part2'){
        this.url1=this.url+'exerciseCPart2';
      }else if(this.part==='part3'){
        this.url1=this.url+'exerciseC';
      }
      if(this.gamename===''||this.gamename===undefined){
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
		if(localStorage.getItem('gamemusic')==="false"){
		    this.show=false;
		}else{
			 this.show=true;
		}

			this.$axios.post(this.url1, qs.stringify({
				  menuDetailId: this.menuId,
			})).then(res => {
			for (let i in res.data.ListC) {
			    this.listC.push(res.data.ListC[i]); //属性
			}
				this.list1 =this.listC[this.countpage-1];
				 this.question=this.listC.length;
				 this.shownumb = true;
				if (this.list1.length === 4) {
					this.consize1 = true;
				} else if (this.list1.length === 6) {
					this.consize2 = true;
				} else if (this.list1.length === 8) {
					this.consize3 = true;
				}
				for(var i = 0; i < this.list1.length; i++){
					this.list1[i].size=0;
					if(this.list1[i].name.length>=10){
						this.list1[i].size=1;
					}
				}

        if (this.onef === true) {
          setTimeout(() => {
            this.onef = false;
          }, 1000);
        }
						this.timeout = 0;
						setTimeout(() => {
							for (var i = 0; i < this.list1.length; i++) {
								this.list1[i].flag = 1;
							}
						}, 500);
						setTimeout(() => {
							for (var i = 0; i < this.list1.length; i++) {
								this.list1[i].flag = 0;
							}
							this.zhezhao=false;
							//console.log(this.list1);
						}, 2500);
        setTimeout(() => {
            document.getElementById('alertFram').style.display = 'none'}
          ,1000)
			}, res => {
				alertMsg("You must be connected to the internet.<br>Please connect and try again.");
			});

    // 统计时间
    this.$axios.post(this.timeurl, qs.stringify({
      id: timestamp,
      time: timestamp,
      name:this.gamename,
      unit:this.unit,
      level:localStorage.getItem('level'),
      cources:localStorage.getItem('cources'),
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
	}
	};
</script>

<style scoped lang="less">
	.body {
		padding: 0;
		margin: 0;
	}

	.part3to {
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
		z-index:201;
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

	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.list2 {
		width: 25% !important;
		margin: 0 4%;
	}

	.list3 {
		width: 22% !important;
		margin: 0 1%;
	}

	.namestyle {
	    	position: absolute;
		    bottom: 10px;
		    display: block;
		    width: 70%;
		  	height: 20%;
		    left: 9%;
        line-height: 100%;
        white-space: nowrap;
		    text-align: center;
		    margin: 0 5%;
		    overflow: hidden;
		    color: #5c3400;
		    font-family: pepper;
	}
    .namesize{
		    font-size: 12px !important;
	}
	.clearfix {
		*zoom: 1;
	}

	/*清除浮动*/
	.clearfix:after {
		display: table;
		content: '';
		clear: both;
	}

	/*兼容其他浏览器*/

	.card-list .card {
		//float: left;
		//position: relative;
		//margin-left: 20px;
		width: 20%;
		height: 35%;
		display: inline-block;
		-webkit-perspective: 600px;
		/*兼容 Safari and Chrome */
		-moz-perspective: 600px;
		/*兼容 Firefox 4 */
		-ms-perspective: 600px;
		perspective: 600px;
	}

	.card-list .card-face,
	.card-list .card-back {
		position: absolute;
		left: 0;
		top: 0;
		-webkit-transition: all 0.5s ease-in-out;
		-o-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
		/*规定以慢速开始和结束的过渡效果*/
		-webkit-transform-style: perspective-3d;
		-moz-transform-style: perspective-3d;
		-ms-transform-style: perspective-3d;
		transform-style: perspective-3d;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		backface-visibility: hidden;
		/*如果在旋转元素不希望看到其背面时，该属性很有用。*/
	}
    .card-img{
    	 width: 90%;
    }
	.consize1 {
		width: 100%;
		height: 100%;
		padding-top: 15%;
	}

	.consize2 {
		width: auto;
		height: 100%;
		padding-top: 10%;
		margin: 0 17%;
	}

	.consize3 {
		height: 100%;
		padding-top: 11%;
		margin: 0 15%;
	}

	.cardface {
		z-index: 1;
		/*当鼠标在上面，-1，变为底下*/
		-webkit-transform: rotateY(180deg);
		-ms-transform: rotateY(180deg);
		-o-transform: rotateY(180deg);
		transform: rotateY(180deg);
	}

	.cardback {
		z-index: 2;
		-webkit-transform: rotateY(0deg);
		-ms-transform: rotateY(0deg);
		-o-transform: rotateY(0deg);
		transform: rotateY(0deg);
	}

	.smalltimes {
		position: absolute;
		width: 100%;
		top: 10%;
		right: 10%
	}

	.smallimg {
		width: 3%;
		float: right;
		position: relative;
		margin: 5px;
	}

	.listimg img {
		cursor: pointer;
		//transition: all 0.6s;
	}

	.listimg:focus {
		transform: scale(1.2);
	}

	.listimg:hover {
		transform: scale(1.2);
	}

	.listimg:active {
		transform: scale(1.2);
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
	.fontsize {
		font-family: pepper;
		color: white;
		bottom: 15%;
		left: 3%;
		position: absolute;
		font-size: 1.4rem;
		max-height: 100%;
		min-height: 60%;
		margin-left: 2%;
	}

	.fontsizes {
		font-family: kg;
		font-weight: bolder;
		color: #EA8C26;
		// position: sticky;
		text-align: center;
		vertical-align: middle;
		margin-top: 22%;
		font-size: xx-large;
	}

	// .start1 {
	// 	position: absolute;
	// 	float: left;
	// 	left: -32%;
	// 	z-index: 9;
	// 	-webkit-transform: rotate(-270deg);
	// 	-ms-transform: rotate(-270deg);
	// 	-o-transform: rotate(-270deg);
	// 	transform: rotate(-270deg);
	// 	transform: rotate(-270deg);
	// 	display: none;
	// 	top: 25px;
	// 	height: 70%;
	// }

	.start2 {
		    position: absolute;
		    left: -2%;
		    z-index: 9;
		    top: -15%;
		    width: 100%;
	}

	.showbg {
		display: block;
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
		animation: move 0.5s 0s infinite;
		-webkit-animation: move 0.5s 0s infinite;
		transform-origin: bottom;
		-webkit-transform-origin: bottom;

	}

	@keyframes move {

		0%,
		65% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		70% {
			-webkit-transform: rotate(6deg);
			transform: rotate(6deg);
		}

		75% {
			-webkit-transform: rotate(-6deg);
			transform: rotate(-6deg);
		}

		80% {
			-webkit-transform: rotate(6deg);
			transform: rotate(6deg);
		}

		85% {
			-webkit-transform: rotate(-6deg);
			transform: rotate(-6deg);
		}

		90% {
			-webkit-transform: rotate(6deg);
			transform: rotate(6deg);
		}

		95% {
			-webkit-transform: rotate(-6deg);
			transform: rotate(-6deg);
		}

		100% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
	}

	@-webkit-keyframes move {

		0%,
		65% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		70% {
			-webkit-transform: rotate(6deg);
			transform: rotate(6deg);
		}

		75% {
			-webkit-transform: rotate(-6deg);
			transform: rotate(-6deg);
		}

		80% {
			-webkit-transform: rotate(6deg);
			transform: rotate(6deg);
		}

		85% {
			-webkit-transform: rotate(-6deg);
			transform: rotate(-6deg);
		}

		90% {
			-webkit-transform: rotate(6deg);
			transform: rotate(6deg);
		}

		95% {
			-webkit-transform: rotate(-6deg);
			transform: rotate(-6deg);
		}

		100% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
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

		.namestyle {
			font-size: 14px;
		}

		.twomenu {
			padding-top: 18%;
		}

		.consize1 {
			padding-top: 19%;
		}

		.consize2 {
			padding-top: 15%;
		}

		.consize3 {
			padding-top: 15%;
		}

// 		.start1 {
// 			left: -40%;
// 		}
//
// 		.start2 {
// 			//right: -40%;
// 		}

	}

	@media screen and (min-width: 1024px) and (max-width: 1199px){
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

		.fontsizes {
			margin-top: 30%;
		}

		.namestyle {
			font-size: x-large;
		}

		.twomenu {
			padding-top: 26%;
		}

		.smalltimes {
			top: 15%;
		}

		.consize1 {
			padding-top: 22%;
		}

		.consize2 {
			padding-top: 18%;
			margin: 0 15%
		}

		.consize3 {
			padding-top: 18%;
			margin: 0 10%
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
			font-size: 20px !important;
		}

// 		.start1 {
// 			left: -45%;
// 		}
//
// 		.start2 {
// 			//right: -45%;
// 		}
	}
  @media screen and (min-width: 1200px)and (max-width: 1600px) {
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

     .fontsizes {
     	margin-top: 30%;
     }

     .namestyle {
     	font-size: 25px;
     }

     .twomenu {
     	padding-top: 26%;
     }

     .smalltimes {
     	top: 15%;
     }

     .consize1 {
     	padding-top: 22%;
     }

     .consize2 {
     	padding-top: 18%;
     	margin: 0 15%
     }

     .consize3 {
     	padding-top: 18%;
     	margin: 0 10%
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
     	        font-size: 24px !important;
        }
  }
  @media screen and (min-width: 667px) and (max-width: 735px) {
		.fontsizes {
		   		margin-top: 17%;
		}
		.twomenu {
			padding-top: 18%;
		}
		.smalltimes{
				  top:5%;
				}
		.consize2{
				 padding-top: 9%;
		}
		.card-img{
				   width: 80%;
		}
	}
	@media screen and (min-width: 736px) and (max-width: 811px) {
    	.fontsizes {
   		margin-top: 17%;
   	   }
	   .twomenu {
	   	padding-top: 18%;
	   }
	   .smalltimes{
		  top:5%;
		}
	   .consize2{
		 padding-top: 9%;
	   }
	   .card-img{
		   width: 80%;
	   }
	   .namesize{
	   	font-size: 12px !important;
	   }
    }
	@media screen and (min-width: 812px) and (max-width:1023px) {
		.twomenu {
			padding-top: 14%;
		}

		.consize2 {
			height: 100%;
			padding-top: 9%;
			margin: 0 16%;
		}

		.fontsizes {
			margin-top: 17%;
		}

		.list2 {
			width: 20% !important;
			margin: 0 4%;
		}

    .list3{
      width: 16% !important;
      margin: 0 4%;
    }
		.consize3 {
			height: 100%;
			padding-top: 10%;
			margin: 0 16%;
		}
		.withcolor {
			height: 70%;
		}
		.namesize{
			font-size: 12px !important;
		}

// 		.start1 {
// 			left: -27%;
// 		}
//
// 		.start2 {
// 			//right: -27%;
// 		}
	}
  @media screen and (min-width: 1600px) {
    .fontsizes {
      margin-top: 20%;
      font-size: 3rem;
    }
    .twomenu {
      padding-top: 14%;
    }

    .consize2 {
      height: 100%;
      padding-top: 9%;
      margin: 0 16%;
    }
    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 0%;
      left: 8%;
      position: absolute;
      font-size: xx-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }


    .list2 {
      width: 20% !important;
      margin: 0 6%;
    }
    .list3{
      width: 16% !important;
      margin: 0 4%;
    }
    .consize3 {
      height: 100%;
      padding-top: 10%;
      margin: 0 16%;
    }
    .namestyle{
      font-size: 2rem;
    }
    .namesize{
      font-size: 25px !important;
    }

    .spanp {
      top: 22%;
      font-size: 2rem;
    }

    .spanp1 {
      font-size: 2rem;
    }

    .withcolor {
      height: 60%;
      top: 20%;
      border-radius: 75px;
    }
    .animapng7{
      width: auto;
    }
    .close {
      width: 100px;
      height: 100px;
      margin: -36px;
    }

    .close img {
      height: 100px;
      width: 100px;

    }

    .roleimg {
      height: 63%;
      top: 20%;
    }
  }
  @media only screen and (min-device-width: 812px) and (max-device-width: 1023px) and (-webkit-device-pixel-ratio: 3) or (-webkit-device-pixel-ratio: 2){
    .list2 {
      width: 20% !important;
      margin: 0 4%;
    }
  }

</style>
