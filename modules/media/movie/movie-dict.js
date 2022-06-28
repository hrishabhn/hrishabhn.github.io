const movieServices = {
    hbo: {
        id: 'hbo',
        name: 'HBO Max',
    },
    disney: {
        id: 'disney',
        name: 'Disney+',
    },
    netflix: {
        id: 'netflix',
        name: 'Netflix',
    },
    hulu: {
        id: 'hulu',
        name: 'Hulu',
    },
    apple: {
        id: 'apple',
        name: ' TV+',
    },
    prime: {
        id: 'prime',
        name: 'Prime Video',
    },
    theatre: {
        id: 'theatre',
        message: 'Coming to Theatres',
    },
    cnn: {
        id: 'cnn',
        name: 'CNN+',
    },
    hotstar: {
        id: 'hotstar',
        name: 'Hotstar',
    },
    // prime: {
    //     id: 'prime',
    //     name: 'Prime',
    // },
}

const movieDict = {
    'silicon': {
        name: 'Silicon Valley',
        id: 'silicon',
        // link: 'https://www.hulu.com/series/silicon-valley-a53a72e7-afd9-4f50-bda8-ae887ff0683d',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GVU2WugfAylFvjSoJATvA:type:series',
        info: {
            water: movieServices.hbo,
            seasons: 6,
            yearStart: 2014,
            yearEnd: 2019,
            genre: [
                'comedy',
                'tech',
            ],
            summary: "In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. Partially inspired by Mike Judge’s own experiences as a Silicon Valley engineer in the late ‘80s, Silicon Valley is an American sitcom that centers around six programmers who are living together and trying to make it big in the Silicon Valley.",
        },
        style: {
            hex: 'D4584B',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '8.4 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/silicon-valley-2014',
            imdbID: 'tt2575988',
            subReddit: 'SiliconValleyHBO',
        },
        cast: [
            {
                actor: 'Thomas Middleditch',
                char: 'Richard Hendricks',
            },
            {
                actor: 'T.J. Miller',
                char: 'Erlich Bachman',
            },
            {
                actor: 'Martin Starr',
                char: 'Bertram Gilfoyle',
            },
            {
                actor: 'Kumail Nanjiani',
                char: 'Dinesh Chugtai',
            },
            {
                actor: 'Zach Woods',
                char: "Donald 'Jared' Dunn",
            },
            {
                actor: 'Amanda Crew',
                char: 'Monica Hall',
            },
            {
                actor: 'Josh Brener',
                char: "Nelson 'Big Head' Bighetti",
            },
            {
                actor: 'Matt Ross',
                char: 'Gavin Belson',
            },
            {
                actor: 'Jimmy O. Yang',
                char: 'Jian Yang',
            },
        ],
    },
    'himyf': {
        name: 'How I Met Your Father',
        id: 'himyf',
        link: 'https://www.disneyplus.com/series/how-i-met-your-father/5pWSb9Sy6vza',
        info: {
            water: movieServices.disney,
            // date: 'Mar 15, 2022',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'comedy',
                'romance',
                'friends',
            ],
            summary: "In the near future, Sophie is telling her son the story of how she met his father: a story that catapults us back to the present where Sophie and her close-knit group of friends are in the midst of figuring out who they are, what they want out of life, and how to fall in love in the age of dating apps and limitless options.",
            tags: ['himym']
        },
        style: {
            hex: '3d250f',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '401513',
            reelgoodLink: 'https://reelgood.com/show/how-i-met-your-father-2022',
            imdbID: 'tt14500082',
            subReddit: 'HowIMetYourFather',
        },
        cast: [
            {
                actor: 'Hilary Duff',
                char: 'Sophie',
            },
            {
                actor: 'Christopher Lowell',
                char: 'Jesse',
            },
            {
                actor: 'Francia Raisa',
                char: 'Valentina',
            },
            {
                actor: 'Suraj Sharma',
                char: 'Sid',
            },
            {
                actor: 'Tom Ainsley',
                char: 'Charlie',
            },
            {
                actor: 'Tien Tran',
                char: 'Ellen',
            },
        ],
    },
    'peaky': {
        name: 'Peaky Blinders',
        id: 'peaky',
        link: {
            netflix: '80002479'
        },
        info: {
            water: movieServices.hulu,
            date: '10 Jun 2022',
            seasons: 6,
            yearStart: 2013,
            yearEnd: null,
            genre: [
                'crime',
                'drama',
            ],
            summary: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
        },
        style: {
            hex: '493c35',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '270915',
            reelgoodLink: 'https://reelgood.com/show/peaky-blinders-2013',
            imdbID: 'tt2442560',
            // subReddit: 'subreddit',
        },
    },
    'snowfall': {
        name: 'Snowfall',
        id: 'snowfall',
        link: 'https://www.hulu.com/series/snowfall-ce0d176c-8a89-454d-bed4-b91ad2e0d6e6',
        info: {
            water: movieServices.hbo,
            // date: '17 Mar, 2022 10:00:00',
            seasons: 5,
            yearStart: 2017,
            yearEnd: null,
            genre: [
                'crime',
                'drama',
            ],
            summary: "Snowfall is a one-hour drama set against the infancy of the crack cocaine epidemic and its ultimate radical impact on the culture as we know it.",
        },
        style: {
            hex: FluentColor.cyanBlue20,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '328092',
            reelgoodLink: 'https://reelgood.com/show/snowfall-2017',
            imdbID: 'tt6439752',
            subReddit: 'SnowFall',
        },
    },
    'severance': {
        name: 'Severance',
        id: 'severance',
        link: 'https://tv.apple.com/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx',
        info: {
            water: movieServices.apple,
            // date: '11 Mar 2022 08:00:00',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'drama',
                'mystery',
            ],
            summary: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
        },
        style: {
            hex: FluentColor.gray20,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'webp',
                size: 'widest',
            },
            mobileType: 'png',
            mobileSize: '8 / 10',
        },
        apps: {
            tvTimeID: '371980',
            reelgoodLink: 'https://reelgood.com/show/severance-2022',
            imdbID: 'tt11280740',
            subReddit: 'SeveranceAppleTVPlus',
        },
        cast: [
            {
                actor: 'Adam Scott',
                char: 'Mark',
            },
            {
                actor: 'Britt Lower',
                char: 'Helly',
            },
            {
                actor: 'Patricia Arquette',
                char: 'Harmony Cobel',
            },
            {
                actor: 'Zach Cherry',
                char: 'Dylan',
            },
            {
                actor: 'Tramell Tillman',
                char: 'Milchick',
            },
            {
                actor: 'Jen Tullock',
                char: 'Devon',
            },
            {
                actor: 'John Turturro',
                char: 'Irving',
            },
            {
                actor: 'Christopher Walken',
                char: 'Burt',
            },
            {
                actor: 'Dichen Lachman',
                char: 'Ms. Casey',
            },
        ],
    },
    'abbott': {
        name: 'Abbott Elementary',
        id: 'abbott',
        link: 'https://www.hulu.com/series/abbott-elementary-7c33eeb2-5d16-4a10-ad9e-ee31f9fff15c',
        info: {
            water: movieServices.hulu,
            date: 'Sep 21 2022',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'comedy',
            ],
            summary: "A group of dedicated, passionate teachers -- and a slightly tone-deaf principal -- find themselves thrown together in a Philadelphia public school where, despite the odds stacked against them, they are determined to help their students succeed in life. Though these incredible public servants may be outnumbered and underfunded, they love what they do -- even if they don't love the school district's less-than-stellar attitude toward educating children.",
        },
        style: {
            hex: 'e6c8a0',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '402910',
            reelgoodLink: 'https://reelgood.com/show/abbott-elementary-2021',
            imdbID: 'tt14218830',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Quinta Brunson',
                char: 'Janine Teagues',
            },
            {
                actor: 'Tyler James Williams',
                char: 'Gregory Eddie',
            },
            {
                actor: 'Janelle James',
                char: 'Ava Coleman',
            },
            {
                actor: 'Lisa Ann Walter',
                char: 'Melissa Schemmenti',
            },
            {
                actor: 'Sheryl Lee Ralph',
                char: 'Barbara Howard',
            },
            {
                actor: 'Chris Perfetti',
                char: 'Jacob Hill',
            },
        ],
    },
    'wecrashed': {
        name: 'WeCrashed',
        id: 'wecrashed',
        link: 'https://tv.apple.com/show/wecrashed/umc.cmc.6qw605uv2rwbzutk2p2fsgvq9',
        info: {
            water: movieServices.apple,
            // date: '18 March 2022',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'biography',
                'drama',
            ],
            summary: "Inspired by actual events—and the love story at the center of it all. WeWork grew from a single coworking space into a global brand worth $47 billion in under a decade. Then, in less than a year, its valuation dropped $40 billion. What happened?",
        },
        style: {
            hex: FluentColor.cyan30,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'webp',
                size: 'widest',
            },
            mobileType: 'webp',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '393499',
            reelgoodLink: 'https://reelgood.com/show/wecrashed',
            imdbID: 'tt12005128',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Jared Leto',
                char: 'Adam Neumann',
            },
            {
                actor: 'Anne Hathaway',
                char: 'Rebekah Neumann',
            },
        ],
    },
    'drive': {
        name: 'Formula 1: Drive to Survive',
        id: 'drive',
        link: {
            netflix: '80204890'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 4,
            yearStart: 2019,
            yearEnd: null,
            genre: [
                'cars',
                'documentary',
                'sport',
            ],
            summary: "Drivers, managers and team owners live life in the fast lane — both on and off the track — during each cutthroat season of Formula 1 racing.",
        },
        style: {
            hex: '4d5372',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/formula-1-drive-to-survive-2019',
            imdbID: 'tt8289930',
            // subReddit: 'subreddit',
        },
    },
    'attack': {
        name: 'Attack on Titan',
        id: 'attack',
        link: 'https://www.hulu.com/series/attack-on-titan-9c91ffa3-dc20-48bf-8bc5-692e37c76d88',
        info: {
            water: movieServices.hulu,
            // date: 'Jan 16, 2022',
            seasons: 4,
            yearStart: 2013,
            yearEnd: 2022,
            genre: [
                'action & adventure',
                'animation',
            ],
            summary: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
        },
        style: {
            hex: 'a98264',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'elite': {
        name: 'Elite',
        id: 'elite',
        link: {
            netflix: '80200942'
        },
        info: {
            water: movieServices.hulu,
            // date: 'Apr 8 2022',
            seasons: 4,
            yearStart: 2018,
            yearEnd: null,
            genre: [
                'crime',
                'thriller',
            ],
            summary: "When three working-class teens enroll in an exclusive private school in Spain, the clash between them and the wealthy students leads to murder.",
        },
        style: {
            hex: FluentColor.red,
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tall',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '346328',
            reelgoodLink: 'https://reelgood.com/show/elite-2018',
            imdbID: 'tt7134908',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Itzan Escamilla',
                char: 'Samuel Garcia',
            },
            {
                actor: 'Omar Ayuso',
                char: 'Omar Shanaa',
            },
            {
                actor: 'Miguel Bernardeau',
                char: 'Guzmán Nunier',
            },
            {
                actor: 'Arón Piper',
                char: 'Ander Muñoz',
            },
            {
                actor: 'Claudia Salas',
                char: 'Rebeka Parrilla',
            },
            {
                actor: 'Georgina Amorós',
                char: 'Cayetana Grajera',
            },
            {
                actor: 'Mina El Hammani',
                char: 'Nadia Shanaa',
            },
            {
                actor: 'Elisabet Gelabert',
                char: 'Szucena',
            },
            {
                actor: 'Álvaro Rico',
                char: 'Polo Benavent',
            },
            {
                actor: 'Ester Expósito',
                char: 'Carla Roson',
            },
            {
                actor: 'Danna Paola',
                char: 'Lu Montesinos',
            },
        ],
    },
    'ozark': {
        name: 'Ozark',
        id: 'ozark',
        link: {
            netflix: '80117552'
        },
        info: {
            water: movieServices.netflix,
            // date: 'Jan 21, 2022',
            seasons: 4,
            yearStart: 2017,
            yearEnd: null,
            genre: [
                'crime',
                'drama',
            ],
            summary: "After his business partner cheats a dangerous client, financial adviser Marty must devise a radical plan to save the lives of himself and his family.",
        },
        style: {
            hex: '660000',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '329089',
            reelgoodLink: 'https://reelgood.com/show/ozark-2017',
            imdbID: 'tt5071412',
            subReddit: 'Ozark',
        },
        cast: [
            {
                actor: 'Jason Bateman',
                char: 'Marty Byrde',
            },
            {
                actor: 'Laura Linney',
                char: 'Wendy Byrde',
            },
            {
                actor: 'Sofia Hublitz',
                char: 'Charlotte Byrde',
            },
            {
                actor: 'Skylar Gaertner',
                char: 'Jonah Byrde',
            },
            {
                actor: 'Julia Garner',
                char: 'Ruth Langmore',
            },
        ],
    },
    'tintin': {
        name: 'The Adventures of Tintin',
        id: 'tintin',
        link: {
            netflix: '70211391'
        },
        info: {
            water: movieServices.netflix,
            seasons: 3,
            yearStart: 1991,
            yearEnd: 1992,
            genre: [
                'adventure',
                'crime',
            ],
            summary: "Travel with Tintin, the young and intrepid Belgian reporter, and his faithful dog Snowy as they take you from Tibet to the Moon, or from Egypt to the depths of the sea -- solving mysteries, pursuing truth and justice, and gambling with their lives.",
        },
        style: {
            hex: '4e432e',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '350522',
            reelgoodLink: 'https://reelgood.com/show/the-adventures-of-tintin-1991',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'money': {
        name: 'Money Heist',
        id: 'money',
        link: {
            netflix: '80192098'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 4,
            yearStart: 2017,
            yearEnd: 2021,
            genre: [
                'action',
                'crime',
                'mystery',
            ],
            summary: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        },
        style: {
            hex: '3f1513',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '10 / 9',
        },
        apps: {
            tvTimeID: '327417',
            reelgoodLink: 'https://reelgood.com/show/money-heist-2017',
            imdbID: 'tt6468322',
            // subReddit: 'subreddit',
        },
    },
    'disenchant': {
        name: 'Disenchantment',
        id: 'disenchant',
        link: {
            netflix: '80095697'
        },
        info: {
            water: movieServices.hulu,
            // date: '9 Feb, 2022',
            seasons: 3,
            yearStart: 2018,
            yearEnd: null,
            genre: [
                'animation',
                'adventure',
                'fantasy',
            ],
            summary: "Princess duties call, but she'd rather be drinking. Free-spirited Bean exasperates the king as she wreaks havoc with her demon and elf pals.",
        },
        style: {
            hex: '4b718b',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '340234',
            reelgoodLink: 'https://reelgood.com/show/disenchantment-2018',
            imdbID: 'tt5363918',
            // subReddit: 'subreddit',
        },
    },
    'dontLookUp': {
        name: "Don't Look Up",
        id: 'dontLookUp',
        link: {
            netflix: '81252357'
        },
        info: {
            water: movieServices.hulu,
            year: 2021,
            genre: [
                'sci-fi',
            ],
            summary: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh.",
        },
        style: {
            hex: '3d3554',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/dont-look-up',
            imdbID: 'tt11286314',
        },
    },
    'cowboy': {
        name: 'Cowboy Bebop',
        id: 'cowboy',
        link: {
            netflix: '80001312'
        },
        info: {
            water: movieServices.netflix,
            seasons: 1,
            yearStart: 1998,
            yearEnd: 1999,
            genre: [
                'action',
                'animation',
                'sci-fi',
            ],
            summary: "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
        },
        style: {
            hex: '994d33',
            poster: {
                wide: {
                    type: 'jpeg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'webp',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '76885',
            reelgoodLink: 'https://reelgood.com/show/cowboy-bebop-1998',
            imdbID: 'tt0213338',
            subReddit: 'cowboybebop',
        },
    },
    'grandTour': {
        name: 'The Grand Tour',
        id: 'grandTour',
        link: {
            primeVideo: 'B08QM4K1K5',
        },
        info: {
            water: movieServices.prime,
            // date: '',
            seasons: 4,
            yearStart: 2016,
            yearEnd: null,
            genre: [
                'cars',
                'comedy',
                'travel',
            ],
            summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        },
        style: {
            hex: '667a88',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'svg',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '314087',
            reelgoodLink: 'https://reelgood.com/show/the-grand-tour-2016',
            imdbID: 'tt5712554',
            // subReddit: 'subreddit',
        },
    },
    'jurassic6': {
        name: 'Jurassic World: Dominion',
        id: 'jurassic6',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: movieServices.theatre,
            date: 'Jun 10, 2022',
            year: 2022,
            genre: [
                'action & adventure',
                'sci-fi',
            ],
            summary: "Four years after the destruction of Isla Nublar, dinosaurs now live--and hunt--alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
            tags: ['jurassic']
        },
        style: {
            hex: '7f5112',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '10 / 12',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/jurassic-world-dominion-2021',
            imdbID: 'tt8041270',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Chris Pratt',
                char: 'Owen Grady',
            },
            {
                actor: 'Bryce Dallas Howard',
                char: 'Claire Dearing',
            },
            {
                actor: 'Laura Dern',
                char: 'Ellie Sattler',
            },
            {
                actor: 'Sam Neill',
                char: 'Alan Grant',
            },
            {
                actor: 'Jeff Goldblum',
                char: 'Ian Malcolm',
            },
        ],
    },
    'eternals': {
        name: 'Eternals',
        id: 'eternals',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: movieServices.disney,
            // date: 'Nov 5, 2021',
            year: 2021,
            genre: [
                'sci-fi',
            ],
            summary: "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
            tags: ['mcu']
        },
        style: {
            hex: '645542',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/eternals-2021',
            imdbID: 'tt9032400',
        },
    },
    'knives': {
        name: 'Knives Out',
        id: 'knives',
        link: {
            primeVideo: 'B081W68DP2'
        },
        info: {
            water: movieServices.prime,
            description: 'Comedy &#149 Crime &#149 Drama &#149 2019',
            summary: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        },
        style: {
            hex: '3d250f',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'dune': {
        name: 'Dune',
        id: 'dune',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYUjdLgBiJp5otAEAAAAJ:type:feature',
        info: {
            water: movieServices.hbo,
            year: 2021,
            genre: [
                'action & adventure',
                'drama',
            ],
            summary: "A mythic and emotionally charged epic hero's journey, Dune is Academy Award nominee Denis Villeneuve's visuallystunning adaptation of Frank Herbert's seminal bestseller of the same name.",
        },
        style: {
            hex: '6f897e',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/dune-2020',
            imdbID: 'tt1160419',
            // subReddit: 'subreddit',
        },
    },
    'dil': {
        name: 'Dil Chahta Hai',
        id: 'dil',
        link: {
            netflix: '60021525'
        },
        info: {
            water: movieServices.netflix,
            description: 'Comedy &#149 Drama &#149 2001',
            summary: "Inseparable childhood friends Akash, Sameer and Siddharth are just out of college. Nothing comes between them -- until they each fall in love.",
        },
        style: {
            hex: 'a5a39e',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '10 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/dil-chahta-hai-2001',
            imdbID: 'tt0292490',
        },
    },
    'loAndBehold': {
        name: 'Lo and Behold: Reveries of the Connected World',
        id: 'loAndBehold',
        link: {
            primeVideo: 'B01KH1DOA4'
        },
        info: {
            water: movieServices.prime,
            description: 'Documentary &#149 Technology &#149 Sci-Fi &#149 2016',
            summary: "Oscar-nominated documentarian Werner Herzog (Grizzly Man, Cave of Forgotten Dreams) chronicles the virtual world. He leads viewers on a journey that reveals the ways the online world has transformed how virtually everything in the real world works.",
        },
        style: {
            hex: '747a71',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'ghost': {
        name: 'Ghost in the Shell',
        id: 'ghost',
        link: {
            primeVideo: 'B07WQZDXTM'
        },
        info: {
            water: movieServices.prime,
            // date: '',
            seasons: 1,
            year: 1995,
            genre: [
                'animation',
                'crime',
                'sci-fi',
            ],
            summary: "In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as The Puppetmaster begins involving them in politics, Section 9, a group of cybernetically enhanced cops, are called in to investigate and stop the Puppetmaster.",
        },
        style: {
            hex: '313C82',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/ghost-in-the-shell-1995',
            imdbID: 'tt0113568',
            // subReddit: 'subreddit',
        },
    },
    'john': {
        name: 'Being John Malkovich',
        id: 'john',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: null,
            description: 'Comedy &#149 Drama &#149 Fantasy &#149 1999',
            summary: "A puppeteer discovers a portal that leads literally into the head of movie star John Malkovich.",
        },
        style: {
            hex: '6c4e44',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'earth': {
        name: 'The Year the Earth Changed',
        id: 'earth',
        link: 'https://tv.apple.com/movie/the-year-earth-changed/umc.cmc.3fob3t7nfhehpb3ilgynzxmnu',
        info: {
            water: movieServices.apple,
            year: 2021,
            genre: [
                'documentary',
                'nature',
            ],
            summary: "Narrated by David Attenborough, never-before-seen footage shows how our living in lockdown opened the door for nature to bounce back and thrive. Across the seas, skies, and lands, Earth found its rhythm when we came to a stop.",
            tags: ['David Attenborough']
        },
        style: {
            hex: '484b51',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/the-year-earth-changed-2021',
            imdbID: 'tt14372240',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'David Attenborough',
            },
        ],
    },
    'phil': {
        name: 'Somebody Feed Phil',
        id: 'phil',
        link: {
            netflix: '80146601'
        },
        info: {
            water: movieServices.hulu,
            seasons: 4,
            yearStart: 2018,
            yearEnd: null,
            genre: [
                'documentary',
                'food',
                'travel',
            ],
            summary: "\"Everybody Loves Raymond\" creator Phil Rosenthal travels the globe to take in the local cuisine and culture of Bangkok, Lisbon, Mexico City and more.",
        },
        style: {
            hex: '000000',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/somebody-feed-phil-2018',
            imdbID: 'tt7752034',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Phil Rosenthal',
            },
        ],
    },
    'anna': {
        name: 'Inventing Anna',
        id: 'anna',
        link: {
            netflix: '81008305'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 1,
            year: 2022,
            genre: [
                'drama',
            ],
            summary: "Audacious entrepreneur or con artist? A journalist chases down the story of Anna Delvey, who convinced New York's elite she was a German heiress.",
        },
        style: {
            hex: '000000',
            hex: FluentColor.red,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'png',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/inventing-anna-2022',
            imdbID: 'tt8740976',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Anna Chlumsky',
                char: 'Vivian Kent',
            },
            {
                actor: 'Julia Garner',
                char: 'Anna Delvey',
            },
            {
                actor: 'Arian Moayed',
                char: 'Todd',
            },
            {
                actor: 'Katie Lowes',
                char: 'Rachel',
            },
            {
                actor: 'Alexis Floyd',
                char: 'Neff',
            },
            {
                actor: 'Anders Holm',
                char: 'Jack',
            },
            {
                actor: 'Anna Deavere Smith',
                char: 'Maud',
            },
            {
                actor: 'Jeff Perry',
                char: 'Lou',
            },
            {
                actor: 'Terry Kinney',
                char: 'Barry',
            },
            {
                actor: 'Laverne Cox',
                char: 'Kacy Duke',
            },
        ],
    },
    'diabolical': {
        name: 'The Boys Presents: Diabolical',
        id: 'diabolical',
        link: {
            primeVideo: 'B09KKMBRC8'
        },
        info: {
            water: movieServices.prime,
            // date: '',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'animation',
                'sci-fi',
            ],
            summary: "From some of the most unhinged and maniacal minds in Hollywood today comes Diabolical, a collection of eight irreverent and emotionally shocking animated short films. Featuring stories by Seth Rogen, Awkwafina, Andy Samberg, Aisha Tyler, Justin Roiland, and more, each episode plunges elbow-deep into unseen crevices of The Boys Universe.",
        },
        style: {
            hex: FluentColor.red,
            poster: {
                wide: {
                    type: 'png',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'png',
            mobileSize: '780 / 1059',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/the-boys-presents-diabolical-2022',
            imdbID: 'tt16350094',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Grey Griffin',
                char: 'Multiple',
            },
            {
                actor: 'Antony Starr',
                char: 'Homelander',
            },
            {
                actor: 'Ben Schwartz',
                char: 'Multiple',
            },
            {
                actor: 'Chris Diamantopoulos',
                char: 'Multiple',
            },
            {
                actor: 'Angela Marie Volpe',
                char: 'Multiple',
            },
            {
                actor: 'Seth Rogen',
                char: 'Drug Dealer',
            },
            {
                actor: 'Awkwafina',
                char: 'Multiple',
            },
            {
                actor: 'John DiMaggio',
                char: 'Groundhawk',
            },
            {
                actor: 'Simon Pegg',
                char: 'Hughie',
            },
            {
                actor: 'Kumail Nanjiani',
                char: 'Vik',
            },
        ],
    },
    'boba': {
        name: 'The Book of Boba Fett',
        id: 'boba',
        link: 'https://www.disneyplus.com/series/the-book-of-boba-fett/57TL7zLNu2wf',
        info: {
            water: movieServices.disney,
            // date: '',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'action & adventure',
                'sci-fi',
            ],
            summary: "Legendary bounty hunter Boba Fett and mercenary Fennec Shand must navigate the galaxy’s underworld when they return to the sands of Tatooine to stake their claim on the territory once ruled by Jabba the Hutt and his crime syndicate.",
            tags: ['starwars']
        },
        style: {
            hex: '7d7e42',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: '393589',
            reelgoodLink: 'https://reelgood.com/show/the-book-of-boba-fett-2021',
            imdbID: 'tt13668894',
            // subReddit: 'subreddit',
        },
    },
    'clarkson': {
        name: "Clarkson's Farm",
        id: 'clarkson',
        link: {
            primeVideo: 'B095RYWGNR'
        },
        info: {
            water: movieServices.prime,
            // date: '',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'comedy',
                'reality',
            ],
            summary: "An intense, arduous and frequently hilarious year in the life of Britain’s most unlikely farmer, Jeremy Clarkson. Join Jeremy and his rag-tag band of agricultural associates as they face-up to a backdrop of unhelpful weather, disobedient animals, unresponsive crops and an unexpected pandemic. This is Jeremy Clarkson as you’ve never seen him before.",
        },
        style: {
            hex: '5b4f43',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '960 / 1008',
        },
        apps: {
            tvTimeID: '378165',
            reelgoodLink: 'https://reelgood.com/show/clarksons-farm-2021',
            imdbID: 'tt10541088',
            subReddit: 'ClarksonsFarm',
        },
    },
    'cowboy2': {
        name: 'Cowboy Bebop',
        id: 'cowboy2',
        link: {
            netflix: '80207033',
        },
        info: {
            water: movieServices.hulu,
            // date: 'Nov 19, 2021',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'action',
                'sci-fi',
            ],
            summary: "A ragtag crew of bounty hunters chases down the galaxy's most dangerous criminals. They'll save the world ... for the right price. A live-action series.",
        },
        style: {
            hex: '66472A',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpeg',
            mobileSize: '1',
        },
        apps: {
            tvTimeID: '367234',
            reelgoodLink: 'https://reelgood.com/show/cowboy-bebop-2021',
            imdbID: 'tt1267295',
            subReddit: 'cowboybebop',
        },
        cast: [
            {
                actor: 'John Cho',
                char: 'Spike Spiegel',
            },
            {
                actor: 'Daniella Pineda',
                char: 'Faye Valentine',
            },
            {
                actor: 'Mustafa Shakir',
                char: 'Jet Black',
            },
            {
                actor: 'Elena Satine',
                char: 'Julia',
            },
            {
                actor: 'Alex Hassell',
                char: 'Vicious',
            },
        ],
    },
    'joanna': {
        name: "Joanna Lumley's Trans-Siberian Adventure",
        id: 'joanna',
        link: {
            primeVideo: 'B08VH1HD6F'
        },
        info: {
            water: movieServices.prime,
            seasons: 1,
            year: 2015,
            genre: [
                'documentary',
                'travel',
            ],
            summary: "British actor Joanna Lumley (Absolutely Fabulous) last visited the USSR in 1966 on a modeling job. Almost 50 years later, she finds herself back there on a romantic rail trip from Hong Kong to Moscow via China and Mongolia. It's a journey of nearly 6,000 miles from east to west taking in a panorama of vistas, people and places and immense superpowers steeped in rich history and radical change.",
        },
        style: {
            hex: '757077',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'png',
            mobileSize: '8.7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/joanna-lumleys-transsiberian-adventure-2015',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'chernobyl': {
        name: 'Chernobyl',
        id: 'chernobyl',
        link: 'https://www.hulu.com/series/chernobyl-849bed9a-2da8-484b-8cdf-d7000090fc5d',
        info: {
            water: movieServices.hulu,
            seasons: 1,
            year: 2019,
            genre: [
                'drama',
                'history',
                'thriller',
            ],
            summary: "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
        },
        style: {
            hex: '86a097',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'svg',
                size: 'widest',
            },
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
    'sopranos': {
        name: 'The Sopranos',
        id: 'sopranos',
        link: 'https://www.hulu.com/series/the-sopranos-4e03024d-2f23-423a-934c-23adf1e62fe9',
        info: {
            water: movieServices.hulu,
            seasons: 6,
            yearStart: 1999,
            yearEnd: 2007,
            genre: [
                'crime',
                'drama',
            ],
            summary: "James Gandolfini stars in this acclaimed series about a mob boss whose professional and private strains land him in therapy.",
        },
        style: {
            hex: '443a3c',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '75299',
            reelgoodLink: 'https://reelgood.com/show/the-sopranos-1999',
            imdbID: 'tt0141842',
            subReddit: 'thesopranos',
        },
    },
    'fleabag': {
        name: 'Fleabag',
        id: 'fleabag',
        link: {
            primeVideo: 'B0875QQMD2'
        },
        info: {
            water: movieServices.prime,
            seasons: 2,
            yearStart: 2016,
            yearEnd: 2019,
            genre: [
                'comedy',
                'drama',
            ],
            summary: "Fleabag is a hilarious and poignant window into the mind of a dry-witted, sexual, angry, grief-riddled woman, as she hurls herself at modern living in London. Award-winning playwright Phoebe Waller-Bridge writes and stars as Fleabag, an unfiltered woman trying to heal, while rejecting anyone who tries to help her and keeping up her bravado all along.",
        },
        style: {
            hex: '994d33',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '9 / 10',
        },
        apps: {
            tvTimeID: '314614',
            reelgoodLink: 'https://reelgood.com/show/fleabag-2016',
            imdbID: 'tt5687612',
            // subReddit: 'subreddit',
        },
    },
    'finalSpace': {
        name: 'Final Space',
        id: 'finalSpace',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GXbJCBwcZGnepwwEAAAhh:type:series',
        info: {
            water: movieServices.hbo,
            seasons: 3,
            yearStart: 2018,
            yearEnd: 2021,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "An astronaut named Gary and his planet-destroying sidekick Mooncake embark on serialized journeys through space in order to unlock the mystery of “Final Space,” the last point in the universe, if it actually does exist.",
        },
        style: {
            hex: '0b276d',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tallest',
            },
            mobileType: 'jpg',
            mobileSize: '10 / 9.2',
        },
        apps: {
            tvTimeID: '332353',
            reelgoodLink: 'https://reelgood.com/show/final-space',
            imdbID: 'tt6317068',
            // subReddit: 'subreddit',
        },
    },
    'maid': {
        name: 'Maid',
        id: 'maid',
        link: {
            netflix: '81166770'
        },
        info: {
            water: movieServices.hulu,
            seasons: 1,
            year: 2021,
            genre: [
                'drama',
            ],
            summary: "After fleeing an abusive relationship, a young mother finds a job cleaning houses as she fights to provide for her child and build them a better future.",
        },
        style: {
            hex: '6c737a',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
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
                char: 'Alex',
            },
            {
                actor: 'Nick Robinson',
                char: 'Sean',
            },
            {
                actor: 'Rylea Nevea Whittet',
                char: 'Maddy',
            },
        ],
    },
    'spy': {
        name: 'The Spy',
        id: 'spy',
        link: {
            netflix: '80178151'
        },
        info: {
            water: movieServices.hulu,
            description: 'Drama &#149 1 Season &#149 2019',
            summary: "In the 1960s, Israeli clerk-turned-secret agent Eli Cohen goes deep undercover inside Syria on a perilous, years-long mission to spy for Mossad.",
        },
        style: {
            hex: '7f6b57',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: '368109',
            reelgoodLink: 'https://reelgood.com/show/the-spy-2019',
            imdbID: 'tt5952634',
            // subReddit: 'subreddit',
        },
    },
    'lineofduty': {
        name: "Line of Duty",
        id: "lineofduty",
        link: "https://www.hulu.com/series/line-of-duty-0efc0f95-c575-46da-b28f-a30a13d86b37",
        info: {
            water: movieServices.hulu,
            description: "Thriller &#149 6 Season &#149 2012 - Present",
            summary: "After refusing to help cover up an unlawful and fatal shooting by members of his team, Detective Sergeant Steve Arnott is transferred to Anti-Corruption Unit 12, AC-12. Run by zealous Superintendent Ted Hastings, the department is responsible for investigating possible corruption within the Central Police force. Working alongside DS Arnott is Detective Inspector Kate Fleming, who is an undercover specialist. With the help and oversight of Hastings, Arnott and Fleming take on difficult cases, which lead from laddering to mishandling evidence.",
        },
        style: {
            hex: '262841',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '260092',
            reelgoodLink: "https://reelgood.com/show/line-of-duty-2012",
            imdbID: "tt2303687",
        },
    },
    'dexter': {
        name: 'Dexter',
        id: 'dexter',
        link: {
            primeVideo: 'B000JO9JHW'
        },
        info: {
            water: movieServices.prime,
            // date: '',
            seasons: 9,
            yearStart: 2006,
            yearEnd: 2013,
            genre: [
                'crime',
                'drama',
                'mystery',
            ],
            summary: "He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and nights committing them. Golden Globe winner Michael C. Hall stars in the hit SHOWTIME Original Series.",
        },
        style: {
            hex: 'b11016',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'svg',
                size: 'mid',
            },
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
    'mindhunter': {
        name: 'Mindhunter',
        id: 'mindhunter',
        link: {
            netflix: '80114855'
        },
        info: {
            water: movieServices.netflix,
            description: 'Crime &#149 Drama &#149 Thriller &#149 2 Seasons &#149 2017 - 2019',
            summary: "In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",
        },
        style: {
            hex: '838383',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'svg',
                size: 'widest',
            },
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
    'vikings': {
        name: 'Vikings',
        id: 'vikings',
        link: 'https://www.hulu.com/series/vikings-8bc072a3-4a5e-47cb-9cb6-bc3dc3785fe1',
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 6,
            yearStart: 2013,
            yearEnd: 2021,
            genre: [
                'action & adventure',
                'history',
            ],
            summary: "Ragnar is pitted against Rollo over a land dispute he's trying to settle on behalf of King Horik. A deadly fever hits Kattegat putting Ragnar's wife and daughter's lives in grave danger.",
        },
        style: {
            hex: '4f6368',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
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
    'qanon': {
        name: 'Q: Into the Storm',
        id: 'qanon',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYDk9Ig48c5i6hgEAAAA7:type:series',
        info: {
            water: movieServices.hbo,
            // date: '',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'documentary',
                'politics',
            ],
            summary: "This six-part docuseries charts a labyrinthine journey to uncover the inner workings of Qanon, a massive online conspiracy movement.",
        },
        style: {
            hex: '2c2433',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'jpeg',
                size: 'widest',
            },
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
    'myname': {
        name: 'My Name',
        id: 'myname',
        link: {
            netflix: '81011211'
        },
        info: {
            water: movieServices.hulu,
            date: '',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'action & adventure',
                'crime',
                'drama',
            ],
            summary: "Following her father's murder, a revenge-driven woman puts her trust in a powerful crime boss - and enters the police force under his direction.",
        },
        style: {
            hex: '682008',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: '397441',
            reelgoodLink: 'https://reelgood.com/show/my-name-2021',
            imdbID: 'tt12940504',
            // subReddit: 'subreddit',
        },
    },
    'witcher': {
        name: 'The Witcher',
        id: 'witcher',
        link: {
            netflix: '80189685'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 1,
            yearStart: 2019,
            yearEnd: null,
            genre: [
                'action & adventure',
                'fantasy',
            ],
            summary: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        },
        style: {
            hex: '515d63',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'dear': {
        name: 'Dear White People',
        id: 'dear',
        link: {
            netflix: '80095698'
        },
        info: {
            water: movieServices.netflix,
            description: 'Comedy &#149 Drama &#149 4 Seasons &#149 2017 - 2021',
            summary: "Students of color navigate the daily slights and slippery politics of life at an Ivy League college that's not nearly as \"post-racial\" as it thinks.",
        },
        style: {
            hex: '813a2a',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tallest',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/dear-white-people-2017',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'mankind': {
        name: 'For All Mankind',
        id: 'mankind',
        link: 'https://tv.apple.com/show/for-all-mankind/umc.cmc.6wsi780sz5tdbqcf11k76mkp7',
        info: {
            water: movieServices.apple,
            description: 'Sci-Fi &#149 2 Seasons &#149 2019 - Present',
            summary: "Exploring the possibilities that might exist if the global space race had continued and where humanity would be now.",
        },
        style: {
            hex: '3e587a',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'dark': {
        name: 'Dark',
        id: 'dark',
        link: 'https://www.netflix.com/title/80100172',
        info: {
            water: movieServices.netflix,
            description: 'Crime &#149 Drama &#149 Mystery &#149 3 Seasons &#149 2017 - 2020',
            summary: "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986. 'Dark' represents the first German original series produced for Netflix.",
        },
        style: {
            hex: '3f3a2d',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'fringe': {
        name: 'Fringe',
        id: 'fringe',
        link: {
            primeVideo: 'B001FVV2X2',
        },
        info: {
            water: movieServices.prime,
            description: 'Drama &#149 Mystery &#149 Sci-Fi &#149 5 Seasons &#149 2008 - 2013',
            summary: "FBI Special Agent Olivia Dunham is assigned to the bureau's Fringe Division, in which she investigates unusual crimes and occurrences. Assisting Olivia in her investigations are once-institutionalised scientist Dr Walter Bishop, his jack-of-all-trades son, Peter, and FBI Junior Agent Astrid Farnsworth. As the team investigates cases of science gone awry, they discover connections to their own past and to a parallel universe. As the team explores life and solves cases in these interconnected worlds, new discoveries and complications continue to arise.",
        },
        style: {
            hex: '7a726b',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: '82066',
            reelgoodLink: null,
            imdbID: 'tt1119644',
            subReddit: null,
        },
    },
    'lastman': {
        name: "Y: The Last Man",
        id: "lastman",
        link: "https://www.hulu.com/series/y-the-last-man-9fb2d79b-1280-48be-b185-f989b9c9519a",
        info: {
            water: movieServices.hulu,
            description: 'Action &#149 Adventure &#149 Drama &#149 1 Season &#149 2021 - Present',
            summary: 'A drama based on DC Comics\' acclaimed series by Brian K. Vaughan and Pia Guerra, Y: The Last Man traverses a post-apocalyptic world in which a cataclysmic event decimates every mammal with a Y chromosome but for one cisgender man and his pet monkey. The series follows the survivors in this new world as they struggle with their efforts to restore what was lost and the opportunity to build something better.',
        },
        style: {
            hex: '5D080D',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: "399959",
            reelgoodLink: 'https://reelgood.com/show/y-the-last-man-2021',
            imdbID: "tt8042500",
            subReddit: 'YTheLastMan',
        },
    },
    'georgina': {
        name: 'Soy Georgina',
        id: 'georgina',
        link: {
            netflix: '81423622'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 1,
            year: 2022,
            genre: [
                'comedy',
                'documentary',
            ],
            summary: "Join Georgina Rodríguez — mom, influencer, businesswoman and Cristiano Ronaldo's partner — in this emotional and in-depth portrait of her daily life.",
        },
        style: {
            hex: '8f7d4b',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '768 / 1024',
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'fairfax': {
        name: 'Fairfax',
        id: 'fairfax',
        link: {
            primeVideo: 'B09HSV9MHL'
        },
        info: {
            water: movieServices.prime,
            // date: 'Oct 29, 2021',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "Animated series centering on four middle school friends on their quest for fame on L.A.'s Fairfax Avenue.",
        },
        style: {
            hex: 'dedccc',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '382466',
            reelgoodLink: 'https://reelgood.com/show/fairfax-2021',
            imdbID: 'tt7492014',
            // subReddit: 'subreddit',
        },
    },
    'ghosts': {
        name: 'Ghosts',
        id: 'ghosts',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GXrBDuAniEYC9JwEAAAWV:type:series',
        info: {
            water: movieServices.hbo,
            // date: '',
            seasons: 3,
            yearStart: 2019,
            yearEnd: null,
            genre: [
                'comedy',
                'fantasy',
            ],
            summary: "Crumbling country mansion Button House is home to restless spirits who’ve died there over the centuries. Each a product of their time, they’re thrown together for eternity, resigned to squabble over mundane daily gripes. But their lives, or rather, afterlives, are thrown into turmoil when young urban couple Alison and Mike unexpectedly inherit the peaceful derelict house and plan to turn it into a bustling hotel.",
        },
        style: {
            hex: '513d35',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'png',
            mobileSize: '3 / 4',
        },
        apps: {
            tvTimeID: '361701',
            reelgoodLink: 'https://reelgood.com/show/ghosts-2019',
            imdbID: 'tt8594324',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Charlotte Ritchie',
                char: 'Alison Cooper',
            },
            {
                actor: 'Kiell Smith-Bynoe',
                char: 'Mike Cooper',
            },
        ],
    },
    'arcane': {
        name: 'Arcane',
        id: 'arcane',
        link: {
            netflix: '81435684'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            // weekday: 'Saturday',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'action & adventure',
                'animation',
                'fantasy',
            ],
            summary: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
        },
        style: {
            hex: '994d33',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
                actor: 'Hailee Steinfeld',
                char: 'Vi',
            },
            {
                actor: 'Mia Sinclair Jenness',
                char: 'Powder',
            },
            {
                actor: 'Kevin Alejandro',
                char: 'Jayce',
            },
            {
                actor: 'Harry Lloyd',
                char: 'Viktor',
            },
            {
                actor: 'Katie Leung',
                char: 'Caitlyn',
            },
            {
                actor: 'Shohreh Aghdashloo',
                char: 'Grayson',
            },
            {
                actor: 'JB Blanc',
                char: 'Vander',
            },
        ],
    },
    'snowpiercer': {
        name: 'Snowpiercer',
        id: 'snowpiercer',
        link: {
            netflix: '80177458'
        },
        info: {
            water: movieServices.netflix,
            // date: 'Feb 1, 2022',
            seasons: 3,
            yearStart: 2020,
            yearEnd: null,
            genre: [
                'drama',
                'sci-fi',
            ],
            summary: "Set more than seven years after the world has become a frozen wasteland, the remnants of humanity inhabit a gigantic, perpetually-moving train that circles the globe as class warfare, social injustice and the politics of survival play out.",
        },
        style: {
            hex: '444743',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '364928',
            reelgoodLink: 'https://reelgood.com/show/snowpiercer-1',
            imdbID: 'tt6156584',
            subReddit: 'snowpiercer',
        },
    },
    'hawkeye': {
        name: 'Hawkeye',
        id: 'hawkeye',
        link: 'https://www.disneyplus.com/series/hawkeye/11Zy8m9Dkj5l',
        info: {
            water: movieServices.disney,
            weekday: 'Wednesday',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'crime',
            ],
            summary: "Marvel Studios’ “Hawkeye” is an original new series set in post-blip New York City where former Avenger Clint Barton aka Hawkeye has a seemingly simple mission: get back to his family for Christmas. But when a threat from his past shows up, Hawkeye reluctantly teams up with Kate Bishop, a 22-year-old skilled archer and his biggest fan, to unravel a criminal conspiracy.",
            tags: ['mcu']
        },
        style: {
            hex: '5980C4',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '367146',
            reelgoodLink: 'https://reelgood.com/show/hawkeye-2021',
            imdbID: 'tt10160804',
            subReddit: 'HAWKEYE',
        },
        cast: [
            {
                actor: 'Jeremy Renner',
                char: 'Clint Barton/Hawkeye',
            },
            {
                actor: 'Hailee Steinfeld',
                char: 'Kate Bishop',
            },
        ],
    },
    'southpark': {
        name: 'South Park',
        id: 'southpark',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GXr7SEgRi2sLCAAEAAAQu:type:series',
        info: {
            water: movieServices.hbo,
            // date: '',
            seasons: 24,
            yearStart: 1997,
            yearEnd: null,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
        },
        style: {
            hex: 'A14533',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'archer': {
        name: 'Archer',
        id: 'archer',
        link: 'https://www.hulu.com/series/archer-22b4b3c8-0827-42d2-a841-50e8f3464dc2',
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 12,
            yearStart: 2009,
            yearEnd: null,
            genre: [
                'action & adventure',
                'animation',
                'crime',
            ],
            summary: "Covert black ops and espionage take a back seat to zany personalities and relationships between secret agents and drones.",
        },
        style: {
            hex: '337799',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
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
                char: 'Sterling Archer',
            },
            {
                actor: 'Aisha Tyler',
                char: 'Lana Kane',
            },
            {
                actor: 'Jessica Walter',
                char: 'Malory Archer',
            },
            {
                actor: 'Chris Parnell',
                char: 'Cyril Figgis',
            },
            {
                actor: 'Judy Greer',
                char: 'Cheryl Tunt',
            },
            {
                actor: 'Amber Nash',
                char: 'Pam Poovey',
            },
        ],
    },
    'loveIsland': {
        name: 'Love Island',
        id: 'loveIsland',
        link: 'https://www.hulu.com/series/love-island-uk-e3b93210-7e03-471f-8270-0e17161809a8',
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 7,
            yearStart: 2015,
            yearEnd: null,
            genre: [
                'reality',
            ],
            summary: "Reality show. Glamorous singles live in a beautiful villa under the watchful gaze of the audience at home, who have the power to decide who stays and who goes.",
        },
        style: {
            hex: 'ea80ff',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '296669',
            reelgoodLink: 'https://reelgood.com/show/love-island-2015',
            imdbID: 'tt4770018',
            // subReddit: 'subreddit',
        },
    },
    'you': {
        name: 'You',
        id: 'you',
        link: {
            netflix: '80211991'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 3,
            yearStart: 2018,
            yearEnd: null,
            genre: [
                'romance',
                'thriller',
            ],
            summary: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        },
        style: {
            hex: '655b3f',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
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
                char: 'Joe Goldberg',
            },
            {
                actor: 'Elizabeth Lail',
                char: 'Guinevere Beck',
            },
            {
                actor: 'Shay Mitchell',
                char: 'Peach Salinger',
            },
        ],
    },
    'solar': {
        name: 'Solar Opposites',
        id: 'solar',
        link: 'https://www.hulu.com/series/solar-opposites-f089664b-1a87-433b-86a5-24e7da5a246a',
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 2,
            yearStart: 2020,
            yearEnd: null,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "A team of four aliens escape their exploding home world only to crash land into a move-in ready home in suburban America. They are evenly split on whether Earth is awful or awesome. Korvo (Justin Roiland) and Yumyulack (Sean Giambrone) only see the pollution, crass consumerism, and human frailty while Terry (Thomas Middleditch) and Jesse (Mary Mack) love humans and all their TV, junk food and fun stuff. Their mission: protect the Pupa, a living super computer that will one day evolve into its true form, consume them and terraform the Earth.",
        },
        style: {
            hex: '3B347A',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
                char: 'Korvo',
            },
            {
                actor: 'Thomas Middleditch',
                char: 'Terry',
            },
            {
                actor: 'Sean Giambrone',
                char: 'Yumyulack',
            },
            {
                actor: 'Mary Mack',
                char: 'Jesse',
            },
        ],
    },
    'dopesick': {
        name: 'Dopesick',
        id: 'dopesick',
        link: 'https://www.hulu.com/series/dopesick-227de06a-d3d4-42e0-9df1-bb5495e1738d',
        info: {
            water: movieServices.hulu,
            // date: '',
            weekday: 'Wednesday',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'drama',
            ],
            summary: "From Executive Producer Danny Strong and starring and executive produced by Michael Keaton, “Dopesick” examines how one company triggered the worst drug epidemic in American history. The series takes viewers to the epicenter of America’s struggle with opioid addiction, from the boardrooms of Big Pharma, to a distressed Virginia mining community, to the hallways of the DEA. Defying all the odds, heroes will emerge in an intense and thrilling ride to take down the craven corporate forces behind this national crisis and their allies. The limited series is inspired by the New York Times bestselling book by Beth Macy.",
        },
        style: {
            hex: '339999',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'family': {
        name: 'Family Guy',
        id: 'family',
        link: 'https://www.hulu.com/series/family-guy-3c3c0f8b-7366-4d15-88ab-18050285978e',
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 20,
            yearStart: 1999,
            yearEnd: null,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.",
        },
        style: {
            hex: '0B6F38',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'webp',
                    size: '2 / 3',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: '75978',
            reelgoodLink: 'https://reelgood.com/show/family-guy-1999',
            imdbID: 'tt0182576',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Seth MacFarlane',
                char: 'Peter Griffin',
            },
            {
                actor: 'Alex Borstein',
                char: 'Lois Griffin',
            },
            {
                actor: 'Seth Green',
                char: 'Chris Griffin',
            },
            {
                actor: 'Mila Kunis',
                char: 'Meg Griffin',
            },
        ],
    },
    'foundation': {
        name: 'Foundation',
        id: 'foundation',
        link: 'https://tv.apple.com/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3',
        info: {
            water: movieServices.apple,
            weekday: 'Friday',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'drama',
                'sci-fi',
            ],
            summary: "Dr. Hari Seldon and his loyal followers attempt to preserve their culture as the galaxy collapses.",
        },
        style: {
            hex: '70655B',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'webp',
                size: 'widest',
            },
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
    'simpsons': {
        name: 'The Simpsons',
        id: 'simpsons',
        link: 'https://www.hulu.com/series/the-simpsons-47332072-d7fb-48b3-a5f7-ca8c6915ca27',
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 33,
            yearStart: 1989,
            yearEnd: 2021,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie.",
        },
        style: {
            hex: '685467',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'svg',
                size: 'widest',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/the-simpsons-1989',
            imdbID: 'tt0096697',
            // subReddit: 'subreddit',
        },
    },
    'billions': {
        name: "Billions",
        id: "billions",
        link: null,
        info: {
            water: null,
            // date: 'Jan 23, 2022',
            seasons: 5,
            yearStart: 2016,
            yearEnd: null,
            genre: [
                'drama',
                'money',
            ],
            summary: "Wealth, influence and corruption collide in this drama set in New York. Shrewd U.S. Attorney Chuck Rhoades is embroiled in a high-stakes game of predator vs. prey with Bobby Axelrod, an ambitious hedge-fund king. To date, Rhoades has never lost an insider trading case -- he's 81-0 -- but when criminal evidence turns up against Axelrod, he proceeds cautiously in building the case against Axelrod, who employs Rhoades' wife, psychiatrist Wendy, as a performance coach for his company.",
        },
        style: {
            hex: '6f4c2d',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'memories': {
        name: 'Memories of the Alhambra',
        id: 'memories',
        link: {
            netflix: '81004280'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 1,
            yearStart: 2018,
            yearEnd: 2019,
            genre: [
                'romance',
                'sci-fi',
            ],
            summary: "A frantic young man is running scared in Barcelona. CEO Yoo Jin-woo heads to Granada on a quest after getting a strange call while on business in Spain.",
        },
        style: {
            hex: 'a6886c',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'midnight': {
        name: 'Midnight Mass',
        id: 'midnight',
        link: {
            netflix: '81083626'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'drama',
                'horror',
            ],
            summary: "The arrival of a charismatic young priest brings glorious miracles, ominous mysteries and renewed religious fervor to a dying town desperate to believe.",
        },
        style: {
            hex: '3c2e2c',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'whatif': {
        name: "What If?",
        id: "whatif",
        link: "https://www.disneyplus.com/series/what-if/7672ZVj1ZxU9",
        info: {
            water: movieServices.disney,
            description: "Action &#149 Adventure &#149 Animation &#149 1 Season &#149 2021 - Present",
            summary: "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
        },
        style: {
            hex: '0F0F38',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: "367147",
            reelgoodLink: "https://reelgood.com/show/what-if-2021",
            imdbID: "tt10168312",
            subReddit: 'MarvelsWhatIf',
        },
    },
    'edu': {
        name: "Sex Education",
        id: "edu",
        link: {
            netflix: '80197526'
        },
        info: {
            water: movieServices.netflix,
            description: "Comedy &#149 Teen &#149 3 Seasons &#149 2019 - Present",
            summary: "Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mom. So rebel Maeve proposes a school sex-therapy clinic.",
        },
        style: {
            hex: '6d6256',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: "356317",
            reelgoodLink: "https://reelgood.com/show/sex-education-2019",
            imdbID: "tt7767422",
            subReddit: "NetflixSexEducation",
        },
    },
    'jojo': {
        name: "Jojo's Bizzare Adventures",
        id: "jojo",
        link: {
            netflix: '80179831'
        },
        info: {
            water: movieServices.netflix,
            description: "Animation &#149 Action &#149 Adventure &#149 4 Seasons &#149 2012 - Present",
            summary: "Jonathan Joestar, nicknamed JoJo, becomes involved in a battle against his stepbrother, Dio Brando, who is intent on taking control of the Joestar fortune. To do this, Dio uses the power of an ancient stone mask, which allows him to become a powerful vampire. The hybrid anime series takes pieces from such genres as paranormal, adventure, comedy, action and fantasy.",
        },
        style: {
            hex: '2C2850',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tall',
            },
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
    'dave': {
        name: "Dave",
        id: "dave",
        link: "https://www.hulu.com/series/dave-ac3a96f0-9614-46af-b524-f59c7d281946",
        info: {
            water: movieServices.hulu,
            description: "Comedy &#149 Music &#149 2 Seasons &#149 2020 - Present",
            summary: "Dave centers on a neurotic man in his late 20s who has convinced himself that he is destined to be one of the best rappers of all time. Now he must convince his closest friends, because with their help, he actually might convince the world. Simultaneously exasperating and inspiring to his friends, he vows to leave no stone unturned on his quest to become the next superstar.",
        },
        style: {
            hex: '889898',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: "354905",
            reelgoodLink: "https://reelgood.com/show/dave-2020",
            imdbID: "tt8531222",
        },
    },
    'twinpeaks': {
        name: "Twin Peaks",
        id: "twinpeaks",
        // link: "https://watch.amazon.com/detail?asin=B08QM4K1K5",
        info: {
            water: movieServices.hulu,
            // description: "Cars &#149 Comedy &#149 Travel &#149 4 Seasons &#149 2016 - Present",
            // summary: "Confined to the United Kingdom by COVID-19, the hosts embark on a quest to find out why American cars from the 1970s never took off in Britain; they travel around Scotland in a Cadillac Coupe de Ville, a Lincoln Continental and a Buick Riviera.",
        },
        style: {
            hex: '300',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tall',
            },
        },
    },
    'legion': {
        name: "Legion",
        id: "legion",
        link: "https://www.hulu.com/series/legion-ae87e56c-5b3b-44f6-9154-b07c8e60fe6c",
        info: {
            water: movieServices.hulu,
            description: "Sci-Fi &#149 3 Seasons &#149 2017 - 2019",
            summary: "David Haller, AKA Legion, is a troubled young man who may be more than human. Diagnosed as schizophrenic, David has been in and out of psychiatric hospitals for years. But after a strange encounter with a fellow patient, he's confronted with the possibility that the voices he hears and the visions he sees might be real.",
        },
        style: {
            hex: '0b276d',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: "320724",
            // reelgoodLink: "https://www.hulu.com/series/legion-ae87e56c-5b3b-44f6-9154-b07c8e60fe6c",
            imdbID: "tt5114356",
        },
    },
    'futurama': {
        name: "Futurama",
        id: "futurama",
        link: "https://www.hulu.com/series/futurama-85bf4cc1-cd8b-4469-ad87-7289217a0b74",
        info: {
            water: movieServices.hulu,
            description: "Animation &#149 Comedy &#149 Sci-Fi &#149 8 Seasons &#149 1999 - 2013",
            summary: "Accidentally frozen, pizza-deliverer Fry wakes up 1,000 years in the future. He is taken in by his sole descendant, an elderly and addled scientist who owns a small cargo delivery location. Among the other crew members are Capt. Leela, accountant Hermes, intern Amy, obnoxious robot Bender and lobsterlike moocher Dr. Zoidberg.",
        },
        style: {
            hex: 'E25924',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: "314087",
            reelgoodLink: "https://reelgood.com/show/futurama-1999",
            // imdbID: "tt5712554",
        },
    },
    'atlanta': {
        name: 'Atlanta',
        id: 'atlanta',
        link: "https://www.hulu.com/series/atlanta-3529d0f1-acaf-476d-8be3-66cd6bf12530",
        info: {
            water: movieServices.hulu,
            date: '15 Apr, 2022 15:00:00',
            seasons: 3,
            yearStart: 2016,
            yearEnd: null,
            genre: [
                'comedy',
                'drama',
                'music',
            ],
            summary: "Based in Atlanta, Earn and his cousin Alfred try to make their way in the world through the rap scene. Along the way they come face to face with social and economic issues touching on race, relationships, poverty, status, and parenthood.",
        },
        style: {
            hex: '041f41',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '313999',
            reelgoodLink: 'https://reelgood.com/show/atlanta-2016',
            imdbID: 'tt4288182',
            subReddit: 'AtlantaTV',
        },
        cast: [
            {
                actor: 'Donald Glover',
                char: 'Earn Marks',
            },
            {
                actor: 'Brian Tyree Henry',
                char: 'Alfred \'Paper Boi\' Miles',
            },
            {
                actor: 'LaKeith Stanfield',
                char: 'Darius',
            },
            {
                actor: 'Zazie Beetz',
                char: 'Van',
            },
        ],
    },
    'boys': {
        name: 'The Boys',
        id: 'boys',
        link: {
            // primeVideo: 'B08F81VWVD'
            primeVideo: 'B09WV9C176'
        },
        info: {
            water: movieServices.prime,
            date: '1 Jul, 2022, 12:30:00',
            seasons: 3,
            yearStart: 2019,
            yearEnd: null,
            genre: [
                'action',
                'crime',
                'sci-fi',
            ],
            summary: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
        },
        style: {
            hex: '660000',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '355567',
            reelgoodLink: 'https://reelgood.com/show/the-boys-2019',
            imdbID: 'tt1190634',
            subReddit: 'TheBoys',
        },
    },
    'alice': {
        name: 'Alice in Borderland',
        id: 'alice',
        link: {
            netflix: '80200575'
        },
        info: {
            water: movieServices.netflix,
            // date: '',
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
            // hex: '000000',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'always': {
        name: "It's Always Sunny in Philadelphia",
        id: 'always',
        // link: 'https://www.disneyplus.com/series/its-always-sunny-in-philadelphia/67id28oN9H8P',
        link: 'https://www.hulu.com/series/its-always-sunny-in-philadelphia-2171423f-3326-4dfa-b193-b40494e60109',
        info: {
            water: movieServices.hulu,
            // date: 'Dec 23, 2021 03:00:00',
            // weekday: 'Thursday',
            seasons: 15,
            yearStart: 2005,
            yearEnd: null,
            genre: [
                'comedy',
                'friends',
            ],
            summary: "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating a myriad of uncomfortable situations that usually only get worse before they get better.",
        },
        style: {
            hex: '699933',
            poster: {
                wide: {
                    type: 'jpeg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tallest',
            },
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
                char: 'Charlie Kelly',
            },
            {
                actor: 'Glenn Howerton',
                char: 'Dennis Reynolds',
            },
            {
                actor: 'Rob McElhenney',
                char: 'Mac',
            },
            {
                actor: 'Kaitlin Olson',
                char: 'Dee Reynolds',
            },
            {
                actor: 'Danny DeVito',
                char: 'Frank Reynolds',
            },
        ],
    },
    'curb': {
        name: 'Curb Your Enthusiasm',
        id: 'curb',
        link: 'https://www.hulu.com/series/curb-your-enthusiasm-7a307be7-978b-4d62-b47d-1cf3839f3c98',
        info: {
            water: movieServices.hulu,
            // date: '26 Dec, 2021 22:30:00',
            // weekday: 'Sunday',
            seasons: 11,
            yearStart: 2000,
            yearEnd: null,
            genre: [
                'comedy',
            ],
            summary: "The off-kilter, unscripted comic vision of Larry David, who plays himself in a parallel universe in which he can't seem to do anything right, and, by his standards, neither can anyone else.",
        },
        style: {
            hex: 'FDC801',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
                char: 'Larry David',
            },
            {
                actor: 'Jeff Garlin',
                char: 'Jeff Greene',
            },
            {
                actor: 'Cheryl Hines',
                char: 'Cheryl David',
            },
            {
                actor: 'Susie Essman',
                char: 'Susie Greene',
            },
            {
                actor: 'Richard Lewis',
                char: 'Richard Lewis',
            },
            {
                actor: 'J.B. Smoove',
                char: 'Leon Black',
            },
        ],
    },
    'falcon': {
        name: 'Falcon and the Winter Soldier',
        id: 'falcon',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: movieServices.disney,
            // date: '',
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
            // hex: '000000',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'hitMonkey': {
        name: 'Hit Monkey',
        id: 'hitMonkey',
        link: 'https://www.hulu.com/series/marvels-hit-monkey-22dc20c4-eaed-492d-887e-e087585c0532',
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'action',
                'animation',
            ],
            summary: "After a high-profile political assassination goes sideways, an injured hitman hides out amongst a tribe of snow monkeys in the mountains of Japan.",
        },
        style: {
            hex: '3B347A',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '361835',
            reelgoodLink: 'https://reelgood.com/show/marvels-hitmonkey-2021',
            imdbID: 'tt9811316',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Fred Tatasciore',
                char: 'Hit-Monkey',
            },
            {
                actor: 'Jason Sudeikis',
                char: 'Bryce',
            },
            {
                actor: 'Olivia Munn',
                char: 'Akiko',
            },
            {
                actor: 'George Takei',
                char: 'Shinji Yokohama',
            },
        ],
    },
    'industry': {
        name: 'Industry',
        id: 'industry',
        link: 'https://www.hulu.com/series/industry-6ff820e0-f28e-405a-a771-9dc2b01d5e97',
        info: {
            water: movieServices.hulu,
            date: '8 Aug 2022',
            seasons: 1,
            yearStart: 2020,
            yearEnd: null,
            genre: [
                'drama',
                'money',
            ],
            summary: "This series follows a group of young graduates competing for a limited set of permanent positions at a top investment bank in London",
        },
        style: {
            hex: '615e65',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '371796',
            reelgoodLink: 'https://reelgood.com/show/industry-2020',
            imdbID: 'tt7671070',
            subReddit: 'IndustryOnHBO',
        },
    },
    'insideJob': {
        name: 'Inside Job',
        id: 'insideJob',
        link: {
            netflix: '80995819'
        },
        info: {
            water: movieServices.netflix,
            date: '',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "Lizard people? Real. The moon landing? Fake. Managing the world's conspiracies is a full-time job for an awkward genius and her dysfunctional co-workers.",
        },
        style: {
            hex: '1e3d51',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'invincible': {
        name: 'Invincible',
        id: 'invincible',
        // link: 'watchlink',
        info: {
            water: movieServices.prime,
            // description: 'Action &#149 Animation &#149 Superhero &#149 ___ Seasons &#149 Y000 - Present',
            // summary: "summary",
        },
        style: {
            hex: '6C7866',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            // tvTimeID: null,
            reelgoodLink: 'https://reelgood.com/show/invincible-2021',
            // imdbID: 'identifier',
            // subReddit: null,
        },
    },
    'loki': {
        name: 'Loki',
        id: 'loki',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: movieServices.disney,
            // date: '',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'fantasy',
                'sci-fi',
            ],
            summary: "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
            tags: ['mcu']
        },
        style: {
            hex: 'a87643',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: '362472',
            reelgoodLink: 'https://reelgood.com/show/loki-2021',
            imdbID: 'tt9140554',
            // subReddit: null,
        },
    },
    'ldr': {
        name: 'Love Death Robots',
        id: 'ldr',
        link: {
            netflix: '80174608'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 3,
            yearStart: 2019,
            yearEnd: null,
            genre: [
                'animation',
                'sci-fi',
            ],
            summary: "This collection of animated short stories spans several genres, including science fiction, fantasy, horror and comedy. World-class animation creators bring captivating stories to life in the form of a unique and visceral viewing experience. The animated anthology series includes tales that explore alternate histories, life for robots in a post-apocalyptic city and a plot for world domination by super-intelligent yogurt. Among the show's executive producers is Oscar-nominated director David Fincher.",
        },
        style: {
            hex: '200f17',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'webp',
                    size: '6.6 / 10',
                    title: false,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '357888',
            reelgoodLink: 'https://reelgood.com/show/love-death-robots-2019',
            imdbID: 'tt9561862',
            subReddit: 'LoveDeathAndRobots',
        },
    },
    'mando': {
        name: 'The Mandalorian',
        id: 'mando',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: movieServices.disney,
            // date: 'Dec 24, 2021',
            seasons: 1,
            yearStart: 2019,
            yearEnd: null,
            genre: [
                'action & adventure',
                'sci-fi',
            ],
            summary: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
            tags: ['starwars']
        },
        style: {
            hex: '4d627f',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'manifest': {
        name: 'Manifest',
        id: 'manifest',
        // link: 'watchlink',
        info: {
            water: movieServices.netflix,
            description: 'Drama &#149 Mystery &#149 3 Seasons &#149 2018 - Present',
            summary: "A commercial airliner suddenly reappears after being missing for five years. As those aboard reintegrate into society, they experience guiding voices and visions of events yet to occur, and soon a deeper mystery unfolds.",
        },
        style: {
            hex: '504A6A',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '349271',
            reelgoodLink: 'https://reelgood.com/show/manifest-2018',
            imdbID: 'tt8421350',
            subReddit: 'ManifestNBC',
        },
    },
    'mythic': {
        name: 'Mythic Quest',
        id: 'mythic',
        link: 'https://tv.apple.com/show/mythic-quest/umc.cmc.1nfdfd5zlk05fo1bwwetzldy3',
        info: {
            water: movieServices.apple,
            // date: '',
            seasons: 2,
            yearStart: 2020,
            yearEnd: null,
            genre: [
                'comedy',
            ],
            summary: "Meet the team behind the biggest multiplayer video game of all time. But in a workplace focused on building worlds, molding heroes, and creating legends, the most hard-fought battles don’t occur in the game—they happen in the office.",
        },
        style: {
            hex: '2F322F',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '362829',
            reelgoodLink: 'https://reelgood.com/show/mythic-quest-2020',
            imdbID: 'tt8879940',
            subReddit: 'MythicQuest',
        },
        cast: [
            {
                actor: 'Rob McElhenney',
                char: 'Ian',
            },
            {
                actor: 'Charlotte Nicdao',
                char: 'Poppy',
            },
            {
                actor: 'David Hornsby',
                char: 'David',
            },
            {
                actor: 'Danny Pudi',
                char: 'Brad',
            },
            {
                actor: 'F. Murray Abraham',
                char: 'C.W. Longbottom',
            },
        ],
    },
    'narcos': {
        name: 'Narcos: Mexico',
        id: 'narcos',
        link: {
            netflix: '80997085'
        },
        info: {
            water: movieServices.hulu,
            seasons: 3,
            yearStart: 2018,
            yearEnd: 2021,
            genre: [
                'crime',
                'drama',
            ],
            summary: "This continuation of 'Narcos' explores the origins of the modern drug war by going back to its roots, starting at a time when the Mexican trafficking world was a loose, disorganized confederation of independent growers and dealers. It's the 1980s, and Felix Gallardo takes the helm of the Guadalajara Cartel, unifying traffickers to build an empire. As DEA agent Kiki Camarena moves his wife and young son from California to Guadalajara to take on a new post, he learns his assignment is more challenging than he imagined. A tragic chain of events unfolds as Camarena gains intelligence on Gallardo and becomes more entangled in the mission.",
        },
        style: {
            hex: '5980C4',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
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
    'nine': {
        name: 'Nine Perfect Strangers',
        id: 'nine',
        link: 'https://www.hulu.com/series/nine-perfect-strangers-2be55e1a-4c31-4af6-aa25-e5c85528b73a',
        info: {
            water: movieServices.hulu,
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'drama',
                'mystery',
            ],
            summary: "Based on The New York Times bestselling book by author Liane Moriarty, “Nine Perfect Strangers” takes place at a boutique health-and-wellness resort that promises healing and transformation as nine stressed city dwellers try to get on a path to a better way of living. Watching over them during this 10-day retreat is the resort's director, Masha, a woman on a mission to reinvigorate their tired minds and bodies. However, these nine “perfect” strangers have no idea what is about to hit them.",
        },
        style: {
            hex: '6b7790',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '376815',
            reelgoodLink: 'https://reelgood.com/show/nine-perfect-strangers',
            imdbID: 'tt8760932',
            subReddit: 'nineperfectstrangers',
        },
    },
    'murders': {
        name: 'Only Murders in the Building',
        id: 'murders',
        link: 'https://www.hulu.com/series/ef31c7e1-cd0f-4e07-848d-1cbfedb50ddf',
        info: {
            water: movieServices.hulu,
            date: '28 Jun 2022',
            seasons: 2,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'crime',
                'comedy',
                'drama',
            ],
            summary: "From the minds of Steve Martin, Dan Fogelman & John Hoffman comes a comedic murder-mystery series for the ages. Only Murders in the Building follows three strangers (Steve Martin, Martin Short, and Selena Gomez) who share an obsession with true crime and suddenly find themselves wrapped up in one. When a grisly death occurs inside their exclusive Upper West Side apartment building, the trio suspects murder and employs their precise knowledge of true crime to investigate the truth. As they record a podcast of their own to document the case, the three unravel the complex secrets of the building which stretch back years. Perhaps even more explosive are the lies they tell one another. Soon, the endangered trio comes to realize a killer might be living amongst them as they race to decipher the mounting clues before it’s too late.",
        },
        style: {
            hex: colorData.fluent.yellow10,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'webp',
                    size: '2 / 3',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
        },
        apps: {
            tvTimeID: '399959',
            reelgoodLink: 'https://reelgood.com/show/only-murders-in-the-building-2021',
            imdbID: 'tt12851524',
            subReddit: 'OnlyMurdersHulu',
        },
        cast: [
            {
                actor: 'Steve Martin',
                char: 'Charles-Haden Savage',
            },
            {
                actor: 'Martin Short',
                char: 'Oliver Putnam',
            },
            {
                actor: 'Selena Gomez',
                char: 'Mabel Mora',
            },
        ],
    },
    'paradise': {
        name: 'Paradise PD',
        id: 'paradise',
        link: {
            netflix: '80191522'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
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
            // hex: '000000',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'reacher': {
        name: 'Reacher',
        id: 'reacher',
        link: {
            primeVideo: 'B09ML341D8'
        },
        info: {
            water: movieServices.prime,
            // date: '',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'action',
                'crime',
                'drama',
            ],
            summary: "Jack Reacher was arrested for murder and now the police need his help. Based on the books by Lee Child.",
        },
        style: {
            hex: FluentColor['green20'],
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '366924',
            reelgoodLink: 'https://reelgood.com/show/reacher-2022',
            imdbID: 'tt9288030',
            subReddit: 'JackReacher',
        },
        cast: [
            {
                actor: 'Alan Ritchson',
                char: 'Jack Reacher',
            },
        ],
    },
    'rick': {
        name: 'Rick and Morty',
        id: 'rick',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: null,
            // date: '',
            seasons: 5,
            yearStart: 2013,
            yearEnd: null,
            genre: [
                'animation',
                'comedy',
                'sci-fi',
            ],
            summary: "Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty.s already unstable family life, these events cause Morty much distress at home and school.",
        },
        style: {
            hex: '2D1D54',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
                char: 'Rick Sanchez, Morty Smith',
            },
            {
                actor: 'Chris Parnell',
                char: 'Jerry Smith',
            },
            {
                actor: 'Sarah Chalke',
                char: 'Beth Smith',
            },
            {
                actor: 'Spencer Grammer',
                char: 'Summer Smith',
            },
        ],
    },
    'succession': {
        name: 'Succession',
        id: 'succession',
        link: 'https://www.hulu.com/series/succession-7f3ad78e-0fdb-4b13-97c1-af4d06ed5601',
        info: {
            water: movieServices.hulu,
            // date: '12 Dec, 2021 21:00:00',
            // weekday: 'Sunday',
            seasons: 2,
            yearStart: 2018,
            yearEnd: null,
            genre: [
                //    'comedy',
                'drama',
            ],
            summary: "When a media tycoon considers retirement, each of his four grown children begins angling for their piece of the pie in this series.",
        },
        style: {
            hex: '555962',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
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
                char: 'Logan Roy',
            },
            {
                actor: 'Jeremy Strong',
                char: 'Kendall Roy',
            },
            {
                actor: 'Sarah Snook',
                char: 'Shiv Roy',
            },
            {
                actor: 'Matthew Macfadyen',
                char: 'Tom Wambsgans',
            },
            {
                actor: 'Kieran Culkin',
                char: 'Roman Roy',
            },
            {
                actor: 'Nicholas Braun',
                char: 'Greg Hirsch',
            },
            {
                actor: 'Alan Ruck',
                char: 'Connor Roy',
            },
        ],
    },
    'squid': {
        name: 'Squid Game',
        id: 'squid',
        link: {
            netflix: '81040344',
        },
        info: {
            water: movieServices.netflix,
            description: 'Action &#149 Adventure &#149 Drama &#149 1 Season &#149 2021 - Present',
            summary: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits - with deadly high stakes.",
        },
        style: {
            hex: '3f1513', // 7C4E31
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '383275',
            reelgoodLink: 'https://reelgood.com/show/squid-game-2021',
            imdbID: 'tt10919420',
            subReddit: 'squidgame',
        },
    },
    'ted': {
        name: "Ted Lasso",
        id: "ted",
        link: 'https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy',
        info: {
            water: movieServices.apple,
            weekday: 'Friday',
            seasons: 2,
            yearStart: 2020,
            yearEnd: null,
            genre: [
                'comedy',
                'drama',
                'sport',
            ],
            summary: "Ted Lasso, an American football coach, moves to England when he’s hired to manage a soccer team—despite having no experience. With cynical players and a doubtful town, will he get them to see the Ted Lasso Way?",
        },
        style: {
            hex: '35465e',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
                char: 'Ted Lasso',
            },
            {
                actor: 'Hannah Waddingham',
                char: 'Rebecca Welton',
            },
            {
                actor: 'Juno Temple',
                char: 'Keeley Jones',
            },
            {
                actor: 'Jeremy Swift',
                char: 'Higgins',
            },
            {
                actor: 'Phil Dunster',
                char: 'Jaime Tartt',
            },
            {
                actor: 'Brett Goldstein',
                char: 'Roy Kent',
            },
            {
                actor: 'Brendan Hunt',
                char: 'Coach Beard',
            },
            {
                actor: 'Nick Mohammed',
                char: 'Nathan Shelley',
            },
        ],
    },
    'shadows': {
        name: 'What We Do in the Shadows',
        id: 'shadows',
        link: 'https://www.hulu.com/series/what-we-do-in-the-shadows-0b10c46a-12f0-4357-8a00-547057b49bac',
        info: {
            water: movieServices.hulu,
            date: '12 Jul 2022',
            seasons: 4,
            yearStart: 2019,
            yearEnd: null,
            genre: [
                'comedy',
                'drama',
                'fantasy',
            ],
            summary: "Three vampires, Nandor, Colin Robinson and Nadja, struggle to keep up with the duties and responsibilities of everyday life as they reside in an apartment in New York.",
        },
        style: {
            hex: '1C2C70',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'webp',
                    size: '2 / 3',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: '358211',
            reelgoodLink: 'https://reelgood.com/show/what-we-do-in-the-shadows-2019',
            imdbID: 'tt7908628',
            subReddit: 'WhatWeDointheShadows',
        },
        cast: [
            {
                actor: 'Kayvan Novak',
                char: 'Nandor the Relentless',
            },
            {
                actor: 'Matt Berry',
                char: 'Laszlo Cravensworth',
            },
            {
                actor: 'Natasia Demetriou',
                char: 'Nadja',
            },
            {
                actor: 'Harvey Guillen',
                char: 'Guillermo de la Cruz',
            },
            {
                actor: 'Mark Proksch',
                char: 'Colin Robinson',
            },
        ],
    },
    'yellowjackets': {
        name: 'Yellowjackets',
        id: 'yellowjackets',
        link: '',
        info: {
            water: null,
            // date: '',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'drama',
                'horror',
                'mystery',
            ],
            summary: "A wildly talented high school girl soccer team becomes the (un)lucky survivors of a plane crash deep in the Ontario wilderness.",
        },
        style: {
            hex: '994d33',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'png',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '399731',
            reelgoodLink: 'https://reelgood.com/show/yellowjackets-2021',
            imdbID: 'tt11041332',
            subReddit: 'Yellowjackets',
        },
    },
    'superstore': {
        name: 'Superstore',
        id: 'superstore',
        link: {
            netflix: '80061132'
        },
        info: {
            water: movieServices.netflix,
            seasons: 6,
            yearStart: 2015,
            yearEnd: 2021,
            genre: [
                'comedy',
            ],
            summary: "Revolving around a group of employees at a big-box store, it examines love, friendship and the beauty of everyday moments.",
        },
        style: {
            hex: '0070DB',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '295648',
            reelgoodLink: 'https://reelgood.com/show/superstore-2015',
            imdbID: 'tt4477976',
            subReddit: 'superstore',
        },
        cast: [
            {
                actor: 'Ben Feldman',
                char: 'Jonah Simms',
            },
            {
                actor: 'America Ferrera',
                char: 'Amy Sosa',
            },
            {
                actor: 'Mark McKinney',
                char: 'Glenn Sturgis',
            },
            {
                actor: 'Lauren Ash',
                char: 'Dina Fox',
            },
            {
                actor: 'Colton Dunn',
                char: 'Garrett McNeill',
            },
            {
                actor: 'Nichole Sakura',
                char: 'Cheyenne Lee',
            },
            {
                actor: 'Nico Santos',
                char: 'Mateo Liwanag',
            },
        ],
    },
    'expanse': {
        name: 'The Expanse',
        id: 'expanse',
        link: {
            primeVideo: 'B09LGJ5QNB',
        },
        info: {
            water: movieServices.prime,
            // date: 'Jan 13, 2022 19:00:00',
            // weekday: 'Thursday',
            seasons: 6,
            yearStart: 2015,
            yearEnd: null,
            genre: [
                'action & adventure',
                'sci-fi',
            ],
            summary: "Hundreds of years in the future, things are different than what we are used to after humans have colonized the solar system and Mars has become an independent military power. Rising tensions between Earth and Mars have put them on the brink of war. Against this backdrop, a hardened detective and a rogue ship's captain come together to investigate the case of a missing young woman. The investigation leads them on a race across the solar system that could expose the greatest conspiracy in human history.",
        },
        style: {
            hex: '466A83',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'fisforfam': {
        name: 'F is for Family',
        id: 'fisforfam',
        link: {
            netflix: '80028732'
        },
        info: {
            water: movieServices.netflix,
            // date: 'Nov 25, 2021',
            seasons: 5,
            yearStart: 2015,
            yearEnd: null,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "Follow the Murphy family back to the 1970s, when kids roamed wild, beer flowed freely and nothing came between a man and his TV.",
        },
        style: {
            hex: '0B6F38',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '1',
        },
        apps: {
            tvTimeID: '287299',
            reelgoodLink: 'https://reelgood.com/show/f-is-for-family-2015',
            imdbID: 'tt4326894',
            subReddit: 'fisforfamily',
        },
        cast: [
            {
                actor: 'Bill Burr',
                char: 'Frank Murphy',
            },
            {
                actor: 'Laura Dern',
                char: 'Sue Murphy',
            },
            {
                actor: 'Justin Long',
                char: 'Kevin Murphy',
            },
            {
                actor: 'Debi Derryberry',
                char: 'Maureen Murphy',
            },
            {
                actor: 'Haley Reinhart',
                char: 'Bill Murphy',
            },
            {
                actor: 'Sam Rockwell',
                char: 'Vic',
            },
            {
                actor: 'Trevor Devall',
                char: 'Goomer',
            },
        ],
    },
    'newgirl': {
        name: 'New Girl',
        id: 'newgirl',
        link: {
            netflix: '70196145',
        },
        info: {
            water: movieServices.netflix,
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'comedy',
                'romance',
                'friends',
            ],
            summary: "Searching for answers, a socially awkward but endearing teacher moves in with three bachelors who think they understand love but are equally as lost.",
        },
        style: {
            hex: 'a59c4f',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
                char: 'Jessica Day',
            },
            {
                actor: 'Jake Johnson',
                char: 'Nick',
            },
            {
                actor: 'Max Greenfield',
                char: 'Schmidt',
            },
            {
                actor: 'Hannah Simone',
                char: 'Cece Parekh',
            },
            {
                actor: 'Lamorne Morris',
                char: 'Winston Bishop',
            },
            {
                actor: 'Damon Wayans Jr.',
                char: 'Coach',
            },
            {
                actor: 'Nasim Pedrad',
                char: 'Aly Nelson',
            },
            {
                actor: 'Nelson Franklin',
                char: 'Robby',
            },
            {
                actor: 'Megan Fox',
                char: 'Reagan',
            },
        ],
    },
    'league': {
        name: 'The League',
        id: 'league',
        link: 'https://www.hulu.com/series/the-league-6723b153-45c2-43a4-947f-7cc64ef7f2a3',
        info: {
            water: movieServices.hulu,
            seasons: 7,
            yearStart: 2009,
            yearEnd: 2015,
            genre: [
                'comedy',
                'sport',
            ],
            summary: "The League is an American sitcom and semi-improvised comedy about a about a fantasy football league and its members and their everyday lives.",
        },
        style: {
            hex: '003A6E',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'bojack': {
        name: 'Bojack Horseman',
        id: 'bojack',
        link: {
            netflix: '70300800'
        },
        info: {
            water: movieServices.hulu,
            seasons: 6,
            yearStart: 2014,
            yearEnd: 2020,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "Meet the most beloved sitcom horse of the '90s, 20 years later. He’s a curmudgeon with a heart of...not quite gold...but something like gold. Copper?",
        },
        style: {
            hex: '656592',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/bojack-horseman-2014',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'gameofthrones': {
        name: 'Game of Thrones',
        id: 'gameofthrones',
        link: 'https://www.hulu.com/series/game-of-thrones-6a787bf6-cc23-47a2-a2f3-747e22c30d1c',
        info: {
            water: movieServices.hulu,
            seasons: 8,
            yearStart: 2011,
            yearEnd: 2019,
            genre: [
                'adventure',
                'fantasy',
            ],
            summary: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        },
        style: {
            hex: '4e3e46',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'svg',
                size: 'widest',
            },
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
    'office': {
        name: 'The Office',
        id: 'office',
        link: {
            netflix: '70136120'
        },
        info: {
            water: movieServices.netflix,
            seasons: 9,
            yearStart: 2005,
            yearEnd: 2013,
            genre: [
                'comedy',
                'mockumentary',
            ],
            summary: "The everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.",
        },
        style: {
            hex: '7E6C64',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'svg',
                size: 'widest',
            },
            mobileType: 'png',
            mobileSize: '8 / 10',
        },
        apps: {
            tvTimeID: '73244',
            reelgoodLink: 'https://reelgood.com/show/the-office-2005',
            imdbID: 'tt0386676',
            subReddit: 'DunderMifflin',
        },
        cast: [
            {
                actor: 'Steve Carell',
                char: 'Michael Scott',
            },
            {
                actor: 'John Krasinski',
                char: 'Jim Halpert',
            },
            {
                actor: 'Jenna Fischer',
                char: 'Pam Beesly',
            },
            {
                actor: 'Rainn Wilson',
                char: 'Dwight Schrute',
            },
        ],
    },
    'bms': {
        name: 'Blue Mountain State',
        id: 'bms',
        link: {
            primeVideo: 'B08CG43CLR'
        },
        info: {
            water: movieServices.prime,
            seasons: 3,
            yearStart: 2010,
            yearEnd: 2011,
            genre: [
                'comedy',
                'sport',
            ],
            summary: "At Blue Mountain State, the benefits of being a player on one of the most successful football programs in the nation are just too good to pass up... beautiful girls, campus-wide celebrity and wild keg parties make college life a young man's dream. The new Freshman players on this notorious team are about to learn the extreme highs -- as well as the pitfalls - of being one of the chosen few.",
            tags: ['bms']
        },
        style: {
            hex: FluentColor.blue10,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'png',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: '134511',
            reelgoodLink: 'https://reelgood.com/show/blue-mountain-state-2010',
            imdbID: 'tt1344204',
            subReddit: 'BMS',
        },
        cast: [
            {
                actor: 'Darin Brooks',
                char: 'Alex Moran',
            },
            {
                actor: 'Alan Ritchson',
                char: 'Thad Castle',
            },
            {
                actor: 'Chris Romano',
                char: 'Sammy Cacciatore',
            },
            {
                actor: 'Ed Marino',
                char: 'Coach Marty Daniels',
            },
            {
                actor: 'Denise Richards',
                char: 'Debra',
            },
            {
                actor: 'Frankie Shaw',
                char: 'Mary Jo Cacciatore',
            },
            {
                actor: 'Sam Jones III',
                char: 'Craig Shilo',
            },
            {
                actor: 'Page Kennedy',
                char: 'Radon Randell',
            },
        ],
    },
    'fresh': {
        name: 'Fresh Prince of Bel-Air',
        id: 'fresh',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GXdLWQgqPHKXCPQEAAAxk:type:series',
        info: {
            water: movieServices.hbo,
            seasons: 6,
            yearStart: 1990,
            yearEnd: 1996,
            genre: [
                'comedy',
                'family',
            ],
            summary: "Will, a street-smart teenager, moves from the tough streets of West Philly to posh Bel-Air to live with his Uncle Philip, Aunt Vivian, his cousins — spoiled Hilary, preppy Carlton and young Ashley — and their sophisticated British butler, Geoffrey. Though Will’s antics and upbringing contrast greatly with the upper-class lifestyle of his extended relatives, he soon finds himself right at home as a loved part of the family.",
        },
        style: {
            hex: '754A9E',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'lost': {
        name: "Lost",
        id: "lost",
        link: "https://www.hulu.com/series/lost-466b3994-b574-44f1-88bc-63707507a6cb",
        info: {
            water: movieServices.hulu,
            description: "Action &#149 Adventure &#149 6 Seasons &#149 2004 - 2010",
            summary: "The survivors of a plane crash find themselves stranded on a mysterious island. They are forced to work together for their survival when they realise that they are not alone on the island.",
        },
        style: {
            hex: '6a5828',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: "73739",
            reelgoodLink: "https://reelgood.com/show/lost-2004",
            imdbID: "tt0411008",
        },
    },
    'brooklyn': {
        name: "Brooklyn Nine-Nine",
        id: "brooklyn",
        link: "https://www.hulu.com/series/brooklyn-nine-nine-daf48b7a-6cd7-4ef6-b639-a4811ec95232",
        info: {
            water: movieServices.hulu,
            seasons: 8,
            yearStart: 2013,
            yearEnd: 2021,
            genre: [
                'comedy',
                'crime',
            ],
            summary: "Detective Jake Peralta, a talented and carefree cop with the best arrest record, has never had to follow the rules too closely or work very hard. That changes when Ray Holt, a man with a lot to prove, becomes the new commanding officer of Brooklyn's 99th precinct. As Holt reminds Peralta to respect the badge, an extremely competitive colleague - Detective Amy Santiago - starts to close in on the hotshot cop's arrest record.",
        },
        style: {
            hex: '8b6a4b',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tall',
            },
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
    'whiteCollar': {
        name: 'White Collar',
        id: 'whiteCollar',
        link: 'https://www.hulu.com/series/white-collar-58d3d0ce-8d86-4ccd-bd0c-104551448432',
        info: {
            water: movieServices.hulu,
            seasons: 6,
            yearStart: 2009,
            yearEnd: 2014,
            genre: [
                'crime',
            ],
            summary: "White Collar is about the unlikely partnership of a con artist and an FBI agent who have been playing cat and mouse for years. Neal Caffrey (Matt Bomer), a charming criminal mastermind, is finally caught by his nemesis, FBI Agent Peter Burke (Tim DeKay.)",
        },
        style: {
            hex: '615c59',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/white-collar-2009',
            imdbID: 'tt1358522',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Matt Bomer',
                char: 'Neal Caffery',
            },
            {
                actor: 'Tim DeKay',
                char: 'Peter Burke',
            },
            {
                actor: 'Willie Garson',
                char: 'Mozzie',
            },
            {
                actor: 'Marsha Thomason',
                char: 'Diana Berrigan',
            },
            {
                actor: 'Sharif Atkins',
                char: 'Clinton Jones',
            },
            {
                actor: 'Tiffani Thiessen',
                char: 'Elizabeth Burke',
            },
        ],
    },
    'himym': {
        name: 'How I Met Your Mother',
        id: 'himym',
        link: 'https://www.hulu.com/series/how-i-met-your-mother-bc68ac79-3ace-4427-9ec0-5ee6f314d194',
        info: {
            water: movieServices.hulu,
            seasons: 9,
            yearStart: 2005,
            yearEnd: 2014,
            genre: [
                'comedy',
                'romance',
                'friends',
            ],
            summary: "A half-hour comedy series about Ted and how he fell in love. It all started when Ted’s best friend, Marshall, drops the bombshell that he’s going to propose to his long-time girlfriend, Lily, a kindergarten teacher. At that moment, Ted realizes that he had better get a move on if he hopes to find true love, too.",
            tags: ['himym']
        },
        style: {
            hex: '60B9C6',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'svg',
                size: 'tallest',
            },
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
                char: 'Ted Mosby',
            },
            {
                actor: 'Jason Segel',
                char: 'Marshall Eriksen',
            },
            {
                actor: 'Cobie Smulders',
                char: 'Robin Scherbatsky',
            },
            {
                actor: 'Neil Patrick Harris',
                char: 'Barney Stinson',
            },
            {
                actor: 'Alyson Hannigan',
                char: 'Lily Aldrin',
            },
        ],
    },
    'jurassic1': {
        name: 'Jurassic Park',
        id: 'jurassic1',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYJlJDwG96Q_DwgEAAAA1:type:feature',
        info: {
            water: movieServices.hbo,
            year: 1993,
            genre: [
                'action & adventure',
                'sci-fi',
            ],
            summary: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
            tags: ['jurassic']
        },
        style: {
            hex: '3c2d2a',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tallest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/jurassic-park-1993',
            imdbID: 'tt0107290',
        },
    },
    'indiana1': {
        name: 'Raiders of the Lost Ark',
        id: 'indiana1',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: null,
            year: 1981,
            genre: [
                'action',
                'adventure',
            ],
            summary: "When Dr. Indiana Jones - the tweed-suited professor who just happens to be a celebrated archaeologist - is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
        },
        style: {
            hex: '9a6a45',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/raiders-of-the-lost-ark-1981',
            imdbID: 'tt0082971',
            // subReddit: 'subreddit',
        },
    },
    'walle': {
        name: 'Wall-E',
        id: 'walle',
        link: 'https://www.disneyplus.com/movies/wall-e/5G1wpZC2Lb6I',
        info: {
            water: movieServices.disney,
            year: 2008,
            genre: [
                'animation',
                'adventure',
                'sci-fi',
            ],
            summary: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
            tags: ['disney']
        },
        style: {
            hex: '232055',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/walle-2008',
            imdbID: 'tt0910970',
            // subReddit: 'subreddit',
        },
    },
    'saving': {
        name: 'Saving Private Ryan',
        id: 'saving',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: null,
            year: 1998,
            genre: [
                'drama',
                'war',
            ],
            summary: "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
        },
        style: {
            hex: '6f716b',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/saving-private-ryan-1998',
            imdbID: 'tt0120815',
            // subReddit: 'subreddit',
        },
    },
    'backToTheFuture1': {
        name: 'Back to the Future',
        id: 'backToTheFuture1',
        // link: 'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
        info: {
            water: null,
            year: 1985,
            genre: [
                'adventure',
                'comedy',
                'sci-fi',
            ],
            summary: "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
        },
        style: {
            hex: '605267',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/back-to-the-future-1985',
            imdbID: 'tt0088763',
            // subReddit: 'subreddit',
        },
    },
    'starwars4': {
        name: 'Star Wars: Episode IV - A New Hope',
        id: 'starwars4',
        link: 'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
        info: {
            water: movieServices.disney,
            year: 1977,
            genre: [
                'adventure',
                'sci-fi',
            ],
            summary: "Luke Skywalker begins a journey that will change the galaxy in Star Wars: Episode IV - A New Hope. Nineteen years after the formation of the Empire, Luke is thrust into the struggle of the Rebel Alliance when he meets Obi-Wan Kenobi, who has lived for years in seclusion on the desert planet of Tatooine. Obi-Wan begins Luke’s Jedi training as Luke joins him on a daring mission to rescue the beautiful Rebel leader Princess Leia from the clutches of Darth Vader and the evil Empire. Contains tobacco depictions.",
            tags: ['starwars']
        },
        style: {
            hex: '372f35',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/star-wars-1977',
            imdbID: 'tt0076759',
            // subReddit: 'subreddit',
        },
    },
    'interstellar': {
        name: 'Interstellar',
        id: 'interstellar',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: null,
            year: 2014,
            genre: [
                'drama',
                'sci-fi',
            ],
            summary: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        },
        style: {
            hex: '94a6ac',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/interstellar-2014',
            imdbID: 'tt0816692',
            // subReddit: 'subreddit',
        },
    },
    'avatar': {
        name: 'Avatar',
        id: 'avatar',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: movieServices.disney,
            // date: '',
            year: 2009,
            genre: [
                'adventure',
                'sci-fi',
            ],
            summary: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        },
        style: {
            hex: '106888',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/avatar-2009',
            imdbID: 'tt0499549',
            // subReddit: 'subreddit',
        },
    },
    'cars2': {
        name: 'Cars 2',
        id: 'cars2',
        // link: 'https://www.disneyplus.com/movies/cars-2',
        info: {
            water: movieServices.disney,
            year: 2011,
            genre: [
                'adventure',
                'animation',
                'cars',
            ],
            summary: "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
            tags: ['disney']
        },
        style: {
            hex: '1E374D',
            poster: {
                wide: {
                    type: 'jpeg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/cars-2-2011',
            imdbID: 'tt1216475',
            // subReddit: 'subreddit',
        },
    },
    'cars1': {
        name: 'Cars',
        id: 'cars1',
        // link: 'https://www.disneyplus.com/movies/cars',
        info: {
            water: movieServices.disney,
            year: 2006,
            genre: [
                'adventure',
                'animation',
                'cars',
            ],
            summary: "Race car Lightning McQueen is living in the fast lane...until he hits a detour and gets stranded in Radiator Springs, a forgotten town on Route 66. There he meets a heap of hilarious characters who help him discover there's more to life than fame.",
            tags: ['disney']
        },
        style: {
            hex: '1E374D',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/cars-2006',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'spiderMan3': {
        name: 'Spider-Man: No Way Home',
        id: 'spiderMan3',
        // link: '',
        info: {
            water: movieServices.disney,
            // date: '15 Dec, 2021',
            year: 2021,
            genre: [
                'sci-fi',
            ],
            summary: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
            tags: ['mcu']
        },
        style: {
            hex: 'af0000',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/spiderman-no-way-home-2021',
            imdbID: 'tt10872600',
            // subReddit: 'subreddit',
        },
    },
    'spider_1_3': {
        name: 'Spider-Man 3',
        id: 'spider_1_3',
        link: {
            netflix: '70047101'
        },
        info: {
            water: movieServices.netflix,
            year: 2007,
            genre: [
                'action',
                'sci-fi',
            ],
            summary: "The seemingly invincible Spider-Man goes up against an all-new crop of villains in the third installment of the blockbuster adventure series.",
        },
        style: {
            hex: '484b53',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/spider-man-3-2007',
            imdbID: 'tt0413300',
            // subReddit: 'subreddit',
        },
    },
    'peaks': {
        name: '14 Peaks: Nothing is Impossible',
        id: 'peaks',
        link: {
            netflix: '81464765'
        },
        info: {
            water: movieServices.hulu,
            year: 2021,
            genre: [
                'documentary',
            ],
            summary: "Fearless Nepali mountaineer Nimsdai Purja embarks on a seemingly impossible quest to summit all 14 of the world’s 8,000-meter peaks in seven months.",
        },
        style: {
            hex: '4b6176',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '1',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/14-peaks-nothing-is-impossible-2021',
            imdbID: 'tt14079374',
            // subReddit: 'subreddit',
        },
    },
    'haroldAndKumar3': {
        name: 'A Very Harold & Kumar Christmas',
        id: 'haroldAndKumar3',
        link: {
            netflix: '70178622'
        },
        info: {
            water: movieServices.netflix,
            year: 2011,
            genre: [
                'comedy',
                'adventure',
            ],
            summary: "After Kumar burns down Harold's family Christmas tree, the stoner pals tangle with mobsters on a pot-fueled Christmas Eve adventure through Manhattan.",
        },
        style: {
            hex: '274223',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'kingsMan': {
        name: "The King's Man",
        id: 'kingsMan',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: null,
            // date: 'Dec 22, 2021',
            year: 2021,
            genre: [
                'spy',
                'comedy',
            ],
            summary: "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions.",
        },
        style: {
            hex: '444f52',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/the-kings-man-2020',
            imdbID: 'tt6856242',
        },
    },
    'spider_1_1': {
        name: 'Spider-Man',
        id: 'spider_1_1',
        link: {
            netflix: '60004481'
        },
        info: {
            water: movieServices.netflix,
            year: 2002,
            genre: [
                'action',
                'sci-fi',
            ],
            summary: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
        },
        style: {
            hex: '9a6732',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/spider-man-2002',
            imdbID: 'tt0145487',
            // subReddit: 'subreddit',
        },
    },
    'lotr1': {
        name: 'Lord of the Rings: Fellowship of the Ring',
        id: 'lotr1',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYG9OEApMzVPDfAEAAAAE:type:feature',
        info: {
            water: movieServices.hbo,
            // date: '',
            year: 2001,
            genre: [
                'adventure',
                'fantasy',
            ],
            summary: "With the help of a courageous fellowship of friends and allies, Frodo embarks on a perilous mission to destroy the legendary One Ring.",
        },
        style: {
            hex: '7e763f',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/the-lord-of-the-rings-the-fellowship-of-the-ring-2001',
            imdbID: 'tt0120737',
            // subReddit: 'subreddit',
        },
    },
    'soul': {
        name: 'Soul',
        id: 'soul',
        link: 'https://www.disneyplus.com/en-gb/movies/soul/77zlWrb9vRYp',
        info: {
            water: movieServices.disney,
            // date: '',
            year: 2020,
            genre: [
                'animation',
                'comedy',
            ],
            summary: "Jamie Foxx leads an all-star cast in this hilarious, heart-filled adventure. Pixar’s 'Soul' introduces Joe, who lands the gig of his life at the best jazz club in town. But one misstep lands Joe in a fantastical place: The Great Before. There, he teams up with soul 22 (Tina Fey), and together they find the answers to some of life’s biggest questions.",
            tags: ['disney']
        },
        style: {
            hex: '232e43',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tallest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/soul-2020-1',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'haroldAndKumar': {
        name: 'Harold & Kumar Go To White Castle',
        id: 'haroldAndKumar',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: movieServices.hbo,
            year: 2004,
            genre: [
                'comedy',
                'adventure',
            ],
            summary: "Nerdy accountant Harold and his irrepressible friend, Kumar, get stoned watching television and find themselves utterly bewitched by a commercial for White Castle. Convinced there must be one nearby, the two set out on a late-night odyssey that takes them deep into New Jersey. Somehow, the boys manage to run afoul of rednecks, cops and even a car-stealing Neil Patrick Harris before getting anywhere near their beloved sliders.",
        },
        style: {
            hex: '5980C4',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '12.4 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/harold-kumar-go-to-white-castle-2004',
            imdbID: 'tt0366551',
            // subReddit: 'subreddit',
        },
    },
    'scaryMovie': {
        name: 'Scary Movie',
        id: 'scaryMovie',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: null,
            year: 2000,
            genre: [
                'comedy',
                'horror',
            ],
            summary: "A familiar-looking group of teenagers find themselves being stalked by a more-than-vaguely recognizable masked killer! As the victims begin to pile up and the laughs pile on, none of your favorite scary movies escape the razor-sharp satire of this outrageously funny parody!",
        },
        style: {
            hex: '994d33',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '8 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/scary-movie-2000',
            imdbID: 'tt0175142',
            // subReddit: 'subreddit',
        },
    },
    'crazyRich': {
        name: 'Crazy Rich Asians',
        id: 'crazyRich',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GX6QtHQxBD5nCwwEAAAHM:type:feature',
        info: {
            water: movieServices.hbo,
            year: 2018,
            genre: [
                'drama',
                'romance',
            ],
            summary: "An American-born Chinese economics professor accompanies her boyfriend to Singapore for his best friend's wedding, only to get thrust into the lives of Asia's rich and famous.",
            tags: ['romcom']
        },
        style: {
            hex: '76665b',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tallest',
            },
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
                char: 'Rachel Chu',
            },
            {
                actor: 'Henry Golding',
                char: 'Nick Young',
            },
            {
                actor: 'Michelle Yeoh',
                char: 'Eleanor Young',
            },
            {
                actor: 'Gemma Chan',
                char: 'Astrid Young Teo',
            },
            {
                actor: 'Jimmy O. Yang',
                char: 'Bernard Tai',
            },
            {
                actor: 'Ronny Chieng',
                char: 'Eddie Cheng',
            },
        ],
    },
    'closer': {
        name: 'Dave Chappelle: The Closer',
        id: 'closer',
        link: {
            netflix: '81228510'
        },
        info: {
            water: movieServices.hulu,
            // date: '',
            year: 2021,
            genre: [
                'comedy special',
            ],
            summary: "As he closes out his slate of comedy specials, Dave takes the stage to try and set the record straight - and get a few things off his chest.",
            tags: ['standup']
        },
        style: {
            hex: '6d223c',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
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
    'zindagi': {
        name: 'Zindagi Na Milegi Dobara',
        id: 'zindagi',
        link: {
            netflix: '70202336'
        },
        info: {
            water: movieServices.netflix,
            description: 'Drama &#149 Romance &#149 2011',
            summary: "Three friends on an adventurous road trip/bachelor party in Spain learn some lessons about themselves and each other that will change them forever.",
            tags: ['romcom']
        },
        style: {
            hex: '313B47',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'tallest',
            },
            mobileType: 'jpg',
            mobileSize: '1',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/zindagi-na-milegi-dobara-2011',
            imdbID: 'tt1562872',
            // subReddit: 'subreddit',
        },
    },
    'noTime': {
        name: 'No Time to Die',
        id: 'noTime',
        // link: {
        //     netflix: '80197526'
        // },
        info: {
            water: null,
            // date: '',
            description: 'Action &#149 Spy &#149 2021',
            summary: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
            tags: ['bond']
        },
        style: {
            hex: '3c4749',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
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
    'free': {
        name: "Free Guy",
        id: "free",
        link: null,
        info: {
            water: null,
            description: "Adventure &#149 Comedy &#149 Sci-Fi &#149 2021",
            summary: "When a bank teller discovers he is actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there are no limits, he is determined to save the day his way before it is too late, and maybe find a little romance with the coder who conceived him.",
        },
        style: {
            hex: '599DAA',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: null,
            reelgoodLink: "https://reelgood.com/movie/free-guy-2020",
            imdbID: "tt6264654",
        },
    },
    'theend': {
        name: 'This is the End',
        id: 'theend',
        // link: 'watchlink',
        info: {
            water: null,
            description: 'Comedy &#149 2013',
            summary: "Six Los Angeles celebrities are stuck in James Franco's house after a series of devastating events just destroyed the city. Inside, the group not only have to face the apocalypse, but themselves.",
        },
        style: {
            hex: '3b2420',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
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
    'shang': {
        name: 'Shang-Chi',
        id: 'shang',
        link: null,
        info: {
            water: movieServices.disney,
            year: 2021,
            genre: [
                'action & adventure',
                'fantasy',
            ],
            summary: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
            tags: ['mcu']
        },
        style: {
            hex: '4b3831',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            tvTimeID: null,
            reelgoodLink: "https://reelgood.com/movie/shangchi-and-the-legend-of-the-ten-rings-2021",
            imdbID: 'tt9376612',
        },
    },
    'roadToPerdition': {
        name: 'Road to Perdition',
        id: 'roadToPerdition',
        // link: 'https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ',
        info: {
            water: null,
            year: 2002,
            genre: [
                'adventure',
                'crime',
                'thriller',
            ],
            summary: "A mob enforcer's son in 1930s Illinois witnesses a murder, forcing him and his father to take to the road, and his father down a path of redemption and revenge.",
        },
        style: {
            hex: '55534d',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/road-to-perdition-2002',
            imdbID: 'tt0257044',
            // subReddit: 'subreddit',
        },
    },
    'goodfellas': {
        name: 'Goodfellas',
        id: 'goodfellas',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYEZm4Qn1r7CgYgEAAAAb:type:feature',
        info: {
            water: movieServices.hbo,
            year: 1990,
            genre: [
                'crime',
                'drama',
                'mob',
            ],
            summary: "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        },
        style: {
            hex: '1e252c',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/goodfellas-1990',
            imdbID: 'tt0099685',
            // subReddit: 'subreddit',
        },
    },
    'social': {
        name: 'The Social Dilemma',
        id: 'social',
        link: {
            netflix: '81254224'
        },
        info: {
            water: movieServices.hulu,
            year: 2020,
            genre: [
                'documentary',
            ],
            summary: "This documentary-drama hybrid explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
        },
        style: {
            hex: 'F7ECBD',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'jpg',
            mobileSize: '7 / 10',
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            imdbID: 'tt11464826',
            // subReddit: 'subreddit',
        },
    },
    'problem': {
        name: 'The Problem With Jon Stewart',
        id: 'problem',
        link: 'https://tv.apple.com/show/the-problem-with-jon-stewart/umc.cmc.4fcexvzqezr25p9weks6sxpob',
        info: {
            water: movieServices.apple,
            // date: '',
            weekday: 'Thursday',
            seasons: 1,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'comedy',
                'talk show',
            ],
            summary: "It's easy to feel overwhelmed by the world's problems. It's harder to pinpoint the systems responsible for creating them. In this series, Jon Stewart brings together people impacted by different parts of a problem to discuss how we come up with change.",
        },
        style: {
            hex: '334348',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'webp',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '400756',
            reelgoodLink: 'https://reelgood.com/show/the-problem-with-jon-stewart-2021',
            imdbID: 'tt15084142',
            // subReddit: 'subreddit',
        },
    },
    'yourname': {
        name: "Your Name.",
        id: "yourname",
        link: null,
        info: {
            water: null,
            description: "Animation &#149 Drama &#149 Fantasy &#149 2016",
            summary: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        },
        style: {
            hex: '768a8e',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: null,
            reelgoodLink: "https://reelgood.com/movie/your-name-2016",
            imdbID: "tt5311514",
        },
    },
    'fargo': {
        name: 'Fargo',
        id: 'fargo',
        // link: 'https://www.hulu.com/series/fargo-203cda1b-7919-40fb-ab36-1e45b3ed2a50',
        link: 'https://app.primevideo.com/detail?gti=amzn1.dv.gti.14ba6109-ae62-0f50-8497-6d5173593c6f',
        info: {
            water: movieServices.prime,
            seasons: 4,
            yearStart: 2014,
            yearEnd: null,
            genre: [
                'crime',
                'drama',
                'thriller',
            ],
            summary: "In 1950 Kansas City, two crime syndicates fighting for a piece of the American dream have struck an uneasy peace. Together, they control an alternate economy of exploitation, graft and drugs. To cement their truce, Loy Cannon, the head of the Black crime family, trades his youngest son to his enemy Donatello Fadda, the head of the Italian mafia. In return, Donatello surrenders his youngest son Zero to Loy. Intertwined with this tale of immigration, assimilation, and power, are the stories of Josto Fadda, the impulsive and self-indulgent heir apparent to the Fadda Crime Family; Donatello’s adopted son Rabbi Milligan; Detective Odis Weff and Oraetta Mayflower; Ethelrida Pearl Smutny, the precocious 16-year-old daughter of Thurman and Dibrell Smutny; and U.S. Marshal Dick “Deafy” Wickware.",
        },
        style: {
            hex: '28374E',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            tvTimeID: '269613',
            reelgoodLink: 'https://reelgood.com/show/fargo-2014',
            imdbID: 'tt2802850',
            subReddit: 'FargoTV',
        },
    },
    'vir': {
        name: 'Vir Das: For India',
        id: 'vir',
        link: {
            netflix: '80995996'
        },
        info: {
            water: movieServices.hulu,
            year: 2020,
            genre: [
                'comedy special',
            ],
            summary: "From the Vedas to Vasco da Gama to vacuous Bollywood plotlines, comedian Vir Das celebrates the history of India with his one-of-a-kind perspective.",
            tags: ['standup']
        },
        style: {
            hex: '9b732e',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
            mobileType: 'png',
            mobileSize: '7 / 10',
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/vir-das-for-india-2020',
            imdbID: 'tt11611314',
        },
    },
    'killingEve': {
        name: 'Killing Eve',
        id: 'killingEve',
        link: 'https://www.hulu.com/series/killing-eve-c9d3b601-54db-42d1-a1ed-8950cea491b1',
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 4,
            yearStart: 2018,
            yearEnd: 2022,
            genre: [
                'action & adventure',
                'drama',
            ],
            summary: "Villanelle is a psychopathic assassin, and Eve is the woman charged with hunting her down; the two fiercely intelligent women, equally obsessed with each other, go head to head in an epic game of cat and mouse.",
        },
        style: {
            hex: FluentColor.red,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
            mobileType: 'webp',
            mobileSize: '2 / 3',
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/killing-eve-2018',
            imdbID: 'tt7016936',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Jodie Comer',
                char: 'Villanelle',
            },
            {
                actor: 'Sandra Oh',
                char: 'Eve Polastri',
            },
        ],
    },
    'ministry': {
        name: 'The Ministry of Time',
        id: 'ministry',
        link: 'https://play.hbomax.com/page/urn:hbo:page:GYT_OuA4CCYrCwgEAAAAf:type:series',
        info: {
            water: movieServices.hbo,
            // date: '',
            seasons: 4,
            yearStart: 2015,
            yearEnd: null,
            genre: [
                'history',
                'sci-fi',
            ],
            summary: "To ensure that the history of Spain does not change and thus protect our present. This is the mission of the Ministry of Time, a secret government institution.",
        },
        style: {
            hex: '3d250f',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'jpeg',
                    size: '7 / 10',
                    title: false,
                }
            },
            title: {
                type: 'png',
                size: 'tallest',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/the-ministry-of-time-2015',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'kal': {
        name: 'Kal Ho Naa Ho',
        id: 'kal',
        link: {
            netflix: '60036735'
        },
        info: {
            water: movieServices.netflix,
            // date: '',
            year: 2003,
            genre: [
                'comedy',
                'romance',
            ],
            summary: "An uptight MBA student falls for the charismatic new neighbor who charms her troubled family - but he has a secret that forces him to push her away.",
        },
        style: {
            hex: 'ffffff',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '8 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/kal-ho-naa-ho-2003',
            imdbID: 'tt0347304',
            // subReddit: 'subreddit',
        },
    },
    'joking': {
        name: 'Jack Whitehall: I\'m Only Joking',
        id: 'joking',
        link: {
            netflix: '81060252'
        },
        info: {
            water: movieServices.hulu,
            year: 2020,
            genre: [
                'comedy special',
            ],
            summary: "Jack Whitehall hits the stage with hilarious tales about happy couples, life in hotels, human stupidity and his well-traveled father.",
            tags: ['standup']
        },
        style: {
            hex: FluentColor.blue10,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'webp',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/jack-whitehall-im-only-joking-2020',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'virAbroad': {
        name: 'Vir Das: Abroad Understanding',
        id: 'virAbroad',
        link: {
            netflix: '80133552'
        },
        info: {
            water: movieServices.hulu,
            year: 2017,
            genre: [
                'comedy special',
            ],
            summary: "Comedian Vir Das tackles nationalism, globalism, good food and bad politics in two cleverly crosscut performances in New York and New Delhi.",
            tags: ['standup']
        },
        style: {
            hex: '9b732e',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/vir-das-abroad-understanding-2017',
            imdbID: 'tt6822400',
        },
    },
    'noMercy': {
        name: 'No Mercy No Malice',
        id: 'noMercy',
        link: {
            cnn: '2367872'
        },
        info: {
            water: movieServices.cnn,
            // date: '5 Apr 2022',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'business',
                'news',
            ],
            summary: "Serial entrepreneur and NYU professor Scott Galloway brings his unapologetic take on how the worlds of business, tech and society intersect.",
        },
        style: {
            hex: 'ccc',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7.5 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '418233',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Scott Galloway',
            },
        ],
    },
    'land': {
        name: 'Land of the Giants: Titans of Tech',
        id: 'land',
        link: {
            cnn: '2244411'
        },
        info: {
            water: movieServices.cnn,
            // date: '31 Mar 2022',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'documentary',
                'tech',
            ],
            summary: "Inside the meteoric rise of Facebook, Apple, Amazon, Netflix and Google — from their small origins to their current domination of the tech industry.",
        },
        style: {
            hex: FluentColor.blue10,
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7.5 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '417426',
            // reelgoodLink: 'link',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'murdochs': {
        name: 'The Murdochs: Empire of Influence',
        id: 'murdochs',
        link: {
            cnn: '2238296'
        },
        info: {
            water: movieServices.cnn,
            // date: '',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'documentary',
                'history',
            ],
            summary: "Based on The New York Times' groundbreaking reporting, this series tackles the troubling legacy of media mogul Rupert Murdoch and his family.",
        },
        style: {
            hex: '333333',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7.5 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            imdbID: 'tt18268454',
            // subReddit: 'subreddit',
        },
    },
    'sixties': {
        name: 'The Sixties',
        id: 'sixties',
        link: {
            cnn: '2014011'
        },
        info: {
            water: movieServices.cnn,
            // date: '',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'documentary',
                'history',
            ],
            summary: "From the space race and Cold War to civil rights and more, this series explores how the 1960s shaped our history.",
        },
        style: {
            hex: FluentColor.magenta20,
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7.5 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/the-sixties-2014',
            imdbID: 'tt3268200',
            // subReddit: 'subreddit',
        },
    },
    'ronnyDestroy': {
        name: 'Ronny Chieng: Asian Comedian Destroys America!',
        id: 'ronnyDestroy',
        link: {
            netflix: '81070659'
        },
        info: {
            water: movieServices.hulu,
            year: 2019,
            genre: [
                'comedy special',
            ],
            summary: `Ronny Chieng ("The Daily Show," "Crazy Rich Asians") takes center stage in this stand-up special and riffs on modern American life and more.`,
            tags: ['standup']
        },
        style: {
            hex: FluentColor.cyan30,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/ronny-chieng-asian-comedian-destroys-america-2019',
            imdbID: 'tt11248800',
        },
        cast: [
            {
                actor: 'Ronny Chieng',
            },
        ],
    },
    '112263': {
        name: '11.22.63',
        id: '112263',
        link: 'https://www.hulu.com/series/112263-8924769b-be48-49c9-a969-984a30a3a33e',
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 1,
            year: 2016,
            genre: [
                'drama',
                'history',
            ],
            summary: `Imagine having the power to change history. Would you journey down the "rabbit hole?" This eight –part event series follows Jake Epping (James Franco), an ordinary high school teacher, presented with the unthinkable mission of traveling back in time to prevent the assassination of John F. Kennedy on November 22, 1963. Jake travels to the past in order to solve the most enduring mystery of the 20th century: who killed JFK, and could it have been stopped? But as Jake will learn, the past does not want to be changed. And trying to divert the course of history may prove fatal.`,
        },
        style: {
            hex: FluentColor.red,
            hex: 'e6c8a0',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'jpeg',
                    size: '2 / 3',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/112263-2016',
            imdbID: 'tt2879552',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'James Franco',
                char: 'Jake Epping',
            },
            {
                actor: 'Sarah Gadon',
                char: 'Sadie Dunhill',
            },
            {
                actor: 'George MacKay',
                char: 'Bill Turcotte',
            },
            {
                actor: 'Chris Cooper',
                char: 'Al Templeton',
            },
        ],
    },
    'jimmyGood': {
        name: 'Jimmy O. Yang: Good Deal',
        id: 'jimmyGood',
        link: {
            primeVideo: 'B08BYYHS61'
        },
        info: {
            water: movieServices.prime,
            year: 2020,
            genre: [
                'comedy special',
            ],
            summary: "In his debut standup special, Good Deal, Jimmy will tell you all about his take on Asian representation, how he learned to speak English from rap videos, dating tall women, and pursuing his dreams only to disappoint his old school Chinese parents. From assimilation to representation, Jimmy O. Yang delivers an absolutely hilarious hour of comedy in Good Deal.",
            tags: ['standup']
        },
        style: {
            hex: FluentColor.cyan30,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                wide: {
                    type: 'webp',
                    title: false,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: false,
                },
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/movie/jimmy-o-yang-good-deal-2020',
            imdbID: 'tt11250926',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'Jimmy O. Yang',
            },
        ],
    },
    'zohan': {
        name: 'You Don\'t Mess with the Zohan',
        id: 'zohan',
        link: {
            netflix: '70087541'
        },
        info: {
            water: movieServices.netflix,
            // date: '',
            year: 2008,
            genre: [
                'action',
                'comedy',
            ],
            summary: "An Israeli counterterrorism soldier with a secretly fabulous ambition to become a Manhattan hairstylist will do anything to make his dreams come true.",
        },
        style: {
            hex: 'ffffff',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/you-dont-mess-with-the-zohan-2008',
            imdbID: 'tt0960144',
        },
        cast: [
            {
                actor: 'Adam Sandler',
                char: 'Zohan',
            },
            {
                actor: 'John Turturro',
                char: 'Phantom',
            },
        ],
    },
    'eurovision': {
        name: 'Eurovision Song Contest: The Story of Fire Saga',
        id: 'eurovision',
        link: {
            netflix: '80244088'
        },
        info: {
            water: movieServices.netflix,
            year: 2020,
            genre: [
                'comedy',
                'musical',
            ],
            summary: "Two small-town singers chase their pop star dreams at a global music competition, where high stakes, scheming rivals and onstage mishaps test their bond.",
        },
        style: {
            hex: '896a3a',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '8 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            reelgoodLink: 'https://reelgood.com/movie/eurovision-song-contest-the-story-of-fire-saga-2020',
            imdbID: 'tt8580274',
        },
        cast: [
            {
                actor: 'Will Ferrell',
                char: 'Lars Erickssong',
            },
            {
                actor: 'Rachel McAdams',
                char: 'Sigrit Ericksdóttir',
            },
            {
                actor: 'Dan Stevens',
                char: 'Alexander Lemtov',
            },
            {
                actor: 'Mikael Persbrandt',
                char: 'Victor Karlosson',
            },
            {
                actor: 'Pierce Brosnan',
                char: 'Erick Erickssong',
            },
            {
                actor: 'Melissanthi Mahut',
                char: 'Mita Xenakis',
            },
        ],
    },
    'bling': {
        name: 'Bling Empire',
        id: 'bling',
        link: {
            netflix: '81039144'
        },
        info: {
            water: movieServices.netflix,
            seasons: 2,
            yearStart: 2021,
            yearEnd: null,
            genre: [
                'reality',
            ],
            summary: "Follow LA's wildly wealthy Asian and Asian American fun seekers as they go all out with fabulous parties, glamour and drama in this reality series.",
        },
        style: {
            hex: 'b3916e',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '8 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '393680',
            reelgoodLink: 'https://reelgood.com/show/bling-empire-2021',
            imdbID: 'tt13660962',
            subReddit: 'BlingEmpire',
        },
    },
    'supernature': {
        name: 'Ricky Gervais: SuperNature',
        id: 'supernature',
        link: {
            netflix: '80225917'
        },
        info: {
            water: movieServices.hulu,
            year: 2022,
            genre: [
                'comedy special',
            ],
            summary: "Ricky Gervais gives his take on the rules of comedy, spoiling his cats and how super actual nature is in his second Netflix stand-up special.",
            tags: ['standup']
        },
        style: {
            hex: FluentColor.cyan30,
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            // reelgoodLink: 'link',
            imdbID: 'tt19885626',
        },
        cast: [
            {
                actor: 'Ricky Gervais',
            },
        ],
    },
    'phineas': {
        name: 'Phineas and Ferb',
        id: 'phineas',
        link: 'https://www.disneyplus.com/series/phineas-and-ferb/1Vl0AKTYhC6U',
        info: {
            water: movieServices.disney,
            seasons: 4,
            yearStart: 2007,
            yearEnd: 2015,
            genre: [
                'animation',
                'comedy',
                'kids',
            ],
            summary: "Phineas and Ferb invent, scheme, and stay one step ahead of their bratty sister. Meanwhile, their pet platypus plots against evil Dr. Doofenshmirtz.",
            tags: ['disney']
        },
        style: {
            hex: '64d2ff',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '8 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'mid',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/phineas-and-ferb-2007',
            imdbID: 'tt0852863',
            // subReddit: 'subreddit',
        },
    },
    'prehistoric': {
        name: 'Prehistoric Planet',
        id: 'prehistoric',
        link: 'https://tv.apple.com/show/prehistoric-planet/umc.cmc.4lh4bmztauvkooqz400akxav',
        info: {
            water: movieServices.apple,
            seasons: 1,
            year: 2022,
            genre: [
                'documentary',
                'nature',
            ],
            summary: "Experience the wonders of our world like never before in this epic series from Jon Favreau and the producers of Planet Earth. Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.",
            tags: ['David Attenborough'],
        },
        style: {
            hex: '7d7e42',
            hex: FluentColor.cyan10,
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'webp',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'webp',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '418505',
            reelgoodLink: 'https://reelgood.com/show/prehistoric-planet-2022',
            imdbID: 'tt10324164',
            // subReddit: 'subreddit',
        },
        cast: [
            {
                actor: 'David Attenborough',
            },
        ],
    },
    'friends': {
        name: 'Friends',
        id: 'friends',
        link: 'https://play.hbomax.com/series/urn:hbo:series:GXdbR_gOXWJuAuwEAACVH',
        info: {
            water: movieServices.hbo,
            seasons: 10,
            yearStart: 1994,
            yearEnd: 2004,
            genre: [
                'comedy',
                'romance',
                'friends',
            ],
            summary: "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.",
        },
        style: {
            hex: FluentColor.red,
            // hex: 'b3916e',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
        },
        apps: {
            // tvTimeID: 'identifier',
            reelgoodLink: 'https://reelgood.com/show/friends-1994',
            // imdbID: 'identifier',
            // subReddit: 'subreddit',
        },
    },
    'kenobi': {
        name: 'Obi-Wan Kenobi',
        id: 'kenobi',
        // link: 'https://www.disneyplus.com/series/obi-wan-kenobi/2JYKcHv9fRJb',
        link: 'https://www.hotstar.com/1260098452',
        info: {
            water: movieServices.hotstar,
            date: '22 Jun 2022 12:30:00',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'action & adventure',
                'sci-fi',
            ],
            summary: "During the reign of the Empire, Obi-Wan Kenobi embarks on a crucial mission.",
            tags: ['starwars']
        },
        style: {
            hex: 'a98264',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
        },
        apps: {
            tvTimeID: '393199',
            reelgoodLink: 'https://reelgood.com/show/obiwan-kenobi-2022',
            imdbID: 'tt8466564',
            subReddit: 'StarWarsKenobi',
        },
        cast: [
            {
                actor: 'Ewan McGregor',
                char: 'Obi-Wan Kenobi',
            },
        ],
    },
    'slow': {
        name: 'Slow Horses',
        id: 'slow',
        link: 'https://tv.apple.com/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o',
        info: {
            water: movieServices.apple,
            // date: '',
            seasons: 1,
            yearStart: 2022,
            yearEnd: null,
            genre: [
                'drama',
                'thriler',
            ],
            summary: "This quick-witted spy drama follows a dysfunctional team of MI5 agents—and their obnoxious boss, the notorious Jackson Lamb—as they navigate the espionage world\'s smoke and mirrors to defend England from sinister forces.",
        },
        style: {
            hex: '3d250f',
            poster: {
                wide: {
                    type: 'webp',
                    title: true,
                },
                mobile: {
                    type: 'webp',
                    size: '5.6 / 10',
                    title: true,
                },
            },
            title: {
                type: 'webp',
                size: 'mid',
            },
        },
        apps: {
            tvTimeID: '372264',
            reelgoodLink: 'https://reelgood.com/show/slow-horses-2022',
            imdbID: 'tt5875444',
            subReddit: 'SlowHorses',
        },
        cast: [
            {
                actor: 'Gary Oldman',
                char: 'Jackson Lamb',
            },
            {
                actor: 'Jack Lowden',
                char: 'River Cartwright',
            },
            {
                actor: 'Kristin Scott Thomas',
                char: 'Diana Taverner',
            },
        ],
    },
    'yellowstone': {
        name: 'Yellowstone',
        id: 'yellowstone',
        link: 'https://app.primevideo.com/detail?gti=amzn1.dv.gti.74ba3c05-eadd-3c73-0504-14135721c8e9',
        info: {
            water: movieServices.prime,
            // date: '',
            seasons: 4,
            yearStart: 2018,
            yearEnd: null,
            genre: [
                'drama',
                'western',
            ],
            summary: "The Duttons fight to defend their ranch and way of life from an Indian reservation and land developers, as medical issues, political aspirations and deep secrets put strain on the family.",
        },
        style: {
            hex: '5b4f43',
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'widest',
            },
        },
        apps: {
            tvTimeID: '341164',
            reelgoodLink: 'https://reelgood.com/show/yellowstone-2018',
            imdbID: 'tt4236770',
            subReddit: 'YellowstonePN',
        },
    },
    'saul': {
        name: 'Better Caul Saul',
        id: 'saul',
        link: { netflix: '80021955' },
        info: {
            water: movieServices.hulu,
            // date: '',
            seasons: 6,
            yearStart: 2015,
            yearEnd: 2022,
            genre: [
                'crime',
                'drama',
            ],
            summary: "This Emmy-nominated prequel to \"Breaking Bad\" follows small-time attorney Jimmy McGill as he transforms into morally challenged lawyer Saul Goodman.",
            // tags: ['breaking bad']
        },
        style: {
            hex: colorData.fluent.red,
            poster: {
                wide: {
                    type: 'jpg',
                    title: true,
                },
                mobile: {
                    type: 'jpg',
                    size: '7 / 10',
                    title: true,
                },
            },
            title: {
                type: 'png',
                size: 'wide',
            },
        },
        apps: {
            tvTimeID: '273181',
            reelgoodLink: 'https://reelgood.com/show/better-call-saul-2015',
            imdbID: 'tt3032476',
            // subReddit: 'subreddit',
        },
        // cast: [
        //     {
        //         actor: 'name',
        //         char: 'name',
        //     },
        // ],
    },
    // 'bear': {
    //     name: 'The Bear',
    //     id: 'bear',
    //     link: 'https://www.hulu.com/series/the-bear-05eb6a8e-90ed-4947-8c0b-e6536cbddd5f',
    //     info: {
    //         service: 'hulu',
    //         studio: 'fx',
    //         location: 'Hulu',
    //         // date: '',
    //         seasons: 1,
    //         yearStart: 2022,
    //         yearEnd: null,
    //         genre: [
    //             'comedy',
    //         ],
    //         summary: "Carmy, a young fine-dining chef, comes home to Chicago to run his family sandwich shop. As he fights to transform the shop and himself, he works alongside a rough-around-the-edges crew that ultimately reveal themselves as his chosen family.",
    //     },
    //     style: {
    //         hex: colorData.fluent.cyanBlue20,
    //         poster: {
    //             wide: {
    //                 type: 'webp',
    //                 title: true,
    //             },
    //             mobile: {
    //                 type: 'webp',
    //                 size: '7 / 10',
    //                 title: true,
    //             },
    //         },
    //         title: {
    //             type: 'png',
    //             size: 'widest',
    //         },
    //     },
    //     apps: {
    //         // tvTimeID: 'identifier',
    //         reelgoodLink: 'https://reelgood.com/show/the-bear-2022',
    //         // imdbID: 'identifier',
    //         // subReddit: 'subreddit',
    //     },
    //     // cast: [
    //     //     {
    //     //         actor: 'name',
    //     //         char: 'name',
    //     //     },
    //     // ],
    // },
}
// @new
// 'identifier': {
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
//         seasons: 1,
//         year: 2022,
//         yearStart: 2022,
//         yearEnd: null,
//         genre: [
//             'crime',
//             'comedy',
//         ],
//         summary: "summary",
//         tags: ['tag']
//     },
//     style: {
//         hex: '000000',
//         poster: {
//             wide: {
//                 type: 'webp',
//                 title: true,
//             },
//             mobile: {
//                 type: 'webp',
//                 size: '7 / 10',
//                 title: true,
//             },
//         },
//         title: {
//             type: 'png',
//             size: 'widest',
//         },
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

const processDesc = {
    main: function ({ info }, type) {
        if (!info.description) {
            let descString = ''

            if (!type) {
                if (info.genre) descString = `${this.genre(info)}`
                if (info.seasons) descString = `${descString} &#149 ${this.seasons(info)}`
                if ((info.year) || (info.yearStart)) descString = `${descString} &#149 ${this.year(info)}`
            } else if (type == 'genre') {
                if (info.genre) descString = `${this.genre(info)}`
            }

            return (descString)
        }
    },
    genre: function (info) {
        let str = ''
        for (let i = 0; i < info.genre.length; i++) {
            str = `${str}${info.genre[i]}`
            if (i < info.genre.length - 1) str = `${str} &#149 `
        }
        return str
    },
    seasons: function (info) {
        if (info.seasons > 1) return `${info.seasons} seasons`
        else return `${info.seasons} season`
    },
    year: function (info) {
        if (info.yearStart) return `${info.yearStart} - ${info.yearEnd ?? 'Present'}`
        else return info.year
    },
}

for (const key in movieDict) {
    const movie = movieDict[key]

    // process link
    if (movie.link) {
        if (movie.link.netflix) movie.link = `https://www.netflix.com/title/${movie.link.netflix}`
        else if (movie.link.primeVideo) movie.link = `primevideo://detail?asin=${movie.link.primeVideo}`
        // `https://watch.amazon.com/detail?asin=${movie.link.primeVideo}`
        // `https://app.primevideo.com/detail/0HLDL6JTNVIK6GJDH0UIW4TES8`
        else if (movie.link.cnn) movie.link = `https://plus.cnn.com/plus/title-${movie.link.cnn}`
    }

    movie.play = function () {
        if (movie.link) window.open(movie.link)
        setCookie('recent-movie', key, 7)
        console.log(getCookie('recent-movie'))
    }

    // process location
    if (movie.info.water) {
        if (movie.info.water.name) movie.info.location = `Watch on ${movie.info.water.name}`
        else if (movie.info.water.message) movie.info.location = movie.info.water.message
    }
    else if (movie.info.water === null) movie.info.location = 'Unavailable'
    else alert(`Missing location for movie '${movie.name}'`)

    // process date
    if (movie.info.date) movie.info.date = new Date(movie.info.date)

    // process desc
    movie.desc = {
        full: null,
        genre: null,
    }

    if (movie.info) movie.desc.full = processDesc.main(movie, null)
    else if (movie.info.description) movie.desc.full = movie.info.description
    if (movie.info) movie.desc.genre = processDesc.main(movie, 'genre')

    // style

    if (!movie.style.title) movie.style.title = {
        type: null,
        size: null,
    }

    if (movie.style.mobileType || movie.style.mobileSize) {
        movie.style.poster.mobile = {
            type: movie.style.mobileType,
            size: movie.style.mobileSize,
            title: true,
        }
        delete movie.style.mobileType
        delete movie.style.mobileSize
    }
    if (!movie.style.poster.mobile) {
        movie.style.poster.mobile = {
            type: null,
            size: null,
            title: true,
        }
    }

    // title



    // show tv detail
    movie.detail = function () { tvDetail.show(key) }
}

// console.log(movieDict.ministry)