<template xmlns="http://www.w3.org/1999/html">
	<div class="startpage">
<!--    <div class='update' v-if="local==='cn' && this.update==='true'">-->
<!--        <h3 style='width:100%;font-family: pepper,serif;padding:10px 0;'>Monkey Town 又有更新了!</h3>-->
<!--        <p class="p1">请马上到应用商店更新最新的版本以体验全新的功能及内容！</p>-->
<!--        <p class="p2" v-if="yingyongbao === 'false'">方法：开启 App Store 或 Google 搜索Monkey Town(CN)及点击更新</p>-->
<!--        <p class="p2" v-if="yingyongbao === 'true'">方法：开启 App Store 或 应用宝 搜索Monkey Town(CN)及点击更新</p>-->
<!--        <div class="style"/>-->
<!--        <p class="p3">-->
<!--          <span>-->
<!--            <a v-if="system==='ios'" target="_blank" style="color: rgb(138, 153, 158);font-size: 24px;text-decoration: none;" href="https://apps.apple.com/us/app/id1489150921">更新</a>-->
<!--            <a v-if="system==='android' && yingyongbao ==='false'" target="_blank" style="color: rgb(138, 153, 158);font-size: 24px;text-decoration: none;" href="market://details?id=io.embraiz.mtgame">更新</a>-->
<!--            <a v-if="system==='android' && yingyongbao ==='true'" target="_blank" style="color: rgb(138, 153, 158);font-size: 24px;text-decoration: none;" href="https://a.app.qq.com/o/simple.jsp?pkgname=io.embraiz.mtgame&channel=0002160650432d595942&fromcase=60001">更新</a>-->
<!--          </span>-->
<!--        </p>-->
<!--      </div>-->
<!--    <div class='update' v-if="local==='hk'&&this.update==='true'">-->
<!--        <h3 style='width:100%;font-family: pepper,serif;padding:10px 0;'>New Version Available!</h3>-->
<!--        <p class="p1">There is a new version of Monkey Town available for download! Please update the Monkey Town app by visiting the Apple Store/Play Store. </p>-->
<!--        <p class="p2" >To update: Launch App Store/Play Store, search Monkey Town (HK) and then click 'Update'.</p>-->
<!--        <div class="style"/>-->
<!--        <p class="p3">-->
<!--          <span>-->
<!--            <a v-if="system==='ios'" target="_blank" style="color: rgb(138, 153, 158);font-size: 24px;text-decoration: none;" href="https://apps.apple.com/us/app/id1500380592">Update</a>-->
<!--            <a v-if="system==='android'" target="_blank" style="color: rgb(138, 153, 158);font-size: 24px;text-decoration: none;" href="market://details?id=io.embraiz.mtgame">Update</a>-->
<!--          </span>-->
<!--        </p>-->
<!--      </div>-->
	  <div class="start01">
		<div class="container">
            		<img src="../../assets/image/home_yun.png" style="position: absolute;width: 90%;margin: 5%;"/>

			<div class="back">
				<a class="a">
					<div class="rotate">
            <img src="../../assets/image/earthpencil.png"  class="drewpencil"/>
						<img src="../../assets/image/s-earth.png" class="rotate-img" />
						<div class="plane"  @click="alreadylogin">
							<img src="../../assets/image/splash-03.png" />
							<img src="../../assets/image/wind.png" class="wind-img" />
						</div>
						<div class="m_town"  @click="alreadylogin">
							<img src="../../assets/image/splash-02.png" />
						</div>
						<div class="m_btn_start">
							<img src="../../assets/image/start-01.png" @click="alreadylogin" />
						</div>
            <div>
              <div class="secretBackground" v-if="update&&secretBackground&&local==='cn'" @click="cancel">
                <div class="secret" v-if="secretBackground">
                <h3 class="title">服务协议</h3>
                <p class="text">请你务必审慎阅读、充分理解”隐私政策”各条款，我们需要你的手机信息。</p>
                <p class="text">你可阅读《<span class="under" @click.stop="PrivacyPolicy('service')">用户协议</span>》和《<span class="under" @click="PrivacyPolicy('Privacy')">隐私协议</span>》了解详细信息。如你同意，请点击”同意“开始接受我们的服务</p>
<!--                <p class="text">你可阅读《<a class="under" href="https://www.monkeytree.com.cn/privacyStatement.jsp?lctHref=11">隐私协议</a>》了解详细信息。如你同意，请点击”同意“开始接受我们的服务</p>-->
                <div class="line"/>
                <div class="line_01"/>
                <h3 class="cancel" @click.stop="cancel">暂不使用</h3>
                <h3 class="agree" @click.stop="agree">同意</h3>
              </div>
              </div>
            </div>
					</div>
				</a>
			</div>
		</div>
	</div>
    <div @click.stop="cancel" class="Privacy" v-if="local==='cn'">
      <p>《用户协议》与《隐私政策》</p>
    </div>
    <div @click.stop="PrivacyPolicy" class="Privacy" v-if="local==='hk'">
      <p>《Privacy Statement》</p>
    </div>
	</div>
</template>

<script>
	import $ from "jquery";
	var qs = require('qs');
	//import cordova from 'cordova-plugin-inappbrowser';
	export default {
		name: "start",
		watch: {
      update: function(newVal) {
        console.log(this.update);
      },
		},
		data() {
			return {
        update:false,
        //手机系统
        system:'',
        yingyongbao:'',
			  //false是应用宝的隐私，true是谷歌的隐私
			  privacy:false,
        //local是hk为香港版，cn为大陆版
        local:'',
        secretBackground:true,
        secret:true,
				username:'',
				password:'',
				guardianId:'',
				url: "/user/",
        url1:'',
        url2:''
			};
		},
		methods: {
      updateURL(){
        if (this.local==='cn') {
          if(localStorage.getItem('yingyongbao')==='true'){
            //cordova.InAppBrowser.open('https://a.app.qq.com/o/simple.jsp?pkgname=io.embraiz.mtgame&channel=0002160650432d595942&fromcase=60001','_system');
            window.open('https://a.app.qq.com/o/simple.jsp?pkgname=io.embraiz.mtgame&channel=0002160650432d595942&fromcase=60001','_system');
          }else{
            window.open('https://mtgameweb.embraiz.com/privacyhk.html','_blank');
          }
        }else{
          window.open('https://mtgameweb.embraiz.com/privacyhk.html','_blank');
        }
      },
      herf(){
		    window.open('https://mtgameweb.embraiz.com/privacyhk.html','_blank');
      },
		  cancel(){
		    this.secretBackground = !this.secretBackground;
      },
      agree(){
        this.secret = false;
        this.secretBackground =false;
        localStorage.setItem('secret',false);
      },
      PrivacyPolicy(p){
        this.$router.push({ //核心语句
          path: '/PrivacyPolicy', //跳转的路径
          query:{
            place:'start',
            privacy:p,
          }
        })
      },
			alreadylogin() {
        if (this.secret === true&&this.local==='cn') {
          this.secretBackground = true;
        } else{
          var audio = document.getElementById('music');
          if (localStorage.getItem('audiomusic') === "false") {
            audio.pause();
          } else {
            audio.play();
          }
          if (localStorage.getItem('userId') !== '' && localStorage.getItem('userId') !== undefined && localStorage.getItem('userId') !== null
            && localStorage.getItem('verifyCode') !== '' && localStorage.getItem('verifyCode') !== undefined && localStorage.getItem('verifyCode') !== null) {
            this.url1 = this.url + 'getSon';
            this.$axios
              .post(this.url1, qs.stringify({
                  guardianId: this.guardianId,
                })
              ).then(
              res => {
                this.$router.push({path: '/select'})
              },
              res => {
                alertMsg("You must be connected to the internet.<br>Please connect and try again.");
              }
            );
          } else { //cookie值为空，则进入登录界面
            this.$router.push({path: '/login'})
          }
         }
      },
      bodyScroll(event) {
        event.preventDefault();
      },
		},
    destroyed() {
    document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
    },
		created() {
		  setTimeout(()=>{
        console.log(new Date());
        this.system = localStorage.getItem('system');
        this.update = localStorage.getItem('update');
        this.yingyongbao = localStorage.getItem('yingyongbao');
        // if(localStorage.getItem('yingyongbao')==='true'){
        //   this.yingyongbao='方法：开启 App Store 或 应用宝 搜索Monkey Town(CN)及点击更新'
        // }else{
        //   this.yingyongbao='方法：开启 App Store 或 Google 搜索Monkey Town(CN)及点击更新'
        // }
        this.local = localStorage.getItem('local');
        if (localStorage.getItem('secret')==='false'){
          this.secretBackground=false;
          this.secret=false;
        }
      },1000);
			if (localStorage.getItem('checkbox') === true || localStorage.getItem('checkbox') === "true") {
				this.username = localStorage.getItem('username');
				this.password = localStorage.getItem('password');
        this.guardianId = localStorage.getItem('userId');
			}
       document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
		}
	}
</script>

<style scoped lang="less">
  .startpage{
    width: 100%;
    height: 100%;
  }
  .drewpencil{
    width: 100%;
    position: absolute;
  }
  .update {
      width: 30%;
      height: 30%;
      position: absolute;
      background-color: white;
      border-radius: 20px;
      color: black;
      -webkit-transform: translate(50%, 50%);
      transform: translate(-50%, -50%);
      z-index: 1000;
      text-align: center;
      top: 50%;
      left: 50%;
  }
  .p1{
    width:90%;
    height:40%;
    margin:0 5%;
    position:absolute;
    text-align: left;
  }
  .p2{
    width:90%;
    height:40%;
    margin:3% 5%;
    top:45%;
    position:absolute;
    text-align: left;
  }
  .p3{
    width:100%;
    padding:10px 0;
    position: absolute;
    top: 83%;
  }
  .style{
    width: 100%;
    height: 1px;
    background-color: #ddd;
    bottom: 15%;
    position: absolute;
  }
  @media only screen and (min-width: 375px) and (max-width: 811px){
    .p2 {
      width: 90%;
      height: 40%;
      margin: 5% 5%;
      top: 47%;
      position: absolute;
      text-align: left;
    }
    .test {
      position: absolute;
      top: 90%;
      left: 90%;
    }
    .p1 {
      width: 90%;
      height: 40%;
      margin: 0% 5%;
      position: absolute;
      text-align: left;
    }
    .update {
      width: 60%;
      height: 65%;
      position: absolute;
      background-color: white;
      border-radius: 20px;
      color: black;
      -webkit-transform: translate(50%, 50%);
      transform: translate(-50%, -50%);
      z-index: 1000;
      text-align: center;
      top: 50%;
      left: 50%;
    }
    .p3 {
      width: 100%;
      padding: 10px 0;
      position: absolute;
      top: 82%;
    }
  }

  @media only screen and (min-width: 812px) and (max-width: 1023px){
    .test {
      position: absolute;
      top: 90%;
      left: 0;
    }
    .style {
      width: 100%;
      height: 1px;
      background-color: #ddd;
      bottom: 16%;
      position: absolute;
    }
    .update {
      width: 55%;
      height: 65%;
      position: absolute;
      background-color: white;
      border-radius: 20px;
      color: black;
      -webkit-transform: translate(50%, 50%);
      transform: translate(-50%, -50%);
      z-index: 1000;
      text-align: center;
      top: 50%;
      left: 50%;
    }
    .p3 {
      width: 100%;
      padding: 10px 0;
      position: absolute;
      top: 82%;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1600px){
    .test {
      position: absolute;
      top: 0;
      left: 90%;
    }
    .update {
    width: 45%;
    height: 35%;
    position: absolute;
    background-color: white;
    border-radius: 20px;
    color: black;
    -webkit-transform: translate(50%, 50%);
    transform: translate(-50%, -50%);
    z-index: 1000;
    text-align: center;
    top: 55%;
    left: 50%;
}
.p1 {
    width: 90%;
    height: 30%;
    margin: 0% 5%;
    position: absolute;
    text-align: left;
}
.p2 {
    width: 90%;
    height: 40%;
    margin: 5%;
    top: 40%;
    position: absolute;
    text-align: left;
}
    .p3 {
      width: 100%;
      padding: 10px 0;
      position: absolute;
      top: 92%;
      transform: translateY(-50%);
    }
  }


</style>
