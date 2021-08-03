<template>
	<div class="selectpage">
		<transition name="fades">
			<!-- 选择角色页面 -->
			<div class="about">
				<div class="menu">
					<div style="position: relative; display: block;">
						<span class="inputt">Please choose the player</span>
						<button type="button" class="logout" @click="logout">LOG OUT</button>
					</div>
					<div class="character">
						<div class="listone" v-for="li in sonList" :key="li.studentId"  @click="student(li)">
							<div class="bluecicle">
								<img :src=li.gameImage class="imgstyle">
							</div>
							<img src="../../assets/image/bluebottom.png" class="imgBstyle">
							<div class="userName">
								<p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{li.gameName}}</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</transition>
	</div>


</template>

<script>
	import $ from "jquery";
	var qs = require('qs');
	export default {
		name: "selectpage",
		watch: {

		},
		data() {
			return {
        guardianId:'',
				sonList:[],
				picked: "pick",
				//pic: "http://localhost:8080/mtGame",
				pic: "",
				// url: "http://demo11.embraiz.com/mtGame/user/getSon",
				// pic: "http://demo11.embraiz.com/mtGameHK",
				url: "/user/",
        url2:'',
        url1:''
				//url: 'http://localhost:8080/mtGame/user/getSon',
				// userId:'',
			};
		},
		methods: {
         logout(){
			 localStorage.setItem("userId", '');
			 this.$router.push({
			 	path: "/login", //跳转的路径
			 });
		 },
		 student(li){
			   localStorage.setItem("studentId", li.studentId);
			    localStorage.setItem("firstName", li.gameName);
				 localStorage.setItem("gameImage", li.gameImage);
				 localStorage.setItem("sumCoins", li.sumCoins);

       this.$router.push({
         path: "/source",
       });
    //    this.url2=this.url+"checkVerifyCode";
    //    this.$axios
    //      .post(this.url2,qs.stringify({
    //        verifyCode:localStorage.getItem('verifyCode'),
    //        studentId:li.studentId,
    //      })).then(
    //      res => {
    //        if(res.data.success==="false") {
    //          this.$router.push({path: '/login'});
    //          alertMsg5("Login exceeds maximum allowed users.");
    //        }else {
    //          this.$router.push({
    //            path: "/source",
    //          });
    //        }
    //      },
    //      res => {
    //        // alertMsg("You must be connected to the internet.<br>Please connect and try again.");
    //      });
		 },
		},
		created() {
            this.pic=this.$axios.defaults.baseURL2;
            this.guardianId = localStorage.getItem('userId');
            this.url1=this.url+'getSon';
            this.$axios
            	.post(this.url1,qs.stringify({
            			guardianId: this.guardianId,
            		})
            	).then(
            		res => {
            			this.sonList=res.data.sonList;
						for(var i=0;i<this.sonList.length;i++){
							this.sonList[i].gameImage=this.pic+this.sonList[i].gameImage;
							if(this.sonList[i].gameName==''||this.sonList[i].gameName==null){
							    this.sonList[i].gameName=this.sonList[i].firstName;
							}
						}
            		},
            		res => {
            			alertMsg("You must be connected to the internet.<br>Please connect and try again.");
            		}
            	);
		}
	}
</script>

<style scoped lang="less">
	.about {
		display: flex;
		margin: 0px;
		width: 100%;
		height: 100%;
		display: block;
		text-align: center;
		position: fixed;
		background-color: #44ccc2;
	}

	.menu {
		padding-top: 9%;
		display: flex;
		margin: 0px;
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
	}

	.fontsize {
		font-family: pepper;
		color: white;
		bottom: 12%;
		left: 6%;
		position: absolute;
		font-size: 1.4rem;
		max-height: 100%;
		min-height: 60%;
		//margin-left: 2%;
	}

	.inputt {
		background-color: white !important;
		border: none;
		padding: 15px;
		width: 35%;
		font-size: 1.2rem;
		color: #44ccc2 !important;
		margin: 0 auto;
		border-radius: 40px;
		margin-top: 10px;
		font-family: pepper;
	}

	.logout {
		color: white;
		background-color: orange;
		border: none;
		padding: 10px;
		margin-left: 10px;
		font-size: 1.2rem;
		border-radius: 30px;
		font-family: kg;
	}
    .character{
		    margin: 0 auto;
		    width: 90%;
		    text-align: center;
		    height: 60%;
		    position: relative;
			display: block;
		    margin-top: 5%;
		    overflow: hidden;
		    overflow-y: scroll;
	}
	.listone {
		    margin: 10px 15px;
		    display: inline-table;
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
		    width: 165px;
		    height: 58px;
		margin-top: -15%;
		    display: list-item;
	}

	.userName {
		width: 100px;
		overflow: hidden;
		top: -2.8rem;
		color: white;
		margin: 0 auto;
		position: relative;
		text-align: center;
		font-family: pepper;
	}

	@media screen and (max-width: 481px) {
		.menu {
			//padding-top: 18%;
		}

		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 11%;
			left: 3%;
			position: absolute;
			font-size: large;
			max-height: 100%;
			min-height: 60%;
			margin-left: 2%;
		}
	}

	@media screen and (min-width: 482px) and (max-width: 569px) {
		.menu {
			padding-top: 5%;
		}

		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 11%;
			left: 3%;
			position: absolute;
			font-size: large;
			max-height: 100%;
			min-height: 60%;
			margin-left: 2%;
		}

	}

	@media screen and (min-width: 1024px) and (max-width: 1600px) {
		.menu {
			padding-top: 24%;
			transform: scale(1.2);
		}

		.fontsize {
			font-family: pepper;
			color: white;
			bottom: 12%;
			left: 8%;
			position: absolute;
			font-size: xx-large;
			max-height: 80%;
			min-height: 50%;
			margin-left: 2%;
			// transform: scale(1.2);
		}
         .listone{
			margin: 25px 70px;
			    display: inline-table;
			    transform: scale(1.2);
		 }
	}

	@media screen and (min-width: 812px) and (max-width: 1023px) {
		.menu {
			padding-top: 7%;
		}

		.fontsizes {
			margin-top: 18%;
		}
        .listone{
        			margin:20px 38px;
        			    display: inline-table;
        			    transform: scale(1.2);
        }

	}
  @media screen and (min-width: 1600px){
    .menu {
      padding-top: 21%;
      transform: scale(2);
    }
    .character{
      margin-top: 3%;
    }
  }
</style>
