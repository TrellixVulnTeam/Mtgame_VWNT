<template>
  <div class="flashcard">
    <div class="contain" id="container">
      <img src="../../assets/image/main_bg.png"
           style="width: 100%; height: 100%;z-index: -1;display:block;position: absolute;">

      <transition name="fade1">
        <div style="width: 100%;height: 100%;">
          <img src="../../assets/image/picture.png" class="backbutton" @click="gocard()" v-if="this.unit!=='Our World'&&this.unit!=='My Home'&&this.unit!=='Fun Time!'&&this.unit!=='My Community'"/>
          <img :src="title" class="toptitle">
          <div>
            <div class="cardleft">
              <img src="../../assets/image/cardleft1.png" @click="turncard('left')" style="width: 40%;top: 40%;position: relative;">
            </div>

            <div class="cardlist" style="padding-top: 10%">
              <div class="list" v-for="li in list2" :key="li.id" @click="startpop(li)" >
                <img :src=li.img class="card-img1">
                <img src="http://107.150.121.34/monkeytownHK/image/img/front.png" class="card-img2">
              </div>
              <div>
                  <h2 @click="jump()" class="jump">Games</h2>
              </div>
            </div>

            <div class="cardright">
              <img src="../../assets/image/cardright1.png" @click="turncard('right')" style="width: 40%;top: 40%;position: relative;">
            </div>

          </div>
        </div>
      </transition>


      <div class="settinglist">
        <img src="../../assets/image/walker_bar.png" style="width: 100%;bottom: 0;height: 100%;">

        <div>
          <img :src=gameImage class="acstyle" @click="goinfo"/>
          <span class="fontsize leftmar">{{firstName}}</span>
        </div>
        <div>
          <img src="../../assets/image/icon_coin.png" class="coinstyle">
          <span class="fontsize leftmar2">{{sum}}</span>
        </div>
        <div @click="back">

          <img src="../../assets/image/Icon_back.png" class="pause">
        </div>
        <div @click="home">

          <img src="../../assets/image/Icon_home.png" class="repeat">
        </div>
      </div>
      <div class='popContainer' v-show="popp">
        <div class="withcolor">
          <div class="close" @click="pop">
            <img src="../../assets/image/cloce2.png" style="z-index: 1;position: relative;">
          </div>
          <div class="cardleft2">
            <img src="../../assets/image/cardleft.png" @click="turnpop('left')" style="width: 40%;top: 40%;position: relative;">
          </div>
          <p class="pstyle">{{falshCardId}}/12</p>
          <button class="animapng1">
            <img :src="falshCardUrl" class="imgpart">
          </button>
          <button class="animapng7" @click="playsound()">
            <p>
              {{falshCardName}}
            </p>
            <img src="../../assets/image/playsound.png" class="imgpart1">
          </button>
          <div class="cardright2">
            <img src="../../assets/image/cardright.png" @click="turnpop('right')" style="width: 40%;top: 40%;position: relative;">
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
  var qs = require('qs');
  export default {
    name: "flashcard",
    watch: {},
    data() {
      return {
        audio: '',
        In_the_castle:[
          {
            id:1,
            cardname:'castle',
            audio:require('../../assets/Flashcard Audio/June/Castle.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/castle-01.png')
          },{
            id:2,
            cardname:'dragon',
            audio:require('../../assets/Flashcard Audio/June/dragon.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/dragon-01.png')
          },{
            id:3,
            cardname:'horse',
            audio:require('../../assets/Flashcard Audio/June/Horse.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/horse-01.png')
          },{
            id:4,
            cardname:'king',
            audio:require('../../assets/Flashcard Audio/June/King.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/king-01.png')
          },{
            id:5,
            cardname:'knight',
            audio:require('../../assets/Flashcard Audio/June/knight.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/knight-01.png')
          },{
            id:6,
            cardname:'princess',
            audio:require('../../assets/Flashcard Audio/June/princess.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/princess-01.png')
          },{
            id:7,
            cardname:'queen',
            audio:require('../../assets/Flashcard Audio/June/Queen.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/queen-01.png')
          },{
            id:8,
            cardname:'roar',
            audio:require('../../assets/Flashcard Audio/June/roar.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/roar-01.png')
          },{
            id:9,
            cardname:'scream',
            audio:require('../../assets/Flashcard Audio/June/scream.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/scream-01.png')
          },{
            id:10,
            cardname:'shield',
            audio:require('../../assets/Flashcard Audio/June/Shield.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/shield-01.png')
          },{
            id:11,
            cardname:'sword',
            audio:require('../../assets/Flashcard Audio/June/sword.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/sword-01.png')
          },{
            id:12,
            cardname:'tower',
            audio:require('../../assets/Flashcard Audio/June/tower.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/tower-01.png')
          }
        ],
        enchanted_forest :[
          {
            id:1,
            cardname:'elf',
            audio:require('../../assets/Flashcard Audio/June/elf.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/elf-01.png')
          },{
            id:2,
            cardname:'fairy',
            audio:require('../../assets/Flashcard Audio/June/fairy.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/fairy-01.png')
          },{
            id:3,
            cardname:'forest',
            audio:require('../../assets/Flashcard Audio/June/forest.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/forest-01.png')
          },{
            id:4,
            cardname:'giant',
            audio:require('../../assets/Flashcard Audio/June/giant.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/giant-01.png')
          },{
            id:5,
            cardname:'laugh',
            audio:require('../../assets/Flashcard Audio/June/Laugh.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/laugh-01.png')
          },{
            id:6,
            cardname:'mermaid',
            audio:require('../../assets/Flashcard Audio/June/mermaid.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/mermaid-01.png')
          },{
            id:7,
            cardname:'unicorn',
            audio:require('../../assets/Flashcard Audio/June/unicorn.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/unicorn-01.png')
          },{
            id:8,
            cardname:'wand',
            audio:require('../../assets/Flashcard Audio/June/Wand.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/wand-01.png')
          },{
            id:9,
            cardname:'wave',
            audio:require('../../assets/Flashcard Audio/June/Wave.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/wave-01.png')
          },{
            id:10,
            cardname:'wings',
            audio:require('../../assets/Flashcard Audio/June/Wings.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/wings-01.png')
          },{
            id:11,
            cardname:'witch',
            audio:require('../../assets/Flashcard Audio/June/Witch.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/witch-01.png')
          },{
            id:12,
            cardname:'wizard',
            audio:require('../../assets/Flashcard Audio/June/Wizard.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/wizard-01.png')
          }
        ],
        The_Desert:[
          {
            id:1,
            cardname:'cactus',
            audio:require('../../assets/Flashcard Audio/July/cactus.mp3'),
            img:require('../../assets/image/desert/cactus_flashcard-01.png')
          },{
            id:2,
            cardname:'camel',
            audio:require('../../assets/Flashcard Audio/July/Camel.mp3'),
            img:require('../../assets/image/desert/camel_flashcard-01.png')
          },{
            id:3,
            cardname:'compass',
            audio:require('../../assets/Flashcard Audio/July/compass.mp3'),
            img:require('../../assets/image/desert/compass_flashcard-01.png')
          },{
            id:4,
            cardname:'dunes',
            audio:require('../../assets/Flashcard Audio/July/dunes.mp3'),
            img:require('../../assets/image/desert/dunes_flashcard-01.png')
          },{
            id:5,
            cardname:'hot',
            audio:require('../../assets/Flashcard Audio/July/Hot.mp3'),
            img:require('../../assets/image/desert/hot_flashcard-01.png')
          },{
            id:6,
            cardname:'lizard',
            audio:require('../../assets/Flashcard Audio/July/lizard.mp3'),
            img:require('../../assets/image/desert/lizard_flashcard-01.png')
          },{
            id:7,
            cardname:'lost',
            audio:require('../../assets/Flashcard Audio/July/lost.mp3'),
            img:require('../../assets/image/desert/lost_flashcard-01.png')
          },{
            id:8,
            cardname:'map',
            audio:require('../../assets/Flashcard Audio/July/Map.mp3'),
            img:require('../../assets/image/desert/map_flashcard-01.png')
          },{
            id:9,
            cardname:'sand',
            audio:require('../../assets/Flashcard Audio/July/Sand.mp3'),
            img:require('../../assets/image/desert/sand_flashcard-01.png')
          },{
            id:10,
            cardname:'sandstorm',
            audio:require('../../assets/Flashcard Audio/July/sandstorm.mp3'),
            img:require('../../assets/image/desert/sandstorm_flashcard-01.png')
          },{
            id:11,
            cardname:'thirsty',
            audio:require('../../assets/Flashcard Audio/July/thirsty.mp3'),
            img:require('../../assets/image/desert/thirsty_flashcard-01.png')
          },{
            id:12,
            cardname:'water',
            audio:require('../../assets/Flashcard Audio/July/water.mp3'),
            img:require('../../assets/image/desert/water_flashcard-01.png')
          }
        ],
        The_Arctic:[
          {
            id:1,
            cardname:'blizzard',
            audio:require('../../assets/Flashcard Audio/July/blizzard.mp3'),
            img:require('../../assets/image/arctic/blizzard_flashcard-01.png')
          },{
            id:2,
            cardname:'cold',
            audio:require('../../assets/Flashcard Audio/July/cold.mp3'),
            img:require('../../assets/image/arctic/cold_flashcard-01.png')
          },{
            id:3,
            cardname:'ice berg',
            audio:require('../../assets/Flashcard Audio/July/iceberg.mp3'),
            img:require('../../assets/image/arctic/ice berg_flashcard-01.png')
          },{
            id:4,
            cardname:'ice',
            audio:require('../../assets/Flashcard Audio/July/ice.mp3'),
            img:require('../../assets/image/arctic/ice_flashcard-01.png')
          },{
            id:5,
            cardname:'igloo',
            audio:require('../../assets/Flashcard Audio/July/igloo.mp3'),
            img:require('../../assets/image/arctic/igloo_flashcard-01.png')
          },{
            id:6,
            cardname:'orca',
            audio:require('../../assets/Flashcard Audio/July/orca.mp3'),
            img:require('../../assets/image/arctic/orca_flashcard-01.png')
          },{
            id:7,
            cardname:'polar bear',
            audio:require('../../assets/Flashcard Audio/July/polar bear.mp3'),
            img:require('../../assets/image/arctic/polar beat_flashcard-01.png')
          },{
            id:8,
            cardname:'seal',
            audio:require('../../assets/Flashcard Audio/July/seal.mp3'),
            img:require('../../assets/image/arctic/seal_flashcard-01.png')
          },{
            id:9,
            cardname:'sled',
            audio:require('../../assets/Flashcard Audio/July/sled.mp3'),
            img:require('../../assets/image/arctic/sled_flashcard-01.png')
          },{
            id:10,
            cardname:'snow',
            audio:require('../../assets/Flashcard Audio/July/snow.mp3'),
            img:require('../../assets/image/arctic/snow_flashcard-01.png')
          },{
            id:11,
            cardname:'tusk',
            audio:require('../../assets/Flashcard Audio/July/tusk.mp3'),
            img:require('../../assets/image/arctic/tusk_flashcard-01.png')
          },{
            id:12,
            cardname:'walrus',
            audio:require('../../assets/Flashcard Audio/July/Walrus.mp3'),
            img:require('../../assets/image/arctic/walrus_flashcard-01.png')
          }
        ],
        In_The_Sea:[
          {
            id:1,
            cardname:'blow',
            audio:require('../../assets/Flashcard Audio/august/blow.mp3'),
            img:require('../../assets/image/InTheSea/blow_flashcard-01.png')
          },{
            id:2,
            cardname:'dive',
            audio:require('../../assets/Flashcard Audio/august/Dive.mp3'),
            img:require('../../assets/image/InTheSea/dive_flashcard-01.png')
          },{
            id:3,
            cardname:'flippers',
            audio:require('../../assets/Flashcard Audio/august/flippers.mp3'),
            img:require('../../assets/image/InTheSea/flippers_flashcard-01.png')
          },{
            id:4,
            cardname:'life jacket',
            audio:require('../../assets/Flashcard Audio/august/life jacket.mp3'),
            img:require('../../assets/image/InTheSea/life jacket_flashcard-01.png')
          },{
            id:5,
            cardname:'mask',
            audio:require('../../assets/Flashcard Audio/august/Mask.mp3'),
            img:require('../../assets/image/InTheSea/mask_flashcard-01.png')
          },{
            id:6,
            cardname:'sail',
            audio:require('../../assets/Flashcard Audio/august/sail.mp3'),
            img:require('../../assets/image/InTheSea/sail_flashcard-01.png')
          },{
            id:7,
            cardname:'sailboat',
            audio:require('../../assets/Flashcard Audio/august/sailboat.mp3'),
            img:require('../../assets/image/InTheSea/sailboat_flashcard-01.png')
          },{
            id:8,
            cardname:'surf',
            audio:require('../../assets/Flashcard Audio/august/Surf.mp3'),
            img:require('../../assets/image/InTheSea/surf_flashcard-01.png')
          },{
            id:9,
            cardname:'surfboard',
            audio:require('../../assets/Flashcard Audio/august/sailboat.mp3'),
            img:require('../../assets/image/InTheSea/surfboard_flashcard-01.png')
          },{
            id:10,
            cardname:'tank',
            audio:require('../../assets/Flashcard Audio/august/Tank.mp3'),
            img:require('../../assets/image/InTheSea/tank_flashcard-01.png')
          },{
            id:11,
            cardname:'waves',
            audio:require('../../assets/Flashcard Audio/august/waves.mp3'),
            img:require('../../assets/image/InTheSea/waves_flashcard-01.png')
          },{
            id:12,
            cardname:'wind',
            audio:require('../../assets/Flashcard Audio/august/wind.mp3'),
            img:require('../../assets/image/InTheSea/wind_flashcard-01.png')
        }
        ],
        At_The_Circus:[
          {
            id:1,
            cardname:'acrobat',
            audio:require('../../assets/Flashcard Audio/august/Acrobat.mp3'),
            img:require('../../assets/image/AtTheCircus/acrobat_flashcard-01.png')
          },{
            id:2,
            cardname:'cheer',
            audio:require('../../assets/Flashcard Audio/august/cheer.mp3'),
            img:require('../../assets/image/AtTheCircus/cheer_flashcard-01.png')
          },{
            id:3,
            cardname:'clown',
            audio:require('../../assets/Flashcard Audio/august/clown.mp3'),
            img:require('../../assets/image/AtTheCircus/clown_flashcard-01.png')
          },{
            id:4,
            cardname:'crowd',
            audio:require('../../assets/Flashcard Audio/august/crowd.mp3'),
            img:require('../../assets/image/AtTheCircus/crowd_flashcard-01.png')
          },{
            id:5,
            cardname:'juggle',
            audio:require('../../assets/Flashcard Audio/august/Juggle.mp3'),
            img:require('../../assets/image/AtTheCircus/juggle_flashcard-01.png')
          },{
            id:6,
            cardname:'magician',
            audio:require('../../assets/Flashcard Audio/august/magician.mp3'),
            img:require('../../assets/image/AtTheCircus/magician_flashcard-01.png')
          },{
            id:7,
            cardname:'net',
            audio:require('../../assets/Flashcard Audio/august/Net.mp3'),
            img:require('../../assets/image/AtTheCircus/net_flashcard-01.png')
          },{
            id:8,
            cardname:'tent',
            audio:require('../../assets/Flashcard Audio/august/tent.mp3'),
            img:require('../../assets/image/AtTheCircus/tent_flashcard-01.png')
          },{
            id:9,
            cardname:'tightrope',
            audio:require('../../assets/Flashcard Audio/august/tightrope.mp3'),
            img:require('../../assets/image/AtTheCircus/tightrope_flashcard-01.png')
          },{
            id:10,
            cardname:'trick',
            audio:require('../../assets/Flashcard Audio/august/trick.mp3'),
            img:require('../../assets/image/AtTheCircus/trick_flashcard-01.png')
          },{
            id:11,
            cardname:'unicycle',
            audio:require('../../assets/Flashcard Audio/august/unicycle.mp3'),
            img:require('../../assets/image/AtTheCircus/unicycle_flashcard-01.png')
          },{
            id:12,
            cardname:'watch',
            audio:require('../../assets/Flashcard Audio/august/watch.mp3'),
            img:require('../../assets/image/AtTheCircus/watch_flashcard-01.png')
          }
        ],
        list1: [
          {
            id: 1,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/castle-01.png')
          },
          {
            id: 2,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/dragon-01.png')
          },
          {
            id: 3,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/horse-01.png')
          },
          {
            id: 4,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/king-01.png')
          },
          {
            id: 5,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/knight-01.png')
          },
          {
            id: 6,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/princess-01.png')
          },
          {
            id: 7,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/queen-01.png')
          },
          {
            id: 8,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/roar-01.png')
          },
          {
            id: 9,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/scream-01.png')
          },
          {
            id: 10,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/shield-01.png')
          },
          {
            id: 11,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/sword-01.png')
          },
          {
            id: 12,
            audio: '',
            bg: require('../../assets/image/Fairy Tales_In_the_castle_MT/tower-01.png')
          },
        ],
        list2:[],
        titleUrl:{
          MyCommunity:require('../../assets/image/2-logo.png'),
          ThePlaces:require('../../assets/image/2-logo1.png'),
          Thepeople:require('../../assets/image/2-logo2.png'),
          FunTime:require('../../assets/image/3-3logo.png'),
          IndoorActivities:require('../../assets/image/3-3logo1.png'),
          OutdoorActivities:require('../../assets/image/3-3logo2.png'),
          MyHome:require('../../assets/image/4-4logo.png'),
          RoomsOfMyHome:require('../../assets/image/4-4logo1.png'),
          ThingsInMyHome:require('../../assets/image/4-4logo2.png'),
          OurWorld:require('../../assets/image/5-5logo.png'),
          InTheSky:require('../../assets/image/5-5logo1.png'),
          OnLand:require('../../assets/image/5-5logo2.png'),
          FairyTales:require('../../assets/image/6-6logo.png'),
          InTheCastle:require('../../assets/image/6-6logo1.png'),
          EnchantedForest:require('../../assets/image/6-6logo2.png'),
          Exploration:require('../../assets/image/7-7logo.png'),
          TheArctic:require('../../assets/image/7-7logo1.png'),
          TheDesert:require('../../assets/image/7-7logo2.png'),
          InTheSea:require('../../assets/image/8-8logo1.png'),
          AtTheCircus:require('../../assets/image/8-8logo2.png'),
        },
        title:'../../assets/image/6-6logo.png',
        falshCardUrl:'http://107.150.121.34/monkeytownHK/image/img/9315e4a9-e1ec-4f49-8db5-5b3a9b6ae083.png',
        falshCardName:'ice cream',
        falshCardId:0,
        sum: 0,
        firstName: '',
        gameImage: '',
        studentId: '',
        video: false,
        pic: "",
        url: '/games/',
        fade: 'fade',
        zhezhao: false,
        style: '',
        type: 'flashcard',
        popp: false,
        unit: '',
        unitsId: '',
        levelsId: '',
        courseId: '',
        part: 'part1',
        level: '',
        cources: ''
      }
    },
    methods: {
      jump(){
        this.$router.push({
            path: '/home',
            query: {
              unit:this.unit,
              unitsId:this.unitsId,
              levelsId:this.levelsId,
              courseId:this.courseId,
              part:this.part,
              style:this.style,
              level:this.level,
              cources:this.cources
            }
          });
      },
      turncard(turn){
        this.part = (this.part === 'part1') ?  'part2' : 'part1';
        this.createdpop();
      },
      pop() {
        this.popp = !this.popp;
      },
      playsound(){
        let audio = new Audio();
        audio.src = this.list2[this.falshCardId-1].audio;
        audio.play();
      },
      gocard(){
        this.$router.push({ //核心语句
          path: '/chatwalker', //跳转的路径
          query: {
            levelsId: this.levelsId,
            courseId: this.courseId,
            style: this.style,
            level: this.level,
            cources: this.cources,
            unit: this.unit,
            part: this.part
          }
        })
      },
      back() {
        const audio = document.getElementById('music');
        audio.volume=1;
        this.$router.push({
          path: '/courses',
          query: {
            levelsId: this.levelsId,
            courseId: this.courseId,
            style: this.style,
            level: this.level,
            cources: this.cources,
            unit: this.unit
          }
        })
      },
      //初始化pop
      createdpop(){
        if(this.unit === 'Fairy Tales'){
          if(this.part === 'part1'){
            this.list2 = this.In_the_castle;
            this.title = this.titleUrl.InTheCastle;
          }else{
            this.list2 = this.enchanted_forest;
            this.title = this.titleUrl.EnchantedForest;
          }
        }else if(this.unit === 'Exploration'){
          if(this.part === 'part1'){
            this.list2 = this.The_Desert;
            this.title = this.titleUrl.TheDesert;
          }else{
            this.list2 = this.The_Arctic;
            this.title = this.titleUrl.TheArctic;
          }
        }else if(this.unit === 'Our World'){
          if(this.part === 'part1'){
            this.list2 = this.The_Arctic;
            this.title = this.titleUrl.InTheSky;
          }else{
            this.list2 = this.The_Desert;
            this.title = this.titleUrl.OnLand;
          }
        }else if(this.unit === 'My Home'){
          if(this.part === 'part1'){
            this.list2 = this.The_Arctic;
            this.title = this.titleUrl.RoomsOfMyHome;
          }else{
            this.list2 = this.The_Desert;
            this.title = this.titleUrl.ThingsInMyHome;
          }
        }else if(this.unit === 'Fun Time!'){
          if(this.part==='part1'){
            this.list2 = this.The_Arctic;
            this.title = this.titleUrl.IndoorActivities;
          }else{
            this.list2 = this.The_Desert;
            this.title = this.titleUrl.OutdoorActivities;
          }
        }else if(this.unit === 'My Community'){
          if(this.part === 'part1'){
            this.list2 = this.The_Arctic;
            this.title = this.titleUrl.ThePlaces;
          }else{
            this.list2 = this.The_Desert;
            this.title = this.titleUrl.Thepeople;
          }
        }else if(this.unit === 'Summer Fun') {
          if (this.part === 'part1') {
            this.list2 = this.In_The_Sea;
            this.title = this.titleUrl.InTheSea;
          } else {
            this.list2 = this.At_The_Circus;
            this.title = this.titleUrl.AtTheCircus;
          }
        }else{
          this.list2 = this.In_the_castle;
          this.title = this.titleUrl.InTheSea;
        }
      },
      //pop向左右切换卡牌
      turnpop(turn){
        if (turn==='left'&&this.falshCardId!==1) {
          this.falshCardId=this.falshCardId-2;
        }else if(turn==='left'&&this.falshCardId===1){
          this.falshCardId=11;
        }else if(turn==='right'&&this.falshCardId===12){
          this.falshCardId=0;
        }
        this.showpop();
      },
      //展示pop
      startpop(li) {
        this.popp = !this.popp;
        this.falshCardId=li.id-1;
        this.showpop();
      },
      //加载pop的图片名字id
      showpop(){
        if(this.unit==='Fairy Tales'){
          if(this.part==='part1'){
            this.falshCardUrl=this.In_the_castle[this.falshCardId].img
            this.falshCardName=this.In_the_castle[this.falshCardId].cardname
            this.falshCardId=this.In_the_castle[this.falshCardId].id
          }else{
            this.falshCardUrl=this.enchanted_forest[this.falshCardId].img
            this.falshCardName=this.enchanted_forest[this.falshCardId].cardname
            this.falshCardId=this.enchanted_forest[this.falshCardId].id
          }
        }else if(this.unit === 'Exploration'){
          if(this.part==='part1'){
            this.falshCardUrl=this.The_Desert[this.falshCardId].img
            this.falshCardName=this.The_Desert[this.falshCardId].cardname
            this.falshCardId=this.The_Desert[this.falshCardId].id
          }else{
            this.falshCardUrl=this.The_Arctic[this.falshCardId].img
            this.falshCardName=this.The_Arctic[this.falshCardId].cardname
            this.falshCardId=this.The_Arctic[this.falshCardId].id
          }
        }else if(this.unit === 'Summer Fun'){
          if(this.part==='part1'){
            this.falshCardUrl=this.In_The_Sea[this.falshCardId].img
            this.falshCardName=this.In_The_Sea[this.falshCardId].cardname
            this.falshCardId=this.In_The_Sea[this.falshCardId].id
          }else{
            this.falshCardUrl=this.At_The_Circus[this.falshCardId].img
            this.falshCardName=this.At_The_Circus[this.falshCardId].cardname
            this.falshCardId=this.At_The_Circus[this.falshCardId].id
          }
        }
      },
      home() {
        const audio = document.getElementById('music');
        audio.volume=1;
        setTimeout(() => {
          this.$router.push({path: '/source'})
        }, 1000);
      },
      goinfo() {
        this.$router.push({ //核心语句
          path: '/info', //跳转的路径
        })
      },
    },

    created() { //生命周期里接收参数
      const audio = document.getElementById('music');
      audio.play();
      audio.volume=0.1;
      console.log(this.$route.query);
      this.pic = this.$axios.defaults.baseURL2;
      this.unit = this.$route.query.unit;
      this.unitsId = this.$route.query.unitsId;
      this.levelsId = this.$route.query.levelsId;
      this.courseId = this.$route.query.courseId;
      this.cources = this.$route.query.cources;
      this.level = this.$route.query.level;
      this.part = this.$route.query.part;
      this.style = this.$route.query.style; //接受参数关键代码
      this.firstName = localStorage.getItem('firstName');
      this.gameImage = localStorage.getItem('gameImage');
      this.sum = localStorage.getItem('sumCoins');
      this.studentId = localStorage.getItem('studentId');
      this.createdpop();
      // this.url1 = this.url + "course";
      // this.$axios.post(this.url1, qs.stringify({
      //   studentId: localStorage.getItem('studentId')
      // })).then(res => {
      //   this.courseList = res.data.courseList;
      //   for (var i = 0; i < this.courseList.length; i++) {
      //     this.courseList[i].bg = this.pic + this.courseList[i].bg
      //   }
      //
      //
      // }, res => {
      //   alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      // })
    }
  };
</script>

<style scoped lang="less">

  .body {
    padding: 0;
  }

  .flashcard {
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
    width: 6%;
    position: fixed;
    left: 5%;
    top: 15px;
    z-index: 1;
  }

  .toptitle {
    width: 25%;
    top: 15px;
    left: 37.5%;
    position: fixed;
  }

  .cardleft {
    width: 15%;
    left: 0;
    height: 90%;
    position: absolute;
  }
  .cardleft2 {
    width: 15%;
    left: 0;
    height: 100%;
    position: absolute;
  }

  .cardlist {
    width: 80%;
    height: 90%;
    left: 10%;
    position: absolute;
  }

  .jump{
    color: white;
    font-size: 30px;
    font-family: kg;
    display: inline-block;
    padding: 10px 40px;
    background-color: #43BE76;
    border-radius: 30px;
    margin-top: 10px;
  }

  @media only screen and (min-device-width : 768px) and (max-device-width : 1366px)  and (orientation : landscape) {
    .cardlist {
      width: 80%;
      height: 90%;
      left: 10%;
      top: 10%;
      position: absolute;
    }

  }


  @media only screen and (min-device-width : 812px) and (max-device-height : 375px)  and (orientation : landscape) {
    .cardlist {
      width: 80%;
      height: 90%;
      left: 10%;
      top: -5%;
      position: absolute;
    }

    .jump{
    color: white;
    font-size: 25px;
    font-family: kg;
    display: inline-block;
    padding: 5px 35px;
    background-color: #43BE76;
    border-radius: 30px;
    margin-top: -5px;
    }
  }
  .cardright {
    width: 15%;
    right: 0;
    height: 90%;
    position: absolute;
  }
  .cardright2 {
    width: 15%;
    right: 0;
    top: 0;
    height: 100%;
    position: absolute;
  }

  .list {
    width: 15%;
    position: relative;
    display: inline-block;
    //top: 25%;
  }

  .card-img1 {
    width: 100%;
    position: absolute;
  }



  .card-img2 {
    width: 100%;
    /*position: absolute;*/
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

  .sizeselect {
    width: 90%;
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

  .popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.3);
  }

  .withcolor {
    width: 70%;
    text-align: center;
    margin: 0 auto;
    top: 8%;
    background-color: #ffffcc;
    height: 60%;
    border: 20px solid #0066cc;
    border-radius: 50px;
    position: relative;
  }

  .close {
    width: 50px;
    height: 50px;
    float: right;
    margin: -20px;
    border-radius: 50px;
    text-align: center;
  }

  .close img {
    height: 50px;
    width: 50px;
    margin: 0 auto;
  }
  .animapng1 {
    height: 100%;
    width: 30%;
    left: 12%;
    position: absolute;
    background: none;
    border: none;
    text-align: center;
  }

  .animapng7 {
    height: 90%;
    width: 40%;
    top: 10%;
    left: 45%;
    color: #663300;
    font-size: 2rem;
    font-family: pepper;
    position: absolute;
    background: none;
    border: none;
    text-align: center;
  }
  .pstyle{
    width: 50%;
    color: #663300;
    font-family: pepper;
    position: absolute;
    text-align: right;
    right: 10%;
    top: 2%;
  }

  .imgpart {
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }
  .imgpart1{
    height: auto;
    width: auto;
    max-height: 30%;
    margin-top: 16px;
    max-width: 100%;
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


  @media screen and (min-width: 812px) and (max-width:895px) {
    .animapng7 {
      font-size: 3rem;
    }
  }
  @media screen and (min-width: 896px) and (max-width:1023px) {
    .animapng7 {
      font-size: 3rem;
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


    .close {
      width: 60px;
      height: 60px;
      margin: -25px;
    }

    .close img {
      height: 60px;
      width: 60px;
    }
    .animapng7 {
      font-size: 3rem;
    }
    .pstyle{
      font-size: 2rem;
    }
    .backbutton{
      top: 5%;
      left: 5%;
    }
    .toptitle{
      top: 5%;
    }
    .list{
      top: 0%;
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


    .close {
      width: 60px;
      height: 60px;
      margin: -25px;
    }

    .close img {
      height: 60px;
      width: 60px;
    }
    .animapng7 {
      font-size: 4rem;
    }
    .pstyle{
      font-size: 2rem;
    }
    .backbutton{
      top: 5%;
      left: 5%;
    }
    .toptitle{
      top: 5%;
    }
    .list{
      top: 0%;
    }
  }

  @media screen and (min-width: 823px) and (max-width: 824px) {
    .cardlist{
      top:0%;
    }
    .jump{
      margin-top: 5px;
      padding: 5px 20px;
    }
  }

  @media screen and (min-width: 1600px) {

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

    .close {
      width: 80px;
      height: 80px;
      margin: -35px;
    }

    .close img {
      height: 80px;
      width: 80px;
    }
    .animapng7 {
      font-size: 6rem;
    }
    .pstyle{
      font-size:3rem;
    }
    .backbutton{
      top: 5%;
      left: 5%;
    }
    .toptitle{
      top: 5%;
    }
  }

  @media only screen and (min-device-width: 812px) and (max-device-width: 1023px) and (-webkit-device-pixel-ratio: 3){
    .cardlist[data-v-52d5b23f] {
      top: 50% !important;
      transform: translateY(-48%) !important;
      position: absolute;
    }
    .toptitle{
      top :10px !important;
    }
    .jump[data-v-52d5b23f] {
      font-size: 25px !important;
      padding: 5px 20px !important;
      border-radius: 25px !important;
      margin-top: -3px !important;
    }
  }

</style>
