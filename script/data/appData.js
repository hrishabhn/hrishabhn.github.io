const commonApps = {
    finder: function (link) {
        return {
            name: 'Folder',
            link: link,
            desc: 'Files',
            thumb: 'files.jpeg',
            style: 'blue',
        }
    },
    onedrive: function (link) {
        return {
            name: 'OneDrive',
            link: link,
            desc: 'Files',
            thumb: 'onedrive.jpeg',
            accent: colorData['onedrive'],
        }
    },
    notion: function (link) {
        return {
            name: 'Notion',
            link: link,
            desc: 'Notes',
            thumb: 'notion.jpeg',
            style: 'secondary',
        }
    },
    aula: function (id, n) {
        if (n) {
            var nStr = ` (${n})`
        } else {
            var nStr = ``
        }

        return {
            name: `Aula Global${nStr}`,
            link: `https://aulaglobal.uc3m.es/course/view.php?id=${id}`,
            desc: 'Learn',
            thumb: thumbData['course'],
            style: 'purple',
        }
    },
    syllabus: function (id) {
        return {
            name: 'Syllabus',
            link: `./course/${id}_syllabus.pdf`,
            desc: 'Course Rules',
            thumb: thumbData['book'],
            style: 'red',
        }
    },

    reddit: function (sub) {
        return {
            name: `r/${sub}`,
            link: `https://www.reddit.com/r/${sub}`,
            desc: 'Subreddit',
            thumb: 'reddit.jpeg',
            accent: colorData['reddit'],
            tags: [
                'reddit',
            ],
        }
    },
    twitter: function (handle, desc) {
        return {
            name: `@${handle}`,
            link: `https://twitter.com/${handle}`,
            desc: desc,
            thumb: 'twitter.jpeg',
            accent: colorData['twitter'],
            tags: [
                'twitter',
            ],
        }
    },
    youtube: function (name, link, desc) {
        return {
            name: name,
            link: link,
            desc: desc,
            thumb: 'youtube.jpeg',
            accent: colorData['google'].red,
            tags: [
                'youtube',
            ],
        }
    },
}

const appData = {
    'main': [
        {
            name: 'Outlook',
            link: 'ms-outlook://',
            desc: 'Email',
            thumb: 'outlook.jpeg',
            accent: '0078d4',
        },
        commonApps.onedrive('https://purdue0-my.sharepoint.com'),
        commonApps.notion('https://www.notion.so/Homepage-2-0-ebdb7991969f49ffa7be6906f7685945'),
        {
            name: 'TickTick',
            link: 'ticktick://',
            desc: 'To do list',
            thumb: 'ticktick.jpeg',
            style: 'blue'
        },
        {
            name: 'Tasks',
            link: 'https://app.clickup.com/8450846/v/l/6-48362200-1',
            desc: 'Tasks',
            thumb: 'double-check.png',
            style: 'blue'
        },
        {
            name: 'Homework',
            link: 'https://app.clickup.com/8450846/v/l/4-54680096-1',
            desc: 'Tasks',
            thumb: thumbData['course'],
            style: 'blue'
        },
    ],
    'notion': [
        {
            name: 'Inbox',
            link: 'https://www.notion.so/Inbox-90dd1c97df2d4bee8c605c27dfb5fb54',
            desc: 'Ideas & Notes',
            thumb: 'inbox.png',
            accent: 'F4B459'
        },
        {
            name: 'Accounts',
            link: 'https://www.notion.so/Accounts-ec9ee8a777504363a574706d8c820b99',
            desc: 'Websites and Apps',
            thumb: thumbData['user'],
            accent: '607D8B'
        },
        {
            name: 'College',
            link: 'https://www.notion.so/College-fe3b0260a5944eb9a88f36efb2f69123',
            desc: 'School, Clubs & Courses',
            thumb: thumbData['tv'],
            accent: 'F4B459'
        },
    ],
    'school': [
        {
            name: 'Homework',
            link: 'https://app.clickup.com/8450846/v/l/4-20137584-1',
            desc: 'Assignments',
            icon: iconData['book'],
            style: 'red',
        },
        {
            name: 'myPurdue',
            link: 'https://wl.mypurdue.purdue.edu',
            desc: 'Academics & Registration',
            thumb: 'purdue.jpeg',
            accent: colorData['purdue'],
        },
        {
            name: 'My Study Abroad',
            link: 'https://www.purdue.edu/IPPU/SA',
            desc: 'Study Abroad Portal',
            thumb: thumbData['plane'],
            style: 'teal',
        },
    ],
    'bookmarks': [
        {
            name: 'Old',
            link: 'file:///Users/hrishabh/Documents/GitHub/oldDash/index.html',
            desc: 'Previous Version',
            thumb: thumbData['more'],
            style: 'secondary',
        },
        {
            name: 'Gmail',
            link: 'https://mail.google.com/mail/u/0/#inbox',
            desc: 'Email',
            thumb: 'gmail.jpeg',
            accent: colorData['google'].red,
        },
        {
            name: 'Google Maps',
            link: 'https://www.google.com/maps',
            desc: 'Navigation & Transportation',
            thumb: 'google_maps.jpeg',
            accent: colorData['google'].green,
        },
        {
            name: 'Apple Maps',
            link: 'maps://',
            desc: 'Navigation & Transportation',
            thumb: 'apple_maps.jpeg',
            style: 'green',
        },
        {
            name: 'Amazon',
            link: 'https://www.amazon.es',
            desc: 'Shopping',
            thumb: 'amazon.jpeg',
            accent: 'bea977',
        },
        {
            name: 'Pirate Bay',
            link: 'https://thepiratebay.org',
            desc: 'Movies & TV Shows',
            thumb: 'pirate.png',
            accent: 'a4724e',
        },
        {
            name: 'RARBG',
            link: 'https://rarbg.to',
            desc: 'Movies & TV Shows',
            thumb: 'download.png',
            style: 'blue',
        },
        {
            name: 'SpanishDict',
            link: 'https://www.spanishdict.com',
            desc: 'Learn & Translate',
            thumb: 'spanishdict.jpeg',
            accent: '1b85e5',
        },
        {
            name: 'Password Generator',
            link: 'https://passwordsgenerator.net/?length=15&symbols=0&numbers=1&lowercase=1&uppercase=1&similar=1&ambiguous=1&client=1&autoselect=0',
            desc: 'Secure Passwords',
            thumb: 'key.png',
            style: 'yellow',
        },
        {
            name: 'Glovo',
            link: 'https://glovoapp.com/es/en/madrid',
            desc: 'Food Delivery',
            thumb: 'glovo.jpeg',
            accent: 'ffc244',
        },
    ],
    'video': [
        {
            name: 'TV Time',
            link: 'https://www.tvtime.com/en',
            desc: 'Track',
            thumb: 'tvTime.jpeg',
            // accent: 'secondary',
        },
        {
            name: 'Reelgood',
            link: 'https://reelgood.com',
            desc: 'Find Streaming Service',
            thumb: 'reelgood.jpeg',
            accent: '00dc89',
        },
        {
            name: 'IMDb',
            link: 'https://imdb.com',
            desc: 'Search Movies & TV',
            thumb: 'imdb.jpeg',
            accent: 'F5C518',
        },
        {
            name: 'JustWatch',
            link: 'https://www.justwatch.com/es',
            desc: 'Find Streaming Service',
            thumb: 'justWatch.jpeg',
            accent: 'fbc500',
        },
        {
            name: 'Netflix',
            link: 'https://netflix.com',
            desc: 'Watch',
            thumb: 'netflix.jpeg',
            accent: 'e50914',
        },
        {
            name: 'Hulu',
            link: 'https://hulu.com',
            desc: 'Watch',
            thumb: 'hulu.jpeg',
            accent: '1ce783',
        },
        {
            name: 'Prime Video',
            link: 'primevideo://',
            desc: 'Watch',
            thumb: 'prime.jpeg',
            accent: null,
        },
        commonApps.youtube('YouTube', 'https://www.youtube.com','Watch Videos')
    ],
    'read': [
        {
            name: 'Books',
            link: 'ibooks://',
            desc: 'Read',
            thumb: 'ibooks.jpeg',
            accent: colorData['ibooks'],
        },
        {
            name: 'Kindle',
            link: 'kindle://',
            desc: 'Read',
            thumb: 'kindle.jpeg',
            style: 'indigo',
        },
        {
            name: 'Goodreads',
            link: 'https://www.goodreads.com',
            desc: 'Reviews and Charts',
            thumb: 'goodreads.jpeg',
            accent: '382110',
        },
        {
            name: 'SCMP',
            link: 'https://www.scmp.com',
            desc: 'Hong Kong News',
            thumb: 'scmp.jpeg',
            accent: 'ffca05',
        },
        {
            name: 'The Verge',
            link: 'https://www.theverge.com',
            desc: 'Tech News',
            thumb: 'verge.png',
            accent: 'FA4B2A',
        },
        {
            name: 'No Mercy / No Malice',
            link: 'https://www.profgalloway.com',
            desc: 'Newsletter',
            thumb: 'nmnm.png',
            style: 'red',
        },
    ],
    'listen': [
        {
            name: 'Podcasts',
            link: 'podcasts://',
            desc: 'Listen',
            thumb: 'podcasts.jpeg',
            style: 'purple',
        },
        {
            name: 'Audible',
            link: 'audible://',
            desc: 'AudioBooks',
            thumb: 'audible.jpeg',
            accent: 'F8991D',
        },
    ],
    'travel': [
        {
            name: 'Travel',
            link: 'https://www.notion.so/Travel-798b2161bfef4ec7b4c93f4ce98fdffa',
            desc: 'Details & Documents',
            thumb: 'travel.png',
            accent: '00AAF0'
        },
        {
            name: 'Flighty',
            link: 'flighty://',
            desc: 'Flight Log & Status',
            thumb: 'flighty.jpeg',
            style: 'secondary'
        },
        {
            name: 'IB 3164',
            trigger: function () { flightData['mad-lhr'].detail() },
            desc: 'MAD &#8594 LHR',
            thumb: 'iberia.jpeg',
            accent: airlineData['iberia'].color,
            tags: [
                'madrid',
                'london',
            ],
        },
        {
            name: 'BA 464',
            trigger: function () { flightData['lhr-mad'].detail() },
            desc: 'LHR &#8594 MAD',
            thumb: 'ba.jpeg',
            accent: airlineData['british'].color,
            tags: [
                'madrid',
                'london',
            ],
        },
    ],
    'utilities': [
        {
            name: 'COVID-19 Tracker',
            link: 'https://news.google.com/covid19/map',
            desc: 'Cases & Vaccinations',
            thumb: 'virus.png',
            style: 'red',
        },
        {
            name: 'FAST Speed Test',
            link: 'https://fast.com',
            desc: 'Internet Speed Test',
            thumb: 'fast.jpeg',
            style: 'red',
        },
        {
            name: 'Speedtest by Ookla',
            link: 'https://www.speedtest.net',
            desc: 'Internet Speed Test',
            thumb: 'ookla.jpeg',
            accent: '141526',
        },
    ],
    'profiles': [
        commonApps.twitter('tripperhead', 'HK COVID-19 News'),
        commonApps.reddit('Purdue'),
        commonApps.reddit('iOSBeta'),
        commonApps.reddit('macOSBeta'),
    ],
    'design': [
        {
            name: 'Flaticon',
            link: 'https://www.flaticon.com',
            desc: 'Free Icons',
            thumb: 'flaticon.png',
            accent: '0E2A47',
        },
        {
            name: 'Icons8',
            link: 'https://icons8.com',
            desc: 'Free Icons',
            thumb: 'icons8.png',
            accent: '1fb141',
        },
        {
            name: 'Average Colour',
            link: 'https://matkl.github.io/average-color',
            desc: 'Get Average Colour of Image',
            thumb: 'color.png',
            // style: 'red',
        },
        {
            name: 'Colour Picker',
            link: 'https://image-color.com',
            desc: 'Find Colour From Image',
            thumb: 'picker.png',
            // style: 'red',
        },
        {
            name: 'SVG OMG',
            link: 'https://jakearchibald.github.io/svgomg',
            desc: 'Clean Up SVGs',
            thumb: 'svg.png',
            // style: 'red',
        },
        {
            name: 'Fix SVG',
            link: 'https://jsfiddle.net/fr1ke0sm/1',
            desc: 'Remove Whitespace (Square)',
            thumb: 'svg.png',
            // style: 'red',
        },
        {
            name: 'Fix SVG',
            link: 'https://jsfiddle.net/knLbjc9a/4',
            desc: 'Remove Whitespace (All)',
            thumb: 'svg.png',
            // style: 'red',
        },
        {
            name: 'Book Covers',
            link: 'https://www.ereader-palace.com/get-high-resolution-cover-image-amazon-kindle-ebooks',
            desc: 'High Resolution Covers',
            thumb: thumbData['book'],
            // style: 'red',
        },
    ],

    // school
    'sail': [
        {
            name: 'Brightspace',
            link: 'https://purdue.brightspace.com/d2l/le/content/494426/Home',
            desc: 'Learn',
            thumb: thumbData['course'],
            style: 'orange',
        },
        commonApps.syllabus('sail'),
        commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/SAIL'),
        commonApps.notion('https://www.notion.so/SAIL-5b633671d2f843578da9226cb83201d1'),
    ],
    'indorg': [
        commonApps.aula('123832'),
        commonApps.syllabus('indorg'),
        commonApps.finder('shortcuts://run-shortcut?name=Industrial%20Organisation%20Folder'),
        commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/Industrial%20Organisation'),
        commonApps.notion('https://www.notion.so/Industrial-Organisation-6f9a042e98f6458a9f509689c2025571'),
    ],
    'finecon': [
        commonApps.aula('131130', 'Mon'),
        commonApps.aula('123356', 'Thu'),
        commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/Financial%20Economics'),
        commonApps.notion('https://www.notion.so/Financial-Economics-f175d589aae64f7b9ecd3c101be4ff53'),
    ],
    'manage': [
        commonApps.aula('126308', 1),
        commonApps.aula('132011', 2),
        commonApps.syllabus('manage'),
        commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/Management'),
        commonApps.notion('https://www.notion.so/Engineering-Management-42466297fd4148a7bf275247cde1becb'),
    ],
    'controls': [
        commonApps.aula('127222'),
        commonApps.syllabus('controls'),
        commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/Controls'),
        commonApps.notion('https://www.notion.so/Controls-a33110b68afe4e468d12bbb96b1e31dd'),
        commonApps.youtube('Control Systems', 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqzJT87LsdQKYZBC93ezDo', 'YouTube Lectures'),
        // https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqzJT87LsdQKYZBC93ezDo
    ],



    // 'mse': [
    //     {
    //         name: 'Aula Global',
    //         link: 'https://aulaglobal.uc3m.es/course/view.php?id=126601',
    //         desc: 'Learn',
    //         thumb: thumbData['course'],
    //         style: 'purple',
    //     },
    //     {
    //         name: 'OneDrive',
    //         link: 'https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/Materials%20Science%20Engineering',
    //         desc: 'Files',
    //         thumb: 'onedrive.jpeg',
    //         accent: colorData['onedrive'],
    //     },
    //     {
    //         name: 'Notion',
    //         link: 'https://www.notion.so/Materials-Science-2e67bf77c9ce40d0a55ebcf6f27b0b2d',
    //         desc: 'Notes',
    //         thumb: 'notion.jpeg',
    //         style: 'secondary',
    //     },
    // ],
}




// const prodApps = [
//     {
//         name: 'Gmail',
//         style: {
//             bgCol: 'ea4335',
//         },
//         icon: iconData['gmail'],
//     },
// ]

const schoolApps = [
    {
        name: 'My Study Abroad',
        style: {
            bgClass: 'blue',
        },
        icon: iconData['book'],
    },
]



// const notionApps = [
//     {
//         name: 'College',
//         link: 'https://www.notion.so/College-fe3b0260a5944eb9a88f36efb2f69123',
//         style: {
//             bgClass: 'cyan',
//         },
//         icon: iconData['grade'],
//     },
//     {
//         name: 'UC3M',
//         link: 'https://www.notion.so/UC3M-946102702eb24209a3ce657c170e27f0',
//         style: {
//             bgClass: 'cathay',
//         },
//         icon: iconData['plane'],
//     },
//     {
//         name: 'Accounts',
//         link: 'https://www.notion.so/Accounts-ec9ee8a777504363a574706d8c820b99',
//         style: {
//             bgClass: 'mint',
//         },
//         icon: iconData['user'],
//     },
//     {
//         name: 'Internship',
//         link: 'https://www.notion.so/Internship-6d479c8f6fad4c0b8846daf98b215e2e',
//         style: {
//             bgClass: 'indigo',
//         },
//         icon: iconData['work'],
//     },
//     {
//         name: 'Recipes',
//         link: 'https://www.notion.so/Recipes-643a00434d5c48109d3630af84339053',
//         style: {
//             bgClass: 'orange',
//         },
//         icon: iconData['cook'],
//     },
// ]

function oneDriveApp(link) {

}
