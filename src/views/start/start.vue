<template xmlns="http://www.w3.org/1999/html">
	<div class="startpage">
	<div class="start01">
		<div class="container">
            		<img src="../../assets/image/home_yun.png" style="position: absolute;width: 90%;margin: 5%;"/>

			<div class="back">
				<a>
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
            <div class="secret" v-if="secret">
              <h3 class="title">服务协议和隐私政策</h3>
              <h4 class="text">请你务必审慎阅读、充分理解”服务协议“和”隐私政策”各条款，我们需要你的手机信息。</h4>
              <h4 class="text">你可阅读《服务协议》和《隐私协议》了解详细信息。如你同意，请点击”同意“开始接受我们的服务</h4>
            </div>
					</div>
				</a>
			</div>
		</div>
	</div>
	</div>


</template>

<script>
	import $ from "jquery";
	var qs = require('qs');
	export default {
		name: "start",
		watch: {

		},
		data() {
			return {
        secret:flase,
				username:'',
				password:'',
				guardianId:'',
				//pic: "http://demo11.embraiz.com/mtGame",
				// url: "http://demo11.embraiz.com/mtGame/user/getSon",
				// pic: "http://demo11.embraiz.com/mtGameHK",
				url: "/user/",
        url1:'',
        url2:''
				//url: 'http://localhost:8080/mtGame/user/',
				// userId:'',
			};
		},
		methods: {
			alreadylogin() {
				var audio = document.getElementById('music');
				if(localStorage.getItem('audiomusic')==="false"){
				    audio.pause();
				}else{
					audio.play();
				}
        if (localStorage.getItem('userId') !== '' && localStorage.getItem('userId') !== undefined&& localStorage.getItem('userId') !== null
          &&localStorage.getItem('verifyCode')!=='' &&localStorage.getItem('verifyCode')!==undefined &&localStorage.getItem('verifyCode')!==null) {
          this.url1=this.url+'getSon';
          this.$axios
            .post(this.url1,qs.stringify({
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
        }else { //cookie值为空，则进入登录界面
              this.$router.push({path: '/login'})
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
			if (localStorage.getItem('checkbox') == true || localStorage.getItem('checkbox') == "true") {
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
</style>
