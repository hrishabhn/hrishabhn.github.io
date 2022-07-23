const focusDict = {
    default: {
        name: 'Default',
        desc: 'No focus selected',
        icon: SFSymbols.person.fill,
        color: Colors.blue,
        apps: null,
        work: false,
        distract: false,
    },
    bored: {
        name: 'Bored',
        desc: null,
        icon: SFSymbols.lightbulb.fill, //@ question mark
        color: Colors.red,
        apps: appDataAll.bored,
        work: false,
        distract: false,
    },
    hp: {
        name: 'HP',
        desc: null,
        icon: SFSymbols.briefcase.fill,
        color: Colors.blue,
        apps: appDataAll.hp,
        work: true,
        distract: false,
    },
    thermo: {
        name: 'Thermodynamics',
        desc: 'ES 2310',
        icon: SFSymbols.flame.fill,
        color: Colors.yellow,
        apps: appDataAll.thermo,
        work: true,
        distract: false,
    },
    media: {
        name: 'Media',
        desc: 'TV, Movies, Podcasts & Books',
        icon: SFSymbols.play.fill,
        color: Colors.red,
        apps: null,
        work: false,
        distract: true,
        trays: function () {
            return [mediaAll.modal('pod')]
        },
    },
    watch: {
        name: 'Watch',
        desc: 'TV & Movies',
        icon: SFSymbols.tv.fill,
        color: Colors.red,
        apps: appDataAll.video,
        work: false,
        distract: true,
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
    read: {
        name: 'Read',
        desc: 'Books & News',
        icon: SFSymbols.book.fill,
        color: Colors.orange,
        apps: appDataAll.read,
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
    listen: {
        name: 'Listen',
        desc: 'Books & Audiobooks',
        icon: SFSymbols.headphones,
        color: Colors.purple,
        apps: appDataAll.listen,
        work: false,
        distract: false,
        trays: function () {
            return [podElem.recent.tray()]
        },
    },
    workout: {
        name: 'Workout',
        desc: 'Gym',
        icon: SFSymbols.heart.fill,
        color: Colors.green,
        apps: null,
        work: false,
        distract: false,
        trays: function () {
            return [
                workoutCard(),
            ]
        },
    },
}

for (const k in focusDict) {
    focusDict[k].id = k
    focusDict[k].trigger = function () { focus.set(k) }
}




const focus = {
    data: [
        {
            name: null,
            data: [
                focusDict.default,
                focusDict.bored,
                focusDict.workout,
            ],
        },
        {
            name: 'Work',
            data: [
                focusDict.hp,
                focusDict.thermo,
            ],
        },
        {
            name: 'Media',
            data: [
                focusDict.media,
                focusDict.watch,
                focusDict.read,
                focusDict.listen,
            ],
        },
        // {
        //     name: 'Other',
        //     data: [
        //         {
        //             name: 'Travel',
        //             id: 'travel',
        //             desc: 'Flights & Hotels',
        //             icon: SFSymbols.airplane,
        //             color: Colors.mint,

        //             work: false,
        //             distract: false,
        //             widgets: function () {
        //                 return [
        //                     // widgets.trip.card('barca'),
        //                     // train.widget('mad-bcn'),
        //                     // train.widget('bcn-mad'),
        //                     widgets.trip.card('exeter'),
        //                     widgets.flight.card('mad-lhr'),
        //                     train.widget('lon-exe'),
        //                     train.widget('exe-lon'),
        //                     widgets.flight.card('lgw-mad'),
        //                 ]
        //             },
        //             // trays: function () {
        //             //     return [
        //             //         trayWithKids([flight.card('mad-tfs'), flight.card('tfs-mad'),], 30, 0)
        //             //     ]
        //             // },
        //         },
        //     ],
        // },
    ],
    load: function () {
        // removeCookie('focus')
        if (!getCookie('focus')) setCookie('focus', 'default', 1)
    },
    set: function (k) {
        setCookie('focus', k, 1)
        location.reload()
    },
    get: function () {
        return focusDict[getCookie('focus')]
    },
    apps: function () {
        let apps = []
        for (const tray of focus.data) for (const item of tray.data) apps.push({
            name: item.name,
            trigger: function () { item.trigger() },
            desc: item.desc,
            icon: item.icon,
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