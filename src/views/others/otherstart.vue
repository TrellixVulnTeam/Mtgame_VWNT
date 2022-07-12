<template>
  <div class="otherstart">
    <div style="position: relative; width: 100%;height: 100%;">
      <img src="../../assets/image/otherbg.png" class="otherbg" />
      <img src="../../assets/image/redback.png" @click="$tips(true);back()" style="position: absolute; width: 5%;top: 10px;left: 10px;z-index: 2;" />
      <div class="box">
        <button>
          <img src="../../assets/image/otherstart.png" style="width: 80%;" @click="open()">
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "otherstart",
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
      open() {
         this.$router.push({ //核心语句
           path: '/others', //跳转的路径
         })
        // this.origins=window.location.origin;
        // this.href=window.location.href;
        // localStorage.setItem("origins", this.origins);
        // localStorage.setItem("href", this.href);
        // window.open('http://monkeytown.monkeytree.com.hk/Game-flow/index.html', '_blank')
        //alert(this.origins);
        //console.log(this.origins);
        //console.log(this.origins);http://127.0.0.1:8848/game-flow/index.html
        //window.location.href="http://monkeytown.monkeytree.com.hk/Game-flow/index.html?origins="+this.origins;
        //window.location.href=this.href+"/AngryMonkey/index.html";
      },
      back() {
        var audio = document.getElementById('music');
        if (localStorage.getItem('audiomusic') == "false") {} else {
          audio.play();
        }
        this.$router.push({ //核心语句
          path: '/source', //跳转的路径
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

    },

    created() { //生命周期里接收参数

    }
  };
</script>
<style scoped lang="less">
  .otherstart {
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
