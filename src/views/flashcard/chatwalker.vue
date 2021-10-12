<template>
  <div class="chatwalker">
		<span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source
      src="../../assets/video/gamemusic.mp3"></audio>
		</span>
    <img src="../../assets/image/rightback.png" @click="gomemu" class="backbutton"/>
    <div v-if="zhezhao" @click="showGif()"
         style="width: 100%; height: 100%;display:block;position: absolute;opacity: 0.5;z-index: 100;background-color: black">
    </div>
    <!--选择不同的背景-->
    <div v-if="this.unit === 'Fairy Tales' && this.part === 'part1'">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Walker_BG/bg_runner=walker.png"
         style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/stillObj(with Sword+Shield boy)/Grass&Cloud_0.png"
         style="width: 115%;height: 100%;position: absolute;right:-3%;top:6.5%"/>
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/stillObj(with Sword+Shield boy)/tower_0.png" class="tower"
         />
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/stillObj(with Sword+Shield boy)/Cloud_0.png"
         style="width: 18%;left:2.4%;top:15.5%;position: absolute;"/>
      <div class="shield">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/stillObj(with Sword+Shield boy)/Sword+ShieldA_0.png" v-if="shield&&sword" @click="walkers && showGif('shield')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/Shield.gif" style="z-index: 100" v-if="!shield"
           @click="showGif('shield')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/Sword.gif" style="z-index: 100" v-if="!sword"
           @click="showGif('sword')">
      </div>
      <div class="shieldbutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_shield Comp 1_0.png" v-if="walkers"
           :style="{zIndex: !shield ? 100 : 1}" @click="showGif('shield')">
      </div>
      <div class="swordbutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_sword Comp 1_0.png" v-if="walkers"
           :style="{zIndex: !sword ? 100 : 1}" @click="showGif('sword')">
      </div>
      <div class="dragon">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Png/dragon_00.png" v-if="dragon&&roar" @click="showGif('roar')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/dragon.gif" style="z-index: 100" v-if="!dragon"
           @click="showGif('dragon')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/roar.gif" style="z-index: 100" v-if="!roar"
           @click="showGif('roar')">
      </div>
      <div class="dragonbutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_dragon Comp 1_0.png" v-if="walkers"
           :style="{zIndex: !dragon ? 100 : 1}" @click="showGif('dragon')">
      </div>
      <div class="roarbutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_roar Comp 1_0.png"
           :style="{zIndex: !roar ? 100 : 1}" @click="showGif('roar')">
      </div>
      <div class="knight">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Png/knight_00.png" v-if="knight&&horse" @click="showGif('knight')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/knight.gif" style="z-index: 100" v-if="!knight"
           @click="showGif('knight')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/horse.gif" style="z-index: 100" v-if="!horse"
           @click="showGif('horse')">
      </div>
      <div class="knightbutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_knight Comp 1_0.png"
           :style="{zIndex: !knight ? 100 : 1}" @click="showGif('knight')">
      </div>
      <div class="horsebutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_horse Comp 1_0.png"
           :style="{zIndex: !horse ? 100 : 1}" @click="showGif('horse')">
      </div>
      <div class="castle">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Png/castle_00.png" v-if="castle" @click="showGif('castle')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/castle.gif" style="z-index: 100" v-if="!castle"
           @click="showGif('castle')">
      </div>
      <div class="castlebutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_castle Comp 1_0.png"
           :style="{zIndex: !castle ? 100 : 1}" @click="showGif('castle')">
      </div>
      <div class="queen">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Png/queen_00.png" v-if="queen" @click="showGif('queen')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/queen.gif" style="z-index: 100" v-if="!queen"
           @click="showGif('queen')">
      </div>
      <div class="queenbutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_queen Comp 1_0.png"
           :style="{zIndex: !queen ? 100 : 1}" @click="showGif('queen')">
      </div>
      <div class="king">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Png/king_00.png" v-if="king" @click="showGif('king')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/king.gif" style="z-index: 100" v-if="!king"
           @click="showGif('king')">
      </div>
      <div class="kingbutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_king Comp 1_0.png"
           :style="{zIndex: !king ? 100 : 1}" @click="showGif('king')">
      </div>
      <div class="wizard">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Png/wizard_00.png" v-if="wizard" @click="walkers && showGif('wizard')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/wizard.gif" style="z-index: 100" v-if="!wizard"
           @click="showGif('wizard')">
      </div>
      <div class="wizardbutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_wizard Comp 1_0.png" v-if="walkers"
           :style="{zIndex: !wizard ? 100 : 1}" @click="showGif('wizard')">
      </div>
      <div class="princess">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/PNG/princess_00.png" v-if="princess&&scream" @click="showGif('princess')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/princess.gif" style="z-index: 100" v-if="!princess"
           @click="showGif('princess')">
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/GIF/scream.gif" style="z-index: 100" v-if="!scream"
           @click="showGif('scream')">
      </div>
      <div class="princessbutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_princess Comp 1_0.png"
           :style="{zIndex: !princess ? 100 : 1}" @click="showGif('princess')">
      </div>
      <div class="screambutton">
      <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Word/word_scream Comp 1_0.png"
           :style="{zIndex: !scream ? 100 : 1}" @click="showGif('scream')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Fairy Tales' && this.part === 'part2'">
      <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Walker_BG/bg_runner=walker.png"
         style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="giant">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Png/giant_00.png" v-if="giant&&laugh" @click="showGif('giant')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/giant.gif" style="z-index: 100" v-if="!giant"
             @click="showGif('giant')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/laugh.gif" style="z-index: 100" v-if="!laugh"
             @click="showGif('laugh')">
      </div>
      <div class="giantbutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_giant Comp 1_0.png"
             :style="{zIndex: !giant ? 100 : 1}" @click="showGif('giant')" >
      </div>
      <div class="fairy">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Png/fairy_00.png" v-if="fairy&&wing" @click="showGif('fairy')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/fairy.gif" style="z-index: 100" v-if="!fairy"
             @click="showGif('fairy')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/wing.gif" style="z-index: 100" v-if="!wing"
             @click="showGif('wing')">
      </div>
      <div class="fairybutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_fairy Comp 1_0.png"
             :style="{zIndex: !fairy ? 100 : 1}" @click="showGif('fairy')">
      </div>
      <div class="wave">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Png/wave_00.png" v-if="wave&&elf" @click="showGif('wave')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/wave.gif" style="z-index: 100" v-if="!wave"
             @click="showGif('wave')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/elf.gif" style="z-index: 100" v-if="!elf"
             @click="showGif('elf')">
      </div>
      <div class="unicorn">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Png/unicorn_00.png" v-if="unicorn" @click="showGif('unicorn')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/unicorn.gif" style="z-index: 100" v-if="!unicorn"
             @click="showGif('unicorn')">
      </div>
      <div class="unicornbutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_unicorn Comp 1_0.png"
             :style="{zIndex: !unicorn ? 100 : 1}" @click="showGif('unicorn')">
      </div>
      <div class="forest">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Png/forest_00.png" v-if="forest" @click="showGif('forest')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/forest.gif" style="z-index: 100" v-if="!forest"
             @click="showGif('forest')">
      </div>
      <div class="forestbutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_forest Comp 1_0.png"
             :style="{zIndex: !forest ? 100 : 1}" @click="showGif('forest')">
      </div>
      <div class="witch">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Png/witch_00.png" v-if="witch&&wand" @click="showGif('witch')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/witch.gif" style="z-index: 100" v-if="!witch"
             @click="showGif('witch')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/wand.gif" style="z-index: 100" v-if="!wand"
             @click="showGif('wand')">
      </div>
      <div class="witchbutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_witch Comp 1_0.png"
             :style="{zIndex: !witch ? 100 : 1}" @click="showGif('witch')">
      </div>
      <div class="tower1">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Png/tower_00.png" v-if="tower" @click="walkers && showGif('tower')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/tower.gif" style="z-index: 100" v-if="!tower"
             @click="showGif('tower')">
      </div>
      <div class="tower1button">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_tower Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !tower ? 100 : 1}" @click="showGif('tower')">
      </div>
      <div class="mermaid">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Png/mermaid_00.png" v-if="mermaid" @click="walkers && showGif('mermaid')">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/GIF/mermaid.gif" style="z-index: 100" v-if="!mermaid"
             @click="showGif('mermaid')">
      </div>
      <div class="mermaidbutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_mermaid Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !mermaid ? 100 : 1}" @click="showGif('mermaid')">
      </div>
      <div class="wavebutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_wave Comp 1_0.png"
             :style="{zIndex: !wave ? 100 : 1}" @click="showGif('wave')">
      </div>
      <div class="wandbutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_wand Comp 1_0.png"
             :style="{zIndex: !wand ? 100 : 1}" @click="showGif('wand')">
      </div>
      <div class="laughbutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_laugh Comp 1_0.png"
             :style="{zIndex: !laugh ? 100 : 1}" @click="showGif('laugh')">
      </div>
      <div class="wingbutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_wings Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !wing ? 100 : 1}" @click="showGif('wing')">
      </div>
      <div class="elfbutton">
        <img src="../../assets/image/201906H5 Fairy Tales_enchanted_forest_MT/Word/word_elf Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !elf ? 100 : 1}" @click="showGif('elf')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Exploration' && this.part === 'part2'">
      <img src="../../assets/image/201907H5 The Arctic_MT/Runner_BG/bg.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="igloo">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/igloo_Comp_1_0000000000.png" v-if="igloo" @click="showGif('igloo')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/igloo_Comp_1.gif" style="z-index: 100" v-if="!igloo"
             @click="showGif('igloo')">
      </div>
      <div class="igloobutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_igloo_w Comp 1_00000.png"
             :style="{zIndex: !igloo ? 100 : 1}" @click="showGif('igloo')">
      </div>
      <div class="cold">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/cold_flashcard-01.png" v-if="cold" @click="showGif('cold')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/cold.gif" style="z-index: 100" v-if="!cold"
             @click="showGif('cold')">
      </div>
      <div class="coldbutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_cold_w Comp 1_00000.png"
             :style="{zIndex: !cold ? 100 : 1}" @click="showGif('cold')">
      </div>
      <div class="seal">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/seal_0000000000.png" v-if="seal" @click="showGif('seal')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/seal.gif" style="z-index: 100" v-if="!seal"
             @click="showGif('seal')">
      </div>
      <div class="sealbutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_seal Comp 1_00000.png"
             :style="{zIndex: !seal ? 100 : 1}" @click="showGif('seal')">
      </div>
      <div class="sled">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/sled_Comp_1_0000000000.png" v-if="sled" @click="walkers && showGif('sled')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/sled_Comp_1.gif" style="z-index: 100" v-if="!sled"
             @click="showGif('sled')">
      </div>
      <div class="sledbutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_sled Comp 1_00000.png"
             :style="{zIndex: !sled ? 100 : 1}" @click="showGif('sled')" v-if="walkers">
      </div>
      <div class="ice">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/ice_Comp_2_0000000000.png" v-if="ice" @click="showGif('ice')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/ice_Comp_2.gif" style="z-index: 100" v-if="!ice"
             @click="showGif('ice')">
      </div>
      <div class="icebutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_ice_w Comp 1_00000.png"
             :style="{zIndex: !ice ? 100 : 1}" @click="showGif('ice')">
      </div>
      <div class="iceberg">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/ice_berg_Comp_1_0000000000.png" v-if="iceberg" @click="walkers && showGif('iceberg')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/ice_berg_Comp_1.gif" style="z-index: 100" v-if="!iceberg"
             @click="showGif('iceberg')">
      </div>
      <div class="icebergbutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_ice berg Comp 1_00000.png"
             :style="{zIndex: !iceberg ? 100 : 2}" @click="showGif('iceberg')" v-if="walkers">
      </div>
      <div class="tusk">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/tusk_Comp_1_0000000000.png" v-if="tusk&&walrus" @click="showGif('tusk')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/tusk_Comp_1.gif" style="z-index: 100" v-if="!tusk" @click="showGif('tusk')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/walrus.gif" style="z-index: 100" v-if="!walrus" @click="showGif('walrus')">
      </div>
      <div class="tuskbutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_tusk_w Comp 1_00000.png"
             :style="{zIndex: !tusk ? 100 : 1}" @click="showGif('tusk')">
      </div>
      <div class="walrusbutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_walrus_w Comp 1_00000.png"
             :style="{zIndex: !walrus ? 100 : 1}" @click="showGif('walrus')">
      </div>
      <div class="orca">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/orca_Comp_1_0000000000.png" v-if="orca" @click="showGif('orca')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/orca_Comp_1.gif" style="z-index: 100" v-if="!orca"
             @click="showGif('orca')">
      </div>
      <div class="orcabutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_orca_w Comp 1_00000.png"
             :style="{zIndex: !orca ? 100 : 1}" @click="showGif('orca')">
      </div>
      <div class="blizzard">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/blizzard_Comp_1_0000000000.png" v-if="blizzard" @click="walkers && showGif('blizzard')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/blizzard_Comp_1.gif" style="z-index: 100" v-if="!blizzard"
             @click="showGif('blizzard')"/>
      </div>
      <div class="blizzardbutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_blizzard Comp 1_00000.png"
             :style="{zIndex: !blizzard ? 100 : 1}" @click="showGif('blizzard')" v-if="walkers">
      </div>
      <div class="polarbear">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/polar_bear_Comp_1_0000000000.png" v-if="polarbear" @click="showGif('polarbear')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/polar_bear_Comp_1.gif" style="z-index: 100" v-if="!polarbear"
             @click="showGif('polarbear')">
      </div>
      <div class="polarbearbutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_polar bear_w Comp 1_00000.png"
             :style="{zIndex: !polarbear ? 100 : 1}" @click="showGif('polarbear')">
      </div>
      <div class="snow">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/png/snow_Comp_1_0000000000.png" v-if="snow" @click="showGif('snow')">
        <img src="../../assets/image/201907H5 The Arctic_MT/201907H5 The Arctic_MT_GIF_PNG/snow_Comp_1.gif" style="z-index: 100" v-if="!snow"
             @click="showGif('snow')">
      </div>
      <div class="snowbutton">
        <img src="../../assets/image/201907H5 The Arctic_MT/Word/word_snow_w Comp 1_00000.png"
             :style="{zIndex: !snow ? 100 : 1}" @click="showGif('snow')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Exploration' && this.part === 'part1'">
      <img src="../../assets/image/201907H5 The desert_MT/Runner_BG/bg.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="cactus">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/png/cactus_0000000000.png" v-if="cactus" @click="showGif('cactus')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/cactus.gif" style="z-index: 100" v-if="!cactus"
             @click="showGif('cactus')">
      </div>
      <div class="cactusbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_cactus_w Comp 1_00000.png"
             :style="{zIndex: !cactus ? 100 : 3}" @click="showGif('cactus')">
      </div>
      <div class="camel">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/png/camel_0000000000.png" v-if="camel" @click="showGif('camel')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/camel.gif" style="z-index: 100" v-if="!camel"
             @click="showGif('camel')">
      </div>
      <div class="camelbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_camel_w Comp 1_00000.png"
             :style="{zIndex: !camel ? 100 : 1}" @click="showGif('camel')">
      </div>
      <div class="dunes">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/png/dunes_0000000000.png" v-if="dunes" @click="showGif('dunes')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/dunes.gif" style="z-index: 100" v-if="!dunes"
             @click="showGif('dunes')">
      </div>
      <div class="dunesbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_dunes_w Comp 1_00000.png"
             :style="{zIndex: !dunes ? 100 : 2}" @click="showGif('dunes')">
      </div>
      <div class="lizard">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/png/lizard_0000000000.png" v-if="lizard" @click="showGif('lizard')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/lizard.gif" style="z-index: 100" v-if="!lizard"
             @click="showGif('lizard')">
      </div>
      <div class="lizardbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_lizard_w Comp 1_00000.png"
             :style="{zIndex: !lizard ? 100 : 2}" @click="showGif('lizard')">
      </div>
      <div class="lost">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/png/lost_Comp_1_0000000000.png" v-if="lost" @click="walkers && showGif('lost')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/lost.gif" style="z-index: 100" v-if="!lost"
             @click="showGif('lost')">
      </div>
      <div class="compass">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/compass.gif" style="z-index: 100" v-if="!compass"
             @click="showGif('compass')">
      </div>
      <div class="compassbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_compass Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !compass ? 100 : 3}" @click="showGif('compass')">
      </div>
      <div class="lostbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_lost Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !lost ? 100 : 2}" @click="showGif('lost')">
      </div>
      <div class="map">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/png/map_Comp_2_0000000000.png" v-if="map&&hot" @click="showGif('map')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/map.gif" style="z-index: 100" v-if="!map && hot"
             @click="showGif('map')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/hot.gif" style="z-index: 100" v-if="!hot"
             @click="showGif('hot')">
      </div>
      <div class="mapbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_map_w Comp 1_00000.png"
             :style="{zIndex: !map && hot ? 100 : 1}" @click="showGif('map')">
      </div>
      <div class="hotbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_hot_w Comp 1_00000.png"
             :style="{zIndex: !hot ? 100 : 1}" @click="showGif('hot')">
      </div>
      <div class="sand">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/png/sand_0000000000.png" v-if="sand" @click="showGif('sand')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/sand.gif" style="z-index: 100" v-if="!sand"
             @click="showGif('sand')">
      </div>
      <div class="sandbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_sand_w Comp 1_00000.png"
             :style="{zIndex: !sand ? 100 : 1}" @click="showGif('sand')">
      </div>
      <div class="shovel">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/png/shovel_0000000000.png" v-if="shovel" @click="walkers && showGif('shovel')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/shovel.gif" style="z-index: 100" v-if="!shovel"
             @click="showGif('shovel')">
      </div>
      <div class="shovelbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_sandstorm Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !shovel ? 100 : 1}" @click="showGif('shovel')">
      </div>
      <div class="thirsty">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/png/thirsty_Comp_1_0000000000.png" v-if="thirsty" @click="showGif('thirsty')">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/thirsty.gif" style="z-index: 100" v-if="!thirsty"
             @click="showGif('thirsty')">
      </div>
      <div class="water">
        <img src="../../assets/image/201907H5 The desert_MT/201907H5 The desert_MT_GIF_PNG/water.gif" style="z-index: 100" v-if="!water"
             @click="showGif('water')">
      </div>
      <div class="thirstybutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_thirsty_w Comp 1_00000.png"
             :style="{zIndex: !thirsty ? 100 : 1}" @click="showGif('thirsty')">
      </div>
      <div class="waterbutton">
        <img src="../../assets/image/201907H5 The desert_MT/Word/word_water_w Comp 1_00000.png"
             :style="{zIndex: !water ? 100 : 1}" @click="showGif('water')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Summer Fun' && this.part === 'part1'">
      <img src="../../assets/image/201908H5 In the sea_MT/Runner_BG/bg_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="blow">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/png/blow_0000000000.png" v-if="blow&&sail&&sailboat" @click="showGif('blow')">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/blow.gif" style="z-index: 100" v-if="!blow"
             @click="showGif('blow')">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/sail.gif" style="z-index: 100" v-if="!sail"
             @click="showGif('sail')">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/sailboat.gif" style="z-index: 100" v-if="!sailboat"
             @click="showGif('sailboat')">
      </div>
      <div class="blowbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_blow Comp 1_00000_00000.png"
             :style="{zIndex: !blow ? 100 : 2}" @click="showGif('blow')">
      </div>
      <div class="sailbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_sail Comp 1_00000.png"
             :style="{zIndex: !sail ? 100 : 2}" @click="showGif('sail')">
      </div>
      <div class="sailboatbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_sailboat Comp 1_00000.png"
             :style="{zIndex: !sailboat ? 100 : 2}" @click="showGif('sailboat')">
      </div>
      <div class="dive">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/png/dive_0000000000.png" v-if="dive&&mask" @click="walkers && showGif('dive')">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/dive.gif" style="z-index: 100" v-if="!dive"
             @click="showGif('dive')">
      </div>
      <div class="divebutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_dive Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !dive ? 100 : 2}" @click="showGif('dive')">
      </div>
      <div class="mask">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/mask.gif" style="z-index: 100" v-if="!mask"
             @click="showGif('mask')">
      </div>
      <div class="maskbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_mask Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !mask ? 100 : 2}" @click="showGif('mask')">
      </div>
      <div class="flippers">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/png/flippers_0000000000.png" v-if="flippers&&tank" @click="walkers && showGif('flippers')">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/flippers.gif" style="z-index: 100" v-if="!flippers"
             @click="showGif('flippers')">
      </div>
      <div class="tank">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/tank.gif" style="z-index: 100" v-if="!tank"
             @click="showGif('tank')">
      </div>
      <div class="flippersbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_flippers Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !flippers ? 100 : 2}" @click="showGif('flippers')">
      </div>
      <div class="tankbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_tank Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !tank ? 100 : 2}" @click="showGif('tank')">
      </div>
      <div class="surf">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/png/surf_0000000000.png" v-if="surf&&surfboard&&lifeJacket" @click="showGif('surf')">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/surf.gif" style="z-index: 100" v-if="!surf"
             @click="showGif('surf')">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/surfboard.gif" style="z-index: 100" v-if="!surfboard"
             @click="showGif('surfboard')">
      </div>
      <div class="lifeJacket">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/life_jacket.gif" style="z-index: 100" v-if="!lifeJacket"
             @click="showGif('lifeJacket')">
      </div>
      <div class="surfbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_surf Comp 1_00000.png"
             :style="{zIndex: !surf ? 100 : 2}" @click="showGif('surf')">
      </div>
      <div class="surfboardbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_surfboard Comp 1_00000.png"
             :style="{zIndex: !surfboard ? 100 : 2}" @click="showGif('surfboard')">
      </div>
      <div class="lifeJacketbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_life jacket Comp 1_00000.png"
             :style="{zIndex: !lifeJacket ? 100 : 2}" @click="showGif('lifeJacket')">
      </div>
      <div class="waves">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/png/waves_0000000000.png" v-if="waves" @click="showGif('waves')">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/waves.gif" style="z-index: 100" v-if="!waves"
             @click="showGif('waves')">
      </div>
      <div class="wavesbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_waves Comp 1_00000.png"
             :style="{zIndex: !waves ? 100 : 2}" @click="showGif('waves')">
      </div>
      <div class="wind">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/png/wind.png" v-if="wind" @click="showGif('wind')">
        <img src="../../assets/image/201908H5 In the sea_MT/GIF_PNG/wind.gif" style="z-index: 100" v-if="!wind"
             @click="showGif('wind')">
      </div>
      <div class="windbutton">
        <img src="../../assets/image/201908H5 In the sea_MT/Word/word_winds Comp 1_00000.png"
             :style="{zIndex: !wind ? 100 : 2}" @click="showGif('wind')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Summer Fun' && this.part === 'part2'">
      <img src="../../assets/image/201908H5 At the circus_MT/Walker_BG/bg_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="acrobat">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/png/acrobat_cut_0000000000.png" v-if="acrobat" @click="showGif('acrobat')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/acrobat.gif" style="z-index: 100" v-if="!acrobat"
             @click="showGif('acrobat')">
      </div>
      <div class="acrobatbutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_acrobat Comp 1_00000.png"
             :style="{zIndex: !acrobat ? 100 : 1}" @click="showGif('acrobat')">
      </div>
      <div class="cheer">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/png/cheercut_0000000000.png" v-if="cheer" @click="walkers && showGif('cheer')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/cheercut.gif" style="z-index: 100" v-if="!cheer"
             @click="showGif('cheer')">
      </div>
      <div class="crowdbutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_crowd Comp 1_00000.png"
             :style="{zIndex: !crowd ? 100 : 1}" @click="showGif('crowd')">
      </div>
      <div class="cheerbutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_cheer Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !cheer ? 100 : 1}" @click="showGif('cheer')">
      </div>
      <div class="clown">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/png/clown_cut_0000000000.png" v-if="clown&&unicycle" @click="showGif('clown')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/clown.gif" style="z-index: 100" v-if="!clown"
             @click="showGif('clown')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/unicycle.gif" style="z-index: 100" v-if="!unicycle"
             @click="showGif('unicycle')">
      </div>
      <div class="clownbutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_clown Comp 1_00000.png"
             :style="{zIndex: !clown ? 100 : 1}" @click="showGif('clown')">
      </div>
      <div class="unicyclebutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_unicycle Comp 1_00000.png"
             :style="{zIndex: !unicycle ? 100 : 1}" @click="showGif('unicycle')">
      </div>
      <div class="juggle">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/png/juggle_cut_0000000000.png" v-if="juggle" @click="showGif('juggle')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/juggle.gif" style="z-index: 100" v-if="!juggle"
             @click="showGif('juggle')">
      </div>
      <div class="jugglebutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_juggle Comp 1_00000.png"
             :style="{zIndex: !juggle ? 100 : 1}" @click="showGif('juggle')">
      </div>
      <div class="watch">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/png/watch_cut_0000000000.png" v-if="watch" @click="showGif('watch')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/watch.gif" style="z-index: 100" v-if="!watch"
             @click="showGif('watch')">
      </div>
      <div class="watchbutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_watch Comp 1_00000.png"
             :style="{zIndex: !watch ? 100 : 1}" @click="showGif('watch')">
      </div>
      <div class="net">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/png/net_0000000000.png" v-if="net" @click="showGif('net')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/net.gif" style="z-index: 100" v-if="!net"
             @click="showGif('net')">
      </div>
      <div class="netbutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_net Comp 1_00000.png"
             :style="{zIndex: !net ? 100 : 1}" @click="showGif('net')">
      </div>
      <div class="tent">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/png/tent_cut_0000000000.png" v-if="tent" @click="showGif('tent')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/tent.gif" style="z-index: 100" v-if="!tent"
             @click="showGif('tent')">
      </div>
      <div class="tentbutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_tent Comp 1_00000.png"
             :style="{zIndex: !tent ? 100 : 2}" @click="showGif('tent')">
      </div>
      <div class="tightrope">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/png/tightrope_0000000000.png" v-if="tightrope" @click="walkers && showGif('tightrope')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/tightrope.gif" style="z-index: 100" v-if="!tightrope"
             @click="showGif('tightrope')">
      </div>
      <div class="tightropebutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_tightrope Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !tightrope ? 100 : 1}" @click="showGif('tightrope')">
      </div>
      <div class="trick">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/png/trick_0000000000.png" v-if="trick&&magician" @click="walkers && showGif('trick')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/trick.gif" style="z-index: 100" v-if="!trick"
             @click="showGif('trick')">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/magician.gif" style="z-index: 100" v-if="!magician"
             @click="showGif('magician')">
      </div>
      <div class="trickbutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_trick Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !trick ? 100 : 1}" @click="showGif('trick')">
      </div>
      <div class="magicianbutton">
        <img src="../../assets/image/201908H5 At the circus_MT/Word/word_magician Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !magician ? 100 : 1}" @click="showGif('magician')">
      </div>
      <div class="crowd">
        <img src="../../assets/image/201908H5 At the circus_MT/GIF_PNG/crowd.gif" style="z-index: 100" v-if="!crowd"
             @click="showGif('crowd')">
      </div>
    </div>
    <div v-else-if="this.unit === 'School Time' && this.part === 'part1'">
      <img src="../../assets/image/201909H5 Classroom_MT/Walker_BG/bg_0.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="backpack">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/backpack_00.png" v-if="backpack" @click="showGif('backpack')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/backpack.gif" style="z-index: 100" v-if="!backpack"
             @click="showGif('backpack')">
      </div>
      <div class="backpackbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_backpack Comp 1_0.png"
             :style="{zIndex: !backpack ? 100 : 1}" @click="showGif('backpack')">
      </div>
      <div class="stillobj_0">
        <img src="../../assets/image/201909H5 Classroom_MT/Still object/stillobj_0.png">
      </div>
      <div class="stillobj_boy_0">
        <img src="../../assets/image/201909H5 Classroom_MT/Still object/stillobj_boy_0.png">
      </div>
      <div class="chair1">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/chair_part1_00.png" v-if="chair" @click="walkers && showGif('chair')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/chair_part1.gif" style="z-index: 100" v-if="!chair"
             @click="showGif('chair')">
      </div>
      <div class="chair2">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/chair_part2_00.png" v-if="chair" @click="walkers && showGif('chair')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/chair_part2.gif" style="z-index: 100" v-if="!chair"
             @click="showGif('chair')">
      </div>
      <div class="chairbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_chair_0.png" v-if="!walkers"
             :style="{zIndex: !chair ? 100 : 1}" @click="showGif('chair')">
      </div>
      <div class="desk2">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/desk_00.png" v-if="desk2" @click="showGif('desk2')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/desk.gif" style="z-index: 100" v-if="!desk2"
             @click="showGif('desk2')">
      </div>
      <div class="crayons">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/crayons_00.png" v-if="crayons" @click="walkers && showGif('crayons')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/crayons.gif" style="z-index: 100" v-if="!crayons"
             @click="showGif('crayons')">
      </div>
      <div class="crayonsbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_crayons Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !crayons ? 100 : 1}" @click="showGif('crayons')">
      </div>
      <div class="book">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/book Comp 1_00.png" v-if="book" @click="showGif('book')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/book.gif" style="z-index: 100" v-if="!book"
             @click="showGif('book')">
      </div>
      <div class="bookbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_book Comp 1_0.png"
             :style="{zIndex: !book ? 100 : 2}" @click="showGif('book')">
      </div>
      <div class="listen">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/listen Comp 1_00.png" v-if="listen" @click="walkers && showGif('listen')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/listen.gif" style="z-index: 100" v-if="!listen"
             @click="showGif('listen')">
      </div>
      <div class="listenbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_listen Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !listen ? 100 : 1}" @click="showGif('listen')">
      </div>
      <div class="eraser">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/eraser_00.png" v-if="eraser" @click="showGif('eraser')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/eraser.gif" style="z-index: 100" v-if="!eraser"
             @click="showGif('eraser')">
      </div>
      <div class="eraserbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_eraser Comp 1_0.png"
             :style="{zIndex: !eraser ? 100 : 1}" @click="showGif('eraser')">
      </div>
      <div class="pencil">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/pencil Comp 1_00.png" v-if="pencil" @click="showGif('pencil')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/pencil.gif" style="z-index: 100" v-if="!pencil"
             @click="showGif('pencil')">
      </div>
      <div class="pencilbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_pencil Comp 1_0.png"
             :style="{zIndex: !pencil ? 100 : 1}" @click="showGif('pencil')">
      </div>
<!--      <div class="read">-->
<!--        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/read_00.png" v-if="read&&sit" @click="showGif('read')">-->
<!--        <img src="../../assets/image/201909H5 Classroom_MT/GIF/read.gif" style="z-index: 100" v-if="!read&&walkers"-->
<!--             @click="showGif('read')">-->
<!--        <img src="../../assets/image/201909H5 Classroom_MT/GIF/sit.gif" style="z-index: 100" v-if="!sit || !walkers&&!read"-->
<!--             @click="showGif('sit')">-->
<!--      </div>-->
      <div class="read">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/read_00.png" v-if="read&&walkers" @click="showGif('read')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/read.gif" style="z-index: 100" v-if="!read&&walkers"
        @click="showGif('read')">
      </div>
      <div class="read">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/sit_00.png" v-if="sit&&!walkers" @click="showGif('sit')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/sit.gif" style="z-index: 100" v-if="!sit"
             @click="showGif('sit')">
      </div>
      <div class="readbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_read Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !read ? 100 : 1}" @click="showGif('read')">
      </div>
      <div class="sitbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_sit_0.png" v-if="!walkers"
             :style="{zIndex: !sit ? 100 : 1}" @click="showGif('sit')">
      </div>
      <div class="clock">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/clock_00.png" v-if="clock" @click="walkers && showGif('clock')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/clock.gif" style="z-index: 100" v-if="!clock"
             @click="showGif('clock')">
      </div>
      <div class="clockbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_clock Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !clock ? 100 : 1}" @click="showGif('clock')">
      </div>
      <div class="write">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/write_00.png" v-if="write&&teacher" @click="showGif('write')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/write.gif" style="z-index: 100" v-if="!write"
             @click="showGif('write')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/teacher.gif" style="z-index: 100" v-if="!teacher"
             @click="showGif('teacher')">
      </div>
      <div class="writebutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_write Comp 1_0.png"
             :style="{zIndex: !write ? 100 : 1}" @click="showGif('write')">
      </div>
      <div class="teacherbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_teacher Comp 1_0.png"
             :style="{zIndex: !teacher ? 100 : 1}" @click="showGif('teacher')">
      </div>
      <div class="desk2button">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_desk Comp 1_0.png"
             :style="{zIndex: !desk2 ? 100 : 1}" @click="showGif('desk2')">
      </div>
      <div class="board">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF_PNG/blackboard_00.png" v-if="blackboard" @click="walkers && showGif('blackboard')">
        <img src="../../assets/image/201909H5 Classroom_MT/GIF/blackboard.gif" style="z-index: 100" v-if="!blackboard"
             @click="showGif('board')">
      </div>
      <div class="blackboardbutton">
        <img src="../../assets/image/201909H5 Classroom_MT/Word/word_board Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !blackboard ? 100 : 1}" @click="showGif('blackboard')">
      </div>
    </div>
    <div v-else-if="this.unit === 'School Time' && this.part === 'part2'">
      <img src="../../assets/image/201909H5 SchoolTime_MT/Walker_BG/bg_0.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="climb">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/climb Comp 1_00.png" v-if="climb&&junglegym" @click="walkers && showGif('climb')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/climb.gif" style="z-index: 100" v-if="!climb"
             @click="showGif('climb')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/jungle-gym.gif" style="z-index: 100" v-if="!junglegym"
             @click="showGif('junglegym')">
      </div>
      <div class="kick">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/kick Comp 1_00.png" v-if="kick&&ball" @click="showGif('kick')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/kick.gif" style="z-index: 100" v-if="!kick"
             @click="showGif('kick')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/ball.gif" style="z-index: 100" v-if="!ball"
             @click="showGif('ball')">
      </div>
      <div class="bgBoy">
        <img src="../../assets/image/201909H5 SchoolTime_MT/stillObj/a boy_0.png">
      </div>
      <div class="lineup">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/line up Comp 1_00.png" v-if="lineup" @click="walkers && showGif('lineup')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/line-up.gif" style="z-index: 100" v-if="!lineup"
             @click="showGif('lineup')">
      </div>
      <div class="playground">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/playground.gif" style="z-index: 100" v-if="!playground"
             @click="showGif('playground')">
      </div>
      <div class="ring">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/ring_00.png" v-if="ring&&bell" @click="walkers && showGif('ring')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/ring.gif" style="z-index: 100" v-if="!ring"
             @click="showGif('ring')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/bell.gif" style="z-index: 100" v-if="!bell"
             @click="showGif('bell')">
      </div>
      <div class="run">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/run Comp 1_00.png" v-if="run" @click="showGif('run')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/run.gif" style="z-index: 100" v-if="!run"
             @click="showGif('run')">
      </div>
      <div class="seesaw">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/seesaw Comp 1_00.png" v-if="seesaw" @click="walkers &&  showGif('seesaw')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/seesaw.gif" style="z-index: 100" v-if="!seesaw"
             @click="showGif('seesaw')">
      </div>
      <div class="slide">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/slide Comp 1_00.png" v-if="slide" @click="showGif('slide')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/slide.gif" style="z-index: 100" v-if="!slide"
             @click="showGif('slide')">
      </div>
      <div class="snack">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/snack_00.png" v-if="snack" @click="showGif('snack')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/snack.gif" style="z-index: 100" v-if="!snack"
             @click="showGif('snack')">
      </div>
      <div class="swing">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/swing Comp 1_00.png" v-if="swing" @click="showGif('swing')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/swing.gif" style="z-index: 100" v-if="!swing"
             @click="showGif('swing')">
      </div>
      <div class="toys">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF_PNG/toys_00.png" v-if="toys" @click="showGif('toys')">
        <img src="../../assets/image/201909H5 SchoolTime_MT/GIF/toys.gif" style="z-index: 100" v-if="!toys"
             @click="showGif('toys')">
      </div>
      <div class="slideButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_slide Comp 1_0.png"
             :style="{zIndex: !slide ? 100 : 1}" @click="showGif('slide')">
      </div>
      <div class="ballButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_ball_0.png" v-if="walkers"
             :style="{zIndex: !ball ? 100 : 1}" @click="showGif('slide')">
      </div>
      <div class="kickButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_kick_0.png"
             :style="{zIndex: !kick ? 100 : 1}" @click="showGif('kick')">
      </div>
      <div class="snackButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_snack Comp 1_0.png"
             :style="{zIndex: !snack ? 100 : 1}" @click="showGif('snack')">
      </div>
      <div class="swingButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_swing Comp 1_0.png"
             :style="{zIndex: !swing ? 100 : 1}" @click="showGif('swing')">
      </div>
      <div class="runButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_run Comp 1_0.png"
             :style="{zIndex: !run ? 100 : 1}" @click="showGif('run')">
      </div>
      <div class="climbButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_climb Comp 1_0.png"
             :style="{zIndex: !climb ? 100 : 1}" @click="showGif('climb')">
      </div>
      <div class="snackButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_snack Comp 1_0.png"
             :style="{zIndex: !snack ? 100 : 1}" @click="showGif('snack')">
      </div>
      <div class="playgroundButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_playground Comp 1_0.png"
             :style="{zIndex: !playground ? 100 : 1}" @click="showGif('playground')">
      </div>
      <div class="lineupButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_line up Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !lineup ? 100 : 1}" @click="showGif('lineup')">
      </div>
      <div class="slideButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_slide Comp 1_0.png"
             :style="{zIndex: !slide ? 100 : 1}" @click="showGif('slide')">
      </div>
      <div class="ballButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_ball_0.png" v-if="walkers"
             :style="{zIndex: !ball ? 100 : 1}" @click="showGif('ball')">
      </div>
      <div class="seesawButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_seesaw Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !seesaw ? 100 : 1}" @click="showGif('seesaw')">
      </div>
      <div class="bellButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_bell Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !bell ? 100 : 3}" @click="showGif('bell')">
      </div>
      <div class="ringButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_ring Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !ring ? 100 : 1}" @click="showGif('ring')">
      </div>
      <div class="toysButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_toys Comp 1_0.png"
             :style="{zIndex: !toys ? 100 : 1}" @click="showGif('toys')">
      </div>
      <div class="junglegymButton">
        <img src="../../assets/image/201909H5 SchoolTime_MT/Word/word_jungle gym Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !junglegym ? 100 : 1}" @click="showGif('junglegym')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Animals' && this.part === 'part1'">
      <img src="../../assets/image/201910H5 Pets_MT/Walker_BG/bg_0.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="big">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/big_00.png" v-if="big" @click="walkers && showGif('big')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/big.gif" style="z-index: 100" v-if="!big"
             @click="showGif('big')">
      </div>
      <div class="small">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/small_00.png" v-if="small" @click="walkers && showGif('small')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/small.gif" style="z-index: 100" v-if="!small"
             @click="showGif('small')">
      </div>
      <div class="tank1">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/tank_00.png" v-if="tank1" @click="showGif('tank1')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/tank.gif" style="z-index: 100" v-if="!tank1"
             @click="showGif('tank1')">
      </div>
      <div class="fish">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/fish_00.png" v-if="!walkers&&fish" @click="showGif('fish')">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/fish_00.png" v-if="walkers&&goldfish" @click="showGif('goldfish')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/fish.gif" style="z-index: 100" v-if="!fish"
             @click="showGif('fish')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/goldfish.gif" style="z-index: 100" v-if="!goldfish"
             @click="showGif('goldfish')">
      </div>
      <div class="kitten">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/kitten_00.png" v-if="walkers&&kitten" @click="showGif('kitten')">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/kitten_00.png" v-if="!walkers&&cat" @click="showGif('cat')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/kitten.gif" style="z-index: 100" v-if="!kitten"
             @click="showGif('kitten')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/kitten.gif" style="z-index: 100" v-if="!cat"
             @click="showGif('cat')">
      </div>
      <div class="turtle">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/turtle_00.png" v-if="turtle" @click="walkers && showGif('turtle')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/turtle.gif" style="z-index: 100" v-if="!turtle"
             @click="showGif('turtle')">
      </div>
      <div class="hamster">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/hamster_00.png" v-if="hamster" @click="walkers && showGif('hamster')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/hamster.gif" style="z-index: 100" v-if="!hamster"
             @click="showGif('hamster')">
      </div>
      <div class="brush">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/brush_00.png" v-if="brush" @click="showGif('brush')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/brush.gif" style="z-index: 100" v-if="!brush"
             @click="showGif('brush')">
      </div>
      <div class="feed">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/feed_00.png" v-if="feed" @click="showGif('feed')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/feed.gif" style="z-index: 100" v-if="!feed"
             @click="showGif('feed')">
      </div>
      <div class="cage">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/cage_00.png" v-if="cage" @click="showGif('cage')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/cage.gif" style="z-index: 100" v-if="!cage"
             @click="showGif('cage')">
      </div>
      <div class="bird">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/bird_00.png" v-if="bird" @click="!walkers && showGif('bird')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/bird.gif" style="z-index: 100" v-if="!bird"
             @click="showGif('bird')">
      </div>
      <div class="parrot">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/parrot_00.png" v-if="parrot" @click="walkers && showGif('parrot')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/parrot.gif" style="z-index: 100" v-if="!parrot"
             @click="showGif('parrot')">
      </div>
      <div class="puppy">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/puppy_00.png" v-if="walkers&&puppy" @click="showGif('puppy')">
        <img src="../../assets/image/201910H5 Pets_MT/PNG/puppy_00.png" v-if="!walkers&&dog" @click="showGif('dog')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/puppy.gif" style="z-index: 100" v-if="!puppy"
             @click="showGif('puppy')">
        <img src="../../assets/image/201910H5 Pets_MT/GIF/puppy.gif" style="z-index: 100" v-if="!dog"
             @click="showGif('dog')">
      </div>
      <div class="feedButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_feed Comp 1_0.png"
             :style="{zIndex: !feed ? 100 : 1}" @click="showGif('feed')">
      </div>
      <div class="brushButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_brush Comp 1_0.png"
             :style="{zIndex: !brush ? 100 : 1}" @click="showGif('brush')">
      </div>
      <div class="cageButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_cage Comp 1_0.png"
             :style="{zIndex: !cage ? 100 : 1}" @click="showGif('cage')">
      </div>
      <div class="birdButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_bird Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !bird ? 100 : 1}" @click="showGif('bird')">
      </div>
      <div class="tank1Button">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_tank Comp 1_0.png"
             :style="{zIndex: !tank1 ? 100 : 1}" @click="showGif('tank1')">
      </div>
      <div class="fishButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_fish Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !fish ? 100 : 1}" @click="showGif('fish')">
      </div>
      <div class="catButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_cat Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !cat ? 100 : 1}" @click="showGif('cat')">
      </div>
      <div class="dogButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_dog Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !dog ? 100 : 1}" @click="showGif('dog')">
      </div>
      <div class="puppyButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_puppy Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !puppy ? 100 : 1}" @click="showGif('puppy')">
      </div>
      <div class="goldfishButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_goldfish Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !goldfish ? 100 : 1}" @click="showGif('goldfish')">
      </div>
      <div class="hamsterButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_hamster Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !hamster ? 100 : 1}" @click="showGif('hamster')">
      </div>
      <div class="turtleButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_turtle Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !turtle ? 100 : 1}" @click="showGif('turtle')">
      </div>
      <div class="parrotButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_parrot Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !parrot ? 100 : 1}" @click="showGif('parrot')">
      </div>
      <div class="smallButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_small Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !small ? 100 : 1}" @click="showGif('small')">
      </div>
      <div class="bigButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_big Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !big ? 100 : 1}" @click="showGif('big')">
      </div>
      <div class="kittenButton">
        <img src="../../assets/image/201910H5 Pets_MT/Word/word_kitten Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !kitten ? 100 : 1}" @click="showGif('kitten')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Animals' && this.part === 'part2'">
      <img src="../../assets/image/201910H5 Zoo_MT/Walker_BG/bg_0.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="still_roar">
        <img  src="../../assets/image/201910H5 Zoo_MT/stillObj/still_roar_00.png" v-if="roar1"/>
      </div>
      <div class="crocodile">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/crocodile Comp 1_00.png" v-if="crocodile" @click="walkers&&showGif('crocodile')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/crocodile.gif" style="z-index: 100" v-if="!crocodile"
             @click="showGif('crocodile')">
      </div>
      <div class="elephant">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/elephant Comp 1_00.png" v-if="!walkers&&elephant" @click="showGif('elephant')">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/elephant Comp 1_00.png" v-if="walkers&&splash" @click="showGif('splash')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/elephant.gif" style="z-index: 100" v-if="!splash"
             @click="showGif('splash')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/elephant.gif" style="z-index: 100" v-if="!elephant"
             @click="showGif('elephant')">
      </div>
      <div class="giraffe">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/giraffe Comp 2_00.png" v-if="giraffe" @click="!walkers&&showGif('giraffe')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/giraffe.gif" style="z-index: 100" v-if="!giraffe"
             @click="showGif('giraffe')">
      </div>
      <div class="gorilla">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/gorilla Comp 1_00.png" v-if="gorilla" @click="walkers&&showGif('gorilla')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/gorilla.gif" style="z-index: 100" v-if="!gorilla"
             @click="showGif('gorilla')">
      </div>
      <div class="hippo">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/hippo Comp 1_00.png" v-if="hippo" @click="showGif('hippo')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/hippo.gif" style="z-index: 100" v-if="!hippo"
             @click="showGif('hippo')">
      </div>
      <div class="lion">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/lion Comp 1_00.png" v-if="!walkers&&lion" @click="showGif('lion')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/lion.gif" style="z-index: 100" v-if="!lion"
             @click="showGif('lion')">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/lion Comp 1_00.png" v-if="walkers&&roar1" @click="showGif('roar1')">
      </div>
      <div class="roar1">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/roar.gif" style="z-index: 100" v-if="!roar1"
             @click="showGif('roar1')">
      </div>
      <div class="lizard1">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/lizard Comp 1_00.png" v-if="lizard1" @click="walkers&&showGif('lizard1')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/lizard.gif" style="z-index: 100" v-if="!lizard1"
             @click="showGif('lizard1')">
      </div>
      <div class="monkey">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/monkey Comp 1_00.png" v-if="monkey&&tall" @click="!walkers&&showGif('tall')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/monkey.gif" style="z-index: 100" v-if="!monkey"
             @click="showGif('monkey')">
<!--        <img src="../../assets/image/201910H5 Zoo_MT/PNG/tall Comp 2_00.png" v-if="!walkers&&tall&&monkey" @click="showGif('tall')">-->
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/tall.gif" style="z-index: 100" v-if="!tall"
             @click="showGif('tall')">
      </div>
      <div class="panda">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/panda Comp 1_00.png" v-if="panda" @click="walkers&&showGif('panda')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/panda.gif" style="z-index: 100" v-if="!panda"
             @click="showGif('panda')">
      </div>
      <div class="penguin">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/penguin Comp 1_00.png" v-if="penguin" @click="walkers&&showGif('penguin')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/penguin.gif" style="z-index: 100" v-if="!penguin"
             @click="showGif('penguin')">
      </div>
      <div class="short">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/short Comp 1_00.png" v-if="short" @click="!walkers&&showGif('short')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/short.gif" style="z-index: 100" v-if="!short"
             @click="showGif('short')">
      </div>
      <div class="sleep1">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/sleep 2 Comp 1_00.png" v-if="sleep1" @click="walkers&&showGif('sleep1')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/sleep.gif" style="z-index: 100" v-if="!sleep1"
             @click="showGif('sleep1')">
      </div>
      <div class="snake">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/snake Comp 2_00.png" v-if="snake" @click="walkers&&showGif('snake')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/snake.gif" style="z-index: 100" v-if="!snake"
             @click="showGif('snake')">
      </div>
      <div class="tiger">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/tiger Comp 1_00.png" v-if="tiger" @click="showGif('tiger')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/tiger.gif" style="z-index: 100" v-if="!tiger"
             @click="showGif('tiger')">
      </div>
      <div class="zookeeper">
        <img src="../../assets/image/201910H5 Zoo_MT/PNG/zookeeper Comp 2_00.png" v-if="zookeeper" @click="walkers&&showGif('zookeeper')">
        <img src="../../assets/image/201910H5 Zoo_MT/GIF/zookeeper.gif" style="z-index: 100" v-if="!zookeeper"
             @click="showGif('zookeeper')">
      </div>
      <div class="tallButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_tall Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !tall ? 100 : 1}" @click="showGif('tall')">
      </div>
      <div class="shortButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_short Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !short ? 100 : 1}" @click="showGif('short')">
      </div>
      <div class="monkeyButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_monkey Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !monkey ? 100 : 1}" @click="showGif('monkey')">
      </div>
      <div class="giraffeButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_giraffe Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !giraffe ? 100 : 1}" @click="showGif('giraffe')">
      </div>
      <div class="lionButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_lion Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !lion ? 100 : 1}" @click="showGif('lion')">
      </div>
      <div class="hippoButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_hippo Comp 1_0.png"
             :style="{zIndex: !hippo ? 100 : 1}" @click="showGif('hippo')">
      </div>
      <div class="roar1Button">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_roar Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !roar1 ? 100 : 1}" @click="showGif('roar1')">
      </div>
      <div class="zookeeperButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_zookeeper Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !zookeeper ? 100 : 1}" @click="showGif('zookeeper')">
      </div>
      <div class="penguinButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_penguin Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !penguin ? 100 : 1}" @click="showGif('penguin')">
      </div>
      <div class="snakeButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_snake Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !snake ? 100 : 1}" @click="showGif('snake')">
      </div>
      <div class="splashButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_splash Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !splash ? 100 : 1}" @click="showGif('splash')">
      </div>
      <div class="crocodileButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_crocodile Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !crocodile ? 100 : 1}" @click="showGif('crocodile')">
      </div>
      <div class="sleep1Button">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_sleep Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !sleep1 ? 100 : 1}" @click="showGif('sleep1')">
      </div>
      <div class="pandaButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_panda Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !panda ? 100 : 1}" @click="showGif('panda')">
      </div>
      <div class="lizard1Button">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_lizard Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !lizard1 ? 100 : 1}" @click="showGif('lizard1')">
      </div>
      <div class="gorillaButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_gorilla Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !gorilla ? 100 : 1}" @click="showGif('gorilla')">
      </div>
      <div class="elephantButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_elephant Comp 1_0.png" v-if="!walkers"
             :style="{zIndex: !elephant ? 100 : 1}" @click="showGif('elephant')">
      </div>
      <div class="tigerButton">
        <img src="../../assets/image/201910H5 Zoo_MT/Word/word_tiger Comp 1_0.png"
             :style="{zIndex: !tiger ? 100 : 1}" @click="showGif('tiger')">
      </div>
    </div>
    <div v-else>
    <img src="../../assets/image/H5 Thing/Walker_BG/bg_0.png"
         style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;">
    <!--<img src="../../assets/image/shuzhi.png" style="width: 100%;display:block;position: absolute;">-->
    <div class="mirror">
      <img src="../../assets/image/H5 Thing/PNG/mirror.png" v-if="mirror" @click="showGif('mirror')">
      <img src="../../assets/image/H5 Thing/GIF/mirror.gif" style="z-index: 100" v-if="!mirror&&walkers"
           @click="showGif('mirror')">
    </div>
    <div class="mirrorbutton">
      <img src="../../assets/image/H5 Thing/Word/word_mirror Comp 1_0.png" v-if="walkers"
           :style="{zIndex: !mirror ? 100 : 1}" @click="showGif('mirror')">
    </div>
    <div class="wardrobe">
      <img src="../../assets/image/H5 Thing/PNG/wardrobe.png" v-if="wardrobe" @click="showGif('wardrobe')">
      <img src="../../assets/image/H5 Thing/GIF/wardrobe.gif" style="z-index: 100" v-if="!wardrobe&&walkers"
           @click="showGif('wardrobe')">
    </div>

    <div class="bed">
      <img src="../../assets/image/H5 Thing/PNG/bed.png" v-if="bed" @click="showGif('bed')">
      <img src="../../assets/image/H5 Thing/GIF/bed.gif" style="z-index: 100" v-if="!bed"
           @click="showGif('bed')">
    </div>
    <div class="bedbutton">
      <img src="../../assets/image/H5 Thing/Word/word_bed Comp 1_0.png"
           :style="{zIndex: !bed ? 100 : 1}" @click="showGif('bed')">
    </div>
    <div class="sleep">
      <img src="../../assets/image/H5 Thing/PNG/sleep2.png" v-if="sleep" @click="showGif('sleep')">
      <img src="../../assets/image/H5 Thing/GIF/sleep.gif" style="z-index: 100" v-if="!sleep"
           @click="showGif('sleep')">
    </div>
    <div class="wardrobebutton">
      <img src="../../assets/image/H5 Thing/Word/word_wardrobe_0.png" v-if="walkers"
           :style="{zIndex: !wardrobe ? 100 : 1}" @click="showGif('wardrobe')">
    </div>
    <div class="sleepbutton">
      <img src="../../assets/image/H5 Thing/Word/word_sleep Comp 1_0.png"
           :style="{zIndex: !sleep ? 100 : 1}" @click="showGif('sleep')">
    </div>
    <div class="desk">
      <img src="../../assets/image/H5 Thing/PNG/desk.png" v-if="desk" @click="showGif('desk')">
      <img src="../../assets/image/H5 Thing/GIF/desk.gif" style="z-index: 100" v-if="!desk&&walkers"
           @click="showGif('desk')">
    </div>
    <div class="deskbutton">
      <img src="../../assets/image/H5 Thing/Word/word_ desk Comp 1_0.png" v-if="walkers"
           :style="{zIndex: !desk ? 100 : 1}" @click="showGif('desk')">
    </div>
    <div class="chair">
      <img src="../../assets/image/H5 Thing/Still object/Stillobject_Chair Comp 1_0.png">
    </div>
    <div class="wash">
      <img src="../../assets/image/H5 Thing/PNG/wash.png" v-if="wash" @click="showGif('wash')">
      <img src="../../assets/image/H5 Thing/GIF/wash.gif" style="z-index: 100" v-if="!wash"
           @click="showGif('wash')">
      <img src="../../assets/image/H5 Thing/GIF/sink.gif" style="z-index: 100" v-if="!sink" @click="showGif('sink')">
    </div>
    <div class="washbutton">
      <img src="../../assets/image/H5 Thing/Word/word_wash Comp 1_0.png"  :style="{zIndex: !wash ? 100 : 1}"
           @click="showGif('wash')">
    </div>
    <div class="sink">
      <img src="../../assets/image/H5 Thing/Word/word_sink_0.png" v-if="wash" :style="{zIndex: !sink ? 100 : 1}"
           @click="showGif('sink')">
    </div>
    <div class="toilet"  >
      <img src="../../assets/image/H5 Thing/PNG/toilet.png" v-if="toilet" @click="showGif('toilet')">
      <img src="../../assets/image/H5 Thing/GIF/toilet.gif" style="z-index: 100" v-if="!toilet"
           @click="showGif('toilet')">
    </div>
    <div class="toiletbutton" >
      <img src="../../assets/image/H5 Thing/Word/word_toilet Comp 1_0.png" :style="{zIndex: !toilet ? 100 : 1}"
           @click="showGif('toilet')">
    </div>
    <div class="lamp">
      <img src="../../assets/image/H5 Thing/PNG/lamp.png" v-if="lamp" @click="showGif('lamp')">
      <img src="../../assets/image/H5 Thing/GIF/lamp.gif" style="z-index: 100" v-if="!lamp" @click="showGif('lamp')">
    </div>
    <div class="lampbutton">
      <img src="../../assets/image/H5 Thing/Word/word_lamp Comp 1_0.png" :style="{zIndex: !lamp ? 100 : 1}"
           @click="showGif('lamp')">
    </div>
    <div class="sofa">
      <img src="../../assets/image/H5 Thing/PNG/sofa.png" v-if="sofa" @click="showGif('sofa')">
      <img src="../../assets/image/H5 Thing/GIF/sofa.gif" style="z-index: 100" v-if="!sofa" @click="showGif('sofa')">
    </div>
    <div class="sofabutton">
      <img src="../../assets/image/H5 Thing/Word/word_sofa Comp 1_0.png" :style="{zIndex: !sofa ? 100 : 1}"
           @click="showGif('sofa')">
    </div>
    <div class="phone" >
      <img src="../../assets/image/H5 Thing/Still object/StillObject_table_0.png" class="img2">
      <img src="../../assets/image/H5 Thing/PNG/phone.png" class="img1" v-if="phone" @click="showGif('phone')">
      <img src="../../assets/image/H5 Thing/GIF/phone.gif" class="img1" style="z-index: 100" v-if="!phone"
           @click="showGif('phone')">
    </div>
    <div class="phonebutton" >
      <img src="../../assets/image/H5 Thing/Word/word_phone Comp 1_0.png" :style="{zIndex: !phone ? 100 : 1}"
           @click="showGif('phone')">
    </div>
    <div class="cupboard">
      <img src="../../assets/image/H5 Thing/PNG/cupboard.png" v-if="cupboard" @click="showGif('cupboard')">
      <img src="../../assets/image/H5 Thing/GIF/cupboard.gif" style="z-index: 100" v-if="!cupboard"
           @click="showGif('cupboard')">
    </div>
    <div class="cupboardbutton">
      <img src="../../assets/image/H5 Thing/Word/word_cupboard Comp 1_0.png" v-if="walkers"
           :style="{zIndex: !cupboard ? 100 : 1}" @click="showGif('cupboard')">
    </div>
    </div>
    <!--<transition name="fades">-->
    <!--<div class="contain" v-if="!resume3">-->
    <!--<img src="../../assets/image/prightback.png"  @click="gomemu" class="backbutton"/>-->
    <!--<img src="../../assets/image/phelp.png"  @click="help" class="helpbutton"/>-->
    <!--&lt;!&ndash;<transition name="fade1">&ndash;&gt;-->
    <!--&lt;!&ndash;<div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">&ndash;&gt;-->

    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</transition>&ndash;&gt;-->
    <!--&lt;!&ndash;<transition name="fade1">&ndash;&gt;-->
    <!--&lt;!&ndash;<div v-show="!onef" style="width: 100%; height: 90%;display:block;position: absolute;">&ndash;&gt;-->

    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</transition>&ndash;&gt;-->

    <!--</div>-->
    <!--</transition>-->

    <!--<transition name="fades">-->
    <!--<div class="about" v-if="resume3">-->

    <!--</div>-->
    <!--</transition>-->
  </div>
</template>

<script>

const qs = require('qs');
export default {
    name: "chatwalker",
    data() {
      return {
        word:'',
        mp3:{
          //JULY
          snow:require('../../assets/Flashcard Audio/July/snow.mp3'),
          igloo:require('../../assets/Flashcard Audio/July/igloo.mp3'),
          cold:require('../../assets/Flashcard Audio/July/cold.mp3'),
          polarbear:require('../../assets/Flashcard Audio/July/polar bear.mp3'),
          sled:require('../../assets/Flashcard Audio/July/sled.mp3'),
          seal:require('../../assets/Flashcard Audio/July/seal.mp3'),
          ice:require('../../assets/Flashcard Audio/July/ice.mp3'),
          iceberg:require('../../assets/Flashcard Audio/July/iceberg.mp3'),
          tusk:require('../../assets/Flashcard Audio/July/tusk.mp3'),
          walrus:require('../../assets/Flashcard Audio/July/Walrus.mp3'),
          orca:require('../../assets/Flashcard Audio/July/orca.mp3'),
          blizzard:require('../../assets/Flashcard Audio/July/blizzard.mp3'),
          cactus:require('../../assets/Flashcard Audio/July/cactus.mp3'),
          camel:require('../../assets/Flashcard Audio/July/Camel.mp3'),
          compass:require('../../assets/Flashcard Audio/July/compass.mp3'),
          dunes:require('../../assets/Flashcard Audio/July/dunes.mp3'),
          hot:require('../../assets/Flashcard Audio/July/Hot.mp3'),
          lizard:require('../../assets/Flashcard Audio/July/lizard.mp3'),
          lost:require('../../assets/Flashcard Audio/July/lost.mp3'),
          map:require('../../assets/Flashcard Audio/July/Map.mp3'),
          sand:require('../../assets/Flashcard Audio/July/Sand.mp3'),
          sandstorm:require('../../assets/Flashcard Audio/July/sandstorm.mp3'),
          thirsty:require('../../assets/Flashcard Audio/July/thirsty.mp3'),
          water:require('../../assets/Flashcard Audio/July/water.mp3'),
          //JUNE
          castle:require('../../assets/Flashcard Audio/June/Castle.mp3'),
          dragon:require('../../assets/Flashcard Audio/June/dragon.mp3'),
          horse:require('../../assets/Flashcard Audio/June/Horse.mp3'),
          king:require('../../assets/Flashcard Audio/June/King.mp3'),
          knight:require('../../assets/Flashcard Audio/June/knight.mp3'),
          princess:require('../../assets/Flashcard Audio/June/princess.mp3'),
          queen:require('../../assets/Flashcard Audio/June/Queen.mp3'),
          roar:require('../../assets/Flashcard Audio/June/roar.mp3'),
          scream:require('../../assets/Flashcard Audio/June/scream.mp3'),
          shield:require('../../assets/Flashcard Audio/June/Shield.mp3'),
          sword:require('../../assets/Flashcard Audio/June/sword.mp3'),
          tower:require('../../assets/Flashcard Audio/June/tower.mp3'),
          elf:require('../../assets/Flashcard Audio/June/elf.mp3'),
          fairy:require('../../assets/Flashcard Audio/June/fairy.mp3'),
          forest:require('../../assets/Flashcard Audio/June/forest.mp3'),
          giant:require('../../assets/Flashcard Audio/June/giant.mp3'),
          laugh:require('../../assets/Flashcard Audio/June/Laugh.mp3'),
          mermaid:require('../../assets/Flashcard Audio/June/mermaid.mp3'),
          unicorn:require('../../assets/Flashcard Audio/June/unicorn.mp3'),
          wand:require('../../assets/Flashcard Audio/June/Wand.mp3'),
          wave:require('../../assets/Flashcard Audio/June/Wave.mp3'),
          wing:require('../../assets/Flashcard Audio/June/Wings.mp3'),
          witch:require('../../assets/Flashcard Audio/June/Witch.mp3'),
          wizard:require('../../assets/Flashcard Audio/June/Wizard.mp3'),
          //AUGUST
          acrobat:require('../../assets/Flashcard Audio/august/Acrobat.mp3'),
          blow:require('../../assets/Flashcard Audio/august/blow.mp3'),
          cheer:require('../../assets/Flashcard Audio/august/cheer.mp3'),
          clown:require('../../assets/Flashcard Audio/august/clown.mp3'),
          crowd:require('../../assets/Flashcard Audio/august/crowd.mp3'),
          dive:require('../../assets/Flashcard Audio/august/Dive.mp3'),
          flippers:require('../../assets/Flashcard Audio/august/flippers.mp3'),
          juggle:require('../../assets/Flashcard Audio/august/Juggle.mp3'),
          lifeJacket:require('../../assets/Flashcard Audio/august/life jacket.mp3'),
          magician:require('../../assets/Flashcard Audio/august/magician.mp3'),
          mask:require('../../assets/Flashcard Audio/august/Mask.mp3'),
          net:require('../../assets/Flashcard Audio/august/Net.mp3'),
          sail:require('../../assets/Flashcard Audio/august/sail.mp3'),
          sailboat:require('../../assets/Flashcard Audio/august/sailboat.mp3'),
          surf:require('../../assets/Flashcard Audio/august/Surf.mp3'),
          surfboard:require('../../assets/Flashcard Audio/august/surfboard.mp3'),
          tank:require('../../assets/Flashcard Audio/august/Tank.mp3'),
          tent:require('../../assets/Flashcard Audio/august/tent.mp3'),
          tightrope:require('../../assets/Flashcard Audio/august/tightrope.mp3'),
          trick:require('../../assets/Flashcard Audio/august/trick.mp3'),
          unicycle:require('../../assets/Flashcard Audio/august/unicycle.mp3'),
          watch:require('../../assets/Flashcard Audio/august/watch.mp3'),
          waves:require('../../assets/Flashcard Audio/august/waves.mp3'),
          wind:require('../../assets/Flashcard Audio/august/wind.mp3'),
          //September
          desk2:require('../../assets/Flashcard Audio/september/Desk.mp3'),
          backpack:require('../../assets/Flashcard Audio/september/Backpack.mp3'),
          blackboard:require('../../assets/Flashcard Audio/september/board.mp3'),
          book:require('../../assets/Flashcard Audio/september/book.mp3'),
          chair:require('../../assets/Flashcard Audio/september/chair.mp3'),
          clock:require('../../assets/Flashcard Audio/september/Clock.mp3'),
          crayons:require('../../assets/Flashcard Audio/september/crayons.mp3'),
          eraser:require('../../assets/Flashcard Audio/september/eraser.mp3'),
          listen:require('../../assets/Flashcard Audio/september/listen.mp3'),
          pencil:require('../../assets/Flashcard Audio/september/Pencil.mp3'),
          read:require('../../assets/Flashcard Audio/september/read.mp3'),
          sit:require('../../assets/Flashcard Audio/september/sit.mp3'),
          teacher:require('../../assets/Flashcard Audio/september/teacher.mp3'),
          write:require('../../assets/Flashcard Audio/september/write.mp3'),
          ball:require('../../assets/Flashcard Audio/september/ball.mp3'),
          bell:require('../../assets/Flashcard Audio/september/Bell.mp3'),
          climb:require('../../assets/Flashcard Audio/september/climb.mp3'),
          junglegym:require('../../assets/Flashcard Audio/september/jungle gym.mp3'),
          kick:require('../../assets/Flashcard Audio/september/Kick.mp3'),
          lineup:require('../../assets/Flashcard Audio/september/line up.mp3'),
          playground:require('../../assets/Flashcard Audio/september/playground.mp3'),
          ring:require('../../assets/Flashcard Audio/september/Ring.mp3'),
          run:require('../../assets/Flashcard Audio/september/run.mp3'),
          seesaw:require('../../assets/Flashcard Audio/september/seesaw.mp3'),
          slide:require('../../assets/Flashcard Audio/september/slide.mp3'),
          snack:require('../../assets/Flashcard Audio/september/Snack.mp3'),
          swing:require('../../assets/Flashcard Audio/september/swing.mp3'),
          toys:require('../../assets/Flashcard Audio/september/Toys.mp3'),
          //October
          big:require('../../assets/Flashcard Audio/october/Big.mp3'),
          bird:require('../../assets/Flashcard Audio/october/bird.mp3'),
          brush:require('../../assets/Flashcard Audio/october/brush.mp3'),
          cage:require('../../assets/Flashcard Audio/october/Cage.mp3'),
          cat:require('../../assets/Flashcard Audio/october/Cat.mp3'),
          crocodile:require('../../assets/Flashcard Audio/october/crocodile.mp3'),
          dog:require('../../assets/Flashcard Audio/october/Dog.mp3'),
          elephant:require('../../assets/Flashcard Audio/october/Elephant.mp3'),
          feed:require('../../assets/Flashcard Audio/october/feed.mp3'),
          fish:require('../../assets/Flashcard Audio/october/Fish.mp3'),
          giraffe:require('../../assets/Flashcard Audio/october/giraffe.mp3'),
          goldfish:require('../../assets/Flashcard Audio/october/Goldfish.mp3'),
          gorilla:require('../../assets/Flashcard Audio/october/Gorilla.mp3'),
          hamster:require('../../assets/Flashcard Audio/october/Hamster.mp3'),
          hippo:require('../../assets/Flashcard Audio/october/Hippo.mp3'),
          kitten:require('../../assets/Flashcard Audio/october/Kitten.mp3'),
          lion:require('../../assets/Flashcard Audio/october/Lion.mp3'),
          lizard1:require('../../assets/Flashcard Audio/october/lizard.mp3'),
          monkey:require('../../assets/Flashcard Audio/october/Monkey.mp3'),
          panda:require('../../assets/Flashcard Audio/october/Panda.mp3'),
          parrot:require('../../assets/Flashcard Audio/october/parrot.mp3'),
          penguin:require('../../assets/Flashcard Audio/october/Penguin.mp3'),
          puppy:require('../../assets/Flashcard Audio/october/Puppy.mp3'),
          roar1:require('../../assets/Flashcard Audio/october/roar.mp3'),
          short:require('../../assets/Flashcard Audio/october/short.mp3'),
          sleep1:require('../../assets/Flashcard Audio/october/Sleep.mp3'),
          small:require('../../assets/Flashcard Audio/october/small.mp3'),
          splash:require('../../assets/Flashcard Audio/october/splash.mp3'),
          snake:require('../../assets/Flashcard Audio/october/Snake.mp3'),
          tall:require('../../assets/Flashcard Audio/october/Tall.mp3'),
          tank1:require('../../assets/Flashcard Audio/october/Tank.mp3'),
          tiger:require('../../assets/Flashcard Audio/october/Tiger.mp3'),
          turtle:require('../../assets/Flashcard Audio/october/turtle.mp3'),
          zookeeper:require('../../assets/Flashcard Audio/october/zookeeper.mp3'),
        },
        cardType:'default',
        crocodile:true,
        elephant:true,
        giraffe:true,
        gorilla:true,
        hippo:true,
        lion:true,
        lizard1:true,
        monkey:true,
        panda:true,
        penguin:true,
        roar1:true,
        short:true,
        sleep1:true,
        snake:true,
        splash:true,
        tall:true,
        tiger:true,
        zookeeper:true,
        dog:true,
        cat:true,
        big:true,
        bird:true,
        brush:true,
        cage:true,
        feed:true,
        fish:true,
        goldfish:true,
        hamster:true,
        kitten:true,
        parrot:true,
        puppy:true,
        small:true,
        tank1:true,
        turtle:true,
        ball:true,
        bell:true,
        climb:true,
        junglegym:true,
        kick:true,
        lineup:true,
        playground:true,
        ring:true,
        run:true,
        seesaw:true,
        slide:true,
        snack:true,
        swing:true,
        toys:true,
        backpack:true,
        blackboard:true,
        book:true,
        chair:true,
        clock:true,
        crayons:true,
        desk2:true,
        eraser:true,
        listen:true,
        pencil:true,
        read:true,
        sit:true,
        teacher:true,
        write:true,
        elf:true,
        fairy:true,
        forest:true,
        giant:true,
        laugh:true,
        mermaid:true,
        tower:true,
        unicorn:true,
        wand:true,
        wave:true,
        wing:true,
        witch:true,
        acrobat:true,
        cheer:true,
        clown:true,
        crowd:true,
        juggle:true,
        magician:true,
        net:true,
        tent:true,
        tightrope:true,
        trick:true,
        unicycle:true,
        watch:true,
        blow:true,
        dive:true,
        flippers:true,
        lifeJacket:true,
        mask:true,
        sail:true,
        sailboat:true,
        surf:true,
        surfboard:true,
        tank:true,
        waves:true,
        wind:true,
        castle:true,
        dragon:true,
        dragongif:true,
        horse:true,
        king:true,
        knight:true,
        knightgif:true,
        princess:true,
        princessgif:true,
        queen:true,
        roar:true,
        scream:true,
        shield:true,
        shieldgif:true,
        sword:true,
        wizard:true,
        snow:true,
        igloo:true,
        cold:true,
        polarbear:true,
        seal:true,
        sled:true,
        ice:true,
        tusk:true,
        walrus:true,
        iceberg:true,
        orca:true,
        blizzard:true,
        cactus:true,
        camel:true,
        compass:true,
        dunes:true,
        hot:true,
        lizard:true,
        lost:true,
        map:true,
        sand:true,
        shovel:true,
        thirsty:true,
        water:true,
        mirror: true,
        wardrobe: true,
        bed: true,
        desk: true,
        sleep: true,
        wash: true,
        sink: true,
        toilet: true,
        lamp: true,
        sofa: true,
        phone: true,
        cupboard: true,
        walkers: true,
        level: '',
        part: '',
        popp: false,
        spanp: '',
        ruleimg8: false,
        ruleimg10: false,
        ruleimg4: false,
        ruleimg15: false,
        ruleimg25: false,
        ruleimg12: false,
        countpage: 1,
        shownumb: false,
        duration: 0,
        fisrtanswer: false,
        question: 1,
        zhezhao: false,
        list1: [],
        truesound: '',
        onef: true,
        fade: 'fade',
        levels: 0,
        flag2: true,
        video: false,
        soundsWrong: false,
        soundscorrect: false,
        show: true,
        resume3: false,
        id: '',
        page: this.page++,
        account: 0,
        unitsId: '',
        allquestion: 10,
        unit: '',
        menuId: '',
        listG: [],
        type: 'chatwalker',
        sum: 0,
        score: "",
        issuccess: true,
        issuccess2: false,
        issuccess1: false,
        canvasObj: null,
        canvasH: null,
        context: {},
        pic: "",
        questionsize: 0,
        url: '/phonics/phonics',
        canvasMoveUse: true,
        centerP: [], // 存储数组图片中心点的位置
        // 配置参数
        config: {
          lineWidth: 3,
          lineColor: "#44ccc2",
          shadowBlur: 1
        },
        gamename: '',
        timeurl: '/user/playTime',
        courseId:'',
        levelsId:'',
        style:'',
        cources:'',
      }
    },
    created() { //生命周期里接收参数
      console.log(this.$route.query);
      this.pic = this.$axios.defaults.baseURL2;
      this.unit = this.$route.query.unit;
      this.courseId = this.$route.query.courseId;
      this.levelsId = this.$route.query.levelsId;
      this.level = this.$route.query.level;
      this.style = this.$route.query.style;
      this.cources = this.$route.query.cources;
      this.part = this.$route.query.part;
      // localStorage.setItem('gamename', this.gamename);
      if (this.level === "WALKERS") {
        this.walkers = false;
      } else if (this.level === "RUNNERS") {
        this.walkers = true;
      }
      // var timestamp = (new Date()).getTime();
      // localStorage.setItem('startTimeid', timestamp);
      if (localStorage.getItem('gamemusic') === "false") {
        this.show = false;
      } else {
        this.show = true;
        const audio = document.getElementById('music');
        audio.pause();
      }

      // 统计时间
      // this.$axios.post(this.timeurl, qs.stringify({
      //   id: timestamp,
      //   time: timestamp,
      //   name: this.gamename,
      //   studentId: localStorage.getItem('studentId')
      // })).then(res => {
      //   // console.log(res.data);
      // }, res => {
      //   alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      // });


      if (window.history && window.history.pushState) {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.gomemu, false);
      }
      document.body.addEventListener('touchmove', this.bodyScroll, {passive: false});
    },
    mounted() {

    },
    destroyed() {
      document.body.removeEventListener('touchmove', this.bodyScroll, {passive: false});
      window.removeEventListener('popstate', this.gomemu, false);
    },
    methods: {

      //点击播放动画
      async showGif(name){
        if (name===undefined || this.word){
          this.zhezhao = !this.zhezhao;
          this.$data[this.word]=!this.$data[this.word];
          this.word=null;
        }else {
          this.word=name;
          let audio = new Audio();
          this.$data[this.word]=!this.$data[this.word];
          this.zhezhao = !this.zhezhao;
          audio.src=this.$data.mp3[this.word];
          if(this.word){
            await audio.play();
          }
        }
      },
      bodyScroll(event) {
        event.preventDefault();
      },

      changesett() {
        if (this.onef === false) {
          setTimeout(() => {
            this.resume3 = !this.resume3;

          }, 1000);
        }
      },

      // help() {
      //   if (this.onef == false) {
      //     this.spanp = "Listen to the word and circle the correct letter.";
      //     this.popp = !this.popp;
      //     if (this.list1[0].rank == 0) {
      //       this.ruleimg8 = true;
      //       this.ruleimg10 = false;
      //     } else if (this.list1[0].rank == 1) {
      //       this.ruleimg8 = false;
      //       this.ruleimg10 = true;
      //     }
      //   }
      // },
      gomemu() {
        // var endtimestamp = (new Date()).getTime();
        // this.$axios.post(this.timeurl, qs.stringify({
        //   id: localStorage.getItem('startTimeid'),
        //   time: endtimestamp,
        //   name: this.gamename,
        //   studentId: localStorage.getItem('studentId')
        // })).then(res => {
        //   localStorage.setItem('startTimeid', '');
        //   localStorage.setItem('gamename', '');
        // }, res => {
        //   alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        // });

        this.$router.push({ //核心语句
          path: '/flashcard', //跳转的路径
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

      sound() {
        this.show = !this.show;
        if (this.show === false) {
          // this.$refs.MusicPlay.pause();
          localStorage.setItem("gamemusic", "false");
        } else {
          // this.$refs.MusicPlay.play();
          localStorage.setItem("gamemusic", "true");
        }
      }
    },
    watch: {
      'onef': function (newVal) {
        if (this.onef === true) {
          setTimeout(() => {
            this.onef = false;
            this.zhezhao = false;
            // this.video=true;
          }, 2000);

        }
      },
      'video': function (newVal) {
        if (this.video === true) {
          this.$refs.videos.play();
          setTimeout(() => {
            this.$refs.videos.pause();
            this.video = false;
          }, this.duration * 1000);
        }
      },

    }
  };
</script>

<style scoped lang="less">
  * {
    margin: 0;
    box-sizing: border-box;
  }

  .body {
    padding: 0;
  }

  .chatwalker {
    width: 100%;
    height: 100%;
    /*background-image: url("http://107.150.121.34/monkeytowerHK/image/img/phonicsbg.png");*/
    /*background-color: #204900;*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    position: absolute;
    display: flex;
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

  .crocodile img {
    width: 18%;
    left: 63%;
    top: 87%;
    position: absolute;
  }

  .roar1 img {
    width: 25%;
    left: 5%;
    top: -0.5%;
    position: absolute;
  }

  .zookeeperButton img {
    width: 8%;
    left: 22%;
    top: 36%;
    position: absolute;
  }

  .penguinButton img {
    width: 7%;
    left: 28%;
    top: 65%;
    position: absolute;
  }
  .snakeButton img {
    width: 7%;
    left: 56%;
    top: 81%;
    position: absolute;
  }
  .splashButton img {
    width: 7%;
    left: 59%;
    top: 56%;
    position: absolute;
  }
  .crocodileButton img {
    width: 8%;
    left: 82%;
    top: 91%;
    position: absolute;
  }
  .hippoButton img {
    width: 5%;
    left: 19%;
    top: 87%;
    position: absolute;
  }
  .pandaButton img {
    width: 6%;
    left: 69%;
    top: 37%;
    position: absolute;
  }
  .tallButton img {
    width: 5%;
    left: 19%;
    top: 87%;
    position: absolute;
  }

  .gorillaButton img {
    width: 6%;
    left: 88%;
    top: 39%;
    position: absolute;
  }
  .lizard1Button img {
    width: 6%;
    left: 73%;
    top: 9%;
    position: absolute;
  }
  .sleep1Button img {
    width: 6%;
    left: 42%;
    top: 46%;
    position: absolute;
  }
  .roar1Button img {
    width: 5%;
    left: 17%;
    top: 22%;
    position: absolute;
  }


  .shortButton img {
    width: 6%;
    left: 32%;
    top: 87%;
    position: absolute;
  }

  .monkeyButton img {
    width: 7%;
    left: 26%;
    top: 66%;
    position: absolute;
  }

  .giraffeButton img {
    width: 7%;
    left: 3%;
    top: 43%;
    position: absolute;
  }

  .lionButton img {
    width: 5%;
    left: 16%;
    top: 27%;
    position: absolute;
  }

  .hippoButton img {
    width: 7%;
    left: 85%;
    top: 61%;
    position: absolute;
  }

  .elephantButton img {
    width: 8%;
    left: 71%;
    top: 47%;
    position: absolute;
  }

  .tigerButton img {
    width: 5%;
    left: 50%;
    top: 14%;
    position: absolute;
  }

  .elephant img {
    width: 39%;
    left: 57%;
    top: 36%;
    position: absolute;
  }

  .still_roar img {
    width: 12%;
    left: 16%;
    top: 0%;
    position: absolute;
  }

  .giraffe img {
    width: 12%;
    left: 0%;
    top: 47%;
    position: absolute;
    z-index: 1;
  }

  .gorilla img {
    width: 16%;
    left: 84%;
    top: 6%;
    position: absolute;
  }

  .hippo img {
    width: 18%;
    left: 78%;
    top: 67%;
    position: absolute;
  }

  .lion img {
    width: 12%;
    left: 5%;
    top: -1%;
    position: absolute;
  }

  .lizard1 img {
    width: 7%;
    left: 77%;
    top: 11%;
    position: absolute;
  }

  .monkey img {
    width: 18%;
    left: 7%;
    top: 35%;
    position: absolute;
  }

  .panda img {
    width: 18%;
    left: 57%;
    top: 15%;
    position: absolute;
  }

  .penguin img {
    width: 7%;
    left: 28%;
    top: 47%;
    position: absolute;
  }


  .short img {
    width: 13%;
    left: 21%;
    top: 69%;
    position: absolute;
  }

  .sleep1 img {
    width: 22%;
    left: 46%;
    top: 23%;
    position: absolute;
  }

  .snake img {
    width: 10%;
    left: 47%;
    top: 80%;
    position: absolute;
  }


  .tiger img {
    width: 16%;
    left: 35%;
    top: 1%;
    position: absolute;
  }

  .zookeeper img {
    width: 7%;
    left: 30%;
    top: 19%;
    position: absolute;
  }

  .big img {
    width: 18%;
    left: 13%;
    top: 74%;
    position: absolute;
  }

  .hamster img {
    width: 20%;
    left: 79.5%;
    top: 72%;
    position: absolute;
  }

  .fish img {
    width: 20%;
    left: 53.5%;
    top: 72%;
    position: absolute;
    z-index: 1;
  }

  .turtle img{
    width: 15%;
    left: 81%;
    top: 48%;
    position: absolute;
  }

  .kitten img {
    width: 30%;
    left: 59%;
    top: 36%;
    position: absolute;
  }

  .tank1 img {
    width: 28%;
    left: 32%;
    top: 59%;
    position: absolute;
  }

  .small img {
    width: 11%;
    left: 3%;
    top: 76%;
    position: absolute;
  }

  .bird img {
    width: 6%;
    left: 83%;
    top: 9%;
    position: absolute;
  }

  .brush img {
    width: 16%;
    left: 4%;
    top: 21%;
    position: absolute;
  }

  .cage img {
    width: 13%;
    left: 46%;
    top: -2%;
    position: absolute;
  }

  .feed img {
    width: 16%;
    left: 30%;
    top: 16%;
    position: absolute;
  }

  .puppy img {
    width: 16%;
    left: 16%;
    top: 27%;
    position: absolute;
  }

  .parrot img{
    width: 11%;
    left: 68%;
    top: 6%;
    position: absolute;
  }

  .parrot img{
    width: 11%;
    left: 68%;
    top: 6%;
    position: absolute;
  }

  .feedButton img {
    width: 6%;
    left: 29%;
    top: 15%;
    position: absolute;
  }

  .brushButton img {
    width: 6%;
    left: 24%;
    top: 23%;
    position: absolute;
  }

  .cageButton img {
    width: 6%;
    left: 50%;
    top: 24%;
    position: absolute;
  }

  .birdButton img {
    width: 6%;
    left: 83%;
    top: 26%;
    position: absolute;
  }

  .tankButton img{
    width: 11%;
    left: 68%;
    top: 6%;
    position: absolute;
  }

  .fishButton img {
    width: 5%;
    left: 48%;
    top: 87%;
    position: absolute;
  }

  .catButton img {
    width: 6%;
    left: 56%;
    top: 45%;
    position: absolute;
  }

  .kittenButton img {
    width: 6%;
    left: 56%;
    top: 45%;
    position: absolute;
  }

  .dogButton img {
    width: 6%;
    left: 12%;
    top: 48%;
    position: absolute;
  }

  .puppyButton img {
    width: 6%;
    left: 12%;
    top: 48%;
    position: absolute;
  }

  .turtleButton img {
    width: 5%;
    left: 85%;
    top: 43%;
    position: absolute;
  }

  .goldfishButton img {
    width: 7%;
    left: 69%;
    top: 91%;
    position: absolute;
  }

  .hamsterButton img {
    width: 7%;
    left: 86%;
    top: 67%;
    position: absolute;
  }

  .parrotButton img {
    width: 6%;
    left: 72%;
    top: 26%;
    position: absolute;
  }

  .smallButton img {
    width: 6%;
    left: 11%;
    top: 68%;
    position: absolute;
  }

  .bigButton img {
    width: 5%;
    left: 22%;
    top: 70%;
    position: absolute;
  }

  .tank1Button img {
    width: 5.5%;
    left: 36%;
    top: 87%;
    position: absolute;
  }

  .climb img {
    width: 27%;
    left: 30%;
    top: 22%;
    position: absolute;
  }

  .lineup img {
    width: 25%;
    left: 2%;
    top: 62%;
    position: absolute;
  }

  .ball img {
    width: 27%;
    left: 30%;
    top: 22%;
    position: absolute;
  }

  .ball img {
    width: 27%;
    left: 30%;
    top: 22%;
    position: absolute;
  }


  .ring img {
    width: 15%;
    left: 14%;
    top: 19%;
    position: absolute;
    z-index: 2;
  }

  .run img {
    width: 9%;
    left: 59%;
    top: 57%;
    position: absolute;
    z-index: 1;
  }

  .bgBoy img {
    width: 5%;
    left: 36%;
    top: 38%;
    position: absolute;
  }

  .seesaw img {
    width: 26%;
    left: 4%;
    top: 38%;
    position: absolute;
    z-index: 1;
  }

  .slide img {
    width: 41%;
    left: 23%;
    top: 49%;
    position: absolute;
  }

  .snack img {
    width: 10%;
    left: 78%;
    top: 60%;
    position: absolute;
    z-index: 1;
  }

  .kick img {
    width: 15%;
    left: 69%;
    top: 72%;
    position: absolute;
  }

  .playground img {
    width: 100%;
    left: 0.5%;
    top: 0%;
    height: 100%;
    position: absolute;
  }

  .toys img {
    width: 14%;
    left: 80%;
    top: 59%;
    position: absolute;
  }

  .swing img {
    width: 39%;
    left: 61%;
    top: -1%;
    position: absolute;
  }

  .lineupButton img {
    width: 8%;
    left: 27%;
    top: 82%;
    position: absolute;
  }

  .slideButton img {
    width: 7%;
    left: 46%;
    top: 58%;
    position: absolute;
  }

  .kickButton img {
    width: 8%;
    left: 81%;
    top: 82%;
    position: absolute;
  }

  .snackButton img {
    width: 8%;
    left: 71%;
    top: 61%;
    position: absolute;
  }

  .swingButton img {
    width: 8%;
    left: 82%;
    top: 37%;
    position: absolute;
  }

  .runButton img {
    width: 6%;
    left: 50%;
    top: 70%;
    position: absolute;
  }

  .climbButton img {
    width: 8%;
    left: 57%;
    top: 35%;
    position: absolute;
  }

  .playgroundButton img {
    width: 10%;
    left: 72%;
    top: 18%;
    position: absolute;
  }

  .ballButton img {
    width: 7%;
    left: 64%;
    top: 85%;
    position: absolute;
  }

  .seesawButton img {
    width: 8%;
    left: 31%;
    top: 41%;
    position: absolute;
  }

  .bellButton img {
    width: 5%;
    left: 23%;
    top: 15%;
    position: absolute;
  }

  .ringButton img {
    width: 6%;
    left: 8%;
    top: 22%;
    position: absolute;
  }

  .toysButton img {
    width: 6%;
    left: 93%;
    top: 71%;
    position: absolute;
  }

  .junglegymButton img {
    width: 9%;
    left: 39%;
    top: 21%;
    position: absolute;
  }

  .stillobj_0 img {
    width: 30%;
    left: 70%;
    top: 62%;
    position: absolute;
  }

  .stillobj_boy_0 img {
    width: 20%;
    left: 57%;
    top: 58%;
    position: absolute;
  }

  .chair1 img {
    width: 20%;
    left: 58%;
    top: 59%;
    position: absolute;
  }

  .chair2 img {
    width: 20%;
    left: 58%;
    top: 58%;
    position: absolute;
    z-index: -1;
  }

  .desk2 img {
    width: 26.5%;
    left: 63.8%;
    height: 47%;
    top: 55%;
    position: absolute;
    z-index: -1;
  }

  .crayons img {
    width: 5%;
    left: 80%;
    top: 61%;
    position: absolute;
  }

  .crayonsbutton img {
    width: 8%;
    top: 72%;
    left: 71%;
    position: absolute;
  }

  .sitbutton img {
    width: 6%;
    top: 44%;
    left: 10%;
    position: absolute;
  }

  .chairbutton img {
    width: 8%;
    top: 83%;
    left: 48%;
    position: absolute;
  }

  .book img {
    width: 12%;
    left: 75%;
    top: 39%;
    position: absolute;
    z-index: 2;
  }

  .bookbutton img {
    width: 7%;
    top: 49%;
    left: 71%;
    position: absolute;
  }

  .eraser img {
    width: 4%;
    left: 55%;
    top: 49%;
    position: absolute;
  }

  .eraserbutton img {
    width: 8%;
    top: 44%;
    left: 53%;
    position: absolute;
  }

  .pencil img {
    width: 7%;
    left: 36%;
    height: 9%;
    top: 47%;
    position: absolute;
  }

  .pencilbutton img {
    width: 8%;
    top: 42%;
    left: 36%;
    position: absolute;
  }

  .read img {
    width: 19%;
    left: 15%;
    top: 33%;
    position: absolute;
  }

  .readbutton img {
    width: 8%;
    top: 42%;
    left: 9%;
    position: absolute;
  }

  .clock img {
    width: 7%;
    left: 29%;
    top: 6%;
    position: absolute;
  }

  .clockbutton img {
    width: 8%;
    top: 13%;
    left: 19%;
    position: absolute;
  }

  .listen img {
    width: 17%;
    left: 36%;
    top: 44%;
    position: absolute;
  }

  .listenbutton img {
    width: 8%;
    top: 71%;
    left: 47%;
    position: absolute;
  }

  .backpack img {
    width: 7%;
    left: 36%;
    top: 58%;
    position: absolute;
    z-index: 1;
  }

  .backpackbutton img {
    width: 10%;
    top: 82%;
    left: 32%;
    position: absolute;
  }

  .write img {
    width: 31%;
    left: 63%;
    height: 54%;
    top: 7%;
    transform: rotate(1deg);
    position: absolute;
    z-index: 1;
  }

  .writebutton img {
    width: 7%;
    top: 2%;
    left: 84%;
    position: absolute;
  }

  .desk2button img {
    width: 7%;
    top: 53%;
    left: 84%;
    position: absolute;
  }

  .teacherbutton img {
    width: 8%;
    top: 12%;
    left: 55%;
    position: absolute;
  }

  .board img {
    width: 49%;
    left: 53%;
    top: -4%;
    position: absolute;
  }

  .blackboardbutton img {
    width: 8%;
    top: 29%;
    left: 81%;
    position: absolute;
  }

  .backbutton {
    // display: block;
    z-index: 101;
    width: 6%;
    position: fixed;
    left: 15px;
    top: 15px;
  }

  .helpbutton {
    z-index: 101;
    width: 6%;
    position: fixed;
    right: 15px;
    top: 15px;
  }

  .contain {
    width: 100%;
    height: 100%;
    position: relative;
    display: contents;
    overflow: hidden;
  }

  .mirror {
    height: 40%;
    width: 10%;
    top: 0;
    position: absolute;

    img {
      width: 55%;
      top: 50%;
      left: 40%;
      position: absolute;
    }
  }

  .mirrorbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 0%;
      left: 5%;
      position: absolute;
    }
  }

  .tower{
    width: 20%;
    left:1.4%;
    top:17.5%;
    position: absolute;
    z-index:1;
  }

  .giant img {
    width: 35%;
    top: 35%;
    left: 3%;
    position: absolute;
  }

  .tower1 img {
    width: 11%;
    top: 18%;
    left: 3%;
    position: absolute;
  }

  .wavebutton img {
    width: 7%;
    top: 58%;
    left: 55%;
    position: absolute;
  }

  .giantbutton img{
    width: 8%;
    top: 73%;
    left: 9%;
    position: absolute;
  }

  .laughbutton img {
    width: 8%;
    top: 62%;
    left: 2%;
    position: absolute;
  }

  .fairybutton img {
    width: 8%;
    top: 73%;
    left: 46%;
    position: absolute;
  }

  .wingbutton img{
    width: 8%;
    top: 35%;
    left: 42%;
    position: absolute;
  }

  .unicornbutton img {
    width: 9%;
    top: 56%;
    left: 82%;
    position: absolute;
  }

  .elfbutton img{
    width: 6%;
    top: 41%;
    left: 64%;
    position: absolute;
  }

  .forestbutton img {
    width: 9%;
    top: 15%;
    left: 71%;
    position: absolute;
  }

  .witchbutton img {
    width: 8%;
    top: 24%;
    left: 13%;
    position: absolute;
  }

  .wandbutton img {
    width: 8%;
    top: 13%;
    left: 39%;
    position: absolute;
  }

  .mermaidbutton img {
    width: 10%;
    top: 82%;
    left: 64%;
    position: absolute;
  }

  .tower1button img {
    width: 8%;
    top: 10%;
    left: 8%;
    position: absolute;
  }

  .mermaid img {
    width: 20%;
    top: 56%;
    left: 73%;
    position: absolute;
  }

  .fairy img {
    width: 23%;
    top: 40%;
    left: 30%;
    position: absolute;
  }

  .unicorn img {
    width: 16%;
    top: 42%;
    left: 67%;
    position: absolute;
    z-index: 1;
  }

  .wave img {
    width: 11%;
    top: 40%;
    left: 59%;
    position: absolute;
    z-index: 1;
  }

  .forest img {
    width: 45%;
    top: 4%;
    left: 55%;
    position: absolute;
  }

  .witch img {
    width: 18%;
    top: 12%;
    left: 19%;
    position: absolute;
  }

  .clown img{
    width: 19%;
    top: 48%;
    left: 21%;
    position: absolute;
  }
  .crowd img {
    width: 30.5%;
    top: 24%;
    left: 8%;
    position: absolute;
  }

  .clownbutton img {
    width: 7%;
    top: 65%;
    left: 33%;
    position: absolute;
  }

  .acrobat img {
    width: 20%;
    top: -15%;
    left: 61%;
    position: absolute;
  }

  .acrobatbutton img{
    width: 8%;
    top: 13%;
    left: 81%;
    position: absolute;
  }

  .cheer img {
    width: 32.7%;
    top: 31.05%;
    left: 4%;
    position: absolute;
  }

  .cheerbutton img {
    width: 7%;
    top: 56%;
    left: 12%;
    position: absolute;
  }

  .juggle img {
    width: 17%;
    top: 46%;
    left: 65%;
    position: absolute;
  }

  .jugglebutton img {
    width: 7%;
    top: 72%;
    left: 64%;
    position: absolute;
  }

  .trick img{
    width: 23%;
    top: 36%;
    left: 42%;
    position: absolute;
  }

  .trickbutton img {
    width: 6%;
    top: 62%;
    left: 56%;
    position: absolute;
  }

  .tent img {
    width: 38%;
    top: -2%;
    left: 0%;
    transform: rotate(-5deg);
    position: absolute;
    z-index: 1;
  }

  .tentbutton img {
    width: 6%;
    top: 27%;
    left: 9%;
    position: absolute;
  }

  .net img {
    width: 64%;
    top: 14%;
    left: 41.5%;
    position: absolute;
  }

  .netbutton img {
    width: 5%;
    top: 24%;
    left: 65%;
    position: absolute;
  }

  .tightrope img {
    width: 80%;
    top: -6%;
    left: -7%;
    position: absolute;
  }

  .tightropebutton img {
    width: 7%;
    top: 11%;
    left: 46%;
    position: absolute;
  }

  .watch img {
    width: 29.5%;
    top: 33.4%;
    left: 74%;
    position: absolute;
  }

  .watchbutton img {
    width: 7%;
    top: 54%;
    left: 84%;
    position: absolute;
  }

  .unicyclebutton img {
    width: 8%;
    top: 80%;
    left: 19%;
    position: absolute;
  }

  .crowdbutton img {
    width: 7%;
    top: 38%;
    left: 34%;
    position: absolute;
  }

  .magicianbutton img {
    width: 8%;
    top: 44%;
    left: 44%;
    position: absolute;
  }
  .blow img{
    width: 40%;
    top: 10%;
    left: 58%;
    position: absolute;
    z-index: 1;
  }

  .blowbutton img {
    width: 6%;
    top: 50%;
    left: 63%;
    position: absolute;
  }

  .surf img {
    width: 30%;
    top: 13%;
    left: 36%;
    position: absolute;
    z-index: 1;
  }

  .lifeJacket img {
    width: 30%;
    top: 18%;
    left: 36%;
    position: absolute;
    z-index: 1;
  }

  .surfbutton img {
    width: 6%;
    top: 29%;
    left: 39%;
    position: absolute;
  }

  .waves img {
    width: 100%;
    top: -6%;
    left: 0%;
    position: absolute;
  }

  .wavesbutton img {
    width: 8%;
    top: 11%;
    left: 18%;
    position: absolute;
  }

  .wind img {
    width: 40%;
    top: -13%;
    left: 58%;
    position: absolute;
    z-index: 1;
  }

  .windbutton img {
    width: 6%;
    top: 3%;
    left: 83%;
    position: absolute;
  }

  .dive img {
    width: 40%;
    top: 49%;
    left: 5%;
    position: absolute;
    z-index: 1;
  }
  .divebutton img {
    width: 6%;
    top: 64%;
    left: 20%;
    position: absolute;
  }
  .maskbutton img {
    width: 6%;
    top: 76%;
    left: 8%;
    position: absolute;
  }
  .mask img {
    width: 40%;
    top: 56%;
    left: 5%;
    position: absolute;
    z-index: 1;
  }
  .flippers img{
    width: 35%;
    top: 63%;
    left: 48%;
    position: absolute;
    z-index: 1;
  }
  .tank img {
    width: 35%;
    top: 67%;
    left: 47%;
    position: absolute;
    z-index: 1;
  }
  .flippersbutton img {
    width: 8%;
    top: 77%;
    left: 76%;
    position: absolute;
  }
  .surfboardbutton img{
    width: 9%;
    top: 53%;
    left: 37%;
    position: absolute;
  }
  .tankbutton img{
    width: 7%;
    top: 69%;
    left: 58%;
    position: absolute;
  }
  .sailboatbutton img{
    width: 8%;
    top: 64%;
    left: 79%;
    position: absolute;
  }
  .sailbutton img{
    width: 6%;
    top: 32%;
    left: 87%;
    position: absolute;
  }
  .lifeJacketbutton img{
    width: 9%;
    top: 26%;
    left: 54%;
    position: absolute;
  }
  .cactus {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 400%;
      top: 131%;
      left: 0%;
      position: absolute;
    }
  }

  .cactusbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 95%;
      top: 190%;
      left: 60%;
      position: absolute;
    }
  }

  .camel {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 230%;
      top: 51%;
      left: 440%;
      position: absolute;
      z-index: 2;
    }
  }

  .camelbutton img{
    width: 8%;
    top: 20%;
    left: 60%;
    position: absolute;
  }

  .compass {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 52%;
      top: 119%;
      left: 183%;
      position: absolute;
    }
  }

  .compassbutton img{
    width: 11%;
    top: 57%;
    left: 14%;
    position: absolute;
  }

  .dunes {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 590%;
      top: 57.5%;
      left: 79%;
      position: absolute;
      transform: rotate(
        1deg
      );
      z-index: 1;
    }
  }

  .dunesbutton img{
    width: 8%;
    top: 17%;
    left: 28%;
    position: absolute;
  }

  .hot {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 185%;
      top: 66%;
      left: 26%;
      position: absolute;
      z-index: 1;
    }
  }

  .hotbutton img{
    width: 6%;
    top: 46%;
    left: 67%;
    position: absolute;
  }

  .lizard {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 175%;
      top: 175%;
      left: 115%;
      position: absolute;
      z-index: 3;
    }
  }

  .lizardbutton img{
    width: 8%;
    top: 83%;
    left: 28%;
    position: absolute;
  }

  .lost {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 155%;
      top: 82%;
      left: 190%;
      position: absolute;
      z-index: 2;
    }
  }

  .lostbutton img{
    width: 7%;
    top: 33%;
    left: 30%;
    position: absolute;
  }

  .map {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 180%;
      top: 125%;
      left: 520%;
      position: absolute;
      z-index: 1;
    }
  }

  .mapbutton img{
    width: 7%;
    top: 57%;
    left: 46%;
    position: absolute;
  }

  .sand {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 250%;
      top: 175%;
      left: 330%;
      position: absolute;
      z-index: 1;
    }
  }

  .sandbutton img{
    width: 7%;
    top: 65%;
    left: 38%;
    position: absolute;
  }

  .sandstorm {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 185%;
      top: 66%;
      left: 26%;
      position: absolute;
      z-index: 1;
    }
  }

  .thirsty {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 170%;
      top: 115%;
      left: 750%;
      position: absolute;
      z-index: 1;
    }
  }

  .thirstybutton img{
    width: 9%;
    top: 37%;
    left: 83%;
    position: absolute;
  }

  .water {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 45%;
      top: 138%;
      left: 760%;
      position: absolute;
      z-index: 1;
    }
  }

  .waterbutton img{
    width: 8%;
    top: 72%;
    left: 74%;
    position: absolute;
  }

  .shovel {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 380%;
      top: 7%;
      left: 2%;
      position: absolute;
      z-index: 1;
    }
  }

  .shovelbutton img{
    width: 13%;
    top: 7%;
    left: 8%;
    position: absolute;
  }

  .igloo {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 185%;
      top: 66%;
      left: 26%;
      position: absolute;
      z-index: 1;
    }
  }

  .igloobutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 80%;
      top: 70%;
      left: 190%;
      position: absolute;
    }
  }

  .cold {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 135%;
      top: 112%;
      left: 125%;
      position: absolute;
      z-index: 2;
    }
  }

  .coldbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 75%;
      top: 135%;
      left: 70%;
      position: absolute;
    }
  }

  .tusk {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 220%;
      top: 140%;
      left: 780%;
      position: absolute;
      z-index: 1;
    }
  }

  .tuskbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 65%;
      top: 215%;
      left: 860%;
      position: absolute;
    }
  }

  .walrusbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 75%;
      top: 135%;
      left: 865%;
      position: absolute;
    }
  }
  .orca {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 280%;
      top: 75%;
      left: 525%;
      position: absolute;
      z-index: 1;
    }
  }

  .orcabutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 75%;
      top: 85%;
      left: 725%;
      position: absolute;
    }
  }

  .ice {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 430%;
      top: 156%;
      left: 380%;
      position: absolute;
    }
  }

  .icebutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 60%;
      top: 215%;
      left: 570%;
      position: absolute;
    }
  }

  .seal {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 130%;
      top: 160%;
      left: 435%;
      position: absolute;
      z-index: 1;
    }
  }

  .sealbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 75%;
      top: 180%;
      left: 340%;
      position: absolute;
    }
  }

  .sled {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 230%;
      top: 185%;
      left: 33%;
      position: absolute;
    }
  }

  .sledbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 75%;
      top: 220%;
      left: 235%;
      position: absolute;
    }
  }

  .polarbear {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 150%;
      top: 72%;
      left: 342%;
      position: absolute;
    }
  }

  .polarbearbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 130%;
      top: 120%;
      left: 280%;
      position: absolute;
    }
  }

  .snow {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 380%;
      top: -4%;
      left: -4%;
      position: absolute;
    }
  }

  .snowbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 75%;
      top: 30%;
      left: 190%;
      position: absolute;
    }
  }

  .iceberg {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 180%;
      top: 165%;
      left: 605%;
      position: absolute;
    }
  }

  .icebergbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;
    img {
      width: 85%;
      top: 160%;
      left: 570%;
      position: absolute;
    }
  }

  .blizzard {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 630%;
      top: -12%;
      left: 400%;
      position: absolute;
    }
  }

  .blizzardbutton {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 80%;
      top: 35%;
      left: 770%;
      position: absolute;
    }
  }

  .dragon {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 185%;
      top: 137%;
      left: 62%;
      position: absolute;
    }
  }

  .dragonbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 165%;
      left: 140%;
      position: absolute;
    }
  }

  .shield {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 109%;
      top: 71%;
      left: 460%;
      position: absolute;
    }
  }

  .shieldbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 75%;
      top: -120%;
      left: 510%;
      position: absolute;
    }
  }

  .swordbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 75%;
      top: -80%;
      left: 380%;
      position: absolute;
    }
  }
  .roarbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 25%;
      left: 220%;
      position: absolute;
    }
  }

  .knight {
    height: 40%;
    width: 10%;
    top: 0;
    position: absolute;

    img {
      width: 160%;
      top: 150%;
      left: 300%;
      position: absolute;
    }
  }

  .knightbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 50%;
      left: 436%;
      position: absolute;
    }
  }

  .horsebutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 9%;
      left: 48%;
      position: absolute;
    }
  }

  .castle {
    height: 40%;
    width: 10%;
    top: 0;
    position: absolute;

    img {
      width: 235%;
      top: 60%;
      left: 686%;
      position: absolute;
    }
  }

  .castlebutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: -95%;
      left: 825%;
      position: absolute;
    }
  }

  .queen {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 60%;
      top: 163%;
      left: 745%;
      position: absolute;
    }
  }

  .queenbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 195%;
      left: 635%;
      position: absolute;
    }
  }

  .king {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 70%;
      top: 155%;
      left: 789%;
      position: absolute;
    }
  }

  .kingbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 80%;
      left: 850%;
      position: absolute;
    }
  }

  .wizard {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 84%;
      top: 66%;
      left: 576%;
      position: absolute;
    }
  }

  .wizardbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: -120%;
      left: 630%;
      position: absolute;
    }
  }

  .princess {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 79%;
      top: -4%;
      left: 64%;
      position: absolute;
    }
  }

  .princessbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: -90%;
      left: 150%;
      position: absolute;
    }
  }

  .screambutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: -180%;
      left: 130%;
      position: absolute;
    }
  }
  .wardrobe {
    height: 45%;
    width: 20%;
    display: block;
    float: left;
    top: 0;
    left: 9%;
    position: absolute;

    img {
      width: 90%;
      top: 15%;
      left: 0%;
      position: absolute;
    }
  }

  .bed {
    height: 45%;
    width: 28%;
    display: block;
    float: left;
    top: 3%;
    left: 20%;
    position: absolute;

    img {
      width: 90%;
      top: 35%;
      left: 5%;
      position: absolute;
    }
  }

  .bedbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 30%;
    left: 15%;
    position: absolute;

    img {
      width: 90%;
      top: 35%;
      left: 5%;
      position: absolute;
    }
  }

  .sleep {
    height: 45%;
    width: 28%;
    display: block;
    float: left;
    top: 3%;
    left: 20%;
    position: absolute;

    img {
      width: 90%;
      top: 35%;
      left: 5%;
      position: absolute;
    }
  }

  .sleepbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 10%;
    position: absolute;
    left: 25%;

    img {
      width: 90%;
      top: 15%;
      left: 5%;
      position: absolute;
    }
  }

  .wardrobebutton {
    height: 20%;
    width: 14%;
    display: block;
    float: left;
    top: 5%;
    position: absolute;
    left: 22%;

    img {
      width: 90%;
      top: 0%;
      left: 5%;
      position: absolute;
    }
  }

  .desk {
    height: 50%;
    width: 20%;
    display: block;
    float: left;
    top: 6%;
    left: 42%;
    position: absolute;

    img {
      width: 60%;
      top: 50%;
      left: 30%;
      position: absolute;
    }
  }

  .deskbutton {
    height: 50%;
    width: 15%;
    display: block;
    float: left;
    top: 1%;
    left: 38%;
    position: absolute;

    img {
      width: 60%;
      top: 50%;
      left: 30%;
      position: absolute;
    }
  }

  .chair {
    height: 50%;
    width: 20%;
    display: block;
    float: left;
    top: 10%;
    left: 35%;
    position: absolute;

    img {
      width: 25%;
      top: 50%;
      left: 45%;
      position: absolute;
    }
  }

  .wash {
    height: 50%;
    width: 30%;
    display: block;
    float: left;
    top: 7%;
    right: 10%;
    position: absolute;

    img {
      width: 80%;
      top: 40%;
      left: 10%;
      position: absolute;
    }
  }

  .washbutton {
    height: 25%;
    width: 20%;
    display: block;
    float: left;
    top: 0%;
    right: 15%;
    position: absolute;

    img {
      width: 50%;
      top: 70%;
      left: 0%;
      position: absolute;
    }
  }

  .sink {
    height: 30%;
    width: 20%;
    display: block;
    float: left;
    top: 40%;
    right: 10%;
    position: absolute;

    img {
      width: 50%;
      top: 70%;
      left: 0%;
      position: absolute;
    }
  }

  .toilet {
    height: 50%;
    width: 30%;
    display: block;
    float: left;
    top: 50%;
    right: 0%;
    position: absolute;

    img {
      width: 55%;
      top: 0%;
      left: 40%;
      position: absolute;
    }
  }

  .toiletbutton {
    height: 25%;
    width: 20%;
    display: block;
    float: left;
    top: 70%;
    right: 0%;
    position: absolute;

    img {
      width: 50%;
      top: 60%;
      right: 10%;
      position: absolute;
    }
  }

  .lamp {
    height: 40%;
    width: 10%;
    top: 50%;
    position: absolute;

    img {
      width: 55%;
      top: 40%;
      left: 40%;
      position: absolute;
    }
  }

  .lampbutton {
    height: 25%;
    width: 20%;
    display: block;
    float: left;
    top: 40%;
    left: 0%;
    position: absolute;

    img {
      width: 50%;
      top: 60%;
      left: 5%;
      position: absolute;
    }
  }

  .sofa {
    height: 40%;
    width: 50%;
    top: 50%;
    position: absolute;

    img {
      width: 55%;
      top: 40%;
      left: 15%;
      position: absolute;
    }
  }

  .sofabutton {
    height: 25%;
    width: 20%;
    display: block;
    float: left;
    top: 45%;
    left: 18%;
    position: absolute;

    img {
      width: 50%;
      top: 50%;
      left: 0%;
      position: absolute;
    }
  }

  .phone {
    height: 48%;
    width: 10%;
    top: 54%;
    left: 30%;
    position: absolute;

    .img1 {
      width: 40%;
      right: 48%;
      top: 52%;
      position: absolute;
    }

    .img2 {
      width: 70%;
      top: 56%;
      right: 30%;
      position: absolute;
    }
  }

  .phonebutton {
    height: 25%;
    width: 20%;
    display: block;
    float: left;
    top: 55%;
    left: 29%;
    position: absolute;

    img {
      width: 50%;
      top: 50%;
      left: 0%;
      position: absolute;
    }
  }

  .cupboard {
    height: 25%;
    width: 20%;
    display: block;
    float: left;
    top: 40%;
    left: 30%;
    position: absolute;

    img {
      width: 55%;
      top: 55%;
      left: 43%;
      position: absolute;
    }

  }

  .cupboardbutton {
    height: 25%;
    width: 20%;
    display: block;
    float: left;
    top: 75%;
    left: 30%;
    position: absolute;

    img {
      width: 65%;
      top: 55%;
      left: 40%;
      position: absolute;
    }
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

  /*@media screen and (max-width: 481px) {*/

  /*}*/

  @media screen and (min-width: 1600px) {
    .tower{
    width: 18%;
    left:2.4%;
    top:20.5%;
    position: absolute;
    z-index:1;
  }

    .dragon {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 185%;
      top: 141%;
      left: 62%;
      position: absolute;
    }
  }

  .dragonbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 165%;
      left: 140%;
      position: absolute;
    }
  }

  .shield {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 109%;
      top: 71%;
      left: 460%;
      position: absolute;
    }
  }

  .shieldbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 75%;
      top: -120%;
      left: 510%;
      position: absolute;
    }
  }

  .swordbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 75%;
      top: -80%;
      left: 380%;
      position: absolute;
    }
  }
  .roarbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 80%;
      top: 25%;
      left: 220%;
      position: absolute;
    }
  }

  .knight {
    height: 40%;
    width: 10%;
    top: 0;
    position: absolute;

    img {
      width: 160%;
      top: 156%;
      left: 300%;
      position: absolute;
    }
  }

  .knightbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 80%;
      top: 54%;
      left: 436%;
      position: absolute;
    }
  }

  .horsebutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 12%;
      left: 48%;
      position: absolute;
    }
  }

  .castle {
    height: 40%;
    width: 10%;
    top: 0;
    position: absolute;

    img {
      width: 235%;
      top: 62%;
      left: 686%;
      position: absolute;
    }
  }

  .castlebutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: -95%;
      left: 825%;
      position: absolute;
    }
  }

  .queen {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 60%;
      top: 163%;
      left: 745%;
      position: absolute;
    }
  }

  .queenbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 195%;
      left: 635%;
      position: absolute;
    }
  }

  .king {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 70%;
      top: 156%;
      left: 789%;
      position: absolute;
    }
  }

  .kingbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: 80%;
      left: 850%;
      position: absolute;
    }
  }

  .wizard {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 84%;
      top: 66%;
      left: 576%;
      position: absolute;
    }
  }

  .wizardbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: -120%;
      left: 630%;
      position: absolute;
    }
  }

  .princess {
    height: 40%;
    width: 10%;
    top: 0%;
    position: absolute;

    img {
      width: 79%;
      top:  5%;
      left: 64%;
      position: absolute;
    }
  }

  .princessbutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: -90%;
      left: 150%;
      position: absolute;
    }
  }

  .screambutton {
    height: 20%;
    width: 10%;
    display: block;
    float: left;
    top: 44%;
    position: absolute;
    left: 1%;

    img {
      width: 90%;
      top: -180%;
      left: 130%;
      position: absolute;
    }
  }
    .mirror img {
      width: 45%;
      top: 47%;
    }

    .wardrobe img {
      width: 65%;
    }

    .bed {
      img {
        width: 70%;
      }
    }

    .sleep {
      img {
        width: 70%;
      }
    }

    .bedbutton img {
      width: 80%;
    }

    .desk {
      width: 19%;
      top: 2%;
      left: 41%;
    }

    .deskbutton {
      img {
        top: 42%;
        left: 21%;
      }
    }

    .chair img {
      top: 47%;
    }

    .wash {
      height: 65%;
      width: 30%;
      display: block;
      float: left;
      top: 7%;
      right: 6%;

      img {
        width: 63%;
      }
    }

    .washbutton img {
      width: 44%;
    }

    .sink {
      width: 15%;
      top: 44%;
    }

    .toilet img {
      width: 40%;
      top: 8%;
      left: 50%;
    }

    .toiletbutton img {
      width: 40%;
    }

    .lamp img {
      width: 50%;
      left: 25%;
    }

    .lampbutton img {
      width: 40%;
    }

    .sofa {
      height: 32%;

      img {
        width: 45%;
        top: 49%;
        left: 19%;
      }
    }

    .sofabutton img {
      width: 40%;
    }

    .phone {
      top: 51%;
    }

    .phonebutton img {
      width: 40%;
      top: 40%;
    }

    .cupboard img {
      width: 45%;
      top: 56%;
      left: 50%;
    }
  }
  //手机
  @media only screen and (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 812px) and (max-width: 1023px){
    .elephantButton img {
      width: 9%;
      left: 71%;
      top: 45%;
      position: absolute;
    }
    .monkeyButton img {
      width: 7%;
      left: 22%;
      top: 64%;
      position: absolute;
    }
    .panda img {
      width: 18%;
      left: 57%;
      top: 13%;
      position: absolute;
    }
    .sleep1 img {
      width: 21%;
      left: 46%;
      top: 21%;
      position: absolute;
    }

    .crocodileButton img {
      width: 8%;
      left: 81%;
      top: 91%;
      position: absolute;
    }
    .crocodile img {
      width: 17%;
      left: 63%;
      top: 85%;
      position: absolute;
    }
    .snake img {
      width: 9%;
      left: 47%;
      top: 79%;
      position: absolute;
    }
    .elephant img {
      width: 37%;
      left: 58%;
      top: 30%;
      position: absolute;
    }
    .hippo img {
      width: 16%;
      left: 78%;
      top: 67%;
      position: absolute;
    }
    .gorilla img {
      width: 14%;
      left: 84%;
      top: 6%;
      position: absolute;
    }
    .lizard1 img {
      width: 6%;
      left: 77.5%;
      height: 19%;
      top: 11%;
      position: absolute;
    }
    .short img {
      width: 11%;
      left: 21%;
      top: 68%;
      position: absolute;
    }
    .monkey img {
      width: 14%;
      left: 7%;
      top: 39%;
      position: absolute;
    }
    .giraffe img {
      width: 10%;
      left: 0%;
      top: 47%;
      position: absolute;
      z-index: 1;
    }
    .lion img {
      width: 10%;
      left: 6%;
      top: -1%;
      position: absolute;
    }
    .penguin img {
      width: 6%;
      left: 29%;
      top: 46%;
    }
    .tiger img {
      width: 16%;
      left: 35%;
      top: -1%;
      position: absolute;
    }
    .zookeeper img {
      width: 6%;
      left: 30%;
      top: 18%;
      position: absolute;
    }
    .bigButton img {
      width: 5%;
      left: 22%;
      top: 67%;
    }
    .goldfishButton img {
      width: 8%;
      left: 69%;
      top: 91%;
    }
    .hamsterButton img {
      top: 65%;
    }
    .turtleButton img {
      top: 41%;
    }
    .parrotButton img {
      left: 74%;
    }
    .small img {
      width: 10%;
      top: 75%;
    }
    .big img {
      top: 71%;
    }
    .parrot img {
      width: 10%;
      left: 70%;
      top: 4%;
    }
    .bird img {
      top: 8%;
    }
    .birdButton img {
      width: 5%;
      top: 23%;
    }
    .turtle img {
      width: 14%;
      top: 46%;
    }
    .cageButton img {
      top: 31%;
    }
    .hamster img {
      width: 20%;
      left: 79.5%;
      top: 70%;
      height: 28%;
    }
    .kitten img {
      width: 27%;
      left: 59%;
      top: 31%;
    }
    .fish img {
      width: 21%;
      left: 52.5%;
      top: 71.5%;
      height: 25%;
    }
    .feed img {
      top: 8%;
    }
    .brush img {
      top: 15%;
    }
    .puppy img {
      top: 20%;
    }
    .brushButton img {
      top: 16%;
    }
    .tank1 img {
      width: 24%;
      left: 33%;
      top: 59%;
    }
    .feedButton img {
      width: 5%;
      left: 30%;
      top: 7%;
    }
    .seesawButton img {
      width: 7%;
      left: 26%;
      top: 46%;
    }
    .lineupButton img {
      width: 8%;
      left: 24%;
      top: 72%;
      position: absolute;
    }
    .climbButton img {
      width: 7%;
    }
    .kickButton img {
      width: 7%;
    }
    .snackButton img {
      width: 7%;
    }
    .runButton img {
      width: 5%;
      left: 53%;
    }
    .kick img {
      top: 69%;
    }
    .snack img {
      width: 9%;
      left: 79%;
      top: 58%;
    }
    .toys img {
      width: 13%;
      left: 80%;
      top: 57%;
    }
    .swing img {
      width: 35%;
      left: 65%;
      top: -7%;
    }
    .toysButton img {
      width: 5%;
      top: 78%;
    }
    .bgBoy img {
      top: 36%;
    }
    .run img {
      width: 8%;
      left: 59%;
      top: 55%;
    }
    .junglegymButton img {
      width: 10%;
      top: 17%;
    }
    .climb img {
      width: 25%;
      left: 31%;
      top: 18%;
    }
    .ringButton img {
      width: 5%;
      left: 10%;
    }
    .lineup img {
      width: 21%;
      left: 4%;
      top: 62%;
      position: absolute;
    }
    .slide img {
      width: 37%;
      left: 25%;
      top: 46%;
    }
    .seesaw img {
      width: 23%;
      left: 4%;
      top: 36%;
    }
    .ring img {
      width: 14%;
      left: 15%;
      top: 15%;
    }
    .desk2 img {
      left: 63.8%;
      height: 52%;
    }
    .chair2 img {
      width: 20%;
      left: 60%;
      top: 52%;
      position: absolute;
      z-index: -1;
    }
    .chair1 img {
      left: 60%;
      top: 53%;
    }
    .stillobj_boy_0 img {
      top: 53%;
      left: 59%;
    }
    .write img {
      top: 6%;
    }
    .book img {
      left: 76%;
      top: 38%;
    }
    .board img {
      width: 48%;
      left: 54%;
      top: -4%;
      height: 50%;
    }
    .crayons img {
      width: 6%;
      left: 79%;
      top: 59%;
    }
    .backpack img {
      top: 59%;
    }
    .listen img {
      top: 42%;
    }
    .read img {
      top: 25%;
    }
    .wavebutton img {
      top: 58%;
    }
    .elfbutton img {
      top: 38%;
    }
    .unicornbutton img {
      top: 51%;
    }
    .mermaidbutton img {
      width: 11%;
      top: 79%;
      left: 65%;
      position: absolute;
    }
    .mermaid img {
      width: 19%;
      top: 50%;
      left: 74%;
    }
    .unicorn img {
      width: 15%;
      top: 38%;
    }
    .wave img {
      width: 10%;
      top: 36%;
      left: 60%;
      position: absolute;
      z-index: 1;
    }
    .forest img {
      width: 45%;
      top: -7%;
      left: 55%;
      position: absolute;
    }
    .wandbutton img{
      width: 8%;
      top: 16%;
      left: 38%;
    }
    .witch img{
      width: 19%;
      top: 3%;
    }
    .fairy img {
      width: 23%;
      top: 36%;
      left: 31%;
      position: absolute;
    }
    .tower1button img {
      width: 8%;
      top: 7%;
      left: 9%;
      position: absolute;
    }
    .tower1 img {
      width: 10%;
      top: 15%;
      left: 3%;
      position: absolute;
    }
    .laughbutton img {
      width: 9%;
      top: 52%;
      left: 5%;
      position: absolute;
    }
    .giantbutton img{
      width: 9%;
      top: 72%;
      left: 9%;
    }
    .giant img {
      width: 31%;
      top: 32%;
      left: 5%;
      position: absolute;
    }
    .crowd img {
      width: 30.5%;
      height: 48%;
      top: 24%;
      left: 8%;
      position: absolute;
    }
    .tent img {
      width: 38%;
      top: -8%;
      left: 0%;
      -webkit-transform: rotate(-5deg);
      transform: rotate(-5deg);
      z-index: 1;
    }
    .cheer img {
      width: 29%;
      height: 47%;
      top: 30%;
      left: 4%;
      position: absolute;
      transform: rotate(2deg);
    }
    .watch img {
      width: 30.5% !important;
      top: 28.3% !important;
      left: 74% !important;
      transform: rotate(-2deg);
    }
    .unicyclebutton img {
      top: 78%;
      left: 18%;
    }
    .clown img {
      top: 38%;
    }
    .trick img {
      top: 34%;
    }
    .acrobat img {
      top: -19%;
    }
    .net img {
      top: 12%;
    }
    .trickbutton img {
      top: 67%;
    }
    .juggle img {
      width: 17%;
      top: 38%;
      left: 65%;
      position: absolute;
      z-index: 1;
    }
    .tank img {
      width: 33%;
      top: 66%;
      left: 47%;
      position: absolute;
      z-index: 1;
    }
    .flippers img {
      width: 32%;
      top: 61%;
      left: 49%;
      position: absolute;
      z-index: 1;
    }
    .waves img{
      height: 100%;
      top: 0% !important;
      left: 0%;
    }
    .surf img {
      top: 5%;
    }
    .lifeJacket img {
      top: 12%;
    }
    .dive img {
      top: 43%;
    }
    .divebutton img {
      top: 61%;
    }
    .mask img {
      top: 52%;
    }
    .blow img {
      top: 1%;
    }
    .cactus {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 400%;
        top: 131%;
        left: 0%;
        position: absolute;
      }
    }

    .cactusbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 95%;
        top: 190%;
        left: 60%;
        position: absolute;
      }
    }

    .camel img{
      top: 37%;
    }

    .camelbutton img{
      top: 15%;
    }

    .compass {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 52%;
        top: 112%;
        left: 183%;
        position: absolute;
      }
    }

    .compassbutton img{
      width: 11%;
      top: 57%;
      left: 14%;
      position: absolute;
    }

    .dunes {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 590%;
        top: 44.5%;
        left: 79%;
        position: absolute;
        transform: rotate(
          1deg
        );
        z-index: 1;
      }
    }

    .dunesbutton img{
      width: 8%;
      top: 17%;
      left: 28%;
      position: absolute;
    }

    .hot {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 185%;
        top: 66%;
        left: 26%;
        position: absolute;
        z-index: 1;
      }
    }

    .hotbutton img{
      width: 6%;
      top: 46%;
      left: 67%;
      position: absolute;
    }

    .lizard {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 175%;
        top: 175%;
        left: 115%;
        position: absolute;
        z-index: 1;
      }
    }

    .lizardbutton img{
      width: 8%;
      top: 83%;
      left: 28%;
      position: absolute;
    }

    .lost {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 150%;
        top: 65%;
        left: 190%;
        position: absolute;
        z-index: 2;
      }
    }

    .lostbutton img{
      width: 7%;
      top: 33%;
      left: 30%;
      position: absolute;
    }

    .map {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 160%;
        top: 117%;
        left: 537%;
        position: absolute;
        z-index: 1;
      }
    }

    .mapbutton img{
      width: 7%;
      top: 57%;
      left: 46%;
      position: absolute;
    }

    .sand {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 250%;
        top: 175%;
        left: 330%;
        position: absolute;
        z-index: 1;
      }
    }

    .sandbutton img{
      width: 7%;
      top: 65%;
      left: 38%;
      position: absolute;
    }

    .sandstorm {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 185%;
        top: 66%;
        left: 26%;
        position: absolute;
        z-index: 1;
      }
    }

    .thirsty {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 150%;
        top: 112%;
        left: 760%;
        position: absolute;
        z-index: 1;
      }
    }

    .thirstybutton img{
      width: 9%;
      top: 37%;
      left: 83%;
      position: absolute;
    }

    .water {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 45%;
        top: 135%;
        left: 760%;
        position: absolute;
        z-index: 1;
      }
    }

    .waterbutton img{
      width: 8%;
      top: 72%;
      left: 74%;
      position: absolute;
    }

    .shovel {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 340%;
        top: -2%;
        left: 0%;
        position: absolute;
        z-index: 1;
      }
    }

    .shovelbutton img{
      width: 13%;
      top: 7%;
      left: 8%;
      position: absolute;
    }
    .igloo {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 185%;
        top: 66%;
        left: 26%;
        position: absolute;
        z-index: 1;
      }
    }

    .igloobutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 80%;
        top: 70%;
        left: 190%;
        position: absolute;
      }
    }

    .cold {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 135%;
        top: 95%;
        left: 125%;
        position: absolute;
        z-index: 2;
      }
    }

    .coldbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 75%;
        top: 135%;
        left: 70%;
        position: absolute;
      }
    }

    .tusk {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 220%;
        top: 126%;
        left: 780%;
        position: absolute;
        z-index: 1;
      }
    }

    .tuskbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 65%;
        top: 215%;
        left: 860%;
        position: absolute;
      }
    }

    .walrusbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 80%;
        top: 125%;
        left: 865%;
        position: absolute;
      }
    }
    .orca {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 280%;
        top: 60%;
        left: 525%;
        position: absolute;
        z-index: 1;
      }
    }

    .orcabutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 75%;
        top: 85%;
        left: 725%;
        position: absolute;
      }
    }

    .ice {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 400%;
        top: 150%;
        left: 390%;
        position: absolute;
      }
    }

    .icebutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 60%;
        top: 215%;
        left: 570%;
        position: absolute;
      }
    }

    .seal {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 130%;
        top: 160%;
        left: 435%;
        position: absolute;
        z-index: 1;
      }
    }

    .sled {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 230%;
        top: 180%;
        left: 33%;
        position: absolute;
      }
    }

    .polarbear {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 150%;
        top: 72%;
        left: 342%;
        position: absolute;
      }
    }

    .polarbearbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 130%;
        top: 120%;
        left: 280%;
        position: absolute;
      }
    }

    .snow {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 380%;
        top: -4%;
        left: -4%;
        position: absolute;
      }
    }

    .snowbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 75%;
        top: 30%;
        left: 190%;
        position: absolute;
      }
    }

    .iceberg {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 180%;
        top: 165%;
        left: 605%;
        position: absolute;
      }
    }

    .blizzard {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 630%;
        top: -12%;
        left: 400%;
        position: absolute;
      }
    }

    .tower{
      width: 19%;
      left:2.4%;
      top:14.5%;
      position: absolute;
      z-index:1;
    }

    .dragon {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 185%;
        top: 137%;
        left: 62%;
        position: absolute;
      }
    }

    .dragonbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 165%;
        left: 140%;
        position: absolute;
      }
    }

    .shield {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 109%;
        top: 63%;
        left: 460%;
        position: absolute;
      }
    }

    .shieldbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 75%;
        top: -120%;
        left: 510%;
        position: absolute;
      }
    }

    .swordbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 75%;
        top: -80%;
        left: 380%;
        position: absolute;
      }
    }
    .roarbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 25%;
        left: 220%;
        position: absolute;
      }
    }

    .knight {
      height: 40%;
      width: 10%;
      top: 0;
      position: absolute;

      img {
        width: 160%;
        top: 144%;
        left: 300%;
        position: absolute;
      }
    }

    .knightbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 50%;
        left: 436%;
        position: absolute;
      }
    }

    .horsebutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 9%;
        left: 48%;
        position: absolute;
      }
    }

    .castle {
      height: 40%;
      width: 10%;
      top: 0;
      position: absolute;

      img {
        width: 235%;
        top: 38%;
        left: 686%;
        position: absolute;
      }
    }

    .castlebutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -95%;
        left: 825%;
        position: absolute;
      }
    }

    .queen {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 60%;
        top: 155%;
        left: 745%;
        position: absolute;
      }
    }

    .queenbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 195%;
        left: 635%;
        position: absolute;
      }
    }

    .king {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 70%;
        top: 148%;
        left: 789%;
        position: absolute;
      }
    }

    .kingbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 80%;
        left: 850%;
        position: absolute;
      }
    }

    .wizard {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 84%;
        top: 60%;
        left: 576%;
        position: absolute;
      }
    }

    .wizardbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -120%;
        left: 630%;
        position: absolute;
      }
    }

    .princess {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 79%;
        top: -4%;
        left: 64%;
        position: absolute;
      }
    }

    .princessbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -90%;
        left: 150%;
        position: absolute;
      }
    }

    .screambutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -180%;
        left: 130%;
        position: absolute;
      }
    }
    .mirror {
      img {
        width: 40%;
        top: 55%;
        left: 40%;
      }
    }

    .wardrobe {
      height: 32%;

      img {
        width: 70%;
      }
    }

    .wardrobebutton img {
      width: 81%;
    }

    .bed {
      width: 22%;
    }

    .sleep {
      width: 22%;
    }

    .bedbutton {
      img {
        width: 70%;
      }
    }

    .sleepbutton {
      img {
        width: 70%;
        left: 0;
      }
    }

    .lamp {
      img {
        width: 45%;
        top: 40%;
        left: 25%;
      }
    }

    .lampbutton {
      top: 45%;

      img {
        width: 40%;
        top: 37%;
      }
    }

    .sofabutton {
      img {
        width: 40%;
      }
    }

    .desk {
      top: 2%;
    }

    .deskbutton {
      top: 0%;
      left: 36%;
    }

    .sofa {
      width: 45%;
    }

    .phone {
      .img2 {
        top: 52%;
        right: 31%;
      }

      .img1 {
        right: 45%;
        top: 48%;
      }
    }

    .phonebutton {
      img {
        width: 40%;
        top: 40%;
      }
    }

    .cupboard {
      img {
        width: 45%;
        top: 57%;
        left: 52%;
      }
    }

    .wash {
      img {
        width: 75%;
      }
    }

    .washbutton {
      img {
        width: 40%;
      }
    }

    .sink {
      img {
        width: 40%;
        top: 85%;
      }
    }

    .toiletbutton {
      img {
        width: 40%;
      }
    }
  }

  //平板
  @media only screen and (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1024px) and (max-width: 1600px){
    .elephantButton img {
      width: 10%;
      left: 65%;
      top: 53%;
      position: absolute;
    }
    .sleep1Button img {
      width: 7%;
      left: 42%;
      top: 44%;
      position: absolute;
    }
    .zookeeperButton img {
      width: 10%;
      left: 19%;
      top: 36%;
      position: absolute;
    }
    .roar1 img {
      width: 31%;
      left: 4%;
      top: 1.5%;
      position: absolute;
    }
    .lizard1Button img {
      width: 6%;
      left: 73%;
      top: 10%;
      position: absolute;
    }
    .gorillaButton img {
      width: 6%;
      left: 88%;
      top: 37%;
      position: absolute;
    }
    .crocodileButton img {
      width: 9%;
      left: 82%;
      top: 91%;
      position: absolute;
    }
    .monkeyButton img {
      width: 9%;
      left: 25%;
      top: 66%;
      position: absolute;
    }
    .panda img {
      width: 23%;
      left: 51.5%;
      top: 16%;
      position: absolute;
    }
    .lizard1 img {
      width: 7%;
      left: 77%;
      top: 12%;
      position: absolute;
    }
    .gorilla img {
      width: 19%;
      left: 83%;
      top: 6%;
      position: absolute;
    }
    .sleep1 img {
      width: 24%;
      left: 46%;
      top: 27%;
    }
    .zookeeper img {
      width: 8%;
      left: 29%;
      top: 23%;
      position: absolute;
    }
    .penguin img {
      top: 51%;
    }
    .elephant img {
      top: 46%;
    }
    .hippo img {
      top: 71%;
    }
    .crocodile img {
      top: 88%;
    }
    .snake img {
      top: 83%;
    }
    .tiger img {
      width: 17%;
      left: 35%;
      top: 4%;
      position: absolute;
    }
    .still_roar img {
      width: 14%;
      left: 17%;
      top: 3%;
      position: absolute;
    }
    .roar1Button img {
      width: 6%;
      left: 18%;
      top: 22%;
      position: absolute;
    }
    .lion img {
      width: 15%;
      left: 4%;
      top: 1%;
      position: absolute;
    }
    .giraffe img {
      width: 16%;
      left: -1%;
      height: 51%;
      top: 48%;
      position: absolute;
      z-index: 1;
    }
    .monkey img {
      width: 20%;
      left: 6%;
      top: 37%;
      height: 63%;
      position: absolute;
    }
    .short img {
      width: 16%;
      left: 21%;
      top: 71%;
      position: absolute;
    }
    .goldfishButton img {
      width: 9%;
      left: 69%;
      top: 95%;
      position: absolute;
    }
    .kittenButton img {
      width: 7%;
      left: 54%;
      top: 56%;
      position: absolute;
    }
    .puppyButton img {
      width: 7%;
      left: 12%;
      top: 48%;
    }
    .smallButton img {
      width: 7%;
      left: 10%;
      top: 70%;
    }
    .turtleButton img {
      width: 6%;
      left: 85%;
      top: 44%;
    }
    .hamsterButton img {
      width: 8%;
      left: 86%;
      top: 71%;
      position: absolute;
    }
    .parrotButton img {
      width: 7%;
      left: 73%;
      top: 24%;
    }
    .fishButton img {
      width: 6%;
      left: 46%;
      top: 87%;
      position: absolute;
    }
    .tank1Button img {
      width: 6.5%;
    }
    .feedButton img {
      width: 7%;
      left: 33%;
      top: 18%;
      position: absolute;
    }
    .brushButton img {
      width: 7%;
      left: 24%;
      top: 25%;
    }
    .puppy img {
      width: 18%;
      left: 15%;
      top: 31%;
      position: absolute;
    }
    .feed img {
      width: 17%;
      top: 25%;
    }
    .brush img {
      width: 17%;
      top: 29%;
    }
    .catButton img {
      left: 55%;
      top: 55%;
    }
    .kitten img {
      top: 47%;
    }
    .fish img {
      width: 22%;
      left: 51.7%;
      top: 73%;
      height: 22%;
    }
    .tank1 img {
      top: 65%;
    }
    .cageButton img {
      width: 7%;
      top: 21%;
    }
    .cage img {
      top: -1%;
    }
    .parrot img {
      width: 12%;
      left: 69%;
      top: 8%;
      position: absolute;
    }
    .bird img {
      width: 7%;
      left: 82.6%;
      top: 10%;
      position: absolute;
    }
    .big img {
      width: 21%;
      left: 11%;
      top: 75.5%;
    }
    .small img {
      width: 12%;
      top: 78%;
    }
    .turtle img {
      top: 50%;
    }
    .hamster img {
      width: 21%;
      left: 78.5%;
      top: 76.5%;
      height: 20%;
    }
    .snack img {
      top: 63%;
    }
    .ballButton img {
      width: 9%;
    }
    .slideButton img {
      left: 41%;
      top: 66%;
    }
    .lineupButton img {
      width: 8%;
      left: 12%;
      top: 91%;
    }
    .snackButton img {
      left: 70%;
      top: 68%;
    }
    .junglegymButton img {
      width: 10%;
      top: 29%;
    }
    .bellButton img {
      top: 26%;
    }
    .ringButton img {
      left: 10%;
      top: 31%;
    }
    .seesawButton img {
      width: 9%;
      left: 27%;
      top: 56%;
    }
    .runButton img {
      left: 52%;
      top: 71%;
    }
    .playgroundButton img {
      width: 11%;
    }
    .ring img {
      top: 27%;
    }
    .bgBoy img {
      top: 43%;
    }
    .climb img {
      top: 31%;
    }
    .seesaw img {
      left: 3%;
      top: 44%;
    }
    .swing img {
      width: 45%;
      left: 55%;
      top: 0%;
      height: 76%;
    }
    .toys img {
      left: 80%;
      top: 64%;
    }
    .run img {
      top: 62%;
    }
    .kick img {
      top: 78%;
    }
    .slide img {
      top: 60%;
    }
    .lineup img {
      top: 69%;
    }
    .write img {
      width: 32%;
      left: 63%;
      height: 54%;
      top: 5%;
    }
    .board img {
      width: 50%;
      height: 49%;
      left: 52%;
      top: -4%;
    }
    .chair2 img {
      width: 22%;
      left: 57%;
      top: 61%;
      position: absolute;
      z-index: -1;
    }
    .chair1 img {
      width: 21%;
      left: 58%;
      top: 63%;
    }
    .crayonsbutton img {
      width: 9%;
      top: 72%;
      left: 71%;
      position: absolute;
    }
    .chair1 img {
      width: 21%;
      left: 58%;
      top: 63%;
      position: absolute;
    }
    .stillobj_boy_0 img {
      width: 21%;
      top: 62%;
    }
    .crayons img {
      width: 6%;
      left: 76%;
      top: 65%;
      position: absolute;
    }
    .desk2 img {
      width: 32%;
      left: 57%;
      height: 41%;
      top: 60%;
      z-index: -2;
    }

    .stillobj_0 img {
      width: 36%;
      left: 64%;
      top: 66%;
    }
    .readbutton img {
      top: 44%;
      left: 11%;
    }
    .read img {
      width: 20%;
      left: 17%;
      top: 38%;
      position: absolute;
    }
    .book img {
      width: 16%;
      left: 74%;
      top: 39%;
    }
    .clock img {
      width: 9%;
      left: 29%;
      top: 7%;
    }
    .eraser img {
      top: 50%;
    }
    .backpack img {
      width: 8%;
      left: 36%;
      top: 54%;
    }
    .backpackbutton img {
      width: 11%;
      top: 75%;
    }
    .wingbutton img {
      width: 10%;
      top: 43%;
      left: 40%;
    }
    .fairy img {
      width: 25%;
      top: 47%;
    }
    .forestbutton img {
      width: 11%;
      top: 23%;
    }
    .wandbutton img {
      width: 10%;
      top: 19%;
      left: 38%;
      position: absolute;
    }
    .witchbutton img {
      width: 9%;
      top: 23%;
      left: 16%;
    }
    .witch img {
      width: 20%;
      top: 14%;
    }
    .tower1button img {
      width: 10%;
      top: 15%;
      left: 4%;
    }
    .tower1 img {
      width: 12%;
      top: 24%;
      left: 2%;
    }
    .laughbutton img {
      width: 9%;
      top: 62%;
      left: 4%;
    }
    .giantbutton img {
      top: 73%;
    }

    .giant img {
      top: 48%;
    }
    .elfbutton img {
      top: 46%;
      left: 65%;
    }
    .wavebutton img {
      width: 8%;
      top: 62%;
      left: 55%;
    }
    .unicornbutton img {
      width: 10%;
      top: 61%;
      left: 82%;
      position: absolute;
    }
    .wave img{
      width: 12%;
      top: 46%;
      left: 59%;
    }
    .forest img{
      width: 49%;
      top: 14%;
    }
    .unicorn img{
      width: 17%;
      top: 49%;
      left: 67%;
    }
    .mermaidbutton img {
      top: 82%;
      width: 12%;
    }
    .mermaid img{
      width: 22%;
      top: 63%;
      left: 72%;
    }
    .watch img {
      width: 30.5%;
      height: 42%;
      top: 32.7%;
      left: 74%;
    }

    .watchbutton img {
      width: 8%;
    }
    .crowd img {
      width: 30.5%;
      top: 26%;
      left: 8%;
      height: 45%;
    }
    .crowdbutton img {
      width: 9%;
    }
    .cheer img {
      width: 36.7%;
      top: 30.55%;
      height: 44%;
      left: 4%;
    }
    .cheer img {
      width: 36.7% !important;
      top: 30.55% !important;

      left: 4% !important;
    }
    .tentbutton img {
      top: 22%;
      left: 9%;
      position: absolute;
    }
    .tent img {
      width: 40%;
      top: 5%;
      left: -2%;
    }
    .tightropebutton img {
      width: 10%;
      top: 9%;
      left: 46%;
      position: absolute;
    }
    .tightrope img {
      width: 85%;
      top: -1%;
      left: -12%;
      position: absolute;
    }
    .netbutton img {
      width: 7%;
    }
    .acrobatbutton img {
      width: 9%;
      top: 13%;
      left: 84%;
      position: absolute;
    }
    .acrobat img {
      width: 24%;
      top: -14%;
      left: 61%;
    }
    .clownbutton img {
      width: 8%;
      top: 65%;
      left: 36%;
      position: absolute;
    }
    .unicyclebutton img{
      width: 10% !important;
      top: 75% !important;
      left: 17% !important;
    }
    .clown img {
      width: 23%;
      top: 49%;
      left: 21%;
      position: absolute;
    }
    .magicianbutton img{
      width: 10% !important;
      top: 45% !important;
    }
    .trickbutton img {
      width: 7%;
      top: 64%;
      left: 56%;
      position: absolute;
    }
    .trick img {
      width: 29%;
      top: 39%;
      left: 38%;
      position: absolute;
    }
    .jugglebutton img {
      width: 9%;
      top: 72%;
      left: 62%;
    }
    .juggle img {
      width: 25%;
      top: 43%;
      left: 61%;
      z-index: 1;
    }
    .sailboatbutton img {
      width: 10%;
      top: 63%;
      left: 79%;
    }
    .blow img {
      width: 50%;
      top: 10%;
      left: 53%;
    }
    .lifeJacket img {
      width: 43%;
      top: 17%;
      left: 29%;
    }
    .lifeJacketbutton img {
      width: 12%;
      top: 27%;
      left: 54%;
    }
    .surfbutton img {
      width: 8%;
      top: 30%;
      left: 35%;
    }
    .blowbutton img {
      width: 7%;
      top: 50%;
      left: 62%;
    }
    .surfboardbutton img {
      width: 11%;
      top: 55%;
      left: 35%;
    }
    .surf img {
      width: 40%;
      top: 13%;
      left: 30%;
    }
    .tank img {
      width: 40%;
      top: 69%;
    }
    .mask img {
      width: 45% !important;
      top: 61% !important;
      left: 6%  !important;
    }
    .tankbutton img {
      top: 71%;
      left: 60%;
    }
    .flippersbutton img {
      width: 9%;
      top: 77%;
      left: 81%;
    }
    .flippers img {
      width: 40%;
      top: 65%;
    }
    .windbutton img {
      width: 8%;
      top: 6%;
      left: 85%;
    }
    .divebutton img {
      width: 8%;
      top: 65%;
    }
    .maskbutton img {
      width: 8%;
      top: 76%;
    }
    .dive img {
      width: 45%;
      top: 55%;
      left: 5%;
    }
    .wind img {
      width: 50%;
      top: -9%;
      left: 54%;
    }
    .wavesbutton img {
      width: 10%;
      top: 15%;
      left: 17%;
    }
    .waves img {
      height: 105%;
      top: -1%;
    }
    .map img{
      top: 125%;
      width: 240%;
      left: 480%;
    }
    .thirsty img {
      width: 220%;
      top: 120%;
      left: 725%;
    }
    .camel img{
      width: 270%;
      top: 61%;
      left: 420%;
    }
    .hotbutton img{
      top: 49%;
    }
    .waterbutton img {
      width: 9%;
      top: 73%;
      left: 73%;
    }
    .water img{
      width: 58%;
      top: 142%;
      left: 737%;
    }
    .cactus img {
      width: 420%;
      top: 157%;
      left: 2%;
    }
    .lizardbutton img {
      width: 10%;
      top: 87%;
    }
    .lizard img{
      width: 185%;
      top: 182%;
    }
    .cactusbutton img {
      width: 100%;
      top: 195%;
      left: 55%;
    }
    .lost img{
      width: 170%;
      top: 100%;
    }
    .compassbutton img {
      width: 12%;
      top: 60%;
      left: 13%;
    }
    .lostbutton img {
      width: 8%;
      top: 40%;
      left: 33%;
    }
    .dunesbutton img{
      width: 10%;
      top: 19%;
      left: 27%;
    }
    .compass img {
      width: 54%;
      top: 132%;
      left: 183%;
      position: absolute;
    }
    .shovel img {
      width: 420%;
      top: 30%;
      left: -1%;
    }
    .shovelbutton img{
      width: 15%;
      top: 15%;
      left: 8%;
    }
    .dunes img{
      width: 800%;
      top: 57.5%;
      left: -74%;
    }
    .igloo {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 185%;
        top: 75%;
        left: 26%;
        position: absolute;
        z-index: 1;
      }
    }

    .igloobutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 80%;
        top: 70%;
        left: 190%;
        position: absolute;
      }
    }

    .cold {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 135%;
        top: 130%;
        left: 125%;
        position: absolute;
        z-index: 2;
      }
    }

    .coldbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 75%;
        top: 150%;
        left: 70%;
        position: absolute;
      }
    }

    .tusk {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 220%;
        top: 153%;
        left: 780%;
        position: absolute;
        z-index: 1;
      }
    }

    .tuskbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 65%;
        top: 215%;
        left: 860%;
        position: absolute;
      }
    }

    .walrusbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 80%;
        top: 145%;
        left: 865%;
        position: absolute;
      }
    }
    .orca {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 280%;
        top: 85%;
        left: 525%;
        position: absolute;
        z-index: 1;
      }
    }

    .orcabutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 75%;
        top: 85%;
        left: 725%;
        position: absolute;
      }
    }

    .ice {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 455%;
        top: 162%;
        left: 375%;
        position: absolute;
      }
    }

    .icebutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 60%;
        top: 220%;
        left: 570%;
        position: absolute;
      }
    }

    .seal {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 130%;
        top: 165%;
        left: 435%;
        position: absolute;
        z-index: 1;
      }
    }

    .sled {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 230%;
        top: 197%;
        left: 33%;
        position: absolute;
      }
    }

    .polarbear {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 150%;
        top: 82%;
        left: 342%;
        position: absolute;
      }
    }

    .polarbearbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 130%;
        top: 120%;
        left: 280%;
        position: absolute;
      }
    }

    .snow {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 380%;
        top: -4%;
        left: -4%;
        position: absolute;
      }
    }

    .snowbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 75%;
        top: 30%;
        left: 190%;
        position: absolute;
      }
    }

    .iceberg {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 180%;
        top: 165%;
        left: 605%;
        position: absolute;
      }
    }

    .blizzard {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 630%;
        top: -12%;
        left: 400%;
        position: absolute;
      }
    }
    .tower{
      width: 20%;
      left:1.4%;
      top:25.5%;
      position: absolute;
      z-index:1;
    }

    .dragon {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 275%;
        top: 140%;
        left: 15%;
        position: absolute;
      }
    }

    .dragonbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 165%;
        left: 140%;
        position: absolute;
      }
    }

    .shield {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 109%;
        top: 83%;
        left: 460%;
        position: absolute;
      }
    }

    .shieldbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 75%;
        top: -75%;
        left: 510%;
        position: absolute;
      }
    }

    .swordbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 75%;
        top: -45%;
        left: 380%;
        position: absolute;
      }
    }
    .roarbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 25%;
        left: 220%;
        position: absolute;
      }
    }

    .knight {
      height: 40%;
      width: 10%;
      top: 0;
      position: absolute;

      img {
        width: 235%;
        top: 154%;
        left: 300%;
        position: absolute;
      }
    }

    .knightbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 50%;
        left: 436%;
        position: absolute;
      }
    }

    .horsebutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 28%;
        left: 48%;
        position: absolute;
      }
    }

    .castle {
      height: 40%;
      width: 10%;
      top: 0;
      position: absolute;

      img {
        width: 235%;
        top: 100%;
        left: 686%;
        position: absolute;
      }
    }

    .castlebutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -5%;
        left: 825%;
        position: absolute;
      }
    }

    .queen {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 60%;
        top: 174%;
        left: 745%;
        position: absolute;
      }
    }

    .queenbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 195%;
        left: 635%;
        position: absolute;
      }
    }

    .king {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 70%;
        top: 170%;
        left: 789%;
        position: absolute;
      }
    }

    .kingbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 80%;
        left: 850%;
        position: absolute;
      }
    }

    .wizard {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 84%;
        top: 78%;
        left: 576%;
        position: absolute;
      }
    }

    .wizardbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -73%;
        left: 630%;
        position: absolute;
      }
    }

    .princess {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 79%;
        top: 33%;
        left: 64%;
        position: absolute;
      }
    }

    .princessbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 100%;
        top: -65%;
        left: 150%;
        position: absolute;
      }
    }

    .screambutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -140%;
        left: 130%;
        position: absolute;
      }
    }

    .mirror img {
      width: 70%;
    }

    .wardrobe img {
      top: 25%;
      left: 8%;
    }

    .bed {
      height: 55%;
      top: 8%;

      img {
        width: 95%;
        top: 30%;
        position: absolute;
      }
    }

    .sleep {
      height: 60%;

      img {
        width: 95%;
      }
    }

    .sleepbutton {
      top: 20%;
      height: 10%;
    }

    .desk {
      img {
        width: 68%;
        top: 55%;
      }
    }

    .deskbutton {
      top: 5%;
      left: 39%;
    }

    .chair {
      height: 30%;
      width: 10%;
      top: 23%;
      left: 44%;

      img {
        width: 45%;
        top: 58%;
        left: 0%;
      }
    }

    .wash {
      height: 55%;
      top: 16%;

      img {
        width: 85%;
        left: 8%;
      }
    }

    .washbutton {
      top: 12%;
    }

    .toilet {
      width: 25%;

      img {
        width: 70%;
        top: 10%;
        left: 30%;
      }
    }

    .lamp {
      img {
        width: 60%;
        top: 45%;
        left: 25%;
      }
    }

    .sofa {
      width: 46%;

      img {
        top: 60%;
      }
    }

    .sofabutton {
      top: 53%;
    }

    .phone {
      top: 56%;
      width: 9%;
      left: 31%;

      .img2 {
        top: 58%;
      }

      .img1 {
        top: 55%;
      }
    }

    .cupboard {
      top: 48%;
    }

    .phonebutton {
      top: 60%;
    }

  }

  //废除平板
  @media only screen and (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2){
    .write img {
      width: 32%;
      left: 63%;
      height: 54%;
      top: 5%;
    }
    .board img {
      width: 50%;
      height: 49%;
      left: 52%;
      top: -4%;
    }
    .chair2 img {
      width: 22%;
      left: 57%;
      top: 61%;
      position: absolute;
      z-index: -1;
    }
    .chair1 img {
      width: 21%;
      left: 58%;
      top: 63%;
    }
    .crayonsbutton img {
      width: 9%;
      top: 72%;
      left: 71%;
      position: absolute;
    }
    .chair1 img {
      width: 21%;
      left: 58%;
      top: 63%;
      position: absolute;
    }
    .stillobj_boy_0 img {
      width: 21%;
      top: 62%;
    }
    .crayons img {
      width: 6%;
      left: 76%;
      top: 65%;
      position: absolute;
    }
    .desk2 img {
      width: 32%;
      left: 57%;
      height: 41%;
      top: 60%;
      z-index: -2;
    }

    .stillobj_0 img {
      width: 36%;
      left: 64%;
      top: 66%;
    }
    .readbutton img {
      top: 44%;
      left: 11%;
    }
    .read img {
      width: 20%;
      left: 17%;
      top: 38%;
      position: absolute;
    }
    .book img {
      width: 16%;
      left: 74%;
      top: 39%;
    }
    .clock img {
      width: 9%;
      left: 29%;
      top: 7%;
    }
    .eraser img {
      top: 50%;
    }
    .backpack img {
      width: 8%;
      left: 36%;
      top: 54%;
    }
    .backpackbutton img {
      width: 11%;
      top: 75%;
    }
    .wingbutton img {
      width: 10%;
      top: 43%;
      left: 40%;
    }
    .fairy img {
      width: 25%;
      top: 47%;
    }
    .forestbutton img {
      width: 11%;
      top: 23%;
    }
    .wandbutton img {
      width: 10%;
      top: 19%;
      left: 38%;
      position: absolute;
    }
    .witchbutton img {
      width: 9%;
      top: 23%;
      left: 16%;
    }
    .witch img {
      width: 20%;
      top: 14%;
    }
    .tower1button img {
      width: 10%;
      top: 15%;
      left: 4%;
    }
    .tower1 img {
      width: 12%;
      top: 24%;
      left: 2%;
    }
    .laughbutton img {
      width: 9%;
      top: 62%;
      left: 4%;
    }
    .giantbutton img {
      top: 73%;
    }

    .giant img {
      top: 48%;
    }
    .elfbutton img {
      top: 46%;
      left: 65%;
    }
    .wavebutton img {
      width: 8%;
      top: 62%;
      left: 55%;
    }
    .unicornbutton img {
      width: 10%;
      top: 61%;
      left: 82%;
      position: absolute;
    }
    .wave img{
      width: 12%;
      top: 46%;
      left: 59%;
    }
    .forest img{
      width: 49%;
      top: 14%;
    }
    .unicorn img{
      width: 17%;
      top: 49%;
      left: 67%;
    }
    .mermaidbutton img {
      top: 82%;
      width: 12%;
    }
    .mermaid img{
      width: 22%;
      top: 63%;
      left: 72%;
    }
    .watch img {
      width: 30.5%;
      height: 42%;
      top: 32.7%;
      left: 74%;
    }

    .watchbutton img {
      width: 8%;
    }
    .crowd img {
      width: 30.5%;
      top: 26%;
      left: 8%;
      height: 45%;
    }
    .crowdbutton img {
      width: 9%;
    }
    .cheer img {
      width: 36.7%;
      top: 30.55%;
      height: 44%;
      left: 4%;
    }
    .cheer img {
      width: 36.7% !important;
      top: 30.55% !important;

      left: 4% !important;
    }
    .tentbutton img {
      top: 22%;
      left: 9%;
      position: absolute;
    }
    .tent img {
      width: 40%;
      top: 5%;
      left: -2%;
    }
    .tightropebutton img {
      width: 10%;
      top: 9%;
      left: 46%;
      position: absolute;
    }
    .tightrope img {
      width: 85%;
      top: -1%;
      left: -12%;
      position: absolute;
    }
    .netbutton img {
      width: 7%;
    }
    .acrobatbutton img {
      width: 9%;
      top: 13%;
      left: 84%;
      position: absolute;
    }
    .acrobat img {
      width: 24%;
      top: -14%;
      left: 61%;
    }
    .clownbutton img {
      width: 8%;
      top: 65%;
      left: 36%;
      position: absolute;
    }
    .unicyclebutton img{
      width: 10% !important;
      top: 75% !important;
      left: 17% !important;
    }
    .clown img {
      width: 23%;
      top: 49%;
      left: 21%;
      position: absolute;
    }
    .magicianbutton img{
      width: 10% !important;
      top: 45% !important;
    }
    .trickbutton img {
      width: 7%;
      top: 64%;
      left: 56%;
      position: absolute;
    }
    .trick img {
      width: 29%;
      top: 39%;
      left: 38%;
      position: absolute;
    }
    .jugglebutton img {
      width: 9%;
      top: 72%;
      left: 62%;
    }
    .juggle img {
      width: 25%;
      top: 43%;
      left: 61%;
      z-index: 1;
    }
    .sailboatbutton img {
      width: 10%;
      top: 63%;
      left: 79%;
    }
    .blow img {
      width: 50%;
      top: 10%;
      left: 53%;
    }
    .lifeJacket img {
      width: 43%;
      top: 17%;
      left: 29%;
    }
    .lifeJacketbutton img {
      width: 12%;
      top: 27%;
      left: 54%;
    }
    .surfbutton img {
      width: 8%;
      top: 30%;
      left: 35%;
    }
    .blowbutton img {
      width: 7%;
      top: 50%;
      left: 62%;
    }
    .surfboardbutton img {
      width: 11%;
      top: 55%;
      left: 35%;
    }
    .surf img {
      width: 40%;
      top: 13%;
      left: 30%;
    }
    .tank img {
      width: 40%;
      top: 69%;
    }
    .mask img {
      width: 45% !important;
      top: 61% !important;
      left: 6%  !important;
    }
    .tankbutton img {
      top: 71%;
      left: 60%;
    }
    .flippersbutton img {
      width: 9%;
      top: 77%;
      left: 81%;
    }
    .flippers img {
      width: 40%;
      top: 65%;
    }
    .windbutton img {
      width: 8%;
      top: 6%;
      left: 85%;
    }
    .divebutton img {
      width: 8%;
      top: 65%;
    }
    .maskbutton img {
      width: 8%;
      top: 76%;
    }
    .dive img {
      width: 45%;
      top: 55%;
      left: 5%;
    }
    .wind img {
      width: 50%;
      top: -9%;
      left: 54%;
    }
    .wavesbutton img {
      width: 10%;
      top: 15%;
      left: 17%;
    }
    .waves img {
      height: 105%;
      top: -1%;
    }
    .map img{
      top: 125%;
      width: 240%;
      left: 480%;
    }
    .thirsty img {
      width: 220%;
      top: 120%;
      left: 725%;
    }
    .camel img{
      width: 270%;
      top: 61%;
      left: 420%;
    }
    .hotbutton img{
      top: 49%;
    }
    .waterbutton img {
      width: 9%;
      top: 73%;
      left: 73%;
    }
    .water img{
      width: 58%;
      top: 142%;
      left: 737%;
    }
    .cactus img {
      width: 420%;
      top: 157%;
      left: 2%;
    }
    .lizardbutton img {
      width: 10%;
      top: 87%;
    }
    .lizard img{
      width: 185%;
      top: 182%;
    }
    .cactusbutton img {
      width: 100%;
      top: 195%;
      left: 55%;
    }
    .lost img{
      width: 170%;
      top: 100%;
    }
    .compassbutton img {
      width: 12%;
      top: 60%;
      left: 13%;
    }
    .lostbutton img {
      width: 8%;
      top: 40%;
      left: 33%;
    }
    .dunesbutton img{
      width: 10%;
      top: 19%;
      left: 27%;
    }
    .compass img {
      width: 54%;
      top: 132%;
      left: 183%;
      position: absolute;
    }
    .shovel img {
      width: 420%;
      top: 30%;
      left: -1%;
    }
    .shovelbutton img{
      width: 15%;
      top: 15%;
      left: 8%;
    }
    .dunes img{
      width: 800%;
      top: 57.5%;
      left: -74%;
    }
    .igloo {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 185%;
        top: 75%;
        left: 26%;
        position: absolute;
        z-index: 1;
      }
    }

    .igloobutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 80%;
        top: 70%;
        left: 190%;
        position: absolute;
      }
    }

    .cold {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 135%;
        top: 130%;
        left: 125%;
        position: absolute;
        z-index: 2;
      }
    }

    .coldbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 75%;
        top: 150%;
        left: 70%;
        position: absolute;
      }
    }

    .tusk {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 220%;
        top: 153%;
        left: 780%;
        position: absolute;
        z-index: 1;
      }
    }

    .tuskbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 65%;
        top: 215%;
        left: 860%;
        position: absolute;
      }
    }

    .walrusbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 80%;
        top: 145%;
        left: 865%;
        position: absolute;
      }
    }
    .orca {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 280%;
        top: 85%;
        left: 525%;
        position: absolute;
        z-index: 1;
      }
    }

    .orcabutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 75%;
        top: 85%;
        left: 725%;
        position: absolute;
      }
    }

    .ice {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 455%;
        top: 162%;
        left: 375%;
        position: absolute;
      }
    }

    .icebutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 60%;
        top: 220%;
        left: 570%;
        position: absolute;
      }
    }

    .seal {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 130%;
        top: 165%;
        left: 435%;
        position: absolute;
        z-index: 1;
      }
    }

    .sled {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 230%;
        top: 197%;
        left: 33%;
        position: absolute;
      }
    }

    .polarbear {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 150%;
        top: 82%;
        left: 342%;
        position: absolute;
      }
    }

    .polarbearbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 130%;
        top: 120%;
        left: 280%;
        position: absolute;
      }
    }

    .snow {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 380%;
        top: -4%;
        left: -4%;
        position: absolute;
      }
    }

    .snowbutton {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 75%;
        top: 30%;
        left: 190%;
        position: absolute;
      }
    }

    .iceberg {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 180%;
        top: 165%;
        left: 605%;
        position: absolute;
      }
    }

    .blizzard {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 630%;
        top: -12%;
        left: 400%;
        position: absolute;
      }
    }
    .tower{
      width: 20%;
      left:1.4%;
      top:25.5%;
      position: absolute;
      z-index:1;
    }

    .dragon {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 275%;
        top: 140%;
        left: 15%;
        position: absolute;
      }
    }

    .dragonbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 165%;
        left: 140%;
        position: absolute;
      }
    }

    .shield {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 109%;
        top: 83%;
        left: 460%;
        position: absolute;
      }
    }

    .shieldbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 75%;
        top: -75%;
        left: 510%;
        position: absolute;
      }
    }

    .swordbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 75%;
        top: -45%;
        left: 380%;
        position: absolute;
      }
    }
    .roarbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 25%;
        left: 220%;
        position: absolute;
      }
    }

    .knight {
      height: 40%;
      width: 10%;
      top: 0;
      position: absolute;

      img {
        width: 235%;
        top: 154%;
        left: 300%;
        position: absolute;
      }
    }

    .knightbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 50%;
        left: 436%;
        position: absolute;
      }
    }

    .horsebutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 28%;
        left: 48%;
        position: absolute;
      }
    }

    .castle {
      height: 40%;
      width: 10%;
      top: 0;
      position: absolute;

      img {
        width: 235%;
        top: 100%;
        left: 686%;
        position: absolute;
      }
    }

    .castlebutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -5%;
        left: 825%;
        position: absolute;
      }
    }

    .queen {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 60%;
        top: 174%;
        left: 745%;
        position: absolute;
      }
    }

    .queenbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 195%;
        left: 635%;
        position: absolute;
      }
    }

    .king {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 70%;
        top: 170%;
        left: 789%;
        position: absolute;
      }
    }

    .kingbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: 80%;
        left: 850%;
        position: absolute;
      }
    }

    .wizard {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 84%;
        top: 78%;
        left: 576%;
        position: absolute;
      }
    }

    .wizardbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -73%;
        left: 630%;
        position: absolute;
      }
    }

    .princess {
      height: 40%;
      width: 10%;
      top: 0%;
      position: absolute;

      img {
        width: 79%;
        top: 33%;
        left: 64%;
        position: absolute;
      }
    }

    .princessbutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 100%;
        top: -65%;
        left: 150%;
        position: absolute;
      }
    }

    .screambutton {
      height: 20%;
      width: 10%;
      display: block;
      float: left;
      top: 44%;
      position: absolute;
      left: 1%;

      img {
        width: 90%;
        top: -140%;
        left: 130%;
        position: absolute;
      }
    }

    .mirror img {
      width: 70%;
    }

    .wardrobe img {
      top: 25%;
      left: 8%;
    }

    .bed {
      height: 55%;
      top: 8%;

      img {
        width: 95%;
        top: 30%;
        position: absolute;
      }
    }

    .sleep {
      height: 60%;

      img {
        width: 95%;
      }
    }

    .sleepbutton {
      top: 20%;
      height: 10%;
    }

    .desk {
      img {
        width: 68%;
        top: 55%;
      }
    }

    .deskbutton {
      top: 5%;
      left: 39%;
    }

    .chair {
      height: 30%;
      width: 10%;
      top: 23%;
      left: 44%;

      img {
        width: 45%;
        top: 58%;
        left: 0%;
      }
    }

    .wash {
      height: 55%;
      top: 16%;

      img {
        width: 85%;
        left: 8%;
      }
    }

    .washbutton {
      top: 12%;
    }

    .toilet {
      width: 25%;

      img {
        width: 70%;
        top: 10%;
        left: 30%;
      }
    }

    .lamp {
      img {
        width: 60%;
        top: 45%;
        left: 25%;
      }
    }

    .sofa {
      width: 46%;

      img {
        top: 60%;
      }
    }

    .sofabutton {
      top: 53%;
    }

    .phone {
      top: 56%;
      width: 9%;
      left: 31%;

      .img2 {
        top: 58%;
      }

      .img1 {
        top: 55%;
      }
    }

    .cupboard {
      top: 48%;
    }

    .phonebutton {
      top: 60%;
    }

  }

</style>
