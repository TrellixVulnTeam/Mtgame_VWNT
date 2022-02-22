<template>
  <div class="info">
    <div class="contain">
      <img src="../../assets/image/main_bg.png" style="width: 100%; height: 100%;display:block;position: absolute;">
      <!-- 	<transition name="fade1">	 -->
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
            <p style="width: 100px;overflow: hidden;white-space: nowrap; display: block;margin: 0 auto;">
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
          <div class="topmemu">
            <div class="memu1">
              <button class="buttonsty" @click="changeBcolo1">{{courseList[0].name}}</button>
            </div>
            <div class="memu2">
              <button class="buttonsty" @click="changeBcolo2">{{courseList[1].name}}</button>
            </div>
            <!--<div class="memu2"><button class="buttonsty" >{{courseList[1].name}}</button></div>-->
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
              <span v-if="page2" v-bind:class="{opciay:opciay2}" @click="sectionp2">{{level}}</span>
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
            <div class="chosedisplay" v-if="!chatorphonics">
              <div class="choseclass" v-if="opciay1">
                <div class="choicephonics" v-for="(li,index) in phonicsList" :key='index'>
                  <img src="../../assets/image/beginner.png" @click="pnext2(li)" style="width: 100%;" v-if="index==0">
                  <img src="../../assets/image/intermediate.png" @click="pnext21(li)" style="width: 100%;"
                       v-if="index==1">
                  <img src="../../assets/image/advance.png" style="width: 100%;" @click="pnext22(li)" v-if="index==2">
                  <!--<div class="progress" >-->
                  <img src="../../assets/image/completed.png" v-if="li.complete"
                       style="width: 80%;margin: 0 10%;z-index: 2;bottom:-6%;position: absolute;left:0;">
                  <!--</div>-->
                  <div class="progress2" v-if="!li.complete">
                    <div class="goldBG01">
                      <img src="../../assets/image/champanp.png" v-bind:style="{width:li.percent}">
                    </div>
                    <img src="../../assets/image/golden.png" class="chamgold"/>
                    <button class="percent2">{{li.percent}}</button>
                  </div>
<!--                  <img v-if="index==2" src="../../assets/image/coming-soon1.png">-->
<!--                       style="width: 80%;margin: 0 10%;z-index: 2;bottom:-6%;position: absolute;display: inline;float: left;left: 0;">-->
                </div>
              </div>
              <div class="choseRW" v-if="opciay2">
                <div class="infoimg1">
                  <!-- 	<img src="../../assets/image/BGselect.png"> -->
                  <ul>
                    <li class="listimg1" @click="pnext3(li)" v-for="(li,index) in phonicsDetailList">
                      <!-- <img src="../../assets/image/BGselect.png"  > -->
                      <div class="neirong">
                        <!-- <p class="unit">{{li.unit_name}}</p> -->
                        <p class="unitnamep">{{li.name}}</p>

                      </div>
                      <button class="walkerbutton">
                        <!--<img src="../../assets/image/gold1.png" v-if="li.hui ==1||li.hui ==2||li.hui ==3">-->
                        <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0">-->
                        <!--<img src="../../assets/image/gold2.png" v-if="li.hui ==2||li.hui ==3">-->
                        <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0||li.hui ==1">-->
                        <!--<img src="../../assets/image/gold3.png" v-if="li.hui ==3">-->
                        <!--<img src="../../assets/image/nogold.png" v-if="li.hui==0||li.hui ==1||li.hui ==2">-->
                        <img src="http://monkeytown.monkeytree.com.hk/image/season-star.png">
                        <span class="foncolor1">{{li.stars}}</span>
                        <!--<span class="foncolor2" v-if="index%2!=0">10/30</span>-->
                      </button>
                    </li>
                  </ul>
                </div>

              </div>
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
                    <!-- <tr v-for="(li,index) in detailList" :key="index" v-if="ifboss2">
            					<td>{{li.date| formatDate}}</td>
            					<td>{{li.score}}</td>
            					<td>
            			<img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].onestart" class="littlestar">
            			<img src="../../assets/image/star_frame.png" v-if="li.stars[0].onestart" class="littlestar" >
            			<img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].twostart" class="littlestar">
            			<img src="../../assets/image/star_frame.png" v-if="li.stars[0].twostart" class="littlestar" >
            			<img src="../../assets/image/Little_Star_frame.png" v-if="!li.stars[0].threestart" class="littlestar">
            			<img src="../../assets/image/star_frame.png" v-if="li.stars[0].threestart" class="littlestar">

            			<img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].one1" class="littlestar">
            			<img src="../../assets/image/star_frame.png" v-if="li.allstar[0].one1" class="littlestar">
            			<img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].two1" class="littlestar" >
            			<img src="../../assets/image/star_frame.png" v-if="li.allstar[0].two1" class="littlestar" >
            			<img src="../../assets/image/Little_Star_frame.png" v-if="!li.allstar[0].three1" class="littlestar">
            			<img src="../../assets/image/star_frame.png" v-if="li.allstar[0].three1" class="littlestar"> -->

                    <!-- </td>
            			</tr> -->
                  </table>
                </div>
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
        <!-- <div @click="back">
					<img src="../../assets/image/game-course03.png"  class="pause"> -->
        <!-- 	<img src="../../assets/image/game-course03.png"  class=" pause" v-if="!action"> -->
        <!-- </div> -->
        <div @click="home">
          <!-- <img src="../../assets/image/Icon_home0.png" class="repeat" v-if="action1"> -->
          <img src="../../assets/image/Icon_home.png" class="repeat">
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import $ from 'jquery';

  var qs = require('qs');
  export default {
    name: "info",
    data() {
      return {
        local:'',
        action: false,
        action1: false,
        level: " ",
        course: '',
        courseId: '',
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
        opciay5: true, opciay1: false, opciay2: false, opciay3: false, opciay4: false,
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
    methods: {
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
        // console.log(this.onef);
        // console.log(this.seleinfo);
        if (this.onef == false && this.seleinfo == false) {
          this.action = true;
          setTimeout(() => {
            this.action = false;
            this.seleinfo = true;
          }, 1000);
        } else if (this.onef == false && this.seleinfo == true) {
          this.action = true;
          setTimeout(() => {
            this.action = false;
            this.onef = true;
          }, 1000);
        } else if (this.onef == true) {
          this.action = true;
          setTimeout(() => {
            this.action = false;
            this.$router.push({
              path: "/source", //跳转的路径
            });
          }, 1000);
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
        this.opciay2 = false;
        this.opciay3 = false;
        this.opciay6 = false;
        this.opciay4 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.page1 = true;
        this.chatorphonics = true;
        // this.opciay5=true;
        this.courseId = this.courseList[0].course_id;
        if (this.courseList[0].name == "CHAT ROOM") {
          this.course = "Chat Room";
        } else if (this.courseList[0].name == "PHONICS") {
          this.course = "Phonics";
        }
      },
      changeBcolo2() {
        if (this.phonics == 0) {
          alertMsg3("Active Phonics Student Only");
        } else {
          this.backgrorang = true;
          this.backgrgreen = false;
          this.page2 = false;
          this.page3 = false;
          this.page4 = false;
          this.opciay1 = true;
          this.opciay2 = false;
          this.opciay3 = false;
          this.opciay6 = false;
          this.opciay4 = false;
          this.ifboss1 = false;
          this.ifboss2 = false;
          this.page1 = true;
          this.chatorphonics = false;
          // this.opciay5=true;
          // this.courseId=this.courseList[1].course_id;
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
            console.log(this.phonicsList);
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
        if (this.opciay4 == true) {
          this.ifboss1 = false;
          this.ifboss2 = false;
          this.page4 = false;
          this.page3 = true;
          this.opciay3 = false;
          this.opciay2 = false;
          this.opciay1 = false;
          this.opciay6 = true;
          this.opciay4 = false;
        }
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
        // if (this.opciay4 == true) {
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.page4 = false;
        this.page3 = true;
        this.opciay3 = true;
        this.opciay2 = false;
        this.opciay1 = false;
        this.opciay6 = false;
        this.opciay4 = false;
        // }
      },
      sectionp4() {
        if (this.opciay4 == 'false') {
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
        // this.opciay5=false;
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
        this.$router.push({
          path: "/login", //跳转的路径
        });
        localStorage.setItem("userId", '');
      },
      pnext2(li) {
        this.page2 = true;
        this.opciay2 = true;
        this.opciay1 = false;
        this.opciay3 = false;
        this.opciay6 = false;
        this.opciay4 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.purl2 = this.url + "PhonicsDetail";
        this.phonicsId = li.id;
        this.level = li.name;
        this.$axios.post(this.purl2, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          phonicsId: this.phonicsId
        })).then(res => {
          this.phonicsDetailList = res.data.phonicsDetailList;
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
      },
      pnext21(li) {
        this.page2 = true;
        this.opciay2 = true;
        this.opciay1 = false;
        this.opciay3 = false;
        this.opciay4 = false;
        this.opciay6 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.purl2 = this.url + "PhonicsDetail2";
        this.phonicsId = li.id;
        this.level = li.name;
        this.$axios.post(this.purl2, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          phonicsId: this.phonicsId
        })).then(res => {
          this.phonicsDetailList = res.data.phonicsDetailList;
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
      },
      pnext22(li) {
        this.page2 = true;
        this.opciay2 = true;
        this.opciay1 = false;
        this.opciay3 = false;
        this.opciay4 = false;
        this.opciay6 = false;
        this.ifboss1 = false;
        this.ifboss2 = false;
        this.purl2 = this.url + "PhonicsDetail3";
        this.phonicsId = li.id;
        this.level = li.name;
        this.$axios.post(this.purl2, qs.stringify({
          studentId: localStorage.getItem('studentId'),
          phonicsId: this.phonicsId
        })).then(res => {
          this.phonicsDetailList = res.data.phonicsDetailList;
        }, res => {
          alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        })
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
        console.log('1');
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
    // mounted(){
    // 	$(window).resize(function() {
    // 	    $('body').height(heigth);
    // 		alert( $('body').height());
    // 	});
    // },
    created() { //生命周期里接收参数
      this.local = localStorage.getItem('local');
      this.pic = this.$axios.defaults.baseURL2;
      var heigth = $('body')[0].clientHeight;
      var width = $('body')[0].clientWidth;
      // $('.contain').height($('body')[0].clientHeight);
      // $('.contain').width($('body')[0].clientWidth);
      // $('.seleinput').height($('body')[0].clientHeight);
      // $('.seleinput').width($('body')[0].clientWidth);
      // console.log($('.contain').width());console.log($('.contain').height());
      //     $('body').height(heigth);
      // $('body').width(width);
      // $("#app").css("min-height", heigth);
      // $(".seleinput").css("min-height", heigth);
      this.firstName = localStorage.getItem('firstName');
      this.firstName1 = this.firstName;
      this.gameImage = localStorage.getItem('gameImage');
      this.gameImage1 = this.gameImage;
      this.sum = localStorage.getItem('sumCoins');
      this.studentId = localStorage.getItem('studentId');
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

  };
</script>

<style scoped lang="less">
  body {
    width: 100%;
    padding: 0;
    // overflow-y: scroll;
    position: static;
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
      width: 40%;
      vertical-align: bottom;
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

  .topmemu {
    width: 60%;
    float: left;
    height: 30%;
  }

  .tabtit {
    color: white;
    background-color: #007BB8;
    border-radius: 50px;
    padding: 2px 15px;
    font-family: pepper;
  }

  .memu1 {
    float: left;
    height: 100%;
    width: 45%;
    border-radius: 20px;
    background-color: #43BF76;
  }

  .memu2 {
    float: left;
    height: 100%;
    width: 45%;
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
    border-radius: 20px;
    float: left;
    margin-top: -10%;
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

  .spanimg {
    width: 1rem;
    margin: 0 5px;
    vertical-align: bottom;
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
    font-family: KG;
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
    margin-top: 0%;
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

  @media screen and (max-width: 569px) {
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

    .buttonsty {
      font-size: 0.8rem;
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
    .progress2{
      height: 14px;
    }
    .chamgold {
      margin-top: 0;
    }
    .unitnamep {
      font-size: 0.5rem;
    }
  }

  @media screen and (min-device-height: 570px) and (max-device-height: 735px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 570px) and (max-device-height: 735px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 570px) and (max-width: 735px){
    .progress2{
      height: 14px;
    }
    .unitnamep {
      font-size: 0.5rem;
    }
  }

  @media screen and (min-device-height: 736px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 736px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 736px) and (max-width: 811px) {
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

  @media screen and (min-device-height: 812px) and (max-device-height: 895px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 812px) and (max-device-height: 895px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 812px) and (max-width: 895px) {
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

    .topmemu {
      height: 34%;
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
      margin-top: 0px;
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

    // .rightmenu{
    // 	height:75%;
    // }
  }

  @media screen and (min-device-height: 895px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 895px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 895px) and (max-width: 1023px) {
    .unitnamep {
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

    .topmemu {
      height: 34%;
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

    // .rightmenu{
    // 	height:85%;
    // }
  }

  @media screen and (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1024px) and (max-device-height: 1199px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1024px) and (max-width: 1199px) {
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

    .buttonsty {
      font-size: 1.4rem;
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

    // .listimg1{
    // 	padding: 15px;
    // 	width: 23%;
    // }
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
      margin-top: -13%;
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

    .progress2 {
      height: 25px;
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

  @media screen and (min-device-height: 1200px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
  (min-device-height: 1200px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2),
  (min-width: 1200px) and (max-width: 1600px) {
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
      padding-top: 10%;
    }

    .buttonsty {
      font-size: 2rem;
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

    // .listimg1{
    // 	padding: 15px;
    // 	width: 23%;
    // }
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
      margin-top: -13%;
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
      height: 28px;
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
      margin-top: -19%;
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
      font-size: 3rem;
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
      font-family: pepper;
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
