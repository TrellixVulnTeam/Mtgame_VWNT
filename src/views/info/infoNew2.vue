<template>
  <div class="info">
    <div class="contain">
      <img src="../../assets/image/main_bg.png" style="width: 100%; height: 100%;display:block;position: absolute;">
      <div v-if="!onef" style="width: 100%;height: 85%;display: block;">
        <div class="withcolor">
          <div class="close" @click="back">
            <img src="../../assets/image/cloce.png">
          </div>
          <div v-if="seleinfo" class="seleinput">
            <div class="cicleimg">
              <img :src=gameImage class="cicleimgstyle">
              <img src="../../assets/image/add.png" class="addimg" @click="seletimg">
            </div>  <!-- @keyup="firstName1 = check(firstName1)" -->
            <div class="infomesse">
              <P style="text-align: left;"><span class="inputspan">NAME:</span><span><input type="text"
                                                                                            v-model="firstName1"
                                                                                            name="username"
                                                                                            class="inputu"
                                                                                            @keyup="firstName1 = check(firstName1)"
                                                                                            maxlength="10"/></span></P>
              <P style="text-align: left;"><span class="inputspan">CODE:</span><span><input type="text" name="code"
                                                                                            class="inputu"
                                                                                            placeholder="001374"
                                                                                            disabled="disabled"/></span>
              </P>
              <div class="save1">
                <button @click="save1" v-bind:class="{changewi:changewidth1}">SAVE</button>
              </div>
            </div>
          </div>
          <div v-if="!seleinfo">
            <div class="cicleimg1">
              <img :src=gameImage1 class="cicleimgstyle">
              <div class="save1">
                <button @click="save2" v-bind:class="{changewi:changewidth2}">SAVE</button>
              </div>
            </div>
            <div class="infoimg">
              <ul style="height: 100%;">
                <li style="display: inline;" v-for="(li,index) in imglists" :key="index"><img :src=pic+li.url
                                                                                              class="listimg"
                                                                                              @click="imgchange(li)">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- </transition>
			<transition name="fade1"> -->
      <div v-if="onef" style="width: 100%;height: 85%;position: relative;display: block;">
        <div class="lefticon">
          <div class="bluecicle" @click="settinfo">
            <img :src=gameImage class="imgstyle">
          </div>
          <img src="../../assets/image/bluebottom.png" class="imgBstyle">
          <div class="userName">
            <p style="width: 160px;overflow: hidden;white-space: nowrap; display: block;margin: 0 auto;">
              {{firstName}}</p>
          </div>
          <div class="logoutsty1">
            <button class="buttonsty" @click="switchs">SWITCH PLAYER</button>
          </div>
          <div class="logoutsty">
            <button class="buttonsty" @click="logout">LOG OUT</button>
          </div>
          <h3 class="title1" v-if="local === 'cn'"><span class="title"  @click="PrivacyPolicy('service')">用户协议</span>和<span class="title" @click="PrivacyPolicy('Privacy')">隐私声明</span></h3>
<!--          <h3 class="title1"><a class="title" target="_blank" href="http://103.218.241.33/monkeytreeApp/www2/privacyhk.html">隱私政策</a></h3>-->
        </div>
        <div class="rightmenu">
          <div class="topMenu">
            <div class="menu1">
              <button class="buttonsty" @click="changeBcolo1">{{courseList[0].name}}</button>
            </div>
            <div :class="{menu2:!page2 || page2&&chatorphonics,menu2Change:page2&&!chatorphonics}">
              <button class="buttonsty" @click="changeBcolo2">{{courseList[1].name}}</button>
              <img src="../../assets/image/rightarrow.png" class="spanimg2" v-if="page2&&!chatorphonics">
              <button class="buttonsty opacity" v-if="page2&&!chatorphonics">{{level}}</button>
            </div>
            <!--<div class="menu2"><button class="buttonsty" >{{courseList[1].name}}</button></div>-->
          </div>

          <div class="bottommemu" v-bind:class="{backgrgreen:backgrgreen,backgrorang:backgrorang}">
            <div class="listmemu" v-if="chatorphonics">
              <!--<span v-if="page1" v-bind:class="{opciay:opciay1}" @click="section1">{{course}}</span>-->
              <!--<span v-if="page2"><img src="../../assets/image/rightarrow.png" class="spanimg"></span>-->
              <span v-if="page2" v-bind:class="{opciay:opciay2}" @click="section2">{{level}}</span>
              <!--<span v-if="page6"><img src="../../assets/image/rightarrow.png" class="spanimg"></span>-->
              <!--<span v-if="page6" v-bind:class="{opciay:opciay6}" @click="section3">{{unitname}}</span>-->
              <span v-if="page3"><img src="../../assets/image/rightarrow.png" class="spanimg"></span>
              <span v-if="page3" v-bind:class="{opciay:opciay3}" @click="section3">{{unitname}}</span>
              <span v-if="page4"><img src="../../assets/image/rightarrow.png" class="spanimg"></span>
              <span v-if="page4" v-bind:class="{opciay:opciay4}" @click="section4">{{menuname}}</span>
            </div>
            <div class="listmemu" v-if="!chatorphonics">
              <!--<span v-if="page1" v-bind:class="{opciay:opciay1}" @click="section1">{{course}}</span>-->
              <!--<span v-if="page2"><img src="../../assets/image/rightarrow.png" class="spanimg"></span>-->
<!--              <span v-if="page2" v-bind:class="{opciay:opciay2}" @click="sectionp2">{{level}}1</span>-->
              <!--<span v-if="page6"><img src="../../assets/image/rightarrow.png" class="spanimg"></span>-->
              <!--<span v-if="page6" v-bind:class="{opciay:opciay6}" @click="sectionp3">{{unitname}}</span>-->
              <span v-if="page3"><img src="../../assets/image/rightarrow.png" class="spanimg"></span>
              <span v-if="page3" v-bind:class="{opciay:opciay3}" @click="sectionp3">{{unitname}}</span>
              <span v-if="page4"><img src="../../assets/image/rightarrow.png" class="spanimg"></span>
              <span v-if="page4" v-bind:class="{opciay:opciay4}" @click="sectionp4">{{menuname}}</span>
            </div>
            <!-- chat rppm -->
            <div class="chosedisplay" v-if="chatorphonics">
              <div class="choseclass" v-if="opciay1">
                <div class="chosecourseL" @click="next2(li)" v-for="(li,i) in levelsList">
                  <!--<p class="levels">{{li.name}}</p>-->
                  <img src="../../assets/image/selectW.png" v-if="i===0" style="width: 90%;">
                  <img src="../../assets/image/selectR.png" v-if="i===1" style="width: 90%;">
                  <!--<div>-->
                  <!--<div class="blueBG">-->
                  <!--<img src="../../assets/image/champan.png" :width=li.percentage>-->
                  <!--<span class="percent">{{li.percentage}}</span>-->
                  <!--</div>-->
                  <!--<div>-->
                  <!--<img src="../../assets/image/chamcup.png" class="chamcup" />-->
                  <!--</div>-->
                  <!--</div>-->
                </div>
              </div>
              <div class="choseRW" v-if="opciay2">
                <div class="infoimg1">
                  <!-- 	<img src="../../assets/image/BGselect.png"> -->
                  <ul>
                    <li class="listimg1" @click="next3(li)" v-for="li in unitsList">
                      <!-- <img src="../../assets/image/BGselect.png"  > -->
                      <div class="neirong">
                        <!--<p class="unit">{{li.unit_name}}</p>-->
                        <p class="unitname">{{li.name}}</p>
                        <p class="unitcoin">
                          <img src="../../assets/image/star_frame.png">
                          {{li.stars}}</p>
                      </div>

                    </li>
                  </ul>
                </div>
              </div>
              <div class="choseRW" v-if="opciay6">
                <!--<ul>-->
                <!--<li class="listimg1">-->
                <div class="neirong">
                  <button class="animapng7" @click="tohome(1)">
                    <!--<img  src="../../assets/image/4-4p1.png" class="imgpart" >-->
                    <img src="../../assets/image/moon/mealtime1.png" v-if="this.unitname==='MEAL TIME'" class="imgpart">
                    <img src="../../assets/image/moon/onthefarm1.png" v-if="this.unitname==='ON THE FARM'"
                         class="imgpart">
                    <img src="../../assets/image/moon/seasons1.png" v-if="this.unitname==='Seasons'" class="imgpart">
                    <img src="../../assets/image/moon/transportation1.png" v-if="this.unitname==='Transportation'"
                         class="imgpart">
                    <img src="../../assets/image/moon/bugs1.png" v-if="this.unitname==='Bugs'" class="imgpart">
                    <img src="../../assets/image/moon/clothes1.png" v-if="this.unitname==='Clothes'" class="imgpart">
                    <img src="../../assets/image/moon/themeparks1.png" v-if="this.unitname==='Theme Park'"
                         class="imgpart">
                    <img src="../../assets/image/moon/space1.png" v-if="this.unitname==='Space'" class="imgpart">
                    <!--<img src="../../assets/image/moon/s7.png" v-if="this.unitname==='My Family'" class="imgpart">-->
                    <!--<img src="../../assets/image/moon/s8.png" v-if="this.unitname==='Holidays'" class="imgpart">-->
                    <img src="../../assets/image/moon/mybody1.png" v-if="this.unitname==='My Body'" class="imgpart">
                    <img src="../../assets/image/moon/myweekend1.png" v-if="this.unitname==='My Weekend'"
                         class="imgpart">
                    <img src="../../assets/image/moon/wildanimals1.png" v-if="this.unitname==='Wild Animals'"
                         class="imgpart">
                    <img src="../../assets/image/moon/christmas1.png" v-if="this.unitname==='Christmas'"
                         class="imgpart">
                    <img src="../../assets/image/moon/letsgoshopping1.png" v-if="this.unitname==='Let\'s Go Shopping'"
                         class="imgpart">
                    <img src="../../assets/image/moon/mycommunity1.png" v-if="this.unitname==='My Community'"
                         class="imgpart">
                    <img src="../../assets/image/moon/funtime1.png" v-if="this.unitname==='Fun Time!'" class="imgpart">
                    <img src="../../assets/image/moon/myhome1.png" v-if="this.unitname==='My Home'" class="imgpart">
                    <img src="../../assets/image/moon/ourworld1.png" v-if="this.unitname==='Our World'" class="imgpart">
                    <img src="../../assets/image/moon/fairytales1.png" v-if="this.unitname==='Fairy Tales'"
                         class="imgpart">
                    <img src="../../assets/image/moon/schooltime1.png" v-if="this.unitname==='School Life'"
                         class="imgpart">
                    <img src="../../assets/image/moon/animals1.png" v-if="this.unitname==='Animals'" class="imgpart">
                    <img src="../../assets/image/moon/myfamily1.png" v-if="this.unitname==='Family Time'"
                         class="imgpart">
                    <img src="../../assets/image/moon/holidays1.png" v-if="this.unitname==='Holidays'" class="imgpart">

                  </button>
                  <button class="animapng7" @click="tohome(2)">
                    <img src="../../assets/image/moon/mealtime2.png" v-if="this.unitname==='MEAL TIME'" class="imgpart">
                    <img src="../../assets/image/moon/onthefarm2.png" v-if="this.unitname==='ON THE FARM'"
                         class="imgpart">
                    <img src="../../assets/image/moon/seasons2.png" v-if="this.unitname==='Seasons'" class="imgpart">
                    <img src="../../assets/image/moon/transportation2.png" v-if="this.unitname==='Transportation'"
                         class="imgpart">
                    <img src="../../assets/image/moon/bugs2.png" v-if="this.unitname==='Bugs'" class="imgpart">
                    <img src="../../assets/image/moon/clothes2.png" v-if="this.unitname==='Clothes'" class="imgpart">
                    <img src="../../assets/image/moon/themeparks2.png" v-if="this.unitname==='Theme Park'"
                         class="imgpart">
                    <img src="../../assets/image/moon/space2.png" v-if="this.unitname==='Space'" class="imgpart">
                    <!--<img src="../../assets/image/moon/s7.png" v-if="this.unitname==='My Family'" class="imgpart">-->
                    <!--<img src="../../assets/image/moon/s8.png" v-if="this.unitname==='Holidays'" class="imgpart">-->
                    <img src="../../assets/image/moon/mybody2.png" v-if="this.unitname==='My Body'" class="imgpart">
                    <img src="../../assets/image/moon/myweekend2.png" v-if="this.unitname==='My Weekend'"
                         class="imgpart">
                    <img src="../../assets/image/moon/wildanimals2.png" v-if="this.unitname==='Wild Animals'"
                         class="imgpart">
                    <img src="../../assets/image/moon/christmas2.png" v-if="this.unitname==='Christmas'"
                         class="imgpart">
                    <img src="../../assets/image/moon/letsgoshopping2.png" v-if="this.unitname==='Let\'s Go Shopping'"
                         class="imgpart">
                    <img src="../../assets/image/moon/mycommunity2.png" v-if="this.unitname==='My Community'"
                         class="imgpart">
                    <img src="../../assets/image/moon/funtime2.png" v-if="this.unitname==='Fun Time!'" class="imgpart">
                    <img src="../../assets/image/moon/myhome2.png" v-if="this.unitname==='My Home'" class="imgpart">
                    <img src="../../assets/image/moon/ourworld2.png" v-if="this.unitname==='Our World'" class="imgpart">
                    <img src="../../assets/image/moon/fairytales2.png" v-if="this.unitname==='Fairy Tales'"
                         class="imgpart">
                    <img src="../../assets/image/moon/schooltime2.png" v-if="this.unitname==='School Life'"
                         class="imgpart">
                    <img src="../../assets/image/moon/animals2.png" v-if="this.unitname==='Animals'" class="imgpart">
                    <img src="../../assets/image/moon/myfamily2.png" v-if="this.unitname==='Family Time'"
                         class="imgpart">
                    <img src="../../assets/image/moon/holidays2.png" v-if="this.unitname==='Holidays'" class="imgpart">

                  </button>
                  <button class="animapng7" @click="tohome(3)">
                    <img src="../../assets/image/moon/mealtime3.png" v-if="this.unitname==='MEAL TIME'" class="imgpart">
                    <img src="../../assets/image/moon/onthefarm3.png" v-if="this.unitname==='ON THE FARM'"
                         class="imgpart">
                    <img src="../../assets/image/moon/seasons3.png" v-if="this.unitname==='Seasons'" class="imgpart">
                    <img src="../../assets/image/moon/transportation3.png" v-if="this.unitname==='Transportation'"
                         class="imgpart">
                    <img src="../../assets/image/moon/bugs3.png" v-if="this.unitname==='Bugs'" class="imgpart">
                    <img src="../../assets/image/moon/clothes3.png" v-if="this.unitname==='Clothes'" class="imgpart">
                    <img src="../../assets/image/moon/themeparks3.png" v-if="this.unitname==='Theme Park'"
                         class="imgpart">
                    <img src="../../assets/image/moon/space3.png" v-if="this.unitname==='Space'" class="imgpart">
                    <!--<img src="../../assets/image/moon/s7.png" v-if="this.unitname==='My Family'" class="imgpart">-->
                    <!--<img src="../../assets/image/moon/s8.png" v-if="this.unitname==='Holidays'" class="imgpart">-->
                    <img src="../../assets/image/moon/mybody3.png" v-if="this.unitname==='My Body'" class="imgpart">
                    <img src="../../assets/image/moon/myweekend3.png" v-if="this.unitname==='My Weekend'"
                         class="imgpart">
                    <img src="../../assets/image/moon/wildanimals3.png" v-if="this.unitname==='Wild Animals'"
                         class="imgpart">
                    <img src="../../assets/image/moon/christmas3.png" v-if="this.unitname==='Christmas'"
                         class="imgpart">
                    <img src="../../assets/image/moon/letsgoshopping3.png" v-if="this.unitname==='Let\'s Go Shopping'"
                         class="imgpart">
                    <img src="../../assets/image/moon/mycommunity3.png" v-if="this.unitname==='My Community'"
                         class="imgpart">
                    <img src="../../assets/image/moon/funtime3.png" v-if="this.unitname==='Fun Time!'" class="imgpart">
                    <img src="../../assets/image/moon/myhome3.png" v-if="this.unitname==='My Home'" class="imgpart">
                    <img src="../../assets/image/moon/ourworld3.png" v-if="this.unitname==='Our World'" class="imgpart">
                    <img src="../../assets/image/moon/fairytales3.png" v-if="this.unitname==='Fairy Tales'"
                         class="imgpart">
                    <img src="../../assets/image/moon/schooltime3.png" v-if="this.unitname==='School Life'"
                         class="imgpart">
                    <img src="../../assets/image/moon/animals3.png" v-if="this.unitname==='Animals'" class="imgpart">
                    <img src="../../assets/image/moon/myfamily3.png" v-if="this.unitname==='Family Time'"
                         class="imgpart">
                    <img src="../../assets/image/moon/holidays3.png" v-if="this.unitname==='Holidays'" class="imgpart">

                  </button>
                </div>
                <!--</li>-->
                <!--</ul>-->

              </div>
              <div class="choseRW" v-if="opciay3">
                <div class="infoimg1">
                  <!-- 	<img src="../../assets/image/BGselect.png"> -->
                  <ul>
                    <li class="listimg2" @click="next4(li)" v-for="(li,index) in menu" :key="index">
                      <!-- <img src="../../assets/image/BGselect.png"  > -->
                      <div class="neirong">
                        <p class="unitname">{{li.name}}</p>
                        <p class="unitcoin">
                          <!-- <img src="../../assets/image/star_frame.png" style="width: 1.1rem;">
									<img src="../../assets/image/star_frame.png" style="width: 1.1rem;">
									<img src="../../assets/image/star_frame.png" style="width: 1.1rem;"> -->
                          <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].onestart">
                          <img src="../../assets/image/star_frame.png" v-if="li.stars[0].onestart">
                          <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].twostart">
                          <img src="../../assets/image/star_frame.png" v-if="li.stars[0].twostart">
                          <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].threestart">
                          <img src="../../assets/image/star_frame.png" v-if="li.stars[0].threestart">
                        </p>
                      </div>

                    </li>
                    <li class="listimg2" @click="next5(li)" v-for="li in menuboss">
                      <!-- <img src="../../assets/image/BGselect.png"  > -->
                      <div class="neirong">
                        <p class="unitname">{{li.part_name}}</p>
                        <p class="unitcoin">
                          <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].onestart1">
                          <img src="../../assets/image/star_frame.png" v-if="li.stars[0].onestart1">
                          <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].onestart2">
                          <img src="../../assets/image/star_frame.png" v-if="li.stars[0].onestart2">
                          <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].onestart3">
                          <img src="../../assets/image/star_frame.png" v-if="li.stars[0].onestart3">
                        </p>
                      </div>

                    </li>
                  </ul>
                </div>
              </div>
              <div class="chosegamecord" v-if="opciay4">
                <div class="listimg3">
                  <table align="center" width="100%" cellspacing="6" cellpadding="0"
                         style="color: #007BB8; margin-top: -5px;">
                    <tr>
                      <th><span class="tabtit">Date</span></th>
                      <th><span class="tabtit">{{scoreormis}}</span></th>
                      <th><span class="tabtit">Star</span></th>
                    </tr>
                    <tr v-for="(li,index) in detailList" :key="index" v-if="ifboss1">
                      <td>{{li.date| formatDate}}</td>
                      <td>{{li.score}}</td>
                      <td>
                        <img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].one2"
                             class="littlestar">
                        <img src="../../assets/image/star_frame.png" v-if="li.allstar[0].one2" class="littlestar">
                        <img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].two2"
                             class="littlestar">
                        <img src="../../assets/image/star_frame.png" v-if="li.allstar[0].two2" class="littlestar">
                        <img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].three2"
                             class="littlestar">
                        <img src="../../assets/image/star_frame.png" v-if="li.allstar[0].three2" class="littlestar">
                      </td>
                    </tr>
                    <tr v-for="(li,index) in detailList" :key="index" v-if="ifboss2">
                      <td>{{li.date| formatDate}}</td>
                      <td>{{li.score}}</td>
                      <td>
                        <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].onestart"
                             class="littlestar">
                        <img src="../../assets/image/star_frame.png" v-if="li.stars[0].onestart" class="littlestar">
                        <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].twostart"
                             class="littlestar">
                        <img src="../../assets/image/star_frame.png" v-if="li.stars[0].twostart" class="littlestar">
                        <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].threestart"
                             class="littlestar">
                        <img src="../../assets/image/star_frame.png" v-if="li.stars[0].threestart" class="littlestar">
                        <!-- <img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].one1" class="littlestar">
									<img src="../../assets/image/star_frame.png" v-if="li.allstar[0].one1" class="littlestar">
									<img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].two1" class="littlestar" >
									<img src="../../assets/image/star_frame.png" v-if="li.allstar[0].two1" class="littlestar" >
									<img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].three1" class="littlestar">
									<img src="../../assets/image/star_frame.png" v-if="li.allstar[0].three1" class="littlestar"> -->
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <!-- phonics -->
            <div class="phonicsLevel" v-if="!chatorphonics&&opciay1 || !chatorphonics&&page2">
              <p class="phonicsL">{{ categoriesName }}</p>
              <p class="phonicsText">{{ categoriesText }}</p>
              <img src="../../assets/image/cardleft.png" class="cardLeft" @click="cardLeft" v-if="opciay2 && categoriesName !== 'Performance Report'">
              <img src="../../assets/image/cardright.png" class="cardRight" @click="cardRight" v-if="opciay2 && categoriesName !== 'Performance Report'">
            </div>

            <div class="chosedisplay" v-if="!chatorphonics">
              <div  v-if="opciay1" style="width: 95%;display: inline-block">
                <div class="choicephonics" v-for="(li,index) in phonicsList" :key='index'>
                  <img src="../../assets/image/beginner.png" @click="pnext2(li)" style="width: 90%;" v-if="index===0">
                  <img src="../../assets/image/intermediate.png" @click="pnext21(li)" style="width: 90%;"
                       v-if="index===1">
                  <img src="../../assets/image/advance.png" style="width: 90%;" @click="pnext22(li)" v-if="index===2">
                  <!--<div class="progress" >-->
                  <img src="../../assets/image/completed.png" v-if="li.complete"
                       style="width: 80%;margin: 0 10%;z-index: 2;bottom:-6%;position: absolute;left:0;">
                  <!--</div>-->
                  <div class="progress2" v-if="!li.complete">
                    <div class="startSize">
                      <p class="startP"><img src="../../assets/image/star_frame.png">{{li.starts}}</p>
                    </div>

<!--                    <div class="goldBG01">-->
<!--                      <img src="../../assets/image/champanp.png" v-bind:style="{width:li.percent}">-->
<!--                    </div>-->
<!--                    <img src="../../assets/image/golden.png" class="chamgold"/>-->
<!--                    <button class="percent2">{{li.percent}}</button>-->
                  </div>
                </div>
              </div>
              <!--              phonics 被替换的部分opciay2 -->
              <!--              <div class="choseRW" v-if="opciay2">
                <div class="infoimg1">
                  <ul>
                    <li class="listimg1" @click="pnext3(li)" v-for="(li,index) in phonicsDetailList">
                      <div class="neirong">
                        <p class="unitnamep">{{li.name}}</p>
                      </div>
                      <button class="walkerbutton">
                        <img src="http://monkeytown.monkeytree.com.hk/image/season-star.png">
                        <span class="foncolor1">{{li.stars}}</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>-->
              <div class="choseRW" v-if="opciay3">
                <div class="infoimg1">
                  <!-- 	<img src="../../assets/image/BGselect.png"> -->
                  <ul>
                    <li class="listimg2" :class="level==='Intermediate'?'listimg22':''" @click="pnext4(li)"
                        v-for="(li,index) in pmenu" :key="index">
                      <!-- <img src="../../assets/image/BGselect.png"  > -->
                      <div class="neirong">
                        <p class="unitname">{{li.name}}</p>
                        <p class="unitcoin">
                          <!-- <img src="../../assets/image/star_frame.png" style="width: 1.1rem;">
            			<img src="../../assets/image/star_frame.png" style="width: 1.1rem;">
            			<img src="../../assets/image/star_frame.png" style="width: 1.1rem;"> -->
                          <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].onestart">
                          <img src="../../assets/image/star_frame.png" v-if="li.stars[0].onestart">
                          <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].twostart">
                          <img src="../../assets/image/star_frame.png" v-if="li.stars[0].twostart">
                          <img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].threestart">
                          <img src="../../assets/image/star_frame.png" v-if="li.stars[0].threestart">
                        </p>
                      </div>

                    </li>

                  </ul>
                </div>
              </div>
              <div class="chosegamecord" v-if="opciay4">
                <div class="listimg3">
                  <table align="center" width="100%" cellspacing="6" cellpadding="0"
                         style="color: #007BB8; margin-top: -5px;">
                    <tr>
                      <th><span class="tabtit">Date</span></th>
                      <th><span class="tabtit">{{scoreormis}}</span></th>
                      <th><span class="tabtit">Star</span></th>
                    </tr>
                    <tr v-for="(li,index) in detailList" :key="index" v-if="ifboss1">
                      <td>{{li.date| formatDate}}</td>
                      <td>{{li.score}}</td>
                      <td>
                        <img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].one2"
                             class="littlestar">
                        <img src="../../assets/image/star_frame.png" v-if="li.allstar[0].one2" class="littlestar">
                        <img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].two2"
                             class="littlestar">
                        <img src="../../assets/image/star_frame.png" v-if="li.allstar[0].two2" class="littlestar">
                        <img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].three2"
                             class="littlestar">
                        <img src="../../assets/image/star_frame.png" v-if="li.allstar[0].three2" class="littlestar">
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <!--phonics替代原先opciay1的部分，新更新的内容 v-if="opciayStatistics"-->
              <div  v-if="opciay2" style="width: 100%;height: 100%;">
                <div class="categories"  v-if="categoriesName === 'Performance Report' ||[1,5,6,7].includes(categoryNum)">
                  <div v-if="[1,5].includes(categoryNum)">
                    <div class="cRight">
                      <img src="../../assets/image/LearningReportRight.png" class="LearningReportRight" @click="cRight">
                    </div>
                    <div class="cLeft">
                      <img src="../../assets/image/LearningReportLeft.png" class="LearningReportLeft" @click="cLeft">
                    </div>
                  </div>
                  <!--overall-->
                  <div v-if="categoryNum===1" class="overallLetter">
                    <div class="letters" v-for="(li,index) in overall.slice(sliceMin,sliceMax)" :key='index'>
                      <img :src="li.imgSrc" style="width: 100%">
                      <p class="letterPercent">{{li.percent}}%</p>
                    </div>
                  </div>
                  <!--Strengths-->
                  <div v-if="categoryNum===5">
                    <div  class="Strengths" v-for="(li,index) in strengthsTemp" :key='index'>
                      <div class="strengthsDiv">
                        <div class="strengthsL" v-if="Object.values(li)[0].classification==='Blend Recognition'" style="background: #1ac6d9">
                          <div class="strengthsText" >{{Object.values(li)[0].classification}}</div>
                        </div>
                        <div class="strengthsL" v-if="Object.values(li)[0].classification==='Sound Recognition'" style="background: #3793a8">
                          <div class="strengthsText" >{{Object.values(li)[0].classification}}</div>
                        </div>
                        <div class="strengthsL" v-if="Object.values(li)[0].classification==='Spelling'" style="background: #ffa217">
                          <div class="strengthsText" >{{Object.values(li)[0].classification}}</div>
                        </div>
                        <div class="strengthsL" v-if="Object.values(li)[0].classification==='Letter Recognition'" style="background: #f55b5b">
                          <div class="strengthsText" >{{Object.values(li)[0].classification}}</div>
                        </div>
                        <div class="strengthsL" v-if="Object.values(li)[0].classification==='Listening'" style="background: #48cfdb">
                          <div class="strengthsText" >{{Object.values(li)[0].classification}}</div>
                        </div>
                        <div class="strengthsL" v-if="Object.values(li)[0].classification==='Reading'" style="background: #8460cc">
                          <div class="strengthsText" >{{Object.values(li)[0].classification}}</div>
                        </div>
                        <div class="strengthsL" v-if="Object.values(li)[0].classification==='Vocabulary'" style="background: #00c455">
                          <div class="strengthsText" >{{Object.values(li)[0].classification}}</div>
                        </div>
                        <div class="strengthsL" v-if="Object.values(li)[0].classification==='Writing'" style="background: #de81ca">
                          <div class="strengthsText" >{{Object.values(li)[0].classification}}</div>
                        </div>
                        <img class="strengthsLogo" src="../../assets/image/strengthsLogo.png" />
                        <div class="strengthsLiAll">
                          <div class="strengthsLi" v-for="(li2,index2) in li" :key='index2'>
                            <div :class="level==='Advanced'?'strengthsAbbreviationAdvanced':'strengthsAbbreviation'" v-if="index2!==0">{{li2.letter}}</div>
                            <div :class="level==='Advanced'?'strengthsAbbreviationAdvanced':'strengthsAbbreviation'" v-if="Object.values(li)[0].classification==='Blend Recognition'&&index2===0" style="color: #1ac6d9">{{li2.letter}}</div>
                            <div :class="level==='Advanced'?'strengthsAbbreviationAdvanced':'strengthsAbbreviation'" v-if="Object.values(li)[0].classification==='Sound Recognition'&&index2===0" style="color: #3793a8">{{li2.letter}}</div>
                            <div :class="level==='Advanced'?'strengthsAbbreviationAdvanced':'strengthsAbbreviation'" v-if="Object.values(li)[0].classification==='Spelling'&&index2===0" style="color: #ffa217">{{li2.letter}}</div>
                            <div :class="level==='Advanced'?'strengthsAbbreviationAdvanced':'strengthsAbbreviation'" v-if="Object.values(li)[0].classification==='Letter Recognition'&&index2===0" style="color: #f55b5b">{{li2.letter}}</div>
                            <div :class="level==='Advanced'?'strengthsAbbreviationAdvanced':'strengthsAbbreviation'" v-if="Object.values(li)[0].classification==='Listening'&&index2===0" style="color: #48cfdb">{{li2.letter}}</div>
                            <div :class="level==='Advanced'?'strengthsAbbreviationAdvanced':'strengthsAbbreviation'" v-if="Object.values(li)[0].classification==='Reading'&&index2===0" style="color: #8460cc">{{li2.letter}}</div>
                            <div :class="level==='Advanced'?'strengthsAbbreviationAdvanced':'strengthsAbbreviation'" v-if="Object.values(li)[0].classification==='Vocabulary'&&index2===0" style="color: #00c455">{{li2.letter}}</div>
                            <div :class="level==='Advanced'?'strengthsAbbreviationAdvanced':'strengthsAbbreviation'" v-if="Object.values(li)[0].classification==='Writing'&&index2===0" style="color: #de81ca">{{li2.letter}}</div>
                            <div class="strengthsLogo2Div">
                              <img class="strengthsLogo2" v-if="index2!==0" src="../../assets/image/allColor.png"/>
                              <img class="strengthsLogo2" v-if="Object.values(li)[0].classification==='Blend Recognition' && Object.values(li)[0].persent!==undefined && index2===0" src="../../assets/image/BlendRecognitionColor.png"/>
                              <img class="strengthsLogo2" v-if="Object.values(li)[0].classification==='Sound Recognition' && Object.values(li)[0].persent!==undefined && index2===0" src="../../assets/image/SoundRecognitionColor.png"/>
                              <img class="strengthsLogo2" v-if="Object.values(li)[0].classification==='Spelling' && Object.values(li)[0].persent!==undefined && index2===0" src="../../assets/image/spellingColor.png"/>
                              <img class="strengthsLogo2" v-if="Object.values(li)[0].classification==='Letter Recognition' && Object.values(li)[0].persent!==undefined && index2===0" src="../../assets/image/LetterRecognitionColor.png"/>
                              <img class="strengthsLogo2" v-if="Object.values(li)[0].classification==='Listening' && Object.values(li)[0].persent!==undefined && index2===0" src="../../assets/image/listeningColor.png"/>
                              <img class="strengthsLogo2" v-if="Object.values(li)[0].classification==='Reading' && Object.values(li)[0].persent!==undefined && index2===0" src="../../assets/image/readingColor.png"/>
                              <img class="strengthsLogo2" v-if="Object.values(li)[0].classification==='Vocabulary' && Object.values(li)[0].persent!==undefined && index2===0" src="../../assets/image/vocabularyColor.png"/>
                              <img class="strengthsLogo2" v-if="Object.values(li)[0].classification==='Writing' && Object.values(li)[0].persent!==undefined && index2===0" src="../../assets/image/writingColor.png"/>
                            </div>
                            <div class="strengthsPresent" v-if="Object.values(li)[0].persent!==undefined">{{li2.persent}}%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--Performance Report-->
                  <ul style="height: 100%;" v-if="categoriesName === 'Performance Report'">
                    <li class="categoriesLi" @click="categories(1)">
                      Overall
                    </li>
                    <li class="categoriesLi" @click="categories(5)">
                      Strengths
                    </li>
                    <li class="categoriesLi" @click="categories(2)">
                      Exercise Completion Intervals
                    </li>
                    <li class="categoriesLi" @click="categories(6)">
                      Improvement
                    </li>
                    <li class="categoriesLi" @click="categories(4)">
                      Scores for Key Areas
                    </li>
                    <li class="categoriesLi" @click="categories(7)">
                      Exercise History
                    </li>
                  </ul>
                  <!--Exercise History-->
                  <div v-if="categoryNum===7">
                    <div  class="history">
                      <div class="historyLabel" >Date</div>
                      <div class="historyLabel" >Letter</div>
                      <div class="historyLabel" >Exercise</div>
                      <div class="historyLabel" >Star</div>
                      <div class="historyLabel" >Score</div>
                    </div>
                  <div class="historyList">
                    <table align="center" width="100%" cellspacing="6" cellpadding="0"
                           style="color: #007BB8; margin-top: -5px;">
                    <tr v-for="(li,index) in history" :key="index" >
                      <td class="historyLi" style="width: 10%;">{{li.date}}</td>
                      <td class="historyLi" style="width: 10%;left: -2%;position: relative;">{{li.letter}}</td>
                      <td class="historyLi" style="width: 10%;">{{li.exercise}}</td>
                      <td class="historyLi" style="width: 10%;">
                        <img src="../../assets/image/star_frame.png" v-if="li.star===1 || li.star===2 || li.star===3"
                             class="littlestar">
                        <img src="../../assets/image/Little_Star_frame.png" v-if="li.star===0" class="littlestar">

                        <img src="../../assets/image/star_frame.png" v-if="li.star===2 || li.star===3"
                             class="littlestar">
                        <img src="../../assets/image/Little_Star_frame.png" v-if="li.star===0 || li.star===1" class="littlestar">

                        <img src="../../assets/image/star_frame.png" v-if="li.star===3"
                             class="littlestar">
                        <img src="../../assets/image/Little_Star_frame.png" v-if="li.star===0 || li.star===1 || li.star===2" class="littlestar">
                      </td>
                      <td class="historyLi" style="width: 10%;left: -1%;position: relative;">{{li.score}}</td>
                    </tr>
                    </table>
                  </div>
                 </div>
                  <!--Improvement-->
                  <div v-if="categoryNum === 6 &&comingSoon ===false" style="height: 100%;padding-top: 2%;" >
                    <div class="improvementList" v-for="(li,index) in improvement" :key='index'>
                      <div class="improvementId">{{index+1}}</div>
                      <div class="improvementLetter">{{li.name}}</div>
                      <div class="improvementButton" @click="review(li)">Let's Review</div>
                      <div class="improvementPercent">{{li.average}}%</div>
                    </div>
                  </div>
                  <!--Improvement coming soon-->
                  <div v-if="categoryNum === 6 &&comingSoon ===true" style="height: 100%;font-size: 48px;color: #7d4e28;display: flex;align-items: center;justify-content: center;">
                    <p>coming soon!</p>
                  </div>
                </div>
                <!--Scores for key areas-->
                <div class="areasDiv" v-if="categoryNum === 4">
                  <div class="areasButton">
                    <div class="areasButton1" :style="symbolNub ==='1' ? symbolColor:symbolDefaultColor" @click="areas('Vocabulary')">Vocabulary</div>
                    <div class="areasButton1" :style="symbolNub ==='2' ? symbolColor:symbolDefaultColor" @click="areas('Spelling')">Spelling</div>
                    <div class="areasButton1" :style="symbolNub ==='3' ? symbolColor:symbolDefaultColor" @click="areas('Writing')" v-if="level === 'Beginner'">Writing</div>
                    <div class="areasButton1" :style="symbolNub ==='4' ? symbolColor:symbolDefaultColor" @click="areas('Letter')" v-if="level === 'Beginner'">Letter Recognition</div>
                    <div class="areasButton1" :style="symbolNub ==='5' ? symbolColor:symbolDefaultColor" @click="areas('Sound')" v-if="level === 'Beginner'">Sound Recognition</div>
                    <div class="areasButton1" :style="symbolNub ==='6' ? symbolColor:symbolDefaultColor" @click="areas('Reading')" v-if="level !== 'Beginner'">Reading</div>
                    <div class="areasButton1" :style="symbolNub ==='7' ? symbolColor:symbolDefaultColor" @click="areas('Blend')" v-if="level !== 'Beginner'">Blend Recognition</div>
                  </div>
                  <div class="areas" >
                    <div  id="myChart" ref="m" style="width: 100%;height:100%;" class="echartStyle" />
                    <div class="AreasDiv">
                      <p class="AreasP">Average  Score: {{scoresAverage}}%</p>
                      <p class="AreasP2" :style="scoresColor">{{scoresWord}}</p>
                    </div>
                  </div>
                </div>
                <!--Exercise Completion Intervals-->
                <div class="intervals" v-if="categoryNum === 2">
                  <img src="../../assets/image/IClock.png" class="iClock">
                  <div class="intervalsPosition">
                  <p class="intervalsHour">{{ intervalsHour }}</p>
                  <p class="intervalsHours">hrs</p>
                  <p class="intervalsMins">{{ intervalsMins }}mins</p>
                  <p class="intervalsPass">You are better than <span style="color: #6CB0A4">{{pass}}%</span> of players.</p>
                  </div>
                </div>
                <!--Exercise Completion Intervals2-->
                <div class="intervals" v-if="categoryNum === 3">
                  <div class="intervalsPass7">
                    <div :class="{intervalsPassAmazing:evaluate ==='AMAZING',intervalsPassKeepTrying:evaluate ==='KEEP TRYING',intervalsPassGreat:evaluate ==='GREAT',intervalsPassNice:evaluate ==='NICE'}">{{evaluate}}</div>
                    <p class="intervalsPassText1">{{pass7}}</p>
                    <p class="intervalsPassText2">EXERCISES</p>
                    <P class="intervalsPassClass">/past 7 days</P>
                  </div>
                  <div class="intervalsPass30">
                    <div :class="{intervalsPassAmazing:evaluate2 ==='AMAZING',intervalsPassKeepTrying:evaluate2 ==='KEEP TRYING',intervalsPassGreat:evaluate2 ==='GREAT',intervalsPassNice:evaluate2 ==='NICE'}">{{evaluate2}}</div>
                    <p class="intervalsPassText1">{{pass30}}</p>
                    <p class="intervalsPassText2">EXERCISES</p>
                    <P class="intervalsPassClass">/past 30 days</P>
                  </div>
                </div>
              </div>
              <!--下方白点 -->
              <div class="pointPosition" v-if="opciay2&&categoriesName !== 'Performance Report'">
                <span :class="categoriesName === 'Overall' ?'point1':'point2'" >.</span>
                <span :class="categoriesName === 'Exercise Completion Intervals'?'point1':'point2'">.</span>
                <span :class="categoryNum === 3?'point1':'point2'">.</span>
                <span :class="categoriesName === 'Scores for Key Areas'?'point1':'point2'">.</span>
                <span :class="categoriesName === 'Strengths'?'point1':'point2'">.</span>
                <span :class="categoriesName === 'Improvement'?'point1':'point2'">.</span>
                <span :class="categoriesName === 'Exercise History'?'point1':'point2'">.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </transition> -->
      <div class="settinglist1" style="z-index: 1;">
        <img src="../../assets/image/walker_bar.png" style="width: 100%;bottom: 0;height: 100%;">
        <!-- <img src="../assets/image/runner_bar.png" style="width: 100%;bottom: 0;height: 100%;" v-if="levels"> -->
        <div>
          <img :src=gameImage class="acstyle"/>
          <span class="fontsize leftmar">{{firstName}}</span>
          <!-- <span class="fontsize leftmar" disabled="disabled" v-model="firstName" οnkeyup="value=value.replace(/[\u4e00-\u9fa5]/ig,'')"> -->
        </div>
        <div>
          <img src="../../assets/image/icon_coin.png" class="coinstyle">
          <span class="fontsize leftmar2">{{sum}}</span>
        </div>
        <div @click="back">
					<img src="../../assets/image/game-course03.png"  class="pause">
        <!-- 	<img src="../../assets/image/game-course03.png"  class=" pause" v-if="!action"> -->
        </div>
        <div @click="$tips(true);home()">
          <!-- <img src="../../assets/image/Icon_home0.png" class="repeat" v-if="action1"> -->
          <img src="../../assets/image/Icon_home.png" class="repeat">
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  var qs = require('qs');
  export default {
    name: "info",
    data() {
      let myChart;
      return {
        comingSoon:true,
        strengthsMinNub:0,
        strengthsMaxNub:3,
        strengths:[],
        strengthsTemp:[],
        screenStyle:{},
        scoresWord:'Keep Practicing',
        scoresAverage:0,
        score:[],
        scores:{},
        scoresMap:{},
        scoresData:{},
        symbolNub:'1',
        symbolColor:{
          //'background-color' :'#f5aa32'
          'background-color' :'#939498'
        },
        symbolDefaultColor:{
          'background-color' :'#939498'
        },
        scoresColor:{
          'background-color' :'#939498'
        },
        improvement:[],
        sliceMin:0,
        sliceMax:6,
        evaluate2:'AMAZING',
        evaluate:'NICE',
        intervalsHour:'5',
        intervalsMins:'6',
        pass7:'',
        pass30:'',
        pass:'0',
        local:'',
        history:[],
        overall:[],
        action: false,
        action1: false,
        level: " ",
        course: '',
        courseId: '',
        categoriesName:'',
        categoriesText:'',
        levelsId: '',
        unitname: '',
        unitsId: '',
        menuname: '',
        scoreormis: 'Score',
        changewidth2: false,
        changewidth1: false,
        chatorphonics: true,
        menuId: '',
        backgrorang: false,
        backgrgreen: true,
        audio: '',
        sum: 0,
        firstName: '',
        firstName1: '',
        gameImage: '',
        gameImage1: '',
        studentId: '',
        loading:false,
        username: "usernameusername",
        code: "codecode",
        onef: true,
        video: false,
        ifboss1: false, ifboss2: false,
        courseList: [
          {
            name: '',
            levels_detail_id: '',
          },
          {
            name: '',
            levels_detail_id: '',
          }
        ],
        levelsList: [],
        unitsList: [],
        phonicsDetailList: [],
        phonicsId: '',
        phonics: 0,
        menu: [],
        pmenu: [],
        menuboss: [],
        detailList: [],
        icon: "http://monkeytown.monkeytree.com.hk/image/star_frame.png",
        imglists: [],
        stars1: [
          {
            onestart1: false,
            onestart2: false,
            onestart3: false,
            onestart4: false,
            onestart5: false,
            onestart6: false,
          },
        ],
        category: [
          'Overall',
          'Exercise Completion Intervals',
          'Exercise Completion Intervals2',
          'Scores for Key Areas',
          'Strengths',
          'Strengths2',
          'Improvement',
          'Exercise History'
        ],
        categoryNum: 1,
        allstar: [],
        stars: [],
        seleinfo: true,
        imageu: '',

        pic: "",

        url: '/user/',
        url1: '', url2: '', url3: '', url4: '', url5: '', url6: '', url7: '',
        purl1: '', purl2: '', purl3: '',
        phonicsList: [{
          compelte: 0
        },
          {
            compelte: 0,
          },
          {
            compelte: 0,
          },
        ],
        starts: "0/30",
        fade: 'fade',
        zhezhao: false,
        opciayStatistics:false,
        opciay5: true,
        opciay1: false,
        opciay2: false,
        opciay3: false,
        opciay4: false,
        opciay6: false,
        page1: false, page2: false, page3: false, page4: false, page6: false,
        type: 'info',
      }
    },
    filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        // let h = date.getHours();
        // h = h < 10 ? ('0' + h) : h;
        // let m = date.getMinutes();
        // m = m < 10 ? ('0' + m) : m;
        // let s = date.getSeconds();
        // s = s < 10 ? ('0' + s) : s;
        return d + '/' + MM + '/' + y;
      }
    },
    watch:{
      'categoriesName':function (newVal) {
          if (this.myChart != null && this.myChart !== "" && this.myChart !== undefined && this.myChart._chartsViews != null) {
            this.score =[];
            this.myChart.dispose();//销毁
            document.getElementById("myChart").style='';
          }else if(this.categoriesName === 'Scores for Key Areas'){
            this.scoresData = this.scoresMap['Vocabulary'];
            this.score = [];
            let m=0;
            for (let i = 0; i < this.scoresData.length; i++) {
              this.score[i] = this.scoresData[i].S;
              m +=this.score[i];
            }
          }
        },
      'loading': function(newVal) {
        if (this.loading === true) {
          alertImg(this.$axios.defaults.baseURL2);
          setTimeout(() => {document.getElementById('alertFram').style.display = 'none'},15000)
        }else{
          setTimeout(() => {document.getElementById('alertFram').style.display = 'none'})
        }
      },

    },
    methods: {
      review(li){
        if(this.level==="Intermediate"){
          this.$router.push({
            path: '/intermenu',
            query: {
              unit: li.Name,
              unitsId: li.id,
              phonicsId: li.phonics_detail_id,
              style: 'game',
              level: this.level,
              cources: 'PHONICS',
            }
          });
        }else if(this.level==="Advanced"){
          this.$router.push({
            path: '/advmenu',
            query: {
              unit: li.Name,
              unitsId: li.id,
              phonicsId: li.phonics_detail_id,
              style: 'game',
              level: this.level,
              cources: 'PHONICS',
            }
          });
        }else {
          this.$router.push({
            path: '/phonicsmenu',
            query: {
              unit: li.Name,
              unitsId: li.id,
              phonicsId: li.phonics_detail_id,
              style: 'game',
              level: this.level,
              cources: 'PHONICS',
            }
          });
        }
      },
     areas(type){
       //绿 ：#43BF76 蓝：#4169E1 紫：#a020f0
       if(this.level === 'Beginner'){
         this.symbolColor["background-color"] = '#43BF76';
       }else if(this.level === 'Intermediate'){
         this.symbolColor["background-color"] = '#4169E1';
       }else if(this.level === 'Advanced'){
         this.symbolColor["background-color"] = '#a020f0';
       }
        if (type === 'Vocabulary'){
          this.symbolNub = '1';
        }else if(type === 'Spelling'){
          this.symbolNub = '2';
        }else if(type === 'Writing'){
          this.symbolNub = '3';
        }else if(type === 'Letter'){
          this.symbolNub = '4';
        }else if(type === 'Sound'){
          this.symbolNub = '5';
        }else if(type === 'Reading'){
          this.symbolNub = '6';
        }else if(type === 'Blend'){
          this.symbolNub = '7';
        }
        this.scoresData = this.scoresMap[type];
        this.score = [];
        let m=0;
        for (let i = 0; i < this.scoresData.length; i++) {
          this.score[i] = this.scoresData[i].S;
          m +=this.score[i];
        }

        this.scoresAverage = m;
        if(0<=this.scoresAverage && this.scoresAverage<49){
          this.scoresWord = 'Keep Practicing';
          this.scoresColor["background-color"] = '#5bc192';
        }else if(49<=this.scoresAverage && this.scoresAverage<69){
          this.scoresWord = 'Good Progress';
          this.scoresColor["background-color"] = '#f5bc51';
        }else if(69<=this.scoresAverage && this.scoresAverage<79){
          this.scoresWord = 'Getting Better';
          this.scoresColor["background-color"] = '#f195ae';
        }else if(79<=this.scoresAverage && this.scoresAverage<=100){
          this.scoresWord = 'Well Done';
          this.scoresColor["background-color"] = '#4ca0e6';
        }

        this.drawLine();
      },
      drawLine(){
        this.selectScreen();
        let that = this;
        if (this.myChart != null && this.myChart !== "" && this.myChart !== undefined && this.myChart._chartsViews != null) {
          this.myChart.dispose();//销毁
        }
         this.myChart = this.$echarts.init(this.$refs.m);
        // 绘制图表
        this.myChart.setOption({
          xAxis: {
            type: 'category',
            data: [1,2,3,4,5,6,7,8,9,10],
            show:false,
            textStyle: {
              color: "#0079B8",
              fontSize: 12,
            },
          },
          grid:{
            //left:'5%',
            right:'8%',
            bottom:'20%',
            width:'80%',
            height:'60%',
          },
          yAxis: {
            type: 'value',
            min:0,
            max:10,
            splitNumber: 2,
            axisLabel:{
              //y轴文字样式
              textStyle: {
                fontSize: this.screenStyle['yFontSize'],
                fontFamily: 'kg',
                color:'#bebfc0'
              }
            },
            //y轴横线的样式
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color:['#bebfc0'],
                width:this.screenStyle['yWidth']
              }
            }

          },
          //鼠标点击提示详细信息
          tooltip: {
            //click:点击;mousemove:鼠标移动显示
            triggerOn: "click",
            backgroundColor:'#eeebc8',
            borderColor:'#939498',
            borderWidth:this.screenStyle['borderWidth'],
            borderRadius:this.screenStyle['borderRadius'],
            padding:this.screenStyle['padding'],
            trigger: 'item',
            hideDelay: 2000,
            position:'top',
            //移动端窄屏，避免tooltip 超出外界被截断
            confine:false,
            formatter:function (params){
              return `<p style='color:#f68a49;font-size: ${that.screenStyle['FontSize']}px;font-family: kg, serif'>${that.scoresData[params.dataIndex].name}</p><p style='color:#6d513d;font-size: ${that.screenStyle['FontSize2']}px;font-family: kg, serif'>SCORE:${that.scoresData[params.dataIndex].score}</p><p style='color:#6d513d;font-size: ${that.screenStyle['FontSize3']}px;font-family: kg, serif'>${that.scoresData[params.dataIndex].date}</p>`;
            }
          },
          series: [
            {
              data: this.score,
              type: 'line',
              //拐点大小
              symbolSize:this.screenStyle['symbolSize'],
              //实心拐点
              symbol:'circle',
              //拐点颜色
              //color:this.symbolColor['background-color'],
              color:'#ec5d61',
              itemStyle:{
                normal:{
                  lineStyle:{
                    width:this.screenStyle['lineStyleWidth'],
                    type:'solid',  //'dotted'虚线 'solid'实线
                    //折线颜色
                    //color:this.symbolColor['background-color'],
                    color:'#ec5d61',
                    //borderColor:'#bebfc0', //拐角点颜色
                  }
                }
              },
              // markPoint: {
              //   data: [{
              //     type: "max"
              //   }],
              //   symbolSize: 50
              // }
            }
          ]
        });
        // this.myChart.on('click', function (params) {
        //   // 在用户点击后控制台打印数据的名称
        //   console.log(params);
        // });
        window.onresize = function() {
          that.myChart.resize();
        };
      },
      selectScreen(){
       if (200<=window.screen.width&&window.screen.width<=1023) {
         //拐点大小
         this.screenStyle['symbolSize']=8;
         //折线粗细
         this.screenStyle['lineStyleWidth']=4;
         //y轴字体大小
         this.screenStyle['yFontSize']=15;
         //y轴横线的粗细
         this.screenStyle['yWidth']=3;
         //边框宽度
         this.screenStyle['borderWidth']=5;
         //边框圆角
         this.screenStyle['borderRadius']=20;
         this.screenStyle['padding']=[5,10];
         //详细提示框的字体大小
         this.screenStyle['FontSize']=15;
         this.screenStyle['FontSize2']=10;
         this.screenStyle['FontSize3']=10;
       }else{
         //拐点大小
         this.screenStyle['symbolSize']=15;
         //折线粗细
         this.screenStyle['lineStyleWidth']=7;
         //y轴字体大小
         this.screenStyle['yFontSize']=25;
         //y轴横线的粗细
         this.screenStyle['yWidth']=5;
         //边框宽度
         this.screenStyle['borderWidth']=5;
         //边框圆角
         this.screenStyle['borderRadius']=35;
         this.screenStyle['padding']=[18,40];
         //详细提示框的字体大小
         this.screenStyle['FontSize']=20;
         this.screenStyle['FontSize2']=15;
         this.screenStyle['FontSize3']=15;
       }
      },
      cardRight(){
          if(this.categoryNum === 7){
            this.categoryNum=1
          }else {
            this.categoryNum+=1
          }
          this.categories(this.categoryNum);
      },
      cardLeft(){
        if(this.categoryNum === 1){
          this.categoryNum=7
        }else {
          this.categoryNum-=1
        }
        this.categories(this.categoryNum);
      },
      cRight(){
        if(this.categoryNum===1){
          if (this.sliceMax - this.overall.length<0){
            this.sliceMax+=6;
            this.sliceMin+=6;
          }else{
            this.sliceMax=6;
            this.sliceMin=0;
          }
        }else if(this.categoryNum===5){
          if(this.strengthsMaxNub<Object.keys(this.strengths).length){
            let length = Object.keys(this.strengths).length-this.strengthsMaxNub<3?Object.keys(this.strengths).length-this.strengthsMaxNub:3;
            this.strengthsTemp=[];
            for (let i = 0; i < length; i++) {
              this.strengthsTemp[i] = Object.values(this.strengths)[this.strengthsMaxNub+i]
            }
            this.strengthsMaxNub+=length;
          }
        }
      },
      cLeft(){
        if(this.categoryNum===1){
          if (this.sliceMin>=6){
            if(this.sliceMax-this.sliceMin<6){
              this.sliceMax-=this.overall.length%6;
              this.sliceMin-=6;
            }else{
              this.sliceMax-=6;
              this.sliceMin-=6;
            }
          }else {
            this.sliceMax = this.overall.length;
            this.sliceMin = this.overall.length-this.overall.length%6;
          }
        }else if(this.categoryNum===5){
          if(this.strengthsMaxNub>3){
            //初始化临时数组
            this.strengthsTemp=[];
            if(this.strengthsMaxNub%3!==0){
              let length =this.strengthsMaxNub-this.strengthsMaxNub%3;
              for (let i = 0; i < 3; i++) {
                this.strengthsTemp[i] = Object.values(this.strengths)[length-3+i]
              }
              this.strengthsMaxNub=length;
            }else{
              for (let i = 0; i < 3; i++) {
                this.strengthsTemp[i] = Object.values(this.strengths)[this.strengthsMaxNub-6+i]
              }
              this.strengthsMaxNub=this.strengthsMaxNub-3;
            }
          }

        }
      },
      categories(str){
        if (str === 1){
          this.categoriesName='Overall';
          this.categoriesText='Exercises completion for each letters';
          this.categoryNum=1;
        }else if(str ===2){
          this.categoriesName='Exercise Completion Intervals';
          this.categoriesText='Exercises finished in the past 7/ 30 days';
          this.categoryNum=2;
        }else if(str ===3){
          this.categoriesName='Exercise Completion Intervals';
          this.categoriesText='Exercises finished in the past 7/ 30 days';
          this.categoryNum=3;
        }else if(str ===4){
          this.categoriesName='Scores for Key Areas';
          this.categoriesText='Score in last 10 times in different area';
          this.categoryNum=4;
          setTimeout(()=>{this.drawLine();});
        }else if(str ===5){
          this.categoriesName='Strengths';
          this.categoriesText='Correctness of the last 10 times of each letter';
          this.categoryNum=5;
        }else if(str ===6){
          this.categoriesName='Improvement';
          this.categoriesText='Average scores of each letter exercise';
          this.categoryNum=6;
        }else if(str ===7){
          this.categoriesName='Exercise History';
          this.categoriesText='Completion history of each letter';
          this.categoryNum=7;
        }
      },
      PrivacyPolicy(p){
          this.$router.push({ //核心语句
            path: '/PrivacyPolicy', //跳转的路径
            query:{
              place:'info',
              privacy:p,
            }
          })
      },
      check(str) {
        var temp = ''
        for (var i = 0; i < str.length; i++) {
          if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 255) {
            temp += str.charAt(i)
          }
        }
        return temp
      },
      back() {
        if(this.chatorphonics){
          if(this.opciay4){
            this.sectionp3();
          }else if(this.opciay3){
            this.section3();
          }else if(this.opciay2 === false&&this.page2){
            this.section2();
          }else if(this.opciay2&&this.page2){
            this.changeBcolo1();
          }else{
            this.home();
          }
        }else if(!this.chatorphonics){
          if(this.opciay1){
            this.home();
          }else if(this.opciay2 && this.categoriesName === 'Performance Report'){
            this.changeBcolo2();
          }else if(this.opciay2 && this.categoriesName !== 'Performance Report'){
            this.categoriesName = 'Performance Report';
            this.categoriesText = 'Please select your level';
            this.categoryNum = '';
          }
        }
      },
      switchs() {
        this.$router.push({path: '/select'});
      },
      seletimg() {
        this.seleinfo = false;
        this.url5 = this.url + "getImage";
        this.$axios.get(this.url5).then(res => {
          this.imglists = res.data.imagesAll;
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
      },
      home() {
        this.action1 = true;
        setTimeout(() => {
          this.action1 = false;
          this.$router.push({
            path: "/source", //跳转的路径
          });
        }, 1000);
      },
      save1() {
        this.url7 = this.url + "updateImage";
        this.$axios.post(this.url7, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          firstName: this.firstName1
        })).then(res => {
          this.changewidth1 = true;
          localStorage.setItem("firstName", this.firstName1);
          this.firstName = this.firstName1;
          setTimeout(() => {
            this.changewidth1 = false;
          }, 200);
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
        // }
      },
      save2() {
        this.url6 = this.url + "updateImage";
        this.$axios.post(this.url6, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          url: this.imageu
        })).then(res => {
          this.changewidth2 = true;
          localStorage.setItem("gameImage", this.gameImage1);
          this.gameImage = this.gameImage1;
          this.seleinfo = true;
          setTimeout(() => {
            this.changewidth2 = false;
          }, 200);
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
      },
      imgchange(li) {
        this.gameImage1 = this.pic + li.url;
        this.imageu = li.url;
      },
      settinfo() {
        this.onef = false;
      },
      backinfo() {
        this.onef = true;
      },
      changeBcolo1() {
        this.backgrgreen = true;
        this.backgrorang = false;
        this.page2 = false;
        this.page3 = false;
        this.page4 = false;
        this.opciay1 = true;
        this.opciayStatistics=true;
        this.opciay2 = false;
        this.opciay3 = false;
        this.opciay6 = false;
        this.opciay4 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.page1 = true;
        this.chatorphonics = true;
        this.strengthsTemp=[];
        // this.opciay5=true;
        this.courseId = this.courseList[0].course_id;
        if (this.courseList[0].name === "CHAT ROOM") {
          this.course = "Chat Room";
        } else if (this.courseList[0].name === "PHONICS") {
          this.course = "Phonics";
        }
      },
      changeBcolo2() {
        this.loading = true;
        if (this.phonics == 0) {
          alertMsg3("Active Phonics Student Only");
          setTimeout((function () {
            alertFram.style.display = "none";
          }), 1500)
        } else {
          this.strengthsTemp=[];
          this.backgrorang = true;
          this.backgrgreen = false;
          this.page2 = false;
          this.page3 = false;
          this.page4 = false;
          this.opciay1 = true;
          this.opciayStatistics = true;
          this.opciay2 = false;
          this.opciay3 = false;
          this.opciay6 = false;
          this.opciay4 = false;
          this.ifboss1 = false;
          this.ifboss2 = false;
          this.page1 = true;
          this.chatorphonics = false;
          this.categoriesName = 'Level';
          this.categoriesText = 'Please select your level';
          this.categoryNum = '';
          if (this.courseList[1].name === "CHAT ROOM") {
            this.course = "Chat Room";
          } else if (this.courseList[1].name === "PHONICS") {
            this.course = "Phonics";
          }
          this.purl1 = this.url + "phonics";
          this.$axios.post(this.purl1, qs.stringify({
            studentId: localStorage.getItem('studentId'),
          })).then(res => {
            this.phonicsList = res.data.phonicsList;
            this.loading = false;
          }, res => {
            alertMsg("You must be connected to the internet.<br>Please connect and try again.");
          })

        }
      },
      section1() {
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.page2 = false;
        this.page3 = false;
        this.page4 = false;
        this.opciay1 = true;
        this.opciayStatistics = true;
        this.opciay6 = false;
        this.opciay2 = false;
        this.opciay3 = false;
        this.opciay4 = false;
      },
      section2() {
        this.page3 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.page4 = false;
        this.opciay2 = true;
        this.opciay1 = false;
        this.opciay6 = false;
        this.opciay3 = false;
        this.opciay4 = false;
      },
      section3() {
          this.ifboss1 = false;
          this.ifboss2 = false;
          this.page4 = false;
          this.page3 = true;
          this.opciay3 = false;
          this.opciay2 = false;
          this.opciay1 = false;
          this.opciay6 = true;
          this.opciay4 = false;
      },
      section4() {
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.page4 = true;
        this.opciay4 = true;
        this.opciay2 = false;
        this.opciay3 = false;
        this.opciay6 = false;
        this.opciay1 = false;
      },
      sectionp2() {
        this.page3 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.page4 = false;
        this.opciay2 = true;
        this.opciay1 = false;
        this.opciay6 = false;
        this.opciay3 = false;
        this.opciay4 = false;
      },
      sectionp3() {
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.page4 = false;
        this.page3 = true;
        this.opciay3 = true;
        this.opciay2 = false;
        this.opciay1 = false;
        this.opciay6 = false;
        this.opciay4 = false;
      },
      sectionp4() {
        if (this.opciay4 === 'false') {
          this.ifboss1 = false;
          this.ifboss2 = false;
          this.page4 = true;
          this.opciay4 = true;
          this.opciay2 = false;
          this.opciay3 = false;
          this.opciay6 = false;
          this.opciay1 = false;
        }
      },
      next1() {
        this.url2 = this.url + "Levels";
        this.$axios.post(this.url2, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          courseId: this.courseId
        })).then(res => {
          this.levelsList = res.data.levelsList;
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
        this.section1();
        this.page1 = true;
      },
      next2(li) {
        this.page2 = true;
        this.opciay2 = true;
        this.opciay1 = false;
        this.opciay3 = false;
        this.opciay4 = false;
        this.opciay6 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.url3 = this.url + "Units";
        this.levelsId = li.levels_detail_id;
        this.level = li.name;
        this.$axios.post(this.url3, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          levelsId: this.levelsId
        })).then(res => {
          this.unitsList = res.data.unitsList;

        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
      },
      tohome(e) {
        this.opciay3 = true;
        this.opciay6 = false;
        this.opciay2 = false;
        this.opciay1 = false;
        this.opciay4 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        if (e === 1) {
          this.url4 = this.url + "MenuPart1";
          this.$axios.post(this.url4, qs.stringify({
            studentId: localStorage.getItem('studentId'),
            unitsId: this.unitsId
          })).then(res => {
            this.menuboss = [];
            this.menu = [];
            for (let i in res.data.UnitsList) {
              this.menu.push(res.data.UnitsList[i]); //属性
            }
            // for (let b in res.data.UnitsList2) {
            //   this.menuboss.push(res.data.UnitsList2[b]); //属性
            // }
            //
            // for(var i=0;i<this.menuboss.length;i++){
            //   this.menuboss[i].stars = [];
            //   if(this.menuboss[i].star=="0"){
            //     this.menuboss[i].stars.push({
            //       onestart1: false,
            //       onestart2: false,
            //       onestart3:false,
            //     });
            //   }else if(this.menuboss[i].star=="1"){
            //     this.menuboss[i].stars.push({
            //       onestart1: true,
            //       onestart2: false,
            //       onestart3:false,
            //     });
            //   }else if(this.menuboss[i].star=="2"){
            //     this.menuboss[i].stars.push({
            //       onestart1: true,
            //       onestart2: true,
            //       onestart3:false,
            //     });
            //   }else if(this.menuboss[i].star=="3"){
            //     this.menuboss[i].stars.push({
            //       onestart1: true,
            //       onestart2: true,
            //       onestart3:true,
            //     });
            //   }
            // }
            // this.menu.splice(8,1);
            for (var i = 0; i < this.menu.length; i++) {
              this.menu[i].stars = [];
              if (this.menu[i].star == "0") {
                this.menu[i].stars.push({
                  onestart: false,
                  twostart: false,
                  threestart: false,
                });
              } else if (this.menu[i].star == "1") {
                this.menu[i].stars.push({
                  onestart: true,
                  twostart: false,
                  threestart: false,
                });
              } else if (this.menu[i].star == "2") {
                this.menu[i].stars.push({
                  onestart: true,
                  twostart: true,
                  threestart: false,
                });
              } else if (this.menu[i].star == "3") {
                this.menu[i].stars.push({
                  onestart: true,
                  twostart: true,
                  threestart: true,
                });
              }
            }
            // console.log(this.menu);console.log(this.stars);
          }, res => {
            alertMsg("You must be connected to the internet.<br>Please connect and try again.");
          });
        } else if (e == 2) {
          this.url4 = this.url + "MenuPart2";
          this.$axios.post(this.url4, qs.stringify({
            studentId: localStorage.getItem('studentId'),
            unitsId: this.unitsId
          })).then(res => {
            this.menuboss = [];
            this.menu = [];
            for (let i in res.data.UnitsList) {
              this.menu.push(res.data.UnitsList[i]); //属性
            }

            for (var i = 0; i < this.menu.length; i++) {
              this.menu[i].stars = [];
              if (this.menu[i].star == "0") {
                this.menu[i].stars.push({
                  onestart: false,
                  twostart: false,
                  threestart: false,
                });
              } else if (this.menu[i].star == "1") {
                this.menu[i].stars.push({
                  onestart: true,
                  twostart: false,
                  threestart: false,
                });
              } else if (this.menu[i].star == "2") {
                this.menu[i].stars.push({
                  onestart: true,
                  twostart: true,
                  threestart: false,
                });
              } else if (this.menu[i].star == "3") {
                this.menu[i].stars.push({
                  onestart: true,
                  twostart: true,
                  threestart: true,
                });
              }
            }
            // console.log(this.menu);console.log(this.stars);
          }, res => {
            alertMsg("You must be connected to the internet.<br>Please connect and try again.");
          });
        } else if (e == 3) {
          this.url4 = this.url + "Menu";
          this.$axios.post(this.url4, qs.stringify({
            studentId: localStorage.getItem('studentId'),
            unitsId: this.unitsId
          })).then(res => {
            this.menuboss = [];
            this.menu = [];
            for (let i in res.data.UnitsList) {
              this.menu.push(res.data.UnitsList[i]); //属性
            }

            this.menu.splice(8, 1);
            for (var i = 0; i < this.menu.length; i++) {
              this.menu[i].stars = [];
              if (this.menu[i].star == "0") {
                this.menu[i].stars.push({
                  onestart: false,
                  twostart: false,
                  threestart: false,
                });
              } else if (this.menu[i].star == "1") {
                this.menu[i].stars.push({
                  onestart: true,
                  twostart: false,
                  threestart: false,
                });
              } else if (this.menu[i].star == "2") {
                this.menu[i].stars.push({
                  onestart: true,
                  twostart: true,
                  threestart: false,
                });
              } else if (this.menu[i].star == "3") {
                this.menu[i].stars.push({
                  onestart: true,
                  twostart: true,
                  threestart: true,
                });
              }
            }
            // console.log(this.menu);console.log(this.stars);
          }, res => {
            alertMsg("You must be connected to the internet.<br>Please connect and try again.");
          });
        }

      },
      next3(li) {
        this.page3 = true;
        this.opciay6 = true;
        this.opciay2 = false;
        this.opciay1 = false;
        this.opciay4 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        for (var i = 0; i < this.unitsList.length; i++) {
          if (this.unitsList[i].name == li.name) {
            this.unitname = this.unitsList[i].name;
            this.unitsId = this.unitsList[i].units_detail_id;
          }
        }

      },
      next4(li) {
        this.opciay6 = false;
        this.page4 = true;
        this.opciay2 = false;
        this.opciay3 = false;
        this.opciay1 = false;
        this.opciay4 = true;
        this.ifboss1 = true;
        this.ifboss2 = false;
        this.menuname = li.name;
        this.detailList = [];
        this.menuId = li.menu_detail_id;
        this.url4 = this.url + "details";
        if (li.name == "Memory") {
          this.scoreormis = "Mistake";
        } else {
          this.scoreormis = "Score";
        }
        this.$axios.post(this.url4, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          menuId: this.menuId
        })).then(res => {
          for (let j in res.data.detailList) {
            this.detailList.push(res.data.detailList[j]); //属性
          }
          for (var i = 0; i < this.detailList.length; i++) {
            this.detailList[i].allstar = [{one2: false, two2: false, three2: false}];
            if (this.detailList[i].star == 0) {

            } else if (this.detailList[i].star == 1) {
              this.detailList[i].allstar[0].one2 = true;
            } else if (this.detailList[i].star == 2) {
              this.detailList[i].allstar[0].one2 = true;
              this.detailList[i].allstar[0].two2 = true;
            } else if (this.detailList[i].star == 3) {
              this.detailList[i].allstar[0].one2 = true;
              this.detailList[i].allstar[0].two2 = true;
              this.detailList[i].allstar[0].three2 = true;
            }
            //console.log( this.detailList);
          }
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })

      },
      next5(li) {
        this.page4 = true;
        this.opciay2 = false;
        this.opciay3 = false;
        this.opciay6 = false;
        this.opciay1 = false;
        this.opciay4 = true;
        this.ifboss2 = true;
        this.ifboss1 = false;
        this.menuname = li.part_name;
        this.detailList = [];
        this.menuId = li.menu_detail_id;
        this.url4 = this.url + "details";
        this.$axios.post(this.url4, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          menuId: this.menuId
        })).then(res => {
          for (let j in res.data.detailList) {
            if (res.data.detailList[j].boss_id == li.part_id) {
              this.detailList.push(res.data.detailList[j]); //属性
            }
          }
          // var allstar2=[];
          for (var i = 0; i < this.detailList.length; i++) {
            this.detailList[i].stars = [];
            if (this.detailList[i].star == "0") {
              this.detailList[i].stars.push({
                onestart: false,
                twostart: false,
                threestart: false,
              });

            } else if (this.detailList[i].star == "1") {
              this.detailList[i].stars.push({
                onestart: true,
                twostart: false,
                threestart: false,

              });
            } else if (this.detailList[i].star == "2") {
              this.detailList[i].stars.push({
                onestart: true,
                twostart: true,
                threestart: false,

              });
            } else if (this.detailList[i].star == "3") {
              this.detailList[i].stars.push({
                onestart: true,
                twostart: true,
                threestart: true,

              });

            }

          }

        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        });
        // console.log( this.detailList);
      },
      logout() {
        if(this.local === 'cn'){
          this.$router.push({
            path: "/login", //跳转的路径
          });
        }else{
          this.$router.push({
            path: "/loginhk", //跳转的路径
          });
        }

        localStorage.setItem("userId", '');
      },
      //统计
      Statistics(){
        this.loading = true;
        this.$axios.post('/user/getTimeLog', qs.stringify({
          studentId: localStorage.getItem('studentId'),
          level:this.level,
        })).then(res => {
          this.strengths = res.data.Strengths;
          this.strengthsMaxNub = Object.keys(this.strengths).length < 3?Object.keys(this.strengths).length:3;
          for (let i = 0; i < this.strengthsMaxNub; i++) {
            this.strengthsTemp[i] = Object.values(this.strengths)[i]
          }
          this.intervalsMins = res.data.time.mins;
          this.intervalsHour = res.data.time.hours;
          this.pass = res.data.time.pass;
          this.history = res.data.history;
          this.overall = res.data.overall;
          this.pass7 = res.data.intervals.pass7;
          this.pass30 = res.data.intervals.pass30;
          this.improvement = res.data.improvement;
          this.scores = res.data.scores;
          this.scoresMap = res.data.scoresMap;
          this.scoresData = this.scoresMap.Vocabulary;
          let imgSrc = '';
          for (let i = 0; i < this.overall.length; i++) {
            this.overall[i].name = this.overall[i].abbreviation;
            if(this.overall[i].percent < 10){
              imgSrc = require('../../assets/image/letters/10/'+this.overall[i].name+'.png');
            }else if(10<= this.overall[i].percent && this.overall[i].percent< 20){
              imgSrc = require('../../assets/image/letters/20/'+this.overall[i].name+'.png');
            }else if(20<= this.overall[i].percent && this.overall[i].percent< 30){
              imgSrc = require('../../assets/image/letters/30/'+this.overall[i].name+'.png');
            }else if(30<= this.overall[i].percent && this.overall[i].percent< 40){
              imgSrc = require('../../assets/image/letters/40/'+this.overall[i].name+'.png');
            }else if(40<= this.overall[i].percent && this.overall[i].percent< 50){
              imgSrc = require('../../assets/image/letters/50/'+this.overall[i].name+'.png');
            }else if(50<= this.overall[i].percent && this.overall[i].percent< 60){
              imgSrc = require('../../assets/image/letters/60/'+this.overall[i].name+'.png');
            }else if(60<= this.overall[i].percent && this.overall[i].percent< 70){
              imgSrc = require('../../assets/image/letters/70/'+this.overall[i].name+'.png');
            }else if(70<= this.overall[i].percent && this.overall[i].percent< 80){
              imgSrc = require('../../assets/image/letters/80/'+this.overall[i].name+'.png');
            }else if(80<= this.overall[i].percent && this.overall[i].percent< 90){
              imgSrc = require('../../assets/image/letters/90/'+this.overall[i].name+'.png');
            }else if(90<= this.overall[i].percent && this.overall[i].percent< 99){
              imgSrc = require('../../assets/image/letters/99/'+this.overall[i].name+'.png');
            }else if(this.overall[i].percent === 100){
              imgSrc = require('../../assets/image/letters/100/'+this.overall[i].name+'.png');
            }
            this.overall[i].imgSrc = imgSrc;
          }

          if(this.pass7<=6){
            this.evaluate = 'KEEP TRYING';
          }else if(6<this.pass7 && this.pass7<=13){
            this.evaluate = 'NICE';
          }else if(13<this.pass7 && this.pass7<=21){
            this.evaluate = 'GREAT';
          }else if(21<this.pass7){
            this.evaluate = 'AMAZING';
          }
          if(this.pass30<=27){
            this.evaluate2 = 'KEEP TRYING';
          }else if(27<this.pass30 && this.pass30<=52){
            this.evaluate2 = 'NICE';
          }else if(53<this.pass30 && this.pass30<=84){
            this.evaluate2 = 'GREAT';
          }else if(85<this.pass30){
            this.evaluate2 = 'AMAZING';
          }

          let m=0;
          for (let i = 0; i < this.scoresData.length; i++) {
            this.score[i] = this.scoresData[i].S;
            m +=this.score[i];
          }
          this.scoresAverage = m;
          if(0<=m && m<49){
            this.scoresWord = 'Keep Practicing';
            this.scoresColor["background-color"] = '#5bc192';
          }else if(49<=m && m<69){
            this.scoresWord = 'Good Progress';
            this.scoresColor["background-color"] = '#f5bc51';
          }else if(69<=m && m<79){
            this.scoresWord = 'Getting Better';
            this.scoresColor["background-color"] = '#f195ae';
          }else if(79<=m && m<=100){
            this.scoresWord = 'Well Done';
            this.scoresColor["background-color"] = '#4ca0e6';
          }
          this.loading = false;
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
      },
      pnext2(li) {
        this.symbolColor["background-color"] = '#43BF76';
        this.symbolNub = '1';
        this.page2 = true;
        this.opciay2 = true;
        this.opciay1 = false;
        this.opciay3 = false;
        this.opciay6 = false;
        this.opciay4 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.categoriesName = 'Performance Report';
        this.categoriesText = 'Please select categories';
        this.phonicsId = li.id;
        this.level = li.name;
        this.Statistics();
      },
      pnext21(li) {
        this.symbolColor["background-color"] = '#4169E1';
        this.symbolNub = '1';
        this.page2 = true;
        this.opciay2 = true;
        this.opciay1 = false;
        this.opciay3 = false;
        this.opciay4 = false;
        this.opciay6 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.categoriesName = 'Performance Report';
        this.categoriesText = 'Please select categories';
        //this.purl2 = this.url + "PhonicsDetail2";
        this.phonicsId = li.id;
        this.level = li.name;
        this.Statistics();
      },
      pnext22(li) {
        this.symbolColor["background-color"] = '#a020f0';
        this.symbolNub = '1';
        this.page2 = true;
        this.opciay2 = true;
        this.opciay1 = false;
        this.opciay3 = false;
        this.opciay4 = false;
        this.opciay6 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.categoriesName = 'Performance Report';
        this.categoriesText = 'Please select categories';
        //this.purl2 = this.url + "PhonicsDetail3";
        this.phonicsId = li.id;
        this.level = li.name;
        this.Statistics();
      },
      pnext3(li) {
        this.page3 = true;
        this.opciay3 = true;
        this.opciay2 = false;
        this.opciay1 = false;
        this.opciay6 = false;
        this.opciay4 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.categoriesName = 'Performance Report';
        this.categoriesText = 'Please select categories';
        this.phonicsDetailId = li.id;
        this.unitname = li.name;
        if (this.level === "Beginner") {
          this.purl3 = this.url + "PhonicsMenu";
        } else if (this.level === "Intermediate") {
          this.purl3 = this.url + "PhonicsMenu2";
        }else if (this.level === "Advanced") {
          this.purl3 = this.url + "PhonicsMenu3";
        }

        this.$axios.post(this.purl3, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          phonicsDetailId: this.phonicsDetailId
        })).then(res => {
          this.pmenu = [];
          for (let i in res.data.PhonicsList) {
            this.pmenu.push(res.data.PhonicsList[i]); //属性
          }

          for (var i = 0; i < this.pmenu.length; i++) {
            this.pmenu[i].stars = [];
            if (this.pmenu[i].sta === "0") {
              this.pmenu[i].stars.push({
                onestart: false,
                twostart: false,
                threestart: false,
              });
            } else if (this.pmenu[i].sta === "1") {
              this.pmenu[i].stars.push({
                onestart: true,
                twostart: false,
                threestart: false,
              });
            } else if (this.pmenu[i].sta === "2") {
              this.pmenu[i].stars.push({
                onestart: true,
                twostart: true,
                threestart: false,
              });
            } else if (this.pmenu[i].sta === "3") {
              this.pmenu[i].stars.push({
                onestart: true,
                twostart: true,
                threestart: true,
              });
            }
          }
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
      },
      pnext4(li) {
        this.page4 = true;
        this.opciay2 = false;
        this.opciay3 = false;
        this.opciay6 = false;
        this.opciay1 = false;
        this.opciay4 = true;
        this.ifboss1 = true;
        this.ifboss2 = false;
        this.menuname = li.name;
        this.detailList = [];
        this.menuId = li.id;
        if (this.level === "Beginner") {
          this.purl4 = this.url + "phonicsDetails";
        } else if (this.level === "Intermediate") {
          this.purl4 = this.url + "phonicsDetails";
        }
        this.$axios.post(this.purl4, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          menuId: this.menuId
        })).then(res => {
          for (let j in res.data.detailList) {
            this.detailList.push(res.data.detailList[j]); //属性
          }
          for (var i = 0; i < this.detailList.length; i++) {
            this.detailList[i].allstar = [{one2: false, two2: false, three2: false}];
            if (this.detailList[i].star == 0) {

            } else if (this.detailList[i].star == 1) {
              this.detailList[i].allstar[0].one2 = true;
            } else if (this.detailList[i].star == 2) {
              this.detailList[i].allstar[0].one2 = true;
              this.detailList[i].allstar[0].two2 = true;
            } else if (this.detailList[i].star == 3) {
              this.detailList[i].allstar[0].one2 = true;
              this.detailList[i].allstar[0].two2 = true;
              this.detailList[i].allstar[0].three2 = true;
            }
            //console.log( this.detailList);
          }
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })

      },
    },
    mounted(){
    },
    created() { //生命周期里接收参数
      this.local = localStorage.getItem('local');
      this.gameImage = localStorage.getItem('gameImage');
      this.firstName = localStorage.getItem('firstName');
      this.sum = localStorage.getItem('sumCoins');
      this.studentId = localStorage.getItem('studentId');
      this.pic = this.$axios.defaults.baseURL2;
      this.firstName1 = this.firstName;
      this.gameImage1 = this.gameImage;
      this.url1 = this.url + "course";
      this.$axios.post(this.url1, qs.stringify({
        studentId: localStorage.getItem('studentId')
      })).then(res => {
        this.courseList = res.data.courseList;
        this.phonics = res.data.phonics;
        this.changeBcolo1();
        this.next1();
      }, res => {
        alertMsg("You must be connected to the internet.<br>Please connect and try again.");
      })
    },
  }
</script>

<style scoped lang="less">
  body {
    width: 100%;
    padding: 0;
    // overflow-y: scroll;
    position: static;
  }

  .AreasP {
    color: white;
    display: inline-block;
    font-size: 1.5rem;
    opacity: 0.7;
    margin-right: 15px;
  }

  .Strengths{
    height: 100%;
    padding: 0 2%;
  }

  .strengthsL {
    position: relative;
    background: #1ac6d9;
    padding: 1% 0;
    border-radius: 30px;
    top: 8%;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
  }

.strengthsText {
    color: white;
    font-family: pepper,serif;
    font-size: 24px;
    font-weight: 600;
}

  .strengthsLogo{
    width: 10%;
    height: 15%;
    position: relative;
    left: 42%;
    top: 10%;
  }

  .strengthsAbbreviation{
    width: 100%;
    height: 100%;
    left: -4%;
    font-size: 2rem;
    font-family: 'kg';
    font-weight: 600;
    color: #9c9c9c;
    position: relative;
    text-align: center;
  }

  .strengthsAbbreviationAdvanced {
    width: 100%;
    height: 40px;
    left: -4%;
    font-size: 0.9rem;
    font-family: 'kg';
    font-weight: 500;
    color: #9c9c9c;
    position: relative;
    text-align: center;
    line-height: 40px;
  }

.strengthsLiAll{
    margin-top: -18%;
    position: relative;
}

.strengthsLi{
    width: 80%;
    height: 40PX;
    top: -10%;
    left: 7%;
    margin-top: 15px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

  .strengthsDiv {
    float: left;
    width: 33%;
    height: 95%;
    margin-top: 4%;
  }

  .strengthsLogo2{
    width: 80%;
    bottom: -30%;
    position: relative;
  }

  .strengthsLogo2Div{
    width: 15%;
  }

  .strengthsPresent{
    width: 35%;
    height: 100%;
    font-size: 1.2rem;
    color: #1ac6d9;
    position: relative;
    bottom: -30%;
  }

  .AreasP2 {
    color: white;
    font-weight: 700;
    display: inline-block;
    font-size: 1.5rem;
    border-radius: 30px;
    height: 30px;
    width: fit-content;
    padding: 0 15px;
  }

  .AreasDiv {
    float: right;
    margin-top: 5px;
  }

  .echartStyle{
    width: 50%;
    height: 80%;
  }

  .improvementList {
    width: 50%;
    float: left;
    display: flex;
    height: 30%;
    align-items: center;
  }

  .improvementId {
    width: 25%;
    color: #6d513d;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .improvementLetter {
    width: 65%;
    color: #6d513d;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .improvementButton {
    width: 60%;
    background-color: #f58948;
    display: inline-block;
    border-radius: 30px;
    color: white;
    font-size: 1.2rem;
    font-family: 'pepper', serif;
    border: 5px solid #ca642b;
    line-height: 40px;
  }

  .improvementPercent{
    width: 45%;
    color: #9b9a8c;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .historyList {
    position: absolute;
    width: 100%;
    top: 17%;
    overflow: hidden;
    height: 80%;
    overflow-y: auto;
  }

  .historyList::-webkit-scrollbar{
    display: none;
  }

  .historyLi{
    font-size: 1.3rem;
  }

  .overallLetter {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .letters {
    width: 15%;
    float: left;
  }

  .letterPercent {
    color: #985f30;
    font-family: 'kg';
    font-size: 2rem;
  }

  .letterPercent2 {
    color: #f3762f;
    font-family: 'kg';
    font-size: 2rem;
  }

  .history {
    width: 105%;
    height: 15%;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    padding-top: 2%;
  }

  .historyLabel {
    display: inline;
    width: 5%;
    margin: 3%;
    padding: 0.5% 3%;
    color: white;
    background: #2279ac;
    border-radius: 50px;
    font-family: 'pepper',serif;
    font-size: 1.5rem;
  }

  .intervalsPassText1 {
    font-family: kg,serif;
    color: #735138;
    font-size: 6.5rem;
    position: relative;
    left: 1%;
    width: -moz-fit-content;
    width: 220px;
    margin-top: 10%;
    text-align: right;
  }

  .intervalsPassAmazing {
    position: absolute;
    padding: 1.5% 4%;
    border-radius: 30px;
    color: white;
    font-family: 'kg', serif;
    top: 35%;
    left: 66%;
    background-color: #2999d5;
  }

  .intervalsPassGreat {
    position: absolute;
    padding: 1.5% 4%;
    border-radius: 30px;
    color: white;
    font-family: 'kg', serif;
    top: 35%;
    left: 72%;
    background-color: #f389a4;
  }

  .intervalsPassNice {
    position: absolute;
    padding: 1.5% 4%;
    border-radius: 30px;
    color: white;
    font-family: 'kg', serif;
    top: 35%;
    left: 70%;
    background-color: #f7af42;
  }

  .intervalsPassKeepTrying {
    position: absolute;
    padding: 1.5% 4%;
    border-radius: 30px;
    color: white;
    font-family: 'kg', serif;
    top: 35%;
    right: 10%;
    background-color: #2aba8f;
  }

  .intervalsPassClass {
    position: absolute;
    color: #9c8066;
    font-family: 'pepper', serif;
    font-size: 1.2rem;
    left: 65%;
    top: 75%;
  }

  .intervalsPassText2{
    font-family: kg,serif;
    color: #735138;
    font-size: 2.5rem;
    position: absolute;
    width: fit-content;
    left: 45%;
    top: 55%;
  }

  .intervalsPass7 {
    width: 50%;
    float: left;
    position: relative;
    top: 5%;
    left: 3%;
  }

  .intervalsPass30{
    width: 50%;
    float: left;
    position: relative;
    left: -5%;
    top: 5%;
  }

  .intervalsPass {
    color: #77766D;
    font-family: pepper,serif;
    font-size: 1.2rem;
    font-weight: 900;
    position: absolute;
    top: 90%;
    left: 24%;
  }

  .intervalsPosition {
    position: absolute;
    top: 25%;
    left: 34%;
    width: 65%;
  }

  .pointPosition{
    margin-top: -6.5%;
  }

  .intervalsHour {
    font-family: kg,serif;
    display: inline;
    color: #735138;
    font-size: 7rem;
  }

  .intervalsHours {
    font-family: kg,serif;
    display: inline;
    color: #735138;
    font-size: 4rem;
    margin-left: 3%;
  }

  .intervalsMins {
    font-family: kg,serif;
    display: inline;
    color: #735138;
    font-size: 3.5rem;
    margin-left: 3%;
  }

  .iClock {
    width: 25%;
    left: 6%;
    top: 6%;
    position: absolute;
  }

  .point1{
    font-size: 2rem;
    color: white;
    opacity: 1;
    font-family: pepper,serif;
  }

  .point2{
    font-size: 2rem;
    color: white;
    opacity: 0.5;
    font-family: pepper,serif;
  }

  .LearningReportRight {
    width: 50%;
    left: 75%;
    top: 50%;
    position: absolute;
    -webkit-transform: translate(-75%, -50%);
    transform: translate(-75%, -50%);
  }
  .LearningReportLeft {
    width: 50%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-75%, -50%);
  }
  .cLeft {
    position: absolute;
    width: 70px;
    height: 70px;
    left: -35px;
    top: 50%;
    background-color: #eeebc8;
    transform: translateY(-50%);
    border-radius: 70px;
  }
  .cRight{
    position: absolute;
    width: 70px;
    height: 70px;
    right: -35px;
    top: 50%;
    background-color: #eeebc8;
    transform: translateY(-50%);
    border-radius: 70px;
  }

  .cardLeft {
    position: absolute;
    left: 1%;
    top: 21%;
    width: 4%;
  }

  .cardRight {
    position: absolute;
    top: 21%;
    left: 90%;
    width: 4%;
  }

  .categoriesLi {
    background-color: #f58948;
    display: inline-block;
    width: 40%;
    height: 15%;
    border-radius: 30px;
    float: left;
    margin: 4% 0 0 6.6%;
    color: white;
    font-size: 1.5rem;
    font-family: 'pepper',serif;
    border: 5px solid #ca642b;
    line-height: 48px;
  }

  .categories {
    background-color: #eeebc8;
    height: 85%;
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
  }

  .areasDiv {
    height: 95%;
    width: 100%;
    display: flex;
  }

  .areas {
    background-color: #eeebc8;
    height: 80%;
    position: relative;
    border-radius: 50px;
    width: 60%;
  }

  .areasButton{
    width: 35%;
    height: fit-content;
  }

  .areasButton1{
    width: 80%;
    display: inline-block;
    height: 40px;
    border-radius: 30px;
    color: white;
    font-size: 1.5rem;
    font-family: 'pepper', serif;
    margin-top: 6%;
  }

  .areasButton2 {
    width: 80%;
    display: flex;
    height: 60%;
    justify-content: space-between;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
  }

  .areasButton3{
    width: 45%;
    display: inline-block;
    height: 40px;
    border-radius: 30px;
    color: white;
    margin-top: 10%;
    font-size: 1.5rem;
    font-family: 'pepper', serif;
  }

  .intervals {
    background-color: #eeebc8;
    height: 65%;
    width: 90%;
    position: relative;
    left: 50%;
    top: 10%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 130px;
  }

  .startSize{
    width: 100%;
  }

  .startP{
    font-family: pepper,serif;
    font-size: 1.8rem;
    color: white;
  }

  .phonicsLevel{
    height: 20%;
    text-align: left;
    padding-left: 95px;
  }

  .phonicsL{
    color: white;
    font-family: pepper,serif;
    font-size: 2.8rem;
  }

  .phonicsText {
    color: #7d4e28;
    font-family: pepper,serif;
    font-size: 1.8rem;
    font-weight: 500;
  }

  .title {
    color: white;
    font-size: 0.9rem;
    margin-top: 3%;
    text-decoration: underline;
    text-decoration-color: white;
  }

  .title1 {
    color: white;
    font-size: 0.9rem;
    margin-top: 3%;
  }


  .info {
    width: 100%;
    height: 100%;
    position: relative !important;
    // display: flex;
  }

  .contain {
    // display: flex;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    text-align: center;
    display: block;
    position: relative;
    //overflow: hidden;
  }

  .settinglist1 {
    display: block;
    float: none;
    height: 15%;
    width: 100%;
    position: relative !important;
  }

  .seleinput {
    // width: 100%;
    // height: 100%;
    // position: relative;
    // display: block;
  }

  .lefticon {
    width: 25%;
    padding-top: 5%;
    height: 75%;
    float: left;
    left: 2%;
    position: absolute;
  }

  tr {
    font-family: pepper;
  }

  .userName {
    margin-top: -30%;
    color: white;
    position: absolute;
    width: 100%;
    text-align: center;
    font-family: pepper;
  }

  .logoutsty1 {
    width: 85%;
    background-color: #007BB8;
    border-radius: 50px;
    height: 10%;
    margin-bottom: 5px;
    display: inline-block;
  }

  .logoutsty1 button {
    border-style: none;
    background: none;
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    height: 100%;
    padding: 0 10px;
    white-space: nowrap;
    font-family: pepper;
  }

  .logoutsty {
    width: 85%;
    background-color: #F96046;
    border-radius: 50px;
    height: 10%;
    display: inline-block;
  }

  .logoutsty button {
    border-style: none;
    background: none;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    height: 100%;
    padding: 0 10px;
    font-family: pepper;
  }

  //选择课程查看所有信息
  .chosedisplay {
    height: 80%;

  }
  .choseclass {
    margin-top: 7%;
  }
  .chosecourseL {
    width: 46%;
    margin-left: 3%;
    float: left;
  }

  .addchosecourseL {
    width: 50%;
    float: left;
    margin-top: 4%;
  }

  // .chosecourseR{
  // 	width: 50%;
  // 	float: left;
  // }
  .levels {
    margin-top: 3%;
    width: 44%;
    position: absolute;
    text-align: center;
    font-size: 1.5rem;
    font-family: pepper;
    color: #5C3400;
  }

  .addlevels {
    margin-top: 8%;
    width: 47%;
    position: absolute;
    text-align: center;
    font-size: 2rem;
    font-family: pepper;
    color: #5C3400;
  }

  .percent {
    position: absolute;
    display: inline-block;
    top: 20%;
    left: 40%;
    font-size: 20px;
    font-family: kg;
    color: white;
  }

  .progress2 {
    position: absolute;
    width: 100%;
    bottom: 10px;
    height: 11px;
    margin-bottom: 0;

    img {
        margin: 0 5px -3px 0;
      width: 2rem;
    }
  }

  .goldBG01 {
    background-color: #693100;
    border: 2px solid #874300;
    border-radius: 50px;
    width: 40%;
    height: 13px;
    text-align: left;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 27%;
  }

  .goldBG01 img {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    height: 100%;
    vertical-align: top;
  }

  .chamgold {
    width: 15% !important;
    left: 60%;
    top: 0;
    z-index: 2;
    margin-top: -4px;
    position: absolute;
  }

  .percent2 {
    color: white;
    position: absolute;
    font-family: pepper;
    width: 40%;
    left: 27%;
    height: 13px;
    font-size: 0.5rem;
    text-align: center;
    border: none;
    background: none;
  }

  .foncolor1 {
    color: #7d4e28;
    font-family: kg;
    font-size: 1rem;

  }

  .blueBG {
    background-color: #066B93;
    border: 4px solid #057BB8;
    border-radius: 50px;
    width: 145px;
    height: 40px;
    text-align: left;
    position: absolute;
    margin-top: -15%;
    margin-left: 4%;
    overflow: hidden;
  }

  .blueBG img {
    height: 40px;
  }

  .choseRW {
    height: 100%;
    margin-top: -2%;
  }

  // .choseRW{
  // 	 height: 100%;
  // 	 margin-top: -5%;
  // }
  .infoimg1 {
    height: 95%;
    overflow: hidden;
    overflow-y: scroll;
  }

  .infoimg1 ul {
    height: 100%;
    // margin-left: 30px;
  }

  .changewi {
    transform: scale(1.1);
  }

  .listimg1 {
    width: 25%;
    display: inline;
    margin: 10px 0 0 4.6%;
    /* background-image: url(http://localhost:8081/assets/img/BGselect.png); */
    background-color: #F8F5D1;
    float: left;
    padding: 5px 1%;
    border-radius: 20px;
  }

  .listimg2 {
    width: 25%;
    display: inline;
    margin: 10px 0 10px 4.6%;
    background-color: #F8F5D1;
    float: left;
    padding: 10px 1%;
    border-radius: 20px;
  }

  .listimg22 {
    width: 26% !important;
    display: inline;
    margin: 10px 0 10px 4% !important;
    background-color: #F8F5D1;
    float: left;
    padding: 10px 1%;
    border-radius: 20px;
  }

  .chosegamecord {
    height: 70%;
  }

  .listimg3 {
    margin: 0 10%;
    height: 100%;
    background-color: #F8F5D1;
    padding: 10px 5px 10px 5px;
    border-radius: 20px;
    overflow: hidden;
    overflow-y: scroll;
  }

  .neirong {
    width: 100%;
    display: inline-block;
  }

  .unit {
    color: white;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-family: pepper;
    font-size: 0.9rem;
    border-radius: 50px;
    background-color: #43BF76;
  }

  .unitname {
    font-family: pepper;
    color: #5C3400;
    font-size: 0.7rem;
    height: 32px;
  }

  .unitcoin {
    font-family: pepper;
    color: #007BB8;
    margin: 5px 0 0 0;
  }

  .unitcoin img {
    width: 1.1rem;
  }

  .littlestar {
    width: 1.1rem;
  }

  .chamcup {
    width: 23%;
    float: right;
    margin-top: -34%;
    margin-right: 10%;
    position: relative;
  }

  .bluecicle {
    border: 6px solid #007BB8;
    border-radius: 50%;
    height: 130px;
    width: 130px;
    text-align: center;
    display: inline-block;
  }

  .imgstyle {
    border-radius: 50%;
    width: 122px;
    height: 122px;
    border: 4px solid #0D627C;
  }

  .imgBstyle {
    width: 100%;
    margin-top: -15%;
  }

  .rightmenu {
    width: 70%;
    height: 85%;
    padding-top: 5%;
    position: relative;
    float: right;
  }

  .topMenu {
    width: 70%;
    float: left;
    height: 25%;
  }

  .tabtit {
    color: white;
    background-color: #007BB8;
    border-radius: 50px;
    padding: 2px 15px;
    font-family: pepper,serif;
  }

  .menu1 {
    float: left;
    height: 100%;
    width: 36%;
    border-radius: 20px;
    background-color: #43BF76;
  }

  .menu2 {
    float: left;
    height: 100%;
    width: 36%;
    border-radius: 20px;
    background-color: #FF9239;
  }

  .menu2Change {
    float: left;
    height: 100%;
    width: 60%;
    border-radius: 20px;
    background-color: #FF9239;
  }

  .buttonsty {
    border-style: none;
    background: none;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    height: 40%;
    padding: 0 10px;
    font-family: pepper;
  }

  .bottommemu {
    width: 95%;
    height: 80%;
    border-radius: 15px;
    float: left;
    margin-top: -9%;
  }

  .listmemu {
    text-align: left;
    margin: 10px 20px 15px 20px;
  }

  .listmemu span {
    color: white;
    font-family: pepper;
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .opciay {
    opacity: 1 !important;
  }

  .opacity {
    opacity: 0.5;
  }

  .spanimg {
    width: 1rem;
    margin: 0 5px;
    vertical-align: bottom;
  }

  .spanimg2{
    width: 2rem;
    margin: -2px 3px;
  }

  //修改头像page
  .withcolor {
    width: 75%;
    text-align: center;
    margin: 0 auto;
    top: 7%;
    background-color: #FCFFD1;
    height: 80%;
    display: block;
    border-radius: 50px;
    position: relative;
  }

  .close {
    width: 50px;
    height: 50px;
    float: right;
    margin: -10px;
    border-radius: 50px;
    text-align: center;
  }

  .close img {
    height: 50px;
    width: 50px;
    margin: 0 auto;
  }

  .cicleimg {
    border-radius: 50%;
    width: 40%;
    text-align: center;
    float: left;
    display: inline-block;
    margin-top: 4rem;
  }

  .cicleimg1 {
    border-radius: 50%;
    width: 40%;
    text-align: center;
    float: left;
    display: inline-block;
    margin-top: 7%;
  }

  .cicleimgstyle {
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
  }

  .addimg {
    position: absolute;
    left: 140px;

  }

  .listimg {
    width: 25%;
    margin: 10px 10px 0 10px;
    border-radius: 20px;
  }

  .infoimg {
    width: 60%;
    height: 70%;
    position: absolute;
    overflow: hidden;
    overflow-y: scroll;
    float: right;
    right: 0;
    margin-top: 10%;
  }

  .infomesse {
    width: 60%;
    float: right;
    margin-top: 10%;
  }

  .inputspan {
    color: #007BB8;
    font-size: 1.2rem;
    font-family: KG;
    width: 20%;
    text-align: right;
    display: inline-block;
  }

  .inputu {
    border: none;
    background: none;
    color: #007BB8;
    text-align: center;
    font-size: 1.2rem;
    font-family: PEPPER;
    font-weight: bold;
    width: 60%;
  }

  .save1 {
    margin-top: 10px;
  }

  .save1 button {
    width: 50%;
    border-style: none;
    height: 50px;
    border-radius: 30px;
    background: #007BB8;
    color: white;
    font-size: 1.5rem;
    font-family: KG,serif;
  }

  .save {
    margin-top: 20px;
  }

  .save button {
    width: 40%;
    border-style: none;
    height: 50px;
    border-radius: 30px;
    background: #007BB8;
    color: white;
    font-size: 1.5rem;
    font-family: KG;
  }

  //底部菜单bar
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
    position: absolute;
    font-size: x-large;
    max-height: 70%;
    white-space: nowrap;
    min-height: 50%;
    border: none;
    background: none;
  }

  .leftmar {
    left: 13%
  }

  .leftmar2 {
    left: 41%;
  }

  .animapng7 {
    height: 100%;
    width: 26%;
    color: white;
    margin-top: 0;
    margin-left: 1%;
    margin-right: 1%;
    background: none;
    border: none;
    text-align: center;
  }

  .imgpart {
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
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
    bottom: 0;
  }

  .backgrgreen {
    background-color: #43BF76;
  }

  .backgrorang {
    background-color: #FF9239;
  }

  .fade-enter-active {
    transition: all 0.6s;
  }

  .fade-leave-active {
    transition: all 0.6s;
  }

  .fade-enter {
    transform: translate3d(0, 100%, 0);
  }

  .fade-leave-to {
    transform: translate3d(0, 0, 0);
    // position: fixed;
    // transform: translate3d(0,-99%,  0);
  }

  .fade1-enter-active {
    transition: all 0.6s;
  }

  .fade1-leave-active {
    transition: all 0.6s;
  }

  .fade1-enter {
    transform: translate3d(100%, 0, 0);
  }

  .fade1-leave-to {
    //transform: translate3d(100%, 0, 0);
    transform: translate3d(-99%, 0, 0);
  }

  .choicephonics {
    width: 33.3%;
    float: left;
    position: relative;
    margin-top: 20px;
  }

  .progress {
    position: absolute;
    width: 100%;
    bottom: 0;
    margin-bottom: 0;

    img {
      width: 40%;
      vertical-align: bottom;
    }
  }

  .unitnamep {
    font-family: pepper;
    color: #5C3400;
    font-size: 1.5rem;
  }

  .walkerbutton {
    width: 100%;
    left: 0;
    height: 40%;
    border-style: none;
    background: none;
    bottom: 0%;

    img {
      width: 14%;
    }
  }

  @media only screen and (max-width: 569px) {
    .strengthsAbbreviation {
      width: 100%;
      height: 100%;
      left: -4%;
      font-size: 0.8rem;
      font-family: 'kg';
      font-weight: 600;
      color: #9c9c9c;
      position: relative;
      line-height: 20px;
      text-align: center;
    }
    .strengthsLogo2 {
      width: 80%;
      bottom: -15%;
      position: relative;
    }
    .strengthsL {
      position: relative;
      background: #1ac6d9;
      padding: 1% 0;
      border-radius: 30px;
      top: 8%;
      width: 98%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .strengthsLi {
      width: 80%;
      height: 15PX;
      top: -10%;
      left: -3%;
      margin-top: 0px;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .strengthsAbbreviationAdvanced{
      width: 100%;
      height: 20px;
      font-size: 0.7rem;
      font-family: 'pepper';
      color: #9c9c9c;
      position: relative;
      text-align: center;
      line-height: 20px;
      white-space: nowrap;
      /* text-overflow: ellipsis; */
      overflow: hidden;
      left: 0%;
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
    .strengthsPresent {
      width: 15%;
      height: 100%;
      font-size: 0.7rem;
      color: #1ac6d9;
      position: relative;
      bottom: -30%;
      transform: scale(0.8);
    }
    .strengthsDiv{
      float: left;
      width: 33%;
      height: 95%;
      margin-top: 2%;
    }
    .strengthsText{
      color: white;
      font-family: pepper,serif;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
    }
    .improvementButton {
      width: 90%;
      background-color: #f58948;
      display: inline-block;
      border-radius: 30px;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      border: 2px solid #ca642b;
      line-height: 15px;
      padding: 0 2px;
    }
    .history {
      width: 120%;
      height: 15%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      padding-top: 2%;
    }
    .historyList {
      position: absolute;
      width: 105%;
      top: 22%;
      left: -4%;
      overflow: hidden;
      height: 77%;
      overflow-y: auto;
    }
    .littlestar {
      width: 0.8rem;
    }
    .historyLi {
      font-size: 0.7rem;
    }
    .historyLabel {
      display: inline;
      width: 5%;
      margin: 2%;
      padding: 0.5% 2%;
      color: white;
      background: #2279ac;
      border-radius: 50px;
      font-family: 'pepper', serif;
      font-size: 0.7rem;
    }
    .improvementButton {
      width: 60%;
      background-color: #f58948;
      display: inline-block;
      border-radius: 30px;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      border: 2px solid #ca642b;
      line-height: 15px;
    }
    .improvementPercent {
      width: 45%;
      color: #9b9a8c;
      font-weight: 600;
      font-size: 0.7rem;
    }
    .improvementLetter {
      width: 65%;
      color: #6d513d;
      font-weight: 600;
      font-size: 0.7rem;
    }
    .improvementButton {
      width: 60%;
      background-color: #f58948;
      display: inline-block;
      border-radius: 30px;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      border: 2px solid #ca642b;
      line-height: 40px;
    }
    .improvementId {
      width: 15%;
      color: #6d513d;
      font-weight: 600;
      font-size: 0.7rem;
    }
    .AreasDiv {
      float: right;
      margin-top: 1px;
    }
    .AreasP {
      color: white;
      display: inline-block;
      font-size: 0.7rem;
      opacity: 0.7;
      margin-right: 15px;
    }
    .AreasP2 {
      color: white;
      font-weight: 700;
      display: inline-block;
      font-size: 0.7rem;
      border-radius: 30px;
      height: 15px;
      width: fit-content;
      padding: 0 10px;
    }
    .areas {
      background-color: #eeebc8;
      height: 75%;
      position: relative;
      border-radius: 20px;
      width: 60%;
      margin-top: 2%;
    }
    .areasButton1 {
      width: 80%;
      display: inline-block;
      height: 20px;
      border-radius: 30px;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      margin-top: 6%;
    }

    .cRight {
      width: 30px;
      height: 30px;
      right: -15px;
    }
    .cLeft {
      width: 30px;
      height: 30px;
      left: -15px;
    }
    .letterPercent {
      font-size: 1.2rem;
    }
    .intervalsPassNice {
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 33%;
      font-size: 0.7rem;
      left: 70%;
      background-color: #f7af42;
    }
    .intervalsPassAmazing {
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 33%;
      font-size: 0.7rem;
      left: 57%;
    }
    .pointPosition {
      margin-top: -6%;
    }
    .point1 {
      font-size: 1rem;
    }
    .point2 {
      font-size: 1rem;
    }
    .intervalsPass30 {
      left: -3%;
    }
    .intervalsPassClass {
      position: absolute;
      color: #9c8066;
      font-family: 'pepper', serif;
      font-size: 0.7rem;
      left: 48%;
      top: 75%;
    }
    .intervalsPassText2 {
      font-family: kg,serif;
      color: #735138;
      font-size: 1rem;
      position: absolute;
      width: fit-content;
      left: 45%;
      top: 55%;
    }
    .intervalsPassText1{
      font-family: kg,serif;
      color: #735138;
      font-size: 2.5rem;
      position: relative;
      left: -14%;
      width: -moz-fit-content;
      /* width: fit-content; */
      margin-top: 10%;
      text-align: right;
      width: 100px;
    }
    .intervalsPassKeepTrying {
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 33%;
      font-size: 0.7rem;
      right: 2%;
      background-color: #2aba8f;
    }
    .intervalsPassGreat{
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 33%;
      font-size: 0.7rem;
      right: 0;
      background-color: #f389a4;
    }
    .intervalsPosition {
      position: absolute;
      top: 25%;
      left: 30%;
      width: 65%;
    }
    .intervalsHours {
      font-size: 1rem;
      margin-left: 2%;
    }
    .intervalsMins {
      font-size: 1rem;
    }
    .intervalsHours {
      font-size: 1rem;
    }
    .intervalsHour {
      font-size: 2rem;
    }
    .intervalsPass {
      left: 2%;
      font-size: 0.7rem;
      width: 98%;
    }
    .iClock {
      width: 23%;
      top:7%;
    }
    .cardLeft {
      top: 25%;
    }

    .cardRight {
      top: 25%;
    }

    .categoriesLi {
      background-color: #f58948;
      display: inline-block;
      width: 47%;
      height: 14%;
      border-radius: 30px;
      float: left;
      margin: 4% 0 0 1%;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      border: 2px solid #ca642b;
      line-height: 13px;
    }

    .categories {
      background-color: #eeebc8;
      height: 85%;
      width: 90%;
      position: relative;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      border-radius: 15px;
      top: 3%;
    }
    .phonicsLevel {
      padding-left: 30px;
    }
    .spanimg2 {
      margin: -2px 0;
    }
    .menu2Change {
      width: 65%;
      border-radius: 10px;
    }
    .menu1 {
      width: 35%;
      border-radius: 10px;
    }
    .menu2 {
      width: 35%;
      border-radius: 10px;
    }
    .topMenu {
      height: 28%;
    }
    .topMenu {
      height: 28%;
    }
    .progress2 img {
      width: 0.8rem;
      margin: 0 1px -2px 0;
    }
    .listmemu {
      margin: 0 20px 0 20px;
    }
    .spanimg2 {
      width: 0.7rem;
    }
    .buttonsty {
      font-size: 12px;
      height: 30%;
    }
    .progress2{
      height: 12px;
    }
    .startP{
      font-size: 0.6rem;
    }
    .choicephonics{
      margin-top: 10px;
    }
    .phonicsText{
      font-size: 0.6rem;
    }
    .phonicsL{
      font-size: 0.9rem;
    }
    .listimg1 {
      height: 65px;
    }
    .fontsize {
      bottom: 16%;
      position: absolute;
      font-size: 1.2rem;
      margin-left: 2%;
    }

    .lefticon {
      padding-top: 3%;
    }

    .logoutsty button {
      font-size: 0.8rem;
    }

    .logoutsty1 button {
      font-size: 0.7rem;
    }

    .blueBG {
      width: 115px;
      height: 35px;
    }

    .blueBG img {
      height: 35px;
    }

    .neirong {
      font-size: 0.8rem;
    }

    .listmemu span {
      font-size: 0.8rem;
    }

    .listimg2 {
      width: 25%;
      margin: 10px 0 0 20px;
    }

    .cicleimg {
      width: 35%;
      margin-top: 3rem;
    }

    .infomesse {
      width: 65%;
    }

    .cicleimgstyle {
      width: 8rem;
      height: 8rem;
    }

    .listimg {
      margin: 10px 0 0 10px;
    }

    .addimg {
      left: 100px;
    }

    .rightmenu {
      height: 75%;
    }

    .settinglist {
      height: 11%;
    }
    .chamgold {
      margin-top: 0;
    }
    .unitnamep {
      font-size: 0.5rem;
    }
  }

  @media only screen and (min-device-height: 570px) and (max-device-height: 735px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 570px) and (max-device-height: 735px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 570px) and (max-width: 735px){
    .menu2Change{
      float: left;
      height: 100%;
      width: 64%;
      border-radius: 20px;
      background-color: #FF9239;
    }
    .strengthsLiAll{
      margin-top: -20%;
      position: relative;
    }
    .strengthsAbbreviation{
      width: 100%;
      height: 100%;
      left: 0%;
      font-size: 0.8rem;
      font-family: 'kg';
      font-weight: 600;
      color: #9c9c9c;
      position: relative;
      line-height: 28px;
      text-align: center;
    }
    .strengthsLogo {
      width: 10%;
      height: 15%;
      position: relative;
      left: 45%;
      top: 10%;
    }
    .strengthsL{
      position: relative;
      background: #1ac6d9;
      padding: 1% 0;
      border-radius: 30px;
      top: 8%;
      width: 98%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .strengthsLi {
      width: 80%;
      height: 20PX;
      top: -10%;
      left: 1%;
      margin-top: 2px;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .strengthsAbbreviationAdvanced {
      width: 100%;
      height: 30px;
      font-size: 0.7rem;
      font-family: 'kg';
      color: #9c9c9c;
      position: relative;
      text-align: center;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      left: 0%;
    }
    .strengthsPresent {
      width: 15%;
      height: 100%;
      font-size: 0.7rem;
      color: #1ac6d9;
      position: relative;
      font-weight: 600;
      bottom: -30%;
      transform: scale(0.9);
      line-height: 18px;
    }
    .strengthsDiv{
      float: left;
      width: 33%;
      height: 95%;
      margin-top: 2%;
    }
    .strengthsText{
      color: white;
      font-family: pepper,serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 15px;
    }
    .historyList {
      position: absolute;
      width: 103%;
      top: 23%;
      left: -3%;
      overflow: hidden;
      height: 73%;
      overflow-y: auto;
    }
    .historyLi {
      font-size: 0.7rem;
    }
    .historyLabel {
      display: inline;
      width: 5%;
      margin: 3%;
      padding: 0.5% 1.5%;
      color: white;
      background: #2279ac;
      border-radius: 50px;
      font-family: 'pepper', serif;
      font-size: 0.7rem;
    }
    .improvementButton {
      width: 85%;
      background-color: #f58948;
      display: inline-block;
      border-radius: 30px;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      border: 2px solid #ca642b;
      line-height: 15px;
    }
    .improvementPercent {
      width: 45%;
      color: #9b9a8c;
      font-weight: 600;
      font-size: 0.7rem;
    }
    .improvementLetter {
      width: 65%;
      color: #6d513d;
      font-weight: 600;
      font-size: 0.7rem;
    }
    .improvementId {
      width: 25%;
      color: #6d513d;
      font-weight: 600;
      font-size: 0.7rem;
    }
    .menu2Change {
      border-radius: 10px;
    }
    .menu2 {
      border-radius: 10px;
    }
    .menu1 {
      border-radius: 10px;
    }
    .AreasP {
      color: white;
      display: inline-block;
      font-size: 0.8rem;
      opacity: 0.7;
      margin-right: 15px;
    }
    .AreasDiv {
      float: right;
      margin-top: 3px;
    }
    .AreasP2 {
      color: white;
      font-weight: 700;
      display: inline-block;
      font-size: 0.7rem;
      border-radius: 20px;
      height: 20px;
      width: fit-content;
      padding: 0px 12px;
      line-height: 20px;
    }
    .areas {
      background-color: #eeebc8;
      height: 80%;
      position: relative;
      border-radius: 25px;
      width: 60%;
    }
    .areasButton1 {
      width: 80%;
      display: inline-block;
      height: 20px;
      border-radius: 30px;
      color: white;
      font-size: 0.8rem;
      font-family: 'pepper', serif;
      margin-top: 6%;
    }
    .letterPercent {
      font-size: 1.6rem;
    }
    .cLeft {
      width: 36px;
      height: 36px;
      left: -18px;
    }
    .cRight {
      width: 36px;
      height: 36px;
      right: -16px;
    }
    .intervalsPassNice {
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 35%;
      left: 70%;
      font-size: 0.7rem;
      background-color: #f7af42;
    }
    .intervalsPassAmazing {
      padding: 0.5% 3%;
      top: 35%;
      left: 54%;
      font-size: 0.7rem;
    }
    .intervalsPassKeepTrying {
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 35%;
      font-size: 0.7rem;
      right: 10%;
      background-color: #2aba8f;
    }

    .intervalsPassGreat{
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 35%;
      font-size: 0.7rem;
      left: 63%;
      background-color: #f389a4;
    }

    .intervalsPassText1 {
      font-family: kg,serif;
      color: #735138;
      font-size: 2.7rem;
      position: relative;
      left: -9%;
      width: 100px;
      margin-top: 12%;
      text-align: right;
    }

    .intervalsPassText2 {
      font-size: 1rem;
      left: 44%;
      top: 55%;
    }

    .intervalsPassClass {
      font-size: 0.7rem;
      left: 53%;
      top: 71%;
    }

    .intervalsPass30 {
      left: 0;
    }

    .point1 {
      font-size: 1rem;
    }
    .point2 {
      font-size: 1rem;
    }
    .pointPosition {
      margin-top: -7%;
    }
    .intervalsPass{
      font-size: 0.7rem;
      left: 8%;
      width: 85%;
    }
    .intervalsMins {
      font-size: 2rem;
    }
    .intervalsHours {
      font-size: 2rem;
    }
    .intervalsHour {
      font-size: 3rem;
    }
    .iClock {
      width: 25%;
    }
    .cardLeft {
      top: 22%;
      width: 5%;
    }
    .cardRight {
      top: 22%;
      width: 5%;
    }
    .categories {
      border-radius: 20px;
    }
    .categoriesLi{
      background-color: #f58948;
      display: inline-block;
      width: 43%;
      height: 15%;
      border-radius: 30px;
      float: left;
      margin: 4% 0 0 4.5%;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      border: 2px solid #ca642b;
      line-height: 20px;
      /* transform: scale(0.6); */
    }
    .phonicsLevel {
      padding-left: 45px;
    }
    .spanimg2 {
      width: 0.7rem;
    }
    .buttonsty {
      font-size: 0.9rem;
      height: 30%;
    }
    .progress2{
      height: 17px;
    }
    .progress2{
      height: 15px;
    }
    .startP{
      font-size: 0.8rem;
    }
    .progress2 img{
      width: 1rem;
      margin: 0 5px -2px 0;
    }
    .choicephonics{
      margin-top: 10px;
    }
    .listmemu{
      margin: 0 20px 5px 20px;
    }
    .phonicsText{
      font-size: 0.7rem;
    }
    .phonicsL{
      font-size: 1rem;
    }
    .unitnamep {
      font-size: 0.5rem;
    }
  }

  @media only screen and (min-device-height: 736px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 736px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 736px) and (max-width: 811px) {
    .strengthsAbbreviation {
      width: 100%;
      height: 100%;
      left: 0%;
      font-size: 1rem;
      font-family: 'kg';
      font-weight: 600;
      color: #9c9c9c;
      position: relative;
      text-align: center;
      line-height: 27px;
    }
    .strengthsLi {
      width: 80%;
      height: 20PX;
      top: -10%;
      left: 0%;
      margin-top: 0px;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .strengthsAbbreviationAdvanced {
      width: 100%;
      height: 30px;
      font-size: 0.7rem;
      font-family: 'kg';
      color: #9c9c9c;
      position: relative;
      text-align: center;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      left: 0%;
    }
    .strengthsPresent {
      width: 15%;
      height: 100%;
      font-size: 0.7rem;
      color: #1ac6d9;
      position: relative;
      font-weight: 600;
      bottom: -30%;
      transform: scale(0.9);
      line-height: 18px;
    }
    .strengthsDiv{
      float: left;
      width: 33%;
      height: 95%;
      margin-top: 4%;
    }
    .strengthsText{
      color: white;
      font-family: pepper,serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 15px;
    }
    .areasButton1 {
      width: 80%;
      display: inline-block;
      height: 25px;
      border-radius: 30px;
      color: white;
      font-size: 0.8rem;
      font-family: 'pepper', serif;
      margin-top: 6%;
      line-height: 25px;
    }
    .historyList {
      position: absolute;
      width: 105%;
      top: 20%;
      left: -4%;
      overflow: hidden;
      height: 80%;
      overflow-y: auto;
    }
    .historyLi {
      font-size: 0.7rem;
    }
    .historyLabel {
      display: inline;
      width: 5%;
      margin: 3%;
      padding: 0.5% 2.5%;
      color: white;
      background: #2279ac;
      border-radius: 50px;
      font-family: 'pepper', serif;
      font-size: 0.7rem;
    }
    .improvementPercent {
      width: 45%;
      color: #9b9a8c;
      font-weight: 600;
      font-size: 1rem;
    }
    .improvementButton {
      width: 65%;
      background-color: #f58948;
      display: inline-block;
      border-radius: 30px;
      color: white;
      font-size: 12px;
      font-family: 'pepper', serif;
      border: 2px solid #ca642b;
      line-height: 15px;
      padding: 0 5px;
    }
    .improvementLetter {
      width: 65%;
      color: #6d513d;
      font-weight: 600;
      font-size: 1rem;
    }
    .improvementId {
      width: 20%;
      color: #6d513d;
      font-weight: 600;
      font-size: 1rem;
    }
    .AreasP2 {
      color: white;
      font-weight: 700;
      display: inline-block;
      font-size: 0.8rem;
      border-radius: 30px;
      height: 20px;
      line-height: 20px;
      width: fit-content;
      padding: 0 15px;
    }
    .AreasP {
      color: white;
      display: inline-block;
      font-size: 0.8rem;
      opacity: 0.7;
      margin-right: 15px;
    }
    .AreasDiv {
      float: right;
      margin-top: 3px;
    }
    .areas {
      background-color: #eeebc8;
      height: 80%;
      position: relative;
      border-radius: 25px;
      width: 60%;
    }
    .menu2 {
      float: left;
      height: 100%;
      width: 36%;
      border-radius: 10px;
      background-color: #FF9239;
    }
    .menu1 {
      float: left;
      height: 100%;
      width: 36%;
      border-radius: 10px;
      background-color: #43BF76;
    }
    .menu2Change {
      border-radius: 10px;
    }
    .letterPercent {
      font-size: 1.6rem;
    }
    .cLeft {
      width: 36px;
      height: 36px;
      left: -18px;
    }
    .cRight {
      width: 36px;
      height: 36px;
      right: -16px;
    }
    .pointPosition {
      margin-top: -7%;
    }
    .point2 {
      font-size: 1rem;
    }
    .point1 {
      font-size: 1rem;
    }
    .intervalsPassClass {
      position: absolute;
      color: #9c8066;
      font-family: 'pepper', serif;
      font-size: 0.7rem;
      left: 65%;
      top: 81%;
    }
    .intervalsPassText2 {
      font-family: kg,serif;
      color: #735138;
      font-size: 1.5rem;
      position: absolute;
      width: fit-content;
      left: 45%;
      top: 55%;
    }
    .intervalsPassText1 {
      font-family: kg,serif;
      color: #735138;
      font-size: 3rem;
      position: relative;
      left: 8%;
      width: 80px;
      text-align: right;
      margin-top: 15%;
    }
    .intervalsPassKeepTrying {
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 35%;
      right: -5%;
      font-size: 0.7rem;
      background-color: #2aba8f;
    }

    .intervalsPassGreat{
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 35%;
      right: -5%;
      font-size: 0.7rem;
      background-color: #f389a4;
    }

    .intervalsPassNice {
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 35%;
      left: 85%;
      font-size: 0.7rem;
      background-color: #f7af42;
    }

    .intervalsPassAmazing {
      position: absolute;
      padding: 0.5% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 35%;
      left: 70%;
      font-size: 0.7rem;
      background-color: #2999d5;
    }

    .intervalsPass30 {
      left: -5%;
    }
    .intervalsPass7 {
      left: -5%;
    }
    .intervalsPass {
      font-size: 0.7rem;
    }
    .intervalsMins {
      font-size: 2rem;
    }

    .intervalsHours {
      font-size: 2rem;
    }

    .intervalsHour {
      font-size: 3rem;
    }

    .iClock {
      width: 25%;
    }

    .cardLeft {
      top: 26%;
      width: 5%;
    }

    .cardRight {
      top: 26%;
      width: 5%;
    }

    .categories {
      border-radius: 30px;
    }

    .categoriesLi {
      background-color: #f58948;
      display: inline-block;
      width: 40%;
      height: 15%;
      border-radius: 30px;
      float: left;
      margin: 4% 0 0 6.5%;
      color: white;
      font-size: 0.8rem;
      font-family: 'pepper', serif;
      border: 3px solid #ca642b;
      line-height: 25px;
    }
    .phonicsLevel {
      padding-left: 50px;
    }
    .spanimg2 {
      width: 1rem;
      margin: -3px 0;
    }
    .buttonsty {
      font-size: 0.9rem;
      padding: 0 10px 5px;
    }
    .progress2{
      height: 20px;
    }
    .startP{
      font-size: 0.9rem;
    }
    .progress2 img{
      width: 1.2rem;
    }
    .choicephonics{
      margin-top: 10px;
    }
    .listmemu{
      margin: 0 20px 5px 20px;
    }
    .phonicsText{
      font-size: 0.8rem;
    }
    .phonicsL{
      font-size: 1rem;
    }
    .unitnamep {
      font-size: 0.5rem;
    }
    .lefticon {
      padding-top: 5%;
    }

    .cicleimg {
      margin-top: 10%;
    }

    .cicleimg1 {
      margin-top: 6%;
    }

    .levels {
      width: 44%;
    }

    .infoimg {
      margin-top: 7%;
    }

    .addlevels {
      margin-top: 9%;
    }

    .withcolor {
      top: 10%;
    }
    .progress2 {
      height: 15px;
    }
  }

  @media only screen and (min-device-height: 812px) and (max-device-height: 894px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 812px) and (max-device-height: 894px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 812px) and (max-width: 894px) {

    .menu2{
      float: left;
      height: 100%;
      width: 36%;
      border-radius: 15px;
      background-color: #FF9239;
    }
    .menu2Change{
      float: left;
      height: 100%;
      width: 60%;
      border-radius: 15px;
      background-color: #FF9239;
    }
    .menu1 {
      float: left;
      height: 100%;
      width: 36%;
      border-radius: 15px;
      background-color: #43BF76;
    }
    .strengthsAbbreviation {
      width: 100%;
      height: 100%;
      left: -4%;
      font-size: 1rem;
      font-family: 'kg';
      font-weight: 600;
      color: #9c9c9c;
      position: relative;
      line-height: 27px;
      text-align: center;
    }
    .strengthsLi {
      width: 80%;
      height: 20PX;
      top: -10%;
      left: 0%;
      margin-top: 2px;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .strengthsAbbreviationAdvanced {
      width: 100%;
      height: 30px;
      font-size: 0.7rem;
      font-family: 'kg';
      color: #9c9c9c;
      position: relative;
      text-align: center;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      left: 0%;
    }
    .strengthsPresent {
      width: 15%;
      height: 100%;
      font-size: 0.7rem;
      color: #1ac6d9;
      position: relative;
      bottom: -30%;
      line-height: 17px;
    }
    .strengthsDiv{
      float: left;
      width: 33%;
      height: 95%;
      margin-top: 2%;
    }
    .strengthsText{
      color: white;
      font-family: pepper,serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 15px;
    }

    .historyList {
      position: absolute;
      width: 105%;
      top: 22%;
      overflow: hidden;
      height: 77%;
      overflow-y: auto;
      left: -3%;
    }
    .historyLi {
      font-size: 0.7rem;
    }
    .historyLabel {
      display: inline;
      width: 5%;
      margin: 3%;
      padding: 0.5% 3%;
      color: white;
      background: #2279ac;
      border-radius: 50px;
      font-family: 'pepper', serif;
      font-size: 0.7rem;
    }
    .improvementPercent {
      width: 45%;
      color: #9b9a8c;
      font-weight: 600;
      font-size: 1rem;
    }
    .improvementButton {
      width: 60%;
      background-color: #f58948;
      display: inline-block;
      border-radius: 30px;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      border: 2px solid #ca642b;
      line-height: 20px;
    }
    .improvementLetter {
      width: 65%;
      color: #6d513d;
      font-weight: 600;
      font-size: 1rem;
    }
    .improvementId {
      width: 25%;
      color: #6d513d;
      font-weight: 600;
      font-size: 1rem;
    }
    .AreasDiv {
      float: right;
      margin-top: 2px;
    }
    .AreasP2 {
      color: white;
      font-weight: 700;
      display: inline-block;
      font-size: 0.8rem;
      border-radius: 30px;
      height: 20px;
      width: fit-content;
      padding: 0 10px;
      line-height: 20px;
    }
    .AreasP {
      color: white;
      display: inline-block;
      font-size: 0.8rem;
      opacity: 0.7;
      margin-right: 15px;
    }
    .areas {
      background-color: #eeebc8;
      height: 80%;
      position: relative;
      border-radius: 25px;
      width: 60%;
    }
    .areasButton1 {
      width: 80%;
      display: inline-block;
      height: 20px;
      border-radius: 30px;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      margin-top: 6%;
      line-height: 20px;
    }
    .phonicsText {
      font-size: 1rem;
    }
    .letterPercent {
      font-size: 1.6rem;
    }
    .cLeft {
      width: 36px;
      height: 36px;
      left: -18px;
    }
    .cRight {
      width: 36px;
      height: 36px;
      right: -16px;
    }
    .pointPosition {
      margin-top: -5.5%;
    }
    .point1 {
      font-size: 1rem;
    }
    .point2 {
      font-size: 1rem;
    }
    .intervalsPassClass {
      position: absolute;
      color: #9c8066;
      font-family: 'pepper', serif;
      font-size: 0.7rem;
      left: 65%;
      top: 81%;
    }

    .intervalsPassText2 {
      font-family: kg,serif;
      color: #735138;
      font-size: 1.5rem;
      position: absolute;
      width: fit-content;
      left: 42%;
      top: 50%;
    }

    .intervalsPassText1 {
      font-family: kg,serif;
      color: #735138;
      font-size: 3rem;
      position: relative;
      left: 1%;
      text-align: right;
      width: 100px;
      margin-top: 10%;
    }

    .intervalsPass7 {
      width: 50%;
      float: left;
      position: relative;
      top: 5%;
      left: -2%;
    }

    .intervalsPassKeepTrying {
      position: absolute;
      padding: 0.5% 3%;
      font-size: 0.7rem;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 32%;
      right: 6%;
      background-color: #2aba8f;
    }

    .intervalsPassAmazing {
      padding: 0.5% 3%;
      top: 35%;
      left: 66%;
      font-size: 0.7rem;
    }

    .intervalsPassNice {
      padding: 0.5% 3%;
      top: 35%;
      left: 78%;
      font-size: 0.7rem;
    }

    .intervalsPassGreat{
      position: absolute;
      padding: 0.5% 3%;
      font-size: 0.7rem;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 32%;
      right: 6%;
      background-color: #f389a4;
    }

    .intervalsPass30 {
      left: -4%;
    }

    .intervalsPass {
      font-size: 0.7rem;
    }
    .intervalsMins {
      font-size: 2rem;
    }
    .intervalsHours {
      font-size: 2rem;
    }
    .intervalsHour {
      font-size: 3rem;
    }
    .iClock {
      width: 21%;
    }
    .cardRight {
      top: 26%;
    }
    .cardLeft {
      top: 26%;
    }
    .categories {
      border-radius: 30px;
    }

    .categoriesLi {
      border-radius: 30px;
      margin: 3.5% 0 0 6.6%;
      font-size: 0.8rem;
      line-height: 23px;
      border: 2px solid #ca642b;
    }

    .phonicsLevel {
      padding-left: 50px;
    }
    .spanimg2{
      width: 1rem;
    }
    .progress2{
      height: 23px;
    }
    .progress2 img{
      width: 1.3rem;
    }
    .startP{
      font-size: 1rem;
    }
    .listmemu{
      margin: 0 20px 0 20px;
    }
    .phonicsL{
      font-size: 1rem;
    }
    .infoimg {
      height: 75%;
      margin-top: 5%;
    }

    .chosedisplay {
      // margin-top: 4%;
    }

    .addchosecourseL {
      margin-top: 2%;
    }

    .chosecourseL {
      //margin-top:-2%;
    }

    .cicleimg {
      margin-top: 10%;
    }

    .cicleimg1 {
      margin-top: 6%;
    }

    .infomesse {
      margin-top: 9%;
    }

    .chosegamecord {
      height: 80%;
    }

    .lefticon {
      padding-top: 4%;
    }

    .topMenu {
      height: 32%;
    }

    .levels {
      width: 44%;
    }

    .blueBG {
      width: 165px;
      height: 50px;
    }

    .blueBG img {
      height: 50px;
    }

    .percent {
      top: 25%;
    }
    .choicephonics{
      margin-top: 0;
    }
    .infoimg1 ul {
      height: 100%;
    }

    .addlevels {
      margin-top: 10%;
    }

    .unitnamep {
      font-size: 0.5rem;
    }
    .bluecicle {
      border: 8px solid #007BB8;
      height: 150px;
      width: 150px;
    }

    .imgstyle {
      width: 142px;
      height: 142px;
      border: 4px solid #0D627C;
    }

    .progress2 {
      height: 18px;
    }

    .goldBG01 {
      height: 15px;
    }

    .percent2 {
      /*top: 3px;*/
      height: 19px;
    }

  }

  @media only screen and (min-device-height: 895px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 895px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 895px) and (max-width: 1023px) {
    .buttonsty {
      border-style: none;
      background: none;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      height: 40%;
      padding: 0 10px;
      font-family: pepper;
    }
    .strengthsAbbreviation{
      width: 100%;
      height: 100%;
      left: -4%;
      font-size: 1.2rem;
      font-family: 'kg';
      font-weight: 600;
      color: #9c9c9c;
      position: relative;
      text-align: center;
    }
    .strengthsLi{
      width: 80%;
      height: 20PX;
      top: -10%;
      left: 2%;
      margin-top: 4px;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .strengthsAbbreviationAdvanced {
      width: 100%;
      height: 30px;
      font-size: 0.7rem;
      font-family: 'kg';
      color: #9c9c9c;
      position: relative;
      text-align: center;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      left: 0%;
    }
    .strengthsPresent {
      width: 15%;
      height: 100%;
      font-size: 0.7rem;
      color: #1ac6d9;
      position: relative;
      bottom: -30%;
    }
    .strengthsDiv{
      float: left;
      width: 33%;
      height: 95%;
      margin-top: 2%;
    }
    .strengthsText{
      color: white;
      font-family: pepper,serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 15px;
    }
    .historyList {
      position: absolute;
      width: 100%;
      top: 20%;
      overflow: hidden;
      height: 80%;
      overflow-y: auto;
    }
    .intervalsPass7 {
      width: 50%;
      float: left;
      position: relative;
      top: 0%;
    }
    .historyLi {
      font-size: 0.7rem;
    }
    .historyLabel {
      display: inline;
      width: 5%;
      margin: 3%;
      padding: 0.5% 3%;
      color: white;
      background: #2279ac;
      border-radius: 50px;
      font-family: 'pepper', serif;
      font-size: 0.7rem;
    }
    .improvementPercent {
      width: 45%;
      color: #9b9a8c;
      font-weight: 600;
      font-size: 1rem;
    }
    .improvementButton {
      width: 60%;
      background-color: #f58948;
      display: inline-block;
      border-radius: 20px;
      color: white;
      font-size: 0.7rem;
      font-family: 'pepper', serif;
      border: 2px solid #ca642b;
      line-height: 20px;
    }
    .improvementLetter {
      width: 65%;
      color: #6d513d;
      font-weight: 600;
      font-size: 1rem;
    }
    .improvementId {
      width: 25%;
      color: #6d513d;
      font-weight: 600;
      font-size: 1rem;
    }
    .areas {
      background-color: #eeebc8;
      height: 80%;
      position: relative;
      border-radius: 30px;
      width: 60%;
    }
    .AreasDiv {
      float: right;
      margin-top: 3px;
    }
    .AreasP2 {
      color: white;
      font-weight: 700;
      display: inline-block;
      font-size: 0.8rem;
      border-radius: 30px;
      height: 20px;
      width: fit-content;
      padding: 0 12px;
      line-height: 20px;
    }
    .AreasP {
      color: white;
      display: inline-block;
      font-size: 1rem;
      opacity: 0.7;
      margin-right: 15px;
    }
    .areasButton1 {
      width: 80%;
      display: inline-block;
      height: 25px;
      border-radius: 30px;
      color: white;
      font-size: 1rem;
      font-family: 'pepper', serif;
      margin-top: 5%;
    }
    .phonicsText {
      font-size: 1rem;
    }
    .intervalsPass {
      color: #77766D;
      font-family: pepper,serif;
      font-size: 0.8rem;
      font-weight: 1000;
      position: absolute;
      top: 90%;
      left: 34%;
    }
    .intervalsMins {
      font-family: kg,serif;
      display: inline;
      color: #735138;
      font-size: 2.5rem;
      margin-left: 3%;
    }
    .intervalsHours {
      font-family: kg,serif;
      display: inline;
      color: #735138;
      font-size: 2.5rem;
      margin-left: 3%;
    }
    .intervalsHour {
      font-family: kg,serif;
      display: inline;
      color: #735138;
      font-size: 5rem;
    }
    .intervalsPosition {
      position: absolute;
      top: 6%;
      left: 34%;
      width: 65%;
    }

    .iClock {
      width: 21%;
      left: 7%;
      top: 4%;
      position: absolute;
    }

    .letterPercent {
      font-size: 1.6rem;
    }
    .cLeft {
      width: 36px;
      height: 36px;
      left: -18px;
    }
    .cRight {
      width: 36px;
      height: 36px;
      right: -16px;
    }
    .intervalsPassAmazing {
      position: absolute;
      padding: 1.5% 4%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 31%;
      left: 60%;
      font-size: 0.7rem;
      background-color: #2999d5;
    }
    .intervalsPassNice {
      position: absolute;
      padding: 1.5% 4%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 31%;
      left: 68%;
      font-size: 0.7rem;
      background-color: #f7af42;
    }

    .pointPosition {
      margin-top: -5%;
    }
    .point1 {
      font-size: 1rem;
    }
    .point2 {
      font-size: 1rem;
    }
    .intervalsPassClass{
      position: absolute;
      color: #9c8066;
      font-family: 'pepper', serif;
      font-size: 0.7rem;
      left: 61%;
      top: 78%;
    }

    .intervalsPassText2 {
      font-family: kg,serif;
      color: #735138;
      font-size: 1.5rem;
      position: absolute;
      width: fit-content;
      left: 40%;
      top: 50%;
    }

    .intervalsPassText1{
      font-family: kg,serif;
      color: #735138;
      font-size: 4.5rem;
      position: relative;
      left: 2%;
      text-align: right;
      width: 100px;
      margin-top: 10%;
    }

    .intervalsPassKeepTrying {
      position: absolute;
      padding: 0.5% 3%;
      font-size: 0.7rem;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 32%;
      right: 11%;
      background-color: #2aba8f;
    }

    .intervalsPassGreat{
      position: absolute;
      padding: 0.5% 3%;
      font-size: 0.7rem;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 32%;
      right: 8%;
      background-color: #f389a4;
    }

    .intervalsPass30 {
      left: -5%;
      top: 0;
    }
    .phonicsLevel {
      padding-left: 60px;
    }
    .cardRight {
      top: 28%;
    }
    .cardLeft {
      top: 28%;
    }
    .categories {
      border-radius: 30px;
    }
    .categoriesLi {
      border-radius: 30px;
      margin: 3.5% 0 0 6%;
      font-size: 0.9rem;
      line-height: 24px;
      border: 3px solid #ca642b;
    }
    .spanimg2{
      width: 1rem;
    }
    .progress2{
      height: 23px;
    }
    .progress2 img{
      width: 1.3rem;
    }
    .startP{
      font-size: 1rem;
    }
    .listmemu{
      margin: 0 20px 0 20px;
    }

    .phonicsL{
      font-size: 1rem;
    }


    .unitnamep {
      font-size: 1rem;
    }
    .infoimg {
      height: 75%;
      margin-top: 5%;
    }


    .addchosecourseL {
      margin-top: 2%;
    }

    .chosecourseL {
      //margin-top:-2%;
    }

    .cicleimg {
      margin-top: 11%;
    }

    .cicleimg1 {
      margin-top: 7%;
    }

    .infomesse {
      margin-top: 9%;
    }

    .chosegamecord {
      height: 80%;
    }

    .lefticon {
      padding-top: 5%;
    }

    .addimg {
      left: 165px;
    }

    .topMenu {
      height: 32%;
    }

    .levels {
      width: 44%;
    }

    .blueBG {
      width: 165px;
      height: 50px;
    }

    .blueBG img {
      height: 50px;
    }

    .percent {
      top: 25%;
    }

    .infoimg1 ul {
      height: 100%;
    }

    .addlevels {
      margin-top: 10%;
    }

    .withcolor {
      top: 10%;
    }
    .choicephonics{
      margin-top: 0px;
    }
    .bluecicle {
      border: 8px solid #007BB8;
      height: 150px;
      width: 150px;
    }

    .imgstyle {
      width: 142px;
      height: 142px;
      border: 4px solid #0D627C;
    }

    .progress2 {
      height: 18px;
    }

    .goldBG01 {
      height: 15px;
    }

    .percent2 {
      /*top: 3px;*/
      height: 19px;
    }

  }

  @media only screen and (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1024px) and (max-width: 1199px) {

    .strengthsL{
      position: relative;
      background: #1ac6d9;
      padding: 3% 0;
      border-radius: 30px;
      top: 8%;
      width: 98%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .strengthsAbbreviation {
      width: 100%;
      height: 100%;
      left: -4%;
      font-size: 1.4rem;
      font-family: 'kg';
      font-weight: 600;
      color: #9c9c9c;
      position: relative;
      line-height: 35px;
      text-align: center;
    }
    .strengthsLiAll {
      margin-top: -13%;
      position: relative;
    }
    .strengthsLi {
      width: 85%;
      height: 40PX;
      top: -6%;
      left: -7px;
      margin-top: 0px;
      position: relative;
      display: flex;
    }
    .strengthsAbbreviationAdvanced {
      width: 100%;
      height: 40px;
      left: 0%;
      font-size: 0.7rem;
      font-family: 'kg';
      color: #9c9c9c;
      position: relative;
      text-align: center;
      line-height: 40px;
    }
    .strengthsLogo{
      width: 8%;
      height: 12%;
      position: relative;
      left: 45%;
      top: 10%;
    }
    .strengthsPresent{
      width: 10%;
      height: 100%;
      font-size: 1rem;
      color: #1ac6d9;
      position: relative;
      bottom: -30%;
    }
    .strengthsText{
      color: white;
      font-family: pepper,serif;
      font-size: 20px;
      font-weight: 500;
    }
    .historyLi {
      font-size: 1rem;
    }
    .historyLabel {
      display: inline;
      width: 5%;
      margin: 2.5%;
      padding: 0.5% 3%;
      color: white;
      background: #2279ac;
      border-radius: 50px;
      font-family: 'pepper', serif;
      font-size: 1rem;
    }
    .improvementPercent {
      width: 45%;
      color: #9b9a8c;
      font-weight: 600;
      font-size: 1.3rem;
    }
    .improvementLetter {
      width: 65%;
      color: #6d513d;
      font-weight: 600;
      font-size: 1.3rem;
    }
    .improvementId {
      width: 25%;
      color: #6d513d;
      font-weight: 600;
      font-size: 1.3rem;
    }
    .improvementButton {
      width: 60%;
      background-color: #f58948;
      display: inline-block;
      border-radius: 25px;
      color: white;
      font-size: 0.8rem;
      font-family: 'pepper', serif;
      border: 3px solid #ca642b;
      line-height: 30px;
    }
    .areasButton1 {
      width: 80%;
      display: inline-block;
      height: 40px;
      border-radius: 30px;
      color: white;
      font-size: 1.2rem;
      font-family: 'pepper', serif;
      margin-top: 6%;
      line-height: 40px;
    }
    .intervalsPassText1 {
      font-family: kg,serif;
      color: #735138;
      font-size: 4rem;
      position: relative;
      left: -5%;
      margin-top: 21%;
      width: 125px;
    }
    .intervalsPass30 {
      left: -1%;
    }
    .intervalsPass7 {
      left: -1%;
    }
    .phonicsText {
      font-size: 1.5rem;
    }
    .intervalsPassNice {
      position: absolute;
      padding: 1.5% 4%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 43%;
      left: 73%;
      font-size: 1rem;
      background-color: #f7af42;
    }
    .intervalsPassAmazing {
      position: absolute;
      padding: 1.5% 4%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 43%;
      left: 61%;
      font-size: 1rem;
    }

    .intervalsPassClass {
      position: absolute;
      color: #9c8066;
      font-family: 'pepper', serif;
      font-size: 1rem;
      left: 60%;
      top: 85%;
    }

    .intervalsPassText2 {
      font-family: kg,serif;
      color: #735138;
      font-size: 2rem;
      position: absolute;
      width: fit-content;
      left: 36%;
      top: 60%;
    }

    .intervalsPassText1{
      font-family: kg,serif;
      color: #735138;
      font-size: 3rem;
      position: relative;
      left: -5%;
      margin-top: 21%;
      width: 125px;
    }

    .intervalsPassKeepTrying {
      position: absolute;
      padding: 1% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 45%;
      right: 7%;
      background-color: #2aba8f;
    }

    .intervalsPassGreat{
      position: absolute;
      padding: 1% 3%;
      border-radius: 30px;
      color: white;
      font-family: 'kg', serif;
      top: 45%;
      right: 4%;
      background-color: #f389a4;
    }

    .iClock {
      width: 30%;
    }

    .intervalsHour {
      font-family: kg,serif;
      display: inline;
      color: #735138;
      font-size: 4.5rem;
    }

    .intervalsHours {
      font-family: kg,serif;
      display: inline;
      color: #735138;
      font-size: 2rem;
      margin-left: 3%;
    }

    .intervalsMins {
      font-family: kg,serif;
      display: inline;
      color: #735138;
      font-size: 2rem;
      margin-left: 3%;
    }
    .intervalsPass {
      color: #77766D;
      font-family: pepper,serif;
      font-size: 1rem;
      font-weight: 1000;
      position: absolute;
      top: 90%;
      left: 17%;
    }

    .pointPosition{
      margin-top: -8%;
    }

    .cRight {
      width: 50px;
      height: 50px;
      right: -25px;
      border-radius: 50px;
    }

    .cLeft {
      width: 50px;
      height: 50px;
      left: -25px;
      border-radius: 50px;
    }
    .phonicsLevel {
      padding-left: 60px;
    }
    .cardRight {
      top: 26%;
    }
    .cardLeft {
      top: 26%;
    }
    .categoriesLi {
      font-size: 1rem;
      line-height: 40px;
      margin: 4% 0 0 5.5%;
    }
    .spanimg2 {
      width: 0.9rem;
      margin: -3px 3px;
    }
    .buttonsty {
      height: 30%;
      font-size: 24px;
    }
    .menu2Change {
      width: 64%;
    }
    .progress2 {
      height: 25px;
    }
    .startP {
      font-size: 1rem;
    }
    .progress2 img {
      width: 1.2rem;
    }
    .phonicsL {
      font-size: 2rem;
    }
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

    .leftmar2 {
      left: 43%;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    .lefticon {
      padding-top: 12%;
    }

    .bluecicle {
      border: 12px solid #007BB8;
      height: 160px;
      width: 160px;
    }

    .imgstyle {
      width: 150px;
      height: 150px;
      border: 5px solid #0D627C;
    }

    .userName {
      margin-top: -28%;
      font-size: 1.2rem;
    }

    .logoutsty button {
      font-size: 1.2rem;
    }

    .logoutsty1 button {
      font-size: 1.2rem;
    }

    .rightmenu {
      height: 75%;
      padding-top: 10%;
    }


    .listmemu span {
      font-size: 1.3rem;
    }

    .spanimg {
      width: 1.3rem;
    }

    .choseclass {
      position: relative;
      top: 10%;
    }

    .choseRW {
      position: relative;
      top: 5%;
    }

    .chosegamecord {
      position: relative;
      top: 2%;
      height: 80%;
    }

    .neirong {
      font-size: 1.2rem;
    }

    .unitcoin img {
      width: 1.2rem;
    }

    .blueBG {
      border: 6px solid #057BB8;
      width: 208px;
      height: 55px;
      margin-top: -15%;
    }

    .blueBG img {
      height: 55px;
    }

    .listimg2 {
      padding: 15px;
      width: 23%;
    }

    .listimg22 {
      width: 25% !important;
      margin: 10px 0 10px 3% !important;
    }

    table {
      font-size: 1.2rem;
    }

    .withcolor {
      width: 70%;
      height: 70%;
      top: 12%;
    }

    .cicleimg {
      margin-top: 20%;
      transform: scale(1.2);
    }

    .cicleimgsty {
      width: 170px;
      height: 170px;
    }

    .addimg {
      left: 180px;
      transform: scale(1.2);
    }

    .infomesse {
      margin-top: 18%;
    }

    .infomesse span {
      font-size: 1.5rem;
    }

    .inputu {
      font-size: 1.5rem;
    }

    .cicleimg1 {
      width: 35%;
      margin-top: 15%;

    }

    .infoimg {
      width: 65%;
      margin-top: 12%;
    }

    .cicleimgstyle {
      width: 170px;
      height: 170px;
    }

    .bottommemu {
      margin-top: -12%;
    }

    .addlevels {
      font-size: 2.5rem;
      margin-top: 10%;
      width: 49%;
    }

    .levels {
      font-size: 2.5rem;
      width: 46%;
    }

    .percent {
      font-size: 26px;
    }

    .unitnamep {
      font-size: 1rem;
    }

    .goldBG01 {
      height: 20px;
    }

    .percent2 {
      /*top: 3px;*/
      height: 20px;
      font-size: 0.9rem;
    }

    .foncolor1 {
      font-size: 1.2rem;
    }

  }

  @media only screen and(min-device-height: 1180px) and (max-device-height: 1180px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1180px) and (max-device-height: 1180px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1180px) and (max-width: 1180px){
    .cardRight {
      top: 33%;
    }
    .cardLeft {
      top: 33%;
    }
    .pointPosition {
      margin-top: -6%;
    }
  }

  @media only screen and (min-device-height: 1200px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1200px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1200px) and (max-width: 1600px) {
    .chosedisplay {
      height: 80%;
      margin-top: -2%;
    }
    .strengthsText{
      color: white;
      font-family: pepper,serif;
      font-size: 20px;
      font-weight: 600;
    }
    .strengthsLi{
      width: 85%;
      height: 40PX;
      top: -6%;
      left: -1%;
      margin-top: 10px;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .strengthsLiAll {
      margin-top: -17%;
      position: relative;
    }
    .strengthsAbbreviationAdvanced{
      width: 100%;
      height: 40px;
      left: -2%;
      font-size: 1rem;
      font-family: 'kg',serif;
      font-weight: 600;
      color: #9c9c9c;
      position: relative;
      text-align: center;
      line-height: 40px;
    }
    .historyLabel {
      display: inline;
      width: 5%;
      margin: 3%;
      padding: 0.5% 2.3%;
      color: white;
      background: #2279ac;
      border-radius: 50px;
      font-family: 'pepper', serif;
      font-size: 1.5rem;
    }
    .intervalsPosition {
      position: absolute;
      top: 25%;
      left: 34%;
      width: 65%;
    }
    .intervalsHour {
      font-family: kg,serif;
      display: inline;
      color: #735138;
      font-size: 5rem;
    }
    .intervalsHours {
      font-family: kg,serif;
      display: inline;
      color: #735138;
      font-size: 4rem;
      margin-left: 3%;
    }
    .intervalsMins {
      font-family: kg,serif;
      display: inline;
      color: #735138;
      font-size: 3rem;
      margin-left: 3%;
    }
    .intervalsPass {
      color: #77766D;
      font-family: pepper,serif;
      font-size: 1.2rem;
      font-weight: 1000;
      position: absolute;
      top: 90%;
      left: 30%;
    }
    .intervalsPassNice {
      top: 44%;
      left: 61%;
    }
    .pointPosition {
      margin-top: -8%;
    }
    .intervalsPass7 {
      left: 1%;
    }
    .intervalsPassText1 {
      font-family: kg,serif;
      color: #735138;
      font-size: 6rem;
      position: relative;
      left: -8%;
      margin-top: 15%;
      width: 180px;
    }
    .intervalsPassKeepTrying {
      right: 18%;
      padding: 1.5% 4%;
      top: 42%;
    }
    .intervalsPassGreat {
      left: 59%;
      right: unset;
      padding: 1.5% 4%;
      top: 42%;
    }
    .intervalsPassAmazing {
      left: 52%;
      padding: 1.5% 4%;
      top: 42%;
    }
    .intervalsPassAmazing {
      right: 18%;
      padding: 1.5% 4%;
      top: 42%;
    }
    .intervalsPass30 {
      left: -1%;
    }
    .iClock {
      width: 30%;
    }
    .categoriesLi {
      font-size: 1.5rem;
      line-height: 48px;
      margin: 4% 0 0 5.5%;
    }
    .phonicsLevel {
      padding-left: 95px;
    }
    .cardRight {
      top: 26%;
      width: 5%;
    }
    .cardLeft {
      top: 26%;
      width: 5%;
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

    .leftmar2 {
      left: 43%;
    }

    .coinstyle {
      height: 70%;
      position: absolute;
      left: 35%;
      bottom: 9%;
    }

    .lefticon {
      padding-top: 15%;
    }

    .bluecicle {
      border: 13px solid #007BB8;
      height: 220px;
      width: 220px;
    }

    .imgstyle {
      width: 200px;
      height: 200px;
      border: 10px solid #0D627C;
    }

    .userName {
      margin-top: -28%;
      font-size: 2rem;
    }

    .logoutsty button {
      font-size: 1.8rem;
    }

    .logoutsty1 button {
      font-size: 1.8rem;
    }

    .rightmenu {
      height: 75%;
      padding-top: 9%;
    }

    .buttonsty {
      font-size: 30px;
      padding: 0 10px 0 10px;
    }

    .listmemu span {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    .spanimg {
      width: 1.3rem;
    }

    .choseclass {
      position: relative;
      top: 10%;
    }

    .choseRW {
      position: relative;
      top: 5%;
    }

    .chosegamecord {
      position: relative;
      top: 2%;
      height: 80%;
    }


    .unit {
      font-size: 1.8rem;
    }

    .unitname {
      font-size: 1.5rem;
    }

    .neirong {
      font-size: 2rem;
    }

    .unitcoin img {
      width: 2rem;
    }

    .blueBG {
      border: 6px solid #057BB8;
      width: 255px;
      height: 75px;
      margin-top: -15%;
    }

    .blueBG img {
      height: 75px;
    }

    .listimg2 {
      padding: 15px;
      width: 24%;
    }

    .listimg22 {
      margin: 10px 0 10px 3% !important;
    }

    table {
      font-size: 2rem;
    }

    .withcolor {
      width: 70%;
      height: 70%;
      top: 12%;
    }

    .cicleimg {
      margin-top: 20%;
      transform: scale(1.2);
    }

    .cicleimgsty {
      width: 170px;
      height: 170px;
    }

    .addimg {
      left: 15rem;
      transform: scale(1.2);
    }

    .infomesse {
      margin-top: 18%;
    }

    .infomesse span {
      font-size: 2rem;
    }

    .inputu {
      font-size: 2rem;
    }

    .cicleimg1 {
      width: 35%;
      margin-top: 15%;

    }

    .infoimg {
      width: 65%;
      margin-top: 12%;
    }

    .cicleimgstyle {
      width: 170px;
      height: 170px;
    }

    .bottommemu {
      margin-top: -12%;
    }

    .addlevels {
      font-size: 2.5rem;
      margin-top: 10%;
      width: 49%;
    }

    .levels {
      font-size: 3rem;
      width: 46%;
    }

    .percent {
      font-size: 30px;
    }

    .close {
      transform: scale(1.2);
    }

    .littlestar {
      width: 2rem;
    }

    .unitnamep {
      font-size: 1rem;
    }

    .progress2 {
      height: 18px;
      bottom: 25px;
    }

    .goldBG01 {
      height: 25px;
    }

    .percent2 {
      /*top: 3px;*/
      height: 25px;
      font-size: 1.2rem;
    }

    .foncolor1 {
      font-size: 1.5rem;
    }

  }

  @media screen and (min-width: 1600px) {
    .fontsize {
      bottom: 13%;
      position: absolute;
      font-size: 3rem;
      margin-left: 2%;
    }

    .lefticon {
      padding-top: 8%;
    }

    .bluecicle {
      border: 20px solid #007BB8;
      border-radius: 50%;
      height: 260px;
      width: 260px;
    }

    .imgstyle {
      width: 230px;
      height: 230px;
      border: 15px solid #0D627C;
    }

    .imgBstyle {
      width: 70%;
      margin-top: -10%;
    }

    .userName {
      margin-top: -22%;
      font-size: 2rem;
    }

    .logoutsty1 button {
      font-size: 2rem;
    }

    .logoutsty button {
      font-size: 2rem;
    }

    .listmemu span {
      font-size: 3rem;
    }

    .buttonsty {
      font-size: 40px;
      height: 30%;
    }

    .spanimg {
      width: 3rem;
    }

    .choseRW {
      margin-top: 0%;
    }

    .listimg1 {
      border-radius: 31px;
      padding: 24px 1%;
    }

    .unitname {
      font-size: 2.5rem;
      height:108px;
    }
    .choicephonics{
      margin-top: 0px;
    }
    .unitcoin {
      img {
        width: 2rem;
      }

      font-size: 2rem;
      margin-top: 1rem;
    }

    .listimg2 {
      border-radius: 31px;
      padding: 24px 1%;
    }

    .tabtit {
      padding: 6px 25px;
      font-family: pepper,serif;
      font-size: 2rem;
    }

    .listimg3 {
      td {
        font-size: 2rem;
      }
    }

    .littlestar {
      width: 1.6rem;
    }

    .progress2 {
      bottom: 20px;
      height: 40px;
    }

    .goldBG01 {
      height: 40px;
    }

    .chamgold {
      width: 11% !important;
    }

    .percent2 {
      height: 40px;
      font-size: 1.5rem;
    }

    .walkerbutton img {
      width: 2rem;
    }

    .foncolor1 {
      font-size: 2rem;
    }

    .cicleimg {
      margin-top: 10%;
    }

    .cicleimgstyle {
      width: 20rem;
      height: 20rem;
    }

    .addimg {
      left: 27rem;
      width: 4rem;
    }

    .infomesse {
      font-size: 4rem;
      margin-top: 10%;
    }

    .inputspan {
      font-size: 2rem;
    }

    .inputu {
      font-size: 2rem;
    }

    .close {
      width: 100px;
      height: 100px;

      img {
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
