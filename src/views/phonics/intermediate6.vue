<template>
  <div class="intermediate6">
		<span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
		</span>
    <img src="../../assets/image/interbg7.png"  style="width: 100%; z-index: -2; height:100%;display:block;position: absolute;">

    <transition name="fades">
      <div class="contain" v-if="!resume3">
        <img src="../../assets/image/irightback.png"  @click="$tips(true);gomemu()" class="backbutton"/>
        <img src="../../assets/image/ihelp.png"  @click="$tips(true);help()" class="helpbutton"/>
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <!--<img src="../../assets/image/phonicsbg.png"  style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{ this.allquestion}}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div v-show="!onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <!--<img src="../../assets/image/shuzhi.png" style="width: 100%;display:block;z-index: -1; position: absolute;">-->
            <!--<img src="../../assets/image/phonicsbg.png"  style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;">-->
            <!--<div  v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>-->
            <audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3" ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3" ></audio>

            <audio  autoplay="autoplay" v-if="video"><source :src="truesound" ></audio>
            <div class="longthink">
            <div class="yun">
            <button  @click="listen()">
            <img src="../../assets/image/soundrepeat.png" style="width: 85%"/>
            </button>
            </div>

            </div>
            <div class="long">
              <button type="button" class="one"  @click="select(buttonlist[0])" v-bind:class="{buttonchange:buttonlist[0].color1,changeblue:buttonlist[0].color2,changered:buttonlist[0].color3}">
                <span>{{buttonlist[0].name}}</span>
              </button>
              <button type="button" class="two" @click="select(buttonlist[1])" v-bind:class="{buttonchange:buttonlist[1].color1,changeblue:buttonlist[1].color2,changered:buttonlist[1].color3}">
                <span>{{buttonlist[1].name}}</span>
              </button>
              <button type="button" class="three" @click="select(buttonlist[2])" v-bind:class="{buttonchange:buttonlist[2].color1,changeblue:buttonlist[2].color2,changered:buttonlist[2].color3}">
                <span>{{buttonlist[2].name}}</span>
              </button>
              <button type="button" class="four" @click="select(buttonlist[3])" v-bind:class="{buttonchange:buttonlist[3].color1,changeblue:buttonlist[3].color2,changered:buttonlist[3].color3}">
                <span>{{buttonlist[3].name}}</span>
              </button>
            <img src="../../assets/image/yilong.png"/>
              <button class="confirmbut" @click="confirms()">confirm</button>
            </div>
            <img src="../../assets/image/StarOrange.png" class="answerSucc" v-bind:class="{disanswer:successful}"/>
            <!--<div class="bottomquestion"><span class="stroke">GI</span></div>-->
            <!--<div>-->
            <!--<img class="repeatsound" src="../../assets/image/makesound.png" @click="listen()">-->
            <!--<img class="rightbird" src="../../assets/image/bird.png">-->
            <!--</div>-->
          </div>
        </transition>
        <div class="settinglist">
          <img src="../../assets/image/interbar.png" style="width: 100%;bottom: 0;height: 100%;">
          <span class="fontsize">Listen to the word. Then, put the letters in the correct order.</span>
          <div @click="$tips(true);changesett()">
            <img src="../../assets/image/interpause.png" class=" repeat">
          </div>
        </div>
      </div>
    </transition>
    <div class='popContainer' v-show="popp">
      <p class="spanp">{{spanp}}</p>
      <button class="roleimg">
        <img src="../../assets/image/p-rule.png" style="height: 100%;"/>
      </button>
      <div class="withcolor">
        <div class="close"  @click="$tips(true);pop()">
          <img src="../../assets/image/pcloce.png">
        </div>
        <img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/intermediate6.gif">


      </div>
    </div>
    <transition name="fades">
      <div class="about" v-if="resume3">
        <div class="twomenu">
          <div>
            <img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show"  @click="$tips(true);sound()"/>
            <img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show"  @click="$tips(true);sound()"/>
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

  var qs = require('qs');
  export default {
    name: "intermediate6",
    watch: {
      'onef': function(newVal) {
        if(this.onef === true) {
          setTimeout(() => {
            this.onef = false;
            this.zhezhao=false;
            for(var i=0;i<this.buttonlist.length;i++){
              this.buttonlist[i].color1=0;
              this.buttonlist[i].color2=0;
              this.buttonlist[i].color3=0;
            }
            this.list1 =this.listG[this.countpage-1];
            this.questionname=this.list1[0].name;
            this.falselist=this.questionname.split("");
            this.random();
            this.truesound=this.pic+this.list1[0].audio;
            // for(var i=0;i<this.list1.length;i++){
            //   this.list1[i].bg=this.pic+this.list1[i].bg;
            //   this.list1[i].audio2=this.pic+this.list1[i].audio2;
            //   this.list1[i].successful=0;
            //   this.list1[i].fail=0;
            // }

            this.video=true;
          }, 2000);
        };
      },
      'video': function(newVal) {

        if (this.video === true) {
          // var myVid = document.getElementById("titlemp3");
          // if (myVid != null) {
          //   var duration;
          //   myVid.load();
          //   myVid.oncanplay = function() {
          //     //      console.log("myVid.duration",myVid.duration);
          //     this.playtime = myVid.duration;
          //     console.log(this.playtime);
          //   }
          // }
          // var audio = document.getElementById('titlemp3');
          // audio.currentTime = 0;
          //   audio.play();
          // setTimeout(() => {
          //   this.video=false;
          // },4000);

          setTimeout(() => {
            this.video=false;
          },8000);

        }
      },
      'show1': function(newVal) {
        if (this.show1 === true) {
          setTimeout(() => {
            this.show1 = false;
          }, 4000);
        }
      },
      'show2': function(newVal) {
        if (this.show2 === true) {
          setTimeout(() => {
            this.show2 = false;
          }, 4000);
        }
      },
      'show3': function(newVal) {
        if (this.show3 === true) {
          setTimeout(() => {
            this.show3 = false;
          }, 4000);
        }
      },
    },
    data() {
      return {
        insert:'[',
        popp: false,
        spanp:'',
        playtime:1,
        countpage:1,
        shownumb:false,
        fisrtanswer:false,
        question: 1,
        questionname:'',
        successful:false,
        // list:[
        //   {
        //     questionimg:'....png',
        //     question:'_ _int',
        //     questionsound:'.....mp3',
        //     name:"gi",
        //     namesound:'.....mp3',
        //     score:1
        //   },
        //   {
        //     questionimg:'....png',
        //     question:'_ _int',
        //     questionsound:'.....mp3',
        //     name:"si",
        //     namesound:'.....mp3',
        //     score:0
        //   },
        //   {
        //     questionimg:'....png',
        //     question:'_ _int',
        //     questionsound:'.....mp3',
        //     name:"ci",
        //     namesound:'.....mp3',
        //     score:0
        //   },
        //
        // ],
        falselist:[],
        zhezhao:true,
        clickone:0,
        onename:'',
        list1: [
          {
            bg:'',
          },
          {
            bg:'',
          },
          {
            bg:'',
          }
        ],
        buttonlist:[
          {
            name:'o',
            color1:0,
            color2:0,
            color3:0,
            id:0
          },
          {
            name:'h',
            color1:0,
            color2:0,
            color3:0,
            id:1
          },
          {
            name:'m',
            color1:0,
            color2:0,
            color3:0,
            id:2
          },
          {
            name:'e',
            color1:0,
            color2:0,
            color3:0,
            id:3
          }
        ],
        show1:false,
        show2:false,
        show3:false,
        truesound:'',
        onef: true,
        fade: 'fade',
        levels: 0,
        flag2: true,
        video:false,
        soundsWrong:false,
        soundscorrect:false,
        show: true,
        resume3: false,
        id: '',
        page: this.page++,
        account: 0,
        count:0,
        unitsId:'',
        allquestion:10,
        unit:'',
        menuId:'',
        listG: [],
        type: 'intermediate',
        sum: 0,
        score:"",
        issuccess: true,
        issuccess2:false,
        issuccess1:false,
        canvasObj: null,
        canvasH: null,
        context: {},
        pic: "",
        questionsize:0,
        url: '/phonics2/phonics2',
        canvasMoveUse: true,
        centerP: [], // 存储数组图片中心点的位置
        // 配置参数
        config: {
          lineWidth: 3,
          lineColor: "#44ccc2",
          shadowBlur: 1
        },
        gamename:'',
        timeurl:'/user/playTime',
      }
    },
    created() { //生命周期里接收参数
      this.pic=this.$axios.defaults.baseURL2;
      this.unit = this.$route.query.unit;
      this.unitsId=this.$route.query.unitsId;
      this.menuId = this.$route.query.menuId; //接受参数关键代码
      this.gamename=this.$route.query.name;
      localStorage.setItem('gamename',this.gamename);
      var timestamp = (new Date()).getTime();
      localStorage.setItem('startTimeid',timestamp);
      if(localStorage.getItem('gamemusic')==="false"){
        this.show=false;
      }else{
        this.show=true;
      }

      this.$axios.post(this.url, qs.stringify({
        menuId: this.menuId,
        num:16
      })).then(res => {
        for (let i in res.data.maps) {
          this.listG.push(res.data.maps[i]); //属性
        }


        for(let i = 0,len = this.listG.length; i < len; i++){
          let currentRandom = parseInt(Math.random() * (len - 1));
          let current = this.listG[i];
          this.listG[i] = this.listG[currentRandom];
          this.listG[currentRandom] = current;
        }
        this.allquestion=this.listG.length;
        this.list1 =this.listG[this.countpage-1];
        this.questionname=this.list1[0].name;
        this.falselist=this.questionname.split("");
        this.random();
        this.truesound=this.pic+this.list1[0].audio;
        this.shownumb=true;
        // for(var i=0;i<this.list1.length;i++){
        //   this.list1[i].bg=this.pic+this.list1[i].bg;
        //   this.list1[i].audio2=this.pic+this.list1[i].audio2;
        //   this.list1[i].successful=0;
        //   this.list1[i].fail=0;
        // }
        // if(this.question.length>10){
        // 	this.questionsize=1;
        // }else{
        // 	this.questionsize=0;
        //   }
        //    this.list1=res.data.Maplist;
        // this.question=res.data.question;
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

      if(this.onef == true) {
        setTimeout(() => {
          this.onef = false;
          this.video=true;
        }, 2000);
      }

      if(window.history && window.history.pushState){
        history.pushState(null,null, document.URL);
        window.addEventListener('popstate', this.gomemu,false);
      }
      document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
    },
    mounted() {
      // setTimeout(() => {
      //   if(this.list1.length>0){
      //     const canvas = document.getElementById('canvas'); // 初次进来初始化画布
      //     let imgBox = document.getElementById('imgBox');
      //     let imgsty = document.getElementsByClassName('imgsty');
      //     for (let i=0; i<imgsty.length; i++) {
      //       let coreP = { // 获取图片中心点位置
      //         corePx: imgsty[i].offsetParent.offsetLeft + imgsty[i].offsetParent.offsetWidth/2,
      //         corePy: imgsty[i].offsetParent.offsetTop + imgsty[i].offsetParent.offsetHeight*0.75
      //       }
      //       this.centerP.push(coreP);
      //     }
      //     console.log(this.centerP);
      //     this.canvasObj = canvas;
      //     this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布;
      //     canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
      //     canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
      //     this.context = canvas.getContext('2d');
      //     this.setCanvasStyle();
      //     this.zhezhao=false;
      //   }
      // }, 4000);
    },
    destroyed() {
      document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
      window.removeEventListener('popstate',this.gomemu,false);
    },
    methods: {

      bodyScroll(event) {
        event.preventDefault();
      },
      random(){
        for(let i = 0,len = this.falselist.length; i < len; i++){
          let currentRandom = parseInt(Math.random() * (len - 1));
          let current = this.falselist[i];
          this.falselist[i] = this.falselist[currentRandom];
          this.falselist[currentRandom] = current;
        }
        if(this.falselist===this.questionname.split("")){
          this.random();

        }else {
          for(var i=0;i<this.buttonlist.length;i++){
            this.buttonlist[i].name=this.falselist[i];
          }
        }

      },
      select(li){
        if(this.clickone==0){
          li.color1=1;
          this.clickone=1;
          this.onename=li.id;
        }else if(this.clickone==1){
          var twoname=li.name;
          li.name=this.buttonlist[this.onename].name;
          this.buttonlist[this.onename].name=twoname;
          console.log(this.buttonlist);

          for(var i=0;i<this.buttonlist.length;i++){
            this.buttonlist[i].color1=0;
          }
          this.clickone=0;
        }
        // this.buttonlist
      },
      confirms(){
       var truelist=this.questionname.split("");
       var answlist=[];
        for(var i=0;i<this.buttonlist.length;i++){
          this.buttonlist[i].color1=0;
          answlist.push(this.buttonlist[i].name);
        }
        if(answlist.toString()===truelist.toString()){
          console.log(answlist.toString());
          this.soundscorrect=true;
          for(var i=0;i<this.buttonlist.length;i++){
            this.buttonlist[i].color1=0;
            this.buttonlist[i].color2=1;
            this.buttonlist[i].color3=0;
          }
          this.successful=true;
          this.count += 1;
          this.countpage += 1;
          if (this.countpage-2 !==9){
            this.insert = this.insert+"{'phonics_detail_id':"+this.listG[this.countpage-2][0].phonics_detail_id+",'ansResult':1},";
          }else{
            this.insert = this.insert+"{'phonics_detail_id':"+this.listG[this.countpage-2][0].phonics_detail_id+",'ansResult':1}]";
          }
          if(this.countpage <= this.listG.length){
            setTimeout(() => {
               this.onef=true;
               this.successful=false;
               this.soundscorrect=false;
            }, 2000);
          }else {
            setTimeout(() => {
              this.soundscorrect=false;
            this.$router.push({
              //核心语句
              path: "/presult", //跳转的路径
              query: {
                //路由传参时push和query搭配使用 ，作用时传递参数
                type: this.type,
                partName: 'intermediate6',
                account: this.count,
                menuId: this.menuId,
                unitsId: this.unitsId,
                unit: this.unit,
                insert:this.insert
              }
            });
            }, 2000);
          }
        }else {
           for(var i=0;i<truelist.length;i++){
             if(truelist[i]!==answlist[i]){
               this.buttonlist[i].color3=1;
             }
           }
          if (this.countpage-1 !==9){
            this.insert = this.insert+"{'phonics_detail_id':"+this.listG[this.countpage-1][0].phonics_detail_id+",'ansResult':0},";
          }else{
            this.insert = this.insert+"{'phonics_detail_id':"+this.listG[this.countpage-1][0].phonics_detail_id+",'ansResult':0}]";
          }
           this.soundsWrong=true;
            setTimeout(() => {
              for(var i=0;i<truelist.length;i++){
                  this.buttonlist[i].name=truelist[i];
              }
              this.soundsWrong=false;
              // setTimeout(() => {
                for(var i=0;i<this.buttonlist.length;i++){
                if(this.buttonlist[i].color3===1){
                  this.buttonlist[i].color3=0;
                  this.buttonlist[i].color2=1;
                }
                }
              this.countpage += 1;
              if(this.countpage <= this.listG.length){
                setTimeout(() => {
                  this.onef=true;
                }, 2000);
              }else {
                setTimeout(() => {
                  this.$router.push({
                    //核心语句
                    path: "/presult", //跳转的路径
                    query: {
                      //路由传参时push和query搭配使用 ，作用时传递参数
                      type: this.type,
                      partName: 'intermediate6',
                      account: this.count,
                      menuId: this.menuId,
                      unitsId: this.unitsId,
                      unit: this.unit,
                      insert:this.insert
                    }
                  });
                }, 2000);
              }
              // }, 500);
            }, 2000);
        }

      },
      changesett() {
        if(this.onef==false){
          setTimeout(() => {
            this.resume3 = !this.resume3;
            if (!this.resume3) {
              setTimeout(() => {
                const canvas = document.getElementById('canvas'); // 初次进来初始化画布
                let imgBox = document.getElementById('imgBox');
                this.canvasObj = canvas;
                this.canvasH = imgBox.clientHeight; // 存储canvas的高度，用于清空画布
                canvas.width = imgBox.clientWidth; // 动态赋值canvas的宽度
                canvas.height = imgBox.clientHeight; // 动态赋值canvas的高度
                this.context = canvas.getContext('2d');
                this.setCanvasStyle();
              }, 2100);
            }
          }, 1000);
        }
      },
      pop(){
        this.popp = !this.popp;
      },
      help(){
        if(this.onef==false){
          this.spanp="Listen to the word. Then, put the letters in the correct order.";
          this.popp = !this.popp;

        }
      },
      gomemu(){
        var audio = document.getElementById('music');
        if(localStorage.getItem('audiomusic')=="false"){

        }else{
          audio.play();
        }
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
            unit:this.unit
          }
        })
      },
      listen() {
        if(this.onef === false&&this.video===false){
          this.video=true;
        }
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

  };
</script>

<style scoped lang="less">
  *{
    margin: 0;
    box-sizing: border-box;
  }
  .body {
    padding: 0;
  }

  .intermediate6 {
    width: 100%;
    height: 100%;
    /*background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/interbg7.png");*/
    /*background-color: #204900;*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    position: absolute;
    display: flex;
  }

  .about {

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

  .start {
    position: absolute;
    transform: scale(1.2);
    margin-left: -37%;
    display: inline-block;
    margin-top: -6%;
  }
  .longthink{
    width: 37%;
    top: 5%;
    position: absolute;
    z-index: 3;

  }
  .long{
    position: absolute;
    bottom: -15%;
    width: 84%;
    margin: 0 8%;
    img{
      width: 100%;
    }
  }
  .yun{
    text-align: right;
  }
  .yun button{
    background: none;
    border: none;
    background-size: cover;
  }
  .ma img{
    width: 100%;
  }
  .one{
    position: absolute;
    top: 50%;
    left: 27%;
    width: 4rem;
    height: 4rem;
    border: none;
    background: none;
    display: block;
    color:  #ab5118;
    float: left;
    text-transform: lowercase;
    font-family: pepper;
    span{
      width: 4rem;
      height: 4rem;
      font-size: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      line-height: 100%;
    }

  }
  .two{
    position: absolute;
    top: 36%;
    left: 46%;
    width: 4rem;height: 4rem;
    border: none;
    background: none;
    display: block;
    color: #ab5118;
    text-transform: lowercase;
    float: left;
    font-family: pepper;
    span{
      width: 4rem;
      height: 4rem;
      font-size: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      line-height: 100%;
    }
  }
  .three{
    position: absolute;
    top: 36%;
    left: 66%;
    width: 4rem;height: 4rem;
    border: none;
    background: none;
    display: block;
    color:  #ab5118;
    text-transform: lowercase;
    float: left;
    font-family: pepper;
    span{
      width: 4rem;
      height: 4rem;
      font-size: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      line-height: 100%;
    }
  }
  .four{
    position: absolute;
    top: 50%;
    left: 85%;
    width: 4rem;height: 4rem;
    border: none;
    background: none;
    display: block;
    color:  #ab5118;
    text-transform: lowercase;
    float: left;
    font-family: pepper;
    span{
      width: 4rem;
      height: 4rem;
      font-size: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      line-height: 100%;
    }
  }
  .confirmbut{
    position: absolute;
    bottom: 21%;
    right: 28%;
    width: 20%;
    border: none;
    height: 90px;
    border-radius: 50px;
    opacity: 0;
  }
  .buttonchange{
    /*color: #ab5118 !important;*/
    color: #ffaa00 !important;
    text-shadow: 0.2rem 0rem 0.3rem #ff5d00, -0.2rem 0rem 0.3rem #ff5d00, 0rem 0.2rem 0.3rem #ff5d00, 0rem -0.2rem 0.3rem #ff5d00;
  }

  .changeblue{
    color: #007BB8 !important;
  }
  .changered{
    color: #DB7365 !important;
  }
  .repeatsound{
    width: 10%;
    bottom: 50%;
    right: 25%;
    z-index: 2;
    position: absolute;
  }
  .answerSucc{
    width: 50%;
    right: 15%;
    display: none;
    position: absolute;
  }
  .disanswer{
    display: block;
  }
  .resize{
    font-size: 1.5rem;
    line-height: 2.5rem;
  }


  .opciay {
    opacity: 0.5;
  }

  .showbgs1 {
    left: 56px;
  }





  .listimg img {
    cursor: pointer;
  }

  .listimg:focus {
    transform: scale(1.2);
  }

  .listimg:active {
    transform: scale(1.2);
  }


  .fontsize {
    font-family: pepper;
    color: white;
    bottom: 7%;
    left: 3%;
    position: absolute;
    font-size: 1rem;
    max-height: 100%;
    min-height: 60%;
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
    z-index:102;
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
  .spanp{
    position: absolute;
    width: 50%;
    margin: 0 25%;
    top: 18%;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
    z-index: 2;color: #603915;
    font-family: pepper;
  }
  .spanp1{
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
    margin-top:10%
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
    color:  #935D24;
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
    transform: scale(0.9);
  }
  .changetranform{
    transform: scale(1.3);
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
      left: 0px;
    }
    50% {
      left: 20px;
    }
    100% {
      left: 0px;
    }
  }

  @media screen and (max-width: 481px) {
    .showbgs1 {
      margin-left: -40px;
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
  }

  @media screen and (min-width: 1024px) and (max-width: 1354px)  {
    .start {
      transform: scale(2);
      margin-left: -22%;
      display: inline-block;
      margin-top: 6%;
    }
    .yun img{
      transform: scale(1.5);
      margin-bottom: 40px;
    }

    .showbgs1 {
      margin-left: 40px;
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
      position: absolute;
      font-size: 1.5rem;
      max-height: 80%;
      min-height: 50%;

    }
    .longthink{
      top: 26%;
    }
     .long{
       width: 90%;
       margin: 0 5%;
       bottom: 0%;
     }
    .one{
      width:7rem;
      height: 7rem;
      span{
        width: 7rem;
        height: 7rem;
        font-size: 5rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .two{
      width:7rem;
      height: 7rem;
      span{
        width: 7rem;
        height: 7rem;
        font-size: 5rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .three{
      width:7rem;
      height: 7rem;
      span{
        width: 7rem;
        height: 7rem;
        font-size: 5rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .four{
      width:7rem;
      height: 7rem;
      span{
        width: 7rem;
        height: 7rem;
        font-size: 5rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .confirmbut{
      height: 120px;
      width: 20%;
      right: 28%;
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
    .repeatsound{
      width: 10%;
      bottom: 40%;
      right: 23%;
      position: absolute;
    }
  }
  @media screen and (min-width: 1355px) and (max-width: 1600px){
    .start {
      transform: scale(2);
      margin-left: -22%;
      display: inline-block;
      margin-top: 6%;
    }
    .yun img{
      transform: scale(2);
      margin-bottom: 50px;
    }
    .longthink{
      top: 26%;
    }
    .long{
      width: 90%;
      margin: 0 5%;
      bottom: 0%;
    }
    .one{
      width:9rem;
      height: 9rem;
      span{
        width: 9rem;
        height: 9rem;
        font-size: 7rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .two{
      width:9rem;
      height: 9rem;
      span{
        width: 9rem;
        height: 9rem;
        font-size: 7rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .three{
      width:9rem;
      height: 9rem;
      span{
        width: 9rem;
        height: 9rem;
        font-size: 7rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .four{
      width:9rem;
      height: 9rem;
      span{
        width: 9rem;
        height: 9rem;
        font-size: 7rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .confirmbut{
      height: 150px;
      width: 20%;
      right: 28%;
    }
    .showbgs1 {
      margin-left: 40px;
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
      left: 8%;
      position: absolute;
      font-size: xx-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
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

    .close img {
      height: 70px;
      width: 70px;

    }
    .roleimg{
      height: 53%;
      top: 20%;
    }
    .repeatsound{
      width: 10%;
      bottom: 40%;
      right: 23%;
      position: absolute;
    }
  }
  @media screen and (min-width: 700px) and (max-width: 811px) {
    .fontsizes {
      margin-top: 17%;
    }
    .twomenu {
      padding-top: 18%;
    }
    .long{
      width: 90%;
      margin: 0 5%;
    }
    .one{
      top: 50%;
      width:5rem;
      height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .two{
      width:5rem;
      height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .three{
      width:5rem;
      height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .four{
      top: 50%;
      width:5rem;
      height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
  }
  @media screen and (min-width: 812px) and (max-width:895px) {
    .showbgs1 {
      margin-left: -17px;
    }
    .twomenu {
      padding-top: 14%;
    }
    .fontsizes {
      margin-top: 17%;
    }
    .one{
      top: 50%;
      width:5rem;
      height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .two{
      width:5rem;
      height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .three{
      width:5rem;
      height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .four{
      top: 50%;
      width:5rem;
      height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
  }
  @media screen and (min-width: 896px) and (max-width:1023px) {
    .showbgs1 {
      margin-left: -17px;
    }
    .twomenu {
      padding-top: 14%;
    }
    .fontsizes {
      margin-top: 17%;
    }
    .withcolor {
      height: 70%;
    }
    .one{
      top: 50%;
      left: 28%;
      width: 5rem;height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .two{
      top: 36%;
      width: 5rem;height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .three{
      top: 36%;
      width: 5rem;height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .four{
      top: 49%;
      left: 86%;
      width: 5rem;height: 5rem;
      span{
        width: 5rem;
        height: 5rem;
        font-size: 4rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
  }
  @media screen and (min-width: 1600px){
    .start {
      transform: scale(2);
      margin-left: -22%;
      display: inline-block;
      margin-top: 6%;
    }
    .yun img{
      transform: scale(2);
      margin-bottom: 50px;
    }
    .longthink{
      width: 28%;
      top: 16%;
      transform: scale(1.5);
    }
    .long{
      width: 90%;
      margin: 0 5%;
      bottom: -15%;
    }
    .one{
      top: 50%;
      width:15rem;height: 15rem;
      span{
        width: 15rem;
        height: 15rem;
        font-size: 9rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .two{
      top: 36%;
      width:15rem;height: 15rem;
      span{
        width: 15rem;
        height: 15rem;
        font-size: 9rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .three{
      top: 36%;
      width:15rem;height: 15rem;
      span{
        width: 15rem;
        height: 15rem;
        font-size: 9rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }
    .four{
      top: 50%;
      width:15rem;height: 15rem;
      span{
        width: 15rem;
        height: 15rem;
        font-size: 9rem;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 100%;
      }
    }

    .fontsizes {
      margin-top: 20%;
      font-size: 3rem;
    }
    .confirmbut{
      height: 260px;
      width: 20%;
      right: 28%;
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
      margin-left: 5%;
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
    .repeatsound{
      width: 10%;
      bottom: 40%;
      right: 23%;
      position: absolute;
    }
  }

</style>
