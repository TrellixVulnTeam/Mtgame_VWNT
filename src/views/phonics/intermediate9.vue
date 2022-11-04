<template>
  <div class="intermediate9">
    <span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic">
        <source src="../../assets/video/gamemusic.mp3"></audio>
    </span>
    <img src="../../assets/image/interbg9.png" style="width: 100%; z-index: -1; height: 100%;display:block;position: absolute;">

    <transition name="fades">
      <div class="contain" v-if="!resume">
        <img src="../../assets/image/irightback.png" @click="$tips(true);gomemu()" class="backbutton" />
        <img src="../../assets/image/ihelp.png" @click="$tips(true);help()" class="helpbutton" />
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <!--<img src="../../assets/image/phonicsbg2.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{this.question}}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div v-if="!onef" style="width: 100%; height: 90%;text-align: center;display:block;position: absolute;">
            <!--<img src="../../assets/image/phonicsbg2.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <div v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div><!-- 遮罩禁止重复点击作用 -->
            <audio v-if="soundsWrong" autoplay="autoplay">
              <source src="../../assets/video/Wrong.mp3" ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay">
              <source src="../../assets/video/correct.mp3" ></audio>
            <div class="leftbox">
              <img src="../../assets/image/StarOrange.png" class="start" v-show="showstart">
              <button class="inputbar" v-bind:class="{'red':changered,'blue':changeblue}">
                <!-- <input type="text" v-model="picked" name="inputtext" class="inputspan"> -->
                <!-- 	<p class="inputspan" v-for="val in space">{{val.name}}</p> -->
                <!--<p class="inputspan wordstyle">-->
                  <!--<span v-bind:class="{widthline:spanline, red:changecolor,blue:changecolor2}">{{space}}</span>-->
                  <!--{{ wordname}}-->
                <!--</p>-->
                <p class="inputspan" v-for="val in space">{{val.name}}</p>
                <!--<p class="inputspan wordstyle" v-if="turename==='x'">-->
                  <!--{{wordname}}<span v-bind:class="{widthline:spanline, red:changecolor,blue:changecolor2}">{{space}}</span>-->
                <!--</p>-->
              </button>
              <div class="inputbarright">
                <button class="delete" @click="$tips(true);deletes()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
              </div>
              <div class="listbar">
                <audio v-if="video" autoplay="autoplay">
                  <source :src=audios></audio>
                <div v-bind:class="{'answer':answer}" class="leftimg" @click="change()">
                  <img :src=images style="width:80%; height:80%; position: absolute;left: 9%;top: 10%;border-radius: 50px;">
                  <img src='../../assets/image/intercircle.png'  style="width: 100%; float: left;">

                </div>
                <div class="listbar2">

                  <div>
                    <button v-for="item in items2" :key="item.id" class="answer-items" @click="$tips(true);onkey(item)">
                      <p class="answeritems">{{item.name}}</p>
                    </button>
                  </div>
                  <div>
                    <button v-for="item in items3" :key="item.id" class="answer-items" @click="$tips(true);onkey(item)">
                      <p class="answeritems">{{item.name}}</p>
                    </button>
                  </div>
                  <div>
                    <button v-for="item in items4" :key="item.id" class="answer-items" @click="$tips(true);onkey(item)">
                      <p class="answeritems">{{item.name}}</p>
                    </button>
                  </div>
                </div>
                <div class="rightbox">

                  <!-- <button class="space" @click="nullspace">Space</button> -->
                  <button class="enter" @click="$tips(true);enters()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
              </div>
            </div>


          </div>

        </transition>
        <div class="settinglist">
          <img src="../../assets/image/interbar.png" style="width: 100%;bottom: 0;height: 100%;">
          <button class="fontsize">{{warn}}</button>
          <div @click="$tips(true);changesett()">
            <img src="../../assets/image/interpause.png" class=" repeat">
          </div>
          <!-- <div @click="change">
						<img src="../../assets/image/season-repeat.png" class=" repeat">
					</div> -->
        </div>
      </div>
    </transition>
    <div class='popContainer' v-if="popp">
      <p class="spanp spanp1">{{spanp}}</p>
      <button class="roleimg">
        <img src="../../assets/image/p-rule.png" style="height: 100%;" />
      </button>
      <div class="withcolor oringe">
        <div class="close" @click="$tips(true);pop()">
          <img src="../../assets/image/pcloce.png">
        </div>
        <img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/intermediate9.gif">

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
          <!-- <div style="margin-top: 5px;">
						<div><img src="../../assets/image/home.png" style="width: 30%; height: 10%;"  @click="$tips(true);gomemu()"></div>
					</div> -->
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
  var qs = require('qs');
  export default {
    name: "intermediate9",
    watch: {
      'onef': function(newVal) {
        if (this.onef == true) {
          this.truelist=[];
          setTimeout(() => {
            this.wordname = this.listBoss[this.countpage - 1][0].question;
            this.truelist =this.listBoss[this.countpage-1][0].list;
            this.images = this.pic + this.listBoss[this.countpage - 1][0].bg;
            this.audios = this.pic + this.listBoss[this.countpage - 1][0].audio;
            this.onef = false;
            this.video = true;
            this.zhezhao = false;
            // let tl = '';
            // for (let i = 0; i < this.truelist.length; i++) {
            //   tl=tl+this.truelist[i].name
            // }
            // console.log(tl);
          }, 2000);

        }
      },
      'video': function(newVal) {
        if (this.video == true) {
          setTimeout(() => {
            this.video = false;
            // this.zhezhao = false;
          }, 5000);
        }
      },

    },
    data() {
      return {
        insert:'[',
        popp: false,
        spanp: '',
        ruleimg8: false,
        shownumb: false,
        ruleimg10: false,
        ruleimg4: false,
        ruleimg15: false,
        ruleimg25: false,
        ruleimg12: false,
        issuccess: false,
        showstart: false,
        onef: true,
        fade: 'fade',
        show: true,
        space:[],
        audios: '',
        video: false,
        soundsWrong: false,
        soundscorrect: false,
        action: false,
        action1: false,
        ended: false,
        zhezhao: false,
        changered: false,
        changeblue: false,
        answer: false,
        unitsId: '',
        unit: '',
        wordname: '',
        menuId: '',
        listBoss: [],
        warn: "Look at the picture. Then, listen and spell the word. ",
        pic: "",
        url: '/phonics2/phonics2',
        // url2: '/phonics6/phonics6',
        // pic: "http://demo11.embraiz.com/mtGameHK",
        resume: false,
        cardId: '',
        images: '',
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
        items3: [
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
        items4: [
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
        countpage: 1,
        account: 0,
        sum: 0,
        // changecolor: 0,
        // changecolor2: 0,
        spanline: true,
        truelist:[],
        question: 10,
        type: 'intermediate',
        gamename:'',
        timeurl:'/user/playTime',
      }
    },

    methods: {
      pop() {
        this.popp = !this.popp;
      },
      help() {
        if (this.onef == false) {
          this.spanp = "Look at the picture. Then, listen and spell the word. ";
          this.popp = !this.popp;

          this.ruleimg8 = true;
          this.ruleimg12 = false;

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
          path: '/intermenu', //跳转的路径
          query: {
            unitsId: this.unitsId,
            unit: this.unit
          }
        })
      },
      change() {
        if (this.onef == false) {
          //this.video = true;
          let audio = new Audio(this.audios);
          audio.play();
        }
      },
      changesett() {
        if (this.action == false && this.onef == false) {
          this.action = true;
          setTimeout(() => {
            this.action = false;
            this.resume = !this.resume;
          }, 1000);
        }
      },
      onkey(e) {
        if (this.space.length < 25) {
          this.space.push(e);
        }
        // this.spanline = false;
        // this.space = e.name;
      },
      deletes() {
        if (this.space.length != 0) {
          this.space.splice(this.space.length - 1);
        }
      },
      // nullspace() {
      //   if (this.space.length < 25) {
      //     if (this.space == [] || this.space == '' || this.space.length == 0 || this.space.length == null) {
      //     } else {
      //       this.nullspvae = {
      //         id: '',
      //         name: ' '
      //       }
      //       this.space.push(this.nullspvae);
      //     }
      //   }
      // },
      // concat(a, b) {
      //   return a + b;
      // },
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
      enters() {
        if (this.truelist.length === this.space.length) {
          this.countpage += 1;
          this.zhezhao = true;
          if (this.countpage <= this.listBoss.length) {//不是最后一题
            for (var i = 0; i < this.truelist.length; i++) {
              if (this.truelist[i].name === this.space[i].name || this.truelist[i].name === this.space[i].name.toLowerCase()) {
                this.truefalse = 1;
              } else {
                this.truefalse = false;
                break;
              }
            }
            if (this.truefalse === 1) {//长度一样正确
              this.showstart = true;
              this.soundscorrect = true;
              this.changeblue = true;
              this.account += 1;
              if (this.countpage-2 !==9){
                this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':1},";
              }else{
                this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':1}]";
              }
              setTimeout(() => {
                this.showstart = false;
                this.soundscorrect = false;
                setTimeout(() => {
                  this.changeblue = false;
                  this.onef = true;
                  this.space = [];
                }, 2000);
              }, 2000);
            } else {//长度一样错误
              this.answer = true;
              this.soundsWrong = true;
              this.changered = true;
              if (this.countpage-2 !==9){
                this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
              }else{
                this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
              }
              setTimeout(() => {
                this.answer = false;
                this.soundsWrong = false;
                for (var i = 0; i < this.truelist.length; i++) {
                  this.space[i] = this.truelist[i];
                }
                this.changered = false;
                this.changeblue = true;
                setTimeout(() => {
                  this.onef = true;
                  this.space = [];
                  this.changeblue = false;
                }, 2000);
              }, 2000);
            }
          } else {//是最后一题
            for (var i = 0; i < this.truelist.length; i++) {
              if (this.truelist[i].name === this.space[i].name || this.truelist[i].name === this.space[i].name.toLowerCase()) {
                this.truefalse = 2;
              } else {
                this.truefalse = false;
                break;
              }
            }
            if (this.truefalse === 2) {//是最后一题正确
              this.showstart = true;
              this.soundscorrect = true;
              this.changeblue = true;
              this.account += 1;
              if (this.countpage-2 !==9){
                this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':1},";
              }else{
                this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':1}]";
              }
              setTimeout(() => {
                this.showstart = false;
                this.soundscorrect = false;
                setTimeout(() => {
                  this.$router.push({
                    //核心语句
                    path: "/presult", //跳转的路径
                    query: {
                      type: this.type,
                      partName: 'intermediate9',
                      account: this.account,
                      menuId: this.menuId,
                      unitsId: this.unitsId,
                      unit: this.unit,
                      insert:this.insert
                    }
                  });
                }, 2000);
              }, 2000);
            } else {//是最后一题错误
              this.answer = true;
              this.changered = true;
              this.soundsWrong = true;
              if (this.countpage-2 !==9){
                this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
              }else{
                this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
              }
              setTimeout(() => {
                this.answer = false;
                this.soundsWrong = false;
                for (var i = 0; i < this.truelist.length; i++) {
                  this.space[i] = this.truelist[i];
                }
                this.changered = false;
                this.changeblue = true;
                setTimeout(() => {
                  this.$router.push({
                    //核心语句
                    path: "/presult", //跳转的路径
                    query: {
                      type: this.type,
                      partName: 'intermediate9',
                      account: this.account,
                      menuId: this.menuId,
                      unitsId: this.unitsId,
                      unit: this.unit,
                      insert:this.insert
                    }
                  });
                }, 2000);
              }, 2000);
            }
          }
        } else {
          this.countpage += 1;
          this.zhezhao = true;
          if (this.countpage <= this.question) {//长度不一样错误不是最后一题
            this.answer = true;
            this.soundsWrong = true;
            this.changered = true;
            console.log(this.countpage);
            if (this.countpage-2 !==9){
              this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
            }else{
              this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
            }
            setTimeout(() => {
              this.answer = false;
              this.soundsWrong = false;
              this.space = [];
              for (var i = 0; i < this.truelist.length; i++) {
                this.space[i] = this.truelist[i];
              }
              this.changered = false;
              this.changeblue = true;
              setTimeout(() => {
                this.onef = true;
                this.space = [];
                this.changeblue = false;
              }, 2000);
            }, 2000);
          } else {//长度不一样错误，是最后一题
            this.answer = true;
            this.soundsWrong = true;
            this.changered = true;
            if (this.countpage-2 !==9){
              this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
            }else{
              this.insert = this.insert+"{'phonics_detail_id':"+this.listBoss[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
            }
            setTimeout(() => {
              this.answer = false;
              this.soundsWrong = false;
              this.space = [];
              for (var i = 0; i < this.truelist.length; i++) {
                this.space[i] = this.truelist[i];
              }
              this.changered = false;
              this.changeblue = true;
              setTimeout(() => {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    type: this.type,
                    partName: 'intermediate9',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit,
                    insert:this.insert
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
        num:19
      })).then(res => {
        for (let i in res.data.maps) {
          this.listBoss.push(res.data.maps[i]); //属性
          var data1=this.listBoss[i][0].turename.split('');
          this.listBoss[i][0].list = [];
          for(var u=0;u<data1.length;u++){
            this.listBoss[i][0].list.push({
              name: data1[u]
            })
          }
        }
        for(let i = 0,len = this.listBoss.length; i < len; i++){
          let currentRandom = parseInt(Math.random() * (len - 1));
          let current = this.listBoss[i];
          this.listBoss[i] = this.listBoss[currentRandom];
          this.listBoss[currentRandom] = current;
        }
        this.wordname = this.listBoss[this.countpage - 1][0].question;
        // this.turename = this.listBoss[this.countpage - 1][0].turename;

        this.images = this.pic + this.listBoss[this.countpage - 1][0].bg;
        this.audios = this.pic + this.listBoss[this.countpage - 1][0].audio;
        this.question = this.listBoss.length;
        this.shownumb = true;
        if (this.onef == true && this.shownumb == true) {
          setTimeout(() => {
            this.onef = false;
            this.video = true;
            this.truelist =this.listBoss[this.countpage-1][0].list;
            console.log(this.listBoss);
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
  .body {
    padding: 0;
    margin: 0;
  }

  .intermediate9 {
    width: 100%;
    height: 100%;
    /*background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/interbg9.png");*/
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

  .leftbox {
    width: 100%;
    display: inline-block;
    margin-top: 20px;
  }

  .start {
    width: 30%;
    position: absolute;
    z-index: 2;
    left: 36%;
    top: -10%;
    margin-top: 20px;
  }

  .rightbox {
    position: relative;
    width: 15%;
    float: left;
  }

  /*.wordstyle {*/
    /*font-size: 2rem;*/
    /*margin: 0;*/
    /*font-family: pepper;*/
    /*color: #b16a00;*/
  /*}*/

  .widthline {
    width: 5%;
    border-bottom: 4px solid #b16a00;
    height: 100%;
    display: inline-block;
  }

  .red {
    color: #ff391c !important;
  }

  .blue {
    color: #007BB8 !important;
  }

  .inputbarright {
    width: 15%;
    float: right;
    display: inline-block;
    margin-top: 9%;
    text-align: center;
  }

  .inputbar {
    width: 56%;
    border: none;
    margin: 8% 0 3% 20%;
    background-color: #ffffb6;
    border-radius: 50px;
    // padding: 0.7rem;
    display: inline-block;
    text-align: center;
    height: 3rem;
    color: #b16a00;
  }

  .inputspan {
    font-family: pepper;
    font-size: 1.5rem;
    line-height: 100%;
    min-width: 0.5rem;
    display: inline-block;
  }

  .changeblue {
    color: white;
    background-color: #007BB8;
  }

  .changered {
    color: white;
    background-color: #DB7365;
  }

  .listbar {
    width: 100%;
    left: 2.5%;
    top: 40%;
    position: absolute;
  }

  .listbar2 {
    float: left;
    position: relative;
    width: 62%;
  }

  .leftimg {
    width: 20%;
    height: 100%;
    float: left;
    position: relative;
    display: inline-block;
  }

  .answer-items {
    width: 9%;
    height: 2.2rem;
    margin: 12px 0 0 0.2rem;
    border-radius: 50%;
    border: none;
    color: white;
    font-size: 1.5rem;
    display: inline-block;
    font-family: pepper;
    background-color: #ffb748;
    z-index: 2;
  }

  .answeritems {
    height: 2.2rem;
    line-height: 100%;
    padding-top: 5px;

  }

  .delete {
    background: none;
    border-style: none;
    border: none;
    background-size: cover;
    border-radius: 15px;
    margin-left: -20px;
    background-image: url(http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/interdelete2.png);
    color: #ffd940;
    line-height: 100%;
    font-size: 1.2rem;
    padding: 10px 10px 10px 20px;
    font-family: pepper;
  }

  .space {
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

  .enter {
    background: none;
    background-image: url(http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/interenter2.png);
    background-size: contain;
    background-repeat: no-repeat;
    border-style: none;
    color: #ffd940;
    font-size: 1.2rem;
    font-family: pepper;
    margin-top: 12%;
    height: 130px;
    padding: 10%;
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
    color: #935D24;
    text-align: center;
    vertical-align: middle;
    margin-top: 22%;
    font-size: xx-large;
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

    .answer-items {
      height: 1.5rem;
      font-size: 1rem;
      margin: 12px 0 0 0.1rem;
    }

    .answeritems {
      height: 1.5rem;
      line-height: 100%;
      padding-top: 5px;
    }

    .space {
      font-size: 1rem;
    }

    .delete {
      font-size: 1rem;
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

    .answer-items {
      height: 2rem;
      font-size: 1.2rem;
    }

    .answeritems {
      height: 2rem;
      line-height: 100%;
      padding-top: 5px;
    }

    .space {
      font-size: 1rem;
    }

    .delete {
      font-size: 1rem;
    }

  }

  @media screen and (min-width: 1024px) and (max-width: 1354px) {
    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 23%;
      left: 8%;
      position: absolute;
      font-size: 1.5rem;
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

    .inputbar {
      height: 4.5rem;
      margin: 15% 0 3% 20%;
    }
    .inputspan{
      font-size: 2rem;
    }

    .inputbarright {
      margin-top: 16%;
    }

    .answer-items {
      height: 3.5rem;
      margin: 12px 0 0 1%;
      font-size: 2.3rem;
    }

    .answeritems {
      height: 3.5rem;
      line-height: 100%;
      padding-top: 5px;
    }

    .start {
      width: 30%;
      position: absolute;
      z-index: 2;
      left: 36%;
      top: 0%;

    }

    .listbar {
      top: 40%;
    }

    .space {
      font-size: 2rem;
    }

    .delete {
      font-size: 2rem;
      padding: 1rem 1rem 1rem 1.6rem;
    }

    .enter {
      font-size: 2rem;
      background-size: contain;
      height: 13.5rem;
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
  @media screen and (min-width: 1355px) and (max-width: 1600px){
    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 23%;
      left: 8%;
      position: absolute;
      font-size: 2rem;
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

    .inputbar {
      height: 4.5rem;
      margin: 15% 0 3% 20%;
    }
    .inputspan{
      font-size: 2rem;
    }

    .inputbarright {
      margin-top: 16%;
    }

    .answer-items {
      height: 3.5rem;
      margin: 12px 0 0 1%;
      font-size: 2.3rem;
    }

    .answeritems {
      height: 3.5rem;
      line-height: 100%;
      padding-top: 5px;
    }

    .start {
      width: 30%;
      position: absolute;
      z-index: 2;
      left: 36%;
      top: 0%;

    }

    .listbar {
      top: 40%;
    }

    .space {
      font-size: 2rem;
    }

    .delete {
      font-size: 2rem;
      padding: 1rem 1rem 1rem 1.6rem;
    }

    .enter {
      font-size: 2rem;
      background-size: contain;
      height: 13.5rem;
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
  @media screen and (min-width: 736px) and (max-width:811px) {
    .start {
      width: 30%;
      position: absolute;
      z-index: 2;
      left: 36%;
      top: -11%;
      margin-top: 20px;
    }

    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }

    .menulist {
      margin: 5% 20%;
    }

    .listimg {
      width: 30%;
    }

    .chosen {
      left: 26%;
      width: 50%;
    }

  }

  @media screen and (min-width: 812px) and (max-width:895px) {
    .twomenu {
      padding-top: 14%;
    }

    .answer-items {
      height: 2.5rem;
    }

    .answeritems {
      height: 2.5rem;
      line-height: 100%;
      padding-top: 5px;
    }

    .fontsizes {
      margin-top: 17%;
    }

    .listbar {
      top: 35%;
    }

    .withcolor {
      height: 70%;
    }

    .leftbox {
      margin: 0;
    }
    .delete{
      padding: 10px 10px 10px 17px;
    }
    .start {
      width: 30%;
      position: absolute;
      z-index: 2;
      left: 36%;
      top: -22%;
    }
    .enter{
      height: 10rem;
      background-size: contain;
    }
    .fontsize{
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 895px) and (max-width:1023px) {
    .withcolor {
      height: 70%;
    }

    .twomenu {
      padding-top: 14%;
    }

    .answer-items {
      height: 2.5rem;
    }

    .leftbox {
      margin: 0;
    }

    .answeritems {
      height: 2.5rem;
      line-height: 100%;
      padding-top: 5px;
    }
    .fontsize{
      font-size: 1.2rem;
    }

    .fontsizes {
      margin-top: 17%;
    }
    .delete{
      padding: 10px 10px 10px 17px;
    }

    .listbar {
      top: 35%;
    }

    .start {
      width: 30%;
      position: absolute;
      z-index: 2;
      left: 36%;
      top: -22%;
    }
    .enter{
      height: 10rem;
      background-size: contain;
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
      bottom: 23%;
      left: 8%;
      position: absolute;
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 4%;
      transform: scale(1.6);
    }


    .inputbar{
      height: 6rem;
    }

    .inputbarright {
      margin-top: 8%;
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
    .widthline{
      width: 10%;
    }
    .listbar{
      top:35%;
    }
    .start {
      width: 30%;
      position: absolute;
      z-index: 2;
      left: 36%;
      top: 0%;

    }

    .listbar {
      top: 40%;
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
      padding: 20px;
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
