<template>

	<div class="presult">
		<transition name="fade">
		<div class="contain" v-if="resume">
				<div  v-if="zhezhao" style="width: 100%; height: 100%;display:block;position: absolute;opacity: 0;z-index: 1000;"></div>
			<audio autoplay="autoplay" v-if="resume1"><source src="../../assets/video/complete.mp3"></audio>
      <audio autoplay="autoplay" v-if="tryagain"><source src="../../assets/video/tryagain.mp3"></audio>
			<div style="width: 100%; height: 70%;display:block;position: absolute;">
				<div class="fontsize leftword">
					<p style="margin-bottom: 0;">{{scorename}}</p>
					<span style="font-size: x-large;">{{allscore}}</span>
				</div>
				<div  style="width: 100%;height: 100%;text-align: center;display:block;position: absolute;top: 10%;">
					<!-- <img src="http://monkeytown.monkeytree.com.hk/image/amazing.png" style="height: 95%;" v-if="amazing" v-show="amazing0"> -->
					<img src="../../assets/image/amazing.png" style="height: 95%;" v-if="amazing" v-show="amazing0">
					<img src="../../assets/image/Great.png" style="height: 95%;" v-if="great" v-show="great0">
					<img src="../../assets/image/nice.png" style="height: 95%;" v-if="nice" v-show="nice0">
					<img src="../../assets/image/try_again.png" style="height: 95%;" v-if="again" v-show="again0">

					<img src="../../assets/image/Amazing0.png" style="height: 95%;" v-if="amazing" v-show="!amazing0">
					<img src="../../assets/image/Great0.png" style="height: 95%;" v-if="great" v-show="!great0">
					<img src="../../assets/image/Nice0.png" style="height: 95%;" v-if="nice" v-show="!nice0">
					<img src="../../assets/image/TryAgain0.png" style="height: 95%;" v-if="again" v-show="!again0">
				</div>
				<div class="fontsize rightword">
					<p style="margin-bottom: 0;margin: 0 4%;">COINS</p>
					<p class="pcoin1"  v-if="mycard">
						<img src="../../assets/image/colcard.png" class="coin1">
						{{allscore}}
					</p>
					<p class="pcoin">
							<img src="../../assets/image/icon_coin.png" class="coin">
							{{coin}}
					</p>
				</div>
			</div>
			<div style="width: 100%; height: 30%;display:block;position: absolute;bottom: 0;">
				<div @click="change2" style="display: contents;">
						<img src="../../assets/image/blue_home.png" class="centerimg" v-if="action1">
						<img src="../../assets/image/blue_home0.png" class="centerimg" v-if="!action1">
				</div>
				<div @click="change" style="display: contents;">
					<!-- <router-link to="/"> -->
						<img src="../../assets/image/blue_restart.png"  class="centerimg"  @click="change" v-if="action2">
						<img src="../../assets/image/blue_restart0.png"  class="centerimg"  @click="change" v-if="!action2">
					<!-- </router-link> -->
				</div>
				<div @click="change1" style="display: contents;">
						<img src="../../assets/image/blue_next.png" class="centerimg" v-if="action3">
						<img src="../../assets/image/blue_next0.png" class="centerimg" v-if="!action3">
				</div>
				<div @click="change3" style="display: contents;" v-if="mycard">
						<img src="../../assets/image/blue_next.png" class="centerimg" v-if="action3">
						<img src="../../assets/image/blue_next0.png" class="centerimg" v-if="!action3">
				</div>
			</div>
		</div>
		</transition>
	    <!--<transition name="fade1">-->
			<!--<div class="contain" v-if="choujiang">-->
			<!--<div class="backgcoin">-->
		           <!--<div class="book1" style="margin-left: -8%;">-->
		   			<!--<img src="../../assets/image/dailycoin.png" class="bookimg" v-if="get1"/>-->
		   			<!--<img src="../../assets/image/dailycoin1.png" class="bookimg" v-if="get2"/>-->
		   			<!--<img src="../../assets/image/dailycoin2.png" class="bookimg" v-if="get3"/>-->
		   		 	<!--</div>-->
		   			<!--<div class="book1">-->
		   				<!--<img src="../../assets/image/dailycoin.png" class="bookimg" v-if="get1"/>-->
		   				<!--<img src="../../assets/image/dailycoin1.png" class="bookimg" v-if="get2"/>-->
		   				<!--<img src="../../assets/image/dailycoin2.png" class="bookimg" v-if="get3"/>-->
		   			<!--</div>-->
		   			<!--<div class="book1">-->
		   				<!--<img src="../../assets/image/dailycoin.png" class="bookimg" v-if="get1"/>-->
		   				<!--<img src="../../assets/image/dailycoin1.png" class="bookimg" v-if="get2"/>-->
		   				<!--<img src="../../assets/image/dailycoin2.png" class="bookimg" v-if="get3"/>-->
		   			<!--</div>-->
		   			<!--<div class="book1">-->
		   				<!--<img src="../../assets/image/dailycoin.png" class="bookimg" v-if="get1"/>-->
		   				<!--<img src="../../assets/image/dailycoin1.png" class="bookimg" v-if="get2"/>-->
		   				<!--<img src="../../assets/image/dailycoin2.png" class="bookimg" v-if="get3"/>-->
		   			<!--</div>-->
		   			<!--<div class="book2" style="margin-right: -5%;" @click="gonext">-->
		   				<!--<img src="../../assets/image/bigcoin.png" class="bookimg1" v-if="get1"/>-->
		   				<!--<img src="../../assets/image/bigcoin1.png" class="bookimg1" v-if="get3"/>-->
		   			<!--</div>-->
			<!--</div>-->
			<!--</div>-->
	    <!--</transition>-->
		<!--<transition name="fade1">-->
			<!--<div class="contain" v-if="bigchoujiang">-->
				<!--<div class="backlist">-->
					<!--<img src="../../assets/image/choseacard.png" class="chooseacard"/>-->
					<!--<ul class="card-list clearfix">-->
						<!--<li class="card" v-for="li in list1" :key="li.id" @click="box2(li)">-->
							<!--<div class="card-face" v-bind:class="{'cardface':li.flag,'cardback':!li.flag,'answer':li.turefalse}">-->
								<!--<img v-if="!li.turefalse" src="../../assets/image/yelleoback.png" style="width: 90%;">-->
							<!--</div>-->
							<!--<div class="card-back" v-bind:class="{'cardback':li.flag,'cardface':!li.flag,'answer':li.turefalse}">-->
								<!--<img :src="li.bg" style="width: 82%;position: absolute;left: 8%;">-->
								<!--<img src="http://monkeytown.monkeytree.com.hk/image/front.png" style="width: 90%;">-->
							<!--</div>-->
						<!--</li>-->
					<!--</ul>-->
				<!--</div>-->
				<!--<div class="getbox" @click="goresult">-->
					<!--<button class="get">GET</button>-->
				<!--</div>-->
			<!--</div>-->
		<!--</transition>-->
		<!--<transition name="fade1">-->
			<!--<div class="contain" v-if="kapian">-->
				<!--<div class="kalist">-->
					<!--<img src="../../assets/image/newcard.png" class="chooseacard"/>-->
					<!--<div class="getcard">-->
						<!--<img src="../../assets/image/colcard.png" class="getcardimg"/>-->
						<!--<span class="getcardfont">12/12</span>-->
					<!--</div>-->
					<!--<ul class="card-list clearfix">-->
						<!--<li class="card" v-for="li in list1" :key="li.id">-->
							<!--<div class="card-back">-->
								<!--<img :src="li.bg" style="width: 82%;position: absolute;left: 8%;">-->
								<!--<span class="namestyle">pencil</span>-->
								<!--<img src="http://monkeytown.monkeytree.com.hk/image/front.png" style="width: 90%;">-->
							<!--</div>-->
						<!--</li>-->
					<!--</ul>-->
					<!--<div class="next">-->
						<!--<img src="../../assets/image/left.png" class="leftnext"/>-->
						<!--<img src="../../assets/image/right.png" class="rightnext"/>-->
					<!--</div>-->
				<!--</div>-->
				<!--<div class="getbox" @click="bossresult">-->
					<!--<button class="get">GET</button>-->
				<!--</div>-->
			<!--</div>-->
		<!--</transition>-->
	</div>

</template>

<script>
// 	import Result from "@/components/result.vue";
    import $ from 'jquery';
    var qs = require('qs');
	export default {
		name: "presult",
		components: {
			// Result
		},
		data() {
			return {
			  loading:false,
				show: Boolean,
				id: '',
				get1:false,
				get2:false,
				get3:true,
				zhezhao:true,
				resume:false,
        resume1:false,
        tryagain:false,
				choujiang:false,
				mycard:false,
				scorename:'SCORE',
				list1:[
					{
					id:1,
					flag:0,
					turefalse:0,
					bg:'http://monkeytown.monkeytree.com.hk/image/pencil.png'
					},
					{
					id:2,
					flag:0,
					turefalse:0,
					bg:'http://monkeytown.monkeytree.com.hk/image/pencil.png'
					},
					{
					id:3,
					flag:0,
					turefalse:0,
					bg:'http://monkeytown.monkeytree.com.hk/image/pencil.png'
					},
				],
				bigchoujiang:false,
				kapian:false,
				page: this.page++,
				type: 'presult',
				// url1: 'http://demo11.embraiz.com/mtGame/exercise/accountSum',
				url:'',
        url1: '/phonics/account',
        url2:'/phonics2/account',
        url3:'/phonics3/account',
				//url1:'http://localhost:8080/mtGame/exercise/accountSum',
				action1:false,
				action2:false,
				action3:false,
				unitsId:'',
				unit:'',
				menuId:'',
				nextmenu:'',
				score:0,
				allscore:'',
				coin:0,
				partName:'',
				account:'',
        insert:'',
				nice:false,
				again:false,
				great:false,
				amazing:false,
				nice0:false,
				again0:false,
				great0:false,
				amazing0:false,
         timeurl:'/user/playTime',
			}
		},
		methods: {
			change1(){
				var audio = document.getElementById('music');
				if(localStorage.getItem('audiomusic')=="false"){

				}else{
					audio.play();
				}
				this.action3=true;
				setTimeout(() => {
				this.action3=false;

				if(this.type==='intermediate'){
          this.$router.push({ //核心语句
            path: '/intermenu', //跳转的路径
            query: { //路由传参时push和query搭配使用 ，作用时传递参数
              unitsId:this.unitsId,
              unit:this.unit,
            }
          })
        }else if(this.type==='advanced'){
          this.$router.push({ //核心语句
            path: '/advmenu', //跳转的路径
            query: { //路由传参时push和query搭配使用 ，作用时传递参数
              unitsId:this.unitsId,
              unit:this.unit,
            }
          })
        }else {
          this.$router.push({ //核心语句
            path: '/phonicsmenu', //跳转的路径
            query: { //路由传参时push和query搭配使用 ，作用时传递参数
              unitsId:this.unitsId,
              unit:this.unit,
            }
          })
        }



				}, 1000);
			},
			change2(){//NEXT
			var audio = document.getElementById('music');
			if(localStorage.getItem('audiomusic')=="false"){

			}else{
				audio.play();
			}
				this.action1=true;
				setTimeout(() => {
				this.action1=false;
				// if (this.type == 'pageto') {
					this.$router.push({ //核心语句
						path: '/source', //跳转的路径
						// query: { //路由传参时push和query搭配使用 ，作用时传递参数
						// 	menuId: this.nextmenu,
						// 	unitsId:this.unitsId,
						// 	unit:this.unit,
						// }
					})
				}, 1000);
			},
			change3(){	},
			change() {//RESTART
				this.action2=true;
				setTimeout(() => {
				this.action2=false;
			if (this.type === 'phonics1') {
					this.$router.push({ //核心语句
						path: '/phonics1', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// id: this.id,
							// page: this.page,
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'phonics2') {
					this.$router.push({ //核心语句
						path: '/phonics2', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// id: this.id,
							// page: this.page,
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'phonics3') {
					this.$router.push({ //核心语句
						path: '/phonics3', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// id: this.id,
							// page: this.page,
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'phonics4') {
					this.$router.push({ //核心语句
						path: '/phonics4', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// id: this.id,
							// page: this.page,
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'phonics5') {
					this.$router.push({ //核心语句
						path: '/phonics5', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// id: this.id,
							// page: this.page,
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'phonics6') {
					this.$router.push({ //核心语句
						path: '/phonics6', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// id: this.id,
							// page: this.page,
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'phonics7') {
					this.$router.push({ //核心语句
						path: '/phonics7', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// id: this.id,
							// page: this.page,
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'phonics8') {
					this.$router.push({ //核心语句
						path: '/phonics8', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// id: this.id,
							// page: this.page,
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'phonics9') {
					this.$router.push({ //核心语句
						path: '/phonics9', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'phonics10') {
					this.$router.push({ //核心语句
						path: '/phonics10', //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'intermediate') {
					this.$router.push({ //核心语句
						path: '/'+this.partName, //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}else if (this.type === 'advanced') {
					this.$router.push({ //核心语句
						path: '/'+this.partName, //跳转的路径
						query: { //路由传参时push和query搭配使用 ，作用时传递参数
							// type: this.type,
							menuId: this.menuId,
							unitsId:this.unitsId,
							unit:this.unit,
						}
					})
				}
            	}, 1000);
			},
			gonext(){
				this.choujiang=false;
				this.bigchoujiang=true;
			},
			box2(li){
			   for(var i=0;i<this.list1.length;i++){
				   if(this.list1[i].flag==1){
					   var fan=3;
				   }
			   }
			   if(fan!=3){
					  if (li.flag == 0) {
					  	li.flag = 1;
					  }
				}
			},
			goresult(){
				for(var i=0;i<this.list1.length;i++){
					 if(this.list1[i].flag==1){
					     var fan=3;
					 }
				}
				 if(fan==3){
					if(this.$route.query.type=='partBoss1'||this.$route.query.type=='partBoss2'||this.$route.query.type=='partpBoss1'||this.$route.query.type=='partpBoss2'){
						this.choujiang=false;
						this.bigchoujiang=false;
						this.resume=false;
						this.kapian=true;
					}else{
						this.choujiang=false;
						this.bigchoujiang=false;
						this.kapian=false;
						this.resume=true;
					}
         }
			},
			bossresult(){
			   this.choujiang=false;
			   this.bigchoujiang=false;
			   this.kapian=false;
			   this.resume=true;
			},
			bodyScroll(event) {
			event.preventDefault();
			},
		},
		destroyed() {
	    	document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
		},
		created() { //生命周期里接收参数
			this.type = this.$route.query.type;
			this.account=this.$route.query.account;
			this.partName=this.$route.query.partName;
			this.menuId=this.$route.query.menuId;
			this.unitsId=this.$route.query.unitsId;
			this.unit=this.$route.query.unit;
			this.insert=this.$route.query.insert;
			if(this.type==="intermediate"){
				this.url=this.url2;
			}else if(this.type==="advanced"){
        this.url=this.url3;
      }else {
        this.url=this.url1;
      }
      alertImg(this.$axios.defaults.baseURL2);
			this.$axios.post(this.url, qs.stringify({
				menuId:this.menuId,
				score:this.account,
        insert:this.insert
			})).then(res => {
				this.star = res.data.star;
				this.score = res.data.score;
				this.coin = res.data.coin;
				this.nextmenu=res.data.menuDetailId;
			this.allscore=this.score;
      this.resume=true;
			if(this.star==0){
        this.tryagain=true;
				setTimeout(() => {
				this.again=true;
				this.again0=false;
				setTimeout(() => {
				this.again0=true;
				this.zhezhao=false;
				},1100);
				}, 100);
			 }else if(this.star==1){
         this.resume1=true;
				setTimeout(() => {
				this.nice=true;
				this.nice0=false;
				setTimeout(() => {
				this.nice0=true;
				this.zhezhao=false;
				}, 1100);
				}, 200);
			}else if(this.star==2){
        this.resume1=true;
				setTimeout(() => {
				this.great0=false;
				this.great=true;
				setTimeout(() => {
				this.great0=true;
				this.zhezhao=false;
				},1500);
				},100);
			}else if(this.star==3){
        this.resume1=true;
				setTimeout(() => {
				this.amazing0=false;this.amazing=true;
				setTimeout(() => {
				this.amazing0=true;
				this.zhezhao=false;
				}, 800);
			 },100);
			 }
      setTimeout(() => {
          document.getElementById('alertFram').style.display = 'none'}
        ,1000)
			}, res => {
				alertMsg("You must be connected to the internet.<br>Please connect and try again.");
        setTimeout(() => {
            document.getElementById('alertFram').style.display = 'none'}
          ,1000)
			});
			// 统计时间
			 var endtimestamp = (new Date()).getTime();
			this.$axios.post(this.timeurl, qs.stringify({
			  id: localStorage.getItem('startTimeid'),
			  time: endtimestamp,
			  name: localStorage.getItem('gamename'),
			  studentId:localStorage.getItem('studentId')
			})).then(res => {
			  localStorage.setItem('startTimeid','');
			  localStorage.setItem('gamename','');
			}, res => {
			  alertMsg("You must be connected to the internet.<br>Please connect and try again.");
			});
			 document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
		}

	};
</script>

<style scoped lang="less">
	.body {
		padding: 0;
	}

	.presult {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
		background-color: #44ccc2;
	}

	.fontsize {
		// font-family: unset;
		color: white;
		margin-bottom: -12%;
		font-family: KG;
		position: absolute;
		font-size: large;
	}
	.centerimg{
		width: 12%;
		 margin: 0 10px;
	}

	.contain {
		width: 100%;
		height: 100%;
		display:block;
		text-align: center;
		position: absolute;
		// display: contents;
		overflow: hidden;
		background-color: #44ccc2;
	}
	.pcoin{
		font-size: x-large;
		margin: 0 4%;
	}
	.pcoin1{
		font-size: x-large;
		margin: 0 1%;
	}
	.coin{
		width: 5%;
		margin-right: 10px;
		margin-bottom: -4px;
	}
	.coin1{
		width: 4%;
		margin-right: 10px;
		margin-bottom: 0px;
	}
    .leftword{
		float: left;
		 position: absolute;
		 left: 17%;
	}
	.rightword{
		float: right;
		    text-align: right;
		  right: 15%;
		   position: absolute;
	}
	.listimg {
		margin-left: 20px;
	}

	.listimg img {
		cursor: pointer;
		transition: all 0.6s;
	}

	.listimg:visited {
		transform: scale(1);
	}

	.listimg:active {
		transform: scale(1.2);
	}

	.fade-enter-active {
		transition: all 0.6s;
	}

	.fade-leave-active {
		transition: all 0.6s;
	}

	.fade-enter {
		transform: translate3d(100%, 0, 0);
	}

	.fade-leave-to {
		//transform: translate3d(100%, 0, 0);
		// transform: translate3d(0, -100%, 0);
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
	.backgcoin{
		width: 70%;
		    height: 10%;
		    position: absolute;
		    background-color: #FF8973;
		    margin: 0 15%;
		    top: 45%;
	}
	.book1{
		       width: 15%;
		       height: 100%;
		       margin-top: -5%;
		       float: left;
		       margin-right: 8%;
               display: flex;
	}
	.book2{
		       width: 15%;
		       height: 100%;
		       margin-top: -7%;
		       float: left;
		       margin-right: 8%;
	           display: flex;
	}
	.bookimg{
	   position: absolute;
	   width: 18%;
	}
	.bookimg1{
	   position: absolute;
	   width: 23%;
	}

	.backlist{
		width: 70%;
		height: 60%;
		border-radius: 30px;
		margin: 0 auto;
		margin-top: 9%;
		background-color:  #FF8973;
	}
	.chooseacard{
		width: 50%;
		margin-top: 0.5rem;
	}
	ul,
	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.clearfix {
		*zoom: 1;
	}

	/*清除浮动*/
	.clearfix:after {
		display: table;
		content: '';
		clear: both;
	}

	/*兼容其他浏览器*/

	.card-list .card {
		//float: left;
		//position: relative;
		//margin-left: 20px;
		width: 25%;
		height: 35%;
		margin: 0 2%;
		display: inline-block;
		-webkit-perspective: 600px;
		/*兼容 Safari and Chrome */
		-moz-perspective: 600px;
		/*兼容 Firefox 4 */
		-ms-perspective: 600px;
		perspective: 600px;
	}

	.card-list .card-face,
	.card-list .card-back {
		position: absolute;
		left: 0;
		top: 0;
		-webkit-transition: all 0.5s ease-in-out;
		-o-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
		/*规定以慢速开始和结束的过渡效果*/
		-webkit-transform-style: perspective-3d;
		-moz-transform-style: perspective-3d;
		-ms-transform-style: perspective-3d;
		transform-style: perspective-3d;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		backface-visibility: hidden;
		/*如果在旋转元素不希望看到其背面时，该属性很有用。*/
	}
	.cardface {
		z-index: 1;
		/*当鼠标在上面，-1，变为底下*/
		-webkit-transform: rotateY(180deg);
		-ms-transform: rotateY(180deg);
		-o-transform: rotateY(180deg);
		transform: rotateY(180deg);
	}

	.cardback {
		z-index: 2;
		-webkit-transform: rotateY(0deg);
		-ms-transform: rotateY(0deg);
		-o-transform: rotateY(0deg);
		transform: rotateY(0deg);
	}
	.getbox{
		width: 17%;
		    height: 14%;
		    color: white;
		    background-color: #007BB8;
		    font-family: KG;
		    margin: 0 auto;
		    font-size: 2rem;
		    border-radius: 80px;
		    margin-top: -4%;
	}
	.get{
		    margin: 0;
		    height: 100%;
		    display: inline-block;
		    border-style: none;
		    background: none;
		    color: white;
		    font-size: 2rem;
		    font-family: KG;
	}
	.kalist{
		width: 70%;
		height: 60%;
		border-radius: 30px;
		margin: 0 auto;
		margin-top: 9%;
		background-color: #FFD550;
	}
	.next{
		position: relative;
		width: 100%;
		top: 11%;
	}
	.leftnext{
		    width: 12%;
		    float: left;
		    margin-left: -6%;
	}
	.rightnext{
		float: right;
	    width: 12%;
	    margin-right: -6%;
	}
	.namestyle {
		position: absolute;
		top: 70%;
		display: block;
		width: 96%;
		color: #5c3400;
		font-family: pepper;
	}
	.getcard{
		    position: absolute;
		    width: 30%;
		    float: right;
		    right: 14%;
		    top: 22%;
	}
	.getcardimg{
		    width: 8%;
	}
	.getcardfont{
		font-size: larger;
		    font-family: KG;
		    color:  #007BB8;
	}
	@media screen and (max-width: 481px) {
		 .fontsize{
				 transform: scale(0.9);
		}
		.leftword{

			 left: 15%;
		}
		.coin{
			width: 6%;
		}
		.rightword{
			  right: 5%;
		 }
		 .card-list .card{
		     margin-top: 7%;
		 }
		.get{
		    font-size: 1.5rem;
		}
		.next{
			top: 9%;
		}
		.namestyle {
			top: 65%;
		}
		.getcard{
		    top:18%;
		}
		.getcardimg{
		    width: 9%;
		}
		.getcardfont{
		    font-size: 1rem;
		}
	}
	@media screen and (min-width: 482px) and (max-width: 569px) {
		.get{
			 font-size: 1.5rem;
		}
		.getcardfont{
		    font-size: 1rem;
		}
		.coin{
			width: 6%;
		}
	}
	@media screen and (min-width: 1024px) and (max-width:1600px) {
		.coin{
			width: 4%;
			margin-right: 10px;
			margin-bottom: -4px;
		}
		.coin1{
			width: 3%;
		}
		.pcoin{
			font-size: x-large;
			margin: 0 3%;
		}
	   .centerimg{
	   	 margin: 0 15px;
	   }
	   .fontsize{
		   margin-bottom: -19%;
		 transform: scale(1.2);
	   }
	   .rightword{
	   	float: right;
	   	  right: 19%;
	   	   position: absolute;
	   }
	   .backgcoin {
	       height: 8%;
	       top: 46%;
		}
		.backlist{
			margin-top: 13%;
		}
		.chooseacard{
		    margin-top: 2rem;
		}
		.card-list .card{
		    width: 29%;
			margin: 0;
		    margin-top: 6%;
		}
		.getbox{
		    width: 17%;
		    height: 10%;
			font-size: 3rem;
		}
		.get{
            font-size: 3rem;
	    }
		.kalist{
		    margin-top: 13%
		}
		.next{
			top: 11%;
		}
		.namestyle {
			font-size: x-large;
		}
		.getcard{
		    top: 25%;
		}
		.getcardimg{
		    width: 7%;
		}
		.getcardfont{
		    font-size: 1.5rem;
		}
	}
	@media screen and (min-width: 812px) and (max-width:1023px) {
		 .centerimg{
			width: 10%;
		}
		.pcoin{
			font-size: x-large;
			margin: 0 4%;
		}
		.pcoin1{
			font-size: x-large;
			margin: 0 2%;
		}
		.coin{
			width:4%;
		}
		.coin1{
			width: 3%;
		}
		.backlist{
		    width: 70%;
		    height: 64%;
		    border-radius: 30px;
		    margin: 0 auto;
		    margin-top: 7%;
		}
		.card-list .card{
		    width: 20%;
		    height: 35%;
		    margin: 0 4%;
		}
		.next{
			top: 8%;
		}
		.getcard{
			top: 27%;
		}
	}
  @media screen and (min-width: 1600px){
    .coin{
      width: 4%;
      margin-right: 10px;
      margin-bottom: -4px;
    }
    .coin1{
      width: 3%;
    }
    .pcoin{
      font-size: 4rem;
      margin: 0 3%;
    }
    .centerimg{
      margin: 0 15px;
    }
    .fontsize{
      margin-bottom: -13%;
      transform: scale(1.2);
    }
    .rightword{
      float: right;
      right: 19%;
      position: absolute;
      font-size: 3rem;
    }
    .leftword{
      font-size: 3rem;
      span{
        font-size: 4rem !important;
      }
    }
    .backgcoin {
      height: 8%;
      top: 46%;
    }
    .backlist{
      margin-top: 13%;
    }
    .chooseacard{
      margin-top: 2rem;
    }
    .card-list .card{
      width: 29%;
      margin: 0;
      margin-top: 6%;
    }
    .getbox{
      width: 17%;
      height: 10%;
      font-size: 3rem;
    }
    .get{
      font-size: 3rem;
    }
    .kalist{
      margin-top: 13%
    }
    .next{
      top: 11%;
    }
    .namestyle {
      font-size: x-large;
    }
    .getcard{
      top: 25%;
    }
    .getcardimg{
      width: 7%;
    }
    .getcardfont{
      font-size: 1.5rem;
    }
  }
</style>
