export function tips(start){
    if(start){
      let audio = new Audio();
      audio.src = require('../src/assets/video/tips.mp3');
      audio.play().then(r => console.log('播放成功'));
    }
  }

