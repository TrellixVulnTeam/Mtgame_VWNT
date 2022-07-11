<template>
	<div class="part2to">
		<span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic">
        <source  src="../../assets/video/gamemusic.mp3"></audio>
      </span>
		<transition name="fades">

			<div class="contain" v-show="!resume">
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
            <p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{this.question}}</p>
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

            <div  v-if="zhezhao" style="width: 100%; height: 110%;display:block;position: absolute;opacity: 0;z-index: 100;"></div><!-- 遮罩禁止重复点击作用 -->
						<div class="alllist" id="imgBox">
							<audio  @canplay="getDuration"   ref="videos0" id="videos0" autoplay="autoplay" :src="audio"></audio>
							<audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3" ></audio>
							<audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3" ></audio>
							<div class="imgsty" v-for="(li,index) in list1"  :key="index" v-bind:class="{ imgwidth: li.width , imgwidth3: li.margin ,imgwidth2: li.width2,answer: li.issuccess,sacle:li.bigtrue,changewi:li.changwidth,changecolor:li.showbg}">
								<div class="aa">
								<img :src="li.bg" @load="loadsize" class="imgsty1" @click.prevent="playAudio(index)"  v-bind:class="{ imgwidth1: li.width1,opciay:li.liopciay }">
								</div><!-- <span  v-html="list1[index].showbg"></span> li.showbg-->
								<div  class="bb">
								<img src="../../assets/image/StarOrange.png" class="start" v-show="li.showbg" />
							    </div>
							</div>
							<canvas id="canvas" style="position: absolute;left:0;top:0;z-index: 99;width: 100%;height: 105%;"
                @click="xy($event)" @mousedown="canvasDown($event)" @mouseup="canvasUp($event)" @mousemove="canvasMove($event)"
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

          <!-- <img src="../../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
					<span class="fontsize">Listen and circle the correct picture.</span>
					<div @click="$tips(true);changesett()">
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
					<div @click="$tips(true);change()">
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
			<p class="spanp">{{spanp}}</p>
			<button class="roleimg">
				<img src="../../assets/image/score-rule.png" style="height: 100%;" v-if="ruleimg10"/>
				<img src="../../assets/image/boss-rule2.png" style=" height: 100%;"  v-if="ruleimg8"/>
			</button>
			<div class="withcolor oringe">
				<div class="close"  @click="pop">
					<img src="../../assets/image/cloce.png">
				</div>
				<img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/b.gif">

			</div>
		</div>
		<transition name="fades">
			<div class="about" v-show="resume">
				<div class="twomenu">
					<div>
						<!-- <audio autoplay="autoplay"><source src="../../assets/video/11532.mp3"></audio> -->
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
	//import draggable from 'vuedraggable';
	var qs = require('qs');
	export default {
		name: "part2to",

		watch: {
			'onef': function(newVal) {
				if (this.onef === true) {
					setTimeout(() => {
						this.onef = false;
						this.list1 =this.listB[this.countpage-1];
						for(var i=0;i<this.list1.length;i++){
							this.list1[i].bg=this.pic+this.list1[i].bg
							if(this.list1[i].score==1){
								this.audio=this.pic+this.list1[i].audio;
							}
						}
						if (this.list1.length > 4 && this.list1.length < 7) {
							for (var i = 0; i < this.list1.length; i++) {
								this.list1[i].width = 1;
								this.list1[i].width3 = true;
							}
						}
						if (this.list1.length > 7) {
							for (var i = 0; i < this.list1.length; i++) {
								this.list1[i].margin = 1;
							}
						}
						if (this.list1.length == 2) {
							for (var i = 0; i < this.list1.length; i++) {
								this.list1[i].width1 = 1;
								this.list1[i].width2 = 1;

							}
						}
					}, 1000);
				}else {
          setTimeout(() => {
            const canvas = document.getElementById('canvas'); // 初次进来初始化画布
            let imgBox = document.getElementById('imgBox');
            let imgsty = document.getElementsByClassName('imgsty');
            if(imgBox.clientHeight){
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
              this.zhezhao=false;
            }
          }, 1000);
        }
			},
			'video': function(newVal) {
				if (this.video == true) {
				  // console.log('1');
             this.$refs.videos0.play();
             this.video =false;
			        // setTimeout(() => {
              //   this.$refs.videos.pause();
              //
			        // }, this.duration*1000);
				 }
			},
			// 'action1': function(newVal) {
			//     if (this.action1 == true) {
			//         setTimeout(() => {
			//          this.action1=false;
			//         }, 5000);
			//    }
			// }
		},
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
				countpage: 1,
        shownumb:false,
				list1: [],
				listB: [],
        duration:0,
				action:false,
         gamename:'',
         timeurl:'/user/playTime',
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
				// action1:false,
				audio:'',
				question:8,
				test:true,
				video:false,
				soundsWrong:false,
				soundscorrect:false,
        playing:false,
				unitsId:'',
				unit:'',
				menuId:'',
				// url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseB',
				pic:"",
				// pic:"http://demo11.embraiz.com/mtGameHK",
				url: '/exercise/',
        url1:'',
        part:'',
				//url: 'http://localhost:8080/mtGame/exercise/exerciseB',
				onef: true,
        level:'',
				fade: 'fade',
				levels:0,
				zhezhao:true,
				// flag2: true,
				show: true,
				resume: false,
				id: '',
				// page: this.page++,
				account: 0,
				type: 'part2to',
				sum:0,
				canvasMoveUse: true,
				centerP: [], // 存储数组图片中心点的位置
				// 配置参数
				config: {
					lineWidth: 3,
					lineColor: "#44ccc2",
					shadowBlur: 1
				},
				canvasObj: null,
				canvasH: null,
				context: {},
			}
		},
		mounted() {

			// setTimeout(() => {
      //
			// 	const canvas = document.getElementById('canvas'); // 初次进来初始化画布
			// 	let imgBox = document.getElementById('imgBox');
			// 	let imgsty = document.getElementsByClassName('imgsty');
			// 	if(imgBox.clientHeight){
      //     for (let i=0; i<imgsty.length; i++) {
			// 		let coreP = { // 获取图片中心点位置
			// 			corePx: imgsty[i].offsetLeft + imgsty[i].offsetWidth/2,
			// 			corePy: imgsty[i].offsetTop + imgsty[i].offsetHeight/2
			// 		}
			// 		this.centerP.push(coreP);
      //     // console.log(this.centerP);
			// 	}
			// 	this.canvasObj = canvas;
      //
      //       this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
      //       canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
      //       canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
      //       this.context = canvas.getContext('2d');
      //
			// 	this.setCanvasStyle();
      //   // console.log(this.context);
			// 	this.zhezhao=false;
      //   }
			// }, 3000);

		},
		methods: {
		  playAudio(li){
        console.log(li);
      },
      xy($event){
		    if (this.playing === false){
		      this.playing=true;
          let audio = new Audio();
          for(let i=0; i<this.centerP.length; i++){
            if(this.centerP[i].corePx-80<=$event.offsetX&&$event.offsetX<=this.centerP[i].corePx+80&&this.centerP[i].corePy-80<=$event.offsetY&&$event.offsetY<=this.centerP[i].corePy+80){
              audio.src = this.pic+this.list1[i].audio;
            }
          }
          audio.play();
          setTimeout(() => {
            this.playing=false;
          },2000);
        }

      },
      loadsize(){
        // console.log('11111111');
        // const canvas = document.getElementById('canvas'); // 初次进来初始化画布
        // let imgBox = document.getElementById('imgBox');
        // let imgsty = document.getElementsByClassName('imgsty');
        // if(imgBox.clientHeight){
        //   for (let i=0; i<imgsty.length; i++) {
        //     let coreP = { // 获取图片中心点位置
        //       corePx: imgsty[i].offsetLeft + imgsty[i].offsetWidth/2,
        //       corePy: imgsty[i].offsetTop + imgsty[i].offsetHeight/2
        //     }
        //     this.centerP.push(coreP);
        //     // console.log(this.centerP);
        //   }
        //   this.canvasObj = canvas;
        //
        //   this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
        //   canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
        //   canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
        //   this.context = canvas.getContext('2d');
        //
        //   this.setCanvasStyle();
        //   // console.log(this.context);
        //   this.zhezhao=false;
        // }
      },
      getDuration() {
        // console.log(this.$refs.videos.duration); //此时可以获取到duration
        this.duration = this.$refs.videos0.duration;
        this.video =true;
      },
      updateTime(e) {
        this.currentTime = e.target.currentTime;  //获取audio当前播放时间
        // console.log(this.currentTime);
      },

      isPc () {
			    const userAgentInfo = navigator.userAgent;
			    const Agents = ['Android', 'iPhone','iPhoneX', 'iPhoneXR','SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
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
				    // if(this.isPc()) {
					   canvasX = e.clientX - t.parentNode.offsetLeft;
					   canvasY = e.clientY - t.parentNode.offsetTop;
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
				//console.log(e);
				this.context.closePath();
				let isSelect = false; // 用于判断是否选中了选项
				let anwserIndex;
				let successIndex;
				let anwserList = []; // 用于判断答题时圈中了几个选项
				let imgsty = document.getElementsByClassName('imgsty');

				this.centerP.forEach((item, index) => {
					if (this.context.isPointInPath(item.corePx, item.corePy)) { // 获取答题选项下标
						anwserIndex = index;
					}
					//var score=this.list1[index].score;
					//console.log(this.list1[index].score);
					// console.log(this.list1[0]['score']);
				    if (this.context.isPointInPath(item.corePx, item.corePy)) {
						isSelect = true;
						anwserList.push(item);
					}
				});

					for(var i=0;i<this.list1.length;i++){
						// var score=this.list1[i].score;
						if (this.list1[i].score===1) { // 获取正确选项下标
						successIndex = i;
					    }
					}

				if (!isSelect) { // 没有选中
					this.canvasObj.height = this.canvasH;
					this.setCanvasStyle();
				} else {

					if (anwserList.length === 1) { // 答题时只有圈中一个选项才能进行判断
					     this.zhezhao=true;
					// 	 console.log(this.list1);
					//console.log(this.list1[anwserIndex]['score']);
						if (this.list1[anwserIndex].score===1) {
							/*回答正确在这里写效果*/
							this.canvasObj.height = this.canvasH;

							this.account += 1;
							for (var i = 0; i < this.list1.length; i++) {
								this.list1[i].changwidth = 1;
								this.list1[i].liopciay = 1;
								//li.bigtrue = 1;
							}
							this.list1[anwserIndex].changwidth = 0;
							this.list1[anwserIndex].liopciay = 0;
							this.list1[anwserIndex].showbg = 1;
							this.soundscorrect=true;
							//console.log(this.listB.length);
							if (this.countpage === this.listB.length) {
								setTimeout(() => {
									this.soundscorrect=false;
									this.$router.push({
										//核心语句
										path: "/result", //跳转的路径
										query: {
											//路由传参时push和query搭配使用 ，作用时传递参数
											// id: this.id,
											// account: this.account,
											// type: this.type,
											// sum:this.sum,
											type:this.type,
											partName:'partNameB',
											account:this.account,
											menuId: this.menuId,
											unitsId:this.unitsId,
											unit:this.unit,
                      part:this.part,
                      level:this.level,
										}
									});

								},2000);
							} else {
								setTimeout(() => {
								this.onef = true;
								this.soundscorrect=false;
								this.countpage += 1;
								this.centerP=[];
								}, 2000);
							}

						} else {
							/*回答错误在这里写效果*/
							this.soundsWrong=true;
							this.canvasObj.height = this.canvasH;
							for (var i = 0; i < this.list1.length; i++) {
								this.list1[anwserIndex].issuccess = 1;
								this.list1[i].changwidth = 1;
								if (this.list1[i].score == 1) {
									this.list1[i].changwidth = 0;
								}else{
									this.list1[i].changwidth = 1;
								}
							}
							setTimeout(() => {
								this.soundsWrong=false;
								for (var i = 0; i < this.list1.length; i++) {
									this.list1[i].liopciay = 1;
									if (this.list1[i].score == 1) {
										this.list1[i].liopciay = 0;
										this.list1[i].bigtrue = 1; //放大
									}
								}


								if (this.countpage == this.listB.length) {
									setTimeout(() => {
										this.$router.push({
											//核心语句
											path: "/result", //跳转的路径
											query: {
												//路由传参时push和query搭配使用 ，作用时传递参数
												// id: this.id,
												// account: this.account,
												// type: this.type,
												// sum:this.sum,
												type:this.type,
												partName:'partNameB',
												account:this.account,
												menuId: this.menuId,
												unitsId:this.unitsId,
												unit:this.unit,
                        part:this.part,
                        level:this.level,
											}
										});

									},2000);
								} else {
									setTimeout(() => {
									this.onef = true;
									this.countpage += 1;
									this.centerP=[];

									}, 2000);
								}

							}, 2000);
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

        if(997<document.body.offsetWidth&&document.body.offsetWidth<1025){
          this.context.lineWidth =12;
          this.context.shadowBlur = this.config.shadowBlur;
          this.context.shadowColor = this.config.lineColor;
          this.context.strokeStyle = this.config.lineColor;
        }else if(document.body.offsetWidth>1025){
          this.context.lineWidth = 18;
          this.context.shadowBlur = this.config.shadowBlur;
          this.context.shadowColor = this.config.lineColor;
          this.context.strokeStyle = this.config.lineColor;
        }else if(997>document.body.offsetWidth&&document.body.offsetWidth>895){
          this.context.lineWidth = 8;
          this.context.shadowBlur = this.config.shadowBlur;
          this.context.shadowColor = this.config.lineColor;
          this.context.strokeStyle = this.config.lineColor;
        }else{
          this.context.lineWidth = this.config.lineWidth;
          this.context.shadowBlur = this.config.shadowBlur;
          this.context.shadowColor = this.config.lineColor;
          this.context.strokeStyle = this.config.lineColor;
        }
			},
// 			answer(li, index,event) {
// 				event.stopPropagation();
// 				this.zhezhao=true;
// 				if (li.score == 1) {
// 					this.account += 1;
// 					for (var i = 0; i < this.list1.length; i++) {
// 						this.list1[i].changwidth = 1;
// 						this.list1[i].liopciay = 1;
// 						//li.bigtrue = 1;
// 						li.changwidth = 0;
// 						li.liopciay = 0;
//
// 					}
// 					li.showbg = 1;this.soundscorrect=true;
// 					//console.log(this.listB.length);
// 					if (this.countpage == this.listB.length) {
// 						setTimeout(() => {
// 							this.soundscorrect=false;
// 							this.$router.push({
// 								//核心语句
// 								path: "/result", //跳转的路径
// 								query: {
// 									//路由传参时push和query搭配使用 ，作用时传递参数
// 									// id: this.id,
// 									// account: this.account,
// 									// type: this.type,
// 									// sum:this.sum,
// 									type:this.type,
// 									partName:'partNameB',
// 									account:this.account,
// 									menuId: this.menuId,
// 									unitsId:this.unitsId,
// 									unit:this.unit
// 								}
// 							});
//
// 						},2000);
// 					} else {
// 						setTimeout(() => {
// 						this.onef = true;
// 						this.soundscorrect=false;
// 						this.countpage += 1;
// 						}, 2000);
// 					}
//
// 				} else {
// 					//li.color=true;
// 					this.soundsWrong=true;
// 					for (var i = 0; i < this.list1.length; i++) {
// 						li.issuccess = 1;
// 						this.list1[i].changwidth = 1;
// 						if (this.list1[i].score == 1) {
// 							this.list1[i].changwidth = 0;
// 						}else{
// 							this.list1[i].changwidth = 1;
// 						}
// 					}
// 					setTimeout(() => {
// 						this.soundsWrong=false;
// 						for (var i = 0; i < this.list1.length; i++) {
// 							this.list1[i].liopciay = 1;
// 							if (this.list1[i].score == 1) {
// 								this.list1[i].liopciay = 0;
// 								this.list1[i].bigtrue = 1; //放大
// 							}
// 						}
//
//
// 						if (this.countpage == this.listB.length) {
// 							setTimeout(() => {
// 								this.$router.push({
// 									//核心语句
// 									path: "/result", //跳转的路径
// 									query: {
// 										//路由传参时push和query搭配使用 ，作用时传递参数
// 										// id: this.id,
// 										// account: this.account,
// 										// type: this.type,
// 										// sum:this.sum,
// 										type:this.type,
// 										partName:'partNameB',
// 										account:this.account,
// 										menuId: this.menuId,
// 										unitsId:this.unitsId,
// 										unit:this.unit
// 									}
// 								});
//
// 							},2000);
// 						} else {
// 							setTimeout(() => {
// 							this.onef = true;
// 							this.countpage += 1;
// 							}, 2000);
// 						}
//
// 					}, 1000);
// 				}
// 			},
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
						 if (!this.resume) {
						 	setTimeout(() => {
						 		const canvas = document.getElementById('canvas'); // 初次进来初始化画布
						 		let imgBox = document.getElementById('imgBox');
						 		this.canvasObj = canvas;
						 		this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
						 		canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
						   		canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
						   		this.context = canvas.getContext('2d');
						 	  	this.setCanvasStyle();
							  	this.zhezhao=false;
						 	}, 2100);
						 }
                    }, 1000);
				}

			},
			sound(){
				this.show=!this.show;

				if(this.show==false){
					 // this.$refs.MusicPlay.paused();
            // partmusic.pause();
					 localStorage.setItem("gamemusic", "false");
				}else{
					// this.$refs.MusicPlay.play();
           // partmusic.play();
					 localStorage.setItem("gamemusic", "true");
				}
			},
			pop(){
				 this.popp = !this.popp;
			},
			help(){
				if(this.onef===false){
					this.spanp="Listen and circle the correct picture.";
				this.popp = !this.popp;
				if( this.list1[0].rank===0){
					this.ruleimg8=true;this.ruleimg10=false;
				}else if( this.list1[0].rank===1){
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
			bodyScroll(event) {
			event.preventDefault();
			},
		},
		destroyed() {
		document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
     window.removeEventListener('popstate',this.gomemu,false);
		},
		created() { //生命周期里接收参数
      console.log(this.$route.query);
        this.pic=this.$axios.defaults.baseURL2;
				this.unit = this.$route.query.unit;
				this.part = this.$route.query.part;
				this.unitsId=this.$route.query.unitsId;
				this.menuId = this.$route.query.menuId; //接受参数关键代码
        this.gamename=this.$route.query.name;
        this.level = this.$route.query.level;
      if(this.part==='part1'){
        this.url1=this.url+'exerciseBPart1';
      }else if(this.part==='part2'){
        this.url1=this.url+'exerciseBPart2';
      }else if(this.part==='part3'){
        this.url1=this.url+'exerciseB';
      }
      if(this.gamename===''||this.gamename===undefined){
        this.gamename=localStorage.getItem('gamename')
      }else {
        localStorage.setItem('gamename',this.gamename);
      }
        var timestamp = (new Date()).getTime();
        localStorage.setItem('startTimeid',timestamp);
				for(var i=0;i<this.bgimg.length;i++){
					this.bgimg[i].active = this.unit === this.bgimg[i].spring;
				}
				this.show = localStorage.getItem('gamemusic') !== "false";

				this.$axios.post(this.url1, qs.stringify({
				   menuDetailId: this.menuId,
				})).then(res => {
          // if(this.part==='part1'){
          //   for (let i in res.data.ListBPart1) {
          //     this.listB.push(res.data.ListBPart1[i]); //属性
          //   }
          // }else if(this.part==='part2'){
          //   for (let i in res.data.ListBPart2) {
          //     this.listB.push(res.data.ListBPart2[i]); //属性
          //   }
          // }else if(this.part==='part3'){
            for (let i in res.data.ListB) {
              this.listB.push(res.data.ListB[i]); //属性
            }
          // }
					 this.question=this.listB.length;
           this.shownumb=true;
					 this.list1 =this.listB[this.countpage-1];
					for(var i=0;i<this.list1.length;i++){
						this.list1[i].bg=this.pic+this.list1[i].bg
            //this.list1[i].audio=this.pic+this.list1[i].audio
						if(this.list1[i].score===1){
							this.audio=this.pic+this.list1[i].audio;
						}
					}
          console.log(this.list1);
					if (this.onef === true && this.shownumb===true) {

					if (this.list1.length > 4 && this.list1.length < 7) {
						for (var i = 0; i < this.list1.length; i++) {
							this.list1[i].width = 1;
							this.list1[i].width3 = true;
						}
					}
					if (this.list1.length > 7) {
						for (var i = 0; i < this.list1.length; i++) {
							this.list1[i].margin = 1;
						}
					}
					if (this.list1.length === 2) {
						for (var i = 0; i < this.list1.length; i++) {
							this.list1[i].width1 = 1;
							this.list1[i].width2 = 1;
						}
					}
          setTimeout(() => {
				      	this.onef = false;

					}, 1000);
				}
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
	}

	.part2to {
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
    .aa{
		width: 94%;
		height: 94%;
		margin:3%;
		border-radius:60px;
		position: absolute;
	}
	.bb{
		width: 100%;
		height: 100%;
		position: absolute;
		    z-index: 2;
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
		width: auto;
		    height: 100%;
		    text-align: center;
		    margin: 0 auto;
			transform: scale(1.4);
	}

	.alllist {
		height: 90%;
		// margin: 0 auto;
		margin: 0px 10%;
		margin-top: 0%;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		justify-content: center;
		display: flex;
		position: relative;
		text-align: center;
	}

	.imgsty {
		background-color: #FBFFD0;
		width: 29%;
		height: 34%;
		position: relative;
		border-radius: 40px;
		//position: relative;
		//background-image: url(../../assets/image/star3.gif);
		margin: 15px 15px 0 15px;
		// display: flex;
		border: 0.5rem solid #44ccc2;
		box-shadow: 0.3rem 0.3rem  #057bb8;
		text-align: center;
		align-content: center;
		align-items: center;
		vertical-align: middle;
	}

	// .imgsty {
	// 	width: auto;
	// 	height: 100%;
	// 	text-align: center;
	// 	margin: 0 auto;
	// }
	.imgsty1 {
		width: auto;
		height: 100%;
		text-align: center;
		margin: 0 auto;
	}

	.opciay {
		opacity: 0.5;
	}

	.imgwidth {
		width: 23%;
		height: 30%;
		margin-top: 25px;
		border-radius: 35px;
	}

	.imgwidth1 {
		width: 70%;
		height: 96%;
	}

	.imgwidth2 {
		margin: 0 auto;
		top: 28%;
		position: relative;
		height: 46%;
		width: 40%;
		    border: 0.5rem solid #44ccc2;
		    border-radius: 45px;
		    box-shadow: 0.4rem 0.4rem  #057bb8;

	}

	.imgwidth3 {
		width: 18% !important;
		margin: 46px 7px 0 7px !important;
		border-radius: 20px;
		border: 0.3rem solid #44ccc2;
		-webkit-box-shadow: 0.3rem 0.3rem  #057bb8;
		box-shadow: 0.2rem 0.2rem  #057bb8;
	}

	.changewi {
		transform: scale(0.9);
	}

	// .showbgs {
	// 	display: block;
	// }
    .showbgs1{
		    left: 67px;
		    position: absolute;
		    width: 80%;
		    margin-left: -22%;
		    display: inline-block;
		    margin-top: -19%;
	}
	.showbgs2{
		position: absolute;
		    width: 30%;
		    margin-left: -23%;
		    display: inline-block;
		    margin-top: -10%;
	}
	.sacle {
		border: 0.5rem solid #007BB8 !important;
		box-shadow: 0.3rem 0.3rem #085D77 !important;
		 transform: scale(1.1);
	}
    .changecolor{
		border: 0.5rem solid #007BB8 !important;
		box-shadow: 0.3rem 0.3rem  #085D77 !important;
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
		color: #EA8C26;
		// position: sticky;
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
		border-color: #EB5B6B !important;
		box-shadow:   0.3rem 0.3rem #AC1734 !important;
		animation: myPlay 0.7s 0s infinite alternate;
		animation-timing-function: linear;
		animation-iteration-count: 1;

		-webkit-animation: myPlay 0.7s 0s infinite alternate;
		-webkit-animation-timing-function: linear;
		-webkit-animation-iteration-count: 1;

		-moz-animation: myPlay 0.7s 0s infinite alternate;
		-moz-animation-timing-function: linear;
		-moz-animation-iteration-count: 1;
		-o-animation: myPlay 0.7s 0s infinite alternate;
		-o-animation-timing-function: linear;
		-o-animation-iteration-count: 1;
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

	@media screen and (min-width: 479px) and (max-width: 569px) {

         .showbgs1{
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

		.imgsty {
			width: 25%;
			height:35%;
		}

		.alllist {
			height:90%;
			margin: 0px 10px;
			margin-top: 0%;
		}
        .imgwidth {
        	width: 22% !important;
        	height:32%;
        	border-radius: 30px;
        }
		.imgwidth2 {
			top: 20%;
			position: relative;
			height: 50%;
			width: 35%;
		}

		.imgwidth3 {
			width: 18% !important;
			margin: 50px 7px 0 7px !important;
			border-radius: 20px;
			border: 0.3rem solid #44ccc2;
			-webkit-box-shadow: 0.3rem 0.3rem  #057bb8;
			box-shadow: 0.2rem 0.2rem  #057bb8;
		}
	}

	@media screen and (min-width: 1024px)and (max-width: 1600px) {
		// .start {
		// 	margin-left: -27%;
		// }
        .showbgs1{
        	margin-left: 40px;
        }
		.fontsizes {
			margin-top: 30%;
		}
		.twomenu {
			padding-top: 26%;
		}

		.alllist {
			margin: 0 0%;
			margin-top: 3%;
			height: 90%;
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

		.imgsty {
			background-color: #FCFFD1;
			width: 29%;
			height:32%;
			position: relative;
			border-radius: 65px;
			//background-image: url(../../assets/image/star3.gif);
			margin: 28px 28px 0 28px;
			// display: flex;
			border: 0.8rem solid #44ccc2;
			box-shadow: 0.6rem 0.6rem  #057bb8;
			text-align: center;
			align-content: center;
			align-items: center;
			vertical-align: middle;
		}
        .sacle {
        	border: 0.9rem solid #007BB8 !important;
        	box-shadow: 0.6rem 0.6rem  #085D77 !important;
        	 transform: scale(1.1);
        }
// 		.pause {
// 			top: -20%;
// 		}
//
// 		.repeat {
// 			top: -20%;
// 		}
//
		.imgwidth {
			width: 23%;
			 height: 30%;
			margin: 30px;
			margin-top: 5%;
			border-radius: 60px;
		}

		.imgwidth2 {
			top: 25%;
			position: relative;
			height: 35%;
			width: 34% !important;
			       border: 0.8rem solid #44ccc2;
			       border-radius: 60px;
			       -webkit-box-shadow: 0.6rem 0.6rem #057bb8;
			       box-shadow: 0.6rem 0.6rem  #057bb8;


		}

		.imgwidth3 {
			width: 18% !important;
			border-radius: 30px;
			margin: 120px 15px 0 16px !important;
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

		 .alllist {
		 	margin: 10px 60px;
		 }
		 .imgwidth{
			 width: 23%;
			 height: 30%;
			 margin-top: 15px;
		 }

		 .imgwidth2{
		 	width: 32%;
		 	height:40%;
		 }
	}
	@media screen and (min-width: 812px) and (max-width:895px)  {
		.alllist {
			margin: 0px 145px;
		}
         .showbgs1{
         	margin-left: -23%;
			margin-top: -15%;
         }
		.twomenu {
			padding-top: 14%;
		}
		.fontsizes {
			margin-top: 17%;
		}
		.imgwidth{
			width: 23%;
			 height: 30%;
			 margin-top: 25px;
		}

		.imgwidth1{
		 height: 95%;
		}
		.withcolor {
			height: 70%;
		}
	}
	@media screen and (min-width: 895px) and (max-width:1023px) {
		.alllist {
			margin: 0px 145px;
		}
		 .showbgs1{
		 	margin-left: -18%;
		 }
		.twomenu {
			padding-top: 14%;
		}
		.fontsizes {
			margin-top: 17%;
		}
		.imgwidth{
			width: 23%;
			 height: 30%;
			 margin-top: 30px;
		}

		.imgwidth1{
		 height: 95%;
		}
		.withcolor {
			height: 70%;
		}
	}
  @media screen and (min-width: 1600px){
    .showbgs1{
      margin-left: 40px;
    }
    .fontsizes {
      margin-top: 20%;
      font-size: 3rem;
    }
    .twomenu {
      padding-top: 26%;
    }

    .alllist {
      margin: 0 0%;
      margin-top: 3%;
      height: 90%;
    }
    .answer {
      border-color: #EB5B6B !important;
      box-shadow:   0.9rem 0.9rem #AC1734 !important;
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

    .imgsty {
      background-color: #FCFFD1;
      width: 20%;
      height: 30%;
      position: relative;
      border-radius: 90px;
      margin: 15px 10% 0 5%;
      border:1.3rem solid #44ccc2;
      box-shadow: 0.9rem 0.9rem  #057bb8;
      text-align: center;
      align-content: center;
      align-items: center;
      vertical-align: middle;
    }
    .sacle {
      border: 1.3rem solid #007BB8 !important;
      box-shadow: 0.9rem 0.9rem  #085D77 !important;
      transform: scale(1.2);
    }
    // 		.pause {
    // 			top: -20%;
    // 		}
    //
    // 		.repeat {
    // 			top: -20%;
    // 		}
    //
    .imgwidth {
      width: 16%;
      height: 27%;
      margin: 0 5%;
      margin-top: 0%;
      border-radius: 90px;
    }

    .imgwidth2 {
      top: 21%;
      position: relative;
      height: 45%;
      width: 30% !important;
      border: 1.3rem solid #44ccc2;
      border-radius: 90px;
      -webkit-box-shadow: 0.9rem 0.9rem #057bb8;
      box-shadow: 0.9rem 0.9rem #057bb8;


    }
    .changecolor{
      border: 1.3rem solid #007BB8 !important;
      box-shadow: 0.9rem 0.9rem  #085D77 !important;
    }
    .imgwidth3 {
      width: 18% !important;
      border-radius: 30px;
      margin: 120px 15px 0 16px !important;
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
      height: 100px;
      width: 100px;

    }
    .roleimg{
      height: 63%;
      top: 20%;
    }
  }
</style>
