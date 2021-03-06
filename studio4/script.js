// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    var question = document.getElementById('question');
    var answer = document.getElementById('answer');
    var clockquestion= document.getElementById('clockquestion');
    var clockanswer= document.getElementById('clockanswer');
    var warning= document.getElementById('warning');
    var statement= document.getElementById('statement');


    var timer;

    question.addEventListener ('mouseover', function(){
      console.log('mouseover on question');
      timer = setTimeout(showAnswer, 1000);
    });

    question.addEventListener ('mouseout', function(){
      console.log('mouseout on question');
      clearTimeout(timer);
      answer.style.opacity = 0;
    });

    function showAnswer(){
      console.log('showing msg');
      answer.style.opacity = 1;
    }

    clockquestion.addEventListener ('mouseover', function(){
      console.log('mouseover on clockquestion');
      timer = setTimeout(showclockanswer, 1000);
    });

    question.addEventListener ('mouseout', function(){
      console.log('mouseout on clockquestion');
      clearTimeout(timer);
      clockanswer.style.opacity = 0;
    });

    function showclockanswer(){
      console.log('showing msg');
      clockanswer.style.opacity = 1;
    }

    statement.addEventListener ('mouseover', function(){
      console.log('mouseover on statement');
      timer = setTimeout(showWarning, 1000);
    });

    statement.addEventListener ('mouseout', function(){
      console.log('mouseout on statement');
      clearTimeout(timer);
      warning.style.opacity = 0;
    });

    function showWarning(){
      console.log('showing msg');
      warning.style.opacity = 1;
    }

    var countDownDate = new Date("Jan 20, 2020 15:37:25").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "WE MADE IT!";
      }
    }, 1000);


});
