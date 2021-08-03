<template>
  <div class="phonics1">
    <span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic">
        <source src="../../assets/video/gamemusic.mp3"></audio>
    </span>
    <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->

    <transition name="fades">
      <div class="contain" v-show="!resume">
        <img src="../../assets/image/prightback.png" @click="gomemu" class="backbutton" />
        <img src="../../assets/image/phelp.png" @click="help" class="helpbutton" />
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <p class="fontsizes">{{this.countpage}}/{{this.question}}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div v-if="!onef" style="width: 100%; height: 90%;text-align: center;display:block;position: fixed;">
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <div v-if="zhezhao" style="width: 100%; height: 80%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
            <audio @canplay="getDuration"   ref="videos" id="videos"  autoplay="autoplay" :src="audio">

            </audio>
            <audio v-if="soundsWrong" autoplay="autoplay">
              <source src="../../assets/video/Wrong.mp3" ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay">
              <source src="../../assets/video/correct.mp3" ></audio>
            <div class="smalltimes">
              <span v-for="ou in listout" :key="ou.id">
								<img src="../../assets/image/smallback.png" v-show="!ou.bgc" class="smallimg" />
								<img src="../../assets/image/smallback1.png" v-show="ou.bgc" class="smallimg" />
							</span>
            </div>
            <ul class="allimg"  >
              <li class="img1"  v-for="li in list1" style="pointer-events: none;">
                <button class="clickbutton" style="pointer-events: auto;">
                  <!--<span class="imgsty"    v-show="li.ifshow">{{li.name}}</span>-->
                   <img src="../../assets/image/phonics1/a3.png" class="imgsty"  v-show="li.ifshow&&li.name==='a'&&li.colorsty===1" @click="anser(li)"/>
                   <img src="../../assets/image/phonics1/a4.png" class="imgsty"  v-show="li.ifshow&&li.name==='a'&&li.colorsty===0" @click="anser(li)"   />
                    <img src="../../assets/image/phonics1/b3.png" class="imgsty"  v-show="li.ifshow&&li.name==='b'&&li.colorsty===1" @click="anser(li)"   />
                   <img src="../../assets/image/phonics1/b4.png" class="imgsty"  v-show="li.ifshow&&li.name==='b'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/c3.png" class="imgsty" v-show="li.ifshow&&li.name==='c'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/c4.png" class="imgsty" v-show="li.ifshow&&li.name==='c'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/d3.png" class="imgsty" v-show="li.ifshow&&li.name==='d'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/d4.png" class="imgsty" v-show="li.ifshow&&li.name==='d'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/e3.png" class="imgsty" v-show="li.ifshow&&li.name==='e'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/e4.png" class="imgsty" v-show="li.ifshow&&li.name==='e'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/f3.png" class="imgsty" v-show="li.ifshow&&li.name==='f'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/f4.png" class="imgsty" v-show="li.ifshow&&li.name==='f'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/g3.png" class="imgsty" v-show="li.ifshow&&li.name==='g'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/g4.png" class="imgsty" v-show="li.ifshow&&li.name==='g'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/h3.png" class="imgsty" v-show="li.ifshow&&li.name==='h'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/h4.png" class="imgsty" v-show="li.ifshow&&li.name==='h'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/i3.png" class="imgsty" v-show="li.ifshow&&li.name==='i'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/i4.png" class="imgsty" v-show="li.ifshow&&li.name==='i'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/j3.png" class="imgsty" v-show="li.ifshow&&li.name==='j'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/j4.png" class="imgsty" v-show="li.ifshow&&li.name==='j'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/k3.png" class="imgsty" v-show="li.ifshow&&li.name==='k'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/k4.png" class="imgsty" v-show="li.ifshow&&li.name==='k'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/l3.png" class="imgsty" v-show="li.ifshow&&li.name==='l'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/l4.png" class="imgsty" v-show="li.ifshow&&li.name==='l'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/m3.png" class="imgsty" v-show="li.ifshow&&li.name==='m'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/m4.png" class="imgsty" v-show="li.ifshow&&li.name==='m'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/n3.png" class="imgsty" v-show="li.ifshow&&li.name==='n'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/n4.png" class="imgsty" v-show="li.ifshow&&li.name==='n'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/o3.png" class="imgsty" v-show="li.ifshow&&li.name==='o'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/o4.png" class="imgsty" v-show="li.ifshow&&li.name==='o'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/p3.png" class="imgsty" v-show="li.ifshow&&li.name==='p'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/p4.png" class="imgsty" v-show="li.ifshow&&li.name==='p'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/q3.png" class="imgsty" v-show="li.ifshow&&li.name==='q'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/q4.png" class="imgsty" v-show="li.ifshow&&li.name==='q'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/r3.png" class="imgsty" v-show="li.ifshow&&li.name==='r'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/r4.png" class="imgsty" v-show="li.ifshow&&li.name==='r'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/s3.png" class="imgsty" v-show="li.ifshow&&li.name==='s'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/s4.png" class="imgsty" v-show="li.ifshow&&li.name==='s'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/t3.png" class="imgsty" v-show="li.ifshow&&li.name==='t'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/t4.png" class="imgsty" v-show="li.ifshow&&li.name==='t'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/u3.png" class="imgsty" v-show="li.ifshow&&li.name==='u'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/u4.png" class="imgsty" v-show="li.ifshow&&li.name==='u'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/v3.png" class="imgsty" v-show="li.ifshow&&li.name==='v'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/v4.png" class="imgsty" v-show="li.ifshow&&li.name==='v'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/w3.png" class="imgsty" v-show="li.ifshow&&li.name==='w'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/w4.png" class="imgsty" v-show="li.ifshow&&li.name==='w'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/x3.png" class="imgsty" v-show="li.ifshow&&li.name==='x'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/x4.png" class="imgsty" v-show="li.ifshow&&li.name==='x'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/y3.png" class="imgsty" v-show="li.ifshow&&li.name==='y'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/y4.png" class="imgsty" v-show="li.ifshow&&li.name==='y'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/z3.png" class="imgsty" v-show="li.ifshow&&li.name==='z'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/z4.png" class="imgsty" v-show="li.ifshow&&li.name==='z'&&li.colorsty===0" @click="anser(li)"  />

                    <img src="../../assets/image/phonics1/A1.png" class="imgsty" v-show="li.ifshow&&li.name==='A'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/A2.png" class="imgsty" v-show="li.ifshow&&li.name==='A'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/B1.png" class="imgsty" v-show="li.ifshow&&li.name==='B'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/B2.png" class="imgsty" v-show="li.ifshow&&li.name==='B'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/C1.png" class="imgsty" v-show="li.ifshow&&li.name==='C'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/C2.png" class="imgsty" v-show="li.ifshow&&li.name==='C'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/D1.png" class="imgsty" v-show="li.ifshow&&li.name==='D'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/D2.png" class="imgsty" v-show="li.ifshow&&li.name==='D'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/E1.png" class="imgsty" v-show="li.ifshow&&li.name==='E'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/E2.png" class="imgsty" v-show="li.ifshow&&li.name==='E'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/F1.png" class="imgsty" v-show="li.ifshow&&li.name==='F'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/F2.png" class="imgsty" v-show="li.ifshow&&li.name==='F'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/G1.png" class="imgsty" v-show="li.ifshow&&li.name==='G'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/G2.png" class="imgsty" v-show="li.ifshow&&li.name==='G'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/H1.png" class="imgsty" v-show="li.ifshow&&li.name==='H'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/H2.png" class="imgsty" v-show="li.ifshow&&li.name==='H'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/I1.png" class="imgsty" v-show="li.ifshow&&li.name==='I'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/I2.png" class="imgsty" v-show="li.ifshow&&li.name==='I'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/J1.png" class="imgsty" v-show="li.ifshow&&li.name==='J'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/J2.png" class="imgsty" v-show="li.ifshow&&li.name==='J'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/K1.png" class="imgsty" v-show="li.ifshow&&li.name==='K'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/K2.png" class="imgsty" v-show="li.ifshow&&li.name==='K'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/L1.png" class="imgsty" v-show="li.ifshow&&li.name==='L'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/L2.png" class="imgsty" v-show="li.ifshow&&li.name==='L'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/M1.png" class="imgsty" v-show="li.ifshow&&li.name==='M'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/M2.png" class="imgsty" v-show="li.ifshow&&li.name==='M'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/N1.png" class="imgsty" v-show="li.ifshow&&li.name==='N'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/N2.png" class="imgsty" v-show="li.ifshow&&li.name==='N'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/O1.png" class="imgsty" v-show="li.ifshow&&li.name==='O'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/O2.png" class="imgsty" v-show="li.ifshow&&li.name==='O'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/P1.png" class="imgsty" v-show="li.ifshow&&li.name==='P'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/P2.png" class="imgsty" v-show="li.ifshow&&li.name==='P'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/Q1.png" class="imgsty" v-show="li.ifshow&&li.name==='Q'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/Q2.png" class="imgsty" v-show="li.ifshow&&li.name==='Q'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/R1.png" class="imgsty" v-show="li.ifshow&&li.name==='R'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/R2.png" class="imgsty" v-show="li.ifshow&&li.name==='R'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/S1.png" class="imgsty" v-show="li.ifshow&&li.name==='S'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/S2.png" class="imgsty" v-show="li.ifshow&&li.name==='S'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/T1.png" class="imgsty" v-show="li.ifshow&&li.name==='T'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/T2.png" class="imgsty" v-show="li.ifshow&&li.name==='T'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/U1.png" class="imgsty" v-show="li.ifshow&&li.name==='U'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/U2.png" class="imgsty" v-show="li.ifshow&&li.name==='U'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/V1.png" class="imgsty" v-show="li.ifshow&&li.name==='V'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/V2.png" class="imgsty" v-show="li.ifshow&&li.name==='V'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/W1.png" class="imgsty" v-show="li.ifshow&&li.name==='W'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/W2.png" class="imgsty" v-show="li.ifshow&&li.name==='W'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/X1.png" class="imgsty" v-show="li.ifshow&&li.name==='X'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/X2.png" class="imgsty" v-show="li.ifshow&&li.name==='X'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/Y1.png" class="imgsty" v-show="li.ifshow&&li.name==='Y'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/Y2.png" class="imgsty" v-show="li.ifshow&&li.name==='Y'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/phonics1/Z1.png" class="imgsty" v-show="li.ifshow&&li.name==='Z'&&li.colorsty===1" @click="anser(li)"  />
                   <img src="../../assets/image/phonics1/Z2.png" class="imgsty" v-show="li.ifshow&&li.name==='Z'&&li.colorsty===0" @click="anser(li)"  />
                    <img src="../../assets/image/StarYellow.png" class="star" v-show="li.start" />
                </button>

              </li>
            </ul>
          </div>
        </transition>
        <div class="settinglist">
          <img src="../../assets/image/pbar.png" style="width: 100%;bottom: 0;height: 100%;">
          <span class="fontsize">{{titlequesion}}</span>
          <div @click="changesett">
            <img src="../../assets/image/p-pause.png" class="repeat">
          </div>
        </div>
      </div>
    </transition>
    <div class='popContainer' v-show="popp">
      <p class="spanp spanp1">{{spanp}}</p>
      <button class="roleimg">
        <img src="../../assets/image/p-rule2.png" style="height: 100%;"/>
        <!--<img src="../../assets/image/walkerks-rule.png" style="height: 100%;" v-if="ruleimg15" />-->
      </button>
      <div class="withcolor">
        <div class="close" @click="pop">
          <img src="../../assets/image/pcloce.png">
        </div>
        <img class="animapng7" src="http://103.218.241.33/mtgameweb/assets/img/excercise1.gif">
        <!--<video class="animapng7" src="http://103.218.241.33/monkeytreeApp/MonkeyTown/test.mp4"-->
               <!--:controls="videoOptions.controls"-->
               <!--loop muted-->
               <!--video-player­fullscreen="false"-->
               <!--x5-playsinline="true"-->
               <!--playsinline="true"-->
               <!--webkit-playsinline="true"-->
               <!--autoplay="autoplay" style="object-fit:fill" ref="video">-->
        <!--</video>-->
      </div>
    </div>
    <transition name="fades">
      <div class="about" v-show="resume">
        <div class="twomenu">
          <div>
            <img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show" @click="sound" />
            <img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show" @click="sound" />
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
  import $ from 'jquery';
  var qs = require('qs');
  let idGlobal = 8;
  export default {
    name: "phonics1",

    watch: {
      'onef': function(newVal) {
        if (this.onef === true) {
          this.list1 = this.listF[this.countpage - 1];
          this.scoreacount = this.allscoreacount;
          for (var i = 0; i < this.list1.length; i++) {
            // this.list1[i].bg = this.pic + this.list1[i].bg;
            this.list1[i].start=0;
            this.list1[i].ifshow=0;
            this.list1[i].colorsty=Math.floor(Math.random() + 0.5);
            if(this.list1[i].score===1){
              this.titlequesion = this.list1[i].title;
              this.audio = this.pic + this.list1[i].audio;
            }
          }
          // console.log(this.countpage);
          setTimeout(() => {
            setTimeout(() => {
              var test=document.getElementsByClassName('imgsty');
              var test2=document.getElementsByClassName('star');
              var buttest=document.getElementsByClassName('clickbutton');
              if(test.length!=0) {
                for (let i = 0; i < test2.length; i++) {
                  if(894<document.body.offsetWidth&&document.body.offsetWidth<1025){
                    var radoms=Math.random()*(4-3+1)+3;
                  }else if(document.body.offsetWidth>1025){
                    var radoms=Math.random()*(3-2+1)+2;
                  }else {
                    var radoms=Math.random()*(3.5-3+1)+3;
                  }
                  this.listradom[0]=Math.floor(Math.random() * (30 - 0+1)) + 0;
                  this.listradom[1]=Math.floor(Math.random() * (360 - 330+1)) + 330;
                  var radoms1=Math.floor(Math.random()*this.listradom.length);

                  buttest[i].style.width=parseInt(radoms)+"rem";
                  test2[i].style.width=parseInt(radoms)+"rem";
                  buttest[i].style.transform ='rotate('+parseInt(this.listradom[radoms1])+'deg)';
                }
                for (var i = 0; i < this.list1.length; i++) {
                  this.list1[i].ifshow=1;
                  // if(this.list1[i].score===1){
                  //   this.titlequesion = this.list1[i].title;
                  //   this.audio = this.pic + this.list1[i].audio;
                  // }
                }
              }

              this.zhezhao=false;
            },500);
            // this.video = true;
            this.onef = false;
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
        videoOptions:{
          controls:false,
        },
        popp: false,
        ruleimg8: false,
        ruleimg10: false,
        ruleimg4: false,
        ruleimg15: false,
        ruleimg25: false,
        ruleimg12: false,
        spanp: '',
        duration:0,
        list1: [],
        list2: [],
        listout: [
          {
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
          },
          {
            id: 5,
            //bg: "http://localhost:8080/assets/img/smallback.png",
            bgc: false,
          }
        ],
        audio: '',
        timeout:0,
        soundsWrong: false,
        soundscorrect: false,
        video: false,
        titlequesion:'',
        fade: 'fade',
        zhezhao:true,
        showstart: false,
        unitsId: '',
        unit: '',
        menuId: '',
        question: 10,
        listF: [],
        countpage: 1,
        account: 0,
        show: true,
        resume: false,
        id: '',
        pic: "",
        allscoreacount:3,
        url: '/phonics/phonics1',
        levels: 0,
        page: this.page++,
        type: 'phonics1',
        onef: true,
        // colorList : ['#f54069', '#fa9034', '#f7ee6a', '#7bfcc2','#33cef5','#e87dd6'],
        listradom:['0','30'],
        // fontList : ['LH'],
        firstanswer: false,
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
      change() {
        if (this.onef == false) {
          this.video = true;
        }
      },
      changesett() {
        if (this.onef == false) {
          this.zhezhao = false;
          setTimeout(() => {
            this.resume = !this.resume;
          }, 1000);
        }
      },
      pop() {
        this.popp = !this.popp;
      },
      help() {
        if (this.onef == false) {
          this.spanp = "Look closely and find the letter.";
          this.popp = !this.popp;
          // if (this.items1[0].rank == 0) {
          //   this.ruleimg15 = true;
          //   this.ruleimg25 = false;
          // } else if (this.items1[0].rank == 1) {
          //   this.ruleimg15 = false;
          //   this.ruleimg25 = true;
          // }
        }
      },
      anser(li){
        if(this.scoreacount>0){
          this.zhezhao=true;
          if(li.score==1){
            this.soundscorrect=true;
            li.start=1;li.ifshow=0;
            setTimeout(() => {
              li.start=0; this.scoreacount-=1;
              this.zhezhao=false;
              this.soundscorrect=false;
              if(this.scoreacount==0){
                this.zhezhao=true;
                this.countpage += 1;this.account += 1;
                if (this.countpage > this.question) {
                  setTimeout(() => {
                    this.$router.push({
                      //核心语句
                      path: "/presult", //跳转的路径
                      query: {
                        //路由传参时push和query搭配使用 ，作用时传递参数
                        type:this.type,
                        partName:'phonics1',
                        account:this.account,
                        menuId: this.menuId,
                        unitsId:this.unitsId,
                        unit:this.unit
                      }
                    });
                  }, 1000);
                }else{
                  this.onef=true;
                }
              }
            }, 1000);
          }else {
            this.timeout = this.timeout + 1;
            if (this.timeout >= 1) {
              for (var t = 1; t <= this.timeout; t++) {
                this.listout[5 - t].bgc = true;
              }
            }
            this.soundsWrong = true;
            setTimeout(() => {
              this.zhezhao = false;
              this.soundsWrong = false;
            }, 1000);
            if (this.timeout >= 5) {
              setTimeout(() => {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    //路由传参时push和query搭配使用 ，作用时传递参数
                    type:this.type,
                    partName:'phonics1',
                    account:this.account,
                    menuId: this.menuId,
                    unitsId:this.unitsId,
                    unit:this.unit
                  }
                });
              }, 1000);
            }
          }
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
          name:this.gamename,
          studentId:localStorage.getItem('studentId')
        })).then(res => {
          localStorage.setItem('startTimeid','');
          localStorage.setItem('gamename','');
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
        this.$router.push({ //核心语句
          path: '/phonicsmenu', //跳转的路径
          query: {
            unitsId: this.unitsId,
            unit: this.unit
          }
        })
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
      document.body.removeEventListener('touchmove', this.bodyScroll, {
        passive: false
      });
      window.removeEventListener('popstate',this.gomemu,false);
    },

    created() { //生命周期里接收参数
      this.pic = this.$axios.defaults.baseURL2;
      this.unit = this.$route.query.unit;
      this.unitsId = this.$route.query.unitsId;
      this.menuId = this.$route.query.menuId; //接受参数关键代码
      this.gamename=this.$route.query.name;
      localStorage.setItem('gamename',this.gamename);
      var timestamp = (new Date()).getTime();
      localStorage.setItem('startTimeid',timestamp);
      if(localStorage.getItem('gamemusic')=="false"){
        this.show=false;
      }else{
        this.show=true;
      }
      this.$axios.post(this.url, qs.stringify({
        menuId: this.menuId,
        num:10
      })).then(res => {
        for (var i=0;i<10;i++) {
          this.listF.push(res.data.list['list'+i]); //属性
        }
        // console.log(this.listF);
        // this.listF=[];
        for(let i = 0,len = this.listF.length; i < len; i++){
          let currentRandom = parseInt(Math.random() * (len - 1));
          let current = this.listF[i];
          this.listF[i] = this.listF[currentRandom];
          this.listF[currentRandom] = current;
        }
        this.question = this.listF.length;
        this.list1 = this.listF[this.countpage - 1];
        this.allscoreacount = res.data.scoreacount;
        this.scoreacount=this.allscoreacount;
        for (var i = 0; i < this.list1.length; i++) {
          this.list1[i].start=0;
          this.list1[i].ifshow=0;
          this.list1[i].colorsty=Math.floor(Math.random() + 0.5);

          if(this.list1[i].score===1){
            this.titlequesion = this.list1[i].title;
            this.audio = this.pic + this.list1[i].audio;
          }
        }
      // }, res => {
      //   alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      // });
      if (this.onef === true) {
        setTimeout(() => {
          // this.video = true;
          this.onef = false;
          var  test=document.getElementsByClassName('imgsty');
          // console.log(document.getElementsByClassName('clickbutton'));
          var test2=document.getElementsByClassName('star');
          var buttest=document.getElementsByClassName('clickbutton');
          setTimeout(() => {
            if(test.length!==0){
              for (let i=0; i<test2.length; i++) {
                if(894<document.body.offsetWidth&&document.body.offsetWidth<1025){
                  var radoms=Math.random()*(4-3+1)+3;
                }else if(document.body.offsetWidth>1025){
                  var radoms=Math.random()*(3-2+1)+2;
                }else {
                  var radoms=Math.random()*(3.5-3+1)+3;
                }

                this.listradom[0]=Math.floor(Math.random() * (30 - 0+1)) + 0;
                this.listradom[1]=Math.floor(Math.random() * (360 - 330+1)) + 330;
                var radoms1=Math.floor(Math.random()*this.listradom.length);
                // var radoms3=Math.floor(Math.random()*this.fontList.length);
                // var radoms4=Math.floor(Math.random()*this.colorList.length);
                // buttest[i].style.fontSize=parseInt(radoms)+"rem";
                // console.log(radoms);

                buttest[i].style.width=radoms+"rem";
                test2[i].style.width=parseInt(radoms)+"rem";
                buttest[i].style.transform ='rotate('+parseInt(this.listradom[radoms1])+'deg)';

                //    console.log(test[i].style.color);
                // console.log(test[i].style.fontFamily);
              }
              for (var i = 0; i < this.list1.length; i++) {
                this.list1[i].ifshow=1;
                console.log(this.list1[i].ifshow);
                // if(this.list1[i].score===1){
                //   this.titlequesion = this.list1[i].title;
                // }
              }
            }
            this.zhezhao=false;
          },3000);
          // console.log(document.getElementsByClassName('imgsty'));

        }, 2000);
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
      document.body.addEventListener('touchmove', this.bodyScroll, {
        passive: false
      });
    }
  };
</script>

<style scoped lang="less">
  .body {
    padding: 0;
  }

  .phonics1{
    width: 100%;
    height: 100%;
    background-image: url("http://107.150.121.34/monkeytownHK/image/img/phonicsbg.png");
    background-color: #204900;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    display: flex;
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

  .allimg {
    /*top: 10%;*/
    height: 80%;
    width: 80%;
    left: 10%;
    margin: 7% 10%;
  }

  .img1 {
    height: 33%;
    min-width: 16%;
    float: left;
    display: inline-block;
  }

  .img2 {
    width: auto;
    display: block;
  }

  .img3 {
    display: block;
  }
  .smalltimes {
    position: absolute;
    width: 100%;
    top: 7%;
    right: 10%
  }

  .smallimg {
    width: 3%;
    float: right;
    position: relative;
    margin: 5px;
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

  .backbutton {
    // display: block;
    z-index: 2;
    width: 6%;
    position: fixed;
    left: 15px;
    top: 15px;
  }

  .helpbutton {
    z-index: 2;
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
    background-color: #FFEECB;
    height: 65%;
    border: 10px solid #70401E;
    border-radius: 50px;
    position: relative;
  }

  .oringe {
    background-color: #FFEECB !important;
    border: 10px solid #70401E !important;
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
    color: #603915;
    font-family: pepper;
  }

  .spanp1 {
    font-size: 0.8rem;
    /*text-align: left;*/
  }

  .animapng {
    height: 80%;
    margin-top: -7%;
    margin-left: 10%;
  }

  .animapng7 {
    height: 70%;
    width: auto;
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
  .imgsty{
    width: 100%;
    /*background-image: url("../../assets/image/lizione.png");*/
    /*background-size: contain;*/
    /*background-repeat: no-repeat;*/
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
    //margin-left: 2%;
  }

  .fontsizes {
    font-family: kg;
    font-weight: bolder;
    color: #935D24;
    text-align: center;
    vertical-align: middle;
    margin-top: 22%;
    font-size: xx-large;
  }
  .clickbutton{
    display: inline;
    border:none;
    background: none;
    /*background-image: url("../../assets/image/lizione.png");*/
    /*background-size: contain;*/
    /*background-repeat: no-repeat;*/
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
    animation: myPlay 1s 0s infinite alternate;
    animation-timing-function: linear;
    animation-iteration-count: 1;

    -webkit-animation: myPlay 1s 0s infinite alternate;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;

    -moz-animation: myPlay 1s 0s infinite alternate;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: 1;
    -o-animation: myPlay 1s 0s infinite alternate;
    -o-animation-timing-function: linear;
    -o-animation-iteration-count: 1;
  }

  @keyframes myPlay {
    0% {
      transform: scale(1);
    }

    50% {
      opacity: 0.5;
      transform: scale(0.5);


    }

    100% {
      opacity: 0;
      transform: scale(0);

    }
  }

  @-webkit-keyframes myPlay {
    0% {
      transform: scale(1);
    }

    50% {
      opacity: 0.5;
      transform: scale(0.5);

    }

    100% {
      opacity: 0;
      transform: scale(0);

    }
  }

  @-moz-keyframes myPlay {
    0% {
      transform: scale(1);
    }

    50% {
      opacity: 0.5;
      transform: scale(0.5);

    }

    100% {
      opacity: 0;
      transform: scale(0);

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
      font-size: xx-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.2);
    }
    .allimg{
      font-size: 8rem;
    }
    .img1{
      transform: scale(2);
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
    .star{
      margin-top: 20px;
    }


  }
  @media screen and (min-width: 1355px) and (max-width: 1600px) {
    .allimg{
      font-size: 11rem;
    }
    .img1{
      transform: scale(2.5);
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
    .star{
      margin-top: 20px;
    }
  }
  @media screen and (min-width: 737px) and (max-width:811px) {

    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }

  }

  @media screen and (min-width: 812px) and (max-width:895px) {

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

  @media screen and (min-width: 895px) and (max-width:1023px) {
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
    .allimg{
      font-size: 11rem;
      margin: 5% 10%;
    }
    .img1{
      transform: scale(2.5);
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
    .star{
      margin-top: 20px;
    }
  }
</style>
