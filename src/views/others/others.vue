<template>
  <div class="others">
    <!-- <div v-if="start" style="position: relative; width: 100%;height: 100%;">
      <img src="../../assets/image/otherbg.png" class="otherbg" />
      <img src="../../assets/image/redback.png" @click="back()" style="position: absolute; width: 5%;top: 10px;left: 10px;z-index: 2;" />
      <div class="box">
        <button>
          <img src="../../assets/image/otherstart.png" style="width: 80%;" @click="open()">
        </button>
      </div>
    </div> -->
    <div  style="width: 100%;height: 100%;">
      <!-- <div  id="ifameid" > -->
      <!-- <img id="backimg" src="http://103.218.241.33/mtgameweb/assets/img/redback.png" @click="backmemu()" style="position: absolute; display: block; width: 5%;top: 10px;left: 10px;z-index: 3;"/> -->
      <!-- <iframe id="iframes" name="ifr1" src="http://103.218.241.33/mtgameweb/Game-flow/fruit-link-up/index.html" height="100%" width="100%" scrolling="auto" ></iframe> -->
      <!-- </div> -->
      <div style="width: 100%;height: 100%;position: relative;">
        <img src="../../assets/image/menubg.png" style="width: inherit;height: inherit;" />
        <img src="../../assets/image/redback.png" @click="back()" style="position: absolute; width: 5%;top: 10px;left: 10px;z-index: 2;" />
      </div>
      <div class="box1">
        <button class="game1">
          <!--<img src="../../assets/image/coming-soon.png" class="coming">-->
          <img src="../../assets/image/fishing.png">
          <img src="../../assets/image/fishingb.png" @click="fish()" style="top: 50%;left: 50%;width: 40%; margin-top: 68px;margin-left: -40px; position: absolute;">
        </button>
        <button class="game1">
          <!--<img src="../../assets/image/coming-soon.png" class="coming">-->
          <img src="../../assets/image/linkup.png">
          <img src="../../assets/image/linkupb.png" @click="linkup()" style="top: 50%;left: 50%;width: 40%; margin-top: 68px;margin-left: -40px; position: absolute;">
        </button>
        <button class="game1">
          <!--<img src="../../assets/image/coming-soon.png" class="coming">-->
          <img src="../../assets/image/findit.png">
          <img src="../../assets/image/finditb.png" @click="findtoys()" style="top: 50%;left: 50%;width: 40%; margin-top: 68px;margin-left: -40px; position: absolute;">
        </button>
        <button class="game1">
          <!--<img src="../../assets/image/coming-soon.png" class="coming">-->
          <img src="../../assets/image/pizza.png">
          <img src="../../assets/image/pizzab.png" @click="pizza()" style="top: 50%;left: 50%;width: 40%; margin-top: 68px;margin-left: -40px; position: absolute;">
        </button>
      </div>
      <div class="barbottom">
        <img src="../../assets/image/redwall.png" style="width: 100%;height: 100%;" />
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "others",
    data() {
      return {
        origin: '',
        ifameid: false,
        start: true,
      }
    },
    mounted() {},
    methods: {
      backmemu() {
        this.ifameid = false;
        // document.getElementById("backimg").style.display = "none";
        // document.getElementById("iframes").style.display = "none";
      },

      back() {
        var audio = document.getElementById('music');
        if (localStorage.getItem('audiomusic') === "false") {} else {
          audio.play();
        }
        this.$router.push({ //核心语句
          path: '/otherstart', //跳转的路径
        })
      },

      linkup() {
        this.$router.push({ //核心语句
        path: '/games', //跳转的路径
        query: {
           styles:"fruitlinkup"
        }
        })
      },
      fish() {
        this.$router.push({ //核心语句
        path: '/games', //跳转的路径
        query: {
           styles:"fish"
        }
        })
      },
      findtoys() {
        this.$router.push({ //核心语句
        path: '/games', //跳转的路径
        query: {
           styles:"findtoys"
        }
        })
      },
      pizza() {
        this.$router.push({ //核心语句
        path: '/games', //跳转的路径
        query: {
           styles:"pizza"
        }
        })
      },


      //console.log("true");
      // this.ifameid=true;
      // this.ifameid1=true;position: absolute; width: 100%; height: 100%; z-index: 3;

      //           var alertiframe = document.createElement("DIV");
      //           var strHtml='';
      //              alertiframe.style.position = "absolute";
      //              alertiframe.style.width = "100%";
      //             alertiframe.style.height = "100%";
      //               alertiframe.style.zIndex = "3";
      //             var strHtml =  "<img src='http://103.218.241.33/mtgameweb/Game-flow/img/cloce.png' onclick='closeGame()' style='position: absolute;width: 4%;right: 0'><iframe name='ifr1' id='iframes' src='http://103.218.241.33/mtgameweb/Game-flow/fruit-link-up/index.html' scrolling='auto'></iframe>" ;
      //              alertiframe.innerHTML = strHtml;
      //              	document.getElementById("ifameid").appendChild(alertiframe);
      //
      // 				// document.getElementById("backimg").style.display = "block";
      // 				 document.getElementById("iframes").style.display = "block";

    },
    // closeGame(){
    // 	  document.getElementById("ifameid").removeChild()(alertiframe);
    //   },
    // GetQueryString(variable){
    //     var query = window.location.search.substring(1);
    //           var vars = query.split("&");
    //           for (var i=0;i<vars.length;i++) {
    //                   var pair = vars[i].split("=");
    //                   if(pair[0] == variable){return pair[1];}
    //           }
    //           return(false);
    // }
    created() { //生命周期里接收参数

    }
  };
</script>
<style scoped lang="less">
  .others {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .otherbg {
    width: inherit;
    height: inherit;
  }

  .box {
    top: 75%;
    width: 20%;
    height: 100%;
    /* margin-top: 80%; */
    margin: 0 40%;
    position: absolute;
  }

  .box button {
    border: none;
    background: none;
    width: 100%;
  }

  .box1 {
    bottom: 10%;
    width: 100%;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    /* display: table; */
    position: absolute;
  }

  .coming {
    position: absolute;
    width: 50%;
    right: -30px;
    top: 30%;
  }

  .game1 {
    width: 40%;
    position: relative;
    border: none;
    margin: 0 20px;
    display: inline;
    background: none;
  }

  .barbottom {
    height: 15%;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  @media screen and (max-width:800px) {
    .otherbg {
      width: 120%;
      left: -10%;
      position: absolute;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    .box {
      width: 36%;
      margin: 0 32%;
    }

    .otherbg {
      width: 160%;
      left: -30%;
      position: absolute;
    }

    .game1 {
      width: 50%;
      margin: 60px;
      transform: scale(1.3);

    }

    .box1 {
      bottom: 9%;
    }

    .coming {
      position: absolute;
      width: 50%;
      right: -30px;
      top: 25%;
    }
  }

  @media screen and (min-width: 1200px) {
    .box {
      width: 36%;
      margin: 0 32%;
    }

    .otherbg {
      width: 160%;
      left: -30%;
      position: absolute;
    }

    .game1 img {
      transform: scaleX(1.4);
    }

    .game1 {
      margin: 0 150px;
      transform: scaleX(1.5);
    }

    .box1 {
      bottom: 24%;
      transform: scaleY(2);
    }

    .coming {
      z-index: 1;
      top: 23%;
      right: -70px;
    }
  }
</style>
