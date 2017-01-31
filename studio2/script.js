// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    console.log('reading');

      //capture the submit
      document.f.onsubmit = processForm;

      //define process function
      function processForm() {

        //storing variables

        var userName = document.f.userName.value;
        var userNumber = document.f.userNumber.value;
        var userAnimal= document.f.userAnimal.value;
        var userAnimalTwo= document.f.userAnimalTwo.value;
        var userAnimalThree= document.f.userAnimalThree.value;
        var userPlace= document.f.userPlace.value;


        // storing myMsg

        var myMsg = document.getElementById("myMsg");

        //concatenate a message
        myMsg.innerHTML= ('Congratulations ' + userName + '!' + ' You have started the first step to making your very own Chimera! Your animal will have the head of a  '
        + userAnimal + ', the body of a ' + userAnimalTwo + ', and the tail of a ' + userAnimalThree +
        '! How unique! We are very excited to see what it will turn out looking like as well. You have recieved a very special discount and will only need to pay a small sum of '
        + userNumber + ' dollars (some fees not included) and we will deliver your new pet right to your door in ' + userPlace+ '!');
        //prevent page from reloading
        return false;



  }

})
