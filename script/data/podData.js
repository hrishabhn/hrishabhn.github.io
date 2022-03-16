const allPods = {
    'decoder': {
        name: 'Decoder',
        id: 'decoder',
        link: {
            applePod: 'id1011668648'
        },
        author: 'Nilay Patel',
        coverType: 'jpeg',
        style: 'yellow',
    },
    'vergecast': {
        name: 'The Vergecast',
        id: 'vergecast',
        link: {
            applePod: 'id430333725'
        },
        author: 'The Verge',
        coverType: 'jpeg',
        style: 'purple',
    },
    'sway': {
        name: 'Sway',
        id: 'sway',
        link: {
            applePod: 'id1528594034'
        },
        author: 'Kara Swisher',
        coverType: 'jpeg',
        style: 'pink',
    },
    'businessCasual': {
        name: 'Business Casual',
        id: 'businessCasual',
        link: {
            applePod: 'id1480059697'
        },
        author: 'Morning Brew Podcasts',
        coverType: 'jpeg',
        style: 'orange',
    },
    'intelligence': {
        name: 'The Intelligence',
        id: 'intelligence',
        link: {
            applePod: 'id1449631195'
        },
        author: 'The Economist',
        coverType: 'png',
        style: 'teal',
    },
    'pivot': {
        name: 'Pivot',
        id: 'pivot',
        link: {
            applePod: 'id1073226719'
        },
        author: 'Kara Swisher & Scott Galloway',
        coverType: 'jpeg',
        style: 'secondary',
    },
    'forward': {
        name: 'Forward',
        id: 'forward',
        link: {
            youtube: 'forwardpod'
        },
        author: 'Andrew Yang & Zach Graumann',
        coverType: 'jpeg',
        // style: 'blue',
    },
    'inet': {
        name: 'INET',
        id: 'inet',
        link: {
            youtube: 'NewEconomicThinking'
        },
        author: 'Rob Johnson',
        coverType: 'jpeg',
        // style: 'blue',
    },
    'profg': {
        name: 'Prof G Show',
        id: 'profg',
        link: {
            applePod: 'id1498802610'
        },
        author: 'Kara Swisher & Scott Galloway',
        coverType: 'jpeg',
        // style: 'blue',
    },
    'founders': {
        name: "Founder's Journal",
        id: 'founders',
        link: {
            applePod: 'id1509276485'
        },
        author: 'Alex Lieberman',
        coverType: 'jpeg',
        // style: 'blue',
    },
}

// top
const podData0 = [
    allPods.decoder,
    allPods.vergecast,
]

// business podcasts
const podData1 = [
    allPods.sway,
    allPods.businessCasual,
    allPods.intelligence,
    allPods.pivot,
    allPods.forward,
    allPods.inet,
    allPods.profg,
    allPods.founders,
]

// tech podcasts
const podData2 = [
    {
        name: 'Waveform',
        id: 'waveform',
        link: {
            youtube: 'Waveform'
        },
        author: 'Marques Brownlee',
        coverType: 'jpeg',
        style: 'red',
    },
    {
        name: 'Lex Fridman Podcast',
        id: 'lex',
        link: {
            youtube: 'lexfridman'
        },
        author: 'Lex Fridman',
        coverType: 'jpeg',
        // style: 'secondary',
    },
]

// story podcasts
const podData3 = [
    {
        name: 'Acquired',
        id: 'acquired',
        link: {
            applePod: 'id1050462261'
        },
        author: 'Ben Gilbert & David Rosenthal',
        coverType: 'jpeg',
        style: 'secondary',
    },
    {
        name: 'Land of the Giants',
        id: 'giants',
        link: {
            applePod: 'id1465767420'
        },
        author: 'Recode',
        coverType: 'jpeg',
    }
]

// other podcasts
const podData4 = [
    {
        name: 'Flagrant 2',
        id: 'flagrant',
        link: {
            youtube: 'Flagrant2'
        },
        author: 'Andrew Schulz & Aakash Singh',
        coverType: 'jpeg',
        style: 'red',
    },
    {
        name: 'Learn Cantonese',
        id: 'canto',
        link: {
            applePod: 'id1513774818'
        },
        author: 'Poetic Cantonese',
        coverType: 'jpeg',
        // style: 'blue',
    },
]

// const podDataArchive = [
//     // {
//     //     name: 'Economist Radio',
//     //     id: 'economist',
//     //     link: 'https://podcasts.apple.com/podcast/id151230264',
//     //     author: 'The Economist',
//     //     coverType: 'jpeg',
//     // },
//     // {
//     //     name: 'Making Sense',
//     //     id: 'samharris',
//     //     link: 'https://podcasts.apple.com/podcast/id733163012',
//     //     author: 'Sam Harris',
//     //     coverType: 'jpeg',
//     // },
// ]

const podData = [
    podData0,
    podData1,
    podData2,
    podData3,
    podData4,
]
