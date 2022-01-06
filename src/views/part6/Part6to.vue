<template>
	<div class="part6to">
	<span id="gameplay">
	<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
	</span>
		<transition name="fades">
			<div class="contain" v-show="!resume">
				<img src="../../assets/image/rightback.png"  @click="gomemu" class="backbutton"/>
				 <img src="../../assets/image/help.png"  @click="help" class="helpbutton"/>
				<transition name="fade1">
					<div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
						<img src="../../assets/image/seasons.png"  style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;" v-if="bgimg[0].active">
						<img src="../../assets/image/4-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;" v-if="bgimg[1].active">
						<img src="../../assets/image/5-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[2].active">
						<img src="../../assets/image/6-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[3].active">
						<img src="../../assets/image/7-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[4].active">
						<img src="../../assets/image/8-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[5].active">
						<img src="../../assets/image/9-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[6].active">
						<img src="../../assets/image/10-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[7].active">
						<img src="../../assets/image/11-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[8].active">
						<img src="../../assets/image/12-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[9].active">
            <img src="../../assets/image/1-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[10].active">
            <img src="../../assets/image/2-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[11].active">
            <img src="../../assets/image/3-3bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[12].active">
            <img src="../../assets/image/4-4bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[13].active">
            <img src="../../assets/image/5-5bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[14].active">
            <img src="../../assets/image/6-6bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.5;height: 100%;display:block;position: absolute;" v-if="bgimg[15].active">
            <img src="../../assets/image/7-7bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[16].active">
            <img src="../../assets/image/8-8bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">

            <p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{this.question}}</p>
					</div>
				</transition>
				<transition name="fade1">
					<div v-if="!onef" style="width: 100%; height: 90%;text-align: center;display:block;position: fixed;">
						<img src="../../assets/image/seasons.png"  style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;" v-if="bgimg[0].active">
						<img src="../../assets/image/4-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;" v-if="bgimg[1].active">
						<img src="../../assets/image/5-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[2].active">
						<img src="../../assets/image/6-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[3].active">
						<img src="../../assets/image/7-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[4].active">
						<img src="../../assets/image/8-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[5].active">
						<img src="../../assets/image/9-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[6].active">
						<img src="../../assets/image/10-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[7].active">
						<img src="../../assets/image/11-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[8].active">
						<img src="../../assets/image/12-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[9].active">
            <img src="../../assets/image/1-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[10].active">
            <img src="../../assets/image/2-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[11].active">
            <img src="../../assets/image/3-3bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[12].active">
            <img src="../../assets/image/4-4bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[13].active">
            <img src="../../assets/image/5-5bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[14].active">
            <img src="../../assets/image/6-6bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.5;height: 100%;display:block;position: absolute;" v-if="bgimg[15].active">
            <img src="../../assets/image/7-7bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[16].active">
            <img src="../../assets/image/8-8bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">

            <div class="leftbox">
							<img :src="pic+bg"  style="width: 55%;"  @click="change"/>
							<audio  @canplay="getDuration"   ref="videos" id="videos" autoplay="autoplay" :src="audio"> </audio>
							<audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3"  ></audio>
							<audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3"  ></audio>
							<p v-if="!wordstyle" class="wordstyle">{{wordname}}<span v-bind:class="{spanline:spanline,red:changecolor}">{{fill}}</span></p>
							<p v-if="wordstyle" class="wordstyle"><span v-bind:class="{widthline:spanline, red:changecolor}">{{fill}}</span>{{wordname}}</p>
						</div>
						<div  class="rightbox"   v-bind:class="{rightbox1:!wordstyle}">
							<div v-for="li in list1" :key="li.id" class="windows" v-bind:class="{changeblue:li.changeblue,answer:li.issuccess,redbg:li.changered}" @click="fillansw(li)">
								{{li.name}}
							</div>
							<img src="../../assets/image/StarYellow.png" class="start2" v-if="showstart" />
						</div>
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
					<span class="fontsize">Look at the picture.
                             <br>Then‚ listen and choose the correct answer.</span>
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
				<img src="../../assets/image/score-rule.png" style="height: 100%;" v-if="ruleimg10"/>
				<img src="../../assets/image/boss-rule2.png" style="height: 100%;"  v-if="ruleimg8"/>
			</button>
			<div class="withcolor">
				<div class="close"  @click="pop">
					<img src="../../assets/image/cloce.png">
				</div>
				<img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/f.gif">

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
    // import $ from 'jquery';
	var qs = require('qs');
	export default {
		name: "part6to",
		watch: {
			'onef': function(newVal) {
				if (this.onef == true) {
					setTimeout(() => {
					// 	if (this.list1.length > 3) {
					//      this.wordstyle = 1;
					//  }else{
					// 	 this.wordstyle = 0;
					// }
					if (this.list1[0].show_id==1) {
					     this.wordstyle = 1;
					 }else{
							 this.wordstyle = 0;
						}
						 this.firstanswer=false;
					this.onef = false;

						// this.video = true;


					}, 2000);

				}
			},
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

		},
		data() {
			return {
			  level:'',
				popp: false,
				spanp:'',
				ruleimg8:false,
				ruleimg10:false,
				ruleimg4:false,
        duration:0,
				ruleimg15:false,
				ruleimg25:false,
				ruleimg12:false,
				list1: [
				],
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
				fill:'',
				bg:'',
				wordname:'ell',
        shownumb:false,
				action:false,
        part:'',
				audio:'',
				soundsWrong:false,
				soundscorrect:false,
				video:false,
				wordstyle:0,//题型1
				changecolor:0,
				spanline:true,
				fade: 'fade',
				nowtime: 0,
				falselist: [],
				flag2: true,
				showstart:false,
				unitsId:'',
				unit:'',
				menuId:'',
				question:8,
				listF: [],
				countpage: 1,
				account: 0,
				show: true,
				resume: false,
				id: '',
				pic: "",
				// url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseF',
				// pic: "http://demo11.embraiz.com/mtGameHK",
				url: '/exercise/',
        url1:'',
				//url: 'http://localhost:8080/mtGame/exercise/exerciseF',
				levels:0,
				page: this.page++,
				type: 'part6to',
				onef: true,
				firstanswer:false,
        gamename:'',
        timeurl:'/user/playTime',
			}
		},

		methods: {
      getDuration() {
        console.log(this.$refs.videos.duration); //此时可以获取到duration
        this.duration = this.$refs.videos.duration;
        this.video=true;
      },
            fillansw(li){
				if(this.fill==''||this.fill==undefined){
					this.spanline=false;
				    this.fill=li.name;
					if(li.score==1){
						this.countpage += 1;
						li.changeblue=1;
						if(this.firstanswer==false){
							this.account += 1;
						}
						this.showstart=true;this.soundscorrect=true;
						setTimeout(() => {
							this.showstart=false;this.soundscorrect=false;
							setTimeout(() => {
							if(this.countpage<=this.question){
							   this.onef = true;

							   li.changeblue=0;
							   this.spanline=true;
							   this.fill='';
							 //   this.$axios.post(this.url, qs.stringify({
							 //   	partName: 'partF',
							 //   	userId: this.getCookie('userId'),
							 //   	numQuestion: this.countpage,
								// account: 1
							 //   })).then(res => {
							 //   	this.list1 = res.data.Maplist1;
								// this.audio=this.pic+res.data.audio;
								// this.bg=res.data.bg;
								// this.wordname=res.data.wordname;
								// if (this.list1.length > 3) {
								//     this.wordstyle = 1;
								// }else{
								// 	 this.wordstyle = 0;
								// }
								this.list1 =this.listF[this.countpage-1];
								for(var i=0;i<this.list1.length;i++) {
									this.list1[i].changered=0;
									if(this.list1[i].score==1){
										this.audio=this.pic+this.list1[i].audio;
									}
								}
								this.bg=this.list1[0].bg;
								this.wordname=this.list1[0].wordname;
								if (this.list1[0].show_id==1) {
								    this.wordstyle = 1;
								 }else{
									this.wordstyle = 0;
								}
							   // }, res => {
							   // 	alertMsg("You must be connected to the internet.<br>Please connect and try again.");
							   // })
							}else{
								// this.$axios.post(this.url, qs.stringify({
								// 	partName: 'partF',
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
											this.$router.push({
												//核心语句
												path: "/result", //跳转的路径
												query: {
													//路由传参时push和query搭配使用 ，作用时传递参数
													// id: this.id,
													// account: this.account,
													// type: this.type,
													// sum: this.sum,
													type:this.type,
													partName:'partNameF',
													account:this.account,
													menuId: this.menuId,
													unitsId:this.unitsId,
													unit:this.unit,
                          part:this.part,
                          level:this.level,
												}
											});

										}, 1000);
							}

							}, 1000);
						}, 2000);
					}else if(li.score==0){
						li.issuccess=1;li.changered=1;this.soundsWrong=true;
						this.changecolor=1;
						this.firstanswer=true;
						setTimeout(() => {
							this.changecolor=0;li.issuccess=0;this.soundsWrong=false;this.fill='';
								this.spanline=true;
							// for(var i=0;i<this.list1.length;i++){
							// 	if(this.list1[i].score==1){
							// 		this.fill=this.list1[i].name;
							// 		this.list1[i].changeblue=1;
							// 		this.changecolor=0;
							//
							// 	}
							// }
							//setTimeout(() => {

								// if(this.countpage<=this.listF.length-3){
									     // this.onef = true;
								// for(var i=0;i<this.list1.length;i++){
								// 	if(this.list1[i].score==1){
								// 	this.list1[i].changeblue=0;
							 //           this.spanline=true;
							 //           this.fill='';
								// 	   }
								// }

	// 							this.list1 =this.listF[this.countpage-1];
	// 							for(var i=0;i<this.list1.length;i++) {
	// 								if(this.list1[i].score==1){
	// 									this.audio=this.pic+this.list1[i].audio;
	// 								}
	// 							}
	// 							this.bg=this.list1[0].bg;
	//
	// 							this.wordname=this.list1[0].wordname;
	// 							if (this.list1[0].show_id== 1) {
	// 							    this.wordstyle = 1;
	// 							 }else{
	// 								this.wordstyle = 0;
	// 							}

									  // }else{
									   	// this.$axios.post(this.url, qs.stringify({
									   	// 	partName: 'partF',
									   	// 	userId: this.getCookie('userId'),
									   	// 	numQuestion: this.countpage,
									   	//
									   	// })).then(res => {
									   	// 	this.sum = res.data['sum(score)'];
									   	// 	this.account = res.data.count;
									   	// 	}, res => {
									   	// 			alertMsg("You must be connected to the internet.<br>Please connect and try again.");
									   	// 	})
									   // 			setTimeout(() => {
									   // 				this.$router.push({
									   // 					//核心语句
									   // 					path: "/result", //跳转的路径
									   // 					query: {
									   // 						//路由传参时push和query搭配使用 ，作用时传递参数
									   // 						type:this.type,
									   // 						partName:'partNameF',
									   // 						account:this.account,
									   // 						menuId: this.menuId,
									   // 						unitsId:this.unitsId,
									   // 						unit:this.unit,
                     //             part:this.part
									   // 					}
									   // 				});
									   //
									   // 			}, 1000);
									   // }
							// }, 1000);

						}, 1000);
					}
				}
			},
			change() {
				if(this.onef == false){

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
			pop(){
				 this.popp = !this.popp;
			},
			help(){
				if(this.onef==false){
					this.spanp="Look at the picture.Then‚ listen and choose the correct answer.";
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
          part:this.part,
          level:this.level,
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
      this.part = this.$route.query.part;
			this.menuId = this.$route.query.menuId; //接受参数关键代码
      this.gamename=this.$route.query.name;
      this.level = this.$route.query.level;
      if(this.part==='part1'){
        this.url1=this.url+'exerciseFPart1';
      }else if(this.part==='part2'){
        this.url1=this.url+'exerciseFPart2';
      }else if(this.part==='part3'){
        this.url1=this.url+'exerciseF';
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
              this.listF.push(res.data.ListPart1[i]); //属性
              this.question = this.listF.length;
            }
          }else if(this.part==='part2'){
            for (let i in res.data.ListPart2) {
              this.listF.push(res.data.ListPart2[i]); //属性
              this.question = this.listF.length;
            }
          }else if(this.part==='part3'){
            for (let i in res.data) {
              this.listF.push(res.data[i]); //属性
              this.question = this.listF.length - 3;
            }
          }
						  // for (let i in res.data) {
						  //     this.listF.push(res.data[i]); //属性
						  // }
							//  this.question=this.listF.length-3;
               this.shownumb=true;
							this.list1 =this.listF[this.countpage-1];
							for(var i=0;i<this.list1.length;i++) {
								this.list1[i].changered=0;
								if(this.list1[i].score==1){
									this.audio=this.pic+this.list1[i].audio;
								}
							}
							//console.log(this.audio);
							this.bg=this.list1[0].bg;
							this.wordname=this.list1[0].wordname;
							if (this.list1[0].show_id == 1) {
				                 this.wordstyle = 1;
			                 }else{
								 this.wordstyle = 0;
							}
				if (this.onef == true &&this.shownumb==true) {
					setTimeout(() => {
					this.onef = false;

						// this.video = true;


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
	}
	.leftbox {
		width: 50%;
		float: left;
		margin-top: 7%;
		display: inline-block;
	}

	.rightbox {
		width: 50%;
		float: left;
		margin-top: 3%;
		display: inline-block;
	}
   .rightbox1 {
   	    // margin-left: -5%;
   }
	.windows {
		    background-color: #44ccc2;
		    width: 70%;
		    height: 4rem;
		    font-family: pepper;
		    font-size: 2rem;
		    color: white;
		    padding: 3px 5px;
		    border-radius: 50px;
		    margin-top: 1rem;
		    display: grid;
		    -ms-flex-line-pack: center;
		    align-content: center;
		    -webkit-box-align: center;
	}
	.windows1{
		    width: 45% !important;
		    display: inline-grid;
		    margin-right: 25px !important;
	}
	.wordstyle{
		    font-size: 2rem;
		    margin: 0;
			font-family: pepper;
		    color:#007BB8;
	}
    .spanline{
		    width: 6%;
	    	border-bottom: 4px solid #007BB8;
		    height: 100%;
		    display: inline-block;
	}
	.widthline{
		width: 5%;
		border-bottom: 4px solid #007BB8;
		height: 100%;
		display: inline-block;
	}
	.part6to {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
    background-color: #fcffd1;
    z-index: -1;
	}

	.about {
		display: flex;
		margin: 0px;
		width: 100%;
		height: 100%;
		text-align: center;
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
		display: none;
		position: absolute;
		transform: scale(1);
		margin-left: -60px;
		margin-top: -60px;
	}

	.imgsty {
		width: 66%;
		text-align: center;
		margin: 0 auto;
	}

	.showbg {
		display: block !important;
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
		    top: -15%;
		    width: 50%;
		    right: 7%;
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
		bottom: 6%;
		left: 3%;
		position: absolute;
		font-size: 1rem;
		max-height: 100%;
		min-height: 60%;
		//margin-left: 2%;
	}

	.fontsizes {
		font-family: kg;
		font-weight: bolder;
		color: #c5ca8b;
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

	.changeblue {
		background-color: #007BB8 !important;
	}
    .red{
		color: #DB7365 !important;
	}
	.redbg{
		background-color: #DB7365 !important;
	}
	.answer {
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
			// position: relative;
			// left: 0px;
		}

		50% {
			margin-left: 25px;
		}

		100% {

		}
	}

	@-webkit-keyframes myPlay {
		0% {

		}

		50% {
			margin-left: 25px;
		}

		100% {

		}
	}

	@-moz-keyframes myPlay {
		0% {

		}

		50% {
			margin-left: 25px;
		}

		100% {

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
			margin-top: 8%;
			margin-left: 5%;
		}

		.rightbox {
			width: 30%;
			margin-top: 7%;
		}
        .rightbox1{
        	width: 50%;
        }
		.windows {
			height: 2.5rem;
			width: 100%;
		}
        .windows1{
               // width: 35% !important;
               display: inline-grid;
               margin-right: 25px !important;
        }

        .start2 {
        	    right: 5%;
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

		.twomenu {
			padding-top: 18%;
		}

		.leftbox {
			margin-top: 3%;
			margin-left: 5%;
		}

		.rightbox {
			width: 26%;
		    margin-top: 6%;
		}
        .rightbox1{
        	width: 50%;
        }
		.windows {
			height: 2.5rem;
			width: 95%;
		}
        .windows1{
		       // width: 36% !important;
		       display: inline-grid;
		       margin-right: 25px !important;
		}
		.leftbox1 {
			margin-top: 0 !important;
		}


	}

	@media screen and (min-width: 1024px) and (max-width: 1354px) {

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
			font-size: x-large;
			max-height: 80%;
			min-height: 50%;
			margin-left: 2%;
			transform: scale(1.2);
		}

		.leftbox {
			margin-top: 16%;
		}

		.drag-drop-demo .window {
			margin: 50px 30px;
			border-radius: 40px;
			border: 0.6rem solid #44ccc2;
			box-shadow: 0.4rem 0.4rem 0.1rem #057bb8;
		}

		.rightbox {
			margin-top: 8%;
		}

		.windows {
			height: 6rem;
			border-radius: 65px;
			font-size: 3rem;
		    margin: 3rem 1px 0 15px;
		}
        .wordstyle{
			font-size: 3rem;
		}

		.imgsty1 {
			width: 66% !important;
		}

		.leftbox1 {
			margin-top: 1% !important;
		}

        .start2 {
        	top: 5%;
			right: 5%;
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
			font-size: x-large;
			max-height: 80%;
			min-height: 50%;
			margin-left: 2%;
			transform: scale(1.2);
		}

		.leftbox {
			margin-top: 16%;
		}

		.drag-drop-demo .window {
			margin: 50px 30px;
			border-radius: 40px;
			border: 0.6rem solid #44ccc2;
			box-shadow: 0.4rem 0.4rem 0.1rem #057bb8;
		}

		.rightbox {
			margin-top: 12%;
		}

		.windows {
			height: 6rem;
			border-radius: 65px;
			font-size: 3rem;
		    margin: 3rem 1px 0 15px;
		}
	    .wordstyle{
			font-size: 3rem;
		}

		.imgsty1 {
			width: 66% !important;
		}

		.leftbox1 {
			margin-top: 1% !important;
		}

	    .start2 {
	    	top: 5%;
			right: 5%;
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
    @media screen and (min-width: 737px) and (max-width:811px){
		.rightbox{
			margin-top:2.5%;
		}
		.fontsizes {
			margin-top: 17%;
		}
		.twomenu {
			padding-top: 18%;
		}
		.leftbox {
			margin-top: 2.5%;
		}
	}

	@media screen and (min-width: 812px) and (max-width:895px) {

		.twomenu {
			padding-top: 14%;
		}

		.fontsizes {
			margin-top: 17%;
		}

		.leftbox {
			margin-top: 3%;
		}

		.drag-drop-demo .window {
			width: 30%;
		}

		.leftbox1 {
			margin-top: 0 !important;
		}

        .start2 {
            top: -25%;
        }
		.rightbox{
			// margin-top: 5%;
			margin-left: 0;
		}
		.withcolor {
			height: 70%;
		}
	}
	@media screen and (min-width: 895px) and (max-width:1023px){
		.twomenu {
			padding-top: 14%;
		}

		.fontsizes {
			margin-top: 17%;
		}

		.leftbox {
			margin-top: 3%;
		}

		.drag-drop-demo .window {
			width: 30%;
		}

		.leftbox1 {
			margin-top: 0 !important;
		}

		.start2 {
		    top: -25%;
		}
		.rightbox{
			margin-top: 5%;
			margin-left: 0;
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
      bottom: 15%;
      left: 8%;
      position: absolute;
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }

    .leftbox {
      margin-top: 1%;
    }

    .drag-drop-demo .window {
      margin: 50px 30px;
      border-radius: 40px;
      border: 0.6rem solid #44ccc2;
      box-shadow: 0.4rem 0.4rem 0.1rem #057bb8;
    }

    .rightbox {
      margin-top: 5%;
    }

    .windows {
      height: 8rem;
      border-radius: 65px;
      font-size: 3rem;
      margin: 5rem 1px 0 15px;
    }
    .wordstyle{
      font-size: 3rem;
    }

    .imgsty1 {
      width: 66% !important;
    }

    .leftbox1 {
      margin-top: 1% !important;
    }

    .start2 {
      top: -27%;
      right: 7%;
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
