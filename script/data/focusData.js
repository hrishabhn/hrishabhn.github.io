let focusData = [
    {
        'default': {
            name: 'Default',
            desc: 'No focus selected',
            thumb: thumbData['user'],
            icon: SFSymbols.person.fill,
            style: 'secondary',
            apps: appData['main'],
            work: false,
            distract: false,
            // trays: function () {
            //     return [
            //         focusTray(),
            //         defaultDash(focusApps(),'Focus Modes','cyan'),
            //         searchAppsRow(searchApps('', appData['notion']), 'Notion'),
            //     ]
            // },
        },
        'watch': {
            name: 'Watch',
            desc: 'TV & Movies',
            thumb: thumbData['tv'],
            icon: SFSymbols.tv.fill,
            style: 'secondary',
            apps: appData['video'],
            work: false,
            distract: true,
            widgets: function () {
                return [
                    widgets.media.card(movieData[0][0], 'movie'),
                    widgets.media.card(movieData[0][1], 'movie'),
                    widgets.media.card(movieData[0][2], 'movie'),
                    widgets.media.card(movieData[0][3], 'movie'),
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
                    movies.rows[4].elem.oldSmall,
                    movies.rows[5].elem.oldSmall,
                    movies.rows[6].elem.smart,
                    movies.rows[7].elem.oldSmall,
                    movies.rows[8].elem.oldSmall,
                    movies.rows[9].elem.big,
                    movies.rows[10].elem.big,
                    movies.rows[10].elem.oldBig,
                ]
            },
        },
        'read': {
            name: 'Read',
            desc: 'Books & News',
            thumb: thumbData['book'],
            icon: SFSymbols.book.fill,
            style: 'secondary',
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
        'listen': {
            name: 'Listen',
            desc: 'Books & Audiobooks',
            thumb: thumbData['pod'],
            icon: SFSymbols.headphones,
            style: 'secondary',
            apps: appData['listen'],
            work: false,
            distract: false,
            trays: function () {
                return [
                    pods.data[0].elem,
                    pods.data[1].elem,
                    pods.data[2].elem,
                    pods.data[3].elem,
                    pods.data[4].elem,
                ]
            },
        },
    },
    {
        'sail': {
            name: 'SAIL',
            desc: 'Study Abroad Course',
            thumb: thumbData['globe'],
            icon: SFSymbols.globe,
            style: 'secondary',
            apps: appData['sail'],
            work: true,
            distract: false,
        },
        'indorg': {
            name: 'Industrial Organisation',
            desc: '13186',
            thumb: thumbData['finance'],
            icon: SFSymbols.chart.xyaxis.line.fill,
            style: 'secondary',
            apps: appData['indorg'],
            work: true,
            distract: false,
        },
        'finecon': {
            name: 'Financial Economics',
            desc: '13648',
            thumb: thumbData['money'],
            icon: SFSymbols.dollarsign.circle.fill,
            style: 'secondary',
            apps: appData['finecon'],
            work: true,
            distract: false,
        },
        'manage': {
            name: 'Engineering Management',
            desc: '14197',
            thumb: thumbData['work'],
            icon: SFSymbols.briefcase.fill,
            style: 'secondary',
            apps: appData['manage'],
            work: true,
            distract: false,
        },
        'controls': {
            name: 'Control Engineering',
            desc: '15514',
            thumb: thumbData['calculus'],
            icon: SFSymbols.florinsign.circle.fill,
            style: 'secondary',
            apps: appData['controls'],
            work: true,
            distract: false,
        },
    },
    {
        'travel': {
            name: 'Travel',
            desc: 'Flights & Hotels',
            thumb: thumbData['plane'],
            icon: SFSymbols.airplane,
            style: 'secondary',
            apps: appData['travel'],
            work: false,
            distract: false,
            // trays: function () {
            //     return [
            //         flightDetailCard('mad-lhr'),
            //         flightDetailCard('lhr-mad'),
            //     ]
            // },
        },
        'workout': {
            name: 'Workout',
            desc: 'Routines & Apps',
            thumb: thumbData['gym'],
            icon: SFSymbols.calendar,
            style: 'secondary',
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
    },
]

// add trigger function to focusData
for (let i = 0; i < focusData.length; i++) {
    for (const focus in focusData[i]) {
        focusData[i][focus].trigger = function () { setFocus(`${i}-${focus}`) }
    }
}





// const focusElem = document.getElementById('focus')
// focusElem.onclick = function () { removeCookie('focus') }

function focusLoad() {
    if (!getCookie('focus')) {
        setCookie('focus', '0-default', 1)
    }
}

function setFocus(name) {
    setCookie('focus', name, 1)
    location.reload()
}

function getFocus() {
    let index = getCookie('focus').split('-')[0]
    let name = getCookie('focus').split('-')[1]

    return focusData[index][name]
}


function focusApps() {
    let apps = []

    for (let i = 0; i < focusData.length; i++) {
        for (const focus in focusData[i]) {
            let focusItemData = focusData[i][focus]

            let data = {
                name: focusItemData.name,
                trigger: function () { setFocus(`${i}-${focus}`) },
                desc: focusItemData.desc,
                thumb: focusItemData.thumb,
                style: focusItemData.style,
                distract: focusItemData.distract,
            }

            apps.push(data)
        }

    }

    return apps
}

function focusTray() {
    return searchAppsRow(searchApps('', focusApps()), null)
}

function focusMenuData() {
    let focusMenuData = []
    for (const tray of focusData) {
        let focusMenuTray = []

        for (const item in tray) {
            focusMenuTray.push({
                type: 'icon',
                name: tray[item].name,
                icon: tray[item].icon,
                trigger: function () { tray[item].trigger() },
                distract: tray[item].distract,
            })
        }
        focusMenuData.push(focusMenuTray)
    }
    return focusMenuData
}