<template>
  <div class="booksort">
    <div class="contain" id="container">
      <img src="../../assets/image/ebook.png" style="width: 100%; height: 100%;display:block;position: absolute;">
      <img src="../../assets/image/eback.png" @click="$tips(true);back()" class="backbutton" />
      <!-- chosegame -->
      <transition name="fade1">
        <div v-if="showbooks" style="width: 100%;height: 100%;">
          <button class="books">BOOKS</button>
          <div class="box1">
            <img v-for="li in listSort" :src='li.bg' @click="$tips(true);gochoice(li)">
           <!-- <img src="../../assets/image/ebeginnerA.png"  @click="gochoice()">
            <img src="../../assets/image/elittleA.png" @click="gochoice()">
            <img src="../../assets/image/elittleB.png" @click="gochoice()">
            <img src="../../assets/image/ebeginnerA.png" @click="gochoice()"> -->

          </div>

        </div>
      </transition>

      <!-- phonics-->
      <!-- <transition name="fade1">
        <div v-if="phonicsbook" style="width: 100%;height: 100%;">
            <button class="books">PHONICS</button>
            <div class="box1">
              <img src="../../assets/image/beginnerebook.png" @click="gochoice()">
              <img src="../../assets/image/interedebook.png"  @click="gochoice()">
              <img src="../../assets/image/advancedebook.png"  @click="gochoice()">

            </div>
        </div>
      </transition> -->

      <!-- Activities Menu -->
      <div class="settinglist">
        <img src="../../assets/image/storybar.png" style="width: 100%;bottom: 0;height: 100%;">
        <!-- <img src="../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
        <div>
          <img :src=gameImage class="acstyle" @click="$tips(true);goinfo()" />
          <span class="fontsize leftmar">{{firstName}}</span>
        </div>
        <div>
          <img src="../../assets/image/icon_coin.png" class="coinstyle">
          <span class="fontsize leftmar2">{{sum}}</span>
        </div>
        <div @click="$tips(true);home()">
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
    name: "booksort",
    watch: {},
    data() {
      return {
        action: false,
        action1: false,
        audio: '',
        sum: 0,
        firstName: '',
        gameImage: '',
        studentId: '',
        video: false,
        pic: "",
        listSort:[],
        url: '/book/bookSort',
        showbooks:true,
        phonicsbook:false,
        fade: 'fade',
        zhezhao: false,
        style: '',
        type: 'booksort',

      }
    },

    methods: {

      back() {
        if(this.phonicsbook==true){
          this.showbooks=true;
          this.phonicsbook=false;
        }else{
          this.$router.push({
          path: '/source'
        })
        }

      },
      // gophonics(){
      //   this.showbooks=false;
      //   this.phonicsbook=true;
      // },
      gochoice(li){
        // if(li.name!=="Storybook"){
          this.$router.push({
            path: '/ebooks',
            query: {
              phonicsbook:this.phonicsbook,
              sortId:li.sort_id,
              booklevel:li.name
            }
          })
        // }

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

    },
    created() { //生命周期里接收参数
      this.pic = this.$axios.defaults.baseURL2;
      this.firstName = localStorage.getItem('firstName');
      this.gameImage = localStorage.getItem('gameImage');
      this.sum = localStorage.getItem('sumCoins');
      this.studentId = localStorage.getItem('studentId');

      this.$axios.post(this.url,qs.stringify({
      })).then(res=>{
        this.listSort=res.data.listSort;
        for(var i=0;i<this.listSort.length;i++){
          this.listSort[i].bg=this.pic+this.listSort[i].bg;
        }
        // console.log(res.data);
      }, res => {
        alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      });
    }
  };
</script>

<style scoped lang="less">
  .body {
    padding: 0;
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
    background-color: #0080C6;
    box-shadow: 0px 5px 0px #7777;
    padding: 5px;
    width: 26%;
    height: 50px;
    text-transform: uppercase;
    line-height: 50%;
    position: relative;
    border-radius: 50px;
    margin-top: 3%;
    color: white;
    font-family: kg;
    font-size: 2rem;
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
    bottom: 10%;
    width: 100%;
    /*display: flex;*/
    /*overflow: hidden;*/
    /*overflow-x: scroll;*/
    margin-top:7%;


    img {
      z-index: 3;
      width: 30%;
      position: relative;
      display: inline;
      height: 100%;
      text-align: center;
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
    .fontsize {
      bottom: 16%;
      position: absolute;
      font-size: 1.2rem;
      margin-left: 2%;
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
      margin-top: 15%;

      img {
        z-index: 3;
        width: 30%;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1600px) {
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
    .box1 {
      margin-top: 15%;

      img {
        z-index: 3;
        width: 30%;
        height: 100%;
      }
    }
  }
   @media screen and (min-width: 895px) and (max-width:1023px) {
     .books{
       height: 50px;

     }
     .box1 {
       margin-top: 4%;
     }
   }
  @media screen and (min-width: 812px) and (max-width:895px) {
      .books{
        height: 50px;

      }
    .box1 {
      margin-top: 4%;
    }
  }
  @media screen and (min-width: 737px) and (max-width:811px) {

    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }
    .box1 {
      margin-top: 5%;
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
      font-size: 3rem;
    }
    .box1 {
      margin-top: 4%;
    }
  }

</style>
