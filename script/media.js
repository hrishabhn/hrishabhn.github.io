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
  


  // Loki
  show1 = [
    "loki-solid",
    "loki-poster",
    "loki-gradient",
    "loki-title",
    "Action & Adventure &#149 Fantasy &#149 1 Season &#149 2021 - Present",
    "",
    "disney",
    "Watch",
    "https://www.tvtime.com/en/show/362472",
    "9.74",
    "https://reelgood.com/show/loki-2021",
    "95",
    "https://www.imdb.com/title/tt9140554",
    "8.7",
    "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
  ]



  // Ted lasso
  show2 = [
    "ted-solid",
    "ted-poster",
    "ted-gradient",
    "ted-title",
    "Comedy &#149 Drama &#149 Sport &#149 2 Seasons &#149 2020 - Present",
    "",
    "disney",
    "Watch",
    "https://www.tvtime.com/en/show/383203",
    "9.82",
    "https://reelgood.com/show/ted-lasso-2020",
    "91",
    "https://www.imdb.com/title/tt10986410",
    "8.7",
    "Ted Lasso, an American football coach, moves to England when he’s hired to manage a soccer team—despite having no experience. With cynical players and a doubtful town, will he get them to see the Ted Lasso Way?",
  ]

  // shadows
  show3 = [
    "shadows-solid",
    "shadows-poster",
    "shadows-gradient",
    "shadows-title",
    "Comedy &#149 Fantasy &#149 Horror &#149 2 Seasons &#149 2019 - Present",
    "https://www.hulu.com/series/what-we-do-in-the-shadows-0b10c46a-12f0-4357-8a00-547057b49bac",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/358211",
    "9.38",
    "https://reelgood.com/show/what-we-do-in-the-shadows-2019",
    "86",
    "https://www.imdb.com/title/tt7908628",
    "8.5",
    "Three vampires, Nandor, Colin Robinson and Nadja, struggle to keep up with the duties and responsibilities of everyday life as they reside in an apartment in New York.",
  ]

  // drugs
  show4 = [
    "drugs-solid",
    "drugs-poster",
    "drugs-gradient",
    "drugs-title",
    "Comedy &#149 Crime &#149 Drama &#149 3 Seasons &#149 2019 - Present",
    "https://www.netflix.com/title/80218448",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/361034",
    "9.28",
    "https://reelgood.com/show/how-to-sell-drugs-online-fast-2019",
    "69",
    "https://www.imdb.com/title/tt9184994",
    "7.9",
    "To win back the love of his life, a high school student and his best friend launch Europe's largest online drug business from their teenage bedroom.",
  ]
  
  // Manifest
  show7 = [
    "manifest-solid",
    "manifest-poster",
    "manifest-gradient",
    "manifest-title",
    "Drama &#149 Mystery &#149 3 Seasons &#149 2018 - 2021",
    "https://www.hulu.com/series/manifest-a1e5ed46-2704-431e-94b0-9aea1560c712",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/349271",
    "9.46",
    "https://reelgood.com/show/manifest-2018",
    "81",
    "https://www.imdb.com/title/tt8421350",
    "7.2",
    "A commercial airliner suddenly reappears after being missing for five years. As those aboard reintegrate into society, they experience guiding voices and visions of events yet to occur, and soon a deeper mystery unfolds."
  ]

  // Always sunny
  show8 = [
    "always-solid",
    "always-poster",
    "always-gradient",
    "always-title",
    "Comedy &#149 14 Seasons &#149 2005 - Present",
    "https://www.hulu.com/series/its-always-sunny-in-philadelphia-2171423f-3326-4dfa-b193-b40494e60109",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/75805",
    "8.28",
    "https://reelgood.com/show/its-always-sunny-in-philadelphia-2005",
    "90",
    "https://www.imdb.com/title/tt0472954",
    "8.8",
    "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.",
  ]

  // Rick and Morty
  show9 = [
    "rick-solid",
    "rick-poster",
    "rick-gradient",
    "rick-title",
    "Animation &#149 Comedy &#149 5 Seasons &#149 2013 - Present",
    "",
    "hulu",
    "Watch",
    "https://www.tvtime.com/en/show/275274",
    "8.96",
    "https://reelgood.com/show/rick-and-morty-2013",
    "100",
    "https://www.imdb.com/title/tt2861424",
    "9.2",
    "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
  ]
  
  
  
  // Love Death Robots
  show10 = [
    "ldr-solid",
    "ldr-poster",
    "ldr-gradient",
    "ldr-title",
    "Animation &#149 Sci-Fi &#149 2 Seasons &#149 2019 - Present",
    "https://www.netflix.com/title/80174608",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/357888",
    "8.98",
    "https://reelgood.com/show/love-death-robots-2019",
    "86",
    "https://www.imdb.com/title/tt9561862",
    "8.5",
    "This collection of animated short stories spans several genres, including science fiction, fantasy, horror and comedy. World-class animation creators bring captivating stories to life in the form of a unique and visceral viewing experience. The animated anthology series includes tales that explore alternate histories, life for robots in a post-apocalyptic city and a plot for world domination by super-intelligent yogurt. Among the show's executive producers is Oscar-nominated director David Fincher.",
  ]
  
  
  
  
 

  // family guy
  show11 = [
    "family-solid",
    "family-poster",
    "family-gradient",
    "family-title",
    "Animation &#149 Comedy &#149 19 Seasons &#149 1999 - Present",
    "https://www.netflix.com/title/80192718",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/75978",
    "7.58",
    "https://reelgood.com/show/family-guy-1999",
    "81",
    "https://www.imdb.com/title/tt0182576",
    "8.1",
    "Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.",
  ]

  // Atlanta
  show12 = [
    "atlanta-solid",
    "atlanta-poster",
    "atlanta-gradient",
    "atlanta-title",
    "Comedy &#149 5 Seasons &#149 2016 - 2021",
    "https://www.hulu.com/series/atlanta-3529d0f1-acaf-476d-8be3-66cd6bf12530",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/313999",
    "8.6",
    "https://reelgood.com/show/atlanta-2016",
    "83",
    "https://www.imdb.com/title/tt4288182",
    "8.6",
    "Based in Atlanta, Earn and his cousin Alfred try to make their way in the world through the rap scene. Along the way they come face to face with social and economic issues touching on race, relationships, poverty, status, and parenthood.",
  ]
  
  // Lost
  show13 = [
    "lost-solid",
    "lost-poster",
    "lost-gradient",
    "lost-title",
    "Action &#149 Adventure &#149 6 Seasons &#149 2004 - 2010",
    "https://www.hulu.com/series/lost-466b3994-b574-44f1-88bc-63707507a6cb",
    "hulu",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/73739",
    "9.16",
    "https://reelgood.com/show/lost-2004",
    "91",
    "https://www.imdb.com/title/tt0411008",
    "8.3",
    "The survivors of a plane crash find themselves stranded on a mysterious island. They are forced to work together for their survival when they realise that they are not alone on the island.",
  ]

  
  // // South park
  // show11 = [
  //   "southpark-solid",
  //   "southpark-poster",
  //   "southpark-gradient",
  //   "southpark-title",
  //   "Animation &#149 Comedy &#149 24 Seasons 1997 - Present",
  //   "https://play.hbomax.com/page/urn:hbo:page:GXr7SEgRi2sLCAAEAAAQu:type:series",
  //   "hbo",
  //   "Watch on HBO Max",
  //   "https://www.tvtime.com/en/show/75897",
  //   "https://reelgood.com/show/south-park-1997",
  //   "https://www.imdb.com/title/tt0121955",
  // ]
  
  // // Dave
  // show12 = [
  //   "dave-solid",
  //   "dave-poster",
  //   "dave-gradient",
  //   "dave-title",
  //   "Comedy &#149 2 Seasons &#149 2020 - 2021",
  //   "https://www.hulu.com/series/dave-ac3a96f0-9614-46af-b524-f59c7d281946",
  //   "hulu-green",
  //   "Watch on Hulu",
  //   "https://www.tvtime.com/en/show/354905",
  //   "",
  //   "https://reelgood.com/show/dave-2020",
  //   "",
  //   "https://www.imdb.com/title/tt8531222",
  //   "",
  //   "",
  // ]
  
  
  
  // // New girl
  // show14 = [
  //   "newgirl-solid",
  //   "newgirl-poster",
  //   "newgirl-gradient",
  //   "newgirl-title",
  //   "Comedy &#149 7 Seasons &#149 2011 - 2018",
  //   "https://www.netflix.com/title/70196145",
  //   "netflix",
  //   "Watch on Netflix",
  //   "https://www.tvtime.com/en/show/248682",
  //   "",
  //   "https://reelgood.com/show/new-girl-2011",
  //   "",
  //   "https://www.imdb.com/title/tt1826940",
  //   "",
  //   "",
  // ]
  
  // // Fresh prince
  // show15 = [
  //   "fresh-solid",
  //   "fresh-poster",
  //   "fresh-gradient",
  //   "fresh-title",
  //   "Comedy &#149 6 Seasons &#149 1990 - 1996",
  //   "https://play.hbomax.com/page/urn:hbo:page:GXdLWQgqPHKXCPQEAAAxk:type:series",
  //   "hbo",
  //   "Watch on HBO Max",
  //   "https://www.tvtime.com/en/show/76738",
  //   "",
  //   "https://reelgood.com/show/the-fresh-prince-of-bel-air-1990",
  //   "",
  //   "https://www.imdb.com/title/tt0098800",
  //   "",
  //   "",
  // ]
  
  // // Last week tonight
  // show16 = [
  //   "last-solid",
  //   "last-poster",
  //   "last-gradient",
  //   "last-title",
  //   "Talk Show &#149 8 Seasons &#149 2020 - Present",
  //   "https://play.hbomax.com/page/urn:hbo:page:GVU2cggagzYNJjhsJATwo:type:series",
  //   "hbo",
  //   "Watch on HBO Max",
  //   "https://www.tvtime.com/en/show/278518",
  //   "",
  //   "https://reelgood.com/show/last-week-tonight-with-john-oliver-2014",
  //   "",
  //   "https://www.imdb.com/title/tt3530232",
  //   "",
  //   "",
  // ]

  // // blackpink
  // show4 = [
  //   "blackpink-solid",
  //   "blackpink-poster",
  //   "blackpink-gradient",
  //   "blackpink-title",
  //   "Documentary &#149 Music &#149 2020",
  //   "https://www.netflix.com/title/81106901",
  //   "netflix",
  //   "Watch on Netflix",
  //   "",
  //   "",
  //   "https://reelgood.com/movie/blackpink-light-up-the-sky-2020",
  //   "63",
  //   "https://www.imdb.com/title/tt13058290",
  //   "7.5",
  //   "Blackpink: Light Up the Sky is a 2020 documentary film directed by Caroline Suh, that tells the story of South Korean girl group Blackpink as bandmates and as individuals, and details their rise to fame.",
  // ]
  
  // Twin peaks
  show17 = [
    "twinpeaks-solid",
    "twinpeaks-poster",
    "twinpeaks-gradient",
    "twinpeaks-title",
    "Mystery &#149 3 Seasons &#149 1990 - 1991",
    "https://www.hulu.com/series/twin-peaks-72678117-3cc6-45dc-a294-270ef30a937a",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/70533",
    "8.6",
    "https://reelgood.com/show/twin-peaks-1990",
    "89",
    "https://www.imdb.com/title/tt0098936",
    "8.8",
    "A crime drama mixed with healthy doses of the surreal, this series is about FBI Agent Dale Cooper, who travels to the small logging town of Twin Peaks to solve the murder of seemingly innocent high schooler Laura Palmer. Almost nothing is as it seems, however, and the show's sometimes eerie visuals, oddball characters and wild dream sequences drive the point home.",
  ]
  
  
  
  // Legion
  show19 = [
    "legion-solid",
    "legion-poster",
    "legion-gradient",
    "legion-title",
    "Sci-Fi &#149 3 Seasons &#149 2017 - 2019",
    "https://www.hulu.com/series/legion-ae87e56c-5b3b-44f6-9154-b07c8e60fe6c",
    "hulu-green",
    "Watch on Hulu",
    "https://www.tvtime.com/en/show/320724",
    "9.26",
    "https://reelgood.com/show/legion-2017",
    "83",
    "https://www.imdb.com/title/tt5114356",
    "8.2",
    "David Haller, AKA Legion, is a troubled young man who may be more than human. Diagnosed as schizophrenic, David has been in and out of psychiatric hospitals for years. But after a strange encounter with a fellow patient, he's confronted with the possibility that the voices he hears and the visions he sees might be real.",
  ]
  
  //Drive to survive
  show20 = [
    "drive-solid",
    "drive-poster",
    "drive-gradient",
    "drive-title",
    "Documentary &#149 3 Seasons &#149 2019 - Present",
    "https://www.netflix.com/title/80204890",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/359913",
    "9.86",
    "https://reelgood.com/show/formula-1-drive-to-survive-2019",
    "73",
    "https://www.imdb.com/title/tt8289930",
    "8.6",
    "The drivers, managers and team owners in Formula 1 live life in the fast lane -- both on and off the track. This docuseries gives viewers exclusive, intimate access to the people in one of the world's greatest racing competitions.",
  ]
  
  
  
  
  
  // Movies
  
  show21 = [
    "munich-solid",
    "munich-poster",
    "munich-gradient",
    "munich-title",
    "Action &#149 Drama &#149 History &#149 2005",
    "",
    "black-gradient",
    "Watch",
    "",
    "",
    "https://reelgood.com/movie/munich-2005",
    "76",
    "https://www.imdb.com/title/tt0408306",
    "7.5",
    "A terrorist organisation kills eleven Israeli athletes at the 1972 Munich Olympics. However, a team of five men, headed by Avner Kaufman, is assigned the task of killing the terrorists as revenge.",
  ]

  show22 = [
    "silence-solid",
    "silence-poster",
    "silence-gradient",
    "silence-title",
    "Crime &#149 Drama &#149 Thriller &#149 1991",
    "",
    "black-gradient",
    "Watch",
    "",
    "",
    "https://reelgood.com/movie/the-silence-of-the-lambs-1991",
    "88",
    "https://www.imdb.com/title/tt0102926",
    "8.6",
    "Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.",
  ]

  show23 = [
    "butch-solid",
    "butch-poster",
    "butch-gradient",
    "butch-title",
    "Biography &#149 Crime &#149 Drama &#149 1969",
    "",
    "black-gradient",
    "Watch",
    "",
    "",
    "https://reelgood.com/movie/butch-cassidy-and-the-sundance-kid-1969",
    "78",
    "https://www.imdb.com/title/tt0064115",
    "8.0",
    "Butch Cassidy and the Sundance Kid are two free-spirited leaders of a criminal gang. When their plan of robbing a bank goes astray, they flee to Bolivia in an attempt to outdo the law in the country.",
  ]

  show27 = [
    "ghost-solid",
    "ghost-poster",
    "ghost-gradient",
    "ghost-title",
    "Animation &#149 Action &#149 Crime &#149 1995",
    "https://watch.amazon.com/detail?asin=B07WQZDXTM",
    "prime",
    "Watch on Prime Video",
    "",
    "",
    "https://reelgood.com/movie/ghost-in-the-shell-1995",
    "",
    "https://www.imdb.com/title/tt0113568",
    "",
    "",
  ]

  show28 = [
    "earth-solid",
    "earth-poster",
    "earth-gradient",
    "earth-title",
    "Documentary &#149 2021",
    "https://tv.apple.com/movie/the-year-earth-changed/umc.cmc.3fob3t7nfhehpb3ilgynzxmnu",
    "black-gradient",
    "Watch on TV+",
    "",
    "",
    "https://reelgood.com/movie/the-year-earth-changed-2021",
    "",
    "https://www.imdb.com/title/tt14372240",
    "",
    "",
  ]
  
  show29 = [
    "john-solid",
    "john-poster",
    "john-gradient",
    "john-title",
    "Comedy &#149 Drama &#149 Fantasy &#149 1999",
    "",
    "hulu",
    "Watch",
    "",
    "",
    "https://reelgood.com/movie/being-john-malkovich-1999",
    "",
    "https://www.imdb.com/title/tt0120601",
    "",
    "",
  ]
  
  show30 = [
    "knives-solid",
    "knives-poster",
    "knives-gradient",
    "knives-title",
    "Comedy &#149 Crime &#149 Drama &#149 2019",
    "https://watch.amazon.com/detail?asin=B081W68DP2",
    "prime",
    "Watch on Prime Video",
    "",
    "",
    "https://reelgood.com/movie/knives-out-2019",
    "",
    "https://www.imdb.com/title/tt8946378",
    "",
    "",
  ]
  
  
  
  

  
  
  // New
  
  // // Curb
  // show42 = [
  //   "curb-solid",
  //   "curb-poster",
  //   "curb-gradient",
  //   "curb-title",
  //   "Comedy &#149 10 Seasons &#149 2000 - Present",
  //   "https://play.hbomax.com/page/urn:hbo:page:GVU2bygQ1go7DwvwIAT3r:type:series",
  //   "hbo",
  //   "Watch on HBO Max",
  //   "https://www.tvtime.com/en/show/76203",
  //   "",
  //   "https://reelgood.com/show/curb-your-enthusiasm-2000",
  //   "",
  //   "https://www.imdb.com/title/tt0264235",
  //   "",
  //   "",
  // ]
  
  // Spy
  show43 = [
    "spy-solid",
    "spy-poster",
    "spy-gradient",
    "spy-title",
    "Drama &#149 1 Season &#149 2019",
    "https://www.netflix.com/title/80178151",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/368109",
    "",
    "https://reelgood.com/show/the-spy-2019",
    "",
    "https://www.imdb.com/title/tt5952634",
    "",
    "",
  ]
  
  //Chernobyl
  show44 = [
    "chernobyl-solid",
    "chernobyl-poster",
    "chernobyl-gradient",
    "chernobyl-title",
    "Thriller &#149 1 Season &#149 2019",
    "https://play.hbomax.com/page/urn:hbo:page:GXJvkMAU0JIG6gAEAAAIo:type:series",
    "hbo",
    "Watch on HBO Max",
    "https://www.tvtime.com/en/show/360893",
    "",
    "https://reelgood.com/show/chernobyl-2019",
    "",
    "https://www.imdb.com/title/tt7366338",
    "",
    "",
  ]
  
  //Human
  show45 = [
    "human-solid",
    "human-poster",
    "human-gradient",
    "human-title",
    "Documentary &#149 1 Season &#149 2021 - Present",
    "https://www.netflix.com/title/81139212",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/402219",
    "",
    "https://reelgood.com/show/human-the-world-within-2021",
    "",
    "https://www.imdb.com/title/tt14574154",
    "",
    "",
  ]
  
  //Line of duty 
  show46 = [
    "lineofduty-solid",
    "lineofduty-poster",
    "lineofduty-gradient",
    "lineofduty-title",
    "Thriller &#149 6 Season &#149 2012 - Present",
    "https://www.netflix.com/title/70263817",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/260092",
    "",
    "https://reelgood.com/show/line-of-duty-2012",
    "",
    "https://www.imdb.com/title/tt2303687",
    "",
    "",
  ]
  
  //Mindhunter
  show47 = [
    "mindhunter-solid",
    "mindhunter-poster",
    "mindhunter-gradient",
    "mindhunter-title",
    "Crime &#149 2 Seasons &#149 2017 - 2019",
    "https://www.netflix.com/title/80114855",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/328708",
    "",
    "https://reelgood.com/show/mindhunter-2017",
    "",
    "https://www.imdb.com/title/tt5290382",
    "",
    "",
  ]
  
  //Sweet tooth
  show48 = [
    "sweet-solid",
    "sweet-poster",
    "sweet-gradient",
    "sweet-title",
    "Action & Adventure &#149 1 Season &#149 2021 - Present",
    "https://www.netflix.com/title/81221380",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/355837",
    "",
    "https://reelgood.com/show/sweet-tooth-2021",
    "",
    "https://www.imdb.com/title/tt12809988",
    "",
    "",
  ]
  
  // Startup
  show49 = [
    "startup-solid",
    "startup-poster",
    "startup-gradient",
    "startup-title",
    "Drama &#149 Crime &#149 3 Seasons &#149 2016 - 2019",
    "https://www.netflix.com/title/80154285",
    "netflix",
    "Watch on Netflix",
    "https://www.tvtime.com/en/show/310614",
    "",
    "https://reelgood.com/show/startup-2016",
    "",
    "https://www.imdb.com/title/tt5028002",
    "",
    "",
  ]
  
  // For all mankind
  show50 = [
    "mankind-solid",
    "mankind-poster",
    "mankind-gradient",
    "mankind-title",
    "Sci-Fi &#149 2 Seasons &#149 2019 - Present",
    "https://tv.apple.com/show/for-all-mankind/umc.cmc.6wsi780sz5tdbqcf11k76mkp7",
    "black-gradient",
    "Watch on  TV+",
    "https://www.tvtime.com/en/show/356202",
    "",
    "https://reelgood.com/show/for-all-mankind-2019",
    "",
    "https://www.imdb.com/title/tt7772588",
    "",
    "Exploring the possibilities that might exist if the global space race had continued and where humanity would be now.",
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

// var bgWrap = document.getElementById("background-wrapper");
  
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
  // console.log(showsAll[n])

  if (showsAll[n][9]){
    showsAll[n][9] = showsAll[n][9] + "/10"
  }
  if (showsAll[n][11]){
    showsAll[n][11] = showsAll[n][11] + "/100"
  }
  if (showsAll[n][13]){
    showsAll[n][13] = showsAll[n][13] + "/10"
  }

  var cardClass = "tv-popup-card ";
  var posterClass = "tv-popup-poster ";
  var gradientClass = "tv-popup-gradient ";
  var titleClass = "tv-popup-title ";
  // var serviceClass = "tv-popup-button-container tv-play-button ";

  document.getElementById("card").className =               cardClass.concat(showsAll[n][0]);
  document.getElementById("poster").className =           posterClass.concat(showsAll[n][1]);
  document.getElementById("grad").className =           gradientClass.concat(showsAll[n][2]);
  document.getElementById("title").className =             titleClass.concat(showsAll[n][3]);
  document.getElementById("desc").innerHTML =                                showsAll[n][4];
  document.getElementById("tv-popup-link").href =                            showsAll[n][5];
  // document.getElementById("serviceGradient").className = serviceClass.concat(showsAll[n][6]);
  document.getElementById("service").innerHTML =                             showsAll[n][7];
  document.getElementById("tv-popup-tv-time").href =                         showsAll[n][8];
  document.getElementById("tv-popup-tv-time-rating").innerHTML =             showsAll[n][9];
  document.getElementById("tv-popup-reelgood").href =                        showsAll[n][10];
  document.getElementById("tv-popup-reelgood-rating").innerHTML =            showsAll[n][11];
  document.getElementById("tv-popup-imdb").href =                            showsAll[n][12];
  document.getElementById("tv-popup-imdb-rating").innerHTML =                showsAll[n][13];
  document.getElementById("tv-popup-summary").innerHTML =                    showsAll[n][14];
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