<template>
  <div class="about" style=" padding: 0;margin: 0;">
   <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <About show=true />
  </div>
</template>
<script>
import About from "@/components/about.vue";

export default {
  name: "about",
  components: {
    About
  }
};
</script>

<style scoped lang="less">
.about {
		// padding-top: 14%;
		// display: flex;
		// margin: 0px;
		width: 100%;
		height: 100%;
	 display: block;
	  position: fixed;
		background-color: #44ccc2;
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
		//transform: translate3d(0, -100%, 0);

	}
</style>
