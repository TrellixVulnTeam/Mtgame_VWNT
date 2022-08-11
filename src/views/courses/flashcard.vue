<template>
  <div class="flashcard">
    <div class="contain" id="container">
      <img src="../../assets/image/main_bg.png"
           style="width: 100%; height: 100%;z-index: -1;display:block;position: absolute;">

      <transition name="fade1">
        <div style="width: 100%;height: 100%;">
          <img src="../../assets/image/picture.png" class="backbutton" @click="$tips(true);gocard()" v-if="this.unit!=='Our World'&&this.unit!=='My Home'&&this.unit!=='Fun Time!'&&this.unit!=='My Community'"/>
          <img :src="title" class="toptitle">
          <div>
            <div class="cardleft">
              <img src="../../assets/image/cardleft1.png" @click="$tips(true);turncard('left')" style="width: 40%;top: 40%;position: relative;">
            </div>

            <div class="cardlist">
              <div class="eightCard">
                <div class="list" v-for="li in list" :key="li.id" @click="$tips(true);startpop(li)" >
                  <img :src=li.img class="card-img1">
                  <img src="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/front.png" class="card-img2">
                </div>
              </div>
                  <h2 @click="$tips(true);jump()" class="jump">Games</h2>
            </div>

            <div class="cardright">
              <img src="../../assets/image/cardright1.png" @click="$tips(true);turncard('right')" style="width: 40%;top: 40%;position: relative;">
            </div>

          </div>
        </div>
      </transition>


      <div class="settinglist">
        <img src="../../assets/image/walker_bar.png" style="width: 100%;bottom: 0;height: 100%;">

        <div>
          <img :src=gameImage class="acstyle" @click="$tips(true);goinfo()"/>
          <span class="fontsize leftmar">{{firstName}}</span>
        </div>
        <div>
          <img src="../../assets/image/icon_coin.png" class="coinstyle">
          <span class="fontsize leftmar2">{{sum}}</span>
        </div>
        <div @click="$tips(true);back()">

          <img src="../../assets/image/Icon_back.png" class="pause">
        </div>
        <div @click="$tips(true);home()">

          <img src="../../assets/image/Icon_home.png" class="repeat">
        </div>
      </div>
      <div class='popContainer' v-if="popp">
        <div class="withcolor">
          <div class="close" @click="$tips(true);pop()">
            <img src="../../assets/image/cloce2.png" style="z-index: 1;position: relative;">
          </div>
          <div class="cardleft2">
            <img src="../../assets/image/cardleft.png" @click="$tips(true);turnpop('left')" style="width: 40%;top: 40%;position: relative;">
          </div>
          <p class="pstyle">{{ flashCardId }}/{{ flashCardCount }}</p>
          <button class="animapng1">
            <img :src="flashCardUrl" class="imgpart">
          </button>
          <button class="animapng7" @click="playsound()">
            <p>
              {{flashCardName}}
            </p>
            <img src="../../assets/image/playsound.png" class="imgpart1">
          </button>
          <div class="cardright2">
            <img src="../../assets/image/cardright.png" @click="$tips(true);turnpop('right')" style="width: 40%;top: 40%;position: relative;">
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
        FairyTalesPart1:[
          {
            id:1,
            cardName:'castle',
            audio:require('../../assets/Flashcard Audio/June/Castle.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/castle-01.png')
          },{
            id:2,
            cardName:'dragon',
            audio:require('../../assets/Flashcard Audio/June/dragon.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/dragon-01.png')
          },{
            id:3,
            cardName:'horse',
            audio:require('../../assets/Flashcard Audio/June/Horse.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/horse-01.png')
          },{
            id:4,
            cardName:'king',
            audio:require('../../assets/Flashcard Audio/June/King.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/king-01.png')
          },{
            id:5,
            cardName:'knight',
            audio:require('../../assets/Flashcard Audio/June/knight.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/knight-01.png')
          },{
            id:6,
            cardName:'princess',
            audio:require('../../assets/Flashcard Audio/June/princess.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/princess-01.png')
          },{
            id:7,
            cardName:'queen',
            audio:require('../../assets/Flashcard Audio/June/Queen.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/queen-01.png')
          },{
            id:8,
            cardName:'roar',
            audio:require('../../assets/Flashcard Audio/June/roar.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/roar-01.png')
          },{
            id:9,
            cardName:'scream',
            audio:require('../../assets/Flashcard Audio/June/scream.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/scream-01.png')
          },{
            id:10,
            cardName:'shield',
            audio:require('../../assets/Flashcard Audio/June/Shield.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/shield-01.png')
          },{
            id:11,
            cardName:'sword',
            audio:require('../../assets/Flashcard Audio/June/sword.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/sword-01.png')
          },{
            id:12,
            cardName:'tower',
            audio:require('../../assets/Flashcard Audio/June/tower.mp3'),
            img:require('../../assets/image/Fairy Tales_In_the_castle_MT/tower-01.png')
          }
        ],
        FairyTalesPart2 :[
          {
            id:1,
            cardName:'elf',
            audio:require('../../assets/Flashcard Audio/June/elf.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/elf-01.png')
          },{
            id:2,
            cardName:'fairy',
            audio:require('../../assets/Flashcard Audio/June/fairy.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/fairy-01.png')
          },{
            id:3,
            cardName:'forest',
            audio:require('../../assets/Flashcard Audio/June/forest.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/forest-01.png')
          },{
            id:4,
            cardName:'giant',
            audio:require('../../assets/Flashcard Audio/June/giant.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/giant-01.png')
          },{
            id:5,
            cardName:'laugh',
            audio:require('../../assets/Flashcard Audio/June/Laugh.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/laugh-01.png')
          },{
            id:6,
            cardName:'mermaid',
            audio:require('../../assets/Flashcard Audio/June/mermaid.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/mermaid-01.png')
          },{
            id:7,
            cardName:'unicorn',
            audio:require('../../assets/Flashcard Audio/June/unicorn.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/unicorn-01.png')
          },{
            id:8,
            cardName:'wand',
            audio:require('../../assets/Flashcard Audio/June/Wand.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/wand-01.png')
          },{
            id:9,
            cardName:'wave',
            audio:require('../../assets/Flashcard Audio/June/Wave.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/wave-01.png')
          },{
            id:10,
            cardName:'wings',
            audio:require('../../assets/Flashcard Audio/June/Wings.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/wings-01.png')
          },{
            id:11,
            cardName:'witch',
            audio:require('../../assets/Flashcard Audio/June/Witch.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/witch-01.png')
          },{
            id:12,
            cardName:'wizard',
            audio:require('../../assets/Flashcard Audio/June/Wizard.mp3'),
            img:require('../../assets/image/Fairy Tales_enchanted_forest_MT/wizard-01.png')
          }
        ],
        ExplorationPart1:[
          {
            id:1,
            cardName:'cactus',
            audio:require('../../assets/Flashcard Audio/July/cactus.mp3'),
            img:require('../../assets/image/desert/cactus.png')
          },{
            id:2,
            cardName:'camel',
            audio:require('../../assets/Flashcard Audio/July/Camel.mp3'),
            img:require('../../assets/image/desert/camel.png')
          },{
            id:3,
            cardName:'dunes',
            audio:require('../../assets/Flashcard Audio/July/dunes.mp3'),
            img:require('../../assets/image/desert/dunes.png')
          },{
            id:4,
            cardName:'hot',
            audio:require('../../assets/Flashcard Audio/July/Hot.mp3'),
            img:require('../../assets/image/desert/hot.png')
          },{
            id:5,
            cardName:'lizard',
            audio:require('../../assets/Flashcard Audio/July/lizard.mp3'),
            img:require('../../assets/image/desert/lizard.png')
          },{
            id:6,
            cardName:'map',
            audio:require('../../assets/Flashcard Audio/July/Map.mp3'),
            img:require('../../assets/image/desert/map.png')
          },{
            id:7,
            cardName:'sand',
            audio:require('../../assets/Flashcard Audio/July/Sand.mp3'),
            img:require('../../assets/image/desert/sand.png')
          },{
            id:8,
            cardName:'water',
            audio:require('../../assets/Flashcard Audio/July/water.mp3'),
            img:require('../../assets/image/desert/water.png')
          },{
            id:9,
            cardName:'compass',
            audio:require('../../assets/Flashcard Audio/July/compass.mp3'),
            img:require('../../assets/image/desert/compass.png')
          },{
            id:10,
            cardName:'lost',
            audio:require('../../assets/Flashcard Audio/July/lost.mp3'),
            img:require('../../assets/image/desert/lost.png')
          },{
            id:11,
            cardName:'sandstorm',
            audio:require('../../assets/Flashcard Audio/July/sandstorm.mp3'),
            img:require('../../assets/image/desert/shovel.png')
          },{
            id:12,
            cardName:'thirsty',
            audio:require('../../assets/Flashcard Audio/July/thirsty.mp3'),
            img:require('../../assets/image/desert/thirsty.png')
          }
        ],
        ExplorationPart2:[
          {
            id:1,
            cardName:'blizzard',
            audio:require('../../assets/Flashcard Audio/July/blizzard.mp3'),
            img:require('../../assets/image/arctic/blizzard.png')
          },{
            id:2,
            cardName:'cold',
            audio:require('../../assets/Flashcard Audio/July/cold.mp3'),
            img:require('../../assets/image/arctic/cold.png')
          },{
            id:3,
            cardName:'ice berg',
            audio:require('../../assets/Flashcard Audio/July/iceberg.mp3'),
            img:require('../../assets/image/arctic/ice_berg.png')
          },{
            id:4,
            cardName:'ice',
            audio:require('../../assets/Flashcard Audio/July/ice.mp3'),
            img:require('../../assets/image/arctic/ice.png')
          },{
            id:5,
            cardName:'igloo',
            audio:require('../../assets/Flashcard Audio/July/igloo.mp3'),
            img:require('../../assets/image/arctic/igloo.png')
          },{
            id:6,
            cardName:'orca',
            audio:require('../../assets/Flashcard Audio/July/orca.mp3'),
            img:require('../../assets/image/arctic/orca.png')
          },{
            id:7,
            cardName:'polar bear',
            audio:require('../../assets/Flashcard Audio/July/polar bear.mp3'),
            img:require('../../assets/image/arctic/polar_bear.png')
          },{
            id:8,
            cardName:'seal',
            audio:require('../../assets/Flashcard Audio/July/seal.mp3'),
            img:require('../../assets/image/arctic/seal.png')
          },{
            id:9,
            cardName:'sled',
            audio:require('../../assets/Flashcard Audio/July/sled.mp3'),
            img:require('../../assets/image/arctic/sled.png')
          },{
            id:10,
            cardName:'snow',
            audio:require('../../assets/Flashcard Audio/July/snow.mp3'),
            img:require('../../assets/image/arctic/snow.png')
          },{
            id:11,
            cardName:'tusk',
            audio:require('../../assets/Flashcard Audio/July/tusk.mp3'),
            img:require('../../assets/image/arctic/tusk.png')
          },{
            id:12,
            cardName:'walrus',
            audio:require('../../assets/Flashcard Audio/July/Walrus.mp3'),
            img:require('../../assets/image/arctic/walrus.png')
          }
        ],
        SummerFunPart1:[
          {
            id:1,
            cardName:'blow',
            audio:require('../../assets/Flashcard Audio/august/blow.mp3'),
            img:require('../../assets/image/InTheSea/blow.png')
          },{
            id:2,
            cardName:'life jacket',
            audio:require('../../assets/Flashcard Audio/august/life jacket.mp3'),
            img:require('../../assets/image/InTheSea/life jacket.png')
          },{
            id:3,
            cardName:'sail',
            audio:require('../../assets/Flashcard Audio/august/sail.mp3'),
            img:require('../../assets/image/InTheSea/sail.png')
          },{
            id:4,
            cardName:'sailboat',
            audio:require('../../assets/Flashcard Audio/august/sailboat.mp3'),
            img:require('../../assets/image/InTheSea/sailboat.png')
          },{
            id:5,
            cardName:'surf',
            audio:require('../../assets/Flashcard Audio/august/Surf.mp3'),
            img:require('../../assets/image/InTheSea/surf.png')
          },{
            id:6,
            cardName:'surfboard',
            audio:require('../../assets/Flashcard Audio/august/sailboat.mp3'),
            img:require('../../assets/image/InTheSea/surfboard.png')
          },{
            id:7,
            cardName:'waves',
            audio:require('../../assets/Flashcard Audio/august/waves.mp3'),
            img:require('../../assets/image/InTheSea/waves.png')
          },{
            id:8,
            cardName:'wind',
            audio:require('../../assets/Flashcard Audio/august/wind.mp3'),
            img:require('../../assets/image/InTheSea/wind.png')
          },{
            id:9,
            cardName:'dive',
            audio:require('../../assets/Flashcard Audio/august/Dive.mp3'),
            img:require('../../assets/image/InTheSea/dive.png')
          },{
            id:10,
            cardName:'flippers',
            audio:require('../../assets/Flashcard Audio/august/flippers.mp3'),
            img:require('../../assets/image/InTheSea/flippers.png')
          },{
            id:11,
            cardName:'tank',
            audio:require('../../assets/Flashcard Audio/august/Tank.mp3'),
            img:require('../../assets/image/InTheSea/tank.png')
          },{
            id:12,
            cardName:'mask',
            audio:require('../../assets/Flashcard Audio/august/Mask.mp3'),
            img:require('../../assets/image/InTheSea/mask.png')
          }
        ],
        SummerFunPart2:[
          {
            id:1,
            cardName:'acrobat',
            audio:require('../../assets/Flashcard Audio/august/Acrobat.mp3'),
            img:require('../../assets/image/AtTheCircus/acrobat.png')
          },{
            id:2,
            cardName:'clown',
            audio:require('../../assets/Flashcard Audio/august/clown.mp3'),
            img:require('../../assets/image/AtTheCircus/clown.png')
          },{
            id:3,
            cardName:'crowd',
            audio:require('../../assets/Flashcard Audio/august/crowd.mp3'),
            img:require('../../assets/image/AtTheCircus/crowd.png')
          },{
            id:4,
            cardName:'juggle',
            audio:require('../../assets/Flashcard Audio/august/Juggle.mp3'),
            img:require('../../assets/image/AtTheCircus/juggle.png')
          },{
            id:5,
            cardName:'net',
            audio:require('../../assets/Flashcard Audio/august/Net.mp3'),
            img:require('../../assets/image/AtTheCircus/net.png')
          },{
            id:6,
            cardName:'tent',
            audio:require('../../assets/Flashcard Audio/august/tent.mp3'),
            img:require('../../assets/image/AtTheCircus/tent.png')
          },{
            id:7,
            cardName:'unicycle',
            audio:require('../../assets/Flashcard Audio/august/unicycle.mp3'),
            img:require('../../assets/image/AtTheCircus/unicycle.png')
          },{
            id:8,
            cardName:'watch',
            audio:require('../../assets/Flashcard Audio/august/watch.mp3'),
            img:require('../../assets/image/AtTheCircus/watch.png')
          },{
            id:9,
            cardName:'cheer',
            audio:require('../../assets/Flashcard Audio/august/cheer.mp3'),
            img:require('../../assets/image/AtTheCircus/cheer.png')
          },{
            id:10,
            cardName:'magician',
            audio:require('../../assets/Flashcard Audio/august/magician.mp3'),
            img:require('../../assets/image/AtTheCircus/magician.png')
          },{
            id:11,
            cardName:'tightrope',
            audio:require('../../assets/Flashcard Audio/august/tightrope.mp3'),
            img:require('../../assets/image/AtTheCircus/tightrope.png')
          },{
            id:12,
            cardName:'trick',
            audio:require('../../assets/Flashcard Audio/august/trick.mp3'),
            img:require('../../assets/image/AtTheCircus/trick.png')
          }
        ],
        SchoolTimePart1:[
          {
            id:1,
            cardName:'desk',
            audio:require('../../assets/Flashcard Audio/september/Desk.mp3'),
            img:require('../../assets/image/Classroom/Desk.png')
          },{
            id:2,
            cardName:'chair',
            audio:require('../../assets/Flashcard Audio/september/chair.mp3'),
            img:require('../../assets/image/Classroom/Chair.png')
          },{
            id:3,
            cardName:'backpack',
            audio:require('../../assets/Flashcard Audio/september/Backpack.mp3'),
            img:require('../../assets/image/Classroom/Backpack.png')
          },{
            id:4,
            cardName:'eraser',
            audio:require('../../assets/Flashcard Audio/september/eraser.mp3'),
            img:require('../../assets/image/Classroom/Eraser.png')
          },{
            id:5,
            cardName:'pencil',
            audio:require('../../assets/Flashcard Audio/september/Pencil.mp3'),
            img:require('../../assets/image/Classroom/Pencil.png')
          },{
            id:6,
            cardName:'sit',
            audio:require('../../assets/Flashcard Audio/september/sit.mp3'),
            img:require('../../assets/image/Classroom/Sit.png')
          },{
            id:7,
            cardName:'teacher',
            audio:require('../../assets/Flashcard Audio/september/teacher.mp3'),
            img:require('../../assets/image/Classroom/Teacher.png')
          },{
            id:8,
            cardName:'write',
            audio:require('../../assets/Flashcard Audio/september/write.mp3'),
            img:require('../../assets/image/Classroom/Write.png')
          },{
            id:9,
            cardName:'board',
            audio:require('../../assets/Flashcard Audio/september/board.mp3'),
            img:require('../../assets/image/Classroom/Board.png')
          },{
            id:10,
            cardName:'clock',
            audio:require('../../assets/Flashcard Audio/september/Clock.mp3'),
            img:require('../../assets/image/Classroom/Clock.png')
          },{
            id:11,
            cardName:'crayons',
            audio:require('../../assets/Flashcard Audio/september/crayons.mp3'),
            img:require('../../assets/image/Classroom/Crayons.png')
          },{
            id:12,
            cardName:'listen',
            audio:require('../../assets/Flashcard Audio/september/listen.mp3'),
            img:require('../../assets/image/Classroom/listen.png')
          }
        ],
        SchoolTimePart2:[
          {
            id:1,
            cardName:'kick',
            audio:require('../../assets/Flashcard Audio/september/Kick.mp3'),
            img:require('../../assets/image/SchoolTime/Kick.png')
          },{
            id:2,
            cardName:'ball',
            audio:require('../../assets/Flashcard Audio/september/ball.mp3'),
            img:require('../../assets/image/SchoolTime/Ball.png')
          },{
            id:3,
            cardName:'snack',
            audio:require('../../assets/Flashcard Audio/september/Snack.mp3'),
            img:require('../../assets/image/SchoolTime/Snack.png')
          },{
            id:4,
            cardName:'swing',
            audio:require('../../assets/Flashcard Audio/september/swing.mp3'),
            img:require('../../assets/image/SchoolTime/Swing.png')
          },{
            id:5,
            cardName:'run',
            audio:require('../../assets/Flashcard Audio/september/run.mp3'),
            img:require('../../assets/image/SchoolTime/Run.png')
          },{
            id:6,
            cardName:'slide',
            audio:require('../../assets/Flashcard Audio/september/slide.mp3'),
            img:require('../../assets/image/SchoolTime/Slide.png')
          },{
            id:7,
            cardName:'playground',
            audio:require('../../assets/Flashcard Audio/september/playground.mp3'),
            img:require('../../assets/image/SchoolTime/Playground.png')
          },{
            id:8,
            cardName:'climb',
            audio:require('../../assets/Flashcard Audio/september/climb.mp3'),
            img:require('../../assets/image/SchoolTime/Climb.png')
          },{
            id:9,
            cardName:'toys',
            audio:require('../../assets/Flashcard Audio/september/Toys.mp3'),
            img:require('../../assets/image/SchoolTime/Toys.png')
          },{
            id:10,
            cardName:'ring',
            audio:require('../../assets/Flashcard Audio/september/Ring.mp3'),
            img:require('../../assets/image/SchoolTime/Ring.png')
          },{
            id:11,
            cardName:'seesaw',
            audio:require('../../assets/Flashcard Audio/september/seesaw.mp3'),
            img:require('../../assets/image/SchoolTime/Seesaw.png')
          },{
            id:12,
            cardName:'bell',
            audio:require('../../assets/Flashcard Audio/september/Bell.mp3'),
            img:require('../../assets/image/SchoolTime/bell.png')
          }
        ],
        AnimalsPart1:[
          {
            id:1,
            cardName:'dog',
            audio:require('../../assets/Flashcard Audio/october/Dog.mp3'),
            img:require('../../assets/image/Pets/Puppy.png')
          },{
            id:2,
            cardName:'cat',
            audio:require('../../assets/Flashcard Audio/october/Cat.mp3'),
            img:require('../../assets/image/Pets/Kitten.png')
          },{
            id:3,
            cardName:'brush',
            audio:require('../../assets/Flashcard Audio/october/brush.mp3'),
            img:require('../../assets/image/Pets/Brush.png')
          },{
            id:4,
            cardName:'feed',
            audio:require('../../assets/Flashcard Audio/october/feed.mp3'),
            img:require('../../assets/image/Pets/Feed.png')
          },{
            id:5,
            cardName:'cage',
            audio:require('../../assets/Flashcard Audio/october/Cage.mp3'),
            img:require('../../assets/image/Pets/Cage.png')
          },{
            id:6,
            cardName:'tank',
            audio:require('../../assets/Flashcard Audio/october/Tank.mp3'),
            img:require('../../assets/image/Pets/Tank.png')
          },{
            id:7,
            cardName:'bird',
            audio:require('../../assets/Flashcard Audio/october/bird.mp3'),
            img:require('../../assets/image/Pets/Bird.png')
          },{
            id:8,
            cardName:'fish',
            audio:require('../../assets/Flashcard Audio/october/Fish.mp3'),
            img:require('../../assets/image/Pets/Fish.png')
          },{
            id:1,
            cardName:'small',
            audio:require('../../assets/Flashcard Audio/october/small.mp3'),
            img:require('../../assets/image/Pets/Small.png')
          },{
            id:2,
            cardName:'big',
            audio:require('../../assets/Flashcard Audio/october/Big.mp3'),
            img:require('../../assets/image/Pets/Big.png')
          },{
            id:3,
            cardName:'puppy',
            audio:require('../../assets/Flashcard Audio/october/Puppy.mp3'),
            img:require('../../assets/image/Pets/Puppy.png')
          },{
            id:4,
            cardName:'brush',
            audio:require('../../assets/Flashcard Audio/october/brush.mp3'),
            img:require('../../assets/image/Pets/Brush.png')
          },{
            id:5,
            cardName:'feed',
            audio:require('../../assets/Flashcard Audio/october/feed.mp3'),
            img:require('../../assets/image/Pets/Feed.png')
          },{
            id:6,
            cardName:'cage',
            audio:require('../../assets/Flashcard Audio/october/Cage.mp3'),
            img:require('../../assets/image/Pets/Cage.png')
          },{
            id:7,
            cardName:'tank',
            audio:require('../../assets/Flashcard Audio/october/Tank.mp3'),
            img:require('../../assets/image/Pets/Tank.png')
          },{
            id:8,
            cardName:'kitten',
            audio:require('../../assets/Flashcard Audio/october/Kitten.mp3'),
            img:require('../../assets/image/Pets/Kitten.png')
          },{
            id:9,
            cardName:'parrot',
            audio:require('../../assets/Flashcard Audio/october/parrot.mp3'),
            img:require('../../assets/image/Pets/Parrot.png')
          },{
            id:10,
            cardName:'turtle',
            audio:require('../../assets/Flashcard Audio/october/turtle.mp3'),
            img:require('../../assets/image/Pets/Turtle.png')
          },{
            id:11,
            cardName:'hamster',
            audio:require('../../assets/Flashcard Audio/october/Hamster.mp3'),
            img:require('../../assets/image/Pets/Hamster.png')
          },{
            id:12,
            cardName:'goldfish',
            audio:require('../../assets/Flashcard Audio/october/Goldfish.mp3'),
            img:require('../../assets/image/Pets/Goldfish.png')
          }
        ],
        AnimalsPart2:[
          {
            id:1,
            cardName:'tall',
            audio:require('../../assets/Flashcard Audio/october/Tall.mp3'),
            img:require('../../assets/image/Zoo/Tall.png')
          },{
            id:2,
            cardName:'short',
            audio:require('../../assets/Flashcard Audio/october/short.mp3'),
            img:require('../../assets/image/Zoo/Short.png')
          },{
            id:3,
            cardName:'monkey',
            audio:require('../../assets/Flashcard Audio/october/Monkey.mp3'),
            img:require('../../assets/image/Zoo/Monkey.png')
          },{
            id:4,
            cardName:'giraffe',
            audio:require('../../assets/Flashcard Audio/october/giraffe.mp3'),
            img:require('../../assets/image/Zoo/Giraffe.png')
          },{
            id:5,
            cardName:'lion',
            audio:require('../../assets/Flashcard Audio/october/Lion.mp3'),
            img:require('../../assets/image/Zoo/Lion.png')
          },{
            id:6,
            cardName:'tiger',
            audio:require('../../assets/Flashcard Audio/october/Tiger.mp3'),
            img:require('../../assets/image/Zoo/Tiger.png')
          },{
            id:7,
            cardName:'elephant',
            audio:require('../../assets/Flashcard Audio/october/Elephant.mp3'),
            img:require('../../assets/image/Zoo/Elephant.png')
          },{
            id:8,
            cardName:'hippo',
            audio:require('../../assets/Flashcard Audio/october/Hippo.mp3'),
            img:require('../../assets/image/Zoo/Hippo.png')
          },{
            id:1,
            cardName:'penguin',
            audio:require('../../assets/Flashcard Audio/october/Penguin.mp3'),
            img:require('../../assets/image/Zoo/Penguin.png')
          },{
            id:2,
            cardName:'zookeeper',
            audio:require('../../assets/Flashcard Audio/october/zookeeper.mp3'),
            img:require('../../assets/image/Zoo/Zookeeper.png')
          },{
            id:3,
            cardName:'roar',
            audio:require('../../assets/Flashcard Audio/october/roar.mp3'),
            img:require('../../assets/image/Zoo/Roar.png')
          },{
            id:4,
            cardName:'tiger',
            audio:require('../../assets/Flashcard Audio/october/Tiger.mp3'),
            img:require('../../assets/image/Zoo/Tiger.png')
          },{
            id:5,
            cardName:'sleep',
            audio:require('../../assets/Flashcard Audio/october/Sleep.mp3'),
            img:require('../../assets/image/Zoo/Sleep.png')
          },{
            id:6,
            cardName:'panda',
            audio:require('../../assets/Flashcard Audio/october/Panda.mp3'),
            img:require('../../assets/image/Zoo/Panda.png')
          },{
            id:7,
            cardName:'lizard',
            audio:require('../../assets/Flashcard Audio/october/lizard.mp3'),
            img:require('../../assets/image/Zoo/Lizard.png')
          },{
            id:8,
            cardName:'gorilla',
            audio:require('../../assets/Flashcard Audio/october/Gorilla.mp3'),
            img:require('../../assets/image/Zoo/Gorilla.png')
          },{
            id:9,
            cardName:'hippo',
            audio:require('../../assets/Flashcard Audio/october/Hippo.mp3'),
            img:require('../../assets/image/Zoo/Hippo.png')
          },{
            id:10,
            cardName:'crocodile',
            audio:require('../../assets/Flashcard Audio/october/crocodile.mp3'),
            img:require('../../assets/image/Zoo/Crocodile.png')
          },{
            id:11,
            cardName:'snake',
            audio:require('../../assets/Flashcard Audio/october/Snake.mp3'),
            img:require('../../assets/image/Zoo/Snake.png')
          }
          ,{
            id:12,
            cardName:'splash',
            audio:require('../../assets/Flashcard Audio/october/splash.mp3'),
            img:require('../../assets/image/Zoo/Splash.png')
          }
        ],
        FamilyTimePart1:[
          {
            id:1,
            cardName:'young',
            audio:require('../../assets/Flashcard Audio/november/Young.mp3'),
            img:require('../../assets/image/Family/Young.png')
          },{
            id:2,
            cardName:'old',
            audio:require('../../assets/Flashcard Audio/november/old.mp3'),
            img:require('../../assets/image/Family/Old.png')
          },{
            id:3,
            cardName:'sister',
            audio:require('../../assets/Flashcard Audio/november/sister.mp3'),
            img:require('../../assets/image/Family/Sister.png')
          },{
            id:4,
            cardName:'brother',
            audio:require('../../assets/Flashcard Audio/november/brother.mp3'),
            img:require('../../assets/image/Family/Brother.png')
          },{
            id:5,
            cardName:'mother',
            audio:require('../../assets/Flashcard Audio/november/Mother.mp3'),
            img:require('../../assets/image/Family/Mother.png')
          },{
            id:6,
            cardName:'father',
            audio:require('../../assets/Flashcard Audio/november/Father.mp3'),
            img:require('../../assets/image/Family/Father.png')
          },{
            id:7,
            cardName:'grandma',
            audio:require('../../assets/Flashcard Audio/november/grandma.mp3'),
            img:require('../../assets/image/Family/Grandma.png')
          },{
            id:8,
            cardName:'grandpa',
            audio:require('../../assets/Flashcard Audio/november/grandpa.mp3'),
            img:require('../../assets/image/Family/Grandpa.png')
          },{
            id:9,
            cardName:'caring',
            audio:require('../../assets/Flashcard Audio/november/caring.mp3'),
            img:require('../../assets/image/Family/Caring.png')
          },{
            id:10,
            cardName:'share',
            audio:require('../../assets/Flashcard Audio/november/share.mp3'),
            img:require('../../assets/image/Family/Share.png')
          },{
            id:11,
            cardName:'hug',
            audio:require('../../assets/Flashcard Audio/november/Hug.mp3'),
            img:require('../../assets/image/Family/Hug.png')
          },{
            id:12,
            cardName:'baby',
            audio:require('../../assets/Flashcard Audio/november/Baby.mp3'),
            img:require('../../assets/image/Family/Baby.png')
          }
        ],
        FamilyTimePart2:[
          {
            id:1,
            cardName:'balloons',
            audio:require('../../assets/Flashcard Audio/november/Balloons.mp3'),
            img:require('../../assets/image/Happybirthday/Balloons.png')
          },{
            id:2,
            cardName:'blow',
            audio:require('../../assets/Flashcard Audio/november/blow.mp3'),
            img:require('../../assets/image/Happybirthday/Blow.png')
          },{
            id:3,
            cardName:'cake',
            audio:require('../../assets/Flashcard Audio/november/Cake.mp3'),
            img:require('../../assets/image/Happybirthday/Cake.png')
          },{
            id:4,
            cardName:'candles',
            audio:require('../../assets/Flashcard Audio/november/Candles.mp3'),
            img:require('../../assets/image/Happybirthday/Candles.png')
          },{
            id:5,
            cardName:'sing',
            audio:require('../../assets/Flashcard Audio/november/Sing.mp3'),
            img:require('../../assets/image/Happybirthday/Sing.png')
          },{
            id:6,
            cardName:'cut',
            audio:require('../../assets/Flashcard Audio/november/Cut.mp3'),
            img:require('../../assets/image/Happybirthday/Cut.png')
          },{
            id:7,
            cardName:'party hat',
            audio:require('../../assets/Flashcard Audio/november/party hat.mp3'),
            img:require('../../assets/image/Happybirthday/Party Hat.png')
          },{
            id:8,
            cardName:'presents',
            audio:require('../../assets/Flashcard Audio/november/presents.mp3'),
            img:require('../../assets/image/Happybirthday/Presents.png')
          },{
            id:9,
            cardName:'happy',
            audio:require('../../assets/Flashcard Audio/november/Happy.mp3'),
            img:require('../../assets/image/Happybirthday/Happy.png')
          },{
            id:10,
            cardName:'play',
            audio:require('../../assets/Flashcard Audio/november/Play.mp3'),
            img:require('../../assets/image/Happybirthday/Play.png')
          },{
            id:11,
            cardName:'card',
            audio:require('../../assets/Flashcard Audio/november/card.mp3'),
            img:require('../../assets/image/Happybirthday/Card.png')
          },{
            id:12,
            cardName:'friends',
            audio:require('../../assets/Flashcard Audio/november/friends.mp3'),
            img:require('../../assets/image/Happybirthday/Friends.png')
          },
        ],
        HolidaysPart2:[
          {
            id:1,
            cardName:'stocking',
            audio:require('../../assets/Flashcard Audio/december/stocking.mp3'),
            img:require('../../assets/image/ChristmasMagic/Stocking.png')
          },{
            id:2,
            cardName:'sleigh',
            audio:require('../../assets/Flashcard Audio/december/sleigh.mp3'),
            img:require('../../assets/image/ChristmasMagic/Sleigh.png')
          },{
            id:3,
            cardName:'reindeer',
            audio:require('../../assets/Flashcard Audio/december/reindeer.mp3'),
            img:require('../../assets/image/ChristmasMagic/Reindeer.png')
          },{
            id:4,
            cardName:'bells',
            audio:require('../../assets/Flashcard Audio/december/bells.mp3'),
            img:require('../../assets/image/ChristmasMagic/Bells.png')
          },{
            id:5,
            cardName:'santa Claus',
            audio:require('../../assets/Flashcard Audio/december/Santa claus.mp3'),
            img:require('../../assets/image/ChristmasMagic/Santa Claus.png')
          },{
            id:6,
            cardName:'elf',
            audio:require('../../assets/Flashcard Audio/december/elf.mp3'),
            img:require('../../assets/image/ChristmasMagic/Elf.png')
          },{
            id:7,
            cardName:' ',
            audio:'',
            img:''
          },{
            id:8,
            cardName:' ',
            audio:'',
            img:''
          },{
            id:1,
            cardName:'stocking',
            audio:require('../../assets/Flashcard Audio/december/stocking.mp3'),
            img:require('../../assets/image/ChristmasMagic/Stocking.png')
          },{
            id:2,
            cardName:'sleigh',
            audio:require('../../assets/Flashcard Audio/december/sleigh.mp3'),
            img:require('../../assets/image/ChristmasMagic/Sleigh.png')
          },{
            id:3,
            cardName:'reindeer',
            audio:require('../../assets/Flashcard Audio/december/reindeer.mp3'),
            img:require('../../assets/image/ChristmasMagic/Reindeer.png')
          },{
            id:4,
            cardName:'bells',
            audio:require('../../assets/Flashcard Audio/december/bells.mp3'),
            img:require('../../assets/image/ChristmasMagic/Bells.png')
          },{
            id:5,
            cardName:'santa Claus',
            audio:require('../../assets/Flashcard Audio/december/Santa claus.mp3'),
            img:require('../../assets/image/ChristmasMagic/Santa Claus.png')
          },{
            id:6,
            cardName:'elf',
            audio:require('../../assets/Flashcard Audio/december/elf.mp3'),
            img:require('../../assets/image/ChristmasMagic/Elf.png')
          },{
            id:7,
            cardName:'pull',
            audio:require('../../assets/Flashcard Audio/december/Pull.mp3'),
            img:require('../../assets/image/ChristmasMagic/Pull.png')
          },{
            id:8,
            cardName:'cracker',
            audio:require('../../assets/Flashcard Audio/december/cracker.mp3'),
            img:require('../../assets/image/ChristmasMagic/Cracker.png')
          },{
            id:9,
            cardName:' ',
            audio:'',
            img:''
          },{
            id:10,
            cardName:' ',
            audio:'',
            img:''
          },{
            id:11,
            cardName:' ',
            audio:'',
            img:''
          },{
            id:12,
            cardName:' ',
            audio:'',
            img:''
          }
        ],
        HolidaysPart1:[
          {
            id:1,
            cardName:'fireplace',
            audio:require('../../assets/Flashcard Audio/december/fireplace.mp3'),
            img:require('../../assets/image/Winter/fireplace.png')
          },{
            id:2,
            cardName:'coat',
            audio:require('../../assets/Flashcard Audio/december/Coat.mp3'),
            img:require('../../assets/image/Winter/coat.png')
          },{
            id:3,
            cardName:'cold',
            audio:require('../../assets/Flashcard Audio/december/cold.mp3'),
            img:require('../../assets/image/Winter/cold.png')
          },{
            id:4,
            cardName:'skates',
            audio:require('../../assets/Flashcard Audio/december/skates.mp3'),
            img:require('../../assets/image/Winter/skates.png')
          },{
            id:5,
            cardName:'snowman',
            audio:require('../../assets/Flashcard Audio/december/snowman.mp3'),
            img:require('../../assets/image/Winter/snowman.png')
          },{
            id:6,
            cardName:'fall',
            audio:require('../../assets/Flashcard Audio/december/fall.mp3'),
            img:require('../../assets/image/Winter/fall.png')
          },{
            id:7,
            cardName:'snow',
            audio:require('../../assets/Flashcard Audio/december/snow.mp3'),
            img:require('../../assets/image/Winter/snow.png')
          },{
            id:8,
            cardName:'sled',
            audio:require('../../assets/Flashcard Audio/december/Sled.mp3'),
            img:require('../../assets/image/Winter/sled.png')
          },{
            id:9,
            cardName:'warm',
            audio:require('../../assets/Flashcard Audio/december/warm.mp3'),
            img:require('../../assets/image/Winter/warm.png')
          },{
            id:10,
            cardName:'hibernate',
            audio:require('../../assets/Flashcard Audio/december/hibernate.mp3'),
            img:require('../../assets/image/Winter/hibernate.png')
          },{
            id:11,
            cardName:'animals',
            audio:require('../../assets/Flashcard Audio/december/Animals.mp3'),
            img:require('../../assets/image/Winter/animals.png')
          },{
            id:12,
            cardName:'scarf',
            audio:require('../../assets/Flashcard Audio/december/scarf.mp3'),
            img:require('../../assets/image/Winter/scarf.png')
          },
        ],
        MealTimePart2:[
          {
            id:1,
            cardName:'napkin',
            audio:require('../../assets/Flashcard Audio/january/Napkin.mp3'),
            img:require('../../assets/image/At the Restaurant/napkin.png')
          },{
            id:2,
            cardName:'pizza',
            audio:require('../../assets/Flashcard Audio/january/Pizza.mp3'),
            img:require('../../assets/image/At the Restaurant/pizza.png')
          },{
            id:3,
            cardName:'fork',
            audio:require('../../assets/Flashcard Audio/january/Fork.mp3'),
            img:require('../../assets/image/At the Restaurant/fork.png')
          },{
            id:4,
            cardName:'knife',
            audio:require('../../assets/Flashcard Audio/january/Knife.mp3'),
            img:require('../../assets/image/At the Restaurant/knife.png')
          },{
            id:5,
            cardName:'ice cream',
            audio:require('../../assets/Flashcard Audio/january/Ice Cream.mp3'),
            img:require('../../assets/image/At the Restaurant/ice cream.png')
          },{
            id:6,
            cardName:'waiter',
            audio:require('../../assets/Flashcard Audio/january/Waiter.mp3'),
            img:require('../../assets/image/At the Restaurant/waiter.png')
          },{
            id:7,
            cardName:'menu',
            audio:require('../../assets/Flashcard Audio/january/Menu.mp3'),
            img:require('../../assets/image/At the Restaurant/menu.png')
          },{
            id:8,
            cardName:'plate',
            audio:require('../../assets/Flashcard Audio/january/Plate.mp3'),
            img:require('../../assets/image/At the Restaurant/plate.png')
          },{
            id:9,
            cardName:'order',
            audio:require('../../assets/Flashcard Audio/january/Order (runners).mp3'),
            img:require('../../assets/image/At the Restaurant/order.png')
          },{
            id:10,
            cardName:'juice',
            audio:require('../../assets/Flashcard Audio/january/Juice (runners).mp3'),
            img:require('../../assets/image/At the Restaurant/juice.png')
          },{
            id:11,
            cardName:'noodles',
            audio:require('../../assets/Flashcard Audio/january/Noodles (runners).mp3'),
            img:require('../../assets/image/At the Restaurant/noodles.png')
          },{
            id:12,
            cardName:'burger',
            audio:require('../../assets/Flashcard Audio/january/Burger (runners).mp3'),
            img:require('../../assets/image/At the Restaurant/burger.png')
          }
        ],
        MealTimePart1:[
          {
            id:1,
            cardName:'bowl',
            audio:require('../../assets/Flashcard Audio/january/Bowl.mp3'),
            img:require('../../assets/image/At Home/bowl.png')
          },{
            id:2,
            cardName:'cup',
            audio:require('../../assets/Flashcard Audio/january/Cup.mp3'),
            img:require('../../assets/image/At Home/cup.png')
          },{
            id:3,
            cardName:'fish',
            audio:require('../../assets/Flashcard Audio/january/Fish.mp3'),
            img:require('../../assets/image/At Home/fish.png')
          },{
            id:4,
            cardName:'chopsticks',
            audio:require('../../assets/Flashcard Audio/january/Chopsticks.mp3'),
            img:require('../../assets/image/At Home/chopsticks.png')
          },{
            id:5,
            cardName:'eat',
            audio:require('../../assets/Flashcard Audio/january/Eat.mp3'),
            img:require('../../assets/image/At Home/eat.png')
          },{
            id:6,
            cardName:'rice',
            audio:require('../../assets/Flashcard Audio/january/Rice.mp3'),
            img:require('../../assets/image/At Home/rice.png')
          },{
            id:7,
            cardName:'chickens',
            audio:require('../../assets/Flashcard Audio/january/Chicken.mp3'),
            img:require('../../assets/image/At Home/chicken.png')
          },{
            id:8,
            cardName:'drink',
            audio:require('../../assets/Flashcard Audio/january/Drink.mp3'),
            img:require('../../assets/image/At Home/drink.png')
          },{
            id:9,
            cardName:'milk',
            audio:require('../../assets/Flashcard Audio/january/Milk (runners).mp3'),
            img:require('../../assets/image/At Home/milk.png')
          },{
            id:10,
            cardName:'spoon',
            audio:require('../../assets/Flashcard Audio/january/Spoon (runners).mp3'),
            img:require('../../assets/image/At Home/spoon.png')
          },{
            id:11,
            cardName:'tea',
            audio:require('../../assets/Flashcard Audio/january/Tea (runners).mp3'),
            img:require('../../assets/image/At Home/tea.png')
          },{
            id:12,
            cardName:'vegetables',
            audio:require('../../assets/Flashcard Audio/january/Vegetables (runners).mp3'),
            img:require('../../assets/image/At Home/vegetables.png')
          }
        ],
        OntheFarmPart1:[
          {
            id:1,
            cardName:'barn',
            audio:require('../../assets/Flashcard Audio/february/Barn.mp3'),
            img:require('../../assets/image/In the barn/barn.png')
          },{
            id:2,
            cardName:'hay',
            audio:require('../../assets/Flashcard Audio/february/Hay.mp3'),
            img:require('../../assets/image/In the barn/hay.png')
          },{
            id:3,
            cardName:'duck',
            audio:require('../../assets/Flashcard Audio/february/Duck.mp3'),
            img:require('../../assets/image/In the barn/duck.png')
          },{
            id:4,
            cardName:'egg',
            audio:require('../../assets/Flashcard Audio/february/Egg.mp3'),
            img:require('../../assets/image/In the barn/egg.png')
          },{
            id:5,
            cardName:'hen',
            audio:require('../../assets/Flashcard Audio/february/Hen.mp3'),
            img:require('../../assets/image/In the barn/hen.png')
          },{
            id:6,
            cardName:'feed',
            audio:require('../../assets/Flashcard Audio/february/Feed.mp3'),
            img:require('../../assets/image/In the barn/feed.png')
          },{
            id:7,
            cardName:'crow',
            audio:require('../../assets/Flashcard Audio/february/Crow.mp3'),
            img:require('../../assets/image/In the barn/crow.png')
          },{
            id:8,
            cardName:'sheep',
            audio:require('../../assets/Flashcard Audio/february/Sheep.mp3'),
            img:require('../../assets/image/In the barn/sheep.png')
          },{
            id:9,
            cardName:'bucket',
            audio:require('../../assets/Flashcard Audio/february/Bucket.mp3'),
            img:require('../../assets/image/In the barn/bucket.png')
          },{
            id:10,
            cardName:'rooster',
            audio:require('../../assets/Flashcard Audio/february/Rooster.mp3'),
            img:require('../../assets/image/In the barn/rooster.png')
          },{
            id:11,
            cardName:'chick',
            audio:require('../../assets/Flashcard Audio/february/Chick.mp3'),
            img:require('../../assets/image/In the barn/chick.png')
          },{
            id:12,
            cardName:'cow',
            audio:require('../../assets/Flashcard Audio/february/Cow.mp3'),
            img:require('../../assets/image/In the barn/cow.png')
          }
        ],
        OntheFarmPart2:[
          {
            id:1,
            cardName:'tractor',
            audio:require('../../assets/Flashcard Audio/february/Tractor.mp3'),
            img:require('..'+'/../assets/image/In the field/tractor.png')
          },{
            id:2,
            cardName:'plough',
            audio:require('../../assets/Flashcard Audio/february/Plough.mp3'),
            img:require('../../assets/image/In the field/plough.png')
          },{
            id:3,
            cardName:'pig',
            audio:require('../../assets/Flashcard Audio/february/Pig.mp3'),
            img:require('../../assets/image/In the field/pig.png')
          },{
            id:4,
            cardName:'apple',
            audio:require('../../assets/Flashcard Audio/february/Apple.mp3'),
            img:require('../../assets/image/In the field/apple.png')
          },{
            id:5,
            cardName:'tree',
            audio:require('../../assets/Flashcard Audio/february/Tree.mp3'),
            img:require('../../assets/image/In the field/tree.png')
          },{
            id:6,
            cardName:'farmer',
            audio:require('../../assets/Flashcard Audio/february/Farmer.mp3'),
            img:require('../../assets/image/In the field/farmer.png')
          },{
            id:7,
            cardName:'gallop',
            audio:require('../../assets/Flashcard Audio/february/Gallop.mp3'),
            img:require('../../assets/image/In the field/gallop.png')
          },{
            id:8,
            cardName:'horse',
            audio:require('../../assets/Flashcard Audio/february/Horse.mp3'),
            img:require('../../assets/image/In the field/horse.png')
          },{
            id:9,
            cardName:'plants',
            audio:require('../../assets/Flashcard Audio/february/Plant.mp3'),
            img:require('../../assets/image/In the field/plants.png')
          },{
            id:10,
            cardName:'roll',
            audio:require('../../assets/Flashcard Audio/february/Roll.mp3'),
            img:require('../../assets/image/In the field/roll.png')
          },{
            id:11,
            cardName:'pick',
            audio:require('../../assets/Flashcard Audio/february/Pick.mp3'),
            img:require('../../assets/image/In the field/pick.png')
          },{
            id:12,
            cardName:'fence',
            audio:require('../../assets/Flashcard Audio/february/Fence.mp3'),
            img:require('../../assets/image/In the field/fence.png')
          }
        ],
        SeasonsPart1:[
          {
            id:1,
            cardName:'leaves',
            audio:require('../../assets/Flashcard Audio/march/leaves.mp3'),
            img:require('../../assets/image/Autumn and winter/Leaves.png')
          },{
            id:2,
            cardName:'rake',
            audio:require('../../assets/Flashcard Audio/march/rake.mp3'),
            img:require('../../assets/image/Autumn and winter/Rake.png')
          },{
            id:3,
            cardName:'rain',
            audio:require('../../assets/Flashcard Audio/march/rain.mp3'),
            img:require('../../assets/image/Autumn and winter/Rain.png')
          },{
            id:4,
            cardName:'squirrel',
            audio:require('../../assets/Flashcard Audio/march/squirrel.mp3'),
            img:require('../../assets/image/Autumn and winter/Squirrel.png')
          },{
            id:5,
            cardName:'umbrella',
            audio:require('../../assets/Flashcard Audio/march/umbrella.mp3'),
            img:require('../../assets/image/Autumn and winter/Umbrella.png')
          },{
            id:6,
            cardName:'shiver',
            audio:require('../../assets/Flashcard Audio/march/shiver.mp3'),
            img:require('../../assets/image/Autumn and winter/Shiver.png')
          },{
            id:7,
            cardName:'hot chocolate',
            audio:require('../../assets/Flashcard Audio/march/hot chocolate.mp3'),
            img:require('../../assets/image/Autumn and winter/Hot Chocolate.png')
          },{
            id:8,
            cardName:'snow',
            audio:require('../../assets/Flashcard Audio/march/snow.mp3'),
            img:require('../../assets/image/Autumn and winter/Snow.png')
          },{
            id:9,
            cardName:'wind',
            audio:require('../../assets/Flashcard Audio/march/wind.mp3'),
            img:require('../../assets/image/Autumn and winter/Wind.png')
          },{
            id:10,
            cardName:'icicles',
            audio:require('../../assets/Flashcard Audio/march/icicles.mp3'),
            img:require('../../assets/image/Autumn and winter/Icicles.png')
          },{
            id:11,
            cardName:'ice skating',
            audio:require('../../assets/Flashcard Audio/march/ice skating.mp3'),
            img:require('../../assets/image/Autumn and winter/Ice Skating.png')
          },{
            id:12,
            cardName:'ski',
            audio:require('../../assets/Flashcard Audio/march/ski.mp3'),
            img:require('../../assets/image/Autumn and winter/Ski.png')
          }
        ],
        SeasonsPart2:[
          {
            id:1,
            cardName:'butterfly',
            audio:require('../../assets/Flashcard Audio/march/butterfly.mp3'),
            img:require('..'+'/../assets/image/Spring and summer/Butterfly.png')
          },{
            id:2,
            cardName:'flowers',
            audio:require('../../assets/Flashcard Audio/march/flowers.mp3'),
            img:require('../../assets/image/Spring and summer/Flowers.png')
          },{
            id:3,
            cardName:'kite',
            audio:require('../../assets/Flashcard Audio/march/kite.mp3'),
            img:require('../../assets/image/Spring and summer/Kite.png')
          },{
            id:4,
            cardName:'seeds',
            audio:require('../../assets/Flashcard Audio/march/seeds.mp3'),
            img:require('../../assets/image/Spring and summer/Seeds.png')
          },{
            id:5,
            cardName:'ice cream',
            audio:require('../../assets/Flashcard Audio/march/ice cream.mp3'),
            img:require('../../assets/image/Spring and summer/Ice Cream.png')
          },{
            id:6,
            cardName:'picnic',
            audio:require('../../assets/Flashcard Audio/march/picnic.mp3'),
            img:require('../../assets/image/Spring and summer/Picnic.png')
          },{
            id:7,
            cardName:'swim',
            audio:require('../../assets/Flashcard Audio/march/swim.mp3'),
            img:require('../../assets/image/Spring and summer/Swim.png')
          },{
            id:8,
            cardName:'sunny',
            audio:require('../../assets/Flashcard Audio/march/sunny.mp3'),
            img:require('../../assets/image/Spring and summer/Sun.png')
          },{
            id:9,
            cardName:'hike',
            audio:require('../../assets/Flashcard Audio/march/hike.mp3'),
            img:require('../../assets/image/Spring and summer/Hike.png')
          },{
            id:10,
            cardName:'fly',
            audio:require('../../assets/Flashcard Audio/march/fly.mp3'),
            img:require('../../assets/image/Spring and summer/Fly.png')
          },{
            id:11,
            cardName:'plant',
            audio:require('../../assets/Flashcard Audio/march/plant.mp3'),
            img:require('../../assets/image/Spring and summer/Plant.png')
          },{
            id:12,
            cardName:'sunscreen',
            audio:require('../../assets/Flashcard Audio/march/sunscreen.mp3'),
            img:require('../../assets/image/Spring and summer/Sun Cream.png')
          }
        ],
        TransportationPart1:[
          {
            id:1,
            cardName:'traffic lights',
            audio:require('../../assets/Flashcard Audio/april/traffic lights.mp3'),
            img:require('..'+'/../assets/image/202004H5 Travelling Near/Traffic Lights.png')
          },{
            id:2,
            cardName:'car',
            audio:require('../../assets/Flashcard Audio/april/car.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Car.png')
          },{
            id:3,
            cardName:'ferry',
            audio:require('../../assets/Flashcard Audio/april/ferry.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Ferry.png')
          },{
            id:4,
            cardName:'bus',
            audio:require('../../assets/Flashcard Audio/april/bus.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Bus.png')
          },{
            id:5,
            cardName:'bike',
            audio:require('../../assets/Flashcard Audio/april/bike.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Bike.png')
          },{
            id:6,
            cardName:'walk',
            audio:require('../../assets/Flashcard Audio/april/walk.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Walk.png')
          },{
            id:7,
            cardName:'tram',
            audio:require('../../assets/Flashcard Audio/april/tram.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Tram.png')
          },{
            id:8,
            cardName:'drive',
            audio:require('../../assets/Flashcard Audio/april/drive.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Drive.png')
          },{
            id:9,
            cardName:'stop',
            audio:require('../../assets/Flashcard Audio/april/stop.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Stop.png')
          },{
            id:10,
            cardName:'truck',
            audio:require('../../assets/Flashcard Audio/april/truck.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Truck.png')
          },{
            id:11,
            cardName:'honk',
            audio:require('../../assets/Flashcard Audio/april/honk.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Honk.png')
          },{
            id:12,
            cardName:'motorbike',
            audio:require('../../assets/Flashcard Audio/april/motorbike.mp3'),
            img:require('../../assets/image/202004H5 Travelling Near/Motorbike.png')
          }
        ],
        TransportationPart2:[
          {
            id:1,
            cardName:'fast',
            audio:require('../../assets/Flashcard Audio/april/fast.mp3'),
            img:require('..'+'/../assets/image/202004H5 Travelling Far/Fast.png')
          },{
            id:2,
            cardName:'train',
            audio:require('../../assets/Flashcard Audio/april/train.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Train.png')
          },{
            id:3,
            cardName:'fly',
            audio:require('../../assets/Flashcard Audio/april/fly.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Fly.png')
          },{
            id:4,
            cardName:'helicopter',
            audio:require('../../assets/Flashcard Audio/april/helicopter.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Helicopter.png')
          },{
            id:5,
            cardName:'airplane',
            audio:require('../../assets/Flashcard Audio/april/airplane.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Airplane.png')
          },{
            id:6,
            cardName:'ticket',
            audio:require('../../assets/Flashcard Audio/april/ticket.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/ticket.png')
          },{
            id:7,
            cardName:'slow',
            audio:require('../../assets/Flashcard Audio/april/slow.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Slow.png')
          },{
            id:8,
            cardName:'ship',
            audio:require('../../assets/Flashcard Audio/april/ship.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Ship.png')
          },{
            id:9,
            cardName:'airport',
            audio:require('../../assets/Flashcard Audio/april/airport.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Airport.png')
          },{
            id:10,
            cardName:'station',
            audio:require('../../assets/Flashcard Audio/april/station.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Station.png')
          },{
            id:11,
            cardName:'land',
            audio:require('../../assets/Flashcard Audio/april/land.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Land.png')
          },{
            id:12,
            cardName:'suitcase',
            audio:require('../../assets/Flashcard Audio/april/suitcase.mp3'),
            img:require('../../assets/image/202004H5 Travelling Far/Suitacase.png')
          }
        ],
        BugsPart1:[
          {
            id:1,
            cardName:'web',
            audio:require('../../assets/Flashcard Audio/may/web.mp3'),
            img:require('..'+'/../assets/image/Crawling Bugs/Web.png')
          },{
            id:2,
            cardName:'spider',
            audio:require('../../assets/Flashcard Audio/may/spider.mp3'),
            img:require('../../assets/image/Crawling Bugs/Spiders.png')
          },{
            id:3,
            cardName:'crawl',
            audio:require('../../assets/Flashcard Audio/may/crawl.mp3'),
            img:require('../../assets/image/Crawling Bugs/Crawl.png')
          },{
            id:4,
            cardName:'ant',
            audio:require('../../assets/Flashcard Audio/may/Ant.mp3'),
            img:require('../../assets/image/Crawling Bugs/Ant.png')
          },{
            id:5,
            cardName:'snail',
            audio:require('../../assets/Flashcard Audio/may/snail.mp3'),
            img:require('../../assets/image/Crawling Bugs/Snail.png')
          },{
            id:6,
            cardName:'caterpillar',
            audio:require('../../assets/Flashcard Audio/may/caterpillar.mp3'),
            img:require('../../assets/image/Crawling Bugs/Caterpillar.png')
          },{
            id:7,
            cardName:'worm',
            audio:require('../../assets/Flashcard Audio/may/worm.mp3'),
            img:require('../../assets/image/Crawling Bugs/Worm.png')
          },{
            id:8,
            cardName:'wiggle',
            audio:require('../../assets/Flashcard Audio/may/wiggle.mp3'),
            img:require('../../assets/image/Crawling Bugs/Wiggle.png')
          },{
            id:9,
            cardName:'feelers',
            audio:require('../../assets/Flashcard Audio/may/feelers.mp3'),
            img:require('../../assets/image/Crawling Bugs/Feelers.png')
          },{
            id:10,
            cardName:'leaf',
            audio:require('../../assets/Flashcard Audio/may/leaf.mp3'),
            img:require('../../assets/image/Crawling Bugs/Leaf.png')
          },{
            id:11,
            cardName:'munch',
            audio:require('../../assets/Flashcard Audio/may/munch.mp3'),
            img:require('../../assets/image/Crawling Bugs/Much.png')
          },{
            id:12,
            cardName:'mantis',
            audio:require('../../assets/Flashcard Audio/may/mantis.mp3'),
            img:require('../../assets/image/Crawling Bugs/Mantis.png')
          }
        ],
        BugsPart2:[
          {
            id:1,
            cardName:'wings',
            audio:require('../../assets/Flashcard Audio/may/wings.mp3'),
            img:require('../../assets/image/Flying Bugs/Wings.png')
          },{
            id:2,
            cardName:'ladybug',
            audio:require('../../assets/Flashcard Audio/may/ladybug.mp3'),
            img:require('../../assets/image/Flying Bugs/Ladybug.png')
          },{
            id:3,
            cardName:'sting',
            audio:require('../../assets/Flashcard Audio/may/sting.mp3'),
            img:require('../../assets/image/Flying Bugs/Sting.png')
          },{
            id:4,
            cardName:'buzz',
            audio:require('../../assets/Flashcard Audio/may/buzz.mp3'),
            img:require('../../assets/image/Flying Bugs/Buzz.png')
          },{
            id:5,
            cardName:'flowers',
            audio:require('../../assets/Flashcard Audio/may/flowers.mp3'),
            img:require('../../assets/image/Flying Bugs/Flowers.png')
          },{
            id:6,
            cardName:'fly',
            audio:require('../../assets/Flashcard Audio/may/fly.mp3'),
            img:require('../../assets/image/Flying Bugs/Fly.png')
          },{
            id:7,
            cardName:'butterfly',
            audio:require('../../assets/Flashcard Audio/may/butterfly.mp3'),
            img:require('../../assets/image/Flying Bugs/Butterfly.png')
          },{
            id:8,
            cardName:'bee',
            audio:require('../../assets/Flashcard Audio/may/bee.mp3'),
            img:require('../../assets/image/Flying Bugs/Bee.png')
          },{
            id:9,
            cardName:'firefly',
            audio:require('../../assets/Flashcard Audio/may/firefly.mp3'),
            img:require('../../assets/image/Flying Bugs/Firefly.png')
          },{
            id:10,
            cardName:'dragonfly',
            audio:require('../../assets/Flashcard Audio/may/dragonfly.mp3'),
            img:require('../../assets/image/Flying Bugs/Dragonfly.png')
          },{
            id:11,
            cardName:'hive',
            audio:require('../../assets/Flashcard Audio/may/hive.mp3'),
            img:require('../../assets/image/Flying Bugs/Hive.png')
          },{
            id:12,
            cardName:'mosquito',
            audio:require('../../assets/Flashcard Audio/may/mosquito.mp3'),
            img:require('../../assets/image/Flying Bugs/Mosquito.png')
          }
        ],
        ClothesPart1:[
          {
            id:1,
            cardName:'T-shirt',
            audio:require('../../assets/Flashcard Audio/clothes/t-shirt.mp3'),
            img:require('../../assets/image/Summer clothes/T-shirt.png')
          },{
            id:2,
            cardName:'bag',
            audio:require('../../assets/Flashcard Audio/clothes/bag.mp3'),
            img:require('../../assets/image/Summer clothes/Bag.png')
          },{
            id:3,
            cardName:'watch',
            audio:require('../../assets/Flashcard Audio/clothes/watch.mp3'),
            img:require('../../assets/image/Summer clothes/Watch.png')
          },{
            id:4,
            cardName:'dress',
            audio:require('../../assets/Flashcard Audio/clothes/dress.mp3'),
            img:require('../../assets/image/Summer clothes/Dress.png')
          },{
            id:5,
            cardName:'shoes',
            audio:require('../../assets/Flashcard Audio/clothes/shoes.mp3'),
            img:require('../../assets/image/Summer clothes/Shoes.png')
          },{
            id:6,
            cardName:'wear',
            audio:require('../../assets/Flashcard Audio/clothes/wear.mp3'),
            img:require('../../assets/image/Summer clothes/Wear.png')
          },{
            id:7,
            cardName:'hat',
            audio:require('../../assets/Flashcard Audio/clothes/hat.mp3'),
            img:require('../../assets/image/Summer clothes/Hat.png')
          },{
            id:8,
            cardName:'shorts',
            audio:require('../../assets/Flashcard Audio/clothes/shorts.mp3'),
            img:require('../../assets/image/Summer clothes/Shorts.png')
          },{
            id:9,
            cardName:'sunglasses',
            audio:require('../../assets/Flashcard Audio/clothes/sunglasses.mp3'),
            img:require('../../assets/image/Summer clothes/Sunglasses.png')
          },{
            id:10,
            cardName:'skirt',
            audio:require('../../assets/Flashcard Audio/clothes/skirt.mp3'),
            img:require('../../assets/image/Summer clothes/Skirt.png')
          },{
            id:11,
            cardName:'tie',
            audio:require('../../assets/Flashcard Audio/clothes/tie.mp3'),
            img:require('../../assets/image/Summer clothes/Tie.png')
          },{
            id:12,
            cardName:'sandals',
            audio:require('../../assets/Flashcard Audio/clothes/sandals.mp3'),
            img:require('../../assets/image/Summer clothes/Sandals.png')
          }
        ],
        ClothesPart2:[
          {
            id:1,
            cardName:'jacket',
            audio:require('../../assets/Flashcard Audio/clothes/jacket.mp3'),
            img:require('../../assets/image/Winter clothes/Jacket.png')
          },{
            id:2,
            cardName:'boots',
            audio:require('../../assets/Flashcard Audio/clothes/boots.mp3'),
            img:require('../../assets/image/Winter clothes/Boots.png')
          },{
            id:3,
            cardName:'zip',
            audio:require('../../assets/Flashcard Audio/clothes/zip.mp3'),
            img:require('../../assets/image/Winter clothes/Zip.png')
          },{
            id:4,
            cardName:'socks',
            audio:require('../../assets/Flashcard Audio/clothes/socks.mp3'),
            img:require('../../assets/image/Winter clothes/Socks.png')
          },{
            id:5,
            cardName:'belt',
            audio:require('../../assets/Flashcard Audio/clothes/belt.mp3'),
            img:require('../../assets/image/Winter clothes/Belt.png')
          },{
            id:6,
            cardName:'scarf',
            audio:require('../../assets/Flashcard Audio/clothes/scarf.mp3'),
            img:require('../../assets/image/Winter clothes/Scarf.png')
          },{
            id:7,
            cardName:'trousers',
            audio:require('../../assets/Flashcard Audio/clothes/trousers.mp3'),
            img:require('../../assets/image/Winter clothes/Trouser.png')
          },{
            id:8,
            cardName:'wrap',
            audio:require('../../assets/Flashcard Audio/clothes/wrap.mp3'),
            img:require('../../assets/image/Winter clothes/Wrap.png')
          },{
            id:9,
            cardName:'pajamas',
            audio:require('../../assets/Flashcard Audio/clothes/pajamas.mp3'),
            img:require('../../assets/image/Winter clothes/Pajamas.png')
          },{
            id:10,
            cardName:'mittens',
            audio:require('../../assets/Flashcard Audio/clothes/mittens.mp3'),
            img:require('../../assets/image/Winter clothes/Mitten.png')
          },{
            id:11,
            cardName:'sweater',
            audio:require('../../assets/Flashcard Audio/clothes/sweater.mp3'),
            img:require('../../assets/image/Winter clothes/Sweater.png')
          },{
            id:12,
            cardName:'shirt',
            audio:require('../../assets/Flashcard Audio/clothes/shirt.mp3'),
            img:require('../../assets/image/Winter clothes/Shirt.png')
          }
        ],
        ThemeParkPart1:[
          {
            id:1,
            cardName:'balloons',
            audio:require('../../assets/Flashcard Audio/ThemPark/balloons.mp3'),
            img:require('../../assets/image/ThemeParks/Balloons.png')
          },{
            id:2,
            cardName:'bumper cars',
            audio:require('../../assets/Flashcard Audio/ThemPark/bumper cars.mp3'),
            img:require('../../assets/image/ThemeParks/Bumper Cars.png')
          },{
            id:3,
            cardName:'cotton candy',
            audio:require('../../assets/Flashcard Audio/ThemPark/cotton candy.mp3'),
            img:require('../../assets/image/ThemeParks/Cotton Candy.png')
          },{
            id:4,
            cardName:'ferris wheel',
            audio:require('../../assets/Flashcard Audio/ThemPark/Ferris wheel.mp3'),
            img:require('../../assets/image/ThemeParks/Ferris Wheel.png')
          },{
            id:5,
            cardName:'popcorn',
            audio:require('../../assets/Flashcard Audio/ThemPark/Popcorn.mp3'),
            img:require('../../assets/image/ThemeParks/Popcorn.png')
          },{
            id:6,
            cardName:'rollercoaster',
            audio:require('../../assets/Flashcard Audio/ThemPark/roller coaster.mp3'),
            img:require('../../assets/image/ThemeParks/Rollercoaster.png')
          },{
            id:7,
            cardName:'scream',
            audio:require('../../assets/Flashcard Audio/ThemPark/Scream.mp3'),
            img:require('../../assets/image/ThemeParks/Scream.png')
          },{
            id:8,
            cardName:'ticket',
            audio:require('../../assets/Flashcard Audio/ThemPark/ticket.mp3'),
            img:require('../../assets/image/ThemeParks/Ticket.png')
          },{
            id:9,
            cardName:'carousel',
            audio:require('../../assets/Flashcard Audio/ThemPark/carousel.mp3'),
            img:require('../../assets/image/ThemeParks/Carousel.png')
          },{
            id:10,
            cardName:'swim',
            audio:require('../../assets/Flashcard Audio/ThemPark/swim.mp3'),
            img:require('../../assets/image/ThemeParks/Swim.png')
          },{
            id:11,
            cardName:'pool',
            audio:require('../../assets/Flashcard Audio/ThemPark/pool.mp3'),
            img:require('../../assets/image/ThemeParks/Pool.png')
          },{
            id:12,
            cardName:'queue',
            audio:require('../../assets/Flashcard Audio/ThemPark/queue.mp3'),
            img:require('../../assets/image/ThemeParks/Queue.png')
          }
        ],
        ThemeParkPart2:[
          {
            id:1,
            cardName:'float',
            audio:require('../../assets/Flashcard Audio/ThemPark/July - float.mp3'),
            img:require('../../assets/image/WaterParks/Float.png')
          },{
            id:2,
            cardName:'lazy river',
            audio:require('../../assets/Flashcard Audio/ThemPark/lazy river.mp3'),
            img:require('../../assets/image/WaterParks/Lazy River.png')
          },{
            id:3,
            cardName:'lifeguard',
            audio:require('../../assets/Flashcard Audio/ThemPark/lifeguard.mp3'),
            img:require('../../assets/image/WaterParks/Lifeguard.png')
          },{
            id:4,
            cardName:'swimsuit',
            audio:require('../../assets/Flashcard Audio/ThemPark/swimsuit.mp3'),
            img:require('../../assets/image/WaterParks/Swimsuit.png')
          },{
            id:5,
            cardName:'tube',
            audio:require('../../assets/Flashcard Audio/ThemPark/tube.mp3'),
            img:require('../../assets/image/WaterParks/Tube.png')
          },{
            id:6,
            cardName:'water slide',
            audio:require('../../assets/Flashcard Audio/ThemPark/water slide.mp3'),
            img:require('../../assets/image/WaterParks/Waterslide.png')
          },{
            id:7,
            cardName:'wave pool',
            audio:require('../../assets/Flashcard Audio/ThemPark/wave pool.mp3'),
            img:require('../../assets/image/WaterParks/Wave pool.png')
          },{
            id:8,
            cardName:'wet',
            audio:require('../../assets/Flashcard Audio/ThemPark/wet.mp3'),
            img:require('../../assets/image/WaterParks/Wet.png')
          },{
            id:9,
            cardName:'dry',
            audio:require('../../assets/Flashcard Audio/ThemPark/dry.mp3'),
            img:require('../../assets/image/WaterParks/Dry.png')
          },{
            id:10,
            cardName:'towel',
            audio:require('../../assets/Flashcard Audio/ThemPark/towel.mp3'),
            img:require('../../assets/image/WaterParks/Towel.png')
          },{
            id:11,
            cardName:'ride',
            audio:require('../../assets/Flashcard Audio/ThemPark/ride.mp3'),
            img:require('../../assets/image/WaterParks/Ride.png')
          },{
            id:12,
            cardName:'splash',
            audio:require('../../assets/Flashcard Audio/ThemPark/splash.mp3'),
            img:require('../../assets/image/WaterParks/Splash.png')
          }
        ],
        SpacePart1:[
          {
            id:1,
            cardName:'fly',
            audio:require('../../assets/Flashcard Audio/space/fly.mp3'),
            img:require('../../assets/image/Blast Off/Fly.png')
          },{
            id:2,
            cardName:'rocket',
            audio:require('../../assets/Flashcard Audio/space/rocket.mp3'),
            img:require('../../assets/image/Blast Off/Rocket.png')
          },{
            id:3,
            cardName:'blast off',
            audio:require('../../assets/Flashcard Audio/space/blast off.mp3'),
            img:require('../../assets/image/Blast Off/Blast Off.png')
          },{
            id:4,
            cardName:'fire',
            audio:require('../../assets/Flashcard Audio/space/fire.mp3'),
            img:require('../../assets/image/Blast Off/Fire.png')
          },{
            id:5,
            cardName:'countdown',
            audio:require('../../assets/Flashcard Audio/space/countdown.mp3'),
            img:require('../../assets/image/Blast Off/Countdown.png')
          },{
            id:6,
            cardName:'helmet',
            audio:require('../../assets/Flashcard Audio/space/helmet.mp3'),
            img:require('../../assets/image/Blast Off/Helmet.png')
          },{
            id:7,
            cardName:'astronaut',
            audio:require('../../assets/Flashcard Audio/space/astronaut.mp3'),
            img:require('../../assets/image/Blast Off/Astronaut.png')
          },{
            id:8,
            cardName:'space suit',
            audio:require('../../assets/Flashcard Audio/space/spacesuit.mp3'),
            img:require('../../assets/image/Blast Off/Spacesuit.png')
          },{
            id:9,
            cardName:'fuel',
            audio:require('../../assets/Flashcard Audio/space/fuel.mp3'),
            img:require('../../assets/image/Blast Off/Fuel.png')
          },{
            id:10,
            cardName:'explore',
            audio:require('../../assets/Flashcard Audio/space/explore.mp3'),
            img:require('../../assets/image/Blast Off/Explore.png')
          },{
            id:11,
            cardName:'scientist',
            audio:require('../../assets/Flashcard Audio/space/scientist.mp3'),
            img:require('../../assets/image/Blast Off/Scientist.png')
          },{
            id:12,
            cardName:'radio',
            audio:require('../../assets/Flashcard Audio/space/radio.mp3'),
            img:require('../../assets/image/Blast Off/Radio.png')
          }
        ],
        SpacePart2:[
          {
            id:1,
            cardName:'planet',
            audio:require('../../assets/Flashcard Audio/space/planet.mp3'),
            img:require('../../assets/image/In Space/Planet.png')
          },{
            id:2,
            cardName:'space',
            audio:require('../../assets/Flashcard Audio/space/space.mp3'),
            img:require('../../assets/image/In Space/Space.png')
          },{
            id:3,
            cardName:'asteroid',
            audio:require('../../assets/Flashcard Audio/space/asteroid.mp3'),
            img:require('../../assets/image/In Space/Asteroid.png')
          },{
            id:4,
            cardName:'Earth',
            audio:require('../../assets/Flashcard Audio/space/Earth.mp3'),
            img:require('../../assets/image/In Space/Earth.png')
          },{
            id:5,
            cardName:'Moon',
            audio:require('../../assets/Flashcard Audio/space/moon.mp3'),
            img:require('../../assets/image/In Space/Moon.png')
          },{
            id:6,
            cardName:'sun',
            audio:require('../../assets/Flashcard Audio/space/sun.mp3'),
            img:require('../../assets/image/In Space/Sun.png')
          },{
            id:7,
            cardName:'alien',
            audio:require('../../assets/Flashcard Audio/space/alien.mp3'),
            img:require('../../assets/image/In Space/Alien.png')
          },{
            id:8,
            cardName:'stars',
            audio:require('../../assets/Flashcard Audio/space/stars.mp3'),
            img:require('../../assets/image/In Space/Stars.png')
          },{
            id:9,
            cardName:'dark',
            audio:require('../../assets/Flashcard Audio/space/dark.mp3'),
            img:require('../../assets/image/In Space/Dark.png')
          },{
            id:10,
            cardName:'space station',
            audio:require('../../assets/Flashcard Audio/space/space.mp3'),
            img:require('../../assets/image/In Space/Space Station.png')
          },{
            id:11,
            cardName:'bright',
            audio:require('../../assets/Flashcard Audio/space/bright.mp3'),
            img:require('../../assets/image/In Space/Bright.png')
          },{
            id:12,
            cardName:'UFO',
            audio:require('../../assets/Flashcard Audio/space/UFO.mp3'),
            img:require('../../assets/image/In Space/UFO.png')
          }
        ],
        MyBodyPart1:[
          {
            id:1,
            cardName:'smell',
            audio:require('../../assets/Flashcard Audio/myBody/smell.mp3'),
            img:require('../../assets/image/Parts of My Body/Smell.png')
          },{
            id:2,
            cardName:'hand',
            audio:require('../../assets/Flashcard Audio/myBody/hand.mp3'),
            img:require('../../assets/image/Parts of My Body/Hand.png')
          },{
            id:3,
            cardName:'leg',
            audio:require('../../assets/Flashcard Audio/myBody/leg.mp3'),
            img:require('../../assets/image/Parts of My Body/Leg.png')
          },{
            id:4,
            cardName:'look',
            audio:require('../../assets/Flashcard Audio/myBody/look.mp3'),
            img:require('../../assets/image/Parts of My Body/Look.png')
          },{
            id:5,
            cardName:'eyes',
            audio:require('../../assets/Flashcard Audio/myBody/eyes.mp3'),
            img:require('../../assets/image/Parts of My Body/Eyes.png')
          },{
            id:6,
            cardName:'nose',
            audio:require('../../assets/Flashcard Audio/myBody/nose.mp3'),
            img:require('../../assets/image/Parts of My Body/Nose.png')
          },{
            id:7,
            cardName:'ear',
            audio:require('../../assets/Flashcard Audio/myBody/ear.mp3'),
            img:require('../../assets/image/Parts of My Body/Ear.png')
          },{
            id:8,
            cardName:'hair',
            audio:require('../../assets/Flashcard Audio/myBody/hair.mp3'),
            img:require('../../assets/image/Parts of My Body/Hair.png')
          },{
            id:9,
            cardName:'mouth',
            audio:require('../../assets/Flashcard Audio/myBody/mouth.mp3'),
            img:require('../../assets/image/Parts of My Body/Mouth.png')
          },{
            id:10,
            cardName:'eat',
            audio:require('../../assets/Flashcard Audio/myBody/eat.mp3'),
            img:require('../../assets/image/Parts of My Body/Eat.png')
          },{
            id:11,
            cardName:'walk',
            audio:require('../../assets/Flashcard Audio/myBody/walk.mp3'),
            img:require('../../assets/image/Parts of My Body/Walk.png')
          },{
            id:12,
            cardName:'feet',
            audio:require('../../assets/Flashcard Audio/myBody/feet.mp3'),
            img:require('../../assets/image/Parts of My Body/Feet.png')
          }
        ],
        MyBodyPart2:[
          {
            id:1,
            cardName:'run',
            audio:require('../../assets/Flashcard Audio/myBody/run.mp3'),
            img:require('../../assets/image/Keeping Healthy/Run.png')
          },{
            id:2,
            cardName:'soap',
            audio:require('../../assets/Flashcard Audio/myBody/soap.mp3'),
            img:require('../../assets/image/Keeping Healthy/Soap.png')
          },{
            id:3,
            cardName:'sleep',
            audio:require('../../assets/Flashcard Audio/myBody/sleep.mp3'),
            img:require('../../assets/image/Keeping Healthy/Sleep.png')
          },{
            id:4,
            cardName:'water',
            audio:require('../../assets/Flashcard Audio/myBody/water.mp3'),
            img:require('../../assets/image/Keeping Healthy/Water.png')
          },{
            id:5,
            cardName:'sweets',
            audio:require('../../assets/Flashcard Audio/myBody/sweets.mp3'),
            img:require('../../assets/image/Keeping Healthy/Sweets.png')
          },{
            id:6,
            cardName:'vegetables',
            audio:require('../../assets/Flashcard Audio/myBody/vegetables.mp3'),
            img:require('../../assets/image/Keeping Healthy/Vegetables.png')
          },{
            id:7,
            cardName:'fruit',
            audio:require('../../assets/Flashcard Audio/myBody/fruit.mp3'),
            img:require('../../assets/image/Keeping Healthy/Fruit.png')
          },{
            id:8,
            cardName:'germs',
            audio:require('../../assets/Flashcard Audio/myBody/germs.mp3'),
            img:require('../../assets/image/Keeping Healthy/Germs.png')
          },{
            id:9,
            cardName:'wash',
            audio:require('../../assets/Flashcard Audio/myBody/wash.mp3'),
            img:require('../../assets/image/Keeping Healthy/Wash.png')
          },{
            id:10,
            cardName:'teeth',
            audio:require('../../assets/Flashcard Audio/myBody/teeth.mp3'),
            img:require('../../assets/image/Keeping Healthy/Teeth.png')
          },{
            id:11,
            cardName:'brush',
            audio:require('../../assets/Flashcard Audio/myBody/brush.mp3'),
            img:require('../../assets/image/Keeping Healthy/Brush.png')
          },{
            id:12,
            cardName:'doctor',
            audio:require('../../assets/Flashcard Audio/myBody/doctor.mp3'),
            img:require('../../assets/image/Keeping Healthy/Doctor.png')
          }
        ],
        MyWeekendPart1:[
          {
            id:1,
            cardName:'swing',
            audio:require('../../assets/Flashcard Audio/weekend/swing.mp3'),
            img:require('../../assets/image/At the Park/Swing.png')
          },{
            id:2,
            cardName:'bike',
            audio:require('../../assets/Flashcard Audio/weekend/bike.mp3'),
            img:require('../../assets/image/At the Park/Bike.png')
          },{
            id:3,
            cardName:'kite',
            audio:require('../../assets/Flashcard Audio/weekend/kite.mp3'),
            img:require('../../assets/image/At the Park/Kite.png')
          },{
            id:4,
            cardName:'climb',
            audio:require('../../assets/Flashcard Audio/weekend/climb.mp3'),
            img:require('../../assets/image/At the Park/Climb.png')
          },{
            id:5,
            cardName:'picnic',
            audio:require('../../assets/Flashcard Audio/weekend/picnic.mp3'),
            img:require('../../assets/image/At the Park/Picnic.png')
          },{
            id:6,
            cardName:'camera',
            audio:require('../../assets/Flashcard Audio/weekend/camera.mp3'),
            img:require('../../assets/image/At the Park/Camera.png')
          },{
            id:7,
            cardName:'seesaw',
            audio:require('../../assets/Flashcard Audio/weekend/seesaw.mp3'),
            img:require('../../assets/image/At the Park/Seesaw.png')
          },{
            id:8,
            cardName:'paint',
            audio:require('../../assets/Flashcard Audio/weekend/paint.mp3'),
            img:require('../../assets/image/At the Park/Paint.png')
          },{
            id:9,
            cardName:'jog',
            audio:require('../../assets/Flashcard Audio/weekend/jog.mp3'),
            img:require('../../assets/image/At the Park/Jog.png')
          },{
            id:10,
            cardName:'jungle gym',
            audio:require('../../assets/Flashcard Audio/weekend/jungle gym.mp3'),
            img:require('../../assets/image/At the Park/Jungle Gym.png')
          },{
            id:11,
            cardName:'kick',
            audio:require('../../assets/Flashcard Audio/weekend/kick.mp3'),
            img:require('../../assets/image/At the Park/Kick.png')
          },{
            id:12,
            cardName:'brush',
            audio:require('../../assets/Flashcard Audio/weekend/brush.mp3'),
            img:require('../../assets/image/At the Park/Brush.png')
          }
        ],
        MyWeekendPart2:[
          {
            id:1,
            cardName:'sandcastle',
            audio:require('../../assets/Flashcard Audio/weekend/sandcastle.mp3'),
            img:require('../../assets/image/At the Beach/Sandcastle.png')
          },{
            id:2,
            cardName:'shovel',
            audio:require('../../assets/Flashcard Audio/weekend/shovel.mp3'),
            img:require('../../assets/image/At the Beach/Shovel.png')
          },{
            id:3,
            cardName:'dig',
            audio:require('../../assets/Flashcard Audio/weekend/Dig.mp3'),
            img:require('../../assets/image/At the Beach/Dig.png')
          },{
            id:4,
            cardName:'bucket',
            audio:require('../../assets/Flashcard Audio/weekend/bucket.mp3'),
            img:require('../../assets/image/At the Beach/Bucket.png')
          },{
            id:5,
            cardName:'swim',
            audio:require('../../assets/Flashcard Audio/weekend/swim.mp3'),
            img:require('../../assets/image/At the Beach/Swim.png')
          },{
            id:6,
            cardName:'read',
            audio:require('../../assets/Flashcard Audio/weekend/read.mp3'),
            img:require('../../assets/image/At the Beach/Read.png')
          },{
            id:7,
            cardName:'rod',
            audio:require('../../assets/Flashcard Audio/weekend/rod.mp3'),
            img:require('../../assets/image/At the Beach/Rod.png')
          },{
            id:8,
            cardName:'seashell',
            audio:require('../../assets/Flashcard Audio/weekend/seashell.mp3'),
            img:require('../../assets/image/At the Beach/Seashell.png')
          },{
            id:9,
            cardName:'snorkel',
            audio:require('../../assets/Flashcard Audio/weekend/snorkel.mp3'),
            img:require('../../assets/image/At the Beach/Snorkel.png')
          },{
            id:10,
            cardName:'goggles',
            audio:require('../../assets/Flashcard Audio/weekend/goggles.mp3'),
            img:require('../../assets/image/At the Beach/Goggles.png')
          },{
            id:11,
            cardName:'boat',
            audio:require('../../assets/Flashcard Audio/weekend/boat.mp3'),
            img:require('../../assets/image/At the Beach/Boat.png')
          },{
            id:12,
            cardName:'paddle',
            audio:require('../../assets/Flashcard Audio/weekend/paddle.mp3'),
            img:require('../../assets/image/At the Beach/Paddle.png')
          }
        ],
        WildAnimalsPart1:[
          {
            id:1,
            cardName:'dolphin',
            audio:require('../../assets/Flashcard Audio/wild/swing.mp3'),
            img:require('../../assets/image/In the Ocean/Dolphin.png')
          },{
            id:2,
            cardName:'octopus',
            audio:require('../../assets/Flashcard Audio/wild/Octopus.mp3'),
            img:require('../../assets/image/In the Ocean/Octopus.png')
          },{
            id:3,
            cardName:'seahorse',
            audio:require('../../assets/Flashcard Audio/wild/seahorse.mp3'),
            img:require('../../assets/image/In the Ocean/Seahorse.png')
          },{
            id:4,
            cardName:'chase',
            audio:require('../../assets/Flashcard Audio/wild/chase.mp3'),
            img:require('../../assets/image/In the Ocean/Chase.png')
          },{
            id:5,
            cardName:'jellyfish',
            audio:require('../../assets/Flashcard Audio/wild/jellyfish.mp3'),
            img:require('../../assets/image/In the Ocean/Jellyfish.png')
          },{
            id:6,
            cardName:'wiggle',
            audio:require('../../assets/Flashcard Audio/wild/wiggle.mp3'),
            img:require('../../assets/image/In the Ocean/wiggle.png')
          },{
            id:7,
            cardName:'hide',
            audio:require('../../assets/Flashcard Audio/wild/hide.mp3'),
            img:require('../../assets/image/In the Ocean/Hide.png')
          },{
            id:8,
            cardName:'turtle',
            audio:require('../../assets/Flashcard Audio/wild/turtle.mp3'),
            img:require('../../assets/image/In the Ocean/Turtle.png')
          },{
            id:9,
            cardName:'shark',
            audio:require('../../assets/Flashcard Audio/wild/shark.mp3'),
            img:require('../../assets/image/In the Ocean/Shark.png')
          },{
            id:10,
            cardName:'starfish',
            audio:require('../../assets/Flashcard Audio/wild/starfish.mp3'),
            img:require('../../assets/image/In the Ocean/Starfish.png')
          },{
            id:11,
            cardName:'spray',
            audio:require('../../assets/Flashcard Audio/wild/shark.mp3'),
            img:require('../../assets/image/In the Ocean/Spray.png')
          },{
            id:12,
            cardName:'whale',
            audio:require('../../assets/Flashcard Audio/wild/whale.mp3'),
            img:require('../../assets/image/In the Ocean/Whale.png')
          }
        ],
        WildAnimalsPart2:[
          {
            id:1,
            cardName:'lizard',
            audio:require('../../assets/Flashcard Audio/wild/lizard.mp3'),
            img:require('../../assets/image/In the Jungle/Lizard.png')
          },{
            id:2,
            cardName:'frog',
            audio:require('../../assets/Flashcard Audio/wild/frog.mp3'),
            img:require('../../assets/image/In the Jungle/Frog.png')
          },{
            id:3,
            cardName:'pounce',
            audio:require('../../assets/Flashcard Audio/wild/pounce.mp3'),
            img:require('../../assets/image/In the Jungle/Pounce.png')
          },{
            id:4,
            cardName:'snake',
            audio:require('../../assets/Flashcard Audio/wild/snake.mp3'),
            img:require('../../assets/image/In the Jungle/Snake.png')
          },{
            id:5,
            cardName:'slither',
            audio:require('../../assets/Flashcard Audio/wild/slither.mp3'),
            img:require('../../assets/image/In the Jungle/Slither.png')
          },{
            id:6,
            cardName:'crocodile',
            audio:require('../../assets/Flashcard Audio/wild/crocodile.mp3'),
            img:require('../../assets/image/In the Jungle/Crocodile.png')
          },{
            id:7,
            cardName:'parrot',
            audio:require('../../assets/Flashcard Audio/wild/parrot.mp3'),
            img:require('../../assets/image/In the Jungle/Parrot.png')
          },{
            id:8,
            cardName:'crawl',
            audio:require('../../assets/Flashcard Audio/wild/crawl.mp3'),
            img:require('../../assets/image/In the Jungle/Crawl.png')
          },{
            id:9,
            cardName:'bat',
            audio:require('../../assets/Flashcard Audio/wild/bat.mp3'),
            img:require('../../assets/image/In the Jungle/Bat.png')
          },{
            id:10,
            cardName:'jaguar',
            audio:require('../../assets/Flashcard Audio/wild/jaguar.mp3'),
            img:require('../../assets/image/In the Jungle/Jaguar.png')
          },{
            id:11,
            cardName:'sloth',
            audio:require('../../assets/Flashcard Audio/wild/sloth.mp3'),
            img:require('../../assets/image/In the Jungle/Sloth.png')
          },{
            id:12,
            cardName:'swing',
            audio:require('../../assets/Flashcard Audio/wild/swing.mp3'),
            img:require('../../assets/image/In the Jungle/Swing.png')
          }
        ],
        list:[],
        titleUrl:{
          MyCommunity:require('../../assets/image/2-logo.png'),
          MyCommunityPart1:require('../../assets/image/2-logo1.png'),
          MyCommunityPart2:require('../../assets/image/2-logo2.png'),
          FunTime:require('../../assets/image/3-3logo.png'),
          FunTimePart1:require('../../assets/image/3-3logo1.png'),
          FunTimePart2:require('../../assets/image/3-3logo2.png'),
          MyHome:require('../../assets/image/4-4logo.png'),
          MyHomePart1:require('../../assets/image/4-4logo1.png'),
          MyHomePart2:require('../../assets/image/4-4logo2.png'),
          OurWorld:require('../../assets/image/5-5logo.png'),
          OurWorldPart1:require('../../assets/image/5-5logo1.png'),
          OurWorldPart2:require('../../assets/image/5-5logo2.png'),
          FairyTales:require('../../assets/image/6-6logo.png'),
          FairyTalesPart1:require('../../assets/image/6-6logo1.png'),
          FairyTalesPart2:require('../../assets/image/6-6logo2.png'),
          Exploration:require('../../assets/image/7-7logo.png'),
          ExplorationPart2:require('../../assets/image/7-7logo1.png'),
          ExplorationPart1:require('../../assets/image/7-7logo2.png'),
          SummerFunPart2:require('../../assets/image/8-8logo2.png'),
          SummerFunPart1:require('../../assets/image/8-8logo1.png'),
          SchoolTime:require('../../assets/image/9-9logo.png'),
          SchoolTimePart1:require('../../assets/image/9-9logo1.png'),
          SchoolTimePart2:require('../../assets/image/9-9logo2.png'),
          AnimalsPart1:require('../../assets/image/10-10logo1.png'),
          AnimalsPart2:require('../../assets/image/10-10logo2.png'),
          FamilyTimePart1:require('../../assets/image/11-11logo1.png'),
          FamilyTimePart2:require('../../assets/image/11-11logo2.png'),
          HolidaysPart1:require('../../assets/image/12-logo1.png'),
          HolidaysPart2:require('../../assets/image/12-logo2.png'),
          MealTimePart1:require('../../assets/image/1-1logo1.png'),
          MealTimePart2:require('../../assets/image/1-1logo2.png'),
          OntheFarmPart1:require('../../assets/image/2-2logo1.png'),
          OntheFarmPart2:require('../../assets/image/2-2logo2.png'),
          SeasonsPart1:require('../../assets/image/season-logo1.png'),
          SeasonsPart2:require('../../assets/image/season-logo2.png'),
          TransportationPart1:require('../../assets/image/4-logo1.png'),
          TransportationPart2:require('../../assets/image/4-logo2.png'),
          BugsPart1:require('../../assets/image/5-logo1.png'),
          BugsPart2:require('../../assets/image/5-logo2.png'),
          ClothesPart1:require('../../assets/image/6-logo1.png'),
          ClothesPart2:require('../../assets/image/6-logo2.png'),
          ThemeParkPart1:require('../../assets/image/7-logo1.png'),
          ThemeParkPart2:require('../../assets/image/7-logo2.png'),
          SpacePart1:require('../../assets/image/8-logo1.png'),
          SpacePart2:require('../../assets/image/8-logo2.png'),
          MyBodyPart1:require('../../assets/image/9-logo1.png'),
          MyBodyPart2:require('../../assets/image/9-logo2.png'),
          MyWeekendPart1:require('../../assets/image/10-logo1.png'),
          MyWeekendPart2:require('../../assets/image/10-logo2.png'),
          WildAnimalsPart1:require('../../assets/image/11-logo1.png'),
          WildAnimalsPart2:require('../../assets/image/11-logo2.png'),
        },
        title:'../../assets/image/6-6logo.png',
        flashCardUrl:'http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9315e4a9-e1ec-4f49-8db5-5b3a9b6ae083.png',
        flashCardName:'ice cream',
        flashCardId:0,
        sum: 0,
        flashCardCount:12,
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
        this.part = (this.part === 'part1') ? 'part2' : 'part1';
        this.createdpop();
      },
      pop() {
        this.popp = !this.popp;
      },
      playsound(){
        let audio = new Audio();
        audio.src = this.list[this.flashCardId-1].audio;
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
      //单元数组 单元名+part12，前八个为walker，后四个runner
      createdpop(){
        if (this.unit==='Animals' && this.level === 'RUNNERS'){
            this.list = this.$data[this.unit.replaceAll(" ", "") + this.part.replaceAll("p", "P")].slice(8,20);
        }else if(this.unit==='Holidays' && this.part === 'part2' && this.level === 'RUNNERS'){
            this.list = this.$data[this.unit.replaceAll(" ", "") + this.part.replaceAll("p", "P")].slice(8,20);
        }else{
          if (this.level === 'WALKERS') {
            this.list = this.$data[this.unit.replaceAll(" ", "") + this.part.replaceAll("p", "P")].slice(0, 8);
          } else {
            this.list = this.$data[this.unit.replaceAll(" ", "") + this.part.replaceAll("p", "P")];
          }
        }
        this.title = this.$data.titleUrl[this.unit.replaceAll(" ", "") + this.part.replaceAll("p", "P")];
      },
      //pop向左右切换卡牌
      turnpop(turn){
        if (turn==='left'&&this.flashCardId!==1) {
          this.flashCardId=this.flashCardId-2;
        }else if(turn==='left'&&this.flashCardId===1&&this.level!=='WALKERS'){
          this.flashCardId=11;
        }else if(turn==='left'&&this.flashCardId===1&&this.level==='WALKERS'){
          this.flashCardId=8;
        }else if(turn==='right'&&this.flashCardId===12){
          this.flashCardId=0;
        }else if(turn==='right'&&this.flashCardId===8&&this.level==='WALKERS'){
          this.flashCardId=0;
        }
        this.showpop();
      },
      //展示pop
      startpop(li) {
        this.popp = !this.popp;
        this.flashCardId=li.id-1;
        this.showpop();
      },
      //加载pop的图片名字id
      showpop(){
        this.flashCardUrl=this.list[this.flashCardId].img;
        this.flashCardName=this.list[this.flashCardId].cardName;
        this.flashCardId=this.list[this.flashCardId].id;
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
      // audio.play();
      // audio.volume=0.1;
      audio.pause();
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
      this.flashCardCount = this.level === 'WALKERS'?8:12;
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
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
  }

  .eightCard {
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
  }

  .eightCard div:first-child:nth-last-child(8),
  .eightCard div:nth-last-child(8):first-child ~div{
    width: 17%;
    margin: 0 1.6% 0 1.6%;
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
  }
  .card-img1 {
    width: 95%;
    position: absolute;
    left: 1%;
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
    font-size:1.5rem;
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


  @media screen and (min-width: 1600px) {

    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 3rem;
      margin-left: 2%;
    }
  }
  //手机分辨率
  @media only screen and (min-device-height: 375px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 3) ,
  (min-device-height: 375px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 375px) and (max-width: 811px){
    .jump {
      font-size: 25px;
      padding: 5px 20px ;
      border-radius: 25px;
    }
  }

  //手机分辨率
  @media only screen and (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3) ,
  (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 812px) and (max-width: 1023px) {
    .eightCard div:first-child:nth-last-child(8),
    .eightCard div:nth-last-child(8):first-child ~div{
      width: 14%;
      margin: 0 3.5%;
    }

    .eightCard {
      transform: translate(-50%, -50%);
      left: 50%;
      width: 90%;
    }

    .toptitle{
      top :10px;
    }

    .jump {
      font-size: 25px;
      padding: 5px 20px;
      border-radius: 25px ;
    }
  }

  //平板分辨率
  @media only screen and (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1024px) and (max-width: 1600px){
    .eightCard div:first-child:nth-last-child(8),
    .eightCard div:nth-last-child(8):first-child ~ div {
      width: 18%;
      margin: 0 2%;
    }

    .eightCard {
      transform: translateY(-55%);
    }

    .fontsize {
      font-size: 3rem;
    }
  }


</style>
