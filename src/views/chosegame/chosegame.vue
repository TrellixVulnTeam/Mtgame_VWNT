<template>
	<div class="chosegame">
		<div class="contain" id="container">
			<img src="../../assets/image/main_bg.png" style="width: 100%; height: 100%;display:block;position: absolute;">
				<!-- <img src="../../assets/image/rightback.png"  @click="back" class="backbutton"/> -->
				<!-- chosegame -->
				<transition name="fade1">
					<div v-if="chosegame" style="width: 100%;height: 100%;">
						<!-- <img src="../../assets/image/rightback.png"  @click="back" class="backbutton"/> -->
					<div class="two-monkey">
            <!-- chat room -->
						<div class="left-monkey">
							<div class="age">
								<img src="../../assets/image/game-course04.png">

							</div>
							<!-- <img src="../../assets/image/coming-soon.png" class="comingsoon"  v-if="index"> -->
							<div style="position: relative;">
							<!-- <div  class=" couresgrey" v-if="index" style="width: 100%;height: 100%;"></div> -->
							  <a class="abgcgreen" @click="$tips(true);chartroom1(courseList[0])">
								<div class="l-box">
										<img src="../../assets/image/greenmonkey.png" class="p-monkey">
								</div>
<!--								<p class="pbgcgreen">{{this.courseList[0].name}}</p>-->
                  <p class="pbgcgreen">CHAT ROOM</p>
                </a>
							</div>
						</div>
            <!-- phonics -->
            <div class="left-monkey">
            	<div class="age">
            		<img src="../../assets/image/game-course05.png">
            	</div>
            	 <!--<img src="../../assets/image/coming-soon.png" class="comingsoon">-->
            	<div style="position: relative;">
            	 <!--<div  class="couresgrey" style="width: 100%;height: 100%;"></div>-->
				  <a class="abgcgreen aackgrou"  @click="$tips(true);chartroom2(courseList[1])">
            		<div class="l-box">
                    <img src="../../assets/image/pinkmonkey.png" class="p-monkey">
            		</div>
<!--            		<p class="pbgcgreen backgrou">{{this.courseList[1].name}}</p>-->
                <p class="pbgcgreen backgrou">PHONICS</p>
            	  </a>
            	</div>
            </div>

					</div>
					</div>
				</transition>

				<!-- chart room -->
					<transition name="fade1">
						<div v-if="chartroom" style="width: 100%;height: 100%;">

						<div class="chart-room-out">
<!--							<h2 class="chartroom-title"><span>{{cources}}</span></h2>-->
              <h2 class="chartroom-title"><span>CHAT ROOM</span></h2>
              <div class="chart-room">
								<div class="left-walkers"  v-for="(li,i) in levelsList">
									<a @click="$tips(true);walkers1(li)">
										<img src="../../assets/image/selectW.png" v-if="i===0" class="sizeselect">
                    <img src="../../assets/image/selectR.png" v-if="i===1" class="sizeselect">
										<!--<div class="progress">-->
											<!--<p class="levels">{{li.name}}</p>-->
											<!--<div class="blueBG01">-->
												<!--<img src="../../assets/image/champan.png" v-bind:style="{width:li.percentage}">-->
										    <!--</div>-->
										    <!--<div>-->
												<!--<img src="../../assets/image/chamcup.png" class="chamcup"/>-->
										    <!--</div>-->
											<!--<span class="percent">{{li.percentage}}</span>-->
										<!--</div>-->
									</a>
								</div>

							</div>
						</div>
					    </div>
					</transition>

				<!-- walkers -->
					<transition name="fade1">
						<div v-if="walkers" style="width: 100%;height: 100%;">
							<!-- <img src="../../assets/image/rightback.png" @click="back" class="backbutton"/> -->
						<div class="walkers-room-out">
							<h2 class="chartroom-title"><span style="text-transform:capitalize">{{level}}</span></h2>
							<div class="walkers-room">
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Clothes'">-->
                  <!--<a  style="min-height: 100px;" >-->
                    <!--<img src="../../assets/image/moon/s4.png"  style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Theme Park'">-->
                  <!--<a  style="min-height: 100px;" >-->
                   <!--<img src="../../assets/image/moon/s5.png" v-if="li.name==='Theme Park'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Space'">-->
                  <!--<a  style="min-height: 100px;" >-->
                   <!--<img src="../../assets/image/moon/s6.png" v-if="li.name==='Space'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='My Body'">-->
                  <!--<a  style="min-height: 100px;" >-->
                   <!--<img src="../../assets/image/moon/mybody.png" v-if="li.name==='My Body'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='My Weekend'">-->
                  <!--<a  style="min-height: 100px;" >-->
                   <!--<img src="../../assets/image/moon/myweekend.png" v-if="li.name==='My Weekend'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->

                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Wild Animals'">-->
                  <!--<a  style="min-height: 100px;" >-->
                   <!--<img src="../../assets/image/moon/wild-animals.png" v-if="li.name==='Wild Animals'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->

                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Christmas'">-->
                  <!--<a  style="min-height: 100px;" >-->
                    <!--<img src="../../assets/image/moon/christmas.png" v-if="li.name==='Christmas'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->

                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='shopping'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/letsgoshopping.png" v-if="li.name==='shopping'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status"  style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='My Community'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/mycommunity.png" v-if="li.name==='My Community'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status"  style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Fun Time!'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/funtime.png" v-if="li.name==='Fun Time!'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status"  style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='My Home'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/myhome.png" v-if="li.name==='My Home'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status"  style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Our World'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/ourworld.png" v-if="li.name==='Our World'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status"  style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1"  v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Fairy Tales'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/fairytales.png" v-if="li.name==='Fairy Tales'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='School Life'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/schooltime.png"  v-if="li.name==='School Life'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Animals'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/animals.png"  v-if="li.name==='Animals'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Family Time'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/myfamily.png"  v-if="li.name==='Family Time'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
                <!--<div class="box1" v-for="(li,index) in unitsList" :key="index" v-if="li.name==='Holidays'">-->
                  <!--<a  style="min-height: 100px;">-->
                    <!--<img src="../../assets/image/moon/holidays.png"  v-if="li.name==='Holidays'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.status" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <!--<p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
                  <!--</a>-->
                <!--</div>-->
								<div class="box1" v-for="(li,index) in unitsList" :key="index">
									<a  style="min-height: 100px;">
										<img src="../../assets/image/moon/mealtime.png" v-if="li.name==='Meal Time'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/onthefarm.png" v-if="li.name==='On the Farm'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/s1.png" v-if="li.name==='Seasons'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/s2.png" v-if="li.name==='Transportation'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/s3.png" v-if="li.name==='Bugs'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/s4.png" v-if="li.name==='Clothes'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/s5.png" v-if="li.name==='Theme Park'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/s6.png" v-if="li.name==='Space'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <!--<img src="../../assets/image/moon/s7.png" v-if="li.name==='My Family'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <!--<img src="../../assets/image/moon/s8.png" v-if="li.name==='Holidays'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">-->
                    <img src="../../assets/image/moon/mybody.png" v-if="li.name==='My Body'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/myweekend.png" v-if="li.name==='My Weekend'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
										<img src="../../assets/image/moon/wild-animals.png" v-if="li.name==='Wild Animals'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
										<img src="../../assets/image/moon/christmas.png" v-if="li.name==='Christmas'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/letsgoshopping.png" v-if="li.name==='Let\'s Go Shopping'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/mycommunity.png" v-if="li.name==='My Community'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/funtime.png" v-if="li.name==='Fun Time!'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/myhome.png" v-if="li.name==='My Home'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
										<img src="../../assets/image/moon/ourworld.png" v-if="li.name==='Our World'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
										<img src="../../assets/image/moon/fairytales.png" v-if="li.name==='Fairy Tales'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/schooltime.png" v-if="li.name==='School Life'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/animals.png" v-if="li.name==='Animals'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/myfamily.png" v-if="li.name==='Family Time'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/holidays.png" v-if="li.name==='Holidays'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/Exploration.png" v-if="li.name==='Exploration'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/Summer Fun.png" v-if="li.name==='Summer Fun'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <img src="../../assets/image/moon/schooltime.png" v-if="li.name==='School Time'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;" @click="$tips(true);walkersunit(li)">
                    <!--<img src="../../assets/image/comingsoon.png" v-show="!li.name=='My Body'" style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">-->
                    <img src="../../assets/image/comingsoon.png" v-show="!li.status"  style="position: absolute; width: 105%;height: 101%; left: -2%; top: 0;z-index: 99;">
										<p><i><img src="../../assets/image/star_frame.png"></i>{{li.start}}</p>
<!--                    <p><i><img src="../../assets/image/star_frame.png"></i>{{li.stars}}</p>-->
									</a>
								</div>
							</div>
						</div>
						</div>
					</transition>





				<div class="settinglist">
					<img src="../../assets/image/walker_bar.png" style="width: 100%;bottom: 0;height: 100%;">
					<!-- <img src="../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
					<div>
						<img :src=gameImage class="acstyle" @click="$tips(true);goinfo()" />
						<span class="fontsize leftmar" >{{firstName}}</span>
					</div>
					<div>
						<img src="../../assets/image/icon_coin.png" class="coinstyle">
						<span class="fontsize leftmar2">{{sum}}</span>
					</div>
					<!-- <div @click="back">
						<img src="../../assets/image/game-course03.png"  class="pause">
						 <img src="../../assets/image/game-course03.png"  class=" pause" v-if="!action"> -->
					<!-- </div> -->
					<div @click="$tips(true);back()">
           				<img src="../../assets/image/Icon_back.png"  class="pause">
         			</div>
					<div @click="$tips(true);home()">
						<!-- <img src="../../assets/image/Icon_home0.png" class="repeat" v-if="action1"> -->
						<img src="../../assets/image/Icon_home.png" class="repeat">
					</div>
				</div>

      <div class='popContainer' v-if="popp">

        <div class="withcolor">
          <div class="close"  @click="$tips(true);pop()">
            <img src="../../assets/image/cloce.png">
          </div>
          <button class="animapng7" @click="$tips(true);tohome(1)">
            <!--<img  src="../../assets/image/4-4p1.png" class="imgpart" >-->
            <img src="../../assets/image/moon/mealtime1.png" v-if="this.unitname==='Meal Time'"  class="imgpart">
            <img src="../../assets/image/moon/onthefarm1.png" v-if="this.unitname==='On the Farm'" class="imgpart">
            <img src="../../assets/image/moon/seasons1.png" v-if="this.unitname==='Seasons'" class="imgpart">
            <img src="../../assets/image/moon/transportation1.png" v-if="this.unitname==='Transportation'" class="imgpart">
            <img src="../../assets/image/moon/bugs1.png" v-if="this.unitname==='Bugs'" class="imgpart">
            <img src="../../assets/image/moon/clothes1.png" v-if="this.unitname==='Clothes'" class="imgpart">
            <img src="../../assets/image/moon/themeparks1.png" v-if="this.unitname==='Theme Park'" class="imgpart">
            <img src="../../assets/image/moon/space1.png" v-if="this.unitname==='Space'" class="imgpart">
            <!--<img src="../../assets/image/moon/s7.png" v-if="this.unitname==='My Family'" class="imgpart">-->
            <!--<img src="../../assets/image/moon/s8.png" v-if="this.unitname==='Holidays'" class="imgpart">-->
            <img src="../../assets/image/moon/mybody1.png" v-if="this.unitname==='My Body'" class="imgpart">
            <img src="../../assets/image/moon/myweekend1.png" v-if="this.unitname==='My Weekend'" class="imgpart">
            <img src="../../assets/image/moon/in the ocean.png" v-if="this.unitname==='Wild Animals'" class="imgpart">
            <img src="../../assets/image/moon/christmas1.png" v-if="this.unitname==='Christmas'" class="imgpart">
            <img src="../../assets/image/moon/letsgoshopping1.png" v-if="this.unitname==='Let\'s Go Shopping'" class="imgpart">
            <img src="../../assets/image/moon/mycommunity1.png" v-if="this.unitname==='My Community'" class="imgpart">
            <img src="../../assets/image/moon/funtime1.png" v-if="this.unitname==='Fun Time!'" class="imgpart">
            <img src="../../assets/image/moon/myhome1.png" v-if="this.unitname==='My Home'" class="imgpart">
            <img src="../../assets/image/moon/ourworld1.png" v-if="this.unitname==='Our World'" class="imgpart">
            <img src="../../assets/image/moon/fairytales1.png" v-if="this.unitname==='Fairy Tales'" class="imgpart">
            <img src="../../assets/image/moon/schooltime1.png" v-if="this.unitname==='School Time'" class="imgpart">
            <img src="../../assets/image/moon/animals1.png" v-if="this.unitname==='Animals'" class="imgpart">
            <img src="../../assets/image/moon/myfamily1.png" v-if="this.unitname==='Family Time'" class="imgpart">
            <img src="../../assets/image/moon/holidays1.png" v-if="this.unitname==='Holidays'" class="imgpart">
            <img src="../../assets/image/moon/Exploration1.png" v-if="this.unitname==='Exploration'" class="imgpart">
            <img src="../../assets/image/moon/summerfun1.png" v-if="this.unitname==='Summer Fun'" class="imgpart">
          </button>
          <button class="animapng7" @click="$tips(true);tohome(2)">
            <img src="../../assets/image/moon/mealtime2.png" v-if="this.unitname==='Meal Time'"  class="imgpart">
            <img src="../../assets/image/moon/onthefarm2.png" v-if="this.unitname==='On the Farm'" class="imgpart">
            <img src="../../assets/image/moon/seasons2.png" v-if="this.unitname==='Seasons'" class="imgpart">
            <img src="../../assets/image/moon/transportation2.png" v-if="this.unitname==='Transportation'" class="imgpart">
            <img src="../../assets/image/moon/bugs2.png" v-if="this.unitname==='Bugs'" class="imgpart">
            <img src="../../assets/image/moon/clothes2.png" v-if="this.unitname==='Clothes'" class="imgpart">
            <img src="../../assets/image/moon/themeparks2.png" v-if="this.unitname==='Theme Park'" class="imgpart">
            <img src="../../assets/image/moon/space2.png" v-if="this.unitname==='Space'" class="imgpart">
            <!--<img src="../../assets/image/moon/s7.png" v-if="this.unitname==='My Family'" class="imgpart">-->
            <!--<img src="../../assets/image/moon/s8.png" v-if="this.unitname==='Holidays'" class="imgpart">-->
            <img src="../../assets/image/moon/mybody2.png" v-if="this.unitname==='My Body'" class="imgpart">
            <img src="../../assets/image/moon/myweekend2.png" v-if="this.unitname==='My Weekend'" class="imgpart">
            <img src="../../assets/image/moon/in the jungle.png" v-if="this.unitname==='Wild Animals'" class="imgpart">
            <img src="../../assets/image/moon/christmas2.png" v-if="this.unitname==='Christmas'" class="imgpart">
            <img src="../../assets/image/moon/letsgoshopping2.png" v-if="this.unitname==='Let\'s Go Shopping'" class="imgpart">
            <img src="../../assets/image/moon/mycommunity2.png" v-if="this.unitname==='My Community'" class="imgpart">
            <img src="../../assets/image/moon/funtime2.png" v-if="this.unitname==='Fun Time!'" class="imgpart">
            <img src="../../assets/image/moon/myhome2.png" v-if="this.unitname==='My Home'" class="imgpart">
            <img src="../../assets/image/moon/ourworld2.png" v-if="this.unitname==='Our World'" class="imgpart">
            <img src="../../assets/image/moon/fairytales2.png" v-if="this.unitname==='Fairy Tales'" class="imgpart">
            <img src="../../assets/image/moon/schooltime2.png" v-if="this.unitname==='School Time'" class="imgpart">
            <img src="../../assets/image/moon/animals2.png" v-if="this.unitname==='Animals'" class="imgpart">
            <img src="../../assets/image/moon/myfamily2.png" v-if="this.unitname==='Family Time'" class="imgpart">
            <img src="../../assets/image/moon/holidays2.png" v-if="this.unitname==='Holidays'" class="imgpart">
            <img src="../../assets/image/moon/Exploration2.png" v-if="this.unitname==='Exploration'" class="imgpart">
            <img src="../../assets/image/moon/summerfun2.png" v-if="this.unitname==='Summer Fun'" class="imgpart">
          </button>
          <button class="animapng7" @click="$tips(true);tohome(3)">
            <img src="../../assets/image/moon/mealtime3.png" v-if="this.unitname==='Meal Time'"  class="imgpart">
            <img src="../../assets/image/moon/onthefarm3.png" v-if="this.unitname==='On the Farm'" class="imgpart">
            <img src="../../assets/image/moon/seasons3.png" v-if="this.unitname==='Seasons'" class="imgpart">
            <img src="../../assets/image/moon/transportation3.png" v-if="this.unitname==='Transportation'" class="imgpart">
            <img src="../../assets/image/moon/bugs3.png" v-if="this.unitname==='Bugs'" class="imgpart">
            <img src="../../assets/image/moon/clothes3.png" v-if="this.unitname==='Clothes'" class="imgpart">
            <img src="../../assets/image/moon/themeparks3.png" v-if="this.unitname==='Theme Park'" class="imgpart">
            <img src="../../assets/image/moon/space3.png" v-if="this.unitname==='Space'" class="imgpart">
            <!--<img src="../../assets/image/moon/s7.png" v-if="this.unitname==='My Family'" class="imgpart">-->
            <!--<img src="../../assets/image/moon/s8.png" v-if="this.unitname==='Holidays'" class="imgpart">-->
            <img src="../../assets/image/moon/mybody3.png" v-if="this.unitname==='My Body'" class="imgpart">
            <img src="../../assets/image/moon/myweekend3.png" v-if="this.unitname==='My Weekend'" class="imgpart">
            <img src="../../assets/image/moon/wildanimals3.png" v-if="this.unitname==='Wild Animals'" class="imgpart">
            <img src="../../assets/image/moon/christmas3.png" v-if="this.unitname==='Christmas'" class="imgpart">
            <img src="../../assets/image/moon/letsgoshopping3.png" v-if="this.unitname==='Let\'s Go Shopping'" class="imgpart">
            <img src="../../assets/image/moon/mycommunity3.png" v-if="this.unitname==='My Community'" class="imgpart">
            <img src="../../assets/image/moon/funtime3.png" v-if="this.unitname==='Fun Time!'" class="imgpart">
            <img src="../../assets/image/moon/myhome3.png" v-if="this.unitname==='My Home'" class="imgpart">
            <img src="../../assets/image/moon/ourworld3.png" v-if="this.unitname==='Our World'" class="imgpart">
            <img src="../../assets/image/moon/fairytales3.png" v-if="this.unitname==='Fairy Tales'" class="imgpart">
            <img src="../../assets/image/moon/schooltime3.png" v-if="this.unitname==='School Time'" class="imgpart">
            <img src="../../assets/image/moon/animals3.png" v-if="this.unitname==='Animals'" class="imgpart">
            <img src="../../assets/image/moon/myfamily3.png" v-if="this.unitname==='Family Time'" class="imgpart">
            <img src="../../assets/image/moon/holidays3.png" v-if="this.unitname==='Holidays'" class="imgpart">
            <img src="../../assets/image/moon/Exploration3.png" v-if="this.unitname==='Exploration'" class="imgpart">
            <img src="../../assets/image/moon/summerfun3.png" v-if="this.unitname==='Summer Fun'" class="imgpart">
          </button>
        </div>
      </div>
    </div>
	</div>

</template>

<script>

	var qs = require('qs');
	export default {
		name: "chosegame",
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
            ,500)
        }
      }
		},
		data() {
			return {
			  loading:false,
				action:false,
				action1:false,
        popp:false,
				audio:'',
				sum:0,
				firstName:'',
				gameImage:'',
				studentId:'',
				video:false,
        shopping:"Let's Go Shopping",
				courseId:'',
				levelsId:'',
				cources:'',
				level:'',
				unitname:'',
				unitsId:'',
				courseList:[
					{
						bg:'',
						name:''
					},
					{
						bg:'',
						name:''
					}
				],
				levelsList:[],
				unitsList:[],
				//url: 'http://localhost:8080/mtGame/user/',
				// url: 'http://demo11.embraiz.com/mtGame/user/',
				pic:"",
				url: '/user/',
			    // pic: "http://demo11.embraiz.com/mtGameHK",
				url1:'',
				url2:'',
				url3:'',
				url4:'',
				fade: 'fade',
				zhezhao:false,
				style:'',
				type: 'chosegame',
				chosegame:true,
				chartroom:false,
        starts:"0/30",
        start:0,
				walkers:false,
        phonics:'',
				runners:false,
				activitiesmenu:false,
			}
		},

		methods: {
      pop(){
        this.popp = !this.popp;
      },
      tohome(e){
        if(e===1){
          this.walkers = false;
          this.$router.push({
            path: '/home',
            query: {
              unit:this.unitname,
              unitsId:this.unitsId,
              levelsId:this.levelsId,
              courseId:this.courseId,
              part:'part1',
              style:this.style,
              level:this.level,
              cources:this.cources
            }
          });
        }else if(e===2){
          this.walkers = false;
          this.$router.push({
            path: '/home',
            query: {
              unit:this.unitname,
              unitsId:this.unitsId,
              levelsId:this.levelsId,
              courseId:this.courseId,
              part:'part2',
              style:this.style,
              level:this.level,
              cources:this.cources
            }
          });
        }else if(e===3){
          this.walkers = false;
          this.$router.push({
            path: '/home',
            query: {
              unit:this.unitname,
              unitsId:this.unitsId,
              levelsId:this.levelsId,
              courseId:this.courseId,
              part:'part3',
              style:this.style,
              level:this.level,
              cources:this.cources
            }
          });
        }

      },
			back() {
				if(this.chartroom==true){
					this.action=true;
					    setTimeout(() => {
					    this.action=false;
					 	this.chosegame=true;
						this.walkers=false;
						this.activitiesmenu=false;
						this.chartroom=false;
					    }, 1000);
				}else if(this.walkers==true){
					this.action=true;
					    setTimeout(() => {
					    this.action=false;
					    this.chartroom=true;
						this.walkers=false;
						this.url2=this.url+"Levels";
						this.$axios.post(this.url2,qs.stringify({
						studentId:localStorage.getItem('studentId'),
						courseId:1,
						})).then(res=>{
							this.levelsList=res.data.levelsList;
						}, res => {
						    alertMsg("You must be connected to the internet.<br>Please connect and try again.");
						})
					    }, 1000);
				}else if(this.activitiesmenu==true){
					this.action=true;
				    setTimeout(() => {
				    this.action=false;
				 	this.walkers=true;
					this.chartroom=false;
				 	this.activitiesmenu=false;
					this.url3=this.url+"Units";
					this.$axios.post(this.url3,qs.stringify({
					studentId:localStorage.getItem('studentId'),
					levelsId:this.levelsId
					})).then(res=>{
					this.unitsList=res.data.unitsList;
            for(var i=0;i<this.unitsList.length;i++){
              if(this.unitsList[i].unit_name==="September"){
                this.starts=this.unitsList[i].stars;
                this.unitname=this.unitsList[i].unit_name;
                this.unitsId=this.unitsList[i].units_detail_id;
              }
            }
							 // for(var i=0;i<this.unitsList.length;i++){
							 // 	this.unitsList[i].bg=this.pic+this.unitsList[i].bg
							 // }
					}, res => {
					    alertMsg("You must be connected to the internet.<br>Please connect and try again.");
					})
				    }, 1000);
				}else if(this.chosegame==true){
					this.action=true;
				    setTimeout(() => {
				    this.action=false;
				 	this.$router.push({path: '/source'})
				   }, 1000);
				}
			},
			home() {
				this.action1=true;
				setTimeout(() => {
				this.action1=false;
				this.$router.push({path: '/source'})
			    }, 1000);
			},
			chartroom1(li) {
				this.courseId=li.course_id;
				this.cources=li.name;
				this.chosegame=false;
				this.chartroom = true;
				this.url2=this.url+"Levels";
				this.$axios.post(this.url2,qs.stringify({
				studentId:localStorage.getItem('studentId'),
				courseId:this.courseId
				})).then(res=>{
					this.levelsList=res.data.levelsList;
				}, res => {
				    alertMsg("You must be connected to the internet.<br>Please connect and try again.");
				})
			},
      chartroom2(li) {
        if(this.phonics===0){
          alertImg2(this.$axios.defaults.baseURL2);
          setTimeout((function () {
                alertFram.style.display = "none";
          }), 1500)
        }else if (this.phonics===1){
          this.courseId=li.course_id;
          this.cources=li.name;
          this.$router.push({
            path: '/pchosegame',
            query: {
              courseId:this.courseId,
              cources:this.cources,
              style:this.style,
            }
          })
        }
      },
			walkers1(li) {
				this.chartroom =false;
				this.walkers=true;
				if(li.name==="Walkers"){
					this.level="WALKERS";
				}else if(li.name==="Runners"){
					this.level="RUNNERS";
				}
				let that=this;
				this.levelsId=li.levels_detail_id;
				this.url3=this.url+"Units";
				this.loading = true;
				this.$axios.post(this.url3,qs.stringify({
				studentId:localStorage.getItem('studentId'),
				levelsId:this.levelsId
				})).then(res=>{
				this.unitsList=res.data.unitsList;
				this.loading = false;
				}, res => {
				    alertMsg("You must be connected to the internet.<br>Please connect and try again.");
				})
			},
			walkersunit(li){
         this.popp = !this.popp;
				 this.unitname=li.name;
				 this.unitsId=li.units_detail_id;

				// this.walkers = false;
        //   		this.$router.push({
				// path: '/home',
				// query: {
				// unit:this.unitname,
				// unitsId:this.unitsId,
				// levelsId:this.levelsId,
				// courseId:this.courseId,
				// part:'part3',
				// style:this.style,
				// level:this.level,
        //       		cources:this.cources
        //     		}
        //   		});

				// if(this.style=="game"){
				// this.walkers = false;
				// if(this.courseId==1){
				// 	this.$router.push({
				// 		path: '/home',
				// 		query: {
				// 			unit:this.unitname,
				// 			unitsId:this.unitsId,
				// 			levelsId:this.levelsId,
				// 			courseId:this.courseId,
				// 			style:this.style,
				// 			level:this.level,
				// 			cources:this.cources
				// 		}
				// 	})
				// }}
			},
			// jumpunit(){
			// 	if(this.courseId==1){
			// 		this.$router.push({
			// 		path: '/home',
			// 	    query: {
			// 		    unit:this.unitname,
			// 			unitsId:this.unitsId,
			// 			levelsId:this.levelsId,
			// 			courseId:this.courseId,
			// 			style:this.style,
			// 			level:this.level,
			// 			cources:this.cources
			// 	    }
			// 	})
			// 	}else if(this.courseId==2){
			// 		this.$router.push({
			// 			path: '/phonicsmenu',
			// 		    query: {
			// 			    unit:this.unitname,
			// 				unitsId:this.unitsId,
			// 				levelsId:this.levelsId,
			// 				courseId:this.courseId,
			// 				style:this.style,
			// 				level:this.level,
			// 				cources:this.cources
			// 		    }
			// 		})
			// 	}
      //
			// },
		    goinfo(){
				this.$router.push({ //核心语句
						path: '/info', //跳转的路径
				})
			},
		},

		created() { //生命周期里接收参数
				this.pic=this.$axios.defaults.baseURL2;
				if(this.$route.query.levelsId){
					this.level= this.$route.query.level;
					this.levelsId= this.$route.query.levelsId;
					this.courseId= this.$route.query.courseId;
					this.unitname= this.$route.query.unit;
					this.cources=this.$route.query.cources;
          this.chosegame =false;
          this.walkers=true;
          this.url3=this.url+"Units";
          this.$axios.post(this.url3,qs.stringify({
          studentId:localStorage.getItem('studentId'),
          levelsId:this.levelsId
          })).then(res=>{
            this.unitsList=res.data.unitsList;
          }, res => {
            alertMsg("You must be connected to the internet.<br>Please connect and try again.");
          })
				}
        this.style= this.$route.query.style; //接受参数关键代码
				this.firstName=localStorage.getItem('firstName');
				this.gameImage=localStorage.getItem('gameImage');
				this.sum=localStorage.getItem('sumCoins');
				this.studentId=localStorage.getItem('studentId');
				this.loading = true;
				this.url1=this.url+"course";
				this.$axios.post(this.url1,qs.stringify({
				  studentId:localStorage.getItem('studentId')
				})).then(res=>{
					this.courseList=res.data.courseList;
          this.phonics=res.data.phonics;
					for(let i=0; i<this.courseList.length; i++){
						this.courseList[i].bg=this.pic+this.courseList[i].bg
					}
					this.loading = false;
				}, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
				})

		}

	};
</script>

<style scoped lang="less">

	.body {
		padding: 0;
	}

	.chosegame {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
	}

  .acstyle {
    height: 70%;
    position: absolute;
    left: 5%;
    bottom: 9%;
  border-radius: 50px;
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

	.backbutton{
		// display: block;
		z-index: 2;
		 width: 6%;
		 position: fixed;
		 left: 15px;
		  top: 15px;
	}
    .levels{
	    top: 14%;
	    width: 100%;
		position: absolute;
	    text-align: center;
	    font-size: 2.5rem;
	    font-family: pepper;
	    color: #5C3400;
	}
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
	#container {
		 height: 100vh;
	    /*overflow: auto;*/
	    -webkit-overflow-scrolling: touch;
	}
	.coinstyle {
		height: 70%;
		position: absolute;
		left: 33%;
		bottom: 9%;
	}
	.setting {
		width: 12%;
		position: absolute;
		right: 8%;
		bottom: 0%;
	}
  .sizeselect{
    width: 90%;
  }

	.fade1-enter-active {
		transition: all 0.6s;
	}

	.fade1-leave-active {
		transition: all 0.6s;
	}

	.fade1-enter {
		transform: translate3d( 100%,0, 0);
	}

	.fade1-leave-to {
		//transform: translate3d(100%, 0, 0);
		transform: translate3d(-99%,0, 0);
	}

  .backbutton{
    // display: block;
    z-index: 2;
    width: 6%;
    position: fixed;
    left: 15px;
    top: 15px;
  }
  .popContainer {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: rgba(0, 0, 0, 0.3);
   }
  .withcolor {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    top: 20%;
    background-color: #fdd35c;
    height: 40%;
    border: 20px solid #fbfdd2;
    border-radius: 50px;
    position: relative;
  }
  .close {
    width: 50px;
    height: 50px;
    float: right;
    margin: -20px;
    border-radius: 50px;
    text-align: center;
  }
  .close img {
    height: 50px;
    width: 50px;
    margin: 0 auto;
  }
  .animapng7 {
    height: 100%;
    width: 26%;
    color: white;
    margin-top:0%;
    margin-left: 1%;
    margin-right: 1%;
    background:none;
    border:none;
    text-align: center;
  }
  .imgpart{
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }


  @media screen and (max-width: 481px) {
		.fontsize {
			bottom: 16%;
			position: absolute;
			font-size: 1.2rem;
			margin-left: 2%;
		}
	}
    @media screen and (min-width: 482px) and (max-width: 569px) {
    	.fontsize {
    		bottom: 16%;
    		position: absolute;
    		font-size: 1.2rem;
    		margin-left: 2%;
    	}
	}

	//chosegame content css
	.two-monkey{
		display: flex;
		justify-content: center;
		position: relative;
		top: 50%;
		transform: translateY(-60%);
		width: 100%;
		text-align: center;
	}
	.two-monkey .left-monkey,
	.two-monkey .right-monkey{
		position: relative;
		margin: 10px 55px;
	}
	.abgcgreen{
		background-color:#F1FFE1 ;
	}
	.aackgrou{
		background-color:#FFEDDC ;
	}
	.two-monkey .left-monkey a{
		display: block;
		border-radius: 60px;
		box-shadow: 10px 10px 1px gray;
		position: relative;
		overflow: hidden;
		box-shadow: 6px 6px 1px #BD9712;
	}
	.couresgrey{
		border-radius: 60px;
		position: absolute;
		opacity: 0.23;
		background: #6c6b6b;
		z-index: 9;
	}
	.two-monkey .right-monkey a{
		display: block;
		border-radius: 60px;
		box-shadow: 10px 10px 1px gray;
		position: relative;
		overflow: hidden;
		box-shadow: 6px 6px 1px #BD9712;
	}
	.two-monkey .age{
		position: absolute;
		top:-9%;
		right: -14%;
		z-index: 9;
	}
	.two-monkey .age > img{
		width: 35%;
	}
	.l-box,
	.r-box{
		display: block;
		// padding: 20px;
	}
	.l-box img,
	.r-box img{
		width: 100%;
	}
	.pbgcgreen{
		background-color: #43BE76;
	}
	.backgrou{
		background-color: #FF9239 !important;
	}
	.left-monkey p{
		color: white;
		font-family: kg;
		font-size: 40px;
    min-height: 40px;
		padding-top:24px ;
		padding-bottom: 24px;
		position: absolute;
		bottom: 0;
		width: 100%;
		cursor: pointer;
	}
	.right-monkey p{
		background-color: #FF9239;
		color: white;
		font-family: kg;
		font-size: 40px;
		padding-top:24px ;
		padding-bottom: 24px;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	@media screen and (min-width: 736px) and (max-width: 991px){
		.two-monkey{
		    transform: translateY(-56%);
		}
		.two-monkey .left-monkey,
		.two-monkey .right-monkey{
		    position: relative;
		    margin: 30px 60px;
			padding:10px;
		}
		.two-monkey .age {
		    right: -20%;
		    top: -1%;

		}
		.two-monkey .age img{
			width: 40%;
		}
		.two-monkey .left-monkey a,
		.two-monkey .right-monkey a{
		    border-radius: 40px;
		}
		.couresgrey{
			border-radius: 40px;
		}
		.left-monkey p,
		.right-monkey p{
		    font-size: 30px;
		     padding-top: 17px;
			    padding-bottom: 17px;
          min-height: 30px;
		    // padding-top: 12px;
		    // padding-bottom: 12px;
		}
		.l-box,
		.r-box{
			//padding: 5px 20px;
		}
    /*.animapng7 {*/
      /*margin-top:8%;*/
    /*}*/
	}
	@media screen and (max-width: 740px) {
		.two-monkey .left-monkey,
		.two-monkey .right-monkey {
			position: relative;
			margin: 10px 40px;
		}
		.two-monkey .left-monkey a, .two-monkey .right-monkey a{
		    border-radius: 34px;
		}
		.couresgrey{
			border-radius: 34px;
		}
		.l-box, .r-box{
		   // padding: 8px 30px;
		}
		.left-monkey p,
		.right-monkey p{
		    font-size: 28px;
		    padding-top: 12px;
        min-height: 28px;
		    padding-bottom: 12px;
		}
	}
	@media screen and (max-width: 670px){
		.two-monkey .age {
		    right: -31%;
		}
	}
	@media screen and (max-width: 569px){
			.two-monkey .left-monkey,
			.two-monkey .right-monkey{
			    position: relative;
			    margin: 10px 40px;
			}
			.two-monkey .age {
			    right: -38%;
			}
			.two-monkey .age img{
				width: 30%;
			}
			.left-monkey p,
			.right-monkey p{
			    font-size: 22px;
          min-height: 22px;
				padding: 10px 0;
			}
			.two-monkey .left-monkey a,
			.two-monkey .right-monkey a{
			    border-radius: 20px;
			}
			.couresgrey{
		        border-radius: 20px;
	        }
			.two-monkey .left-monkey,
			.two-monkey .right-monkey {
				position: relative;
				margin: 10px 34px;
			}
	}

		// chartroom content css
		.chart-room-out{
			position: relative;
			top: 50%;
			transform: translateY(-70%);
		}
		.chart-room-out .chartroom-title{
			margin: 20px auto;
		}
		.chart-room-out .chartroom-title span{
			color: white;
			font-size: 30px;
			font-family: kg;
			display: inline-block;
			padding: 10px 40px;
			background-color: #43BE76;
			border-radius: 30px;
			margin: 0 auto;
		}
		.chart-room-out .chart-room{
			display: flex;
			display: -moz-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			justify-content: center;
			margin: auto 45px;
		}
		.chart-room .left-walkers,
		.chart-room .right-runners{
			position: relative;
			margin: 30px;
		}
		.chart-room .left-walkers a,
		.chart-room .right-runners a{
			display: block;
			// background-color:#F8F5D1 ;
			// border-radius: 40px;
			// box-shadow: 6px 6px 1px #BD9712;
			// position: relative;
			// overflow: hidden;
			// padding: 30px 0;
		}
		// .chart-room .left-walkers a > img,
		// .chart-room .right-runners a > img{
		// 	width: 110%;
		// }
		.blueBG01{
			    background-color: #066B93;
			        border: 4px solid #057BB8;
			        border-radius: 50px;
			        width: 175px;
			        height: 50px;
			        text-align: left;
			        position: absolute;
			        overflow: hidden;
			        top: 54%;
			        left: 12%;
		}
		.blueBG01 img{
			    border-top-left-radius: 50px;
			    border-bottom-left-radius: 50px;
			    height: 54px;
		}
		.blueBG02 img{
			width: 50%;
		}
		.chamcup{
			    width: 22%;
			    float: right;
			    margin-top: -30%;
			    margin-right: 12%;
			    position: relative;
		}
		.chart-room .left-walkers a .progress span,
		.chart-room .right-runners a .progress span{
			    position: absolute;
			    display: inline-block;
			    top: 62%;
			    left: 40%;
			    font-size: 20px;
			    font-family: kg;
			    color: white;
		}
		@media screen and (max-width: 991px){
			.chart-room .left-walkers,
			.chart-room .right-runners{
			    position: relative;
			    margin: auto 0;
			}
			// .chart-room .left-walkers a > img,
			// .chart-room .right-runners a > img{
			//     width: 90%;
			// }
			.blueBG01{
				width: 160px;
				height: 44px;
				top: 48%;
				left: 17%;
			}
			.blueBG01 img{
				height: 45px;
			}
			.chamcup{
			    width: 19%;
				margin-top: -33%;
				margin-right: 16%;
			}
			.chart-room .left-walkers a .progress span,
			.chart-room .right-runners a .progress span{
				top: 56%;
			}
		}
		@media screen and (max-width: 690px){
			.chart-room-out .chart-room{
				margin: auto;
			}
		}
		@media screen and (max-width: 569px){
			.chart-room-out .chartroom-title span{
				font-size: 24px;
			}
			.personer-box{
			    height: 80% !important;
			}
		}
		// walkers
		.walkers-room-out{
			position: relative;
			top: 3%;
			height: 82%;
			//height: 85%;
			    overflow: hidden;
			    overflow-y: scroll;
		}
		.walkers-room-out .chartroom-title{
			margin: 20px auto;
		}
		.walkers-room-out .chartroom-title span{
			color: white;
			font-size: 30px;
			font-family: kg;
			display: inline-block;
			padding: 10px 40px;
			background-color: #43BE76;
			border-radius: 30px;
		}
		.walkers-room-out .walkers-room{
			//justify-content: center;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			margin-bottom: 20px;
			//margin-right: -15px;
			//margin-left: -15px;
			    position: relative;
			    left: 50%;
			    transform: translateX(-45%);
		}
		.walkers-room .box1{
			position: relative;
			width: 100%;
			min-height: 1px;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 30%;
			flex: 0 0 30%;
			max-width: 30%;
		}
		.walkers-room .box1 a{
			display: block;
			border-radius: 30px;
			box-shadow: 6px 6px 1px #BD9712;
			position: relative;
			overflow: hidden;
			padding: 30px 60px;
			margin: 15px ;
		}
		.walkers-room .box1 a h3 span{
			display: inline-block;
			min-width: 80px;
			font-size: 20px;
			font-family: pepper;
			font-weight: bold;
			color: white;
			padding: 6px 20px;
			background-color: #43BE76;
			margin-bottom: 10px;
			border-radius: 30px;
		}
		.walkers-room .box1 a span{
			display: block;
			font-size: 1.2rem;
			color: #7D4E28;
			font-family: pepper;
		}
		.walkers-room .box1 a p{
			bottom: 0.3rem;
			text-align: center;
			position: absolute;
			margin: 0 auto;
			width: 100%;
			left: 6%;
			color: white;
			font-size: 1rem;
			font-family: kg;
			padding: 10px 0 0 0;
		}
		.walkers-room .box1 a p i{
			display: block;
			position: absolute;
			    left: 40%;
			    top: 50%;
			    transform: translate(-118%, -35%);
		}
		.walkers-room .box1 a p i img{
			width: 1.5rem;
			margin-top: 0.2rem;
		}

		@media screen and (max-width: 890px){
			.walkers-room .box1 a{
			    padding: 30px 36px;
			}
			.walkers-room-out{
			    top: 0%;
				height: 85%;
			}
			.walkers-room .box1 a span{
				 font-size:1.3rem;
			}
		}
		@media screen and (max-width: 740px){
			.walkers-room-out .chartroom-title span{
				font-size: 22px;
			}
			.walkers-room .box1 a{
			    padding: 20px;
				margin: 10px;
			}
			.walkers-room .box1 a h3 span{
			    font-size: 18px;
			}
			// .walkers-room .box1 a span{
			// 	font-size: 20px;
			// }
			// .walkers-room .box1 a p{
			// 	// font-size: 20px;
			// 	// padding-left: 46px;
			// }
			// .walkers-room .box1 a p i{
			//     transform: translate(-98%, -35%);
			// }
			// .walkers-room .box1 a p i img{
			//     width: 60%;
			// }
		}
		@media screen and (max-width: 569px){
			.walkers-room .box1 a{
			    padding: 15px 10px;
				margin: 0 10px 9px 10px;
				border-radius: 28px;
			}
		}
		@media screen and (max-width: 480px){
			.walkers-room .box1 a{
			    padding: 5px;
				margin: 0 5px;
				border-radius: 20px;
			}
		}

		// runners
		.runners-room-out{
			position: relative;
			top: 3%;
			//height: 85%;
			height: 80%;
			    overflow: hidden;
			    overflow-y: scroll;
		}
		.runners-room-out .chartroom-title{
			margin: 20px auto;
		}
		.runners-room-out .chartroom-title span{
			color: white;
			font-size: 30px;
			font-family: kg;
			display: inline-block;
			padding: 10px 40px;
			background-color: #10B5A1;
			border-radius: 30px;
		}
		.runners-room-out .runners-room{
			//justify-content: center;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			//margin-right: -15px;
			//margin-left: -15px;
			position: relative;
			left: 50%;
			transform: translateX(-45%);
		}
		.runners-room .box1{
			position: relative;
			width: 100%;
			min-height: 1px;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 30%;
			flex: 0 0 30%;
			max-width: 30%;
		}
		.runners-room .box1 a{
			display: block;
			background-color:#F8F5D1 ;
			border-radius: 40px;
			box-shadow: 6px 6px 1px #BD9712;
			position: relative;
			overflow: hidden;
			padding: 30px 60px;
			margin: 15px ;
		}
		.runners-room .box1 a h3 span{
			display: inline-block;
			min-width: 80px;
			font-size: 20px;
			font-family: pepper;
			font-weight: bold;
			color: white;
			padding: 6px 20px;
			background-color: #10B5A1;
			margin-bottom: 10px;
			border-radius: 30px;
		}
		.runners-room .box1 a span{
			display: block;
			font-size: 26px;
			color: #7D4E28;
			font-family: pepper;
		}
		.runners-room .box1 a p{
			position: relative;
			font-size: 28px;
			color: #007BB8;
			font-family: pepper;
			padding: 15px 0 0 0;
			padding-left: 60px;
		}
		.runners-room .box1 a p i{
			display: block;
			position: absolute;
			    left: 50%;
			    top: 50%;
			    transform: translate(-118%, -35%);
		}
		.runners-room .box1 a p i img{
			width: 75%;
		}
		@media screen and (min-width: 1350px){
			.runners-room .box1 a{
				margin: 15px auto;
				width: 260px;
			}
		}
		@media screen and (max-width: 890px){
			.runners-room .box1 a{
			    padding: 30px 36px;
			}
			.runners-room-out{
			    top: 0%;
				height: 85%;
			}
		}
		@media screen and (max-width: 740px){
			.runners-room .box1 a{
			    padding: 25px;
				margin: 10px;
			}
			.runners-room-out .chartroom-title span{
				font-size: 22px;
			}
			.runners-room .box1 a h3 span{
			    font-size: 18px;
			}
			.runners-room .box1 a span{
				font-size: 20px;
			}
			.runners-room .box1 a p{
				font-size: 20px;
				padding-left: 46px;
			}
			.runners-room .box1 a p i{
			    transform: translate(-98%, -35%);
			}
			.runners-room .box1 a p i img{
			    width: 60%;
			}
		}
		@media screen and (max-width: 569px){
			.runners-room .box1 a{
			    padding: 15px 10px;
				margin: 0 10px 9px 10px;
				border-radius: 28px;
			}
		}
		@media screen and (max-width: 480px){
			.runners-room .box1 a{
			    padding: 5px;
				margin: 0 5px;
				border-radius: 20px;
			}
		}

		// activities menu
		.personer-box{
			//sition: absolute;
			width: 100%;
			display: inline-flex;
			float: left;
			height: 102%;
			padding-left: 5%;
			overflow: scroll;
			overflow-y: hidden;
		}
		.personer-box .alistimg{
			margin-top: 10%;
			display: block;
			padding-right: 12%;
			// width: 35%;
			position: relative;
			height: 100%;margin-right: 50px;
		}
		.personer-box .alistimgf{
			margin-left: 0%;
		}
		.personer-box .alistimg:last-child{
			padding-right: 12%;
		}
		.units{
			    width: 100%;
			    left: 0;
			    margin: 0 auto;
			    display: block;
			    position: absolute;
		}
		.styleunit{
			        background-color: #43BF76;
			        border-style: none;
			        border-radius: 50px;
			        margin-top: 15px;
			        font-size: 1.8rem;
			        padding: 10px 40px;
			        position: relative;
					text-align: center;
			        font-family: pepper;
			        color: white;
					font-weight: bold;
		}
		.personer-box .alistimg > div{
			display: inline-block;
			    position: relative;
			    width: 100%;
			    top: 20%;
		}
		.t-gray{
			position: absolute;opacity: 0.23;background: #6c6b6b;width: 98%;height: 97%;border-radius: 45px;z-index: 9;
		}
		.personer-box .alistimg > div .p-monkey{
			// position: sticky;
			// width: 100%;
			width: 380px;
		}
		.personer-box .alistimg > div p{
			    position: absolute;
			    width: 98.25%;
			    border-bottom-left-radius: 40px;
			    border-bottom-right-radius: 40px;
			    padding: 20px 0;
			    font-size: 2rem;
			    color: white;
				font-family: kg;
			    bottom: 11px;
				background-color: #FF6831;
		}
		.personer-box .alistimg:first-child > div p{
			background-color: #FF6831;
		}
		.personer-box .alistimg:nth-child(2) > div p{
			background-color: #43BE76;
		}
		.personer-box .alistimg:nth-child(3) > div p{
			background-color: #0097FF;
		}
		.personer-box .alistimg:nth-child(4) > div p{
			background-color: #FF9239;
		}
		.comingsoon{
			position: absolute;
			top: -49px;
			right: -67px;
			width: 48%!important;
			z-index: 99;
		}
		@media screen and (max-width: 1200px) {
			.personer-box .alistimg > div p{
			    border-bottom-left-radius: 37px;
			    border-bottom-right-radius: 37px;
			    padding: 16px 0;
			    bottom: 9px;
			}
			.t-gray{
				border-radius: 37px;
			}
			.personer-box .alistimg > div .p-monkey{
			    width: 310px;
			}
			.comingsoon{
			    top: -32px;
			    right: -50px;
			}

		}
		@media screen and  (max-width: 811px) {
			.personer-box{
				width:90%;
				padding-right:5%;
			}
			.personer-box .alistimg{
				margin-right: 40px;
				padding-right: 0 !important;
				margin-top:4%;
			}
			.styleunit{
			    // height: 13%;
			     font-size: 1.2rem;
			}
			.personer-box .alistimg > div p{
			    border-bottom-left-radius: 27px;
			    border-bottom-right-radius: 27px;
			    padding: 10px 0;
			    bottom: 9px;
			    font-size: 1.4rem;
			}
			.t-gray{
				border-radius:27px;
			}
			.personer-box .alistimg > div .p-monkey{
			    width: 240px;
			}
			.comingsoon{
			    top: -20px;
			    right: -37px;
			}
			// .personer-box .alistimg:last-child {
			//     padding-right: 12%;
			// }
		}
		@media screen and (min-width: 812px)  and (max-width: 900px) {
			.personer-box{
				width:90%;
				padding-right:5%;
			}
			.personer-box .alistimg{
				margin-right: 50px;
				padding-right: 0 !important;
				margin-top:4%;
			}
			.styleunit{
			    // height: 13%;
			    font-size: 1.2rem;
			}
			.personer-box .alistimg > div p{
			    border-bottom-left-radius: 27px;
			    border-bottom-right-radius: 27px;
			    padding: 10px 0;
			    bottom: 9px;
			    font-size: 1.4rem;
			}
			.t-gray{
				border-radius:27px;
			}
			.personer-box .alistimg > div .p-monkey{
			    width: 240px;
			}
			.comingsoon{
			    top: -20px;
			    right: -37px;
			}
		}
		@media screen and (min-width: 900px)  and (max-width:1023px){
				.styleunit{
					margin-top: 20px;
					// height: 10%;
				}
				.two-monkey .age > img{
					width: 50%;
				}
				.personer-box{
					width:90%;
					padding-right:5%;
				}
				.personer-box .alistimg{
				 padding-right:0% !important;
				}
				.two-monkey .age{
					    top: -3%;
				}
      /*.animapng7 {*/
        /*margin-top:8%;*/
      /*}*/
		}
		@media screen and (min-width: 1024px) and (max-width: 1199px) {
		    .fontsize {
		    	bottom: 13%;
		    	position: absolute;
		    	font-size: 2.5rem;
		    	margin-left: 2%;
		    }
		    .acstyle {
		  	    height: 70%;
		     	position: absolute;
		  	    left: 5%;
		  	    bottom: 9%;
		    }
			.setting {
				width: 14%;
				position: absolute;
				right: 8%;
				bottom: 0%;
			}
		    .leftmar2{
		    	left: 43%;
		    }
			.coinstyle {
				height: 70%;
				position: absolute;
				left: 35%;
				bottom: 9%;
			}
		    .chartroom-title{
				 transform: scale(1.2);
			}
			.chart-room{
				transform: scale(1.2);
			}
			.two-monkey .age{
				top: -6%;
			}
			.two-monkey .age > img{
				width: 50%;
			}
      .sizeselect{
        width: 100%;
      }
      /*.animapng7 {*/
        /*height: 40%;*/
        /*margin-top: 15%;*/
        /*font-size: 1.5rem;*/
      /*}*/
      .close{
        width: 60px;
        height: 60px;
        margin: -25px;
      }
      .close img{
        height: 60px;
        width: 60px;
      }
		}

		@media screen and (min-width: 1200px) and (max-width: 1600px){
		    .fontsize {
		    	bottom: 13%;
		    	position: absolute;
		    	font-size: 3rem;
		    	margin-left: 2%;
		    }
		    .acstyle {
		  	    height: 70%;
		     	position: absolute;
		  	    left: 5%;
		  	    bottom: 9%;
		    }
			.setting {
				width: 14%;
				position: absolute;
				right: 8%;
				bottom: 0%;
			}
		    .leftmar2{
		    	left: 43%;
		    }
			.coinstyle {
				height: 70%;
				position: absolute;
				left: 35%;
				bottom: 9%;
			}
		    .chartroom-title{
				 transform: scale(1.2);
			}
			.chart-room{
				transform: scale(1.2);
			}
			.chart-room-out{
				top: 25%;
				transform: scale(1.5);
			}
			.two-monkey .age{
				top: -6%;
			}
			.two-monkey .age > img{
				width: 50%;
			}
      .walkers-room .box1 a{
        margin: 15px auto;
        width: 260px;
        height: 180px;
        border-radius: 40px;
      }
			.walkers-room .box1 a p i img{
				width: 2rem;
			}
			.walkers-room .box1 a p{
				font-size: 1.5rem;
			}
      .sizeselect{
        width: 100%;
      }
      /*.animapng7 {*/
        /*height: 40%;*/
        /*margin-top: 15%;*/
        /*font-size: 2rem;*/
      /*}*/
      .close{
        width: 60px;
        height: 60px;
        margin: -25px;
      }
      .close img{
        height: 60px;
        width: 60px;
      }
		}
    @media screen and (min-width: 1600px){
    .two-monkey{
      top: 25%;
      transform: scale(1.5);
    }
    .two-monkey .age{
      top: -6%;
    }
    .two-monkey .age > img{
      width: 50%;
    }
    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 3rem;
      margin-left: 2%;
    }
    .acstyle {
      height: 70%;
      position: absolute;
      left: 5%;
      bottom: 9%;
    }
    .setting {
      width: 14%;
      position: absolute;
      right: 8%;
      bottom: 0%;
    }
    .leftmar2{
      left: 43%;
    }
    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    .chart-room{
      transform: scale(1.5);
    }
    .chart-room-out{
      top: 15%;
      transform: scale(1.5);
      .chartroom-title{
      transform: scale(1.5);
      margin: 65px auto;
    }
    }
    .two-monkey .age{
      top: -6%;
    }
    .two-monkey .age > img{
      width: 50%;
    }
    .walkers-room-out .chartroom-title{
      margin: 57px auto;
      transform: scale(2);
    }
    .walkers-room .box1 a{
      margin: 15px auto;
      width: 360px;
      height: 260px;
      border-radius: 50px;
    }
    .walkers-room .box1 a p i img{
      width: 2.5rem;
    }
    .walkers-room .box1 a p{
      font-size: 2rem;
    }
    .sizeselect{
      width: 100%;
    }
    /*.animapng7 {*/
      /*height: 40%;*/
      /*margin-top: 9%;*/
      /*font-size: 2rem;*/
      /*margin-left: 2.5%;*/
      /*border: 10px solid white;*/
    /*}*/
    .close{
      width: 80px;
      height: 80px;
      margin: -35px;
    }
    .close img{
      height: 80px;
      width: 80px;
    }
  }
</style>
