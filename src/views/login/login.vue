<template>
	<div class="loginpage">
		<transition name="fades" v-if="resume">
			<!-- 登录页面 -->
			<div class="about">
				<div class="menu">
					<form style="color: #44ccc2;">
						<span class="warnspan" v-if="warn">The phone number / email and password that you've entered doesn't match any
							account.</span>
						<div style="position: relative; width: 30%;float: left;padding-left: 7%;">
							<img src="../../assets/image/phone.png" class="phone" />
							<input type="text" v-model="username" name="username" class="inputu" placeholder="Phone or Email" />
							<img src="../../assets/image/error.png" class="error" v-if="warn4" />
						</div>
						<div style="position: relative; width: 30%;float: left;padding-left: 7%;">
							<img src="../../assets/image/password.png" class="phone" />
							<input type="password" class="inputp" placeholder="Password" v-model="password" name="password" autocomplete />
							<img src="../../assets/image/error.png" class="error" v-if="warn5" />
						</div>
						<div class="inputc1">
							<button type="button" class="login" @click="$tips(true);login()">LOG IN</button>
							<button type="button" class="visitor" @click="$tips(true);goregister()">
								SIGN UP
							</button>
						</div>
						<div class="inputc" v-model="checked">
							<div class="item1" v-if="checkbox">
								<input id="item1" type="radio" name="item" value="pick" v-model="picked" @click="checkboxs" />
								<label for="item1"></label>
								<button type="button" @click="$tips(true);checkboxs()" class="remesty">remenber me</button>
								<button type="button" class="forgsty" @click="$tips(true);forget()">forget password ?</button>
							</div>
							<div class="item1" v-if="!checkbox">
								<input id="item2" type="radio" name="item" value="pick2" v-model="picked" @click="checkboxs" />
								<label for="item2"></label>
								<button type="button" @click="checkboxs" class="remesty">remenber me</button>
								<button type="button" class="forgsty" @click="forget">forget password ?</button>
							</div>
						</div>

					</form>
				</div>
			</div>
		</transition>
		<transition name="fades" v-if="!resume">
			<!-- 注册页面 -->
			<div class="about">
				<div class="menu" style="color: #44ccc2;">
					<div v-if="getphone">
						<div style="position: relative; width:13%;float: left;padding-left: 3%;">
							<img src="../../assets/image/leftred.png" class="leftRsty" @click="$tips(true);backlogin()">
						</div>
						<div style="position: relative; width: 30%;float: left;text-align: left;">
							<span class="warnstyle" v-if="warn1">Enter the phone number or email you've registered at Monkey Tree.</span>
							<span class="warnstyle" v-if="warn2">
							There is no active student matching the telephone number /email that you have provided. Please make sure the information is correct and try again.</span>
							<span class="warnstyle" v-if="againregister">Your phone number or email has been registered.</span>
						</div>
						<div style="position: relative; width: 30%;float: left;padding-left: 4%;">
							<img src="../../assets/image/phone.png" class="phone2" />
							<input type="text" v-model="telephone" name="phone" class="inputu" placeholder="Phone / Email" />
							<img src="../../assets/image/error.png" class="error1" v-if="warn2" />
						</div>
						<div style="position: relative; width: 13%;float: right;padding-right: 3%;">
							<img src="../../assets/image/rightblue.png" class="rightBsty" @click="$tips(true);checkcode()">
						</div>
					</div>
					<div v-if="getcodes">
						<div style="position: relative; width:13%;float: left;padding-left: 3%;">
							<img src="../../assets/image/leftred.png" class="leftRsty" @click="$tips(true);backphone()">
						</div>
						<div style="position: relative; width: 30%;float: left;text-align: left;">
							<span class="warnstyle" v-if="warn6">Please type the verification code sent to <span style="color:#057bb8;">{{telephone}}</span></span>
							<span class="warnstyle" v-if="warn7">
								The code that you've entered doesn't match.</span>
						</div>
						<div style="position: relative; width: 30%;float: left;padding-left: 4%;">
							<img src="../../assets/image/key.png" class="phone2" />
							<input type="text" placeholder="Verification Code" v-model="code" name="code" class="inputu" />
							<img src="../../assets/image/error.png" class="error1" v-if="warn7" />
							<div style="width: 100%; display: inline-flex; padding-left: 15px;">
								<button type="button" class="receive">Don't receive code?</button>
								<button type="button" class="resend" v-show="!show" @click="$tips(true);checkcode()">Resend</button>
								<button type="button" class="resends" v-show="show">Resend({{this.count}}s)</button>
							</div>
						</div>
						<div style="position: relative; width: 13%;float: right;padding-right: 3%;">
							<img src="../../assets/image/rightblue.png" class="rightBsty" @click="$tips(true);sencode()">
						</div>
					</div>
					<div v-if="getpassw">
						<!-- <span class="warn9sty">The password must consist of more than 8 bits of uppercase, lowercase, numeric, and special symbols</span> -->
						<div style="position: relative; width:13%;float: left;padding-left: 3%;">
							<img src="../../assets/image/leftred.png" class="leftRsty" @click="$tips(true);backcode()">
						</div>
						<div style="position: relative; width: 30%;float: left;">
							<img src="../../assets/image/password.png" class="phone3" />
							<input type="password" v-model="setpassword" name="setpassword" class="inputsetpa" placeholder="Create Password" v-if="regifor"/>
							<input type="password" v-model="setpassword" name="setpassword" class="inputsetpa" placeholder="New Password" v-if="!regifor" />
						</div>
						<div style="position: relative; width: 30%;float: left;margin-left: 4%;">
							<img src="../../assets/image/password.png" class="phone3" />
							<input type="text" placeholder="Confirm Password" v-model="setpassword1" name="setpassword1" class="inputsetpa" />
							<img src="../../assets/image/error.png" class="error1" v-if="warn8" />
							<div style="width: 100%; display: inline-flex; padding-left: 15px;">
								<span class="warn8sty" v-if="warn8">Please make sure your password must be at least 8 characters with a combination of at least 1 uppercase, 1 lowercase, 1 number and 1 punctuation character.</span>
							</div>
						</div>
						<div style="position: relative; width: 13%;float: right;padding-right: 3%;">
							<img src="../../assets/image/rightblue.png" class="rightBsty" @click="register">
						</div>
					</div>
					<div v-if="getresult">
						<div class="resultsty">
							<h2>Congratulation!</h2>
							<p>Your registration is accepted.</p>
							<button type="button" class="play"  @click="visitor">PLAY</button>
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
		name: "login",
		watch: {

		},
		data() {
			return {
				checkbox: true,
				warn: false,
				warn4: false,
				warn5: false,
				warn6: true,
				warn7: false,
				warn1: true,
				warn2: false,
				warn3: false,
				warn8:false,
				// warn9:false,
				againregister:false,
				regifor: true,
				forgetorregester:true,
				username: "",
				password: "",
				setpassword: "",
				setpassword1:'',
				telephone: '',
				code: "",
				phone: "",
				checked: true,
				resume: true,
				picked: "pick",
				getphone: true,
				getcodes: false,
				getpassw: false,
				getresult: false,
				show: true,
				count: '',
				timer: null,
				sent:true,
				url1:'',url2:'',url3:'',url4:'',
				// textphone:'18162319267',
				pic: "",
				style:"",
				unit:"",
				level:"",
				cources:"",
				studentId:'',
				part:'',
				// url: "http://demo11.embraiz.com/mtGame/user/",
				// pic: "http://demo11.embraiz.com/mtGameHK",
				// url: "user/",
				//url: 'http://localhost:8080/mtGame/user/',
				// userId:'',
			};
		},
		methods: {
			login() {
				this.warn = false;
				this.warn4 = false;
				this.warn5 = false;
				var myReg =  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
				// var phoneRegWithArea = /^[1-9]{1}[0-9]{5,8}$/;
				if (this.username != '' && this.username != null && this.password != null && this.password != '') {
					// this.url1 = this.url + "login";
					if(myReg.test(this.username)) {
						this.$axios
								.post('/user/login', qs.stringify({
									email: this.username,
									password: this.password
								}))
								.then(
										res => {
											if (res.data.success == "true") {
												if (res.data.msg == "loginError") {
													this.warn = true;
													this.warn4 = true;
													this.warn5 = false;
												} else {
													localStorage.setItem("username", this.username);
													localStorage.setItem("password", res.data.password);
													localStorage.setItem("checkbox", this.checkbox);
													localStorage.setItem("userId", res.data.guardianId);
													localStorage.setItem('verifyCode',res.data.verifyCode);
													if(this.studentId){
														this.guardianId = res.data.guardianId;
														this.$axios
																.post('/user/getSon',qs.stringify({
																			guardianId: this.guardianId,
																		})
																).then(res => {
																	this.sonList=res.data.sonList;
																	for(var i=0;i<this.sonList.length;i++){
																		if(this.sonList[i].studentId==this.studentId){
																			this.sonList[i].gameImage=this.pic+this.sonList[i].gameImage;
																			localStorage.setItem("firstName", this.sonList[i].firstName);
																			localStorage.setItem("gameImage", this.sonList[i].gameImage);

																			if(this.level=='Intermediate'){
																				this.$router.push({
																					path: '/intermenu',
																					query: {
																						style:this.style,
																						unit:this.unit,
																						level:this.level,
																						cources:this.cources,
																						studentId:this.studentId
																					}
																				})
																			}else if(this.level=='Beginner'){
																				this.$router.push({
																					path: '/phonicsmenu',
																					query: {
																						style:this.style,
																						unit:this.unit,
																						level:this.level,
																						cources:this.cources,
																						studentId:this.studentId
																					}
																				})
																			}else {
																				this.$router.push({
																					path: '/home',
																					query: {
																						style:this.style,
																						unit:this.unit,
																						level:this.level,
																						cources:this.cources,
																						studentId:this.studentId,
																						part:this.part
																					}
																				})
																			}

																		}
																	}

																},
																res => {
																	alertMsg("You must be connected to the internet.<br>Please connect and try again.");
																});

													}else {
														this.$router.push({
															path: '/select'
														})
													}
												}
											} else {
												this.warn = true;
												this.warn4 = false;
												this.warn5 = true;
											}
										},
										res => {
											alertMsg("You must be connected to the internet.<br>Please connect and try again.");
										}
								);
					}else if(this.username.length > 7){
						this.$axios
								.post('/user/login', qs.stringify({
									telephone: this.username,
									password: this.password
								}))
								.then(
										res => {
											if (res.data.success == "true") {
												if (res.data.msg == "loginError") {
													this.warn = true;
													this.warn4 = true;
													this.warn5 = false;
												} else {
													localStorage.setItem("username",this.username);
													localStorage.setItem("password", res.data.password);
													localStorage.setItem("checkbox", this.checkbox);
													localStorage.setItem("userId", res.data.guardianId);
													localStorage.setItem('verifyCode',res.data.verifyCode);
													if(this.studentId){
														this.guardianId = res.data.guardianId;
														this.$axios
																.post('/user/getSon',qs.stringify({
																			guardianId: this.guardianId,
																		})
																).then(res => {
																	this.sonList=res.data.sonList;
																	for(var i=0;i<this.sonList.length;i++){
																		if(this.sonList[i].studentId==this.studentId){
																			this.sonList[i].gameImage=this.pic+this.sonList[i].gameImage;
																			localStorage.setItem("firstName", this.sonList[i].firstName);
																			localStorage.setItem("gameImage", this.sonList[i].gameImage);

																			if(this.level=='Intermediate'){
																				this.$router.push({
																					path: '/intermenu',
																					query: {
																						style:this.style,
																						unit:this.unit,
																						level:this.level,
																						cources:this.cources,
																						studentId:this.studentId
																					}
																				})
																			}else if(this.level=='Beginner'){
																				this.$router.push({
																					path: '/phonicsmenu',
																					query: {
																						style:this.style,
																						unit:this.unit,
																						level:this.level,
																						cources:this.cources,
																						studentId:this.studentId
																					}
																				})
																			}else {
																				this.$router.push({
																					path: '/home',
																					query: {
																						style:this.style,
																						unit:this.unit,
																						level:this.level,
																						cources:this.cources,
																						studentId:this.studentId,
																						part:this.part
																					}
																				})
																			}

																		}
																	}

																},
																res => {
																	alertMsg("You must be connected to the internet.<br>Please connect and try again.");
																});

													}else {
														this.$router.push({
															path: '/select'
														})
													}
												}
											} else {
												this.warn = true;
												this.warn4 = false;
												this.warn5 = true;
											}
										},
										res => {
											alertMsg("You must be connected to the internet.<br>Please connect and try again.");
										}
								);
					}else{
						this.warn = true;
						this.warn4 = false;
						this.warn5 = true;
					}

				} else {
					this.warn = true;
					this.warn4 = true;
					this.warn5 = false;
				}
			},
			forget() {
				this.forgetorregester=false;
				this.regifor = false;
				this.resume = false;
				this.telephone='';this.code='';this.setpassword='';this.setpassword1='';
			},
			visitor() {
				if(this.studentId){
					this.guardianId = localStorage.getItem('userId');
					this.$axios
							.post('/user/getSon',qs.stringify({
										guardianId: this.guardianId,
									})
							).then(res => {
								this.sonList=res.data.sonList;
								for(var i=0;i<this.sonList.length;i++){
									if(this.sonList[i].studentId==this.studentId){
										this.sonList[i].gameImage=this.pic+this.sonList[i].gameImage;
										localStorage.setItem("firstName", this.sonList[i].firstName);
										localStorage.setItem("gameImage", this.sonList[i].gameImage);

										if(this.level=='Intermediate'){
											this.$router.push({
												path: '/intermenu',
												query: {
													style:this.style,
													unit:this.unit,
													level:this.level,
													cources:this.cources,
													studentId:this.studentId
												}
											})
										}else if(this.level=='Beginner'){
											this.$router.push({
												path: '/phonicsmenu',
												query: {
													style:this.style,
													unit:this.unit,
													level:this.level,
													cources:this.cources,
													studentId:this.studentId
												}
											})
										}else {
											this.$router.push({
												path: '/home',
												query: {
													style:this.style,
													unit:this.unit,
													level:this.level,
													cources:this.cources,
													studentId:this.studentId,
													part:this.part
												}
											})
										}

									}
								}

							},
							res => {
								alertMsg("You must be connected to the internet.<br>Please connect and try again.");
							});

				}else {
					this.$router.push({
						path: '/select'
					})
				}
			},
			login2(){//注册后再登录一次获取识别码
				if(myReg.test(this.username)) {
					this.$axios
							.post('/user/login', qs.stringify({
								email: this.username,
								password: this.password
							}))
							.then(
									res => {
										if (res.data.success == "true") {
											localStorage.setItem('verifyCode',res.data.verifyCode);
										}
									},
									res => {
										alertMsg("You must be connected to the internet.<br>Please connect and try again.");
									});
				}else if(this.username.length > 7){
					this.$axios.post('/user/login', qs.stringify({
						telephone: this.selectItem+this.username,
						password: this.password
					})).then(
							res => {
								if (res.data.success == "true") {
									localStorage.setItem('verifyCode',res.data.verifyCode);
								}
							},
							res => {
								alertMsg("You must be connected to the internet.<br>Please connect and try again.");
							});
				}
			},
			checkboxs() {
				this.checkbox = !this.checkbox;
			},
			goregister() {
				this.forgetorregester=true;
				this.resume = false;
				this.telephone='';this.code='';this.setpassword='';this.setpassword1='';
			},
			backlogin() {
				this.resume = true;
				this.telephone='';
				this.warn1 = true;
				this.warn2 = false;
				this.againregister=false;
			},
			backcode(){
				this.getcodes = true;
				this.getpassw = false;
			},
			checkcode() {
				if(this.sent==true){
					this.sent=false;
					// this.warn1 = true;
					// this.warn2 = false;this.againregister=false;
					if(this.forgetorregester==false){
						this.url2 = '/user/CheckCode';
					}else if(this.forgetorregester==true){
						this.url2 =  '/user/CheckCodeRegister';
					}

					if (this.telephone == '' || this.telephone == null) {
						this.warn2 = true;this.sent=true;
						this.warn1 = false;this.againregister=false;
					} else {
						var myReg =  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
						// var phoneRegWithArea = /^[1-9]{1}[0-9]{5,8}$/;
						if(myReg.test(this.telephone)) {
							this.email=true;
							this.$axios
									.post(this.url2, qs.stringify({
										email: this.telephone,
									}))
									.then(
											res => {
												if (res.data.false == "errorEmail") {

													if(res.data.success==true){
														this.getcodes = true;
														this.getphone = false;
														const TIME_COUNT = 120;
														if (!this.timer) {
															this.count = TIME_COUNT;
															this.show = true;
															this.timer = setInterval(() => {
																if (this.count > 0 && this.count <= TIME_COUNT) {
																	this.count--;
																} else {
																	this.show = false; this.sent=true;
																	clearInterval(this.timer);
																	this.timer = null;
																}
															}, 1000)
														}
													}else{
														this.warn2 = true;
														this.warn1 = false;this.againregister=false;this.sent=true;
													}
												}else if(res.data.false == "RegisterAgain"){
													this.againregister=true;this.sent=true;
													this.warn1 = false;
													this.warn2 = false;
												} else {
													console.log('s');
													this.getcodes = true;
													this.getphone = false;
													const TIME_COUNT = 120;
													if (!this.timer) {
														this.count = TIME_COUNT;
														this.show = true;
														this.timer = setInterval(() => {
															if (this.count > 0 && this.count <= TIME_COUNT) {
																this.count--;
															} else {
																this.show = false; this.sent=true;
																clearInterval(this.timer);
																this.timer = null;
															}
														}, 1000)
													}
												}
											},
											res => {
												alertMsg("You must be connected to the internet.<br>Please connect and try again.");
											}
									);
						}else if(this.telephone.length > 7){
							this.email=false;
							this.$axios
									.post(this.url2, qs.stringify({
										telephone: this.telephone,
									}))
									.then(
											res => {
												if (res.data.false == "errorphone") {
													if(res.data.success==true){
														this.getcodes = true;
														this.getphone = false;
														const TIME_COUNT =120;
														if (!this.timer) {
															this.count = TIME_COUNT;
															this.show = true;
															this.timer = setInterval(() => {
																if (this.count > 0 && this.count <= TIME_COUNT) {
																	this.count--;
																} else {
																	this.show = false;this.sent=true;
																	clearInterval(this.timer);
																	this.timer = null;
																}
															}, 1000)
														}
													}else {
														this.warn2 = true;this.sent=true;
														this.warn1 = false;this.againregister=false;
													}

												}else if(res.data.false == "RegisterAgain"){
													this.againregister=true;this.sent=true;
													this.warn1 = false;
													this.warn2 = false;
												} else {
													this.getcodes = true;
													this.getphone = false;
													const TIME_COUNT =120;
													if (!this.timer) {
														this.count = TIME_COUNT;
														this.show = true;
														this.timer = setInterval(() => {
															if (this.count > 0 && this.count <= TIME_COUNT) {
																this.count--;
															} else {
																this.show = false;this.sent=true;
																clearInterval(this.timer);
																this.timer = null;
															}
														}, 1000)
													}
												}
											},
											res => {
												alertMsg("You must be connected to the internet.<br>Please connect and try again.");
											}
									);
						}else{
							//console.log("sss");
							this.warn2 = true;this.sent=true;
							this.warn1 = false;this.againregister=false;
						}

					}
				}
			},
			backphone() {
				this.getcodes = false;
				this.getphone = true;
			},
			sencode() {
				this.warn6 = true;
				this.warn7 = false;
				this.url3 =  '/user/rigister';
				if (this.code == '' || this.code == null) {
					this.warn7 = true;
					this.warn6 = false;
				} else {
					if(this.email==true){
						this.$axios
								.post(this.url3, qs.stringify({
									code:this.code,
									email: this.telephone,
								}))
								.then(
										res => {
											if (res.data.false === "codeError" || res.data.false === "codeLate") {
												this.warn7 = true;
												this.warn6 = false;
											} else {
												this.getcodes = false;
												this.getpassw = true;
											}
										},
										res => {
											alertMsg("You must be connected to the internet.<br>Please connect and try again.");
										}
								);
					}else{
						this.$axios
								.post(this.url3, qs.stringify({
									code:this.code,
									telephone: this.telephone,
								}))
								.then(
										res => {
											if (res.data.false === "codeError" || res.data.false === "codeLate") {
												this.warn7 = true;
												this.warn6 = false;
											} else {
												this.getcodes = false;
												this.getpassw = true;
											}
										},
										res => {
											alertMsg("You must be connected to the internet.<br>Please connect and try again.");
										}
								);
					}


				}
			},
			register(){
				this.warn8 = false;//密码必须是包含大写字母、小写字母、数字、特殊符号（不是字母，数字，下划线，汉字的字符）的8位以上组合
				var match=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,18}$/;
				this.url4 = '/user/rigister';
				if (!match.test(this.setpassword) || this.setpassword != this.setpassword1 || this.setpassword == null || this.setpassword == '') {
					this.warn8 = true;
				} else {
					if(this.email==true){
						this.$axios
								.post(this.url4, qs.stringify({
									code:this.code,
									email: this.telephone,
									password: this.setpassword,
								}))
								.then(
										res => {
											if (res.data.false == "codeLate") {
												this.getcodes = true;
												this.getpassw = false;
												this.warn7 = true;
												this.warn6 = false;
											} else if (res.data.success == "success") {
												this.getpassw = false;
												this.getresult = true;
												localStorage.setItem("username",this.telephone);
												localStorage.setItem("password", this.setpassword);
												localStorage.setItem("userId", res.data.guardianId);
												this.login2();
											}
										},
										res => {
											alertMsg("You must be connected to the internet.<br>Please connect and try again.");
										}
								);
					}else{
						this.$axios
								.post(this.url4, qs.stringify({
									code:this.code,
									telephone: this.telephone,
									password: this.setpassword,
								}))
								.then(
										res => {
											if (res.data.false == "codeLate") {
												this.getcodes = true;
												this.getpassw = false;
												this.warn7 = true;
												this.warn6 = false;
											} else if (res.data.success == "success") {
												this.getpassw = false;
												this.getresult = true;
												localStorage.setItem("username",this.telephone);
												localStorage.setItem("password", this.setpassword);
												localStorage.setItem("userId", res.data.guardianId);
												this.login2();
											}
										},
										res => {
											alertMsg("You must be connected to the internet.<br>Please connect and try again.");
										}
								);
					}
				}
			},
			bodyScroll(event) {
				event.preventDefault();
			},
		},
		destroyed() {
			document.body.removeEventListener('touchmove',this.bodyScroll,{passive: false});
		},
		created() {
			this.style=this.$route.query.style;
			this.unit=this.$route.query.unit;
			this.part=this.$route.query.part;
			this.level=this.$route.query.level;
			this.cources=this.$route.query.cources;
			this.studentId=this.$route.query.studentId;
			this.pic=this.$axios.defaults.baseURL2;
			if (localStorage.getItem('checkbox') == true || localStorage.getItem('checkbox') == "true") {
				this.username = localStorage.getItem('username');
				this.password = localStorage.getItem('password');
			}
			document.body.addEventListener('touchmove',this.bodyScroll,{passive: false});
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
		padding-top: 6%;
		display: flex;
		margin: 0px;
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
	}

	.remesty {
		float: left;
		margin-left: 26px;
		border-style: none;
		background: none;
		color: white;
		font-family: pepper;
	}

	.forgsty {
		border-style: none;
		background: none;
		color: white;
		font-family: pepper;
		margin-left: 20%;
	}

	.phone {
		position: absolute;
		display: inline-block;
		margin-top: 10px;
		left: 21%;
	}

	.phone1 {
		position: absolute;
		display: inline-block;
		margin-top: 4%;
		left: 18%;
	}

	.phone2 {
		position: absolute;
		display: inline-block;
		margin-top: 11px;
		left: 14%;
	}
	.phone3 {
		position: absolute;
		display: inline-block;
		margin-top: 10px;
		left: 3%;
	}

	.error {
		position: absolute;
		display: inline-block;
		top: 18px;
		right: -6%;
	}

	.error1 {
		position: absolute;
		display: inline-block;
		top: 17px;
		right: -5%;
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

	.warnspan {
		color: #057bb8;
		font-family: pepper;
		font-size: 12px;
		width: 100%;
		float: left;
		position: relative;
		display: inline-block;
		left: 7%;
		margin-bottom: 10px;
		text-align: left;
	}

	.warnspan1 {
		color: #057bb8;
		font-family: pepper;
		font-size: 12px;
		width: 55%;
		margin: 0 auto;
		position: relative;
		display: inline-block;
		top: 10%;
	}
	.warn8sty{
		color: white;
		font-family: pepper;
		font-size: 12px;
		text-align: left;
		margin: 0 auto;
	}
	.warn9sty{
		color: white;
		font-family: pepper;
		font-size: 12px;
		margin: 0 auto;
		width: 100%;
		display: block;
		text-align: center;
		padding-bottom: 10px;
	}
	.inputu {
		background-color: white !important;
		border: none;
		display: list-item;
		padding: 15px 15% 15px 17%;
		width: 80%;
		font-size: large;
		color: #057bb8 !important;
		border-radius: 40px;
		font-family: pepper;
	}

	.inputp {
		background-color: white !important;
		border: none;
		color: #057bb8 !important;
		padding: 15px 15% 15px 17%;
		width: 80%;
		font-size: large;
		border-radius: 40px;
	}

	.inputc {
		margin-top: -20px;
		padding-left: 7%;
		font-size: 12px;
		color: white;
		width: 100%;
		float: left;
		font-family: pepper;
		text-align: left;
		line-height: 100%;
	}

	input:-internal-autofill-selected {
		background-color: white !important;
	}

	.inputc1 {
		padding: 10px;
		font-size: 12px;
		font-weight: bold;
		color: white;
		width: 20%;
		float: right;
		position: relative;
		text-align: left;
		display: inline-grid;
	}

	input::-webkit-input-placeholder {
		/*WebKit browsers*/
		font-family: pepper;
		color: #44ccc2;
		opacity: 0.5;
	}

	input::-moz-input-placeholder {
		/*Mozilla Firefox*/
		font-family: pepper;
		color: #44ccc2;
		opacity: 0.5;
	}

	input::-ms-input-placeholder {
		/*Internet Explorer*/
		font-family: pepper;
		color: #44ccc2;
		opacity: 0.5;
	}

	.phonenum {
		position: absolute;
		display: inline-block;
		top: 30%;
		left: 3%;
	}

	.phoneinput {
		background-color: white !important;
		width: 58%;
		border: none;
		display: inline-block;
		text-align: left;
		padding: 15px 0 15px 12%;
		font-size: large;
		color: #44ccc2 !important;
		border-radius: 40px;
		margin-top: 10px;
		font-family: pepper;
	}

	.sentcode {
		color: white;
		background-color: #057bb8;
		border: none;
		padding: 10px 0px;
		border-radius: 30px;
		font-family: KG;
		width: 25%;
		position: absolute;
		top: 20px;
		right: 0;
		text-align: center;
	}

	.warnstyle {
		color: white;
		font-family: pepper;
	}

	.leftRsty {
		width: 60%;
	}

	.rightBsty {
		width: 60%;
		/*position: absolute;*/
	}

	.receive {
		color: white;
		font-size: 12px;
		width: 60%;
		font-family: pepper;
		border-style: none;
		background: none;
		margin-top: 10px;
	}

	.item1 {
		position: relative;
	}

	.item1 input[type="radio"] {
		width: 16px;
		height: 16px;
		opacity: 0;
	}

	.item1 label {
		position: absolute;
		left: 5px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: white;
	}

	/*设置选中的input的样式*/
	/* + 是兄弟选择器,获取选中后的label元素*/
	//          .item1 input:checked+label {
	//             //background-color: white;
	//              color: #057BB8;
	// 			 background-color: #fe6d32;
	//             border: 1px solid #fe6d32;
	//         }
	//
	.item1 input:checked+label::after {
		position: absolute;
		content: "";
		width: 5px;
		height: 10px;
		left: 6px;
		border: 2px solid #057bb8;
		border-top: none;
		border-left: none;
		transform: rotate(45deg);
	}

	.login {
		color: white;
		background-color: #057bb8;
		border: none;
		padding: 10px 0px;
		border-radius: 30px;
		font-family: KG;
		width: 75%;
		margin-top: -20px;
	}

	.visitor {
		color: white;
		background-color: #F3C70F;
		border: none;
		padding: 10px 0px;
		border-radius: 30px;
		font-family: KG;
		float: right;
		width: 75%;
		margin-top: 10px;
	}

	.resend {
		color: white;
		background-color: #F3C70F;
		border: none;
		padding: 5px 0px;
		border-radius: 30px;
		// font-family: pepper;
		float: right;
		width: 70%;
		margin-top: 10px;
	}
	.resends {
		color: white;
		background-color: #F3C70F;
		border: none;
		padding: 5px 0px;
		border-radius: 30px;
		// font-family: pepper;
		float: right;
		width: 70%;
		opacity: 0.5;
		margin-top: 10px;
	}
	.inputsetpa{
		background-color: white !important;
		border: none;
		color: #057bb8 !important;
		padding: 15px 13% 15px 18%;
		width: 80%;
		font-size: large;
		border-radius: 40px;
	}
	.resultsty{
		margin: 0 auto;
		width: 60%;
		color: white;
		text-align: center;
		margin-top:10%;
		font-size: 1.5rem;
		font-family: pepper;
	}
	.play{
		color: white;
		background-color: #057bb8;
		border: none;
		padding: 10px 0px;
		border-radius: 30px;
		font-family: KG;
		width: 25%;
		font-size: 1.2rem;
		margin-top: 10px;
	}
	// 	@media screen and (max-width: 481px) {
	// 		.menu {
	// 			//padding-top: 18%;
	// 		}
	//
	// 		.inputu {
	// 			width: 40%;
	// 			padding: 15px 0 15px 10%;
	// 		}
	//
	// 		.inputp {
	// 			width: 40%;
	// 			padding: 15px 0 15px 10%;
	// 		}
	//
	// 		.inputc {
	// 			width: 50%;
	// 		}
	//
	// 		.inputc1 {
	// 			width: 50%;
	// 		}
	//
	// 		.phone {
	// 			left: 28%;
	// 		}
	//
	// 		.warnspan {
	// 			width: 50%;
	// 		}
	//
	// 		.fontsize {
	// 			font-family: pepper;
	// 			color: white;
	// 			bottom: 11%;
	// 			left: 3%;
	// 			position: absolute;
	// 			font-size: large;
	// 			max-height: 100%;
	// 			min-height: 60%;
	// 			margin-left: 2%;
	// 		}
	// 	}

	@media screen and (min-width: 482px) and (max-width: 569px) {
		.menu {
			padding-top: 5%;
		}

		.inputu {
			padding: 15px 15% 15px 19%;
		}
		.inputsetpa{
			padding: 15px 13% 15px 19%;
		}
		.inputp {
			padding: 15px 15% 15px 20%;
		}
		.error1{
			right: -9%;
		}
		.login{
			padding: 10px 0px;
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
		.resultsty{
			margin-top:8%;
		}

		// 	.inputc {
		// 		width: 40%;
		// 	}
		//
		// 	.inputc1 {
		// 		width: 40%;
		// 	}
		//
		// 	.phone {
		// 		left: 31%;
		// 	}
		//
		// 	.warnspan {
		// 		width: 41%;
		// 	}
	}

	@media screen and (min-width: 1024px) and (max-width: 1600px){



		.error {
			//right: 39%;
			top: 20px;
		}

		.inputp {
			// padding: 16px 0 16px 5%;
			// width: 20%;
			// margin-top: 15px;
		}
		.warn8sty{
			padding-top:10px;
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

		.inputu {
			// padding: 16px 0 16px 5%;
			// width: 20%;
		}

		.inputc {
			// width: 25%;
		}

		.inputc1 {
			// width: 25%;
		}

		.forgsty {
			margin-left: 26%;
		}

		.pause {
			bottom: 25%;
		}

		.repeat {
			bottom: 23%;
		}

		.leftRsty {
			width: 50%;
		}

		.rightBsty {
			width: 50%;
		}
		.resultsty{
			margin-top:22%;
		}
	}

	@media screen and (min-width: 812px) and (max-width: 1023px) {



		.fontsizes {
			margin-top: 18%;
		}

		.pause {
			width: 10%;
			position: absolute;
			right: 17%;
			bottom: 0%;
		}

		.repeat {
			width: 10%;
			position: absolute;
			right: 5%;
			bottom: 0%;
		}

		.forgsty {
			margin-left: 25%;
		}
		.resultsty{
			margin-top:7%;
		}
	}
	@media screen and (min-width: 1600px){
		.error {
			//right: 39%;
			top: 20px;
		}


		.warn8sty{
			padding-top:10px;
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

		.inputc{
			margin-top: 0%;
		}

		.forgsty {
			margin-left: 33%;
		}

		.pause {
			bottom: 25%;
		}

		.repeat {
			bottom: 23%;
		}

		.leftRsty {
			width: 50%;
		}

		.rightBsty {
			width: 50%;
		}
		.resultsty{
			margin-top:22%;
		}
		.warnstyle{
			font-size: 2rem;
		}
	}
</style>
