<template>
	<div id="ifameid">

		<!-- <div style="margin-top: 5px;" @click="change" v-show="!resume">
			<img src="../assets/image/resume.png" style="width: 30%; height: 10%;">
		</div> -->

	</div>
</template>

<script>
	import $ from "jquery";
	var qs = require('qs');
	export default {
		name: "games",

		data() {
			return {
				show: true,
				resume: true,
				id:4,
				page:1,
        styles:'',
				type:'about',

			}
		},
		methods: {
      open(){
        setTimeout(() => {
              var audio = document.getElementById('music');
             this.styles = this.$route.query.styles;
			       // if(localStorage.getItem('audiomusic')=="false"){
		 	      //  }else{
				      //  audio.pause();
			       // }
             if(this.styles=="fruitlinkup"){
				       alertiframe2();
		        	}else if(this.styles=="findtoys"){
                 alertiframe3();
              }else if(this.styles=="fish"){
                 alertiframe1();
              }else if(this.styles=="pizza"){
                 alertiframe4();
              }
         },2000);
      }
		},
		created() {
			this.open();
		}
	}
</script>

<style scoped lang="less">

// .about {
// 		padding-top: 14%;
// 		display: flex;
// 		margin: 0px;
// 		width: 100%;
// 		height: 100%;
// 		display: block;
// 		position: fixed;
// 	}
//
// 	.twomenu {
// 		padding-top: 18%;
// 		display: flex;
// 		margin: 0px;
// 		width: 100%;
// 		height: 100%;
// 		display: block;
// 		position: fixed;
// 	}
//
// 	.fade-enter-active {
// 		transition: all 0.6s;
// 	}
//
// 	.fade-leave-active {
// 		transition: all 0.6s;
// 	}
//
// 	.fade-enter {
// 		//opacity: 0;
// 		transform: translate3d(0, 100%, 0);
// 	}
//
// 	.fade-leave-to {
// 		//opacity: 0;
// 		transform: translate3d(0, -100%, 0);
//
// 	}



</style>
