<template>

	<div id="hello">
		<!-- <h1>{{ msg }}</h1> -->
		<div class="contain" id="container" >
			<img src="../assets/image/seasons.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[0].active">
			<img src="../assets/image/4-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[1].active">
			<img src="../assets/image/5-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[2].active">
			<img src="../assets/image/6-bg.png"  style="width: 100%;background-color: #F3C700; height: 100%;display:block;position: absolute;" v-if="bgimg[3].active">
			<img src="../assets/image/7-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[4].active">
			<img src="../assets/image/8-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[5].active">
			<img src="../assets/image/9-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[6].active">
			<img src="../assets/image/10-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[7].active">
			<img src="../assets/image/11-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[8].active">
			<img src="../assets/image/12-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[9].active">
      <img src="../assets/image/1-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[10].active">
			<img src="../assets/image/2-bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[11].active">
      <img src="../assets/image/3-3bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[12].active">
      <img src="../assets/image/4-4bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[13].active">
      <img src="../assets/image/5-5bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[14].active">
      <img src="../assets/image/6-6bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[15].active">
      <img src="../assets/image/7-7bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[16].active">
      <img src="../assets/image/8-8bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[17].active">
      <img src="../assets/image/9-9bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[18].active">
      <img src="../assets/image/10-10bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[19].active">
      <img src="../assets/image/11-11bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[20].active">
      <img src="../assets/image/12-12bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[21].active">
      <img src="../assets/image/1-1bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[22].active">
      <img src="../assets/image/2-2bg.png"  style="width: 100%;background-color: #f3c700; height: 100%;display:block;position: absolute;" v-if="bgimg[23].active">

<!--      <img src="../assets/image/rightback.png"  @click="back" class="backbutton"/>-->
	  <div>
		<h2 class="jump" @click="jump()" v-if="this.part!=='part3'">Flashcards</h2>
	  </div>
			<div class="menulist" id="scrollbody">
				<div class="styletit">
					<span style="width:60%;display: block;margin: 0 auto; margin-top: 15px;">
            <!--part1-->
            <img src="../assets/image/season-logo1.png"  style="width: 50%;" v-if="bgimg[0].active&&part=='part1'">
						<img src="../assets/image/4-logo1.png" style="width: 50%;" v-if="bgimg[1].active&&part=='part1'">
						<img src="../assets/image/5-logo1.png" style="width: 50%;" v-if="bgimg[2].active&&part=='part1'">
						<img src="../assets/image/6-logo1.png" style="width: 50%;" v-if="bgimg[3].active&&part=='part1'">
						<img src="../assets/image/7-logo1.png" style="width: 50%;" v-if="bgimg[4].active&&part=='part1'">
						<img src="../assets/image/8-logo1.png" style="width: 50%;" v-if="bgimg[5].active&&part=='part1'">
						<img src="../assets/image/9-logo1.png" style="width: 50%;" v-if="bgimg[6].active&&part=='part1'">
						<img src="../assets/image/10-logo1.png" style="width: 50%;" v-if="bgimg[7].active&&part=='part1'">
						<img src="../assets/image/11-logo1.png" style="width: 50%;" v-if="bgimg[8].active&&part=='part1'">
						<img src="../assets/image/12-logo1.png" style="width: 50%;" v-if="bgimg[9].active&&part=='part1'">
            <img src="../assets/image/1-logo1.png" style="width: 50%;" v-if="bgimg[10].active&&part=='part1'">
						<img src="../assets/image/2-logo1.png" style="width: 50%;" v-if="bgimg[11].active&&part=='part1'">
						<img src="../assets/image/3-3logo1.png" style="width: 50%;" v-if="bgimg[12].active&&part=='part1'">
						<img src="../assets/image/4-4logo1.png" style="width: 50%;" v-if="bgimg[13].active&&part=='part1'">
						<img src="../assets/image/5-5logo1.png" style="width: 50%;" v-if="bgimg[14].active&&part=='part1'">
						<img src="../assets/image/6-6logo1.png" style="width: 50%;" v-if="bgimg[15].active&&part=='part1'">
						<img src="../assets/image/7-7logo1.png" style="width: 50%;" v-if="bgimg[16].active&&part=='part1'">
						<img src="../assets/image/8-8logo1.png" style="width: 50%;" v-if="bgimg[17].active&&part=='part1'">
            <img src="../assets/image/9-9logo1.png" style="width: 50%;" v-if="bgimg[18].active&&part=='part1'">
						<img src="../assets/image/10-10logo1.png" style="width: 50%;" v-if="bgimg[19].active&&part=='part1'">
						<img src="../assets/image/11-11logo1.png" style="width: 50%;" v-if="bgimg[20].active&&part=='part1'">
						<img src="../assets/image/12-logo1.png" style="width: 50%;" v-if="bgimg[21].active&&part=='part1'">
            <img src="../assets/image/1-1logo1.png" style="width: 50%;" v-if="bgimg[22].active&&part=='part1'">
						<img src="../assets/image/2-2logo1.png" style="width: 50%;" v-if="bgimg[23].active&&part=='part1'">
            <!--part2-->
            <img src="../assets/image/season-logo2.png"  style="width: 50%;" v-if="bgimg[0].active&&part=='part2'">
						<img src="../assets/image/4-logo2.png" style="width: 50%;" v-if="bgimg[1].active&&part=='part2'">
						<img src="../assets/image/5-logo2.png" style="width: 50%;" v-if="bgimg[2].active&&part=='part2'">
						<img src="../assets/image/6-logo2.png" style="width: 50%;" v-if="bgimg[3].active&&part=='part2'">
						<img src="../assets/image/7-logo2.png" style="width: 50%;" v-if="bgimg[4].active&&part=='part2'">
						<img src="../assets/image/8-logo2.png" style="width: 50%;" v-if="bgimg[5].active&&part=='part2'">
						<img src="../assets/image/9-logo2.png" style="width: 50%;" v-if="bgimg[6].active&&part=='part2'">
						<img src="../assets/image/10-logo2.png" style="width: 50%;" v-if="bgimg[7].active&&part=='part2'">
						<img src="../assets/image/11-logo2.png" style="width: 50%;" v-if="bgimg[8].active&&part=='part2'">
						<img src="../assets/image/12-logo2.png" style="width: 50%;" v-if="bgimg[9].active&&part=='part2'">
            <img src="../assets/image/1-logo2.png" style="width: 50%;" v-if="bgimg[10].active&&part=='part2'">
						<img src="../assets/image/2-logo2.png" style="width: 50%;" v-if="bgimg[11].active&&part=='part2'">
						<img src="../assets/image/3-3logo2.png" style="width: 50%;" v-if="bgimg[12].active&&part=='part2'">
						<img src="../assets/image/4-4logo2.png" style="width: 50%;" v-if="bgimg[13].active&&part=='part2'">
						<img src="../assets/image/5-5logo2.png" style="width: 50%;" v-if="bgimg[14].active&&part=='part2'">
						<img src="../assets/image/6-6logo2.png" style="width: 50%;" v-if="bgimg[15].active&&part=='part2'">
            <img src="../assets/image/7-7logo2.png" style="width: 50%;" v-if="bgimg[16].active&&part=='part2'">
						<img src="../assets/image/8-8logo2.png" style="width: 50%;" v-if="bgimg[17].active&&part=='part2'">
            <img src="../assets/image/9-9logo2.png" style="width: 50%;" v-if="bgimg[18].active&&part=='part2'">
						<img src="../assets/image/10-10logo2.png" style="width: 50%;" v-if="bgimg[19].active&&part=='part2'">
						<img src="../assets/image/11-11logo2.png" style="width: 50%;" v-if="bgimg[20].active&&part=='part2'">
						<img src="../assets/image/12-logo2.png" style="width: 50%;" v-if="bgimg[21].active&&part=='part2'">
            <img src="../assets/image/1-1logo2.png" style="width: 50%;" v-if="bgimg[22].active&&part=='part2'">
						<img src="../assets/image/2-2logo2.png" style="width: 50%;" v-if="bgimg[23].active&&part=='part2'">
            <!--part3-->
						<img src="../assets/image/season-logo.png"  style="width: 50%;" v-if="bgimg[0].active&&part=='part3'">
						<img src="../assets/image/4-logo.png" style="width: 50%;" v-if="bgimg[1].active&&part=='part3'">
						<img src="../assets/image/5-logo.png" style="width: 50%;" v-if="bgimg[2].active&&part=='part3'">
						<img src="../assets/image/6-logo.png" style="width: 50%;" v-if="bgimg[3].active&&part=='part3'">
						<img src="../assets/image/7-logo.png" style="width: 50%;" v-if="bgimg[4].active&&part=='part3'">
						<img src="../assets/image/8-logo.png" style="width: 50%;" v-if="bgimg[5].active&&part=='part3'">
						<img src="../assets/image/9-logo.png" style="width: 50%;" v-if="bgimg[6].active&&part=='part3'">
						<img src="../assets/image/10-logo.png" style="width: 50%;" v-if="bgimg[7].active&&part=='part3'">
						<img src="../assets/image/11-logo.png" style="width: 50%;" v-if="bgimg[8].active&&part=='part3'">
						<img src="../assets/image/12-logo.png" style="width: 50%;" v-if="bgimg[9].active&&part=='part3'">
            <img src="../assets/image/1-logo.png" style="width: 50%;" v-if="bgimg[10].active&&part=='part3'">
						<img src="../assets/image/2-logo.png" style="width: 50%;" v-if="bgimg[11].active&&part=='part3'">
						<img src="../assets/image/3-3logo.png" style="width: 50%;" v-if="bgimg[12].active&&part=='part3'">
						<img src="../assets/image/4-4logo.png" style="width: 50%;" v-if="bgimg[13].active&&part=='part3'">
						<img src="../assets/image/5-5logo.png" style="width: 50%;" v-if="bgimg[14].active&&part=='part3'">
						<img src="../assets/image/6-6logo.png" style="width: 50%;" v-if="bgimg[15].active&&part=='part3'">
            <img src="../assets/image/7-7logo.png" style="width: 50%;" v-if="bgimg[16].active&&part=='part3'">
						<img src="../assets/image/8-8logo.png" style="width: 50%;" v-if="bgimg[17].active&&part=='part3'">
            <img src="../assets/image/9-9logo.png" style="width: 50%;" v-if="bgimg[18].active&&part=='part3'">
						<img src="../assets/image/10-10logo.png" style="width: 50%;" v-if="bgimg[19].active&&part=='part3'">
						<img src="../assets/image/11-11logo.png" style="width: 50%;" v-if="bgimg[20].active&&part=='part3'">
						<img src="../assets/image/12-12logo.png" style="width: 50%;" v-if="bgimg[21].active&&part=='part3'">
            <img src="../assets/image/1-1logo.png" style="width: 50%;" v-if="bgimg[22].active&&part=='part3'">
						<img src="../assets/image/2-2logo.png" style="width: 50%;" v-if="bgimg[23].active&&part=='part3'">

          </span>
				</div>
        <!--<div>-->
				<div class="listimg listfirst">
					<img :src=lightstar class="imgposit" v-if="stars[0].onestart">
					<img :src=star class="imgposit" v-if="!stars[0].onestart">

					<img :src=lightstar style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;" v-if="stars[0].twostart">
					<img :src=star style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="!stars[0].twostart">

					<img :src=lightstar class="imgposit1"   v-if="stars[0].threestart">
					<img :src=star class="imgposit1"   v-if="!stars[0].threestart">
					<img @click="change2" src="../assets/image/3-2.png" style="position: sticky;height: 60%" v-if="bgimg[0].active">
					<img @click="change2" src="../assets/image/4-2.png" style="position: sticky;height: 60%" v-if="bgimg[1].active">
					<img @click="change2" src="../assets/image/5-2.png" style="position: sticky;height: 60%" v-if="bgimg[2].active">
					<img @click="change2" src="../assets/image/6-2.png" style="position: sticky;height: 60%" v-if="bgimg[3].active">
					<img @click="change2" src="../assets/image/7-2.png" style="position: sticky;height: 60%" v-if="bgimg[4].active">
					<img @click="change2" src="../assets/image/8-2.png" style="position: sticky;height: 60%" v-if="bgimg[5].active">
					<img @click="change2" src="../assets/image/9-2.png" style="position: sticky;height: 60%" v-if="bgimg[6].active">
					<img @click="change2" src="../assets/image/10-2.png" style="position: sticky;height: 60%" v-if="bgimg[7].active">
					<img @click="change2" src="../assets/image/11-2.png" style="position: sticky;height: 60%" v-if="bgimg[8].active">
					<img @click="change2" src="../assets/image/12-2.png" style="position: sticky;height: 60%" v-if="bgimg[9].active">
          <img @click="change2" src="../assets/image/1-2.png" style="position: sticky;height: 60%" v-if="bgimg[10].active">
          <img @click="change2" src="../assets/image/2-2.png" style="position: sticky;height: 60%" v-if="bgimg[11].active">
          <img @click="change2" src="../assets/image/3-23.png" style="position: sticky;height: 60%" v-if="bgimg[12].active">
          <img @click="change2" src="../assets/image/4-24.png" style="position: sticky;height: 60%" v-if="bgimg[13].active">
          <img @click="change2" src="../assets/image/5-25.png" style="position: sticky;height: 60%" v-if="bgimg[14].active">
					<img @click="change2" src="../assets/image/6-26.png" style="position: sticky;height: 60%" v-if="bgimg[15].active">
          <img @click="change2" src="../assets/image/7-71.png" style="position: sticky;height: 60%" v-if="bgimg[16].active">
          <img @click="change2" src="../assets/image/8-81.png" style="position: sticky;height: 60%" v-if="bgimg[17].active">
          <img @click="change2" src="../assets/image/9-29.png" style="position: sticky;height: 60%" v-if="bgimg[18].active">
          <img @click="change2" src="../assets/image/10-210.png" style="position: sticky;height: 60%" v-if="bgimg[19].active">
          <img @click="change2" src="../assets/image/11-211.png" style="position: sticky;height: 60%" v-if="bgimg[20].active">
          <img @click="change2" src="../assets/image/12-212.png" style="position: sticky;height: 60%" v-if="bgimg[21].active">
          <img @click="change2" src="../assets/image/1-21.png" style="position: sticky;height: 60%" v-if="bgimg[22].active">
          <img @click="change2" src="../assets/image/2-22.png" style="position: sticky;height: 60%" v-if="bgimg[23].active">
          <!--<img @click="change" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;"> -->
				</div>
				<div class="listimg">
					<img :src=lightstar class="imgposit" v-if="stars[1].onestart">
					<img :src=star class="imgposit" v-if="!stars[1].onestart">

					<img :src=lightstar   style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="stars[1].twostart">
					<img :src=star  style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="!stars[1].twostart">

					<img :src=lightstar class="imgposit1"   v-if="stars[1].threestart">
					<img :src=star class="imgposit1"   v-if="!stars[1].threestart">
				<!-- 	<img @click="change2" src="../assets/image/memu2.png" style="position: sticky;height: 60%"> -->

          <img @click="change4" src="../assets/image/3-4.png" style="position: sticky;height: 60%" v-if="bgimg[0].active">
          <img @click="change4" src="../assets/image/4-4.png" style="position: sticky;height: 60%" v-if="bgimg[1].active">
          <img @click="change4" src="../assets/image/5-4.png" style="position: sticky;height: 60%" v-if="bgimg[2].active">
          <img @click="change4" src="../assets/image/6-4.png" style="position: sticky;height: 60%" v-if="bgimg[3].active">
          <img @click="change4" src="../assets/image/7-4.png" style="position: sticky;height: 60%" v-if="bgimg[4].active">
          <img @click="change4" src="../assets/image/8-4.png" style="position: sticky;height: 60%" v-if="bgimg[5].active">
          <img @click="change4" src="../assets/image/9-4.png" style="position: sticky;height: 60%" v-if="bgimg[6].active">
          <img @click="change4" src="../assets/image/10-4.png" style="position: sticky;height: 60%" v-if="bgimg[7].active">
          <img @click="change4" src="../assets/image/11-4.png" style="position: sticky;height: 60%" v-if="bgimg[8].active">
          <img @click="change4" src="../assets/image/12-4.png" style="position: sticky;height: 60%" v-if="bgimg[9].active">
          <img @click="change4" src="../assets/image/1-4.png" style="position: sticky;height: 60%" v-if="bgimg[10].active">
          <img @click="change4" src="../assets/image/2-4.png" style="position: sticky;height: 60%" v-if="bgimg[11].active">
          <img @click="change4" src="../assets/image/3-43.png" style="position: sticky;height: 60%" v-if="bgimg[12].active">
          <img @click="change4" src="../assets/image/4-44.png" style="position: sticky;height: 60%" v-if="bgimg[13].active">
          <img @click="change4" src="../assets/image/5-45.png" style="position: sticky;height: 60%" v-if="bgimg[14].active">
					<img @click="change4" src="../assets/image/6-46.png" style="position: sticky;height: 60%" v-if="bgimg[15].active">
          <img @click="change4" src="../assets/image/7-72.png" style="position: sticky;height: 60%" v-if="bgimg[16].active">
          <img @click="change4" src="../assets/image/8-82.png" style="position: sticky;height: 60%" v-if="bgimg[17].active">
          <img @click="change4" src="../assets/image/9-49.png" style="position: sticky;height: 60%" v-if="bgimg[18].active">
          <img @click="change4" src="../assets/image/10-410.png" style="position: sticky;height: 60%" v-if="bgimg[19].active">
          <img @click="change4" src="../assets/image/11-411.png" style="position: sticky;height: 60%" v-if="bgimg[20].active">
          <img @click="change4" src="../assets/image/12-412.png" style="position: sticky;height: 60%" v-if="bgimg[21].active">
          <img @click="change4" src="../assets/image/1-41.png" style="position: sticky;height: 60%" v-if="bgimg[22].active">
          <img @click="change4" src="../assets/image/2-42.png" style="position: sticky;height: 60%" v-if="bgimg[23].active">
          <!--<img @click="change2" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;"> -->
					<img src="../assets/image/chose.png" class="keyclose"  v-if="key">
					<!-- <span class="spanicon">LISTENING</span> -->
					<!-- <img @click="change2" src="../assets/image/11.png" style="position: sticky;height: 60%"> -->
<!-- 					<img @click="change2" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;">
 -->				</div>
				<div class="listimg">
					<img :src=lightstar class="imgposit" v-if="stars[2].onestart">
					<img :src=star class="imgposit" v-if="!stars[2].onestart">
					<img :src=lightstar style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="stars[2].twostart">
					<img :src=star style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="!stars[2].twostart">
					<img :src=lightstar class="imgposit1"   v-if="stars[2].threestart">
					<img :src=star class="imgposit1"   v-if="!stars[2].threestart">
					<img @click="change3" src="../assets/image/3-3.png" style="position: sticky;height: 60%" v-if="bgimg[0].active">
					<img @click="change3" src="../assets/image/4-3.png" style="position: sticky;height: 60%" v-if="bgimg[1].active">
					<img @click="change3" src="../assets/image/5-3.png" style="position: sticky;height: 60%" v-if="bgimg[2].active">
					<img @click="change3" src="../assets/image/6-3.png" style="position: sticky;height: 60%" v-if="bgimg[3].active">
					<img @click="change3" src="../assets/image/7-3.png" style="position: sticky;height: 60%" v-if="bgimg[4].active">
					<img @click="change3" src="../assets/image/8-3.png" style="position: sticky;height: 60%" v-if="bgimg[5].active">
					<img @click="change3" src="../assets/image/9-3.png" style="position: sticky;height: 60%" v-if="bgimg[6].active">
					<img @click="change3" src="../assets/image/10-3.png" style="position: sticky;height: 60%" v-if="bgimg[7].active">
					<img @click="change3" src="../assets/image/11-3.png" style="position: sticky;height: 60%" v-if="bgimg[8].active">
					<img @click="change3" src="../assets/image/12-3.png" style="position: sticky;height: 60%" v-if="bgimg[9].active">
          <img @click="change3" src="../assets/image/1-3.png" style="position: sticky;height: 60%" v-if="bgimg[10].active">
          <img @click="change3" src="../assets/image/2-3.png" style="position: sticky;height: 60%" v-if="bgimg[11].active">
          <img @click="change3" src="../assets/image/3-33.png" style="position: sticky;height: 60%" v-if="bgimg[12].active">
          <img @click="change3" src="../assets/image/4-34.png" style="position: sticky;height: 60%" v-if="bgimg[13].active">
          <img @click="change3" src="../assets/image/5-35.png" style="position: sticky;height: 60%" v-if="bgimg[14].active">
					<img @click="change3" src="../assets/image/6-36.png" style="position: sticky;height: 60%" v-if="bgimg[15].active">
          <img @click="change3" src="../assets/image/7-73.png" style="position: sticky;height: 60%" v-if="bgimg[16].active">
          <img @click="change3" src="../assets/image/8-83.png" style="position: sticky;height: 60%" v-if="bgimg[17].active">
          <img @click="change3" src="../assets/image/9-39.png" style="position: sticky;height: 60%" v-if="bgimg[18].active">
          <img @click="change3" src="../assets/image/10-310.png" style="position: sticky;height: 60%" v-if="bgimg[19].active">
          <img @click="change3" src="../assets/image/11-311.png" style="position: sticky;height: 60%" v-if="bgimg[20].active">
          <img @click="change3" src="../assets/image/12-312.png" style="position: sticky;height: 60%" v-if="bgimg[21].active">
          <img @click="change3" src="../assets/image/1-31.png" style="position: sticky;height: 60%" v-if="bgimg[22].active">
          <img @click="change3" src="../assets/image/2-32.png" style="position: sticky;height: 60%" v-if="bgimg[23].active">
          <!-- <img @click="change3" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;"> -->
					<img src="../assets/image/chose.png" class="keyclose"  v-if="key">
					<!-- <span class="spanicon">MEMORY  GAME</span> -->
					<!-- <img @click="change2" src="../assets/image/11.png" style="position: sticky;height: 60%"> -->
<!-- 					<img @click="change3" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;">
 -->				</div>
				<div class="listimg">
					<img :src=lightstar class="imgposit" v-if="stars[3].onestart">
					<img :src=star class="imgposit" v-if="!stars[3].onestart">

					<img :src=lightstar style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="stars[3].twostart">
					<img :src=star style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="!stars[3].twostart">

					<img :src=lightstar class="imgposit1"   v-if="stars[3].threestart">
					<img :src=star class="imgposit1"   v-if="!stars[3].threestart">
					<img @click="change6" src="../assets/image/3-6.png" style="position: sticky;height: 60%" v-if="bgimg[0].active">
					<img @click="change6" src="../assets/image/4-6.png" style="position: sticky;height: 60%" v-if="bgimg[1].active">
					<img @click="change6" src="../assets/image/5-6.png" style="position: sticky;height: 60%" v-if="bgimg[2].active">
					<img @click="change6" src="../assets/image/6-6.png" style="position: sticky;height: 60%" v-if="bgimg[3].active">
					<img @click="change6" src="../assets/image/7-6.png" style="position: sticky;height: 60%" v-if="bgimg[4].active">
					<img @click="change6" src="../assets/image/8-6.png" style="position: sticky;height: 60%" v-if="bgimg[5].active">
					<img @click="change6" src="../assets/image/9-6.png" style="position: sticky;height: 60%" v-if="bgimg[6].active">
					<img @click="change6" src="../assets/image/10-6.png" style="position: sticky;height: 60%" v-if="bgimg[7].active">
					<img @click="change6" src="../assets/image/11-6.png" style="position: sticky;height: 60%" v-if="bgimg[8].active">
					<img @click="change6" src="../assets/image/12-6.png" style="position: sticky;height: 60%" v-if="bgimg[9].active">
          <img @click="change6" src="../assets/image/1-6.png" style="position: sticky;height: 60%" v-if="bgimg[10].active">
          <img @click="change6" src="../assets/image/2-6.png" style="position: sticky;height: 60%" v-if="bgimg[11].active">
          <img @click="change6" src="../assets/image/3-63.png" style="position: sticky;height: 60%" v-if="bgimg[12].active">
          <img @click="change6" src="../assets/image/4-64.png" style="position: sticky;height: 60%" v-if="bgimg[13].active">
          <img @click="change6" src="../assets/image/5-65.png" style="position: sticky;height: 60%" v-if="bgimg[14].active">
					<img @click="change6" src="../assets/image/6-66.png" style="position: sticky;height: 60%" v-if="bgimg[15].active">
          <img @click="change6" src="../assets/image/7-74.png" style="position: sticky;height: 60%" v-if="bgimg[16].active">
          <img @click="change6" src="../assets/image/8-84.png" style="position: sticky;height: 60%" v-if="bgimg[17].active">
          <img @click="change6" src="../assets/image/9-69.png" style="position: sticky;height: 60%" v-if="bgimg[18].active">
          <img @click="change6" src="../assets/image/10-610.png" style="position: sticky;height: 60%" v-if="bgimg[19].active">
          <img @click="change6" src="../assets/image/11-611.png" style="position: sticky;height: 60%" v-if="bgimg[20].active">
          <img @click="change6" src="../assets/image/12-612.png" style="position: sticky;height: 60%" v-if="bgimg[21].active">
          <img @click="change6" src="../assets/image/1-61.png" style="position: sticky;height: 60%" v-if="bgimg[22].active">
          <img @click="change6" src="../assets/image/2-62.png" style="position: sticky;height: 60%" v-if="bgimg[23].active">
          <!-- <img @click="change4" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;"> -->
					<img src="../assets/image/chose.png" class="keyclose"  v-if="key">
					<!-- <span class="spanicon">MATCHING</span> -->
					<!-- <img @click="change2" src="../assets/image/11.png" style="position: sticky;height: 60%"> -->
<!-- 					<img @click="change4" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;">
 -->				</div>
				<div class="listimg">
					<img :src=lightstar class="imgposit" v-if="stars[4].onestart">
					<img :src=star class="imgposit" v-if="!stars[4].onestart">

					<img :src=lightstar style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="stars[4].twostart">
					<img :src=star style="position: relative;height: 11%;top: 21%; z-index: 2;" v-if="!stars[4].twostart">

					<img :src=lightstar class="imgposit1"   v-if="stars[4].threestart">
					<img :src=star class="imgposit1"   v-if="!stars[4].threestart">

          <img @click="change7" src="../assets/image/3-7.png" style="position: sticky;height: 60%" v-if="bgimg[0].active">
          <img @click="change7" src="../assets/image/4-7.png" style="position: sticky;height: 60%" v-if="bgimg[1].active">
          <img @click="change7" src="../assets/image/5-7.png" style="position: sticky;height: 60%" v-if="bgimg[2].active">
          <img @click="change7" src="../assets/image/6-7.png" style="position: sticky;height: 60%" v-if="bgimg[3].active">
          <img @click="change7" src="../assets/image/7-7.png" style="position: sticky;height: 60%" v-if="bgimg[4].active">
          <img @click="change7" src="../assets/image/8-7.png" style="position: sticky;height: 60%" v-if="bgimg[5].active">
          <img @click="change7" src="../assets/image/9-7.png" style="position: sticky;height: 60%" v-if="bgimg[6].active">
          <img @click="change7" src="../assets/image/10-7.png" style="position: sticky;height: 60%" v-if="bgimg[7].active">
          <img @click="change7" src="../assets/image/11-7.png" style="position: sticky;height: 60%" v-if="bgimg[8].active">
          <img @click="change7" src="../assets/image/12-7.png" style="position: sticky;height: 60%" v-if="bgimg[9].active">
          <img @click="change7" src="../assets/image/1-7.png" style="position: sticky;height: 60%" v-if="bgimg[10].active">
          <img @click="change7" src="../assets/image/2-7.png" style="position: sticky;height: 60%" v-if="bgimg[11].active">
          <img @click="change7" src="../assets/image/3-73.png" style="position: sticky;height: 60%" v-if="bgimg[12].active">
          <img @click="change7" src="../assets/image/4-74.png" style="position: sticky;height: 60%" v-if="bgimg[13].active">
          <img @click="change7" src="../assets/image/5-75.png" style="position: sticky;height: 60%" v-if="bgimg[14].active">
					<img @click="change7" src="../assets/image/6-76.png" style="position: sticky;height: 60%" v-if="bgimg[15].active">
          <img @click="change7" src="../assets/image/7-75.png" style="position: sticky;height: 60%" v-if="bgimg[16].active">
          <img @click="change7" src="../assets/image/8-85.png" style="position: sticky;height: 60%" v-if="bgimg[17].active">
          <img @click="change7" src="../assets/image/9-79.png" style="position: sticky;height: 60%" v-if="bgimg[18].active">
          <img @click="change7" src="../assets/image/10-710.png" style="position: sticky;height: 60%" v-if="bgimg[19].active">
          <img @click="change7" src="../assets/image/11-711.png" style="position: sticky;height: 60%" v-if="bgimg[20].active">
          <img @click="change7" src="../assets/image/12-712.png" style="position: sticky;height: 60%" v-if="bgimg[21].active">
          <img @click="change7" src="../assets/image/1-71.png" style="position: sticky;height: 60%" v-if="bgimg[22].active">
          <img @click="change7" src="../assets/image/2-72.png" style="position: sticky;height: 60%" v-if="bgimg[23].active">
          <!-- <img @click="change5" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;"> -->
					<img src="../assets/image/chose.png" class="keyclose"  v-if="key">
					<!-- <span class="spanicon">YES  0R  NO</span> -->
					<!-- <img @click="change2" src="../assets/image/11.png" style="position: sticky;height: 60%"> -->
<!-- 					<img @click="change5" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;">
 -->				</div>
				<div class="listimg">
					<img :src=lightstar class="imgposit" v-if="stars[5].onestart">
					<img :src=star class="imgposit" v-if="!stars[5].onestart">
					<img :src=lightstar style="position: relative;height: 11%;top: 21%; z-index: 2;" v-if="stars[5].twostart">
					<img :src=star style="position: relative;height: 11%;top: 21%; z-index: 2;" v-if="!stars[5].twostart">
					<img :src=lightstar class="imgposit1"   v-if="stars[5].threestart">
					<img :src=star class="imgposit1"   v-if="!stars[5].threestart">
					<img @click="change5" src="../assets/image/3-5.png" style="position: sticky;height: 60%" v-if="bgimg[0].active">
					<img @click="change5" src="../assets/image/4-5.png" style="position: sticky;height: 60%" v-if="bgimg[1].active">
					<img @click="change5" src="../assets/image/5-5.png" style="position: sticky;height: 60%" v-if="bgimg[2].active">
					<img @click="change5" src="../assets/image/6-5.png" style="position: sticky;height: 60%" v-if="bgimg[3].active">
					<img @click="change5" src="../assets/image/7-5.png" style="position: sticky;height: 60%" v-if="bgimg[4].active">
					<img @click="change5" src="../assets/image/8-5.png" style="position: sticky;height: 60%" v-if="bgimg[5].active">
					<img @click="change5" src="../assets/image/9-5.png" style="position: sticky;height: 60%" v-if="bgimg[6].active">
					<img @click="change5" src="../assets/image/10-5.png" style="position: sticky;height: 60%" v-if="bgimg[7].active">
					<img @click="change5" src="../assets/image/11-5.png" style="position: sticky;height: 60%" v-if="bgimg[8].active">
					<img @click="change5" src="../assets/image/12-5.png" style="position: sticky;height: 60%" v-if="bgimg[9].active">
          <img @click="change5" src="../assets/image/1-5.png" style="position: sticky;height: 60%" v-if="bgimg[10].active">
          <img @click="change5" src="../assets/image/2-5.png" style="position: sticky;height: 60%" v-if="bgimg[11].active">
          <img @click="change5" src="../assets/image/3-53.png" style="position: sticky;height: 60%" v-if="bgimg[12].active">
          <img @click="change5" src="../assets/image/4-54.png" style="position: sticky;height: 60%" v-if="bgimg[13].active">
          <img @click="change5" src="../assets/image/5-55.png" style="position: sticky;height: 60%" v-if="bgimg[14].active">
					<img @click="change5" src="../assets/image/6-56.png" style="position: sticky;height: 60%" v-if="bgimg[15].active">
          <img @click="change5" src="../assets/image/7-76.png" style="position: sticky;height: 60%" v-if="bgimg[16].active">
          <img @click="change5" src="../assets/image/8-86.png" style="position: sticky;height: 60%" v-if="bgimg[17].active">
          <img @click="change5" src="../assets/image/9-59.png" style="position: sticky;height: 60%" v-if="bgimg[18].active">
          <img @click="change5" src="../assets/image/10-510.png" style="position: sticky;height: 60%" v-if="bgimg[19].active">
          <img @click="change5" src="../assets/image/11-511.png" style="position: sticky;height: 60%" v-if="bgimg[20].active">
          <img @click="change5" src="../assets/image/12-512.png" style="position: sticky;height: 60%" v-if="bgimg[21].active">
          <img @click="change5" src="../assets/image/1-51.png" style="position: sticky;height: 60%" v-if="bgimg[22].active">
          <img @click="change5" src="../assets/image/2-52.png" style="position: sticky;height: 60%" v-if="bgimg[23].active">
          <!-- <img @click="change6" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;"> -->
					<img src="../assets/image/chose.png" class="keyclose"  v-if="key">
					<!-- <span class="spanicon">MISSING  LETTERS</span> -->
					<!-- <img @click="change2" src="../assets/image/11.png" style="position: sticky;height: 60%"> -->
<!-- 					<img @click="change6" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;">-->
				</div>
				<div class="listimg" v-if="!boss">
					<img :src=lightstar class="imgposit" v-if="stars[6].onestart">
					<img :src=star class="imgposit" v-if="!stars[6].onestart">

					<img :src=lightstar style="position: relative;height: 11%;top: 21%; z-index: 2;" v-if="stars[6].twostart">
					<img :src=star style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="!stars[6].twostart">

					<img :src=lightstar class="imgposit1"   v-if="stars[6].threestart">
					<img :src=star class="imgposit1"   v-if="!stars[6].threestart">
					 <img @click="change8" src="../assets/image/3-8.png" style="position: sticky;height: 60%" v-if="bgimg[0].active">
          <img @click="change8" src="../assets/image/4-8.png" style="position: sticky;height: 60%" v-if="bgimg[1].active">
          <img @click="change8" src="../assets/image/5-8.png" style="position: sticky;height: 60%" v-if="bgimg[2].active">
          <img @click="change8" src="../assets/image/6-8.png" style="position: sticky;height: 60%" v-if="bgimg[3].active">
          <img @click="change8" src="../assets/image/7-8.png" style="position: sticky;height: 60%" v-if="bgimg[4].active">
          <img @click="change8" src="../assets/image/8-8.png" style="position: sticky;height: 60%" v-if="bgimg[5].active">
          <img @click="change8" src="../assets/image/9-8.png" style="position: sticky;height: 60%" v-if="bgimg[6].active">
          <img @click="change8" src="../assets/image/10-8.png" style="position: sticky;height: 60%" v-if="bgimg[7].active">
          <img @click="change8" src="../assets/image/11-8.png" style="position: sticky;height: 60%" v-if="bgimg[8].active">
          <img @click="change8" src="../assets/image/12-8.png" style="position: sticky;height: 60%" v-if="bgimg[9].active">
          <img @click="change8" src="../assets/image/1-8.png" style="position: sticky;height: 60%" v-if="bgimg[10].active">
          <img @click="change8" src="../assets/image/2-8.png" style="position: sticky;height: 60%" v-if="bgimg[11].active">
          <img @click="change8" src="../assets/image/3-83.png" style="position: sticky;height: 60%" v-if="bgimg[12].active">
          <img @click="change8" src="../assets/image/4-84.png" style="position: sticky;height: 60%" v-if="bgimg[13].active">
          <img @click="change8" src="../assets/image/5-85.png" style="position: sticky;height: 60%" v-if="bgimg[14].active">
					<img @click="change8" src="../assets/image/6-86.png" style="position: sticky;height: 60%" v-if="bgimg[15].active">
          <img @click="change8" src="../assets/image/7-77.png" style="position: sticky;height: 60%" v-if="bgimg[16].active">
          <img @click="change8" src="../assets/image/8-87.png" style="position: sticky;height: 60%" v-if="bgimg[17].active">
          <img @click="change8" src="../assets/image/9-89.png" style="position: sticky;height: 60%" v-if="bgimg[18].active">
          <img @click="change8" src="../assets/image/10-810.png" style="position: sticky;height: 60%" v-if="bgimg[19].active">
          <img @click="change8" src="../assets/image/11-811.png" style="position: sticky;height: 60%" v-if="bgimg[20].active">
          <img @click="change8" src="../assets/image/12-812.png" style="position: sticky;height: 60%" v-if="bgimg[21].active">
          <img @click="change8" src="../assets/image/1-81.png" style="position: sticky;height: 60%" v-if="bgimg[22].active">
          <img @click="change8" src="../assets/image/2-82.png" style="position: sticky;height: 60%" v-if="bgimg[23].active">
          <!-- <img @click="change7" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;"> -->
					<img src="../assets/image/chose.png" class="keyclose"  v-if="key">
					<!-- <span class="spanicon">EXERCISE  B</span> -->
					<!-- <img @click="change2" src="../assets/image/11.png" style="position: sticky;height: 60%"> -->
          <!--<img @click="change7" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;">-->
        </div>
        <div class="listimg" :class="!boss ? 'bosimg':''">
          <img :src=lightstar class="imgposit" v-if="stars[7].onestart">
          <img :src=star class="imgposit" v-if="!stars[7].onestart">
          <img :src=lightstar style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="stars[7].twostart">
          <img :src=star style="position: relative;height: 11%;top: 21%; z-index: 2;" v-if="!stars[7].twostart">
          <img :src=lightstar class="imgposit1"   v-if="stars[7].threestart">
          <img :src=star class="imgposit1"   v-if="!stars[7].threestart">
          <img @click="change" src="../assets/image/3-1.png" style="position: sticky;height: 60%" v-if="bgimg[0].active">
          <img @click="change" src="../assets/image/4-1.png" style="position: sticky;height: 60%" v-if="bgimg[1].active">
          <img @click="change" src="../assets/image/5-1.png" style="position: sticky;height: 60%" v-if="bgimg[2].active">
          <img @click="change" src="../assets/image/6-1.png" style="position: sticky;height: 60%" v-if="bgimg[3].active">
          <img @click="change" src="../assets/image/7-1.png" style="position: sticky;height: 60%" v-if="bgimg[4].active">
          <img @click="change" src="../assets/image/8-1.png" style="position: sticky;height: 60%" v-if="bgimg[5].active">
          <img @click="change" src="../assets/image/9-1.png" style="position: sticky;height: 60%" v-if="bgimg[6].active">
          <img @click="change" src="../assets/image/10-1.png" style="position: sticky;height: 60%" v-if="bgimg[7].active">
          <img @click="change" src="../assets/image/11-1.png" style="position: sticky;height: 60%" v-if="bgimg[8].active">
          <img @click="change" src="../assets/image/12-1.png" style="position: sticky;height: 60%" v-if="bgimg[9].active">
          <img @click="change" src="../assets/image/1-1.png" style="position: sticky;height: 60%" v-if="bgimg[10].active">
          <img @click="change" src="../assets/image/2-1.png" style="position: sticky;height: 60%" v-if="bgimg[11].active">
          <img @click="change" src="../assets/image/3-13.png" style="position: sticky;height: 60%" v-if="bgimg[12].active">
          <img @click="change" src="../assets/image/4-14.png" style="position: sticky;height: 60%" v-if="bgimg[13].active">
          <img @click="change" src="../assets/image/5-15.png" style="position: sticky;height: 60%" v-if="bgimg[14].active">
          <img @click="change" src="../assets/image/6-16.png" style="position: sticky;height: 60%" v-if="bgimg[15].active">
          <img @click="change" src="../assets/image/7-78.png" style="position: sticky;height: 60%" v-if="bgimg[16].active">
          <img @click="change" src="../assets/image/8-88.png" style="position: sticky;height: 60%" v-if="bgimg[17].active">
          <img @click="change" src="../assets/image/9-19.png" style="position: sticky;height: 60%" v-if="bgimg[18].active">
          <img @click="change" src="../assets/image/10-110.png" style="position: sticky;height: 60%" v-if="bgimg[19].active">
          <img @click="change" src="../assets/image/11-111.png" style="position: sticky;height: 60%" v-if="bgimg[20].active">
          <img @click="change" src="../assets/image/12-112.png" style="position: sticky;height: 60%" v-if="bgimg[21].active">
          <img @click="change" src="../assets/image/1-11.png" style="position: sticky;height: 60%" v-if="bgimg[22].active">
          <img @click="change" src="../assets/image/2-12.png" style="position: sticky;height: 60%" v-if="bgimg[23].active">
          <!-- <img @click="change8" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;"> -->
          <!--<img src="../assets/image/chose.png" class="keyclose" v-if="key">-->
          <!-- <span class="spanicon">THIS   OR  THAT</span> -->
          <!-- <img @click="change2" src="../assets/image/11.png" style="position: sticky;height: 60%"> -->
          <!-- <img @click="change7" src="../assets/image/abc555.png" style="position: absolute;height: 32%;left: 17%;top:28%;">-->
        </div>
        <!--<div class="listimg" :class="!boss ? 'bosimg':''">-->
          <!--<img @click="chatwalker" src="../assets/image/3-1.png" style="position: sticky;height: 60%">-->
        <!--</div>-->

        <div class="listimg bosimg" v-if="boss">
					<!--<img src="../assets/image/card.png" class="card" v-if="!boss">-->
				  <!--<span class="fonstart" v-if="!boss">{{startcoins}}/20</span>-->
          <img :src=lightstar class="imgposit" v-if="stars[8].onestart">
          <img :src=star class="imgposit" v-if="!stars[8].onestart">
          <img :src=lightstar style="position: relative;height: 11%;top: 21%;left: 1%;z-index: 2;"v-if="stars[8].twostart">
          <img :src=star style="position: relative;height: 11%;top: 21%; z-index: 2;" v-if="!stars[8].twostart">
          <img :src=lightstar class="imgposit1"   v-if="stars[8].threestart">
          <img :src=star class="imgposit1"   v-if="!stars[8].threestart">
          <img  @click="bigboss" src="../assets/image/moon/seasonsb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[0].active">
          <img  @click="bigboss" src="../assets/image/moon/transportationb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[1].active">
          <img  @click="bigboss" src="../assets/image/moon/bugsb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[2].active">
          <img  @click="bigboss" src="../assets/image/moon/clothesb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[3].active">
          <img  @click="bigboss" src="../assets/image/moon/themeparksb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[4].active">
          <img  @click="bigboss" src="../assets/image/moon/spaceb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[5].active">
          <img  @click="bigboss" src="../assets/image/moon/mybodyb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[6].active">
          <img  @click="bigboss" src="../assets/image/moon/myweekendb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[7].active">
          <img  @click="bigboss" src="../assets/image/moon/wildanimalsb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[8].active">
          <img  @click="bigboss" src="../assets/image/moon/christmasb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[9].active">
          <img  @click="bigboss" src="../assets/image/moon/letsgoshoppingb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[10].active">
          <img  @click="bigboss" src="../assets/image/moon/mycommunityb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[11].active">
          <img  @click="bigboss" src="../assets/image/moon/funtimeb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[12].active">
          <img  @click="bigboss" src="../assets/image/moon/myhomeb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[13].active">
          <img  @click="bigboss" src="../assets/image/moon/ourworldb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[14].active">
          <img  @click="bigboss" src="../assets/image/moon/fairytalesb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[15].active">
          <img  @click="bigboss" src="../assets/image/moon/fairytalesb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[16].active">
          <img  @click="bigboss" src="../assets/image/moon/summer-fun.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[17].active">
          <img  @click="bigboss" src="../assets/image/moon/schooltimeb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[18].active">
          <img  @click="bigboss" src="../assets/image/moon/animalsb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[19].active">
          <img  @click="bigboss" src="../assets/image/moon/myfamilyb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[20].active">
          <img  @click="bigboss" src="../assets/image/moon/holidaysb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[21].active">
          <img  @click="bigboss" src="../assets/image/moon/mealtimeb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[22].active">
          <img  @click="bigboss" src="../assets/image/moon/onthefarmb.png" style="position: sticky;margin-top: -10%;margin-right: -3%;height: 75%;" v-if="bgimg[23].active">

          <!--<img @click="bigboss" src="../assets/image/3-8.png" style="position: sticky;height: 60%" v-if="bgimg[0].active">-->
					<!--<img @click="bigboss" src="../assets/image/4-8.png" style="position: sticky;height: 60%" v-if="bgimg[1].active">-->
					<!--<img @click="bigboss" src="../assets/image/5-8.png" style="position: sticky;height: 60%" v-if="bgimg[2].active">-->
					<!--<img @click="bigboss" src="../assets/image/6-8.png" style="position: sticky;height: 60%" v-if="bgimg[3].active">-->
					<!--<img @click="bigboss" src="../assets/image/7-8.png" style="position: sticky;height: 60%" v-if="bgimg[4].active">-->
					<!--<img @click="bigboss" src="../assets/image/8-8.png" style="position: sticky;height: 60%" v-if="bgimg[5].active">-->
					<!--<img @click="bigboss" src="../assets/image/9-8.png" style="position: sticky;height: 60%" v-if="bgimg[6].active">-->
					<!--<img @click="bigboss" src="../assets/image/10-8.png" style="position: sticky;height: 60%" v-if="bgimg[7].active">-->
					<!--<img @click="bigboss" src="../assets/image/11-8.png" style="position: sticky;height: 60%" v-if="bgimg[8].active">-->
					<!--<img @click="bigboss" src="../assets/image/12-8.png" style="position: sticky;height: 60%" v-if="bgimg[9].active">-->
          <!--<img @click="bigboss" src="../assets/image/1-8.png" style="position: sticky;height: 60%" v-if="bgimg[10].active">-->
					<!--<img @click="bigboss" src="../assets/image/2-8.png" style="position: sticky;height: 60%" v-if="bgimg[11].active">-->
					<!--<img @click="bigboss" src="../assets/image/3-83.png" style="position: sticky;height: 60%" v-if="bgimg[12].active">-->
					<!--<img @click="bigboss" src="../assets/image/4-p1.png" style="position: sticky;height: 60%" v-if="bgimg[13].active">-->
					<!--<img @click="bigboss" src="../assets/image/5-85.png" style="position: sticky;height: 60%" v-if="bgimg[14].active">-->
					<!--<img @click="bigboss" src="../assets/image/6-86.png" style="position: sticky;height: 60%" v-if="bgimg[15].active">-->
          <!--<img @click="bigboss" src="../assets/image/9-89.png" style="position: sticky;height: 60%" v-if="bgimg[18].active">-->
          <!--<img @click="bigboss" src="../assets/image/10-810.png" style="position: sticky;height: 60%" v-if="bgimg[19].active">-->
          <!--<img @click="bigboss" src="../assets/image/11-811.png" style="position: sticky;height: 60%" v-if="bgimg[20].active">-->
          <!--<img @click="bigboss" src="../assets/image/12-812.png" style="position: sticky;height: 60%" v-if="bgimg[21].active">-->
          <!--<img @click="bigboss" src="../assets/image/1-81.png" style="position: sticky;height: 60%" v-if="bgimg[22].active">-->
          <!--<img @click="bigboss" src="../assets/image/2-82.png" style="position: sticky;height: 60%" v-if="bgimg[23].active">-->

        </div>
        <!--</div>-->
			</div>

			<div class="settinglist">
				<img src="../assets/image/season-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[0].active">
				<img src="../assets/image/4-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[1].active">
				<img src="../assets/image/5-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[2].active">
				<img src="../assets/image/6-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[3].active">
				<img src="../assets/image/7-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[4].active">
				<img src="../assets/image/8-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[5].active">
				<img src="../assets/image/9-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[6].active">
				<img src="../assets/image/10-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[7].active">
				<img src="../assets/image/11-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[8].active">
				<img src="../assets/image/12-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[9].active">
        <img src="../assets/image/1-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[10].active">
				<img src="../assets/image/2-bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[11].active">
				<img src="../assets/image/3-3bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[12].active">
				<img src="../assets/image/4-4bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[13].active">
				<img src="../assets/image/5-5bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[14].active">
        <img src="../assets/image/6-6bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[15].active">
        <img src="../assets/image/7-7bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[16].active">
        <img src="../assets/image/8-8bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[17].active">
        <img src="../assets/image/9-9bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[18].active">
        <img src="../assets/image/10-10bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[19].active">
        <img src="../assets/image/11-11bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[20].active">
        <img src="../assets/image/12-12bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[21].active">
        <img src="../assets/image/1-1bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[22].active">
        <img src="../assets/image/2-2bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="bgimg[23].active">

        <!-- <img src="../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
				<div>
					<img :src=gameImage class="acstyle" @click="goinfo" />
					<span class="fontsize leftmar" >{{firstName}}</span>
				</div>
				<div>
					<img src="../assets/image/icon_coin.png" class="coinstyle">
					<span class="fontsize leftmar2">{{sum}}</span>
				</div>
        <div @click="back">
					<img src="../assets/image/season-back.png"  class="settingb" v-if="bgimg[0].active">
					<img src="../assets/image/4-back.png"  class="settingb" v-if="bgimg[1].active">
          <img src="../assets/image/5-back.png"  class="settingb" v-if="bgimg[2].active">
          <img src="../assets/image/6-back.png"  class="settingb" v-if="bgimg[3].active">
          <img src="../assets/image/7-back.png"  class="settingb" v-if="bgimg[4].active">
          <img src="../assets/image/8-back.png"  class="settingb" v-if="bgimg[5].active">
          <img src="../assets/image/9-back.png"  class="settingb" v-if="bgimg[6].active">
          <img src="../assets/image/10-back.png"  class="settingb" v-if="bgimg[7].active">
          <img src="../assets/image/11-back.png"  class="settingb" v-if="bgimg[8].active">
          <img src="../assets/image/12-back.png"  class="settingb" v-if="bgimg[9].active">
          <img src="../assets/image/1-back.png"  class="settingb" v-if="bgimg[10].active">
          <img src="../assets/image/2-back.png"  class="settingb" v-if="bgimg[11].active">
          <img src="../assets/image/3-3back.png"  class="settingb" v-if="bgimg[12].active">
          <img src="../assets/image/4-4back.png"  class="settingb" v-if="bgimg[13].active">
          <img src="../assets/image/5-5back.png"  class="settingb" v-if="bgimg[14].active">
          <img src="../assets/image/6-6back.png"  class="settingb" v-if="bgimg[15].active">
          <img src="../assets/image/7-7back.png"  class="settingb" v-if="bgimg[16].active">
          <img src="../assets/image/8-8back.png"  class="settingb" v-if="bgimg[17].active">
          <img src="../assets/image/9-9back.png"  class="settingb" v-if="bgimg[18].active">
          <img src="../assets/image/10-10back.png"  class="settingb" v-if="bgimg[19].active">
          <img src="../assets/image/11-11back.png"  class="settingb" v-if="bgimg[20].active">
          <img src="../assets/image/12-12back.png"  class="settingb" v-if="bgimg[21].active">
          <img src="../assets/image/1-1back.png"  class="settingb" v-if="bgimg[22].active">
          <img src="../assets/image/2-2back.png"  class="settingb" v-if="bgimg[23].active">
          <!-- 	<img src="../assets/image/game-course03.png"  class=" pause" v-if="!action"> -->
				</div>
				<div  @click="routerabout" >
					<img src="../assets/image/season-home.png" class="repeat" v-if="bgimg[0].active">
					<img src="../assets/image/4-home.png" class="repeat" v-if="bgimg[1].active">
					<img src="../assets/image/5-home.png" class="repeat" v-if="bgimg[2].active">
					<img src="../assets/image/6-home.png" class="repeat" v-if="bgimg[3].active">
					<img src="../assets/image/7-home.png" class="repeat" v-if="bgimg[4].active">
					<img src="../assets/image/8-home.png" class="repeat" v-if="bgimg[5].active">
					<img src="../assets/image/9-home.png" class="repeat" v-if="bgimg[6].active">
					<img src="../assets/image/10-home.png" class="repeat" v-if="bgimg[7].active">
					<img src="../assets/image/11-home.png" class="repeat" v-if="bgimg[8].active">
					<img src="../assets/image/12-home.png" class="repeat" v-if="bgimg[9].active">
          <img src="../assets/image/1-home.png" class="repeat" v-if="bgimg[10].active">
					<img src="../assets/image/2-home.png" class="repeat" v-if="bgimg[11].active">
					<img src="../assets/image/3-3home.png" class="repeat" v-if="bgimg[12].active">
					<img src="../assets/image/4-4home.png" class="repeat" v-if="bgimg[13].active">
					<img src="../assets/image/5-5home.png" class="repeat" v-if="bgimg[14].active">
          <img src="../assets/image/6-6home.png" class="repeat" v-if="bgimg[15].active">
          <img src="../assets/image/7-7home.png" class="repeat" v-if="bgimg[16].active">
          <img src="../assets/image/8-8home.png" class="repeat" v-if="bgimg[17].active">
          <img src="../assets/image/9-9home.png" class="repeat" v-if="bgimg[18].active">
          <img src="../assets/image/10-10home.png" class="repeat" v-if="bgimg[19].active">
          <img src="../assets/image/11-11home.png" class="repeat" v-if="bgimg[20].active">
          <img src="../assets/image/12-12home.png" class="repeat" v-if="bgimg[21].active">
          <img src="../assets/image/1-1home.png" class="repeat" v-if="bgimg[22].active">
          <img src="../assets/image/2-2home.png" class="repeat" v-if="bgimg[23].active">
					<!-- <img src="../assets/image/blue_setting0.png" class="setting" v-if="levels" v-show="!action"> -->
				</div>
			</div>
		</div>
		<!-- <router-link to="/about">About</router-link> -->
		<div class='popContainer' v-show="popp">
			<p class="spanp" v-bind:class="{spanp1:changei5||changei6||changei8||changei9}">{{spanp}}</p>
			<button class="roleimg">
					<img src="../assets/image/score-rule.png" style="height: 100%;" v-if="ruleimg10"/>
					<img src="../assets/image/mistakes4.png" style="height: 100%;" v-if="ruleimg4"/>
          <img src="../assets/image/runner-rule.png" style="height: 100%;"  v-if="ruleimg25"/>
					<img src="../assets/image/walkerks-rule.png" style="height: 100%;"  v-if="ruleimg15"/>
					<img src="../assets/image/boss-rule.png" style="height: 100%;"  v-if="ruleimg12"/>
					<img src="../assets/image/boss-rule2.png" style="height: 100%;"  v-if="ruleimg8"/>
			</button>
			<div class="withcolor" v-bind:class="{oringe:changei1||changei2||changei3||changei9}">
				<div class="close"  @click="pop">
					<img src="../assets/image/cloce.png">
				</div>
				<button class="animapng7">
          <img  src="http://monkeytown.monkeytree.com.hk/image/a.gif" v-if="changei1">
          <img  src="http://monkeytown.monkeytree.com.hk/image/b.gif" v-if="changei2">
				  <img  src="http://monkeytown.monkeytree.com.hk/image/c.gif" v-if="changei3">
				  <img  src="http://monkeytown.monkeytree.com.hk/image/d.gif" v-if="changei4">
				  <img  src="http://monkeytown.monkeytree.com.hk/image/e.gif" v-if="changei5">
				  <img  src="http://monkeytown.monkeytree.com.hk/image/f.gif" v-if="changei6">
				  <img  src="http://monkeytown.monkeytree.com.hk/image/g.gif" v-if="changei7">
				  <img  src="http://monkeytown.monkeytree.com.hk/image/h.gif" v-if="changei8">
				  <img  src="http://monkeytown.monkeytree.com.hk/image/boss.gif" v-if="changei9">
				</button>
				<button class="start" @click="starpop"><span class="startspan">START</span></button>
			</div>
		</div>
	</div>

</template>

<script>
	var qs=require('qs');
  import $ from 'jquery';
	export default {
		name: "HelloWorld",
		props: {
			msg: String
		},
    watch: {
      'loading': function(newVal) {
        if (this.loading === true) {
          alertImg(this.$axios.defaults.baseURL2);
          setTimeout(() => {
              document.getElementById('alertFram').style.display = 'none'}
            ,15000)
        }else{
          setTimeout(() => {
              document.getElementById('alertFram').style.display = 'none'}
            ,1000)
        }
      },
    },
		data() {
			return {
			  loading:false,
				popp: false,
				sum:0,
				spring:'',
				spanp:'',
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
				firstName:'',
				gameImage:'',
				studentId:'',
				unit:'',
				unitsId:'',
				levelsId:'',
				cources:'',
				courseId:'',
				style:'',
				action:false,
				level:"",
				levels:'',
				startcoin:0,
				startcoins:0,
				ruleimg8:false,
				ruleimg10:false,
				ruleimg4:false,
				ruleimg15:false,
				boss:true,
				ruleimg25:false,
				ruleimg12:false,
				game:'',
				changei1:false,
				changei2:false,
				changei3:false,
				changei4:false,
				changei5:false,
				changei6:false,
				changei7:false,
				changei8:false,
				changei9:false,
				key:false,
				star:'http://monkeytown.monkeytree.com.hk/image/Little_Star_frame.png',
				lightstar:'http://monkeytown.monkeytree.com.hk/image/star_frame.png',
				stars:[
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				},
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				},
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				},
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				},
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				},
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				},
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				},
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				},
				{
				    onestart:false,
					twostart:false,
					threestart:false,
				},

				],
				// url: '/user/Menu',
        url: '/user/',
        pic: '',
        picGIF:['/image/a.gif','/image/b.gif','/image/c.gif','/image/d.gif','/image/e.gif','/image/f.gif','/image/g.gif','/image/h.gif','/image/boss.gif'],
        url1:'',
        url2:'',
        url3:'',
        url4:'',
        part:'',
        urlmenu:'',
        levelname:'',
        unitsLists:[],
        UnitsList:[]
				 // url: 'http://demo11.embraiz.com/mtGame/user/Menu',
				//url: 'http://localhost:8080/mtGame/user/Menu',
				// id: "a",
				// page: 1,
			}
		},
		methods: {
      // chatwalker(){
      //   this.$router.push({ //核心语句
      //     path: '/chatwalker', //跳转的路径
      //     query: {
      //       menuId: this.menuId,
      //       unitsId:this.unitsId,
      //       unit:this.unit,
      //       level: this.$route.query.level,
      //       part:this.part
      //     }
      //   })
      // },
      //跳转到flashcard
      jump(){
				this.$router.push({
					path: '/flashcard',
					query: {
					unit:this.unit,
					unitsId:this.unitsId,
					levelsId:this.levelsId,
					courseId:this.courseId,
					part:this.part,
					style:this.style,
					level:this.level,
					cources:this.cources
					}
          		});
			},
			change() {
				if(this.UnitsList.length!=0){
					this.spanp="Put the letter in the correct spot.";
				  setTimeout(() => {
					this.changei1=true;
					this.popp = !this.popp;
					if(this.UnitsList[7].rank==0){
						this.ruleimg8=true;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}else if(this.UnitsList[7].rank==1){
						this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}
			        this.game = '8'
				 }, 300);
				 }else{
          this.loading = true;

        }
        //[{"checked":true,"product":{"avalilabilityQty":23,"b2bListedStatus":"LISTED","b2bMinimumToOrder":1,"b2cListedStatus":"LISTED","b2cMinimumToOrder":1,"conditionId1":8,"conditionId2":287,"conditionId3":288,"conditionId4":289,"conditionName1":"TERE","conditionName2":"GLOSS BLACK (Tuhua)","conditionName3":"DISC","conditionName4":"M","description":"","masterId":51,"masterPhotos":{"bigPhotoPath":"/images/master/2020/12/51-KhZxcD-big.png","isCheckout":true,"isFanfare":true,"isGallery":false,"isHomeRangeList":true,"isProfile":true,"isRange":false,"isSlide":false,"masterId":51,"mediumPhotoPath":"/images/master/2020/12/51-KhZxcD-medium.png","photoId":329,"photoPath":"/images/master/2020/12/51-KhZxcD.png","photoSorting":7,"smallPhotoPath":"/images/master/2020/12/51-KhZxcD-small.png","status":1,"url":"KhZxcD"},"productId":285,"productNamePo":"CHAPTER2 TERE FRAMESET(DISC BRAKE), COL#27, MEDIUM","productNameWebsite":"CHAPTER2 TERE FRAMESET(DISC BRAKE), C#27(GLOSS BLACK , TUHUA), MEDIUM","remark1":"MODEL","remark2":"COLOR","remark3":"BRAKE","remark4":"SIZE","sku":"117012FSMED27","standardCost":"3618.85","statusId":101,"subTitle":"ESSENTIAL COLLECTION ","totalPiecesMade":"","type":"FRAMESET","typeId":155,"unitOfMeasure":"SET","unitOfMeasureId":158},"productId":285,"quantity":1,"subTotal":296999,"unitPrice":296999}]
			},
			change2() {
				if(this.UnitsList.length!=0){
					this.spanp="Listen and circle the correct picture.";
					setTimeout(() => {
					this.changei2=true;
					this.popp = !this.popp;
					if( this.UnitsList[0].rank==0){
						this.ruleimg8=true;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}else if( this.UnitsList[0].rank==1){
						this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}
					this.game = '1'
				}, 300);
				}else{
          this.loading = true;
        }
			},
			change3() {
				if(this.UnitsList.length!=0){
					this.spanp="Match the pictures that are the same.";
				setTimeout(() => {
					this.changei3=true;
					this.popp = !this.popp;
					if( this.UnitsList[2].rank==0){
						this.ruleimg8=false;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=true;
					}else if( this.UnitsList[2].rank==1){
						this.ruleimg8=false;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=true;
					}
					// this.ruleimg=true;
					// this.ruleimg1=false;
					// this.ruleimg2=false;
					// this.boss1=false;
					// this.boss2=false;
					this.game = '3'
				}, 300);
				}else{
          this.loading = true;
        }
			},
			change4() {
				if(this.UnitsList.length!=0){
					this.spanp="Match the pictures with the correct words.";
				setTimeout(() => {
					this.changei4=true;
					this.popp = !this.popp;
					if( this.UnitsList[1].rank==0){
						this.ruleimg8=true;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}else if( this.UnitsList[1].rank==1){
						this.ruleimg8=false;this.ruleimg12=true;this.ruleimg10=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}
					this.game = '2'
				}, 300);
				}else{
          this.loading = true;
        }
			},
			change5() {
				if(this.UnitsList.length!=0){
					this.spanp="Read the sentence and look at the picture.Then‚ select “Yes” or “No”.";
				setTimeout(() => {
					this.changei5=true;
					this.popp = !this.popp;
					if( this.UnitsList[5].rank==0){
						this.ruleimg8=true;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}else if( this.UnitsList[5].rank==1){
						this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}
					this.game = '6'
				}, 300);
				}else{
          this.loading = true;
        }
			},
			change6() {
				if(this.UnitsList.length!=0){
					this.spanp="Look at the picture.Then‚ listen and choose the correct answer.";
				setTimeout(() => {
					this.changei6=true;
					this.popp = !this.popp;
					if( this.UnitsList[3].rank==0){
						this.ruleimg8=true;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}else if( this.UnitsList[3].rank==1){
						this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}
					this.game = '4'
				}, 300);
				}else{
          this.loading = true;
        }
			},
			change7() {
				if(this.UnitsList.length!=0){
					this.spanp="Read the word and circle the correct picture.";
				setTimeout(() => {
					this.changei7=true;
					this.popp = !this.popp;
					if( this.UnitsList[4].rank==0){
						this.ruleimg8=true;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}else if( this.UnitsList[4].rank==1){
						this.ruleimg8=false;this.ruleimg10=true;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
					}
					this.game = '5'
				}, 300);
				}else{
          this.loading = true;
        }
			},
			change8() {
				if(this.UnitsList.length!=0){
					this.spanp="Look at the picture and drag it to the correct bucket.";
				setTimeout(() => {
					this.changei8=true;
					this.popp = !this.popp;
					if( this.UnitsList[6].rank==0){
						this.ruleimg8=false;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=true;this.ruleimg25=false;this.ruleimg4=false;
					}else if( this.UnitsList[6].rank==1){
						this.ruleimg8=false;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=true;this.ruleimg4=false;
					}
					this.game = '7'
				}, 300);
				}else{
          this.loading = true;
        }
			},
			bigboss(){
				if(this.UnitsList.length!=0){
					this.spanp="Look at the picture.Then‚ listen and spell the correct word.";
				this.changei9=true;
				this.popp = !this.popp;
				if( this.UnitsList[8].rank==0){
					this.ruleimg8=true;this.ruleimg10=false;this.ruleimg12=false;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
				}else if( this.UnitsList[8].rank==1){
					this.ruleimg8=false;this.ruleimg10=false;this.ruleimg12=true;this.ruleimg15=false;this.ruleimg25=false;this.ruleimg4=false;
				}
				this.game = '9'
				}else{
          this.loading = true;
        }
			},
			pop(){
				 this.popp = !this.popp;
				 this.changei1=false;
				 this.changei2=false;
				 this.changei3=false;
				 this.changei4=false;
				 this.changei5=false;
				 this.changei6=false;
				 this.changei7=false;
				 this.changei8=false;
				 this.changei9=false;
			},
			routerabout(){
				this.action=true;
				setTimeout(() => {
					this.action=false;
				this.$router.push({
					//核心语句
					path: "/source", //跳转的路径
					// query: {
					// 	//路由传参时push和query搭配使用 ，作用时传递参数
					// 	id: this.id,
					// 	account: this.account,
					// 	type: this.type,
					// 	sum: this.sum,
					// }
				});
				}, 1000);
			},
			starpop(){
				var audio = document.getElementById('music');
					audio.pause();
        this.loading = true;
				if(this.game==='8'){
				setTimeout(() => {
          if(this.part==='part1'){
            this.menuId=this.UnitsList[7].menu_detail_id_1;
          }else if(this.part==='part2'){
            this.menuId=this.UnitsList[7].menu_detail_id_2;
          }else if(this.part==='part3'){
            this.menuId=this.UnitsList[7].menu_detail_id;
          }
					this.$router.push({ //核心语句
						path: '/pageto', //跳转的路径
						query: {
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
              name:this.UnitsList[7].name,
              part:this.part,
              level:this.level,
						}
					})
				}, 300);
				}else if(this.game==='1'){
					setTimeout(() => {
            if(this.part==='part1'){
              this.menuId=this.UnitsList[0].menu_detail_id_1;
              console.log(this.menuId);
            }else if(this.part==='part2'){
              this.menuId=this.UnitsList[0].menu_detail_id_2;
            }else if(this.part==='part3'){
              this.menuId=this.UnitsList[0].menu_detail_id;
            }
						this.$router.push({ //核心语句
							path: '/part2to', //跳转的路径
							query: {
								menuId: this.menuId,
								unitsId:this.unitsId,
								unit:this.unit,
                name:this.UnitsList[0].name,
                part:this.part,
                level:this.level,
							}
						})
					}, 300);
				}else if(this.game==='3'){
					setTimeout(() => {
            if(this.part==='part1'){
              this.menuId=this.UnitsList[2].menu_detail_id_1;
            }else if(this.part==='part2'){
              this.menuId=this.UnitsList[2].menu_detail_id_2;
            }else if(this.part==='part3'){
              this.menuId=this.UnitsList[2].menu_detail_id;
            }
						this.$router.push({ //核心语句
							path: '/part3to', //跳转的路径
							query: {
								menuId: this.menuId,
								unitsId:this.unitsId,
								unit:this.unit,
                name:this.UnitsList[2].name,
                part:this.part,
                level:this.level,
							}
						})
					}, 300);
				}else if(this.game==='2'){
					setTimeout(() => {
            if(this.part==='part1'){
              this.menuId=this.UnitsList[1].menu_detail_id_1;
            }else if(this.part==='part2'){
              this.menuId=this.UnitsList[1].menu_detail_id_2;
            }else if(this.part==='part3'){
              this.menuId=this.UnitsList[1].menu_detail_id;
            }
						this.$router.push({ //核心语句
							path: '/part4to', //跳转的路径
							query: {
								menuId: this.menuId,
								unitsId:this.unitsId,
								unit:this.unit,
                name:this.UnitsList[1].name,
                part:this.part,
                level:this.level,
							}
						})
					}, 300);
				}else if(this.game==='6'){
					setTimeout(() => {
            if(this.part==='part1'){
              this.menuId=this.UnitsList[5].menu_detail_id_1;
            }else if(this.part==='part2'){
              this.menuId=this.UnitsList[5].menu_detail_id_2;
            }else if(this.part==='part3'){
              this.menuId=this.UnitsList[5].menu_detail_id;
            }
						this.$router.push({ //核心语句
							path: '/part5to', //跳转的路径
							query: {
								menuId: this.menuId,
								unitsId:this.unitsId,
								unit:this.unit,
                name:this.UnitsList[5].name,
                part:this.part,
                level:this.level,
							}
						})
					}, 300);
				}else if(this.game==='4'){
					setTimeout(() => {
            if(this.part==='part1'){
              this.menuId=this.UnitsList[3].menu_detail_id_1;
            }else if(this.part==='part2'){
              this.menuId=this.UnitsList[3].menu_detail_id_2;
            }else if(this.part==='part3'){
              this.menuId=this.UnitsList[3].menu_detail_id;
            }
						this.$router.push({ //核心语句
							path: '/part6to', //跳转的路径
							query: {
								menuId: this.menuId,
								unitsId:this.unitsId,
								unit:this.unit,
                name:this.UnitsList[3].name,
                part:this.part,
                level:this.level,
							}
						})
					}, 300);
				}else if(this.game==='5'){
					setTimeout(() => {
            if(this.part==='part1'){
              this.menuId=this.UnitsList[4].menu_detail_id_1;
            }else if(this.part==='part2'){
              this.menuId=this.UnitsList[4].menu_detail_id_2;
            }else if(this.part==='part3'){
              this.menuId=this.UnitsList[4].menu_detail_id;
            }
						this.$router.push({ //核心语句
							path: '/part7to', //跳转的路径
							query: {
								menuId: this.menuId,
								unitsId:this.unitsId,
								unit:this.unit,
                name:this.UnitsList[4].name,
                part:this.part,
                level:this.level,
							}
						})
					}, 300);
				}else if(this.game==='7'){
					setTimeout(() => {
            if(this.part==='part1'){
              this.menuId=this.UnitsList[6].menu_detail_id_1;
            }else if(this.part==='part2'){
              this.menuId=this.UnitsList[6].menu_detail_id_2;
            }else if(this.part==='part3'){
              this.menuId=this.UnitsList[6].menu_detail_id;
            }
						this.$router.push({ //核心语句
							path: '/part8to', //跳转的路径
							query: {
								menuId: this.menuId,
								unitsId:this.unitsId,
								unit:this.unit,
                name:this.UnitsList[6].name,
                part:this.part,
                level:this.level,
							 }
						})
					}, 300);
				}else if(this.game==='9'){
					setTimeout(() => {
            if(this.part==='part1'){
              this.menuId=this.UnitsList[8].menu_detail_id_1;
            }else if(this.part==='part2'){
              this.menuId=this.UnitsList[8].menu_detail_id_2;
            }else if(this.part==='part3'){
              this.menuId=this.UnitsList[8].menu_detail_id;
            }
						this.$router.push({ //核心语句
							path: '/boss', //跳转的路径
							query: {
								menuId: this.menuId,
								unitsId:this.unitsId,
								unit:this.unit,
								spring:this.spring,
                name:this.UnitsList[8].NAME,
                part:this.part,
                level:this.level,
							}
						})
					}, 300);
				}

			},
			goinfo(){
				this.$router.push({ //核心语句
						path: '/info', //跳转的路径
				})
			},
			back(){
				this.$router.push({ //核心语句
						path: '/chosegame', //跳转的路径
						query: {
							levelsId:localStorage.getItem('levelsId'),
							courseId:localStorage.getItem('courseId'),
							style:localStorage.getItem('style'),
							level:localStorage.getItem('level'),
							cources:localStorage.getItem('cources'),
							unit:localStorage.getItem('unit')
						}
				})
			},
      bodyScroll(e) {
      const ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判断是否为ios
       var els=document.getElementById("scrollbody");
        if (ios) {
           // 去除 iOS 顶部橡皮筋效果
          let startY, endY;
          document.body.addEventListener('touchstart', function(e) {
               startY = e.touches[0].pageY;
           });
           document.body.addEventListener('touchmove', function(e) {
                endY = e.touches[0].pageY;
                // 手指下滑，页面到达顶端不能继续下滑
                if (endY > startY && document.body.scrollTop <= 0) {
                   e.preventDefault();
                }
                 if(endY<startY&& $(window).scrollTop()+
                         $(window).height()>=$('body')[0].scrollHeight){
                       e.preventDefault();
                     }
           }, {passive: false});

        }

      },
		},
	  created() {
      this.pic = this.$axios.defaults.baseURL2;
		  console.log(this.$route.query);
		  this.cources=this.$route.query.cources;
      this.courseId=this.$route.query.courseId;
      this.level=this.$route.query.level;
      this.levelsId=this.$route.query.levelsId;
		  if(this.$route.query.studentId){
        this.part=this.$route.query.part;
		    if(localStorage.getItem('userId')){
        this.studentId=this.$route.query.studentId;
        this.unit=this.$route.query.unit;
        localStorage.setItem('studentId',this.studentId);
        if(this.$route.query.level==="WALKERS"){
          this.levelname="Walkers";
        }else if(this.$route.query.level==="RUNNERS"){
          this.levelname="Runners";
        }
        this.url1=this.url+"course";
        this.$axios.post(this.url1,qs.stringify({
          studentId:localStorage.getItem('studentId')
        })).then(res=>{
          this.courseList=res.data.courseList;
          for(var i=0;i<this.courseList.length;i++){
            if(this.courseList[i].name===this.$route.query.cources){
              this.courseId=this.courseList[i].course_id;
              this.sum=res.data.sumCoins.sumCoins;
              localStorage.setItem('sumCoins',this.sum);
              this.url2=this.url+"Levels";
              this.$axios.post(this.url2,qs.stringify({
                studentId:localStorage.getItem('studentId'),
                courseId:this.courseId
              })).then(res=>{
                this.levelsList=res.data.levelsList;
                for(var i=0;i<this.levelsList.length;i++){
                  if(this.levelsList[i].name===this.levelname){
                    this.levelsId=this.levelsList[i].levels_detail_id;
                    this.url3=this.url+"Units";
                    this.$axios.post(this.url3,qs.stringify({
                      studentId:localStorage.getItem('studentId'),
                      levelsId:this.levelsId
                    })).then(res=>{
                      this.unitsLists=res.data.unitsList;

                      for(var i=0;i<this.unitsLists.length;i++){
                        if(this.unitsLists[i].name==this.$route.query.unit){
                          this.unitsId=this.unitsLists[i].units_detail_id;
                          for(var i=0;i<this.bgimg.length;i++){
                            if(this.unit===this.bgimg[i].spring){
                              this.bgimg[i].active=true;
                              this.spring=this.bgimg[i].spring;
                              // this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-star2.png";
                              // this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-star.png";
                              if(this.unit==='Seasons'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/season-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/season-star.png";
                              }else if(this.unit==='Transportation'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/4-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/4-star.png";
                              }else if(this.unit==='Bugs'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/season-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/season-star.png";
                              }else if(this.unit==='Clothes'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star.png";
                              }else if(this.unit==='Theme Park'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star.png";
                              }else if(this.unit==='Space'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8-star.png";
                              }else if(this.unit==='My Body'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-star.png";
                              }else if(this.unit==='My Weekend'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/10-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/10-star.png";
                              }else if(this.unit==='Wild Animals'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/11-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/11-star.png";
                              }else if(this.unit==='Christmas'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12-star.png";
                              }else if(this.unit==="Let's Go Shopping"){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/1-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/1-star.png";
                              }else if(this.unit==='My Community'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/2-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/2-star.png";
                              }else if(this.unit==='Fun Time!'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/3-3star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/3-3star.png";
                              }else if(this.unit==='My Home'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/4-4star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/4-4star.png";
                              }else if(this.unit==='Our World'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/5-5star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/5-5star.png";
                              }else if(this.unit==='Fairy Tales'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star.png";
                              }else if(this.unit==='School Time'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-9star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-star.png";
                              }else if(this.unit==='Animals'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/10-10star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/10-10star.png";
                              }else if(this.unit==='Family Time'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/11-11star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/11-11star.png";
                              }else if(this.unit==='Holidays'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12-12star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12-12star.png";
                              }else if(this.unit==="Meal Time"){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/1-1star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/1-1star.png";
                              }else if(this.unit==='On the Farm'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/2-2star2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/2-2star.png";
                              }else if(this.unit==='Summer Fun'){
                                this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8-8start2.png";
                                this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8-8start.png";
                              }
                            }else{
                              this.bgimg[i].active=false;
                            }
                          }
                          if(this.$route.query.style){
                            localStorage.setItem('unit', this.$route.query.unit);
                            localStorage.setItem('level',this.$route.query.level);
                            localStorage.setItem('cources',this.$route.query.cources);
                            localStorage.setItem('levelsId',this.levelsId);
                            localStorage.setItem('courseId',this.courseId);
                            localStorage.setItem('style',this.$route.query.style);
                          }
                          this.firstName=localStorage.getItem('firstName');
                          this.gameImage=localStorage.getItem('gameImage');
                          this.sum=parseInt(localStorage.getItem('sumCoins'));
                          this.studentId=localStorage.getItem('studentId');
                          if(this.$route.query.part==='part1'){
                            this.urlmenu=this.url+'MenuPart1';
                          }else if(this.$route.query.part==='part2'){
                            this.urlmenu=this.url+'MenuPart2';
                          }else if(this.$route.query.part==='part3'){
                            this.urlmenu=this.url+'Menu';
                            this.boss=false;
                          }
                          this.$axios.post(this.urlmenu,qs.stringify({
                            studentId:localStorage.getItem('studentId'),
                            unitsId:this.unitsId
                          })).then(res=>{
                            this.UnitsList=res.data.UnitsList;
                            console.log('加载完毕');
                            this.sum=res.data.sumCoins;
                            localStorage.setItem('sumCoins',this.sum);

                            for(var i=0;i<res.data.UnitsList.length;i++){
                              if(res.data.UnitsList[i].star=="0"){
                                this.stars[i].onestart=false;
                                this.stars[i].twostart=false;
                                this.stars[i].threestart=false;
                              }else if(res.data.UnitsList[i].star=="1"){
                                this.stars[i].onestart=true;
                                this.stars[i].twostart=false;
                                this.stars[i].threestart=false;
                              }else if(res.data.UnitsList[i].star=="2"){
                                this.stars[i].onestart=true;
                                this.stars[i].twostart=true;
                                this.stars[i].threestart=false;
                              }else if(res.data.UnitsList[i].star=="3"){
                                this.stars[i].onestart=true;
                                this.stars[i].twostart=true;
                                this.stars[i].threestart=true;
                              }
                            }
                            console.log(this.starts);
                          }, res => {
                            console.info('false');
                          });
                        }
                      }
                    }, res => {
                      alertMsg("You must be connected to the internet.<br>Please connect and try again.");
                    })
                  }
                }
              }, res => {
                alertMsg("You must be connected to the internet.<br>Please connect and try again.");
              })
            }
          }

        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
		    }else {
		      this.$router.push({ //核心语句
            path: '/login', //跳转的路径
            query: {
              style:this.$route.query.style,
              unit:this.$route.query.unit,
              level:this.$route.query.level,
              cources:this.$route.query.cources,
              studentId:this.$route.query.studentId,
              part:this.part
            }
          })
        }
      }else {
        this.unitsId= this.$route.query.unitsId;
        this.unit= this.$route.query.unit;
        this.part=this.$route.query.part;
        if(this.$route.query.level==="WALKERS"){
          this.levelname="Walkers";
        }else if(this.$route.query.level==="RUNNERS"){
          this.levelname="Runners";
        }
        //给不同单元添加不同样式的星星
        for(var i=0;i<this.bgimg.length;i++){
          if(this.unit===this.bgimg[i].spring){
            this.bgimg[i].active=true;
            this.spring=this.bgimg[i].spring;
            if(this.unit==='Seasons'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/season-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/season-star.png";
            }else if(this.unit==='Transportation'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/4-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/4-star.png";
            }else if(this.unit==='Bugs'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/season-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/season-star.png";
            }else if(this.unit==='Clothes'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star.png";
            }else if(this.unit==='Theme Park'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star.png";
            }else if(this.unit==='Space'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8-star.png";
            }else if(this.unit==='My Body'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-star.png";
            }else if(this.unit==='My Weekend'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/10-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/10-star.png";
            }else if(this.unit==='Wild Animals'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/11-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/11-star.png";
            }else if(this.unit==='Christmas'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12-star.png";
            }else if(this.unit==="Let's Go Shopping"){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/1-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/1-star.png";
            }else if(this.unit==='My Community'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/2-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/2-star.png";
            }else if(this.unit==='Fun Time!'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/3-3star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/3-3star.png";
            }else if(this.unit==='My Home'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/4-4star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/4-4star.png";
            }else if(this.unit==='Our World'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/5-5star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/5-5star.png";
            }else if(this.unit==='Fairy Tales'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star.png";
            }else if(this.unit==='Exploration'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/6-star.png";
            }else if(this.unit==='Summer Fun'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8-8start2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/8-8start.png";
            }else if(this.unit==='School Time'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/9-star.png";
            }else if(this.unit==='Animals'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/10-10star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/10-10star.png";
            }else if(this.unit==='Family Time'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/11-11star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/11-11star.png";
            }else if(this.unit==='Holidays'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12-12star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/12-12star.png";
            }else if(this.unit==="Meal Time"){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/1-1star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/1-1star.png";
            }else if(this.unit==='On the Farm'){
              this.star="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/2-2star2.png";
              this.lightstar="http://gamejava.monkeytree.com.hk/monkeytownHK/image/img/2-2star.png";
            }
          }else{
            this.bgimg[i].active=false;
          }
        }
        if(this.$route.query.style){
          localStorage.setItem('unit', this.$route.query.unit);
          localStorage.setItem('level',this.$route.query.level);
          localStorage.setItem('cources',this.$route.query.cources);
          localStorage.setItem('levelsId',this.$route.query.levelsId);
          localStorage.setItem('courseId',this.$route.query.courseId);
          localStorage.setItem('style',this.$route.query.style);
        }
        this.firstName=localStorage.getItem('firstName');
        this.gameImage=localStorage.getItem('gameImage');
        this.sum=parseInt(localStorage.getItem('sumCoins'));
        this.studentId=localStorage.getItem('studentId');
        if(this.$route.query.part==='part1'){
          this.urlmenu=this.url+'MenuPart1';
        }else if(this.$route.query.part==='part2'){
          this.urlmenu=this.url+'MenuPart2';
        }else if(this.$route.query.part==='part3'){
          this.urlmenu=this.url+'Menu';
          this.boss=false;
        }
        this.$axios.post(this.urlmenu,qs.stringify({
          studentId:localStorage.getItem('studentId'),
          unitsId:this.unitsId
        })).then(res=>{
          this.UnitsList=res.data.UnitsList;
          this.loading = false;
          this.sum=res.data.sumCoins;
          localStorage.setItem('sumCoins',this.sum);
          for(var i=0;i<res.data.UnitsList.length;i++){
            if(res.data.UnitsList[i].star==="0"){
              this.stars[i].onestart=false;
              this.stars[i].twostart=false;
              this.stars[i].threestart=false;
            }else if(res.data.UnitsList[i].star==="1"){
              this.stars[i].onestart=true;
              this.stars[i].twostart=false;
              this.stars[i].threestart=false;
            }else if(res.data.UnitsList[i].star==="2"){
              this.stars[i].onestart=true;
              this.stars[i].twostart=true;
              this.stars[i].threestart=false;
            }else if(res.data.UnitsList[i].star==="3"){
              this.stars[i].onestart=true;
              this.stars[i].twostart=true;
              this.stars[i].threestart=true;
            }
          }
        }, res => {
          console.info('false');
        });
      }



		// var mo=function(e){e.preventDefault();};
		// function move(){
		//         document.body.style.position='';//出现滚动条
		//         document.removeEventListener("touchmove",mo,{passive:true});
		// }
		// move();
    // document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	//MENU css
	#hello {
		display: flex;
		padding: 0px;
		margin: 0px;
		width: 100%;
		height: 100%;
		z-index: 999;
		display: block;
		position: fixed;

	}



	.jump{
    color: white;
    font-size: 20px;
    font-family: kg;
    display: inline-block;
    padding: 5px 25px;
    background-color: #43BE76;
    border-radius: 30px;
	  position: fixed;
	  top: 75% !important;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
	  z-index: 2;
    }

	.popContainer {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
	}
    .backbutton{
    	// display: block;
    	z-index: 2;
    	 width: 6%;
    	 position: fixed;
    	 left: 15px;
    	  top: 15px;
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
    .oringe{
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
    .spanp{
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
	.spanp1{
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
			margin-top:5%;
			border:none;
			background:none;
			text-align: center;
	}
	.animapng7 img{
		height: 100%;
	}

	.roleimg {
		position: absolute;
		    height: 68%;
		    top: 15%;
		    left: 5%;
		    border: none;
		    background: none;
	}

	.start {
		    background-color: #007BB8;
		    width: 30%;
		    right: 35%;
		    bottom: -10%;
		    color: white;
		    height: 20%;
		    border-radius: 50px;
		    border-style: none;
		    position: absolute;
		    font-family: KG;
	}
    .startspan{
		    display: inline-block;
		    padding: 8%;
			font-size: x-large;
	}
	.acstyle {
		height: 70%;
		position: absolute;
		left: 5%;
		bottom: 9%;
		border-radius: 50px;
	}
	.keyclose{
		position: absolute;
		right: 0%;
		 top: 35%;
		 height: 11%;
	}
	// .spannumber{
	// 	    position: absolute;
	// 	    width: 100%;
	// }
 //    .spannum{
	// 	    color: white;
	// 	    -webkit-text-stroke: 2px #057BB8;
	// 	    font-size: 1.4rem;
	// 	    font-family: KG;
	// 		    text-align: center;
	// 		    margin-top: 3px;
	// 	    display: inline-block;
	// }
	.fonstart{
		    top: -23%;
		    left: 6%;
		    color: white;
		    position: relative;
		    font-size: larger;
		    font-family: kg;
	}
	.coinstyle {
		height: 70%;
		position: absolute;
		left: 33%;
		bottom: 9%;
	}

	.fontsize {
		font-family: kg;
		color: white;
		bottom: 18%;
		max-width: 20%;
		text-align: left;
		overflow: hidden;
    white-space: nowrap;
		position: absolute;
		font-size: x-large;
		max-height: 70%;
		min-height: 50%;
		//margin-left: 2%;
	}
 //    .spanicon{
	// 	color: white;
	// 	    font-family: KG;
	// 	    top: -2.1rem;
	// 	    font-size: 0.8rem;
	// 	    position: relative;
	// }
	.leftmar{
		left:13%
	}
	.leftmar2{
		left: 41%;
	}
	.contain {
		display: flex;
		padding: 0px;
		margin: 0px;
		width: 100%;
		height: 100%;
		text-align: center;
		display: block;
		position: fixed;
		overflow: hidden;
	}

	.menulist {
		//sition: absolute;
		width: 100%;
		display: inline-flex;
		float: left;
		height: 85%;
		padding-left: 5%;
		overflow: scroll;
    	position: relative;
		overflow-y: hidden;

	}


  /*.menulist::-webkit-scrollbar {*/
    /*width:100%;*/
  /*}*/
  /* 滚动槽 */
  /*.menulist::-webkit-scrollbar-track {*/
     /*box-shadow:inset 0 0 6px rgba(0,0,0,0.3);*/
    /*border-radius:10px;*/
  /*}*/
  /*!* 滚动条滑块 *!*/
  /*.menulist::-webkit-scrollbar-thumb {*/
    /*border-radius:10px;*/
    /*background:rgba(0,0,0,0.2);*/
    /*box-shadow:inset 0 0 6px rgba(0,0,0,0.5);*/
  /*}*/
  /*.menulist::-webkit-scrollbar-thumb:window-inactive {*/
    /*background: rgba(255, 0, 0, 0.4);*/
  /*}*/
	.listimg {
		margin-top: 5%;
		display: block;
		width: 30%;
		margin-right: 25px;
		position: relative;
		height: 100%;

	}

	.listfirst {
		// margin-left: -2%;
	}

	// .listimg img {
	// 	cursor: pointer;
	// 	transition: all 0.6s;
	// }

// 	.listimg:visited {
// 		transform: scale(1);
// 	}
//
// 	.listimg:active {
// 		transform: scale(1);
// 	}
//
	.setting {
		width: 12%;
		position: absolute;
		right: 8%;
		bottom: 0%;
	}
    .settingb {
    	width: 11%;
    	position: absolute;
    	right: 17%;
    	bottom: 0%;
    }
	.fade-enter-active {
		transition: all 0.6s;
	}

	.fade-leave-active {
		// opacity: 0;
		transition: all 0.6s;
	}

	.fade-enter {
		//opacity: 0;
		transform: translate3d(0, 100%, 0);
	}

	.fade-leave-to {
		//opacity: 0;
		//transform: translate3d(0, 0, 0);

	}

	.imgposit {
		position: relative;
		height: 11%;
		top: 26%;
		z-index: 2;
		margin-left: 1%;
	}

	.imgposit1 {
		position: relative;
		height: 11%;
		top: 26%;
		left:3%;
		z-index: 2;
	}
	.card{
		height: 13%;
		top: 20%;
		 right:26%;
		 position: absolute;
		 z-index: 2;
	}
    .bosimg{
		padding-left: 1%;
		padding-right: 10%;
	}
	.styletit{
		       width: 90%;
		       height: 20%;
		       position: fixed;
	}
	/*.styletitC{*/
		        /*background-color: #43BF76;*/
			    /*border-style: none;*/
			    /*border-radius: 50px;*/
			    /*width: 85%;*/
			    /*height: 11%;*/
			    /*font-size: 1.3rem;*/
			    /*margin-left: -8%;*/
			    /*position: absolute;*/
			    /*font-family: pepper;*/
			    /*color: white;*/
		/*}*/
	@media screen and (max-width:481px) {
		.listimg {
			display: block;
			width: 30%;

		}

		.fontsize {
			bottom: 16%;
			position: absolute;
			font-size: 1.2rem;
			margin-left: 2%;
		}

		.startspan{
			    padding: 10%;
			    font-size: large;
		}
		// .spanicon{
		//        top: -1.8rem;
		// 	   font-size: 0.5rem;
		// }
		.fonstart{
			font-size: 1rem;
		}
	}

	@media screen and (min-width: 482px) and (max-width: 569px) {
		.fontsize {
			bottom: 16%;
			position: absolute;
			font-size: 1.2rem;
			margin-left: 2%;
		}

		.startspan{
			    padding: 9%;
			    font-size: large;
		}
		// .spanicon{
		//        top: -1.8rem;
		// 	   font-size: 0.5rem;
		// }
		.fonstart{
			font-size: 1rem;
		}
	}

	@media screen and (min-width: 1024px)  and (max-width: 1354px) {
		.imgposit {
			margin-left: 4%;
		}

		.jump{
			color: white;
			font-size: 30px;
			font-family: kg;
			display: inline-block;
			padding: 10px 40px;
			background-color: #43BE76;
			border-radius: 30px;
			position: fixed;
			top: 65%;
			z-index: 2;
		}

		.setting {
			width: 14%;
			position: absolute;
			right: 8%;
			bottom: 0%;
		}
		.settingb {
			width: 13%;
			position: absolute;
			right:18%;
			bottom: 11%;
		}
        .styletit{
        	 font-size: 1.5rem;
        }
        /*.styletitC{*/
			 /*font-size: 1.5rem;*/
		/*}*/
		.listimg {
			width: 40%;
			margin-left: -8%;
			-webkit-transform: scale(0.7);
			transform: scale(0.7);
      margin-top: 6%;

		}

		.listfirst {
			margin-left: -60px;
		}

// 		.listimg:visited {
// 			transform: scale(0.8);
// 		}
//
// 		.listimg:active {
// 			transform: scale(0.8);
// 		}

		.acstyle {
			height: 70%;
			position: absolute;
			left: 5%;
			bottom: 9%;
		}

		.coinstyle {
			height: 70%;
			position: absolute;
			left: 35%;
			bottom: 9%;
		}

		.fontsize {
			bottom: 13%;
			position: absolute;
			font-size: 2.5rem;
			margin-left: 2%;
		}
		.leftmar2{
			left: 43%;
		}
		.spanp{
			top:22%;
			font-size:1.5rem;
		}
		.spanp1{
			font-size:1.3rem;
		}
		.withcolor{
			height:50%;
			top:20%;
			    border-radius: 75px;
		}
		.close {
			width: 70px;
			height:70px;

		}
		.startspan{
			    padding: 12%;
			    font-size: xx-large;
		}
		.close img {
			height: 70px;
			width: 70px;

		}
		.roleimg{
			    height: 53%;
			    top: 20%;
		}
		// .spanicon{
		//        top: -3.6rem;
		// 	   font-size: 1.6rem;
		// }
		.fonstart{
			    top: -22%;
			font-size: 2rem;
		}
	}
  @media only screen and (min-width: 1024px) and (max-width: 1600px) and (-webkit-device-pixel-ratio: 3){
    .imgposit {
      margin-left: -3% ;
    }
  }
	@media screen and (min-width: 1355px) and (max-width: 1600px) {
		.imgposit {
			margin-left: 0%;
		}

		.jump{
			color: white;
			font-size: 30px;
			font-family: kg;
			display: inline-block;
			padding: 10px 40px;
			background-color: #43BE76;
			border-radius: 30px;
			position: fixed;
			top: 65%;
			z-index: 2;
		}
		.setting {
			width: 14%;
			position: absolute;
			right: 8%;
			bottom: 0%;
		}
		.settingb {
			width: 13%;
			position: absolute;
			right:17%;
			bottom: 12%;
		}
	    .styletit{
	    	 font-size: 1.5rem;
	    }
	    /*.styletitC{*/
			 /*font-size: 1.5rem;*/
		/*}*/
		.listimg {
			width: 40%;
			margin-left: -8%;
			-webkit-transform: scale(0.7);
			transform: scale(0.7);
      		margin-top: 6%;
		}

		.listfirst {
			margin-left: -60px;
		}

	// 	.listimg:visited {
	// 		transform: scale(0.8);
	// 	}
	//
	// 	.listimg:active {
	// 		transform: scale(0.8);
	// 	}

		.acstyle {
			height: 70%;
			position: absolute;
			left: 5%;
			bottom: 9%;
		}

		.coinstyle {
			height: 70%;
			position: absolute;
			left: 35%;
			bottom: 9%;
		}

		.fontsize {
			bottom: 13%;
			position: absolute;
			font-size: 3rem;
			margin-left: 2%;
		}
		.leftmar2{
			left: 43%;
		}
		.spanp{
			top:22%;
			font-size:1.5rem;
		}
		.spanp1{
			font-size:1.3rem;
		}
		.withcolor{
			height:50%;
			top:20%;
			    border-radius: 75px;
		}
		.close {
			width: 70px;
			height:70px;

		}
		.startspan{
			    padding: 12%;
			    font-size: xx-large;
		}
		.close img {
			height: 70px;
			width: 70px;

		}
		.roleimg{
			    height: 53%;
			    top: 20%;
		}
		// .spanicon{
		//        top: -3.6rem;
		// 	   font-size: 1.6rem;
		// }
		.fonstart{
			    top: -22%;
			font-size: 2rem;
		}
	}

	@media screen and (min-width: 736px) and (max-width:811px){
		.twomenu{
			padding-top: 15%;
		}
	}

	@media screen and (min-width: 812px) and (max-width:895px) {
		.setting {
			width: 10%;
			position: absolute;
			right: 8%;
			bottom: 0%;
		}
		.settingb {
			width: 10%;
			position: absolute;
			right: 17%;
			bottom: 0%;
		}
		.animapng7{
		    margin-top: 1%;
		}

		.startspan{
			padding: 6%;
		}
		.menulist {
			margin-top: 0%;

		}

		.fonstart{
			left: -5%;
		}
		.card{
			left: 40%;
			 top: 20%;
		}
		.bosimg{
			padding-left: 1%;
			//margin-top: 7%;
		}


	}
	@media screen and (min-width: 895px) and (max-width:1023px){
		.setting {
			width: 10%;
			position: absolute;
			right: 8%;
			bottom: 0%;
		}
		.settingb {
			width: 10%;
			position: absolute;
			right:17%;
			bottom: 0%;
		}
		.animapng7{
		    margin-top: 1%;
		}

		.startspan{
			padding: 6%;
		}
		.menulist {
			margin-top: 0%;

		}

		.fonstart{
			left: -5%;
		}
		.card{
			left: 40%;
			 top: 20%;
		}
		.bosimg{
			padding-left: 1%;
			//margin-top: 7%;
		}

	}
  @media screen and (min-width: 1600px)  {
    .imgposit {
      margin-left: 1%;
      top: 25%;
    }
	.jump{
    color: white;
    font-size: 30px;
    font-family: kg;
    display: inline-block;
    padding: 10px 40px;
    background-color: #43BE76;
    border-radius: 30px;
	position: fixed;
	top: 65%;
	z-index: 2;
    }
    .setting {
      width: 14%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }
    .settingb {
      width: 11%;
      position: absolute;
      right:17%;
      bottom: 0%;
    }
    .styletit{
      font-size: 1.5rem;
    }
    /*.styletitC{*/
      /*font-size: 1.5rem;*/
    /*}*/
    .listimg {
      width: 40%;
      margin-left: -8%;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
      margin-top: 3%;

    }

    .listfirst {
      margin-left: -60px;
    }

    // 	.listimg:visited {
    // 		transform: scale(0.8);
    // 	}
    //
    // 	.listimg:active {
    // 		transform: scale(0.8);
    // 	}

    .acstyle {
      height: 70%;
      position: absolute;
      left: 5%;
      bottom: 9%;
    }
    .animapng7{
      width: auto;
    }
    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 3rem;
      margin-left: 2%;
    }
    .leftmar2{
      left: 43%;
    }
    .spanp{
      top:22%;
      font-size:2rem;
    }
    .spanp1{
      font-size:2rem;
    }
    .withcolor{
      height:60%;
      top:20%;
      border-radius: 75px;
    }
    .close {
      width: 100px;
      height:100px;
      margin: -36px;
    }
    .startspan{
      padding: 9%;
      font-size: 3rem;
    }
    .close img {
      height: 100px;
      width: 100px;

    }
    .roleimg{
      height: 63%;
      top: 20%;
    }
    // .spanicon{
    //        top: -3.6rem;
    // 	   font-size: 1.6rem;
    // }
    .fonstart{
      top: -22%;
      font-size: 2rem;
    }
    .start{
      border-radius: 80px;
    }
  }

  @media only screen and (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1024px) and (max-width: 1600px){
    .imgposit{
      margin-left: 3%;
    }
    .listimg {
      width: 40%;
      margin-left: -8%;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
      margin-top: 6%;
    }
  }

  @media only screen and (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 812px) and (max-width: 1023px){
    .imgposit{
      margin-left: 3%;
    }
    .listimg {
      width: 40%;
      margin-left: -10%;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
      margin-top: -5%;
    }
    .menulist {
      height: 123%;
    }
  }
</style>
