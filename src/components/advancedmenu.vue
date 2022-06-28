<template>

  <div id="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="contain" id="container">
<!--      <img src="../assets/image/advancebg9.png" style="width: 100%;top:0;height: 100%;display:block;position: absolute;">-->
<!--      <img src="../assets/image/aback.png" @click="back" class="backbutton" />-->
      <h2 class="styletit">
        <img src="../assets/image/ptop3.png">
        <button :style="{fontFamily: unit==='Ii' ? 'OldR' : 'pepper'}">{{unit}}</button>
      </h2>
      <div class="menulist" id="scrollbody">
        <div class="listimg listfirst">
          <img :src=lightstar class="imgposit" v-if="stars[0].onestart">
          <img :src=star class="imgposit" v-if="!stars[0].onestart">
          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[0].twostart">
          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[0].twostart">
          <img :src=lightstar class="imgposit1" v-if="stars[0].threestart">
          <img :src=star class="imgposit1" v-if="!stars[0].threestart">
          <img @click="change" src="../assets/image/inter11.png" style="position: sticky;height: 50%;margin-top: 30%;margin-left: 3%">
        </div>
        <div class="listimg">
          <img :src=lightstar class="imgposit" v-if="stars[1].onestart">
          <img :src=star class="imgposit" v-if="!stars[1].onestart">
          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[1].twostart">
          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[1].twostart">
          <img :src=lightstar class="imgposit1" v-if="stars[1].threestart">
          <img :src=star class="imgposit1" v-if="!stars[1].threestart">
          <img @click="change2" src="../assets/image/inter21.png" style="position: sticky;height: 49%;margin-top: 28%;margin-left: 3%">
        </div>
        <div class="listimg">
          <img :src=lightstar class="imgposit" v-if="stars[2].onestart">
          <img :src=star class="imgposit" v-if="!stars[2].onestart">
          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[2].twostart">
          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[2].twostart">
          <img :src=lightstar class="imgposit1" v-if="stars[2].threestart">
          <img :src=star class="imgposit1" v-if="!stars[2].threestart">
          <img @click="change3" src="../assets/image/inter31.png" style="position: sticky;height: 50%;margin-top: 28%;margin-left: 3%">
        </div>
<!--        yes or no收-->
<!--        <div class="listimg">-->
<!--          <img :src=lightstar class="imgposit" v-if="stars[3].onestart">-->
<!--          <img :src=star class="imgposit" v-if="!stars[3].onestart">-->
<!--          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[3].twostart">-->
<!--          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[3].twostart">-->
<!--          <img :src=lightstar class="imgposit1" v-if="stars[3].threestart">-->
<!--          <img :src=star class="imgposit1" v-if="!stars[3].threestart">-->
<!--          <img @click="change4" src="../assets/image/inter41.png" style="position: sticky;height: 50%;margin-top: 30%;margin-left: 4%">-->
<!--        </div>-->
<!--        letter scrabble收-->
<!--        <div class="listimg">-->
<!--          <img :src=lightstar class="imgposit" v-if="stars[4].onestart">-->
<!--          <img :src=star class="imgposit" v-if="!stars[4].onestart">-->
<!--          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[4].twostart">-->
<!--          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[4].twostart">-->
<!--          <img :src=lightstar class="imgposit1" v-if="stars[4].threestart">-->
<!--          <img :src=star class="imgposit1" v-if="!stars[4].threestart">-->
<!--          <img @click="change5" src="../assets/image/inter51.png" style="position: sticky;height: 50%;margin-top: 30%;margin-left: 3%">-->
<!--        </div>-->
<!--        circle the sound-->
        <div class="listimg">
          <img :src=lightstar class="imgposit" v-if="stars[5].onestart">
          <img :src=star class="imgposit" v-if="!stars[5].onestart">
          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[5].twostart">
          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[5].twostart">
          <img :src=lightstar class="imgposit1" v-if="stars[5].threestart">
          <img :src=star class="imgposit1" v-if="!stars[5].threestart">
          <img @click="change6" src="../assets/image/inter61.png" style="position: sticky;height: 50%;margin-top: 30%;margin-left: 3%">
        </div>
<!--        odd word out收-->
<!--        <div class="listimg">-->
<!--          <img :src=lightstar class="imgposit" v-if="stars[6].onestart">-->
<!--          <img :src=star class="imgposit" v-if="!stars[6].onestart">-->
<!--          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[6].twostart">-->
<!--          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[6].twostart">-->
<!--          <img :src=lightstar class="imgposit1" v-if="stars[6].threestart">-->
<!--          <img :src=star class="imgposit1" v-if="!stars[6].threestart">-->
<!--          <img @click="change7" src="../assets/image/inter71.png" style="position: sticky;height: 50%;margin-top: 30%;margin-left: 3%">-->
<!--        </div>-->
        <div class="listimg">
          <img :src=lightstar class="imgposit" v-if="stars[7].onestart">
          <img :src=star class="imgposit" v-if="!stars[7].onestart">
          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[7].twostart">
          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[7].twostart">
          <img :src=lightstar class="imgposit1" v-if="stars[7].threestart">
          <img :src=star class="imgposit1" v-if="!stars[7].threestart">
          <img @click="change8" src="../assets/image/inter81.png" style="position: sticky;height: 50%;margin-top: 30%;margin-left: 3%">
        </div>
        <div class="listimg">
          <img :src=lightstar class="imgposit" v-if="stars[8].onestart">
          <img :src=star class="imgposit" v-if="!stars[8].onestart">
          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[8].twostart">
          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[8].twostart">
          <img :src=lightstar class="imgposit1" v-if="stars[8].threestart">
          <img :src=star class="imgposit1" v-if="!stars[8].threestart">
          <img @click="change9" src="../assets/image/inter101.png" style="position: sticky;height: 50%;margin-top: 30%;margin-left: 3%">
        </div>
        <div class="listimg bosimg">
          <img :src=lightstar class="imgposit" v-if="stars[9].onestart">
          <img :src=star class="imgposit" v-if="!stars[9].onestart">
          <img :src=lightstar style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="stars[9].twostart">
          <img :src=star style="position: relative;height: 11%;top: 23%;left: 1%;z-index: 2;" v-if="!stars[9].twostart">
          <img :src=lightstar class="imgposit1" v-if="stars[9].threestart">
          <img :src=star class="imgposit1" v-if="!stars[9].threestart">
          <img @click="change10" src="../assets/image/inter91.png" style="position: sticky;height: 50%;margin-top: 30%;margin-left: 3%">
        </div>


      </div>

      <div class="settinglist">
        <img src="../assets/image/abar.png" style="width: 100%;bottom: 0;height: 100%;">

        <div>
          <img :src=gameImage class="acstyle" @click="goinfo" />
          <span class="fontsize leftmar">{{firstName}}</span>
        </div>
        <div>
          <img src="../assets/image/icon_coin.png" class="coinstyle">
          <span class="fontsize leftmar2">{{sum}}</span>
        </div>
        <div @click="routerabout">
          <img src="../assets/image/adHome.png" class="repeat">
        </div>
        <div @click="back">
          <img src="../assets/image/adBack.png"  class="pause" >
        </div>
      </div>
    </div>
    <!-- <router-link to="/about">About</router-link> -->
    <div class='popContainer' v-show="popp">
      <p class="spanp">{{spanp}}</p>
      <button class="roleimg">
        <img src="../assets/image/p-rule.png" style="height: 100%;"  v-if="!changei1"/>
        <img src="../assets/image/p-rule2.png" style="height: 100%;"  v-if="changei1"/>
        <!--<img src="../assets/image/mistakes4.png" style="height: 100%;" v-if="ruleimg4" />-->
        <!--<img src="../assets/image/runner-rule.png" style="height: 100%;" v-if="ruleimg25" />-->
        <!--<img src="../assets/image/walkerks-rule.png" style="height: 100%;" v-if="ruleimg15" />-->
        <!--<img src="../assets/image/boss-rule.png" style="height: 100%;" v-if="ruleimg12" />-->
        <!--<img src="../assets/image/boss-rule2.png" style="height: 100%;" v-if="ruleimg8" />-->
      </button>
      <div class="withcolor">
        <div class="close" @click="pop">
          <img src="../assets/image/pcloce.png">
        </div>
        <button class="animapng7">
          <img src="http://monkeytown.monkeytree.com.hk/image/advanced1.gif" v-if="changei1">
          <img src="http://monkeytown.monkeytree.com.hk/image/advanced2s.gif" v-if="changei2">
          <img style="margin-top: 5%;" src="http://monkeytown.monkeytree.com.hk/image/advanced3.gif" v-if="changei3">
          <img src="http://monkeytown.monkeytree.com.hk/image/advanced4s.gif" v-if="changei4">
          <img src="http://monkeytown.monkeytree.com.hk/image/advanced5.gif" v-if="changei5">
          <img src="http://monkeytown.monkeytree.com.hk/image/advanced6.gif" v-if="changei6">
          <img src="http://monkeytown.monkeytree.com.hk/image/advanced7s.gif" v-if="changei7">
          <img src="http://monkeytown.monkeytree.com.hk/image/advanced8.gif" v-if="changei8">
          <img src="http://monkeytown.monkeytree.com.hk/image/advanced9.gif" v-if="changei9">
          <img src="http://monkeytown.monkeytree.com.hk/image/advanced10.gif" v-if="changei10">
        </button>

        <button class="start" @click="starpop"><span class="startspan">START</span></button>
      </div>
    </div>
  </div>

</template>

<script>
  var qs = require('qs');
  import $ from 'jquery';
  export default {
    name: "advancedmenu",
    props: {
      msg: String
    },
    data() {
      return {
        loading:false,
        popp: false,
        sum: 0,
        spring: '',
        spanp: '',
        UnitsList: [],
        firstName: '',
        gameImage: '',
        studentId: '',
        unit: '',
        unitsId: '',
        levelsId: '',
        cources: '',
        courseId: '',
        style: '',
        action: false,
        level: "",
        levels: '',
        startcoin: 0,
        startcoins: 0,
        ruleimg8: false,
        ruleimg10: false,
        ruleimg4: false,
        ruleimg15: false,
        boss: true,
        ruleimg25: false,
        ruleimg12: false,
        game: '',
        changei1: false,
        changei2: false,
        changei3: false,
        changei4: false,
        changei5: false,
        changei6: false,
        changei7: false,
        changei8: false,
        changei9: false,
        changei10: false,
        key: false,
        star: 'http://monkeytown.monkeytree.com.hk/image/Little_Star_frame.png',
        lightstar: 'http://monkeytown.monkeytree.com.hk/image/star_frame.png',
        stars: [
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },
          {
            onestart: false,
            twostart: false,
            threestart: false,
          },

        ],
        url: '/user/',
        url2:'',
        url3:"",
        phonicsDetailList:[],
        phonicsList:[],
        // url: 'http://demo11.embraiz.com/mtGame/user/Menu',
        //url: 'http://localhost:8080/mtGame/user/Menu',
        // id: "a",
        // page: 1,
      }
    },
    methods: {
      change() {
        if (this.UnitsList.length != 0) {
          this.spanp = "Look at the picture and listen to the word. Then, select the missing sound.";
          setTimeout(() => {
            this.changei1 = true;
            this.popp = !this.popp;
            // if( this.UnitsList[0].rank==0){
            this.ruleimg8 = true;
            this.ruleimg10 = false;
            this.ruleimg12 = false;
            this.ruleimg15 = false;
            this.ruleimg25 = false;
            this.ruleimg4 = false;
            // }else if( this.UnitsList[0].rank==1){
            // 	this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
            // }
            this.game = '1'
          }, 300);
        }
      },
      change2() {
        if (this.key != true && this.UnitsList.length != 0) {
          this.spanp = "Circle the picture that uses the correct sound";
          setTimeout(() => {
            this.changei2 = true;
            this.popp = !this.popp;
            // if( this.UnitsList[0].rank==0){
            this.ruleimg8 = true;
            this.ruleimg10 = false;
            this.ruleimg12 = false;
            this.ruleimg15 = false;
            this.ruleimg25 = false;
            this.ruleimg4 = false;
            // }else if( this.UnitsList[0].rank==1){
            // 	this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
            // }
            // this.ruleimg=true;
            // this.ruleimg1=false;
            // this.ruleimg2=false;
            // this.boss1=false;
            // this.boss2=false;
            this.game = '2'

          }, 300);
        }

      },
      change3() {
        if (this.key != true && this.UnitsList.length != 0) {
          this.spanp = "Listen to the word and select the correct sound.";
          setTimeout(() => {
            this.changei3 = true;
            this.popp = !this.popp;
            // if( this.UnitsList[2].rank==0){
            this.ruleimg8 = false;
            this.ruleimg10 = false;
            this.ruleimg12 = false;
            this.ruleimg15 = false;
            this.ruleimg25 = false;
            this.ruleimg4 = true;
            // }else if( this.UnitsList[2].rank==1){
            // 	this.ruleimg8=false;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=true;
            // }
            this.game = '3'
          }, 300);
        }
      },
      change4() {
        if (this.key != true && this.UnitsList.length != 0) {
          this.spanp = "Listen to the sentence and look at the picture. Then, select “Yes” or “No”.";
          setTimeout(() => {
            this.changei4 = true;
            this.popp = !this.popp;
            // if( this.UnitsList[1].rank==0){
            this.ruleimg8 = true;
            this.ruleimg10 = false;
            this.ruleimg12 = false;
            this.ruleimg15 = false;
            this.ruleimg25 = false;
            this.ruleimg4 = false;
            // }else if( this.UnitsList[1].rank==1){
            // 	this.ruleimg8=false;this.ruleimg12=true;this.ruleimg10=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
            // }
            this.game = '4'
          }, 300);
        }
      },
      change5() {
        if (this.key != true && this.UnitsList.length != 0) {
          this.spanp = " Listen to the word. Then, put the letters in the correct order.";
          setTimeout(() => {
            this.changei5 = true;
            this.popp = !this.popp;
            // if( this.UnitsList[4].rank==0){
            this.ruleimg8 = true;
            this.ruleimg10 = false;
            this.ruleimg12 = false;
            this.ruleimg15 = false;
            this.ruleimg25 = false;
            this.ruleimg4 = false;
            // }else if( this.UnitsList[4].rank==1){
            // 	this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
            // }
            this.game = '5'
          }, 300);
        }
      },
      change6() {
        if (this.key != true && this.UnitsList.length != 0) {
          this.spanp = "Listen to the word and circle the correct sound.";
          setTimeout(() => {
            this.changei6 = true;
            this.popp = !this.popp;
            // if( this.UnitsList[5].rank==0){
            this.ruleimg8 = true;
            this.ruleimg10 = false;
            this.ruleimg12 = false;
            this.ruleimg15 = false;
            this.ruleimg25 = false;
            this.ruleimg4 = false;
            // }else if( this.UnitsList[5].rank==1){
            // 	this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
            // }
            this.game = '6'
          }, 300);
        }
      },
      change7() {
        if (this.key != true && this.UnitsList.length != 0) {
          this.spanp = "Listen and select the word that does not match the sound. ";
          setTimeout(() => {
            this.changei7 = true;
            this.popp = !this.popp;
            // if( this.UnitsList[6].rank==0){
            this.ruleimg8 = true;
            this.ruleimg10 = false;
            this.ruleimg12 = false;
            this.ruleimg15 = false;
            this.ruleimg25 = false;
            this.ruleimg4 = false;
            // }else if( this.UnitsList[6].rank==1){
            // 	this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
            // }
            this.game = '7'
          }, 300);
        }
      },
      change8() {
        if (this.key != true && this.UnitsList.length != 0) {
          this.spanp = "Listen and match the words.";
          setTimeout(() => {
            this.changei8 = true;
            this.popp = !this.popp;
            // if( this.UnitsList[7].rank==0){
            this.ruleimg8 = false;
            this.ruleimg10 = false;
            this.ruleimg12 = false;
            this.ruleimg15 = true;
            this.ruleimg25 = false;
            this.ruleimg4 = false;
            // }else if( this.UnitsList[7].rank==1){
            // 	this.ruleimg8=false;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=true;this.ruleimg4=false;
            // }
            this.game = '8'
          }, 300);
        }
      },
      change9() {
        if (this.key != true && this.UnitsList.length != 0) {
          this.spanp = "Look at the picture. Then, listen and spell the word. ";
          this.changei9 = true;
          this.popp = !this.popp;
          // if( this.UnitsList[8].rank==0){
          this.ruleimg8 = true;
          this.ruleimg10 = false;
          this.ruleimg12 = false;
          this.ruleimg15 = false;
          this.ruleimg25 = false;
          this.ruleimg4 = false;
          // }else if( this.UnitsList[8].rank==1){
          // 	this.ruleimg8=false;this.ruleimg10=false;this.ruleimg12=true;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
          // }
          this.game = '9'
        }
      },
      change10() {
        if (this.key != true && this.UnitsList.length != 0) {
          this.spanp = "Listen and spell the word.";
          setTimeout(() => {
            this.changei10 = true;
            this.popp = !this.popp;
            // if( this.UnitsList[9].rank==0){
            this.ruleimg8 = false;
            this.ruleimg10 = false;
            this.ruleimg12 = false;
            this.ruleimg15 = true;
            this.ruleimg25 = false;
            this.ruleimg4 = false;
            // }else if( this.UnitsList[9].rank==1){
            // 	this.ruleimg8=false;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=true;this.ruleimg4=false;
            // }
            this.game = '10'
          }, 300);
        }
      },
      pop() {
        this.popp = !this.popp;
        this.changei1 = false;
        this.changei2 = false;
        this.changei3 = false;
        this.changei4 = false;
        this.changei5 = false;
        this.changei6 = false;
        this.changei7 = false;
        this.changei8 = false;
        this.changei9 = false;
        this.changei10 = false;
      },
      routerabout() {
        this.action = true;
        setTimeout(() => {
          this.action = false;
          this.$router.push({
            //核心语句
            path: "/source", //跳转的路径
            // query: {
            // 	//路由传参时push和query搭配使用 ，作用时传递参数
            // 	id: this.id,
            // 	account: this.account,
            // 	type: this.type,
            // 	sum: this.sum,
            // }
          });
        }, 1000);
      },
      starpop() {
        var audio = document.getElementById('music');
        audio.pause();
        if (this.game == '9') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced9', //跳转的路径
              query: {
                menuId: this.UnitsList[8].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[8].name,
                //partName:this.UnitsList[0].name,
              }
            })
          }, 300);
        }
        if (this.game == '8') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced8', //跳转的路径
              query: {
                menuId: this.UnitsList[7].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[7].name,
                //partName:this.UnitsList[0].name,
              }
            })
          }, 300);
        } else if (this.game == '1') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced1', //跳转的路径
              query: {
                menuId: this.UnitsList[0].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[0].name,
                //partName:this.UnitsList[1].name,
              }
            })
          }, 300);
        } else if (this.game == '3') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced3', //跳转的路径
              query: {
                menuId: this.UnitsList[2].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[2].name,
                //partName:this.UnitsList[2].name,
              }
            })
          }, 300);
        } else if (this.game == '2') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced2', //跳转的路径
              query: {
                menuId: this.UnitsList[1].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[1].name,
                //partName:this.UnitsList[3].name,
              }
            })
          }, 300);
        } else if (this.game == '6') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced6', //跳转的路径
              query: {
                menuId: this.UnitsList[5].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[5].name,
                //partName:this.UnitsList[4].name,
              }
            })
          }, 300);
        } else if (this.game == '4') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced4', //跳转的路径
              query: {
                menuId: this.UnitsList[3].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[3].name,
                // partName:this.UnitsList[5].name,
              }
            })
          }, 300);
        } else if (this.game == '5') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced5', //跳转的路径
              query: {
                menuId: this.UnitsList[4].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[4].name,
                // partName:this.UnitsList[6].name,
              }
            })
          }, 300);
        } else if (this.game == '7') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced7', //跳转的路径
              query: {
                menuId: this.UnitsList[6].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[6].name,
                // 	partName:this.UnitsList[7].name,
              }
            })
          }, 300);
        } else if (this.game == '10') {
          setTimeout(() => {
            this.$router.push({ //核心语句
              path: '/advanced10', //跳转的路径
              query: {
                menuId: this.UnitsList[9].id,
                unitsId: this.unitsId,
                unit: this.unit,
                name:this.UnitsList[9].name,
                // 	partName:this.UnitsList[7].name,
              }
            })
          }, 300);
        }

      },
      goinfo() {
        this.$router.push({ //核心语句
          path: '/info', //跳转的路径
        })
      },
      back() {
        this.$router.push({ //核心语句
          path: '/pchosegame', //跳转的路径
          query: {
            phonicsId: localStorage.getItem('phonicsId'),
            // courseId: localStorage.getItem('courseId'),
            style: localStorage.getItem('style'),
            level: localStorage.getItem('level'),
            cources: localStorage.getItem('cources'),
            unit: localStorage.getItem('unit')
          }
        })
      },
      bodyScroll(e) {
        const ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判断是否为ios
        var els = document.getElementById("scrollbody");
        if (ios) {
          // 去除 iOS 顶部橡皮筋效果
          let startY, endY;
          document.body.addEventListener('touchstart', function(e) {
            startY = e.touches[0].pageY;
          });
          document.body.addEventListener('touchmove', function(e) {
            endY = e.touches[0].pageY;
            // 手指下滑，页面到达顶端不能继续下滑
            if (endY > startY && document.body.scrollTop <= 0) {
              e.preventDefault();
            }
            if (endY < startY && $(window).scrollTop() +
              $(window).height() >= $('body')[0].scrollHeight) {
              e.preventDefault();
            }
          }, {
            passive: false
          });

        }

      },
    },
    watch: {
      'loading': function(newVal) {
        if (this.loading === true) {
          alertMsg3("Loading...Please Wait");
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
    // destroyed() {
    // document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
    // },
    created() {
      this.loading = true;
      this.star = "http://monkeytown.monkeytree.com.hk/image/season-star2.png";
      this.lightstar = "http://monkeytown.monkeytree.com.hk/image/season-star.png";
      if (this.$route.query.studentId) {
        if(localStorage.getItem('userId')){
          this.studentId=this.$route.query.studentId;
          this.unit = this.$route.query.unit;
          localStorage.setItem('studentId',this.studentId);
          this.url2 = this.url + "phonics";
          this.$axios.post(this.url2, qs.stringify({
            studentId: localStorage.getItem('studentId'),
          })).then(res => {
            this.loading = false;
            this.phonicsList = res.data.phonicsList;
            for(var i=0;i<this.phonicsList.length;i++){
              if(this.phonicsList[i].name==this.$route.query.level){
                this.phonicsId=this.phonicsList[i].id;

                this.url3 = this.url + "PhonicsDetail3";
                this.$axios.post(this.url3, qs.stringify({
                  studentId: localStorage.getItem('studentId'),
                  phonicsId: this.phonicsId
                })).then(res => {
                  this.phonicsDetailList = res.data.phonicsDetailList;
                  for(var i=0;i<this.phonicsDetailList.length;i++){
                    if(this.phonicsDetailList[i].name==this.$route.query.unit){
                      this.unitsId=this.phonicsDetailList[i].id;
                      if (this.$route.query.style) {
                        this.style = this.$route.query.style;
                        localStorage.setItem('unit', this.$route.query.unit);
                        localStorage.setItem('level', this.$route.query.level);
                        localStorage.setItem('cources', this.$route.query.cources);
                        localStorage.setItem('phonicsId', this.phonicsId);
                        // localStorage.setItem('courseId', this.$route.query.courseId);
                        localStorage.setItem('style', this.$route.query.style);
                      }

                      this.firstName = localStorage.getItem('firstName');
                      this.gameImage = localStorage.getItem('gameImage');
                      // this.sum = parseInt(localStorage.getItem('sumCoins'));
                      this.studentId = localStorage.getItem('studentId');
                      this.$axios.post(this.url+"PhonicsMenu3", qs.stringify({
                        studentId: localStorage.getItem('studentId'),
                        phonicsDetailId: this.unitsId
                      })).then(res => {
                        this.loading = false;
                        this.UnitsList = res.data.PhonicsList;
                        this.sum = res.data.sumCoins;
                        localStorage.setItem('sumCoins', this.sum);
                        // res.data.UnitsList.splice(8,1);
                        for (var i = 0; i < this.UnitsList.length; i++) {
                          if (this.UnitsList[i].sta == "0") {
                            this.stars[i].onestart = false;
                            this.stars[i].twostart = false;
                            this.stars[i].threestart = false;
                          } else if (this.UnitsList[i].sta == "1") {
                            this.stars[i].onestart = true;
                            this.stars[i].twostart = false;
                            this.stars[i].threestart = false;
                          } else if (this.UnitsList[i].sta == "2") {
                            this.stars[i].onestart = true;
                            this.stars[i].twostart = true;
                            this.stars[i].threestart = false;
                          } else if (this.UnitsList[i].sta == "3") {
                            this.stars[i].onestart = true;
                            this.stars[i].twostart = true;
                            this.stars[i].threestart = true;
                          }
                        }
                        // this.startcoins = this.sum;
                        // if (this.startcoins >= 20) {
                        //   this.startcoins = 20;
                        //   this.boss = true;
                        // }
                      }, res => {
                        console.info('false');
                      });

                    }
                  }
                }, res => {
                  console.info('false');
                });
              }
            }
          }, res => {
            console.info('false');
          });


        }else {
          this.$router.push({ //核心语句
            path: '/login', //跳转的路径
            query: {
              style:this.$route.query.style,
              unit:this.$route.query.unit,
              level:this.$route.query.level,
              cources:this.$route.query.cources,
              studentId:this.$route.query.studentId
            }
          })
        }
      } else {
        this.unitsId = this.$route.query.unitsId;
        this.unit = this.$route.query.unit;
        if (this.$route.query.style) {
          this.style = this.$route.query.style;
          localStorage.setItem('unit', this.$route.query.unit);
          localStorage.setItem('level', this.$route.query.level);
          localStorage.setItem('cources', this.$route.query.cources);
          localStorage.setItem('phonicsId', this.$route.query.phonicsId);
          // localStorage.setItem('courseId', this.$route.query.courseId);
          localStorage.setItem('style', this.$route.query.style);
        }
        // if(this.style==='courses'){
        //   this.url= '/games/PhonicsMenu2';
        // }
        this.firstName = localStorage.getItem('firstName');
        this.gameImage = localStorage.getItem('gameImage');
        this.sum = parseInt(localStorage.getItem('sumCoins'));
        this.studentId = localStorage.getItem('studentId');
        this.$axios.post(this.url+"PhonicsMenu3", qs.stringify({
          studentId: localStorage.getItem('studentId'),
          phonicsDetailId: this.unitsId
        })).then(res => {
          this.loading = false;
          this.UnitsList = res.data.PhonicsList;
          this.sum = res.data.sumCoins;
          localStorage.setItem('sumCoins', this.sum);
          // res.data.UnitsList.splice(8,1);
          for (var i = 0; i < this.UnitsList.length; i++) {
            if (this.UnitsList[i].sta == "0") {
              this.stars[i].onestart = false;
              this.stars[i].twostart = false;
              this.stars[i].threestart = false;
            } else if (this.UnitsList[i].sta == "1") {
              this.stars[i].onestart = true;
              this.stars[i].twostart = false;
              this.stars[i].threestart = false;
            } else if (this.UnitsList[i].sta == "2") {
              this.stars[i].onestart = true;
              this.stars[i].twostart = true;
              this.stars[i].threestart = false;
            } else if (this.UnitsList[i].sta == "3") {
              this.stars[i].onestart = true;
              this.stars[i].twostart = true;
              this.stars[i].threestart = true;
            }
          }
          // this.startcoins = this.sum;
          // if (this.startcoins >= 20) {
          //   this.startcoins = 20;
          //   this.boss = true;
          // }
        }, res => {
          console.info('false');
        });

      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  //MENU css
  #hello {
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    //background-image: url("../assets/image/advancebg9.png");
    background-image: url("http://monkeytown.monkeytree.com.hk/image/advancebg9.png");
    background-color: #204900;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    z-index: 999;
    position: fixed;

  }

  .popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .backbutton {
    // display: block;
    z-index: 2;
    width: 6%;
    position: fixed;
    left: 15px;
    top: 15px;
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
    text-align: left;
  }

  .animapng {
    height: 80%;
    margin-top: -7%;
    margin-left: 10%;
  }

  .animapng7 {
    height: 70%;
    width: auto;
    margin-top: 8%;
    border: none;
    background: none;
    text-align: center;
  }

  .animapng7 img {
    height: 100%;
  }

  .roleimg {
    position: absolute;
    height: 68%;
    top: 15%;
    left: 5%;
    border: none;
    background: none;
  }

  .start {
    background-color: #4E8F40;
    width: 30%;
    right: 35%;
    bottom: -10%;
    color: white;
    height: 20%;
    border-radius: 50px;
    border-style: none;
    position: absolute;
    font-family: KG;
  }

  .startspan {
    display: inline-block;
    padding: 8%;
    font-size: x-large;
  }

  .acstyle {
    height: 70%;
    position: absolute;
    left: 5%;
    bottom: 9%;
    border-radius: 50px;
  }

  .keyclose {
    position: absolute;
    right: 0%;
    top: 35%;
    height: 11%;
  }

  // .spannumber{
  // 	    position: absolute;
  // 	    width: 100%;
  // }
  //    .spannum{
  // 	    color: white;
  // 	    -webkit-text-stroke: 2px #057BB8;
  // 	    font-size: 1.4rem;
  // 	    font-family: KG;
  // 		    text-align: center;
  // 		    margin-top: 3px;
  // 	    display: inline-block;
  // }
  .fonstart {
    top: -23%;
    left: 6%;
    color: white;
    position: relative;
    font-size: larger;
    font-family: kg;
  }

  .coinstyle {
    height: 70%;
    position: absolute;
    left: 33%;
    bottom: 9%;
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

  .menulist {
    //sition: absolute;
    width: 100%;
    display: inline-flex;
    float: left;
    height: 85%;
    padding-left: 5%;
    overflow: scroll;
    overflow-y: hidden;
  }

  /*.menulist::-webkit-scrollbar {*/
  /*display: none;*/
  /*}*/

  .listimg {
    margin-top: 4%;
    display: block;
    width: 31%;
    margin-right: 10px;
    position: relative;
    height: 100%;
  }

  .listfirst {
    margin-left: -2%;
  }

  // .listimg img {
  // 	cursor: pointer;
  // 	transition: all 0.6s;
  // }

  // 	.listimg:visited {
  // 		transform: scale(1);
  // 	}
  //
  // 	.listimg:active {
  // 		transform: scale(1);
  // 	}
  //
  .setting {
    width: 12%;
    position: absolute;
    right: 8%;
    bottom: 0%;
  }

  .settingb {
    width: 12%;
    position: absolute;
    right: 20%;
    bottom: 0%;
  }

  .fade-enter-active {
    transition: all 0.6s;
  }

  .fade-leave-active {
    // opacity: 0;
    transition: all 0.6s;
  }

  .fade-enter {
    //opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  .fade-leave-to {
    //opacity: 0;
    //transform: translate3d(0, 0, 0);

  }

  .imgposit {
    position: relative;
    height: 11%;
    top: 28%;
    z-index: 2;
    margin-left: 1%;
  }

  .imgposit1 {
    position: relative;
    height: 11%;
    top: 28%;
    left: 2%;
    z-index: 2;
  }

  .card {
    height: 13%;
    top: 20%;
    right: 26%;
    position: absolute;
    z-index: 2;
  }

  .bosimg {
    padding-left: 1%;
    padding-right: 10%;
  }

  .styletit {
    margin: 20px auto;
    height: 3rem;
    width: 100%;
    position: absolute;

    button {
      color: white;
      font-size: 25px;
      font-family: pepper;
      font-weight: bolder;
      border-style: none;
      background: none;
      display: inline-block;
      position: absolute;
      padding: 5px 40px;
      transform: translate(-50%, 0%);
      margin: 0 auto;
    }

    img {
      transform: translate(-50%, 0%);
      position: absolute;
    }
  }

  .styletitC {
    background-color: #43BF76;
    border-style: none;
    border-radius: 50px;
    width: 85%;
    height: 11%;
    font-size: 1.3rem;
    margin-left: -8%;
    position: absolute;
    font-family: pepper;
    color: white;
  }

  @media screen and (max-width:481px) {
    .listimg {
      display: block;
      width: 30%;
    }

    .fontsize {
      bottom: 16%;
      position: absolute;
      font-size: 1.2rem;
      margin-left: 2%;
    }

    .startspan {
      padding: 10%;
      font-size: large;
    }

    // .spanicon{
    //        top: -1.8rem;
    // 	   font-size: 0.5rem;
    // }
    .fonstart {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 482px) and (max-width: 569px) {

    .listimg {
      margin-left: 7%;
    }

    .fontsize {
      bottom: 16%;
      position: absolute;
      font-size: 1.2rem;
      margin-left: 2%;
    }

    .startspan {
      padding: 9%;
      font-size: large;
    }

    // .spanicon{
    //        top: -1.8rem;
    // 	   font-size: 0.5rem;
    // }
    .fonstart {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1354px) {
    .imgposit {
      margin-left: 6%;
    }

    .setting {
      width: 14%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }

    .settingb {
      width: 14%;
      position: absolute;
      right: 20%;
      bottom: 0%;
    }

    .styletit {
      transform: scale(1.5);
      margin: 5rem auto;
    }

    .styletitC {
      font-size: 1.5rem;
    }

    .listimg {
      width: 40%;
      margin-left: -2%;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }

    .listfirst {
      margin-left: -60px;
    }

    .acstyle {
      height: 70%;
      position: absolute;
      left: 5%;
      bottom: 9%;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 2.5rem;
      margin-left: 2%;
    }

    .leftmar2 {
      left: 43%;
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

    .startspan {
      padding: 12%;
      font-size: xx-large;
    }

    .close img {
      height: 70px;
      width: 70px;

    }

    .roleimg {
      height: 53%;
      top: 20%;
    }

    // .spanicon{
    //        top: -3.6rem;
    // 	   font-size: 1.6rem;
    // }
    .fonstart {
      top: -22%;
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1355px)and (max-width:1600px) {
    .imgposit {
      margin-left: 6%;
    }

    .setting {
      width: 14%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }

    .settingb {
      width: 14%;
      position: absolute;
      right: 20%;
      bottom: 0%;
    }

    .styletit {
      transform: scale(1.5);
      margin: 5rem auto;
    }

    .styletitC {
      font-size: 1.5rem;
    }

    .listimg {
      width: 40%;
      margin-left: -3%;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }

    .listfirst {
      margin-left: -60px;
    }

    // 	.listimg:visited {
    // 		transform: scale(0.8);
    // 	}
    //
    // 	.listimg:active {
    // 		transform: scale(0.8);
    // 	}

    .acstyle {
      height: 70%;
      position: absolute;
      left: 5%;
      bottom: 9%;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 3rem;
      margin-left: 2%;
    }

    .leftmar2 {
      left: 43%;
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

    .startspan {
      padding: 12%;
      font-size: xx-large;
    }

    .close img {
      height: 70px;
      width: 70px;

    }

    .roleimg {
      height: 53%;
      top: 20%;
    }

    .fonstart {
      top: -22%;
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 570px) and (max-width: 735px) {
    .listimg {
      margin-left: 7%;
    }
  }
  @media screen and (min-width: 736px) and (max-width:811px) {
    .listimg {
      margin-left: 7%;
    }

    .roleimg {
      // height: 45%;
      // margin-top: -5px;
    }

    .twomenu {
      padding-top: 15%;
    }
  }

  @media screen and (min-width: 812px) and (max-width:895px) {
    .listimg {
      margin-left: 7%;
    }
    .listfirst {
      margin-left: 5%;
    }
    .setting {
      width: 10%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }

    .settingb {
      width: 10%;
      position: absolute;
      right: 20%;
      bottom: 0%;
    }



    .startspan {
      padding: 6%;
    }

    .menulist {
      margin-top: 0%;
    }

    .fonstart {
      left: -5%;
    }

    .listimg {
      width: 26%;
    }

    .card {
      right: 16%;
    }

    .bosimg {
      padding-left: 1%;
      //margin-top: 8%;
    }

  }

  @media screen and (min-width: 812px) and (max-width:895px) {
    .setting {
      width: 10%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }

    .settingb {
      width: 10%;
      position: absolute;
      right: 20%;
      bottom: 0%;
    }

    .listimg {
      width: 26%;
      margin-left: 7%;
    }

    .startspan {
      padding: 6%;
    }

    .menulist {
      margin-top: 0%;
    }

    .fonstart {
      left: -5%;
    }

    .card {
      left: 40%;
      top: 20%;
    }

    .bosimg {
      padding-left: 1%;
      //margin-top: 7%;
    }
  }

  @media screen and (min-width: 895px) and (max-width:1023px) {
    .setting {
      width: 10%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }

    .settingb {
      width: 10%;
      position: absolute;
      right: 20%;
      bottom: 0%;
    }



    .startspan {
      padding: 6%;
    }

    .menulist {
      margin-top: 0%;
    }

    .listimg {
      width: 26%;
      margin-left: 7%;
    }

    .fonstart {
      left: -5%;
    }

    .card {
      left: 40%;
      top: 20%;
    }

    .bosimg {
      padding-left: 1%;
      //margin-top: 7%;
    }
  }

  @media screen and (min-width: 1600px) {
    .imgposit {
      margin-left: 2%;
    }

    .setting {
      width: 14%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }

    .settingb {
      width: 14%;
      position: absolute;
      right: 20%;
      bottom: 0%;
    }

    .styletit {
      transform: scale(2);
      margin: 5rem auto;
    }

    .styletitC {
      font-size: 1.5rem;
    }

    .listimg {
      width: 40%;
      margin-left: 0;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
      margin-top: 3%;
    }

    .listfirst {
      margin-left: -60px;
    }


    .acstyle {
      height: 70%;
      position: absolute;
      left: 5%;
      bottom: 9%;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 3rem;
      margin-left: 2%;
    }

    .leftmar2 {
      left: 43%;
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
      border-radius: 80px;
    }

    .close {
      width: 100px;
      height: 100px;
      margin: -36px;
    }

    .startspan {
      padding: 9%;
      font-size: 3rem;
    }

    .animapng7 {
      width: auto;
    }

    .close img {
      height: 100px;
      width: 100px;

    }

    .roleimg {
      height: 63%;
      top: 20%;
    }

    .fonstart {
      top: -22%;
      font-size: 2rem;
    }

    .start {
      border-radius: 80px;

    }
  }

</style>
