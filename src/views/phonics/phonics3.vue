<template>
  <div class="phonics3">
    <span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic">
        <source src="../../assets/video/gamemusic.mp3"></audio>
    </span>
    <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->

    <transition name="fades">
      <div class="contain" v-show="!resume">
        <img src="../../assets/image/prightback.png" @click="$tips(true);gomemu()" class="backbutton" />
        <img src="../../assets/image/phelp.png" @click="$tips(true);help()" class="helpbutton" />
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <p class="fontsizes">{{this.countpage}}/{{this.question}}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div v-if="!onef" style="width: 100%; height: 90%;text-align: center;display:block;position: fixed;">
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <div v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div><!-- 遮罩禁止重复点击作用 -->
            <audio @canplay="getDuration"   ref="videos" id="videos" autoplay="autoplay" :src="audio"></audio>
            <audio v-if="soundsWrong" autoplay="autoplay">
              <source src="../../assets/video/Wrong.mp3" ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay">
              <source src="../../assets/video/correct.mp3" ></audio>
            <div class="rightbox">
              <div id="box2" class="yes">
                <button class="yesbutton" @click="change">
               <img :src="bg" />
                </button>

              </div>
              <div class="buttons">
                <button v-for="li in list1" :key="li.id" class="item listitems" v-bind:class="{changeopcily:li.fail,changetranform:li.successful}" style="display: flex;position: relative;"  @click="answer(li)">
                  <span class="listgroup" v-bind:class="{ bluefont:li.bluesuccess,pinkfont:li.redsuccess}">{{li.question}}</span>
                </button>
              </div>


              <img src="../../assets/image/StarYellow.png" class="start2" v-show="showstart" />
            </div>

          </div>

        </transition>
        <div class="settinglist">
          <img src="../../assets/image/pbar.png" style="width: 100%;bottom: 0;height: 100%;">
          <span class="fontsize">Listen and select the correct letter</span>
          <div @click="$tips(true);changesett()">
            <img src="../../assets/image/p-pause.png" class=" repeat">
          </div>

        </div>
      </div>
    </transition>

    <div class='popContainer' v-if="popp">
      <p class="spanp spanp1">{{spanp}}</p>
      <button class="roleimg">
        <img src="../../assets/image/p-rule.png" style="height: 100%;"  />
      </button>
      <div class="withcolor oringe">
        <div class="close" @click="$tips(true);pop()">
          <img src="../../assets/image/pcloce.png">
        </div>
        <img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/excercise3.gif">

      </div>
    </div>
    <transition name="fades">
      <div class="about" v-show="resume">
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
  import $ from 'jquery';
  var qs = require('qs');
  export default {
    name: "phonics3",
    watch: {
      'onef': function(newVal) {
        if (this.onef == true) {
          setTimeout(() => {
            this.list1 = this.listF[this.countpage - 1];
            this.audio = this.pic + this.list1[0].audio;
            this.bg = this.pic +this.list1[0].bg;
            for(var l=0;l<this.list1.length;l++){
              this.list1[l].successful=0;
              this.list1[l].fail=0;
            }
            this.onef = false;
            this.zhezhao=false;
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
        popp: false,
        ruleimg8: false,
        ruleimg10: false,
        ruleimg4: false,
        duration:0,
        ruleimg15: false,
        spanp:'',
        ruleimg25: false,
        ruleimg12: false,
        list1: [],
        list2: [],
        zhezhao:true,
        bg: '',
        audio: '',
        insert:'[',
        soundsWrong: false,
        soundscorrect: false,
        video: false,
        fade: 'fade',
        nowtime: 0,
        falselist: [],
        flag2: true,
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
        // url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseF',
        // pic: "http://demo11.embraiz.com/mtGameHK",
        url: '/phonics/phonics',
        //url: 'http://localhost:8080/mtGame/exercise/exerciseF',
        levels: 0,
        page: this.page++,
        type: 'phonics3',
        onef: true,
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
      answer(li){
           this.zhezhao=true;
           if(li.score===1){
              this.soundscorrect = true;
              li.bluesuccess=1;
              this.showstart = true;
              this.countpage += 1;
              this.account+=1;
             if (this.countpage-2 !==9){
               this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-2][0].phonics_detail_id+",'ansResult':1},";
             }else{
               this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-2][0].phonics_detail_id+",'ansResult':1}]";
             }
              setTimeout(() => {
                this.showstart = false;
                this.soundscorrect = false;
                if (this.countpage <= this.listF.length) {
                  this.onef = true;
                  li.bluesuccess=0;
                } else {
                  setTimeout(() => {

                    this.$router.push({
                      //核心语句
                      path: "/presult", //跳转的路径
                      query: {
                        type: this.type,
                        partName: 'phonics3',
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
         }else{
           this.soundsWrong = true;
           this.countpage += 1;
           li.redsuccess=1;
             if (this.countpage-2 !==9){
               this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
             }else{
               this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
             }
           setTimeout(() => {
             this.soundsWrong = false; li.redsuccess=0;
             for(var l=0;l<this.list1.length;l++){
               if(this.list1[l].score===1){
                 this.list1[l].successful=1;
               }else {
                 this.list1[l].fail=1;
               }
             }
             setTimeout(() => {
             if (this.countpage <= this.listF.length) {
               this.onef = true;
             } else {
                 this.$router.push({
                   //核心语句
                   path: "/presult", //跳转的路径
                   query: {
                     type: this.type,
                     partName: 'phonics3',
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
          this.video = true;
        }
      },
      changesett() {
        if (this.onef == false) {
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
         this.spanp = "Listen and select the correct letter.";
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
      }
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
        num:5
      })).then(res => {
        for (let i in res.data.maps) {
          this.listF.push(res.data.maps[i]); //属性
        }
        for(let i = 0,len = this.listF.length; i < len; i++){
          let currentRandom = parseInt(Math.random() * (len - 1));
          let current = this.listF[i];
          this.listF[i] = this.listF[currentRandom];
          this.listF[currentRandom] = current;
        }
        this.question = this.listF.length;
        this.list1 = this.listF[this.countpage - 1];
        this.audio = this.pic + this.list1[0].audio;
        this.bg = this.pic +this.list1[0].bg;
        for(var l=0;l<this.list1.length;l++){
          this.list1[l].successful=0;
          this.list1[l].fail=0;
        }
        if (this.onef == true) {
         setTimeout(() => {
          this.onef = false;
          // this.video = true;
          this.zhezhao=false;
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
  }

  .leftbox {
    width: 40%;
    float: left;
    margin-top: 14%;
    display: inline-block;
  }

  .rightbox {
    width: 60%;
    height: 80%;
    float: left;
    margin: 7% 20% 0 20%;
    display: inline-block;
  }

  .rightbox1 {
    // margin-left: -5%;
  }


  .wordstyle {
    font-size: 3rem;
    margin: 0;
    font-family: pepper;
    color: #633a1c;
  }

  .spanline {
    width: 11%;
    border-bottom: 4px solid #633a1c;
    height: 100%;
    display: inline-block;
  }

  .widthline {
    width: 8%;
    border-bottom: 4px solid #633a1c;
    height: 100%;
    display: inline-block;
  }

  .phonics3 {
    width: 100%;
    height: 100%;
    background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/phonicsbg.png");
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
    height: 40%;
    width: 80%;
    margin: 0 10%;
  }

  .yesbutton {
    height: 100%;
    border: none;
    background: none;
    background-image: url(http://monkeytown.monkeytree.com.hk/image/answerbg1.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    img{
      height: 80%;
      width: auto;
    }
  }

  .buttons {
    width: 80%;
    min-height: 130px;
    position: relative;
    margin: 0 auto;
    right: 0;
    height: 100%;
    border: none;
    background: none;
    display: flex;
    text-align: center;
  }

  .listgroup {
    height: 100px;
    width: 100%;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: 2rem;
    font-family: pepper;
    margin: 1.5rem 5%;
  }

  .listitems {
    display: inline;
    border: none;
    height: 100px;
    background: none;
    background-image: url(http://monkeytown.monkeytree.com.hk/image/deepbackgr.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: 15px;
    width: 30%;
  }
  .pinkfont {
    color: #FF9999;
  }
  .bluefont{
     color: #5CD0FF;
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

  .contain {
    width: 100%;
    height: 100%;
    position: relative;
    display: contents;
    overflow: hidden;
  }
  .changeopcily{
    opacity: 0.7;
  }
  .changetranform{
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

  }

  @media screen and (min-width: 1024px)and (max-width: 1600px) {

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

    .rightbox {
      margin-top: 15%;
    }
    .listitems{
      height: 140px;
    }
    .listgroup{
          font-size: 3rem;
          font-family: pepper;
          margin: 2.5rem 5%;
    }

    .start2 {
      top: 5%;
      right: 5%;
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
    .yesbutton {

      img{
        height: 60%;
        width: auto;
      }
    }

  }

  @media screen and (min-width: 737px) and (max-width:811px) {
    .rightbox {
      margin-top: 2.5%;
    }

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


    .start2 {
      top: -25%;
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



    .start2 {
      top: -25%;
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
      bottom: 0%;
      left: 8%;
      position: absolute;
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }
    .rightbox {
      margin-top: 8%;
    }
    .listitems{
      height: 200px;
      margin: 65px 15px;
    }
    .listgroup{
      font-size: 5rem;
      font-family: pepper;
      margin: 4rem 5%;
    }
    .yes{
      width: 60%;
      margin: 0 20%;
    }

    .start2 {
      top:-23%;
      right: 5%;
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
    .yesbutton {

      img{
        height: 60%;
        width: auto;
      }
    }
  }
</style>
