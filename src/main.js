import Vue from "vue";
// import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import quit from "./quit";
import axios from 'axios';

// import cookies from 'vue-cookies';
// import qs from 'qs';
// import {createWorker} from 'tesseract.js';

import Bounce from 'vue-bounce';
import "babel-polyfill";
import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated);

// Vue.use(cookies);
// import $ from 'jquery';
// import jquery  from 'jquery';
// global.jquery = global.$ = jquery;
// import * from 'tesseract';
// import OCRAD from "./ocrad.js";
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// axios.defaults.baseURL = 'http://dodosurvey.com/monkeytownHK'  // api 即上面 vue.config.js 中配置的地址
//axios.defaults.baseURL = 'http://107.150.121.34/monkeytownHK';
//axios.defaults.baseURL2 = 'http://107.150.121.34/monkeytownHK';
//axios.defaults.baseURL = 'http://localhost:8080/monkeytownCN';
//axios.defaults.baseURL2 = 'http://localhost:8080/monkeytownCN';

//axios.defaults.baseURL = 'https://gamejava.monkeytree.com.hk/monkeytownHK';
//axios.defaults.baseURL2 = 'https://gamejava.monkeytree.com.hk/monkeytownHK';
axios.defaults.baseURL = 'https://gamejava.monkeytree.com.cn';
axios.defaults.baseURL2 = 'https://gamejava.monkeytree.com.cn';

localStorage.setItem('localurl',axios.defaults.baseURL);
//版本号，更新需要+1
localStorage.setItem('version',26);
//发布 ios OR android
localStorage.setItem('system','android');
//发布到hk版还是cn版
localStorage.setItem('local','cn');
//是否发布到应用宝
localStorage.setItem('yingyongbao','false');
Vue.use(Bounce)
// or
Vue.use(Bounce, {
    name: 'directiveName' // 可选参数用于覆盖指令名
})


// Vue.prototype.setCookie = function (name, value, day) {
//     if (day !== 0) { //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
//         var curDate = new Date();
//         var curTamp = curDate.getTime();
//         var curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1;
//         var passedTamp = curTamp - curWeeHours;
//         var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
//         var leftTime = new Date();
//         leftTime.setTime(leftTamp + curTamp);
//         document.cookie = name + "=" + escape(value) + ";expires=" + leftTime.toGMTString();
//     } else {
//         document.cookie = name + "=" + escape(value);
//     }
// }
// Vue.prototype.getCookie = function(name) {
// 	var arr;
// 	var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
// 	if (arr = document.cookie.match(reg)) {
// 		return unescape(arr[2]);
// 	} else {
// 		return null;
// 		document.cookie = name + "=" + escape(value);
// 	}
// }
export default new Vue({
	router,
	store,
	quit,
	render: h => h(App),
	components: {
		App
	}
}).$mount("#app");
// export default{
// 	ssoflag:"0",
// 	setflag(ssoflag){
// 		this.ssoflag=ssoflag;
// 	}
// }
// export const generateItems = (count, creator) => {
// 	const result = []
// 	for (let i = 0; i < count; i++) {
// 		result.push(creator(i))
// 	}
// 	return result
// }
// export const applyDrag = (arr, dragResult) => {
// 	const {
// 		removedIndex,
// 		addedIndex,
// 		payload
// 	} = dragResult
// 	if (removedIndex === null && addedIndex === null) return arr
//
// 	const result = [...arr]
// 	let itemToAdd = payload
//
// 	if (removedIndex !== null) {
// 		itemToAdd = result.splice(removedIndex, 1)[0]
// 	}
//
// 	if (addedIndex !== null) {
// 		result.splice(addedIndex, 0, itemToAdd)
// 	}
//
// 	return result
// }
