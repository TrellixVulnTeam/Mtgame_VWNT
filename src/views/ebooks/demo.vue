<template>
  <div id="demo">
    <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="bookmusic"><source  src="../../assets/video/book.mp3"></audio>

    <audio id="audiomp3" autoplay="autoplay" style="display: none;" controls>
      <source :src="bigsound" v-if="video">
    </audio>
    <img src="../../assets/image/eback.png" @click="back" class="backbutton" />
    <!--<img src="../../assets/image/booksounds.png" @click="help" class="helpbutton" />-->
    <img src="../../assets/image/ebook.png" style="width: 100%;height: 100%; z-index: -1;position: absolute;">
    <div class="container" v-show="onef">
      <div id="out" style="width: 100%;height: 100%;position: absolute;z-index: 2;display: none;"></div>
      <img src="../../assets/image/booksounds.png" @click="help" class="helpbutton"  v-show="showsound"/>
      <div class="album" :class="{'album--open': isOpenedTop,'album--close': isCloseddTop}" style="pointer-events: painted;">
        <div class="album__paper" :style="{zIndex: isOpenedTop ? 0 : items.length + 1}" :class="{'open': isOpenedTop,'albem_center':!isOpenedTop}"
             @click="topOpen(isOpenedTop)">
          <div class="album__page front" :style="{zIndex:  items.length  }">
            <div>
              <img :src=fontimg style="width: 100%;height: 100%;position: absolute;border-radius: 25px;">
              <!-- <div class="album__top-title">Album</div>
              <div class="cat-mark"></div> -->
            </div>
          </div>
          <div class="album__page back" :style="{zIndex: 0}" v-show="isOpenedTop1">
            <img :src="backimg"   class="backclass5"/><!-- 前言 -->
          </div>
        </div>

        <div  class="album__paper" v-for="(page, idx) in items" :key="idx + 1" :style="{zIndex: page.is_open ? idx + 1 : items.length + 1 - (idx + 1)}"
             :class="{'open': page.is_open,'albem_center':!isOpenedTop}" @click="idx+1 === items.length ? close(idx, page.is_open) : open(idx, page.is_open)">
          <div class="album__page front" :style="{zIndex:  items.length +1}">
            <img :src="backimg2" class="backclass" v-if="idx===0" v-show="isOpenedTop1" :style="{zIndex:  items.length +2}"/>
            <img :src="insetimg" class="insetimg" v-if="idx+1 === items.length"  v-show="isOpenedTop1" :style="{zIndex:  1}"/>

            <div class="fontclass" v-if="idx!=0" v-show="isOpenedTop1"  :style="{zIndex:  items.length}">
              <img :src="wordimg"   class="fontback" v-show="isOpenedTop1&&!fontshow" style="z-index: 999;">
              <!--<img src="../../assets/image/fontabck.png" class="fontback" v-show="isOpenedTop1">-->
              <button style="width: 85%;height:75%;background: none;border: none;font-size: 2rem;
                 font-family: cboard;overflow: hidden;position: absolute;top:0;z-index: 1000;" v-show="!fontshow" v-if="!backgrou">
                <h4>
                  <!-- <span class="transformcolor">This is a  pigThis is a  pigThis is a  pigThis is a  pig This is a  pig</span> -->
                  <div>
                    <p :class="'p'+idx">{{page.word[0].word}}</p>
                    <!-- <span class='text2' :class="{animation:page.is_open}"></span> -->
                  </div>
                </h4>
              </button>

            </div>

          </div>
          <div  class="album__page back" :style="{zIndex: idx}">
            <img :src="page.bg"  @load="updated(idx)"  :class="idx+1 === items.length ?  'backclass3' : 'backclass4'" v-if="!thend" v-show="isOpenedTop1&&page.is_open"/>
            <img :src="page.bg" :class="idx+1 === items.length ? 'backclass2' : 'backclass3'"  :style="{display: thend ? 'block':'none'}" v-if="thend" v-show="!isOpenedTop1"/>
            <!-- <img :src="backimg" /> -->
          </div>

        </div>

        <div class="buttons" v-if="buttons">
          <!-- <img src="../../assets/image/Icon_home0.png" class="repeat" v-if="action1"> -->
          <img src="../../assets/image/blue_restart0.png" class="buttonsimg" @click="reset()">
          <img src="../../assets/image/blue_next0.png" class="buttonsimg2" @click="next()">
        </div>
        <!-- <div class="album__back"></div>
        <div class="album__bottom"></div>
        <div class="album__shadow"></div> -->
      </div>

    </div>
  </div>

</template>

<script>
  import $ from "jquery";

  var qs = require('qs');
  export default {
    name: "demo",
    watch: {
      'items': function(newVal) {
        setTimeout(() => {
          // $('.album__paper:first .album__page').css("background-image", this.insetimg);
          //  $('.album__paper:last-child').css("background-image", this.insetimg);
          // console.log($('.album__paper:last-child'));
        }, 500)
      },
      'video': function(newVal) {
        if (this.video === true) {
          setTimeout(() => {
            this.video = false;

          }, this.playtime * 1000);
        }
      },
      // 'updated2':function(newVal){
      //   let imgList = document.getElementsByClassName('backclass4');//图片集合
      //   let imgCount = imgList.length;//图片总数
      //
      //   // for (let i = 0; i < imgCount; i++) {
      //   //   if(imgList[i].complete){
      //   this.imgLoad++;
      //   console.log(this.imgLoad);
      //   if (this.imgLoad === imgCount) {
      //     this.loading =false;
      //     this.isAllLoaded = true;
      //     this.topOpen2();
      //     console.log("图片加载完成 展示组件");
      //   }
      //
      // }


    },
    data() {
      return {
        bReady: true,
        iNow: 0,
        oBox: "",
        showsound:false,
        imgLoad:0,
        oPage: "",
        readpage:0,
        pageurl:'/book/bookCompleteUpdate',
        endPage:0,
        oldreadpage:0,
        isAllLoaded:false,
        loading:true,
        helps:false,
        varidx:'',
        fontshow:true,
        varisOpen:'',
        show:true,
        repeat:false,
        oPage2: "",
        oFront: "",
        oBack: "",
        buttons: false,
        thend: false,
        sortId: '',
        booklevel2:'',
        booktitleColor:'',
        playtime: 20,
        pagewords:'22',
        wordlength:0,
        isOpenedTop: false,
        isOpenedTop1:0,
        isCloseddTop: false,
        backgrou: false,
        video: false,
        bigsound: '',
        listBookName:[],
        out: false,
        onef: false,
        nowindex: 0,
        // word:[
        //   0:{
        //     font:'this is apple',
        //     audio:"",
        //     },
        //   1:{
        //     font:'this is apple',
        //     audio:"",
        //     },
        //   2:{
        //     font:'this is apple',
        //     audio:"",
        //     },
        //   3:{
        //     font:'this is apple',
        //     audio:"",
        //     },
        // ],
        // fontimg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/7de3f48e-8014-4e13-93bd-909df232ea74.png", //封面图片
        // backimg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/93599aab-4915-49bd-bc22-f84c1c70ea53.png", //前言图片
        // insetimg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9457c73f-f4b9-4efd-b20c-a6e67feac10d.png", //内容背景
        // backimg2: 'http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/ca2973ea-f007-4390-8c7c-d5c3ddf44aaa.png', //前言图片第一页
        fontimg: '', //封面图片
        backimg: '', //前言图片
        insetimg: '', //内容背景
        backimg2:'',
        wordimg:'',
        items: [
        //   {
        //   // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/2page.png",
        //   bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/ea026b35-8e9f-4231-a3f5-dfc84c3e4972.png",
        //   // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //   word: [{
        //     audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/test2m4a.m4a",
        //     word: "1Sometimes I feel excited1.",
        //   }, {
        //     audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/testm4a.m4a",
        //     word: "1Sometimes I feel excited2.",
        //   },
        //     {
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/test2m4a.m4a",
        //       word: "1Sometimes I feel excited3.",
        //     }
        //   ],
        //   is_open: 0
        // }, //第一页的图片音频和翻过来的背面图
        //   {
        //     // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/4page.png",
        //     bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6663bf8d-6942-4fdd-9177-368ef5a6e571.png",
        //     // img3: "http://placekitten.com/g/200/100",
        //     // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/67b831c4-fcd2-46d9-ac6a-a2ec330dd458.mp3",
        //     word: [{
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited4.",
        //     }, {
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/testm4a.m4a",
        //       word: "1Sometimes I feel excited5.",
        //     },
        //       {
        //         audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/test2m4a.m4a",
        //         word: "1Sometimes I feel excited6.",
        //       }
        //     ],
        //     is_open: 0
        //   },
        //   {
        //     // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6page.png",
        //     bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6663bf8d-6942-4fdd-9177-368ef5a6e571.png",
        //     // img3: "http://placekitten.com/g/100/100",
        //     // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/67b831c4-fcd2-46d9-ac6a-a2ec330dd458.mp3",
        //     word: [{
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/testm4a.m4a",
        //       word: "1Sometimes I feel excited7.",
        //     }, {
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/test2m4a.m4a",
        //       word: "1Sometimes I feel excited8.",
        //     },
        //       {
        //         audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/testm4a.m4a",
        //         word: "1Sometimes I feel excited9.",
        //       }
        //     ],
        //     is_open: 0
        //   },
        //   {
        //     // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8page.png",
        //     bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6663bf8d-6942-4fdd-9177-368ef5a6e571.png",
        //     // img3: "http://placekitten.com/g/100/200",
        //     // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/67b831c4-fcd2-46d9-ac6a-a2ec330dd458.mp3",
        //     // title: "NYANNYAN",
        //     word: [{
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/test2m4a.m4a",
        //       word: "1Sometimes I feel excited10.",
        //     }, {
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/testm4a.m4a",
        //       word: "1Sometimes I feel excited11.",
        //     },
        //       {
        //         audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/test2m4a.m4a",
        //         word: "1Sometimes I feel excited12.",
        //       }
        //     ],
        //     is_open: 0
        //   },
        //   {
        //     // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/10page.png",
        //     bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6663bf8d-6942-4fdd-9177-368ef5a6e571.png",
        //     // img3: "http://placekitten.com/g/100/200",
        //     // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/67b831c4-fcd2-46d9-ac6a-a2ec330dd458.mp3",
        //     word: [{
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited13.",
        //     }
        //     ],
        //     is_open: 0
        //   },
        //   {
        //     // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12page.png",
        //     bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6663bf8d-6942-4fdd-9177-368ef5a6e571.png",
        //     // img3: "http://placekitten.com/g/100/200",
        //     // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/67b831c4-fcd2-46d9-ac6a-a2ec330dd458.mp3",
        //     word: [{
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited16.",
        //     },
        //     ],
        //     is_open: 0
        //   },
        //   {
        //     // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12page.png",
        //     bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6663bf8d-6942-4fdd-9177-368ef5a6e571.png",
        //     // img3: "http://placekitten.com/g/100/200",
        //     // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/67b831c4-fcd2-46d9-ac6a-a2ec330dd458.mp3",
        //     word: [{
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited19.",
        //     }
        //     ],
        //     is_open: 0
        //   },
        //   {
        //     // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12page.png",
        //     bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6663bf8d-6942-4fdd-9177-368ef5a6e571.png",
        //     // img3: "http://placekitten.com/g/100/200",
        //     // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/67b831c4-fcd2-46d9-ac6a-a2ec330dd458.mp3",
        //     word: [{
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited22.",
        //     }, {
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited23.",
        //     },
        //       {
        //         audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //         word: "1Sometimes I feel excited24.",
        //       }
        //     ],
        //     is_open: 0
        //   },
        //   {
        //     // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12page.png",
        //     bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6663bf8d-6942-4fdd-9177-368ef5a6e571.png",
        //     // img3: "http://placekitten.com/g/100/200",
        //     // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/67b831c4-fcd2-46d9-ac6a-a2ec330dd458.mp3",
        //     word: [{
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited25.",
        //     }, {
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited26.",
        //     },
        //       {
        //         audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //         word: "1Sometimes I feel excited27.",
        //       }
        //     ],
        //     is_open: 0
        //   },
        //   {
        //     // img1: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/14page.png",
        //     bg: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8979ef97-d0a7-4200-b9d6-6f30cec6db05.png", //封面背后
        //     // img3: "http://placekitten.com/g/250/300",
        //     // audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/67b831c4-fcd2-46d9-ac6a-a2ec330dd458.mp3",
        //     word: [{
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited28.",
        //     }, {
        //       audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //       word: "1Sometimes I feel excited29.",
        //     },
        //       {
        //         audio: "http://gamejava.monkeytree.com.hk/monkeytownHK/image/video/1b7ca3fe-5367-47cb-89c0-7d0cdf81f560.m4a",
        //         word: "1Sometimes I feel excited30.",
        //       }
        //     ],
        //     is_open: 0
        //   }
        ],
        booklevelid: '',
        booklevel: '',
        bookId: '',
        url: '/book/bookDetail',
        url2: '/book/bookNameUpdate',
        pic: '',
        allplay: 200,
        // oP: '',
        nextId:null,
        time: '',
        // str1: '',
        // str: '',
        // a: '',
        // str_2: '',
      };
    },
    methods: {
      topOpen() {

      //   this.updated();
      //   if(this.isAllLoaded!=true){
      //     alertMsg4("Loading...");
      //   }
      // },
      // topOpen2(){
        if(this.isAllLoaded==true){
          if(this.readpage===0){
            this.readpage=this.readpage+1;
            this.oldreadpage=this.readpage;
          }

        // console.log('1');
        this.isOpenedTop = !this.isOpenedTop;
        if(this.isOpenedTop1===0){
          this.isOpenedTop1=1;
        }else {
          setTimeout(() => {
            this.isOpenedTop1=0;
          },600);
        }
        }else {
          // this.updated();
        }
      },

      open(idx, is_open) {
        console.log(idx, is_open);

        if(this.oldreadpage>idx+1){
          console.log(this.oldreadpage);
        }else {
          this.readpage=this.readpage+1;
          this.oldreadpage=this.readpage;
          console.log(this.oldreadpage);
        }
        if (idx == 0 && is_open == 1) {
          this.showsound=false;
        }else{
          this.showsound=!this.showsound;
          setTimeout(() => {
            this.showsound=true;
          },600);
        }

        // this.showi=idx;

        if(idx || is_open || idx === 0 || is_open === 0){
          this.helps=true;
        if (idx == 0 && is_open == 1) {
          document.getElementById('out').style.display = 'none';
        } else {
          document.getElementById('out').style.display = 'block';
        }
        if(this.repeat===false){
          if(idx===0&&is_open===0){
            this.fontshow=false;
          }else if(idx===0&&is_open===1){
            setTimeout(() => {
              this.fontshow=true;
            },600);
          }
          if (this.isOpenedTop && is_open == 0) {//下一页
            if (this.wordlength < this.items[idx].word.length) {//如果还有文字
              if (idx == 0) {
                if (this.items[idx].is_open == 1) {
                  this.items[idx].is_open = 0;
                } else if (this.items[idx].is_open == 0) {
                  this.items[idx].is_open = 1;
                }
                this.video = true;
                this.bigsound = this.items[idx+1].word[0].audio;
                // console.log(this.bigsound);
                this.aaa(idx + 1);

              }
              this.wordlength += 1;
              if (idx != 0) {
                this.video = true;
                this.bigsound = this.items[idx].word[this.wordlength - 1].audio;
                // console.log(this.bigsound);
                var elements = document.getElementsByClassName('p' + idx);
                var childs = elements[0].childNodes;
                for (var i = childs.length - 1; i >= 0; i--) {
                  elements[0].removeChild(childs[i]);
                }
                elements[0].innerHTML = this.items[idx].word[this.wordlength - 1].word;
                // this.pagewords=this.items[idx].word[this.wordlength].word;
                this.aaa(idx);
              }

            } else {//如果没有文字
              this.wordlength = 0;
              if (this.items[idx].is_open == 1) {
                this.items[idx].is_open = 0;
              } else if (this.items[idx].is_open == 0) {
                this.items[idx].is_open = 1;
              }
              this.wordlength += 1;
              this.video = true;
              this.bigsound = this.items[idx + 1].word[0].audio; //下一页
              // console.log(this.bigsound);

              if (idx != 0) {
                var elements = document.getElementsByClassName('p' + idx);
                var childs = elements[0].childNodes;
                for (var i = childs.length - 1; i >= 0; i--) {
                  elements[0].removeChild(childs[i]);
                }
                elements[0].innerHTML = this.items[idx].word[0].word;
              }
              // console.log(idx);
              this.aaa(idx + 1);
            }
          } else if (this.isOpenedTop && is_open == 1) { //上一页
            this.wordlength = 0;
            if (this.isOpenedTop) {
              if (this.items[idx].is_open == 1) {
                this.items[idx].is_open = 0;
              } else if (this.items[idx].is_open == 0) {
                this.items[idx].is_open = 1;
              }
            }

            if (idx != 0) {
              this.wordlength += 1;
              this.video = true;
              this.bigsound = this.items[idx].word[0].audio;
              // console.log(this.bigsound);
            }else {
              this.helps=false;
            }
            var elements2 = document.getElementsByClassName('p' + (idx + 1));
            // console.log(elements2);
            var childs2 = elements2[0].childNodes;
            for (var i = childs2.length - 1; i >= 0; i--) {
              elements2[0].removeChild(childs2[i]);
            }
            elements2[0].innerHTML = this.items[idx + 1].word[0].word;
            // clearTimeout(this.time);
            // console.log(idx);
            if (idx != 0) {
              this.aaa(idx);
            }
          }
          this.varidx = idx;
          this.varisOpen = this.items[idx].is_open;
          // console.log(this.varidx,this.varisOpen);
        }else if(this.repeat===true){
          if (is_open===1) {

            this.video = true;
            this.bigsound = this.items[(idx+1)].word[this.wordlength].audio;
            var elements = document.getElementsByClassName('p' + (idx+1));
            // console.log(elements);
            var childs = elements[0].childNodes;
            for (var i = childs.length - 1; i >= 0; i--) {
              elements[0].removeChild(childs[i]);
            }
            elements[0].innerHTML = this.items[(idx+1)].word[this.wordlength].word;
            // console.log(this.bigsound);
            this.wordlength += 1;
            this.aaa((idx+1));

          }else {

            this.video = true;
            this.bigsound = this.items[idx].word[this.wordlength].audio;
            var elements = document.getElementsByClassName('p' + idx);
            // console.log(elements);
            var childs = elements[0].childNodes;
            for (var i = childs.length - 1; i >= 0; i--) {
              elements[0].removeChild(childs[i]);
            }
            elements[0].innerHTML = this.items[idx].word[this.wordlength].word;
            // console.log(this.bigsound);
            this.wordlength += 1;
            this.aaa(idx);

          }
          this.repeat=false;

        }
      }else {
          console.log("null");
        }

      },
      aaa(idxs) {
        // clearTimeout(this.time);
        // 获取音频时长

        var myVid = document.getElementById("audiomp3");
        if (myVid != null) {
          var duration;
          myVid.load();
          myVid.oncanplay = function() {
            //      console.log("myVid.duration",myVid.duration);
            this.playtime = myVid.duration;
            var oP = document.getElementsByClassName('p' + idxs);
            // console.log(this.playtime);
            var str1 = oP[0].innerHTML;
            var str = oP[0].innerHTML;
            var a = 0;
            this.allplay = (this.playtime * 1000-400) / str.length;
            console.log(this.playtime);
            console.log(this.allplay);
            var that = this;
            if(str.length<100){
              color(str);
            }

            function color(str) {
              var str_2 = "";
              var len = str.length;
              for (var i = 0; i < len; i++) {
                str_2 = str_2 + "<span class='text2' id=str" + i + ">" + str.charAt(i) + "</span>";
              }
              oP[0].innerHTML = str_2;
            };

            function play() {
              var len = str.length;
              if (document.getElementById('str' + a)) {
                document.getElementById('str' + a).classList.add("animation");
                a++;
                document.getElementById('str' + (a - 1)).style.backgroundPosition = 0;
                that.time = setTimeout(play, that.allplay);
                if (a >= len) {
                  clearTimeout(that.time);
                  document.getElementById('out').style.display = 'none';
                }
              } else {
                a = 0;
              }
            };

            play();

          }
        }
      },
      close(idx, is_open) {
        if (this.isOpenedTop && is_open == 0) {//下一页
          if (this.wordlength < this.items[idx].word.length) {
            this.open(idx,is_open);
          }else {
            this.record();
            this.showsound=false;
            this.items.forEach(item => (item.is_open = 1));
            this.isCloseddTop = true;
            this.backgrou = true;
            this.video = false;
            this.helps=false;
            var elements = document.getElementsByClassName('p' + idx);
            var childs = elements[0].childNodes;
            for (var i = childs.length - 1; i >= 0; i--) {
              elements[0].removeChild(childs[i]);
            }
            elements[0].innerHTML = this.items[idx].word;
            setTimeout(() => {
              this.isOpenedTop1=0;
            }, 300);
            clearTimeout(this.time);
            setTimeout(() => {
              this.thend = true;
            }, 500);
            setTimeout(() => {
              this.buttons = true;
              this.fontshow=true;
            }, 1000)
          }
        }

      },
      reset() {
        this.items.forEach(item => (item.is_open = 0));
        this.isOpenedTop = false;
        this.isCloseddTop = false;
        this.buttons = false;
        setTimeout(() => {
          this.thend = false;
          this.backgrou = false;
        }, 500)
      },
      record(){
        this.$axios.post(this.pageurl, qs.stringify({
          bookId: this.bookId,
          readPage: this.oldreadpage,
          endPage: this.endPage,
          studentId:localStorage.getItem('studentId')
          // studentId: localStorage.getItem('studentId')
        })).then(res => {
          this.oldreadpage=0;
          this.readpage=0;
          // localStorage.setItem('startTimeid', '');
          // localStorage.setItem('gamename', '');
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
      },
      back() {
        var audio = document.getElementById('music');
        if(localStorage.getItem('audiomusic')==="false"){
        }else{
          audio.play();
        }
        this.$axios.post(this.pageurl, qs.stringify({
          bookId: this.bookId,
          readPage: this.oldreadpage,
          endPage: this.endPage,
          studentId:localStorage.getItem('studentId')
          // studentId: localStorage.getItem('studentId')
        })).then(res => {
          // localStorage.setItem('startTimeid', '');
          // localStorage.setItem('gamename', '');
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
        this.$router.push({ //核心语句
          path: '/ebookchioce', //跳转的路径
          query: {
            sortId: this.sortId,
            booklevel: this.booklevel,
            booklevelid: this.booklevelid,
            booklevel2:this.booklevel2,
            booktitleColor:this.booktitleColor
          }
        })
      },
      next() {
        this.loading=true;
        if(this.nextId!=null){
          if(this.isAllLoaded===true){
            this.isAllLoaded=false;
            this.imgLoad=0;
          this.$axios.post(this.url2,qs.stringify({
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
              if(this.listBookName[i].book_id===this.nextId){
                localStorage.setItem('backimg',this.listBookName[i].before_img);
                localStorage.setItem('backimg2',this.listBookName[i].before_img1);
                localStorage.setItem('insetimg',this.listBookName[i].bg_img);
                localStorage.setItem('fontimg',this.listBookName[i].head_img);
                localStorage.setItem('wordimg',this.listBookName[i].word_img);
                this.backimg=localStorage.getItem('backimg');
                this.backimg2=localStorage.getItem('backimg2');
                this.insetimg=localStorage.getItem('insetimg');
                // this.insetimg="url("+localStorage.getItem('insetimg')+")";
                this.fontimg=localStorage.getItem('fontimg');
                this.wordimg=localStorage.getItem('wordimg');
                this.isOpenedTop = false;
                this.isCloseddTop = false;
                this.buttons = false;
                setTimeout(() => {
                  this.thend = false;
                  this.backgrou = false;
                }, 500)
              }
            }
            this.$axios.post(this.url,qs.stringify({
              bookId:this.nextId
            })).then(res=>{
              this.bookId=this.nextId;
              this.items=res.data.listBookDetail;
              // this.items[this.items.length-1].bg=this.items[this.items.length-1].foot_img;
              for(var i=0;i<this.items.length;i++){
                for(var j=0;j<this.items[i].word.length;j++){
                  this.items[i].word[j].audio=this.pic+this.items[i].word[j].audio;
                }
                this.items[i].word1=this.items[i].word;
                if(i>=1){
                  this.items[i].word=this.items[i-1].word1;
                }
                this.items[i].bg=this.pic+this.items[i].bg;
                if(i===this.items.length-1){
                  this.items[i].bg=this.pic+this.items[i].foot_img;
                }
              }
              for(var i=0;i<this.listBookName.length;i++){
                if(this.listBookName[i].book_id===this.nextId){
                  if(this.listBookName[i+1]!==undefined&&this.listBookName[i+1]!=='undefined'){
                    this.nextId=this.listBookName[i+1].book_id;
                    // console.log(this.nextId);
                  }else {
                    this.nextId=null;
                  }
                  break;
                }
              }
              this.endPage=this.items.length;
            }, res => {
              alertMsg("You must be connected to the internet.<br>Please connect and try again.");
            });
          }, res => {
            alertMsg("You must be connected to the internet.<br>Please connect and try again.");
          })
          }else {
            this.back();
          }
        }else {
          this.reset();
        }
      },

      bodyScroll(event) {
        event.preventDefault();
      },
      help() {
        if(this.helps===true){
        if(document.getElementById('out').style.display === 'none'){

          this.wordlength-=1;
          this.repeat=true;
          this.open(this.varidx,this.varisOpen);
        }
        }
      },
      updated(idx) {
        // console.log(idx);
        if(this.loading ===true){
          alertMsg4("Loading...");

          let imgList = document.getElementsByClassName('backclass4');//图片集合
          let imgCount = imgList.length;//图片总数
          if(this.imgLoad>imgCount){
            this.topOpen();
            return;
          }else{

            if (this.imgLoad === imgCount) {
              this.loading =false;
              this.isAllLoaded = true;
              this.topOpen();
              document.getElementById('alertFram').style.display = "none";
              console.log("图片加载完成 展示组件");

            }
            this.imgLoad++;
            console.log(this.imgLoad);
          }
        }



      },
      compeletered(){
        this.$axios.post(this.pageurl, qs.stringify({
          bookId: this.bookId,
          readPage: this.oldreadpage,
          endPage: this.endPage,
          studentId:localStorage.getItem('studentId')
          // studentId: localStorage.getItem('studentId')
        })).then(res => {
          // localStorage.setItem('startTimeid', '');
          // localStorage.setItem('gamename', '');
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
      },
    },

    mounted() {
      // this.updated();

      // setTimeout(() => {
        //   $('.album__paper:first .album__page').css("background-image", this.insetimg);
        // $('.album__paper:last-child').css("background-image", this.insetimg);
        //    console.log($('.album__paper:last-child'));
      // }, 1000)
      // this.resizeimg();
      // console.log($('.album__paper:nth-of-type(1) .album__page').css("background-image"));
    },

    destroyed() {
      this.loading=false;
      if(document.getElementById('alertFram')) {
        document.getElementById('alertFram').style.display = "none";
        // console.log(document.getElementById('alertFram').style.display);
      }
      document.body.removeEventListener('touchmove', this.bodyScroll, {
        passive: false
      });

      // console.log('100');
      this.compeletered();
    },
    created() {
      this.pic = this.$axios.defaults.baseURL2;
      // this.pic2 = this.$axios.defaults.baseURL3;
      this.sortId=this.$route.query.sortId;
      this.bookId = this.$route.query.bookId;
      this.booklevel = this.$route.query.booklevel;
      this.booklevelid = this.$route.query.booklevelid;
      this.booklevel2 = this.$route.query.booklevel2;
      this.booktitleColor = this.$route.query.booktitleColor;
      this.nextId = this.$route.query.nextId;
      // this.show=true;//背景音乐
      if(localStorage.getItem('audiomusic')=="false"){
        this.show=false;
      }else{
        this.show=true;
      }

      // document.getElementById("music").volume =0.2;
      // alert(document.getElementById("music")+','+document.getElementById("music").volume);
      this.$axios.post(this.url,qs.stringify({
        bookId:this.bookId
      })).then(res=>{
          this.items=res.data.listBookDetail;
          // this.items[this.items.length-1].bg=this.items[this.items.length-1].foot_img;
      for(var i=0;i<this.items.length;i++){
        for(var j=0;j<this.items[i].word.length;j++){
          this.items[i].word[j].audio=this.pic+this.items[i].word[j].audio;
        }
            this.items[i].word1=this.items[i].word;
              if(i>=1){
                this.items[i].word=this.items[i-1].word1;
              }
        this.items[i].bg=this.pic+this.items[i].bg;
            if(i===this.items.length-1){
              this.items[i].bg=this.pic+this.items[i].foot_img;
            }
      }
          this.backimg=localStorage.getItem('backimg');
          this.backimg2=localStorage.getItem('backimg2');
          this.insetimg=localStorage.getItem('insetimg');
          // this.insetimg="url("+localStorage.getItem('insetimg')+")";
          this.fontimg=localStorage.getItem('fontimg');
          this.wordimg=localStorage.getItem('wordimg');
          this.onef = true;
           this.endPage=this.items.length;
          // this.resizeimg();
          // console.log(this.items);
      }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      });
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          this.isAllLoaded = true;
          console.log("true");
        }}


      document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
    }
  }
</script>
<!-- <script src='../../../static/vue.min.js'></script>
<script src='../../../static/vuetify.min.js'></script> -->
<style scoped lang="less">
  // @import '../../common/basic.css';

  #demo {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(../../assets/image/ebook.png);
  }

  // #box {
  // 	text-align: center;
  // 	width: 100%;
  // 	height: 300px;
  // 	overflow: hidden;
  // }
  #p {
    font-size: 40px;
  }

  #out {
    display: none;
  }


  .backbutton {
    // display: block;
    z-index: 3;
    width: 6%;
    position: fixed;
    left: 15px;
    top: 15px;
  }

  .helpbutton {
    z-index: 3000;
    width: 20%;
    position: absolute;
    left: 63%;
    bottom: 15%;
  }

  .bottombut {
    width: 100%;
    bottom: 0;
    position: absolute;
  }

  .leftbut {
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 2;
  }

  .rightbut {
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box
  }

  *:before,
  *:after {
    content: "";
    position: absolute
  }

  .container {
    margin: auto;
    width: 100%;
    height: 100%;
  }

  .album {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: 1s;
    transition: 1s;
    margin: auto;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    // border-radius: 50px;
    -webkit-transform: translate(50%, 0%) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
    transform: translate(50%, 0%) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);

  }

  .album--open {
    -webkit-transform: translate(50%, 0%) rotateX(10deg) rotateY(0deg) rotateZ(0deg) scale(1);
    transform: translate(50%, 0%) rotateX(10deg) rotateY(0deg) rotateZ(0deg) scale(1);

  }

  .album--close {
    // background-image: none !important;
    -webkit-transform: translate(50%, 0%) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);
    transform: translate(50%, 0%) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)
  }

  .album__paper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 100%;
    -webkit-transition: 1s;
    transition: 1s;
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    box-shadow: 0 -1px 0 -1px #F9F1DC;
    // border-radius: 50px;
    max-width: 330px;
    max-height: 377px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .albem_center{
    margin-left: -165px;
  }
  .album__paper:not(.first) .album__page {
    // background-image:url(../../assets/image/redebackground3.png);
    background-repeat: no-repeat;
    background-size: contain;
    // border-radius: 50px;
    // background: none;
    // background-size: 100% 1.5em
  }

  .album__paper:not(.first) .back {
    // background: #d4d3d3
  }

  .album__paper:nth-of-type(1) .back {
    // background: #0095a3
    background: none;
  }

  .album__paper:nth-of-type(1) .album__page {
    // background-image:url(../../assets/image/redebackground3.png);
    // background-image:var(--hero-image);
    background-repeat: no-repeat;
    background-size: contain;
    // border-radius: 50px;
    // background: #0095a3;
  }

  .album__paper.open {
    box-shadow: 0 -1px 0 -1px #F9F1DC;
    // border-radius: 50px;
    -webkit-transform: rotateX(0deg) rotateY(-180deg) rotateZ(0);
    transform: rotateX(0deg) rotateY(-180deg) rotateZ(0);
  }



  .album__paper .album__page.front {
    transition: 1s;
    -webkit-transition: 1s;
    transform-origin: 0 50%;
    -webkit-transform-origin: 0 50%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 2
  }

  .album__paper .back {
    transition: 1s;
    -webkit-transition: 1s;
    transform-origin: 0 50%;
    -webkit-transform-origin: 0 50%;
    /*transform: rotateX(10deg);*/
    // background: #e1e1e1
  }

  .backclass {
    // width: 83%;
    // height: 83%;
    // padding: 5% 0% 0% 0%;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    max-width: 330px;
    max-height: 377px;
    /*border-radius: 30px;*/
  }

  .insetimg {
    width: 100%;
    height: 100%;
    margin: 0;
    max-width: 330px;
    max-height: 377px;
    position: absolute;
    top: 0;
    z-index: -1;
    border-radius: 0 0 0 25px;
  }

  .fontback {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    max-width: 330px;
    max-height: 377px;
    position: absolute;
    top: 0;
    display: block;
    /*border-radius: 30px;*/
  }


  .backclass3 {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    // width: 83%;
    // height: 83%;
    //    padding: 5% 0% 0% 0%;
    display: none;
    max-width: 330px;
    max-height: 377px;
    /*border-radius: 30px;*/
  }

  .backclass4 {
    width: 100%;
    height: 100%;
    /*padding: 5px 0;*/
    margin: 0;
    // width: 83%;
    // height: 83%;
    // padding: 5% 0% 0% 0%;
    // border-radius: 40px;
    transform: rotateX(0) rotateY(180deg) rotateZ(0);
    max-width: 330px;
    max-height: 377px;
    border-radius: 0 0 25px 0;
    /*border-radius: 30px;*/
  }
  .backclass5 {
    width: 100%;
    height: 100%;
    /*padding: 5px 0;*/
    margin: 0;
    // width: 83%;
    // height: 83%;
    // padding: 5% 0% 0% 0%;
    // border-radius: 40px;
    transform: rotateX(0) rotateY(180deg) rotateZ(0);
    max-width: 330px;
    max-height: 377px;
    border-radius: 0 0 25px 0;
    /*border-radius: 30px;*/
  }

  .fontclass {
    width: 83%;
    height: 83%;
    margin: 5% 7% 3% 0%;
    // width: 100%;
    // height:100%;
    // padding:0;
    // margin:0;
    // background-color: white;
    max-width: 330px;
    max-height: 377px;

  }

  .backclass2 {
    // width: 100%;
    // height: 100%;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    z-index: 99;
    display: block;
    transform: rotateX(0) rotateY(180deg) rotateZ(0);
    max-width: 330px;
    max-height: 377px;
    margin-left: -165px;
    border-radius: 25px;
  }
  .disnone{
    display: none;
  }
  // .transformcolor{
  //   -webkit-background-clip: -webkit-text;
  //   -webkit-text-fill-color: transparent;
  //   background: -webkit-linear-gradient(top,rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%),-webkit-linear-gradient(left,#f00 0%,#00f 0%);
  // }
  //   .animation {
  //     animation: mymoves 5s linear infinite;
  //     -webkit-animation: mymoves 5s linear infinite;
  //   }
  //
  //   @-webkit-keyframes mymoves {
  //     0% {
  //       background-position: -400px -0px;
  //     }
  //
  //     100% {
  //       background-position: -0 0;
  //     }
  //   }
  //
  //   .text2 {
  //     width: 100%;
  //     // height: 150px;
  //     // line-height: 78px;
  //     font-size: 40px;
  //     font-family: pepper;
  //     position: relative;
  //     font-weight: bold;
  //     -webkit-background-clip: text;
  //     -webkit-text-fill-color: transparent;
  //     background-color: grey;
  //     background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/bluebackg.png");
  //     background-repeat: no-repeat;
  //     background-position: -400px 0;
  //     animation-iteration-count: 1;
  //     // -webkit-animation:mymoves 5s linear infinite;
  //   }

  // .album__top-title {
  //   font-size: 100px;
  //   line-height: .8;
  //   padding: 20px
  // }

  .album__page {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-transform: translateZ(0px);
    transform: translateZ(0px)
  }

  .buttons {
    z-index: 99;
    width: 100%;
    bottom: 0;
    position: absolute;
    height: 100%;
    display: block;
    transform: translate(-100%, 15px) rotateX(10deg) rotateY(0deg) rotateZ(0deg);
    max-width: 330px;
    max-height: 377px;
    margin-left: 165px;
  }

  .buttonsimg {
    z-index: 99;
    width: 80px;
    position: absolute;
    bottom: 15%;
    left: 15%;
  }

  .buttonsimg2 {
    z-index: 99;
    width: 80px;
    position: absolute;
    bottom: 15%;
    right: 15%;
  }

  // .album__back {
  //   width: 2em;
  //   height: 400px;
  //   background: #007e8a;
  //   position: absolute;
  //   left: -2em;
  //   top: 0;
  //   transform-origin: 100% 100%;
  //   -webkit-transform-origin: 100% 100%;
  //   transform: rotateY(-90deg) rotateX(0deg);
  //   -webkit-transform: rotateY(-90deg) rotateX(0deg)
  // }



  @media screen and (min-width: 736px) and (max-width:768px) {
    .buttonsimg2{
      right: 15%;
    }
    .buttonsimg {
      left: 20%;
    }
    body {
      overflow: visible
    }
    .helpbutton {
      left: 60%;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1354px) {
    .album__paper {
      bottom: 15%;
      max-width: 500px;
      max-height: 572px;

    }
    .albem_center{
      margin-left: -250px;
    }

    .backclass {
      // width: 450px;
      // height: 510px;
      max-width: 500px;
      max-height: 572px;
    }

    .insetimg {
      max-width: 500px;
      max-height: 572px;
    }

    .fontback {
      max-width: 500px;
      max-height: 572px;
    }

    .backclass2 {
      max-width: 500px;
      max-height: 572px;
      margin-left:-250px;
    }

    .backclass3 {
      max-width: 500px;
      max-height: 572px;
    }

    .backclass4 {
      max-width: 500px;
      max-height: 572px;
    }.backclass5 {
      max-width: 500px;
      max-height: 572px;
    }

    .fontclass {
      max-width: 500px;
      max-height: 572px;
    }

    .buttons {
      bottom: 15%;
      max-width: 500px;
      max-height: 572px;
      margin-left:250px;
    }

    .buttonsimg {
      z-index: 99;
      width: 120px;
      position: absolute;
      bottom: 15%;
      left: 15%;
    }

    .buttonsimg2 {
      z-index: 99;
      width: 120px;
      position: absolute;
      bottom: 15%;
      right: 13%;
    }
    .helpbutton {
      bottom: 26%;
    }

  }

  @media screen and (min-width: 375px) and (max-width: 639px){
    .buttonsimg2{
      right: 10%;
    }
    .buttonsimg {
      left: 30%;
    }
    .album__paper {
      width: 45%;
      height: 90%;
      bottom: 3%;
    }

    .helpbutton{
      left: 60%;
    }
  }

  @media screen and (min-width: 640px) and (max-width: 735px){
    .buttonsimg2{
      right: 10%;
    }
    .buttonsimg {
      left: 25%;
    }
    .album__paper {
      width: 45%;
      height: 90%;
      bottom: 3%;
    }

    .helpbutton{
      left: 60%;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 811px){
    .album__paper {
      width: 45%;
      height: 90%;
      bottom: 3%;
    }

    .helpbutton{
      left: 60%;
    }
  }

  @media screen and (min-width: 1355px) and (max-width: 1600px) {
    .album__paper {
      bottom: 15%;
      max-width: 630px;
      max-height:720px;

    }
    .albem_center{
      margin-left: -315px;
    }

    .backclass {
      //  width: 540px;
      // height: 580px;
      max-width: 630px;
      max-height:720px;

    }

    .insetimg {
      max-width: 630px;
      max-height:720px;
    }

    .fontback {
      max-width: 630px;
      max-height:720px;
    }

    .backclass2 {
      max-width: 630px;
      max-height:720px;
      margin-left:-315px;
    }

    .backclass3 {
      // width: 540px;
      // height: 580px;
      max-width: 630px;
      max-height:720px;
    }

    .backclass4 {
      max-width: 630px;
      max-height:720px;

    }.backclass5 {
      max-width: 630px;
      max-height:720px;

    }

    .fontclass {
      //     width: 540px;
      //     height: 580px;
      // margin: 31px 30px 36px 5px;
      max-width: 630px;
      max-height:720px;
    }

    .buttons {
      max-width: 630px;
      max-height:720px;
      bottom: 15%;
      margin-left:315px;
    }

    .buttonsimg {
      z-index: 99;
      width: 160px;
      position: absolute;
      bottom: 15%;
      left: 15%;
    }

    .buttonsimg2 {
      z-index: 99;
      width: 160px;
      position: absolute;
      bottom: 15%;
      right: 15%;
    }
    .helpbutton {
      bottom: 26%;
      left: 60%;
    }


  }

  @media screen and (min-width: 769px) and (max-width:894px) {

    .album__paper {
      max-width: 320px;
      max-height: 366px;

    }
    .albem_center{
      margin-left: -160px;
    }
    .backclass {
      max-width: 320px;
      max-height: 366px;
    }

    .insetimg {
      max-width: 320px;
      max-height: 366px;
    }

    .fontback {
      max-width: 320px;
      max-height: 366px;
    }

    .backclass2 {
      max-width: 320px;
      max-height: 366px;
      margin-left:-160px;
    }

    .backclass3 {
      max-width: 320px;
      max-height: 366px;
    }

    .backclass4 {
      max-width: 320px;
      max-height: 366px;
    }.backclass5 {
      max-width: 320px;
      max-height: 366px;
    }

    .fontclass {
      max-width: 320px;
      max-height: 366px;
    }

    .buttons {
      max-width: 320px;
      max-height: 366px;
      margin-left:160px;
    }
    .helpbutton {
      left: 58%;
    }

    //     .album {
    //       // margin-top: 200px;
    //       transform: translate(0px, 0px) rotateX(40deg) rotateY(0deg) rotateZ(0deg) scale(0.9);
    //     }
    //
    //     .album--open {
    //       // margin-top: 200px;
    //       transform: translate(152px, 0px) rotateX(40deg) rotateY(0deg) rotateZ(0deg) scale(0.9);
    //     }
    //     .album--close {
    //       -webkit-transform: translate(304px, 0px) rotateX(40deg) rotateY(0deg) rotateZ(0deg) scale(0.9);
    //       transform: translate(304px, 0px) rotateX(40deg) rotateY(0deg) rotateZ(0deg) scale(0.9)
    //     }
  }

  @media screen and (min-width: 895px) and (max-width:1023px) {
    .album__paper {

      max-width: 350px;
      max-height: 400px;

    }
    .albem_center{
      margin-left: -175px;
    }
    .backclass {
      // width: 300px;

      max-width: 350px;
      max-height: 400px;
    }

    .insetimg {
      max-width: 350px;
      max-height: 400px;
    }

    .fontback {
      max-width: 350px;
      max-height: 400px;
    }

    .backclass2 {

      max-width: 350px;
      max-height: 400px;
      margin-left:-175px;
    }

    .backclass3 {
      // width: 300px;

      max-width: 350px;
      max-height: 400px;
    }

    .backclass4 {

      max-width: 350px;
      max-height: 400px;
    }.backclass5 {

      max-width: 350px;
      max-height: 400px;
    }

    .fontclass {
      // width: 300px;

      max-width: 350px;
      max-height: 400px;
    }

    .buttons {
      max-width: 350px;
      max-height: 400px;
      margin-left:175px;
    }
    .helpbutton {
      left: 58%;
    }

  }

  @media screen and (min-width: 1600px){
    .container{
      transform: scale(1.4);
    }
    .album__paper {
      bottom: 18%;
      max-width: 500px;
      max-height:600px;
    }
    .albem_center{
      margin-left: -315px;
    }

    .backclass {
      //  width: 540px;
      // height: 580px;
      max-width: 630px;
      max-height:720px;

    }

    .insetimg {
      max-width: 630px;
      max-height:720px;
    }

    .fontback {
      max-width: 630px;
      max-height:720px;
    }

    .backclass2 {
      max-width: 630px;
      max-height:720px;
      margin-left:-315px;
    }

    .backclass3 {
      // width: 540px;
      // height: 580px;
      max-width: 630px;
      max-height:720px;
    }

    .backclass4 {

      max-width: 630px;
      max-height:720px;

    }.backclass5 {

      max-width: 630px;
      max-height:720px;

    }

    .fontclass {
      //     width: 540px;
      //     height: 580px;
      // margin: 31px 30px 36px 5px;
      max-width: 630px;
      max-height:720px;
    }

    .buttons {
      max-width: 630px;
      max-height:720px;
      bottom: 18%;
      margin-left:315px;
    }

    .buttonsimg {
      z-index: 99;
      width: 160px;
      position: absolute;
      bottom: 15%;
      left: 25%;
    }

    .buttonsimg2 {
      z-index: 99;
      width: 160px;
      position: absolute;
      bottom: 15%;
      right: 10%;
    }
    .helpbutton {
      bottom: 28%;
      left: 56.5%;
      width: 10%;
    }


  }
</style>
