const focus = {
    data: [
        {
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
            name: 'Work',
            data: [
                {
                    name: 'HP',
                    id: 'hp',
                    desc: 'Internship',
                    // thumb: thumbData['globe'],
                    icon: SFSymbols.briefcase.fill,
                    color: Colors.blue,
                    apps: appData.hp,
                    work: true,
                    distract: false,
                },
                {
                    name: 'Spanish',
                    id: 'span',
                    desc: 'Learn & Practice',
                    thumb: thumbData['globe'],
                    icon: SFSymbols.globe,
                    color: Colors.red,
                    apps: appData.span,
                    work: false,
                    distract: false,
                },
                {
                    name: 'Thermodynamics',
                    id: 'thermo',
                    desc: 'ES 2310',
                    thumb: null,
                    icon: SFSymbols.flame.fill,
                    color: Colors.yellow,
                    apps: appData.thermo,
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
                            movieElem.giant.create(),
                            channels.bigTray(),
                            movieElem.tall.tray(movieRaw[0]),
                            movieElem.big.tray(movieRaw[1]),
                            movieElem.small.tray(movieRaw[2]),
                            movieElem.tall.tray(movieRaw[3]),
                            movieElem.small.tray(movieRaw[4]),
                            movieElem.small.tray(movieRaw[5]),
                            movieElem.smart.tray(movieRaw[6]),
                            movieElem.small.tray(movieRaw[7]),
                            movieElem.small.tray(movieRaw[8]),
                            movieElem.tall.tray(movieRaw[9]),
                            movieElem.tall.tray(movieRaw[10]),
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
        {
            name: 'Other',
            data: [
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
            dockIcon: item.icon,
            color: item.color,
            distract: item.distract,
        })
        return apps
    },
    menuData: function () {
        let data = []
        for (const tray of focus.data) {
            let subData = []

            for (const focus of tray.data) {
                subData.push({
                    type: 'basic',
                    name: focus.name,
                    icon: focus.icon,
                    trigger: function () { focus.trigger() },
                    distract: focus.distract,
                })
            }
            data.push({
                name: tray.name,
                data: subData,
            })
        }
        return data
    },
}


// add trigger function to focusData
for (const i in focus.data) for (const j in focus.data[i].data) {
    const item = focus.data[i].data[j]
    item.trigger = function () { focus.set(parseInt(i), parseInt(j)) }
}