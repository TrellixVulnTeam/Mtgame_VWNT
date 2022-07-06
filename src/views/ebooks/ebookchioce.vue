<template>
  <div class="choiceebook">
    <div class="contain" >
      <img src="../../assets/image/ebook1.png" style="width: 100%; height: 100%;display:block;position: absolute;">
      <img src="../../assets/image/eback.png" @click="back()" class="backbutton" />


      <!-- walkers -->
   <transition name="fade1">
        <div  style="width: 100%;height: 100%;">
            <button class="books" v-bind:class="{ ebooslength: ebooslengthall}" :style="{backgroundColor:booktitleColor}">{{this.booklevel}}</button>
            <div class="box1">
              <div style="padding:  0px 2% 0px 2%; width: 20%;" v-for="(li,l) in listBookName">
              <img class="imglist"  :src='li.head_img'  @click="godemo(li,l)"  @load="loaded" >
             <!-- <img src="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/get-the-mud-off.png"  @click="godemo()">
              <img src="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/glen-the-slug.png">
              <img src="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/helen-hen's-eggs.png">
              <img src="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/i-can-color.png">
              <img src="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/kit's-red-pin.png">
              <img src="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/let's-get-healthy.png"> -->
              <!--<div>-->

                <img v-if="li.completes==='100%'&&loadimg" style="display: block;width: 20%;margin-left: 40%;" src="../../assets/image/truest.png">
                <div v-if="li.completes!=='100%'&&loadimg" style="margin: 4% ;background-color: white;height: 10px;border-radius: 50px;display: block;">
                  <div :style="{width:li.completes}" style="height: 10px;border-radius: 50px; left: 0;background-color: green;"></div>
                </div>
              </div>
            </div>
        </div>
   </transition>
      <!-- Activities Menu -->
      <div class="settinglist">
        <img src="../../assets/image/storybar.png" style="width: 100%;bottom: 0;height: 100%;">
        <!-- <img src="../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
        <div>
          <img :src=gameImage class="acstyle" @click="goinfo" />
          <span class="fontsize leftmar">{{firstName}}</span>
        </div>
        <div>
          <img src="../../assets/image/icon_coin.png" class="coinstyle">
          <span class="fontsize leftmar2">{{sum}}</span>
        </div>
        <div @click="home">
          <!-- <img src="../../assets/image/Icon_home0.png" class="repeat" v-if="action1"> -->
          <img src="../../assets/image/storyicon.png" class="repeat">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery';
  var qs = require('qs');
  export default {
    name: "ebookchioce",
    watch: {},
    data() {
      return {
        action: false,
        action1: false,
        audio: '',
        sum: 0,
        imgLoad:0,
        loadimg:false,
        percent:false,
        firstName: '',
        gameImage: '',
        studentId: '',
        video: false,
        listBookName:[],
        sortId:'',
        ebooslengthall:false,
        choiceebooks:true,
        booklevel:'',
        booklevel2:'',
        booklevelid:'',
        pic: "",
        url: '/book/bookNameUpdate',
        fade: 'fade',
        zhezhao: false,
        style: '',
        booktitleColor:'#3380C2',
        type: 'ebookchioce',

      }
    },

    methods: {

      back() {
        this.$router.push({
          path: '/ebooks',
          query: {
            sortId:this.sortId,
            booklevel:this.booklevel2
          }
        })
      },
      loaded(){
        let imgList = document.getElementsByClassName('backclass4');//图片集合
        let imgCount = imgList.length;//图片总数

        if(this.imgLoad>imgCount){


        }else{

          if (this.imgLoad === imgCount) {
            this.loadimg =true;

            console.log("图片加载完成 展示组件");

          }
          this.imgLoad++;
          console.log(this.imgLoad);
        }
      },

      godemo(li,index){
        var audio = document.getElementById('music');
          audio.pause();
          var nextid=null;
          if(index+1>=this.listBookName.length){
            nextid=null;
          }else {
            nextid=this.listBookName[index+1].book_id;
          }
        this.$router.push({
          path: '/demo',
          query: {
            sortId:this.sortId,
            // backimg:li.before_img,
            // backimg2:li.before_img1,
            // insetimg:li.bg_img,
            // fontimg:li.head_img,
            bookId:li.book_id,
            booklevelid:this.booklevelid,
            booklevel:this.booklevel,
            nextId:nextid,
            booklevel2:this.booklevel2,
            booktitleColor:this.booktitleColor
          }
        });
        localStorage.setItem('backimg',li.before_img);
        localStorage.setItem('backimg2',li.before_img1);
        localStorage.setItem('insetimg',li.bg_img);
        localStorage.setItem('fontimg',li.head_img);
        localStorage.setItem('wordimg',li.word_img);

      },
      home() {
        setTimeout(() => {
          this.$router.push({
            path: '/source'
          })
        }, 1000);
      },

      goinfo() {
        this.$router.push({ //核心语句
          path: '/info', //跳转的路径
        })
      },
    },
    mounted() {
      // if(document.getElementById('alertFram')){
      //   document.getElementById('alertFram').style.display = "none";
      //   console.log(document.getElementById('alertFram').style.display);
      // }
    },
    created() { //生命周期里接收参数
      this.pic = this.$axios.defaults.baseURL2;
      this.firstName = localStorage.getItem('firstName');
      this.gameImage = localStorage.getItem('gameImage');
      this.sum = localStorage.getItem('sumCoins');
      this.studentId = localStorage.getItem('studentId');
      this.sortId=this.$route.query.sortId;
      this.booklevel=this.$route.query.booklevel;
      this.booklevelid=this.$route.query.booklevelid;
      this.booklevel2=this.$route.query.booklevel2;
      this.booktitleColor=this.$route.query.booktitleColor;
      // if(document.getElementById('alertFram')){
      //   document.getElementById('alertFram').style.display = "none";
      //   console.log(document.getElementById('alertFram').style.display);
      // }

      // document.getElementById("music").volume =1;
      this.$axios.post(this.url,qs.stringify({
        id:this.booklevelid,
        studentId:localStorage.getItem('studentId')
      })).then(res=>{
          this.listBookName=res.data.listBookName;
          for(var i=0;i<this.listBookName.length;i++){
            this.listBookName[i].before_img=this.pic+this.listBookName[i].before_img;
            this.listBookName[i].before_img1=this.pic+this.listBookName[i].before_img1;
            this.listBookName[i].bg_img=this.pic+this.listBookName[i].bg_img;
            this.listBookName[i].foot_img=this.pic+this.listBookName[i].foot_img;
            this.listBookName[i].head_img=this.pic+this.listBookName[i].head_img;
            this.listBookName[i].word_img=this.pic+this.listBookName[i].word_img;
          }
          this.ebooslengthall = this.booklevel.length > 10;
      }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      })
    }
  };
</script>

<style scoped lang="less">
  .body {
    padding: 0;
  }

  .chosegame {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
  }

  .acstyle {
    height: 70%;
    position: absolute;
    left: 5%;
    bottom: 9%;
    border-radius: 50px;
  }

  .fontsize {
    font-family: kg;
    color: white;
    bottom: 18%;
    max-width: 20%;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
    font-size: x-large;
    max-height: 70%;
    min-height: 50%;
    //margin-left: 2%;
  }

  .backbutton {
    // display: block;
    z-index: 2;
    width: 6%;
    position: fixed;
    left: 15px;
    top: 15px;
  }

  .books {
    border: none;
    background: none;
    background-color: #3380C2;
    box-shadow: 0px 5px 0px #7777;
    padding: 5px;
    width: 35%;
    height: 55px;
    line-height: 50%;
    position: relative;
    border-radius: 50px;
    margin-top: 3%;
    color: white;
    font-family: kg;
    font-size: 2rem;
  }
  .ebooslength{
    font-size: 1rem;
  }



  .leftmar {
    left: 13%
  }

  .leftmar2 {
    left: 41%;
  }

  .contain {
    display: flex;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    text-align: center;
    display: block;
    position: fixed;
    overflow: hidden;
  }
  .coinstyle {
    height: 70%;
    position: absolute;
    left: 33%;
    bottom: 9%;
  }

  .setting {
    width: 12%;
    position: absolute;
    right: 8%;
    bottom: 0%;
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


  .box1 {
    position: absolute;
    width: 100%;
    height: 57.5%;
    justify-content: space-between;
    white-space: nowrap;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    margin-top: 4%;
    transform: rotateX(10deg);
    .imglist {
        height: 20%;
    }
  }

  @media screen and (max-width: 481px) {
    .fontsize {
      bottom: 16%;
      position: absolute;
      font-size: 1.2rem;
      margin-left: 2%;
    }
  }

  @media screen and (min-width: 482px) and (max-width: 569px) {
    .box1{
      height: 200%;
    }
    .fontsize {
      bottom: 16%;
      position: absolute;
      font-size: 1.2rem;
      margin-left: 2%;
    }
  }
  @media screen and (min-width: 570px) and (max-width: 736px){
    .box1{
      height: 200%;
    }
  }


  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 2.5rem;
      margin-left: 2%;
    }

    .acstyle {
      height: 70%;
      position: absolute;
      left: 5%;
      bottom: 9%;
    }

    .setting {
      width: 14%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }

    .leftmar2 {
      left: 43%;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }
    .books{
      margin-top: 7%;
      height: 70px;

    }
    .box1 {
      margin-top: 10%;
      height: 100%;
      .imglist {
        height: 30%;
      }
    }
    .ebooslength{
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1200px)and (max-width: 1600px) {
    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 3rem;
      margin-left: 2%;
    }

    .acstyle {
      height: 70%;
      position: absolute;
      left: 5%;
      bottom: 9%;
    }

    .setting {
      width: 14%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }

    .leftmar2 {
      left: 43%;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }
    .books{
      height: 80px;
      margin-top: 7%;

    }
    .ebooslength{
      font-size: 2rem;
    }
    .box1 {
      margin-top: 13%;
      height: 75%;
      .imglist {
        height: 40%;
      }
    }
  }
   @media screen and (min-width: 895px) and (max-width:1023px) {
     .books{
       height: 50px;

     }
     .box1 {
       margin-top: 3%;
       height: 200%;
     }
     .ebooslength{
       font-size: 1.3rem;
     }
   }
  @media screen and (min-width: 812px) and (max-width:895px) {
      .books{
        height: 50px;

      }
      .box1 {
        margin-top: 3%;
        height: 200%;
      }
    .ebooslength{
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 737px) and (max-width:811px) {

    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }
    .ebooslength{
      font-size: 1.1rem;
    }

  }
  @media screen and (min-width: 1600px){
    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 3rem;
      margin-left: 2%;
    }

    .acstyle {
      height: 70%;
      position: absolute;
      left: 5%;
      bottom: 9%;
    }

    .setting {
      width: 14%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }

    .leftmar2 {
      left: 43%;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }
    .books{
      height: 100px;
      margin-top: 5%;
      font-size: 3rem;

    }
    .ebooslength{
      font-size: 3rem;
    }


    .box1 {
      margin-top: 4%;
      .imglist {
        height: 80%;
      }

    }


  }
</style>
