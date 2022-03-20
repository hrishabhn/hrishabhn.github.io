const allPods = {
    "decoder": {
        "name": "Decoder",
        "id": "decoder",
        "applePod": "1011668648",
        "author": "Nilay Patel",
        "coverType": "jpeg"
    },
    "vergecast": {
        "name": "The Vergecast",
        "id": "vergecast",
        "applePod": "430333725",
        "author": "The Verge",
        "coverType": "jpeg"
    },
    "sway": {
        "name": "Sway",
        "id": "sway",
        "applePod": "1528594034",
        "author": "Kara Swisher",
        "coverType": "jpeg"
    },
    "businessCasual": {
        "name": "Business Casual",
        "id": "businessCasual",
        "applePod": "1480059697",
        "author": "Morning Brew Podcasts",
        "coverType": "jpeg"
    },
    "intelligence": {
        "name": "The Intelligence",
        "id": "intelligence",
        "applePod": "1449631195",
        "author": "The Economist",
        "coverType": "png"
    },
    "pivot": {
        "name": "Pivot",
        "id": "pivot",
        "applePod": "1073226719",
        "author": "Kara Swisher & Scott Galloway",
        "coverType": "jpeg"
    },
    "forward": {
        "name": "Forward",
        "id": "forward",
        "applePod": "1508035243",
        "youtube": "forwardpod",
        "author": "Andrew Yang & Zach Graumann",
        "coverType": "jpeg"
    },
    "inet": {
        "name": "INET",
        "id": "inet",
        "applePod": "1509092730",
        "youtube": "NewEconomicThinking",
        "author": "Rob Johnson",
        "coverType": "jpeg"
    },
    "profg": {
        "name": "Prof G Show",
        "id": "profg",
        "applePod": "1498802610",
        "author": "Kara Swisher & Scott Galloway",
        "coverType": "jpeg"
    },
    "founders": {
        "name": "Founder's Journal",
        "id": "founders",
        "applePod": "1509276485",
        "author": "Alex Lieberman",
        "coverType": "jpeg"
    },
    "waveform": {
        "name": "Waveform",
        "id": "waveform",
        "applePod": "1474429475",
        "youtube": "Waveform",
        "author": "Marques Brownlee",
        "coverType": "jpeg"
    },
    "lex": {
        "name": "Lex Fridman Podcast",
        "id": "lex",
        "applePod": "1434243584",
        "youtube": "lexfridman",
        "author": "Lex Fridman",
        "coverType": "jpeg"
    },
    "acquired": {
        "name": "Acquired",
        "id": "acquired",
        "applePod": "1050462261",
        "author": "Ben Gilbert & David Rosenthal",
        "coverType": "jpeg"
    },
    "giants": {
        "name": "Land of the Giants",
        "id": "giants",
        "applePod": "1465767420",
        "author": "Recode",
        "coverType": "jpeg"
    },
    "flagrant": {
        "name": "Flagrant 2",
        "id": "flagrant",
        "applePod": "1288641267",
        "youtube": "Flagrant2",
        "author": "Andrew Schulz & Aakash Singh",
        "coverType": "jpeg"
    },
    "canto": {
        "name": "Learn Cantonese",
        "id": "canto",
        "applePod": "1513774818",
        "author": "Poetic Cantonese",
        "coverType": "jpeg"
    }
}

for (const key in allPods) {
    const pod = allPods[key]
    if (!pod.link) pod.link = processBookPodLink(pod)
    pod.title = allPodEps[key].epTitle
    pod.summary = allPodEps[key].epSummary

    console.log(allPodEps[key].epTitle)
}

// const podDataArchive = [
//     // {
//     //     "name": "Economist Radio",
//     //     "id": "economist",
//     //     link: 'https://podcasts.apple.com/podcast/id151230264',
//     //     "author": 'The Economist',
//     //     "coverType": 'jpeg',
//     // },
//     // {
//     //     "name": 'Making Sense',
//     //     "id": 'samharris',
//     //     link: 'https://podcasts.apple.com/podcast/id733163012',
//     //     "author": 'Sam Harris',
//     //     "coverType": 'jpeg',
//     // },
// ]