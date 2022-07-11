<template>
  <div class="pchosegame">
    <div class="contain" id="container">
      <!--<img src="../../assets/image/phonicsbg.png" style="width: 100%; height: 100%;display:block;position: absolute;background-color: #204900;">-->
<!--      <img src="../../assets/image/prightback.png" @click="back" class="backbutton" />-->
      <img v-if="phonics" src="../../assets/image/phonicsbg5.png" style="width: 100%; height: 100%;top:0;display:block;position: absolute;">
      <img v-if="runners" src="../../assets/image/phonicsIntbg.png" style="width: 100%; height: 100%;top:0;display:block;position: absolute;">
      <img v-if="advanced" src="../../assets/image/phonicsAdvbg.png" style="width: 100%; height: 100%;top:0;display:block;position: absolute;">
      <!-- chart room -->
      <transition name="fade1">
        <div v-if="phonics" style="width: 100%;height: 100%;">
          <div class="chart-room-out">
            <h2 class="chartroom-title">
              <img src="../../assets/image/ptop.png">
              <button>{{cources}}</button></h2>
            <div class="chart-room">
              <div class="left-walkers">
                <a @click="$tips(true);walkers1(phonicsList[0])">
                  <img src="../../assets/image/beginner.png" style="width:100%;">
                  <div class="progress" v-if="!phonicsList[0].compelte">
                  <div class="goldBG01">
                    <img src="../../assets/image/champanp.png" v-bind:style="{width:phonicsList[0].percent}">
                  </div>
                    <img src="../../assets/image/golden.png" class="chamcup"/>
                  <button class="percent">{{phonicsList[0].percent}}</button>
              </div>
                  <div   v-if="phonicsList[0].compelte">
                    <img src="../../assets/image/completed.png" style="width: 80%;margin: 0 10%;z-index: 2;bottom:-6%;position: absolute;left:0;">
                  </div>

                </a>
              </div>
              <div class="left-walkers">
<!--                 <a>-->
                  <a @click="$tips(true);walkers2(phonicsList[1])">
                  <img src="../../assets/image/intermediate.png" style="width: 100%; ">
                  <div class="progress" v-if="!phonicsList[1].compelte">
                    <div class="goldBG03">
                      <img src="../../assets/image/champanp2.png" v-bind:style="{width:phonicsList[1].percent}">
                    </div>
                     <img src="../../assets/image/golden.png" class="chamcup"/>
                    <button class="percent">{{phonicsList[1].percent}}</button>
                  </div>
                  <div   v-if="phonicsList[1].compelte">
                    <img src="../../assets/image/completed.png" style="width: 80%;margin: 0 10%;z-index: 2;bottom:-6%;position: absolute;left:0;">
                  </div>
                </a>
              </div>
              <div class="left-walkers">
<!--                 <a>-->
                <a @click="$tips(true);walkers3(phonicsList[2])">
                  <img src="../../assets/image/advance.png" style="width: 100%; ">
<!--                  <img src="../../assets/image/coming-soon1.png" style="width: 80%;margin: 0 10%;z-index: 2;bottom:-6%;position: absolute;display: inline;float: left;left: 0;">-->
                  <div class="progress" v-if="!phonicsList[2].compelte">
                    <div class="goldBG02">
                      <img src="../../assets/image/champanp3.png" v-bind:style="{width:phonicsList[2].percent}">
                    </div>
                     <img src="../../assets/image/golden.png" class="chamcup"/>
                    <button class="percent">{{phonicsList[2].percent}}</button>
                  </div>
                  <div   v-if="phonicsList[2].compelte">
                    <img src="../../assets/image/completed.png" style="width: 80%;margin: 0 10%;z-index: 2;bottom:-6%;position: absolute;left:0;">
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- walkers -->
      <transition name="fade1">
        <div v-if="walkers" style="width: 100%;height: 100%;">
          <!-- <img src="../../assets/image/rightback.png" @click="back" class="backbutton"/> -->
          <div class="walkers-room-out">
            <h2 class="chartroom-title">
              <img src="../../assets/image/ptop.png">
              <button style="text-transform:uppercase;color:#8B6443;" :style="{fontSize:level.length>10 ? '20px':'24px'}">{{level}}</button></h2>
            <div class="walkers-room">
              <ul class="box1" v-for="(li,index) in phonicsDetailList" :key="index" @click="$tips(true);walkersunit(li)">
                <li>
                  <img src="../../assets/image/plist1.png" v-if="index%2==0" style="  width: 92%;height: 100%; left: 4%; top: 0;">
                  <img src="../../assets/image/plist2.png" v-if="index%2!=0" style="  width: 92%;height: 100%; left: 4%; top: 0;">

                  <!-- <img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;"> -->
                  <button class="walkerh3" v-bind:style="{'color':index%2!=0 ? '#157444' : '#4CAC58' }">
                    <span class="aspan" :style="{fontFamily: li.name==='Ii' ? 'OldR' : 'pepper',fontWeight: li.name==='Ii' ? 'bolder' : '' }" >{{li.name}}</span>
                  </button>
                  <img src="../../assets/image/golden.png" v-if="li.jin" style="top: -5%;width: 20%;float: right;position: absolute;right: 8%;">
                  <!-- <span v-bind:style="{'color':index%2!=0 ? '#cbebff' : '' }" >{{li.name}}</span> -->
                  <button class="walkerbutton">
                    <!--<img src="../../assets/image/gold1.png" v-if="li.hui ==1||li.hui ==2||li.hui ==3">-->
                    <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0">-->
                    <!--<img src="../../assets/image/gold2.png" v-if="li.hui ==2||li.hui ==3">-->
                    <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0||li.hui ==1">-->
                    <!--<img src="../../assets/image/gold3.png" v-if="li.hui ==3">-->
                    <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0||li.hui ==1||li.hui ==2">-->
                    <img src="http://monkeytown.monkeytree.com.hk/image/season-star.png">
                     <span class="foncolor1" v-if="index%2==0">{{li.stars}}</span>
                     <span class="foncolor2" v-if="index%2!=0">{{li.stars}}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="runners" style="width: 100%;height: 100%;">
          <!-- <img src="../../assets/image/rightback.png" @click="back" class="backbutton"/> -->
          <div class="walkers-room-out">
            <h2 class="chartroom-title">
              <img src="../../assets/image/ptop2.png">
              <button style="text-transform:uppercase" :style="{fontSize:level.length>10 ? '20px':'24px'}">{{level}}</button></h2>
            <div class="walkers-room">
              <ul class="box1" v-for="(li,index) in phonicsDetailList" :key="index" @click="walkersunit(li)">
                <li>
                  <img src="../../assets/image/plist3.png" v-if="index%2===0" style="  width: 92%;height: 100%; left: 4%; top: 0;">
                  <img src="../../assets/image/plist4.png" v-if="index%2!==0" style="  width: 92%;height: 100%; left: 4%; top: 0;">

                  <!-- <img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;"> -->
                  <button class="walkerh3" v-bind:style="{'color':index%2!=0 ? '#157444' : '#4CAC58' }">
                    <span class="aspan2" :style="{fontFamily: li.name==='Ii' ? 'OldR' : 'pepper',fontWeight: li.name==='Ii' ? 'bolder' : '' }" >{{li.name}}</span>
                  </button>
                  <img src="../../assets/image/golden.png" v-if="li.jin" style="top: -5%;width: 20%;float: right;position: absolute;right: 8%;">
                  <!-- <span v-bind:style="{'color':index%2!=0 ? '#cbebff' : '' }" >{{li.name}}</span> -->
                  <button class="walkerbutton">
                    <!--<img src="../../assets/image/gold1.png" v-if="li.hui ==1||li.hui ==2||li.hui ==3">-->
                    <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0">-->
                    <!--<img src="../../assets/image/gold2.png" v-if="li.hui ==2||li.hui ==3">-->
                    <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0||li.hui ==1">-->
                    <!--<img src="../../assets/image/gold3.png" v-if="li.hui ==3">-->
                    <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0||li.hui ==1||li.hui ==2">-->
                    <img src="http://monkeytown.monkeytree.com.hk/image/season-star.png">
                    <span class="foncolor2">{{li.stars}}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="advanced" style="width: 100%;height: 100%;">
          <!-- <img src="../../assets/image/rightback.png" @click="back" class="backbutton"/> -->
          <div class="walkers-room-out">
            <h2 class="chartroom-title">
              <img src="../../assets/image/ptop3.png">
              <button style="text-transform:uppercase" :style="{fontSize:level.length>10 ? '20px':'24px'}">{{level}}</button></h2>
            <div class="walkers-room">
              <ul class="box1" v-for="(li,index) in phonicsDetailList" :key="index" @click="walkersunit(li)">
                <li>
                  <img src="../../assets/image/plist5.png" v-if="index%2==0" style="  width: 92%;height: 100%; left: 4%; top: 0;">
                  <img src="../../assets/image/plist6.png" v-if="index%2!=0" style="  width: 92%;height: 100%; left: 4%; top: 0;">

                  <!-- <img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;"> -->
                  <button class="walkerh3"  style="color:#4e5098;">
                    <span class="aspan2" :style="{fontFamily: li.name==='Ii' ? 'OldR' : 'pepper',fontWeight: li.name==='Ii' ? 'bolder' : '' }" >{{li.name}}</span>
                  </button>
                  <img src="../../assets/image/golden.png" v-if="li.jin" style="top: -5%;width: 20%;float: right;position: absolute;right: 8%;">
                  <!-- <span v-bind:style="{'color':index%2!=0 ? '#cbebff' : '' }" >{{li.name}}</span> -->
                  <button class="walkerbutton">
                    <!--<img src="../../assets/image/gold1.png" v-if="li.hui ==1||li.hui ==2||li.hui ==3">-->
                    <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0">-->
                    <!--<img src="../../assets/image/gold2.png" v-if="li.hui ==2||li.hui ==3">-->
                    <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0||li.hui ==1">-->
                    <!--<img src="../../assets/image/gold3.png" v-if="li.hui ==3">-->
                    <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0||li.hui ==1||li.hui ==2">-->
                    <img src="http://monkeytown.monkeytree.com.hk/image/season-star.png">
                    <span class="foncolor2">{{li.stars}}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>

      <div class="settinglist">
        <img src="../../assets/image/pbar.png" v-if="phonics||walkers" style="width: 100%;bottom: 0;height: 100%;">
        <img src="../../assets/image/interbar.png" v-if="runners" style="width: 100%;bottom: 0;height: 100%;">
        <img src="../../assets/image/abar.png" v-if="advanced" style="width: 100%;bottom: 0;height: 100%;">
        <!-- <img src="../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
        <div>
          <img :src=gameImage class="acstyle" @click="$tips(true);goinfo()" />
          <span class="fontsize leftmar">{{firstName}}</span>
        </div>
        <div>
          <img src="../../assets/image/icon_coin.png" class="coinstyle">
          <span class="fontsize leftmar2">{{sum}}</span>
        </div>
        <div @click="$tips(true);back()">
						<img src="../../assets/image/pback.png"  class="pause" v-if="phonics||walkers">
            <img src="../../assets/image/7-back.png"  class="pause" v-if="runners">
          <img src="../../assets/image/adBack.png"  class="pause" v-if="advanced">
        </div>
        <div @click="$tips(true);home()">
          <img src="../../assets/image/phome.png" class="repeat" v-if="phonics||walkers">
          <img src="../../assets/image/7-home.png" class="repeat" v-if="runners">
          <img src="../../assets/image/adHome.png" class="repeat" v-if="advanced">
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  var qs = require('qs');
  export default {
    name: "pchosegame",
    watch: {
      'loading': function(newVal) {
        if (this.loading === true) {
            alertImg(this.$axios.defaults.baseURL2);
          setTimeout(() => {
              document.getElementById('alertFram').style.display = 'none'}
            ,15000)
        }else{
          setTimeout(() => {
              document.getElementById('alertFram').style.display = 'none'}
            ,1000)
        }
      },
    },
    data() {
      return {
        loading:false,
        audio: '',
        sum: 0,
        firstName: '',
        gameImage: '',
        studentId: '',
        video: false,
        courseId: '',
        phonicsId: '',
        cources: '',
        level: '',
        unitname: '',
        unitsId: '',
        courseList: [{
            bg: '',
            name: ''
          },
          {
            bg: '',
            name: ''
          }
        ],
        phonicsList: [{
            compelte: 0,
            percent:'0%',
          },
          {
            compelte: 0,
            percent:'0%',
          },
          {
            compelte: 0,
            percent:'0%',
          },
        ],
        phonicsDetailList: [],
        //url: 'http://localhost:8080/mtGame/user/',
        // url: 'http://demo11.embraiz.com/mtGame/user/',
        pic: "",
        url: '/user/',
        // pic: "http://demo11.embraiz.com/mtGameHK",
        url1: '',
        url2: '',
        url3: '',
        url4: '',
        fade: 'fade',
        zhezhao: false,
        style: '',
        type: 'pchosegame',
        // pchartroom:true,
        phonics: true,
        walkers: false,
        runners: false,
        advanced:false,
        activitiesmenu: false,
      }
    },

    methods: {
      // fullscreen(){
      //   // 判断是iphoneX及以后的iphone手机（即iphone带全面屏的手机）
      //   let isNewIphone = window && navigator.userAgent.indexOf('iPhone') > -1 && window.screen.height >= 812 && window.devicePixelRatio >= 2;
      //   //console.log(document.getElementById('alertFram').offsetLeft);
      //   //console.log(document.getElementById('alertFram').style.cssText);
      //   alertMsg3('w:'+window.screen.width+'h:'+window.screen.height+isNewIphone)
      //   setTimeout(() => {
      //     alertMsg3(document.getElementById('alertFram').style.cssText)
      //   }, 5000);
      //   setTimeout(() => {
      //     alertMsg3(document.getElementById('body').style.cssText)
      //   }, 10000);
      // },
      back() {
        if (this.phonics === true) {
          if(this.style ==='game'){
            this.$router.push({ //核心语句
              path: '/chosegame', //跳转的路径
              query: {
                style:this.style,
              }
            })
          }else if(this.style ==='courses'){
            this.$router.push({ //核心语句
              path: '/courses', //跳转的路径
              query: {
                style:this.style,
              }
            })
          }

        } else {
            this.phonics = true;
            this.walkers = false;
            this.runners = false;
            this.advanced = false;
            this.url2 = this.url + "phonics";
            this.$axios.post(this.url2, qs.stringify({
              studentId: localStorage.getItem('studentId'),
              // courseId:this.courseId
            })).then(res => {
              this.phonicsList = res.data.phonicsList;

            }, res => {
              alertMsg("You must be connected to the internet.<br>Please connect and try again.");
            })
          // }, 1000);
        }
      },
      home() {
        this.action1 = true;
        setTimeout(() => {
          this.action1 = false;
          this.$router.push({
            path: '/source'
          })
        }, 1000);
      },

      walkers1(li) {
        this.phonics = false;
        this.walkers = true;
        this.level = li.name;
        this.phonicsId = li.id;
        this.url3 = this.url + "PhonicsDetail";
        this.$axios.post(this.url3, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          phonicsId: this.phonicsId
        })).then(res => {
          setTimeout(() => {
            this.phonicsDetailList = res.data.phonicsDetailList;
          }, 300)
          // for(var i=0;i<this.unitsList.length;i++){
          // 	this.unitsList[i].bg="../../assets/image/1Bugs.png";
          // }
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
      },
      walkers2(li){
        this.phonics = false;
        this.runners = true;
        this.level =li.name;
        this.phonicsId = li.id;
        this.url3 = this.url + "PhonicsDetail2";
        this.$axios.post(this.url3, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          phonicsId: this.phonicsId
        })).then(res => {
          setTimeout(() => {
            this.phonicsDetailList = res.data.phonicsDetailList;
          }, 300)

        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
      },
      walkers3(li){
        this.phonics = false;
        this.advanced = true;
        this.level =li.name;
        this.phonicsId = li.id;
        this.url3 = this.url + "PhonicsDetail3";
        this.$axios.post(this.url3, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          phonicsId: this.phonicsId
        })).then(res => {
          setTimeout(() => {
            this.phonicsDetailList = res.data.phonicsDetailList;
          }, 300)
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
      },
      walkersunit(li) {
        this.unitname = li.name;
        this.unitsId = li.id;
          if(this.level==="Intermediate"){
            this.runners = false;
            this.$router.push({
              path: '/intermenu',
              query: {
                unit: this.unitname,
                unitsId: this.unitsId,
                phonicsId: this.phonicsId,
                // courseId: this.courseId,
                style: this.style,
                level: this.level,
                cources: this.cources,
              }
            });
          }else if(this.level==="Advanced"){
            this.advanced = false;
            this.$router.push({
              path: '/advmenu',
              query: {
                unit: this.unitname,
                unitsId: this.unitsId,
                phonicsId: this.phonicsId,
                // courseId: this.courseId,
                style: this.style,
                level: this.level,
                cources: this.cources,
              }
            });
          }else {
            this.walkers = false;
            this.$router.push({
              path: '/phonicsmenu',
              query: {
                unit: this.unitname,
                unitsId: this.unitsId,
                phonicsId: this.phonicsId,
                // courseId: this.courseId,
                style: this.style,
                level: this.level,
                cources: this.cources,
              }
            });
          }
      },

      goinfo() {
        this.$router.push({ //核心语句
          path: '/info', //跳转的路径
        })
      },
    },

    created() { //生命周期里接收参数
      this.pic = this.$axios.defaults.baseURL2;
      this.cources = this.$route.query.cources;
      this.style = this.$route.query.style; //接受参数关键代码
      //无用if
      if (this.$route.query.phonicsId) {
        this.level = this.$route.query.level;
        this.phonicsId = this.$route.query.phonicsId;
        // this.courseId = this.$route.query.courseId;
        this.unitname = this.$route.query.unit;
        this.cources = this.$route.query.cources;
        console.log(this.level);
        if (this.level === "Beginner") {
          this.phonics = false;
          this.walkers = true;
          this.advanced = false;
          this.url3 = this.url + "PhonicsDetail";
          this.$axios.post(this.url3, qs.stringify({
            studentId: localStorage.getItem('studentId'),
            phonicsId: this.phonicsId
          })).then(res => {
            this.phonicsDetailList = res.data.phonicsDetailList;
            console.log('1');
          }, res => {
            alertMsg("You must be connected to the internet.<br>Please connect and try again.");
          })
        } else if (this.level === "Intermediate") {
          this.phonics = false;
          this.runners = true;
          this.advanced = false;
          this.url3 = this.url + "PhonicsDetail2";
          this.$axios.post(this.url3, qs.stringify({
            studentId: localStorage.getItem('studentId'),
            phonicsId: this.phonicsId
          })).then(res => {
            this.phonicsDetailList = res.data.phonicsDetailList;
            console.log('2');
          }, res => {
            alertMsg("You must be connected to the internet.<br>Please connect and try again.");
          })
        }else if (this.level === "Advanced") {
          this.phonics = false;
          this.runners = false;
          this.advanced = true;
          this.url3 = this.url + "PhonicsDetail3";
          this.$axios.post(this.url3, qs.stringify({
            studentId: localStorage.getItem('studentId'),
            phonicsId: this.phonicsId
          })).then(res => {
            this.phonicsDetailList = res.data.phonicsDetailList;
            console.log('3');
          }, res => {
            alertMsg("You must be connected to the internet.<br>Please connect and try again.");
          })
        }
      }
      this.loading = true;
      this.firstName = localStorage.getItem('firstName');
      this.gameImage = localStorage.getItem('gameImage');
      this.sum = localStorage.getItem('sumCoins');
      this.studentId = localStorage.getItem('studentId');
      this.url2 = this.url + "phonics";
      this.$axios.post(this.url2, qs.stringify({
        studentId: localStorage.getItem('studentId'),
      })).then(res => {
        this.phonicsList = res.data.phonicsList;
        this.loading = false;
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

  .pchosegame {
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

  .chart-room {
    padding: 0 20px;
  }

  .progress {
    position: absolute;
    width: 100%;
    bottom: 10px;
    height: 22px;
    margin-bottom: 0;

    img {
      width: 40%;
      vertical-align: bottom;
    }
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

  #container {
    height: 100vh;
    /*overflow: auto;*/
    -webkit-overflow-scrolling: touch;
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
  .goldBG01{
    background-color: #693100;
    border: 2px solid #874300;
    border-radius: 50px;
    width: 40%;
    height: 22px;
    text-align: left;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 27%;
  }
  .goldBG01 img{
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    height: 100%;
    vertical-align: top;
  }
  .goldBG02{
    background-color: #4b0d60;
    border: 2px solid #690f7d;
    border-radius: 50px;
    width: 40%;
    height: 22px;
    text-align: left;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 27%;
  }
  .goldBG02 img{
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    height: 100%;
    vertical-align: top;
  }
  .goldBG03{
    background-color: #851c1c;
    border: 2px solid #7d190f;
    border-radius: 50px;
    width: 40%;
    height: 22px;
    text-align: left;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 27%;
  }
  .goldBG03 img{
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    height: 100%;
    vertical-align: top;
  }
  .chamcup{
    width: 15% !important;
    left: 60%;
    top: 0;
    z-index: 2;
    margin-top: -4px;
    position: absolute;
  }
  .percent{
    color: white;
    position: absolute;
    font-family: pepper;
    width: 40%;
    left: 27%;
    height: 26px;
    background: none;
    text-align: center;
    border: none;
  }
  .foncolor1{
    color: #7d4e28;
    font-family: kg;
    font-size: 1rem;
    vertical-align: top;
  }
  .foncolor2{
    color: white;
    font-family: kg;
    font-size: 1rem;
    vertical-align: top;
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

  //pchosegame content css
  .two-monkey {
    display: flex;
    justify-content: center;
    position: relative;
    top: 50%;
    transform: translateY(-60%);
    width: 100%;
    text-align: center;
  }

  .two-monkey .left-monkey,
  .two-monkey .right-monkey {
    position: relative;
    margin: 10px 55px;
  }

  .abgcgreen {
    background-color: #F1FFE1;
  }

  .aackgrou {
    background-color: #FFEDDC;
  }

  .two-monkey .left-monkey a {
    display: block;
    border-radius: 60px;
    box-shadow: 10px 10px 1px gray;
    position: relative;
    overflow: hidden;
    box-shadow: 6px 6px 1px #BD9712;
  }

  .couresgrey {
    border-radius: 60px;
    position: absolute;
    opacity: 0.23;
    background: #6c6b6b;
    z-index: 9;
  }

  .two-monkey .right-monkey a {
    display: block;
    border-radius: 60px;
    box-shadow: 10px 10px 1px gray;
    position: relative;
    overflow: hidden;
    box-shadow: 6px 6px 1px #BD9712;
  }

  .two-monkey .age {
    position: absolute;
    top: -9%;
    right: -14%;
    z-index: 9;
  }

  .two-monkey .age>img {
    width: 35%;
  }

  .l-box,
  .r-box {
    display: block;
    // padding: 20px;
  }

  .l-box img,
  .r-box img {
    width: 100%;
  }

  .pbgcgreen {
    background-color: #43BE76;
  }

  .backgrou {
    background-color: #FF9239 !important;
  }

  .left-monkey p {
    color: white;
    font-family: kg;
    font-size: 40px;
    min-height: 40px;
    padding-top: 24px;
    padding-bottom: 24px;
    position: absolute;
    bottom: 0;
    width: 100%;
    cursor: pointer;
  }

  .right-monkey p {
    background-color: #FF9239;
    color: white;
    font-family: kg;
    font-size: 40px;
    padding-top: 24px;
    padding-bottom: 24px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  @media screen and (min-width: 736px) and (max-width: 991px) {
    .two-monkey {
      transform: translateY(-56%);
    }

    .two-monkey .left-monkey,
    .two-monkey .right-monkey {
      position: relative;
      margin: 30px 60px;
      padding: 10px;
    }

    .two-monkey .age {
      right: -20%;
      top: -1%;

    }

    .two-monkey .age img {
      width: 40%;
    }

    .two-monkey .left-monkey a,
    .two-monkey .right-monkey a {
      border-radius: 40px;
    }

    .couresgrey {
      border-radius: 40px;
    }

    .left-monkey p,
    .right-monkey p {
      font-size: 30px;
      padding-top: 17px;
      padding-bottom: 17px;
      min-height: 30px;
      // padding-top: 12px;
      // padding-bottom: 12px;
    }

    .l-box,
    .r-box {
      //padding: 5px 20px;
    }
  }

  @media screen and (max-width: 740px) {

    .two-monkey .left-monkey,
    .two-monkey .right-monkey {
      position: relative;
      margin: 10px 40px;
    }

    .two-monkey .left-monkey a,
    .two-monkey .right-monkey a {
      border-radius: 34px;
    }

    .couresgrey {
      border-radius: 34px;
    }

    .l-box,
    .r-box {
      // padding: 8px 30px;
    }

    .left-monkey p,
    .right-monkey p {
      font-size: 28px;
      padding-top: 12px;
      min-height: 28px;
      padding-bottom: 12px;
    }
    .progress{
      height: 17px;
    }
    .goldBG01{
      height: 17px;
    }
    .goldBG02{
      height: 17px;
    }
    .goldBG03{
      height: 17px;
    }
    .percent{
      height: 21px;

    }
  }

  @media screen and (max-width: 670px) {
    .two-monkey .age {
      right: -31%;
    }
  }

  @media screen and (max-width: 569px) {

    .two-monkey .left-monkey,
    .two-monkey .right-monkey {
      position: relative;
      margin: 10px 40px;
    }

    .two-monkey .age {
      right: -38%;
    }

    .two-monkey .age img {
      width: 30%;
    }

    .left-monkey p,
    .right-monkey p {
      font-size: 22px;
      min-height: 22px;
      padding: 10px 0;
    }

    .two-monkey .left-monkey a,
    .two-monkey .right-monkey a {
      border-radius: 20px;
    }

    .couresgrey {
      border-radius: 20px;
    }

    .two-monkey .left-monkey,
    .two-monkey .right-monkey {
      position: relative;
      margin: 10px 34px;
    }
  }

  // chartroom content css
  .chart-room-out {
    position: relative;

  }

  .chart-room-out .chartroom-title {
    margin: 30px auto 40px auto;
    height: 3rem;
  }

  .chart-room-out .chartroom-title button {
    color: #8B6443;
    font-size: 25px;
    font-family: kg;
    border-style: none;
    background: none;
    display: inline-block;
    position: absolute;
    padding: 12px 40px;
    transform: translate(-50%, 0%);
    margin: 0 auto;
  }

  .chart-room-out .chartroom-title img {
    transform: translate(-50%, 0%);
    position: absolute;
  }

  .chart-room-out .chart-room {
    display: flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    justify-content: center;
    margin: auto 45px;
  }

  .chart-room .left-walkers,
  .chart-room .right-runners {
    position: relative;
    margin: 30px;
  }

  .chart-room .left-walkers a,
  .chart-room .right-runners a {
    display: block;
    // background-color:#F8F5D1 ;
    // border-radius: 40px;
    // box-shadow: 6px 6px 1px #BD9712;
    // position: relative;
    // overflow: hidden;
    // padding: 30px 0;
  }

  // .chart-room .left-walkers a > img,
  // .chart-room .right-runners a > img{
  // 	width: 110%;
  // }


  @media screen and (max-width: 991px) {

    .chart-room .left-walkers,
    .chart-room .right-runners {
      position: relative;
      margin: auto 0;
    }

    // .chart-room .left-walkers a > img,
    // .chart-room .right-runners a > img{
    //     width: 90%;
    // }
    /*.blueBG01 {*/
      /*width: 160px;*/
      /*height: 44px;*/
      /*top: 48%;*/
      /*left: 17%;*/
    /*}*/

    /*.blueBG01 img {*/
      /*height: 45px;*/
    /*}*/

    /*.chamcup {*/
      /*width: 19%;*/
      /*margin-top: -33%;*/
      /*margin-right: 16%;*/
    /*}*/

  }

  @media screen and (max-width: 690px) {
    .chart-room-out .chart-room {
      margin: auto;
    }
  }

  @media screen and (max-width: 569px) {
    .chart-room-out .chartroom-title span {
      font-size: 24px;
    }

    .personer-box {
      height: 80% !important;
    }
  }

  // walkers
  .walkers-room-out {
    position: relative;
    top: 3%;
    height: 82%;
    //height: 85%;
    overflow: hidden;
    overflow-y: scroll;
  }

  .walkers-room-out .chartroom-title {
    margin: 30px auto 5px auto;
    height: 3rem;
  }

  .walkers-room-out .chartroom-title button {
    color: white;
    font-size: 24px;
    font-family: kg;
    border-style: none;
    background: none;
    display: inline-block;
    padding: 10px 40px;
    position: absolute;
    transform: translate(-50%, 0%);
    margin: 0 auto;
  }

  .walkers-room-out .chartroom-title img {
    transform: translate(-50%, 0%);
    position: absolute;
  }

  .walkers-room-out .walkers-room {
    //justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 20px;
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-45%);
  }

  .walkers-room .box1 {
    position: relative;
    width: 100%;
    // min-height: 1px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
    margin-top: 10px;
    max-width: 30%;
    list-style: none;
  }

  .walkerh3 {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 60%;
    bottom: 40%;
    left: 0;
    font-family: pepper;
    background: no-repeat;
    border: none;
  }
  .aspan{
       vertical-align: bottom;
       bottom: 0;
       position: absolute;
       text-align: center;
       width: 100%;
       left: 0;
        font-weight: 700;
       font-size: 3rem;
  }
  .aspan2{
    vertical-align: bottom;
    bottom: 4%;
    position: absolute;
    text-align: center;
    width: 100%;
    height: inherit;
    left: 0;
    font-weight: bold;
    font-size: 1.5rem;
  }



  .walkerbutton {
    position: absolute;
    width: 100%;
    left: 0;
    height: 40%;
    border-style: none;
    background: none;
    bottom: 0%;

    img {
      width: 10%;
    }
  }

  @media screen and (min-width: 1350px) and (max-width: 1600px) {
    .walkers-room .box1 a {
      margin: 15px auto;
      width: 260px;
      height: 180px;
      border-radius: 40px;
    }
  }

  @media screen and (max-width: 890px) {
    .walkers-room .box1 a {
      padding: 30px 36px;
    }

    .walkers-room-out {
      top: 0%;
      height: 85%;
    }

    .walkers-room .box1 a span {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 740px) {
    .walkers-room-out .chartroom-title span {
      font-size: 22px;
    }

    .walkers-room .box1 a {
      padding: 20px;
      margin: 10px;
    }

    .walkers-room .box1 a h3 span {
      font-size: 18px;
    }


  }

  @media screen and (max-width: 569px) {
    .walkers-room .box1 a {
      padding: 15px 10px;
      margin: 0 10px 9px 10px;
      border-radius: 28px;
    }
  }

  @media screen and (max-width: 480px) {
    .walkers-room .box1 a {
      padding: 5px;
      margin: 0 5px;
      border-radius: 20px;
    }
  }

  // runners
  .runners-room-out {
    position: relative;
    top: 3%;
    //height: 85%;
    height: 80%;
    overflow: hidden;
    overflow-y: scroll;
  }

  .runners-room-out .chartroom-title {
    margin: 20px auto;
  }

  .runners-room-out .chartroom-title span {
    color: white;
    font-size: 30px;
    font-family: kg;
    display: inline-block;
    padding: 10px 40px;
    background-color: #10B5A1;
    border-radius: 30px;
  }

  .runners-room-out .runners-room {
    //justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    //margin-right: -15px;
    //margin-left: -15px;
    position: relative;
    left: 50%;
    transform: translateX(-45%);
  }

  .runners-room .box1 {
    position: relative;
    width: 100%;
    min-height: 1px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
    max-width: 30%;
  }

  .runners-room .box1 a {
    display: block;
    background-color: #F8F5D1;
    border-radius: 40px;
    box-shadow: 6px 6px 1px #BD9712;
    position: relative;
    overflow: hidden;
    padding: 30px 60px;
    margin: 15px;
  }

  .runners-room .box1 a h3 span {
    display: inline-block;
    min-width: 80px;
    font-size: 20px;
    font-family: pepper;
    font-weight: bold;
    color: white;
    padding: 6px 20px;
    background-color: #10B5A1;
    margin-bottom: 10px;
    border-radius: 30px;
  }

  .runners-room .box1 a span {
    display: block;
    font-size: 26px;
    color: #7D4E28;
    font-family: pepper;
  }

  .runners-room .box1 a p {
    position: relative;
    font-size: 28px;
    color: #007BB8;
    font-family: pepper;
    padding: 15px 0 0 0;
    padding-left: 60px;
  }

  .runners-room .box1 a p i {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-118%, -35%);
  }

  .runners-room .box1 a p i img {
    width: 75%;
  }

  @media screen and (min-width: 1350px) {
    .runners-room .box1 a {
      margin: 15px auto;
      width: 260px;
    }
  }

  @media screen and (max-width: 890px) {
    .runners-room .box1 a {
      padding: 30px 36px;
    }

    .runners-room-out {
      top: 0%;
      height: 85%;
    }
  }

  @media screen and (max-width: 740px) {
    .runners-room .box1 a {
      padding: 25px;
      margin: 10px;
    }

    .runners-room-out .chartroom-title span {
      font-size: 22px;
    }

    .runners-room .box1 a h3 span {
      font-size: 18px;
    }

    .runners-room .box1 a span {
      font-size: 20px;
    }

    .runners-room .box1 a p {
      font-size: 20px;
      padding-left: 46px;
    }

    .runners-room .box1 a p i {
      transform: translate(-98%, -35%);
    }

    .runners-room .box1 a p i img {
      width: 60%;
    }
  }

  @media screen and (max-width: 569px) {
    .runners-room .box1 a {
      padding: 15px 10px;
      margin: 0 10px 9px 10px;
      border-radius: 28px;
    }


  }

  @media screen and (max-width: 480px) {
    .runners-room .box1 a {
      padding: 5px;
      margin: 0 5px;
      border-radius: 20px;
    }

  }

  // activities menu
  .personer-box {
    //sition: absolute;
    width: 100%;
    display: inline-flex;
    float: left;
    height: 102%;
    padding-left: 5%;
    overflow: scroll;
    overflow-y: hidden;
  }

  .personer-box .alistimg {
    margin-top: 10%;
    display: block;
    padding-right: 12%;
    // width: 35%;
    position: relative;
    height: 100%;
    margin-right: 50px;
  }

  .personer-box .alistimgf {
    margin-left: 0%;
  }

  .personer-box .alistimg:last-child {
    padding-right: 12%;
  }

  .units {
    width: 100%;
    left: 0;
    margin: 0 auto;
    display: block;
    position: absolute;
  }

  .styleunit {
    background-color: #43BF76;
    border-style: none;
    border-radius: 50px;
    margin-top: 15px;
    font-size: 1.8rem;
    padding: 10px 40px;
    position: relative;
    text-align: center;
    font-family: pepper;
    color: white;
    font-weight: bold;
  }

  .personer-box .alistimg>div {
    display: inline-block;
    position: relative;
    width: 100%;
    top: 20%;
  }

  .t-gray {
    position: absolute;
    opacity: 0.23;
    background: #6c6b6b;
    width: 98%;
    height: 97%;
    border-radius: 45px;
    z-index: 9;
  }

  .personer-box .alistimg>div .p-monkey {
    // position: sticky;
    // width: 100%;
    width: 380px;
  }

  .personer-box .alistimg>div p {
    position: absolute;
    width: 98.25%;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    padding: 20px 0;
    font-size: 2rem;
    color: white;
    font-family: kg;
    bottom: 11px;
    background-color: #FF6831;
  }

  .personer-box .alistimg:first-child>div p {
    background-color: #FF6831;
  }

  .personer-box .alistimg:nth-child(2)>div p {
    background-color: #43BE76;
  }

  .personer-box .alistimg:nth-child(3)>div p {
    background-color: #0097FF;
  }

  .personer-box .alistimg:nth-child(4)>div p {
    background-color: #FF9239;
  }

  .comingsoon {
    position: absolute;
    top: -49px;
    right: -67px;
    width: 48% !important;
    z-index: 99;
  }
  @media screen and (min-device-height: 568px) and (max-device-height: 810px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 568px) and (max-device-height: 810px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 568px) and (max-width: 810px){
    .aspan {
      font-size: 2.5rem;
    }
    .aspan2 {
      bottom: -5%;
      font-size: 0.9rem;
    }
  }

  @media screen and (min-device-height: 811px)  and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 811px)  and (-webkit-device-pixel-ratio: 3),
  (max-width: 811px){
    .personer-box {
      width: 90%;
      padding-right: 5%;
    }

    .personer-box .alistimg {
      margin-right: 40px;
      padding-right: 0 !important;
      margin-top: 4%;
    }

    .styleunit {
      // height: 13%;
      font-size: 1.2rem;
    }

    .personer-box .alistimg>div p {
      border-bottom-left-radius: 27px;
      border-bottom-right-radius: 27px;
      padding: 10px 0;
      bottom: 9px;
      font-size: 1.4rem;
    }

    .t-gray {
      border-radius: 27px;
    }

    .personer-box .alistimg>div .p-monkey {
      width: 240px;
    }

    .comingsoon {
      top: -20px;
      right: -37px;
    }

    // .personer-box .alistimg:last-child {
    //     padding-right: 12%;
    // }
  }

  @media screen and (min-device-height: 812px) and (max-device-height: 899px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 812px) and (max-device-height: 899px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 812px) and (max-width: 899px){
    .personer-box {
      width: 90%;
      padding-right: 5%;
    }

    .personer-box .alistimg {
      margin-right: 50px;
      padding-right: 0 !important;
      margin-top: 4%;
    }

    .styleunit {
      // height: 13%;
      font-size: 1.2rem;
    }

    .personer-box .alistimg>div p {
      border-bottom-left-radius: 27px;
      border-bottom-right-radius: 27px;
      padding: 10px 0;
      bottom: 9px;
      font-size: 1.4rem;
    }

    .t-gray {
      border-radius: 27px;
    }

    .personer-box .alistimg>div .p-monkey {
      width: 240px;
    }

    .comingsoon {
      top: -20px;
      right: -37px;
    }

    .foncolor1{
      font-size: 1.2rem;
    }
    .foncolor2{
      font-size: 1.2rem;
    }


    .chart-room .left-walkers {
      margin: 0;
    }

    // .levels{
    //    font-size: 1rem;
    //    bottom: 10px;
    // }
    .personer-box .alistimg {
      padding-right: 0% !important;
    }
    .aspan {
      font-size: 2.5rem;
    }
    .aspan2{
      font-size: 1rem;
      bottom: -5%;
    }
  }

  @media screen and (min-device-height: 900px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 900px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 900px) and (max-width:1023px){
    .styleunit {
      margin-top: 20px;
      // height: 10%;
    }

    .two-monkey .age>img {
      width: 50%;
    }

    .personer-box {
      width: 90%;
      padding-right: 5%;
    }
    .foncolor1{
      font-size: 1.2rem;
    }
    .foncolor2{
      font-size: 1.2rem;
    }



    .chart-room .left-walkers {
      margin: 0;
    }

    // .levels{
    //    font-size: 1.2rem;
    //    bottom: 10px;
    // }
    .personer-box .alistimg {
      padding-right: 0% !important;
    }

    .two-monkey .age {
      top: -3%;
    }
    .aspan {
      font-size: 3.5rem;
    }
    .aspan2{
      font-size: 1rem;
      bottom: -25%;
    }
  }

  @media screen and (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 1024px) and (max-width: 1199px){
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



    .walkers-room-out .chartroom-title {
      height: 5rem;
    }

    .chart-room-out .chart-room {
      margin-top: 12%;
    }

    .chart-room .left-walkers {
      margin: 0;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    // .levels{
    //    font-size: 1.4rem;
    //    bottom: 10px;
    // }
    .chart-room-out .chartroom-title {
      transform: scale(1.2);
      height: 5rem;
      margin-top: 6%;
    }

    .two-monkey .age {
      top: -6%;
    }

    .two-monkey .age>img {
      width: 50%;
    }
    .aspan {
      font-size: 3rem;
    }
    .aspan2 {
      font-size: 1.4rem;
      bottom: -5%;
    }
    .progress{
      height: 28px;
    }
    .goldBG01{
      height: 25px;
    }
    .goldBG02{
      height: 25px;
    }
    .goldBG03{
      height: 25px;
    }
    .percent{
      height: 29px;
      font-size: 1.2rem;
      /*top: 3px;*/
    }
    .foncolor1{
      font-size: 1.5rem;
    }
    .foncolor2{
      font-size: 1.5rem;
    }
  }

  @media screen and (min-device-height: 1200px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2) ,
  (min-device-height: 1200px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-width: 1200px)and (max-width: 1600px){
    .personer-box .alistimg>div p {
      border-bottom-left-radius: 37px;
      border-bottom-right-radius: 37px;
      padding: 16px 0;
      bottom: 9px;
    }

    .t-gray {
      border-radius: 37px;
    }

    .personer-box .alistimg>div .p-monkey {
      width: 310px;
    }

    .comingsoon {
      top: -32px;
      right: -50px;
    }
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

    .aspan {
      font-size: 4rem;
    }
    .aspan2 {
      font-size: 1.8rem;
      bottom: -5%;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    .chart-room-out .chartroom-title {
      transform: scale(1.5);
      height: 5rem;
      margin-top: 6%;
    }

    // .levels{
    //    font-size: 1.8rem;
    //    bottom: 10px;
    // }
    .walkers-room-out .chartroom-title {
      height: 5rem;
      transform: scale(1.5);
    }

    .chart-room-out .chart-room {
      margin-top: 12%;
    }

    .chart-room .left-walkers {
      margin: 0;
    }

    .two-monkey .age {
      top: -6%;
    }

    .two-monkey .age>img {
      width: 50%;
    }

    .walkers-room .box1 a p i img {
      width: 2rem;
    }

    .walkers-room .box1 a p {
      font-size: 1.5rem;
    }
    .progress{
      height: 35px;
    }
    .goldBG01{
      height: 30px;
    }
    .goldBG02{
      height: 30px;
    }
    .goldBG03{
      height: 30px;
    }
    .percent{
      height: 34px;
      font-size: 1.2rem;
      /*top: 3px;*/
    }
    .foncolor1{
      font-size: 2rem;
    }
    .foncolor2{
      font-size: 2rem;
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

    .aspan {
      font-size: 5rem;
      height: 80%;
    }
    .aspan2 {
      font-size: 2.5rem;
      width: 72%;
      bottom: 5%;
      left: 14%;
    }
    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    .chart-room-out .chartroom-title {
      transform: scale(2);
      height: 5rem;
      margin-top: 6%;
    }

    // .levels{
    //    font-size: 1.8rem;
    //    bottom: 10px;
    // }
    .walkers-room-out .chartroom-title {
      height: 5rem;
      transform: scale(2);
      margin: 55px auto 30px auto;
    }

    .chart-room-out .chart-room {
      margin-top: 6%;
      transform: scale(1.5);
    }

    .chart-room .left-walkers {
      margin: 0;
    }

    .two-monkey .age {
      top: -6%;
    }

    .two-monkey .age>img {
      width: 50%;
    }

    .walkers-room .box1 a p i img {
      width: 2rem;
    }

    .walkers-room .box1 a p {
      font-size: 1.5rem;
    }
    .progress{
      height: 35px;
    }
    .goldBG01{
      height: 30px;
    }
    .goldBG02{
      height: 30px;
    }
    .goldBG03{
      height: 30px;
    }
    .percent{
      height: 34px;
      font-size: 1.2rem;
      /*top: 3px;*/
    }
    .foncolor1{
      font-size: 3rem;
    }
    .foncolor2{
      font-size: 3rem;
    }
  }
</style>
