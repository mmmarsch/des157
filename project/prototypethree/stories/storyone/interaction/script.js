// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var audio, playbtn;
    function initAudioPlayer () {
      audio = new Audio ();
      audio.src = "take1.mp3";
      audio.loop = true;
      audio.play ();
      // object references
      playbtn= document.getElementById ("playpausebtn");
      // event handling
      playbtn.addEventListener ("click", playPause);
      // function
      function playPause() {
        if(audio.paused){
          audio.play();
          playbtn.style.background = "url(pause.png) no-repeat";
        } else {
          audio.pause();
          playbtn.style.background= "url(play.png) no-repeat";
        }
      }
    }
    window.addEventListener("load", initAudioPlayer);

});
