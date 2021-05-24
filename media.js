// function title(){
//   var show1 = [4]
//   var test = "Hopeful"

//   document.getElementById("test").textContent = test
// }

//var show0 = [card class, poster class, gradient class, title class, description text]


//Fargo
var show1 = [
  "tv-card fargo-solid",
  "tv-poster fargo-poster",
  "tv-gradient fargo-gradient",
  "tv-title tv-title-mid fargo-title",
  "Crime • 4 Seasons • 2014 - Present"
]

//Twin peaks
var show2 = ["tv-card twinpeaks-solid","tv-poster twinpeaks-poster","tv-gradient twinpeaks-gradient","tv-title tv-title-mid twinpeaks-title","Mystery • 3 Seasons • 1990 - 1991"]

//Always sunny
var show3 = ["tv-card twinpeaks-solid","tv-poster twinpeaks-poster","tv-gradient twinpeaks-gradient","tv-title tv-title-mid twinpeaks-title","Comedy • 14 Seasons • 2005 - Present"]

//Atlanta
var show4 = ["tv-card atlanta-solid","tv-poster atlanta-poster","tv-gradient atlanta-gradient","tv-title tv-title-mid atlanta-title","Comedy • 2 Seasons • 2016 - Present"]



function populate(){

  //show 1
    document.getElementById("card1").className = show1[0];
  document.getElementById("poster1").className = show1[1];
    document.getElementById("grad1").className = show1[2];
   document.getElementById("title1").className = show1[3];
    document.getElementById("desc1").innerHTML = show1[4];

  //show 2
    document.getElementById("card2").className = show2[0];
  document.getElementById("poster2").className = show2[1];
    document.getElementById("grad2").className = show2[2];
   document.getElementById("title2").className = show2[3];
    document.getElementById("desc2").innerHTML = show2[4];
  
  //show 3
    document.getElementById("card3").className = show3[0];
  document.getElementById("poster3").className = show3[1];
    document.getElementById("grad3").className = show3[2];
   document.getElementById("title3").className = show3[3];
    document.getElementById("desc3").innerHTML = show3[4];
  
  //show 4
    document.getElementById("card4").className = show4[0];
  document.getElementById("poster4").className = show4[1];
    document.getElementById("grad4").className = show4[2];
   document.getElementById("title4").className = show4[3];
    document.getElementById("desc4").innerHTML = show4[4];






}


// Comedy • 5 Seasons • 2016 - 2021
// Sci-Fi • 3 Seasons • 2017 - 2019
// Crime • 4 Seasons • 2018 - Present
// Comedy • 2 Seasons • 2020 - Present
// Drama • 1 Season • 2019


// Kim's Convenience
// Legion
// Snowfall
// Mythic Quest
// Spy (The)