<template>
  <div class="advanced6">
    <span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic">
        <source src="../../assets/video/gamemusic.mp3"></audio>
    </span>
    <img src="../../assets/image/advancebg6.png" style="width: auto;min-width: 100%; z-index: -1; height: 100%;display:block;position: absolute;">

    <transition name="fades">
      <div class="contain" v-show="!resume">
        <img src="../../assets/image/aback.png" @click="$tips(true);gomemu()" class="backbutton" />
        <img src="../../assets/image/ahelp.png" @click="$tips(true);help()" class="helpbutton" />
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <p class="fontsizes" v-if="showNum">{{this.countpage}}/{{this.question}}</p>
          </div>
        </transition>

        <transition name="fade1">

          <div v-if="!onef" style="width: 100%; height: 90%;text-align: center;display:block;position: fixed;" id="imgBox">
            <div class="leftbox">
              <div id="box2" class="yes">
                <button class="yesbutton" >
                  <img src="../../assets/image/lvchong.png" />
                </button>
                <div @click="change" class="changeButton"></div>
              </div>
            </div>
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <div v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div><!-- 遮罩禁止重复点击作用 -->
            <audio  autoplay="autoplay" ref="videos" id="videos">
              <source :src="audio"></audio>
            <audio v-if="soundsWrong" autoplay="autoplay">
              <source src="../../assets/video/Wrong.mp3" ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay">
              <source src="../../assets/video/correct.mp3" ></audio>
            <canvas id="canvas" style="position: absolute;left:0;top:0%;z-index: 99;width: 100%;height: 100%;"
                    @mousedown="canvasDown($event)" @mouseup="canvasUp($event)" @mousemove="canvasMove($event)"
                    @touchstart="canvasDown($event)" @touchend="canvasUp($event)" @touchmove="canvasMove($event)">
              您的浏览器不支持Canvas
            </canvas>
            <div class="rightbox" id="parentBox">
              <div class="buttons">
                <button  v-for="(li,i) in list1"  class="item imgsty"    v-bind:class="{listitems1:i===0,listitems2:i===1,listitems3:i===2,changeopcily:li.fail,changetranform:li.successful,shake:li.redsuccess}"  @click="answer(li)">
                  <span class="listgroup" v-bind:class="{ bluefont:li.bluesuccess,pinkfont:li.redsuccess}">{{li.value}}</span>
                </button>
                <!--<button   class="item  listitems1" v-bind:class="{changeopcily:this.list1[0].fail,changetranform:this.list1[0].successful}"    @click="answer(this.list1[0])">-->
                <!--<span class="listgroup" v-bind:class="{ bluefont:this.list1[0].bluesuccess,pinkfont:this.list1[0].redsuccess}">{{this.list1[0].question}}</span>-->
                <!--</button>-->
                <!--<button   class="item  listitems2" v-bind:class="{changeopcily:this.list1[1].fail,changetranform:this.list1[1].successful}"   @click="answer(this.list1[1])">-->
                <!--<span class="listgroup" v-bind:class="{ bluefont:this.list1[1].bluesuccess,pinkfont:this.list1[1].redsuccess}">{{this.list1[1].question}}</span>-->
                <!--</button>-->
                <!--<button   class="item listitems3" v-bind:class="{changeopcily:this.list1[2].fail,changetranform:this.list1[2].successful}"   @click="answer(this.list1[2])">-->
                <!--<span class="listgroup" v-bind:class="{ bluefont:this.list1[2].bluesuccess,pinkfont:this.list1[2].redsuccess}">{{this.list1[2].question}}</span>-->
                <!--</button>-->
              </div>
              <img src="../../assets/image/StarYellow.png" class="start2" v-show="showstart" />
            </div>
          </div>
        </transition>
        <div class="settinglist">
          <img src="../../assets/image/abar.png" style="width: 100%;bottom: 0;height: 100%;">
          <span class="fontsize">Listen to the word and circle the correct sound.</span>
          <div @click="$tips(true);changesett()">
            <img src="../../assets/image/adPause.png" class=" repeat">
          </div>

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
        <img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/advanced6.gif">

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
    name: "advanced6",
    watch: {
      'onef': function(newVal) {
        if (this.onef === true) {
          setTimeout(() => {
            this.list1 = this.listF[this.countpage - 1];
            for(var l=0;l<this.list1.length;l++){
              this.list1[l].successful=0;
              this.list1[l].fail=0;
              if(this.list1[l].score==='1'){
                this.audio = this.pic + this.list1[l].audio;
              }
            }
            this.onef = false;
            this.zhezhao=false;
            this.video = true;
          }, 2000);
        }else{
          setTimeout(() => {
            const canvas = document.getElementById('canvas'); // 初次进来初始化画布
            let imgBox = document.getElementById('imgBox');
            let parentBox = document.getElementById('parentBox');
            let imgsty = document.getElementsByClassName('imgsty');
            for (let i=0; i<imgsty.length; i++) {
              let coreP = { // 获取图片中心点位置
                // corePx: imgsty[i].offsetLeft + imgsty[i].offsetWidth/2,
                // corePy: imgsty[i].offsetTop + imgsty[i].offsetHeight/2
                corePx: imgsty[i].offsetLeft + imgsty[i].offsetWidth/2+parentBox.offsetLeft,
                corePy: imgsty[i].offsetTop + imgsty[i].offsetHeight/2+parentBox.offsetTop
              };
              this.centerP.push(coreP);
            }
            this.canvasObj = canvas;
            this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
            canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
            canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
            this.context = canvas.getContext('2d');
            this.setCanvasStyle();
          }, 2000);
        }
      },
      'video': function(newVal) {
        if (this.video === true) {
            this.video = false;
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
        spanp:'',
        ruleimg25: false,
        ruleimg12: false,
        list1: [],
        list2: [],
        insert:'[',
        zhezhao:true,
        bg: '',
        audio: '',
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
        url: '/phonics3/phonics',
        //url: 'http://localhost:8080/mtGame/exercise/exerciseF',
        levels: 0,
        page: this.page++,
        type: 'advanced',
        onef: true,
        gamename:'',
        timeurl:'/user/playTime',
        context:{},
        config: {
          lineWidth: 3,
          lineColor: "#44ccc2",
          shadowBlur: 1
        },
        centerP: [], // 存储数组图片中心点的位置
      }
    },

    methods: {
      isPc () {
        const userAgentInfo = navigator.userAgent;
        const Agents = ['Android', 'iPhone','iPhoneX', 'iPhoneXR','SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
        let flag = true;
        console.log(userAgentInfo);
        for (let v = 0; v < Agents.length; v++) {
          	if (userAgentInfo.indexOf(Agents[v]) > 0) {

            	flag = false;
            	break;
          	}
        }
        console.log(flag);
        return flag;
      },
      // 在canvas中鼠标按下
      canvasDown(e) {
        console.log(e);
        if(e.touches && e.touches.length===1 || e.buttons ===1){
          console.log('down');
          this.canvasMoveUse = true;
          const t = e.target;
          let canvasX;
          let canvasY;
          // 由于手机端和pc端获取页面坐标方式不同，所以需要做出判断
          // if(this.isPc()) {
             canvasX = e.clientX - t.parentNode.offsetLeft;
            canvasY = e.clientY - t.parentNode.offsetTop;
          // } else {
          //   canvasX = e.changedTouches[0].clientX - t.parentNode.offsetLeft;
          //   canvasY = e.changedTouches[0].clientY - t.parentNode.offsetTop;
          // }
          this.context.beginPath();
          this.context.moveTo(canvasX, canvasY);
          this.context.stroke();
        }else{
          this.canvasMoveUse = false;
        }
      },
      canvasMove(e) {
        if(this.canvasMoveUse) {
          console.log('move');
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
          }
          // 连接到移动的位置并上色
          this.context.lineTo(canvasX, canvasY);
          this.context.stroke();
        }
      },
      setCanvasStyle() {
        if(997<document.body.offsetWidth&&document.body.offsetWidth<1025){
          this.context.lineWidth =12;
          this.context.shadowBlur = this.config.shadowBlur;
          this.context.shadowColor = this.config.lineColor;
          this.context.strokeStyle = this.config.lineColor;
        }else if(document.body.offsetWidth>1025){
          this.context.lineWidth = 14;
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
      // canvas中鼠标放开
      canvasUp(e) {
        console.log('鼠标松开');
        this.canvasMoveUse = false;
        this.context.closePath();
        let isSelect = false; // 用于判断是否选中了选项
        let anwserIndex;
        let successIndex;
        let anwserList = []; // 用于判断答题时圈中了几个选项
        this.centerP.forEach((item, index) => {
          // 获取答题选项下标，判断是否选中答案
          if (this.context.isPointInPath(item.corePx, item.corePy)) {
            anwserIndex = index;
            isSelect = true;
            anwserList.push(item);
          }
        });
        for(let i=0; i<this.list1.length; i++){
          if (this.list1[i].score==='1') { // 获取正确选项下标
            successIndex = i;
          }
        }
        if (!isSelect) { // 没有选中
          this.canvasObj.height = this.canvasH;
          this.setCanvasStyle();
        } else {
          console.log('选中');
          if (anwserList.length === 1) { // 答题时只有圈中一个选项才能进行判断
            this.zhezhao=true;
            this.space=this.list1[anwserIndex].name;
            if (this.list1[anwserIndex].score==='1') {
              /*回答正确在这里写效果*/
              this.canvasObj.height = this.canvasH;
              this.list1[anwserIndex].bluesuccess=1;
              this.changecolor=true;
              this.showstart = true;
              this.account += 1;
              this.soundscorrect=true;
              if (this.countpage-1 !==9){
                this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-1][0].phonics_detail_id+",'ansResult':1},";
              }else{
                this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-1][0].phonics_detail_id+",'ansResult':1}]";
              }
              if (this.countpage === this.listF.length) {
                setTimeout(() => {
                  this.showstart = false;
                  this.soundscorrect = false;
                  this.changecolor=false;
                  this.$router.push({
                    //核心语句
                    path: "/presult", //跳转的路径
                    query: {
                      type: this.type,
                      partName: 'advanced6',
                      account: this.account,
                      menuId: this.menuId,
                      unitsId: this.unitsId,
                      unit: this.unit,
                      insert:this.insert
                    }
                  });
                },2000);
              } else {
                setTimeout(() => {
                  this.showstart = false;
                  this.soundscorrect = false;
                  this.changecolor=false;
                  this.onef = true;
                  this.list1[anwserIndex].bluesuccess=0;
                  this.space="__";
                  this.countpage += 1;
                  this.centerP=[];
                }, 2000);
              }

            } else {
              /*回答错误在这里写效果*/
              this.soundsWrong=true;
              this.list1[anwserIndex].redsuccess=1;
              this.changecolor2=true;
              this.canvasObj.height = this.canvasH;
              if (this.countpage-1 !==9){
                this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-1][0].phonics_detail_id+",'ansResult':0},";
              }else{
                this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-1][0].phonics_detail_id+",'ansResult':0}]";
              }
              setTimeout(() => {
                this.soundsWrong=false;
                this.list1[anwserIndex].redsuccess=0;
                this.changecolor2=false;
                for(var l=0;l<this.list1.length;l++){
                  if(this.list1[l].score==='1'){
                    this.list1[l].successful=1;
                    this.space=this.list1[l].name;
                  }else {
                    this.list1[l].fail=1;
                  }
                }
                if (this.countpage === this.listF.length) {
                  setTimeout(() => {
                    this.$router.push({
                      //核心语句
                      path: "/presult", //跳转的路径
                      query: {
                        type: this.type,
                        partName: 'advanced6',
                        account: this.account,
                        menuId: this.menuId,
                        unitsId: this.unitsId,
                        unit: this.unit,
                        insert:this.insert
                      }
                    });

                  },2000);
                } else {
                  setTimeout(() => {
                    this.onef = true;
                    this.countpage += 1;
                    this.space="__";
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
      },
      /*answer(li){
        console.log(li);
        this.zhezhao=true;
        //选中正确答案
        if(li.score===1){
          this.soundscorrect = true;
          li.bluesuccess=1;
          this.showstart = true;
          this.countpage += 1;
          this.account+=1;
          setTimeout(() => {
            this.showstart = false;
            this.soundscorrect = false;
            //还存在剩余题目
            if (this.countpage <= this.listF.length) {
              this.onef = true;
              li.bluesuccess=0;
            } else {
              //题目已经全部答完，跳转结算
              setTimeout(() => {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    type: this.type,
                    partName: 'advanced6',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit
                  }
                });
              }, 1000);
            }
          }, 2000);
          //答错题目
        }else{
          this.soundsWrong = true;
          this.countpage += 1;
          li.redsuccess=1;
          setTimeout(() => {
            this.soundsWrong = false;
            li.redsuccess=0;
            for(var l=0;l<this.list1.length;l++){
              if(this.list1[l].score==='1' ||this.list1[l].score===1){
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
                    partName: 'advanced6',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit
                  }
                });
              }
            }, 1500);
          }, 2000);
        }
      },*/
      change() {
        if (this.onef === false) {
          document.getElementById("videos").play();
        }
      },
      changesett() {
        if(this.onef===false){
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
            }, 500);
          }
        }
      },
      pop() {
        this.popp = !this.popp;
      },
      help() {
        if (this.onef == false) {
          this.spanp = "Select the correct blend.";
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
          path: '/advmenu', //跳转的路径
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
      this.show = localStorage.getItem('gamemusic') !== "false";
      this.$axios.post(this.url, qs.stringify({
        menuId: this.menuId,
        num:26
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
        for(var l=0;l<this.list1.length;l++){
          this.list1[l].successful=0;
          this.list1[l].fail=0;
          if(this.list1[l].score==="1"){
            this.audio = this.pic + this.list1[l].audio;
          }
        }
        if (this.onef === true) {
          this.showNum = true;
          setTimeout(() => {
            this.onef = false;
            //this.video = true;
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
    width: 50%;
    float: left;
    margin-top: 5%;
    margin-left: -3%;
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
      margin-left: 2.5%;
      margin-right: 2.5%;
    }
  }

  @-webkit-keyframes myPlay {
    0% {
      margin-left: 2.5%;
      margin-right: 2.5%;
    }
  }

  @-moz-keyframes myPlay {
    0% {
      margin-left: 2.5%;
      margin-right: 2.5%;
    }
  }


  .rightbox {
    width: 50%;
    height: 80%;
    float: left;
    margin-top: 8%;
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

  .advanced6 {
    width: 100%;
    height: 100%;
    /*background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/interbg3.png");*/
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
    /*height: 40%;*/
    /*width: 40%;*/

  }
  .changeButton {
    position: absolute;
    height: 25%;
    width: 15%;
    left: 32%;
    top: 21%;
    z-index: 100;
  }
  .yesbutton {
    height: 100%;
    border: none;
    background: none;
    display: block;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    img{
      height: auto;
      width: 100%;
    }
  }

  .buttons {
    width: 100%;
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
    color: #8f532e;
    text-align: center;
    line-height: 50px;
    font-size: 3rem;
    font-family: pepper;
    margin: 1.5rem 5%;
  }
  .item{
    width: 40%;
    border: none;
    height: 130px;
    background: none;
    /*background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/yun.png");*/
    /*background-repeat: no-repeat;*/
    /*background-size: contain;*/
    /*background-position: center;*/
    display: block;
    position: absolute;

  }

  .listitems1 {
    bottom: 1rem;
    left: -20%;
    background-image: url("../../assets/image/yellowball2.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .listitems2 {
    right: 35%;
    bottom: 1rem;
    background-image: url("../../assets/image/yellowball.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .listitems3 {
    right: 0%;
    bottom: 7rem;
    background-image: url("../../assets/image/yellowball2.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .pinkfont {
    color: #ff391c;
  }
  .bluefont{
    color: #007BB8;
  }
  .start2 {
    position: absolute;
    top: -7%;
    width: 50%;
    right: 5%;
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

  @media screen and (min-device-height: 482px) and (max-device-height: 569px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 482px) and (max-device-height: 569px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 482px) and (max-width: 569px) {

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

  @media screen and (min-device-height: 570px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 570px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 570px) and (max-width: 736px){
    .changeButton {
      position: absolute;
      height: 25%;
      width: 16%;
      left: 31%;
      top: 21%;
      z-index: 100;
    }
  }

  @media screen and (min-device-height: 737px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 737px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 737px) and (max-width:811px) {
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

  @media screen and (min-device-height: 812px) and (max-device-height: 895px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 812px) and (max-device-height: 895px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 812px) and (max-width:895px) {
    .changeButton {
      position: absolute;
      height: 25%;
      width: 16%;
      left: 27%;
      top: 25%;
      z-index: 100;
    }

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
    .leftbox{
      margin-left: -5%;
    }
    .yesbutton img{
      width:90%;
    }
    .rightbox{
      margin-top: 6%;
    }
  }

  @media screen and (min-device-height: 895px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 895px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 895px) and (max-width:1023px) {
    .changeButton {
      position: absolute;
      height: 25%;
      width: 16%;
      left: 31%;
      top: 27%;
      z-index: 100;
    }
    .twomenu {
      padding-top: 14%;
    }

    .fontsizes {
      margin-top: 17%;
    }

    .rightbox{
      margin-top: 5%;
    }

    .start2 {
      top: -25%;
    }

    .withcolor {
      height: 70%;
    }

  }

  @media screen and (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1024px)and (max-width: 1600px) {
    .changeButton {
      position: absolute;
      height: 18%;
      width: 15%;
      left: 32%;
      top: 38%;
      z-index: 100;
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
      bottom: 15%;
      left: 4%;
      position: absolute;
      font-size: xx-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      /*transform: scale(1.2);*/
    }

    .rightbox {
      margin-top: 5%;
    }
    .leftbox{
      margin-top: 20%;
      /*margin-left: -9%;*/
    }
    .item{
      height: 180px;
    }
    /*.listitems1{*/
      /*bottom: 30%;*/
    /*}*/
    .listitems3{
      bottom: 10rem;
    }
    /*.yes{*/
      /*width: 50%;*/
    /*}*/
    .listgroup{
      font-size: 4rem;

    }

    .start2 {
      top: 5%;
      right: 10%;
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

  @media only screen and (min-device-height: 1366px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1366px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1366px) and (max-width: 1600px) {
    .changeButton {
      position: absolute;
      height: 18%;
      width: 15%;
      left: 32%;
      top: 38%;
      z-index: 100;
    }
    .listitems3{
      bottom: 13rem;
    }
    .item{
      height: 230px;
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
      margin-left: 4%;
      transform: scale(1.6);
    }
    .rightbox {
      margin-top: 3%;
    }

    /*.leftbox{*/
      /*margin-top: 5%;*/
      /*margin-left: -15%;*/
    /*}*/
    .item{
      height: 320px;
    }
    .listitems1{
      left: -10%;
    }
    .listitems2{
      right: 30%;
    }
    .listitems3{
      bottom: 20rem;
    }
    .listgroup{
      font-size: 6rem;
      /*font-family: pepper;*/
      /*margin: 4rem 5%;*/
    }
    /*.yes{*/
      /*width: 60%;*/
      /*margin: 0 20%;*/
    /*}*/

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
    /*.yesbutton {*/

      /*img{*/
        /*height: 60%;*/
        /*width: auto;*/
      /*}*/
    /*}*/
  }
</style>
