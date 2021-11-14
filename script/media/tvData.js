
// {
//     name: 'Title',
//     id: 'identifier',
//     link: {
//         netflix: '80197526'
//     },
//     info: {
//         service: 'service',
//         // studio: 'studio',
//         location: 'location',
//         // date: '',
//         // weekday: '',
//         desc: {
//             seasons: 1,
//             year: 2021,
//             yearStart: 2021,
//             yearEnd: null,
//             genre: [
//                 'crime',
//                 'comedy',
//             ],
//         },
//         summary: "summary",
//     },
//     style: {
//         color: '000000',
//         posterType: 'jpg',
//         titleType: 'png',
//         titleSize: 'wide',
//         mobileType: 'jpg',
//         mobileSize: '7 / 10',
//     },
//     apps: {
//         // tvTimeID: 'identifier',
//         // reelgoodLink: 'link',
//         // imdbID: 'identifier',
//         // subReddit: 'subreddit',
//     },
//     // cast: [
//     //     {
//     //         actor: 'name',
//     //         image: 'url',
//     //         char: 'name',
//     //     },
//     // ],
// },


// schitts creek
// narcos
// mr pickles
// kim
// breaking bad
// bad education
// arrested dev

const movieData0 = [
    {
        name: 'Arcane',
        id: 'arcane',
        link: {
            netflix: '81435684'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            // date: '',
            weekday: 'Saturday',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'action & adventure',
                    'animation',
                    'fantasy',
                ],
            },
            summary: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
        },
        style: {
            color: '994d33',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '8 / 10',
        },
        apps: {
            tvTimeID: '371028',
            reelgoodLink: 'https://reelgood.com/show/arcane-2021',
            imdbID: 'tt11126994',
            subReddit: 'ArcaneAnimatedSeries',
        },
        cast: [
            {
                actor: 'Shohreh Aghdashloo',
                // image: 'url',
                char: 'Grayson',
            },
            {
                actor: 'JB Blanc',
                // image: 'url',
                char: 'Vander',
            },
        ],
    },
    {
        name: 'Curb Your Enthusiasm',
        id: 'curb',
        link: 'https://www.hulu.com/series/curb-your-enthusiasm-7a307be7-978b-4d62-b47d-1cf3839f3c98',
        info: {
            service: 'hbo',
            // studio: '',
            location: 'Hulu',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 11,
                yearStart: 2000,
                yearEnd: null,
                genre: [
                    'comedy',
                ],
            },
            summary: "The off-kilter, unscripted comic vision of Larry David, who plays himself in a parallel universe in which he can't seem to do anything right, and, by his standards, neither can anyone else.",
        },
        style: {
            color: 'FDC801',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '76203',
            reelgoodLink: 'https://reelgood.com/show/curb-your-enthusiasm-2000',
            imdbID: 'tt0264235',
            subReddit: 'curb',
        },
        cast: [
            {
                actor: 'Larry David',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Larry_David_at_the_2009_Tribeca_Film_Festival_2.jpg/1280px-Larry_David_at_the_2009_Tribeca_Film_Festival_2.jpg',
                char: 'Larry David',
            },
            {
                actor: 'Jeff Garlin',
                image: 'https://static.wikia.nocookie.net/disney/images/2/27/Jeff_Garlin.jpg',
                char: 'Jeff Greene',
            },
            {
                actor: 'Cheryl Hines',
                image: 'https://deadline.com/wp-content/uploads/2019/03/cheryl-hines-e1553018614527.jpg',
                char: 'Cheryl David',
            },
            {
                actor: 'Susie Essman',
                image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Susie_Essman_at_the_2009_Tribeca_Film_Festival.jpg',
                char: 'Susie Greene',
            },
            {
                actor: 'Richard Lewis',
                image: 'https://m.media-amazon.com/images/M/MV5BMTA5NDIzMzk0ODJeQTJeQWpwZ15BbWU2MDA3OTI0Mw@@._V1_UX178_CR0,0,178,264_AL_.jpg',
                char: 'Richard Lewis',
            },
            {
                actor: 'J.B. Smoove',
                image: 'https://static.wikia.nocookie.net/harleyquinntv/images/d/d0/J._B._Smoove.jpg',
                char: 'Leon Black',
            },
        ],
    },
    {
        name: 'Cowboy Bebop',
        id: 'cowboy',
        link: {
            netflix: '80001312'
        },
        info: {
            service: 'netflix',
            // studio: 'studio',
            location: 'Netflix',
            desc: {
                seasons: 1,
                yearStart: 1998,
                yearEnd: 1999,
                genre: [
                    'action',
                    'animation',
                    'sci-fi',
                ],
            },
            summary: "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
        },
        style: {
            color: '994d33',
            posterType: 'jpeg',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'webp',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '76885',
            reelgoodLink: 'https://reelgood.com/show/cowboy-bebop-1998',
            imdbID: 'tt0213338',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Ghosts',
        id: 'ghosts',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GXrBDuAniEYC9JwEAAAWV:type:series',
        info: {
            service: 'hbo',
            studio: 'hbo',
            location: 'HBO Max',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 3,
                yearStart: 2019,
                yearEnd: null,
                genre: [
                    'comedy',
                    'fantasy',
                ],
            },
            summary: "Crumbling country mansion Button House is home to restless spirits who’ve died there over the centuries. Each a product of their time, they’re thrown together for eternity, resigned to squabble over mundane daily gripes. But their lives, or rather, afterlives, are thrown into turmoil when young urban couple Alison and Mike unexpectedly inherit the peaceful derelict house and plan to turn it into a bustling hotel.",
        },
        style: {
            color: '513d35',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'png',
            mobileSize: '3 / 4',
        },
        apps: {
            tvTimeID: 'tt8594324',
            reelgoodLink: 'https://reelgood.com/show/ghosts-2019',
            imdbID: 'tt8594324',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Charlotte Ritchie',
                image: 'https://images.mubicdn.net/images/cast_member/562435/cache-635452-1611181278/image-w856.jpg',
                char: 'Alison Cooper',
            },
            {
                actor: 'Kiell Smith-Bynoe',
                image: 'https://i.guim.co.uk/img/media/e95bb7a992d5b17c209a47dd27f7f6fa6c203bc0/1678_445_3832_2299/master/3832.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e6a9a7cb8ff5a39bbf8c6422c9b624dd',
                char: 'Mike Cooper',
            },
        ],
    },
    {
        name: 'Narcos: Mexico',
        id: 'narcos',
        link: {
            netflix: '80997085'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            desc: {
                seasons: 3,
                yearStart: 2018,
                yearEnd: 2021,
                genre: [
                    'crime',
                    'drama',
                ],
            },
            summary: "This continuation of 'Narcos' explores the origins of the modern drug war by going back to its roots, starting at a time when the Mexican trafficking world was a loose, disorganized confederation of independent growers and dealers. It's the 1980s, and Felix Gallardo takes the helm of the Guadalajara Cartel, unifying traffickers to build an empire. As DEA agent Kiki Camarena moves his wife and young son from California to Guadalajara to take on a new post, he learns his assignment is more challenging than he imagined. A tragic chain of events unfolds as Camarena gains intelligence on Gallardo and becomes more entangled in the mission.",
        },
        style: {
            color: '5980C4',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '1',
        },
        apps: {
            tvTimeID: '353232',
            reelgoodLink: 'https://reelgood.com/show/narcos-mexico-2018',
            imdbID: 'tt8714904',
            // subReddit: null,
        },
    },
    {
        name: 'South Park',
        id: 'southpark',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GXr7SEgRi2sLCAAEAAAQu:type:series',
        info: {
            service: 'hbo',
            // studio: 'studio',
            location: 'HBO Max',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 24,
                yearStart: 1997,
                yearEnd: null,
                genre: [
                    'animation',
                    'comedy',
                ],
            },
            summary: "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
        },
        style: {
            color: 'A14533',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '75897',
            reelgoodLink: 'https://reelgood.com/show/south-park-1997',
            imdbID: 'tt0121955',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Archer',
        id: 'archer',
        link: 'https://www.hulu.com/series/archer-22b4b3c8-0827-42d2-a841-50e8f3464dc2',
        info: {
            service: 'hulu',
            studio: 'fx',
            location: 'Hulu',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 12,
                yearStart: 2009,
                yearEnd: null,
                genre: [
                    'action & adventure',
                    'animation',
                    'crime',
                ],
            },
            summary: "Covert black ops and espionage take a back seat to zany personalities and relationships between secret agents and drones.",
        },
        style: {
            color: '337799',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'webp',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '110381',
            reelgoodLink: 'https://reelgood.com/show/archer-2009',
            imdbID: 'tt1486217',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'H. Jon Benjamin',
                image: 'https://static.wikia.nocookie.net/wordgirl/images/7/7a/IMG_0630.JPG',
                char: 'Sterling Archer',
            },
            {
                actor: 'Aisha Tyler',
                image: 'https://static.wikia.nocookie.net/modernfamily/images/d/d5/Aisha-Tyler.jpg',
                char: 'Lana Kane',
            },
            {
                actor: 'Jessica Walter',
                image: 'https://i.guim.co.uk/img/media/2210d59881f244fafa78bffd007fa65eb016fc05/0_88_3000_1801/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c1328f0a445403ca26fb753cd33bf947',
                char: 'Malory Archer',
            },
            {
                actor: 'Chris Parnell',
                image: 'https://static.wikia.nocookie.net/adam-ruins-everything/images/9/96/Chris_Parnell.jpg',
                char: 'Cyril Figgis',
            },
            {
                actor: 'Judy Greer',
                image: 'https://m.media-amazon.com/images/M/MV5BMTg5MTAyMzMzMl5BMl5BanBnXkFtZTcwMDY2Mzc2NQ@@._V1_.jpg',
                char: 'Cheryl Tunt',
            },
            {
                actor: 'Amber Nash',
                // image: 'url',
                char: 'Pam Poovey',
            },
        ],
    },
]
const movieData1 = [
    {
        name: 'Succession',
        id: 'succession',
        link: 'https://www.hulu.com/series/succession-7f3ad78e-0fdb-4b13-97c1-af4d06ed5601',
        info: {
            service: 'hbo',
            studio: 'hbo',
            location: 'Hulu',
            // date: '',
            weekday: 'Sunday',
            desc: {
                seasons: 2,
                yearStart: 2018,
                yearEnd: null,
                genre: [
                    //    'comedy',
                    'drama',
                ],
            },
            summary: "When a media tycoon considers retirement, each of his four grown children begins angling for their piece of the pie in this series.",
        },
        style: {
            color: '555962',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'webp',
            mobileSize: '4 / 5',
        },
        apps: {
            tvTimeID: '338186',
            reelgoodLink: 'https://reelgood.com/show/succession-2018',
            imdbID: 'tt7660850',
            subReddit: 'SuccessionTV',
        },
        cast: [
            {
                actor: 'Brian Cox',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCskxSLQJuuUMd17lJgBxYuOsEv8yk1mCm-UK1Pz6U_B8eXgad',
                char: 'Logan Roy',
            },
            {
                actor: 'Jeremy Strong',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Jeremy_Strong_2014.jpg',
                char: 'Kendall Roy',
            },
            {
                actor: 'Sarah Snook',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCbLwd8jRGCMOF2czavGhVXHGPG0DsLIxKBTjMqP_w-JqgiKwZzFfmRwHeb_ABBpAp3s&usqp=CAU',
                char: 'Shiv Roy',
            },
            {
                actor: 'Matthew Macfadyen',
                image: 'https://m.media-amazon.com/images/M/MV5BMjQ1ODY2ODA5MV5BMl5BanBnXkFtZTgwNDA3MzkxNzM@._V1_.jpg',
                char: 'Tom Wambsgans',
            },
            {
                actor: 'Kieran Culkin',
                image: 'https://m.media-amazon.com/images/M/MV5BYzZkNzYyNTYtMDY2ZS00YmI4LWI5YzctZjBiN2FkY2NkNWMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
                char: 'Roman Roy',
            },
            {
                actor: 'Nicholas Braun',
                image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Nicholas_Braun_2017.jpg',
                char: 'Greg Hirsch',
            },
            {
                actor: 'Alan Ruck',
                image: 'https://static.wikia.nocookie.net/theloudhouse/images/1/17/Alan_Ruck.png',
                char: 'Connor Roy',
            },
        ],
    },
]
const movieData2 = [
    {
        name: 'You',
        id: 'you',
        link: {
            netflix: '80211991'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 3,
                yearStart: 2018,
                yearEnd: null,
                genre: [
                    'romance',
                    'thriller',
                ],
            },
            summary: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        },
        style: {
            color: '655b3f',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '336924',
            reelgoodLink: 'https://reelgood.com/show/you-2018',
            imdbID: 'tt7335184',
            subReddit: 'YouOnLifetime',
        },
        cast: [
            {
                actor: 'Penn Badgley',
                image: 'https://media1.popsugar-assets.com/files/thumbor/5hs8f5F2K3qAi5JiZn4XoBIJUAE/0x150:3648x3798/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/28/859/n/1922398/d130310f5f99c8a0122de3.83461725_/i/Penn-Badgley.jpg',
                char: 'Joe Goldberg',
            },
            {
                actor: 'Elizabeth Lail',
                image: 'https://www.thewikifeed.com/wp-content/uploads/2021/06/elizabeth-lail-1.jpg',
                char: 'Guinevere Beck',
            },
            {
                actor: 'Shay Mitchell',
                image: 'https://media.self.com/photos/603d499db090d0bf156c1013/1:1/w_2332,h_2332,c_limit/1205249363',
                char: 'Peach Salinger',
            },
        ],
    },
    {
        name: 'Solar Opposites',
        id: 'solar',
        link: 'https://www.hulu.com/series/solar-opposites-f089664b-1a87-433b-86a5-24e7da5a246a',
        info: {
            service: 'hulu',
            studio: 'hulu',
            location: 'Hulu',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 2,
                yearStart: 2020,
                yearEnd: null,
                genre: [
                    'animation',
                    'comedy',
                ],
            },
            summary: "A team of four aliens escape their exploding home world only to crash land into a move-in ready home in suburban America. They are evenly split on whether Earth is awful or awesome. Korvo (Justin Roiland) and Yumyulack (Sean Giambrone) only see the pollution, crass consumerism, and human frailty while Terry (Thomas Middleditch) and Jesse (Mary Mack) love humans and all their TV, junk food and fun stuff. Their mission: protect the Pupa, a living super computer that will one day evolve into its true form, consume them and terraform the Earth.",
        },
        style: {
            color: '3B347A',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'webp',
            mobileSize: '8 / 10',
        },
        apps: {
            tvTimeID: '375892',
            reelgoodLink: 'https://reelgood.com/show/solar-opposites-2020',
            imdbID: 'tt8910922',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Justin Roiland',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Justin_Roiland_%2836434635662%29.jpg/1200px-Justin_Roiland_%2836434635662%29.jpg',
                char: 'Korvo',
            },
            {
                actor: 'Thomas Middlditch',
                image: 'https://m.media-amazon.com/images/M/MV5BMTkwNjMwMDAzN15BMl5BanBnXkFtZTgwOTU3NjMwMTE@._V1_.jpg',
                char: 'Terry',
            },
            {
                actor: 'Sean Giambrone',
                image: 'https://pbs.twimg.com/profile_images/1058413246015631360/R87z0r6T.jpg',
                char: 'Yumyulack',
            },
            {
                actor: 'Mary Mack',
                image: 'https://m.media-amazon.com/images/M/MV5BNzE3ZWM5MDgtMDY0NC00NTZiLTk1YjYtNDg1ZmM1MzM1YTMyXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg',
                char: 'Jesse',
            },
        ],
    },
    {
        name: 'Dopesick',
        id: 'dopesick',
        link: 'https://www.hulu.com/series/dopesick-227de06a-d3d4-42e0-9df1-bb5495e1738d',
        info: {
            service: 'hulu',
            studio: 'hulu',
            location: 'Hulu',
            // date: '',
            weekday: 'Wednesday',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'drama',
                ],
            },
            summary: "From Executive Producer Danny Strong and starring and executive produced by Michael Keaton, “Dopesick” examines how one company triggered the worst drug epidemic in American history. The series takes viewers to the epicenter of America’s struggle with opioid addiction, from the boardrooms of Big Pharma, to a distressed Virginia mining community, to the hallways of the DEA. Defying all the odds, heroes will emerge in an intense and thrilling ride to take down the craven corporate forces behind this national crisis and their allies. The limited series is inspired by the New York Times bestselling book by Beth Macy.",
        },
        style: {
            color: '339999',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'webp',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '390716',
            reelgoodLink: 'https://reelgood.com/show/dopesick-2021',
            imdbID: 'tt9174558',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Memories of the Alhambra',
        id: 'memories',
        link: {
            netflix: '81004280'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 1,
                yearStart: 2018,
                yearEnd: 2019,
                genre: [
                    'romance',
                    'sci-fi',
                ],
            },
            summary: "A frantic young man is running scared in Barcelona. CEO Yoo Jin-woo heads to Granada on a quest after getting a strange call while on business in Spain.",
        },
        style: {
            color: 'a6886c',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '1000 / 973',
        },
        apps: {
            tvTimeID: '348488',
            reelgoodLink: 'https://reelgood.com/show/memories-of-the-alhambra-2018',
            imdbID: 'tt8236556',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Midnight Mass',
        id: 'midnight',
        link: {
            netflix: '81083626'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'drama',
                    'horror',
                ],
            },
            summary: "The arrival of a charismatic young priest brings glorious miracles, ominous mysteries and renewed religious fervor to a dying town desperate to believe.",
        },
        style: {
            color: '3c2e2c',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '1',
        },
        apps: {
            tvTimeID: '367226',
            reelgoodLink: 'https://reelgood.com/show/midnight-mass',
            imdbID: 'tt10574558',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Family Guy',
        id: 'family',
        link: 'https://www.hulu.com/series/family-guy-3c3c0f8b-7366-4d15-88ab-18050285978e',
        info: {
            service: 'hulu',
            studio: 'fox',
            location: 'Hulu',
            // date: '',
            weekday: 'Sunday',
            desc: {
                seasons: 20,
                yearStart: 1999,
                yearEnd: null,
                genre: [
                    'animation',
                    'comedy',
                ],
            },
            summary: "Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.",
        },
        style: {
            color: '0B6F38',
            posterType: 'webp',
            titleType: 'svg',
            titleSize: 'mid',
        },
        apps: {
            tvTimeID: '75978',
            reelgoodLink: 'https://reelgood.com/show/family-guy-1999',
            imdbID: 'tt0182576',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Foundation',
        id: 'foundation',
        link: 'https://tv.apple.com/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3',
        info: {
            service: 'appleTV',
            studio: 'appleTV',
            location: ' TV+',
            weekday: 'Friday',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'drama',
                    'sci-fi',
                ],
            },
            summary: "Dr. Hari Seldon and his loyal followers attempt to preserve their culture as the galaxy collapses.",
        },
        style: {
            color: '70655B',
            posterType: 'webp',
            titleType: 'webp',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '366972',
            reelgoodLink: 'https://reelgood.com/show/foundation-2020',
            imdbID: 'tt0804484',
            subReddit: 'FoundationTV',
        },
    },
    {
        name: 'The Simpsons',
        id: 'simpsons',
        link: 'https://www.hulu.com/series/the-simpsons-47332072-d7fb-48b3-a5f7-ca8c6915ca27',
        info: {
            service: 'hulu',
            studio: 'fox',
            location: 'Hulu',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 33,
                yearStart: 1989,
                yearEnd: 2021,
                genre: [
                    'animation',
                    'comedy',
                ],
            },
            summary: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie.",
        },
        style: {
            color: '685467',
            posterType: 'webp',
            titleType: 'svg',
            titleSize: 'wide',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/the-simpsons-1989',
            imdbID: 'tt0096697',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Superstore',
        id: 'superstore',
        link: 'https://www.hulu.com/series/superstore-727810b8-e54b-4f01-9381-a79ab5661bf7',
        info: {
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 6,
                yearStart: 2015,
                yearEnd: 2021,
                genre: [
                    'comedy',
                ],
            },
            summary: "Revolving around a group of employees at a big-box store, it examines love, friendship and the beauty of everyday moments.",
        },
        style: {
            color: '0070DB',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: '295648',
            reelgoodLink: 'https://reelgood.com/show/superstore-2015',
            imdbID: 'tt4477976',
            // subReddit: 'subreddit',
        },
    },
    {
        name: "What If?",
        id: "whatif",
        link: "https://www.disneyplus.com/series/what-if/7672ZVj1ZxU9",
        info: {
            service: 'disney',
            studio: 'disney',
            location: "Disney+",
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
            subReddit: 'MarvelsWhatIf',
        },
    },
    {
        name: "Sex Education",
        id: "edu",
        link: {
            netflix: '80197526'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: "Netflix",
            description: "Comedy &#149 Teen &#149 3 Seasons &#149 2019 - Present",
            summary: "Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mom. So rebel Maeve proposes a school sex-therapy clinic.",
        },
        style: {
            color: '6d6256',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: "356317",
            reelgoodLink: "https://reelgood.com/show/sex-education-2019",
            imdbID: "tt7767422",
            subReddit: "NetflixSexEducation",
        },
    },
    {
        name: "Jojo's Bizzare Adventures",
        id: "jojo",
        link: {
            netflix: '80179831'
        },
        info: {
            service: 'netflix',
            // studio: '',
            location: "Netflix",
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
    {
        name: "Money Heist",
        id: "money",
        link: {
            netflix: '80192098'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: "Netflix",
            description: "Action &#149 Crime &#149 Mystery &#149 3 Seasons &#149 2017 - Present",
            summary: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        },
        style: {
            color: '3f1513',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '10 / 9',
        },
        apps: {
            tvTimeID: "327417",
            reelgoodLink: "https://reelgood.com/show/money-heist-2017",
            imdbID: "tt6468322",
        },
    },
    {
        name: "Dave",
        id: "dave",
        link: "https://www.hulu.com/series/dave-ac3a96f0-9614-46af-b524-f59c7d281946",
        info: {
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
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
]
const movieData3 = [
    {
        name: 'Eternals',
        id: 'eternals',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            studio: 'marvel',
            location: 'Coming Soon',
            date: 'Nov 5, 2021',
            desc: {
                year: 2021,
                genre: [
                    'sci-fi',
                    'MCU',
                ],
            },
            summary: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
        },
        style: {
            color: '645542',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/eternals-2021',
            imdbID: 'tt9032400',
        },
    },
    {
        name: 'Knives Out',
        id: 'knives',
        link: {
            primeVideo: 'B081W68DP2'
        },
        info: {
            service: 'prime',
            // studio: 'studio',
            location: 'Prime Video',
            description: 'Comedy &#149 Crime &#149 Drama &#149 2019',
            summary: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        },
        style: {
            color: '3d250f',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/knives-out-2019',
            imdbID: 'tt8946378',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Dune',
        id: 'dune',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYUjdLgBiJp5otAEAAAAJ:type:feature',
        info: {
            service: 'hbo',
            // studio: 'studio',
            location: 'HBO Max',
            desc: {
                year: 2021,
                genre: [
                    'action & adventure',
                    'drama',
                ],
            },
            summary: "A mythic and emotionally charged epic hero's journey, Dune is Academy Award nominee Denis Villeneuve's visuallystunning adaptation of Frank Herbert's seminal bestseller of the same name.",
        },
        style: {
            color: '6f897e',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/dune-2020',
            imdbID: 'tt1160419',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Dil Chahta Hai',
        id: 'dil',
        link: {
            netflix: '60021525'
        },
        info: {
            service: 'netflix',
            // studio: 'studio',
            location: 'Netflix',
            description: 'Comedy &#149 Drama &#149 2001',
            summary: "Inseparable childhood friends Akash, Sameer and Siddharth are just out of college. Nothing comes between them -- until they each fall in love.",
        },
        style: {
            color: 'a5a39e',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '10 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/dil-chahta-hai-2001',
            imdbID: 'tt0292490',
        },
    },
    {
        name: 'Lo and Behold: Reveries of the Connected World',
        id: 'loAndBehold',
        link: {
            primeVideo: 'B01KH1DOA4'
        },
        info: {
            service: 'prime',
            // studio: 'studio',
            location: 'Prime Video',
            description: 'Documentary &#149 Technology &#149 Sci-Fi &#149 2016',
            summary: "Oscar-nominated documentarian Werner Herzog (Grizzly Man, Cave of Forgotten Dreams) chronicles the virtual world. He leads viewers on a journey that reveals the ways the online world has transformed how virtually everything in the real world works.",
        },
        style: {
            color: '747a71',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '10 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/lo-and-behold-reveries-of-the-connected-world-2016',
            imdbID: 'tt5275828',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Ghost in the Shell',
        id: 'ghost',
        link: {
            primeVideo: 'B07WQZDXTM'
        },
        info: {
            service: 'prime',
            // studio: 'studio',
            location: 'Prime Video',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 1,
                year: 1995,
                genre: [
                    'animation',
                    'crime',
                    'sci-fi',
                ],
            },
            summary: "In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as The Puppetmaster begins involving them in politics, Section 9, a group of cybernetically enhanced cops, are called in to investigate and stop the Puppetmaster.",
        },
        style: {
            color: '313C82',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/ghost-in-the-shell-1995',
            imdbID: 'tt0113568',
            // subReddit: 'subreddit',
        },
        // cast: [
        //     {
        //         actor: 'name',
        //         image: 'url',
        //         char: 'name',
        //     },
        // ],
    },
    {
        name: 'Being John Malkovich',
        id: 'john',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            // studio: 'studio',
            location: 'Download',
            description: 'Comedy &#149 Drama &#149 Fantasy &#149 1999',
            summary: "A puppeteer discovers a portal that leads literally into the head of movie star John Malkovich.",
        },
        style: {
            color: '6c4e44',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/being-john-malkovich-1999',
            imdbID: 'tt0120601',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'The Year the Earth Changed',
        id: 'earth',
        link: 'https://tv.apple.com/movie/the-year-earth-changed/umc.cmc.3fob3t7nfhehpb3ilgynzxmnu',
        info: {
            service: 'appleTV',
            studio: 'appleTV',
            location: ' TV+',
            description: 'Documentary &#149 Nature &#149 2021',
            summary: "Narrated by David Attenborough, never-before-seen footage shows how our living in lockdown opened the door for nature to bounce back and thrive. Across the seas, skies, and lands, Earth found its rhythm when we came to a stop.",
        },
        style: {
            color: '484b51',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/the-year-earth-changed-2021',
            imdbID: 'tt14372240',
            // subReddit: 'subreddit',
        },
    },
]
const movieData4 = [
    {
        name: 'Dexter',
        id: 'dexter',
        link: {
            primeVideo: 'B000JO9JHW'
        },
        info: {
            service: 'prime',
            // studio: 'studio',
            location: 'Prime Video',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 9,
                yearStart: 2006,
                yearEnd: 2013,
                genre: [
                    'crime',
                    'drama',
                    'mystery',
                ],
            },
            summary: "He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and nights committing them. Golden Globe winner Michael C. Hall stars in the hit SHOWTIME Original Series.",
        },
        style: {
            color: 'b11016',
            posterType: 'webp',
            titleType: 'svg',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '79349',
            reelgoodLink: 'https://reelgood.com/show/dexter-2006',
            imdbID: 'tt0773262',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Q: Into the Storm',
        id: 'qanon',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYDk9Ig48c5i6hgEAAAA7:type:series',
        info: {
            service: 'hbo',
            studio: 'hbo',
            location: 'HBO Max',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'documentary',
                    'politics',
                ],
            },
            summary: "This six-part docuseries charts a labyrinthine journey to uncover the inner workings of Qanon, a massive online conspiracy movement.",
        },
        style: {
            color: '2c2433',
            posterType: 'webp',
            titleType: 'jpeg',
            titleSize: 'wide',
            mobileType: 'jpeg',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '397561',
            reelgoodLink: 'https://reelgood.com/show/q-into-the-storm-2021',
            imdbID: 'tt14215442',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'The Sopranos',
        id: 'sopranos',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GVU2b9AHpHo7DwvwIAT4i:type:series',
        info: {
            service: 'hbo',
            studio: 'hbo',
            location: 'HBO Max',
            desc: {
                seasons: 6,
                yearStart: 1999,
                yearEnd: 2007,
                genre: [
                    'crime',
                    'drama',
                ],
            },
            summary: "James Gandolfini stars in this acclaimed series about a mob boss whose professional and private strains land him in therapy.",
        },
        style: {
            color: '443a3c',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '75299',
            reelgoodLink: 'https://reelgood.com/show/the-sopranos-1999',
            imdbID: 'tt0141842',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Maid',
        id: 'maid',
        link: {
            netflix: '81166770'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            desc: {
                seasons: 1,
                year: 2021,
                genre: [
                    'drama',
                ],
            },
            summary: "After fleeing an abusive relationship, a young mother finds a job cleaning houses as she fights to provide for her child and build them a better future.",
        },
        style: {
            color: '6c737a',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '1',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/maid-2021',
            imdbID: 'tt11337908',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Margaret Qualley',
                image: 'https://m.media-amazon.com/images/M/MV5BYWZmMDFlMDYtYzk3My00YTg1LTllZWUtYzY2Y2QyNjk2NTZmXkEyXkFqcGdeQXVyMzcxMTAwMDM@._V1_.jpg',
                char: 'Alex',
            },
            {
                actor: 'Nick Robinson',
                image: 'https://m.media-amazon.com/images/M/MV5BNzViMjQ4NzQtZDBhNC00ZTlhLTk4NzktYTYyYzE4NjFiZjQ1XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg',
                char: 'Sean',
            },
            {
                actor: 'Rylea Nevea Whittet',
                // image: 'url',
                char: 'Maddy',
            },
        ],
    },
    {
        name: 'My Name',
        id: 'myname',
        link: {
            netflix: '81011211'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            date: '',
            weekday: '',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'action & adventure',
                    'crime',
                    'drama',
                ],
            },
            summary: "Following her father's murder, a revenge-driven woman puts her trust in a powerful crime boss - and enters the police force under his direction.",
        },
        style: {
            color: '682008',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
        },
        apps: {
            tvTimeID: '397441',
            reelgoodLink: 'https://reelgood.com/show/my-name-2021',
            imdbID: 'tt12940504',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'The Spy',
        id: 'spy',
        link: {
            netflix: '80178151'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            description: 'Drama &#149 1 Season &#149 2019',
            summary: "In the 1960s, Israeli clerk-turned-secret agent Eli Cohen goes deep undercover inside Syria on a perilous, years-long mission to spy for Mossad.",
        },
        style: {
            color: '7f6b57',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'mid',
        },
        apps: {
            tvTimeID: '368109',
            reelgoodLink: 'https://reelgood.com/show/the-spy-2019',
            imdbID: 'tt5952634',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Chernobyl',
        id: 'chernobyl',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            service: 'hbo',
            studio: 'hbo',
            location: 'HBO Max',
            description: 'History &#149 Thriller &#149 1 Season &#149 2019',
            summary: "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
        },
        style: {
            color: '86a097',
            posterType: 'jpg',
            titleType: 'svg',
            titleSize: 'wide',
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '360893',
            reelgoodLink: 'https://reelgood.com/show/chernobyl-2019',
            imdbID: 'tt7366338',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Vikings',
        id: 'vikings',
        link: 'https://www.hulu.com/series/vikings-8bc072a3-4a5e-47cb-9cb6-bc3dc3785fe1',
        info: {
            service: 'hulu',
            // studio: 'studio',
            location: 'Hulu',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 6,
                yearStart: 2013,
                yearEnd: 2021,
                genre: [
                    'action & adventure',
                    'history',
                ],
            },
            summary: "Ragnar is pitted against Rollo over a land dispute he's trying to settle on behalf of King Horik. A deadly fever hits Kattegat putting Ragnar's wife and daughter's lives in grave danger.",
        },
        style: {
            color: '4f6368',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/vikings-2013',
            imdbID: 'tt2306299',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'The Witcher',
        id: 'witcher',
        link: {
            netflix: '80189685'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 1,
                yearStart: 2019,
                yearEnd: null,
                genre: [
                    'action & adventure',
                    'fantasy',
                ],
            },
            summary: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        },
        style: {
            color: '515d63',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/the-witcher-2020',
            imdbID: 'tt5180504',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Dear White People',
        id: 'dear',
        link: {
            netflix: '80095698'
        },
        info: {
            service: 'netflix',
            // studio: '',
            location: 'Netflix',
            description: 'Comedy &#149 Drama &#149 4 Seasons &#149 2017 - 2021',
            summary: "Students of color navigate the daily slights and slippery politics of life at an Ivy League college that's not nearly as \"post-racial\" as it thinks.",
        },
        style: {
            color: '813a2a',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'tall',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/dear-white-people-2017',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'For All Mankind',
        id: 'mankind',
        link: 'https://tv.apple.com/show/for-all-mankind/umc.cmc.6wsi780sz5tdbqcf11k76mkp7',
        info: {
            // service: '',
            // studio: '',
            location: ' TV+',
            description: 'Sci-Fi &#149 2 Seasons &#149 2019 - Present',
            summary: "Exploring the possibilities that might exist if the global space race had continued and where humanity would be now.",
        },
        style: {
            color: '3e587a',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '356202',
            reelgoodLink: 'https://reelgood.com/show/for-all-mankind-2019',
            imdbID: 'tt7772588',
            // subReddit: null,
        },
    },
    {
        name: 'Dark',
        id: 'dark',
        link: 'https://www.netflix.com/title/80100172',
        info: {
            service: 'netflix',
            // studio: '',
            location: 'Netflix',
            description: 'Crime &#149 Drama &#149 Mystery &#149 3 Seasons &#149 2017 - 2020',
            summary: "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986. 'Dark' represents the first German original series produced for Netflix.",
        },
        style: {
            color: '3f3a2d',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '334824',
            reelgoodLink: 'https://reelgood.com/show/dark-2017',
            imdbID: 'tt5753856',
            // subReddit: null,
        },
    },
    {
        name: 'Fringe',
        id: 'fringe',
        link: {
            primeVideo: 'B001FVV2X2',
        },
        info: {
            // service: '',
            // studio: '',
            location: 'Prime Video',
            description: 'Drama &#149 Mystery &#149 Sci-Fi &#149 5 Seasons &#149 2008 - 2013',
            summary: "FBI Special Agent Olivia Dunham is assigned to the bureau's Fringe Division, in which she investigates unusual crimes and occurrences. Assisting Olivia in her investigations are once-institutionalised scientist Dr Walter Bishop, his jack-of-all-trades son, Peter, and FBI Junior Agent Astrid Farnsworth. As the team investigates cases of science gone awry, they discover connections to their own past and to a parallel universe. As the team explores life and solves cases in these interconnected worlds, new discoveries and complications continue to arise.",
        },
        style: {
            color: '7a726b',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
        },
        apps: {
            tvTimeID: '82066',
            reelgoodLink: null,
            imdbID: 'tt1119644',
            subReddit: null,
        },
    },
    {
        name: "Y: The Last Man",
        id: "lastman",
        link: "https://www.hulu.com/series/y-the-last-man-9fb2d79b-1280-48be-b185-f989b9c9519a",
        info: {
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
            description: 'Action &#149 Adventure &#149 Drama &#149 1 Season &#149 2021 - Present',
            summary: 'A drama based on DC Comics\' acclaimed series by Brian K. Vaughan and Pia Guerra, Y: The Last Man traverses a post-apocalyptic world in which a cataclysmic event decimates every mammal with a Y chromosome but for one cisgender man and his pet monkey. The series follows the survivors in this new world as they struggle with their efforts to restore what was lost and the opportunity to build something better.',
        },
        style: {
            color: '5D080D',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: "399959",
            reelgoodLink: 'https://reelgood.com/show/y-the-last-man-2021',
            imdbID: "tt8042500",
            subReddit: 'YTheLastMan',
        },
    },
    {
        name: "Line of Duty",
        id: "lineofduty",
        link: "https://www.hulu.com/series/line-of-duty-0efc0f95-c575-46da-b28f-a30a13d86b37",
        info: {
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
            description: "Thriller &#149 6 Season &#149 2012 - Present",
            summary: "After refusing to help cover up an unlawful and fatal shooting by members of his team, Detective Sergeant Steve Arnott is transferred to Anti-Corruption Unit 12, AC-12. Run by zealous Superintendent Ted Hastings, the department is responsible for investigating possible corruption within the Central Police force. Working alongside DS Arnott is Detective Inspector Kate Fleming, who is an undercover specialist. With the help and oversight of Hastings, Arnott and Fleming take on difficult cases, which lead from laddering to mishandling evidence.",
        },
        style: {
            color: '262841',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: '260092',
            reelgoodLink: "https://reelgood.com/show/line-of-duty-2012",
            imdbID: "tt2303687",
        },
    },
    {
        name: 'Mindhunter',
        id: 'mindhunter',
        link: {
            netflix: '80114855'
        },
        info: {
            service: 'netflix',
            // studio: 'studio',
            location: 'Netflix',
            description: 'Crime &#149 Drama &#149 Thriller &#149 2 Seasons &#149 2017 - 2019',
            summary: "In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",
        },
        style: {
            color: '838383',
            posterType: 'webp',
            titleType: 'svg',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '10 / 11',
        },
        apps: {
            tvTimeID: '328708',
            reelgoodLink: 'https://reelgood.com/show/mindhunter-2017',
            imdbID: 'tt5290382',
            // subReddit: 'subreddit',
        },
    },
]
const movieData5 = [
    {
        name: "Twin Peaks",
        id: "twinpeaks",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        info: {
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
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
        link: "https://www.hulu.com/series/legion-ae87e56c-5b3b-44f6-9154-b07c8e60fe6c",
        info: {
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
            description: "Sci-Fi &#149 3 Seasons &#149 2017 - 2019",
            summary: "David Haller, AKA Legion, is a troubled young man who may be more than human. Diagnosed as schizophrenic, David has been in and out of psychiatric hospitals for years. But after a strange encounter with a fellow patient, he's confronted with the possibility that the voices he hears and the visions he sees might be real.",
        },
        style: {
            color: '0b276d',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: "320724",
            // reelgoodLink: "https://www.hulu.com/series/legion-ae87e56c-5b3b-44f6-9154-b07c8e60fe6c",
            imdbID: "tt5114356",
        },
    },
    {
        name: "Formula 1: Drive to Survive",
        id: "drive",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        info: {
            service: 'netflix',
            // studio: '',
            location: "Netflix",
            // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
            // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        },
        style: {
            color: '4d5372',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
    },
    {
        name: "The Grand Tour",
        id: "grandTour",
        link: {
            primeVideo: 'B08QM4K1K5',
        },
        info: {
            // service: '',
            // studio: '',
            location: "Prime Video",
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
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
            description: "Animation &#149 Comedy &#149 Sci-Fi &#149 8 Seasons &#149 1999 - 2013",
            summary: "Accidentally frozen, pizza-deliverer Fry wakes up 1,000 years in the future. He is taken in by his sole descendant, an elderly and addled scientist who owns a small cargo delivery location. Among the other crew members are Capt. Leela, accountant Hermes, intern Amy, obnoxious robot Bender and lobsterlike moocher Dr. Zoidberg.",
        },
        style: {
            color: 'E25924',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: "314087",
            reelgoodLink: "https://reelgood.com/show/futurama-1999",
            // imdbID: "tt5712554",
        },
    },
]
const movieData6 = [
    {
        name: 'Cowboy Bebop',
        id: 'cowboy2',
        link: {
            netflix: '80207033',
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            date: 'Nov 19, 2021',
            description: 'Action &#149 Adventure &#149 Crime &#149 1 Season &#149 2021 - Present',
            summary: "A ragtag crew of bounty hunters chases down the galaxy's most dangerous criminals. They'll save the world ... for the right price. A live-action series.",
        },
        style: {
            color: '66472A',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
        },
        apps: {
            tvTimeID: '367234',
            reelgoodLink: 'https://reelgood.com/show/cowboy-bebop-2021',
            imdbID: 'tt1267295',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'F is for Family',
        id: 'fisforfam',
        link: {
            netflix: '80028732'
        },
        info: {
            service: 'netflix',
            // studio: 'studio',
            location: 'Netflix',
            date: 'Nov 25, 2021',
            // weekday: '',
            desc: {
                seasons: 5,
                yearStart: 2015,
                yearEnd: null,
                genre: [
                    'animation',
                    'comedy',
                ],
            },
            summary: "Follow the Murphy family back to the 1970s, when kids roamed wild, beer flowed freely and nothing came between a man and his TV.",
        },
        style: {
            color: '0B6F38',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: '287299',
            reelgoodLink: 'https://reelgood.com/show/f-is-for-family-2015',
            imdbID: 'tt4326894',
            subReddit: null,
        },
    },
    {
        name: "It's Always Sunny in Philadelphia",
        id: 'always',
        link: 'https://www.hulu.com/series/its-always-sunny-in-philadelphia-2171423f-3326-4dfa-b193-b40494e60109',
        info: {
            service: 'hulu',
            studio: 'fx',
            location: 'Hulu',
            date: 'Dec 1, 2021',
            // weekday: '',
            desc: {
                seasons: 15,
                yearStart: 2005,
                yearEnd: null,
                genre: [
                    'comedy',
                    'friends',
                ],
            },
            summary: "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.",
        },
        style: {
            color: '699933',
            posterType: 'jpeg',
            titleType: 'png',
            titleSize: 'tall',
            mobileType: 'webp',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '75805',
            reelgoodLink: 'https://reelgood.com/show/its-always-sunny-in-philadelphia-2005',
            imdbID: 'tt0472954',
            subReddit: 'IASIP',
        },
        cast: [
            {
                actor: 'Charlie Day',
                image: 'https://static.wikia.nocookie.net/itsalwayssunny/images/b/bc/Charlie_Day.jpg',
                char: 'Charlie Kelly',
            },
            {
                actor: 'Glenn Howerton',
                image: 'https://ntvb.tmsimg.com/assets/assets/239200_v3_bb.jpg',
                char: 'Dennis Reynolds',
            },
            {
                actor: 'Rob McElenney',
                image: 'https://bleedingcool.com/wp-content/uploads/2020/03/rob-mcelhenney-900x900.jpg',
                char: 'Mac',
            },
            {
                actor: 'Kaitlin Olson',
                image: 'https://static.wikia.nocookie.net/disney/images/d/dc/Kaitlin_Olson.jpg',
                char: 'Dee Reynolds',
            },
            {
                actor: 'Danny DeVito',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/1200px-Danny_DeVito_by_Gage_Skidmore.jpg',
                char: 'Frank Reynolds',
            },
        ],
    },
    {
        name: 'The Expanse',
        id: 'expanse',
        link: {
            primeVideo: 'B08MMJTJSH',
        },
        info: {
            service: 'prime',
            studio: 'prime',
            location: 'Prime Video',
            date: 'Dec 10, 2021',
            // weekday: '',
            desc: {
                seasons: 6,
                yearStart: 2015,
                yearEnd: null,
                genre: [
                    'action & adventure',
                    'sci-fi',
                ],
            },
            summary: "Hundreds of years in the future, things are different than what we are used to after humans have colonized the solar system and Mars has become an independent military power. Rising tensions between Earth and Mars have put them on the brink of war. Against this backdrop, a hardened detective and a rogue ship's captain come together to investigate the case of a missing young woman. The investigation leads them on a race across the solar system that could expose the greatest conspiracy in human history.",
        },
        style: {
            color: '466A83',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '280619',
            reelgoodLink: 'https://reelgood.com/show/the-expanse-2015',
            imdbID: 'tt3230854',
            subReddit: 'TheExpanse',
        },
    },
    {
        name: "The King's Man",
        id: 'kingsMan',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            // studio: 'studio',
            location: 'Coming Soon',
            date: 'Dec 22, 2021',
            desc: {
                year: 2021,
                genre: [
                    'spy',
                    'comedy',
                ],
            },
            summary: "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions.",
        },
        style: {
            color: '444f52',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/the-kings-man-2020',
            imdbID: 'tt6856242',
        },
    },
    {
        name: 'The Mandalorian',
        id: 'mando',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            service: 'disney',
            studio: 'starwars',
            location: 'Disney+',
            date: 'Dec 24, 2021',
            // weekday: '',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'action & adventure',
                    'sci-fi',
                    'star wars',
                ],
            },
            summary: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
        },
        style: {
            color: '4d627f',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '361753',
            reelgoodLink: 'https://reelgood.com/show/the-mandalorian-2019',
            imdbID: 'tt8111088',
            subReddit: 'TheMandalorianTV',
        },
    },
    {
        name: 'Attack on Titan',
        id: 'attack',
        link: 'https://www.hulu.com/series/attack-on-titan-9c91ffa3-dc20-48bf-8bc5-692e37c76d88',
        info: {
            service: 'hulu',
            // studio: 'studio',
            location: 'Hulu',
            date: 'Jan 9, 2022',
            // weekday: '',
            desc: {
                seasons: 4,
                yearStart: 2013,
                yearEnd: 2022,
                genre: [
                    'action & adventure',
                    'animation',
                ],
            },
            summary: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
        },
        style: {
            color: 'a98264',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '267440',
            reelgoodLink: 'https://reelgood.com/show/attack-on-titan-2013',
            imdbID: 'tt2560140',
            subReddit: 'attackontitan',
        },
    },
    {
        name: 'Ozark',
        id: 'ozark',
        link: {
            netflix: '80117552'
        },
        info: {
            service: 'netflix',
            // studio: 'studio',
            location: 'Neftlix',
            date: 'Jan 21, 2022',
            // weekday: '',
            desc: {
                seasons: 4,
                yearStart: 2017,
                yearEnd: null,
                genre: [
                    'crime',
                    'drama',
                ],
            },
            summary: "After his business partner cheats a dangerous client, financial adviser Marty must devise a radical plan to save the lives of himself and his family.",
        },
        style: {
            color: '660000',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '329089',
            reelgoodLink: 'https://reelgood.com/show/ozark-2017',
            imdbID: 'tt5071412',
            subReddit: 'Ozark',
        },
    },
    {
        name: "Billions",
        id: "billions",
        link: null,
        info: {
            // service: '',
            studio: 'showtime',
            location: "Showtime",
            date: 'Jan 23, 2022',
            desc: {
                seasons: 5,
                yearStart: 2016,
                yearEnd: null,
                genre: [
                    'drama',
                    'money',
                ],
            },
            summary: "Wealth, influence and corruption collide in this drama set in New York. Shrewd U.S. Attorney Chuck Rhoades is embroiled in a high-stakes game of predator vs. prey with Bobby Axelrod, an ambitious hedge-fund king. To date, Rhoades has never lost an insider trading case -- he's 81-0 -- but when criminal evidence turns up against Axelrod, he proceeds cautiously in building the case against Axelrod, who employs Rhoades' wife, psychiatrist Wendy, as a performance coach for his company.",
        },
        style: {
            color: '6f4c2d',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: "279536",
            reelgoodLink: "https://reelgood.com/show/billions-2016",
            imdbID: "tt4270492",
            subReddit: 'Billions'
        },
    },
    {
        name: 'Snowpiercer',
        id: 'snowpiercer',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            service: 'hbo',
            // studio: 'tnt',
            location: 'HBO Max',
            date: 'Jan 24, 2022',
            // weekday: '',
            desc: {
                seasons: 3,
                yearStart: 2020,
                yearEnd: null,
                genre: [
                    'drama',
                    'sci-fi',
                ],
            },
            summary: "Set more than seven years after the world has become a frozen wasteland, the remnants of humanity inhabit a gigantic, perpetually-moving train that circles the globe as class warfare, social injustice and the politics of survival play out.",
        },
        style: {
            color: '444743',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/snowpiercer-1',
            imdbID: 'tt6156584',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Jurassic World: Dominion',
        id: 'jurassic6',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            studio: 'universal',
            location: 'Coming Soon',
            date: 'Jun 10, 2022',
            desc: {
                year: 2022,
                genre: [
                    'action & adventure',
                    'sci-fi',
                ],
            },
            summary: "Coming soon.",
        },
        style: {
            color: '595441',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'tall',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/jurassic-world-dominion-2021',
            imdbID: 'tt8041270',
        },
    },
]
const movieData7 = [
    {
        name: 'Alice in Borderland',
        id: 'alice',
        link: {
            netflix: '80200575'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Coming Soon',
            // date: '',
            // weekday: '',
            // desc: {
            //     seasons: 2,
            //     yearStart: 2020,
            //     yearEnd: null,
            //     genre: [
            //         'crime',
            //         'comedy',
            //     ],
            // },
            // summary: "summary",
        },
        style: {
            // color: '000000',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: "Atlanta",
        id: "atlanta",
        link: "https://www.hulu.com/series/atlanta-3529d0f1-acaf-476d-8be3-66cd6bf12530",
        info: {
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
            description: "Comedy &#149 Drama &#149 Music &#149 2 Seasons &#149 2016 - Present",
            summary: "Based in Atlanta, Earn and his cousin Alfred try to make their way in the world through the rap scene. Along the way they come face to face with social and economic issues touching on race, relationships, poverty, status, and parenthood.",
        },
        style: {
            color: '584029',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: "313999",
            reelgoodLink: "https://reelgood.com/show/atlanta-2016",
            imdbID: "tt4288182",
        },
    },
    {
        name: 'The Boys',
        id: 'boys',
        // link: 'watchlink',
        info: {
            // service: '',
            // studio: '',
            location: 'Coming Soon',
            // description: 'Action &#149 Crime &#149 Drama &#149 2 Seasons &#149 2019 - Present',
            // summary: "summary",
        },
        style: {
            color: '660000',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
        },
        apps: {
            // tvTimeID: null,
            reelgoodLink: 'https://reelgood.com/show/the-boys-2019',
            imdbID: 'tt1190634',
            subReddit: 'TheBoys',
        },
    },
    {
        name: 'Disenchantment',
        id: 'disenchant',
        link: {
            netflix: '80095697'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Coming Soon',
            // date: '',
            // weekday: '',
            // desc: {
            //     seasons: 2,
            //     yearStart: 2020,
            //     yearEnd: null,
            //     genre: [
            //         'crime',
            //         'comedy',
            //     ],
            // },
            // summary: "summary",
        },
        style: {
            // color: '000000',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Falcon and the Winter Soldier',
        id: 'falcon',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            service: 'disney',
            studio: 'marvel',
            location: 'Disney+',
            // date: '',
            // weekday: '',
            // desc: {
            // //    seasons: 1,
            // //    yearStart: 2021,
            // //    yearEnd: null,
            // //    genre: [
            // //        'crime',
            // //        'comedy',
            // //    ],
            // },
            // summary: "summary",
        },
        style: {
            // color: '000000',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Inside Job',
        id: 'insideJob',
        link: {
            netflix: '80995819'
        },
        info: {
            service: 'netflix',
            // studio: 'studio',
            location: 'Netflix',
            date: '',
            weekday: '',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'animation',
                    'comedy',
                ],
            },
            summary: "Lizard people? Real. The moon landing? Fake. Managing the world's conspiracies is a full-time job for an awkward genius and her dysfunctional co-workers.",
        },
        style: {
            color: '1e3d51',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'webp',
            mobileSize: '1',
        },
        apps: {
            tvTimeID: '365098',
            reelgoodLink: 'https://reelgood.com/show/inside-job-2021',
            imdbID: 'tt10231312',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Invincible',
        id: 'invincible',
        // link: 'watchlink',
        info: {
            // service: '',
            // studio: '',
            location: 'Coming Soon',
            // description: 'Action &#149 Animation &#149 Superhero &#149 ___ Seasons &#149 Y000 - Present',
            // summary: "summary",
        },
        style: {
            color: '6C7866',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            // tvTimeID: null,
            reelgoodLink: 'https://reelgood.com/show/invincible-2021',
            // imdbID: 'identifier',
            // subReddit: null,
        },
    },
    {
        name: 'Loki',
        id: 'loki',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            service: 'disney',
            studio: 'marvel',
            location: 'Disney+',
            // date: '',
            // weekday: '',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'fantasy',
                    'sci-fi',
                    'MCU',
                ],
            },
            summary: "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
        },
        style: {
            color: 'a87643',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
        },
        apps: {
            tvTimeID: '362472',
            reelgoodLink: 'https://reelgood.com/show/loki-2021',
            imdbID: 'tt9140554',
            // subReddit: null,
        },
    },
    {
        name: "Love Death Robots",
        id: "ldr",
        link: 'https://www.netflix.com/title/80174608',
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: "Netflix",
            description: "Animation &#149 Sci-Fi &#149 2 Seasons &#149 2019 - Present",
            summary: "This collection of animated short stories spans several genres, including science fiction, fantasy, horror and comedy. World-class animation creators bring captivating stories to life in the form of a unique and visceral viewing experience. The animated anthology series includes tales that explore alternate histories, life for robots in a post-apocalyptic city and a plot for world domination by super-intelligent yogurt. Among the show's executive producers is Oscar-nominated director David Fincher.",
        },
        style: {
            color: '200f17',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: "357888",
            reelgoodLink: "https://reelgood.com/show/love-death-robots-2019",
            imdbID: "tt9561862",
            subReddit: "LoveDeathAndRobots",
        },
    },
    {
        name: 'Manifest',
        id: 'manifest',
        // link: 'watchlink',
        info: {
            service: 'netflix',
            // studio: '',
            location: 'Coming Soon',
            description: 'Drama &#149 Mystery &#149 3 Seasons &#149 2018 - Present',
            summary: "A commercial airliner suddenly reappears after being missing for five years. As those aboard reintegrate into society, they experience guiding voices and visions of events yet to occur, and soon a deeper mystery unfolds.",
        },
        style: {
            color: '504A6A',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: '349271',
            reelgoodLink: 'https://reelgood.com/show/manifest-2018',
            imdbID: 'tt8421350',
            subReddit: 'ManifestNBC',
        },
    },
    {
        name: 'Mythic Quest',
        id: 'mythic',
        link: null,
        info: {
            // service: '',
            // studio: '',
            location: 'Coming Soon',
            // description: 'Genre1 &#149 Genre2 &#149 Genre2 &#149 ___ Seasons &#149 Y000 - Y999',
            // summary: "summary",
        },
        style: {
            color: '2F322F',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            // tvTimeID: null,
            reelgoodLink: 'https://reelgood.com/show/mythic-quest-2020',
            // imdbID: 'identifier',
            subReddit: 'MythicQuest',
        },
    },
    {
        name: 'Nine Perfect Strangers',
        id: 'nine',
        link: 'https://www.hulu.com/series/nine-perfect-strangers-2be55e1a-4c31-4af6-aa25-e5c85528b73a',
        info: {
            service: 'hulu',
            studio: 'hulu',
            location: 'Hulu',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'drama',
                    'mystery',
                ],
            },
            summary: "Based on The New York Times bestselling book by author Liane Moriarty, “Nine Perfect Strangers” takes place at a boutique health-and-wellness resort that promises healing and transformation as nine stressed city dwellers try to get on a path to a better way of living. Watching over them during this 10-day retreat is the resort's director, Masha, a woman on a mission to reinvigorate their tired minds and bodies. However, these nine “perfect” strangers have no idea what is about to hit them.",
        },
        style: {
            color: '6b7790',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: '376815',
            reelgoodLink: 'https://reelgood.com/show/nine-perfect-strangers',
            imdbID: 'tt8760932',
            subReddit: 'nineperfectstrangers',
        },
    },
    {
        name: "Only Murders in the Building",
        id: "murders",
        link: "https://www.hulu.com/series/ef31c7e1-cd0f-4e07-848d-1cbfedb50ddf",
        info: {
            service: 'hulu',
            studio: 'hulu',
            location: 'Hulu',
            // weekday: 'Tuesday',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'crime',
                    'comedy',
                    'drama',
                ],
            },
            summary: "From the minds of Steve Martin, Dan Fogelman & John Hoffman comes a comedic murder-mystery series for the ages. Only Murders in the Building follows three strangers (Steve Martin, Martin Short, and Selena Gomez) who share an obsession with true crime and suddenly find themselves wrapped up in one. When a grisly death occurs inside their exclusive Upper West Side apartment building, the trio suspects murder and employs their precise knowledge of true crime to investigate the truth. As they record a podcast of their own to document the case, the three unravel the complex secrets of the building which stretch back years. Perhaps even more explosive are the lies they tell one another. Soon, the endangered trio comes to realize a killer might be living amongst them as they race to decipher the mounting clues before it’s too late.",
        },
        style: {
            color: '292A27',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "mid",
        },
        apps: {
            tvTimeID: "399959",
            reelgoodLink: "https://reelgood.com/show/only-murders-in-the-building-2021",
            imdbID: "tt12851524",
            subReddit: 'OnlyMurdersHulu',
        },
    },
    {
        name: 'Paradise PD',
        id: 'paradise',
        link: {
            netflix: '80191522'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            // date: '',
            // weekday: '',
            // desc: {
            // //    seasons: 1,
            // //    yearStart: 2021,
            // //    yearEnd: null,
            // //    genre: [
            // //        'crime',
            // //        'comedy',
            // //    ],
            // },
            // summary: "summary",
        },
        style: {
            // color: '000000',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Peaky Blinders',
        id: 'peaky',
        link: 'https://www.netflix.com/title/80002479',
        info: {
            // service: '',
            // studio: '',
            location: 'Coming Soon',
            description: 'Crime &#149 Drama &#149 5 Seasons &#149 2013 - Present',
            // summary: "summary",
        },
        style: {
            color: '493c35',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            // tvTimeID: null,
            reelgoodLink: 'https://reelgood.com/show/peaky-blinders-2013',
            imdbID: 'tt2442560',
            // subReddit: null,
        },
    },
    {
        name: 'Rick and Morty',
        id: 'rick',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            // studio: 'studio',
            location: 'Adult Swim',
            date: '',
            weekday: '',
            desc: {
                seasons: 5,
                yearStart: 2013,
                yearEnd: null,
                genre: [
                    'animation',
                    'comedy',
                    'sci-fi',
                ],
            },
            summary: "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty.s already unstable family life, these events cause Morty much distress at home and school.",
        },
        style: {
            color: '2D1D54',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: '275274',
            reelgoodLink: 'https://reelgood.com/show/rick-and-morty-2013',
            imdbID: 'tt2861424',
            subReddit: 'rickandmorty',
        },
        cast: [
            {
                actor: 'Justin Roiland',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Justin_Roiland_%2836434635662%29.jpg/1200px-Justin_Roiland_%2836434635662%29.jpg',
                char: 'Rick Sanchez, Morty Smith',
            },
            {
                actor: 'Chris Parnell',
                image: 'https://static.wikia.nocookie.net/adam-ruins-everything/images/9/96/Chris_Parnell.jpg',
                char: 'Jerry Smith',
            },
            {
                actor: 'Sarah Chalke',
                image: 'https://www.northernstars.ca/wp-content/uploads/2017/08/Sarah_Chalke-500-640x800.jpg',
                char: 'Beth Smith',
            },
            {
                actor: 'Spencer Grammer',
                // image: 'url',
                char: 'Summer Smith',
            },
        ],
    },
    {
        name: 'Snowfall',
        id: 'snowfall',
        // link: 'watchlink',
        info: {
            // service: '',
            // studio: '',
            location: 'Coming Soon',
            // description: 'Genre1 &#149 Genre2 &#149 Genre2 &#149 ___ Seasons &#149 Y000 - Y999',
            // summary: "summary",
        },
        style: {
            color: '1A114D',
            posterType: 'jpeg',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            // tvTimeID: null,
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: null,
        },
    },
    {
        name: 'Squid Game',
        id: 'squid',
        link: {
            netflix: '81040344',
        },
        info: {
            service: 'netflix',
            // studio: '',
            location: 'Netflix',
            description: 'Action &#149 Adventure &#149 Drama &#149 1 Season &#149 2021 - Present',
            summary: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits - with deadly high stakes.",
        },
        style: {
            color: '3f1513', // 7C4E31
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: '383275',
            reelgoodLink: 'https://reelgood.com/show/squid-game-2021',
            imdbID: 'tt10919420',
            subReddit: 'squidgame',
        },
    },
    {
        name: "Ted Lasso",
        id: "ted",
        link: 'https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy',
        info: {
            service: 'appleTV',
            studio: 'appleTV',
            location: "Apple TV+",
            weekday: 'Friday',
            desc: {
                seasons: 2,
                yearStart: 2020,
                yearEnd: null,
                genre: [
                    'comedy',
                    'drama',
                    'sport',
                ],
            },
            summary: "Ted Lasso, an American football coach, moves to England when he’s hired to manage a soccer team—despite having no experience. With cynical players and a doubtful town, will he get them to see the Ted Lasso Way?",
        },
        style: {
            color: '35465e',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: "383203",
            reelgoodLink: "https://reelgood.com/show/ted-lasso-2020",
            imdbID: "tt10986410",
            subReddit: "TedLasso",
        },
        cast: [
            {
                actor: 'Jason Sudeikis',
                image: 'https://is2-ssl.mzstatic.com/image/thumb/AgXPsy2GlFurBYHRquyjeQ/492x492ve.webp',
                char: 'Ted Lasso',
            },
            {
                actor: 'Hannah Waddingham',
                image: 'https://is3-ssl.mzstatic.com/image/thumb/U6GiaSTux3G9QH9TlhMRZg/492x492ve.webp',
                char: 'Rebecca Welton',
            },
            {
                actor: 'Juno Temple',
                image: 'https://is1-ssl.mzstatic.com/image/thumb/yuUiq_Yf9rwApABQwQ2Puw/492x492ve.webp',
                char: 'Keeley Jones',
            },
            {
                actor: 'Jeremy Swift',
                image: 'https://is4-ssl.mzstatic.com/image/thumb/37A2yAcEOqpu6sMk6of4Dg/492x492ve.webp',
                char: 'Higgins',
            },
            {
                actor: 'Phil Dunster',
                image: 'https://is3-ssl.mzstatic.com/image/thumb/r7YVz00Gfg-4PCrlnBj4jA/492x492ve.webp',
                char: 'Jaime Tartt',
            },
            {
                actor: 'Brett Goldstein',
                image: 'https://is3-ssl.mzstatic.com/image/thumb/nxwtHIicKZUbrQQ_0GlISA/492x492ve.webp',
                char: 'Roy Kent',
            },
            {
                actor: 'Brendan Hunt',
                image: 'https://is3-ssl.mzstatic.com/image/thumb/tjFBadTW13u_cEJJXNjH9A/492x492ve.webp',
                char: 'Coach Beard',
            },
            {
                actor: 'Nick Mohammed',
                image: 'https://is2-ssl.mzstatic.com/image/thumb/3oivPHwZya0T-EKJHJXSvA/492x492ve.webp',
                char: 'Nathan Shelley',
            },
        ],
    },
    {
        name: "What We Do in the Shadows",
        id: "shadows",
        link: "https://www.hulu.com/series/what-we-do-in-the-shadows-0b10c46a-12f0-4357-8a00-547057b49bac",
        info: {
            service: 'hulu',
            studio: 'fx',
            location: 'Hulu',
            weekday: 'Friday',
            desc: {
                seasons: 3,
                yearStart: 2019,
                yearEnd: null,
                genre: [
                    'comedy',
                    'drama',
                    'fantasy',
                ],
            },
            summary: "Three vampires, Nandor, Colin Robinson and Nadja, struggle to keep up with the duties and responsibilities of everyday life as they reside in an apartment in New York.",
        },
        style: {
            color: '1C2C70',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: "358211",
            reelgoodLink: "https://reelgood.com/show/what-we-do-in-the-shadows-2019",
            imdbID: "tt7908628",
            subReddit: 'WhatWeDointheShadows',
        },
        cast: [
            {
                actor: 'Kayvan Novak',
                image: 'https://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/6201/original/Kayvan-Novak.jpg',
                char: 'Nandor the Relentless',
            },
            {
                actor: 'Matt Berry',
                image: 'https://m.media-amazon.com/images/M/MV5BMTgzMjQ0NTc5Nl5BMl5BanBnXkFtZTcwMDc0MDYwOA@@._V1_.jpg',
                char: 'Laszlo Cravensworth',
            },
            {
                actor: 'Natasia Demetriou',
                image: 'https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/natasia-demetriou-headshot.jpg',
                char: 'Nadja',
            },
            {
                actor: 'Harvey Guillen',
                image: 'https://m.media-amazon.com/images/M/MV5BNjUxYjViMTYtZWZkOS00MzVjLTk4MmYtNTcyMzdjYzQ3NWNhXkEyXkFqcGdeQXVyNzY4MDEyMDI@._V1_.jpg',
                char: 'Guillermo de la Cruz',
            },
            {
                actor: 'Mark Proksch',
                image: 'https://cps-static.rovicorp.com/2/Open/Getty_Images_406/Person/1177610/_derived_jpg_q90_310x470_m0/Mark_Proksch_C_V01.jpg',
                char: 'Colin Robinson',
            },
        ],
    },
]
const movieData8 = [
    {
        name: 'New Girl',
        id: 'newgirl',
        link: {
            netflix: '70196145',
        },
        info: {
            service: 'netflix',
            // studio: 'studio',
            location: 'Netflix',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'comedy',
                    'romance',
                    'friends',
                ],
            },
            summary: "Searching for answers, a socially awkward but endearing teacher moves in with three bachelors who think they understand love but are equally as lost.",
        },
        style: {
            color: 'a59c4f',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: null,
            reelgoodLink: 'https://reelgood.com/show/new-girl-2011',
            imdbID: 'tt1826940',
            // subReddit: null,
        },
        cast: [
            {
                actor: 'Zooey Deschanel',
                image: 'https://static.wikia.nocookie.net/disney/images/7/79/Zooey_Deschanel.jpg',
                char: 'Jessica Day',
            },
            {
                actor: 'Jake Johnson',
                image: 'https://static.wikia.nocookie.net/smurfs/images/8/8c/Jake-johnson-paleyfest-2012-02.jpg',
                char: 'Nick',
            },
            {
                actor: 'Max Greenfield',
                image: 'https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/neighborhood_max_800x1000.jpg',
                char: 'Schmidt',
            },
            {
                actor: 'Hannah Simone',
                image: 'https://media.glamour.com/photos/5695a50d16d0dc3747ed0549/master/pass/beauty-2014-07-hannah-simone-without-bangs-hair-main.jpg',
                char: 'Cece Parekh',
            },
            {
                actor: 'Lamorne Morris',
                image: 'https://static.wikia.nocookie.net/newgirl/images/7/76/Morris.jpg',
                char: 'Winston Bishop',
            },
            {
                actor: 'Damon Wayans Jr.',
                image: 'https://i.ticketweb.com/i/00/09/10/86/11/Original.jpg?v=2?v=3',
                char: 'Coach',
            },
            {
                actor: 'Nasim Pedrad',
                image: 'https://m.media-amazon.com/images/M/MV5BMjI2NTY1NzEzM15BMl5BanBnXkFtZTgwNzExMjg1NTM@._V1_.jpg',
                char: 'Aly Nelson',
            },
            {
                actor: 'Nelson Franklin',
                image: 'https://static.wikia.nocookie.net/marvelmovies/images/5/59/Nelson_Franklin.jpg',
                char: 'Robby',
            },
            {
                actor: 'Megan Fox',
                image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTU4NzU4OTc3MDIxMDUw/gettyimages-843456920.jpg',
                char: 'Reagan',
            },
        ],
    },
    {
        name: 'The League',
        id: 'league',
        link: 'https://www.hulu.com/series/the-league-6723b153-45c2-43a4-947f-7cc64ef7f2a3',
        info: {
            service: 'hulu',
            // studio: 'studio',
            location: 'Hulu',
            desc: {
                seasons: 7,
                yearStart: 2009,
                yearEnd: 2015,
                genre: [
                    'comedy',
                    'sport',
                ],
            },
            summary: "The League is an American sitcom and semi-improvised comedy about a about a fantasy football league and its members and their everyday lives.",
        },
        style: {
            color: '003A6E',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/the-league-2009',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Bojack Horseman',
        id: 'bojack',
        link: {
            netflix: '70300800'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            desc: {
                seasons: 6,
                yearStart: 2014,
                yearEnd: 2020,
                genre: [
                    'animation',
                    'comedy',
                ],
            },
            summary: "Meet the most beloved sitcom horse of the '90s, 20 years later. He’s a curmudgeon with a heart of...not quite gold...but something like gold. Copper?",
        },
        style: {
            color: '656592',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/bojack-horseman-2014',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
        // cast: [
        //     {
        //         actor: 'name',
        //         image: 'url',
        //         char: 'name',
        //     },
        // ],
    },
    {
        name: 'Game of Thrones',
        id: 'gameofthrones',
        // link: 'watchlink',
        info: {
            // service: '',
            // studio: '',
            location: 'HBO Max',
            description: 'Action &#149 Adventure &#149 Fantasy &#149 8 Seasons &#149 2011 - 2019',
            summary: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        },
        style: {
            color: '4e3e46',
            posterType: 'jpg',
            titleType: 'svg',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: null,
            // reelgoodLink: 'link',
            imdbID: 'tt0944947',
            // subReddit: null,
        },
    },
    {
        name: 'Fresh Prince of Bel-Air',
        id: 'fresh',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GXdLWQgqPHKXCPQEAAAxk:type:series',
        info: {
            service: 'hbo',
            // studio: 'studio',
            location: 'HBO Max',
            desc: {
                seasons: 6,
                yearStart: 1990,
                yearEnd: 1996,
                genre: [
                    'comedy',
                    'family',
                ],
            },
            summary: "Will, a street-smart teenager, moves from the tough streets of West Philly to posh Bel-Air to live with his Uncle Philip, Aunt Vivian, his cousins — spoiled Hilary, preppy Carlton and young Ashley — and their sophisticated British butler, Geoffrey. Though Will’s antics and upbringing contrast greatly with the upper-class lifestyle of his extended relatives, he soon finds himself right at home as a loved part of the family.",
        },
        style: {
            color: '754A9E',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '76738',
            reelgoodLink: 'https://reelgood.com/show/the-fresh-prince-of-bel-air-1990',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: "Lost",
        id: "lost",
        link: "https://www.hulu.com/series/lost-466b3994-b574-44f1-88bc-63707507a6cb",
        info: {
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
            description: "Action &#149 Adventure &#149 6 Seasons &#149 2004 - 2010",
            summary: "The survivors of a plane crash find themselves stranded on a mysterious island. They are forced to work together for their survival when they realise that they are not alone on the island.",
        },
        style: {
            color: '6a5828',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: "73739",
            reelgoodLink: "https://reelgood.com/show/lost-2004",
            imdbID: "tt0411008",
        },
    },
    {
        name: 'The Office',
        id: 'office',
        link: 'https://www.peacocktv.com/watch/asset/tv/the-office/4902514835143843112',
        info: {
            // service: 'peacock',
            // studio: 'studio',
            location: 'Peacock',
            desc: {
                seasons: 9,
                yearStart: 2005,
                yearEnd: 2013,
                genre: [
                    'comedy',
                    'mockumentary',
                ],
            },
            summary: "The everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.",
        },
        style: {
            color: '7E6C64',
            posterType: 'jpg',
            titleType: 'svg',
            titleSize: 'wide',
            mobileType: 'png',
            mobileSize: '8 / 10',
        },
        apps: {
            // tvTimeID: null,
            reelgoodLink: 'https://reelgood.com/show/the-office-2005',
            // imdbID: 'identifier',
            // subReddit: null,
        },
        // cast: [
        //     {
        //         actor: 'name',
        //         image: 'url',
        //         char: 'name',
        //     },
        // ],
    },
    {
        name: "Brooklyn Nine-Nine",
        id: "brooklyn",
        link: "https://www.hulu.com/series/brooklyn-nine-nine-daf48b7a-6cd7-4ef6-b639-a4811ec95232",
        info: {
            service: 'hulu',
            studio: 'nbc',
            location: 'Hulu',
            desc: {
                seasons: 8,
                yearStart: 2013,
                yearEnd: 2021,
                genre: [
                    'comedy',
                    'crime',
                ],
            },
            summary: "Detective Jake Peralta, a talented and carefree cop with the best arrest record, has never had to follow the rules too closely or work very hard. That changes when Ray Holt, a man with a lot to prove, becomes the new commanding officer of Brooklyn's 99th precinct. As Holt reminds Peralta to respect the badge, an extremely competitive colleague - Detective Amy Santiago - starts to close in on the hotshot cop's arrest record.",
        },
        style: {
            color: '8b6a4b',
            posterType: 'webp',
            titleType: 'png',
            titleSize: "tall",
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: "269586",
            reelgoodLink: "https://reelgood.com/show/brooklyn-nine-nine-2013",
            imdbID: "tt2467372",
            subReddit: 'brooklynninenine',
        },
    },
    {
        name: 'Silicon Valley',
        id: 'silicon',
        link: 'https://www.hulu.com/series/silicon-valley-a53a72e7-afd9-4f50-bda8-ae887ff0683d',
        info: {
            service: 'hbo',
            studio: 'hbo',
            location: 'Hulu',
            desc: {
                seasons: 6,
                yearStart: 2014,
                yearEnd: 2019,
                genre: [
                    'comedy',
                    'tech',
                ],
            },
            summary: "In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. Partially inspired by Mike Judge’s own experiences as a Silicon Valley engineer in the late ‘80s, Silicon Valley is an American sitcom that centers around six programmers who are living together and trying to make it big in the Silicon Valley.",
        },
        style: {
            color: 'D4584B',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '8.4 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/silicon-valley-2014',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Blue Mountain State',
        id: 'bms',
        link: {
            primeVideo: 'B08CG43CLR'
        },
        info: {
            service: 'prime',
            // studio: 'studio',
            location: 'Prime Video',
            desc: {
                seasons: 3,
                yearStart: 2010,
                yearEnd: 2011,
                genre: [
                    'comedy',
                    'sport',
                ],
            },
            summary: "At Blue Mountain State, the benefits of being a player on one of the most successful football programs in the nation are just too good to pass up... beautiful girls, campus-wide celebrity and wild keg parties make college life a young man's dream. The new Freshman players on this notorious team are about to learn the extreme highs -- as well as the pitfalls - of being one of the chosen few.",
        },
        style: {
            color: '7d7787',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'tall',
            mobileType: 'png',
            mobileSize: '9 / 10',
        },
        apps: {
            tvTimeID: '134511',
            reelgoodLink: 'https://reelgood.com/show/blue-mountain-state-2010',
            imdbID: 'tt1344204',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Darin Brooks',
                image: 'https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w425-q80/cast/bb_cast_darin_brooks_800x1000.jpg',
                char: 'Alex Moran',
            },
            {
                actor: 'Alan Ritchson',
                image: 'https://static.wikia.nocookie.net/tmnt/images/5/50/Alan-ritchson-premiere-steam-01.jpg',
                char: 'name',
            },
            {
                actor: 'Chris Romano',
                image: 'https://www.themoviedb.org/t/p/w235_and_h235_face/qaUN5cJYHWBwDBn40yEuWXQwMfg.jpg',
                char: 'Sammy Cacciatore',
            },
            {
                actor: 'Ed Marino',
                image: 'https://playersbio.com/wp-content/uploads/2020/06/ed-003.jpg',
                char: 'Coach Marty Daniels',
            },
            {
                actor: 'Denise Richards',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Denise_Richards_2009.jpg',
                char: 'Debra',
            },
            {
                actor: 'Frankie Shaw',
                image: 'https://m.media-amazon.com/images/M/MV5BNzliMWQ1OTItMjhiNy00YzExLWE3NzEtZDgwYTM0ODA2NTYzXkEyXkFqcGdeQXVyNzMzNzYzNg@@._V1_.jpg',
                char: 'Mary Jo Cacciatore',
            },
            {
                actor: 'Sam Jones III',
                image: 'https://static.wikia.nocookie.net/tvdatabase/images/7/74/Sam_Jones%2C_III.jpg',
                char: 'Craig Shilo',
            },
            {
                actor: 'Page Kennedy',
                image: 'https://parlemag.com/wp-content/uploads/2016/06/Page-Kennedy.jpg',
                char: 'Radon Randell',
            },
        ],
    },
    {
        name: 'White Collar',
        id: 'whiteCollar',
        link: 'https://www.hulu.com/series/white-collar-58d3d0ce-8d86-4ccd-bd0c-104551448432',
        info: {
            service: 'hulu',
            // studio: 'studio',
            location: 'Hulu',
            desc: {
                seasons: 6,
                yearStart: 2009,
                yearEnd: 2014,
                genre: [
                    'crime',
                ],
            },
            summary: "White Collar is about the unlikely partnership of a con artist and an FBI agent who have been playing cat and mouse for years. Neal Caffrey (Matt Bomer), a charming criminal mastermind, is finally caught by his nemesis, FBI Agent Peter Burke (Tim DeKay.)",
        },
        style: {
            color: '615c59',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '9 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/white-collar-2009',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'How I Met Your Mother',
        id: 'himym',
        link: 'https://www.hulu.com/series/how-i-met-your-mother-bc68ac79-3ace-4427-9ec0-5ee6f314d194',
        info: {
            service: 'hulu',
            // studio: 'studio',
            location: 'Hulu',
            desc: {
                seasons: 9,
                yearStart: 2005,
                yearEnd: 2014,
                genre: [
                    'comedy',
                    'romance',
                    'friends',
                ],
            },
            summary: "A half-hour comedy series about Ted and how he fell in love. It all started when Ted’s best friend, Marshall, drops the bombshell that he’s going to propose to his long-time girlfriend, Lily, a kindergarten teacher. At that moment, Ted realizes that he had better get a move on if he hopes to find true love, too.",
        },
        style: {
            color: '60B9C6',
            posterType: 'jpg',
            titleType: 'svg',
            titleSize: 'tall',
            mobileType: 'webp',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '75760',
            reelgoodLink: 'https://reelgood.com/show/how-i-met-your-mother-2005',
            imdbID: 'tt0460649',
            subReddit: 'HIMYM',
        },
        cast: [
            {
                actor: 'Josh Radnor',
                image: 'https://m.media-amazon.com/images/M/MV5BMjAwNTUxMTM4OF5BMl5BanBnXkFtZTcwNjUyNzc4Mg@@._V1_UY264_CR4,0,178,264_AL_.jpg',
                char: 'Ted Mosby',
            },
            {
                actor: 'Jason Segel',
                image: 'https://m.media-amazon.com/images/M/MV5BMTUwNzcxNzM1Nl5BMl5BanBnXkFtZTgwNzA5NzU4MjE@._V1_.jpg',
                char: 'Marshall Eriksen',
            },
            {
                actor: 'Cobie Smulders',
                image: 'https://static.wikia.nocookie.net/snicket/images/d/d7/Cobiesmulders5.jpg',
                char: 'Robin Scherbatsky',
            },
            {
                actor: 'Neil Patrick Harris',
                image: 'https://m.media-amazon.com/images/M/MV5BMTUxNjQ4MjU5Ml5BMl5BanBnXkFtZTcwMTY5NzAzNw@@._V1_.jpg',
                char: 'Barney Stinson',
            },
            {
                actor: 'Alyson Hannigan',
                image: 'https://m.media-amazon.com/images/M/MV5BMTkxODc5ODI5OV5BMl5BanBnXkFtZTcwNzExOTUyNw@@._V1_.jpg',
                char: 'Lily Aldrin',
            },
        ],
    },
]
const movieData9 = [
    {
        name: 'Jurassic Park',
        id: 'jurassic1',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYJlJDwG96Q_DwgEAAAA1:type:feature',
        info: {
            service: 'hbo',
            studio: 'universal',
            location: 'HBO Max',
            desc: {
                year: 1993,
                genre: [
                    'action & adventure',
                    'sci-fi',
                ],
            },
            summary: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        },
        style: {
            color: '3c2d2a',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'tall',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/jurassic-park-1993',
            imdbID: 'tt0107290',
        },
    },
    {
        name: 'Raiders of the Lost Ark',
        id: 'indiana1',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            // studio: 'studio',
            // location: 'location',
            desc: {
                year: 1981,
                genre: [
                    'action',
                    'adventure',
                ],
            },
            summary: "When Dr. Indiana Jones - the tweed-suited professor who just happens to be a celebrated archaeologist - is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
        },
        style: {
            color: '9a6a45',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/raiders-of-the-lost-ark-1981',
            imdbID: 'tt0082971',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Wall-E',
        id: 'walle',
        link: 'https://www.disneyplus.com/movies/wall-e/5G1wpZC2Lb6I',
        info: {
            service: 'disney',
            studio: 'disney',
            location: 'Disney+',
            desc: {
                year: 2008,
                genre: [
                    'animation',
                    'adventure',
                    'sci-fi',
                ],
            },
            summary: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
        },
        style: {
            color: '232055',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/walle-2008',
            imdbID: 'tt0910970',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Saving Private Ryan',
        id: 'saving',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            // studio: 'studio',
            // location: 'location',
            desc: {
                year: 1998,
                genre: [
                    'drama',
                    'war',
                ],
            },
            summary: "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
        },
        style: {
            color: '6f716b',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/saving-private-ryan-1998',
            imdbID: 'tt0120815',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Back to the Future',
        id: 'backToTheFuture1',
        // link: 'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
        info: {
            // service: 'disney',
            // studio: 'starwars',
            // location: 'Disney+',
            desc: {
                year: 1985,
                genre: [
                    'adventure',
                    'comedy',
                    'sci-fi',
                ],
            },
            summary: "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
        },
        style: {
            color: '605267',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/back-to-the-future-1985',
            imdbID: 'tt0088763',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Star Wars: Episode IV - A New Hope',
        id: 'starwars4',
        link: 'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
        info: {
            service: 'disney',
            studio: 'starwars',
            location: 'Disney+',
            desc: {
                year: 1977,
                genre: [
                    'adventure',
                    'sci-fi',
                    'star wars',
                ],
            },
            summary: "Luke Skywalker begins a journey that will change the galaxy in Star Wars: Episode IV - A New Hope. Nineteen years after the formation of the Empire, Luke is thrust into the struggle of the Rebel Alliance when he meets Obi-Wan Kenobi, who has lived for years in seclusion on the desert planet of Tatooine. Obi-Wan begins Luke’s Jedi training as Luke joins him on a daring mission to rescue the beautiful Rebel leader Princess Leia from the clutches of Darth Vader and the evil Empire. Contains tobacco depictions.",
        },
        style: {
            color: '372f35',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/star-wars-1977',
            imdbID: 'tt0076759',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Interstellar',
        id: 'interstellar',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            // studio: 'studio',
            // location: 'location',
            desc: {
                year: 2014,
                genre: [
                    'drama',
                    'sci-fi',
                ],
            },
            summary: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        },
        style: {
            color: '94a6ac',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/interstellar-2014',
            imdbID: 'tt0816692',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Avatar',
        id: 'avatar',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            service: 'disney',
            // studio: 'studio',
            location: 'Disney+',
            // date: '',
            // weekday: '',
            desc: {
                year: 2009,
                genre: [
                    'adventure',
                    'sci-fi',
                ],
            },
            summary: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        },
        style: {
            color: '106888',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/avatar-2009',
            imdbID: 'tt0499549',
            // subReddit: 'subreddit',
        },
        // cast: [
        //     {
        //         actor: 'name',
        //         image: 'url',
        //         char: 'name',
        //     },
        // ],
    },
]
const movieData10 = [
    {
        name: 'Scary Movie',
        id: 'scaryMovie',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            // studio: 'studio',
            location: 'Philo',
            desc: {
                year: 2000,
                genre: [
                    'comedy',
                    'horror',
                ],
            },
            summary: "A familiar-looking group of teenagers find themselves being stalked by a more-than-vaguely recognizable masked killer! As the victims begin to pile up and the laughs pile on, none of your favorite scary movies escape the razor-sharp satire of this outrageously funny parody!",
        },
        style: {
            color: '994d33',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '8 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/scary-movie-2000',
            imdbID: 'tt0175142',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Crazy Rich Asians',
        id: 'crazyRich',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GX6QtHQxBD5nCwwEAAAHM:type:feature',
        info: {
            service: 'hbo',
            // studio: 'studio',
            location: 'HBO Max',
            desc: {
                year: 2018,
                genre: [
                    'drama',
                    'romance',
                ],
            },
            summary: "An American-born Chinese economics professor accompanies her boyfriend to Singapore for his best friend's wedding, only to get thrust into the lives of Asia's rich and famous.",
        },
        style: {
            color: '76665b',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'tall',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/crazy-rich-asians-2018',
            imdbID: 'tt3104988',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Constance Wu',
                image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3NDc1NzUxNDE3ODgyMjc4/gettyimages-632702568.jpg',
                char: 'Rachel Chu',
            },
            {
                actor: 'Henry Golding',
                image: 'https://m.media-amazon.com/images/M/MV5BMTEzNzcwODU0ODJeQTJeQWpwZ15BbWU4MDQ5MzE4MDYz._V1_.jpg',
                char: 'Nick Young',
            },
            {
                actor: ' Michelle Yeoh',
                image: 'https://m.media-amazon.com/images/M/MV5BMTg0NTI0NDkzOF5BMl5BanBnXkFtZTcwMjYwMTIwNw@@._V1_.jpg',
                char: 'Eleanor Young',
            },
            {
                actor: 'Gemma Chan',
                image: 'https://m.media-amazon.com/images/M/MV5BYTI3ZDEwYjktZjVhYS00NTlhLTkwOWEtNjM1MzEyMWU5M2QyXkEyXkFqcGdeQXVyMTE3ODY2Nzk@._V1_.jpg',
                char: 'Astrid Young Teo',
            },
            {
                actor: 'Jimmy O. Yang',
                image: 'https://static.wikia.nocookie.net/criminalminds/images/0/0e/Jimmy_O._Yang.jpg',
                char: 'Bernard Tai',
            },
        ],
    },
    {
        name: 'Dave Chappelle: The Closer',
        id: 'closer',
        link: {
            netflix: '81228510'
        },
        info: {
            service: 'netflix',
            studio: 'netflix',
            location: 'Netflix',
            // date: '',
            // weekday: '',
            desc: {
                year: 2021,
                genre: [
                    'comedy',
                    // 'special',
                ],
            },
            summary: "As he closes out his slate of comedy specials, Dave takes the stage to try and set the record straight - and get a few things off his chest.",
        },
        style: {
            color: '6d223c',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/dave-chappelle-the-closer-2021',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Zindagi Na Milegi Dobara',
        id: 'zindagi',
        link: {
            netflix: '70202336'
        },
        info: {
            service: 'netflix',
            // studio: 'studio',
            location: 'Netflix',
            description: 'Drama &#149 Romance &#149 2011',
            summary: "Three friends on an adventurous road trip/bachelor party in Spain learn some lessons about themselves and each other that will change them forever.",
        },
        style: {
            color: '313B47',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'tall',
            mobileType: 'jpg',
            mobileSize: '1',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/zindagi-na-milegi-dobara-2011',
            imdbID: 'tt1562872',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'No Time to Die',
        id: 'noTime',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            // service: 'service',
            // studio: 'studio',
            location: 'Coming Soon',
            // date: '',
            // weekday: '',
            description: 'Action &#149 Spy &#149 2021',
            summary: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
        },
        style: {
            color: '3c4749',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/no-time-to-die-2020',
            imdbID: 'tt2382320',
            // subReddit: 'subreddit',
        },
    },
    {
        name: "Free Guy",
        id: "free",
        link: null,
        info: {
            // service: '',
            // studio: '',
            location: "Coming Soon",
            description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
            summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        },
        style: {
            color: '599DAA',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: null,
            reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
            imdbID: "tt6264654",
        },
    },
    {
        name: 'This is the End',
        id: 'theend',
        // link: 'watchlink',
        info: {
            // service: '',
            // studio: '',
            location: 'Starz',
            description: 'Comedy &#149 2013',
            summary: "Six Los Angeles celebrities are stuck in James Franco's house after a series of devastating events just destroyed the city. Inside, the group not only have to face the apocalypse, but themselves.",
        },
        style: {
            color: '3b2420',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: null,
            reelgoodLink: 'https://reelgood.com/movie/this-is-the-end-2013',
            imdbID: 'tt1245492',
            // subReddit: null,
        },
    },
    {
        name: 'Shang-Chi',
        id: 'shang',
        link: null,
        info: {
            service: 'disney',
            studio: 'disney',
            location: 'Disney+',
            desc: {
                year: 2021,
                genre: [
                    'action & adventure',
                    'fantasy',
                    'MCU',
                ],
            },
            summary: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
        },
        style: {
            color: '4b3831',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: null,
            reelgoodLink: "https://reelgood.com/movie/shangchi-and-the-legend-of-the-ten-rings-2021",
            imdbID: 'tt9376612',
        },
    },
    {
        name: 'Road to Perdition',
        id: 'roadToPerdition',
        // link: 'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
        info: {
            // service: 'disney',
            // studio: 'starwars',
            // location: 'Disney+',
            desc: {
                year: 2002,
                genre: [
                    'adventure',
                    'crime',
                    'thriller',
                ],
            },
            summary: "A mob enforcer's son in 1930s Illinois witnesses a murder, forcing him and his father to take to the road, and his father down a path of redemption and revenge.",
        },
        style: {
            color: '55534d',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'mid',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/road-to-perdition-2002',
            imdbID: 'tt0257044',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'Goodfellas',
        id: 'goodfellas',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYEZm4Qn1r7CgYgEAAAAb:type:feature',
        info: {
            service: 'hbo',
            // studio: 'studio',
            location: 'HBO Max',
            desc: {
                year: 1990,
                genre: [
                    'crime',
                    'drama',
                    'mob',
                ],
            },
            summary: "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        },
        style: {
            color: '1e252c',
            posterType: 'jpg',
            titleType: 'png',
            titleSize: 'wide',
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/goodfellas-1990',
            imdbID: 'tt0099685',
            // subReddit: 'subreddit',
        },
    },
]

const movieDataArchive = [
    {
        name: 'Fairfax',
        id: 'fairfax',
        link: {
            primeVideo: 'B09HSV9MHL'
        },
        info: {
            service: 'prime',
            studio: 'prime',
            location: 'Prime Video',
            date: 'Oct 29, 2021',
            // weekday: '',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'animation',
                    'comedy',
                ],
            },
            summary: "Animated series centering on four middle school friends on their quest for fame on L.A.'s Fairfax Avenue.",
        },
        style: {
            color: 'dedccc',
            posterType: 'webp',
            titleType: 'png',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: '382466',
            reelgoodLink: 'https://reelgood.com/show/fairfax-2021',
            imdbID: 'tt7492014',
            // subReddit: 'subreddit',
        },
    },
    {
        name: 'The Problem With Jon Stewart',
        id: 'problem',
        link: 'https://tv.apple.com/show/the-problem-with-jon-stewart/umc.cmc.4fcexvzqezr25p9weks6sxpob',
        info: {
            service: 'appleTV',
            studio: 'appleTV',
            location: ' TV+',
            // date: '',
            weekday: 'Thursday',
            desc: {
                seasons: 1,
                yearStart: 2021,
                yearEnd: null,
                genre: [
                    'comedy',
                    'talk show',
                ],
            },
            summary: "It's easy to feel overwhelmed by the world's problems. It's harder to pinpoint the systems responsible for creating them. In this series, Jon Stewart brings together people impacted by different parts of a problem to discuss how we come up with change.",
        },
        style: {
            color: '334348',
            posterType: 'webp',
            titleType: 'webp',
            titleSize: 'wide',
        },
        apps: {
            tvTimeID: '400756',
            reelgoodLink: 'https://reelgood.com/show/the-problem-with-jon-stewart-2021',
            imdbID: 'tt15084142',
            // subReddit: 'subreddit',
        },
    },
    {
        name: "Your Name.",
        id: "yourname",
        link: null,
        info: {
            // service: '',
            // studio: '',
            location: "Download",
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
        name: 'Fargo',
        id: 'fargo',
        link: 'https://www.hulu.com/series/fargo-203cda1b-7919-40fb-ab36-1e45b3ed2a50',
        info: {
            service: 'hulu',
            // studio: '',
            location: 'Hulu',
            // description: 'Genre1 &#149 Genre2 &#149 Genre2 &#149 ___ Seasons &#149 Y000 - Present',
            // summary: "summary",
        },
        style: {
            color: '28374E',
            // posterType: 'webp',
            // titleType: 'png',
            // titleSize: 'wide',
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
]

const movieData = [
    movieData0,
    movieData1,
    movieData2,
    movieData3,
    movieData4,
    movieData5,
    movieData6,
    movieData7,
    movieData8,
    movieData9,
    movieData10,
]
