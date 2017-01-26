// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log('reading');

      //capture the submit
      document.f.onsubmit = processForm;

      //define process function
      function processForm() {

        //storing variables

        var userFood = document.f.userFood.value;
        var userNumber = document.f.userNumber.value;
        var userEmotion= document.f.userEmotion.value;
        var userEmotionTwo= document.f.userEmotionTwo.value;
        var userCook= document.f.userCook.value;

        // storing myMsg

        var myMsg = document.getElementById("myMsg");

        //concatenate a message
        myMsg.innerHTML= ('Hi, ' + userFood + '!' + ' Your favorite color is ' + userNumber +'!');
        //prevent page from reloading
        return false;

  }

})
