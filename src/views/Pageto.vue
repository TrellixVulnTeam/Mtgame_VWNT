<template>
  <div class="pageto">
		<span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source
        src="../assets/video/gamemusic.mp3"></audio>
      </span>
    <transition name="fades">
      <div class="contain" v-show="!resume">
        <img src="../assets/image/rightback.png" @click="$tips(true);gomemu()" class="backbutton"/>
        <img src="../assets/image/help.png" @click="$tips(true);help()" class="helpbutton"/>
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 100%;display:block;position: absolute;">
            <img src="../assets/image/seasons.png"
                 style="width: 100%;background-color: #ffd55f;  z-index: -1;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[0].active">
            <img src="../assets/image/4-bg.png"
                 style="width: 100%;background-color: #ffd55f;  z-index: -1;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[1].active">
            <img src="../assets/image/5-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[2].active">
            <img src="../assets/image/6-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;opacity: 0.5;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[3].active">
            <img src="../assets/image/7-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[4].active">
            <img src="../assets/image/8-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[5].active">
            <img src="../assets/image/9-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[6].active">
            <img src="../assets/image/10-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[7].active">
            <img src="../assets/image/11-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[8].active">
            <img src="../assets/image/12-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[9].active">
            <img src="../assets/image/1-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[10].active">
            <img src="../assets/image/2-bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[11].active">
            <img src="../assets/image/3-3bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[12].active">
            <img src="../assets/image/4-4bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[13].active">
            <img src="../assets/image/5-5bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[14].active">
            <img src="../assets/image/6-6bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;opacity: 0.5;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[15].active">
            <img src="../assets/image/7-7bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[16].active">
            <img src="../assets/image/8-8bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[17].active">
            <img src="../assets/image/9-9bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[18].active">
            <img src="../assets/image/10-10bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[19].active">
            <img src="../assets/image/11-11bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[20].active">
            <img src="../assets/image/12-12bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[21].active">
            <img src="../assets/image/1-1bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[22].active">
            <img src="../assets/image/2-2bg.png"
                 style="width: 100%;  z-index: -1;background-color: #ffd55f;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[23].active">
            <!-- <img src="../assets/image/seasons.png"  style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;" > -->
            <p class="fontsizes" v-if="shownumb">{{ this.countpage }}/{{ this.question }}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div class="s-pageto" v-if="!onef" v-bind:class="{pageto2:!reload}">
            <img src="../assets/image/seasons.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[0].active">
            <img src="../assets/image/4-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[1].active">
            <img src="../assets/image/5-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[2].active">
            <img src="../assets/image/6-bg.png"
                 style="width: 100%;background-color: #ffd55f; opacity: 0.5;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[3].active">
            <img src="../assets/image/7-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[4].active">
            <img src="../assets/image/8-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[5].active">
            <img src="../assets/image/9-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[6].active">
            <img src="../assets/image/10-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[7].active">
            <img src="../assets/image/11-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[8].active">
            <img src="../assets/image/12-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[9].active">
            <img src="../assets/image/1-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[10].active">
            <img src="../assets/image/2-bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[11].active">
            <img src="../assets/image/3-3bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[12].active">
            <img src="../assets/image/4-4bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[13].active">
            <img src="../assets/image/5-5bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[14].active">
            <img src="../assets/image/6-6bg.png"
                 style="width: 100%;background-color: #ffd55f; opacity: 0.5;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[15].active">
            <img src="../assets/image/7-7bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[16].active">
            <img src="../assets/image/8-8bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[17].active">
            <img src="../assets/image/9-9bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[18].active">
            <img src="../assets/image/10-10bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[19].active">
            <img src="../assets/image/11-11bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[20].active">
            <img src="../assets/image/12-12bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[21].active">
            <img src="../assets/image/1-1bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[22].active">
            <img src="../assets/image/2-2bg.png"
                 style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;"
                 v-if="bgimg[23].active">
            <!-- <img src="../assets/image/seasons.png"  style="width: 100%;background-color: #ffd55f; height: 100%;display:block;position: absolute;" > -->
            <div v-if="zhezhao"
                 style="width: 100%; height: 80%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
            <!-- 遮罩禁止重复点击作用 -->
            <div class="smalltimes">
							<span v-for="ou in listout" :key="ou.id">
								<img src="../assets/image/smallback.png" v-show="!ou.bgc" class="smallimg"/>
								<img src="../assets/image/smallback1.png" v-show="ou.bgc" class="smallimg"/>
							</span>
            </div>
            <div class="radiubox"
                 v-bind:class="{itemsGt6: itemsGt6,itemsGt5: itemsGt5,itemsGt7: itemsGt7,itemsGt9: itemsGt9}"
                 style="text-align: left;">
              <img :src=picture class="question-img" align="middle" @click="change"/>
              <audio @canplay="getDuration" ref="videos" id="videos" autoplay="autoplay" :src=audio></audio>
              <audio v-if="soundsWrong" autoplay="autoplay">
                <source src="../assets/video/Wrong.mp3">
              </audio>
              <audio v-if="soundscorrect" autoplay="autoplay">
                <source src="../assets/video/correct.mp3">
              </audio>
              <!-- <audio v-if="soundsWrong" autoplay="autoplay"><source src="../assets/video/Wrong.mp3"></audio> -->
            </div>
            <img src="../assets/image/StarOrange.png" class="starts" v-show="!ended">
            <div class="dndList" v-if="!reload"
                 v-bind:class="{itemsGt6: itemsGt6,itemsGt5:itemsGt5,itemsGt7:itemsGt7,itemsGt8:itemsGt8,itemsGt9:itemsGt9}">
              <div class="dndList-list1"
                   v-bind:class="{itemsGt6: itemsGt6,itemsGt5:itemsGt5,itemsGt7:itemsGt7,itemsGt8:itemsGt8,itemsGt9:itemsGt9,answer: !issuccess}"
                   style="z-index:99">

                <ul id="answer-box" v-bind:class="{colorchange: !issuccess}">
                  <li v-for="(item, index) in items2" :key="index" class="answer-items items2">
                    {{ item.data }}
                  </li>
                </ul>
              </div>
              <!-- <div  v-if="zhezhao" class="dndList-list2" style="display:block;position: absolute;opacity: 0;z-index: 1000;"></div> -->
              <div class="dndList-list2"
                   v-bind:class="{itemsGt6: itemsGt6,itemsGt7:itemsGt7,itemsGt5:itemsGt5,itemsGt9:itemsGt9}">

                <div class="question-box"
                     v-bind:class="{itemsGt6: itemsGt6,itemsGt7:itemsGt7,itemsGt5:itemsGt5,itemsGt9:itemsGt9}">
                  <div v-for="(item, index) in items1" :key="index" class="listli">
                    <div class="items1 question" @mousedown="down($event, index)" @touchstart="down($event, index)"
                         @mousemove="move($event, index)"
                         @touchmove="move($event, index)" @mouseup="end($event, index)" @touchend="end($event, index)">
                      <div class="draggable-item-horizontal">
                        {{ item.data }}
                      </div>
                    </div>

                    <div class="items1 question-back">
                      <div class="draggable-item-horizontal">
                        {{ item.data }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="settinglist">
          <img src="../assets/image/season-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[0].active">
          <img src="../assets/image/4-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[1].active">
          <img src="../assets/image/5-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[2].active">
          <img src="../assets/image/6-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[3].active">
          <img src="../assets/image/7-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[4].active">
          <img src="../assets/image/8-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[5].active">
          <img src="../assets/image/9-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[6].active">
          <img src="../assets/image/10-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[7].active">
          <img src="../assets/image/11-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[8].active">
          <img src="../assets/image/12-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[9].active">
          <img src="../assets/image/1-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[10].active">
          <img src="../assets/image/2-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[11].active">
          <img src="../assets/image/3-3bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[12].active">
          <img src="../assets/image/4-4bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[13].active">
          <img src="../assets/image/5-5bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[14].active">
          <img src="../assets/image/6-6bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[15].active">
          <img src="../assets/image/7-7bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[16].active">
          <img src="../assets/image/8-8bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[17].active">
          <img src="../assets/image/9-9bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[18].active">
          <img src="../assets/image/10-10bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[19].active">
          <img src="../assets/image/11-11bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[20].active">
          <img src="../assets/image/12-12bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[21].active">
          <img src="../assets/image/1-1bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[22].active">
          <img src="../assets/image/2-2bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[23].active">
          <!-- <img src="../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
          <span class="fontsize">Put the letter in the correct spot.</span>
          <div @click="$tips(true);changesett()">
            <img src="../assets/image/season-pause.png" class=" pause" v-if="bgimg[0].active">
            <img src="../assets/image/4-pause.png" class=" pause" v-if="bgimg[1].active">
            <img src="../assets/image/5-pause.png" class=" pause" v-if="bgimg[2].active">
            <img src="../assets/image/6-pause.png" class=" pause" v-if="bgimg[3].active">
            <img src="../assets/image/7-pause.png" class=" pause" v-if="bgimg[4].active">
            <img src="../assets/image/8-pause.png" class=" pause" v-if="bgimg[5].active">
            <img src="../assets/image/9-pause.png" class=" pause" v-if="bgimg[6].active">
            <img src="../assets/image/10-pause.png" class=" pause" v-if="bgimg[7].active">
            <img src="../assets/image/11-pause.png" class=" pause" v-if="bgimg[8].active">
            <img src="../assets/image/12-pause.png" class=" pause" v-if="bgimg[9].active">
            <img src="../assets/image/1-pause.png" class=" pause" v-if="bgimg[10].active">
            <img src="../assets/image/2-pause.png" class=" pause" v-if="bgimg[11].active">
            <img src="../assets/image/3-3pause.png" class=" pause" v-if="bgimg[12].active">
            <img src="../assets/image/4-4pause.png" class=" pause" v-if="bgimg[13].active">
            <img src="../assets/image/5-5pause.png" class=" pause" v-if="bgimg[14].active">
            <img src="../assets/image/6-6pause.png" class=" pause" v-if="bgimg[15].active">
            <img src="../assets/image/7-7pause.png" class=" pause" v-if="bgimg[16].active">
            <img src="../assets/image/8-pause.png" class=" pause" v-if="bgimg[17].active">
            <img src="../assets/image/9-9pause.png" class=" pause" v-if="bgimg[18].active">
            <img src="../assets/image/10-10pause.png" class=" pause" v-if="bgimg[19].active">
            <img src="../assets/image/11-11pause.png" class=" pause" v-if="bgimg[20].active">
            <img src="../assets/image/12-12pause.png" class=" pause" v-if="bgimg[21].active">
            <img src="../assets/image/1-1pause.png" class=" pause" v-if="bgimg[22].active">
            <img src="../assets/image/2-2pause.png" class=" pause" v-if="bgimg[23].active">

          </div>
          <div @click="$tips(true);change()">
            <!-- <img src="../assets/image/Icon_Repeat.png" class="repeat" v-if="action1"> -->
            <img src="../assets/image/season-repeat.png" class="repeat" v-if="bgimg[0].active">
            <img src="../assets/image/4-repeat.png" class="repeat" v-if="bgimg[1].active">
            <img src="../assets/image/5-repeat.png" class="repeat" v-if="bgimg[2].active">
            <img src="../assets/image/6-repeat.png" class="repeat" v-if="bgimg[3].active">
            <img src="../assets/image/7-repeat.png" class="repeat" v-if="bgimg[4].active">
            <img src="../assets/image/8-repeat.png" class="repeat" v-if="bgimg[5].active">
            <img src="../assets/image/9-repeat.png" class="repeat" v-if="bgimg[6].active">
            <img src="../assets/image/10-repeat.png" class="repeat" v-if="bgimg[7].active">
            <img src="../assets/image/11-repeat.png" class="repeat" v-if="bgimg[8].active">
            <img src="../assets/image/12-repeat.png" class="repeat" v-if="bgimg[9].active">
            <img src="../assets/image/1-repeat.png" class="repeat" v-if="bgimg[10].active">
            <img src="../assets/image/2-repeat.png" class="repeat" v-if="bgimg[11].active">
            <img src="../assets/image/3-3repeat.png" class="repeat" v-if="bgimg[12].active">
            <img src="../assets/image/4-4repeat.png" class="repeat" v-if="bgimg[13].active">
            <img src="../assets/image/5-5repeat.png" class="repeat" v-if="bgimg[14].active">
            <img src="../assets/image/6-6repeat.png" class="repeat" v-if="bgimg[15].active">
            <img src="../assets/image/7-7repeat.png" class="repeat" v-if="bgimg[16].active">
            <img src="../assets/image/8-repeat.png" class="repeat" v-if="bgimg[17].active">
            <img src="../assets/image/9-9repeat.png" class="repeat" v-if="bgimg[18].active">
            <img src="../assets/image/10-10repeat.png" class="repeat" v-if="bgimg[19].active">
            <img src="../assets/image/11-11repeat.png" class="repeat" v-if="bgimg[20].active">
            <img src="../assets/image/12-12repeat.png" class="repeat" v-if="bgimg[21].active">
            <img src="../assets/image/1-1repeat.png" class="repeat" v-if="bgimg[22].active">
            <img src="../assets/image/2-2repeat.png" class="repeat" v-if="bgimg[23].active">

          </div>
        </div>
      </div>
    </transition>
    <div class='popContainer' v-if="popp">
      <p class="spanp">{{ spanp }}</p>
      <button class="roleimg">
        <img src="../assets/image/score-rule.png" style="height: 100%;" v-if="ruleimg10"/>
        <img src="../assets/image/boss-rule2.png" style=" height: 100%;" v-if="ruleimg8"/>
      </button>
      <div class="withcolor oringe">
        <div class="close" @click="$tips(true);pop()">
          <img src="../assets/image/cloce.png">
        </div>
        <img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/a.gif">


      </div>
    </div>
    <transition name="fades">
      <div class="about" v-show="resume">
        <div class="twomenu">
          <div>
            <img src="../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show"
                 @click="$tips(true);sound()"/>
            <img src="../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show"
                 @click="$tips(true);sound()"/>
          </div>
          <div style="margin-top: 5px;">
            <img src="../assets/image/resume.png" style="width: 30%; height: 10%;" @click="$tips(true);changesett()">
          </div>
          <!-- <div style="margin-top: 5px;"  >
						<div><img src="../assets/image/home.png" style="width: 30%; height: 10%;" @click="$tips(true);gomemu()"></div>
					</div> -->
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
import Pageto from "@/components/pageto.vue";
// import $ from 'jquery';
var qs = require('qs');
export default {
  name: "pageto",
  components: {
    Pageto
  },
  data() {
    return {
      level: '',
      show: true,
      popp: false,
      spanp: '',
      duration: 0,
      ruleimg8: false,
      ruleimg10: false,
      ruleimg4: false,
      ruleimg15: false,
      ruleimg25: false,
      ruleimg12: false,
      shownumb: false,
      gamename: '',
      timeurl: '/user/playTime',
      bgimg: [
        {active: false, spring: 'Seasons'},
        {active: false, spring: 'Transportation'},
        {active: false, spring: 'Bugs'},
        {active: false, spring: 'Clothes'},
        {active: false, spring: 'Theme Park'},
        {active: false, spring: 'Space'},
        {active: false, spring: 'My Body'},
        {active: false, spring: 'My Weekend'},
        {active: false, spring: 'Wild Animals'},
        {active: false, spring: 'Christmas'},
        {active: false, spring: "Let's Go Shopping"},
        {active: false, spring: 'My Community'},
        {active: false, spring: 'Fun Time!'},
        {active: false, spring: 'My Home'},
        {active: false, spring: 'Our World'},
        {active: false, spring: 'Fairy Tales'},
        {active: false, spring: 'Exploration'},
        {active: false, spring: 'Summer Fun'},
        {active: false, spring: 'School Time'},
        {active: false, spring: 'Animals'},
        {active: false, spring: 'Family Time'},
        {active: false, spring: 'Holidays'},
        {active: false, spring: 'Meal Time'},
        {active: false, spring: 'On the Farm'},
      ],
      countpage: 1,
      timeout: 0,
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

      ],
      picture: '',
      audio: '',
      video: false,
      soundsWrong: false,
      soundscorrect: false,
      action: false,

      resume: false,
      zhezhao: false,
      starts2: false,
      account: 0,
      question: 8,
      itemsGt6: 0,
      itemsGt5: 0,
      itemsGt7: 0,
      itemsGt8: 0,
      itemsGt9: 0,
      reload: false,
      onef: true,
      ended: true,
      levels: 0,
      issuccess: true,
      id: '',
      type: 'pageto',
      items2: [],
      items3: [],
      items1: [],
      listA: [],
      // list:any[] = []，
      listA2: [],

      flags: false,
      position: {
        x: 0,
        y: 0
      },
      nx: '',
      ny: '',
      dx: '',
      dy: '',
      xPum: '',
      yPum: '',
      unitsId: '',
      unit: '',
      menuId: '',
      partName: '',
      anTop: '',
      anLeft: '',
      anRight: '',
      answerL: 0,
      anBottom: '',
      pic: "",
      // url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseA',
      // url1: 'http://demo11.embraiz.com/mtGame/exercise/accountSum',
      // pic: "http://demo11.embraiz.com/mtGameHK",
      url: '/exercise/',
      url1: '',
      part: '',
      // url: 'http://localhost:8080/mtGame/exercise/exerciseA',
      // url1:'http://localhost:8080/mtGame/exercise/accountSum',
    }
  },

  watch: {
    'onef': function (newVal) {
      this.itemsGt5 = 0;
      this.itemsGt6 = 0;
      this.itemsGt7 = 0;
      this.itemsGt8 = 0;
      this.itemsGt9 = 0;
      if (this.items1.length == 5) {
        this.itemsGt5 = 1;
      } else if (this.items1.length >= 6) {
        this.itemsGt6 = 1;
        this.starts2 = true;
      }
      if (this.items1.length >= 7) {
        this.itemsGt7 = 1;
        this.starts2 = true;
      }
      if (this.items1.length == 8) {
        this.itemsGt8 = 1;
        this.starts2 = true;
      }
      if (this.items1.length >= 9) {
        this.itemsGt9 = 1;
        this.starts2 = true;
      }
      if (this.onef == true) {
        this.timeout = 0;
        for (var t = 0; t < this.listout.length; t++) {
          this.listout[t].bgc = false;
        }
        setTimeout(() => {
          this.onef = false;

          // this.video = true;
          // this.action1 = true;

          setTimeout(() => {
            var endDiv = document.getElementById('answer-box');
            var answerBox = endDiv.getBoundingClientRect();
            this.issuccess = true;
            this.ended = true;
            this.anLeft = answerBox.left;
            this.anTop = answerBox.top;
            this.anRight = answerBox.left + answerBox.width;
            this.anBottom = answerBox.top + answerBox.height;
          }, 2000);
        }, 2000);
      }
    },
    'video': function (newVal) {
      console.log(this.video);
      if (this.video == true) {
        this.$refs.videos.play();
        setTimeout(() => {
          this.$refs.videos.pause();
          this.video = false;
        }, this.duration * 1000);
      }
    },

  },

  methods: {
    // 实现移动端拖拽
    getDuration() {
      console.log(this.$refs.videos.duration); //此时可以获取到duration
      this.duration = this.$refs.videos.duration;
      this.video = true;
    },
    down(e, index) {

      e.preventDefault();
      this.zhezhao = true;
      var el = e.currentTarget;
      el.style.opacity = 1;

      //var moveDiv = document.getElementsByClassName('question');
      this.flags = true;
      var touch = e.touches ? e.touches[0] : e;
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      // this.dx = moveDiv[index].offsetLeft;
      // this.dy = moveDiv[index].offsetTop;
      this.dx = el.offsetLeft;
      this.dy = el.offsetTop;

    },
    move(e, index) {
      //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove

      event.preventDefault();
      this.zhezhao = true;
      var el = e.currentTarget;
      // var moveDiv = document.getElementsByClassName('question');
      if (this.flags) {
        var touch = e.touches ? e.touches[0] : e;
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        // moveDiv[index].style.left = this.xPum + "px";
        // moveDiv[index].style.top = this.yPum + "px";
        el.style.left = this.xPum + "px";
        el.style.top = this.yPum + "px";
      }
    },
    //鼠标释放时候的函数
    end(e, index) {
      event.preventDefault();
      var el = e.currentTarget;
      this.flags = false;
      this.zhezhao = false;
      ///this.zhezhao=false;
      // 鼠标释放的时获取鼠标位置
      var touch = e.touches ? e.changedTouches[0] : e;
      var mouseX = touch.clientX, // 获取鼠标x轴的位置
        mouseY = touch.clientY; // 获取鼠标y轴的位置

      var moveDiv = document.getElementsByClassName('question');
      var moveDiv_b = document.getElementsByClassName('question-back');
      var endDiv = document.getElementById('answer-box');
      var answerArr = document.getElementsByClassName("answer-items"); // 节点
      var positionArr = []; // 节点位置
      var rangeArr = [];
      var minIndex = null;

      if (this.items1[index].isMove) { // 判断是否从底部拉上去的
        if (mouseX > this.anLeft && mouseX < this.anRight && mouseY > this.anTop && mouseY < this.anBottom) { // 碰撞检测鼠标是否进入输入框
          for (var i = 0; i < answerArr.length; i++) { // 循环圆框节点
            positionArr.push(answerArr[i].getBoundingClientRect());
          }
          positionArr.forEach((item, index) => { // 循环获取圆框的位置 减去 鼠标的位置
            rangeArr.push({
              i: index,
              range: Math.abs((item.left + 20) - mouseX)
            });
          });
          rangeArr.sort((a, b) => {
            return a.range - b.range;
          });
          minIndex = rangeArr[0].i; // 获取距离鼠标最近圆框

          this.items1[index].isMove = 0;

          if (this.items2[minIndex].isAc) {
            // moveDiv[index].style.opacity = 0;
            el.style.opacity = 0;
            //	moveDiv[index].style.left = answerArr[minIndex].offsetLeft + "px"; // 拖拽div移入处理位置
            //	moveDiv[index].style.top = answerArr[minIndex].offsetTop + "px";
            this.answerL += 1;
            this.items2[minIndex].id = this.items1[index].id; // 拖拽div移入处理数组
            this.items2[minIndex].data = this.items1[index].data;
            this.items2[minIndex].isAc = 0;
            this.items2[minIndex].sorti = this.items1[index].sorti;
          } else {
            // moveDiv[index].style.opacity = 0;
            el.style.opacity = 0;
            moveDiv[this.items2[minIndex].sorti].style.opacity = 1;
            moveDiv[this.items2[minIndex].sorti].style.left = moveDiv_b[this.items2[minIndex].sorti].offsetLeft + "px";
            moveDiv[this.items2[minIndex].sorti].style.top = moveDiv_b[this.items2[minIndex].sorti].offsetTop + "px";
            this.items1.forEach((item, index) => { // 循环判断获取被定下来的id
              if (this.items2[minIndex].id === item.id) {
                this.items1[index].isMove = 1;
              }
            });

            this.items2[minIndex].id = this.items1[index].id;
            this.items2[minIndex].data = this.items1[index].data;
            this.items2[minIndex].sorti = this.items1[index].sorti;
          }
        } else { // 没有进入归位
          this.items1[index].isMove = 1;
          // moveDiv[index].style.left = this.dx + "px";
          // moveDiv[index].style.top = this.dy + "px";
          el.style.left = this.dx + "px";
          el.style.top = this.dy + "px";
        }
      } else {

        el.style.opacity = 0;

        if (mouseX < this.anLeft || mouseX > this.anRight || mouseY < this.anTop || mouseY > this.anBottom) { // 碰撞检测鼠标是否离开了输入框
          this.answerL -= 1;
          //	console.log(this.answerL);
          this.items1[index].isMove = 1; // 重置状态，让其可以重新拖动上去
          el.style.opacity = 1; // 重置状态，位置重置
          el.style.left = moveDiv_b[index].offsetLeft + "px";
          el.style.top = moveDiv_b[index].offsetTop + "px";

          this.items2.forEach((item, i) => { // 循环判断获取被定下来的id
            if (item.id === this.items1[index].id) {
              // this.items2.splice(i,1);
              this.items2[i].id = ""; // 重置输入框的状态
              this.items2[i].data = "";
              this.items2[i].isAc = 1;
              this.items2[i].sorti = "";
            }
          });

        } else {
          this.items1[index].isMove = 0;
          el.style.opacity = 0;
          el.style.left = this.dx + "px";
          el.style.top = this.dy + "px";

        }
      }
      //                    for(var i=0;i<this.items2.length;i++){
      // 	if (this.items2[i].id != '' && this.items2[i].id != null && this.items2[i].data != '' && this.items2[i].data != null) {
      // 		this.answerL+= 1;
      // 		console.log(this.answerL);
      // 	}
      // }

      // this.items2.forEach((item) => { // 循环判断输入data
      //
      // });
      // console.log(this.answerL);
      if (this.answerL === this.items1.length && this.answerL === this.items3.length) {
        //	console.log(this.answerL);
        var isError = false;
        this.zhezhao = true;
        // this.countpage += 1;
        this.items2.forEach((item, index) => {

          if (item.data != this.items3[index].data) {
            isError = true;
          }
        });
        if (this.countpage >= this.listA.length) {
          if (!isError) {
            this.countpage += 1;
            this.ended = false;
            this.soundscorrect = true;
            if (this.timeout == 0) {
              this.account += 1;
            }
            setTimeout(() => {
              this.ended = true;
              this.soundscorrect = false;
              setTimeout(() => {
                this.$router.push({
                  //核心语句
                  path: "/result", //跳转的路径
                  query: {
                    //路由传参时push和query搭配使用 ，作用时传递参数
                    // id: this.id,
                    type: this.type,
                    partName: 'partNameA',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit,
                    part: this.part,
                    level: this.level,
                  }
                });
              }, 2000);
            }, 2000);
          } else {
            this.timeout = this.timeout + 1;
            if (this.timeout >= 1) {
              for (var t = 1; t <= this.timeout; t++) {
                this.listout[3 - t].bgc = true;
              }
            }
            this.issuccess = false;
            this.soundsWrong = true;
            setTimeout(() => {
              this.issuccess = true;
              this.soundsWrong = false;
              if (this.timeout < 3) {
                this.zhezhao = false;
                this.items2.forEach((item, index) => {
                  if (item.data != this.items3[index].data) {
                    answerArr[index].style.color = "#cc6453";
                    this.answerL--;
                  }

                  setTimeout(() => {

                    if (item.data != this.items3[index].data) {
                      // el.style.opacity = 0;
                      moveDiv[this.items2[index].sorti].style.opacity = 1;
                      moveDiv[this.items2[index].sorti].style.left = moveDiv_b[this.items2[index].sorti].offsetLeft + "px";
                      moveDiv[this.items2[index].sorti].style.top = moveDiv_b[this.items2[index].sorti].offsetTop + "px";
                      this.items1.forEach((items, i) => { // 循环判断获取被定下来的id
                        if (this.items2[index].id === items.id) {
                          this.items1[i].isMove = 1;
                        }
                      });
                      answerArr[index].style.color = "";
                      // 循环判断获取被定下来的id
                      this.items2[index].id = ""; // 重置输入框的状态
                      this.items2[index].data = "";
                      this.items2[index].isAc = 1;
                      this.items2[index].sorti = "";
                    }

                  }, 1000);
                });
              } else {
                this.items2.forEach((item, index) => {
                  if (item.data != this.items3[index].data) {
                    answerArr[index].style.color = "#cc6453";
                  }

                });
                setTimeout(() => {
                  this.items2 = this.items3;
                  this.issuccess = true;
                  this.sum = this.account;
                  setTimeout(() => {
                    this.$router.push({
                      //核心语句
                      path: "/result", //跳转的路径
                      query: {
                        //路由传参时push和query搭配使用 ，作用时传递参数
                        type: this.type,
                        partName: 'partNameA',
                        account: this.account,
                        menuId: this.menuId,
                        unitsId: this.unitsId,
                        unit: this.unit,
                        part: this.part,
                        level: this.level,
                      }
                    });
                  }, 3000);
                }, 2000);
              }
            }, 2000);

          }

        } else {
          if (!isError) {
            this.countpage += 1;
            // console.log('答题正确');
            this.ended = false;
            this.soundscorrect = true;
            if (this.timeout == 0) {
              this.account += 1;
            }
            setTimeout(() => {
              this.ended = true;
              this.soundscorrect = false;
              this.onef = true;
              this.zhezhao = false;
              this.answerL = 0;
              this.items1 = this.listA[this.countpage - 1].listA1;
              this.items2 = this.listA[this.countpage - 1].listA3;
              this.items3 = this.listA[this.countpage - 1].listA2;
              for (var i = 0; i < this.items1.length; i++) {
                this.items1[i].sorti = i;
              }
              this.picture = this.pic + this.listA[this.countpage - 1].bg;
              this.audio = this.pic + this.listA[this.countpage - 1].audio;
            }, 3000);
          } else {
            this.timeout = this.timeout + 1;
            if (this.timeout >= 1) {
              for (var t = 1; t <= this.timeout; t++) {
                this.listout[3 - t].bgc = true;
              }
            }

            // console.log('答题错误');
            this.issuccess = false;
            this.soundsWrong = true;
            setTimeout(() => {
              this.issuccess = true;
              this.soundsWrong = false;
              if (this.timeout < 3) {
                this.items2.forEach((item, index) => {

                  if (item.data != this.items3[index].data) {
                    answerArr[index].style.color = "#cc6453";
                    this.answerL--;
                  }
                  this.zhezhao = false;
                  setTimeout(() => {
                    if (item.data != this.items3[index].data) {
                      // el.style.opacity = 0;
                      moveDiv[this.items2[index].sorti].style.opacity = 1;
                      moveDiv[this.items2[index].sorti].style.left = moveDiv_b[this.items2[index].sorti].offsetLeft + "px";
                      moveDiv[this.items2[index].sorti].style.top = moveDiv_b[this.items2[index].sorti].offsetTop + "px";
                      this.items1.forEach((items, i) => { // 循环判断获取被定下来的id
                        if (this.items2[index].id === items.id) {
                          this.items1[i].isMove = 1;
                        }
                      });
                      answerArr[index].style.color = "";
                      // 循环判断获取被定下来的id
                      this.items2[index].id = ""; // 重置输入框的状态
                      this.items2[index].data = "";
                      this.items2[index].isAc = 1;
                      this.items2[index].sorti = "";
                    }

                  }, 1000);
                });
              } else {
                this.items2.forEach((item, index) => {
                  if (item.data != this.items3[index].data) {
                    answerArr[index].style.color = "#cc6453";
                  }
                });
                this.countpage += 1;
                setTimeout(() => {
                  this.items2 = this.items3;
                  setTimeout(() => {
                    this.issuccess = true;
                    this.onef = true;
                    this.zhezhao = false;
                    this.answerL = 0;
                    this.items1 = this.listA[this.countpage - 1].listA1;
                    this.items2 = this.listA[this.countpage - 1].listA3;
                    this.items3 = this.listA[this.countpage - 1].listA2;
                    for (var i = 0; i < this.items1.length; i++) {
                      this.items1[i].sorti = i;
                    }
                    this.picture = this.pic + this.listA[this.countpage - 1].bg;
                    this.audio = this.pic + this.listA[this.countpage - 1].audio;
                  }, 3000);
                }, 2000);
              }
            }, 2000);

          }

        }
      }
    },
    change() {
      if (this.onef == false) {
        //this.video = true;
        let audio = new Audio(this.audio);
        audio.play();
      }
    },
    changesett() {
      if (this.action == false && this.onef == false) {
        this.action = true;
        setTimeout(() => {
          this.action = false;
          this.resume = !this.resume;
          this.zhezhao = false;
        }, 1000);
      }
    },
    gomemu() {
      var audio = document.getElementById('music');
      if (localStorage.getItem('audiomusic') == "false") {

      } else {
        audio.play();
      }
      // 统计时间
      var endtimestamp = (new Date()).getTime();
      this.$axios.post(this.timeurl, qs.stringify({
        id: localStorage.getItem('startTimeid'),
        time: endtimestamp,
        name: this.gamename,
        unit: this.unit,
        level: localStorage.getItem('level'),
        cources: localStorage.getItem('cources'),
        studentId: localStorage.getItem('studentId')
      })).then(res => {
        localStorage.setItem('startTimeid', '');
        localStorage.setItem('gamename', '');
      }, res => {
        alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      });
      this.$router.push({ //核心语句
        path: '/home', //跳转的路径
        query: {
          unitsId: this.unitsId,
          unit: this.unit,
          part: this.part,
          level: this.level,
        }
      })
    },
    pop() {
      this.popp = !this.popp;
    },
    help() {
      if (this.onef == false) {
        this.spanp = "Put the letter in the correct spot.";
        this.popp = !this.popp;
        if (this.items2[0].rank == 0) {
          this.ruleimg8 = true;
          this.ruleimg10 = false;
        } else if (this.items2[0].rank == 1) {
          this.ruleimg8 = false;
          this.ruleimg10 = true;
        }
      }

    },
    sound() {
      this.show = !this.show;
      if (this.show == false) {
        // this.$refs.MusicPlay.pause();
        localStorage.setItem("gamemusic", "false");
      } else {
        // this.$refs.MusicPlay.play();
        localStorage.setItem("gamemusic", "true");
      }
    },
    bodyScroll(event) {
      event.preventDefault();
    },
  },
  destroyed() {
    document.body.removeEventListener('touchmove', this.bodyScroll, {passive: false});
    window.removeEventListener('popstate', this.gomemu, false);
  },

  created() {
    this.pic = this.$axios.defaults.baseURL2;
    this.unit = this.$route.query.unit;
    this.unitsId = this.$route.query.unitsId;
    this.part = this.$route.query.part;
    this.gamename = this.$route.query.name;
    this.level = this.$route.query.level;
    if (this.gamename == '' || this.gamename == undefined) {
      this.gamename = localStorage.getItem('gamename')
    } else {
      localStorage.setItem('gamename', this.gamename);
    }
    this.menuId = this.$route.query.menuId; //接受参数关键代码
    if (this.part === 'part1') {
      this.url1 = this.url + 'exerciseAPart1';
    } else if (this.part === 'part2') {
      this.url1 = this.url + 'exerciseAPart2';
    } else if (this.part === 'part3') {
      this.url1 = this.url + 'exerciseA';
    }
    var timestamp = (new Date()).getTime();
    localStorage.setItem('startTimeid', timestamp);
    for (var i = 0; i < this.bgimg.length; i++) {
      // console.log(this.bgimg[i].spring);
      if (this.unit === this.bgimg[i].spring) {
        this.bgimg[i].active = true;
      } else {
        this.bgimg[i].active = false;
      }
    }
    if (localStorage.getItem('gamemusic') == "false") {
      this.show = false;
    } else {
      this.show = true;
    }
    this.$axios.post(this.url1, qs.stringify({
      menuDetailId: this.menuId,
    })).then(res => {
      if (this.part === 'part1') {
        this.listA = res.data.ListPart1;
        console.log(res.data);
        this.question = this.listA.length;
      } else if (this.part === 'part2') {
        this.listA = res.data.ListPart2;
        this.question = this.listA.length;
      } else if (this.part === 'part3') {
        this.listA = res.data.listA;
        console.log(res.data);
        this.question = this.listA.length;
      }
      // this.listA=res.data.listA;
      //  this.question=this.listA.length;
      this.shownumb = true;
      for (var i = 0; i < this.listA.length; i++) {
        var data1 = this.listA[i].data.split('');
        var data2 = this.listA[i].data2.split(',');
        this.listA[i].listA2 = [];
        this.listA[i].listA1 = [];
        this.listA[i].listA3 = [];
        for (var u = 0; u < data2.length; u++) {
          this.listA[i].listA1.push({
            data: data2[u],
            id: u,
            isMove: this.listA[i].isMove,
            isAc: this.listA[i].isAc,
            rank: this.listA[i].rank,
            sorti: this.listA[i].sorti
          })

        }
        for (var u = 0; u < data1.length; u++) {
          this.listA[i].listA2.push({
            data: data1[u],
            id: u,
            isMove: this.listA[i].isMove,
            isAc: this.listA[i].isAc,
            rank: this.listA[i].rank,
            sorti: this.listA[i].sorti
          });
          this.listA[i].listA3.push({
            data: '',
            id: u,
            isMove: this.listA[i].isMove,
            isAc: this.listA[i].isAc,
            rank: this.listA[i].rank,
            sorti: this.listA[i].sorti
          })

        }
      }
      //console.log(this.listA);
      this.items1 = this.listA[this.countpage - 1].listA1;
      this.items2 = this.listA[this.countpage - 1].listA3;
      this.items3 = this.listA[this.countpage - 1].listA2;
      for (var i = 0; i < this.items1.length; i++) {
        this.items1[i].sorti = i;
      }
      this.picture = this.pic + this.listA[this.countpage - 1].bg;
      this.audio = this.pic + this.listA[this.countpage - 1].audio;
      setTimeout(() => {
          document.getElementById('alertFram').style.display = 'none'
        }
        , 1000)
    }, res => {
      alertMsg("You must be connected to the internet.<br>Please connect and try again.");
    });
    // 统计时间
    this.$axios.post(this.timeurl, qs.stringify({
      id: timestamp,
      time: timestamp,
      name: this.gamename,
      unit: this.unit,
      level: localStorage.getItem('level'),
      cources: localStorage.getItem('cources'),
      studentId: localStorage.getItem('studentId')
    })).then(res => {
      // console.log(res.data);
    }, res => {
      alertMsg("You must be connected to the internet.<br>Please connect and try again.");
    });

    //console.log(this.items1.length);

    setTimeout(() => {
      if (this.items1 != [] && this.items1 != 0 && this.items1 != "0") {
        if (this.items1.length == 5) {
          this.itemsGt5 = 1;
        } else if (this.items1.length >= 6) {
          this.itemsGt6 = 1;
          this.starts2 = true;
        }
        if (this.items1.length >= 7) {
          this.itemsGt7 = 1;
          this.starts2 = true;
        }
        if (this.items1.length == 8) {
          this.itemsGt8 = 1;
          this.starts2 = true;
        }
        if (this.items1.length >= 9) {
          this.itemsGt9 = 1;
          this.starts2 = true;
        }
      }


      if (this.onef == true && this.shownumb == true) {
        this.onef = false;
        this.issuccess = true;
        this.reload = false;
        // this.video = true;
        // this.action1 = true;

        setTimeout(() => {
          var endDiv = document.getElementById('answer-box');
          var answerBox = endDiv.getBoundingClientRect();
          this.anLeft = answerBox.left;
          this.anTop = answerBox.top;
          this.anRight = answerBox.left + answerBox.width;
          this.anBottom = answerBox.top + answerBox.height;
        }, 1500);
      }
    }, 2000);
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.gomemu, false);
    }
    document.body.addEventListener('touchmove', this.bodyScroll, {passive: false});
  },

};
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  cursor: auto !important;
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.pageto {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  background-color: #ffd55f;
  z-index: -1;
}

.pageto2 {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  background-color: rgb(255, 145, 126);
}

.s-pageto {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffd55f;
}

.about {
  display: flex;
  margin: 0px;
  width: 100%;
  height: 100%;
  z-index: 201;
  display: block;
  position: fixed;
  background-color: #44ccc2;
}

.starts {
  position: absolute;
  z-index: 100;
  left: 25%;
  transform: translate(0%, -15%);
  width: 50%;
}

.starts2 {
  position: absolute;
  z-index: 100;
  left: 25%;
  top: -30%;
  transform: translate(-50%, -50%);
  width: 100%;
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

//    .bigsize{
// 	margin: 0 auto;
// }
.smooth-dnd-draggable-wrapper.animated {
  transition: transform ease;
}

.backbutton {
  // display: block;
  z-index: 101;
  width: 6%;
  position: fixed;
  left: 15px;
  top: 15px;
}

.helpbutton {
  z-index: 101;
  width: 6%;
  position: fixed;
  right: 15px;
  top: 15px;
}

/*.smooth-dnd-container.horizontal>.smooth-dnd-draggable-wrapper {
		height: 100%;
		display: inline-block;
		vertical-align: top;
	}*/
.other-radiubox {
  float: left;
  border-radius: 50%;
  width: 32%;
  height: 56%;
}

.other-list1 {
  position: absolute;
  right: 8%;
  min-width: 60%;
  max-width: 80%;
}

.other-list2 {
  width: 45%;
  height: auto;
  display: inline-block;
  position: absolute;
}

.smalltimes {
  position: absolute;
  width: 100%;
  top: 10px;
  right: 10%
}

.smallimg {
  width: 3%;
  float: right;
  position: relative;
  margin: 5px;
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

.oringe {
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

.spanp {
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

.spanp1 {
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
  margin-top: 5%
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
  color: #EA8C26;
  // position: sticky;
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

// .marandsize {
// 	margin: 0;
// }

.itemsGt5 {
  right: 13%;
}

.dndList-list2.itemsGt5 {
  right: 23%;
  top: 30%;
}

.fade-enter {
  transform: translate3d(100%, 0, 0);
}

.fade-enter-active {
  transition: all 0.6s;
}

.fade-leave-active {
  transition: all 0.6s;
}

.fade-leave-to {
  //opacity: 0;
  transform: translate3d(0, 0, 0);
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
  transform: translate3d(-99%, 0, 0);
}

.fades-enter-active {
  transition: all 0.6s;
}

.fades-leave-active {
  transition: all 0.6s;
}

.fades-enter {
  transform: translate3d(0, 100%, 0);
}

.fades-leave-to {
  transform: translate3d(0, -100%, 0);
}

.colorchange {
  background-color: #cc6453 !important;
}

.answer {
  background-color: #cc6453 !important;
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
    margin-left: 0px;
  }

  50% {
    margin-left: 10px;
  }

  100% {
    margin-left: 0px;
  }
}

@-webkit-keyframes myPlay {
  0% {
    margin-left: 0px;
  }

  50% {
    margin-left: 10px;
  }

  100% {
    margin-left: 0px;
  }
}

@-moz-keyframes myPlay {
  0% {
    margin-left: 0px;
  }

  50% {
    margin-left: 10px;
  }

  100% {
    margin-left: 0px;
  }
}

.radiubox {
  width: 30%;
  height: calc(100% - 56px);
  position: relative;
  margin-left: -25px;
}

.radiubox.itemsGt5 {
  height: calc(100% - 49px);
  right: 2%;
}

.radiubox.itemsGt6 {
  width: 25%;
  height: calc(100% - 37px);
  right: -7%;
}

.radiubox.itemsGt7 {
  width: 25%;
  height: calc(100% - 37px);
  right: -3%;
}

.radiubox .question-img {
  max-width: 100%;
  background-color: #FCFFD1;
  border-radius: 50%;
  position: absolute;
  padding: 15%;
  top: 50%;
  transform: translateY(-30%);
}

.radiubox.itemsGt6 .question-img {
  transform: none;
  top: auto;
  bottom: 34px;
}

.dndList {
  width: 50%;
  height: calc(100% - 56px);
  padding-left: 30px;
  text-align: center;
}

.dndList.itemsGt6 {
  width: 50%;
}

.dndList-list1 {
  position: relative;
  display: inline-block;
  border-radius: 50px;
  top: 22%;
}

.dndList-list1.itemsGt6 {
  position: fixed;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
}

.dndList-list2.itemsGt7 {
  width: 120%;
}

// .dndList-list2.itemsGt9 {
// 	transform: scale(0.7);
// }

// .dndList-list1.itemsGt9 {
// 	transform: scale(0.7);
// }

.dndList-list2 {
  right: 7%;
  top: 30%;
  min-height: 82px;
}

#answer-box {
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  background-color: #057bb8;
  border-radius: 50px;
  padding: 0 20px;
  margin: 0;
}

#answer-box li {
  margin: 10px;
  border-radius: 50%;
  font-size: large;
  font-family: pepper;
  font-weight: bold;
  color: #057bb8;
  background-color: #FFEE9E;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.itemsGt6 #answer-box li {
  margin: 8px;
  width: 48px;
  height: 48px;
  line-height: 48px;
}

.dndList-list2 {
  position: relative;
  display: inline-block;
  z-index: 99;
}

.question-box {
  width: 100%;
  font-weight: bold;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /*position: absolute;
	    left: 50%;
	    -webkit-transform: translateX(-50%);
	    transform: translateX(-50%);*/
}

.question-box.itemsGt6 {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.question-box > div {
  margin: 10px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
}

.question-box > div .question,
.question-box > div .question-back {
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: white;
  font-size: large;
  font-family: pepper;
  background-image: url("../assets/image/letter_frame2.png");
  background-size: cover;
  z-index: 2;
}

.question-box > div .question-back {
  position: static;
  opacity: 0.6;
}

@media only screen and (min-device-height: 1024px)  and (-webkit-device-pixel-ratio: 3),
(min-device-height: 1024px)  and (-webkit-device-pixel-ratio: 2),
(min-width: 1024px) {
  .question-box {
    width: 65%;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }

  .question-box.itemsGt6 {
    flex-wrap: wrap;
    width: 100%;
  }

  .radiubox {
    width: 30%;
    //height: calc(100% - 100px);
    height: 85%;
    margin-left: 45px;
  }

  .radiubox.itemsGt5 {
    //height: calc(100% - 100px);
    height: 80%;
    right: 5%;
  }

  .radiubox.itemsGt6 {
    //height: calc(100% - 116px);
    height: 85%;
    right: 2%;
  }

  .radiubox.itemsGt7 {
    //height: calc(100% - 116px);
    height: 90%;
    right: 2%;
  }

  .itemsGt6.radiubox .question-img {
    bottom: 18%;
  }

  .question-box > div {
    width: 85px;
    height: 85px;
    line-height: 85px;
  }

  .itemsGt6.dndList-list1 {
    top: 25%;
    left: 60%;
  }

  //  .dndList{
  // width: 38%;
  // }
  .dndList.itemsGt5 {
    padding: 0;
    margin-left: -10px;
  }

  .dndList.itemsGt7 {
    width: 50%;
    padding: 0;
  }

  .dndList-list1.itemsGt5 {
    right: -5%;
    // transform: scale(1.2);
  }

  .starts {
    transform: translate(0%, 4%);
  }

  // .dndList-list1.itemsGt6 {
  // 	// transform: scale(1.5);
  // 	left: 27%;
  // }
  .dndList-list2.itemsGt5 {
    right: -5%;
    // transform: scale(1.3);
    top: 40%;
    transform: translateY(240%);
  }

  .dndList-list2.itemsGt6 {
    // transform: scale(1);
    right: -2%;
    width: 80%;
    top: 100%;
  }

  // .itemsGt6.question{
  // 	font-size: xx-large;
  // }
  .dndList-list1 {
    top: 75%;
    // transform: scale(1.5);
  }

  .dndList-list2 {
    top: 100%;
    // transform: scale(1.4);
    right: 0;
  }

  .question-box > div .question,
  .question-box > div .question-back {
    font-size: xx-large;
    width: 85px;
    height: 85px
  }

  .itemsGt6 .question-box > div,
  .itemsGt6 .question-box > div .question,
  .itemsGt6 .question-box > div .question-back {
    font-size: -webkit-xxx-large;
    width: 90px;
    height: 90px;
    line-height: 90px;
  }

  .dndList-list2.itemsGt7 {
    width: 100%;
    right: 0%;
    top: 85%;
  }

  .fontsizes {
    margin-top: 30%;
  }

  .dndList-list1 #answer-box li {
    width: 65px;
    height: 65px;
    font-size: 1.8rem;
    line-height: 65px;
  }

  .twomenu {
    padding-top: 26%;
  }

  .spanp {
    top: 22%;
    font-size: 1.5rem;
  }

  .spanp1 {
    font-size: 1.3rem;
  }

  .withcolor {
    height: 50%;
    top: 20%;
    border-radius: 75px;
  }

  .close {
    width: 70px;
    height: 70px;

  }

  .close img {
    height: 70px;
    width: 70px;

  }

  .roleimg {
    height: 53%;
    top: 20%;
  }

  // 		.pause {
  // 			top: -20%;
  // 		}
  //
  // 		.repeat {
  // 			top: -20%;
  // 		}
}

@media only screen and (min-device-height: 1200px)  and (-webkit-device-pixel-ratio: 3),
(min-device-height: 1200px)  and (-webkit-device-pixel-ratio: 2),
(min-width: 1200px) {
  .question-box {
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }

  .question-box > div {
    margin: 0 20px !important;
  }

  .itemsGt6 .question-box > div {
    margin: 10px 22px !important;
  }
}

@media only screen and (min-device-height: 1600px)  and (-webkit-device-pixel-ratio: 3),
(min-device-height: 1600px)  and (-webkit-device-pixel-ratio: 2),
(min-width: 1600px) {
  .fontsizes {
    margin-top: 20%;
    font-size: 3rem;
  }

  .twomenu {
    padding-top: 18%;
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

  .smalltimes {
    top: 45px;
  }

  .starts {
    transform: translate(-8%, -16%);
  }

  #answer-box {
    border-radius: 90px;
    padding: 0 35px;
  }

  .dndList-list1 {
    //left: 30%;
  }

  .dndList-list2 {
    top: 95%;
    //left: -17%;
  }

  .dndList-list1 #answer-box li {
    width: 70px;
    height: 70px;
    font-size: 3rem;
    line-height: 100px;
  }

  .question-box > div {
    width: 120px;
    height: 120px;
    font-size: 3rem;
    line-height: 120px;
  }

  .question-box > div .question-back {
    width: 120px;
    height: 120px;
    font-size: 3rem;
    line-height: 120px;
  }

  .question-box > div .question {
    width: 120px;
    height: 120px;
    font-size: 3rem;
    line-height: 120px;
  }

  .itemsGt6 #answer-box li {
    margin: 17px;
  }

  .dndList-list1.itemsGt5 {
    //left: -16%;
  }

  .dndList-list2.itemsGt6 {
    left: 9%;
    top: 90%;
  }

  .dndList-list1.itemsGt6 {
    //left: 63%;
    left: 70%;
    top: 25%;
  }

  .itemsGt6 .question-box > div {
    width: 100px;
    height: 100px;
    font-size: 3rem;
    line-height: 120px;
  }

  .itemsGt6 .question-box > div .question {
    width: 120px;
    height: 120px;
    font-size: 3rem;
    line-height: 120px;
  }

  .itemsGt6 .question-box > div .question-back {
    width: 120px;
    height: 120px;
    font-size: 3rem;
    line-height: 120px;
  }

  .dndList-list2.itemsGt7 {
    width: 85%;
    left: 5%;
    top: 95%;
  }

  .dndList-list2.itemsGt9 {
    width: 100%;
    top: 105%;
    left: 20%;
  }

  .radiubox.itemsGt7 {
    height: 96%;
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

  .animapng7 {
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

  .dndList-list1 {
    top: 70%;
  }

  .roleimg {
    height: 63%;
    top: 20%;
  }
}

@media only screen and (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
(min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2),
(min-width: 812px) and (max-width: 1023px) {
  .radiubox {
    margin-left: 0;
    height: 70%;
  }

  .itemsGt5 {
    right: 5%;
    top: 10%;
    // transform: scale(1);
  }

  .dndList-list2 {
    right: 0%;
    top: 80%;
  }

  .dndList-list1 {
    top: 55%;
  }

  .dndList-list2.itemsGt5 {
    right: 5%;
    // transform: scale(0.9);
    top: 80%;
  }

  .dndList-list2.itemsGt6 {
    width: 70%;
    margin-top: 7%;
  }

  .radiubox.itemsGt6 {
    width: 21%;
    top: 0%;
    left: 0%;
  }

  .radiubox.itemsGt6 .question-img {
    top: 42%;
    bottom: 0;
  }

  .itemsGt6.radiubox .question-img {
    bottom: 6%;
  }

  .itemsGt6.dndList-list1 {
    top: 65px;
    left: 65%;
  }

  .dndList-list1 #answer-box li {
    font-size: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }

  .question-box > div,
  .question-box > div .question,
  .question-box > div .question-back {
    font-size: 38px;
    width: 60px;
    height: 60px;
    line-height: 60px;
  }

  .itemsGt6 .question-box > div,
  .itemsGt6 .question-box > div .question,
  .itemsGt6 .question-box > div .question-back {
    font-size: 38px;
    width: 60px;
    height: 60px;
    line-height: 60px;
  }

  .dndList-list2.itemsGt7 {
    width: 90%;
    top: 50%;
    left: 15%;
  }

  .twomenu {
    padding-top: 14%;
  }

  .fontsizes {
    margin-top: 17%;
  }

  .dndList-list1.itemsGt9 {
    left: 62%;
    top: 22%;
  }

  .itemsGt9 #answer-box ul {
    padding: 0 10px;
  }

  .itemsGt9 #answer-box li {
    width: 40px;
    height: 40px;
    line-height: 45px;
    font-size: 18px;
  }

  .dndList-list2.itemsGt9 {
    width: 100%;
    right: -5%;
  }

  .itemsGt9 .question-box > div,
  .itemsGt9 .question-box > div .question,
  .itemsGt9 .question-box > div .question-back {
    font-size: 24px;
    width: 55px;
    height: 55px;
    line-height: 60px;

  }

  .itemsGt9 .dndList-list2 {
    top: 65%;
    left: 5%;
  }

  .itemsGt9.radiubox .question-img {
    top: 55%;
    left: -25%;
  }

  .withcolor {
    height: 70%;
  }

  .spanp1 {
    font-size: 1rem;
    text-align: center;
  }
}

@media only screen and (min-device-height: 736px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 3),
(min-device-height: 736px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 2),
(min-width: 736px) and (max-width: 811px) {
  .radiubox.itemsGt6 {
    height: calc(100% - 60px);
  }

  .dndList-list1 {
    top: 50%;
  }

  .radiubox {
    top: 18%;
  }

  .radiubox.itemsGt6 .question-img {
    top: 45%;
    bottom: 0;
  }

  .dndList-list2 {
    right: 2%;
    top: 75%;
  }

  .itemsGt5 {
    right: 5%;
    // transform: scale(1);
  }

  .dndList-list2.itemsGt5 {
    right: 9%;
    // transform: scale(0.9);
    top: 80%;
  }

  .dndList-list2.itemsGt6 {
    right: -2%;
    width: 80%;
    top: 85%;
  }

  .dndList-list2.itemsGt7 {
    right: 3%;
    width: 110%;
    top: 90%;
  }

  .itemsGt6 #answer-box li {
    width: 40px;
    height: 40px;
  }

  .fontsizes {
    margin-top: 17%;
  }

  .dndList-list1.itemsGt6 {
    top: 20%;
    left: 66%;
  }

  .twomenu {
    padding-top: 18%;
  }

  // .fontsize {
  // 	bottom: 17%;
  // 	font-size: x-large;
  // }
  .question-box > div,
  .question-box > div .question,
  .question-box > div .question-back {
    font-size: 30px;
    width: 55px;
    height: 55px;
    line-height: 60px;
  }

  .dndList-list1.itemsGt9 {
    left: 55%;
  }

  .itemsGt9 #answer-box ul {
    padding: 0 10px;
  }

  .itemsGt9 #answer-box li {
    width: 45px;
    height: 45px;
    line-height: 45px;
    font-size: 18px;
  }

  .dndList-list2.itemsGt9 {
    width: 125%;
    right: 10%;
  }

  .itemsGt9 .question-box > div,
  .itemsGt9 .question-box > div .question,
  .itemsGt9 .question-box > div .question-back {
    font-size: 24px;
    width: 55px;
    height: 55px;
    line-height: 55px;

  }

  .itemsGt9 .dndList-list2 {
    top: 90%;
    left: 5%;
  }
}

@media only screen and (min-device-height: 667px) and (max-device-height: 735px) and (-webkit-device-pixel-ratio: 3),
(min-device-height: 667px) and (max-device-height: 735px) and (-webkit-device-pixel-ratio: 2),
(min-width: 667px) and (max-width: 735px) {
  .radiubox.itemsGt5 {
    right: 4%;
  }

  .radiubox.itemsGt6 {
    width: 23%;

    //height: calc(100% - 27px);
  }

  .radiubox.itemsGt7 {
    height: calc(100% - 15px);
  }

  .dndList-list1 {
    top: 45%;
  }

  .dndList-list1.itemsGt6 {
    top: 65px;
    left: 62%;
  }

  .dndList-list2 {
    right: 2%;
    top: 70%;
  }

  .dndList-list2.itemsGt5 {
    right: 16%;
    top: 80%;
  }

  .dndList-list2.itemsGt6 {
    right: -4%;
    top: 70%;
  }

  .dndList-list2.itemsGt7 {
    right: 5%;
    top: 90%;
  }

  .dndList-list1 #answer-box li {
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 48px;
  }

  .question-box > div,
  .question-box > div .question,
  .question-box > div .question-back {
    font-size: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
  }

  .itemsGt5 > div {
    margin: 2px 8px;
  }

  .itemsGt6 .question-box > div,
  .itemsGt6 .question-box > div .question,
  .itemsGt6 .question-box > div .question-back {
    font-size: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
  }

  .radiubox .question-img {
    top: 80%;
  }

  .radiubox.itemsGt6 .question-img {
    top: 42%;
    bottom: 0;
  }

  .twomenu {
    padding-top: 18%;
  }

  .dndList-list1.itemsGt9 {
    left: 58%;
    top: 20%;
  }

  .itemsGt9 #answer-box ul {
    padding: 0 10px;
  }

  .itemsGt9 #answer-box li {
    width: 35px;
    height: 35px;
    line-height: 40px;
    font-size: 16px;
  }

  .dndList-list2.itemsGt9 {
    width: 125%;
    right: 10%;
  }

  .itemsGt9 .question-box > div,
  .itemsGt9 .question-box > div .question,
  .itemsGt9 .question-box > div .question-back {
    font-size: 20px;
    width: 50px;
    height: 50px;
    line-height: 50px;

  }

  .itemsGt9 .dndList-list2 {
    top: 90%;
    left: 5%;
  }

}

@media only screen and (min-device-height: 568px) and (max-device-height: 666px) and (-webkit-device-pixel-ratio: 3),
(min-device-height: 568px) and (max-device-height: 666px) and (-webkit-device-pixel-ratio: 2),
(min-width: 568px) and (max-width: 666px) {
  .dndList-list1 {
    top: 75%;
    // transform: scale(0.9);
  }

  .dndList-list2 {
    // transform: scale(0.9);
    top: 75%;
    right: 0%;
  }

  .radiubox {
    top: 15%;
  }

  .radiubox.itemsGt5 {
    height: calc(100% - 40px);
    right: 0%;
  }

  .radiubox.itemsGt6 {
    height: calc(100% - 25px);
  }

  .itemsGt6.dndList {
    width: 52%;
  }

  .dndList-list1.itemsGt5 {
    right: 8%;
  }

  .dndList-list2.itemsGt5 {
    right: 10%;
    top: 75%;
  }

  .dndList-list1.itemsGt6 {
    position: relative;
    left: 60%;
    top: 55px;
    // transform: scale(0.9);
  }

  .dndList-list2.itemsGt6 {
    top: 50%;
    right: -16%;
  }


  .dndList-list1 #answer-box li {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }

  .dndList-list1 #answer-box li {
    font-size: 24px;
    width: 35px;
    height: 35px;
    line-height: 40px;
  }

  .question-box > div,
  .question-box > div .question,
  .question-box > div .question-back {
    font-size: 24px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }

  .itemsGt6 .question-box > div,
  .itemsGt6 .question-box > div .question,
  .itemsGt6 .question-box > div .question-back {
    font-size: 24px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }

  .dndList-list1.itemsGt7 {
    left: 48%;
    top: 45px;
  }

  .dndList-list2.itemsGt7 {
    width: 130%;
    right: 10%;
    top: 35%;
  }

  .dndList-list1.itemsGt8 {
    left: 50%;
    top: 55px;
  }

  .dndList-list1.itemsGt9 {
    left: 33%;
  }

  .itemsGt9 #answer-box ul {
    padding: 0 10px;
  }

  .itemsGt9 #answer-box li {
    width: 35px;
    height: 35px;
    line-height: 35px;
    font-size: 12px;
  }

  .dndList-list2.itemsGt9 {
    width: 125%;
    right: 10%;
  }

  .itemsGt9 .question-box > div,
  .itemsGt9 .question-box > div .question,
  .itemsGt9 .question-box > div .question-back {
    font-size: 20px;
    width: 45px;
    height: 45px;
    line-height: 45px;

  }

  .itemsGt9 .dndList-list2 {
    top: 45%;
  }
}

@media only screen and (min-device-height: 480px) and (max-device-height: 567px) and (-webkit-device-pixel-ratio: 3),
(min-device-height: 480px) and (max-device-height: 567px) and (-webkit-device-pixel-ratio: 2),
(min-width: 480px) and (max-width: 567px) {
  .fontsizes {
    margin-top: 23%;
  }

  .radiubox.itemsGt5 {
    right: 6%;
  }

  .dndList-list1.itemsGt5 {
    right: 45%;
  }

  .dndList-list2.itemsGt5 {
    right: 35%;
  }

  // .fontsize {
  // 	font-family: pepper;
  // 	color: white;
  // 	bottom: 11%;
  // 	left: 3%;
  // 	position: absolute;
  // 	font-size: large;
  // 	max-height: 100%;
  // 	min-height: 60%;
  // 	margin-left: 2%;
  // }
  .itemsGt6.dndList {
    width: 52%;
  }

  .dndList-list1.itemsGt6 {
    position: relative;
    left: -81%;
    // transform: scale(0.9);
  }

  .dndList-list2.itemsGt6 {
    top: 15%;
    right: -19%;
  }

  .dndList-list1.itemsGt7 {
    position: relative;
    left: -96%;
    // transform: scale(0.9);
  }

  .dndList-list2.itemsGt7 {
    top: 15%;
    right: 12%;
  }

  // .itemsGt6 .dndList-list2 {
  // 	top: 58%;
  // }
  .dndList-list1 {
    top: 25%;
    right: 22%;
    // transform: scale(0.8);
  }

  .dndList-list2 {
    // transform: scale(0.9);
    right: 12%;
  }

  .question-box > div,
  .question-box > div .question,
  .question-box > div .question-back {
    font-size: 18px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }

  .itemsGt6 .question-box > div,
  .itemsGt6 .question-box > div .question,
  .itemsGt6 .question-box > div .question-back {
    font-size: 18px;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }

  .dndList-list2.itemsGt7 {
    width: 135%;
  }

  .dndList-list1.itemsGt8 {
    left: -111%;
    // transform: scale(0.7);
  }

  .twomenu {
    padding-top: 18%;
  }

  .other-list1 {
    right: 1%;
    min-width: 66%;
    max-width: 100%;
  }

  .other-radiubox {
    float: left;
    border-radius: 50%;
    width: 32%;
    height: 56%;
  }
}
</style>
