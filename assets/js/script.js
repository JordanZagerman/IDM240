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

// click on path to change effect

var triggerLargePath = document.querySelector(".the-big-piece-desktop");
var triggerLargePathMobile = document.querySelector(".the-big-piece-mobile");
var triggerLargePathTablet = document.querySelector(".the-big-piece-tablet");

console.log(triggerLargePath);

triggerLargePath.addEventListener('click', triggerAnimation);
triggerLargePathMobile.addEventListener('click', triggerAnimation);
triggerLargePathTablet.addEventListener('click', triggerAnimation);

function triggerAnimation(){
  console.log("triggerAnimation worked" );

      // Check to see if svgs have a class of .animate
      if (triggerLargePath.classList.contains('animate-flash')) {
    //  Remove .animate from svgs
    triggerLargePath.classList.remove('animate-flash');
    triggerLargePath.classList.add('animate-rainbow');
    triggerLargePathMobile.classList.remove('animate-flash');
    triggerLargePathMobile.classList.add('animate-rainbow');
    triggerLargePathTablet.classList.remove('animate-flash');
    triggerLargePathTablet.classList.add('animate-rainbow');
    } else {
    //     // Add class of .animate to both svgs
    triggerLargePath.classList.add('animate-flash');
    triggerLargePath.classList.remove('animate-rainbow');
    triggerLargePathMobile.classList.add('animate-flash');
    triggerLargePathMobile.classList.remove('animate-rainbow');
    triggerLargePathTablet.classList.add('animate-flash');
    triggerLargePathTablet.classList.remove('animate-rainbow');
    }

    // OR 
    // toggleClass(microphoneIcon, 'animate');
    // toggleClass(carIcon, 'animate');
    // toggleText(triggerAnimationButton);
}