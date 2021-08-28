function mediaPopulate(){
    bookPopulate(bookData)
    podPopulate(podData)
    movieHTML(movieData1,'up-next-tray')
    movieHTML(movieData2,'my-list-tray')
    movieHTML(movieData3,'movie-tray')
    movieHTML(movieData4,'new-show-tray')
    // tvBig('always')
}

function tvBig(id,link){
    const tvBigElement = document.getElementById("tv-big-current")
    const tvBigTitle = document.getElementById('tv-big-title')
    const tvBigPlay = document.getElementById('tv-big-play')
    // var tvBigName = document.getElementById('tv-big-name')
    // var tvBigDescription = document.getElementById('tv-big-desc')
    tvBigElement.classList = id + '-poster'
    tvBigTitle.classList = id + '-title'

    tvBigPlay.href = link
}



var tvModal = document.getElementById("tv-popup-modal");
var bgBlur = document.getElementById("background-blur");

function popupTVShow(){
    // tvPopup(n);
    tvModal.className = "modal tv-popup-open";
    popupAllShow()
  }
  
  function popupTVHide(){
    tvModal.className = "modal tv-popup-closed";
    popupAllHide()
  }


function tvPopup(id, link, service, description, summary, titleStyle, tvTimeID, tvTimeRate, reelgoodLink, reelgoodRate, imdbID, imdbRate, redditLink){
    popupTVShow()
    
    // showsAll = tvData()
    // console.log(showsAll[n])
  
    // if (showsAll[n][9]){
    //   showsAll[n][9] = showsAll[n][9] + "/10"
    // }
    // if (showsAll[n][11]){
    //   showsAll[n][11] = showsAll[n][11] + "/100"
    // }
    // if (showsAll[n][13]){
    //   showsAll[n][13] = showsAll[n][13] + "/10"
    // }
  
    var cardClass = "tv-popup-card ";
    var posterClass = "tv-popup-poster ";
    var gradientClass = "tv-popup-gradient ";
    var titleClass = "tv-popup-title ";
    // var serviceClass = "tv-popup-button-container tv-play-button ";

    if (!(service == "Coming Soon")) {
        service = "Watch on " + service
    }
  
    document.getElementById("card").className =     cardClass.concat(id,"-solid");
    document.getElementById("poster").className = posterClass.concat(id,"-poster");
    document.getElementById("grad").className = gradientClass.concat(id,"-gradient");
    document.getElementById("title").className =   titleClass.concat(id,"-title ",titleStyle);
    // document.getElementById("desc").innerHTML = description;
    // document.getElementById("tv-popup-link").href = link;
    // document.getElementById("serviceGradient").className = serviceClass.concat(showsAll[n][6]);
    document.getElementById("service").innerHTML = service;

    // console.log(typeof tvTimeID)


    var descElement = document.getElementById("desc")
    if ((description !== "null") && (description !== "undefined")) {
        descElement.innerHTML = description;
    } else {
        descElement.innerHTML = "";
    }

    var linkElement = document.getElementById("tv-popup-link")
    var linkIcon = document.getElementById("tv-popup-button-icon")
    if ((link !== "null") && (link !== "undefined")) {
        linkIcon.classList.remove("hidden-always")
        linkElement.href = link;
    } else {
        linkIcon.classList.add("hidden-always")
        linkElement.removeAttribute('href')
    }

    var tvTimeElement = document.getElementById("tv-popup-tv-time")
    if ((tvTimeID !== "null") && (tvTimeID !== "undefined")) {
        tvTimeElement.href = "https://www.tvtime.com/en/show/" + tvTimeID;
        tvTimeElement.classList.remove("hidden-always")
    } else {
        tvTimeElement.classList.add("hidden-always")
    }

    var reelgoodElement = document.getElementById("tv-popup-reelgood")
    if ((reelgoodLink !== "null") && (reelgoodLink !== "undefined")) {
        reelgoodElement.href = reelgoodLink;
        reelgoodElement.classList.remove("hidden-always")
    } else {
        reelgoodElement.classList.add("hidden-always")
    }

    var imdbElement = document.getElementById("tv-popup-imdb")
    if ((imdbID !== "null") && (imdbID !== "undefined")) {
        imdbElement.href = "https://www.imdb.com/title/" + imdbID;
        imdbElement.classList.remove("hidden-always")
    } else {
        imdbElement.classList.add("hidden-always")
    }

    var redditElement = document.getElementById("tv-popup-reddit")
    if ((redditLink !== "null") && (redditLink !== "undefined")) {
        redditElement.href = redditLink;
        redditElement.classList.remove("hidden-always")
    } else {
        redditElement.classList.add("hidden-always")
    }
    
    var summaryElement = document.getElementById("tv-popup-summary")
    if ((summary !== "null") && (summary !== "undefined")) {
        summaryElement.innerHTML = summary;
        summaryElement.classList.remove("hidden-always")
    } else {
        summaryElement.classList.add("hidden-always")
    }






    // document.getElementById("tv-popup-tv-time-rating").innerHTML = tvTimeRate;
    // document.getElementById("tv-popup-reelgood-rating").innerHTML = reelgoodRate;
    // document.getElementById("tv-popup-imdb-rating").innerHTML = imdbRate;
}

const movieData1 = [
    {
        name: "It's Always Sunny in Philadelphia",
        id: "always",
        link: "https://www.hulu.com/series/its-always-sunny-in-philadelphia-2171423f-3326-4dfa-b193-b40494e60109",
        service: "Hulu",
        description: "Comedy &#149 14 Seasons &#149 2005 - Present",
        summary: "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.",
        titleStyle: "tall",
        tvTimeID: "75805",
        // tvTimeRate: "8.28",
        reelgoodLink: "https://reelgood.com/show/its-always-sunny-in-philadelphia-2005",
        // reelgoodRate: "90",
        imdbID: "tt0472954",
        // imdbRate: "8.8",
    },
    {
        name: "Jojo's Bizzare Adventures",
        id: "jojo",
        link: "https://www.netflix.com/title/80179831",
        service: "Netflix",
        // link: "https://www.hulu.com/series/jojos-bizarre-adventure-3f2ffb64-2424-44a5-b229-4371dccb1d6f",
        // service: "Hulu",
        description: "Animation &#149 Action &#149 Adventure &#149 4 Seasons &#149 2012 - Present",
        summary: "Jonathan Joestar, nicknamed JoJo, becomes involved in a battle against his stepbrother, Dio Brando, who is intent on taking control of the Joestar fortune. To do this, Dio uses the power of an ancient stone mask, which allows him to become a powerful vampire. The hybrid anime series takes pieces from such genres as paranormal, adventure, comedy, action and fantasy.",
        titleStyle: "tall",
        tvTimeID: "262954",
        // tvTimeRate: "9.74",
        reelgoodLink: "https://reelgood.com/show/jojos-bizarre-adventure-2012",
        // reelgoodRate: "72",
        imdbID: "tt2359704",
        // imdbRate: "8.4",
    },
    {
        name: "What If?",
        id: "whatif",
        link: "https://www.disneyplus.com/series/what-if/7672ZVj1ZxU9",
        service: "Disney+",
        description: "Action &#149 Adventure &#149 Animation &#149 1 Season &#149 2021 - Present",
        summary: "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
        titleStyle: "mid",
        tvTimeID: "367147",
        reelgoodLink: "https://reelgood.com/show/what-if-2021",
        imdbID: "tt10168312",
    },
    {
        name: "Ted Lasso",
        id: "ted",
        link: null,
        service: "Apple TV+",
        description: "Comedy &#149 Drama &#149 Sport &#149 2 Seasons &#149 2020 - Present",
        summary: "Ted Lasso, an American football coach, moves to England when he’s hired to manage a soccer team—despite having no experience. With cynical players and a doubtful town, will he get them to see the Ted Lasso Way?",
        titleStyle: "wide",
        tvTimeID: "383203",
        reelgoodLink: "https://reelgood.com/show/ted-lasso-2020",
        imdbID: "tt10986410",
        redditLink: "https://www.reddit.com/r/TedLasso"
    },
    {
        name: "What We Do in the Shadows",
        id: "shadows",
        link: "https://www.hulu.com/series/what-we-do-in-the-shadows-0b10c46a-12f0-4357-8a00-547057b49bac",
        service: "Hulu",
        description: "Comedy &#149 Drama &#149 Fantasy &#149 3 Seasons &#149 2019 - Present",
        summary: "Three vampires, Nandor, Colin Robinson and Nadja, struggle to keep up with the duties and responsibilities of everyday life as they reside in an apartment in New York.",
        titleStyle: "mid",
        tvTimeID: "358211",
        reelgoodLink: "https://reelgood.com/show/what-we-do-in-the-shadows-2019",
        imdbID: "tt7908628",
    },
    {
        name: "Rick and Morty",
        id: "rick",
        link: null,
        service: "Adult Swim",
        description: "Animation &#149 Comedy &#149 5 Seasons &#149 2013 - Present",
        summary: "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty.s already unstable family life, these events cause Morty much distress at home and school.",
        titleStyle: "wide",
        tvTimeID: "275274",
        reelgoodLink: "https://reelgood.com/show/rick-and-morty-2013",
        imdbID: "tt2861424",
    },
    
]
const movieData2 = [
    {
        name: "The Grand Tour",
        id: "grandTour",
        link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        service: "Prime Video",
        description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
        summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        titleStyle: "mid",
        tvTimeID: "314087",
        // tvTimeRate: "8.82",
        reelgoodLink: "https://reelgood.com/show/the-grand-tour-2016",
        // reelgoodRate: "83",
        imdbID: "tt5712554",
        // imdbRate: "8.7",
    },
    {
        name: "Futurama",
        id: "futurama",
        link: "https://www.hulu.com/series/futurama-85bf4cc1-cd8b-4469-ad87-7289217a0b74",
        service: "Hulu",
        description: "Animation &#149 Comedy &#149 Sci-Fi &#149 8 Seasons &#149 1999 - 2013",
        summary: "Accidentally frozen, pizza-deliverer Fry wakes up 1,000 years in the future. He is taken in by his sole descendant, an elderly and addled scientist who owns a small cargo delivery service. Among the other crew members are Capt. Leela, accountant Hermes, intern Amy, obnoxious robot Bender and lobsterlike moocher Dr. Zoidberg.",
        titleStyle: "wide",
        // tvTimeID: "314087",
        reelgoodLink: "https://reelgood.com/show/futurama-1999",
        // imdbID: "tt5712554",
    },
    {
        name: "Family Guy",
        id: "family",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        service: "Hulu",
        // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
        // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        titleStyle: "mid",
        // tvTimeID: "314087",
        // reelgoodLink: "https://reelgood.com/show/the-grand-tour-2016",
        // imdbID: "tt5712554",
    },
    {
        name: "Love Death + Robots",
        id: "ldr",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        service: "Netflix",
        // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
        // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        titleStyle: "wide",
        // tvTimeID: "314087",
        // reelgoodLink: "https://reelgood.com/show/the-grand-tour-2016",
        // imdbID: "tt5712554",
    },
    {
        name: "Dave",
        id: "dave",
        link: "https://www.hulu.com/series/dave-ac3a96f0-9614-46af-b524-f59c7d281946",
        service: "Hulu",
        description: "Comedy &#149 Music &#149 2 Seasons &#149 2020 - Present",
        summary: "Dave centers on a neurotic man in his late 20s who has convinced himself that he is destined to be one of the best rappers of all time. Now he must convince his closest friends, because with their help, he actually might convince the world. Simultaneously exasperating and inspiring to his friends, he vows to leave no stone unturned on his quest to become the next superstar.",
        titleStyle: "mid",
        tvTimeID: "354905",
        reelgoodLink: "https://reelgood.com/show/dave-2020",
        imdbID: "tt8531222",
    },
    {
        name: "Atlanta",
        id: "atlanta",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        service: "Hulu",
        // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
        // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        titleStyle: "wide",
        // tvTimeID: "314087",
        // reelgoodLink: "https://reelgood.com/show/the-grand-tour-2016",
        // imdbID: "tt5712554",
    },
    {
        name: "Twin Peaks",
        id: "twinpeaks",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        service: "Hulu",
        // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
        // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        titleStyle: "tall",
        // tvTimeID: "314087",
        // reelgoodLink: "https://reelgood.com/show/the-grand-tour-2016",
        // imdbID: "tt5712554",
    },
    {
        name: "Legion",
        id: "legion",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        service: "Hulu",
        // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
        // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        titleStyle: "wide",
        // tvTimeID: "314087",
        // reelgoodLink: "https://reelgood.com/show/the-grand-tour-2016",
        // imdbID: "tt5712554",
    },
    {
        name: "Formula 1: Drive to Survive",
        id: "drive",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        service: "Netflix",
        // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
        // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        titleStyle: "wide",
        // tvTimeID: "314087",
        // reelgoodLink: "https://reelgood.com/show/the-grand-tour-2016",
        // imdbID: "tt5712554",
    },
]
const movieData3 = [
    {
        name: "Ghost in the Shell",
        id: "ghost",
        link: "https://watch.amazon.com/detail?asin=B07WQZDXTM",
        service: "Prime Video",
        description: "Animation &#149 Action &#149 Crime &#149 1995",
        summary: "In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as The Puppetmaster begins involving them in politics, Section 9, a group of cybernetically enhanced cops, are called in to investigate and stop the Puppetmaster.",
        titleStyle: "wide",
        tvTimeID: null,
        reelgoodLink: "https://reelgood.com/movie/ghost-in-the-shell-1995",
        imdbID: "tt0113568",
    },
    {
        name: "Free Guy",
        id: "free",
        link: null,
        service: "Coming Soon",
        description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
        summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        titleStyle: "wide",
        tvTimeID: null,
        reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
        imdbID: "tt6264654",
    },
    {
        name: "Knives Out",
        id: "knives",
        // link: null,
        service: "Prime Video",
        // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
        // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        titleStyle: "wide",
        // tvTimeID: null,
        // reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
        // imdbID: "tt6264654",
    },
    {
        name: "Being John Malkovich",
        id: "john",
        // link: null,
        service: "Download",
        // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
        // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        titleStyle: "wide",
        // tvTimeID: null,
        // reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
        // imdbID: "tt6264654",
    },
    {
        name: "The Year the Earth Changed",
        id: "earth",
        // link: null,
        service: "Apple TV+",
        // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
        // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        titleStyle: "wide",
        // tvTimeID: null,
        // reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
        // imdbID: "tt6264654",
    },
]
const movieData4 = [
    {
        name: "Lost",
        id: "lost",
        // link: null,
        service: "Hulu",
        // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
        // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        titleStyle: "wide",
        // tvTimeID: null,
        // reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
        // imdbID: "tt6264654",
    },
    {
        name: "The Spy",
        id: "spy",
        // link: null,
        service: "Netflix",
        // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
        // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        titleStyle: "mid",
        // tvTimeID: null,
        // reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
        // imdbID: "tt6264654",
    },
    {
        name: "Chernobyl",
        id: "chernobyl",
        // link: null,
        service: "HBO Max",
        // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
        // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        titleStyle: "wide",
        // tvTimeID: null,
        // reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
        // imdbID: "tt6264654",
    },
    {
        name: "Line of Duty",
        id: "lineofduty",
        link: "https://www.hulu.com/series/line-of-duty-0efc0f95-c575-46da-b28f-a30a13d86b37",
        service: "Hulu",
        description: "Thriller &#149 6 Season &#149 2012 - Present",
        summary: "After refusing to help cover up an unlawful and fatal shooting by members of his team, Detective Sergeant Steve Arnott is transferred to Anti-Corruption Unit 12, AC-12. Run by zealous Superintendent Ted Hastings, the department is responsible for investigating possible corruption within the Central Police force. Working alongside DS Arnott is Detective Inspector Kate Fleming, who is an undercover specialist. With the help and oversight of Hastings, Arnott and Fleming take on difficult cases, which lead from laddering to mishandling evidence.",
        titleStyle: "wide",
        tvTimeID: '260092',
        reelgoodLink: "https://reelgood.com/show/line-of-duty-2012",
        imdbID: "tt2303687",
    },
    {
        name: "Mindhunter",
        id: "mindhunter",
        // link: null,
        service: "Netflix",
        // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
        // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        titleStyle: "wide",
        // tvTimeID: null,
        // reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
        // imdbID: "tt6264654",
    },
]

function movieHTML(data,tray) {
    var dataLength = data.length

    var htmlString = "";


    for (i = 0; i < dataLength; i++) {
        if ((data[i].link !== null) && (data[i].link !== undefined)) {
            var htmlLink = `href="${data[i].link}"`
        } else {
            var htmlLink = ``
        }

        // var movieCardHTML = `<div class="tv-small-poster ${data[i].id}-poster"><div class="tv-small-gradient"><div class="tv-small-title ${data[i].titleStyle} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink} onmouseover="tvBig('${data[i].id}','${data[i].link}')"><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div>`

        
        // <div class="tv-card" target="_blank" href="${htmlLink}">
        
        
        // <a class="tv-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleStyle}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}", "${data[i].redditLink}")'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>



        // var movieCardHTML = `<div class="tv-card" target="_blank" href="${htmlLink}"><div class="tv-card-bg ${data[i].id}-poster"><div class="tv-card-fg"></div></div><div class="tv-card-poster ${data[i].id}-poster"><div class="tv-gradient"><div class="tv-title ${data[i].titleStyle} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink}><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleStyle}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}", "${data[i].redditLink}")'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`


        // var movieCardHTML = `<div class="movie-card"><div class="movie-poster ${data[i].id}-poster"><div class="movie-gradient"><div class="movie-title ${data[i].titleStyle} ${data[i].id}-title"></div></div><a class="movie-play-container" target="_blank"${htmlLink}><svg class="movie-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="movie-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleStyle}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}")'><div class="movie-textbox"><p class="movie-heading">${data[i].name}</p><p class="movie-subheading">${data[i].service}</p></div><div class="movie-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"/><circle cx="192" cy="192" r="42.667"/><circle cx="192" cy="341.333" r="42.667"/></svg></div></a></div>`

        var movieCardHTML = `<div class="tv-card" target="_blank" href="${htmlLink}"><div class="tv-card-poster ${data[i].id}-poster image-border"><div class="tv-gradient"><div class="tv-title ${data[i].titleStyle} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink}><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleStyle}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}", "${data[i].redditLink}")'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading secondary-fg">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`


        htmlString = `${htmlString}${movieCardHTML}`
    }
    var trayElement = document.getElementById(tray)
    trayElement.classList.add("media-tray")
    trayElement.innerHTML = htmlString
}

const bookData = [
    {
        name: "No Rules Rules",
        id: "rules",
        link: "ibooks://",
        author: "Reed Hastings & Erin Meyer",
    },
    {
        name: "Never Split the Difference",
        id: "split",
        link: "ibooks://",
        author: "Chris Voss",
    },
    {
        name: "Gweilo: Memories of a Hong Kong Childhood",
        id: "gweilo",
        link: "ibooks://",
        author: "Martin Booth",
    },
    {
        name: "The Four",
        id: "four",
        link: "ibooks://",
        author: "Scott Galloway",
    },
    {
        name: "Homo Deus",
        id: "homodeus",
        link: "ibooks://",
        author: "Yuval Noah Harari",
    },
    {
        name: "The Ride of a Lifetime",
        id: "ride",
        link: "ibooks://",
        author: "Robert Iger",
    },
    {
        name: "The Martian",
        id: "martian",
        link: "ibooks://",
        author: "Andy Weir",
    },
]

function bookPopulate(bookData){
    

    var dataLength = bookData.length

    var htmlString = "";

    for (i = 0; i < dataLength; i++) {
        // var bookCardHTML = `<a class="book-card clickable" target="_blank" href="${bookData[i].link}"><div class="book-card-bg ${bookData[i].id}-cover"><div class="book-card-fg"></div></div><div class="book-poster ${bookData[i].id}-cover"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${bookData[i].name}</p><p class="book-subheading">${bookData[i].author}</p></div></div></a>`
        var bookCardHTML = `<a class="media-card clickable" target="_blank" onclick="showMediaPopup('book',${i})"><div class="media-poster book-poster ${bookData[i].id}-cover image-border"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${bookData[i].name}</p><p class="book-subheading secondary-fg">${bookData[i].author}</p></div></div></a>`

        htmlString = `${htmlString}${bookCardHTML}`
    }

    var tray = document.getElementById("book-tray")
    tray.classList.add("media-tray")
    tray.innerHTML = htmlString
}

const podData = [
    {
        name: "Pivot",
        id: "pivot",
        link: "https://podcasts.apple.com/podcast/id1073226719",
        author: "Kara Swisher & Scott Galloway",
    },
    {
        name: "Waveform",
        id: "waveform",
        link: "https://www.youtube.com/Waveform/videos",
        author: "Marques Brownlee",
    },
    {
        name: "Founder's Journal",
        id: "founders",
        link: "https://podcasts.apple.com/podcast/id1509276485",
        author: "Alex Lieberman",
    },
    {
        name: "Sway",
        id: "sway",
        link: "https://podcasts.apple.com/podcast/id1528594034",
        author: "Kara Swisher",
    },
    {
        name: "Acquired",
        id: "acquired",
        link: "https://podcasts.apple.com/podcast/id1050462261",
        author: "Ben Gilbert & David Rosenthal",
    },
    {
        name: "Learn Cantonese",
        id: "canto",
        link: "https://podcasts.apple.com/podcast/id1513774818",
        author: "Poetic Cantonese",
    },
    {
        name: "Lex Fridman Podcast",
        id: "lex",
        link: "https://www.youtube.com/lexfridman/videos",
        author: "Lex Fridman",
    },
    {
        name: "Yang Speaks",
        id: "yang",
        link: "https://www.youtube.com/channel/UCJjLcmTHbVigXBb1ul0m5sw/videos",
        author: "Andrew Yang & Zach??",
    },
    {
        name: "Economist Radio",
        id: "economist",
        link: "https://podcasts.apple.com/podcast/id151230264",
        author: "The Economist",
    },
    {
        name: "INET",
        id: "inet",
        link: "https://www.youtube.com/c/NewEconomicThinking/videos",
        author: "Rob Johnson",
    },
    {
        name: "Making Sense",
        id: "samharris",
        link: "https://podcasts.apple.com/podcast/id733163012",
        author: "Sam Harris",
    },   
]

function podPopulate(podData){
    

    var dataLength = podData.length

    var htmlString = "";

    for (i = 0; i < dataLength; i++) {
        // var bookCardHTML = `<a class="book-card clickable" target="_blank" href="${podData[i].link}"><div class="book-card-bg ${podData[i].id}-cover"><div class="book-card-fg"></div></div><div class="pod-poster ${podData[i].id}-cover"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${podData[i].name}</p><p class="book-subheading">${podData[i].author}</p></div></div></a>`
        var bookCardHTML = `<a class="media-card clickable" target="_blank" onclick="showMediaPopup('pod',${i})"><div class="media-poster pod-poster ${podData[i].id}-cover image-border"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${podData[i].name}</p><p class="book-subheading secondary-fg">${podData[i].author}</p></div></div></a>`

        htmlString = `${htmlString}${bookCardHTML}`
    }
    var tray = document.getElementById("pod-tray")
    tray.classList.add("media-tray")
    tray.innerHTML = htmlString
}


var sideModal = document.getElementById('side-popup-modal')

function showMediaPopup(type,n) {
    populateMediaPopup(type,n)
    sideModal.classList = 'show'
    popupAllShow()
}

function hideMediaPopup() {
    sideModal.classList = 'hide'
    popupAllHide()
}

function populateMediaPopup(type,n) {
    var mediaData;

    if (type == 'pod') {
        mediaData = podData[n]
        document.getElementById('side-popup-poster').classList = 'pod'
    } else if (type == 'book') {
        mediaData = bookData[n]
        document.getElementById('side-popup-poster').classList = 'book'
    }


    document.getElementById('side-popup-bg').classList = mediaData.id + '-cover'
    document.getElementById('side-popup-poster').classList.add(mediaData.id + '-cover')
    document.getElementById('side-popup-title').innerHTML = mediaData.name
    document.getElementById('side-popup-subtitle').innerHTML = mediaData.author
    document.getElementById('side-popup-link').href = mediaData.link
}