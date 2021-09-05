function mediaPopulate() {
    bookPopulate(bookData, 'book-tray')
    podPopulate(podData, 'pod-tray')
    newsPopulate(newsData)
    youtubePopulate(youtubeData)
    movieHTML(0, 'up-next-tray')
    movieHTML(1, 'coming-soon-tray')
    movieHTML(2, 'my-list-tray')
    movieHTML(3, 'movie-tray')
    movieHTML(4, 'new-show-tray')
    // tvBig('always')


    movieHTML(0, 'up-next-tray-2')
    movieHTML(1, 'coming-soon-tray-2')
    movieHTML(2, 'my-list-tray-2')
    movieHTML(3, 'movie-tray-2')
    movieHTML(4, 'new-show-tray-2')

    tvPreview(0,0)
}

function tvPreview(i,j) {
    // console.log(movieData[i][j])
    const movie = movieData[i][j]

    const posterElement = document.getElementById('tv-preview-poster')
    const titleElement = document.getElementById('tv-preview-title')
    const descElement = document.getElementById('tv-preview-description')
    const linkElement = document.getElementById('tv-preview-link')

    posterElement.style.setProperty('--poster',`url('TV/background/${movie.id}.${movie.style.posterType}')`)
    titleElement.style.setProperty('--title',`url('TV/title/${movie.id}.${movie.style.titleType}')`)
    descElement.innerHTML = movie.info.description
    linkElement.href = movie.link

    // const tvBigTitle = document.getElementById('tv-big-title')
    // const tvBigPlay = document.getElementById('tv-big-play')
    // // var tvBigName = document.getElementById('tv-big-name')
    // // var tvBigDescription = document.getElementById('tv-big-desc')
    // tvBigElement.classList = id + '-poster'
    // tvBigTitle.classList = id + '-title'

    // tvBigPlay.href = link
}

var tvModal = document.getElementById("tv-popup-modal");
var bgBlur = document.getElementById("background-blur");

function popupTVShow() {
    tvModal.className = "modal tv-popup-open";
    popupAllShow()
}
function popupTVHide() {
    tvModal.className = "modal tv-popup-closed";
    popupAllHide()
}
function tvPopup(movie) {
    popupTVShow()

    var serviceText;

    if (!(movie.info.service == "Coming Soon")) {
        serviceText = "Watch on " + movie.info.service
    } else {
        serviceText = movie.info.service
    }


    document.getElementById('card').style.setProperty('--color',`#${movie.style.color}`)
    // document.getElementById('grad').style.setProperty('--color',`#${movie.style.color}`)
    document.getElementById('grad').style.backgroundImage = `linear-gradient(#${movie.style.color}00,#${movie.style.color})`
    document.getElementById('poster').style.setProperty('--poster',`url('TV/background/${movie.id}.${movie.style.posterType}')`)
    document.getElementById('title').style.setProperty('--title',`url('TV/title/${movie.id}.${movie.style.titleType}')`)
    document.getElementById('title').classList = 'tv-popup-title'
    document.getElementById('title').classList.add(movie.style.titleSize)
    document.getElementById('service').innerHTML = serviceText;

    var descElement = document.getElementById("desc")
    if (movie.info.description) {
        descElement.innerHTML = movie.info.description;
    } else {
        descElement.innerHTML = "";
    }

    var linkElement = document.getElementById("tv-popup-link")
    var linkIcon = document.getElementById("tv-popup-button-icon")
    if (movie.link) {
        linkIcon.classList.remove("hidden-always")
        linkElement.href = movie.link;
    } else {
        linkIcon.classList.add("hidden-always")
        linkElement.removeAttribute('href')
    }

    var tvTimeElement = document.getElementById("tv-popup-tv-time")
    var reelgoodElement = document.getElementById("tv-popup-reelgood")
    var imdbElement = document.getElementById("tv-popup-imdb")
    var redditElement = document.getElementById("tv-popup-reddit")

    if (movie.apps) {
        if (movie.apps.tvTimeID) {
            tvTimeElement.href = "https://www.tvtime.com/en/show/" + movie.apps.tvTimeID;
            tvTimeElement.classList.remove("hidden-always")
        } else {
            tvTimeElement.classList.add("hidden-always")
        }
    
        if (movie.apps.reelgoodLink) {
            reelgoodElement.href = movie.apps.reelgoodLink;
            reelgoodElement.classList.remove("hidden-always")
        } else {
            reelgoodElement.classList.add("hidden-always")
        }
    
        if (movie.apps.imdbID) {
            imdbElement.href = "https://www.imdb.com/title/" + movie.apps.imdbID;
            imdbElement.classList.remove("hidden-always")
        } else {
            imdbElement.classList.add("hidden-always")
        }
    
        if (movie.apps.redditLink) {
            redditElement.href = movie.apps.redditLink;
            redditElement.classList.remove("hidden-always")
        } else {
            redditElement.classList.add("hidden-always")
        }
    } else {
        tvTimeElement.classList.add("hidden-always")
        reelgoodElement.classList.add("hidden-always")
        imdbElement.classList.add("hidden-always")
        redditElement.classList.add("hidden-always")
    }

    var summaryElement = document.getElementById("tv-popup-summary")
    if (movie.info.summary) {
        summaryElement.innerHTML = movie.info.summary;
        summaryElement.classList.remove("hidden-always")
    } else {
        summaryElement.classList.add("hidden-always")
    }






    // document.getElementById("tv-popup-tv-time-rating").innerHTML = tvTimeRate;
    // document.getElementById("tv-popup-reelgood-rating").innerHTML = reelgoodRate;
    // document.getElementById("tv-popup-imdb-rating").innerHTML = imdbRate;
}


function popupAllShow() {
    bgBlur.className = "background-blur background-blur-show";
    // busBlur.className = "bus-blur bus-blur-show";
    //   mainContainer.classList.add("sheetback")
}

function popupAllHide() {
    bgBlur.className = "background-blur background-blur-hide";
    //   busBlur.className = "bus-blur bus-blur-hide";
    //   mainContainer.classList.remove("sheetback")
}

const movieData1 = [
    {
        name: "It's Always Sunny in Philadelphia",
        id: "always",
        link: "https://www.hulu.com/series/its-always-sunny-in-philadelphia-2171423f-3326-4dfa-b193-b40494e60109",
        info: {
            service: "Hulu",
            description: "Comedy &#149 14 Seasons &#149 2005 - Present",
            summary: "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.",
        },
        style: {
            color: '5c666a',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: "tall",
        },
        apps: {
            tvTimeID: "75805",
            // tvTimeRate: "8.28",
            reelgoodLink: "https://reelgood.com/show/its-always-sunny-in-philadelphia-2005",
            // reelgoodRate: "90",
            imdbID: "tt0472954",
            // imdbRate: "8.8",
            redditLink: "https://www.reddit.com/r/IASIP",
        },
    },
    {
        name: "Brooklyn Nine-Nine",
        id: "brooklyn",
        link: "https://www.hulu.com/series/brooklyn-nine-nine-daf48b7a-6cd7-4ef6-b639-a4811ec95232",
        info: {
            service: "Hulu",
            description: "Comedy &#149 Crime &#149 8 Seasons &#149 2013 - Present",
            summary: "Detective Jake Peralta, a talented and carefree cop with the best arrest record, has never had to follow the rules too closely or work very hard. That changes when Ray Holt, a man with a lot to prove, becomes the new commanding officer of Brooklyn's 99th precinct. As Holt reminds Peralta to respect the badge, an extremely competitive colleague - Detective Amy Santiago - starts to close in on the hotshot cop's arrest record.",
        },
        style: {
            color: '8b6a4b',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "mid",
        },
        apps: {
            tvTimeID: "269586",
            reelgoodLink: "https://reelgood.com/show/brooklyn-nine-nine-2013",
            imdbID: "tt2467372",
        },
    },
    {
        name: "Cowboy Bebop",
        id: "cowboy",
        link: "https://www.hulu.com/series/cowboy-bebop-af54be93-ee11-475c-b786-3543a9a7d4ba",
        info: {
            service: "Hulu",
            description: "Animation &#149 Action &#149 Adventure &#149 1 Season &#149 1998 - 1999",
            // summary: "Detective Jake Peralta, a talented and carefree cop with the best arrest record, has never had to follow the rules too closely or work very hard. That changes when Ray Holt, a man with a lot to prove, becomes the new commanding officer of Brooklyn's 99th precinct. As Holt reminds Peralta to respect the badge, an extremely competitive colleague - Detective Amy Santiago - starts to close in on the hotshot cop's arrest record.",
        },
        style: {
            color: '599DAA',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "mid",
        },
        apps: {
            tvTimeID: "76885",
            reelgoodLink: "https://reelgood.com/show/cowboy-bebop-1998",
            imdbID: "tt0213338",
        },
    },
    {
        name: "Atlanta",
        id: "atlanta",
        link: "https://www.hulu.com/series/atlanta-3529d0f1-acaf-476d-8be3-66cd6bf12530",
        info: {
            service: "Hulu",
            description: "Comedy &#149 5 Seasons &#149 2016 - 2021",
            summary: "Based in Atlanta, Earn and his cousin Alfred try to make their way in the world through the rap scene. Along the way they come face to face with social and economic issues touching on race, relationships, poverty, status, and parenthood.",
        },
        style: {
            color: '584029',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: "313999",
            reelgoodLink: "https://reelgood.com/show/atlanta-2016",
            imdbID: "tt4288182",
        },
    },
    {
        name: "Dave",
        id: "dave",
        link: "https://www.hulu.com/series/dave-ac3a96f0-9614-46af-b524-f59c7d281946",
        info: {
            service: "Hulu",
            description: "Comedy &#149 Music &#149 2 Seasons &#149 2020 - Present",
            summary: "Dave centers on a neurotic man in his late 20s who has convinced himself that he is destined to be one of the best rappers of all time. Now he must convince his closest friends, because with their help, he actually might convince the world. Simultaneously exasperating and inspiring to his friends, he vows to leave no stone unturned on his quest to become the next superstar.",
        },
        style: {
            color: '889898',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "mid",
        },
        apps: {
            tvTimeID: "354905",
            reelgoodLink: "https://reelgood.com/show/dave-2020",
            imdbID: "tt8531222",
        },
    },
    {
        name: "Jojo's Bizzare Adventures",
        id: "jojo",
        link: "https://www.netflix.com/title/80179831",
        info: {
            service: "Netflix",
            description: "Animation &#149 Action &#149 Adventure &#149 4 Seasons &#149 2012 - Present",
            summary: "Jonathan Joestar, nicknamed JoJo, becomes involved in a battle against his stepbrother, Dio Brando, who is intent on taking control of the Joestar fortune. To do this, Dio uses the power of an ancient stone mask, which allows him to become a powerful vampire. The hybrid anime series takes pieces from such genres as paranormal, adventure, comedy, action and fantasy.",
        },
        style: {
            color: '2C2850',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "tall",
        },
        apps: {
            tvTimeID: "262954",
            // tvTimeRate: "9.74",
            reelgoodLink: "https://reelgood.com/show/jojos-bizarre-adventure-2012",
            // reelgoodRate: "72",
            imdbID: "tt2359704",
            // imdbRate: "8.4",
        },
    },
]
const movieData2 = [
    {
        name: "What If?",
        id: "whatif",
        link: "https://www.disneyplus.com/series/what-if/7672ZVj1ZxU9",
        info: {
            service: "Disney+",
            description: "Action &#149 Adventure &#149 Animation &#149 1 Season &#149 2021 - Present",
            summary: "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
        },
        style: {
            color: '0F0F38',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "mid",
        },
        apps: {
            tvTimeID: "367147",
            reelgoodLink: "https://reelgood.com/show/what-if-2021",
            imdbID: "tt10168312",
        },
    },
    {
        name: "Ted Lasso",
        id: "ted",
        link: null,
        info: {
            service: "Apple TV+",
            description: "Comedy &#149 Drama &#149 Sport &#149 2 Seasons &#149 2020 - Present",
            summary: "Ted Lasso, an American football coach, moves to England when he’s hired to manage a soccer team—despite having no experience. With cynical players and a doubtful town, will he get them to see the Ted Lasso Way?",
        },
        style: {
            color: '35465e',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: "383203",
            reelgoodLink: "https://reelgood.com/show/ted-lasso-2020",
            imdbID: "tt10986410",
            redditLink: "https://www.reddit.com/r/TedLasso",
        },
    },
    {
        name: "What We Do in the Shadows",
        id: "shadows",
        link: "https://www.hulu.com/series/what-we-do-in-the-shadows-0b10c46a-12f0-4357-8a00-547057b49bac",
        info: {
            service: "Hulu",
            description: "Comedy &#149 Drama &#149 Fantasy &#149 3 Seasons &#149 2019 - Present",
            summary: "Three vampires, Nandor, Colin Robinson and Nadja, struggle to keep up with the duties and responsibilities of everyday life as they reside in an apartment in New York.",
        },
        style: {
            color: '050514',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "mid",
        },
        apps: {
            tvTimeID: "358211",
            reelgoodLink: "https://reelgood.com/show/what-we-do-in-the-shadows-2019",
            imdbID: "tt7908628",
            redditLink: "https://www.reddit.com/r/WhatWeDointheShadows",
        },
    },
    {
        name: "Rick and Morty",
        id: "rick",
        link: null,
        info: {
            service: "Adult Swim",
            description: "Animation &#149 Comedy &#149 5 Seasons &#149 2013 - Present",
            summary: "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty.s already unstable family life, these events cause Morty much distress at home and school.",
        },
        style: {
            color: '2D1D54',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: "275274",
            reelgoodLink: "https://reelgood.com/show/rick-and-morty-2013",
            imdbID: "tt2861424",
            redditLink: "https://www.reddit.com/r/rickandmorty",
        },
    },
    {
        name: "Sex Education",
        id: "edu",
        link: "https://www.netflix.com/title/80197526",
        info: {
            service: "Netflix",
            description: "Comedy &#149 Teen &#149 3 Seasons &#149 2019 - Present",
            summary: "Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mom. So rebel Maeve proposes a school sex-therapy clinic.",
        },
        style: {
            color: '6d6256',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: "356317",
            reelgoodLink: "https://reelgood.com/show/sex-education-2019",
            imdbID: "tt7767422",
            redditLink: "https://www.reddit.com/r/NetflixSexEducation",
        },
    },

]
const movieData3 = [
    {
        name: "Money Heist",
        id: "money",
        link: "https://www.netflix.com/title/80192098",
        info: {
            service: "Netflix",
            description: "Acttion &#149 Crime &#149 Mystery &#149 3 Seasons &#149 2017 - Present",
            summary: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        },
        style: {
            color: '3f1513',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: "327417",
            reelgoodLink: "https://reelgood.com/show/money-heist-2017",
            imdbID: "tt6468322",
        },
    },
    {
        name: "The Grand Tour",
        id: "grandTour",
        link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        info: {
            service: "Prime Video",
            description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
            summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        },
        style: {
            color: 'C05D38',
            posterType: 'webp',
            titleType: 'svg',
            titleSize: "mid",
        },
        apps: {
            tvTimeID: "314087",
            // tvTimeRate: "8.82",
            reelgoodLink: "https://reelgood.com/show/the-grand-tour-2016",
            // reelgoodRate: "83",
            imdbID: "tt5712554",
            // imdbRate: "8.7",
        },
    },
    {
        name: "Futurama",
        id: "futurama",
        link: "https://www.hulu.com/series/futurama-85bf4cc1-cd8b-4469-ad87-7289217a0b74",
        info: {
            service: "Hulu",
            description: "Animation &#149 Comedy &#149 Sci-Fi &#149 8 Seasons &#149 1999 - 2013",
            summary: "Accidentally frozen, pizza-deliverer Fry wakes up 1,000 years in the future. He is taken in by his sole descendant, an elderly and addled scientist who owns a small cargo delivery service. Among the other crew members are Capt. Leela, accountant Hermes, intern Amy, obnoxious robot Bender and lobsterlike moocher Dr. Zoidberg.",
        },
        style: {
            color: 'E25924',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: "314087",
            reelgoodLink: "https://reelgood.com/show/futurama-1999",
            // imdbID: "tt5712554",
        },
    },
    {
        name: "Family Guy",
        id: "family",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        info: {
            service: "Hulu",
            // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
            // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        },
        style: {
            color: '0B6F38',
            posterType: 'webp',
            titleType: 'svg',
            titleSize: "mid",
        },
    },
    {
        name: "Love Death + Robots",
        id: "ldr",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        info: {
            service: "Netflix",
            // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
            // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        },
        style: {
            color: '200f17',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
    },
    {
        name: "Twin Peaks",
        id: "twinpeaks",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        info: {
            service: "Hulu",
            // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
            // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        },
        style: {
            color: '300',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: "tall",
        },
    },
    {
        name: "Legion",
        id: "legion",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        info: {
            service: "Hulu",
            // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
            // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        },
        style: {
            color: '870093',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
    },
    {
        name: "Formula 1: Drive to Survive",
        id: "drive",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        info: {
            service: "Netflix",
            // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
            // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        },
        style: {
            color: '4d5372',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
    },
]
const movieData4 = [
    {
        name: "Ghost in the Shell",
        id: "ghost",
        link: "https://watch.amazon.com/detail?asin=B07WQZDXTM",
        info: {
            service: "Prime Video",
            description: "Animation &#149 Action &#149 Crime &#149 1995",
            summary: "In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as The Puppetmaster begins involving them in politics, Section 9, a group of cybernetically enhanced cops, are called in to investigate and stop the Puppetmaster.",
        },
        style: {
            color: '313C82',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: null,
            reelgoodLink: "https://reelgood.com/movie/ghost-in-the-shell-1995",
            imdbID: "tt0113568",
        },
    },
    {
        name: "Your Name.",
        id: "yourname",
        link: null,
        info: {
            service: "Download",
            description: "Animation &#149 Drama &#149 Fantasy &#149 2016",
            summary: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        },
        style: {
            color: '768a8e',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "mid",
        },
        apps: {
            tvTimeID: null,
            reelgoodLink: "https://reelgood.com/movie/your-name-2016",
            imdbID: "tt5311514",
        },
    },
    {
        name: "Free Guy",
        id: "free",
        link: null,
        info: {
            service: "Coming Soon",
            description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
            summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        },
        style: {
            color: '599DAA',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: null,
            reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
            imdbID: "tt6264654",
        },
    },
    {
        name: "Knives Out",
        id: "knives",
        // link: null,
        info: {
            service: "Prime Video",
            // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
            // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        },
        style: {
            color: '3d250f',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: "wide",
        },
    },
    {
        name: "Being John Malkovich",
        id: "john",
        // link: null,
        info: {
            service: "Download",
            // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
            // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        },
        style: {
            color: '6c4e44',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: "wide",
        },
    },
    {
        name: "The Year the Earth Changed",
        id: "earth",
        // link: null,
        info: {
            service: "Apple TV+",
            // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
            // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        },
        style: {
            color: '484b51',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: "wide",
        },
    },
]
const movieData5 = [
    {
        name: "Lost",
        id: "lost",
        link: "https://www.hulu.com/series/lost-466b3994-b574-44f1-88bc-63707507a6cb",
        info: {
            service: "Hulu",
            description: "Action &#149 Adventure &#149 6 Seasons &#149 2004 - 2010",
            summary: "The survivors of a plane crash find themselves stranded on a mysterious island. They are forced to work together for their survival when they realise that they are not alone on the island.",
        },
        style: {
            color: '6a5828',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: "73739",
            reelgoodLink: "https://reelgood.com/show/lost-2004",
            imdbID: "tt0411008",
        },
    },
    {
        name: "The Spy",
        id: "spy",
        link: "https://www.netflix.com/title/80178151",
        info: {
            service: "Netflix",
            // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
            // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        },
        style: {
            color: '7f6b57',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: "mid",
        },
    },
    {
        name: "Chernobyl",
        id: "chernobyl",
        // link: null,
        info: {
            service: "HBO Max",
            // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
            // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        },
        style: {
            color: '86a097',
            posterType: 'jpg',
            titleType: 'svg',
            titleSize: "wide",
        },
    },
    {
        name: "Line of Duty",
        id: "lineofduty",
        link: "https://www.hulu.com/series/line-of-duty-0efc0f95-c575-46da-b28f-a30a13d86b37",
        info: {
            service: "Hulu",
            description: "Thriller &#149 6 Season &#149 2012 - Present",
            summary: "After refusing to help cover up an unlawful and fatal shooting by members of his team, Detective Sergeant Steve Arnott is transferred to Anti-Corruption Unit 12, AC-12. Run by zealous Superintendent Ted Hastings, the department is responsible for investigating possible corruption within the Central Police force. Working alongside DS Arnott is Detective Inspector Kate Fleming, who is an undercover specialist. With the help and oversight of Hastings, Arnott and Fleming take on difficult cases, which lead from laddering to mishandling evidence.",
        },
        style: {
            color: '262841',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "wide",
        },
        apps: {
            tvTimeID: '260092',
            reelgoodLink: "https://reelgood.com/show/line-of-duty-2012",
            imdbID: "tt2303687",
        },
    },
    {
        name: "Mindhunter",
        id: "mindhunter",
        // link: null,
        info: {
            service: "Netflix",
            // description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
            // summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        },
        style: {
            color: '838383',
            posterType: 'webp',
            titleType: 'svg',
            titleSize: "wide",
        },
    },
]

const movieData = [
    movieData1,
    movieData2,
    movieData3,
    movieData4,
    movieData5,
]

function movieHTML(n, tray) {
    const data = movieData[n]

    var dataLength = data.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)

    for (i = 0; i < dataLength; i++) {
        if ((data[i].link !== null) && (data[i].link !== undefined)) {
            var htmlLink = `href="${data[i].link}"`
        } else {
            var htmlLink = ``
        }

        // var movieCardHTML = `<div class="tv-small-poster ${data[i].id}-poster"><div class="tv-small-gradient"><div class="tv-small-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink} onmouseover="tvBig('${data[i].id}','${data[i].link}')"><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div>`


        // <div class="tv-card" target="_blank" href="${htmlLink}">


        // <a class="tv-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleSize}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}", "${data[i].redditLink}")'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>



        // var movieCardHTML = `<div class="tv-card" target="_blank" href="${htmlLink}"><div class="tv-card-bg ${data[i].id}-poster"><div class="tv-card-fg"></div></div><div class="tv-card-poster ${data[i].id}-poster"><div class="tv-gradient"><div class="tv-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink}><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleSize}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}", "${data[i].redditLink}")'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`


        // var movieCardHTML = `<div class="movie-card"><div class="movie-poster ${data[i].id}-poster"><div class="movie-gradient"><div class="movie-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="movie-play-container" target="_blank"${htmlLink}><svg class="movie-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="movie-info" onclick='tvPopup("${data[i].id}", "${data[i].link}", "${data[i].service}", "${data[i].description}", "${data[i].summary}", "${data[i].titleSize}", "${data[i].tvTimeID}", "${data[i].tvTimeRate}", "${data[i].reelgoodLink}", "${data[i].reelgoodRate}", "${data[i].imdbID}", "${data[i].imdbRate}")'><div class="movie-textbox"><p class="movie-heading">${data[i].name}</p><p class="movie-subheading">${data[i].service}</p></div><div class="movie-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"/><circle cx="192" cy="192" r="42.667"/><circle cx="192" cy="341.333" r="42.667"/></svg></div></a></div>`

        // var movieCardHTML = `<div class="tv-card" target="_blank" href="${htmlLink}"><div class="tv-card-poster ${data[i].id}-poster image-border"><div class="tv-gradient"><div class="tv-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink}><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info clickable" onclick='tvPopup(movieData[${n}][${i}])'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading secondary-fg">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`

        // var movieCardHTML = `<div class="tv-card ${data[i].id}-solid" target="_blank" href="${htmlLink}"><div class="tv-card-poster ${data[i].id}-poster"><div class="tv-gradient ${data[i].id}-gradient"><div class="tv-title ${data[i].titleSize} ${data[i].id}-title"></div></div><a class="tv-play-container" target="_blank"${htmlLink}><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info clickable" onclick='tvPopup(movieData[${n}][${i}])'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading secondary-fg">${data[i].service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`

        var movieCardHTML = `<div class="tv-card" target="_blank" href="${htmlLink}"><div class="tv-card-poster image-border" style="--poster: url('TV/background/${data[i].id}.${data[i].style.posterType}');"><div class="tv-gradient"><div class="tv-title ${data[i].style.titleSize}" style="--title: url('TV/title/${data[i].id}.${data[i].style.titleType}');"></div></div><a class="tv-play-container" target="_blank"${htmlLink} onmouseover="tvPreview(${n},${i})"><svg class="tv-play-icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg"></path></g></svg></a></div><a class="tv-info clickable" onclick='tvPopup(movieData[${n}][${i}])'><div class="tv-textbox"><p class="tv-heading">${data[i].name}</p><p class="tv-subheading secondary-fg">${data[i].info.service}</p></div><div class="tv-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><circle cx="192" cy="42.667" r="42.667"></circle><circle cx="192" cy="192" r="42.667"></circle><circle cx="192" cy="341.333" r="42.667"></circle></svg></div></a></div>`


        htmlString = `${htmlString}${movieCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 8)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = appendSpacer(htmlString, 'n')
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString, 35)

    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}

const bookData = [
    {
        name: "No Rules Rules",
        id: "rules",
        link: "ibooks://",
        author: "Reed Hastings & Erin Meyer",
        coverType: 'jpg',
    },
    {
        name: "Never Split the Difference",
        id: "split",
        link: "ibooks://",
        author: "Chris Voss",
        coverType: 'jpg',
    },
    {
        name: "12 Rules for Life",
        id: "jordan",
        link: "ibooks://",
        author: "Jordan B. Peterson",
        coverType: 'jpg',
    },
    {
        name: "The Expatriates",
        id: "expats",
        link: "ibooks://",
        author: "Janice Y. K. Lee",
        coverType: 'jpg',
    },
    {
        name: "Gweilo: Memories of a Hong Kong Childhood",
        id: "gweilo",
        link: "ibooks://",
        author: "Martin Booth",
        coverType: 'jpg',
    },
    {
        name: "The Four",
        id: "four",
        link: "ibooks://",
        author: "Scott Galloway",
        coverType: 'jpg',
    },
    {
        name: "Homo Deus",
        id: "homodeus",
        link: "ibooks://",
        author: "Yuval Noah Harari",
        coverType: 'jpg',
    },
    {
        name: "The Ride of a Lifetime",
        id: "ride",
        link: "ibooks://",
        author: "Robert Iger",
        coverType: 'jpg',
    },
    {
        name: "The Martian",
        id: "martian",
        link: "ibooks://",
        author: "Andy Weir",
        coverType: 'jpg',
    },
]

function bookPopulate(bookData, tray) {
    var dataLength = bookData.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)

    for (i = 0; i < dataLength; i++) {
        // var bookCardHTML = `<a class="book-card clickable" target="_blank" href="${bookData[i].link}"><div class="book-card-bg ${bookData[i].id}-cover"><div class="book-card-fg"></div></div><div class="book-poster ${bookData[i].id}-cover"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${bookData[i].name}</p><p class="book-subheading">${bookData[i].author}</p></div></div></a>`
        var bookCardHTML = `<a class="media-card clickable" target="_blank" onclick="showMediaPopup('book',${i})"><div class="media-poster book-poster image-border" style="--poster: url('media-image/books/${bookData[i].id}.${bookData[i].coverType}');"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${bookData[i].name}</p><p class="book-subheading secondary-fg">${bookData[i].author}</p></div></div></a>`

        htmlString = `${htmlString}${bookCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 10)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString, 35)

    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}

const podData = [
    {
        name: "Pivot",
        id: "pivot",
        link: "https://podcasts.apple.com/podcast/id1073226719",
        author: "Kara Swisher & Scott Galloway",
        coverType: 'jpeg',
    },
    {
        name: "Waveform",
        id: "waveform",
        link: "https://www.youtube.com/Waveform/videos",
        author: "Marques Brownlee",
        coverType: 'jpeg',
    },
    {
        name: "Founder's Journal",
        id: "founders",
        link: "https://podcasts.apple.com/podcast/id1509276485",
        author: "Alex Lieberman",
        coverType: 'jpeg',
    },
    {
        name: "Sway",
        id: "sway",
        link: "https://podcasts.apple.com/podcast/id1528594034",
        author: "Kara Swisher",
        coverType: 'jpeg',
    },
    {
        name: "Acquired",
        id: "acquired",
        link: "https://podcasts.apple.com/podcast/id1050462261",
        author: "Ben Gilbert & David Rosenthal",
        coverType: 'jpeg',
    },
    {
        name: "Learn Cantonese",
        id: "canto",
        link: "https://podcasts.apple.com/podcast/id1513774818",
        author: "Poetic Cantonese",
        coverType: 'jpeg',
    },
    {
        name: "Lex Fridman Podcast",
        id: "lex",
        link: "https://www.youtube.com/lexfridman/videos",
        author: "Lex Fridman",
        coverType: 'jpeg',
    },
    {
        name: "Yang Speaks",
        id: "yang",
        link: "https://www.youtube.com/channel/UCJjLcmTHbVigXBb1ul0m5sw/videos",
        author: "Andrew Yang & Zach??",
        coverType: 'jpeg',
    },
    {
        name: "Economist Radio",
        id: "economist",
        link: "https://podcasts.apple.com/podcast/id151230264",
        author: "The Economist",
        coverType: 'jpeg',
    },
    {
        name: "INET",
        id: "inet",
        link: "https://www.youtube.com/c/NewEconomicThinking/videos",
        author: "Rob Johnson",
        coverType: 'jpeg',
    },
    {
        name: "Making Sense",
        id: "samharris",
        link: "https://podcasts.apple.com/podcast/id733163012",
        author: "Sam Harris",
        coverType: 'jpeg',
    },
]

function podPopulate(podData, tray) {


    var dataLength = podData.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)

    for (i = 0; i < dataLength; i++) {
        // var bookCardHTML = `<a class="book-card clickable" target="_blank" href="${podData[i].link}"><div class="book-card-bg ${podData[i].id}-cover"><div class="book-card-fg"></div></div><div class="pod-poster ${podData[i].id}-cover"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${podData[i].name}</p><p class="book-subheading">${podData[i].author}</p></div></div></a>`
        var bookCardHTML = `<a class="media-card clickable" target="_blank" onclick="showMediaPopup('pod',${i})"><div class="media-poster pod-poster image-border" style="--poster: url('media-image/podcasts/${podData[i].id}.${podData[i].coverType}');"></div><div class="book-info"><div class="book-textbox"><p class="book-heading">${podData[i].name}</p><p class="book-subheading secondary-fg">${podData[i].author}</p></div></div></a>`

        htmlString = `${htmlString}${bookCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 10)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString, 35)

    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}

const newsData = [
    {
        name: "Morning Brew",
        bg: "white",
        fg: "brew-fg",
        link: "https://www.morningbrew.com/daily/issues/latest",
    },
    {
        name: "SCMP",
        bg: "scmp-bg",
        fg: null,
        link: "https://www.scmp.com",
    },
    {
        name: "No Mercy/No Malice",
        bg: "nomercy-bg",
        fg: null,
        link: "https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fwww.profgalloway.com%2Ffeed",
    },
    {
        name: "CityLab",
        bg: "gray1",
        fg: "citylab-fg",
        link: "https://www.bloomberg.com/citylab",
    },
    {
        name: "Emerging Tech Brew",
        bg: "white",
        fg: 'techbrew-fg',
        link: "https://www.morningbrew.com/emerging-tech/issues/latest",
    },
    {
        name: "Sidekick",
        bg: "sidekick-bg",
        fg: "sidekick-fg",
        link: "https://www.morningbrew.com/sidekick/issues/latest",
    },
]

function newsPopulate(newsData) {
    var dataLength = newsData.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)

    for (i = 0; i < dataLength; i++) {

        if (newsData[i].fg) {
            var fgHTML = `<div class="news-image ${newsData[i].fg}"></div>`
        } else {
            var fgHTML = ``
        }

        var newsCardHTML = `
        <a class="news-card image-border clickable ${newsData[i].bg}" target="_blank" href="${newsData[i].link}">${fgHTML}</a>
        `

        htmlString = `${htmlString}${newsCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 10)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = appendSpacer(htmlString, 'n')
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString, 35)

    var tray = 'news-tray'
    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}

const youtubeData = [
    {
        name: "Wendover Productions",
        bg: "wendover-bg",
        fg: null,
        link: "https://nebula.app/wendover",
    },
    {
        name: "Real Engineering",
        bg: "realeng-bg",
        fg: null,
        link: "https://nebula.app/realengineering",
    },
]

function youtubePopulate(youtubeData) {
    var dataLength = youtubeData.length

    var htmlString = "";
    htmlString = appendSpacer(htmlString, 35)

    for (i = 0; i < dataLength; i++) {

        if (youtubeData[i].fg) {
            var fgHTML = `<div class="news-image ${youtubeData[i].fg}"></div>`
        } else {
            var fgHTML = ``
        }

        var newsCardHTML = `
        <a class="youtube-card image-border clickable ${youtubeData[i].bg}" target="_blank" href="${youtubeData[i].link}">${fgHTML}</a>
        `

        htmlString = `${htmlString}${newsCardHTML}`
        if (i < dataLength - 1) {
            htmlString = appendSpacer(htmlString, 10)
        }
    }

    htmlString = appendSpacer(htmlString, 35)
    htmlString = appendSpacer(htmlString, 'n')
    htmlString = hstackEmbed(htmlString)
    htmlString = scrollEmbed(htmlString, 35)

    var tray = 'youtube-tray'
    var trayElement = document.getElementById(tray)
    trayElement.innerHTML = htmlString
}

var sideModal = document.getElementById('side-popup-modal')

function showMediaPopup(type, n) {
    populateMediaPopup(type, n)
    sideModal.classList = 'show'
    popupAllShow()
}

function hideMediaPopup() {
    sideModal.classList = 'hide'
    popupAllHide()
}

function populateMediaPopup(type, n) {
    var mediaData;
    var mediaType;

    if (type == 'pod') {
        mediaData = podData[n]
        document.getElementById('side-popup-poster').classList = 'pod'
        mediaType = 'podcasts'
    } else if (type == 'book') {
        mediaData = bookData[n]
        document.getElementById('side-popup-poster').classList = 'book'
        mediaType = 'books'
    }

    // document.getElementById('poster').style.setProperty('--poster',`url('TV/background/${movie.id}.${movie.style.posterType}')`)


    document.getElementById('side-popup-bg').style.setProperty('--poster',`url('media-image/${mediaType}/${mediaData.id}.${mediaData.coverType}')`)
    document.getElementById('side-popup-poster').style.setProperty('--poster',`url('media-image/${mediaType}/${mediaData.id}.${mediaData.coverType}')`)


    // document.getElementById('side-popup-bg').classList = mediaData.id + '-cover'
    // document.getElementById('side-popup-poster').classList.add(mediaData.id + '-cover')
    document.getElementById('side-popup-title').innerHTML = mediaData.name
    document.getElementById('side-popup-subtitle').innerHTML = mediaData.author
    document.getElementById('side-popup-link').href = mediaData.link
}