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
                    color: null,
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
                    color: Colors.mint,
                    apps: appData['travel'],
                    work: false,
                    distract: false,
                    widgets: function () {
                        return [
                            // widgets.trip.card('barca'),
                            // train.widget('mad-bcn'),
                            // train.widget('bcn-mad'),
                            widgets.trip.card('exeter'),
                            widgets.flight.card('mad-lhr'),
                            train.widget('lon-exe'),
                            train.widget('exe-lon'),
                            widgets.flight.card('lgw-mad'),
                        ]
                    },
                    // trays: function () {
                    //     return [
                    //         trayWithKids([flight.card('mad-tfs'), flight.card('tfs-mad'),], 30, 0)
                    //     ]
                    // },
                },
                // {
                //     name: 'Workout',
                //     id: 'workout',
                //     desc: 'Routines & Apps',
                //     thumb: thumbData['gym'],
                //     icon: SFSymbols.calendar,
                //     color: null,
                //     apps: appData['main'],
                //     work: false,
                //     distract: false,
                //     trays: function () {
                //         return [
                //             workoutCard(),
                //             elems.spacer(40),
                //         ]
                //     },
                // },
            ],
        },
        {
            name: 'School',
            data: [
                {
                    name: 'American Studies',
                    id: 'amst',
                    desc: 'AMST 101',
                    thumb: thumbData['globe'],
                    icon: SFSymbols.globe,
                    color: null,
                    apps: appData['amst'],
                    work: true,
                    distract: false,
                },
                {
                    name: 'Industrial Organisation',
                    id: 'indorg',
                    desc: '13186',
                    thumb: thumbData['finance'],
                    icon: SFSymbols.chart.xyaxis.line.fill,
                    color: null,
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
                    color: null,
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
                    color: null,
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
                    color: null,
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
                    name: 'Media',
                    id: 'media',
                    desc: 'TV, Movies, Podcasts & Books',
                    thumb: thumbData['tv'], //update
                    icon: SFSymbols.play.fill,
                    color: Colors.red,
                    apps: null,
                    work: false,
                    distract: true,
                    trays: function () {
                        return [mediaAll.modal('pod')]
                    },
                },
                {
                    name: 'Watch',
                    id: 'watch',
                    desc: 'TV & Movies',
                    thumb: thumbData['tv'],
                    icon: SFSymbols.tv.fill,
                    color: Colors.red,
                    apps: appData['video'],
                    work: false,
                    distract: true,
                    splashCard: function () {
                        // base card with header
                        let card = leftbar.cardBase('Movies & TV', [{ icon: SFSymbols.tv.fill }])
                        card.id = 'movie-splash'

                        let body = document.createElement('div')
                        body.classList = 'body'

                        let i = 0
                        for (const x of movieRaw) for (const movie of x.data) if (i < 3) {
                            let item = document.createElement('a')
                            item.classList = 'item clickable-o'
                            item.append(elems.thumb(`./media-image/TV/background/${movie.id}.${movie.style.poster.wide.type}`))
                            item.append(elems.textbox(movie.name, movie.desc.full))
                            item.onclick = function () { movie.detail() }
                            body.append(item)
                            i++
                        }

                        card.append(body)
                        return card
                    },
                    trays: function () {
                        return [
                            channels.tray(),
                            floatingMovie.tray(),
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
                    color: Colors.orange,
                    apps: appData['read'],
                    work: false,
                    distract: false,
                    // widgets: function () {
                    //     return [
                    //         widgets.media.card(bookData[0].data[0], 'book'),
                    //         widgets.media.card(bookData[0].data[1], 'book'),
                    //         widgets.media.card(bookData[0].data[2], 'book'),
                    //     ]
                    // },
                    trays: function () {
                        return [
                            bookPage()[0],
                            bookPage()[1],
                            bookPage()[2],
                            bookPage()[3],
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
                    color: Colors.purple,
                    apps: appData['listen'],
                    work: false,
                    distract: false,
                    trays: function () {
                        return [podElem.recent.tray()]
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
            trigger: function () { item.trigger() },
            desc: item.desc,
            thumb: item.thumb,
            color: item.color,
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