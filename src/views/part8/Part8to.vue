<template>
	<div class="part8to">
		<span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
		</span>
		<transition name="fades">
			<div class="contain" v-if="!resume">
				<img src="../../assets/image/rightback.png"  @click="gomemu" class="backbutton"/>
				 <img src="../../assets/image/help.png"  @click="help" class="helpbutton"/>
				<transition name="fade1">
					<div v-if="onef" style="width: 100%; height: 100%;display:block;position: absolute; ">
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

            <p class="fontsizes">{{this.countpage}}/{{ this.question}}</p>
					</div>
				</transition>
				<transition name="fade1">
					<div v-if="!onef" v-bind:class="{part8to2:!reload}" style="width: 100%; height: 100%;display:block;position: absolute;">
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

            <audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3"  ></audio>
							<audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3"  ></audio>
							<!-- <div  v-if="zhezhao" style="width: 100%; height: 50%;display:block;position: absolute;opacity: 0;z-index: 100;"></div> -->
						<div class="dndList" v-if="!reload">
							<div class="alldrag">
								<draggable id="first"
                                 data-source="juju" :list="items1" class="list-group" draggable=".item" :disabled="over" style="width:100%; min-height:130px;display:flex;justify-content: space-around;"
								 :group="{ name: 'people', pull: pullFunction }" @start="start" @end="end" @change="log">
									<div v-for="(element,index) in items1" :key="element.id" class="item" style="position: relative;">
										<img :src="pic+element.bg" class="classimg" @click="makesound(element)" v-bind:class="{ marginboth:marginboth,touming:element.imgop}" >
										<audio v-if="element.sound" autoplay="autoplay">
											<source :src="pic+element.audio"></audio>
									</div>
								</draggable>
								<!-- <Container behaviour="move" group-name="1" :get-child-payload="getChildPayload1" style="width: 100%;display: block;">
										<Draggable v-for="(item,index) in items1" :key="index" style="display: inline;">
										<img  :src="pic+item.audio" class="classimg" v-bind:class="{ marginboth:marginboth}">
										<audio v-if="video[index].play" autoplay="autoplay"><source :src="pic+item.audio"></audio>
										</Draggable>
									</Container> -->
							</div>
							<div class="allansw">
								<img src="../../assets/image/StarYellow.png" class="start" v-show="!ended1" style="position: absolute; margin-top: -25%;left: 0%;width: 100%;z-index: 2;">
								<div class="bordercolor" id="answer-box">
									<draggable id="box2" :list="items2" draggable=".item"  class="yes dragArea list-group"
									 group="people" @change="log">
										<div class="list-group-item" v-for="element in items2" :key="element.id">
											<!-- {{ element.name }} -->
										</div>
										<!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/blueball.png" v-bind:class="{listimg:!fangda1}"> -->

									</draggable>
									<!-- <Container  class="yes" group-name="1" :get-child-payload="getChildPayload2"
									 v-bind:class="{ answer: issuccess1 ,listimg:fangda1}" @drop="onDrop1('items2', $event)"
									 @drag-enter="onDragEnter1"   @drag-leave="onDragLeave1" @drag-end="onDragEnd1"  @dragover.prevent>
											<div style="width:100%; height: 100%;position: absolute;text-align: center;" >
											<Draggable v-for="item in items2" :key="item.id" style="width: 50%;height: 100%; display: block;text-align: center;margin: 0 auto;">
											</Draggable>
											</div>
											<button class="fast"><span>{{this.sort1}}</span></button>
									</Container> -->
								</div>
								<button class="fast"  v-bind:class="{answer: issuccess1,listimg:fangda1}">
											<img style="position: absolute;height: 100%;width:100%;display: block;bottom: 0;" src="../../assets/image/blueball.png">
											<span style="position: inherit;">{{this.sort1}}</span>
								</button>
							</div>
							<div class="allansw">
								<img src="../../assets/image/StarYellow.png" class="start" v-show="!ended2" style="position: absolute; margin-top: -25%;left: 0%;width: 100%;z-index: 2;">
								<div class="bordercolor" id="answer-box1">
									<draggable id="box4" :list="items4" draggable=".item"   class="no dragArea list-group"
									 group="people" @change="log">
										<div class="list-group-item" v-for="element in items4" :key="element.id">
											<!--  {{ element.name }} -->
										</div>
										<!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/redball.png" v-bind:class="{listimg:fangda2}"> -->

									</draggable>
									<!-- <Container  class="no" group-name="1" :get-child-payload="getChildPayload3"
									  @drag-enter="onDragEnter2"   @drag-leave="onDragLeave2"
									 v-bind:class="{ answer: issuccess2,listimg:fangda2}" @drop="onDrop2('items4', $event)" @dragover.prevent>
											<div style="width: 100%; height: 100%;position: absolute;text-align: center;">
												<Draggable v-for="item in items4" :key="item.id" style="width: 50%;height: 100%; display: block;text-align: center;margin: 0 auto;">
												</Draggable>
											</div>
										<button class="fast"><span>{{this.sort2}}</span></button>
									</Container> -->
								</div>
								<button class="fast2" v-bind:class="{answer: issuccess2,listimg:fangda2}">
											<img style="position: absolute;height: 100%;width:100%;display: block;bottom: 0;" src="../../assets/image/redball.png">
											<span style="position: inherit;">{{this.sort2}}</span>
								</button>
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
					<span class="fontsize">Look at the picture and drag it to the correct bucket.</span>
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
					<!-- <div @click="change">
						<img src="../../assets/image/Icon_Repeat.png" class="repeat" v-if="!levels" v-show="action1">
						<img src="../../assets/image/blue_repeat.png" class="repeat" v-if="levels" v-show="action1">
						<img src="../../assets/image/Icon_Repeat0.png" class="repeat" v-if="!levels" v-show="!action1">
						<img src="../../assets/image/blue_repeat0.png" class="repeat" v-if="levels" v-show="!action1">
					</div> -->
				</div>
			</div>
		</transition>
		<div class='popContainer' v-show="popp">
			<p class="spanp spanp1">{{spanp}}</p>
			<button class="roleimg">
				<img src="../../assets/image/runner-rule.png" style="height: 100%;" v-if="ruleimg25"/>
				<img src="../../assets/image/walkerks-rule.png" style="height: 100%;"  v-if="ruleimg15"/>
			</button>
			<div class="withcolor">
				<div class="close"  @click="pop">
					<img src="../../assets/image/cloce.png">
				</div>
				<img class="animapng7" src="http://103.218.241.33/mtgameweb/assets/img/h.gif">


			</div>
		</div>
		<transition name="fades">
			<div class="about" v-if="resume">
				<div class="twomenu">
					<div>
						<img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show" @click="sound"/>
						<img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show" @click="sound"/>
					</div>
					<div style="margin-top: 5px;" >
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

	import draggable from 'vuedraggable';
	import $ from 'jquery';

	var qs = require('qs');
	let idGlobal = 8;
	export default {
		name: "part8to",
		// order: 1,
		// display: "Two Lists",
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
						setTimeout(() => {
							this.reload = false;
							// let items5=[];
							// for(var i=0;i<this.items3.length;i++){
							// 	items5.push(this.items3[i]);;
							// }
							// this.items1=items5;
							// items5=[];
						}, 500);
					}, 2000);

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
				ruleimg15:false,
				ruleimg25:false,
				ruleimg12:false,
				controlOnStart: true,
				falgs: 'article',
				disabled: false,
				onef: true,
				reload: true,
				over:false,
				question: 5,
				soundsWrong:false,
				soundscorrect:false,
				video: [{
						play: false
					},
					{
						play: false
					},
					{
						play: false
					},
					{
						play: false
					},
					{
						play: false
					},
					{
						play: false
					},
				],
				fade: 'fade',
				flag2: true,
				action: false,
				action1: false,
				sort2: '',
				sort1: '',
				marginboth: false,
				// disnone:false,
				show: true,
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
				resume: false,
				items2: [
					// {
					// 	name:"kk"
					// }
				],
				showitem: false,
				showstart: null,
				issuccess1: false,
				issuccess2: false,
				countpage: 1,
				unitsId: '',
				unit: '',
				zhezhao:false,
				menuId: '',
				listH: [],
				account: 0,
				pic: "",
				// url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseH',
				// pic: "http://demo11.embraiz.com/mtGameHK",
				url: '/exercise/',
        url1:'',
        part:'',
				//url: 'http://localhost:8080/mtGame/exercise/exerciseH',
				items4: [],
				items1: [
					// {
					// 	id: 1,
					// 	value:1,
					// 	audio: "/image/img/pencil.png",
					// 	video:''
					// },
					// {
					// 	id: 2,
					// 	value:0,
					// 	audio: "/image/img/ball.png",
					// 	video:''
					// },
					// {
					// 	id: 3,
					// 	value:1,
					// 	audio: "/image/img/backpack.png",
					// 	video:''
					// },
				],
				items3: [
					// {
					// 	id: 1,
					// 	value:1,
					// 	audio: "/image/img/pencil.png",
					// 	video:''
					// },
					// {
					// 	id: 2,
					// 	value:0,
					// 	audio: "/image/img/ball.png",
					// 	video:''
					// },
					// {
					// 	id: 3,
					// 	value:1,
					// 	audio: "/image/img/backpack.png",
					// 	video:''
					// },
				],
				id: 6,
				count: 0,
				addlist: false,
				ended1: true,
				ended2: true,
				fangda1: false,
				fangda2: false,
				othersize: false,
				levels: 0,
				page: 2,
				type: 'part8to',
         gamename:'',
         timeurl:'/user/playTime',
			}
		},
		computed: {},
		methods: {
      makesound(e){
        console.log(e);
        e.sound = 1;
        setTimeout(() => {
          e.sound = 0;

        }, 3500);
      },
			bodyScroll(event) {
			event.preventDefault();
			},
		    // onMove({ relatedContext, draggedContext }) {
		    //   const relatedElement = relatedContext.element;
		    //   const draggedElement = draggedContext.element;
		    //   return (
		    //     (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
		    //     );
		    // },
			pullFunction: function(evt) {
				if (evt.el.id == "box2") {
					this.fangda1 = true;
					this.fangda2 = false;
				} else if (evt.el.id == "box4") {
					this.fangda2 = true;
					this.fangda1 = false;
				}else if(evt.el.id=="first"){

					for(var i=0;i<this.items1.length;i++){
						this.items1[i].imgop = 0;
					}
					 this.fangda1=false;this.fangda2=false;
				  }
				return this.controlOnStart ? "clone" : true;
			},
			start:function(evt) {
				// this.over=true;
			    this.zhezhao=true;
				this.items1[evt.oldDraggableIndex].imgop = 1;
				this.controlOnStart = evt.originalEvent.ctrlKey;
				      //   this.items1[evt.oldDraggableIndex].sound = 1;
				     	// setTimeout(() => {
							// if(this.items1[evt.oldDraggableIndex]){
							// 	return  this.items1[evt.oldDraggableIndex].sound = 0;
							// }
				      //   }, 3500);

			},
			end: function(evt){
				// console.log(evt);
				// console.log(this.items1);
				this.zhezhao=false;
				if(this.items1[evt.oldDraggableIndex]){
					 this.items1[evt.oldDraggableIndex].imgop = 0;
				}

			},
			log: function(evt) {
				//console.log(evt);
				if (evt.removed) {
				  if(this.over==false){
					this.over=true;
                    this.zhezhao=false;
					if (this.items1.length == 0) {
						this.countpage += 1;
						if (this.items2.length == 1) {

							if ($.trim(evt.removed.element.value) == $.trim(this.sort1)) {
								this.ended1 = false;this.soundscorrect=true;
								this.count += 1;
								setTimeout(() => {
									if (this.countpage <= this.question) {
										setTimeout(() => {
										this.onef = true;
										this.ended1 = true;this.soundscorrect=false;
										this.items2 = [];
										this.fangda1 = false;
										this.reload = true;
										this.items1 = this.listH[this.countpage - 1];
										this.sort2 = this.items1[0].sort2;
										this.sort1 = this.items1[0].sort1;
										if (this.items1.length > 3) {
											this.marginboth = true;
										}
										this.over=false;
										}, 2000);
									} else {
										setTimeout(() => {
											this.over=false;
											this.$router.push({
												//核心语句
												path: "/result", //跳转的路径
												query: {
													//路由传参时push和query搭配使用 ，作用时传递参数
													type: this.type,
													partName: 'partNameH',
													account: this.count,
													menuId: this.menuId,
													unitsId: this.unitsId,
													unit: this.unit,
                          part:this.part,
                          level:this.level,
												}
											});

										}, 2000);
									}

								},2000);
							} else if ($.trim(evt.removed.element.value) == $.trim(this.sort2)) {
								this.issuccess1 = true;this.soundsWrong=true;
								setTimeout(() => {
									 this.soundsWrong=false;
									if (this.countpage <= this.question) {
										setTimeout(() => {
										this.onef = true;
										this.issuccess1 = false;
										this.items2 = [];
										this.fangda1 = false;
										this.reload = true;
										this.items1 = this.listH[this.countpage - 1];
										this.sort2 = this.items1[0].sort2;
										this.sort1 = this.items1[0].sort1;
										if (this.items1.length > 3) {
											this.marginboth = true;
										}
                                        this.over=false;
										}, 2000);
									} else {
										setTimeout(() => {
											this.over=false;
											this.$router.push({
												//核心语句
												path: "/result", //跳转的路径
												query: {
													//路由传参时push和query搭配使用 ，作用时传递参数
													type: this.type,
													partName: 'partNameH',
													account: this.count,
													menuId: this.menuId,
													unitsId: this.unitsId,
													unit: this.unit,
                          part:this.part,
                          level:this.level,
												}
											});

										}, 2000);
									}
								}, 2000);
							}
						}
						if (this.items4.length == 1) {
							if ($.trim(evt.removed.element.value) == $.trim(this.sort1)) {
								this.issuccess2 = true;this.soundsWrong=true;
								setTimeout(() => {
									 this.soundsWrong=false;
									if (this.countpage <= this.question) {
										setTimeout(() => {
										this.onef = true;
										this.issuccess2 = false;
										this.items4 = [];
										this.fangda2 = false;
										this.reload = true;
										this.items1 = this.listH[this.countpage - 1];
										this.sort2 = this.items1[0].sort2;
										this.sort1 = this.items1[0].sort1;
										if (this.items1.length > 3) {
											this.marginboth = true;
										}
										this.over=false;
                                        }, 2000);
									} else {

										setTimeout(() => {
											this.over=false;
											this.$router.push({
												//核心语句
												path: "/result", //跳转的路径
												query: {
													//路由传参时push和query搭配使用 ，作用时传递参数
													type: this.type,
													partName: 'partNameH',
													account: this.count,
													menuId: this.menuId,
													unitsId: this.unitsId,
													unit: this.unit,
                          part:this.part,
                          level:this.level,
												}
											});

										}, 2000);
									}
								}, 2000);
							} else if ($.trim(evt.removed.element.value) == $.trim(this.sort2)) {
								this.ended2 = false;this.soundscorrect=true;
								this.count += 1;
								setTimeout(() => {
										this.soundscorrect=false;
									if (this.countpage <= this.question) {
										setTimeout(() => {
										this.onef = true;
										this.ended2 = true;
										this.items4 = [];
										this.fangda2 = false;
										this.reload = true;
										this.items1 = this.listH[this.countpage - 1];
										this.sort2 = this.items1[0].sort2;
										this.sort1 = this.items1[0].sort1;
										if (this.items1.length > 3) {
											this.marginboth = true;
										}
										this.over=false;
                                        }, 2000);
									} else {

										setTimeout(() => {
											this.over=false;
											this.$router.push({
												//核心语句
												path: "/result", //跳转的路径
												query: {
													//路由传参时push和query搭配使用 ，作用时传递参数
													type: this.type,
													partName: 'partNameH',
													account: this.count,
													menuId: this.menuId,
													unitsId: this.unitsId,
													unit: this.unit,
                          part:this.part,
                          level:this.level,
												}
											});

										}, 2000);
									}
								}, 2000);
							}
						}
					} else {
						if (this.items2.length == 1) {
							if ($.trim(evt.removed.element.value) == $.trim(this.sort1)) {
								this.ended1 = false;this.soundscorrect=true;
								this.count += 1;
								setTimeout(() => {
									this.soundscorrect=false;
									this.ended1 = true;
									this.items2 = [];
									this.fangda1 = false;
									this.over=false;
								}, 2000);
							} else if ($.trim(evt.removed.element.value) == $.trim(this.sort2)) {
								this.issuccess1 = true;this.soundsWrong=true;
								setTimeout(() => {
									this.soundsWrong=false;
									this.issuccess1 = false;
									this.items2 = [];
									this.fangda1 = false;
									this.over=false;
								}, 2000);
							}
						}
						if (this.items4.length == 1) {
							if ($.trim(evt.removed.element.value) == $.trim(this.sort1)) {
								this.issuccess2 = true;this.soundsWrong=true;
								setTimeout(() => {
									this.soundsWrong=false;
									this.issuccess2 = false;
									this.items4 = [];
									this.fangda2 = false;
									this.over=false;
								}, 2000);
							} else if ($.trim(evt.removed.element.value) == $.trim(this.sort2)) {
								this.ended2 = false;this.soundscorrect=true;
								this.count += 1;
								setTimeout(() => {
									this.soundscorrect=false;
									this.ended2 = true;
									this.items4 = [];
									this.fangda2 = false;
									this.over=false;
								}, 2000);
							}
						}

					}

				 }
				} else if (evt.moved) {

					 this.zhezhao=false;
					this.fangda1 = false;
					this.fangda2 = false;
					  evt.moved.element.imgop = 0;
					  this.over=false;
					//console.log(this.fangda2);
				}
			},

//
			changesett() {
				if(this.action==false&&this.onef==false){
				this.action = true;
				this.zhezhao=false;
				setTimeout(() => {
					this.action = false;
					this.resume = !this.resume;
				}, 1000);
               }
			},
			pop(){
				 this.popp = !this.popp;
			},
			help(){
				if(this.onef==false){
					this.spanp="Look at the picture and drag it to the correct bucket.";
				this.popp = !this.popp;
				if( this.items1[0].rank==0){
					this.ruleimg15=true;this.ruleimg25=false;
				}else if( this.items1[0].rank==1){
					this.ruleimg15=false;this.ruleimg25=true;
				}
				}
			},
			gomemu() {
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
						unit: this.unit,
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
			}
		},
		destroyed() {
		document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
     window.removeEventListener('popstate',this.gomemu,false);
		},
		created() { //生命周期里接收参数
      this.pic=this.$axios.defaults.baseURL2;
			this.unit = this.$route.query.unit;
			this.part = this.$route.query.part;
			this.unitsId = this.$route.query.unitsId;
			this.menuId = this.$route.query.menuId; //接受参数关键代码
      this.gamename=this.$route.query.name;
      this.level = this.$route.query.level;
      if(this.part==='part1'){
        this.url1=this.url+'exerciseHPart1';
      }else if(this.part==='part2'){
        this.url1=this.url+'exerciseHPart2';
      }else if(this.part==='part3'){
        this.url1=this.url+'exerciseH';
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
			if (this.onef == true) {
				this.$axios.post(this.url1, qs.stringify({
					menuDetailId: this.menuId,
				})).then(res => {
          if(this.part==='part1'){
            for (let i in res.data.ListPart1) {
              this.listH.push(res.data.ListPart1[i]); //属性
              this.question = this.listH.length;
            }
          }else if(this.part==='part2'){
            for (let i in res.data.ListPart2) {
              this.listH.push(res.data.ListPart2[i]); //属性
              this.question = this.listH.length;
            }
          }else if(this.part==='part3'){
            for (let i in res.data) {
              this.listH.push(res.data[i]); //属性
              this.question = this.listH.length - 3;
            }
          }
					// for (let i in res.data) {
					// 	this.listH.push(res.data[i]); //属性
					// }
					// this.question = this.listH.length - 3;
					this.items1 = this.listH[this.countpage - 1];
					for(let a in this.items1){
						this.items1[a].imgop=0;
						// this.items1[a].fixed=false;
					}
					this.sort2 = this.items1[0].sort2;
					this.sort1 = this.items1[0].sort1;
					if (this.items1.length > 3) {
						this.marginboth = true;
					}
					setTimeout(() => {
            this.onef = false;
            setTimeout(() => {
              this.reload = false;
            }, 500);
          }, 1000);
				}, res => {
					alertMsg("You must be connected to the internet.<br>Please connect and try again.");
				});

			}
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

	.part8to {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
    background-color: #fcffd1;
    z-index: -1;
	}

	.disnone {
		display: none !important;
	}
    .touming{
    	opacity: 0;
    }
	.part8to2 {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
	}

	.classimg {
		width: 120px;
		height: 100px;
		text-align: center;
		margin: 5px calc(20vw - 120px) 0;
	}

	.marginboth {
		margin: 0 !important;
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

	.fast {
		font-size: 2.0rem;
		width: 75%;
		height: 100%;
		background: none;
		// background-image: url(../../assets/image/blueball.png);
		border-style: none;
		overflow: hidden;
		background-repeat: no-repeat;
		background-size:cover ;
		color: white;
		position: relative;
		font-family: pepper;
		text-align: center;
	}
	.fast2 {
		font-size: 2.0rem;
		width:75%;
		height: 100%;
		background: none;
		//background-image: url(../../assets/image/redball.png);
		border-style: none;
		overflow: hidden;
		background-repeat: no-repeat;
		background-size:cover ;
		color: white;
		position: relative;
		font-family: pepper;
		text-align: center;
	}

	.alldrag {
         top: -135%;
		width: 100%;
		position: absolute;
		text-align: center;
	}

	.dndList {
		position: absolute;
		bottom: 15%;
		width: 100%;
    display: flex;
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

	.allansw {
		display: inline-block;
		width: 50%;
		position: relative;
		height: 7rem;
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
		bottom: 15%;
		left: 3%;
		position: absolute;
		font-size: 1.4rem;
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

	.listimg {
		width:85%;
		//transform: scale(1.1);
		background-size: contain;
	}

	.textsize {
		width: 30%;
		top: 10%;
		position: sticky;
		margin: 0 auto;
		text-align: center;
		background-color: #44ccc2;
		display: block !important;
		border-radius: 50px;
		padding: 10px !important;
		height: 2.5rem;
	}

	.spansize {
		color: white;
		font-family: pepper;
		font-size: 1.6rem;
	}

	.bordercolor {
		display: block !important;
		height: 100%;
	   position: absolute;
		width: 100%;
		// top: 20%;
	}

	.yes {
		height: 100% !important;
		text-align: center;
		width:100%;
		display: inline-table;
		 position: relative;
		// background-image: url(../../assets/image/blueball.png);
		// background-size: cover;
		padding: 4% 0 0 0;
		background-repeat: no-repeat;
	}

	.no {
		height: 100% !important;
		text-align: center;
		width: 100%;
		display: inline-table;
		 position: relative;
		// background-image: url(../../assets/image/redball.png);
		// background-size: cover;
		padding: 4% 0 0 0;
		background-repeat: no-repeat;
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
		animation-iteration-count: 2;

		-webkit-animation: myPlay 0.6s infinite alternate;
		-webkit-animation-timing-function: linear;
		-webkit-animation-iteration-count: 2;

		-moz-animation: myPlay 0.6s infinite alternate;
		-moz-animation-timing-function: linear;
		-moz-animation-iteration-count: 2;
		-o-animation: myPlay 0.6s infinite alternate;
		-o-animation-timing-function: linear;
		-o-animation-iteration-count: 2;
		//display: block;
		//margin: 50px auto;
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

		.classimg {
			margin: -20px calc(20vw - 95px) 0;
		}

		.twomenu {
			padding-top: 18%;
		}

		.allansw {
			height: 6.5rem;
		}

		.fast {
			font-size: 1.5rem;
		}

		.marginboth {
			margin: -3% !important;
		}
	}

	@media screen and (min-width: 482px) and (max-width: 569px) {
		.allansw {
			height:6rem;
		}
    .alldrag{
      top: -125%;
    }

		.fast {
			font-size: 1.5rem;
		}
    .fontsize{
      font-size: 1rem;
    }

		.classimg {
			margin: -20px calc(20vw - 95px) 0;
		}

		.marginboth {
			margin: -10px !important;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1199px){
		.allansw {
			height: 10rem;
		}

		.classimg {
			transform: scale(1.3);
			margin-top: 0%;
		}

		.textsize {
			top: 20%;
			transform: scale(1.2);
		}

		.twomenu {
			padding-top: 26%;
		}

		.alldrag {
			top: -135%;
		}

		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 15%;
			left: 8%;
			position: absolute;
			// font-size: x-large;
			max-height: 80%;
			min-height: 47%;
			margin-left: 2%;
			transform: scale(1.2);
		}

		.fontsizes {
			margin-top: 30%;
		}

		.fast {
			//font-size: 3.5rem;
		}

		.marginboth {
			margin: 0 20px !important;
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
  @media screen and (min-width: 1200px)and (max-width: 1365px) {
    .allansw {
    	height: 10rem;
    }

    .classimg {
    	transform: scale(1.3);
    	margin-top: 0%;
    }

    .textsize {
    	top: 20%;
    	transform: scale(1.2);
    }

    .twomenu {
    	padding-top: 26%;
    }

    .alldrag {
    	top: -135%;
    }

    .fontsize {
    	font-family: pepper;
    	color: white;
    	bottom: 15%;
    	left: 8%;
    	position: absolute;
    	font-size: 1.8rem;
    	max-height: 80%;
    	min-height: 47%;
    	margin-left: 2%;
    	transform: scale(1.2);
    }

    .fontsizes {
    	margin-top: 30%;
    }

    .fast {
    	//font-size: 3.5rem;
    }

    .marginboth {
    	margin: 0 20px !important;
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
	}

	@media screen and (min-width: 812px) and (max-width:1023px) {
		.twomenu {
			padding-top: 14%;
		}

		.allansw {
			//height: 9rem;
		}

		.fontsizes {
			margin-top: 17%;
		}

		.marginboth {
			margin: 10px !important;
		}
		.withcolor {
			height: 70%;
		}
	}

	@media screen and (min-width: 1366px) and (max-width: 1600px){
		.allansw {
			height: 15rem;
		}

		.classimg {
      transform: scale(1.3);
			margin: 13px calc(20vw - 108px) 0;
		}
    .textsize {
      top: 20%;
      transform: scale(1.2);
    }

    .twomenu {
      padding-top: 26%;
    }

    .alldrag {
      top: -135%;
    }

    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 15%;
      left: 8%;
      position: absolute;
      font-size: 1.8rem;
      max-height: 80%;
      min-height: 47%;
      margin-left: 2%;
      transform: scale(1.2);
    }

    .fontsizes {
      margin-top: 30%;
    }

    .fast {
      //font-size: 3.5rem;
    }

    .marginboth {
      margin: 0 20px !important;
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
    .allansw {
      height: 15rem;
    }

    .classimg {
      transform: scale(3);

    }
    .textsize {
      top: 20%;
      transform: scale(1.2);
    }



    .alldrag {
      top: -175%;
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


    .marginboth {
      margin: 0 8rem !important;
    }
    .fast{
      width:60%;
    }
    .fast2{
      width:60%;
    }
    .listimg{
      width:70%;
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
