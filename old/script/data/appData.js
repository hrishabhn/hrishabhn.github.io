const commonApps = {
    // finder: function (link) {
    //     return {
    //         name: 'Folder',
    //         link: link,
    //         desc: 'Files',
    //         thumb: 'files.jpeg',
    //         color: Colors.blue,
    //         distract: false,
    //     }
    // },
    onedrive: function (link) {
        return {
            name: 'OneDrive',
            link: link,
            desc: 'Files',
            thumb: 'onedrive.jpeg',
            accent: colorData['onedrive'],
            distract: false,
            dockIcon: SFSymbols.icloud.fill,
        }
    },
    notion: function (link) {
        return {
            name: 'Notion',
            link: link,
            desc: 'Notes',
            thumb: 'notion.jpeg',
            accent: '000000',
            distract: false,
            dockIcon: SFSymbols.note.text,
        }
    },
    aula: function (id, n) {
        return {
            name: n ? `Aula Global (${n})` : 'Aula Global',
            link: `https://aulaglobal.uc3m.es/course/view.php?id=${id}`,
            desc: 'Learn',
            thumb: thumbData['course'],
            color: Colors.orange,
            distract: false,
            dockIcon: SFSymbols.graduationcap.fill,
        }
    },
    syllabus: function (id) {
        return {
            name: 'Syllabus',
            link: `./course/${id}_syllabus.pdf`,
            desc: 'Course Rules',
            thumb: thumbData['book'],
            color: Colors.red,
            distract: false,
            dockIcon: SFSymbols.book.fill,
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

const appData = {
    // 'main': [
    //     {
    //         name: 'Outlook',
    //         link: 'ms-outlook://',
    //         desc: 'Email',
    //         thumb: 'outlook.jpeg',
    //         accent: '0078d4',
    //         distract: false,
    //     },
    //     {
    //         name: 'Spark',
    //         link: 'readdle-spark://',
    //         desc: 'Email',
    //         thumb: 'spark.jpeg',
    //         color: Colors.blue,
    //         distract: false,
    //     },
    //     commonApps.onedrive('https://purdue0-my.sharepoint.com'),
    //     commonApps.notion('https://www.notion.so/Homepage-2-0-ebdb7991969f49ffa7be6906f7685945'),
    //     {
    //         name: 'TickTick',
    //         link: 'ticktick://',
    //         desc: 'To do list',
    //         thumb: 'ticktick.jpeg',
    //         color: Colors.blue,
    //         distract: false,
    //     },
    //     {
    //         name: 'Tasks',
    //         link: 'https://app.clickup.com/8450846/v/l/6-48362200-1',
    //         desc: 'Tasks',
    //         thumb: 'double-check.png',
    //         color: Colors.blue,
    //         distract: false,
    //     },
    //     {
    //         name: 'Homework',
    //         link: 'https://app.clickup.com/8450846/v/l/4-54680096-1',
    //         desc: 'Tasks',
    //         thumb: thumbData['course'],
    //         color: Colors.blue,
    //         distract: false,
    //     },
    // ],
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
            color: Colors.yellow,
            distract: false,
        },
        {
            name: 'Reflect',
            link: 'https://www.notion.so/hrishabhn/Reflection-af521d25d2954a29b3945d3afb1f3849',
            desc: 'Thoughts & Ideas',
            thumb: thumbData['thought'],
            color: Colors.cyan,
            distract: false,
        },
    ],
    'school': [
        {
            name: 'Homework',
            link: 'https://app.clickup.com/8450846/v/l/4-20137584-1',
            desc: 'Assignments',
            thumb: thumbData['book'],
            color: Colors.red,
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
            color: Colors.teal,
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
            color: Colors.secondary,
            distract: false,
        },
    ],
    'bookmarks': [
        {
            name: 'Old',
            link: 'file:///Users/hrishabh/Documents/GitHub/oldDash/index.html',
            desc: 'Previous Version',
            thumb: thumbData['more'],
            color: Colors.secondary,
            distract: false,
        },
        {
            name: 'Numberbarn',
            link: 'https://www.numberbarn.com/account/messages',
            desc: 'Text Messages',
            icon: SFSymbols.phone.fill,
            color: Colors.indigo,
            distract: false,
        },
        {
            name: 'Version 6.4',
            link: 'file:///Users/hrishabh/Downloads/dashboard%206.4/index.html',
            desc: 'Old Version',
            thumb: thumbData['more'],
            color: Colors.secondary,
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
            color: Colors.green,
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
            color: Colors.blue,
            distract: false,
        },
        // to delete
        {
            name: 'Password Generator',
            link: 'https://passwordsgenerator.net/?length=15&symbols=0&numbers=1&lowercase=1&uppercase=1&similar=1&ambiguous=1&client=1&autoselect=0',
            desc: 'Secure Passwords',
            thumb: 'key.png',
            color: Colors.yellow,
            distract: false,
        },
        {
            name: 'Glovo',
            link: 'https://glovoapp.com/es/en/madrid',
            searchBase: 'https://glovoapp.com/es/en/madridsearch-glovo/',
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
            name: 'CNN+',
            link: 'https://plus.cnn.com/plus',
            desc: 'Watch',
            thumb: 'cnn.jpeg',
            accent: 'cc0000',
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
            name: 'Disney+',
            link: 'https://www.disneyplus.com',
            desc: 'Watch',
            thumb: 'disney.jpeg',
            accent: '113ccf',
            distract: true,
        },
        {
            name: 'Prime Video',
            link: 'primevideo://',
            desc: 'Watch',
            thumb: 'prime.jpeg',
            color: Colors.indigo,
            distract: true,
        },
        commonApps.youtube('YouTube', 'https://www.youtube.com', 'Watch Videos'),
        {
            name: 'Feedly',
            link: 'https://feedly.com/i/collection/content/user/a21f4f90-2ac3-4d5b-884f-8b5484ecd33c/category/7e61f497-937a-4423-a312-d71006ee098f',
            desc: 'YouTube Feed',
            thumb: 'feedly.jpeg',
            // accent: 'e50914',
            distract: true,
        },
        {
            name: 'Up next',
            link: 'https://www.youtube.com/playlist?list=PLGSQnvawXkTgJjsn_zoXdJf5pZR-qxLiH',
            desc: 'YouTube Queue',
            icon: SFSymbols.list.bullet,
            color: Colors.indigo,
            distract: true,
        },
        {
            name: 'Smart DNS Proxy',
            link: 'https://www.smartdnsproxy.com/myaccount',
            desc: 'Unblocker',
            icon: SFSymbols.wifi,
            color: Colors.cyan,
            distract: true,
        },
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
            color: Colors.indigo,
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
            color: Colors.red,
            distract: false,
        },
    ],
    'listen': [
        {
            name: 'Podcasts',
            link: 'podcasts://',
            desc: 'Listen',
            thumb: 'podcasts.jpeg',
            color: Colors.purple,
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
            color: Colors.secondary,
            distract: false,
        },
        // {
        //     name: 'Tenerife',
        //     trigger: function () { modal.add(trip.card('tenerife')) },
        //     desc: 'Easter Break Trip',
        //     thumb: 'flighty.jpeg',
        // color: Colors.secondary,
        //     distract: false,
        // },
        // commonApps.flight('mad-tfs'),
        // commonApps.flight('tfs-mad'),
    ],
    'utilities': [
        {
            name: 'COVID-19 Tracker',
            link: 'https://news.google.com/covid19/map',
            desc: 'Cases & Vaccinations',
            thumb: 'virus.png',
            color: Colors.red,
            distract: false,
        },
        {
            name: 'FAST Speed Test',
            link: 'https://fast.com',
            desc: 'Internet Speed Test',
            thumb: 'fast.jpeg',
            color: Colors.red,
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
            name: 'Dribbble',
            link: 'https://dribbble.com',
            searchBase: 'https://dribbble.com/search/',
            desc: 'UI Design Ideas',
            thumb: 'dribbble.png',
            accent: 'ea4c89',
            distract: true,
        },
        {
            name: 'Visual Studio Code',
            link: 'vscode://',
            desc: 'Code',
            thumb: 'vscode.png',
            accent: '0098FF',
            distract: true,
            tags: [
                'vscode',
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
            // color: Colors.red,
            distract: false,
        },
        {
            name: 'Colour Picker',
            link: 'https://image-color.com',
            desc: 'Find Colour From Image',
            thumb: 'picker.png',
            // color: Colors.red,
            distract: false,
        },
        {
            name: 'SVG OMG',
            link: 'https://jakearchibald.github.io/svgomg',
            desc: 'Clean Up SVGs',
            thumb: 'svg.png',
            // color: Colors.red,
            distract: false,
        },
        {
            name: 'Fix SVG',
            link: 'https://jsfiddle.net/fr1ke0sm/1',
            desc: 'Remove Whitespace (Square)',
            thumb: 'svg.png',
            // color: Colors.red,
            distract: false,
        },
        {
            name: 'Fix SVG',
            link: 'https://jsfiddle.net/knLbjc9a/4',
            desc: 'Remove Whitespace (All)',
            thumb: 'svg.png',
            // color: Colors.red,
            distract: false,
        },
        {
            name: 'Book Covers',
            link: 'https://www.ereader-palace.com/get-high-resolution-cover-image-amazon-kindle-ebooks',
            desc: 'High Resolution Covers',
            thumb: thumbData['book'],
            // color: Colors.red,
            distract: false,
        },
        {
            name: 'Round Corners',
            link: 'https://www.quickpicturetools.com/en/rounded_corners/',
            desc: 'Add Corner Radius to Image',
            thumb: 'corner.png',
            color: Colors.blue,
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
    'worldClock': worldClock.apps(),
    span: [
        {
            name: 'SpanishDict',
            link: 'https://www.spanishdict.com/learn',
            searchBase: 'https://www.spanishdict.com/translate/',
            desc: 'Learn & Translate',
            thumb: 'spanishdict.jpeg',
            accent: '1b85e5',
            distract: false,
        },
        {
            name: 'Google Translate',
            link: 'https://translate.google.com',
            desc: 'Translate',
            thumb: 'translate.jpeg',
            accent: colorData.google.blue,
            distract: false,
        },
    ],

    // school
    thermo: [
        {
            name: 'WyoWeb',
            link: 'https://wyoweb.uwyo.edu',
            desc: 'Canvas',
            thumb: thumbData.course,
            color: Colors.yellow,
            distract: false,
            dockIcon: SFSymbols.person.fill,
        },
        {
            name: 'Canvas',
            link: 'https://uwyo.instructure.com',
            desc: 'Canvas',
            thumb: thumbData.course,
            color: Colors.red,
            distract: false,
            dockIcon: SFSymbols.graduationcap.fill,
        },
        commonApps.syllabus('thermo'),
        commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Summer%202022/Thermodynamics'),
        commonApps.notion('https://www.notion.so/hrishabhn/ES-2310-ME-200-UWyo-bd352613984c46e3b8be09799cc84448'),
    ],

    hp: [
        {
            name: 'Workday',
            link: 'https://wd5.myworkday.com/hp',
            desc: 'Portal',
            icon: SFSymbols.person.fill,
            color: Colors.blue,
            distract: false,
        },
        commonApps.notion('https://www.notion.so/hrishabhn/HP-0c796b15ffba44b0bf1e4266f04c8599'),
        {
            name: 'Zoom',
            link: 'https://hp.zoom.us',
            desc: 'Video Calls',
            thumb: 'zoom.jpeg',
            color: Colors.blue,
            distract: false,
        },
    ]


    // 'amst': [
    //     {
    //         name: 'Brightspace',
    //         link: 'https://purdue.brightspace.com/d2l/le/content/552142/Home',
    //         desc: 'Learn',
    //         thumb: thumbData['course'],
    //         color: Colors.orange,
    //         distract: false,
    //         dockIcon: SFSymbols.graduationcap.fill,
    //     },
    //     commonApps.syllabus('amst'),
    //     commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Summer%202022/AMST%20101?csf=1&web=1&e=e8EbtC'),
    //     commonApps.notion('https://www.notion.so/hrishabhn/AMST-101-9b071b3380f54fdd9b9b665776033bfe'),
    // ],
    // 'indorg': [
    //     commonApps.aula('123832'),
    //     commonApps.syllabus('indorg'),
    //     // commonApps.finder('shortcuts://run-shortcut?name=Industrial%20Organisation%20Folder'),
    //     commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/Industrial%20Organisation'),
    //     commonApps.notion('https://www.notion.so/Industrial-Organisation-6f9a042e98f6458a9f509689c2025571'),
    // ],
    // 'finecon': [
    //     commonApps.aula('131130', 'Lectures'),
    //     commonApps.aula('123356', 'Problems'),
    //     commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/Financial%20Economics'),
    //     commonApps.notion('https://www.notion.so/Financial-Economics-f175d589aae64f7b9ecd3c101be4ff53'),
    // ],
    // 'manage': [
    //     commonApps.aula('126308', 1),
    //     commonApps.aula('132011', 2),
    //     commonApps.syllabus('manage'),
    //     commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/Management'),
    //     commonApps.notion('https://www.notion.so/Engineering-Management-42466297fd4148a7bf275247cde1becb'),
    // ],
    // 'controls': [
    //     commonApps.aula('127222'),
    //     commonApps.syllabus('controls'),
    //     commonApps.onedrive('https://purdue0-my.sharepoint.com/:f:/r/personal/hnadkarn_purdue_edu/Documents/Spring%202022/Controls'),
    //     commonApps.notion('https://www.notion.so/Controls-a33110b68afe4e468d12bbb96b1e31dd'),
    //     commonApps.youtube('Control Systems', 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqzJT87LsdQKYZBC93ezDo', 'YouTube Lectures'),
    //     // https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqzJT87LsdQKYZBC93ezDo
    // ],
}