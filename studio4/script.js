// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var first = document.getElementById('first');
    var firstClock = document.getElementById('firstClock');
    var second = document.getElementById('second');
    var secondClock = document.getElementById('secondClock');
    var third=document.getElementById('third');
    var thirdClock=document.getElementById('thirdClock');
    var fourth=document.getElementById('fourth');
    var fourthClock=document.getElementById('fourthClock');
    var fifth=document.getElementById('fifth');
    var fifthClock=document.getElementById('fifthClock');
    var sixth=document.getElementById('sixth');
    var sixthClock=document.getElementById('sixthClock');
    var seventh=document.getElementById('seventh');
    var seventhClock=document.getElementById('seventhClock');
    var eigth=document.getElementById('eigth');
    var eigthClock=document.getElementById('eigthClock');
    var ninth=document.getElementById('ninth');
    var ninthClock=document.getElementById('ninthClock');
    var tenth=document.getElementById('tenth');
    var tenthClock=document.getElementById('tenthClock');
    var eleventh=document.getElementById('eleventh');
    var eleventhClock=document.getElementById('eleventhClock');
    var twelve=document.getElementById('twelve');
    var twelveClock=document.getElementById('twelveClock');
    var thirteenth=document.getElementById('thirteenth');
    var thirteenthClock=document.getElementById('thirteenthClock');
    var fourteenth=document.getElementById('fourteenth');
    var fourteenthClock=document.getElementById('fourteenthClock');
    var fifteenth=document.getElementById('fifteenth');
    var fifteenthClock=document.getElementById('fifteenthClock');
    var sixteenth=document.getElementById('sixteenth');
    var sixteenthClock=document.getElementById('sixteenthClock');
    var seventeenth=document.getElementById('seventeenth');
    var seventeenthClock=document.getElementById('seventeenthClock');
    var eighteenth=document.getElementById('eighteenth');
    var eighteenthClock=document.getElementById('eighteenthClock');
    var nineteenth=document.getElementById('nineteenth');
    var nineteenthClock=document.getElementById('nineteenthClock');
    var twenty=document.getElementById('twenty');
    var twentyClock=document.getElementById('twentyClock');
    var twentyone=document.getElementById('twentyone');
    var twentyoneClock=document.getElementById('twentyoneClock');
    var twentytwo=document.getElementById('twentytwo');
    var twentytwoClock=document.getElementById('twentytwoClock');
    var twentythree=document.getElementById('twentythree');
    var twentythreeClock=document.getElementById('twentythreeClock');
    var twentyfour=document.getElementById('twentyfour');
    var twentyfourClock=document.getElementById('twentyfourClock');

    var tipTimer;

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Doomsday";
      }
    }, 1000);


//first
    first.addEventListener ('mouseover', function(){
    console.log('mouseover on first');
    tipTimer = setTimeout(showfirstClock, 100);
    });

    first.addEventListener ('mouseout', function(){
    console.log('mouseout on first');
    clearTimeout(tipTimer);
    firstClock.style.opacity = 0;
    });

    function showfirstClock(){
    console.log('showing msg');
    firstClock.style.opacity = 1;
    firstClock.style.transition = 'all .5s';
  }

//second
  second.addEventListener ('mouseover', function(){
  console.log('mouseover on second');
  tipTimer = setTimeout(showsecondClock, 100);
  });

  second.addEventListener ('mouseout', function(){
  console.log('mouseout on second');
  clearTimeout(tipTimer);
  secondClock.style.opacity = 0;
  });

  function showsecondClock(){
  console.log('showing msg');
  secondClock.style.opacity = 1;
  secondClock.style.transition = 'all .5s';
  }

//third
    third.addEventListener ('mouseover', function(){
    console.log('mouseover on third');
    tipTimer = setTimeout(showthirdClock, 100);
    });

    third.addEventListener ('mouseout', function(){
    console.log('mouseout on third');
    clearTimeout(tipTimer);
    thirdClock.style.opacity = 0;
    });

    function showthirdClock(){
    console.log('showing msg');
    thirdClock.style.opacity = 1;
    thirdClock.style.transition = 'all .5s';
    }


//fourth

        fourth.addEventListener ('mouseover', function(){
        console.log('mouseover on fourth');
        tipTimer = setTimeout(showfourthClock, 100);
        });

        fourth.addEventListener ('mouseout', function(){
        console.log('mouseout on fourth');
        clearTimeout(tipTimer);
        fourthClock.style.opacity = 0;
        });

        function showfourthClock(){
        console.log('showing msg');
        fourthClock.style.opacity = 1;
        fourthClock.style.transition = 'all .5s';
        }

//fifth
        fifth.addEventListener ('mouseover', function(){
        console.log('mouseover on fifth');
        tipTimer = setTimeout(showfifthClock, 100);
        });

        fifth.addEventListener ('mouseout', function(){
        console.log('mouseout on fifth');
        clearTimeout(tipTimer);
        fifthClock.style.opacity = 0;
        });

        function showfifthClock(){
        console.log('showing msg');
        fifthClock.style.opacity = 1;
        fifthClock.style.transition = 'all .5s';
        }

//sixth
        sixth.addEventListener ('mouseover', function(){
        console.log('mouseover on sixth');
        tipTimer = setTimeout(showsixthClock, 100);
        });

        sixth.addEventListener ('mouseout', function(){
        console.log('mouseout on sixth');
        clearTimeout(tipTimer);
        sixthClock.style.opacity = 0;
        });

        function showsixthClock(){
        console.log('showing msg');
        sixthClock.style.opacity = 1;
        sixthClock.style.transition = 'all .5s';
        }

//seventh
                seventh.addEventListener ('mouseover', function(){
                console.log('mouseover on seventh');
                tipTimer = setTimeout(showseventhClock, 100);
                });

                seventh.addEventListener ('mouseout', function(){
                console.log('mouseout on seventh');
                clearTimeout(tipTimer);
                seventhClock.style.opacity = 0;
                });

                function showseventhClock(){
                console.log('showing msg');
                seventhClock.style.opacity = 1;
                seventhClock.style.transition = 'all .5s';
                }
  //eigth
                eigth.addEventListener ('mouseover', function(){
                console.log('mouseover on eigth');
                tipTimer = setTimeout(showeigthClock, 100);
                });

                eigth.addEventListener ('mouseout', function(){
                console.log('mouseout on eigth');
                clearTimeout(tipTimer);
                eigthClock.style.opacity = 0;
                });

                function showeigthClock(){
                console.log('showing msg');
                eigthClock.style.opacity = 1;
                eigthClock.style.transition = 'all .5s';
                }

    //ninth
                ninth.addEventListener ('mouseover', function(){
                console.log('mouseover on ninth');
                tipTimer = setTimeout(showninthClock, 100);
                });

                ninth.addEventListener ('mouseout', function(){
                console.log('mouseout on ninth');
                clearTimeout(tipTimer);
                ninthClock.style.opacity = 0;
                });

                function showninthClock(){
                console.log('showing msg');
                ninthClock.style.opacity = 1;
                ninthClock.style.transition = 'all .5s';
                }

    //tenth
                tenth.addEventListener ('mouseover', function(){
                console.log('mouseover on tenth');
                tipTimer = setTimeout(showtenthClock, 100);
                });

                tenth.addEventListener ('mouseout', function(){
                console.log('mouseout on tenth');
                clearTimeout(tipTimer);
                tenthClock.style.opacity = 0;
                });

                function showtenthClock(){
                console.log('showing msg');
                tenthClock.style.opacity = 1;
                tenthClock.style.transition = 'all .5s';
                }

    //eleventh
              eleventh.addEventListener ('mouseover', function(){
              console.log('mouseover on eleventh');
              tipTimer = setTimeout(showeleventhClock, 100);
              });

              eleventh.addEventListener ('mouseout', function(){
              console.log('mouseout on eleventh');
              clearTimeout(tipTimer);
              eleventhClock.style.opacity = 0;
              });

            function showeleventhClock(){
              console.log('showing msg');
              eleventhClock.style.opacity = 1;
              eleventhClock.style.transition = 'all .5s';
              }

    //twelfth

    twelve.addEventListener ('mouseover', function(){
    console.log('mouseover on twelve');
    tipTimer = setTimeout(showtwelveClock, 100);
    });

    twelve.addEventListener ('mouseout', function(){
    console.log('mouseout on twelve');
    clearTimeout(tipTimer);
    twelveClock.style.opacity = 0;
    });

  function showtwelveClock(){
    console.log('showing msg');
    twelveClock.style.opacity = 1;
    twelveClock.style.transition = 'all .5s';
    }


    //thirteenth

    thirteenth.addEventListener ('mouseover', function(){
    console.log('mouseover on thirteenth');
    tipTimer = setTimeout(showthirteenthClock, 100);
    });

    thirteenth.addEventListener ('mouseout', function(){
    console.log('mouseout on thirteenth');
    clearTimeout(tipTimer);
    thirteenthClock.style.opacity = 0;
    });

  function showthirteenthClock(){
    console.log('showing msg');
    thirteenthClock.style.opacity = 1;
    thirteenthClock.style.transition = 'all .5s';
    }


    //fourteenth

    fourteenth.addEventListener ('mouseover', function(){
    console.log('mouseover on fourteenth');
    tipTimer = setTimeout(showfourteenthClock, 100);
    });

    fourteenth.addEventListener ('mouseout', function(){
    console.log('mouseout on fourteenth');
    clearTimeout(tipTimer);
    fourteenthClock.style.opacity = 0;
    });

  function showfourteenthClock(){
    console.log('showing msg');
    fourteenthClock.style.opacity = 1;
    fourteenthClock.style.transition = 'all .5s';
    }

    //fifteenth


        fifteenth.addEventListener ('mouseover', function(){
        console.log('mouseover on fifteenth');
        tipTimer = setTimeout(showfifteenthClock, 100);
        });

        fifteenth.addEventListener ('mouseout', function(){
        console.log('mouseout on fifteenth');
        clearTimeout(tipTimer);
        fifteenthClock.style.opacity = 0;
        });

      function showfifteenthClock(){
        console.log('showing msg');
        fifteenthClock.style.opacity = 1;
        fifteenthClock.style.transition = 'all .5s';
        }

    //sixteenth

    sixteenth.addEventListener ('mouseover', function(){
    console.log('mouseover on sixteenth');
    tipTimer = setTimeout(showsixteenthClock, 100);
    });

    sixteenth.addEventListener ('mouseout', function(){
    console.log('mouseout on sixteenth');
    clearTimeout(tipTimer);
    sixteenthClock.style.opacity = 0;
    });

  function showsixteenthClock(){
    console.log('showing msg');
    sixteenthClock.style.opacity = 1;
    sixteenthClock.style.transition = 'all .5s';
    }

    //seventeenth
    seventeenth.addEventListener ('mouseover', function(){
    console.log('mouseover on seventeenth');
    tipTimer = setTimeout(showseventeenthClock, 100);
    });

    seventeenth.addEventListener ('mouseout', function(){
    console.log('mouseout on seventeenth');
    clearTimeout(tipTimer);
    seventeenthClock.style.opacity = 0;
    });

  function showseventeenthClock(){
    console.log('showing msg');
    seventeenthClock.style.opacity = 1;
    seventeenthClock.style.transition = 'all .5s';
    }
    //eighteenth
    eighteenth.addEventListener ('mouseover', function(){
    console.log('mouseover on eighteenth');
    tipTimer = setTimeout(showeighteenthClock, 100);
    });

    eighteenth.addEventListener ('mouseout', function(){
    console.log('mouseout on eighteenth');
    clearTimeout(tipTimer);
    eighteenthClock.style.opacity = 0;
    });

  function showeighteenthClock(){
    console.log('showing msg');
    eighteenthClock.style.opacity = 1;
    eighteenthClock.style.transition = 'all .5s';
    }
    //nineteenth
    nineteenth.addEventListener ('mouseover', function(){
    console.log('mouseover on nineteenth');
    tipTimer = setTimeout(shownineteenthClock, 100);
    });

    nineteenth.addEventListener ('mouseout', function(){
    console.log('mouseout on nineteenth');
    clearTimeout(tipTimer);
    nineteenthClock.style.opacity = 0;
    });

  function shownineteenthClock(){
    console.log('showing msg');
    nineteenthClock.style.opacity = 1;
    nineteenthClock.style.transition = 'all .5s';
    }

    //twenty
    twenty.addEventListener ('mouseover', function(){
    console.log('mouseover on twenty');
    tipTimer = setTimeout(showtwentyClock, 100);
    });

    twenty.addEventListener ('mouseout', function(){
    console.log('mouseout on twenty');
    clearTimeout(tipTimer);
    twentyClock.style.opacity = 0;
    });

  function showtwentyClock(){
    console.log('showing msg');
    twentyClock.style.opacity = 1;
    twentyClock.style.transition = 'all .5s';
    }

    //twentyone

    twentyone.addEventListener ('mouseover', function(){
    console.log('mouseover on twentyone');
    tipTimer = setTimeout(showtwentyoneClock, 100);
    });

    twentyone.addEventListener ('mouseout', function(){
    console.log('mouseout on twentyone');
    clearTimeout(tipTimer);
    twentyoneClock.style.opacity = 0;
    });

  function showtwentyoneClock(){
    console.log('showing msg');
    twentyoneClock.style.opacity = 1;
    twentyoneClock.style.transition = 'all .5s';
    }

    //twentytwo

    twentytwo.addEventListener ('mouseover', function(){
    console.log('mouseover on twentytwo');
    tipTimer = setTimeout(showtwentytwoClock, 100);
    });

    twentytwo.addEventListener ('mouseout', function(){
    console.log('mouseout on twentytwo');
    clearTimeout(tipTimer);
    twentytwoClock.style.opacity = 0;
    });

  function showtwentytwoClock(){
    console.log('showing msg');
    twentytwoClock.style.opacity = 1;
    twentytwoClock.style.transition = 'all .5s';
    }

    //twentythree
    twentythree.addEventListener ('mouseover', function(){
    console.log('mouseover on twentythree');
    tipTimer = setTimeout(showtwentythreeClock, 100);
    });

    twentythree.addEventListener ('mouseout', function(){
    console.log('mouseout on twentythree');
    clearTimeout(tipTimer);
    twentythreeClock.style.opacity = 0;
    });

    function showtwentythreeClock(){
    console.log('showing msg');
    twentythreeClock.style.opacity = 1;
    twentythreeClock.style.transition = 'all .5s';
    }
    //twentyfour

    twentyfour.addEventListener ('mouseover', function(){
    console.log('mouseover on twentyfour');
    tipTimer = setTimeout(showtwentyfourClock, 100);
    });

    twentyfour.addEventListener ('mouseout', function(){
    console.log('mouseout on twentyfour');
    clearTimeout(tipTimer);
    twentyfourClock.style.opacity = 0;
    });

    function showtwentyfourClock(){
    console.log('showing msg');
    twentyfourClock.style.opacity = 1;
    twentyfourClock.style.transition = 'all .5s';
    }


});
