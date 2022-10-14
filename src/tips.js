export default async function tips(start){
    if(start){
      let audio = new Audio();
      audio.src = require('../src/assets/video/tips.mp3');
      await audio.play();
    }
  }

