const commonApps = {
    onedrive: function (link) {
        return {
            name: 'OneDrive',
            link: link,
            icon: SFSymbols.icloud.fill,
            accent: colorData.onedrive,
        }
    },
    notion: function (link) {
        return {
            name: 'Notion',
            link: link,
            icon: SFSymbols.note.text,
            accent: '000000',
        }
    },
    // aula: function (id, n) {
    //     return {
    //         name: n ? `Aula Global (${n})` : 'Aula Global',
    //         link: `https://aulaglobal.uc3m.es/course/view.php?id=${id}`,
    //         desc: 'Learn',
    //         thumb: thumbData['course'],
    //         color: Colors.orange,
    //         distract: false,
    //         dockIcon: SFSymbols.graduationcap.fill,
    //     }
    // },
    syllabus: function (id) {
        return {
            name: 'Syllabus',
            link: `./course/${id}_syllabus.pdf`,
            icon: SFSymbols.book.fill,
            color: Colors.red,
        }
    },

    reddit: function (sub) {
        return {
            name: `r/${sub}`,
            link: `https://www.reddit.com/r/${sub}`,
            thumb: thumbData.reddit,
            accent: colorData.reddit,
            distract: true,
            tags: ['reddit'],
        }
    },
    twitter: function (handle) {
        return {
            name: `@${handle}`,
            link: `https://twitter.com/${handle}`,
            thumb: 'twitter.jpeg',
            accent: colorData.twitter,
            distract: true,
            tags: ['twitter'],
        }
    },
    // youtube: function (name, link, desc) {
    //     return {
    //         name: name,
    //         link: link,
    //         // searchBase: 'https://www.youtube.com/results?search_query=',
    //         desc: desc,
    //         thumb: 'youtube.jpeg',
    //         accent: colorData['google'].red,
    //         // distract: true,
    //         tags: [
    //             'youtube',
    //         ],
    //     }
    // },

    flight: function (key) {
        const flight = flightData[key]
        return {
            name: `${flight.airline.code} ${flight.number}`,
            trigger: function () { flightData[key].detail() },
            desc: `${flight.dep.code} &#8594 ${flight.arr.code}`,
            thumb: flight.airline.thumb,
            accent: flight.airline.accent,
            distract: false,
            tags: [
                flight.dep.city,
                flight.arr.city,
            ],
            dockIcon: flight.airline.logo.icon,
        }
    }
}


const appDataAll = {
    // focus
    hp: [
        {
            name: 'Workday',
            link: 'https://wd5.myworkday.com/hp',
            icon: SFSymbols.person.fill,
            color: Colors.blue,
        },
        commonApps.notion('https://www.notion.so/hrishabhn/HP-0c796b15ffba44b0bf1e4266f04c8599'),
        {
            name: 'Zoom',
            link: 'zoom-us://',
            thumb: 'zoom.jpeg',
            color: Colors.blue,
        },
    ],
    thermo: [
        {
            name: 'WyoWeb',
            link: 'https://wyoweb.uwyo.edu',
            icon: SFSymbols.person.fill,
            color: Colors.yellow,
        },
        {
            name: 'Canvas',
            link: 'https://uwyo.instructure.com',
            icon: SFSymbols.graduationcap.fill,
            color: Colors.orange,
        },
        commonApps.syllabus('thermo'),
        commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Summer%202022/Thermodynamics'),
        commonApps.notion('https://www.notion.so/hrishabhn/ES-2310-ME-200-UWyo-bd352613984c46e3b8be09799cc84448'),
    ],
    //@ remove after adding channels
    video: [
        {
            name: 'TV Time',
            link: 'https://www.tvtime.com/en',
            thumb: 'tvTime.jpeg',
            accent: 'fbd737',
        },
        {
            name: 'Reelgood',
            link: 'https://reelgood.com',
            searchBase: 'https://reelgood.com/search?q=',
            thumb: 'reelgood.jpeg',
            accent: '00dc89',
        },
        {
            name: 'IMDb',
            link: 'https://imdb.com',
            searchBase: 'https://www.imdb.com/find?q=',
            thumb: 'imdb.jpeg',
            accent: 'F5C518',
        },
        {
            name: 'JustWatch',
            link: 'https://www.justwatch.com/es',
            searchBase: 'https://www.justwatch.com/es/buscar?q=',
            thumb: 'justWatch.jpeg',
            accent: 'fbc500',
        },
        {
            name: 'Netflix',
            link: 'https://netflix.com',
            searchBase: 'https://www.netflix.com/search?q=',
            thumb: 'netflix.jpeg',
            accent: 'e50914',
        },
        {
            name: 'Hulu',
            link: 'https://hulu.com',
            thumb: 'hulu.jpeg',
            accent: '1ce783',
        },
        {
            name: 'Disney+',
            link: 'https://www.disneyplus.com',
            thumb: 'disney.jpeg',
            accent: '113ccf',
        },
        {
            name: 'Prime Video',
            link: 'primevideo://',
            thumb: 'prime.jpeg',
            color: Colors.indigo,
        },
        {
            name: 'YouTube',
            link: 'https://www.youtube.com',
            searchBase: 'https://www.youtube.com/results?search_query=',
            thumb: 'youtube.jpeg',
            accent: colorData.google.red,
        },
        {
            name: 'Feedly',
            link: 'https://feedly.com/i/collection/content/user/a21f4f90-2ac3-4d5b-884f-8b5484ecd33c/category/7e61f497-937a-4423-a312-d71006ee098f',
            thumb: 'feedly.jpeg',
            color: Colors.green,
            tags: ['youtube'],
        },
        {
            name: 'Smart DNS Proxy',
            link: 'https://www.smartdnsproxy.com/myaccount',
            icon: SFSymbols.wifi,
            color: Colors.cyan,
        },
    ],
    read: [
        {
            name: 'Books',
            link: 'ibooks://',
            thumb: 'ibooks.jpeg',
            color: Colors.orange,
        },
        {
            name: 'Kindle',
            link: 'kindle://',
            thumb: 'kindle.jpeg',
            color: Colors.indigo,
        },
        {
            name: 'Goodreads',
            link: 'https://www.goodreads.com',
            searchBase: 'https://www.goodreads.com/search?q=',
            thumb: 'goodreads.jpeg',
            accent: '382110',
        },
        {
            name: 'Instapaper',
            link: 'https://www.instapaper.com',
            thumb: 'pocket.jpeg', //@
            color: Colors.secondary,
        },
        {
            name: 'Pocket',
            link: 'https://getpocket.com',
            thumb: 'pocket.jpeg',
            accent: 'EF4056',
        },
        {
            name: 'SCMP',
            link: 'https://www.scmp.com',
            thumb: 'scmp.jpeg',
            accent: 'ffca05',
        },
        {
            name: 'The Verge',
            link: 'https://www.theverge.com',
            thumb: 'verge.png',
            accent: 'FA4B2A',
        },
        {
            name: 'No Mercy / No Malice',
            link: 'https://www.profgalloway.com',
            thumb: 'nmnm.png',
            color: Colors.red,
        },
    ],
    listen: [
        {
            name: 'Podcasts',
            link: 'podcasts://',
            thumb: 'podcasts.jpeg',
            color: Colors.purple,
        },
        {
            name: 'Audible',
            link: 'audible://',
            thumb: 'audible.jpeg',
            accent: 'F8991D',
        },
    ],


    // bookmarks
    main: [
        commonApps.onedrive('https://purdue0-my.sharepoint.com'),
        commonApps.notion('https://www.notion.so/Homepage-3-0-d4eb0250265d408dade3bb38f3355b90'),
    ],
    bookmarks: [
        {
            name: 'Numberbarn',
            link: 'https://www.numberbarn.com/account/messages',
            icon: SFSymbols.phone.fill,
            color: Colors.indigo,
        },
        {
            name: 'Old',
            link: 'file:///Users/hrishabh/Documents/GitHub/oldDash/index.html',
            thumb: thumbData['more'],
            color: Colors.secondary,
        },
        {
            name: 'Version 6.4',
            link: 'file:///Users/hrishabh/Downloads/dashboard%206.4/index.html',
            thumb: thumbData['more'],
            color: Colors.secondary,
        },
        {
            name: 'Gmail',
            link: 'https://mail.google.com/mail/u/0/#inbox',
            thumb: 'gmail.jpeg',
            accent: colorData.google.red,
        },
        {
            name: 'Google Maps',
            link: 'https://www.google.com/maps',
            searchBase: 'https://www.google.com/maps/search/?api=1&query=',
            thumb: 'google_maps.jpeg',
            accent: colorData.google.green,
        },
        {
            name: 'Apple Maps',
            link: 'maps://',
            thumb: 'apple_maps.jpeg',
            color: Colors.green,
        },
        {
            name: 'Citymapper',
            link: 'https://citymapper.com',
            thumb: 'citymapper.jpeg',
            accent: '2dc922',
        },
        {
            name: 'Pirate Bay',
            link: 'https://thepiratebay.org',
            thumb: 'pirate.png',
            accent: 'a4724e',
        },
        {
            name: 'RARBG',
            link: 'https://rarbg.to',
            thumb: 'download.png',
            color: Colors.blue,
        },
        // to delete
        {
            name: 'Password Generator',
            link: 'https://passwordsgenerator.net/?length=15&symbols=0&numbers=1&lowercase=1&uppercase=1&similar=1&ambiguous=1&client=1&autoselect=0',
            thumb: 'key.png',
            color: Colors.yellow,
        },
        {
            name: 'Glovo',
            link: 'https://glovoapp.com/es/en/madrid',
            searchBase: 'https://glovoapp.com/es/en/madridsearch-glovo/',
            thumb: 'glovo.jpeg',
            accent: 'ffc244',
        },
        {
            name: 'Symbolab',
            link: 'https://www.symbolab.com',
            thumb: 'symbolab.jpeg',
            accent: 'e02342',
        },
    ],
    notion: [
        {
            name: 'Accounts',
            link: 'https://www.notion.so/Accounts-ec9ee8a777504363a574706d8c820b99',
            thumb: thumbData.user,
            accent: '607D8B',
        },
        {
            name: 'Travel',
            link: 'https://www.notion.so/Travel-798b2161bfef4ec7b4c93f4ce98fdffa',
            thumb: 'travel.png',
            accent: '00AAF0',
        },
    ],
    purdue: [
        {
            name: 'myPurdue',
            link: 'https://wl.mypurdue.purdue.edu',
            thumb: 'purdue.jpeg',
            accent: colorData.purdue,
        },
        {
            name: 'My Study Abroad',
            link: 'https://www.purdue.edu/IPPU/SA',
            icon: SFSymbols.airplane,
            color: Colors.teal,
        },
    ],
    span: [
        {
            name: 'SpanishDict',
            link: 'https://www.spanishdict.com/learn', //@
            searchBase: 'https://www.spanishdict.com/translate/',
            thumb: 'spanishdict.jpeg',
            accent: '1b85e5',
        },
        {
            name: 'Google Translate',
            link: 'https://translate.google.com',
            thumb: 'translate.jpeg',
            accent: colorData.google.blue,
        },
    ],
    utilities: [
        {
            name: 'COVID-19 Tracker',
            link: 'https://news.google.com/covid19/map',
            thumb: 'virus.png', //@ change to icon
            color: Colors.red,
        },
        {
            name: 'Fast.com',
            link: 'https://fast.com',
            thumb: 'fast.jpeg',
            color: Colors.red,
        },
        {
            name: 'Speedtest by Ookla',
            link: 'https://www.speedtest.net',
            thumb: 'ookla.jpeg',
            accent: '141526',
        },
    ],
    design: [
        {
            name: 'Dribbble',
            link: 'https://dribbble.com',
            searchBase: 'https://dribbble.com/search/',
            thumb: 'dribbble.png',
            accent: 'ea4c89',
            distract: true,
        },
        {
            name: 'Flaticon',
            link: 'https://www.flaticon.com',
            thumb: 'flaticon.png',
            accent: '0E2A47',
            distract: true,
        },
        {
            name: 'Icons8',
            link: 'https://icons8.com',
            thumb: 'icons8.png',
            accent: '1fb141',
            distract: true,
        },
        {
            name: 'Average Colour',
            link: 'https://matkl.github.io/average-color',
            thumb: 'color.png',
            // color: Colors.red,
        },
        {
            name: 'Colour Picker',
            link: 'https://image-color.com',
            thumb: 'picker.png',
            // color: Colors.red,
        },
        {
            name: 'SVG OMG',
            link: 'https://jakearchibald.github.io/svgomg',
            thumb: 'svg.png',
            // color: Colors.red,
        },
        {
            name: 'SVG Whitespace (Square)',
            link: 'https://jsfiddle.net/fr1ke0sm/1',
            thumb: 'svg.png',
            // color: Colors.red,
        },
        {
            name: 'SVG Whitespace',
            link: 'https://jsfiddle.net/knLbjc9a/4',
            thumb: 'svg.png',
            // color: Colors.red,
        },
        {
            name: 'Book Covers',
            link: 'https://www.ereader-palace.com/get-high-resolution-cover-image-amazon-kindle-ebooks',
            icon: SFSymbols.book.fill,
            color: Colors.red,
        },
        {
            name: 'Round Corners',
            link: 'https://www.quickpicturetools.com/en/rounded_corners/',
            thumb: 'corner.png',
            color: Colors.blue,
        },
        {
            name: 'Fanart',
            link: 'https://fanart.tv',
            thumb: 'fanart.png',
            accent: '22B6E0',
            distract: true,
        },
    ],
    profiles: [
        commonApps.twitter('tripperhead'),
        commonApps.reddit('Purdue'),
        commonApps.reddit('iOSBeta'),
        commonApps.reddit('macOSBeta'),
    ],
    shopping: [
        {
            name: 'Amazon',
            link: 'https://www.amazon.es',
            thumb: 'amazon.jpeg',
            accent: 'bea977',
        },
        {
            name: 'Apple',
            link: 'https://www.apple.com',
            thumb: 'apple.png',
            accent: '555555',
        },
        {
            name: 'ASOS',
            link: 'https://www.asos.com',
            thumb: 'asos.jpeg',
            color: Colors.secondary,
        },
    ],
}