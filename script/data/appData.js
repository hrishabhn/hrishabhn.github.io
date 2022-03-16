const commonApps = {
    finder: function (link) {
        return {
            name: 'Folder',
            link: link,
            desc: 'Files',
            thumb: 'files.jpeg',
            style: 'blue',
            distract: false,
        }
    },
    onedrive: function (link) {
        return {
            name: 'OneDrive',
            link: link,
            desc: 'Files',
            thumb: 'onedrive.jpeg',
            accent: colorData['onedrive'],
            distract: false,
        }
    },
    notion: function (link) {
        return {
            name: 'Notion',
            link: link,
            desc: 'Notes',
            thumb: 'notion.jpeg',
            style: 'secondary',
            distract: false,
        }
    },
    aula: function (id, n) {
        return {
            name: n ? `Aula Global (${n})` : 'Aula Global',
            link: `https://aulaglobal.uc3m.es/course/view.php?id=${id}`,
            desc: 'Learn',
            thumb: thumbData['course'],
            style: 'purple',
            distract: false,
        }
    },
    syllabus: function (id) {
        return {
            name: 'Syllabus',
            link: `./course/${id}_syllabus.pdf`,
            desc: 'Course Rules',
            thumb: thumbData['book'],
            style: 'red',
            distract: false,
        }
    },

    reddit: function (sub) {
        return {
            name: `r/${sub}`,
            link: `https://www.reddit.com/r/${sub}`,
            // searchBase: 'https://www.google.com/search?q=site:reddit.com+',
            desc: 'Subreddit',
            thumb: thumbData.reddit,
            accent: colorData['reddit'],
            distract: true,
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
            distract: true,
            tags: [
                'twitter',
            ],
        }
    },
    youtube: function (name, link, desc) {
        return {
            name: name,
            link: link,
            searchBase: 'https://www.youtube.com/results?search_query=',
            desc: desc,
            thumb: 'youtube.jpeg',
            accent: colorData['google'].red,
            // distract: true,
            tags: [
                'youtube',
            ],
        }
    },

    flight: function (key) {
        const flight = flightData[key]
        return {
            name: `${flight.airline.code} ${flight.number}`,
            trigger: function () { flightData[key].detail() },
            desc: `${flight.dep.code} &#8594 ${flight.arr.code}`,
            thumb: flight.airline.thumb,
            accent: flight.airline.color,
            distract: false,
            tags: [
                flight.dep.city,
                flight.arr.city,
            ],
        }
    }
}

const appData = {
    'main': [
        {
            name: 'Outlook',
            link: 'ms-outlook://',
            desc: 'Email',
            thumb: 'outlook.jpeg',
            accent: '0078d4',
            distract: false,
        },
        commonApps.onedrive('https://purdue0-my.sharepoint.com'),
        commonApps.notion('https://www.notion.so/Homepage-2-0-ebdb7991969f49ffa7be6906f7685945'),
        {
            name: 'TickTick',
            link: 'ticktick://',
            desc: 'To do list',
            thumb: 'ticktick.jpeg',
            style: 'blue',
            distract: false,
        },
        {
            name: 'Tasks',
            link: 'https://app.clickup.com/8450846/v/l/6-48362200-1',
            desc: 'Tasks',
            thumb: 'double-check.png',
            style: 'blue',
            distract: false,
        },
        {
            name: 'Homework',
            link: 'https://app.clickup.com/8450846/v/l/4-54680096-1',
            desc: 'Tasks',
            thumb: thumbData['course'],
            style: 'blue',
            distract: false,
        },
    ],
    'notion': [
        {
            name: 'Inbox',
            link: 'https://www.notion.so/Inbox-90dd1c97df2d4bee8c605c27dfb5fb54',
            desc: 'Ideas & Notes',
            thumb: 'inbox.png',
            accent: 'F4B459',
            distract: false,
        },
        {
            name: 'Accounts',
            link: 'https://www.notion.so/Accounts-ec9ee8a777504363a574706d8c820b99',
            desc: 'Websites and Apps',
            thumb: thumbData['user'],
            accent: '607D8B',
            distract: false,
        },
        {
            name: 'College',
            link: 'https://www.notion.so/College-fe3b0260a5944eb9a88f36efb2f69123',
            desc: 'School, Clubs & Courses',
            thumb: thumbData['tv'],
            accent: 'F4B459',
            distract: false,
        },
        {
            name: 'Spain',
            link: 'https://www.notion.so/UC3M-946102702eb24209a3ce657c170e27f0',
            desc: 'Study Abroad & Paperwork',
            thumb: thumbData['spain'],
            style: 'yellow',
            distract: false,
        },
    ],
    'school': [
        {
            name: 'Homework',
            link: 'https://app.clickup.com/8450846/v/l/4-20137584-1',
            desc: 'Assignments',
            thumb: thumbData['book'],
            style: 'red',
            distract: false,
        },
        {
            name: 'myPurdue',
            link: 'https://wl.mypurdue.purdue.edu',
            desc: 'Academics & Registration',
            thumb: 'purdue.jpeg',
            accent: colorData['purdue'],
            distract: false,
        },
        {
            name: 'My Study Abroad',
            link: 'https://www.purdue.edu/IPPU/SA',
            desc: 'Study Abroad Portal',
            thumb: thumbData['plane'],
            style: 'teal',
            distract: false,
        },
    ],
    'shopping': [
        {
            name: 'Amazon',
            link: 'https://www.amazon.es',
            desc: 'Shopping',
            thumb: 'amazon.jpeg',
            accent: 'bea977',
            distract: false,
        },
        {
            name: 'Apple',
            link: 'https://www.apple.com',
            desc: 'Online Store',
            thumb: 'apple.png',
            accent: '555555',
            distract: false,
        },
        {
            name: 'ASOS',
            link: 'https://www.asos.com',
            desc: 'Clothes',
            thumb: 'asos.jpeg',
            style: 'secondary',
            distract: false,
        },
    ],
    'bookmarks': [
        {
            name: 'Old',
            link: 'file:///Users/hrishabh/Documents/GitHub/oldDash/index.html',
            desc: 'Previous Version',
            thumb: thumbData['more'],
            style: 'secondary',
            distract: false,
        },
        {
            name: 'Version 6.4',
            link: 'file:///Users/hrishabh/Downloads/dashboard%206.4/index.html',
            desc: 'Old Version',
            thumb: thumbData['more'],
            style: 'secondary',
            distract: false,
        },
        {
            name: 'Gmail',
            link: 'https://mail.google.com/mail/u/0/#inbox',
            desc: 'Email',
            thumb: 'gmail.jpeg',
            accent: colorData['google'].red,
            distract: false,
        },
        {
            name: 'Google Maps',
            link: 'https://www.google.com/maps',
            searchBase: 'https://www.google.com/maps/search/?api=1&query=',
            desc: 'Navigation & Transportation',
            thumb: 'google_maps.jpeg',
            accent: colorData['google'].green,
            distract: false,
        },
        {
            name: 'Apple Maps',
            link: 'maps://',
            desc: 'Navigation & Transportation',
            thumb: 'apple_maps.jpeg',
            style: 'green',
            distract: false,
        },
        {
            name: 'Citymapper',
            link: 'https://citymapper.com',
            desc: 'Navigation & Transportation',
            thumb: 'citymapper.jpeg',
            accent: '2dc922',
            distract: false,
        },
        {
            name: 'Pirate Bay',
            link: 'https://thepiratebay.org',
            desc: 'Movies & TV Shows',
            thumb: 'pirate.png',
            accent: 'a4724e',
            distract: false,
        },
        {
            name: 'RARBG',
            link: 'https://rarbg.to',
            desc: 'Movies & TV Shows',
            thumb: 'download.png',
            style: 'blue',
            distract: false,
        },
        {
            name: 'SpanishDict',
            link: 'https://www.spanishdict.com',
            searchBase: 'https://www.spanishdict.com/translate/',
            desc: 'Learn & Translate',
            thumb: 'spanishdict.jpeg',
            accent: '1b85e5',
            distract: false,
        },
        {
            name: 'Password Generator',
            link: 'https://passwordsgenerator.net/?length=15&symbols=0&numbers=1&lowercase=1&uppercase=1&similar=1&ambiguous=1&client=1&autoselect=0',
            desc: 'Secure Passwords',
            thumb: 'key.png',
            style: 'yellow',
            distract: false,
        },
        {
            name: 'Glovo',
            link: 'https://glovoapp.com/es/en/madrid',
            desc: 'Food Delivery',
            thumb: 'glovo.jpeg',
            accent: 'ffc244',
            distract: false,
        },
        {
            name: 'Symbolab',
            link: 'https://www.symbolab.com',
            desc: 'Calculator',
            thumb: 'symbolab.jpeg',
            accent: 'e02342',
            distract: false,
        },
    ],
    'video': [
        {
            name: 'TV Time',
            link: 'https://www.tvtime.com/en',
            desc: 'Track',
            thumb: 'tvTime.jpeg',
            accent: 'fbd737',
            distract: true,
        },
        {
            name: 'Reelgood',
            link: 'https://reelgood.com',
            searchBase: 'https://reelgood.com/search?q=',
            desc: 'Find Streaming Service',
            thumb: 'reelgood.jpeg',
            accent: '00dc89',
            distract: true,
        },
        {
            name: 'IMDb',
            link: 'https://imdb.com',
            searchBase: 'https://www.imdb.com/find?q=',
            desc: 'Search Movies & TV',
            thumb: 'imdb.jpeg',
            accent: 'F5C518',
            distract: true,
        },
        {
            name: 'JustWatch',
            link: 'https://www.justwatch.com/es',
            searchBase: 'https://www.justwatch.com/es/buscar?q=',
            desc: 'Find Streaming Service',
            thumb: 'justWatch.jpeg',
            accent: 'fbc500',
            distract: true,
        },
        {
            name: 'Netflix',
            link: 'https://netflix.com',
            searchBase: 'https://www.netflix.com/search?q=',
            desc: 'Watch',
            thumb: 'netflix.jpeg',
            accent: 'e50914',
            distract: true,
        },
        {
            name: 'Hulu',
            link: 'https://hulu.com',
            desc: 'Watch',
            thumb: 'hulu.jpeg',
            accent: '1ce783',
            distract: true,
        },
        {
            name: 'Prime Video',
            link: 'primevideo://',
            desc: 'Watch',
            thumb: 'prime.jpeg',
            accent: null,
            distract: true,
        },
        commonApps.youtube('YouTube', 'https://www.youtube.com', 'Watch Videos')
    ],
    'read': [
        {
            name: 'Books',
            link: 'ibooks://',
            desc: 'Read',
            thumb: 'ibooks.jpeg',
            accent: colorData['ibooks'],
            distract: false,
        },
        {
            name: 'Kindle',
            link: 'kindle://',
            desc: 'Read',
            thumb: 'kindle.jpeg',
            style: 'indigo',
            distract: false,
        },
        {
            name: 'Goodreads',
            link: 'https://www.goodreads.com',
            searchBase: 'https://www.goodreads.com/search?q=',
            desc: 'Reviews and Charts',
            thumb: 'goodreads.jpeg',
            accent: '382110',
            distract: true,
        },
        {
            name: 'Pocket',
            link: 'https://getpocket.com',
            desc: 'Saved Articles',
            thumb: 'pocket.jpeg',
            accent: 'EF4056',
            distract: true,
        },
        {
            name: 'SCMP',
            link: 'https://www.scmp.com',
            desc: 'Hong Kong News',
            thumb: 'scmp.jpeg',
            accent: 'ffca05',
            distract: true,
        },
        {
            name: 'The Verge',
            link: 'https://www.theverge.com',
            desc: 'Tech News',
            thumb: 'verge.png',
            accent: 'FA4B2A',
            distract: true,
        },
        {
            name: 'No Mercy / No Malice',
            link: 'https://www.profgalloway.com',
            desc: 'Newsletter',
            thumb: 'nmnm.png',
            style: 'red',
            distract: false,
        },
    ],
    'listen': [
        {
            name: 'Podcasts',
            link: 'podcasts://',
            desc: 'Listen',
            thumb: 'podcasts.jpeg',
            style: 'purple',
            distract: false,
        },
        {
            name: 'Audible',
            link: 'audible://',
            desc: 'AudioBooks',
            thumb: 'audible.jpeg',
            accent: 'F8991D',
            distract: false,
        },
    ],
    'travel': [
        {
            name: 'Travel',
            link: 'https://www.notion.so/Travel-798b2161bfef4ec7b4c93f4ce98fdffa',
            desc: 'Details & Documents',
            thumb: 'travel.png',
            accent: '00AAF0',
            distract: false,
        },
        {
            name: 'Flighty',
            link: 'flighty://',
            desc: 'Flight Log & Status',
            thumb: 'flighty.jpeg',
            style: 'secondary',
            distract: false,
        },
        commonApps.flight('mad-tfs'),
        commonApps.flight('tfs-mad'),
    ],
    'utilities': [
        {
            name: 'COVID-19 Tracker',
            link: 'https://news.google.com/covid19/map',
            desc: 'Cases & Vaccinations',
            thumb: 'virus.png',
            style: 'red',
            distract: false,
        },
        {
            name: 'FAST Speed Test',
            link: 'https://fast.com',
            desc: 'Internet Speed Test',
            thumb: 'fast.jpeg',
            style: 'red',
            distract: false,
        },
        {
            name: 'Speedtest by Ookla',
            link: 'https://www.speedtest.net',
            desc: 'Internet Speed Test',
            thumb: 'ookla.jpeg',
            accent: '141526',
            distract: false,
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
            name: 'Visual Studio Code',
            link: 'vscode://',
            desc: 'Code',
            thumb: 'vscode.png',
            accent: '0098FF',
            distract: true,
            tags: [
                'vsc',
            ],
        },
        {
            name: 'Flaticon',
            link: 'https://www.flaticon.com',
            desc: 'Free Icons',
            thumb: 'flaticon.png',
            accent: '0E2A47',
            distract: false,
        },
        {
            name: 'Icons8',
            link: 'https://icons8.com',
            desc: 'Free Icons',
            thumb: 'icons8.png',
            accent: '1fb141',
            distract: false,
        },
        {
            name: 'Average Colour',
            link: 'https://matkl.github.io/average-color',
            desc: 'Get Average Colour of Image',
            thumb: 'color.png',
            // style: 'red',
            distract: false,
        },
        {
            name: 'Colour Picker',
            link: 'https://image-color.com',
            desc: 'Find Colour From Image',
            thumb: 'picker.png',
            // style: 'red',
            distract: false,
        },
        {
            name: 'SVG OMG',
            link: 'https://jakearchibald.github.io/svgomg',
            desc: 'Clean Up SVGs',
            thumb: 'svg.png',
            // style: 'red',
            distract: false,
        },
        {
            name: 'Fix SVG',
            link: 'https://jsfiddle.net/fr1ke0sm/1',
            desc: 'Remove Whitespace (Square)',
            thumb: 'svg.png',
            // style: 'red',
            distract: false,
        },
        {
            name: 'Fix SVG',
            link: 'https://jsfiddle.net/knLbjc9a/4',
            desc: 'Remove Whitespace (All)',
            thumb: 'svg.png',
            // style: 'red',
            distract: false,
        },
        {
            name: 'Book Covers',
            link: 'https://www.ereader-palace.com/get-high-resolution-cover-image-amazon-kindle-ebooks',
            desc: 'High Resolution Covers',
            thumb: thumbData['book'],
            // style: 'red',
            distract: false,
        },
        {
            name: 'Round Corners',
            link: 'https://www.quickpicturetools.com/en/rounded_corners/',
            desc: 'Add Corner Radius to Image',
            thumb: 'corner.png',
            style: 'blue',
            distract: false,
        },
        {
            name: 'Fanart',
            link: 'https://fanart.tv',
            desc: 'TV & Movie Art',
            thumb: 'fanart.png',
            accent: '22B6E0',
            distract: true,
        },
    ],
    'worldClock': [],

    // school
    'sail': [
        {
            name: 'Brightspace',
            link: 'https://purdue.brightspace.com/d2l/le/content/494426/Home',
            desc: 'Learn',
            thumb: thumbData['course'],
            style: 'orange',
            distract: false,
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
        commonApps.aula('131130', 'Lectures'),
        commonApps.aula('123356', 'Problems'),
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
}

for (const city of worldClockData) {
    appData.worldClock.push({
        name: processTime(new Date().getTime() + ((1000 * 60 * 60 * parseFloat(city.offset)))),
        link: googleSearch(`${city.city} time now`),
        desc: `${city.city} Time`,
        thumb: city.thumb,
        style: city.style,
        distract: false,
        tags: [
            'world clock'
        ],
    })
}