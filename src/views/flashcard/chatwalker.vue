<template>
  <div class="chatwalker">
		<span id="gameplay">
		<audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic"><source
      src="../../assets/video/gamemusic.mp3"></audio>
		</span>
    <img src="../../assets/image/rightback.png" @click="$tips(true);gomemu()" class="backbutton"/>
    <div v-if="zhezhao" @click="showGif()"
         style="width: 100%; height: 100%;display:block;position: absolute;opacity: 0.5;z-index: 100;background-color: black">
    </div>
    <!--选择不同的背景-->

<!--    <div v-if="this.unit === 'Fairy Tales' && this.part === 'part1'">
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
        <img src="../../assets/image/201906H5 Fairy Tales_In_the_castle_MT/Png/princess_00.png" v-if="princess&&scream" @click="showGif('princess')">
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
    <div v-else-if="this.unit === 'Family Time' && this.part === 'part1'">
      <img src="../../assets/image/201911H5 Family_MT/Walker_BG/BG_00000.png">
      <img src="../../assets/image/201911H5 Family_MT/Walker_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="baby">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/png/baby.png" v-if="baby&&young" @click="walkers&&showGif('baby')">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/baby.gif" style="z-index: 100" v-if="!baby"
             @click="showGif('baby')">
      </div>
      <div class="brother">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/png/brother.png" v-if="brother&&hug" @click="showGif('brother')">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/brother.gif" style="z-index: 100" v-if="!brother"
             @click="showGif('brother')">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/hug.gif" style="z-index: 100" v-if="!hug"
             @click="showGif('hug')">
      </div>
      <div class="caring">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/caring.gif" style="z-index: 100" v-if="!caring"
             @click="showGif('caring')">
      </div>
      <div class="father">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/png/father.png" v-if="father&&caring" @click="showGif('father')">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/father.gif" style="z-index: 100" v-if="!father"
             @click="showGif('father')">
      </div>
      <div class="grandma">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/png/grandma.png" v-if="grandma&&old&&share" @click="showGif('grandma')">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/grandma.gif" style="z-index: 100" v-if="!grandma"
             @click="showGif('grandma')">
      </div>
      <div class="grandpa">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/png/grandpa.png" v-if="grandpa&&old&&share" @click="showGif('grandpa')">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/grandpa.gif" style="z-index: 100" v-if="!grandpa"
             @click="showGif('grandpa')">
      </div>
      <div class="mother">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/png/mother.png" v-if="mother" @click="showGif('mother')">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/mother.gif" style="z-index: 100" v-if="!mother"
             @click="showGif('mother')">
      </div>
      <div class="old">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/old.gif" style="z-index: 100" v-if="!old"
             @click="showGif('old')">
      </div>
      <div class="share">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/share.gif" style="z-index: 100" v-if="!share"
             @click="showGif('share')">
      </div>
      <div class="sister">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/png/sister.png" v-if="sister&&caring" @click="showGif('sister')">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/sister.gif" style="z-index: 100" v-if="!sister"
             @click="showGif('sister')">
      </div>
      <div class="baby">
        <img src="../../assets/image/201911H5 Family_MT/GIF_PNG/Gif/baby.gif" style="z-index: 100" v-if="!young"
             @click="showGif('young')">
      </div>
      <div class="youngButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_young.png"
             :style="{zIndex: !young ? 100 : 1}" @click="showGif('young')">
      </div>
      <div class="brotherButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_brother.png"
             :style="{zIndex: !brother ? 100 : 1}" @click="showGif('brother')">
      </div>
      <div class="fatherButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_father.png"
             :style="{zIndex: !father ? 100 : 1}" @click="showGif('father')">
      </div>
      <div class="sisterButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_sister.png"
             :style="{zIndex: !sister ? 100 : 1}" @click="showGif('sister')">
      </div>
      <div class="grandmaButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_grandma.png"
             :style="{zIndex: !grandma ? 100 : 1}" @click="showGif('grandma')">
      </div>
      <div class="grandpaButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_grandpa.png"
             :style="{zIndex: !grandpa ? 100 : 1}" @click="showGif('grandpa')">
      </div>
      <div class="oldButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_old.png"
             :style="{zIndex: !old ? 100 : 1}" @click="showGif('old')">
      </div>
      <div class="motherButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_mother.png"
             :style="{zIndex: !mother ? 100 : 1}" @click="showGif('mother')">
      </div>
      <div class="hugButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_hug.png" v-if="walkers"
             :style="{zIndex: !hug ? 100 : 1}" @click="showGif('hug')">
      </div>
      <div class="caringButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_caring .png" v-if="walkers"
             :style="{zIndex: !caring ? 100 : 1}" @click="showGif('caring')">
      </div>
      <div class="shareButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_share.png" v-if="walkers"
             :style="{zIndex: !share ? 100 : 1}" @click="showGif('share')">
      </div>
      <div class="babyButton">
        <img src="../../assets/image/201911H5 Family_MT/Word/word_baby.png" v-if="walkers"
             :style="{zIndex: !baby ? 100 : 1}" @click="showGif('baby')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Family Time' && this.part === 'part2'">
      <img src="../../assets/image/201911 H5 Happy birthday_MT/Wallker_BG/bg_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="balloons">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/balloons00.png" v-if="balloons" @click="showGif('balloons')">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/balloons00.gif" style="z-index: 100" v-if="!balloons"
             @click="showGif('balloons')">
      </div>
      <div class="blowClick" @click="showGif('blow1')"/>
      <div class="blow1">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/blow.png" v-if="blow1">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/blow00.gif" style="z-index: 100" v-if="!blow1"
             @click="showGif('blow1')">
      </div>
      <div class="cakeClick" @click="showGif('cake')"/>
      <div class="cake">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/cake.gif" style="z-index: 100" v-if="!cake"
             @click="showGif('cake')">
      </div>
      <div class="candlesClick"  @click="showGif('candles')"/>
      <div class="candles">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/candles.png" v-if="candles">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/candles.gif" style="z-index: 100" v-if="!candles"
             @click="showGif('candles')">
      </div>
      <div class="card">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/card.png" v-if="card" @click="walkers&&showGif('card')">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/card.gif" style="z-index: 100" v-if="!card"
             @click="showGif('card')">
      </div>
      <div class="cutClick"  @click="showGif('cut')"/>
      <div class="cut">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/cut00.png" v-if="cut">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/cut00.gif" style="z-index: 100" v-if="!cut"
             @click="showGif('cut')">
      </div>
      <div class="friends">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/friends.gif" style="z-index: 100" v-if="!friends"
             @click="showGif('friends')">
      </div>
      <div class="happy">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/happy00.png" v-if="happy" @click="walkers&&showGif('happy')">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/happy00.gif" style="z-index: 100" v-if="!happy"
             @click="showGif('happy')">
      </div>
      <div class="partyHatClick" @click="showGif('partyHat')"/>
      <div class="partyHat">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/party hat.png" v-if="partyHat" >
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/party hat00.gif" style="z-index: 100" v-if="!partyHat"
             @click="showGif('partyHat')">
      </div>
      <div class="play">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/play.png" v-if="play" @click="walkers&&showGif('play')">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/play00.gif" style="z-index: 100" v-if="!play"
             @click="showGif('play')">
      </div>
      <div class="presentsClick" @click="showGif('presents')"/>
      <div class="presents">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/presents.png" v-if="presents" >
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/presents.gif" style="z-index: 100" v-if="!presents"
             @click="showGif('presents')">
      </div>
      <div class="singClick" @click="showGif('sing')"/>
      <div class="sing">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/png/sing00.png" v-if="sing" >
        <img src="../../assets/image/201911 H5 Happy birthday_MT/GIF_PNG/gif/sing00.gif" style="z-index: 100" v-if="!sing"
             @click="showGif('sing')">
      </div>
      <div class="singButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/word_sing Comp 1_00000.png"
             :style="{zIndex: !sing ? 100 : 3}" @click="showGif('sing')">
      </div>
      <div class="balloonsButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/ballons Comp 1_00000.png"
             :style="{zIndex: !balloons ? 100 : 3}" @click="showGif('balloons')">
      </div>
      <div class="blow1Button">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/blow Comp 1_00000.png"
             :style="{zIndex: !blow1 ? 100 : 3}" @click="showGif('blow1')">
      </div>
      <div class="cakeButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/cake Comp 1_00000.png"
             :style="{zIndex: !cake ? 100 : 3}" @click="showGif('cake')">
      </div>
      <div class="candlesButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/candles Comp 1_00000.png"
             :style="{zIndex: !candles ? 100 : 3}" @click="showGif('candles')">
      </div>
      <div class="cardButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/card Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !card ? 100 : 3}" @click="showGif('card')">
      </div>
      <div class="friendsButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/friends Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !friends ? 100 : 3}" @click="showGif('friends')">
      </div>
      <div class="happyButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/happy Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !happy ? 100 : 3}" @click="showGif('happy')">
      </div>
      <div class="partyHatButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/party hat Comp 1_00000.png"
             :style="{zIndex: !partyHat ? 100 : 3}" @click="showGif('partyHat')">
      </div>
      <div class="playButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/play Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !play ? 100 : 3}" @click="showGif('play')">
      </div>
      <div class="presentsButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/presents Comp 1_00000.png"
             :style="{zIndex: !presents ? 100 : 3}" @click="showGif('presents')">
      </div>
      <div class="cutButton">
        <img src="../../assets/image/201911 H5 Happy birthday_MT/words/word_cut Comp 1_00000.png"
             :style="{zIndex: !cut ? 100 : 3}" @click="showGif('cut')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Holidays' && this.part === 'part2'">
      <img src="../../assets/image/201912H5 Christmas magic_MT/Walker_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="stocking">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/png/stocking.png" v-if="stocking" @click="showGif('stocking')">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/gif/stocking.gif" style="z-index: 100" v-if="!stocking"
             @click="showGif('stocking')">
      </div>
      <div class="sleigh">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/png/sleigh.png" v-if="sleigh" @click="showGif('sleigh')">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/gif/sleigh.gif" style="z-index: 100" v-if="!sleigh"
             @click="showGif('sleigh')">
      </div>
      <div class="santaClaus">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/png/Santa Claus.png" v-if="santaClaus" @click="showGif('santaClaus')">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/gif/Santa claus.gif" style="z-index: 100" v-if="!santaClaus"
             @click="showGif('santaClaus')">
      </div>
      <div class="reindeer">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/png/Reindeer.png" v-if="reindeer" @click="showGif('reindeer')">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/gif/reindeer.gif" style="z-index: 100" v-if="!reindeer"
             @click="showGif('reindeer')">
      </div>
      <div class="bells">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/png/bells.png" v-if="bells" @click="showGif('bells')">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/gif/bells.gif" style="z-index: 100" v-if="!bells"
             @click="showGif('bells')">
      </div>
      <div class="elf1">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/gif/elf.gif" style="z-index: 100" v-if="!elf1"
             @click="showGif('elf1')">
      </div>
      <div class="cracker">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/png/cracker.png" v-if="cracker && pull" @click="walkers&&showGif('cracker') ">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/gif/cracker.gif" style="z-index: 100" v-if="!cracker"
             @click="showGif('cracker')">
      </div>
      <div class="pull">
        <img src="../../assets/image/201912H5 Christmas magic_MT/GIF_PNG/gif/pull.gif" style="z-index: 100" v-if="!pull"
             @click="showGif('pull')">
      </div>
      <div class="stockingButton">
        <img src="../../assets/image/201912H5 Christmas magic_MT/words/shocking Comp 1_00000.png"
             :style="{zIndex: !stocking ? 100 : 1}" @click="showGif('stocking')">
      </div>
      <div class="sleighButton">
        <img src="../../assets/image/201912H5 Christmas magic_MT/words/sleigh Comp 1_00000.png"
             :style="{zIndex: !sleigh ? 100 : 1}" @click="showGif('sleigh')">
      </div>
      <div class="reindeerButton">
        <img src="../../assets/image/201912H5 Christmas magic_MT/words/reindeer Comp 1_00000.png"
             :style="{zIndex: !reindeer ? 100 : 1}" @click="showGif('reindeer')">
      </div>
      <div class="bellsButton">
        <img src="../../assets/image/201912H5 Christmas magic_MT/words/bells Comp 1_00000.png"
             :style="{zIndex: !bells ? 100 : 1}" @click="showGif('bells')">
      </div>
      <div class="elf1Button">
        <img src="../../assets/image/201912H5 Christmas magic_MT/words/elf Comp 1_00000.png"
             :style="{zIndex: !elf1 ? 100 : 1}" @click="showGif('elf1')">
      </div>
      <div class="crackerButton">
        <img src="../../assets/image/201912H5 Christmas magic_MT/words/cracker Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !cracker ? 100 : 1}" @click="showGif('cracker')">
      </div>
      <div class="pullButton">
        <img src="../../assets/image/201912H5 Christmas magic_MT/words/pull Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !pull ? 100 : 1}" @click="showGif('pull')">
      </div>
      <div class="santaClausButton">
        <img src="../../assets/image/201912H5 Christmas magic_MT/words/santa claus Comp 1_00000.png"
             :style="{zIndex: !santaClaus ? 100 : 1}" @click="showGif('santaClaus')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Holidays' && this.part === 'part1'">
      <img src="../../assets/image/202112H5 Winter_MT/Walker_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="warm">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/png/warm.png" v-if="warm || fireplace" @click="showGif('warm')">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/warm.gif" style="z-index: 100" v-if="!warm && walkers"
             @click="showGif('warm')">
      </div>
      <div class="fireplace">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/fireplace.gif" style="z-index: 100" v-if="!fireplace || !warm"
             @click="showGif('fireplace')">
      </div>
      <div class="animals">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/png/animals.png" v-if="animals" @click="walkers&&showGif('animals')">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/animals.gif" style="z-index: 100" v-if="!animals"
             @click="showGif('animals')">
      </div>
      <div class="hibernate">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/hibernate.gif" style="z-index: 100" v-if="!hibernate"
             @click="showGif('hibernate')">
      </div>
      <div class="coat">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/coat.gif" style="z-index: 100" v-if="!coat"
             @click="showGif('coat')">
      </div>
      <div class="cold1">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/png/cold.png" v-if="cold1 && coat" @click="showGif('cold1')">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/cold.gif" style="z-index: 100" v-if="!cold1"
             @click="showGif('cold1')">
      </div>
      <div class="skates">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/png/skates.png" v-if="skates" @click="showGif('skates')">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/skates.gif" style="z-index: 100" v-if="!skates"
             @click="showGif('skates')">
      </div>
      <div class="snowman">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/png/snowman.png" v-if="snowman" @click="showGif('snowman')">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/snowman.gif" style="z-index: 100" v-if="!snowman"
             @click="showGif('snowman')">
      </div>
      <div class="snow1">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/png/snow.png" v-if="snow1">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/snow.gif" style="z-index: 100" v-if="!snow1"
             @click="showGif('snow1')">
      </div>
      <div class="fall">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/png/fall.png" v-if="fall" @click="showGif('fall')">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/fall.gif" style="z-index: 100" v-if="!fall"
             @click="showGif('fall')">
      </div>
      <div class="scarf">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/scarf.gif" style="z-index: 100" v-if="!scarf"
             @click="showGif('scarf')">
      </div>
      <div class="sled1">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/png/sled.png" v-if="sled1 && scarf" @click="showGif('sled1')">
        <img src="../../assets/image/202112H5 Winter_MT/GIF_PNG/gif/sled.gif" style="z-index: 100" v-if="!sled1"
             @click="showGif('sled1')">
      </div>
      <div class="warmButton">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_warm Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !warm ? 100 : 1}" @click="showGif('warm')">
      </div>
      <div class="fireplaceButton">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_fireplace Comp 1_00000.png"
             :style="{zIndex: !fireplace ? 100 : 1}" @click="showGif('fireplace')">
      </div>
      <div class="coatButton">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_coat Comp 1_00000.png"
             :style="{zIndex: !coat ? 100 : 1}" @click="showGif('coat')">
      </div>
      <div class="hibernateButton">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_hibernate Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !hibernate ? 100 : 1}" @click="showGif('hibernate')">
      </div>
      <div class="animalsButton">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_animals Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !animals ? 100 : 1}" @click="showGif('animals')">
      </div>
      <div class="cold1Button">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_cold Comp 1_00000.png"
             :style="{zIndex: !cold1 ? 100 : 1}" @click="showGif('cold1')">
      </div>
      <div class="skatesButton">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_skates Comp 1_00000.png"
             :style="{zIndex: !skates ? 100 : 1}" @click="showGif('skates')">
      </div>
      <div class="snow1Button">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_snow Comp 1_00000.png"
             :style="{zIndex: !snow1 ? 100 : 1}" @click="showGif('snow1')">
      </div>
      <div class="snowmanButton">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_snowman Comp 1_00000.png"
             :style="{zIndex: !snowman ? 100 : 1}" @click="showGif('snowman')">
      </div>
      <div class="fallButton">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_fall Comp 1_00000.png"
             :style="{zIndex: !fall ? 100 : 1}" @click="showGif('fall')">
      </div>
      <div class="scarfButton">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_scarf Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !scarf ? 100 : 1}" @click="showGif('scarf')">
      </div>
      <div class="sled1Button">
        <img src="../../assets/image/202112H5 Winter_MT/words/word_sled Comp 1_00000.png"
             :style="{zIndex: !sled1 ? 100 : 1}" @click="showGif('sled1')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Meal Time' && this.part === 'part1'">
      <img src="../../assets/image/202001H5 At home_MT/Walker_BG/BG__00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="bowl">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/bowl.png" v-if="bowl" @click="showGif('bowl')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/bowl.gif" style="z-index: 100" v-if="!bowl"
             @click="showGif('bowl')">
      </div>
      <div class="fishClick" @click="showGif('fish1')" />
      <div class="fish1">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/fish.png" v-if="fish1" >
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/fish.gif" style="z-index: 100" v-if="!fish1"
             @click="showGif('fish1')">
      </div>
      <div class="cup">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/cup.png" v-if="cup" @click="showGif('cup')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/cup.gif" style="z-index: 100" v-if="!cup"
             @click="showGif('cup')">
      </div>
      <div class="chopsticks">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/chopsticks.png" v-if="chopsticks" @click="showGif('chopsticks')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/chopsticks.gif" style="z-index: 100" v-if="!chopsticks"
             @click="showGif('chopsticks')">
      </div>
      <div class="rice">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/rice.png" v-if="rice" @click="showGif('rice')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/rice.gif" style="z-index: 100" v-if="!rice"
             @click="showGif('rice')">
      </div>
      <div class="eatClick" @click="showGif('eat')" />
      <div class="eat">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/eat.png" v-if="eat" >
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/eat.gif" style="z-index: 100" v-if="!eat"
             @click="showGif('eat')">
      </div>
      <div class="chicken">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/chicken.png" v-if="chicken" @click="showGif('chicken')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/chicken.gif" style="z-index: 100" v-if="!chicken"
             @click="showGif('chicken')">
      </div>
      <div class="drink">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/drink.png" v-if="drink" @click="showGif('drink')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/drink.gif" style="z-index: 100" v-if="!drink"
             @click="showGif('drink')">
      </div>
      <div class="tea">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/tea.png" v-if="tea" @click="walkers&&showGif('tea')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/tea.gif" style="z-index: 100" v-if="!tea"
             @click="showGif('tea')">
      </div>
      <div class="spoon">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/spoon.png" v-if="spoon" @click="walkers&&showGif('spoon')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/spoon.gif" style="z-index: 100" v-if="!spoon"
             @click="showGif('spoon')">
      </div>
      <div class="milk">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/milk.png" v-if="milk" @click="walkers&&showGif('milk')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/milk.gif" style="z-index: 100" v-if="!milk"
             @click="showGif('milk')">
      </div>
      <div class="vegetables">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/png/vegetables.png" v-if="vegetables" @click="walkers&&showGif('vegetables')">
        <img src="../../assets/image/202001H5 At home_MT/GIF_PNG/gif/vegetables.gif" style="z-index: 100" v-if="!vegetables"
             @click="showGif('vegetables')">
      </div>
      <div class="vegetablesButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_vegetables Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !vegetables ? 100 : 1}" @click="showGif('vegetables')">
      </div>
      <div class="bowlButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_bowl Comp 1_00000.png"
             :style="{zIndex: !bowl ? 100 : 1}" @click="showGif('bowl')">
      </div>
      <div class="cupButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_cup Comp 1_00000.png"
             :style="{zIndex: !cup ? 100 : 1}" @click="showGif('cup')">
      </div>
      <div class="fish1Button">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_fish Comp 1_00000.png"
             :style="{zIndex: !fish1 ? 100 : 1}" @click="showGif('fish1')">
      </div>
      <div class="chopsticksButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_chopsticks Comp 1_00000.png"
             :style="{zIndex: !chopsticks ? 100 : 1}" @click="showGif('chopsticks')">
      </div>
      <div class="eatButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_eat Comp 1_00000.png"
             :style="{zIndex: !eat ? 100 : 1}" @click="showGif('eat')">
      </div>
      <div class="riceButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_rice Comp 1_00000.png"
             :style="{zIndex: !rice ? 100 : 1}" @click="showGif('rice')">
      </div>
      <div class="chickenButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_chicken Comp 1_00000.png"
             :style="{zIndex: !chicken ? 100 : 1}" @click="showGif('chicken')">
      </div>
      <div class="drinkButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_drink Comp 1_00000.png"
             :style="{zIndex: !drink ? 100 : 1}" @click="showGif('drink')">
      </div>
      <div class="teaButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_tea Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !tea ? 100 : 1}" @click="showGif('tea')">
      </div>
      <div class="spoonButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_spoon Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !spoon ? 100 : 1}" @click="showGif('spoon')">
      </div>
      <div class="milkButton">
        <img src="../../assets/image/202001H5 At home_MT/Word/word_milk Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !milk ? 100 : 1}" @click="showGif('milk')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Meal Time' && this.part === 'part2'">
      <img src="../../assets/image/202001H5 At the Restaurant_MT/Walker_BG/BG__00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="order">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/order.png" v-if="order" @click="walkers&&showGif('order')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/order.gif" style="z-index: 100" v-if="!order"
             @click="showGif('order')">
      </div>
      <div class="napkin">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/napkin.png" v-if="napkin" @click="showGif('napkin')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/napkin.gif" style="z-index: 100" v-if="!napkin"
             @click="showGif('napkin')">
      </div>
      <div class="juice">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/juice.png" v-if="juice" @click="walkers&&showGif('juice')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/juice.gif" style="z-index: 100" v-if="!juice"
             @click="showGif('juice')">
      </div>
      <div class="noodles">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/noodles.png" v-if="noodles" @click="walkers&&showGif('noodles')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/noodles.gif" style="z-index: 100" v-if="!noodles"
             @click="showGif('noodles')">
      </div>
      <div class="pizza">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/pizza.png" v-if="pizza" @click="showGif('pizza')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/pizza.gif" style="z-index: 100" v-if="!pizza"
             @click="showGif('pizza')">
      </div>
      <div class="iceCream">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/ice cream.png" v-if="iceCream" @click="showGif('iceCream')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/ice cream.gif" style="z-index: 100" v-if="!iceCream"
             @click="showGif('iceCream')">
      </div>
      <div class="forkClick" @click="showGif('fork')"/>
      <div class="fork">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/fork.png" v-if="fork" >
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/fork.gif" style="z-index: 100" v-if="!fork"
             @click="showGif('fork')">
      </div>
      <div class="knifeClick" @click="showGif('knife')"/>
      <div class="knife">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/knife.png" v-if="knife">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/knife.gif" style="z-index: 100" v-if="!knife"
             @click="showGif('knife')">
      </div>
      <div class="burger">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/burger.png" v-if="burger" @click="walkers&&showGif('burger')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/burger.gif" style="z-index: 100" v-if="!burger"
             @click="showGif('burger')">
      </div>
      <div class="plate">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/plate.png" v-if="plate" @click="showGif('plate')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/plate.gif" style="z-index: 100" v-if="!plate"
             @click="showGif('plate')">
      </div>
      <div class="waiter">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/waiter.png" v-if="waiter" @click="showGif('waiter')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/waiter.gif" style="z-index: 100" v-if="!waiter"
             @click="showGif('waiter')">
      </div>
      <div class="menu">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/png/menu.png" v-if="menu" @click="showGif('menu')">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/GIF_PNG/gif/menu.gif" style="z-index: 100" v-if="!menu"
             @click="showGif('menu')">
      </div>
      <div class="orderButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_order Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !order ? 100 : 1}" @click="showGif('order')">
      </div>
      <div class="juiceButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_juice Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !juice ? 100 : 1}" @click="showGif('juice')">
      </div>
      <div class="napkinButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_napkin Comp 1_00000.png"
             :style="{zIndex: !napkin ? 100 : 1}" @click="showGif('napkin')">
      </div>
      <div class="noodlesButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_noodles Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !noodles ? 100 : 1}" @click="showGif('noodles')">
      </div>
      <div class="forkButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_fork Comp 1_00000.png"
             :style="{zIndex: !fork ? 100 : 1}" @click="showGif('fork')">
      </div>
      <div class="knifeButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_knife Comp 1_00000.png"
             :style="{zIndex: !knife ? 100 : 1}" @click="showGif('knife')">
      </div>
      <div class="pizzaButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_pizza Comp 1_00000.png"
             :style="{zIndex: !pizza ? 100 : 1}" @click="showGif('pizza')">
      </div>
      <div class="iceCreamButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_ice cream Comp 1_00000.png"
             :style="{zIndex: !iceCream ? 100 : 1}" @click="showGif('iceCream')">
      </div>
      <div class="burgerButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_burger Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !burger ? 100 : 1}" @click="showGif('burger')">
      </div>
      <div class="waiterButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_waiter Comp 1_00000.png"
             :style="{zIndex: !waiter ? 100 : 1}" @click="showGif('waiter')">
      </div>
      <div class="menuButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_menu Comp 1_00000.png"
             :style="{zIndex: !menu ? 100 : 1}" @click="showGif('menu')">
      </div>
      <div class="plateButton">
        <img src="../../assets/image/202001H5 At the Restaurant_MT/Word/word_plate Comp 1_00000.png"
             :style="{zIndex: !plate ? 100 : 1}" @click="showGif('plate')">
      </div>
    </div>-->
    <div v-if="this.unit === 'On the Farm' && this.part === 'part1'">
      <img src="../../assets/image/202002H5 In the barn_MT/Walker_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="barn">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/barn.png" v-if="barn" @click="showGif('barn')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/barn.gif" style="z-index: 100" v-if="!barn"
             @click="showGif('barn')">
      </div>
      <div class="bucket">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/bucket.png" v-if="bucket" @click="walkers&&showGif('bucket')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/bucket.gif" style="z-index: 100" v-if="!bucket"
             @click="showGif('bucket')">
      </div>
      <div class="chick">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/chick.png" v-if="chick" @click="walkers&&showGif('chick')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/chick.gif" style="z-index: 100" v-if="!chick"
             @click="showGif('chick')">
      </div>
      <div class="cow">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/cow.png" v-if="cow" @click="walkers&&showGif('cow')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/cow.gif" style="z-index: 100" v-if="!cow"
             @click="showGif('cow')">
      </div>
      <div class="crow">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/crow.png" v-if="crow" @click="showGif('crow')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/crow.gif" style="z-index: 100" v-if="!crow"
             @click="showGif('crow')">
      </div>
      <div class="duck">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/duck.png" v-if="duck" @click="showGif('duck')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/duck.gif" style="z-index: 100" v-if="!duck"
             @click="showGif('duck')">
      </div>
      <div class="egg">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/egg.png" v-if="egg" @click="showGif('egg')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/egg.gif" style="z-index: 100" v-if="!egg"
             @click="showGif('egg')">
      </div>
      <div class="feed1">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/feed.png" v-if="feed1" @click="showGif('feed1')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/feed.gif" style="z-index: 100" v-if="!feed1"
             @click="showGif('feed1')">
      </div>
      <div class="hay">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/hay.png" v-if="hay" @click="showGif('hay')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/hay.gif" style="z-index: 100" v-if="!hay"
             @click="showGif('hay')">
      </div>
      <div class="hen">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/hen.gif" style="z-index: 100" v-if="!hen"
             @click="showGif('hen')">
      </div>
      <div class="rooster">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/rooster.png" v-if="rooster" @click="walkers&&showGif('rooster')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/rooster.gif" style="z-index: 100" v-if="!rooster"
             @click="showGif('rooster')">
      </div>
      <div class="sheep">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/png/sheep.png" v-if="sheep" @click="showGif('sheep')">
        <img src="../../assets/image/202002H5 In the barn_MT/GIF_PNG/gif/sheep.gif" style="z-index: 100" v-if="!sheep"
             @click="showGif('sheep')">
      </div>
      <div class="barnButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_barn Comp 1_00000.png"
             :style="{zIndex: !barn ? 100 : 1}" @click="showGif('barn')">
      </div>
      <div class="hayButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_hay Comp 1_00000.png"
             :style="{zIndex: !hay ? 100 : 1}" @click="showGif('hay')">
      </div>
      <div class="bucketButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_bucket Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !bucket ? 100 : 1}" @click="showGif('bucket')">
      </div>
      <div class="eggButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_egg Comp 1_00000.png"
             :style="{zIndex: !egg ? 100 : 1}" @click="showGif('egg')">
      </div>
      <div class="duckButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_duck Comp 1_00000.png"
             :style="{zIndex: !duck ? 100 : 1}" @click="showGif('duck')">
      </div>
      <div class="henButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_hen Comp 1_00000.png"
             :style="{zIndex: !hen ? 100 : 1}" @click="showGif('hen')">
      </div>
      <div class="chickButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_chick Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !chick ? 100 : 1}" @click="showGif('chick')">
      </div>
      <div class="roosterButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_rooster Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !rooster ? 100 : 1}" @click="showGif('rooster')">
      </div>
      <div class="feed1Button">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_feed Comp 1_00000.png"
             :style="{zIndex: !feed1 ? 100 : 1}" @click="showGif('feed1')">
      </div>
      <div class="cowButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_cow Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !cow ? 100 : 1}" @click="showGif('cow')">
      </div>
      <div class="crowButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_crow Comp 1_00000.png"
             :style="{zIndex: !crow ? 100 : 1}" @click="showGif('crow')">
      </div>
      <div class="sheepButton">
        <img src="../../assets/image/202002H5 In the barn_MT/words/word_sheep Comp 1_00000.png"
             :style="{zIndex: !sheep ? 100 : 1}" @click="showGif('sheep')">
      </div>
    </div>
    <div v-else-if="this.unit === 'On the Farm' && this.part === 'part2'">
      <img src="../../assets/image/202002H5 In the field_MT/Walker_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="apple">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/png/apple.png" v-if="apple" @click="showGif('apple')">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/apple.gif" style="z-index: 100" v-if="!apple"
             @click="showGif('apple')">
      </div>
      <div class="farmer">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/png/farmer.png" v-if="farmer" @click="showGif('farmer')">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/farmer.gif" style="z-index: 100" v-if="!farmer"
             @click="showGif('farmer')">
      </div>
      <div class="fence">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/png/fence.png" v-if="fence" @click="walkers&&showGif('fence')">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/fence.gif" style="z-index: 100" v-if="!fence"
             @click="showGif('fence')">
      </div>
      <div class="gallop">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/gallop.gif" style="z-index: 100" v-if="!gallop"
             @click="showGif('gallop')">
      </div>
      <div class="horse1">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/png/horse.png" v-if="horse1&&gallop" @click="showGif('horse1')">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/horse.gif" style="z-index: 100" v-if="!horse1"
             @click="showGif('horse1')">
      </div>
      <div class="pick">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/png/pick.png" v-if="pick" @click="walkers&&showGif('pick')">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/pick.gif" style="z-index: 100" v-if="!pick"
             @click="showGif('pick')">
      </div>
      <div class="pig">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/png/pig.png" v-if="pig&&roll" @click="showGif('pig')">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/pig.gif" style="z-index: 100" v-if="!pig"
             @click="showGif('pig')">
      </div>
      <div class="plants">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/png/plants.png" v-if="plants" @click="walkers&&showGif('plants')">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/plants.gif" style="z-index: 100" v-if="!plants"
             @click="showGif('plants')">
      </div>
      <div class="plough">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/png/plough.png" v-if="plough&&tractor" @click="showGif('plough')">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/plough.gif" style="z-index: 100" v-if="!plough"
             @click="showGif('plough')">
      </div>
      <div class="appleButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_apple Comp 1_00000.png"
             :style="{zIndex: !apple ? 100 : 1}" @click="showGif('apple')">
      </div>
      <div class="plantsButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_plants Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !plants ? 100 : 1}" @click="showGif('plants')">
      </div>
      <div class="pickButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_pick Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !pick ? 100 : 1}" @click="showGif('pick')">
      </div>
      <div class="treeButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_tree Comp 1_00000.png"
             :style="{zIndex: !tree ? 101 : 1}" @click="showGif('tree')">
      </div>
      <div class="farmerButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_farmer Comp 1_00000.png"
             :style="{zIndex: !farmer ? 100 : 1}" @click="showGif('farmer')">
      </div>
      <div class="gallopButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_gallop Comp 1_00000.png"
             :style="{zIndex: !gallop ? 100 : 1}" @click="showGif('gallop')">
      </div>
      <div class="horse1Button">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_horse Comp 1_00000.png"
             :style="{zIndex: !horse1 ? 100 : 1}" @click="showGif('horse1')">
      </div>
      <div class="fenceButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_fence Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !fence ? 100 : 1}" @click="showGif('fence')">
      </div>
      <div class="pigButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_pig Comp 1_00000.png"
             :style="{zIndex: !pig ? 100 : 1}" @click="showGif('pig')">
      </div>
      <div class="rollButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_roll Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !roll ? 101 : 1}" @click="showGif('roll')">
      </div>
      <div class="ploughButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_plough Comp 1_00000.png"
             :style="{zIndex: !plough ? 100 : 1}" @click="showGif('plough')">
      </div>
      <div class="tractorButton">
        <img src="../../assets/image/202002H5 In the field_MT/words/word_tractor Comp 1_00000.png"
             :style="{zIndex: !tractor ? 100 : 1}" @click="showGif('tractor')">
      </div>
      <div class="roll">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/roll.gif" style="z-index: 100" v-if="!roll"
             @click="showGif('roll')">
      </div>
      <div class="tractor">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/tractor.gif" style="z-index: 100" v-if="!tractor"
             @click="showGif('tractor')">
      </div>
      <div class="tree">
        <img src="../../assets/image/202002H5 In the field_MT/GIF_PNG/gif/tree.gif" style="z-index: 100" v-if="!tree"
             @click="showGif('tree')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Seasons' && this.part === 'part1'">
      <img src="../../assets/image/Autumn and winter_MT/Walker_BG/BG__00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="hotChocolate">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/hot chocolate.gif" style="z-index: 100" v-if="!hotChocolate"
             @click="showGif('hotChocolate')">
      </div>
      <div class="iceSkating">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/ice skating.png" v-if="iceSkating" @click="walkers&&showGif('iceSkating')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/ice skating.gif" style="z-index: 100" v-if="!iceSkating"
             @click="showGif('iceSkating')">
      </div>
      <div class="icicles">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/icicles.png" v-if="icicles" @click="walkers&&showGif('icicles')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/icicles.gif" style="z-index: 100" v-if="!icicles"
             @click="showGif('icicles')">
      </div>
      <div class="leaves">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/leaves.png" v-if="leaves" @click="showGif('leaves')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/leaves.gif" style="z-index: 100" v-if="!leaves"
             @click="showGif('leaves')">
      </div>
      <div class="rain">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/rain.png" v-if="rain" @click="showGif('rain')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/rain.gif" style="z-index: 100" v-if="!rain"
             @click="showGif('rain')">
      </div>
      <div class="rake">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/rake.png" v-if="rake" @click="showGif('rake')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/rake.gif" style="z-index: 100" v-if="!rake"
             @click="showGif('rake')">
      </div>
      <div class="shiver">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/shiver.png" v-if="shiver&&hotChocolate" @click="showGif('shiver')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/shiver.gif" style="z-index: 100" v-if="!shiver"
             @click="showGif('shiver')">
      </div>
      <div class="ski">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/ski.png" v-if="ski" @click="walkers&&showGif('ski')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/ski.gif" style="z-index: 100" v-if="!ski"
             @click="showGif('ski')">
      </div>
      <div class="snow2">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/snow.png" v-if="snow2" @click="showGif('snow2')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/snow.gif" style="z-index: 100" v-if="!snow2"
             @click="showGif('snow2')">
      </div>
      <div class="squirrel">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/squirrel.png" v-if="squirrel" @click="showGif('squirrel')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/squirrel.gif" style="z-index: 100" v-if="!squirrel"
             @click="showGif('squirrel')">
      </div>
      <div class="umbrella">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/umbrella.png" v-if="umbrella" @click="showGif('umbrella')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/umbrella.gif" style="z-index: 100" v-if="!umbrella"
             @click="showGif('umbrella')">
      </div>
      <div class="wind1">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/png/wind.png" v-if="wind1" @click="walkers&&showGif('wind1')">
        <img src="../../assets/image/Autumn and winter_MT/GIF_PNG/gif/wind.gif" style="z-index: 100" v-if="!wind1"
             @click="showGif('wind1')">
      </div>
      <div class="rakeButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_rake Comp 1_00000.png"
             :style="{zIndex: !rake ? 100 : 1}" @click="showGif('rake')">
      </div>
      <div class="leavesButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_leaves Comp 1_00000.png"
             :style="{zIndex: !leaves ? 100 : 1}" @click="showGif('leaves')">
      </div>
      <div class="rainButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_rain Comp 1_00000.png"
             :style="{zIndex: !rain ? 100 : 1}" @click="showGif('rain')">
      </div>
      <div class="umbrellaButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_umbrella Comp 1_00000.png"
             :style="{zIndex: !umbrella ? 100 : 1}" @click="showGif('umbrella')">
      </div>
      <div class="squirrelButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_squirrel Comp 1_00000.png"
             :style="{zIndex: !squirrel ? 100 : 1}" @click="showGif('squirrel')">
      </div>
      <div class="shiverButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_shiver Comp 1_00000.png"
             :style="{zIndex: !shiver ? 100 : 1}" @click="showGif('shiver')">
      </div>
      <div class="wind1Button">
        <img src="../../assets/image/Autumn and winter_MT/words/word_wind Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !wind1 ? 100 : 1}" @click="showGif('wind1')">
      </div>
      <div class="iciclesButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_icicles Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !icicles ? 100 : 1}" @click="showGif('icicles')">
      </div>
      <div class="hotChocolateButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_hot chocolate Comp 1_00000.png"
             :style="{zIndex: !hotChocolate ? 100 : 1}" @click="showGif('hotChocolate')">
      </div>
      <div class="iceSkatingButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_ice skating Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !iceSkating ? 100 : 1}" @click="showGif('iceSkating')">
      </div>
      <div class="snow2Button">
        <img src="../../assets/image/Autumn and winter_MT/words/word_snow Comp 1_00000.png"
             :style="{zIndex: !snow2 ? 100 : 1}" @click="showGif('snow2')">
      </div>
      <div class="skiButton">
        <img src="../../assets/image/Autumn and winter_MT/words/word_ski Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !ski ? 100 : 1}" @click="showGif('ski')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Seasons' && this.part === 'part2'">
      <img src="../../assets/image/Spring and summer_MT/Walker_BG/BG__00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="butterfly">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/butterfly.png" v-if="butterfly" @click="showGif('butterfly')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/butterfly.gif" style="z-index: 100" v-if="!butterfly"
             @click="showGif('butterfly')">
      </div>
      <div class="flowers">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/flowers.png" v-if="flowers" @click="showGif('flowers')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/flowers.gif" style="z-index: 100" v-if="!flowers"
             @click="showGif('flowers')">
      </div>
      <div class="fly">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/fly.gif" style="z-index: 100" v-if="!fly"
             @click="showGif('fly')">
      </div>
      <div class="hike">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/hike.png" v-if="hike" @click="walkers&&showGif('hike')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/hike.gif" style="z-index: 100" v-if="!hike"
             @click="showGif('hike')">
      </div>
      <div class="iceCream1">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/ice cream.png" v-if="iceCream1" @click="showGif('iceCream1')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/ice cream.gif" style="z-index: 100" v-if="!iceCream1"
             @click="showGif('iceCream1')">
      </div>
      <div class="kite">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/kite.png" v-if="kite&&fly" @click="showGif('kite')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/kite.gif" style="z-index: 100" v-if="!kite"
             @click="showGif('kite')">
      </div>
      <div class="picnic">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/picnic.png" v-if="picnic" @click="showGif('picnic')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/picnic.gif" style="z-index: 100" v-if="!picnic"
             @click="showGif('picnic')">
      </div>
      <div class="plant">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/plant.png" v-if="plant" @click="walkers&&showGif('plant')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/plant.gif" style="z-index: 100" v-if="!plant"
             @click="showGif('plant')">
      </div>
      <div class="seeds">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/seeds.png" v-if="seeds" @click="showGif('seeds')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/seeds.gif" style="z-index: 100" v-if="!seeds"
             @click="showGif('seeds')">
      </div>
      <div class="sunny">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/sunny.png" v-if="sunny" @click="showGif('sunny')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/sunny.gif" style="z-index: 100" v-if="!sunny"
             @click="showGif('sunny')">
      </div>
      <div class="sunscreen">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/sunscreen.png" v-if="sunscreen" @click="walkers&&showGif('sunscreen')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/sunscreen.gif" style="z-index: 100" v-if="!sunscreen"
             @click="showGif('sunscreen')">
      </div>
      <div class="swim">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/png/swim.png" v-if="swim" @click="showGif('swim')">
        <img src="../../assets/image/Spring and summer_MT/GIF_PNG/gif/swim.gif" style="z-index: 100" v-if="!swim"
             @click="showGif('swim')">
      </div>
      <div class="butterflyButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_butterfly Comp 1_00000.png"
             :style="{zIndex: !butterfly ? 100 : 1}" @click="showGif('butterfly')">
      </div>
      <div class="flowersButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_flowers Comp 1_00000.png"
             :style="{zIndex: !flowers ? 100 : 1}" @click="showGif('flowers')">
      </div>
      <div class="flyButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_fly Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !fly ? 100 : 1}" @click="showGif('fly')">
      </div>
      <div class="hikeButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_hike Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !hike ? 100 : 1}" @click="showGif('hike')">
      </div>
      <div class="iceCream1Button">
        <img src="../../assets/image/Spring and summer_MT/words/word_ice cream Comp 1_00000.png"
             :style="{zIndex: !iceCream1 ? 100 : 1}" @click="showGif('iceCream1')">
      </div>
      <div class="kiteButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_kite Comp 1_00000.png"
             :style="{zIndex: !kite ? 100 : 1}" @click="showGif('kite')">
      </div>
      <div class="picnicButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_picnic Comp 1_00000.png"
             :style="{zIndex: !picnic ? 100 : 1}" @click="showGif('picnic')">
      </div>
      <div class="plantButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_plant Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !plant ? 100 : 1}" @click="showGif('plant')">
      </div>
      <div class="seedsButton">
        <img src="../../assets/image/Spring and summer_MT/words/seeds.png"
             :style="{zIndex: !seeds ? 100 : 1}" @click="showGif('seeds')">
      </div>
      <div class="sunnyButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_sunny Comp 1_00000.png"
             :style="{zIndex: !sunny ? 100 : 1}" @click="showGif('sunny')">
      </div>
      <div class="sunscreenButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_sunscreen Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !sunscreen ? 100 : 1}" @click="showGif('sunscreen')">
      </div>
      <div class="swimButton">
        <img src="../../assets/image/Spring and summer_MT/words/word_swim Comp 1_00000.png"
             :style="{zIndex: !swim ? 100 : 1}" @click="showGif('swim')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Transportation' && this.part === 'part1'">
      <img src="../../assets/image/Travelling Near_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="bike">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/bike.png" v-if="bike" @click="showGif('bike')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/bike.gif" style="z-index: 100" v-if="!bike"
             @click="showGif('bike')">
      </div>
      <div class="bus">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/bus.gif" style="z-index: 100" v-if="!bus"
             @click="showGif('bus')">
      </div>
      <div class="car">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/car.png" v-if="car" @click="showGif('car')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/car.gif" style="z-index: 100" v-if="!car"
             @click="showGif('car')">
      </div>
      <div class="drive">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/drive.png" v-if="drive&&honk" @click="showGif('drive')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/drive.gif" style="z-index: 100" v-if="!drive"
             @click="showGif('drive')">
      </div>
      <div class="ferry">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/ferry.png" v-if="ferry" @click="showGif('ferry')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/ferry.gif" style="z-index: 100" v-if="!ferry"
             @click="showGif('ferry')">
      </div>
      <div class="honk">
<!--        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/honk.png" v-if="honk&&drive" @click="walkers&&showGif('honk')">-->
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/honk.gif" style="z-index: 100" v-if="!honk"
             @click="showGif('honk')">
      </div>
      <div class="motorbike">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/motorbike.png" v-if="motorbike" @click="walkers&&showGif('motorbike')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/motorbike.gif" style="z-index: 100" v-if="!motorbike"
             @click="showGif('motorbike')">
      </div>
      <div class="stop">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/stop.png" v-if="stop&&bus" @click="walkers&&showGif('stop')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/stop.gif" style="z-index: 100" v-if="!stop"
             @click="showGif('stop')">
      </div>
      <div class="trafficLights">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/traffic lights.png" v-if="trafficLights" @click="showGif('trafficLights')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/traffic lights.gif" style="z-index: 100" v-if="!trafficLights"
             @click="showGif('trafficLights')">
      </div>
      <div class="tram">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/tram.png" v-if="tram" @click="showGif('tram')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/tram.gif" style="z-index: 100" v-if="!tram"
             @click="showGif('tram')">
      </div>
      <div class="truck">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/truck.png" v-if="truck" @click="walkers&&showGif('truck')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/truck.gif" style="z-index: 100" v-if="!truck"
             @click="showGif('truck')">
      </div>
      <div class="walk">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/png/walk.png" v-if="walk" @click="showGif('walk')">
        <img src="../../assets/image/Travelling Near_MT/GIF_PNG/gif/walk.gif" style="z-index: 100" v-if="!walk"
             @click="showGif('walk')">
      </div>
      <div class="stopButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_stop Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !stop ? 100 : 1}" @click="showGif('stop')">
      </div>
      <div class="trafficLightsButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_traffic lights Comp 1_00000.png"
             :style="{zIndex: !trafficLights ? 100 : 1}" @click="showGif('trafficLights')">
      </div>
      <div class="carButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_car Comp 1_00000.png"
             :style="{zIndex: !car ? 100 : 1}" @click="showGif('car')">
      </div>
      <div class="bikeButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_bike Comp 1_00000.png"
             :style="{zIndex: !bike ? 100 : 1}" @click="showGif('bike')">
      </div>
      <div class="truckButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_truck Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !truck ? 100 : 3}" @click="showGif('truck')">
      </div>
      <div class="busButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_bus Comp 1_00000.png"
             :style="{zIndex: !bus ? 100 : 3}" @click="showGif('bus')">
      </div>
      <div class="honkButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_honk Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !honk ? 100 : 2}" @click="showGif('honk')">
      </div>
      <div class="motorbikeButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_motorbike Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !motorbike ? 100 : 1}" @click="showGif('motorbike')">
      </div>
      <div class="walkButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_walk Comp 1_00000.png"
             :style="{zIndex: !walk ? 100 : 1}" @click="showGif('walk')">
      </div>
      <div class="ferryButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_ferry Comp 1_00000.png"
             :style="{zIndex: !ferry ? 100 : 1}" @click="showGif('ferry')">
      </div>
      <div class="driveButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_drive Comp 1_00000.png"
             :style="{zIndex: !drive ? 100 : 1}" @click="showGif('drive')">
      </div>
      <div class="tramButton">
        <img src="../../assets/image/Travelling Near_MT/words/word_tram Comp 1_00000.png"
             :style="{zIndex: !tram ? 100 : 1}" @click="showGif('tram')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Transportation' && this.part === 'part2'">
      <img src="../../assets/image/Travelling Far_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="airplane">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/png/airplane.png" v-if="airplane" @click="showGif('airplane')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/airplane.gif" style="z-index: 100" v-if="!airplane"
             @click="showGif('airplane')">
      </div>
      <div class="airport">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/png/airport.png" v-if="airport" @click="walkers&&showGif('airport')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/airport.gif" style="z-index: 100" v-if="!airport"
             @click="showGif('airport')">
      </div>
      <div class="stationB" @click="walkers&&showGif('station')"/>
      <div class="station">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/png/fast_station_train.png" v-if="station&&fast&&train" >
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/fast.gif" style="z-index: 100" v-if="!station"
             @click="showGif('station')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/fast.gif" style="z-index: 100" v-if="!fast"
             @click="showGif('fast')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/train.gif" style="z-index: 100" v-if="!train"
             @click="showGif('train')">
      </div>
      <div class="helicopter">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/png/fly_helicopter.png" v-if="helicopter&&fly1" @click="showGif('helicopter')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/helicopter.gif" style="z-index: 100" v-if="!helicopter"
             @click="showGif('helicopter')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/fly.gif" style="z-index: 100" v-if="!fly1"
             @click="showGif('fly1')">
      </div>
      <div class="land">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/png/land.png" v-if="land" @click="walkers&&showGif('land')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/land.gif" style="z-index: 100" v-if="!land"
             @click="showGif('land')">
      </div>
      <div class="slow">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/png/slow_ship.png" v-if="slow&&ship" @click="showGif('slow')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/slow.gif" style="z-index: 100" v-if="!slow"
             @click="showGif('slow')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/ship.gif" style="z-index: 100" v-if="!ship"
             @click="showGif('ship')">
      </div>
      <div class="suitcase">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/png/suitcase_ticket.png" v-if="suitcase&&ticket" @click="showGif('ticket')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/suitcase.gif" style="z-index: 100" v-if="!suitcase"
             @click="showGif('suitcase')">
        <img src="../../assets/image/Travelling Far_MT/GIF_PNG/gif/ticket.gif" style="z-index: 100" v-if="!ticket"
             @click="showGif('ticket')">
      </div>
      <div class="stationButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_station Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !station ? 100 : 3}" @click="showGif('station')">
      </div>
      <div class="airportButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_airport Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !airport ? 100 : 3}" @click="showGif('airport')">
      </div>
      <div class="airplaneButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_airplane Comp 1_00000.png"
             :style="{zIndex: !airplane ? 100 : 3}" @click="showGif('airplane')">
      </div>
      <div class="fastButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_fast Comp 1_00000.png"
             :style="{zIndex: !fast ? 100 : 3}" @click="showGif('fast')">
      </div>
      <div class="trainButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_train Comp 1_00000.png"
             :style="{zIndex: !train ? 100 : 3}" @click="showGif('train')">
      </div>
      <div class="fly1Button">
        <img src="../../assets/image/Travelling Far_MT/words/word_fly Comp 1_00000.png"
             :style="{zIndex: !fly1 ? 100 : 3}" @click="showGif('fly1')">
      </div>
      <div class="helicopterButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_helicopter Comp 1_00000.png"
             :style="{zIndex: !helicopter ? 100 : 3}" @click="showGif('helicopter')">
      </div>
      <div class="ticketButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_ticket Comp 1_00000.png"
             :style="{zIndex: !ticket ? 100 : 3}" @click="showGif('ticket')">
      </div>
      <div class="landButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_land Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !land ? 100 : 3}" @click="showGif('land')">
      </div>
      <div class="suitcaseButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_suitcase Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !suitcase ? 100 : 3}" @click="showGif('suitcase')">
      </div>
      <div class="slowButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_slow Comp 1_00000.png"
             :style="{zIndex: !slow ? 100 : 3}" @click="showGif('slow')">
      </div>
      <div class="shipButton">
        <img src="../../assets/image/Travelling Far_MT/words/word_ship Comp 1_00000.png"
             :style="{zIndex: !ship ? 100 : 3}" @click="showGif('ship')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Bugs' && this.part === 'part1'">
      <img src="../../assets/image/202005H5 Crawling Bugs_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="ant">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Png/Ant_comp_0000000000.png" v-if="ant" @click="showGif('ant')">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/Ant_comp.gif" style="z-index: 100" v-if="!ant"
             @click="showGif('ant')">
      </div>
      <div class="caterpillar">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Png/caterpilla_0000000000.png" v-if="caterpillar&&munch" @click="showGif('caterpillar')">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/caterpilla.gif" style="z-index: 100" v-if="!caterpillar"
             @click="showGif('caterpillar')">
      </div>
      <div class="caterpillar">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/munch.gif" style="z-index: 100" v-if="!munch"
             @click="showGif('munch')">
      </div>
      <div class="crawl">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/crawl.gif" style="z-index: 100" v-if="!crawl"
             @click="showGif('crawl')">
      </div>
      <div class="feelers">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Png/Feelers_comp_0000000000.png" v-if="feelers" @click="walkers&&showGif('feelers')">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/Feelers_comp.gif" style="z-index: 100" v-if="!feelers"
             @click="showGif('feelers')">
      </div>
      <div class="leaf">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Png/leaf_Comp__0000000000.png" v-if="leaf" @click="walkers&&showGif('leaf')">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/leaf_Comp_.gif" style="z-index: 100" v-if="!leaf"
             @click="showGif('leaf')">
      </div>
      <div class="mantis">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Png/Mantis_comp_0000000000.png" v-if="mantis" @click="walkers&&showGif('mantis')">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/Mantis_comp.gif" style="z-index: 100" v-if="!mantis"
             @click="showGif('mantis')">
      </div>
      <div class="snail">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Png/snail_comp_0000000000.png" v-if="snail" @click="showGif('snail')">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/snail_comp.gif" style="z-index: 100" v-if="!snail"
             @click="showGif('snail')">
      </div>
      <div class="spider">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Png/spider.png" v-if="spider&&web&&crawl" @click="showGif('spider')">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/spider.gif" style="z-index: 100" v-if="!spider"
             @click="showGif('spider')">
      </div>
      <div class="web">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Png/web.png" v-if="web&&crawl" @click="showGif('web')">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/web.gif" style="z-index: 100" v-if="!web"
             @click="showGif('web')">
      </div>
      <div class="wiggle">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Png/wiggle.png" v-if="wiggle&&worm" @click="showGif('wiggle')">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/wiggle.gif" style="z-index: 100" v-if="!wiggle"
             @click="showGif('wiggle')">
      </div>
      <div class="wiggle">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/GIF_PNG/Gif/worm.gif" style="z-index: 100" v-if="!worm"
             @click="showGif('worm')">
      </div>
      <div class="webButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_web Comp 1_00000.png"
             :style="{zIndex: !web ? 100 : 1}" @click="showGif('web')">
      </div>
      <div class="spiderButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_spider Comp 1_00000.png"
             :style="{zIndex: !spider ? 100 : 1}" @click="showGif('spider')">
      </div>
      <div class="feelersButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_feelers Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !feelers ? 100 : 1}" @click="showGif('feelers')">
      </div>
      <div class="antButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_ant Comp 1_00000.png"
             :style="{zIndex: !ant ? 100 : 1}" @click="showGif('ant')">
      </div>
      <div class="crawlButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_crawl Comp 1_00000.png"
             :style="{zIndex: !crawl ? 100 : 1}" @click="showGif('crawl')">
      </div>
      <div class="leafButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_leaf Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !leaf ? 100 : 1}" @click="showGif('leaf')">
      </div>
      <div class="mantisButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_mantis Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !mantis ? 100 : 1}" @click="showGif('mantis')">
      </div>
      <div class="munchButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_munch Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !munch ? 100 : 1}" @click="showGif('munch')">
      </div>
      <div class="snailButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_snail Comp 1_00000.png"
             :style="{zIndex: !snail ? 100 : 1}" @click="showGif('snail')">
      </div>
      <div class="caterpillarButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_caterpillar Comp 1_00000.png"
             :style="{zIndex: !caterpillar ? 100 : 1}" @click="showGif('caterpillar')">
      </div>
      <div class="wormButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_worm Comp 1_00000.png"
             :style="{zIndex: !worm ? 100 : 1}" @click="showGif('worm')">
      </div>
      <div class="wiggleButton">
        <img src="../../assets/image/202005H5 Crawling Bugs_MT/words/word_wiggle Comp 1_00000.png"
             :style="{zIndex: !wiggle ? 100 : 1}" @click="showGif('wiggle')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Bugs' && this.part === 'part2'">
      <img src="../../assets/image/202005H5 Flying Bugs_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="bee">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/bee.png" v-if="bee" @click="showGif('bee')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/bee.gif" style="z-index: 100" v-if="!bee"
             @click="showGif('bee')">
      </div>
      <div class="butterfly2">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/butterfly.png" v-if="butterfly2&&fly2" @click="showGif('butterfly2')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/butterfly_comp_2.gif" style="z-index: 100" v-if="!butterfly2"
             @click="showGif('butterfly2')">
      </div>
      <div class="buzz">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/buzz.png" v-if="buzz" @click="showGif('buzz')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/buzz.gif" style="z-index: 100" v-if="!buzz"
             @click="showGif('buzz')">
      </div>
      <div class="dragonfly">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/dragonfly.png" v-if="dragonfly" @click="walkers&&showGif('dragonfly')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/dragonfly_comp.gif" style="z-index: 100" v-if="!dragonfly"
             @click="showGif('dragonfly')">
      </div>
      <div class="firefly">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/firefly.png" v-if="firefly" @click="walkers&&showGif('firefly')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/firefly_comp.gif" style="z-index: 100" v-if="!firefly"
             @click="showGif('firefly')">
      </div>
      <div class="flower">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/flower.png" v-if="flower" @click="showGif('flower')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/flower.gif" style="z-index: 100" v-if="!flower"
             @click="showGif('flower')">
      </div>
      <div class="butterfly2">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/fly.gif" style="z-index: 100" v-if="!fly2"
             @click="showGif('fly2')">
      </div>
      <div class="hive">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/hive.png" v-if="hive" @click="walkers&&showGif('hive')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/hive.gif" style="z-index: 100" v-if="!hive"
             @click="showGif('hive')">
      </div>
      <div class="ladybug">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/ladybug.png" v-if="ladybug&&wings" @click="showGif('ladybug')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/ladybug.gif" style="z-index: 100" v-if="!ladybug"
             @click="showGif('ladybug')">
      </div>
      <div class="mosquito">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/mosquito.png" v-if="mosquito" @click="walkers&&showGif('mosquito')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/mosquito.gif" style="z-index: 100" v-if="!mosquito"
             @click="showGif('mosquito')">
      </div>
      <div class="sting">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Png/sting.png" v-if="sting" @click="showGif('sting')">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/sting_comp.gif" style="z-index: 100" v-if="!sting"
             @click="showGif('sting')">
      </div>
      <div class="ladybug">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/GIF_PNG/Gif/wings.gif" style="z-index: 100" v-if="!wings"
             @click="showGif('wings')">
      </div>
      <div class="beeButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_bee Comp 1_00000.png"
             :style="{zIndex: !bee ? 100 : 1}" @click="showGif('bee')">
      </div>
      <div class="butterfly2Button">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_butterfly Comp 1_00000.png"
             :style="{zIndex: !butterfly2 ? 100 : 1}" @click="showGif('butterfly2')">
      </div>
      <div class="buzzButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_buzz Comp 1_00000.png"
             :style="{zIndex: !buzz ? 100 : 1}" @click="showGif('buzz')">
      </div>
      <div class="dragonflyButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_drgonfly Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !dragonfly ? 100 : 1}" @click="showGif('dragonfly')">
      </div>
      <div class="fireflyButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_firefly Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !firefly ? 100 : 1}" @click="showGif('firefly')">
      </div>
      <div class="flowerButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_flowers Comp 1_00000.png"
             :style="{zIndex: !flower ? 100 : 1}" @click="showGif('flower')">
      </div>
      <div class="fly2Button">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_fly Comp 1_00000.png"
             :style="{zIndex: !fly2 ? 100 : 1}" @click="showGif('fly2')">
      </div>
      <div class="hiveButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_hive Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !hive ? 100 : 1}" @click="showGif('hive')">
      </div>
      <div class="ladybugButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_ladybug Comp 1_00000.png"
             :style="{zIndex: !ladybug ? 100 : 1}" @click="showGif('ladybug')">
      </div>
      <div class="mosquitoButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_mosquito Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !mosquito ? 100 : 1}" @click="showGif('mosquito')">
      </div>
      <div class="stingButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_sting Comp 1_00000.png"
             :style="{zIndex: !sting ? 100 : 1}" @click="showGif('sting')">
      </div>
      <div class="wingsButton">
        <img src="../../assets/image/202005H5 Flying Bugs_MT/words/word_wings _00000.png"
             :style="{zIndex: !wings ? 100 : 1}" @click="showGif('wings')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Clothes' && this.part === 'part1'">
      <img src="../../assets/image/202006H5 Summer clothes_MT/Runner_BG/BG__00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="bag">
      <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/bag.png" v-if="bag" @click="showGif('bag')"/>
      <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/bag.gif" style="z-index: 100" v-if="!bag"
           @click="showGif('bag')">
      </div>
      <div class="dress">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/dress.png" v-if="dress" @click="showGif('dress')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/dress.gif" style="z-index: 100" v-if="!dress"
             @click="showGif('dress')">
      </div>
      <div class="hat">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/hat.png" v-if="hat" @click="showGif('hat')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/hat.gif" style="z-index: 100" v-if="!hat"
             @click="showGif('hat')">
      </div>
      <div class="sandals">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/sandals.png" v-if="sandals" @click="walkers&&showGif('sandals')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/sandals.gif" style="z-index: 100" v-if="!sandals"
             @click="showGif('sandals')">
      </div>
      <div class="shoes">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/shoes.png" v-if="shoes" @click="showGif('shoes')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/shoes.gif" style="z-index: 100" v-if="!shoes"
             @click="showGif('shoes')">
      </div>
      <div class="shorts">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/shorts.png" v-if="shorts" @click="showGif('shorts')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/shorts.gif" style="z-index: 100" v-if="!shorts"
             @click="showGif('shorts')">
      </div>
      <div class="skirt">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/skirt.png" v-if="skirt" @click="walkers&&showGif('skirt')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/skirt.gif" style="z-index: 100" v-if="!skirt"
             @click="showGif('skirt')">
      </div>
      <div class="sunglasses">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/sunglasses.png" v-if="sunglasses" @click="walkers&&showGif('sunglasses')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/sunglasses.gif" style="z-index: 100" v-if="!sunglasses"
             @click="showGif('sunglasses')">
      </div>
      <div class="tie">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/tie.png" v-if="tie" @click="walkers&&showGif('tie')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/tie.gif" style="z-index: 100" v-if="!tie"
             @click="showGif('tie')">
      </div>
      <div class="tShirt">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/T-shirt.png" v-if="tShirt" @click="showGif('tShirt')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/T-shirt.gif" style="z-index: 100" v-if="!tShirt"
             @click="showGif('tShirt')">
      </div>
      <div class="watch1">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/watch.png" v-if="watch1" @click="showGif('watch1')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/watch.gif" style="z-index: 100" v-if="!watch1"
             @click="showGif('watch1')">
      </div>
      <div class="wear">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/png/wear.png" v-if="wear" @click="showGif('wear')">
        <img src="../../assets/image/202006H5 Summer clothes_MT/GIF_PNG/gif/wear.gif" style="z-index: 100" v-if="!wear"
             @click="showGif('wear')">
      </div>
      <div class="tShirtButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_T-shirt Comp 1_00000.png"
             :style="{zIndex: !tShirt ? 100 : 1}" @click="showGif('tShirt')">
      </div>
      <div class="bagButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_bag Comp 1_00000.png"
             :style="{zIndex: !bag ? 100 : 1}" @click="showGif('bag')">
      </div>
      <div class="watch1Button">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_watch Comp 1_00000.png"
             :style="{zIndex: !watch1 ? 100 : 1}" @click="showGif('watch1')">
      </div>
      <div class="dressButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_dress Comp 1_00000.png"
             :style="{zIndex: !dress ? 100 : 1}" @click="showGif('dress')">
      </div>
      <div class="shoesButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_shoes Comp 1_00000.png"
             :style="{zIndex: !shoes ? 100 : 1}" @click="showGif('shoes')">
      </div>
      <div class="skirtButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_skirt Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !skirt ? 100 : 1}" @click="showGif('skirt')">
      </div>
      <div class="sandalsButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_sandals Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !sandals ? 100 : 1}" @click="showGif('sandals')">
      </div>
      <div class="sunglassesButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_sunglasses Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !sunglasses ? 100 : 1}" @click="showGif('sunglasses')">
      </div>
      <div class="wearButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_wear Comp 1_00000.png"
             :style="{zIndex: !wear ? 100 : 1}" @click="showGif('wear')">
      </div>
      <div class="tieButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_tie Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !tie ? 100 : 1}" @click="showGif('tie')">
      </div>
      <div class="hatButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_hat Comp 1_00000.png"
             :style="{zIndex: !hat ? 100 : 1}" @click="showGif('hat')">
      </div>
      <div class="shortsButton">
        <img src="../../assets/image/202006H5 Summer clothes_MT/words/word_shorts Comp 1_00000.png"
             :style="{zIndex: !shorts ? 100 : 1}" @click="showGif('shorts')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Clothes' && this.part === 'part2'">
      <img src="../../assets/image/202006H5 Winter clothes_MT/Runner_BG/BG__00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="belt">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/belt.png" v-if="belt" @click="showGif('belt')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/belt.gif" style="z-index: 100" v-if="!belt"
             @click="showGif('belt')">
      </div>
      <div class="boots">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/boots.png" v-if="boots" @click="showGif('boots')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/boots.gif" style="z-index: 100" v-if="!boots"
             @click="showGif('boots')">
      </div>
      <div class="jacket">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/jacket.png" v-if="jacket" @click="showGif('jacket')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/jacket.gif" style="z-index: 100" v-if="!jacket"
             @click="showGif('jacket')">
      </div>
      <div class="mittens">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/mittens.png" v-if="mittens" @click="walkers&&showGif('mittens')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/mittens.gif" style="z-index: 100" v-if="!mittens"
             @click="showGif('mittens')">
      </div>
      <div class="pajamas">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/pajamas.png" v-if="pajamas" @click="walkers&&showGif('pajamas')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/pajamas.gif" style="z-index: 100" v-if="!pajamas"
             @click="showGif('pajamas')">
      </div>
      <div class="scarf1">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/scarf.png" v-if="scarf1" @click="showGif('scarf1')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/scarf.gif" style="z-index: 100" v-if="!scarf1"
             @click="showGif('scarf1')">
      </div>
      <div class="shirt">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/shirt.png" v-if="shirt" @click="walkers&&showGif('shirt')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/shirt.gif" style="z-index: 100" v-if="!shirt"
             @click="showGif('shirt')">
      </div>
      <div class="socks">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/socks.png" v-if="socks" @click="showGif('socks')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/socks.gif" style="z-index: 100" v-if="!socks"
             @click="showGif('socks')">
      </div>
      <div class="sweater">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/sweater.png" v-if="sweater" @click="walkers&&showGif('sweater')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/sweater.gif" style="z-index: 100" v-if="!sweater"
             @click="showGif('sweater')">
      </div>
      <div class="trousers">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/trousers.png" v-if="trousers" @click="showGif('trousers')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/trousers.gif" style="z-index: 100" v-if="!trousers"
             @click="showGif('trousers')">
      </div>
      <div class="wrap">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/wrap.png" v-if="wrap" @click="showGif('wrap')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/wrap.gif" style="z-index: 100" v-if="!wrap"
             @click="showGif('wrap')">
      </div>
      <div class="zip">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/png/zip.png" v-if="zip" @click="showGif('zip')">
        <img src="../../assets/image/202006H5 Winter clothes_MT/GIF_PNG/gif/zip.gif" style="z-index: 100" v-if="!zip"
             @click="showGif('zip')">
      </div>
      <div class="beltButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_belt Comp 1_00000.png"
             :style="{zIndex: !belt ? 100 : 1}" @click="showGif('belt')">
      </div>
      <div class="bootsButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_boots Comp 1_00000.png"
             :style="{zIndex: !boots ? 100 : 1}" @click="showGif('boots')">
      </div>
      <div class="zipButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_zip Comp 1_00000.png"
             :style="{zIndex: !zip ? 100 : 1}" @click="showGif('zip')">
      </div>
      <div class="jacketButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_jacket Comp 1_00000.png"
             :style="{zIndex: !jacket ? 100 : 1}" @click="showGif('jacket')">
      </div>
      <div class="mittensButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_mittens Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !mittens ? 100 : 1}" @click="showGif('mittens')">
      </div>
      <div class="pajamasButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_pajamas Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !pajamas ? 100 : 1}" @click="showGif('pajamas')">
      </div>
      <div class="scarf1Button">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_scarf Comp 1_00000.png"
             :style="{zIndex: !scarf1 ? 100 : 1}" @click="showGif('scarf1')">
      </div>
      <div class="shirtButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_shirt Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !shirt ? 100 : 1}" @click="showGif('shirt')">
      </div>
      <div class="socksButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_socks Comp 1_00000.png"
             :style="{zIndex: !socks ? 100 : 1}" @click="showGif('socks')">
      </div>
      <div class="sweaterButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_sweater Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !sweater ? 100 : 5}" @click="showGif('sweater')">
      </div>
      <div class="trousersButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_trousers Comp 1_00000.png"
             :style="{zIndex: !trousers ? 100 : 1}" @click="showGif('trousers')">
      </div>
      <div class="wrapButton">
        <img src="../../assets/image/202006H5 Winter clothes_MT/Word/word_wrap Comp 1_00000.png"
             :style="{zIndex: !wrap ? 100 : 1}" @click="showGif('wrap')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Theme Park' && this.part === 'part1'">
      <img src="../../assets/image/202007H5 Theme Parks_MT/Runner_BG/bg_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="balloons1">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/balloons_00000.png" v-if="balloons1" @click="showGif('balloons1')"/>
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/balloons.gif" style="z-index: 100" v-if="!balloons1"
             @click="showGif('balloons1')">
      </div>
      <div class="bumper">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/bumper cars_00000.png" v-if="bumper" @click="showGif('bumper')">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/bumper-cars.gif" style="z-index: 100" v-if="!bumper"
             @click="showGif('bumper')">
      </div>
      <div class="carousel">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/carousel_00000.png" v-if="carousel" @click="walkers&&showGif('carousel')">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/carousel.gif" style="z-index: 100" v-if="!carousel"
             @click="showGif('carousel')">
      </div>
      <div class="pool">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/pool.gif" style="z-index: 100" v-if="!pool"
             @click="walkers&&showGif('pool')">
      </div>
      <div class="cottonCandy">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/cotton candy_00000.png" v-if="cottonCandy" @click="showGif('cottonCandy')">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/cotton-candy.gif" style="z-index: 100" v-if="!cottonCandy"
             @click="showGif('cottonCandy')">
      </div>
      <div class="ferrisWheel">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/Ferris wheel_00000.png" v-if="ferrisWheel" @click="showGif('ferrisWheel')">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/Ferris-wheel.gif" style="z-index: 100" v-if="!ferrisWheel"
             @click="showGif('ferrisWheel')">
      </div>
      <div class="popcorn">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/popcorn_00000.png" v-if="popcorn" @click="showGif('popcorn')">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/popcorn.gif" style="z-index: 100" v-if="!popcorn"
             @click="showGif('popcorn')">
      </div>
      <div class="queue">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/queue_00000.png" v-if="queue" @click="walkers&&showGif('queue')">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/queue.gif" style="z-index: 100" v-if="!queue"
             @click="showGif('queue')">
      </div>
      <div class="rollerCoaster">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/roller-coaster.gif" style="z-index: 100" v-if="!rollerCoaster"
             @click="showGif('rollerCoaster')">
      </div>
      <div class="scream1">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/scream_00000.png" v-if="scream1&&rollerCoaster" @click="showGif('scream1')">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/scream.gif" style="z-index: 100" v-if="!scream1"
             @click="showGif('scream1')">
      </div>
      <div class="swim1">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/swim_00000.png" v-if="swim1&&pool" @click="walkers&&showGif('swim1')">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/swim.gif" style="z-index: 100" v-if="!swim1"
             @click="showGif('swim1')">
      </div>
      <div class="ticket1">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/ticket_00000.png" v-if="ticket1" @click="showGif('ticket1')">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/gif/ticket.gif" style="z-index: 100" v-if="!ticket1"
             @click="showGif('ticket1')">
      </div>
      <div class="still1">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/still1.png">
      </div>
      <div class="still2">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/still2.png">
      </div>
      <div class="still3">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/still3.png">
      </div>
      <div class="still4">
        <img src="../../assets/image/202007H5 Theme Parks_MT/GIF_PNG/png/still4.png">
      </div>
      <div class="balloons1Button">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_balloons Comp 1_00000.png"
             :style="{zIndex: !balloons1 ? 100 : 1}" @click="showGif('balloons1')">
      </div>
      <div class="bumperButton">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_bumper cars Comp 1_00000.png"
             :style="{zIndex: !bumper ? 100 : 1}" @click="showGif('bumper')">
      </div>
      <div class="carouselButton">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_r_carousel Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !carousel ? 100 : 1}" @click="showGif('carousel')">
      </div>
      <div class="cottonCandyButton">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_cotton candy Comp 1_00000.png"
             :style="{zIndex: !cottonCandy ? 100 : 1}" @click="showGif('cottonCandy')">
      </div>
      <div class="ferrisWheelButton">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_Ferris wheel Comp 1_00000.png"
             :style="{zIndex: !ferrisWheel ? 100 : 1}" @click="showGif('ferrisWheel')">
      </div>
      <div class="poolButton">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_r_pool Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !pool ? 100 : 1}" @click="showGif('pool')">
      </div>
      <div class="popcornButton">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_popcorn Comp 1_00000.png"
             :style="{zIndex: !popcorn ? 100 : 1}" @click="showGif('popcorn')">
      </div>
      <div class="queueButton">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_r_queue Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !queue ? 100 : 1}" @click="showGif('queue')">
      </div>
      <div class="rollerCoasterButton">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_roller coaster Comp 1_00000.png"
             :style="{zIndex: !rollerCoaster ? 100 : 1}" @click="showGif('rollerCoaster')">
      </div>
      <div class="scream1Button">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_scream Comp 1_00000.png"
             :style="{zIndex: !scream1 ? 100 : 1}" @click="showGif('scream1')">
      </div>
      <div class="swim1Button">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_r_swim Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !swim1 ? 100 : 1}" @click="showGif('swim1')">
      </div>
      <div class="ticket1Button">
        <img src="../../assets/image/202007H5 Theme Parks_MT/Word/word_ticket Comp 1_00000.png"
             :style="{zIndex: !ticket1 ? 100 : 1}" @click="showGif('ticket1')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Theme Park' && this.part === 'part2'">
      <img src="../../assets/image/202007H5 Water Parks_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="dry">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/dry_00000.png" v-if="dry" @click="walkers&&showGif('dry')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/dry.gif" style="z-index: 100" v-if="!dry"
             @click="showGif('dry')">
      </div>
      <div class="float">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/float_00000.png" v-if="float" @click="showGif('float')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/float.gif" style="z-index: 100" v-if="!float"
             @click="showGif('float')">
      </div>
      <div class="lazy">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/Lazy river_00000.png" v-if="lazy" @click="showGif('lazy')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/Lazy-river.gif" style="z-index: 100" v-if="!lazy"
             @click="showGif('lazy')">
      </div>
      <div class="lifeguard">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/lifeguard_00000.png" v-if="lifeguard" @click="showGif('lifeguard')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/lifeguard.gif" style="z-index: 100" v-if="!lifeguard"
             @click="showGif('lifeguard')">
      </div>
      <div class="ride">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/ride.gif" style="z-index: 100" v-if="!ride"
             @click="showGif('ride')">
      </div>
      <div class="splash1">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/splash_00000.png" v-if="splash1&&waterSlide&&ride" @click="walkers&&showGif('splash1')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/splash.gif" style="z-index: 100" v-if="!splash1"
             @click="showGif('splash1')">
      </div>
      <div class="swimsuit">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/swimsuit_00000.png" v-if="swimsuit" @click="showGif('swimsuit')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/swimsuit.gif" style="z-index: 100" v-if="!swimsuit"
             @click="showGif('swimsuit')">
      </div>
      <div class="towel">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/towel_00000.png" v-if="towel" @click="walkers&&showGif('towel')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/towel.gif" style="z-index: 100" v-if="!towel"
             @click="showGif('towel')">
      </div>
      <div class="tube">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/tube_00000.png" v-if="tube" @click="showGif('tube')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/tube.gif" style="z-index: 100" v-if="!tube"
             @click="showGif('tube')">
      </div>
      <div class="waterSlide">
<!--        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/water slide_00000.png" v-if="waterSlide" @click="showGif('waterSlide')">-->
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/water-slide.gif" style="z-index: 100" v-if="!waterSlide"
             @click="showGif('waterSlide')">
      </div>
      <div class="wavePool">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/wave pool_00000.png" v-if="wavePool" @click="showGif('wavePool')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/wave-pool.gif" style="z-index: 100" v-if="!wavePool"
             @click="showGif('wavePool')">
      </div>
      <div class="wet">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/png/wet_00000.png" v-if="wet" @click="showGif('wet')">
        <img src="../../assets/image/202007H5 Water Parks_MT/GIF_PNG/gif/wet.gif" style="z-index: 100" v-if="!wet"
             @click="showGif('wet')">
      </div>
     <div class="lifeguardButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_lifeguard Comp 1_00000.png"
             :style="{zIndex: !lifeguard ? 100 : 1}" @click="showGif('lifeguard')">
      </div>
      <div class="lazyButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_Lazy river Comp 1_00000.png"
             :style="{zIndex: !lazy ? 100 : 1}" @click="showGif('lazy')">
      </div>
      <div class="tubeButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_tube Comp 1_00000.png"
             :style="{zIndex: !tube ? 100 : 1}" @click="showGif('tube')">
      </div>
      <div class="floatButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_float Comp 1_00000.png"
             :style="{zIndex: !float ? 100 : 1}" @click="showGif('float')">
      </div>
      <div class="towelButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_r_towel Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !towel ? 100 : 1}" @click="showGif('towel')">
      </div>
      <div class="dryButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_r_dry Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !dry ? 100 : 1}" @click="showGif('dry')">
      </div>
      <div class="wetButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_wet Comp 1_00000.png"
             :style="{zIndex: !wet ? 100 : 1}" @click="showGif('wet')">
      </div>
      <div class="swimsuitButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_swimsuit Comp 1_00000.png"
             :style="{zIndex: !swimsuit ? 100 : 1}" @click="showGif('swimsuit')">
      </div>
      <div class="splash1Button">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_r_splash Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !splash1 ? 100 : 1}" @click="showGif('splash1')">
      </div>
      <div class="rideButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_r_ride Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !ride ? 100 : 1}" @click="showGif('ride')">
      </div>
      <div class="wavePoolButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_wave pool Comp 1_00000.png"
             :style="{zIndex: !wavePool ? 100 : 1}" @click="showGif('wavePool')">
      </div>
      <div class="waterSlideButton">
        <img src="../../assets/image/202007H5 Water Parks_MT/Word/word_water slide Comp 1_00000.png"
             :style="{zIndex: !waterSlide ? 100 : 1}" @click="showGif('waterSlide')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Space' && this.part === 'part1'">
      <img src="../../assets/image/202008H5 Blast Off_MT/Runner_BG/Background_0.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="astronaut">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/png/astronaut_0.png" v-if="astronaut&&helmet" @click="showGif('astronaut')">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/astronaut.gif" style="z-index: 100" v-if="!astronaut"
             @click="showGif('astronaut')">
      </div>
      <div class="explore">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/png/explore Comp 1_0.png" v-if="explore" @click="walkers&&showGif('explore')">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/explore.gif" style="z-index: 100" v-if="!explore"
             @click="showGif('explore')">
      </div>
      <div class="fuel">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/png/fuel_1.png" v-if="fuel&&blastOff&&fire&&rocket" @click="walkers&&showGif('fuel')">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/fuel.gif" style="z-index: 100" v-if="!fuel"
             @click="showGif('fuel')">
      </div>
      <div class="radio">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/png/radio Comp 1_0.png" v-if="radio" @click="walkers&&showGif('radio')">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/radio.gif" style="z-index: 100" v-if="!radio"
             @click="showGif('radio')">
      </div>
      <div class="scientist">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/png/scientist Comp 1_0.png" v-if="scientist" @click="walkers&&showGif('scientist')">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/scientist.gif" style="z-index: 100" v-if="!scientist"
             @click="showGif('scientist')">
      </div>
      <div class="spaceSuit">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/png/space suit  Comp 1_0.png" v-if="spaceSuit" @click="showGif('spaceSuit')">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/space suit.gif" style="z-index: 100" v-if="!spaceSuit"
             @click="showGif('spaceSuit')">
      </div>
      <div class="blastOff">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/blast off.gif" style="z-index: 100" v-if="!blastOff"
             @click="showGif('blastOff')">
      </div>
      <div class="countdown">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/countdown.gif" style="z-index: 100" v-if="!countdown"
             @click="showGif('countdown')">
      </div>
      <div class="fire">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/fire.gif" style="z-index: 100" v-if="!fire"
             @click="showGif('fire')">
      </div>
      <div class="helmet">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/helmet.gif" style="z-index: 100" v-if="!helmet"
             @click="showGif('helmet')">
      </div>
      <div class="rocket">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/rocket.gif" style="z-index: 100" v-if="!rocket"
             @click="showGif('rocket')">
      </div>
      <div class="fly3">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/png/fly Comp 1_0.png" v-if="fly3" @click="showGif('fly3')">
        <img src="../../assets/image/202008H5 Blast Off_MT/GIF_PNG/gif/fly.gif" style="z-index: 100" v-if="!fly3"
             @click="showGif('fly3')">
      </div>
      <div class="spaceStill">
        <img src="../../assets/image/202008H5 Blast Off_MT/StillObj/Still2_0.png">
      </div>
      <div class="fly3Button">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_r_fly Comp 1_0.png"
             :style="{zIndex: !fly3 ? 100 : 1}" @click="showGif('fly3')">
      </div>
      <div class="fuelButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_fuel_0.png" v-if="walkers"
             :style="{zIndex: !fuel ? 100 : 1}" @click="showGif('fuel')">
      </div>
      <div class="blastOffButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_r_blast off Comp 1_0.png"
             :style="{zIndex: !blastOff ? 100 : 1}" @click="showGif('blastOff')">
      </div>
      <div class="fireButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_r_fire Comp 1_0.png"
             :style="{zIndex: !fire ? 100 : 1}" @click="showGif('fire')">
      </div>
      <div class="rocketButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_r_rocket Comp 1_0.png"
             :style="{zIndex: !rocket ? 100 : 1}" @click="showGif('rocket')">
      </div>
      <div class="countdownButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_r_countdown Comp 1_0.png"
             :style="{zIndex: !countdown ? 100 : 1}" @click="showGif('countdown')">
      </div>
      <div class="helmetButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_r_helmet Comp 1_0.png"
             :style="{zIndex: !helmet ? 100 : 1}" @click="showGif('helmet')">
      </div>
      <div class="exploreButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_explore Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !explore ? 100 : 1}" @click="showGif('explore')">
      </div>
      <div class="astronautButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_r_astronaut Comp 1_0.png"
             :style="{zIndex: !astronaut ? 100 : 1}" @click="showGif('astronaut')">
      </div>
      <div class="spaceSuitButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_r_space suit Comp 1_0.png"
             :style="{zIndex: !spaceSuit ? 100 : 1}" @click="showGif('spaceSuit')">
      </div>
      <div class="scientistButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_scientist Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !scientist ? 100 : 1}" @click="showGif('scientist')">
      </div>
      <div class="radioButton">
        <img src="../../assets/image/202008H5 Blast Off_MT/Word/word_radio Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !radio ? 100 : 1}" @click="showGif('radio')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Space' && this.part === 'part2'">
      <img src="../../assets/image/202008H5 In Space_MT/Runner_BG/Background_0.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="alien">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/alien_00000.png" v-if="alien&&ufo" @click="showGif('alien')">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/alien.gif" style="z-index: 100" v-if="!alien"
             @click="showGif('alien')">
      </div>
      <div class="asteroid">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/asteroid Comp 1_00000.png" v-if="asteroid" @click="showGif('asteroid')">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/asteroid.gif" style="z-index: 100" v-if="!asteroid"
             @click="showGif('asteroid')">
      </div>
      <div class="bright">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/bright Comp 1_00000.png" v-if="bright&&sun&&planet" @click="walkers&&showGif('bright')">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/bright.gif" style="z-index: 100" v-if="!bright"
             @click="showGif('bright')">
      </div>
      <div class="dark">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/dark Comp 1_00000.png" v-if="dark" @click="walkers&&showGif('dark')">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/dark.gif" style="z-index: 100" v-if="!dark"
             @click="showGif('dark')">
      </div>
      <div class="earth">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/earth Comp 1_00000.png" v-if="earth" @click="showGif('earth')">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/earth.gif" style="z-index: 100" v-if="!earth"
             @click="showGif('earth')">
      </div>
      <div class="moon">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/moon Comp 1_00000.png" v-if="moon" @click="showGif('moon')">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/moon.gif" style="z-index: 100" v-if="!moon"
             @click="showGif('moon')">
      </div>
      <div class="planet">
<!--        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/planet Comp 1_00000.png" v-if="planet" @click="showGif('planet')">-->
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/planet.gif" style="z-index: 100" v-if="!planet"
             @click="showGif('planet')">
      </div>
      <div class="planet2">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/planet2.png" v-if="planet">
      </div>
      <div class="spaceStation">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/space station Comp 1_00000.png" v-if="spaceStation" @click="walkers&&showGif('spaceStation')">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/space station.gif" style="z-index: 100" v-if="!spaceStation"
             @click="showGif('spaceStation')">
      </div>
      <div class="space">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/Space_00000.png" v-if="space" @click="showGif('space')">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/Space.gif" style="z-index: 100" v-if="!space"
             @click="showGif('space')">
      </div>
      <div class="star">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/star Comp 1_00000.png" v-if="star" @click="showGif('star')">
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/star.gif" style="z-index: 100" v-if="!star"
             @click="showGif('star')">
      </div>
      <div class="sun">
<!--        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/sun Comp 1_00000.png" v-if="sun" @click="showGif('sun')">-->
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/sun.gif" style="z-index: 100" v-if="!sun"
             @click="showGif('sun')">
      </div>
      <div class="ufo">
<!--        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/png/UFO Comp 1_00000.png" v-if="ufo" @click="showGif('ufo')">-->
        <img src="../../assets/image/202008H5 In Space_MT/GIF_PNG/gif/UFO.gif" style="z-index: 100" v-if="!ufo"
             @click="showGif('ufo')">
      </div>
      <div class="darkButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_dark Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !dark ? 100 : 1}" @click="showGif('dark')">
      </div>
      <div class="planetButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_r_planet Comp 1_0.png"
             :style="{zIndex: !planet ? 100 : 1}" @click="showGif('planet')">
      </div>
      <div class="sunButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_r_Sun Comp 1_0.png"
             :style="{zIndex: !sun ? 100 : 1}" @click="showGif('sun')">
      </div>
      <div class="brightButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_bright Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !bright ? 100 : 1}" @click="showGif('bright')">
      </div>
      <div class="spaceStationButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_space station Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !spaceStation ? 100 : 1}" @click="showGif('spaceStation')">
      </div>
      <div class="asteroidButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_r_asteroid Comp 1_0.png"
             :style="{zIndex: !asteroid ? 100 : 1}" @click="showGif('asteroid')">
      </div>
      <div class="earthButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_r_Earth Comp 1_0.png"
             :style="{zIndex: !earth ? 100 : 1}" @click="showGif('earth')">
      </div>
      <div class="moonButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_r_moon Comp 1_0.png"
             :style="{zIndex: !moon ? 100 : 1}" @click="showGif('moon')">
      </div>
      <div class="spaceButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_r_space Comp 1_0.png"
             :style="{zIndex: !space ? 100 : 1}" @click="showGif('space')">
      </div>
      <div class="starButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_r_stars Comp 1_0.png"
             :style="{zIndex: !star ? 100 : 1}" @click="showGif('star')">
      </div>
      <div class="ufoButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_ufo Comp 1_0.png" v-if="walkers"
             :style="{zIndex: !ufo ? 100 : 1}" @click="showGif('ufo')">
      </div>
      <div class="alienButton">
        <img src="../../assets/image/202008H5 In Space_MT/Word/word_r_alien Comp 1_0.png"
             :style="{zIndex: !alien ? 100 : 1}" @click="showGif('alien')">
      </div>
    </div>
    <div v-else-if="this.unit === 'My Body' && this.part === 'part1'">
      <img src="../../assets/image/202009H5 Parts of My Body_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="ear">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/png/ear.png" v-if="ear" @click="showGif('ear')">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/ear.gif" style="z-index: 100" v-if="!ear"
             @click="showGif('ear')">
      </div>
      <div class="eat2">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/eat.gif" style="z-index: 100" v-if="!eat2"
             @click="walkers&&showGif('eat2')">
      </div>
      <div class="eyes">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/png/eyes.png" v-if="eyes" @click="showGif('eyes')">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/eyes.gif" style="z-index: 100" v-if="!eyes"
             @click="showGif('eyes')">
      </div>
      <div class="feet">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/png/feet.png" v-if="feet" @click="walkers&&showGif('feet')">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/feet.gif" style="z-index: 100" v-if="!feet"
             @click="showGif('feet')">
      </div>
      <div class="hair">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/png/hair.png" v-if="hair&&eat2&&walk2" @click="showGif('hair')">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/hair.gif" style="z-index: 100" v-if="!hair"
             @click="showGif('hair')">
      </div>
      <div class="hand">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/hand.gif" style="z-index: 100" v-if="!hand"
             @click="showGif('hand')">
      </div>
      <div class="leg">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/leg.gif" style="z-index: 100" v-if="!leg"
             @click="showGif('leg')">
      </div>
      <div class="look">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/look.gif" style="z-index: 100" v-if="!look"
             @click="showGif('look')">
      </div>
      <div class="mouth">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/png/mouth.png" v-if="mouth" @click="walkers&&showGif('mouth')">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/mouth.gif" style="z-index: 100" v-if="!mouth"
             @click="showGif('mouth')">
      </div>
      <div class="nose">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/png/nose.png" v-if="nose" @click="showGif('nose')">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/nose.gif" style="z-index: 100" v-if="!nose"
             @click="showGif('nose')">
      </div>
      <div class="smell">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/png/smell.png" v-if="smell&&look&&hand&&leg" @click="showGif('smell')">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/smell.gif" style="z-index: 100" v-if="!smell"
             @click="showGif('smell')">
      </div>
      <div class="walk2">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/GIF_PNG/gif/walk.gif" style="z-index: 100" v-if="!walk2"
             @click="showGif('walk2')">
      </div>
      <div class="smellButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_smell Comp 1_00000.png"
             :style="{zIndex: !smell ? 100 : 1}" @click="showGif('smell')">
      </div>
      <div class="handButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_hand Comp 1_00000.png"
             :style="{zIndex: !hand ? 100 : 1}" @click="showGif('hand')">
      </div>
      <div class="legButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_leg Comp 1_00000.png"
             :style="{zIndex: !leg ? 100 : 1}" @click="showGif('leg')">
      </div>
      <div class="lookButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_look Comp 1_00000.png"
             :style="{zIndex: !look ? 100 : 1}" @click="showGif('look')">
      </div>
      <div class="eyesButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_eyes Comp 1_00000.png"
             :style="{zIndex: !eyes ? 100 : 1}" @click="showGif('eyes')">
      </div>
      <div class="noseButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_nose Comp 1_00000.png"
             :style="{zIndex: !nose ? 100 : 1}" @click="showGif('nose')">
      </div>
      <div class="earButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_ear Comp 1_00000.png"
             :style="{zIndex: !ear ? 100 : 1}" @click="showGif('ear')">
      </div>
      <div class="mouthButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_mouth Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !mouth ? 100 : 1}" @click="showGif('mouth')">
      </div>
      <div class="eat2Button">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_eat Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !eat2 ? 100 : 1}" @click="showGif('eat2')">
      </div>
      <div class="hairButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_hair Comp 1_00000.png"
             :style="{zIndex: !hair ? 100 : 1}" @click="showGif('hair')">
      </div>
      <div class="walk2Button">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_walk Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !walk2 ? 100 : 1}" @click="showGif('walk2')">
      </div>
      <div class="feetButton">
        <img src="../../assets/image/202009H5 Parts of My Body_MT/Word/word_feet Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !feet ? 100 : 1}" @click="showGif('feet')">
      </div>
    </div>
    <div v-else-if="this.unit === 'My Body' && this.part === 'part2'">
      <img src="../../assets/image/202009H5 Keeping Healthy_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="brush2">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/brush.gif" style="z-index: 100" v-if="!brush2"
             @click="showGif('brush2')">
      </div>
      <div class="doctor">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/doctor.png" v-if="doctor" @click="walkers&&showGif('doctor')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/doctor.gif" style="z-index: 100" v-if="!doctor"
             @click="showGif('doctor')">
      </div>
      <div class="fruit">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/fruit.png" v-if="fruit" @click="showGif('fruit')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/fruit.gif" style="z-index: 100" v-if="!fruit"
             @click="showGif('fruit')">
      </div>
      <div class="germs">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/germs.png" v-if="germs" @click="showGif('germs')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/germs.gif" style="z-index: 100" v-if="!germs"
             @click="showGif('germs')">
      </div>
      <div class="run2">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/run.png" v-if="run2" @click="showGif('run2')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/run.gif" style="z-index: 100" v-if="!run2"
             @click="showGif('run2')">
      </div>
      <div class="sleep2">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/sleep.png" v-if="sleep2" @click="showGif('sleep2')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/sleep.gif" style="z-index: 100" v-if="!sleep2"
             @click="showGif('sleep2')">
      </div>
      <div class="soap">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/soap.png" v-if="soap" @click="showGif('soap')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/soap.gif" style="z-index: 100" v-if="!soap"
             @click="showGif('soap')">
      </div>
      <div class="sweets">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/sweets.png" v-if="sweets" @click="showGif('sweets')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/sweets.gif" style="z-index: 100" v-if="!sweets"
             @click="showGif('sweets')">
      </div>
      <div class="teeth">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/teeth.png" v-if="teeth&&brush2" @click="walkers&&showGif('teeth')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/teeth.gif" style="z-index: 100" v-if="!teeth"
             @click="showGif('teeth')">
      </div>
      <div class="vegetables2">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/vegetables.png" v-if="vegetables2" @click="showGif('vegetables2')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/vegetables.gif" style="z-index: 100" v-if="!vegetables2"
             @click="showGif('vegetables2')">
      </div>
      <div class="wash2">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/wash.png" v-if="wash2" @click="walkers&&showGif('wash2')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/wash.gif" style="z-index: 100" v-if="!wash2"
             @click="showGif('wash2')">
      </div>
      <div class="water2">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/png/water.png" v-if="water2" @click="showGif('water2')">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/GIF_PNG/gif/water.gif" style="z-index: 100" v-if="!water2"
             @click="showGif('water2')">
      </div>
      <div class="brush2Button">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_brush Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !brush2 ? 100 : 2}" @click="showGif('brush2')">
      </div>
      <div class="doctorButton">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_doctor Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !doctor ? 100 : 1}" @click="showGif('doctor')">
      </div>
      <div class="fruitButton">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_fruit Comp 1_00000.png"
             :style="{zIndex: !fruit ? 100 : 1}" @click="showGif('fruit')">
      </div>
      <div class="germsButton">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_germs Comp 1_00000.png"
             :style="{zIndex: !germs ? 100 : 1}" @click="showGif('germs')">
      </div>
      <div class="run2Button">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_run Comp 1_00000.png"
             :style="{zIndex: !run2 ? 100 : 1}" @click="showGif('run2')">
      </div>
      <div class="sleep2Button">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_sleep Comp 1_00000.png"
             :style="{zIndex: !sleep2 ? 100 : 1}" @click="showGif('sleep2')">
      </div>
      <div class="soapButton">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_soap Comp 1_00000.png"
             :style="{zIndex: !soap ? 100 : 1}" @click="showGif('soap')">
      </div>
      <div class="sweetsButton">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_sweets Comp 1_00000.png"
             :style="{zIndex: !sweets ? 100 : 2}" @click="showGif('sweets')">
      </div>
      <div class="teethButton">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_teeth Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !teeth ? 100 : 1}" @click="showGif('teeth')">
      </div>
      <div class="vegetables2Button">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_vegetables Comp 1_00000.png"
             :style="{zIndex: !vegetables2 ? 100 : 1}" @click="showGif('vegetables2')">
      </div>
      <div class="wash2Button">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_wash Comp 1_00000.png" v-if="walkers"
             :style="{zIndex: !wash2 ? 100 : 1}" @click="showGif('wash2')">
      </div>
      <div class="water2Button">
        <img src="../../assets/image/202009H5 Keeping Healthy_MT/Word/word_water Comp 1_00000.png"
             :style="{zIndex: !water2 ? 100 : 1}" @click="showGif('water2')">
      </div>
    </div>
    <div v-else-if="this.unit === 'My Weekend' && this.part === 'part1'">
      <img src="../../assets/image/202010H5 At the Park _MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <img src="../../assets/image/202010H5 At the Park _MT/Still/STILL_00000.png"
           style="width: 100%; z-index: -1; height: 100%;display:block;position: absolute;"/>
      <div class="bike2">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/bike.png" v-if="bike2" @click="showGif('bike2')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/bike.gif" style="z-index: 100" v-if="!bike2"
             @click="showGif('bike2')">
      </div>
      <div class="brush3">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/brush.gif" style="z-index: 100" v-if="!brush3"
             @click="showGif('brush3')">
      </div>
      <div class="camera">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/camera.png" v-if="camera" @click="showGif('camera')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/camera.gif" style="z-index: 100" v-if="!camera"
             @click="showGif('camera')">
      </div>
      <div class="climb2">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/climb.png" v-if="climb2&&jungleGym" @click="showGif('climb2')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/climb.gif" style="z-index: 100" v-if="!climb2"
             @click="showGif('climb2')">
      </div>
      <div class="jog">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/jog.png" v-if="jog" @click="walkers&&showGif('jog')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/jog.gif" style="z-index: 100" v-if="!jog"
             @click="showGif('jog')">
      </div>
      <div class="jungleGym">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/jungle gym.gif" style="z-index: 100" v-if="!jungleGym"
             @click="showGif('jungleGym')">
      </div>
      <div class="kick2">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/kick.png" v-if="kick2" @click="walkers&&showGif('kick2')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/kick.gif" style="z-index: 100" v-if="!kick2"
             @click="showGif('kick2')">
      </div>
      <div class="paint">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/paint.png" v-if="paint" @click="showGif('paint')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/paint.gif" style="z-index: 100" v-if="!paint"
             @click="showGif('paint')">
      </div>
      <div class="picnic2">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/picnic.png" v-if="picnic2" @click="showGif('picnic2')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/picnic.gif" style="z-index: 100" v-if="!picnic2"
             @click="showGif('picnic2')">
      </div>
      <div class="seesaw2">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/seesaw.png" v-if="seesaw2" @click="showGif('seesaw2')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/seesaw.gif" style="z-index: 100" v-if="!seesaw2"
             @click="showGif('seesaw2')">
      </div>
      <div class="swing2">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/swing.png" v-if="swing2" @click="showGif('swing2')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/swing.gif" style="z-index: 100" v-if="!swing2"
             @click="showGif('swing2')">
      </div>
      <div class="kite2">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/png/kite.png" v-if="kite2" @click="showGif('kite2')">
        <img src="../../assets/image/202010H5 At the Park _MT/GIF_PNG/gif/kite.gif" style="z-index: 100" v-if="!kite2"
             @click="showGif('kite2')">
      </div>
      <div class="bike2Button">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_bike.png"
             :style="{zIndex: !bike2 ? 100 : 2}" @click="showGif('bike2')">
      </div>
      <div class="brush3Button">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_brush.png" v-if="walkers"
             :style="{zIndex: !brush3 ? 100 : 1}" @click="showGif('brush3')">
      </div>
      <div class="cameraButton">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_camera.png"
             :style="{zIndex: !camera ? 100 : 1}" @click="showGif('camera')">
      </div>
      <div class="climb2Button">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_climb.png"
             :style="{zIndex: !climb2 ? 100 : 1}" @click="showGif('climb2')">
      </div>
      <div class="jogButton">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_jog.png" v-if="walkers"
             :style="{zIndex: !jog ? 100 : 1}" @click="showGif('jog')">
      </div>
      <div class="jungleGymButton">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_jungle gym.png" v-if="walkers"
             :style="{zIndex: !jungleGym ? 100 : 1}" @click="showGif('jungleGym')">
      </div>
      <div class="kick2Button">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_kick.png" v-if="walkers"
             :style="{zIndex: !kick2 ? 100 : 1}" @click="showGif('kick2')">
      </div>
      <div class="paintButton">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_paint.png"
             :style="{zIndex: !paint ? 100 : 2}" @click="showGif('paint')">
      </div>
      <div class="picnic2Button">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_picnic.png"
             :style="{zIndex: !picnic2 ? 100 : 1}" @click="showGif('picnic2')">
      </div>
      <div class="seesaw2Button">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_seesaw.png"
             :style="{zIndex: !seesaw2 ? 100 : 1}" @click="showGif('seesaw2')">
      </div>
      <div class="swing2Button">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_swing.png"
             :style="{zIndex: !swing2 ? 100 : 1}" @click="showGif('swing2')">
      </div>
      <div class="kite2Button">
        <img src="../../assets/image/202010H5 At the Park _MT/Word/word_kite.png"
             :style="{zIndex: !kite2 ? 100 : 1}" @click="showGif('kite2')">
      </div>
    </div>
    <div v-else-if="this.unit === 'My Weekend' && this.part === 'part2'">
      <img src="../../assets/image/202010H5 At the Beach_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="sandcastle">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/png/sandcastle.png" v-if="sandcastle" @click="showGif('sandcastle')">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/sandcastle.gif" style="z-index: 100" v-if="!sandcastle"
             @click="showGif('sandcastle')">
      </div>
      <div class="paddle">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/paddle.gif" style="z-index: 100" v-if="!paddle"
             @click="showGif('paddle')">
      </div>
      <div class="seashell">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/png/seashell.png" v-if="seashell" @click="showGif('seashell')">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/seashell.gif" style="z-index: 100" v-if="!seashell"
             @click="showGif('seashell')">
      </div>
      <div class="boat">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/png/boat.png" v-if="paddle&&boat" @click="walkers&&showGif('boat')">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/boat.gif" style="z-index: 100" v-if="!boat"
             @click="showGif('boat')">
      </div>
      <div class="rod">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/png/rod.png" v-if="rod" @click="showGif('rod')">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/rod.gif" style="z-index: 100" v-if="!rod"
             @click="showGif('rod')">
      </div>
      <div class="read2">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/png/read.png" v-if="read2" @click="showGif('read2')">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/read.gif" style="z-index: 100" v-if="!read2"
             @click="showGif('read2')">
      </div>
      <div class="swim2">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/png/swim.png" v-if="swim2" @click="showGif('swim2')">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/swim.gif" style="z-index: 100" v-if="!swim2"
             @click="showGif('swim2')">
      </div>
      <div class="bucket2">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/png/bucket.png" v-if="bucket2" @click="showGif('bucket2')">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/bucket.gif" style="z-index: 100" v-if="!bucket2"
             @click="showGif('bucket2')">
      </div>
      <div class="dig">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/png/dig.png" v-if="dig&&shovel2" @click="showGif('dig')">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/dig.gif" style="z-index: 100" v-if="!dig"
             @click="showGif('dig')">
      </div>
      <div class="shovel2">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/shovel.gif" style="z-index: 100" v-if="!shovel2"
             @click="showGif('shovel2')">
      </div>
      <div class="goggles">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/goggles.gif" style="z-index: 100" v-if="!goggles"
             @click="showGif('goggles')">
      </div>
      <div class="snorkel">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/png/snorkel.png" v-if="snorkel&&goggles" @click="walkers&&showGif('snorkel')">
        <img src="../../assets/image/202010H5 At the Beach_MT/GIF_PNG/gif/snorkel.gif" style="z-index: 100" v-if="!snorkel"
             @click="showGif('snorkel')">
      </div>
      <div class="sandcastleButton">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_sancastle.png"
             :style="{zIndex: !sandcastle ? 100 : 1}" @click="showGif('sandcastle')">
      </div>
      <div class="snorkelButton">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_snorkel.png" v-if="walkers"
             :style="{zIndex: !snorkel ? 100 : 1}" @click="showGif('snorkel')">
      </div>
      <div class="gogglesButton">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_goggles.png" v-if="walkers"
             :style="{zIndex: !goggles ? 100 : 1}" @click="showGif('goggles')">
      </div>
      <div class="shovel2Button">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_shovel.png"
             :style="{zIndex: !shovel2 ? 100 : 1}" @click="showGif('shovel2')">
      </div>
      <div class="digButton">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_dig.png"
             :style="{zIndex: !dig ? 100 : 1}" @click="showGif('dig')">
      </div>
      <div class="bucket2Button">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_bucket.png"
             :style="{zIndex: !bucket2 ? 100 : 1}" @click="showGif('bucket2')">
      </div>
      <div class="swim2Button">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_swim.png"
             :style="{zIndex: !swim2 ? 100 : 1}" @click="showGif('swim2')">
      </div>
      <div class="read2Button">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_read.png"
             :style="{zIndex: !read2 ? 100 : 1}" @click="showGif('read2')">
      </div>
      <div class="rodButton">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_rod.png"
             :style="{zIndex: !rod ? 100 : 1}" @click="showGif('rod')">
      </div>
      <div class="boatButton">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_boat.png" v-if="walkers"
             :style="{zIndex: !boat ? 100 : 1}" @click="showGif('boat')">
      </div>
      <div class="seashellButton">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_seashell.png"
             :style="{zIndex: !seashell ? 100 : 1}" @click="showGif('seashell')">
      </div>
      <div class="paddleButton">
        <img src="../../assets/image/202010H5 At the Beach_MT/Word/word_paddle.png" v-if="walkers"
             :style="{zIndex: !paddle ? 100 : 1}" @click="showGif('paddle')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Wild Animals' && this.part === 'part1'">
      <img src="../../assets/image/202011H5 In the Ocean_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="chase">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/chase.gif" style="z-index: 100" v-if="!chase"
             @click="showGif('chase')">
      </div>
      <div class="dolphin">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/png/dolphin.png" v-if="dolphin" @click="showGif('dolphin')">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/dolphin.gif" style="z-index: 100" v-if="!dolphin"
             @click="showGif('dolphin')">
      </div>
      <div class="hide">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/png/hide.png" v-if="hide" @click="showGif('hide')">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/hide.gif" style="z-index: 100" v-if="!hide"
             @click="showGif('hide')">
      </div>
      <div class="jellyfish">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/png/jellyfish.png" v-if="jellyfish&&wiggle" @click="showGif('jellyfish')">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/jellyfish.gif" style="z-index: 100" v-if="!jellyfish"
             @click="showGif('jellyfish')">
      </div>
      <div class="octopus">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/png/octopus.png" v-if="octopus" @click="showGif('octopus')">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/octopus.gif" style="z-index: 100" v-if="!octopus"
             @click="showGif('octopus')">
      </div>
      <div class="seahorse">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/png/seahorse.png" v-if="seahorse" @click="showGif('seahorse')">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/seahorse.gif" style="z-index: 100" v-if="!seahorse"
             @click="showGif('seahorse')">
      </div>
      <div class="shark">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/png/shark.png" v-if="shark&&chase" @click="showGif('shark')">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/shark.gif" style="z-index: 100" v-if="!shark"
             @click="showGif('shark')">
      </div>
      <div class="spray">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/spray.gif" style="z-index: 100" v-if="!spray"
             @click="showGif('spray')">
      </div>
      <div class="starfish">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/png/starfish.png" v-if="starfish" @click="walkers&&showGif('starfish')">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/starfish.gif" style="z-index: 100" v-if="!starfish"
             @click="showGif('starfish')">
      </div>
      <div class="turtle2">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/png/turtle.png" v-if="turtle2" @click="showGif('turtle2')">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/turtle.gif" style="z-index: 100" v-if="!turtle2"
             @click="showGif('turtle2')">
      </div>
      <div class="whale">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/png/whale.png" v-if="whale&&spray" @click="walkers&&showGif('whale')">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/whale.gif" style="z-index: 100" v-if="!whale"
             @click="showGif('whale')">
      </div>
      <div class="wiggle2">
        <img src="../../assets/image/202011H5 In the Ocean_MT/GIF_PNG/gif/wiggle.gif" style="z-index: 100" v-if="!wiggle2"
             @click="showGif('wiggle2')">
      </div>
      <div class="chaseButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/chase.png"
             :style="{zIndex: !chase ? 100 : 2}" @click="showGif('chase')">
      </div>
      <div class="dolphinButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/dolphin.png"
             :style="{zIndex: !dolphin ? 100 : 1}" @click="showGif('dolphin')">
      </div>
      <div class="hideButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/hide.png"
             :style="{zIndex: !hide ? 100 : 1}" @click="showGif('hide')">
      </div>
      <div class="jellyfishButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/jellyfish.png"
             :style="{zIndex: !jellyfish ? 100 : 1}" @click="showGif('jellyfish')">
      </div>
      <div class="octopusButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/octopus.png"
             :style="{zIndex: !octopus ? 100 : 1}" @click="showGif('octopus')">
      </div>
      <div class="seahorseButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/seahorse.png"
             :style="{zIndex: !seahorse ? 100 : 1}" @click="showGif('seahorse')">
      </div>
      <div class="sharkButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/shark.png" v-if="walkers"
             :style="{zIndex: !shark ? 100 : 1}" @click="showGif('shark')">
      </div>
      <div class="sprayButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/spray.png" v-if="walkers"
             :style="{zIndex: !spray ? 100 : 2}" @click="showGif('spray')">
      </div>
      <div class="starfishButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/starfish.png" v-if="walkers"
             :style="{zIndex: !starfish ? 100 : 1}" @click="showGif('starfish')">
      </div>
      <div class="turtle2Button">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/turtle.png"
             :style="{zIndex: !turtle2 ? 100 : 1}" @click="showGif('turtle2')">
      </div>
      <div class="whaleButton">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/whale.png" v-if="walkers"
             :style="{zIndex: !whale ? 100 : 1}" @click="showGif('whale')">
      </div>
      <div class="wiggle2Button">
        <img src="../../assets/image/202011H5 In the Ocean_MT/Word/wiggle.png"
             :style="{zIndex: !wiggle2 ? 100 : 1}" @click="showGif('wiggle2')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Wild Animals' && this.part === 'part2'">
      <img src="../../assets/image/202011H5 In the Jungle_MT/Runner_BG/BG_00000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <img src="../../assets/image/202011H5 In the Jungle_MT/still/Still_00000.png"
           style="width: 100%; z-index: -1; height: 100%;display:block;position: absolute;"/>
      <div class="bat">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/bat.png" v-if="bat" @click="walkers&&showGif('bat')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/bat.gif" style="z-index: 100" v-if="!bat"
             @click="showGif('bat')">
      </div>
      <div class="lizard2">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/lizard.png" v-if="lizard2" @click="showGif('lizard2')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/lizard.gif" style="z-index: 100" v-if="!lizard2"
             @click="showGif('lizard2')">
      </div>
      <div class="jaguar">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/jaguar.gif" style="z-index: 100" v-if="!jaguar"
             @click="showGif('jaguar')">
      </div>
      <div class="frog">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/frog.png" v-if="frog" @click="showGif('frog')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/frog.gif" style="z-index: 100" v-if="!frog"
             @click="showGif('frog')">
      </div>
      <div class="pounce">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/pounce.png" v-if="pounce&&jaguar" @click="showGif('pounce')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/pounce.gif" style="z-index: 100" v-if="!pounce"
             @click="showGif('pounce')">
      </div>
      <div class="sloth">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/sloth.png" v-if="sloth" @click="walkers&&showGif('sloth')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/sloth.gif" style="z-index: 100" v-if="!sloth"
             @click="showGif('sloth')">
      </div>
      <div class="snake2">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/snake.png" v-if="snake2&&slither" @click="showGif('snake2')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/snake.gif" style="z-index: 100" v-if="!snake2"
             @click="showGif('snake2')">
      </div>
      <div class="crocodile2">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/crocodile.png" v-if="crocodile2" @click="showGif('crocodile2')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/crocodile.gif" style="z-index: 100" v-if="!crocodile2"
             @click="showGif('crocodile2')">
      </div>
      <div class="swing3">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/monkey.png" v-if="swing3" @click="walkers&&showGif('swing3')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/monkey.gif" style="z-index: 100" v-if="!swing3"
             @click="showGif('swing3')">
      </div>
      <div class="slither">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/slither.gif" style="z-index: 100" v-if="!slither"
             @click="showGif('slither')">
      </div>
      <div class="parrot2">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/parrot.png" v-if="parrot2" @click="showGif('parrot2')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/parrot.gif" style="z-index: 100" v-if="!parrot2"
             @click="showGif('parrot2')">
      </div>
      <div class="crawl2">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/png/crawl.png" v-if="crawl2" @click="showGif('crawl2')">
        <img src="../../assets/image/202011H5 In the Jungle_MT/GIF_PNG/gif/crawl.gif" style="z-index: 100" v-if="!crawl2"
             @click="showGif('crawl2')">
      </div>
      <div class="batButton">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_bat.png" v-if="walkers"
             :style="{zIndex: !bat ? 100 : 1}" @click="showGif('bat')">
      </div>
      <div class="lizard2Button">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_lizard.png"
             :style="{zIndex: !lizard2 ? 100 : 1}" @click="showGif('lizard2')">
      </div>
      <div class="jaguarButton">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_jaguar.png" v-if="walkers"
             :style="{zIndex: !jaguar ? 100 : 1}" @click="showGif('jaguar')">
      </div>
      <div class="frogButton">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_frog.png"
             :style="{zIndex: !frog ? 100 : 1}" @click="showGif('frog')">
      </div>
      <div class="pounceButton">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_pounce.png"
             :style="{zIndex: !pounce ? 100 : 1}" @click="showGif('pounce')">
      </div>
      <div class="slothButton">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_sloth.png" v-if="walkers"
             :style="{zIndex: !sloth ? 100 : 1}" @click="showGif('sloth')">
      </div>
      <div class="snake2Button">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_snake.png"
             :style="{zIndex: !snake2 ? 100 : 1}" @click="showGif('snake2')">
      </div>
      <div class="crocodile2Button">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_crocodile.png"
             :style="{zIndex: !crocodile2 ? 100 : 1}" @click="showGif('crocodile2')">
      </div>
      <div class="swing3Button">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_swing.png" v-if="walkers"
             :style="{zIndex: !swing3 ? 100 : 1}" @click="showGif('swing3')">
      </div>
      <div class="slitherButton">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_slither.png"
             :style="{zIndex: !slither ? 100 : 1}" @click="showGif('slither')">
      </div>
      <div class="parrot2Button">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_parrot.png"
             :style="{zIndex: !parrot2 ? 100 : 1}" @click="showGif('parrot2')">
      </div>
      <div class="crawl2Button">
        <img src="../../assets/image/202011H5 In the Jungle_MT/Word/word_crawl.png"
             :style="{zIndex: !crawl2 ? 100 : 1}" @click="showGif('crawl2')">
      </div>
    </div>
    <div v-else-if="this.unit === 'My Community' && this.part === 'part1'">
      <img src="../../assets/image/The Places_MT/Runner_BG/runners_BG-02.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="bakery">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/bakery.png" v-if="bakery" @click="showGif('bakery')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/bakery.gif" style="z-index: 100" v-if="!bakery"
             @click="showGif('bakery')">
      </div>
      <div class="busStop">
<!--        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/bus stop.png" v-if="busStop" @click="showGif('busStop')">-->
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/bus stop.gif" style="z-index: 100" v-if="!busStop"
             @click="showGif('busStop')">
      </div>
      <div class="fireStation">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/fire station.png" v-if="fireStation" @click="walkers&&showGif('fireStation')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/fire station.gif" style="z-index: 100" v-if="!fireStation"
             @click="showGif('fireStation')">
      </div>
      <div class="hospital">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/hospital.png" v-if="hospital" @click="showGif('hospital')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/hospital.gif" style="z-index: 100" v-if="!hospital"
             @click="showGif('hospital')">
      </div>
      <div class="library">
<!--        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/library.png" v-if="library" @click="showGif('library')">-->
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/library.gif" style="z-index: 100" v-if="!library"
             @click="showGif('library')">
      </div>
      <div class="park">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/park.png" v-if="park" @click="showGif('park')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/park.gif" style="z-index: 100" v-if="!park"
             @click="showGif('park')">
      </div>
      <div class="policeStation">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/police station.png" v-if="policeStation" @click="walkers&&showGif('policeStation')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/police station.gif" style="z-index: 100" v-if="!policeStation"
             @click="showGif('policeStation')">
      </div>
      <div class="restaurant">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/restaurant.png" v-if="restaurant" @click="showGif('restaurant')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/restaurant.gif" style="z-index: 100" v-if="!restaurant"
             @click="showGif('restaurant')">
      </div>
      <div class="school">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/school.png" v-if="school" @click="showGif('school')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/school.gif" style="z-index: 100" v-if="!school"
             @click="showGif('school')">
      </div>
      <div class="shop">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/shop.png" v-if="shop" @click="showGif('shop')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/shop.gif" style="z-index: 100" v-if="!shop"
             @click="showGif('shop')">
      </div>
      <div class="visit">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/visit.png" v-if="visit" @click="showGif('visit')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/visit.gif" style="z-index: 100" v-if="!visit"
             @click="showGif('visit')">
      </div>
      <div class="wait">
        <img src="../../assets/image/The Places_MT/GIF_PNG/PNG/wait.png" v-if="wait" @click="showGif('wait')">
        <img src="../../assets/image/The Places_MT/GIF_PNG/GIF/wait.gif" style="z-index: 100" v-if="!wait"
             @click="showGif('wait')">
      </div>
      <div class="bakeryButton">
        <img src="../../assets/image/The Places_MT/Word/bakery.png"
             :style="{zIndex: !bakery ? 100 : 1}" @click="showGif('bakery')">
      </div>
      <div class="busStopButton">
        <img src="../../assets/image/The Places_MT/Word/BUS STOP.png" v-if="walkers"
             :style="{zIndex: !busStop ? 100 : 1}" @click="showGif('busStop')">
      </div>
      <div class="fireStationButton">
        <img src="../../assets/image/The Places_MT/Word/fire station.png" v-if="walkers"
             :style="{zIndex: !fireStation ? 100 : 1}" @click="showGif('fireStation')">
      </div>
      <div class="hospitalButton">
        <img src="../../assets/image/The Places_MT/Word/HOSPITAL.png"
             :style="{zIndex: !hospital ? 100 : 1}" @click="showGif('hospital')">
      </div>
      <div class="libraryButton">
        <img src="../../assets/image/The Places_MT/Word/LIBRARY.png" v-if="walkers"
             :style="{zIndex: !library ? 100 : 1}" @click="showGif('library')">
      </div>
      <div class="parkButton">
        <img src="../../assets/image/The Places_MT/Word/park.png"
             :style="{zIndex: !park ? 100 : 1}" @click="showGif('park')">
      </div>
      <div class="policeStationButton">
        <img src="../../assets/image/The Places_MT/Word/POLICE STATION.png" v-if="walkers"
             :style="{zIndex: !policeStation ? 100 : 1}" @click="showGif('policeStation')">
      </div>
      <div class="restaurantButton">
        <img src="../../assets/image/The Places_MT/Word/RESTAURANT.png"
             :style="{zIndex: !restaurant ? 100 : 1}" @click="showGif('restaurant')">
      </div>
      <div class="schoolButton">
        <img src="../../assets/image/The Places_MT/Word/SCHOOL.png"
             :style="{zIndex: !school ? 100 : 1}" @click="showGif('school')">
      </div>
      <div class="shopButton">
        <img src="../../assets/image/The Places_MT/Word/SHOP.png"
             :style="{zIndex: !shop ? 100 : 1}" @click="showGif('shop')">
      </div>
      <div class="visitButton">
        <img src="../../assets/image/The Places_MT/Word/VISIT.png"
             :style="{zIndex: !visit ? 100 : 1}" @click="showGif('visit')">
      </div>
      <div class="waitButton">
        <img src="../../assets/image/The Places_MT/Word/WAIT.png"
             :style="{zIndex: !wait ? 100 : 1}" @click="showGif('wait')">
      </div>
    </div>
    <div v-else-if="this.unit === 'My Community' && this.part === 'part2'">
      <img src="../../assets/image/The People_MT/Runner_BG/BG-01.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="ambulance2">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/ambulance.png" v-if="ambulance2" @click="showGif('ambulance2')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/ambulance.gif" style="z-index: 100" v-if="!ambulance2"
             @click="showGif('ambulance2')">
      </div>
      <div class="chef2">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/chef.gif" style="z-index: 100" v-if="!chef2"
             @click="showGif('chef2')">
      </div>
      <div class="cook">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/cook.png" v-if="cook&&chef2" @click="showGif('cook')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/cook.gif" style="z-index: 100" v-if="!cook"
             @click="showGif('cook')">
      </div>
      <div class="doctor2">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/doctor.png" v-if="doctor2" @click="showGif('doctor2')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/doctor.gif" style="z-index: 100" v-if="!doctor2"
             @click="showGif('doctor2')">
      </div>
      <div class="fireFighter">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/firefighter.png" v-if="fireFighter" @click="walkers&&showGif('fireFighter')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/firefighter.gif" style="z-index: 100" v-if="!fireFighter"
             @click="showGif('fireFighter')">
      </div>
      <div class="help">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/help.png" v-if="help" @click="showGif('help')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/help.gif" style="z-index: 100" v-if="!help"
             @click="showGif('help')">
      </div>
      <div class="letters">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/letters.png" v-if="letters" @click="walkers&&showGif('letters')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/letters.gif" style="z-index: 100" v-if="!letters"
             @click="showGif('letters')">
      </div>
      <div class="mailPerson">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/mail person.png" v-if="mailPerson" @click="walkers&&showGif('mailPerson')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/mail-person.gif" style="z-index: 100" v-if="!mailPerson"
             @click="showGif('mailPerson')">
      </div>
      <div class="nurse">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/nurse.png" v-if="nurse" @click="showGif('nurse')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/nurse.gif" style="z-index: 100" v-if="!nurse"
             @click="showGif('nurse')">
      </div>
      <div class="policeman">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/policeman.png" v-if="policeman" @click="walkers&&showGif('policeman')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/policeman.gif" style="z-index: 100" v-if="!policeman"
             @click="showGif('policeman')">
      </div>
      <div class="teacher2">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/teacher.png" v-if="teacher2" @click="showGif('teacher2')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/teacher.gif" style="z-index: 100" v-if="!teacher2"
             @click="showGif('teacher2')">
      </div>
      <div class="vet">
        <img src="../../assets/image/The People_MT/GIF_PNG/PNG/vet.png" v-if="vet" @click="showGif('vet')">
        <img src="../../assets/image/The People_MT/GIF_PNG/GIF/vet.gif" style="z-index: 100" v-if="!vet"
             @click="showGif('vet')">
      </div>
      <div class="ambulance2Button">
        <img src="../../assets/image/The People_MT/Word/ambulance.png"
             :style="{zIndex: !ambulance2 ? 100 : 1}" @click="showGif('ambulance2')">
      </div>
      <div class="chef2Button">
        <img src="../../assets/image/The People_MT/Word/chef.png"
             :style="{zIndex: !chef2 ? 100 : 1}" @click="showGif('chef2')">
      </div>
      <div class="cookButton">
        <img src="../../assets/image/The People_MT/Word/cook.png"
             :style="{zIndex: !cook ? 100 : 1}" @click="showGif('cook')">
      </div>
      <div class="doctor2Button">
        <img src="../../assets/image/The People_MT/Word/doctor.png"
             :style="{zIndex: !doctor2 ? 100 : 1}" @click="showGif('doctor2')">
      </div>
      <div class="fireFighterButton">
        <img src="../../assets/image/The People_MT/Word/firefighter.png" v-if="walkers"
             :style="{zIndex: !fireFighter ? 100 : 1}" @click="showGif('fireFighter')">
      </div>
      <div class="helpButton">
        <img src="../../assets/image/The People_MT/Word/help.png"
             :style="{zIndex: !help ? 100 : 1}" @click="showGif('help')">
      </div>
      <div class="lettersButton">
        <img src="../../assets/image/The People_MT/Word/letters.png" v-if="walkers"
             :style="{zIndex: !letters ? 100 : 1}" @click="showGif('letters')">
      </div>
      <div class="mailPersonButton">
        <img src="../../assets/image/The People_MT/Word/mail person.png" v-if="walkers"
             :style="{zIndex: !mailPerson ? 100 : 1}" @click="showGif('mailPerson')">
      </div>
      <div class="nurseButton">
        <img src="../../assets/image/The People_MT/Word/nurse.png"
             :style="{zIndex: !nurse ? 100 : 1}" @click="showGif('nurse')">
      </div>
      <div class="policemanButton">
        <img src="../../assets/image/The People_MT/Word/policeman.png" v-if="walkers"
             :style="{zIndex: !policeman ? 100 : 1}" @click="showGif('policeman')">
      </div>
      <div class="teacher2Button">
        <img src="../../assets/image/The People_MT/Word/teacher.png"
             :style="{zIndex: !teacher2 ? 100 : 1}" @click="showGif('teacher2')">
      </div>
      <div class="vetButton">
        <img src="../../assets/image/The People_MT/Word/Vet.png"
             :style="{zIndex: !vet ? 100 : 1}" @click="showGif('vet')">
      </div>
    </div>
    <div v-else-if="this.unit === 'Fun Time!' && this.part === 'part1'">
      <img src="../../assets/image/indoor_MT/Runner_BG/bg_0000.png"
           style="width: 100%; z-index: -2;background-color: #204900; height: 100%;display:block;position: absolute;"/>
      <div class="bake2">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/bake.png" v-if="bake2&&oven" @click="showGif('bake2')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/bake.gif" style="z-index: 100" v-if="!bake2"
             @click="showGif('bake2')">
      </div>
      <div class="book2">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/book.png" v-if="book2" @click="showGif('book2')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/book.gif" style="z-index: 100" v-if="!book2"
             @click="showGif('book2')">
      </div>
      <div class="cookies">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/cookies.png" v-if="cookies" @click="showGif('cookies')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/cookies.gif" style="z-index: 100" v-if="!cookies"
             @click="showGif('cookies')">
      </div>
      <div class="dance">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/dance.png" v-if="dance" @click="walkers&&showGif('dance')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/dance.gif" style="z-index: 100" v-if="!dance"
             @click="showGif('dance')">
      </div>
      <div class="listen2">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/listen.png" v-if="listen2" @click="walkers&&showGif('listen2')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/listen.gif" style="z-index: 100" v-if="!listen2"
             @click="showGif('listen2')">
      </div>
      <div class="oven">
<!--        <img src="../../assets/image/indoor_MT/GIF_PNG/png/oven.png" v-if="oven" @click="showGif('oven')">-->
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/oven.gif" style="z-index: 100" v-if="!oven"
             @click="showGif('oven')">
      </div>
      <div class="paintbrush">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/paintbrush.png" v-if="paintbrush" @click="showGif('paintbrush')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/paintbrush.gif" style="z-index: 100" v-if="!paintbrush"
             @click="showGif('paintbrush')">
      </div>
      <div class="piano">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/piano.png" v-if="piano" @click="walkers&&showGif('piano')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/piano.gif" style="z-index: 100" v-if="!piano"
             @click="showGif('piano')">
      </div>
      <div class="picture">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/picture.png" v-if="picture" @click="showGif('picture')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/picture.gif" style="z-index: 100" v-if="!picture"
             @click="showGif('picture')">
      </div>
      <div class="read3">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/read.png" v-if="read3" @click="showGif('read3')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/read.gif" style="z-index: 100" v-if="!read3"
             @click="showGif('read3')">
      </div>
      <div class="TV">
<!--        <img src="../../assets/image/indoor_MT/GIF_PNG/png/TV.png" v-if="TV" @click="showGif('TV')">-->
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/tv.gif" style="z-index: 100" v-if="!TV"
             @click="showGif('TV')">
      </div>
      <div class="videoGame">
        <img src="../../assets/image/indoor_MT/GIF_PNG/png/videoGame.png" v-if="videoGame" @click="showGif('videoGame')">
        <img src="../../assets/image/indoor_MT/GIF_PNG/GIF/video-game.gif" style="z-index: 100" v-if="!videoGame"
             @click="showGif('videoGame')">
      </div>
      <div class="bake2Button">
        <img src="../../assets/image/indoor_MT/Word/word_bake_0.png"
             :style="{zIndex: !bake2 ? 100 : 1}" @click="showGif('bake2')">
      </div>
      <div class="book2Button">
        <img src="../../assets/image/indoor_MT/Word/word_book_0.png"
             :style="{zIndex: !book2 ? 100 : 1}" @click="showGif('book2')">
      </div>
      <div class="cookiesButton">
        <img src="../../assets/image/indoor_MT/Word/word_cookies_00.png"
             :style="{zIndex: !cookies ? 100 : 1}" @click="showGif('cookies')">
      </div>
      <div class="danceButton">
        <img src="../../assets/image/indoor_MT/Word/word_dance_0.png" v-if="walkers"
             :style="{zIndex: !dance ? 100 : 1}" @click="showGif('dance')">
      </div>
      <div class="listen2Button">
        <img src="../../assets/image/indoor_MT/Word/word_listen_00.png" v-if="walkers"
             :style="{zIndex: !listen2 ? 100 : 1}" @click="showGif('listen2')">
      </div>
      <div class="ovenButton">
        <img src="../../assets/image/indoor_MT/Word/word_oven_00.png"
             :style="{zIndex: !oven ? 100 : 1}" @click="showGif('oven')">
      </div>
      <div class="paintbrushButton">
        <img src="../../assets/image/indoor_MT/Word/word_paintbrush_00.png"
             :style="{zIndex: !paintbrush ? 100 : 1}" @click="showGif('paintbrush')">
      </div>
      <div class="pianoButton">
        <img src="../../assets/image/indoor_MT/Word/word_piano_00.png" v-if="walkers"
             :style="{zIndex: !piano ? 100 : 1}" @click="showGif('piano')">
      </div>
      <div class="pictureButton">
        <img src="../../assets/image/indoor_MT/Word/word_picture_00.png"
             :style="{zIndex: !picture ? 100 : 1}" @click="showGif('picture')">
      </div>
      <div class="read3Button">
        <img src="../../assets/image/indoor_MT/Word/word_read_00.png"
             :style="{zIndex: !read3 ? 100 : 1}" @click="showGif('read3')">
      </div>
      <div class="TVButton">
        <img src="../../assets/image/indoor_MT/Word/word_TV_0.png"
             :style="{zIndex: !TV ? 100 : 1}" @click="showGif('TV')">
      </div>
      <div class="videoGameButton">
        <img src="../../assets/image/indoor_MT/Word/word_video game_00.png" v-if="walkers"
             :style="{zIndex: !videoGame ? 100 : 1}" @click="showGif('videoGame')">
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
          //november
          baby:require('../../assets/Flashcard Audio/november/Baby.mp3'),
          balloons:require('../../assets/Flashcard Audio/november/Balloons.mp3'),
          blow1:require('../../assets/Flashcard Audio/november/blow.mp3'),
          brother:require('../../assets/Flashcard Audio/november/brother.mp3'),
          cake:require('../../assets/Flashcard Audio/november/Cake.mp3'),
          candles:require('../../assets/Flashcard Audio/november/Candles.mp3'),
          card:require('../../assets/Flashcard Audio/november/card.mp3'),
          caring:require('../../assets/Flashcard Audio/november/caring.mp3'),
          cut:require('../../assets/Flashcard Audio/november/Cut.mp3'),
          father:require('../../assets/Flashcard Audio/november/Father.mp3'),
          friends:require('../../assets/Flashcard Audio/november/friends.mp3'),
          grandma:require('../../assets/Flashcard Audio/november/grandma.mp3'),
          grandpa:require('../../assets/Flashcard Audio/november/grandpa.mp3'),
          happy:require('../../assets/Flashcard Audio/november/Happy.mp3'),
          hug:require('../../assets/Flashcard Audio/november/Hug.mp3'),
          mother:require('../../assets/Flashcard Audio/november/Mother.mp3'),
          old:require('../../assets/Flashcard Audio/november/old.mp3'),
          partyHat:require('../../assets/Flashcard Audio/november/party hat.mp3'),
          play:require('../../assets/Flashcard Audio/november/Play.mp3'),
          presents:require('../../assets/Flashcard Audio/november/presents.mp3'),
          share:require('../../assets/Flashcard Audio/november/share.mp3'),
          sing:require('../../assets/Flashcard Audio/november/Sing.mp3'),
          sister:require('../../assets/Flashcard Audio/november/sister.mp3'),
          young:require('../../assets/Flashcard Audio/november/Young.mp3'),
          //december
          animals:require('../../assets/Flashcard Audio/december/Animals.mp3'),
          bells:require('../../assets/Flashcard Audio/december/bells.mp3'),
          christmasTree:require('../../assets/Flashcard Audio/december/Christmas tree.mp3'),
          coat:require('../../assets/Flashcard Audio/december/Coat.mp3'),
          cold1:require('../../assets/Flashcard Audio/december/cold.mp3'),
          elf1:require('../../assets/Flashcard Audio/december/elf.mp3'),
          fall:require('../../assets/Flashcard Audio/december/fall.mp3'),
          fireplace:require('../../assets/Flashcard Audio/december/fireplace.mp3'),
          hang:require('../../assets/Flashcard Audio/december/Hang.mp3'),
          list:require('../../assets/Flashcard Audio/december/List.mp3'),
          ornament:require('../../assets/Flashcard Audio/december/ornament.mp3'),
          present:require('../../assets/Flashcard Audio/december/presents.mp3'),
          pull:require('../../assets/Flashcard Audio/december/Pull.mp3'),
          reindeer:require('../../assets/Flashcard Audio/december/reindeer.mp3'),
          santaClaus:require('../../assets/Flashcard Audio/december/Santa claus.mp3'),
          scarf:require('../../assets/Flashcard Audio/december/scarf.mp3'),
          send:require('../../assets/Flashcard Audio/december/Send.mp3'),
          sled1:require('../../assets/Flashcard Audio/december/Sled.mp3'),
          sleigh:require('../../assets/Flashcard Audio/december/sleigh.mp3'),
          snow1:require('../../assets/Flashcard Audio/december/snow.mp3'),
          snowman:require('../../assets/Flashcard Audio/december/snowman.mp3'),
          stocking:require('../../assets/Flashcard Audio/december/stocking.mp3'),
          warm:require('../../assets/Flashcard Audio/december/warm.mp3'),
          skates:require('../../assets/Flashcard Audio/december/skates.mp3'),
          cracker:require('../../assets/Flashcard Audio/december/cracker.mp3'),
          hibernate:require('../../assets/Flashcard Audio/december/hibernate.mp3'),
          //January
          bowl:require('../../assets/Flashcard Audio/january/Bowl.mp3'),
          cup:require('../../assets/Flashcard Audio/january/Cup.mp3'),
          fish1:require('../../assets/Flashcard Audio/january/Fish.mp3'),
          chopsticks:require('../../assets/Flashcard Audio/january/Chopsticks.mp3'),
          eat:require('../../assets/Flashcard Audio/january/Eat.mp3'),
          rice:require('../../assets/Flashcard Audio/january/Rice.mp3'),
          chicken:require('../../assets/Flashcard Audio/january/Chicken.mp3'),
          drink:require('../../assets/Flashcard Audio/january/Drink.mp3'),
          milk:require('../../assets/Flashcard Audio/january/Milk (runners).mp3'),
          spoon:require('../../assets/Flashcard Audio/january/Spoon (runners).mp3'),
          tea:require('../../assets/Flashcard Audio/january/Tea (runners).mp3'),
          vegetables:require('../../assets/Flashcard Audio/january/Vegetables (runners).mp3'),
          napkin:require('../../assets/Flashcard Audio/january/Napkin.mp3'),
          pizza:require('../../assets/Flashcard Audio/january/Pizza.mp3'),
          fork:require('../../assets/Flashcard Audio/january/Fork.mp3'),
          knife:require('../../assets/Flashcard Audio/january/Knife.mp3'),
          iceCream:require('../../assets/Flashcard Audio/january/Ice Cream.mp3'),
          waiter:require('../../assets/Flashcard Audio/january/Waiter.mp3'),
          menu:require('../../assets/Flashcard Audio/january/Menu.mp3'),
          plate:require('../../assets/Flashcard Audio/january/Plate.mp3'),
          order:require('../../assets/Flashcard Audio/january/Order (runners).mp3'),
          juice:require('../../assets/Flashcard Audio/january/Juice (runners).mp3'),
          noodles:require('../../assets/Flashcard Audio/january/Noodles (runners).mp3'),
          burger:require('../../assets/Flashcard Audio/january/Burger (runners).mp3'),
          //february
          apple:require('../../assets/Flashcard Audio/february/Apple.mp3'),
          barn:require('../../assets/Flashcard Audio/february/Barn.mp3'),
          bucket:require('../../assets/Flashcard Audio/february/Bucket.mp3'),
          chick:require('../../assets/Flashcard Audio/february/Chick.mp3'),
          cow:require('../../assets/Flashcard Audio/february/Cow.mp3'),
          crow:require('../../assets/Flashcard Audio/february/Crow.mp3'),
          duck:require('../../assets/Flashcard Audio/february/Duck.mp3'),
          egg:require('../../assets/Flashcard Audio/february/Egg.mp3'),
          farmer:require('../../assets/Flashcard Audio/february/Farmer.mp3'),
          feed1:require('../../assets/Flashcard Audio/february/Feed.mp3'),
          fence:require('../../assets/Flashcard Audio/february/Fence.mp3'),
          gallop:require('../../assets/Flashcard Audio/february/Gallop.mp3'),
          hay:require('../../assets/Flashcard Audio/february/Hay.mp3'),
          hen:require('../../assets/Flashcard Audio/february/Hen.mp3'),
          horse1:require('../../assets/Flashcard Audio/february/Horse.mp3'),
          pick:require('../../assets/Flashcard Audio/february/Pick.mp3'),
          pig:require('../../assets/Flashcard Audio/february/Pig.mp3'),
          plants:require('../../assets/Flashcard Audio/february/Plant.mp3'),
          plough:require('../../assets/Flashcard Audio/february/Plough.mp3'),
          roll:require('../../assets/Flashcard Audio/february/Roll.mp3'),
          rooster:require('../../assets/Flashcard Audio/february/Rooster.mp3'),
          sheep:require('../../assets/Flashcard Audio/february/Sheep.mp3'),
          tractor:require('../../assets/Flashcard Audio/february/Tractor.mp3'),
          tree:require('../../assets/Flashcard Audio/february/Tree.mp3'),
          //march
          butterfly:require('../../assets/Flashcard Audio/march/butterfly.mp3'),
          flowers:require('../../assets/Flashcard Audio/march/flowers.mp3'),
          fly:require('../../assets/Flashcard Audio/march/fly.mp3'),
          hike:require('../../assets/Flashcard Audio/march/hike.mp3'),
          iceCream1:require('../../assets/Flashcard Audio/march/ice cream.mp3'),
          kite:require('../../assets/Flashcard Audio/march/kite.mp3'),
          picnic:require('../../assets/Flashcard Audio/march/picnic.mp3'),
          plant:require('../../assets/Flashcard Audio/march/plant.mp3'),
          seeds:require('../../assets/Flashcard Audio/march/seeds.mp3'),
          sunny:require('../../assets/Flashcard Audio/march/sunny.mp3'),
          sunscreen:require('../../assets/Flashcard Audio/march/sunscreen.mp3'),
          swim:require('../../assets/Flashcard Audio/march/swim.mp3'),
          hotChocolate:require('../../assets/Flashcard Audio/march/hot chocolate.mp3'),
          iceSkating:require('../../assets/Flashcard Audio/march/ice skating.mp3'),
          icicles:require('../../assets/Flashcard Audio/march/icicles.mp3'),
          leaves:require('../../assets/Flashcard Audio/march/leaves.mp3'),
          rain:require('../../assets/Flashcard Audio/march/rain.mp3'),
          rake:require('../../assets/Flashcard Audio/march/rake.mp3'),
          shiver:require('../../assets/Flashcard Audio/march/shiver.mp3'),
          ski:require('../../assets/Flashcard Audio/march/ski.mp3'),
          snow2:require('../../assets/Flashcard Audio/march/snow.mp3'),
          squirrel:require('../../assets/Flashcard Audio/march/squirrel.mp3'),
          umbrella:require('../../assets/Flashcard Audio/march/umbrella.mp3'),
          wind1:require('../../assets/Flashcard Audio/march/wind.mp3'),

          //april
          airplane:require('../../assets/Flashcard Audio/april/airplane.mp3'),
          airport:require('../../assets/Flashcard Audio/april/airport.mp3'),
          bike:require('../../assets/Flashcard Audio/april/bike.mp3'),
          bus:require('../../assets/Flashcard Audio/april/bus.mp3'),
          car:require('../../assets/Flashcard Audio/april/car.mp3'),
          drive:require('../../assets/Flashcard Audio/april/drive.mp3'),
          fast:require('../../assets/Flashcard Audio/april/fast.mp3'),
          ferry:require('../../assets/Flashcard Audio/april/ferry.mp3'),
          fly1:require('../../assets/Flashcard Audio/april/fly.mp3'),
          helicopter:require('../../assets/Flashcard Audio/april/helicopter.mp3'),
          honk:require('../../assets/Flashcard Audio/april/honk.mp3'),
          land:require('../../assets/Flashcard Audio/april/land.mp3'),
          motorbike:require('../../assets/Flashcard Audio/april/motorbike.mp3'),
          ship:require('../../assets/Flashcard Audio/april/ship.mp3'),
          slow:require('../../assets/Flashcard Audio/april/slow.mp3'),
          station:require('../../assets/Flashcard Audio/april/station.mp3'),
          stop:require('../../assets/Flashcard Audio/april/stop.mp3'),
          suitcase:require('../../assets/Flashcard Audio/april/suitcase.mp3'),
          ticket:require('../../assets/Flashcard Audio/april/ticket.mp3'),
          trafficLights:require('../../assets/Flashcard Audio/april/traffic lights.mp3'),
          train:require('../../assets/Flashcard Audio/april/train.mp3'),
          tram:require('../../assets/Flashcard Audio/april/tram.mp3'),
          truck:require('../../assets/Flashcard Audio/april/truck.mp3'),
          walk:require('../../assets/Flashcard Audio/april/walk.mp3'),
          //MAY
          ant:require('../../assets/Flashcard Audio/may/Ant.mp3'),
          caterpillar:require('../../assets/Flashcard Audio/may/caterpillar.mp3'),
          munch:require('../../assets/Flashcard Audio/may/munch.mp3'),
          crawl:require('../../assets/Flashcard Audio/may/crawl.mp3'),
          feelers:require('../../assets/Flashcard Audio/may/feelers.mp3'),
          leaf:require('../../assets/Flashcard Audio/may/leaf.mp3'),
          web:require('../../assets/Flashcard Audio/may/web.mp3'),
          mantis:require('../../assets/Flashcard Audio/may/mantis.mp3'),
          snail:require('../../assets/Flashcard Audio/may/snail.mp3'),
          spider:require('../../assets/Flashcard Audio/may/spider.mp3'),
          wiggle:require('../../assets/Flashcard Audio/may/wiggle.mp3'),
          worm:require('../../assets/Flashcard Audio/may/worm.mp3'),
          bee:require('../../assets/Flashcard Audio/may/bee.mp3'),
          butterfly2:require('../../assets/Flashcard Audio/may/butterfly.mp3'),
          buzz:require('../../assets/Flashcard Audio/may/buzz.mp3'),
          dragonfly:require('../../assets/Flashcard Audio/may/dragonfly.mp3'),
          firefly:require('../../assets/Flashcard Audio/may/firefly.mp3'),
          flower:require('../../assets/Flashcard Audio/may/flowers.mp3'),
          fly2:require('../../assets/Flashcard Audio/may/fly.mp3'),
          hive:require('../../assets/Flashcard Audio/may/hive.mp3'),
          ladybug:require('../../assets/Flashcard Audio/may/ladybug.mp3'),
          mosquito:require('../../assets/Flashcard Audio/may/mosquito.mp3'),
          sting:require('../../assets/Flashcard Audio/may/sting.mp3'),
          wings:require('../../assets/Flashcard Audio/may/wings.mp3'),

          //clothes
          bag:require('../../assets/Flashcard Audio/clothes/bag.mp3'),
          belt:require('../../assets/Flashcard Audio/clothes/belt.mp3'),
          boots:require('../../assets/Flashcard Audio/clothes/boots.mp3'),
          dress:require('../../assets/Flashcard Audio/clothes/dress.mp3'),
          hat:require('../../assets/Flashcard Audio/clothes/hat.mp3'),
          jacket:require('../../assets/Flashcard Audio/clothes/jacket.mp3'),
          mittens:require('../../assets/Flashcard Audio/clothes/mittens.mp3'),
          pajamas:require('../../assets/Flashcard Audio/clothes/pajamas.mp3'),
          sandals:require('../../assets/Flashcard Audio/clothes/sandals.mp3'),
          scarf1:require('../../assets/Flashcard Audio/clothes/scarf.mp3'),
          shirt:require('../../assets/Flashcard Audio/clothes/shirt.mp3'),
          shoes:require('../../assets/Flashcard Audio/clothes/shoes.mp3'),
          skirt:require('../../assets/Flashcard Audio/clothes/skirt.mp3'),
          socks:require('../../assets/Flashcard Audio/clothes/socks.mp3'),
          sunglasses:require('../../assets/Flashcard Audio/clothes/sunglasses.mp3'),
          sweater:require('../../assets/Flashcard Audio/clothes/sweater.mp3'),
          tie:require('../../assets/Flashcard Audio/clothes/tie.mp3'),
          trousers:require('../../assets/Flashcard Audio/clothes/trousers.mp3'),
          tShirt:require('../../assets/Flashcard Audio/clothes/t-shirt.mp3'),
          watch1:require('../../assets/Flashcard Audio/clothes/watch.mp3'),
          wear:require('../../assets/Flashcard Audio/clothes/wear.mp3'),
          wrap:require('../../assets/Flashcard Audio/clothes/wrap.mp3'),
          zip:require('../../assets/Flashcard Audio/clothes/zip.mp3'),
          shorts:require('../../assets/Flashcard Audio/clothes/shorts.mp3'),

          //Theme
          scream1:require('../../assets/Flashcard Audio/ThemPark/Scream.mp3'),
          rollerCoaster:require('../../assets/Flashcard Audio/ThemPark/roller coaster.mp3'),
          ticket1:require('../../assets/Flashcard Audio/ThemPark/ticket.mp3'),
          queue:require('../../assets/Flashcard Audio/ThemPark/queue.mp3'),
          swim1:require('../../assets/Flashcard Audio/ThemPark/swim.mp3'),
          pool:require('../../assets/Flashcard Audio/ThemPark/pool.mp3'),
          carousel:require('../../assets/Flashcard Audio/ThemPark/carousel.mp3'),
          ferrisWheel:require('../../assets/Flashcard Audio/ThemPark/Ferris wheel.mp3'),
          cottonCandy:require('../../assets/Flashcard Audio/ThemPark/cotton candy.mp3'),
          popcorn:require('../../assets/Flashcard Audio/ThemPark/Popcorn.mp3'),
          balloons1:require('../../assets/Flashcard Audio/ThemPark/balloons.mp3'),
          bumper:require('../../assets/Flashcard Audio/ThemPark/bumper cars.mp3'),
          dry:require('../../assets/Flashcard Audio/ThemPark/dry.mp3'),
          float:require('../../assets/Flashcard Audio/ThemPark/July - float.mp3'),
          lazy:require('../../assets/Flashcard Audio/ThemPark/lazy river.mp3'),
          lifeguard:require('../../assets/Flashcard Audio/ThemPark/lifeguard.mp3'),
          ride:require('../../assets/Flashcard Audio/ThemPark/ride.mp3'),
          splash1:require('../../assets/Flashcard Audio/ThemPark/splash.mp3'),
          swimsuit:require('../../assets/Flashcard Audio/ThemPark/swimsuit.mp3'),
          towel:require('../../assets/Flashcard Audio/ThemPark/towel.mp3'),
          tube:require('../../assets/Flashcard Audio/ThemPark/tube.mp3'),
          waterSlide:require('../../assets/Flashcard Audio/ThemPark/water slide.mp3'),
          wavePool:require('../../assets/Flashcard Audio/ThemPark/wave pool.mp3'),
          wet:require('../../assets/Flashcard Audio/ThemPark/wet.mp3'),
          //space
          fly3:require('../../assets/Flashcard Audio/space/fly.mp3'),
          rocket:require('../../assets/Flashcard Audio/space/rocket.mp3'),
          fuel:require('../../assets/Flashcard Audio/space/fuel.mp3'),
          blastOff:require('../../assets/Flashcard Audio/space/blast off.mp3'),
          fire:require('../../assets/Flashcard Audio/space/fire.mp3'),
          countdown:require('../../assets/Flashcard Audio/space/countdown.mp3'),
          helmet:require('../../assets/Flashcard Audio/space/helmet.mp3'),
          astronaut:require('../../assets/Flashcard Audio/space/astronaut.mp3'),
          scientist:require('../../assets/Flashcard Audio/space/scientist.mp3'),
          explore:require('../../assets/Flashcard Audio/space/explore.mp3'),
          spaceSuit:require('../../assets/Flashcard Audio/space/spacesuit.mp3'),
          radio:require('../../assets/Flashcard Audio/space/radio.mp3'),
          alien:require('../../assets/Flashcard Audio/space/alien.mp3'),
          asteroid:require('../../assets/Flashcard Audio/space/asteroid.mp3'),
          bright:require('../../assets/Flashcard Audio/space/bright.mp3'),
          dark:require('../../assets/Flashcard Audio/space/dark.mp3'),
          earth:require('../../assets/Flashcard Audio/space/Earth.mp3'),
          moon:require('../../assets/Flashcard Audio/space/moon.mp3'),
          planet:require('../../assets/Flashcard Audio/space/planet.mp3'),
          spaceStation:require('../../assets/Flashcard Audio/space/space station.mp3'),
          space:require('../../assets/Flashcard Audio/space/space.mp3'),
          star:require('../../assets/Flashcard Audio/space/stars.mp3'),
          sun:require('../../assets/Flashcard Audio/space/sun.mp3'),
          ufo:require('../../assets/Flashcard Audio/space/UFO.mp3'),
          //my body
          ear:require('../../assets/Flashcard Audio/myBody/ear.mp3'),
          eat2:require('../../assets/Flashcard Audio/myBody/eat.mp3'),
          eyes:require('../../assets/Flashcard Audio/myBody/eyes.mp3'),
          feet:require('../../assets/Flashcard Audio/myBody/feet.mp3'),
          hair:require('../../assets/Flashcard Audio/myBody/hair.mp3'),
          hand:require('../../assets/Flashcard Audio/myBody/hand.mp3'),
          leg:require('../../assets/Flashcard Audio/myBody/leg.mp3'),
          look:require('../../assets/Flashcard Audio/myBody/look.mp3'),
          mouth:require('../../assets/Flashcard Audio/myBody/mouth.mp3'),
          nose:require('../../assets/Flashcard Audio/myBody/nose.mp3'),
          smell:require('../../assets/Flashcard Audio/myBody/smell.mp3'),
          walk2:require('../../assets/Flashcard Audio/myBody/walk.mp3'),
          brush2:require('../../assets/Flashcard Audio/myBody/brush.mp3'),
          doctor:require('../../assets/Flashcard Audio/myBody/doctor.mp3'),
          fruit:require('../../assets/Flashcard Audio/myBody/fruit.mp3'),
          germs:require('../../assets/Flashcard Audio/myBody/germs.mp3'),
          run2:require('../../assets/Flashcard Audio/myBody/run.mp3'),
          sleep2:require('../../assets/Flashcard Audio/myBody/sleep.mp3'),
          soap:require('../../assets/Flashcard Audio/myBody/soap.mp3'),
          sweets:require('../../assets/Flashcard Audio/myBody/sweets.mp3'),
          teeth:require('../../assets/Flashcard Audio/myBody/teeth.mp3'),
          vegetables2:require('../../assets/Flashcard Audio/myBody/vegetables.mp3'),
          wash2:require('../../assets/Flashcard Audio/myBody/wash.mp3'),
          water2:require('../../assets/Flashcard Audio/myBody/water.mp3'),
          //Weekend
          sandcastle:require('../../assets/Flashcard Audio/weekend/sandcastle.mp3'),
          snorkel:require('../../assets/Flashcard Audio/weekend/snorkel.mp3'),
          goggles:require('../../assets/Flashcard Audio/weekend/goggles.mp3'),
          shovel2:require('../../assets/Flashcard Audio/weekend/shovel.mp3'),
          dig:require('../../assets/Flashcard Audio/weekend/Dig.mp3'),
          bucket2:require('../../assets/Flashcard Audio/weekend/bucket.mp3'),
          swim2:require('../../assets/Flashcard Audio/weekend/swim.mp3'),
          read2:require('../../assets/Flashcard Audio/weekend/read.mp3'),
          rod:require('../../assets/Flashcard Audio/weekend/rod.mp3'),
          boat:require('../../assets/Flashcard Audio/weekend/boat.mp3'),
          seashell:require('../../assets/Flashcard Audio/weekend/seashell.mp3'),
          paddle:require('../../assets/Flashcard Audio/weekend/paddle.mp3'),
          bike2:require('../../assets/Flashcard Audio/weekend/bike.mp3'),
          brush3:require('../../assets/Flashcard Audio/weekend/brush.mp3'),
          camera:require('../../assets/Flashcard Audio/weekend/camera.mp3'),
          climb2:require('../../assets/Flashcard Audio/weekend/climb.mp3'),
          jog:require('../../assets/Flashcard Audio/weekend/jog.mp3'),
          jungleGym:require('../../assets/Flashcard Audio/weekend/jungle gym.mp3'),
          kick2:require('../../assets/Flashcard Audio/weekend/kick.mp3'),
          kite2:require('../../assets/Flashcard Audio/weekend/kite.mp3'),
          paint:require('../../assets/Flashcard Audio/weekend/paint.mp3'),
          picnic2:require('../../assets/Flashcard Audio/weekend/picnic.mp3'),
          seesaw2:require('../../assets/Flashcard Audio/weekend/seesaw.mp3'),
          swing2:require('../../assets/Flashcard Audio/weekend/swing.mp3'),
          //wild animals
          bat:require('../../assets/Flashcard Audio/wild/bat.mp3'),
          lizard2:require('../../assets/Flashcard Audio/wild/lizard.mp3'),
          jaguar:require('../../assets/Flashcard Audio/wild/jaguar.mp3'),
          frog:require('../../assets/Flashcard Audio/wild/frog.mp3'),
          pounce:require('../../assets/Flashcard Audio/wild/pounce.mp3'),
          sloth:require('../../assets/Flashcard Audio/wild/sloth.mp3'),
          snake2:require('../../assets/Flashcard Audio/wild/snake.mp3'),
          crocodile2:require('../../assets/Flashcard Audio/wild/crocodile.mp3'),
          swing3:require('../../assets/Flashcard Audio/wild/swing.mp3'),
          slither:require('../../assets/Flashcard Audio/wild/slither.mp3'),
          parrot2:require('../../assets/Flashcard Audio/wild/parrot.mp3'),
          crawl2:require('../../assets/Flashcard Audio/wild/crawl.mp3'),
          chase:require('../../assets/Flashcard Audio/wild/chase.mp3'),
          dolphin:require('../../assets/Flashcard Audio/wild/dolphin.mp3'),
          hide:require('../../assets/Flashcard Audio/wild/hide.mp3'),
          jellyfish:require('../../assets/Flashcard Audio/wild/jellyfish.mp3'),
          octopus:require('../../assets/Flashcard Audio/wild/Octopus.mp3'),
          seahorse:require('../../assets/Flashcard Audio/wild/seahorse.mp3'),
          shark:require('../../assets/Flashcard Audio/wild/shark.mp3'),
          spray:require('../../assets/Flashcard Audio/wild/spray.mp3'),
          starfish:require('../../assets/Flashcard Audio/wild/starfish.mp3'),
          turtle2:require('../../assets/Flashcard Audio/wild/turtle.mp3'),
          whale:require('../../assets/Flashcard Audio/wild/whale.mp3'),
          wiggle2:require('../../assets/Flashcard Audio/wild/wiggle.mp3'),
          //MyCommunity
          bakery:require('../../assets/Flashcard Audio/community/bakery.mp3'),
          busStop:require('../../assets/Flashcard Audio/community/bus stop.mp3'),
          fireStation:require('../../assets/Flashcard Audio/community/fire station.mp3'),
          hospital:require('../../assets/Flashcard Audio/community/hospital.mp3'),
          library:require('../../assets/Flashcard Audio/community/library.mp3'),
          park:require('../../assets/Flashcard Audio/community/park.mp3'),
          policeStation:require('../../assets/Flashcard Audio/community/police station.mp3'),
          restaurant:require('../../assets/Flashcard Audio/community/restaurant.mp3'),
          school:require('../../assets/Flashcard Audio/community/school.mp3'),
          shop:require('../../assets/Flashcard Audio/community/shop.mp3'),
          visit:require('../../assets/Flashcard Audio/community/visit.mp3'),
          wait:require('../../assets/Flashcard Audio/community/wait.mp3'),
          ambulance2:require('../../assets/Flashcard Audio/community/ambulance.mp3'),
          chef2:require('../../assets/Flashcard Audio/community/chef.mp3'),
          cook:require('../../assets/Flashcard Audio/community/cook.mp3'),
          doctor2:require('../../assets/Flashcard Audio/community/doctor.mp3'),
          fireFighter:require('../../assets/Flashcard Audio/community/firefighter.mp3'),
          help:require('../../assets/Flashcard Audio/community/help.mp3'),
          letters:require('../../assets/Flashcard Audio/community/letters.mp3'),
          mailPerson:require('../../assets/Flashcard Audio/community/mailperson.mp3'),
          nurse:require('../../assets/Flashcard Audio/community/nurse.mp3'),
          policeman:require('../../assets/Flashcard Audio/community/policeman.mp3'),
          teacher2:require('../../assets/Flashcard Audio/community/teacher.mp3'),
          vet:require('../../assets/Flashcard Audio/community/vet.mp3'),
        },
        local:'',
        cardType:'default',
        bake2:true,
        book2:true,
        cookies:true,
        dance:true,
        listen2:true,
        oven:true,
        paintbrush:true,
        piano:true,
        picture:true,
        read3:true,
        TV:true,
        videoGame:true,
        bakery:true,
        busStop:true,
        fireStation:true,
        hospital:true,
        library:true,
        park:true,
        policeStation:true,
        restaurant:true,
        school:true,
        shop:true,
        visit:true,
        wait:true,
        ambulance2:true,
        chef2:true,
        cook:true,
        doctor2:true,
        fireFighter:true,
        help:true,
        letters:true,
        mailPerson:true,
        nurse:true,
        policeman:true,
        teacher2:true,
        vet:true,
        bat:true,
        lizard2:true,
        jaguar:true,
        frog:true,
        pounce:true,
        sloth:true,
        snake2:true,
        crocodile2:true,
        swing3:true,
        slither:true,
        parrot2:true,
        crawl2:true,
        chase:true,
        dolphin:true,
        hide:true,
        jellyfish:true,
        octopus:true,
        seahorse:true,
        shark:true,
        spray:true,
        starfish:true,
        turtle2:true,
        whale:true,
        wiggle2:true,
        sandcastle:true,
        snorkel:true,
        goggles:true,
        shovel2:true,
        dig:true,
        bucket2:true,
        swim2:true,
        read2:true,
        rod:true,
        boat:true,
        seashell:true,
        paddle:true,
        bike2:true,
        brush3:true,
        camera:true,
        climb2:true,
        jog:true,
        jungleGym:true,
        kick2:true,
        kite2:true,
        paint:true,
        picnic2:true,
        seesaw2:true,
        swing2:true,
        brush2:true,
        doctor:true,
        fruit:true,
        germs:true,
        run2:true,
        sleep2:true,
        soap:true,
        sweets:true,
        teeth:true,
        vegetables2:true,
        wash2:true,
        water2:true,
        ear:true,
        eat2:true,
        eyes:true,
        feet:true,
        hair:true,
        hand:true,
        leg:true,
        look:true,
        mouth:true,
        nose:true,
        smell:true,
        walk2:true,
        alien:true,
        asteroid:true,
        bright:true,
        dark:true,
        earth:true,
        moon:true,
        planet:true,
        spaceStation:true,
        space:true,
        star:true,
        sun:true,
        ufo:true,
        fly3:true,
        rocket:true,
        fuel:true,
        blastOff:true,
        fire:true,
        countdown:true,
        helmet:true,
        astronaut:true,
        scientist:true,
        explore:true,
        spaceSuit:true,
        radio:true,
        dry:true,
        float:true,
        lazy:true,
        lifeguard:true,
        ride:true,
        splash1:true,
        swimsuit:true,
        towel:true,
        tube:true,
        waterSlide:true,
        wavePool:true,
        wet:true,
        balloons1:true,
        bumper:true,
        carousel:true,
        cottonCandy:true,
        ferrisWheel:true,
        pool:true,
        popcorn:true,
        queue:true,
        rollerCoaster:true,
        scream1:true,
        swim1:true,
        ticket1:true,
        belt:true,
        boots:true,
        jacket:true,
        mittens:true,
        pajamas:true,
        scarf1:true,
        shirt:true,
        socks:true,
        sweater:true,
        trousers:true,
        wrap:true,
        zip:true,
        bag:true,
        dress:true,
        hat:true,
        sandals:true,
        shoes:true,
        shorts:true,
        skirt:true,
        sunglasses:true,
        tie:true,
        tShirt:true,
        watch1:true,
        wear:true,
        ant:true,
        caterpillar:true,
        munch:true,
        crawl:true,
        feelers:true,
        leaf:true,
        web:true,
        mantis:true,
        snail:true,
        spider:true,
        wiggle:true,
        worm:true,
        bee:true,
        butterfly2:true,
        buzz:true,
        dragonfly:true,
        firefly:true,
        flower:true,
        fly2:true,
        hive:true,
        ladybug:true,
        mosquito:true,
        sting:true,
        wings:true,
        fast:true,
        train:true,
        ticket:true,
        ship:true,
        airplane:true,
        airport:true,
        helicopter:true,
        fly1:true,
        land:true,
        station:true,
        slow:true,
        suitcase:true,
        bike:true,
        bus:true,
        car:true,
        drive:true,
        ferry:true,
        honk:true,
        motorbike:true,
        stop:true,
        trafficLights:true,
        tram:true,
        truck:true,
        walk:true,
        butterfly:true,
        flowers:true,
        fly:true,
        hike:true,
        iceCream1:true,
        kite:true,
        picnic:true,
        plant:true,
        seeds:true,
        sunny:true,
        sunscreen:true,
        swim:true,
        hotChocolate:true,
        iceSkating:true,
        icicles:true,
        leaves:true,
        rain:true,
        rake:true,
        shiver:true,
        ski:true,
        snow2:true,
        squirrel:true,
        umbrella:true,
        wind1:true,
        barn:true,
        bucket:true,
        chick:true,
        cow:true,
        crow:true,
        duck:true,
        egg:true,
        feed1:true,
        hay:true,
        hen:true,
        rooster:true,
        sheep:true,
        apple:true,
        farmer:true,
        fence:true,
        gallop:true,
        horse1:true,
        pick:true,
        pig:true,
        plants:true,
        plough:true,
        roll:true,
        tractor:true,
        tree:true,
        order:true,
        juice:true,
        napkin:true,
        noodles:true,
        pizza:true,
        iceCream:true,
        fork:true,
        knife:true,
        burger:true,
        plate:true,
        menu:true,
        waiter:true,
        bowl:true,
        chicken:true,
        chopsticks:true,
        cup:true,
        drink:true,
        eat:true,
        fish1:true,
        milk:true,
        rice:true,
        spoon:true,
        tea:true,
        vegetables:true,
        animals:true,
        coat:true,
        cold1:true,
        fall:true,
        fireplace:true,
        hibernate:true,
        scarf:true,
        skates:true,
        sled1:true,
        snowman:true,
        warm:true,
        bells:true,
        cracker:true,
        elf1:true,
        pull:true,
        reindeer:true,
        santaClaus:true,
        sleigh:true,
        snow1:true,
        stocking:true,
        gift:true,
        baby:true,
        brother:true,
        caring:true,
        father:true,
        grandma:true,
        grandpa:true,
        hug:true,
        mother:true,
        old:true,
        share:true,
        sister:true,
        young:true,
        balloons:true,
        blow1:true,
        cake:true,
        candles:true,
        card:true,
        friends:true,
        happy:true,
        partyHat:true,
        play:true,
        presents:true,
        cut:true,
        sing:true,
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
      this.local = localStorage.getItem('local');
      this.pic = this.$axios.defaults.baseURL2;
      this.unit = this.$route.query.unit;
      this.courseId = this.$route.query.courseId;
      this.levelsId = this.$route.query.levelsId;
      this.level = this.$route.query.level;
      this.style = this.$route.query.style;
      this.cources = this.$route.query.cources;
      this.part = this.$route.query.part;
      if (this.level === "WALKERS") {
        this.walkers = false;
      } else if (this.level === "RUNNERS") {
        this.walkers = true;
      }
      if (localStorage.getItem('gamemusic') === "false") {
        this.show = false;
      } else {
        this.show = true;
        const audio = document.getElementById('music');
        audio.pause();
      }

      if (window.history && window.history.pushState) {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.gomemu, false);
      }
      document.body.addEventListener('touchmove', this.bodyScroll, {passive: false});
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

      gomemu() {
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
    /*background-image: url("http://gamejava.monkeytree.com.hk/monkeytowerHK/image/img/phonicsbg.png");*/
    /*background-color: #204900;*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    position: absolute;
    display: flex;
  }

  .about {
    display: flex;
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: fixed;
    background-color: #44ccc2;
    z-index: 201;
  }

  .bake2Button img{
    width: 5%;
    left: 72%;
    top: 45%;
    position: absolute;
  }

  .book2Button img {
    width: 5%;
    left: 4%;
    top: 85%;
    position: absolute;
  }

  .cookiesButton img {
    width: 7%;
    left: 79%;
    top: 72%;
    position: absolute;
  }

  .danceButton img {
    width: 7%;
    left: 21%;
    top: 25%;
    position: absolute;
  }

  .listen2Button img {
    width: 7%;
    left: 30%;
    top: 16%;
    position: absolute;
  }

  .ovenButton img {
    width: 6%;
    left: 78%;
    top: 16%;
    position: absolute;
  }

  .paintbrushButton img {
    width: 9%;
    left: 53%;
    top: 82%;
    position: absolute;
  }

  .pianoButton img {
    width: 6%;
    left: 61%;
    top: 56%;
    position: absolute;
  }

  .pictureButton img {
    width: 7%;
    left: 32%;
    top: 82%;
    position: absolute;
  }

  .read3Button img {
    width: 6%;
    left: 27%;
    top: 67%;
    position: absolute;
  }

  .TVButton img {
    width: 5%;
    left: 7%;
    top: 11%;
    position: absolute;
  }

  .videoGameButton img {
    width: 9%;
    left: 4%;
    top: 47%;
    position: absolute;
  }

  .bake2 img {
    width: 19%;
    left: 74.5%;
    top: 18%;
    position: absolute;
  }

  .book2 img {
    width: 15%;
    left: -0.5%;
    top: 74%;
    position: absolute;
  }

  .cookies img {
    width: 28%;
    left: 72.5%;
    top: 46%;
    position: absolute;
  }

  .dance img {
    width: 13%;
    left: 23.5%;
    top: 26%;
    position: absolute;
  }

  .listen2 img {
    width: 14%;
    left: 40.5%;
    top: 14%;
    position: absolute;
    z-index: 1;
  }

  .oven img {
    width: 14%;
    left: 80.5%;
    top: 21%;
    position: absolute;
  }

  .paintbrush img {
    width: 15%;
    left: 46.5%;
    top: 57%;
    position: absolute;
  }

  .piano img {
    width: 21%;
    left: 47.5%;
    top: 4%;
    position: absolute;
  }

  .picture img {
    width: 11%;
    left: 29.5%;
    top: 51%;
    position: absolute;
  }

  .read3 img {
    width: 10%;
    left: 15.5%;
    top: 58%;
    position: absolute;
  }

  .TV img {
    width: 10%;
    left: 5.5%;
    top: 20%;
    position: absolute;
  }

  .videoGame img {
    width: 13.5%;
    height: 44%;
    left: 2.5%;
    top: 20%;
    position: absolute;
  }

  .ambulance2Button img {
    width: 8%;
    left: 22%;
    top: 68%;
    position: absolute;
  }

  .chef2Button img {
    width: 5%;
    left: 94%;
    top: 86%;
    position: absolute;
  }

  .cookButton img {
    width: 5%;
    left: 84%;
    top: 67%;
    position: absolute;
  }

  .doctor2Button img {
    width: 6%;
    left: 2%;
    top: 51%;
    position: absolute;
  }

  .fireFighterButton img {
    width: 8%;
    left: 69%;
    top: 22%;
    position: absolute;
  }

  .helpButton img {
    width: 4.5%;
    left: 46%;
    top: 31%;
    position: absolute;
  }

  .lettersButton img {
    width: 6%;
    left: 74%;
    top: 82%;
    position: absolute;
  }

  .mailPersonButton img {
    width: 9%;
    left: 67%;
    top: 71%;
    position: absolute;
  }

  .nurseButton img {
    width: 5%;
    left: 12%;
    top: 51%;
    position: absolute;
  }

  .policemanButton img {
    width: 8%;
    left: 27%;
    top: 5%;
    position: absolute;
  }

  .teacher2Button img {
    width: 7%;
    left: 6%;
    top: 28%;
    position: absolute;
  }

  .vetButton img {
    width: 4%;
    left: 42%;
    top: 46%;
    position: absolute;
  }

  .ambulance2 img {
    width: 8%;
    left: 22%;
    top: 56%;
    position: absolute;
  }

  .chef2 img {
    width: 13%;
    left: 85.5%;
    top: 49%;
    position: absolute;
  }

  .cook img {
    width: 19%;
    left: 81.5%;
    top: 49%;
    position: absolute;
  }

  .doctor2 img {
    width: 8%;
    left: 2%;
    top: 57%;
    position: absolute;
  }

  .fireFighter img {
    width: 28%;
    left: 69%;
    top: 1%;
    position: absolute;
  }

  .help img {
    width: 9%;
    left: 44%;
    top: 3%;
    position: absolute;
  }

  .letters img {
    width: 10%;
    left: 70%;
    top: 85%;
    position: absolute;
  }

  .mailPerson img {
    width: 13%;
    left: 62%;
    top: 50%;
    position: absolute;
  }

  .nurse img {
    width: 8%;
    left: 10%;
    top: 59%;
    position: absolute;
  }

  .policeman img {
    width: 15%;
    left: 30%;
    top: 4%;
    position: absolute;
  }

  .teacher2 img {
    width: 13%;
    left: 3%;
    top: 4%;
    position: absolute;
  }

  .vet img {
    width: 21%;
    left: 37%;
    top: 44%;
    position: absolute;
  }

  .bakery img {
    width: 30%;
    left: 27%;
    top: 50%;
    position: absolute;
    z-index: 1;
  }

  .busStop img {
    width: 40%;
    left: 64%;
    top: 51%;
    position: absolute;
  }

  .fireStation img {
    width: 22%;
    left: 46%;
    top: 34%;
    position: absolute;
    z-index: 1;
  }

  .hospital img {
    width: 55%;
    left: 51%;
    top: -23%;
    position: absolute;
  }

  .library img {
    width: 30%;
    left: 22%;
    top: 29%;
    position: absolute;
  }

  .park img {
    width: 80%;
    height: 42%;
    left: -11%;
    top: -2%;
    position: absolute;
  }

  .policeStation img {
    width: 37%;
    left: 63%;
    top: 29%;
    position: absolute;
    z-index: 1;
  }

  .restaurant img {
    width: 60%;
    left: -14%;
    top: 47%;
    position: absolute;
  }

  .school img {
    width: 41%;
    left: -6%;
    top: 20%;
    position: absolute;
  }

  .shop img {
    width: 20%;
    left: 51%;
    top: 52%;
    position: absolute;
    z-index: 1;
  }

  .visit img {
    width: 30%;
    left: 22%;
    top: 29%;
    position: absolute;
  }

  .wait img {
    width: 40%;
    left: 64%;
    top: 65%;
    position: absolute;
  }

  .bakeryButton img {
    width: 6%;
    left: 40%;
    top: 89%;
    position: absolute;
  }

  .busStopButton img {
    width: 7%;
    left: 85%;
    top: 68%;
    position: absolute;
  }

  .fireStationButton img {
    width: 8%;
    left: 51%;
    top: 32%;
    position: absolute;
  }

  .hospitalButton img {
    width: 7%;
    left: 61%;
    top: 7%;
    position: absolute;
  }

  .libraryButton img {
    width: 6%;
    left: 34%;
    top: 34%;
    position: absolute;
  }

  .parkButton img {
    width: 5%;
    left: 19%;
    top: 7%;
    position: absolute;
  }

  .policeStationButton img {
    width: 11%;
    left: 68%;
    top: 57%;
    position: absolute;
  }

  .restaurantButton img {
    width: 9%;
    left: 19%;
    top: 68%;
    position: absolute;
  }

  .schoolButton img {
    width: 7%;
    left: 11%;
    top: 57%;
    position: absolute;
  }

  .shopButton img {
    width: 5%;
    left: 58%;
    top: 90%;
    position: absolute;
  }

  .visitButton img {
    width: 5%;
    left: 29%;
    top: 54%;
    position: absolute;
  }

  .waitButton img {
    width: 5%;
    left: 87%;
    top: 86%;
    position: absolute;
  }

  .bat img {
    width: 10%;
    left: 2%;
    top: 2%;
    position: absolute;
  }

  .lizard2 img {
    width: 23%;
    left: -2%;
    top: 14%;
    position: absolute;
  }

  .jaguar img {
    width: 45%;
    left: 19%;
    top: 35%;
    position: absolute;
  }

  .frog img {
    width: 12%;
    left: 7%;
    top: 70%;
    position: absolute;
  }

  .pounce img {
    width: 45%;
    left: 19%;
    top: 35%;
    position: absolute;
  }

  .sloth img {
    width: 30%;
    left: 22%;
    top: -4%;
    position: absolute;
  }

  .snake2 img {
    width: 20%;
    left: 47%;
    top: 28%;
    position: absolute;
  }

  .crocodile2 img {
    width: 35%;
    left: 44%;
    top: 46%;
    position: absolute;
  }

  .swing3 img {
    width: 30%;
    left: 55%;
    top: 0%;
    position: absolute;
  }

  .slither img {
    width: 20%;
    left: 47%;
    top: 28%;
    position: absolute;
  }

  .parrot2 img {
    width: 18%;
    left: 81%;
    top: 3%;
    position: absolute;
  }

  .crawl2 img {
    width: 15%;
    left: 85%;
    top: 46%;
    position: absolute;
  }

  .lizard2Button img {
    width: 7%;
    left: 19%;
    top: 34%;
    position: absolute;
  }

  .batButton img {
    width: 7%;
    left: 10%;
    top: 6%;
    position: absolute;
  }

  .jaguarButton img {
    width: 7%;
    left: 13%;
    top: 52%;
    position: absolute;
  }

  .frogButton img {
    width: 7%;
    left: 13%;
    top: 87%;
    position: absolute;
  }

  .pounceButton img {
    width: 9%;
    left: 24%;
    top: 65%;
    position: absolute;
  }

  .slothButton img {
    width: 7%;
    left: 47%;
    top: 14%;
    position: absolute;
  }

  .snake2Button img {
    width: 7%;
    left: 51%;
    top: 30%;
    position: absolute;
  }

  .crocodile2Button img {
    width: 10%;
    left: 58%;
    top: 76%;
    position: absolute;
  }

  .swing3Button img {
    width: 7%;
    left: 74%;
    top: 6%;
    position: absolute;
  }

  .slitherButton img {
    width: 7%;
    left: 65%;
    top: 44%;
    position: absolute;
  }

  .parrot2Button img {
    width: 7%;
    left: 86%;
    top: 36%;
    position: absolute;
  }

  .crawl2Button img {
    width: 7%;
    left: 91%;
    top: 78%;
    position: absolute;
  }

  .chase img {
    width: 40%;
    left: 15%;
    top: 36%;
    position: absolute;
  }

  .dolphin img {
    width: 40%;
    left: 11%;
    top: -4%;
    position: absolute;
  }

  .hide img {
    width: 12%;
    left: 56%;
    top: 82%;
    position: absolute;
    z-index: 1;
  }

  .jellyfish img {
    width: 22%;
    left: 38%;
    top: 46%;
    position: absolute;
  }

  .octopus img {
    width: 22%;
    left: -1%;
    top: 31%;
    position: absolute;
  }

  .seahorse img {
    width: 12%;
    left: 14%;
    top: 64%;
    position: absolute;
  }

  .shark img {
    width: 40%;
    left: 15%;
    top: 36%;
    position: absolute;
  }

  .spray img {
    width: 45%;
    left: 48%;
    top: 1%;
    position: absolute;
  }

  .starfish img {
    width: 13%;
    left: 8%;
    top: 75%;
    position: absolute;
  }

  .turtle2 img {
    width: 35%;
    left: 57%;
    top: 56%;
    position: absolute;
  }

  .whale img {
    width: 45%;
    left: 48%;
    top: 1%;
    position: absolute;
  }

  .wiggle2 img {
    width: 22%;
    left: 38%;
    top: 46%;
    position: absolute;
  }

  .chaseButton img {
    width: 7%;
    left: 29%;
    top: 37%;
    position: absolute;
  }

  .dolphinButton img {
    width: 9%;
    left: 10%;
    top: 10%;
    position: absolute;
  }

  .hideButton img {
    width: 7%;
    left: 65%;
    top: 92%;
    position: absolute;
  }

  .jellyfishButton img {
    width: 9%;
    left: 34%;
    top: 67%;
    position: absolute;
  }

  .octopusButton img {
    width: 9%;
    left: 2%;
    top: 29%;
    position: absolute;
  }

  .seahorseButton img {
    width: 9%;
    left: 11%;
    top: 69%;
    position: absolute;
  }

  .sharkButton img {
    width: 7%;
    left: 39%;
    top: 37%;
    position: absolute;
  }

  .sprayButton img {
    width: 7%;
    left: 74%;
    top: 15%;
    position: absolute;
  }

  .starfishButton img {
    width: 9%;
    left: 14%;
    top: 91%;
    position: absolute;
  }

  .turtle2Button img {
    width: 7%;
    left: 80%;
    top: 77%;
    position: absolute;
  }

  .whaleButton img {
    width: 7%;
    left: 81%;
    top: 34%;
    position: absolute;
  }

  .wiggle2Button img {
    width: 7%;
    left: 39%;
    top: 88%;
    position: absolute;
  }

  .paddle img {
    width: 40%;
    left: 52%;
    top: 39%;
    position: absolute;
  }

  .seashell img {
    width: 5%;
    left: 85%;
    top: 33%;
    position: absolute;
  }

  .boat img {
    width: 40%;
    left: 52%;
    top: 39%;
    position: absolute;
  }

  .rod img {
    width: 15%;
    left: 43%;
    top: 20%;
    position: absolute;
  }

  .read2 img {
    width: 24%;
    left: 59%;
    top: 2%;
    position: absolute;
  }

  .swim2 img {
    width: 40%;
    left: 5%;
    top: 35%;
    position: absolute;
  }

  .bucket2 img {
    width: 12%;
    left: 30%;
    top: 23%;
    position: absolute;
  }

  .dig img {
    width: 15%;
    left: 35%;
    top: 3%;
    position: absolute;
  }

  .shovel2 img {
    width: 15%;
    left: 35%;
    top: 3%;
    position: absolute;
  }

  .goggles img {
    width: 40%;
    left: 5%;
    top: 65%;
    position: absolute;
  }

  .snorkel img {
    width: 40%;
    left: 5%;
    top: 65%;
    position: absolute;
  }

  .sandcastle img {
    width: 30%;
    left: 5%;
    top: 4%;
    position: absolute;
  }

  .sandcastleButton img {
    width: 8%;
    left: 6%;
    top: 26%;
    position: absolute;
  }

  .snorkelButton img {
    width: 8%;
    left: 5%;
    top: 67%;
    position: absolute;
  }

  .gogglesButton img {
    width: 9%;
    left: 7%;
    top: 93%;
    position: absolute;
  }

  .shovel2Button img {
    width: 7%;
    left: 38%;
    top: 9%;
    position: absolute;
  }

  .digButton img {
    width: 7%;
    left: 39%;
    top: 22%;
    position: absolute;
  }

  .bucket2Button img {
    width: 7%;
    left: 31%;
    top: 33%;
    position: absolute;
  }

  .swim2Button img {
    width: 7%;
    left: 35%;
    top: 57%;
    position: absolute;
  }

  .read2Button img {
    width: 7%;
    left: 59%;
    top: 12%;
    position: absolute;
  }

  .rodButton img {
    width: 7%;
    left: 51%;
    top: 31%;
    position: absolute;
  }

  .boatButton img {
    width: 8%;
    left: 57%;
    top: 54%;
    position: absolute;
  }

  .seashellButton img {
    width: 8%;
    left: 84%;
    top: 40%;
    position: absolute;
  }

  .paddleButton img {
    width: 8%;
    left: 77%;
    top: 78%;
    position: absolute;
  }

  .bike2 img {
    width: 26%;
    left: 5%;
    top: 27%;
    position: absolute;
  }

  .brush3 img {
    width: 25%;
    left: 67%;
    top: 34%;
    position: absolute;
  }

  .camera img {
    width: 14%;
    left: 41%;
    top: 62%;
    position: absolute;
    z-index: 1;
  }

  .climb2 img {
    width: 30%;
    left: 38%;
    top: 4%;
    position: absolute;
  }

  .jog img {
    width: 16%;
    left: 7%;
    top: 8%;
    position: absolute;
  }

  .jungleGym img {
    width: 30%;
    left: 38%;
    top: 4%;
    position: absolute;
  }

  .kick2 img {
    width: 29%;
    left: 68%;
    top: 2%;
    position: absolute;
  }

  .kite2Button img {
    width: 7%;
    left: 12%;
    top: 87%;
    position: absolute;
  }

  .paint img {
    width: 26%;
    left: 67%;
    top: 33%;
    position: absolute;
  }

  .picnic2 img {
    width: 50%;
    left: 8%;
    top: 31%;
    position: absolute;
  }

  .seesaw2 img {
    width: 18%;
    left: 68%;
    top: 21%;
    position: absolute;
  }

  .swing2Button img {
    width: 7%;
    left: 23%;
    top: 27%;
    position: absolute;
  }

  .bike2Button img {
    width: 7%;
    left: 7%;
    top: 55%;
    position: absolute;
  }

  .brush3Button img {
    width: 6%;
    left: 84%;
    top: 50%;
    position: absolute;
  }

  .cameraButton img {
    width: 7%;
    left: 44%;
    top: 76%;
    position: absolute;
  }

  .climb2Button img {
    width: 6%;
    left: 49%;
    top: 30%;
    position: absolute;
  }

  .jogButton img {
    width: 6%;
    left: 9%;
    top: 5%;
    position: absolute;
  }

  .jungleGymButton img {
    width: 10%;
    left: 47%;
    top: 4%;
    position: absolute;
  }

  .kick2Button img {
    width: 6%;
    left: 79%;
    top: 9%;
    position: absolute;
  }

  .kite2 img {
    width: 24%;
    left: 14%;
    top: 60%;
    position: absolute;
  }

  .paintButton img {
    width: 7%;
    left: 80%;
    top: 75%;
    position: absolute;
  }

  .picnic2Button img {
    width: 7%;
    left: 47%;
    top: 51%;
    position: absolute;
  }

  .seesaw2Button img {
    width: 7%;
    left: 82%;
    top: 31%;
    position: absolute;
  }

  .swing2 img {
    width: 17%;
    left: 18%;
    top: 5%;
    position: absolute;
  }

  .brush2Button img {
    width: 6%;
    left: 34%;
    top: 84%;
    position: absolute;
  }

  .doctorButton img {
    width: 7%;
    left: 72%;
    top: 10%;
    position: absolute;
  }

  .fruitButton img {
    width: 6%;
    left: 84%;
    top: 77%;
    position: absolute;
  }

  .germsButton img {
    width: 6%;
    left: 89%;
    top: 33%;
    position: absolute;
  }

  .run2Button img {
    width: 5%;
    left: 11%;
    top: 29%;
    position: absolute;
  }

  .sleep2Button img {
    width: 6%;
    left: 48%;
    top: 27%;
    position: absolute;
  }

  .soapButton img {
    width: 6%;
    left: 14%;
    top: 83%;
    position: absolute;
  }

  .sweetsButton img {
    width: 7%;
    left: 51%;
    top: 90%;
    position: absolute;
  }

  .teethButton img{
    width: 6%;
    left: 20%;
    top: 75%;
    position: absolute;
  }

  .vegetables2Button img {
    width: 10%;
    left: 56%;
    top: 65%;
    position: absolute;
  }

  .wash2Button img {
    width: 6%;
    left: 3%;
    top: 83%;
    position: absolute;
  }

  .water2Button img {
    width: 6%;
    left: 47%;
    top: 51%;
    position: absolute;
  }

  .brush2 img {
    width: 27%;
    left: 18%;
    top: 46%;
    position: absolute;
  }

  .doctor img {
    width: 29%;
    left: 64%;
    top: 9%;
    position: absolute;
  }

  .fruit img {
    width: 32%;
    left: 67%;
    top: 47%;
    position: absolute;
  }

  .germs img {
    width: 23%;
    left: 77%;
    top: 3%;
    position: absolute;
  }

  .run2 img {
    width: 32%;
    left: 10%;
    top: 15%;
    position: absolute;
  }

  .sleep2 img {
    width: 35%;
    left: 31%;
    top: 1%;
    position: absolute;
  }

  .soap img {
    width: 8%;
    left: 13%;
    top: 85%;
    position: absolute;
    z-index: 1;
  }

  .sweets img {
    width: 26%;
    left: 34%;
    top: 69%;
    position: absolute;
    z-index: 2;
  }

  .vegetables2 img {
    width: 34%;
    left: 44%;
    top: 44%;
    position: absolute;
    z-index: 1;
  }

  .wash2 img {
    width: 25%;
    left: 0%;
    top: 37%;
    position: absolute;
  }

  .water2 img {
    width: 21%;
    left: 40%;
    top: 41%;
    position: absolute;
  }

  .teeth img {
    width: 27%;
    left: 18%;
    top: 46%;
    position: absolute;
  }

  .smellButton img {
    width: 6%;
    left: 6%;
    top: 9%;
    position: absolute;
  }

  .lookButton img {
    width: 6%;
    left: 22%;
    top: 31%;
    position: absolute;
  }

  .handButton img {
    width: 6%;
    left: 8%;
    top: 53%;
    position: absolute;
  }

  .legButton img {
    width: 5%;
    left: 10%;
    top: 71%;
    position: absolute;
  }

  .eyesButton img {
    width: 6%;
    left: 50%;
    top: 19%;
    position: absolute;
  }

  .noseButton img {
    width: 6%;
    left: 47%;
    top: 42%;
    position: absolute;
  }

  .earButton img {
    width: 5%;
    left: 50%;
    top: 66%;
    position: absolute;
  }

  .mouthButton img {
    width: 7%;
    left: 46%;
    top: 88%;
    position: absolute;
  }

  .hairButton img {
    width: 6%;
    left: 66%;
    top: 15%;
    position: absolute;
  }

  .eat2Button img {
    width: 6%;
    left: 87%;
    top: 25%;
    position: absolute;
  }

  .feetButton img {
    width: 6%;
    left: 90%;
    top: 70%;
    position: absolute;
  }

  .walk2Button img {
    width: 6%;
    left: 73%;
    top: 71%;
    position: absolute;
  }

  .smell img {
    width: 29%;
    left: 3%;
    top: 2%;
    position: absolute;
  }

  .hand img {
    width: 29%;
    left: 3%;
    top: 2%;
    position: absolute;
  }

  .leg img {
    width: 29%;
    left: 3%;
    top: 2%;
    position: absolute;
  }

  .look img {
    width: 29%;
    left: 3%;
    top: 2%;
    position: absolute;
  }

  .eyes img {
    width: 15%;
    left: 45%;
    top: 2%;
    position: absolute;
  }

  .nose img {
    width: 15%;
    left: 42%;
    top: 24%;
    position: absolute;
  }

  .ear img {
    width: 15%;
    left: 45%;
    top: 47%;
    position: absolute;
  }

  .mouth img {
    width: 15%;
    left: 42%;
    top: 70%;
    position: absolute;
  }

  .hair img {
    width: 35%;
    left: 63%;
    top: 6%;
    position: absolute;
  }

  .walk2 img {
    width: 35%;
    left: 63%;
    top: 6%;
    position: absolute;
  }

  .eat2 img {
    width: 35%;
    left: 63%;
    top: 6%;
    position: absolute;
  }

  .feet img {
    width: 14%;
    left: 86%;
    top: 52%;
    position: absolute;
  }

  .darkButton img {
    width: 6%;
    left: 8%;
    top: 11%;
    position: absolute;
  }

  .planetButton img {
    width: 7%;
    left: 15%;
    top: 40%;
    position: absolute;
  }

  .sunButton img {
    width: 6%;
    left: 21%;
    top: 64%;
    position: absolute;
  }

  .brightButton img {
    width: 7%;
    left: 29%;
    top: 57%;
    position: absolute;
  }

  .spaceStationButton img {
    width: 10%;
    left: 34%;
    top: 22%;
    position: absolute;
  }

  .asteroidButton img {
    width: 7%;
    left: 44%;
    top: 85%;
    position: absolute;
  }

  .earthButton img {
    width: 6%;
    left: 55%;
    top: 43%;
    position: absolute;
  }

  .moonButton img {
    width: 6%;
    left: 60%;
    top: 27%;
    position: absolute;
  }

  .spaceButton img {
    width: 7%;
    left: 69%;
    top: 7%;
    position: absolute;
  }

  .alienButton img {
    width: 6%;
    left: 76%;
    top: 65%;
    position: absolute;
  }

  .ufoButton img {
    width: 6%;
    left: 89%;
    top: 85%;
    position: absolute;
  }

  .starButton img {
    width: 6%;
    left: 81%;
    top: 49%;
    position: absolute;
  }

  .alien img {
    width: 25%;
    left: 68%;
    top: 64%;
    position: absolute;
  }

  .asteroid img {
    width: 17%;
    left: 45%;
    top: 63%;
    position: absolute;
  }

  .bright img {
    width: 50%;
    left: -2%;
    top: 33%;
    position: absolute;
  }

  .dark img {
    width: 25%;
    left: 0%;
    top: 0%;
    position: absolute;
  }

  .earth img {
    width: 22%;
    left: 39%;
    top: 31%;
    position: absolute;
    z-index: 1;
  }

  .moon img {
    width: 5%;
    left: 54%;
    top: 24%;
    position: absolute;
    z-index: 1;
  }

  .planet img {
    width: 55%;
    left: -2%;
    top: 15%;
    position: absolute;
  }

  .planet2 img {
    width: 8%;
    left: 14%;
    top: 29%;
    position: absolute;
  }

  .spaceStation img {
    width: 21%;
    left: 26%;
    top: 23%;
    position: absolute;
  }

  .space img {
    width: 55.5%;
    left: 48%;
    top: -3%;
    transform: rotate(1deg);
    position: absolute;
  }

  .star img {
    width: 12%;
    left: 72%;
    top: 43%;
    position: absolute;
  }

  .sun img {
    width: 40%;
    left: -1%;
    top: 47%;
    position: absolute;
  }

  .ufo img {
    width: 25%;
    left: 68%;
    top: 64%;
    position: absolute;
  }

  .exploreButton img {
    width: 7%;
    left: 84%;
    top: 23%;
    position: absolute;
  }

  .fuelButton img {
    width: 5%;
    left: 8%;
    top: 83%;
    position: absolute;
  }

  .astronautButton img {
    width: 8%;
    left: 60%;
    top: 60%;
    position: absolute;
  }

  .blastOffButton img {
    width: 8%;
    left: 20%;
    top: 78%;
    position: absolute;
  }

  .countdownButton img {
    width: 8%;
    left: 49%;
    top: 9%;
    position: absolute;
  }

  .fireButton img {
    width: 5%;
    left: 30%;
    top: 62%;
    position: absolute;
  }

  .fly3Button img {
    width: 4%;
    left: 18%;
    top: 2%;
    position: absolute;
  }

  .helmetButton img {
    width: 7%;
    left: 59%;
    top: 25%;
    position: absolute;
  }

  .rocketButton img {
    width: 7%;
    left: 22%;
    top: 16%;
    position: absolute;
  }

  .spaceSuitButton img {
    width: 8%;
    left: 82%;
    top: 61%;
    position: absolute;
  }

  .radioButton img {
    width: 6%;
    left: 79%;
    top: 90%;
    position: absolute;
  }

  .scientistButton img {
    width: 8%;
    left: 50%;
    top: 91%;
    position: absolute;
  }

  .spaceStill img {
    width: 37%;
    height: 55%;
    left: 60%;
    top: 45%;
    position: absolute;
  }

  .astronaut img {
    width: 23%;
    left: 59%;
    top: 24%;
    position: absolute;
  }

  .blastOff img {
    width: 38%;
    left: -1%;
    top: -11%;
    position: absolute;
  }

  .countdown img {
    width: 12%;
    left: 35%;
    top: 9%;
    position: absolute;
  }

  .explore img {
    width: 13%;
    left: 84%;
    top: 24%;
    position: absolute;
  }

  .fire img {
    width: 29%;
    left: 5%;
    top: 3%;
    position: absolute;
  }

  .fly3 img {
    width: 12%;
    left: 6%;
    top: 0%;
    position: absolute;
  }

  .fuel img {
    width: 35%;
    left: -2%;
    top: 5%;
    position: absolute;
  }

  .helmet img {
    width: 23%;
    left: 59%;
    top: 24%;
    position: absolute;
  }

  .radio img {
    width: 17%;
    left: 79%;
    top: 72%;
    position: absolute;
    z-index: 1;
  }

  .rocket img {
    width: 29%;
    left: 5%;
    top: 3%;
    position: absolute;
  }

  .scientist img {
    width: 15%;
    left: 44%;
    top: 50%;
    position: absolute;
  }

  .spaceSuit img {
    width: 7%;
    left: 87%;
    top: 44%;
    position: absolute;
    z-index: 1;
  }

  .lifeguardButton img {
    width: 7%;
    left: 19%;
    top: 10%;
    position: absolute;
  }

  .lazyButton img {
    width: 7%;
    left: 7%;
    top: 26%;
    position: absolute;
  }

  .tubeButton img {
    width: 5%;
    left: 12%;
    top: 58%;
    position: absolute;
  }

  .floatButton img {
    width: 5%;
    left: 14%;
    top: 76%;
    position: absolute;
  }

  .dryButton img {
    width: 5%;
    left: 25%;
    top: 56%;
    position: absolute;
  }

  .towelButton img {
    width: 5%;
    left: 30%;
    top: 32%;
    position: absolute;
  }

  .swimsuitButton img {
    width: 9%;
    left: 34%;
    top: 75%;
    position: absolute;
  }

  .wetButton img {
    width: 5%;
    left: 48%;
    top: 53%;
    position: absolute;
  }

  .wavePoolButton img {
    width: 9%;
    left: 65%;
    top: 18%;
    position: absolute;
  }

  .waterSlideButton img {
    width: 9%;
    left: 78%;
    top: 45%;
    position: absolute;
  }

  .splash1Button img {
    width: 7%;
    left: 60%;
    top: 80%;
    position: absolute;
  }

  .rideButton img {
    width: 5%;
    left: 94%;
    top: 63%;
    position: absolute;
  }

  .dry img {
    width: 8%;
    left: 18%;
    top: 35%;
    position: absolute;
  }

  .float img {
    width: 18%;
    left: 5%;
    top: 74%;
    position: absolute;
  }

  .lazy img {
    width: 9%;
    left: 3%;
    top: 29%;
    position: absolute;
  }

  .lifeguard img {
    width: 11%;
    left: 24%;
    top: 6%;
    position: absolute;
    z-index: 1;
  }

  .ride img {
    width: 75%;
    height: 105%;
    left: 31%;
    top: -2%;
    position: absolute;
  }

  .splash1 img {
    width: 73%;
    height: 103%;
    left: 33%;
    top: 1%;
    position: absolute;
  }

  .swimsuit img {
    width: 10%;
    left: 25%;
    top: 61%;
    position: absolute;
  }

  .towel img {
    width: 11%;
    left: 26%;
    top: 35%;
    position: absolute;
    z-index: 1;
  }

  .tube img {
    width: 13%;
    left: 3%;
    top: 54%;
    position: absolute;
  }

  .waterSlide img {
    width: 75%;
    height: 105%;
    left: 32%;
    top: -1%;
    position: absolute;
  }

  .wavePool img {
    width: 55%;
    height: 48%;
    left: 28%;
    top: 9%;
    transform: rotate(-2deg);
    position: absolute;
  }

  .wet img {
    width: 10%;
    left: 38%;
    top: 30%;
    position: absolute;
    z-index: 1;
  }

  .scream1Button img {
    width: 7%;
    left: 6%;
    top: 20%;
    position: absolute;
  }

  .rollerCoasterButton img {
    width: 11%;
    left: 6%;
    top: 38%;
    position: absolute;
  }

  .ticket1Button img {
    width: 6%;
    left: 13%;
    top: 56%;
    position: absolute;
  }

  .queueButton img {
    width: 6%;
    left: 14%;
    top: 91%;
    position: absolute;
  }

  .swim1Button img {
    width: 5%;
    left: 38%;
    top: 42%;
    position: absolute;
  }

  .cottonCandyButton img {
    width: 9%;
    left: 45%;
    top: 81%;
    position: absolute;
  }

  .carouselButton img {
    width: 8%;
    left: 60%;
    top: 7%;
    position: absolute;
  }

  .poolButton img {
    width: 5%;
    left: 54%;
    top: 40%;
    position: absolute;
  }

  .balloons1Button img {
    width: 7%;
    left: 68%;
    top: 80%;
    position: absolute;
  }

  .popcornButton img {
    width: 7%;
    left: 58%;
    top: 91%;
    position: absolute;
  }

  .ferrisWheelButton img {
    width: 9%;
    left: 78%;
    top: 19%;
    position: absolute;
  }

  .bumperButton img {
    width: 11%;
    left: 83%;
    top: 63%;
    position: absolute;
  }

  .still1 img {
    width: 16%;
    left: 78%;
    top: 73%;
    position: absolute;
  }

  .still2 img {
    width: 20%;
    left: 52%;
    top: 62%;
    position: absolute;
  }

  .still3 img {
    width: 22%;
    left: 0%;
    top: 46%;
    position: absolute;
  }

  .still4 img {
    width: 6%;
    left: 58%;
    top: 83%;
    position: absolute;
    z-index: 1;
  }

  .balloons1 img {
    width: 12%;
    left: 65%;
    top: 52%;
    position: absolute;
    z-index: 1;
  }

  .bumper img {
    width: 33%;
    left: 69%;
    top: 29%;
    position: absolute;
  }

  .carousel img {
    width: 20%;
    left: 54%;
    top: 7%;
    position: absolute;
  }

  .cottonCandy img {
    width: 13%;
    left: 44%;
    top: 64%;
    position: absolute;
    z-index: 1;
  }

  .ferrisWheel img {
    width: 25%;
    left: 77%;
    top: -6%;
    position: absolute;
  }

  .popcorn img {
    width: 12%;
    left: 54.5%;
    top: 73%;
    position: absolute;
    z-index: 1;
  }

  .rollerCoaster img {
    width: 50%;
    left: 0%;
    top: -5%;
    position: absolute;
  }

  .scream1 img {
    width: 50%;
    left: 0%;
    top: 0%;
    position: absolute;
    z-index: 1;
  }

  .swim1 img {
    width: 40%;
    left: 26%;
    top: 38%;
    position: absolute;
  }

  .pool img {
    width: 40%;
    left: 26%;
    top: 38%;
    position: absolute;
  }

  .queue img {
    width: 30%;
    left: -2%;
    top: 68%;
    position: absolute;
    z-index: 1;
  }

  .ticket1 img {
    width: 17%;
    left: 22%;
    top: 47%;
    position: absolute;
  }

  .belt img {
    width: 13%;
    left: 40%;
    top: 80%;
    position: absolute;
  }

  .beltButton img {
    width: 5%;
    left: 43%;
    top: 77%;
    position: absolute;
  }

  .bootsButton img {
    width: 6%;
    left: 7%;
    top: 69%;
    position: absolute;
  }

  .jacketButton img {
    width: 7%;
    left: 17%;
    top: 17%;
    position: absolute;
  }

  .mittensButton img {
    width: 7%;
    left: 62%;
    top: 91%;
    position: absolute;
  }

  .pajamasButton img {
    width: 9%;
    left: 22%;
    top: 64%;
    position: absolute;
  }

  .scarf1Button img {
    width: 6%;
    left: 57%;
    top: 62%;
    position: absolute;
  }

  .shirtButton img {
    width: 5%;
    left: 89%;
    top: 28%;
    position: absolute;
  }

  .socksButton img {
    width: 6%;
    left: 28%;
    top: 88%;
    position: absolute;
  }

  .sweaterButton img {
    width: 8%;
    left: 74%;
    top: 5%;
    position: absolute;
  }

  .trousersButton img {
    width: 8%;
    left: 58%;
    top: 38%;
    position: absolute;
  }

  .wrapButton img {
    width: 6%;
    left: 82%;
    top: 64%;
    position: absolute;
  }

  .zipButton img {
    width: 4%;
    left: 36%;
    top: 36%;
    position: absolute;
  }


  .belt img {
    width: 13%;
    left: 40%;
    top: 80%;
    position: absolute;
  }

  .boots img {
    width: 15%;
    left: 1%;
    top: 65%;
    position: absolute;
  }

  .jacket img {
    width: 21%;
    left: 0%;
    top: 7%;
    position: absolute;
  }

  .mittens img {
    width: 12%;
    left: 53%;
    top: 72%;
    position: absolute;
  }

  .pajamas img {
    width: 32%;
    left: 13%;
    height: 26%;
    top: 43%;
    position: absolute;
  }

  .scarf1 img {
    width: 16%;
    left: 51%;
    top: 65%;
    position: absolute;
  }

  .shirt img {
    width: 19%;
    left: 72%;
    top: 6%;
    position: absolute;
    z-index: 3;
  }

  .socks img {
    width: 18%;
    left: 12%;
    top: 73%;
    position: absolute;
  }

  .sweater img {
    width: 16%;
    left: 68%;
    top: 6%;
    position: absolute;
    z-index: 2;
  }

  .trousers img {
    width: 14%;
    left: 63%;
    top: 7%;
    position: absolute;
  }

  .wrap img {
    width: 18%;
    left: 66%;
    top: 34%;
    position: absolute;
  }

  .zip img {
    width: 17%;
    left: 34%;
    top: 17%;
    position: absolute;
  }

  .tShirtButton img {
    width: 6%;
    left: 13%;
    top: 27%;
    position: absolute;
  }

  .bagButton img {
    width: 5%;
    left: 16%;
    top: 74%;
    position: absolute;
  }

  .watch1Button img {
    width: 6%;
    left: 27%;
    top: 90%;
    position: absolute;
  }

  .dressButton img {
    width: 6%;
    left: 40%;
    top: 49%;
    position: absolute;
  }

  .shoesButton img {
    width: 6%;
    left: 38%;
    top: 58%;
    position: absolute;
  }

  .skirtButton img {
    width: 5%;
    left: 54%;
    top: 34%;
    position: absolute;
  }

  .sandalsButton img {
    width: 7%;
    left: 51%;
    top: 58%;
    position: absolute;
  }

  .sunglassesButton img {
    width: 9%;
    left: 50%;
    top: 80%;
    position: absolute;
  }

  .wearButton img {
    width: 6%;
    left: 73%;
    top: 27%;
    position: absolute;
  }

  .tieButton img {
    width: 5%;
    left: 78%;
    top: 92%;
    position: absolute;
  }

  .hatButton img {
    width: 5%;
    left: 89%;
    top: 35%;
    position: absolute;
  }

  .shortsButton img {
    width: 6%;
    left: 89%;
    top: 70%;
    position: absolute;
  }


  .bag img {
    width: 30%;
    left: 11%;
    top: 49%;
    position: absolute;
  }

  .dress img {
    width: 15%;
    left: 33%;
    top: 9%;
    position: absolute;
  }

  .hat img {
    width: 16%;
    left: 83%;
    top: 35%;
    position: absolute;
  }

  .sandals img {
    width: 14%;
    left: 48%;
    top: 57%;
    position: absolute;
  }

  .shoes img {
    width: 12%;
    left: 33%;
    top: 61%;
    position: absolute;
  }

  .shorts img {
    width: 14%;
    left: 85%;
    top: 49%;
    position: absolute;
  }

  .skirt img {
    width: 14%;
    left: 49%;
    top: 8%;
    position: absolute;
  }

  .sunglasses img {
    width: 14%;
    left: 39%;
    top: 70%;
    position: absolute;
  }

  .tie img {
    width: 19%;
    left: 67%;
    top: 55%;
    position: absolute;
  }

  .tShirt img {
    width: 25%;
    left: 13%;
    top: -1%;
    position: absolute;
  }

  .watch1 img {
    width: 24%;
    left: 24%;
    top: 75%;
    position: absolute;
  }

  .wear img {
    width: 15%;
    left: 60%;
    top: 12%;
    position: absolute;
  }

  .bee img {
    width: 16%;
    left: 66%;
    top: 55%;
    position: absolute;
    z-index: 1;
  }

  .butterfly2 img {
    width: 18%;
    left: 71%;
    top: 4%;
    position: absolute;
  }

  .buzz img {
    width: 18%;
    left: 25%;
    top: 38%;
    position: absolute;
  }

  .dragonfly img {
    width: 20%;
    left: 1%;
    top: 47%;
    position: absolute;
  }

  .firefly img {
    width: 13%;
    left: 24%;
    top: 48%;
    position: absolute;
  }

  .flower img {
    width: 60%;
    left: 40%;
    top: 48%;
    position: absolute;
  }

  .fly2 img {
    width: 13%;
    left: 33%;
    top: 66%;
    position: absolute;
  }

  .hive img {
    width: 13%;
    left: 39%;
    top: 8%;
    position: absolute;
  }

  .ladybug img {
    width: 20%;
    left: 2%;
    top: 62%;
    position: absolute;
  }

  .mosquito img {
    width: 10%;
    left: 57%;
    top: 31%;
    position: absolute;
  }

  .sting img {
    width: 27%;
    left: -1%;
    top: 6%;
    position: absolute;
  }

  .beeButton img {
    width: 6%;
    left: 79%;
    top: 73%;
    position: absolute;
  }

  .butterfly2Button img {
    width: 8%;
    left: 86%;
    top: 27%;
    position: absolute;
  }

  .buzzButton img {
    width: 5%;
    left: 33%;
    top: 38%;
    position: absolute;
  }

  .dragonflyButton img {
    width: 8%;
    left: 3%;
    top: 46%;
    position: absolute;
  }

  .fireflyButton img {
    width: 6%;
    left: 22%;
    top: 60%;
    position: absolute;
  }

  .flowerButton img {
    width: 7%;
    left: 59%;
    top: 64%;
    position: absolute;
  }

  .fly2Button img {
    width: 5%;
    left: 68%;
    top: 10%;
    position: absolute;
  }

  .hiveButton img {
    width: 5%;
    left: 35%;
    top: 18%;
    position: absolute;
  }

  .ladybugButton img {
    width: 9%;
    left: 21%;
    top: 87%;
    position: absolute;
  }

  .mosquitoButton img {
    width: 9%;
    left: 56%;
    top: 27%;
    position: absolute;
  }

  .stingButton img {
    width: 7%;
    left: 12%;
    top: 26%;
    position: absolute;
  }

  .wingsButton img {
    width: 7%;
    left: 2%;
    top: 65%;
    position: absolute;
  }

  .ant img {
    width: 13%;
    left: 33%;
    top: 66%;
    position: absolute;
  }

  .caterpillar img {
    width: 26%;
    left: 66%;
    top: 19%;
    position: absolute;
  }

  .crawl img {
    width: 40%;
    left: 0%;
    top: -3%;
    position: absolute;
  }

  .feelers img {
    width: 10%;
    left: 22%;
    top: 73%;
    position: absolute;
  }

  .leaf img {
    width: 30%;
    left: 32%;
    top: 22%;
    position: absolute;
  }

  .mantis img {
    width: 15%;
    left: 40%;
    top: 47%;
    position: absolute;
  }

  .snail img {
    width: 17%;
    left: 59%;
    top: 57%;
    position: absolute;
  }

  .spider img {
    width: 40%;
    left: 0%;
    top: -3%;
    position: absolute;
    z-index: 1;
  }

  .web img {
    width: 40%;
    left: 0%;
    top: -3%;
    position: absolute;
  }

  .wiggle img {
    width: 15%;
    left: 81%;
    top: 70%;
    position: absolute;
  }

  .webButton img {
    width: 6%;
    left: 5%;
    top: 30%;
    position: absolute;
  }

  .spiderButton img {
    width: 7%;
    left: 10%;
    top: 13%;
    position: absolute;
  }

  .feelersButton img {
    width: 7%;
    left: 23%;
    top: 69%;
    position: absolute;
  }

  .crawlButton img {
    width: 7%;
    left: 37%;
    top: 21%;
    position: absolute;
  }

  .leafButton img {
    width: 6%;
    left: 44%;
    top: 38%;
    position: absolute;
  }

  .mantisButton img {
    width: 6%;
    left: 49%;
    top: 55%;
    position: absolute;
  }

  .antButton img {
    width: 5%;
    left: 42%;
    top: 81%;
    position: absolute;
  }

  .munchButton img {
    width: 7%;
    left: 60%;
    top: 28%;
    position: absolute;
  }

  .snailButton img {
    width: 6%;
    left: 66%;
    top: 56%;
    position: absolute;
  }

  .caterpillarButton img {
    width: 8%;
    left: 79%;
    top: 17%;
    position: absolute;
  }

  .wormButton img {
    width: 6%;
    left: 83%;
    top: 71%;
    position: absolute;
  }

  .wiggleButton img {
    width: 6%;
    left: 88%;
    top: 88%;
    position: absolute;
  }

  .stationButton img {
    width: 6%;
    left: 5%;
    top: 30%;
    position: absolute;
  }
  .bus img {
    width: 47%;
    left: 10%;
    top: 15%;
    position: absolute;
  }

  .airportButton img {
    width: 6%;
    left: 15%;
    top: 55%;
    position: absolute;
  }

  .airplaneButton img {
    width: 7%;
    left: 20%;
    top: 90%;
    position: absolute;
  }

  .fastButton img {
    width: 5%;
    left: 26%;
    top: 18%;
    position: absolute;
  }

  .trainButton img {
    width: 5%;
    left: 26%;
    top: 25%;
    position: absolute;
  }

  .fly1Button img {
    width: 3.5%;
    left: 49%;
    top: 31%;
    position: absolute;
  }

  .helicopterButton img {
    width: 8%;
    left: 49%;
    top: 37%;
    position: absolute;
  }

  .ticketButton img {
    width: 6%;
    left: 63%;
    top: 71%;
    position: absolute;
  }

  .landButton img {
    width: 5%;
    left: 86%;
    top: 66%;
    position: absolute;
  }

  .suitcaseButton img {
    width: 6%;
    left: 86%;
    top: 71%;
    position: absolute;
  }

  .slowButton img {
    width: 5%;
    left: 78%;
    top: 18%;
    position: absolute;
  }

  .shipButton img {
    width: 5%;
    left: 78%;
    top: 24%;
    position: absolute;
  }

  .airplane img {
    width: 22%;
    left: 7%;
    top: 61%;
    transform: rotate(5deg);
    position: absolute;
    z-index: 2;
  }

  .airport img {
    width: 78%;
    left: 1%;
    height: 70%;
    top: 6%;
    position: absolute;
    z-index: 1;
  }

  .station img {
    width: 100%;
    left: 0%;
    top: -4%;
    position: absolute;
  }

  .stationB {
    width: 80%;
    height: 25%;
    left: -2%;
    top: 1%;
    transform: rotate(-9deg);
    z-index: 1;
    position: absolute;
  }

  .helicopter img {
    width: 25%;
    left: 50%;
    top: 21%;
    position: absolute;
    z-index: 1;
  }

  .land img {
    width: 100%;
    left: 0%;
    top: 30%;
    -webkit-transform: rotate(1.5deg);
    transform: rotate(0.5deg);
    position: absolute;
  }

  .slow img {
    width: 16%;
    left: 80%;
    top: 14%;
    position: absolute;
  }

  .suitcase img {
    width: 27%;
    left: 67%;
    top: 48%;
    position: absolute;
    z-index: 1;
  }

  .stopButton img {
    width: 5%;
    left: 3%;
    top: 37%;
    position: absolute;
  }

  .trafficLightsButton img {
    width: 8%;
    left: 4%;
    top: 82%;
    position: absolute;
  }

  .carButton img {
    width: 4.2%;
    left: 29%;
    top: 81%;
    position: absolute;
  }

  .bikeButton img {
    width: 5%;
    left: 51%;
    top: 88%;
    position: absolute;
  }

  .truckButton img {
    width: 6%;
    left: 55%;
    top: 43%;
    position: absolute;
  }

  .busButton img {
    width: 5%;
    left: 44%;
    top: 32%;
    position: absolute;
  }

  .ferryButton img {
    width: 5%;
    left: 28%;
    top: 8%;
    position: absolute;
  }

  .honkButton img {
    width: 5%;
    left: 67%;
    top: 49%;
    position: absolute;
  }

  .motorbikeButton img {
    width: 7%;
    left: 69%;
    top: 78%;
    position: absolute;
  }

  .walkButton img {
    width: 5%;
    left: 75%;
    top: 90%;
    position: absolute;
  }

  .driveButton img {
    width: 5%;
    left: 87%;
    top: 43%;
    position: absolute;
  }

  .tramButton img {
    width: 5%;
    left: 84%;
    top: 9%;
    position: absolute;
  }

  .bike img {
    width: 22%;
    left: 43%;
    top: 57%;
    position: absolute;
    z-index: 3;
  }

  .car img {
    width: 30%;
    left: 11%;
    top: 54%;
    position: absolute;
    z-index: 3;
  }

  .trafficLights img {
    width: 12%;
    left: 2%;
    top: 42%;
    position: absolute;
  }

  .ferry img {
    width: 23%;
    left: 6%;
    top: 6%;
    position: absolute;
    z-index: 2;
  }

  .honk img{
    width: 24%;
    left: 74%;
    top: 40%;
    position: absolute;
  }

  .drive img{
    width: 26%;
    left: 71%;
    top: 42%;
    position: absolute;
    z-index: 1;
  }

  .motorbike img {
    width: 29%;
    left: 52%;
    top: 49%;
    position: absolute;
    z-index: 2;
  }

  .stop img {
    width: 54%;
    left: 1%;
    top: 14%;
    position: absolute;
    z-index: 1;
  }

  .tram img {
    width: 100%;
    left: 0%;
    top: 7%;
    position: absolute;
  }

  .truck img {
    width: 45%;
    left: 19%;
    top: 33.8%;
    position: absolute;
    z-index: 2;
  }

  .walk img {
    width: 20%;
    left: 77%;
    top: 64%;
    position: absolute;
  }

  .seedsButton img {
    width: 9%;
    left: 38%;
    top: 88%;
    position: absolute;
  }

  .butterflyButton img {
    width: 8%;
    left: 4%;
    top: 66%;
    position: absolute;
  }

  .flowersButton img {
    width: 8%;
    left: 12%;
    top: 91%;
    position: absolute;
  }

  .flyButton img {
    width: 4%;
    left: 22%;
    top: 31%;
    position: absolute;
  }

  .hikeButton img {
    width: 6%;
    left: 11%;
    top: 40%;
    position: absolute;
  }

  .iceCream1Button img {
    width: 9%;
    left: 55%;
    top: 62%;
    position: absolute;
  }

  .kiteButton img {
    width: 6%;
    left: 31%;
    top: 6%;
    position: absolute;
  }

  .picnicButton img {
    width: 8%;
    left: 66%;
    top: 87%;
    position: absolute;
  }

  .plantButton img {
    width: 8%;
    left: 26%;
    top: 70%;
    position: absolute;
  }

  .sunnyButton img {
    width: 7%;
    left: 87%;
    top: 21%;
    position: absolute;
  }

  .sunscreenButton img {
    width: 9%;
    left: 68%;
    top: 49%;
    position: absolute;
  }

  .swimButton img {
    width: 6%;
    left: 60%;
    top: 17%;
    position: absolute;
  }

  .butterfly img {
    width: 10%;
    left: 2%;
    top: 67%;
    position: absolute;
    z-index: 1;
  }

  .flowers img {
    width: 19%;
    left: 0%;
    top: 76%;
    position: absolute;
  }

  .fly img {
    width: 33%;
    left: 20%;
    top: 5%;
    position: absolute;
  }

  .hike img {
    width: 15%;
    left: 2%;
    top: 16%;
    position: absolute;
  }

  .iceCream1 img {
    width: 8%;
    left: 55%;
    top: 48%;
    position: absolute;
    z-index: 1;
  }

  .kite img {
    width: 33%;
    left: 21%;
    top: 5.5%;
    position: absolute;
  }

  .picnic img {
    width: 46%;
    height: 59%;
    left: 54%;
    top: 41%;
    position: absolute;
  }

  .plant img {
    width: 26%;
    height: 48%;
    left: 14.5%;
    top: 41%;
    position: absolute;
  }

  .seeds img {
    width: 15%;
    left: 39%;
    top: 73%;
    position: absolute;
  }

  .sunny img {
    width: 17%;
    left: 83%;
    top: 0%;
    position: absolute;
  }

  .sunscreen img {
    width: 5%;
    left: 66%;
    top: 56%;
    position: absolute;
    z-index: 1;
  }

  .swim img {
    width: 25%;
    left: 55%;
    top: 17%;
    position: absolute;
  }

  .rakeButton img {
    width: 5%;
    left: 5%;
    top: 41%;
    position: absolute;
  }

  .leavesButton img {
    width: 6%;
    left: 7%;
    top: 84%;
    position: absolute;
  }

  .umbrellaButton img {
    width: 7%;
    left: 23%;
    top: 71%;
    position: absolute;
  }

  .rainButton img {
    width: 5%;
    left: 16%;
    top: 10%;
    position: absolute;
  }

  .squirrelButton img {
    width: 6%;
    left: 23%;
    top: 30%;
    position: absolute;
  }

  .shiverButton img {
    width: 6%;
    left: 40%;
    top: 60%;
    position: absolute;
  }

  .wind1Button img {
    width: 5%;
    left: 45%;
    top: 13%;
    position: absolute;
  }

  .iciclesButton img {
    width: 6%;
    left: 58%;
    top: 40%;
    position: absolute;
  }

  .hotChocolateButton img {
    width: 9%;
    left: 51%;
    top: 55%;
    position: absolute;
  }

  .iceSkatingButton img {
    width: 7%;
    left: 72%;
    top: 87%;
    position: absolute;
  }

  .snow2Button img {
    width: 6%;
    left: 69%;
    top: 11%;
    position: absolute;
  }

  .skiButton img {
    width: 5%;
    left: 93%;
    top: 42%;
    position: absolute;
  }

  .hotChocolate img {
    width: 6%;
    left: 19%;
    top: 20%;
    position: absolute;
  }

  .iceSkating img {
    width: 22%;
    left: 65%;
    top: 45%;
    position: absolute;
  }

  .icicles img {
    width: 21%;
    left: 54%;
    top: 10%;
    position: absolute;
    z-index: 1;
  }

  .leaves img {
    width: 32%;
    left: 0;
    top: 76%;
    position: absolute;
  }

  .rain img {
    width: 16%;
    left: 14%;
    top: -1%;
    position: absolute;
  }

  .rake img {
    width: 23%;
    left: 2%;
    top: 25%;
    position: absolute;
    z-index: 1;
  }

  .shiver img {
    width: 17%;
    left: 39%;
    top: 32%;
    position: absolute;
  }

  .hotChocolate img {
    width: 17%;
    left: 39%;
    top: 32%;
    position: absolute;
  }

  .ski img {
    width: 23%;
    left: 77%;
    top: -1%;
    position: absolute;
  }

  .snow2 img {
    width: 30%;
    left: 51%;
    top: 0%;
    position: absolute;
  }

  .squirrel img {
    width: 7%;
    left: 23%;
    top: 32%;
    position: absolute;
    z-index: 1;
  }

  .umbrella img {
    width: 24%;
    left: 16%;
    top: 34%;
    position: absolute;
  }

  .wind1 img {
    width: 20%;
    left: 29%;
    top: 0%;
    position: absolute;
  }

  .barnButton img {
    width: 6%;
    left: 19%;
    top: 20%;
    position: absolute;
  }
  .bucketButton img {
    width: 6%;
    left: 17%;
    top: 47%;
    position: absolute;
  }
  .chickButton img {
    width: 6%;
    left: 42%;
    top: 89%;
    position: absolute;
  }
  .cowButton img {
    width: 5%;
    left: 69%;
    top: 61%;
    position: absolute;
  }
  .duckButton img {
    width: 6%;
    left: 7%;
    top: 87%;
    position: absolute;
  }
  .eggButton img {
    width: 6%;
    left: 20%;
    top: 66%;
    position: absolute;
  }
  .feed1Button img {
    width: 6%;
    left: 54%;
    top: 66%;
    position: absolute;
  }
  .hayButton img {
    width: 5%;
    left: 8%;
    top: 40%;
    position: absolute;
  }
  .henButton img {
    width: 6%;
    left: 23%;
    top: 88%;
    position: absolute;
  }
  .roosterButton img {
    width: 6%;
    left: 39%;
    top: 50%;
    position: absolute;
  }
  .sheepButton img {
    width: 6%;
    left: 83%;
    top: 42%;
    position: absolute;
  }
  .crowButton img {
    width: 6%;
    left: 53%;
    top: 21%;
    position: absolute;
  }



  .barn img {
    width: 48%;
    left: 7%;
    top: 6%;
    position: absolute;
  }
  .bucket img {
    width: 14%;
    left: 13%;
    top: 45%;
    position: absolute;
    z-index: 1;
  }
  .chick img {
    width: 9%;
    left: 37%;
    top: 77%;
    position: absolute;
    z-index: 1;
  }
  .cow img {
    width: 30%;
    left: 65%;
    top: 58%;
    position: absolute;
  }
  .duck img {
    width: 15%;
    left: 2%;
    top: 58%;
    position: absolute;
  }
  .egg img {
    width: 17%;
    left: 20%;
    top: 58%;
    position: absolute;
    z-index: 1;
  }
  .feed1 img {
    width: 42%;
    left: 21%;
    top: 26%;
    position: absolute;
  }
  .hay img {
    width: 21%;
    left: 0;
    top: 33%;
    position: absolute;
  }
  .hen img{
    width: 16%;
    left: 24%;
    top: 69%;
    position: absolute;
  }
  .rooster img {
    width: 16%;
    left: 33%;
    top: 48%;
    position: absolute;
  }
  .sheep img {
    width: 26%;
    left: 65%;
    top: 24%;
    position: absolute;
  }
  .crow img {
    width: 14%;
    left: 49%;
    top: 21%;
    position: absolute;
    z-index: 1;
  }

  .roll img {
    width: 26%;
    left: 46%;
    top: -12%;
    position: absolute;
  }
  .gallop img {
    width: 26%;
    left: 46%;
    top: -12%;
    position: absolute;
  }
  .tractor img {
    width: 26%;
    left: 46%;
    top: -12%;
    position: absolute;
  }
  .tree img {
    width: 26%;
    left: 46%;
    top: -12%;
    position: absolute;
  }
  .apple img {
    width: 26%;
    left: 46%;
    top: -12%;
    position: absolute;
  }
  .farmer img {
    width: 23%;
    left: 77%;
    top: 11%;
    position: absolute;
    z-index: 1;
  }
  .fence img {
    width: 116%;
    left: -9%;
    top: 31%;
    position: absolute;
  }
  .gallop img {
    width: 80%;
    left: 30%;
    top: 40%;
    position: absolute;
  }
  .horse1 img {
    width: 37%;
    left: 63%;
    top: 48%;
    position: absolute;
  }
  .pick img {
    width: 32%;
    left: 55%;
    top: -3%;
    position: absolute;
    z-index: 1;
  }
  .pig img {
    width: 33%;
    left: 1%;
    top: 58%;
    position: absolute;
  }
  .plants img {
    width: 25%;
    left: 28%;
    top: 5%;
    position: absolute;
    z-index: 1;
  }
  .plough img {
    width: 56%;
    left: -2%;
    top: 13%;
    position: absolute;
  }
  .roll img {
    width: 35%;
    left: 0;
    top: 55%;
    position: absolute;
  }
  .tractor img {
    width: 57%;
    height: 45%;
    left: 7%;
    top: 13%;
    position: absolute;
  }
  .tree img{
    width: 30%;
    left: 81%;
    top: -14%;
    height: 56%;
    position: absolute;
  }
  .plantsButton img {
    width: 5%;
    left: 42%;
    top: 24%;
    position: absolute;
  }
  .appleButton img {
    width: 6%;
    left: 55%;
    top: 35%;
    position: absolute;
  }
  .pickButton img {
    width: 5%;
    left: 74%;
    top: 27%;
    position: absolute;
  }
  .treeButton img {
    width: 6%;
    left: 86%;
    top: 14%;
    position: absolute;
  }
  .farmerButton img {
    width: 6%;
    left: 91%;
    top: 40%;
    position: absolute;
  }
  .gallopButton img {
    width: 6%;
    left: 91%;
    top: 61%;
    position: absolute;
  }
  .horse1Button img {
    width: 6%;
    left: 66%;
    top: 76%;
    position: absolute;
  }
  .fenceButton img {
    width: 6%;
    left: 44%;
    top: 72%;
    position: absolute;
  }
  .pigButton img {
    width: 5%;
    left: 27%;
    top: 82%;
    position: absolute;
  }
  .rollButton img {
    width: 5%;
    left: 3%;
    top: 88%;
    position: absolute;
  }
  .tractorButton img {
    width: 6%;
    left: 6%;
    top: 29%;
    position: absolute;
  }
  .ploughButton img {
    width: 6%;
    left: 34%;
    top: 53%;
    position: absolute;
  }
  .eatClick {
    width: 24%;
    height: 53%;
    position: absolute;
    top: 16%;
    left: 22%;
    z-index: 1;
  }
  .fishClick {
    width: 24%;
    height: 16%;
    position: absolute;
    top: 68%;
    left: 12%;
    z-index: 2;
  }
  .knifeClick {
    width: 4%;
    height: 22%;
    position: absolute;
    top: 74%;
    left: 45%;
    transform: rotate(21deg);
    z-index: 1;
  }
  .forkClick {
    width: 4%;
    height: 22%;
    position: absolute;
    top: 74%;
    left: 38%;
    transform: rotate(21deg);
    z-index: 1;
  }
  .orderButton img {
    width: 6%;
    left: 20%;
    top: 13%;
    position: absolute;
  }

  .juiceButton img {
    width: 6%;
    left: 14%;
    top: 62%;
    position: absolute;
  }

  .napkinButton img {
    width: 7%;
    left: 6%;
    top: 84%;
    position: absolute;
  }

  .noodlesButton img {
    width: 7%;
    left: 26%;
    top: 60%;
    position: absolute;
  }

  .pizzaButton img {
    width: 7%;
    left: 31%;
    top: 33%;
    position: absolute;
  }

  .iceCreamButton img {
    width: 9%;
    left: 41%;
    top: 13%;
    position: absolute;
  }

  .forkButton img {
    width: 5%;
    left: 40%;
    top: 65%;
    position: absolute;
  }

  .knifeButton img {
    width: 5%;
    left: 47%;
    top: 65%;
    position: absolute;
  }

  .burgerButton img {
    width: 7%;
    left: 64%;
    top: 72%;
    position: absolute;
  }

  .plateButton img {
    width: 6%;
    left: 77%;
    top: 92%;
    position: absolute;
  }

  .menuButton img {
    width: 6%;
    left: 89%;
    top: 39%;
    position: absolute;
  }

  .waiterButton img {
    width: 6%;
    left: 85%;
    top: 4%;
    position: absolute;
  }

  .order img {
    width: 31.7%;
    left: -1%;
    top: 9.7%;
    height: 65.8%;
    position: absolute;
  }

  .juice img {
    width: 14%;
    left: 3.5%;
    top: 54.5%;
    position: absolute;
  }

  .napkin img {
    width: 26%;
    left: 7.5%;
    top: 67.5%;
    position: absolute;
  }

  .noodles img {
    width: 19%;
    left: 18%;
    top: 47.5%;
    position: absolute;
  }

  .pizza img {
    width: 23%;
    left: 23%;
    top: 32%;
    position: absolute;
  }

  .iceCream img {
    width: 13%;
    left: 39.5%;
    top: 14.5%;
    position: absolute;
    z-index: 1;
  }

  .fork img {
    width: 11%;
    left: 34.5%;
    top: 65.5%;
    position: absolute;
  }

  .knife img {
    width: 10%;
    left: 41.5%;
    top: 67.5%;
    position: absolute;
  }

  .burger img {
    width: 18%;
    left: 67.5%;
    top: 64.5%;
    position: absolute;
  }

  .plate img {
    width: 19%;
    left: 81%;
    top: 80%;
    position: absolute;
  }

  .menu img {
    width: 17%;
    left: 82%;
    top: 34%;
    position: absolute;
  }

  .waiter img {
    width: 30%;
    left: 66%;
    top: -8%;
    height: 80%;
    position: absolute;
  }

  .bowlButton img {
    width: 7%;
    left: 7.5%;
    top: 18.5%;
    position: absolute;
  }

  .cupButton img {
    width: 5%;
    left: 6%;
    top: 71%;
    position: absolute;
  }

  .fish1Button img {
    width: 5%;
    left: 22%;
    top: 59%;
    position: absolute;
  }

  .chopsticksButton img {
    width: 11%;
    left: 22%;
    top: 92%;
    position: absolute;
  }

  .eatButton img {
    width: 5%;
    left: 42.5%;
    top: 16.5%;
    position: absolute;
  }

  .riceButton img {
    width: 5%;
    left: 66%;
    top: 55.5%;
    position: absolute;
  }

  .drinkButton img {
    width: 5%;
    left: 81.5%;
    top: 42.5%;
    position: absolute;
  }

  .chickenButton img {
    width: 8%;
    left: 74.5%;
    top: 65.5%;
    position: absolute;
  }

  .teaButton img {
    width: 5%;
    left: 57.5%;
    top: 73.5%;
    position: absolute;
  }

  .spoonButton img {
    width: 6%;
    left: 41.5%;
    top: 83.5%;
    position: absolute;
  }

  .vegetablesButton img {
    width: 9%;
    left: 47.5%;
    top: 47.5%;
    position: absolute;
  }

  .milkButton img {
    width: 5%;
    left: 62.5%;
    top: 30.5%;
    position: absolute;
  }

  .vegetables img {
    width: 21%;
    left: 41%;
    top: 45.5%;
    position: absolute;
  }

  .tea img {
    width: 15%;
    left: 49%;
    top: 64%;
    position: absolute;
  }

  .spoon img {
    width: 13.4%;
    left: 33%;
    top: 64%;
    position: absolute;
    z-index: 1;
  }

  .milk img {
    width: 15%;
    left: 64%;
    top: 14.5%;
    position: absolute;
  }

  .bowl img {
    width: 14%;
    left: 3.5%;
    top: 19.5%;
    position: absolute;
  }

  .cup img {
    width: 13%;
    left: 2%;
    top: 72%;
    position: absolute;
    z-index: 1;
  }

  .fish1 img {
    width: 28%;
    left: 10.5%;
    top: 45%;
    position: absolute;
    z-index: 1;
  }

  .chopsticks img {
    width: 22%;
    left: 14%;
    top: 60%;
    position: absolute;
  }

  .rice img {
    width: 13%;
    left: 62%;
    top: 57%;
    position: absolute;
    z-index: 1;
  }

  .chicken img {
    width: 32%;
    left: 63%;
    top: 52%;
    position: absolute;
  }

  .eat img {
    width: 30%;
    left: 19%;
    top: 9%;
    position: absolute;
  }

  .drink img {
    width: 23%;
    left: 76%;
    top: 13%;
    position: absolute;
  }


  .sled1 img {
    width: 51%;
    left: 45%;
    top: 1%;
    position: absolute;
  }

  .scarf img {
    width: 50%;
    left: 46.5%;
    top: 0;
    position: absolute;
  }

  .fall img {
    width: 15%;
    left: 50%;
    top: -5%;
    position: absolute;
    z-index: 1;
  }

  .snow1 img {
    width: 73%;
    left: 27%;
    height: 50%;
    top: 0;
    position: absolute;
  }

  .cold1 img {
    width: 18%;
    left: 29%;
    top: 32%;
    position: absolute;
  }

  .skates img {
    width: 14%;
    left: 53%;
    top: 33%;
    position: absolute;
    z-index: 1;
  }

  .snowman img {
    width: 27%;
    left: 71%;
    top: 38%;
    position: absolute;
    z-index: 1;
  }

  .animals img {
    width: 31%;
    left: 3%;
    top: 70%;
    position: absolute;
  }

  .hibernate img {
    width: 18%;
    left: 2%;
    top: 72%;
    position: absolute;
  }

  .coat img {
    width: 18%;
    left: 29%;
    top: 32%;
    position: absolute;
  }

  .fireplace img {
    width: 26%;
    left: 3%;
    top: 24%;
    position: absolute;
  }

  .warm img {
    width: 26%;
    left: 3%;
    top: 24%;
    position: absolute;
  }

  .sled1Button img {
    width: 5%;
    left: 85%;
    top: 28%;
    position: absolute;
  }

  .scarfButton img {
    width: 5%;
    left: 72%;
    top: 14%;
    position: absolute;
  }

  .fallButton img {
    width: 5%;
    left: 60%;
    top: 27%;
    position: absolute;
  }

  .snow1Button img {
    width: 5%;
    left: 76%;
    top: 36%;
    position: absolute;
  }

  .cold1Button img {
    width: 6%;
    left: 44%;
    top: 47%;
    position: absolute;
  }

  .skatesButton img {
    width: 7%;
    left: 59%;
    top: 70%;
    position: absolute;
  }

  .snowmanButton img {
    width: 9%;
    left: 78%;
    top: 88%;
    position: absolute;
  }

  .animalsButton img {
    width: 8%;
    left: 14%;
    top: 91%;
    position: absolute;
  }

  .hibernateButton img {
    width: 9%;
    left: 2%;
    top: 69%;
    position: absolute;
  }

  .coatButton img {
    width: 5%;
    left: 27%;
    top: 60%;
    position: absolute;
  }

  .fireplaceButton img {
    width: 8%;
    left: 16%;
    top: 53%;
    position: absolute;
  }

  .warmButton img {
    width: 5%;
    left: 6%;
    top: 29%;
    position: absolute;
  }

  .stockingButton img {
    width: 8%;
    left: 5%;
    top: 53%;
    position: absolute;
  }

  .sleighButton img {
    width: 7%;
    left: 20%;
    top: 82%;
    position: absolute;
  }

  .reindeerButton img {
    width: 8%;
    left: 42%;
    top: 86%;
    position: absolute;
  }

  .bellsButton img {
    width: 6%;
    left: 63%;
    top: 79%;
    position: absolute;
  }

  .elf1Button img {
    width: 4%;
    left: 88%;
    /* height: 30%; */
    top: 71%;
    position: absolute;
  }

  .crackerButton img {
    width: 7%;
    left: 75%;
    top: 58%;
    position: absolute;
  }

  .pullButton img {
    width: 5%;
    left: 70%;
    top: 38%;
    position: absolute;
  }

  .santaClausButton img {
    width: 10%;
    left: 51%;
    top: 22%;
    position: absolute;
  }

  .cracker img {
    width: 40%;
    left: 57%;
    height: 30%;
    top: 40%;
    position: absolute;
  }

  .pull img {
    width: 40%;
    left: 57%;
    height: 30%;
    top: 40%;
    position: absolute;
  }

  .elf1 img {
    width: 17.5%;
    left: 80%;
    top: 33%;
    position: absolute;
  }

  .bells img {
    width: 15%;
    left: 55%;
    top: 65%;
    position: absolute;
  }

  .reindeer img {
    width: 11%;
    left: 43%;
    top: 55%;
    position: absolute;
  }

  .sleigh img {
    width: 40%;
    left: 1%;
    top: 20%;
    position: absolute;
  }

  .stocking img {
    width: 13%;
    left: 2%;
    top: 58%;
    position: absolute;
    z-index: 1;
  }

  .santaClaus img {
    width: 21%;
    left: 34%;
    top: 24%;
    position: absolute;
  }

  .babyButton img {
    width: 6%;
    left: 10%;
    top: 56%;
    position: absolute;
  }

  .hugButton img {
    width: 6%;
    left: 42%;
    top: 92%;
    position: absolute;
  }

  .caringButton img {
    width: 9%;
    left: 76%;
    top: 69%;
    position: absolute;
  }

  .shareButton img {
    width: 7%;
    left: 64%;
    top: 23%;
    position: absolute;
  }


  .youngButton img {
    width: 9%;
    left: 21%;
    top: 83%;
    position: absolute;
  }

  .brotherButton img {
    width: 10%;
    left: 31%;
    top: 62%;
    position: absolute;
  }

  .fatherButton img {
    width: 8%;
    left: 55%;
    top: 51%;
    position: absolute;
  }

  .sisterButton img {
    width: 8%;
    left: 87%;
    top: 36%;
    position: absolute;
  }

  .grandmaButton img {
    width: 10%;
    left: 62%;
    top: 16%;
    position: absolute;
  }

  .grandpaButton img {
    width: 10%;
    left: 23%;
    top: 9%;
    position: absolute;
  }

  .oldButton img {
    width: 6%;
    left: 27%;
    top: 19%;
    position: absolute;
  }

  .motherButton img {
    width: 10%;
    left: 7%;
    top: 20%;
    position: absolute;
  }

  .baby img {
    width: 10%;
    left: 7%;
    top: 62%;
    position: absolute;
  }

  .brother img {
    width: 22%;
    left: 35%;
    top: 56%;
    position: absolute;
  }

  .caring img {
    width: 50%;
    height: 55%;
    left: 52%;
    top: 22%;
    position: absolute;
  }

  .father img {
    width: 30%;
    left: 57%;
    top: 19%;
    position: absolute;
  }

  .grandma img {
    width: 17%;
    left: 48%;
    top: 13%;
    position: absolute;
  }

  .grandpa img {
    width: 17%;
    left: 29%;
    top: 7%;
    position: absolute;
  }

  .hug img {
    width: 9%;
    left: 79%;
    top: 12%;
    position: absolute;
  }

  .mother img {
    width: 11%;
    left: 17%;
    top: 17%;
    position: absolute;
  }

  .old img {
    width: 37%;
    height: 38%;
    left: 29%;
    top: 8%;
    position: absolute;
  }

  .share img {
    width: 36%;
    height: 40%;
    left: 30%;
    top: 7%;
    position: absolute;
  }

  .sister img {
    width: 22%;
    left: 78%;
    top: 31%;
    position: absolute;
  }

  .young img {
    width: 22%;
    height: 68%;
    left: 6%;
    top: 15%;
    position: absolute;
  }

  .balloonsButton img {
    width: 9%;
    left: 79%;
    top: 12%;
    position: absolute;
  }

  .blow1Button img {
    width: 7%;
    left: 89%;
    top: 71%;
    position: absolute;
  }

  .cakeButton img {
    width: 7%;
    left: 65%;
    top: 75%;
    position: absolute;
  }

  .candlesButton img {
    width: 9%;
    left: 86%;
    top: 89%;
    position: absolute;
  }

  .cardButton img {
    width: 8%;
    left: 17%;
    top: 90%;
    position: absolute;
  }

  .friendsButton img {
    width: 9%;
    left: 88%;
    top: 33%;
    position: absolute;
  }

  .happyButton img {
    width: 8%;
    left: 15%;
    top: 28%;
    position: absolute;
  }

  .partyHatButton img {
    width: 11%;
    left: 65%;
    top: 27%;
    position: absolute;
  }

  .playButton img {
    width: 7%;
    left: 3%;
    top: 75%;
    position: absolute;
  }

  .presentsButton img {
    width: 11%;
    left: 41%;
    top: 85%;
    position: absolute;
  }

  .cutButton img {
    width: 6%;
    left: 76%;
    top: 63%;
    position: absolute;
  }

  .singButton img {
    width: 8%;
    left: 33%;
    top: 20%;
    position: absolute;
  }

  .balloons img {
    width: 23%;
    left: 81%;
    top: -4%;
    position: absolute;
  }

  .balloons img {
    width: 23%;
    left: 81%;
    top: -4%;
    position: absolute;
  }

  .blow1 img {
    width: 14%;
    left: 86%;
    top: 42.6%;
    position: absolute;
  }

  .blowClick {
    height: 35%;
    width: 12%;
    left: 88%;
    top: 44.6%;
    position: absolute;
    z-index: 3;
  }

  .cakeClick {
    width: 13%;
    height: 14%;
    left: 57%;
    top: 66%;
    position: absolute;
    z-index: 3;
  }

  .cake img {
    width: 37%;
    left: 45%;
    top: 46%;
    position: absolute;
  }

  .candlesClick {
    width: 11%;
    height: 12%;
    left: 87%;
    top: 79%;
    position: absolute;
    z-index: 3;
  }

  .candles img {
    width: 15%;
    left: 84%;
    top: 75%;
    position: absolute;
  }

  .card img {
    width: 32%;
    left: 11%;
    top: 65%;
    position: absolute;
    z-index: 2;
  }

  .cut img {
    width: 58%;
    left: 41%;
    height: 58%;
    top: 30%;
    position: absolute;
    z-index: 2;
  }

  .cutClick {
    width: 15%;
    left: 72%;
    height: 40%;
    top: 32%;
    position: absolute;
    z-index: 3;
  }

  .friends img{
    width: 40%;
    left: 61%;
    height: 59%;
    top: 26%;
    position: absolute;
  }

  .happy img {
    width: 40%;
    height: 62%;
    left: 8%;
    top: 23%;
    position: absolute;
    z-index: 2;
  }

  .partyHatClick {
    width: 15%;
    height: 43%;
    left: 57%;
    top: 19%;
    position: absolute;
    z-index: 2;
  }

  .partyHat img {
    width: 20%;
    left: 54%;
    top: 17%;
    position: absolute;
  }

  .play img {
    width: 14%;
    left: 0;
    top: 43%;
    position: absolute;
    z-index: 3;
  }

  .presentsClick{
    width: 19%;
    height: 30%;
    left: 36%;
    top: 62%;
    position: absolute;
    z-index: 2;
  }

  .presents img {
    width: 42%;
    left: 25%;
    top: 50%;
    position: absolute;
    z-index:1;
  }

  .singClick {
    width: 17%;
    height: 33%;
    left: 39%;
    top: 26.8%;
    position: absolute;
    z-index: 3;
  }

  .sing img {
    width: 23%;
    left: 35%;
    top: 18.8%;
    position: absolute;
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
    top: 0;
    position: absolute;
  }

  .giraffe img {
    width: 12%;
    left: 0;
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
    top: 0;
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
      top: 0;
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
    left: 0;
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
    left: 0;
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
    top: 0;
    position: absolute;

    img {
      width: 400%;
      top: 131%;
      left: 0;
      position: absolute;
    }
  }

  .cactusbutton {
    height: 40%;
    width: 10%;
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
      left: 0;
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
      top: 0;
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
    top: 0;
    right: 15%;
    position: absolute;

    img {
      width: 50%;
      top: 70%;
      left: 0;
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
      left: 0;
      position: absolute;
    }
  }

  .toilet {
    height: 50%;
    width: 30%;
    display: block;
    float: left;
    top: 50%;
    right: 0;
    position: absolute;

    img {
      width: 55%;
      top: 0;
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
    right: 0;
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
    left: 0;
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
      left: 0;
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
      left: 0;
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
      left: 0;
    }
    50% {
      position: relative;
      left: 20px;
    }
    100% {
      position: relative;
      left: 0;
    }
  }

  @-webkit-keyframes myPlay {
    0% {
      position: relative;
      left: 0;
    }
    50% {
      position: relative;
      left: 20px;
    }
    100% {
      position: relative;
      left: 0;
    }
  }

  @-moz-keyframes myPlay {
    0% {
      left: 0;
    }
    50% {
      left: 20px;
    }
    100% {
      left: 0;
    }
  }


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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
    top: 0;
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
  @media only screen and (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3) ,
  (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 812px) and (max-width: 1023px){
    .videoGameButton img {
      width: 9%;
      left: 6%;
      top: 47%;
      position: absolute;
    }
    .TVButton img {
      width: 4%;
      left: 9%;
      top: 13%;
      position: absolute;
    }
    .danceButton img {
      width: 6%;
      left: 22%;
      top: 25%;
      position: absolute;
    }
    .listen2Button img {
      width: 6%;
      left: 35%;
      top: 16%;
      position: absolute;
    }
    .ovenButton img {
      width: 5%;
      left: 78%;
      top: 16%;
      position: absolute;
    }
    .read3Button img {
      width: 6%;
      left: 24%;
      top: 67%;
      position: absolute;
    }
    .paintbrushButton img {
      width: 9%;
      left: 50%;
      top: 85%;
      position: absolute;
    }
    .TV img {
      width: 11%;
      height: 36%;
      left: 4.5%;
      top: 19%;
      position: absolute;
    }
    .dance img {
      width: 12%;
      left: 23.5%;
      top: 24%;
      position: absolute;
    }
    .book2 img {
      width: 14%;
      left: -0.5%;
      top: 72%;
      position: absolute;
    }
    .read3 img {
      width: 9%;
      left: 15.5%;
      top: 56%;
      position: absolute;
    }
    .picture img {
      width: 9%;
      left: 30.5%;
      top: 53%;
      position: absolute;
    }
    .paintbrush img {
      width: 13%;
      left: 46.5%;
      top: 56%;
      position: absolute;
    }
    .listen2 img {
      width: 12%;
      left: 40.5%;
      top: 14%;
      position: absolute;
      z-index: 1;
    }
    .piano img {
      width: 19%;
      left: 50.5%;
      top: 4%;
      position: absolute;
    }
    .oven img {
      width: 12%;
      left: 80.5%;
      top: 21%;
      position: absolute;
    }
    .bake2 img {
      width: 17%;
      left: 75.5%;
      top: 17%;
      position: absolute;
    }
    .cookies img {
      width: 26%;
      left: 74.5%;
      top: 42%;
      position: absolute;
    }
    .doctor2Button img {
      width: 6%;
      left: 3%;
      top: 50%;
      position: absolute;
    }
    .teacher2Button img {
      width: 7%;
      left: 5%;
      top: 27%;
      position: absolute;
    }
    .letters img {
      width: 9%;
      left: 71%;
      top: 85%;
      position: absolute;
    }
    .mailPerson img {
      width: 11%;
      left: 62%;
      top: 50%;
      position: absolute;
    }
    .vet img {
      width: 18%;
      left: 38%;
      top: 44%;
      position: absolute;
    }
    .doctor2 img {
      width: 7%;
      left: 3%;
      top: 56%;
      position: absolute;
    }
    .nurse img {
      width: 7%;
      left: 11%;
      top: 58%;
      position: absolute;
    }
    .fireFighter img {
      width: 32%;
      height: 38%;
      left: 67%;
      top: 2%;
      position: absolute;
    }
    .help img {
      width: 8%;
      left: 45%;
      top: 2%;
      position: absolute;
    }
    .policeman img {
      width: 13%;
      left: 30%;
      top: 4%;
      position: absolute;
    }
    .teacher2 img {
      width: 11%;
      left: 3%;
      top: 4%;
      position: absolute;
    }
    .park img {
      width: 80%;
      height: 44%;
      left: -11%;
      top: -4%;
      position: absolute;
    }
    .libraryButton img {
      width: 6%;
      left: 34%;
      top: 30%;
      position: absolute;
    }
    .schoolButton img {
      width: 7%;
      left: 11%;
      top: 58%;
      position: absolute;
    }
    .restaurantButton img {
      width: 9%;
      left: 19%;
      top: 65%;
      position: absolute;
    }
    .shopButton img {
      width: 5%;
      left: 58%;
      top: 89%;
      position: absolute;
    }
    .school img {
      width: 41%;
      left: -6%;
      top: 16%;
      position: absolute;
    }
    .visit img {
      width: 29%;
      left: 24%;
      top: 26%;
      position: absolute;
    }
    .library img {
      width: 29%;
      left: 24%;
      top: 26%;
      position: absolute;
    }
    .fireStation img {
      width: 21%;
      left: 47%;
      top: 31%;
      position: absolute;
      z-index: 1;
    }
    .policeStation img {
      width: 37%;
      left: 64%;
      top: 23%;
      position: absolute;
      z-index: 1;
    }
    .restaurant img {
      width: 60%;
      left: -14%;
      top: 40%;
      position: absolute;
    }
    .bakery img {
      width: 30%;
      left: 27%;
      top: 44%;
      position: absolute;
      z-index: 1;
    }
    .shop img {
      width: 20%;
      height: 45%;
      left: 51%;
      top: 51%;
      position: absolute;
      z-index: 1;
    }
    .busStop img {
      width: 40%;
      left: 64%;
      top: 47%;
      position: absolute;
    }
    .wait img {
      width: 40%;
      left: 64%;
      top: 61%;
      position: absolute;
    }
    .hospital img {
      width: 55%;
      left: 51%;
      top: -35%;
      position: absolute;
    }
    .slitherButton img {
      width: 7%;
      left: 62%;
      top: 43%;
      position: absolute;
    }
    .snake2 img {
      width: 18%;
      left: 48%;
      top: 27%;
      position: absolute;
    }
    .slither img {
      width: 18%;
      left: 48%;
      top: 27%;
      position: absolute;
    }
    .sloth img {
      width: 28%;
      left: 22%;
      top: -6%;
      position: absolute;
    }
    .bat img {
      width: 10%;
      left: 4%;
      top: 0%;
      position: absolute;
    }
    .lizard2 img {
      width: 22%;
      left: -2%;
      top: 14%;
      position: absolute;
    }
    .pounce img {
      width: 45%;
      left: 19%;
      top: 31%;
      position: absolute;
    }
    .jaguar img {
      width: 45%;
      left: 19%;
      top: 31%;
      position: absolute;
    }
    .frog img {
      width: 12%;
      left: 7%;
      top: 68%;
      position: absolute;
    }
    .swing3 img {
      width: 30%;
      left: 55%;
      top: 0%;
      position: absolute;
    }
    .crocodile2 img {
      width: 33%;
      left: 45%;
      top: 43%;
      position: absolute;
    }
    .parrot2 img {
      width: 15%;
      left: 83%;
      top: 4%;
      position: absolute;
    }
    .crawl2Button img {
      width: 7%;
      left: 91%;
      top: 82%;
      position: absolute;
    }
    .turtle2 img {
      width: 35%;
      left: 57%;
      top: 54%;
      position: absolute;
    }
    .starfish img {
      width: 11%;
      left: 9%;
      top: 75%;
      position: absolute;
    }
    .shovel2 img {
      width: 15%;
      left: 35%;
      top: -1%;
      position: absolute;
    }
    .dig img {
      width: 15%;
      left: 35%;
      top: -1%;
      position: absolute;
    }
    .shovel2Button img {
      width: 8%;
      left: 38%;
      top: 8%;
      position: absolute;
    }
    .sandcastle img {
      width: 30%;
      left: 5%;
      top: -2%;
      position: absolute;
    }
    .bucket2 img {
      width: 11%;
      left: 32%;
      top: 22%;
      position: absolute;
    }
    .bucket2Button img {
      width: 7%;
      left: 33%;
      top: 38%;
      position: absolute;
    }
    .rodButton img {
      width: 8%;
      left: 51%;
      top: 31%;
      position: absolute;
    }
    .read2Button img {
      width: 8%;
      left: 58%;
      top: 12%;
      position: absolute;
    }
    .rod img {
      width: 15%;
      left: 45%;
      top: 18%;
      position: absolute;
    }
    .read2 img {
      width: 22%;
      left: 60%;
      top: -1%;
      position: absolute;
    }
    .seashellButton img {
      width: 8%;
      left: 84%;
      top: 41%;
      position: absolute;
    }
    .paddleButton img {
      width: 10%;
      left: 77%;
      top: 80%;
      position: absolute;
    }
    .snorkel img {
      width: 40%;
      left: 5%;
      top: 61%;
      position: absolute;
    }
    .goggles img {
      width: 40%;
      left: 5%;
      top: 61%;
      position: absolute;
    }
    .boat img {
      width: 38%;
      left: 52%;
      top: 36%;
      position: absolute;
    }
    .paddle img {
      width: 38%;
      left: 52%;
      top: 36%;
      position: absolute;
    }
    .brush3 img {
      width: 25%;
      left: 67%;
      top: 33%;
      position: absolute;
    }
    .bike2Button img {
      width: 7%;
      left: 7%;
      top: 57%;
      position: absolute;
    }
    .jogButton img {
      width: 6%;
      left: 9%;
      top: 1%;
      position: absolute;
    }
    .jungleGymButton img {
      width: 10%;
      left: 47%;
      top: 2%;
      position: absolute;
    }
    .picnic2Button img {
      width: 7%;
      left: 47%;
      top: 48%;
      position: absolute;
    }
    .brush3Button img {
      width: 6%;
      left: 82%;
      top: 51%;
      position: absolute;
    }
    .paintButton img {
      width: 7%;
      left: 78%;
      top: 75%;
      position: absolute;
    }
    .camera img {
      width: 12%;
      left: 41%;
      top: 63%;
      position: absolute;
      z-index: 1;
    }
    .kite2 img {
      width: 22%;
      left: 15%;
      top: 58%;
      position: absolute;
    }
    .picnic2 img {
      width: 55%;
      height: 65%;
      left: 6%;
      top: 32%;
      position: absolute;
    }
    .bike2 img {
      width: 24%;
      left: 5%;
      top: 25%;
      position: absolute;
    }
    .climb2 img {
      width: 27%;
      left: 38%;
      top: 2%;
      position: absolute;
    }
    .jungleGym img {
      width: 27%;
      left: 38%;
      top: 2%;
      position: absolute;
    }
    .swing2 img {
      width: 17%;
      left: 18%;
      top: 1%;
      position: absolute;
    }
    .jog img {
      width: 16%;
      left: 7%;
      top: 3%;
      position: absolute;
    }
    .kick2 img {
      width: 29%;
      left: 68%;
      top: -2%;
      position: absolute;
    }
    .seesaw2 img {
      width: 18%;
      left: 68%;
      top: 19%;
      position: absolute;
    }
    .paint img {
      width: 20%;
      left: 68%;
      top: 38%;
      position: absolute;
    }
    .germsButton img {
      width: 7%;
      left: 89%;
      top: 39%;
      position: absolute;
    }
    .sweetsButton img {
      width: 7%;
      left: 50%;
      top: 88%;
      position: absolute;
    }
    .brush2Button img {
      width: 6%;
      left: 30%;
      top: 85%;
      position: absolute;
    }
    .teethButton img {
      width: 6%;
      left: 17%;
      top: 77%;
      position: absolute;
    }
    .soapButton img {
      width: 6%;
      left: 11%;
      top: 84%;
      position: absolute;
    }
    .wash2Button img {
      width: 6%;
      left: 1%;
      top: 82%;
      position: absolute;
    }
    .water2 img {
      width: 21%;
      left: 37%;
      top: 36%;
      position: absolute;
    }
    .sweets img {
      width: 25%;
      left: 34%;
      top: 65%;
      position: absolute;
      z-index: 2;
    }
    .vegetables2 img {
      width: 32%;
      left: 45%;
      top: 39%;
      position: absolute;
      z-index: 1;
    }
    .fruit img {
      width: 30%;
      left: 68%;
      top: 42%;
      position: absolute;
    }
    .sleep2 img {
      width: 33%;
      left: 31%;
      top: -3%;
      position: absolute;
    }
    .run2 img {
      width: 30%;
      left: 10%;
      top: 11%;
      position: absolute;
    }
    .teeth img {
      width: 23%;
      left: 15%;
      top: 46%;
      position: absolute;
    }
    .brush2 img {
      width: 23%;
      left: 15%;
      top: 46%;
      position: absolute;
    }
    .soap img {
      width: 6%;
      left: 11%;
      top: 87%;
      position: absolute;
      z-index: 1;
    }
    .wash2 img {
      width: 20%;
      left: 0%;
      top: 41%;
      position: absolute;
    }
    .mouthButton img {
      width: 7%;
      left: 46%;
      top: 91%;
      position: absolute;
    }
    .noseButton img {
      width: 6%;
      left: 46.5%;
      top: 43%;
      position: absolute;
    }
    .eyesButton img {
      width: 6%;
      left: 49.5%;
      top: 20%;
      position: absolute;
    }
    .eyes img {
      width: 15%;
      left: 45%;
      top: 0;
      position: absolute;
    }
    .feetButton img {
      width: 6%;
      left: 90%;
      top: 73%;
      position: absolute;
    }
    .hair img {
      width: 32%;
      left: 65%;
      top: 4%;
      position: absolute;
    }
    .eat2 img {
      width: 32%;
      left: 65%;
      top: 4%;
      position: absolute;
    }
    .walk2 img {
      width: 32%;
      left: 65%;
      top: 4%;
      position: absolute;
    }
    .smell img {
      width: 25%;
      left: 5%;
      top: 1%;
      position: absolute;
    }
    .look img {
      width: 25%;
      left: 5%;
      top: 1%;
      position: absolute;
    }
    .hand img {
      width: 25%;
      left: 5%;
      top: 1%;
      position: absolute;
    }
    .leg img {
      width: 25%;
      left: 5%;
      top: 1%;
      position: absolute;
    }
    .spaceStationButton img {
      width: 12%;
      left: 34%;
      top: 22%;
      position: absolute;
    }
    .planet img {
      width: 47%;
      left: -2%;
      top: 19%;
      position: absolute;
    }
    .dark img {
      width: 23%;
      left: 0%;
      top: 0%;
      position: absolute;
    }
    .ufo img {
      width: 22%;
      left: 70%;
      top: 64%;
      position: absolute;
    }
    .alien img {
      width: 22%;
      left: 70%;
      top: 64%;
      position: absolute;
    }
    .star img {
      width: 11%;
      left: 72%;
      top: 41%;
      position: absolute;
    }
    .space img {
      width: 58.5%;
      left: 49%;
      top: -6%;
      -webkit-transform: rotate(1deg);
      transform: rotate(2deg);
      position: absolute;
    }
    .spaceSuit img{
      width: 6%;
      left: 87%;
      top: 44%;
      position: absolute;
      z-index: 1;
    }
    .countdownButton img {
      width: 10%;
      left: 50%;
      top: 14%;
      position: absolute;
    }
    .spaceSuitButton img {
      width: 9%;
      left: 82%;
      top: 59%;
      position: absolute;
    }
    .helmet img {
      width: 20%;
      left: 61%;
      top: 23%;
      position: absolute;
    }
    .astronaut img {
      width: 20%;
      left: 61%;
      top: 23%;
      position: absolute;
    }
    .scientist img {
      width: 13%;
      left: 44%;
      top: 49%;
      position: absolute;
    }
    .explore img {
      width: 11%;
      left: 84%;
      top: 24%;
      position: absolute;
    }
    .radio img {
      width: 15%;
      left: 80%;
      top: 71%;
      position: absolute;
      z-index: 1;
    }
    .spaceStill img {
      width: 30%;
      height: 55%;
      left: 65%;
      top: 45%;
      position: absolute;
    }
    .fly3 img {
      width: 14%;
      left: 5%;
      top: 0%;
      position: absolute;
    }
    .fuel img {
      width: 36%;
      height: 99%;
      left: -2%;
      top: 6%;
      position: absolute;
    }
    .swimsuit img {
      width: 10%;
      left: 25%;
      top: 57%;
      position: absolute;
    }
    .towel img {
      width: 11%;
      left: 26%;
      top: 32%;
      position: absolute;
    }
    .wet img {
      width: 10%;
      left: 38%;
      top: 25%;
      position: absolute;
      z-index: 1;
    }
    .dry img {
      width: 8%;
      left: 18%;
      top: 31%;
      position: absolute;
    }
    .lifeguard img {
      width: 11%;
      left: 24%;
      top: 2%;
      position: absolute;
      z-index: 1;
    }
    .bumper img {
      width: 35%;
      left: 68%;
      height: 51%;
      top: 29%;
      position: absolute;
    }
    .carouselButton img {
      width: 9%;
      left: 60%;
      top: 1%;
      position: absolute;
    }
    .ferrisWheelButton img {
      width: 10%;
      left: 79%;
      top: 16%;
      position: absolute;
    }
    .carousel img {
      width: 20%;
      left: 54%;
      top: 0%;
      position: absolute;
    }
    .ferrisWheel img {
      width: 22%;
      left: 77%;
      top: -7%;
      position: absolute;
    }
    .queue img {
      width: 29%;
      left: -1%;
      top: 64%;
      position: absolute;
      z-index: 1;
    }
    .ticket1 img {
      width: 16%;
      left: 21%;
      top: 47%;
      position: absolute;
    }
    .scream1 img {
      width: 46%;
      left: 0%;
      top: 0%;
      position: absolute;
      z-index: 1;
    }
    .sweaterButton img {
      width: 7%;
      left: 74%;
      top: 4%;
      position: absolute;
    }
    .mittens img {
      width: 13%;
      left: 53%;
      top: 68%;
      position: absolute;
    }
    .scarf1 img {
      width: 15%;
      left: 52%;
      top: 63%;
      position: absolute;
    }
    .beltButton img {
      width: 5%;
      left: 43%;
      top: 76%;
      position: absolute;
    }
    .belt img {
      width: 12%;
      left: 41%;
      top: 79%;
      position: absolute;
    }
    .socksButton img {
      width: 6%;
      left: 28%;
      top: 88%;
      position: absolute;
    }
    .socks img {
      width: 16%;
      left: 14%;
      top: 72%;
      position: absolute;
    }
    .bootsButton img {
      width: 6%;
      left: 7%;
      top: 62%;
      position: absolute;
    }
    .jacketButton img {
      width: 6%;
      left: 16%;
      top: 17%;
      position: absolute;
    }
    .boots img {
      width: 14%;
      left: 1%;
      top: 62%;
      position: absolute;
    }
    .jacket img {
      width: 18%;
      left: 1%;
      top: 7%;
      position: absolute;
    }
    .trousers img {
      width: 12%;
      left: 65%;
      top: 7%;
      position: absolute;
    }
    .sweater img {
      width: 14%;
      left: 70%;
      top: 6%;
      position: absolute;
      z-index: 2;
    }
    .shirt img {
      width: 17%;
      left: 74%;
      top: 6%;
      position: absolute;
      z-index: 3;
    }
    .wrap img {
      width: 15%;
      left: 68%;
      top: 36%;
      position: absolute;
    }
    .skirtButton img {
      width: 5%;
      left: 54%;
      top: 38%;
      position: absolute;
    }
    .tieButton img {
      width: 4.5%;
      left: 78%;
      top: 92%;
      position: absolute;
    }
    .sunglasses img {
      width: 14%;
      left: 39%;
      top: 68%;
      position: absolute;
    }
    .watch1 img {
      width: 23%;
      left: 25%;
      top: 73%;
      transform: rotate(4deg);
      position: absolute;
    }
    .bag img {
      width: 30%;
      left: 12%;
      top: 42%;
      position: absolute;
    }
    .tShirt img {
      width: 23%;
      left: 13.5%;
      top: -1%;
      position: absolute;
    }
    .shoesButton img {
      width: 5%;
      left: 39%;
      top: 59%;
      position: absolute;
    }
    .shoes img {
      width: 12%;
      left: 33%;
      top: 59%;
      position: absolute;
    }
    .dressButton img {
      width: 5%;
      left: 40%;
      top: 51%;
      position: absolute;
    }
    .dress img {
      width: 15%;
      left: 33%;
      top: 7%;
      position: absolute;
    }
    .sandals img {
      width: 13%;
      left: 49%;
      top: 56%;
      position: absolute;
    }
    .watch1 img {
      width: 23%;
      left: 25%;
      top: 74%;
      position: absolute;
    }
    .wearButton img {
      width: 6%;
      left: 74%;
      top: 27%;
      position: absolute;
    }
    .wear img {
      width: 14%;
      left: 61%;
      top: 7%;
      position: absolute;
    }
    .hatButton img {
      width: 5%;
      left: 89%;
      top: 33%;
      position: absolute;
    }
    .shorts img {
      width: 13%;
      left: 85%;
      top: 48%;
      position: absolute;
    }
    .hat img {
      width: 16%;
      left: 83%;
      top: 33%;
      position: absolute;
    }
    .tie img {
      width: 19%;
      left: 67%;
      top: 48%;
      position: absolute;
    }
    .mosquito img {
      width: 8%;
      left: 59%;
      top: 32%;
      position: absolute;
    }
    .stingButton img {
      width: 6%;
      left: 12%;
      top: 26%;
      position: absolute;
    }
    .sting img {
      width: 25%;
      left: 1%;
      top: 2%;
      position: absolute;
    }
    .buzz img {
      width: 18%;
      left: 28%;
      top: 36%;
      position: absolute;
      z-index: 1;
    }
    .firefly img {
      width: 11%;
      left: 25%;
      top: 48%;
      position: absolute;
    }
    .ladybug img {
      width: 18%;
      left: 4%;
      top: 60%;
      position: absolute;
    }
    .flower img {
      width: 60%;
      left: 40%;
      top: 39%;
      position: absolute;
    }
    .webButton img {
      width: 5%;
      left: 7%;
      top: 29%;
      position: absolute;
    }
    .crawlButton img {
      width: 7%;
      left: 33%;
      top: 19%;
      position: absolute;
    }
    .leafButton img {
      width: 5%;
      left: 46%;
      top: 32%;
      position: absolute;
    }
    .caterpillarButton img {
      width: 8%;
      left: 79%;
      top: 16%;
      position: absolute;
    }
    .snailButton img {
      width: 6%;
      left: 66%;
      top: 55%;
      position: absolute;
    }
    .wormButton img {
      width: 6%;
      left: 83%;
      top: 68%;
      position: absolute;
    }
    .spider img {
      width: 37%;
      left: 3%;
      top: -10%;
      position: absolute;
      z-index: 1;
    }
    .crawl img {
      width: 36%;
      left: 3%;
      top: -7%;
      position: absolute;
    }
    .web img {
      width: 36%;
      left: 3%;
      top: -7%;
      position: absolute;
    }
    .mantis img {
      width: 13%;
      left: 42%;
      top: 47%;
      position: absolute;
    }
    .leaf img {
      width: 28%;
      left: 35%;
      top: 17%;
      position: absolute;
    }
    .feelers img {
      width: 9%;
      left: 22%;
      top: 73%;
      position: absolute;
    }
    .ant img {
      width: 12%;
      left: 34%;
      top: 64%;
      position: absolute;
    }
    .caterpillar img {
      width: 24%;
      left: 67%;
      top: 17%;
      position: absolute;
    }
    .wiggle img {
      width: 15%;
      left: 81%;
      top: 67%;
      position: absolute;
    }
    .snail img {
      width: 16%;
      left: 60%;
      top: 54%;
      transform: rotate(6deg);
      position: absolute;
    }
    .helicopterButton img {
      width: 8%;
      left: 49%;
      top: 38%;
      position: absolute;
    }
    .landButton img {
      width: 5%;
      left: 86%;
      top: 65%;
      position: absolute;
    }
    .ticketButton img {
      width: 6%;
      left: 67%;
      top: 71%;
      position: absolute;
    }
    .station img {
      width: 100%;
      left: 0%;
      top: -7%;
      position: absolute;
    }
    .slow img {
      width: 15%;
      left: 81%;
      top: 11%;
      position: absolute;
    }
    .airplane img {
      width: 21%;
      left: 8%;
      top: 59%;
      -webkit-transform: rotate(5deg);
      transform: rotate(6deg);
      position: absolute;
      z-index: 2;
    }
    .land img {
      width: 106%;
      left: -2%;
      top: 44%;
      height: 56%;
      -webkit-transform: rotate(1.5deg);
      transform: rotate(-3deg);
      position: absolute;
    }
    .suitcase img {
      width: 22%;
      left: 71%;
      top: 50%;
      position: absolute;
      z-index: 1;
    }
    .honk img {
      width: 23%;
      left: 74.5%;
      top: 36%;
      position: absolute;
    }
    .bus img {
      width: 36%;
      left: 9%;
      top: 19%;
      position: absolute;
    }

    .tramButton img {
      width: 5%;
      left: 87%;
      top: 13%;
      position: absolute;
    }
    .driveButton img {
      width: 5%;
      left: 86%;
      top: 38%;
      position: absolute;
    }
    .busButton img {
      width: 5%;
      left: 36%;
      top: 31%;
      position: absolute;
    }
    .stop img {
      width: 42%;
      left: 2%;
      top: 17.5%;
      position: absolute;
      z-index: 1;
    }
    .bike img {
      width: 20%;
      left: 43%;
      top: 55%;
      position: absolute;
      z-index: 3;
    }
    .trafficLightsButton img {
      width: 9%;
    }
    .trafficLights img {
      width: 10%;
      left: 3%;
      top: 41%;
      position: absolute;
    }
    .car img {
      width: 30%;
      left: 11%;
      top: 50%;
      position: absolute;
      z-index: 3;
    }
    .truck img {
      width: 44%;
      left: 19%;
      top: 28%;
      position: absolute;
      z-index: 2;
    }
    .motorbike img {
      width: 29%;
      left: 52%;
      top: 45%;
      position: absolute;
    }
    .drive img {
      width: 26%;
      left: 71%;
      top: 38%;
      position: absolute;
      z-index: 1;
    }
    .walk img {
      width: 20%;
      left: 77%;
      top: 59%;
      position: absolute;
      z-index: 1;
    }
    .tram img {
      width: 100%;
      left: 0%;
      top: 0%;
      position: absolute;
    }
    .ferry img {
      width: 21%;
      left: 6%;
      top: 8%;
      position: absolute;
      z-index: 2;
    }
    .kiteButton img {
      width: 5%;
      left: 35%;
      top: 3%;
    }
    .hikeButton img {
      width: 5%;
    }
    .plantButton img {
      width: 7%;
    }
    .seedsButton img {
      width: 8%;
    }
    .picnicButton img {
      width: 7%;
    }
    .hike img {
      top: 9%;
    }
    .fly img {
      width: 31%;
      left: 22%;
      top: -2%;
    }
    .kite img {
      width: 31%;
      left: 22%;
      top: -2%;
    }
    .squirrelButton img {
      width: 6%;
      left: 23%;
      top: 26%;
      position: absolute;
    }
    .squirrel img {
      width: 7%;
      left: 23%;
      top: 29%;
      position: absolute;
      z-index: 1;
    }
    .rake img {
      width: 23%;
      left: 2%;
      top: 19%;
      position: absolute;
      z-index: 1;
    }
    .leaves img {
      width: 32%;
      left: 0;
      top: 71%;
      position: absolute;
    }
    .hotChocolateButton img {
      width: 11%;
    }
    .umbrella img {
      width: 19%;
      left: 19%;
      top: 36%;
      position: absolute;
    }
    .hotChocolate img {
      width: 16%;
      left: 40%;
      top: 27%;
      position: absolute;
    }
    .shiver img {
      width: 16%;
      left: 40%;
      top: 27%;
      position: absolute;
    }
    .icicles img {
      width: 20%;
      left: 55%;
      top: 6%;
      position: absolute;
      z-index: 1;
    }
    .ski img {
      top: -8%;
    }
    .iceSkating img {
      top: 38%;
    }
    .hen img {
      width: 16.5%;
      height: 30%;
      left: 24%;
      top: 69%;
      position: absolute;
    }
    .hayButton img {
      top: 35%;
    }
    .bucketButton img {
      top: 41%;
    }
    .barnButton img {
      top: 15%;
    }
    .roosterButton img {
      top: 46%;
    }
    .cowButton img {
      top: 54%;
    }
    .crowButton img {
      top: 16%;
    }
    .sheepButton img {
      top: 37%;
    }
    .duck img {
      width: 14%;
      left: 2%;
      top: 54%;
      position: absolute;
    }
    .hay img {
      width: 21%;
      left: 0;
      top: 26%;
      position: absolute;
    }
    .bucket img {
      top: 41%;
    }
    .egg img {
      width: 15%;
      left: 21%;
      top: 56%;
    }
    .chick img {
      top: 74%;
    }
    .rooster img {
      width: 15%;
      left: 33%;
      top: 44%;
      position: absolute;
    }
    .barn img {
      width: 48%;
      left: 7%;
      top: -5%;
      position: absolute;
    }
    .feed1 img {
      width: 43%;
      height: 70%;
      left: 21%;
      top: 30%;
      position: absolute;
    }
    .crow img {
      width: 14%;
      left: 49%;
      top: 17%;
      position: absolute;
      z-index: 1;
    }
    .sheep img {
      width: 26%;
      left: 65%;
      top: 17%;
      position: absolute;
    }
    .cow img {
      width: 30%;
      left: 66%;
      top: 50%;
      position: absolute;
    }
    .roll img {
      width: 32%;
      left: 1%;
      top: 51%;
      position: absolute;
    }
    .gallop img {
      width: 76%;
      left: 30%;
      top: 30%;
      position: absolute;
    }
    .tree img {
      left: 80%;
    }
    .tractorButton img {
      width: 6%;
      left: 6%;
      top: 26%;
      position: absolute;
    }
    .pig img {
      width: 32%;
      left: 1%;
      top: 52%;
      position: absolute;
    }
    .plough img {
      width: 52%;
      left: -2%;
      top: 9%;
      position: absolute;
    }
    .fenceButton img {
      width: 6%;
      left: 44%;
      top: 69%;
      position: absolute;
    }
    .gallopButton img {
      width: 6%;
      left: 91%;
      top: 55%;
      position: absolute;
    }
    .horse1 img {
      width: 35%;
      left: 65%;
      top: 42%;
      position: absolute;
    }
    .fence img {
      width: 116%;
      height: 55%;
      left: -9%;
      top: 36%;
      position: absolute;
    }
    .treeButton img {
      width: 5%;
      left: 86%;
      top: 12%;
      position: absolute;
    }
    .farmer img {
      width: 21%;
      left: 77%;
      top: 7%;
      position: absolute;
      z-index: 1;
    }
    .apple img {
      width: 23%;
      left: 48%;
      top: -13%;
      position: absolute;
    }
    .pick img {
      width: 28%;
      left: 57%;
      top: -5%;
      position: absolute;
      z-index: 1;
    }
    .iceCreamButton img {
      width: 9%;
      left: 41%;
      top: 11%;
      position: absolute;
    }
    .menuButton img {
      width: 6%;
      left: 89%;
      top: 36%;
      position: absolute;
    }
    .napkinButton img {
      width: 6%;
      left: 6%;
      top: 82%;
      position: absolute;
    }
    .juiceButton img {
      width: 5%;
      left: 15%;
      top: 62%;
      position: absolute;
    }
    .waiterButton img {
      width: 6%;
      left: 86%;
      top: 3%;
      position: absolute;
    }
    .pizzaButton img {
      width: 6%;
      left: 32%;
      top: 32%;
    }
    .noodlesButton img {
      top: 58%;
    }
    .forkButton img {
      top: 64%;
    }
    .knifeButton img {
      top: 66%;
    }
    .burger img {
      width: 16%;
      left: 68.5%;
      top: 62.5%;
      position: absolute;
    }
    .iceCream img {
      width: 12%;
      left: 40%;
      top: 10.5%;
      position: absolute;
      z-index: 1;
    }
    .menu img {
      width: 15.5%;
      left: 82%;
      top: 30%;
      position: absolute;
    }
    .plate img {
      width: 16%;
      left: 82%;
      top: 80%;
      position: absolute;
    }
    .napkin img {
      width: 24%;
      left: 8.5%;
      top: 64.5%;
      position: absolute;
    }
    .fork img {
      width: 10%;
      left: 35.5%;
      top: 63.5%;
      position: absolute;
    }
    .knife img {
      width: 9%;
      left: 41.5%;
      top: 67.5%;
      position: absolute;
    }
    .pizza img {
      width: 21%;
      left: 24%;
      top: 29%;
      position: absolute;
    }
    .noodles img {
      width: 17%;
      left: 20%;
      top: 44.5%;
      position: absolute;
    }
    .juice img {
      width: 13%;
      left: 4.5%;
      top: 50.5%;
      position: absolute;
    }
    .tea img {
      width: 14%;
      left: 50%;
      top: 59%;
      position: absolute;
    }
    .chicken img {
      width: 30%;
      left: 64%;
      top: 46%;
      position: absolute;
    }
    .riceButton img {
      width: 5%;
      left: 66%;
      top: 52.5%;
      position: absolute;
    }
    .rice img {
      width: 12%;
      left: 62%;
      top: 55%;
      position: absolute;
      z-index: 1;
    }
    .teaButton img {
      width: 5%;
      left: 58%;
      top: 71%;
      position: absolute;
    }
    .vegetablesButton img {
      width: 9%;
      left: 47.5%;
      top: 43.5%;
      position: absolute;
    }
    .vegetables img {
      width: 20%;
      left: 41%;
      top: 40.5%;
      position: absolute;
    }
    .spoon img {
      width: 13.3%;
      left: 33%;
      top: 60%;
      position: absolute;
      z-index: 1;
    }
    .chopsticksButton img {
      width: 10%;
      left: 22%;
      top: 92%;
      position: absolute;
    }
    .chopsticks img {
      width: 22%;
      left: 14%;
      top: 54%;
      position: absolute;
    }
    .fish1 img {
      width: 26%;
      left: 11.5%;
      top: 41%;
      position: absolute;
      z-index: 1;
    }
    .cup img {
      width: 12%;
      left: 2%;
      top: 70%;
      position: absolute;
    }
    .cupButton img {
      width: 5%;
      left: 6%;
      top: 68%;
      position: absolute;
    }
    .bowlButton img {
      width: 6%;
      left: 8%;
      top: 17.5%;
      position: absolute;
    }
    .bowl img {
      width: 12%;
      left: 4.5%;
      top: 18.5%;
      position: absolute;
    }
    .drinkButton img {
      width: 5%;
      left: 80.5%;
      top: 42.5%;
      position: absolute;
    }
    .drink img {
      width: 20%;
      left: 78%;
      top: 10%;
    }
    .eatButton img {
      top: 14.5%;
    }
    .eat img {
      width: 28%;
      left: 20%;
      top: 2%;
      position: absolute;
    }
    .milkButton img {
      width: 6%;
      left: 61.5%;
      top: 28.5%;
      position: absolute;
    }
    .milk img {
      width: 14%;
      left: 64.5%;
      top: 11%;
      position: absolute;
    }
    .scarf img {
      width: 47%;
      left: 48.5%;
      top: -4%;
      position: absolute;
    }
    .coat img {
      width: 16%;
      left: 30%;
      top: 29%;
      position: absolute;
    }
    .hibernate img {
      width: 17%;
      left: 2%;
      top: 69%;
      position: absolute;
    }
    .sled1Button img {
      width: 5%;
      left: 85%;
      top: 27%;
      position: absolute;
    }
    .sled1 img {
      width: 48%;
      left: 47%;
      top: -2%;
      position: absolute;
    }
    .snowman img {
      width: 23%;
      left: 72%;
      top: 37%;
      position: absolute;
      z-index: 1;
    }
    .fall img {
      width: 15%;
      left: 50%;
      top: -11%;
      position: absolute;
      z-index: 1;
    }
    .cold1Button img {
      width: 6%;
      left: 46%;
      top: 47%;
      position: absolute;
    }
    .skates img {
      width: 11%;
      left: 54%;
      top: 35%;
      position: absolute;
      z-index: 1;
    }
    .coatButton img {
      width: 6%;
      left: 27%;
      top: 60%;
      position: absolute;
    }
    .cold1 img {
      width: 16%;
      left: 30%;
      top: 29%;
      position: absolute;
    }
    .hibernateButton img {
      width: 8%;
      left: 3%;
      top: 70%;
      position: absolute;
    }
    .animals img {
      width: 31%;
      left: 2%;
      top: 66%;
      position: absolute;
    }
    .fireplace img {
      width: 26%;
      left: 3%;
      top: 18%;
      position: absolute;
    }
    .fireplace img {
      width: 24%;
      left: 4%;
      top: 21%;
      position: absolute;
    }
    .warmButton img {
      width: 5%;
      left: 7%;
      top: 25%;
      position: absolute;
    }
    .warm img {
      width: 24%;
      left: 4%;
      top: 21%;
      position: absolute;
    }
    .elf1 img {
      width: 17.5%;
      height: 41%;
      left: 79%;
      top: 33%;
      position: absolute;
    }
    .stockingButton img {
      width: 8%;
      left: 5%;
      top: 51%;
      position: absolute;
    }
    .stockingButton img {
      width: 8%;
      left: 5%;
      top: 51%;
      position: absolute;
    }
    .stocking img {
      width: 11%;
      left: 2%;
      top: 57%;
      position: absolute;
      z-index: 1;
    }
    .sleighButton img {
      width: 7%;
      left: 17%;
      top: 82%;
      position: absolute;
    }
    .sleigh img {
      width: 38%;
      left: 1%;
      top: 10%;
      position: absolute;
    }
    .reindeer img {
      width: 9%;
      left: 43%;
      top: 54%;
      position: absolute;
    }
    .santaClausButton img {
      width: 10%;
      left: 53%;
      top: 22%;
      position: absolute;
    }
    .santaClaus img {
      width: 21%;
      left: 34%;
      top: 17%;
      position: absolute;
    }
    .bells img {
      width: 14%;
      left: 56%;
      top: 60%;
      position: absolute;
    }
    .cracker img {
      width: 40%;
      left: 56%;
      height: 29%;
      top: 40%;
      position: absolute;
    }
    .babyButton img {
      width: 7%;
      left: 8%;
      top: 55%;
      position: absolute;
    }
    .caring img {
      width: 48%;
      height: 53%;
      left: 53%;
      top: 24%;
      position: absolute;
    }
    .old img {
      width: 34%;
      height: 38%;
      left: 31%;
      top: 8%;
      position: absolute;
    }
    .young img {
      width: 19%;
      height: 65%;
      left: 9%;
      top: 18%;
      position: absolute;
    }
    .brother img {
      width: 22%;
      left: 35%;
      top: 49%;
      position: absolute;
    }
    .sisterButton img {
      width: 8%;
      left: 87%;
      top: 32%;
      position: absolute;
    }
    .sister img {
      width: 20%;
      left: 79%;
      top: 27%;
      position: absolute;
    }
    .father img {
      width: 26%;
      left: 59%;
      top: 17%;
      position: absolute;
    }
    .grandma img {
      width: 18%;
      left: 48%;
      height: 34%;
      top: 12%;
      position: absolute;
    }
    .grandpa img {
      width: 14%;
      left: 31%;
      top: 8%;
      position: absolute;
    }
    .mother img {
      width: 8%;
      left: 18%;
      top: 24%;
      position: absolute;
    }
    .baby img {
      width: 8%;
      left: 8%;
      top: 63%;
      position: absolute;
    }
    .friends img {
      width: 38%;
      left: 62%;
      height: 58%;
      top: 26%;
      position: absolute;
    }
    .cake img {
      width: 36%;
      left: 45%;
      top: 42%;
      position: absolute;
    }
    .balloons img {
      width: 20%;
      left: 84%;
      top: -5%;
      position: absolute;
    }
    .presents img {
      width: 39%;
      height: 50%;
      left: 26%;
      top: 52%;
      position: absolute;
      z-index: 1;
    }
    .card img {
      width: 29%;
      left: 13%;
      top: 63%;
      position: absolute;
      z-index: 2;
    }
    .candles img {
      width: 14%;
      left: 85%;
      top: 74%;
      position: absolute;
    }
    .blow1 img {
      width: 12%;
      left: 87%;
      top: 40.6%;
      position: absolute;
    }
    .partyHat img {
      width: 17%;
      left: 56%;
      top: 17%;
      position: absolute;
    }
    .sing img {
      width: 21%;
      left: 38%;
      top: 13.8%;
      position: absolute;
    }
    .play img {
      width: 13%;
      left: 1%;
      top: 39%;
      transform: rotate(5deg);
      position: absolute;
      z-index: 3;
    }
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
      left: 0;
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
      left: 0;
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
      top: 0 !important;
      left: 0;
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
      top: 0;
      position: absolute;

      img {
        width: 400%;
        top: 131%;
        left: 0;
        position: absolute;
      }
    }

    .cactusbutton {
      height: 40%;
      width: 10%;
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
      position: absolute;

      img {
        width: 340%;
        top: -2%;
        left: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
    .TV img {
      width: 13%;
      height: 35%;
      left: 4%;
      top: 20%;
      position: absolute;
    }
    .oven img {
      width: 17%;
      left: 80.5%;
      top: 23%;
      position: absolute;
    }
    .TVButton img {
      width: 6%;
      left: 7%;
      top: 12%;
      position: absolute;
    }
    .videoGameButton img {
      width: 11%;
      left: 4%;
      top: 47%;
      position: absolute;
    }
    .listen2Button img {
      width: 8%;
      left: 30%;
      top: 16%;
      position: absolute;
    }
    .danceButton img {
      width: 8%;
      left: 21%;
      top: 25%;
      position: absolute;
    }
    .pianoButton img {
      width: 8%;
      left: 61%;
      top: 56%;
      position: absolute;
    }
    .ovenButton img {
      width: 7%;
      left: 78%;
      top: 16%;
      position: absolute;
    }
    .bake2Button img {
      width: 7%;
      left: 72%;
      top: 45%;
      position: absolute;
    }
    .book2Button img {
      width: 6%;
      left: 4%;
      top: 85%;
      position: absolute;
    }
    .read3Button img {
      width: 7%;
      left: 27%;
      top: 67%;
      position: absolute;
    }
    .pictureButton img {
      width: 8%;
      left: 31%;
      top: 82%;
      position: absolute;
    }
    .paintbrushButton img {
      width: 11%;
      left: 53%;
      top: 82%;
      position: absolute;
    }
    .cookiesButton img {
      width: 9%;
      left: 82%;
      top: 80%;
      position: absolute;
    }
    .dance img {
      width: 16%;
      left: 19.5%;
      top: 29%;
      position: absolute;
    }
    .listen2 img {
      width: 17%;
      left: 39.5%;
      top: 19%;
      position: absolute;
      z-index: 1;
    }
    .piano img {
      width: 25%;
      left: 45.5%;
      top: 14%;
      position: absolute;
    }
    .bake2 img {
      width: 25%;
      left: 72.5%;
      top: 19%;
      position: absolute;
    }
    .book2 img {
      width: 16%;
      left: -1.5%;
      top: 75%;
      position: absolute;
    }
    .read3 img {
      width: 13%;
      left: 13.5%;
      top: 60%;
      position: absolute;
    }
    .picture img {
      width: 13%;
      left: 28.5%;
      top: 56%;
      position: absolute;
    }
    .paintbrush img {
      width: 18%;
      left: 45.5%;
      top: 63%;
      position: absolute;
    }
    .cookies img {
      width: 28%;
      left: 72.5%;
      top: 59%;
      position: absolute;
    }
    .chef2 img {
      width: 13%;
      left: 85.5%;
      top: 61%;
      position: absolute;
    }
    .cook img {
      width: 19%;
      left: 81.5%;
      top: 61%;
      position: absolute;
    }
    .mailPerson img {
      width: 14%;
      left: 61%;
      top: 58%;
      position: absolute;
    }
    .letters img {
      width: 10%;
      left: 70%;
      top: 87%;
      position: absolute;
    }
    .vet img {
      width: 24%;
      left: 35%;
      top: 51%;
      position: absolute;
    }
    .doctor2 img {
      width: 10%;
      left: 1%;
      top: 61%;
      position: absolute;
    }
    .nurse img {
      width: 10%;
      left: 10%;
      top: 63%;
      position: absolute;
    }
    .ambulance2 img {
      width: 8%;
      left: 22%;
      top: 59%;
      position: absolute;
    }
    .fireFighter img {
      width: 35%;
      height: 40%;
      left: 65.5%;
      top: 1%;
      position: absolute;
    }
    .help img {
      width: 11%;
      left: 44%;
      top: 6%;
      position: absolute;
    }
    .policeman img {
      width: 16%;
      left: 29%;
      top: 12%;
      position: absolute;
    }
    .teacher2 img {
      width: 15%;
      left: 2%;
      top: 10%;
      position: absolute;
    }
    .waitButton img {
      width: 6%;
      left: 86%;
      top: 87%;
      position: absolute;
    }
    .park img {
      width: 79.5%;
      height: 41.5%;
      left: -11%;
      top: -1.5%;
      position: absolute;
    }
    .parkButton img {
      width: 6%;
      left: 20%;
      top: 12%;
      position: absolute;
    }
    .hospitalButton img {
      width: 8%;
      left: 61%;
      top: 14%;
      position: absolute;
    }
    .schoolButton img {
      width: 8%;
      left: 10%;
      top: 56%;
      position: absolute;
    }
    .libraryButton img {
      width: 7%;
      left: 34%;
      top: 35%;
      position: absolute;
    }
    .fireStationButton img {
      width: 10%;
      left: 50%;
      top: 36%;
      position: absolute;
    }
    .policeStationButton img {
      width: 13%;
      left: 68%;
      top: 56%;
      position: absolute;
    }
    .restaurantButton img {
      width: 11%;
      left: 18%;
      top: 73%;
      position: absolute;
    }
    .bakeryButton img {
      width: 7%;
      left: 40%;
      top: 87%;
      position: absolute;
    }
    .shopButton img {
      width: 6%;
      left: 58%;
      top: 88%;
      position: absolute;
    }
    .busStopButton img {
      width: 9%;
      left: 84%;
      top: 72%;
      position: absolute;
    }
    .hospital img {
      width: 55%;
      left: 51%;
      top: -11%;
      position: absolute;
    }
    .school img {
      width: 41%;
      left: -6%;
      top: 29%;
      position: absolute;
    }
    .visit img {
      width: 30%;
      left: 22%;
      top: 35%;
      position: absolute;
    }
    .library img {
      width: 30%;
      left: 22%;
      top: 35%;
      position: absolute;
    }
    .fireStation img {
      width: 22%;
      left: 46%;
      top: 38%;
      position: absolute;
      z-index: 1;
    }
    .policeStation img {
      width: 37%;
      left: 64%;
      top: 35%;
      position: absolute;
      z-index: 1;
    }
    .restaurant img {
      width: 60%;
      left: -14%;
      top: 59%;
      position: absolute;
    }
    .bakery img {
      width: 30%;
      left: 27%;
      top: 60%;
      position: absolute;
      z-index: 1;
    }
    .shop img {
      width: 20%;
      left: 51%;
      top: 61%;
      position: absolute;
      z-index: 1;
    }
    .wait img {
      width: 40%;
      height: 28%;
      left: 64%;
      top: 67%;
      position: absolute;
    }
    .busStop img {
      width: 40%;
      height: 50%;
      left: 64%;
      top: 55%;
      position: absolute;
    }
    .batButton img {
      width: 8%;
      left: 11%;
      top: 6%;
      position: absolute;
    }
    .lizard2Button img {
      width: 8%;
      left: 19%;
      top: 34%;
      position: absolute;
    }
    .jaguarButton img {
      width: 8%;
      left: 13%;
      top: 52%;
      position: absolute;
    }
    .pounceButton img {
      width: 10%;
      left: 24%;
      top: 65%;
      position: absolute;
    }
    .slothButton img {
      width: 8%;
      left: 47%;
      top: 14%;
      position: absolute;
    }
    .snake2Button img {
      width: 8%;
      left: 51%;
      top: 31%;
      position: absolute;
    }
    .swing3Button img {
      width: 8%;
      left: 74%;
      top: 6%;
      position: absolute;
    }
    .slitherButton img {
      width: 8%;
      left: 65%;
      top: 44%;
      position: absolute;
    }
    .parrot2Button img {
      width: 8%;
      left: 86%;
      top: 36%;
      position: absolute;
    }
    .frogButton img {
      width: 8%;
      left: 13%;
      top: 87%;
      position: absolute;
    }
    .crocodile2Button img {
      width: 12%;
      left: 55%;
      top: 75%;
      position: absolute;
    }
    .crawl2Button img {
      width: 8%;
      left: 89%;
      top: 78%;
      position: absolute;
    }
    .bat img {
      width: 10%;
      left: 4%;
      top: 2%;
      position: absolute;
    }
    .sloth img {
      width: 30%;
      left: 22%;
      top: 1%;
      position: absolute;
    }
    .lizard2 img {
      width: 23%;
      left: -2%;
      top: 18%;
      position: absolute;
    }
    .pounce img {
      width: 50%;
      left: 19%;
      top: 39%;
      position: absolute;
    }
    .jaguar img {
      width: 50%;
      left: 19%;
      top: 39%;
      position: absolute;
    }
    .snake2 img {
      width: 20%;
      left: 47%;
      top: 32%;
      position: absolute;
    }
    .slither img {
      width: 20%;
      left: 47%;
      top: 32%;
      position: absolute;
    }
    .swing3 img {
      width: 30%;
      left: 55%;
      top: 0%;
      position: absolute;
    }
    .parrot2 img {
      width: 18%;
      left: 81%;
      top: 11%;
      position: absolute;
    }
    .frog img {
      width: 12%;
      left: 7%;
      top: 74%;
      position: absolute;
    }
    .crocodile2 img {
      width: 35%;
      left: 44%;
      top: 52%;
      position: absolute;
    }
    .crawl2 img {
      width: 15%;
      left: 85%;
      top: 52%;
      position: absolute;
    }
    .dolphinButton img {
      width: 11%;
      left: 10%;
      top: 11%;
      position: absolute;
    }
    .octopusButton img {
      width: 11%;
      left: 2%;
      top: 29%;
      position: absolute;
    }
    .chaseButton img {
      width: 8%;
      left: 33%;
      top: 41%;
      position: absolute;
    }
    .sharkButton img {
      width: 8%;
      left: 43%;
      top: 41%;
      position: absolute;
    }
    .seahorseButton img {
      width: 11%;
      left: 13%;
      top: 69%;
      position: absolute;
    }
    .starfishButton img {
      width: 11%;
      left: 14%;
      top: 91%;
      position: absolute;
    }
    .jellyfishButton img {
      width: 11%;
      left: 34%;
      top: 67%;
      position: absolute;
    }
    .wiggle2Button img {
      width: 8%;
      left: 39%;
      top: 88%;
      position: absolute;
    }
    .sprayButton img {
      width: 8%;
      left: 74%;
      top: 16%;
      position: absolute;
    }
    .whaleButton img {
      width: 8%;
      left: 81%;
      top: 34%;
      position: absolute;
    }
    .turtle2Button img {
      width: 8%;
      left: 80%;
      top: 86%;
      position: absolute;
    }
    .hideButton img {
      width: 8%;
      left: 61%;
      top: 94%;
      position: absolute;
    }
    .seahorse img {
      width: 15%;
      left: 14%;
      top: 71%;
      position: absolute;
    }
    .dolphin img {
      width: 45%;
      left: 11%;
      top: 1%;
      position: absolute;
    }
    .octopus img {
      width: 25%;
      left: 0%;
      top: 31%;
      position: absolute;
    }
    .shark img {
      width: 45%;
      left: 15%;
      top: 42%;
      position: absolute;
    }
    .chase img {
      width: 45%;
      left: 15%;
      top: 42%;
      position: absolute;
    }
    .starfish img {
      width: 13%;
      left: 8%;
      top: 77%;
      position: absolute;
    }
    .jellyfish img {
      width: 22%;
      left: 38%;
      top: 58%;
      position: absolute;
    }
    .wiggle2 img {
      width: 22%;
      left: 38%;
      top: 58%;
      position: absolute;
    }
    .spray img {
      width: 45%;
      left: 48%;
      top: 11%;
      position: absolute;
    }
    .whale img {
      width: 45%;
      left: 48%;
      top: 11%;
      position: absolute;
    }
    .turtle2 img {
      width: 35%;
      left: 57%;
      top: 68%;
      position: absolute;
    }
    .hide img {
      width: 12%;
      left: 56%;
      top: 86%;
      position: absolute;
      z-index: 1;
    }
    .sandcastleButton img {
      width: 11%;
      left: 6%;
      top: 29%;
      position: absolute;
    }
    .shovel2Button img {
      width: 10%;
      left: 37%;
      top: 15%;
      position: absolute;
    }
    .digButton img {
      width: 9%;
      left: 36%;
      top: 25%;
      position: absolute;
    }
    .bucket2Button img {
      width: 10%;
      left: 31%;
      top: 35%;
      position: absolute;
    }
    .read2Button img {
      width: 9%;
      left: 59%;
      top: 12%;
      position: absolute;
    }
    .rodButton img {
      width: 9%;
      left: 51%;
      top: 31%;
      position: absolute;
    }
    .seashellButton img {
      width: 10%;
      left: 83%;
      top: 40%;
      position: absolute;
    }
    .seashell img {
      width: 6%;
      left: 85%;
      top: 33%;
      position: absolute;
    }
    .swim2Button img {
      width: 10%;
      left: 35%;
      top: 57%;
      position: absolute;
    }
    .boatButton img {
      width: 10%;
      left: 57%;
      top: 54%;
      position: absolute;
    }
    .paddleButton img {
      width: 11%;
      left: 77%;
      top: 78%;
      position: absolute;
    }
    .snorkelButton img {
      width: 10%;
      left: 5%;
      top: 65%;
      position: absolute;
    }
    .gogglesButton img {
      width: 11%;
      left: 7%;
      top: 88%;
      position: absolute;
    }
    .sandcastle img {
      width: 30%;
      left: 5%;
      top: 11%;
      position: absolute;
    }
    .dig img {
      width: 15%;
      left: 35%;
      top: 11%;
      position: absolute;
    }
    .shovel2 img {
      width: 15%;
      left: 35%;
      top: 11%;
      position: absolute;
    }
    .bucket2 img {
      width: 12%;
      left: 30%;
      top: 27%;
      position: absolute;
    }
    .swim2 img {
      width: 40%;
      left: 5%;
      top: 40%;
      position: absolute;
    }
    .rod img {
      width: 19%;
      left: 43%;
      top: 20%;
      position: absolute;
    }
    .read2 img {
      width: 24%;
      left: 59%;
      top: 11%;
      position: absolute;
    }
    .boat img {
      width: 40%;
      left: 52%;
      top: 49%;
      position: absolute;
    }
    .paddle img {
      width: 40%;
      left: 52%;
      top: 49%;
      position: absolute;
    }
    .climb2Button img {
      width: 8%;
      left: 49%;
      top: 30%;
      position: absolute;
    }
    .jungleGymButton img {
      width: 12%;
      left: 46%;
      top: 12%;
      position: absolute;
    }
    .jogButton img {
      width: 8%;
      left: 9%;
      top: 10%;
      position: absolute;
    }
    .swing2Button img {
      width: 9%;
      left: 23%;
      top: 27%;
      position: absolute;
    }
    .bike2Button img {
      width: 8%;
      left: 7%;
      top: 56%;
      position: absolute;
    }
    .picnic2Button img {
      width: 8%;
      left: 47%;
      top: 55%;
      position: absolute;
    }
    .kite2Button img {
      width: 8%;
      left: 11%;
      top: 87%;
      position: absolute;
    }
    .cameraButton img {
      width: 9%;
      left: 44%;
      top: 77%;
      position: absolute;
    }
    .kick2Button img {
      width: 7%;
      left: 78%;
      top: 13%;
      position: absolute;
    }
    .seesaw2Button img {
      width: 9%;
      left: 82%;
      top: 34%;
      position: absolute;
    }
    .brush3Button img {
      width: 8%;
      left: 84%;
      top: 59%;
      position: absolute;
    }
    .paintButton img {
      width: 9%;
      left: 80%;
      top: 78%;
      position: absolute;
    }
    .jungleGym img {
      width: 30%;
      left: 38%;
      top: 14%;
      position: absolute;
    }
    .brush3 img {
      width: 25%;
      left: 67%;
      top: 49%;
      position: absolute;
    }
    .bike2 img {
      width: 26%;
      left: 5%;
      top: 34%;
      position: absolute;
      z-index: 1;
    }
    .camera img {
      width: 14%;
      left: 41%;
      top: 67%;
      position: absolute;
      z-index: 1;
    }
    .kite2 img {
      width: 24%;
      left: 14%;
      top: 68%;
      position: absolute;
    }
    .picnic2 img {
      width: 52%;
      left: 7%;
      top: 43%;
      position: absolute;
    }
    .swing2 img {
      width: 17%;
      left: 18%;
      top: 10%;
      position: absolute;
    }
    .jog img {
      width: 16%;
      left: 7%;
      top: 14%;
      position: absolute;
    }
    .climb2 img {
      width: 30%;
      left: 38%;
      top: 14%;
      position: absolute;
    }
    .kick2 img {
      width: 29%;
      left: 68%;
      top: 11%;
      position: absolute;
    }
    .seesaw2 img {
      width: 18%;
      left: 68%;
      top: 26%;
      position: absolute;
    }
    .paint img {
      width: 26%;
      left: 67%;
      top: 48%;
      position: absolute;
    }
    .sleep2 img {
      width: 40%;
      left: 31%;
      top: 8%;
      position: absolute;
    }
    .sleep2Button img {
      width: 9%;
      left: 46%;
      top: 31%;
      position: absolute;
    }
    .run2Button img {
      width: 6%;
      left: 10%;
      top: 35%;
      position: absolute;
    }
    .doctorButton img {
      width: 9%;
      left: 70%;
      top: 27%;
      position: absolute;
    }
    .water2Button img {
      width: 8%;
      left: 44%;
      top: 56%;
      position: absolute;
    }
    .germsButton img {
      width: 8%;
      left: 88%;
      top: 35%;
      position: absolute;
    }
    .vegetables2Button img {
      width: 12%;
      left: 56%;
      top: 75%;
      position: absolute;
    }
    .sweetsButton img {
      width: 8%;
      left: 51%;
      top: 89%;
      position: absolute;
    }
    .brush2Button img {
      width: 7%;
      left: 34%;
      top: 88%;
      position: absolute;
    }
    .teethButton img {
      width: 7%;
      left: 20%;
      top: 79%;
      position: absolute;
    }
    .soapButton img {
      width: 7%;
      left: 14%;
      top: 87%;
      position: absolute;
    }
    .soap img {
      width: 8%;
      left: 13%;
      top: 89%;
      position: absolute;
      z-index: 1;
    }
    .wash2Button img {
      width: 7%;
      left: 2%;
      top: 85%;
      position: absolute;
    }
    .germs img {
      width: 23%;
      left: 77%;
      top: 13%;
      position: absolute;
    }
    .doctor img {
      width: 29%;
      left: 64%;
      top: 27%;
      position: absolute;
    }
    .water2 img {
      width: 21%;
      left: 38%;
      top: 50%;
      position: absolute;
    }
    .fruit img {
      width: 32%;
      left: 67%;
      top: 59%;
      position: absolute;
    }
    .vegetables2 img {
      width: 34%;
      left: 44%;
      top: 56%;
      position: absolute;
      z-index: 1;
    }
    .sweets img {
      width: 27%;
      left: 34%;
      top: 75%;
      position: absolute;
      z-index: 2;
    }
    .run2 img {
      width: 33%;
      left: 9%;
      top: 24%;
      position: absolute;
    }
    .teeth img {
      width: 28%;
      left: 18%;
      top: 59%;
      position: absolute;
    }
    .brush2 img {
      width: 28%;
      left: 18%;
      top: 59%;
      position: absolute;
    }
    .wash2 img {
      width: 25%;
      left: 0%;
      top: 54%;
      position: absolute;
    }
    .mouthButton img {
      width: 8%;
      left: 47%;
      top: 86%;
      position: absolute;
    }
    .earButton img {
      width: 7%;
      left: 50%;
      top: 62%;
      position: absolute;
    }
    .noseButton img {
      width: 8%;
      left: 47%;
      top: 42%;
      position: absolute;
    }
    .eyesButton img {
      width: 8%;
      left: 50%;
      top: 18%;
      position: absolute;
    }
    .mouth img {
      width: 17%;
      left: 42%;
      top: 70%;
      position: absolute;
    }
    .ear img {
      width: 17%;
      left: 45%;
      top: 47%;
      position: absolute;
    }
    .nose img {
      width: 17%;
      left: 42%;
      top: 27%;
      position: absolute;
    }
    .eyes img {
      width: 17%;
      left: 45%;
      top: 3%;
      position: absolute;
    }
    .hairButton img {
      width: 8%;
      left: 62%;
      top: 27%;
      position: absolute;
    }
    .eat2Button img {
      width: 8%;
      left: 87%;
      top: 27%;
      position: absolute;
    }
    .walk2Button img {
      width: 8%;
      left: 73%;
      top: 73%;
      position: absolute;
    }
    .feetButton img {
      width: 7%;
      left: 89%;
      top: 66%;
      position: absolute;
    }
    .feet img {
      width: 15%;
      left: 85%;
      top: 52%;
      position: absolute;
    }
    .feetButton img {
      width: 7%;
      left: 90%;
      top: 65%;
      position: absolute;
    }
    .legButton img {
      width: 7%;
      left: 9%;
      top: 76%;
      position: absolute;
    }
    .handButton img {
      width: 8%;
      left: 6%;
      top: 61%;
      position: absolute;
    }
    .lookButton img {
      width: 8%;
      left: 25%;
      top: 42%;
      position: absolute;
    }
    .smellButton img {
      width: 8%;
      left: 4%;
      top: 24%;
      position: absolute;
    }
    .hair img {
      width: 41%;
      left: 61%;
      top: 19%;
      position: absolute;
    }
    .eat2 img {
      width: 41%;
      left: 61%;
      top: 19%;
      position: absolute;
    }
    .walk2 img {
      width: 41%;
      left: 61%;
      top: 19%;
      position: absolute;
    }
    .smell img {
      width: 33%;
      left: 1%;
      top: 18%;
      position: absolute;
    }
    .hand img {
      width: 33%;
      left: 1%;
      top: 18%;
      position: absolute;
    }
    .look img {
      width: 33%;
      left: 1%;
      top: 18%;
      position: absolute;
    }
    .leg img {
      width: 33%;
      left: 1%;
      top: 18%;
      position: absolute;
    }
    .planet img {
      width: 66%;
      left: -3%;
      top: 29%;
      position: absolute;
    }
    .ufo img{
      width: 35%;
      left: 65%;
      top: 64%;
      position: absolute;
    }
    .sun img{
      width: 49%;
      left: -2%;
      top: 53%;
      position: absolute;
    }
    .spaceStationButton img {
      width: 15%;
      left: 31%;
      top: 22%;
      position: absolute;
    }
    .darkButton img {
      width: 8%;
      left: 8%;
      top: 9%;
      position: absolute;
    }
    .spaceButton img {
      width: 9%;
      left: 67%;
      top: 7%;
      position: absolute;
    }
    .moonButton img {
      width: 8%;
      left: 59%;
      top: 27%;
      position: absolute;
    }
    .planetButton img {
      width: 9%;
      left: 10%;
      top: 47%;
      position: absolute;
    }
    .earthButton img {
      width: 9%;
      left: 55%;
      top: 43%;
      position: absolute;
    }
    .brightButton img {
      width: 10%;
      left: 29%;
      top: 57%;
      position: absolute;
    }
    .sunButton img {
      width: 8%;
      left: 22%;
      top: 69%;
      position: absolute;
    }
    .asteroidButton img {
      width: 10%;
      left: 44%;
      top: 78%;
      position: absolute;
    }
    .starButton img {
      width: 8%;
      left: 81%;
      top: 48%;
      position: absolute;
    }
    .ufoButton img {
      width: 8%;
      left: 88%;
      top: 85%;
      position: absolute;
    }
    .alienButton img {
      width: 8%;
      left: 76%;
      top: 65%;
      position: absolute;
    }
    .space img {
      width: 60.5%;
      height: 60%;
      left: 44%;
      top: -3%;
      position: absolute;
    }
    .moon img {
      width: 6%;
      left: 53%;
      top: 26%;
      position: absolute;
      z-index: 1;
    }
    .spaceStation img {
      width: 25%;
      left: 22%;
      top: 23%;
      position: absolute;
    }
    .planet2 img {
      width: 10%;
      left: 10%;
      top: 38%;
      position: absolute;
    }
    .asteroid img {
      width: 20%;
      left: 44%;
      top: 56%;
      position: absolute;
    }
    .star img {
      width: 15%;
      left: 72%;
      top: 46%;
      position: absolute;
    }
    .dark img {
      width: 30%;
      left: 0%;
      top: 0%;
      position: absolute;
    }
    .alien img {
      width: 35%;
      left: 65%;
      top: 64%;
      position: absolute;
    }
    .bright img {
      width: 60%;
      left: -2%;
      top: 42%;
      position: absolute;
    }
    .helmet img {
      width: 26%;
      left: 58%;
      top: 32%;
      position: absolute;
    }
    .countdownButton img {
      width: 12%;
      left: 49%;
      top: 14%;
      position: absolute;
    }
    .exploreButton img {
      width: 9%;
      left: 80%;
      top: 28%;
      position: absolute;
    }
    .explore img {
      width: 13%;
      left: 84%;
      top: 27%;
      position: absolute;
    }
    .helmetButton img {
      width: 9%;
      left: 58%;
      top: 35%;
      position: absolute;
    }
    .astronautButton img {
      width: 10%;
      left: 58%;
      top: 61%;
      position: absolute;
    }
    .spaceSuit img {
      width: 9%;
      left: 86%;
      top: 45%;
      position: absolute;
      z-index: 1;
    }
    .spaceSuitButton img {
      width: 11%;
      left: 81%;
      top: 60%;
      position: absolute;
    }
    .astronaut img {
      width: 26%;
      left: 58%;
      top: 32%;
      position: absolute;
    }
    .scientist img {
      width: 17%;
      left: 41%;
      top: 59%;
      position: absolute;
    }
    .scientistButton img {
      width: 10%;
      left: 56%;
      top: 92%;
      position: absolute;
    }
    .radioButton img {
      width: 7%;
      left: 79%;
      top: 89%;
      position: absolute;
    }
    .radio img {
      width: 23%;
      left: 77%;
      top: 73%;
      position: absolute;
      z-index: 1;
    }
    .spaceStill img {
      width: 35%;
      height: 55%;
      left: 62%;
      top: 45%;
      position: absolute;
    }
    .fly3Button img {
      width: 5%;
      left: 20%;
      top: 4%;
      position: absolute;
    }
    .fly3 img {
      width: 17%;
      left: 3%;
      top: 3%;
      position: absolute;
    }
    .rocketButton img {
      width: 8%;
      left: 22%;
      top: 35%;
      position: absolute;
    }
    .fireButton img {
      width: 6%;
      left: 31%;
      top: 67%;
      position: absolute;
    }
    .blastOffButton img {
      width: 10%;
      left: 21%;
      top: 83%;
      position: absolute;
    }
    .fuelButton img {
      width: 6%;
      left: 8%;
      top: 83%;
      position: absolute;
    }
    .rocket img {
      width: 30.5%;
      left: 5.5%;
      top: 26.5%;
      position: absolute;
    }
    .fire img {
      width: 30.5%;
      left: 5.5%;
      top: 26.5%;
      position: absolute;
    }
    .blastOff img {
      width: 40%;
      left: 0%;
      top: 15%;
      position: absolute;
    }
    .fuel img {
      width: 37%;
      left: -2%;
      top: 28%;
      position: absolute;
    }
    .splash1Button img {
      width: 10%;
      left: 60%;
      top: 80%;
      position: absolute;
    }
    .rideButton img {
      width: 7%;
      left: 93%;
      top: 63%;
      position: absolute;
    }
    .waterSlideButton img {
      width: 13%;
      left: 78%;
      top: 45%;
      position: absolute;
    }
    .wavePoolButton img {
      width: 12%;
      left: 65%;
      top: 18%;
      position: absolute;
    }
    .lifeguardButton img {
      width: 9%;
      left: 18%;
      top: 18%;
      position: absolute;
    }
    .towelButton img {
      width: 7%;
      left: 28%;
      top: 34%;
      position: absolute;
    }
    .dryButton img {
      width: 6%;
      left: 25%;
      top: 56%;
      position: absolute;
    }
    .wetButton img {
      width: 6%;
      left: 48%;
      top: 53%;
      position: absolute;
    }
    .lifeguard img {
      width: 11%;
      left: 24%;
      top: 13%;
      position: absolute;
      z-index: 1;
    }
    .wet img {
      width: 12%;
      left: 37%;
      top: 34%;
      position: absolute;
      z-index: 1;
    }
    .towel img {
      width: 11%;
      left: 26%;
      top: 38%;
      position: absolute;
    }
    .dry img {
      width: 10%;
      left: 17%;
      top: 37%;
      position: absolute;
    }
    .swimsuitButton img {
      width: 11%;
      left: 35%;
      top: 78%;
      position: absolute;
    }
    .swimsuit img {
      width: 12%;
      left: 25%;
      top: 67%;
      position: absolute;
    }
    .lazyButton img {
      width: 10%;
      left: 3%;
      top: 29%;
      position: absolute;
    }
    .lazy img {
      width: 12%;
      left: 1%;
      top: 32%;
      position: absolute;
    }
    .tubeButton img {
      width: 7%;
      left: 11%;
      top: 56%;
      position: absolute;
    }
    .tube img {
      width: 14%;
      left: 2%;
      top: 54%;
      position: absolute;
    }
    .floatButton img {
      width: 7%;
      left: 15%;
      top: 80%;
      position: absolute;
    }
    .float img {
      width: 22%;
      left: 3%;
      top: 77%;
      position: absolute;
    }
    .cottonCandy img {
      width: 13%;
      left: 37%;
      top: 69%;
      position: absolute;
      z-index: 1;
    }
    .popcornButton img {
      width: 10%;
      left: 52%;
      top: 91%;
      position: absolute;
    }
    .still4 img {
      width: 6%;
      left: 54%;
      top: 85%;
      position: absolute;
      z-index: 1;
    }
    .popcorn img {
      width: 12%;
      left: 50%;
      top: 78%;
      position: absolute;
      z-index: 1;
    }
    .cottonCandyButton img {
      width: 14%;
      left: 36%;
      top: 81%;
      position: absolute;
    }
    .balloons1Button img {
      width: 10%;
      left: 65%;
      top: 80%;
      position: absolute;
    }
    .ferrisWheelButton img {
      width: 13%;
      left: 78%;
      top: 19%;
      position: absolute;
    }
    .carouselButton img {
      width: 11%;
      left: 57%;
      top: 9%;
      position: absolute;
    }
    .rollerCoaster img {
      width: 58%;
      left: 0%;
      top: -4%;
      position: absolute;
    }
    .rollerCoasterButton img {
      width: 15%;
      left: 6%;
      top: 38%;
      position: absolute;
    }
    .scream1Button img {
      width: 10%;
      left: 6%;
      top: 20%;
      position: absolute;
    }
    .pool img {
      width: 40%;
      left: 26%;
      top: 42%;
      position: absolute;
    }
    .poolButton img {
      width: 7%;
      left: 58%;
      top: 44%;
      position: absolute;
    }
    .swim1Button img {
      width: 7%;
      left: 35%;
      top: 44%;
      position: absolute;
    }
    .ticket1Button img {
      width: 9%;
      left: 12%;
      top: 65%;
      position: absolute;
    }
    .queueButton img {
      width: 8%;
      left: 11%;
      top: 91%;
      position: absolute;
    }
    .bumper img {
      width: 36%;
      left: 67%;
      height: 40%;
      top: 37%;
      position: absolute;
    }
    .bumperButton img {
      width: 16%;
      left: 79%;
      top: 63%;
      position: absolute;
    }
    .balloons1 img {
      width: 14%;
      left: 61%;
      top: 56%;
      position: absolute;
      z-index: 1;
    }
    .still2 img {
      width: 25%;
      left: 45%;
      top: 66%;
      position: absolute;
    }
    .swim1 img {
      width: 45%;
      left: 24%;
      top: 41%;
      position: absolute;
    }
    .ticket1 img {
      width: 19%;
      left: 22%;
      top: 54%;
      position: absolute;
    }
    .still3 img {
      width: 25%;
      left: 0%;
      top: 53%;
      position: absolute;
    }
    .scream1 img {
      width: 55%;
      left: 0%;
      top: 0%;
      position: absolute;
      z-index: 1;
    }
    .queue img {
      width: 35%;
      left: -2%;
      top: 73%;
      position: absolute;
      z-index: 1;
    }
    .carousel img {
      width: 25%;
      left: 50%;
      top: 10%;
      position: absolute;
    }
    .ferrisWheel img {
      width: 34%;
      left: 73%;
      top: -6%;
      position: absolute;
    }
    .bumper img {
      width: 33%;
      left: 69%;
      top: 39%;
      position: absolute;
    }
    .still1 img {
      width: 23%;
      left: 76%;
      top: 73%;
      position: absolute;
    }
    .zipButton img {
      width: 5%;
      left: 34%;
      top: 37%;
      position: absolute;
    }
    .shirtButton img {
      width: 6%;
      left: 92%;
      top: 28%;
      position: absolute;
    }
    .jacketButton img {
      width: 8%;
      left: 18%;
      top: 17%;
      position: absolute;
    }
    .scarf1Button img {
      width: 7%;
      left: 56%;
      top: 66%;
      position: absolute;
    }
    .beltButton img {
      width: 6%;
      left: 44%;
      top: 78%;
      position: absolute;
    }
    .trousersButton img {
      width: 10%;
      left: 56%;
      top: 36%;
      position: absolute;
    }
    .sweaterButton img {
      width: 9%;
      left: 75%;
      top: 5%;
      position: absolute;
    }
    .socksButton img {
      width: 7%;
      left: 28%;
      top: 89%;
      position: absolute;
    }
    .mittensButton img {
      width: 9%;
      left: 62%;
      top: 91%;
      position: absolute;
    }
    .trousers img {
      width: 16%;
      left: 63%;
      top: 8%;
      position: absolute;
    }
    .sweater img {
      width: 18%;
      left: 69%;
      top: 8%;
      position: absolute;
      z-index: 2;
    }
    .shirt img {
      width: 21%;
      left: 73%;
      top: 8%;
      position: absolute;
      z-index: 3;
    }
    .zip img {
      width: 18%;
      left: 34%;
      top: 26%;
      position: absolute;
    }
    .jacket img {
      width: 26%;
      left: -1%;
      top: 9%;
      position: absolute;
    }
    .zip img {
      width: 17%;
      left: 34%;
      top: 28%;
      position: absolute;
    }
    .boots img {
      width: 15%;
      left: 1%;
      top: 71%;
      position: absolute;
    }
    .socks img {
      width: 19%;
      left: 12%;
      top: 77%;
      position: absolute;
    }
    .belt img {
      width: 14%;
      left: 40%;
      top: 82%;
      position: absolute;
    }
    .scarf1 img {
      width: 17%;
      left: 51%;
      top: 68%;
      position: absolute;
    }
    .mittens img {
      width: 13%;
      left: 53%;
      top: 76%;
      position: absolute;
    }
    .wrap img {
      width: 22%;
      left: 64%;
      top: 42%;
      position: absolute;
    }
    .tShirtButton img {
      width: 8%;
      left: 12%;
      top: 27%;
      position: absolute;
    }
    .tShirt img {
      width: 25%;
      left: 13%;
      top: 7%;
      position: absolute;
    }
    .shoesButton img {
      width: 7%;
      left: 38%;
      top: 58%;
      position: absolute;
    }
    .shoes img {
      width: 15%;
      left: 31%;
      top: 62%;
      position: absolute;
    }
    .bagButton img {
      width: 7%;
      left: 16%;
      top: 74%;
      position: absolute;
    }
    .bag img {
      width: 32%;
      left: 10%;
      top: 57%;
      position: absolute;
    }
    .sunglassesButton img {
      width: 12%;
      left: 50%;
      top: 80%;
      position: absolute;
    }
    .sunglasses img {
      width: 16%;
      left: 39%;
      top: 72%;
      position: absolute;
    }
    .watch1Button img {
      width: 8%;
      left: 27%;
      top: 92%;
      position: absolute;
    }
    .watch1 img {
      width: 26%;
      left: 23%;
      top: 79%;
      position: absolute;
    }
    .dressButton img {
      width: 7%;
      left: 39%;
      top: 40%;
      position: absolute;
    }
    .skirtButton img {
      width: 6%;
      left: 52%;
      top: 31%;
      position: absolute;
    }
    .sandalsButton img {
      width: 8%;
      left: 51%;
      top: 61%;
      position: absolute;
    }
    .sandals img {
      width: 15%;
      left: 48%;
      top: 61%;
      position: absolute;
    }
    .skirt img {
      width: 15%;
      left: 47%;
      top: 10%;
      position: absolute;
    }
    .wearButton img {
      width: 7%;
      left: 72%;
      top: 30%;
      position: absolute;
    }
    .wear img {
      width: 18%;
      left: 58%;
      top: 19%;
      position: absolute;
    }
    .hatButton img {
      width: 6%;
      left: 88%;
      top: 38%;
      position: absolute;
    }
    .hat img {
      width: 18%;
      left: 82%;
      top: 38%;
      position: absolute;
    }
    .shortsButton img {
      width: 8%;
      left: 89%;
      top: 70%;
      position: absolute;
    }
    .shorts img {
      width: 18%;
      left: 83%;
      top: 50%;
      position: absolute;
    }
    .tieButton img {
      width: 6%;
      left: 78%;
      top: 92%;
      position: absolute;
    }
    .tie img {
      width: 21%;
      left: 66%;
      top: 63%;
      position: absolute;
    }
    .butterfly2Button img {
      width: 9%;
      left: 86%;
      top: 24%;
      position: absolute;
    }
    .fly2Button img {
      width: 6%;
      left: 68%;
      top: 11%;
      position: absolute;
    }
    .mosquitoButton img {
      width: 9%;
      left: 56%;
      top: 31%;
      position: absolute;
    }
    .fireflyButton img {
      width: 7%;
      left: 19%;
      top: 60%;
      position: absolute;
    }
    .buzzButton img {
      width: 6%;
      left: 32%;
      top: 38%;
      position: absolute;
    }
    .hiveButton img {
      width: 6%;
      left: 34%;
      top: 18%;
      position: absolute;
    }
    .stingButton img {
      width: 7%;
      left: 12%;
      top: 28%;
      position: absolute;
    }
    .dragonflyButton img {
      width: 9%;
      left: 4%;
      top: 48%;
      position: absolute;
    }
    .wingsButton img {
      width: 8%;
      left: 3%;
      top: 66%;
      position: absolute;
    }
    .ladybugButton img {
      width: 10%;
      left: 20%;
      top: 86%;
      position: absolute;
    }
    .flowerButton img {
      width: 9%;
      left: 52%;
      top: 67%;
      position: absolute;
    }
    .beeButton img {
      width: 6%;
      left: 78%;
      top: 78%;
      position: absolute;
    }
    .butterfly2 img {
      width: 20%;
      left: 72%;
      top: 4%;
      position: absolute;
    }
    .buzz img {
      width: 20%;
      left: 26%;
      top: 39%;
      position: absolute;
    }
    .sting img {
      width: 29%;
      left: -1%;
      top: 14%;
      position: absolute;
    }
    .dragonfly img {
      width: 20%;
      left: 1%;
      top: 51%;
      position: absolute;
    }
    .hive img {
      width: 15%;
      left: 38%;
      top: 8%;
      position: absolute;
    }
    .firefly img {
      width: 13%;
      left: 24%;
      top: 53%;
      z-index: 1;
      position: absolute;
    }
    .mosquito img {
      width: 10%;
      left: 57%;
      top: 35%;
      position: absolute;
    }
    .ladybug img {
      width: 22%;
      left: 2%;
      top: 68%;
      position: absolute;
    }
    .bee img {
      width: 17%;
      left: 63%;
      top: 66%;
      position: absolute;
      z-index: 1;
    }
    .flower img {
      width: 75%;
      left: 25%;
      top: 53%;
      position: absolute;
    }
    .leaf img {
      width: 32%;
      left: 32%;
      top: 27%;
      position: absolute;
    }
    .webButton img {
      width: 7%;
      left: 5%;
      top: 30%;
      position: absolute;
    }
    .spiderButton img {
      width: 9%;
      left: 10%;
      top: 13%;
      position: absolute;
    }
    .crawlButton img {
      width: 9%;
      left: 33%;
      top: 21%;
      position: absolute;
    }
    .leafButton img {
      width: 8%;
      left: 44%;
      top: 32%;
      position: absolute;
    }
    .mantisButton img {
      width: 8%;
      left: 49%;
      top: 57%;
      position: absolute;
    }
    .feelersButton img {
      width: 9%;
      left: 23%;
      top: 74%;
      position: absolute;
    }
    .antButton img {
      width: 6%;
      left: 43%;
      top: 81%;
      position: absolute;
    }
    .munchButton img {
      width: 9%;
      left: 58%;
      top: 28%;
      position: absolute;
    }
    .caterpillarButton img {
      width: 10%;
      left: 79%;
      top: 22%;
      position: absolute;
    }
    .snailButton img {
      width: 8%;
      left: 66%;
      top: 59%;
      position: absolute;
    }
    .wormButton img {
      width: 8%;
      left: 83%;
      top: 71%;
      position: absolute;
    }
    .wiggleButton img {
      width: 8%;
      left: 88%;
      top: 88%;
      position: absolute;
    }
    .crawl img {
      width: 45%;
      left: 0%;
      top: -2%;
      position: absolute;
    }
    .spider img {
      width: 40%;
      left: 2%;
      top: 1%;
      position: absolute;
      z-index: 1;
    }
    .web img {
      width: 45%;
      left: 0%;
      top: -2%;
      position: absolute;
    }
    .mantis img {
      width: 17%;
      left: 38%;
      top: 51%;
      position: absolute;
    }
    .feelers img {
      width: 10%;
      left: 22%;
      top: 78%;
      position: absolute;
    }
    .ant img {
      width: 13%;
      left: 33%;
      top: 71%;
      position: absolute;
    }
    .caterpillar img {
      width: 26%;
      left: 66%;
      top: 24%;
      position: absolute;
    }
    .snail img {
      width: 17%;
      left: 59%;
      top: 62%;
      position: absolute;
    }
    .wiggle img {
      top: 74%;
    }

    .slowButton img {
      width: 5%;
      left: 78%;
      top: 20%;
      position: absolute;
    }
    .fastButton img {
      width: 6%;
      left: 26%;
      top: 19%;
      position: absolute;
    }
    .trainButton img {
      width: 6%;
      left: 26%;
      top: 25%;
      position: absolute;
    }
    .stationButton img {
      width: 8%;
      left: 5%;
      top: 28%;
      position: absolute;
    }

    .helicopterButton img {
      width: 9%;
      left: 48%;
      top: 34%;
      position: absolute;
    }

    .fly1Button img {
      width: 4%;
      left: 48%;
      top: 29%;
      position: absolute;
    }

    .landButton img {
      width: 6%;
      left: 86%;
      top: 70%;
      position: absolute;
    }
    .suitcaseButton img {
      width: 7%;
      left: 86%;
      top: 75%;
      position: absolute;
    }
    .ticketButton img {
      width: 7%;
      left: 62%;
      top: 76%;
      position: absolute;
    }
    .airplaneButton img {
      width: 9%;
      left: 20%;
      top: 88%;
      position: absolute;
    }
    .helicopter img {
      width: 26%;
      left: 50%;
      top: 22%;
      position: absolute;
      z-index: 1;
    }
    .station img {
      width: 100%;
      left: 0%;
      top: 2%;
      position: absolute;
    }
    .slow img {
      width: 18%;
      left: 80%;
      top: 18%;
      position: absolute;
    }
    .airplane img {
      width: 24%;
      left: 6%;
      top: 66%;
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
      position: absolute;
      z-index: 2;
    }
    .land img {
      width: 110%;
      left: -7%;
      top: 41%;
      transform: rotate(-3.5deg);
      position: absolute;
    }
    .suitcase img {
      width: 30%;
      left: 66%;
      top: 57%;
    }
    .bus img {
      width: 48%;
      left: 10%;
      top: 26%;
      position: absolute;
    }
    .honk img {
      top: 46%;
    }
    .ferryButton img {
      width: 7%;
      left: 28%;
      top: 9%;
      position: absolute;
    }
    .tramButton img {
      width: 7%;
      left: 84%;
      top: 14%;
      position: absolute;
    }
    .driveButton img {
      width: 7%;
      left: 85%;
      top: 45%;
      position: absolute;
    }
    .honkButton img {
      width: 7%;
      left: 69%;
      top: 51%;
      position: absolute;
    }
    .busButton img {
      width: 7%;
      left: 45%;
      top: 38%;
      position: absolute;
    }
    .truckButton img {
      width: 8%;
      left: 54%;
      top: 49%;
      position: absolute;
    }
    .motorbikeButton img {
      width: 9%;
      left: 69%;
      top: 78%;
      position: absolute;
    }
    .walkButton img {
      width: 7%;
      left: 73%;
      top: 90%;
      position: absolute;
    }
    .bikeButton img {
      width: 6%;
    }
    .carButton img{
      width: 5%;
      left: 28%;
      top: 81%;
      position: absolute;
    }
    .trafficLightsButton img {
      width: 10%;
      left: 4%;
      top: 83%;
      position: absolute;
    }
    .ferry img {
      width: 25%;
      left: 6%;
      top: 12%;
      position: absolute;
      z-index: 2;
    }
    .stopButton img {
      width: 6%;
      left: 3%;
      top: 38%;
      position: absolute;
    }
    .stop img {
      width: 56%;
      left: 1%;
      top: 23.5%;
      position: absolute;
      z-index: 1;
    }
    .tram img {
      width: 100%;
      left: 0%;
      top: 18%;
      position: absolute;
    }
    .truck img {
      width: 50%;
      left: 15%;
      top: 40%;
      position: absolute;
      z-index: 2;
    }
    .motorbike img {
      width: 31%;
      left: 51%;
      top: 55%;
      position: absolute;
    }
    .drive img {
      width: 28%;
      left: 70%;
      top: 47%;
      position: absolute;
      z-index: 1;
    }
    .trafficLights img {
      width: 14%;
      left: 1%;
      top: 47%;
    }
    .car img {
      width: 32%;
      left: 9%;
      top: 59%;
    }
    .bike img {
      width: 23%;
      left: 42%;
      top: 64%;
    }
    .walk img {
      left: 77%;
      top: 72%;
    }
    .sunscreenButton img {
      top: 50%;
    }
    .iceCream1 img {
      left: 56%;
      top: 51%;
    }
    .flyButton img {
      top: 34%;
    }
    .kiteButton img {
      top: 16%;
    }
    .sunnyButton img {
      top: 17%;
    }
    .kite img {
      width: 37%;
      left: 17%;
      top: 16%;
      position: absolute;
    }
    .fly img {
      width: 37%;
      left: 17%;
      top: 16%;
      position: absolute;
    }
    .hike img {
      top: 26%;
    }
    .swim img {
      top: 19%;
    }
    .butterflyButton img {
      top: 75%;
    }
    .butterfly img {
      top: 76%;
    }
    .flowers img {
      top: 83%;
    }
    .seeds img {
      top: 79%;
    }
    .iciclesButton img {
      width: 8%;
      left: 58%;
      top: 44%;
      position: absolute;
    }
    .rainButton img {
      width: 6%;
      left: 16%;
      top: 10%;
      position: absolute;
    }
    .leavesButton img {
      width: 8%;
      left: 7%;
      top: 89%;
      position: absolute;
    }
    .snow2Button img {
      width: 7%;
    }
    .shiverButton img {
      width: 7%;
      left: 40%;
      top: 63%;
      position: absolute;
    }
    .wind1Button img {
      width: 7%;
      left: 45%;
      top: 13%;
      position: absolute;
    }
    .umbrellaButton img {
      width: 8%;
      left: 21%;
      top: 74%;
      position: absolute;
    }
    .squirrelButton img {
      width: 8%;
      left: 23%;
      top: 29%;
      position: absolute;
    }
    .rakeButton img {
      width: 6%;
      left: 4%;
      top: 40%;
      position: absolute;
    }
    .hotChocolateButton img {
      width: 13%;
      left: 52%;
      top: 58%;
      position: absolute;
    }
    .skiButton img {
      width: 5%;
      left: 91%;
      top: 41%;
      position: absolute;
    }
    .iceSkatingButton img {
      width: 10%;
      left: 72%;
      top: 88%;
      position: absolute;
    }
    .wind1 img {
      width: 24%;
      left: 30%;
      top: 0%;
      position: absolute;
    }
    .rain img {
      width: 20%;
      left: 12%;
      top: -2%;
      position: absolute;
    }
    .squirrel img {
      width: 9%;
      left: 22%;
      top: 32%;
      position: absolute;
      z-index: 1;
    }
    .hotChocolate img {
      width: 20%;
      left: 39%;
      top: 38%;
      position: absolute;
    }
    .shiver img {
      width: 20%;
      left: 39%;
      top: 38%;
      position: absolute;
    }
    .rake img {
      width: 27%;
      left: -2%;
      top: 29%;
      position: absolute;
      z-index: 1;
    }
    .umbrella img {
      width: 26%;
      left: 14%;
      top: 43%;
      position: absolute;
    }
    .icicles img {
      width: 30%;
      left: 50%;
      top: 9%;
      position: absolute;
      z-index: 1;
    }
    .ski img {
      width: 25%;
      left: 75%;
      top: 5%;
      position: absolute;
    }
    .leaves img {
      width: 37%;
      left: 0;
      top: 81%;
      position: absolute;
    }
    .iceSkating img {
      width: 32%;
      left: 59%;
      top: 44%;
      position: absolute;
    }
    .hen img {
      width: 16%;
      left: 24%;
      top: 75%;
      position: absolute;
    }
    .roosterButton img {
      width: 6%;
      left: 38%;
      top: 55%;
    }
    .barnButton img {
      width: 6%;
      left: 15%;
      top: 24%;
    }
    .hayButton img {
      top: 43%;
    }
    .bucketButton img {
      top: 49%;
    }
    .crowButton img {
      top: 25%;
    }
    .feed1Button img {
      top: 74%;
    }
    .hay img {
      width: 22%;
      left: 0;
      top: 39%;
    }
    .bucket img {
      top: 50%;
    }
    .barn img {
      width: 56%;
      left: 0;
      top: 13%;
    }
    .duck img {
      top: 65%;
    }
    .crow img {
      top: 26%;
    }
    .egg img{
      top: 62%;
    }
    .rooster img {
      top: 55%;
    }
    .chick img {
      top: 80%;
    }
    .feed1 img {
      top: 43%;
    }
    .sheepButton img {
      width: 7%;
      left: 83%;
      top: 41%;
      position: absolute;
    }
    .sheep img {
      width: 27%;
      left: 64%;
      top: 30%;
      position: absolute;
    }
    .cowButton img {
      width: 6%;
      left: 68%;
      top: 65%;
      position: absolute;
    }
    .cow img {
      width: 33%;
      left: 64%;
      top: 64%;
      position: absolute;
    }
    .tractor img {
      width: 57%;
      height: 33%;
      left: 7%;
      top: 24%;
      position: absolute;
    }
    .roll img {
      width: 40%;
      left: -3%;
      top: 62%;
      position: absolute;
    }
    .appleButton img {
      width: 7%;
    }
    .gallop img {
      width: 80%;
      left: 30%;
      top: 53%;
      position: absolute;
    }
    .pickButton img {
      width: 7%;
    }
    .plantsButton img {
      width: 6%;
      left: 42%;
      top: 24%;
      position: absolute;
    }
    .plants img {
      width: 28%;
      left: 23%;
      top: 8%;
      position: absolute;
      z-index: 1;
    }
    .ploughButton img {
      width: 7%;
      left: 34%;
      top: 53%;
      position: absolute;
    }
    .tractorButton img {
      width: 7%;
      left: 6%;
      top: 35%;
      position: absolute;
    }
    .plough img {
      width: 56%;
      left: -2%;
      top: 24%;
      position: absolute;
    }
    .rollButton img {
      width: 6%;
    }
    .pigButton img {
      width: 6%;
    }
    .fenceButton img {
      width: 7%;
    }
    .gallopButton img {
      width: 8%;
      left: 91%;
      top: 62%;
      position: absolute;
    }
    .pig img {
      width: 40%;
      left: -3%;
      top: 61%;
      position: absolute;
    }
    .horse1Button img {
      width: 8%;
    }
    .farmerButton img {
      width: 7%;
      left: 91%;
      top: 45%;
      position: absolute;
    }
    .farmer img {
      width: 23%;
      left: 76%;
      top: 23%;
      position: absolute;
      z-index: 1;
    }
    .apple img {
      width: 36%;
      left: 41%;
      top: -13%;
      position: absolute;
    }
    .pick img {
      width: 36%;
      left: 53%;
      top: 6%;
      position: absolute;
      z-index: 1;
    }
    .fence img {
      width: 116%;
      left: -9%;
      top: 42%;
      position: absolute;
    }
    .horse1 img {
      width: 38%;
      left: 63%;
      top: 58%;
      position: absolute;
    }
    .forkButton img {
      width: 5%;
      left: 40%;
      top: 66%;
      position: absolute;
    }
    .orderButton img {
      width: 7%;
      left: 20%;
      top: 19%;
      position: absolute;
    }
    .pizzaButton img {
      width: 7%;
      left: 32%;
      top: 37%;
      position: absolute;
    }
    .noodlesButton img {
      width: 9%;
      left: 25%;
      top: 64%;
      position: absolute;
    }
    .juiceButton img {
      width: 6%;
      left: 14%;
      top: 64%;
      position: absolute;
    }
    .knifeButton img {
      width: 5%;
      left: 48%;
      top: 69%;
      position: absolute;
    }
    .iceCreamButton img {
      width: 10%;
      left: 41%;
      top: 19%;
      position: absolute;
    }
    .waiterButton img {
      width: 7%;
      left: 85%;
      top: 5%;
      position: absolute;
    }
    .burgerButton img {
      width: 8%;
      left: 64%;
      top: 72%;
      position: absolute;
    }
    .plateButton img {
      width: 7%;
      left: 76%;
      top: 92%;
      position: absolute;
    }
    .napkin img {
      width: 27%;
      left: 6.5%;
      top: 72.5%;
      position: absolute;
    }
    .juice img {
      width: 16%;
      left: 2.5%;
      top: 57.5%;
      position: absolute;
    }
    .noodles img {
      width: 20%;
      left: 18%;
      top: 55.5%;
      position: absolute;
    }
    .fork img {
      width: 14%;
      left: 33.5%;
      top: 66.5%;
      transform: rotate(-6deg);
      position: absolute;
    }
    .knife img {
      width: 12%;
      left: 40.5%;
      top: 69.5%;
      transform: rotate(-5deg);
      position: absolute;
    }
    .iceCream img {
      width: 14%;
      left: 38.5%;
      top: 20.5%;
    }
    .pizza img {
      top: 37%;
    }
    .waiter img {
      width: 30%;
      left: 66%;
      top: -6%;
      height: 78%;
      position: absolute;
    }
    .menuButton img {
      width: 7%;
      left: 89%;
      top: 48%;
      position: absolute;
    }
    .menu img {
      width: 17%;
      left: 82%;
      top: 45%;
      position: absolute;
    }
    .burger img {
      width: 19%;
      left: 66.5%;
      top: 69.5%;
      position: absolute;
    }
    .plate img {
      width: 19%;
      left: 81%;
      top: 84%;
      position: absolute;
    }
    .vegetablesButton img {
      width: 11%;
      left: 46.5%;
      top: 52.5%;
      position: absolute;
    }
    .drinkButton img {
      width: 6%;
      left: 77.5%;
      top: 42.5%;
      position: absolute;
    }
    .milkButton img {
      width: 6%;
      left: 61.5%;
      top: 31.5%;
      position: absolute;
    }
    .milk img {
      width: 17%;
      left: 63%;
      top: 18.5%;
      position: absolute;
    }
    .chickenButton img {
      width: 9%;
      left: 75.5%;
      top: 70.5%;
      position: absolute;
    }
    .riceButton img {
      width: 6%;
      left: 65%;
      top: 58.5%;
      position: absolute;
    }
    .teaButton img {
      width: 6%;
      left: 57.5%;
      top: 76.5%;
      position: absolute;
    }
    .fish1Button img {
      width: 6%;
      left: 21%;
      top: 60%;
      position: absolute;
    }
    .eatButton img {
      width: 6%;
      left: 43.5%;
      top: 16.5%;
      position: absolute;
    }
    .spoonButton img {
      width: 7%;
    }
    .drink img {
      width: 31%;
      left: 71%;
      top: 12%;
      position: absolute;
    }
    .rice img {
      width: 14%;
      left: 61%;
      top: 61%;
      position: absolute;
      z-index: 1;
    }
    .chicken img {
      width: 33%;
      left: 63%;
      top: 62%;
      position: absolute;
    }
    .eat img {
      width: 38%;
      left: 15%;
      top: 13%;
      position: absolute;
    }
    .vegetables img {
      width: 23%;
      left: 39%;
      top: 51.5%;
      position: absolute;
    }
    .tea img {
      width: 16%;
      left: 49%;
      top: 70%;
      position: absolute;
    }
    .spoon img {
      width: 16.4%;
      left: 31%;
      top: 66%;
      transform: rotate(-7deg);
      position: absolute;
      z-index: 1;
    }
    .fish1 img {
      width: 30%;
      left: 9.5%;
      top: 52%;
      position: absolute;
      z-index: 1;
    }
    .chopsticks img {
      width: 22%;
      left: 14%;
      top: 68%;
      position: absolute;
    }
    .cupButton img {
      width: 6%;
      left: 6%;
      top: 73%;
      position: absolute;
    }
    .cup img {
      width: 13%;
      left: 2%;
      top: 76%;
      position: absolute;
    }
    .bowlButton img {
      width: 8%;
      left: 7.5%;
      top: 21.5%;
      position: absolute;
    }
    .bowl img {
      width: 15%;
      left: 3.5%;
      top: 24%;
      position: absolute;
    }
    .scarf img {
      width: 52%;
      left: 45.5%;
      top: 7%;
      position: absolute;
    }
    .scarfButton img {
      width: 7%;
      left: 70%;
      top: 14%;
      position: absolute;
    }
    .warmButton img {
      width: 7%;
      left: 5%;
      top: 30%;
      position: absolute;
    }
    .hibernate img {
      width: 20%;
      left: 0;
      top: 74%;
      position: absolute;
    }
    .hibernateButton img {
      width: 11%;
      left: 2%;
      top: 69%;
      position: absolute;
    }
    .animalsButton img {
      width: 9%;
      left: 14%;
      top: 91%;
      position: absolute;
    }
    .coat img {
      width: 20%;
      left: 28%;
      top: 40%;
      position: absolute;
    }
    .snow1 img {
      width: 77%;
      left: 24%;
      height: 50%;
      top: 0;
      position: absolute;
    }
    .fall img {
      width: 18%;
      left: 50%;
      top: -2%;
      position: absolute;
      z-index: 1;
    }
    .fallButton img {
      width: 7%;
      left: 59%;
      top: 29%;
      position: absolute;
    }
    .snow1Button img {
      width: 7%;
      left: 76%;
      top: 36%;
      position: absolute;
    }
    .sled1Button img {
      width: 7%;
      left: 86%;
      top: 27%;
      position: absolute;
    }
    .sled1 img {
      width: 53%;
      left: 44%;
      top: 8%;
      position: absolute;
    }
    .snowmanButton img {
      width: 11%;
      left: 78%;
      top: 88%;
      position: absolute;
    }
    .snowman img {
      width: 29%;
      left: 71%;
      top: 47%;
      position: absolute;
      z-index: 1;
    }
    .cold1Button img {
      width: 7%;
      left: 44%;
      top: 50%;
      position: absolute;
    }
    .skates img {
      width: 16%;
      left: 53%;
      top: 38%;
      position: absolute;
      z-index: 1;
    }
    .coatButton img {
      width: 7%;
      left: 25%;
      top: 60%;
      position: absolute;
    }
    .cold1 img {
      width: 20%;
      left: 28%;
      top: 40%;
      position: absolute;
    }
    .animals img {
      width: 33%;
      left: 1%;
      top: 74%;
      position: absolute;
    }
    .fireplaceButton img {
      width: 10%;
      left: 15%;
      top: 51%;
      position: absolute;
    }
    .fireplace img {
      width: 28%;
      left: 2%;
      top: 29%;
      position: absolute;
    }
    .warm img {
      width: 28%;
      left: 2%;
      top: 29%;
      position: absolute;
    }
    .elf1 img {
      width: 21%;
      left: 79.5%;
      top: 36.5%;
      position: absolute;
    }
    .pull img {
      width: 44%;
      left: 55%;
      height: 27%;
      top: 43%;
      position: absolute;
    }
    .santaClausButton img {
      width: 11%;
      left: 51%;
      top: 27%;
      position: absolute;
    }
    .reindeerButton img {
      width: 9%;
      left: 42%;
      top: 84%;
      position: absolute;
    }
    .bellsButton img {
      width: 7%;
      left: 63%;
      top: 81%;
      position: absolute;
    }
    .sleighButton img {
      width: 8%;
      left: 19%;
      top: 83%;
      position: absolute;
    }
    .stockingButton img {
      width: 10%;
      left: 4%;
      top: 59%;
      position: absolute;
    }
    .stocking img {
      width: 13%;
      left: 2%;
      top: 64%;
      position: absolute;
      z-index: 1;
    }
    .sleigh img {
      width: 42%;
      left: 1%;
      top: 34%;
      position: absolute;
    }
    .santaClaus img {
      width: 23%;
      left: 33%;
      top: 31%;
      position: absolute;
    }
    .reindeer img {
      width: 12%;
      left: 43%;
      top: 60%;
      position: absolute;
    }
    .bells img {
      width: 17%;
      left: 55%;
      top: 68%;
      position: absolute;
    }
    .elf1Button img {
      width: 5%;
    }
    .crackerButton img {
      width: 9%;
      left: 75%;
      top: 58%;
      position: absolute;
    }
    .pullButton img {
      width: 6%;
      left: 72%;
      top: 42%;
      position: absolute;
    }
    .cracker img {
      width: 44%;
      left: 55%;
      height: 27%;
      top: 43%;
      position: absolute;
    }
    .sisterButton img {
      width: 8%;
      left: 87%;
      top: 44%;
      position: absolute;
    }
    .young img {
      width: 24%;
      height: 58%;
      left: 6%;
      top: 24%;
      position: absolute;
    }
    .caring img {
      width: 48%;
      height: 40%;
      left: 53%;
      top: 35%;
      position: absolute;
    }
    .share img {
      width: 37%;
      height: 29%;
      left: 29%;
      top: 17%;
      position: absolute;
    }
    .grandpaButton img {
      width: 10%;
      left: 25%;
      top: 14%;
      position: absolute;
    }
    .old img {
      width: 37%;
      height: 29%;
      left: 29%;
      top: 17%;
      position: absolute;
    }
    .motherButton img {
      width: 10%;
      left: 6%;
      top: 27%;
      position: absolute;
    }
    .babyButton img {
      width: 8%;
      left: 7%;
      top: 56%;
      position: absolute;
    }
    .sister img {
      width: 22%;
      left: 78%;
      top: 41%;
      position: absolute;
    }
    .father img {
      width: 30%;
      left: 57%;
      top: 32%;
      position: absolute;
    }
    .brother img {
      width: 22%;
      left: 35%;
      top: 65%;
      position: absolute;
    }
    .grandma img {
      width: 18%;
      left: 48%;
      top: 20%;
      position: absolute;
    }
    .grandpa img {
      width: 17%;
      left: 29%;
      top: 17%;
      position: absolute;
    }
    .mother img {
      width: 13%;
      left: 17%;
      top: 24%;
      position: absolute;
    }
    .baby img {
      width: 12%;
      left: 6%;
      top: 65%;
      position: absolute;
    }
    .friends img {
      width: 40%;
      left: 61%;
      height: 52%;
      top: 31%;
      position: absolute;
    }
    .friendsButton img {
      width: 10%;
      left: 87%;
      top: 34%;
      position: absolute;
    }
    .cutButton img {
      width: 7%;
      left: 76%;
      top: 66%;
      position: absolute;
    }
    .cakeClick {
      width: 15%;
      height: 16%;
      left: 56%;
      top: 66%;
      position: absolute;
      z-index: 3;
    }
    .partyHatClick {
      width: 15%;
      height: 38%;
      left: 57%;
      top: 26%;
      position: absolute;
      z-index: 2;
    }
    .presentsClick {
      width: 19%;
      height: 28%;
      left: 36%;
      top: 65%;
      position: absolute;
      z-index: 2;
    }
    .singClick {
      width: 17%;
      height: 33%;
      left: 39%;
      top: 32.8%;
      position: absolute;
      z-index: 3;
    }
    .balloonsButton img {
      width: 10%;
      left: 79%;
      top: 12%;
      position: absolute;
    }
    .balloons img {
      width: 22%;
      left: 81%;
      top: -2%;
      position: absolute;
    }
    .singButton img {
      width: 10%;
      left: 37%;
      top: 21%;
      position: absolute;
    }
    .happyButton img {
      width: 10%;
      left: 14%;
      top: 28%;
      position: absolute;
    }
    .card img {
      width: 33%;
      left: 10%;
      top: 72%;
      position: absolute;
      z-index: 2;
    }
    .presents img {
      width: 43%;
      left: 25%;
      top: 59%;
      position: absolute;
      z-index: 1;
    }
    .presentsButton img {
      width: 12%;
      left: 39%;
      top: 88%;
      position: absolute;
    }
    .candles img {
      width: 15%;
      height: 19%;
      left: 84%;
      top: 74%;
      position: absolute;
    }
    .cake img {
      width: 37%;
      height: 48%;
      left: 45%;
      top: 45%;
      position: absolute;
    }
    .blow1 img {
      width: 15%;
      height: 41%;
      left: 86%;
      top: 43.6%;
      position: absolute;
    }
    .partyHat img {
      width: 22%;
      left: 54%;
      top: 27%;
      position: absolute;
    }
    .sing img {
      width: 25%;
      left: 35%;
      top: 27.8%;
      position: absolute;
    }
    .playButton img {
      width: 8%;
    }
    .play img {
      width: 16%;
      left: 0;
      top: 48%;
      position: absolute;
      z-index: 3;
    }
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
      top: 0;
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
        left: 0;
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
