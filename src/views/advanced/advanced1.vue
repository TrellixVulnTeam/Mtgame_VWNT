<template>
  <div class="advanced1">
    <span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic">
        <source src="../../assets/video/gamemusic.mp3"></audio>
    </span>
    <img src="../../assets/image/advancebg1.png"
         style="width: 100%; z-index: -1;  height: 100%;display:block;position: absolute;">

    <transition name="fades">
      <div class="contain" v-show="!resume">
        <img src="../../assets/image/aback.png" @click="$tips(true);gomemu()" class="backbutton"/>
        <img src="../../assets/image/ahelp.png" @click="$tips(true);help()" class="helpbutton"/>

        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <p class="fontsizes" v-if="showNum">{{this.countpage}}/{{this.question}}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div v-show="!onef" style="width: 100%; height: 90%;text-align: center;display:block;position: fixed;">
            <div v-if="zhezhao"
                 style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
            <!-- 遮罩禁止重复点击作用 -->
            <audio id="videos" ref="videos" :src="audio" autoplay="autoplay">
            </audio>
            <audio v-if="soundsWrong" autoplay="autoplay">
              <source src="../../assets/video/Wrong.mp3">
            </audio>
            <audio v-if="soundscorrect" autoplay="autoplay">
              <source src="../../assets/video/correct.mp3">
            </audio>

            <div class="rightbox">
              <div id="box2" class="yes">
                <button class="yesbutton" @click="change">
                  <img :src=bg>
                </button>
                <button class="centermain">
                  <!--<span></span>{{titlequesion}}-->
                  <p class=" wordstyle" v-bind:class="{red:changecolor2,blue:changecolor}">
                    <span v-for="i in titlequesion" :key="i.id"> {{i.name}}</span>
                  </p>
                  <!--<p class=" wordstyle" v-bind:class="{red:changecolor2,blue:changecolor}" v-if="turename==='x'">-->
                  <!--{{titlequesion}}<span>{{space}}</span>-->
                  <!--</p>-->
                </button>
              </div>
              <div class="buttons" id="imgBox">
                <button v-for="(li,index) in list1" :key="li.id" class="item listitems imgsty"
                        v-bind:class="{changeopcily:li.fail,changetranform:li.successful,marginl:index===0,shake:li.redsuccess}"
                        @click="answer(li)">
                  <span class="listgroup"
                        v-bind:class="{ bluefont:li.bluesuccess,pinkfont:li.redsuccess}">{{li.letter_name}}</span>
                  <audio id="show1s" ref="show1s" :src="li.audio" v-if="index==0"></audio>
                  <audio id="show2s" ref="show2s" :src="li.audio" v-if="index==1"></audio>
                  <audio id="show3s" ref="show3s" :src="li.audio" v-if="index==2"></audio>
                </button>

              </div>
              <!--<canvas id="canvas" style="position: absolute;left:0;top:0%;z-index: 99;width: 100%;height: 100%;"-->
              <!--@click="xy($event)"  @mousedown="canvasDown($event)" @mouseup="canvasUp($event)" @mousemove="canvasMove($event)"-->
              <!--@touchstart="canvasDown($event)" @touchend="canvasUp($event)" @touchmove="canvasMove($event)">-->
              <!--您的浏览器不支持Canvas-->
              <!--</canvas>-->
              <img src="../../assets/image/StarYellow.png" class="start2" v-show="showstart"/>
            </div>

          </div>

        </transition>
        <div class="settinglist">
          <img src="../../assets/image/advancedbar.png" style="width: 100%;bottom: 0;height: 100%;">
          <span class="fontsize">Look at the picture and listen to the word.Then,select the missing sound.</span>
          <div @click="$tips(true);changesett()">
            <img src="../../assets/image/adPause.png" class=" repeat">
          </div>
        </div>
      </div>
    </transition>

    <div class='popContainer' v-if="popp">
      <p class="spanp spanp1">{{spanp}}</p>
      <button class="roleimg">
        <img src="../../assets/image/p-rule.png" style="height: 100%;"/>
      </button>
      <div class="withcolor oringe">
        <div class="close" @click="$tips(true);pop()">
          <img src="../../assets/image/pcloce.png">
        </div>
        <img class="animapng7" style="margin-top: 10%;"
             src="http://monkeytown.monkeytree.com.hk/image/advanced1.gif">

      </div>
    </div>
    <transition name="fades">
      <div class="about" v-show="resume">
        <div class="twomenu">
          <div>
            <img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show" @click="$tips(true);sound()"/>
            <img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show" @click="$tips(true);sound()"/>
          </div>
          <div style="margin-top: 5px;">
            <img src="../../assets/image/resume.png" style="width: 30%; height: 10%;" @click="$tips(true);changesett()">
          </div>
          <!-- <div style="margin-top: 5px;">
						<div><img src="../../assets/image/home.png" style="width: 30%; height: 10%;"  @click="$tips(true);gomemu()"></div>
					</div> -->
        </div>
      </div>
    </transition>

  </div>

</template>

<script>
  import $ from 'jquery';

  var qs = require('qs');
  export default {
    name: "advanced1",
    watch: {
      'onef': function (newVal) {
        if (this.onef === true) {
          setTimeout(() => {
            this.list1 = this.listF[this.countpage - 1];

            var data2=this.list1[0].word_name.split('');
            this.titlequesion=[];
            for(var u=0;u<data2.length;u++){
              this.titlequesion.push({
                id:'i'+(u+1),
                name:data2[u]
              });

            }
            var data3=this.list1[0].name.split('');
            this.truequesion=[];
            for(var u=0;u<data3.length;u++){
              this.truequesion.push({
                id:'t'+(u+1),
                name:data3[u]
              });

            }
            // this.titlequesion = this.list1[0].question;
            this.bg = this.pic + this.list1[0].bg;
            for (var l = 0; l < this.list1.length; l++) {
              this.list1[l].successful = 0;
              this.list1[l].fail = 0;
              this.list1[l].audio = this.pic + this.list1[l].audio;

              if (this.list1[l].score == "1") {
                this.audio = this.list1[l].audio;
              }
            }
            this.onef = false;
            this.zhezhao = false;
            // this.video = true;
          }, 2000);

        }
        // else {
        //   setTimeout(() => {
        //     const canvas = document.getElementById('canvas'); // 初次进来初始化画布
        //     let imgBox = document.getElementById('imgBox');
        //     let imgsty = document.getElementsByClassName('imgsty');
        //     for (let i=0; i<imgsty.length; i++) {
        //       let coreP = { // 获取图片中心点位置
        //         corePx: imgsty[i].offsetLeft + imgsty[i].offsetWidth/2,
        //         corePy: imgBox.offsetTop+imgsty[i].offsetTop + imgsty[i].offsetHeight/2
        //       };
        //       this.centerP.push(coreP);
        //     }
        //     console.log(this.centerP);
        //     this.canvasObj = canvas;
        //     this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
        //     canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
        //     canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
        //     this.context = canvas.getContext('2d');
        //     this.setCanvasStyle();
        //   }, 1000);
        // }
      },
      'video': function (newVal) {
        if (this.video == true) {
          // setTimeout(() => {
          //   this.video = false;
          // },4000);
          this.$refs.videos.play();
          this.video = false;
        }
      },
      'show1': function (newVal) {
        // console.log(this.$refs.show1s.duration);
        if (this.show1 === true) {
          this.$refs.show1s[0].play();
          // setTimeout(() => {
          this.show1 = false;
          // },this.$refs.show1s.duration*1000);
        }
      },
      'show2': function (newVal) {
        // console.log(this.$refs.show2s.duration);
        if (this.show2 === true) {
          this.$refs.show2s[0].play();
          // setTimeout(() => {
          this.show2 = false;
          // }, this.$refs.show2s.duration*1000);
        }
      },
      'show3': function (newVal) {
        // console.log(this.$refs.show3s.duration);
        if (this.show3 === true) {
          this.$refs.show3s[0].play();
          // setTimeout(() => {
          this.show3 = false;
          // }, this.$refs.show3s.duration*1000);
        }
      },
    },
    data() {
      return {
        showNum: false,
        popp: false,
        ruleimg8: false,
        ruleimg10: false,
        ruleimg4: false,
        ruleimg15: false,
        spanp: '',
        ruleimg25: false,
        ruleimg12: false,
        list1: [],
        list2: [],
        space: '__',
        zhezhao: true,
        bg: '',
        show1: false,
        show2: false,
        show3: false,
        titlequesion:[],
        truequesion:[],
        audio: '',
        soundsWrong: false,
        soundscorrect: false,
        video: false,
        fade: 'fade',
        nowtime: 0,
        falselist: [],
        flag2: true,
        changecolor: false,
        changecolor2: false,
        showstart: false,
        unitsId: '',
        unit: '',
        menuId: '',
        insert:'[',
        question: 10,
        listF: [],
        countpage: 1,
        account: 0,
        show: true,
        resume: false,
        id: '',
        pic: "",
        // url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseF',
        // pic: "http://demo11.embraiz.com/mtGameHK",
        url: '/phonics3/phonics',
        //url: 'http://localhost:8080/mtGame/exercise/exerciseF',
        levels: 0,
        page: this.page++,
        type: 'advanced',
        onef: true,
        gamename: '',
        timeurl: '/user/playTime',
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

    methods: {
      answer(li) {
        this.zhezhao = true;
        for(var i=0;i<this.titlequesion.length;i++){
          if(this.titlequesion[i].name==='_'){
            this.titlequesion[i].name=li.letter_name;
          }
        }
        if (li.score === '1') {
          this.soundscorrect = true;
          li.bluesuccess = 1;
          this.changecolor = true;
          this.showstart = true;
          this.countpage += 1;
          this.account += 1;
          if (this.countpage-2 !==9){
            this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-2][0].phonics_detail_id+",'ansResult':1},";
          }else{
            this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-2][0].phonics_detail_id+",'ansResult':1}]";
          }
          setTimeout(() => {
            this.showstart = false;
            this.soundscorrect = false;
            this.changecolor = false;
            if (this.countpage <= this.listF.length) {
              this.onef = true;
              li.bluesuccess = 0;
              // this.space = "__";
            } else {
              setTimeout(() => {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    type: this.type,
                    partName: 'advanced1',
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
          this.soundsWrong = true;
          this.countpage += 1;
          li.redsuccess = 1;
          this.changecolor2 = true;
          if (this.countpage-2 !==9){
            this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
          }else{
            this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
          }
          setTimeout(() => {
            this.soundsWrong = false;
            li.redsuccess = 0;
            this.changecolor2 = false;
            for (var l = 0; l < this.list1.length; l++) {
              if (this.list1[l].score === '1') {
                this.list1[l].successful = 1;
                this.titlequesion=this.truequesion;
                for(var i=0;i<this.titlequesion.length;i++){
                    this.titlequesion[i].name=this.truequesion[i].name;
                }
              } else {
                this.list1[l].fail = 1;
              }
            }
            setTimeout(() => {
              if (this.countpage <= this.listF.length) {
                this.onef = true;
                // this.space = "__";
              } else {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    type: this.type,
                    partName: 'advanced1',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit,
                    insert:this.insert
                  }
                });
              }
            }, 1500);
          }, 2000);
        }
      },
      change() {
        if (this.onef == false) {
          // this.video = true;
          let audio = new Audio(this.audio);
          audio.play();
        }
      },

      changesett() {
        if (this.onef == false) {
          // this.action=true;
          // setTimeout(() => {
          // this.action=false;
          this.resume = !this.resume;

          // }, 1000);
        }

      },
      pop() {
        this.popp = !this.popp;
      },
      help() {
        if (this.onef == false) {
          this.spanp = "Look at the picture. Then, listen and circle the correct blend.";
          this.popp = !this.popp;

          this.ruleimg8 = true;
          this.ruleimg12 = false;
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
          name: this.gamename,
          unit:this.unit,
          level:localStorage.getItem('level'),
          cources:localStorage.getItem('cources'),
          studentId: localStorage.getItem('studentId')
        })).then(res => {
          localStorage.setItem('startTimeid', '');
          localStorage.setItem('gamename', '');
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
      sound() {
        this.show = !this.show;
        if (this.show === false) {
          // this.$refs.MusicPlay.pause();
          localStorage.setItem("gamemusic", "false");
        } else {
          // this.$refs.MusicPlay.play();
          localStorage.setItem("gamemusic", "true");
        }
      }
    },
    destroyed() {
      document.body.removeEventListener('touchmove', this.bodyScroll, {
        passive: false
      });
      window.removeEventListener('popstate', this.gomemu, false);
    },
    created() { //生命周期里接收参数
      console.log(this.$route.query);
      this.pic = this.$axios.defaults.baseURL2;
      this.unit = this.$route.query.unit;
      this.unitsId = this.$route.query.unitsId;
      this.menuId = this.$route.query.menuId; //接受参数关键代码
      this.gamename = this.$route.query.name;
      localStorage.setItem('gamename', this.gamename);
      var timestamp = (new Date()).getTime();
      localStorage.setItem('startTimeid',timestamp);
      this.show = localStorage.getItem('gamemusic') !== "false";
      this.$axios.post(this.url, qs.stringify({
        menuId: this.menuId,
        num: 21
      })).then(res => {
        for (let i in res.data.maps) {
          this.listF.push(res.data.maps[i]); //属性
        }
        for (let i = 0, len = this.listF.length; i < len; i++) {
          let currentRandom = parseInt(Math.random() * (len - 1));
          let current = this.listF[i];
          this.listF[i] = this.listF[currentRandom];
          this.listF[currentRandom] = current;
        }
        console.log(this.listF);
        this.question = this.listF.length;
        this.list1 = this.listF[this.countpage - 1];

        var data2=this.list1[0].word_name.split('');
        this.titlequesion=[];
        for(var u=0;u<data2.length;u++){
          this.titlequesion.push({
            id:'i'+(u+1),
            name:data2[u]
          });
        }
        var data3=this.list1[0].name.split('');
        this.truequesion=[];
        for(var u=0;u<data3.length;u++){
          this.truequesion.push({
            id:'t'+(u+1),
            name:data3[u]
          });

        }

        // this.titlequesion = this.list1[0].word_name;
        this.bg = this.pic + this.list1[0].bg;
        for (var l = 0; l < this.list1.length; l++) {
          this.list1[l].successful = 0;
          this.list1[l].fail = 0;
          this.list1[l].audio = this.pic + this.list1[l].audio;
          if (this.list1[l].score === "1") {
            this.audio = this.list1[l].audio;
          }
        }
        if (this.onef === true) {
          this.showNum = true;
          setTimeout(() => {
            this.onef = false;
            // this.video = true;
            this.zhezhao = false;
          }, 1500);
        }
      }, res => {
        alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      });
      //统计时间
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
      if (window.history && window.history.pushState) {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.gomemu, false);
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

  .leftbox {
    width: 40%;
    float: left;
    margin-top: 14%;
    display: inline-block;
  }

  .rightbox {
    width: 100%;
    height: 100%;
    /*float: left;*/
    position: relative;
    display: inline-block;
  }

  .shake {
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
  }

  @keyframes myPlay {
    0% {
      right: 1.5%;
    }

    50% {
      left: 1.5%;
    }

    100% {
      right: 1.5%;
    }
  }

  @-webkit-keyframes myPlay {
    0% {
      right: 1.5%;
    }

    50% {
      left: 1.5%;
    }

    100% {
      right: 1.5%;
    }
  }

  @-moz-keyframes myPlay {
    0% {
      right: 1.5%;
    }

    50% {
      left: 1.5%;
    }

    100% {
      right: 1.5%;
    }
  }

  .wordstyle {
    font-size: 3rem;
    margin: 0;
    font-family: pepper;
    color: white;
    width: 100%;
    letter-spacing: 1px;
  }

  .spanline {
    width: 11%;
    border-bottom: 4px solid white;
    height: 100%;
    display: inline-block;
  }

  .widthline {
    width: 8%;
    border-bottom: 4px solid white;
    height: 100%;
    display: inline-block;
  }


  .red {
    color: #ff391c !important;
  }

  .blue {
    color: #007BB8 !important;
  }

  .advanced1 {
    width: 100%;
    height: 100%;
    /*background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/interbg.png");*/
    /*background-color: #204900;*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
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

  .twomenu {
    padding-top: 18%;
    display: flex;
    margin: 0px;
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
  }

  .imgsty {
    width: 66%;
    text-align: center;
    margin: 0 auto;
  }

  .showbg {
    display: block;
  }

  .showin {
    z-index: 3 !important;
  }

  .yes {
    height: 5.5rem;
    width: 50%;
    margin-left: 25%;
    margin-top: 7%;
    background-color: #ff7415;
    border-radius: 50px;
  }

  .yesbutton {
    border: none;
    background-color: #ffffd4;
    border-radius: 50%;
    display: block;
    width: 7rem;
    height: 7rem;
    margin-left: -1rem;
    margin-top: -1rem;
    position: absolute;
    box-sizing: border-box;

    img {
      height: 69%;
      width: auto;
    }
  }

  .centermain {
    border: none;
    background: none;
    font-family: pepper;
    color: white;
    font-size: 3.5rem;
    width: 100%;
    height: 100%;
    float: right;
    text-align: center;
  }

  .buttons {
    width: 100%;
    position: absolute;
    margin-top: 20%;
    height: 100%;
    border: none;
    top: 0%;
    left: 0;
    background: none;
    display: flex;
    text-align: center;
  }

  .listgroup {
    height: 100%;
    width: 100%;
    text-align: center;
    margin-top: 50%;
    /*line-height: 9rem;*/
    font-size: 3rem;
    font-weight: bold;
    vertical-align: middle;
    font-family: pepper;
    color: white;
  }

  .listitems {
    border: none;
    height: 10rem;
    display: flex;
    position: relative;
    background: none;
    background-image: url("../../assets/image/advpen.png");
    /*background-image: url(http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/egg.png);*/
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: 15px;
    bottom: 0;
    width: 20%;
    /*top: 20%;*/
  }

  .marginl {
    margin-left: 16%;
  }

  .pinkfont {
    color: #ff391c;
  }

  .bluefont {
    color: #007BB8;
  }

  .start2 {
    position: absolute;
    top: -15%;
    width: 50%;
    left: 25%;
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

  .fontsize {
    font-family: pepper;
    color: white;
    bottom: 8%;
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
    color: #935D24;
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

  .changeopcily {
    opacity: 0.7;
  }

  .changetranform {
    transform: scale(1.2);
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


  }

  @media screen and (min-width: 482px) and (max-width: 569px),
  (min-device-height: 482px) and (max-device-height: 569px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 482px) and (max-device-height: 569px) and (-webkit-device-pixel-ratio: 3){

    .listitems {
      height: 8rem;
      margin-right: 1%;
    }

    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 8%;
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

    .listgroup {
      font-size: 2rem;
    }

    .yes {
      margin-top: 5%;
    }

    .wordstyle {
      font-size: 2rem;
      margin-left: 10%;
    }
  }

  @media screen and (min-width: 570px) and (max-width: 735px),
  (min-device-height: 570px) and (max-device-height: 735px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 570px) and (max-device-height: 735px) and (-webkit-device-pixel-ratio: 3){
    .buttons {
      margin-top: 21%;
      width: 95%;
    }
    .wordstyle {
      margin-left: 10%;
    }
    .listitems {
      margin-right: 3%;
    }
  }

  @media screen and (min-width: 736px) and (max-width: 811px),
  (min-device-height: 736px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 736px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 3){
    .wordstyle {
      margin-left: 10%;
    }
    .listitems {
      margin-right: 1%;
    }

    .buttons {
      margin-top: 22%;
    }

    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }

    .listgroup {
      margin-top: 45%;
    }

  }

  @media screen and (min-width: 812px) and (max-width: 894px),
  (min-device-height: 812px) and (max-device-height: 894px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 812px) and (max-device-height: 894px) and (-webkit-device-pixel-ratio: 3){
    .wordstyle {
      font-size: 3.5rem;
      margin-left: 10%;
    }
    .yes {
      margin-top: 6%;
    }
    .twomenu {
      padding-top: 14%;
    }

    .fontsizes {
      margin-top: 17%;
    }

    .yesbutton {

      img {
        height: 65%;
        width: auto;
      }
    }

    .start2 {
      top: -25%;
    }

    .withcolor {
      height: 70%;
    }

    .buttons {
      margin-top: 17%;
    }

    .listgroup {
      margin-top: 41%;
    }
  }

  @media screen and (min-width: 895px) and (max-width: 1023px),
  (min-device-height: 895px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 895px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3){
    .wordstyle {
      font-size: 3.5rem;
      margin-left: 10%;
    }
    .yes {
      margin-top: 6%;
    }
    .twomenu {
      padding-top: 14%;
    }

    .fontsizes {
      margin-top: 17%;
    }

    .yesbutton {

      img {
        height: 65%;
        width: auto;
      }
    }


    .start2 {
      top: -25%;
    }

    .withcolor {
      height: 70%;
    }

    .buttons {
      margin-top: 18%;
    }

    .listgroup {
      margin-top: 38%;
    }
  }

  @media screen and (min-width: 1024px)and (max-width: 1365px),
  (min-device-height: 1024px) and (max-device-height: 1365px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 1024px) and (max-device-height: 1365px) and (-webkit-device-pixel-ratio: 3){

    .listitems {
      height: 30%;
    }

    .fontsizes {
      margin-top: 30%;
    }

    .twomenu {
      padding-top: 26%;
    }

    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 8%;
      left: 4%;
      position: absolute;
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      /*transform: scale(1.2);*/
    }


    .yes {
      height: 6.5rem;
      margin-top: 20%;
      -webkit-border-radius: 5rem;
      -moz-border-radius: 5rem;
      border-radius: 5rem;
    }

    .yesbutton {
      width: 9rem;
      height: 9rem;

      img {
        height: 60%;
        width: auto;
      }
    }

    .buttons {
      margin-top: 38%;
    }

    .start2 {
      top: 5%;

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

    .listgroup {
      margin-top: 45%;
    }

    .wordstyle {
      font-size: 4rem;
      margin-left: 10%;
    }
  }

  @media screen and (min-width: 1366px)and (max-width: 1600px),
  (min-device-height: 1366px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 1366px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3){
    .fontsizes {
      margin-top: 30%;
    }

    .twomenu {
      padding-top: 26%;
    }

    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 8%;
      left: 4%;
      position: absolute;
      font-size: xx-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      /*transform: scale(1.2);*/
    }


    .yes {
      height: 8.5rem;
      margin-top: 20%;
      -webkit-border-radius: 5rem;
      -moz-border-radius: 5rem;
      border-radius: 5rem;
    }

    .yesbutton {
      width: 12rem;
      height: 12rem;
      margin-top: -2rem;

      img {
        height: 60%;
        width: auto;
      }
    }

    .centermain {
      font-size: 4.5rem;
    }

    .buttons {
      margin-top: 35%;
    }

    .listitems {
      height: 35%;
      margin-right: 2%;
    }

    .listgroup {
      height: 15rem;
      line-height: 15rem;
      font-size: 3rem;
      margin-top: 35%;
    }

    .start2 {
      top: 5%;

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

    .wordstyle {
      margin-left: 10%;
      font-size: 4rem;
    }
  }

  @media screen and (min-width: 1600px) {
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
      margin-left: 8%;
      transform: scale(1.6);
    }

    .wordstyle {
      font-size: 6rem;
      margin-left: 16%;
    }

    .yes {
      height: 15rem;
      -webkit-border-radius: 8rem;
      -moz-border-radius: 8rem;
      border-radius: 8rem;
      margin-top: 6%;
    }

    .yesbutton {
      width: 21rem;
      height: 21rem;
      margin-top: -3rem;

      img {
        height: 60%;
        width: auto;
      }
    }

    .centermain {
      height: 95%;
    }

    .buttons {
      margin-top: 23%;
    }

    .listitems {
      height: 21rem;
      margin-right: 38px;
    }

    .listgroup {
      height: 23rem;
      line-height: 23rem;
      font-size: 5rem;
      margin-top: 12%;
    }

    .start2 {
      top: -23%;

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

    .roleimg {
      height: 63%;
      top: 20%;
    }

  }
</style>
