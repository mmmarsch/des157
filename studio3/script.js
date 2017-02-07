// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");



      var tailTwo=document.getElementById('tailTwo');
      var hatTwo=document.getElementById('hatTwo');
      var pumkinTwo=document.getElementById('pupmkinTwo');
      var lampTwo=document.getElementById('lampTwo');
      var umbrellaTwo=document.getElementById('umbrellaTwo');
      var jimminy=document.getElementById('jimminy');
      var donald=document.getElementById('donald');
      var cheshire=document.getElementById('cheshire');
      var genie=document.getElementById('genie');
      var zero=document.getElementById('zero');
      var closeJimminy=document.getElementById('closeJimminy');
      var closeDonald=document.getElementById('closeDonald');
      var closeZero=document.getElementById('closeZero');
      var closeGenie=document.getElementById('closeGenie');
      var closeCheshire=document.getElementById('closeCheshire');

      //click on hat to get hover
      umbrellaTwo.addEventListener('click', function(){
        jimminy.style.display="block";
      })

      closeJimminy.addEventListener('click', function(){
        jimminy.style.display="none";
      })

      hatTwo.addEventListener('click', function(){
        donald.style.display="block";
      })

      closeDonald.addEventListener('click', function(){
        donald.style.display="none";
      })

      pumpkinTwo.addEventListener('click', function(){
        zero.style.display="block";
      })

      closeZero.addEventListener('click', function(){
        zero.style.display="none";
      })

      lampTwo.addEventListener('click', function(){
        genie.style.display="block";
      })

      closeGenie.addEventListener('click', function(){
        genie.style.display="none";
      })

      tailTwo.addEventListener('click', function(){
        cheshire.style.display="block";
      })

      closeCheshire.addEventListener('click', function(){
        cheshire.style.display="none";
      })





      // tail changes size
      tailTwo.addEventListener ('mouseover', function() {
        tailTwo.style.width='27px';
      });

      tailTwo.addEventListener('mouseout',mouseWentOutTail);

      function mouseWentOutTail(){
        tailTwo.style.width='25px';
      }

      //hat function to change size
        hatTwo.addEventListener ('mouseover', function() {
          hatTwo.style.width='30px';
        });

        hatTwo.addEventListener('mouseout',mouseWentOutHat);

        function mouseWentOutHat(){
          hatTwo.style.width='25px';
        }

      //pumpkin function to change size
        pumpkinTwo.addEventListener ('mouseover', function() {
          pumpkinTwo.style.width='30px';
        });

        pumpkinTwo.addEventListener('mouseout',mouseWentOutPumpkin);

        function mouseWentOutPumpkin(){
          pumpkinTwo.style.width='25px';
        }

      //lamp function to change size
      lampTwo.addEventListener ('mouseover', function() {
        lampTwo.style.width='30px';
      });

      lampTwo.addEventListener('mouseout',mouseWentOutLamp);

      function mouseWentOutLamp(){
        lampTwo.style.width='25px';
      }

      //umbrella function to change size
      umbrellaTwo.addEventListener ('mouseover', function() {
          umbrellaTwo.style.width='30px';
      });

        umbrellaTwo.addEventListener('mouseout',mouseWentOutUmbrella);

      function mouseWentOutUmbrella(){
          umbrellaTwo.style.width='25px';
      }




      //

});
