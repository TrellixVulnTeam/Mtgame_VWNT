<template>
	<div v-bind:class="{'twomenu':resume,'about':!resume}">
		<div @click="$tips(true);sound()">
			<img src="../assets/image/sound_on.png" style="width: 30%; height: 10%;" v-show="!show" />
			<img src="../assets/image/sound_off.png" style="width: 30%; height: 10%;" v-show="show" />
		</div>
		<!-- <div style="margin-top: 5px;" @click="change" v-show="!resume">
			<img src="../assets/image/resume.png" style="width: 30%; height: 10%;">
		</div> -->
		<div style="margin-top: 5px;">
			<router-link to="/source"><img src="../assets/image/home.png" style="width: 30%; height: 10%;"></router-link>
		</div>
	</div>
</template>

<script>
	var show = true
	export default {
		name: "About",
		data() {
			return {
				show: true,
				resume: true,
				id:4,
				page:1,
				type:'about',

			}
		},
		methods: {
			sound(){
				var audio = document.getElementById('music');
				if(this.show==true){
					audio.play();
					this.show=false;
					localStorage.setItem("audiomusic", "true");
				}else{

					audio.pause();
					this.show=true;
					localStorage.setItem("audiomusic", "false");
				}
			},

		},
		created() { //生命周期里接收参数
			this.id = this.$route.query.id; //接受参数关键代码
			this.page = this.$route.query.page;
			this.type = this.$route.query.type;

			if(localStorage.getItem('audiomusic')=="false"){
				this.show=true;
			}else{
				this.show=false;
			}
			// if (this.type == 'pageto' || this.type == 'part2to' || this.type == 'part3to') {
			// 	this.resume = false;
			// }
		}

	};
</script>

<style scoped lang="less">
	.about {
		padding-top: 14%;
		display: flex;
		margin: 0px;
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
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

	.fade-enter-active {
		transition: all 0.6s;
	}

	.fade-leave-active {
		transition: all 0.6s;
	}

	.fade-enter {
		//opacity: 0;
		transform: translate3d(0, 100%, 0);
	}

	.fade-leave-to {
		//opacity: 0;
		transform: translate3d(0, -100%, 0);

	}

	@media screen and (max-width: 481px) {
		.about {
			padding-top: 18%;
		}

		.twomenu {
			padding-top: 23%;
		}
	}
	@media screen and (min-width: 812px) and (max-width:1023px) {
		.about {
			padding-top: 10%;
		}

		.twomenu {
			padding-top: 14%;
		}
	}
  @media screen and (min-width: 1024px)and(max-width: 1600px) {
    .about {
      padding-top: 24%;
    }

    .twomenu {
      padding-top: 28%;
    }
  }
  @media screen and (min-width: 1600px){
    .twomenu {
      padding-top: 18%;
    }
  }
</style>
