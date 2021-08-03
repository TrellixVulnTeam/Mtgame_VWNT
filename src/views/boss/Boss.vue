<template>
	<div class="boss">
		<span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
		</span>
		<transition name="fades">
			<div class="contain" v-if="!resume">
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
            <img src="../../assets/image/8-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">

            <p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{this.question}}</p>
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
            <img src="../../assets/image/8-bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">
            <div  v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div><!-- 遮罩禁止重复点击作用 -->
						<audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3" ></audio>
						<audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3"></audio>
						<div class="leftbox">
							  <img src="../../assets/image/StarOrange.png" class="start" v-show="ended">
							<button class="inputbar" v-bind:class="{'changered':changered,'changeblue':changeblue}">
								<!-- <input type="text" v-model="picked" name="inputtext" class="inputspan"> -->
							<p class="inputspan" v-for="val in space">{{val.name}}</p>
						  </button>
							<div class="inputbarright">
							    <button class="delete" @click="deletes">Delete</button>
							</div>
						    <div class="listbar">
								<audio @canplay="getDuration"   ref="videos" id="videos" autoplay="autoplay" :src="audio"></audio>
								<div v-bind:class="{'answer':answer}" class="leftimg" @click="change">
								<img :src=this.image   style="width:80%; height:80%; position: absolute;left: 9%;top: 10%;">
							    <img src="http://103.218.241.33/mtgameweb/assets/img/front.png"  style="width: 100%; float: left;">
							  </div>
							   <div class="listbar2">
								<div>
									<button v-for="item in items2" :key="item.id" class="answer-items" @click="onkey(item)">
										<p class="answeritems">{{item.name}}</p>
									</button>
								</div>
								 <div>
									<button v-for="item in items3" :key="item.id" class="answer-items" @click="onkey(item)">
										<p class="answeritems">{{item.name}}</p>
									</button>
								 </div>
								 <div>
									<button v-for="item in items4" :key="item.id" class="answer-items" @click="onkey(item)">
										<p class="answeritems">{{item.name}}</p>
									</button>
								 </div>
							   </div>
							   <div class="rightbox">

						        	<button class="space" @click="nullspace">Space</button>
							        <button class="enter" @click="enters">Enter</button>
						       </div>
					     	</div>
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
          <img src="../../assets/image/8-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[17].active">
          <img src="../../assets/image/9-9bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[18].active">
          <img src="../../assets/image/10-10bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[19].active">
          <img src="../../assets/image/11-11bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[20].active">
          <img src="../../assets/image/12-12bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[21].active">
          <img src="../../assets/image/1-1bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[22].active">
          <img src="../../assets/image/2-2bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[23].active">
					<button class="fontsize">{{warn}}</button>
					<div @click="changesett">
						<img src="../../assets/image/season-pause.png" class=" pause" v-if="bgimg[0].active">
						<img src="../../assets/image/4-pause.png" class=" pause" v-if="bgimg[1].active">
						<img src="../../assets/image/5-pause.png" class=" pause" v-if="bgimg[2].active">
						<img src="../../assets/image/6-pause.png" class=" pause" v-if="bgimg[3].active">
						<img src="../../assets/image/7-pause.png" class=" pause" v-if="bgimg[4].active">
						<img src="../../assets/image/8-pause.png" class=" pause" v-if="bgimg[5].active">
						<img src="../../assets/image/9-pause.png" class=" pause" v-if="bgimg[6].active">
						<img src="../../assets/image/10-pause.png" class=" pause" v-if="bgimg[7].active">
						<img src="../../assets/image/11-pause.png" class=" pause" v-if="bgimg[8].active">
						<img src="../../assets/image/12-pause.png" class=" pause" v-if="bgimg[9].active">
            <img src="../../assets/image/1-pause.png" class=" pause" v-if="bgimg[10].active">
            <img src="../../assets/image/2-pause.png" class=" pause" v-if="bgimg[11].active">
            <img src="../../assets/image/3-3pause.png" class=" pause" v-if="bgimg[12].active">
            <img src="../../assets/image/4-4pause.png" class=" pause" v-if="bgimg[13].active">
            <img src="../../assets/image/5-5pause.png" class=" pause" v-if="bgimg[14].active">
            <img src="../../assets/image/6-6pause.png" class=" pause" v-if="bgimg[15].active">
            <img src="../../assets/image/7-7pause.png" class=" pause" v-if="bgimg[16].active">
            <img src="../../assets/image/8-pause.png" class=" pause" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9pause.png" class=" pause" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10pause.png" class=" pause" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11pause.png" class=" pause" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12pause.png" class=" pause" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1pause.png" class=" pause" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2pause.png" class=" pause" v-if="bgimg[23].active">
					</div>
					<div @click="change">
						<img src="../../assets/image/season-repeat.png" class=" repeat" v-if="bgimg[0].active">
						<img src="../../assets/image/4-repeat.png" class=" repeat" v-if="bgimg[1].active">
						<img src="../../assets/image/5-repeat.png" class=" repeat" v-if="bgimg[2].active">
						<img src="../../assets/image/6-repeat.png" class=" repeat" v-if="bgimg[3].active">
						<img src="../../assets/image/7-repeat.png" class=" repeat" v-if="bgimg[4].active">
						<img src="../../assets/image/8-repeat.png" class=" repeat" v-if="bgimg[5].active">
						<img src="../../assets/image/9-repeat.png" class=" repeat" v-if="bgimg[6].active">
						<img src="../../assets/image/10-repeat.png" class=" repeat" v-if="bgimg[7].active">
						<img src="../../assets/image/11-repeat.png" class=" repeat" v-if="bgimg[8].active">
						<img src="../../assets/image/12-repeat.png" class=" repeat" v-if="bgimg[9].active">
            <img src="../../assets/image/1-repeat.png" class=" repeat" v-if="bgimg[10].active">
            <img src="../../assets/image/2-repeat.png" class=" repeat" v-if="bgimg[11].active">
            <img src="../../assets/image/3-3repeat.png" class=" repeat" v-if="bgimg[12].active">
            <img src="../../assets/image/4-4repeat.png" class=" repeat" v-if="bgimg[13].active">
            <img src="../../assets/image/5-5repeat.png" class=" repeat" v-if="bgimg[14].active">
            <img src="../../assets/image/6-6repeat.png" class=" repeat" v-if="bgimg[15].active">
            <img src="../../assets/image/7-7repeat.png" class=" repeat" v-if="bgimg[16].active">
            <img src="../../assets/image/8-repeat.png" class=" repeat" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9repeat.png" class=" repeat" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10repeat.png" class=" repeat" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11repeat.png" class=" repeat" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12repeat.png" class=" repeat" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1repeat.png" class=" repeat" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2repeat.png" class=" repeat" v-if="bgimg[23].active">
					</div>
				</div>
			</div>
		</transition>
		<div class='popContainer' v-show="popp">
			<p class="spanp spanp1">{{spanp}}</p>
			<button class="roleimg">
				<img src="../../assets/image/boss-rule.png" style="height: 100%;" v-if="ruleimg12"/>
				<img src="../../assets/image/boss-rule2.png" style="height: 100%;"  v-if="ruleimg8"/>
			</button>
			<div class="withcolor oringe">
				<div class="close"  @click="pop">
					<img src="../../assets/image/cloce.png">
				</div>
				<img class="animapng7" src="http://103.218.241.33/mtgameweb/assets/img/boss.gif">

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
	var qs = require('qs');
	export default {
		name: "boss",
		watch: {
			'onef': function(newVal) {
				if (this.onef == true) {
					setTimeout(() => {
						this.truelist =this.listBoss[this.countpage-1][0].list;
						this.image=this.pic+this.listBoss[this.countpage-1][0].bg;
						// this.cardId=this.listBoss[this.countpage-1][0].card_id;
						this.audio=this.pic+this.listBoss[this.countpage-1][0].audio;
						this.onef = false;this.zhezhao=false;
							// this.video = true;
							// this.action1 = true;
					}, 2000);

				}
			},
			// 'video': function(newVal) {
			// 	if (this.video == true) {
			//         setTimeout(() => {
			// 	      this.video=false;
			// 		  this.zhezhao=false;
			//         },5000);
			// 	 }
			// },
      'video': function(newVal) {
			  console.log(this.video);
        if (this.video == true) {
          this.$refs.videos.play();
          setTimeout(() => {
            this.$refs.videos.pause();
            this.video =false;
          }, this.duration*1000);
        }
      },
			// 'action1': function(newVal) {
			//     if (this.action1 == true) {
			//         setTimeout(() => {
			//            this.action1=false;
			//         }, 5000);
			//    }
			// },
// 			'space': function(newVal) {
// 				if(this.space==[]||this.space==''||this.space.length==0||this.space.length==null){
//           if (this.onef == true) {
//
//           }else{
//             	// this.warn='Please input words.';
//           }
//
// 				}else{
// 					this.warn="Look at the picture.Then‚ listen and spell the correct word.";
// 				}
// 			}
		},
		data() {
			return {
				popp: false,
				spanp:'',
        duration:0,
				ruleimg8:false,
        shownumb:false,
				ruleimg10:false,
				ruleimg4:false,
				ruleimg15:false,
				ruleimg25:false,
				ruleimg12:false,
				issuccess: false,
				showstart: false,
				onef: true,
				fade: 'fade',
				show: true,
				space:[],
				audio:'',
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
          {active:false,spring:'xxxxxx'},
          {active:false,spring:'School Life'},
          {active:false,spring:'Animals'},
          {active:false,spring:'Family Time'},
          {active:false,spring:'Holidays'},
          {active:false,spring:'Meal Time'},
          {active:false,spring:'On the Farm'},
        ],
				video:false,
				soundsWrong:false,
				soundscorrect:false,
				action:false,
				// action1:false,
				ended:false,
				zhezhao:false,
				changered:false,
				changeblue:false,
				answer:false,
				unitsId:'',
				unit:'',
				menuId:'',
				listBoss: [],
        part:'',
				warn:"Look at the picture.Then‚ listen and spell the correct word.",
				 // url1: 'http://demo11.embraiz.com/mtGame/exercise/partBoss1',
				 // url2: 'http://demo11.embraiz.com/mtGame/exercise/partBoss2',
				 pic: "",
				//url1: 'http://localhost:8080/mtGame/exercise/partBoss1',
				//url2: 'http://localhost:8080/mtGame/exercise/partBoss2',
				url1: '',
				url: '/exercise/',
				// pic: "http://demo11.embraiz.com/mtGameHK",
				resume: false,
				cardId:'',
				image:'',
				truelist:[
				],
				list2: [],
				items2: [
					{

						name: "q",
					},
					{
						// id: 2,
						name: "w",
					},
					{
						// id: 3,
						name: "e",
					},

					{
						// id: 4,
						name: "r",
					},
					{
						// id: 5,
						name: "t",
					},
					{
						// id: 6,
						name: "y",
					},
					{
						// id: 7,
						name: "u",
					},
					{
						// id: 8,
						name: "i",
					},
					{
						// id: 9,
						name: "o",
					},
					{
						// id: 10,
						name: "p",
					},
				],
				items3:[
					{
						// id: 11,
						name: "a",
					},
					{
						// id: 12,
						name: "s",
					},
					{
						// id: 13,
						name: "d",
					},
					{
						// id: 14,
						name: "f",
					},
					{
						// id: 15,
						name: "g",
					},
					{
						// id: 16,
						name: "h",
					},

					{
						// id: 17,
						name: "j",
					},
					{
						// id: 18,
						name: "k",
					},
					{
						// id: 19,
						name: "l",
					},
				],
				items4:[
					{
						// id: 20,
						name: "z",
					},
					{
						// id: 21,
						name: "x",
					},
					{
						// id: 22,
						 name: "c",
					},
					{
						// id: 23,
						name: "v",
					},
					{
						// id: 24,
						name: "b",
					},
					{
						// id: 25,
						name: "n",
					},
					{
						// id: 26,
						name: "m",
					},

				],
				id: '',
				timeout: 0,
				consize1: false,
				consize2: false,
				consize3: false,
				levels: 0,
				countpage:1,
				account: 0,
				sum:0,
        gamename:'',
        timeurl:'/user/playTime',
				question:8,
				type: '',
			}
		},

		methods: {
      getDuration() {
        console.log(this.$refs.videos.duration); //此时可以获取到duration
        this.duration = this.$refs.videos.duration;
        this.video =true;
      },
			pop(){
				 this.popp = !this.popp;
			},
			help(){
				if(this.onef==false){
					this.spanp="Look at the picture.Then‚ listen and spell the correct word.";
				this.popp = !this.popp;
				if(this.listBoss[0][0].rank==0){
					this.ruleimg8=true;this.ruleimg12=false;
				}else if(this.listBoss[0][0].rank==1){
					this.ruleimg8=false;this.ruleimg12=true;
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
          // console.log(res.data);
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
			change() {
				if(this.onef == false){
					// this.action1=true;
					this.video=true;
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
			onkey(e){
				if(this.space.length<25){
					this.space.push(e);
				}

			},
			deletes(){
				if(this.space.length!=0){
				this.space.splice(this.space.length-1);
				}
			},
			nullspace(){
				if(this.space.length<25){
				if(this.space==[]||this.space==''||this.space.length==0||this.space.length==null){
				}else{
				  this.nullspvae={id:'',name:' '}
				  this.space.push(this.nullspvae);
				}
				}
			},
			concat(a,b){
			  return a+b;
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
			enters(){
				// console.log(this.space);

				if(this.space.length==0||this.space.length==null){
					// this.warn='Please input words.';
				}else if( this.truelist.length==this.space.length){//长度一样
					this.countpage += 1;
					this.zhezhao=true;
					if (this.countpage <= this.question) {//不是最后一题
					for(var i=0;i<this.truelist.length;i++){
						if(this.truelist[i].name==this.space[i].name || this.truelist[i].name==this.space[i].name.toLowerCase()){
						    this.truefalse=1;
					   }else{
						  this.truefalse=false;
						   break;
					   }
				    }
					//this.truelist.name.includes(this.space.name);
				    if(this.truefalse==1){//长度一样正确

					this.ended=true;this.soundscorrect=true;
					this.changeblue=true;
					this.account += 1;
					setTimeout(() => {
						this.ended=false;this.soundscorrect=false;
						// this.$axios.post(this.url, qs.stringify({
						// 	partName: this.part,
						// 	userId: this.getCookie('userId'),
						// 	cardId: this.cardId,
						// 	numQuestion:this.countpage,
						// 	account: 1
						// })).then(res => {
						// this.truelist=res.data.Maplist;
						// this.image=this.pic+res.data.bg;
						// this.cardId=res.data.cardId;
						// this.audio=this.pic+res.data.audio;
						// }, res => {
						// 	alertMsg("You must be connected to the internet.<br>Please connect and try again.");
						// });
						setTimeout(() => {
							this.changeblue=false;
							this.onef=true;
							this.space=[];
							}, 2000);
					}, 2000);
				    }else{//长度一样错误
					this.answer=true;this.soundsWrong=true;
					this.changered=true;
					setTimeout(() => {
						this.answer=false;this.soundsWrong=false;
						for(var i=0;i<this.truelist.length;i++){
							this.space[i]=this.truelist[i];
						}
						this.changered=false;
						this.changeblue=true;
						// this.$axios.post(this.url, qs.stringify({
						// 	partName: this.part,
						// 	userId: this.getCookie('userId'),
						// 	// cardId: this.cardId,
						// 	numQuestion:this.countpage,
						// })).then(res => {
						// this.truelist=res.data.Maplist;
						// this.image=this.pic+res.data.bg;
						// this.cardId=res.data.cardId;
						// this.audio=this.pic+res.data.audio;
						// }, res => {
						// 	alertMsg("You must be connected to the internet.<br>Please connect and try again.");
						// });
						setTimeout(() => {
							this.onef=true;
							this.space=[];
							this.changeblue=false;
							}, 2000);
					}, 2000);
				}

				}else{//是最后一题
					    for(var i=0;i<this.truelist.length;i++){
							if(this.truelist[i].name==this.space[i].name || this.truelist[i].name==this.space[i].name.toLowerCase()){
								this.truefalse=2;
							}else{
								this.truefalse=false;
								 break;
							}
					    }
					if(this.truefalse==2){//是最后一题正确
						this.ended=true;this.soundscorrect=true;
						this.changeblue=true;
						this.account += 1;
						setTimeout(() => {
							this.ended=false;this.soundscorrect=false;
							// this.$axios.post(this.url, qs.stringify({
							// 	partName: this.part,
							// 	userId: this.getCookie('userId'),
							// 	cardId: this.cardId,
							// 	numQuestion:this.countpage,
							// 	account: 1
							// })).then(res => {
							// this.sum = res.data['sum(score)'];
							// this.account = res.data.count;
							setTimeout(() => {
								this.$router.push({
									//核心语句
									path: "/result", //跳转的路径
									query: {
										//路由传参时push和query搭配使用 ，作用时传递参数

										// type:this.part,
										// partName:this.part,
										account:this.account,
										menuId: this.menuId,
										unitsId:this.unitsId,
										unit:this.unit,
                    part:this.part
									}
								});
								}, 2000);
							// }, res => {
							// 	alertMsg("You must be connected to the internet.<br>Please connect and try again.");
							// });

						}, 2000);
					}else{//是最后一题错误
						this.answer=true;
						this.changered=true;this.soundsWrong=true;
						setTimeout(() => {
							this.answer=false;this.soundsWrong=false;
							for(var i=0;i<this.truelist.length;i++){
								this.space[i]=this.truelist[i];
							}
							this.changered=false;
							this.changeblue=true;
							// this.$axios.post(this.url, qs.stringify({
							// 	partName: this.part,
							// 	userId: this.getCookie('userId'),
							// 	// cardId: this.cardId,
							// 	numQuestion:this.countpage,
							// })).then(res => {
							// this.sum = res.data['sum(score)'];
							// this.account = res.data.count;
							setTimeout(() => {
								this.$router.push({
									//核心语句
									path: "/result", //跳转的路径
									query: {
										//路由传参时push和query搭配使用 ，作用时传递参数
										// type:this.part,
										// partName:this.part,
										account:this.account,
										menuId: this.menuId,
										unitsId:this.unitsId,
										unit:this.unit,
                    part:this.part
									}
								});
								}, 2000);
							// }, res => {
							// 	alertMsg("You must be connected to the internet.<br>Please connect and try again.");
							// });

						}, 2000);
				   }
				//!this.question
				}
				}else{//长度不一样错误
					// if(this.space.length>this.truelist.length){
						this.countpage += 1;
						this.zhezhao=true;
						if (this.countpage <= this.question) {//长度不一样错误不是最后一题
						this.answer=true;this.soundsWrong=true;
					    this.changered=true;
					    setTimeout(() => {
						this.answer=false;this.soundsWrong=false;
						this.space=[];
						for(var i=0;i<this.truelist.length;i++){
							this.space[i]=this.truelist[i];
						}
						this.changered=false;
						this.changeblue=true;

						setTimeout(() => {
							this.onef=true;
							this.space=[];
							this.changeblue=false;
							}, 2000);
					    }, 2000);
					}else{//长度不一样错误，是最后一题
						this.answer=true;this.soundsWrong=true;
						this.changered=true;
						setTimeout(() => {
						this.answer=false;this.soundsWrong=false;
						this.space=[];
						for(var i=0;i<this.truelist.length;i++){
							this.space[i]=this.truelist[i];
						}
						this.changered=false;
						this.changeblue=true;
							setTimeout(() => {
							this.$router.push({
								//核心语句
								path: "/result", //跳转的路径
								query: {
									//路由传参时push和query搭配使用 ，作用时传递参数
									// type:this.part,
									// partName:this.part,
									account:this.account,
									menuId: this.menuId,
									unitsId:this.unitsId,
									unit:this.unit,
                  part:this.part
								}
							});
							}, 2000);
						}, 2000);

				    }
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
    this.gamename=this.$route.query.name;
      if(this.part==='part1'){
        this.url1=this.url+'partBoss1';
      }else if(this.part==='part2'){
        this.url1=this.url+'partBoss1';
      }else if(this.part==='part3'){

      }
      if(this.gamename==''||this.gamename==undefined){
        this.gamename=localStorage.getItem('gamename')
      }else {
        localStorage.setItem('gamename',this.gamename);
      }
		this.menuId = this.$route.query.menuId; //接受参数关键代码
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
		// this.part = this.$route.query.type;
		//    if(this.part=='partBoss1'){
		// 	   this.url=this.url1;
		// 	}else if(this.part=='partBoss2'){
		// 		this.url=this.url2;
		// 	}
			   this.$axios.post(this.url1, qs.stringify({
			   menuDetailId:this.menuId,
			   })).then(res => {
				   for (let i in res.data) {
				        this.listBoss.push(res.data[i]); //属性
				    }
					//console.log(this.listBoss[0][0].name.split(''));
				   for(var i=0;i<this.listBoss.length-3;i++){
				   	var data1=this.listBoss[i][0].name.split('');
				   	this.listBoss[i][0].list = [];
				   	for(var u=0;u<data1.length;u++){
				   		this.listBoss[i][0].list.push({
				   			name: data1[u]
				   		})

				   	}
					}	//console.log(this.listBoss[0][0].list);
			   this.truelist =this.listBoss[this.countpage-1][0].list;
			   this.image=this.pic+this.listBoss[this.countpage-1][0].bg;
			   // this.cardId=this.listBoss[this.countpage-1][0].card_id;
			   this.audio=this.pic+this.listBoss[this.countpage-1][0].audio;
			   this.question=this.listBoss.length-3;
         this.shownumb=true;
         if (this.onef == true && this.shownumb==true) {
				setTimeout(() => {
						this.onef = false;
				        	// this.video = true;
				        	// this.action1 = true;

				}, 1500);
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


	    }
	};
</script>

<style scoped lang="less">
	.body {
		padding: 0;
		margin: 0;
	}

	.boss {
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
	.leftbox{
		width: 100%;
		display: inline-block;
	}
	.start{
		width: 30%;
		position: absolute;
		 z-index:2;
		 left: 36%;
		 top: -10%;
	}
	.rightbox{
		position: relative;
		width: 15%;
	    float: left;
	}
	.inputbarright{
		    width: 15%;
		    float: right;
		    display: inline-block;
		    margin-top: 9%;
            text-align: center;
	}
	.inputbar{
		    width: 56%;
			border: none;
		    margin: 8% 0 3% 20%;
			background-color: #FFF9CF;
			border-radius: 50px;
			// padding: 0.7rem;
			display: inline-block;
			text-align: center;
			height: 3rem;
			color: #007BB8;
	}
	.inputspan{
		    font-family: pepper;
		    font-size: 1.5rem;
			line-height: 100%;
			min-width: 0.5rem;
			display: inline-block;
	}
	.changeblue{
		color: white;
		background-color: #007BB8;
	}
	.changered{
		color: white;
		background-color: #DB7365;
	}
    .listbar{
		    width: 100%;
		    left: 2.5%;
		       top: 32%;
		       position: absolute;
	}
	.listbar2{
		    float: left;
		    position: relative;
		    width: 62%;
	}
	.leftimg{
	    width: 20%;
	    height: 100%;
	    float: left;
	    position: relative;
	    display: inline-block;
	}
	.answer-items{
		width: 9%;
		height: 2.2rem;
		margin: 12px 0 0 0.2rem;
		border-radius: 50%;
		border: none;
		color: white;
		font-size: 1.5rem;
		display: inline-block;
		font-family: pepper;
		background-color: #44CCC2;
		z-index: 2;
	}
	.answeritems{
		height: 2.2rem;
		line-height: 100%;
		padding-top: 5px;
	}
	.delete{
		background:none;
		border-style: none;
		border: none;
		background-size: cover;
		border-radius: 15px;
		 margin-left: -20px;
		 background-image: url(../../assets/image/deletebg.png);
		color: white;
		line-height: 100%;
		font-size: 1.2rem;
		padding: 10px 10px 10px 20px;
		font-family: pepper;
	}

	.space{
		background-color: #44CCC2;
		border-style: none;
		border-radius: 15px;
		color: white;
		       margin-top: 15px;
		       line-height: 100%;
		       font-size: 1.2rem;
		       padding: 10px;
		font-family: pepper;
	}
	.enter{
		background-color: #007BB8;
		border-style: none;
		border-radius: 15px;
		color: white;
		    font-size: 1.2rem;
			 padding: 10px;
		font-family: pepper;
		    margin-top: 12%;
		    height: 90px;
	}
	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.fontsize {
		font-family: pepper;
		color: white;
		bottom: 15%;
		left: 3%;
		position: absolute;
		font-size: 1rem;
		max-height: 100%;
		min-height: 60%;
		margin-left: 2%;
		background: none;
		border: none;
	}

	.fontsizes {
		font-family: kg;
		font-weight: bolder;
		color: #EA8C26;
		text-align: center;
		vertical-align: middle;
		margin-top: 22%;
		font-size: xx-large;
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
			-webkit-transform: rotate(2deg);
			transform: rotate(2deg);
		}

		75% {
			-webkit-transform: rotate(-2deg);
			transform: rotate(-2deg);
		}

		80% {
			-webkit-transform: rotate(2deg);
			transform: rotate(2deg);
		}

		85% {
			-webkit-transform: rotate(-2deg);
			transform: rotate(-2deg);
		}

		90% {
			-webkit-transform: rotate(2deg);
			transform: rotate(2deg);
		}

		95% {
			-webkit-transform: rotate(-2deg);
			transform: rotate(-2deg);
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
			-webkit-transform: rotate(2deg);
			transform: rotate(2deg);
		}

		75% {
			-webkit-transform: rotate(-2deg);
			transform: rotate(-2deg);
		}

		80% {
			-webkit-transform: rotate(2deg);
			transform: rotate(2deg);
		}

		85% {
			-webkit-transform: rotate(-2deg);
			transform: rotate(-2deg);
		}

		90% {
			-webkit-transform: rotate(2deg);
			transform: rotate(2deg);
		}

		95% {
			-webkit-transform: rotate(-2deg);
			transform: rotate(-2deg);
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

	.twomenu {
		padding-top: 18%;
	}
	.answer-items{
		    height: 1.5rem;
		    font-size: 1rem;
		    margin: 12px 0 0 0.1rem;
	}
	.answeritems{
		height: 1.5rem;
		line-height: 100%;
		padding-top: 5px;
	}
	.space{
		font-size: 1rem;
	}
	.delete{
		font-size: 1rem;
	}
	.enter{
		font-size: 1rem;
		    height:4rem;
	}
	}

	@media screen and (min-width: 482px)and(max-width: 569px) {

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
        .answer-items{
        	    height: 2rem;
        	    font-size: 1.2rem;
        }
		.answeritems{
			height: 2rem;
			line-height: 100%;
			padding-top: 5px;
		}
        .space{
        	font-size: 1rem;
        }
        .delete{
        	font-size: 1rem;
        }
        .enter{
        	font-size: 1rem;
        	    height:4rem;
        }
	}

	@media screen and (min-width: 1024px)and(max-width: 1600px) {
		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 15%;
			left: 8%;
			position: absolute;
			font-size: 1.3rem;
			max-height: 80%;
			min-height: 50%;
			margin-left: 2%;
			transform: scale(1.2);
		}

		.fontsizes {
			margin-top: 30%;
		}

		.twomenu {
			padding-top: 26%;
		}

		.inputbar{
			// padding: 1.2rem;
			margin: 15% 0 3% 20%;
		}
		.inputbarright{
			margin-top: 16%;
		}
		.answer-items{
			    height: 3.5rem;
			    margin: 12px 0 0 1%;
			    font-size: 2.3rem;
		}
		.answeritems{
			height: 3.5rem;
			line-height: 100%;
			padding-top: 5px;
		}
		.start{
			width: 30%;
			position: absolute;
			 z-index:2;
			 left: 36%;
			 top: 0%;
		}
		.listbar{
			top: 40%;
		}
		.space{
			font-size: 2rem;
		}
		.delete{
			font-size: 2rem;
		}
		.enter{
			font-size: 2rem;
			    height: 7.5rem;
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
    @media screen and (min-width: 736px) and (max-width:811px){
		.start{
			width: 30%;
			position: absolute;
			 z-index:2;
			 left: 36%;
			 top: -11%;
		}
		.fontsizes {
			margin-top: 17%;
		}
		.twomenu {
			padding-top: 18%;
		}
		.menulist{
		    margin: 5% 20%;
		}
		.listimg{
			width: 30%;
		}
		.chosen{
			left: 26%;
			width: 50%;
		}

	}
	@media screen and (min-width: 812px) and (max-width:895px) {
		.twomenu {
			padding-top: 14%;
		}
		.answer-items{
			    height: 2.5rem;
		}
		.answeritems{
			height: 2.5rem;
			line-height: 100%;
			padding-top: 5px;
		}
		.fontsizes {
			margin-top: 17%;
		}
		.listbar{
			top:35%;
		}
		.withcolor {
			height: 70%;
		}
		// .inputbar{
		// 	margin: 5% 0 3% 20%;
		// }
		// .inputbarright{
		// 	margin-top: 6%;
		// }
		.start{
			width: 30%;
			position: absolute;
			 z-index:2;
			 left: 36%;
			 top: -22%;
		}
	}
	@media screen and (min-width: 895px) and (max-width:1023px) {
        .withcolor {
			height: 70%;
		}
		.twomenu {
			padding-top: 14%;
		}
        .answer-items{
			    height: 2.5rem;
		}
        .answeritems{
        	height: 2.5rem;
        	line-height: 100%;
			padding-top: 5px;
        }
		.fontsizes {
			margin-top: 17%;
		}
		// .inputbar{
		// 	margin: 5% 0 3% 20%;
		// }
		// .inputbarright{
		// 	margin-top: 6%;
		// }
		.listbar{
			top:35%;
		}
		.start{
			width: 30%;
			position: absolute;
			 z-index:2;
			 left: 36%;
		     top: -22%;
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
      bottom: 15%;
      left: 8%;
      position: absolute;
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }
    .inputbar{
      height: 6rem;
    }

    .answer-items{
      height: 7rem;
      margin: 30px 0 0 0.5rem;
      font-size: 3.5rem;
    }
    .answeritems{
      height: 5rem;
      line-height: 100%;
      padding-top: 5px;
    }
    .inputspan{
      font-size: 3rem;
    }

    .listbar{
      top:35%;
    }
    .delete{
      line-height: 100%;
      font-size: 3rem;
      border-radius: 25px;

      padding: 20px 20px 30px 50px;
    }
    .space{
      font-size: 3rem;
      margin-left: 20%;
      padding: 30px;
      border-radius: 25px;
      margin-right: 20%;
    }
    .enter{
      font-size: 3rem;
      margin-left: 20%;
      border-radius: 25px;
      margin-right: 20%;
      padding: 30px;
      height:300px;
    }
    .start{
      width: 30%;
      position: absolute;
      z-index:2;
      left: 36%;
      top: 4%;
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
