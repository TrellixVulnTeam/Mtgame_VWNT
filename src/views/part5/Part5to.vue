<template>
	<div class="part5to">
		<span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
		</span>
		<transition name="fades">
			<div class="contain" v-if="!resume">
				<img src="../../assets/image/rightback.png"  @click="gomemu" class="backbutton"/>
				 <img src="../../assets/image/help.png"  @click="help" class="helpbutton"/>
				<transition name="fade1">
					<div v-if="onef" style="width: 100%; height: 100%;display:block;position: absolute;">
						<img src="../../assets/image/seasons.png"  style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;" v-if="bgimg[0].active">
						<img src="../../assets/image/4-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;" v-if="bgimg[1].active">
						<img src="../../assets/image/5-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[2].active">
						<img src="../../assets/image/6-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[3].active">
						<img src="../../assets/image/7-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[4].active">
						<img src="../../assets/image/8-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[5].active">
						<img src="../../assets/image/9-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[6].active">
						<img src="../../assets/image/10-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[7].active">
						<img src="../../assets/image/11-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[8].active">
						<img src="../../assets/image/12-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[9].active">
            <img src="../../assets/image/1-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[10].active">
						<img src="../../assets/image/2-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[11].active">
						<img src="../../assets/image/3-3bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[12].active">
						<img src="../../assets/image/4-4bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[13].active">
						<img src="../../assets/image/5-5bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[14].active">
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
						<div v-if="!onef"  v-bind:class="{part5to2:!reload}" style="width: 100%; height: 100%;display:block;position: absolute;">
							<img src="../../assets/image/seasons.png"  style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;" v-if="bgimg[0].active">
							<img src="../../assets/image/4-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;" v-if="bgimg[1].active">
							<img src="../../assets/image/5-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[2].active">
							<img src="../../assets/image/6-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[3].active">
							<img src="../../assets/image/7-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[4].active">
							<img src="../../assets/image/8-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[5].active">
							<img src="../../assets/image/9-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[6].active">
							<img src="../../assets/image/10-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[7].active">
							<img src="../../assets/image/11-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[8].active">
							<img src="../../assets/image/12-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[9].active">
              <img src="../../assets/image/1-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[10].active">
              <img src="../../assets/image/2-bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[11].active">
              <img src="../../assets/image/3-3bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[12].active">
              <img src="../../assets/image/4-4bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[13].active">
              <img src="../../assets/image/5-5bg.png"  style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;" v-if="bgimg[14].active">
              <img src="../../assets/image/6-6bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.5;height: 100%;display:block;position: absolute;" v-if="bgimg[15].active">
              <img src="../../assets/image/7-7bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[16].active">
              <img src="../../assets/image/8-8bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[17].active">
              <img src="../../assets/image/9-9bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
              <img src="../../assets/image/10-10bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
              <img src="../../assets/image/11-11bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
              <img src="../../assets/image/12-12bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
              <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
              <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">

              <div  v-if="zhezhao" style="width: 100%; height: 80%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
							<audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3" ></audio>
							<audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3" ></audio>
							<div class="topbox" v-if="!reload">
									 <button class="textsize">
								         <span>{{titname}}</span>
								          <audio @canplay="getDuration"   ref="videos" id="videos" autoplay="autoplay" :src="audio"></audio>
							        </button>
							<!-- <draggable
									        class="dragArea list-group" id="rebox" style="width:100%;height: 90%;"
									        :list="items1"
									        :clone="clone"
									        :group="{ name: 'people', pull: pullFunction }"
									        @start="start"
											 @end="end"
											 @change="log"
									      > -->
									        <button class="list-group-item imgbutton" v-for="element in items1" :key="element.id" @click="change">
									         <img  :src="pic+element.bg" class="classimg" v-bind:class="{touming:touming}">
									        </button>
									<!-- </draggable> -->
							</div>
							<div class="dndList" v-if="!reload">

								<div class="allansw">
									<img src="../../assets/image/StarYellow.png" class="start" v-show="!ended1" style="position: absolute; margin-top: -25%;left: 0%;width: 100%;z-index: 2;">
									<div class="bordercolor" id="answer-box">

										<div id="box2" class="yes dragArea list-group" @click="blue">
												 <div v-bind:class="{ answer: issuccess1 ,listimg:fangda1}" class="yes1" id="yes1">
                           <img src="../../assets/image/yes.png" style="width: 100%;"/>
												   <div class="list-group-item" v-for="element in items2" :key="element.id">
										         <!-- {{ element.name }} -->
										           </div>
												</div>
										</div>

									</div>
								</div>
								<div class="allansw">
									<img src="../../assets/image/StarYellow.png" class="start" v-show="!ended2" style="position: absolute; margin-top: -25%;left: 0%;width: 100%;z-index: 2;">
									<div class="bordercolor" id="answer-box1">

										<div id="box4" class="no dragArea list-group" @click="red">
										        <div v-bind:class="{ answer: issuccess2 ,listimg:fangda2}" class="no1" id="no1">
                              <img src="../../assets/image/no.png" style="width: 100%;"/>
													<div class="list-group-item" v-for="element in items4" :key="element.id">
										        <!--  {{ element.name }} -->
										            </div>
												</div>
										</div>

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
          <img src="../../assets/image/8-8bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[17].active">
          <img src="../../assets/image/9-9bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[18].active">
          <img src="../../assets/image/10-10bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[19].active">
          <img src="../../assets/image/11-11bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[20].active">
          <img src="../../assets/image/12-12bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[21].active">
          <img src="../../assets/image/1-1bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[22].active">
          <img src="../../assets/image/2-2bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[23].active">
          <span class="fontsize">Read the sentence and look at the picture.
                                <br>Then‚ select “Yes” or “No”.</span>
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
				<img class="animapng7" src="http://103.218.241.33/mtgameweb/assets/img/e.gif">

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
					<!-- <div style="margin-top: 5px;" >
						<div><img src="../../assets/image/home.png" style="width: 30%; height: 10%;" @click="gomemu"></div>
					</div> -->
				</div>
			</div>
		</transition>
	</div>

</template>

<script>
	// import {
	// 	Container,
	// 	Draggable
	// } from 'vue-smooth-dnd';
	import draggable from 'vuedraggable';
	// import {
	// 	applyDrag,
	// 	generateItems
	// } from '../../main';
	import $ from 'jquery';
    var qs = require('qs');
	let idGlobal = 8;
	export default {
		name: "part5to",
		 display: "Clone on Control",
		  instruction: "Press Ctrl to clone element from list 1",
		  order: 4,
		components: {
			// Draggable,
			// Container
			draggable
		},
		watch: {

			'onef': function(newVal) {
				if (this.onef == true) {
					setTimeout(() => {
						this.onef = false;
						this.zhezhao=false;
							// this.video = true;


						setTimeout(() => {
							this.reload=false;
                           }, 500);
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
				popp: false,
				ruleimg8:false,
				spanp:'',
        duration:0,
        shownumb:false,
				ruleimg10:false,
				ruleimg4:false,
				ruleimg15:false,
				ruleimg25:false,
				ruleimg12:false,
				 controlOnStart: true,
				disabled: false,
				onef: true,
				touming:false,
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
          {active:false,spring:'School Life'},
          {active:false,spring:'Animals'},
          {active:false,spring:'Family Time'},
          {active:false,spring:'Holidays'},
          {active:false,spring:'Meal Time'},
          {active:false,spring:'On the Farm'},
        ],
				reload:true,
				fade: 'fade',
				soundsWrong:false,
				soundscorrect:false,
				flag2: true,
				zhezhao:false,
				// disnone:false,
				show: true,
				video:false,
				action:false,

				resume: false,
				items2: [

				],
				unitsId:'',
				unit:'',
        audio:'',
				question:8,
				menuId:'',
				listE: [],
				showitem: false,
				showstart: null,
				issuccess1: false,
				issuccess2: false,
				countpage: 1,
				account: 0,
				pic: "",
				// url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseE',
				// pic: "http://demo11.embraiz.com/mtGameHK",
				url: '/exercise/',
        url1:'',
        part:'',
				//url: 'http://localhost:8080/mtGame/exercise/exerciseE',
				items4:[
				],
				items3: [
				],
				items1: [
				],
				id: 6,
				addlist: false,
				ended1: true,
				ended2: true,
				fangda1:false,
        titname:'',
				fangda2:false,
				othersize: false,
				levels:0,
				page: 2,
				type: 'part5to',
         gamename:'',
         timeurl:'/user/playTime',
			}
		},
		computed: {},
		methods: {
      getDuration() {
        console.log(this.$refs.videos.duration); //此时可以获取到duration
        this.duration = this.$refs.videos.duration;
        this.video=true;
      },
			    clone({ name }) {
					//console.log(name);
			      return { name, id: idGlobal++ };
			    },
			    pullFunction: function(evt) {
				 // window.console.log(evt);
			      // console.log(evt);
				  if(evt.el.id=="box2"){
					this.fangda1=true;
					this.fangda2=false;
				  }else if(evt.el.id=="box4"){
					this.fangda2=true;
					this.fangda1=false;
				  }else if(evt.el.id=="rebox"){
					 this.fangda1=false;this.fangda2=false;
				  }
				  return this.controlOnStart ? "clone" : true;
			    },
			    start({ originalEvent }) {
					this.touming=true;
			      this.controlOnStart = originalEvent.ctrlKey;
			    },
				end: function(evt){
					  this.touming=false;
					  //console.log('end');
				},
				blue(){

					if(this.zhezhao==false){
						this.countpage += 1;
					}
					this.zhezhao=true;
					//console.log(this.items1[0].score);
					if(this.items1[0].score==1){
						this.ended1=false;this.soundscorrect=true;
						this.account += 1;
						// console.log(this.account);
						setTimeout(() => {
						if(this.countpage<=this.question){
							setTimeout(() => {
						   this.onef = true;
						   this.ended1=true;this.soundscorrect=false;
						   this.items2=[];
						   this.fangda1=false;
						   // this.disnone=false;
						   this.reload=true;
						   this.items1 =this.listE[this.countpage-1];
						   this.titname=this.items1[0].name;
                this.audio=this.pic+this.items1[0].audio;
						   }, 1000);
						}else{
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
												partName:'partNameE',
												account:this.account,
												menuId: this.menuId,
												unitsId:this.unitsId,
												unit:this.unit,
                        part:this.part
											}
										});

									}, 1000);
						}
						}, 2000);
					}else{
						this.issuccess1=true;this.soundsWrong=true;
						  setTimeout(() => {
							  this.soundsWrong=false;
							if(this.countpage<=this.question){
							setTimeout(() => {
						    this.onef = true;
						 	this.issuccess1=false;
							this.items2=[];
							this.fangda1=false;
						 	// this.disnone=false;
						    this.reload=true;

						    this.items1 =this.listE[this.countpage-1];
						    this.titname=this.items1[0].name;
						    this.audio=this.pic+this.items1[0].audio;
							}, 1000);
							//  this.items1.bg=this.pic+this.items1.bg;
							}else{
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
												partName:'partNameE',
												account:this.account,
												menuId: this.menuId,
												unitsId:this.unitsId,
												unit:this.unit,
                        part:this.part
											}
										});

									}, 1000);
							}
						  }, 2000);
						}

				},
				red(){

					if(this.zhezhao==false){
						this.countpage += 1;
					}
					this.zhezhao=true;
					if(this.items1[0].score==1){
							 this.issuccess2=true;this.soundsWrong=true;
							 setTimeout(() => {
								 this.soundsWrong=false;
						if(this.countpage<=this.question){
							 setTimeout(() => {
							 this.onef = true;
							 this.issuccess2=false;
							 this.items4=[];
							 this.fangda2=false;
							 // this.disnone=false;
							 this.reload=true;
							  this.items1 =this.listE[this.countpage-1];
							  this.titname=this.items1[0].name;
                 this.audio=this.pic+this.items1[0].audio;
							  }, 1000);
					    }else{

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
							 						partName:'partNameE',
							 						account:this.account,
							 						menuId: this.menuId,
							 						unitsId:this.unitsId,
							 						unit:this.unit,
                          part:this.part
							 					}
							 				});

							 			}, 1000);
						}
							 }, 2000);
						}else{
							this.ended2=false;this.soundscorrect=true;
							this.account += 1;
							setTimeout(() => {
								this.soundscorrect=false;
							if(this.countpage<=this.question){
							setTimeout(() => {
							this.onef = true;
							this.ended2=true;
							this.items4=[];
							this.fangda2=false;
							// this.disnone=false;
							this.reload=true;

							  this.items1 =this.listE[this.countpage-1];
							  this.titname=this.items1[0].name;
                this.audio=this.pic+this.items1[0].audio;
							   }, 1000);
							   // this.items1.bg=this.pic+this.items1.bg;
							}else{

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
													partName:'partNameE',
													account:this.account,
													menuId: this.menuId,
													unitsId:this.unitsId,
													unit:this.unit,
                          part:this.part
												}
											});

										}, 1000);
							}
							}, 2000);
						 }
				},

			change() {
              if(this.onef == false){

              	this.video=true;
              }
			},
			pop(){
				 this.popp = !this.popp;
			},
			help(){
				if(this.onef==false){
					this.spanp="Read the sentence and look at the picture.Then‚ select “Yes” or “No”.";
				this.popp = !this.popp;
				if( this.items1[0].rank==0){
					this.ruleimg8=true;this.ruleimg10=false;
				}else if( this.items1[0].rank==1){
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
			changesett() {
					if(this.action==false&&this.onef==false){
			this.action=true;
			//this.zhezhao=false;
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
			this.part=this.$route.query.part;
			this.menuId = this.$route.query.menuId; //接受参数关键代码
       this.gamename=this.$route.query.name;
      if(this.part==='part1'){
        this.url1=this.url+'exerciseEPart1';
      }else if(this.part==='part2'){
        this.url1=this.url+'exerciseEPart2';
      }else if(this.part==='part3'){
        this.url1=this.url+'exerciseE';
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
            this.listE.push(res.data.ListPart1[i]); //属性
            this.question = this.listE.length;
          }
        }else if(this.part==='part2'){
          for (let i in res.data.ListPart2) {
            this.listE.push(res.data.ListPart2[i]); //属性
            this.question = this.listE.length;
          }
        }else if(this.part==='part3'){
          for (let i in res.data) {
            this.listE.push(res.data[i]); //属性
            this.question = this.listE.length - 3;
          }
        }
							// for (let i in res.data) {
							//     this.listE.push(res.data[i]); //属性
							// }
							//  this.question=this.listE.length-3;
               this.shownumb=true;
							this.items1 =this.listE[this.countpage-1];
							this.titname=this.items1[0].name;
              this.audio=this.pic+this.items1[0].audio;
        if (this.onef == true) {
          setTimeout(() => {
            this.onef = false;
            this.reload=false;
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
		}
	};
</script>

<style scoped lang="less">
	body {
		padding: 0;
		cursor: auto !important;
	}

	.part5to {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
    background-color: #fcffd1;
    z-index: -1;
	}
	.disnone{
		display:none !important;
	}
    .part5to2 {
    	 width: 100%;
         height: 100%;
         // background-color: rgb(255, 145, 126);
    	position: absolute;
    	display: flex;
    }
	.touming{
		opacity: 0;
	}
	.topbox{
		position: relative;top: 6%;
	}
	.classimg{
		width: 120px;
		height: 100px;
		text-align: center;
		// margin-top: 16px;
		 //calc(20vw - 40px) 0;
	}
	#answer-box {
		display: -ms-flexbox;
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

	.dndList {
		position: absolute;
	    bottom: 15%;
		width: 100%;

	}

	.smooth-dnd-draggable-wrapper.animated {
		transition: transform ease;
	}

	.smooth-dnd-container.horizontal>.smooth-dnd-draggable-wrapper {
		display: inline-block;
	}


	.dndList-list1 {
		position: absolute;
		right: 11.5%;
		min-width: 32%;
		max-width: 80%;
		margin-top: 10%;
	}



	.other-list1 {
		position: absolute;
		right: 8%;
		min-width: 60%;
		max-width: 80%;
		margin-top: 5%;
	}

	.other-list2 {
		height: auto;
		width: 45%;
		margin-top: 15%;
		display: inline;
		position: absolute;
	}

	.dndList-list2 {
		height: auto;
		width: 45%;
		margin-top: 19%;
		display: inline;
		position: absolute;
	}

	.smooth-dnd-container {
		text-align: center;
		 margin: 0 auto;
		 display: table;
	}
    .allansw{
	display: inline-block;
    width: 50%;
	float: left;
    position: relative;
    height: 9rem;
    text-align: center
	}


	.smooth-dnd-ghost {
	 //     z-index: 1200 !important;
		  margin: 0 auto !important;
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

	.fontsizes {
		font-family: kg;
		font-weight: bolder;
		color: #C5CA8B;
		text-align: center;
		vertical-align: middle;
		margin-top: 22%;
		font-size: xx-large;
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
		margin-left: 2%;
	}

	.fontcolor {
		color: red;
	}

	.contain {
		width: 100%;
		height: 100%;
		position: relative;
		display: contents;
		overflow: hidden;
	}
	 // .listimg:hover {
		//  transform: scale(1.2);
	 // }
  //   .listimg:visited {
  //   	transform: scale(1);
  //   }

    .listimg{
    	transform: scale(1.2);
    }
	.textsize{
        width: 70%;
	    color: white;
	    font-family: pepper;
	    font-size: 1.6rem;
	    border: none;
	    line-height: 100%;
        margin: 0 15%;
        text-align: center;
        background-color: #44ccc2;
        display: block !important;
        border-radius: 50px;
        padding: 10px !important;

	}
	.imgbutton{
		width: 100%;
		border:none;
		background: none;
		display: block;
	}
    .spansize{
		color:white;
		font-family:pepper;
		font-size: 1.6rem;
	}
	.bordercolor {
		display: block !important;
	    height: 100%;
		text-align: center;
	    position: relative;
	    width: 100%;
	    top:22%;
	}
	.yes{
		height: 100% !important;
	    text-align: center;
	    width: 67%;
		display: inline-block;
	 //    background-image:url(../../assets/image/Yes.png);
		// background-size: cover;
	}
	.yes1{
		height: 100% !important;
		top: 0;
		position: absolute;
        text-align: center;
        width:67%;
		// display: inline-block;
	 //    background-image:url(../../assets/image/Yes.png);
		// background-size: cover;
	}
	.no{
		height: 100%  !important;
         text-align: center;
        width: 67%;
		display: inline-block;
	 //    background-image:url(../../assets/image/NO.png);
		// background-size: cover;
	}
    .no1{
    	height: 100% !important;
    	text-align: center;
    	width: 67%;
		top: 0;
		position: absolute;
    	// display: inline-block;
     //    background-image:url(../../assets/image/NO.png);
    	// background-size: cover;
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
		animation: myPlay 0.6s infinite alternate;
		animation-timing-function: linear;
		animation-iteration-count: 3;

		-webkit-animation: myPlay 0.6s infinite alternate;
		-webkit-animation-timing-function: linear;
		-webkit-animation-iteration-count: 3;

		-moz-animation: myPlay 0.6s infinite alternate;
		-moz-animation-timing-function: linear;
		-moz-animation-iteration-count: 3;
		-o-animation: myPlay 0.6s infinite alternate;
		-o-animation-timing-function: linear;
		-o-animation-iteration-count: 3;
		//display: block;
		//margin: 50px auto;
	}

	@keyframes myPlay {
		0% {
			//position: relative;
			    right: unset;
		}

		50% {
			//position: relative;
			right: 20%;
		}

		100% {
			//position: relative;
			right: unset;
		}
	}

	@-webkit-keyframes myPlay {
		0% {
			//position: relative;
			    right: unset;
		}

		50% {
			//position: relative;
			right: 20%;
		}

		100% {
			//position: relative;
			right: unset;
		}
	}

	@-moz-keyframes myPlay {
		0% {
			//position: relative;
			    right: unset;
		}

		50% {
			//position: relative;
			right: 20%;
		}

		100% {
			//position: relative;
			right: unset;
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
		.allansw{
		   height:6.5rem;
		}


	}

	@media screen and (min-width: 482px) and (max-width: 569px) {
		.allansw{
		   height:7.5rem;
		}

	}

	@media screen and (min-width: 1024px) and (max-width:  1365px){
        .allansw{
		   height:14rem;
		}
		.topbox{
			top: 16%;
		}
		.classimg{
			    width: 12rem;
				height: auto;
		}
		.textsize{
			transform:scale(1.2);
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
			min-height: 47%;
			margin-left: 2%;
			transform: scale(1.2);
		}
        .yes{
			width: 68%;
		}
		.no{
			width: 68%;
		}
		.bordercolor {
		    top:22%;
		}
		.fontsizes {
			margin-top: 30%;
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
    @media screen and (min-width: 700px) and (max-width: 812px) {
    	.fontsizes {
    		margin-top: 17%;
    	}
		.twomenu {
			padding-top: 18%;
		}
		.bordercolor {
		    top:8%;
		}
    }
	@media screen and (min-width: 812px) and (max-width:1023px) {
        .twomenu {
        	padding-top: 14%;
        }
        .allansw{
          height:10rem;
       }


        .fontsizes {
        	margin-top: 17%;
        }
		.bordercolor {
		    top:7%;
		}
		.withcolor {
			height: 70%;
		}


	}
  @media screen and (min-width: 1366px)  and (max-width:  1600px){
		.allansw {
			height: 19rem;
		}
    .topbox{
      top: 16%;
    }
    .classimg{
      width: 12rem;
      height: auto;
    }
    .textsize{
      transform:scale(1.2);
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
      min-height: 47%;
      margin-left: 2%;
      transform: scale(1.2);
    }
    .yes{
      width: 68%;
    }
    .no{
      width: 68%;
    }
    .bordercolor {
      top:22%;
    }
    .fontsizes {
      margin-top: 30%;
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
  @media screen and (min-width: 1600px){

    .allansw{
      height:32rem;
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
      bottom: 15%;
      left: 8%;
      position: absolute;
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }
    .topbox{
      top: 9%;
    }
    .textsize{
      font-size: 2rem;
      padding: 25px !important;
    }
    .classimg{
      width:230px;
      height:auto;
    }

    .bordercolor {
      top:7%;
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
