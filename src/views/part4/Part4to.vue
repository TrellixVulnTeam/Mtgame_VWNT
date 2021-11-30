<template>
  <div class="part4to">
    <span id="gameplay">
      <audio autoplay="autoplay" loop="loop" ref="MusicPlay" v-if="show" id="partmusic">
        <source src="../../assets/video/gamemusic.mp3"></audio>
    </span>
    <transition name="fades">
      <div class="contain" v-show="!resume">
        <img src="../../assets/image/rightback.png" @click="gomemu" class="backbutton" />
        <img src="../../assets/image/help.png" @click="help" class="helpbutton" />
        <transition name="fade1">
          <div v-if="onef" style="width: 100%; height: 90%;display:block;position: absolute;">
            <img src="../../assets/image/seasons.png" style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;"
              v-if="bgimg[0].active">
            <img src="../../assets/image/4-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;"
              v-if="bgimg[1].active">
            <img src="../../assets/image/5-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
              v-if="bgimg[2].active">
            <img src="../../assets/image/6-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
              v-if="bgimg[3].active">
            <img src="../../assets/image/7-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
              v-if="bgimg[4].active">
            <img src="../../assets/image/8-bg.png" style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
              v-if="bgimg[5].active">
            <img src="../../assets/image/9-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
              v-if="bgimg[6].active">
            <img src="../../assets/image/10-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
              v-if="bgimg[7].active">
            <img src="../../assets/image/11-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
              v-if="bgimg[8].active">
            <img src="../../assets/image/12-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
              v-if="bgimg[9].active">
            <img src="../../assets/image/1-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[10].active">
            <img src="../../assets/image/2-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[11].active">
            <img src="../../assets/image/3-3bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[12].active">
            <img src="../../assets/image/4-4bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[13].active">
            <img src="../../assets/image/5-5bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[14].active">
            <img src="../../assets/image/6-6bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.5;height: 100%;display:block;position: absolute;" v-if="bgimg[15].active">
            <img src="../../assets/image/7-7bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[16].active">
            <img src="../../assets/image/8-8bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">
            <p class="fontsizes" v-if="shownumb">{{this.countpage}}/{{this.question}}</p>
          </div>
        </transition>
        <transition name="fade1">
          <div v-if="!onef" style="width: 100%; height: 86%;text-align: center;display:block;position: fixed;">
            <img src="../../assets/image/seasons.png" style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;"
              v-if="bgimg[0].active">
            <img src="../../assets/image/4-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1; height: 100%;display:block;position: absolute;"
              v-if="bgimg[1].active">
            <img src="../../assets/image/5-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
              v-if="bgimg[2].active">
            <img src="../../assets/image/6-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
              v-if="bgimg[3].active">
            <img src="../../assets/image/7-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
              v-if="bgimg[4].active">
            <img src="../../assets/image/8-bg.png" style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
              v-if="bgimg[5].active">
            <img src="../../assets/image/9-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
              v-if="bgimg[6].active">
            <img src="../../assets/image/10-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
              v-if="bgimg[7].active">
            <img src="../../assets/image/11-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
              v-if="bgimg[8].active">
            <img src="../../assets/image/12-bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
              v-if="bgimg[9].active">
            <img src="../../assets/image/1-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[10].active">
            <img src="../../assets/image/2-bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[11].active">
            <img src="../../assets/image/3-3bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[12].active">
            <img src="../../assets/image/4-4bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[13].active">
            <img src="../../assets/image/5-5bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[14].active">
            <img src="../../assets/image/6-6bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[15].active">
            <img src="../../assets/image/7-7bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[16].active">
            <img src="../../assets/image/8-8bg.png" style="width: 100%; z-index: -1;opacity: 0.4;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[17].active">
            <img src="../../assets/image/9-9bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[18].active">
            <img src="../../assets/image/10-10bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[19].active">
            <img src="../../assets/image/11-11bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[20].active">
            <img src="../../assets/image/12-12bg.png" style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;"
                 v-if="bgimg[21].active">
            <img src="../../assets/image/1-1bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2bg.png"  style="width: 100%; z-index: -1;background-color: #fcffd1;opacity: 0.4;height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">

            <div v-if="zhezhao" style="width: 100%; height: 95%;display:block;position: absolute;opacity: 0;z-index: 100;"></div>
            <audio v-if="soundsWrong" autoplay="autoplay">
              <source src="../../assets/video/Wrong.mp3" ></audio>
            <audio v-if="soundscorrect" autoplay="autoplay">
              <source src="../../assets/video/correct.mp3" ></audio>
            <div class="jtk-demo" style="width: 100%;height: 100%;">
              <div class="jtk-demo-canvas canvas-wide drag-drop-demo jtk-surface jtk-surface-nopan" id="canvas">
                <div class="leftbox" v-bind:class="{leftbox1:changwidth}">
                  <div class="window" v-for="li in list1" :key="li.name" :id="li.id" v-bind:class="{window1:changwidth}" @click="makesound(li)">
                    <img :src="pic+li.bg" class="imgsty" v-bind:class="{imgsty1:changwidth}" @load="loadimg" >
                    <audio  autoplay="autoplay" v-if="li.showbg"><source :src="pic+li.audio" ></audio>
                  </div>
                </div>
                <img src="../../assets/image/StarYellow.png" class="start" v-if="showbg" />
                <div class="rightbox" v-bind:class="{rightbox1:changwidth}">
                  <div class="windows" v-for="st in list2" :key="st.name" :id="st.id" v-bind:class="{answer:st.issuccess,changecolor:st.changecolor,otherwidth:changwidth}">
                    <span v-bind:class="{namesize:st.size}">{{st.name}}</span>
                    <!-- <img  src="../../assets/image/star_frame.png" class="imgstar2"/> -->
                  </div>
                </div>

              </div>
            </div>
          </div>

        </transition>
        <div class="settinglist">
          <img src="../../assets/image/season-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[0].active">
          <img src="../../assets/image/4-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[1].active">
          <img src="../../assets/image/5-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[2].active">
          <img src="../../assets/image/6-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[3].active">
          <img src="../../assets/image/7-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[4].active">
          <img src="../../assets/image/8-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[5].active">
          <img src="../../assets/image/9-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[6].active">
          <img src="../../assets/image/10-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[7].active">
          <img src="../../assets/image/11-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[8].active">
          <img src="../../assets/image/12-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[9].active">
          <img src="../../assets/image/1-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[10].active">
          <img src="../../assets/image/2-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[11].active">
          <img src="../../assets/image/3-3bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[12].active">
          <img src="../../assets/image/4-4bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[13].active">
          <img src="../../assets/image/5-5bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[14].active">
          <img src="../../assets/image/6-6bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[15].active">
          <img src="../../assets/image/7-7bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[16].active">
          <img src="../../assets/image/8-8bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[17].active">
          <img src="../../assets/image/9-9bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[18].active">
          <img src="../../assets/image/10-10bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[19].active">
          <img src="../../assets/image/11-11bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[20].active">
          <img src="../../assets/image/12-12bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[21].active">
          <img src="../../assets/image/1-1bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[22].active">
          <img src="../../assets/image/2-2bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[23].active">
          <span class="fontsize">Match the pictures with the correct words.</span>
          <div @click="changesett">
            <img src="../../assets/image/season-pause.png" class=" repeat" v-if="bgimg[0].active">
            <img src="../../assets/image/4-pause.png" class=" repeat" v-if="bgimg[1].active">
            <img src="../../assets/image/5-pause.png" class=" repeat" v-if="bgimg[2].active">
            <img src="../../assets/image/6-pause.png" class=" repeat" v-if="bgimg[3].active">
            <img src="../../assets/image/7-pause.png" class=" repeat" v-if="bgimg[4].active">
            <img src="../../assets/image/8-pause.png" class=" repeat" v-if="bgimg[5].active">
            <img src="../../assets/image/9-pause.png" class=" repeat" v-if="bgimg[6].active">
            <img src="../../assets/image/10-pause.png" class=" repeat" v-if="bgimg[7].active">
            <img src="../../assets/image/11-pause.png" class=" repeat" v-if="bgimg[8].active">
            <img src="../../assets/image/12-pause.png" class=" repeat" v-if="bgimg[9].active">
            <img src="../../assets/image/1-pause.png" class=" repeat" v-if="bgimg[10].active">
            <img src="../../assets/image/2-pause.png" class=" repeat" v-if="bgimg[11].active">
            <img src="../../assets/image/3-3pause.png" class=" repeat" v-if="bgimg[12].active">
            <img src="../../assets/image/4-4pause.png" class=" repeat" v-if="bgimg[13].active">
            <img src="../../assets/image/5-5pause.png" class=" repeat" v-if="bgimg[14].active">
            <img src="../../assets/image/6-6pause.png" class=" repeat" v-if="bgimg[15].active">
            <img src="../../assets/image/7-7pause.png" class=" repeat" v-if="bgimg[16].active">
            <img src="../../assets/image/8-pause.png" class=" repeat" v-if="bgimg[17].active">
            <img src="../../assets/image/9-9pause.png" class=" repeat" v-if="bgimg[18].active">
            <img src="../../assets/image/10-10pause.png" class=" repeat" v-if="bgimg[19].active">
            <img src="../../assets/image/11-11pause.png" class=" repeat" v-if="bgimg[20].active">
            <img src="../../assets/image/12-12pause.png" class=" repeat" v-if="bgimg[21].active">
            <img src="../../assets/image/1-1pause.png" class=" repeat" v-if="bgimg[22].active">
            <img src="../../assets/image/2-2pause.png" class=" repeat" v-if="bgimg[23].active">
          </div>
          <!-- <div @click="change">
						<img src="../../assets/image/Icon_Repeat.png" class=" repeat">
					</div> -->
        </div>

      </div>
    </transition>
    <div class='popContainer' v-show="popp">
      <p class="spanp">{{spanp}}</p>
      <button class="roleimg">
        <img src="../../assets/image/boss-rule.png" style="height: 100%;" v-if="ruleimg12" />
        <img src="../../assets/image/boss-rule2.png" style="height: 100%;" v-if="ruleimg8" />
      </button>
      <div class="withcolor">
        <div class="close" @click="pop">
          <img src="../../assets/image/cloce.png">
        </div>
        <img class="animapng7" src="http://103.218.241.33/mtgameweb/assets/img/d.gif">


      </div>
    </div>
    <transition name="fades">
      <div class="about" v-show="resume">
        <div class="twomenu">
          <div>
            <img src="../../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="show" @click="sound" />
            <img src="../../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="!show" @click="sound" />
          </div>
          <div style="margin-top: 5px;">
            <img src="../../assets/image/resume.png" style="width: 30%; height: 10%;" @click="changesett">
          </div>
          <!-- <div style="margin-top: 5px;">
						<div><img src="../../assets/image/home.png" style="width: 30%; height: 10%;"  @click="gomemu"></div>
					</div> -->
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
  var qs = require('qs');
  import {
    jsPlumb
  } from 'jsplumb';

  export default {
    name: "part4to",
    watch: {
      'loaded': function(newVal) {
        if (this.onef === true) {
          console.log('标记1');
          if (this.list1.length > 2 || this.list2.length > 2) {
            this.changwidth = true;
          }
          for (var i = 0; i < this.list2.length; i++) {
            if (this.list2[i].name.length > 10) {
              this.list2[i].size = 1;
            }
          }
          setTimeout(() => {
            this.onef = false;
          }, 2000);
        }
        if (this.onef === false) {
          jsPlumb.reset();
          console.log('标记2');
          setTimeout(() => {
            const that = this;
            jsPlumb.ready(function() {
              var instance = jsPlumb.getInstance({
                DragOptions: {
                  cursor: "pointer",
                  // zIndex: 2000
                },
                PaintStyle: {
                ConnectionsDetachable: false,
                EndpointStyle: {
                  width: 20,
                  height: 16,
                  margin: 20,
                  //stroke: "#057bb8"
                },
                Endpoint: "Image",
                // Anchors: ["TopCenter", "TopCenter"],
                Container: "canvas",
                }
              });
              // suspend drawing and initialise.
              instance.batch(function() {
                console.log('标记8');
                instance.bind("click", function(component, originalEvent) {
                  console.log('标记9');
                  jsPlumb.detach(component);
                });
                console.log('标记10');
                // configure some drop options for use by all endpoints.
                var exampleDropOptions = {
                  tolerance: "touch",
                  hoverClass: "dropHover",
                  activeClass: "dragActive",
                };
                // the second example uses a Dot of radius 15 as the endpoint marker, is both a source and target,
                // and has scope 'exampleConnection2'.
                //
                var color2 = "#057bb8";
                var exampleEndpoint2 = {
                  endpoint: ["Image", {
                    src: "http://103.218.241.33/monkeytreeApp/www/assets/image/star.png"
                  }],
                  paintStyle: {
                    fill: "#057bb8"
                  },
                  isSource: true,
                  scope: "#057bb8",
                  connectorStyle: {
                    stroke: "#057bb8",
                    strokeWidth: 6
                  },
                  connector: ["Straight", {
                    gap: 15,
                  }],
                  maxConnections: 1,
                  isTarget: false,
                  dropOptions: exampleDropOptions
                };
                console.log('标记12');
                console.log(exampleEndpoint2);
                var exampleEndpoint3 = {
                  endpoint: ["Image", {
                    src: "http://103.218.241.33/monkeytreeApp/www/assets/image/star.png"
                  }],
                  EndpointStyle: {
                    margin: 20,
                  },
                  paintStyle: {
                    fill: "#057bb8"
                  },
                  isSource: false,
                  scope: "#057bb8",
                  connectorStyle: {
                    stroke: "#057bb8",
                    strokeWidth: 6
                  },
                  connector: ["Straight", {
                    gap: 15,
                  }],
                  maxConnections: 1,
                  isTarget: true,
                  dropOptions: exampleDropOptions
                };
                console.log(exampleEndpoint3);
                if (that.list1.length > 2 || that.list2.length > 2) {
                  that.changwidth = true;
                  console.log('标记13');
                }
                console.log('标记11');
                for (var i = 0; i < that.list1.length; i++) {
                  if(that.loaded===true){
                    instance.addEndpoint(
                    that.list1[i].id, {
                      anchor: [1, 0.5, 0, 0, 25, 0],
                    },
                    exampleEndpoint2
                  )
                    console.log('标记14');
                  }
                }
                for (var j = 0; j < that.list2.length; j++) {
                  if(that.loaded===true){
                  instance.addEndpoint(
                    that.list2[j].id, {
                      anchor: [0, 0.5, 0, 0, -20, 0],
                    },
                    exampleEndpoint3
                  )
                  }
                }

                instance.bind("connectionDragStop", function(connection) {
                  that.zhezhao = true;
                  console.log(connection);
                  console.log(that.list1);
                  var truetime = that.list1.length;
                  for (var i = 0; i < that.list1.length; i++) {
                    //只要两边数量一致就不需要判断
                    if (connection.sourceId === that.list1[i].id) {
                    //connection.targetId值右边命中的id，that.list1[i].targetId指右边本身的id
                      if (connection.targetId === that.list1[i].targetId) {
                        console.log(connection.suspendedElementId);
                        //貌似不存在为空的情况
                        // if (connection.target != null) {
                          // if (that.truelist.length <= 0) {
                            that.truelist.push(connection.targetId);
                            for (var f = 0; f < that.falselist.length; f++) {
                              if (that.falselist[f] === connection.suspendedElementId) {
                                that.falselist.splice(f, 1);
                                console.log(that.falselist);
                              }
                            }
                          // } else {
                          //   that.truelist.push(connection.targetId);
                          //   for (var f = 0; f < that.falselist.length; f++) {
                          //     if (that.falselist[f] === connection.suspendedElementId) {
                          //       that.falselist.splice(f, 1);
                          //     }
                          //   }
                          // }
                        // } else {
                        //   for (var t = 0; t < that.truelist.length; t++) {
                        //     if (that.truelist[t] === connection.suspendedElementId) {
                        //       that.truelist.splice(t, 1);
                        //     }
                        //   }
                        //   for (var f = 0; f < that.falselist.length; f++) {
                        //     if (that.falselist[f] === connection.suspendedElementId) {
                        //       that.falselist.splice(f, 1);
                        //     }
                        //   }
                        // }
                      } else {
                        console.log('395h');
                        for (var g = 0; g < that.list1.length; g++) {
                          if (connection.targetId === that.list1[g].targetId) {
                            // if (connection.target != null) {
                              if (that.falselist.length <= 0) {
                                that.falselist.push(connection.targetId);
                                console.log(that.falselist);
                                for (var t = 0; t < that.truelist.length; t++) {
                                  if (that.truelist[t] === connection.suspendedElementId) {
                                    that.truelist.splice(t, 1);
                                    console.log('405h');
                                  }
                                }
                              } else {
                                that.falselist.push(connection.targetId);
                              }
                            // } else {
                            //   console.log('不为空');
                            //   for (var f = 0; f < that.falselist.length; f++) {
                            //     if (that.falselist[f] === connection.suspendedElementId) {
                            //       that.falselist.splice(f, 1);
                            //     }
                            //   }
                            // }
                          }
                        }
                      }
                    }
                  }
                  setTimeout(() => {
                    that.nowtime = document.getElementsByTagName("svg").length;
                    console.log(that.nowtime);
                    console.log(truetime);
                    //连接的数量,指连接满
                    if (that.nowtime === truetime) {
                      console.log('这这');
                      that.zhezhao = true;
                      that.countpage += 1;
                      console.log(that.falselist.length);
                      if (that.falselist.length <= 0) { //错误list的长度
                        that.showbg = 1;
                        that.soundscorrect = true;
                        for (var i = 0; i < that.list2.length; i++) {
                          //展示星星
                          that.account += 1;
                          that.list2[i].changecolor = 1;
                        }
                        setTimeout(() => {
                          // for (var i = 0; i < that.list2.length; i++) {
                          that.showbg = 0;
                          that.soundscorrect = false;
                          // }
                          that.nowtime = 0;
                          if (that.countpage <= that.question) {
                            that.onef = true;
                            that.loaded=false;
                            that.list = that.listD[that.countpage - 1];
                            that.list2 = [];
                            that.list1 = [];
                            for (var i = 0; i < that.list.length; i++) {
                              that.list1.push(that.list[i]);
                              // that.list2.push(that.list[i]);
                            }
                            for (var u = 0; u < that.list.length; u++) {
                              that.list2.push({
                                bg: that.list[u].bg,
                                id: that.list[u].id2,
                                changecolor: that.list[u].changecolor,
                                course_id: that.list[u].course_id,
                                issuccess: that.list[u].issuccess,
                                name: that.list[u].name,
                                question_Id: that.list[u].question_Id,
                                showbg: that.list[u].showbg,
                                t_part_detail_id: that.list[u].t_part_detail_id,
                                targetId: that.list[u].targetId2,
                                units_id: that.list[u].units_id,
                              })
                            }
                            that.zhezhao = false;
                          } else {
                            setTimeout(() => {
                              that.zhezhao = false;
                              that.$router.push({
                                //核心语句
                                path: "/result", //跳转的路径
                                query: {
                                  type: that.type,
                                  partName: 'partNameD',
                                  account: that.account,
                                  menuId: that.menuId,
                                  unitsId: that.unitsId,
                                  unit: that.unit,
                                  part:that.part,
                                  num:that.num
                                }
                              });
                            }, 2000);
                          }
                          that.truelist = [];
                          that.falselist = [];
                        }, 2000);
                      } else {
                        var svgLine = document.getElementsByTagName("svg");
                        that.soundsWrong = true;
                        for (var i = 0; i < that.list2.length; i++) {
                          for (var k = 0; k < that.falselist.length; k++) {
                            if (that.falselist[k] === that.list2[i].id) {
                              that.list2[i].issuccess = 1; //晃动错误
                            }
                            if (that.falselist[k] === svgLine[i]._jsPlumb.targetId) {
                              svgLine[i].children[0].setAttribute("stroke", "#cc6453");
                            }
                          }
                        }
                        that.account = that.account + that.list2.length - that.falselist.length;
                        //console.log( that.account);
                        setTimeout(() => {
                          that.soundsWrong = false;
                          for (var i = 0; i < svgLine.length; i++) {
                            /*svgLine[i].children[0].setAttribute("stroke", "#cc6453");*/
                            svgLine[i].style.transition = 'all 0.4s';
                            svgLine[i].style.width = '0px';
                          }
                          setTimeout(() => {
                            var lineW;
                            instance.deleteEveryConnection();
                            for (var i = 0; i < that.list1.length; i++) {
                              that.list2[i].changecolor = 1;
                              instance.connect({
                                source: that.list1[i].id,
                                target: that.list1[i].targetId,
                                endpoint: ["Image", {
                                  src: "http://103.218.241.33/monkeytreeApp/www/assets/image/star.png"
                                }],
                                connector: ['Straight', {
                                  gap: 15,
                                }],
                                paintStyle: {
                                  stroke: '#057bb8',
                                  strokeWidth: 6
                                },
                                anchor: [
                                  [1, 0.5, 0, 0, 25, 0],
                                  [0, 0.5, 0, 0, -20, 0]
                                ]
                              });
                              lineW = svgLine[i].clientWidth || svgLine[i].offsetWidth;
                              svgLine[i].style.width = '0px';
                              svgLine[i].style.transition = 'all 0 ease 0';
                            }
                            setTimeout(() => {
                              for (var i = 0; i < svgLine.length; i++) {
                                svgLine[i].style.transition = 'all 0.4s';
                                svgLine[i].style.width = lineW + 'px';
                              }
                              setTimeout(() => {
                                instance.deleteEveryConnection();
                                for (var i = 0; i < that.list2.length; i++) {
                                  that.list2[i].changecolor = 0;
                                  that.list2[i].issuccess = 0;
                                }
                                that.nowtime = 0;
                                if (that.countpage <= that.question) {
                                  that.onef = true; that.loaded=false;
                                  that.list = that.listD[that.countpage - 1];
                                  var leng = that.list.length / 2 - 1;
                                  that.list2 = [];
                                  that.list1 = [];
                                  for (var i = 0; i < that.list.length; i++) {
                                    that.list1.push(that.list[i]);
                                  }
                                  for (var u = 0; u < that.list.length; u++) {
                                    that.list2.push({
                                      bg: that.list[u].bg,
                                      id: that.list[u].id2,
                                      changecolor: that.list[u].changecolor,
                                      course_id: that.list[u].course_id,
                                      issuccess: that.list[u].issuccess,
                                      name: that.list[u].name,
                                      question_Id: that.list[u].question_Id,
                                      showbg: that.list[u].showbg,
                                      t_part_detail_id: that.list[u].t_part_detail_id,
                                      targetId: that.list[u].targetId2,
                                      units_id: that.list[u].units_id,
                                      size: 0,
                                    })
                                  }
                                  that.zhezhao = false;
                                } else {
                                  setTimeout(() => {
                                    that.zhezhao = false;
                                    that.$router.push({
                                      //核心语句
                                      path: "/result", //跳转的路径
                                      query: {
                                        //路由传参时push和query搭配使用 ，作用时传递参数
                                        type: that.type,
                                        partName: 'partNameD',
                                        account: that.account,
                                        menuId: that.menuId,
                                        unitsId: that.unitsId,
                                        unit: that.unit,
                                        part:that.part,
                                        num:that.num
                                      }
                                    });
                                  }, 2000);
                                }
                                that.truelist = [];
                                that.falselist = [];
                              }, 1000);
                            }, 100);
                          }, 300);
                        }, 2000);
                      }
                    } else {
                      that.zhezhao = false;
                    }
                  }, 400);
                });
                console.log('标记7');
              });
            });
          }, 500);
        }
      },
    },

    data() {
      return {
        num:0,
        popp: false,
        ruleimg8: false,
        spanp: '',
        loaded:false,
        shownumb: false,
        ruleimg10: false,
        ruleimg4: false,
        ruleimg15: false,
        ruleimg25: false,
        ruleimg12: false,
        list1: [],
        list2: [],
        list: [],
        changwidth: false,
        // fade: 'fade',
        action: false,
        action1: false,
        zhezhao: false,
        nowtime: 0,
        question: 4,
        soundsWrong: false,
        soundscorrect: false,
        showbg: 0,
        falselist: [],
        truelist: [],
        countpage: 1,
        unitsId: '',
        unit: '',
        menuId: '',
        listD: [],
        bgimg:[
          {active:false,spring:'Seasons'},
          {active:false,spring:'Transportation'},
          {active:false,spring:'Bugs'},
          {active:false,spring:'Clothes'},
          {active:false,spring:'Theme Park'},
          {active:false,spring:'Space'},
          {active:false,spring:'My Body'},
          {active:false,spring:'My Weekend'},
          {active:false,spring:'Wild Animals'},
          {active:false,spring:'Christmas'},
          {active:false,spring:"Let's Go Shopping"},
          {active:false,spring:'My Community'},
          {active:false,spring:'Fun Time!'},
          {active:false,spring:'My Home'},
          {active:false,spring:'Our World'},
          {active:false,spring:'Fairy Tales'},
          {active:false,spring:'Exploration'},
          {active:false,spring:'Summer Fun'},
          {active:false,spring:'School Time'},
          {active:false,spring:'Animals'},
          {active:false,spring:'Family Time'},
          {active:false,spring:'Holidays'},
          {active:false,spring:'Meal Time'},
          {active:false,spring:'On the Farm'},
        ],
        account: 0,
        flag2: true,
        show: true,
        resume: false,
        id: '',
        pic: "",
        // url: 'http://demo11.embraiz.com/mtGame/exercise/exerciseD',
        url: '/exercise/',
        url1: '',
        part:'',
        // pic: "http://demo11.embraiz.com/mtGameHK",
        //url: 'http://localhost:8080/mtGame/exercise/exerciseD',
        levels: 0,
         gamename:'',
         timeurl:'/user/playTime',
        type: 'part4to',
        onef: true,

      }
    },

    methods: {
      makesound(li){
        // console.log(li);
        if(li.showbg===0){
          li.showbg = 1;
          setTimeout(() => {
            li.showbg = 0;
          }, 3000);
        }

      },
      gomemu() {
        var audio = document.getElementById('music');
        if (localStorage.getItem('audiomusic') === "false") {
        } else {
          audio.play();
        }
        // 统计时间
         var endtimestamp = (new Date()).getTime();
        this.$axios.post(this.timeurl, qs.stringify({
          id: localStorage.getItem('startTimeid'),
          time: endtimestamp,
          name:this.gamename,
          studentId:localStorage.getItem('studentId')
        })).then(res => {
          localStorage.setItem('startTimeid','');
          localStorage.setItem('gamename','');
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
        this.$router.push({ //核心语句
          path: '/home', //跳转的路径
          query: {
            unitsId: this.unitsId,
            unit: this.unit,
            part:this.part
          }
        })
      },
      loadimg(){
        this.loaded=true;
      },
      pop() {
        this.popp = !this.popp;
      },
      help() {
        if (this.onef == false) {
          this.spanp = "Match the pictures with the correct words.";
          this.popp = !this.popp;
          if (this.list1[0].rank == 0) {
            this.ruleimg8 = true;
            this.ruleimg12 = false;
          } else if (this.list1[0].rank == 1) {
            this.ruleimg8 = false;
            this.ruleimg12 = true;
          }
        }
      },
      changesett() {
        if (this.action === false && this.onef === false) {
          this.action = true;
          setTimeout(() => {
            this.action = false;
            this.resume = !this.resume;
          }, 1000);
        }
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
      },
      bodyScroll(event) {
        event.preventDefault();
      },
    },
    destroyed() {
      document.body.removeEventListener('touchmove', this.bodyScroll, {
        passive: false
      });
       window.removeEventListener('popstate',this.gomemu,false);
    },

    created() { //生命周期里接收参数
      this.pic = this.$axios.defaults.baseURL2;
      this.unit = this.$route.query.unit;
      this.part = this.$route.query.part;
      this.unitsId = this.$route.query.unitsId;
      this.menuId = this.$route.query.menuId; //接受参数关键代码
      this.gamename=this.$route.query.name;
      if(this.part==='part1'){
        this.url1=this.url+'exerciseDPart1';
      }else if(this.part==='part2'){
        this.url1=this.url+'exerciseDPart2';
      }else if(this.part==='part3'){
        this.url1=this.url+'exerciseD';
      }
      if(this.gamename===''||this.gamename===undefined){
        this.gamename=localStorage.getItem('gamename')
      }else {
        localStorage.setItem('gamename',this.gamename);
      }
      var timestamp = (new Date()).getTime();
      localStorage.setItem('startTimeid',timestamp);
      for (var i = 0; i < this.bgimg.length; i++) {
        if (this.unit === this.bgimg[i].spring) {
          this.bgimg[i].active = true;
        } else {
          this.bgimg[i].active = false;
        }
      }
      this.show = localStorage.getItem('gamemusic') !== "false";
      this.$axios.post(this.url1, qs.stringify({
        menuDetailId: this.menuId,
      })).then(res => {
        if(this.part==='part1'){
          for (let i in res.data.ListPart1) {
            this.listD.push(res.data.ListPart1[i]); //属性
            this.question = this.listD.length;
          }
          this.num = this.question * this.listD[0].length;
          console.log(this.question * this.listD[0].length);
        }else if(this.part==='part2'){
          for (let i in res.data.ListPart2) {
            this.listD.push(res.data.ListPart2[i]); //属性
            this.question = this.listD.length;
          }
          this.num = this.question * this.listD[0].length;
          console.log(this.question * this.listD[0].length);
        }else if(this.part==='part3'){
          for (let i in res.data) {
            this.listD.push(res.data[i]); //属性
            this.question = this.listD.length - 3;
          }
          this.num = this.question * this.listD[0].length;
          console.log(this.question * this.listD[0].length);
        }
        this.shownumb = true;
        this.list = this.listD[this.countpage - 1];
        for (var i = 0; i < this.list.length; i++) {
          this.list1.push(this.list[i]);
          // this.list2.push(this.list[i]);
        }
        for (var u = 0; u < this.list.length; u++) {
          this.list2.push({
            bg: this.list[u].bg,
            id: this.list[u].id2,
            changecolor: this.list[u].changecolor,
            course_id: this.list[u].course_id,
            issuccess: this.list[u].issuccess,
            name: this.list[u].name,
            question_Id: this.list[u].question_Id,
            showbg: this.list[u].showbg,
            t_part_detail_id: this.list[u].t_part_detail_id,
            targetId: this.list[u].targetId2,
            units_id: this.list[u].units_id,
            size: 0
          })

        }
        for (var i = 0; i < this.list2.length; i++) {
          if (this.list2[i].name.length > 10) {
            this.list2[i].size = 1;
          }
        }
        if (this.onef === true && this.shownumb === true) {
          setTimeout(() => {
            this.onef = false;
            if (this.list1.length > 2 || this.list2.length > 2) {
              this.changwidth = true;
            }
          }, 1500);
        }
      }, res => {
        alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      });
      // 统计时间
      this.$axios.post(this.timeurl, qs.stringify({
        id: timestamp,
        time: timestamp,
        name:this.gamename,
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
      document.body.addEventListener('touchmove', this.bodyScroll, {
        passive: false
      });
    },
    }

</script>

<style scoped lang="less">
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    cursor: auto !important;
  }

  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .part4to {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    background-color: #fcffd1;
    z-index: -1;
  }

  .foo {
    margin: 0 20px !important;
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

  .drag-locked {
    border: 1px solid red;
  }

  .cmdLink {
    font-size: 0.80em;
  }
  #canvas{
    width: 100%;
    height: 100%;
    bottom: 0;
    position: absolute;
  }

  /** DRAG/DROP CLASSES **/
  .dragActive {
    border: 2px dotted orange;
  }

  .dropHover {
    border: 1px dotted red;
  }

  path,
  .jtk-endpoint {
    cursor: pointer;
    margin: 0 20px !important;
  }

  svg {
    margin: 0 20px !important;
  }

  .windows {
    background-color: #44ccc2;
    width: 90%;
    height: 3rem;
    font-family: pepper;
    font-size: 1.3rem;
    color: white;
    padding: 3px 5px;
    border-radius: 30px;
    margin: 4.3rem 1px 0 15px;
    display: grid;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: center;
  }

  .leftbox {
    width: 60%;
    margin-left: 7%;
    float: left;
    margin-top: 1%;
    display: inline-block;
  }

  .rightbox {
    width: 20%;
    float: right;
    margin-right: 12%;
    display: inline-block;
  }

  .rightbox1 {
    margin-top: -1%;
    margin-right: 18%;
  }

  .otherwidth {
    height: 2.5rem;
    font-size: 1.3rem;
    margin: 3rem 1px 0 15px;
  }

  .imgsty1 {
    width: 57% !important;
  }

  .namesize {
    font-size: 23px !important;
  }

  .leftbox1 {
    width: 47%;
    margin-left: 13%;
    margin-top: 1%;
  }

  .drag-drop-demo .window1 {
    width: 30%;
    border-radius: 25px !important;
    border: 0.4rem solid #44ccc2 !important;
  }


  .start {
    display: block;
    position: absolute;
    // top: -15%;
    height: 100%;
    width: 50%;
    left: 25%;
    z-index: 99;
  }

  .imgsty {
    width: 66%;
    text-align: center;
    margin: 0 auto;
  }

  .listimg img {
    cursor: pointer;
    //transition: all 0.6s;
  }

  .listimg:focus {
    transform: scale(1.2);
  }

  // .listimg:hover {
  // 	transform: scale(1.2);
  // }

  .listimg:active {
    transform: scale(1.2);
  }

  // .listimg:visited {
  // 	transform: scale(1);
  // }
  #dragDropWindow1 {
    top: 30px;
    left: 60px;
  }

  #dragDropWindow2 {
    top: 30px;
    left: 10px;
  }

  /** ELEMENTS **/
  .drag-drop-demo .window {
    background-color: #FFFCA1;
    width: 40%;
    border-radius: 30px;
    margin: 15px 30px;
    display: flex;
    border: 0.5rem solid #44ccc2;
    box-shadow: 0.3rem 0.3rem 0.1rem #057bb8;
    text-align: center;
    align-content: center;
    align-items: center;
    vertical-align: middle;
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

  .oringe {
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

  .spanp {
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
    width: 100%;
    margin-top: 5%
  }

  .roleimg {
    position: absolute;
    height: 68%;
    top: 15%;
    left: 5%;
    border: none;
    background: none;
  }


  .fontsize {
    font-family: pepper;
    color: white;
    bottom: 15%;
    left: 3%;
    position: absolute;
    font-size: 1.4rem;
    max-height: 100%;
    min-height: 60%;
    //margin-left: 2%;
  }

  .fontsizes {
    font-family: kg;
    font-weight: bolder;
    color: #c5ca8b;
    // position: sticky;
    text-align: center;
    vertical-align: middle;
    margin-top: 22%;
    font-size: xx-large;
  }

  .contain {
    width: 100%;
    height: 100%;
    position: relative;
    display: contents;
    overflow: hidden;
  }

  .fade-enter {
    transform: translate3d(100%, 0, 0);
  }

  .fade-enter-active {
    transition: all 0.6s;
  }

  .fade-leave-active {
    transition: all 0.6s;
  }

  .fade-leave-to {
    //opacity: 0;
    transform: translate3d(0, 0, 0);
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
    //opacity: 1;
    transform: translate3d(0, 100%, 0);
  }

  .fades-leave-to {
    //opacity: 0;
    //transform: translate3d(0,-100%,0) !important;

  }

  .changecolor {
    background-color: #057bb8 !important;
  }

  .answer {
    background-color: #cc6453;
    animation: myPlay 0.7s 0s infinite alternate;
    animation-timing-function: linear;
    animation-iteration-count: 3;

    -webkit-animation: myPlay 0.7s 0s infinite alternate;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: 3;

    -moz-animation: myPlay 0.7s 0s infinite alternate;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: 3;
    -o-animation: myPlay 0.7s 0s infinite alternate;
    -o-animation-timing-function: linear;
    -o-animation-iteration-count: 3;
  }

  @keyframes myPlay {
    0% {}

    50% {
      margin-left: 20px;
    }

    100% {
      // position: relative;
      // left: 0px;
    }
  }

  @-webkit-keyframes myPlay {
    0% {
      // position: relative;
      // left: 0px;
    }

    50% {
      margin-left: 20px;
    }

    100% {
      // position: relative;
      // left: 0px;
    }
  }

  @-moz-keyframes myPlay {
    0% {
      // position: relative;
      // left: 0px;
    }

    50% {
      margin-left: 20px;
    }

    100% {
      // position: relative;
      // left: 0px;
    }
  }

  @media screen and (max-width:481px) {
    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 11%;
      left: 3%;
      position: absolute;
      font-size: large;
      max-height: 100%;
      min-height: 60%;
      margin-left: 2%;
    }

    .twomenu {
      padding-top: 18%;
    }

    .leftbox {
      margin-top: 4%;
      margin-left: 5%;
    }

    .drag-drop-demo .window {}

    .rightbox {
      width: 26%;
    }

    .windows {
      height: 2.5rem;
      margin: 3.5rem 1px 4.5rem 0px;
    }

    .drag-drop-demo .window1 {
      width: 35% !important;
      border-radius: 20px !important;
      border: 0.3rem solid #44ccc2 !important;
      box-shadow: 0.2rem 0.2rem 0.1rem #057bb8;

    }

    .otherwidth {
      width: 75%;
      font-size: 1.2rem;
      height: 2.2rem;
      margin: 2.4rem 1px 0 15px;
    }

  }

  @media screen and (min-width: 482px) and (max-width: 569px) {

    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 11%;
      left: 3%;
      position: absolute;
      font-size: large;
      max-height: 100%;
      min-height: 60%;
      margin-left: 2%;
    }

    //      .start{
    //      	display: block;
    //      	position: absolute;
    //      	top: -15%;
    //      	width: 50%;
    //      	left: 25%;
    // z-index: 99;
    //      }
    .twomenu {
      padding-top: 18%;
    }

    .leftbox {
      margin-top: 1%;
      margin-left: 5%;
    }

    .rightbox {
      width: 26%;
    }

    .windows {
      height: 2.5rem;
      margin: 3.5rem 1px 4.5rem 0px;
    }

    .drag-drop-demo .window1 {
      border-radius: 20px !important;
      border: 0.3rem solid #44ccc2 !important;
      box-shadow: 0.2rem 0.2rem 0.1rem #057bb8;

    }

    .leftbox1 {
      margin-top: 0;
    }

    .otherwidth {
      width: 75%;
      font-size: 1.2rem;
      height: 2.2rem;
      margin: 2.4rem 1px 0 15px;
    }
  }

  @media screen and (min-width: 1024px)and (max-width: 1354px) {

    .fontsizes {
      margin-top: 30%;
    }

    //    .start {
    //     top: 3%;
    //     left: 25%;
    // }
    .twomenu {
      padding-top: 26%;
    }


    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 15%;
      left: 10%;
      position: absolute;
      font-size: xx-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.2);
    }

    .leftbox {
      margin-top: 7%;
    }

    .drag-drop-demo .window {
      margin: 50px 30px;
      border-radius: 40px;
      border: 0.6rem solid #44ccc2;
      box-shadow: 0.4rem 0.4rem 0.1rem #057bb8;
    }

    .rightbox {
      margin-top: 3%;
      margin-right: 11%;
    }

    .windows {
      height: 4rem;
      font-size: 1.5rem;
      border-radius: 40px;
      margin: 9.5rem 1px 0 15px;
    }

    .otherwidth {
      height: 3.5rem;
      font-size: 2rem;
      margin: 8.5rem 1px 0 15px;
    }

    .imgsty1 {
      width: 66% !important;
    }

    .rightbox1 {
      margin-top: -4%;
      margin-right: 16%;
    }

    .leftbox1 {
      margin-top: 1%;
    }

    .drag-drop-demo .window1 {
      width: 45% !important;
      border-radius: 40px !important;
      margin: 40px 30px;
      border: 0.6rem solid #44ccc2 !important;
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

    .close img {
      height: 70px;
      width: 70px;

    }

    .roleimg {
      height: 53%;
      top: 20%;
    }
  }

  @media screen and (min-width: 1355px) and (max-width: 1600px){
    .fontsizes {
      margin-top: 30%;
    }

    //    .start {
    //     top: 3%;
    //     left: 25%;
    // }
    .twomenu {
      padding-top: 26%;
    }


    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 15%;
      left: 10%;
      position: absolute;
      font-size: xx-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.2);
    }

    .leftbox {
      margin-top: 7%;
    }

    .drag-drop-demo .window {
      margin: 50px 30px;
      border-radius: 40px;
      border: 0.6rem solid #44ccc2;
      box-shadow: 0.4rem 0.4rem 0.1rem #057bb8;
    }



    .windows {
      height: 4rem;
      font-size: 1.5rem;
      border-radius: 40px;
      margin: 9.5rem 1px 0 15px;
    }

    .otherwidth {
      height: 3.5rem;
      font-size: 2rem;
      margin: 8.5rem 1px 0 15px;
    }

    .imgsty1 {
      width: 66% !important;
    }

    .rightbox1 {
      margin-top: -4%;
      margin-right: 16%;
    }



    .drag-drop-demo .window1 {
      width: 45% !important;
      border-radius: 40px !important;
      margin: 40px 30px;
      border: 0.6rem solid #44ccc2 !important;
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

    .close img {
      height: 70px;
      width: 70px;

    }

    .roleimg {
      height: 53%;
      top: 20%;
    }
    .rightbox {
      margin-top: 7%;
      margin-right: 11%;
    }
    .leftbox1{
          margin-top: 4%;
    }
  }

  @media screen and (min-width: 700px) and (max-width: 811px) {
    .fontsizes {
      margin-top: 17%;
    }

    .twomenu {
      padding-top: 18%;
    }

    .drag-drop-demo .window1 {
      width: 30%;
    }

    .leftbox1 {
      width: 60%;
      margin-top: 0%;
      margin-left: 7%;
    }

    .rightbox1 {
      margin-top: 1% !important;
      margin-right: 12%;
    }

  }

  @media screen and (min-width: 812px) and (max-width:895px) {

    .twomenu {
      padding-top: 14%;
    }


    .fontsizes {
      margin-top: 17%;
    }

    //       .start{
    // 	display: block;
    // 	position: absolute;
    // 	top: -25%;
    // 	width: 50%;
    // 	left: 25%;
    // }
    .windows {

      margin: 5rem 1px 0 15px;
    }

    .leftbox {
      margin-top: 4%;
    }

    .drag-drop-demo .window {
      width: 30%;
    }

    .drag-drop-demo .window1 {
      width: 30% !important;
    }

    .otherwidth {
      margin: 2.8rem 1px 0 15px;
    }

    .rightbox1 {
      margin-top: 1% !important;
      margin-right: 17%;
    }

    .withcolor {
      height: 70%;
    }

  }

  @media screen and (min-width: 895px) and (max-width:1023px) {

    .twomenu {
      padding-top: 14%;
    }


    .fontsizes {
      margin-top: 17%;
    }

    //    .start{
    // 	display: block;
    // 	position: absolute;
    // 	top: -25%;
    // 	width: 50%;
    // 	left: 25%;
    // }
    .windows {

      margin: 5rem 1px 0 15px;
    }

    .leftbox {
      margin-top: 3%;
    }

    // .window1{
    // 	width: 30%;
    // }
    .drag-drop-demo .window {
      width: 30%;
    }

    .leftbox1 {
      margin-top: 2% !important;
    }

    .rightbox {
      margin-top: 0%;
    }

    .rightbox1 {
      margin-top: 2%;
      margin-right: 17%;
    }

    .drag-drop-demo .window1 {
      width: 30% !important;
    }

    .otherwidth {
      margin: 2.8rem 1px 0 15px;
    }

    .withcolor {
      height: 70%;
    }

  }

  @media screen and (min-width: 1600px) {
    .fontsizes {
      margin-top: 20%;
      font-size: 3rem;
    }

    //    .start {
    //     top: 3%;
    //     left: 25%;
    // }
    .twomenu {
      padding-top: 26%;
    }


    .fontsize {
      font-family: pepper;
      color: white;
      bottom: 0%;
      left: 10%;
      position: absolute;
      font-size: xx-large;
      max-height: 80%;
      min-height: 50%;
      margin-left: 2%;
      transform: scale(1.6);
    }

    .leftbox {
      margin-top: 4%;
      width: 50%;
      margin-left: 15%;
      padding-right: 10px;
    }

    .drag-drop-demo .window {
      margin: 50px 30px;
      width: 33%;
      border-radius: 90px;
      border: 1.3rem solid #44ccc2;
      -webkit-box-shadow: 0.8rem 0.8rem 0.1rem #057bb8;
      box-shadow: 0.8rem 0.8rem 0.1rem #057bb8;
    }
    #canvas {
      .jtk-endpoint{
        width: 100px;
        height: 100px;
      transform: scale(1.5) !important;
      }
    }





    .windows {
      height: 6rem;
      font-size: 2.5rem;
      border-radius: 90px;
      margin: 9rem 1px 0 15px;
    }

    .otherwidth {
      height: 6rem;
      font-size: 2.5rem;
      border-radius: 90px;
      margin: 8rem 1px 0 15px;
    }

    .imgsty1 {
      width: 66% !important;
    }
    .rightbox {
      margin-top: 7%;
      margin-right: 15%;
    }
    .leftbox1{
      margin-top: 4%;
    }
    .rightbox1 {
      margin-top: 4%;
      margin-right: 15%;
    }



    .drag-drop-demo .window1 {
      width: 25% !important;
      border-radius: 50px !important;
      margin: 30px 30px;
      border: 0.8rem solid #44ccc2 !important;
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
      border-radius: 75px;
    }
    .animapng7{
      width: auto;
    }
    .close {
      width: 100px;
      height: 100px;
      margin: -36px;
    }

    .close img {
      height: 100px;
      width: 100px;

    }

    .roleimg {
      height: 63%;
      top: 20%;
    }

  }
</style>
