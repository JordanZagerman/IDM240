var muteLine = document.getElementById('muteLine');
var mute = document.getElementById('muteButton');
var audio = document.getElementById('audio');
console.log(audio);


var audio = document.getElementById("audio");
var playing = false;

mute.addEventListener('click', sound);




function sound() {
  console.log("click");
  muteLine.classList.toggle('hidden');
  if (playing) {
    audio.pause();
  } else {
    audio.play();
  }
};
audio.onplaying = function() {
  playing = true;
};
audio.onpause = function() {
  playing = false;
};





var body = document.getElementById('body');




DomReady.ready(function() {
  document.getElementById('text').classList.remove('active');

});
