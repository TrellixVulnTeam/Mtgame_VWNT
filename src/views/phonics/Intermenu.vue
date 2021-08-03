<template>
  <div class="home" style=" padding: 0;margin: 0;">
   <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Intmenu msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Intmenu from "@/components/Intmenu.vue";

export default {
  name: "intermenu",
  components: {
    Intmenu
  }
};
</script>
<style scoped lang="less">
.home{
	display: flex;
	padding: 0px;
	margin: 0px;
	width: 100%;
	height: 100%;
	display: block;
	position: fixed;
}	
</style>
