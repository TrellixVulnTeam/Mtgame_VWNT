// document.addEventListener('plusready', function (a) {
//     var first = '';
//     plus.key.addEventListener('backbutton', function () {
//       //获取地址栏目中的url
//       var urls = location.hash.split('/')[1]
//      //alert(urls);
//       // if (urls === 'source'||urls === 'select'||urls === 'login'||urls === ''||urls === 'select') {
// 		  //判断是首页的时候点击二次退出app
//          if (new Date().getTime() - first < 1500) {
// 			// alert('Quit the game');
// 			      if(urls === 'start'){
// 				        plus.runtime.quit();//表示退出app
// 		      	}
//           } else {
// 			         first = new Date().getTime();
// 			        if(urls === 'info'||urls === 'others'||urls === 'chosegame?style=game'||urls === 'chosegame?style=courses'||urls === 'source'||urls === 'select'||urls === 'login'){
// 			  	  	 history.go(-1)
// 		   	      }
//           }
// });
// },false);
// document.addEventListener("pause", function(){
// 	//从前台切换到后台
//   var audio = document.getElementById('music');
//    var partmusic = document.getElementById('partmusic');
//   if(localStorage.getItem('audiomusic')=="false"){
//       audio.stop();
//   }else{
//   	audio.stop();
//   }
//   if(partmusic){
//     if(localStorage.getItem('gamemusic')=="false"){
//       partmusic.stop();
//   }else{
//   	  partmusic.stop();
//   }
//   }
// }, false);
// document.addEventListener("resume", function(){
// 			//从后台切换到前台
//       var audio = document.getElementById('music');
//        var partmusic = document.getElementById('partmusic');
//
//       if(partmusic){
//         if(localStorage.getItem('gamemusic')=="false"){
//           partmusic.stop();
//       }else{
//       	  partmusic.play();
//       }
//       }else{
//          if(localStorage.getItem('audiomusic')=="false"){
//           audio.stop();
//       }else{
//       	audio.play();
//       }
//       }
//
// 		}, false);
//
//     }, false)
// });
// var myVideo=document.getElementById("music");
//
//           this.myVideo.addEventListener('play',function(){
//
//                    console.log("play");
//
//           });
//           myVideo.addEventListener('pause',function(){
//           console.log("pause");
//           })
// document.onkeydown = function (e) {
//     //捕捉回车事件
//     var ev = (typeof event != 'undefined') ? window.event : e;
//     if (ev.keyCode == 13 || event.which == 13) {
//         return false;
//     }
// }
var alertFram = document.createElement("DIV");
 var alertiframe = document.createElement("DIV");
//自定义提示框

// 弹出网络提示
window.alertMsg = function (txt) {

		var strHtml='';
        alertFram.id = "alertFram";
        alertFram.style.position = "absolute";
        alertFram.style.width = "100%";
		    alertFram.style.height = "100%";
		    alertFram.style.display = "block";
        alertFram.style.textAlign = "center";
        alertFram.style.top = 0;
        // alertFram.style.background = "blank";
		// alertFram.style.color = "white";
        alertFram.style.zIndex = "10001";
        strHtml =  "<div style='width:50%;height:50%;margin:0 auto;margin-top:15%;position: relative;background-color:white;border-radius:20px;color:black;'><h2 style='width:100%;font-family: pepper;padding:10px 0;'>Network Required</h2><p style='width:90%;font-family: pepper;height:40%;margin:5%;top:20%;position:absolute;'>"
		+txt+"</p><button style='width:90%;height:40px;margin:5%;border:none;border-radius:10px;bottom: 0; position: absolute;left: 0;color:white;background-color:#48C0F0;' onclick='test()'>OK</button></div>" ;
        alertFram.innerHTML = strHtml;
        document.body.appendChild(alertFram);
        // setTimeout((function () {
        //     alertFram.style.display = "none";
        // }), 2000)
};
// 弹出版本提示
window.alertMsg2 = function (txt) {

		var strHtml='';
        alertFram.id = "alertFram";
        alertFram.style.position = "absolute";
        alertFram.style.width = "100%";
		    alertFram.style.height = "100%";
		    alertFram.style.display = "block";
        alertFram.style.textAlign = "center";
        alertFram.style.top = 0;
        // alertFram.style.background = "blank";
		// alertFram.style.color = "white";
        alertFram.style.zIndex = "10001";
        strHtml =  "<div style='width:50%;height:50%;margin:0 auto;margin-top:15%;position: relative;background-color:white;border-radius:20px;color:black;'><h2 style='width:100%;font-family: pepper;padding:10px 0;'>New version available</h2><p style='width:90%;font-family: pepper;height:40%;margin:5%;top:20%;position:absolute;'>"
		+txt+"</p></div>" ;
        alertFram.innerHTML = strHtml;
        document.body.appendChild(alertFram);
        // setTimeout((function () {
        //     alertFram.style.display = "none";
        // }), 2000)
};
// 弹出版本提示
window.alertMsgNew = function (txt,txt2) {
  var strHtml='';
      alertFram.id = "alertFram";
      alertFram.style.position = "absolute";
      alertFram.style.width = "100%";
      alertFram.style.height = "100%";
      alertFram.style.display = "block";
      alertFram.style.textAlign = "center";
      alertFram.style.top = 0;
      // alertFram.style.background = "blank";
  // alertFram.style.color = "white";
      alertFram.style.zIndex = "10001";
      strHtml =  "<div style='width:50%;height:50%;margin:0 auto;margin-top:15%;position: relative;background-color:white;border-radius:20px;color:black;'><h3 style='width:100%;font-family: pepper;padding:10px 0;'>Monkey Town 又有更新了!</h3><p style='width:90%;font-family: pepper;height:40%;margin:5%;top:20%;position:absolute;text-align: left;'>"
  +txt+"</p><p style='width:90%;font-family: pepper;height:40%;margin:5%;top:45%;position:absolute;text-align: left;'>"+txt2+"</p><div style='width: 100%;height: 1px;background-color: #ddd;bottom: 20%;position: absolute;'></div><p style='width:100%;padding:10px 0;position: absolute;top: 78%;'>更新</p></div>" ;
      alertFram.innerHTML = strHtml;
      document.body.appendChild(alertFram);
};

window.alertMsg3 = function (txt) {

  var strHtml='';
  alertFram.id = "alertFram";
  alertFram.style.position = "absolute";
  alertFram.style.width = "100%";
  alertFram.style.height = "100%";
  alertFram.style.display = "block";
  alertFram.style.textAlign = "center";
  alertFram.style.top = 0;
  // alertFram.style.background = "blank";
  // alertFram.style.color = "white";
  alertFram.style.zIndex = "10001";
  strHtml =  "<div style='width:24%;padding:10px 0;margin:0 38%;bottom: 15%;position: absolute;background-color:white;border-radius:10px;color:black;'> <button style='width:100%;font-family: pepper;font-size: 0.7rem;height:100%;color: red; border: none;background: none;'>"
    +txt+"</button></div>" ;
  alertFram.innerHTML = strHtml;
  document.body.appendChild(alertFram);
  setTimeout((function () {
      alertFram.style.display = "none";
  }), 2000)
};
window.alertMsg4 = function (txt) {

  var strHtml='';
  alertFram.id = "alertFram";
  alertFram.style.position = "absolute";
  alertFram.style.width = "100%";
  alertFram.style.height = "100%";
  alertFram.style.display = "block";
  alertFram.style.textAlign = "center";
  alertFram.style.top = 0;
  // alertFram.style.color = "white";
  alertFram.style.zIndex = "10001";
  strHtml =  "<div style='width:24%;padding:10px 0;margin:0 38%;bottom: 15%;position: absolute;background-color:white;border-radius:10px;color:black;'> <button style='width:100%;font-family: pepper;font-size: 0.7rem;height:100%;color: red; border: none;background: none;'>"
    +txt+"</button></div>" ;
  alertFram.innerHTML = strHtml;
  document.body.appendChild(alertFram);
  // setTimeout((function () {
  //     alertFram.style.display = "none";
  // }), 2000)
};
window.alertMsg5 = function (txt) {

  var strHtml='';
  alertFram.id = "alertFram";
  alertFram.style.position = "absolute";
  alertFram.style.width = "100%";
  alertFram.style.height = "100%";
  alertFram.style.display = "block";
  alertFram.style.textAlign = "center";
  alertFram.style.top = 0;
  // alertFram.style.background = "blank";
  // alertFram.style.color = "white";
  alertFram.style.zIndex = "10001";
  strHtml =  "<div style='width:30%;padding:10px 0;margin:0 38%;bottom: 15%;position: absolute;background-color:white;border-radius:10px;color:black;'> <button style='width:100%;font-family: pepper;font-size: 0.7rem;height:100%;color: red; border: none;background: none;'>"
    +txt+"</button></div>" ;
  alertFram.innerHTML = strHtml;
  document.body.appendChild(alertFram);
  setTimeout((function () {
    alertFram.style.display = "none";
  }), 4000)
};

// 弹出其他游戏
window.alertiframe2=function(){

    var strHtml='';
     alertiframe.id = "alertiframeid2";
       alertiframe.style.position = "absolute";
       alertiframe.style.width = "100%";
       alertiframe.style.height = "100%";
        alertiframe.style.zIndex = "3";
         alertiframe.style.background = "#48A723";
       alertFram.style.top = 0;
      var strHtml =  "<img src='http://103.218.241.33/mtgameweb/Game-flow/img/home2.png' style='width: 5%;margin-top: 3%;position: absolute;z-index: 3;margin-left: 0.5%;' onclick='backgo()'><img src='http://103.218.241.33/mtgameweb/Game-flow/img/backgo2.png' style='width: 5%;margin-top: 10%;position: absolute;z-index: 3;margin-left: 0.5%;' onclick='backgo2()'><iframe name='ifr1' style='width: 94%; height: 100%; position: absolute;right: 0; background-color: #48A723;z-index: 2;' src='http://103.218.241.33/mtgameweb/Game-flow/fruit-link-up/index.html' scrolling='auto'></iframe>" ;
       alertiframe.innerHTML = strHtml;
       console.log(document.getElementById("ifameid"));
       	document.getElementById("ifameid").appendChild(alertiframe);


}
window.alertiframe1=function(){

    var strHtml='';
     alertiframe.id = "alertiframeid1";
       alertiframe.style.position = "absolute";
       alertiframe.style.width = "100%";
      alertiframe.style.height = "100%";
        alertiframe.style.zIndex = "3";
        alertiframe.style.background = "#0CADD0";
        alertFram.style.top = 0;
      var strHtml =  "<img src='http://103.218.241.33/mtgameweb/Game-flow/img/home.png' style='width: 5%;margin-top: 3%;position: absolute;z-index: 3;margin-left: 0.5%;' onclick='backgo()'><img src='http://103.218.241.33/mtgameweb/Game-flow/img/backgo1.png' style='width: 5%;margin-top: 10%;position: absolute;z-index: 3;margin-left: 0.5%;' onclick='backgo2()'><iframe name='ifr1' style='width: 94%; height: 100%; position: absolute; right: 0;background-color: #0CADD0;z-index: 2;' src='http://103.218.241.33/mtgameweb/Game-flow/fishgame/index.html' scrolling='auto'></iframe>" ;
       alertiframe.innerHTML = strHtml;
       console.log(document.getElementById("ifameid"));
       	document.getElementById("ifameid").appendChild(alertiframe);

}
window.alertiframe3=function(){

    var strHtml='';
     alertiframe.id = "alertiframeid3";
       alertiframe.style.position = "absolute";
       alertiframe.style.width = "100%";
      alertiframe.style.height = "100%";
        alertiframe.style.zIndex = "3";
        alertiframe.style.background = "#052060";
        alertFram.style.top = 0;
      var strHtml =  "<img src='http://103.218.241.33/mtgameweb/Game-flow/img/home3.png' style='width: 5%;margin-top: 3%;position: absolute;z-index: 3;margin-left: 0.5%;' onclick='backgo()'><img src='http://103.218.241.33/mtgameweb/Game-flow/img/backgo3.png' style='width: 5%;margin-top: 10%;position: absolute;z-index: 3;margin-left: 0.5%;' onclick='backgo2()'><iframe name='ifr1' style='width: 94%; height: 100%; position: absolute; right: 0;background-color: #052060;z-index: 2;'  src='http://103.218.241.33/mtgameweb/Game-flow/Find-Toys/index.html' scrolling='auto'></iframe>" ;
       alertiframe.innerHTML = strHtml;
       console.log(document.getElementById("ifameid"));
       	document.getElementById("ifameid").appendChild(alertiframe);

}
window.alertiframe4=function(){

    var strHtml='';
     alertiframe.id = "alertiframeid4";
       alertiframe.style.position = "absolute";
       alertiframe.style.width = "100%";
      alertiframe.style.height = "100%";
        alertiframe.style.zIndex = "3";
        alertiframe.style.background = "#FBBA00";
        alertFram.style.top = 0;
      var strHtml =  "<img src='http://103.218.241.33/mtgameweb/Game-flow/img/home4.png' style='width: 5%;margin-top: 3%;position: absolute;z-index: 3;margin-left: 0.5%;' onclick='backgo()'><img src='http://103.218.241.33/mtgameweb/Game-flow/img/backgo4.png' style='width: 5%;margin-top: 10%;position: absolute;z-index: 3;margin-left: 0.5%;' onclick='backgo2()'><iframe name='ifr1' style='width: 94%; height: 100%; position: absolute; right: 0;background-color: #FBBA00;z-index: 2;'  src='http://103.218.241.33/mtgameweb/Game-flow/Pizza/index.html' scrolling='auto'></iframe>" ;
       alertiframe.innerHTML = strHtml;
       console.log(document.getElementById("ifameid"));
       	document.getElementById("ifameid").appendChild(alertiframe);

}
