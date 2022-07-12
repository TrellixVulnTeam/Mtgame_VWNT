<template>
  <div class="advanced5">

    <img src="../../assets/image/advancebg5.png" style="width: 100%; height: 100%;top:0;display:block;position: absolute;">

    <span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
		</span>
    <transition name="fades">
      <div class="contain" v-if="!resume">
        <img src="../../assets/image/aback.png" @click="$tips(true);gomemu()" class="backbutton" />
        <img src="../../assets/image/ahelp.png" @click="$tips(true);help()" class="helpbutton" />
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 100%;display:block;position: absolute; ">
            <p class="fontsizes" v-if="showNum">{{this.countpage}}/{{ this.question}}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div v-if="!onef"   style="width: 100%; height: 100%;display:block;position: absolute;">
            <audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3"  ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3"  ></audio>
             <!--<div  v-if="zhezhao" style="width: 100%; height: 50%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>-->
            <audio @canplay="getDuration"  ref="videos" id="videos" autoplay="autoplay" :src="audio"></audio>
            <div class="leftfonk" @click="listen">
              <img src="../../assets/image/fonkimg.png">
            </div>
            <div class="dndList">
              <img src="../../assets/image/StarYellow.png" class="start" v-show="!ended1" style="position: absolute; top: 0;left: 25%;width: 50%;z-index: 2;">
              <div class="alldrag">
                <draggable id="first"
                           data-source="juju" :list="items1" class="list-group" draggable=".item" :disabled="over" style="width:100%;min-height: 60px;"
                           :group="{ name: 'people', pull: pullFunction }" @start="start" @end="end" @change="log" >
                  <div v-for="(element,index) in items1" :key="index" class="item" style="display: inline-block" :style="{opacity: element.imgop ? 0 : 1,position: !element.imgop ? 'relative' : 'absolute'}">
                    <img src="../../assets/image/sheep.png" class="classimg"   v-bind:class="{ touming:element.imgop}" >
                    <span class="sort" >{{element.name}}</span>
                  </div>
                </draggable>
              </div>
              <div class="AllSheep">
              <div class="allansw" v-for="(i,index) in itemsall" v-if="index==0">
                <div class="bordercolor" id="answer-box">
                  <draggable id="box1" :list=items2 draggable=".item" :style="{opacity: enabled1 ? 0 : 1}"   class="yes dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item" v-for="element  in items2">
                      <img src="../../assets/image/sheep.png" class="sheep3" v-show="element.name">
                      <span class="sort2"  v-bind:class="{ redcolor:redcolor,bluecolor:bluecolor}" v-if="element.name">{{element.name}}</span>
                    </div>
                    <!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/blueball.png" v-bind:class="{listimg:!fangda1}"> -->
                  </draggable>
                </div>
                <button class="fast">
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box1-1.png">
                  <!--<img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box1-2.png" v-if="items2.length">-->
                </button>
              </div>
              <div class="allansw" v-for="(i,index) in itemsall" v-if="index==1">
                <div class="bordercolor" id="answer-box1">
                  <draggable id="box2"  :list="items3" draggable=".item" :style="{opacity: enabled2 ? 0 : 1}"   class="no dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item" v-for="(element,index) in items3"   >
                      <!--  {{ element.name }} -->
                      <img src="../../assets/image/sheep.png" class="sheep3" v-show="element.name">

                      <span class="sort2" v-bind:class="{ redcolor:redcolor,bluecolor:bluecolor}" v-if="element.name">{{element.name}}</span>
                    </div>
                    <!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/redball.png" v-bind:class="{listimg:fangda2}"> -->
                  </draggable>
                </div>
                <button class="fast2" >
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box2-1.png">
                  <!--<img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box2-2.png" v-if="items3.length">-->
                </button>
              </div>
              <div class="allansw" v-for="(i,index) in itemsall" v-if="index==2">
                <div class="bordercolor" id="answer-box2">
                  <draggable id="box3" :list="items4" draggable=".item" :style="{opacity: enabled3 ? 0 : 1}"   class="no dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item" v-for="(element,index) in items4"  >
                      <!--  {{ element.name }} -->
                      <img src="../../assets/image/sheep.png" class="sheep3" v-show="element.name">
                      <span class="sort2" v-bind:class="{ redcolor:redcolor,bluecolor:bluecolor}" v-if="element.name">{{element.name}}</span>
                    </div>
                    <!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/redball.png" v-bind:class="{listimg:fangda2}"> -->
                  </draggable>
                </div>
                <button class="fast3" >
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box3-1.png">
                  <!--<img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box3-2.png"  v-if="items4.length">-->

                </button>
              </div>
              <div class="allansw" v-for="(i,index) in itemsall" v-if="index==3">
                <div class="bordercolor" id="answer-box3">
                  <draggable id="box4" :list="items5"  draggable=".item" :style="{opacity: enabled4 ? 0 : 1}"  class="no dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item"  v-for="(element,index) in items5" >
                      <!--  {{ element.name }} -->
                      <img src="../../assets/image/sheep.png" class="sheep3" v-show="element.name">

                      <span class="sort2"  v-bind:class="{ redcolor:redcolor,bluecolor:bluecolor}" v-if="element.name">{{element.name}}</span>
                    </div>
                    <!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/redball.png" v-bind:class="{listimg:fangda2}"> -->
                  </draggable>
                </div>
                <button class="fast3">
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box4-1.png">
                  <!--<img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box4-2.png"  v-if="items5.length">-->

                </button>
              </div>
              <div class="allansw" v-for="(i,index) in itemsall" v-if="index==4">
                <div class="bordercolor" id="answer-box4">
                  <draggable id="box5" :list="items6"  draggable=".item" :style="{opacity: enabled5 ? 0 : 1}"  class="no dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item" v-for="(element,index) in items6" >
                      <!--  {{ element.name }} -->
                      <img src="../../assets/image/sheep.png" class="sheep3" v-show="element.name">
                      <span class="sort2" v-bind:class="{ redcolor:redcolor,bluecolor:bluecolor}" v-if="element.name">{{element.name}}</span>
                    </div>
                  </draggable>

                </div>
                <button class="fast3"  >
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box5-1.png">
                  <!--<img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box5-2.png"  v-if="items6.length">-->
                </button>
              </div>
              <div class="allansw" v-for="(i,index) in itemsall" v-if="index==5">
                <div class="bordercolor" id="answer-box5">
                  <draggable id="box6" :list="items7"  draggable=".item" :style="{opacity: enabled6 ? 0 : 1}"  class="no dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item" v-for="(element,index) in items7" >
                      <!--  {{ element.name }} -->
                      <img src="../../assets/image/sheep.png" class="sheep3" v-show="element.name">
                      <span class="sort2" v-bind:class="{ redcolor:redcolor,bluecolor:bluecolor}" v-if="element.name">{{element.name}}</span>
                    </div>
                    <!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/redball.png" v-bind:class="{listimg:fangda2}"> -->
                  </draggable>
                </div>
                <button class="fast3"  >
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box6-1.png">
                  <!--<img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box1-2.png"  v-if="items7.length">-->
                </button>
              </div>
              <div class="allansw" v-for="(i,index) in itemsall" v-if="index==6">
                <div class="bordercolor" id="answer-box6">
                  <draggable id="box7" :list="items8"  draggable=".item" :style="{opacity: enabled7 ? 0 : 1}"  class="no dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item" v-for="(element,index) in items8" >
                      <!--  {{ element.name }} -->
                      <img src="../../assets/image/sheep.png" class="sheep3" v-show="element.name">
                      <span class="sort2" v-bind:class="{ redcolor:redcolor,bluecolor:bluecolor}" v-if="element.name">{{element.name}}</span>
                    </div>
                    <!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/redball.png" v-bind:class="{listimg:fangda2}"> -->
                  </draggable>
                </div>
                <button class="fast3"  >
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box7-1.png"  >
                  <!--<img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/box2-2.png"  v-if="items8.length">-->
                </button>
              </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="settinglist">
          <img src="../../assets/image/abar.png" style="width: 100%;bottom: 0;height: 100%;"  >

          <span class="fontsize">Listen to the word. Then, put the letters in the correct order.</span>
          <div @click="$tips(true);changesett()">
            <img src="../../assets/image/adPause.png" class=" repeat">
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
        <img src="../../assets/image/p-rule.png" style="height: 100%;"  />
      </button>
      <div class="withcolor oringe">
        <div class="close" @click="$tips(true);pop()">
          <img src="../../assets/image/pcloce.png">
        </div>
        <img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/advanced5.gif">

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
            <img src="../../assets/image/resume.png" style="width: 30%; height: 10%;" @click="$tips(true);changesett()">
          </div>
          <!-- <div style="margin-top: 5px;" >
                        <div><img src="../../assets/image/home.png" style="width: 30%; height: 10%;" @click="$tips(true);gomemu()"></div>
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
    name: "advanced5",
    // order: 1,
    // display: "Two Lists",
    components: {
      // Draggable,
      // Container
      draggable
    },
    watch: {
      'onef': function(newVal) {
        if (this.onef === true) {
          setTimeout(() => {
            this.onef = false;
            this.bluecolor=false;
            this.answer='';
            this.items2=[];this.items3=[];this.items4=[];this.items5=[];this.items6=[];this.items7=[];this.items8=[];
            this.audio=this.pic+this.listH[this.countpage-1][0].audio;
            this.items1=this.listH[this.countpage-1][0].listA;
            this.itemsall=this.listH[this.countpage-1][0].itemsall;
          }, 2000);

        }
      },
      'video': function(newVal) {
        if (this.video == true) {
          this.$refs.videos.play();
          setTimeout(() => {
            this.$refs.videos.pause();
            this.video =false;
          }, this.duration*1000);
        }
      },
      // 'short2':function (newVal) {
      //   if (this.short2 == true) {
      //     setTimeout(() => {
      //       this.short2 = false;
      //
      //     }, 3000);
      //   }
      // },
      // 'short3':function (newVal) {
      //   if (this.short3 == true) {
      //     setTimeout(() => {
      //       this.short3 = false;
      //
      //     }, 3000);
      //   }
      // }

    },
    data() {
      return {
        showNum: false,
        popp: false,
        items:'items',
        spanp:'',
        showword:false,
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
        over:false,
        question: 10,
        answercount:0,
        bluecolor:false,
        redcolor:false,
        soundsWrong:false,
        soundscorrect:false,
        short1:false,
        short2:false,
        short3:false,
        video: [
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
          {
            play: false
          },
        ],
        fade: 'fade',
        flag2: true,
        trueanswer:[],
        enabled1:true,enabled2:true,enabled3:true,enabled4:true,enabled5:true,enabled6:true,enabled7:true,
        sort2: '',sort3: '',sort4: '',sort5: '',
        sort1: '',
        sheep3:false,
        sheep4:false,
        sheep5:false,
        sheep6:false,
        sheep7:false,
        answer:'',
        show: true,
        resume: false,
        showitem: false,
        showstart: null,

        countpage: 1,
        unitsId: '',
        unit: '',
        zhezhao:false,
        menuId: '',
        itemsall:[],
        listH: [
            // {
            //   audio: "/image/video/8c17b2e7-038f-4480-99e9-173eebc71967.m4a",
            //   name: "caidngn",//选项
            //   question:"dancing",//答案
            //   // value: "_____",//问题
            // },
        ],
        account: 0,
        pic: "",
        url: '/phonics3/phonics',
        items2: [
        ],
        items4: [
        ],
        items5: [
        ],
        items6: [
        ],
        items7: [
        ],
        items8: [
        ],
        items1: {},
        items3: [

        ],
        id: 6,
        count: 0,
        addlist: false,
        ended1: true,
        ended2: true,ended3: true,
        fangda1: false,
        fangda2: false,fangda3: false,
        othersize: false,
        levels: 0,
        page: 2,
        type: 'advanced',
        gamename:'',
        timeurl:'/user/playTime',
      }
    },
    methods: {
      getDuration() {
        // console.log(this.$refs.videos.duration); //此时可以获取到duration
        this.duration = this.$refs.videos.duration;
        this.video=true;
      },
      bodyScroll(event) {
        event.preventDefault();
      },
      listen() {
        if(this.onef == false){
          this.video=true;
        }
      },

      pullFunction: function(evt) {
        // console.log(evt);
        return this.controlOnStart ? "clone" : true;
      },
      start:function(evt) {
        this.items1[evt.oldDraggableIndex].imgop = 1;
        this.controlOnStart = evt.originalEvent.ctrlKey;

      },
      end: function(evt){
        this.showword=false;
        // console.log(evt);
        // console.log(this.items2);
        if (evt.to.id == "box1") {
          this.enabled1=false;
          if(evt.to.childElementCount>1){
            this.items1.push({
              imgop: 0,
              name:this.items2[0].name
            });
            this.items2.splice(0,1);
            // console.log(this.items1);
            // console.log(this.items2);
          }
        } else if (evt.to.id == "box2") {
          this.enabled2=false;
          if(evt.to.childElementCount>1){
            this.items1.push({
              imgop: 0,
              name:this.items3[0].name
            });
            this.items3.splice(0,1);
          }
        }else if (evt.to.id == "box3") {
          this.enabled3=false;
          if(evt.to.childElementCount>1){
            this.items1.push({
              imgop: 0,
              name:this.items4[0].name
            });
            this.items4.splice(0,1);
          }
        }else if (evt.to.id == "box4") {
          this.enabled4=false;
          if(evt.to.childElementCount>1){
            this.items1.push({
              imgop: 0,
              name:this.items5[0].name
            });
            this.items5.splice(0,1);
          }
        }else if (evt.to.id == "box5") {
          this.enabled5=false;
          if(evt.to.childElementCount>1){
            this.items1.push({
              imgop: 0,
              name:this.items6[0].name
            });
            this.items6.splice(0,1);
          }
        }else if (evt.to.id == "box6") {
          this.enabled6=false;
          if(evt.to.childElementCount>1){
            this.items1.push({
              imgop: 0,
              name:this.items7[0].name
            });
            this.items7.splice(0,1);
          }
        }else if (evt.to.id == "box7") {
          this.enabled7=false;
          if(evt.to.childElementCount>1){
            this.items1.push({
              imgop: 0,
              name:this.items8[0].name
            });
            this.items8.splice(0,1);
          }
        }
        if(this.items1[evt.oldDraggableIndex]){
          this.items1[evt.oldDraggableIndex].imgop = 0;
        }

      },
      log: function(evt) {
        if (evt.removed) {
          //表示剩余篮子数量
          console.log(this.items1.length);
          // if(this.over==false){
            this.over=true;
            //剩余篮子数量为0时执行
             if(this.items1.length===0){
               if(this.items2.length){
                 this.answer=this.answer+this.items2[0].name;
               }
               if(this.items3.length){
                 this.answer=this.answer+this.items3[0].name;
               }
               if(this.items4.length){
                 this.answer=this.answer+this.items4[0].name;
               }
               if(this.items5.length){
                 this.answer=this.answer+this.items5[0].name;
               }
               if(this.items6.length){
                 this.answer=this.answer+this.items6[0].name;
               }
               if(this.items7.length){
                 this.answer=this.answer+this.items7[0].name;
               }
               if(this.items8.length){
                 this.answer=this.answer+this.items8[0].name;
               }
                //console.log(this.items8);
               //answer指自己的答案
               if(this.answer===this.listH[this.countpage-1][0].question){
                  this.count += 1;
                  this.countpage+=1;
                  this.ended1 = false;
                  this.soundscorrect=true;
                  setTimeout(() => {
                    this.soundscorrect=false;
                    this.ended1 = true;
                    this.over=false;
                    if(this.countpage>this.question){
                      setTimeout(() => {
                        this.$router.push({
                          //核心语句
                          path: "/presult", //跳转的路径
                          query: {
                            type:this.type,
                            partName:'advanced5',
                            account:this.count,
                            menuId: this.menuId,
                            unitsId:this.unitsId,
                            unit:this.unit
                          }
                        });
                      }, 1500);
                    }else {
                      setTimeout(() => {
                        this.onef=true;
                      }, 1500);
                    }

                  }, 2000);
                }else {
                  this.soundsWrong=true;
                  this.countpage+=1;
                  this.redcolor=true;
                  setTimeout(() => {
                    this.redcolor=false;
                    this.over=false;
                    this.soundsWrong=false;
                    var data1=this.listH[this.countpage-2][0].question.split('');
                    for(var i=0;i<data1.length;i++){
                      // if(this['items'+(i+2)][0].name!=data1[i]){
                        this['items'+(i+2)][0].name=data1[i];
                      // }else {
                      //   console.log('false');
                      // }
                    }
                    this.bluecolor=true;
                    if(this.countpage>this.question){
                      setTimeout(() => {
                        this.$router.push({
                          //核心语句
                          path: "/presult", //跳转的路径
                          query: {
                            type:this.type,
                            partName:'advanced5',
                            account:this.count,
                            menuId: this.menuId,
                            unitsId:this.unitsId,
                            unit:this.unit
                          }
                        });
                      }, 1500);
                    }else {
                      setTimeout(() => {
                         this.onef=true;
                      }, 1500);
                    }
                  }, 2000);
                }
             }else {
               this.over=false;
             }
            // }
        } else if (evt.moved) {
          // this.fangda1 = false;
          // this.fangda2 = false;
          // this.fangda3 = false;
          evt.moved.element.imgop = 0;
          this.over=false;
          //console.log(this.fangda2);
        }
      },

      changesett() {
        if (this.onef == false) {
          setTimeout(() => {
            this.resume = !this.resume;
          }, 1000);
        }
      },

      pop(){
        this.popp = !this.popp;
      },
      help(){
        if (this.onef == false) {
          this.spanp = "Listen to the word. Then, put the letters in the correct order.";
          this.popp = !this.popp;
        }
      },
      gomemu() {
        var audio = document.getElementById('music');
        if (localStorage.getItem('audiomusic') === "false") {
        } else {
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
          path: '/advmenu', //跳转的路径
          query: {
            unitsId: this.unitsId,
            unit: this.unit
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
      this.unitsId = this.$route.query.unitsId;
      this.menuId = this.$route.query.menuId; //接受参数关键代码
      this.gamename=this.$route.query.name;
      localStorage.setItem('gamename',this.gamename);
      var timestamp = (new Date()).getTime();
      localStorage.setItem('startTimeid',timestamp);
      this.show = localStorage.getItem('gamemusic') !== "false";
      if (this.onef === true) {
        this.$axios.post(this.url, qs.stringify({
          menuId: this.menuId,
          num:25
        })).then(res => {
          for (let i in res.data.maps) {
            this.listH.push(res.data.maps[i]); //属性
          }
            this.question =this.listH.length;
            for(var i=0;i<this.listH.length;i++){
              var data2=this.listH[i][0].name.split('');
              this.listH[i][0].listA=[];
              this.listH[i][0].itemsall=[];
              //u正常为0
              for(var u=0;u<data2.length;u++){
                this.listH[i][0].listA.push({
                  imgop: 0,
                  id:'i'+(u+1),
                  name:data2[u]
                });
                this.listH[i][0].itemsall.push({
                  ['items'+(u+2)]:[]
                });
              }
              // console.log(this.trueanswer);
              //console.log(this.listH);
            }
            this.audio=this.pic+this.listH[0][0].audio;
            this.items1=this.listH[0][0].listA;
            this.itemsall=this.listH[0][0].itemsall;
          //console.log(this.itemsall);
          this.showNum = true;
          setTimeout(() => {
            this.onef = false;
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
  body {
    padding: 0;
    cursor: auto !important;
  }

  .advanced5 {
    width: 100%;
    height: 100%;
    /*background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/interbg10.png");*/
    /*background-color: #204900;*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    position: absolute;
    display: flex;
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
    width: 50px;
    height: 50px;
    text-align: center;
    margin: 0 8px;
  }
  .sheep7 {
    width: 65px;
    height: 60px;
    text-align: center;
    margin: 0 10px;
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
  .leftfonk{
    width: 30%;
    height: 90%;
    img{
      width: 100%;
      margin-left: -10%;
      bottom: 0;
      margin-top: 30px;
    }
  }
  .bgimage{
    position: absolute;
    width: auto;
    left: 27%;
    top: 35%;
    max-width: 50%;
    max-height: 50%;
    height: auto;

  }

  .fast {
    font-size: 2.0rem;
    width: 80%;
    height: 100%;
    background: none;
    bottom:0;
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
    width:80%;
    height: 100%;
    background: none;
    bottom:0;
    border-style: none;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:cover ;
    color: white;
    position: relative;
    font-family: pepper;
    text-align: center;
  }
  .fast3 {
    font-size: 2.0rem;
    width:80%;
    height: 100%;
    background: none;
    bottom:0;
    border-style: none;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:cover ;
    color: white;
    position: relative;
    font-family: pepper;
    text-align: center;
  }
  .sort{
    position: absolute;
    bottom: 13%;
    left: 0;
    color: #a649e8;
    font-size: 1.5rem;
    font-family: pepper;
    width: 100%;
  }
  .sort2{
    position: absolute;
    bottom: 13%;
    left: 0;
    color: #a649e8;
    font-size: 1.5rem;
    font-family: pepper;
    width: 100%;
  }
  .alldrag {
    top: 30%;
    width: 100%;
    position: absolute;
    text-align: center;
  }

  .dndList {
    position: absolute;
    bottom: 15%;
    height: 85%;
    width: 70%;
    display: flex;
    right: 15px;
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
    width: 33.3%;
    top: 60%;
    position: relative;
    height: 30%;
    text-align: center
  }
  .list-group-item{
    bottom: 20px;
    position: absolute;
    left: -10px;
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
    font-size: 1.1rem;
    max-height: 100%;
    min-height: 60%;
    margin-left: 2%;
  }

  .redcolor {
    color: #cc6453;
  }
  .bluecolor {
    color: #44ccc2;
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
    transform: scale(1.2);
    background-size: contain;
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
    bottom: 0;
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
      left: 0;
    }

    50% {
      position: relative;
      left: 20px;
    }

    100% {
      position: relative;
      left: 0;
    }
  }

  @-webkit-keyframes myPlay {
    0% {
      position: relative;
      left: 0;
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
      font-size: 0.5rem;
      max-height: 100%;
      min-height: 60%;
      margin-left: 2%;
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


  }

  @media screen and (min-device-height: 482px) and (max-device-height: 569px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 482px) and (max-device-height: 569px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 482px) and (max-width: 569px){
    .sheep3 {
      width: 55px;
      height: 56px;
    }
    .sheep4 {
      width: 55px;
      height: 56px;
    }
    .sheep5 {
      width: 55px;
      height: 56px;
    }
    .sheep6 {
      width: 55px;
      height: 56px;
    }
    .sheep7 {
      width: 55px;
      height: 56px;
    }
    .allansw {
      height:5rem;
    }
    .alldrag {
      top: 35%;
    }

    .fast {
      font-size: 1.5rem;
    }
    .fontsize{
      font-size: 0.8rem;
    }
    .allansw:first-child:nth-last-child(3),
    .allansw:first-child:nth-last-child(3) ~.allansw{
      width: 120px;
      top: 65%;
      height: 65px;
      left: 5%;
    }
    .allansw:first-child:nth-last-child(3) .list-group-item,
    .allansw:first-child:nth-last-child(3) ~.allansw .list-group-item{
      bottom: 41px;
      left: 31px;
    }
    .allansw:first-child:nth-last-child(3) .sheep3,
    .allansw:first-child:nth-last-child(3) ~.allansw .sheep3{
      width: 60px;
      height: 60px;
    }
    .allansw:first-child:nth-last-child(4),
    .allansw:first-child:nth-last-child(4) ~.allansw{
      width: 95px;
      top: 65%;
      height: 65px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(4) .list-group-item,
    .allansw:first-child:nth-last-child(4) ~.allansw .list-group-item{
      bottom: 34px;
      left: 21px;
    }
    .allansw:first-child:nth-last-child(4) .sheep3,
    .allansw:first-child:nth-last-child(4) ~.allansw .sheep3{
      width: 55px;
      height: 55px;
    }
    .allansw:first-child:nth-last-child(5),
    .allansw:first-child:nth-last-child(5) ~.allansw{
      width: 70px;
      top: 65%;
      height: 65px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(5) .list-group-item,
    .allansw:first-child:nth-last-child(5) ~.allansw .list-group-item{
      bottom: 28px;
      left: 15px;
    }
    .allansw:first-child:nth-last-child(5) .sheep3,
    .allansw:first-child:nth-last-child(5) ~.allansw .sheep3{
      width: 45px;
      height: 45px;
    }
    .allansw:first-child:nth-last-child(6),
    .allansw:first-child:nth-last-child(6) ~.allansw{
      width: 60px;
      top: 65%;
      height: 65px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(6) .list-group-item,
    .allansw:first-child:nth-last-child(6) ~.allansw .list-group-item{
      bottom: 24px;
      left: 11px;
    }
    .allansw:first-child:nth-last-child(6) .sheep3,
    .allansw:first-child:nth-last-child(6) ~.allansw .sheep3{
      width: 40px;
      height: 40px;
    }
    .allansw:first-child:nth-last-child(7),
    .allansw:first-child:nth-last-child(7) ~.allansw{
      width: 50px;
      top: 65%;
      height: 65px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(7) .list-group-item,
    .allansw:first-child:nth-last-child(7) ~.allansw .list-group-item{
      bottom: 23px;
      left: 8px;
    }
    .allansw:first-child:nth-last-child(7) .sheep3,
    .allansw:first-child:nth-last-child(7) ~.allansw .sheep3{
      width: 35px;
      height: 35px;
    }
    .allansw:first-child:nth-last-child(7) .sort2,
    .allansw:first-child:nth-last-child(7) ~.allansw .sort2{
      bottom: 17%;
      font-size: 1rem;
    }
  }

  @media screen and (min-device-height: 570px) and (max-device-height: 699px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 570px) and (max-device-height: 699px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 570px) and (max-width: 699px){
    .leftfonk img {
      width: 100%;
      margin-left: -10%;
      bottom: 0;
      margin-top: 35%;
    }
    .classimg {
      width: 65px;
      height: 65px;
    }
    .allansw:first-child:nth-last-child(3),
    .allansw:first-child:nth-last-child(3) ~.allansw{
      width: 140px;
      top: 62%;
      height: 85px;
      left: 5%;
    }
    .allansw:first-child:nth-last-child(3) .list-group-item,
    .allansw:first-child:nth-last-child(3) ~.allansw .list-group-item{
      bottom: 50px;
      left: 37px;
    }
    .allansw:first-child:nth-last-child(3) .sheep3,
    .allansw:first-child:nth-last-child(3) ~.allansw .sheep3{
      width: 70px;
      height: 70px;
    }
    .allansw:first-child:nth-last-child(4),
    .allansw:first-child:nth-last-child(4) ~.allansw{
      width: 105px;
      top: 62%;
      height: 85px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(4) .list-group-item,
    .allansw:first-child:nth-last-child(4) ~.allansw .list-group-item{
      bottom: 35px;
      left: 23px;
    }
    .allansw:first-child:nth-last-child(4) .sheep3,
    .allansw:first-child:nth-last-child(4) ~.allansw .sheep3{
      width: 65px;
      height: 65px;
    }
    .allansw:first-child:nth-last-child(5),
    .allansw:first-child:nth-last-child(5) ~.allansw{
      width: 85px;
      top: 62%;
      height: 85px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(5) .list-group-item,
    .allansw:first-child:nth-last-child(5) ~.allansw .list-group-item{
      bottom: 30px;
      left: 15px;
    }
    .allansw:first-child:nth-last-child(5) .sheep3,
    .allansw:first-child:nth-last-child(5) ~.allansw .sheep3{
      width: 60px;
      height: 60px;
    }
    .allansw:first-child:nth-last-child(6),
    .allansw:first-child:nth-last-child(6) ~.allansw{
      width: 70px;
      top: 62%;
      height: 85px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(6) .list-group-item,
    .allansw:first-child:nth-last-child(6) ~.allansw .list-group-item{
      bottom: 27px;
      left: 11px;
    }
    .allansw:first-child:nth-last-child(6) .sheep3,
    .allansw:first-child:nth-last-child(6) ~.allansw .sheep3{
      width: 50px;
      height: 50px;
    }
    .allansw:first-child:nth-last-child(7),
    .allansw:first-child:nth-last-child(7) ~.allansw{
      width: 60px;
      top: 62%;
      height: 85px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(7) .list-group-item,
    .allansw:first-child:nth-last-child(7) ~.allansw .list-group-item{
      bottom: 24px;
      left: 3px;
    }
    .allansw:first-child:nth-last-child(7) .sheep3,
    .allansw:first-child:nth-last-child(7) ~.allansw .sheep3{
      width: 55px;
      height: 55px;
    }
  }

  @media screen and (min-device-height: 700px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 700px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 700px) and (max-width: 811px){
    .leftfonk img {
      width: 100%;
      margin-left: -10%;
      bottom: 0;
      margin-top: 31%;
    }
    .classimg {
      width: 65px;
      height: 65px;
    }
    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }

    .list-group-item{
      left: -7px;
      bottom: 23px;
    }
    .allansw:first-child:nth-last-child(3),
    .allansw:first-child:nth-last-child(3) ~.allansw{
      width: 150px;
      top: 63%;
      height: 95px;
      left: 10%;
    }
    .allansw:first-child:nth-last-child(3) .list-group-item,
    .allansw:first-child:nth-last-child(3) ~.allansw .list-group-item{
      bottom: 50px;
      left: 40px;
    }
    .allansw:first-child:nth-last-child(3) .sheep3,
    .allansw:first-child:nth-last-child(3) ~.allansw .sheep3{
      width: 75px;
      height: 75px;
    }
    .allansw:first-child:nth-last-child(4),
    .allansw:first-child:nth-last-child(4) ~.allansw{
      width: 120px;
      top: 62%;
      height: 95px;
      left: 1%;
    }
    .allansw:first-child:nth-last-child(4) .list-group-item,
    .allansw:first-child:nth-last-child(4) ~.allansw .list-group-item{
      bottom: 40px;
      left: 29px;
    }
    .allansw:first-child:nth-last-child(4) .sheep3,
    .allansw:first-child:nth-last-child(4) ~.allansw .sheep3{
      width: 65px;
      height: 65px;
    }
    .allansw:first-child:nth-last-child(5),
    .allansw:first-child:nth-last-child(5) ~.allansw{
      width: 95px;
      top: 75%;
      height: 50px;
      left: 1%;
    }
    .allansw:first-child:nth-last-child(5) .list-group-item,
    .allansw:first-child:nth-last-child(5) ~.allansw .list-group-item{
      bottom: 35px;
      left: 18px;
    }
    .allansw:first-child:nth-last-child(5) .sheep3,
    .allansw:first-child:nth-last-child(5) ~.allansw .sheep3{
      width: 60px;
      height: 60px;
    }
    .allansw:first-child:nth-last-child(6),
    .allansw:first-child:nth-last-child(6) ~.allansw{
      width: 80px;
      top: 75%;
      height: 50px;
      left: 1%;
    }
    .allansw:first-child:nth-last-child(6) .list-group-item,
    .allansw:first-child:nth-last-child(6) ~.allansw .list-group-item{
      bottom: 30px;
      left: 14px;
    }
    .allansw:first-child:nth-last-child(6) .sheep3,
    .allansw:first-child:nth-last-child(6) ~.allansw .sheep3{
      width: 55px;
      height: 55px;
    }
    .allansw:first-child:nth-last-child(7),
    .allansw:first-child:nth-last-child(7) ~.allansw{
      width: 65px;
      top: 75%;
      height: 50px;
      left: 1%;
    }
    .allansw:first-child:nth-last-child(7) .list-group-item,
    .allansw:first-child:nth-last-child(7) ~.allansw .list-group-item{
      bottom: 26px;
      left: 8px;
    }
    .allansw:first-child:nth-last-child(7) .sheep3,
    .allansw:first-child:nth-last-child(7) ~.allansw .sheep3{
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-device-height: 811px) and (max-device-height: 895px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 811px) and (max-device-height: 895px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 812px) and (max-width:895px){
    .classimg {
      width: 70px;
      height: 70px;
    }
    .twomenu {
      padding-top: 14%;
    }
    .list-group-item{
      left: -7px;
      bottom: 23px;
    }
    .sheep3{
      width: 75px;
      height: 70px;
    }
    .sheep4{
      width: 75px;
      height: 70px;
    }
    .sheep5{
      width: 75px;
      height: 70px;
    }
    .sheep6{
      width: 75px;
      height: 70px;
    }
    .sheep7{
      width: 75px;
      height: 70px;
    }
    .fontsizes {
      margin-top: 17%;
    }
    .sort2{
      bottom: 19%;
    }


    .withcolor {
      height: 70%;
    }
    .bgimage{
      top: 20%;
      max-height: 60%;
    }
    .allansw:first-child:nth-last-child(3),
    .allansw:first-child:nth-last-child(3) ~.allansw{
      width: 150px;
      top: 60%;
      height: 95px;
      left: 10%;
    }
    .allansw:first-child:nth-last-child(3) .list-group-item,
    .allansw:first-child:nth-last-child(3) ~.allansw .list-group-item{
      bottom: 50px;
      left: 40px;
    }
    .allansw:first-child:nth-last-child(3) .sheep3,
    .allansw:first-child:nth-last-child(3) ~.allansw .sheep3{
      width: 75px;
      height: 75px;
    }
    .allansw:first-child:nth-last-child(4),
    .allansw:first-child:nth-last-child(4) ~.allansw{
      width: 135px;
      top: 60%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(4) .list-group-item,
    .allansw:first-child:nth-last-child(4) ~.allansw .list-group-item{
      bottom: 44px;
      left: 32px;
    }
    .allansw:first-child:nth-last-child(4) .sheep3,
    .allansw:first-child:nth-last-child(4) ~.allansw .sheep3{
      width: 75px;
      height: 75px;
    }
    .allansw:first-child:nth-last-child(5),
    .allansw:first-child:nth-last-child(5) ~.allansw{
      width: 105px;
      top: 60%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(5) .list-group-item,
    .allansw:first-child:nth-last-child(5) ~.allansw .list-group-item{
      bottom: 35px;
      left: 17px;
    }
    .allansw:first-child:nth-last-child(5) .sheep3,
    .allansw:first-child:nth-last-child(5) ~.allansw .sheep3{
      width: 70px;
      height: 70px;
    }
    .allansw:first-child:nth-last-child(6),
    .allansw:first-child:nth-last-child(6) ~.allansw{
      width: 90px;
      top: 60%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(6) .list-group-item,
    .allansw:first-child:nth-last-child(6) ~.allansw .list-group-item{
      bottom: 32px;
      left: 16px;
    }
    .allansw:first-child:nth-last-child(6) .sheep3,
    .allansw:first-child:nth-last-child(6) ~.allansw .sheep3{
      width: 60px;
      height: 60px;
    }
    .allansw:first-child:nth-last-child(7),
    .allansw:first-child:nth-last-child(7) ~.allansw{
      width: 75px;
      top: 60%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(7) .list-group-item,
    .allansw:first-child:nth-last-child(7) ~.allansw .list-group-item{
      bottom: 26px;
      left: 8px;
    }
    .allansw:first-child:nth-last-child(7) .sheep3,
    .allansw:first-child:nth-last-child(7) ~.allansw .sheep3{
      width: 60px;
      height: 60px;
    }
  }

  @media screen and (min-device-height: 896px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 896px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 896px) and (max-width:1023px){
    .leftfonk img {
      width: 100%;
      margin-left: -10%;
      bottom: 0;
      margin-top: 10%;
    }
    .classimg {
      width: 70px;
      height: 70px;
    }
    .twomenu {
      padding-top: 14%;
    }

    .list-group-item{
      left: -3px;
      bottom: 23px;
    }
    .sheep3{
      width: 75px;
      height: 70px;
    }
    .sheep4{
      width: 75px;
      height: 70px;
    }
    .sheep5{
      width: 75px;
      height: 70px;
    }
    .sheep6{
      width: 75px;
      height: 70px;
    }
    .sheep7{
      width: 75px;
      height: 70px;
    }
    .fontsizes {
      margin-top: 17%;
    }
    .sort2{
      bottom: 19%;
    }
    .withcolor {
      height: 70%;
    }
    .bgimage{
      top: 20%;
      max-height: 60%;
    }
    .allansw:first-child:nth-last-child(3),
    .allansw:first-child:nth-last-child(3) ~.allansw{
       width: 155px;
       top: 62%;
       height: 95px;
       left: 17%;
     }
    .allansw:first-child:nth-last-child(3) .list-group-item,
    .allansw:first-child:nth-last-child(3) ~.allansw .list-group-item{
      bottom: 50px;
      left: 41px;
    }
    .allansw:first-child:nth-last-child(3) .sheep3,
    .allansw:first-child:nth-last-child(3) ~.allansw .sheep3{
      width: 75px;
      height: 75px;
    }
    .allansw:first-child:nth-last-child(4),
    .allansw:first-child:nth-last-child(4) ~.allansw{
      width: 140px;
      top: 62%;
      height: 95px;
      left: 5%;
    }
    .allansw:first-child:nth-last-child(4) .list-group-item,
    .allansw:first-child:nth-last-child(4) ~.allansw .list-group-item{
      bottom: 48px;
      left: 33px;
    }
    .allansw:first-child:nth-last-child(4) .sheep3,
    .allansw:first-child:nth-last-child(4) ~.allansw .sheep3{
      width: 75px;
      height: 75px;
    }
    .allansw:first-child:nth-last-child(5),
    .allansw:first-child:nth-last-child(5) ~.allansw{
      width: 115px;
      top: 62%;
      height: 95px;
      left: 5%;
    }
    .allansw:first-child:nth-last-child(5) .list-group-item,
    .allansw:first-child:nth-last-child(5) ~.allansw .list-group-item{
      bottom: 38px;
      left: 24px;
    }
    .allansw:first-child:nth-last-child(5) .sheep3,
    .allansw:first-child:nth-last-child(5) ~.allansw .sheep3{
      width: 70px;
      height: 70px;
    }
    .allansw:first-child:nth-last-child(6),
    .allansw:first-child:nth-last-child(6) ~.allansw{
      width: 95px;
      top: 62%;
      height: 95px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(6) .list-group-item,
    .allansw:first-child:nth-last-child(6) ~.allansw .list-group-item{
      bottom: 33px;
      left: 18px;
    }
    .allansw:first-child:nth-last-child(6) .sheep3,
    .allansw:first-child:nth-last-child(6) ~.allansw .sheep3{
      width: 60px;
      height: 60px;
    }
    .allansw:first-child:nth-last-child(7),
    .allansw:first-child:nth-last-child(7) ~.allansw{
      width: 80px;
      top: 62%;
      height: 95px;
      left: 3%;
    }
    .allansw:first-child:nth-last-child(7) .list-group-item,
    .allansw:first-child:nth-last-child(7) ~.allansw .list-group-item{
      bottom: 28px;
      left: 11px;
    }
    .allansw:first-child:nth-last-child(7) .sheep3,
    .allansw:first-child:nth-last-child(7) ~.allansw .sheep3{
      width: 60px;
      height: 60px;
    }
  }

  @media screen and (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 1024px) and (max-width: 1199px){
    .alldrag {
      top: 40%;
    }
    .twomenu {
      padding-top: 26%;
    }
    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 8%;
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
    .dndList{
      right: 30px;
    }
    .allansw{
      top: 58%;
    }
    .leftfonk img {
      width: 30%;
      margin-left: -7%;
      bottom: 3%;
      /* margin-top: 30px; */
      position: absolute;
    }

    .list-group-item{
      bottom: 30px;
    }
    .classimg{
      width: 80px;
      height: 85px;
    }
    .sheep3{
      width: 100px;
      height: 85px;
    }
    .sheep4{
      width: 100px;
      height: 85px;
    }
    .sheep5{
      width: 100px;
      height: 85px;
    }
    .sheep6{
      width: 100px;
      height: 85px;
    }
    .sheep7{
      width: 100px;
      height: 85px;
    }
    .alldrag{
      bottom: 5%;
    }
    .sort{
      font-size: 2rem;
      bottom: 18%;
    }
    .sort2{
      font-size: 2rem;
      bottom: 18%;
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
    .bgimage{
      top: 49%;
      max-height: 40%;
    }
    .allansw:first-child:nth-last-child(3),
    .allansw:first-child:nth-last-child(3) ~.allansw{
      width: 230px;
      top: 62%;
      height: 175px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(3) .list-group-item,
    .allansw:first-child:nth-last-child(3) ~.allansw .list-group-item{
      bottom: 65px;
      left: 50px;
    }
    .allansw:first-child:nth-last-child(3) .sheep3,
    .allansw:first-child:nth-last-child(3) ~.allansw .sheep3{
      width: 130px;
      height: 130px;
    }
    .allansw:first-child:nth-last-child(4),
    .allansw:first-child:nth-last-child(4) ~.allansw{
      width: 175px;
      top: 74%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(4) .list-group-item,
    .allansw:first-child:nth-last-child(4) ~.allansw .list-group-item{
      bottom: 54px;
      left: 38px;
    }
    .allansw:first-child:nth-last-child(4) .sheep3,
    .allansw:first-child:nth-last-child(4) ~.allansw .sheep3{
      width: 105px;
      height: 105px;
    }
    .allansw:first-child:nth-last-child(5),
    .allansw:first-child:nth-last-child(5) ~.allansw{
      width: 135px;
      top: 74%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(5) .list-group-item,
    .allansw:first-child:nth-last-child(5) ~.allansw .list-group-item{
      bottom: 38px;
      left: 27px;
    }
    .allansw:first-child:nth-last-child(5) .sheep3,
    .allansw:first-child:nth-last-child(5) ~.allansw .sheep3{
      width: 85px;
      height: 85px;
    }

    .allansw:first-child:nth-last-child(6),
    .allansw:first-child:nth-last-child(6) ~.allansw{
      width: 115px;
      top: 74%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(6) .list-group-item,
    .allansw:first-child:nth-last-child(6) ~.allansw .list-group-item{
      bottom: 36px;
      left: 21px;
    }
    .allansw:first-child:nth-last-child(6) .sheep3,
    .allansw:first-child:nth-last-child(6) ~.allansw .sheep3{
      width: 80px;
      height: 80px;
    }

    .allansw:first-child:nth-last-child(7),
    .allansw:first-child:nth-last-child(7) ~.allansw{
      width: 98px;
      top: 74%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(7) .list-group-item,
    .allansw:first-child:nth-last-child(7) ~.allansw .list-group-item{
      bottom: 33px;
      left: 9px;
    }
    .allansw:first-child:nth-last-child(7) .sheep3,
    .allansw:first-child:nth-last-child(7) ~.allansw .sheep3{
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (min-device-height: 1200px) and (max-device-height: 1365px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 1200px) and (max-device-height: 1365px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 1200px)and (max-width: 1365px){
    .twomenu {
      padding-top: 26%;
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
    .dndList{
      right: 30px;
    }
    .allansw{
      top: 58%;
    }
    .leftfonk img{
      width: 30%;
      margin-left: -7%;
      bottom: 9%;
      /* margin-top: 30px; */
      position: absolute;
    }

    .list-group-item{
      bottom: 30px;
    }
    .classimg{
      width: 80px;
      height: 85px;
    }
    .sheep3{
      width: 100px;
      height: 85px;
    }
    .sheep4{
      width: 100px;
      height: 85px;
    }
    .sheep5{
      width: 100px;
      height: 85px;
    }
    .sheep6{
      width: 100px;
      height: 85px;
    }
    .sheep7{
      width: 100px;
      height: 85px;
    }
    .alldrag{
      bottom: 5%;
    }
    .sort{
      font-size: 2rem;
      bottom: 18%;
    }
    .sort2{
      font-size: 2rem;
      bottom: 18%;
    }

    .bgimage{
      top: 49%;
      max-height: 40%;
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
    .allansw:first-child:nth-last-child(3),
    .allansw:first-child:nth-last-child(3) ~.allansw{
      width: 230px;
      top: 62%;
      height: 175px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(3) .list-group-item,
    .allansw:first-child:nth-last-child(3) ~.allansw .list-group-item{
      bottom: 65px;
      left: 50px;
    }
    .allansw:first-child:nth-last-child(3) .sheep3,
    .allansw:first-child:nth-last-child(3) ~.allansw .sheep3{
      width: 130px;
      height: 130px;
    }
    .allansw:first-child:nth-last-child(4),
    .allansw:first-child:nth-last-child(4) ~.allansw{
      width: 175px;
      top: 74%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(4) .list-group-item,
    .allansw:first-child:nth-last-child(4) ~.allansw .list-group-item{
      bottom: 54px;
      left: 38px;
    }
    .allansw:first-child:nth-last-child(4) .sheep3,
    .allansw:first-child:nth-last-child(4) ~.allansw .sheep3{
      width: 105px;
      height: 105px;
    }
    .allansw:first-child:nth-last-child(5),
    .allansw:first-child:nth-last-child(5) ~.allansw{
      width: 135px;
      top: 74%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(5) .list-group-item,
    .allansw:first-child:nth-last-child(5) ~.allansw .list-group-item{
      bottom: 38px;
      left: 27px;
    }
    .allansw:first-child:nth-last-child(5) .sheep3,
    .allansw:first-child:nth-last-child(5) ~.allansw .sheep3{
      width: 85px;
      height: 85px;
    }
    .allansw:first-child:nth-last-child(6),
    .allansw:first-child:nth-last-child(6) ~.allansw{
      width: 115px;
      top: 74%;
      height: 95px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(6) .list-group-item,
    .allansw:first-child:nth-last-child(6) ~.allansw .list-group-item{
      bottom: 36px;
      left: 21px;
    }
    .allansw:first-child:nth-last-child(6) .sheep3,
    .allansw:first-child:nth-last-child(6) ~.allansw .sheep3{
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (min-device-height: 1366px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 1366px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 1366px) and (max-width: 1600px){
    .alldrag {
      top: 40%;
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
      font-size: 1.8rem;
      max-height: 80%;
      min-height: 47%;
      margin-left: 2%;
      transform: scale(1.2);
    }

    .fontsizes {
      margin-top: 30%;
    }
    .dndList{
      right: 45px;
    }
    .allansw{
      top: 58%;
    }
    .leftfonk img {
      width: 30%;
      margin-left: -7%;
      bottom: 3%;
      /* margin-top: 30px; */
      position: absolute;
    }

    .list-group-item{
      bottom: 30px;
    }
    .classimg{
      width: 120px;
      height: 120px;
    }
    //.classimg{
    //  width: 300px;
    //  height: 300px;
    //}
    .sheep3{
      width: 135px;
      height: 120px;
    }
    .sheep4{
      width: 135px;
      height: 120px;
    }
    .sheep5{
      width: 135px;
      height: 120px;
    }
    .sheep6{
      width: 135px;
      height: 120px;
    }
    .sheep7{
      width: 135px;
      height: 120px;
    }
    .alldrag{
      bottom: 5%;
    }
    .sort{
      font-size: 2rem;
      bottom: 18%;
    }
    .sort2{
      font-size: 2rem;
      bottom: 18%;
    }
    .bgimage{
      top: 49%;
      max-height: 40%;
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
    .allansw:first-child:nth-last-child(3),
    .allansw:first-child:nth-last-child(3) ~.allansw{
      width: 315px;
      top: 70%;
      height: 175px;
      left: 5%;
    }
    .allansw:first-child:nth-last-child(3) .list-group-item,
    .allansw:first-child:nth-last-child(3) ~.allansw .list-group-item{
      bottom: 90px;
      left: 80px;
    }
    .allansw:first-child:nth-last-child(3) .sheep3,
    .allansw:first-child:nth-last-child(3) ~.allansw .sheep3{
      width: 150px;
      height: 150px;
    }
    .allansw:first-child:nth-last-child(4),
    .allansw:first-child:nth-last-child(4) ~.allansw{
      width: 235px;
      top: 69%;
      height: 175px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(4) .list-group-item,
    .allansw:first-child:nth-last-child(4) ~.allansw .list-group-item{
      bottom: 68px;
      left: 53px;
    }
    .allansw:first-child:nth-last-child(4) .sheep3,
    .allansw:first-child:nth-last-child(4) ~.allansw .sheep3{
      width: 130px;
      height: 130px;
    }
    .allansw:first-child:nth-last-child(5),
    .allansw:first-child:nth-last-child(5) ~.allansw{
      width: 185px;
      top: 69%;
      height: 175px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(5) .list-group-item,
    .allansw:first-child:nth-last-child(5) ~.allansw .list-group-item{
      bottom: 58px;
      left: 34px;
    }
    .allansw:first-child:nth-last-child(5) .sheep3,
    .allansw:first-child:nth-last-child(5) ~.allansw .sheep3{
      width: 120px;
      height: 120px;
    }

    .allansw:first-child:nth-last-child(6),
    .allansw:first-child:nth-last-child(6) ~.allansw{
      width: 155px;
      top: 69%;
      height: 175px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(6) .list-group-item,
    .allansw:first-child:nth-last-child(6) ~.allansw .list-group-item{
      bottom: 48px;
      left: 26px;
    }
    .allansw:first-child:nth-last-child(6) .sheep3,
    .allansw:first-child:nth-last-child(6) ~.allansw .sheep3{
      width: 110px;
      height: 110px;
    }

    .allansw:first-child:nth-last-child(7),
    .allansw:first-child:nth-last-child(7) ~.allansw{
      width: 130px;
      top: 69%;
      height: 175px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(7) .list-group-item,
    .allansw:first-child:nth-last-child(7) ~.allansw .list-group-item{
      bottom: 40px;
      left: 15px;
    }
    .allansw:first-child:nth-last-child(7) .sheep3,
    .allansw:first-child:nth-last-child(7) ~.allansw .sheep3{
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (min-width: 1600px){
    .leftfonk img {
      width: 100%;
      margin-left: -16%;
      bottom: 0px;
      margin-top: 27%;
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
      bottom: 0;
      left: 8%;
      position: absolute;
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 6%;
      transform: scale(1.6);
    }
    .dndList{
      right: 30px;
    }

    .classimg{
      width:150px;
      height: 150px;
    }
    //.item:first-child:nth-last-child(3) img,
    //.item:first-child:nth-last-child(3) ~.item img{
    //  width: 250px;
    //}
    .sheep3 {
      width: 180px;
      height: 180px;
    }
    .allansw:first-child:nth-last-child(3),
    .allansw:first-child:nth-last-child(3) ~.allansw{
      width: 350px;
      top: 68%;
      height: 175px;
      left: 7%;
    }
    .allansw:first-child:nth-last-child(3) .list-group-item,
    .allansw:first-child:nth-last-child(3) ~.allansw .list-group-item{
      bottom: 90px;
      left: 80px;
    }
    .allansw:first-child:nth-last-child(4),
    .allansw:first-child:nth-last-child(4) ~.allansw{
      width: 280px;
      top: 71%;
      height: 145px;
      left: 2%;
    }
    .allansw:first-child:nth-last-child(4) .list-group-item,
    .allansw:first-child:nth-last-child(4) ~.allansw .list-group-item{
      bottom: 80px;
      left: 55px;
    }
    .allansw:first-child:nth-last-child(5),
    .allansw:first-child:nth-last-child(5) ~.allansw{
      width: 230px;
      top: 71%;
      height: 145px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(5) .list-group-item,
    .allansw:first-child:nth-last-child(5) ~.allansw .list-group-item{
      bottom: 69px;
      left: 39px;
    }
    .allansw:first-child:nth-last-child(5) .sheep3,
    .allansw:first-child:nth-last-child(5) ~.allansw .sheep3{
      width: 160px;
      height: 160px;
    }
    .allansw:first-child:nth-last-child(6),
    .allansw:first-child:nth-last-child(6) ~.allansw{
      width: 190px;
      top: 71%;
      height: 145px;
      left: 0;
    }
    .allansw:first-child:nth-last-child(6) .list-group-item,
    .allansw:first-child:nth-last-child(6) ~.allansw .list-group-item{
      bottom: 57px;
      left: 25px;
    }
    .allansw:first-child:nth-last-child(6) .sheep3,
    .allansw:first-child:nth-last-child(6) ~.allansw .sheep3{
      width: 150px;
      height: 150px;
    }
    .allansw:first-child:nth-last-child(7),
    .allansw:first-child:nth-last-child(7) ~.allansw{
      width: 164px;
      top: 71%;
      height: 145px;
      left: -1%;
    }
    .allansw:first-child:nth-last-child(7) .list-group-item,
    .allansw:first-child:nth-last-child(7) ~.allansw .list-group-item{
      bottom: 47px;
      left: 25px;
    }
    .allansw:first-child:nth-last-child(7) .sheep3,
    .allansw:first-child:nth-last-child(7) ~.allansw .sheep3{
      width: 115px;
      height: 115px;
    }
    .sheep4 {
      width: 160px;
      height: 160px;
    }
    .sheep5 {
      width: 160px;
      height: 160px;
    }
    .sheep6 {
      width: 160px;
      height: 160px;
    }
    .sheep7 {
      width: 160px;
      height: 160px;
    }
    .alldrag{
      bottom: 5%;
    }
    .list-group-item {
      bottom: 22px;
      left: -5px;
    }
    .sort{
      font-size:4rem;
      bottom:9%;
    }
    .sort2{
      font-size:3rem;
    }
    .bgimage{
      top: 20%;
      max-height: 60%;
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
