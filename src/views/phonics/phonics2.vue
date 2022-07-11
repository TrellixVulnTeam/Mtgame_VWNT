<template>
  <div class="phonics2">
    <span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic">
        <source src="../../assets/video/gamemusic.mp3"></audio>
    </span>
    <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height:100%;display:block;position: absolute;">-->

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
          <div v-if="!onef"  style="width: 100%; height: 90%;text-align: center;display:block;position: fixed;">
            <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; z-index: -1;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <div v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
            <!--<audio v-if="video" autoplay="autoplay">-->
              <!--<source :src="audio" v-if="showimg1"></audio>-->

            <!-- <audio v-if="video" autoplay="autoplay">
                <source :src="audio2" v-if="showimg2"></audio> -->
            <audio v-if="soundsWrong" autoplay="autoplay">
              <source src="../../assets/video/Wrong.mp3" ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay">
              <source src="../../assets/video/correct.mp3" ></audio>
            <div id="Box">
              <div id="imgBox" style="position: absolute;z-index: -1;">
                <div class="imgsty">
                  <!-- <img src='../../assets/image/a2.png' v-if="showimg1" style="position: absolute;width: 80%;top: 10%;left: 10%;height: 80%;"> -->
                   <!-- <img id="img2" :src="yuantu" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;display: none;"> -->
                  <!-- <img id="img1" :src="this.list1[0].image" v-if="showimg1" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;" crossOrigin="Anonymous"> -->
                  <img id="img1" src="../../assets/image/A1.png" v-if="showimg1&&this.list1[0].name==='A'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/B1.png" v-if="showimg1&&this.list1[0].name==='B'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/C1.png" v-if="showimg1&&this.list1[0].name==='C'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/D1.png" v-if="showimg1&&this.list1[0].name==='D'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/E1.png" v-if="showimg1&&this.list1[0].name==='E'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/F1.png" v-if="showimg1&&this.list1[0].name==='F'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/G1.png" v-if="showimg1&&this.list1[0].name==='G'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/H1.png" v-if="showimg1&&this.list1[0].name==='H'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/I1.png" v-if="showimg1&&this.list1[0].name==='I'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/J1.png" v-if="showimg1&&this.list1[0].name==='J'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/K1.png" v-if="showimg1&&this.list1[0].name==='K'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/L1.png" v-if="showimg1&&this.list1[0].name==='L'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/N1.png" v-if="showimg1&&this.list1[0].name==='N'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/M1.png" v-if="showimg1&&this.list1[0].name==='M'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/O1.png" v-if="showimg1&&this.list1[0].name==='O'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/P1.png" v-if="showimg1&&this.list1[0].name==='P'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/Q1.png" v-if="showimg1&&this.list1[0].name==='Q'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/R1.png" v-if="showimg1&&this.list1[0].name==='R'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/S10(1).png" v-if="showimg1&&this.list1[0].name==='S'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/T1.png" v-if="showimg1&&this.list1[0].name==='T'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/U1.png" v-if="showimg1&&this.list1[0].name==='U'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/V1.png" v-if="showimg1&&this.list1[0].name==='V'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/W1.png" v-if="showimg1&&this.list1[0].name==='W'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/X1.png" v-if="showimg1&&this.list1[0].name==='X'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/Y1.png" v-if="showimg1&&this.list1[0].name==='Y'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/Z1.png" v-if="showimg1&&this.list1[0].name==='Z'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">

                  <img id="img1" src="../../assets/image/a2.png" v-if="showimg1&&this.list1[0].name==='a'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/b2.png" v-if="showimg1&&this.list1[0].name==='b'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/c2.png" v-if="showimg1&&this.list1[0].name==='c'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/d2.png" v-if="showimg1&&this.list1[0].name==='d'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/e2.png" v-if="showimg1&&this.list1[0].name==='e'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/f2.png" v-if="showimg1&&this.list1[0].name==='f'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/g2.png" v-if="showimg1&&this.list1[0].name==='g'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/h2.png" v-if="showimg1&&this.list1[0].name==='h'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/i2.png" v-if="showimg1&&this.list1[0].name==='i'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/j2.png" v-if="showimg1&&this.list1[0].name==='j'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/k2.png" v-if="showimg1&&this.list1[0].name==='k'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/l2.png" v-if="showimg1&&this.list1[0].name==='l'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/n2.png" v-if="showimg1&&this.list1[0].name==='n'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/m2.png" v-if="showimg1&&this.list1[0].name==='m'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/o2.png" v-if="showimg1&&this.list1[0].name==='o'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/p2.png" v-if="showimg1&&this.list1[0].name==='p'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/q2.png" v-if="showimg1&&this.list1[0].name==='q'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/r2.png" v-if="showimg1&&this.list1[0].name==='r'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/S10(2).png" v-if="showimg1&&this.list1[0].name==='s'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/t2.png" v-if="showimg1&&this.list1[0].name==='t'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/u2.png" v-if="showimg1&&this.list1[0].name==='u'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/v2.png" v-if="showimg1&&this.list1[0].name==='v'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/w2.png" v-if="showimg1&&this.list1[0].name==='w'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/x2.png" v-if="showimg1&&this.list1[0].name==='x'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/y2.png" v-if="showimg1&&this.list1[0].name==='y'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">
                  <img id="img1" src="../../assets/image/z2.png" v-if="showimg1&&this.list1[0].name==='z'" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">

                  <img id="png" :src="pngimg" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;display: none;">
                </div>
                <!-- <button class="astyle"  v-if="!showimg1">
                <img src="../../assets/image/speat.png" @click="change()"><p>{{this.list1[0].name2}}</p>
              </button> -->
              </div>
              <canvas id='canvas' @mousedown="canvasDown($event)" @mouseup="canvasUp($event)"
                @mousemove="canvasMove($event)" @touchstart="canvasDown($event)" @touchend="canvasUp($event)"
                @touchmove="canvasMove($event)"></canvas>
              <img src="../../assets/image/StarOrange.png" v-show="showstart" style="position: absolute;width: 60%;top: 10%;left: 20%;height: 80%;">

               <!-- <img id="img1" :src='this.list1[0].image'  style="position: absolute;width: 80%;top: 10%;left: 10%; display: none;height: 80%;" crossorigin="anonymous"> -->


              <!-- <img id="png2" :src='pngimg2' style="position: absolute;left: 0;top: 0;width: 100%;height: 100%;"> -->
            </div>
            <div style="width: 20%;height: 100%;position: absolute;top: 0;right: 0;float: right;">
                <button @click="clear" class="deleteclear">Clear</button>
                <button @click="recognizeimage" class="confirmsty">Enter</button>
            </div>
          </div>

        </transition>
        <div class="settinglist">
          <img src="../../assets/image/pbar.png" style="width: 100%;bottom: 0;height: 100%;">
          <span class="fontsize">Use your finger and trace the letter.</span>
          <div @click="$tips(true);changesett()">
            <img src="../../assets/image/p-pause.png" class=" repeat">
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
        <img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/excercise2.gif">
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
<!-- <script src="./static/tesseract/tesseract.min.js"></script> -->
<script>
var qs = require('qs');

  // import OCRAD from "../../../ocrad.js";

  export default {
    name: "phonics2",

    watch: {
      'onef': function(newVal) {
        if (this.onef === true) {
          this.countpage += 1;
          this.list1 = this.listF[this.countpage - 1];
          this.name = this.list1[0].name;

          // this.audio = this.pic + this.list1[0].audio;
          // this.audio2 = this.pic + this.list1[0].sound2;
          // for (var i = 0; i < this.list1.length; i++) {

          this.list1[0].image = this.pic + this.list1[0].image;
          // this.list1[0].image2 = this.pic + this.list1[0].image2;
          // }
          if (this.onef === true) {
            setTimeout(() => {
              this.onef = false;
              this.showimg1 = true;
              this.resize();
            }, 1000);
          }
        }
      },
      // 'video': function(newVal) {
      //   if (this.video == true) {
      //     setTimeout(() => {
      //       this.video = false;
      //     }, 4000);
      //   }
      // }

    },
    data() {
      return {
        popp: false,
        drag: false,
        lastX: '',
        lastY: '',
        zhezhao: true,
        showstart: false,
        showimg1: true,
        showimg2: false,
        ruleimg8: false,
        ruleimg10: false,
        ruleimg4: false,
        ruleimg15: false,
        ruleimg25: false,
        ruleimg12: false,
        name: '',
        yuantu: '',
        spanp: '',
        imageURL:'',
        progress: '', //进度
        status: '', //状态
        img_src: '',
        // ctx: '',
        // myCanvas: '',
        list1: [],
        list2: [],
        audio: '',
        audio2: '',
        soundsWrong: false,
        soundscorrect: false,
        video: false,
        fade: 'fade',
        canvasObj: null,
        canvasH: null,
        pngimg: '',
        pngimg2: '',
        canvasMoveUse: true,
        centerP: [], // 存储数组图片中心点的位置
        // 配置参数
        context: {},
        config: {
          lineWidth: 30,
          lineColor: "#F27A50",
          // shadowBlur: 1
        },

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
        url: '/phonics/phonics',
        url2: "/phonics/phonics3s",
        levels: 0,
        page: this.page++,
        type: 'phonics2',
        onef: true,
        firstanswer: false,
        canvasmove: false,
        gamename: '',
        timeurl: '/user/playTime',
        insert:'[',
      }
    },
    mounted() {
      // setTimeout(() => {
      //   if (this.list1.length > 0) {
      //     //
      //   }
      // }, 1000);
    },
    methods: {

      bodyScroll(event) {
        event.preventDefault();
      },
      change() {
        if (this.onef === false) {
          this.video = true;
        }
      },

      changesett() {
        if (this.onef == false) {
          // this.zhezhao = false;
          setTimeout(() => {
            this.resume = !this.resume;
          }, 1000);
        }
      },
      resize() {
        setTimeout(() => {
          if (this.list1.length > 0) {
            const canvas = document.getElementById('canvas'); // 初次进来初始化画布
            const box = document.getElementById('Box');
            const imgBox = document.getElementById('imgBox');
            document.getElementById('imgBox').style.width=box.clientWidth+"px";
            document.getElementById('imgBox').style.height=box.clientHeight+"px";
            let imgsty = document.getElementsByClassName('imgsty');
            this.canvasObj = canvas;
            this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
            canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
            canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度

            this.context = canvas.getContext('2d');

            this.setCanvasStyle();
            this.zhezhao = false; this.video = true;

            const c = document.getElementById('canvas');
            const o = c.getContext('2d');
            const bgImg2 = document.getElementById('img1');
            o.drawImage(bgImg2, c.width * 0.2, c.height * 0.1, c.width * 0.6, c.height * 0.8);

//             let image = new Image();
//             var timestamp = new Date().getTime();
//
//             // image.crossOrigin = 'Anonymous'; // 支持跨域图片
//             image.setAttribute("crossOrigin",'Anonymous');
//             image.src = this.list1[0].image+ '?k' + timestamp;
//             console.log(image.src);
//
//             o.drawImage(image, c.width * 0.2, c.height * 0.1, c.width * 0.6, c.height * 0.8);
//             this.yuantu = c.toDataURL('image/png'); // 可选其他值 image/jpeg
//             console.log(this.yuantu);
//              o.clearRect(0, 0, c.width, c.height);

            const reg2 = new Image();
            reg2.src = c.toDataURL("image/png");
            this.yuantu = reg2.src;
            o.clearRect(0, 0, c.width, c.height);
          }
        }, 2000);

      },
//
      clear(){
        this.pngimg='';
        const c = document.getElementById('canvas');
        const o = c.getContext('2d');
        o.clearRect(0, 0, c.width, c.height);
      },
      recognizeimage() {
        if(this.pngimg !== ''){
        this.zhezhao=true;
        // document.getElementById('transcription').innerText = "(Recognizing...)"
          const c = document.getElementById('canvas');
          //var o = c.getContext('2d');注释
        //var bgImg2 = document.getElementById('img1');注释
        //o.drawImage(bgImg2, c.width * 0.2, c.height * 0.1, c.width * 0.6, c.height * 0.8);注释

        // let image = new Image();
        // var timestamp = new Date().getTime();
        // // image.crossOrigin = 'Anonymous'; // 支持跨域图片
        // image.setAttribute("crossOrigin",'Anonymous');
        // image.src = this.list1[0].image+ '?k' + timestamp;
        // console.log(image.src);
        // image.onload = function() {
        //      o.drawImage(image, c.width * 0.2, c.height * 0.1, c.width * 0.6, c.height * 0.8);
        // };

        //var bgImg = document.getElementById('png');注释
        //o.drawImage(bgImg, 0, 0, c.width, c.height);注释
          const reg = new Image();
          // reg.setAttribute("crossOrigin",'Anonymous');
        reg.src = c.toDataURL("image/png");
        this.$axios.post(this.url2, qs.stringify({
          imageFile: reg.src,
          image: this.yuantu,
        })).then(res => {
          if (res.data.success === true) {
            this.account += 1;
            this.soundscorrect = true;
            this.showstart = true;
            if (this.countpage-1 !==9){
              this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-1][0].phonics_detail_id+",'ansResult':1},";
            }else{
              this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-1][0].phonics_detail_id+",'ansResult':1}]";
            }
            setTimeout(() => {
              this.soundscorrect = false;
              this.showstart = false;
              if (this.countpage < this.question) {
                // this.video = true;
                this.onef = true;
                this.pngimg = '';
                // this.showimg2=true;
              } else {
                this.$router.push({
                  //核心语句
                  path: "/presult", //跳转的路径
                  query: {
                    //路由传参时push和query搭配使用 ，作用时传递参数
                    type: this.type,
                    partName: 'phonics2',
                    account: this.account,
                    menuId: this.menuId,
                    unitsId: this.unitsId,
                    unit: this.unit,
                    insert:this.insert
                  }
                });
              }
            }, 1500)

            // console.log(that.zhezhao);
            // this.setCanvasStyle();
          } else {
              this.soundsWrong = true;
            if (this.countpage-1 !==9){
              this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-1][0].phonics_detail_id+",'ansResult':0},";
            }else{
              this.insert = this.insert+"{'phonics_detail_id':"+this.listF[this.countpage-1][0].phonics_detail_id+",'ansResult':0}]";
            }
              setTimeout(() => {
                this.soundsWrong = false;
                if (this.countpage < this.question) {
                  this.onef = true;
                  this.pngimg = '';
                } else {
                  this.$router.push({
                    //核心语句
                    path: "/presult", //跳转的路径
                    query: {
                      //路由传参时push和query搭配使用 ，作用时传递参数
                      type: this.type,
                      partName: 'phonics2',
                      account: this.account,
                      menuId: this.menuId,
                      unitsId: this.unitsId,
                      unit: this.unit,
                      insert:this.insert
                    }
                  });
                }

              }, 1500)

          }
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
        }

      },
      convertCanvasToImage(canvas) {
        if (this.canvasmove === false) {
          const c = document.getElementById('canvas');
          const o = c.getContext('2d');
          const image = new Image();
          image.src = c.toDataURL("image/png");
          // image.style.backgroundColor="white";
          // var b64 = imagesrc.substring(22);
          // console.log(b64);
          this.pngimg = image.src;
          // setTimeout(() => {
          // this.recognizeimage();
          //  }, 2000)
        }
      },

      pop() {
        this.popp = !this.popp;
      },
      help() {
        if (this.onef === false) {
          this.spanp = "Use your finger and trace the letter.";
          this.popp = !this.popp;
          if (this.items1[0].rank === 0) {
            this.ruleimg15 = true;
            this.ruleimg25 = false;
          } else if (this.items1[0].rank === 1) {
            this.ruleimg15 = false;
            this.ruleimg25 = true;
          }
        }
      },
      isPc() {
        const userAgentInfo = navigator.userAgent;
        const Agents = ['Android', 'iPhone', 'iPhoneX', 'iPhoneXR', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
        let flag = false;
        // for (let v = 0; v < Agents.length; v++) {
        //   	if (userAgentInfo.indexOf(Agents[v]) > 0) {
        //     	flag = false;
        //     	break;
        //   	}
        // }
        return flag;
      },
      // 在canvas中鼠标按下
      canvasDown(e) {
        this.canvasmove = true;
        if (e.touches && e.touches.length == 1) {
          this.canvasMoveUse = true;
          const t = e.target;
          let canvasX;
          let canvasY;
          // 由于手机端和pc端获取页面坐标方式不同，所以需要做出判断
          if (this.isPc()) {
            canvasX = e.clientX - t.parentNode.offsetLeft;
            canvasY = e.clientY - t.parentNode.offsetTop;
          } else {
            //console.log(e.changedTouches);
            if (e.changedTouches) {
              canvasX = e.changedTouches[0].clientX - t.parentNode.offsetLeft;
              canvasY = e.changedTouches[0].clientY - t.parentNode.offsetTop;
            }
          };
          this.context.beginPath();
          this.context.moveTo(canvasX, canvasY);
          this.context.stroke();
        } else {
          this.canvasMoveUse = false;

        }

      },

      // canvas中鼠标移动
      canvasMove(e) {
        this.canvasmove = true;
        if (this.canvasMoveUse) {
          // 只有允许移动时调用
          const t = e.target;
          let canvasX;
          let canvasY;
          // 由于手机端和pc端获取页面坐标方式不同，所以需要做出判断
          if (this.isPc()) {
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

      // canvas中鼠标放开
      canvasUp(e) {
        this.context.closePath();
        let imgsty = document.getElementsByClassName('imgsty');
        this.canvasMoveUse = false;
        this.canvasmove = false;
        // this.canvasObj.height = this.canvasH; // 动态赋值canvas的高度
        // this.setCanvasStyle();
        // setTimeout(() => {
        if (this.canvasmove === false) {
          const canvas = document.getElementById('canvas');
          this.convertCanvasToImage(canvas)
        }
        // }, 3000)
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
          path: '/phonicsmenu', //跳转的路径
          query: {
            unitsId: this.unitsId,
            unit: this.unit
          }
        })
      },
      sound() {
        this.show = !this.show;
        if (this.show === false) {
          localStorage.setItem("gamemusic", "false");
        } else {
          localStorage.setItem("gamemusic", "true");
        }
      },
      // 设置绘画配置
      setCanvasStyle() {
        if(997<document.body.offsetWidth&&document.body.offsetWidth<1025){
         this.context.lineWidth =55;
        // this.context.shadowBlur = this.config.shadowBlur;
        this.context.shadowColor = this.config.lineColor;
        this.context.strokeStyle = this.config.lineColor;
        }else if(1024<document.body.offsetWidth&&document.body.offsetWidth<1356){
          this.context.lineWidth = 65;
        // this.context.shadowBlur = this.config.shadowBlur;
        this.context.shadowColor = this.config.lineColor;
        this.context.strokeStyle = this.config.lineColor;
        }else if(997>document.body.offsetWidth&&document.body.offsetWidth>895){
          this.context.lineWidth = 38;
        this.context.shadowColor = this.config.lineColor;
        this.context.strokeStyle = this.config.lineColor;
        }else if(document.body.offsetWidth>1355){
          this.context.lineWidth = 85;
        this.context.shadowColor = this.config.lineColor;
        this.context.strokeStyle = this.config.lineColor;
        }else{
          this.context.lineWidth = this.config.lineWidth;
        // this.context.shadowBlur = this.config.shadowBlur;
        this.context.shadowColor = this.config.lineColor;
        this.context.strokeStyle = this.config.lineColor;
        }

      },

    },
    destroyed() {
      document.body.removeEventListener('touchmove', this.bodyScroll, {
        passive: false
      });
      window.removeEventListener('popstate', this.gomemu, false);
    },

    created() { //生命周期里接收参数
      this.pic = this.$axios.defaults.baseURL2;
      this.unit = this.$route.query.unit;
      this.unitsId = this.$route.query.unitsId;
      this.menuId = this.$route.query.menuId; //接受参数关键代码
      localStorage.setItem('gamename', this.gamename);
      this.gamename = this.$route.query.name;
      const timestamp = (new Date()).getTime();
      localStorage.setItem('startTimeid', timestamp);
      if (localStorage.getItem('gamemusic') === "false") {
        this.show = false;
      } else {
        this.show = true;
      }

      this.$axios.post(this.url, qs.stringify({
        menuId: this.menuId,
        num: 3
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
        this.name = this.list1[this.countpage - 1].name;
        this.audio = this.pic + this.list1[0].audio;
        this.audio2 = this.pic + this.list1[0].sound2;
        // for (var i = 0; i < this.list1.length; i++) {

        this.list1[0].image = this.pic + this.list1[0].image;
        this.list1[0].image2 = this.pic + this.list1[0].image2;
        // }

        if (this.onef === true) {
          setTimeout(() => {
            this.video = true;
            this.onef = false;
          }, 1000);
          this.resize();
        }

      }, res => {
        alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      });
      // 统计时间
      this.$axios.post(this.timeurl, qs.stringify({
        id: timestamp,
        time: timestamp,
        name: this.gamename,
        unit:this.unit,
        level:localStorage.getItem('level'),
        cources:localStorage.getItem('cources'),
        studentId: localStorage.getItem('studentId')
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
  // @import url('myscript/dist/myscript.min.css');
  .body {
    padding: 0;
  }

  .phonics2 {
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
    display: block;
    overflow: hidden;
  }

  .imgsty {
    margin-top: 8%;

    img {
      z-index: -1;
      // width: 60%;
      // top: 10%;
      // left: 20%;
      position: absolute;
      // height: 80%;
    }
  }
  .deleteclear{
    width: 70%;
    height: 20%;
    color: white;
    font-size: 1.5rem;
    font-family: pepper;
    background: none;
    border: none;
    padding-left: 10px;
    margin-top: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url(../../assets/image/deletebg2.png);
  }
  .confirmsty{
    width: 100%;
    height: 40%;
    color: white;
    font-size: 1.5rem;
    font-family: pepper;
    background: none;
    border: none;
    margin-top: 10%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url(../../assets/image/enterbg.png);
  }

  .writing-container {
    // height: 100%;
    // width: 100%;
    // position: absolute;
    min-height: 400px;
    min-width: 600px;
  }

  #editor {
    width: 100%;
    height: 100%;
  }

  .astyle {
    border: none;
    background: none;
    color: white;

    img {
      width: 20%;
    }

    p {
      display: inline-block;
      vertical-align: top;
      font-size: 2rem;
      margin: 0.5rem;
    }
  }
  #Box{
    width: 350px;
    height: 300px;
    position: relative;
    float: left;
    margin: 5% 12%;
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

    .imgsty {
      // img{
      //   margin-top: 8%;
      //   width: 20%;
      // }
    }
    .deleteclear{
      height: 25%;
      font-size: 2rem;
    }
    .confirmsty{
      font-size: 2rem;
    }
    .astyle {
      margin-top: 20px;

      img {
        width: 30%;
      }

      p {
        font-size: 3rem;
        margin: 1.5rem;
      }
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
    #Box{
      width: 650px;
      height: 600px;
      position: relative;
      float: left;
      margin: 5%;
    }

  }

  @media screen and (min-width: 1355px) and (max-width: 1600px){
    .imgsty {

      // img{
      //   width: 20%;
      //   margin-top: 8%;
      // }

    }
    .fontsizes {
      margin-top: 30%;
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

     .deleteclear{
       height: 30%;
       margin-top: 15%;
       font-size: 3rem;
       padding-left: 20px;
     }
     .confirmsty{
       font-size: 3rem;
     }
    .astyle {
      margin-top: 20px;

      img {
        width: 40%;
      }

      p {
        font-size: 4rem;
        margin: 2rem;
      }
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
    #Box{
      width: 900px;
      height: 800px;
      position: relative;
      float: left;
      margin: 5%;
    }
  }

  @media screen and (min-width: 735px) and (max-width:811px) {

    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }

    .imgsty {
      margin-top: 5%;
    }
    #Box{
      width: 400px;
      height: 300px;
      position: relative;
      float: left;
      margin: 5% 12%;
    }

  }

  @media screen and (min-width: 812px) and (max-width:895px) {

    .twomenu {
      padding-top: 14%;
    }

    .fontsizes {
      margin-top: 17%;
    }

    .imgsty {
      margin-top: 5%;
    }
    .deleteclear{
      height: 14%;
    }

    .withcolor {
      height: 70%;
    }
    #Box{
      width: 400px;
      height: 300px;
      position: relative;
      float: left;
      margin: 3% 15%;
    }
  }

  @media screen and (min-width: 895px) and (max-width:1023px) {
    .twomenu {
      padding-top: 14%;
    }

    .fontsizes {
      margin-top: 17%;
    }
    .deleteclear{
          width: 50%;
      height: 14%;
    }

    .withcolor {
      height: 70%;
    }

    .imgsty {
      margin-top: 5%;
    }
    #Box{
      width:500px;
      height: 350px;
      position: relative;
      float: left;
      margin: 0 10%;
    }
  }

  @media screen and (min-width: 1600px){
    .fontsizes {
      margin-top: 20%;
      font-size: 3rem;
    }

    .deleteclear{
      height: 30%;
      width: 52%;
      margin-top: 15%;
      font-size: 3rem;
      padding-left: 20px;
    }
    .confirmsty{
      font-size: 3rem;
    }
    .astyle {
      margin-top: 20px;

      img {
        width: 40%;
      }

      p {
        font-size: 4rem;
        margin: 2rem;
      }
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
    #Box{
      width: 80%;
      height: 100%;
      position: absolute;
      float: left;
      margin: 0 ;
    }
  }
</style>
