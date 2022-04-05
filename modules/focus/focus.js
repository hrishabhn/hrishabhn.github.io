const focus = {
    data: [
        {
            name: 'Main',
            data: [
                {
                    name: 'Default',
                    id: 'default',
                    desc: 'No focus selected',
                    thumb: thumbData['user'],
                    icon: SFSymbols.person.fill,
                    style: null,
                    // apps: appData['main'],
                    work: false,
                    distract: false,
                },
                {
                    name: 'Travel',
                    id: 'travel',
                    desc: 'Flights & Hotels',
                    thumb: thumbData['plane'],
                    icon: SFSymbols.airplane,
                    style: 'mint',
                    apps: appData['travel'],
                    work: false,
                    distract: false,
                    widgets: function () {
                        return [
                            // widgets.trip.card('barca'),
                            // train.widget('mad-bcn'),
                            // train.widget('bcn-mad'),
                            widgets.trip.card('tenerife'),
                            widgets.flight.card('mad-tfs'),
                            widgets.flight.card('tfs-mad'),
                        ]
                    },
                    trays: function () {
                        return [
                            trayWithKids([flight.card('mad-tfs'), flight.card('tfs-mad'),], 30, 0)
                        ]
                    },
                },
                {
                    name: 'Workout',
                    id: 'workout',
                    desc: 'Routines & Apps',
                    thumb: thumbData['gym'],
                    icon: SFSymbols.calendar,
                    style: null,
                    apps: appData['main'],
                    work: false,
                    distract: false,
                    trays: function () {
                        return [
                            workoutCard(),
                            elems.spacer(40),
                        ]
                    },
                },
            ],
        },
        {
            name: 'School',
            data: [
                {
                    name: 'SAIL',
                    id: 'sail',
                    desc: 'Study Abroad Course',
                    thumb: thumbData['globe'],
                    icon: SFSymbols.globe,
                    style: null,
                    apps: appData['sail'],
                    work: true,
                    distract: false,
                },
                {
                    name: 'Industrial Organisation',
                    id: 'indorg',
                    desc: '13186',
                    thumb: thumbData['finance'],
                    icon: SFSymbols.chart.xyaxis.line.fill,
                    style: null,
                    apps: appData['indorg'],
                    work: true,
                    distract: false,
                },
                {
                    name: 'Financial Economics',
                    id: 'finecon',
                    desc: '13648',
                    thumb: thumbData['money'],
                    icon: SFSymbols.dollarsign.circle.fill,
                    style: null,
                    apps: appData['finecon'],
                    work: true,
                    distract: false,
                },
                {
                    name: 'Engineering Management',
                    id: 'manage',
                    desc: '14197',
                    thumb: thumbData['work'],
                    icon: SFSymbols.briefcase.fill,
                    style: null,
                    apps: appData['manage'],
                    work: true,
                    distract: false,
                },
                {
                    name: 'Control Engineering',
                    id: 'controls',
                    desc: '15514',
                    thumb: thumbData['calculus'],
                    icon: SFSymbols.florinsign.circle.fill,
                    style: null,
                    apps: appData['controls'],
                    work: true,
                    distract: false,
                },
            ],
        },
        {
            name: 'Media',
            data: [
                {
                    name: 'Watch',
                    id: 'watch',
                    desc: 'TV & Movies',
                    thumb: thumbData['tv'],
                    icon: SFSymbols.tv.fill,
                    style: 'red',
                    apps: appData['video'],
                    work: false,
                    distract: true,
                    widgets: function () {
                        return [
                            widgets.media.card(movieData[0][0], 'movie'),
                            widgets.media.card(movieData[0][1], 'movie'),
                            widgets.media.card(movieData[0][2], 'movie'),
                            // widgets.media.card(movieData[0][3], 'movie'),
                            widgets.app.card({
                                title: 'Tracking',
                                apps: [
                                    appData.video[0],
                                    appData.video[1],
                                    appData.video[2],
                                    appData.video[3],
                                ],
                            }),
                            widgets.app.card({
                                title: 'Streaming',
                                apps: [
                                    appData.video[4],
                                    appData.video[5],
                                    appData.video[6],
                                    appData.video[8],
                                ],
                            }),
                        ]
                    },
                    trays: function () {
                        return [
                            movies.rows[0].elem.big,
                            movies.rows[1].elem.smart,
                            movies.rows[2].elem.small,
                            movies.rows[3].elem.big,
                            movies.rows[4].elem.small,
                            movies.rows[5].elem.small,
                            movies.rows[6].elem.smart,
                            movies.rows[7].elem.small,
                            movies.rows[8].elem.small,
                            movies.rows[9].elem.big,
                            movies.rows[10].elem.big,
                        ]
                    },
                },
                {
                    name: 'Read',
                    id: 'read',
                    desc: 'Books & News',
                    thumb: thumbData['book'],
                    icon: SFSymbols.book.fill,
                    style: 'orange',
                    apps: appData['read'],
                    work: false,
                    distract: false,
                    widgets: function () {
                        return [
                            widgets.media.card(bookData[0].data[0], 'book'),
                            widgets.media.card(bookData[0].data[1], 'book'),
                            widgets.media.card(bookData[0].data[2], 'book'),
                        ]
                    },
                    trays: function () {
                        return [
                            books.data[0].elem,
                            books.data[1].elem,
                            books.data[2].elem,
                            books.data[3].elem,
                        ]
                    },
                },
                {
                    name: 'Listen',
                    id: 'listen',
                    desc: 'Books & Audiobooks',
                    thumb: thumbData['pod'],
                    icon: SFSymbols.headphones,
                    style: 'purple',
                    apps: appData['listen'],
                    work: false,
                    distract: false,
                    trays: function () {
                        return [
                            pods.data[0].elem,
                            pods.data[1].elem,
                            pods.data[2].elem,
                            pods.data[3].elem,
                        ]
                    },
                },
            ],
        },
    ],
    load: function () {
        // removeCookie('focus')
        if (!getCookie('focus')) setCookie('focus', JSON.stringify([0, 0]), 1)
    },
    set: function (i, j) {
        setCookie('focus', JSON.stringify([i, j]), 1)
        location.reload()
    },
    get: function () {
        const i = JSON.parse(getCookie('focus'))[0]
        const j = JSON.parse(getCookie('focus'))[1]
        return focus.data[i].data[j]
    },
    apps: function () {
        let apps = []
        for (const tray of focus.data) for (const item of tray.data) apps.push({
            name: item.name,
            trigger: function () { focus.trigger() },
            desc: item.desc,
            thumb: item.thumb,
            style: item.style,
            distract: item.distract,
        })
        return apps
    },
    menuData: function () {
        let menuData = []
        for (const tray of focus.data) {
            let menuTray = []

            for (const focus of tray.data) {
                menuTray.push({
                    type: 'icon',
                    name: focus.name,
                    icon: focus.icon,
                    trigger: function () { focus.trigger() },
                    distract: focus.distract,
                })
            }
            menuData.push(menuTray)
        }
        return menuData
    },
}


// add trigger function to focusData
for (const i in focus.data) for (const j in focus.data[i].data) {
    const item = focus.data[i].data[j]
    item.trigger = function () { focus.set(parseInt(i), parseInt(j)) }
}