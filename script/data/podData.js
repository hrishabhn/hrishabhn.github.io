const allPods = {
    'decoder': {
        name: 'Decoder',
        id: 'decoder',
        applePod: '1011668648',
        author: 'Nilay Patel',
        coverType: 'jpeg',
        style: 'yellow',
    },
    'vergecast': {
        name: 'The Vergecast',
        id: 'vergecast',
        applePod: '430333725',
        author: 'The Verge',
        coverType: 'jpeg',
        style: 'purple',
    },
    'sway': {
        name: 'Sway',
        id: 'sway',
        applePod: '1528594034',
        author: 'Kara Swisher',
        coverType: 'jpeg',
        style: 'pink',
    },
    'businessCasual': {
        name: 'Business Casual',
        id: 'businessCasual',
        applePod: '1480059697',
        author: 'Morning Brew Podcasts',
        coverType: 'jpeg',
        style: 'orange',
    },
    'intelligence': {
        name: 'The Intelligence',
        id: 'intelligence',
        applePod: '1449631195',
        author: 'The Economist',
        coverType: 'png',
        style: 'teal',
    },
    'pivot': {
        name: 'Pivot',
        id: 'pivot',
        applePod: '1073226719',
        author: 'Kara Swisher & Scott Galloway',
        coverType: 'jpeg',
        style: 'secondary',
    },
    'forward': {
        name: 'Forward',
        id: 'forward',
        youtube: 'forwardpod',
        author: 'Andrew Yang & Zach Graumann',
        coverType: 'jpeg',
        // style: 'blue',
    },
    'inet': {
        name: 'INET',
        id: 'inet',
        youtube: 'NewEconomicThinking',
        author: 'Rob Johnson',
        coverType: 'jpeg',
        // style: 'blue',
    },
    'profg': {
        name: 'Prof G Show',
        id: 'profg',
        applePod: '1498802610',
        author: 'Kara Swisher & Scott Galloway',
        coverType: 'jpeg',
        // style: 'blue',
    },
    'founders': {
        name: "Founder's Journal",
        id: 'founders',
        applePod: '1509276485',
        author: 'Alex Lieberman',
        coverType: 'jpeg',
        // style: 'blue',
    },
    'waveform': {
        name: 'Waveform',
        id: 'waveform',
        youtube: 'Waveform',
        author: 'Marques Brownlee',
        coverType: 'jpeg',
        style: 'red',
    },
    'lex': {
        name: 'Lex Fridman Podcast',
        id: 'lex',
        youtube: 'lexfridman',
        author: 'Lex Fridman',
        coverType: 'jpeg',
        // style: 'secondary',
    },
    'acquired': {
        name: 'Acquired',
        id: 'acquired',
        applePod: '1050462261',
        author: 'Ben Gilbert & David Rosenthal',
        coverType: 'jpeg',
        style: 'secondary',
    },
    'giants': {
        name: 'Land of the Giants',
        id: 'giants',
        applePod: '1465767420',
        author: 'Recode',
        coverType: 'jpeg',
    },
    'flagrant': {
        name: 'Flagrant 2',
        id: 'flagrant',
        youtube: 'Flagrant2',
        author: 'Andrew Schulz & Aakash Singh',
        coverType: 'jpeg',
        style: 'red',
    },
    'canto': {
        name: 'Learn Cantonese',
        id: 'canto',
        applePod: '1513774818',
        author: 'Poetic Cantonese',
        coverType: 'jpeg',
        // style: 'blue',
    },
}

for (const key in allPods) {
    const pod = allPods[key]
    if (!pod.link) pod.link = processBookPodLink(pod)
}

function processBookPodLink(item) {
    if (item.youtube) return `https://www.youtube.com/c/${item.youtube}/videos`
    else if (item.applePod) return `https://podcasts.apple.com/podcast/id${item.applePod}`
    else if (item.audible) return `audible://view?section=discover&asin=${linkItem.audible}`
    else return item.link

    if (linkItem.netflix) {
        return `https://www.netflix.com/title/${linkItem.netflix}`
    } else if (linkItem.amazon) {
        return linkItem.amazon
    } else if (linkItem.applePod) {
        return `https://podcasts.apple.com/podcast/${linkItem.applePod}`
    } else if (linkItem.youtube) {
        return `https://www.youtube.com/c/${linkItem.youtube}/videos`
    } else if (linkItem.primeVideo) {
        // return `https://watch.amazon.com/detail?asin=${linkItem.primeVideo}`
        return `primevideo://detail?asin=${linkItem.primeVideo}`
    } else if (linkItem.audible) {
        return `audible://view?section=discover&asin=${linkItem.audible}`
    } else {
        return linkItem
    }
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
    allPods.waveform,
    allPods.lex,
]

// story podcasts
const podData3 = [
    allPods.acquired,
    allPods.giants,
]

// other podcasts
const podData4 = [
    allPods.flagrant,
    allPods.canto,
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
