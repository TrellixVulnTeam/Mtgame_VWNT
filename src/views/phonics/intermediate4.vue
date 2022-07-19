<template>
  <div class="intermediate4">

    <img src="../../assets/image/interbg10.png" style="width: 100%; height: 100%;top:0;display:block;position: absolute;">

    <span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source  src="../../assets/video/gamemusic.mp3"></audio>
		</span>
    <transition name="fades">
      <div class="contain" v-if="!resume">
        <img src="../../assets/image/irightback.png" @click="$tips(true);gomemu()" class="backbutton" />
        <img src="../../assets/image/ihelp.png" @click="$tips(true);help()" class="helpbutton" />
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 100%;display:block;position: absolute; ">

            <p class="fontsizes" v-if="showNum">{{this.countpage}}/{{ this.question}}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div v-if="!onef" v-bind:class="{part8to2:!reload}" style="width: 100%; height: 100%;display:block;position: absolute;">
            <audio v-if="soundsWrong" autoplay="autoplay"><source src="../../assets/video/Wrong.mp3"  ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay"><source src="../../assets/video/correct.mp3"  ></audio>
            <!-- <div  v-if="zhezhao" style="width: 100%; height: 50%;display:block;position: absolute;opacity: 0;z-index: 100;"></div> -->
            <div class="dndList" v-if="!reload">
              <div class="allansw">
                <img src="../../assets/image/StarYellow.png" class="start" v-show="!ended1" style="position: absolute; margin-top: -25%;left: 0%;width: 100%;z-index: 2;">
                <div class="bordercolor" id="answer-box">
                  <draggable id="box2" :list="items2" draggable=".item"  class="yes dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item" style="opacity: 0" v-for="element in items2" :key="element.id">
                      <!-- {{ element.name }} -->
                    </div>
                    <!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/blueball.png" v-bind:class="{listimg:!fangda1}"> -->
                  </draggable>
                </div>
                <button class="fast" @click="$tips(true);sound1()"  v-bind:class="{answer: issuccess1,listimg:fangda1}">
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/eggbox2.png">
                  <img :src="this.items3[0].bg" class="bgimage">
                  <audio  ref="short1" style="display: none;" >
                    <source :src="this.items3[0].audio"></audio>
                </button>
              </div>
              <div class="allansw">
                <img src="../../assets/image/StarYellow.png" class="start" v-show="!ended2" style="position: absolute; margin-top: -25%;left: 0;width: 100%;z-index: 2;">
                <div class="bordercolor" id="answer-box1">
                  <draggable id="box4" :list="items4" draggable=".item"   class="no dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item" style="opacity: 0" v-for="element in items4" :key="element.id">
                      <!--  {{ element.name }} -->
                    </div>
                    <!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/redball.png" v-bind:class="{listimg:fangda2}"> -->

                  </draggable>

                </div>
                <button class="fast2"  @click="$tips(true);sound2()" v-bind:class="{answer: issuccess2,listimg:fangda2}">
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/eggbox2.png">
                  <img :src="this.items3[1].bg" class="bgimage">
                  <audio ref="short2" style="display: none;" >
                  <source :src="this.items3[1].audio"></audio>
                </button>
              </div>
              <div class="allansw">
                <img src="../../assets/image/StarYellow.png" class="start" v-show="!ended3" style="position: absolute; margin-top: -25%;left: 0;width: 100%;z-index: 2;">
                <div class="bordercolor" id="answer-box2">
                  <draggable id="box5" :list="items5" draggable=".item"   class="no dragArea list-group"
                             group="people" @change="log">
                    <div class="list-group-item" style="opacity: 0" v-for="element in items5" :key="element.id">
                      <!--  {{ element.name }} -->
                    </div>
                    <!-- <img style="position: absolute;height: 100%;display: -webkit-box;" src="../../assets/image/redball.png" v-bind:class="{listimg:fangda2}"> -->

                  </draggable>

                </div>
                <button class="fast3"  @click="$tips(true);sound3()" v-bind:class="{answer: issuccess3,listimg:fangda3}">
                  <img style="position: absolute;height: auto;width:100%;display: block;bottom: 0;" src="../../assets/image/eggbox2.png">
                  <img :src="this.items3[2].bg" class="bgimage">
                  <audio  ref="short3" style="display: none;" >
                    <source :src="this.items3[2].audio"></audio>
                </button>
              </div>
              <div class="alldrag">
                <draggable id="first"
                           data-source="juju" :list="items1" class="list-group" draggable=".item" :disabled="over" style="width:100%; min-height:130px;"
                           :group="{ name: 'people', pull: pullFunction }" @start="start" @end="end" @change="log">
                  <div v-for="(element,index) in items1" :key="element.id" class="item" style="display: inline-block;position: relative;">
                    <img src="../../assets/image/toutors2.png" class="classimg" @click="speak(index)" v-bind:class="{ marginboth:marginboth,touming:element.imgop}" >

                    <span class="sort"  >{{element.name}}</span>
                  </div>
                </draggable>

              </div>
            </div>
          </div>
        </transition>
        <div class="settinglist">
          <img src="../../assets/image/interbar.png" style="width: 100%;bottom: 0;height: 100%;"  >

          <span class="fontsize">Listen and match the pictures to the correct blends. </span>
          <div @click="$tips(true);changesett()">
            <img src="../../assets/image/interpause.png" class=" repeat"  >

          </div>
          <!-- <div @click="change">
                        <img src="../../assets/image/Icon_Repeat.png" class="repeat" v-if="!levels" v-show="action1">
                        <img src="../../assets/image/blue_repeat.png" class="repeat" v-if="levels" v-show="action1">
                        <img src="../../assets/image/Icon_Repeat0.png" class="repeat" v-if="!levels" v-show="!action1">
                        <img src="../../assets/image/blue_repeat0.png" class="repeat" v-if="levels" v-show="!action1">
                    </div> -->
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
        <img class="animapng7" src="http://monkeytown.monkeytree.com.hk/image/intermediate4.gif">

      </div>
    </div>
    <transition name="fades">
      <div class="about" v-if="resume">
        <div class="twomenu">
          <div>
            <img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show" @click="$tips(true);sound()"/>
            <img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show" @click="$tips(true);sound()"/>
          </div>
          <div style="margin-top: 5px;" >
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

  import draggable from 'vuedraggable';
  import $ from 'jquery';

  var qs = require('qs');
  let idGlobal = 8;
  export default {
    name: "intermediate4",
    // order: 1,
    // display: "Two Lists",
    components: {
      // Draggable,
      // Container
      draggable
    },
    watch: {
      'onef': function(newVal) {
        if (this.onef == true) {
          setTimeout(() => {
            this.onef = false;
            setTimeout(() => {
              this.reload = false;
              // let items5=[];
              // for(var i=0;i<this.items3.length;i++){
              // 	items5.push(this.items3[i]);;
              // }
              // this.items1=items5;
              // items5=[];
            }, 500);
          }, 2000);
        }
      },
      'short1':function (newVal) {
        if (this.short1 === true) {
          if (!this.$refs.short1.paused){
            this.$refs.short1.load()
          }
          this.$refs.short1.play()
          this.short1 = false
        }
      },
      'short2':function (newVal) {
        if (this.short2 === true) {
          if (!this.$refs.short2.paused){
            this.$refs.short2.load()
          }
          this.$refs.short2.play()
          this.short2 = false
        }
      },
      'short3':function (newVal) {
        if (this.short3 === true) {
          if (!this.$refs.short3.paused){
            this.$refs.short3.load()
          }
          this.$refs.short3.play()
          this.short3 = false
        }
      }
    },
    data() {
      return {
        showNum:false,
        popp: false,
        spanp:'',
        ruleimg8:false,
        ruleimg10:false,
        ruleimg4:false,
        ruleimg15:false,
        ruleimg25:false,
        ruleimg12:false,
        controlOnStart: true,
        falgs: 'article',
        disabled: false,
        onef: true,
        reload: true,
        over:false,
        question: 10,
        soundsWrong:false,
        soundscorrect:false,
        short1:false,
        short2:false,
        short3:false,
        video: [
          {
            play: false
          },
          {
            play: false
          },
          {
            play: false
          },
          {
            play: false
          },
          {
            play: false
          },
          {
            play: false
          },
        ],
        fade: 'fade',
        flag2: true,

        sort2: '',
        sort3: '',
        sort1: '',
        marginboth: false,
        // disnone:false,
        show: true,
        resume: false,
        items2: [

        ],
        showitem: false,
        showstart: null,
        issuccess1: false,
        issuccess2: false,issuccess3: false,
        countpage: 1,
        unitsId: '',
        unit: '',
        zhezhao:false,
        menuId: '',
        listH: [],
        account: 0,
        pic: "",

        url: '/phonics2/phonics2',

        items4: [],items5: [],
        items1: [

        ],
        items3: [
          {
            bg:'',
            audio:''
          },
          {
            bg:'',
            audio:''
          },
          {
            bg:'',
            audio:''
          }

        ],
        id: 6,
        count: 0,
        addlist: false,
        ended1: true,
        ended2: true,ended3: true,
        fangda1: false,
        fangda2: false,fangda3: false,
        othersize: false,
        levels: 0,
        page: 2,
        type: 'intermediate',
        gamename:'',
        timeurl:'/user/playTime',
        insert:"[",
      }
    },
    methods: {
      bodyScroll(event) {
        event.preventDefault();
      },
      // onMove({ relatedContext, draggedContext }) {
      //   const relatedElement = relatedContext.element;
      //   const draggedElement = draggedContext.element;
      //   return (
      //     (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      //     );
      // },
      speak(i){
        this.items1[i].sound=1;

        setTimeout(() => {
          this.items1[i].sound=0;

        }, 3500);
      },
      pullFunction: function(evt) {
        if (evt.el.id == "box2") {
          this.fangda1 = true;
          this.fangda2 = false;
          this.fangda3 = false;
        } else if (evt.el.id == "box4") {
          this.fangda2 = true;
          this.fangda1 = false;
          this.fangda3 = false;
        }else if (evt.el.id == "box5") {
          this.fangda3 = true;
          this.fangda1 = false;
          this.fangda2 = false;
        }else if(evt.el.id=="first"){

          for(var i=0;i<this.items1.length;i++){
            this.items1[i].imgop = 0;
          }
          this.fangda1=false;this.fangda2=false;this.fangda3=false;
        }
        return this.controlOnStart ? "clone" : true;
      },
      start:function(evt) {
        // this.over=true;
        this.zhezhao=true;
        this.items1[evt.oldDraggableIndex].imgop = 1;
        this.controlOnStart = evt.originalEvent.ctrlKey;
        // this.items1[evt.oldDraggableIndex].sound = 1;
        //
        // setTimeout(() => {
        //   if(this.items1[evt.oldDraggableIndex]){
        //     return  this.items1[evt.oldDraggableIndex].sound = 0;
        //   }
        // }, 3500);
      },
      end: function(evt){
        // console.log(evt);
        // console.log(this.items1);
        this.zhezhao=false;
        if(this.items1[evt.oldDraggableIndex]){
          this.items1[evt.oldDraggableIndex].imgop = 0;
        }

      },
      log: function(evt) {
        // console.log(this.count);
        if (evt.removed) {
          if(this.over===false){
            this.over=true;
            this.zhezhao=false;
            if (this.items1.length === 0) {
              this.countpage += 1;
              if (this.items2.length === 1) {
                if ($.trim(evt.removed.element.name) === $.trim(this.sort1)) {
                  this.ended1 = false;this.soundscorrect=true;
                  this.count += 1;
                  if(this.count===3){
                    this.account+=1;
                    if (this.countpage-2 !==9){
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':1},";
                    }else{
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':1}]";
                    }
                  }else{
                    if (this.countpage-2 !==9){
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
                    }else{
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
                    }
                  }
                  setTimeout(() => {
                    if (this.countpage <= this.listH.length) {
                      setTimeout(() => {
                        this.onef = true;
                        this.count=0;
                        this.ended1 = true;this.soundscorrect=false;
                        this.items2 = [];
                        this.fangda1 = false;
                        this.reload = true;
                        this.items1 = JSON.parse(JSON.stringify(this.listH[this.countpage - 1]));
                        for(let a in this.items1){
                          this.items1[a].imgop=0;
                          this.items3[a].bg=this.pic+this.items1[a].bg;
                          this.items3[a].audio=this.pic+this.items1[a].audio;
                        }
                        this.sort1=this.items1[0].value;
                        this.sort2=this.items1[1].value;
                        this.sort3=this.items1[2].value;
                        if (this.items1.length > 3) {
                          this.marginboth = true;
                        }
                        this.over=false;
                      }, 2000);
                    } else {
                      setTimeout(() => {
                        this.over=false;
                        this.count=0;
                        this.$router.push({
                          //核心语句
                          path: "/presult", //跳转的路径
                          query: {
                            //路由传参时push和query搭配使用 ，作用时传递参数
                            type: this.type,
                            partName: 'intermediate4',
                            account: this.account,
                            menuId: this.menuId,
                            unitsId: this.unitsId,
                            unit: this.unit,
                            insert:this.insert
                          }
                        });
                      }, 2000);
                    }
                  },2000);
                } else{
                  this.issuccess1 = true;
                  this.soundsWrong=true;
                  if (this.countpage-2 !==9){
                    this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
                  }else{
                    this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
                  }
                  setTimeout(() => {
                    this.soundsWrong=false;
                    if (this.countpage <= this.listH.length) {
                      setTimeout(() => {
                        this.onef = true;
                        this.count=0;
                        this.issuccess1 = false;
                        this.items2 = [];
                        this.fangda1 = false;
                        this.reload = true;
                        this.items1 = JSON.parse(JSON.stringify(this.listH[this.countpage - 1]));
                        for(let a in this.items1){
                          this.items1[a].imgop=0;
                          this.items3[a].bg=this.pic+this.items1[a].bg;
                          this.items3[a].audio=this.pic+this.items1[a].audio;
                        }
                        this.sort1=this.items1[0].value;
                        this.sort2=this.items1[1].value;
                        this.sort3=this.items1[2].value;

                        this.over=false;
                      }, 2000);
                    } else {
                      setTimeout(() => {
                        this.over=false;
                        this.count=0;
                        this.$router.push({
                          //核心语句
                          path: "/presult", //跳转的路径
                          query: {
                            //路由传参时push和query搭配使用 ，作用时传递参数
                            type: this.type,
                            partName: 'intermediate4',
                            account: this.account,
                            menuId: this.menuId,
                            unitsId: this.unitsId,
                            unit: this.unit,
                            insert:this.insert
                          }
                        });

                      }, 2000);
                    }
                  }, 2000);
                }
              }
              if (this.items4.length === 1) {
                if ($.trim(evt.removed.element.name) === $.trim(this.sort2)) {
                  this.ended2 = false;this.soundscorrect=true;
                  this.count += 1;
                  if(this.count===3){
                    this.account+=1;
                    if (this.countpage-2 !==9){
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':1},";
                    }else{
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':1}]";
                    }
                  }else{
                    if (this.countpage-2 !==9){
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
                    }else{
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
                    }
                  }
                  setTimeout(() => {
                    this.soundscorrect=false;
                    if (this.countpage <= this.listH.length) {
                      setTimeout(() => {
                        this.onef = true;
                        this.count=0;
                        this.ended2 = true;
                        this.items4 = [];
                        this.fangda2 = false;
                        this.reload = true;
                        this.items1 = JSON.parse(JSON.stringify(this.listH[this.countpage - 1]));
                        for(let a in this.items1){
                          this.items1[a].imgop=0;
                          this.items3[a].bg=this.pic+this.items1[a].bg;
                          this.items3[a].audio=this.pic+this.items1[a].audio;
                        }
                        this.sort1=this.items1[0].value;
                        this.sort2=this.items1[1].value;
                        this.sort3=this.items1[2].value;
                        this.over=false;
                      }, 2000);
                    } else {

                      setTimeout(() => {
                        this.over=false;
                        this.count=0;
                        this.$router.push({
                          //核心语句
                          path: "/presult", //跳转的路径
                          query: {
                            //路由传参时push和query搭配使用 ，作用时传递参数
                            type: this.type,
                            partName: 'intermediate4',
                            account: this.account,
                            menuId: this.menuId,
                            unitsId: this.unitsId,
                            unit: this.unit,
                            insert:this.insert
                          }
                        });

                      }, 2000);
                    }
                  }, 2000);
                }else{
                  this.issuccess2 = true;
                  this.soundsWrong=true;
                  if (this.countpage-2 !==9){
                    this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
                  }else{
                    this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
                  }
                  setTimeout(() => {
                    this.soundsWrong=false;
                    if (this.countpage <= this.listH.length) {
                      setTimeout(() => {
                        this.onef = true;
                        this.count=0;
                        this.issuccess2 = false;
                        this.items4 = [];
                        this.fangda2 = false;
                        this.reload = true;
                        this.items1 = JSON.parse(JSON.stringify(this.listH[this.countpage - 1]));
                        for(let a in this.items1){
                          this.items1[a].imgop=0;
                          this.items3[a].bg=this.pic+this.items1[a].bg;
                          this.items3[a].audio=this.pic+this.items1[a].audio;
                        }
                        this.sort1=this.items1[0].value;
                        this.sort2=this.items1[1].value;
                        this.sort3=this.items1[2].value;

                        this.over=false;
                      }, 2000);
                    } else {

                      setTimeout(() => {
                        this.over=false;
                        this.count=0;
                        this.$router.push({
                          //核心语句
                          path: "/presult", //跳转的路径
                          query: {
                            //路由传参时push和query搭配使用 ，作用时传递参数
                            type: this.type,
                            partName: 'intermediate4',
                            account: this.account,
                            menuId: this.menuId,
                            unitsId: this.unitsId,
                            unit: this.unit,
                            insert:this.insert
                          }
                        });

                      }, 2000);
                    }
                  }, 2000);
                }
              }
              if (this.items5.length === 1) {
                if ($.trim(evt.removed.element.name) === $.trim(this.sort3)) {
                  this.ended3 = false;this.soundscorrect=true;
                  this.count += 1;
                  if(this.count===3){
                    this.account+=1;
                    if (this.countpage-2 !==9){
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':1},";
                    }else{
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':1}]";
                    }
                  }else{
                    if (this.countpage-2 !==9){
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
                    }else{
                      this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
                    }
                  }
                  setTimeout(() => {
                    if (this.countpage <= this.listH.length) {
                      setTimeout(() => {
                        this.onef = true;
                        this.count=0;
                        this.ended3 = true;this.soundscorrect=false;
                        this.items5 = [];
                        this.fangda3 = false;
                        this.reload = true;
                        this.items1 = JSON.parse(JSON.stringify(this.listH[this.countpage - 1]));
                        for(let a in this.items1){
                          this.items1[a].imgop=0;
                          this.items3[a].bg=this.pic+this.items1[a].bg;
                          this.items3[a].audio=this.pic+this.items1[a].audio;
                        }
                        this.sort1=this.items1[0].value;
                        this.sort2=this.items1[1].value;
                        this.sort3=this.items1[2].value;

                        this.over=false;
                      }, 2000);
                    } else {
                      setTimeout(() => {
                        this.over=false;this.count=0;
                        this.$router.push({
                          //核心语句
                          path: "/presult", //跳转的路径
                          query: {
                            //路由传参时push和query搭配使用 ，作用时传递参数
                            type: this.type,
                            partName: 'intermediate4',
                            account: this.account,
                            menuId: this.menuId,
                            unitsId: this.unitsId,
                            unit: this.unit,
                            insert:this.insert
                          }
                        });

                      }, 2000);
                    }

                  },2000);
                } else{
                  this.issuccess3 = true;
                  this.soundsWrong=true;
                  if (this.countpage-2 !==9){
                    this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0},";
                  }else{
                    this.insert = this.insert+"{'phonics_detail_id':"+this.listH[this.countpage-2][0].phonics_detail_id+",'ansResult':0}]";
                  }
                  setTimeout(() => {
                    this.soundsWrong=false;
                    if (this.countpage <= this.listH.length) {
                      setTimeout(() => {
                        this.onef = true;this.count=0;
                        this.issuccess3 = false;
                        this.items5 = [];
                        this.fangda3 = false;
                        this.reload = true;
                        this.items1 = JSON.parse(JSON.stringify(this.listH[this.countpage - 1]));
                        for(let a in this.items1){
                          this.items1[a].imgop=0;
                          this.items3[a].bg=this.pic+this.items1[a].bg;
                          this.items3[a].audio=this.pic+this.items1[a].audio;
                        }
                        this.sort1=this.items1[0].value;
                        this.sort2=this.items1[1].value;
                        this.sort3=this.items1[2].value;

                        this.over=false;
                      }, 2000);
                    } else {
                      setTimeout(() => {
                        this.over=false;this.count=0;
                        this.$router.push({
                          //核心语句
                          path: "/presult", //跳转的路径
                          query: {
                            //路由传参时push和query搭配使用 ，作用时传递参数
                            type: this.type,
                            partName: 'intermediate4',
                            account: this.account,
                            menuId: this.menuId,
                            unitsId: this.unitsId,
                            unit: this.unit,
                            insert:this.insert
                          }
                        });

                      }, 2000);
                    }
                  }, 2000);
                }
              }
            } else {
              if (this.items2.length === 1) {
                // if ($.trim(evt.removed.element.name) == $.trim(this.sort1)) {
                //   this.ended1 = false;this.soundscorrect=true;
                //   this.count += 1;
                //   setTimeout(() => {
                //     this.soundscorrect=false;
                //     this.ended1 = true;
                //     this.items2 = [];
                //     this.fangda1 = false;
                //     this.over=false;
                //   }, 2000);
                // } else if ($.trim(evt.removed.element.name) == $.trim(this.sort2)) {
                //   this.issuccess1 = true;this.soundsWrong=true;
                //   setTimeout(() => {
                //     this.soundsWrong=false;
                //     this.issuccess1 = false;
                //     this.items2 = [];
                //     this.fangda1 = false;
                //     this.over=false;
                //   }, 2000);
                // }
                if ($.trim(evt.removed.element.name) === $.trim(this.sort1)) {
                  this.ended1 = false;this.soundscorrect=true;
                  this.count += 1;
                  setTimeout(() => {
                    this.soundscorrect=false;
                    this.ended1 = true;
                    this.items2 = [];
                    this.fangda1 = false;
                    this.over=false;
                  }, 2000);
                }else {
                  this.issuccess1 = true;this.soundsWrong=true;
                  setTimeout(() => {
                    this.soundsWrong=false;
                    this.issuccess1 = false;
                    this.items2 = [];
                    this.fangda1 = false;
                    this.over=false;
                  }, 2000);
                }
              }
              if (this.items4.length === 1) {

                if ($.trim(evt.removed.element.name) === $.trim(this.sort2)) {
                  this.ended2 = false;this.soundscorrect=true;
                  this.count += 1;
                  setTimeout(() => {
                    this.soundscorrect=false;
                    this.ended2 = true;
                    this.items4 = [];
                    this.fangda2 = false;
                    this.over=false;
                  }, 2000);
                }else {
                  this.issuccess2 = true;this.soundsWrong=true;
                  setTimeout(() => {
                    this.soundsWrong=false;
                    this.issuccess2 = false;
                    this.items4 = [];
                    this.fangda2 = false;
                    this.over=false;
                  }, 2000);
                }
              }
              if (this.items5.length === 1) {
                if ($.trim(evt.removed.element.name) === $.trim(this.sort3)) {
                  this.ended3 = false;this.soundscorrect=true;
                  this.count += 1;
                  setTimeout(() => {
                    this.soundscorrect=false;
                    this.ended3 = true;
                    this.items5 = [];
                    this.fangda3 = false;
                    this.over=false;
                  }, 2000);
                }else {
                  this.issuccess3 = true;this.soundsWrong=true;
                  setTimeout(() => {
                    this.soundsWrong=false;
                    this.issuccess3 = false;
                    this.items5 = [];
                    this.fangda3 = false;
                    this.over=false;
                  }, 2000);
                }
              }
            }
          }
        } else if (evt.moved) {
          this.zhezhao=false;
          this.fangda1 = false;
          this.fangda2 = false;
          this.fangda3 = false;
          evt.moved.element.imgop = 0;
          this.over=false;
          //console.log(this.fangda2);
        }
      },

//
      changesett() {
        // if(this.action==false&&this.onef==false){
        //   this.action = true;
        //   this.zhezhao=false;
        //   setTimeout(() => {
        //     this.action = false;
        //     this.resume = !this.resume;
        //   }, 1000);
        // }
        if (this.onef == false) {
          setTimeout(() => {
            this.resume = !this.resume;
          }, 1000);
        }
      },
      sound1(){
        this.short1 = true;
      },
      sound2(){
        this.short2 = true;
      },
      sound3(){
        this.short3 = true;
      },
      pop(){
        this.popp = !this.popp;
      },
      help(){
        if (this.onef == false) {
          this.spanp = "Listen to the words. Then, match the blends to the correct pictures.";
          this.popp = !this.popp;

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
          path: '/intermenu', //跳转的路径
          query: {
            unitsId: this.unitsId,
            unit: this.unit
          }
        })
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
    destroyed() {
      document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
      window.removeEventListener('popstate',this.gomemu,false);
    },
    created() { //生命周期里接收参数
      //this.pic='https://gamejava.monkeytree.com.cn';
      this.pic=this.$axios.defaults.baseURL2;
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
      if (this.onef == true) {
        this.$axios.post(this.url, qs.stringify({
          menuId: this.menuId,
          num:14
        })).then(res => {
          for (let i in res.data.maps) {
            this.listH.push(res.data.maps[i]); //属性
          }
          this.question = this.listH.length;
          this.items1 = JSON.parse(JSON.stringify(this.listH[this.countpage - 1]));

          for(var a=0;a<this.items1.length;a++){
            this.items1[a].imgop=0;
            this.items3[a].bg=this.pic+this.items1[a].bg;
            this.items3[a].audio=this.pic+this.items1[a].audio;
          }
          this.sort1=this.items1[0].value;
          this.sort2=this.items1[1].value;
          this.sort3=this.items1[2].value;
          this.showNum = true;
          setTimeout(() => {
            this.onef = false;
            setTimeout(() => {
              this.reload = false;
            }, 500);
          }, 1000);
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });

      }
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
      document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
    }
  };
</script>

<style scoped lang="less">
  body {
    padding: 0;
    cursor: auto !important;
  }

  .intermediate4 {
    width: 100%;
    height: 100%;
    /*background-image: url("http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/interbg10.png");*/
    /*background-color: #204900;*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    position: absolute;
    display: flex;
  }

  .disnone {
    display: none !important;
  }
  .touming{
    opacity: 0;
  }
  .part8to2 {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
  }

  .classimg {
    width: 180px;
    height: 115px;
    text-align: center;
    margin: 0 10px;
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
  .bgimage{
    position: absolute;
    width: auto;
    left: 27%;
    top: 35%;
    max-width: 50%;
    max-height: 50%;
    height: auto;

  }

  .fast {
    font-size: 2.0rem;
    width: 80%;
    height: 100%;
    background: none;
    bottom:0;
    border-style: none;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:cover ;
    color: white;
    position: relative;
    font-family: pepper;
    text-align: center;
  }
  .fast2 {
    font-size: 2.0rem;
    width:80%;
    height: 100%;
    background: none;
    bottom:0;
    border-style: none;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:cover ;
    color: white;
    position: relative;
    font-family: pepper;
    text-align: center;
  }
  .fast3 {
    font-size: 2.0rem;
    width:80%;
    height: 100%;
    background: none;
    bottom:0;
    border-style: none;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:cover ;
    color: white;
    position: relative;
    font-family: pepper;
    text-align: center;
  }
  .sort{
    position: absolute;
    bottom: 35%;
    left: 4%;
    color: white;
    font-size: 2rem;
    font-family: pepper;
    width: 100%;
  }
  .alldrag {
    bottom: 0%;
    width: 100%;
    position: absolute;
    text-align: center;
  }

  .dndList {
    position: absolute;
    bottom: 15%;
    height: 85%;
    width: 100%;
    display: flex;
  }

  .smooth-dnd-draggable-wrapper.animated {
    transition: transform ease;
  }

  .smooth-dnd-container.horizontal>.smooth-dnd-draggable-wrapper {
    display: inline-block;
  }

  .dndList-list1 {
    position: absolute;
    right: 11.5%;
    min-width: 32%;
    max-width: 80%;
    margin-top: 10%;
  }

  .other-list1 {
    position: absolute;
    right: 8%;
    min-width: 60%;
    max-width: 80%;
    margin-top: 5%;
  }

  .other-list2 {
    height: auto;
    width: 45%;
    margin-top: 15%;
    display: inline;
    position: absolute;
  }

  .dndList-list2 {
    height: auto;
    width: 45%;
    margin-top: 19%;
    display: inline;
    position: absolute;
  }

  .smooth-dnd-container {
    text-align: center;
    margin: 0 auto;
    display: table;
  }

  .allansw {
    display: inline-block;
    width: 33.3%;
    top: 10%;
    position: relative;
    height: 50%;
    text-align: center
  }


  .smooth-dnd-ghost {
    //     z-index: 1200 !important;
    margin: 0 auto !important;
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
    z-index: 102;
    background: rgba(0, 0, 0, 0.3);
  }

  .withcolor {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    top: 14%;
    background-color: #FCFFD1;
    height: 65%;
    border: 10px solid #FFD550;
    border-radius: 50px;
    position: relative;
  }
  .oringe{
    background-color: #FFD550 !important;
    border: 10px solid #FCFFD1 !important;
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
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    z-index: 2;
    font-family: pepper;
  }
  .spanp1{
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
    width: 100%;
    margin-top:5%
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
    color: #C5CA8B;
    text-align: center;
    vertical-align: middle;
    margin-top: 22%;
    font-size: xx-large;
  }


  .fontsize {
    font-family: pepper;
    color: white;
    bottom: 15%;
    left: 3%;
    position: absolute;
    font-size: 1.1rem;
    max-height: 100%;
    min-height: 60%;
    margin-left: 2%;
  }

  .fontcolor {
    color: red;
  }

  .contain {
    width: 100%;
    height: 100%;
    position: relative;
    display: contents;
    overflow: hidden;
  }

  // .listimg:hover {
  //  transform: scale(1.2);
  // }
  //   .listimg:visited {
  //   	transform: scale(1);
  //   }

  .listimg {
    transform: scale(1.2);
    background-size: contain;
  }



  .spansize {
    color: white;
    font-family: pepper;
    font-size: 1.6rem;
  }

  .bordercolor {
    display: block !important;
    height: 100%;
    position: absolute;
    width: 100%;
    bottom: 0%;
  }

  .yes {
    height: 100% !important;
    text-align: center;
    width:100%;
    display: inline-table;
    position: relative;
    // background-image: url(../../assets/image/blueball.png);
    // background-size: cover;
    padding: 4% 0 0 0;
    background-repeat: no-repeat;
  }

  .no {
    height: 100% !important;
    text-align: center;
    width: 100%;
    display: inline-table;
    position: relative;
    // background-image: url(../../assets/image/redball.png);
    // background-size: cover;
    padding: 4% 0 0 0;
    background-repeat: no-repeat;
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
    animation: myPlay 0.6s infinite alternate;
    animation-timing-function: linear;
    animation-iteration-count: 2;

    -webkit-animation: myPlay 0.6s infinite alternate;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: 2;

    -moz-animation: myPlay 0.6s infinite alternate;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: 2;
    -o-animation: myPlay 0.6s infinite alternate;
    -o-animation-timing-function: linear;
    -o-animation-iteration-count: 2;
    //display: block;
    //margin: 50px auto;
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

  @media screen and (max-width: 481px) {
    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 11%;
      left: 3%;
      position: absolute;
      font-size: 0.5rem;
      max-height: 100%;
      min-height: 60%;
      margin-left: 2%;
    }


    .twomenu {
      padding-top: 18%;
    }

    .allansw {
      height: 6.5rem;
    }

    .fast {
      font-size: 1.5rem;
    }


  }

  @media screen and (min-device-height: 482px) and (max-device-height: 569px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 482px) and (max-device-height: 569px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 482px) and (max-width: 569px) {
    .classimg{
      margin: 0 4px;
    }
    .allansw {
      height:8rem;
    }
    .alldrag{
      top: 56%;
    }

    .fast {
      font-size: 1.5rem;
    }
    .fontsize{
      font-size: 0.8rem;
    }



  }

  @media screen and (min-device-height: 700px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 700px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 700px) and (max-width: 812px) {
    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }

  }

  @media screen and (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 812px) and (max-width:1023px) {
    .twomenu {
      padding-top: 14%;
    }



    .fontsizes {
      margin-top: 17%;
    }


    .withcolor {
      height: 70%;
    }
    .bgimage{
      top: 20%;
      max-height: 60%;
    }
  }

  @media screen and (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1024px) and (max-width: 1199px){



    .twomenu {
      padding-top: 26%;
    }



    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 8%;
      left: 8%;
      position: absolute;
      // font-size: x-large;
      max-height: 80%;
      min-height: 47%;
      margin-left: 2%;
      transform: scale(1.2);
    }

    .fontsizes {
      margin-top: 30%;
    }

    .fast {
      //font-size: 3.5rem;
    }
    .classimg{
      width: 250px;
      height: 150px;
    }
    .alldrag{
      bottom: 5%;
    }
    .sort{
      font-size: 3rem;
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
    .bgimage{
      top: 49%;
      max-height: 40%;
    }

  }

  @media screen and (min-device-height: 1200px) and (max-device-height: 1365px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1200px) and (max-device-height: 1365px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1200px)and (max-width: 1365px) {

    .twomenu {
      padding-top: 26%;
    }

    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 15%;
      left: 8%;
      position: absolute;
      font-size: 1.8rem;
      max-height: 80%;
      min-height: 47%;
      margin-left: 2%;
      transform: scale(1.2);
    }

    .fontsizes {
      margin-top: 30%;
    }
    .classimg{
      width: 80%;
      height: 100%;
    }
    .alldrag{
      bottom: 5%;
    }
    .sort{
      font-size: 4rem;
    }
    .bgimage{
      top: 49%;
      max-height: 40%;
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
  }

  @media screen and (min-device-height: 1366px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1366px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1366px) and (max-width: 1600px){



    .twomenu {
      padding-top: 26%;
    }



    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 15%;
      left: 8%;
      position: absolute;
      font-size: 1.8rem;
      max-height: 80%;
      min-height: 47%;
      margin-left: 2%;
      transform: scale(1.2);
    }

    .fontsizes {
      margin-top: 30%;
    }
    .classimg{
      width: 80%;
      height: 100%;
    }
    .alldrag{
      bottom: 5%;
    }
    .sort{
      font-size: 4rem;
    }
    .bgimage{
      top: 49%;
      max-height: 40%;
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
      left: 12%;
      position: absolute;
      font-size: x-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }

    .classimg{
      width: 80%;
      height: 100%;
    }
    .alldrag{
      bottom: 5%;
    }
    .sort{
      font-size: 6rem;
      bottom: 25%;
    }
    .bgimage{
      top: 25%;
      max-height: 60%;
    }
    .item{
      width:25%;
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
