function media(){
  tvPopulate()
  bookPopulate()
  podPopulate()
}

function tvData() {
  var hide = [
    "hidden-always",
    "hidden-always",
    "hidden-always",
    "hidden-always",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
  var show0 = hide

  var show1 = hide
  var show2 = hide
  var show3 = hide
  var show4 = hide
  var show5 = hide
  var show6 = hide
  var show7 = hide
  var show8 = hide
  var show9 = hide
  var show10 = hide
  
  var show11 = hide
  var show12 = hide
  var show13 = hide
  var show14 = hide
  var show15 = hide
  var show16 = hide
  var show17 = hide
  var show18 = hide
  var show19 = hide
  var show20 = hide
  
  var show21 = hide
  var show22 = hide
  var show23 = hide
  var show24 = hide
  var show25 = hide
  var show26 = hide
  var show27 = hide
  var show28 = hide
  var show29 = hide
  var show30 = hide
  
  var show31 = hide
  var show32 = hide
  var show33 = hide
  var show34 = hide
  var show35 = hide
  var show36 = hide
  var show37 = hide
  var show38 = hide
  var show39 = hide
  var show40 = hide
  
  var show41 = hide
  var show42 = hide
  var show43 = hide
  var show44 = hide
  var show45 = hide
  var show46 = hide
  var show47 = hide
  var show48 = hide
  var show49 = hide
  var show50 = hide
  
  
  
  // Manifest
  show1 = [
    "manifest-solid",
    "manifest-poster",
    "manifest-gradient",
    "manifest-title",
    "Drama &#149 Mystery &#149 3 Seasons &#149 2018 - 2021",
    "https://www.hulu.com/series/manifest-a1e5ed46-2704-431e-94b0-9aea1560c712",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/349271",
    "https://reelgood.com/show/manifest-2018",
    "https://www.imdb.com/title/tt8421350"
  ]
  
  // Always sunny
  show2 = [
    "always-solid",
    "always-poster",
    "always-gradient",
    "always-title",
    "Comedy • 14 Seasons • 2005 - Present",
    "https://www.hulu.com/series/its-always-sunny-in-philadelphia-2171423f-3326-4dfa-b193-b40494e60109",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/75805",
    "https://reelgood.com/show/its-always-sunny-in-philadelphia-2005",
    "https://www.imdb.com/title/tt0472954",
    "It's Always Sunny in Philadelphia It's Always Sunny in Philadelphia It's Always Sunny in Philadelphia",
  ]
  
  // Love Death Robots
  show3 = [
    "ldr-solid",
    "ldr-poster",
    "ldr-gradient",
    "ldr-title",
    "Animation • Sci-Fi • 2 Seasons • 2019 - Present",
    "https://www.netflix.com/title/80174608",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/357888",
    "https://reelgood.com/show/love-death-robots-2019",
    "https://www.imdb.com/title/tt9561862",
  ]
  
  // Love Death Robots
  show4 = [
    "blackpink-solid",
    "blackpink-poster",
    "blackpink-gradient",
    "blackpink-title",
    "Documentary • Music • 2020",
    "https://www.netflix.com/title/81106901",
    "netflix",
    "Watch on Netflix",
    "",
    "https://reelgood.com/movie/blackpink-light-up-the-sky-2020",
    "https://www.imdb.com/title/tt13058290",
  ]
  
  // Rick and Morty
  show7 = [
    "rick-solid",
    "rick-poster",
    "rick-gradient",
    "rick-title",
    "Animation • Comedy • 5 Seasons • 2013 - Present",
    "",
    "hulu",
    "Watch",
    "https://www.tvtime.com/en/show/275274",
    "https://reelgood.com/show/rick-and-morty-2013",
    "https://www.imdb.com/title/tt2861424"
  ]
  
  
  
  // Loki
  show9 = [
    "loki-solid",
    "loki-poster",
    "loki-gradient",
    "loki-title",
    "Action & Adventure • Fantasy • 1 Season • 2021 - Present",
    "",
    "disney",
    "Watch on Disney+",
    "https://www.tvtime.com/en/show/362472",
    "https://reelgood.com/show/loki-2021",
    "https://www.imdb.com/title/tt9140554"
  ]
  
  
  
  // South park
  show11 = [
    "southpark-solid",
    "southpark-poster",
    "southpark-gradient",
    "southpark-title",
    "Animation • Comedy • 24 Seasons 1997 - Present",
    "https://play.hbomax.com/page/urn:hbo:page:GXr7SEgRi2sLCAAEAAAQu:type:series",
    "hbo",
    "Watch on HBO Max",
    "https://www.tvtime.com/en/show/75897",
    "https://reelgood.com/show/south-park-1997",
    "https://www.imdb.com/title/tt0121955",
  ]
  
  // Dave
  show12 = [
    "dave-solid",
    "dave-poster",
    "dave-gradient",
    "dave-title",
    "Comedy • 2 Seasons • 2020 - 2021",
    "https://www.hulu.com/series/dave-ac3a96f0-9614-46af-b524-f59c7d281946",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/354905",
    "https://reelgood.com/show/dave-2020",
    "https://www.imdb.com/title/tt8531222"
  ]
  
  
  
  // New girl
  show14 = [
    "newgirl-solid",
    "newgirl-poster",
    "newgirl-gradient",
    "newgirl-title",
    "Comedy • 7 Seasons • 2011 - 2018",
    "https://www.netflix.com/title/70196145",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/248682",
    "https://reelgood.com/show/new-girl-2011",
    "https://www.imdb.com/title/tt1826940"
  ]
  
  // Fresh prince
  show15 = [
    "fresh-solid",
    "fresh-poster",
    "fresh-gradient",
    "fresh-title",
    "Comedy • 6 Seasons • 1990 - 1996",
    "https://play.hbomax.com/page/urn:hbo:page:GXdLWQgqPHKXCPQEAAAxk:type:series",
    "hbo",
    "Watch on HBO Max",
    "https://www.tvtime.com/en/show/76738",
    "https://reelgood.com/show/the-fresh-prince-of-bel-air-1990",
    "https://www.imdb.com/title/tt0098800"
  ]
  
  // Last week tonight
  show16 = [
    "last-solid",
    "last-poster",
    "last-gradient",
    "last-title",
    "Talk Show • 8 Seasons • 2020 - Present",
    "https://play.hbomax.com/page/urn:hbo:page:GVU2cggagzYNJjhsJATwo:type:series",
    "hbo",
    "Watch on HBO Max",
    "https://www.tvtime.com/en/show/278518",
    "https://reelgood.com/show/last-week-tonight-with-john-oliver-2014",
    "https://www.imdb.com/title/tt3530232"
  ]
  
  // Twin peaks
  show17 = [
    "twinpeaks-solid",
    "twinpeaks-poster",
    "twinpeaks-gradient",
    "twinpeaks-title",
    "Mystery • 3 Seasons • 1990 - 1991",
    "https://www.hulu.com/series/twin-peaks-72678117-3cc6-45dc-a294-270ef30a937a",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/70533",
    "https://reelgood.com/show/twin-peaks-1990",
    "https://www.imdb.com/title/tt0098936"
  ]
  
  // Atlanta
  show18 = [
    "atlanta-solid",
    "atlanta-poster",
    "atlanta-gradient",
    "atlanta-title",
    "Comedy • 5 Seasons • 2016 - 2021",
    "https://www.hulu.com/series/atlanta-3529d0f1-acaf-476d-8be3-66cd6bf12530",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/313999",
    "https://reelgood.com/show/atlanta-2016",
    "https://www.imdb.com/title/tt4288182"
  ]
  
  // Legion
  show19 = [
    "legion-solid",
    "legion-poster",
    "legion-gradient",
    "legion-title",
    "Sci-Fi • 3 Seasons • 2017 - 2019",
    "https://www.hulu.com/series/legion-ae87e56c-5b3b-44f6-9154-b07c8e60fe6c",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/320724",
    "https://reelgood.com/show/legion-2017",
    "https://www.imdb.com/title/tt5114356"
  ]
  
  //Drive to survive
  show20 = [
    "drive-solid",
    "drive-poster",
    "drive-gradient",
    "drive-title",
    "Documentary • 3 Seasons • 2019 - Present",
    "https://www.netflix.com/title/80204890",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/359913",
    "https://reelgood.com/show/formula-1-drive-to-survive-2019",
    "https://www.imdb.com/title/tt8289930"
  ]
  
  
  
  
  
  // Movies
  
  show21 = [
    "earth-solid",
    "earth-poster",
    "earth-gradient",
    "earth-title",
    "Documentary • 2021",
    "https://tv.apple.com/movie/the-year-earth-changed/umc.cmc.3fob3t7nfhehpb3ilgynzxmnu",
    "black-gradient",
    "Watch on TV+",
    "",
    "https://reelgood.com/movie/the-year-earth-changed-2021",
    "https://www.imdb.com/title/tt14372240"
  ]
  
  show22 = [
    "ghost-solid",
    "ghost-poster",
    "ghost-gradient",
    "ghost-title",
    "Animation • Action • Crime • 1995",
    "https://watch.amazon.com/detail?asin=B07WQZDXTM",
    "prime",
    "Watch on Prime Video",
    "",
    "https://reelgood.com/movie/ghost-in-the-shell-1995",
    "https://www.imdb.com/title/tt0113568"
  ]
  
  show23 = [
    "john-solid",
    "john-poster",
    "john-gradient",
    "john-title",
    "Comedy • Drama • Fantasy • 1999",
    "",
    "hulu",
    "Watch",
    "",
    "https://reelgood.com/movie/being-john-malkovich-1999",
    "https://www.imdb.com/title/tt0120601"
  ]
  
  show24 = [
    "knives-solid",
    "knives-poster",
    "knives-gradient",
    "knives-title",
    "Comedy • Crime • Drama • 2019",
    "https://watch.amazon.com/detail?asin=B081W68DP2",
    "prime",
    "Watch on Prime Video",
    "",
    "https://reelgood.com/movie/knives-out-2019",
    "https://www.imdb.com/title/tt8946378"
  ]
  
  
  
  
  
  // New
  
  // Curb
  show32 = [
    "curb-solid",
    "curb-poster",
    "curb-gradient",
    "curb-title",
    "Comedy • 10 Seasons • 2000 - Present",
    "https://play.hbomax.com/page/urn:hbo:page:GVU2bygQ1go7DwvwIAT3r:type:series",
    "hbo",
    "Watch on HBO Max",
    "https://www.tvtime.com/en/show/76203",
    "https://reelgood.com/show/curb-your-enthusiasm-2000",
    "https://www.imdb.com/title/tt0264235"
  ]
  
  // Spy
  show33 = [
    "spy-solid",
    "spy-poster",
    "spy-gradient",
    "spy-title",
    "Drama • 1 Season • 2019",
    "https://www.netflix.com/title/80178151",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/368109",
    "https://reelgood.com/show/the-spy-2019",
    "https://www.imdb.com/title/tt5952634"
  ]
  
  //Chernobyl
  show34 = [
    "chernobyl-solid",
    "chernobyl-poster",
    "chernobyl-gradient",
    "chernobyl-title",
    "Thriller • 1 Season • 2019",
    "https://play.hbomax.com/page/urn:hbo:page:GXJvkMAU0JIG6gAEAAAIo:type:series",
    "hbo",
    "Watch on HBO Max",
    "https://www.tvtime.com/en/show/360893",
    "https://reelgood.com/show/chernobyl-2019",
    "https://www.imdb.com/title/tt7366338"
  ]
  
  //Human
  show36 = [
    "human-solid",
    "human-poster",
    "human-gradient",
    "human-title",
    "Documentary • 1 Season • 2021 - Present",
    "https://www.netflix.com/title/81139212",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/402219",
    "https://reelgood.com/show/human-the-world-within-2021",
    "https://www.imdb.com/title/tt14574154"
  ]
  
  //Line of duty 
  show37 = [
    "lineofduty-solid",
    "lineofduty-poster",
    "lineofduty-gradient",
    "lineofduty-title",
    "Thriller • 6 Season • 2012 - Present",
    "https://www.netflix.com/title/70263817",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/260092",
    "https://reelgood.com/show/line-of-duty-2012",
    "https://www.imdb.com/title/tt2303687"
  ]
  
  //Mindhunter
  show38 = [
    "mindhunter-solid",
    "mindhunter-poster",
    "mindhunter-gradient",
    "mindhunter-title",
    "Crime • 2 Seasons • 2017 - 2019",
    "https://www.netflix.com/title/80114855",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/328708",
    "https://reelgood.com/show/mindhunter-2017",
    "https://www.imdb.com/title/tt5290382"
  ]
  
  //Sweet tooth
  show39 = [
    "sweet-solid",
    "sweet-poster",
    "sweet-gradient",
    "sweet-title",
    "Action & Adventure • 1 Season • 2021 - Present",
    "https://www.netflix.com/title/81221380",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/355837",
    "https://reelgood.com/show/sweet-tooth-2021",
    "https://www.imdb.com/title/tt12809988"
  ]
  
  // Startup
  show40 = [
    "startup-solid",
    "startup-poster",
    "startup-gradient",
    "startup-title",
    "Drama • Crime • 3 Seasons • 2016 - 2019",
    "https://www.netflix.com/title/80154285",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/310614",
    "https://reelgood.com/show/startup-2016",
    "https://www.imdb.com/title/tt5028002"
  ]
  
  // For all mankind
  show41 = [
    "mankind-solid",
    "mankind-poster",
    "mankind-gradient",
    "mankind-title",
    "Sci-Fi • 2 Seasons • 2019 - Present",
    "https://tv.apple.com/show/for-all-mankind/umc.cmc.6wsi780sz5tdbqcf11k76mkp7",
    "black-gradient",
    "Watch on  TV+",
    "https://www.tvtime.com/en/show/356202",
    "https://reelgood.com/show/for-all-mankind-2019",
    "https://www.imdb.com/title/tt7772588"
  ]
  
  var showsAll = [
    show0,
    show1,
    show2,
    show3,
    show4,
    show5,
    show6,
    show7,
    show8,
    show9,
    show10,
    show11,
    show12,
    show13,
    show14,
    show15,
    show16,
    show17,
    show18,
    show19,
    show20,
    show21,
    show22,
    show23,
    show24,
    show25,
    show26,
    show27,
    show28,
    show29,
    show30,
    show31,
    show32,
    show33,
    show34,
    show35,
    show36,
    show37,
    show38,
    show39,
    show40,
    show41,
    show42,
    show43,
    show44,
    show45,
    show46,
    show47,
    show48,
    show49,
    show50,
  ]
  
  // console.log(showsAll)
  // console.log(showsAll[1][1])

  return showsAll



}

function tvPopulate() {
  showsAll = tvData()

  var cardClass = "media-card tv-card ";
  var titleClass = "tv-card-title ";

  for (i = 1; i < 51; i++){
    var itemid = [
      "tv-card-".concat(i),
      "tv-link-".concat(i),
      "tv-title-".concat(i),
    ]

    document.getElementById(itemid[0]).className =  cardClass.concat(showsAll[i][1]);
    document.getElementById(itemid[1]).href =                        showsAll[i][5];
    document.getElementById(itemid[2]).className = titleClass.concat(showsAll[i][3]);
  }
}

var tvModal = document.getElementById("tv-popup-modal");
// var bookModal = document.getElementById("book-popup-modal");
var bgBlur = document.getElementById("background-blur");
// var fgBlur = document.getElementById("foreground-blur");

var bgWrap = document.getElementById("background-wrapper");
  
function popupTVPopulate(n){
  tvPopup(n);
  bgBlur.className = "background-blur background-blur-show";
  tvModal.className = "modal tv-popup-open";
}

function popupTVHide(){
  bgBlur.className = "background-blur background-blur-hide";
  tvModal.className = "modal tv-popup-closed";
}
  
function tvPopup(n){
  showsAll = tvData()
  console.log(showsAll[n])

  var cardClass = "tv-popup-card ";
  var posterClass = "tv-popup-poster ";
  var gradientClass = "tv-popup-gradient ";
  var titleClass = "tv-popup-title ";
  var serviceClass = "tv-popup-button-container tv-play-button ";

  document.getElementById("card").className =               cardClass.concat(showsAll[n][0]);
  document.getElementById("poster").className =           posterClass.concat(showsAll[n][1]);
  document.getElementById("grad").className =           gradientClass.concat(showsAll[n][2]);
  document.getElementById("title").className =             titleClass.concat(showsAll[n][3]);
  document.getElementById("desc").innerHTML =                                showsAll[n][4];
  document.getElementById("tv-popup-link").href =                                     showsAll[n][5];
  // document.getElementById("serviceGradient").className = serviceClass.concat(showsAll[n][6]);
  document.getElementById("service").innerHTML =                             showsAll[n][7];
  document.getElementById("tv-popup-tv-time").href =                                  showsAll[n][8];
  document.getElementById("tv-popup-reelgood").href =                                 showsAll[n][9];
  document.getElementById("tv-popup-imdb").href =                                     showsAll[n][10];
}

function podData() {
  // Learn cantonese
  var pod_1 = [
    "canto-cover",
    "https://podcasts.apple.com/podcast/id1513774818"
  ]

  // Acquired
  var pod_2 = [
    "acquired-cover",
    "https://podcasts.apple.com/podcast/id1050462261"
  ]

  // Founders
  var pod_3 = [
    "founders-cover",
    "https://podcasts.apple.com/podcast/id1509276485"
    
  ]

  // Pivot
  var pod_4 = [
    "pivot-cover",
    "https://podcasts.apple.com/podcast/id1073226719"
  ]

  //Lex fridman
  var pod_5 = [
    "lex-cover",
    "https://www.youtube.com/lexfridman/videos"
  ]

  //Yang
  var pod_6 = [
    "yang-cover",
    "https://www.youtube.com/channel/UCJjLcmTHbVigXBb1ul0m5sw/videos"
  ]

  //Sway
  var pod_7 = [
    "sway-cover",
    "https://podcasts.apple.com/podcast/id1528594034"
  ]

  //Economist
  var pod_8 = [
    "economist-cover",
    "https://podcasts.apple.com/podcast/id151230264"
  ]

  // //Inet
  // var pod_9 = [
  //   "podcast-card inet-solid",
  //   "podcast-cover inet-cover",
  //   "https://www.youtube.com/c/NewEconomicThinking/videos"
  // ]

  // //samharris
  // var pod_10 = [
  //   "podcast-card samharris-solid",
  //   "podcast-cover samharris-cover",
  //   "https://podcasts.apple.com/podcast/id733163012"
  // ]

  var podAll = [
    null,
    pod_1,
    pod_2,
    pod_3,
    pod_4,
    pod_5,
    pod_6,
    pod_7,
    pod_8,
  ]

  return podAll
}

function podPopulate() {
  podAll = podData()
  var cardClass = "media-card pod-card ";

  for (i = 1; i < 9; i++){
    var itemid = [
      "pod-".concat(i),
    ]
    // console.log(i)
    // console.log(podAll[i][0])

    document.getElementById(itemid[0]).className = cardClass.concat(podAll[i][0]);
    document.getElementById(itemid[0]).href =                       podAll[i][1];
  }
}

function bookData(){
  var book_1 = [
    "homodeus-cover",
    "audible://view?section=discover&asin=B01N4DCBK6",
    // "https://smart.link/o3waqx4wg1gdn?asin=B01N4DCBK6",
  ]

  var book_2 = [
    "ride-cover",
    "audible://view?section=discover&asin=0525499334",
    // "https://smart.link/o3waqx4wg1gdn?asin=0525499334",
  ]

  var book_3 = [
    "martian-cover",
    "audible://view?section=discover&asin=B082BHJMFF",
    // "https://smart.link/o3waqx4wg1gdn?asin=B082BHJMFF",
  ]

  var bookAll = [
    null,
    book_1,
    book_2,
    book_3,
  ]

  return bookAll
}

function bookPopulate() {
  bookAll = bookData()
  var cardClass = "media-card book-card ";

  for (i = 1; i < 4; i++){
    var itemid = [
      "book-".concat(i),
    ]

    document.getElementById(itemid[0]).className = cardClass.concat(bookAll[i][0]);
    document.getElementById(itemid[0]).href =                       bookAll[i][1];
  }

}