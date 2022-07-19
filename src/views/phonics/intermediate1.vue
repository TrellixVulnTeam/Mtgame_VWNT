<template>
  <div class="intermediate1">
    <span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic">
        <source src="../../assets/video/gamemusic.mp3"></audio>
    </span>
    <img src="../../assets/image/interbg5.png" style="width: 100%; z-index: -1;top:0; height: auto;display:block;position: absolute;">

    <transition name="fades">
      <div class="contain" v-if="!resume">
        <img src="../../assets/image/irightback.png" @click="$tips(true);gomemu()" class="backbutton" />
        <img src="../../assets/image/ihelp.png" @click="$tips(true);help()" class="helpbutton" />
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 100%;display:block;position: absolute;">
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{this.question}}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div v-show="!onef" v-bind:class="{phonics72:!reload}" style="width: 100%; height: 100%;display:block;position: absolute;">
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <div v-if="zhezhao" style="width: 100%; height: 80%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
            <audio v-if="soundsWrong" autoplay="autoplay">
              <source src="../../assets/video/Wrong.mp3" ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay">
              <source src="../../assets/video/correct.mp3" ></audio>
            <div class="topbox" v-if="!reload">
              <button class="textsize">
                <span>Does this word make a <span style="color: #f42a64">{{titname}}</span> sound?</span>
                <!--<audio   ref="videos"   autoplay="autoplay" :src="audio1">-->
                 <!--</audio>-->
                <audio  @canplay="getDuration"   ref="videos" id="videos" autoplay="autoplay" :src="audio1"></audio>

                <audio  ref="videos2" :src="audio2"></audio>
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

              <!-- </draggable> -->
            </div>
            <div class="dndList" v-if="!reload">

              <div class="allansw">
                <img src="../../assets/image/StarYellow.png" class="start" v-show="!ended1" style="position: absolute; margin-top: 0%;left: 0%;width: 100%;z-index: 2;">
                <div class="bordercolor" id="answer-box">

                  <div id="box2" class="yes dragArea list-group" @click="blue">
                    <img src="../../assets/image/yeslong3.png" class="yeslong3"/>
                    <div v-bind:class="{ answer: issuccess1 ,listimg:fangda1}" class="yes1" id="yes1">
<!--                      <img src="../../assets/image/yeslong.png" style="width: 100%;" />-->
                      <img src="../../assets/image/yeslong2.png" class="yeslong2"/>
                      <div class="list-group-item" v-for="element in items2" :key="element.id">
                        <!-- {{ element.name }} -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="centersound" >
                <!--<button class="list-group-item imgbutton"  v-for="element in items1" :key="element.id" @click="change">-->
                 <div class="classimgbg">
                   <img  :src="imagebg" style="height: 100%;" @click="$tips(true);change()"/>
                 </div>
                  <img src="../../assets/image/inter5repeat.png" class="classimg" v-bind:class="{touming:touming}">
                <!--</button>-->
              </div>
              <div class="allansw2">
                <img src="../../assets/image/StarYellow.png" class="start" v-show="!ended2" style="position: absolute; margin-top: 0%;left: 0%;width: 100%;z-index: 2;">
                <div class="bordercolor" id="answer-box1">

                  <div id="box4" class="no dragArea list-group" @click="red">
                    <img src="../../assets/image/nolong3.png" class="nolong3"/>
                    <div v-bind:class="{ answer: issuccess2 ,listimg:fangda2}" class="no1" id="no1">
<!--                      <img src="../../assets/image/nolong.png" style="width: 100%;" />-->
                      <img src="../../assets/image/nolong2.png" class="nolong2"/>
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
          <img src="../../assets/image/interbar.png" style="width: 100%;bottom: 0;height: 100%;">
          <span class="fontsize">Listen to the sentence and look at the picture.
             Then‚ select “Yes” or “No”.</span>
          <div @click="$tips(true);changesett()">
            <img src="../../assets/image/interpause.png" class="pause">
          </div>
          <div @click="$tips(true);repeattitle()">
						<img src="../../assets/image/inter-repeat.png" class="repeat">
					</div>
        </div>
      </div>
    </transition>
    <div class='popContainer' v-show="popp">
      <p class="spanp spanp1">{{spanp}}</p>
      <button class="roleimg">
        <img src="../../assets/image/p-rule.png" style="height: 100%;" />
      </button>
      <div class="withcolor">
        <div class="close" @click="$tips(true);pop()">
          <img src="../../assets/image/pcloce.png">
        </div>
        <img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/intermediate1.gif">

      </div>
    </div>
    <transition name="fades">
      <div class="about" v-if="resume">
        <div class="twomenu">
          <div>
            <img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show" @click="$tips(true);sound()" />
            <img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show" @click="$tips(true);sound()" />
          </div>
          <div style="margin-top: 5px;">
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
    name: "intermediate1",
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
            this.zhezhao = false;
            // this.video = true;
            // this.action1 = true;

            setTimeout(() => {
              this.reload = false;
            }, 500);
          }, 2000);

        }
      },
      'video': function(newVal) {
        if (this.video == true) {
          // console.log(this.video);
          this.$refs.videos.play();
          // setTimeout(() => {
            this.video = false;
          // }, 9000);
        }
      },
      'video2': function(newVal) {
        // if (this.video2 == true) {
        //   // console.log(this.video2);
        //   this.$refs.videos2.play();
        //   // setTimeout(() => {
        //     this.video2 = false;
        //   // }, 4000);
        // }
      },
      // 'action1': function(newVal) {
      //   if (this.action1 == true) {
      //     setTimeout(() => {
      //       this.action1 = false;
      //     }, 5000);
      //   }
      // }
    },
    data() {
      return {
        popp: false,
        ruleimg8: false,
        spanp: '',
        duration:0,
        shownumb: false,
        ruleimg10: false,
        ruleimg4: false,
        ruleimg15: false,
        ruleimg25: false,
        ruleimg12: false,
        controlOnStart: true,
        disabled: false,
        onef: true,
        touming: false,
        imagebg:'',
        audio1:'',
        audio2:'',
        titname:'',
        reload: true,
        fade: 'fade',
        soundsWrong: false,
        soundscorrect: false,
        flag2: true,
        zhezhao: false,
        // disnone:false,
        show: true,
        video: false,
        video2:false,
        action: false,
        // action1: false,
        resume: false,
        items2: [

        ],
        unitsId: '',
        unit: '',
        question: 10,
        menuId: '',
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
        url: '/phonics2/phonics2',
        //url: 'http://localhost:8080/mtGame/exercise/exerciseE',
        items4: [],
        items3: [],
        items1: [],
        id: 6,
        addlist: false,
        ended1: true,
        ended2: true,
        fangda1: false,
        fangda2: false,
        othersize: false,
        insert:'[',
        levels: 0,
        page: 2,
        type: 'intermediate',
        gamename:'',
          timeurl:'/user/playTime',
      }
    },
    computed: {},
    methods: {
      clone({
        name
      }) {
        //console.log(name);
        return {
          name,
          id: idGlobal++
        };
      },
      pullFunction: function(evt) {
        // window.console.log(evt);
        // console.log(evt);
        if (evt.el.id == "box2") {
          this.fangda1 = true;
          this.fangda2 = false;
        } else if (evt.el.id == "box4") {
          this.fangda2 = true;
          this.fangda1 = false;
        } else if (evt.el.id == "rebox") {
          this.fangda1 = false;
          this.fangda2 = false;
        }
        return this.controlOnStart ? "clone" : true;
      },
      start({
        originalEvent
      }) {
        this.touming = true;
        this.controlOnStart = originalEvent.ctrlKey;
      },
      end: function(evt) {
        this.touming = false;
        //console.log('end');
      },
      blue() {
        if (this.zhezhao === false) {
          this.countpage += 1;
        }
        this.zhezhao = true;
        if (this.items1[0].score === '1') {
          this.ended1 = false;
          this.soundscorrect = true;
          this.account += 1;
          if (this.countpage-2 !==9){
            this.insert = this.insert+"{'phonics_detail_id':"+this.listE[this.countpage-2][0].phonics_detail_id+",'ansResult':1},";
          }else{
            this.insert = this.insert+"{'phonics_detail_id':"+this.listE[this.countpage-2][0].phonics_detail_id+",'ansResult':1}]";
          }
          // console.log(this.account);
          setTimeout(() => {
            if (this.countpage <= this.listE.length) {
              setTimeout(() => {
                this.onef = true;
                this.ended1 = true;
                this.soundscorrect = false;
                this.items2 = [];
                this.fangda1 = false;
                // this.disnone=false;
                this.reload = true;
                this.items1 = this.listE[this.countpage - 1];
                this.titname = this.items1[0].name;
                this.imagebg=this.pic+this.items1[0].bg;
                this.audio1=this.pic+this.items1[0].audio;
                this.audio2=this.pic+this.items1[0].audio2;
              }, 1000);
            } else {
              setTimeout(() => {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    //路由传参时push和query搭配使用 ，作用时传递参数
                    type: this.type,
                    partName: 'intermediate1',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit,
                    insert:this.insert
                  }
                });

              }, 1000);
            }
          }, 2000);
        } else {
          this.issuccess1 = true;
          this.soundsWrong = true;
          if (this.countpage-2 !==9){
            this.insert = this.insert+"{'phonics_detail_id':"+this.listE[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
          }else{
            this.insert = this.insert+"{'phonics_detail_id':"+this.listE[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
          }
          setTimeout(() => {
            this.soundsWrong = false;
            if (this.countpage <= this.listE.length) {
              setTimeout(() => {
                this.onef = true;
                this.issuccess1 = false;
                this.items2 = [];
                this.fangda1 = false;
                // this.disnone=false;
                this.reload = true;

                this.items1 = this.listE[this.countpage - 1];
                this.titname = this.items1[0].name;
                this.imagebg=this.pic+this.items1[0].bg;
                this.audio1=this.pic+this.items1[0].audio;
                this.audio2=this.pic+this.items1[0].audio2;
              }, 1000);
              //  this.items1.bg=this.pic+this.items1.bg;
            } else {
              setTimeout(() => {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    //路由传参时push和query搭配使用 ，作用时传递参数
                    type: this.type,
                    partName: 'intermediate1',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit,
                    insert:this.insert
                  }
                });


              }, 1000);
            }
          }, 2000);
        }

      },
      red: function () {
        if (this.zhezhao === false) {
          this.countpage += 1;
        }
        this.zhezhao = true;
        if (this.items1[0].score === '1') {
          this.issuccess2 = true;
          this.soundsWrong = true;
          if (this.countpage - 2 !== 9) {
            this.insert = this.insert + "{'phonics_detail_id':" + this.listE[this.countpage - 2][0].phonics_detail_id + ",'ansResult':0},";
          } else {
            this.insert = this.insert + "{'phonics_detail_id':" + this.listE[this.countpage - 2][0].phonics_detail_id + ",'ansResult':0}]";
          }
          setTimeout(() => {
            this.soundsWrong = false;
            if (this.countpage <= this.listE.length) {
              setTimeout(() => {
                this.onef = true;
                this.issuccess2 = false;
                this.items4 = [];
                this.fangda2 = false;
                // this.disnone=false;
                this.reload = true;
                this.items1 = this.listE[this.countpage - 1];
                this.titname = this.items1[0].name;
                this.imagebg = this.pic + this.items1[0].bg;
                this.audio1 = this.pic + this.items1[0].audio;
                this.audio2 = this.pic + this.items1[0].audio2;
              }, 1000);
            } else {

              setTimeout(() => {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    //路由传参时push和query搭配使用 ，作用时传递参数
                    type: this.type,
                    partName: 'intermediate1',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit,
                    insert:this.insert
                  }
                });

              }, 1000);
            }
          }, 2000);
        } else {
          this.ended2 = false;
          this.soundscorrect = true;
          this.account += 1;
          if (this.countpage - 2 !== 9) {
            this.insert = this.insert + "{'phonics_detail_id':" + this.listE[this.countpage - 2][0].phonics_detail_id + ",'ansResult':1},";
          } else {
            this.insert = this.insert + "{'phonics_detail_id':" + this.listE[this.countpage - 2][0].phonics_detail_id + ",'ansResult':1}]";
          }
          setTimeout(() => {
            this.soundscorrect = false;
            if (this.countpage <= this.listE.length) {
              setTimeout(() => {
                this.onef = true;
                this.ended2 = true;
                this.items4 = [];
                this.fangda2 = false;
                // this.disnone=false;
                this.reload = true;
                this.items1 = this.listE[this.countpage - 1];
                this.titname = this.items1[0].name;
                this.imagebg = this.pic + this.items1[0].bg;
                this.audio1 = this.pic + this.items1[0].audio;
                this.audio2 = this.pic + this.items1[0].audio2;
              }, 1000);
              // this.items1.bg=this.pic+this.items1.bg;
            } else {

              setTimeout(() => {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    //路由传参时push和query搭配使用 ，作用时传递参数
                    type: this.type,
                    partName: 'intermediate1',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit,
                    insert:this.insert
                  }
                });
              }, 1000);
            }
          }, 2000);
        }
      },

      change() {
          if (this.onef === false) {
            if (this.$refs.videos2.paused){
              this.$refs.videos2.play()
              console.log(this.$refs.videos2.duration);
            }else{
              this.$refs.videos2.load()
              this.$refs.videos2.play()
            }
          }

      },
      repeattitle(){
        if (this.onef == false) {
          // this.action1 = true;
          this.video= true;
        }
      },
      getDuration() {
      //   // console.log(this.$refs.videos.duration); //此时可以获取到duration
        this.duration = this.$refs.videos.duration;
        console.log(this.duration);
        //this.video =true;
      },
      pop() {
        this.popp = !this.popp;
      },
      help() {
        if (this.onef == false) {
          this.spanp = "Listen to the sentence and look at the picture. Then, select “Yes” or “No”.";
          this.popp = !this.popp;
          if (this.items1[0].rank == 0) {
            this.ruleimg8 = true;
            this.ruleimg10 = false;
          } else if (this.items1[0].rank == 1) {
            this.ruleimg8 = false;
            this.ruleimg10 = true;
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
          path: '/intermenu', //跳转的路径
          query: {
            unitsId: this.unitsId,
            unit: this.unit
          }
        })
      },
      changesett() {
        if (this.action == false && this.onef == false) {
          this.action = true;
          //this.zhezhao=false;
          setTimeout(() => {
            this.action = false;
            this.resume = !this.resume;
          }, 1000);
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
      if (localStorage.getItem('gamemusic') == "false") {
        this.show = false;
      } else {
        this.show = true;
      }
      this.$axios.post(this.url, qs.stringify({
        menuId: this.menuId,
        num:11
      })).then(res => {
        // this.listE=res.data;
        for (let i in res.data.maps) {
          this.listE.push(res.data.maps[i]); //属性
        }
        for(let i = 0,len = this.listE.length; i < len; i++){
          let currentRandom = parseInt(Math.random() * (len - 1));
          let current = this.listE[i];
          this.listE[i] = this.listE[currentRandom];
          this.listE[currentRandom] = current;
        }
        this.question = this.listE.length;
        this.shownumb = true;
        this.items1 = this.listE[this.countpage - 1];
        this.titname = this.items1[0].name;
        this.imagebg=this.pic+this.items1[0].bg;
        this.audio1=this.pic+this.items1[0].audio;
        this.audio2=this.pic+this.items1[0].audio2;
      }, res => {
        alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      });
      if (this.onef == true) {
        setTimeout(() => {
          this.onef = false;
          // this.video = true;
          // this.action1 = true;
          this.reload = false;
          // setTimeout(() => {
          //
          // 	var endDiv = document.getElementById('box2');
          // 	var answerBox = endDiv.getBoundingClientRect();
          // 	this.anLeft = answerBox.left;
          // 	this.anTop = answerBox.top;
          // 	this.anRight = answerBox.left + answerBox.width;
          // 	this.anBottom = answerBox.top + answerBox.height;
          //
          // 	var endDiv1 = document.getElementById('box4');
          // 	var answerBox1 = endDiv1.getBoundingClientRect();
          // 	this.anLeft1 = answerBox1.left;
          // 	this.anTop1 = answerBox1.top;
          // 	this.anRight1 = answerBox1.left + answerBox1.width;
          // 	this.anBottom1 = answerBox1.top + answerBox1.height;
          // }, 1000);


        }, 1000);
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
      document.body.addEventListener('touchmove', this.bodyScroll, {
        passive: false
      });
    }
  };
</script>

<style scoped lang="less">
  body {
    padding: 0;
    cursor: auto !important;
  }

  /*.phonics7 {*/
    /*width: 100%;*/
    /*background-image: url("../../assets/image/phonicsbg.png");*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*display: flex;*/
  /*}*/

  .disnone {
    display: none !important;
  }

  .intermediate1 {
    width: 100%;
    height: 100%;
    /*background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/interbg5.png");*/
    /*background-color: #204900;*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    // background-color: rgb(255, 145, 126);
    position: absolute;
    display: flex;
  }

  .yeslong2 {
    width: 100%;
    /* position: absolute; */
    margin-top: 35%;
  }
  .yeslong3 {
    margin-left: -25%;
    width: 100%;
  }
  .nolong2{
    width: 100%;
    margin-top: 35%;
  }
  .nolong3 {
    width: 100%;
    margin-left: -15%;
    margin-top: 3%;
  }
  .touming {
    opacity: 0;
  }

  .topbox {
    position: relative;
    top: 6%;
  }

  .classimg {
    width: 100%;
    text-align: center;
  }
  .classimgbg{
    width: 50%;
    margin-left: 26%;
    height: 3.2rem;
    text-align: center;
    position: absolute;
     z-index:2;
    margin-top: 18%;
  }

  #answer-box {
    display: -ms-flexbox;
    display: flex;
    top: 21%;
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

  .allansw {
    display: inline-block;
    width: 40%;
    float: left;
    position: relative;
    height: 17rem;
    text-align: center
  }
  .centersound{
    width: 20%;
    height: 6rem;
    position: absolute;
    bottom: 15%;
    display: inline-block;
    text-align: center;
  }
  .allansw2 {
    display: inline-block;
    width: 40%;
    float: right;
    position: relative;
    height: 17rem;
    text-align: center
  }

  .smooth-dnd-ghost {
    //     z-index: 1200 !important;
    margin: 0 auto !important;
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
    z-index: 2;color: #603915;
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
    margin-top: 7%
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
    color: #935D24;
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

  .listimg {
    transform: scale(1.2);
  }

  .textsize {
    width: 70%;
    color: #460f60;
    font-family: pepper;
    font-size: 1.6rem;
    border: none;
    line-height: 100%;
    margin: 0 15%;
    background-color: white;
    border-radius: 50px;
    text-align: center;
    display: block !important;
    padding: 10px !important;
  }

  /*.imgbutton {*/
    /*width: 100%;*/
    /*border: none;*/
    /*background:none;*/
    /*background-image: url("http://monkeytown.monkeytree.com.hk/image/yesornobg.png");*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: contain;*/
    /*display: block;*/
  /*}*/

  .spansize {
    color: white;
    font-family: pepper;
    font-size: 1.6rem;
  }

  .bordercolor {
    display: block !important;
    height: 100%;
    text-align: center;
    position: relative;
    width: 100%;
    top: 22%;
  }

  .yes {
    height: 100% !important;
    text-align: center;
    width: 75%;
    display: inline-block;
    //    background-image:url(../../assets/image/Yes.png);
    // background-size: cover;
  }

  .yes1 {
    height: 100% !important;
    top: 0;
    position: absolute;
    text-align: center;
    width: 75%;
    // display: inline-block;
    //    background-image:url(../../assets/image/Yes.png);
    // background-size: cover;
  }

  .no {
    height: 100% !important;
    text-align: center;
    width: 75%;
    display: inline-block;
    //    background-image:url(../../assets/image/NO.png);
    // background-size: cover;
  }

  .no1 {
    height: 100% !important;
    text-align: center;
    width: 75%;
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

    .allansw {
      height: 6.5rem;
    }


  }

  @media screen and (min-width: 482px) and (max-width: 569px) {
    .nolong3 {
      width: 80%;
      margin-left: -15%;
      margin-top: 19%;
    }
    .nolong2 {
      width: 90%;
      margin-top: 36%;
    }
    .yeslong3 {
      margin-left: -1%;
      width: 80%;
      margin-top: 40%;
    }
    .yeslong2 {
      width: 90%;
      margin-top: 60%;
    }
    .allansw {
      height: 7.5rem;
    }

  }
  @media screen and (min-width: 570px) and (max-width: 699px){
    .nolong3 {
      width: 100%;
      margin-left: -15%;
      margin-top: -7%;
    }
    .yeslong3 {
      margin-left: -1%;
      width: 100%;
      margin-top: -6%;
    }
    .yeslong2 {
      width: 100%;
      margin-top: 23%;
    }
    .nolong2 {
      width: 100%;
      margin-top: 20%;
    }
  }
  @media screen and (min-width: 1024px)and (max-width:1365px) {
    .nolong3 {
      width: 100%;
      margin-left: -15%;
      margin-top: 10%;
    }
    .yeslong3 {
      margin-left: -3%;
      width: 100%;
      margin-top: -14%;
    }
    .yeslong2 {
      width: 100%;
      margin-top: 14%;
    }
    .allansw {
      height: 26rem;
    }

    .topbox {
      top: 16%;
    }

    .classimg {
      width: 150px;
      height:  150px;
    }


    .textsize {
      transform: scale(1.2);
    }

    .twomenu {
      padding-top: 26%;
    }

    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 15%;
      left: 2%;
      position: absolute;
      font-size: 1.3rem;
      max-height: 80%;
      min-height: 47%;
      margin-left: 2%;

    }

    .imgbutton{
      margin-top: 8%;
    }
    .bordercolor {
      top: 5%;
    }
    .centersound{
      height: 9rem;
      transform: scale(2);
    }
    .classimgbg{
      width: 36%;
      margin-left: 32%;
      height: 3rem;
      text-align: center;
      margin-top: 10%;
    }

    .fontsizes {
      margin-top: 30%;
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

  }

  @media screen and (min-width: 700px) and (max-width: 811px) {
    .nolong3 {
      width: 100%;
      margin-left: -15%;
      margin-top: 5%;
    }
    .yeslong3 {
      margin-left: 0%;
      margin-top: -11%;
      width: 100%;
    }
    .yeslong2 {
      width: 100%;
      margin-top: 23%;
    }
    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }

    .bordercolor {
      top: 8%;
    }
    .centersound{
      height: 7rem;
    }
  }

  @media screen and (min-width: 812px) and (max-width:1023px) {

    .nolong3 {
      width: 100%;
      margin-left: -5%;
      margin-top: 8%;
    }
    .nolong2 {
      width: 85%;
      margin-top: 31%;
    }
    .yeslong3 {
      margin-left: -3%;
      margin-top: -12%;
      width: 100%;
    }
    .yeslong2 {
      width: 85%;
      margin-top: 12%;
    }
    .twomenu {
      padding-top: 14%;
    }



    .fontsizes {
      margin-top: 17%;
    }

    .bordercolor {
      top: 2%;
    }

    .withcolor {
      height: 70%;
    }
    .centersound{
      height: 8rem;
    }
    .classimgbg{
      height:4rem;
      margin-top: 20%;
    }


  }

  @media screen and (min-width: 1366px) and (max-width: 1600px){
    .nolong3 {
      width: 100%;
      margin-left: -15%;
      margin-top: 10%;
    }
    .yeslong3 {
      margin-left: -3%;
      width: 100%;
      margin-top: -17%;
    }
    .allansw {
      height: 37rem;
    }
    .twomenu {
      padding-top: 26%;
    }

    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 7%;
      left: 6%;
      position: absolute;
      font-size: 1.5rem;
      max-height: 80%;
      min-height: 47%;
      margin-left: 2%;
      transform: scale(1.2);
    }

    .topbox {
      top: 16%;
    }
    .imgbutton{
      margin-top: 8%;
    }
    .bordercolor {
      top: 5%;
    }
    .centersound{
      height: 11rem;
      transform: scale(1.5);
    }

    .classimg {
      width: 150px;
      height:  150px;
    }
    .classimgbg{
      width: 40%;
      margin-left: 30%;
      height: 5rem;
      text-align: center;
      position: absolute;
      margin-top: 4%
    }

    .textsize {
      transform: scale(1.2);
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
    .textsize{
      font-size: 2rem;
    }
    .classimg {
      width: 200px;
      height:  200px;
      transform: scale(1.2);
    }

    .imgbutton{
      margin-top: 10%;
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
      height: 45rem;
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
      left: 10%;
      position: absolute;
      font-size: 1.4rem;
      max-height: 80%;
      min-height: 50%;
      margin-left: 4%;
      transform: scale(1.6);
    }
    .yes1{
      width: 60%;
    }
    .no1{
      width: 60%;
    }

    .topbox {
      top: 9%;
    }
    .imgbutton{
      margin-top: 2%;
    }
    .bordercolor {
      top: 50%;
      left: 8%;
    }
    .centersound{
      bottom:45%;
      height: 6rem;
      transform: scale(2.2);
    }

    .classimg {
      width: 150px;
      height:  150px;
    }


    .textsize {
      font-size: 3rem;
      transform: scale(1.2);
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
    .classimgbg{
      width: 25%;
      margin-left: 37%;
      height: 5rem;
      text-align: center;
      position: absolute;
      margin-top: 2%;
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

    .classimg {
      width: 200px;
      height:  200px;
      transform: scale(1.2);
    }



  }

</style>
