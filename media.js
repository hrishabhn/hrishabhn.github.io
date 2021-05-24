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
  "Crime • 4 Seasons • 2014 - Present",
  "https://www.hulu.com/series/fargo-203cda1b-7919-40fb-ab36-1e45b3ed2a50",
  "WATCH ON HULU"
]

//Twin peaks
var show2 = [
  "tv-card twinpeaks-solid",
  "tv-poster twinpeaks-poster",
  "tv-gradient twinpeaks-gradient",
  "tv-title tv-title-mid twinpeaks-title",
  "Mystery • 3 Seasons • 1990 - 1991",
  "https://www.hulu.com/series/twin-peaks-72678117-3cc6-45dc-a294-270ef30a937a",
  "WATCH ON HULU"
]

//Always sunny
var show3 = [
  "tv-card always-solid",
  "tv-poster always-poster",
  "tv-gradient always-gradient",
  "tv-title tv-title-mid always-title",
  "Comedy • 14 Seasons • 2005 - Present",
  "https://www.hulu.com/series/its-always-sunny-in-philadelphia-2171423f-3326-4dfa-b193-b40494e60109",
  "WATCH ON HULU"
]

//Atlanta
var show4 = [
  "tv-card atlanta-solid",
  "tv-poster atlanta-poster",
  "tv-gradient atlanta-gradient",
  "tv-title tv-title-wide atlanta-title",
  "Comedy • 5 Seasons • 2016 - 2021",
  "https://www.hulu.com/series/atlanta-3529d0f1-acaf-476d-8be3-66cd6bf12530",
  "WATCH ON HULU"
]

//Kim's Convenience
var show5 = [
  "tv-card kim-solid",
  "tv-poster kim-poster",
  "tv-gradient kim-gradient",
  "tv-title tv-title-mid kim-title",
  "Comedy • 2 Seasons • 2016 - Present",
  "https://www.netflix.com/title/80199128",
  "WATCH ON NETFLIX"
]

//Legion
var show6 = [
  "tv-card legion-solid",
  "tv-poster legion-poster",
  "tv-gradient legion-gradient",
  "tv-title tv-title-wide legion-title",
  "Sci-Fi • 3 Seasons • 2017 - 2019",
  "https://www.hulu.com/series/legion-ae87e56c-5b3b-44f6-9154-b07c8e60fe6c",
  "WATCH ON HULU"
]

//Snowfall
var show7 = [
  "tv-card snowfall-solid",
  "tv-poster snowfall-poster",
  "tv-gradient snowfall-gradient",
  "tv-title tv-title-wide snowfall-title", //title width
  "Crime • 4 Seasons • 2018 - Present",
  "https://www.hulu.com/series/snowfall-ce0d176c-8a89-454d-bed4-b91ad2e0d6e6",
  "WATCH ON HULU"
]

//Mythic quest
var show8 = [
  "tv-card mythic-solid",
  "tv-poster mythic-poster",
  "tv-gradient mythic-gradient",
  "tv-title tv-title-wide mythic-title", //title width
  "Comedy • 2 Seasons • 2020 - Present",
  "https://tv.apple.com/show/mythic-quest/umc.cmc.1nfdfd5zlk05fo1bwwetzldy3",
  "WATCH ON  TV+"
]

//Spy
var show9 = [
  "tv-card spy-solid",
  "tv-poster spy-poster",
  "tv-gradient spy-gradient",
  "tv-title tv-title-wide spy-title", //title width
  "Drama • 1 Season • 2019",
  "https://www.netflix.com/title/80178151",
  "WATCH ON Netflix"
]

// PODCASTS //

//Pivot
var pod1 = [
  "podcast-card pivot-solid",
  "podcast-cover pivot-cover",
  "https://podcasts.apple.com/podcast/id1073226719"
]

//Lex fridman
var pod2 = [
  "podcast-card lex-solid",
  "podcast-cover lex-cover",
  "https://www.youtube.com/lexfridman/videos"
]

//Acquired
var pod3 = [
  "podcast-card acquired-solid",
  "podcast-cover acquired-cover",
  "https://podcasts.apple.com/podcast/id1050462261"
]

//Yang
var pod4 = [
  "podcast-card yang-solid",
  "podcast-cover yang-cover",
  "https://www.youtube.com/channel/UCJjLcmTHbVigXBb1ul0m5sw/videos"
]

//Sway
var pod5 = [
  "podcast-card sway-solid",
  "podcast-cover sway-cover",
  "https://podcasts.apple.com/podcast/id1528594034"
]

//Economist
var pod6 = [
  "podcast-card economist-solid",
  "podcast-cover economist-cover",
  "https://podcasts.apple.com/podcast/id151230264"
]

//Inet
var pod7 = [
  "podcast-card inet-solid",
  "podcast-cover inet-cover",
  "https://www.youtube.com/c/NewEconomicThinking/videos"
]

//samharris
var pod8 = [
  "podcast-card samharris-solid",
  "podcast-cover samharris-cover",
  "https://podcasts.apple.com/podcast/id733163012"
]
















function populate(){

  //show 1
    document.getElementById("card1").className = show1[0];
  document.getElementById("poster1").className = show1[1];
    document.getElementById("grad1").className = show1[2];
   document.getElementById("title1").className = show1[3];
    document.getElementById("desc1").innerHTML = show1[4];
    document.getElementById("link1").href =      show1[5];
 document.getElementById("service1").innerHTML = show1[6];


  //show 2
    document.getElementById("card2").className = show2[0];
  document.getElementById("poster2").className = show2[1];
    document.getElementById("grad2").className = show2[2];
   document.getElementById("title2").className = show2[3];
    document.getElementById("desc2").innerHTML = show2[4];
    document.getElementById("link2").href =      show2[5];
 document.getElementById("service2").innerHTML = show2[6];
  
  //show 3
    document.getElementById("card3").className = show3[0];
  document.getElementById("poster3").className = show3[1];
    document.getElementById("grad3").className = show3[2];
   document.getElementById("title3").className = show3[3];
    document.getElementById("desc3").innerHTML = show3[4];
    document.getElementById("link3").href =      show3[5];
 document.getElementById("service3").innerHTML = show3[6];
  
  //show 4
    document.getElementById("card4").className = show4[0];
  document.getElementById("poster4").className = show4[1];
    document.getElementById("grad4").className = show4[2];
   document.getElementById("title4").className = show4[3];
    document.getElementById("desc4").innerHTML = show4[4];
    document.getElementById("link4").href =      show4[5];
 document.getElementById("service4").innerHTML = show4[6];

  //show 5
    document.getElementById("card5").className = show5[0];
  document.getElementById("poster5").className = show5[1];
    document.getElementById("grad5").className = show5[2];
   document.getElementById("title5").className = show5[3];
    document.getElementById("desc5").innerHTML = show5[4];
    document.getElementById("link5").href =      show5[5];
 document.getElementById("service5").innerHTML = show5[6];

  //show 6
    document.getElementById("card6").className = show6[0];
  document.getElementById("poster6").className = show6[1];
    document.getElementById("grad6").className = show6[2];
   document.getElementById("title6").className = show6[3];
    document.getElementById("desc6").innerHTML = show6[4];
    document.getElementById("link6").href =      show6[5];
 document.getElementById("service6").innerHTML = show6[6];

  //show 7
    document.getElementById("card7").className = show7[0];
  document.getElementById("poster7").className = show7[1];
    document.getElementById("grad7").className = show7[2];
   document.getElementById("title7").className = show7[3];
    document.getElementById("desc7").innerHTML = show7[4];
    document.getElementById("link7").href =      show7[5];
 document.getElementById("service7").innerHTML = show7[6];

  //show 8
    document.getElementById("card8").className = show8[0];
  document.getElementById("poster8").className = show8[1];
    document.getElementById("grad8").className = show8[2];
   document.getElementById("title8").className = show8[3];
    document.getElementById("desc8").innerHTML = show8[4];
    document.getElementById("link8").href =      show8[5];
 document.getElementById("service8").innerHTML = show8[6];
  
  //show 9
    document.getElementById("card9").className = show9[0];
  document.getElementById("poster9").className = show9[1];
    document.getElementById("grad9").className = show9[2];
   document.getElementById("title9").className = show9[3];
    document.getElementById("desc9").innerHTML = show9[4];
    document.getElementById("link9").href =      show9[5];
 document.getElementById("service9").innerHTML = show9[6];
  
  // PODCASTS //

  //pod 1
   document.getElementById("podCard1").className = pod1[0];
  document.getElementById("podCover1").className = pod1[1];
   document.getElementById("podLink1").href =      pod1[2];

  //pod 2
   document.getElementById("podCard2").className = pod2[0];
  document.getElementById("podCover2").className = pod2[1];
   document.getElementById("podLink2").href =      pod2[2];

   //pod 3
   document.getElementById("podCard3").className = pod3[0];
  document.getElementById("podCover3").className = pod3[1];
   document.getElementById("podLink3").href =      pod3[2];

   //pod 4
   document.getElementById("podCard4").className = pod4[0];
  document.getElementById("podCover4").className = pod4[1];
   document.getElementById("podLink4").href =      pod4[2];

   //pod 5
   document.getElementById("podCard5").className = pod5[0];
  document.getElementById("podCover5").className = pod5[1];
   document.getElementById("podLink5").href =      pod5[2];

  //pod 6
   document.getElementById("podCard6").className = pod6[0];
  document.getElementById("podCover6").className = pod6[1];
   document.getElementById("podLink6").href =      pod6[2];

   //pod 7
   document.getElementById("podCard7").className = pod7[0];
  document.getElementById("podCover7").className = pod7[1];
   document.getElementById("podLink7").href =      pod7[2];

   //pod 8
   document.getElementById("podCard8").className = pod8[0];
  document.getElementById("podCover8").className = pod8[1];
   document.getElementById("podLink8").href =      pod8[2];









}


// 
// 
// 
// 
// 


// Legion
// Snowfall
// Mythic Quest
// Spy (The)